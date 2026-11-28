"""Rebuild the illustrative motor mesh in the Blender Python runtime.
Run blender -b -t 2 --python tools/build_pump_motor.py from the repository root.
The local origin is the motor base; length units are meters, export Y-up.
"""
import bpy
import json
import base64
import struct
import math
from pathlib import Path
from mathutils import Vector

bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete(use_global=False)
bpy.context.scene.unit_settings.system = 'METRIC'
parts = []

def add_material(name, color, roughness, metalness):
    mat = bpy.data.materials.new(name)
    mat.diffuse_color = (*color, 1)
    mat.use_nodes = True
    bsdf = mat.node_tree.nodes.get('Principled BSDF')
    bsdf.inputs['Base Color'].default_value = (*color, 1)
    bsdf.inputs['Metallic'].default_value = metalness
    bsdf.inputs['Roughness'].default_value = roughness
    return mat

materials = {
    'body': add_material('Coated iron', (.15,.30,.34),.42,.24),
    'steel': add_material('Machined metal', (.32,.41,.44),.28,.72),
    'rim': add_material('Protective collar', (.09,.15,.19),.49,.35),
}

def finish(role, bevel, smooth=False):
    ob = bpy.context.object
    ob.data.materials.append(materials[role])
    if bevel:
        b = ob.modifiers.new('Rounded manufactured edges','BEVEL')
        b.width = bevel
        b.segments = 2
    for p in ob.data.polygons:
        p.use_smooth = smooth and len(p.vertices)==4
    parts.append((ob,role))
    return ob

def cyl(r, low, high, role, bevel=.006, x=0, y=0):
    bpy.ops.mesh.primitive_cylinder_add(vertices=24 if r>.05 else 12, radius=r, depth=high-low, location=(x,y,(low+high)/2))
    return finish(role, bevel, True)

def box(location, scale, rotation, role):
    bpy.ops.mesh.primitive_cube_add(size=1, location=location, rotation=(0,0,rotation))
    ob=bpy.context.object
    ob.scale=scale
    bpy.ops.object.transform_apply(location=False,rotation=False,scale=True)
    return finish(role,.003)

cyl(.204,0,.345,'body',.009)
cyl(.216,.345,.399,'rim',.005)
cyl(.185,.399,.477,'body',.007)
cyl(.150,.476,.555,'body',.014)
# Small cast ribs and bolted top collar; stay inside the modeled motor envelope.
for i in range(12):
    a=2*math.pi*i/12
    box((.201*math.cos(a),.201*math.sin(a),.17),(.029,.021,.29),a,'body')
for i in range(8):
    a=2*math.pi*i/8
    cyl(.018,.392,.411,'steel',.002,.179*math.cos(a),.179*math.sin(a))

bpy.context.view_layer.update()
result={k:{'p':[],'n':[]} for k in materials}
for ob,role in parts:
    ev=ob.evaluated_get(bpy.context.evaluated_depsgraph_get())
    mesh=ev.to_mesh()
    mesh.calc_loop_triangles()
    rotation=ob.matrix_world.to_3x3().inverted().transposed()
    def y_up(v): return (v.x,v.z,-v.y)
    for tri in mesh.loop_triangles:
        for loop in tri.loops:
            vi=mesh.loops[loop].vertex_index
            p=ob.matrix_world @ mesh.vertices[vi].co
            normal=(rotation @ mesh.corner_normals[loop].vector).normalized()
            result[role]['p'].extend(round(v,5) for v in y_up(p))
            result[role]['n'].extend(round(v,5) for v in y_up(normal))
    ev.to_mesh_clear()
# Indexed, quantized geometry keeps the generated asset small enough for web delivery.
for role, data in list(result.items()):
    indexes, vertices, normals, seen = [], [], [], {}
    for i in range(0,len(data['p']),3):
        p=tuple(round(v*10000) for v in data['p'][i:i+3])
        n=tuple(round(v*32767) for v in data['n'][i:i+3])
        key=p+n
        if key not in seen:
            seen[key]=len(vertices)//3
            vertices.extend(p); normals.extend(n)
        indexes.append(seen[key])
    def encode(values, fmt): return base64.b64encode(struct.pack('<'+fmt*len(values),*values)).decode('ascii')
    result[role]={'p':encode(vertices,'h'),'n':encode(normals,'h'),'i':encode(indexes,'H')}
path=Path(__file__).resolve().parents[1]/'3d'/'assets'/'pump-motor.json'
path.write_text(json.dumps(result,separators=(',',':'))+'\n')
print('PUMP_MOTOR',path.stat().st_size,'bytes')
