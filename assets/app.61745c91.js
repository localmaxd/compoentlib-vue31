var um=Object.defineProperty,dm=Object.defineProperties;var fm=Object.getOwnPropertyDescriptors;var Nl=Object.getOwnPropertySymbols;var pm=Object.prototype.hasOwnProperty,hm=Object.prototype.propertyIsEnumerable;var Wl=(n,e,t)=>e in n?um(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Mt=(n,e)=>{for(var t in e||(e={}))pm.call(e,t)&&Wl(n,t,e[t]);if(Nl)for(var t of Nl(e))hm.call(e,t)&&Wl(n,t,e[t]);return n},Zn=(n,e)=>dm(n,fm(e));const Gl={};function Lc(n,e){const t=Object.create(null),i=n.split(",");for(let r=0;r<i.length;r++)t[i[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}const mm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Am=Lc(mm);function Vf(n){return!!n||n===""}function en(n){if(We(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=st(i)?bm(i):en(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(st(n))return n;if(xt(n))return n}}const xm=/;(?![^(]*\))/g,Sm=/:(.+)/;function bm(n){const e={};return n.split(xm).forEach(t=>{if(t){const i=t.split(Sm);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function mn(n){let e="";if(st(n))e=n;else if(We(n))for(let t=0;t<n.length;t++){const i=mn(n[t]);i&&(e+=i+" ")}else if(xt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Yt=n=>st(n)?n:n==null?"":We(n)||xt(n)&&(n.toString===zf||!Ue(n.toString))?JSON.stringify(n,wf,2):String(n),wf=(n,e)=>e&&e.__v_isRef?wf(n,e.value):Or(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r])=>(t[`${i} =>`]=r,t),{})}:Nf(e)?{[`Set(${e.size})`]:[...e.values()]}:xt(e)&&!We(e)&&!Df(e)?String(e):e,it={},kr=[],kn=()=>{},gm=()=>!1,ym=/^on[^a-z]/,Gs=n=>ym.test(n),Uc=n=>n.startsWith("onUpdate:"),Tt=Object.assign,Zc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},jm=Object.prototype.hasOwnProperty,Be=(n,e)=>jm.call(n,e),We=Array.isArray,Or=n=>Za(n)==="[object Map]",Nf=n=>Za(n)==="[object Set]",Ue=n=>typeof n=="function",st=n=>typeof n=="string",Ec=n=>typeof n=="symbol",xt=n=>n!==null&&typeof n=="object",Wf=n=>xt(n)&&Ue(n.then)&&Ue(n.catch),zf=Object.prototype.toString,Za=n=>zf.call(n),vm=n=>Za(n).slice(8,-1),Df=n=>Za(n)==="[object Object]",Jc=n=>st(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,hs=Lc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ea=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Mm=/-(\w)/g,Dn=Ea(n=>n.replace(Mm,(e,t)=>t?t.toUpperCase():"")),km=/\B([A-Z])/g,er=Ea(n=>n.replace(km,"-$1").toLowerCase()),Ja=Ea(n=>n.charAt(0).toUpperCase()+n.slice(1)),po=Ea(n=>n?`on${Ja(n)}`:""),vs=(n,e)=>!Object.is(n,e),ho=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},ka=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},Lf=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let zl;const Om=()=>zl||(zl=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let fn;class Pm{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&fn&&(this.parent=fn,this.index=(fn.scopes||(fn.scopes=[])).push(this)-1)}run(e){if(this.active)try{return fn=this,e()}finally{fn=this.parent}}on(){fn=this}off(){fn=this.parent}stop(e){if(this.active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function Rm(n,e=fn){e&&e.active&&e.effects.push(n)}function Im(){return fn}function Tm(n){fn&&fn.cleanups.push(n)}const qc=n=>{const e=new Set(n);return e.w=0,e.n=0,e},Uf=n=>(n.w&yi)>0,Zf=n=>(n.n&yi)>0,Hm=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=yi},Gm=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const r=e[i];Uf(r)&&!Zf(r)?r.delete(n):e[t++]=r,r.w&=~yi,r.n&=~yi}e.length=t}},cc=new WeakMap;let ls=0,yi=1;const lc=30;let Vn;const Ji=Symbol(""),uc=Symbol("");class Fc{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Rm(this,i)}run(){if(!this.active)return this.fn();let e=Vn,t=Si;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Vn,Vn=this,Si=!0,yi=1<<++ls,ls<=lc?Hm(this):Dl(this),this.fn()}finally{ls<=lc&&Gm(this),yi=1<<--ls,Vn=this.parent,Si=t,this.parent=void 0}}stop(){this.active&&(Dl(this),this.onStop&&this.onStop(),this.active=!1)}}function Dl(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let Si=!0;const Ef=[];function Er(){Ef.push(Si),Si=!1}function Jr(){const n=Ef.pop();Si=n===void 0?!0:n}function an(n,e,t){if(Si&&Vn){let i=cc.get(n);i||cc.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=qc()),Jf(r)}}function Jf(n,e){let t=!1;ls<=lc?Zf(n)||(n.n|=yi,t=!Uf(n)):t=!n.has(Vn),t&&(n.add(Vn),Vn.deps.push(n))}function ei(n,e,t,i,r,s){const o=cc.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&We(n))o.forEach((c,l)=>{(l==="length"||l>=i)&&a.push(c)});else switch(t!==void 0&&a.push(o.get(t)),e){case"add":We(n)?Jc(t)&&a.push(o.get("length")):(a.push(o.get(Ji)),Or(n)&&a.push(o.get(uc)));break;case"delete":We(n)||(a.push(o.get(Ji)),Or(n)&&a.push(o.get(uc)));break;case"set":Or(n)&&a.push(o.get(Ji));break}if(a.length===1)a[0]&&dc(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);dc(qc(c))}}function dc(n,e){for(const t of We(n)?n:[...n])(t!==Vn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Vm=Lc("__proto__,__v_isRef,__isVue"),qf=new Set(Object.getOwnPropertyNames(Symbol).map(n=>Symbol[n]).filter(Ec)),wm=Cc(),Nm=Cc(!1,!0),Wm=Cc(!0),Ll=zm();function zm(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=Qe(this);for(let s=0,o=this.length;s<o;s++)an(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map(Qe)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){Er();const i=Qe(this)[e].apply(this,t);return Jr(),i}}),n}function Cc(n=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!n;if(r==="__v_isReadonly")return n;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(n?e?$m:Bf:e?Kf:Yf).get(i))return i;const o=We(i);if(!n&&o&&Be(Ll,r))return Reflect.get(Ll,r,s);const a=Reflect.get(i,r,s);return(Ec(r)?qf.has(r):Vm(r))||(n||an(i,"get",r),e)?a:Ot(a)?!o||!Jc(r)?a.value:a:xt(a)?n?Bc(a):Zt(a):a}}const Dm=Ff(),Lm=Ff(!0);function Ff(n=!1){return function(t,i,r,s){let o=t[i];if(Ms(o)&&Ot(o)&&!Ot(r))return!1;if(!n&&!Ms(r)&&(Xf(r)||(r=Qe(r),o=Qe(o)),!We(t)&&Ot(o)&&!Ot(r)))return o.value=r,!0;const a=We(t)&&Jc(i)?Number(i)<t.length:Be(t,i),c=Reflect.set(t,i,r,s);return t===Qe(s)&&(a?vs(r,o)&&ei(t,"set",i,r):ei(t,"add",i,r)),c}}function Um(n,e){const t=Be(n,e);n[e];const i=Reflect.deleteProperty(n,e);return i&&t&&ei(n,"delete",e,void 0),i}function Zm(n,e){const t=Reflect.has(n,e);return(!Ec(e)||!qf.has(e))&&an(n,"has",e),t}function Em(n){return an(n,"iterate",We(n)?"length":Ji),Reflect.ownKeys(n)}const Cf={get:wm,set:Dm,deleteProperty:Um,has:Zm,ownKeys:Em},Jm={get:Wm,set(n,e){return!0},deleteProperty(n,e){return!0}},qm=Tt({},Cf,{get:Nm,set:Lm}),Yc=n=>n,qa=n=>Reflect.getPrototypeOf(n);function Zs(n,e,t=!1,i=!1){n=n.__v_raw;const r=Qe(n),s=Qe(e);e!==s&&!t&&an(r,"get",e),!t&&an(r,"get",s);const{has:o}=qa(r),a=i?Yc:t?Qc:ks;if(o.call(r,e))return a(n.get(e));if(o.call(r,s))return a(n.get(s));n!==r&&n.get(e)}function Es(n,e=!1){const t=this.__v_raw,i=Qe(t),r=Qe(n);return n!==r&&!e&&an(i,"has",n),!e&&an(i,"has",r),n===r?t.has(n):t.has(n)||t.has(r)}function Js(n,e=!1){return n=n.__v_raw,!e&&an(Qe(n),"iterate",Ji),Reflect.get(n,"size",n)}function Ul(n){n=Qe(n);const e=Qe(this);return qa(e).has.call(e,n)||(e.add(n),ei(e,"add",n,n)),this}function Zl(n,e){e=Qe(e);const t=Qe(this),{has:i,get:r}=qa(t);let s=i.call(t,n);s||(n=Qe(n),s=i.call(t,n));const o=r.call(t,n);return t.set(n,e),s?vs(e,o)&&ei(t,"set",n,e):ei(t,"add",n,e),this}function El(n){const e=Qe(this),{has:t,get:i}=qa(e);let r=t.call(e,n);r||(n=Qe(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&ei(e,"delete",n,void 0),s}function Jl(){const n=Qe(this),e=n.size!==0,t=n.clear();return e&&ei(n,"clear",void 0,void 0),t}function qs(n,e){return function(i,r){const s=this,o=s.__v_raw,a=Qe(o),c=e?Yc:n?Qc:ks;return!n&&an(a,"iterate",Ji),o.forEach((l,u)=>i.call(r,c(l),c(u),s))}}function Fs(n,e,t){return function(...i){const r=this.__v_raw,s=Qe(r),o=Or(s),a=n==="entries"||n===Symbol.iterator&&o,c=n==="keys"&&o,l=r[n](...i),u=t?Yc:e?Qc:ks;return!e&&an(s,"iterate",c?uc:Ji),{next(){const{value:d,done:f}=l.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function ii(n){return function(...e){return n==="delete"?!1:this}}function Fm(){const n={get(s){return Zs(this,s)},get size(){return Js(this)},has:Es,add:Ul,set:Zl,delete:El,clear:Jl,forEach:qs(!1,!1)},e={get(s){return Zs(this,s,!1,!0)},get size(){return Js(this)},has:Es,add:Ul,set:Zl,delete:El,clear:Jl,forEach:qs(!1,!0)},t={get(s){return Zs(this,s,!0)},get size(){return Js(this,!0)},has(s){return Es.call(this,s,!0)},add:ii("add"),set:ii("set"),delete:ii("delete"),clear:ii("clear"),forEach:qs(!0,!1)},i={get(s){return Zs(this,s,!0,!0)},get size(){return Js(this,!0)},has(s){return Es.call(this,s,!0)},add:ii("add"),set:ii("set"),delete:ii("delete"),clear:ii("clear"),forEach:qs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Fs(s,!1,!1),t[s]=Fs(s,!0,!1),e[s]=Fs(s,!1,!0),i[s]=Fs(s,!0,!0)}),[n,t,e,i]}const[Cm,Ym,Km,Bm]=Fm();function Kc(n,e){const t=e?n?Bm:Km:n?Ym:Cm;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Be(t,r)&&r in i?t:i,r,s)}const Xm={get:Kc(!1,!1)},Qm={get:Kc(!1,!0)},_m={get:Kc(!0,!1)},Yf=new WeakMap,Kf=new WeakMap,Bf=new WeakMap,$m=new WeakMap;function eA(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function tA(n){return n.__v_skip||!Object.isExtensible(n)?0:eA(vm(n))}function Zt(n){return Ms(n)?n:Xc(n,!1,Cf,Xm,Yf)}function nA(n){return Xc(n,!1,qm,Qm,Kf)}function Bc(n){return Xc(n,!0,Jm,_m,Bf)}function Xc(n,e,t,i,r){if(!xt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=tA(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function Pr(n){return Ms(n)?Pr(n.__v_raw):!!(n&&n.__v_isReactive)}function Ms(n){return!!(n&&n.__v_isReadonly)}function Xf(n){return!!(n&&n.__v_isShallow)}function Qf(n){return Pr(n)||Ms(n)}function Qe(n){const e=n&&n.__v_raw;return e?Qe(e):n}function _f(n){return ka(n,"__v_skip",!0),n}const ks=n=>xt(n)?Zt(n):n,Qc=n=>xt(n)?Bc(n):n;function $f(n){Si&&Vn&&(n=Qe(n),Jf(n.dep||(n.dep=qc())))}function ep(n,e){n=Qe(n),n.dep&&dc(n.dep)}function Ot(n){return!!(n&&n.__v_isRef===!0)}function et(n){return np(n,!1)}function tp(n){return np(n,!0)}function np(n,e){return Ot(n)?n:new iA(n,e)}class iA{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Qe(e),this._value=t?e:ks(e)}get value(){return $f(this),this._value}set value(e){e=this.__v_isShallow?e:Qe(e),vs(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:ks(e),ep(this))}}function qi(n){return Ot(n)?n.value:n}const rA={get:(n,e,t)=>qi(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Ot(r)&&!Ot(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function ip(n){return Pr(n)?n:new Proxy(n,rA)}function ti(n){const e=We(n)?new Array(n.length):{};for(const t in n)e[t]=aA(n,t);return e}class sA{constructor(e,t,i){this._object=e,this._key=t,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function aA(n,e,t){const i=n[e];return Ot(i)?i:new sA(n,e,t)}class oA{constructor(e,t,i,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Fc(e,()=>{this._dirty||(this._dirty=!0,ep(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=Qe(this);return $f(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function cA(n,e,t=!1){let i,r;const s=Ue(n);return s?(i=n,r=kn):(i=n.get,r=n.set),new oA(i,r,s||!r,t)}Promise.resolve();function bi(n,e,t,i){let r;try{r=i?n(...i):n()}catch(s){Vs(s,e,t)}return r}function An(n,e,t,i){if(Ue(n)){const s=bi(n,e,t,i);return s&&Wf(s)&&s.catch(o=>{Vs(o,e,t)}),s}const r=[];for(let s=0;s<n.length;s++)r.push(An(n[s],e,t,i));return r}function Vs(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const l=s.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](n,o,a)===!1)return}s=s.parent}const c=e.appContext.config.errorHandler;if(c){bi(c,null,10,[n,o,a]);return}}lA(n,t,r,i)}function lA(n,e,t,i=!0){console.error(n)}let Oa=!1,fc=!1;const tn=[];let Kn=0;const ms=[];let us=null,gr=0;const As=[];let fi=null,yr=0;const rp=Promise.resolve();let _c=null,pc=null;function $c(n){const e=_c||rp;return n?e.then(this?n.bind(this):n):e}function uA(n){let e=Kn+1,t=tn.length;for(;e<t;){const i=e+t>>>1;Os(tn[i])<n?e=i+1:t=i}return e}function el(n){(!tn.length||!tn.includes(n,Oa&&n.allowRecurse?Kn+1:Kn))&&n!==pc&&(n.id==null?tn.push(n):tn.splice(uA(n.id),0,n),sp())}function sp(){!Oa&&!fc&&(fc=!0,_c=rp.then(op))}function dA(n){const e=tn.indexOf(n);e>Kn&&tn.splice(e,1)}function ap(n,e,t,i){We(n)?t.push(...n):(!e||!e.includes(n,n.allowRecurse?i+1:i))&&t.push(n),sp()}function fA(n){ap(n,us,ms,gr)}function pA(n){ap(n,fi,As,yr)}function tl(n,e=null){if(ms.length){for(pc=e,us=[...new Set(ms)],ms.length=0,gr=0;gr<us.length;gr++)us[gr]();us=null,gr=0,pc=null,tl(n,e)}}function Pa(n){if(As.length){const e=[...new Set(As)];if(As.length=0,fi){fi.push(...e);return}for(fi=e,fi.sort((t,i)=>Os(t)-Os(i)),yr=0;yr<fi.length;yr++)fi[yr]();fi=null,yr=0}}const Os=n=>n.id==null?1/0:n.id;function op(n){fc=!1,Oa=!0,tl(n),tn.sort((t,i)=>Os(t)-Os(i));const e=kn;try{for(Kn=0;Kn<tn.length;Kn++){const t=tn[Kn];t&&t.active!==!1&&bi(t,null,14)}}finally{Kn=0,tn.length=0,Pa(),Oa=!1,_c=null,(tn.length||ms.length||As.length)&&op(n)}}function hA(n,e,...t){const i=n.vnode.props||it;let r=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:f}=i[u]||it;f?r=t.map(m=>m.trim()):d&&(r=t.map(Lf))}let a,c=i[a=po(e)]||i[a=po(Dn(e))];!c&&s&&(c=i[a=po(er(e))]),c&&An(c,n,6,r);const l=i[a+"Once"];if(l){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,An(l,n,6,r)}}function cp(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Ue(n)){const c=l=>{const u=cp(l,e,!0);u&&(a=!0,Tt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!s&&!a?(i.set(n,null),null):(We(s)?s.forEach(c=>o[c]=null):Tt(o,s),i.set(n,o),o)}function nl(n,e){return!n||!Gs(e)?!1:(e=e.slice(2).replace(/Once$/,""),Be(n,e[0].toLowerCase()+e.slice(1))||Be(n,er(e))||Be(n,e))}let nn=null,Fa=null;function Ra(n){const e=nn;return nn=n,Fa=n&&n.type.__scopeId||null,e}function il(n){Fa=n}function rl(){Fa=null}function Ie(n,e=nn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&eu(-1);const s=Ra(e),o=n(...r);return Ra(s),i._d&&eu(1),o};return i._n=!0,i._c=!0,i._d=!0,i}function mo(n){const{type:e,vnode:t,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:d,data:f,setupState:m,ctx:A,inheritAttrs:h}=n;let p,x;const g=Ra(n);try{if(t.shapeFlag&4){const v=r||i;p=jn(u.call(v,v,d,s,m,f,A)),x=c}else{const v=e;p=jn(v.length>1?v(s,{attrs:c,slots:a,emit:l}):v(s,null)),x=e.props?c:mA(c)}}catch(v){Ss.length=0,Vs(v,n,1),p=Ae(Sn)}let S=p;if(x&&h!==!1){const v=Object.keys(x),{shapeFlag:M}=S;v.length&&M&7&&(o&&v.some(Uc)&&(x=AA(x,o)),S=Hr(S,x))}return t.dirs&&(S.dirs=S.dirs?S.dirs.concat(t.dirs):t.dirs),t.transition&&(S.transition=t.transition),p=S,Ra(g),p}const mA=n=>{let e;for(const t in n)(t==="class"||t==="style"||Gs(t))&&((e||(e={}))[t]=n[t]);return e},AA=(n,e)=>{const t={};for(const i in n)(!Uc(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function xA(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:c}=e,l=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return i?ql(i,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(o[f]!==i[f]&&!nl(l,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?ql(i,o,l):!0:!!o;return!1}function ql(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!nl(t,s))return!0}return!1}function SA({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const bA=n=>n.__isSuspense;function lp(n,e){e&&e.pendingBranch?We(n)?e.effects.push(...n):e.effects.push(n):pA(n)}function Fi(n,e){if(St){let t=St.provides;const i=St.parent&&St.parent.provides;i===t&&(t=St.provides=Object.create(i)),t[n]=e}}function Rt(n,e,t=!1){const i=St||nn;if(i){const r=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Ue(e)?e.call(i.proxy):e}}const Fl={};function wn(n,e,t){return up(n,e,t)}function up(n,e,{immediate:t,deep:i,flush:r,onTrack:s,onTrigger:o}=it){const a=St;let c,l=!1,u=!1;if(Ot(n)?(c=()=>n.value,l=Xf(n)):Pr(n)?(c=()=>n,i=!0):We(n)?(u=!0,l=n.some(Pr),c=()=>n.map(x=>{if(Ot(x))return x.value;if(Pr(x))return Ui(x);if(Ue(x))return bi(x,a,2)})):Ue(n)?e?c=()=>bi(n,a,2):c=()=>{if(!(a&&a.isUnmounted))return d&&d(),An(n,a,3,[f])}:c=kn,e&&i){const x=c;c=()=>Ui(x())}let d,f=x=>{d=p.onStop=()=>{bi(x,a,4)}};if(Vr)return f=kn,e?t&&An(e,a,3,[c(),u?[]:void 0,f]):c(),kn;let m=u?[]:Fl;const A=()=>{if(!!p.active)if(e){const x=p.run();(i||l||(u?x.some((g,S)=>vs(g,m[S])):vs(x,m)))&&(d&&d(),An(e,a,3,[x,m===Fl?void 0:m,f]),m=x)}else p.run()};A.allowRecurse=!!e;let h;r==="sync"?h=A:r==="post"?h=()=>Ft(A,a&&a.suspense):h=()=>{!a||a.isMounted?fA(A):A()};const p=new Fc(c,h);return e?t?A():m=p.run():r==="post"?Ft(p.run.bind(p),a&&a.suspense):p.run(),()=>{p.stop(),a&&a.scope&&Zc(a.scope.effects,p)}}function gA(n,e,t){const i=this.proxy,r=st(n)?n.includes(".")?dp(i,n):()=>i[n]:n.bind(i,i);let s;Ue(e)?s=e:(s=e.handler,t=e);const o=St;Gr(this);const a=up(r,s.bind(i),t);return o?Gr(o):Yi(),a}function dp(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function Ui(n,e){if(!xt(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),Ot(n))Ui(n.value,e);else if(We(n))for(let t=0;t<n.length;t++)Ui(n[t],e);else if(Nf(n)||Or(n))n.forEach(t=>{Ui(t,e)});else if(Df(n))for(const t in n)Ui(n[t],e);return n}function yA(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Et(()=>{n.isMounted=!0}),Ya(()=>{n.isUnmounting=!0}),n}const ln=[Function,Array],jA={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ln,onEnter:ln,onAfterEnter:ln,onEnterCancelled:ln,onBeforeLeave:ln,onLeave:ln,onAfterLeave:ln,onLeaveCancelled:ln,onBeforeAppear:ln,onAppear:ln,onAfterAppear:ln,onAppearCancelled:ln},setup(n,{slots:e}){const t=Hp(),i=yA();let r;return()=>{const s=e.default&&hp(e.default(),!0);if(!s||!s.length)return;const o=Qe(n),{mode:a}=o,c=s[0];if(i.isLeaving)return Ao(c);const l=Cl(c);if(!l)return Ao(c);const u=hc(l,o,i,t);mc(l,u);const d=t.subTree,f=d&&Cl(d);let m=!1;const{getTransitionKey:A}=l.type;if(A){const h=A();r===void 0?r=h:h!==r&&(r=h,m=!0)}if(f&&f.type!==Sn&&(!zi(l,f)||m)){const h=hc(f,o,i,t);if(mc(f,h),a==="out-in")return i.isLeaving=!0,h.afterLeave=()=>{i.isLeaving=!1,t.update()},Ao(c);a==="in-out"&&l.type!==Sn&&(h.delayLeave=(p,x,g)=>{const S=pp(i,f);S[String(f.key)]=f,p._leaveCb=()=>{x(),p._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=g})}return c}}},fp=jA;function pp(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function hc(n,e,t,i){const{appear:r,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:d,onLeave:f,onAfterLeave:m,onLeaveCancelled:A,onBeforeAppear:h,onAppear:p,onAfterAppear:x,onAppearCancelled:g}=e,S=String(n.key),v=pp(t,n),M=(I,b)=>{I&&An(I,i,9,b)},T={mode:s,persisted:o,beforeEnter(I){let b=a;if(!t.isMounted)if(r)b=h||a;else return;I._leaveCb&&I._leaveCb(!0);const P=v[S];P&&zi(n,P)&&P.el._leaveCb&&P.el._leaveCb(),M(b,[I])},enter(I){let b=c,P=l,w=u;if(!t.isMounted)if(r)b=p||c,P=x||l,w=g||u;else return;let L=!1;const H=I._enterCb=G=>{L||(L=!0,G?M(w,[I]):M(P,[I]),T.delayedLeave&&T.delayedLeave(),I._enterCb=void 0)};b?(b(I,H),b.length<=1&&H()):H()},leave(I,b){const P=String(n.key);if(I._enterCb&&I._enterCb(!0),t.isUnmounting)return b();M(d,[I]);let w=!1;const L=I._leaveCb=H=>{w||(w=!0,b(),H?M(A,[I]):M(m,[I]),I._leaveCb=void 0,v[P]===n&&delete v[P])};v[P]=n,f?(f(I,L),f.length<=1&&L()):L()},clone(I){return hc(I,e,t,i)}};return T}function Ao(n){if(ws(n))return n=Hr(n),n.children=null,n}function Cl(n){return ws(n)?n.children?n.children[0]:void 0:n}function mc(n,e){n.shapeFlag&6&&n.component?mc(n.component.subTree,e):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function hp(n,e=!1){let t=[],i=0;for(let r=0;r<n.length;r++){const s=n[r];s.type===_e?(s.patchFlag&128&&i++,t=t.concat(hp(s.children,e))):(e||s.type!==Sn)&&t.push(s)}if(i>1)for(let r=0;r<t.length;r++)t[r].patchFlag=-2;return t}function On(n){return Ue(n)?{setup:n,name:n.name}:n}const Ia=n=>!!n.type.__asyncLoader;function qt(n){Ue(n)&&(n={loader:n});const{loader:e,loadingComponent:t,errorComponent:i,delay:r=200,timeout:s,suspensible:o=!0,onError:a}=n;let c=null,l,u=0;const d=()=>(u++,c=null,f()),f=()=>{let m;return c||(m=c=e().catch(A=>{if(A=A instanceof Error?A:new Error(String(A)),a)return new Promise((h,p)=>{a(A,()=>h(d()),()=>p(A),u+1)});throw A}).then(A=>m!==c&&c?c:(A&&(A.__esModule||A[Symbol.toStringTag]==="Module")&&(A=A.default),l=A,A)))};return On({name:"AsyncComponentWrapper",__asyncLoader:f,get __asyncResolved(){return l},setup(){const m=St;if(l)return()=>xo(l,m);const A=g=>{c=null,Vs(g,m,13,!i)};if(o&&m.suspense||Vr)return f().then(g=>()=>xo(g,m)).catch(g=>(A(g),()=>i?Ae(i,{error:g}):null));const h=et(!1),p=et(),x=et(!!r);return r&&setTimeout(()=>{x.value=!1},r),s!=null&&setTimeout(()=>{if(!h.value&&!p.value){const g=new Error(`Async component timed out after ${s}ms.`);A(g),p.value=g}},s),f().then(()=>{h.value=!0,m.parent&&ws(m.parent.vnode)&&el(m.parent.update)}).catch(g=>{A(g),p.value=g}),()=>{if(h.value&&l)return xo(l,m);if(p.value&&i)return Ae(i,{error:p.value});if(t&&!x.value)return Ae(t)}}})}function xo(n,{vnode:{ref:e,props:t,children:i}}){const r=Ae(n,t,i);return r.ref=e,r}const ws=n=>n.type.__isKeepAlive;function vA(n,e){mp(n,"a",e)}function MA(n,e){mp(n,"da",e)}function mp(n,e,t=St){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Ca(e,i,t),t){let r=t.parent;for(;r&&r.parent;)ws(r.parent.vnode)&&kA(i,e,t,r),r=r.parent}}function kA(n,e,t,i){const r=Ca(e,n,i,!0);sl(()=>{Zc(i[e],r)},t)}function Ca(n,e,t=St,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;Er(),Gr(t);const a=An(e,t,n,o);return Yi(),Jr(),a});return i?r.unshift(s):r.push(s),s}}const ni=n=>(e,t=St)=>(!Vr||n==="sp")&&Ca(n,e,t),Ap=ni("bm"),Et=ni("m"),OA=ni("bu"),PA=ni("u"),Ya=ni("bum"),sl=ni("um"),RA=ni("sp"),IA=ni("rtg"),TA=ni("rtc");function HA(n,e=St){Ca("ec",n,e)}let Ac=!0;function GA(n){const e=Sp(n),t=n.proxy,i=n.ctx;Ac=!1,e.beforeCreate&&Yl(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:d,mounted:f,beforeUpdate:m,updated:A,activated:h,deactivated:p,beforeDestroy:x,beforeUnmount:g,destroyed:S,unmounted:v,render:M,renderTracked:T,renderTriggered:I,errorCaptured:b,serverPrefetch:P,expose:w,inheritAttrs:L,components:H,directives:G,filters:N}=e;if(l&&VA(l,i,null,n.appContext.config.unwrapInjectedRef),o)for(const X in o){const Z=o[X];Ue(Z)&&(i[X]=Z.bind(t))}if(r){const X=r.call(t,t);xt(X)&&(n.data=Zt(X))}if(Ac=!0,s)for(const X in s){const Z=s[X],se=Ue(Z)?Z.bind(t,t):Ue(Z.get)?Z.get.bind(t,t):kn,ce=!Ue(Z)&&Ue(Z.set)?Z.set.bind(t):kn,ve=dt({get:se,set:ce});Object.defineProperty(i,X,{enumerable:!0,configurable:!0,get:()=>ve.value,set:C=>ve.value=C})}if(a)for(const X in a)xp(a[X],i,t,X);if(c){const X=Ue(c)?c.call(t):c;Reflect.ownKeys(X).forEach(Z=>{Fi(Z,X[Z])})}u&&Yl(u,n,"c");function q(X,Z){We(Z)?Z.forEach(se=>X(se.bind(t))):Z&&X(Z.bind(t))}if(q(Ap,d),q(Et,f),q(OA,m),q(PA,A),q(vA,h),q(MA,p),q(HA,b),q(TA,T),q(IA,I),q(Ya,g),q(sl,v),q(RA,P),We(w))if(w.length){const X=n.exposed||(n.exposed={});w.forEach(Z=>{Object.defineProperty(X,Z,{get:()=>t[Z],set:se=>t[Z]=se})})}else n.exposed||(n.exposed={});M&&n.render===kn&&(n.render=M),L!=null&&(n.inheritAttrs=L),H&&(n.components=H),G&&(n.directives=G)}function VA(n,e,t=kn,i=!1){We(n)&&(n=xc(n));for(const r in n){const s=n[r];let o;xt(s)?"default"in s?o=Rt(s.from||r,s.default,!0):o=Rt(s.from||r):o=Rt(s),Ot(o)&&i?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Yl(n,e,t){An(We(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function xp(n,e,t,i){const r=i.includes(".")?dp(t,i):()=>t[i];if(st(n)){const s=e[n];Ue(s)&&wn(r,s)}else if(Ue(n))wn(r,n.bind(t));else if(xt(n))if(We(n))n.forEach(s=>xp(s,e,t,i));else{const s=Ue(n.handler)?n.handler.bind(t):e[n.handler];Ue(s)&&wn(r,s,n)}}function Sp(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let c;return a?c=a:!r.length&&!t&&!i?c=e:(c={},r.length&&r.forEach(l=>Ta(c,l,o,!0)),Ta(c,e,o)),s.set(e,c),c}function Ta(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Ta(n,s,t,!0),r&&r.forEach(o=>Ta(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=wA[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const wA={data:Kl,props:Gi,emits:Gi,methods:Gi,computed:Gi,beforeCreate:zt,created:zt,beforeMount:zt,mounted:zt,beforeUpdate:zt,updated:zt,beforeDestroy:zt,beforeUnmount:zt,destroyed:zt,unmounted:zt,activated:zt,deactivated:zt,errorCaptured:zt,serverPrefetch:zt,components:Gi,directives:Gi,watch:WA,provide:Kl,inject:NA};function Kl(n,e){return e?n?function(){return Tt(Ue(n)?n.call(this,this):n,Ue(e)?e.call(this,this):e)}:e:n}function NA(n,e){return Gi(xc(n),xc(e))}function xc(n){if(We(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function zt(n,e){return n?[...new Set([].concat(n,e))]:e}function Gi(n,e){return n?Tt(Tt(Object.create(null),n),e):e}function WA(n,e){if(!n)return e;if(!e)return n;const t=Tt(Object.create(null),n);for(const i in e)t[i]=zt(n[i],e[i]);return t}function zA(n,e,t,i=!1){const r={},s={};ka(s,Ba,1),n.propsDefaults=Object.create(null),bp(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:nA(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function DA(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=Qe(r),[c]=n.propsOptions;let l=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];const m=e[f];if(c)if(Be(s,f))m!==s[f]&&(s[f]=m,l=!0);else{const A=Dn(f);r[A]=Sc(c,a,A,m,n,!1)}else m!==s[f]&&(s[f]=m,l=!0)}}}else{bp(n,e,r,s)&&(l=!0);let u;for(const d in a)(!e||!Be(e,d)&&((u=er(d))===d||!Be(e,u)))&&(c?t&&(t[d]!==void 0||t[u]!==void 0)&&(r[d]=Sc(c,a,d,void 0,n,!0)):delete r[d]);if(s!==a)for(const d in s)(!e||!Be(e,d)&&!0)&&(delete s[d],l=!0)}l&&ei(n,"set","$attrs")}function bp(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let c in e){if(hs(c))continue;const l=e[c];let u;r&&Be(r,u=Dn(c))?!s||!s.includes(u)?t[u]=l:(a||(a={}))[u]=l:nl(n.emitsOptions,c)||(!(c in i)||l!==i[c])&&(i[c]=l,o=!0)}if(s){const c=Qe(t),l=a||it;for(let u=0;u<s.length;u++){const d=s[u];t[d]=Sc(r,c,d,l[d],n,!Be(l,d))}}return o}function Sc(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=Be(o,"default");if(a&&i===void 0){const c=o.default;if(o.type!==Function&&Ue(c)){const{propsDefaults:l}=r;t in l?i=l[t]:(Gr(r),i=l[t]=c.call(null,e),Yi())}else i=c}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===er(t))&&(i=!0))}return i}function gp(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let c=!1;if(!Ue(n)){const u=d=>{c=!0;const[f,m]=gp(d,e,!0);Tt(o,f),m&&a.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!c)return i.set(n,kr),kr;if(We(s))for(let u=0;u<s.length;u++){const d=Dn(s[u]);Bl(d)&&(o[d]=it)}else if(s)for(const u in s){const d=Dn(u);if(Bl(d)){const f=s[u],m=o[d]=We(f)||Ue(f)?{type:f}:f;if(m){const A=_l(Boolean,m.type),h=_l(String,m.type);m[0]=A>-1,m[1]=h<0||A<h,(A>-1||Be(m,"default"))&&a.push(d)}}}const l=[o,a];return i.set(n,l),l}function Bl(n){return n[0]!=="$"}function Xl(n){const e=n&&n.toString().match(/^\s*function (\w+)/);return e?e[1]:n===null?"null":""}function Ql(n,e){return Xl(n)===Xl(e)}function _l(n,e){return We(e)?e.findIndex(t=>Ql(t,n)):Ue(e)&&Ql(e,n)?0:-1}const yp=n=>n[0]==="_"||n==="$stable",al=n=>We(n)?n.map(jn):[jn(n)],LA=(n,e,t)=>{const i=Ie((...r)=>al(e(...r)),t);return i._c=!1,i},jp=(n,e,t)=>{const i=n._ctx;for(const r in n){if(yp(r))continue;const s=n[r];if(Ue(s))e[r]=LA(r,s,i);else if(s!=null){const o=al(s);e[r]=()=>o}}},vp=(n,e)=>{const t=al(e);n.slots.default=()=>t},UA=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=Qe(e),ka(e,"_",t)):jp(e,n.slots={})}else n.slots={},e&&vp(n,e);ka(n.slots,Ba,1)},ZA=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=it;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(Tt(r,e),!t&&a===1&&delete r._):(s=!e.$stable,jp(e,r)),o=e}else e&&(vp(n,e),o={default:1});if(s)for(const a in r)!yp(a)&&!(a in o)&&delete r[a]};function Nn(n,e){const t=nn;if(t===null)return n;const i=t.proxy,r=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,c,l=it]=e[s];Ue(o)&&(o={mounted:o,updated:o}),o.deep&&Ui(a),r.push({dir:o,instance:i,value:a,oldValue:void 0,arg:c,modifiers:l})}return n}function Tn(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let c=a.dir[i];c&&(Er(),An(c,t,8,[n.el,a,n,e]),Jr())}}function Mp(){return{app:null,config:{isNativeTag:gm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let EA=0;function JA(n,e){return function(i,r=null){r!=null&&!xt(r)&&(r=null);const s=Mp(),o=new Set;let a=!1;const c=s.app={_uid:EA++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:dx,get config(){return s.config},set config(l){},use(l,...u){return o.has(l)||(l&&Ue(l.install)?(o.add(l),l.install(c,...u)):Ue(l)&&(o.add(l),l(c,...u))),c},mixin(l){return s.mixins.includes(l)||s.mixins.push(l),c},component(l,u){return u?(s.components[l]=u,c):s.components[l]},directive(l,u){return u?(s.directives[l]=u,c):s.directives[l]},mount(l,u,d){if(!a){const f=Ae(i,r);return f.appContext=s,u&&e?e(f,l):n(f,l,d),a=!0,c._container=l,l.__vue_app__=c,cl(f.component)||f.component.proxy}},unmount(){a&&(n(null,c._container),delete c._container.__vue_app__)},provide(l,u){return s.provides[l]=u,c}};return c}}function Ha(n,e,t,i,r=!1){if(We(n)){n.forEach((f,m)=>Ha(f,e&&(We(e)?e[m]:e),t,i,r));return}if(Ia(i)&&!r)return;const s=i.shapeFlag&4?cl(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:c}=n,l=e&&e.r,u=a.refs===it?a.refs={}:a.refs,d=a.setupState;if(l!=null&&l!==c&&(st(l)?(u[l]=null,Be(d,l)&&(d[l]=null)):Ot(l)&&(l.value=null)),Ue(c))bi(c,a,12,[o,u]);else{const f=st(c),m=Ot(c);if(f||m){const A=()=>{if(n.f){const h=f?u[c]:c.value;r?We(h)&&Zc(h,s):We(h)?h.includes(s)||h.push(s):f?u[c]=[s]:(c.value=[s],n.k&&(u[n.k]=c.value))}else f?(u[c]=o,Be(d,c)&&(d[c]=o)):Ot(c)&&(c.value=o,n.k&&(u[n.k]=o))};o?(A.id=-1,Ft(A,t)):A()}}}let ri=!1;const Cs=n=>/svg/.test(n.namespaceURI)&&n.tagName!=="foreignObject",So=n=>n.nodeType===8;function qA(n){const{mt:e,p:t,o:{patchProp:i,nextSibling:r,parentNode:s,remove:o,insert:a,createComment:c}}=n,l=(p,x)=>{if(!x.hasChildNodes()){t(null,p,x),Pa();return}ri=!1,u(x.firstChild,p,null,null,null),Pa(),ri&&console.error("Hydration completed but contains mismatches.")},u=(p,x,g,S,v,M=!1)=>{const T=So(p)&&p.data==="[",I=()=>A(p,x,g,S,v,T),{type:b,ref:P,shapeFlag:w}=x,L=p.nodeType;x.el=p;let H=null;switch(b){case Ps:L!==3?H=I():(p.data!==x.children&&(ri=!0,p.data=x.children),H=r(p));break;case Sn:L!==8||T?H=I():H=r(p);break;case xs:if(L!==1)H=I();else{H=p;const G=!x.children.length;for(let N=0;N<x.staticCount;N++)G&&(x.children+=H.outerHTML),N===x.staticCount-1&&(x.anchor=H),H=r(H);return H}break;case _e:T?H=m(p,x,g,S,v,M):H=I();break;default:if(w&1)L!==1||x.type.toLowerCase()!==p.tagName.toLowerCase()?H=I():H=d(p,x,g,S,v,M);else if(w&6){x.slotScopeIds=v;const G=s(p);if(e(x,G,null,g,S,Cs(G),M),H=T?h(p):r(p),Ia(x)){let N;T?(N=Ae(_e),N.anchor=H?H.previousSibling:G.lastChild):N=p.nodeType===3?De(""):Ae("div"),N.el=p,x.component.subTree=N}}else w&64?L!==8?H=I():H=x.type.hydrate(p,x,g,S,v,M,n,f):w&128&&(H=x.type.hydrate(p,x,g,S,Cs(s(p)),v,M,n,u))}return P!=null&&Ha(P,null,S,x),H},d=(p,x,g,S,v,M)=>{M=M||!!x.dynamicChildren;const{type:T,props:I,patchFlag:b,shapeFlag:P,dirs:w}=x,L=T==="input"&&w||T==="option";if(L||b!==-1){if(w&&Tn(x,null,g,"created"),I)if(L||!M||b&48)for(const G in I)(L&&G.endsWith("value")||Gs(G)&&!hs(G))&&i(p,G,null,I[G],!1,void 0,g);else I.onClick&&i(p,"onClick",null,I.onClick,!1,void 0,g);let H;if((H=I&&I.onVnodeBeforeMount)&&dn(H,g,x),w&&Tn(x,null,g,"beforeMount"),((H=I&&I.onVnodeMounted)||w)&&lp(()=>{H&&dn(H,g,x),w&&Tn(x,null,g,"mounted")},S),P&16&&!(I&&(I.innerHTML||I.textContent))){let G=f(p.firstChild,x,p,g,S,v,M);for(;G;){ri=!0;const N=G;G=G.nextSibling,o(N)}}else P&8&&p.textContent!==x.children&&(ri=!0,p.textContent=x.children)}return p.nextSibling},f=(p,x,g,S,v,M,T)=>{T=T||!!x.dynamicChildren;const I=x.children,b=I.length;for(let P=0;P<b;P++){const w=T?I[P]:I[P]=jn(I[P]);if(p)p=u(p,w,S,v,M,T);else{if(w.type===Ps&&!w.children)continue;ri=!0,t(null,w,g,null,S,v,Cs(g),M)}}return p},m=(p,x,g,S,v,M)=>{const{slotScopeIds:T}=x;T&&(v=v?v.concat(T):T);const I=s(p),b=f(r(p),x,I,g,S,v,M);return b&&So(b)&&b.data==="]"?r(x.anchor=b):(ri=!0,a(x.anchor=c("]"),I,b),b)},A=(p,x,g,S,v,M)=>{if(ri=!0,x.el=null,M){const b=h(p);for(;;){const P=r(p);if(P&&P!==b)o(P);else break}}const T=r(p),I=s(p);return o(p),t(null,x,I,T,g,S,Cs(I),v),T},h=p=>{let x=0;for(;p;)if(p=r(p),p&&So(p)&&(p.data==="["&&x++,p.data==="]")){if(x===0)return r(p);x--}return p};return[l,u]}const Ft=lp;function FA(n){return CA(n,qA)}function CA(n,e){const t=Om();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:d,nextSibling:f,setScopeId:m=kn,cloneNode:A,insertStaticContent:h}=n,p=(k,V,U,ie=null,te=null,ae=null,de=!1,ue=null,pe=!!V.dynamicChildren)=>{if(k===V)return;k&&!zi(k,V)&&(ie=ee(k),oe(k,te,ae,!0),k=null),V.patchFlag===-2&&(pe=!1,V.dynamicChildren=null);const{type:j,ref:y,shapeFlag:z}=V;switch(j){case Ps:x(k,V,U,ie);break;case Sn:g(k,V,U,ie);break;case xs:k==null&&S(V,U,ie,de);break;case _e:G(k,V,U,ie,te,ae,de,ue,pe);break;default:z&1?T(k,V,U,ie,te,ae,de,ue,pe):z&6?N(k,V,U,ie,te,ae,de,ue,pe):(z&64||z&128)&&j.process(k,V,U,ie,te,ae,de,ue,pe,ye)}y!=null&&te&&Ha(y,k&&k.ref,ae,V||k,!V)},x=(k,V,U,ie)=>{if(k==null)i(V.el=a(V.children),U,ie);else{const te=V.el=k.el;V.children!==k.children&&l(te,V.children)}},g=(k,V,U,ie)=>{k==null?i(V.el=c(V.children||""),U,ie):V.el=k.el},S=(k,V,U,ie)=>{[k.el,k.anchor]=h(k.children,V,U,ie,k.el,k.anchor)},v=({el:k,anchor:V},U,ie)=>{let te;for(;k&&k!==V;)te=f(k),i(k,U,ie),k=te;i(V,U,ie)},M=({el:k,anchor:V})=>{let U;for(;k&&k!==V;)U=f(k),r(k),k=U;r(V)},T=(k,V,U,ie,te,ae,de,ue,pe)=>{de=de||V.type==="svg",k==null?I(V,U,ie,te,ae,de,ue,pe):w(k,V,te,ae,de,ue,pe)},I=(k,V,U,ie,te,ae,de,ue)=>{let pe,j;const{type:y,props:z,shapeFlag:K,transition:Q,patchFlag:le,dirs:je}=k;if(k.el&&A!==void 0&&le===-1)pe=k.el=A(k.el);else{if(pe=k.el=o(k.type,ae,z&&z.is,z),K&8?u(pe,k.children):K&16&&P(k.children,pe,null,ie,te,ae&&y!=="foreignObject",de,ue),je&&Tn(k,null,ie,"created"),z){for(const B in z)B!=="value"&&!hs(B)&&s(pe,B,null,z[B],ae,k.children,ie,te,F);"value"in z&&s(pe,"value",null,z.value),(j=z.onVnodeBeforeMount)&&dn(j,ie,k)}b(pe,k,k.scopeId,de,ie)}je&&Tn(k,null,ie,"beforeMount");const fe=(!te||te&&!te.pendingBranch)&&Q&&!Q.persisted;fe&&Q.beforeEnter(pe),i(pe,V,U),((j=z&&z.onVnodeMounted)||fe||je)&&Ft(()=>{j&&dn(j,ie,k),fe&&Q.enter(pe),je&&Tn(k,null,ie,"mounted")},te)},b=(k,V,U,ie,te)=>{if(U&&m(k,U),ie)for(let ae=0;ae<ie.length;ae++)m(k,ie[ae]);if(te){let ae=te.subTree;if(V===ae){const de=te.vnode;b(k,de,de.scopeId,de.slotScopeIds,te.parent)}}},P=(k,V,U,ie,te,ae,de,ue,pe=0)=>{for(let j=pe;j<k.length;j++){const y=k[j]=ue?pi(k[j]):jn(k[j]);p(null,y,V,U,ie,te,ae,de,ue)}},w=(k,V,U,ie,te,ae,de)=>{const ue=V.el=k.el;let{patchFlag:pe,dynamicChildren:j,dirs:y}=V;pe|=k.patchFlag&16;const z=k.props||it,K=V.props||it;let Q;U&&Pi(U,!1),(Q=K.onVnodeBeforeUpdate)&&dn(Q,U,V,k),y&&Tn(V,k,U,"beforeUpdate"),U&&Pi(U,!0);const le=te&&V.type!=="foreignObject";if(j?L(k.dynamicChildren,j,ue,U,ie,le,ae):de||se(k,V,ue,null,U,ie,le,ae,!1),pe>0){if(pe&16)H(ue,V,z,K,U,ie,te);else if(pe&2&&z.class!==K.class&&s(ue,"class",null,K.class,te),pe&4&&s(ue,"style",z.style,K.style,te),pe&8){const je=V.dynamicProps;for(let fe=0;fe<je.length;fe++){const B=je[fe],Te=z[B],ke=K[B];(ke!==Te||B==="value")&&s(ue,B,Te,ke,te,k.children,U,ie,F)}}pe&1&&k.children!==V.children&&u(ue,V.children)}else!de&&j==null&&H(ue,V,z,K,U,ie,te);((Q=K.onVnodeUpdated)||y)&&Ft(()=>{Q&&dn(Q,U,V,k),y&&Tn(V,k,U,"updated")},ie)},L=(k,V,U,ie,te,ae,de)=>{for(let ue=0;ue<V.length;ue++){const pe=k[ue],j=V[ue],y=pe.el&&(pe.type===_e||!zi(pe,j)||pe.shapeFlag&70)?d(pe.el):U;p(pe,j,y,null,ie,te,ae,de,!0)}},H=(k,V,U,ie,te,ae,de)=>{if(U!==ie){for(const ue in ie){if(hs(ue))continue;const pe=ie[ue],j=U[ue];pe!==j&&ue!=="value"&&s(k,ue,j,pe,de,V.children,te,ae,F)}if(U!==it)for(const ue in U)!hs(ue)&&!(ue in ie)&&s(k,ue,U[ue],null,de,V.children,te,ae,F);"value"in ie&&s(k,"value",U.value,ie.value)}},G=(k,V,U,ie,te,ae,de,ue,pe)=>{const j=V.el=k?k.el:a(""),y=V.anchor=k?k.anchor:a("");let{patchFlag:z,dynamicChildren:K,slotScopeIds:Q}=V;Q&&(ue=ue?ue.concat(Q):Q),k==null?(i(j,U,ie),i(y,U,ie),P(V.children,U,y,te,ae,de,ue,pe)):z>0&&z&64&&K&&k.dynamicChildren?(L(k.dynamicChildren,K,U,te,ae,de,ue),(V.key!=null||te&&V===te.subTree)&&kp(k,V,!0)):se(k,V,U,y,te,ae,de,ue,pe)},N=(k,V,U,ie,te,ae,de,ue,pe)=>{V.slotScopeIds=ue,k==null?V.shapeFlag&512?te.ctx.activate(V,U,ie,de,pe):J(V,U,ie,te,ae,de,pe):q(k,V,pe)},J=(k,V,U,ie,te,ae,de)=>{const ue=k.component=rx(k,ie,te);if(ws(k)&&(ue.ctx.renderer=ye),sx(ue),ue.asyncDep){if(te&&te.registerDep(ue,X),!k.el){const pe=ue.subTree=Ae(Sn);g(null,pe,V,U)}return}X(ue,k,V,U,te,ae,de)},q=(k,V,U)=>{const ie=V.component=k.component;if(xA(k,V,U))if(ie.asyncDep&&!ie.asyncResolved){Z(ie,V,U);return}else ie.next=V,dA(ie.update),ie.update();else V.component=k.component,V.el=k.el,ie.vnode=V},X=(k,V,U,ie,te,ae,de)=>{const ue=()=>{if(k.isMounted){let{next:y,bu:z,u:K,parent:Q,vnode:le}=k,je=y,fe;Pi(k,!1),y?(y.el=le.el,Z(k,y,de)):y=le,z&&ho(z),(fe=y.props&&y.props.onVnodeBeforeUpdate)&&dn(fe,Q,y,le),Pi(k,!0);const B=mo(k),Te=k.subTree;k.subTree=B,p(Te,B,d(Te.el),ee(Te),k,te,ae),y.el=B.el,je===null&&SA(k,B.el),K&&Ft(K,te),(fe=y.props&&y.props.onVnodeUpdated)&&Ft(()=>dn(fe,Q,y,le),te)}else{let y;const{el:z,props:K}=V,{bm:Q,m:le,parent:je}=k,fe=Ia(V);if(Pi(k,!1),Q&&ho(Q),!fe&&(y=K&&K.onVnodeBeforeMount)&&dn(y,je,V),Pi(k,!0),z&&xe){const B=()=>{k.subTree=mo(k),xe(z,k.subTree,k,te,null)};fe?V.type.__asyncLoader().then(()=>!k.isUnmounted&&B()):B()}else{const B=k.subTree=mo(k);p(null,B,U,ie,k,te,ae),V.el=B.el}if(le&&Ft(le,te),!fe&&(y=K&&K.onVnodeMounted)){const B=V;Ft(()=>dn(y,je,B),te)}V.shapeFlag&256&&k.a&&Ft(k.a,te),k.isMounted=!0,V=U=ie=null}},pe=k.effect=new Fc(ue,()=>el(k.update),k.scope),j=k.update=pe.run.bind(pe);j.id=k.uid,Pi(k,!0),j()},Z=(k,V,U)=>{V.component=k;const ie=k.vnode.props;k.vnode=V,k.next=null,DA(k,V.props,ie,U),ZA(k,V.children,U),Er(),tl(void 0,k.update),Jr()},se=(k,V,U,ie,te,ae,de,ue,pe=!1)=>{const j=k&&k.children,y=k?k.shapeFlag:0,z=V.children,{patchFlag:K,shapeFlag:Q}=V;if(K>0){if(K&128){ve(j,z,U,ie,te,ae,de,ue,pe);return}else if(K&256){ce(j,z,U,ie,te,ae,de,ue,pe);return}}Q&8?(y&16&&F(j,te,ae),z!==j&&u(U,z)):y&16?Q&16?ve(j,z,U,ie,te,ae,de,ue,pe):F(j,te,ae,!0):(y&8&&u(U,""),Q&16&&P(z,U,ie,te,ae,de,ue,pe))},ce=(k,V,U,ie,te,ae,de,ue,pe)=>{k=k||kr,V=V||kr;const j=k.length,y=V.length,z=Math.min(j,y);let K;for(K=0;K<z;K++){const Q=V[K]=pe?pi(V[K]):jn(V[K]);p(k[K],Q,U,null,te,ae,de,ue,pe)}j>y?F(k,te,ae,!0,!1,z):P(V,U,ie,te,ae,de,ue,pe,z)},ve=(k,V,U,ie,te,ae,de,ue,pe)=>{let j=0;const y=V.length;let z=k.length-1,K=y-1;for(;j<=z&&j<=K;){const Q=k[j],le=V[j]=pe?pi(V[j]):jn(V[j]);if(zi(Q,le))p(Q,le,U,null,te,ae,de,ue,pe);else break;j++}for(;j<=z&&j<=K;){const Q=k[z],le=V[K]=pe?pi(V[K]):jn(V[K]);if(zi(Q,le))p(Q,le,U,null,te,ae,de,ue,pe);else break;z--,K--}if(j>z){if(j<=K){const Q=K+1,le=Q<y?V[Q].el:ie;for(;j<=K;)p(null,V[j]=pe?pi(V[j]):jn(V[j]),U,le,te,ae,de,ue,pe),j++}}else if(j>K)for(;j<=z;)oe(k[j],te,ae,!0),j++;else{const Q=j,le=j,je=new Map;for(j=le;j<=K;j++){const ze=V[j]=pe?pi(V[j]):jn(V[j]);ze.key!=null&&je.set(ze.key,j)}let fe,B=0;const Te=K-le+1;let ke=!1,Ne=0;const He=new Array(Te);for(j=0;j<Te;j++)He[j]=0;for(j=Q;j<=z;j++){const ze=k[j];if(B>=Te){oe(ze,te,ae,!0);continue}let qe;if(ze.key!=null)qe=je.get(ze.key);else for(fe=le;fe<=K;fe++)if(He[fe-le]===0&&zi(ze,V[fe])){qe=fe;break}qe===void 0?oe(ze,te,ae,!0):(He[qe-le]=j+1,qe>=Ne?Ne=qe:ke=!0,p(ze,V[qe],U,null,te,ae,de,ue,pe),B++)}const Ge=ke?YA(He):kr;for(fe=Ge.length-1,j=Te-1;j>=0;j--){const ze=le+j,qe=V[ze],ft=ze+1<y?V[ze+1].el:ie;He[j]===0?p(null,qe,U,ft,te,ae,de,ue,pe):ke&&(fe<0||j!==Ge[fe]?C(qe,U,ft,2):fe--)}}},C=(k,V,U,ie,te=null)=>{const{el:ae,type:de,transition:ue,children:pe,shapeFlag:j}=k;if(j&6){C(k.component.subTree,V,U,ie);return}if(j&128){k.suspense.move(V,U,ie);return}if(j&64){de.move(k,V,U,ye);return}if(de===_e){i(ae,V,U);for(let z=0;z<pe.length;z++)C(pe[z],V,U,ie);i(k.anchor,V,U);return}if(de===xs){v(k,V,U);return}if(ie!==2&&j&1&&ue)if(ie===0)ue.beforeEnter(ae),i(ae,V,U),Ft(()=>ue.enter(ae),te);else{const{leave:z,delayLeave:K,afterLeave:Q}=ue,le=()=>i(ae,V,U),je=()=>{z(ae,()=>{le(),Q&&Q()})};K?K(ae,le,je):je()}else i(ae,V,U)},oe=(k,V,U,ie=!1,te=!1)=>{const{type:ae,props:de,ref:ue,children:pe,dynamicChildren:j,shapeFlag:y,patchFlag:z,dirs:K}=k;if(ue!=null&&Ha(ue,null,U,k,!0),y&256){V.ctx.deactivate(k);return}const Q=y&1&&K,le=!Ia(k);let je;if(le&&(je=de&&de.onVnodeBeforeUnmount)&&dn(je,V,k),y&6)_(k.component,U,ie);else{if(y&128){k.suspense.unmount(U,ie);return}Q&&Tn(k,null,V,"beforeUnmount"),y&64?k.type.remove(k,V,U,te,ye,ie):j&&(ae!==_e||z>0&&z&64)?F(j,V,U,!1,!0):(ae===_e&&z&384||!te&&y&16)&&F(pe,V,U),ie&&Se(k)}(le&&(je=de&&de.onVnodeUnmounted)||Q)&&Ft(()=>{je&&dn(je,V,k),Q&&Tn(k,null,V,"unmounted")},U)},Se=k=>{const{type:V,el:U,anchor:ie,transition:te}=k;if(V===_e){R(U,ie);return}if(V===xs){M(k);return}const ae=()=>{r(U),te&&!te.persisted&&te.afterLeave&&te.afterLeave()};if(k.shapeFlag&1&&te&&!te.persisted){const{leave:de,delayLeave:ue}=te,pe=()=>de(U,ae);ue?ue(k.el,ae,pe):pe()}else ae()},R=(k,V)=>{let U;for(;k!==V;)U=f(k),r(k),k=U;r(V)},_=(k,V,U)=>{const{bum:ie,scope:te,update:ae,subTree:de,um:ue}=k;ie&&ho(ie),te.stop(),ae&&(ae.active=!1,oe(de,k,V,U)),ue&&Ft(ue,V),Ft(()=>{k.isUnmounted=!0},V),V&&V.pendingBranch&&!V.isUnmounted&&k.asyncDep&&!k.asyncResolved&&k.suspenseId===V.pendingId&&(V.deps--,V.deps===0&&V.resolve())},F=(k,V,U,ie=!1,te=!1,ae=0)=>{for(let de=ae;de<k.length;de++)oe(k[de],V,U,ie,te)},ee=k=>k.shapeFlag&6?ee(k.component.subTree):k.shapeFlag&128?k.suspense.next():f(k.anchor||k.el),me=(k,V,U)=>{k==null?V._vnode&&oe(V._vnode,null,null,!0):p(V._vnode||null,k,V,null,null,null,U),Pa(),V._vnode=k},ye={p,um:oe,m:C,r:Se,mt:J,mc:P,pc:se,pbc:L,n:ee,o:n};let be,xe;return e&&([be,xe]=e(ye)),{render:me,hydrate:be,createApp:JA(me,be)}}function Pi({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function kp(n,e,t=!1){const i=n.children,r=e.children;if(We(i)&&We(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=pi(r[s]),a.el=o.el),t||kp(o,a))}}function YA(n){const e=n.slice(),t=[0];let i,r,s,o,a;const c=n.length;for(i=0;i<c;i++){const l=n[i];if(l!==0){if(r=t[t.length-1],n[r]<l){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<l?s=a+1:o=a;l<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const KA=n=>n.__isTeleport,Op="components",BA="directives";function ct(n,e){return Pp(Op,n,!0,e)||n}const XA=Symbol();function Ka(n){return Pp(BA,n)}function Pp(n,e,t=!0,i=!1){const r=nn||St;if(r){const s=r.type;if(n===Op){const a=lx(s);if(a&&(a===e||a===Dn(e)||a===Ja(Dn(e))))return s}const o=$l(r[n]||s[n],e)||$l(r.appContext[n],e);return!o&&i?s:o}}function $l(n,e){return n&&(n[e]||n[Dn(e)]||n[Ja(Dn(e))])}const _e=Symbol(void 0),Ps=Symbol(void 0),Sn=Symbol(void 0),xs=Symbol(void 0),Ss=[];let Ci=null;function Pe(n=!1){Ss.push(Ci=n?null:[])}function QA(){Ss.pop(),Ci=Ss[Ss.length-1]||null}let Ga=1;function eu(n){Ga+=n}function Rp(n){return n.dynamicChildren=Ga>0?Ci||kr:null,QA(),Ga>0&&Ci&&Ci.push(n),n}function we(n,e,t,i,r,s){return Rp(Oe(n,e,t,i,r,s,!0))}function Wn(n,e,t,i,r){return Rp(Ae(n,e,t,i,r,!0))}function Va(n){return n?n.__v_isVNode===!0:!1}function zi(n,e){return n.type===e.type&&n.key===e.key}const Ba="__vInternal",Ip=({key:n})=>n!=null?n:null,ba=({ref:n,ref_key:e,ref_for:t})=>n!=null?st(n)||Ot(n)||Ue(n)?{i:nn,r:n,k:e,f:!!t}:n:null;function Oe(n,e=null,t=null,i=0,r=null,s=n===_e?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Ip(e),ref:e&&ba(e),scopeId:Fa,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(ol(c,t),s&128&&n.normalize(c)):t&&(c.shapeFlag|=st(t)?8:16),Ga>0&&!o&&Ci&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&Ci.push(c),c}const Ae=_A;function _A(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===XA)&&(n=Sn),Va(n)){const a=Hr(n,e,!0);return t&&ol(a,t),a}if(ux(n)&&(n=n.__vccOpts),e){e=$A(e);let{class:a,style:c}=e;a&&!st(a)&&(e.class=mn(a)),xt(c)&&(Qf(c)&&!We(c)&&(c=Tt({},c)),e.style=en(c))}const o=st(n)?1:bA(n)?128:KA(n)?64:xt(n)?4:Ue(n)?2:0;return Oe(n,e,t,i,r,o,s,!0)}function $A(n){return n?Qf(n)||Ba in n?Tt({},n):n:null}function Hr(n,e,t=!1){const{props:i,ref:r,patchFlag:s,children:o}=n,a=e?ex(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:a,key:a&&Ip(a),ref:e&&e.ref?t&&r?We(r)?r.concat(ba(e)):[r,ba(e)]:ba(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==_e?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Hr(n.ssContent),ssFallback:n.ssFallback&&Hr(n.ssFallback),el:n.el,anchor:n.anchor}}function De(n=" ",e=0){return Ae(Ps,null,n,e)}function jI(n,e){const t=Ae(xs,null,n);return t.staticCount=e,t}function xn(n="",e=!1){return e?(Pe(),Wn(Sn,null,n)):Ae(Sn,null,n)}function jn(n){return n==null||typeof n=="boolean"?Ae(Sn):We(n)?Ae(_e,null,n.slice()):typeof n=="object"?pi(n):Ae(Ps,null,String(n))}function pi(n){return n.el===null||n.memo?n:Hr(n)}function ol(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(We(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),ol(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(Ba in e)?e._ctx=nn:r===3&&nn&&(nn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ue(e)?(e={default:e,_ctx:nn},t=32):(e=String(e),i&64?(t=16,e=[De(e)]):t=8);n.children=e,n.shapeFlag|=t}function ex(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=mn([e.class,i.class]));else if(r==="style")e.style=en([e.style,i.style]);else if(Gs(r)){const s=e[r],o=i[r];o&&s!==o&&!(We(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function dn(n,e,t,i=null){An(n,e,7,[t,i])}function qr(n,e,t,i){let r;const s=t&&t[i];if(We(n)||st(n)){r=new Array(n.length);for(let o=0,a=n.length;o<a;o++)r[o]=e(n[o],o,void 0,s&&s[o])}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=e(o+1,o,void 0,s&&s[o])}else if(xt(n))if(n[Symbol.iterator])r=Array.from(n,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(n);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(n[l],l,a,s&&s[a])}}else r=[];return t&&(t[i]=r),r}function on(n,e,t={},i,r){if(nn.isCE)return Ae("slot",e==="default"?null:{name:e},i&&i());let s=n[e];s&&s._c&&(s._d=!1),Pe();const o=s&&Tp(s(t)),a=Wn(_e,{key:t.key||`_${e}`},o||(i?i():[]),o&&n._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function Tp(n){return n.some(e=>Va(e)?!(e.type===Sn||e.type===_e&&!Tp(e.children)):!0)?n:null}const bc=n=>n?Gp(n)?cl(n)||n.proxy:bc(n.parent):null,wa=Tt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>bc(n.parent),$root:n=>bc(n.root),$emit:n=>n.emit,$options:n=>Sp(n),$forceUpdate:n=>()=>el(n.update),$nextTick:n=>$c.bind(n.proxy),$watch:n=>gA.bind(n)}),tx={get({_:n},e){const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:c}=n;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(i!==it&&Be(i,e))return o[e]=1,i[e];if(r!==it&&Be(r,e))return o[e]=2,r[e];if((l=n.propsOptions[0])&&Be(l,e))return o[e]=3,s[e];if(t!==it&&Be(t,e))return o[e]=4,t[e];Ac&&(o[e]=0)}}const u=wa[e];let d,f;if(u)return e==="$attrs"&&an(n,"get",e),u(n);if((d=a.__cssModules)&&(d=d[e]))return d;if(t!==it&&Be(t,e))return o[e]=4,t[e];if(f=c.config.globalProperties,Be(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return r!==it&&Be(r,e)?(r[e]=t,!0):i!==it&&Be(i,e)?(i[e]=t,!0):Be(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==it&&Be(n,o)||e!==it&&Be(e,o)||(a=s[0])&&Be(a,o)||Be(i,o)||Be(wa,o)||Be(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?this.set(n,e,t.get(),null):t.value!=null&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}},nx=Mp();let ix=0;function rx(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||nx,s={uid:ix++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Pm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:gp(i,r),emitsOptions:cp(i,r),emit:null,emitted:null,propsDefaults:it,inheritAttrs:i.inheritAttrs,ctx:it,data:it,props:it,attrs:it,slots:it,refs:it,setupState:it,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=hA.bind(null,s),n.ce&&n.ce(s),s}let St=null;const Hp=()=>St||nn,Gr=n=>{St=n,n.scope.on()},Yi=()=>{St&&St.scope.off(),St=null};function Gp(n){return n.vnode.shapeFlag&4}let Vr=!1;function sx(n,e=!1){Vr=e;const{props:t,children:i}=n.vnode,r=Gp(n);zA(n,t,r,e),UA(n,i);const s=r?ax(n,e):void 0;return Vr=!1,s}function ax(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=_f(new Proxy(n.ctx,tx));const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?cx(n):null;Gr(n),Er();const s=bi(i,n,0,[n.props,r]);if(Jr(),Yi(),Wf(s)){if(s.then(Yi,Yi),e)return s.then(o=>{tu(n,o,e)}).catch(o=>{Vs(o,n,0)});n.asyncDep=s}else tu(n,s,e)}else Vp(n,e)}function tu(n,e,t){Ue(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:xt(e)&&(n.setupState=ip(e)),Vp(n,t)}let nu;function Vp(n,e,t){const i=n.type;if(!n.render){if(!e&&nu&&!i.render){const r=i.template;if(r){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:c}=i,l=Tt(Tt({isCustomElement:s,delimiters:a},o),c);i.render=nu(r,l)}}n.render=i.render||kn}Gr(n),Er(),GA(n),Jr(),Yi()}function ox(n){return new Proxy(n.attrs,{get(e,t){return an(n,"get","$attrs"),e[t]}})}function cx(n){const e=i=>{n.exposed=i||{}};let t;return{get attrs(){return t||(t=ox(n))},slots:n.slots,emit:n.emit,expose:e}}function cl(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(ip(_f(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in wa)return wa[t](n)}}))}function lx(n){return Ue(n)&&n.displayName||n.name}function ux(n){return Ue(n)&&"__vccOpts"in n}const dt=(n,e)=>cA(n,e,Vr);function lt(n,e,t){const i=arguments.length;return i===2?xt(e)&&!We(e)?Va(e)?Ae(n,null,[e]):Ae(n,e):Ae(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Va(t)&&(t=[t]),Ae(n,e,t))}const dx="3.2.31",fx="http://www.w3.org/2000/svg",Di=typeof document!="undefined"?document:null,iu=Di&&Di.createElement("template"),px={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e?Di.createElementNS(fx,n):Di.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Di.createTextNode(n),createComment:n=>Di.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Di.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},cloneNode(n){const e=n.cloneNode(!0);return"_value"in n&&(e._value=n._value),e},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{iu.innerHTML=i?`<svg>${n}</svg>`:n;const a=iu.content;if(i){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function hx(n,e,t){const i=n._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function mx(n,e,t){const i=n.style,r=st(t);if(t&&!r){for(const s in t)gc(i,s,t[s]);if(e&&!st(e))for(const s in e)t[s]==null&&gc(i,s,"")}else{const s=i.display;r?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(i.display=s)}}const ru=/\s*!important$/;function gc(n,e,t){if(We(t))t.forEach(i=>gc(n,e,i));else if(e.startsWith("--"))n.setProperty(e,t);else{const i=Ax(n,e);ru.test(t)?n.setProperty(er(i),t.replace(ru,""),"important"):n[i]=t}}const su=["Webkit","Moz","ms"],bo={};function Ax(n,e){const t=bo[e];if(t)return t;let i=Dn(e);if(i!=="filter"&&i in n)return bo[e]=i;i=Ja(i);for(let r=0;r<su.length;r++){const s=su[r]+i;if(s in n)return bo[e]=s}return e}const au="http://www.w3.org/1999/xlink";function xx(n,e,t,i,r){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(au,e.slice(6,e.length)):n.setAttributeNS(au,e,t);else{const s=Am(e);t==null||s&&!Vf(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function Sx(n,e,t,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),n[e]=t==null?"":t;return}if(e==="value"&&n.tagName!=="PROGRESS"&&!n.tagName.includes("-")){n._value=t;const a=t==null?"":t;(n.value!==a||n.tagName==="OPTION")&&(n.value=a),t==null&&n.removeAttribute(e);return}if(t===""||t==null){const a=typeof n[e];if(a==="boolean"){n[e]=Vf(t);return}else if(t==null&&a==="string"){n[e]="",n.removeAttribute(e);return}else if(a==="number"){try{n[e]=0}catch{}n.removeAttribute(e);return}}try{n[e]=t}catch{}}let Na=Date.now,wp=!1;if(typeof window!="undefined"){Na()>document.createEvent("Event").timeStamp&&(Na=()=>performance.now());const n=navigator.userAgent.match(/firefox\/(\d+)/i);wp=!!(n&&Number(n[1])<=53)}let yc=0;const bx=Promise.resolve(),gx=()=>{yc=0},yx=()=>yc||(bx.then(gx),yc=Na());function jx(n,e,t,i){n.addEventListener(e,t,i)}function vx(n,e,t,i){n.removeEventListener(e,t,i)}function Mx(n,e,t,i,r=null){const s=n._vei||(n._vei={}),o=s[e];if(i&&o)o.value=i;else{const[a,c]=kx(e);if(i){const l=s[e]=Ox(i,r);jx(n,a,l,c)}else o&&(vx(n,a,o,c),s[e]=void 0)}}const ou=/(?:Once|Passive|Capture)$/;function kx(n){let e;if(ou.test(n)){e={};let t;for(;t=n.match(ou);)n=n.slice(0,n.length-t[0].length),e[t[0].toLowerCase()]=!0}return[er(n.slice(2)),e]}function Ox(n,e){const t=i=>{const r=i.timeStamp||Na();(wp||r>=t.attached-1)&&An(Px(i,t.value),e,5,[i])};return t.value=n,t.attached=yx(),t}function Px(n,e){if(We(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const cu=/^on[a-z]/,Rx=(n,e,t,i,r=!1,s,o,a,c)=>{e==="class"?hx(n,i,r):e==="style"?mx(n,t,i):Gs(e)?Uc(e)||Mx(n,e,t,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ix(n,e,i,r))?Sx(n,e,i,s,o,a,c):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),xx(n,e,i,r))};function Ix(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&cu.test(e)&&Ue(t)):e==="spellcheck"||e==="draggable"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||cu.test(e)&&st(t)?!1:e in n}const si="transition",Qr="animation",Xa=(n,{slots:e})=>lt(fp,Tx(n),e);Xa.displayName="Transition";const Np={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Xa.props=Tt({},fp.props,Np);const Ri=(n,e=[])=>{We(n)?n.forEach(t=>t(...e)):n&&n(...e)},lu=n=>n?We(n)?n.some(e=>e.length>1):n.length>1:!1;function Tx(n){const e={};for(const H in n)H in Np||(e[H]=n[H]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:c=s,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:d=`${t}-leave-from`,leaveActiveClass:f=`${t}-leave-active`,leaveToClass:m=`${t}-leave-to`}=n,A=Hx(r),h=A&&A[0],p=A&&A[1],{onBeforeEnter:x,onEnter:g,onEnterCancelled:S,onLeave:v,onLeaveCancelled:M,onBeforeAppear:T=x,onAppear:I=g,onAppearCancelled:b=S}=e,P=(H,G,N)=>{nr(H,G?u:a),nr(H,G?l:o),N&&N()},w=(H,G)=>{nr(H,m),nr(H,f),G&&G()},L=H=>(G,N)=>{const J=H?I:g,q=()=>P(G,H,N);Ri(J,[G,q]),uu(()=>{nr(G,H?c:s),ai(G,H?u:a),lu(J)||du(G,i,h,q)})};return Tt(e,{onBeforeEnter(H){Ri(x,[H]),ai(H,s),ai(H,o)},onBeforeAppear(H){Ri(T,[H]),ai(H,c),ai(H,l)},onEnter:L(!1),onAppear:L(!0),onLeave(H,G){const N=()=>w(H,G);ai(H,d),wx(),ai(H,f),uu(()=>{nr(H,d),ai(H,m),lu(v)||du(H,i,p,N)}),Ri(v,[H,N])},onEnterCancelled(H){P(H,!1),Ri(S,[H])},onAppearCancelled(H){P(H,!0),Ri(b,[H])},onLeaveCancelled(H){w(H),Ri(M,[H])}})}function Hx(n){if(n==null)return null;if(xt(n))return[go(n.enter),go(n.leave)];{const e=go(n);return[e,e]}}function go(n){return Lf(n)}function ai(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n._vtc||(n._vtc=new Set)).add(e)}function nr(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const{_vtc:t}=n;t&&(t.delete(e),t.size||(n._vtc=void 0))}function uu(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Gx=0;function du(n,e,t,i){const r=n._endId=++Gx,s=()=>{r===n._endId&&i()};if(t)return setTimeout(s,t);const{type:o,timeout:a,propCount:c}=Vx(n,e);if(!o)return i();const l=o+"end";let u=0;const d=()=>{n.removeEventListener(l,f),s()},f=m=>{m.target===n&&++u>=c&&d()};setTimeout(()=>{u<c&&d()},a+1),n.addEventListener(l,f)}function Vx(n,e){const t=window.getComputedStyle(n),i=A=>(t[A]||"").split(", "),r=i(si+"Delay"),s=i(si+"Duration"),o=fu(r,s),a=i(Qr+"Delay"),c=i(Qr+"Duration"),l=fu(a,c);let u=null,d=0,f=0;e===si?o>0&&(u=si,d=o,f=s.length):e===Qr?l>0&&(u=Qr,d=l,f=c.length):(d=Math.max(o,l),u=d>0?o>l?si:Qr:null,f=u?u===si?s.length:c.length:0);const m=u===si&&/\b(transform|all)(,|$)/.test(t[si+"Property"]);return{type:u,timeout:d,propCount:f,hasTransform:m}}function fu(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>pu(t)+pu(n[i])))}function pu(n){return Number(n.slice(0,-1).replace(",","."))*1e3}function wx(){return document.body.offsetHeight}const Nx={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},vI=(n,e)=>t=>{if(!("key"in t))return;const i=er(t.key);if(e.some(r=>r===i||Nx[r]===i))return n(t)},wr={beforeMount(n,{value:e},{transition:t}){n._vod=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):_r(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),_r(n,!0),i.enter(n)):i.leave(n,()=>{_r(n,!1)}):_r(n,e))},beforeUnmount(n,{value:e}){_r(n,e)}};function _r(n,e){n.style.display=e?n._vod:"none"}const Wx=Tt({patchProp:Rx},px);let yo,hu=!1;function zx(){return yo=hu?yo:FA(Wx),hu=!0,yo}const Dx=(...n)=>{const e=zx().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Lx(i);if(r)return t(r,!0,r instanceof SVGElement)},e};function Lx(n){return st(n)?document.querySelector(n):n}/*!
  * vue-router v4.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Wp=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Fr=n=>Wp?Symbol(n):"_vr_"+n,Ux=Fr("rvlm"),mu=Fr("rvd"),Qa=Fr("r"),ll=Fr("rl"),jc=Fr("rvl"),jr=typeof window!="undefined";function Zx(n){return n.__esModule||Wp&&n[Symbol.toStringTag]==="Module"}const nt=Object.assign;function jo(n,e){const t={};for(const i in e){const r=e[i];t[i]=Array.isArray(r)?r.map(n):n(r)}return t}const bs=()=>{},Ex=/\/$/,Jx=n=>n.replace(Ex,"");function vo(n,e,t="/"){let i,r={},s="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(i=e.slice(0,a),s=e.slice(a+1,c>-1?c:e.length),r=n(s)),c>-1&&(i=i||e.slice(0,c),o=e.slice(c,e.length)),i=Yx(i!=null?i:e,t),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:o}}function qx(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Au(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function Fx(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&Nr(e.matched[i],t.matched[r])&&zp(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Nr(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function zp(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!Cx(n[t],e[t]))return!1;return!0}function Cx(n,e){return Array.isArray(n)?xu(n,e):Array.isArray(e)?xu(e,n):n===e}function xu(n,e){return Array.isArray(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function Yx(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/");let r=t.length-1,s,o;for(s=0;s<i.length;s++)if(o=i[s],!(r===1||o==="."))if(o==="..")r--;else break;return t.slice(0,r).join("/")+"/"+i.slice(s-(s===i.length?1:0)).join("/")}var Rs;(function(n){n.pop="pop",n.push="push"})(Rs||(Rs={}));var gs;(function(n){n.back="back",n.forward="forward",n.unknown=""})(gs||(gs={}));function Kx(n){if(!n)if(jr){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Jx(n)}const Bx=/^[^#]+#/;function Xx(n,e){return n.replace(Bx,"#")+e}function Qx(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const _a=()=>({left:window.pageXOffset,top:window.pageYOffset});function _x(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=Qx(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Su(n,e){return(history.state?history.state.position-e:-1)+n}const vc=new Map;function $x(n,e){vc.set(n,e)}function eS(n){const e=vc.get(n);return vc.delete(n),e}let tS=()=>location.protocol+"//"+location.host;function Dp(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let a=r.includes(n.slice(s))?n.slice(s).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),Au(c,"")}return Au(t,n)+i+r}function nS(n,e,t,i){let r=[],s=[],o=null;const a=({state:f})=>{const m=Dp(n,location),A=t.value,h=e.value;let p=0;if(f){if(t.value=m,e.value=f,o&&o===A){o=null;return}p=h?f.position-h.position:0}else i(m);r.forEach(x=>{x(t.value,A,{delta:p,type:Rs.pop,direction:p?p>0?gs.forward:gs.back:gs.unknown})})};function c(){o=t.value}function l(f){r.push(f);const m=()=>{const A=r.indexOf(f);A>-1&&r.splice(A,1)};return s.push(m),m}function u(){const{history:f}=window;!f.state||f.replaceState(nt({},f.state,{scroll:_a()}),"")}function d(){for(const f of s)f();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:d}}function bu(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?_a():null}}function iS(n){const{history:e,location:t}=window,i={value:Dp(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(c,l,u){const d=n.indexOf("#"),f=d>-1?(t.host&&document.querySelector("base")?n:n.slice(d))+c:tS()+n+c;try{e[u?"replaceState":"pushState"](l,"",f),r.value=l}catch(m){console.error(m),t[u?"replace":"assign"](f)}}function o(c,l){const u=nt({},e.state,bu(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});s(c,u,!0),i.value=c}function a(c,l){const u=nt({},r.value,e.state,{forward:c,scroll:_a()});s(u.current,u,!0);const d=nt({},bu(i.value,c,null),{position:u.position+1},l);s(c,d,!1),i.value=c}return{location:i,state:r,push:a,replace:o}}function rS(n){n=Kx(n);const e=iS(n),t=nS(n,e.state,e.location,e.replace);function i(s,o=!0){o||t.pauseListeners(),history.go(s)}const r=nt({location:"",base:n,go:i,createHref:Xx.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function sS(n){return typeof n=="string"||n&&typeof n=="object"}function Lp(n){return typeof n=="string"||typeof n=="symbol"}const Yn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Up=Fr("nf");var gu;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(gu||(gu={}));function Wr(n,e){return nt(new Error,{type:n,[Up]:!0},e)}function oi(n,e){return n instanceof Error&&Up in n&&(e==null||!!(n.type&e))}const yu="[^/]+?",aS={sensitive:!1,strict:!1,start:!0,end:!0},oS=/[.+*?^${}()[\]/\\]/g;function cS(n,e){const t=nt({},aS,e),i=[];let r=t.start?"^":"";const s=[];for(const l of n){const u=l.length?[]:[90];t.strict&&!l.length&&(r+="/");for(let d=0;d<l.length;d++){const f=l[d];let m=40+(t.sensitive?.25:0);if(f.type===0)d||(r+="/"),r+=f.value.replace(oS,"\\$&"),m+=40;else if(f.type===1){const{value:A,repeatable:h,optional:p,regexp:x}=f;s.push({name:A,repeatable:h,optional:p});const g=x||yu;if(g!==yu){m+=10;try{new RegExp(`(${g})`)}catch(v){throw new Error(`Invalid custom RegExp for param "${A}" (${g}): `+v.message)}}let S=h?`((?:${g})(?:/(?:${g}))*)`:`(${g})`;d||(S=p&&l.length<2?`(?:/${S})`:"/"+S),p&&(S+="?"),r+=S,m+=20,p&&(m+=-8),h&&(m+=-20),g===".*"&&(m+=-50)}u.push(m)}i.push(u)}if(t.strict&&t.end){const l=i.length-1;i[l][i[l].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(l){const u=l.match(o),d={};if(!u)return null;for(let f=1;f<u.length;f++){const m=u[f]||"",A=s[f-1];d[A.name]=m&&A.repeatable?m.split("/"):m}return d}function c(l){let u="",d=!1;for(const f of n){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const m of f)if(m.type===0)u+=m.value;else if(m.type===1){const{value:A,repeatable:h,optional:p}=m,x=A in l?l[A]:"";if(Array.isArray(x)&&!h)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const g=Array.isArray(x)?x.join("/"):x;if(!g)if(p)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${A}"`);u+=g}}return u}return{re:o,score:i,keys:s,parse:a,stringify:c}}function lS(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===40+40?-1:1:n.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function uS(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=lS(i[t],r[t]);if(s)return s;t++}return r.length-i.length}const dS={type:0,value:""},fS=/[a-zA-Z0-9_]/;function pS(n){if(!n)return[[]];if(n==="/")return[[dS]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(m){throw new Error(`ERR (${t})/"${l}": ${m}`)}let t=0,i=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,c,l="",u="";function d(){!l||(t===0?s.push({type:0,value:l}):t===1||t===2||t===3?(s.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<n.length;){if(c=n[a++],c==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:c==="/"?(l&&d(),o()):c===":"?(d(),t=1):f();break;case 4:f(),t=i;break;case 1:c==="("?t=2:fS.test(c)?f():(d(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:t=3:u+=c;break;case 3:d(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${l}"`),d(),o(),r}function hS(n,e,t){const i=cS(pS(n.path),t),r=nt(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function mS(n,e){const t=[],i=new Map;e=vu({strict:!1,end:!0,sensitive:!1},e);function r(u){return i.get(u)}function s(u,d,f){const m=!f,A=xS(u);A.aliasOf=f&&f.record;const h=vu(e,u),p=[A];if("alias"in u){const S=typeof u.alias=="string"?[u.alias]:u.alias;for(const v of S)p.push(nt({},A,{components:f?f.record.components:A.components,path:v,aliasOf:f?f.record:A}))}let x,g;for(const S of p){const{path:v}=S;if(d&&v[0]!=="/"){const M=d.record.path,T=M[M.length-1]==="/"?"":"/";S.path=d.record.path+(v&&T+v)}if(x=hS(S,d,h),f?f.alias.push(x):(g=g||x,g!==x&&g.alias.push(x),m&&u.name&&!ju(x)&&o(u.name)),"children"in A){const M=A.children;for(let T=0;T<M.length;T++)s(M[T],x,f&&f.children[T])}f=f||x,c(x)}return g?()=>{o(g)}:bs}function o(u){if(Lp(u)){const d=i.get(u);d&&(i.delete(u),t.splice(t.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=t.indexOf(u);d>-1&&(t.splice(d,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function c(u){let d=0;for(;d<t.length&&uS(u,t[d])>=0&&(u.record.path!==t[d].record.path||!Zp(u,t[d]));)d++;t.splice(d,0,u),u.record.name&&!ju(u)&&i.set(u.record.name,u)}function l(u,d){let f,m={},A,h;if("name"in u&&u.name){if(f=i.get(u.name),!f)throw Wr(1,{location:u});h=f.record.name,m=nt(AS(d.params,f.keys.filter(g=>!g.optional).map(g=>g.name)),u.params),A=f.stringify(m)}else if("path"in u)A=u.path,f=t.find(g=>g.re.test(A)),f&&(m=f.parse(A),h=f.record.name);else{if(f=d.name?i.get(d.name):t.find(g=>g.re.test(d.path)),!f)throw Wr(1,{location:u,currentLocation:d});h=f.record.name,m=nt({},d.params,u.params),A=f.stringify(m)}const p=[];let x=f;for(;x;)p.unshift(x.record),x=x.parent;return{name:h,path:A,params:m,matched:p,meta:bS(p)}}return n.forEach(u=>s(u)),{addRoute:s,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function AS(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function xS(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:SS(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||{}:{default:n.component}}}function SS(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="boolean"?t:t[i];return e}function ju(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function bS(n){return n.reduce((e,t)=>nt(e,t.meta),{})}function vu(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function Zp(n,e){return e.children.some(t=>t===n||Zp(n,t))}const Ep=/#/g,gS=/&/g,yS=/\//g,jS=/=/g,vS=/\?/g,Jp=/\+/g,MS=/%5B/g,kS=/%5D/g,qp=/%5E/g,OS=/%60/g,Fp=/%7B/g,PS=/%7C/g,Cp=/%7D/g,RS=/%20/g;function ul(n){return encodeURI(""+n).replace(PS,"|").replace(MS,"[").replace(kS,"]")}function IS(n){return ul(n).replace(Fp,"{").replace(Cp,"}").replace(qp,"^")}function Mc(n){return ul(n).replace(Jp,"%2B").replace(RS,"+").replace(Ep,"%23").replace(gS,"%26").replace(OS,"`").replace(Fp,"{").replace(Cp,"}").replace(qp,"^")}function TS(n){return Mc(n).replace(jS,"%3D")}function HS(n){return ul(n).replace(Ep,"%23").replace(vS,"%3F")}function GS(n){return n==null?"":HS(n).replace(yS,"%2F")}function Wa(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function VS(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(Jp," "),o=s.indexOf("="),a=Wa(o<0?s:s.slice(0,o)),c=o<0?null:Wa(s.slice(o+1));if(a in e){let l=e[a];Array.isArray(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Mu(n){let e="";for(let t in n){const i=n[t];if(t=TS(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(Array.isArray(i)?i.map(s=>s&&Mc(s)):[i&&Mc(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function wS(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=Array.isArray(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}function $r(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n,reset:t}}function hi(n,e,t,i,r){const s=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=d=>{d===!1?a(Wr(4,{from:t,to:e})):d instanceof Error?a(d):sS(d)?a(Wr(2,{from:e,to:d})):(s&&i.enterCallbacks[r]===s&&typeof d=="function"&&s.push(d),o())},l=n.call(i&&i.instances[r],e,t,c);let u=Promise.resolve(l);n.length<3&&(u=u.then(c)),u.catch(d=>a(d))})}function Mo(n,e,t,i){const r=[];for(const s of n)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(NS(a)){const l=(a.__vccOpts||a)[e];l&&r.push(hi(l,t,i,s,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=Zx(l)?l.default:l;s.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&hi(f,t,i,s,o)()}))}}return r}function NS(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function ku(n){const e=Rt(Qa),t=Rt(ll),i=dt(()=>e.resolve(qi(n.to))),r=dt(()=>{const{matched:c}=i.value,{length:l}=c,u=c[l-1],d=t.matched;if(!u||!d.length)return-1;const f=d.findIndex(Nr.bind(null,u));if(f>-1)return f;const m=Ou(c[l-2]);return l>1&&Ou(u)===m&&d[d.length-1].path!==m?d.findIndex(Nr.bind(null,c[l-2])):f}),s=dt(()=>r.value>-1&&LS(t.params,i.value.params)),o=dt(()=>r.value>-1&&r.value===t.matched.length-1&&zp(t.params,i.value.params));function a(c={}){return DS(c)?e[qi(n.replace)?"replace":"push"](qi(n.to)).catch(bs):Promise.resolve()}return{route:i,href:dt(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const WS=On({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ku,setup(n,{slots:e}){const t=Zt(ku(n)),{options:i}=Rt(Qa),r=dt(()=>({[Pu(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[Pu(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return n.custom?s:lt("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),zS=WS;function DS(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function LS(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!Array.isArray(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function Ou(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Pu=(n,e,t)=>n!=null?n:e!=null?e:t,US=On({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(n,{attrs:e,slots:t}){const i=Rt(jc),r=dt(()=>n.route||i.value),s=Rt(mu,0),o=dt(()=>r.value.matched[s]);Fi(mu,s+1),Fi(Ux,o),Fi(jc,r);const a=et();return wn(()=>[a.value,o.value,n.name],([c,l,u],[d,f,m])=>{l&&(l.instances[u]=c,f&&f!==l&&c&&c===d&&(l.leaveGuards.size||(l.leaveGuards=f.leaveGuards),l.updateGuards.size||(l.updateGuards=f.updateGuards))),c&&l&&(!f||!Nr(l,f)||!d)&&(l.enterCallbacks[u]||[]).forEach(A=>A(c))},{flush:"post"}),()=>{const c=r.value,l=o.value,u=l&&l.components[n.name],d=n.name;if(!u)return Ru(t.default,{Component:u,route:c});const f=l.props[n.name],m=f?f===!0?c.params:typeof f=="function"?f(c):f:null,h=lt(u,nt({},m,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(l.instances[d]=null)},ref:a}));return Ru(t.default,{Component:h,route:c})||h}}});function Ru(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const Yp=US;function ZS(n){const e=mS(n.routes,n),t=n.parseQuery||VS,i=n.stringifyQuery||Mu,r=n.history,s=$r(),o=$r(),a=$r(),c=tp(Yn);let l=Yn;jr&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=jo.bind(null,R=>""+R),d=jo.bind(null,GS),f=jo.bind(null,Wa);function m(R,_){let F,ee;return Lp(R)?(F=e.getRecordMatcher(R),ee=_):ee=R,e.addRoute(ee,F)}function A(R){const _=e.getRecordMatcher(R);_&&e.removeRoute(_)}function h(){return e.getRoutes().map(R=>R.record)}function p(R){return!!e.getRecordMatcher(R)}function x(R,_){if(_=nt({},_||c.value),typeof R=="string"){const xe=vo(t,R,_.path),k=e.resolve({path:xe.path},_),V=r.createHref(xe.fullPath);return nt(xe,k,{params:f(k.params),hash:Wa(xe.hash),redirectedFrom:void 0,href:V})}let F;if("path"in R)F=nt({},R,{path:vo(t,R.path,_.path).path});else{const xe=nt({},R.params);for(const k in xe)xe[k]==null&&delete xe[k];F=nt({},R,{params:d(R.params)}),_.params=d(_.params)}const ee=e.resolve(F,_),me=R.hash||"";ee.params=u(f(ee.params));const ye=qx(i,nt({},R,{hash:IS(me),path:ee.path})),be=r.createHref(ye);return nt({fullPath:ye,hash:me,query:i===Mu?wS(R.query):R.query||{}},ee,{redirectedFrom:void 0,href:be})}function g(R){return typeof R=="string"?vo(t,R,c.value.path):nt({},R)}function S(R,_){if(l!==R)return Wr(8,{from:_,to:R})}function v(R){return I(R)}function M(R){return v(nt(g(R),{replace:!0}))}function T(R){const _=R.matched[R.matched.length-1];if(_&&_.redirect){const{redirect:F}=_;let ee=typeof F=="function"?F(R):F;return typeof ee=="string"&&(ee=ee.includes("?")||ee.includes("#")?ee=g(ee):{path:ee},ee.params={}),nt({query:R.query,hash:R.hash,params:R.params},ee)}}function I(R,_){const F=l=x(R),ee=c.value,me=R.state,ye=R.force,be=R.replace===!0,xe=T(F);if(xe)return I(nt(g(xe),{state:me,force:ye,replace:be}),_||F);const k=F;k.redirectedFrom=_;let V;return!ye&&Fx(i,ee,F)&&(V=Wr(16,{to:k,from:ee}),ce(ee,ee,!0,!1)),(V?Promise.resolve(V):P(k,ee)).catch(U=>oi(U)?oi(U,2)?U:se(U):X(U,k,ee)).then(U=>{if(U){if(oi(U,2))return I(nt(g(U.to),{state:me,force:ye,replace:be}),_||k)}else U=L(k,ee,!0,be,me);return w(k,ee,U),U})}function b(R,_){const F=S(R,_);return F?Promise.reject(F):Promise.resolve()}function P(R,_){let F;const[ee,me,ye]=ES(R,_);F=Mo(ee.reverse(),"beforeRouteLeave",R,_);for(const xe of ee)xe.leaveGuards.forEach(k=>{F.push(hi(k,R,_))});const be=b.bind(null,R,_);return F.push(be),ir(F).then(()=>{F=[];for(const xe of s.list())F.push(hi(xe,R,_));return F.push(be),ir(F)}).then(()=>{F=Mo(me,"beforeRouteUpdate",R,_);for(const xe of me)xe.updateGuards.forEach(k=>{F.push(hi(k,R,_))});return F.push(be),ir(F)}).then(()=>{F=[];for(const xe of R.matched)if(xe.beforeEnter&&!_.matched.includes(xe))if(Array.isArray(xe.beforeEnter))for(const k of xe.beforeEnter)F.push(hi(k,R,_));else F.push(hi(xe.beforeEnter,R,_));return F.push(be),ir(F)}).then(()=>(R.matched.forEach(xe=>xe.enterCallbacks={}),F=Mo(ye,"beforeRouteEnter",R,_),F.push(be),ir(F))).then(()=>{F=[];for(const xe of o.list())F.push(hi(xe,R,_));return F.push(be),ir(F)}).catch(xe=>oi(xe,8)?xe:Promise.reject(xe))}function w(R,_,F){for(const ee of a.list())ee(R,_,F)}function L(R,_,F,ee,me){const ye=S(R,_);if(ye)return ye;const be=_===Yn,xe=jr?history.state:{};F&&(ee||be?r.replace(R.fullPath,nt({scroll:be&&xe&&xe.scroll},me)):r.push(R.fullPath,me)),c.value=R,ce(R,_,F,be),se()}let H;function G(){H=r.listen((R,_,F)=>{const ee=x(R),me=T(ee);if(me){I(nt(me,{replace:!0}),ee).catch(bs);return}l=ee;const ye=c.value;jr&&$x(Su(ye.fullPath,F.delta),_a()),P(ee,ye).catch(be=>oi(be,12)?be:oi(be,2)?(I(be.to,ee).then(xe=>{oi(xe,20)&&!F.delta&&F.type===Rs.pop&&r.go(-1,!1)}).catch(bs),Promise.reject()):(F.delta&&r.go(-F.delta,!1),X(be,ee,ye))).then(be=>{be=be||L(ee,ye,!1),be&&(F.delta?r.go(-F.delta,!1):F.type===Rs.pop&&oi(be,20)&&r.go(-1,!1)),w(ee,ye,be)}).catch(bs)})}let N=$r(),J=$r(),q;function X(R,_,F){se(R);const ee=J.list();return ee.length?ee.forEach(me=>me(R,_,F)):console.error(R),Promise.reject(R)}function Z(){return q&&c.value!==Yn?Promise.resolve():new Promise((R,_)=>{N.add([R,_])})}function se(R){return q||(q=!R,G(),N.list().forEach(([_,F])=>R?F(R):_()),N.reset()),R}function ce(R,_,F,ee){const{scrollBehavior:me}=n;if(!jr||!me)return Promise.resolve();const ye=!F&&eS(Su(R.fullPath,0))||(ee||!F)&&history.state&&history.state.scroll||null;return $c().then(()=>me(R,_,ye)).then(be=>be&&_x(be)).catch(be=>X(be,R,_))}const ve=R=>r.go(R);let C;const oe=new Set;return{currentRoute:c,addRoute:m,removeRoute:A,hasRoute:p,getRoutes:h,resolve:x,options:n,push:v,replace:M,go:ve,back:()=>ve(-1),forward:()=>ve(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:J.add,isReady:Z,install(R){const _=this;R.component("RouterLink",zS),R.component("RouterView",Yp),R.config.globalProperties.$router=_,Object.defineProperty(R.config.globalProperties,"$route",{enumerable:!0,get:()=>qi(c)}),jr&&!C&&c.value===Yn&&(C=!0,v(r.location).catch(me=>{}));const F={};for(const me in Yn)F[me]=dt(()=>c.value[me]);R.provide(Qa,_),R.provide(ll,Zt(F)),R.provide(jc,c);const ee=R.unmount;oe.add(R),R.unmount=function(){oe.delete(R),oe.size<1&&(l=Yn,H&&H(),c.value=Yn,C=!1,q=!1),ee()}}}}function ir(n){return n.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function ES(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(n.matched.find(l=>Nr(l,a))?i.push(a):t.push(a));const c=n.matched[o];c&&(e.matched.find(l=>Nr(l,c))||r.push(c))}return[t,i,r]}function dl(){return Rt(Qa)}function fl(){return Rt(ll)}const JS=On({setup(n,e){const t=et(!1);return Et(()=>{t.value=!0}),()=>{var i,r;return t.value?(r=(i=e.slots).default)===null||r===void 0?void 0:r.call(i):null}}}),qS="modulepreload",Iu={},FS="/compoentlib-vue3/",rt=function(e,t){return!t||t.length===0?e():Promise.all(t.map(i=>{if(i=`${FS}${i}`,i in Iu)return;Iu[i]=!0;const r=i.endsWith(".css"),s=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${s}`))return;const o=document.createElement("link");if(o.rel=r?"stylesheet":qS,r||(o.as="script",o.crossOrigin=""),o.href=i,document.head.appendChild(o),r)return new Promise((a,c)=>{o.addEventListener("load",a),o.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())},Kp={"v-8daa1a0e":qt(()=>rt(()=>import("./index.html.ccbef832.js"),[])),"v-079bb8d2":qt(()=>rt(()=>import("./button.html.609bc9c0.js"),[])),"v-532f46b8":qt(()=>rt(()=>import("./carousel.html.f339b884.js"),[])),"v-221a1e04":qt(()=>rt(()=>import("./input.html.cc5294b1.js"),[])),"v-fa316860":qt(()=>rt(()=>import("./magnifier.html.12598cb9.js"),[])),"v-7952d101":qt(()=>rt(()=>import("./modal.html.5d70e673.js"),[])),"v-2cf1c298":qt(()=>rt(()=>import("./navbar.html.25441bed.js"),[])),"v-22f04c53":qt(()=>rt(()=>import("./polish.html.5aa54d38.js"),[])),"v-5056141c":qt(()=>rt(()=>import("./search.html.b5e5e5aa.js"),[])),"v-e12556a0":qt(()=>rt(()=>import("./three.html.c4ccd388.js"),[])),"v-466f48d8":qt(()=>rt(()=>import("./treeMenus.html.3d1e348c.js"),[])),"v-3706649a":qt(()=>rt(()=>import("./404.html.3d0fde39.js"),[]))},CS={"v-8daa1a0e":()=>rt(()=>import("./index.html.c9ec5c7f.js"),[]).then(({data:n})=>n),"v-079bb8d2":()=>rt(()=>import("./button.html.8e9543e2.js"),[]).then(({data:n})=>n),"v-532f46b8":()=>rt(()=>import("./carousel.html.a0d5febb.js"),[]).then(({data:n})=>n),"v-221a1e04":()=>rt(()=>import("./input.html.03139e46.js"),[]).then(({data:n})=>n),"v-fa316860":()=>rt(()=>import("./magnifier.html.8e38623f.js"),[]).then(({data:n})=>n),"v-7952d101":()=>rt(()=>import("./modal.html.8a215a72.js"),[]).then(({data:n})=>n),"v-2cf1c298":()=>rt(()=>import("./navbar.html.a226fc58.js"),[]).then(({data:n})=>n),"v-22f04c53":()=>rt(()=>import("./polish.html.4c3e9b0c.js"),[]).then(({data:n})=>n),"v-5056141c":()=>rt(()=>import("./search.html.9db4274d.js"),[]).then(({data:n})=>n),"v-e12556a0":()=>rt(()=>import("./three.html.7b10536b.js"),[]).then(({data:n})=>n),"v-466f48d8":()=>rt(()=>import("./treeMenus.html.2b2d8589.js"),[]).then(({data:n})=>n),"v-3706649a":()=>rt(()=>import("./404.html.93146c89.js"),[]).then(({data:n})=>n)},Bp=et(CS),Xp=Bc({key:"",path:"",title:"",lang:"",frontmatter:{},excerpt:"",headers:[]}),Bn=et(Xp),Ns=()=>Bn;Gl.webpackHot&&(__VUE_HMR_RUNTIME__.updatePageData=n=>{Bp.value[n.key]=()=>Promise.resolve(n),n.key===Bn.value.key&&(Bn.value=n)});const Qp=Symbol(""),YS=()=>{const n=Rt(Qp);if(!n)throw new Error("usePageFrontmatter() is called without provider.");return n},_p=Symbol(""),KS=()=>{const n=Rt(_p);if(!n)throw new Error("usePageHead() is called without provider.");return n},BS=Symbol(""),$p=Symbol(""),XS=()=>{const n=Rt($p);if(!n)throw new Error("usePageLang() is called without provider.");return n},pl=Symbol(""),QS=()=>{const n=Rt(pl);if(!n)throw new Error("useRouteLocale() is called without provider.");return n},_S={base:"/compoentlib-vue3/",lang:"zh-CN",title:"Vue3 \u7EC4\u4EF6\u5E93",description:"vue3 + compontent",head:[],locales:{}},mi=et(_S),$S=()=>mi;Gl.webpackHot&&(__VUE_HMR_RUNTIME__.updateSiteData=n=>{mi.value=n});const eh=Symbol(""),MI=()=>{const n=Rt(eh);if(!n)throw new Error("useSiteLocaleData() is called without provider.");return n},eb=Symbol(""),hl=n=>{let e;n.pageKey?e=n.pageKey:e=Ns().value.key;const t=Kp[e];return t?lt(t):lt("div","404 Not Found")};hl.displayName="Content";hl.props={pageKey:{type:String,required:!1}};const tb={"404":qt(()=>rt(()=>import("./404.16b54cc7.js"),[])),Layout:qt(()=>rt(()=>import("./Layout.40a2c490.js"),[]))},nb=([n,e,t])=>n==="meta"&&e.name?`${n}.${e.name}`:["title","base"].includes(n)?n:n==="template"&&e.id?`${n}.${e.id}`:JSON.stringify([n,e,t]),ib=n=>{const e=new Set,t=[];return n.forEach(i=>{const r=nb(i);e.has(r)||(e.add(r),t.push(i))}),t},rb=n=>/^(https?:)?\/\//.test(n),th=n=>Object.prototype.toString.call(n)==="[object Object]",sb=n=>n.replace(/\/$/,""),ab=n=>n.replace(/^\//,""),nh=(n,e)=>{const t=Object.keys(n).sort((i,r)=>{const s=r.split("/").length-i.split("/").length;return s!==0?s:r.length-i.length});for(const i of t)if(e.startsWith(i))return i;return"/"},Tu=On({name:"Vuepress",setup(){const n=Ns(),e=dt(()=>{let t;if(n.value.path){const i=n.value.frontmatter.layout;st(i)?t=i:t="Layout"}else t="404";return tb[t]||ct(t,!1)});return()=>lt(e.value)}}),$a=n=>n,ml=n=>n,ob=n=>rb(n)?n:`${$S().value.base}${ab(n)}`,Vi=Zt({resolvePageData:async n=>{const e=Bp.value[n],t=await(e==null?void 0:e());return t!=null?t:Xp},resolvePageFrontmatter:n=>n.frontmatter,resolvePageHead:(n,e,t)=>{const i=st(e.description)?e.description:t.description,r=[...We(e.head)?e.head:[],...t.head,["title",{},n],["meta",{name:"description",content:i}]];return ib(r)},resolvePageHeadTitle:(n,e)=>`${n.title?`${n.title} | `:""}${e.title}`,resolvePageLang:n=>n.lang||"en",resolveRouteLocale:(n,e)=>nh(n,e),resolveSiteLocaleData:(n,e)=>Mt(Mt({},n),n.locales[e])});const cb=lt("svg",{class:"external-link-icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},[lt("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),lt("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})]),lb=On({name:"ExternalLinkIcon",props:{locales:{type:Object,required:!1,default:()=>({})}},setup(n){const e=QS(),t=dt(()=>{var i;return(i=n.locales[e.value])!==null&&i!==void 0?i:{openInNewWindow:"open in new window"}});return()=>lt("span",[cb,lt("span",{class:"external-link-icon-sr-only"},t.value.openInNewWindow)])}}),ub={"/":{openInNewWindow:"open in new window"}};var db=$a(({app:n})=>{n.component("ExternalLinkIcon",lt(lb,{locales:ub}))});/*! medium-zoom 1.0.6 | MIT License | https://github.com/francoischalifour/medium-zoom */var wi=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Ys=function(e){return e.tagName==="IMG"},fb=function(e){return NodeList.prototype.isPrototypeOf(e)},ga=function(e){return e&&e.nodeType===1},Hu=function(e){var t=e.currentSrc||e.src;return t.substr(-4).toLowerCase()===".svg"},Gu=function(e){try{return Array.isArray(e)?e.filter(Ys):fb(e)?[].slice.call(e).filter(Ys):ga(e)?[e].filter(Ys):typeof e=="string"?[].slice.call(document.querySelectorAll(e)).filter(Ys):[]}catch{throw new TypeError(`The provided selector is invalid.
Expects a CSS selector, a Node element, a NodeList or an array.
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xl="150",Tj=0,id=1,Hj=2,Ah=1,Gj=2,ds=3,ji=0,rn=1,Ai=2,gi=0,Rr=1,rd=2,sd=3,ad=4,Vj=5,vr=100,wj=101,Nj=102,od=103,cd=104,Wj=200,zj=201,Dj=202,Lj=203,xh=204,Sh=205,Uj=206,Zj=207,Ej=208,Jj=209,qj=210,Fj=0,Cj=1,Yj=2,Pc=3,Kj=4,Bj=5,Xj=6,Qj=7,bh=0,_j=1,$j=2,$n=0,ev=1,tv=2,nv=3,iv=4,rv=5,gh=300,zr=301,Dr=302,Rc=303,Ic=304,eo=306,Tc=1e3,vn=1001,Hc=1002,Lt=1003,ld=1004,Po=1005,pn=1006,sv=1007,Is=1008,Xi=1009,av=1010,ov=1011,yh=1012,cv=1013,Zi=1014,Ei=1015,Ts=1016,lv=1017,uv=1018,Ir=1020,dv=1021,Mn=1023,fv=1024,pv=1025,Ki=1026,Lr=1027,hv=1028,mv=1029,Av=1030,xv=1031,Sv=1033,Ro=33776,Io=33777,To=33778,Ho=33779,ud=35840,dd=35841,fd=35842,pd=35843,bv=36196,hd=37492,md=37496,Ad=37808,xd=37809,Sd=37810,bd=37811,gd=37812,yd=37813,jd=37814,vd=37815,Md=37816,kd=37817,Od=37818,Pd=37819,Rd=37820,Id=37821,Go=36492,gv=36283,Td=36284,Hd=36285,Gd=36286,Qi=3e3,ot=3001,yv=3200,jv=3201,jh=0,vv=1,Hn="srgb",Hs="srgb-linear",vh="display-p3",Vo=7680,Mv=519,Vd=35044,wd="300 es",Gc=1035;class Cr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Nd=1234567;const ys=Math.PI/180,La=180/Math.PI;function Yr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function Ct(n,e,t){return Math.max(e,Math.min(t,n))}function Sl(n,e){return(n%e+e)%e}function kv(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Ov(n,e,t){return n!==e?(t-n)/(e-n):0}function js(n,e,t){return(1-t)*n+t*e}function Pv(n,e,t,i){return js(n,e,1-Math.exp(-t*i))}function Rv(n,e=1){return e-Math.abs(Sl(n,e*2)-e)}function Iv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Tv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Hv(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Gv(n,e){return n+Math.random()*(e-n)}function Vv(n){return n*(.5-Math.random())}function wv(n){n!==void 0&&(Nd=n);let e=Nd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Nv(n){return n*ys}function Wv(n){return n*La}function Vc(n){return(n&n-1)===0&&n!==0}function zv(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Mh(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Dv(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+i)/2),u=o((e+i)/2),d=s((e-i)/2),f=o((e-i)/2),m=s((i-e)/2),A=o((i-e)/2);switch(r){case"XYX":n.set(a*u,c*d,c*f,a*l);break;case"YZY":n.set(c*f,a*u,c*d,a*l);break;case"ZXZ":n.set(c*d,c*f,a*u,a*l);break;case"XZX":n.set(a*u,c*A,c*m,a*l);break;case"YXY":n.set(c*m,a*u,c*A,a*l);break;case"ZYZ":n.set(c*A,c*m,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function fs(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Jt(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Lv={DEG2RAD:ys,RAD2DEG:La,generateUUID:Yr,clamp:Ct,euclideanModulo:Sl,mapLinear:kv,inverseLerp:Ov,lerp:js,damp:Pv,pingpong:Rv,smoothstep:Iv,smootherstep:Tv,randInt:Hv,randFloat:Gv,randFloatSpread:Vv,seededRandom:wv,degToRad:Nv,radToDeg:Wv,isPowerOfTwo:Vc,ceilPowerOfTwo:zv,floorPowerOfTwo:Mh,setQuaternionFromProperEuler:Dv,normalize:Jt,denormalize:fs};class tt{constructor(e=0,t=0){tt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ut{constructor(){Ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],f=i[2],m=i[5],A=i[8],h=r[0],p=r[3],x=r[6],g=r[1],S=r[4],v=r[7],M=r[2],T=r[5],I=r[8];return s[0]=o*h+a*g+c*M,s[3]=o*p+a*S+c*T,s[6]=o*x+a*v+c*I,s[1]=l*h+u*g+d*M,s[4]=l*p+u*S+d*T,s[7]=l*x+u*v+d*I,s[2]=f*h+m*g+A*M,s[5]=f*p+m*S+A*T,s[8]=f*x+m*v+A*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,f=a*c-u*s,m=l*s-o*c,A=t*d+i*f+r*m;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const h=1/A;return e[0]=d*h,e[1]=(r*l-u*i)*h,e[2]=(a*i-r*o)*h,e[3]=f*h,e[4]=(u*t-r*c)*h,e[5]=(r*s-a*t)*h,e[6]=m*h,e[7]=(i*c-l*t)*h,e[8]=(o*t-i*s)*h,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(wo.makeScale(e,t)),this}rotate(e){return this.premultiply(wo.makeRotation(-e)),this}translate(e,t){return this.premultiply(wo.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wo=new Ut;function kh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ua(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}class zs{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3];const f=s[o+0],m=s[o+1],A=s[o+2],h=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=A,e[t+3]=h;return}if(d!==h||c!==f||l!==m||u!==A){let p=1-a;const x=c*f+l*m+u*A+d*h,g=x>=0?1:-1,S=1-x*x;if(S>Number.EPSILON){const M=Math.sqrt(S),T=Math.atan2(M,x*g);p=Math.sin(p*T)/M,a=Math.sin(a*T)/M}const v=a*g;if(c=c*p+f*v,l=l*p+m*v,u=u*p+A*v,d=d*p+h*v,p===1-a){const M=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=M,l*=M,u*=M,d*=M}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[o],f=s[o+1],m=s[o+2],A=s[o+3];return e[t]=a*A+u*d+c*m-l*f,e[t+1]=c*A+u*f+l*d-a*m,e[t+2]=l*A+u*m+a*f-c*d,e[t+3]=u*A-a*d-c*f-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(s/2),f=c(i/2),m=c(r/2),A=c(s/2);switch(o){case"XYZ":this._x=f*u*d+l*m*A,this._y=l*m*d-f*u*A,this._z=l*u*A+f*m*d,this._w=l*u*d-f*m*A;break;case"YXZ":this._x=f*u*d+l*m*A,this._y=l*m*d-f*u*A,this._z=l*u*A-f*m*d,this._w=l*u*d+f*m*A;break;case"ZXY":this._x=f*u*d-l*m*A,this._y=l*m*d+f*u*A,this._z=l*u*A+f*m*d,this._w=l*u*d-f*m*A;break;case"ZYX":this._x=f*u*d-l*m*A,this._y=l*m*d+f*u*A,this._z=l*u*A-f*m*d,this._w=l*u*d+f*m*A;break;case"YZX":this._x=f*u*d+l*m*A,this._y=l*m*d+f*u*A,this._z=l*u*A-f*m*d,this._w=l*u*d-f*m*A;break;case"XZY":this._x=f*u*d-l*m*A,this._y=l*m*d-f*u*A,this._z=l*u*A+f*m*d,this._w=l*u*d+f*m*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-l)*m,this._z=(o-r)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(u-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+l)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(s-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(o-r)/m,this._x=(s+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,i=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*r-a*i,u=c*i+a*t-s*r,d=c*r+s*i-o*t,f=-s*t-o*i-a*r;return this.x=l*c+f*-s+u*-a-d*-o,this.y=u*c+f*-o+d*-s-l*-a,this.z=d*c+f*-a+l*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return No.copy(this).projectOnVector(e),this.sub(No)}reflect(e){return this.sub(No.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const No=new Y,Wd=new zs;function Tr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Wo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Uv=new Ut().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Zv=new Ut().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),xi=new Y;function Ev(n){return n.convertSRGBToLinear(),xi.set(n.r,n.g,n.b).applyMatrix3(Zv),n.setRGB(xi.x,xi.y,xi.z)}function Jv(n){return xi.set(n.r,n.g,n.b).applyMatrix3(Uv),n.setRGB(xi.x,xi.y,xi.z).convertLinearToSRGB()}const qv={[Hs]:n=>n,[Hn]:n=>n.convertSRGBToLinear(),[vh]:Ev},Fv={[Hs]:n=>n,[Hn]:n=>n.convertLinearToSRGB(),[vh]:Jv},Wt={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return Hs},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=qv[e],r=Fv[t];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let sr;class Oh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{sr===void 0&&(sr=Ua("canvas")),sr.width=e.width,sr.height=e.height;const i=sr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=sr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=Ua("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Tr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Tr(t[i]/255)*255):t[i]=Tr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Ph{constructor(e=null){this.isSource=!0,this.uuid=Yr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(zo(r[o].image)):s.push(zo(r[o]))}else s=zo(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function zo(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?Oh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cv=0;class sn extends Cr{constructor(e=sn.DEFAULT_IMAGE,t=sn.DEFAULT_MAPPING,i=vn,r=vn,s=pn,o=Is,a=Mn,c=Xi,l=sn.DEFAULT_ANISOTROPY,u=Qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cv++}),this.uuid=Yr(),this.name="",this.source=new Ph(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Tc:e.x=e.x-Math.floor(e.x);break;case vn:e.x=e.x<0?0:1;break;case Hc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Tc:e.y=e.y-Math.floor(e.y);break;case vn:e.y=e.y<0?0:1;break;case Hc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=gh;sn.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,t=0,i=0,r=1){Pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],m=c[5],A=c[9],h=c[2],p=c[6],x=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-h)<.01&&Math.abs(A-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+h)<.1&&Math.abs(A+p)<.1&&Math.abs(l+m+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(l+1)/2,v=(m+1)/2,M=(x+1)/2,T=(u+f)/4,I=(d+h)/4,b=(A+p)/4;return S>v&&S>M?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=T/i,s=I/i):v>M?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=T/r,s=b/r):M<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),i=I/s,r=b/s),this.set(i,r,s,t),this}let g=Math.sqrt((p-A)*(p-A)+(d-h)*(d-h)+(f-u)*(f-u));return Math.abs(g)<.001&&(g=1),this.x=(p-A)/g,this.y=(d-h)/g,this.z=(f-u)/g,this.w=Math.acos((l+m+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _i extends Cr{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new sn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:pn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ph(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rh extends sn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yv extends sn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ds{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.length;c<l;c+=3){const u=e[c],d=e[c+1],f=e[c+2];u<t&&(t=u),d<i&&(i=d),f<r&&(r=f),u>s&&(s=u),d>o&&(o=d),f>a&&(a=f)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.count;c<l;c++){const u=e.getX(c),d=e.getY(c),f=e.getZ(c);u<t&&(t=u),d<i&&(i=d),f<r&&(r=f),u>s&&(s=u),d>o&&(o=d),f>a&&(a=f)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ii.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)Ii.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Ii)}else i.boundingBox===null&&i.computeBoundingBox(),Do.copy(i.boundingBox),Do.applyMatrix4(e.matrixWorld),this.union(Do);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ii),Ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ts),Bs.subVectors(this.max,ts),ar.subVectors(e.a,ts),or.subVectors(e.b,ts),cr.subVectors(e.c,ts),ci.subVectors(or,ar),li.subVectors(cr,or),Ti.subVectors(ar,cr);let t=[0,-ci.z,ci.y,0,-li.z,li.y,0,-Ti.z,Ti.y,ci.z,0,-ci.x,li.z,0,-li.x,Ti.z,0,-Ti.x,-ci.y,ci.x,0,-li.y,li.x,0,-Ti.y,Ti.x,0];return!Lo(t,ar,or,cr,Bs)||(t=[1,0,0,0,1,0,0,0,1],!Lo(t,ar,or,cr,Bs))?!1:(Xs.crossVectors(ci,li),t=[Xs.x,Xs.y,Xs.z],Lo(t,ar,or,cr,Bs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(En),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const En=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Ii=new Y,Do=new Ds,ar=new Y,or=new Y,cr=new Y,ci=new Y,li=new Y,Ti=new Y,ts=new Y,Bs=new Y,Xs=new Y,Hi=new Y;function Lo(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Hi.fromArray(n,s);const a=r.x*Math.abs(Hi.x)+r.y*Math.abs(Hi.y)+r.z*Math.abs(Hi.z),c=e.dot(Hi),l=t.dot(Hi),u=i.dot(Hi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Kv=new Ds,ns=new Y,Uo=new Y;class bl{constructor(e=new Y,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Kv.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ns.subVectors(e,this.center);const t=ns.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ns,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ns.copy(e.center).add(Uo)),this.expandByPoint(ns.copy(e.center).sub(Uo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Jn=new Y,Zo=new Y,Qs=new Y,ui=new Y,Eo=new Y,_s=new Y,Jo=new Y;class Bv{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,t),Jn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Zo.copy(e).add(t).multiplyScalar(.5),Qs.copy(t).sub(e).normalize(),ui.copy(this.origin).sub(Zo);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Qs),a=ui.dot(this.direction),c=-ui.dot(Qs),l=ui.lengthSq(),u=Math.abs(1-o*o);let d,f,m,A;if(u>0)if(d=o*c-a,f=o*a-c,A=s*u,d>=0)if(f>=-A)if(f<=A){const h=1/u;d*=h,f*=h,m=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*c)+l;else f=-s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*c)+l;else f<=-A?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-c),s),m=-d*d+f*(f+2*c)+l):f<=A?(d=0,f=Math.min(Math.max(-s,-c),s),m=f*(f+2*c)+l):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-c),s),m=-d*d+f*(f+2*c)+l);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Zo).addScaledVector(Qs,f),m}intersectSphere(e,t){Jn.subVectors(e.center,this.origin);const i=Jn.dot(this.direction),r=Jn.dot(Jn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,t,i,r,s){Eo.subVectors(t,e),_s.subVectors(i,e),Jo.crossVectors(Eo,_s);let o=this.direction.dot(Jo),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ui.subVectors(this.origin,e);const c=a*this.direction.dot(_s.crossVectors(ui,_s));if(c<0)return null;const l=a*this.direction.dot(Eo.cross(ui));if(l<0||c+l>o)return null;const u=-a*ui.dot(Jo);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bt{constructor(){bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,s,o,a,c,l,u,d,f,m,A,h,p){const x=this.elements;return x[0]=e,x[4]=t,x[8]=i,x[12]=r,x[1]=s,x[5]=o,x[9]=a,x[13]=c,x[2]=l,x[6]=u,x[10]=d,x[14]=f,x[3]=m,x[7]=A,x[11]=h,x[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/lr.setFromMatrixColumn(e,0).length(),s=1/lr.setFromMatrixColumn(e,1).length(),o=1/lr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,m=o*d,A=a*u,h=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=m+A*l,t[5]=f-h*l,t[9]=-a*c,t[2]=h-f*l,t[6]=A+m*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*u,m=c*d,A=l*u,h=l*d;t[0]=f+h*a,t[4]=A*a-m,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=m*a-A,t[6]=h+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*u,m=c*d,A=l*u,h=l*d;t[0]=f-h*a,t[4]=-o*d,t[8]=A+m*a,t[1]=m+A*a,t[5]=o*u,t[9]=h-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*u,m=o*d,A=a*u,h=a*d;t[0]=c*u,t[4]=A*l-m,t[8]=f*l+h,t[1]=c*d,t[5]=h*l+f,t[9]=m*l-A,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,m=o*l,A=a*c,h=a*l;t[0]=c*u,t[4]=h-f*d,t[8]=A*d+m,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=m*d+A,t[10]=f-h*d}else if(e.order==="XZY"){const f=o*c,m=o*l,A=a*c,h=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=f*d+h,t[5]=o*u,t[9]=m*d-A,t[2]=A*d-m,t[6]=a*u,t[10]=h*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xv,e,Qv)}lookAt(e,t,i){const r=this.elements;return Qt.subVectors(e,t),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),di.crossVectors(i,Qt),di.lengthSq()===0&&(Math.abs(i.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),di.crossVectors(i,Qt)),di.normalize(),$s.crossVectors(Qt,di),r[0]=di.x,r[4]=$s.x,r[8]=Qt.x,r[1]=di.y,r[5]=$s.y,r[9]=Qt.y,r[2]=di.z,r[6]=$s.z,r[10]=Qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],f=i[9],m=i[13],A=i[2],h=i[6],p=i[10],x=i[14],g=i[3],S=i[7],v=i[11],M=i[15],T=r[0],I=r[4],b=r[8],P=r[12],w=r[1],L=r[5],H=r[9],G=r[13],N=r[2],J=r[6],q=r[10],X=r[14],Z=r[3],se=r[7],ce=r[11],ve=r[15];return s[0]=o*T+a*w+c*N+l*Z,s[4]=o*I+a*L+c*J+l*se,s[8]=o*b+a*H+c*q+l*ce,s[12]=o*P+a*G+c*X+l*ve,s[1]=u*T+d*w+f*N+m*Z,s[5]=u*I+d*L+f*J+m*se,s[9]=u*b+d*H+f*q+m*ce,s[13]=u*P+d*G+f*X+m*ve,s[2]=A*T+h*w+p*N+x*Z,s[6]=A*I+h*L+p*J+x*se,s[10]=A*b+h*H+p*q+x*ce,s[14]=A*P+h*G+p*X+x*ve,s[3]=g*T+S*w+v*N+M*Z,s[7]=g*I+S*L+v*J+M*se,s[11]=g*b+S*H+v*q+M*ce,s[15]=g*P+S*G+v*X+M*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],m=e[14],A=e[3],h=e[7],p=e[11],x=e[15];return A*(+s*c*d-r*l*d-s*a*f+i*l*f+r*a*m-i*c*m)+h*(+t*c*m-t*l*f+s*o*f-r*o*m+r*l*u-s*c*u)+p*(+t*l*d-t*a*m-s*o*d+i*o*m+s*a*u-i*l*u)+x*(-r*a*u-t*c*d+t*a*f+r*o*d-i*o*f+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],m=e[11],A=e[12],h=e[13],p=e[14],x=e[15],g=d*p*l-h*f*l+h*c*m-a*p*m-d*c*x+a*f*x,S=A*f*l-u*p*l-A*c*m+o*p*m+u*c*x-o*f*x,v=u*h*l-A*d*l+A*a*m-o*h*m-u*a*x+o*d*x,M=A*d*c-u*h*c-A*a*f+o*h*f+u*a*p-o*d*p,T=t*g+i*S+r*v+s*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/T;return e[0]=g*I,e[1]=(h*f*s-d*p*s-h*r*m+i*p*m+d*r*x-i*f*x)*I,e[2]=(a*p*s-h*c*s+h*r*l-i*p*l-a*r*x+i*c*x)*I,e[3]=(d*c*s-a*f*s-d*r*l+i*f*l+a*r*m-i*c*m)*I,e[4]=S*I,e[5]=(u*p*s-A*f*s+A*r*m-t*p*m-u*r*x+t*f*x)*I,e[6]=(A*c*s-o*p*s-A*r*l+t*p*l+o*r*x-t*c*x)*I,e[7]=(o*f*s-u*c*s+u*r*l-t*f*l-o*r*m+t*c*m)*I,e[8]=v*I,e[9]=(A*d*s-u*h*s-A*i*m+t*h*m+u*i*x-t*d*x)*I,e[10]=(o*h*s-A*a*s+A*i*l-t*h*l-o*i*x+t*a*x)*I,e[11]=(u*a*s-o*d*s-u*i*l+t*d*l+o*i*m-t*a*m)*I,e[12]=M*I,e[13]=(u*h*r-A*d*r+A*i*f-t*h*f-u*i*p+t*d*p)*I,e[14]=(A*a*r-o*h*r-A*i*c+t*h*c+o*i*p-t*a*p)*I,e[15]=(o*d*r-u*a*r+u*i*c-t*d*c-o*i*f+t*a*f)*I,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,d=a+a,f=s*l,m=s*u,A=s*d,h=o*u,p=o*d,x=a*d,g=c*l,S=c*u,v=c*d,M=i.x,T=i.y,I=i.z;return r[0]=(1-(h+x))*M,r[1]=(m+v)*M,r[2]=(A-S)*M,r[3]=0,r[4]=(m-v)*T,r[5]=(1-(f+x))*T,r[6]=(p+g)*T,r[7]=0,r[8]=(A+S)*I,r[9]=(p-g)*I,r[10]=(1-(f+h))*I,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=lr.set(r[0],r[1],r[2]).length();const o=lr.set(r[4],r[5],r[6]).length(),a=lr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],bn.copy(this);const l=1/s,u=1/o,d=1/a;return bn.elements[0]*=l,bn.elements[1]*=l,bn.elements[2]*=l,bn.elements[4]*=u,bn.elements[5]*=u,bn.elements[6]*=u,bn.elements[8]*=d,bn.elements[9]*=d,bn.elements[10]*=d,t.setFromRotationMatrix(bn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o){const a=this.elements,c=2*s/(t-e),l=2*s/(i-r),u=(t+e)/(t-e),d=(i+r)/(i-r),f=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=c,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=l,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,s,o){const a=this.elements,c=1/(t-e),l=1/(i-r),u=1/(o-s),d=(t+e)*c,f=(i+r)*l,m=(o+s)*u;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const lr=new Y,bn=new bt,Xv=new Y(0,0,0),Qv=new Y(1,1,1),di=new Y,$s=new Y,Qt=new Y,zd=new bt,Dd=new zs;class to{constructor(e=0,t=0,i=0,r=to.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],d=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ct(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ct(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return zd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Dd.setFromEuler(this),this.setFromQuaternion(Dd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}to.DEFAULT_ORDER="XYZ";class Ih{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _v=0;const Ld=new Y,ur=new zs,qn=new bt,ea=new Y,is=new Y,$v=new Y,eM=new zs,Ud=new Y(1,0,0),Zd=new Y(0,1,0),Ed=new Y(0,0,1),tM={type:"added"},Jd={type:"removed"};class Vt extends Cr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_v++}),this.uuid=Yr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vt.DEFAULT_UP.clone();const e=new Y,t=new to,i=new zs,r=new Y(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new bt},normalMatrix:{value:new Ut}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=Vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Ih,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ur.setFromAxisAngle(e,t),this.quaternion.multiply(ur),this}rotateOnWorldAxis(e,t){return ur.setFromAxisAngle(e,t),this.quaternion.premultiply(ur),this}rotateX(e){return this.rotateOnAxis(Ud,e)}rotateY(e){return this.rotateOnAxis(Zd,e)}rotateZ(e){return this.rotateOnAxis(Ed,e)}translateOnAxis(e,t){return Ld.copy(e).applyQuaternion(this.quaternion),this.position.add(Ld.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ud,e)}translateY(e){return this.translateOnAxis(Zd,e)}translateZ(e){return this.translateOnAxis(Ed,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ea.copy(e):ea.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(is,ea,this.up):qn.lookAt(ea,is,this.up),this.quaternion.setFromRotationMatrix(qn),r&&(qn.extractRotation(r.matrixWorld),ur.setFromRotationMatrix(qn),this.quaternion.premultiply(ur.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(tM)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jd)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Jd)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(qn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,e,$v),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,eM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),m=o(e.animations),A=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),A.length>0&&(i.nodes=A)}return i.object=r,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Vt.DEFAULT_UP=new Y(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gn=new Y,Fn=new Y,qo=new Y,Cn=new Y,dr=new Y,fr=new Y,qd=new Y,Fo=new Y,Co=new Y,Yo=new Y;class Xn{constructor(e=new Y,t=new Y,i=new Y){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),gn.subVectors(e,t),r.cross(gn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){gn.subVectors(r,t),Fn.subVectors(i,t),qo.subVectors(e,t);const o=gn.dot(gn),a=gn.dot(Fn),c=gn.dot(qo),l=Fn.dot(Fn),u=Fn.dot(qo),d=o*l-a*a;if(d===0)return s.set(-2,-1,-1);const f=1/d,m=(l*c-a*u)*f,A=(o*u-a*c)*f;return s.set(1-m-A,A,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Cn),Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getUV(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,Cn),c.set(0,0),c.addScaledVector(s,Cn.x),c.addScaledVector(o,Cn.y),c.addScaledVector(a,Cn.z),c}static isFrontFacing(e,t,i,r){return gn.subVectors(i,t),Fn.subVectors(e,t),gn.cross(Fn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),gn.cross(Fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Xn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Xn.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;dr.subVectors(r,i),fr.subVectors(s,i),Fo.subVectors(e,i);const c=dr.dot(Fo),l=fr.dot(Fo);if(c<=0&&l<=0)return t.copy(i);Co.subVectors(e,r);const u=dr.dot(Co),d=fr.dot(Co);if(u>=0&&d<=u)return t.copy(r);const f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(dr,o);Yo.subVectors(e,s);const m=dr.dot(Yo),A=fr.dot(Yo);if(A>=0&&m<=A)return t.copy(s);const h=m*l-c*A;if(h<=0&&l>=0&&A<=0)return a=l/(l-A),t.copy(i).addScaledVector(fr,a);const p=u*A-m*d;if(p<=0&&d-u>=0&&m-A>=0)return qd.subVectors(s,r),a=(d-u)/(d-u+(m-A)),t.copy(r).addScaledVector(qd,a);const x=1/(p+h+f);return o=h*x,a=f*x,t.copy(i).addScaledVector(dr,o).addScaledVector(fr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let nM=0;class Ls extends Cr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nM++}),this.uuid=Yr(),this.name="",this.type="Material",this.blending=Rr,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=xh,this.blendDst=Sh,this.blendEquation=vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Pc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vo,this.stencilZFail=Vo,this.stencilZPass=Vo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Rr&&(i.blending=this.blending),this.side!==ji&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Th={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yn={h:0,s:0,l:0},ta={h:0,s:0,l:0};function Ko(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class $e{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Wt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Wt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Wt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Wt.workingColorSpace){if(e=Sl(e,1),t=Ct(t,0,1),i=Ct(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Ko(o,s,e+1/3),this.g=Ko(o,s,e),this.b=Ko(o,s,e-1/3)}return Wt.toWorkingColorSpace(this,r),this}setStyle(e,t=Hn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Wt.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Wt.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const c=parseFloat(s[1])/360,l=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return i(s[4]),this.setHSL(c,l,u,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Wt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Wt.toWorkingColorSpace(this,t),this;console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Hn){const i=Th[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Tr(e.r),this.g=Tr(e.g),this.b=Tr(e.b),this}copyLinearToSRGB(e){return this.r=Wo(e.r),this.g=Wo(e.g),this.b=Wo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Hn){return Wt.fromWorkingColorSpace(Gt.copy(this),e),Ct(Gt.r*255,0,255)<<16^Ct(Gt.g*255,0,255)<<8^Ct(Gt.b*255,0,255)<<0}getHexString(e=Hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Wt.workingColorSpace){Wt.fromWorkingColorSpace(Gt.copy(this),t);const i=Gt.r,r=Gt.g,s=Gt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Wt.workingColorSpace){return Wt.fromWorkingColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=Hn){Wt.fromWorkingColorSpace(Gt.copy(this),e);const t=Gt.r,i=Gt.g,r=Gt.b;return e!==Hn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${t*255|0},${i*255|0},${r*255|0})`}offsetHSL(e,t,i){return this.getHSL(yn),yn.h+=e,yn.s+=t,yn.l+=i,this.setHSL(yn.h,yn.s,yn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(yn),e.getHSL(ta);const i=js(yn.h,ta.h,t),r=js(yn.s,ta.s,t),s=js(yn.l,ta.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new $e;$e.NAMES=Th;class Hh extends Ls{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=bh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new Y,na=new tt;class zn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Vd,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)na.fromBufferAttribute(this,t),na.applyMatrix3(e),this.setXY(t,na.x,na.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array),r=Jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array),r=Jt(r,this.array),s=Jt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vd&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Gh extends zn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Vh extends zn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Bi extends zn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let iM=0;const un=new bt,Bo=new Vt,pr=new Y,_t=new Ds,rs=new Ds,kt=new Y;class tr extends Cr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:iM++}),this.uuid=Yr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kh(e)?Vh:Gh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ut().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return un.makeRotationFromQuaternion(e),this.applyMatrix4(un),this}rotateX(e){return un.makeRotationX(e),this.applyMatrix4(un),this}rotateY(e){return un.makeRotationY(e),this.applyMatrix4(un),this}rotateZ(e){return un.makeRotationZ(e),this.applyMatrix4(un),this}translate(e,t,i){return un.makeTranslation(e,t,i),this.applyMatrix4(un),this}scale(e,t,i){return un.makeScale(e,t,i),this.applyMatrix4(un),this}lookAt(e){return Bo.lookAt(e),Bo.updateMatrix(),this.applyMatrix4(Bo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pr).negate(),this.translate(pr.x,pr.y,pr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Bi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ds);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];_t.setFromBufferAttribute(s),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,_t.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,_t.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(_t.min),this.boundingBox.expandByPoint(_t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(_t.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];rs.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(_t.min,rs.min),_t.expandByPoint(kt),kt.addVectors(_t.max,rs.max),_t.expandByPoint(kt)):(_t.expandByPoint(rs.min),_t.expandByPoint(rs.max))}_t.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)kt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(kt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)kt.fromBufferAttribute(a,l),c&&(pr.fromBufferAttribute(e,l),kt.add(pr)),r=Math.max(r,i.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zn(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let w=0;w<a;w++)l[w]=new Y,u[w]=new Y;const d=new Y,f=new Y,m=new Y,A=new tt,h=new tt,p=new tt,x=new Y,g=new Y;function S(w,L,H){d.fromArray(r,w*3),f.fromArray(r,L*3),m.fromArray(r,H*3),A.fromArray(o,w*2),h.fromArray(o,L*2),p.fromArray(o,H*2),f.sub(d),m.sub(d),h.sub(A),p.sub(A);const G=1/(h.x*p.y-p.x*h.y);!isFinite(G)||(x.copy(f).multiplyScalar(p.y).addScaledVector(m,-h.y).multiplyScalar(G),g.copy(m).multiplyScalar(h.x).addScaledVector(f,-p.x).multiplyScalar(G),l[w].add(x),l[L].add(x),l[H].add(x),u[w].add(g),u[L].add(g),u[H].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:i.length}]);for(let w=0,L=v.length;w<L;++w){const H=v[w],G=H.start,N=H.count;for(let J=G,q=G+N;J<q;J+=3)S(i[J+0],i[J+1],i[J+2])}const M=new Y,T=new Y,I=new Y,b=new Y;function P(w){I.fromArray(s,w*3),b.copy(I);const L=l[w];M.copy(L),M.sub(I.multiplyScalar(I.dot(L))).normalize(),T.crossVectors(b,L);const G=T.dot(u[w])<0?-1:1;c[w*4]=M.x,c[w*4+1]=M.y,c[w*4+2]=M.z,c[w*4+3]=G}for(let w=0,L=v.length;w<L;++w){const H=v[w],G=H.start,N=H.count;for(let J=G,q=G+N;J<q;J+=3)P(i[J+0]),P(i[J+1]),P(i[J+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new zn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new Y,s=new Y,o=new Y,a=new Y,c=new Y,l=new Y,u=new Y,d=new Y;if(e)for(let f=0,m=e.count;f<m;f+=3){const A=e.getX(f+0),h=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,A),s.fromBufferAttribute(t,h),o.fromBufferAttribute(t,p),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,A),c.fromBufferAttribute(i,h),l.fromBufferAttribute(i,p),a.add(u),c.add(u),l.add(u),i.setXYZ(A,a.x,a.y,a.z),i.setXYZ(h,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,d=a.normalized,f=new l.constructor(c.length*u);let m=0,A=0;for(let h=0,p=c.length;h<p;h++){a.isInterleavedBufferAttribute?m=c[h]*a.data.stride+a.offset:m=c[h]*u;for(let x=0;x<u;x++)f[A++]=l[m++]}return new zn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new tr,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,i);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){const f=l[u],m=e(f,i);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){const m=l[d];u.push(m.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],d=s[l];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fd=new bt,In=new Bv,ia=new bl,Cd=new Y,ss=new Y,as=new Y,os=new Y,Xo=new Y,ra=new Y,sa=new tt,aa=new tt,oa=new tt,Qo=new Y,ca=new Y;class Qn extends Vt{constructor(e=new tr,t=new Hh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ra.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],d=s[c];u!==0&&(Xo.fromBufferAttribute(d,e),o?ra.addScaledVector(Xo,u):ra.addScaledVector(Xo.sub(t),u))}t.add(ra)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),ia.copy(i.boundingSphere),ia.applyMatrix4(s),In.copy(e.ray).recast(e.near),ia.containsPoint(In.origin)===!1&&(In.intersectSphere(ia,Cd)===null||In.origin.distanceToSquared(Cd)>(e.far-e.near)**2))||(Fd.copy(s).invert(),In.copy(e.ray).applyMatrix4(Fd),i.boundingBox!==null&&In.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,c=i.attributes.position,l=i.attributes.uv,u=i.attributes.uv2,d=i.groups,f=i.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,A=d.length;m<A;m++){const h=d[m],p=r[h.materialIndex],x=Math.max(h.start,f.start),g=Math.min(a.count,Math.min(h.start+h.count,f.start+f.count));for(let S=x,v=g;S<v;S+=3){const M=a.getX(S),T=a.getX(S+1),I=a.getX(S+2);o=la(this,p,e,In,l,u,M,T,I),o&&(o.faceIndex=Math.floor(S/3),o.face.materialIndex=h.materialIndex,t.push(o))}}else{const m=Math.max(0,f.start),A=Math.min(a.count,f.start+f.count);for(let h=m,p=A;h<p;h+=3){const x=a.getX(h),g=a.getX(h+1),S=a.getX(h+2);o=la(this,r,e,In,l,u,x,g,S),o&&(o.faceIndex=Math.floor(h/3),t.push(o))}}else if(c!==void 0)if(Array.isArray(r))for(let m=0,A=d.length;m<A;m++){const h=d[m],p=r[h.materialIndex],x=Math.max(h.start,f.start),g=Math.min(c.count,Math.min(h.start+h.count,f.start+f.count));for(let S=x,v=g;S<v;S+=3){const M=S,T=S+1,I=S+2;o=la(this,p,e,In,l,u,M,T,I),o&&(o.faceIndex=Math.floor(S/3),o.face.materialIndex=h.materialIndex,t.push(o))}}else{const m=Math.max(0,f.start),A=Math.min(c.count,f.start+f.count);for(let h=m,p=A;h<p;h+=3){const x=h,g=h+1,S=h+2;o=la(this,r,e,In,l,u,x,g,S),o&&(o.faceIndex=Math.floor(h/3),t.push(o))}}}}function rM(n,e,t,i,r,s,o,a){let c;if(e.side===rn?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===ji,a),c===null)return null;ca.copy(a),ca.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(ca);return l<t.near||l>t.far?null:{distance:l,point:ca.clone(),object:n}}function la(n,e,t,i,r,s,o,a,c){n.getVertexPosition(o,ss),n.getVertexPosition(a,as),n.getVertexPosition(c,os);const l=rM(n,e,t,i,ss,as,os,Qo);if(l){r&&(sa.fromBufferAttribute(r,o),aa.fromBufferAttribute(r,a),oa.fromBufferAttribute(r,c),l.uv=Xn.getUV(Qo,ss,as,os,sa,aa,oa,new tt)),s&&(sa.fromBufferAttribute(s,o),aa.fromBufferAttribute(s,a),oa.fromBufferAttribute(s,c),l.uv2=Xn.getUV(Qo,ss,as,os,sa,aa,oa,new tt));const u={a:o,b:a,c,normal:new Y,materialIndex:0};Xn.getNormal(ss,as,os,u.normal),l.face=u}return l}class Kr extends tr{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],d=[];let f=0,m=0;A("z","y","x",-1,-1,i,t,e,o,s,0),A("z","y","x",1,-1,i,t,-e,o,s,1),A("x","z","y",1,1,e,i,t,r,o,2),A("x","z","y",1,-1,e,i,-t,r,o,3),A("x","y","z",1,-1,e,t,i,r,s,4),A("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Bi(l,3)),this.setAttribute("normal",new Bi(u,3)),this.setAttribute("uv",new Bi(d,2));function A(h,p,x,g,S,v,M,T,I,b,P){const w=v/I,L=M/b,H=v/2,G=M/2,N=T/2,J=I+1,q=b+1;let X=0,Z=0;const se=new Y;for(let ce=0;ce<q;ce++){const ve=ce*L-G;for(let C=0;C<J;C++){const oe=C*w-H;se[h]=oe*g,se[p]=ve*S,se[x]=N,l.push(se.x,se.y,se.z),se[h]=0,se[p]=0,se[x]=T>0?1:-1,u.push(se.x,se.y,se.z),d.push(C/I),d.push(1-ce/b),X+=1}}for(let ce=0;ce<b;ce++)for(let ve=0;ve<I;ve++){const C=f+ve+J*ce,oe=f+ve+J*(ce+1),Se=f+(ve+1)+J*(ce+1),R=f+(ve+1)+J*ce;c.push(C,oe,R),c.push(oe,Se,R),Z+=6}a.addGroup(m,Z,P),m+=Z,f+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ur(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Dt(n){const e={};for(let t=0;t<n.length;t++){const i=Ur(n[t]);for(const r in i)e[r]=i[r]}return e}function sM(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function wh(n){return n.getRenderTarget()===null&&n.outputEncoding===ot?Hn:Hs}const aM={clone:Ur,merge:Dt};var oM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $i extends Ls{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=oM,this.fragmentShader=cM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ur(e.uniforms),this.uniformsGroups=sM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Nh extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class hn extends Nh{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=La*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ys*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return La*2*Math.atan(Math.tan(ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ys*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const hr=-90,mr=1;class lM extends Vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new hn(hr,mr,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new hn(hr,mr,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new hn(hr,mr,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new hn(hr,mr,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const c=new hn(hr,mr,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new hn(hr,mr,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,c,l]=this.children,u=e.getRenderTarget(),d=e.toneMapping,f=e.xr.enabled;e.toneMapping=$n,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,c),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(t,l),e.setRenderTarget(u),e.toneMapping=d,e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class Wh extends sn{constructor(e,t,i,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:zr,super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class uM extends _i{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Wh(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:pn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Kr(5,5,5),s=new $i({name:"CubemapFromEquirect",uniforms:Ur(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:gi});s.uniforms.tEquirect.value=t;const o=new Qn(r,s),a=t.minFilter;return t.minFilter===Is&&(t.minFilter=pn),new lM(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const _o=new Y,dM=new Y,fM=new Ut;class Ni{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=_o.subVectors(i,t).cross(dM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(_o),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||fM.getNormalMatrix(e),r=this.coplanarPoint(_o).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ar=new bl,ua=new Y;class gl{constructor(e=new Ni,t=new Ni,i=new Ni,r=new Ni,s=new Ni,o=new Ni){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],c=i[4],l=i[5],u=i[6],d=i[7],f=i[8],m=i[9],A=i[10],h=i[11],p=i[12],x=i[13],g=i[14],S=i[15];return t[0].setComponents(a-r,d-c,h-f,S-p).normalize(),t[1].setComponents(a+r,d+c,h+f,S+p).normalize(),t[2].setComponents(a+s,d+l,h+m,S+x).normalize(),t[3].setComponents(a-s,d-l,h-m,S-x).normalize(),t[4].setComponents(a-o,d-u,h-A,S-g).normalize(),t[5].setComponents(a+o,d+u,h+A,S+g).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Ar.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ar)}intersectsSprite(e){return Ar.center.set(0,0,0),Ar.radius=.7071067811865476,Ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ar)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ua.x=r.normal.x>0?e.max.x:e.min.x,ua.y=r.normal.y>0?e.max.y:e.min.y,ua.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ua)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function zh(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function pM(n,e){const t=e.isWebGL2,i=new WeakMap;function r(l,u){const d=l.array,f=l.usage,m=n.createBuffer();n.bindBuffer(u,m),n.bufferData(u,d,f),l.onUploadCallback();let A;if(d instanceof Float32Array)A=5126;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)A=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else A=5123;else if(d instanceof Int16Array)A=5122;else if(d instanceof Uint32Array)A=5125;else if(d instanceof Int32Array)A=5124;else if(d instanceof Int8Array)A=5120;else if(d instanceof Uint8Array)A=5121;else if(d instanceof Uint8ClampedArray)A=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:A,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version}}function s(l,u,d){const f=u.array,m=u.updateRange;n.bindBuffer(d,l),m.count===-1?n.bufferSubData(d,0,f):(t?n.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):n.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);u&&(n.deleteBuffer(u.buffer),i.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const f=i.get(l);(!f||f.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const d=i.get(l);d===void 0?i.set(l,r(l,u)):d.version<l.version&&(s(d.buffer,l,u),d.version=l.version)}return{get:o,remove:a,update:c}}class yl extends tr{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=e/a,f=t/c,m=[],A=[],h=[],p=[];for(let x=0;x<u;x++){const g=x*f-o;for(let S=0;S<l;S++){const v=S*d-s;A.push(v,-g,0),h.push(0,0,1),p.push(S/a),p.push(1-x/c)}}for(let x=0;x<c;x++)for(let g=0;g<a;g++){const S=g+l*x,v=g+l*(x+1),M=g+1+l*(x+1),T=g+1+l*x;m.push(S,v,T),m.push(v,M,T)}this.setIndex(m),this.setAttribute("position",new Bi(A,3)),this.setAttribute("normal",new Bi(h,3)),this.setAttribute("uv",new Bi(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yl(e.width,e.height,e.widthSegments,e.heightSegments)}}var hM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,mM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,AM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,xM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,SM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,bM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gM="vec3 transformed = vec3( position );",yM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jM=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,vM=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,MM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,kM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,OM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,PM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,RM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,IM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,TM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,HM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,GM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,VM=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
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
vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
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
    
    vec2 lodFudge = pow( 1.95, lod ) / fullSize;
	return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
		   g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
}
vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
	vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
	vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
	vec2 fLodSizeInv = 1.0 / fLodSize;
	vec2 cLodSizeInv = 1.0 / cLodSize;
	vec2 fullSize = vec2( textureSize( sampler, 0 ) );
	vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
	vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
	return mix( fSample, cSample, fract( lod ) );
}`,wM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,NM=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,WM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,DM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,LM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,UM="gl_FragColor = linearToOutputTexel( gl_FragColor );",ZM=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,EM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,JM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qM=`#ifdef USE_ENVMAP
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
#endif`,FM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,CM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,YM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,KM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,BM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,XM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,QM=`#ifdef USE_GRADIENTMAP
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
}`,_M=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,$M=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ek=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tk=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nk=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,ik=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,rk=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sk=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ak=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ok=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ck=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,lk=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		vec3 iridescenceF0;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,uk=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,dk=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fk=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,pk=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hk=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mk=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ak=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,xk=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sk=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bk=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gk=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yk=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jk=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vk=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mk=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,kk=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Ok=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Pk=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Rk=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ik=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tk=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hk=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gk=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Vk=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,wk=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Nk=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Wk=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zk=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dk=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Lk=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Uk=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zk=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ek=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jk=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qk=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fk=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Ck=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Yk=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,Kk=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Bk=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xk=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Qk=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_k=`#ifdef USE_SKINNING
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
#endif`,$k=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eO=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tO=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nO=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,iO=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,rO=`#ifdef USE_TRANSMISSION
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
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,sO=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,aO=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,oO=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,cO=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,lO=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,uO=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,dO=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fO=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pO=`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,hO=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mO=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,AO=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xO=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,SO=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,bO=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,gO=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,yO=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,jO=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vO=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,MO=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kO=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,OO=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,PO=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RO=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,IO=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TO=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,HO=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GO=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,VO=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wO=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,NO=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WO=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,zO=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DO=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,LO=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UO=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,ZO=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,EO=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,JO=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <encodings_fragment>
	#include <fog_fragment>
}`,qO=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,FO=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ze={alphamap_fragment:hM,alphamap_pars_fragment:mM,alphatest_fragment:AM,alphatest_pars_fragment:xM,aomap_fragment:SM,aomap_pars_fragment:bM,begin_vertex:gM,beginnormal_vertex:yM,bsdfs:jM,iridescence_fragment:vM,bumpmap_pars_fragment:MM,clipping_planes_fragment:kM,clipping_planes_pars_fragment:OM,clipping_planes_pars_vertex:PM,clipping_planes_vertex:RM,color_fragment:IM,color_pars_fragment:TM,color_pars_vertex:HM,color_vertex:GM,common:VM,cube_uv_reflection_fragment:wM,defaultnormal_vertex:NM,displacementmap_pars_vertex:WM,displacementmap_vertex:zM,emissivemap_fragment:DM,emissivemap_pars_fragment:LM,encodings_fragment:UM,encodings_pars_fragment:ZM,envmap_fragment:EM,envmap_common_pars_fragment:JM,envmap_pars_fragment:qM,envmap_pars_vertex:FM,envmap_physical_pars_fragment:ik,envmap_vertex:CM,fog_vertex:YM,fog_pars_vertex:KM,fog_fragment:BM,fog_pars_fragment:XM,gradientmap_pars_fragment:QM,lightmap_fragment:_M,lightmap_pars_fragment:$M,lights_lambert_fragment:ek,lights_lambert_pars_fragment:tk,lights_pars_begin:nk,lights_toon_fragment:rk,lights_toon_pars_fragment:sk,lights_phong_fragment:ak,lights_phong_pars_fragment:ok,lights_physical_fragment:ck,lights_physical_pars_fragment:lk,lights_fragment_begin:uk,lights_fragment_maps:dk,lights_fragment_end:fk,logdepthbuf_fragment:pk,logdepthbuf_pars_fragment:hk,logdepthbuf_pars_vertex:mk,logdepthbuf_vertex:Ak,map_fragment:xk,map_pars_fragment:Sk,map_particle_fragment:bk,map_particle_pars_fragment:gk,metalnessmap_fragment:yk,metalnessmap_pars_fragment:jk,morphcolor_vertex:vk,morphnormal_vertex:Mk,morphtarget_pars_vertex:kk,morphtarget_vertex:Ok,normal_fragment_begin:Pk,normal_fragment_maps:Rk,normal_pars_fragment:Ik,normal_pars_vertex:Tk,normal_vertex:Hk,normalmap_pars_fragment:Gk,clearcoat_normal_fragment_begin:Vk,clearcoat_normal_fragment_maps:wk,clearcoat_pars_fragment:Nk,iridescence_pars_fragment:Wk,output_fragment:zk,packing:Dk,premultiplied_alpha_fragment:Lk,project_vertex:Uk,dithering_fragment:Zk,dithering_pars_fragment:Ek,roughnessmap_fragment:Jk,roughnessmap_pars_fragment:qk,shadowmap_pars_fragment:Fk,shadowmap_pars_vertex:Ck,shadowmap_vertex:Yk,shadowmask_pars_fragment:Kk,skinbase_vertex:Bk,skinning_pars_vertex:Xk,skinning_vertex:Qk,skinnormal_vertex:_k,specularmap_fragment:$k,specularmap_pars_fragment:eO,tonemapping_fragment:tO,tonemapping_pars_fragment:nO,transmission_fragment:iO,transmission_pars_fragment:rO,uv_pars_fragment:sO,uv_pars_vertex:aO,uv_vertex:oO,uv2_pars_fragment:cO,uv2_pars_vertex:lO,uv2_vertex:uO,worldpos_vertex:dO,background_vert:fO,background_frag:pO,backgroundCube_vert:hO,backgroundCube_frag:mO,cube_vert:AO,cube_frag:xO,depth_vert:SO,depth_frag:bO,distanceRGBA_vert:gO,distanceRGBA_frag:yO,equirect_vert:jO,equirect_frag:vO,linedashed_vert:MO,linedashed_frag:kO,meshbasic_vert:OO,meshbasic_frag:PO,meshlambert_vert:RO,meshlambert_frag:IO,meshmatcap_vert:TO,meshmatcap_frag:HO,meshnormal_vert:GO,meshnormal_frag:VO,meshphong_vert:wO,meshphong_frag:NO,meshphysical_vert:WO,meshphysical_frag:zO,meshtoon_vert:DO,meshtoon_frag:LO,points_vert:UO,points_frag:ZO,shadow_vert:EO,shadow_frag:JO,sprite_vert:qO,sprite_frag:FO},ge={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ut},uv2Transform:{value:new Ut},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ut}}},Gn={basic:{uniforms:Dt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Dt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Dt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Dt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Dt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Dt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Dt([ge.points,ge.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Dt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Dt([ge.common,ge.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Dt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Dt([ge.sprite,ge.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:Dt([ge.common,ge.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:Dt([ge.lights,ge.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};Gn.physical={uniforms:Dt([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new tt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const da={r:0,b:0,g:0};function CO(n,e,t,i,r,s,o){const a=new $e(0);let c=s===!0?0:1,l,u,d=null,f=0,m=null;function A(p,x){let g=!1,S=x.isScene===!0?x.background:null;S&&S.isTexture&&(S=(x.backgroundBlurriness>0?t:e).get(S));const v=n.xr,M=v.getSession&&v.getSession();M&&M.environmentBlendMode==="additive"&&(S=null),S===null?h(a,c):S&&S.isColor&&(h(S,1),g=!0),(n.autoClear||g)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),S&&(S.isCubeTexture||S.mapping===eo)?(u===void 0&&(u=new Qn(new Kr(1,1,1),new $i({name:"BackgroundCubeMaterial",uniforms:Ur(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,I,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=S.encoding!==ot,(d!==S||f!==S.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,d=S,f=S.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Qn(new yl(2,2),new $i({name:"BackgroundMaterial",uniforms:Ur(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=S.encoding!==ot,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||f!==S.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,d=S,f=S.version,m=n.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function h(p,x){p.getRGB(da,wh(n)),i.buffers.color.setClear(da.r,da.g,da.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(p,x=1){a.set(p),c=x,h(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,h(a,c)},render:A}}function YO(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},c=p(null);let l=c,u=!1;function d(N,J,q,X,Z){let se=!1;if(o){const ce=h(X,q,J);l!==ce&&(l=ce,m(l.object)),se=x(N,X,q,Z),se&&g(N,X,q,Z)}else{const ce=J.wireframe===!0;(l.geometry!==X.id||l.program!==q.id||l.wireframe!==ce)&&(l.geometry=X.id,l.program=q.id,l.wireframe=ce,se=!0)}Z!==null&&t.update(Z,34963),(se||u)&&(u=!1,b(N,J,q,X),Z!==null&&n.bindBuffer(34963,t.get(Z).buffer))}function f(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(N){return i.isWebGL2?n.bindVertexArray(N):s.bindVertexArrayOES(N)}function A(N){return i.isWebGL2?n.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function h(N,J,q){const X=q.wireframe===!0;let Z=a[N.id];Z===void 0&&(Z={},a[N.id]=Z);let se=Z[J.id];se===void 0&&(se={},Z[J.id]=se);let ce=se[X];return ce===void 0&&(ce=p(f()),se[X]=ce),ce}function p(N){const J=[],q=[],X=[];for(let Z=0;Z<r;Z++)J[Z]=0,q[Z]=0,X[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:q,attributeDivisors:X,object:N,attributes:{},index:null}}function x(N,J,q,X){const Z=l.attributes,se=J.attributes;let ce=0;const ve=q.getAttributes();for(const C in ve)if(ve[C].location>=0){const Se=Z[C];let R=se[C];if(R===void 0&&(C==="instanceMatrix"&&N.instanceMatrix&&(R=N.instanceMatrix),C==="instanceColor"&&N.instanceColor&&(R=N.instanceColor)),Se===void 0||Se.attribute!==R||R&&Se.data!==R.data)return!0;ce++}return l.attributesNum!==ce||l.index!==X}function g(N,J,q,X){const Z={},se=J.attributes;let ce=0;const ve=q.getAttributes();for(const C in ve)if(ve[C].location>=0){let Se=se[C];Se===void 0&&(C==="instanceMatrix"&&N.instanceMatrix&&(Se=N.instanceMatrix),C==="instanceColor"&&N.instanceColor&&(Se=N.instanceColor));const R={};R.attribute=Se,Se&&Se.data&&(R.data=Se.data),Z[C]=R,ce++}l.attributes=Z,l.attributesNum=ce,l.index=X}function S(){const N=l.newAttributes;for(let J=0,q=N.length;J<q;J++)N[J]=0}function v(N){M(N,0)}function M(N,J){const q=l.newAttributes,X=l.enabledAttributes,Z=l.attributeDivisors;q[N]=1,X[N]===0&&(n.enableVertexAttribArray(N),X[N]=1),Z[N]!==J&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,J),Z[N]=J)}function T(){const N=l.newAttributes,J=l.enabledAttributes;for(let q=0,X=J.length;q<X;q++)J[q]!==N[q]&&(n.disableVertexAttribArray(q),J[q]=0)}function I(N,J,q,X,Z,se){i.isWebGL2===!0&&(q===5124||q===5125)?n.vertexAttribIPointer(N,J,q,Z,se):n.vertexAttribPointer(N,J,q,X,Z,se)}function b(N,J,q,X){if(i.isWebGL2===!1&&(N.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();const Z=X.attributes,se=q.getAttributes(),ce=J.defaultAttributeValues;for(const ve in se){const C=se[ve];if(C.location>=0){let oe=Z[ve];if(oe===void 0&&(ve==="instanceMatrix"&&N.instanceMatrix&&(oe=N.instanceMatrix),ve==="instanceColor"&&N.instanceColor&&(oe=N.instanceColor)),oe!==void 0){const Se=oe.normalized,R=oe.itemSize,_=t.get(oe);if(_===void 0)continue;const F=_.buffer,ee=_.type,me=_.bytesPerElement;if(oe.isInterleavedBufferAttribute){const ye=oe.data,be=ye.stride,xe=oe.offset;if(ye.isInstancedInterleavedBuffer){for(let k=0;k<C.locationSize;k++)M(C.location+k,ye.meshPerAttribute);N.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let k=0;k<C.locationSize;k++)v(C.location+k);n.bindBuffer(34962,F);for(let k=0;k<C.locationSize;k++)I(C.location+k,R/C.locationSize,ee,Se,be*me,(xe+R/C.locationSize*k)*me)}else{if(oe.isInstancedBufferAttribute){for(let ye=0;ye<C.locationSize;ye++)M(C.location+ye,oe.meshPerAttribute);N.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ye=0;ye<C.locationSize;ye++)v(C.location+ye);n.bindBuffer(34962,F);for(let ye=0;ye<C.locationSize;ye++)I(C.location+ye,R/C.locationSize,ee,Se,R*me,R/C.locationSize*ye*me)}}else if(ce!==void 0){const Se=ce[ve];if(Se!==void 0)switch(Se.length){case 2:n.vertexAttrib2fv(C.location,Se);break;case 3:n.vertexAttrib3fv(C.location,Se);break;case 4:n.vertexAttrib4fv(C.location,Se);break;default:n.vertexAttrib1fv(C.location,Se)}}}}T()}function P(){H();for(const N in a){const J=a[N];for(const q in J){const X=J[q];for(const Z in X)A(X[Z].object),delete X[Z];delete J[q]}delete a[N]}}function w(N){if(a[N.id]===void 0)return;const J=a[N.id];for(const q in J){const X=J[q];for(const Z in X)A(X[Z].object),delete X[Z];delete J[q]}delete a[N.id]}function L(N){for(const J in a){const q=a[J];if(q[N.id]===void 0)continue;const X=q[N.id];for(const Z in X)A(X[Z].object),delete X[Z];delete q[N.id]}}function H(){G(),u=!0,l!==c&&(l=c,m(l.object))}function G(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:H,resetDefaultState:G,dispose:P,releaseStatesOfGeometry:w,releaseStatesOfProgram:L,initAttributes:S,enableAttribute:v,disableUnusedAttributes:T}}function KO(n,e,t,i){const r=i.isWebGL2;let s;function o(l){s=l}function a(l,u){n.drawArrays(s,l,u),t.update(u,s,1)}function c(l,u,d){if(d===0)return;let f,m;if(r)f=n,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,l,u,d),t.update(u,s,d)}this.setMode=o,this.render=a,this.renderInstances=c}function BO(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(I){if(I==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&n instanceof WebGL2RenderingContext;let a=t.precision!==void 0?t.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=n.getParameter(34930),f=n.getParameter(35660),m=n.getParameter(3379),A=n.getParameter(34076),h=n.getParameter(34921),p=n.getParameter(36347),x=n.getParameter(36348),g=n.getParameter(36349),S=f>0,v=o||e.has("OES_texture_float"),M=S&&v,T=o?n.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:A,maxAttributes:h,maxVertexUniforms:p,maxVaryings:x,maxFragmentUniforms:g,vertexTextures:S,floatFragmentTextures:v,floatVertexTextures:M,maxSamples:T}}function XO(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Ni,a=new Ut,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||i!==0||r;return r=f,i=d.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,m){const A=d.clippingPlanes,h=d.clipIntersection,p=d.clipShadows,x=n.get(d);if(!r||A===null||A.length===0||s&&!p)s?u(null):l();else{const g=s?0:i,S=g*4;let v=x.clippingState||null;c.value=v,v=u(A,f,S,m);for(let M=0;M!==S;++M)v[M]=t[M];x.clippingState=v,this.numIntersection=h?this.numPlanes:0,this.numPlanes+=g}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,m,A){const h=d!==null?d.length:0;let p=null;if(h!==0){if(p=c.value,A!==!0||p===null){const x=m+h*4,g=f.matrixWorldInverse;a.getNormalMatrix(g),(p===null||p.length<x)&&(p=new Float32Array(x));for(let S=0,v=m;S!==h;++S,v+=4)o.copy(d[S]).applyMatrix4(g,a),o.normal.toArray(p,v),p[v+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=h,e.numIntersection=0,p}}function QO(n){let e=new WeakMap;function t(o,a){return a===Rc?o.mapping=zr:a===Ic&&(o.mapping=Dr),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Rc||a===Ic)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new uM(c.height/2);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Dh extends Nh{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Mr=4,Yd=[.125,.215,.35,.446,.526,.582],Li=20,$o=new Dh,Kd=new $e;let ec=null;const Wi=(1+Math.sqrt(5))/2,xr=1/Wi,Bd=[new Y(1,1,1),new Y(-1,1,1),new Y(1,1,-1),new Y(-1,1,-1),new Y(0,Wi,xr),new Y(0,Wi,-xr),new Y(xr,0,Wi),new Y(-xr,0,Wi),new Y(Wi,xr,0),new Y(-Wi,xr,0)];class Xd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){ec=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$d(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_d(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ec),e.scissorTest=!1,fa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zr||e.mapping===Dr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ec=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:Ts,format:Mn,encoding:Qi,depthBuffer:!1},r=Qd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qd(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_O(s)),this._blurMaterial=$O(s,e,t)}return r}_compileMaterial(e){const t=new Qn(this._lodPlanes[0],e);this._renderer.compile(t,$o)}_sceneToCubeUV(e,t,i,r){const a=new hn(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Kd),u.toneMapping=$n,u.autoClear=!1;const m=new Hh({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),A=new Qn(new Kr,m);let h=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,h=!0):(m.color.copy(Kd),h=!0);for(let x=0;x<6;x++){const g=x%3;g===0?(a.up.set(0,c[x],0),a.lookAt(l[x],0,0)):g===1?(a.up.set(0,0,c[x]),a.lookAt(0,l[x],0)):(a.up.set(0,c[x],0),a.lookAt(0,0,l[x]));const S=this._cubeSize;fa(r,g*S,x>2?S:0,S,S),u.setRenderTarget(r),h&&u.render(A,a),u.render(e,a)}A.geometry.dispose(),A.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===zr||e.mapping===Dr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=$d()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_d());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Qn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;fa(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,$o)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Bd[(r-1)%Bd.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Qn(this._lodPlanes[r],l),f=l.uniforms,m=this._sizeLods[i]-1,A=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Li-1),h=s/A,p=isFinite(s)?1+Math.floor(u*h):Li;p>Li&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Li}`);const x=[];let g=0;for(let I=0;I<Li;++I){const b=I/h,P=Math.exp(-b*b/2);x.push(P),I===0?g+=P:I<p&&(g+=2*P)}for(let I=0;I<x.length;I++)x[I]=x[I]/g;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=x,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:S}=this;f.dTheta.value=A,f.mipInt.value=S-i;const v=this._sizeLods[r],M=3*v*(r>S-Mr?r-S+Mr:0),T=4*(this._cubeSize-v);fa(t,M,T,3*v,2*v),c.setRenderTarget(t),c.render(d,$o)}}function _O(n){const e=[],t=[],i=[];let r=n;const s=n-Mr+1+Yd.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>n-Mr?c=Yd[o-n+Mr-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,A=6,h=3,p=2,x=1,g=new Float32Array(h*A*m),S=new Float32Array(p*A*m),v=new Float32Array(x*A*m);for(let T=0;T<m;T++){const I=T%3*2/3-1,b=T>2?0:-1,P=[I,b,0,I+2/3,b,0,I+2/3,b+1,0,I,b,0,I+2/3,b+1,0,I,b+1,0];g.set(P,h*A*T),S.set(f,p*A*T);const w=[T,T,T,T,T,T];v.set(w,x*A*T)}const M=new tr;M.setAttribute("position",new zn(g,h)),M.setAttribute("uv",new zn(S,p)),M.setAttribute("faceIndex",new zn(v,x)),e.push(M),r>Mr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Qd(n,e,t){const i=new _i(n,e,t);return i.texture.mapping=eo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function fa(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function $O(n,e,t){const i=new Float32Array(Li),r=new Y(0,1,0);return new $i({name:"SphericalGaussianBlur",defines:{n:Li,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function _d(){return new $i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jl(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function $d(){return new $i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function jl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function eP(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Rc||c===Ic,u=c===zr||c===Dr;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new Xd(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(l&&d&&d.height>0||u&&d&&r(d)){t===null&&(t=new Xd(n));const f=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function tP(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function nP(n,e,t,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const A in f.attributes)e.remove(f.attributes[A]);f.removeEventListener("dispose",o),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function c(d){const f=d.attributes;for(const A in f)e.update(f[A],34962);const m=d.morphAttributes;for(const A in m){const h=m[A];for(let p=0,x=h.length;p<x;p++)e.update(h[p],34962)}}function l(d){const f=[],m=d.index,A=d.attributes.position;let h=0;if(m!==null){const g=m.array;h=m.version;for(let S=0,v=g.length;S<v;S+=3){const M=g[S+0],T=g[S+1],I=g[S+2];f.push(M,T,T,I,I,M)}}else{const g=A.array;h=A.version;for(let S=0,v=g.length/3-1;S<v;S+=3){const M=S+0,T=S+1,I=S+2;f.push(M,T,T,I,I,M)}}const p=new(kh(f)?Vh:Gh)(f,1);p.version=h;const x=s.get(d);x&&e.remove(x),s.set(d,p)}function u(d){const f=s.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function iP(n,e,t,i){const r=i.isWebGL2;let s;function o(f){s=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function u(f,m){n.drawElements(s,m,a,f*c),t.update(m,s,1)}function d(f,m,A){if(A===0)return;let h,p;if(r)h=n,p="drawElementsInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",h===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,m,a,f*c,A),t.update(m,s,A)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=d}function rP(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function sP(n,e){return n[0]-e[0]}function aP(n,e){return Math.abs(e[1])-Math.abs(n[1])}function oP(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new Pt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,d){const f=l.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,A=m!==void 0?m.length:0;let h=s.get(u);if(h===void 0||h.count!==A){let N=function(){H.dispose(),s.delete(u),u.removeEventListener("dispose",N)};h!==void 0&&h.texture.dispose();const g=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,v=u.morphAttributes.color!==void 0,M=u.morphAttributes.position||[],T=u.morphAttributes.normal||[],I=u.morphAttributes.color||[];let b=0;g===!0&&(b=1),S===!0&&(b=2),v===!0&&(b=3);let P=u.attributes.position.count*b,w=1;P>e.maxTextureSize&&(w=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const L=new Float32Array(P*w*4*A),H=new Rh(L,P,w,A);H.type=Ei,H.needsUpdate=!0;const G=b*4;for(let J=0;J<A;J++){const q=M[J],X=T[J],Z=I[J],se=P*w*4*J;for(let ce=0;ce<q.count;ce++){const ve=ce*G;g===!0&&(o.fromBufferAttribute(q,ce),L[se+ve+0]=o.x,L[se+ve+1]=o.y,L[se+ve+2]=o.z,L[se+ve+3]=0),S===!0&&(o.fromBufferAttribute(X,ce),L[se+ve+4]=o.x,L[se+ve+5]=o.y,L[se+ve+6]=o.z,L[se+ve+7]=0),v===!0&&(o.fromBufferAttribute(Z,ce),L[se+ve+8]=o.x,L[se+ve+9]=o.y,L[se+ve+10]=o.z,L[se+ve+11]=Z.itemSize===4?o.w:1)}}h={count:A,texture:H,size:new tt(P,w)},s.set(u,h),u.addEventListener("dispose",N)}let p=0;for(let g=0;g<f.length;g++)p+=f[g];const x=u.morphTargetsRelative?1:1-p;d.getUniforms().setValue(n,"morphTargetBaseInfluence",x),d.getUniforms().setValue(n,"morphTargetInfluences",f),d.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}else{const m=f===void 0?0:f.length;let A=i[u.id];if(A===void 0||A.length!==m){A=[];for(let S=0;S<m;S++)A[S]=[S,0];i[u.id]=A}for(let S=0;S<m;S++){const v=A[S];v[0]=S,v[1]=f[S]}A.sort(aP);for(let S=0;S<8;S++)S<m&&A[S][1]?(a[S][0]=A[S][0],a[S][1]=A[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(sP);const h=u.morphAttributes.position,p=u.morphAttributes.normal;let x=0;for(let S=0;S<8;S++){const v=a[S],M=v[0],T=v[1];M!==Number.MAX_SAFE_INTEGER&&T?(h&&u.getAttribute("morphTarget"+S)!==h[M]&&u.setAttribute("morphTarget"+S,h[M]),p&&u.getAttribute("morphNormal"+S)!==p[M]&&u.setAttribute("morphNormal"+S,p[M]),r[S]=T,x+=T):(h&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),p&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),r[S]=0)}const g=u.morphTargetsRelative?1:1-x;d.getUniforms().setValue(n,"morphTargetBaseInfluence",g),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:c}}function cP(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,d=e.get(c,u);return r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),d}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const Lh=new sn,Uh=new Rh,Zh=new Yv,Eh=new Wh,ef=[],tf=[],nf=new Float32Array(16),rf=new Float32Array(9),sf=new Float32Array(4);function Br(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=ef[r];if(s===void 0&&(s=new Float32Array(r),ef[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function gt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function yt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function no(n,e){let t=tf[e];t===void 0&&(t=new Int32Array(e),tf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function lP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function uP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;n.uniform2fv(this.addr,e),yt(t,e)}}function dP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;n.uniform3fv(this.addr,e),yt(t,e)}}function fP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;n.uniform4fv(this.addr,e),yt(t,e)}}function pP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(gt(t,i))return;sf.set(i),n.uniformMatrix2fv(this.addr,!1,sf),yt(t,i)}}function hP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(gt(t,i))return;rf.set(i),n.uniformMatrix3fv(this.addr,!1,rf),yt(t,i)}}function mP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(gt(t,i))return;nf.set(i),n.uniformMatrix4fv(this.addr,!1,nf),yt(t,i)}}function AP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function xP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;n.uniform2iv(this.addr,e),yt(t,e)}}function SP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;n.uniform3iv(this.addr,e),yt(t,e)}}function bP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;n.uniform4iv(this.addr,e),yt(t,e)}}function gP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function yP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;n.uniform2uiv(this.addr,e),yt(t,e)}}function jP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;n.uniform3uiv(this.addr,e),yt(t,e)}}function vP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;n.uniform4uiv(this.addr,e),yt(t,e)}}function MP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Lh,r)}function kP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Zh,r)}function OP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Eh,r)}function PP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Uh,r)}function RP(n){switch(n){case 5126:return lP;case 35664:return uP;case 35665:return dP;case 35666:return fP;case 35674:return pP;case 35675:return hP;case 35676:return mP;case 5124:case 35670:return AP;case 35667:case 35671:return xP;case 35668:case 35672:return SP;case 35669:case 35673:return bP;case 5125:return gP;case 36294:return yP;case 36295:return jP;case 36296:return vP;case 35678:case 36198:case 36298:case 36306:case 35682:return MP;case 35679:case 36299:case 36307:return kP;case 35680:case 36300:case 36308:case 36293:return OP;case 36289:case 36303:case 36311:case 36292:return PP}}function IP(n,e){n.uniform1fv(this.addr,e)}function TP(n,e){const t=Br(e,this.size,2);n.uniform2fv(this.addr,t)}function HP(n,e){const t=Br(e,this.size,3);n.uniform3fv(this.addr,t)}function GP(n,e){const t=Br(e,this.size,4);n.uniform4fv(this.addr,t)}function VP(n,e){const t=Br(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function wP(n,e){const t=Br(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function NP(n,e){const t=Br(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function WP(n,e){n.uniform1iv(this.addr,e)}function zP(n,e){n.uniform2iv(this.addr,e)}function DP(n,e){n.uniform3iv(this.addr,e)}function LP(n,e){n.uniform4iv(this.addr,e)}function UP(n,e){n.uniform1uiv(this.addr,e)}function ZP(n,e){n.uniform2uiv(this.addr,e)}function EP(n,e){n.uniform3uiv(this.addr,e)}function JP(n,e){n.uniform4uiv(this.addr,e)}function qP(n,e,t){const i=this.cache,r=e.length,s=no(t,r);gt(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Lh,s[o])}function FP(n,e,t){const i=this.cache,r=e.length,s=no(t,r);gt(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Zh,s[o])}function CP(n,e,t){const i=this.cache,r=e.length,s=no(t,r);gt(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Eh,s[o])}function YP(n,e,t){const i=this.cache,r=e.length,s=no(t,r);gt(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Uh,s[o])}function KP(n){switch(n){case 5126:return IP;case 35664:return TP;case 35665:return HP;case 35666:return GP;case 35674:return VP;case 35675:return wP;case 35676:return NP;case 5124:case 35670:return WP;case 35667:case 35671:return zP;case 35668:case 35672:return DP;case 35669:case 35673:return LP;case 5125:return UP;case 36294:return ZP;case 36295:return EP;case 36296:return JP;case 35678:case 36198:case 36298:case 36306:case 35682:return qP;case 35679:case 36299:case 36307:return FP;case 35680:case 36300:case 36308:case 36293:return CP;case 36289:case 36303:case 36311:case 36292:return YP}}class BP{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=RP(t.type)}}class XP{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=KP(t.type)}}class QP{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const tc=/(\w+)(\])?(\[|\.)?/g;function af(n,e){n.seq.push(e),n.map[e.id]=e}function _P(n,e,t){const i=n.name,r=i.length;for(tc.lastIndex=0;;){const s=tc.exec(i),o=tc.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){af(t,l===void 0?new BP(a,n,e):new XP(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new QP(a),af(t,d)),t=d}}}class ya{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);_P(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function of(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let $P=0;function e1(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function t1(n){switch(n){case Qi:return["Linear","( value )"];case ot:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function cf(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+e1(n.getShaderSource(e),o)}else return r}function n1(n,e){const t=t1(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function i1(n,e){let t;switch(e){case ev:t="Linear";break;case tv:t="Reinhard";break;case nv:t="OptimizedCineon";break;case iv:t="ACESFilmic";break;case rv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function r1(n){return[n.extensionDerivatives||!!n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ps).join(`
`)}function s1(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function a1(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ps(n){return n!==""}function lf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function uf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const o1=/^[ \t]*#include +<([\w\d./]+)>/gm;function wc(n){return n.replace(o1,c1)}function c1(n,e){const t=Ze[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return wc(t)}const l1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function df(n){return n.replace(l1,u1)}function u1(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ff(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function d1(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ah?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Gj?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ds&&(e="SHADOWMAP_TYPE_VSM"),e}function f1(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case zr:case Dr:e="ENVMAP_TYPE_CUBE";break;case eo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function p1(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Dr:e="ENVMAP_MODE_REFRACTION";break}return e}function h1(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case bh:e="ENVMAP_BLENDING_MULTIPLY";break;case _j:e="ENVMAP_BLENDING_MIX";break;case $j:e="ENVMAP_BLENDING_ADD";break}return e}function m1(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function A1(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=d1(t),l=f1(t),u=p1(t),d=h1(t),f=m1(t),m=t.isWebGL2?"":r1(t),A=s1(s),h=r.createProgram();let p,x,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[A].filter(ps).join(`
`),p.length>0&&(p+=`
`),x=[m,A].filter(ps).join(`
`),x.length>0&&(x+=`
`)):(p=[ff(t),"#define SHADER_NAME "+t.shaderName,A,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ps).join(`
`),x=[m,ff(t),"#define SHADER_NAME "+t.shaderName,A,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$n?"#define TONE_MAPPING":"",t.toneMapping!==$n?Ze.tonemapping_pars_fragment:"",t.toneMapping!==$n?i1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.encodings_pars_fragment,n1("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ps).join(`
`)),o=wc(o),o=lf(o,t),o=uf(o,t),a=wc(a),a=lf(a,t),a=uf(a,t),o=df(o),a=df(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["#define varying in",t.glslVersion===wd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const S=g+p+o,v=g+x+a,M=of(r,35633,S),T=of(r,35632,v);if(r.attachShader(h,M),r.attachShader(h,T),t.index0AttributeName!==void 0?r.bindAttribLocation(h,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(h,0,"position"),r.linkProgram(h),n.debug.checkShaderErrors){const P=r.getProgramInfoLog(h).trim(),w=r.getShaderInfoLog(M).trim(),L=r.getShaderInfoLog(T).trim();let H=!0,G=!0;if(r.getProgramParameter(h,35714)===!1){H=!1;const N=cf(r,M,"vertex"),J=cf(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(h,35715)+`

Program Info Log: `+P+`
`+N+`
`+J)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(w===""||L==="")&&(G=!1);G&&(this.diagnostics={runnable:H,programLog:P,vertexShader:{log:w,prefix:p},fragmentShader:{log:L,prefix:x}})}r.deleteShader(M),r.deleteShader(T);let I;this.getUniforms=function(){return I===void 0&&(I=new ya(r,h)),I};let b;return this.getAttributes=function(){return b===void 0&&(b=a1(r,h)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(h),this.program=void 0},this.name=t.shaderName,this.id=$P++,this.cacheKey=e,this.usedTimes=1,this.program=h,this.vertexShader=M,this.fragmentShader=T,this}let x1=0;class S1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new b1(e),t.set(e,i)),i}}class b1{constructor(e){this.id=x1++,this.code=e,this.usedTimes=0}}function g1(n,e,t,i,r,s,o){const a=new Ih,c=new S1,l=[],u=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(b,P,w,L,H){const G=L.fog,N=H.geometry,J=b.isMeshStandardMaterial?L.environment:null,q=(b.isMeshStandardMaterial?t:e).get(b.envMap||J),X=!!q&&q.mapping===eo?q.image.height:null,Z=A[b.type];b.precision!==null&&(m=r.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const se=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ce=se!==void 0?se.length:0;let ve=0;N.morphAttributes.position!==void 0&&(ve=1),N.morphAttributes.normal!==void 0&&(ve=2),N.morphAttributes.color!==void 0&&(ve=3);let C,oe,Se,R;if(Z){const be=Gn[Z];C=be.vertexShader,oe=be.fragmentShader}else C=b.vertexShader,oe=b.fragmentShader,c.update(b),Se=c.getVertexShaderID(b),R=c.getFragmentShaderID(b);const _=n.getRenderTarget(),F=b.alphaTest>0,ee=b.clearcoat>0,me=b.iridescence>0;return{isWebGL2:u,shaderID:Z,shaderName:b.type,vertexShader:C,fragmentShader:oe,defines:b.defines,customVertexShaderID:Se,customFragmentShaderID:R,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,instancing:H.isInstancedMesh===!0,instancingColor:H.isInstancedMesh===!0&&H.instanceColor!==null,supportsVertexTextures:f,outputEncoding:_===null?n.outputEncoding:_.isXRRenderTarget===!0?_.texture.encoding:Qi,map:!!b.map,matcap:!!b.matcap,envMap:!!q,envMapMode:q&&q.mapping,envMapCubeUVHeight:X,lightMap:!!b.lightMap,aoMap:!!b.aoMap,emissiveMap:!!b.emissiveMap,bumpMap:!!b.bumpMap,normalMap:!!b.normalMap,objectSpaceNormalMap:b.normalMapType===vv,tangentSpaceNormalMap:b.normalMapType===jh,decodeVideoTexture:!!b.map&&b.map.isVideoTexture===!0&&b.map.encoding===ot,clearcoat:ee,clearcoatMap:ee&&!!b.clearcoatMap,clearcoatRoughnessMap:ee&&!!b.clearcoatRoughnessMap,clearcoatNormalMap:ee&&!!b.clearcoatNormalMap,iridescence:me,iridescenceMap:me&&!!b.iridescenceMap,iridescenceThicknessMap:me&&!!b.iridescenceThicknessMap,displacementMap:!!b.displacementMap,roughnessMap:!!b.roughnessMap,metalnessMap:!!b.metalnessMap,specularMap:!!b.specularMap,specularIntensityMap:!!b.specularIntensityMap,specularColorMap:!!b.specularColorMap,opaque:b.transparent===!1&&b.blending===Rr,alphaMap:!!b.alphaMap,alphaTest:F,gradientMap:!!b.gradientMap,sheen:b.sheen>0,sheenColorMap:!!b.sheenColorMap,sheenRoughnessMap:!!b.sheenRoughnessMap,transmission:b.transmission>0,transmissionMap:!!b.transmissionMap,thicknessMap:!!b.thicknessMap,combine:b.combine,vertexTangents:!!b.normalMap&&!!N.attributes.tangent,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUvs:!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatMap||!!b.clearcoatRoughnessMap||!!b.clearcoatNormalMap||!!b.iridescenceMap||!!b.iridescenceThicknessMap||!!b.displacementMap||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||!!b.sheenColorMap||!!b.sheenRoughnessMap,uvsVertexOnly:!(!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatNormalMap||!!b.iridescenceMap||!!b.iridescenceThicknessMap||b.transmission>0||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||b.sheen>0||!!b.sheenColorMap||!!b.sheenRoughnessMap)&&!!b.displacementMap,fog:!!G,useFog:b.fog===!0,fogExp2:G&&G.isFogExp2,flatShading:!!b.flatShading,sizeAttenuation:b.sizeAttenuation,logarithmicDepthBuffer:d,skinning:H.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:ve,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&w.length>0,shadowMapType:n.shadowMap.type,toneMapping:b.toneMapped?n.toneMapping:$n,useLegacyLights:n.useLegacyLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ai,flipSided:b.side===rn,useDepthPacking:!!b.depthPacking,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:b.extensions&&b.extensions.derivatives,extensionFragDepth:b.extensions&&b.extensions.fragDepth,extensionDrawBuffers:b.extensions&&b.extensions.drawBuffers,extensionShaderTextureLOD:b.extensions&&b.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function p(b){const P=[];if(b.shaderID?P.push(b.shaderID):(P.push(b.customVertexShaderID),P.push(b.customFragmentShaderID)),b.defines!==void 0)for(const w in b.defines)P.push(w),P.push(b.defines[w]);return b.isRawShaderMaterial===!1&&(x(P,b),g(P,b),P.push(n.outputEncoding)),P.push(b.customProgramCacheKey),P.join()}function x(b,P){b.push(P.precision),b.push(P.outputEncoding),b.push(P.envMapMode),b.push(P.envMapCubeUVHeight),b.push(P.combine),b.push(P.vertexUvs),b.push(P.fogExp2),b.push(P.sizeAttenuation),b.push(P.morphTargetsCount),b.push(P.morphAttributeCount),b.push(P.numDirLights),b.push(P.numPointLights),b.push(P.numSpotLights),b.push(P.numSpotLightMaps),b.push(P.numHemiLights),b.push(P.numRectAreaLights),b.push(P.numDirLightShadows),b.push(P.numPointLightShadows),b.push(P.numSpotLightShadows),b.push(P.numSpotLightShadowsWithMaps),b.push(P.shadowMapType),b.push(P.toneMapping),b.push(P.numClippingPlanes),b.push(P.numClipIntersection),b.push(P.depthPacking)}function g(b,P){a.disableAll(),P.isWebGL2&&a.enable(0),P.supportsVertexTextures&&a.enable(1),P.instancing&&a.enable(2),P.instancingColor&&a.enable(3),P.map&&a.enable(4),P.matcap&&a.enable(5),P.envMap&&a.enable(6),P.lightMap&&a.enable(7),P.aoMap&&a.enable(8),P.emissiveMap&&a.enable(9),P.bumpMap&&a.enable(10),P.normalMap&&a.enable(11),P.objectSpaceNormalMap&&a.enable(12),P.tangentSpaceNormalMap&&a.enable(13),P.clearcoat&&a.enable(14),P.clearcoatMap&&a.enable(15),P.clearcoatRoughnessMap&&a.enable(16),P.clearcoatNormalMap&&a.enable(17),P.iridescence&&a.enable(18),P.iridescenceMap&&a.enable(19),P.iridescenceThicknessMap&&a.enable(20),P.displacementMap&&a.enable(21),P.specularMap&&a.enable(22),P.roughnessMap&&a.enable(23),P.metalnessMap&&a.enable(24),P.gradientMap&&a.enable(25),P.alphaMap&&a.enable(26),P.alphaTest&&a.enable(27),P.vertexColors&&a.enable(28),P.vertexAlphas&&a.enable(29),P.vertexUvs&&a.enable(30),P.vertexTangents&&a.enable(31),P.uvsVertexOnly&&a.enable(32),b.push(a.mask),a.disableAll(),P.fog&&a.enable(0),P.useFog&&a.enable(1),P.flatShading&&a.enable(2),P.logarithmicDepthBuffer&&a.enable(3),P.skinning&&a.enable(4),P.morphTargets&&a.enable(5),P.morphNormals&&a.enable(6),P.morphColors&&a.enable(7),P.premultipliedAlpha&&a.enable(8),P.shadowMapEnabled&&a.enable(9),P.useLegacyLights&&a.enable(10),P.doubleSided&&a.enable(11),P.flipSided&&a.enable(12),P.useDepthPacking&&a.enable(13),P.dithering&&a.enable(14),P.specularIntensityMap&&a.enable(15),P.specularColorMap&&a.enable(16),P.transmission&&a.enable(17),P.transmissionMap&&a.enable(18),P.thicknessMap&&a.enable(19),P.sheen&&a.enable(20),P.sheenColorMap&&a.enable(21),P.sheenRoughnessMap&&a.enable(22),P.decodeVideoTexture&&a.enable(23),P.opaque&&a.enable(24),b.push(a.mask)}function S(b){const P=A[b.type];let w;if(P){const L=Gn[P];w=aM.clone(L.uniforms)}else w=b.uniforms;return w}function v(b,P){let w;for(let L=0,H=l.length;L<H;L++){const G=l[L];if(G.cacheKey===P){w=G,++w.usedTimes;break}}return w===void 0&&(w=new A1(n,P,b,s),l.push(w)),w}function M(b){if(--b.usedTimes===0){const P=l.indexOf(b);l[P]=l[l.length-1],l.pop(),b.destroy()}}function T(b){c.remove(b)}function I(){c.dispose()}return{getParameters:h,getProgramCacheKey:p,getUniforms:S,acquireProgram:v,releaseProgram:M,releaseShaderCache:T,programs:l,dispose:I}}function y1(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function j1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function pf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function hf(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,m,A,h,p){let x=n[e];return x===void 0?(x={id:d.id,object:d,geometry:f,material:m,groupOrder:A,renderOrder:d.renderOrder,z:h,group:p},n[e]=x):(x.id=d.id,x.object=d,x.geometry=f,x.material=m,x.groupOrder=A,x.renderOrder=d.renderOrder,x.z=h,x.group=p),e++,x}function a(d,f,m,A,h,p){const x=o(d,f,m,A,h,p);m.transmission>0?i.push(x):m.transparent===!0?r.push(x):t.push(x)}function c(d,f,m,A,h,p){const x=o(d,f,m,A,h,p);m.transmission>0?i.unshift(x):m.transparent===!0?r.unshift(x):t.unshift(x)}function l(d,f){t.length>1&&t.sort(d||j1),i.length>1&&i.sort(f||pf),r.length>1&&r.sort(f||pf)}function u(){for(let d=e,f=n.length;d<f;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function v1(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new hf,n.set(i,[o])):r>=s.length?(o=new hf,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function M1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new $e};break;case"SpotLight":t={position:new Y,direction:new Y,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return n[e.id]=t,t}}}function k1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let O1=0;function P1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function R1(n,e){const t=new M1,i=k1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new Y);const s=new Y,o=new bt,a=new bt;function c(u,d){let f=0,m=0,A=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let h=0,p=0,x=0,g=0,S=0,v=0,M=0,T=0,I=0,b=0;u.sort(P1);const P=d===!0?Math.PI:1;for(let L=0,H=u.length;L<H;L++){const G=u[L],N=G.color,J=G.intensity,q=G.distance,X=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)f+=N.r*J*P,m+=N.g*J*P,A+=N.b*J*P;else if(G.isLightProbe)for(let Z=0;Z<9;Z++)r.probe[Z].addScaledVector(G.sh.coefficients[Z],J);else if(G.isDirectionalLight){const Z=t.get(G);if(Z.color.copy(G.color).multiplyScalar(G.intensity*P),G.castShadow){const se=G.shadow,ce=i.get(G);ce.shadowBias=se.bias,ce.shadowNormalBias=se.normalBias,ce.shadowRadius=se.radius,ce.shadowMapSize=se.mapSize,r.directionalShadow[h]=ce,r.directionalShadowMap[h]=X,r.directionalShadowMatrix[h]=G.shadow.matrix,v++}r.directional[h]=Z,h++}else if(G.isSpotLight){const Z=t.get(G);Z.position.setFromMatrixPosition(G.matrixWorld),Z.color.copy(N).multiplyScalar(J*P),Z.distance=q,Z.coneCos=Math.cos(G.angle),Z.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),Z.decay=G.decay,r.spot[x]=Z;const se=G.shadow;if(G.map&&(r.spotLightMap[I]=G.map,I++,se.updateMatrices(G),G.castShadow&&b++),r.spotLightMatrix[x]=se.matrix,G.castShadow){const ce=i.get(G);ce.shadowBias=se.bias,ce.shadowNormalBias=se.normalBias,ce.shadowRadius=se.radius,ce.shadowMapSize=se.mapSize,r.spotShadow[x]=ce,r.spotShadowMap[x]=X,T++}x++}else if(G.isRectAreaLight){const Z=t.get(G);Z.color.copy(N).multiplyScalar(J),Z.halfWidth.set(G.width*.5,0,0),Z.halfHeight.set(0,G.height*.5,0),r.rectArea[g]=Z,g++}else if(G.isPointLight){const Z=t.get(G);if(Z.color.copy(G.color).multiplyScalar(G.intensity*P),Z.distance=G.distance,Z.decay=G.decay,G.castShadow){const se=G.shadow,ce=i.get(G);ce.shadowBias=se.bias,ce.shadowNormalBias=se.normalBias,ce.shadowRadius=se.radius,ce.shadowMapSize=se.mapSize,ce.shadowCameraNear=se.camera.near,ce.shadowCameraFar=se.camera.far,r.pointShadow[p]=ce,r.pointShadowMap[p]=X,r.pointShadowMatrix[p]=G.shadow.matrix,M++}r.point[p]=Z,p++}else if(G.isHemisphereLight){const Z=t.get(G);Z.skyColor.copy(G.color).multiplyScalar(J*P),Z.groundColor.copy(G.groundColor).multiplyScalar(J*P),r.hemi[S]=Z,S++}}g>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ge.LTC_FLOAT_1,r.rectAreaLTC2=ge.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ge.LTC_HALF_1,r.rectAreaLTC2=ge.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=A;const w=r.hash;(w.directionalLength!==h||w.pointLength!==p||w.spotLength!==x||w.rectAreaLength!==g||w.hemiLength!==S||w.numDirectionalShadows!==v||w.numPointShadows!==M||w.numSpotShadows!==T||w.numSpotMaps!==I)&&(r.directional.length=h,r.spot.length=x,r.rectArea.length=g,r.point.length=p,r.hemi.length=S,r.directionalShadow.length=v,r.directionalShadowMap.length=v,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=v,r.pointShadowMatrix.length=M,r.spotLightMatrix.length=T+I-b,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=b,w.directionalLength=h,w.pointLength=p,w.spotLength=x,w.rectAreaLength=g,w.hemiLength=S,w.numDirectionalShadows=v,w.numPointShadows=M,w.numSpotShadows=T,w.numSpotMaps=I,r.version=O1++)}function l(u,d){let f=0,m=0,A=0,h=0,p=0;const x=d.matrixWorldInverse;for(let g=0,S=u.length;g<S;g++){const v=u[g];if(v.isDirectionalLight){const M=r.directional[f];M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(x),f++}else if(v.isSpotLight){const M=r.spot[A];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(x),M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(x),A++}else if(v.isRectAreaLight){const M=r.rectArea[h];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(x),a.identity(),o.copy(v.matrixWorld),o.premultiply(x),a.extractRotation(o),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),h++}else if(v.isPointLight){const M=r.point[m];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(x),m++}else if(v.isHemisphereLight){const M=r.hemi[p];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(x),p++}}}return{setup:c,setupView:l,state:r}}function mf(n,e){const t=new R1(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function c(d){t.setup(i,d)}function l(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function I1(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let c;return a===void 0?(c=new mf(n,e),t.set(s,[c])):o>=a.length?(c=new mf(n,e),a.push(c)):c=a[o],c}function r(){t=new WeakMap}return{get:i,dispose:r}}class T1 extends Ls{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class H1 extends Ls{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new Y,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const G1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,V1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function w1(n,e,t){let i=new gl;const r=new tt,s=new tt,o=new Pt,a=new T1({depthPacking:jv}),c=new H1,l={},u=t.maxTextureSize,d={[ji]:rn,[rn]:ji,[Ai]:Ai},f=new $i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:G1,fragmentShader:V1}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const A=new tr;A.setAttribute("position",new zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const h=new Qn(A,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ah,this.render=function(v,M,T){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||v.length===0)return;const I=n.getRenderTarget(),b=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),w=n.state;w.setBlending(gi),w.buffers.color.setClear(1,1,1,1),w.buffers.depth.setTest(!0),w.setScissorTest(!1);for(let L=0,H=v.length;L<H;L++){const G=v[L],N=G.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const J=N.getFrameExtents();if(r.multiply(J),s.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/J.x),r.x=s.x*J.x,N.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/J.y),r.y=s.y*J.y,N.mapSize.y=s.y)),N.map===null){const X=this.type!==ds?{minFilter:Lt,magFilter:Lt}:{};N.map=new _i(r.x,r.y,X),N.map.texture.name=G.name+".shadowMap",N.camera.updateProjectionMatrix()}n.setRenderTarget(N.map),n.clear();const q=N.getViewportCount();for(let X=0;X<q;X++){const Z=N.getViewport(X);o.set(s.x*Z.x,s.y*Z.y,s.x*Z.z,s.y*Z.w),w.viewport(o),N.updateMatrices(G,X),i=N.getFrustum(),S(M,T,N.camera,G,this.type)}N.isPointLightShadow!==!0&&this.type===ds&&x(N,T),N.needsUpdate=!1}p.needsUpdate=!1,n.setRenderTarget(I,b,P)};function x(v,M){const T=e.update(h);f.defines.VSM_SAMPLES!==v.blurSamples&&(f.defines.VSM_SAMPLES=v.blurSamples,m.defines.VSM_SAMPLES=v.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new _i(r.x,r.y)),f.uniforms.shadow_pass.value=v.map.texture,f.uniforms.resolution.value=v.mapSize,f.uniforms.radius.value=v.radius,n.setRenderTarget(v.mapPass),n.clear(),n.renderBufferDirect(M,null,T,f,h,null),m.uniforms.shadow_pass.value=v.mapPass.texture,m.uniforms.resolution.value=v.mapSize,m.uniforms.radius.value=v.radius,n.setRenderTarget(v.map),n.clear(),n.renderBufferDirect(M,null,T,m,h,null)}function g(v,M,T,I,b,P){let w=null;const L=T.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(L!==void 0)w=L;else if(w=T.isPointLight===!0?c:a,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const H=w.uuid,G=M.uuid;let N=l[H];N===void 0&&(N={},l[H]=N);let J=N[G];J===void 0&&(J=w.clone(),N[G]=J),w=J}return w.visible=M.visible,w.wireframe=M.wireframe,P===ds?w.side=M.shadowSide!==null?M.shadowSide:M.side:w.side=M.shadowSide!==null?M.shadowSide:d[M.side],w.alphaMap=M.alphaMap,w.alphaTest=M.alphaTest,w.map=M.map,w.clipShadows=M.clipShadows,w.clippingPlanes=M.clippingPlanes,w.clipIntersection=M.clipIntersection,w.displacementMap=M.displacementMap,w.displacementScale=M.displacementScale,w.displacementBias=M.displacementBias,w.wireframeLinewidth=M.wireframeLinewidth,w.linewidth=M.linewidth,T.isPointLight===!0&&w.isMeshDistanceMaterial===!0&&(w.referencePosition.setFromMatrixPosition(T.matrixWorld),w.nearDistance=I,w.farDistance=b),w}function S(v,M,T,I,b){if(v.visible===!1)return;if(v.layers.test(M.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&b===ds)&&(!v.frustumCulled||i.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,v.matrixWorld);const L=e.update(v),H=v.material;if(Array.isArray(H)){const G=L.groups;for(let N=0,J=G.length;N<J;N++){const q=G[N],X=H[q.materialIndex];if(X&&X.visible){const Z=g(v,X,I,T.near,T.far,b);n.renderBufferDirect(T,null,L,Z,v,q)}}}else if(H.visible){const G=g(v,H,I,T.near,T.far,b);n.renderBufferDirect(T,null,L,G,v,null)}}const w=v.children;for(let L=0,H=w.length;L<H;L++)S(w[L],M,T,I,b)}}function N1(n,e,t){const i=t.isWebGL2;function r(){let W=!1;const ne=new Pt;let he=null;const Me=new Pt(0,0,0,0);return{setMask:function(Re){he!==Re&&!W&&(n.colorMask(Re,Re,Re,Re),he=Re)},setLocked:function(Re){W=Re},setClear:function(Re,at,jt,wt,Pn){Pn===!0&&(Re*=wt,at*=wt,jt*=wt),ne.set(Re,at,jt,wt),Me.equals(ne)===!1&&(n.clearColor(Re,at,jt,wt),Me.copy(ne))},reset:function(){W=!1,he=null,Me.set(-1,0,0,0)}}}function s(){let W=!1,ne=null,he=null,Me=null;return{setTest:function(Re){Re?F(2929):ee(2929)},setMask:function(Re){ne!==Re&&!W&&(n.depthMask(Re),ne=Re)},setFunc:function(Re){if(he!==Re){switch(Re){case Fj:n.depthFunc(512);break;case Cj:n.depthFunc(519);break;case Yj:n.depthFunc(513);break;case Pc:n.depthFunc(515);break;case Kj:n.depthFunc(514);break;case Bj:n.depthFunc(518);break;case Xj:n.depthFunc(516);break;case Qj:n.depthFunc(517);break;default:n.depthFunc(515)}he=Re}},setLocked:function(Re){W=Re},setClear:function(Re){Me!==Re&&(n.clearDepth(Re),Me=Re)},reset:function(){W=!1,ne=null,he=null,Me=null}}}function o(){let W=!1,ne=null,he=null,Me=null,Re=null,at=null,jt=null,wt=null,Pn=null;return{setTest:function(pt){W||(pt?F(2960):ee(2960))},setMask:function(pt){ne!==pt&&!W&&(n.stencilMask(pt),ne=pt)},setFunc:function(pt,cn,Rn){(he!==pt||Me!==cn||Re!==Rn)&&(n.stencilFunc(pt,cn,Rn),he=pt,Me=cn,Re=Rn)},setOp:function(pt,cn,Rn){(at!==pt||jt!==cn||wt!==Rn)&&(n.stencilOp(pt,cn,Rn),at=pt,jt=cn,wt=Rn)},setLocked:function(pt){W=pt},setClear:function(pt){Pn!==pt&&(n.clearStencil(pt),Pn=pt)},reset:function(){W=!1,ne=null,he=null,Me=null,Re=null,at=null,jt=null,wt=null,Pn=null}}}const a=new r,c=new s,l=new o,u=new WeakMap,d=new WeakMap;let f={},m={},A=new WeakMap,h=[],p=null,x=!1,g=null,S=null,v=null,M=null,T=null,I=null,b=null,P=!1,w=null,L=null,H=null,G=null,N=null;const J=n.getParameter(35661);let q=!1,X=0;const Z=n.getParameter(7938);Z.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(Z)[1]),q=X>=1):Z.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),q=X>=2);let se=null,ce={};const ve=n.getParameter(3088),C=n.getParameter(2978),oe=new Pt().fromArray(ve),Se=new Pt().fromArray(C);function R(W,ne,he){const Me=new Uint8Array(4),Re=n.createTexture();n.bindTexture(W,Re),n.texParameteri(W,10241,9728),n.texParameteri(W,10240,9728);for(let at=0;at<he;at++)n.texImage2D(ne+at,0,6408,1,1,0,6408,5121,Me);return Re}const _={};_[3553]=R(3553,3553,1),_[34067]=R(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),F(2929),c.setFunc(Pc),ie(!1),te(id),F(2884),V(gi);function F(W){f[W]!==!0&&(n.enable(W),f[W]=!0)}function ee(W){f[W]!==!1&&(n.disable(W),f[W]=!1)}function me(W,ne){return m[W]!==ne?(n.bindFramebuffer(W,ne),m[W]=ne,i&&(W===36009&&(m[36160]=ne),W===36160&&(m[36009]=ne)),!0):!1}function ye(W,ne){let he=h,Me=!1;if(W)if(he=A.get(ne),he===void 0&&(he=[],A.set(ne,he)),W.isWebGLMultipleRenderTargets){const Re=W.texture;if(he.length!==Re.length||he[0]!==36064){for(let at=0,jt=Re.length;at<jt;at++)he[at]=36064+at;he.length=Re.length,Me=!0}}else he[0]!==36064&&(he[0]=36064,Me=!0);else he[0]!==1029&&(he[0]=1029,Me=!0);Me&&(t.isWebGL2?n.drawBuffers(he):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(he))}function be(W){return p!==W?(n.useProgram(W),p=W,!0):!1}const xe={[vr]:32774,[wj]:32778,[Nj]:32779};if(i)xe[od]=32775,xe[cd]=32776;else{const W=e.get("EXT_blend_minmax");W!==null&&(xe[od]=W.MIN_EXT,xe[cd]=W.MAX_EXT)}const k={[Wj]:0,[zj]:1,[Dj]:768,[xh]:770,[qj]:776,[Ej]:774,[Uj]:772,[Lj]:769,[Sh]:771,[Jj]:775,[Zj]:773};function V(W,ne,he,Me,Re,at,jt,wt){if(W===gi){x===!0&&(ee(3042),x=!1);return}if(x===!1&&(F(3042),x=!0),W!==Vj){if(W!==g||wt!==P){if((S!==vr||T!==vr)&&(n.blendEquation(32774),S=vr,T=vr),wt)switch(W){case Rr:n.blendFuncSeparate(1,771,1,771);break;case rd:n.blendFunc(1,1);break;case sd:n.blendFuncSeparate(0,769,0,1);break;case ad:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Rr:n.blendFuncSeparate(770,771,1,771);break;case rd:n.blendFunc(770,1);break;case sd:n.blendFuncSeparate(0,769,0,1);break;case ad:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}v=null,M=null,I=null,b=null,g=W,P=wt}return}Re=Re||ne,at=at||he,jt=jt||Me,(ne!==S||Re!==T)&&(n.blendEquationSeparate(xe[ne],xe[Re]),S=ne,T=Re),(he!==v||Me!==M||at!==I||jt!==b)&&(n.blendFuncSeparate(k[he],k[Me],k[at],k[jt]),v=he,M=Me,I=at,b=jt),g=W,P=!1}function U(W,ne){W.side===Ai?ee(2884):F(2884);let he=W.side===rn;ne&&(he=!he),ie(he),W.blending===Rr&&W.transparent===!1?V(gi):V(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.premultipliedAlpha),c.setFunc(W.depthFunc),c.setTest(W.depthTest),c.setMask(W.depthWrite),a.setMask(W.colorWrite);const Me=W.stencilWrite;l.setTest(Me),Me&&(l.setMask(W.stencilWriteMask),l.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),l.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),de(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?F(32926):ee(32926)}function ie(W){w!==W&&(W?n.frontFace(2304):n.frontFace(2305),w=W)}function te(W){W!==Tj?(F(2884),W!==L&&(W===id?n.cullFace(1029):W===Hj?n.cullFace(1028):n.cullFace(1032))):ee(2884),L=W}function ae(W){W!==H&&(q&&n.lineWidth(W),H=W)}function de(W,ne,he){W?(F(32823),(G!==ne||N!==he)&&(n.polygonOffset(ne,he),G=ne,N=he)):ee(32823)}function ue(W){W?F(3089):ee(3089)}function pe(W){W===void 0&&(W=33984+J-1),se!==W&&(n.activeTexture(W),se=W)}function j(W,ne,he){he===void 0&&(se===null?he=33984+J-1:he=se);let Me=ce[he];Me===void 0&&(Me={type:void 0,texture:void 0},ce[he]=Me),(Me.type!==W||Me.texture!==ne)&&(se!==he&&(n.activeTexture(he),se=he),n.bindTexture(W,ne||_[W]),Me.type=W,Me.texture=ne)}function y(){const W=ce[se];W!==void 0&&W.type!==void 0&&(n.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function z(){try{n.compressedTexImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function K(){try{n.compressedTexImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Q(){try{n.texSubImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function le(){try{n.texSubImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function je(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function fe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function B(){try{n.texStorage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Te(){try{n.texStorage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ke(){try{n.texImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ne(){try{n.texImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function He(W){oe.equals(W)===!1&&(n.scissor(W.x,W.y,W.z,W.w),oe.copy(W))}function Ge(W){Se.equals(W)===!1&&(n.viewport(W.x,W.y,W.z,W.w),Se.copy(W))}function ze(W,ne){let he=d.get(ne);he===void 0&&(he=new WeakMap,d.set(ne,he));let Me=he.get(W);Me===void 0&&(Me=n.getUniformBlockIndex(ne,W.name),he.set(W,Me))}function qe(W,ne){const Me=d.get(ne).get(W);u.get(ne)!==Me&&(n.uniformBlockBinding(ne,Me,W.__bindingPointIndex),u.set(ne,Me))}function ft(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},se=null,ce={},m={},A=new WeakMap,h=[],p=null,x=!1,g=null,S=null,v=null,M=null,T=null,I=null,b=null,P=!1,w=null,L=null,H=null,G=null,N=null,oe.set(0,0,n.canvas.width,n.canvas.height),Se.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:F,disable:ee,bindFramebuffer:me,drawBuffers:ye,useProgram:be,setBlending:V,setMaterial:U,setFlipSided:ie,setCullFace:te,setLineWidth:ae,setPolygonOffset:de,setScissorTest:ue,activeTexture:pe,bindTexture:j,unbindTexture:y,compressedTexImage2D:z,compressedTexImage3D:K,texImage2D:ke,texImage3D:Ne,updateUBOMapping:ze,uniformBlockBinding:qe,texStorage2D:B,texStorage3D:Te,texSubImage2D:Q,texSubImage3D:le,compressedTexSubImage2D:je,compressedTexSubImage3D:fe,scissor:He,viewport:Ge,reset:ft}}function W1(n,e,t,i,r,s,o){const a=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,u=r.maxTextureSize,d=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),A=new WeakMap;let h;const p=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(j,y){return x?new OffscreenCanvas(j,y):Ua("canvas")}function S(j,y,z,K){let Q=1;if((j.width>K||j.height>K)&&(Q=K/Math.max(j.width,j.height)),Q<1||y===!0)if(typeof HTMLImageElement!="undefined"&&j instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&j instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&j instanceof ImageBitmap){const le=y?Mh:Math.floor,je=le(Q*j.width),fe=le(Q*j.height);h===void 0&&(h=g(je,fe));const B=z?g(je,fe):h;return B.width=je,B.height=fe,B.getContext("2d").drawImage(j,0,0,je,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+je+"x"+fe+")."),B}else return"data"in j&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),j;return j}function v(j){return Vc(j.width)&&Vc(j.height)}function M(j){return a?!1:j.wrapS!==vn||j.wrapT!==vn||j.minFilter!==Lt&&j.minFilter!==pn}function T(j,y){return j.generateMipmaps&&y&&j.minFilter!==Lt&&j.minFilter!==pn}function I(j){n.generateMipmap(j)}function b(j,y,z,K,Q=!1){if(a===!1)return y;if(j!==null){if(n[j]!==void 0)return n[j];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+j+"'")}let le=y;return y===6403&&(z===5126&&(le=33326),z===5131&&(le=33325),z===5121&&(le=33321)),y===33319&&(z===5126&&(le=33328),z===5131&&(le=33327),z===5121&&(le=33323)),y===6408&&(z===5126&&(le=34836),z===5131&&(le=34842),z===5121&&(le=K===ot&&Q===!1?35907:32856),z===32819&&(le=32854),z===32820&&(le=32855)),(le===33325||le===33326||le===33327||le===33328||le===34842||le===34836)&&e.get("EXT_color_buffer_float"),le}function P(j,y,z){return T(j,z)===!0||j.isFramebufferTexture&&j.minFilter!==Lt&&j.minFilter!==pn?Math.log2(Math.max(y.width,y.height))+1:j.mipmaps!==void 0&&j.mipmaps.length>0?j.mipmaps.length:j.isCompressedTexture&&Array.isArray(j.image)?y.mipmaps.length:1}function w(j){return j===Lt||j===ld||j===Po?9728:9729}function L(j){const y=j.target;y.removeEventListener("dispose",L),G(y),y.isVideoTexture&&A.delete(y)}function H(j){const y=j.target;y.removeEventListener("dispose",H),J(y)}function G(j){const y=i.get(j);if(y.__webglInit===void 0)return;const z=j.source,K=p.get(z);if(K){const Q=K[y.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&N(j),Object.keys(K).length===0&&p.delete(z)}i.remove(j)}function N(j){const y=i.get(j);n.deleteTexture(y.__webglTexture);const z=j.source,K=p.get(z);delete K[y.__cacheKey],o.memory.textures--}function J(j){const y=j.texture,z=i.get(j),K=i.get(y);if(K.__webglTexture!==void 0&&(n.deleteTexture(K.__webglTexture),o.memory.textures--),j.depthTexture&&j.depthTexture.dispose(),j.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++)n.deleteFramebuffer(z.__webglFramebuffer[Q]),z.__webglDepthbuffer&&n.deleteRenderbuffer(z.__webglDepthbuffer[Q]);else{if(n.deleteFramebuffer(z.__webglFramebuffer),z.__webglDepthbuffer&&n.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&n.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let Q=0;Q<z.__webglColorRenderbuffer.length;Q++)z.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(z.__webglColorRenderbuffer[Q]);z.__webglDepthRenderbuffer&&n.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(j.isWebGLMultipleRenderTargets)for(let Q=0,le=y.length;Q<le;Q++){const je=i.get(y[Q]);je.__webglTexture&&(n.deleteTexture(je.__webglTexture),o.memory.textures--),i.remove(y[Q])}i.remove(y),i.remove(j)}let q=0;function X(){q=0}function Z(){const j=q;return j>=c&&console.warn("THREE.WebGLTextures: Trying to use "+j+" texture units while this GPU supports only "+c),q+=1,j}function se(j){const y=[];return y.push(j.wrapS),y.push(j.wrapT),y.push(j.wrapR||0),y.push(j.magFilter),y.push(j.minFilter),y.push(j.anisotropy),y.push(j.internalFormat),y.push(j.format),y.push(j.type),y.push(j.generateMipmaps),y.push(j.premultiplyAlpha),y.push(j.flipY),y.push(j.unpackAlignment),y.push(j.encoding),y.join()}function ce(j,y){const z=i.get(j);if(j.isVideoTexture&&ue(j),j.isRenderTargetTexture===!1&&j.version>0&&z.__version!==j.version){const K=j.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(z,j,y);return}}t.bindTexture(3553,z.__webglTexture,33984+y)}function ve(j,y){const z=i.get(j);if(j.version>0&&z.__version!==j.version){ee(z,j,y);return}t.bindTexture(35866,z.__webglTexture,33984+y)}function C(j,y){const z=i.get(j);if(j.version>0&&z.__version!==j.version){ee(z,j,y);return}t.bindTexture(32879,z.__webglTexture,33984+y)}function oe(j,y){const z=i.get(j);if(j.version>0&&z.__version!==j.version){me(z,j,y);return}t.bindTexture(34067,z.__webglTexture,33984+y)}const Se={[Tc]:10497,[vn]:33071,[Hc]:33648},R={[Lt]:9728,[ld]:9984,[Po]:9986,[pn]:9729,[sv]:9985,[Is]:9987};function _(j,y,z){if(z?(n.texParameteri(j,10242,Se[y.wrapS]),n.texParameteri(j,10243,Se[y.wrapT]),(j===32879||j===35866)&&n.texParameteri(j,32882,Se[y.wrapR]),n.texParameteri(j,10240,R[y.magFilter]),n.texParameteri(j,10241,R[y.minFilter])):(n.texParameteri(j,10242,33071),n.texParameteri(j,10243,33071),(j===32879||j===35866)&&n.texParameteri(j,32882,33071),(y.wrapS!==vn||y.wrapT!==vn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(j,10240,w(y.magFilter)),n.texParameteri(j,10241,w(y.minFilter)),y.minFilter!==Lt&&y.minFilter!==pn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const K=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===Lt||y.minFilter!==Po&&y.minFilter!==Is||y.type===Ei&&e.has("OES_texture_float_linear")===!1||a===!1&&y.type===Ts&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||i.get(y).__currentAnisotropy)&&(n.texParameterf(j,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy)}}function F(j,y){let z=!1;j.__webglInit===void 0&&(j.__webglInit=!0,y.addEventListener("dispose",L));const K=y.source;let Q=p.get(K);Q===void 0&&(Q={},p.set(K,Q));const le=se(y);if(le!==j.__cacheKey){Q[le]===void 0&&(Q[le]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),Q[le].usedTimes++;const je=Q[j.__cacheKey];je!==void 0&&(Q[j.__cacheKey].usedTimes--,je.usedTimes===0&&N(y)),j.__cacheKey=le,j.__webglTexture=Q[le].texture}return z}function ee(j,y,z){let K=3553;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(K=35866),y.isData3DTexture&&(K=32879);const Q=F(j,y),le=y.source;t.bindTexture(K,j.__webglTexture,33984+z);const je=i.get(le);if(le.version!==je.__version||Q===!0){t.activeTexture(33984+z),n.pixelStorei(37440,y.flipY),n.pixelStorei(37441,y.premultiplyAlpha),n.pixelStorei(3317,y.unpackAlignment),n.pixelStorei(37443,0);const fe=M(y)&&v(y.image)===!1;let B=S(y.image,fe,!1,u);B=pe(y,B);const Te=v(B)||a,ke=s.convert(y.format,y.encoding);let Ne=s.convert(y.type),He=b(y.internalFormat,ke,Ne,y.encoding,y.isVideoTexture);_(K,y,Te);let Ge;const ze=y.mipmaps,qe=a&&y.isVideoTexture!==!0,ft=je.__version===void 0||Q===!0,W=P(y,B,Te);if(y.isDepthTexture)He=6402,a?y.type===Ei?He=36012:y.type===Zi?He=33190:y.type===Ir?He=35056:He=33189:y.type===Ei&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Ki&&He===6402&&y.type!==yh&&y.type!==Zi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=Zi,Ne=s.convert(y.type)),y.format===Lr&&He===6402&&(He=34041,y.type!==Ir&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Ir,Ne=s.convert(y.type))),ft&&(qe?t.texStorage2D(3553,1,He,B.width,B.height):t.texImage2D(3553,0,He,B.width,B.height,0,ke,Ne,null));else if(y.isDataTexture)if(ze.length>0&&Te){qe&&ft&&t.texStorage2D(3553,W,He,ze[0].width,ze[0].height);for(let ne=0,he=ze.length;ne<he;ne++)Ge=ze[ne],qe?t.texSubImage2D(3553,ne,0,0,Ge.width,Ge.height,ke,Ne,Ge.data):t.texImage2D(3553,ne,He,Ge.width,Ge.height,0,ke,Ne,Ge.data);y.generateMipmaps=!1}else qe?(ft&&t.texStorage2D(3553,W,He,B.width,B.height),t.texSubImage2D(3553,0,0,0,B.width,B.height,ke,Ne,B.data)):t.texImage2D(3553,0,He,B.width,B.height,0,ke,Ne,B.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){qe&&ft&&t.texStorage3D(35866,W,He,ze[0].width,ze[0].height,B.depth);for(let ne=0,he=ze.length;ne<he;ne++)Ge=ze[ne],y.format!==Mn?ke!==null?qe?t.compressedTexSubImage3D(35866,ne,0,0,0,Ge.width,Ge.height,B.depth,ke,Ge.data,0,0):t.compressedTexImage3D(35866,ne,He,Ge.width,Ge.height,B.depth,0,Ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage3D(35866,ne,0,0,0,Ge.width,Ge.height,B.depth,ke,Ne,Ge.data):t.texImage3D(35866,ne,He,Ge.width,Ge.height,B.depth,0,ke,Ne,Ge.data)}else{qe&&ft&&t.texStorage2D(3553,W,He,ze[0].width,ze[0].height);for(let ne=0,he=ze.length;ne<he;ne++)Ge=ze[ne],y.format!==Mn?ke!==null?qe?t.compressedTexSubImage2D(3553,ne,0,0,Ge.width,Ge.height,ke,Ge.data):t.compressedTexImage2D(3553,ne,He,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage2D(3553,ne,0,0,Ge.width,Ge.height,ke,Ne,Ge.data):t.texImage2D(3553,ne,He,Ge.width,Ge.height,0,ke,Ne,Ge.data)}else if(y.isDataArrayTexture)qe?(ft&&t.texStorage3D(35866,W,He,B.width,B.height,B.depth),t.texSubImage3D(35866,0,0,0,0,B.width,B.height,B.depth,ke,Ne,B.data)):t.texImage3D(35866,0,He,B.width,B.height,B.depth,0,ke,Ne,B.data);else if(y.isData3DTexture)qe?(ft&&t.texStorage3D(32879,W,He,B.width,B.height,B.depth),t.texSubImage3D(32879,0,0,0,0,B.width,B.height,B.depth,ke,Ne,B.data)):t.texImage3D(32879,0,He,B.width,B.height,B.depth,0,ke,Ne,B.data);else if(y.isFramebufferTexture){if(ft)if(qe)t.texStorage2D(3553,W,He,B.width,B.height);else{let ne=B.width,he=B.height;for(let Me=0;Me<W;Me++)t.texImage2D(3553,Me,He,ne,he,0,ke,Ne,null),ne>>=1,he>>=1}}else if(ze.length>0&&Te){qe&&ft&&t.texStorage2D(3553,W,He,ze[0].width,ze[0].height);for(let ne=0,he=ze.length;ne<he;ne++)Ge=ze[ne],qe?t.texSubImage2D(3553,ne,0,0,ke,Ne,Ge):t.texImage2D(3553,ne,He,ke,Ne,Ge);y.generateMipmaps=!1}else qe?(ft&&t.texStorage2D(3553,W,He,B.width,B.height),t.texSubImage2D(3553,0,0,0,ke,Ne,B)):t.texImage2D(3553,0,He,ke,Ne,B);T(y,Te)&&I(K),je.__version=le.version,y.onUpdate&&y.onUpdate(y)}j.__version=y.version}function me(j,y,z){if(y.image.length!==6)return;const K=F(j,y),Q=y.source;t.bindTexture(34067,j.__webglTexture,33984+z);const le=i.get(Q);if(Q.version!==le.__version||K===!0){t.activeTexture(33984+z),n.pixelStorei(37440,y.flipY),n.pixelStorei(37441,y.premultiplyAlpha),n.pixelStorei(3317,y.unpackAlignment),n.pixelStorei(37443,0);const je=y.isCompressedTexture||y.image[0].isCompressedTexture,fe=y.image[0]&&y.image[0].isDataTexture,B=[];for(let ne=0;ne<6;ne++)!je&&!fe?B[ne]=S(y.image[ne],!1,!0,l):B[ne]=fe?y.image[ne].image:y.image[ne],B[ne]=pe(y,B[ne]);const Te=B[0],ke=v(Te)||a,Ne=s.convert(y.format,y.encoding),He=s.convert(y.type),Ge=b(y.internalFormat,Ne,He,y.encoding),ze=a&&y.isVideoTexture!==!0,qe=le.__version===void 0||K===!0;let ft=P(y,Te,ke);_(34067,y,ke);let W;if(je){ze&&qe&&t.texStorage2D(34067,ft,Ge,Te.width,Te.height);for(let ne=0;ne<6;ne++){W=B[ne].mipmaps;for(let he=0;he<W.length;he++){const Me=W[he];y.format!==Mn?Ne!==null?ze?t.compressedTexSubImage2D(34069+ne,he,0,0,Me.width,Me.height,Ne,Me.data):t.compressedTexImage2D(34069+ne,he,Ge,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?t.texSubImage2D(34069+ne,he,0,0,Me.width,Me.height,Ne,He,Me.data):t.texImage2D(34069+ne,he,Ge,Me.width,Me.height,0,Ne,He,Me.data)}}}else{W=y.mipmaps,ze&&qe&&(W.length>0&&ft++,t.texStorage2D(34067,ft,Ge,B[0].width,B[0].height));for(let ne=0;ne<6;ne++)if(fe){ze?t.texSubImage2D(34069+ne,0,0,0,B[ne].width,B[ne].height,Ne,He,B[ne].data):t.texImage2D(34069+ne,0,Ge,B[ne].width,B[ne].height,0,Ne,He,B[ne].data);for(let he=0;he<W.length;he++){const Re=W[he].image[ne].image;ze?t.texSubImage2D(34069+ne,he+1,0,0,Re.width,Re.height,Ne,He,Re.data):t.texImage2D(34069+ne,he+1,Ge,Re.width,Re.height,0,Ne,He,Re.data)}}else{ze?t.texSubImage2D(34069+ne,0,0,0,Ne,He,B[ne]):t.texImage2D(34069+ne,0,Ge,Ne,He,B[ne]);for(let he=0;he<W.length;he++){const Me=W[he];ze?t.texSubImage2D(34069+ne,he+1,0,0,Ne,He,Me.image[ne]):t.texImage2D(34069+ne,he+1,Ge,Ne,He,Me.image[ne])}}}T(y,ke)&&I(34067),le.__version=Q.version,y.onUpdate&&y.onUpdate(y)}j.__version=y.version}function ye(j,y,z,K,Q){const le=s.convert(z.format,z.encoding),je=s.convert(z.type),fe=b(z.internalFormat,le,je,z.encoding);i.get(y).__hasExternalTextures||(Q===32879||Q===35866?t.texImage3D(Q,0,fe,y.width,y.height,y.depth,0,le,je,null):t.texImage2D(Q,0,fe,y.width,y.height,0,le,je,null)),t.bindFramebuffer(36160,j),de(y)?f.framebufferTexture2DMultisampleEXT(36160,K,Q,i.get(z).__webglTexture,0,ae(y)):(Q===3553||Q>=34069&&Q<=34074)&&n.framebufferTexture2D(36160,K,Q,i.get(z).__webglTexture,0),t.bindFramebuffer(36160,null)}function be(j,y,z){if(n.bindRenderbuffer(36161,j),y.depthBuffer&&!y.stencilBuffer){let K=33189;if(z||de(y)){const Q=y.depthTexture;Q&&Q.isDepthTexture&&(Q.type===Ei?K=36012:Q.type===Zi&&(K=33190));const le=ae(y);de(y)?f.renderbufferStorageMultisampleEXT(36161,le,K,y.width,y.height):n.renderbufferStorageMultisample(36161,le,K,y.width,y.height)}else n.renderbufferStorage(36161,K,y.width,y.height);n.framebufferRenderbuffer(36160,36096,36161,j)}else if(y.depthBuffer&&y.stencilBuffer){const K=ae(y);z&&de(y)===!1?n.renderbufferStorageMultisample(36161,K,35056,y.width,y.height):de(y)?f.renderbufferStorageMultisampleEXT(36161,K,35056,y.width,y.height):n.renderbufferStorage(36161,34041,y.width,y.height),n.framebufferRenderbuffer(36160,33306,36161,j)}else{const K=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let Q=0;Q<K.length;Q++){const le=K[Q],je=s.convert(le.format,le.encoding),fe=s.convert(le.type),B=b(le.internalFormat,je,fe,le.encoding),Te=ae(y);z&&de(y)===!1?n.renderbufferStorageMultisample(36161,Te,B,y.width,y.height):de(y)?f.renderbufferStorageMultisampleEXT(36161,Te,B,y.width,y.height):n.renderbufferStorage(36161,B,y.width,y.height)}}n.bindRenderbuffer(36161,null)}function xe(j,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,j),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),ce(y.depthTexture,0);const K=i.get(y.depthTexture).__webglTexture,Q=ae(y);if(y.depthTexture.format===Ki)de(y)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,K,0,Q):n.framebufferTexture2D(36160,36096,3553,K,0);else if(y.depthTexture.format===Lr)de(y)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,K,0,Q):n.framebufferTexture2D(36160,33306,3553,K,0);else throw new Error("Unknown depthTexture format")}function k(j){const y=i.get(j),z=j.isWebGLCubeRenderTarget===!0;if(j.depthTexture&&!y.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");xe(y.__webglFramebuffer,j)}else if(z){y.__webglDepthbuffer=[];for(let K=0;K<6;K++)t.bindFramebuffer(36160,y.__webglFramebuffer[K]),y.__webglDepthbuffer[K]=n.createRenderbuffer(),be(y.__webglDepthbuffer[K],j,!1)}else t.bindFramebuffer(36160,y.__webglFramebuffer),y.__webglDepthbuffer=n.createRenderbuffer(),be(y.__webglDepthbuffer,j,!1);t.bindFramebuffer(36160,null)}function V(j,y,z){const K=i.get(j);y!==void 0&&ye(K.__webglFramebuffer,j,j.texture,36064,3553),z!==void 0&&k(j)}function U(j){const y=j.texture,z=i.get(j),K=i.get(y);j.addEventListener("dispose",H),j.isWebGLMultipleRenderTargets!==!0&&(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=y.version,o.memory.textures++);const Q=j.isWebGLCubeRenderTarget===!0,le=j.isWebGLMultipleRenderTargets===!0,je=v(j)||a;if(Q){z.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)z.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(z.__webglFramebuffer=n.createFramebuffer(),le)if(r.drawBuffers){const fe=j.texture;for(let B=0,Te=fe.length;B<Te;B++){const ke=i.get(fe[B]);ke.__webglTexture===void 0&&(ke.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&j.samples>0&&de(j)===!1){const fe=le?y:[y];z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,z.__webglMultisampledFramebuffer);for(let B=0;B<fe.length;B++){const Te=fe[B];z.__webglColorRenderbuffer[B]=n.createRenderbuffer(),n.bindRenderbuffer(36161,z.__webglColorRenderbuffer[B]);const ke=s.convert(Te.format,Te.encoding),Ne=s.convert(Te.type),He=b(Te.internalFormat,ke,Ne,Te.encoding,j.isXRRenderTarget===!0),Ge=ae(j);n.renderbufferStorageMultisample(36161,Ge,He,j.width,j.height),n.framebufferRenderbuffer(36160,36064+B,36161,z.__webglColorRenderbuffer[B])}n.bindRenderbuffer(36161,null),j.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),be(z.__webglDepthRenderbuffer,j,!0)),t.bindFramebuffer(36160,null)}}if(Q){t.bindTexture(34067,K.__webglTexture),_(34067,y,je);for(let fe=0;fe<6;fe++)ye(z.__webglFramebuffer[fe],j,y,36064,34069+fe);T(y,je)&&I(34067),t.unbindTexture()}else if(le){const fe=j.texture;for(let B=0,Te=fe.length;B<Te;B++){const ke=fe[B],Ne=i.get(ke);t.bindTexture(3553,Ne.__webglTexture),_(3553,ke,je),ye(z.__webglFramebuffer,j,ke,36064+B,3553),T(ke,je)&&I(3553)}t.unbindTexture()}else{let fe=3553;(j.isWebGL3DRenderTarget||j.isWebGLArrayRenderTarget)&&(a?fe=j.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(fe,K.__webglTexture),_(fe,y,je),ye(z.__webglFramebuffer,j,y,36064,fe),T(y,je)&&I(fe),t.unbindTexture()}j.depthBuffer&&k(j)}function ie(j){const y=v(j)||a,z=j.isWebGLMultipleRenderTargets===!0?j.texture:[j.texture];for(let K=0,Q=z.length;K<Q;K++){const le=z[K];if(T(le,y)){const je=j.isWebGLCubeRenderTarget?34067:3553,fe=i.get(le).__webglTexture;t.bindTexture(je,fe),I(je),t.unbindTexture()}}}function te(j){if(a&&j.samples>0&&de(j)===!1){const y=j.isWebGLMultipleRenderTargets?j.texture:[j.texture],z=j.width,K=j.height;let Q=16384;const le=[],je=j.stencilBuffer?33306:36096,fe=i.get(j),B=j.isWebGLMultipleRenderTargets===!0;if(B)for(let Te=0;Te<y.length;Te++)t.bindFramebuffer(36160,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+Te,36161,null),t.bindFramebuffer(36160,fe.__webglFramebuffer),n.framebufferTexture2D(36009,36064+Te,3553,null,0);t.bindFramebuffer(36008,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,fe.__webglFramebuffer);for(let Te=0;Te<y.length;Te++){le.push(36064+Te),j.depthBuffer&&le.push(je);const ke=fe.__ignoreDepthValues!==void 0?fe.__ignoreDepthValues:!1;if(ke===!1&&(j.depthBuffer&&(Q|=256),j.stencilBuffer&&(Q|=1024)),B&&n.framebufferRenderbuffer(36008,36064,36161,fe.__webglColorRenderbuffer[Te]),ke===!0&&(n.invalidateFramebuffer(36008,[je]),n.invalidateFramebuffer(36009,[je])),B){const Ne=i.get(y[Te]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,Ne,0)}n.blitFramebuffer(0,0,z,K,0,0,z,K,Q,9728),m&&n.invalidateFramebuffer(36008,le)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),B)for(let Te=0;Te<y.length;Te++){t.bindFramebuffer(36160,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+Te,36161,fe.__webglColorRenderbuffer[Te]);const ke=i.get(y[Te]).__webglTexture;t.bindFramebuffer(36160,fe.__webglFramebuffer),n.framebufferTexture2D(36009,36064+Te,3553,ke,0)}t.bindFramebuffer(36009,fe.__webglMultisampledFramebuffer)}}function ae(j){return Math.min(d,j.samples)}function de(j){const y=i.get(j);return a&&j.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ue(j){const y=o.render.frame;A.get(j)!==y&&(A.set(j,y),j.update())}function pe(j,y){const z=j.encoding,K=j.format,Q=j.type;return j.isCompressedTexture===!0||j.isVideoTexture===!0||j.format===Gc||z!==Qi&&(z===ot?a===!1?e.has("EXT_sRGB")===!0&&K===Mn?(j.format=Gc,j.minFilter=pn,j.generateMipmaps=!1):y=Oh.sRGBToLinear(y):(K!==Mn||Q!==Xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",z)),y}this.allocateTextureUnit=Z,this.resetTextureUnits=X,this.setTexture2D=ce,this.setTexture2DArray=ve,this.setTexture3D=C,this.setTextureCube=oe,this.rebindTextures=V,this.setupRenderTarget=U,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=k,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=de}function z1(n,e,t){const i=t.isWebGL2;function r(s,o=null){let a;if(s===Xi)return 5121;if(s===lv)return 32819;if(s===uv)return 32820;if(s===av)return 5120;if(s===ov)return 5122;if(s===yh)return 5123;if(s===cv)return 5124;if(s===Zi)return 5125;if(s===Ei)return 5126;if(s===Ts)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===dv)return 6406;if(s===Mn)return 6408;if(s===fv)return 6409;if(s===pv)return 6410;if(s===Ki)return 6402;if(s===Lr)return 34041;if(s===Gc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===hv)return 6403;if(s===mv)return 36244;if(s===Av)return 33319;if(s===xv)return 33320;if(s===Sv)return 36249;if(s===Ro||s===Io||s===To||s===Ho)if(o===ot)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ro)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Io)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===To)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ho)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ro)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Io)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===To)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ho)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ud||s===dd||s===fd||s===pd)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===ud)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===dd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===fd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===pd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===bv)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===hd||s===md)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===hd)return o===ot?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===md)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ad||s===xd||s===Sd||s===bd||s===gd||s===yd||s===jd||s===vd||s===Md||s===kd||s===Od||s===Pd||s===Rd||s===Id)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Ad)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===xd)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Sd)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===bd)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===gd)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===yd)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===jd)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===vd)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Md)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===kd)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Od)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Pd)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Rd)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Id)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Go)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Go)return o===ot?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===gv||s===Td||s===Hd||s===Gd)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Go)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Td)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Hd)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Gd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ir?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class D1 extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class pa extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const L1={type:"move"};class nc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const h of e.hand.values()){const p=t.getJointPose(h,i),x=this._getHandJoint(l,h);p!==null&&(x.matrix.fromArray(p.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=p.radius),x.visible=p!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,A=.005;l.inputState.pinching&&f>m+A?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=m-A&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(L1)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new pa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class U1 extends sn{constructor(e,t,i,r,s,o,a,c,l,u){if(u=u!==void 0?u:Ki,u!==Ki&&u!==Lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ki&&(i=Zi),i===void 0&&u===Lr&&(i=Ir),super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Lt,this.minFilter=c!==void 0?c:Lt,this.flipY=!1,this.generateMipmaps=!1}}class Z1 extends Cr{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,f=null,m=null,A=null;const h=t.getContextAttributes();let p=null,x=null;const g=[],S=[],v=new Set,M=new Map,T=new hn;T.layers.enable(1),T.viewport=new Pt;const I=new hn;I.layers.enable(2),I.viewport=new Pt;const b=[T,I],P=new D1;P.layers.enable(1),P.layers.enable(2);let w=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(C){let oe=g[C];return oe===void 0&&(oe=new nc,g[C]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(C){let oe=g[C];return oe===void 0&&(oe=new nc,g[C]=oe),oe.getGripSpace()},this.getHand=function(C){let oe=g[C];return oe===void 0&&(oe=new nc,g[C]=oe),oe.getHandSpace()};function H(C){const oe=S.indexOf(C.inputSource);if(oe===-1)return;const Se=g[oe];Se!==void 0&&Se.dispatchEvent({type:C.type,data:C.inputSource})}function G(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",N);for(let C=0;C<g.length;C++){const oe=S[C];oe!==null&&(S[C]=null,g[C].disconnect(oe))}w=null,L=null,e.setRenderTarget(p),m=null,f=null,d=null,r=null,x=null,ve.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(C){s=C,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(C){a=C,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(C){l=C},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return A},this.getSession=function(){return r},this.setSession=async function(C){if(r=C,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",G),r.addEventListener("inputsourceschange",N),h.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const oe={antialias:r.renderState.layers===void 0?h.antialias:!0,alpha:h.alpha,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,oe),r.updateRenderState({baseLayer:m}),x=new _i(m.framebufferWidth,m.framebufferHeight,{format:Mn,type:Xi,encoding:e.outputEncoding,stencilBuffer:h.stencil})}else{let oe=null,Se=null,R=null;h.depth&&(R=h.stencil?35056:33190,oe=h.stencil?Lr:Ki,Se=h.stencil?Ir:Zi);const _={colorFormat:32856,depthFormat:R,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(_),r.updateRenderState({layers:[f]}),x=new _i(f.textureWidth,f.textureHeight,{format:Mn,type:Xi,depthTexture:new U1(f.textureWidth,f.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:h.stencil,encoding:e.outputEncoding,samples:h.antialias?4:0});const F=e.properties.get(x);F.__ignoreDepthValues=f.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),ve.setContext(r),ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function N(C){for(let oe=0;oe<C.removed.length;oe++){const Se=C.removed[oe],R=S.indexOf(Se);R>=0&&(S[R]=null,g[R].disconnect(Se))}for(let oe=0;oe<C.added.length;oe++){const Se=C.added[oe];let R=S.indexOf(Se);if(R===-1){for(let F=0;F<g.length;F++)if(F>=S.length){S.push(Se),R=F;break}else if(S[F]===null){S[F]=Se,R=F;break}if(R===-1)break}const _=g[R];_&&_.connect(Se)}}const J=new Y,q=new Y;function X(C,oe,Se){J.setFromMatrixPosition(oe.matrixWorld),q.setFromMatrixPosition(Se.matrixWorld);const R=J.distanceTo(q),_=oe.projectionMatrix.elements,F=Se.projectionMatrix.elements,ee=_[14]/(_[10]-1),me=_[14]/(_[10]+1),ye=(_[9]+1)/_[5],be=(_[9]-1)/_[5],xe=(_[8]-1)/_[0],k=(F[8]+1)/F[0],V=ee*xe,U=ee*k,ie=R/(-xe+k),te=ie*-xe;oe.matrixWorld.decompose(C.position,C.quaternion,C.scale),C.translateX(te),C.translateZ(ie),C.matrixWorld.compose(C.position,C.quaternion,C.scale),C.matrixWorldInverse.copy(C.matrixWorld).invert();const ae=ee+ie,de=me+ie,ue=V-te,pe=U+(R-te),j=ye*me/de*ae,y=be*me/de*ae;C.projectionMatrix.makePerspective(ue,pe,j,y,ae,de)}function Z(C,oe){oe===null?C.matrixWorld.copy(C.matrix):C.matrixWorld.multiplyMatrices(oe.matrixWorld,C.matrix),C.matrixWorldInverse.copy(C.matrixWorld).invert()}this.updateCamera=function(C){if(r===null)return;P.near=I.near=T.near=C.near,P.far=I.far=T.far=C.far,(w!==P.near||L!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),w=P.near,L=P.far);const oe=C.parent,Se=P.cameras;Z(P,oe);for(let _=0;_<Se.length;_++)Z(Se[_],oe);P.matrixWorld.decompose(P.position,P.quaternion,P.scale),C.matrix.copy(P.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale);const R=C.children;for(let _=0,F=R.length;_<F;_++)R[_].updateMatrixWorld(!0);Se.length===2?X(P,T,I):P.projectionMatrix.copy(T.projectionMatrix)},this.getCamera=function(){return P},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(C){c=C,f!==null&&(f.fixedFoveation=C),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=C)},this.getPlanes=function(){return v};let se=null;function ce(C,oe){if(u=oe.getViewerPose(l||o),A=oe,u!==null){const Se=u.views;m!==null&&(e.setRenderTargetFramebuffer(x,m.framebuffer),e.setRenderTarget(x));let R=!1;Se.length!==P.cameras.length&&(P.cameras.length=0,R=!0);for(let _=0;_<Se.length;_++){const F=Se[_];let ee=null;if(m!==null)ee=m.getViewport(F);else{const ye=d.getViewSubImage(f,F);ee=ye.viewport,_===0&&(e.setRenderTargetTextures(x,ye.colorTexture,f.ignoreDepthValues?void 0:ye.depthStencilTexture),e.setRenderTarget(x))}let me=b[_];me===void 0&&(me=new hn,me.layers.enable(_),me.viewport=new Pt,b[_]=me),me.matrix.fromArray(F.transform.matrix),me.projectionMatrix.fromArray(F.projectionMatrix),me.viewport.set(ee.x,ee.y,ee.width,ee.height),_===0&&P.matrix.copy(me.matrix),R===!0&&P.cameras.push(me)}}for(let Se=0;Se<g.length;Se++){const R=S[Se],_=g[Se];R!==null&&_!==void 0&&_.update(R,oe,l||o)}if(se&&se(C,oe),oe.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:oe.detectedPlanes});let Se=null;for(const R of v)oe.detectedPlanes.has(R)||(Se===null&&(Se=[]),Se.push(R));if(Se!==null)for(const R of Se)v.delete(R),M.delete(R),i.dispatchEvent({type:"planeremoved",data:R});for(const R of oe.detectedPlanes)if(!v.has(R))v.add(R),M.set(R,oe.lastChangedTime),i.dispatchEvent({type:"planeadded",data:R});else{const _=M.get(R);R.lastChangedTime>_&&(M.set(R,R.lastChangedTime),i.dispatchEvent({type:"planechanged",data:R}))}}A=null}const ve=new zh;ve.setAnimationLoop(ce),this.setAnimationLoop=function(C){se=C},this.dispose=function(){}}}function E1(n,e){function t(h,p){p.color.getRGB(h.fogColor.value,wh(n)),p.isFog?(h.fogNear.value=p.near,h.fogFar.value=p.far):p.isFogExp2&&(h.fogDensity.value=p.density)}function i(h,p,x,g,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(h,p):p.isMeshToonMaterial?(r(h,p),u(h,p)):p.isMeshPhongMaterial?(r(h,p),l(h,p)):p.isMeshStandardMaterial?(r(h,p),d(h,p),p.isMeshPhysicalMaterial&&f(h,p,S)):p.isMeshMatcapMaterial?(r(h,p),m(h,p)):p.isMeshDepthMaterial?r(h,p):p.isMeshDistanceMaterial?(r(h,p),A(h,p)):p.isMeshNormalMaterial?r(h,p):p.isLineBasicMaterial?(s(h,p),p.isLineDashedMaterial&&o(h,p)):p.isPointsMaterial?a(h,p,x,g):p.isSpriteMaterial?c(h,p):p.isShadowMaterial?(h.color.value.copy(p.color),h.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(h,p){h.opacity.value=p.opacity,p.color&&h.diffuse.value.copy(p.color),p.emissive&&h.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.bumpMap&&(h.bumpMap.value=p.bumpMap,h.bumpScale.value=p.bumpScale,p.side===rn&&(h.bumpScale.value*=-1)),p.displacementMap&&(h.displacementMap.value=p.displacementMap,h.displacementScale.value=p.displacementScale,h.displacementBias.value=p.displacementBias),p.emissiveMap&&(h.emissiveMap.value=p.emissiveMap),p.normalMap&&(h.normalMap.value=p.normalMap,h.normalScale.value.copy(p.normalScale),p.side===rn&&h.normalScale.value.negate()),p.specularMap&&(h.specularMap.value=p.specularMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);const x=e.get(p).envMap;if(x&&(h.envMap.value=x,h.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=p.reflectivity,h.ior.value=p.ior,h.refractionRatio.value=p.refractionRatio),p.lightMap){h.lightMap.value=p.lightMap;const v=n.useLegacyLights===!0?Math.PI:1;h.lightMapIntensity.value=p.lightMapIntensity*v}p.aoMap&&(h.aoMap.value=p.aoMap,h.aoMapIntensity.value=p.aoMapIntensity);let g;p.map?g=p.map:p.specularMap?g=p.specularMap:p.displacementMap?g=p.displacementMap:p.normalMap?g=p.normalMap:p.bumpMap?g=p.bumpMap:p.roughnessMap?g=p.roughnessMap:p.metalnessMap?g=p.metalnessMap:p.alphaMap?g=p.alphaMap:p.emissiveMap?g=p.emissiveMap:p.clearcoatMap?g=p.clearcoatMap:p.clearcoatNormalMap?g=p.clearcoatNormalMap:p.clearcoatRoughnessMap?g=p.clearcoatRoughnessMap:p.iridescenceMap?g=p.iridescenceMap:p.iridescenceThicknessMap?g=p.iridescenceThicknessMap:p.specularIntensityMap?g=p.specularIntensityMap:p.specularColorMap?g=p.specularColorMap:p.transmissionMap?g=p.transmissionMap:p.thicknessMap?g=p.thicknessMap:p.sheenColorMap?g=p.sheenColorMap:p.sheenRoughnessMap&&(g=p.sheenRoughnessMap),g!==void 0&&(g.isWebGLRenderTarget&&(g=g.texture),g.matrixAutoUpdate===!0&&g.updateMatrix(),h.uvTransform.value.copy(g.matrix));let S;p.aoMap?S=p.aoMap:p.lightMap&&(S=p.lightMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),h.uv2Transform.value.copy(S.matrix))}function s(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity}function o(h,p){h.dashSize.value=p.dashSize,h.totalSize.value=p.dashSize+p.gapSize,h.scale.value=p.scale}function a(h,p,x,g){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.size.value=p.size*x,h.scale.value=g*.5,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let S;p.map?S=p.map:p.alphaMap&&(S=p.alphaMap),S!==void 0&&(S.matrixAutoUpdate===!0&&S.updateMatrix(),h.uvTransform.value.copy(S.matrix))}function c(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.rotation.value=p.rotation,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let x;p.map?x=p.map:p.alphaMap&&(x=p.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),h.uvTransform.value.copy(x.matrix))}function l(h,p){h.specular.value.copy(p.specular),h.shininess.value=Math.max(p.shininess,1e-4)}function u(h,p){p.gradientMap&&(h.gradientMap.value=p.gradientMap)}function d(h,p){h.roughness.value=p.roughness,h.metalness.value=p.metalness,p.roughnessMap&&(h.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(h.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(h.envMapIntensity.value=p.envMapIntensity)}function f(h,p,x){h.ior.value=p.ior,p.sheen>0&&(h.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),h.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(h.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(h.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(h.clearcoat.value=p.clearcoat,h.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(h.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(h.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),h.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===rn&&h.clearcoatNormalScale.value.negate())),p.iridescence>0&&(h.iridescence.value=p.iridescence,h.iridescenceIOR.value=p.iridescenceIOR,h.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(h.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(h.transmission.value=p.transmission,h.transmissionSamplerMap.value=x.texture,h.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(h.transmissionMap.value=p.transmissionMap),h.thickness.value=p.thickness,p.thicknessMap&&(h.thicknessMap.value=p.thicknessMap),h.attenuationDistance.value=p.attenuationDistance,h.attenuationColor.value.copy(p.attenuationColor)),h.specularIntensity.value=p.specularIntensity,h.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(h.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(h.specularColorMap.value=p.specularColorMap)}function m(h,p){p.matcap&&(h.matcap.value=p.matcap)}function A(h,p){h.referencePosition.value.copy(p.referencePosition),h.nearDistance.value=p.nearDistance,h.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function J1(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(35375):0;function c(g,S){const v=S.program;i.uniformBlockBinding(g,v)}function l(g,S){let v=r[g.id];v===void 0&&(A(g),v=u(g),r[g.id]=v,g.addEventListener("dispose",p));const M=S.program;i.updateUBOMapping(g,M);const T=e.render.frame;s[g.id]!==T&&(f(g),s[g.id]=T)}function u(g){const S=d();g.__bindingPointIndex=S;const v=n.createBuffer(),M=g.__size,T=g.usage;return n.bindBuffer(35345,v),n.bufferData(35345,M,T),n.bindBuffer(35345,null),n.bindBufferBase(35345,S,v),v}function d(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(g){const S=r[g.id],v=g.uniforms,M=g.__cache;n.bindBuffer(35345,S);for(let T=0,I=v.length;T<I;T++){const b=v[T];if(m(b,T,M)===!0){const P=b.__offset,w=Array.isArray(b.value)?b.value:[b.value];let L=0;for(let H=0;H<w.length;H++){const G=w[H],N=h(G);typeof G=="number"?(b.__data[0]=G,n.bufferSubData(35345,P+L,b.__data)):G.isMatrix3?(b.__data[0]=G.elements[0],b.__data[1]=G.elements[1],b.__data[2]=G.elements[2],b.__data[3]=G.elements[0],b.__data[4]=G.elements[3],b.__data[5]=G.elements[4],b.__data[6]=G.elements[5],b.__data[7]=G.elements[0],b.__data[8]=G.elements[6],b.__data[9]=G.elements[7],b.__data[10]=G.elements[8],b.__data[11]=G.elements[0]):(G.toArray(b.__data,L),L+=N.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(35345,P,b.__data)}}n.bindBuffer(35345,null)}function m(g,S,v){const M=g.value;if(v[S]===void 0){if(typeof M=="number")v[S]=M;else{const T=Array.isArray(M)?M:[M],I=[];for(let b=0;b<T.length;b++)I.push(T[b].clone());v[S]=I}return!0}else if(typeof M=="number"){if(v[S]!==M)return v[S]=M,!0}else{const T=Array.isArray(v[S])?v[S]:[v[S]],I=Array.isArray(M)?M:[M];for(let b=0;b<T.length;b++){const P=T[b];if(P.equals(I[b])===!1)return P.copy(I[b]),!0}}return!1}function A(g){const S=g.uniforms;let v=0;const M=16;let T=0;for(let I=0,b=S.length;I<b;I++){const P=S[I],w={boundary:0,storage:0},L=Array.isArray(P.value)?P.value:[P.value];for(let H=0,G=L.length;H<G;H++){const N=L[H],J=h(N);w.boundary+=J.boundary,w.storage+=J.storage}if(P.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=v,I>0){T=v%M;const H=M-T;T!==0&&H-w.boundary<0&&(v+=M-T,P.__offset=v)}v+=w.storage}return T=v%M,T>0&&(v+=M-T),g.__size=v,g.__cache={},this}function h(g){const S={boundary:0,storage:0};return typeof g=="number"?(S.boundary=4,S.storage=4):g.isVector2?(S.boundary=8,S.storage=8):g.isVector3||g.isColor?(S.boundary=16,S.storage=12):g.isVector4?(S.boundary=16,S.storage=16):g.isMatrix3?(S.boundary=48,S.storage=48):g.isMatrix4?(S.boundary=64,S.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),S}function p(g){const S=g.target;S.removeEventListener("dispose",p);const v=o.indexOf(S.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function x(){for(const g in r)n.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:c,update:l,dispose:x}}function q1(){const n=Ua("canvas");return n.style.display="block",n}function vl(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:q1(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,o=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,a=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,c=n.powerPreference!==void 0?n.powerPreference:"default",l=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=n.alpha!==void 0?n.alpha:!1;let d=null,f=null;const m=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Qi,this.useLegacyLights=!0,this.toneMapping=$n,this.toneMappingExposure=1;const h=this;let p=!1,x=0,g=0,S=null,v=-1,M=null;const T=new Pt,I=new Pt;let b=null,P=e.width,w=e.height,L=1,H=null,G=null;const N=new Pt(0,0,P,w),J=new Pt(0,0,P,w);let q=!1;const X=new gl;let Z=!1,se=!1,ce=null;const ve=new bt,C=new Y,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Se(){return S===null?L:1}let R=t;function _(O,E){for(let $=0;$<O.length;$++){const D=O[$],re=e.getContext(D,E);if(re!==null)return re}return null}try{const O={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${xl}`),e.addEventListener("webglcontextlost",Ne,!1),e.addEventListener("webglcontextrestored",He,!1),e.addEventListener("webglcontextcreationerror",Ge,!1),R===null){const E=["webgl2","webgl","experimental-webgl"];if(h.isWebGL1Renderer===!0&&E.shift(),R=_(E,O),R===null)throw _(E)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}R.getShaderPrecisionFormat===void 0&&(R.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(O){throw console.error("THREE.WebGLRenderer: "+O.message),O}let F,ee,me,ye,be,xe,k,V,U,ie,te,ae,de,ue,pe,j,y,z,K,Q,le,je,fe,B;function Te(){F=new tP(R),ee=new BO(R,F,n),F.init(ee),je=new z1(R,F,ee),me=new N1(R,F,ee),ye=new rP,be=new y1,xe=new W1(R,F,me,be,ee,je,ye),k=new QO(h),V=new eP(h),U=new pM(R,ee),fe=new YO(R,F,U,ee),ie=new nP(R,U,ye,fe),te=new cP(R,ie,U,ye),K=new oP(R,ee,xe),j=new XO(be),ae=new g1(h,k,V,F,ee,fe,j),de=new E1(h,be),ue=new v1,pe=new I1(F,ee),z=new CO(h,k,V,me,te,u,o),y=new w1(h,te,ee),B=new J1(R,ye,ee,me),Q=new KO(R,F,ye,ee),le=new iP(R,F,ye,ee),ye.programs=ae.programs,h.capabilities=ee,h.extensions=F,h.properties=be,h.renderLists=ue,h.shadowMap=y,h.state=me,h.info=ye}Te();const ke=new Z1(h,R);this.xr=ke,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const O=F.get("WEBGL_lose_context");O&&O.loseContext()},this.forceContextRestore=function(){const O=F.get("WEBGL_lose_context");O&&O.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(O){O!==void 0&&(L=O,this.setSize(P,w,!1))},this.getSize=function(O){return O.set(P,w)},this.setSize=function(O,E,$=!0){if(ke.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=O,w=E,e.width=Math.floor(O*L),e.height=Math.floor(E*L),$===!0&&(e.style.width=O+"px",e.style.height=E+"px"),this.setViewport(0,0,O,E)},this.getDrawingBufferSize=function(O){return O.set(P*L,w*L).floor()},this.setDrawingBufferSize=function(O,E,$){P=O,w=E,L=$,e.width=Math.floor(O*$),e.height=Math.floor(E*$),this.setViewport(0,0,O,E)},this.getCurrentViewport=function(O){return O.copy(T)},this.getViewport=function(O){return O.copy(N)},this.setViewport=function(O,E,$,D){O.isVector4?N.set(O.x,O.y,O.z,O.w):N.set(O,E,$,D),me.viewport(T.copy(N).multiplyScalar(L).floor())},this.getScissor=function(O){return O.copy(J)},this.setScissor=function(O,E,$,D){O.isVector4?J.set(O.x,O.y,O.z,O.w):J.set(O,E,$,D),me.scissor(I.copy(J).multiplyScalar(L).floor())},this.getScissorTest=function(){return q},this.setScissorTest=function(O){me.setScissorTest(q=O)},this.setOpaqueSort=function(O){H=O},this.setTransparentSort=function(O){G=O},this.getClearColor=function(O){return O.copy(z.getClearColor())},this.setClearColor=function(){z.setClearColor.apply(z,arguments)},this.getClearAlpha=function(){return z.getClearAlpha()},this.setClearAlpha=function(){z.setClearAlpha.apply(z,arguments)},this.clear=function(O=!0,E=!0,$=!0){let D=0;O&&(D|=16384),E&&(D|=256),$&&(D|=1024),R.clear(D)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ne,!1),e.removeEventListener("webglcontextrestored",He,!1),e.removeEventListener("webglcontextcreationerror",Ge,!1),ue.dispose(),pe.dispose(),be.dispose(),k.dispose(),V.dispose(),te.dispose(),fe.dispose(),B.dispose(),ae.dispose(),ke.dispose(),ke.removeEventListener("sessionstart",he),ke.removeEventListener("sessionend",Me),ce&&(ce.dispose(),ce=null),Re.stop()};function Ne(O){O.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function He(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const O=ye.autoReset,E=y.enabled,$=y.autoUpdate,D=y.needsUpdate,re=y.type;Te(),ye.autoReset=O,y.enabled=E,y.autoUpdate=$,y.needsUpdate=D,y.type=re}function Ge(O){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",O.statusMessage)}function ze(O){const E=O.target;E.removeEventListener("dispose",ze),qe(E)}function qe(O){ft(O),be.remove(O)}function ft(O){const E=be.get(O).programs;E!==void 0&&(E.forEach(function($){ae.releaseProgram($)}),O.isShaderMaterial&&ae.releaseShaderCache(O))}this.renderBufferDirect=function(O,E,$,D,re,Ve){E===null&&(E=oe);const Le=re.isMesh&&re.matrixWorld.determinant()<0,Ee=am(O,E,$,D,re);me.setMaterial(D,Le);let Je=$.index,Ke=1;D.wireframe===!0&&(Je=ie.getWireframeAttribute($),Ke=2);const Fe=$.drawRange,Ce=$.attributes.position;let ht=Fe.start*Ke,Bt=(Fe.start+Fe.count)*Ke;Ve!==null&&(ht=Math.max(ht,Ve.start*Ke),Bt=Math.min(Bt,(Ve.start+Ve.count)*Ke)),Je!==null?(ht=Math.max(ht,0),Bt=Math.min(Bt,Je.count)):Ce!=null&&(ht=Math.max(ht,0),Bt=Math.min(Bt,Ce.count));const Un=Bt-ht;if(Un<0||Un===1/0)return;fe.setup(re,D,Ee,$,Je);let Mi,mt=Q;if(Je!==null&&(Mi=U.get(Je),mt=le,mt.setIndex(Mi)),re.isMesh)D.wireframe===!0?(me.setLineWidth(D.wireframeLinewidth*Se()),mt.setMode(1)):mt.setMode(4);else if(re.isLine){let Ye=D.linewidth;Ye===void 0&&(Ye=1),me.setLineWidth(Ye*Se()),re.isLineSegments?mt.setMode(1):re.isLineLoop?mt.setMode(2):mt.setMode(3)}else re.isPoints?mt.setMode(0):re.isSprite&&mt.setMode(4);if(re.isInstancedMesh)mt.renderInstances(ht,Un,re.count);else if($.isInstancedBufferGeometry){const Ye=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,co=Math.min($.instanceCount,Ye);mt.renderInstances(ht,Un,co)}else mt.render(ht,Un)},this.compile=function(O,E){function $(D,re,Ve){D.transparent===!0&&D.side===Ai&&D.forceSinglePass===!1?(D.side=rn,D.needsUpdate=!0,cn(D,re,Ve),D.side=ji,D.needsUpdate=!0,cn(D,re,Ve),D.side=Ai):cn(D,re,Ve)}f=pe.get(O),f.init(),A.push(f),O.traverseVisible(function(D){D.isLight&&D.layers.test(E.layers)&&(f.pushLight(D),D.castShadow&&f.pushShadow(D))}),f.setupLights(h.useLegacyLights),O.traverse(function(D){const re=D.material;if(re)if(Array.isArray(re))for(let Ve=0;Ve<re.length;Ve++){const Le=re[Ve];$(Le,O,D)}else $(re,O,D)}),A.pop(),f=null};let W=null;function ne(O){W&&W(O)}function he(){Re.stop()}function Me(){Re.start()}const Re=new zh;Re.setAnimationLoop(ne),typeof self!="undefined"&&Re.setContext(self),this.setAnimationLoop=function(O){W=O,ke.setAnimationLoop(O),O===null?Re.stop():Re.start()},ke.addEventListener("sessionstart",he),ke.addEventListener("sessionend",Me),this.render=function(O,E){if(E!==void 0&&E.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),E.parent===null&&E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),ke.enabled===!0&&ke.isPresenting===!0&&(ke.cameraAutoUpdate===!0&&ke.updateCamera(E),E=ke.getCamera()),O.isScene===!0&&O.onBeforeRender(h,O,E,S),f=pe.get(O,A.length),f.init(),A.push(f),ve.multiplyMatrices(E.projectionMatrix,E.matrixWorldInverse),X.setFromProjectionMatrix(ve),se=this.localClippingEnabled,Z=j.init(this.clippingPlanes,se),d=ue.get(O,m.length),d.init(),m.push(d),at(O,E,0,h.sortObjects),d.finish(),h.sortObjects===!0&&d.sort(H,G),Z===!0&&j.beginShadows();const $=f.state.shadowsArray;if(y.render($,O,E),Z===!0&&j.endShadows(),this.info.autoReset===!0&&this.info.reset(),z.render(d,O),f.setupLights(h.useLegacyLights),E.isArrayCamera){const D=E.cameras;for(let re=0,Ve=D.length;re<Ve;re++){const Le=D[re];jt(d,O,Le,Le.viewport)}}else jt(d,O,E);S!==null&&(xe.updateMultisampleRenderTarget(S),xe.updateRenderTargetMipmap(S)),O.isScene===!0&&O.onAfterRender(h,O,E),fe.resetDefaultState(),v=-1,M=null,A.pop(),A.length>0?f=A[A.length-1]:f=null,m.pop(),m.length>0?d=m[m.length-1]:d=null};function at(O,E,$,D){if(O.visible===!1)return;if(O.layers.test(E.layers)){if(O.isGroup)$=O.renderOrder;else if(O.isLOD)O.autoUpdate===!0&&O.update(E);else if(O.isLight)f.pushLight(O),O.castShadow&&f.pushShadow(O);else if(O.isSprite){if(!O.frustumCulled||X.intersectsSprite(O)){D&&C.setFromMatrixPosition(O.matrixWorld).applyMatrix4(ve);const Le=te.update(O),Ee=O.material;Ee.visible&&d.push(O,Le,Ee,$,C.z,null)}}else if((O.isMesh||O.isLine||O.isPoints)&&(O.isSkinnedMesh&&O.skeleton.frame!==ye.render.frame&&(O.skeleton.update(),O.skeleton.frame=ye.render.frame),!O.frustumCulled||X.intersectsObject(O))){D&&C.setFromMatrixPosition(O.matrixWorld).applyMatrix4(ve);const Le=te.update(O),Ee=O.material;if(Array.isArray(Ee)){const Je=Le.groups;for(let Ke=0,Fe=Je.length;Ke<Fe;Ke++){const Ce=Je[Ke],ht=Ee[Ce.materialIndex];ht&&ht.visible&&d.push(O,Le,ht,$,C.z,Ce)}}else Ee.visible&&d.push(O,Le,Ee,$,C.z,null)}}const Ve=O.children;for(let Le=0,Ee=Ve.length;Le<Ee;Le++)at(Ve[Le],E,$,D)}function jt(O,E,$,D){const re=O.opaque,Ve=O.transmissive,Le=O.transparent;f.setupLightsView($),Z===!0&&j.setGlobalState(h.clippingPlanes,$),Ve.length>0&&wt(re,E,$),D&&me.viewport(T.copy(D)),re.length>0&&Pn(re,E,$),Ve.length>0&&Pn(Ve,E,$),Le.length>0&&Pn(Le,E,$),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function wt(O,E,$){const D=ee.isWebGL2;ce===null&&(ce=new _i(1024,1024,{generateMipmaps:!0,type:F.has("EXT_color_buffer_half_float")?Ts:Xi,minFilter:Is,samples:D&&s===!0?4:0}));const re=h.getRenderTarget();h.setRenderTarget(ce),h.clear();const Ve=h.toneMapping;h.toneMapping=$n,Pn(O,E,$),h.toneMapping=Ve,xe.updateMultisampleRenderTarget(ce),xe.updateRenderTargetMipmap(ce),h.setRenderTarget(re)}function Pn(O,E,$){const D=E.isScene===!0?E.overrideMaterial:null;for(let re=0,Ve=O.length;re<Ve;re++){const Le=O[re],Ee=Le.object,Je=Le.geometry,Ke=D===null?Le.material:D,Fe=Le.group;Ee.layers.test($.layers)&&pt(Ee,E,$,Je,Ke,Fe)}}function pt(O,E,$,D,re,Ve){O.onBeforeRender(h,E,$,D,re,Ve),O.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,O.matrixWorld),O.normalMatrix.getNormalMatrix(O.modelViewMatrix),re.onBeforeRender(h,E,$,D,O,Ve),re.transparent===!0&&re.side===Ai&&re.forceSinglePass===!1?(re.side=rn,re.needsUpdate=!0,h.renderBufferDirect($,E,D,re,O,Ve),re.side=ji,re.needsUpdate=!0,h.renderBufferDirect($,E,D,re,O,Ve),re.side=Ai):h.renderBufferDirect($,E,D,re,O,Ve),O.onAfterRender(h,E,$,D,re,Ve)}function cn(O,E,$){E.isScene!==!0&&(E=oe);const D=be.get(O),re=f.state.lights,Ve=f.state.shadowsArray,Le=re.state.version,Ee=ae.getParameters(O,re.state,Ve,E,$),Je=ae.getProgramCacheKey(Ee);let Ke=D.programs;D.environment=O.isMeshStandardMaterial?E.environment:null,D.fog=E.fog,D.envMap=(O.isMeshStandardMaterial?V:k).get(O.envMap||D.environment),Ke===void 0&&(O.addEventListener("dispose",ze),Ke=new Map,D.programs=Ke);let Fe=Ke.get(Je);if(Fe!==void 0){if(D.currentProgram===Fe&&D.lightsStateVersion===Le)return Rn(O,Ee),Fe}else Ee.uniforms=ae.getUniforms(O),O.onBuild($,Ee,h),O.onBeforeCompile(Ee,h),Fe=ae.acquireProgram(Ee,Je),Ke.set(Je,Fe),D.uniforms=Ee.uniforms;const Ce=D.uniforms;(!O.isShaderMaterial&&!O.isRawShaderMaterial||O.clipping===!0)&&(Ce.clippingPlanes=j.uniform),Rn(O,Ee),D.needsLights=cm(O),D.lightsStateVersion=Le,D.needsLights&&(Ce.ambientLightColor.value=re.state.ambient,Ce.lightProbe.value=re.state.probe,Ce.directionalLights.value=re.state.directional,Ce.directionalLightShadows.value=re.state.directionalShadow,Ce.spotLights.value=re.state.spot,Ce.spotLightShadows.value=re.state.spotShadow,Ce.rectAreaLights.value=re.state.rectArea,Ce.ltc_1.value=re.state.rectAreaLTC1,Ce.ltc_2.value=re.state.rectAreaLTC2,Ce.pointLights.value=re.state.point,Ce.pointLightShadows.value=re.state.pointShadow,Ce.hemisphereLights.value=re.state.hemi,Ce.directionalShadowMap.value=re.state.directionalShadowMap,Ce.directionalShadowMatrix.value=re.state.directionalShadowMatrix,Ce.spotShadowMap.value=re.state.spotShadowMap,Ce.spotLightMatrix.value=re.state.spotLightMatrix,Ce.spotLightMap.value=re.state.spotLightMap,Ce.pointShadowMap.value=re.state.pointShadowMap,Ce.pointShadowMatrix.value=re.state.pointShadowMatrix);const ht=Fe.getUniforms(),Bt=ya.seqWithValue(ht.seq,Ce);return D.currentProgram=Fe,D.uniformsList=Bt,Fe}function Rn(O,E){const $=be.get(O);$.outputEncoding=E.outputEncoding,$.instancing=E.instancing,$.skinning=E.skinning,$.morphTargets=E.morphTargets,$.morphNormals=E.morphNormals,$.morphColors=E.morphColors,$.morphTargetsCount=E.morphTargetsCount,$.numClippingPlanes=E.numClippingPlanes,$.numIntersection=E.numClipIntersection,$.vertexAlphas=E.vertexAlphas,$.vertexTangents=E.vertexTangents,$.toneMapping=E.toneMapping}function am(O,E,$,D,re){E.isScene!==!0&&(E=oe),xe.resetTextureUnits();const Ve=E.fog,Le=D.isMeshStandardMaterial?E.environment:null,Ee=S===null?h.outputEncoding:S.isXRRenderTarget===!0?S.texture.encoding:Qi,Je=(D.isMeshStandardMaterial?V:k).get(D.envMap||Le),Ke=D.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Fe=!!D.normalMap&&!!$.attributes.tangent,Ce=!!$.morphAttributes.position,ht=!!$.morphAttributes.normal,Bt=!!$.morphAttributes.color,Un=D.toneMapped?h.toneMapping:$n,Mi=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,mt=Mi!==void 0?Mi.length:0,Ye=be.get(D),co=f.state.lights;if(Z===!0&&(se===!0||O!==M)){const Xt=O===M&&D.id===v;j.setState(D,O,Xt)}let vt=!1;D.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==co.state.version||Ye.outputEncoding!==Ee||re.isInstancedMesh&&Ye.instancing===!1||!re.isInstancedMesh&&Ye.instancing===!0||re.isSkinnedMesh&&Ye.skinning===!1||!re.isSkinnedMesh&&Ye.skinning===!0||Ye.envMap!==Je||D.fog===!0&&Ye.fog!==Ve||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==j.numPlanes||Ye.numIntersection!==j.numIntersection)||Ye.vertexAlphas!==Ke||Ye.vertexTangents!==Fe||Ye.morphTargets!==Ce||Ye.morphNormals!==ht||Ye.morphColors!==Bt||Ye.toneMapping!==Un||ee.isWebGL2===!0&&Ye.morphTargetsCount!==mt)&&(vt=!0):(vt=!0,Ye.__version=D.version);let ki=Ye.currentProgram;vt===!0&&(ki=cn(D,E,re));let Vl=!1,Xr=!1,lo=!1;const Nt=ki.getUniforms(),Oi=Ye.uniforms;if(me.useProgram(ki.program)&&(Vl=!0,Xr=!0,lo=!0),D.id!==v&&(v=D.id,Xr=!0),Vl||M!==O){if(Nt.setValue(R,"projectionMatrix",O.projectionMatrix),ee.logarithmicDepthBuffer&&Nt.setValue(R,"logDepthBufFC",2/(Math.log(O.far+1)/Math.LN2)),M!==O&&(M=O,Xr=!0,lo=!0),D.isShaderMaterial||D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshStandardMaterial||D.envMap){const Xt=Nt.map.cameraPosition;Xt!==void 0&&Xt.setValue(R,C.setFromMatrixPosition(O.matrixWorld))}(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial)&&Nt.setValue(R,"isOrthographic",O.isOrthographicCamera===!0),(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial||D.isShadowMaterial||re.isSkinnedMesh)&&Nt.setValue(R,"viewMatrix",O.matrixWorldInverse)}if(re.isSkinnedMesh){Nt.setOptional(R,re,"bindMatrix"),Nt.setOptional(R,re,"bindMatrixInverse");const Xt=re.skeleton;Xt&&(ee.floatVertexTextures?(Xt.boneTexture===null&&Xt.computeBoneTexture(),Nt.setValue(R,"boneTexture",Xt.boneTexture,xe),Nt.setValue(R,"boneTextureSize",Xt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const uo=$.morphAttributes;if((uo.position!==void 0||uo.normal!==void 0||uo.color!==void 0&&ee.isWebGL2===!0)&&K.update(re,$,ki),(Xr||Ye.receiveShadow!==re.receiveShadow)&&(Ye.receiveShadow=re.receiveShadow,Nt.setValue(R,"receiveShadow",re.receiveShadow)),D.isMeshGouraudMaterial&&D.envMap!==null&&(Oi.envMap.value=Je,Oi.flipEnvMap.value=Je.isCubeTexture&&Je.isRenderTargetTexture===!1?-1:1),Xr&&(Nt.setValue(R,"toneMappingExposure",h.toneMappingExposure),Ye.needsLights&&om(Oi,lo),Ve&&D.fog===!0&&de.refreshFogUniforms(Oi,Ve),de.refreshMaterialUniforms(Oi,D,L,w,ce),ya.upload(R,Ye.uniformsList,Oi,xe)),D.isShaderMaterial&&D.uniformsNeedUpdate===!0&&(ya.upload(R,Ye.uniformsList,Oi,xe),D.uniformsNeedUpdate=!1),D.isSpriteMaterial&&Nt.setValue(R,"center",re.center),Nt.setValue(R,"modelViewMatrix",re.modelViewMatrix),Nt.setValue(R,"normalMatrix",re.normalMatrix),Nt.setValue(R,"modelMatrix",re.matrixWorld),D.isShaderMaterial||D.isRawShaderMaterial){const Xt=D.uniformsGroups;for(let fo=0,lm=Xt.length;fo<lm;fo++)if(ee.isWebGL2){const wl=Xt[fo];B.update(wl,ki),B.bind(wl,ki)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ki}function om(O,E){O.ambientLightColor.needsUpdate=E,O.lightProbe.needsUpdate=E,O.directionalLights.needsUpdate=E,O.directionalLightShadows.needsUpdate=E,O.pointLights.needsUpdate=E,O.pointLightShadows.needsUpdate=E,O.spotLights.needsUpdate=E,O.spotLightShadows.needsUpdate=E,O.rectAreaLights.needsUpdate=E,O.hemisphereLights.needsUpdate=E}function cm(O){return O.isMeshLambertMaterial||O.isMeshToonMaterial||O.isMeshPhongMaterial||O.isMeshStandardMaterial||O.isShadowMaterial||O.isShaderMaterial&&O.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return g},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(O,E,$){be.get(O.texture).__webglTexture=E,be.get(O.depthTexture).__webglTexture=$;const D=be.get(O);D.__hasExternalTextures=!0,D.__hasExternalTextures&&(D.__autoAllocateDepthBuffer=$===void 0,D.__autoAllocateDepthBuffer||F.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),D.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(O,E){const $=be.get(O);$.__webglFramebuffer=E,$.__useDefaultFramebuffer=E===void 0},this.setRenderTarget=function(O,E=0,$=0){S=O,x=E,g=$;let D=!0,re=null,Ve=!1,Le=!1;if(O){const Je=be.get(O);Je.__useDefaultFramebuffer!==void 0?(me.bindFramebuffer(36160,null),D=!1):Je.__webglFramebuffer===void 0?xe.setupRenderTarget(O):Je.__hasExternalTextures&&xe.rebindTextures(O,be.get(O.texture).__webglTexture,be.get(O.depthTexture).__webglTexture);const Ke=O.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Le=!0);const Fe=be.get(O).__webglFramebuffer;O.isWebGLCubeRenderTarget?(re=Fe[E],Ve=!0):ee.isWebGL2&&O.samples>0&&xe.useMultisampledRTT(O)===!1?re=be.get(O).__webglMultisampledFramebuffer:re=Fe,T.copy(O.viewport),I.copy(O.scissor),b=O.scissorTest}else T.copy(N).multiplyScalar(L).floor(),I.copy(J).multiplyScalar(L).floor(),b=q;if(me.bindFramebuffer(36160,re)&&ee.drawBuffers&&D&&me.drawBuffers(O,re),me.viewport(T),me.scissor(I),me.setScissorTest(b),Ve){const Je=be.get(O.texture);R.framebufferTexture2D(36160,36064,34069+E,Je.__webglTexture,$)}else if(Le){const Je=be.get(O.texture),Ke=E||0;R.framebufferTextureLayer(36160,36064,Je.__webglTexture,$||0,Ke)}v=-1},this.readRenderTargetPixels=function(O,E,$,D,re,Ve,Le){if(!(O&&O.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=be.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&Le!==void 0&&(Ee=Ee[Le]),Ee){me.bindFramebuffer(36160,Ee);try{const Je=O.texture,Ke=Je.format,Fe=Je.type;if(Ke!==Mn&&je.convert(Ke)!==R.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ce=Fe===Ts&&(F.has("EXT_color_buffer_half_float")||ee.isWebGL2&&F.has("EXT_color_buffer_float"));if(Fe!==Xi&&je.convert(Fe)!==R.getParameter(35738)&&!(Fe===Ei&&(ee.isWebGL2||F.has("OES_texture_float")||F.has("WEBGL_color_buffer_float")))&&!Ce){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}E>=0&&E<=O.width-D&&$>=0&&$<=O.height-re&&R.readPixels(E,$,D,re,je.convert(Ke),je.convert(Fe),Ve)}finally{const Je=S!==null?be.get(S).__webglFramebuffer:null;me.bindFramebuffer(36160,Je)}}},this.copyFramebufferToTexture=function(O,E,$=0){const D=Math.pow(2,-$),re=Math.floor(E.image.width*D),Ve=Math.floor(E.image.height*D);xe.setTexture2D(E,0),R.copyTexSubImage2D(3553,$,0,0,O.x,O.y,re,Ve),me.unbindTexture()},this.copyTextureToTexture=function(O,E,$,D=0){const re=E.image.width,Ve=E.image.height,Le=je.convert($.format),Ee=je.convert($.type);xe.setTexture2D($,0),R.pixelStorei(37440,$.flipY),R.pixelStorei(37441,$.premultiplyAlpha),R.pixelStorei(3317,$.unpackAlignment),E.isDataTexture?R.texSubImage2D(3553,D,O.x,O.y,re,Ve,Le,Ee,E.image.data):E.isCompressedTexture?R.compressedTexSubImage2D(3553,D,O.x,O.y,E.mipmaps[0].width,E.mipmaps[0].height,Le,E.mipmaps[0].data):R.texSubImage2D(3553,D,O.x,O.y,Le,Ee,E.image),D===0&&$.generateMipmaps&&R.generateMipmap(3553),me.unbindTexture()},this.copyTextureToTexture3D=function(O,E,$,D,re=0){if(h.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ve=O.max.x-O.min.x+1,Le=O.max.y-O.min.y+1,Ee=O.max.z-O.min.z+1,Je=je.convert(D.format),Ke=je.convert(D.type);let Fe;if(D.isData3DTexture)xe.setTexture3D(D,0),Fe=32879;else if(D.isDataArrayTexture)xe.setTexture2DArray(D,0),Fe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(37440,D.flipY),R.pixelStorei(37441,D.premultiplyAlpha),R.pixelStorei(3317,D.unpackAlignment);const Ce=R.getParameter(3314),ht=R.getParameter(32878),Bt=R.getParameter(3316),Un=R.getParameter(3315),Mi=R.getParameter(32877),mt=$.isCompressedTexture?$.mipmaps[0]:$.image;R.pixelStorei(3314,mt.width),R.pixelStorei(32878,mt.height),R.pixelStorei(3316,O.min.x),R.pixelStorei(3315,O.min.y),R.pixelStorei(32877,O.min.z),$.isDataTexture||$.isData3DTexture?R.texSubImage3D(Fe,re,E.x,E.y,E.z,Ve,Le,Ee,Je,Ke,mt.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),R.compressedTexSubImage3D(Fe,re,E.x,E.y,E.z,Ve,Le,Ee,Je,mt.data)):R.texSubImage3D(Fe,re,E.x,E.y,E.z,Ve,Le,Ee,Je,Ke,mt),R.pixelStorei(3314,Ce),R.pixelStorei(32878,ht),R.pixelStorei(3316,Bt),R.pixelStorei(3315,Un),R.pixelStorei(32877,Mi),re===0&&D.generateMipmaps&&R.generateMipmap(Fe),me.unbindTexture()},this.initTexture=function(O){O.isCubeTexture?xe.setTextureCube(O,0):O.isData3DTexture?xe.setTexture3D(O,0):O.isDataArrayTexture||O.isCompressedArrayTexture?xe.setTexture2DArray(O,0):xe.setTexture2D(O,0),me.unbindTexture()},this.resetState=function(){x=0,g=0,S=null,me.reset(),fe.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(vl.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(n){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!n}}});class F1 extends vl{}F1.prototype.isWebGL1Renderer=!0;class C1 extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Y1 extends Ls{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jh,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class K1 extends Vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ic=new bt,Af=new Y,xf=new Y;class B1{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gl,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Af.setFromMatrixPosition(e.matrixWorld),t.position.copy(Af),xf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xf),t.updateMatrixWorld(),ic.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ic),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ic)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class X1 extends B1{constructor(){super(new Dh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Q1 extends K1{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new X1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class _1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Sf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Sf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Sf(){return(typeof performance=="undefined"?Date:performance).now()}const $1="\\[\\]\\.:\\/";""+$1.replace("\\.","");typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xl}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xl);function e2(){const n=new hn(35,1,.1,100);return n.position.set(0,0,10),n}function t2(){const n=new Kr(2,2,2),e=new Y1({color:"purple"}),t=new Qn(n,e);t.rotation.set(-.5,-.1,.8);const i=Lv.degToRad(30);return t.tick=r=>{t.rotation.z+=r*i,t.rotation.x+=r*i,t.rotation.y+=r*i},t}function n2(){const n=new C1;return n.background=new $e("skyblue"),n}function i2(){const n=new Q1("white",8);return n.position.set(10,10,10),n}function r2(){const n=new vl({antialias:!0});return n.useLegacyLights,n}const bf=(n,e,t)=>{e.aspect=n.clientWidth/n.clientHeight,e.updateProjectionMatrix(),t.setSize(n.clientWidth,n.clientHeight),t.setPixelRatio(window.devicePixelRatio)};class s2{constructor(e,t,i){bf(e,t,i),window.addEventListener("resize",()=>{bf(e,t,i),this.onResize()})}onResize(){}}const a2=new _1;class o2{constructor(e,t,i){this.camera=e,this.scene=t,this.renderer=i,this.updatables=[]}start(){this.renderer.setAnimationLoop(()=>{this.tick(),this.renderer.render(this.scene,this.camera)})}stop(){this.renderer.setAnimationLoop(null)}tick(){const e=a2.getDelta();for(const t of this.updatables)t.tick(e)}}let ha,cs,ma,Aa;class c2{constructor(e){ha=e2(),ma=n2(),cs=r2(),Aa=new o2(ha,ma,cs),e.append(cs.domElement);const t=t2();Aa.updatables.push(t);const i=i2();ma.add(t,i),new s2(e,ha,cs)}render(){cs.render(ma,ha)}start(){Aa.start()}stop(){Aa.stop()}}const l2={name:"threeGuild",setup(n,e){const t=et(null),i=Zt({isRotate:!1,world:{}}),r=function(){i.isRotate?(i.isRotate=!1,i.world.stop()):(i.isRotate=!0,i.world.start())};return Et(()=>{const s=document.getElementById("d_canvasID");i.world=new c2(s),i.world.render()}),Zn(Mt({},ti(i)),{cc:r,canvasRef:t})}},u2={id:"d_canvasID",ref:"canvasRef"};function d2(n,e,t,i,r,s){return Pe(),we(_e,null,[Oe("div",u2,null,512),Oe("button",{onClick:e[0]||(e[0]=(...o)=>i.cc&&i.cc(...o))},Yt(n.isRotate?"\u505C\u6B62":"\u65CB\u8F6C"),1)],64)}var gf=Xe(l2,[["render",d2],["__scopeId","data-v-8613aea4"],["__file","index.vue"]]),_n=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Nc={},Jh={},Ml={exports:{}},qh=function(e,t){return function(){for(var r=new Array(arguments.length),s=0;s<r.length;s++)r[s]=arguments[s];return e.apply(t,r)}},f2=qh,vi=Object.prototype.toString;function kl(n){return Array.isArray(n)}function Wc(n){return typeof n=="undefined"}function p2(n){return n!==null&&!Wc(n)&&n.constructor!==null&&!Wc(n.constructor)&&typeof n.constructor.isBuffer=="function"&&n.constructor.isBuffer(n)}function Fh(n){return vi.call(n)==="[object ArrayBuffer]"}function h2(n){return vi.call(n)==="[object FormData]"}function m2(n){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(n):e=n&&n.buffer&&Fh(n.buffer),e}function A2(n){return typeof n=="string"}function x2(n){return typeof n=="number"}function Ch(n){return n!==null&&typeof n=="object"}function ja(n){if(vi.call(n)!=="[object Object]")return!1;var e=Object.getPrototypeOf(n);return e===null||e===Object.prototype}function S2(n){return vi.call(n)==="[object Date]"}function b2(n){return vi.call(n)==="[object File]"}function g2(n){return vi.call(n)==="[object Blob]"}function Yh(n){return vi.call(n)==="[object Function]"}function y2(n){return Ch(n)&&Yh(n.pipe)}function j2(n){return vi.call(n)==="[object URLSearchParams]"}function v2(n){return n.trim?n.trim():n.replace(/^\s+|\s+$/g,"")}function M2(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function Ol(n,e){if(!(n===null||typeof n=="undefined"))if(typeof n!="object"&&(n=[n]),kl(n))for(var t=0,i=n.length;t<i;t++)e.call(null,n[t],t,n);else for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.call(null,n[r],r,n)}function zc(){var n={};function e(r,s){ja(n[s])&&ja(r)?n[s]=zc(n[s],r):ja(r)?n[s]=zc({},r):kl(r)?n[s]=r.slice():n[s]=r}for(var t=0,i=arguments.length;t<i;t++)Ol(arguments[t],e);return n}function k2(n,e,t){return Ol(e,function(r,s){t&&typeof r=="function"?n[s]=f2(r,t):n[s]=r}),n}function O2(n){return n.charCodeAt(0)===65279&&(n=n.slice(1)),n}var Kt={isArray:kl,isArrayBuffer:Fh,isBuffer:p2,isFormData:h2,isArrayBufferView:m2,isString:A2,isNumber:x2,isObject:Ch,isPlainObject:ja,isUndefined:Wc,isDate:S2,isFile:b2,isBlob:g2,isFunction:Yh,isStream:y2,isURLSearchParams:j2,isStandardBrowserEnv:M2,forEach:Ol,merge:zc,extend:k2,trim:v2,stripBOM:O2},Sr=Kt;function yf(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var Kh=function(e,t,i){if(!t)return e;var r;if(i)r=i(t);else if(Sr.isURLSearchParams(t))r=t.toString();else{var s=[];Sr.forEach(t,function(c,l){c===null||typeof c=="undefined"||(Sr.isArray(c)?l=l+"[]":c=[c],Sr.forEach(c,function(d){Sr.isDate(d)?d=d.toISOString():Sr.isObject(d)&&(d=JSON.stringify(d)),s.push(yf(l)+"="+yf(d))}))}),r=s.join("&")}if(r){var o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+r}return e},P2=Kt;function io(){this.handlers=[]}io.prototype.use=function(e,t,i){return this.handlers.push({fulfilled:e,rejected:t,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1};io.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};io.prototype.forEach=function(e){P2.forEach(this.handlers,function(i){i!==null&&e(i)})};var R2=io,I2=Kt,T2=function(e,t){I2.forEach(e,function(r,s){s!==t&&s.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[s])})},Bh=function(e,t,i,r,s){return e.config=t,i&&(e.code=i),e.request=r,e.response=s,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e},Xh={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},H2=Bh,Qh=function(e,t,i,r,s){var o=new Error(e);return H2(o,t,i,r,s)},G2=Qh,V2=function(e,t,i){var r=i.config.validateStatus;!i.status||!r||r(i.status)?e(i):t(G2("Request failed with status code "+i.status,i.config,null,i.request,i))},xa=Kt,w2=xa.isStandardBrowserEnv()?function(){return{write:function(t,i,r,s,o,a){var c=[];c.push(t+"="+encodeURIComponent(i)),xa.isNumber(r)&&c.push("expires="+new Date(r).toGMTString()),xa.isString(s)&&c.push("path="+s),xa.isString(o)&&c.push("domain="+o),a===!0&&c.push("secure"),document.cookie=c.join("; ")},read:function(t){var i=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return i?decodeURIComponent(i[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),N2=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},W2=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},z2=N2,D2=W2,L2=function(e,t){return e&&!z2(t)?D2(e,t):t},rc=Kt,U2=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],Z2=function(e){var t={},i,r,s;return e&&rc.forEach(e.split(`
`),function(a){if(s=a.indexOf(":"),i=rc.trim(a.substr(0,s)).toLowerCase(),r=rc.trim(a.substr(s+1)),i){if(t[i]&&U2.indexOf(i)>=0)return;i==="set-cookie"?t[i]=(t[i]?t[i]:[]).concat([r]):t[i]=t[i]?t[i]+", "+r:r}}),t},jf=Kt,E2=jf.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a"),i;function r(s){var o=s;return e&&(t.setAttribute("href",o),o=t.href),t.setAttribute("href",o),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return i=r(window.location.href),function(o){var a=jf.isString(o)?r(o):o;return a.protocol===i.protocol&&a.host===i.host}}():function(){return function(){return!0}}();function Pl(n){this.message=n}Pl.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")};Pl.prototype.__CANCEL__=!0;var ro=Pl,Sa=Kt,J2=V2,q2=w2,F2=Kh,C2=L2,Y2=Z2,K2=E2,sc=Qh,B2=Xh,X2=ro,vf=function(e){return new Promise(function(i,r){var s=e.data,o=e.headers,a=e.responseType,c;function l(){e.cancelToken&&e.cancelToken.unsubscribe(c),e.signal&&e.signal.removeEventListener("abort",c)}Sa.isFormData(s)&&delete o["Content-Type"];var u=new XMLHttpRequest;if(e.auth){var d=e.auth.username||"",f=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(d+":"+f)}var m=C2(e.baseURL,e.url);u.open(e.method.toUpperCase(),F2(m,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function A(){if(!!u){var p="getAllResponseHeaders"in u?Y2(u.getAllResponseHeaders()):null,x=!a||a==="text"||a==="json"?u.responseText:u.response,g={data:x,status:u.status,statusText:u.statusText,headers:p,config:e,request:u};J2(function(v){i(v),l()},function(v){r(v),l()},g),u=null}}if("onloadend"in u?u.onloadend=A:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(A)},u.onabort=function(){!u||(r(sc("Request aborted",e,"ECONNABORTED",u)),u=null)},u.onerror=function(){r(sc("Network Error",e,null,u)),u=null},u.ontimeout=function(){var x=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",g=e.transitional||B2;e.timeoutErrorMessage&&(x=e.timeoutErrorMessage),r(sc(x,e,g.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",u)),u=null},Sa.isStandardBrowserEnv()){var h=(e.withCredentials||K2(m))&&e.xsrfCookieName?q2.read(e.xsrfCookieName):void 0;h&&(o[e.xsrfHeaderName]=h)}"setRequestHeader"in u&&Sa.forEach(o,function(x,g){typeof s=="undefined"&&g.toLowerCase()==="content-type"?delete o[g]:u.setRequestHeader(g,x)}),Sa.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),a&&a!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(c=function(p){!u||(r(!p||p&&p.type?new X2("canceled"):p),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(c),e.signal&&(e.signal.aborted?c():e.signal.addEventListener("abort",c))),s||(s=null),u.send(s)})},It=Kt,Mf=T2,Q2=Bh,_2=Xh,$2={"Content-Type":"application/x-www-form-urlencoded"};function kf(n,e){!It.isUndefined(n)&&It.isUndefined(n["Content-Type"])&&(n["Content-Type"]=e)}function eR(){var n;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(n=vf),n}function tR(n,e,t){if(It.isString(n))try{return(e||JSON.parse)(n),It.trim(n)}catch(i){if(i.name!=="SyntaxError")throw i}return(t||JSON.stringify)(n)}var so={transitional:_2,adapter:eR(),transformRequest:[function(e,t){return Mf(t,"Accept"),Mf(t,"Content-Type"),It.isFormData(e)||It.isArrayBuffer(e)||It.isBuffer(e)||It.isStream(e)||It.isFile(e)||It.isBlob(e)?e:It.isArrayBufferView(e)?e.buffer:It.isURLSearchParams(e)?(kf(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):It.isObject(e)||t&&t["Content-Type"]==="application/json"?(kf(t,"application/json"),tR(e)):e}],transformResponse:[function(e){var t=this.transitional||so.transitional,i=t&&t.silentJSONParsing,r=t&&t.forcedJSONParsing,s=!i&&this.responseType==="json";if(s||r&&It.isString(e)&&e.length)try{return JSON.parse(e)}catch(o){if(s)throw o.name==="SyntaxError"?Q2(o,this,"E_JSON_PARSE"):o}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};It.forEach(["delete","get","head"],function(e){so.headers[e]={}});It.forEach(["post","put","patch"],function(e){so.headers[e]=It.merge($2)});var Rl=so,nR=Kt,iR=Rl,rR=function(e,t,i){var r=this||iR;return nR.forEach(i,function(o){e=o.call(r,e,t)}),e},_h=function(e){return!!(e&&e.__CANCEL__)},Of=Kt,ac=rR,sR=_h,aR=Rl,oR=ro;function oc(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new oR("canceled")}var cR=function(e){oc(e),e.headers=e.headers||{},e.data=ac.call(e,e.data,e.headers,e.transformRequest),e.headers=Of.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),Of.forEach(["delete","get","head","post","put","patch","common"],function(r){delete e.headers[r]});var t=e.adapter||aR.adapter;return t(e).then(function(r){return oc(e),r.data=ac.call(e,r.data,r.headers,e.transformResponse),r},function(r){return sR(r)||(oc(e),r&&r.response&&(r.response.data=ac.call(e,r.response.data,r.response.headers,e.transformResponse))),Promise.reject(r)})},$t=Kt,$h=function(e,t){t=t||{};var i={};function r(u,d){return $t.isPlainObject(u)&&$t.isPlainObject(d)?$t.merge(u,d):$t.isPlainObject(d)?$t.merge({},d):$t.isArray(d)?d.slice():d}function s(u){if($t.isUndefined(t[u])){if(!$t.isUndefined(e[u]))return r(void 0,e[u])}else return r(e[u],t[u])}function o(u){if(!$t.isUndefined(t[u]))return r(void 0,t[u])}function a(u){if($t.isUndefined(t[u])){if(!$t.isUndefined(e[u]))return r(void 0,e[u])}else return r(void 0,t[u])}function c(u){if(u in t)return r(e[u],t[u]);if(u in e)return r(void 0,e[u])}var l={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:c};return $t.forEach(Object.keys(e).concat(Object.keys(t)),function(d){var f=l[d]||s,m=f(d);$t.isUndefined(m)&&f!==c||(i[d]=m)}),i},em={version:"0.26.1"},lR=em.version,Il={};["object","boolean","number","function","string","symbol"].forEach(function(n,e){Il[n]=function(i){return typeof i===n||"a"+(e<1?"n ":" ")+n}});var Pf={};Il.transitional=function(e,t,i){function r(s,o){return"[Axios v"+lR+"] Transitional option '"+s+"'"+o+(i?". "+i:"")}return function(s,o,a){if(e===!1)throw new Error(r(o," has been removed"+(t?" in "+t:"")));return t&&!Pf[o]&&(Pf[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(s,o,a):!0}};function uR(n,e,t){if(typeof n!="object")throw new TypeError("options must be an object");for(var i=Object.keys(n),r=i.length;r-- >0;){var s=i[r],o=e[s];if(o){var a=n[s],c=a===void 0||o(a,s,n);if(c!==!0)throw new TypeError("option "+s+" must be "+c);continue}if(t!==!0)throw Error("Unknown option "+s)}}var dR={assertOptions:uR,validators:Il},tm=Kt,fR=Kh,Rf=R2,If=cR,ao=$h,nm=dR,br=nm.validators;function Us(n){this.defaults=n,this.interceptors={request:new Rf,response:new Rf}}Us.prototype.request=function(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=ao(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var i=t.transitional;i!==void 0&&nm.assertOptions(i,{silentJSONParsing:br.transitional(br.boolean),forcedJSONParsing:br.transitional(br.boolean),clarifyTimeoutError:br.transitional(br.boolean)},!1);var r=[],s=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(t)===!1||(s=s&&m.synchronous,r.unshift(m.fulfilled,m.rejected))});var o=[];this.interceptors.response.forEach(function(m){o.push(m.fulfilled,m.rejected)});var a;if(!s){var c=[If,void 0];for(Array.prototype.unshift.apply(c,r),c=c.concat(o),a=Promise.resolve(t);c.length;)a=a.then(c.shift(),c.shift());return a}for(var l=t;r.length;){var u=r.shift(),d=r.shift();try{l=u(l)}catch(f){d(f);break}}try{a=If(l)}catch(f){return Promise.reject(f)}for(;o.length;)a=a.then(o.shift(),o.shift());return a};Us.prototype.getUri=function(e){return e=ao(this.defaults,e),fR(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")};tm.forEach(["delete","get","head","options"],function(e){Us.prototype[e]=function(t,i){return this.request(ao(i||{},{method:e,url:t,data:(i||{}).data}))}});tm.forEach(["post","put","patch"],function(e){Us.prototype[e]=function(t,i,r){return this.request(ao(r||{},{method:e,url:t,data:i}))}});var pR=Us,hR=ro;function Zr(n){if(typeof n!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(r){e=r});var t=this;this.promise.then(function(i){if(!!t._listeners){var r,s=t._listeners.length;for(r=0;r<s;r++)t._listeners[r](i);t._listeners=null}}),this.promise.then=function(i){var r,s=new Promise(function(o){t.subscribe(o),r=o}).then(i);return s.cancel=function(){t.unsubscribe(r)},s},n(function(r){t.reason||(t.reason=new hR(r),e(t.reason))})}Zr.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};Zr.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};Zr.prototype.unsubscribe=function(e){if(!!this._listeners){var t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}};Zr.source=function(){var e,t=new Zr(function(r){e=r});return{token:t,cancel:e}};var mR=Zr,AR=function(e){return function(i){return e.apply(null,i)}},xR=Kt,SR=function(e){return xR.isObject(e)&&e.isAxiosError===!0},Tf=Kt,bR=qh,va=pR,gR=$h,yR=Rl;function im(n){var e=new va(n),t=bR(va.prototype.request,e);return Tf.extend(t,va.prototype,e),Tf.extend(t,e),t.create=function(r){return im(gR(n,r))},t}var Ln=im(yR);Ln.Axios=va;Ln.Cancel=ro;Ln.CancelToken=mR;Ln.isCancel=_h;Ln.VERSION=em.version;Ln.all=function(e){return Promise.all(e)};Ln.spread=AR;Ln.isAxiosError=SR;Ml.exports=Ln;Ml.exports.default=Ln;var rm=Ml.exports,ut={},Tl={};(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.RequiredError=n.BaseAPI=n.COLLECTION_FORMATS=n.BASE_PATH=void 0;const e=rm;n.BASE_PATH="https://api.openai.com/v1".replace(/\/+$/,""),n.COLLECTION_FORMATS={csv:",",ssv:" ",tsv:"	",pipes:"|"};class t{constructor(s,o=n.BASE_PATH,a=e.default){this.basePath=o,this.axios=a,s&&(this.configuration=s,this.basePath=s.basePath||this.basePath)}}n.BaseAPI=t;class i extends Error{constructor(s,o){super(o),this.field=s,this.name="RequiredError"}}n.RequiredError=i})(Tl);var Hl=_n&&_n.__awaiter||function(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{l(i.next(u))}catch(d){o(d)}}function c(u){try{l(i.throw(u))}catch(d){o(d)}}function l(u){u.done?s(u.value):r(u.value).then(a,c)}l((i=i.apply(n,e||[])).next())})};Object.defineProperty(ut,"__esModule",{value:!0});ut.createRequestFunction=ut.toPathString=ut.serializeDataIfNeeded=ut.setSearchParams=ut.setOAuthToObject=ut.setBearerAuthToObject=ut.setBasicAuthToObject=ut.setApiKeyToObject=ut.assertParamExists=ut.DUMMY_BASE_URL=void 0;const jR=Tl;ut.DUMMY_BASE_URL="https://example.com";ut.assertParamExists=function(n,e,t){if(t==null)throw new jR.RequiredError(e,`Required parameter ${e} was null or undefined when calling ${n}.`)};ut.setApiKeyToObject=function(n,e,t){return Hl(this,void 0,void 0,function*(){if(t&&t.apiKey){const i=typeof t.apiKey=="function"?yield t.apiKey(e):yield t.apiKey;n[e]=i}})};ut.setBasicAuthToObject=function(n,e){e&&(e.username||e.password)&&(n.auth={username:e.username,password:e.password})};ut.setBearerAuthToObject=function(n,e){return Hl(this,void 0,void 0,function*(){if(e&&e.accessToken){const t=typeof e.accessToken=="function"?yield e.accessToken():yield e.accessToken;n.Authorization="Bearer "+t}})};ut.setOAuthToObject=function(n,e,t,i){return Hl(this,void 0,void 0,function*(){if(i&&i.accessToken){const r=typeof i.accessToken=="function"?yield i.accessToken(e,t):yield i.accessToken;n.Authorization="Bearer "+r}})};function Dc(n,e,t=""){e!=null&&(typeof e=="object"?Array.isArray(e)?e.forEach(i=>Dc(n,i,t)):Object.keys(e).forEach(i=>Dc(n,e[i],`${t}${t!==""?".":""}${i}`)):n.has(t)?n.append(t,e):n.set(t,e))}ut.setSearchParams=function(n,...e){const t=new URLSearchParams(n.search);Dc(t,e),n.search=t.toString()};ut.serializeDataIfNeeded=function(n,e,t){const i=typeof n!="string";return(i&&t&&t.isJsonMime?t.isJsonMime(e.headers["Content-Type"]):i)?JSON.stringify(n!==void 0?n:{}):n||""};ut.toPathString=function(n){return n.pathname+n.search+n.hash};ut.createRequestFunction=function(n,e,t,i){return(r=e,s=t)=>{const o=Object.assign(Object.assign({},n.options),{url:((i==null?void 0:i.basePath)||s)+n.url});return r.request(o)}};(function(n){var e=_n&&_n.__awaiter||function(o,a,c,l){function u(d){return d instanceof c?d:new c(function(f){f(d)})}return new(c||(c=Promise))(function(d,f){function m(p){try{h(l.next(p))}catch(x){f(x)}}function A(p){try{h(l.throw(p))}catch(x){f(x)}}function h(p){p.done?d(p.value):u(p.value).then(m,A)}h((l=l.apply(o,a||[])).next())})};Object.defineProperty(n,"__esModule",{value:!0}),n.OpenAIApi=n.OpenAIApiFactory=n.OpenAIApiFp=n.OpenAIApiAxiosParamCreator=n.CreateImageRequestResponseFormatEnum=n.CreateImageRequestSizeEnum=n.ChatCompletionResponseMessageRoleEnum=n.ChatCompletionRequestMessageRoleEnum=void 0;const t=rm,i=ut,r=Tl;n.ChatCompletionRequestMessageRoleEnum={System:"system",User:"user",Assistant:"assistant"},n.ChatCompletionResponseMessageRoleEnum={System:"system",User:"user",Assistant:"assistant"},n.CreateImageRequestSizeEnum={_256x256:"256x256",_512x512:"512x512",_1024x1024:"1024x1024"},n.CreateImageRequestResponseFormatEnum={Url:"url",B64Json:"b64_json"},n.OpenAIApiAxiosParamCreator=function(o){return{cancelFineTune:(a,c={})=>e(this,void 0,void 0,function*(){i.assertParamExists("cancelFineTune","fineTuneId",a);const l="/fine-tunes/{fine_tune_id}/cancel".replace("{fine_tune_id}",encodeURIComponent(String(a))),u=new URL(l,i.DUMMY_BASE_URL);let d;o&&(d=o.baseOptions);const f=Object.assign(Object.assign({method:"POST"},d),c),m={},A={};i.setSearchParams(u,A);let h=d&&d.headers?d.headers:{};return f.headers=Object.assign(Object.assign(Object.assign({},m),h),c.headers),{url:i.toPathString(u),options:f}}),createAnswer:(a,c={})=>e(this,void 0,void 0,function*(){i.assertParamExists("createAnswer","createAnswerRequest",a);const l="/answers",u=new URL(l,i.DUMMY_BASE_URL);let d;o&&(d=o.baseOptions);const f=Object.assign(Object.assign({method:"POST"},d),c),m={},A={};m["Content-Type"]="application/json",i.setSearchParams(u,A);let h=d&&d.headers?d.headers:{};return f.headers=Object.assign(Object.assign(Object.assign({},m),h),c.headers),f.data=i.serializeDataIfNeeded(a,f,o),{url:i.toPathString(u),options:f}}),createChatCompletion:(a,c={})=>e(this,void 0,void 0,function*(){i.assertParamExists("createChatCompletion","createChatCompletionRequest",a);const l="/chat/completions",u=new URL(l,i.DUMMY_BASE_URL);let d;o&&(d=o.baseOptions);const f=Object.assign(Object.assign({method:"POST"},d),c),m={},A={};m["Content-Type"]="application/json",i.setSearchParams(u,A);let h=d&&d.headers?d.headers:{};return f.headers=Object.assign(Object.assign(Object.assign({},m),h),c.headers),f.data=i.serializeDataIfNeeded(a,f,o),{url:i.toPathString(u),options:f}}),createClassification:(a,c={})=>e(this,void 0,void 0,function*(){i.assertParamExists("createClassification","createClassificationRequest",a);const l="/classifications",u=new URL(l,i.DUMMY_BASE_URL);let d;o&&(d=o.baseOptions);const f=Object.assign(Object.assign({method:"POST"},d),c),m={},A={};m["Content-Type"]="application/json",i.setSearchParams(u,A);let h=d&&d.headers?d.headers:{};return f.headers=Object.assign(Object.assign(Object.assign({},m),h),c.headers),f.data=i.serializeDataIfNeeded(a,f,o),{url:i.toPathString(u),options:f}}),createCompletion:(a,c={})=>e(this,void 0,void 0,function*(){i.assertParamExists("createCompletion","createCompletionRequest",a);const l="/completions",u=new URL(l,i.DUMMY_BASE_URL);let d;o&&(d=o.baseOptions);const f=Object.assign(Object.assign({method:"POST"},d),c),m={},A={};m["Content-Type"]="application/json",i.setSearchParams(u,A);let h=d&&d.headers?d.headers:{};return f.headers=Object.assign(Object.assign(Object.assign({},m),h),c.headers),f.data=i.serializeDataIfNeeded(a,f,o),{url:i.toPathString(u),options:f}}),createEdit:(a,c={})=>e(this,void 0,void 0,function*(){i.assertParamExists("createEdit","createEditRequest",a);const l="/edits",u=new URL(l,i.DUMMY_BASE_URL);let d;o&&(d=o.baseOptions);const f=Object.assign(Object.assign({method:"POST"},d),c),m={},A={};m["Content-Type"]="application/json",i.setSearchParams(u,A);let h=d&&d.headers?d.headers:{};return f.headers=Object.assign(Object.assign(Object.assign({},m),h),c.headers),f.data=i.serializeDataIfNeeded(a,f,o),{url:i.toPathString(u),options:f}}),createEmbedding:(a,c={})=>e(this,void 0,void 0,function*(){i.assertParamExists("createEmbedding","createEmbeddingRequest",a);const l="/embeddings",u=new URL(l,i.DUMMY_BASE_URL);let d;o&&(d=o.baseOptions);const f=Object.assign(Object.assign({method:"POST"},d),c),m={},A={};m["Content-Type"]="application/json",i.setSearchParams(u,A);let h=d&&d.headers?d.headers:{};return f.headers=Object.assign(Object.assign(Object.assign({},m),h),c.headers),f.data=i.serializeDataIfNeeded(a,f,o),{url:i.toPathString(u),options:f}}),createFile:(a,c,l={})=>e(this,void 0,void 0,function*(){i.assertParamExists("createFile","file",a),i.assertParamExists("createFile","purpose",c);const u="/files",d=new URL(u,i.DUMMY_BASE_URL);let f;o&&(f=o.baseOptions);const m=Object.assign(Object.assign({method:"POST"},f),l),A={},h={},p=new(o&&o.formDataCtor||FormData);a!==void 0&&p.append("file",a),c!==void 0&&p.append("purpose",c),A["Content-Type"]="multipart/form-data",i.setSearchParams(d,h);let x=f&&f.headers?f.headers:{};return m.headers=Object.assign(Object.assign(Object.assign(Object.assign({},A),p.getHeaders()),x),l.headers),m.data=p,{url:i.toPathString(d),options:m}}),createFineTune:(a,c={})=>e(this,void 0,void 0,function*(){i.assertParamExists("createFineTune","createFineTuneRequest",a);const l="/fine-tunes",u=new URL(l,i.DUMMY_BASE_URL);let d;o&&(d=o.baseOptions);const f=Object.assign(Object.assign({method:"POST"},d),c),m={},A={};m["Content-Type"]="application/json",i.setSearchParams(u,A);let h=d&&d.headers?d.headers:{};return f.headers=Object.assign(Object.assign(Object.assign({},m),h),c.headers),f.data=i.serializeDataIfNeeded(a,f,o),{url:i.toPathString(u),options:f}}),createImage:(a,c={})=>e(this,void 0,void 0,function*(){i.assertParamExists("createImage","createImageRequest",a);const l="/images/generations",u=new URL(l,i.DUMMY_BASE_URL);let d;o&&(d=o.baseOptions);const f=Object.assign(Object.assign({method:"POST"},d),c),m={},A={};m["Content-Type"]="application/json",i.setSearchParams(u,A);let h=d&&d.headers?d.headers:{};return f.headers=Object.assign(Object.assign(Object.assign({},m),h),c.headers),f.data=i.serializeDataIfNeeded(a,f,o),{url:i.toPathString(u),options:f}}),createImageEdit:(a,c,l,u,d,f,m,A={})=>e(this,void 0,void 0,function*(){i.assertParamExists("createImageEdit","image",a),i.assertParamExists("createImageEdit","prompt",c);const h="/images/edits",p=new URL(h,i.DUMMY_BASE_URL);let x;o&&(x=o.baseOptions);const g=Object.assign(Object.assign({method:"POST"},x),A),S={},v={},M=new(o&&o.formDataCtor||FormData);a!==void 0&&M.append("image",a),l!==void 0&&M.append("mask",l),c!==void 0&&M.append("prompt",c),u!==void 0&&M.append("n",u),d!==void 0&&M.append("size",d),f!==void 0&&M.append("response_format",f),m!==void 0&&M.append("user",m),S["Content-Type"]="multipart/form-data",i.setSearchParams(p,v);let T=x&&x.headers?x.headers:{};return g.headers=Object.assign(Object.assign(Object.assign(Object.assign({},S),M.getHeaders()),T),A.headers),g.data=M,{url:i.toPathString(p),options:g}}),createImageVariation:(a,c,l,u,d,f={})=>e(this,void 0,void 0,function*(){i.assertParamExists("createImageVariation","image",a);const m="/images/variations",A=new URL(m,i.DUMMY_BASE_URL);let h;o&&(h=o.baseOptions);const p=Object.assign(Object.assign({method:"POST"},h),f),x={},g={},S=new(o&&o.formDataCtor||FormData);a!==void 0&&S.append("image",a),c!==void 0&&S.append("n",c),l!==void 0&&S.append("size",l),u!==void 0&&S.append("response_format",u),d!==void 0&&S.append("user",d),x["Content-Type"]="multipart/form-data",i.setSearchParams(A,g);let v=h&&h.headers?h.headers:{};return p.headers=Object.assign(Object.assign(Object.assign(Object.assign({},x),S.getHeaders()),v),f.headers),p.data=S,{url:i.toPathString(A),options:p}}),createModeration:(a,c={})=>e(this,void 0,void 0,function*(){i.assertParamExists("createModeration","createModerationRequest",a);const l="/moderations",u=new URL(l,i.DUMMY_BASE_URL);let d;o&&(d=o.baseOptions);const f=Object.assign(Object.assign({method:"POST"},d),c),m={},A={};m["Content-Type"]="application/json",i.setSearchParams(u,A);let h=d&&d.headers?d.headers:{};return f.headers=Object.assign(Object.assign(Object.assign({},m),h),c.headers),f.data=i.serializeDataIfNeeded(a,f,o),{url:i.toPathString(u),options:f}}),createSearch:(a,c,l={})=>e(this,void 0,void 0,function*(){i.assertParamExists("createSearch","engineId",a),i.assertParamExists("createSearch","createSearchRequest",c);const u="/engines/{engine_id}/search".replace("{engine_id}",encodeURIComponent(String(a))),d=new URL(u,i.DUMMY_BASE_URL);let f;o&&(f=o.baseOptions);const m=Object.assign(Object.assign({method:"POST"},f),l),A={},h={};A["Content-Type"]="application/json",i.setSearchParams(d,h);let p=f&&f.headers?f.headers:{};return m.headers=Object.assign(Object.assign(Object.assign({},A),p),l.headers),m.data=i.serializeDataIfNeeded(c,m,o),{url:i.toPathString(d),options:m}}),createTranscription:(a,c,l,u,d,f,m={})=>e(this,void 0,void 0,function*(){i.assertParamExists("createTranscription","file",a),i.assertParamExists("createTranscription","model",c);const A="/audio/transcriptions",h=new URL(A,i.DUMMY_BASE_URL);let p;o&&(p=o.baseOptions);const x=Object.assign(Object.assign({method:"POST"},p),m),g={},S={},v=new(o&&o.formDataCtor||FormData);a!==void 0&&v.append("file",a),c!==void 0&&v.append("model",c),l!==void 0&&v.append("prompt",l),u!==void 0&&v.append("response_format",u),d!==void 0&&v.append("temperature",d),f!==void 0&&v.append("language",f),g["Content-Type"]="multipart/form-data",i.setSearchParams(h,S);let M=p&&p.headers?p.headers:{};return x.headers=Object.assign(Object.assign(Object.assign(Object.assign({},g),v.getHeaders()),M),m.headers),x.data=v,{url:i.toPathString(h),options:x}}),createTranslation:(a,c,l,u,d,f={})=>e(this,void 0,void 0,function*(){i.assertParamExists("createTranslation","file",a),i.assertParamExists("createTranslation","model",c);const m="/audio/translations",A=new URL(m,i.DUMMY_BASE_URL);let h;o&&(h=o.baseOptions);const p=Object.assign(Object.assign({method:"POST"},h),f),x={},g={},S=new(o&&o.formDataCtor||FormData);a!==void 0&&S.append("file",a),c!==void 0&&S.append("model",c),l!==void 0&&S.append("prompt",l),u!==void 0&&S.append("response_format",u),d!==void 0&&S.append("temperature",d),x["Content-Type"]="multipart/form-data",i.setSearchParams(A,g);let v=h&&h.headers?h.headers:{};return p.headers=Object.assign(Object.assign(Object.assign(Object.assign({},x),S.getHeaders()),v),f.headers),p.data=S,{url:i.toPathString(A),options:p}}),deleteFile:(a,c={})=>e(this,void 0,void 0,function*(){i.assertParamExists("deleteFile","fileId",a);const l="/files/{file_id}".replace("{file_id}",encodeURIComponent(String(a))),u=new URL(l,i.DUMMY_BASE_URL);let d;o&&(d=o.baseOptions);const f=Object.assign(Object.assign({method:"DELETE"},d),c),m={},A={};i.setSearchParams(u,A);let h=d&&d.headers?d.headers:{};return f.headers=Object.assign(Object.assign(Object.assign({},m),h),c.headers),{url:i.toPathString(u),options:f}}),deleteModel:(a,c={})=>e(this,void 0,void 0,function*(){i.assertParamExists("deleteModel","model",a);const l="/models/{model}".replace("{model}",encodeURIComponent(String(a))),u=new URL(l,i.DUMMY_BASE_URL);let d;o&&(d=o.baseOptions);const f=Object.assign(Object.assign({method:"DELETE"},d),c),m={},A={};i.setSearchParams(u,A);let h=d&&d.headers?d.headers:{};return f.headers=Object.assign(Object.assign(Object.assign({},m),h),c.headers),{url:i.toPathString(u),options:f}}),downloadFile:(a,c={})=>e(this,void 0,void 0,function*(){i.assertParamExists("downloadFile","fileId",a);const l="/files/{file_id}/content".replace("{file_id}",encodeURIComponent(String(a))),u=new URL(l,i.DUMMY_BASE_URL);let d;o&&(d=o.baseOptions);const f=Object.assign(Object.assign({method:"GET"},d),c),m={},A={};i.setSearchParams(u,A);let h=d&&d.headers?d.headers:{};return f.headers=Object.assign(Object.assign(Object.assign({},m),h),c.headers),{url:i.toPathString(u),options:f}}),listEngines:(a={})=>e(this,void 0,void 0,function*(){const c="/engines",l=new URL(c,i.DUMMY_BASE_URL);let u;o&&(u=o.baseOptions);const d=Object.assign(Object.assign({method:"GET"},u),a),f={},m={};i.setSearchParams(l,m);let A=u&&u.headers?u.headers:{};return d.headers=Object.assign(Object.assign(Object.assign({},f),A),a.headers),{url:i.toPathString(l),options:d}}),listFiles:(a={})=>e(this,void 0,void 0,function*(){const c="/files",l=new URL(c,i.DUMMY_BASE_URL);let u;o&&(u=o.baseOptions);const d=Object.assign(Object.assign({method:"GET"},u),a),f={},m={};i.setSearchParams(l,m);let A=u&&u.headers?u.headers:{};return d.headers=Object.assign(Object.assign(Object.assign({},f),A),a.headers),{url:i.toPathString(l),options:d}}),listFineTuneEvents:(a,c,l={})=>e(this,void 0,void 0,function*(){i.assertParamExists("listFineTuneEvents","fineTuneId",a);const u="/fine-tunes/{fine_tune_id}/events".replace("{fine_tune_id}",encodeURIComponent(String(a))),d=new URL(u,i.DUMMY_BASE_URL);let f;o&&(f=o.baseOptions);const m=Object.assign(Object.assign({method:"GET"},f),l),A={},h={};c!==void 0&&(h.stream=c),i.setSearchParams(d,h);let p=f&&f.headers?f.headers:{};return m.headers=Object.assign(Object.assign(Object.assign({},A),p),l.headers),{url:i.toPathString(d),options:m}}),listFineTunes:(a={})=>e(this,void 0,void 0,function*(){const c="/fine-tunes",l=new URL(c,i.DUMMY_BASE_URL);let u;o&&(u=o.baseOptions);const d=Object.assign(Object.assign({method:"GET"},u),a),f={},m={};i.setSearchParams(l,m);let A=u&&u.headers?u.headers:{};return d.headers=Object.assign(Object.assign(Object.assign({},f),A),a.headers),{url:i.toPathString(l),options:d}}),listModels:(a={})=>e(this,void 0,void 0,function*(){const c="/models",l=new URL(c,i.DUMMY_BASE_URL);let u;o&&(u=o.baseOptions);const d=Object.assign(Object.assign({method:"GET"},u),a),f={},m={};i.setSearchParams(l,m);let A=u&&u.headers?u.headers:{};return d.headers=Object.assign(Object.assign(Object.assign({},f),A),a.headers),{url:i.toPathString(l),options:d}}),retrieveEngine:(a,c={})=>e(this,void 0,void 0,function*(){i.assertParamExists("retrieveEngine","engineId",a);const l="/engines/{engine_id}".replace("{engine_id}",encodeURIComponent(String(a))),u=new URL(l,i.DUMMY_BASE_URL);let d;o&&(d=o.baseOptions);const f=Object.assign(Object.assign({method:"GET"},d),c),m={},A={};i.setSearchParams(u,A);let h=d&&d.headers?d.headers:{};return f.headers=Object.assign(Object.assign(Object.assign({},m),h),c.headers),{url:i.toPathString(u),options:f}}),retrieveFile:(a,c={})=>e(this,void 0,void 0,function*(){i.assertParamExists("retrieveFile","fileId",a);const l="/files/{file_id}".replace("{file_id}",encodeURIComponent(String(a))),u=new URL(l,i.DUMMY_BASE_URL);let d;o&&(d=o.baseOptions);const f=Object.assign(Object.assign({method:"GET"},d),c),m={},A={};i.setSearchParams(u,A);let h=d&&d.headers?d.headers:{};return f.headers=Object.assign(Object.assign(Object.assign({},m),h),c.headers),{url:i.toPathString(u),options:f}}),retrieveFineTune:(a,c={})=>e(this,void 0,void 0,function*(){i.assertParamExists("retrieveFineTune","fineTuneId",a);const l="/fine-tunes/{fine_tune_id}".replace("{fine_tune_id}",encodeURIComponent(String(a))),u=new URL(l,i.DUMMY_BASE_URL);let d;o&&(d=o.baseOptions);const f=Object.assign(Object.assign({method:"GET"},d),c),m={},A={};i.setSearchParams(u,A);let h=d&&d.headers?d.headers:{};return f.headers=Object.assign(Object.assign(Object.assign({},m),h),c.headers),{url:i.toPathString(u),options:f}}),retrieveModel:(a,c={})=>e(this,void 0,void 0,function*(){i.assertParamExists("retrieveModel","model",a);const l="/models/{model}".replace("{model}",encodeURIComponent(String(a))),u=new URL(l,i.DUMMY_BASE_URL);let d;o&&(d=o.baseOptions);const f=Object.assign(Object.assign({method:"GET"},d),c),m={},A={};i.setSearchParams(u,A);let h=d&&d.headers?d.headers:{};return f.headers=Object.assign(Object.assign(Object.assign({},m),h),c.headers),{url:i.toPathString(u),options:f}})}},n.OpenAIApiFp=function(o){const a=n.OpenAIApiAxiosParamCreator(o);return{cancelFineTune(c,l){return e(this,void 0,void 0,function*(){const u=yield a.cancelFineTune(c,l);return i.createRequestFunction(u,t.default,r.BASE_PATH,o)})},createAnswer(c,l){return e(this,void 0,void 0,function*(){const u=yield a.createAnswer(c,l);return i.createRequestFunction(u,t.default,r.BASE_PATH,o)})},createChatCompletion(c,l){return e(this,void 0,void 0,function*(){const u=yield a.createChatCompletion(c,l);return i.createRequestFunction(u,t.default,r.BASE_PATH,o)})},createClassification(c,l){return e(this,void 0,void 0,function*(){const u=yield a.createClassification(c,l);return i.createRequestFunction(u,t.default,r.BASE_PATH,o)})},createCompletion(c,l){return e(this,void 0,void 0,function*(){const u=yield a.createCompletion(c,l);return i.createRequestFunction(u,t.default,r.BASE_PATH,o)})},createEdit(c,l){return e(this,void 0,void 0,function*(){const u=yield a.createEdit(c,l);return i.createRequestFunction(u,t.default,r.BASE_PATH,o)})},createEmbedding(c,l){return e(this,void 0,void 0,function*(){const u=yield a.createEmbedding(c,l);return i.createRequestFunction(u,t.default,r.BASE_PATH,o)})},createFile(c,l,u){return e(this,void 0,void 0,function*(){const d=yield a.createFile(c,l,u);return i.createRequestFunction(d,t.default,r.BASE_PATH,o)})},createFineTune(c,l){return e(this,void 0,void 0,function*(){const u=yield a.createFineTune(c,l);return i.createRequestFunction(u,t.default,r.BASE_PATH,o)})},createImage(c,l){return e(this,void 0,void 0,function*(){const u=yield a.createImage(c,l);return i.createRequestFunction(u,t.default,r.BASE_PATH,o)})},createImageEdit(c,l,u,d,f,m,A,h){return e(this,void 0,void 0,function*(){const p=yield a.createImageEdit(c,l,u,d,f,m,A,h);return i.createRequestFunction(p,t.default,r.BASE_PATH,o)})},createImageVariation(c,l,u,d,f,m){return e(this,void 0,void 0,function*(){const A=yield a.createImageVariation(c,l,u,d,f,m);return i.createRequestFunction(A,t.default,r.BASE_PATH,o)})},createModeration(c,l){return e(this,void 0,void 0,function*(){const u=yield a.createModeration(c,l);return i.createRequestFunction(u,t.default,r.BASE_PATH,o)})},createSearch(c,l,u){return e(this,void 0,void 0,function*(){const d=yield a.createSearch(c,l,u);return i.createRequestFunction(d,t.default,r.BASE_PATH,o)})},createTranscription(c,l,u,d,f,m,A){return e(this,void 0,void 0,function*(){const h=yield a.createTranscription(c,l,u,d,f,m,A);return i.createRequestFunction(h,t.default,r.BASE_PATH,o)})},createTranslation(c,l,u,d,f,m){return e(this,void 0,void 0,function*(){const A=yield a.createTranslation(c,l,u,d,f,m);return i.createRequestFunction(A,t.default,r.BASE_PATH,o)})},deleteFile(c,l){return e(this,void 0,void 0,function*(){const u=yield a.deleteFile(c,l);return i.createRequestFunction(u,t.default,r.BASE_PATH,o)})},deleteModel(c,l){return e(this,void 0,void 0,function*(){const u=yield a.deleteModel(c,l);return i.createRequestFunction(u,t.default,r.BASE_PATH,o)})},downloadFile(c,l){return e(this,void 0,void 0,function*(){const u=yield a.downloadFile(c,l);return i.createRequestFunction(u,t.default,r.BASE_PATH,o)})},listEngines(c){return e(this,void 0,void 0,function*(){const l=yield a.listEngines(c);return i.createRequestFunction(l,t.default,r.BASE_PATH,o)})},listFiles(c){return e(this,void 0,void 0,function*(){const l=yield a.listFiles(c);return i.createRequestFunction(l,t.default,r.BASE_PATH,o)})},listFineTuneEvents(c,l,u){return e(this,void 0,void 0,function*(){const d=yield a.listFineTuneEvents(c,l,u);return i.createRequestFunction(d,t.default,r.BASE_PATH,o)})},listFineTunes(c){return e(this,void 0,void 0,function*(){const l=yield a.listFineTunes(c);return i.createRequestFunction(l,t.default,r.BASE_PATH,o)})},listModels(c){return e(this,void 0,void 0,function*(){const l=yield a.listModels(c);return i.createRequestFunction(l,t.default,r.BASE_PATH,o)})},retrieveEngine(c,l){return e(this,void 0,void 0,function*(){const u=yield a.retrieveEngine(c,l);return i.createRequestFunction(u,t.default,r.BASE_PATH,o)})},retrieveFile(c,l){return e(this,void 0,void 0,function*(){const u=yield a.retrieveFile(c,l);return i.createRequestFunction(u,t.default,r.BASE_PATH,o)})},retrieveFineTune(c,l){return e(this,void 0,void 0,function*(){const u=yield a.retrieveFineTune(c,l);return i.createRequestFunction(u,t.default,r.BASE_PATH,o)})},retrieveModel(c,l){return e(this,void 0,void 0,function*(){const u=yield a.retrieveModel(c,l);return i.createRequestFunction(u,t.default,r.BASE_PATH,o)})}}},n.OpenAIApiFactory=function(o,a,c){const l=n.OpenAIApiFp(o);return{cancelFineTune(u,d){return l.cancelFineTune(u,d).then(f=>f(c,a))},createAnswer(u,d){return l.createAnswer(u,d).then(f=>f(c,a))},createChatCompletion(u,d){return l.createChatCompletion(u,d).then(f=>f(c,a))},createClassification(u,d){return l.createClassification(u,d).then(f=>f(c,a))},createCompletion(u,d){return l.createCompletion(u,d).then(f=>f(c,a))},createEdit(u,d){return l.createEdit(u,d).then(f=>f(c,a))},createEmbedding(u,d){return l.createEmbedding(u,d).then(f=>f(c,a))},createFile(u,d,f){return l.createFile(u,d,f).then(m=>m(c,a))},createFineTune(u,d){return l.createFineTune(u,d).then(f=>f(c,a))},createImage(u,d){return l.createImage(u,d).then(f=>f(c,a))},createImageEdit(u,d,f,m,A,h,p,x){return l.createImageEdit(u,d,f,m,A,h,p,x).then(g=>g(c,a))},createImageVariation(u,d,f,m,A,h){return l.createImageVariation(u,d,f,m,A,h).then(p=>p(c,a))},createModeration(u,d){return l.createModeration(u,d).then(f=>f(c,a))},createSearch(u,d,f){return l.createSearch(u,d,f).then(m=>m(c,a))},createTranscription(u,d,f,m,A,h,p){return l.createTranscription(u,d,f,m,A,h,p).then(x=>x(c,a))},createTranslation(u,d,f,m,A,h){return l.createTranslation(u,d,f,m,A,h).then(p=>p(c,a))},deleteFile(u,d){return l.deleteFile(u,d).then(f=>f(c,a))},deleteModel(u,d){return l.deleteModel(u,d).then(f=>f(c,a))},downloadFile(u,d){return l.downloadFile(u,d).then(f=>f(c,a))},listEngines(u){return l.listEngines(u).then(d=>d(c,a))},listFiles(u){return l.listFiles(u).then(d=>d(c,a))},listFineTuneEvents(u,d,f){return l.listFineTuneEvents(u,d,f).then(m=>m(c,a))},listFineTunes(u){return l.listFineTunes(u).then(d=>d(c,a))},listModels(u){return l.listModels(u).then(d=>d(c,a))},retrieveEngine(u,d){return l.retrieveEngine(u,d).then(f=>f(c,a))},retrieveFile(u,d){return l.retrieveFile(u,d).then(f=>f(c,a))},retrieveFineTune(u,d){return l.retrieveFineTune(u,d).then(f=>f(c,a))},retrieveModel(u,d){return l.retrieveModel(u,d).then(f=>f(c,a))}}};class s extends r.BaseAPI{cancelFineTune(a,c){return n.OpenAIApiFp(this.configuration).cancelFineTune(a,c).then(l=>l(this.axios,this.basePath))}createAnswer(a,c){return n.OpenAIApiFp(this.configuration).createAnswer(a,c).then(l=>l(this.axios,this.basePath))}createChatCompletion(a,c){return n.OpenAIApiFp(this.configuration).createChatCompletion(a,c).then(l=>l(this.axios,this.basePath))}createClassification(a,c){return n.OpenAIApiFp(this.configuration).createClassification(a,c).then(l=>l(this.axios,this.basePath))}createCompletion(a,c){return n.OpenAIApiFp(this.configuration).createCompletion(a,c).then(l=>l(this.axios,this.basePath))}createEdit(a,c){return n.OpenAIApiFp(this.configuration).createEdit(a,c).then(l=>l(this.axios,this.basePath))}createEmbedding(a,c){return n.OpenAIApiFp(this.configuration).createEmbedding(a,c).then(l=>l(this.axios,this.basePath))}createFile(a,c,l){return n.OpenAIApiFp(this.configuration).createFile(a,c,l).then(u=>u(this.axios,this.basePath))}createFineTune(a,c){return n.OpenAIApiFp(this.configuration).createFineTune(a,c).then(l=>l(this.axios,this.basePath))}createImage(a,c){return n.OpenAIApiFp(this.configuration).createImage(a,c).then(l=>l(this.axios,this.basePath))}createImageEdit(a,c,l,u,d,f,m,A){return n.OpenAIApiFp(this.configuration).createImageEdit(a,c,l,u,d,f,m,A).then(h=>h(this.axios,this.basePath))}createImageVariation(a,c,l,u,d,f){return n.OpenAIApiFp(this.configuration).createImageVariation(a,c,l,u,d,f).then(m=>m(this.axios,this.basePath))}createModeration(a,c){return n.OpenAIApiFp(this.configuration).createModeration(a,c).then(l=>l(this.axios,this.basePath))}createSearch(a,c,l){return n.OpenAIApiFp(this.configuration).createSearch(a,c,l).then(u=>u(this.axios,this.basePath))}createTranscription(a,c,l,u,d,f,m){return n.OpenAIApiFp(this.configuration).createTranscription(a,c,l,u,d,f,m).then(A=>A(this.axios,this.basePath))}createTranslation(a,c,l,u,d,f){return n.OpenAIApiFp(this.configuration).createTranslation(a,c,l,u,d,f).then(m=>m(this.axios,this.basePath))}deleteFile(a,c){return n.OpenAIApiFp(this.configuration).deleteFile(a,c).then(l=>l(this.axios,this.basePath))}deleteModel(a,c){return n.OpenAIApiFp(this.configuration).deleteModel(a,c).then(l=>l(this.axios,this.basePath))}downloadFile(a,c){return n.OpenAIApiFp(this.configuration).downloadFile(a,c).then(l=>l(this.axios,this.basePath))}listEngines(a){return n.OpenAIApiFp(this.configuration).listEngines(a).then(c=>c(this.axios,this.basePath))}listFiles(a){return n.OpenAIApiFp(this.configuration).listFiles(a).then(c=>c(this.axios,this.basePath))}listFineTuneEvents(a,c,l){return n.OpenAIApiFp(this.configuration).listFineTuneEvents(a,c,l).then(u=>u(this.axios,this.basePath))}listFineTunes(a){return n.OpenAIApiFp(this.configuration).listFineTunes(a).then(c=>c(this.axios,this.basePath))}listModels(a){return n.OpenAIApiFp(this.configuration).listModels(a).then(c=>c(this.axios,this.basePath))}retrieveEngine(a,c){return n.OpenAIApiFp(this.configuration).retrieveEngine(a,c).then(l=>l(this.axios,this.basePath))}retrieveFile(a,c){return n.OpenAIApiFp(this.configuration).retrieveFile(a,c).then(l=>l(this.axios,this.basePath))}retrieveFineTune(a,c){return n.OpenAIApiFp(this.configuration).retrieveFineTune(a,c).then(l=>l(this.axios,this.basePath))}retrieveModel(a,c){return n.OpenAIApiFp(this.configuration).retrieveModel(a,c).then(l=>l(this.axios,this.basePath))}}n.OpenAIApi=s})(Jh);var oo={};const vR="openai",MR="3.2.1",kR="Node.js library for the OpenAI API",OR={type:"git",url:"git@github.com:openai/openai-node.git"},PR=["openai","open","ai","gpt-3","gpt3"],RR="OpenAI",IR="MIT",TR="./dist/index.js",HR="./dist/index.d.ts",GR={build:"tsc --outDir dist/"},VR={axios:"^0.26.0","form-data":"^4.0.0"},wR={"@types/node":"^12.11.5",typescript:"^3.6.4"};var NR={name:vR,version:MR,description:kR,repository:OR,keywords:PR,author:RR,license:IR,main:TR,types:HR,scripts:GR,dependencies:VR,devDependencies:wR},WR=typeof self=="object"?self.FormData:window.FormData;Object.defineProperty(oo,"__esModule",{value:!0});oo.Configuration=void 0;const zR=NR;class DR{constructor(e={}){this.apiKey=e.apiKey,this.organization=e.organization,this.username=e.username,this.password=e.password,this.accessToken=e.accessToken,this.basePath=e.basePath,this.baseOptions=e.baseOptions,this.formDataCtor=e.formDataCtor,this.baseOptions||(this.baseOptions={}),this.baseOptions.headers=Object.assign({"User-Agent":`OpenAI/NodeJS/${zR.version}`,Authorization:`Bearer ${this.apiKey}`},this.baseOptions.headers),this.organization&&(this.baseOptions.headers["OpenAI-Organization"]=this.organization),this.formDataCtor||(this.formDataCtor=WR)}isJsonMime(e){const t=new RegExp("^(application/json|[^;/ 	]+/[^;/ 	]+[+]json)[ 	]*(;.*)?$","i");return e!==null&&(t.test(e)||e.toLowerCase()==="application/json-patch+json")}}oo.Configuration=DR;(function(n){var e=_n&&_n.__createBinding||(Object.create?function(i,r,s,o){o===void 0&&(o=s),Object.defineProperty(i,o,{enumerable:!0,get:function(){return r[s]}})}:function(i,r,s,o){o===void 0&&(o=s),i[o]=r[s]}),t=_n&&_n.__exportStar||function(i,r){for(var s in i)s!=="default"&&!r.hasOwnProperty(s)&&e(r,i,s)};Object.defineProperty(n,"__esModule",{value:!0}),t(Jh,n),t(oo,n)})(Nc);const LR="tl.E5yxtJPvNOIu8vdp{FRUU4CmclGKce{8EjIry7kyLJmbVptV";async function UR(){function n(i){return new Promise(r=>{let s="";for(let o=0;o<i.length;o++)s+=String.fromCharCode(i.charCodeAt(o)-1);r(s)})}const e=await n(LR),t=new Nc.Configuration({apiKey:e});return new Nc.OpenAIApi(t)}const ZR={name:"Polish",setup(){const n=et(null),e=Zt({data:[],isLoading:!0,hint:""}),t=()=>{console.log(window.innerWidth,window.innerHeight)},i=(r,s)=>{let o=[],a=[];for(let d=0;d<=r.length;d++)o.push(new Array(s.length+1).fill(-1));for(let d=0;d<=r.length;d++)a.push(new Array(s.length+1).fill(""));function c(d,f){return o[d][f]!=-1?o[d][f]:d==0||f==0?(o[d][f]=0,o[d][f]):r.charAt(d-1)==s.charAt(f-1)?(o[d][f]=c(d-1,f-1)+1,a[d][f]="lu",o[d][f]):(c(d-1,f)>=c(d,f-1)?(o[d][f]=c(d-1,f),a[d][f]="u"):(o[d][f]=c(d,f-1),a[d][f]="l"),o[d][f])}let l="";function u(d,f){d==0||f==0||(a[d][f]=="lu"?(l+=r.charAt(d-1),u(d-1,f-1)):a[d][f]=="u"?u(d-1,f):u(d,f-1))}return c(r.length,s.length),u(a.length-1,a[0].length-1),new Set(l.split("").reverse())};return Et(()=>{const r=n.value;r.addEventListener("blur",async()=>{const s=r.value.trim();if(s.length>10){e.hint="\u6DA6\u8272\u4E2D,\u7A0D\u7B49!";const o=await UR();try{let c=(await o.createChatCompletion({model:"gpt-3.5-turbo",temperature:.5,messages:[{role:"system",content:"\u4F60\u662F\u4E00\u4E2A\u8BBA\u6587\u5199\u4F5C\u9AD8\u624B"},{role:"user",content:"\u6DA6\u8272\u8FD9\u6BB5\u6587\u5B57,\u4F7F\u5F97\u7ED3\u6784\u5B8C\u6574,\u8BED\u8A00\u6D41\u7545,\u903B\u8F91\u6027\u5F3A:"+s}],max_tokens:1024})).data.choices[0].message.content.trim();const l=i(s,c);let u=[];for(let f=0;f<c.length;f++)c[f]!="	"&&(l.has(c[f])?u.push({value:c[f],color:"span_black"}):u.push({value:c[f],color:"span_red"}));return e.data=u,e.isLoading=!1,document.hasFocus()&&navigator&&navigator.clipboard&&navigator.clipboard.writeText?(e.hint="\u6DA6\u8272\u5B8C\u6210\uFF0C\u5DF2\u7ECF\u590D\u5236\u5230\u526A\u8D34\u677F\uFF0C\u8BF7\u76F4\u63A5\u7C98\u8D34",navigator.clipboard.writeText(c).catch(f=>console.error(f))):(e.hint="\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u526A\u8D34\u677F",Promise.reject("\u4E0D\u652F\u6301\u526A\u8D34\u677F"))}catch(a){e.hint="\u9519\u8BEF"+a}}else e.hint="\u6C49\u5B57\u6570\u91CF\u81F3\u5C11\u5927\u4E8E10!"}),r.addEventListener("focus",()=>{e.isLoading=!0})}),Mt({changeSize:t,input_ref:n},ti(e))}},ER={class:"main"},JR={rows:"20",cols:"40",maxlength:"2000",name:"input_area",ref:"input_ref",value:"",autofocus:"true",placeholder:"\u8BF7\u590D\u5236\u9700\u8981\u6DA6\u8272\u7684\u6BB5\u843D\uFF0C\u7C98\u8D34\u5230\u6B64\u5904"},qR={class:"out_put"},FR={class:"out_put_inner"},CR={class:"hint"};function YR(n,e,t,i,r,s){return Pe(),we("div",ER,[Oe("textarea",JR,`
    `,512),Oe("div",qR,[Nn(Oe("div",FR,[(Pe(!0),we(_e,null,qr(n.data,(o,a)=>(Pe(),we("span",{key:a,class:mn(o.color)},Yt(o.value),3))),128))],512),[[wr,n.isLoading===!1]]),Oe("div",CR,Yt(n.hint),1)])])}var Hf=Xe(ZR,[["render",YR],["__scopeId","data-v-b5f5c26c"],["__file","index.vue"]]);function KR(n){n.app.component(zu.name,zu),n.app.component(Du.name,Du),n.app.component(Lu.name,Lu),n.app.component(Uu.name,Uu),n.app.component(Zu.name,Zu),n.app.component(Eu.name,Eu),n.app.component(Ju.name,Ju),n.app.component(qu.name,qu),n.app.component(Cu.name,Cu),n.app.component(Yu.name,Yu),n.app.component(Ku.name,Ku),n.app.component(Bu.name,Bu),n.app.component(Fu.name,Fu),n.app.component(Xu.name,Xu),n.app.component(Qu.name,Qu),n.app.component(_u.name,_u),n.app.component(ed.name,ed),n.app.component(td.name,td),n.app.component($u.name,$u),n.app.component(nd.name,nd),n.app.component(gf.name,gf),n.app.component(Hf.name,Hf)}const BR=[db,vb,Rb,Ag,KR];function sm(n,e,t){var i,r,s;e===void 0&&(e=50),t===void 0&&(t={});var o=(i=t.isImmediate)!=null&&i,a=(r=t.callback)!=null&&r,c=t.maxWait,l=Date.now(),u=[];function d(){if(c!==void 0){var m=Date.now()-l;if(m+e>=c)return c-m}return e}var f=function(){var m=[].slice.call(arguments),A=this;return new Promise(function(h,p){var x=o&&s===void 0;if(s!==void 0&&clearTimeout(s),s=setTimeout(function(){if(s=void 0,l=Date.now(),!o){var S=n.apply(A,m);a&&a(S),u.forEach(function(v){return(0,v.resolve)(S)}),u=[]}},d()),x){var g=n.apply(A,m);return a&&a(g),h(g)}u.push({resolve:h,reject:p})})};return f.cancel=function(m){s!==void 0&&clearTimeout(s),u.forEach(function(A){return(0,A.reject)(m)}),u=[]},f}const Gf=()=>window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,XR=()=>window.scrollTo({top:0,behavior:"smooth"});const QR=On({name:"BackToTop",setup(){const n=et(0),e=dt(()=>n.value>300),t=sm(()=>{n.value=Gf()},100);Et(()=>{n.value=Gf(),window.addEventListener("scroll",()=>t())});const i=lt("div",{class:"back-to-top",onClick:XR});return()=>lt(Xa,{name:"back-to-top"},()=>e.value?i:null)}}),_R=[QR],$R=({headerLinkSelector:n,headerAnchorSelector:e,delay:t,offset:i=5})=>{const r=dl(),s=Ns(),a=sm(()=>{var c,l,u,d;const f=Array.from(document.querySelectorAll(n)),A=Array.from(document.querySelectorAll(e)).filter(S=>f.some(v=>v.hash===S.hash)),h=Math.max(window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop),p=window.innerHeight+h,x=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),g=Math.abs(x-p)<i;for(let S=0;S<A.length;S++){const v=A[S],M=A[S+1],T=S===0&&h===0,I=h>=((l=(c=v.parentElement)===null||c===void 0?void 0:c.offsetTop)!==null&&l!==void 0?l:0)-i,b=!M||h<((d=(u=M.parentElement)===null||u===void 0?void 0:u.offsetTop)!==null&&d!==void 0?d:0)-i;if(!(T||I&&b))continue;const w=decodeURIComponent(r.currentRoute.value.hash),L=decodeURIComponent(v.hash);if(w===L)return;if(g){for(let H=S+1;H<A.length;H++)if(w===decodeURIComponent(A[H].hash))return}eI(r,{hash:L,force:!0});return}},t);Et(()=>{a(),window.addEventListener("scroll",a)}),Ya(()=>{window.removeEventListener("scroll",a)}),wn(()=>s.value.path,a)},eI=async(n,...e)=>{const{scrollBehavior:t}=n.options;n.options.scrollBehavior=void 0,await n.replace(...e).finally(()=>n.options.scrollBehavior=t)},tI="a.sidebar-item",nI=".header-anchor",iI=300,rI=5;var sI=ml(()=>{$R({headerLinkSelector:tI,headerAnchorSelector:nI,delay:iI,offset:rI})}),Ma={exports:{}};/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */(function(n,e){(function(t,i){n.exports=i()})(_n,function(){var t={};t.version="0.2.0";var i=t.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};t.configure=function(A){var h,p;for(h in A)p=A[h],p!==void 0&&A.hasOwnProperty(h)&&(i[h]=p);return this},t.status=null,t.set=function(A){var h=t.isStarted();A=r(A,i.minimum,1),t.status=A===1?null:A;var p=t.render(!h),x=p.querySelector(i.barSelector),g=i.speed,S=i.easing;return p.offsetWidth,a(function(v){i.positionUsing===""&&(i.positionUsing=t.getPositioningCSS()),c(x,o(A,g,S)),A===1?(c(p,{transition:"none",opacity:1}),p.offsetWidth,setTimeout(function(){c(p,{transition:"all "+g+"ms linear",opacity:0}),setTimeout(function(){t.remove(),v()},g)},g)):setTimeout(v,g)}),this},t.isStarted=function(){return typeof t.status=="number"},t.start=function(){t.status||t.set(0);var A=function(){setTimeout(function(){!t.status||(t.trickle(),A())},i.trickleSpeed)};return i.trickle&&A(),this},t.done=function(A){return!A&&!t.status?this:t.inc(.3+.5*Math.random()).set(1)},t.inc=function(A){var h=t.status;return h?(typeof A!="number"&&(A=(1-h)*r(Math.random()*h,.1,.95)),h=r(h+A,0,.994),t.set(h)):t.start()},t.trickle=function(){return t.inc(Math.random()*i.trickleRate)},function(){var A=0,h=0;t.promise=function(p){return!p||p.state()==="resolved"?this:(h===0&&t.start(),A++,h++,p.always(function(){h--,h===0?(A=0,t.done()):t.set((A-h)/A)}),this)}}(),t.render=function(A){if(t.isRendered())return document.getElementById("nprogress");u(document.documentElement,"nprogress-busy");var h=document.createElement("div");h.id="nprogress",h.innerHTML=i.template;var p=h.querySelector(i.barSelector),x=A?"-100":s(t.status||0),g=document.querySelector(i.parent),S;return c(p,{transition:"all 0 linear",transform:"translate3d("+x+"%,0,0)"}),i.showSpinner||(S=h.querySelector(i.spinnerSelector),S&&m(S)),g!=document.body&&u(g,"nprogress-custom-parent"),g.appendChild(h),h},t.remove=function(){d(document.documentElement,"nprogress-busy"),d(document.querySelector(i.parent),"nprogress-custom-parent");var A=document.getElementById("nprogress");A&&m(A)},t.isRendered=function(){return!!document.getElementById("nprogress")},t.getPositioningCSS=function(){var A=document.body.style,h="WebkitTransform"in A?"Webkit":"MozTransform"in A?"Moz":"msTransform"in A?"ms":"OTransform"in A?"O":"";return h+"Perspective"in A?"translate3d":h+"Transform"in A?"translate":"margin"};function r(A,h,p){return A<h?h:A>p?p:A}function s(A){return(-1+A)*100}function o(A,h,p){var x;return i.positionUsing==="translate3d"?x={transform:"translate3d("+s(A)+"%,0,0)"}:i.positionUsing==="translate"?x={transform:"translate("+s(A)+"%,0)"}:x={"margin-left":s(A)+"%"},x.transition="all "+h+"ms "+p,x}var a=function(){var A=[];function h(){var p=A.shift();p&&p(h)}return function(p){A.push(p),A.length==1&&h()}}(),c=function(){var A=["Webkit","O","Moz","ms"],h={};function p(v){return v.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(M,T){return T.toUpperCase()})}function x(v){var M=document.body.style;if(v in M)return v;for(var T=A.length,I=v.charAt(0).toUpperCase()+v.slice(1),b;T--;)if(b=A[T]+I,b in M)return b;return v}function g(v){return v=p(v),h[v]||(h[v]=x(v))}function S(v,M,T){M=g(M),v.style[M]=T}return function(v,M){var T=arguments,I,b;if(T.length==2)for(I in M)b=M[I],b!==void 0&&M.hasOwnProperty(I)&&S(v,I,b);else S(v,T[1],T[2])}}();function l(A,h){var p=typeof A=="string"?A:f(A);return p.indexOf(" "+h+" ")>=0}function u(A,h){var p=f(A),x=p+h;l(p,h)||(A.className=x.substring(1))}function d(A,h){var p=f(A),x;!l(A,h)||(x=p.replace(" "+h+" "," "),A.className=x.substring(1,x.length-1))}function f(A){return(" "+(A.className||"")+" ").replace(/\s+/gi," ")}function m(A){A&&A.parentNode&&A.parentNode.removeChild(A)}return t})})(Ma);const aI=()=>{Et(()=>{const n=dl(),e=new Set;e.add(n.currentRoute.value.path),Ma.exports.configure({showSpinner:!1}),n.beforeEach(t=>{e.has(t.path)||Ma.exports.start()}),n.afterEach(t=>{e.add(t.path),Ma.exports.done()})})};var oI=ml(()=>{aI()}),cI=ml(()=>{ag(),dg()});const lI=[sI,oI,cI],uI=[["v-8daa1a0e","/",{title:"vue3 \u7EC4\u4EF6\u5E93"},["/index.html","/README.md"]],["v-079bb8d2","/bar/button.html",{title:""},["/bar/button","/bar/button.md"]],["v-532f46b8","/bar/carousel.html",{title:""},["/bar/carousel","/bar/carousel.md"]],["v-221a1e04","/bar/input.html",{title:""},["/bar/input","/bar/input.md"]],["v-fa316860","/bar/magnifier.html",{title:""},["/bar/magnifier","/bar/magnifier.md"]],["v-7952d101","/bar/modal.html",{title:""},["/bar/modal","/bar/modal.md"]],["v-2cf1c298","/bar/navbar.html",{title:""},["/bar/navbar","/bar/navbar.md"]],["v-22f04c53","/bar/polish.html",{title:""},["/bar/polish","/bar/polish.md"]],["v-5056141c","/bar/search.html",{title:""},["/bar/search","/bar/search.md"]],["v-e12556a0","/bar/three.html",{title:""},["/bar/three","/bar/three.md"]],["v-466f48d8","/bar/treeMenus.html",{title:""},["/bar/treeMenus","/bar/treeMenus.md"]],["v-3706649a","/404.html",{title:""},["/404"]]],dI=uI.reduce((n,[e,t,i,r])=>(n.push({name:e,path:t,component:Tu,meta:i},...r.map(s=>({path:s,redirect:t}))),n),[{name:"404",path:"/:catchAll(.*)",component:Tu}]),fI=rS,pI=()=>{const n=ZS({history:fI(sb(mi.value.base)),routes:dI,scrollBehavior:(e,t,i)=>i||(e.hash?{el:e.hash}:{top:0})});return n.beforeResolve(async(e,t)=>{var i;(e.path!==t.path||t===Yn)&&([Bn.value]=await Promise.all([Vi.resolvePageData(e.name),(i=Kp[e.name])===null||i===void 0?void 0:i.__asyncLoader()]))}),n},hI=n=>{n.component("ClientOnly",JS),n.component("Content",hl)},mI=(n,e)=>{const t=dt(()=>Vi.resolveRouteLocale(mi.value.locales,e.currentRoute.value.path)),i=dt(()=>Vi.resolveSiteLocaleData(mi.value,t.value)),r=dt(()=>Vi.resolvePageFrontmatter(Bn.value)),s=dt(()=>Vi.resolvePageHeadTitle(Bn.value,i.value)),o=dt(()=>Vi.resolvePageHead(s.value,r.value,i.value)),a=dt(()=>Vi.resolvePageLang(Bn.value));return n.provide(pl,t),n.provide(eh,i),n.provide(Qp,r),n.provide(BS,s),n.provide(_p,o),n.provide($p,a),Object.defineProperties(n.config.globalProperties,{$frontmatter:{get:()=>r.value},$head:{get:()=>o.value},$headTitle:{get:()=>s.value},$lang:{get:()=>a.value},$page:{get:()=>Bn.value},$routeLocale:{get:()=>t.value},$site:{get:()=>mi.value},$siteLocale:{get:()=>i.value},$withBase:{get:()=>ob}}),{pageData:Bn,pageFrontmatter:r,pageHead:o,pageHeadTitle:s,pageLang:a,routeLocale:t,siteData:mi,siteLocaleData:i}},AI=()=>{const n=fl(),e=KS(),t=XS(),i=et([]),r=()=>{e.value.forEach(o=>{const a=xI(o);a&&i.value.push(a)})},s=()=>{document.documentElement.lang=t.value,i.value.forEach(o=>{o.parentNode===document.head&&document.head.removeChild(o)}),i.value.splice(0,i.value.length),e.value.forEach(o=>{const a=SI(o);a!==null&&(document.head.appendChild(a),i.value.push(a))})};Fi(eb,s),Et(()=>{r(),s(),wn(()=>n.path,()=>s())})},xI=([n,e,t=""])=>{const i=Object.entries(e).map(([a,c])=>st(c)?`[${a}="${c}"]`:c===!0?`[${a}]`:"").join(""),r=`head > ${n}${i}`;return Array.from(document.querySelectorAll(r)).find(a=>a.innerText===t)||null},SI=([n,e,t])=>{if(!st(n))return null;const i=document.createElement(n);return th(e)&&Object.entries(e).forEach(([r,s])=>{st(s)?i.setAttribute(r,s):s===!0&&i.setAttribute(r,"")}),st(t)&&i.appendChild(document.createTextNode(t)),i},bI=Dx,gI=async()=>{const n=bI({name:"VuepressApp",setup(){AI();for(const t of lI)t();return()=>[lt(Yp),..._R.map(t=>lt(t))]}}),e=pI();hI(n),mI(n,e);for(const t of BR)await t({app:n,router:e,siteData:mi});return n.use(e),{app:n,router:e}};gI().then(({app:n,router:e})=>{e.isReady().then(()=>{n.mount("#app")})});export{kI as A,lt as B,ob as C,JS as D,mn as E,_e as F,et as G,wn as H,Nn as I,wr as J,ab as K,sb as L,dl as M,st as N,cg as O,Et as P,en as Q,Ns as R,OI as S,Xa as T,th as U,vI as V,sl as W,ug as X,Xe as _,we as a,Oe as b,jI as c,gI as createVueApp,Ae as d,De as e,Wn as f,On as g,ph as h,qi as i,YS as j,dt as k,We as l,qr as m,xn as n,Pe as o,fl as p,ti as q,ct as r,ex as s,Yt as t,QS as u,on as v,Ie as w,rb as x,$S as y,MI as z};