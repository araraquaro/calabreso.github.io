(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Dr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const V={},vt=[],Ae=()=>{},Qo=()=>!1,es=/^on[^a-z]/,Rn=e=>es.test(e),zr=e=>e.startsWith("onUpdate:"),ee=Object.assign,$r=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},ts=Object.prototype.hasOwnProperty,$=(e,t)=>ts.call(e,t),L=Array.isArray,bt=e=>jn(e)==="[object Map]",Pi=e=>jn(e)==="[object Set]",R=e=>typeof e=="function",te=e=>typeof e=="string",Br=e=>typeof e=="symbol",X=e=>e!==null&&typeof e=="object",Si=e=>X(e)&&R(e.then)&&R(e.catch),Ii=Object.prototype.toString,jn=e=>Ii.call(e),ns=e=>jn(e).slice(8,-1),Ti=e=>jn(e)==="[object Object]",Ur=e=>te(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,yn=Dr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Dn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},rs=/-(\w)/g,Me=Dn(e=>e.replace(rs,(t,n)=>n?n.toUpperCase():"")),as=/\B([A-Z])/g,Ot=Dn(e=>e.replace(as,"-$1").toLowerCase()),zn=Dn(e=>e.charAt(0).toUpperCase()+e.slice(1)),er=Dn(e=>e?`on${zn(e)}`:""),Cn=(e,t)=>!Object.is(e,t),tr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},En=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},is=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Oa;const dr=()=>Oa||(Oa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Hr(e){if(L(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=te(r)?fs(r):Hr(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(te(e))return e;if(X(e))return e}}const os=/;(?![^(]*\))/g,ss=/:([^]+)/,ls=/\/\*[^]*?\*\//g;function fs(e){const t={};return e.replace(ls,"").split(os).forEach(n=>{if(n){const r=n.split(ss);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function $n(e){let t="";if(te(e))t=e;else if(L(e))for(let n=0;n<e.length;n++){const r=$n(e[n]);r&&(t+=r+" ")}else if(X(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const cs="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",us=Dr(cs);function Mi(e){return!!e||e===""}const ds=e=>te(e)?e:e==null?"":L(e)||X(e)&&(e.toString===Ii||!R(e.toString))?JSON.stringify(e,Ni,2):String(e),Ni=(e,t)=>t&&t.__v_isRef?Ni(e,t.value):bt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Pi(t)?{[`Set(${t.size})`]:[...t.values()]}:X(t)&&!L(t)&&!Ti(t)?String(t):t;let be;class ms{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=be,!t&&be&&(this.index=(be.scopes||(be.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=be;try{return be=this,t()}finally{be=n}}}on(){be=this}off(){be=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function ps(e,t=be){t&&t.active&&t.effects.push(e)}function hs(){return be}const Yr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Fi=e=>(e.w&Ve)>0,Li=e=>(e.n&Ve)>0,gs=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ve},vs=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Fi(a)&&!Li(a)?a.delete(e):t[n++]=a,a.w&=~Ve,a.n&=~Ve}t.length=n}},mr=new WeakMap;let Mt=0,Ve=1;const pr=30;let ye;const st=Symbol(""),hr=Symbol("");class Wr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,ps(this,r)}run(){if(!this.active)return this.fn();let t=ye,n=Ke;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=ye,ye=this,Ke=!0,Ve=1<<++Mt,Mt<=pr?gs(this):Ca(this),this.fn()}finally{Mt<=pr&&vs(this),Ve=1<<--Mt,ye=this.parent,Ke=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ye===this?this.deferStop=!0:this.active&&(Ca(this),this.onStop&&this.onStop(),this.active=!1)}}function Ca(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Ke=!0;const Ri=[];function Ct(){Ri.push(Ke),Ke=!1}function Et(){const e=Ri.pop();Ke=e===void 0?!0:e}function ue(e,t,n){if(Ke&&ye){let r=mr.get(e);r||mr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Yr()),ji(a)}}function ji(e,t){let n=!1;Mt<=pr?Li(e)||(e.n|=Ve,n=!Fi(e)):n=!e.has(ye),n&&(e.add(ye),ye.deps.push(e))}function je(e,t,n,r,a,i){const o=mr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&L(e)){const l=Number(r);o.forEach((c,d)=>{(d==="length"||d>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":L(e)?Ur(n)&&s.push(o.get("length")):(s.push(o.get(st)),bt(e)&&s.push(o.get(hr)));break;case"delete":L(e)||(s.push(o.get(st)),bt(e)&&s.push(o.get(hr)));break;case"set":bt(e)&&s.push(o.get(st));break}if(s.length===1)s[0]&&gr(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);gr(Yr(l))}}function gr(e,t){const n=L(e)?e:[...e];for(const r of n)r.computed&&Ea(r);for(const r of n)r.computed||Ea(r)}function Ea(e,t){(e!==ye||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const bs=Dr("__proto__,__v_isRef,__isVue"),Di=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Br)),ys=Kr(),xs=Kr(!1,!0),ws=Kr(!0),Pa=_s();function _s(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=B(this);for(let i=0,o=this.length;i<o;i++)ue(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(B)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Ct();const r=B(this)[t].apply(this,n);return Et(),r}}),e}function As(e){const t=B(this);return ue(t,"has",e),t.hasOwnProperty(e)}function Kr(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?zs:Hi:t?Ui:Bi).get(r))return r;const o=L(r);if(!e){if(o&&$(Pa,a))return Reflect.get(Pa,a,i);if(a==="hasOwnProperty")return As}const s=Reflect.get(r,a,i);return(Br(a)?Di.has(a):bs(a))||(e||ue(r,"get",a),t)?s:le(s)?o&&Ur(a)?s:s.value:X(s)?e?Yi(s):Xr(s):s}}const ks=zi(),Os=zi(!0);function zi(e=!1){return function(n,r,a,i){let o=n[r];if(zt(o)&&le(o)&&!le(a))return!1;if(!e&&(!vr(a)&&!zt(a)&&(o=B(o),a=B(a)),!L(n)&&le(o)&&!le(a)))return o.value=a,!0;const s=L(n)&&Ur(r)?Number(r)<n.length:$(n,r),l=Reflect.set(n,r,a,i);return n===B(i)&&(s?Cn(a,o)&&je(n,"set",r,a):je(n,"add",r,a)),l}}function Cs(e,t){const n=$(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&je(e,"delete",t,void 0),r}function Es(e,t){const n=Reflect.has(e,t);return(!Br(t)||!Di.has(t))&&ue(e,"has",t),n}function Ps(e){return ue(e,"iterate",L(e)?"length":st),Reflect.ownKeys(e)}const $i={get:ys,set:ks,deleteProperty:Cs,has:Es,ownKeys:Ps},Ss={get:ws,set(e,t){return!0},deleteProperty(e,t){return!0}},Is=ee({},$i,{get:xs,set:Os}),qr=e=>e,Bn=e=>Reflect.getPrototypeOf(e);function rn(e,t,n=!1,r=!1){e=e.__v_raw;const a=B(e),i=B(t);n||(t!==i&&ue(a,"get",t),ue(a,"get",i));const{has:o}=Bn(a),s=r?qr:n?Zr:Jr;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function an(e,t=!1){const n=this.__v_raw,r=B(n),a=B(e);return t||(e!==a&&ue(r,"has",e),ue(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function on(e,t=!1){return e=e.__v_raw,!t&&ue(B(e),"iterate",st),Reflect.get(e,"size",e)}function Sa(e){e=B(e);const t=B(this);return Bn(t).has.call(t,e)||(t.add(e),je(t,"add",e,e)),this}function Ia(e,t){t=B(t);const n=B(this),{has:r,get:a}=Bn(n);let i=r.call(n,e);i||(e=B(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?Cn(t,o)&&je(n,"set",e,t):je(n,"add",e,t),this}function Ta(e){const t=B(this),{has:n,get:r}=Bn(t);let a=n.call(t,e);a||(e=B(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&je(t,"delete",e,void 0),i}function Ma(){const e=B(this),t=e.size!==0,n=e.clear();return t&&je(e,"clear",void 0,void 0),n}function sn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=B(o),l=t?qr:e?Zr:Jr;return!e&&ue(s,"iterate",st),o.forEach((c,d)=>r.call(a,l(c),l(d),i))}}function ln(e,t,n){return function(...r){const a=this.__v_raw,i=B(a),o=bt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),d=n?qr:t?Zr:Jr;return!t&&ue(i,"iterate",l?hr:st),{next(){const{value:m,done:v}=c.next();return v?{value:m,done:v}:{value:s?[d(m[0]),d(m[1])]:d(m),done:v}},[Symbol.iterator](){return this}}}}function He(e){return function(...t){return e==="delete"?!1:this}}function Ts(){const e={get(i){return rn(this,i)},get size(){return on(this)},has:an,add:Sa,set:Ia,delete:Ta,clear:Ma,forEach:sn(!1,!1)},t={get(i){return rn(this,i,!1,!0)},get size(){return on(this)},has:an,add:Sa,set:Ia,delete:Ta,clear:Ma,forEach:sn(!1,!0)},n={get(i){return rn(this,i,!0)},get size(){return on(this,!0)},has(i){return an.call(this,i,!0)},add:He("add"),set:He("set"),delete:He("delete"),clear:He("clear"),forEach:sn(!0,!1)},r={get(i){return rn(this,i,!0,!0)},get size(){return on(this,!0)},has(i){return an.call(this,i,!0)},add:He("add"),set:He("set"),delete:He("delete"),clear:He("clear"),forEach:sn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=ln(i,!1,!1),n[i]=ln(i,!0,!1),t[i]=ln(i,!1,!0),r[i]=ln(i,!0,!0)}),[e,n,t,r]}const[Ms,Ns,Fs,Ls]=Ts();function Vr(e,t){const n=t?e?Ls:Fs:e?Ns:Ms;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get($(n,a)&&a in r?n:r,a,i)}const Rs={get:Vr(!1,!1)},js={get:Vr(!1,!0)},Ds={get:Vr(!0,!1)},Bi=new WeakMap,Ui=new WeakMap,Hi=new WeakMap,zs=new WeakMap;function $s(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Bs(e){return e.__v_skip||!Object.isExtensible(e)?0:$s(ns(e))}function Xr(e){return zt(e)?e:Gr(e,!1,$i,Rs,Bi)}function Us(e){return Gr(e,!1,Is,js,Ui)}function Yi(e){return Gr(e,!0,Ss,Ds,Hi)}function Gr(e,t,n,r,a){if(!X(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Bs(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function yt(e){return zt(e)?yt(e.__v_raw):!!(e&&e.__v_isReactive)}function zt(e){return!!(e&&e.__v_isReadonly)}function vr(e){return!!(e&&e.__v_isShallow)}function Wi(e){return yt(e)||zt(e)}function B(e){const t=e&&e.__v_raw;return t?B(t):e}function Ki(e){return En(e,"__v_skip",!0),e}const Jr=e=>X(e)?Xr(e):e,Zr=e=>X(e)?Yi(e):e;function Hs(e){Ke&&ye&&(e=B(e),ji(e.dep||(e.dep=Yr())))}function Ys(e,t){e=B(e);const n=e.dep;n&&gr(n)}function le(e){return!!(e&&e.__v_isRef===!0)}function Ws(e){return le(e)?e.value:e}const Ks={get:(e,t,n)=>Ws(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return le(a)&&!le(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function qi(e){return yt(e)?e:new Proxy(e,Ks)}class qs{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Wr(t,()=>{this._dirty||(this._dirty=!0,Ys(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=B(this);return Hs(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Vs(e,t,n=!1){let r,a;const i=R(e);return i?(r=e,a=Ae):(r=e.get,a=e.set),new qs(r,a,i||!a,n)}function qe(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Un(i,t,n)}return a}function ke(e,t,n,r){if(R(e)){const i=qe(e,t,n,r);return i&&Si(i)&&i.catch(o=>{Un(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(ke(e[i],t,n,r));return a}function Un(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){qe(l,null,10,[e,o,s]);return}}Xs(e,n,a,r)}function Xs(e,t,n,r=!0){console.error(e)}let $t=!1,br=!1;const ie=[];let Ie=0;const xt=[];let Le=null,rt=0;const Vi=Promise.resolve();let Qr=null;function Gs(e){const t=Qr||Vi;return e?t.then(this?e.bind(this):e):t}function Js(e){let t=Ie+1,n=ie.length;for(;t<n;){const r=t+n>>>1;Bt(ie[r])<e?t=r+1:n=r}return t}function ea(e){(!ie.length||!ie.includes(e,$t&&e.allowRecurse?Ie+1:Ie))&&(e.id==null?ie.push(e):ie.splice(Js(e.id),0,e),Xi())}function Xi(){!$t&&!br&&(br=!0,Qr=Vi.then(Ji))}function Zs(e){const t=ie.indexOf(e);t>Ie&&ie.splice(t,1)}function Qs(e){L(e)?xt.push(...e):(!Le||!Le.includes(e,e.allowRecurse?rt+1:rt))&&xt.push(e),Xi()}function Na(e,t=$t?Ie+1:0){for(;t<ie.length;t++){const n=ie[t];n&&n.pre&&(ie.splice(t,1),t--,n())}}function Gi(e){if(xt.length){const t=[...new Set(xt)];if(xt.length=0,Le){Le.push(...t);return}for(Le=t,Le.sort((n,r)=>Bt(n)-Bt(r)),rt=0;rt<Le.length;rt++)Le[rt]();Le=null,rt=0}}const Bt=e=>e.id==null?1/0:e.id,el=(e,t)=>{const n=Bt(e)-Bt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Ji(e){br=!1,$t=!0,ie.sort(el);const t=Ae;try{for(Ie=0;Ie<ie.length;Ie++){const n=ie[Ie];n&&n.active!==!1&&qe(n,null,14)}}finally{Ie=0,ie.length=0,Gi(),$t=!1,Qr=null,(ie.length||xt.length)&&Ji()}}function tl(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||V;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:v}=r[d]||V;v&&(a=n.map(_=>te(_)?_.trim():_)),m&&(a=n.map(is))}let s,l=r[s=er(t)]||r[s=er(Me(t))];!l&&i&&(l=r[s=er(Ot(t))]),l&&ke(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,ke(c,e,6,a)}}function Zi(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!R(e)){const l=c=>{const d=Zi(c,t,!0);d&&(s=!0,ee(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(X(e)&&r.set(e,null),null):(L(i)?i.forEach(l=>o[l]=null):ee(o,i),X(e)&&r.set(e,o),o)}function Hn(e,t){return!e||!Rn(t)?!1:(t=t.slice(2).replace(/Once$/,""),$(e,t[0].toLowerCase()+t.slice(1))||$(e,Ot(t))||$(e,t))}let xe=null,Qi=null;function Pn(e){const t=xe;return xe=e,Qi=e&&e.type.__scopeId||null,t}function nl(e,t=xe,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Ya(-1);const i=Pn(t);let o;try{o=e(...a)}finally{Pn(i),r._d&&Ya(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function nr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:d,renderCache:m,data:v,setupState:_,ctx:j,inheritAttrs:M}=e;let z,A;const O=Pn(e);try{if(n.shapeFlag&4){const S=a||r;z=Se(d.call(S,S,m,i,_,v,j)),A=l}else{const S=t;z=Se(S.length>1?S(i,{attrs:l,slots:s,emit:c}):S(i,null)),A=t.props?l:rl(l)}}catch(S){Rt.length=0,Un(S,e,1),z=me(Ut)}let N=z;if(A&&M!==!1){const S=Object.keys(A),{shapeFlag:U}=N;S.length&&U&7&&(o&&S.some(zr)&&(A=al(A,o)),N=_t(N,A))}return n.dirs&&(N=_t(N),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&(N.transition=n.transition),z=N,Pn(O),z}const rl=e=>{let t;for(const n in e)(n==="class"||n==="style"||Rn(n))&&((t||(t={}))[n]=e[n]);return t},al=(e,t)=>{const n={};for(const r in e)(!zr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function il(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Fa(r,o,c):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const v=d[m];if(o[v]!==r[v]&&!Hn(c,v))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Fa(r,o,c):!0:!!o;return!1}function Fa(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Hn(n,i))return!0}return!1}function ol({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const sl=e=>e.__isSuspense;function ll(e,t){t&&t.pendingBranch?L(e)?t.effects.push(...e):t.effects.push(e):Qs(e)}const fn={};function xn(e,t,n){return eo(e,t,n)}function eo(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=V){var s;const l=hs()===((s=ne)==null?void 0:s.scope)?ne:null;let c,d=!1,m=!1;if(le(e)?(c=()=>e.value,d=vr(e)):yt(e)?(c=()=>e,r=!0):L(e)?(m=!0,d=e.some(S=>yt(S)||vr(S)),c=()=>e.map(S=>{if(le(S))return S.value;if(yt(S))return pt(S);if(R(S))return qe(S,l,2)})):R(e)?t?c=()=>qe(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return v&&v(),ke(e,l,3,[_])}:c=Ae,t&&r){const S=c;c=()=>pt(S())}let v,_=S=>{v=O.onStop=()=>{qe(S,l,4)}},j;if(Yt)if(_=Ae,t?n&&ke(t,l,3,[c(),m?[]:void 0,_]):c(),a==="sync"){const S=lf();j=S.__watcherHandles||(S.__watcherHandles=[])}else return Ae;let M=m?new Array(e.length).fill(fn):fn;const z=()=>{if(O.active)if(t){const S=O.run();(r||d||(m?S.some((U,re)=>Cn(U,M[re])):Cn(S,M)))&&(v&&v(),ke(t,l,3,[S,M===fn?void 0:m&&M[0]===fn?[]:M,_]),M=S)}else O.run()};z.allowRecurse=!!t;let A;a==="sync"?A=z:a==="post"?A=()=>ce(z,l&&l.suspense):(z.pre=!0,l&&(z.id=l.uid),A=()=>ea(z));const O=new Wr(c,A);t?n?z():M=O.run():a==="post"?ce(O.run.bind(O),l&&l.suspense):O.run();const N=()=>{O.stop(),l&&l.scope&&$r(l.scope.effects,O)};return j&&j.push(N),N}function fl(e,t,n){const r=this.proxy,a=te(e)?e.includes(".")?to(r,e):()=>r[e]:e.bind(r,r);let i;R(t)?i=t:(i=t.handler,n=t);const o=ne;At(this);const s=eo(a,i.bind(r),n);return o?At(o):lt(),s}function to(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function pt(e,t){if(!X(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),le(e))pt(e.value,t);else if(L(e))for(let n=0;n<e.length;n++)pt(e[n],t);else if(Pi(e)||bt(e))e.forEach(n=>{pt(n,t)});else if(Ti(e))for(const n in e)pt(e[n],t);return e}function et(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Ct(),ke(l,n,8,[e.el,s,e,t]),Et())}}function cl(e,t){return R(e)?(()=>ee({name:e.name},t,{setup:e}))():e}const wn=e=>!!e.type.__asyncLoader,no=e=>e.type.__isKeepAlive;function ul(e,t){ro(e,"a",t)}function dl(e,t){ro(e,"da",t)}function ro(e,t,n=ne){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Yn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)no(a.parent.vnode)&&ml(r,t,n,a),a=a.parent}}function ml(e,t,n,r){const a=Yn(t,e,r,!0);ao(()=>{$r(r[t],a)},n)}function Yn(e,t,n=ne,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Ct(),At(n);const s=ke(t,n,e,o);return lt(),Et(),s});return r?a.unshift(i):a.push(i),i}}const Be=e=>(t,n=ne)=>(!Yt||e==="sp")&&Yn(e,(...r)=>t(...r),n),pl=Be("bm"),hl=Be("m"),gl=Be("bu"),vl=Be("u"),bl=Be("bum"),ao=Be("um"),yl=Be("sp"),xl=Be("rtg"),wl=Be("rtc");function _l(e,t=ne){Yn("ec",e,t)}const io="components";function Al(e,t){return Ol(io,e,!0,t)||e}const kl=Symbol.for("v-ndc");function Ol(e,t,n=!0,r=!1){const a=xe||ne;if(a){const i=a.type;if(e===io){const s=rf(i,!1);if(s&&(s===t||s===Me(t)||s===zn(Me(t))))return i}const o=La(a[e]||i[e],t)||La(a.appContext[e],t);return!o&&r?i:o}}function La(e,t){return e&&(e[t]||e[Me(t)]||e[zn(Me(t))])}const yr=e=>e?bo(e)?ia(e)||e.proxy:yr(e.parent):null,Lt=ee(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>yr(e.parent),$root:e=>yr(e.root),$emit:e=>e.emit,$options:e=>ta(e),$forceUpdate:e=>e.f||(e.f=()=>ea(e.update)),$nextTick:e=>e.n||(e.n=Gs.bind(e.proxy)),$watch:e=>fl.bind(e)}),rr=(e,t)=>e!==V&&!e.__isScriptSetup&&$(e,t),Cl={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const _=o[t];if(_!==void 0)switch(_){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(rr(r,t))return o[t]=1,r[t];if(a!==V&&$(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&$(c,t))return o[t]=3,i[t];if(n!==V&&$(n,t))return o[t]=4,n[t];xr&&(o[t]=0)}}const d=Lt[t];let m,v;if(d)return t==="$attrs"&&ue(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==V&&$(n,t))return o[t]=4,n[t];if(v=l.config.globalProperties,$(v,t))return v[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return rr(a,t)?(a[t]=n,!0):r!==V&&$(r,t)?(r[t]=n,!0):$(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==V&&$(e,o)||rr(t,o)||(s=i[0])&&$(s,o)||$(r,o)||$(Lt,o)||$(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:$(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ra(e){return L(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let xr=!0;function El(e){const t=ta(e),n=e.proxy,r=e.ctx;xr=!1,t.beforeCreate&&ja(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:d,beforeMount:m,mounted:v,beforeUpdate:_,updated:j,activated:M,deactivated:z,beforeDestroy:A,beforeUnmount:O,destroyed:N,unmounted:S,render:U,renderTracked:re,renderTriggered:ae,errorCaptured:ge,serverPrefetch:he,expose:Ne,inheritAttrs:St,components:Qt,directives:en,filters:Jn}=t;if(c&&Pl(c,r,null),o)for(const G in o){const Y=o[G];R(Y)&&(r[G]=Y.bind(n))}if(a){const G=a.call(n,n);X(G)&&(e.data=Xr(G))}if(xr=!0,i)for(const G in i){const Y=i[G],Ze=R(Y)?Y.bind(n,n):R(Y.get)?Y.get.bind(n,n):Ae,tn=!R(Y)&&R(Y.set)?Y.set.bind(n):Ae,Qe=nt({get:Ze,set:tn});Object.defineProperty(r,G,{enumerable:!0,configurable:!0,get:()=>Qe.value,set:Oe=>Qe.value=Oe})}if(s)for(const G in s)oo(s[G],r,n,G);if(l){const G=R(l)?l.call(n):l;Reflect.ownKeys(G).forEach(Y=>{Fl(Y,G[Y])})}d&&ja(d,e,"c");function oe(G,Y){L(Y)?Y.forEach(Ze=>G(Ze.bind(n))):Y&&G(Y.bind(n))}if(oe(pl,m),oe(hl,v),oe(gl,_),oe(vl,j),oe(ul,M),oe(dl,z),oe(_l,ge),oe(wl,re),oe(xl,ae),oe(bl,O),oe(ao,S),oe(yl,he),L(Ne))if(Ne.length){const G=e.exposed||(e.exposed={});Ne.forEach(Y=>{Object.defineProperty(G,Y,{get:()=>n[Y],set:Ze=>n[Y]=Ze})})}else e.exposed||(e.exposed={});U&&e.render===Ae&&(e.render=U),St!=null&&(e.inheritAttrs=St),Qt&&(e.components=Qt),en&&(e.directives=en)}function Pl(e,t,n=Ae){L(e)&&(e=wr(e));for(const r in e){const a=e[r];let i;X(a)?"default"in a?i=_n(a.from||r,a.default,!0):i=_n(a.from||r):i=_n(a),le(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function ja(e,t,n){ke(L(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function oo(e,t,n,r){const a=r.includes(".")?to(n,r):()=>n[r];if(te(e)){const i=t[e];R(i)&&xn(a,i)}else if(R(e))xn(a,e.bind(n));else if(X(e))if(L(e))e.forEach(i=>oo(i,t,n,r));else{const i=R(e.handler)?e.handler.bind(n):t[e.handler];R(i)&&xn(a,i,e)}}function ta(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>Sn(l,c,o,!0)),Sn(l,t,o)),X(t)&&i.set(t,l),l}function Sn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Sn(e,i,n,!0),a&&a.forEach(o=>Sn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Sl[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Sl={data:Da,props:za,emits:za,methods:Nt,computed:Nt,beforeCreate:se,created:se,beforeMount:se,mounted:se,beforeUpdate:se,updated:se,beforeDestroy:se,beforeUnmount:se,destroyed:se,unmounted:se,activated:se,deactivated:se,errorCaptured:se,serverPrefetch:se,components:Nt,directives:Nt,watch:Tl,provide:Da,inject:Il};function Da(e,t){return t?e?function(){return ee(R(e)?e.call(this,this):e,R(t)?t.call(this,this):t)}:t:e}function Il(e,t){return Nt(wr(e),wr(t))}function wr(e){if(L(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function se(e,t){return e?[...new Set([].concat(e,t))]:t}function Nt(e,t){return e?ee(Object.create(null),e,t):t}function za(e,t){return e?L(e)&&L(t)?[...new Set([...e,...t])]:ee(Object.create(null),Ra(e),Ra(t??{})):t}function Tl(e,t){if(!e)return t;if(!t)return e;const n=ee(Object.create(null),e);for(const r in t)n[r]=se(e[r],t[r]);return n}function so(){return{app:null,config:{isNativeTag:Qo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ml=0;function Nl(e,t){return function(r,a=null){R(r)||(r=ee({},r)),a!=null&&!X(a)&&(a=null);const i=so(),o=new Set;let s=!1;const l=i.app={_uid:Ml++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:ff,get config(){return i.config},set config(c){},use(c,...d){return o.has(c)||(c&&R(c.install)?(o.add(c),c.install(l,...d)):R(c)&&(o.add(c),c(l,...d))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,d){return d?(i.components[c]=d,l):i.components[c]},directive(c,d){return d?(i.directives[c]=d,l):i.directives[c]},mount(c,d,m){if(!s){const v=me(r,a);return v.appContext=i,d&&t?t(v,c):e(v,c,m),s=!0,l._container=c,c.__vue_app__=l,ia(v.component)||v.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,d){return i.provides[c]=d,l},runWithContext(c){In=l;try{return c()}finally{In=null}}};return l}}let In=null;function Fl(e,t){if(ne){let n=ne.provides;const r=ne.parent&&ne.parent.provides;r===n&&(n=ne.provides=Object.create(r)),n[e]=t}}function _n(e,t,n=!1){const r=ne||xe;if(r||In){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:In._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&R(t)?t.call(r&&r.proxy):t}}function Ll(e,t,n,r=!1){const a={},i={};En(i,Kn,1),e.propsDefaults=Object.create(null),lo(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Us(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Rl(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=B(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let v=d[m];if(Hn(e.emitsOptions,v))continue;const _=t[v];if(l)if($(i,v))_!==i[v]&&(i[v]=_,c=!0);else{const j=Me(v);a[j]=_r(l,s,j,_,e,!1)}else _!==i[v]&&(i[v]=_,c=!0)}}}else{lo(e,t,a,i)&&(c=!0);let d;for(const m in s)(!t||!$(t,m)&&((d=Ot(m))===m||!$(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=_r(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!$(t,m))&&(delete i[m],c=!0)}c&&je(e,"set","$attrs")}function lo(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(yn(l))continue;const c=t[l];let d;a&&$(a,d=Me(l))?!i||!i.includes(d)?n[d]=c:(s||(s={}))[d]=c:Hn(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=B(n),c=s||V;for(let d=0;d<i.length;d++){const m=i[d];n[m]=_r(a,l,m,c[m],e,!$(c,m))}}return o}function _r(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=$(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&R(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(At(a),r=c[n]=l.call(null,t),lt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Ot(n))&&(r=!0))}return r}function fo(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!R(e)){const d=m=>{l=!0;const[v,_]=fo(m,t,!0);ee(o,v),_&&s.push(..._)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return X(e)&&r.set(e,vt),vt;if(L(i))for(let d=0;d<i.length;d++){const m=Me(i[d]);$a(m)&&(o[m]=V)}else if(i)for(const d in i){const m=Me(d);if($a(m)){const v=i[d],_=o[m]=L(v)||R(v)?{type:v}:ee({},v);if(_){const j=Ha(Boolean,_.type),M=Ha(String,_.type);_[0]=j>-1,_[1]=M<0||j<M,(j>-1||$(_,"default"))&&s.push(m)}}}const c=[o,s];return X(e)&&r.set(e,c),c}function $a(e){return e[0]!=="$"}function Ba(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Ua(e,t){return Ba(e)===Ba(t)}function Ha(e,t){return L(t)?t.findIndex(n=>Ua(n,e)):R(t)&&Ua(t,e)?0:-1}const co=e=>e[0]==="_"||e==="$stable",na=e=>L(e)?e.map(Se):[Se(e)],jl=(e,t,n)=>{if(t._n)return t;const r=nl((...a)=>na(t(...a)),n);return r._c=!1,r},uo=(e,t,n)=>{const r=e._ctx;for(const a in e){if(co(a))continue;const i=e[a];if(R(i))t[a]=jl(a,i,r);else if(i!=null){const o=na(i);t[a]=()=>o}}},mo=(e,t)=>{const n=na(t);e.slots.default=()=>n},Dl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=B(t),En(t,"_",n)):uo(t,e.slots={})}else e.slots={},t&&mo(e,t);En(e.slots,Kn,1)},zl=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=V;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(ee(a,t),!n&&s===1&&delete a._):(i=!t.$stable,uo(t,a)),o=t}else t&&(mo(e,t),o={default:1});if(i)for(const s in a)!co(s)&&!(s in o)&&delete a[s]};function Ar(e,t,n,r,a=!1){if(L(e)){e.forEach((v,_)=>Ar(v,t&&(L(t)?t[_]:t),n,r,a));return}if(wn(r)&&!a)return;const i=r.shapeFlag&4?ia(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,d=s.refs===V?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(te(c)?(d[c]=null,$(m,c)&&(m[c]=null)):le(c)&&(c.value=null)),R(l))qe(l,s,12,[o,d]);else{const v=te(l),_=le(l);if(v||_){const j=()=>{if(e.f){const M=v?$(m,l)?m[l]:d[l]:l.value;a?L(M)&&$r(M,i):L(M)?M.includes(i)||M.push(i):v?(d[l]=[i],$(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else v?(d[l]=o,$(m,l)&&(m[l]=o)):_&&(l.value=o,e.k&&(d[e.k]=o))};o?(j.id=-1,ce(j,n)):j()}}}const ce=ll;function $l(e){return Bl(e)}function Bl(e,t){const n=dr();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:d,parentNode:m,nextSibling:v,setScopeId:_=Ae,insertStaticContent:j}=e,M=(f,u,p,g=null,h=null,x=null,k=!1,y=null,w=!!u.dynamicChildren)=>{if(f===u)return;f&&!Tt(f,u)&&(g=nn(f),Oe(f,h,x,!0),f=null),u.patchFlag===-2&&(w=!1,u.dynamicChildren=null);const{type:b,ref:I,shapeFlag:E}=u;switch(b){case Wn:z(f,u,p,g);break;case Ut:A(f,u,p,g);break;case ar:f==null&&O(u,p,g,k);break;case Pe:Qt(f,u,p,g,h,x,k,y,w);break;default:E&1?U(f,u,p,g,h,x,k,y,w):E&6?en(f,u,p,g,h,x,k,y,w):(E&64||E&128)&&b.process(f,u,p,g,h,x,k,y,w,ut)}I!=null&&h&&Ar(I,f&&f.ref,x,u||f,!u)},z=(f,u,p,g)=>{if(f==null)r(u.el=s(u.children),p,g);else{const h=u.el=f.el;u.children!==f.children&&c(h,u.children)}},A=(f,u,p,g)=>{f==null?r(u.el=l(u.children||""),p,g):u.el=f.el},O=(f,u,p,g)=>{[f.el,f.anchor]=j(f.children,u,p,g,f.el,f.anchor)},N=({el:f,anchor:u},p,g)=>{let h;for(;f&&f!==u;)h=v(f),r(f,p,g),f=h;r(u,p,g)},S=({el:f,anchor:u})=>{let p;for(;f&&f!==u;)p=v(f),a(f),f=p;a(u)},U=(f,u,p,g,h,x,k,y,w)=>{k=k||u.type==="svg",f==null?re(u,p,g,h,x,k,y,w):he(f,u,h,x,k,y,w)},re=(f,u,p,g,h,x,k,y)=>{let w,b;const{type:I,props:E,shapeFlag:T,transition:F,dirs:D}=f;if(w=f.el=o(f.type,x,E&&E.is,E),T&8?d(w,f.children):T&16&&ge(f.children,w,null,g,h,x&&I!=="foreignObject",k,y),D&&et(f,null,g,"created"),ae(w,f,f.scopeId,k,g),E){for(const H in E)H!=="value"&&!yn(H)&&i(w,H,null,E[H],x,f.children,g,h,Fe);"value"in E&&i(w,"value",null,E.value),(b=E.onVnodeBeforeMount)&&Ee(b,g,f)}D&&et(f,null,g,"beforeMount");const W=(!h||h&&!h.pendingBranch)&&F&&!F.persisted;W&&F.beforeEnter(w),r(w,u,p),((b=E&&E.onVnodeMounted)||W||D)&&ce(()=>{b&&Ee(b,g,f),W&&F.enter(w),D&&et(f,null,g,"mounted")},h)},ae=(f,u,p,g,h)=>{if(p&&_(f,p),g)for(let x=0;x<g.length;x++)_(f,g[x]);if(h){let x=h.subTree;if(u===x){const k=h.vnode;ae(f,k,k.scopeId,k.slotScopeIds,h.parent)}}},ge=(f,u,p,g,h,x,k,y,w=0)=>{for(let b=w;b<f.length;b++){const I=f[b]=y?We(f[b]):Se(f[b]);M(null,I,u,p,g,h,x,k,y)}},he=(f,u,p,g,h,x,k)=>{const y=u.el=f.el;let{patchFlag:w,dynamicChildren:b,dirs:I}=u;w|=f.patchFlag&16;const E=f.props||V,T=u.props||V;let F;p&&tt(p,!1),(F=T.onVnodeBeforeUpdate)&&Ee(F,p,u,f),I&&et(u,f,p,"beforeUpdate"),p&&tt(p,!0);const D=h&&u.type!=="foreignObject";if(b?Ne(f.dynamicChildren,b,y,p,g,D,x):k||Y(f,u,y,null,p,g,D,x,!1),w>0){if(w&16)St(y,u,E,T,p,g,h);else if(w&2&&E.class!==T.class&&i(y,"class",null,T.class,h),w&4&&i(y,"style",E.style,T.style,h),w&8){const W=u.dynamicProps;for(let H=0;H<W.length;H++){const Z=W[H],ve=E[Z],dt=T[Z];(dt!==ve||Z==="value")&&i(y,Z,ve,dt,h,f.children,p,g,Fe)}}w&1&&f.children!==u.children&&d(y,u.children)}else!k&&b==null&&St(y,u,E,T,p,g,h);((F=T.onVnodeUpdated)||I)&&ce(()=>{F&&Ee(F,p,u,f),I&&et(u,f,p,"updated")},g)},Ne=(f,u,p,g,h,x,k)=>{for(let y=0;y<u.length;y++){const w=f[y],b=u[y],I=w.el&&(w.type===Pe||!Tt(w,b)||w.shapeFlag&70)?m(w.el):p;M(w,b,I,null,g,h,x,k,!0)}},St=(f,u,p,g,h,x,k)=>{if(p!==g){if(p!==V)for(const y in p)!yn(y)&&!(y in g)&&i(f,y,p[y],null,k,u.children,h,x,Fe);for(const y in g){if(yn(y))continue;const w=g[y],b=p[y];w!==b&&y!=="value"&&i(f,y,b,w,k,u.children,h,x,Fe)}"value"in g&&i(f,"value",p.value,g.value)}},Qt=(f,u,p,g,h,x,k,y,w)=>{const b=u.el=f?f.el:s(""),I=u.anchor=f?f.anchor:s("");let{patchFlag:E,dynamicChildren:T,slotScopeIds:F}=u;F&&(y=y?y.concat(F):F),f==null?(r(b,p,g),r(I,p,g),ge(u.children,p,I,h,x,k,y,w)):E>0&&E&64&&T&&f.dynamicChildren?(Ne(f.dynamicChildren,T,p,h,x,k,y),(u.key!=null||h&&u===h.subTree)&&po(f,u,!0)):Y(f,u,p,I,h,x,k,y,w)},en=(f,u,p,g,h,x,k,y,w)=>{u.slotScopeIds=y,f==null?u.shapeFlag&512?h.ctx.activate(u,p,g,k,w):Jn(u,p,g,h,x,k,w):ya(f,u,w)},Jn=(f,u,p,g,h,x,k)=>{const y=f.component=Zl(f,g,h);if(no(f)&&(y.ctx.renderer=ut),Ql(y),y.asyncDep){if(h&&h.registerDep(y,oe),!f.el){const w=y.subTree=me(Ut);A(null,w,u,p)}return}oe(y,f,u,p,h,x,k)},ya=(f,u,p)=>{const g=u.component=f.component;if(il(f,u,p))if(g.asyncDep&&!g.asyncResolved){G(g,u,p);return}else g.next=u,Zs(g.update),g.update();else u.el=f.el,g.vnode=u},oe=(f,u,p,g,h,x,k)=>{const y=()=>{if(f.isMounted){let{next:I,bu:E,u:T,parent:F,vnode:D}=f,W=I,H;tt(f,!1),I?(I.el=D.el,G(f,I,k)):I=D,E&&tr(E),(H=I.props&&I.props.onVnodeBeforeUpdate)&&Ee(H,F,I,D),tt(f,!0);const Z=nr(f),ve=f.subTree;f.subTree=Z,M(ve,Z,m(ve.el),nn(ve),f,h,x),I.el=Z.el,W===null&&ol(f,Z.el),T&&ce(T,h),(H=I.props&&I.props.onVnodeUpdated)&&ce(()=>Ee(H,F,I,D),h)}else{let I;const{el:E,props:T}=u,{bm:F,m:D,parent:W}=f,H=wn(u);if(tt(f,!1),F&&tr(F),!H&&(I=T&&T.onVnodeBeforeMount)&&Ee(I,W,u),tt(f,!0),E&&Qn){const Z=()=>{f.subTree=nr(f),Qn(E,f.subTree,f,h,null)};H?u.type.__asyncLoader().then(()=>!f.isUnmounted&&Z()):Z()}else{const Z=f.subTree=nr(f);M(null,Z,p,g,f,h,x),u.el=Z.el}if(D&&ce(D,h),!H&&(I=T&&T.onVnodeMounted)){const Z=u;ce(()=>Ee(I,W,Z),h)}(u.shapeFlag&256||W&&wn(W.vnode)&&W.vnode.shapeFlag&256)&&f.a&&ce(f.a,h),f.isMounted=!0,u=p=g=null}},w=f.effect=new Wr(y,()=>ea(b),f.scope),b=f.update=()=>w.run();b.id=f.uid,tt(f,!0),b()},G=(f,u,p)=>{u.component=f;const g=f.vnode.props;f.vnode=u,f.next=null,Rl(f,u.props,g,p),zl(f,u.children,p),Ct(),Na(),Et()},Y=(f,u,p,g,h,x,k,y,w=!1)=>{const b=f&&f.children,I=f?f.shapeFlag:0,E=u.children,{patchFlag:T,shapeFlag:F}=u;if(T>0){if(T&128){tn(b,E,p,g,h,x,k,y,w);return}else if(T&256){Ze(b,E,p,g,h,x,k,y,w);return}}F&8?(I&16&&Fe(b,h,x),E!==b&&d(p,E)):I&16?F&16?tn(b,E,p,g,h,x,k,y,w):Fe(b,h,x,!0):(I&8&&d(p,""),F&16&&ge(E,p,g,h,x,k,y,w))},Ze=(f,u,p,g,h,x,k,y,w)=>{f=f||vt,u=u||vt;const b=f.length,I=u.length,E=Math.min(b,I);let T;for(T=0;T<E;T++){const F=u[T]=w?We(u[T]):Se(u[T]);M(f[T],F,p,null,h,x,k,y,w)}b>I?Fe(f,h,x,!0,!1,E):ge(u,p,g,h,x,k,y,w,E)},tn=(f,u,p,g,h,x,k,y,w)=>{let b=0;const I=u.length;let E=f.length-1,T=I-1;for(;b<=E&&b<=T;){const F=f[b],D=u[b]=w?We(u[b]):Se(u[b]);if(Tt(F,D))M(F,D,p,null,h,x,k,y,w);else break;b++}for(;b<=E&&b<=T;){const F=f[E],D=u[T]=w?We(u[T]):Se(u[T]);if(Tt(F,D))M(F,D,p,null,h,x,k,y,w);else break;E--,T--}if(b>E){if(b<=T){const F=T+1,D=F<I?u[F].el:g;for(;b<=T;)M(null,u[b]=w?We(u[b]):Se(u[b]),p,D,h,x,k,y,w),b++}}else if(b>T)for(;b<=E;)Oe(f[b],h,x,!0),b++;else{const F=b,D=b,W=new Map;for(b=D;b<=T;b++){const de=u[b]=w?We(u[b]):Se(u[b]);de.key!=null&&W.set(de.key,b)}let H,Z=0;const ve=T-D+1;let dt=!1,_a=0;const It=new Array(ve);for(b=0;b<ve;b++)It[b]=0;for(b=F;b<=E;b++){const de=f[b];if(Z>=ve){Oe(de,h,x,!0);continue}let Ce;if(de.key!=null)Ce=W.get(de.key);else for(H=D;H<=T;H++)if(It[H-D]===0&&Tt(de,u[H])){Ce=H;break}Ce===void 0?Oe(de,h,x,!0):(It[Ce-D]=b+1,Ce>=_a?_a=Ce:dt=!0,M(de,u[Ce],p,null,h,x,k,y,w),Z++)}const Aa=dt?Ul(It):vt;for(H=Aa.length-1,b=ve-1;b>=0;b--){const de=D+b,Ce=u[de],ka=de+1<I?u[de+1].el:g;It[b]===0?M(null,Ce,p,ka,h,x,k,y,w):dt&&(H<0||b!==Aa[H]?Qe(Ce,p,ka,2):H--)}}},Qe=(f,u,p,g,h=null)=>{const{el:x,type:k,transition:y,children:w,shapeFlag:b}=f;if(b&6){Qe(f.component.subTree,u,p,g);return}if(b&128){f.suspense.move(u,p,g);return}if(b&64){k.move(f,u,p,ut);return}if(k===Pe){r(x,u,p);for(let E=0;E<w.length;E++)Qe(w[E],u,p,g);r(f.anchor,u,p);return}if(k===ar){N(f,u,p);return}if(g!==2&&b&1&&y)if(g===0)y.beforeEnter(x),r(x,u,p),ce(()=>y.enter(x),h);else{const{leave:E,delayLeave:T,afterLeave:F}=y,D=()=>r(x,u,p),W=()=>{E(x,()=>{D(),F&&F()})};T?T(x,D,W):W()}else r(x,u,p)},Oe=(f,u,p,g=!1,h=!1)=>{const{type:x,props:k,ref:y,children:w,dynamicChildren:b,shapeFlag:I,patchFlag:E,dirs:T}=f;if(y!=null&&Ar(y,null,p,f,!0),I&256){u.ctx.deactivate(f);return}const F=I&1&&T,D=!wn(f);let W;if(D&&(W=k&&k.onVnodeBeforeUnmount)&&Ee(W,u,f),I&6)Zo(f.component,p,g);else{if(I&128){f.suspense.unmount(p,g);return}F&&et(f,null,u,"beforeUnmount"),I&64?f.type.remove(f,u,p,h,ut,g):b&&(x!==Pe||E>0&&E&64)?Fe(b,u,p,!1,!0):(x===Pe&&E&384||!h&&I&16)&&Fe(w,u,p),g&&xa(f)}(D&&(W=k&&k.onVnodeUnmounted)||F)&&ce(()=>{W&&Ee(W,u,f),F&&et(f,null,u,"unmounted")},p)},xa=f=>{const{type:u,el:p,anchor:g,transition:h}=f;if(u===Pe){Jo(p,g);return}if(u===ar){S(f);return}const x=()=>{a(p),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(f.shapeFlag&1&&h&&!h.persisted){const{leave:k,delayLeave:y}=h,w=()=>k(p,x);y?y(f.el,x,w):w()}else x()},Jo=(f,u)=>{let p;for(;f!==u;)p=v(f),a(f),f=p;a(u)},Zo=(f,u,p)=>{const{bum:g,scope:h,update:x,subTree:k,um:y}=f;g&&tr(g),h.stop(),x&&(x.active=!1,Oe(k,f,u,p)),y&&ce(y,u),ce(()=>{f.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},Fe=(f,u,p,g=!1,h=!1,x=0)=>{for(let k=x;k<f.length;k++)Oe(f[k],u,p,g,h)},nn=f=>f.shapeFlag&6?nn(f.component.subTree):f.shapeFlag&128?f.suspense.next():v(f.anchor||f.el),wa=(f,u,p)=>{f==null?u._vnode&&Oe(u._vnode,null,null,!0):M(u._vnode||null,f,u,null,null,null,p),Na(),Gi(),u._vnode=f},ut={p:M,um:Oe,m:Qe,r:xa,mt:Jn,mc:ge,pc:Y,pbc:Ne,n:nn,o:e};let Zn,Qn;return t&&([Zn,Qn]=t(ut)),{render:wa,hydrate:Zn,createApp:Nl(wa,Zn)}}function tt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function po(e,t,n=!1){const r=e.children,a=t.children;if(L(r)&&L(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=We(a[i]),s.el=o.el),n||po(o,s)),s.type===Wn&&(s.el=o.el)}}function Ul(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Hl=e=>e.__isTeleport,Pe=Symbol.for("v-fgt"),Wn=Symbol.for("v-txt"),Ut=Symbol.for("v-cmt"),ar=Symbol.for("v-stc"),Rt=[];let we=null;function ho(e=!1){Rt.push(we=e?null:[])}function Yl(){Rt.pop(),we=Rt[Rt.length-1]||null}let Ht=1;function Ya(e){Ht+=e}function Wl(e){return e.dynamicChildren=Ht>0?we||vt:null,Yl(),Ht>0&&we&&we.push(e),e}function go(e,t,n,r,a,i){return Wl(Tn(e,t,n,r,a,i,!0))}function kr(e){return e?e.__v_isVNode===!0:!1}function Tt(e,t){return e.type===t.type&&e.key===t.key}const Kn="__vInternal",vo=({key:e})=>e??null,An=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?te(e)||le(e)||R(e)?{i:xe,r:e,k:t,f:!!n}:e:null);function Tn(e,t=null,n=null,r=0,a=null,i=e===Pe?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&vo(t),ref:t&&An(t),scopeId:Qi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:xe};return s?(ra(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=te(n)?8:16),Ht>0&&!o&&we&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&we.push(l),l}const me=Kl;function Kl(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===kl)&&(e=Ut),kr(e)){const s=_t(e,t,!0);return n&&ra(s,n),Ht>0&&!i&&we&&(s.shapeFlag&6?we[we.indexOf(e)]=s:we.push(s)),s.patchFlag|=-2,s}if(af(e)&&(e=e.__vccOpts),t){t=ql(t);let{class:s,style:l}=t;s&&!te(s)&&(t.class=$n(s)),X(l)&&(Wi(l)&&!L(l)&&(l=ee({},l)),t.style=Hr(l))}const o=te(e)?1:sl(e)?128:Hl(e)?64:X(e)?4:R(e)?2:0;return Tn(e,t,n,r,a,o,i,!0)}function ql(e){return e?Wi(e)||Kn in e?ee({},e):e:null}function _t(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Xl(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&vo(s),ref:t&&t.ref?n&&a?L(a)?a.concat(An(t)):[a,An(t)]:An(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Pe?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&_t(e.ssContent),ssFallback:e.ssFallback&&_t(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Vl(e=" ",t=0){return me(Wn,null,e,t)}function Se(e){return e==null||typeof e=="boolean"?me(Ut):L(e)?me(Pe,null,e.slice()):typeof e=="object"?We(e):me(Wn,null,String(e))}function We(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:_t(e)}function ra(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(L(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),ra(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Kn in t)?t._ctx=xe:a===3&&xe&&(xe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else R(t)?(t={default:t,_ctx:xe},n=32):(t=String(t),r&64?(n=16,t=[Vl(t)]):n=8);e.children=t,e.shapeFlag|=n}function Xl(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=$n([t.class,r.class]));else if(a==="style")t.style=Hr([t.style,r.style]);else if(Rn(a)){const i=t[a],o=r[a];o&&i!==o&&!(L(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Ee(e,t,n,r=null){ke(e,t,7,[n,r])}const Gl=so();let Jl=0;function Zl(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Gl,i={uid:Jl++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new ms(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:fo(r,a),emitsOptions:Zi(r,a),emit:null,emitted:null,propsDefaults:V,inheritAttrs:r.inheritAttrs,ctx:V,data:V,props:V,attrs:V,slots:V,refs:V,setupState:V,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=tl.bind(null,i),e.ce&&e.ce(i),i}let ne=null,aa,mt,Wa="__VUE_INSTANCE_SETTERS__";(mt=dr()[Wa])||(mt=dr()[Wa]=[]),mt.push(e=>ne=e),aa=e=>{mt.length>1?mt.forEach(t=>t(e)):mt[0](e)};const At=e=>{aa(e),e.scope.on()},lt=()=>{ne&&ne.scope.off(),aa(null)};function bo(e){return e.vnode.shapeFlag&4}let Yt=!1;function Ql(e,t=!1){Yt=t;const{props:n,children:r}=e.vnode,a=bo(e);Ll(e,n,a,t),Dl(e,r);const i=a?ef(e,t):void 0;return Yt=!1,i}function ef(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Ki(new Proxy(e.ctx,Cl));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?nf(e):null;At(e),Ct();const i=qe(r,e,0,[e.props,a]);if(Et(),lt(),Si(i)){if(i.then(lt,lt),t)return i.then(o=>{Ka(e,o,t)}).catch(o=>{Un(o,e,0)});e.asyncDep=i}else Ka(e,i,t)}else yo(e,t)}function Ka(e,t,n){R(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:X(t)&&(e.setupState=qi(t)),yo(e,n)}let qa;function yo(e,t,n){const r=e.type;if(!e.render){if(!t&&qa&&!r.render){const a=r.template||ta(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=ee(ee({isCustomElement:i,delimiters:s},o),l);r.render=qa(a,c)}}e.render=r.render||Ae}At(e),Ct(),El(e),Et(),lt()}function tf(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return ue(e,"get","$attrs"),t[n]}}))}function nf(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return tf(e)},slots:e.slots,emit:e.emit,expose:t}}function ia(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(qi(Ki(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Lt)return Lt[n](e)},has(t,n){return n in t||n in Lt}}))}function rf(e,t=!0){return R(e)?e.displayName||e.name:e.name||t&&e.__name}function af(e){return R(e)&&"__vccOpts"in e}const nt=(e,t)=>Vs(e,t,Yt);function of(e,t,n){const r=arguments.length;return r===2?X(t)&&!L(t)?kr(t)?me(e,null,[t]):me(e,t):me(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&kr(n)&&(n=[n]),me(e,t,n))}const sf=Symbol.for("v-scx"),lf=()=>_n(sf),ff="3.3.4",cf="http://www.w3.org/2000/svg",at=typeof document<"u"?document:null,Va=at&&at.createElement("template"),uf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?at.createElementNS(cf,e):at.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>at.createTextNode(e),createComment:e=>at.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>at.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Va.innerHTML=r?`<svg>${e}</svg>`:e;const s=Va.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function df(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function mf(e,t,n){const r=e.style,a=te(n);if(n&&!a){if(t&&!te(t))for(const i in t)n[i]==null&&Or(r,i,"");for(const i in n)Or(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Xa=/\s*!important$/;function Or(e,t,n){if(L(n))n.forEach(r=>Or(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=pf(e,t);Xa.test(n)?e.setProperty(Ot(r),n.replace(Xa,""),"important"):e[r]=n}}const Ga=["Webkit","Moz","ms"],ir={};function pf(e,t){const n=ir[t];if(n)return n;let r=Me(t);if(r!=="filter"&&r in e)return ir[t]=r;r=zn(r);for(let a=0;a<Ga.length;a++){const i=Ga[a]+r;if(i in e)return ir[t]=i}return t}const Ja="http://www.w3.org/1999/xlink";function hf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ja,t.slice(6,t.length)):e.setAttributeNS(Ja,t,n);else{const i=us(t);n==null||i&&!Mi(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function gf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){e._value=n;const c=s==="OPTION"?e.getAttribute("value"):e.value,d=n??"";c!==d&&(e.value=d),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Mi(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function vf(e,t,n,r){e.addEventListener(t,n,r)}function bf(e,t,n,r){e.removeEventListener(t,n,r)}function yf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=xf(t);if(r){const c=i[t]=Af(r,a);vf(e,s,c,l)}else o&&(bf(e,s,o,l),i[t]=void 0)}}const Za=/(?:Once|Passive|Capture)$/;function xf(e){let t;if(Za.test(e)){t={};let r;for(;r=e.match(Za);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Ot(e.slice(2)),t]}let or=0;const wf=Promise.resolve(),_f=()=>or||(wf.then(()=>or=0),or=Date.now());function Af(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;ke(kf(r,n.value),t,5,[r])};return n.value=e,n.attached=_f(),n}function kf(e,t){if(L(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Qa=/^on[a-z]/,Of=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?df(e,r,a):t==="style"?mf(e,n,r):Rn(t)?zr(t)||yf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Cf(e,t,r,a))?gf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),hf(e,t,r,a))};function Cf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Qa.test(t)&&R(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Qa.test(t)&&te(n)?!1:t in e}const Ef=ee({patchProp:Of},uf);let ei;function Pf(){return ei||(ei=$l(Ef))}const Sf=(...e)=>{const t=Pf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=If(r);if(!a)return;const i=t._component;!R(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function If(e){return te(e)?document.querySelector(e):e}const xo=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Tf={id:"apelido"},Mf={__name:"Calabreso",props:{apelido:{type:String,required:!0}},setup(e){return(t,n)=>(ho(),go("div",Tf,ds(e.apelido),1))}},Nf=xo(Mf,[["__scopeId","data-v-ffe86ebf"]]);const Ff={class:"novo-apelido-container"},Lf={mounted(){this.getApelido(),console.log("Hello casão!")},data(){return{items:["Abelho","Aeromoço","Alfaço","Amado Batisto","Ambulâncio","Amoxilino","Anchieto","Anito","Arábio Saudito","Araraquaro","Barro do Tijuco","Belo Adormecido","Biblioteco","Bisteco","Bob Esponjo","Bolso Famílio","Borboleto","Braganço Paulisto","Bruno Surfistinho","Cadelo","Caganeiro","Calabreso","Caldo de Cano","Calopsito","Camisinho","Camomilo","Capivaro","Carabino","Caraguatatubo","Carambolo","Carapicuíbo","Carmen Mirando","Carniço","Caso Lotérico","Casos Bahio","Cataporo","Cenouro","Centopeio","Cerejo","Cervejo","Champions Ligo","Chavasco","Chora na tora","Chupeto","Cibaleno","Cláudia Raio","Cnpjoto","Copacapano","Coritibo","Corvino","Cracolândio","Cravículo","Creatino","Déboro Secco","Delício","Diademo","Dipirono","Donzelo","Doutor Deolano","Eliano","Emicido","Espingardo","Fanto Laranjo","Fátimo Bernado","Frigideiro","Garrafo","Gasolino","Geladeiro","Globelezo","Groselho","Gusttavo Limo","Helen Ganzarollo","Hemorróido","Inseticido","Insônio","Ipanemo","iPhono","Iphono","Isabelo","Itaipavo","Iveto Sangalo","Jiboio","Kid Bengalo","Lacraio","Lactopurgo","Lady Gago","Lagartixo","Lagosto","Lamborguino","Lantejolo","Lantejoulo","Lapiseiro","Lasanho","Lésbico","Lesmo","Limonado","Lombrigo","Luan Santano","Ludmillo","Macaxero","Maconho","Madonno","Magazino Luizo","Mama Penca","Mamadeiro","Mandico","Manivelo","Margarido","Marílio Mendonço","Mato Atlântico","Mego Seno","Melancio","Menopauso","Menstruado","Mestruado","Mona Liso","Monaliso","Mortadelo","Motorolo","Mussarelo","Mustango","Netflixo","Neymaro","Olívio Palito","Palmeiros","Panqueco","Pastilho","Patricio Poeto","Pelanco","Perebo","Perébo","Perereco","Picanho","Pistolo","Pitango","Prechéco","Prestobarbo","Princeso","Raparigo","Rito Cadilaco","Rito Cadillaco","Saboneto","Salado de fruto","Salado de Fruto","Salsicho","Samsungo","Sandálio","Sapatilho","Sapopembo","Seborréio","Senta Fofo","Seu Madrugo","Shakiro","Silos Malafaio","Sombrancelho","Sonho de Valso","Tadalafilo","Taturano","Teresino","Testosterono","Tilápio","Tim Maio","Toscano","Touca de Linguiça","Traíro","Tubaíno","Tutti-fruto","Ubatubo","Uberlândio","Ultrafarmo","Valesco Popozudo","Vampeto","Vero Ficho","Viagro","Virílio","Xilocaíno","Zebro"],apelido:null,animar:!1}},methods:{getApelido(){this.animar=!1;const e=Math.floor(Math.random()*this.items.length);this.apelido=this.items[e],setTimeout(()=>{this.animar=!0},100)}}},Rf=Object.assign(Lf,{__name:"App",setup(e){return(t,n)=>{const r=Al("font-awesome-icon");return ho(),go(Pe,null,[me(Nf,{apelido:t.apelido,class:$n({animate__animated:t.animar,animate__rubberBand:t.animar})},null,8,["apelido","class"]),Tn("div",Ff,[Tn("a",{href:"#",class:"novo-apelido",onClick:n[0]||(n[0]=(...a)=>t.getApelido&&t.getApelido(...a)),alt:"gerar novo apelido"},[me(r,{icon:"fa-solid fa-arrows-rotate"})])])],64)}}}),jf=xo(Rf,[["__scopeId","data-v-aec3421d"]]);function ti(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ti(Object(n),!0).forEach(function(r){Q(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ti(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Mn(e){"@babel/helpers - typeof";return Mn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Mn(e)}function Df(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ni(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function zf(e,t,n){return t&&ni(e.prototype,t),n&&ni(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function oa(e,t){return Bf(e)||Hf(e,t)||wo(e,t)||Wf()}function Gt(e){return $f(e)||Uf(e)||wo(e)||Yf()}function $f(e){if(Array.isArray(e))return Cr(e)}function Bf(e){if(Array.isArray(e))return e}function Uf(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Hf(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function wo(e,t){if(e){if(typeof e=="string")return Cr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Cr(e,t)}}function Cr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Yf(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Wf(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ri=function(){},sa={},_o={},Ao=null,ko={mark:ri,measure:ri};try{typeof window<"u"&&(sa=window),typeof document<"u"&&(_o=document),typeof MutationObserver<"u"&&(Ao=MutationObserver),typeof performance<"u"&&(ko=performance)}catch{}var Kf=sa.navigator||{},ai=Kf.userAgent,ii=ai===void 0?"":ai,Xe=sa,q=_o,oi=Ao,cn=ko;Xe.document;var Ue=!!q.documentElement&&!!q.head&&typeof q.addEventListener=="function"&&typeof q.createElement=="function",Oo=~ii.indexOf("MSIE")||~ii.indexOf("Trident/"),un,dn,mn,pn,hn,De="___FONT_AWESOME___",Er=16,Co="fa",Eo="svg-inline--fa",ft="data-fa-i2svg",Pr="data-fa-pseudo-element",qf="data-fa-pseudo-element-pending",la="data-prefix",fa="data-icon",si="fontawesome-i2svg",Vf="async",Xf=["HTML","HEAD","STYLE","SCRIPT"],Po=function(){try{return!0}catch{return!1}}(),K="classic",J="sharp",ca=[K,J];function Jt(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[K]}})}var Wt=Jt((un={},Q(un,K,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Q(un,J,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),un)),Kt=Jt((dn={},Q(dn,K,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Q(dn,J,{solid:"fass",regular:"fasr",light:"fasl"}),dn)),qt=Jt((mn={},Q(mn,K,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Q(mn,J,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),mn)),Gf=Jt((pn={},Q(pn,K,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Q(pn,J,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),pn)),Jf=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,So="fa-layers-text",Zf=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Qf=Jt((hn={},Q(hn,K,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Q(hn,J,{900:"fass",400:"fasr",300:"fasl"}),hn)),Io=[1,2,3,4,5,6,7,8,9,10],ec=Io.concat([11,12,13,14,15,16,17,18,19,20]),tc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],it={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Vt=new Set;Object.keys(Kt[K]).map(Vt.add.bind(Vt));Object.keys(Kt[J]).map(Vt.add.bind(Vt));var nc=[].concat(ca,Gt(Vt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",it.GROUP,it.SWAP_OPACITY,it.PRIMARY,it.SECONDARY]).concat(Io.map(function(e){return"".concat(e,"x")})).concat(ec.map(function(e){return"w-".concat(e)})),jt=Xe.FontAwesomeConfig||{};function rc(e){var t=q.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function ac(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(q&&typeof q.querySelector=="function"){var ic=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];ic.forEach(function(e){var t=oa(e,2),n=t[0],r=t[1],a=ac(rc(n));a!=null&&(jt[r]=a)})}var To={styleDefault:"solid",familyDefault:"classic",cssPrefix:Co,replacementClass:Eo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};jt.familyPrefix&&(jt.cssPrefix=jt.familyPrefix);var kt=C(C({},To),jt);kt.autoReplaceSvg||(kt.observeMutations=!1);var P={};Object.keys(To).forEach(function(e){Object.defineProperty(P,e,{enumerable:!0,set:function(n){kt[e]=n,Dt.forEach(function(r){return r(P)})},get:function(){return kt[e]}})});Object.defineProperty(P,"familyPrefix",{enumerable:!0,set:function(t){kt.cssPrefix=t,Dt.forEach(function(n){return n(P)})},get:function(){return kt.cssPrefix}});Xe.FontAwesomeConfig=P;var Dt=[];function oc(e){return Dt.push(e),function(){Dt.splice(Dt.indexOf(e),1)}}var Ye=Er,Te={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function sc(e){if(!(!e||!Ue)){var t=q.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=q.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return q.head.insertBefore(t,r),e}}var lc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Xt(){for(var e=12,t="";e-- >0;)t+=lc[Math.random()*62|0];return t}function Pt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ua(e){return e.classList?Pt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Mo(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function fc(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Mo(e[n]),'" ')},"").trim()}function qn(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function da(e){return e.size!==Te.size||e.x!==Te.x||e.y!==Te.y||e.rotate!==Te.rotate||e.flipX||e.flipY}function cc(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function uc(e){var t=e.transform,n=e.width,r=n===void 0?Er:n,a=e.height,i=a===void 0?Er:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Oo?l+="translate(".concat(t.x/Ye-r/2,"em, ").concat(t.y/Ye-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Ye,"em), calc(-50% + ").concat(t.y/Ye,"em)) "):l+="translate(".concat(t.x/Ye,"em, ").concat(t.y/Ye,"em) "),l+="scale(".concat(t.size/Ye*(t.flipX?-1:1),", ").concat(t.size/Ye*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var dc=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function No(){var e=Co,t=Eo,n=P.cssPrefix,r=P.replacementClass,a=dc;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var li=!1;function sr(){P.autoAddCss&&!li&&(sc(No()),li=!0)}var mc={mixout:function(){return{dom:{css:No,insertCss:sr}}},hooks:function(){return{beforeDOMElementCreation:function(){sr()},beforeI2svg:function(){sr()}}}},ze=Xe||{};ze[De]||(ze[De]={});ze[De].styles||(ze[De].styles={});ze[De].hooks||(ze[De].hooks={});ze[De].shims||(ze[De].shims=[]);var _e=ze[De],Fo=[],pc=function e(){q.removeEventListener("DOMContentLoaded",e),Nn=1,Fo.map(function(t){return t()})},Nn=!1;Ue&&(Nn=(q.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(q.readyState),Nn||q.addEventListener("DOMContentLoaded",pc));function hc(e){Ue&&(Nn?setTimeout(e,0):Fo.push(e))}function Zt(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Mo(e):"<".concat(t," ").concat(fc(r),">").concat(i.map(Zt).join(""),"</").concat(t,">")}function fi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var gc=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},lr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?gc(n,a):n,l,c,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)c=i[l],d=s(d,t[c],c,t);return d};function vc(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Sr(e){var t=vc(e);return t.length===1?t[0].toString(16):null}function bc(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function ci(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Ir(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=ci(t);typeof _e.hooks.addPack=="function"&&!a?_e.hooks.addPack(e,ci(t)):_e.styles[e]=C(C({},_e.styles[e]||{}),i),e==="fas"&&Ir("fa",t)}var gn,vn,bn,ht=_e.styles,yc=_e.shims,xc=(gn={},Q(gn,K,Object.values(qt[K])),Q(gn,J,Object.values(qt[J])),gn),ma=null,Lo={},Ro={},jo={},Do={},zo={},wc=(vn={},Q(vn,K,Object.keys(Wt[K])),Q(vn,J,Object.keys(Wt[J])),vn);function _c(e){return~nc.indexOf(e)}function Ac(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!_c(a)?a:null}var $o=function(){var t=function(i){return lr(ht,function(o,s,l){return o[l]=lr(s,i,{}),o},{})};Lo=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Ro=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),zo=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in ht||P.autoFetchSvg,r=lr(yc,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});jo=r.names,Do=r.unicodes,ma=Vn(P.styleDefault,{family:P.familyDefault})};oc(function(e){ma=Vn(e.styleDefault,{family:P.familyDefault})});$o();function pa(e,t){return(Lo[e]||{})[t]}function kc(e,t){return(Ro[e]||{})[t]}function ot(e,t){return(zo[e]||{})[t]}function Bo(e){return jo[e]||{prefix:null,iconName:null}}function Oc(e){var t=Do[e],n=pa("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ge(){return ma}var ha=function(){return{prefix:null,iconName:null,rest:[]}};function Vn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?K:n,a=Wt[r][e],i=Kt[r][e]||Kt[r][a],o=e in _e.styles?e:null;return i||o||null}var ui=(bn={},Q(bn,K,Object.keys(qt[K])),Q(bn,J,Object.keys(qt[J])),bn);function Xn(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},Q(t,K,"".concat(P.cssPrefix,"-").concat(K)),Q(t,J,"".concat(P.cssPrefix,"-").concat(J)),t),o=null,s=K;(e.includes(i[K])||e.some(function(c){return ui[K].includes(c)}))&&(s=K),(e.includes(i[J])||e.some(function(c){return ui[J].includes(c)}))&&(s=J);var l=e.reduce(function(c,d){var m=Ac(P.cssPrefix,d);if(ht[d]?(d=xc[s].includes(d)?Gf[s][d]:d,o=d,c.prefix=d):wc[s].indexOf(d)>-1?(o=d,c.prefix=Vn(d,{family:s})):m?c.iconName=m:d!==P.replacementClass&&d!==i[K]&&d!==i[J]&&c.rest.push(d),!a&&c.prefix&&c.iconName){var v=o==="fa"?Bo(c.iconName):{},_=ot(c.prefix,c.iconName);v.prefix&&(o=null),c.iconName=v.iconName||_||c.iconName,c.prefix=v.prefix||c.prefix,c.prefix==="far"&&!ht.far&&ht.fas&&!P.autoFetchSvg&&(c.prefix="fas")}return c},ha());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===J&&(ht.fass||P.autoFetchSvg)&&(l.prefix="fass",l.iconName=ot(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Ge()||"fas"),l}var Cc=function(){function e(){Df(this,e),this.definitions={}}return zf(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=C(C({},n.definitions[s]||{}),o[s]),Ir(s,o[s]);var l=qt[K][s];l&&Ir(l,o[s]),$o()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,d=c[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),e}(),di=[],gt={},wt={},Ec=Object.keys(wt);function Pc(e,t){var n=t.mixoutsTo;return di=e,gt={},Object.keys(wt).forEach(function(r){Ec.indexOf(r)===-1&&delete wt[r]}),di.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Mn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){gt[o]||(gt[o]=[]),gt[o].push(i[o])})}r.provides&&r.provides(wt)}),n}function Tr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=gt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function ct(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=gt[e]||[];a.forEach(function(i){i.apply(null,n)})}function $e(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return wt[e]?wt[e].apply(null,t):void 0}function Mr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Ge();if(t)return t=ot(n,t)||t,fi(Uo.definitions,n,t)||fi(_e.styles,n,t)}var Uo=new Cc,Sc=function(){P.autoReplaceSvg=!1,P.observeMutations=!1,ct("noAuto")},Ic={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ue?(ct("beforeI2svg",t),$e("pseudoElements2svg",t),$e("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;P.autoReplaceSvg===!1&&(P.autoReplaceSvg=!0),P.observeMutations=!0,hc(function(){Mc({autoReplaceSvgRoot:n}),ct("watch",t)})}},Tc={icon:function(t){if(t===null)return null;if(Mn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ot(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Vn(t[0]);return{prefix:r,iconName:ot(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(P.cssPrefix,"-"))>-1||t.match(Jf))){var a=Xn(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Ge(),iconName:ot(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Ge();return{prefix:i,iconName:ot(i,t)||t}}}},pe={noAuto:Sc,config:P,dom:Ic,parse:Tc,library:Uo,findIconDefinition:Mr,toHtml:Zt},Mc=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?q:n;(Object.keys(_e.styles).length>0||P.autoFetchSvg)&&Ue&&P.autoReplaceSvg&&pe.dom.i2svg({node:r})};function Gn(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Zt(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Ue){var r=q.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Nc(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(da(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=qn(C(C({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Fc(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(P.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:C(C({},a),{},{id:o}),children:r}]}]}function ga(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,d=e.titleId,m=e.extra,v=e.watchable,_=v===void 0?!1:v,j=r.found?r:n,M=j.width,z=j.height,A=a==="fak",O=[P.replacementClass,i?"".concat(P.cssPrefix,"-").concat(i):""].filter(function(he){return m.classes.indexOf(he)===-1}).filter(function(he){return he!==""||!!he}).concat(m.classes).join(" "),N={children:[],attributes:C(C({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:O,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(M," ").concat(z)})},S=A&&!~m.classes.indexOf("fa-fw")?{width:"".concat(M/z*16*.0625,"em")}:{};_&&(N.attributes[ft]=""),l&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(d||Xt())},children:[l]}),delete N.attributes.title);var U=C(C({},N),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:C(C({},S),m.styles)}),re=r.found&&n.found?$e("generateAbstractMask",U)||{children:[],attributes:{}}:$e("generateAbstractIcon",U)||{children:[],attributes:{}},ae=re.children,ge=re.attributes;return U.children=ae,U.attributes=ge,s?Fc(U):Nc(U)}function mi(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=C(C(C({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[ft]="");var d=C({},o.styles);da(a)&&(d.transform=uc({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=qn(d);m.length>0&&(c.style=m);var v=[];return v.push({tag:"span",attributes:c,children:[t]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function Lc(e){var t=e.content,n=e.title,r=e.extra,a=C(C(C({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=qn(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var fr=_e.styles;function Nr(e){var t=e[0],n=e[1],r=e.slice(4),a=oa(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(P.cssPrefix,"-").concat(it.GROUP)},children:[{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(it.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(it.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Rc={found:!1,width:512,height:512};function jc(e,t){!Po&&!P.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Fr(e,t){var n=t;return t==="fa"&&P.styleDefault!==null&&(t=Ge()),new Promise(function(r,a){if($e("missingIconAbstract"),n==="fa"){var i=Bo(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&fr[t]&&fr[t][e]){var o=fr[t][e];return r(Nr(o))}jc(e,t),r(C(C({},Rc),{},{icon:P.showMissingIcons&&e?$e("missingIconAbstract")||{}:{}}))})}var pi=function(){},Lr=P.measurePerformance&&cn&&cn.mark&&cn.measure?cn:{mark:pi,measure:pi},Ft='FA "6.4.2"',Dc=function(t){return Lr.mark("".concat(Ft," ").concat(t," begins")),function(){return Ho(t)}},Ho=function(t){Lr.mark("".concat(Ft," ").concat(t," ends")),Lr.measure("".concat(Ft," ").concat(t),"".concat(Ft," ").concat(t," begins"),"".concat(Ft," ").concat(t," ends"))},va={begin:Dc,end:Ho},kn=function(){};function hi(e){var t=e.getAttribute?e.getAttribute(ft):null;return typeof t=="string"}function zc(e){var t=e.getAttribute?e.getAttribute(la):null,n=e.getAttribute?e.getAttribute(fa):null;return t&&n}function $c(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(P.replacementClass)}function Bc(){if(P.autoReplaceSvg===!0)return On.replace;var e=On[P.autoReplaceSvg];return e||On.replace}function Uc(e){return q.createElementNS("http://www.w3.org/2000/svg",e)}function Hc(e){return q.createElement(e)}function Yo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Uc:Hc:n;if(typeof e=="string")return q.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Yo(o,{ceFn:r}))}),a}function Yc(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var On={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Yo(a),n)}),n.getAttribute(ft)===null&&P.keepOriginalSource){var r=q.createComment(Yc(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ua(n).indexOf(P.replacementClass))return On.replace(t);var a=new RegExp("".concat(P.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===P.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Zt(s)}).join(`
`);n.setAttribute(ft,""),n.innerHTML=o}};function gi(e){e()}function Wo(e,t){var n=typeof t=="function"?t:kn;if(e.length===0)n();else{var r=gi;P.mutateApproach===Vf&&(r=Xe.requestAnimationFrame||gi),r(function(){var a=Bc(),i=va.begin("mutate");e.map(a),i(),n()})}}var ba=!1;function Ko(){ba=!0}function Rr(){ba=!1}var Fn=null;function vi(e){if(oi&&P.observeMutations){var t=e.treeCallback,n=t===void 0?kn:t,r=e.nodeCallback,a=r===void 0?kn:r,i=e.pseudoElementsCallback,o=i===void 0?kn:i,s=e.observeMutationsRoot,l=s===void 0?q:s;Fn=new oi(function(c){if(!ba){var d=Ge();Pt(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!hi(m.addedNodes[0])&&(P.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&P.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&hi(m.target)&&~tc.indexOf(m.attributeName))if(m.attributeName==="class"&&zc(m.target)){var v=Xn(ua(m.target)),_=v.prefix,j=v.iconName;m.target.setAttribute(la,_||d),j&&m.target.setAttribute(fa,j)}else $c(m.target)&&a(m.target)})}}),Ue&&Fn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Wc(){Fn&&Fn.disconnect()}function Kc(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function qc(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Xn(ua(e));return a.prefix||(a.prefix=Ge()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=kc(a.prefix,e.innerText)||pa(a.prefix,Sr(e.innerText))),!a.iconName&&P.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Vc(e){var t=Pt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return P.autoA11y&&(n?t["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(r||Xt()):(t["aria-hidden"]="true",t.focusable="false")),t}function Xc(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Te,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function bi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=qc(e),r=n.iconName,a=n.prefix,i=n.rest,o=Vc(e),s=Tr("parseNodeAttributes",{},e),l=t.styleParser?Kc(e):[];return C({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Te,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Gc=_e.styles;function qo(e){var t=P.autoReplaceSvg==="nest"?bi(e,{styleParser:!1}):bi(e);return~t.extra.classes.indexOf(So)?$e("generateLayersText",e,t):$e("generateSvgReplacementMutation",e,t)}var Je=new Set;ca.map(function(e){Je.add("fa-".concat(e))});Object.keys(Wt[K]).map(Je.add.bind(Je));Object.keys(Wt[J]).map(Je.add.bind(Je));Je=Gt(Je);function yi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ue)return Promise.resolve();var n=q.documentElement.classList,r=function(m){return n.add("".concat(si,"-").concat(m))},a=function(m){return n.remove("".concat(si,"-").concat(m))},i=P.autoFetchSvg?Je:ca.map(function(d){return"fa-".concat(d)}).concat(Object.keys(Gc));i.includes("fa")||i.push("fa");var o=[".".concat(So,":not([").concat(ft,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(ft,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Pt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=va.begin("onTree"),c=s.reduce(function(d,m){try{var v=qo(m);v&&d.push(v)}catch(_){Po||_.name==="MissingIcon"&&console.error(_)}return d},[]);return new Promise(function(d,m){Promise.all(c).then(function(v){Wo(v,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(v){l(),m(v)})})}function Jc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;qo(e).then(function(n){n&&Wo([n],t)})}function Zc(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Mr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Mr(a||{})),e(r,C(C({},n),{},{mask:a}))}}var Qc=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Te:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,d=c===void 0?null:c,m=n.title,v=m===void 0?null:m,_=n.titleId,j=_===void 0?null:_,M=n.classes,z=M===void 0?[]:M,A=n.attributes,O=A===void 0?{}:A,N=n.styles,S=N===void 0?{}:N;if(t){var U=t.prefix,re=t.iconName,ae=t.icon;return Gn(C({type:"icon"},t),function(){return ct("beforeDOMElementCreation",{iconDefinition:t,params:n}),P.autoA11y&&(v?O["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(j||Xt()):(O["aria-hidden"]="true",O.focusable="false")),ga({icons:{main:Nr(ae),mask:l?Nr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:U,iconName:re,transform:C(C({},Te),a),symbol:o,title:v,maskId:d,titleId:j,extra:{attributes:O,styles:S,classes:z}})})}},eu={mixout:function(){return{icon:Zc(Qc)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=yi,n.nodeCallback=Jc,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?q:r,i=n.callback,o=i===void 0?function(){}:i;return yi(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,d=r.mask,m=r.maskId,v=r.extra;return new Promise(function(_,j){Promise.all([Fr(a,s),d.iconName?Fr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(M){var z=oa(M,2),A=z[0],O=z[1];_([n,ga({icons:{main:A,mask:O},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:v,watchable:!0})])}).catch(j)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=qn(s);l.length>0&&(a.style=l);var c;return da(o)&&(c=$e("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},tu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Gn({type:"layer"},function(){ct("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(P.cssPrefix,"-layers")].concat(Gt(i)).join(" ")},children:o}]})}}}},nu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return Gn({type:"counter",content:n},function(){return ct("beforeDOMElementCreation",{content:n,params:r}),Lc({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(P.cssPrefix,"-layers-counter")].concat(Gt(s))}})})}}}},ru={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Te:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,v=r.styles,_=v===void 0?{}:v;return Gn({type:"text",content:n},function(){return ct("beforeDOMElementCreation",{content:n,params:r}),mi({content:n,transform:C(C({},Te),i),title:s,extra:{attributes:m,styles:_,classes:["".concat(P.cssPrefix,"-layers-text")].concat(Gt(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Oo){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/c,l=d.height/c}return P.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,mi({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},au=new RegExp('"',"ug"),xi=[1105920,1112319];function iu(e){var t=e.replace(au,""),n=bc(t,0),r=n>=xi[0]&&n<=xi[1],a=t.length===2?t[0]===t[1]:!1;return{value:Sr(a?t[0]:t),isSecondary:r||a}}function wi(e,t){var n="".concat(qf).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Pt(e.children),o=i.filter(function(ae){return ae.getAttribute(Pr)===t})[0],s=Xe.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Zf),c=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?J:K,_=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Kt[v][l[2].toLowerCase()]:Qf[v][c],j=iu(m),M=j.value,z=j.isSecondary,A=l[0].startsWith("FontAwesome"),O=pa(_,M),N=O;if(A){var S=Oc(M);S.iconName&&S.prefix&&(O=S.iconName,_=S.prefix)}if(O&&!z&&(!o||o.getAttribute(la)!==_||o.getAttribute(fa)!==N)){e.setAttribute(n,N),o&&e.removeChild(o);var U=Xc(),re=U.extra;re.attributes[Pr]=t,Fr(O,_).then(function(ae){var ge=ga(C(C({},U),{},{icons:{main:ae,mask:ha()},prefix:_,iconName:N,extra:re,watchable:!0})),he=q.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(he,e.firstChild):e.appendChild(he),he.outerHTML=ge.map(function(Ne){return Zt(Ne)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function ou(e){return Promise.all([wi(e,"::before"),wi(e,"::after")])}function su(e){return e.parentNode!==document.head&&!~Xf.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Pr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function _i(e){if(Ue)return new Promise(function(t,n){var r=Pt(e.querySelectorAll("*")).filter(su).map(ou),a=va.begin("searchPseudoElements");Ko(),Promise.all(r).then(function(){a(),Rr(),t()}).catch(function(){a(),Rr(),n()})})}var lu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=_i,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?q:r;P.searchPseudoElements&&_i(a)}}},Ai=!1,fu={mixout:function(){return{dom:{unwatch:function(){Ko(),Ai=!0}}}},hooks:function(){return{bootstrap:function(){vi(Tr("mutationObserverCallbacks",{}))},noAuto:function(){Wc()},watch:function(n){var r=n.observeMutationsRoot;Ai?Rr():vi(Tr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},ki=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},cu={mixout:function(){return{parse:{transform:function(n){return ki(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=ki(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(d)},v={transform:"translate(".concat(o/2*-1," -256)")},_={outer:s,inner:m,path:v};return{tag:"g",attributes:C({},_.outer),children:[{tag:"g",attributes:C({},_.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:C(C({},r.icon.attributes),_.path)}]}]}}}},cr={x:0,y:0,width:"100%",height:"100%"};function Oi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function uu(e){return e.tag==="g"?e.children:[e]}var du={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Xn(a.split(" ").map(function(o){return o.trim()})):ha();return i.prefix||(i.prefix=Ge()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,d=i.icon,m=o.width,v=o.icon,_=cc({transform:l,containerWidth:m,iconWidth:c}),j={tag:"rect",attributes:C(C({},cr),{},{fill:"white"})},M=d.children?{children:d.children.map(Oi)}:{},z={tag:"g",attributes:C({},_.inner),children:[Oi(C({tag:d.tag,attributes:C(C({},d.attributes),_.path)},M))]},A={tag:"g",attributes:C({},_.outer),children:[z]},O="mask-".concat(s||Xt()),N="clip-".concat(s||Xt()),S={tag:"mask",attributes:C(C({},cr),{},{id:O,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[j,A]},U={tag:"defs",children:[{tag:"clipPath",attributes:{id:N},children:uu(v)},S]};return r.push(U,{tag:"rect",attributes:C({fill:"currentColor","clip-path":"url(#".concat(N,")"),mask:"url(#".concat(O,")")},cr)}),{children:r,attributes:a}}}},mu={provides:function(t){var n=!1;Xe.matchMedia&&(n=Xe.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:C(C({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=C(C({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:C(C({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:C(C({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:C(C({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:C(C({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:C(C({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:C(C({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:C(C({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},pu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},hu=[mc,eu,tu,nu,ru,lu,fu,cu,du,mu,pu];Pc(hu,{mixoutsTo:pe});pe.noAuto;pe.config;var gu=pe.library;pe.dom;var jr=pe.parse;pe.findIconDefinition;pe.toHtml;var vu=pe.icon;pe.layer;pe.text;pe.counter;function Ci(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Re(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ci(Object(n),!0).forEach(function(r){fe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ci(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ln(e){"@babel/helpers - typeof";return Ln=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ln(e)}function fe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function bu(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function yu(e,t){if(e==null)return{};var n=bu(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var xu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Vo={exports:{}};(function(e){(function(t){var n=function(A,O,N){if(!c(O)||m(O)||v(O)||_(O)||l(O))return O;var S,U=0,re=0;if(d(O))for(S=[],re=O.length;U<re;U++)S.push(n(A,O[U],N));else{S={};for(var ae in O)Object.prototype.hasOwnProperty.call(O,ae)&&(S[A(ae,N)]=n(A,O[ae],N))}return S},r=function(A,O){O=O||{};var N=O.separator||"_",S=O.split||/(?=[A-Z])/;return A.split(S).join(N)},a=function(A){return j(A)?A:(A=A.replace(/[\-_\s]+(.)?/g,function(O,N){return N?N.toUpperCase():""}),A.substr(0,1).toLowerCase()+A.substr(1))},i=function(A){var O=a(A);return O.substr(0,1).toUpperCase()+O.substr(1)},o=function(A,O){return r(A,O).toLowerCase()},s=Object.prototype.toString,l=function(A){return typeof A=="function"},c=function(A){return A===Object(A)},d=function(A){return s.call(A)=="[object Array]"},m=function(A){return s.call(A)=="[object Date]"},v=function(A){return s.call(A)=="[object RegExp]"},_=function(A){return s.call(A)=="[object Boolean]"},j=function(A){return A=A-0,A===A},M=function(A,O){var N=O&&"process"in O?O.process:O;return typeof N!="function"?A:function(S,U){return N(S,A,U)}},z={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(A,O){return n(M(a,O),A)},decamelizeKeys:function(A,O){return n(M(o,O),A,O)},pascalizeKeys:function(A,O){return n(M(i,O),A)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=z:t.humps=z})(xu)})(Vo);var wu=Vo.exports,_u=["class","style"];function Au(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=wu.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function ku(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Xo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Xo(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var d=e.attributes[c];switch(c){case"class":l.class=ku(d);break;case"style":l.style=Au(d);break;default:l.attrs[c]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=yu(n,_u);return of(e.tag,Re(Re(Re({},t),{},{class:a.class,style:Re(Re({},a.style),o)},a.attrs),s),r)}var Go=!1;try{Go=!0}catch{}function Ou(){if(!Go&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function ur(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?fe({},e,t):{}}function Cu(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},fe(t,"fa-".concat(e.size),e.size!==null),fe(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),fe(t,"fa-pull-".concat(e.pull),e.pull!==null),fe(t,"fa-swap-opacity",e.swapOpacity),fe(t,"fa-bounce",e.bounce),fe(t,"fa-shake",e.shake),fe(t,"fa-beat",e.beat),fe(t,"fa-fade",e.fade),fe(t,"fa-beat-fade",e.beatFade),fe(t,"fa-flash",e.flash),fe(t,"fa-spin-pulse",e.spinPulse),fe(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Ei(e){if(e&&Ln(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(jr.icon)return jr.icon(e);if(e===null)return null;if(Ln(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Eu=cl({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=nt(function(){return Ei(t.icon)}),i=nt(function(){return ur("classes",Cu(t))}),o=nt(function(){return ur("transform",typeof t.transform=="string"?jr.transform(t.transform):t.transform)}),s=nt(function(){return ur("mask",Ei(t.mask))}),l=nt(function(){return vu(a.value,Re(Re(Re(Re({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});xn(l,function(d){if(!d)return Ou("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=nt(function(){return l.value?Xo(l.value.abstract[0],{},r):null});return function(){return c.value}}}),Pu={prefix:"fas",iconName:"arrows-rotate",icon:[512,512,[128472,"refresh","sync"],"f021","M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H463.5c0 0 0 0 0 0h.4c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1V448c0 17.7 14.3 32 32 32s32-14.3 32-32V396.9l17.6 17.5 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352H176c17.7 0 32-14.3 32-32s-14.3-32-32-32H48.4c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z"]};gu.add(Pu);Sf(jf).component("font-awesome-icon",Eu).mount("#app");
