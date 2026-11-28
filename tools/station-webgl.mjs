import {
  WebGLRenderer, Scene, OrthographicCamera, HemisphereLight, DirectionalLight, AmbientLight,
  Mesh, MeshStandardMaterial, MeshBasicMaterial, BufferGeometry, Float32BufferAttribute,
  LineSegments, LineBasicMaterial, CylinderGeometry, BoxGeometry, TorusGeometry,
  Vector3, Quaternion, Matrix4, DoubleSide, Color, PCFShadowMap, ACESFilmicToneMapping,
  SRGBColorSpace, PMREMGenerator, ShapeUtils, Vector2, DataTexture, RGBAFormat, RepeatWrapping, LinearFilter, LinearMipmapLinearFilter
} from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import pumpMotor from '../3d/assets/pump-motor.json';

const up = new Vector3(0,1,0);
const vertex = new Vector3();
const normal = new Vector3();
const rot = new Quaternion();
const transform = new Matrix4();
const scale = new Vector3();
const center = new Vector3();
const delta = new Vector3();
function unpack(s, signed) {
  const data = Uint8Array.from(atob(s), c => c.charCodeAt(0));
  return signed ? new Int16Array(data.buffer) : new Uint16Array(data.buffer);
}
const motors = Object.fromEntries(Object.entries(pumpMotor).map(([role, d]) => [role, {
  p: unpack(d.p,true), n: unpack(d.n,true), i: unpack(d.i,false)
}]));
const units = new Map();
function unit(type, n=0) {
  const key = type+'|'+n;
  if (!units.has(key)) {
    let g = type==='box' ? new BoxGeometry(1,1,1) : type==='ring' ? new TorusGeometry(1,0.08,8,n) : new CylinderGeometry(1,1,1,n,1,false);
    if (g.index) { const flat=g.toNonIndexed(); g.dispose(); g=flat; }
    units.set(key, g);
  }
  return units.get(key);
}
function addTransformed(g, position, quaternion, factors, P, N) {
  transform.compose(position, quaternion, factors);
  const p=g.attributes.position, n=g.attributes.normal;
  for (let i=0; i<p.count; i++) {
    vertex.fromBufferAttribute(p,i).applyMatrix4(transform);
    normal.fromBufferAttribute(n,i).divide(factors).applyQuaternion(quaternion).normalize();
    P.push(vertex.x,vertex.y,vertex.z); N.push(normal.x,normal.y,normal.z);
  }
}
function triangle(a,b,c,P,N) {
  const ux=b[0]-a[0],uy=b[1]-a[1],uz=b[2]-a[2];
  const vx=c[0]-a[0],vy=c[1]-a[1],vz=c[2]-a[2];
  const nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;
  const length=Math.hypot(nx,ny,nz);
  if(length<1e-9 || !Number.isFinite(length)) return;
  P.push(...a,...b,...c);
  for(let i=0;i<3;i++) N.push(nx/length,ny/length,nz/length);
}
function polygon(points,P,N) {
  if(points.length<3) return;
  // Most source panels are convex quads; triangulate longer cutaway outlines in their own plane.
  if(points.length<=4) { for(let i=1;i<points.length-1;i++) triangle(points[0],points[i],points[i+1],P,N); return; }
  const a=new Vector3(...points[0]), e=new Vector3(...points[1]).sub(a).normalize();
  let axis=null;
  for(let i=2;i<points.length;i++) {
    const v=new Vector3(...points[i]).sub(a); const cross=new Vector3().crossVectors(e,v);
    if(cross.lengthSq()>1e-10) { axis=cross.normalize().cross(e); break; }
  }
  if(!axis) return;
  const projected=points.map(q=>{const v=new Vector3(...q).sub(a);return new Vector2(v.dot(e),v.dot(axis));});
  for(const [i,j,k] of ShapeUtils.triangulateShape(projected,[])) triangle(points[i],points[j],points[k],P,N);
}
const coated=new Set(['#226568','#2e7272','#317776','#28696b','#319c91','#4e7283','#bd5b58','#d4a654','#46879a','#52848b','#597d8d','#7898a6']);
const steel=new Set(['#9bb0ad','#354f60','#c4d2d1','#a5babb','#a1afb2','#91a9a2','#a4b7af','#b9c6bb','#93a49e','#b2c2b6','#b8d2c8','#d4d7c5','#b5c6b5']);
const liquids=new Set(['#135d73','#2296ae','#5eead4','#327f8a']);
const roughSurface=new Set(['#969f9c','#9ba09a','#b2b3a9','#58696b','#495a5b','#c2c3af','#777d72','#8d8372','#726959','#81725f','#695d4f','#4c514d','#746f5e','#acb0a2','#837968','#7a7360','#837862','#aebcbf','#819aa3','#d8d8c7','#8e9ea2','#c2bdac']);
// Seamless fine mineral grain, generated deterministically in the browser.
const grainResolution=128, grainPixels=new Uint8Array(grainResolution*grainResolution*4);
let randomSeed=517;
function random(){randomSeed=(Math.imul(1664525,randomSeed)+1013904223)>>>0;return randomSeed/4294967296;}
const coarse=Array.from({length:64},random);
function mottled(x,y){
  const u=x/16,v=y/16,ix=Math.floor(u),iy=Math.floor(v),fx=u-ix,fy=v-iy;
  const smooth=t=>t*t*(3-2*t),a=smooth(fx),b=smooth(fy);
  const value=(i,j)=>coarse[(j%8)*8+i%8];
  return (value(ix,iy)*(1-a)+value(ix+1,iy)*a)*(1-b)+(value(ix,iy+1)*(1-a)+value(ix+1,iy+1)*a)*b;
}
for(let y=0;y<grainResolution;y++)for(let x=0;x<grainResolution;x++){
  const v=Math.round(236+(random()-.5)*17+(mottled(x,y)-.5)*15);
  const i=(y*grainResolution+x)*4;grainPixels[i]=grainPixels[i+1]=grainPixels[i+2]=v;grainPixels[i+3]=255;
}
const grain=new DataTexture(grainPixels,grainResolution,grainResolution,RGBAFormat);
grain.colorSpace=SRGBColorSpace;grain.wrapS=grain.wrapT=RepeatWrapping;
grain.magFilter=LinearFilter;grain.minFilter=LinearMipmapLinearFilter;grain.generateMipmaps=true;grain.needsUpdate=true;
function assignUV(g,P,N){
  const uv=[];
  for(let i=0;i<P.length;i+=3){
    const x=P[i],y=P[i+1],z=P[i+2],nx=Math.abs(N[i]),ny=Math.abs(N[i+1]),nz=Math.abs(N[i+2]);
    if(ny>=nx&&ny>=nz)uv.push(x*1.7,z*1.7);
    else if(nx>=nz)uv.push(z*1.7,y*1.7);
    else uv.push(x*1.7,y*1.7);
  }
  g.setAttribute('uv',new Float32BufferAttribute(uv,2));
}
function radialPolygon(points,axis,axisCenter,P,N){
  const start=P.length;polygon(points,P,N);
  for(let i=start;i<P.length;i+=3){
    let x=axis==='x'?0:P[i]-axisCenter[0],y=axis==='x'?P[i+1]-axisCenter[0]:0,z=P[i+2]-axisCenter[1];
    const length=Math.hypot(x,y,z)||1;
    const direction=x*N[i]+y*N[i+1]+z*N[i+2]<0?-1:1;
    N[i]=direction*x/length;N[i+1]=direction*y/length;N[i+2]=direction*z/length;
  }
}
function colorStyle(raw) {
  const c = raw.toLowerCase();
  const match = c.match(/^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)(?:\s*,\s*([\d.]+))?\s*\)$/);
  const color = match ? new Color().setRGB(+match[1]/255,+match[2]/255,+match[3]/255,SRGBColorSpace) : new Color(c);
  return {color,opacity:match&&match[4]!==undefined? Number(match[4]):1};
}
function material(raw,isLine) {
  const {color,opacity}=colorStyle(raw), key=raw.toLowerCase();
  if(isLine) return new LineBasicMaterial({color,opacity,transparent:opacity<1,depthWrite:false,toneMapped:false});
  const isWater=liquids.has(key)||opacity<1;
  const isPaint=coated.has(key),isSteel=steel.has(key);
  // Painted steel is subtly reflective; oxidized concrete and soils remain matte.
  if(['#226568','#2e7272','#317776','#28696b'].includes(key)) color.set('#185b62').lerp(color,.25);
  if(key==='#5eead4')color.set('#42aeb8');
  if(key==='#58696b')color.set('#3b4a4d');
  return new MeshStandardMaterial({color,
    roughness:isWater?.24:isPaint?.36:isSteel?.30:.88,
    map:roughSurface.has(key)?grain:null,
    metalness:isWater?.08:isPaint?.30:isSteel?.63:.015,
    envMapIntensity:isWater?.83:isPaint?.72:isSteel?.95:.34,
    side:DoubleSide,transparent:opacity<1,opacity,
    depthWrite:opacity>=1,polygonOffset: false,
  });
}

function makeViewport(Base, canvas, drawScene, opts={}) {
  let renderer;
  try {
    renderer=new WebGLRenderer({antialias:true,alpha:true,preserveDrawingBuffer:!!opts.export, powerPreference:'high-performance'});
  } catch (error) {
    console.warn('Station WebGL unavailable, using classic renderer.',error.message);
    canvas.dataset.renderEngine='classic';
    return new Base(canvas,drawScene);
  }
  class StationWebGLViewport extends Base {
    constructor() {
      super(canvas,drawScene);
      Object.assign(this.presets.well,{target:[-8.65,-3.0,0],height:13.4,width:13.8});
      Object.assign(this.presets.outlet,{target:[7.7,1.8,3.1],height:12.2});
      this.renderer=renderer;
      this.outputCanvas=renderer.domElement;
      this.outputCanvas.className='station-webgl-surface';
      this.outputCanvas.setAttribute('aria-hidden','true');
      this.outputCanvas.style.pointerEvents='none';
      if(!opts.export) canvas.before(this.outputCanvas);
      canvas.dataset.renderEngine='webgl';
      renderer.setClearColor(0x000000,0);
      renderer.outputColorSpace=SRGBColorSpace;
      renderer.toneMapping=ACESFilmicToneMapping;
      renderer.toneMappingExposure=0.89;
      renderer.shadowMap.enabled=true;
      renderer.shadowMap.type=PCFShadowMap;
      renderer.shadowMap.autoUpdate=false;
      this.scene=new Scene();
      this.camera=new OrthographicCamera(-20,20,10,-10,.1,160);
      this.batches=new Map();
      this.pending=new Map();
      this.camera.up.set(0,1,0);
      const hemi=new HemisphereLight(0xe3f2ff,0x7b6850,.87);
      const sun=new DirectionalLight(0xffefd5,2.25);
      sun.position.set(-15,32,27); sun.target.position.set(0,-1,0);
      sun.castShadow=true;
      Object.assign(sun.shadow.camera,{left:-26,right:26,top:19,bottom:-19,near:1,far:100});
      sun.shadow.camera.updateProjectionMatrix();
      sun.shadow.mapSize.set(2048,2048); sun.shadow.normalBias=.026; sun.shadow.bias=-.00012;
      sun.shadow.radius=2;
      const fill=new DirectionalLight(0xb3d7ff,.66); fill.position.set(16,10,-18);
      const soft=new AmbientLight(0xc2def0,.15);
      this.scene.add(hemi,sun,sun.target,fill,soft);
      this.sun=sun;
      const room=new RoomEnvironment();
      const pmrem = new PMREMGenerator(renderer);
      this.environmentTarget=pmrem.fromScene(room,.12);
      this.scene.environment=this.environmentTarget.texture;
      this.scene.environmentIntensity=.65;
      pmrem.dispose(); room.dispose();
      this.renderGeometry={
        face:(p,c)=>this.add(c,'face',p, (P,N)=>polygon(p,P,N)),
        radialFace:(p,c,axis,loc)=>this.add(c,'radialFace',[p,axis,loc],(P,N)=>radialPolygon(p,axis,loc,P,N)),
        box:(x,y,z,w,h,d,c)=> {
          if(w<=0||h<=0||d<=0) return;
          this.add(c,'box',[x,y,z,w,h,d],(P,N)=>addTransformed(unit('box'),center.set(x,y,z),rot.identity(),scale.set(w,h,d),P,N));
        },
        cyl:(x,y,z,r,h,c,n=16)=>this.addCylinder([x,y,z],[x,y+h,z],r,c,n),
        pipe:(p,r,c,n=8)=>{for(let i=1;i<p.length;i++) this.addCylinder(p[i-1],p[i],r,c,n);},
        ring:(x,y,z,r,t,c,n=24)=>this.addRing(x,y,z,r,t,c,n),
        line:(p,c,w=1)=>this.add(c,'line',p,(P)=>{for(let i=1;i<p.length;i++) P.push(...p[i-1],...p[i]);}),
        flowing:(p,c)=>this.flows.push({p,c}),
        shadow:()=>{},
        glow:(x,y,z,r,c,a=.45)=>this.glows.push({p:[x,y,z],r,c,a}),
        label:(x,y,z,str,key)=>this.captions.push({p:[x,y,z],str,key}),
        pumpMotor:(x,y,z,c,steelColor)=>this.addMotor(x,y,z,c,steelColor),
      };
      this.contextLost=false;
      this.outputCanvas.addEventListener('webglcontextlost',e=>{e.preventDefault();this.contextLost=true;this.fallback();this.invalidate();});
      this.outputCanvas.addEventListener('webglcontextrestored',()=>{this.contextLost=false;this.outputCanvas.hidden=false;canvas.dataset.renderEngine='webgl';renderer.shadowMap.needsUpdate=true;this.invalidate();});
    }
    fallback() {
      this.outputCanvas.hidden=true;
      this.canvas.dataset.renderEngine='classic';
    }
    add(color,kind,args,build) {
      const key=(kind==='line'?'line:':'mesh:')+color;
      let batch=this.pending.get(key);
      if(!batch) {batch={color,line:kind==='line',items:[]};this.pending.set(key,batch);}
      batch.items.push({signature:kind+JSON.stringify(args),build});
    }
    addCylinder(a,b,r,c,n) {
      if(!(r>0) || a.every((v,i)=>Math.abs(v-b[i])<.00005)) return;
      n=Math.max(16,Math.min(48,Math.round(n*2)));
      this.add(c,'cyl',[a,b,r,n],(P,N)=>{
        delta.set(b[0]-a[0],b[1]-a[1],b[2]-a[2]);
        const length=delta.length();
        rot.setFromUnitVectors(up,delta.multiplyScalar(1/length));
        center.set((a[0]+b[0])/2,(a[1]+b[1])/2,(a[2]+b[2])/2);
        addTransformed(unit('cylinder',n),center,rot,scale.set(r,length,r),P,N);
      });
    }
    addRing(x,y,z,r,t,c,n) {
      if(r<=0||t<=0) return;
      n=Math.max(24,Math.min(80,Math.round(n*2)));
      this.add(c,'ring',[x,y,z,r,t,n],(P,N)=>{
        const g=new TorusGeometry(r,t,8,n);
        const flat=g.toNonIndexed();g.dispose();
        rot.setFromAxisAngle(new Vector3(1,0,0),Math.PI/2);
        addTransformed(flat,center.set(x,y,z),rot,scale.set(1,1,1),P,N);flat.dispose();
      });
    }
    addMotor(x,y,z,c,steelColor) {
      for(const [role,mesh] of Object.entries(motors)) {
        const color=role==='body'?c:role==='steel'?steelColor:'#354f60';
        this.add(color,'motor',[x,y,z,role],(P,N)=>{
          for(const index of mesh.i){const j=index*3;P.push(x+mesh.p[j]/10000,y+mesh.p[j+1]/10000,z+mesh.p[j+2]/10000);N.push(mesh.n[j]/32767,mesh.n[j+1]/32767,mesh.n[j+2]/32767);}
        });
      }
    }
    syncBatches() {
      let shadowChanged=false;
      for(const [key,def] of this.pending) {
        const signature=def.items.map(i=>i.signature).join('|');
        const current=this.batches.get(key);
        if(current?.signature===signature) continue;
        const P=[],N=[];
        for(const item of def.items)item.build(P,N);
        if(!P.length) {if(current){this.scene.remove(current.object);current.object.geometry.dispose();current.object.material.dispose();this.batches.delete(key);}continue;}
        const g=new BufferGeometry();g.setAttribute('position',new Float32BufferAttribute(P,3));
        if(!def.line){g.setAttribute('normal',new Float32BufferAttribute(N,3));if(roughSurface.has(def.color.toLowerCase()))assignUV(g,P,N);}
        g.computeBoundingSphere();
        if(current) {current.object.geometry.dispose();current.object.geometry=g;current.signature=signature;if(current.object.castShadow)shadowChanged=true;continue;}
        const mat=material(def.color,def.line);
        const object=def.line?new LineSegments(g,mat):new Mesh(g,mat);
        object.castShadow=!def.line&&!mat.transparent&&!liquids.has(def.color.toLowerCase());object.receiveShadow=!def.line;
        if(object.castShadow)shadowChanged=true;
        this.scene.add(object);this.batches.set(key,{object,signature});
      }
      for(const [key,cur] of this.batches)if(!this.pending.has(key)){
        this.scene.remove(cur.object);cur.object.geometry.dispose();cur.object.material.dispose();
        if(cur.object.castShadow)shadowChanged=true;this.batches.delete(key);
      }
      if(shadowChanged)this.renderer.shadowMap.needsUpdate=true;
    }
    overlay(state) {
      const ctx=this.ctx;
      ctx.clearRect(0,0,this.w,this.h);
      // Flow markers track the same pipe centre lines and simulation time as the classic view.
      for(const {p,c} of this.flows) {
        let length=0; const sections=[];
        for(let i=1;i<p.length;i++){
          const a=p[i-1],b=p[i],l=Math.hypot(b[0]-a[0],b[1]-a[1],b[2]-a[2]);
          if(l<.001)continue;sections.push({a,b,start:length,l});length+=l;
        }
        if(!length)continue;
        const spacing=length/Math.max(1,Math.round(length/1.5));
        const phase=(state.simSeconds*.075)%spacing;
        let i=0;
        for(let d=phase;d<length;d+=spacing){
          while(i<sections.length-1 && d>sections[i].start+sections[i].l)i++;
          const {a,b,start,l}=sections[i],t=(d-start)/l;
          const [x,y]=this.project(a.map((v,axis)=>v+(b[axis]-v)*t));
          const radius=Math.max(1.35,Math.min(3.6,this.scale*.053));
          this.dot(x,y,radius,c,.75);
        }
      }
      for(const {p,r,c,a} of this.glows){const [x,y]=this.project(p);this.dot(x,y,Math.max(1.4,Math.min(7,this.scale*r*.1)),c,a);}
      const compactOverview=state.levels&&state.section&&state.view==='overview'&&this.w<540;
      if(compactOverview)this.captions.push({p:[-9,state.wellLevel,.4],str:'المياه '+state.wellLevel.toFixed(2)+' م',key:{datum:true,color:'#38bdf8',side:'right'}});
      if(this.captions.length)this.drawLabels();
      if(compactOverview)this.captions.pop();
      else if(state.levels&&state.section&&['overview','well','inlet'].includes(state.view))this.drawWellLevelRuler(state);
    }
    dot(x,y,r,c,alpha) {
      const ctx=this.ctx;
      if(x<-20||x>this.w+20||y<-20||y>this.h+20)return;
      ctx.save();ctx.shadowColor=c;ctx.shadowBlur=r*3;ctx.globalAlpha=alpha;
      ctx.fillStyle=c;ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);ctx.fill();
      ctx.shadowBlur=0;ctx.fillStyle='#ffffff';ctx.globalAlpha=.82;ctx.beginPath();ctx.arc(x,y,r*.38,0,Math.PI*2);ctx.fill();ctx.restore();
    }
    draw(state) {
      this.lastState=state;
      if(this.contextLost||this.failed) {super.draw(state);return;}
      this.updateFlight(performance.now());
      if(!this.setupCamera())return;
      try {
        const {w,h,scale,target,eye}=this;
        const dpr=Math.min(2,Math.max(1,this.canvas.width/w));
        if(this.renderSize!==`${w}:${h}:${dpr}`){this.renderer.setPixelRatio(dpr);this.renderer.setSize(w,h,false);this.renderSize=`${w}:${h}:${dpr}`;}
        this.camera.left=-w/2/scale;this.camera.right=w/2/scale;
        this.camera.top=h/2/scale;this.camera.bottom=-h/2/scale;
        this.camera.position.set(target[0]+eye[0]*70,target[1]+eye[1]*70,target[2]+eye[2]*70);
        this.camera.lookAt(...target);this.camera.updateProjectionMatrix();
        // Camera interaction does not rebuild geometry. Changed state only updates affected material batches.
        if(this.renderedState!==state||this.renderedCompact!==(w<540)){
          this.pending.clear();this.flows=[];this.glows=[];this.captions=[];
          this.drawScene(this.renderGeometry,state);this.syncBatches();this.renderedState=state;this.renderedCompact=w<540;
        }
        this.renderer.render(this.scene,this.camera);
        this.overlay(state);
        if(this.flight)this.invalidate();
      }catch(error){console.warn('Station WebGL rendering failed; using classic renderer.',error);this.failed=true;this.fallback();super.draw(state);}
    }
    destroy() {
      super.destroy();
      for(const {object} of this.batches.values()){object.geometry.dispose();object.material.dispose();}
      this.batches.clear();this.environmentTarget.dispose();this.sun.shadow.dispose();this.renderer.dispose();this.outputCanvas.remove();
    }
  }
  try {return new StationWebGLViewport();}
  catch(error){renderer.dispose();renderer.domElement.remove();canvas.dataset.renderEngine='classic';console.warn('Station 3D initialization failed',error);return new Base(canvas,drawScene);}
}
window.createStationWebGLViewport=makeViewport;
