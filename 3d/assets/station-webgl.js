(()=>{var Mc=0,Oo=1,xc=2;var ri=1,Ec=2,Gi=3,zn=0,ye=1,Ke=2,mn=0,Hi=1,Go=2,Ho=3,Qo=4,_c=5;var ai=100,yc=101,Sc=102,Bc=103,bc=104,Cc=200,Tc=201,Ic=202,Fc=203,Yo=204,zo=205,Pc=206,Rc=207,Lc=208,Nc=209,Uc=210,Oc=211,Gc=212,Hc=213,Qc=214,xr=0,Er=1,_r=2,bi=3,yr=4,Sr=5,Br=6,br=7,ea=0,Yc=1,zc=2,nn=0,Wo=1,Vo=2,ko=3,Fs=4,Xo=5,Ko=6,Zo=7;var Jo=300,Wn=301,oi=302,na=303,ia=304,Ps=306,Ci=1e3,cn=1001,Cr=1002,Ee=1003,Wc=1004;var Rs=1005;var ge=1006,sa=1007;var gn=1008;var Oe=1009,qo=1010,jo=1011,Qi=1012,ra=1013,sn=1014,Ze=1015,rn=1016,aa=1017,oa=1018,Yi=1020,$o=35902,tl=35899,el=1021,nl=1022,Ge=1023,An=1026,Vn=1027,la=1028,ca=1029,kn=1030,Aa=1031;var ha=1033,Ls=33776,Ns=33777,Us=33778,Os=33779,da=35840,ua=35841,fa=35842,pa=35843,ma=36196,ga=37492,Da=37496,va=37488,wa=37489,Gs=37490,Ma=37491,xa=37808,Ea=37809,_a=37810,ya=37811,Sa=37812,Ba=37813,ba=37814,Ca=37815,Ta=37816,Ia=37817,Fa=37818,Pa=37819,Ra=37820,La=37821,Na=36492,Ua=36494,Oa=36495,Ga=36283,Ha=36284,Hs=36285,Qa=36286;var ss=2300,Tr=2301,wr=2302,Bo=2303,bo=2400,Co=2401,To=2402;var Vc=3200;var Qs=0,kc=1,Bn="",_e="srgb",rs="srgb-linear",as="linear",Zt="srgb";var Mr=7680;var Xc=519,Kc=512,Zc=513,Jc=514,Ya=515,qc=516,jc=517,za=518,$c=519,tA=35044;var il="300 es",en=2e3,Ti=2001;function nh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ih(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function os(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function eA(){let i=os("canvas");return i.style.display="block",i}var Vl={},Ii=null;function sl(...i){let t="THREE."+i.shift();Ii?Ii("log",t,...i):console.log(t,...i)}function nA(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function bt(...i){i=nA(i);let t="THREE."+i.shift();if(Ii)Ii("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Ct(...i){i=nA(i);let t="THREE."+i.shift();if(Ii)Ii("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ti(...i){let t=i.join(" ");t in Vl||(Vl[t]=!0,bt(...i))}function iA(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var sA={[xr]:Er,[_r]:Br,[yr]:br,[bi]:Sr,[Er]:xr,[Br]:_r,[br]:yr,[Sr]:bi},hn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var no=Math.PI/180,Ir=180/Math.PI;function Ys(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(be[i&255]+be[i>>8&255]+be[i>>16&255]+be[i>>24&255]+"-"+be[t&255]+be[t>>8&255]+"-"+be[t>>16&15|64]+be[t>>24&255]+"-"+be[e&63|128]+be[e>>8&255]+"-"+be[e>>16&255]+be[e>>24&255]+be[n&255]+be[n>>8&255]+be[n>>16&255]+be[n>>24&255]).toLowerCase()}function Yt(i,t,e){return Math.max(t,Math.min(e,i))}function sh(i,t){return(i%t+t)%t}function io(i,t,e){return(1-e)*i+e*t}function Zi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Le(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var cl=class cl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Yt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};cl.prototype.isVector2=!0;var Nt=cl,Xe=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],A=r[a+0],u=r[a+1],m=r[a+2],w=r[a+3];if(f!==w||l!==A||c!==u||h!==m){let p=l*A+c*u+h*m+f*w;p<0&&(A=-A,u=-u,m=-m,w=-w,p=-p);let d=1-o;if(p<.9995){let x=Math.acos(p),B=Math.sin(x);d=Math.sin(d*x)/B,o=Math.sin(o*x)/B,l=l*d+A*o,c=c*d+u*o,h=h*d+m*o,f=f*d+w*o}else{l=l*d+A*o,c=c*d+u*o,h=h*d+m*o,f=f*d+w*o;let x=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=x,c*=x,h*=x,f*=x}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[a],A=r[a+1],u=r[a+2],m=r[a+3];return t[e]=o*m+h*f+l*u-c*A,t[e+1]=l*m+h*A+c*f-o*u,t[e+2]=c*m+h*u+o*A-l*f,t[e+3]=h*m-o*f-l*A-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(r/2),A=l(n/2),u=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=A*h*f+c*u*m,this._y=c*u*f-A*h*m,this._z=c*h*m+A*u*f,this._w=c*h*f-A*u*m;break;case"YXZ":this._x=A*h*f+c*u*m,this._y=c*u*f-A*h*m,this._z=c*h*m-A*u*f,this._w=c*h*f+A*u*m;break;case"ZXY":this._x=A*h*f-c*u*m,this._y=c*u*f+A*h*m,this._z=c*h*m+A*u*f,this._w=c*h*f-A*u*m;break;case"ZYX":this._x=A*h*f-c*u*m,this._y=c*u*f+A*h*m,this._z=c*h*m-A*u*f,this._w=c*h*f+A*u*m;break;case"YZX":this._x=A*h*f+c*u*m,this._y=c*u*f+A*h*m,this._z=c*h*m-A*u*f,this._w=c*h*f-A*u*m;break;case"XZY":this._x=A*h*f-c*u*m,this._y=c*u*f-A*h*m,this._z=c*h*m+A*u*f,this._w=c*h*f+A*u*m;break;default:bt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],A=n+o+f;if(A>0){let u=.5/Math.sqrt(A+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(a-s)*u}else if(n>o&&n>f){let u=2*Math.sqrt(1+n-o-f);this._w=(h-l)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+c)/u}else if(o>f){let u=2*Math.sqrt(1+o-n-f);this._w=(r-c)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+f-n-o);this._w=(a-s)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Yt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Al=class Al{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(kl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(kl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return so.copy(this).projectOnVector(t),this.sub(so)}reflect(t){return this.sub(so.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Yt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Al.prototype.isVector3=!0;var L=Al,so=new L,kl=new Xe,hl=class hl{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],A=n[2],u=n[5],m=n[8],w=s[0],p=s[3],d=s[6],x=s[1],B=s[4],M=s[7],E=s[2],_=s[5],b=s[8];return r[0]=a*w+o*x+l*E,r[3]=a*p+o*B+l*_,r[6]=a*d+o*M+l*b,r[1]=c*w+h*x+f*E,r[4]=c*p+h*B+f*_,r[7]=c*d+h*M+f*b,r[2]=A*w+u*x+m*E,r[5]=A*p+u*B+m*_,r[8]=A*d+u*M+m*b,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*a-o*c,A=o*l-h*r,u=c*r-a*l,m=e*f+n*A+s*u;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let w=1/m;return t[0]=f*w,t[1]=(s*c-h*n)*w,t[2]=(o*n-s*a)*w,t[3]=A*w,t[4]=(h*e-s*l)*w,t[5]=(s*r-o*e)*w,t[6]=u*w,t[7]=(n*l-c*e)*w,t[8]=(a*e-n*r)*w,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return ti("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ro.makeScale(t,e)),this}rotate(t){return ti("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ro.makeRotation(-t)),this}translate(t,e){return ti("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ro.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};hl.prototype.isMatrix3=!0;var Tt=hl,ro=new Tt,Xl=new Tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kl=new Tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rh(){let i={enabled:!0,workingColorSpace:rs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Zt&&(s.r=yn(s.r),s.g=yn(s.g),s.b=yn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Zt&&(s.r=Bi(s.r),s.g=Bi(s.g),s.b=Bi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Bn?as:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ti("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ti("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[rs]:{primaries:t,whitePoint:n,transfer:as,toXYZ:Xl,fromXYZ:Kl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:_e},outputColorSpaceConfig:{drawingBufferColorSpace:_e}},[_e]:{primaries:t,whitePoint:n,transfer:Zt,toXYZ:Xl,fromXYZ:Kl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:_e}}}),i}var Qt=rh();function yn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Bi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ui,Fr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ui===void 0&&(ui=os("canvas")),ui.width=t.width,ui.height=t.height;let s=ui.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ui}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=os("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=yn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(yn(e[n]/255)*255):e[n]=yn(e[n]);return{data:e,width:t.width,height:t.height}}else return bt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},ah=0,Fi=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ah++}),this.uuid=Ys(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ao(s[a].image)):r.push(ao(s[a]))}else r=ao(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ao(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Fr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(bt("Texture: Unable to serialize Texture."),{})}var oh=0,oo=new L,Ne=class i extends hn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=cn,s=cn,r=ge,a=gn,o=Ge,l=Oe,c=i.DEFAULT_ANISOTROPY,h=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oh++}),this.uuid=Ys(),this.name="",this.source=new Fi(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(oo).x}get height(){return this.source.getSize(oo).y}get depth(){return this.source.getSize(oo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){bt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){bt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Jo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ci:t.x=t.x-Math.floor(t.x);break;case cn:t.x=t.x<0?0:1;break;case Cr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ci:t.y=t.y-Math.floor(t.y);break;case cn:t.y=t.y<0?0:1;break;case Cr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ne.DEFAULT_IMAGE=null;Ne.DEFAULT_MAPPING=Jo;Ne.DEFAULT_ANISOTROPY=1;var dl=class dl{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],f=l[8],A=l[1],u=l[5],m=l[9],w=l[2],p=l[6],d=l[10];if(Math.abs(h-A)<.01&&Math.abs(f-w)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+A)<.1&&Math.abs(f+w)<.1&&Math.abs(m+p)<.1&&Math.abs(c+u+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let B=(c+1)/2,M=(u+1)/2,E=(d+1)/2,_=(h+A)/4,b=(f+w)/4,D=(m+p)/4;return B>M&&B>E?B<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(B),s=_/n,r=b/n):M>E?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=_/s,r=D/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=b/r,s=D/r),this.set(n,s,r,e),this}let x=Math.sqrt((p-m)*(p-m)+(f-w)*(f-w)+(A-h)*(A-h));return Math.abs(x)<.001&&(x=1),this.x=(p-m)/x,this.y=(f-w)/x,this.z=(A-h)/x,this.w=Math.acos((c+u+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this.w=Yt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this.w=Yt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};dl.prototype.isVector4=!0;var le=dl,Pr=class extends hn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ge,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Ne(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:ge,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Fi(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ue=class extends Pr{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ls=class extends Ne{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ee,this.minFilter=Ee,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Rr=class extends Ne{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ee,this.minFilter=Ee,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ta=class ta{constructor(t,e,n,s,r,a,o,l,c,h,f,A,u,m,w,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,f,A,u,m,w,p)}set(t,e,n,s,r,a,o,l,c,h,f,A,u,m,w,p){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=f,d[14]=A,d[3]=u,d[7]=m,d[11]=w,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ta().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/fi.setFromMatrixColumn(t,0).length(),r=1/fi.setFromMatrixColumn(t,1).length(),a=1/fi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let A=a*h,u=a*f,m=o*h,w=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=u+m*c,e[5]=A-w*c,e[9]=-o*l,e[2]=w-A*c,e[6]=m+u*c,e[10]=a*l}else if(t.order==="YXZ"){let A=l*h,u=l*f,m=c*h,w=c*f;e[0]=A+w*o,e[4]=m*o-u,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=u*o-m,e[6]=w+A*o,e[10]=a*l}else if(t.order==="ZXY"){let A=l*h,u=l*f,m=c*h,w=c*f;e[0]=A-w*o,e[4]=-a*f,e[8]=m+u*o,e[1]=u+m*o,e[5]=a*h,e[9]=w-A*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let A=a*h,u=a*f,m=o*h,w=o*f;e[0]=l*h,e[4]=m*c-u,e[8]=A*c+w,e[1]=l*f,e[5]=w*c+A,e[9]=u*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let A=a*l,u=a*c,m=o*l,w=o*c;e[0]=l*h,e[4]=w-A*f,e[8]=m*f+u,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=u*f+m,e[10]=A-w*f}else if(t.order==="XZY"){let A=a*l,u=a*c,m=o*l,w=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=A*f+w,e[5]=a*h,e[9]=u*f-m,e[2]=m*f-u,e[6]=o*h,e[10]=w*f+A}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(lh,t,ch)}lookAt(t,e,n){let s=this.elements;return He.subVectors(t,e),He.lengthSq()===0&&(He.z=1),He.normalize(),In.crossVectors(n,He),In.lengthSq()===0&&(Math.abs(n.z)===1?He.x+=1e-4:He.z+=1e-4,He.normalize(),In.crossVectors(n,He)),In.normalize(),Js.crossVectors(He,In),s[0]=In.x,s[4]=Js.x,s[8]=He.x,s[1]=In.y,s[5]=Js.y,s[9]=He.y,s[2]=In.z,s[6]=Js.z,s[10]=He.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],A=n[9],u=n[13],m=n[2],w=n[6],p=n[10],d=n[14],x=n[3],B=n[7],M=n[11],E=n[15],_=s[0],b=s[4],D=s[8],S=s[12],T=s[1],R=s[5],U=s[9],Q=s[13],F=s[2],Y=s[6],K=s[10],Z=s[14],nt=s[3],V=s[7],$=s[11],et=s[15];return r[0]=a*_+o*T+l*F+c*nt,r[4]=a*b+o*R+l*Y+c*V,r[8]=a*D+o*U+l*K+c*$,r[12]=a*S+o*Q+l*Z+c*et,r[1]=h*_+f*T+A*F+u*nt,r[5]=h*b+f*R+A*Y+u*V,r[9]=h*D+f*U+A*K+u*$,r[13]=h*S+f*Q+A*Z+u*et,r[2]=m*_+w*T+p*F+d*nt,r[6]=m*b+w*R+p*Y+d*V,r[10]=m*D+w*U+p*K+d*$,r[14]=m*S+w*Q+p*Z+d*et,r[3]=x*_+B*T+M*F+E*nt,r[7]=x*b+B*R+M*Y+E*V,r[11]=x*D+B*U+M*K+E*$,r[15]=x*S+B*Q+M*Z+E*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],A=t[10],u=t[14],m=t[3],w=t[7],p=t[11],d=t[15],x=l*u-c*A,B=o*u-c*f,M=o*A-l*f,E=a*u-c*h,_=a*A-l*h,b=a*f-o*h;return e*(w*x-p*B+d*M)-n*(m*x-p*E+d*_)+s*(m*B-w*E+d*b)-r*(m*M-w*_+p*b)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],A=t[10],u=t[11],m=t[12],w=t[13],p=t[14],d=t[15],x=e*o-n*a,B=e*l-s*a,M=e*c-r*a,E=n*l-s*o,_=n*c-r*o,b=s*c-r*l,D=h*w-f*m,S=h*p-A*m,T=h*d-u*m,R=f*p-A*w,U=f*d-u*w,Q=A*d-u*p,F=x*Q-B*U+M*R+E*T-_*S+b*D;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Y=1/F;return t[0]=(o*Q-l*U+c*R)*Y,t[1]=(s*U-n*Q-r*R)*Y,t[2]=(w*b-p*_+d*E)*Y,t[3]=(A*_-f*b-u*E)*Y,t[4]=(l*T-a*Q-c*S)*Y,t[5]=(e*Q-s*T+r*S)*Y,t[6]=(p*M-m*b-d*B)*Y,t[7]=(h*b-A*M+u*B)*Y,t[8]=(a*U-o*T+c*D)*Y,t[9]=(n*T-e*U-r*D)*Y,t[10]=(m*_-w*M+d*x)*Y,t[11]=(f*M-h*_-u*x)*Y,t[12]=(o*S-a*R-l*D)*Y,t[13]=(e*R-n*S+s*D)*Y,t[14]=(w*B-m*E-p*x)*Y,t[15]=(h*E-f*B+A*x)*Y,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,f=o+o,A=r*c,u=r*h,m=r*f,w=a*h,p=a*f,d=o*f,x=l*c,B=l*h,M=l*f,E=n.x,_=n.y,b=n.z;return s[0]=(1-(w+d))*E,s[1]=(u+M)*E,s[2]=(m-B)*E,s[3]=0,s[4]=(u-M)*_,s[5]=(1-(A+d))*_,s[6]=(p+x)*_,s[7]=0,s[8]=(m+B)*b,s[9]=(p-x)*b,s[10]=(1-(A+w))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=fi.set(s[0],s[1],s[2]).length(),o=fi.set(s[4],s[5],s[6]).length(),l=fi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),qe.copy(this);let c=1/a,h=1/o,f=1/l;return qe.elements[0]*=c,qe.elements[1]*=c,qe.elements[2]*=c,qe.elements[4]*=h,qe.elements[5]*=h,qe.elements[6]*=h,qe.elements[8]*=f,qe.elements[9]*=f,qe.elements[10]*=f,e.setFromRotationMatrix(qe),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=en,l=!1){let c=this.elements,h=2*r/(e-t),f=2*r/(n-s),A=(e+t)/(e-t),u=(n+s)/(n-s),m,w;if(l)m=r/(a-r),w=a*r/(a-r);else if(o===en)m=-(a+r)/(a-r),w=-2*a*r/(a-r);else if(o===Ti)m=-a/(a-r),w=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=A,c[12]=0,c[1]=0,c[5]=f,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=w,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=en,l=!1){let c=this.elements,h=2/(e-t),f=2/(n-s),A=-(e+t)/(e-t),u=-(n+s)/(n-s),m,w;if(l)m=1/(a-r),w=a/(a-r);else if(o===en)m=-2/(a-r),w=-(a+r)/(a-r);else if(o===Ti)m=-1/(a-r),w=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=A,c[1]=0,c[5]=f,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=m,c[14]=w,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};ta.prototype.isMatrix4=!0;var qt=ta,fi=new L,qe=new qt,lh=new L(0,0,0),ch=new L(1,1,1),In=new L,Js=new L,He=new L,Zl=new qt,Jl=new Xe,dn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],A=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(A,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(A,-1,1)),Math.abs(A)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Yt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(A,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(A,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:bt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Zl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Zl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Jl.setFromEuler(this),this.setFromQuaternion(Jl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};dn.DEFAULT_ORDER="XYZ";var cs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Ah=0,ql=new L,pi=new Xe,wn=new qt,qs=new L,Ji=new L,hh=new L,dh=new Xe,jl=new L(1,0,0),$l=new L(0,1,0),tc=new L(0,0,1),ec={type:"added"},uh={type:"removed"},mi={type:"childadded",child:null},lo={type:"childremoved",child:null},De=class i extends hn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ah++}),this.uuid=Ys(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new L,e=new dn,n=new Xe,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new qt},normalMatrix:{value:new Tt}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return pi.setFromAxisAngle(t,e),this.quaternion.multiply(pi),this}rotateOnWorldAxis(t,e){return pi.setFromAxisAngle(t,e),this.quaternion.premultiply(pi),this}rotateX(t){return this.rotateOnAxis(jl,t)}rotateY(t){return this.rotateOnAxis($l,t)}rotateZ(t){return this.rotateOnAxis(tc,t)}translateOnAxis(t,e){return ql.copy(t).applyQuaternion(this.quaternion),this.position.add(ql.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(jl,t)}translateY(t){return this.translateOnAxis($l,t)}translateZ(t){return this.translateOnAxis(tc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?qs.copy(t):qs.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(Ji,qs,this.up):wn.lookAt(qs,Ji,this.up),this.quaternion.setFromRotationMatrix(wn),s&&(wn.extractRotation(s.matrixWorld),pi.setFromRotationMatrix(wn),this.quaternion.premultiply(pi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ct("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ec),mi.child=t,this.dispatchEvent(mi),mi.child=null):Ct("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(uh),lo.child=t,this.dispatchEvent(lo),lo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(wn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ec),mi.child=t,this.dispatchEvent(mi),mi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ji,t,hh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ji,dh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),A=a(t.skeletons),u=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),A.length>0&&(n.skeletons=A),u.length>0&&(n.animations=u),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};De.DEFAULT_UP=new L(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var $n=class extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}},fh={type:"move"},Pi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $n,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $n,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $n,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let w of t.hand.values()){let p=e.getJointPose(w,n),d=this._getHandJoint(c,w);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],A=h.position.distanceTo(f.position),u=.02,m=.005;c.inputState.pinching&&A>u+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&A<=u-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(fh)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new $n;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},rA={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fn={h:0,s:0,l:0},js={h:0,s:0,l:0};function co(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ft=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=_e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Qt.workingColorSpace){if(t=sh(t,1),e=Yt(e,0,1),n=Yt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=co(a,r,t+1/3),this.g=co(a,r,t),this.b=co(a,r,t-1/3)}return Qt.colorSpaceToWorking(this,s),this}setStyle(t,e=_e){function n(r){r!==void 0&&parseFloat(r)<1&&bt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:bt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);bt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=_e){let n=rA[t.toLowerCase()];return n!==void 0?this.setHex(n,e):bt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=yn(t.r),this.g=yn(t.g),this.b=yn(t.b),this}copyLinearToSRGB(t){return this.r=Bi(t.r),this.g=Bi(t.g),this.b=Bi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=_e){return Qt.workingToColorSpace(Ce.copy(this),t),Math.round(Yt(Ce.r*255,0,255))*65536+Math.round(Yt(Ce.g*255,0,255))*256+Math.round(Yt(Ce.b*255,0,255))}getHexString(t=_e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.workingToColorSpace(Ce.copy(this),e);let n=Ce.r,s=Ce.g,r=Ce.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.workingToColorSpace(Ce.copy(this),e),t.r=Ce.r,t.g=Ce.g,t.b=Ce.b,t}getStyle(t=_e){Qt.workingToColorSpace(Ce.copy(this),t);let e=Ce.r,n=Ce.g,s=Ce.b;return t!==_e?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Fn),this.setHSL(Fn.h+t,Fn.s+e,Fn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Fn),t.getHSL(js);let n=io(Fn.h,js.h,e),s=io(Fn.s,js.s,e),r=io(Fn.l,js.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ce=new Ft;Ft.NAMES=rA;var ei=class extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dn,this.environmentIntensity=1,this.environmentRotation=new dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},je=new L,Mn=new L,Ao=new L,xn=new L,gi=new L,Di=new L,nc=new L,ho=new L,uo=new L,fo=new L,po=new le,mo=new le,go=new le,Nn=class i{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),je.subVectors(t,e),s.cross(je);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){je.subVectors(s,e),Mn.subVectors(n,e),Ao.subVectors(t,e);let a=je.dot(je),o=je.dot(Mn),l=je.dot(Ao),c=Mn.dot(Mn),h=Mn.dot(Ao),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let A=1/f,u=(c*l-o*h)*A,m=(a*h-o*l)*A;return r.set(1-u-m,m,u)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,xn)===null?!1:xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,xn.x),l.addScaledVector(a,xn.y),l.addScaledVector(o,xn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return po.setScalar(0),mo.setScalar(0),go.setScalar(0),po.fromBufferAttribute(t,e),mo.fromBufferAttribute(t,n),go.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(po,r.x),a.addScaledVector(mo,r.y),a.addScaledVector(go,r.z),a}static isFrontFacing(t,e,n,s){return je.subVectors(n,e),Mn.subVectors(t,e),je.cross(Mn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return je.subVectors(this.c,this.b),Mn.subVectors(this.a,this.b),je.cross(Mn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;gi.subVectors(s,n),Di.subVectors(r,n),ho.subVectors(t,n);let l=gi.dot(ho),c=Di.dot(ho);if(l<=0&&c<=0)return e.copy(n);uo.subVectors(t,s);let h=gi.dot(uo),f=Di.dot(uo);if(h>=0&&f<=h)return e.copy(s);let A=l*f-h*c;if(A<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(gi,a);fo.subVectors(t,r);let u=gi.dot(fo),m=Di.dot(fo);if(m>=0&&u<=m)return e.copy(r);let w=u*c-l*m;if(w<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(Di,o);let p=h*m-u*f;if(p<=0&&f-h>=0&&u-m>=0)return nc.subVectors(r,s),o=(f-h)/(f-h+(u-m)),e.copy(s).addScaledVector(nc,o);let d=1/(p+w+A);return a=w*d,o=A*d,e.copy(n).addScaledVector(gi,a).addScaledVector(Di,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},un=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint($e.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint($e.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=$e.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,$e):$e.fromBufferAttribute(r,a),$e.applyMatrix4(t.matrixWorld),this.expandByPoint($e);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),$s.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$s.copy(n.boundingBox)),$s.applyMatrix4(t.matrixWorld),this.union($s)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,$e),$e.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qi),tr.subVectors(this.max,qi),vi.subVectors(t.a,qi),wi.subVectors(t.b,qi),Mi.subVectors(t.c,qi),Pn.subVectors(wi,vi),Rn.subVectors(Mi,wi),Zn.subVectors(vi,Mi);let e=[0,-Pn.z,Pn.y,0,-Rn.z,Rn.y,0,-Zn.z,Zn.y,Pn.z,0,-Pn.x,Rn.z,0,-Rn.x,Zn.z,0,-Zn.x,-Pn.y,Pn.x,0,-Rn.y,Rn.x,0,-Zn.y,Zn.x,0];return!Do(e,vi,wi,Mi,tr)||(e=[1,0,0,0,1,0,0,0,1],!Do(e,vi,wi,Mi,tr))?!1:(er.crossVectors(Pn,Rn),e=[er.x,er.y,er.z],Do(e,vi,wi,Mi,tr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,$e).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize($e).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(En),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},En=[new L,new L,new L,new L,new L,new L,new L,new L],$e=new L,$s=new un,vi=new L,wi=new L,Mi=new L,Pn=new L,Rn=new L,Zn=new L,qi=new L,tr=new L,er=new L,Jn=new L;function Do(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Jn.fromArray(i,r);let o=s.x*Math.abs(Jn.x)+s.y*Math.abs(Jn.y)+s.z*Math.abs(Jn.z),l=t.dot(Jn),c=e.dot(Jn),h=n.dot(Jn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var pe=new L,nr=new Nt,ph=0,Ye=class extends hn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ph++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=tA,this.updateRanges=[],this.gpuType=Ze,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)nr.fromBufferAttribute(this,e),nr.applyMatrix3(t),this.setXY(e,nr.x,nr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Zi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Le(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Zi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Zi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Zi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Zi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),s=Le(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),s=Le(s,this.array),r=Le(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var As=class extends Ye{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var hs=class extends Ye{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var oe=class extends Ye{constructor(t,e,n){super(new Float32Array(t),e,n)}},mh=new un,ji=new L,vo=new L,Sn=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):mh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ji.subVectors(t,this.center);let e=ji.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ji,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(vo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ji.copy(t.center).add(vo)),this.expandByPoint(ji.copy(t.center).sub(vo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},gh=0,ke=new qt,wo=new De,xi=new L,Qe=new un,$i=new un,xe=new L,Pe=class i extends hn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gh++}),this.uuid=Ys(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(nh(t)?hs:As)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Tt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ke.makeRotationFromQuaternion(t),this.applyMatrix4(ke),this}rotateX(t){return ke.makeRotationX(t),this.applyMatrix4(ke),this}rotateY(t){return ke.makeRotationY(t),this.applyMatrix4(ke),this}rotateZ(t){return ke.makeRotationZ(t),this.applyMatrix4(ke),this}translate(t,e,n){return ke.makeTranslation(t,e,n),this.applyMatrix4(ke),this}scale(t,e,n){return ke.makeScale(t,e,n),this.applyMatrix4(ke),this}lookAt(t){return wo.lookAt(t),wo.updateMatrix(),this.applyMatrix4(wo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xi).negate(),this.translate(xi.x,xi.y,xi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new oe(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&bt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new un);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Qe.setFromBufferAttribute(r),this.morphTargetsRelative?(xe.addVectors(this.boundingBox.min,Qe.min),this.boundingBox.expandByPoint(xe),xe.addVectors(this.boundingBox.max,Qe.max),this.boundingBox.expandByPoint(xe)):(this.boundingBox.expandByPoint(Qe.min),this.boundingBox.expandByPoint(Qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(Qe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];$i.setFromBufferAttribute(o),this.morphTargetsRelative?(xe.addVectors(Qe.min,$i.min),Qe.expandByPoint(xe),xe.addVectors(Qe.max,$i.max),Qe.expandByPoint(xe)):(Qe.expandByPoint($i.min),Qe.expandByPoint($i.max))}Qe.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)xe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(xe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)xe.fromBufferAttribute(o,c),l&&(xi.fromBufferAttribute(t,c),xe.add(xi)),s=Math.max(s,n.distanceToSquared(xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ye(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new L,l[D]=new L;let c=new L,h=new L,f=new L,A=new Nt,u=new Nt,m=new Nt,w=new L,p=new L;function d(D,S,T){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,S),f.fromBufferAttribute(n,T),A.fromBufferAttribute(r,D),u.fromBufferAttribute(r,S),m.fromBufferAttribute(r,T),h.sub(c),f.sub(c),u.sub(A),m.sub(A);let R=1/(u.x*m.y-m.x*u.y);isFinite(R)&&(w.copy(h).multiplyScalar(m.y).addScaledVector(f,-u.y).multiplyScalar(R),p.copy(f).multiplyScalar(u.x).addScaledVector(h,-m.x).multiplyScalar(R),o[D].add(w),o[S].add(w),o[T].add(w),l[D].add(p),l[S].add(p),l[T].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let D=0,S=x.length;D<S;++D){let T=x[D],R=T.start,U=T.count;for(let Q=R,F=R+U;Q<F;Q+=3)d(t.getX(Q+0),t.getX(Q+1),t.getX(Q+2))}let B=new L,M=new L,E=new L,_=new L;function b(D){E.fromBufferAttribute(s,D),_.copy(E);let S=o[D];B.copy(S),B.sub(E.multiplyScalar(E.dot(S))).normalize(),M.crossVectors(_,S);let R=M.dot(l[D])<0?-1:1;a.setXYZW(D,B.x,B.y,B.z,R)}for(let D=0,S=x.length;D<S;++D){let T=x[D],R=T.start,U=T.count;for(let Q=R,F=R+U;Q<F;Q+=3)b(t.getX(Q+0)),b(t.getX(Q+1)),b(t.getX(Q+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ye(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let A=0,u=n.count;A<u;A++)n.setXYZ(A,0,0,0);let s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,f=new L;if(t)for(let A=0,u=t.count;A<u;A+=3){let m=t.getX(A+0),w=t.getX(A+1),p=t.getX(A+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,w),a.fromBufferAttribute(e,p),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,w),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(w,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let A=0,u=e.count;A<u;A+=3)s.fromBufferAttribute(e,A+0),r.fromBufferAttribute(e,A+1),a.fromBufferAttribute(e,A+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(A+0,h.x,h.y,h.z),n.setXYZ(A+1,h.x,h.y,h.z),n.setXYZ(A+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)xe.fromBufferAttribute(t,e),xe.normalize(),t.setXYZ(e,xe.x,xe.y,xe.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,f=o.normalized,A=new c.constructor(l.length*h),u=0,m=0;for(let w=0,p=l.length;w<p;w++){o.isInterleavedBufferAttribute?u=l[w]*o.data.stride+o.offset:u=l[w]*h;for(let d=0;d<h;d++)A[m++]=c[u++]}return new Ye(A,h,f)}if(this.index===null)return bt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let A=c[h],u=t(A,n);l.push(u)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,A=c.length;f<A;f++){let u=c[f];h.push(u.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let A=0,u=f.length;A<u;A++)h.push(f[A].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Mo=new L,Dh=new L,vh=new Tt,tn=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Mo.subVectors(n,e).cross(Dh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Mo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||vh.getNormalMatrix(t),s=this.coplanarPoint(Mo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},wh=0,fn=class extends hn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=Ys(),this.name="",this.type="Material",this.blending=Hi,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yo,this.blendDst=zo,this.blendEquation=ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=bi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mr,this.stencilZFail=Mr,this.stencilZPass=Mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){bt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){bt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ft().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new tn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Nt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Nt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var _n=new L,xo=new L,ir=new L,sr=new L,ds=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,_n)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=_n.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(_n.copy(this.origin).addScaledVector(this.direction,e),_n.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){xo.copy(t).add(e).multiplyScalar(.5),ir.copy(e).sub(t).normalize(),sr.copy(this.origin).sub(xo);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ir),o=sr.dot(this.direction),l=-sr.dot(ir),c=sr.lengthSq(),h=Math.abs(1-a*a),f,A,u,m;if(h>0)if(f=a*l-o,A=a*o-l,m=r*h,f>=0)if(A>=-m)if(A<=m){let w=1/h;f*=w,A*=w,u=f*(f+a*A+2*o)+A*(a*f+A+2*l)+c}else A=r,f=Math.max(0,-(a*A+o)),u=-f*f+A*(A+2*l)+c;else A=-r,f=Math.max(0,-(a*A+o)),u=-f*f+A*(A+2*l)+c;else A<=-m?(f=Math.max(0,-(-a*r+o)),A=f>0?-r:Math.min(Math.max(-r,-l),r),u=-f*f+A*(A+2*l)+c):A<=m?(f=0,A=Math.min(Math.max(-r,-l),r),u=A*(A+2*l)+c):(f=Math.max(0,-(a*r+o)),A=f>0?r:Math.min(Math.max(-r,-l),r),u=-f*f+A*(A+2*l)+c);else A=a>0?-r:r,f=Math.max(0,-(a*A+o)),u=-f*f+A*(A+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(xo).addScaledVector(ir,A),u}intersectSphere(t,e){if(t.radius<0)return null;_n.subVectors(t.center,this.origin);let n=_n.dot(this.direction),s=_n.dot(_n)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,A=this.origin;return c>=0?(n=(t.min.x-A.x)*c,s=(t.max.x-A.x)*c):(n=(t.max.x-A.x)*c,s=(t.min.x-A.x)*c),h>=0?(r=(t.min.y-A.y)*h,a=(t.max.y-A.y)*h):(r=(t.max.y-A.y)*h,a=(t.min.y-A.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-A.z)*f,l=(t.max.z-A.z)*f):(o=(t.max.z-A.z)*f,l=(t.min.z-A.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,_n)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=t.x-a.x,A=t.y-a.y,u=t.z-a.z,m=e.x-a.x,w=e.y-a.y,p=e.z-a.z,d=n.x-a.x,x=n.y-a.y,B=n.z-a.z,M=Math.abs(l),E=Math.abs(c),_=Math.abs(h),b,D,S,T,R,U,Q,F,Y,K,Z,nt;if(M>=E&&M>=_?(S=l,U=f,Y=m,nt=d,l>=0?(b=c,D=h,T=A,R=u,Q=w,F=p,K=x,Z=B):(b=h,D=c,T=u,R=A,Q=p,F=w,K=B,Z=x)):E>=_?(S=c,U=A,Y=w,nt=x,c>=0?(b=h,D=l,T=u,R=f,Q=p,F=m,K=B,Z=d):(b=l,D=h,T=f,R=u,Q=m,F=p,K=d,Z=B)):(S=h,U=u,Y=p,nt=B,h>=0?(b=l,D=c,T=f,R=A,Q=m,F=w,K=d,Z=x):(b=c,D=l,T=A,R=f,Q=w,F=m,K=x,Z=d)),S===0)return null;let V=b/S,$=D/S,et=1/S,St=T-V*U,_t=R-$*U,te=Q-V*Y,zt=F-$*Y,kt=K-V*nt,k=Z-$*nt,j=kt*zt-k*te,gt=St*k-_t*kt,It=te*_t-zt*St;if(s){if(j<0||gt<0||It<0)return null}else if((j<0||gt<0||It<0)&&(j>0||gt>0||It>0))return null;let pt=j+gt+It;if(pt===0)return null;let Ut=et*(j*U+gt*Y+It*nt);return(pt>0?Ut<0:Ut>0)?null:this.at(Ut/pt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},us=class extends fn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=ea,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},ic=new qt,qn=new ds,rr=new Sn,sc=new L,ar=new L,or=new L,lr=new L,Eo=new L,cr=new L,rc=new L,Ar=new L,ce=class extends De{constructor(t=new Pe,e=new us){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){cr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(Eo.fromBufferAttribute(f,t),a?cr.addScaledVector(Eo,h):cr.addScaledVector(Eo.sub(e),h))}e.add(cr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere),rr.applyMatrix4(r),qn.copy(t.ray).recast(t.near),!(rr.containsPoint(qn.origin)===!1&&(qn.intersectSphere(rr,sc)===null||qn.origin.distanceToSquared(sc)>(t.far-t.near)**2))&&(ic.copy(r).invert(),qn.copy(t.ray).applyMatrix4(ic),!(n.boundingBox!==null&&qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,qn)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,A=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,w=A.length;m<w;m++){let p=A[m],d=a[p.materialIndex],x=Math.max(p.start,u.start),B=Math.min(o.count,Math.min(p.start+p.count,u.start+u.count));for(let M=x,E=B;M<E;M+=3){let _=o.getX(M),b=o.getX(M+1),D=o.getX(M+2);s=hr(this,d,t,n,c,h,f,_,b,D),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let m=Math.max(0,u.start),w=Math.min(o.count,u.start+u.count);for(let p=m,d=w;p<d;p+=3){let x=o.getX(p),B=o.getX(p+1),M=o.getX(p+2);s=hr(this,a,t,n,c,h,f,x,B,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,w=A.length;m<w;m++){let p=A[m],d=a[p.materialIndex],x=Math.max(p.start,u.start),B=Math.min(l.count,Math.min(p.start+p.count,u.start+u.count));for(let M=x,E=B;M<E;M+=3){let _=M,b=M+1,D=M+2;s=hr(this,d,t,n,c,h,f,_,b,D),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let m=Math.max(0,u.start),w=Math.min(l.count,u.start+u.count);for(let p=m,d=w;p<d;p+=3){let x=p,B=p+1,M=p+2;s=hr(this,a,t,n,c,h,f,x,B,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Mh(i,t,e,n,s,r,a,o){let l;if(t.side===ye?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===zn,o),l===null)return null;Ar.copy(o),Ar.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ar);return c<e.near||c>e.far?null:{distance:c,point:Ar.clone(),object:i}}function hr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,ar),i.getVertexPosition(l,or),i.getVertexPosition(c,lr);let h=Mh(i,t,e,n,ar,or,lr,rc);if(h){let f=new L;Nn.getBarycoord(rc,ar,or,lr,f),s&&(h.uv=Nn.getInterpolatedAttribute(s,o,l,c,f,new Nt)),r&&(h.uv1=Nn.getInterpolatedAttribute(r,o,l,c,f,new Nt)),a&&(h.normal=Nn.getInterpolatedAttribute(a,o,l,c,f,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let A={a:o,b:l,c,normal:new L,materialIndex:0};Nn.getNormal(ar,or,lr,A.normal),h.face=A,h.barycoord=f}return h}var ni=class extends Ne{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Ee,h=Ee,f,A){super(null,a,o,l,c,h,s,r,f,A),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fs=class extends Ye{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ei=new qt,ac=new qt,dr=[],oc=new un,xh=new qt,ts=new ce,es=new Sn,ps=class extends ce{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new fs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,xh)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new un),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ei),oc.copy(t.boundingBox).applyMatrix4(Ei),this.boundingBox.union(oc)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Sn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ei),es.copy(t.boundingSphere).applyMatrix4(Ei),this.boundingSphere.union(es)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(ts.geometry=this.geometry,ts.material=this.material,ts.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),es.copy(this.boundingSphere),es.applyMatrix4(n),t.ray.intersectsSphere(es)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ei),ac.multiplyMatrices(n,Ei),ts.matrixWorld=ac,ts.raycast(t,dr);for(let a=0,o=dr.length;a<o;a++){let l=dr[a];l.instanceId=r,l.object=this,e.push(l)}dr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new fs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ni(new Float32Array(s*this.count),s,this.count,la,Ze));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},jn=new Sn,Eh=new Nt(.5,.5),ur=new L,Ri=class{constructor(t=new tn,e=new tn,n=new tn,s=new tn,r=new tn,a=new tn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=en,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],A=r[6],u=r[7],m=r[8],w=r[9],p=r[10],d=r[11],x=r[12],B=r[13],M=r[14],E=r[15];if(s[0].setComponents(c-a,u-h,d-m,E-x).normalize(),s[1].setComponents(c+a,u+h,d+m,E+x).normalize(),s[2].setComponents(c+o,u+f,d+w,E+B).normalize(),s[3].setComponents(c-o,u-f,d-w,E-B).normalize(),n)s[4].setComponents(l,A,p,M).normalize(),s[5].setComponents(c-l,u-A,d-p,E-M).normalize();else if(s[4].setComponents(c-l,u-A,d-p,E-M).normalize(),e===en)s[5].setComponents(c+l,u+A,d+p,E+M).normalize();else if(e===Ti)s[5].setComponents(l,A,p,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),jn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),jn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(jn)}intersectsSprite(t){jn.center.set(0,0,0);let e=Eh.distanceTo(t.center);return jn.radius=.7071067811865476+e,jn.applyMatrix4(t.matrixWorld),this.intersectsSphere(jn)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ur.x=s.normal.x>0?t.max.x:t.min.x,ur.y=s.normal.y>0?t.max.y:t.min.y,ur.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ur)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Li=class extends fn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ft(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Lr=new L,Nr=new L,lc=new qt,ns=new ds,fr=new Sn,_o=new L,cc=new L,Ur=class extends De{constructor(t=new Pe,e=new Li){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Lr.fromBufferAttribute(e,s-1),Nr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Lr.distanceTo(Nr);t.setAttribute("lineDistance",new oe(n,1))}else bt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fr.copy(n.boundingSphere),fr.applyMatrix4(s),fr.radius+=r,t.ray.intersectsSphere(fr)===!1)return;lc.copy(s).invert(),ns.copy(t.ray).applyMatrix4(lc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,A=n.attributes.position;if(h!==null){let u=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let w=u,p=m-1;w<p;w+=c){let d=h.getX(w),x=h.getX(w+1),B=pr(this,t,ns,l,d,x,w);B&&e.push(B)}if(this.isLineLoop){let w=h.getX(m-1),p=h.getX(u),d=pr(this,t,ns,l,w,p,m-1);d&&e.push(d)}}else{let u=Math.max(0,a.start),m=Math.min(A.count,a.start+a.count);for(let w=u,p=m-1;w<p;w+=c){let d=pr(this,t,ns,l,w,w+1,w);d&&e.push(d)}if(this.isLineLoop){let w=pr(this,t,ns,l,m-1,u,m-1);w&&e.push(w)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function pr(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(Lr.fromBufferAttribute(o,s),Nr.fromBufferAttribute(o,r),e.distanceSqToSegment(Lr,Nr,_o,cc)>n)return;_o.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(_o);if(!(c<t.near||c>t.far))return{distance:c,point:cc.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Ac=new L,hc=new L,ms=class extends Ur{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Ac.fromBufferAttribute(e,s),hc.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Ac.distanceTo(hc);t.setAttribute("lineDistance",new oe(n,1))}else bt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var gs=class extends Ne{constructor(t=[],e=Wn,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var Un=class extends Ne{constructor(t,e,n=sn,s,r,a,o=Ee,l=Ee,c,h=An,f=1){if(h!==An&&h!==Vn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let A={width:t,height:e,depth:f};super(A,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Fi(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Or=class extends Un{constructor(t,e=sn,n=Wn,s,r,a=Ee,o=Ee,l,c=An){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ds=class extends Ne{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},pn=class i extends Pe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],A=0,u=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new oe(c,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(f,2));function m(w,p,d,x,B,M,E,_,b,D,S){let T=M/b,R=E/D,U=M/2,Q=E/2,F=_/2,Y=b+1,K=D+1,Z=0,nt=0,V=new L;for(let $=0;$<K;$++){let et=$*R-Q;for(let St=0;St<Y;St++){let _t=St*T-U;V[w]=_t*x,V[p]=et*B,V[d]=F,c.push(V.x,V.y,V.z),V[w]=0,V[p]=0,V[d]=_>0?1:-1,h.push(V.x,V.y,V.z),f.push(St/b),f.push(1-$/D),Z+=1}}for(let $=0;$<D;$++)for(let et=0;et<b;et++){let St=A+et+Y*$,_t=A+et+Y*($+1),te=A+(et+1)+Y*($+1),zt=A+(et+1)+Y*$;l.push(St,_t,zt),l.push(_t,te,zt),nt+=6}o.addGroup(u,nt,S),u+=nt,A+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var vs=class i extends Pe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],A=[],u=[],m=0,w=[],p=n/2,d=0;x(),a===!1&&(t>0&&B(!0),e>0&&B(!1)),this.setIndex(h),this.setAttribute("position",new oe(f,3)),this.setAttribute("normal",new oe(A,3)),this.setAttribute("uv",new oe(u,2));function x(){let M=new L,E=new L,_=0,b=(e-t)/n;for(let D=0;D<=r;D++){let S=[],T=D/r,R=T*(e-t)+t;for(let U=0;U<=s;U++){let Q=U/s,F=Q*l+o,Y=Math.sin(F),K=Math.cos(F);E.x=R*Y,E.y=-T*n+p,E.z=R*K,f.push(E.x,E.y,E.z),M.set(Y,b,K).normalize(),A.push(M.x,M.y,M.z),u.push(Q,1-T),S.push(m++)}w.push(S)}for(let D=0;D<s;D++)for(let S=0;S<r;S++){let T=w[S][D],R=w[S+1][D],U=w[S+1][D+1],Q=w[S][D+1];(t>0||S!==0)&&(h.push(T,R,Q),_+=3),(e>0||S!==r-1)&&(h.push(R,U,Q),_+=3)}c.addGroup(d,_,0),d+=_}function B(M){let E=m,_=new Nt,b=new L,D=0,S=M===!0?t:e,T=M===!0?1:-1;for(let U=1;U<=s;U++)f.push(0,p*T,0),A.push(0,T,0),u.push(.5,.5),m++;let R=m;for(let U=0;U<=s;U++){let F=U/s*l+o,Y=Math.cos(F),K=Math.sin(F);b.x=S*K,b.y=p*T,b.z=S*Y,f.push(b.x,b.y,b.z),A.push(0,T,0),_.x=Y*.5+.5,_.y=K*.5*T+.5,u.push(_.x,_.y),m++}for(let U=0;U<s;U++){let Q=E+U,F=R+U;M===!0?h.push(F,F+1,Q):h.push(F+1,F,Q),D+=3}c.addGroup(d,D,M===!0?1:2),d+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};function _h(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=aA(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Ch(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,f=l;for(let A=e;A<s;A+=e){let u=i[A],m=i[A+1];u<o&&(o=u),m<l&&(l=m),u>h&&(h=u),m>f&&(f=m)}c=Math.max(h-o,f-l),c=c!==0?32767/c:0}return ws(r,a,e,o,l,c,0),a}function aA(i,t,e,n,s){let r;if(s===Hh(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=dc(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=dc(a/n|0,i[a],i[a+1],r);return r&&Ni(r,r.next)&&(xs(r),r=r.next),r}function ii(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ni(e,e.next)||he(e.prev,e,e.next)===0)){if(xs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ws(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Rh(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Sh(i,n,s,r):yh(i)){t.push(l.i,i.i,c.i),xs(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Bh(ii(i),t),ws(i,t,e,n,s,r,2)):a===2&&bh(i,t,e,n,s,r):ws(ii(i),t,e,n,s,r,1);break}}}function yh(i){let t=i.prev,e=i,n=i.next;if(he(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),f=Math.min(o,l,c),A=Math.max(s,r,a),u=Math.max(o,l,c),m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=A&&m.y>=f&&m.y<=u&&is(s,o,r,l,a,c,m.x,m.y)&&he(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Sh(i,t,e,n){let s=i.prev,r=i,a=i.next;if(he(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,f=r.y,A=a.y,u=Math.min(o,l,c),m=Math.min(h,f,A),w=Math.max(o,l,c),p=Math.max(h,f,A),d=Io(u,m,t,e,n),x=Io(w,p,t,e,n),B=i.prevZ,M=i.nextZ;for(;B&&B.z>=d&&M&&M.z<=x;){if(B.x>=u&&B.x<=w&&B.y>=m&&B.y<=p&&B!==s&&B!==a&&is(o,h,l,f,c,A,B.x,B.y)&&he(B.prev,B,B.next)>=0||(B=B.prevZ,M.x>=u&&M.x<=w&&M.y>=m&&M.y<=p&&M!==s&&M!==a&&is(o,h,l,f,c,A,M.x,M.y)&&he(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;B&&B.z>=d;){if(B.x>=u&&B.x<=w&&B.y>=m&&B.y<=p&&B!==s&&B!==a&&is(o,h,l,f,c,A,B.x,B.y)&&he(B.prev,B,B.next)>=0)return!1;B=B.prevZ}for(;M&&M.z<=x;){if(M.x>=u&&M.x<=w&&M.y>=m&&M.y<=p&&M!==s&&M!==a&&is(o,h,l,f,c,A,M.x,M.y)&&he(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Bh(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Ni(n,s)&&lA(n,e,e.next,s)&&Ms(n,s)&&Ms(s,n)&&(t.push(n.i,e.i,s.i),xs(e),xs(e.next),e=i=s),e=e.next}while(e!==i);return ii(e)}function bh(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Uh(a,o)){let l=cA(a,o);a=ii(a,a.next),l=ii(l,l.next),ws(a,t,e,n,s,r,0),ws(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Ch(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=aA(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Nh(c))}s.sort(Th);for(let r=0;r<s.length;r++)e=Ih(s[r],e);return e}function Th(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Ih(i,t){let e=Fh(i,t);if(!e)return t;let n=cA(e,i);return ii(n,n.next),ii(e,e.next)}function Fh(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Ni(i,e))return e;do{if(Ni(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,a=e.x<e.next.x?e:e.next,f===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&oA(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let f=Math.abs(s-e.y)/(n-e.x);Ms(e,i)&&(f<h||f===h&&(e.x>a.x||e.x===a.x&&Ph(a,e)))&&(a=e,h=f)}e=e.next}while(e!==o);return a}function Ph(i,t){return he(i.prev,i,t.prev)<0&&he(t.next,i,i.next)<0}function Rh(i,t,e,n){let s=i;do s.z===0&&(s.z=Io(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Lh(s)}function Lh(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Io(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Nh(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function oA(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function is(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&oA(i,t,e,n,s,r,a,o)}function Uh(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Oh(i,t)&&(Ms(i,t)&&Ms(t,i)&&Gh(i,t)&&(he(i.prev,i,t.prev)||he(i,t.prev,t))||Ni(i,t)&&he(i.prev,i,i.next)>0&&he(t.prev,t,t.next)>0)}function he(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ni(i,t){return i.x===t.x&&i.y===t.y}function lA(i,t,e,n){let s=gr(he(i,t,e)),r=gr(he(i,t,n)),a=gr(he(e,n,i)),o=gr(he(e,n,t));return!!(s!==r&&a!==o||s===0&&mr(i,e,t)||r===0&&mr(i,n,t)||a===0&&mr(e,i,n)||o===0&&mr(e,t,n))}function mr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function gr(i){return i>0?1:i<0?-1:0}function Oh(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&lA(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ms(i,t){return he(i.prev,i,i.next)<0?he(i,t,i.next)>=0&&he(i,i.prev,t)>=0:he(i,t,i.prev)<0||he(i,i.next,t)<0}function Gh(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function cA(i,t){let e=Fo(i.i,i.x,i.y),n=Fo(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function dc(i,t,e,n){let s=Fo(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function xs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Fo(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Hh(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Po=class{static triangulate(t,e,n=2){return _h(t,e,n)}},Es=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];uc(t),fc(n,t);let a=t.length;e.forEach(uc);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,fc(n,e[l]);let o=Po.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function uc(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function fc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var _s=class i extends Pe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=t/o,A=e/l,u=[],m=[],w=[],p=[];for(let d=0;d<h;d++){let x=d*A-a;for(let B=0;B<c;B++){let M=B*f-r;m.push(M,-x,0),w.push(0,0,1),p.push(B/o),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let x=0;x<o;x++){let B=x+c*d,M=x+c*(d+1),E=x+1+c*(d+1),_=x+1+c*d;u.push(B,M,_),u.push(M,E,_)}this.setIndex(u),this.setAttribute("position",new oe(m,3)),this.setAttribute("normal",new oe(w,3)),this.setAttribute("uv",new oe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Ui=class i extends Pe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],f=[],A=new L,u=new L,m=new L;for(let w=0;w<=n;w++){let p=a+w/n*o;for(let d=0;d<=s;d++){let x=d/s*r;u.x=(t+e*Math.cos(p))*Math.cos(x),u.y=(t+e*Math.cos(p))*Math.sin(x),u.z=e*Math.sin(p),c.push(u.x,u.y,u.z),A.x=t*Math.cos(x),A.y=t*Math.sin(x),m.subVectors(u,A).normalize(),h.push(m.x,m.y,m.z),f.push(d/s),f.push(w/n)}}for(let w=1;w<=n;w++)for(let p=1;p<=s;p++){let d=(s+1)*w+p-1,x=(s+1)*(w-1)+p-1,B=(s+1)*(w-1)+p,M=(s+1)*w+p;l.push(d,x,M),l.push(x,B,M)}this.setIndex(l),this.setAttribute("position",new oe(c,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function li(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(pc(s))s.isRenderTargetTexture?(bt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(pc(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Te(i){let t={};for(let e=0;e<i.length;e++){let n=li(i[e]);for(let s in n)t[s]=n[s]}return t}function pc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Qh(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function rl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}var AA={clone:li,merge:Te},Yh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ze=class extends fn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yh,this.fragmentShader=zh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=li(t.uniforms),this.uniformsGroups=Qh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Ft().setHex(s.value);break;case"v2":this.uniforms[n].value=new Nt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new L().fromArray(s.value);break;case"v4":this.uniforms[n].value=new le().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Tt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new qt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Gr=class extends ze{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},On=class extends fn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qs,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var ys=class extends fn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qs,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=ea,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Hr=class extends fn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Qr=class extends fn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function _i(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function yo(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Gn=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Yr=class extends Gn{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bo,endingEnd:bo}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Co:r=t,o=2*e-n;break;case To:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Co:a=t,l=2*n-e;break;case To:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,A=this._weightPrev,u=this._weightNext,m=(n-e)/(s-e),w=m*m,p=w*m,d=-A*p+2*A*w-A*m,x=(1+A)*p+(-1.5-2*A)*w+(-.5+A)*m+1,B=(-1-u)*p+(1.5+u)*w+.5*m,M=u*p-u*w;for(let E=0;E!==o;++E)r[E]=d*a[h+E]+x*a[c+E]+B*a[l+E]+M*a[f+E];return r}},zr=class extends Gn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),f=1-h;for(let A=0;A!==o;++A)r[A]=a[c+A]*f+a[l+A]*h;return r}},Wr=class extends Gn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Vr=class extends Gn{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let m=(n-e)/(s-e),w=1-m;for(let p=0;p!==o;++p)r[p]=a[c+p]*w+a[l+p]*m;return r}let A=o*2,u=t-1;for(let m=0;m!==o;++m){let w=a[c+m],p=a[l+m],d=u*A+m*2,x=f[d],B=f[d+1],M=t*A+m*2,E=h[M],_=h[M+1],b=Vh(n,e,x,E,s);r[m]=hA(b,w,B,_,p)}return r}};function hA(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Wh(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Vh(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=hA(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Wh(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var We=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=_i(e,this.TimeBufferType),this.values=_i(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:_i(t.times,Array),values:_i(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),yo(t.settings)&&(n.settings={inTangents:_i(t.settings.inTangents,Array),outTangents:_i(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Wr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new zr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Yr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Vr(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ss:e=this.InterpolantFactoryMethodDiscrete;break;case Tr:e=this.InterpolantFactoryMethodLinear;break;case wr:e=this.InterpolantFactoryMethodSmooth;break;case Bo:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return bt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ss;case this.InterpolantFactoryMethodLinear:return Tr;case this.InterpolantFactoryMethodSmooth:return wr;case this.InterpolantFactoryMethodBezier:return Bo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;yo(this.settings)&&(mc(this.settings.inTangents,t),mc(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ct("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ct("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ct("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Ct("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&ih(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ct("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===wr,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let f=o*n,A=f-n,u=f+n;for(let m=0;m!==n;++m){let w=e[f+m];if(w!==e[A+m]||w!==e[u+m]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let f=o*n,A=a*n;for(let u=0;u!==n;++u)e[A+u]=e[f+u]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,yo(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function mc(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}We.prototype.ValueTypeName="";We.prototype.TimeBufferType=Float32Array;We.prototype.ValueBufferType=Float32Array;We.prototype.DefaultInterpolation=Tr;var Hn=class extends We{constructor(t,e,n){super(t,e,n)}};Hn.prototype.ValueTypeName="bool";Hn.prototype.ValueBufferType=Array;Hn.prototype.DefaultInterpolation=ss;Hn.prototype.InterpolantFactoryMethodLinear=void 0;Hn.prototype.InterpolantFactoryMethodSmooth=void 0;var kr=class extends We{constructor(t,e,n,s){super(t,e,n,s)}};kr.prototype.ValueTypeName="color";var Xr=class extends We{constructor(t,e,n,s){super(t,e,n,s)}};Xr.prototype.ValueTypeName="number";var Kr=class extends Gn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Xe.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ss=class extends We{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Kr(this.times,this.values,this.getValueSize(),t)}};Ss.prototype.ValueTypeName="quaternion";Ss.prototype.InterpolantFactoryMethodSmooth=void 0;var Qn=class extends We{constructor(t,e,n){super(t,e,n)}};Qn.prototype.ValueTypeName="string";Qn.prototype.ValueBufferType=Array;Qn.prototype.DefaultInterpolation=ss;Qn.prototype.InterpolantFactoryMethodLinear=void 0;Qn.prototype.InterpolantFactoryMethodSmooth=void 0;var Zr=class extends We{constructor(t,e,n,s){super(t,e,n,s)}};Zr.prototype.ValueTypeName="vector";var Jr=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,A=c.length;f<A;f+=2){let u=c[f],m=c[f+1];if(u.global&&(u.lastIndex=0),u.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},dA=new Jr,qr=class{constructor(t){this.manager=t!==void 0?t:dA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};qr.DEFAULT_MATERIAL_NAME="__DEFAULT";var si=class extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ft(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Bs=class extends si{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ft(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},So=new qt,gc=new L,Dc=new L,bs=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.mapType=Oe,this.map=null,this.mapPass=null,this.matrix=new qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ri,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;gc.setFromMatrixPosition(t.matrixWorld),e.position.copy(gc),Dc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Dc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){So.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(So,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Ti||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(So)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Dr=new L,vr=new Xe,ln=new L,Cs=class extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=en,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Dr,vr,ln),ln.x===1&&ln.y===1&&ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Dr,vr,ln.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Dr,vr,ln),ln.x===1&&ln.y===1&&ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Dr,vr,ln.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ln=new L,vc=new Nt,wc=new Nt,Fe=class extends Cs{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ir*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(no*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ir*2*Math.atan(Math.tan(no*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ln.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ln.x,Ln.y).multiplyScalar(-t/Ln.z),Ln.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ln.x,Ln.y).multiplyScalar(-t/Ln.z)}getViewSize(t,e){return this.getViewBounds(t,vc,wc),e.subVectors(wc,vc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(no*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Ro=class extends bs{constructor(){super(new Fe(90,1,.5,500)),this.isPointLightShadow=!0}},Ts=class extends si{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ro}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Yn=class extends Cs{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Lo=class extends bs{constructor(){super(new Yn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Oi=class extends si{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new Lo}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},Is=class extends si{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var yi=-90,Si=1,jr=class extends De{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Fe(yi,Si,t,e);s.layers=this.layers,this.add(s);let r=new Fe(yi,Si,t,e);r.layers=this.layers,this.add(r);let a=new Fe(yi,Si,t,e);a.layers=this.layers,this.add(a);let o=new Fe(yi,Si,t,e);o.layers=this.layers,this.add(o);let l=new Fe(yi,Si,t,e);l.layers=this.layers,this.add(l);let c=new Fe(yi,Si,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===en)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ti)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=t.getRenderTarget(),A=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let w=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=w,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,A,u),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},$r=class extends Fe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var al="\\[\\]\\.:\\/",kh=new RegExp("["+al+"]","g"),ol="[^"+al+"]",Xh="[^"+al.replace("\\.","")+"]",Kh=/((?:WC+[\/:])*)/.source.replace("WC",ol),Zh=/(WCOD+)?/.source.replace("WCOD",Xh),Jh=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ol),qh=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ol),jh=new RegExp("^"+Kh+Zh+Jh+qh+"$"),$h=["material","materials","bones","map"],No=class{constructor(t,e,n){let s=n||re.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},re=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(kh,"")}static parseTrackName(t){let e=jh.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);$h.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){bt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Ct("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ct("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ct("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ct("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ct("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ct("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Ct("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Ct("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ct("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ct("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};re.Composite=No;re.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};re.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};re.prototype.GetterByBindingType=[re.prototype._getValue_direct,re.prototype._getValue_array,re.prototype._getValue_arrayElement,re.prototype._getValue_toArray];re.prototype.SetterByBindingTypeAndVersioning=[[re.prototype._setValue_direct,re.prototype._setValue_direct_setNeedsUpdate,re.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[re.prototype._setValue_array,re.prototype._setValue_array_setNeedsUpdate,re.prototype._setValue_array_setMatrixWorldNeedsUpdate],[re.prototype._setValue_arrayElement,re.prototype._setValue_arrayElement_setNeedsUpdate,re.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[re.prototype._setValue_fromArray,re.prototype._setValue_fromArray_setNeedsUpdate,re.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var sg=new Float32Array(1);var ul=class ul{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};ul.prototype.isMatrix2=!0;var Uo=ul;function ll(i,t,e,n){let s=td(n);switch(e){case el:return i*t;case la:return i*t/s.components*s.byteLength;case ca:return i*t/s.components*s.byteLength;case kn:return i*t*2/s.components*s.byteLength;case Aa:return i*t*2/s.components*s.byteLength;case nl:return i*t*3/s.components*s.byteLength;case Ge:return i*t*4/s.components*s.byteLength;case ha:return i*t*4/s.components*s.byteLength;case Ls:case Ns:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Us:case Os:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ua:case pa:return Math.max(i,16)*Math.max(t,8)/4;case da:case fa:return Math.max(i,8)*Math.max(t,8)/2;case ma:case ga:case va:case wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Da:case Gs:case Ma:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ea:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case _a:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ya:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Sa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ba:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ba:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ca:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ta:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ia:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Fa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Pa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ra:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case La:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Na:case Ua:case Oa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ga:case Ha:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Hs:case Qa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function td(i){switch(i){case Oe:case qo:return{byteLength:1,components:1};case Qi:case jo:case rn:return{byteLength:2,components:1};case aa:case oa:return{byteLength:2,components:4};case sn:case ra:case Ze:return{byteLength:4,components:1};case $o:case tl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?bt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function RA(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function nd(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,f=c.byteLength,A=i.createBuffer();i.bindBuffer(l,A),i.bufferData(l,c,h),o.onUploadCallback();let u;if(c instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=i.SHORT;else if(c instanceof Uint32Array)u=i.UNSIGNED_INT;else if(c instanceof Int32Array)u=i.INT;else if(c instanceof Int8Array)u=i.BYTE;else if(c instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:A,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((u,m)=>u.start-m.start);let A=0;for(let u=1;u<f.length;u++){let m=f[A],w=f[u];w.start<=m.start+m.count+1?m.count=Math.max(m.count,w.start+w.count-m.start):(++A,f[A]=w)}f.length=A+1;for(let u=0,m=f.length;u<m;u++){let w=f[u];i.bufferSubData(c,w.start*h.BYTES_PER_ELEMENT,h,w.start,w.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var id=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,rd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ad=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,od=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ld=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ad=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,dd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ud=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,md=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,gd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Dd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,vd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Md=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ed=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,_d=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,yd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Sd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Bd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,bd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Cd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Td=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Id=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ld=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Nd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ud=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Od=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Hd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Vd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Zd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Jd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$d=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,eu=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,nu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,iu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,su=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ru=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,au=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ou=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Au=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,du=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,uu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Du=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,wu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,xu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Eu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_u=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Su=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Bu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Iu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Pu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ru=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Uu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ou=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Hu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Qu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Yu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Vu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ku=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Xu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ku=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ju=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ju=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$u=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ef=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,nf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,sf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,af=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,of=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Af=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,hf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,df=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,uf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ff=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Df=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,vf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ef=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_f=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,yf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Sf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Cf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,If=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ff=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Pf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Uf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Lt={alphahash_fragment:id,alphahash_pars_fragment:sd,alphamap_fragment:rd,alphamap_pars_fragment:ad,alphatest_fragment:od,alphatest_pars_fragment:ld,aomap_fragment:cd,aomap_pars_fragment:Ad,batching_pars_vertex:hd,batching_vertex:dd,begin_vertex:ud,beginnormal_vertex:fd,bsdfs:pd,iridescence_fragment:md,bumpmap_pars_fragment:gd,clipping_planes_fragment:Dd,clipping_planes_pars_fragment:vd,clipping_planes_pars_vertex:wd,clipping_planes_vertex:Md,color_fragment:xd,color_pars_fragment:Ed,color_pars_vertex:_d,color_vertex:yd,common:Sd,cube_uv_reflection_fragment:Bd,defaultnormal_vertex:bd,displacementmap_pars_vertex:Cd,displacementmap_vertex:Td,emissivemap_fragment:Id,emissivemap_pars_fragment:Fd,colorspace_fragment:Pd,colorspace_pars_fragment:Rd,envmap_fragment:Ld,envmap_common_pars_fragment:Nd,envmap_pars_fragment:Ud,envmap_pars_vertex:Od,envmap_physical_pars_fragment:Zd,envmap_vertex:Gd,fog_vertex:Hd,fog_pars_vertex:Qd,fog_fragment:Yd,fog_pars_fragment:zd,gradientmap_pars_fragment:Wd,lightmap_pars_fragment:Vd,lights_lambert_fragment:kd,lights_lambert_pars_fragment:Xd,lights_pars_begin:Kd,lights_toon_fragment:Jd,lights_toon_pars_fragment:qd,lights_phong_fragment:jd,lights_phong_pars_fragment:$d,lights_physical_fragment:tu,lights_physical_pars_fragment:eu,lights_fragment_begin:nu,lights_fragment_maps:iu,lights_fragment_end:su,lightprobes_pars_fragment:ru,logdepthbuf_fragment:au,logdepthbuf_pars_fragment:ou,logdepthbuf_pars_vertex:lu,logdepthbuf_vertex:cu,map_fragment:Au,map_pars_fragment:hu,map_particle_fragment:du,map_particle_pars_fragment:uu,metalnessmap_fragment:fu,metalnessmap_pars_fragment:pu,morphinstance_vertex:mu,morphcolor_vertex:gu,morphnormal_vertex:Du,morphtarget_pars_vertex:vu,morphtarget_vertex:wu,normal_fragment_begin:Mu,normal_fragment_maps:xu,normal_pars_fragment:Eu,normal_pars_vertex:_u,normal_vertex:yu,normalmap_pars_fragment:Su,clearcoat_normal_fragment_begin:Bu,clearcoat_normal_fragment_maps:bu,clearcoat_pars_fragment:Cu,iridescence_pars_fragment:Tu,opaque_fragment:Iu,packing:Fu,premultiplied_alpha_fragment:Pu,project_vertex:Ru,dithering_fragment:Lu,dithering_pars_fragment:Nu,roughnessmap_fragment:Uu,roughnessmap_pars_fragment:Ou,shadowmap_pars_fragment:Gu,shadowmap_pars_vertex:Hu,shadowmap_vertex:Qu,shadowmask_pars_fragment:Yu,skinbase_vertex:zu,skinning_pars_vertex:Wu,skinning_vertex:Vu,skinnormal_vertex:ku,specularmap_fragment:Xu,specularmap_pars_fragment:Ku,tonemapping_fragment:Zu,tonemapping_pars_fragment:Ju,transmission_fragment:qu,transmission_pars_fragment:ju,uv_pars_fragment:$u,uv_pars_vertex:tf,uv_vertex:ef,worldpos_vertex:nf,background_vert:sf,background_frag:rf,backgroundCube_vert:af,backgroundCube_frag:of,cube_vert:lf,cube_frag:cf,depth_vert:Af,depth_frag:hf,distance_vert:df,distance_frag:uf,equirect_vert:ff,equirect_frag:pf,linedashed_vert:mf,linedashed_frag:gf,meshbasic_vert:Df,meshbasic_frag:vf,meshlambert_vert:wf,meshlambert_frag:Mf,meshmatcap_vert:xf,meshmatcap_frag:Ef,meshnormal_vert:_f,meshnormal_frag:yf,meshphong_vert:Sf,meshphong_frag:Bf,meshphysical_vert:bf,meshphysical_frag:Cf,meshtoon_vert:Tf,meshtoon_frag:If,points_vert:Ff,points_frag:Pf,shadow_vert:Rf,shadow_frag:Lf,sprite_vert:Nf,sprite_frag:Uf},At={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Tt},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Tt}},envmap:{envMap:{value:null},envMapRotation:{value:new Tt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Tt},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0},uvTransform:{value:new Tt}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Tt},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0}}},vn={basic:{uniforms:Te([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.fog]),vertexShader:Lt.meshbasic_vert,fragmentShader:Lt.meshbasic_frag},lambert:{uniforms:Te([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new Ft(0)},envMapIntensity:{value:1}}]),vertexShader:Lt.meshlambert_vert,fragmentShader:Lt.meshlambert_frag},phong:{uniforms:Te([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Lt.meshphong_vert,fragmentShader:Lt.meshphong_frag},standard:{uniforms:Te([At.common,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.roughnessmap,At.metalnessmap,At.fog,At.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Lt.meshphysical_vert,fragmentShader:Lt.meshphysical_frag},toon:{uniforms:Te([At.common,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.gradientmap,At.fog,At.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Lt.meshtoon_vert,fragmentShader:Lt.meshtoon_frag},matcap:{uniforms:Te([At.common,At.bumpmap,At.normalmap,At.displacementmap,At.fog,{matcap:{value:null}}]),vertexShader:Lt.meshmatcap_vert,fragmentShader:Lt.meshmatcap_frag},points:{uniforms:Te([At.points,At.fog]),vertexShader:Lt.points_vert,fragmentShader:Lt.points_frag},dashed:{uniforms:Te([At.common,At.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Lt.linedashed_vert,fragmentShader:Lt.linedashed_frag},depth:{uniforms:Te([At.common,At.displacementmap]),vertexShader:Lt.depth_vert,fragmentShader:Lt.depth_frag},normal:{uniforms:Te([At.common,At.bumpmap,At.normalmap,At.displacementmap,{opacity:{value:1}}]),vertexShader:Lt.meshnormal_vert,fragmentShader:Lt.meshnormal_frag},sprite:{uniforms:Te([At.sprite,At.fog]),vertexShader:Lt.sprite_vert,fragmentShader:Lt.sprite_frag},background:{uniforms:{uvTransform:{value:new Tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Lt.background_vert,fragmentShader:Lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Tt}},vertexShader:Lt.backgroundCube_vert,fragmentShader:Lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Lt.cube_vert,fragmentShader:Lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Lt.equirect_vert,fragmentShader:Lt.equirect_frag},distance:{uniforms:Te([At.common,At.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Lt.distance_vert,fragmentShader:Lt.distance_frag},shadow:{uniforms:Te([At.lights,At.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:Lt.shadow_vert,fragmentShader:Lt.shadow_frag}};vn.physical={uniforms:Te([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Tt},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Tt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Tt},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Tt},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Tt},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Tt},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Tt}}]),vertexShader:Lt.meshphysical_vert,fragmentShader:Lt.meshphysical_frag};var Wa={r:0,b:0,g:0},Of=new qt,LA=new Tt;LA.set(-1,0,0,0,1,0,0,0,1);function Gf(i,t,e,n,s,r){let a=new Ft(0),o=s===!0?0:1,l,c,h=null,f=0,A=null;function u(x){let B=x.isScene===!0?x.background:null;if(B&&B.isTexture){let M=x.backgroundBlurriness>0;B=t.get(B,M)}return B}function m(x){let B=!1,M=u(x);M===null?p(a,o):M&&M.isColor&&(p(M,1),B=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||B)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function w(x,B){let M=u(B);M&&(M.isCubeTexture||M.mapping===Ps)?(c===void 0&&(c=new ce(new pn(1,1,1),new ze({name:"BackgroundCubeMaterial",uniforms:li(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:ye,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,_,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=B.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Of.makeRotationFromEuler(B.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(LA),c.material.toneMapped=Qt.getTransfer(M.colorSpace)!==Zt,(h!==M||f!==M.version||A!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,A=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new ce(new _s(2,2),new ze({name:"BackgroundMaterial",uniforms:li(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(M.colorSpace)!==Zt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||A!==i.toneMapping)&&(l.material.needsUpdate=!0,h=M,f=M.version,A=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,B){x.getRGB(Wa,rl(i)),e.buffers.color.setClear(Wa.r,Wa.g,Wa.b,B,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,B=1){a.set(x),o=B,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,p(a,o)},render:m,addToRenderList:w,dispose:d}}function Hf(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=A(null),r=s,a=!1;function o(R,U,Q,F,Y){let K=!1,Z=f(R,F,Q,U);r!==Z&&(r=Z,c(r.object)),K=u(R,F,Q,Y),K&&m(R,F,Q,Y),Y!==null&&t.update(Y,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,M(R,U,Q,F),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function l(){return i.createVertexArray()}function c(R){return i.bindVertexArray(R)}function h(R){return i.deleteVertexArray(R)}function f(R,U,Q,F){let Y=F.wireframe===!0,K=n[U.id];K===void 0&&(K={},n[U.id]=K);let Z=R.isInstancedMesh===!0?R.id:0,nt=K[Z];nt===void 0&&(nt={},K[Z]=nt);let V=nt[Q.id];V===void 0&&(V={},nt[Q.id]=V);let $=V[Y];return $===void 0&&($=A(l()),V[Y]=$),$}function A(R){let U=[],Q=[],F=[];for(let Y=0;Y<e;Y++)U[Y]=0,Q[Y]=0,F[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:Q,attributeDivisors:F,object:R,attributes:{},index:null}}function u(R,U,Q,F){let Y=r.attributes,K=U.attributes,Z=0,nt=Q.getAttributes();for(let V in nt)if(nt[V].location>=0){let et=Y[V],St=K[V];if(St===void 0&&(V==="instanceMatrix"&&R.instanceMatrix&&(St=R.instanceMatrix),V==="instanceColor"&&R.instanceColor&&(St=R.instanceColor)),et===void 0||et.attribute!==St||St&&et.data!==St.data)return!0;Z++}return r.attributesNum!==Z||r.index!==F}function m(R,U,Q,F){let Y={},K=U.attributes,Z=0,nt=Q.getAttributes();for(let V in nt)if(nt[V].location>=0){let et=K[V];et===void 0&&(V==="instanceMatrix"&&R.instanceMatrix&&(et=R.instanceMatrix),V==="instanceColor"&&R.instanceColor&&(et=R.instanceColor));let St={};St.attribute=et,et&&et.data&&(St.data=et.data),Y[V]=St,Z++}r.attributes=Y,r.attributesNum=Z,r.index=F}function w(){let R=r.newAttributes;for(let U=0,Q=R.length;U<Q;U++)R[U]=0}function p(R){d(R,0)}function d(R,U){let Q=r.newAttributes,F=r.enabledAttributes,Y=r.attributeDivisors;Q[R]=1,F[R]===0&&(i.enableVertexAttribArray(R),F[R]=1),Y[R]!==U&&(i.vertexAttribDivisor(R,U),Y[R]=U)}function x(){let R=r.newAttributes,U=r.enabledAttributes;for(let Q=0,F=U.length;Q<F;Q++)U[Q]!==R[Q]&&(i.disableVertexAttribArray(Q),U[Q]=0)}function B(R,U,Q,F,Y,K,Z){Z===!0?i.vertexAttribIPointer(R,U,Q,Y,K):i.vertexAttribPointer(R,U,Q,F,Y,K)}function M(R,U,Q,F){w();let Y=F.attributes,K=Q.getAttributes(),Z=U.defaultAttributeValues;for(let nt in K){let V=K[nt];if(V.location>=0){let $=Y[nt];if($===void 0&&(nt==="instanceMatrix"&&R.instanceMatrix&&($=R.instanceMatrix),nt==="instanceColor"&&R.instanceColor&&($=R.instanceColor)),$!==void 0){let et=$.normalized,St=$.itemSize,_t=t.get($);if(_t===void 0)continue;let te=_t.buffer,zt=_t.type,kt=_t.bytesPerElement,k=zt===i.INT||zt===i.UNSIGNED_INT||$.gpuType===ra;if($.isInterleavedBufferAttribute){let j=$.data,gt=j.stride,It=$.offset;if(j.isInstancedInterleavedBuffer){for(let pt=0;pt<V.locationSize;pt++)d(V.location+pt,j.meshPerAttribute);R.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let pt=0;pt<V.locationSize;pt++)p(V.location+pt);i.bindBuffer(i.ARRAY_BUFFER,te);for(let pt=0;pt<V.locationSize;pt++)B(V.location+pt,St/V.locationSize,zt,et,gt*kt,(It+St/V.locationSize*pt)*kt,k)}else{if($.isInstancedBufferAttribute){for(let j=0;j<V.locationSize;j++)d(V.location+j,$.meshPerAttribute);R.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let j=0;j<V.locationSize;j++)p(V.location+j);i.bindBuffer(i.ARRAY_BUFFER,te);for(let j=0;j<V.locationSize;j++)B(V.location+j,St/V.locationSize,zt,et,St*kt,St/V.locationSize*j*kt,k)}}else if(Z!==void 0){let et=Z[nt];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(V.location,et);break;case 3:i.vertexAttrib3fv(V.location,et);break;case 4:i.vertexAttrib4fv(V.location,et);break;default:i.vertexAttrib1fv(V.location,et)}}}}x()}function E(){S();for(let R in n){let U=n[R];for(let Q in U){let F=U[Q];for(let Y in F){let K=F[Y];for(let Z in K)h(K[Z].object),delete K[Z];delete F[Y]}}delete n[R]}}function _(R){if(n[R.id]===void 0)return;let U=n[R.id];for(let Q in U){let F=U[Q];for(let Y in F){let K=F[Y];for(let Z in K)h(K[Z].object),delete K[Z];delete F[Y]}}delete n[R.id]}function b(R){for(let U in n){let Q=n[U];for(let F in Q){let Y=Q[F];if(Y[R.id]===void 0)continue;let K=Y[R.id];for(let Z in K)h(K[Z].object),delete K[Z];delete Y[R.id]}}}function D(R){for(let U in n){let Q=n[U],F=R.isInstancedMesh===!0?R.id:0,Y=Q[F];if(Y!==void 0){for(let K in Y){let Z=Y[K];for(let nt in Z)h(Z[nt].object),delete Z[nt];delete Y[K]}delete Q[F],Object.keys(Q).length===0&&delete n[U]}}}function S(){T(),a=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:S,resetDefaultState:T,dispose:E,releaseStatesOfGeometry:_,releaseStatesOfObject:D,releaseStatesOfProgram:b,initAttributes:w,enableAttribute:p,disableUnusedAttributes:x}}function Qf(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let A=0;for(let u=0;u<h;u++)A+=c[u];e.update(A,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Yf(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let b=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(b){return!(b!==Ge&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){let D=b===rn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==Oe&&b!==Ze&&!D&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(bt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.logarithmicDepthBuffer===!0,A=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&A===!1&&bt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),B=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),_=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:A,maxTextures:u,maxVertexTextures:m,maxTextureSize:w,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:x,maxVaryings:B,maxFragmentUniforms:M,maxSamples:E,samples:_}}function zf(i){let t=this,e=null,n=0,s=!1,r=!1,a=new tn,o=new Tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,A){let u=f.length!==0||A||n!==0||s;return s=A,n=f.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,A){e=h(f,A,0)},this.setState=function(f,A,u){let m=f.clippingPlanes,w=f.clipIntersection,p=f.clipShadows,d=i.get(f);if(!s||m===null||m.length===0||r&&!p)r?h(null):c();else{let x=r?0:n,B=x*4,M=d.clippingState||null;l.value=M,M=h(m,A,B,u);for(let E=0;E!==B;++E)M[E]=e[E];d.clippingState=M,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,A,u,m){let w=f!==null?f.length:0,p=null;if(w!==0){if(p=l.value,m!==!0||p===null){let d=u+w*4,x=A.matrixWorldInverse;o.getNormalMatrix(x),(p===null||p.length<d)&&(p=new Float32Array(d));for(let B=0,M=u;B!==w;++B,M+=4)a.copy(f[B]).applyMatrix4(x,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,p}}var Wi=4,Wf=6,Vf=20,kf=256,zs=new Yn,uA=new Ft,fl=null,pl=0,ml=0,gl=!1,Xf=new L,ci=new L,ki=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Xf}=r;fl=this._renderer.getRenderTarget(),pl=this._renderer.getActiveCubeFace(),ml=this._renderer.getActiveMipmapLevel(),gl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mA(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pA(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(fl,pl,ml),this._renderer.xr.enabled=gl,t.scissorTest=!1,zi(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Wn||t.mapping===oi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),fl=this._renderer.getRenderTarget(),pl=this._renderer.getActiveCubeFace(),ml=this._renderer.getActiveMipmapLevel(),gl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ge,minFilter:ge,generateMipmaps:!1,type:rn,format:Ge,colorSpace:rs,depthBuffer:!1},s=fA(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fA(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Kf(r)),this._blurMaterial=Jf(r,t,e),this._ggxMaterial=Zf(r,t,e)}return s}_compileMaterial(t){let e=new ce(new Pe,t);this._renderer.compile(e,zs)}_sceneToCubeUV(t,e,n,s,r){let l=new Fe(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,A=f.autoClear,u=f.toneMapping;f.getClearColor(uA),f.toneMapping=nn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ce(new pn,new us({name:"PMREM.Background",side:ye,depthWrite:!1,depthTest:!1})));let w=this._backgroundBox,p=w.material,d=!1,x=t.background;x?x.isColor&&(p.color.copy(x),t.background=null,d=!0):(p.color.copy(uA),d=!0);for(let B=0;B<6;B++){let M=B%3;M===0?(l.up.set(0,c[B],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[B],r.y,r.z)):M===1?(l.up.set(0,0,c[B]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[B],r.z)):(l.up.set(0,c[B],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[B]));let E=this._cubeSize;zi(s,M*E,B>2?E:0,E,E),f.setRenderTarget(s),d&&f.render(w,l),f.render(t,l)}f.toneMapping=u,f.autoClear=A,t.background=x}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Wn||t.mapping===oi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=mA()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pA());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;zi(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,zs)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),A=c*1.25,u=f*A,{_lodMax:m}=this,w=this._sizeLods[n],p=3*w*(n>m-Wi?n-m+Wi:0),d=4*(this._cubeSize-w);l.envMap.value=t.texture,l.roughness.value=u,l.mipInt.value=m-e,zi(r,p,d,3*w,2*w),s.setRenderTarget(r),s.render(o,zs),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,zi(t,p,d,3*w,2*w),s.setRenderTarget(t),s.render(o,zs)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],f=3*h*(s>this._lodMax-Wi?s-this._lodMax+Wi:0),A=4*(this._cubeSize-h);zi(e,f,A,3*h,2*h),a.setRenderTarget(e),a.render(l,zs)}};function Kf(i){let t=[],e=[],n=i,s=i-Wi+1+Wf;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,A=6,u=3,m=new Float32Array(u*A*f),w=new Float32Array(u*A*f);for(let d=0;d<f;d++){let x=d%3*2/3-1,B=d>2?0:-1,M=[x,B,0,x+2/3,B,0,x+2/3,B+1,0,x,B,0,x+2/3,B+1,0,x,B+1,0];m.set(M,u*A*d);for(let E=0;E<A;E++){let _=h[E*2]*2-1,b=h[E*2+1]*2-1;d===0?ci.set(1,b,_):d===1?ci.set(-_,1,-b):d===2?ci.set(-_,b,1):d===3?ci.set(-1,b,-_):d===4?ci.set(-_,-1,b):ci.set(_,b,-1),ci.toArray(w,(d*A+E)*u)}}let p=new Pe;p.setAttribute("position",new Ye(m,u)),p.setAttribute("outputDirection",new Ye(w,u)),e.push(new ce(p,null)),n>Wi&&n--}return{lodMeshes:e,sizeLods:t}}function fA(i,t,e){let n=new Ue(i,t,e);return n.texture.mapping=Ps,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zi(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Zf(i,t,e){return new ze({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:kf,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ka(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:mn,depthTest:!1,depthWrite:!1})}function Jf(i,t,e){return new ze({name:"SphericalGaussianBlur",defines:{SAMPLES:Vf,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ka(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:mn,depthTest:!1,depthWrite:!1})}function pA(){return new ze({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mn,depthTest:!1,depthWrite:!1})}function mA(){return new ze({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mn,depthTest:!1,depthWrite:!1})}function Ka(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var ka=class extends Ue{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new gs(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new pn(5,5,5),r=new ze({name:"CubemapFromEquirect",uniforms:li(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ye,blending:mn});r.uniforms.tEquirect.value=e;let a=new ce(s,r),o=e.minFilter;return e.minFilter===gn&&(e.minFilter=ge),new jr(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function qf(i){let t=new WeakMap,e=new WeakMap,n=null;function s(A,u=!1){return A==null?null:u?a(A):r(A)}function r(A){if(A&&A.isTexture){let u=A.mapping;if(u===na||u===ia)if(t.has(A)){let m=t.get(A).texture;return o(m,A.mapping)}else{let m=A.image;if(m&&m.height>0){let w=new ka(m.height);return w.fromEquirectangularTexture(i,A),t.set(A,w),A.addEventListener("dispose",c),o(w.texture,A.mapping)}else return null}}return A}function a(A){if(A&&A.isTexture){let u=A.mapping,m=u===na||u===ia,w=u===Wn||u===oi;if(m||w){let p=e.get(A),d=p!==void 0?p.texture.pmremVersion:0;if(A.isRenderTargetTexture&&A.pmremVersion!==d)return n===null&&(n=new ki(i)),p=m?n.fromEquirectangular(A,p):n.fromCubemap(A,p),p.texture.pmremVersion=A.pmremVersion,e.set(A,p),p.texture;if(p!==void 0)return p.texture;{let x=A.image;return m&&x&&x.height>0||w&&x&&l(x)?(n===null&&(n=new ki(i)),p=m?n.fromEquirectangular(A):n.fromCubemap(A),p.texture.pmremVersion=A.pmremVersion,e.set(A,p),A.addEventListener("dispose",h),p.texture):null}}}return A}function o(A,u){return u===na?A.mapping=Wn:u===ia&&(A.mapping=oi),A}function l(A){let u=0,m=6;for(let w=0;w<m;w++)A[w]!==void 0&&u++;return u===m}function c(A){let u=A.target;u.removeEventListener("dispose",c);let m=t.get(u);m!==void 0&&(t.delete(u),m.dispose())}function h(A){let u=A.target;u.removeEventListener("dispose",h);let m=e.get(u);m!==void 0&&(e.delete(u),m.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function jf(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ti("WebGLRenderer: "+n+" extension not supported."),s}}}function $f(i,t,e,n){let s={},r=new WeakMap;function a(f){let A=f.target;A.index!==null&&t.remove(A.index);for(let m in A.attributes)t.remove(A.attributes[m]);A.removeEventListener("dispose",a),delete s[A.id];let u=r.get(A);u&&(t.remove(u),r.delete(A)),n.releaseStatesOfGeometry(A),A.isInstancedBufferGeometry===!0&&delete A._maxInstanceCount,e.memory.geometries--}function o(f,A){return s[A.id]===!0||(A.addEventListener("dispose",a),s[A.id]=!0,e.memory.geometries++),A}function l(f){let A=f.attributes;for(let u in A)t.update(A[u],i.ARRAY_BUFFER)}function c(f){let A=[],u=f.index,m=f.attributes.position,w=0;if(m===void 0)return;if(u!==null){let x=u.array;w=u.version;for(let B=0,M=x.length;B<M;B+=3){let E=x[B+0],_=x[B+1],b=x[B+2];A.push(E,_,_,b,b,E)}}else{let x=m.array;w=m.version;for(let B=0,M=x.length/3-1;B<M;B+=3){let E=B+0,_=B+1,b=B+2;A.push(E,_,_,b,b,E)}}let p=new(m.count>=65535?hs:As)(A,1);p.version=w;let d=r.get(f);d&&t.remove(d),r.set(f,p)}function h(f){let A=r.get(f);if(A){let u=f.index;u!==null&&A.version<u.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function tp(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,A){i.drawElements(n,A,r,f*a),e.update(A,n,1)}function c(f,A,u){u!==0&&(i.drawElementsInstanced(n,A,r,f*a,u),e.update(A,n,u))}function h(f,A,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,A,0,r,f,0,u);let w=0;for(let p=0;p<u;p++)w+=A[p];e.update(w,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function ep(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Ct("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function np(i,t,e){let n=new WeakMap,s=new le;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,A=n.get(o);if(A===void 0||A.count!==f){let S=function(){b.dispose(),n.delete(o),o.removeEventListener("dispose",S)};A!==void 0&&A.texture.dispose();let u=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,w=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],x=o.morphAttributes.color||[],B=0;u===!0&&(B=1),m===!0&&(B=2),w===!0&&(B=3);let M=o.attributes.position.count*B,E=1;M>t.maxTextureSize&&(E=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let _=new Float32Array(M*E*4*f),b=new ls(_,M,E,f);b.type=Ze,b.needsUpdate=!0;let D=B*4;for(let T=0;T<f;T++){let R=p[T],U=d[T],Q=x[T],F=M*E*4*T;for(let Y=0;Y<R.count;Y++){let K=Y*D;u===!0&&(s.fromBufferAttribute(R,Y),_[F+K+0]=s.x,_[F+K+1]=s.y,_[F+K+2]=s.z,_[F+K+3]=0),m===!0&&(s.fromBufferAttribute(U,Y),_[F+K+4]=s.x,_[F+K+5]=s.y,_[F+K+6]=s.z,_[F+K+7]=0),w===!0&&(s.fromBufferAttribute(Q,Y),_[F+K+8]=s.x,_[F+K+9]=s.y,_[F+K+10]=s.z,_[F+K+11]=Q.itemSize===4?s.w:1)}}A={count:f,texture:b,size:new Nt(M,E)},n.set(o,A),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let u=0;for(let w=0;w<c.length;w++)u+=c[w];let m=o.morphTargetsRelative?1:1-u;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",A.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",A.size)}return{update:r}}function ip(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,f=c.geometry,A=t.get(c,f);if(r.get(A)!==h&&(t.update(A),r.set(A,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let u=c.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return A}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var sp={[Wo]:"LINEAR_TONE_MAPPING",[Vo]:"REINHARD_TONE_MAPPING",[ko]:"CINEON_TONE_MAPPING",[Fs]:"ACES_FILMIC_TONE_MAPPING",[Ko]:"AGX_TONE_MAPPING",[Zo]:"NEUTRAL_TONE_MAPPING",[Xo]:"CUSTOM_TONE_MAPPING"};function rp(i,t,e,n,s,r){let a=new Ue(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Pe;c.setAttribute("position",new oe([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new oe([0,2,0,0,2,0],2));let h=new Gr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new ce(c,h),A=new Yn(-1,1,1,-1,0,1),u=null,m=null,w=!1,p,d=null,x=[],B=!1;this.setSize=function(M,E){a.setSize(M,E),o!==null&&o.setSize(M,E),l!==null&&l.setSize(M,E);for(let _=0;_<x.length;_++){let b=x[_];b.setSize&&b.setSize(M,E)}},this.setEffects=function(M){x=M,B=x.length>0&&x[0].isRenderPass===!0;let E=a.width,_=a.height;x.length>0&&o===null&&(o=new Ue(E,_,{type:rn,depthBuffer:!1,stencilBuffer:!1}),l=new Ue(E,_,{type:rn,depthBuffer:!1,stencilBuffer:!1}));for(let b=0;b<x.length;b++){let D=x[b];D.setSize&&D.setSize(E,_)}},this.begin=function(M,E){if(w||M.toneMapping===nn&&x.length===0)return!1;if(d=E,E!==null){let _=E.width,b=E.height;(a.width!==_||a.height!==b)&&this.setSize(_,b)}return B===!1&&M.setRenderTarget(a),p=M.toneMapping,M.toneMapping=nn,!0},this.hasRenderPass=function(){return B},this.end=function(M,E){M.toneMapping=p,w=!0;let _=a,b=o;for(let D=0;D<x.length;D++){let S=x[D];S.enabled!==!1&&(S.render(M,b,_,E),S.needsSwap!==!1&&(_=b,b=b===o?l:o))}if(u!==M.outputColorSpace||m!==M.toneMapping){u=M.outputColorSpace,m=M.toneMapping,h.defines={},Qt.getTransfer(u)===Zt&&(h.defines.SRGB_TRANSFER="");let D=sp[m];D&&(h.defines[D]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=_.texture,M.setRenderTarget(d),M.render(f,A),d=null,w=!1},this.isCompositing=function(){return w},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var NA=new Ne,wl=new Un(1,1),UA=new ls,OA=new Rr,GA=new gs,gA=[],DA=[],vA=new Float32Array(16),wA=new Float32Array(9),MA=new Float32Array(4);function Xi(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=gA[s];if(r===void 0&&(r=new Float32Array(s),gA[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ve(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function we(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Za(i,t){let e=DA[t];e===void 0&&(e=new Int32Array(t),DA[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function ap(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function op(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2fv(this.addr,t),we(e,t)}}function lp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;i.uniform3fv(this.addr,t),we(e,t)}}function cp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4fv(this.addr,t),we(e,t)}}function Ap(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),we(e,t)}else{if(ve(e,n))return;MA.set(n),i.uniformMatrix2fv(this.addr,!1,MA),we(e,n)}}function hp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),we(e,t)}else{if(ve(e,n))return;wA.set(n),i.uniformMatrix3fv(this.addr,!1,wA),we(e,n)}}function dp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),we(e,t)}else{if(ve(e,n))return;vA.set(n),i.uniformMatrix4fv(this.addr,!1,vA),we(e,n)}}function up(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function fp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2iv(this.addr,t),we(e,t)}}function pp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;i.uniform3iv(this.addr,t),we(e,t)}}function mp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4iv(this.addr,t),we(e,t)}}function gp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Dp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2uiv(this.addr,t),we(e,t)}}function vp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;i.uniform3uiv(this.addr,t),we(e,t)}}function wp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4uiv(this.addr,t),we(e,t)}}function Mp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(wl.compareFunction=e.isReversedDepthBuffer()?za:Ya,r=wl):r=NA,e.setTexture2D(t||r,s)}function xp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||OA,s)}function Ep(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||GA,s)}function _p(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||UA,s)}function yp(i){switch(i){case 5126:return ap;case 35664:return op;case 35665:return lp;case 35666:return cp;case 35674:return Ap;case 35675:return hp;case 35676:return dp;case 5124:case 35670:return up;case 35667:case 35671:return fp;case 35668:case 35672:return pp;case 35669:case 35673:return mp;case 5125:return gp;case 36294:return Dp;case 36295:return vp;case 36296:return wp;case 35678:case 36198:case 36298:case 36306:case 35682:return Mp;case 35679:case 36299:case 36307:return xp;case 35680:case 36300:case 36308:case 36293:return Ep;case 36289:case 36303:case 36311:case 36292:return _p}}function Sp(i,t){i.uniform1fv(this.addr,t)}function Bp(i,t){let e=Xi(t,this.size,2);i.uniform2fv(this.addr,e)}function bp(i,t){let e=Xi(t,this.size,3);i.uniform3fv(this.addr,e)}function Cp(i,t){let e=Xi(t,this.size,4);i.uniform4fv(this.addr,e)}function Tp(i,t){let e=Xi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Ip(i,t){let e=Xi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Fp(i,t){let e=Xi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Pp(i,t){i.uniform1iv(this.addr,t)}function Rp(i,t){i.uniform2iv(this.addr,t)}function Lp(i,t){i.uniform3iv(this.addr,t)}function Np(i,t){i.uniform4iv(this.addr,t)}function Up(i,t){i.uniform1uiv(this.addr,t)}function Op(i,t){i.uniform2uiv(this.addr,t)}function Gp(i,t){i.uniform3uiv(this.addr,t)}function Hp(i,t){i.uniform4uiv(this.addr,t)}function Qp(i,t,e){let n=this.cache,s=t.length,r=Za(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),we(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=wl:a=NA;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Yp(i,t,e){let n=this.cache,s=t.length,r=Za(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||OA,r[a])}function zp(i,t,e){let n=this.cache,s=t.length,r=Za(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||GA,r[a])}function Wp(i,t,e){let n=this.cache,s=t.length,r=Za(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||UA,r[a])}function Vp(i){switch(i){case 5126:return Sp;case 35664:return Bp;case 35665:return bp;case 35666:return Cp;case 35674:return Tp;case 35675:return Ip;case 35676:return Fp;case 5124:case 35670:return Pp;case 35667:case 35671:return Rp;case 35668:case 35672:return Lp;case 35669:case 35673:return Np;case 5125:return Up;case 36294:return Op;case 36295:return Gp;case 36296:return Hp;case 35678:case 36198:case 36298:case 36306:case 35682:return Qp;case 35679:case 36299:case 36307:return Yp;case 35680:case 36300:case 36308:case 36293:return zp;case 36289:case 36303:case 36311:case 36292:return Wp}}var Ml=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=yp(e.type)}},xl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Vp(e.type)}},El=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Dl=/(\w+)(\])?(\[|\.)?/g;function xA(i,t){i.seq.push(t),i.map[t.id]=t}function kp(i,t,e){let n=i.name,s=n.length;for(Dl.lastIndex=0;;){let r=Dl.exec(n),a=Dl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){xA(e,c===void 0?new Ml(o,i,t):new xl(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new El(o),xA(e,f)),e=f}}}var Vi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);kp(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function EA(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Xp=37297,Kp=0;function Zp(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var _A=new Tt;function Jp(i){Qt._getMatrix(_A,Qt.workingColorSpace,i);let t=`mat3( ${_A.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(i)){case as:return[t,"LinearTransferOETF"];case Zt:return[t,"sRGBTransferOETF"];default:return bt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function yA(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Zp(i.getShaderSource(t),o)}else return r}function qp(i,t){let e=Jp(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var jp={[Wo]:"Linear",[Vo]:"Reinhard",[ko]:"Cineon",[Fs]:"ACESFilmic",[Ko]:"AgX",[Zo]:"Neutral",[Xo]:"Custom"};function $p(i,t){let e=jp[t];return e===void 0?(bt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Va=new L;function tm(){Qt.getLuminanceCoefficients(Va);let i=Va.x.toFixed(4),t=Va.y.toFixed(4),e=Va.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function em(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vs).join(`
`)}function nm(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function im(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Vs(i){return i!==""}function SA(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function BA(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var sm=/^[ \t]*#include +<([\w\d./]+)>/gm;function _l(i){return i.replace(sm,am)}var rm=new Map;function am(i,t){let e=Lt[t];if(e===void 0){let n=rm.get(t);if(n!==void 0)e=Lt[n],bt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return _l(e)}var om=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bA(i){return i.replace(om,lm)}function lm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function CA(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var cm={[ri]:"SHADOWMAP_TYPE_PCF",[Gi]:"SHADOWMAP_TYPE_VSM"};function Am(i){return cm[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var hm={[Wn]:"ENVMAP_TYPE_CUBE",[oi]:"ENVMAP_TYPE_CUBE",[Ps]:"ENVMAP_TYPE_CUBE_UV"};function dm(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":hm[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var um={[oi]:"ENVMAP_MODE_REFRACTION"};function fm(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":um[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var pm={[ea]:"ENVMAP_BLENDING_MULTIPLY",[Yc]:"ENVMAP_BLENDING_MIX",[zc]:"ENVMAP_BLENDING_ADD"};function mm(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":pm[i.combine]||"ENVMAP_BLENDING_NONE"}function gm(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Dm(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Am(e),c=dm(e),h=fm(e),f=mm(e),A=gm(e),u=em(e),m=nm(r),w=s.createProgram(),p,d,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Vs).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Vs).join(`
`),d.length>0&&(d+=`
`)):(p=[CA(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vs).join(`
`),d=[CA(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",A?"#define CUBEUV_TEXEL_WIDTH "+A.texelWidth:"",A?"#define CUBEUV_TEXEL_HEIGHT "+A.texelHeight:"",A?"#define CUBEUV_MAX_MIP "+A.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==nn?"#define TONE_MAPPING":"",e.toneMapping!==nn?Lt.tonemapping_pars_fragment:"",e.toneMapping!==nn?$p("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Lt.colorspace_pars_fragment,qp("linearToOutputTexel",e.outputColorSpace),tm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Vs).join(`
`)),a=_l(a),a=SA(a,e),a=BA(a,e),o=_l(o),o=SA(o,e),o=BA(o,e),a=bA(a),o=bA(o),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",e.glslVersion===il?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===il?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let B=x+p+a,M=x+d+o,E=EA(s,s.VERTEX_SHADER,B),_=EA(s,s.FRAGMENT_SHADER,M);s.attachShader(w,E),s.attachShader(w,_),e.index0AttributeName!==void 0?s.bindAttribLocation(w,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(w,0,"position"),s.linkProgram(w);function b(R){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(w)||"",Q=s.getShaderInfoLog(E)||"",F=s.getShaderInfoLog(_)||"",Y=U.trim(),K=Q.trim(),Z=F.trim(),nt=!0,V=!0;if(s.getProgramParameter(w,s.LINK_STATUS)===!1)if(nt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,w,E,_);else{let $=yA(s,E,"vertex"),et=yA(s,_,"fragment");Ct("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(w,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+Y+`
`+$+`
`+et)}else Y!==""?bt("WebGLProgram: Program Info Log:",Y):(K===""||Z==="")&&(V=!1);V&&(R.diagnostics={runnable:nt,programLog:Y,vertexShader:{log:K,prefix:p},fragmentShader:{log:Z,prefix:d}})}s.deleteShader(E),s.deleteShader(_),D=new Vi(s,w),S=im(s,w)}let D;this.getUniforms=function(){return D===void 0&&b(this),D};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(w,Xp)),T},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(w),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Kp++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=E,this.fragmentShader=_,this}var vm=0,yl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Sl(t),e.set(t,n)),n}},Sl=class{constructor(t){this.id=vm++,this.code=t,this.usedTimes=0}};function wm(i){return i===kn||i===Gs||i===Hs}function Mm(i,t,e,n,s,r){let a=new cs,o=new yl,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,A=n.precision,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(D){return l.add(D),D===0?"uv":`uv${D}`}function w(D,S,T,R,U,Q){let F=R.fog,Y=U.geometry,K=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?R.environment:null,Z=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap,nt=t.get(D.envMap||K,Z),V=nt&&nt.mapping===Ps?nt.image.height:null,$=u[D.type];D.precision!==null&&(A=n.getMaxPrecision(D.precision),A!==D.precision&&bt("WebGLProgram.getParameters:",D.precision,"not supported, using",A,"instead."));let et=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,St=et!==void 0?et.length:0,_t=0;Y.morphAttributes.position!==void 0&&(_t=1),Y.morphAttributes.normal!==void 0&&(_t=2),Y.morphAttributes.color!==void 0&&(_t=3);let te,zt,kt,k;if($){let ne=vn[$];te=ne.vertexShader,zt=ne.fragmentShader}else{te=D.vertexShader,zt=D.fragmentShader;let ne=o.getVertexShaderStage(D),Xt=o.getFragmentShaderStage(D);o.update(D,ne,Xt),kt=ne.id,k=Xt.id}let j=i.getRenderTarget(),gt=i.state.buffers.depth.getReversed(),It=U.isInstancedMesh===!0,pt=U.isBatchedMesh===!0,Ut=!!D.map,me=!!D.matcap,Ot=!!nt,Vt=!!D.aoMap,ee=!!D.lightMap,Ht=!!D.bumpMap&&D.wireframe===!1,ae=!!D.normalMap,Me=!!D.displacementMap,Re=!!D.emissiveMap,Ae=!!D.metalnessMap,ue=!!D.roughnessMap,P=D.anisotropy>0,Se=D.clearcoat>0,Jt=D.dispersion>0,y=D.retroreflectivity>0,g=D.iridescence>0,N=D.sheen>0,H=D.transmission>0,W=P&&!!D.anisotropyMap,it=Se&&!!D.clearcoatMap,st=Se&&!!D.clearcoatNormalMap,X=Se&&!!D.clearcoatRoughnessMap,q=g&&!!D.iridescenceMap,rt=g&&!!D.iridescenceThicknessMap,xt=N&&!!D.sheenColorMap,ct=N&&!!D.sheenRoughnessMap,at=!!D.specularMap,Et=!!D.specularColorMap,Bt=!!D.specularIntensityMap,Pt=H&&!!D.transmissionMap,I=H&&!!D.thicknessMap,ot=!!D.gradientMap,J=!!D.alphaMap,lt=D.alphaTest>0,ut=!!D.alphaHash,tt=!!D.extensions,yt=nn;D.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(yt=i.toneMapping);let wt={shaderID:$,shaderType:D.type,shaderName:D.name,vertexShader:te,fragmentShader:zt,defines:D.defines,customVertexShaderID:kt,customFragmentShaderID:k,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:A,batching:pt,batchingColor:pt&&U._colorsTexture!==null,instancing:It,instancingColor:It&&U.instanceColor!==null,instancingMorph:It&&U.morphTexture!==null,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Qt.workingColorSpace,alphaToCoverage:!!D.alphaToCoverage,map:Ut,matcap:me,envMap:Ot,envMapMode:Ot&&nt.mapping,envMapCubeUVHeight:V,aoMap:Vt,lightMap:ee,bumpMap:Ht,normalMap:ae,displacementMap:Me,emissiveMap:Re,normalMapObjectSpace:ae&&D.normalMapType===kc,normalMapTangentSpace:ae&&D.normalMapType===Qs,packedNormalMap:ae&&D.normalMapType===Qs&&wm(D.normalMap.format),metalnessMap:Ae,roughnessMap:ue,anisotropy:P,anisotropyMap:W,clearcoat:Se,clearcoatMap:it,clearcoatNormalMap:st,clearcoatRoughnessMap:X,dispersion:Jt,retroreflection:y,iridescence:g,iridescenceMap:q,iridescenceThicknessMap:rt,sheen:N,sheenColorMap:xt,sheenRoughnessMap:ct,specularMap:at,specularColorMap:Et,specularIntensityMap:Bt,transmission:H,transmissionMap:Pt,thicknessMap:I,gradientMap:ot,opaque:D.transparent===!1&&D.blending===Hi&&D.alphaToCoverage===!1,alphaMap:J,alphaTest:lt,alphaHash:ut,combine:D.combine,mapUv:Ut&&m(D.map.channel),aoMapUv:Vt&&m(D.aoMap.channel),lightMapUv:ee&&m(D.lightMap.channel),bumpMapUv:Ht&&m(D.bumpMap.channel),normalMapUv:ae&&m(D.normalMap.channel),displacementMapUv:Me&&m(D.displacementMap.channel),emissiveMapUv:Re&&m(D.emissiveMap.channel),metalnessMapUv:Ae&&m(D.metalnessMap.channel),roughnessMapUv:ue&&m(D.roughnessMap.channel),anisotropyMapUv:W&&m(D.anisotropyMap.channel),clearcoatMapUv:it&&m(D.clearcoatMap.channel),clearcoatNormalMapUv:st&&m(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&m(D.clearcoatRoughnessMap.channel),iridescenceMapUv:q&&m(D.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&m(D.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&m(D.sheenColorMap.channel),sheenRoughnessMapUv:ct&&m(D.sheenRoughnessMap.channel),specularMapUv:at&&m(D.specularMap.channel),specularColorMapUv:Et&&m(D.specularColorMap.channel),specularIntensityMapUv:Bt&&m(D.specularIntensityMap.channel),transmissionMapUv:Pt&&m(D.transmissionMap.channel),thicknessMapUv:I&&m(D.thicknessMap.channel),alphaMapUv:J&&m(D.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(ae||P),vertexNormals:!!Y.attributes.normal,vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!Y.attributes.uv&&(Ut||J),fog:!!F,useFog:D.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:D.wireframe===!1&&(D.flatShading===!0||Y.attributes.normal===void 0&&ae===!1&&(D.isMeshLambertMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isMeshPhysicalMaterial)),sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:gt,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:Y.attributes.position!==void 0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:_t,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:Q.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:D.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:yt,decodeVideoTexture:Ut&&D.map.isVideoTexture===!0&&Qt.getTransfer(D.map.colorSpace)===Zt,decodeVideoTextureEmissive:Re&&D.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(D.emissiveMap.colorSpace)===Zt,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Ke,flipSided:D.side===ye,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:tt&&D.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(tt&&D.extensions.multiDraw===!0||pt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return wt.vertexUv1s=l.has(1),wt.vertexUv2s=l.has(2),wt.vertexUv3s=l.has(3),l.clear(),wt}function p(D){let S=[];if(D.shaderID?S.push(D.shaderID):(S.push(D.customVertexShaderID),S.push(D.customFragmentShaderID)),D.defines!==void 0)for(let T in D.defines)S.push(T),S.push(D.defines[T]);return D.isRawShaderMaterial===!1&&(d(S,D),x(S,D),S.push(i.outputColorSpace)),S.push(D.customProgramCacheKey),S.join()}function d(D,S){D.push(S.precision),D.push(S.outputColorSpace),D.push(S.envMapMode),D.push(S.envMapCubeUVHeight),D.push(S.mapUv),D.push(S.alphaMapUv),D.push(S.lightMapUv),D.push(S.aoMapUv),D.push(S.bumpMapUv),D.push(S.normalMapUv),D.push(S.displacementMapUv),D.push(S.emissiveMapUv),D.push(S.metalnessMapUv),D.push(S.roughnessMapUv),D.push(S.anisotropyMapUv),D.push(S.clearcoatMapUv),D.push(S.clearcoatNormalMapUv),D.push(S.clearcoatRoughnessMapUv),D.push(S.iridescenceMapUv),D.push(S.iridescenceThicknessMapUv),D.push(S.sheenColorMapUv),D.push(S.sheenRoughnessMapUv),D.push(S.specularMapUv),D.push(S.specularColorMapUv),D.push(S.specularIntensityMapUv),D.push(S.transmissionMapUv),D.push(S.thicknessMapUv),D.push(S.combine),D.push(S.fogExp2),D.push(S.sizeAttenuation),D.push(S.morphTargetsCount),D.push(S.morphAttributeCount),D.push(S.numSunLights),D.push(S.numDirLights),D.push(S.numPointLights),D.push(S.numSpotLights),D.push(S.numSpotLightMaps),D.push(S.numHemiLights),D.push(S.numRectAreaLights),D.push(S.numSunLightShadows),D.push(S.numDirLightShadows),D.push(S.numPointLightShadows),D.push(S.numSpotLightShadows),D.push(S.numSpotLightShadowsWithMaps),D.push(S.numLightProbes),D.push(S.shadowMapType),D.push(S.toneMapping),D.push(S.numClippingPlanes),D.push(S.numClipIntersection),D.push(S.depthPacking)}function x(D,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),D.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),D.push(a.mask)}function B(D){let S=u[D.type],T;if(S){let R=vn[S];T=AA.clone(R.uniforms)}else T=D.uniforms;return T}function M(D,S){let T=h.get(S);return T!==void 0?++T.usedTimes:(T=new Dm(i,S,D,s),c.push(T),h.set(S,T)),T}function E(D){if(--D.usedTimes===0){let S=c.indexOf(D);c[S]=c[c.length-1],c.pop(),h.delete(D.cacheKey),D.destroy()}}function _(D){o.remove(D)}function b(){o.dispose()}return{getParameters:w,getProgramCacheKey:p,getUniforms:B,acquireProgram:M,releaseProgram:E,releaseShaderCache:_,programs:c,dispose:b}}function xm(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Em(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function TA(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function IA(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(A){let u=0;return A.isInstancedMesh&&(u+=2),A.isSkinnedMesh&&(u+=1),u}function o(A,u,m,w,p,d){let x=i[t];return x===void 0?(x={id:A.id,object:A,geometry:u,material:m,materialVariant:a(A),groupOrder:w,renderOrder:A.renderOrder,z:p,group:d},i[t]=x):(x.id=A.id,x.object=A,x.geometry=u,x.material=m,x.materialVariant=a(A),x.groupOrder=w,x.renderOrder=A.renderOrder,x.z=p,x.group=d),t++,x}function l(A,u,m,w,p,d,x){x.reversedDepth===!0&&(p=-p);let B=o(A,u,m,w,p,d);m.transmission>0?n.push(B):m.transparent===!0?s.push(B):e.push(B)}function c(A,u,m,w,p,d){let x=o(A,u,m,w,p,d);m.transmission>0?n.unshift(x):m.transparent===!0?s.unshift(x):e.unshift(x)}function h(A,u){e.length>1&&e.sort(A||Em),n.length>1&&n.sort(u||TA),s.length>1&&s.sort(u||TA)}function f(){for(let A=t,u=i.length;A<u;A++){let m=i[A];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function _m(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new IA,i.set(n,[a])):s>=r.length?(a=new IA,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function ym(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new L,color:new Ft};break;case"SpotLight":e={position:new L,direction:new L,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":e={color:new Ft,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function Sm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Bm=0;function bm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Cm(i){let t=new ym,e=Sm(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let s=new L,r=new qt,a=new qt;function o(c){let h=0,f=0,A=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let u=0,m=0,w=0,p=0,d=0,x=0,B=0,M=0,E=0,_=0,b=0,D=0,S=0,T=0;c.sort(bm);for(let U=0,Q=c.length;U<Q;U++){let F=c[U],Y=F.color,K=F.intensity,Z=F.distance,nt=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===kn?nt=F.shadow.map.texture:nt=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)h+=Y.r*K,f+=Y.g*K,A+=Y.b*K;else if(F.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(F.sh.coefficients[V],K);T++}else if(F.isSunLight){let V=t.get(F);if(V.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let $=F.shadow,et=e.get(F);et.shadowIntensity=$.intensity,et.shadowBias=$.bias,et.shadowNormalBias=$.normalBias,et.shadowRadius=$.radius,et.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),n.sunShadow[m]=et,n.sunShadowMap[m]=nt;let St=$.getViewportCount();for(let _t=0;_t<St;_t++)n.sunShadowMatrix[w+_t]=$.getMatrix(_t),n.sunShadowCascade[w+_t]=$._cascadeData[_t];w+=St,m++}n.sun[u]=V,u++}else if(F.isDirectionalLight){let V=t.get(F);if(V.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let $=F.shadow,et=e.get(F);et.shadowIntensity=$.intensity,et.shadowBias=$.bias,et.shadowNormalBias=$.normalBias,et.shadowRadius=$.radius,et.shadowMapSize=$.mapSize,n.directionalShadow[p]=et,n.directionalShadowMap[p]=nt,n.directionalShadowMatrix[p]=F.shadow.matrix,E++}n.directional[p]=V,p++}else if(F.isSpotLight){let V=t.get(F);V.position.setFromMatrixPosition(F.matrixWorld),V.color.copy(Y).multiplyScalar(K),V.distance=Z,V.coneCos=Math.cos(F.angle),V.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),V.decay=F.decay,n.spot[x]=V;let $=F.shadow;if(F.map&&(n.spotLightMap[D]=F.map,D++,$.updateMatrices(F),F.castShadow&&S++),n.spotLightMatrix[x]=$.matrix,F.castShadow){let et=e.get(F);et.shadowIntensity=$.intensity,et.shadowBias=$.bias,et.shadowNormalBias=$.normalBias,et.shadowRadius=$.radius,et.shadowMapSize=$.mapSize,n.spotShadow[x]=et,n.spotShadowMap[x]=nt,b++}x++}else if(F.isRectAreaLight){let V=t.get(F);V.color.copy(Y).multiplyScalar(K),V.halfWidth.set(F.width*.5,0,0),V.halfHeight.set(0,F.height*.5,0),n.rectArea[B]=V,B++}else if(F.isPointLight){let V=t.get(F);if(V.color.copy(F.color).multiplyScalar(F.intensity),V.distance=F.distance,V.decay=F.decay,F.castShadow){let $=F.shadow,et=e.get(F);et.shadowIntensity=$.intensity,et.shadowBias=$.bias,et.shadowNormalBias=$.normalBias,et.shadowRadius=$.radius,et.shadowMapSize=$.mapSize,et.shadowCameraNear=$.camera.near,et.shadowCameraFar=$.camera.far,n.pointShadow[d]=et,n.pointShadowMap[d]=nt,n.pointShadowMatrix[d]=F.shadow.matrix,_++}n.point[d]=V,d++}else if(F.isHemisphereLight){let V=t.get(F);V.skyColor.copy(F.color).multiplyScalar(K),V.groundColor.copy(F.groundColor).multiplyScalar(K),n.hemi[M]=V,M++}}B>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=At.LTC_FLOAT_1,n.rectAreaLTC2=At.LTC_FLOAT_2):(n.rectAreaLTC1=At.LTC_HALF_1,n.rectAreaLTC2=At.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=A;let R=n.hash;(R.sunLength!==u||R.directionalLength!==p||R.pointLength!==d||R.spotLength!==x||R.rectAreaLength!==B||R.hemiLength!==M||R.numSunShadows!==m||R.numDirectionalShadows!==E||R.numPointShadows!==_||R.numSpotShadows!==b||R.numSpotMaps!==D||R.numLightProbes!==T)&&(n.sun.length=u,n.directional.length=p,n.spot.length=x,n.rectArea.length=B,n.point.length=d,n.hemi.length=M,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=w,n.sunShadowCascade.length=w,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=_,n.pointShadowMap.length=_,n.pointShadowMatrix.length=_,n.spotShadow.length=b,n.spotShadowMap.length=b,n.spotLightMatrix.length=b+D-S,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=T,R.sunLength=u,R.directionalLength=p,R.pointLength=d,R.spotLength=x,R.rectAreaLength=B,R.hemiLength=M,R.numSunShadows=m,R.numDirectionalShadows=E,R.numPointShadows=_,R.numSpotShadows=b,R.numSpotMaps=D,R.numLightProbes=T,n.version=Bm++)}function l(c,h){let f=0,A=0,u=0,m=0,w=0,p=0,d=h.matrixWorldInverse;for(let x=0,B=c.length;x<B;x++){let M=c[x];if(M.isSunLight){let E=n.sun[f];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(d),f++}else if(M.isDirectionalLight){let E=n.directional[A];E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(d),A++}else if(M.isSpotLight){let E=n.spot[m];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(d),E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(d),m++}else if(M.isRectAreaLight){let E=n.rectArea[w];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(d),a.identity(),r.copy(M.matrixWorld),r.premultiply(d),a.extractRotation(r),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),w++}else if(M.isPointLight){let E=n.point[u];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(d),u++}else if(M.isHemisphereLight){let E=n.hemi[p];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(d),p++}}}return{setup:o,setupView:l,state:n}}function FA(i){let t=new Cm(i),e=[],n=[],s=[];function r(A){f.camera=A,e.length=0,n.length=0,s.length=0}function a(A){e.push(A)}function o(A){n.push(A)}function l(A){s.push(A)}function c(){t.setup(e)}function h(A){t.setupView(e,A)}let f={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Tm(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new FA(i),t.set(s,[o])):r>=a.length?(o=new FA(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Im=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Pm=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],Rm=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],PA=new qt,Ws=new L,vl=new L;function Lm(i,t,e){let n=new Ri,s=new Nt,r=new Nt,a=new le,o=new Hr,l=new Qr,c={},h=e.maxTextureSize,f={[zn]:ye,[ye]:zn,[Ke]:Ke},A=new ze({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:Im,fragmentShader:Fm}),u=A.clone();u.defines.HORIZONTAL_PASS=1;let m=new Pe;m.setAttribute("position",new Ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let w=new ce(m,A),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ri;let d=this.type;this.render=function(_,b,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||_.length===0)return;this.type===Ec&&(bt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ri);let S=i.getRenderTarget(),T=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),U=i.state;U.setBlending(mn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let Q=d!==this.type;Q&&b.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(Y=>Y.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,Y=_.length;F<Y;F++){let K=_[F],Z=K.shadow;if(Z===void 0){bt("WebGLShadowMap:",K,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let nt=Z.getFrameExtents();s.multiply(nt),r.copy(Z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/nt.x),s.x=r.x*nt.x,Z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/nt.y),s.y=r.y*nt.y,Z.mapSize.y=r.y));let V=i.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=V,Z.map===null||Q===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===Gi){if(K.isPointLight){bt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new Ue(s.x,s.y,{format:kn,type:rn,minFilter:ge,magFilter:ge,generateMipmaps:!1}),Z.map.texture.name=K.name+".shadowMap",Z.map.depthTexture=new Un(s.x,s.y,Ze),Z.map.depthTexture.name=K.name+".shadowMapDepth",Z.map.depthTexture.format=An,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Ee,Z.map.depthTexture.magFilter=Ee}else K.isPointLight?(Z.map=new ka(s.x),Z.map.depthTexture=new Or(s.x,sn)):(Z.map=new Ue(s.x,s.y),Z.map.depthTexture=new Un(s.x,s.y,sn)),Z.map.depthTexture.name=K.name+".shadowMap",Z.map.depthTexture.format=An,this.type===ri?(Z.map.depthTexture.compareFunction=V?za:Ya,Z.map.depthTexture.minFilter=ge,Z.map.depthTexture.magFilter=ge):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Ee,Z.map.depthTexture.magFilter=Ee);Z.camera.updateProjectionMatrix()}Z.map.isWebGLCubeRenderTarget!==!0&&(Z.map.width!==s.x||Z.map.height!==s.y)&&Z.map.setSize(s.x,s.y);let $=Z.map.isWebGLCubeRenderTarget?6:Z.getViewportCount();K.isPointLight!==!0&&Z.updateMatrices(K,D);for(let et=0;et<$;et++){let St=Z.getCamera(et);if(K.isPointLight){let _t=Z.camera,te=Z.matrix,zt=K.distance||_t.far;zt!==_t.far&&(_t.far=zt,_t.updateProjectionMatrix()),Ws.setFromMatrixPosition(K.matrixWorld),_t.position.copy(Ws),vl.copy(_t.position),vl.add(Pm[et]),_t.up.copy(Rm[et]),_t.lookAt(vl),_t.updateMatrixWorld(),te.makeTranslation(-Ws.x,-Ws.y,-Ws.z),PA.multiplyMatrices(_t.projectionMatrix,_t.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(PA,_t.coordinateSystem,_t.reversedDepth)}if(Z.map.isWebGLCubeRenderTarget)i.setRenderTarget(Z.map,et),i.clear();else{et===0&&(i.setRenderTarget(Z.map),i.clear());let _t=Z.getViewport(et);a.set(r.x*_t.x,r.y*_t.y,r.x*_t.z,r.y*_t.w),U.viewport(a)}n=Z.getFrustum(et),M(b,D,St,K,this.type)}Z.isPointLightShadow!==!0&&this.type===Gi&&x(Z,D),Z.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(S,T,R)};function x(_,b){let D=t.update(w);A.defines.VSM_SAMPLES!==_.blurSamples&&(A.defines.VSM_SAMPLES=_.blurSamples,u.defines.VSM_SAMPLES=_.blurSamples,A.needsUpdate=!0,u.needsUpdate=!0),_.mapPass===null?_.mapPass=new Ue(s.x,s.y,{format:kn,type:rn}):(_.mapPass.width!==_.map.width||_.mapPass.height!==_.map.height)&&_.mapPass.setSize(_.map.width,_.map.height),A.uniforms.shadow_pass.value=_.map.depthTexture,A.uniforms.resolution.value.set(_.map.width,_.map.height),A.uniforms.radius.value=_.radius,i.setRenderTarget(_.mapPass),i.clear(),i.renderBufferDirect(b,null,D,A,w,null),u.uniforms.shadow_pass.value=_.mapPass.texture,u.uniforms.resolution.value.set(_.map.width,_.map.height),u.uniforms.radius.value=_.radius,i.setRenderTarget(_.map),i.clear(),i.renderBufferDirect(b,null,D,u,w,null)}function B(_,b,D,S){let T=null,R=D.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if(R!==void 0)T=R;else if(T=D.isPointLight===!0?l:o,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){let U=T.uuid,Q=b.uuid,F=c[U];F===void 0&&(F={},c[U]=F);let Y=F[Q];Y===void 0&&(Y=T.clone(),F[Q]=Y,b.addEventListener("dispose",E)),T=Y}if(T.visible=b.visible,T.wireframe=b.wireframe,S===Gi?T.side=b.shadowSide!==null?b.shadowSide:b.side:T.side=b.shadowSide!==null?b.shadowSide:f[b.side],T.alphaMap=b.alphaMap,T.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,T.map=b.map,T.clipShadows=b.clipShadows,T.clippingPlanes=b.clippingPlanes,T.clipIntersection=b.clipIntersection,T.displacementMap=b.displacementMap,T.displacementScale=b.displacementScale,T.displacementBias=b.displacementBias,T.wireframeLinewidth=b.wireframeLinewidth,T.linewidth=b.linewidth,D.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let U=i.properties.get(T);U.light=D}return T}function M(_,b,D,S,T){if(_.visible===!1)return;if(_.layers.test(b.layers)&&(_.isMesh||_.isLine||_.isPoints)&&(_.castShadow||_.receiveShadow&&T===Gi)&&(!_.frustumCulled||_.intersectsFrustum(n))){_.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,_.matrixWorld);let Q=t.update(_),F=_.material;if(Array.isArray(F)){let Y=Q.groups;for(let K=0,Z=Y.length;K<Z;K++){let nt=Y[K],V=F[nt.materialIndex];if(V&&V.visible){let $=B(_,V,S,T);_.onBeforeShadow(i,_,b,D,Q,$,nt),i.renderBufferDirect(D,null,Q,$,_,nt),_.onAfterShadow(i,_,b,D,Q,$,nt)}}}else if(F.visible){let Y=B(_,F,S,T);_.onBeforeShadow(i,_,b,D,Q,Y,null),i.renderBufferDirect(D,null,Q,Y,_,null),_.onAfterShadow(i,_,b,D,Q,Y,null)}}let U=_.children;for(let Q=0,F=U.length;Q<F;Q++)M(U[Q],b,D,S,T)}function E(_){_.target.removeEventListener("dispose",E);for(let D in c){let S=c[D],T=_.target.uuid;T in S&&(S[T].dispose(),delete S[T])}}}function Nm(i,t){function e(){let I=!1,ot=new le,J=null,lt=new le(0,0,0,0);return{setMask:function(ut){J!==ut&&!I&&(i.colorMask(ut,ut,ut,ut),J=ut)},setLocked:function(ut){I=ut},setClear:function(ut,tt,yt,wt,ne){ne===!0&&(ut*=wt,tt*=wt,yt*=wt),ot.set(ut,tt,yt,wt),lt.equals(ot)===!1&&(i.clearColor(ut,tt,yt,wt),lt.copy(ot))},reset:function(){I=!1,J=null,lt.set(-1,0,0,0)}}}function n(){let I=!1,ot=!1,J=null,lt=null,ut=null;return{setReversed:function(tt){if(ot!==tt){let yt=t.get("EXT_clip_control");tt?yt.clipControlEXT(yt.LOWER_LEFT_EXT,yt.ZERO_TO_ONE_EXT):yt.clipControlEXT(yt.LOWER_LEFT_EXT,yt.NEGATIVE_ONE_TO_ONE_EXT),ot=tt;let wt=ut;ut=null,this.setClear(wt)}},getReversed:function(){return ot},setTest:function(tt){tt?j(i.DEPTH_TEST):gt(i.DEPTH_TEST)},setMask:function(tt){J!==tt&&!I&&(i.depthMask(tt),J=tt)},setFunc:function(tt){if(ot&&(tt=sA[tt]),lt!==tt){switch(tt){case xr:i.depthFunc(i.NEVER);break;case Er:i.depthFunc(i.ALWAYS);break;case _r:i.depthFunc(i.LESS);break;case bi:i.depthFunc(i.LEQUAL);break;case yr:i.depthFunc(i.EQUAL);break;case Sr:i.depthFunc(i.GEQUAL);break;case Br:i.depthFunc(i.GREATER);break;case br:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}lt=tt}},setLocked:function(tt){I=tt},setClear:function(tt){ut!==tt&&(ut=tt,ot&&(tt=1-tt),i.clearDepth(tt))},reset:function(){I=!1,J=null,lt=null,ut=null,ot=!1}}}function s(){let I=!1,ot=null,J=null,lt=null,ut=null,tt=null,yt=null,wt=null,ne=null;return{setTest:function(Xt){I||(Xt?j(i.STENCIL_TEST):gt(i.STENCIL_TEST))},setMask:function(Xt){ot!==Xt&&!I&&(i.stencilMask(Xt),ot=Xt)},setFunc:function(Xt,Je,an){(J!==Xt||lt!==Je||ut!==an)&&(i.stencilFunc(Xt,Je,an),J=Xt,lt=Je,ut=an)},setOp:function(Xt,Je,an){(tt!==Xt||yt!==Je||wt!==an)&&(i.stencilOp(Xt,Je,an),tt=Xt,yt=Je,wt=an)},setLocked:function(Xt){I=Xt},setClear:function(Xt){ne!==Xt&&(i.clearStencil(Xt),ne=Xt)},reset:function(){I=!1,ot=null,J=null,lt=null,ut=null,tt=null,yt=null,wt=null,ne=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},f={},A={},u=new WeakMap,m=[],w=null,p=!1,d=null,x=null,B=null,M=null,E=null,_=null,b=null,D=new Ft(0,0,0),S=0,T=!1,R=null,U=null,Q=null,F=null,Y=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,nt=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(V)[1]),Z=nt>=1):V.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),Z=nt>=2);let $=null,et={},St=i.getParameter(i.SCISSOR_BOX),_t=i.getParameter(i.VIEWPORT),te=new le().fromArray(St),zt=new le().fromArray(_t);function kt(I,ot,J,lt){let ut=new Uint8Array(4),tt=i.createTexture();i.bindTexture(I,tt),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let yt=0;yt<J;yt++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(ot,0,i.RGBA,1,1,lt,0,i.RGBA,i.UNSIGNED_BYTE,ut):i.texImage2D(ot+yt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ut);return tt}let k={};k[i.TEXTURE_2D]=kt(i.TEXTURE_2D,i.TEXTURE_2D,1),k[i.TEXTURE_CUBE_MAP]=kt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),k[i.TEXTURE_2D_ARRAY]=kt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),k[i.TEXTURE_3D]=kt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(i.DEPTH_TEST),a.setFunc(bi),Ht(!1),ae(Oo),j(i.CULL_FACE),Vt(mn);function j(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function gt(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function It(I,ot){return A[I]!==ot?(i.bindFramebuffer(I,ot),A[I]=ot,I===i.DRAW_FRAMEBUFFER&&(A[i.FRAMEBUFFER]=ot),I===i.FRAMEBUFFER&&(A[i.DRAW_FRAMEBUFFER]=ot),!0):!1}function pt(I,ot){let J=m,lt=!1;if(I){J=u.get(ot),J===void 0&&(J=[],u.set(ot,J));let ut=I.textures;if(J.length!==ut.length||J[0]!==i.COLOR_ATTACHMENT0){for(let tt=0,yt=ut.length;tt<yt;tt++)J[tt]=i.COLOR_ATTACHMENT0+tt;J.length=ut.length,lt=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,lt=!0);lt&&i.drawBuffers(J)}function Ut(I){return w!==I?(i.useProgram(I),w=I,!0):!1}let me={[ai]:i.FUNC_ADD,[yc]:i.FUNC_SUBTRACT,[Sc]:i.FUNC_REVERSE_SUBTRACT};me[Bc]=i.MIN,me[bc]=i.MAX;let Ot={[Cc]:i.ZERO,[Tc]:i.ONE,[Ic]:i.SRC_COLOR,[Yo]:i.SRC_ALPHA,[Uc]:i.SRC_ALPHA_SATURATE,[Lc]:i.DST_COLOR,[Pc]:i.DST_ALPHA,[Fc]:i.ONE_MINUS_SRC_COLOR,[zo]:i.ONE_MINUS_SRC_ALPHA,[Nc]:i.ONE_MINUS_DST_COLOR,[Rc]:i.ONE_MINUS_DST_ALPHA,[Oc]:i.CONSTANT_COLOR,[Gc]:i.ONE_MINUS_CONSTANT_COLOR,[Hc]:i.CONSTANT_ALPHA,[Qc]:i.ONE_MINUS_CONSTANT_ALPHA};function Vt(I,ot,J,lt,ut,tt,yt,wt,ne,Xt){if(I===mn){p===!0&&(gt(i.BLEND),p=!1);return}if(p===!1&&(j(i.BLEND),p=!0),I!==_c){if(I!==d||Xt!==T){if((x!==ai||E!==ai)&&(i.blendEquation(i.FUNC_ADD),x=ai,E=ai),Xt)switch(I){case Hi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Go:i.blendFunc(i.ONE,i.ONE);break;case Ho:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Qo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ct("WebGLState: Invalid blending: ",I);break}else switch(I){case Hi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Go:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ho:Ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qo:Ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ct("WebGLState: Invalid blending: ",I);break}B=null,M=null,_=null,b=null,D.set(0,0,0),S=0,d=I,T=Xt}return}ut=ut||ot,tt=tt||J,yt=yt||lt,(ot!==x||ut!==E)&&(i.blendEquationSeparate(me[ot],me[ut]),x=ot,E=ut),(J!==B||lt!==M||tt!==_||yt!==b)&&(i.blendFuncSeparate(Ot[J],Ot[lt],Ot[tt],Ot[yt]),B=J,M=lt,_=tt,b=yt),(wt.equals(D)===!1||ne!==S)&&(i.blendColor(wt.r,wt.g,wt.b,ne),D.copy(wt),S=ne),d=I,T=!1}function ee(I,ot){I.side===Ke?gt(i.CULL_FACE):j(i.CULL_FACE);let J=I.side===ye;ot&&(J=!J),Ht(J),I.blending===Hi&&I.transparent===!1?Vt(mn):Vt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);let lt=I.stencilWrite;o.setTest(lt),lt&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Re(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):gt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(I){R!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),R=I)}function ae(I){I!==Mc?(j(i.CULL_FACE),I!==U&&(I===Oo?i.cullFace(i.BACK):I===xc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):gt(i.CULL_FACE),U=I}function Me(I){I!==Q&&(Z&&i.lineWidth(I),Q=I)}function Re(I,ot,J){I?(j(i.POLYGON_OFFSET_FILL),(F!==ot||Y!==J)&&(F=ot,Y=J,a.getReversed()&&(ot=-ot),i.polygonOffset(ot,J))):gt(i.POLYGON_OFFSET_FILL)}function Ae(I){I?j(i.SCISSOR_TEST):gt(i.SCISSOR_TEST)}function ue(I){I===void 0&&(I=i.TEXTURE0+K-1),$!==I&&(i.activeTexture(I),$=I)}function P(I,ot,J){J===void 0&&($===null?J=i.TEXTURE0+K-1:J=$);let lt=et[J];lt===void 0&&(lt={type:void 0,texture:void 0},et[J]=lt),(lt.type!==I||lt.texture!==ot)&&($!==J&&(i.activeTexture(J),$=J),i.bindTexture(I,ot||k[I]),lt.type=I,lt.texture=ot)}function Se(){let I=et[$];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Jt(){try{i.compressedTexImage2D(...arguments)}catch(I){Ct("WebGLState:",I)}}function y(){try{i.compressedTexImage3D(...arguments)}catch(I){Ct("WebGLState:",I)}}function g(){try{i.texSubImage2D(...arguments)}catch(I){Ct("WebGLState:",I)}}function N(){try{i.texSubImage3D(...arguments)}catch(I){Ct("WebGLState:",I)}}function H(){try{i.compressedTexSubImage2D(...arguments)}catch(I){Ct("WebGLState:",I)}}function W(){try{i.compressedTexSubImage3D(...arguments)}catch(I){Ct("WebGLState:",I)}}function it(){try{i.texStorage2D(...arguments)}catch(I){Ct("WebGLState:",I)}}function st(){try{i.texStorage3D(...arguments)}catch(I){Ct("WebGLState:",I)}}function X(){try{i.texImage2D(...arguments)}catch(I){Ct("WebGLState:",I)}}function q(){try{i.texImage3D(...arguments)}catch(I){Ct("WebGLState:",I)}}function rt(I){return f[I]!==void 0?f[I]:i.getParameter(I)}function xt(I,ot){f[I]!==ot&&(i.pixelStorei(I,ot),f[I]=ot)}function ct(I){te.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),te.copy(I))}function at(I){zt.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),zt.copy(I))}function Et(I,ot){let J=c.get(ot);J===void 0&&(J=new WeakMap,c.set(ot,J));let lt=J.get(I);lt===void 0&&(lt=i.getUniformBlockIndex(ot,I.name),J.set(I,lt))}function Bt(I,ot){let lt=c.get(ot).get(I);l.get(ot)!==lt&&(i.uniformBlockBinding(ot,lt,I.__bindingPointIndex),l.set(ot,lt))}function Pt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},$=null,et={},A={},u=new WeakMap,m=[],w=null,p=!1,d=null,x=null,B=null,M=null,E=null,_=null,b=null,D=new Ft(0,0,0),S=0,T=!1,R=null,U=null,Q=null,F=null,Y=null,te.set(0,0,i.canvas.width,i.canvas.height),zt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:j,disable:gt,bindFramebuffer:It,drawBuffers:pt,useProgram:Ut,setBlending:Vt,setMaterial:ee,setFlipSided:Ht,setCullFace:ae,setLineWidth:Me,setPolygonOffset:Re,setScissorTest:Ae,activeTexture:ue,bindTexture:P,unbindTexture:Se,compressedTexImage2D:Jt,compressedTexImage3D:y,texImage2D:X,texImage3D:q,pixelStorei:xt,getParameter:rt,updateUBOMapping:Et,uniformBlockBinding:Bt,texStorage2D:it,texStorage3D:st,texSubImage2D:g,texSubImage3D:N,compressedTexSubImage2D:H,compressedTexSubImage3D:W,scissor:ct,viewport:at,reset:Pt}}function Um(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Nt,h=new WeakMap,f=new Set,A,u=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(y,g){return m?new OffscreenCanvas(y,g):os("canvas")}function p(y,g,N){let H=1,W=Jt(y);if((W.width>N||W.height>N)&&(H=N/Math.max(W.width,W.height)),H<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){let it=Math.floor(H*W.width),st=Math.floor(H*W.height);A===void 0&&(A=w(it,st));let X=g?w(it,st):A;return X.width=it,X.height=st,X.getContext("2d").drawImage(y,0,0,it,st),bt("WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+it+"x"+st+")."),X}else return"data"in y&&bt("WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),y;return y}function d(y){return y.generateMipmaps}function x(y){i.generateMipmap(y)}function B(y){return y.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?i.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(y,g,N,H,W,it=!1){if(y!==null){if(i[y]!==void 0)return i[y];bt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let st;H&&(st=t.get("EXT_texture_norm16"),st||bt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let X=g;if(g===i.RED&&(N===i.FLOAT&&(X=i.R32F),N===i.HALF_FLOAT&&(X=i.R16F),N===i.UNSIGNED_BYTE&&(X=i.R8),N===i.UNSIGNED_SHORT&&st&&(X=st.R16_EXT),N===i.SHORT&&st&&(X=st.R16_SNORM_EXT)),g===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(X=i.R8UI),N===i.UNSIGNED_SHORT&&(X=i.R16UI),N===i.UNSIGNED_INT&&(X=i.R32UI),N===i.BYTE&&(X=i.R8I),N===i.SHORT&&(X=i.R16I),N===i.INT&&(X=i.R32I)),g===i.RG&&(N===i.FLOAT&&(X=i.RG32F),N===i.HALF_FLOAT&&(X=i.RG16F),N===i.UNSIGNED_BYTE&&(X=i.RG8),N===i.UNSIGNED_SHORT&&st&&(X=st.RG16_EXT),N===i.SHORT&&st&&(X=st.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(X=i.RG8UI),N===i.UNSIGNED_SHORT&&(X=i.RG16UI),N===i.UNSIGNED_INT&&(X=i.RG32UI),N===i.BYTE&&(X=i.RG8I),N===i.SHORT&&(X=i.RG16I),N===i.INT&&(X=i.RG32I)),g===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(X=i.RGB8UI),N===i.UNSIGNED_SHORT&&(X=i.RGB16UI),N===i.UNSIGNED_INT&&(X=i.RGB32UI),N===i.BYTE&&(X=i.RGB8I),N===i.SHORT&&(X=i.RGB16I),N===i.INT&&(X=i.RGB32I)),g===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),N===i.UNSIGNED_INT&&(X=i.RGBA32UI),N===i.BYTE&&(X=i.RGBA8I),N===i.SHORT&&(X=i.RGBA16I),N===i.INT&&(X=i.RGBA32I)),g===i.RGB&&(N===i.UNSIGNED_SHORT&&st&&(X=st.RGB16_EXT),N===i.SHORT&&st&&(X=st.RGB16_SNORM_EXT),N===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),N===i.UNSIGNED_INT_10F_11F_11F_REV&&(X=i.R11F_G11F_B10F)),g===i.RGBA){let q=it?as:Qt.getTransfer(W);N===i.FLOAT&&(X=i.RGBA32F),N===i.HALF_FLOAT&&(X=i.RGBA16F),N===i.UNSIGNED_BYTE&&(X=q===Zt?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT&&st&&(X=st.RGBA16_EXT),N===i.SHORT&&st&&(X=st.RGBA16_SNORM_EXT),N===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function E(y,g){let N;return y?g===null||g===sn||g===Yi?N=i.DEPTH24_STENCIL8:g===Ze?N=i.DEPTH32F_STENCIL8:g===Qi&&(N=i.DEPTH24_STENCIL8,bt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===sn||g===Yi?N=i.DEPTH_COMPONENT24:g===Ze?N=i.DEPTH_COMPONENT32F:g===Qi&&(N=i.DEPTH_COMPONENT16),N}function _(y,g){return d(y)===!0||y.isFramebufferTexture&&y.minFilter!==Ee&&y.minFilter!==ge?Math.log2(Math.max(g.width,g.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?g.mipmaps.length:1}function b(y){let g=y.target;g.removeEventListener("dispose",b),S(g),g.isVideoTexture&&h.delete(g),g.isHTMLTexture&&f.delete(g)}function D(y){let g=y.target;g.removeEventListener("dispose",D),R(g)}function S(y){let g=n.get(y);if(g.__webglInit===void 0)return;let N=y.source,H=u.get(N);if(H){let W=H[g.__cacheKey];W.usedTimes--,W.usedTimes===0&&T(y),Object.keys(H).length===0&&u.delete(N)}n.remove(y)}function T(y){let g=n.get(y);i.deleteTexture(g.__webglTexture);let N=y.source,H=u.get(N);delete H[g.__cacheKey],a.memory.textures--}function R(y){let g=n.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),n.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(g.__webglFramebuffer[H]))for(let W=0;W<g.__webglFramebuffer[H].length;W++)i.deleteFramebuffer(g.__webglFramebuffer[H][W]);else i.deleteFramebuffer(g.__webglFramebuffer[H]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[H])}else{if(Array.isArray(g.__webglFramebuffer))for(let H=0;H<g.__webglFramebuffer.length;H++)i.deleteFramebuffer(g.__webglFramebuffer[H]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let H=0;H<g.__webglColorRenderbuffer.length;H++)g.__webglColorRenderbuffer[H]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[H]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let N=y.textures;for(let H=0,W=N.length;H<W;H++){let it=n.get(N[H]);it.__webglTexture&&(i.deleteTexture(it.__webglTexture),a.memory.textures--),n.remove(N[H])}n.remove(y)}let U=0;function Q(){U=0}function F(){return U}function Y(y){U=y}function K(){let y=U;return y>=s.maxTextures&&bt("WebGLTextures: Trying to use "+(y+1)+" texture units while this GPU supports only "+s.maxTextures),U+=1,y}function Z(y){let g=[];return g.push(y.wrapS),g.push(y.wrapT),g.push(y.wrapR||0),g.push(y.magFilter),g.push(y.minFilter),g.push(y.anisotropy),g.push(y.internalFormat),g.push(y.format),g.push(y.type),g.push(y.generateMipmaps),g.push(y.premultiplyAlpha),g.push(y.flipY),g.push(y.unpackAlignment),g.push(y.colorSpace),g.join()}function nt(y,g){let N=n.get(y);if(y.isVideoTexture&&P(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&N.__version!==y.version){let H=y.image;if(H===null)bt("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)bt("WebGLRenderer: Texture marked for update but image is incomplete");else{gt(N,y,g);return}}else y.isExternalTexture&&(N.__webglTexture=y.sourceTexture?y.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+g)}function V(y,g){let N=n.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&N.__version!==y.version){gt(N,y,g);return}else y.isExternalTexture&&(N.__webglTexture=y.sourceTexture?y.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+g)}function $(y,g){let N=n.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&N.__version!==y.version){gt(N,y,g);return}e.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+g)}function et(y,g){let N=n.get(y);if(y.isCubeDepthTexture!==!0&&y.version>0&&N.__version!==y.version){It(N,y,g);return}e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+g)}let St={[Ci]:i.REPEAT,[cn]:i.CLAMP_TO_EDGE,[Cr]:i.MIRRORED_REPEAT},_t={[Ee]:i.NEAREST,[Wc]:i.NEAREST_MIPMAP_NEAREST,[Rs]:i.NEAREST_MIPMAP_LINEAR,[ge]:i.LINEAR,[sa]:i.LINEAR_MIPMAP_NEAREST,[gn]:i.LINEAR_MIPMAP_LINEAR},te={[Kc]:i.NEVER,[$c]:i.ALWAYS,[Zc]:i.LESS,[Ya]:i.LEQUAL,[Jc]:i.EQUAL,[za]:i.GEQUAL,[qc]:i.GREATER,[jc]:i.NOTEQUAL};function zt(y,g){if(g.type===Ze&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===ge||g.magFilter===sa||g.magFilter===Rs||g.magFilter===gn||g.minFilter===ge||g.minFilter===sa||g.minFilter===Rs||g.minFilter===gn)&&bt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(y,i.TEXTURE_WRAP_S,St[g.wrapS]),i.texParameteri(y,i.TEXTURE_WRAP_T,St[g.wrapT]),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,St[g.wrapR]),i.texParameteri(y,i.TEXTURE_MAG_FILTER,_t[g.magFilter]),i.texParameteri(y,i.TEXTURE_MIN_FILTER,_t[g.minFilter]),g.compareFunction&&(i.texParameteri(y,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(y,i.TEXTURE_COMPARE_FUNC,te[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Ee||g.minFilter!==Rs&&g.minFilter!==gn||g.type===Ze&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let N=t.get("EXT_texture_filter_anisotropic");i.texParameterf(y,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function kt(y,g){let N=!1;y.__webglInit===void 0&&(y.__webglInit=!0,g.addEventListener("dispose",b));let H=g.source,W=u.get(H);W===void 0&&(W={},u.set(H,W));let it=Z(g);if(it!==y.__cacheKey){W[it]===void 0&&(W[it]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),W[it].usedTimes++;let st=W[y.__cacheKey];st!==void 0&&(W[y.__cacheKey].usedTimes--,st.usedTimes===0&&T(g)),y.__cacheKey=it,y.__webglTexture=W[it].texture}return N}function k(y,g,N){return Math.floor(Math.floor(y/N)/g)}function j(y,g,N,H){let it=y.updateRanges;if(it.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,N,H,g.data);else{it.sort((xt,ct)=>xt.start-ct.start);let st=0;for(let xt=1;xt<it.length;xt++){let ct=it[st],at=it[xt],Et=ct.start+ct.count,Bt=k(at.start,g.width,4),Pt=k(ct.start,g.width,4);at.start<=Et+1&&Bt===Pt&&k(at.start+at.count-1,g.width,4)===Bt?ct.count=Math.max(ct.count,at.start+at.count-ct.start):(++st,it[st]=at)}it.length=st+1;let X=e.getParameter(i.UNPACK_ROW_LENGTH),q=e.getParameter(i.UNPACK_SKIP_PIXELS),rt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let xt=0,ct=it.length;xt<ct;xt++){let at=it[xt],Et=Math.floor(at.start/4),Bt=Math.ceil(at.count/4),Pt=Et%g.width,I=Math.floor(Et/g.width),ot=Bt,J=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Pt),e.pixelStorei(i.UNPACK_SKIP_ROWS,I),e.texSubImage2D(i.TEXTURE_2D,0,Pt,I,ot,J,N,H,g.data)}y.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,X),e.pixelStorei(i.UNPACK_SKIP_PIXELS,q),e.pixelStorei(i.UNPACK_SKIP_ROWS,rt)}}function gt(y,g,N){let H=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(H=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(H=i.TEXTURE_3D);let W=kt(y,g),it=g.source;e.bindTexture(H,y.__webglTexture,i.TEXTURE0+N);let st=n.get(it);if(it.version!==st.__version||W===!0){if(e.activeTexture(i.TEXTURE0+N),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){let J=Qt.getPrimaries(Qt.workingColorSpace),lt=g.colorSpace===Bn?null:Qt.getPrimaries(g.colorSpace),ut=g.colorSpace===Bn||J===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut)}e.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let q=p(g.image,!1,s.maxTextureSize);q=Se(g,q);let rt=r.convert(g.format,g.colorSpace),xt=r.convert(g.type),ct=M(g.internalFormat,rt,xt,g.normalized,g.colorSpace,g.isVideoTexture);zt(H,g);let at,Et=g.mipmaps,Bt=g.isVideoTexture!==!0,Pt=st.__version===void 0||W===!0,I=it.dataReady,ot=_(g,q);if(g.isDepthTexture)ct=E(g.format===Vn,g.type),Pt&&(Bt?e.texStorage2D(i.TEXTURE_2D,1,ct,q.width,q.height):e.texImage2D(i.TEXTURE_2D,0,ct,q.width,q.height,0,rt,xt,null));else if(g.isDataTexture)if(Et.length>0){Bt&&Pt&&e.texStorage2D(i.TEXTURE_2D,ot,ct,Et[0].width,Et[0].height);for(let J=0,lt=Et.length;J<lt;J++)at=Et[J],Bt?I&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,at.width,at.height,rt,xt,at.data):e.texImage2D(i.TEXTURE_2D,J,ct,at.width,at.height,0,rt,xt,at.data);g.generateMipmaps=!1}else Bt?(Pt&&e.texStorage2D(i.TEXTURE_2D,ot,ct,q.width,q.height),I&&j(g,q,rt,xt)):e.texImage2D(i.TEXTURE_2D,0,ct,q.width,q.height,0,rt,xt,q.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Bt&&Pt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,ct,Et[0].width,Et[0].height,q.depth);for(let J=0,lt=Et.length;J<lt;J++)if(at=Et[J],g.format!==Ge)if(rt!==null)if(Bt){if(I)if(g.layerUpdates.size>0){let ut=ll(at.width,at.height,g.format,g.type);for(let tt of g.layerUpdates){let yt=at.data.subarray(tt*ut/at.data.BYTES_PER_ELEMENT,(tt+1)*ut/at.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,tt,at.width,at.height,1,rt,yt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,at.width,at.height,q.depth,rt,at.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,ct,at.width,at.height,q.depth,0,at.data,0,0);else bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,at.width,at.height,q.depth,rt,xt,at.data):e.texImage3D(i.TEXTURE_2D_ARRAY,J,ct,at.width,at.height,q.depth,0,rt,xt,at.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{Bt&&Pt&&e.texStorage2D(i.TEXTURE_2D,ot,ct,Et[0].width,Et[0].height);for(let J=0,lt=Et.length;J<lt;J++)at=Et[J],g.format!==Ge?rt!==null?Bt?I&&e.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,at.width,at.height,rt,at.data):e.compressedTexImage2D(i.TEXTURE_2D,J,ct,at.width,at.height,0,at.data):bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?I&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,at.width,at.height,rt,xt,at.data):e.texImage2D(i.TEXTURE_2D,J,ct,at.width,at.height,0,rt,xt,at.data)}else if(g.isDataArrayTexture)if(Bt){if(Pt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,ct,q.width,q.height,q.depth),I)if(g.layerUpdates.size>0){let J=ll(q.width,q.height,g.format,g.type);for(let lt of g.layerUpdates){let ut=q.data.subarray(lt*J/q.data.BYTES_PER_ELEMENT,(lt+1)*J/q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,lt,q.width,q.height,1,rt,xt,ut)}g.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,rt,xt,q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ct,q.width,q.height,q.depth,0,rt,xt,q.data);else if(g.isData3DTexture)Bt?(Pt&&e.texStorage3D(i.TEXTURE_3D,ot,ct,q.width,q.height,q.depth),I&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,rt,xt,q.data)):e.texImage3D(i.TEXTURE_3D,0,ct,q.width,q.height,q.depth,0,rt,xt,q.data);else if(g.isFramebufferTexture){if(Pt)if(Bt)e.texStorage2D(i.TEXTURE_2D,ot,ct,q.width,q.height);else{let J=q.width,lt=q.height;for(let ut=0;ut<ot;ut++)e.texImage2D(i.TEXTURE_2D,ut,ct,J,lt,0,rt,xt,null),J>>=1,lt>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){let J=i.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),q.parentNode!==J){J.appendChild(q),f.add(g),J.onpaint=lt=>{let ut=lt.changedElements;for(let tt of f)ut.includes(tt.image)&&(tt.needsUpdate=!0)},J.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,q);else{let ut=i.RGBA,tt=i.RGBA,yt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ut,tt,yt,q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Et.length>0){if(Bt&&Pt){let J=Jt(Et[0]);e.texStorage2D(i.TEXTURE_2D,ot,ct,J.width,J.height)}for(let J=0,lt=Et.length;J<lt;J++)at=Et[J],Bt?I&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,rt,xt,at):e.texImage2D(i.TEXTURE_2D,J,ct,rt,xt,at);g.generateMipmaps=!1}else if(Bt){if(Pt){let J=Jt(q);e.texStorage2D(i.TEXTURE_2D,ot,ct,J.width,J.height)}I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,rt,xt,q)}else e.texImage2D(i.TEXTURE_2D,0,ct,rt,xt,q);d(g)&&x(H),st.__version=it.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function It(y,g,N){if(g.image.length!==6)return;let H=kt(y,g),W=g.source;e.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture,i.TEXTURE0+N);let it=n.get(W);if(W.version!==it.__version||H===!0){e.activeTexture(i.TEXTURE0+N);let st=Qt.getPrimaries(Qt.workingColorSpace),X=g.colorSpace===Bn?null:Qt.getPrimaries(g.colorSpace),q=g.colorSpace===Bn||st===X?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,q);let rt=g.isCompressedTexture||g.image[0].isCompressedTexture,xt=g.image[0]&&g.image[0].isDataTexture,ct=[];for(let tt=0;tt<6;tt++)!rt&&!xt?ct[tt]=p(g.image[tt],!0,s.maxCubemapSize):ct[tt]=xt?g.image[tt].image:g.image[tt],ct[tt]=Se(g,ct[tt]);let at=ct[0],Et=r.convert(g.format,g.colorSpace),Bt=r.convert(g.type),Pt=M(g.internalFormat,Et,Bt,g.normalized,g.colorSpace),I=g.isVideoTexture!==!0,ot=it.__version===void 0||H===!0,J=W.dataReady,lt=_(g,at);zt(i.TEXTURE_CUBE_MAP,g);let ut;if(rt){I&&ot&&e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Pt,at.width,at.height);for(let tt=0;tt<6;tt++){ut=ct[tt].mipmaps;for(let yt=0;yt<ut.length;yt++){let wt=ut[yt];g.format!==Ge?Et!==null?I?J&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt,0,0,wt.width,wt.height,Et,wt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt,Pt,wt.width,wt.height,0,wt.data):bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?J&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt,0,0,wt.width,wt.height,Et,Bt,wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt,Pt,wt.width,wt.height,0,Et,Bt,wt.data)}}}else{if(ut=g.mipmaps,I&&ot){ut.length>0&&lt++;let tt=Jt(ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Pt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(xt){I?J&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,ct[tt].width,ct[tt].height,Et,Bt,ct[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Pt,ct[tt].width,ct[tt].height,0,Et,Bt,ct[tt].data);for(let yt=0;yt<ut.length;yt++){let ne=ut[yt].image[tt].image;I?J&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt+1,0,0,ne.width,ne.height,Et,Bt,ne.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt+1,Pt,ne.width,ne.height,0,Et,Bt,ne.data)}}else{I?J&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Et,Bt,ct[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Pt,Et,Bt,ct[tt]);for(let yt=0;yt<ut.length;yt++){let wt=ut[yt];I?J&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt+1,0,0,Et,Bt,wt.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt+1,Pt,Et,Bt,wt.image[tt])}}}d(g)&&x(i.TEXTURE_CUBE_MAP),it.__version=W.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function pt(y,g,N,H,W,it){let st=r.convert(N.format,N.colorSpace),X=r.convert(N.type),q=M(N.internalFormat,st,X,N.normalized,N.colorSpace),rt=n.get(g),xt=n.get(N);if(xt.__renderTarget=g,!rt.__hasExternalTextures){let ct=Math.max(1,g.width>>it),at=Math.max(1,g.height>>it);W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?e.texImage3D(W,it,q,ct,at,g.depth,0,st,X,null):e.texImage2D(W,it,q,ct,at,0,st,X,null)}e.bindFramebuffer(i.FRAMEBUFFER,y),ue(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,H,W,xt.__webglTexture,0,Ae(g)):(W===i.TEXTURE_2D||W>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,H,W,xt.__webglTexture,it),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ut(y,g,N){if(i.bindRenderbuffer(i.RENDERBUFFER,y),g.depthBuffer){let H=g.depthTexture,W=H&&H.isDepthTexture?H.type:null,it=E(g.stencilBuffer,W),st=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ue(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ae(g),it,g.width,g.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae(g),it,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,it,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,y)}else{let H=g.textures;for(let W=0;W<H.length;W++){let it=H[W],st=r.convert(it.format,it.colorSpace),X=r.convert(it.type),q=M(it.internalFormat,st,X,it.normalized,it.colorSpace);ue(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ae(g),q,g.width,g.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae(g),q,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,q,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function me(y,g,N){let H=g.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,y),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let W=n.get(g.depthTexture);if(W.__renderTarget=g,(!W.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),H){if(W.__webglInit===void 0&&(W.__webglInit=!0,g.depthTexture.addEventListener("dispose",b)),W.__webglTexture===void 0){W.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),zt(i.TEXTURE_CUBE_MAP,g.depthTexture);let rt=r.convert(g.depthTexture.format),xt=r.convert(g.depthTexture.type),ct;g.depthTexture.format===An?ct=i.DEPTH_COMPONENT24:g.depthTexture.format===Vn&&(ct=i.DEPTH24_STENCIL8);for(let at=0;at<6;at++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,ct,g.width,g.height,0,rt,xt,null)}}else nt(g.depthTexture,0);let it=W.__webglTexture,st=Ae(g),X=H?i.TEXTURE_CUBE_MAP_POSITIVE_X+N:i.TEXTURE_2D,q=g.depthTexture.format===Vn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===An)ue(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,X,it,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,q,X,it,0);else if(g.depthTexture.format===Vn)ue(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,X,it,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,q,X,it,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ot(y){let g=n.get(y),N=y.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==y.depthTexture){let H=y.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),H){let W=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,H.removeEventListener("dispose",W)};H.addEventListener("dispose",W),g.__depthDisposeCallback=W}g.__boundDepthTexture=H}if(y.depthTexture&&!g.__autoAllocateDepthBuffer)if(N)for(let H=0;H<6;H++)me(g.__webglFramebuffer[H],y,H);else{let H=y.texture.mipmaps;H&&H.length>0?me(g.__webglFramebuffer[0],y,0):me(g.__webglFramebuffer,y,0)}else if(N){g.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[H]),g.__webglDepthbuffer[H]===void 0)g.__webglDepthbuffer[H]=i.createRenderbuffer(),Ut(g.__webglDepthbuffer[H],y,!1);else{let W=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=g.__webglDepthbuffer[H];i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,it)}}else{let H=y.texture.mipmaps;if(H&&H.length>0?e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Ut(g.__webglDepthbuffer,y,!1);else{let W=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,it)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Vt(y,g,N){let H=n.get(y);g!==void 0&&pt(H.__webglFramebuffer,y,y.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Ot(y)}function ee(y){let g=y.texture,N=n.get(y),H=n.get(g);y.addEventListener("dispose",D);let W=y.textures,it=y.isWebGLCubeRenderTarget===!0,st=W.length>1;if(st||(H.__webglTexture===void 0&&(H.__webglTexture=i.createTexture()),H.__version=g.version,a.memory.textures++),it){N.__webglFramebuffer=[];for(let X=0;X<6;X++)if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer[X]=[];for(let q=0;q<g.mipmaps.length;q++)N.__webglFramebuffer[X][q]=i.createFramebuffer()}else N.__webglFramebuffer[X]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer=[];for(let X=0;X<g.mipmaps.length;X++)N.__webglFramebuffer[X]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(st)for(let X=0,q=W.length;X<q;X++){let rt=n.get(W[X]);rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture(),a.memory.textures++)}if(y.samples>0&&ue(y)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let X=0;X<W.length;X++){let q=W[X];N.__webglColorRenderbuffer[X]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[X]);let rt=r.convert(q.format,q.colorSpace),xt=r.convert(q.type),ct=M(q.internalFormat,rt,xt,q.normalized,q.colorSpace,y.isXRRenderTarget===!0),at=Ae(y);i.renderbufferStorageMultisample(i.RENDERBUFFER,at,ct,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+X,i.RENDERBUFFER,N.__webglColorRenderbuffer[X])}i.bindRenderbuffer(i.RENDERBUFFER,null),y.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),Ut(N.__webglDepthRenderbuffer,y,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(it){e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),zt(i.TEXTURE_CUBE_MAP,g);for(let X=0;X<6;X++)if(g.mipmaps&&g.mipmaps.length>0)for(let q=0;q<g.mipmaps.length;q++)pt(N.__webglFramebuffer[X][q],y,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+X,q);else pt(N.__webglFramebuffer[X],y,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);d(g)&&x(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(st){for(let X=0,q=W.length;X<q;X++){let rt=W[X],xt=n.get(rt),ct=i.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(ct=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,xt.__webglTexture),zt(ct,rt),pt(N.__webglFramebuffer,y,rt,i.COLOR_ATTACHMENT0+X,ct,0),d(rt)&&x(ct)}e.unbindTexture()}else{let X=i.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(X=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(X,H.__webglTexture),zt(X,g),g.mipmaps&&g.mipmaps.length>0)for(let q=0;q<g.mipmaps.length;q++)pt(N.__webglFramebuffer[q],y,g,i.COLOR_ATTACHMENT0,X,q);else pt(N.__webglFramebuffer,y,g,i.COLOR_ATTACHMENT0,X,0);d(g)&&x(X),e.unbindTexture()}y.depthBuffer&&Ot(y)}function Ht(y){let g=y.textures;for(let N=0,H=g.length;N<H;N++){let W=g[N];if(d(W)){let it=B(y),st=n.get(W).__webglTexture;e.bindTexture(it,st),x(it),e.unbindTexture()}}}let ae=[],Me=[];function Re(y){if(y.samples>0){if(ue(y)===!1){let g=y.textures,N=y.width,H=y.height,W=i.COLOR_BUFFER_BIT,it=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=n.get(y),X=g.length>1;if(X)for(let rt=0;rt<g.length;rt++)e.bindFramebuffer(i.FRAMEBUFFER,st.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,st.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,st.__webglMultisampledFramebuffer);let q=y.texture.mipmaps;q&&q.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,st.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,st.__webglFramebuffer);for(let rt=0;rt<g.length;rt++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(W|=i.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(W|=i.STENCIL_BUFFER_BIT)),X){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,st.__webglColorRenderbuffer[rt]);let xt=n.get(g[rt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,xt,0)}i.blitFramebuffer(0,0,N,H,0,0,N,H,W,i.NEAREST),l===!0&&(ae.length=0,Me.length=0,ae.push(i.COLOR_ATTACHMENT0+rt),y.depthBuffer&&y.storeMultisampledDepthBuffer===!1&&(ae.push(it),Me.push(it),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Me)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ae))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),X)for(let rt=0;rt<g.length;rt++){e.bindFramebuffer(i.FRAMEBUFFER,st.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,st.__webglColorRenderbuffer[rt]);let xt=n.get(g[rt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,st.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,xt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,st.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.storeMultisampledDepthBuffer===!1&&l){let g=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function Ae(y){return Math.min(s.maxSamples,y.samples)}function ue(y){let g=n.get(y);return y.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function P(y){let g=a.render.frame;h.get(y)!==g&&(h.set(y,g),y.update())}function Se(y,g){let N=y.colorSpace,H=y.format,W=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||N!==rs&&N!==Bn&&(Qt.getTransfer(N)===Zt?(H!==Ge||W!==Oe)&&bt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ct("WebGLTextures: Unsupported texture color space:",N)),g}function Jt(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=K,this.resetTextureUnits=Q,this.getTextureUnits=F,this.setTextureUnits=Y,this.setTexture2D=nt,this.setTexture2DArray=V,this.setTexture3D=$,this.setTextureCube=et,this.rebindTextures=Vt,this.setupRenderTarget=ee,this.updateRenderTargetMipmap=Ht,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=ue,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Om(i,t){function e(n,s=Bn){let r,a=Qt.getTransfer(s);if(n===Oe)return i.UNSIGNED_BYTE;if(n===aa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===oa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===$o)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===tl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===qo)return i.BYTE;if(n===jo)return i.SHORT;if(n===Qi)return i.UNSIGNED_SHORT;if(n===ra)return i.INT;if(n===sn)return i.UNSIGNED_INT;if(n===Ze)return i.FLOAT;if(n===rn)return i.HALF_FLOAT;if(n===el)return i.ALPHA;if(n===nl)return i.RGB;if(n===Ge)return i.RGBA;if(n===An)return i.DEPTH_COMPONENT;if(n===Vn)return i.DEPTH_STENCIL;if(n===la)return i.RED;if(n===ca)return i.RED_INTEGER;if(n===kn)return i.RG;if(n===Aa)return i.RG_INTEGER;if(n===ha)return i.RGBA_INTEGER;if(n===Ls||n===Ns||n===Us||n===Os)if(a===Zt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ls)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ns)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Us)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Os)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ls)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ns)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Us)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Os)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===da||n===ua||n===fa||n===pa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===da)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ua)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===fa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===pa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ma||n===ga||n===Da||n===va||n===wa||n===Gs||n===Ma)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ma||n===ga)return a===Zt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Da)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===va)return r.COMPRESSED_R11_EAC;if(n===wa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Gs)return r.COMPRESSED_RG11_EAC;if(n===Ma)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===xa||n===Ea||n===_a||n===ya||n===Sa||n===Ba||n===ba||n===Ca||n===Ta||n===Ia||n===Fa||n===Pa||n===Ra||n===La)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===xa)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ea)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_a)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ya)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Sa)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ba)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ba)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ca)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ta)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ia)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fa)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Pa)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ra)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===La)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Na||n===Ua||n===Oa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Na)return a===Zt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ua)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Oa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ga||n===Ha||n===Hs||n===Qa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ga)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ha)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Hs)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Qa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Yi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Gm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Bl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ds(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ze({vertexShader:Gm,fragmentShader:Hm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ce(new _s(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},bl=class extends hn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,A=null,u=null,m=null,w=typeof XRWebGLBinding<"u",p=new Bl,d={},x=e.getContextAttributes(),B=null,M=null,E=[],_=[],b=new Nt,D=null,S=null,T=new Fe;T.viewport=new le;let R=new Fe;R.viewport=new le;let U=[T,R],Q=new $r,F=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let j=E[k];return j===void 0&&(j=new Pi,E[k]=j),j.getTargetRaySpace()},this.getControllerGrip=function(k){let j=E[k];return j===void 0&&(j=new Pi,E[k]=j),j.getGripSpace()},this.getHand=function(k){let j=E[k];return j===void 0&&(j=new Pi,E[k]=j),j.getHandSpace()};function K(k){let j=_.indexOf(k.inputSource);if(j===-1)return;let gt=E[j];gt!==void 0&&(gt.update(k.inputSource,k.frame,c||a),gt.dispatchEvent({type:k.type,data:k.inputSource}))}function Z(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",nt);for(let k=0;k<E.length;k++){let j=_[k];j!==null&&(_[k]=null,E[k].disconnect(j))}F=null,Y=null,p.reset();for(let k in d)delete d[k];if(t.setRenderTarget(B),u=null,A=null,f=null,s=null,M=null,kt.stop(),n.isPresenting=!1,t.setPixelRatio(D),t.setSize(b.width,b.height,!1),S!==null){let k=S.camera;k.fov=S.fov,k.zoom=S.zoom,k.updateProjectionMatrix(),S=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&bt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,n.isPresenting===!0&&bt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return A!==null?A:u},this.getBinding=function(){return f===null&&w&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(k){if(s=k,s!==null){if(B=t.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",nt),x.xrCompatible!==!0&&await e.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(b),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let gt=null,It=null,pt=null;x.depth&&(pt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,gt=x.stencil?Vn:An,It=x.stencil?Yi:sn);let Ut={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:r};f=this.getBinding(),A=f.createProjectionLayer(Ut),s.updateRenderState({layers:[A]}),t.setPixelRatio(1),t.setSize(A.textureWidth,A.textureHeight,!1),M=new Ue(A.textureWidth,A.textureHeight,{format:Ge,type:Oe,depthTexture:new Un(A.textureWidth,A.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:A.ignoreDepthValues===!1,resolveStencilBuffer:A.ignoreDepthValues===!1,storeMultisampledDepthBuffer:A.ignoreDepthValues===!1,storeMultisampledStencilBuffer:A.ignoreDepthValues===!1})}else{let gt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,e,gt),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),M=new Ue(u.framebufferWidth,u.framebufferHeight,{format:Ge,type:Oe,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),kt.setContext(s),kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function nt(k){for(let j=0;j<k.removed.length;j++){let gt=k.removed[j],It=_.indexOf(gt);It>=0&&(_[It]=null,E[It].disconnect(gt))}for(let j=0;j<k.added.length;j++){let gt=k.added[j],It=_.indexOf(gt);if(It===-1){for(let Ut=0;Ut<E.length;Ut++)if(Ut>=_.length){_.push(gt),It=Ut;break}else if(_[Ut]===null){_[Ut]=gt,It=Ut;break}if(It===-1)break}let pt=E[It];pt&&pt.connect(gt)}}let V=new L,$=new L;function et(k,j,gt){V.setFromMatrixPosition(j.matrixWorld),$.setFromMatrixPosition(gt.matrixWorld);let It=V.distanceTo($),pt=j.projectionMatrix.elements,Ut=gt.projectionMatrix.elements,me=pt[14]/(pt[10]-1),Ot=pt[14]/(pt[10]+1),Vt=(pt[9]+1)/pt[5],ee=(pt[9]-1)/pt[5],Ht=(pt[8]-1)/pt[0],ae=(Ut[8]+1)/Ut[0],Me=me*Ht,Re=me*ae,Ae=It/(-Ht+ae),ue=Ae*-Ht;if(j.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(ue),k.translateZ(Ae),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),pt[10]===-1)k.projectionMatrix.copy(j.projectionMatrix),k.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let P=me+Ae,Se=Ot+Ae,Jt=Me-ue,y=Re+(It-ue),g=Vt*Ot/Se*P,N=ee*Ot/Se*P;k.projectionMatrix.makePerspective(Jt,y,g,N,P,Se),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function St(k,j){j===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(j.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(s===null)return;let j=k.near,gt=k.far;p.texture!==null&&(p.depthNear>0&&(j=p.depthNear),p.depthFar>0&&(gt=p.depthFar)),Q.near=R.near=T.near=j,Q.far=R.far=T.far=gt,(F!==Q.near||Y!==Q.far)&&(s.updateRenderState({depthNear:Q.near,depthFar:Q.far}),F=Q.near,Y=Q.far),Q.layers.mask=k.layers.mask|6,T.layers.mask=Q.layers.mask&-5,R.layers.mask=Q.layers.mask&-3;let It=k.parent,pt=Q.cameras;St(Q,It);for(let Ut=0;Ut<pt.length;Ut++)St(pt[Ut],It);pt.length===2?et(Q,T,R):Q.projectionMatrix.copy(T.projectionMatrix),S===null&&k.isPerspectiveCamera&&(S={camera:k,fov:k.fov,zoom:k.zoom}),_t(k,Q,It)};function _t(k,j,gt){gt===null?k.matrix.copy(j.matrixWorld):(k.matrix.copy(gt.matrixWorld),k.matrix.invert(),k.matrix.multiply(j.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(j.projectionMatrix),k.projectionMatrixInverse.copy(j.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Ir*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(A===null&&u===null))return l},this.setFoveation=function(k){l=k,A!==null&&(A.fixedFoveation=k),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=k)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(Q)},this.getCameraTexture=function(k){return d[k]};let te=null;function zt(k,j){if(h=j.getViewerPose(c||a),m=j,h!==null){let gt=h.views;u!==null&&(t.setRenderTargetFramebuffer(M,u.framebuffer),t.setRenderTarget(M));let It=!1;gt.length!==Q.cameras.length&&(Q.cameras.length=0,It=!0);for(let Ot=0;Ot<gt.length;Ot++){let Vt=gt[Ot],ee=null;if(u!==null)ee=u.getViewport(Vt);else{let ae=f.getViewSubImage(A,Vt);ee=ae.viewport,Ot===0&&(t.setRenderTargetTextures(M,ae.colorTexture,ae.depthStencilTexture),t.setRenderTarget(M))}let Ht=U[Ot];Ht===void 0&&(Ht=new Fe,Ht.layers.enable(Ot),Ht.viewport=new le,U[Ot]=Ht),Ht.matrix.fromArray(Vt.transform.matrix),Ht.matrix.decompose(Ht.position,Ht.quaternion,Ht.scale),Ht.projectionMatrix.fromArray(Vt.projectionMatrix),Ht.projectionMatrixInverse.copy(Ht.projectionMatrix).invert(),Ht.viewport.set(ee.x,ee.y,ee.width,ee.height),Ot===0&&(Q.matrix.copy(Ht.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),It===!0&&Q.cameras.push(Ht)}let pt=s.enabledFeatures;if(pt&&pt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&w){f=n.getBinding();let Ot=f.getDepthInformation(gt[0]);Ot&&Ot.isValid&&Ot.texture&&p.init(Ot,s.renderState)}if(pt&&pt.includes("camera-access")&&w){t.state.unbindTexture(),f=n.getBinding();for(let Ot=0;Ot<gt.length;Ot++){let Vt=gt[Ot].camera;if(Vt){let ee=d[Vt];ee||(ee=new Ds,d[Vt]=ee);let Ht=f.getCameraImage(Vt);ee.sourceTexture=Ht}}}}for(let gt=0;gt<E.length;gt++){let It=_[gt],pt=E[gt];It!==null&&pt!==void 0&&pt.update(It,j,c||a)}te&&te(k,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),m=null}let kt=new RA;kt.setAnimationLoop(zt),this.setAnimationLoop=function(k){te=k},this.dispose=function(){}}},Qm=new qt,HA=new Tt;HA.set(-1,0,0,0,1,0,0,0,1);function Ym(i,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,rl(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,x,B,M){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(p,d):d.isMeshLambertMaterial?(r(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(p,d),f(p,d)):d.isMeshPhongMaterial?(r(p,d),h(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(p,d),A(p,d),d.isMeshPhysicalMaterial&&u(p,d,M)):d.isMeshMatcapMaterial?(r(p,d),m(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),w(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?l(p,d,x,B):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===ye&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===ye&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let x=t.get(d),B=x.envMap,M=x.envMapRotation;B&&(p.envMap.value=B,p.envMapRotation.value.setFromMatrix4(Qm.makeRotationFromEuler(M)).transpose(),B.isCubeTexture&&B.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(HA),p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,x,B){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*x,p.scale.value=B*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function A(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function u(p,d,x){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===ye&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.retroreflectivity>0&&(p.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,d){d.matcap&&(p.matcap.value=d.matcap)}function w(p,d){let x=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function zm(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,E){let _=E.program;n.uniformBlockBinding(M,_)}function c(M,E){let _=s[M.id];_===void 0&&(p(M),_=h(M),s[M.id]=_,M.addEventListener("dispose",x));let b=E.program;n.updateUBOMapping(M,b);let D=t.render.frame;r[M.id]!==D&&(A(M),r[M.id]=D)}function h(M){let E=f();M.__bindingPointIndex=E;let _=i.createBuffer(),b=M.__size,D=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,b,D),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,_),_}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function A(M){let E=s[M.id],_=M.uniforms,b=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let D=0,S=_.length;D<S;D++){let T=_[D];if(Array.isArray(T))for(let R=0,U=T.length;R<U;R++)u(T[R],D,R,b);else u(T,D,0,b)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(M,E,_,b){if(w(M,E,_,b)===!0){let D=M.__offset,S=M.value;if(Array.isArray(S)){let T=0;for(let R=0;R<S.length;R++){let U=S[R],Q=d(U);m(U,M.__data,T),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(T+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(S,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,D,M.__data)}}function m(M,E,_){typeof M=="number"||typeof M=="boolean"?E[0]=M:M.isMatrix3?(E[0]=M.elements[0],E[1]=M.elements[1],E[2]=M.elements[2],E[3]=0,E[4]=M.elements[3],E[5]=M.elements[4],E[6]=M.elements[5],E[7]=0,E[8]=M.elements[6],E[9]=M.elements[7],E[10]=M.elements[8],E[11]=0):ArrayBuffer.isView(M)?E.set(new M.constructor(M.buffer,M.byteOffset,E.length)):M.toArray(E,_)}function w(M,E,_,b){let D=M.value,S=E+"_"+_;if(b[S]===void 0)return typeof D=="number"||typeof D=="boolean"?b[S]=D:ArrayBuffer.isView(D)?b[S]=D.slice():b[S]=D.clone(),!0;{let T=b[S];if(typeof D=="number"||typeof D=="boolean"){if(T!==D)return b[S]=D,!0}else{if(ArrayBuffer.isView(D))return!0;if(T.equals(D)===!1)return T.copy(D),!0}}return!1}function p(M){let E=M.uniforms,_=0,b=16;for(let S=0,T=E.length;S<T;S++){let R=Array.isArray(E[S])?E[S]:[E[S]];for(let U=0,Q=R.length;U<Q;U++){let F=R[U],Y=Array.isArray(F.value)?F.value:[F.value];for(let K=0,Z=Y.length;K<Z;K++){let nt=Y[K],V=d(nt),$=_%b,et=$%V.boundary,St=$+et;_+=et,St!==0&&b-St<V.storage&&(_+=b-St),F.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=_,_+=V.storage}}}let D=_%b;return D>0&&(_+=b-D),M.__size=_,M.__cache={},this}function d(M){let E={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(E.boundary=4,E.storage=4):M.isVector2?(E.boundary=8,E.storage=8):M.isVector3||M.isColor?(E.boundary=16,E.storage=12):M.isVector4?(E.boundary=16,E.storage=16):M.isMatrix3?(E.boundary=48,E.storage=48):M.isMatrix4?(E.boundary=64,E.storage=64):M.isTexture?bt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(E.boundary=16,E.storage=M.byteLength):bt("WebGLRenderer: Unsupported uniform value type.",M),E}function x(M){let E=M.target;E.removeEventListener("dispose",x);let _=a.indexOf(E.__bindingPointIndex);a.splice(_,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function B(){for(let M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:B}}var Wm=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Dn=null;function Vm(){return Dn===null&&(Dn=new ni(Wm,16,16,kn,rn),Dn.name="DFG_LUT",Dn.minFilter=ge,Dn.magFilter=ge,Dn.wrapS=cn,Dn.wrapT=cn,Dn.generateMipmaps=!1,Dn.needsUpdate=!0),Dn}var Xa=class{constructor(t={}){let{canvas:e=eA(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:A=!1,outputBufferType:u=Oe}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let w=u,p=new Set([ha,Aa,ca]),d=new Set([Oe,sn,Qi,Yi,aa,oa]),x=new Uint32Array(4),B=new Int32Array(4),M=new L,E=null,_=null,b=[],D=[],S=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=nn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,R=!1,U=null,Q=null,F=null,Y=null;this._outputColorSpace=_e;let K=0,Z=0,nt=null,V=-1,$=null,et=new le,St=new le,_t=null,te=new Ft(0),zt=0,kt=e.width,k=e.height,j=1,gt=null,It=null,pt=new le(0,0,kt,k),Ut=new le(0,0,kt,k),me=!1,Ot=new Ri,Vt=!1,ee=!1,Ht=new qt,ae=new L,Me=new le,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ae=!1;function ue(){return nt===null?j:1}let P=n;function Se(v,C){return e.getContext(v,C)}let Jt,y,g,N,H,W,it,st,X,q,rt,xt,ct,at,Et,Bt,Pt,I,ot,J,lt,ut,tt;try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ne,!1),e.addEventListener("webglcontextrestored",Xt,!1),e.addEventListener("webglcontextcreationerror",Je,!1),P===null){let C="webgl2";if(P=Se(C,v),P===null)throw Se(C)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}yt()}catch(v){throw e.removeEventListener("webglcontextlost",ne,!1),e.removeEventListener("webglcontextrestored",Xt,!1),e.removeEventListener("webglcontextcreationerror",Je,!1),Ct("WebGLRenderer: "+v.message),v}function yt(){Jt=new jf(P),Jt.init(),lt=new Om(P,Jt),y=new Yf(P,Jt,t,lt),g=new Nm(P,Jt),y.reversedDepthBuffer&&A&&g.buffers.depth.setReversed(!0),Q=P.createFramebuffer(),F=P.createFramebuffer(),Y=P.createFramebuffer(),N=new ep(P),H=new xm,W=new Um(P,Jt,g,H,y,lt,N),it=new qf(T),st=new nd(P),ut=new Hf(P,st),X=new $f(P,st,N,ut),q=new ip(P,X,st,ut,N),I=new np(P,y,W),Et=new zf(H),rt=new Mm(T,it,Jt,y,ut,Et),xt=new Ym(T,H),ct=new _m,at=new Tm(Jt),Pt=new Gf(T,it,g,q,m,l),Bt=new Lm(T,q,y),tt=new zm(P,N,y,g),ot=new Qf(P,Jt,N),J=new tp(P,Jt,N),N.programs=rt.programs,T.capabilities=y,T.extensions=Jt,T.properties=H,T.renderLists=ct,T.shadowMap=Bt,T.state=g,T.info=N}w!==Oe&&(S=new rp(w,e.width,e.height,o,s,r));let wt=new bl(T,P);this.xr=wt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let v=Jt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=Jt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(v){v!==void 0&&(j=v,this.setSize(kt,k,!1))},this.getSize=function(v){return v.set(kt,k)},this.setSize=function(v,C,z=!0){if(wt.isPresenting){bt("WebGLRenderer: Can't change size while VR device is presenting.");return}kt=v,k=C,e.width=Math.floor(v*j),e.height=Math.floor(C*j),z===!0&&(e.style.width=v+"px",e.style.height=C+"px"),S!==null&&S.setSize(e.width,e.height),this.setViewport(0,0,v,C)},this.getDrawingBufferSize=function(v){return v.set(kt*j,k*j).floor()},this.setDrawingBufferSize=function(v,C,z){kt=v,k=C,j=z,e.width=Math.floor(v*z),e.height=Math.floor(C*z),this.setViewport(0,0,v,C)},this.setEffects=function(v){if(w===Oe){Ct("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let C=0;C<v.length;C++)if(v[C].isOutputPass===!0){bt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(et)},this.getViewport=function(v){return v.copy(pt)},this.setViewport=function(v,C,z,O){v.isVector4?pt.set(v.x,v.y,v.z,v.w):pt.set(v,C,z,O),g.viewport(et.copy(pt).multiplyScalar(j).round())},this.getScissor=function(v){return v.copy(Ut)},this.setScissor=function(v,C,z,O){v.isVector4?Ut.set(v.x,v.y,v.z,v.w):Ut.set(v,C,z,O),g.scissor(St.copy(Ut).multiplyScalar(j).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(v){g.setScissorTest(me=v)},this.setOpaqueSort=function(v){gt=v},this.setTransparentSort=function(v){It=v},this.getClearColor=function(v){return v.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor(...arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha(...arguments)},this.clear=function(v=!0,C=!0,z=!0){let O=0;if(v){let G=!1;if(nt!==null){let dt=nt.texture.format;G=p.has(dt)}if(G){let dt=nt.texture.type,mt=d.has(dt),ht=Pt.getClearColor(),Dt=Pt.getClearAlpha(),Mt=ht.r,Rt=ht.g,Gt=ht.b;mt?(x[0]=Mt,x[1]=Rt,x[2]=Gt,x[3]=Dt,P.clearBufferuiv(P.COLOR,0,x)):(B[0]=Mt,B[1]=Rt,B[2]=Gt,B[3]=Dt,P.clearBufferiv(P.COLOR,0,B))}else O|=P.COLOR_BUFFER_BIT}C&&(O|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),z&&(O|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&P.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),U=v},this.dispose=function(){e.removeEventListener("webglcontextlost",ne,!1),e.removeEventListener("webglcontextrestored",Xt,!1),e.removeEventListener("webglcontextcreationerror",Je,!1),Pt.dispose(),ct.dispose(),at.dispose(),H.dispose(),it.dispose(),q.dispose(),ut.dispose(),tt.dispose(),rt.dispose(),wt.dispose(),wt.removeEventListener("sessionstart",Nl),wt.removeEventListener("sessionend",Ul),Kn.stop()};function ne(v){v.preventDefault(),sl("WebGLRenderer: Context Lost."),R=!0}function Xt(){sl("WebGLRenderer: Context Restored."),R=!1;let v=N.autoReset,C=Bt.enabled,z=Bt.autoUpdate,O=Bt.needsUpdate,G=Bt.type;yt(),N.autoReset=v,Bt.enabled=C,Bt.autoUpdate=z,Bt.needsUpdate=O,Bt.type=G}function Je(v){Ct("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function an(v){let C=v.target;C.removeEventListener("dispose",an),ZA(C)}function ZA(v){JA(v),H.remove(v)}function JA(v){let C=H.get(v).programs;C!==void 0&&(C.forEach(function(z){rt.releaseProgram(z)}),v.isShaderMaterial&&rt.releaseShaderCache(v))}this.renderBufferDirect=function(v,C,z,O,G,dt){C===null&&(C=Re);let mt=G.isMesh&&G.matrixWorld.determinantAffine()<0,ht=$A(v,C,z,O,G);g.setMaterial(O,mt);let Dt=z.index,Mt=1;if(O.wireframe===!0){if(Dt=X.getWireframeAttribute(z),Dt===void 0)return;Mt=2}let Rt=z.drawRange,Gt=z.attributes.position,vt=Rt.start*Mt,Kt=(Rt.start+Rt.count)*Mt;dt!==null&&(vt=Math.max(vt,dt.start*Mt),Kt=Math.min(Kt,(dt.start+dt.count)*Mt)),Dt!==null?(vt=Math.max(vt,0),Kt=Math.min(Kt,Dt.count)):Gt!=null&&(vt=Math.max(vt,0),Kt=Math.min(Kt,Gt.count));let fe=Kt-vt;if(fe<0||fe===1/0)return;ut.setup(G,O,ht,z,Dt);let se,$t=ot;if(Dt!==null&&(se=st.get(Dt),$t=J,$t.setIndex(se)),G.isMesh)O.wireframe===!0?(g.setLineWidth(O.wireframeLinewidth*ue()),$t.setMode(P.LINES)):$t.setMode(P.TRIANGLES);else if(G.isLine){let Be=O.linewidth;Be===void 0&&(Be=1),g.setLineWidth(Be*ue()),G.isLineSegments?$t.setMode(P.LINES):G.isLineLoop?$t.setMode(P.LINE_LOOP):$t.setMode(P.LINE_STRIP)}else G.isPoints?$t.setMode(P.POINTS):G.isSprite&&$t.setMode(P.TRIANGLES);if(G.isBatchedMesh)if(Jt.get("WEBGL_multi_draw"))$t.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let Be=G._multiDrawStarts,ft=G._multiDrawCounts,Ie=G._multiDrawCount,Wt=Dt?st.get(Dt).bytesPerElement:1,Ve=H.get(O).currentProgram.getUniforms();for(let on=0;on<Ie;on++)Ve.setValue(P,"_gl_DrawID",on),$t.render(Be[on]/Wt,ft[on])}else if(G.isInstancedMesh)$t.renderInstances(vt,fe,G.count);else if(z.isInstancedBufferGeometry){let Be=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,ft=Math.min(z.instanceCount,Be);$t.renderInstances(vt,fe,ft)}else $t.render(vt,fe)};function Ll(v,C,z,O){U!==null&&v.isNodeMaterial&&U.setObject(O,v),Vt===!0&&Et.setState(v,z,!1),v.transparent===!0&&v.side===Ke&&v.forceSinglePass===!1?(v.side=ye,v.needsUpdate=!0,Zs(v,C,O),v.side=zn,v.needsUpdate=!0,Zs(v,C,O),v.side=Ke):Zs(v,C,O)}this.compile=function(v,C,z=null){z===null&&(z=v),U!==null&&U.renderStart(v,C,z),_=at.get(z),_.init(C),D.push(_),z.traverseVisible(function(G){G.isLight&&G.layers.test(C.layers)&&(_.pushLight(G),G.castShadow&&_.pushShadow(G))}),v!==z&&v.traverseVisible(function(G){G.isLight&&G.layers.test(C.layers)&&(_.pushLight(G),G.castShadow&&_.pushShadow(G))}),_.setupLights(),U!==null&&U.updateLights(_.state.lightsArray),ee=this.localClippingEnabled,Vt=Et.init(this.clippingPlanes,ee),Vt===!0&&Et.setGlobalState(this.clippingPlanes,C),U!==null&&Bt.render(_.state.shadowsArray,z,C);let O=new Set;return v.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let dt=G.material;if(dt)if(Array.isArray(dt))for(let mt=0;mt<dt.length;mt++){let ht=dt[mt];Ll(ht,z,C,G),O.add(ht)}else Ll(dt,z,C,G),O.add(dt)}),_=D.pop(),U!==null&&U.renderEnd(),O},this.compileAsync=function(v,C,z=null){let O=this.compile(v,C,z);return new Promise(G=>{function dt(){if(O.forEach(function(mt){let Dt=H.get(mt).currentProgram;(Dt===void 0||Dt.isReady())&&O.delete(mt)}),O.size===0){G(v);return}setTimeout(dt,10)}Jt.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let to=null;function qA(v){to&&to(v)}function Nl(){Kn.stop()}function Ul(){Kn.start()}let Kn=new RA;Kn.setAnimationLoop(qA),typeof self<"u"&&Kn.setContext(self),this.setAnimationLoop=function(v){to=v,wt.setAnimationLoop(v),v===null?Kn.stop():Kn.start()},wt.addEventListener("sessionstart",Nl),wt.addEventListener("sessionend",Ul),this.render=function(v,C){if(C!==void 0&&C.isCamera!==!0){Ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;U!==null&&U.renderStart(v,C);let z=wt.enabled===!0&&wt.isPresenting===!0,O=S!==null&&(nt===null||z)&&S.begin(T,nt);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),C.parent===null&&C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),wt.enabled===!0&&wt.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(wt.cameraAutoUpdate===!0&&wt.updateCamera(C),C=wt.getCamera()),v.isScene===!0&&v.onBeforeRender(T,v,C,nt),_=at.get(v,D.length),_.init(C),_.state.textureUnits=W.getTextureUnits(),D.push(_),Ht.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse),Ot.setFromProjectionMatrix(Ht,en,C.reversedDepth),ee=this.localClippingEnabled,Vt=Et.init(this.clippingPlanes,ee),E=ct.get(v,b.length),E.init(),b.push(E),wt.enabled===!0&&wt.isPresenting===!0){let mt=T.xr.getDepthSensingMesh();mt!==null&&eo(mt,C,-1/0,T.sortObjects)}eo(v,C,0,T.sortObjects),E.finish(),U!==null&&U.updateLights(_.state.lightsArray),T.sortObjects===!0&&E.sort(gt,It),Ae=wt.enabled===!1||wt.isPresenting===!1||wt.hasDepthSensing()===!1,Ae&&Pt.addToRenderList(E,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Vt===!0&&Et.beginShadows();let G=_.state.shadowsArray;if(Bt.render(G,v,C),Vt===!0&&Et.endShadows(),(O&&S.hasRenderPass())===!1){let mt=E.opaque,ht=E.transmissive;if(_.setupLights(),C.isArrayCamera){let Dt=C.cameras;if(ht.length>0)for(let Mt=0,Rt=Dt.length;Mt<Rt;Mt++){let Gt=Dt[Mt];Gl(mt,ht,v,Gt)}Ae&&Pt.render(v);for(let Mt=0,Rt=Dt.length;Mt<Rt;Mt++){let Gt=Dt[Mt];Ol(E,v,Gt,Gt.viewport)}}else ht.length>0&&Gl(mt,ht,v,C),Ae&&Pt.render(v),Ol(E,v,C)}nt!==null&&Z===0&&(W.updateMultisampleRenderTarget(nt),W.updateRenderTargetMipmap(nt)),O&&S.end(T),v.isScene===!0&&v.onAfterRender(T,v,C),ut.resetDefaultState(),V=-1,$=null,D.pop(),D.length>0?(_=D[D.length-1],W.setTextureUnits(_.state.textureUnits),Vt===!0&&Et.setGlobalState(T.clippingPlanes,_.state.camera)):_=null,b.pop(),b.length>0?E=b[b.length-1]:E=null,U!==null&&U.renderEnd()};function eo(v,C,z,O){if(v.visible===!1)return;if(v.layers.test(C.layers)){if(v.isGroup)z=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(C);else if(v.isLightProbeGrid)_.pushLightProbeGrid(v);else if(v.isLight)_.pushLight(v),v.castShadow&&_.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||v.intersectsFrustum(Ot)){O&&Me.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Ht);let mt=q.update(v),ht=v.material;ht.visible&&E.push(v,mt,ht,z,Me.z,null,C)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||v.intersectsFrustum(Ot))){let mt=q.update(v),ht=v.material;if(O&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Me.copy(v.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),Me.copy(mt.boundingSphere.center)),Me.applyMatrix4(v.matrixWorld).applyMatrix4(Ht)),Array.isArray(ht)){let Dt=mt.groups;for(let Mt=0,Rt=Dt.length;Mt<Rt;Mt++){let Gt=Dt[Mt],vt=ht[Gt.materialIndex];vt&&vt.visible&&E.push(v,mt,vt,z,Me.z,Gt,C)}}else ht.visible&&E.push(v,mt,ht,z,Me.z,null,C)}}let dt=v.children;for(let mt=0,ht=dt.length;mt<ht;mt++)eo(dt[mt],C,z,O)}function Ol(v,C,z,O){let{opaque:G,transmissive:dt,transparent:mt}=v;_.setupLightsView(z),Vt===!0&&Et.setGlobalState(T.clippingPlanes,z),O&&g.viewport(et.copy(O)),G.length>0&&Ks(G,C,z),dt.length>0&&Ks(dt,C,z),mt.length>0&&Ks(mt,C,z),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function Gl(v,C,z,O){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;if(_.state.transmissionRenderTarget[O.id]===void 0){let vt=Jt.has("EXT_color_buffer_half_float")||Jt.has("EXT_color_buffer_float");_.state.transmissionRenderTarget[O.id]=new Ue(1,1,{generateMipmaps:!0,type:vt?rn:Oe,minFilter:gn,samples:Math.max(4,y.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Qt.workingColorSpace})}let dt=_.state.transmissionRenderTarget[O.id],mt=O.viewport||et;dt.setSize(mt.z*T.transmissionResolutionScale,mt.w*T.transmissionResolutionScale);let ht=T.getRenderTarget(),Dt=T.getActiveCubeFace(),Mt=T.getActiveMipmapLevel();T.setRenderTarget(dt),T.getClearColor(te),zt=T.getClearAlpha(),zt<1&&T.setClearColor(16777215,.5),T.clear(),Ae&&Pt.render(z);let Rt=T.toneMapping;T.toneMapping=nn;let Gt=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),_.setupLightsView(O),Vt===!0&&Et.setGlobalState(T.clippingPlanes,O),Ks(v,z,O),W.updateMultisampleRenderTarget(dt),W.updateRenderTargetMipmap(dt),Jt.has("WEBGL_multisampled_render_to_texture")===!1){let vt=!1;for(let Kt=0,fe=C.length;Kt<fe;Kt++){let se=C[Kt],{object:$t,geometry:Be,material:ft,group:Ie}=se;if(ft.side===Ke&&$t.layers.test(O.layers)){let Wt=ft.side;ft.side=ye,ft.needsUpdate=!0,Hl($t,z,O,Be,ft,Ie),ft.side=Wt,ft.needsUpdate=!0,vt=!0}}vt===!0&&(W.updateMultisampleRenderTarget(dt),W.updateRenderTargetMipmap(dt))}T.setRenderTarget(ht,Dt,Mt),T.setClearColor(te,zt),Gt!==void 0&&(O.viewport=Gt),T.toneMapping=Rt}function Ks(v,C,z){let O=C.isScene===!0?C.overrideMaterial:null;for(let G=0,dt=v.length;G<dt;G++){let mt=v[G],{object:ht,geometry:Dt,group:Mt}=mt,Rt=mt.material;Rt.allowOverride===!0&&O!==null&&(Rt=O),ht.layers.test(z.layers)&&Hl(ht,C,z,Dt,Rt,Mt)}}function Hl(v,C,z,O,G,dt){U!==null&&G.isNodeMaterial&&U.setObject(v,G),v.onBeforeRender(T,C,z,O,G,dt),v.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),G.onBeforeRender(T,C,z,O,v,dt),G.transparent===!0&&G.side===Ke&&G.forceSinglePass===!1?(G.side=ye,G.needsUpdate=!0,T.renderBufferDirect(z,C,O,G,v,dt),G.side=zn,G.needsUpdate=!0,T.renderBufferDirect(z,C,O,G,v,dt),G.side=Ke):T.renderBufferDirect(z,C,O,G,v,dt),v.onAfterRender(T,C,z,O,G,dt)}function Zs(v,C,z){C.isScene!==!0&&(C=Re);let O=H.get(v),G=_.state.lights,dt=_.state.shadowsArray,mt=G.state.version,ht=rt.getParameters(v,G.state,dt,C,z,_.state.lightProbeGridArray),Dt=rt.getProgramCacheKey(ht),Mt=O.programs;O.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?C.environment:null,O.fog=C.fog;let Rt=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;O.envMap=it.get(v.envMap||O.environment,Rt),O.envMapRotation=O.environment!==null&&v.envMap===null?C.environmentRotation:v.envMapRotation,Mt===void 0&&(v.addEventListener("dispose",an),Mt=new Map,O.programs=Mt);let Gt=Mt.get(Dt);if(Gt!==void 0){if(O.currentProgram===Gt&&O.lightsStateVersion===mt)return Yl(v,ht),Gt}else ht.uniforms=rt.getUniforms(v),U!==null&&v.isNodeMaterial&&U.build(v,z,ht),v.onBeforeCompile(ht,T),Gt=rt.acquireProgram(ht,Dt),Mt.set(Dt,Gt),O.uniforms=ht.uniforms;let vt=O.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(vt.clippingPlanes=Et.uniform),Yl(v,ht),O.needsLights=eh(v),O.lightsStateVersion=mt,O.needsLights&&(vt.ambientLightColor.value=G.state.ambient,vt.lightProbe.value=G.state.probe,vt.sunLights.value=G.state.sun,vt.sunLightShadows.value=G.state.sunShadow,vt.directionalLights.value=G.state.directional,vt.directionalLightShadows.value=G.state.directionalShadow,vt.spotLights.value=G.state.spot,vt.spotLightShadows.value=G.state.spotShadow,vt.rectAreaLights.value=G.state.rectArea,vt.ltc_1.value=G.state.rectAreaLTC1,vt.ltc_2.value=G.state.rectAreaLTC2,vt.pointLights.value=G.state.point,vt.pointLightShadows.value=G.state.pointShadow,vt.hemisphereLights.value=G.state.hemi,vt.sunShadowMatrix.value=G.state.sunShadowMatrix,vt.sunShadowCascade.value=G.state.sunShadowCascade,vt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,vt.spotLightMatrix.value=G.state.spotLightMatrix,vt.spotLightMap.value=G.state.spotLightMap,vt.pointShadowMatrix.value=G.state.pointShadowMatrix),O.lightProbeGrid=_.state.lightProbeGridArray.length>0,O.currentProgram=Gt,O.uniformsList=null,Gt}function Ql(v){if(v.uniformsList===null){let C=v.currentProgram.getUniforms();v.uniformsList=Vi.seqWithValue(C.seq,v.uniforms)}return v.uniformsList}function Yl(v,C){let z=H.get(v);z.outputColorSpace=C.outputColorSpace,z.batching=C.batching,z.batchingColor=C.batchingColor,z.instancing=C.instancing,z.instancingColor=C.instancingColor,z.instancingMorph=C.instancingMorph,z.skinning=C.skinning,z.morphTargets=C.morphTargets,z.morphNormals=C.morphNormals,z.morphColors=C.morphColors,z.morphTargetsCount=C.morphTargetsCount,z.numClippingPlanes=C.numClippingPlanes,z.numIntersection=C.numClipIntersection,z.vertexAlphas=C.vertexAlphas,z.vertexTangents=C.vertexTangents,z.toneMapping=C.toneMapping}function jA(v,C){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;M.setFromMatrixPosition(C.matrixWorld);for(let z=0,O=v.length;z<O;z++){let G=v[z];if(G.texture!==null&&G.boundingBox.containsPoint(M))return G}return null}function $A(v,C,z,O,G){C.isScene!==!0&&(C=Re),W.resetTextureUnits();let dt=C.fog,mt=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?C.environment:null,ht=nt===null?T.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Qt.workingColorSpace,Dt=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,Mt=it.get(O.envMap||mt,Dt),Rt=O.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Gt=!!z.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),vt=!!z.morphAttributes.position,Kt=!!z.morphAttributes.normal,fe=!!z.morphAttributes.color,se=nn;O.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(se=T.toneMapping);let $t=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Be=$t!==void 0?$t.length:0,ft=H.get(O),Ie=_.state.lights;if(Vt===!0&&(ee===!0||v!==$)){let ie=v===$&&O.id===V;Et.setState(O,v,ie)}let Wt=!1;O.version===ft.__version?(ft.needsLights&&ft.lightsStateVersion!==Ie.state.version||ft.outputColorSpace!==ht||G.isBatchedMesh&&ft.batching===!1||!G.isBatchedMesh&&ft.batching===!0||G.isBatchedMesh&&ft.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&ft.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&ft.instancing===!1||!G.isInstancedMesh&&ft.instancing===!0||G.isSkinnedMesh&&ft.skinning===!1||!G.isSkinnedMesh&&ft.skinning===!0||G.isInstancedMesh&&ft.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&ft.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&ft.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&ft.instancingMorph===!1&&G.morphTexture!==null||ft.envMap!==Mt||O.fog===!0&&ft.fog!==dt||ft.numClippingPlanes!==void 0&&(ft.numClippingPlanes!==Et.numPlanes||ft.numIntersection!==Et.numIntersection)||ft.vertexAlphas!==Rt||ft.vertexTangents!==Gt||ft.morphTargets!==vt||ft.morphNormals!==Kt||ft.morphColors!==fe||ft.toneMapping!==se||ft.morphTargetsCount!==Be||!!ft.lightProbeGrid!=_.state.lightProbeGridArray.length>0)&&(Wt=!0):(Wt=!0,ft.__version=O.version);let Ve=ft.currentProgram;Wt===!0&&(Ve=Zs(O,C,G),U&&O.isNodeMaterial&&U.onUpdateProgram(O,Ve,ft));let on=!1,bn=!1,hi=!1,jt=Ve.getUniforms(),de=ft.uniforms;if(g.useProgram(Ve.program)&&(on=!0,bn=!0,hi=!0),O.id!==V&&(V=O.id,bn=!0),ft.needsLights){let ie=jA(_.state.lightProbeGridArray,G);ft.lightProbeGrid!==ie&&(ft.lightProbeGrid=ie,bn=!0)}if(on||$!==v){g.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),jt.setValue(P,"projectionMatrix",v.projectionMatrix),jt.setValue(P,"viewMatrix",v.matrixWorldInverse);let Tn=jt.map.cameraPosition;Tn!==void 0&&Tn.setValue(P,ae.setFromMatrixPosition(v.matrixWorld)),y.logarithmicDepthBuffer&&jt.setValue(P,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&jt.setValue(P,"isOrthographic",v.isOrthographicCamera===!0),$!==v&&($=v,bn=!0,hi=!0)}if(ft.needsLights&&(Ie.state.sunShadowMap.length>0&&jt.setValue(P,"sunShadowMap",Ie.state.sunShadowMap,W),Ie.state.directionalShadowMap.length>0&&jt.setValue(P,"directionalShadowMap",Ie.state.directionalShadowMap,W),Ie.state.spotShadowMap.length>0&&jt.setValue(P,"spotShadowMap",Ie.state.spotShadowMap,W),Ie.state.pointShadowMap.length>0&&jt.setValue(P,"pointShadowMap",Ie.state.pointShadowMap,W)),G.isSkinnedMesh){jt.setOptional(P,G,"bindMatrix"),jt.setOptional(P,G,"bindMatrixInverse");let ie=G.skeleton;ie&&(ie.boneTexture===null&&ie.computeBoneTexture(),jt.setValue(P,"boneTexture",ie.boneTexture,W))}G.isBatchedMesh&&(jt.setOptional(P,G,"batchingTexture"),jt.setValue(P,"batchingTexture",G._matricesTexture,W),jt.setOptional(P,G,"batchingIdTexture"),jt.setValue(P,"batchingIdTexture",G._indirectTexture,W),jt.setOptional(P,G,"batchingColorTexture"),G._colorsTexture!==null&&jt.setValue(P,"batchingColorTexture",G._colorsTexture,W));let Cn=z.morphAttributes;if((Cn.position!==void 0||Cn.normal!==void 0||Cn.color!==void 0)&&I.update(G,z,Ve),(bn||ft.receiveShadow!==G.receiveShadow)&&(ft.receiveShadow=G.receiveShadow,jt.setValue(P,"receiveShadow",G.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&C.environment!==null&&(de.envMapIntensity.value=C.environmentIntensity),de.dfgLUT!==void 0&&(de.dfgLUT.value=Vm()),bn){if(jt.setValue(P,"toneMappingExposure",T.toneMappingExposure),ft.needsLights&&th(de,hi),dt&&O.fog===!0&&xt.refreshFogUniforms(de,dt),xt.refreshMaterialUniforms(de,O,j,k,_.state.transmissionRenderTarget[v.id]),ft.needsLights&&ft.lightProbeGrid){let ie=ft.lightProbeGrid;de.probesSH.value=ie.texture,de.probesMin.value.copy(ie.boundingBox.min),de.probesMax.value.copy(ie.boundingBox.max),de.probesResolution.value.copy(ie.resolution)}Vi.upload(P,Ql(ft),de,W)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Vi.upload(P,Ql(ft),de,W),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&jt.setValue(P,"center",G.center),jt.setValue(P,"modelViewMatrix",G.modelViewMatrix),jt.setValue(P,"normalMatrix",G.normalMatrix),jt.setValue(P,"modelMatrix",G.matrixWorld),O.uniformsGroups!==void 0){let ie=O.uniformsGroups;for(let Tn=0,di=ie.length;Tn<di;Tn++){let Wl=ie[Tn];tt.update(Wl,Ve),tt.bind(Wl,Ve)}}return Ve}function th(v,C){v.ambientLightColor.needsUpdate=C,v.lightProbe.needsUpdate=C,v.sunLights.needsUpdate=C,v.sunLightShadows.needsUpdate=C,v.directionalLights.needsUpdate=C,v.directionalLightShadows.needsUpdate=C,v.pointLights.needsUpdate=C,v.pointLightShadows.needsUpdate=C,v.spotLights.needsUpdate=C,v.spotLightShadows.needsUpdate=C,v.rectAreaLights.needsUpdate=C,v.hemisphereLights.needsUpdate=C}function eh(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(v,C,z){let O=H.get(v);O.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),H.get(v.texture).__webglTexture=C,H.get(v.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:z,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,C){let z=H.get(v);z.__webglFramebuffer=C,z.__useDefaultFramebuffer=C===void 0},this.setRenderTarget=function(v,C=0,z=0){nt=v,K=C,Z=z;let O=null,G=!1,dt=!1;if(v){let ht=H.get(v);if(ht.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(P.FRAMEBUFFER,ht.__webglFramebuffer),et.copy(v.viewport),St.copy(v.scissor),_t=v.scissorTest,g.viewport(et),g.scissor(St),g.setScissorTest(_t),V=-1;return}else if(ht.__webglFramebuffer===void 0)W.setupRenderTarget(v);else if(ht.__hasExternalTextures)W.rebindTextures(v,H.get(v.texture).__webglTexture,H.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Rt=v.depthTexture;if(ht.__boundDepthTexture!==Rt){if(Rt!==null&&H.has(Rt)&&(v.width!==Rt.image.width||v.height!==Rt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(v)}}let Dt=v.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(dt=!0);let Mt=H.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Mt[C])?O=Mt[C][z]:O=Mt[C],G=!0):v.samples>0&&W.useMultisampledRTT(v)===!1?O=H.get(v).__webglMultisampledFramebuffer:Array.isArray(Mt)?O=Mt[z]:O=Mt,et.copy(v.viewport),St.copy(v.scissor),_t=v.scissorTest}else et.copy(pt).multiplyScalar(j).floor(),St.copy(Ut).multiplyScalar(j).floor(),_t=me;if(z!==0&&(O=Q),g.bindFramebuffer(P.FRAMEBUFFER,O)&&g.drawBuffers(v,O),g.viewport(et),g.scissor(St),g.setScissorTest(_t),G){let ht=H.get(v.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+C,ht.__webglTexture,z)}else if(dt){let ht=C;for(let Dt=0;Dt<v.textures.length;Dt++){let Mt=H.get(v.textures[Dt]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Dt,Mt.__webglTexture,z,ht)}}else if(v!==null&&z!==0){let ht=H.get(v.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ht.__webglTexture,z)}V=-1};function zl(v){let C=H.get(v);return(C.__readFormat!==v.format||C.__readType!==v.type)&&(C.__readFormat=v.format,C.__readType=v.type,C.__formatReadable=y.textureFormatReadable(v.format),C.__typeReadable=y.textureTypeReadable(v.type)),C}this.readRenderTargetPixels=function(v,C,z,O,G,dt,mt,ht=0){if(!(v&&v.isWebGLRenderTarget)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=H.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&mt!==void 0&&(Dt=Dt[mt]),Dt){g.bindFramebuffer(P.FRAMEBUFFER,Dt);try{let Mt=v.textures[ht],Rt=Mt.format,Gt=Mt.type;v.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ht);let vt=zl(Mt);if(vt.__formatReadable===!1){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(vt.__typeReadable===!1){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}C>=0&&C<=v.width-O&&z>=0&&z<=v.height-G&&P.readPixels(C,z,O,G,lt.convert(Rt),lt.convert(Gt),dt)}finally{let Mt=nt!==null?H.get(nt).__webglFramebuffer:null;g.bindFramebuffer(P.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=async function(v,C,z,O,G,dt,mt,ht=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=H.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&mt!==void 0&&(Dt=Dt[mt]),Dt)if(C>=0&&C<=v.width-O&&z>=0&&z<=v.height-G){g.bindFramebuffer(P.FRAMEBUFFER,Dt);let Mt=v.textures[ht],Rt=Mt.format,Gt=Mt.type;v.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ht);let vt=zl(Mt);if(vt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(vt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Kt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Kt),P.bufferData(P.PIXEL_PACK_BUFFER,dt.byteLength,P.STREAM_READ),P.readPixels(C,z,O,G,lt.convert(Rt),lt.convert(Gt),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let fe=nt!==null?H.get(nt).__webglFramebuffer:null;g.bindFramebuffer(P.FRAMEBUFFER,fe);let se=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await iA(P,se,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Kt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,dt),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(Kt),P.deleteSync(se),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,C=null,z=0){let O=Math.pow(2,-z),G=Math.floor(v.image.width*O),dt=Math.floor(v.image.height*O),mt=C!==null?C.x:0,ht=C!==null?C.y:0;W.setTexture2D(v,0),P.copyTexSubImage2D(P.TEXTURE_2D,z,0,0,mt,ht,G,dt),g.unbindTexture()},this.copyTextureToTexture=function(v,C,z=null,O=null,G=0,dt=0){let mt,ht,Dt,Mt,Rt,Gt,vt,Kt,fe,se=v.isCompressedTexture?v.mipmaps[dt]:v.image;if(z!==null)mt=z.max.x-z.min.x,ht=z.max.y-z.min.y,Dt=z.isBox3?z.max.z-z.min.z:1,Mt=z.min.x,Rt=z.min.y,Gt=z.isBox3?z.min.z:0;else{let de=Math.pow(2,-G);mt=Math.floor(se.width*de),ht=Math.floor(se.height*de),v.isDataArrayTexture?Dt=se.depth:v.isData3DTexture?Dt=Math.floor(se.depth*de):Dt=1,Mt=0,Rt=0,Gt=0}O!==null?(vt=O.x,Kt=O.y,fe=O.z):(vt=0,Kt=0,fe=0);let $t=lt.convert(C.format),Be=lt.convert(C.type),ft;C.isData3DTexture?(W.setTexture3D(C,0),ft=P.TEXTURE_3D):C.isDataArrayTexture||C.isCompressedArrayTexture?(W.setTexture2DArray(C,0),ft=P.TEXTURE_2D_ARRAY):(W.setTexture2D(C,0),ft=P.TEXTURE_2D),g.activeTexture(P.TEXTURE0),g.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,C.flipY),g.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),g.pixelStorei(P.UNPACK_ALIGNMENT,C.unpackAlignment);let Ie=g.getParameter(P.UNPACK_ROW_LENGTH),Wt=g.getParameter(P.UNPACK_IMAGE_HEIGHT),Ve=g.getParameter(P.UNPACK_SKIP_PIXELS),on=g.getParameter(P.UNPACK_SKIP_ROWS),bn=g.getParameter(P.UNPACK_SKIP_IMAGES);g.pixelStorei(P.UNPACK_ROW_LENGTH,se.width),g.pixelStorei(P.UNPACK_IMAGE_HEIGHT,se.height),g.pixelStorei(P.UNPACK_SKIP_PIXELS,Mt),g.pixelStorei(P.UNPACK_SKIP_ROWS,Rt),g.pixelStorei(P.UNPACK_SKIP_IMAGES,Gt);let hi=v.isDataArrayTexture||v.isData3DTexture,jt=C.isDataArrayTexture||C.isData3DTexture;if(v.isDepthTexture){let de=H.get(v),Cn=H.get(C),ie=H.get(de.__renderTarget),Tn=H.get(Cn.__renderTarget);g.bindFramebuffer(P.READ_FRAMEBUFFER,ie.__webglFramebuffer),g.bindFramebuffer(P.DRAW_FRAMEBUFFER,Tn.__webglFramebuffer);for(let di=0;di<Dt;di++)hi&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,H.get(v).__webglTexture,G,Gt+di),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,H.get(C).__webglTexture,dt,fe+di)),P.blitFramebuffer(Mt,Rt,mt,ht,vt,Kt,mt,ht,P.DEPTH_BUFFER_BIT,P.NEAREST);g.bindFramebuffer(P.READ_FRAMEBUFFER,null),g.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(G!==0||v.isRenderTargetTexture||H.has(v)){let de=H.get(v),Cn=H.get(C);g.bindFramebuffer(P.READ_FRAMEBUFFER,F),g.bindFramebuffer(P.DRAW_FRAMEBUFFER,Y);for(let ie=0;ie<Dt;ie++)hi?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,de.__webglTexture,G,Gt+ie):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,de.__webglTexture,G),jt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Cn.__webglTexture,dt,fe+ie):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Cn.__webglTexture,dt),G!==0?P.blitFramebuffer(Mt,Rt,mt,ht,vt,Kt,mt,ht,P.COLOR_BUFFER_BIT,P.NEAREST):jt?P.copyTexSubImage3D(ft,dt,vt,Kt,fe+ie,Mt,Rt,mt,ht):P.copyTexSubImage2D(ft,dt,vt,Kt,Mt,Rt,mt,ht);g.bindFramebuffer(P.READ_FRAMEBUFFER,null),g.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else jt?v.isDataTexture||v.isData3DTexture?P.texSubImage3D(ft,dt,vt,Kt,fe,mt,ht,Dt,$t,Be,se.data):C.isCompressedArrayTexture?P.compressedTexSubImage3D(ft,dt,vt,Kt,fe,mt,ht,Dt,$t,se.data):P.texSubImage3D(ft,dt,vt,Kt,fe,mt,ht,Dt,$t,Be,se):v.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,dt,vt,Kt,mt,ht,$t,Be,se.data):v.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,dt,vt,Kt,se.width,se.height,$t,se.data):P.texSubImage2D(P.TEXTURE_2D,dt,vt,Kt,mt,ht,$t,Be,se);g.pixelStorei(P.UNPACK_ROW_LENGTH,Ie),g.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Wt),g.pixelStorei(P.UNPACK_SKIP_PIXELS,Ve),g.pixelStorei(P.UNPACK_SKIP_ROWS,on),g.pixelStorei(P.UNPACK_SKIP_IMAGES,bn),dt===0&&C.generateMipmaps&&P.generateMipmap(ft),g.unbindTexture()},this.initRenderTarget=function(v){H.get(v).__webglFramebuffer===void 0&&W.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?W.setTextureCube(v,0):v.isData3DTexture?W.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?W.setTexture2DArray(v,0):W.setTexture2D(v,0),g.unbindTexture()},this.resetState=function(){K=0,Z=0,nt=null,g.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return en}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}};var Ja=class extends ei{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new pn;t.deleteAttribute("uv");let e=new On({side:ye}),n=new On,s=new Ts(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new ce(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new ps(t,n,6),o=new De;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new ce(t,Ki(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new ce(t,Ki(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new ce(t,Ki(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let f=new ce(t,Ki(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let A=new ce(t,Ki(20));A.position.set(3.235,11.486,-12.541),A.scale.set(2.5,2,.1),this.add(A);let u=new ce(t,Ki(100));u.position.set(0,20,0),u.scale.set(1,.1,1),this.add(u)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Ki(i){return new ys({color:0,emissive:16777215,emissiveIntensity:i})}var QA={body:{p:"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VgdBDFwAUgdFDEsAZwf6ALX/UgcDAbX/VgcHAaT/ZwcDAaD/SQcYAbX/UgcYAaD/VgcHAaT/UgcDAbX/ZwcYAZf/ZwcDAaD/VgcHAaT/UgcYAaD/ZwdODLX/ZwdFDKD/VgdBDKT/UgdFDLX/ZwcwDJf/UgcwDKD/VgdBDKT/ZwdFDKD/SQcwDLX/UgdFDLX/VgdBDKT/UgcwDKD/TQj6AEsAYggDAUsAXggHAVwATQgDAWAAawgYAUsAYggYAWAAXggHAVwAYggDAUsATQgYAWkATQgDAWAAXggHAVwAYggYAWAATQhODEsATQhFDGAAXghBDFwAYghFDEsATQgwDGkAYggwDGAAXghBDFwATQhFDGAAawgwDEsAYghFDEsAXghBDFwAYggwDGAATQj6ALX/TQgDAaD/XggHAaT/YggDAbX/TQgYAZf/YggYAaD/XggHAaT/TQgDAaD/awgYAbX/YggDAbX/XggHAaT/YggYAaD/TQhODLX/YghFDLX/XghBDKT/TQhFDKD/awgwDLX/YggwDKD/XghBDKT/YghFDLX/TQgwDJf/TQhFDKD/XghBDKT/YggwDKD/Zwf6ALX/Zwf6AEsAUgcDAUsAUgcDAbX/UgcDAbX/UgcDAUsASQcYAUsASQcYAbX/ZwcYAWkAZwcwDGkAUgcwDGAAUgcYAWAAUgcYAWAAUgcwDGAASQcwDEsASQcYAUsAZwdODEsAZwdODLX/UgdFDLX/UgdFDEsAUgdFDEsAUgdFDLX/SQcwDLX/SQcwDEsAZwcwDJf/ZwcYAZf/UgcYAaD/UgcwDKD/UgcwDKD/UgcYAaD/SQcYAbX/SQcwDLX/TQj6ALX/Zwf6ALX/ZwcDAaD/TQgDAaD/TQgDAaD/ZwcDAaD/ZwcYAZf/TQgYAZf/ZwdODLX/TQhODLX/TQhFDKD/ZwdFDKD/ZwdFDKD/TQhFDKD/TQgwDJf/ZwcwDJf/awgwDLX/awgYAbX/YggYAaD/YggwDKD/YggwDKD/YggYAaD/TQgYAZf/TQgwDJf/TQj6AEsATQj6ALX/YggDAbX/YggDAUsAYggDAUsAYggDAbX/awgYAbX/awgYAUsATQhODLX/TQhODEsAYghFDEsAYghFDLX/YghFDLX/YghFDEsAawgwDEsAawgwDLX/TQgwDGkATQgYAWkAYggYAWAAYggwDGAA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DgQwDMv5gQQwDAT5cgP6AHH55gP6AKr4aAT6APX49QP6ALz5aQAYAbP3aQAwDLP3aQAwDJn4aQAYAZn4tf8YAZX3tf8wDJX3SwAwDJX3SwAYAZX3tf9ODLP3tf9ODJn4SwBODJn4SwBODLP3SwAYAbf4SwAwDLf4tf8wDLf4tf8YAbf4l/8YAZn4l/8wDJn4l/8wDLP3l/8YAbP3SwD6AJn4YAADAZn4XAAHAar4SwADAa74aQAYAZn4YAAYAa74XAAHAar4YAADAZn4SwAYAbf4SwADAa74XAAHAar4YAAYAa74aQAwDJn4YABFDJn4XABBDKr4YAAwDK74SwBODJn4SwBFDK74XABBDKr4YABFDJn4SwAwDLf4YAAwDK74XABBDKr4SwBFDK74tf/6AJn4tf8DAa74pP8HAar4oP8DAZn4tf8YAbf4oP8YAa74pP8HAar4tf8DAa74l/8YAZn4oP8DAZn4pP8HAar4oP8YAa74tf9ODJn4oP9FDJn4pP9BDKr4tf9FDK74l/8wDJn4oP8wDK74pP9BDKr4oP9FDJn4tf8wDLf4tf9FDK74pP9BDKr4oP8wDK74SwD6ALP3SwADAZ73XAAHAaL3YAADAbP3SwAYAZX3YAAYAZ73XAAHAaL3SwADAZ73aQAYAbP3YAADAbP3XAAHAaL3YAAYAZ73SwBODLP3YABFDLP3XABBDKL3SwBFDJ73aQAwDLP3YAAwDJ73XABBDKL3YABFDLP3SwAwDJX3SwBFDJ73XABBDKL3YAAwDJ73tf/6ALP3oP8DAbP3pP8HAaL3tf8DAZ73l/8YAbP3oP8YAZ73pP8HAaL3oP8DAbP3tf8YAZX3tf8DAZ73pP8HAaL3oP8YAZ73tf9ODLP3tf9FDJ73pP9BDKL3oP9FDLP3tf8wDJX3oP8wDJ73pP9BDKL3tf9FDJ73l/8wDLP3oP9FDLP3pP9BDKL3oP8wDJ73tf/6AJn4SwD6AJn4SwADAa74tf8DAa74tf8DAa74SwADAa74SwAYAbf4tf8YAbf4aQAYAZn4aQAwDJn4YAAwDK74YAAYAa74YAAYAa74YAAwDK74SwAwDLf4SwAYAbf4SwBODJn4tf9ODJn4tf9FDK74SwBFDK74SwBFDK74tf9FDK74tf8wDLf4SwAwDLf4l/8wDJn4l/8YAZn4oP8YAa74oP8wDK74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SwAYAUkHYAAYAVIHXAAHAVYHSwADAVIHaQAYAWcHYAADAWcHXAAHAVYHYAAYAVIHSwBODGcHYABFDGcHXABBDFYHSwBFDFIHaQAwDGcHYAAwDFIHXABBDFYHYABFDGcHSwAwDEkHSwBFDFIHXABBDFYHYAAwDFIHtf/6AE0Itf8DAWIIpP8HAV4IoP8DAU0Itf8YAWsIoP8YAWIIpP8HAV4Itf8DAWIIl/8YAU0IoP8DAU0IpP8HAV4IoP8YAWIItf9ODE0IoP9FDE0IpP9BDF4Itf9FDGIIl/8wDE0IoP8wDGIIpP9BDF4IoP9FDE0Itf8wDGsItf9FDGIIpP9BDF4IoP8wDGIISwD6AE0IYAADAU0IXAAHAV4ISwADAWIIaQAYAU0IYAAYAWIIXAAHAV4IYAADAU0ISwAYAWsISwADAWIIXAAHAV4IYAAYAWIISwBODE0ISwBFDGIIXABBDF4IYABFDE0ISwAwDGsIYAAwDGIIXABBDF4ISwBFDGIIaQAwDE0IYABFDE0IXABBDF4IYAAwDGIISwD6AGcHtf/6AGcHtf8DAVIHSwADAVIHSwADAVIHtf8DAVIHtf8YAUkHSwAYAUkHl/8YAWcHl/8wDGcHoP8wDFIHoP8YAVIHoP8YAVIHoP8wDFIHtf8wDEkHtf8YAUkHtf9ODGcHSwBODGcHSwBFDFIHtf9FDFIHtf9FDFIHSwBFDFIHSwAwDEkHtf8wDEkHaQAwDGcHaQAYAWcHYAAYAVIHYAAwDFIHYAAwDFIHYAAYAVIHSwAYAUkHSwAwDEkHSwD6AE0ISwD6AGcHYAADAWcHYAADAU0IYAADAU0IYAADAWcHaQAYAWcHaQAYAU0ISwBODGcHSwBODE0IYABFDE0IYABFDGcHYABFDGcHYABFDE0IaQAwDE0IaQAwDGcHSwAwDGsISwAYAWsIYAAYAWIIYAAwDGIIYAAwDGIIYAAYAWIIaQAYAU0IaQAwDE0Itf/6AE0ISwD6AE0ISwADAWIItf8DAWIItf8DAWIISwADAWIISwAYAWsItf8YAWsISwBODE0Itf9ODE0Itf9FDGIISwBFDGIISwBFDGIItf9FDGIItf8wDGsISwAwDGsIl/8wDE0Il/8YAU0IoP8YAWIIoP8wDGIIoP8wDGIIoP8YAWIItf8YAWsItf8wDGsItf/6AGcHtf/6AE0IoP8DAU0IoP8DAWcHoP8DAWcHoP8DAU0Il/8YAU0Il/8YAWcHtf9ODE0Itf9ODGcHoP9FDGcHoP9FDE0IoP9FDE0IoP9FDGcHl/8wDGcHl/8wDE0ISwD6AGcHSwD6AE0Itf/6AE0Itf/6AGcHzAMYAWUHzAMwDGUHWQMwDJ4GWQMYAZ4GdgQYASUHdgQwDCUH9QMwDHAH9QMYAXAHaARODAsH9QNODEQGcgNODI8G5gNODFYHYwMYAXUGYwMwDHUG5gMwDCoG5gMYASoGDgQYATUGDgQwDDUGgQQwDPwGgQQYAfwGcgP6AI8GYAMDAZkGWwMHAYgGaAMDAXwGWQMYAZ4GVgMYAYcGWwMHAYgGYAMDAZkGYwMYAXUGaAMDAXwGWwMHAYgGVgMYAYcGWQMwDJ4GYANFDJkGWwNBDIgGVgMwDIcGcgNODI8GaANFDHwGWwNBDIgGYANFDJkGYwMwDHUGVgMwDIcGWwNBDIgGaANFDHwG9QP6AEQG6gMDATEG+wMHASwGBwQDATkG5gMYASoG/AMYAScG+wMHASwG6gMDATEGDgQYATUGBwQDATkG+wMHASwG/AMYAScG9QNODEQGBwRFDDkG+wNBDCwG6gNFDDEGDgQwDDUG/AMwDCcG+wNBDCwGBwRFDDkG5gMwDCoG6gNFDDEG+wNBDCwG/AMwDCcG5gP6AFYH8AMDAWgH3wMHAW4H0wMDAWAH9QMYAXAH3gMYAXMH3wMHAW4H8AMDAWgHzAMYAWUH0wMDAWAH3wMHAW4H3gMYAXMH5gNODFYH0wNFDGAH3wNBDG4H8ANFDGgHzAMwDGUH3gMwDHMH3wNBDG4H0wNFDGAH9QMwDHAH8ANFDGgH3wNBDG4H3gMwDHMHaAT6AAsHegQDAQAHfwQHAREHcgQDAR0HgQQYAfwGhAQYARMHfwQHAREHegQDAQAHdgQYASUHcgQDAR0HfwQHAREHhAQYARMHaARODAsHcgRFDB0HfwRBDBEHegRFDAAHdgQwDCUHhAQwDBMHfwRBDBEHcgRFDB0HgQQwDPwGegRFDAAHfwRBDBEHhAQwDBMH9QP6AEQGcgP6AI8GaAMDAXwG6gMDATEG6gMDATEGaAMDAXwGYwMYAXUG5gMYASoGWQMYAZ4GWQMwDJ4GVgMwDIcGVgMYAYcGVgMYAYcGVgMwDIcGYwMwDHUGYwMYAXUGcgNODI8G9QNODEQG6gNFDDEGaANFDHwGaANFDHwG6gNFDDEG5gMwDCoGYwMwDHUGDgQwDDUGDgQYATUG/AMYAScG/AMwDCcG/AMwDCcG/AMYAScG5gMYASoG5gMwDCoGaAT6AAsH9QP6AEQGBwQDATkGegQDAQAHegQDAQAHBwQDATkGDgQYATUGgQQYAfwG9QNODEQGaARODAsHegRFDAAHBwRFDDkGBwRFDDkGegRFDAAHgQQwDPwGDgQwDDUGdgQwDCUHdgQYASUHhAQYARMHhAQwDBMHhAQwDBMHhAQYARMHgQQYAfwGgQQwDPwG5gP6AFYHaAT6AAsHcgQDAR0H8AMDAWgH8AMDAWgHcgQDAR0HdgQYASUH9QMYAXAHaARODAsH5gNODFYH8ANFDGgHcgRFDB0HcgRFDB0H8ANFDGgH9QMwDHAHdgQwDCUHzAMwDGUHzAMYAWUH3gMYAXMH3gMwDHMH3gMwDHMH3gMYAXMH9QMYAXAH9QMwDHAHcgP6AI8G5gP6AFYH0wMDAWAHYAMDAZkGYAMDAZkG0wMDAWAHzAMYAWUHWQMYAZ4G5gNODFYHcgNODI8GYANFDJkG0wNFDGAH0wNFDGAHYANFDJkGWQMwDJ4GzAMwDGUH9QP6AEQGaAT6AAsH5gP6AFYHcgP6AI8G/AYYAYEE/AYwDIEENQYwDA4ENQYYAQ4EcAcYAfUDcAcwDPUDJQcwDHYEJQcYAXYEVgdODOYDjwZODHIDRAZODPUDCwdODGgEKgYYAeYDKgYwDOYDdQYwDGMDdQYYAWMDngYYAVkDngYwDFkDZQcwDMwDZQcYAcwDRAb6APUDOQYDAQcELAYHAfsDMQYDAeoDNQYYAQ4EJwYYAfwDLAYHAfsDOQYDAQcEKgYYAeYDMQYDAeoDLAYHAfsDJwYYAfwDNQYwDA4EOQZFDAcELAZBDPsDJwYwDPwDRAZODPUDMQZFDOoDLAZBDPsDOQZFDAcEKgYwDOYDJwYwDPwDLAZBDPsDMQZFDOoDjwb6AHIDfAYDAWgDiAYHAVsDmQYDAWADdQYYAWMDhwYYAVYDiAYHAVsDfAYDAWgDngYYAVkDmQYDAWADiAYHAVsDhwYYAVYDjwZODHIDmQZFDGADiAZBDFsDfAZFDGgDngYwDFkDhwYwDFYDiAZBDFsDmQZFDGADdQYwDGMDfAZFDGgDiAZBDFsDhwYwDFYDCwf6AGgEHQcDAXIEEQcHAX8EAAcDAXoEJQcYAXYEEwcYAYQEEQcHAX8EHQcDAXIE/AYYAYEEAAcDAXoEEQcHAX8EEwcYAYQECwdODGgEAAdFDHoEEQdBDH8EHQdFDHIE/AYwDIEEEwcwDIQEEQdBDH8EAAdFDHoEJQcwDHYEHQdFDHIEEQdBDH8EEwcwDIQEVgf6AOYDYAcDAdMDbgcHAd8DaAcDAfADZQcYAcwDcwcYAd4DbgcHAd8DYAcDAdMDcAcYAfUDaAcDAfADbgcHAd8DcwcYAd4DVgdODOYDaAdFDPADbgdBDN8DYAdFDNMDcAcwDPUDcwcwDN4DbgdBDN8DaAdFDPADZQcwDMwDYAdFDNMDbgdBDN8DcwcwDN4Djwb6AHIDRAb6APUDMQYDAeoDfAYDAWgDfAYDAWgDMQYDAeoDKgYYAeYDdQYYAWMDNQYYAQ4ENQYwDA4EJwYwDPwDJwYYAfwDJwYYAfwDJwYwDPwDKgYwDOYDKgYYAeYDRAZODPUDjwZODHIDfAZFDGgDMQZFDOoDMQZFDOoDfAZFDGgDdQYwDGMDKgYwDOYDngYwDFkDngYYAVkDhwYYAVYDhwYwDFYDhwYwDFYDhwYYAVYDdQYYAWMDdQYwDGMDVgf6AOYDjwb6AHIDmQYDAWADYAcDAdMDYAcDAdMDmQYDAWADngYYAVkDZQcYAcwDjwZODHIDVgdODOYDYAdFDNMDmQZFDGADmQZFDGADYAdFDNMDZQcwDMwDngYwDFkDcAcwDPUDcAcYAfUDcwcYAd4DcwcwDN4DcwcwDN4DcwcYAd4DZQcYAcwDZQcwDMwDCwf6AGgEVgf6AOYDaAcDAfADHQcDAXIEHQcDAXIEaAcDAfADcAcYAfUDJQcYAXYEVgdODOYDCwdODGgEHQdFDHIEaAdFDPADaAdFDPADHQdFDHIEJQcwDHYEcAcwDPUD/AYwDIEE/AYYAYEEEwcYAYQEEwcwDIQEEwcwDIQEEwcYAYQEJQcYAXYEJQcwDHYERAb6APUDCwf6AGgEAAcDAXoEOQYDAQcEOQYDAQcEAAcDAXoE/AYYAYEENQYYAQ4ECwdODGgERAZODPUDOQZFDAcEAAdFDHoEAAdFDHoEOQZFDAcENQYwDA4E/AYwDIEEjwb6AHIDVgf6AOYDCwf6AGgERAb6APUD",n:"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",i:"AAABAAIAAAACAAMABAAFAAYABAAGAAcABwAGAAgABwAIAAkACQAIAAoACQAKAAsACwAKAAwACwAMAA0ADQAMAA4ADQAOAA8ADwAOABAADwAQABEAEQAQABIAEQASABMAEwASABQAEwAUABUAFQAUABYAFQAWABcAFwAWABgAFwAYABkAGQAYABoAGQAaABsAGwAaABwAGwAcAB0AHQAcAB4AHQAeAB8AHwAeACAAHwAgACEAIQAgACIAIQAiACMAIwAiACQAIwAkACUAJQAkACYAJQAmACcAJwAmACgAJwAoACkAKQAoACoAKQAqACsAKwAqACwAKwAsAC0ALQAsAAEALQABAAAALgAvAAUALgAFAAQAMAAxADIAMgAzADQANAA1ADYANgA3ADgAOAA5ADoAOgA7ADwAPAA9AD4APgA/AEAAQABBAEIAQgBDAEQARABFAEYARgBHADAAMAAyADQANAA2ADgAOAA6ADwAPAA+AEAAQABCAEQARABGADAAMAA0ADgAOAA8AEAAQABEADAAOABAADAAAwACAC8AAwAvAC4AAwAuAEgAAwBIAEkASgBLAEwASgBMAE0ALwACAE4ALwBOAE8AUABRAFIAUABSAFMALgAEAFQALgBUAEgAVQBWAFcAVQBXAFgABQAvAE8ABQBPAFkAWgBbAFwAWgBcAF0ABAAHAF4ABABeAFQAXwBgAGEAXwBhAGIABgAFAFkABgBZAGMAZABlAGYAZABmAGcABwAJAGgABwBoAF4AaQBqAGsAaQBrAGwACAAGAGMACABjAG0AbgBvAHAAbgBwAHEACQALAHIACQByAGgAcwB0AHUAcwB1AHYACgAIAG0ACgBtAHcAeAB5AHoAeAB6AHsACwANAHwACwB8AHIAfQB+AH8AfQB/AIAADAAKAHcADAB3AIEAggCDAIQAggCEAIUADQAPAIYADQCGAHwAhwCIAIkAhwCJAIoADgAMAIEADgCBAIsAjACNAI4AjACOAI8ADwARAJAADwCQAIYAkQCSAJMAkQCTAJQAEAAOAIsAEACLAJUAlgCXAJgAlgCYAJkAEQATAJoAEQCaAJAAmwCcAJ0AmwCdAJ4AEgAQAJUAEgCVAJ8AoAChAKIAoACiAKMAEwAVAKQAEwCkAJoApQCmAKcApQCnAKgAFAASAJ8AFACfAKkAqgCrAKwAqgCsAK0AFQAXAK4AFQCuAKQArwCwALEArwCxALIAFgAUAKkAFgCpALMAtAC1ALYAtAC2ALcAFwAZALgAFwC4AK4AuQC6ALsAuQC7ALwAGAAWALMAGACzAL0AvgC/AMAAvgDAAMEAGQAbAMIAGQDCALgAwwDEAMUAwwDFAMYAGgAYAL0AGgC9AMcAyADJAMoAyADKAMsAGwAdAMwAGwDMAMIAzQDOAM8AzQDPANAAHAAaAMcAHADHANEA0gDTANQA0gDUANUAHQAfANYAHQDWAMwA1wDYANkA1wDZANoAHgAcANEAHgDRANsA3ADdAN4A3ADeAN8AHwAhAOAAHwDgANYA4QDiAOMA4QDjAOQAIAAeANsAIADbAOUA5gDnAOgA5gDoAOkAIQAjAOoAIQDqAOAA6wDsAO0A6wDtAO4AIgAgAOUAIgDlAO8A8ADxAPIA8ADyAPMAIwAlAPQAIwD0AOoA9QD2APcA9QD3APgAJAAiAO8AJADvAPkA+gD7APwA+gD8AP0AJQAnAP4AJQD+APQA/wAAAQEB/wABAQIBJgAkAPkAJgD5AAMBBAEFAQYBBAEGAQcBJwApAAgBJwAIAf4ACQEKAQsBCQELAQwBKAAmAAMBKAADAQ0BDgEPARABDgEQAREBKQArABIBKQASAQgBEwEUARUBEwEVARYBKgAoAA0BKgANARcBGAEZARoBGAEaARsBKwAtABwBKwAcARIBHQEeAR8BHQEfASABLAAqABcBLAAXASEBIgEjASQBIgEkASUBLQAAACYBLQAmARwBJwEoASkBJwEpASoBAQAsACEBAQAhASsBLAEtAS4BLAEuAS8BAAADAEkAAABJACYBMAExATIBMAEyATMBAgABACsBAgArAU4ANAE1ATYBNAE2ATcBOAE5AToBOgE7ATwBPAE9AT4BPgE/AUABQAFBAUIBQgFDAUQBRAFFAUYBRgFHAUgBSAFJAUoBSgFLAUwBTAFNAU4BTgFPATgBOAE6ATwBPAE+AUABQAFCAUQBRAFGAUgBSAFKAUwBTAFOATgBOAE8AUABQAFEAUgBSAFMATgBQAFIATgBUAFRAVIBUAFSAVMBVAFVAVYBVAFWAVcBVwFWAVgBVwFYAVkBWQFYAVoBWQFaAVsBWwFaAVwBWwFcAV0BXQFcAV4BXQFeAV8BXwFeAWABXwFgAWEBYQFgAWIBYQFiAWMBYwFiAWQBYwFkAWUBZQFkAWYBZQFmAWcBZwFmAWgBZwFoAWkBaQFoAWoBaQFqAWsBawFqAWwBawFsAW0BbQFsAW4BbQFuAW8BbwFuAXABbwFwAXEBcQFwAXIBcQFyAXMBcwFyAXQBcwF0AXUBdQF0AXYBdQF2AXcBdwF2AXgBdwF4AXkBeQF4AXoBeQF6AXsBewF6AXwBewF8AX0BfQF8AVEBfQFRAVABfgF/AVUBfgFVAVQBgAGBAYIBggGDAYQBhAGFAYYBhgGHAYgBiAGJAYoBigGLAYwBjAGNAY4BjgGPAZABkAGRAZIBkgGTAZQBlAGVAZYBlgGXAYABgAGCAYQBhAGGAYgBiAGKAYwBjAGOAZABkAGSAZQBlAGWAYABgAGEAYgBiAGMAZABkAGUAYABiAGQAYABUwFSAX8BUwF/AX4BUwF+AZgBUwGYAZkBmgGbAZwBmgGcAZ0BfwFSAZ4BfwGeAZ8BoAGhAaIBoAGiAaMBfgFUAaQBfgGkAZgBpQGmAacBpQGnAagBVQF/AZ8BVQGfAakBqgGrAawBqgGsAa0BVAFXAa4BVAGuAaQBrwGwAbEBrwGxAbIBVgFVAakBVgGpAbMBtAG1AbYBtAG2AbcBVwFZAbgBVwG4Aa4BuQG6AbsBuQG7AbwBWAFWAbMBWAGzAb0BvgG/AcABvgHAAcEBWQFbAcIBWQHCAbgBwwHEAcUBwwHFAcYBWgFYAb0BWgG9AccByAHJAcoByAHKAcsBWwFdAcwBWwHMAcIBzQHOAc8BzQHPAdABXAFaAccBXAHHAdEB0gHTAdQB0gHUAdUBXQFfAdYBXQHWAcwB1wHYAdkB1wHZAdoBXgFcAdEBXgHRAdsB3AHdAd4B3AHeAd8BXwFhAeABXwHgAdYB4QHiAeMB4QHjAeQBYAFeAdsBYAHbAeUB5gHnAegB5gHoAekBYQFjAeoBYQHqAeAB6wHsAe0B6wHtAe4BYgFgAeUBYgHlAe8B8AHxAfIB8AHyAfMBYwFlAfQBYwH0AeoB9QH2AfcB9QH3AfgBZAFiAe8BZAHvAfkB+gH7AfwB+gH8Af0BZQFnAf4BZQH+AfQB/wEAAgEC/wEBAgICZgFkAfkBZgH5AQMCBAIFAgYCBAIGAgcCZwFpAQgCZwEIAv4BCQIKAgsCCQILAgwCaAFmAQMCaAEDAg0CDgIPAhACDgIQAhECaQFrARICaQESAggCEwIUAhUCEwIVAhYCagFoAQ0CagENAhcCGAIZAhoCGAIaAhsCawFtARwCawEcAhICHQIeAh8CHQIfAiACbAFqARcCbAEXAiECIgIjAiQCIgIkAiUCbQFvASYCbQEmAhwCJwIoAikCJwIpAioCbgFsASECbgEhAisCLAItAi4CLAIuAi8CbwFxATACbwEwAiYCMQIyAjMCMQIzAjQCcAFuASsCcAErAjUCNgI3AjgCNgI4AjkCcQFzAToCcQE6AjACOwI8Aj0COwI9Aj4CcgFwATUCcgE1Aj8CQAJBAkICQAJCAkMCcwF1AUQCcwFEAjoCRQJGAkcCRQJHAkgCdAFyAT8CdAE/AkkCSgJLAkwCSgJMAk0CdQF3AU4CdQFOAkQCTwJQAlECTwJRAlICdgF0AUkCdgFJAlMCVAJVAlYCVAJWAlcCdwF5AVgCdwFYAk4CWQJaAlsCWQJbAlwCeAF2AVMCeAFTAl0CXgJfAmACXgJgAmECeQF7AWICeQFiAlgCYwJkAmUCYwJlAmYCegF4AV0CegFdAmcCaAJpAmoCaAJqAmsCewF9AWwCewFsAmICbQJuAm8CbQJvAnACfAF6AWcCfAFnAnECcgJzAnQCcgJ0AnUCfQFQAXYCfQF2AmwCdwJ4AnkCdwJ5AnoCUQF8AXECUQFxAnsCfAJ9An4CfAJ+An8CUAFTAZkBUAGZAXYCgAKBAoICgAKCAoMCUgFRAXsCUgF7Ap4BhAKFAoYChAKGAocCiAKJAooCigKLAowCjAKNAo4CjgKPApACkAKRApICkgKTApQClAKVApYClgKXApgCmAKZApoCmgKbApwCnAKdAp4CngKfAogCiAKKAowCjAKOApACkAKSApQClAKWApgCmAKaApwCnAKeAogCiAKMApACkAKUApgCmAKcAogCkAKYAogCoAKhAqICoAKiAqMCpAKlAqYCpAKmAqcCpwKmAqgCpwKoAqkCqQKoAqoCqQKqAqsCqwKqAqwCqwKsAq0CrQKsAq4CrQKuAq8CrwKuArACrwKwArECsQKwArICsQKyArMCswKyArQCswK0ArUCtQK0ArYCtQK2ArcCtwK2ArgCtwK4ArkCuQK4AroCuQK6ArsCuwK6ArwCuwK8Ar0CvQK8Ar4CvQK+Ar8CvwK+AsACvwLAAsECwQLAAsICwQLCAsMCwwLCAsQCwwLEAsUCxQLEAsYCxQLGAscCxwLGAsgCxwLIAskCyQLIAsoCyQLKAssCywLKAswCywLMAs0CzQLMAqECzQKhAqACzgLPAqUCzgKlAqQC0ALRAtIC0gLTAtQC1ALVAtYC1gLXAtgC2ALZAtoC2gLbAtwC3ALdAt4C3gLfAuAC4ALhAuIC4gLjAuQC5ALlAuYC5gLnAtAC0ALSAtQC1ALWAtgC2ALaAtwC3ALeAuAC4ALiAuQC5ALmAtAC0ALUAtgC2ALcAuAC4ALkAtAC2ALgAtACowKiAs8CowLPAs4CowLOAugCowLoAukC6gLrAuwC6gLsAu0CzwKiAu4CzwLuAu8C8ALxAvIC8ALyAvMCzgKkAvQCzgL0AugC9QL2AvcC9QL3AvgCpQLPAu8CpQLvAvkC+gL7AvwC+gL8Av0CpAKnAv4CpAL+AvQC/wIAAwED/wIBAwIDpgKlAvkCpgL5AgMDBAMFAwYDBAMGAwcDpwKpAggDpwIIA/4CCQMKAwsDCQMLAwwDqAKmAgMDqAIDAw0DDgMPAxADDgMQAxEDqQKrAhIDqQISAwgDEwMUAxUDEwMVAxYDqgKoAg0DqgINAxcDGAMZAxoDGAMaAxsDqwKtAhwDqwIcAxIDHQMeAx8DHQMfAyADrAKqAhcDrAIXAyEDIgMjAyQDIgMkAyUDrQKvAiYDrQImAxwDJwMoAykDJwMpAyoDrgKsAiEDrgIhAysDLAMtAy4DLAMuAy8DrwKxAjADrwIwAyYDMQMyAzMDMQMzAzQDsAKuAisDsAIrAzUDNgM3AzgDNgM4AzkDsQKzAjoDsQI6AzADOwM8Az0DOwM9Az4DsgKwAjUDsgI1Az8DQANBA0IDQANCA0MDswK1AkQDswJEAzoDRQNGA0cDRQNHA0gDtAKyAj8DtAI/A0kDSgNLA0wDSgNMA00DtQK3Ak4DtQJOA0QDTwNQA1EDTwNRA1IDtgK0AkkDtgJJA1MDVANVA1YDVANWA1cDtwK5AlgDtwJYA04DWQNaA1sDWQNbA1wDuAK2AlMDuAJTA10DXgNfA2ADXgNgA2EDuQK7AmIDuQJiA1gDYwNkA2UDYwNlA2YDugK4Al0DugJdA2cDaANpA2oDaANqA2sDuwK9AmwDuwJsA2IDbQNuA28DbQNvA3ADvAK6AmcDvAJnA3EDcgNzA3QDcgN0A3UDvQK/AnYDvQJ2A2wDdwN4A3kDdwN5A3oDvgK8AnEDvgJxA3sDfAN9A34DfAN+A38DvwLBAoADvwKAA3YDgQOCA4MDgQODA4QDwAK+AnsDwAJ7A4UDhgOHA4gDhgOIA4kDwQLDAooDwQKKA4ADiwOMA40DiwONA44DwgLAAoUDwgKFA48DkAORA5IDkAOSA5MDwwLFApQDwwKUA4oDlQOWA5cDlQOXA5gDxALCAo8DxAKPA5kDmgObA5wDmgOcA50DxQLHAp4DxQKeA5QDnwOgA6EDnwOhA6IDxgLEApkDxgKZA6MDpAOlA6YDpAOmA6cDxwLJAqgDxwKoA54DqQOqA6sDqQOrA6wDyALGAqMDyAKjA60DrgOvA7ADrgOwA7EDyQLLArIDyQKyA6gDswO0A7UDswO1A7YDygLIAq0DygKtA7cDuAO5A7oDuAO6A7sDywLNArwDywK8A7IDvQO+A78DvQO/A8ADzALKArcDzAK3A8EDwgPDA8QDwgPEA8UDzQKgAsYDzQLGA7wDxwPIA8kDxwPJA8oDoQLMAsEDoQLBA8sDzAPNA84DzAPOA88DoAKjAukCoALpAsYD0APRA9ID0APSA9MDogKhAssDogLLA+4C1APVA9YD1APWA9cD2APZA9oD2gPbA9wD3APdA94D3gPfA+AD4APhA+ID4gPjA+QD5APlA+YD5gPnA+gD6APpA+oD6gPrA+wD7APtA+4D7gPvA9gD2APaA9wD3APeA+AD4APiA+QD5APmA+gD6APqA+wD7APuA9gD2APcA+AD4APkA+gD6APsA9gD4APoA9gD8APxA/ID8APyA/MD9AP1A/YD9AP2A/cD+AP5A/oD+AP6A/sD/AP9A/4D/AP+A/8DAAQBBAIEAAQCBAMEBAQFBAYEBAQGBAcECAQJBAoECAQKBAsEDAQNBA4EDAQOBA8EEAQRBBIEEAQSBBMEFAQVBBYEFAQWBBcEGAQZBBoEGAQaBBsEHAQdBB4EHAQeBB8EIAQhBCIEIAQiBCMEJAQlBCYEJAQmBCcEKAQpBCoEKAQqBCsELAQtBC4ELAQuBC8EMAQxBDIEMAQyBDMENAQ1BDYENAQ2BDcEOAQ5BDoEOAQ6BDsEPAQ9BD4EPAQ+BD8EQARBBEIEQARCBEMERARFBEYERARGBEcESARJBEoESARKBEsETARNBE4ETAROBE8EUARRBFIEUARSBFMEVARVBFYEVARWBFcEWARZBFoEWARaBFsEXARdBF4EXAReBF8EYARhBGIEYARiBGMEZARlBGYEZARmBGcEaARpBGoEaARqBGsEbARtBG4EbARuBG8EcARxBHIEcARyBHMEdAR1BHYEdAR2BHcEeAR5BHoEeAR6BHsEfAR9BH4EfAR+BH8EgASBBIIEgASCBIMEhASFBIYEhASGBIcEiASJBIoEiASKBIsEjASNBI4EjASOBI8EkASRBJIEkASSBJMElASVBJYElASWBJcEmASZBJoEmASaBJsEnASdBJ4EnASeBJ8EoAShBKIEoASiBKMEpASlBKYEpASmBKcEqASpBKoEqASqBKsErAStBK4ErASuBK8EsASxBLIEsASyBLMEtAS1BLYEtAS2BLcEuAS5BLoEuAS6BLsEvAS9BL4EvAS+BL8EwATBBMIEwATCBMMExATFBMYExATGBMcEyATJBMoEyATKBMsEzATNBM4EzATOBM8E0ATRBNIE0ATSBNME1ATVBNYE1ATWBNcE2ATZBNoE2ATaBNsE3ATdBN4E3ATeBN8E4AThBOIE4ATiBOME5ATlBOYE5ATmBOcE6ATpBOoE6ATqBOsE7ATtBO4E7ATuBO8E8ATxBPIE8ATyBPME9AT1BPYE9AT2BPcE+AT5BPoE+AT6BPsE/AT9BP4E/AT+BP8EAAUBBQIFAAUCBQMFBAUFBQYFBAUGBQcFCAUJBQoFCAUKBQsFDAUNBQ4FDAUOBQ8FEAURBRIFEAUSBRMFFAUVBRYFFAUWBRcFGAUZBRoFGAUaBRsFHAUdBR4FHAUeBR8FIAUhBSIFIAUiBSMFJAUlBSYFJAUmBScFKAUpBSoFKAUqBSsFLAUtBS4FLAUuBS8FMAUxBTIFMAUyBTMFNAU1BTYFNAU2BTcFOAU5BToFOAU6BTsFPAU9BT4FPAU+BT8FQAVBBUIFQAVCBUMFRAVFBUYFRAVGBUcFSAVJBUoFSAVKBUsFTAVNBU4FTAVOBU8FUAVRBVIFUAVSBVMFVAVVBVYFVAVWBVcFWAVZBVoFWAVaBVsFXAVdBV4FXAVeBV8FYAVhBWIFYAViBWMFZAVlBWYFZAVmBWcFaAVpBWoFaAVqBWsFbAVtBW4FbAVuBW8FcAVxBXIFcAVyBXMFdAV1BXYFdAV2BXcFeAV5BXoFeAV6BXsFfAV9BX4FfAV+BX8FgAWBBYIFgAWCBYMFhAWFBYYFhAWGBYcFiAWJBYoFiAWKBYsFjAWNBY4FjAWOBY8FkAWRBZIFkAWSBZMFlAWVBZYFlAWWBZcFmAWZBZoFmAWaBZsFnAWdBZ4FnAWeBZ8FoAWhBaIFoAWiBaMFpAWlBaYFpAWmBacFqAWpBaoFqAWqBasFrAWtBa4FrAWuBa8FsAWxBbIFsAWyBbMFtAW1BbYFtAW2BbcFuAW5BboFuAW6BbsFvAW9Bb4FvAW+Bb8FwAXBBcIFwAXCBcMFxAXFBcYFxAXGBccFyAXJBcoFyAXKBcsFzAXNBc4FzAXOBc8F0AXRBdIF0AXSBdMF1AXVBdYF1AXWBdcF2AXZBdoF2AXaBdsF3AXdBd4F3AXeBd8F4AXhBeIF4AXiBeMF5AXlBeYF5AXmBecF6AXpBeoF6AXqBesF7AXtBe4F7AXuBe8F8AXxBfIF8AXyBfMF9AX1BfYF9AX2BfcF+AX5BfoF+AX6BfsF/AX9Bf4F/AX+Bf8FAAYBBgIGAAYCBgMGBAYFBgYGBAYGBgcGCAYJBgoGCAYKBgsGDAYNBg4GDAYOBg8GEAYRBhIGEAYSBhMGFAYVBhYGFAYWBhcGGAYZBhoGGAYaBhsGHAYdBh4GHAYeBh8GIAYhBiIGIAYiBiMGJAYlBiYGJAYmBicGKAYpBioGKAYqBisGLAYtBi4GLAYuBi8GMAYxBjIGMAYyBjMGNAY1BjYGNAY2BjcGOAY5BjoGOAY6BjsGPAY9Bj4GPAY+Bj8GQAZBBkIGQAZCBkMGRAZFBkYGRAZGBkcGSAZJBkoGSAZKBksGTAZNBk4GTAZOBk8GUAZRBlIGUAZSBlMGVAZVBlYGVAZWBlcGWAZZBloGWAZaBlsGXAZdBl4GXAZeBl8GYAZhBmIGYAZiBmMGZAZlBmYGZAZmBmcGaAZpBmoGaAZqBmsGbAZtBm4GbAZuBm8GcAZxBnIGcAZyBnMGdAZ1BnYGdAZ2BncGeAZ5BnoGeAZ6BnsGfAZ9Bn4GfAZ+Bn8GgAaBBoIGgAaCBoMGhAaFBoYGhAaGBocGiAaJBooGiAaKBosGjAaNBo4GjAaOBo8GkAaRBpIGkAaSBpMGlAaVBpYGlAaWBpcGmAaZBpoGmAaaBpsGnAadBp4GnAaeBp8GoAahBqIGoAaiBqMGpAalBqYGpAamBqcGqAapBqoGqAaqBqsGrAatBq4GrAauBq8GsAaxBrIGsAayBrMGtAa1BrYGtAa2BrcGuAa5BroGuAa6BrsGvAa9Br4GvAa+Br8GwAbBBsIGwAbCBsMGxAbFBsYGxAbGBscGyAbJBsoGyAbKBssGzAbNBs4GzAbOBs8G0AbRBtIG0AbSBtMG1AbVBtYG1AbWBtcG2AbZBtoG2AbaBtsG3AbdBt4G3AbeBt8G4AbhBuIG4AbiBuMG5AblBuYG5AbmBucG6AbpBuoG6AbqBusG7AbtBu4G7AbuBu8G8AbxBvIG8AbyBvMG9Ab1BvYG9Ab2BvcG+Ab5BvoG+Ab6BvsG/Ab9Bv4G/Ab+Bv8GAAcBBwIHAAcCBwMHBAcFBwYHBAcGBwcHCAcJBwoHCAcKBwsHDAcNBw4HDAcOBw8HEAcRBxIHEAcSBxMHFAcVBxYHFAcWBxcHGAcZBxoHGAcaBxsHHAcdBx4HHAceBx8HIAchByIHIAciByMHJAclByYHJAcmBycHKAcpByoHKAcqBysHLActBy4HLAcuBy8HMAcxBzIHMAcyBzMHNAc1BzYHNAc2BzcHOAc5BzoHOAc6BzsHPAc9Bz4HPAc+Bz8HQAdBB0IHQAdCB0MHRAdFB0YHRAdGB0cHSAdJB0oHSAdKB0sHTAdNB04HTAdOB08HUAdRB1IHUAdSB1MHVAdVB1YHVAdWB1cHWAdZB1oHWAdaB1sHXAddB14HXAdeB18HYAdhB2IHYAdiB2MHZAdlB2YHZAdmB2cHaAdpB2oHaAdqB2sHbAdtB24HbAduB28HcAdxB3IHcAdyB3MHdAd1B3YHdAd2B3cHeAd5B3oHeAd6B3sHfAd9B34HfAd+B38HgAeBB4IHgAeCB4MHhAeFB4YHhAeGB4cHiAeJB4oHiAeKB4sHjAeNB44HjAeOB48HkAeRB5IHkAeSB5MHlAeVB5YHlAeWB5cHmAeZB5oHmAeaB5sHnAedB54HnAeeB58HoAehB6IHoAeiB6MHpAelB6YHpAemB6cHqAepB6oHqAeqB6sHrAetB64HrAeuB68HsAexB7IHsAeyB7MHtAe1B7YHtAe2B7cHuAe5B7oHuAe6B7sHvAe9B74HvAe+B78HwAfBB8IHwAfCB8MHxAfFB8YHxAfGB8cHyAfJB8oHyAfKB8sHzAfNB84HzAfOB88H0AfRB9IH0AfSB9MH1AfVB9YH1AfWB9cH2AfZB9oH2AfaB9sH3AfdB94H3AfeB98H4AfhB+IH4AfiB+MH5AflB+YH5AfmB+cH6AfpB+oH6AfqB+sH7AftB+4H7AfuB+8H8AfxB/IH8AfyB/MH9Af1B/YH9Af2B/cH+Af5B/oH+Af6B/sH/Af9B/4H/Af+B/8HAAgBCAIIAAgCCAMIBAgFCAYIBAgGCAcICAgJCAoICAgKCAsIDAgNCA4IDAgOCA8IEAgRCBIIEAgSCBMIFAgVCBYIFAgWCBcIGAgZCBoIGAgaCBsIHAgdCB4IHAgeCB8IIAghCCIIIAgiCCMIJAglCCYIJAgmCCcIKAgpCCoIKAgqCCsILAgtCC4ILAguCC8IMAgxCDIIMAgyCDMINAg1CDYINAg2CDcIOAg5CDoIOAg6CDsIPAg9CD4IPAg+CD8IQAhBCEIIQAhCCEMIRAhFCEYIRAhGCEcISAhJCEoISAhKCEsITAhNCE4ITAhOCE8IUAhRCFIIUAhSCFMIVAhVCFYIVAhWCFcIWAhZCFoIWAhaCFsIXAhdCF4IXAheCF8IYAhhCGIIYAhiCGMIZAhlCGYIZAhmCGcIaAhpCGoIaAhqCGsIbAhtCG4IbAhuCG8IcAhxCHIIcAhyCHMIdAh1CHYIdAh2CHcIeAh5CHoIeAh6CHsIfAh9CH4IfAh+CH8IgAiBCIIIgAiCCIMIhAiFCIYIhAiGCIcIiAiJCIoIiAiKCIsIjAiNCI4IjAiOCI8IkAiRCJIIkAiSCJMIlAiVCJYIlAiWCJcImAiZCJoImAiaCJsInAidCJ4InAieCJ8IoAihCKIIoAiiCKMIpAilCKYIpAimCKcIqAipCKoIqAiqCKsIrAitCK4IrAiuCK8IsAixCLIIsAiyCLMItAi1CLYItAi2CLcIuAi5CLoIuAi6CLsIvAi9CL4IvAi+CL8IwAjBCMIIwAjCCMMIxAjFCMYIxAjGCMcIyAjJCMoIyAjKCMsIzAjNCM4IzAjOCM8I0AjRCNII0AjSCNMI1AjVCNYI1AjWCNcI2AjZCNoI2AjaCNsI3AjdCN4I3AjeCN8I4AjhCOII4AjiCOMI5AjlCOYI5AjmCOcI6AjpCOoI6AjqCOsI7AjtCO4I7AjuCO8I8AjxCPII8AjyCPMI9Aj1CPYI9Aj2CPcI+Aj5CPoI+Aj6CPsI/Aj9CP4I/Aj+CP8IAAkBCQIJAAkCCQMJBAkFCQYJBAkGCQcJCAkJCQoJCAkKCQsJDAkNCQ4JDAkOCQ8JEAkRCRIJEAkSCRMJFAkVCRYJFAkWCRcJGAkZCRoJGAkaCRsJHAkdCR4JHAkeCR8JIAkhCSIJIAkiCSMJJAklCSYJJAkmCScJKAkpCSoJKAkqCSsJLAktCS4JLAkuCS8JMAkxCTIJMAkyCTMJNAk1CTYJNAk2CTcJOAk5CToJOAk6CTsJPAk9CT4JPAk+CT8JQAlBCUIJQAlCCUMJRAlFCUYJRAlGCUcJSAlJCUoJSAlKCUsJTAlNCU4JTAlOCU8JUAlRCVIJUAlSCVMJVAlVCVYJVAlWCVcJWAlZCVoJWAlaCVsJXAldCV4JXAleCV8JYAlhCWIJYAliCWMJZAllCWYJZAlmCWcJaAlpCWoJaAlqCWsJbAltCW4JbAluCW8JcAlxCXIJcAlyCXMJdAl1CXYJdAl2CXcJeAl5CXoJeAl6CXsJfAl9CX4JfAl+CX8JgAmBCYIJgAmCCYMJhAmFCYYJhAmGCYcJiAmJCYoJiAmKCYsJjAmNCY4JjAmOCY8JkAmRCZIJkAmSCZMJlAmVCZYJlAmWCZcJmAmZCZoJmAmaCZsJnAmdCZ4JnAmeCZ8JoAmhCaIJoAmiCaMJpAmlCaYJpAmmCacJqAmpCaoJqAmqCasJrAmtCa4JrAmuCa8JsAmxCbIJsAmyCbMJtAm1CbYJtAm2CbcJuAm5CboJuAm6CbsJvAm9Cb4JvAm+Cb8JwAnBCcIJwAnCCcMJxAnFCcYJxAnGCccJyAnJCcoJyAnKCcsJzAnNCc4JzAnOCc8J0AnRCdIJ0AnSCdMJ1AnVCdYJ1AnWCdcJ2AnZCdoJ2AnaCdsJ3AndCd4J3AneCd8J4AnhCeIJ4AniCeMJ5AnlCeYJ5AnmCecJ6AnpCeoJ6AnqCesJ7AntCe4J7AnuCe8J8AnxCfIJ8AnyCfMJ9An1CfYJ9An2CfcJ+An5CfoJ+An6CfsJ/An9Cf4J/An+Cf8JAAoBCgIKAAoCCgMKBAoFCgYKBAoGCgcKCAoJCgoKCAoKCgsKDAoNCg4KDAoOCg8KEAoRChIKEAoSChMKFAoVChYKFAoWChcKGAoZChoKGAoaChsKHAodCh4KHAoeCh8KIAohCiIKIAoiCiMKJAolCiYKJAomCicKKAopCioKKAoqCisKLAotCi4KLAouCi8KMAoxCjIKMAoyCjMKNAo1CjYKNAo2CjcKOAo5CjoKOAo6CjsKPAo9Cj4KPAo+Cj8KQApBCkIKQApCCkMKRApFCkYKRApGCkcKSApJCkoKSApKCksKTApNCk4KTApOCk8KUApRClIKUApSClMKVApVClYKVApWClcKWApZCloKWApaClsKXApdCl4KXApeCl8KYAphCmIKYApiCmMKZAplCmYKZApmCmcKaAppCmoKaApqCmsKbAptCm4KbApuCm8KcApxCnIKcApyCnMKdAp1CnYKdAp2CncKeAp5CnoKeAp6CnsKfAp9Cn4KfAp+Cn8KgAqBCoIKgAqCCoMKhAqFCoYKhAqGCocKiAqJCooKiAqKCosKjAqNCo4KjAqOCo8KkAqRCpIKkAqSCpMKlAqVCpYKlAqWCpcKmAqZCpoKmAqaCpsKnAqdCp4KnAqeCp8KoAqhCqIKoAqiCqMKpAqlCqYKpAqmCqcKqAqpCqoKqAqqCqsKrAqtCq4KrAquCq8KsAqxCrIKsAqyCrMKtAq1CrYKtAq2CrcKuAq5CroKuAq6CrsKvAq9Cr4KvAq+Cr8KwArBCsIKwArCCsMKxArFCsYKxArGCscKyArJCsoKyArKCssKzArNCs4KzArOCs8K0ArRCtIK0ArSCtMK1ArVCtYK1ArWCtcK2ArZCtoK2AraCtsK3ArdCt4K3AreCt8K4ArhCuIK4AriCuMK5ArlCuYK5ArmCucK6ArpCuoK6ArqCusK7ArtCu4K7AruCu8K8ArxCvIK8AryCvMK9Ar1CvYK9Ar2CvcK+Ar5CvoK+Ar6CvsK/Ar9Cv4K/Ar+Cv8KAAsBCwILAAsCCwMLBAsFCwYLBAsGCwcLCAsJCwoLCAsKCwsLDAsNCw4LDAsOCw8LEAsRCxILEAsSCxMLFAsVCxYLFAsWCxcLGAsZCxoLGAsaCxsLHAsdCx4LHAseCx8LIAshCyILIAsiCyMLJAslCyYLJAsmCycLKAspCyoLKAsqCysLLAstCy4LLAsuCy8LMAsxCzILMAsyCzMLNAs1CzYLNAs2CzcLOAs5CzoLOAs6CzsLPAs9Cz4LPAs+Cz8LQAtBC0ILQAtCC0MLRAtFC0YLRAtGC0cLSAtJC0oLSAtKC0sLTAtNC04LTAtOC08LUAtRC1ILUAtSC1MLVAtVC1YLVAtWC1cLWAtZC1oLWAtaC1sLXAtdC14LXAteC18LYAthC2ILYAtiC2MLZAtlC2YLZAtmC2cLaAtpC2oLaAtqC2sLbAttC24LbAtuC28LcAtxC3ILcAtyC3MLdAt1C3YLdAt2C3cLeAt5C3oLeAt6C3sLfAt9C34LfAt+C38LgAuBC4ILgAuCC4MLhAuFC4YLhAuGC4cLiAuJC4oLiAuKC4sLjAuNC44LjAuOC48LkAuRC5ILkAuSC5MLlAuVC5YLlAuWC5cLmAuZC5oLmAuaC5sLnAudC54LnAueC58LoAuhC6ILoAuiC6MLpAulC6YLpAumC6cLqAupC6oLqAuqC6sLrAutC64LrAuuC68LsAuxC7ILsAuyC7MLtAu1C7YLtAu2C7cLuAu5C7oLuAu6C7sLvAu9C74LvAu+C78LwAvBC8ILwAvCC8MLxAvFC8YLxAvGC8cLyAvJC8oLyAvKC8sLzAvNC84LzAvOC88L0AvRC9IL0AvSC9ML1AvVC9YL1AvWC9cL2AvZC9oL2AvaC9sL3AvdC94L3AveC98L4AvhC+IL4AviC+ML5AvlC+YL5AvmC+cL6AvpC+oL6AvqC+sL7AvtC+4L7AvuC+8L8AvxC/IL8AvyC/ML9Av1C/YL9Av2C/cL+Av5C/oL+Av6C/sL/Av9C/4L/Av+C/8LAAwBDAIMAAwCDAMMBAwFDAYMBAwGDAcMCAwJDAoMCAwKDAsMDAwNDA4MDAwODA8MEAwRDBIMEAwSDBMMFAwVDBYMFAwWDBcMGAwZDBoMGAwaDBsMHAwdDB4MHAweDB8MIAwhDCIMIAwiDCMMJAwlDCYMJAwmDCcMKAwpDCoMKAwqDCsMLAwtDC4MLAwuDC8MMAwxDDIMMAwyDDMMNAw1DDYMNAw2DDcMOAw5DDoMOAw6DDsMPAw9DD4MPAw+DD8MQAxBDEIMQAxCDEMMRAxFDEYMRAxGDEcMSAxJDEoMSAxKDEsMTAxNDE4MTAxODE8MUAxRDFIMUAxSDFMMVAxVDFYMVAxWDFcMWAxZDFoMWAxaDFsMXAxdDF4MXAxeDF8MYAxhDGIMYAxiDGMMZAxlDGYMZAxmDGcMaAxpDGoMaAxqDGsMbAxtDG4MbAxuDG8McAxxDHIMcAxyDHMMdAx1DHYMdAx2DHcMeAx5DHoMeAx6DHsMfAx9DH4MfAx+DH8MgAyBDIIMgAyCDIMMhAyFDIYMhAyGDIcMiAyJDIoMiAyKDIsMjAyNDI4MjAyODI8MkAyRDJIMkAySDJMMlAyVDJYMlAyWDJcMmAyZDJoMmAyaDJsMnAydDJ4MnAyeDJ8MoAyhDKIMoAyiDKMMpAylDKYMpAymDKcMqAypDKoMqAyqDKsMrAytDK4MrAyuDK8MsAyxDLIMsAyyDLMMtAy1DLYMtAy2DLcMuAy5DLoMuAy6DLsMvAy9DL4MvAy+DL8MwAzBDMIMwAzCDMMMxAzFDMYMxAzGDMcMyAzJDMoMyAzKDMsMzAzNDM4MzAzODM8M0AzRDNIM0AzSDNMM1AzVDNYM1AzWDNcM2AzZDNoM2AzaDNsM3AzdDN4M3AzeDN8M4AzhDOIM4AziDOMM5AzlDOYM5AzmDOcM6AzpDOoM6AzqDOsM7AztDO4M7AzuDO8M8AzxDPIM8AzyDPMM9Az1DPYM9Az2DPcM+Az5DPoM+Az6DPsM/Az9DP4M/Az+DP8MAA0BDQINAA0CDQMNBA0FDQYNBA0GDQcNCA0JDQoNCA0KDQsNDA0NDQ4NDA0ODQ8NEA0RDRINEA0SDRMNFA0VDRYNFA0WDRcNGA0ZDRoNGA0aDRsNHA0dDR4NHA0eDR8NIA0hDSINIA0iDSMNJA0lDSYNJA0mDScNKA0pDSoNKA0qDSsNLA0tDS4NLA0uDS8NMA0xDTINMA0yDTMNNA01DTYNNA02DTcNOA05DToNOA06DTsNPA09DT4NPA0+DT8NQA1BDUINQA1CDUMNRA1FDUYNRA1GDUcNSA1JDUoNSA1KDUsNTA1NDU4NTA1ODU8NUA1RDVINUA1SDVMNVA1VDVYNVA1WDVcNWA1ZDVoNWA1aDVsNXA1dDV4NXA1eDV8NYA1hDWINYA1iDWMNZA1lDWYNZA1mDWcNaA1pDWoNaA1qDWsNbA1tDW4NbA1uDW8NcA1xDXINcA1yDXMNdA11DXYNdA12DXcNeA15DXoNeA16DXsNfA19DX4NfA1+DX8NgA2BDYINgA2CDYMNhA2FDYYNhA2GDYcNiA2JDYoNiA2KDYsNjA2NDY4NjA2ODY8NkA2RDZINkA2SDZMNlA2VDZYNlA2WDZcNmA2ZDZoNmA2aDZsNnA2dDZ4NnA2eDZ8NoA2hDaINoA2iDaMNpA2lDaYNpA2mDacNqA2pDaoNqA2qDasNrA2tDa4NrA2uDa8NsA2xDbINsA2yDbMNtA21DbYNtA22DbcNuA25DboNuA26DbsNvA29Db4NvA2+Db8NwA3BDcINwA3CDcMNxA3FDcYNxA3GDccNyA3JDcoNyA3KDcsNzA3NDc4NzA3ODc8N0A3RDdIN0A3SDdMN1A3VDdYN1A3WDdcN2A3ZDdoN2A3aDdsN3A3dDd4N3A3eDd8N4A3hDeIN4A3iDeMN5A3lDeYN5A3mDecN6A3pDeoN6A3qDesN7A3tDe4N7A3uDe8N8A3xDfIN8A3yDfMN9A31DfYN9A32DfcN+A35DfoN+A36DfsN/A39Df4N/A3+Df8NAA4BDgIOAA4CDgMOBA4FDgYOBA4GDgcOCA4JDgoOCA4KDgsODA4NDg4ODA4ODg8O"},steel:{p:"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fAUOEKIEQQUOEGgE8gQOEFIEogQOEGgEaAQOEKIEUgQOEPIEaAQOEEEFogQOEHwF8gQOEJEFQQUOEHwFfAUOEEEFkQUOEPIESQVWD1sE8gRWD0QE8gRWD0QESQVWD1sEQQVQD2gE8gRQD1IE8gQIEEQESQUIEFsESQUIEFsE8gQIEEQE8gQOEFIEQQUOEGgEiAVWD5sESQVWD1sEiAVWD5sEfAVQD6IEQQVQD2gEiAUIEJsEiAUIEJsESQUIEFsEQQUOEGgEfAUOEKIEoAVWD/IEiAVWD5sEoAVWD/IEkQVQD/IEfAVQD6IEoAUIEPIEoAUIEPIEiAUIEJsEfAUOEKIEkQUOEPIEiAVWD0kFoAVWD/IEiAVWD0kFfAVQD0EFkQVQD/IEiAUIEEkFiAUIEEkFoAUIEPIEkQUOEPIEfAUOEEEFSQVWD4gFiAVWD0kFSQVWD4gFQQVQD3wFfAVQD0EFSQUIEIgFSQUIEIgFiAUIEEkFfAUOEEEFQQUOEHwF8gRWD6AFSQVWD4gF8gRWD6AF8gRQD5EFQQVQD3wF8gQIEKAF8gQIEKAFSQUIEIgFQQUOEHwF8gQOEJEFmwRWD4gF8gRWD6AFmwRWD4gFogRQD3wF8gRQD5EFmwQIEIgFmwQIEIgF8gQIEKAF8gQOEJEFogQOEHwFWwRWD0kFmwRWD4gFWwRWD0kFaARQD0EFogRQD3wFWwQIEEkFWwQIEEkFmwQIEIgFogQOEHwFaAQOEEEFRARWD/IEWwRWD0kFRARWD/IEUgRQD/IEaARQD0EFRAQIEPIERAQIEPIEWwQIEEkFaAQOEEEFUgQOEPIEWwRWD5sERARWD/IEWwRWD5sEaARQD6IEUgRQD/IEWwQIEJsEWwQIEJsERAQIEPIEUgQOEPIEaAQOEKIEmwRWD1sEWwRWD5sEmwRWD1sEogRQD2gEaARQD6IEmwQIEFsEmwQIEFsEWwQIEJsEaAQOEKIEogQOEGgEmwRWD1sE8gRWD0QE8gRQD1IEogRQD2gE8gQIEEQEmwQIEFsEogQOEGgE8gQOEFIEogRQD2gE8gRQD1IEQQVQD2gEfAVQD6IEkQVQD/IEfAVQD0EFQQVQD3wF8gRQD5EFogRQD3wFaARQD0EFUgRQD/IEaARQD6IE",n:"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",i:"AAABAAIAAAACAAMABAAFAAYABAAGAAcABwAGAAgABwAIAAkACQAIAAoACQAKAAsACwAKAAwACwAMAA0ADQAMAA4ADQAOAA8ADwAOABAADwAQABEAEQAQABIAEQASABMAEwASABQAEwAUABUAFQAUAAEAFQABAAAAFgAXAAUAFgAFAAQAGAAZABoAGgAbABwAHAAdAB4AHgAfACAAIAAhACIAIgAjABgAGAAaABwAHAAeACAAIAAiABgAHAAgABgAAwACABcAAwAXABYAAwAWACQAAwAkACUAJgAnACgAJgAoACkAFwACACoAFwAqACsALAAtAC4ALAAuAC8AFgAEADAAFgAwACQAMQAyADMAMQAzADQABQAXACsABQArADUANgA3ADgANgA4ADkABAAHADoABAA6ADAAOwA8AD0AOwA9AD4ABgAFADUABgA1AD8AQABBAEIAQABCAEMABwAJAEQABwBEADoARQBGAEcARQBHAEgACAAGAD8ACAA/AEkASgBLAEwASgBMAE0ACQALAE4ACQBOAEQATwBQAFEATwBRAFIACgAIAEkACgBJAFMAVABVAFYAVABWAFcACwANAFgACwBYAE4AWQBaAFsAWQBbAFwADAAKAFMADABTAF0AXgBfAGAAXgBgAGEADQAPAGIADQBiAFgAYwBkAGUAYwBlAGYADgAMAF0ADgBdAGcAaABpAGoAaABqAGsADwARAGwADwBsAGIAbQBuAG8AbQBvAHAAEAAOAGcAEABnAHEAcgBzAHQAcgB0AHUAEQATAHYAEQB2AGwAdwB4AHkAdwB5AHoAEgAQAHEAEgBxAHsAfAB9AH4AfAB+AH8AEwAVAIAAEwCAAHYAgQCCAIMAgQCDAIQAFAASAHsAFAB7AIUAhgCHAIgAhgCIAIkAFQAAAIoAFQCKAIAAiwCMAI0AiwCNAI4AAQAUAIUAAQCFAI8AkACRAJIAkACSAJMAAAADACUAAAAlAIoAlACVAJYAlACWAJcAAgABAI8AAgCPACoAmACZAJoAmACaAJsAnACdAJ4AngCfAKAAoAChAKIAogCjAKQApAClAKYApgCnAJwAnACeAKAAoACiAKQApACmAJwAoACkAJwAqACpAKoAqACqAKsArACtAK4ArACuAK8ArwCuALAArwCwALEAsQCwALIAsQCyALMAswCyALQAswC0ALUAtQC0ALYAtQC2ALcAtwC2ALgAtwC4ALkAuQC4ALoAuQC6ALsAuwC6ALwAuwC8AL0AvQC8AKkAvQCpAKgAvgC/AK0AvgCtAKwAwADBAMIAwgDDAMQAxADFAMYAxgDHAMgAyADJAMoAygDLAMAAwADCAMQAxADGAMgAyADKAMAAxADIAMAAqwCqAL8AqwC/AL4AqwC+AMwAqwDMAM0AzgDPANAAzgDQANEAvwCqANIAvwDSANMA1ADVANYA1ADWANcAvgCsANgAvgDYAMwA2QDaANsA2QDbANwArQC/ANMArQDTAN0A3gDfAOAA3gDgAOEArACvAOIArADiANgA4wDkAOUA4wDlAOYArgCtAN0ArgDdAOcA6ADpAOoA6ADqAOsArwCxAOwArwDsAOIA7QDuAO8A7QDvAPAAsACuAOcAsADnAPEA8gDzAPQA8gD0APUAsQCzAPYAsQD2AOwA9wD4APkA9wD5APoAsgCwAPEAsgDxAPsA/AD9AP4A/AD+AP8AswC1AAABswAAAfYAAQECAQMBAQEDAQQBtACyAPsAtAD7AAUBBgEHAQgBBgEIAQkBtQC3AAoBtQAKAQABCwEMAQ0BCwENAQ4BtgC0AAUBtgAFAQ8BEAERARIBEAESARMBtwC5ABQBtwAUAQoBFQEWARcBFQEXARgBuAC2AA8BuAAPARkBGgEbARwBGgEcAR0BuQC7AB4BuQAeARQBHwEgASEBHwEhASIBugC4ABkBugAZASMBJAElASYBJAEmAScBuwC9ACgBuwAoAR4BKQEqASsBKQErASwBvAC6ACMBvAAjAS0BLgEvATABLgEwATEBvQCoADIBvQAyASgBMwE0ATUBMwE1ATYBqQC8AC0BqQAtATcBOAE5AToBOAE6ATsBqACrAM0AqADNADIBPAE9AT4BPAE+AT8BqgCpADcBqgA3AdIAQAFBAUIBQAFCAUMBRAFFAUYBRgFHAUgBSAFJAUoBSgFLAUwBTAFNAU4BTgFPAUQBRAFGAUgBSAFKAUwBTAFOAUQBSAFMAUQBUAFRAVIBUAFSAVMBVAFVAVYBVAFWAVcBVwFWAVgBVwFYAVkBWQFYAVoBWQFaAVsBWwFaAVwBWwFcAV0BXQFcAV4BXQFeAV8BXwFeAWABXwFgAWEBYQFgAWIBYQFiAWMBYwFiAWQBYwFkAWUBZQFkAVEBZQFRAVABZgFnAVUBZgFVAVQBaAFpAWoBagFrAWwBbAFtAW4BbgFvAXABcAFxAXIBcgFzAWgBaAFqAWwBbAFuAXABcAFyAWgBbAFwAWgBUwFSAWcBUwFnAWYBUwFmAXQBUwF0AXUBdgF3AXgBdgF4AXkBZwFSAXoBZwF6AXsBfAF9AX4BfAF+AX8BZgFUAYABZgGAAXQBgQGCAYMBgQGDAYQBVQFnAXsBVQF7AYUBhgGHAYgBhgGIAYkBVAFXAYoBVAGKAYABiwGMAY0BiwGNAY4BVgFVAYUBVgGFAY8BkAGRAZIBkAGSAZMBVwFZAZQBVwGUAYoBlQGWAZcBlQGXAZgBWAFWAY8BWAGPAZkBmgGbAZwBmgGcAZ0BWQFbAZ4BWQGeAZQBnwGgAaEBnwGhAaIBWgFYAZkBWgGZAaMBpAGlAaYBpAGmAacBWwFdAagBWwGoAZ4BqQGqAasBqQGrAawBXAFaAaMBXAGjAa0BrgGvAbABrgGwAbEBXQFfAbIBXQGyAagBswG0AbUBswG1AbYBXgFcAa0BXgGtAbcBuAG5AboBuAG6AbsBXwFhAbwBXwG8AbIBvQG+Ab8BvQG/AcABYAFeAbcBYAG3AcEBwgHDAcQBwgHEAcUBYQFjAcYBYQHGAbwBxwHIAckBxwHJAcoBYgFgAcEBYgHBAcsBzAHNAc4BzAHOAc8BYwFlAdABYwHQAcYB0QHSAdMB0QHTAdQBZAFiAcsBZAHLAdUB1gHXAdgB1gHYAdkBZQFQAdoBZQHaAdAB2wHcAd0B2wHdAd4BUQFkAdUBUQHVAd8B4AHhAeIB4AHiAeMBUAFTAXUBUAF1AdoB5AHlAeYB5AHmAecBUgFRAd8BUgHfAXoB6AHpAeoB6AHqAesB7AHtAe4B7gHvAfAB8AHxAfIB8gHzAfQB9AH1AfYB9gH3AewB7AHuAfAB8AHyAfQB9AH2AewB8AH0AewB+AH5AfoB+AH6AfsB/AH9Af4B/AH+Af8B/wH+AQAC/wEAAgECAQIAAgICAQICAgMCAwICAgQCAwIEAgUCBQIEAgYCBQIGAgcCBwIGAggCBwIIAgkCCQIIAgoCCQIKAgsCCwIKAgwCCwIMAg0CDQIMAvkBDQL5AfgBDgIPAv0BDgL9AfwBEAIRAhICEgITAhQCFAIVAhYCFgIXAhgCGAIZAhoCGgIbAhACEAISAhQCFAIWAhgCGAIaAhACFAIYAhAC+wH6AQ8C+wEPAg4C+wEOAhwC+wEcAh0CHgIfAiACHgIgAiECDwL6ASICDwIiAiMCJAIlAiYCJAImAicCDgL8ASgCDgIoAhwCKQIqAisCKQIrAiwC/QEPAiMC/QEjAi0CLgIvAjACLgIwAjEC/AH/ATIC/AEyAigCMwI0AjUCMwI1AjYC/gH9AS0C/gEtAjcCOAI5AjoCOAI6AjsC/wEBAjwC/wE8AjICPQI+Aj8CPQI/AkACAAL+ATcCAAI3AkECQgJDAkQCQgJEAkUCAQIDAkYCAQJGAjwCRwJIAkkCRwJJAkoCAgIAAkECAgJBAksCTAJNAk4CTAJOAk8CAwIFAlACAwJQAkYCUQJSAlMCUQJTAlQCBAICAksCBAJLAlUCVgJXAlgCVgJYAlkCBQIHAloCBQJaAlACWwJcAl0CWwJdAl4CBgIEAlUCBgJVAl8CYAJhAmICYAJiAmMCBwIJAmQCBwJkAloCZQJmAmcCZQJnAmgCCAIGAl8CCAJfAmkCagJrAmwCagJsAm0CCQILAm4CCQJuAmQCbwJwAnECbwJxAnICCgIIAmkCCgJpAnMCdAJ1AnYCdAJ2AncCCwINAngCCwJ4Am4CeQJ6AnsCeQJ7AnwCDAIKAnMCDAJzAn0CfgJ/AoACfgKAAoECDQL4AYICDQKCAngCgwKEAoUCgwKFAoYC+QEMAn0C+QF9AocCiAKJAooCiAKKAosC+AH7AR0C+AEdAoICjAKNAo4CjAKOAo8C+gH5AYcC+gGHAiICkAKRApICkAKSApMClAKVApYClgKXApgCmAKZApoCmgKbApwCnAKdAp4CngKfApQClAKWApgCmAKaApwCnAKeApQCmAKcApQCoAKhAqICoAKiAqMCpAKlAqYCpAKmAqcCpwKmAqgCpwKoAqkCqQKoAqoCqQKqAqsCqwKqAqwCqwKsAq0CrQKsAq4CrQKuAq8CrwKuArACrwKwArECsQKwArICsQKyArMCswKyArQCswK0ArUCtQK0AqECtQKhAqACtgK3AqUCtgKlAqQCuAK5AroCugK7ArwCvAK9Ar4CvgK/AsACwALBAsICwgLDArgCuAK6ArwCvAK+AsACwALCArgCvALAArgCowKiArcCowK3ArYCowK2AsQCowLEAsUCxgLHAsgCxgLIAskCtwKiAsoCtwLKAssCzALNAs4CzALOAs8CtgKkAtACtgLQAsQC0QLSAtMC0QLTAtQCpQK3AssCpQLLAtUC1gLXAtgC1gLYAtkCpAKnAtoCpALaAtAC2wLcAt0C2wLdAt4CpgKlAtUCpgLVAt8C4ALhAuIC4ALiAuMCpwKpAuQCpwLkAtoC5QLmAucC5QLnAugCqAKmAt8CqALfAukC6gLrAuwC6gLsAu0CqQKrAu4CqQLuAuQC7wLwAvEC7wLxAvICqgKoAukCqgLpAvMC9AL1AvYC9AL2AvcCqwKtAvgCqwL4Au4C+QL6AvsC+QL7AvwCrAKqAvMCrALzAv0C/gL/AgAD/gIAAwEDrQKvAgIDrQICA/gCAwMEAwUDAwMFAwYDrgKsAv0CrgL9AgcDCAMJAwoDCAMKAwsDrwKxAgwDrwIMAwIDDQMOAw8DDQMPAxADsAKuAgcDsAIHAxEDEgMTAxQDEgMUAxUDsQKzAhYDsQIWAwwDFwMYAxkDFwMZAxoDsgKwAhEDsgIRAxsDHAMdAx4DHAMeAx8DswK1AiADswIgAxYDIQMiAyMDIQMjAyQDtAKyAhsDtAIbAyUDJgMnAygDJgMoAykDtQKgAioDtQIqAyADKwMsAy0DKwMtAy4DoQK0AiUDoQIlAy8DMAMxAzIDMAMyAzMDoAKjAsUCoALFAioDNAM1AzYDNAM2AzcDogKhAi8DogIvA8oCOAM5AzoDOAM6AzsDPAM9Az4DPgM/A0ADQANBA0IDQgNDA0QDRANFA0YDRgNHAzwDPAM+A0ADQANCA0QDRANGAzwDQANEAzwDSANJA0oDSANKA0sDTANNA04DTANOA08DTwNOA1ADTwNQA1EDUQNQA1IDUQNSA1MDUwNSA1QDUwNUA1UDVQNUA1YDVQNWA1cDVwNWA1gDVwNYA1kDWQNYA1oDWQNaA1sDWwNaA1wDWwNcA10DXQNcA0kDXQNJA0gDXgNfA00DXgNNA0wDYANhA2IDYgNjA2QDZANlA2YDZgNnA2gDaANpA2oDagNrA2ADYANiA2QDZANmA2gDaANqA2ADZANoA2ADSwNKA18DSwNfA14DSwNeA2wDSwNsA20DbgNvA3ADbgNwA3EDXwNKA3IDXwNyA3MDdAN1A3YDdAN2A3cDXgNMA3gDXgN4A2wDeQN6A3sDeQN7A3wDTQNfA3MDTQNzA30DfgN/A4ADfgOAA4EDTANPA4IDTAOCA3gDgwOEA4UDgwOFA4YDTgNNA30DTgN9A4cDiAOJA4oDiAOKA4sDTwNRA4wDTwOMA4IDjQOOA48DjQOPA5ADUANOA4cDUAOHA5EDkgOTA5QDkgOUA5UDUQNTA5YDUQOWA4wDlwOYA5kDlwOZA5oDUgNQA5EDUgORA5sDnAOdA54DnAOeA58DUwNVA6ADUwOgA5YDoQOiA6MDoQOjA6QDVANSA5sDVAObA6UDpgOnA6gDpgOoA6kDVQNXA6oDVQOqA6ADqwOsA60DqwOtA64DVgNUA6UDVgOlA68DsAOxA7IDsAOyA7MDVwNZA7QDVwO0A6oDtQO2A7cDtQO3A7gDWANWA68DWAOvA7kDugO7A7wDugO8A70DWQNbA74DWQO+A7QDvwPAA8EDvwPBA8IDWgNYA7kDWgO5A8MDxAPFA8YDxAPGA8cDWwNdA8gDWwPIA74DyQPKA8sDyQPLA8wDXANaA8MDXAPDA80DzgPPA9ADzgPQA9EDXQNIA9IDXQPSA8gD0wPUA9UD0wPVA9YDSQNcA80DSQPNA9cD2APZA9oD2APaA9sDSANLA20DSANtA9ID3APdA94D3APeA98DSgNJA9cDSgPXA3ID4APhA+ID4APiA+MD5APlA+YD5gPnA+gD6APpA+oD6gPrA+wD7APtA+4D7gPvA+QD5APmA+gD6APqA+wD7APuA+QD6APsA+QD8APxA/ID8APyA/MD9AP1A/YD9AP2A/cD9wP2A/gD9wP4A/kD+QP4A/oD+QP6A/sD+wP6A/wD+wP8A/0D/QP8A/4D/QP+A/8D/wP+AwAE/wMABAEEAQQABAIEAQQCBAMEAwQCBAQEAwQEBAUEBQQEBPEDBQTxA/ADBgQHBPUDBgT1A/QDCAQJBAoECgQLBAwEDAQNBA4EDgQPBBAEEAQRBBIEEgQTBAgECAQKBAwEDAQOBBAEEAQSBAgEDAQQBAgE8wPyAwcE8wMHBAYE8wMGBBQE8wMUBBUEFgQXBBgEFgQYBBkEBwTyAxoEBwQaBBsEHAQdBB4EHAQeBB8EBgT0AyAEBgQgBBQEIQQiBCMEIQQjBCQE9QMHBBsE9QMbBCUEJgQnBCgEJgQoBCkE9AP3AyoE9AMqBCAEKwQsBC0EKwQtBC4E9gP1AyUE9gMlBC8EMAQxBDIEMAQyBDME9wP5AzQE9wM0BCoENQQ2BDcENQQ3BDgE+AP2Ay8E+AMvBDkEOgQ7BDwEOgQ8BD0E+QP7Az4E+QM+BDQEPwRABEEEPwRBBEIE+gP4AzkE+gM5BEMERARFBEYERARGBEcE+wP9A0gE+wNIBD4ESQRKBEsESQRLBEwE/AP6A0ME/ANDBE0ETgRPBFAETgRQBFEE/QP/A1IE/QNSBEgEUwRUBFUEUwRVBFYE/gP8A00E/gNNBFcEWARZBFoEWARaBFsE/wMBBFwE/wNcBFIEXQReBF8EXQRfBGAEAAT+A1cEAARXBGEEYgRjBGQEYgRkBGUEAQQDBGYEAQRmBFwEZwRoBGkEZwRpBGoEAgQABGEEAgRhBGsEbARtBG4EbARuBG8EAwQFBHAEAwRwBGYEcQRyBHMEcQRzBHQEBAQCBGsEBARrBHUEdgR3BHgEdgR4BHkEBQTwA3oEBQR6BHAEewR8BH0EewR9BH4E8QMEBHUE8QN1BH8EgASBBIIEgASCBIME8APzAxUE8AMVBHoEhASFBIYEhASGBIcE8gPxA38E8gN/BBoEiASJBIoEiASKBIsEjASNBI4EjgSPBJAEkASRBJIEkgSTBJQElASVBJYElgSXBIwEjASOBJAEkASSBJQElASWBIwEkASUBIwEmASZBJoEmASaBJsEnASdBJ4EnASeBJ8EnwSeBKAEnwSgBKEEoQSgBKIEoQSiBKMEowSiBKQEowSkBKUEpQSkBKYEpQSmBKcEpwSmBKgEpwSoBKkEqQSoBKoEqQSqBKsEqwSqBKwEqwSsBK0ErQSsBJkErQSZBJgErgSvBJ0ErgSdBJwEsASxBLIEsgSzBLQEtAS1BLYEtgS3BLgEuAS5BLoEugS7BLAEsASyBLQEtAS2BLgEuAS6BLAEtAS4BLAEmwSaBK8EmwSvBK4EmwSuBLwEmwS8BL0EvgS/BMAEvgTABMEErwSaBMIErwTCBMMExATFBMYExATGBMcErgScBMgErgTIBLwEyQTKBMsEyQTLBMwEnQSvBMMEnQTDBM0EzgTPBNAEzgTQBNEEnASfBNIEnATSBMgE0wTUBNUE0wTVBNYEngSdBM0EngTNBNcE2ATZBNoE2ATaBNsEnwShBNwEnwTcBNIE3QTeBN8E3QTfBOAEoASeBNcEoATXBOEE4gTjBOQE4gTkBOUEoQSjBOYEoQTmBNwE5wToBOkE5wTpBOoEogSgBOEEogThBOsE7ATtBO4E7ATuBO8EowSlBPAEowTwBOYE8QTyBPME8QTzBPQEpASiBOsEpATrBPUE9gT3BPgE9gT4BPkEpQSnBPoEpQT6BPAE+wT8BP0E+wT9BP4EpgSkBPUEpgT1BP8EAAUBBQIFAAUCBQMFpwSpBAQFpwQEBfoEBQUGBQcFBQUHBQgFqASmBP8EqAT/BAkFCgULBQwFCgUMBQ0FqQSrBA4FqQQOBQQFDwUQBREFDwURBRIFqgSoBAkFqgQJBRMFFAUVBRYFFAUWBRcFqwStBBgFqwQYBQ4FGQUaBRsFGQUbBRwFrASqBBMFrAQTBR0FHgUfBSAFHgUgBSEFrQSYBCIFrQQiBRgFIwUkBSUFIwUlBSYFmQSsBB0FmQQdBScFKAUpBSoFKAUqBSsFmASbBL0EmAS9BCIFLAUtBS4FLAUuBS8FmgSZBCcFmgQnBcIEMAUxBTIFMAUyBTMFNAU1BTYFNgU3BTgFOAU5BToFOgU7BTwFPAU9BT4FPgU/BTQFNAU2BTgFOAU6BTwFPAU+BTQFOAU8BTQF"},rim:{p:"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",n:"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",i:"AAABAAIAAAACAAMABAAFAAYABAAGAAcABwAGAAgABwAIAAkACQAIAAoACQAKAAsACwAKAAwACwAMAA0ADQAMAA4ADQAOAA8ADwAOABAADwAQABEAEQAQABIAEQASABMAEwASABQAEwAUABUAFQAUABYAFQAWABcAFwAWABgAFwAYABkAGQAYABoAGQAaABsAGwAaABwAGwAcAB0AHQAcAB4AHQAeAB8AHwAeACAAHwAgACEAIQAgACIAIQAiACMAIwAiACQAIwAkACUAJQAkACYAJQAmACcAJwAmACgAJwAoACkAKQAoACoAKQAqACsAKwAqACwAKwAsAC0ALQAsAAEALQABAAAALgAvAAUALgAFAAQAMAAxADIAMgAzADQANAA1ADYANgA3ADgAOAA5ADoAOgA7ADwAPAA9AD4APgA/AEAAQABBAEIAQgBDAEQARABFAEYARgBHADAAMAAyADQANAA2ADgAOAA6ADwAPAA+AEAAQABCAEQARABGADAAMAA0ADgAOAA8AEAAQABEADAAOABAADAAAwACAC8AAwAvAC4AAwAuAEgAAwBIAEkASgBLAEwASgBMAE0ALwACAE4ALwBOAE8AUABRAFIAUABSAFMALgAEAFQALgBUAEgAVQBWAFcAVQBXAFgABQAvAE8ABQBPAFkAWgBbAFwAWgBcAF0ABAAHAF4ABABeAFQAXwBgAGEAXwBhAGIABgAFAFkABgBZAGMAZABlAGYAZABmAGcABwAJAGgABwBoAF4AaQBqAGsAaQBrAGwACAAGAGMACABjAG0AbgBvAHAAbgBwAHEACQALAHIACQByAGgAcwB0AHUAcwB1AHYACgAIAG0ACgBtAHcAeAB5AHoAeAB6AHsACwANAHwACwB8AHIAfQB+AH8AfQB/AIAADAAKAHcADAB3AIEAggCDAIQAggCEAIUADQAPAIYADQCGAHwAhwCIAIkAhwCJAIoADgAMAIEADgCBAIsAjACNAI4AjACOAI8ADwARAJAADwCQAIYAkQCSAJMAkQCTAJQAEAAOAIsAEACLAJUAlgCXAJgAlgCYAJkAEQATAJoAEQCaAJAAmwCcAJ0AmwCdAJ4AEgAQAJUAEgCVAJ8AoAChAKIAoACiAKMAEwAVAKQAEwCkAJoApQCmAKcApQCnAKgAFAASAJ8AFACfAKkAqgCrAKwAqgCsAK0AFQAXAK4AFQCuAKQArwCwALEArwCxALIAFgAUAKkAFgCpALMAtAC1ALYAtAC2ALcAFwAZALgAFwC4AK4AuQC6ALsAuQC7ALwAGAAWALMAGACzAL0AvgC/AMAAvgDAAMEAGQAbAMIAGQDCALgAwwDEAMUAwwDFAMYAGgAYAL0AGgC9AMcAyADJAMoAyADKAMsAGwAdAMwAGwDMAMIAzQDOAM8AzQDPANAAHAAaAMcAHADHANEA0gDTANQA0gDUANUAHQAfANYAHQDWAMwA1wDYANkA1wDZANoAHgAcANEAHgDRANsA3ADdAN4A3ADeAN8AHwAhAOAAHwDgANYA4QDiAOMA4QDjAOQAIAAeANsAIADbAOUA5gDnAOgA5gDoAOkAIQAjAOoAIQDqAOAA6wDsAO0A6wDtAO4AIgAgAOUAIgDlAO8A8ADxAPIA8ADyAPMAIwAlAPQAIwD0AOoA9QD2APcA9QD3APgAJAAiAO8AJADvAPkA+gD7APwA+gD8AP0AJQAnAP4AJQD+APQA/wAAAQEB/wABAQIBJgAkAPkAJgD5AAMBBAEFAQYBBAEGAQcBJwApAAgBJwAIAf4ACQEKAQsBCQELAQwBKAAmAAMBKAADAQ0BDgEPARABDgEQAREBKQArABIBKQASAQgBEwEUARUBEwEVARYBKgAoAA0BKgANARcBGAEZARoBGAEaARsBKwAtABwBKwAcARIBHQEeAR8BHQEfASABLAAqABcBLAAXASEBIgEjASQBIgEkASUBLQAAACYBLQAmARwBJwEoASkBJwEpASoBAQAsACEBAQAhASsBLAEtAS4BLAEuAS8BAAADAEkAAABJACYBMAExATIBMAEyATMBAgABACsBAgArAU4ANAE1ATYBNAE2ATcBOAE5AToBOgE7ATwBPAE9AT4BPgE/AUABQAFBAUIBQgFDAUQBRAFFAUYBRgFHAUgBSAFJAUoBSgFLAUwBTAFNAU4BTgFPATgBOAE6ATwBPAE+AUABQAFCAUQBRAFGAUgBSAFKAUwBTAFOATgBOAE8AUABQAFEAUgBSAFMATgBQAFIATgB"}};var Xm=new L(0,1,0),qa=new L,ja=new L,ks=new Xe,YA=new qt,Cl=new L,$a=new L,Tl=new L;function Il(i,t){let e=Uint8Array.from(atob(i),n=>n.charCodeAt(0));return t?new Int16Array(e.buffer):new Uint16Array(e.buffer)}var Km=Object.fromEntries(Object.entries(QA).map(([i,t])=>[i,{p:Il(t.p,!0),n:Il(t.n,!0),i:Il(t.i,!1)}])),Fl=new Map;function zA(i,t=0){let e=i+"|"+t;if(!Fl.has(e)){let n=i==="box"?new pn(1,1,1):i==="ring"?new Ui(1,.08,8,t):new vs(1,1,1,t,1,!1);if(n.index){let s=n.toNonIndexed();n.dispose(),n=s}Fl.set(e,n)}return Fl.get(e)}function Pl(i,t,e,n,s,r){YA.compose(t,e,n);let a=i.attributes.position,o=i.attributes.normal;for(let l=0;l<a.count;l++)qa.fromBufferAttribute(a,l).applyMatrix4(YA),ja.fromBufferAttribute(o,l).divide(n).applyQuaternion(e).normalize(),s.push(qa.x,qa.y,qa.z),r.push(ja.x,ja.y,ja.z)}function WA(i,t,e,n,s){let r=t[0]-i[0],a=t[1]-i[1],o=t[2]-i[2],l=e[0]-i[0],c=e[1]-i[1],h=e[2]-i[2],f=a*h-o*c,A=o*l-r*h,u=r*c-a*l,m=Math.hypot(f,A,u);if(!(m<1e-9||!Number.isFinite(m))){n.push(...i,...t,...e);for(let w=0;w<3;w++)s.push(f/m,A/m,u/m)}}function VA(i,t,e){if(i.length<3)return;if(i.length<=4){for(let o=1;o<i.length-1;o++)WA(i[0],i[o],i[o+1],t,e);return}let n=new L(...i[0]),s=new L(...i[1]).sub(n).normalize(),r=null;for(let o=2;o<i.length;o++){let l=new L(...i[o]).sub(n),c=new L().crossVectors(s,l);if(c.lengthSq()>1e-10){r=c.normalize().cross(s);break}}if(!r)return;let a=i.map(o=>{let l=new L(...o).sub(n);return new Nt(l.dot(s),l.dot(r))});for(let[o,l,c]of Es.triangulateShape(a,[]))WA(i[o],i[l],i[c],t,e)}var Zm=new Set(["#226568","#2e7272","#317776","#28696b","#319c91","#4e7283","#bd5b58","#d4a654","#46879a","#52848b","#597d8d","#7898a6"]),Jm=new Set(["#9bb0ad","#354f60","#c4d2d1","#a5babb","#a1afb2","#91a9a2","#a4b7af","#b9c6bb","#93a49e","#b2c2b6","#b8d2c8","#d4d7c5","#b5c6b5"]),kA=new Set(["#135d73","#2296ae","#5eead4","#327f8a"]),XA=new Set(["#969f9c","#9ba09a","#b2b3a9","#58696b","#495a5b","#c2c3af","#777d72","#8d8372","#726959","#81725f","#695d4f","#4c514d","#746f5e","#acb0a2","#837968","#7a7360","#837862","#aebcbf","#819aa3","#d8d8c7","#8e9ea2","#c2bdac"]),Ai=128,Xs=new Uint8Array(Ai*Ai*4),Rl=517;function KA(){return Rl=Math.imul(1664525,Rl)+1013904223>>>0,Rl/4294967296}var qm=Array.from({length:64},KA);function jm(i,t){let e=i/16,n=t/16,s=Math.floor(e),r=Math.floor(n),a=e-s,o=n-r,l=A=>A*A*(3-2*A),c=l(a),h=l(o),f=(A,u)=>qm[u%8*8+A%8];return(f(s,r)*(1-c)+f(s+1,r)*c)*(1-h)+(f(s,r+1)*(1-c)+f(s+1,r+1)*c)*h}for(let i=0;i<Ai;i++)for(let t=0;t<Ai;t++){let e=Math.round(236+(KA()-.5)*17+(jm(t,i)-.5)*15),n=(i*Ai+t)*4;Xs[n]=Xs[n+1]=Xs[n+2]=e,Xs[n+3]=255}var Xn=new ni(Xs,Ai,Ai,Ge);Xn.colorSpace=_e;Xn.wrapS=Xn.wrapT=Ci;Xn.magFilter=ge;Xn.minFilter=gn;Xn.generateMipmaps=!0;Xn.needsUpdate=!0;function $m(i,t,e){let n=[];for(let s=0;s<t.length;s+=3){let r=t[s],a=t[s+1],o=t[s+2],l=Math.abs(e[s]),c=Math.abs(e[s+1]),h=Math.abs(e[s+2]);c>=l&&c>=h?n.push(r*1.7,o*1.7):l>=h?n.push(o*1.7,a*1.7):n.push(r*1.7,a*1.7)}i.setAttribute("uv",new oe(n,2))}function tg(i,t,e,n,s){let r=n.length;VA(i,n,s);for(let a=r;a<n.length;a+=3){let o=t==="x"?0:n[a]-e[0],l=t==="x"?n[a+1]-e[0]:0,c=n[a+2]-e[1],h=Math.hypot(o,l,c)||1,f=o*s[a]+l*s[a+1]+c*s[a+2]<0?-1:1;s[a]=f*o/h,s[a+1]=f*l/h,s[a+2]=f*c/h}}function eg(i){let t=i.toLowerCase(),e=t.match(/^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)(?:\s*,\s*([\d.]+))?\s*\)$/);return{color:e?new Ft().setRGB(+e[1]/255,+e[2]/255,+e[3]/255,_e):new Ft(t),opacity:e&&e[4]!==void 0?Number(e[4]):1}}function ng(i,t){let{color:e,opacity:n}=eg(i),s=i.toLowerCase();if(t)return new Li({color:e,opacity:n,transparent:n<1,depthWrite:!1,toneMapped:!1});let r=kA.has(s)||n<1,a=Zm.has(s),o=Jm.has(s);return["#226568","#2e7272","#317776","#28696b"].includes(s)&&e.set("#185b62").lerp(e,.25),s==="#5eead4"&&e.set("#42aeb8"),s==="#58696b"&&e.set("#3b4a4d"),new On({color:e,roughness:r?.24:a?.36:o?.3:.88,map:XA.has(s)?Xn:null,metalness:r?.08:a?.3:o?.63:.015,envMapIntensity:r?.83:a?.72:o?.95:.34,side:Ke,transparent:n<1,opacity:n,depthWrite:n>=1,polygonOffset:!1})}function ig(i,t,e,n={}){let s;try{s=new Xa({antialias:!0,alpha:!0,preserveDrawingBuffer:!!n.export,powerPreference:"high-performance"})}catch(a){return console.warn("Station WebGL unavailable, using classic renderer.",a.message),t.dataset.renderEngine="classic",new i(t,e)}class r extends i{constructor(){super(t,e),Object.assign(this.presets.well,{target:[-8.65,-3,0],height:13.4,width:13.8}),Object.assign(this.presets.outlet,{target:[7.7,1.8,3.1],height:12.2}),this.renderer=s,this.outputCanvas=s.domElement,this.outputCanvas.className="station-webgl-surface",this.outputCanvas.setAttribute("aria-hidden","true"),this.outputCanvas.style.pointerEvents="none",n.export||t.before(this.outputCanvas),t.dataset.renderEngine="webgl",s.setClearColor(0,0),s.outputColorSpace=_e,s.toneMapping=Fs,s.toneMappingExposure=.89,s.shadowMap.enabled=!0,s.shadowMap.type=ri,s.shadowMap.autoUpdate=!1,this.scene=new ei,this.camera=new Yn(-20,20,10,-10,.1,160),this.batches=new Map,this.pending=new Map,this.camera.up.set(0,1,0);let o=new Bs(14938879,8087632,.87),l=new Oi(16773077,2.25);l.position.set(-15,32,27),l.target.position.set(0,-1,0),l.castShadow=!0,Object.assign(l.shadow.camera,{left:-26,right:26,top:19,bottom:-19,near:1,far:100}),l.shadow.camera.updateProjectionMatrix(),l.shadow.mapSize.set(2048,2048),l.shadow.normalBias=.026,l.shadow.bias=-12e-5,l.shadow.radius=2;let c=new Oi(11786239,.66);c.position.set(16,10,-18);let h=new Is(12771056,.15);this.scene.add(o,l,l.target,c,h),this.sun=l;let f=new Ja,A=new ki(s);this.environmentTarget=A.fromScene(f,.12),this.scene.environment=this.environmentTarget.texture,this.scene.environmentIntensity=.65,A.dispose(),f.dispose(),this.renderGeometry={face:(u,m)=>this.add(m,"face",u,(w,p)=>VA(u,w,p)),radialFace:(u,m,w,p)=>this.add(m,"radialFace",[u,w,p],(d,x)=>tg(u,w,p,d,x)),box:(u,m,w,p,d,x,B)=>{p<=0||d<=0||x<=0||this.add(B,"box",[u,m,w,p,d,x],(M,E)=>Pl(zA("box"),$a.set(u,m,w),ks.identity(),Cl.set(p,d,x),M,E))},cyl:(u,m,w,p,d,x,B=16)=>this.addCylinder([u,m,w],[u,m+d,w],p,x,B),pipe:(u,m,w,p=8)=>{for(let d=1;d<u.length;d++)this.addCylinder(u[d-1],u[d],m,w,p)},ring:(u,m,w,p,d,x,B=24)=>this.addRing(u,m,w,p,d,x,B),line:(u,m,w=1)=>this.add(m,"line",u,p=>{for(let d=1;d<u.length;d++)p.push(...u[d-1],...u[d])}),flowing:(u,m)=>this.flows.push({p:u,c:m}),shadow:()=>{},glow:(u,m,w,p,d,x=.45)=>this.glows.push({p:[u,m,w],r:p,c:d,a:x}),label:(u,m,w,p,d)=>this.captions.push({p:[u,m,w],str:p,key:d}),pumpMotor:(u,m,w,p,d)=>this.addMotor(u,m,w,p,d)},this.contextLost=!1,this.outputCanvas.addEventListener("webglcontextlost",u=>{u.preventDefault(),this.contextLost=!0,this.fallback(),this.invalidate()}),this.outputCanvas.addEventListener("webglcontextrestored",()=>{this.contextLost=!1,this.outputCanvas.hidden=!1,t.dataset.renderEngine="webgl",s.shadowMap.needsUpdate=!0,this.invalidate()})}fallback(){this.outputCanvas.hidden=!0,this.canvas.dataset.renderEngine="classic"}add(o,l,c,h){let f=(l==="line"?"line:":"mesh:")+o,A=this.pending.get(f);A||(A={color:o,line:l==="line",items:[]},this.pending.set(f,A)),A.items.push({signature:l+JSON.stringify(c),build:h})}addCylinder(o,l,c,h,f){!(c>0)||o.every((A,u)=>Math.abs(A-l[u])<5e-5)||(f=Math.max(16,Math.min(48,Math.round(f*2))),this.add(h,"cyl",[o,l,c,f],(A,u)=>{Tl.set(l[0]-o[0],l[1]-o[1],l[2]-o[2]);let m=Tl.length();ks.setFromUnitVectors(Xm,Tl.multiplyScalar(1/m)),$a.set((o[0]+l[0])/2,(o[1]+l[1])/2,(o[2]+l[2])/2),Pl(zA("cylinder",f),$a,ks,Cl.set(c,m,c),A,u)}))}addRing(o,l,c,h,f,A,u){h<=0||f<=0||(u=Math.max(24,Math.min(80,Math.round(u*2))),this.add(A,"ring",[o,l,c,h,f,u],(m,w)=>{let p=new Ui(h,f,8,u),d=p.toNonIndexed();p.dispose(),ks.setFromAxisAngle(new L(1,0,0),Math.PI/2),Pl(d,$a.set(o,l,c),ks,Cl.set(1,1,1),m,w),d.dispose()}))}addMotor(o,l,c,h,f){for(let[A,u]of Object.entries(Km)){let m=A==="body"?h:A==="steel"?f:"#354f60";this.add(m,"motor",[o,l,c,A],(w,p)=>{for(let d of u.i){let x=d*3;w.push(o+u.p[x]/1e4,l+u.p[x+1]/1e4,c+u.p[x+2]/1e4),p.push(u.n[x]/32767,u.n[x+1]/32767,u.n[x+2]/32767)}})}}syncBatches(){let o=!1;for(let[l,c]of this.pending){let h=c.items.map(d=>d.signature).join("|"),f=this.batches.get(l);if(f?.signature===h)continue;let A=[],u=[];for(let d of c.items)d.build(A,u);if(!A.length){f&&(this.scene.remove(f.object),f.object.geometry.dispose(),f.object.material.dispose(),this.batches.delete(l));continue}let m=new Pe;if(m.setAttribute("position",new oe(A,3)),c.line||(m.setAttribute("normal",new oe(u,3)),XA.has(c.color.toLowerCase())&&$m(m,A,u)),m.computeBoundingSphere(),f){f.object.geometry.dispose(),f.object.geometry=m,f.signature=h,f.object.castShadow&&(o=!0);continue}let w=ng(c.color,c.line),p=c.line?new ms(m,w):new ce(m,w);p.castShadow=!c.line&&!w.transparent&&!kA.has(c.color.toLowerCase()),p.receiveShadow=!c.line,p.castShadow&&(o=!0),this.scene.add(p),this.batches.set(l,{object:p,signature:h})}for(let[l,c]of this.batches)this.pending.has(l)||(this.scene.remove(c.object),c.object.geometry.dispose(),c.object.material.dispose(),c.object.castShadow&&(o=!0),this.batches.delete(l));o&&(this.renderer.shadowMap.needsUpdate=!0)}overlay(o){this.ctx.clearRect(0,0,this.w,this.h);for(let{p:h,c:f}of this.flows){let A=0,u=[];for(let d=1;d<h.length;d++){let x=h[d-1],B=h[d],M=Math.hypot(B[0]-x[0],B[1]-x[1],B[2]-x[2]);M<.001||(u.push({a:x,b:B,start:A,l:M}),A+=M)}if(!A)continue;let m=A/Math.max(1,Math.round(A/1.5)),w=o.simSeconds*.075%m,p=0;for(let d=w;d<A;d+=m){for(;p<u.length-1&&d>u[p].start+u[p].l;)p++;let{a:x,b:B,start:M,l:E}=u[p],_=(d-M)/E,[b,D]=this.project(x.map((T,R)=>T+(B[R]-T)*_)),S=Math.max(1.35,Math.min(3.6,this.scale*.053));this.dot(b,D,S,f,.75)}}for(let{p:h,r:f,c:A,a:u}of this.glows){let[m,w]=this.project(h);this.dot(m,w,Math.max(1.4,Math.min(7,this.scale*f*.1)),A,u)}let c=o.levels&&o.section&&o.view==="overview"&&this.w<540;c&&this.captions.push({p:[-9,o.wellLevel,.4],str:"\u0627\u0644\u0645\u064A\u0627\u0647 "+o.wellLevel.toFixed(2)+" \u0645",key:{datum:!0,color:"#38bdf8",side:"right"}}),this.captions.length&&this.drawLabels(),c?this.captions.pop():o.levels&&o.section&&["overview","well","inlet"].includes(o.view)&&this.drawWellLevelRuler(o)}dot(o,l,c,h,f){let A=this.ctx;o<-20||o>this.w+20||l<-20||l>this.h+20||(A.save(),A.shadowColor=h,A.shadowBlur=c*3,A.globalAlpha=f,A.fillStyle=h,A.beginPath(),A.arc(o,l,c,0,Math.PI*2),A.fill(),A.shadowBlur=0,A.fillStyle="#ffffff",A.globalAlpha=.82,A.beginPath(),A.arc(o,l,c*.38,0,Math.PI*2),A.fill(),A.restore())}draw(o){if(this.lastState=o,this.contextLost||this.failed){super.draw(o);return}if(this.updateFlight(performance.now()),!!this.setupCamera())try{let{w:l,h:c,scale:h,target:f,eye:A}=this,u=Math.min(2,Math.max(1,this.canvas.width/l));this.renderSize!==`${l}:${c}:${u}`&&(this.renderer.setPixelRatio(u),this.renderer.setSize(l,c,!1),this.renderSize=`${l}:${c}:${u}`),this.camera.left=-l/2/h,this.camera.right=l/2/h,this.camera.top=c/2/h,this.camera.bottom=-c/2/h,this.camera.position.set(f[0]+A[0]*70,f[1]+A[1]*70,f[2]+A[2]*70),this.camera.lookAt(...f),this.camera.updateProjectionMatrix(),(this.renderedState!==o||this.renderedCompact!==l<540)&&(this.pending.clear(),this.flows=[],this.glows=[],this.captions=[],this.drawScene(this.renderGeometry,o),this.syncBatches(),this.renderedState=o,this.renderedCompact=l<540),this.renderer.render(this.scene,this.camera),this.overlay(o),this.flight&&this.invalidate()}catch(l){console.warn("Station WebGL rendering failed; using classic renderer.",l),this.failed=!0,this.fallback(),super.draw(o)}}destroy(){super.destroy();for(let{object:o}of this.batches.values())o.geometry.dispose(),o.material.dispose();this.batches.clear(),this.environmentTarget.dispose(),this.sun.shadow.dispose(),this.renderer.dispose(),this.outputCanvas.remove()}}try{return new r}catch(a){return s.dispose(),s.domElement.remove(),t.dataset.renderEngine="classic",console.warn("Station 3D initialization failed",a),new i(t,e)}}window.createStationWebGLViewport=ig;})();
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
