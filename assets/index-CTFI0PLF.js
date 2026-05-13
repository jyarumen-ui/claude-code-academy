const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-B_WDxTb7.js","assets/star-Do_I1CQd.js","assets/Roadmap-BVTe1bQz.js","assets/clock-DoDGVHV_.js","assets/trophy-4FdNdBFN.js","assets/Level-D-RDcIcf.js","assets/chevron-left-CwDagg8W.js","assets/Lesson-pbdGYe5L.js","assets/copy-BSRw6xVN.js","assets/circle-x-C5xK3AAF.js","assets/TermCard-DA0SA1UQ.js","assets/tag-CCRI8Br9.js","assets/SNSTools-Ds3O5ziR.js","assets/trending-up-D9VIfjY9.js","assets/PromptLibraryPage-DH997-ln.js","assets/Community-BfPGiHki.js","assets/BeginnerGuide-BIRMbohj.js","assets/StepGuide-D0yXNgH8.js","assets/terminal-qwb_xzw2.js","assets/ToolsComparison-DzZi7BbV.js","assets/SkillLibrary-BJx-Q19c.js"])))=>i.map(i=>d[i]);
function Kg(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var SP=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function If(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Vf={exports:{}},Bs={},Of={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fi=Symbol.for("react.element"),Gg=Symbol.for("react.portal"),Xg=Symbol.for("react.fragment"),Qg=Symbol.for("react.strict_mode"),Yg=Symbol.for("react.profiler"),qg=Symbol.for("react.provider"),Zg=Symbol.for("react.context"),Jg=Symbol.for("react.forward_ref"),ey=Symbol.for("react.suspense"),ty=Symbol.for("react.memo"),ny=Symbol.for("react.lazy"),Yu=Symbol.iterator;function ry(e){return e===null||typeof e!="object"?null:(e=Yu&&e[Yu]||e["@@iterator"],typeof e=="function"?e:null)}var bf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ff=Object.assign,zf={};function tr(e,t,n){this.props=e,this.context=t,this.refs=zf,this.updater=n||bf}tr.prototype.isReactComponent={};tr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};tr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Bf(){}Bf.prototype=tr.prototype;function vl(e,t,n){this.props=e,this.context=t,this.refs=zf,this.updater=n||bf}var xl=vl.prototype=new Bf;xl.constructor=vl;Ff(xl,tr.prototype);xl.isPureReactComponent=!0;var qu=Array.isArray,Uf=Object.prototype.hasOwnProperty,wl={current:null},$f={key:!0,ref:!0,__self:!0,__source:!0};function Wf(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)Uf.call(t,r)&&!$f.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:fi,type:e,key:s,ref:o,props:i,_owner:wl.current}}function iy(e,t){return{$$typeof:fi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Sl(e){return typeof e=="object"&&e!==null&&e.$$typeof===fi}function sy(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Zu=/\/+/g;function mo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?sy(""+e.key):t.toString(36)}function Ki(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case fi:case Gg:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+mo(o,0):r,qu(i)?(n="",e!=null&&(n=e.replace(Zu,"$&/")+"/"),Ki(i,t,n,"",function(u){return u})):i!=null&&(Sl(i)&&(i=iy(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Zu,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",qu(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+mo(s,a);o+=Ki(s,t,n,l,i)}else if(l=ry(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+mo(s,a++),o+=Ki(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Ei(e,t,n){if(e==null)return e;var r=[],i=0;return Ki(e,r,"","",function(s){return t.call(n,s,i++)}),r}function oy(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var we={current:null},Gi={transition:null},ay={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:Gi,ReactCurrentOwner:wl};function Hf(){throw Error("act(...) is not supported in production builds of React.")}I.Children={map:Ei,forEach:function(e,t,n){Ei(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ei(e,function(){t++}),t},toArray:function(e){return Ei(e,function(t){return t})||[]},only:function(e){if(!Sl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=tr;I.Fragment=Xg;I.Profiler=Yg;I.PureComponent=vl;I.StrictMode=Qg;I.Suspense=ey;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ay;I.act=Hf;I.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ff({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=wl.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Uf.call(t,l)&&!$f.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:fi,type:e.type,key:i,ref:s,props:r,_owner:o}};I.createContext=function(e){return e={$$typeof:Zg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:qg,_context:e},e.Consumer=e};I.createElement=Wf;I.createFactory=function(e){var t=Wf.bind(null,e);return t.type=e,t};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:Jg,render:e}};I.isValidElement=Sl;I.lazy=function(e){return{$$typeof:ny,_payload:{_status:-1,_result:e},_init:oy}};I.memo=function(e,t){return{$$typeof:ty,type:e,compare:t===void 0?null:t}};I.startTransition=function(e){var t=Gi.transition;Gi.transition={};try{e()}finally{Gi.transition=t}};I.unstable_act=Hf;I.useCallback=function(e,t){return we.current.useCallback(e,t)};I.useContext=function(e){return we.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return we.current.useDeferredValue(e)};I.useEffect=function(e,t){return we.current.useEffect(e,t)};I.useId=function(){return we.current.useId()};I.useImperativeHandle=function(e,t,n){return we.current.useImperativeHandle(e,t,n)};I.useInsertionEffect=function(e,t){return we.current.useInsertionEffect(e,t)};I.useLayoutEffect=function(e,t){return we.current.useLayoutEffect(e,t)};I.useMemo=function(e,t){return we.current.useMemo(e,t)};I.useReducer=function(e,t,n){return we.current.useReducer(e,t,n)};I.useRef=function(e){return we.current.useRef(e)};I.useState=function(e){return we.current.useState(e)};I.useSyncExternalStore=function(e,t,n){return we.current.useSyncExternalStore(e,t,n)};I.useTransition=function(){return we.current.useTransition()};I.version="18.3.1";Of.exports=I;var S=Of.exports;const Cl=If(S),ly=Kg({__proto__:null,default:Cl},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uy=S,cy=Symbol.for("react.element"),dy=Symbol.for("react.fragment"),fy=Object.prototype.hasOwnProperty,hy=uy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,py={key:!0,ref:!0,__self:!0,__source:!0};function Kf(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)fy.call(t,r)&&!py.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:cy,type:e,key:s,ref:o,props:i,_owner:hy.current}}Bs.Fragment=dy;Bs.jsx=Kf;Bs.jsxs=Kf;Vf.exports=Bs;var m=Vf.exports,ia={},Gf={exports:{}},_e={},Xf={exports:{}},Qf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,R){var _=L.length;L.push(R);e:for(;0<_;){var q=_-1>>>1,se=L[q];if(0<i(se,R))L[q]=R,L[_]=se,_=q;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var R=L[0],_=L.pop();if(_!==R){L[0]=_;e:for(var q=0,se=L.length,ki=se>>>1;q<ki;){var Qt=2*(q+1)-1,po=L[Qt],Yt=Qt+1,Pi=L[Yt];if(0>i(po,_))Yt<se&&0>i(Pi,po)?(L[q]=Pi,L[Yt]=_,q=Yt):(L[q]=po,L[Qt]=_,q=Qt);else if(Yt<se&&0>i(Pi,_))L[q]=Pi,L[Yt]=_,q=Yt;else break e}}return R}function i(L,R){var _=L.sortIndex-R.sortIndex;return _!==0?_:L.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,y=!1,v=!1,x=!1,w=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(L){for(var R=n(u);R!==null;){if(R.callback===null)r(u);else if(R.startTime<=L)r(u),R.sortIndex=R.expirationTime,t(l,R);else break;R=n(u)}}function C(L){if(x=!1,g(L),!v)if(n(l)!==null)v=!0,Ci(P);else{var R=n(u);R!==null&&ne(C,R.startTime-L)}}function P(L,R){v=!1,x&&(x=!1,p(E),E=-1),y=!0;var _=f;try{for(g(R),d=n(l);d!==null&&(!(d.expirationTime>R)||L&&!ee());){var q=d.callback;if(typeof q=="function"){d.callback=null,f=d.priorityLevel;var se=q(d.expirationTime<=R);R=e.unstable_now(),typeof se=="function"?d.callback=se:d===n(l)&&r(l),g(R)}else r(l);d=n(l)}if(d!==null)var ki=!0;else{var Qt=n(u);Qt!==null&&ne(C,Qt.startTime-R),ki=!1}return ki}finally{d=null,f=_,y=!1}}var k=!1,T=null,E=-1,D=5,M=-1;function ee(){return!(e.unstable_now()-M<D)}function xt(){if(T!==null){var L=e.unstable_now();M=L;var R=!0;try{R=T(!0,L)}finally{R?Xt():(k=!1,T=null)}}else k=!1}var Xt;if(typeof h=="function")Xt=function(){h(xt)};else if(typeof MessageChannel<"u"){var lr=new MessageChannel,Qu=lr.port2;lr.port1.onmessage=xt,Xt=function(){Qu.postMessage(null)}}else Xt=function(){w(xt,0)};function Ci(L){T=L,k||(k=!0,Xt())}function ne(L,R){E=w(function(){L(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){v||y||(v=!0,Ci(P))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(L){switch(f){case 1:case 2:case 3:var R=3;break;default:R=f}var _=f;f=R;try{return L()}finally{f=_}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,R){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var _=f;f=L;try{return R()}finally{f=_}},e.unstable_scheduleCallback=function(L,R,_){var q=e.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?q+_:q):_=q,L){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=_+se,L={id:c++,callback:R,priorityLevel:L,startTime:_,expirationTime:se,sortIndex:-1},_>q?(L.sortIndex=_,t(u,L),n(l)===null&&L===n(u)&&(x?(p(E),E=-1):x=!0,ne(C,_-q))):(L.sortIndex=se,t(l,L),v||y||(v=!0,Ci(P))),L},e.unstable_shouldYield=ee,e.unstable_wrapCallback=function(L){var R=f;return function(){var _=f;f=R;try{return L.apply(this,arguments)}finally{f=_}}}})(Qf);Xf.exports=Qf;var my=Xf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gy=S,Re=my;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Yf=new Set,Fr={};function mn(e,t){$n(e,t),$n(e+"Capture",t)}function $n(e,t){for(Fr[e]=t,e=0;e<t.length;e++)Yf.add(t[e])}var ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sa=Object.prototype.hasOwnProperty,yy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ju={},ec={};function vy(e){return sa.call(ec,e)?!0:sa.call(Ju,e)?!1:yy.test(e)?ec[e]=!0:(Ju[e]=!0,!1)}function xy(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function wy(e,t,n,r){if(t===null||typeof t>"u"||xy(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Se(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var de={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){de[e]=new Se(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];de[t]=new Se(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){de[e]=new Se(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){de[e]=new Se(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){de[e]=new Se(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){de[e]=new Se(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){de[e]=new Se(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){de[e]=new Se(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){de[e]=new Se(e,5,!1,e.toLowerCase(),null,!1,!1)});var kl=/[\-:]([a-z])/g;function Pl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(kl,Pl);de[t]=new Se(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(kl,Pl);de[t]=new Se(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(kl,Pl);de[t]=new Se(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){de[e]=new Se(e,1,!1,e.toLowerCase(),null,!1,!1)});de.xlinkHref=new Se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){de[e]=new Se(e,1,!1,e.toLowerCase(),null,!0,!0)});function El(e,t,n,r){var i=de.hasOwnProperty(t)?de[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(wy(t,n,i,r)&&(n=null),r||i===null?vy(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var vt=gy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ti=Symbol.for("react.element"),wn=Symbol.for("react.portal"),Sn=Symbol.for("react.fragment"),Tl=Symbol.for("react.strict_mode"),oa=Symbol.for("react.profiler"),qf=Symbol.for("react.provider"),Zf=Symbol.for("react.context"),jl=Symbol.for("react.forward_ref"),aa=Symbol.for("react.suspense"),la=Symbol.for("react.suspense_list"),Ll=Symbol.for("react.memo"),Ct=Symbol.for("react.lazy"),Jf=Symbol.for("react.offscreen"),tc=Symbol.iterator;function ur(e){return e===null||typeof e!="object"?null:(e=tc&&e[tc]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,go;function xr(e){if(go===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);go=t&&t[1]||""}return`
`+go+e}var yo=!1;function vo(e,t){if(!e||yo)return"";yo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{yo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?xr(e):""}function Sy(e){switch(e.tag){case 5:return xr(e.type);case 16:return xr("Lazy");case 13:return xr("Suspense");case 19:return xr("SuspenseList");case 0:case 2:case 15:return e=vo(e.type,!1),e;case 11:return e=vo(e.type.render,!1),e;case 1:return e=vo(e.type,!0),e;default:return""}}function ua(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Sn:return"Fragment";case wn:return"Portal";case oa:return"Profiler";case Tl:return"StrictMode";case aa:return"Suspense";case la:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Zf:return(e.displayName||"Context")+".Consumer";case qf:return(e._context.displayName||"Context")+".Provider";case jl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ll:return t=e.displayName||null,t!==null?t:ua(e.type)||"Memo";case Ct:t=e._payload,e=e._init;try{return ua(e(t))}catch{}}return null}function Cy(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ua(t);case 8:return t===Tl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function bt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function eh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ky(e){var t=eh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ji(e){e._valueTracker||(e._valueTracker=ky(e))}function th(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=eh(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ls(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ca(e,t){var n=t.checked;return K({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function nc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=bt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function nh(e,t){t=t.checked,t!=null&&El(e,"checked",t,!1)}function da(e,t){nh(e,t);var n=bt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?fa(e,t.type,n):t.hasOwnProperty("defaultValue")&&fa(e,t.type,bt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function rc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function fa(e,t,n){(t!=="number"||ls(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var wr=Array.isArray;function On(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+bt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ha(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return K({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ic(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(wr(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:bt(n)}}function rh(e,t){var n=bt(t.value),r=bt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function sc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ih(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ih(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Li,sh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Li=Li||document.createElement("div"),Li.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Li.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function zr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Tr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Py=["Webkit","ms","Moz","O"];Object.keys(Tr).forEach(function(e){Py.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Tr[t]=Tr[e]})});function oh(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Tr.hasOwnProperty(e)&&Tr[e]?(""+t).trim():t+"px"}function ah(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=oh(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Ey=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ma(e,t){if(t){if(Ey[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function ga(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ya=null;function Al(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var va=null,bn=null,Fn=null;function oc(e){if(e=mi(e)){if(typeof va!="function")throw Error(j(280));var t=e.stateNode;t&&(t=Ks(t),va(e.stateNode,e.type,t))}}function lh(e){bn?Fn?Fn.push(e):Fn=[e]:bn=e}function uh(){if(bn){var e=bn,t=Fn;if(Fn=bn=null,oc(e),t)for(e=0;e<t.length;e++)oc(t[e])}}function ch(e,t){return e(t)}function dh(){}var xo=!1;function fh(e,t,n){if(xo)return e(t,n);xo=!0;try{return ch(e,t,n)}finally{xo=!1,(bn!==null||Fn!==null)&&(dh(),uh())}}function Br(e,t){var n=e.stateNode;if(n===null)return null;var r=Ks(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var xa=!1;if(ht)try{var cr={};Object.defineProperty(cr,"passive",{get:function(){xa=!0}}),window.addEventListener("test",cr,cr),window.removeEventListener("test",cr,cr)}catch{xa=!1}function Ty(e,t,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var jr=!1,us=null,cs=!1,wa=null,jy={onError:function(e){jr=!0,us=e}};function Ly(e,t,n,r,i,s,o,a,l){jr=!1,us=null,Ty.apply(jy,arguments)}function Ay(e,t,n,r,i,s,o,a,l){if(Ly.apply(this,arguments),jr){if(jr){var u=us;jr=!1,us=null}else throw Error(j(198));cs||(cs=!0,wa=u)}}function gn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function hh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ac(e){if(gn(e)!==e)throw Error(j(188))}function My(e){var t=e.alternate;if(!t){if(t=gn(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return ac(i),e;if(s===r)return ac(i),t;s=s.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function ph(e){return e=My(e),e!==null?mh(e):null}function mh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=mh(e);if(t!==null)return t;e=e.sibling}return null}var gh=Re.unstable_scheduleCallback,lc=Re.unstable_cancelCallback,Ny=Re.unstable_shouldYield,Ry=Re.unstable_requestPaint,J=Re.unstable_now,Dy=Re.unstable_getCurrentPriorityLevel,Ml=Re.unstable_ImmediatePriority,yh=Re.unstable_UserBlockingPriority,ds=Re.unstable_NormalPriority,_y=Re.unstable_LowPriority,vh=Re.unstable_IdlePriority,Us=null,nt=null;function Iy(e){if(nt&&typeof nt.onCommitFiberRoot=="function")try{nt.onCommitFiberRoot(Us,e,void 0,(e.current.flags&128)===128)}catch{}}var Qe=Math.clz32?Math.clz32:by,Vy=Math.log,Oy=Math.LN2;function by(e){return e>>>=0,e===0?32:31-(Vy(e)/Oy|0)|0}var Ai=64,Mi=4194304;function Sr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function fs(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Sr(a):(s&=o,s!==0&&(r=Sr(s)))}else o=n&~i,o!==0?r=Sr(o):s!==0&&(r=Sr(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Qe(t),i=1<<n,r|=e[n],t&=~i;return r}function Fy(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zy(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-Qe(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=Fy(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function Sa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function xh(){var e=Ai;return Ai<<=1,!(Ai&4194240)&&(Ai=64),e}function wo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function hi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Qe(t),e[t]=n}function By(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Qe(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function Nl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Qe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var O=0;function wh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Sh,Rl,Ch,kh,Ph,Ca=!1,Ni=[],At=null,Mt=null,Nt=null,Ur=new Map,$r=new Map,Pt=[],Uy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function uc(e,t){switch(e){case"focusin":case"focusout":At=null;break;case"dragenter":case"dragleave":Mt=null;break;case"mouseover":case"mouseout":Nt=null;break;case"pointerover":case"pointerout":Ur.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":$r.delete(t.pointerId)}}function dr(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=mi(t),t!==null&&Rl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function $y(e,t,n,r,i){switch(t){case"focusin":return At=dr(At,e,t,n,r,i),!0;case"dragenter":return Mt=dr(Mt,e,t,n,r,i),!0;case"mouseover":return Nt=dr(Nt,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ur.set(s,dr(Ur.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,$r.set(s,dr($r.get(s)||null,e,t,n,r,i)),!0}return!1}function Eh(e){var t=nn(e.target);if(t!==null){var n=gn(t);if(n!==null){if(t=n.tag,t===13){if(t=hh(n),t!==null){e.blockedOn=t,Ph(e.priority,function(){Ch(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ka(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ya=r,n.target.dispatchEvent(r),ya=null}else return t=mi(n),t!==null&&Rl(t),e.blockedOn=n,!1;t.shift()}return!0}function cc(e,t,n){Xi(e)&&n.delete(t)}function Wy(){Ca=!1,At!==null&&Xi(At)&&(At=null),Mt!==null&&Xi(Mt)&&(Mt=null),Nt!==null&&Xi(Nt)&&(Nt=null),Ur.forEach(cc),$r.forEach(cc)}function fr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ca||(Ca=!0,Re.unstable_scheduleCallback(Re.unstable_NormalPriority,Wy)))}function Wr(e){function t(i){return fr(i,e)}if(0<Ni.length){fr(Ni[0],e);for(var n=1;n<Ni.length;n++){var r=Ni[n];r.blockedOn===e&&(r.blockedOn=null)}}for(At!==null&&fr(At,e),Mt!==null&&fr(Mt,e),Nt!==null&&fr(Nt,e),Ur.forEach(t),$r.forEach(t),n=0;n<Pt.length;n++)r=Pt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Pt.length&&(n=Pt[0],n.blockedOn===null);)Eh(n),n.blockedOn===null&&Pt.shift()}var zn=vt.ReactCurrentBatchConfig,hs=!0;function Hy(e,t,n,r){var i=O,s=zn.transition;zn.transition=null;try{O=1,Dl(e,t,n,r)}finally{O=i,zn.transition=s}}function Ky(e,t,n,r){var i=O,s=zn.transition;zn.transition=null;try{O=4,Dl(e,t,n,r)}finally{O=i,zn.transition=s}}function Dl(e,t,n,r){if(hs){var i=ka(e,t,n,r);if(i===null)Mo(e,t,r,ps,n),uc(e,r);else if($y(i,e,t,n,r))r.stopPropagation();else if(uc(e,r),t&4&&-1<Uy.indexOf(e)){for(;i!==null;){var s=mi(i);if(s!==null&&Sh(s),s=ka(e,t,n,r),s===null&&Mo(e,t,r,ps,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Mo(e,t,r,null,n)}}var ps=null;function ka(e,t,n,r){if(ps=null,e=Al(r),e=nn(e),e!==null)if(t=gn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=hh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ps=e,null}function Th(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Dy()){case Ml:return 1;case yh:return 4;case ds:case _y:return 16;case vh:return 536870912;default:return 16}default:return 16}}var Tt=null,_l=null,Qi=null;function jh(){if(Qi)return Qi;var e,t=_l,n=t.length,r,i="value"in Tt?Tt.value:Tt.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return Qi=i.slice(e,1<r?1-r:void 0)}function Yi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ri(){return!0}function dc(){return!1}function Ie(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ri:dc,this.isPropagationStopped=dc,this}return K(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ri)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ri)},persist:function(){},isPersistent:Ri}),t}var nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Il=Ie(nr),pi=K({},nr,{view:0,detail:0}),Gy=Ie(pi),So,Co,hr,$s=K({},pi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hr&&(hr&&e.type==="mousemove"?(So=e.screenX-hr.screenX,Co=e.screenY-hr.screenY):Co=So=0,hr=e),So)},movementY:function(e){return"movementY"in e?e.movementY:Co}}),fc=Ie($s),Xy=K({},$s,{dataTransfer:0}),Qy=Ie(Xy),Yy=K({},pi,{relatedTarget:0}),ko=Ie(Yy),qy=K({},nr,{animationName:0,elapsedTime:0,pseudoElement:0}),Zy=Ie(qy),Jy=K({},nr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),e0=Ie(Jy),t0=K({},nr,{data:0}),hc=Ie(t0),n0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},r0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},i0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function s0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=i0[e])?!!t[e]:!1}function Vl(){return s0}var o0=K({},pi,{key:function(e){if(e.key){var t=n0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Yi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?r0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vl,charCode:function(e){return e.type==="keypress"?Yi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Yi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),a0=Ie(o0),l0=K({},$s,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pc=Ie(l0),u0=K({},pi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vl}),c0=Ie(u0),d0=K({},nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),f0=Ie(d0),h0=K({},$s,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),p0=Ie(h0),m0=[9,13,27,32],Ol=ht&&"CompositionEvent"in window,Lr=null;ht&&"documentMode"in document&&(Lr=document.documentMode);var g0=ht&&"TextEvent"in window&&!Lr,Lh=ht&&(!Ol||Lr&&8<Lr&&11>=Lr),mc=" ",gc=!1;function Ah(e,t){switch(e){case"keyup":return m0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Cn=!1;function y0(e,t){switch(e){case"compositionend":return Mh(t);case"keypress":return t.which!==32?null:(gc=!0,mc);case"textInput":return e=t.data,e===mc&&gc?null:e;default:return null}}function v0(e,t){if(Cn)return e==="compositionend"||!Ol&&Ah(e,t)?(e=jh(),Qi=_l=Tt=null,Cn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Lh&&t.locale!=="ko"?null:t.data;default:return null}}var x0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!x0[e.type]:t==="textarea"}function Nh(e,t,n,r){lh(r),t=ms(t,"onChange"),0<t.length&&(n=new Il("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ar=null,Hr=null;function w0(e){Uh(e,0)}function Ws(e){var t=En(e);if(th(t))return e}function S0(e,t){if(e==="change")return t}var Rh=!1;if(ht){var Po;if(ht){var Eo="oninput"in document;if(!Eo){var vc=document.createElement("div");vc.setAttribute("oninput","return;"),Eo=typeof vc.oninput=="function"}Po=Eo}else Po=!1;Rh=Po&&(!document.documentMode||9<document.documentMode)}function xc(){Ar&&(Ar.detachEvent("onpropertychange",Dh),Hr=Ar=null)}function Dh(e){if(e.propertyName==="value"&&Ws(Hr)){var t=[];Nh(t,Hr,e,Al(e)),fh(w0,t)}}function C0(e,t,n){e==="focusin"?(xc(),Ar=t,Hr=n,Ar.attachEvent("onpropertychange",Dh)):e==="focusout"&&xc()}function k0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ws(Hr)}function P0(e,t){if(e==="click")return Ws(t)}function E0(e,t){if(e==="input"||e==="change")return Ws(t)}function T0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var qe=typeof Object.is=="function"?Object.is:T0;function Kr(e,t){if(qe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!sa.call(t,i)||!qe(e[i],t[i]))return!1}return!0}function wc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Sc(e,t){var n=wc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=wc(n)}}function _h(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?_h(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ih(){for(var e=window,t=ls();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ls(e.document)}return t}function bl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function j0(e){var t=Ih(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&_h(n.ownerDocument.documentElement,n)){if(r!==null&&bl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Sc(n,s);var o=Sc(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var L0=ht&&"documentMode"in document&&11>=document.documentMode,kn=null,Pa=null,Mr=null,Ea=!1;function Cc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ea||kn==null||kn!==ls(r)||(r=kn,"selectionStart"in r&&bl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Mr&&Kr(Mr,r)||(Mr=r,r=ms(Pa,"onSelect"),0<r.length&&(t=new Il("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=kn)))}function Di(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Pn={animationend:Di("Animation","AnimationEnd"),animationiteration:Di("Animation","AnimationIteration"),animationstart:Di("Animation","AnimationStart"),transitionend:Di("Transition","TransitionEnd")},To={},Vh={};ht&&(Vh=document.createElement("div").style,"AnimationEvent"in window||(delete Pn.animationend.animation,delete Pn.animationiteration.animation,delete Pn.animationstart.animation),"TransitionEvent"in window||delete Pn.transitionend.transition);function Hs(e){if(To[e])return To[e];if(!Pn[e])return e;var t=Pn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Vh)return To[e]=t[n];return e}var Oh=Hs("animationend"),bh=Hs("animationiteration"),Fh=Hs("animationstart"),zh=Hs("transitionend"),Bh=new Map,kc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ut(e,t){Bh.set(e,t),mn(t,[e])}for(var jo=0;jo<kc.length;jo++){var Lo=kc[jo],A0=Lo.toLowerCase(),M0=Lo[0].toUpperCase()+Lo.slice(1);Ut(A0,"on"+M0)}Ut(Oh,"onAnimationEnd");Ut(bh,"onAnimationIteration");Ut(Fh,"onAnimationStart");Ut("dblclick","onDoubleClick");Ut("focusin","onFocus");Ut("focusout","onBlur");Ut(zh,"onTransitionEnd");$n("onMouseEnter",["mouseout","mouseover"]);$n("onMouseLeave",["mouseout","mouseover"]);$n("onPointerEnter",["pointerout","pointerover"]);$n("onPointerLeave",["pointerout","pointerover"]);mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mn("onBeforeInput",["compositionend","keypress","textInput","paste"]);mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Cr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),N0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Cr));function Pc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ay(r,t,void 0,e),e.currentTarget=null}function Uh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Pc(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Pc(i,a,u),s=l}}}if(cs)throw e=wa,cs=!1,wa=null,e}function F(e,t){var n=t[Ma];n===void 0&&(n=t[Ma]=new Set);var r=e+"__bubble";n.has(r)||($h(t,e,2,!1),n.add(r))}function Ao(e,t,n){var r=0;t&&(r|=4),$h(n,e,r,t)}var _i="_reactListening"+Math.random().toString(36).slice(2);function Gr(e){if(!e[_i]){e[_i]=!0,Yf.forEach(function(n){n!=="selectionchange"&&(N0.has(n)||Ao(n,!1,e),Ao(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[_i]||(t[_i]=!0,Ao("selectionchange",!1,t))}}function $h(e,t,n,r){switch(Th(t)){case 1:var i=Hy;break;case 4:i=Ky;break;default:i=Dl}n=i.bind(null,t,n,e),i=void 0,!xa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Mo(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=nn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}fh(function(){var u=s,c=Al(n),d=[];e:{var f=Bh.get(e);if(f!==void 0){var y=Il,v=e;switch(e){case"keypress":if(Yi(n)===0)break e;case"keydown":case"keyup":y=a0;break;case"focusin":v="focus",y=ko;break;case"focusout":v="blur",y=ko;break;case"beforeblur":case"afterblur":y=ko;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=fc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Qy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=c0;break;case Oh:case bh:case Fh:y=Zy;break;case zh:y=f0;break;case"scroll":y=Gy;break;case"wheel":y=p0;break;case"copy":case"cut":case"paste":y=e0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=pc}var x=(t&4)!==0,w=!x&&e==="scroll",p=x?f!==null?f+"Capture":null:f;x=[];for(var h=u,g;h!==null;){g=h;var C=g.stateNode;if(g.tag===5&&C!==null&&(g=C,p!==null&&(C=Br(h,p),C!=null&&x.push(Xr(h,C,g)))),w)break;h=h.return}0<x.length&&(f=new y(f,v,null,n,c),d.push({event:f,listeners:x}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",f&&n!==ya&&(v=n.relatedTarget||n.fromElement)&&(nn(v)||v[pt]))break e;if((y||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,y?(v=n.relatedTarget||n.toElement,y=u,v=v?nn(v):null,v!==null&&(w=gn(v),v!==w||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=u),y!==v)){if(x=fc,C="onMouseLeave",p="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(x=pc,C="onPointerLeave",p="onPointerEnter",h="pointer"),w=y==null?f:En(y),g=v==null?f:En(v),f=new x(C,h+"leave",y,n,c),f.target=w,f.relatedTarget=g,C=null,nn(c)===u&&(x=new x(p,h+"enter",v,n,c),x.target=g,x.relatedTarget=w,C=x),w=C,y&&v)t:{for(x=y,p=v,h=0,g=x;g;g=vn(g))h++;for(g=0,C=p;C;C=vn(C))g++;for(;0<h-g;)x=vn(x),h--;for(;0<g-h;)p=vn(p),g--;for(;h--;){if(x===p||p!==null&&x===p.alternate)break t;x=vn(x),p=vn(p)}x=null}else x=null;y!==null&&Ec(d,f,y,x,!1),v!==null&&w!==null&&Ec(d,w,v,x,!0)}}e:{if(f=u?En(u):window,y=f.nodeName&&f.nodeName.toLowerCase(),y==="select"||y==="input"&&f.type==="file")var P=S0;else if(yc(f))if(Rh)P=E0;else{P=k0;var k=C0}else(y=f.nodeName)&&y.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(P=P0);if(P&&(P=P(e,u))){Nh(d,P,n,c);break e}k&&k(e,f,u),e==="focusout"&&(k=f._wrapperState)&&k.controlled&&f.type==="number"&&fa(f,"number",f.value)}switch(k=u?En(u):window,e){case"focusin":(yc(k)||k.contentEditable==="true")&&(kn=k,Pa=u,Mr=null);break;case"focusout":Mr=Pa=kn=null;break;case"mousedown":Ea=!0;break;case"contextmenu":case"mouseup":case"dragend":Ea=!1,Cc(d,n,c);break;case"selectionchange":if(L0)break;case"keydown":case"keyup":Cc(d,n,c)}var T;if(Ol)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Cn?Ah(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(Lh&&n.locale!=="ko"&&(Cn||E!=="onCompositionStart"?E==="onCompositionEnd"&&Cn&&(T=jh()):(Tt=c,_l="value"in Tt?Tt.value:Tt.textContent,Cn=!0)),k=ms(u,E),0<k.length&&(E=new hc(E,e,null,n,c),d.push({event:E,listeners:k}),T?E.data=T:(T=Mh(n),T!==null&&(E.data=T)))),(T=g0?y0(e,n):v0(e,n))&&(u=ms(u,"onBeforeInput"),0<u.length&&(c=new hc("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=T))}Uh(d,t)})}function Xr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ms(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Br(e,n),s!=null&&r.unshift(Xr(e,s,i)),s=Br(e,t),s!=null&&r.push(Xr(e,s,i))),e=e.return}return r}function vn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ec(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Br(n,s),l!=null&&o.unshift(Xr(n,l,a))):i||(l=Br(n,s),l!=null&&o.push(Xr(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var R0=/\r\n?/g,D0=/\u0000|\uFFFD/g;function Tc(e){return(typeof e=="string"?e:""+e).replace(R0,`
`).replace(D0,"")}function Ii(e,t,n){if(t=Tc(t),Tc(e)!==t&&n)throw Error(j(425))}function gs(){}var Ta=null,ja=null;function La(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Aa=typeof setTimeout=="function"?setTimeout:void 0,_0=typeof clearTimeout=="function"?clearTimeout:void 0,jc=typeof Promise=="function"?Promise:void 0,I0=typeof queueMicrotask=="function"?queueMicrotask:typeof jc<"u"?function(e){return jc.resolve(null).then(e).catch(V0)}:Aa;function V0(e){setTimeout(function(){throw e})}function No(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Wr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Wr(t)}function Rt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Lc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var rr=Math.random().toString(36).slice(2),tt="__reactFiber$"+rr,Qr="__reactProps$"+rr,pt="__reactContainer$"+rr,Ma="__reactEvents$"+rr,O0="__reactListeners$"+rr,b0="__reactHandles$"+rr;function nn(e){var t=e[tt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[pt]||n[tt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Lc(e);e!==null;){if(n=e[tt])return n;e=Lc(e)}return t}e=n,n=e.parentNode}return null}function mi(e){return e=e[tt]||e[pt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function En(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function Ks(e){return e[Qr]||null}var Na=[],Tn=-1;function $t(e){return{current:e}}function z(e){0>Tn||(e.current=Na[Tn],Na[Tn]=null,Tn--)}function b(e,t){Tn++,Na[Tn]=e.current,e.current=t}var Ft={},ye=$t(Ft),Pe=$t(!1),cn=Ft;function Wn(e,t){var n=e.type.contextTypes;if(!n)return Ft;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ee(e){return e=e.childContextTypes,e!=null}function ys(){z(Pe),z(ye)}function Ac(e,t,n){if(ye.current!==Ft)throw Error(j(168));b(ye,t),b(Pe,n)}function Wh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(j(108,Cy(e)||"Unknown",i));return K({},n,r)}function vs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ft,cn=ye.current,b(ye,e),b(Pe,Pe.current),!0}function Mc(e,t,n){var r=e.stateNode;if(!r)throw Error(j(169));n?(e=Wh(e,t,cn),r.__reactInternalMemoizedMergedChildContext=e,z(Pe),z(ye),b(ye,e)):z(Pe),b(Pe,n)}var at=null,Gs=!1,Ro=!1;function Hh(e){at===null?at=[e]:at.push(e)}function F0(e){Gs=!0,Hh(e)}function Wt(){if(!Ro&&at!==null){Ro=!0;var e=0,t=O;try{var n=at;for(O=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}at=null,Gs=!1}catch(i){throw at!==null&&(at=at.slice(e+1)),gh(Ml,Wt),i}finally{O=t,Ro=!1}}return null}var jn=[],Ln=0,xs=null,ws=0,be=[],Fe=0,dn=null,lt=1,ut="";function Zt(e,t){jn[Ln++]=ws,jn[Ln++]=xs,xs=e,ws=t}function Kh(e,t,n){be[Fe++]=lt,be[Fe++]=ut,be[Fe++]=dn,dn=e;var r=lt;e=ut;var i=32-Qe(r)-1;r&=~(1<<i),n+=1;var s=32-Qe(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,lt=1<<32-Qe(t)+i|n<<i|r,ut=s+e}else lt=1<<s|n<<i|r,ut=e}function Fl(e){e.return!==null&&(Zt(e,1),Kh(e,1,0))}function zl(e){for(;e===xs;)xs=jn[--Ln],jn[Ln]=null,ws=jn[--Ln],jn[Ln]=null;for(;e===dn;)dn=be[--Fe],be[Fe]=null,ut=be[--Fe],be[Fe]=null,lt=be[--Fe],be[Fe]=null}var Me=null,Ae=null,U=!1,Xe=null;function Gh(e,t){var n=ze(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Nc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Me=e,Ae=Rt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Me=e,Ae=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=dn!==null?{id:lt,overflow:ut}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ze(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Me=e,Ae=null,!0):!1;default:return!1}}function Ra(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Da(e){if(U){var t=Ae;if(t){var n=t;if(!Nc(e,t)){if(Ra(e))throw Error(j(418));t=Rt(n.nextSibling);var r=Me;t&&Nc(e,t)?Gh(r,n):(e.flags=e.flags&-4097|2,U=!1,Me=e)}}else{if(Ra(e))throw Error(j(418));e.flags=e.flags&-4097|2,U=!1,Me=e}}}function Rc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Me=e}function Vi(e){if(e!==Me)return!1;if(!U)return Rc(e),U=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!La(e.type,e.memoizedProps)),t&&(t=Ae)){if(Ra(e))throw Xh(),Error(j(418));for(;t;)Gh(e,t),t=Rt(t.nextSibling)}if(Rc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ae=Rt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ae=null}}else Ae=Me?Rt(e.stateNode.nextSibling):null;return!0}function Xh(){for(var e=Ae;e;)e=Rt(e.nextSibling)}function Hn(){Ae=Me=null,U=!1}function Bl(e){Xe===null?Xe=[e]:Xe.push(e)}var z0=vt.ReactCurrentBatchConfig;function pr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function Oi(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Dc(e){var t=e._init;return t(e._payload)}function Qh(e){function t(p,h){if(e){var g=p.deletions;g===null?(p.deletions=[h],p.flags|=16):g.push(h)}}function n(p,h){if(!e)return null;for(;h!==null;)t(p,h),h=h.sibling;return null}function r(p,h){for(p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function i(p,h){return p=Vt(p,h),p.index=0,p.sibling=null,p}function s(p,h,g){return p.index=g,e?(g=p.alternate,g!==null?(g=g.index,g<h?(p.flags|=2,h):g):(p.flags|=2,h)):(p.flags|=1048576,h)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,h,g,C){return h===null||h.tag!==6?(h=Fo(g,p.mode,C),h.return=p,h):(h=i(h,g),h.return=p,h)}function l(p,h,g,C){var P=g.type;return P===Sn?c(p,h,g.props.children,C,g.key):h!==null&&(h.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Ct&&Dc(P)===h.type)?(C=i(h,g.props),C.ref=pr(p,h,g),C.return=p,C):(C=rs(g.type,g.key,g.props,null,p.mode,C),C.ref=pr(p,h,g),C.return=p,C)}function u(p,h,g,C){return h===null||h.tag!==4||h.stateNode.containerInfo!==g.containerInfo||h.stateNode.implementation!==g.implementation?(h=zo(g,p.mode,C),h.return=p,h):(h=i(h,g.children||[]),h.return=p,h)}function c(p,h,g,C,P){return h===null||h.tag!==7?(h=ln(g,p.mode,C,P),h.return=p,h):(h=i(h,g),h.return=p,h)}function d(p,h,g){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Fo(""+h,p.mode,g),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ti:return g=rs(h.type,h.key,h.props,null,p.mode,g),g.ref=pr(p,null,h),g.return=p,g;case wn:return h=zo(h,p.mode,g),h.return=p,h;case Ct:var C=h._init;return d(p,C(h._payload),g)}if(wr(h)||ur(h))return h=ln(h,p.mode,g,null),h.return=p,h;Oi(p,h)}return null}function f(p,h,g,C){var P=h!==null?h.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return P!==null?null:a(p,h,""+g,C);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ti:return g.key===P?l(p,h,g,C):null;case wn:return g.key===P?u(p,h,g,C):null;case Ct:return P=g._init,f(p,h,P(g._payload),C)}if(wr(g)||ur(g))return P!==null?null:c(p,h,g,C,null);Oi(p,g)}return null}function y(p,h,g,C,P){if(typeof C=="string"&&C!==""||typeof C=="number")return p=p.get(g)||null,a(h,p,""+C,P);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Ti:return p=p.get(C.key===null?g:C.key)||null,l(h,p,C,P);case wn:return p=p.get(C.key===null?g:C.key)||null,u(h,p,C,P);case Ct:var k=C._init;return y(p,h,g,k(C._payload),P)}if(wr(C)||ur(C))return p=p.get(g)||null,c(h,p,C,P,null);Oi(h,C)}return null}function v(p,h,g,C){for(var P=null,k=null,T=h,E=h=0,D=null;T!==null&&E<g.length;E++){T.index>E?(D=T,T=null):D=T.sibling;var M=f(p,T,g[E],C);if(M===null){T===null&&(T=D);break}e&&T&&M.alternate===null&&t(p,T),h=s(M,h,E),k===null?P=M:k.sibling=M,k=M,T=D}if(E===g.length)return n(p,T),U&&Zt(p,E),P;if(T===null){for(;E<g.length;E++)T=d(p,g[E],C),T!==null&&(h=s(T,h,E),k===null?P=T:k.sibling=T,k=T);return U&&Zt(p,E),P}for(T=r(p,T);E<g.length;E++)D=y(T,p,E,g[E],C),D!==null&&(e&&D.alternate!==null&&T.delete(D.key===null?E:D.key),h=s(D,h,E),k===null?P=D:k.sibling=D,k=D);return e&&T.forEach(function(ee){return t(p,ee)}),U&&Zt(p,E),P}function x(p,h,g,C){var P=ur(g);if(typeof P!="function")throw Error(j(150));if(g=P.call(g),g==null)throw Error(j(151));for(var k=P=null,T=h,E=h=0,D=null,M=g.next();T!==null&&!M.done;E++,M=g.next()){T.index>E?(D=T,T=null):D=T.sibling;var ee=f(p,T,M.value,C);if(ee===null){T===null&&(T=D);break}e&&T&&ee.alternate===null&&t(p,T),h=s(ee,h,E),k===null?P=ee:k.sibling=ee,k=ee,T=D}if(M.done)return n(p,T),U&&Zt(p,E),P;if(T===null){for(;!M.done;E++,M=g.next())M=d(p,M.value,C),M!==null&&(h=s(M,h,E),k===null?P=M:k.sibling=M,k=M);return U&&Zt(p,E),P}for(T=r(p,T);!M.done;E++,M=g.next())M=y(T,p,E,M.value,C),M!==null&&(e&&M.alternate!==null&&T.delete(M.key===null?E:M.key),h=s(M,h,E),k===null?P=M:k.sibling=M,k=M);return e&&T.forEach(function(xt){return t(p,xt)}),U&&Zt(p,E),P}function w(p,h,g,C){if(typeof g=="object"&&g!==null&&g.type===Sn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ti:e:{for(var P=g.key,k=h;k!==null;){if(k.key===P){if(P=g.type,P===Sn){if(k.tag===7){n(p,k.sibling),h=i(k,g.props.children),h.return=p,p=h;break e}}else if(k.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Ct&&Dc(P)===k.type){n(p,k.sibling),h=i(k,g.props),h.ref=pr(p,k,g),h.return=p,p=h;break e}n(p,k);break}else t(p,k);k=k.sibling}g.type===Sn?(h=ln(g.props.children,p.mode,C,g.key),h.return=p,p=h):(C=rs(g.type,g.key,g.props,null,p.mode,C),C.ref=pr(p,h,g),C.return=p,p=C)}return o(p);case wn:e:{for(k=g.key;h!==null;){if(h.key===k)if(h.tag===4&&h.stateNode.containerInfo===g.containerInfo&&h.stateNode.implementation===g.implementation){n(p,h.sibling),h=i(h,g.children||[]),h.return=p,p=h;break e}else{n(p,h);break}else t(p,h);h=h.sibling}h=zo(g,p.mode,C),h.return=p,p=h}return o(p);case Ct:return k=g._init,w(p,h,k(g._payload),C)}if(wr(g))return v(p,h,g,C);if(ur(g))return x(p,h,g,C);Oi(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,h!==null&&h.tag===6?(n(p,h.sibling),h=i(h,g),h.return=p,p=h):(n(p,h),h=Fo(g,p.mode,C),h.return=p,p=h),o(p)):n(p,h)}return w}var Kn=Qh(!0),Yh=Qh(!1),Ss=$t(null),Cs=null,An=null,Ul=null;function $l(){Ul=An=Cs=null}function Wl(e){var t=Ss.current;z(Ss),e._currentValue=t}function _a(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Bn(e,t){Cs=e,Ul=An=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ke=!0),e.firstContext=null)}function Ue(e){var t=e._currentValue;if(Ul!==e)if(e={context:e,memoizedValue:t,next:null},An===null){if(Cs===null)throw Error(j(308));An=e,Cs.dependencies={lanes:0,firstContext:e}}else An=An.next=e;return t}var rn=null;function Hl(e){rn===null?rn=[e]:rn.push(e)}function qh(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Hl(t)):(n.next=i.next,i.next=n),t.interleaved=n,mt(e,r)}function mt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var kt=!1;function Kl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ct(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Dt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,V&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,mt(e,n)}return i=r.interleaved,i===null?(t.next=t,Hl(r)):(t.next=i.next,i.next=t),r.interleaved=t,mt(e,n)}function qi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Nl(e,n)}}function _c(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ks(e,t,n,r){var i=e.updateQueue;kt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,y=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,x=a;switch(f=t,y=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){d=v.call(y,d,f);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,f=typeof v=="function"?v.call(y,d,f):v,f==null)break e;d=K({},d,f);break e;case 2:kt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else y={eventTime:y,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=y,l=d):c=c.next=y,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);hn|=o,e.lanes=o,e.memoizedState=d}}function Ic(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var gi={},rt=$t(gi),Yr=$t(gi),qr=$t(gi);function sn(e){if(e===gi)throw Error(j(174));return e}function Gl(e,t){switch(b(qr,t),b(Yr,e),b(rt,gi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:pa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=pa(t,e)}z(rt),b(rt,t)}function Gn(){z(rt),z(Yr),z(qr)}function Jh(e){sn(qr.current);var t=sn(rt.current),n=pa(t,e.type);t!==n&&(b(Yr,e),b(rt,n))}function Xl(e){Yr.current===e&&(z(rt),z(Yr))}var $=$t(0);function Ps(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Do=[];function Ql(){for(var e=0;e<Do.length;e++)Do[e]._workInProgressVersionPrimary=null;Do.length=0}var Zi=vt.ReactCurrentDispatcher,_o=vt.ReactCurrentBatchConfig,fn=0,H=null,re=null,oe=null,Es=!1,Nr=!1,Zr=0,B0=0;function fe(){throw Error(j(321))}function Yl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!qe(e[n],t[n]))return!1;return!0}function ql(e,t,n,r,i,s){if(fn=s,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Zi.current=e===null||e.memoizedState===null?H0:K0,e=n(r,i),Nr){s=0;do{if(Nr=!1,Zr=0,25<=s)throw Error(j(301));s+=1,oe=re=null,t.updateQueue=null,Zi.current=G0,e=n(r,i)}while(Nr)}if(Zi.current=Ts,t=re!==null&&re.next!==null,fn=0,oe=re=H=null,Es=!1,t)throw Error(j(300));return e}function Zl(){var e=Zr!==0;return Zr=0,e}function et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return oe===null?H.memoizedState=oe=e:oe=oe.next=e,oe}function $e(){if(re===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=re.next;var t=oe===null?H.memoizedState:oe.next;if(t!==null)oe=t,re=e;else{if(e===null)throw Error(j(310));re=e,e={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},oe===null?H.memoizedState=oe=e:oe=oe.next=e}return oe}function Jr(e,t){return typeof t=="function"?t(e):t}function Io(e){var t=$e(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=re,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((fn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,H.lanes|=c,hn|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,qe(r,t.memoizedState)||(ke=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,H.lanes|=s,hn|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Vo(e){var t=$e(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);qe(s,t.memoizedState)||(ke=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function ep(){}function tp(e,t){var n=H,r=$e(),i=t(),s=!qe(r.memoizedState,i);if(s&&(r.memoizedState=i,ke=!0),r=r.queue,Jl(ip.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||oe!==null&&oe.memoizedState.tag&1){if(n.flags|=2048,ei(9,rp.bind(null,n,r,i,t),void 0,null),ae===null)throw Error(j(349));fn&30||np(n,t,i)}return i}function np(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function rp(e,t,n,r){t.value=n,t.getSnapshot=r,sp(t)&&op(e)}function ip(e,t,n){return n(function(){sp(t)&&op(e)})}function sp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!qe(e,n)}catch{return!0}}function op(e){var t=mt(e,1);t!==null&&Ye(t,e,1,-1)}function Vc(e){var t=et();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Jr,lastRenderedState:e},t.queue=e,e=e.dispatch=W0.bind(null,H,e),[t.memoizedState,e]}function ei(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ap(){return $e().memoizedState}function Ji(e,t,n,r){var i=et();H.flags|=e,i.memoizedState=ei(1|t,n,void 0,r===void 0?null:r)}function Xs(e,t,n,r){var i=$e();r=r===void 0?null:r;var s=void 0;if(re!==null){var o=re.memoizedState;if(s=o.destroy,r!==null&&Yl(r,o.deps)){i.memoizedState=ei(t,n,s,r);return}}H.flags|=e,i.memoizedState=ei(1|t,n,s,r)}function Oc(e,t){return Ji(8390656,8,e,t)}function Jl(e,t){return Xs(2048,8,e,t)}function lp(e,t){return Xs(4,2,e,t)}function up(e,t){return Xs(4,4,e,t)}function cp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function dp(e,t,n){return n=n!=null?n.concat([e]):null,Xs(4,4,cp.bind(null,t,e),n)}function eu(){}function fp(e,t){var n=$e();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Yl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function hp(e,t){var n=$e();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Yl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function pp(e,t,n){return fn&21?(qe(n,t)||(n=xh(),H.lanes|=n,hn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ke=!0),e.memoizedState=n)}function U0(e,t){var n=O;O=n!==0&&4>n?n:4,e(!0);var r=_o.transition;_o.transition={};try{e(!1),t()}finally{O=n,_o.transition=r}}function mp(){return $e().memoizedState}function $0(e,t,n){var r=It(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},gp(e))yp(t,n);else if(n=qh(e,t,n,r),n!==null){var i=xe();Ye(n,e,r,i),vp(n,t,r)}}function W0(e,t,n){var r=It(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(gp(e))yp(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,qe(a,o)){var l=t.interleaved;l===null?(i.next=i,Hl(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=qh(e,t,i,r),n!==null&&(i=xe(),Ye(n,e,r,i),vp(n,t,r))}}function gp(e){var t=e.alternate;return e===H||t!==null&&t===H}function yp(e,t){Nr=Es=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function vp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Nl(e,n)}}var Ts={readContext:Ue,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useInsertionEffect:fe,useLayoutEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useMutableSource:fe,useSyncExternalStore:fe,useId:fe,unstable_isNewReconciler:!1},H0={readContext:Ue,useCallback:function(e,t){return et().memoizedState=[e,t===void 0?null:t],e},useContext:Ue,useEffect:Oc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ji(4194308,4,cp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ji(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ji(4,2,e,t)},useMemo:function(e,t){var n=et();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=et();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=$0.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=et();return e={current:e},t.memoizedState=e},useState:Vc,useDebugValue:eu,useDeferredValue:function(e){return et().memoizedState=e},useTransition:function(){var e=Vc(!1),t=e[0];return e=U0.bind(null,e[1]),et().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=H,i=et();if(U){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),ae===null)throw Error(j(349));fn&30||np(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Oc(ip.bind(null,r,s,e),[e]),r.flags|=2048,ei(9,rp.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=et(),t=ae.identifierPrefix;if(U){var n=ut,r=lt;n=(r&~(1<<32-Qe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Zr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=B0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},K0={readContext:Ue,useCallback:fp,useContext:Ue,useEffect:Jl,useImperativeHandle:dp,useInsertionEffect:lp,useLayoutEffect:up,useMemo:hp,useReducer:Io,useRef:ap,useState:function(){return Io(Jr)},useDebugValue:eu,useDeferredValue:function(e){var t=$e();return pp(t,re.memoizedState,e)},useTransition:function(){var e=Io(Jr)[0],t=$e().memoizedState;return[e,t]},useMutableSource:ep,useSyncExternalStore:tp,useId:mp,unstable_isNewReconciler:!1},G0={readContext:Ue,useCallback:fp,useContext:Ue,useEffect:Jl,useImperativeHandle:dp,useInsertionEffect:lp,useLayoutEffect:up,useMemo:hp,useReducer:Vo,useRef:ap,useState:function(){return Vo(Jr)},useDebugValue:eu,useDeferredValue:function(e){var t=$e();return re===null?t.memoizedState=e:pp(t,re.memoizedState,e)},useTransition:function(){var e=Vo(Jr)[0],t=$e().memoizedState;return[e,t]},useMutableSource:ep,useSyncExternalStore:tp,useId:mp,unstable_isNewReconciler:!1};function Ke(e,t){if(e&&e.defaultProps){t=K({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ia(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:K({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Qs={isMounted:function(e){return(e=e._reactInternals)?gn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=xe(),i=It(e),s=ct(r,i);s.payload=t,n!=null&&(s.callback=n),t=Dt(e,s,i),t!==null&&(Ye(t,e,i,r),qi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=xe(),i=It(e),s=ct(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Dt(e,s,i),t!==null&&(Ye(t,e,i,r),qi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=xe(),r=It(e),i=ct(n,r);i.tag=2,t!=null&&(i.callback=t),t=Dt(e,i,r),t!==null&&(Ye(t,e,r,n),qi(t,e,r))}};function bc(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!Kr(n,r)||!Kr(i,s):!0}function xp(e,t,n){var r=!1,i=Ft,s=t.contextType;return typeof s=="object"&&s!==null?s=Ue(s):(i=Ee(t)?cn:ye.current,r=t.contextTypes,s=(r=r!=null)?Wn(e,i):Ft),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Qs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Fc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Qs.enqueueReplaceState(t,t.state,null)}function Va(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Kl(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Ue(s):(s=Ee(t)?cn:ye.current,i.context=Wn(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Ia(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Qs.enqueueReplaceState(i,i.state,null),ks(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Xn(e,t){try{var n="",r=t;do n+=Sy(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Oo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Oa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var X0=typeof WeakMap=="function"?WeakMap:Map;function wp(e,t,n){n=ct(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ls||(Ls=!0,Ga=r),Oa(e,t)},n}function Sp(e,t,n){n=ct(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Oa(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Oa(e,t),typeof r!="function"&&(_t===null?_t=new Set([this]):_t.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function zc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new X0;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=lv.bind(null,e,t,n),t.then(e,e))}function Bc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Uc(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ct(-1,1),t.tag=2,Dt(n,t,1))),n.lanes|=1),e)}var Q0=vt.ReactCurrentOwner,ke=!1;function ve(e,t,n,r){t.child=e===null?Yh(t,null,n,r):Kn(t,e.child,n,r)}function $c(e,t,n,r,i){n=n.render;var s=t.ref;return Bn(t,i),r=ql(e,t,n,r,s,i),n=Zl(),e!==null&&!ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,gt(e,t,i)):(U&&n&&Fl(t),t.flags|=1,ve(e,t,r,i),t.child)}function Wc(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!lu(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Cp(e,t,s,r,i)):(e=rs(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Kr,n(o,r)&&e.ref===t.ref)return gt(e,t,i)}return t.flags|=1,e=Vt(s,r),e.ref=t.ref,e.return=t,t.child=e}function Cp(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(Kr(s,r)&&e.ref===t.ref)if(ke=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(ke=!0);else return t.lanes=e.lanes,gt(e,t,i)}return ba(e,t,n,r,i)}function kp(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},b(Nn,Le),Le|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,b(Nn,Le),Le|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,b(Nn,Le),Le|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,b(Nn,Le),Le|=r;return ve(e,t,i,n),t.child}function Pp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ba(e,t,n,r,i){var s=Ee(n)?cn:ye.current;return s=Wn(t,s),Bn(t,i),n=ql(e,t,n,r,s,i),r=Zl(),e!==null&&!ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,gt(e,t,i)):(U&&r&&Fl(t),t.flags|=1,ve(e,t,n,i),t.child)}function Hc(e,t,n,r,i){if(Ee(n)){var s=!0;vs(t)}else s=!1;if(Bn(t,i),t.stateNode===null)es(e,t),xp(t,n,r),Va(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ue(u):(u=Ee(n)?cn:ye.current,u=Wn(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Fc(t,o,r,u),kt=!1;var f=t.memoizedState;o.state=f,ks(t,r,o,i),l=t.memoizedState,a!==r||f!==l||Pe.current||kt?(typeof c=="function"&&(Ia(t,n,c,r),l=t.memoizedState),(a=kt||bc(t,n,a,r,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Zh(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Ke(t.type,a),o.props=u,d=t.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ue(l):(l=Ee(n)?cn:ye.current,l=Wn(t,l));var y=n.getDerivedStateFromProps;(c=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Fc(t,o,r,l),kt=!1,f=t.memoizedState,o.state=f,ks(t,r,o,i);var v=t.memoizedState;a!==d||f!==v||Pe.current||kt?(typeof y=="function"&&(Ia(t,n,y,r),v=t.memoizedState),(u=kt||bc(t,n,u,r,f,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Fa(e,t,n,r,s,i)}function Fa(e,t,n,r,i,s){Pp(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Mc(t,n,!1),gt(e,t,s);r=t.stateNode,Q0.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Kn(t,e.child,null,s),t.child=Kn(t,null,a,s)):ve(e,t,a,s),t.memoizedState=r.state,i&&Mc(t,n,!0),t.child}function Ep(e){var t=e.stateNode;t.pendingContext?Ac(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ac(e,t.context,!1),Gl(e,t.containerInfo)}function Kc(e,t,n,r,i){return Hn(),Bl(i),t.flags|=256,ve(e,t,n,r),t.child}var za={dehydrated:null,treeContext:null,retryLane:0};function Ba(e){return{baseLanes:e,cachePool:null,transitions:null}}function Tp(e,t,n){var r=t.pendingProps,i=$.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),b($,i&1),e===null)return Da(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Zs(o,r,0,null),e=ln(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Ba(n),t.memoizedState=za,e):tu(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Y0(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Vt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Vt(a,s):(s=ln(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?Ba(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=za,r}return s=e.child,e=s.sibling,r=Vt(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function tu(e,t){return t=Zs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function bi(e,t,n,r){return r!==null&&Bl(r),Kn(t,e.child,null,n),e=tu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Y0(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=Oo(Error(j(422))),bi(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Zs({mode:"visible",children:r.children},i,0,null),s=ln(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&Kn(t,e.child,null,o),t.child.memoizedState=Ba(o),t.memoizedState=za,s);if(!(t.mode&1))return bi(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(j(419)),r=Oo(s,r,void 0),bi(e,t,o,r)}if(a=(o&e.childLanes)!==0,ke||a){if(r=ae,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,mt(e,i),Ye(r,e,i,-1))}return au(),r=Oo(Error(j(421))),bi(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=uv.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Ae=Rt(i.nextSibling),Me=t,U=!0,Xe=null,e!==null&&(be[Fe++]=lt,be[Fe++]=ut,be[Fe++]=dn,lt=e.id,ut=e.overflow,dn=t),t=tu(t,r.children),t.flags|=4096,t)}function Gc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),_a(e.return,t,n)}function bo(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function jp(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(ve(e,t,r.children,n),r=$.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Gc(e,n,t);else if(e.tag===19)Gc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(b($,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ps(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),bo(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ps(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}bo(t,!0,n,null,s);break;case"together":bo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function es(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function gt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),hn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=Vt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Vt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function q0(e,t,n){switch(t.tag){case 3:Ep(t),Hn();break;case 5:Jh(t);break;case 1:Ee(t.type)&&vs(t);break;case 4:Gl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;b(Ss,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(b($,$.current&1),t.flags|=128,null):n&t.child.childLanes?Tp(e,t,n):(b($,$.current&1),e=gt(e,t,n),e!==null?e.sibling:null);b($,$.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return jp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),b($,$.current),r)break;return null;case 22:case 23:return t.lanes=0,kp(e,t,n)}return gt(e,t,n)}var Lp,Ua,Ap,Mp;Lp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ua=function(){};Ap=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,sn(rt.current);var s=null;switch(n){case"input":i=ca(e,i),r=ca(e,r),s=[];break;case"select":i=K({},i,{value:void 0}),r=K({},r,{value:void 0}),s=[];break;case"textarea":i=ha(e,i),r=ha(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=gs)}ma(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Fr.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Fr.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&F("scroll",e),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};Mp=function(e,t,n,r){n!==r&&(t.flags|=4)};function mr(e,t){if(!U)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function he(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Z0(e,t,n){var r=t.pendingProps;switch(zl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return he(t),null;case 1:return Ee(t.type)&&ys(),he(t),null;case 3:return r=t.stateNode,Gn(),z(Pe),z(ye),Ql(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Vi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Xe!==null&&(Ya(Xe),Xe=null))),Ua(e,t),he(t),null;case 5:Xl(t);var i=sn(qr.current);if(n=t.type,e!==null&&t.stateNode!=null)Ap(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(j(166));return he(t),null}if(e=sn(rt.current),Vi(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[tt]=t,r[Qr]=s,e=(t.mode&1)!==0,n){case"dialog":F("cancel",r),F("close",r);break;case"iframe":case"object":case"embed":F("load",r);break;case"video":case"audio":for(i=0;i<Cr.length;i++)F(Cr[i],r);break;case"source":F("error",r);break;case"img":case"image":case"link":F("error",r),F("load",r);break;case"details":F("toggle",r);break;case"input":nc(r,s),F("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},F("invalid",r);break;case"textarea":ic(r,s),F("invalid",r)}ma(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ii(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ii(r.textContent,a,e),i=["children",""+a]):Fr.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&F("scroll",r)}switch(n){case"input":ji(r),rc(r,s,!0);break;case"textarea":ji(r),sc(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=gs)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ih(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[tt]=t,e[Qr]=r,Lp(e,t,!1,!1),t.stateNode=e;e:{switch(o=ga(n,r),n){case"dialog":F("cancel",e),F("close",e),i=r;break;case"iframe":case"object":case"embed":F("load",e),i=r;break;case"video":case"audio":for(i=0;i<Cr.length;i++)F(Cr[i],e);i=r;break;case"source":F("error",e),i=r;break;case"img":case"image":case"link":F("error",e),F("load",e),i=r;break;case"details":F("toggle",e),i=r;break;case"input":nc(e,r),i=ca(e,r),F("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=K({},r,{value:void 0}),F("invalid",e);break;case"textarea":ic(e,r),i=ha(e,r),F("invalid",e);break;default:i=r}ma(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?ah(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&sh(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&zr(e,l):typeof l=="number"&&zr(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Fr.hasOwnProperty(s)?l!=null&&s==="onScroll"&&F("scroll",e):l!=null&&El(e,s,l,o))}switch(n){case"input":ji(e),rc(e,r,!1);break;case"textarea":ji(e),sc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+bt(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?On(e,!!r.multiple,s,!1):r.defaultValue!=null&&On(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=gs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return he(t),null;case 6:if(e&&t.stateNode!=null)Mp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(j(166));if(n=sn(qr.current),sn(rt.current),Vi(t)){if(r=t.stateNode,n=t.memoizedProps,r[tt]=t,(s=r.nodeValue!==n)&&(e=Me,e!==null))switch(e.tag){case 3:Ii(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ii(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[tt]=t,t.stateNode=r}return he(t),null;case 13:if(z($),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&Ae!==null&&t.mode&1&&!(t.flags&128))Xh(),Hn(),t.flags|=98560,s=!1;else if(s=Vi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(j(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(j(317));s[tt]=t}else Hn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;he(t),s=!1}else Xe!==null&&(Ya(Xe),Xe=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||$.current&1?ie===0&&(ie=3):au())),t.updateQueue!==null&&(t.flags|=4),he(t),null);case 4:return Gn(),Ua(e,t),e===null&&Gr(t.stateNode.containerInfo),he(t),null;case 10:return Wl(t.type._context),he(t),null;case 17:return Ee(t.type)&&ys(),he(t),null;case 19:if(z($),s=t.memoizedState,s===null)return he(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)mr(s,!1);else{if(ie!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Ps(e),o!==null){for(t.flags|=128,mr(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return b($,$.current&1|2),t.child}e=e.sibling}s.tail!==null&&J()>Qn&&(t.flags|=128,r=!0,mr(s,!1),t.lanes=4194304)}else{if(!r)if(e=Ps(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),mr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!U)return he(t),null}else 2*J()-s.renderingStartTime>Qn&&n!==1073741824&&(t.flags|=128,r=!0,mr(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=J(),t.sibling=null,n=$.current,b($,r?n&1|2:n&1),t):(he(t),null);case 22:case 23:return ou(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Le&1073741824&&(he(t),t.subtreeFlags&6&&(t.flags|=8192)):he(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function J0(e,t){switch(zl(t),t.tag){case 1:return Ee(t.type)&&ys(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Gn(),z(Pe),z(ye),Ql(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Xl(t),null;case 13:if(z($),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));Hn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return z($),null;case 4:return Gn(),null;case 10:return Wl(t.type._context),null;case 22:case 23:return ou(),null;case 24:return null;default:return null}}var Fi=!1,me=!1,ev=typeof WeakSet=="function"?WeakSet:Set,A=null;function Mn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){X(e,t,r)}else n.current=null}function $a(e,t,n){try{n()}catch(r){X(e,t,r)}}var Xc=!1;function tv(e,t){if(Ta=hs,e=Ih(),bl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=e,f=null;t:for(;;){for(var y;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(y=d.firstChild)!==null;)f=d,d=y;for(;;){if(d===e)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(y=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ja={focusedElem:e,selectionRange:n},hs=!1,A=t;A!==null;)if(t=A,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,A=e;else for(;A!==null;){t=A;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,w=v.memoizedState,p=t.stateNode,h=p.getSnapshotBeforeUpdate(t.elementType===t.type?x:Ke(t.type,x),w);p.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(C){X(t,t.return,C)}if(e=t.sibling,e!==null){e.return=t.return,A=e;break}A=t.return}return v=Xc,Xc=!1,v}function Rr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&$a(t,n,s)}i=i.next}while(i!==r)}}function Ys(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Wa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Np(e){var t=e.alternate;t!==null&&(e.alternate=null,Np(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[tt],delete t[Qr],delete t[Ma],delete t[O0],delete t[b0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Rp(e){return e.tag===5||e.tag===3||e.tag===4}function Qc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Rp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ha(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=gs));else if(r!==4&&(e=e.child,e!==null))for(Ha(e,t,n),e=e.sibling;e!==null;)Ha(e,t,n),e=e.sibling}function Ka(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ka(e,t,n),e=e.sibling;e!==null;)Ka(e,t,n),e=e.sibling}var le=null,Ge=!1;function wt(e,t,n){for(n=n.child;n!==null;)Dp(e,t,n),n=n.sibling}function Dp(e,t,n){if(nt&&typeof nt.onCommitFiberUnmount=="function")try{nt.onCommitFiberUnmount(Us,n)}catch{}switch(n.tag){case 5:me||Mn(n,t);case 6:var r=le,i=Ge;le=null,wt(e,t,n),le=r,Ge=i,le!==null&&(Ge?(e=le,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):le.removeChild(n.stateNode));break;case 18:le!==null&&(Ge?(e=le,n=n.stateNode,e.nodeType===8?No(e.parentNode,n):e.nodeType===1&&No(e,n),Wr(e)):No(le,n.stateNode));break;case 4:r=le,i=Ge,le=n.stateNode.containerInfo,Ge=!0,wt(e,t,n),le=r,Ge=i;break;case 0:case 11:case 14:case 15:if(!me&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&$a(n,t,o),i=i.next}while(i!==r)}wt(e,t,n);break;case 1:if(!me&&(Mn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){X(n,t,a)}wt(e,t,n);break;case 21:wt(e,t,n);break;case 22:n.mode&1?(me=(r=me)||n.memoizedState!==null,wt(e,t,n),me=r):wt(e,t,n);break;default:wt(e,t,n)}}function Yc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ev),t.forEach(function(r){var i=cv.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function We(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:le=a.stateNode,Ge=!1;break e;case 3:le=a.stateNode.containerInfo,Ge=!0;break e;case 4:le=a.stateNode.containerInfo,Ge=!0;break e}a=a.return}if(le===null)throw Error(j(160));Dp(s,o,i),le=null,Ge=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){X(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)_p(t,e),t=t.sibling}function _p(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(We(t,e),Je(e),r&4){try{Rr(3,e,e.return),Ys(3,e)}catch(x){X(e,e.return,x)}try{Rr(5,e,e.return)}catch(x){X(e,e.return,x)}}break;case 1:We(t,e),Je(e),r&512&&n!==null&&Mn(n,n.return);break;case 5:if(We(t,e),Je(e),r&512&&n!==null&&Mn(n,n.return),e.flags&32){var i=e.stateNode;try{zr(i,"")}catch(x){X(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&nh(i,s),ga(a,o);var u=ga(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?ah(i,d):c==="dangerouslySetInnerHTML"?sh(i,d):c==="children"?zr(i,d):El(i,c,d,u)}switch(a){case"input":da(i,s);break;case"textarea":rh(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?On(i,!!s.multiple,y,!1):f!==!!s.multiple&&(s.defaultValue!=null?On(i,!!s.multiple,s.defaultValue,!0):On(i,!!s.multiple,s.multiple?[]:"",!1))}i[Qr]=s}catch(x){X(e,e.return,x)}}break;case 6:if(We(t,e),Je(e),r&4){if(e.stateNode===null)throw Error(j(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(x){X(e,e.return,x)}}break;case 3:if(We(t,e),Je(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Wr(t.containerInfo)}catch(x){X(e,e.return,x)}break;case 4:We(t,e),Je(e);break;case 13:We(t,e),Je(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(iu=J())),r&4&&Yc(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(me=(u=me)||c,We(t,e),me=u):We(t,e),Je(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(A=e,c=e.child;c!==null;){for(d=A=c;A!==null;){switch(f=A,y=f.child,f.tag){case 0:case 11:case 14:case 15:Rr(4,f,f.return);break;case 1:Mn(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(x){X(r,n,x)}}break;case 5:Mn(f,f.return);break;case 22:if(f.memoizedState!==null){Zc(d);continue}}y!==null?(y.return=f,A=y):Zc(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=oh("display",o))}catch(x){X(e,e.return,x)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(x){X(e,e.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:We(t,e),Je(e),r&4&&Yc(e);break;case 21:break;default:We(t,e),Je(e)}}function Je(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Rp(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(zr(i,""),r.flags&=-33);var s=Qc(e);Ka(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Qc(e);Ha(e,a,o);break;default:throw Error(j(161))}}catch(l){X(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function nv(e,t,n){A=e,Ip(e)}function Ip(e,t,n){for(var r=(e.mode&1)!==0;A!==null;){var i=A,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Fi;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||me;a=Fi;var u=me;if(Fi=o,(me=l)&&!u)for(A=i;A!==null;)o=A,l=o.child,o.tag===22&&o.memoizedState!==null?Jc(i):l!==null?(l.return=o,A=l):Jc(i);for(;s!==null;)A=s,Ip(s),s=s.sibling;A=i,Fi=a,me=u}qc(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,A=s):qc(e)}}function qc(e){for(;A!==null;){var t=A;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:me||Ys(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!me)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ke(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Ic(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ic(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Wr(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}me||t.flags&512&&Wa(t)}catch(f){X(t,t.return,f)}}if(t===e){A=null;break}if(n=t.sibling,n!==null){n.return=t.return,A=n;break}A=t.return}}function Zc(e){for(;A!==null;){var t=A;if(t===e){A=null;break}var n=t.sibling;if(n!==null){n.return=t.return,A=n;break}A=t.return}}function Jc(e){for(;A!==null;){var t=A;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ys(4,t)}catch(l){X(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){X(t,i,l)}}var s=t.return;try{Wa(t)}catch(l){X(t,s,l)}break;case 5:var o=t.return;try{Wa(t)}catch(l){X(t,o,l)}}}catch(l){X(t,t.return,l)}if(t===e){A=null;break}var a=t.sibling;if(a!==null){a.return=t.return,A=a;break}A=t.return}}var rv=Math.ceil,js=vt.ReactCurrentDispatcher,nu=vt.ReactCurrentOwner,Be=vt.ReactCurrentBatchConfig,V=0,ae=null,te=null,ce=0,Le=0,Nn=$t(0),ie=0,ti=null,hn=0,qs=0,ru=0,Dr=null,Ce=null,iu=0,Qn=1/0,ot=null,Ls=!1,Ga=null,_t=null,zi=!1,jt=null,As=0,_r=0,Xa=null,ts=-1,ns=0;function xe(){return V&6?J():ts!==-1?ts:ts=J()}function It(e){return e.mode&1?V&2&&ce!==0?ce&-ce:z0.transition!==null?(ns===0&&(ns=xh()),ns):(e=O,e!==0||(e=window.event,e=e===void 0?16:Th(e.type)),e):1}function Ye(e,t,n,r){if(50<_r)throw _r=0,Xa=null,Error(j(185));hi(e,n,r),(!(V&2)||e!==ae)&&(e===ae&&(!(V&2)&&(qs|=n),ie===4&&Et(e,ce)),Te(e,r),n===1&&V===0&&!(t.mode&1)&&(Qn=J()+500,Gs&&Wt()))}function Te(e,t){var n=e.callbackNode;zy(e,t);var r=fs(e,e===ae?ce:0);if(r===0)n!==null&&lc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&lc(n),t===1)e.tag===0?F0(ed.bind(null,e)):Hh(ed.bind(null,e)),I0(function(){!(V&6)&&Wt()}),n=null;else{switch(wh(r)){case 1:n=Ml;break;case 4:n=yh;break;case 16:n=ds;break;case 536870912:n=vh;break;default:n=ds}n=$p(n,Vp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Vp(e,t){if(ts=-1,ns=0,V&6)throw Error(j(327));var n=e.callbackNode;if(Un()&&e.callbackNode!==n)return null;var r=fs(e,e===ae?ce:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ms(e,r);else{t=r;var i=V;V|=2;var s=bp();(ae!==e||ce!==t)&&(ot=null,Qn=J()+500,an(e,t));do try{ov();break}catch(a){Op(e,a)}while(!0);$l(),js.current=s,V=i,te!==null?t=0:(ae=null,ce=0,t=ie)}if(t!==0){if(t===2&&(i=Sa(e),i!==0&&(r=i,t=Qa(e,i))),t===1)throw n=ti,an(e,0),Et(e,r),Te(e,J()),n;if(t===6)Et(e,r);else{if(i=e.current.alternate,!(r&30)&&!iv(i)&&(t=Ms(e,r),t===2&&(s=Sa(e),s!==0&&(r=s,t=Qa(e,s))),t===1))throw n=ti,an(e,0),Et(e,r),Te(e,J()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(j(345));case 2:Jt(e,Ce,ot);break;case 3:if(Et(e,r),(r&130023424)===r&&(t=iu+500-J(),10<t)){if(fs(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){xe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Aa(Jt.bind(null,e,Ce,ot),t);break}Jt(e,Ce,ot);break;case 4:if(Et(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Qe(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*rv(r/1960))-r,10<r){e.timeoutHandle=Aa(Jt.bind(null,e,Ce,ot),r);break}Jt(e,Ce,ot);break;case 5:Jt(e,Ce,ot);break;default:throw Error(j(329))}}}return Te(e,J()),e.callbackNode===n?Vp.bind(null,e):null}function Qa(e,t){var n=Dr;return e.current.memoizedState.isDehydrated&&(an(e,t).flags|=256),e=Ms(e,t),e!==2&&(t=Ce,Ce=n,t!==null&&Ya(t)),e}function Ya(e){Ce===null?Ce=e:Ce.push.apply(Ce,e)}function iv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!qe(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Et(e,t){for(t&=~ru,t&=~qs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Qe(t),r=1<<n;e[n]=-1,t&=~r}}function ed(e){if(V&6)throw Error(j(327));Un();var t=fs(e,0);if(!(t&1))return Te(e,J()),null;var n=Ms(e,t);if(e.tag!==0&&n===2){var r=Sa(e);r!==0&&(t=r,n=Qa(e,r))}if(n===1)throw n=ti,an(e,0),Et(e,t),Te(e,J()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Jt(e,Ce,ot),Te(e,J()),null}function su(e,t){var n=V;V|=1;try{return e(t)}finally{V=n,V===0&&(Qn=J()+500,Gs&&Wt())}}function pn(e){jt!==null&&jt.tag===0&&!(V&6)&&Un();var t=V;V|=1;var n=Be.transition,r=O;try{if(Be.transition=null,O=1,e)return e()}finally{O=r,Be.transition=n,V=t,!(V&6)&&Wt()}}function ou(){Le=Nn.current,z(Nn)}function an(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,_0(n)),te!==null)for(n=te.return;n!==null;){var r=n;switch(zl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ys();break;case 3:Gn(),z(Pe),z(ye),Ql();break;case 5:Xl(r);break;case 4:Gn();break;case 13:z($);break;case 19:z($);break;case 10:Wl(r.type._context);break;case 22:case 23:ou()}n=n.return}if(ae=e,te=e=Vt(e.current,null),ce=Le=t,ie=0,ti=null,ru=qs=hn=0,Ce=Dr=null,rn!==null){for(t=0;t<rn.length;t++)if(n=rn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}rn=null}return e}function Op(e,t){do{var n=te;try{if($l(),Zi.current=Ts,Es){for(var r=H.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Es=!1}if(fn=0,oe=re=H=null,Nr=!1,Zr=0,nu.current=null,n===null||n.return===null){ie=1,ti=t,te=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=ce,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var y=Bc(o);if(y!==null){y.flags&=-257,Uc(y,o,a,s,t),y.mode&1&&zc(s,u,t),t=y,l=u;var v=t.updateQueue;if(v===null){var x=new Set;x.add(l),t.updateQueue=x}else v.add(l);break e}else{if(!(t&1)){zc(s,u,t),au();break e}l=Error(j(426))}}else if(U&&a.mode&1){var w=Bc(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Uc(w,o,a,s,t),Bl(Xn(l,a));break e}}s=l=Xn(l,a),ie!==4&&(ie=2),Dr===null?Dr=[s]:Dr.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var p=wp(s,l,t);_c(s,p);break e;case 1:a=l;var h=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(_t===null||!_t.has(g)))){s.flags|=65536,t&=-t,s.lanes|=t;var C=Sp(s,a,t);_c(s,C);break e}}s=s.return}while(s!==null)}zp(n)}catch(P){t=P,te===n&&n!==null&&(te=n=n.return);continue}break}while(!0)}function bp(){var e=js.current;return js.current=Ts,e===null?Ts:e}function au(){(ie===0||ie===3||ie===2)&&(ie=4),ae===null||!(hn&268435455)&&!(qs&268435455)||Et(ae,ce)}function Ms(e,t){var n=V;V|=2;var r=bp();(ae!==e||ce!==t)&&(ot=null,an(e,t));do try{sv();break}catch(i){Op(e,i)}while(!0);if($l(),V=n,js.current=r,te!==null)throw Error(j(261));return ae=null,ce=0,ie}function sv(){for(;te!==null;)Fp(te)}function ov(){for(;te!==null&&!Ny();)Fp(te)}function Fp(e){var t=Up(e.alternate,e,Le);e.memoizedProps=e.pendingProps,t===null?zp(e):te=t,nu.current=null}function zp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=J0(n,t),n!==null){n.flags&=32767,te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ie=6,te=null;return}}else if(n=Z0(n,t,Le),n!==null){te=n;return}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);ie===0&&(ie=5)}function Jt(e,t,n){var r=O,i=Be.transition;try{Be.transition=null,O=1,av(e,t,n,r)}finally{Be.transition=i,O=r}return null}function av(e,t,n,r){do Un();while(jt!==null);if(V&6)throw Error(j(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(By(e,s),e===ae&&(te=ae=null,ce=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||zi||(zi=!0,$p(ds,function(){return Un(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Be.transition,Be.transition=null;var o=O;O=1;var a=V;V|=4,nu.current=null,tv(e,n),_p(n,e),j0(ja),hs=!!Ta,ja=Ta=null,e.current=n,nv(n),Ry(),V=a,O=o,Be.transition=s}else e.current=n;if(zi&&(zi=!1,jt=e,As=i),s=e.pendingLanes,s===0&&(_t=null),Iy(n.stateNode),Te(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ls)throw Ls=!1,e=Ga,Ga=null,e;return As&1&&e.tag!==0&&Un(),s=e.pendingLanes,s&1?e===Xa?_r++:(_r=0,Xa=e):_r=0,Wt(),null}function Un(){if(jt!==null){var e=wh(As),t=Be.transition,n=O;try{if(Be.transition=null,O=16>e?16:e,jt===null)var r=!1;else{if(e=jt,jt=null,As=0,V&6)throw Error(j(331));var i=V;for(V|=4,A=e.current;A!==null;){var s=A,o=s.child;if(A.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(A=u;A!==null;){var c=A;switch(c.tag){case 0:case 11:case 15:Rr(8,c,s)}var d=c.child;if(d!==null)d.return=c,A=d;else for(;A!==null;){c=A;var f=c.sibling,y=c.return;if(Np(c),c===u){A=null;break}if(f!==null){f.return=y,A=f;break}A=y}}}var v=s.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var w=x.sibling;x.sibling=null,x=w}while(x!==null)}}A=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,A=o;else e:for(;A!==null;){if(s=A,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Rr(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,A=p;break e}A=s.return}}var h=e.current;for(A=h;A!==null;){o=A;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,A=g;else e:for(o=h;A!==null;){if(a=A,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ys(9,a)}}catch(P){X(a,a.return,P)}if(a===o){A=null;break e}var C=a.sibling;if(C!==null){C.return=a.return,A=C;break e}A=a.return}}if(V=i,Wt(),nt&&typeof nt.onPostCommitFiberRoot=="function")try{nt.onPostCommitFiberRoot(Us,e)}catch{}r=!0}return r}finally{O=n,Be.transition=t}}return!1}function td(e,t,n){t=Xn(n,t),t=wp(e,t,1),e=Dt(e,t,1),t=xe(),e!==null&&(hi(e,1,t),Te(e,t))}function X(e,t,n){if(e.tag===3)td(e,e,n);else for(;t!==null;){if(t.tag===3){td(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(_t===null||!_t.has(r))){e=Xn(n,e),e=Sp(t,e,1),t=Dt(t,e,1),e=xe(),t!==null&&(hi(t,1,e),Te(t,e));break}}t=t.return}}function lv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=xe(),e.pingedLanes|=e.suspendedLanes&n,ae===e&&(ce&n)===n&&(ie===4||ie===3&&(ce&130023424)===ce&&500>J()-iu?an(e,0):ru|=n),Te(e,t)}function Bp(e,t){t===0&&(e.mode&1?(t=Mi,Mi<<=1,!(Mi&130023424)&&(Mi=4194304)):t=1);var n=xe();e=mt(e,t),e!==null&&(hi(e,t,n),Te(e,n))}function uv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Bp(e,n)}function cv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(t),Bp(e,n)}var Up;Up=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Pe.current)ke=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ke=!1,q0(e,t,n);ke=!!(e.flags&131072)}else ke=!1,U&&t.flags&1048576&&Kh(t,ws,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;es(e,t),e=t.pendingProps;var i=Wn(t,ye.current);Bn(t,n),i=ql(null,t,r,e,i,n);var s=Zl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ee(r)?(s=!0,vs(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Kl(t),i.updater=Qs,t.stateNode=i,i._reactInternals=t,Va(t,r,e,n),t=Fa(null,t,r,!0,s,n)):(t.tag=0,U&&s&&Fl(t),ve(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(es(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=fv(r),e=Ke(r,e),i){case 0:t=ba(null,t,r,e,n);break e;case 1:t=Hc(null,t,r,e,n);break e;case 11:t=$c(null,t,r,e,n);break e;case 14:t=Wc(null,t,r,Ke(r.type,e),n);break e}throw Error(j(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ke(r,i),ba(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ke(r,i),Hc(e,t,r,i,n);case 3:e:{if(Ep(t),e===null)throw Error(j(387));r=t.pendingProps,s=t.memoizedState,i=s.element,Zh(e,t),ks(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Xn(Error(j(423)),t),t=Kc(e,t,r,n,i);break e}else if(r!==i){i=Xn(Error(j(424)),t),t=Kc(e,t,r,n,i);break e}else for(Ae=Rt(t.stateNode.containerInfo.firstChild),Me=t,U=!0,Xe=null,n=Yh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Hn(),r===i){t=gt(e,t,n);break e}ve(e,t,r,n)}t=t.child}return t;case 5:return Jh(t),e===null&&Da(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,La(r,i)?o=null:s!==null&&La(r,s)&&(t.flags|=32),Pp(e,t),ve(e,t,o,n),t.child;case 6:return e===null&&Da(t),null;case 13:return Tp(e,t,n);case 4:return Gl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Kn(t,null,r,n):ve(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ke(r,i),$c(e,t,r,i,n);case 7:return ve(e,t,t.pendingProps,n),t.child;case 8:return ve(e,t,t.pendingProps.children,n),t.child;case 12:return ve(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,b(Ss,r._currentValue),r._currentValue=o,s!==null)if(qe(s.value,o)){if(s.children===i.children&&!Pe.current){t=gt(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=ct(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),_a(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(j(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),_a(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ve(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Bn(t,n),i=Ue(i),r=r(i),t.flags|=1,ve(e,t,r,n),t.child;case 14:return r=t.type,i=Ke(r,t.pendingProps),i=Ke(r.type,i),Wc(e,t,r,i,n);case 15:return Cp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ke(r,i),es(e,t),t.tag=1,Ee(r)?(e=!0,vs(t)):e=!1,Bn(t,n),xp(t,r,i),Va(t,r,i,n),Fa(null,t,r,!0,e,n);case 19:return jp(e,t,n);case 22:return kp(e,t,n)}throw Error(j(156,t.tag))};function $p(e,t){return gh(e,t)}function dv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ze(e,t,n,r){return new dv(e,t,n,r)}function lu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function fv(e){if(typeof e=="function")return lu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===jl)return 11;if(e===Ll)return 14}return 2}function Vt(e,t){var n=e.alternate;return n===null?(n=ze(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function rs(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")lu(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Sn:return ln(n.children,i,s,t);case Tl:o=8,i|=8;break;case oa:return e=ze(12,n,t,i|2),e.elementType=oa,e.lanes=s,e;case aa:return e=ze(13,n,t,i),e.elementType=aa,e.lanes=s,e;case la:return e=ze(19,n,t,i),e.elementType=la,e.lanes=s,e;case Jf:return Zs(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case qf:o=10;break e;case Zf:o=9;break e;case jl:o=11;break e;case Ll:o=14;break e;case Ct:o=16,r=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=ze(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function ln(e,t,n,r){return e=ze(7,e,r,t),e.lanes=n,e}function Zs(e,t,n,r){return e=ze(22,e,r,t),e.elementType=Jf,e.lanes=n,e.stateNode={isHidden:!1},e}function Fo(e,t,n){return e=ze(6,e,null,t),e.lanes=n,e}function zo(e,t,n){return t=ze(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function hv(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wo(0),this.expirationTimes=wo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function uu(e,t,n,r,i,s,o,a,l){return e=new hv(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=ze(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Kl(s),e}function pv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Wp(e){if(!e)return Ft;e=e._reactInternals;e:{if(gn(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ee(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(Ee(n))return Wh(e,n,t)}return t}function Hp(e,t,n,r,i,s,o,a,l){return e=uu(n,r,!0,e,i,s,o,a,l),e.context=Wp(null),n=e.current,r=xe(),i=It(n),s=ct(r,i),s.callback=t??null,Dt(n,s,i),e.current.lanes=i,hi(e,i,r),Te(e,r),e}function Js(e,t,n,r){var i=t.current,s=xe(),o=It(i);return n=Wp(n),t.context===null?t.context=n:t.pendingContext=n,t=ct(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Dt(i,t,o),e!==null&&(Ye(e,i,o,s),qi(e,i,o)),o}function Ns(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function nd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function cu(e,t){nd(e,t),(e=e.alternate)&&nd(e,t)}function mv(){return null}var Kp=typeof reportError=="function"?reportError:function(e){console.error(e)};function du(e){this._internalRoot=e}eo.prototype.render=du.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));Js(e,t,null,null)};eo.prototype.unmount=du.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;pn(function(){Js(null,e,null,null)}),t[pt]=null}};function eo(e){this._internalRoot=e}eo.prototype.unstable_scheduleHydration=function(e){if(e){var t=kh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Pt.length&&t!==0&&t<Pt[n].priority;n++);Pt.splice(n,0,e),n===0&&Eh(e)}};function fu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function to(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function rd(){}function gv(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Ns(o);s.call(u)}}var o=Hp(t,r,e,0,null,!1,!1,"",rd);return e._reactRootContainer=o,e[pt]=o.current,Gr(e.nodeType===8?e.parentNode:e),pn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Ns(l);a.call(u)}}var l=uu(e,0,!1,null,null,!1,!1,"",rd);return e._reactRootContainer=l,e[pt]=l.current,Gr(e.nodeType===8?e.parentNode:e),pn(function(){Js(t,l,n,r)}),l}function no(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Ns(o);a.call(l)}}Js(t,o,e,i)}else o=gv(n,t,e,i,r);return Ns(o)}Sh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Sr(t.pendingLanes);n!==0&&(Nl(t,n|1),Te(t,J()),!(V&6)&&(Qn=J()+500,Wt()))}break;case 13:pn(function(){var r=mt(e,1);if(r!==null){var i=xe();Ye(r,e,1,i)}}),cu(e,1)}};Rl=function(e){if(e.tag===13){var t=mt(e,134217728);if(t!==null){var n=xe();Ye(t,e,134217728,n)}cu(e,134217728)}};Ch=function(e){if(e.tag===13){var t=It(e),n=mt(e,t);if(n!==null){var r=xe();Ye(n,e,t,r)}cu(e,t)}};kh=function(){return O};Ph=function(e,t){var n=O;try{return O=e,t()}finally{O=n}};va=function(e,t,n){switch(t){case"input":if(da(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ks(r);if(!i)throw Error(j(90));th(r),da(r,i)}}}break;case"textarea":rh(e,n);break;case"select":t=n.value,t!=null&&On(e,!!n.multiple,t,!1)}};ch=su;dh=pn;var yv={usingClientEntryPoint:!1,Events:[mi,En,Ks,lh,uh,su]},gr={findFiberByHostInstance:nn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},vv={bundleType:gr.bundleType,version:gr.version,rendererPackageName:gr.rendererPackageName,rendererConfig:gr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ph(e),e===null?null:e.stateNode},findFiberByHostInstance:gr.findFiberByHostInstance||mv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bi.isDisabled&&Bi.supportsFiber)try{Us=Bi.inject(vv),nt=Bi}catch{}}_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yv;_e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fu(t))throw Error(j(200));return pv(e,t,null,n)};_e.createRoot=function(e,t){if(!fu(e))throw Error(j(299));var n=!1,r="",i=Kp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=uu(e,1,!1,null,null,n,!1,r,i),e[pt]=t.current,Gr(e.nodeType===8?e.parentNode:e),new du(t)};_e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=ph(t),e=e===null?null:e.stateNode,e};_e.flushSync=function(e){return pn(e)};_e.hydrate=function(e,t,n){if(!to(t))throw Error(j(200));return no(null,e,t,!0,n)};_e.hydrateRoot=function(e,t,n){if(!fu(e))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Kp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Hp(t,null,e,1,n??null,i,!1,s,o),e[pt]=t.current,Gr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new eo(t)};_e.render=function(e,t,n){if(!to(t))throw Error(j(200));return no(null,e,t,!1,n)};_e.unmountComponentAtNode=function(e){if(!to(e))throw Error(j(40));return e._reactRootContainer?(pn(function(){no(null,null,e,!1,function(){e._reactRootContainer=null,e[pt]=null})}),!0):!1};_e.unstable_batchedUpdates=su;_e.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!to(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return no(e,t,n,!1,r)};_e.version="18.3.1-next-f1338f8080-20240426";function Gp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gp)}catch(e){console.error(e)}}Gp(),Gf.exports=_e;var xv=Gf.exports,id=xv;ia.createRoot=id.createRoot,ia.hydrateRoot=id.hydrateRoot;const wv="modulepreload",Sv=function(e){return"/claude-code-academy/"+e},sd={},Ze=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(l=>{if(l=Sv(l),l in sd)return;sd[l]=!0;const u=l.endsWith(".css"),c=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${c}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":wv,u||(d.as="script"),d.crossOrigin="",d.href=l,a&&d.setAttribute("nonce",a),document.head.appendChild(d),u)return new Promise((f,y)=>{d.addEventListener("load",f),d.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return t().catch(s)})};/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ni(){return ni=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ni.apply(this,arguments)}var Lt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Lt||(Lt={}));const od="popstate";function Cv(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:o,hash:a}=r.location;return qa("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Rs(i)}return Pv(t,n,null,e)}function Q(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function hu(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function kv(){return Math.random().toString(36).substr(2,8)}function ad(e,t){return{usr:e.state,key:e.key,idx:t}}function qa(e,t,n,r){return n===void 0&&(n=null),ni({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ir(t):t,{state:n,key:t&&t.key||r||kv()})}function Rs(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ir(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Pv(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Lt.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(ni({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=Lt.Pop;let w=c(),p=w==null?null:w-u;u=w,l&&l({action:a,location:x.location,delta:p})}function f(w,p){a=Lt.Push;let h=qa(x.location,w,p);u=c()+1;let g=ad(h,u),C=x.createHref(h);try{o.pushState(g,"",C)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;i.location.assign(C)}s&&l&&l({action:a,location:x.location,delta:1})}function y(w,p){a=Lt.Replace;let h=qa(x.location,w,p);u=c();let g=ad(h,u),C=x.createHref(h);o.replaceState(g,"",C),s&&l&&l({action:a,location:x.location,delta:0})}function v(w){let p=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof w=="string"?w:Rs(w);return h=h.replace(/ $/,"%20"),Q(p,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,p)}let x={get action(){return a},get location(){return e(i,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(od,d),l=w,()=>{i.removeEventListener(od,d),l=null}},createHref(w){return t(i,w)},createURL:v,encodeLocation(w){let p=v(w);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:f,replace:y,go(w){return o.go(w)}};return x}var ld;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ld||(ld={}));function Ev(e,t,n){return n===void 0&&(n="/"),Tv(e,t,n)}function Tv(e,t,n,r){let i=typeof t=="string"?ir(t):t,s=Yn(i.pathname||"/",n);if(s==null)return null;let o=Xp(e);jv(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let u=bv(s);a=Vv(o[l],u)}return a}function Xp(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Q(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Ot([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Q(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Xp(s.children,t,c,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:_v(u,s.index),routesMeta:c})};return e.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of Qp(s.path))i(s,o,l)}),t}function Qp(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Qp(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function jv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Iv(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Lv=/^:[\w-]+$/,Av=3,Mv=2,Nv=1,Rv=10,Dv=-2,ud=e=>e==="*";function _v(e,t){let n=e.split("/"),r=n.length;return n.some(ud)&&(r+=Dv),t&&(r+=Mv),n.filter(i=>!ud(i)).reduce((i,s)=>i+(Lv.test(s)?Av:s===""?Nv:Rv),r)}function Iv(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Vv(e,t,n){let{routesMeta:r}=e,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,c=s==="/"?t:t.slice(s.length)||"/",d=Za({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},c),f=l.route;if(!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:Ot([s,d.pathname]),pathnameBase:$v(Ot([s,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(s=Ot([s,d.pathnameBase]))}return o}function Za(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Ov(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{let{paramName:f,isOptional:y}=c;if(f==="*"){let x=a[d]||"";o=s.slice(0,s.length-x.length).replace(/(.)\/+$/,"$1")}const v=a[d];return y&&!v?u[f]=void 0:u[f]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:e}}function Ov(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),hu(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function bv(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return hu(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Yn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const Fv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,zv=e=>Fv.test(e);function Bv(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?ir(e):e,s;if(n)if(zv(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),hu(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=cd(n.substring(1),"/"):s=cd(n,t)}else s=t;return{pathname:s,search:Wv(r),hash:Hv(i)}}function cd(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Bo(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Uv(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Yp(e,t){let n=Uv(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function qp(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=ir(e):(i=ni({},e),Q(!i.pathname||!i.pathname.includes("?"),Bo("?","pathname","search",i)),Q(!i.pathname||!i.pathname.includes("#"),Bo("#","pathname","hash",i)),Q(!i.search||!i.search.includes("#"),Bo("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let d=t.length-1;if(!r&&o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}a=d>=0?t[d]:"/"}let l=Bv(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Ot=e=>e.join("/").replace(/\/\/+/g,"/"),$v=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Wv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Hv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Kv(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Zp=["post","put","patch","delete"];new Set(Zp);const Gv=["get",...Zp];new Set(Gv);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ri(){return ri=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ri.apply(this,arguments)}const ro=S.createContext(null),Jp=S.createContext(null),Ht=S.createContext(null),io=S.createContext(null),Kt=S.createContext({outlet:null,matches:[],isDataRoute:!1}),em=S.createContext(null);function Xv(e,t){let{relative:n}=t===void 0?{}:t;yi()||Q(!1);let{basename:r,navigator:i}=S.useContext(Ht),{hash:s,pathname:o,search:a}=so(e,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Ot([r,o])),i.createHref({pathname:l,search:a,hash:s})}function yi(){return S.useContext(io)!=null}function sr(){return yi()||Q(!1),S.useContext(io).location}function tm(e){S.useContext(Ht).static||S.useLayoutEffect(e)}function Qv(){let{isDataRoute:e}=S.useContext(Kt);return e?lx():Yv()}function Yv(){yi()||Q(!1);let e=S.useContext(ro),{basename:t,future:n,navigator:r}=S.useContext(Ht),{matches:i}=S.useContext(Kt),{pathname:s}=sr(),o=JSON.stringify(Yp(i,n.v7_relativeSplatPath)),a=S.useRef(!1);return tm(()=>{a.current=!0}),S.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let d=qp(u,JSON.parse(o),s,c.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:Ot([t,d.pathname])),(c.replace?r.replace:r.push)(d,c.state,c)},[t,r,o,s,e])}function CP(){let{matches:e}=S.useContext(Kt),t=e[e.length-1];return t?t.params:{}}function so(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=S.useContext(Ht),{matches:i}=S.useContext(Kt),{pathname:s}=sr(),o=JSON.stringify(Yp(i,r.v7_relativeSplatPath));return S.useMemo(()=>qp(e,JSON.parse(o),s,n==="path"),[e,o,s,n])}function qv(e,t){return Zv(e,t)}function Zv(e,t,n,r){yi()||Q(!1);let{navigator:i}=S.useContext(Ht),{matches:s}=S.useContext(Kt),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=sr(),c;if(t){var d;let w=typeof t=="string"?ir(t):t;l==="/"||(d=w.pathname)!=null&&d.startsWith(l)||Q(!1),c=w}else c=u;let f=c.pathname||"/",y=f;if(l!=="/"){let w=l.replace(/^\//,"").split("/");y="/"+f.replace(/^\//,"").split("/").slice(w.length).join("/")}let v=Ev(e,{pathname:y}),x=rx(v&&v.map(w=>Object.assign({},w,{params:Object.assign({},a,w.params),pathname:Ot([l,i.encodeLocation?i.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?l:Ot([l,i.encodeLocation?i.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),s,n,r);return t&&x?S.createElement(io.Provider,{value:{location:ri({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Lt.Pop}},x):x}function Jv(){let e=ax(),t=Kv(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},t),n?S.createElement("pre",{style:i},n):null,null)}const ex=S.createElement(Jv,null);class tx extends S.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?S.createElement(Kt.Provider,{value:this.props.routeContext},S.createElement(em.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function nx(e){let{routeContext:t,match:n,children:r}=e,i=S.useContext(ro);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(Kt.Provider,{value:t},r)}function rx(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);c>=0||Q(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<o.length;c++){let d=o[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:f,errors:y}=n,v=d.route.loader&&f[d.route.id]===void 0&&(!y||y[d.route.id]===void 0);if(d.route.lazy||v){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,d,f)=>{let y,v=!1,x=null,w=null;n&&(y=a&&d.route.id?a[d.route.id]:void 0,x=d.route.errorElement||ex,l&&(u<0&&f===0?(ux("route-fallback"),v=!0,w=null):u===f&&(v=!0,w=d.route.hydrateFallbackElement||null)));let p=t.concat(o.slice(0,f+1)),h=()=>{let g;return y?g=x:v?g=w:d.route.Component?g=S.createElement(d.route.Component,null):d.route.element?g=d.route.element:g=c,S.createElement(nx,{match:d,routeContext:{outlet:c,matches:p,isDataRoute:n!=null},children:g})};return n&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?S.createElement(tx,{location:n.location,revalidation:n.revalidation,component:x,error:y,children:h(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):h()},null)}var nm=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(nm||{}),rm=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(rm||{});function ix(e){let t=S.useContext(ro);return t||Q(!1),t}function sx(e){let t=S.useContext(Jp);return t||Q(!1),t}function ox(e){let t=S.useContext(Kt);return t||Q(!1),t}function im(e){let t=ox(),n=t.matches[t.matches.length-1];return n.route.id||Q(!1),n.route.id}function ax(){var e;let t=S.useContext(em),n=sx(),r=im();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function lx(){let{router:e}=ix(nm.UseNavigateStable),t=im(rm.UseNavigateStable),n=S.useRef(!1);return tm(()=>{n.current=!0}),S.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ri({fromRouteId:t},s)))},[e,t])}const dd={};function ux(e,t,n){dd[e]||(dd[e]=!0)}function cx(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function je(e){Q(!1)}function dx(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Lt.Pop,navigator:s,static:o=!1,future:a}=e;yi()&&Q(!1);let l=t.replace(/^\/*/,"/"),u=S.useMemo(()=>({basename:l,navigator:s,static:o,future:ri({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=ir(r));let{pathname:c="/",search:d="",hash:f="",state:y=null,key:v="default"}=r,x=S.useMemo(()=>{let w=Yn(c,l);return w==null?null:{location:{pathname:w,search:d,hash:f,state:y,key:v},navigationType:i}},[l,c,d,f,y,v,i]);return x==null?null:S.createElement(Ht.Provider,{value:u},S.createElement(io.Provider,{children:n,value:x}))}function fx(e){let{children:t,location:n}=e;return qv(Ja(t),n)}new Promise(()=>{});function Ja(e,t){t===void 0&&(t=[]);let n=[];return S.Children.forEach(e,(r,i)=>{if(!S.isValidElement(r))return;let s=[...t,i];if(r.type===S.Fragment){n.push.apply(n,Ja(r.props.children,s));return}r.type!==je&&Q(!1),!r.props.index||!r.props.children||Q(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Ja(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ds(){return Ds=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ds.apply(this,arguments)}function sm(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function hx(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function px(e,t){return e.button===0&&(!t||t==="_self")&&!hx(e)}const mx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],gx=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],yx="6";try{window.__reactRouterVersion=yx}catch{}const vx=S.createContext({isTransitioning:!1}),xx="startTransition",fd=ly[xx];function wx(e){let{basename:t,children:n,future:r,window:i}=e,s=S.useRef();s.current==null&&(s.current=Cv({window:i,v5Compat:!0}));let o=s.current,[a,l]=S.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=S.useCallback(d=>{u&&fd?fd(()=>l(d)):l(d)},[l,u]);return S.useLayoutEffect(()=>o.listen(c),[o,c]),S.useEffect(()=>cx(r),[r]),S.createElement(dx,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const Sx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Cx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ii=S.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c,viewTransition:d}=t,f=sm(t,mx),{basename:y}=S.useContext(Ht),v,x=!1;if(typeof u=="string"&&Cx.test(u)&&(v=u,Sx))try{let g=new URL(window.location.href),C=u.startsWith("//")?new URL(g.protocol+u):new URL(u),P=Yn(C.pathname,y);C.origin===g.origin&&P!=null?u=P+C.search+C.hash:x=!0}catch{}let w=Xv(u,{relative:i}),p=Px(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i,viewTransition:d});function h(g){r&&r(g),g.defaultPrevented||p(g)}return S.createElement("a",Ds({},f,{href:v||w,onClick:x||s?r:h,ref:n,target:l}))}),hd=S.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,viewTransition:u,children:c}=t,d=sm(t,gx),f=so(l,{relative:d.relative}),y=sr(),v=S.useContext(Jp),{navigator:x,basename:w}=S.useContext(Ht),p=v!=null&&Ex(f)&&u===!0,h=x.encodeLocation?x.encodeLocation(f).pathname:f.pathname,g=y.pathname,C=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;i||(g=g.toLowerCase(),C=C?C.toLowerCase():null,h=h.toLowerCase()),C&&w&&(C=Yn(C,w)||C);const P=h!=="/"&&h.endsWith("/")?h.length-1:h.length;let k=g===h||!o&&g.startsWith(h)&&g.charAt(P)==="/",T=C!=null&&(C===h||!o&&C.startsWith(h)&&C.charAt(h.length)==="/"),E={isActive:k,isPending:T,isTransitioning:p},D=k?r:void 0,M;typeof s=="function"?M=s(E):M=[s,k?"active":null,T?"pending":null,p?"transitioning":null].filter(Boolean).join(" ");let ee=typeof a=="function"?a(E):a;return S.createElement(ii,Ds({},d,{"aria-current":D,className:M,ref:n,style:ee,to:l,viewTransition:u}),typeof c=="function"?c(E):c)});var el;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(el||(el={}));var pd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(pd||(pd={}));function kx(e){let t=S.useContext(ro);return t||Q(!1),t}function Px(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:a}=t===void 0?{}:t,l=Qv(),u=sr(),c=so(e,{relative:o});return S.useCallback(d=>{if(px(d,n)){d.preventDefault();let f=r!==void 0?r:Rs(u)===Rs(c);l(e,{replace:f,state:i,preventScrollReset:s,relative:o,viewTransition:a})}},[u,l,c,r,i,n,e,s,o,a])}function Ex(e,t){t===void 0&&(t={});let n=S.useContext(vx);n==null&&Q(!1);let{basename:r}=kx(el.useViewTransitionState),i=so(e,{relative:t.relative});if(!n.isTransitioning)return!1;let s=Yn(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Yn(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Za(i.pathname,o)!=null||Za(i.pathname,s)!=null}/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tx=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),om=(...e)=>e.filter((t,n,r)=>!!t&&r.indexOf(t)===n).join(" ");/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var jx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lx=S.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...a},l)=>S.createElement("svg",{ref:l,...jx,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:om("lucide",i),...a},[...o.map(([u,c])=>S.createElement(u,c)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=(e,t)=>{const n=S.forwardRef(({className:r,...i},s)=>S.createElement(Lx,{ref:s,iconNode:t,className:om(`lucide-${Tx(e)}`,r),...i}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uo=Y("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ax=Y("Baby",[["path",{d:"M9 12h.01",key:"157uk2"}],["path",{d:"M15 12h.01",key:"1k8ypt"}],["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",key:"1u7htd"}],["path",{d:"M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",key:"5yv0yz"}]]);/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mx=Y("BookMarked",[["path",{d:"M10 2v8l3-3 3 3V2",key:"sqw3rj"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]]);/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nx=Y("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rx=Y("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dx=Y("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x=Y("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ix=Y("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=Y("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox=Y("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bx=Y("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx=Y("Map",[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]]);/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx=Y("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bx=Y("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux=Y("Scale",[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]]);/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=Y("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx=Y("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx=Y("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=Y("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=Y("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tl=Y("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pu=Y("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),Xx={},md=e=>{let t;const n=new Set,r=(c,d)=>{const f=typeof c=="function"?c(t):c;if(!Object.is(f,t)){const y=t;t=d??(typeof f!="object"||f===null)?f:Object.assign({},t,f),n.forEach(v=>v(t,y))}},i=()=>t,l={setState:r,getState:i,getInitialState:()=>u,subscribe:c=>(n.add(c),()=>n.delete(c)),destroy:()=>{(Xx?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},u=t=e(r,i,l);return l},Qx=e=>e?md(e):md;var am={exports:{}},lm={},um={exports:{}},cm={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qn=S;function Yx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var qx=typeof Object.is=="function"?Object.is:Yx,Zx=qn.useState,Jx=qn.useEffect,e1=qn.useLayoutEffect,t1=qn.useDebugValue;function n1(e,t){var n=t(),r=Zx({inst:{value:n,getSnapshot:t}}),i=r[0].inst,s=r[1];return e1(function(){i.value=n,i.getSnapshot=t,$o(i)&&s({inst:i})},[e,n,t]),Jx(function(){return $o(i)&&s({inst:i}),e(function(){$o(i)&&s({inst:i})})},[e]),t1(n),n}function $o(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!qx(e,n)}catch{return!0}}function r1(e,t){return t()}var i1=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?r1:n1;cm.useSyncExternalStore=qn.useSyncExternalStore!==void 0?qn.useSyncExternalStore:i1;um.exports=cm;var s1=um.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oo=S,o1=s1;function a1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var l1=typeof Object.is=="function"?Object.is:a1,u1=o1.useSyncExternalStore,c1=oo.useRef,d1=oo.useEffect,f1=oo.useMemo,h1=oo.useDebugValue;lm.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var s=c1(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=f1(function(){function l(y){if(!u){if(u=!0,c=y,y=r(y),i!==void 0&&o.hasValue){var v=o.value;if(i(v,y))return d=v}return d=y}if(v=d,l1(c,y))return v;var x=r(y);return i!==void 0&&i(v,x)?(c=y,v):(c=y,d=x)}var u=!1,c,d,f=n===void 0?null:n;return[function(){return l(t())},f===null?void 0:function(){return l(f())}]},[t,n,r,i]);var a=u1(e,s[0],s[1]);return d1(function(){o.hasValue=!0,o.value=a},[a]),h1(a),a};am.exports=lm;var p1=am.exports;const m1=If(p1),dm={},{useDebugValue:g1}=Cl,{useSyncExternalStoreWithSelector:y1}=m1;let gd=!1;const v1=e=>e;function x1(e,t=v1,n){(dm?"production":void 0)!=="production"&&n&&!gd&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),gd=!0);const r=y1(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return g1(r),r}const w1=e=>{(dm?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?Qx(e):e,n=(r,i)=>x1(t,r,i);return Object.assign(n,t),n},fm=e=>w1,S1={};function C1(e,t){let n;try{n=e()}catch{return}return{getItem:i=>{var s;const o=l=>l===null?null:JSON.parse(l,void 0),a=(s=n.getItem(i))!=null?s:null;return a instanceof Promise?a.then(o):o(a)},setItem:(i,s)=>n.setItem(i,JSON.stringify(s,void 0)),removeItem:i=>n.removeItem(i)}}const si=e=>t=>{try{const n=e(t);return n instanceof Promise?n:{then(r){return si(r)(n)},catch(r){return this}}}catch(n){return{then(r){return this},catch(r){return si(r)(n)}}}},k1=(e,t)=>(n,r,i)=>{let s={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:w=>w,version:0,merge:(w,p)=>({...p,...w}),...t},o=!1;const a=new Set,l=new Set;let u;try{u=s.getStorage()}catch{}if(!u)return e((...w)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),n(...w)},r,i);const c=si(s.serialize),d=()=>{const w=s.partialize({...r()});let p;const h=c({state:w,version:s.version}).then(g=>u.setItem(s.name,g)).catch(g=>{p=g});if(p)throw p;return h},f=i.setState;i.setState=(w,p)=>{f(w,p),d()};const y=e((...w)=>{n(...w),d()},r,i);let v;const x=()=>{var w;if(!u)return;o=!1,a.forEach(h=>h(r()));const p=((w=s.onRehydrateStorage)==null?void 0:w.call(s,r()))||void 0;return si(u.getItem.bind(u))(s.name).then(h=>{if(h)return s.deserialize(h)}).then(h=>{if(h)if(typeof h.version=="number"&&h.version!==s.version){if(s.migrate)return s.migrate(h.state,h.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return h.state}).then(h=>{var g;return v=s.merge(h,(g=r())!=null?g:y),n(v,!0),d()}).then(()=>{p==null||p(v,void 0),o=!0,l.forEach(h=>h(v))}).catch(h=>{p==null||p(void 0,h)})};return i.persist={setOptions:w=>{s={...s,...w},w.getStorage&&(u=w.getStorage())},clearStorage:()=>{u==null||u.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>x(),hasHydrated:()=>o,onHydrate:w=>(a.add(w),()=>{a.delete(w)}),onFinishHydration:w=>(l.add(w),()=>{l.delete(w)})},x(),v||y},P1=(e,t)=>(n,r,i)=>{let s={storage:C1(()=>localStorage),partialize:x=>x,version:0,merge:(x,w)=>({...w,...x}),...t},o=!1;const a=new Set,l=new Set;let u=s.storage;if(!u)return e((...x)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),n(...x)},r,i);const c=()=>{const x=s.partialize({...r()});return u.setItem(s.name,{state:x,version:s.version})},d=i.setState;i.setState=(x,w)=>{d(x,w),c()};const f=e((...x)=>{n(...x),c()},r,i);i.getInitialState=()=>f;let y;const v=()=>{var x,w;if(!u)return;o=!1,a.forEach(h=>{var g;return h((g=r())!=null?g:f)});const p=((w=s.onRehydrateStorage)==null?void 0:w.call(s,(x=r())!=null?x:f))||void 0;return si(u.getItem.bind(u))(s.name).then(h=>{if(h)if(typeof h.version=="number"&&h.version!==s.version){if(s.migrate)return[!0,s.migrate(h.state,h.version)];console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,h.state];return[!1,void 0]}).then(h=>{var g;const[C,P]=h;if(y=s.merge(P,(g=r())!=null?g:f),n(y,!0),C)return c()}).then(()=>{p==null||p(y,void 0),y=r(),o=!0,l.forEach(h=>h(y))}).catch(h=>{p==null||p(void 0,h)})};return i.persist={setOptions:x=>{s={...s,...x},x.storage&&(u=x.storage)},clearStorage:()=>{u==null||u.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>v(),hasHydrated:()=>o,onHydrate:x=>(a.add(x),()=>{a.delete(x)}),onFinishHydration:x=>(l.add(x),()=>{l.delete(x)})},s.skipHydration||v(),y||f},E1=(e,t)=>"getStorage"in t||"serialize"in t||"deserialize"in t?((S1?"production":void 0)!=="production"&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),k1(e,t)):P1(e,t),hm=E1,pm=fm()(hm(e=>({nickname:"",theme:"dark",sidebarOpen:!0,currentLevelId:null,currentLessonId:null,promptLibraryFavorites:[],claudeMdContent:`# My Project

## 概要
[プロジェクトの説明を3行以内で]

## 技術スタック
- Frontend: React, TypeScript, Tailwind CSS
- Backend: Node.js, Express
- DB: PostgreSQL

## よく使うコマンド
\`\`\`bash
npm run dev    # 開発サーバー起動
npm run test   # テスト実行
\`\`\`

## コーディングルール
- TypeScript の any 型は禁止
- コメントは日本語で
- コンポーネントは200行以内

## 禁止事項
- 本番DBへの直接操作
- APIキーのハードコード
`,setNickname:t=>e({nickname:t}),setTheme:t=>{e({theme:t}),t==="dark"?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},toggleSidebar:()=>e(t=>({sidebarOpen:!t.sidebarOpen})),setSidebarOpen:t=>e({sidebarOpen:t}),setCurrentLesson:(t,n)=>e({currentLevelId:t,currentLessonId:n}),togglePromptFavorite:t=>e(n=>({promptLibraryFavorites:n.promptLibraryFavorites.includes(t)?n.promptLibraryFavorites.filter(r=>r!==t):[...n.promptLibraryFavorites,t]})),setClaudeMdContent:t=>e({claudeMdContent:t})}),{name:"claude-academy-user"})),yd={0:{levelId:0,unlocked:!0,completed:!1,lessonsProgress:{}},1:{levelId:1,unlocked:!1,completed:!1,lessonsProgress:{}},2:{levelId:2,unlocked:!1,completed:!1,lessonsProgress:{}},3:{levelId:3,unlocked:!1,completed:!1,lessonsProgress:{}},4:{levelId:4,unlocked:!1,completed:!1,lessonsProgress:{}},5:{levelId:5,unlocked:!1,completed:!1,lessonsProgress:{}},6:{levelId:6,unlocked:!1,completed:!1,lessonsProgress:{}},7:{levelId:7,unlocked:!1,completed:!1,lessonsProgress:{}}},mm=fm()(hm((e,t)=>({levels:yd,badges:[],totalStudyMinutes:0,currentStreak:0,lastStudyDate:null,completeLesson:(n,r,i)=>{e(s=>{const o=s.levels[n]??{levelId:n,unlocked:!0,completed:!1,lessonsProgress:{}},a={...o,lessonsProgress:{...o.lessonsProgress,[r]:{lessonId:r,completed:!0,quizScore:i,completedAt:new Date().toISOString()}}},l={...s.levels,[n]:a};return Object.values(a.lessonsProgress).filter(c=>c.completed).length>=1&&l[n+1]&&(l[n+1]={...l[n+1],unlocked:!0}),{levels:l}})},unlockLevel:n=>{e(r=>({levels:{...r.levels,[n]:{...r.levels[n]??{levelId:n,completed:!1,lessonsProgress:{}},unlocked:!0}}}))},addBadge:n=>{e(r=>({badges:[...r.badges,{...n,earnedAt:new Date().toISOString()}]}))},addStudyTime:n=>{const r=new Date().toDateString();e(i=>{const s=i.lastStudyDate===new Date(Date.now()-864e5).toDateString();return{totalStudyMinutes:i.totalStudyMinutes+n,lastStudyDate:r,currentStreak:i.lastStudyDate===r?i.currentStreak:s?i.currentStreak+1:1}})},isLessonCompleted:(n,r)=>{var s;const i=t().levels[n];return((s=i==null?void 0:i.lessonsProgress[r])==null?void 0:s.completed)??!1},isLevelCompleted:n=>{var r;return((r=t().levels[n])==null?void 0:r.completed)??!1},getLevelProgress:n=>{const r=t().levels[n];if(!r)return 0;const i=Object.values(r.lessonsProgress).filter(o=>o.completed).length,s=Object.keys(r.lessonsProgress).length;return s===0?0:Math.round(i/s*100)},resetProgress:()=>{e({levels:yd,badges:[],totalStudyMinutes:0,currentStreak:0,lastStudyDate:null})}}),{name:"claude-academy-progress"}));function T1(){const{theme:e,setTheme:t,toggleSidebar:n,sidebarOpen:r}=pm(),{totalStudyMinutes:i,currentStreak:s}=mm(),o=sr(),a=[{to:"/",label:"ホーム"},{to:"/roadmap",label:"ロードマップ"},{to:"/sns-tools",label:"SNS活用"},{to:"/academy",label:"Academy"},{to:"/prompts",label:"プロンプト集"},{to:"/community",label:"コミュニティ"}];return m.jsx("header",{className:"sticky top-0 z-50 bg-gray-950/90 backdrop-blur-sm border-b border-gray-800",children:m.jsxs("div",{className:"flex items-center justify-between h-14 px-4",children:[m.jsxs("div",{className:"flex items-center gap-3",children:[m.jsx("button",{onClick:n,className:"p-2 rounded-lg hover:bg-gray-800 transition-colors","aria-label":r?"サイドバーを閉じる":"サイドバーを開く",children:r?m.jsx(tl,{size:20}):m.jsx(zx,{size:20})}),m.jsxs(ii,{to:"/",className:"flex items-center gap-2",children:[m.jsx("div",{className:"w-7 h-7 bg-gradient-to-br from-brand-500 to-purple-600 rounded-lg flex items-center justify-center",children:m.jsx(pu,{size:14,className:"text-white"})}),m.jsxs("span",{className:"font-bold text-white hidden sm:block",children:["Claude Code ",m.jsx("span",{className:"text-brand-400",children:"Academy"})]})]})]}),m.jsx("nav",{className:"hidden lg:flex items-center gap-1",children:a.map(l=>m.jsx(ii,{to:l.to,className:`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${o.pathname===l.to?"bg-brand-500/20 text-brand-400":"text-gray-400 hover:text-white hover:bg-gray-800"}`,children:l.label},l.to))}),m.jsxs("div",{className:"flex items-center gap-3",children:[m.jsxs("div",{className:"hidden md:flex items-center gap-3 text-xs text-gray-400",children:[m.jsxs("div",{className:"flex items-center gap-1",children:[m.jsx(Nx,{size:14,className:"text-brand-400"}),m.jsxs("span",{children:[Math.round(i/60),"h"]})]}),s>0&&m.jsxs("div",{className:"flex items-center gap-1",children:[m.jsx("span",{children:"🔥"}),m.jsxs("span",{children:[s,"日連続"]})]})]}),m.jsx("button",{onClick:()=>t(e==="dark"?"light":"dark"),className:"p-2 rounded-lg hover:bg-gray-800 transition-colors text-gray-400 hover:text-white","aria-label":"テーマ切り替え",children:e==="dark"?m.jsx(Kx,{size:18}):m.jsx(Bx,{size:18})})]})]})})}const mu=S.createContext({});function gu(e){const t=S.useRef(null);return t.current===null&&(t.current=e()),t.current}const ao=S.createContext(null),yu=S.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class j1 extends S.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function L1({children:e,isPresent:t}){const n=S.useId(),r=S.useRef(null),i=S.useRef({width:0,height:0,top:0,left:0}),{nonce:s}=S.useContext(yu);return S.useInsertionEffect(()=>{const{width:o,height:a,top:l,left:u}=i.current;if(t||!r.current||!o||!a)return;r.current.dataset.motionPopId=n;const c=document.createElement("style");return s&&(c.nonce=s),document.head.appendChild(c),c.sheet&&c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${u}px !important;
          }
        `),()=>{document.head.removeChild(c)}},[t]),m.jsx(j1,{isPresent:t,childRef:r,sizeRef:i,children:S.cloneElement(e,{ref:r})})}const A1=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:s,mode:o})=>{const a=gu(M1),l=S.useId(),u=S.useCallback(d=>{a.set(d,!0);for(const f of a.values())if(!f)return;r&&r()},[a,r]),c=S.useMemo(()=>({id:l,initial:t,isPresent:n,custom:i,onExitComplete:u,register:d=>(a.set(d,!1),()=>a.delete(d))}),s?[Math.random(),u]:[n,u]);return S.useMemo(()=>{a.forEach((d,f)=>a.set(f,!1))},[n]),S.useEffect(()=>{!n&&!a.size&&r&&r()},[n]),o==="popLayout"&&(e=m.jsx(L1,{isPresent:n,children:e})),m.jsx(ao.Provider,{value:c,children:e})};function M1(){return new Map}function gm(e=!0){const t=S.useContext(ao);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=t,s=S.useId();S.useEffect(()=>{e&&i(s)},[e]);const o=S.useCallback(()=>e&&r&&r(s),[s,r,e]);return!n&&r?[!1,o]:[!0]}const Ui=e=>e.key||"";function vd(e){const t=[];return S.Children.forEach(e,n=>{S.isValidElement(n)&&t.push(n)}),t}const vu=typeof window<"u",ym=vu?S.useLayoutEffect:S.useEffect,is=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:s="sync",propagate:o=!1})=>{const[a,l]=gm(o),u=S.useMemo(()=>vd(e),[e]),c=o&&!a?[]:u.map(Ui),d=S.useRef(!0),f=S.useRef(u),y=gu(()=>new Map),[v,x]=S.useState(u),[w,p]=S.useState(u);ym(()=>{d.current=!1,f.current=u;for(let C=0;C<w.length;C++){const P=Ui(w[C]);c.includes(P)?y.delete(P):y.get(P)!==!0&&y.set(P,!1)}},[w,c.length,c.join("-")]);const h=[];if(u!==v){let C=[...u];for(let P=0;P<w.length;P++){const k=w[P],T=Ui(k);c.includes(T)||(C.splice(P,0,k),h.push(k))}s==="wait"&&h.length&&(C=h),p(vd(C)),x(u);return}const{forceRender:g}=S.useContext(mu);return m.jsx(m.Fragment,{children:w.map(C=>{const P=Ui(C),k=o&&!a?!1:u===w||c.includes(P),T=()=>{if(y.has(P))y.set(P,!0);else return;let E=!0;y.forEach(D=>{D||(E=!1)}),E&&(g==null||g(),p(f.current),o&&(l==null||l()),r&&r())};return m.jsx(A1,{isPresent:k,initial:!d.current||n?void 0:!1,custom:k?void 0:t,presenceAffectsLayout:i,mode:s,onExitComplete:k?void 0:T,children:C},P)})})},Ne=e=>e;let vm=Ne;function xu(e){let t;return()=>(t===void 0&&(t=e()),t)}const Zn=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},dt=e=>e*1e3,ft=e=>e/1e3,N1={useManualTiming:!1};function R1(e){let t=new Set,n=new Set,r=!1,i=!1;const s=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function a(u){s.has(u)&&(l.schedule(u),e()),u(o)}const l={schedule:(u,c=!1,d=!1)=>{const y=d&&r?t:n;return c&&s.add(u),y.has(u)||y.add(u),u},cancel:u=>{n.delete(u),s.delete(u)},process:u=>{if(o=u,r){i=!0;return}r=!0,[t,n]=[n,t],t.forEach(a),t.clear(),r=!1,i&&(i=!1,l.process(u))}};return l}const $i=["read","resolveKeyframes","update","preRender","render","postRender"],D1=40;function xm(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=$i.reduce((p,h)=>(p[h]=R1(s),p),{}),{read:a,resolveKeyframes:l,update:u,preRender:c,render:d,postRender:f}=o,y=()=>{const p=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(p-i.timestamp,D1),1),i.timestamp=p,i.isProcessing=!0,a.process(i),l.process(i),u.process(i),c.process(i),d.process(i),f.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(y))},v=()=>{n=!0,r=!0,i.isProcessing||e(y)};return{schedule:$i.reduce((p,h)=>{const g=o[h];return p[h]=(C,P=!1,k=!1)=>(n||v(),g.schedule(C,P,k)),p},{}),cancel:p=>{for(let h=0;h<$i.length;h++)o[$i[h]].cancel(p)},state:i,steps:o}}const{schedule:B,cancel:zt,state:ue,steps:Wo}=xm(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ne,!0),wm=S.createContext({strict:!1}),xd={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Jn={};for(const e in xd)Jn[e]={isEnabled:t=>xd[e].some(n=>!!t[n])};function _1(e){for(const t in e)Jn[t]={...Jn[t],...e[t]}}const I1=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function _s(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||I1.has(e)}let Sm=e=>!_s(e);function V1(e){e&&(Sm=t=>t.startsWith("on")?!_s(t):e(t))}try{V1(require("@emotion/is-prop-valid").default)}catch{}function O1(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(Sm(i)||n===!0&&_s(i)||!t&&!_s(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function b1(e){if(typeof Proxy>"u")return e;const t=new Map,n=(...r)=>e(...r);return new Proxy(n,{get:(r,i)=>i==="create"?e:(t.has(i)||t.set(i,e(i)),t.get(i))})}const lo=S.createContext({});function oi(e){return typeof e=="string"||Array.isArray(e)}function uo(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const wu=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Su=["initial",...wu];function co(e){return uo(e.animate)||Su.some(t=>oi(e[t]))}function Cm(e){return!!(co(e)||e.variants)}function F1(e,t){if(co(e)){const{initial:n,animate:r}=e;return{initial:n===!1||oi(n)?n:void 0,animate:oi(r)?r:void 0}}return e.inherit!==!1?t:{}}function z1(e){const{initial:t,animate:n}=F1(e,S.useContext(lo));return S.useMemo(()=>({initial:t,animate:n}),[wd(t),wd(n)])}function wd(e){return Array.isArray(e)?e.join(" "):e}const B1=Symbol.for("motionComponentSymbol");function Rn(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function U1(e,t,n){return S.useCallback(r=>{r&&e.onMount&&e.onMount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):Rn(n)&&(n.current=r))},[t])}const Cu=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),$1="framerAppearId",km="data-"+Cu($1),{schedule:ku}=xm(queueMicrotask,!1),Pm=S.createContext({});function W1(e,t,n,r,i){var s,o;const{visualElement:a}=S.useContext(lo),l=S.useContext(wm),u=S.useContext(ao),c=S.useContext(yu).reducedMotion,d=S.useRef(null);r=r||l.renderer,!d.current&&r&&(d.current=r(e,{visualState:t,parent:a,props:n,presenceContext:u,blockInitialAnimation:u?u.initial===!1:!1,reducedMotionConfig:c}));const f=d.current,y=S.useContext(Pm);f&&!f.projection&&i&&(f.type==="html"||f.type==="svg")&&H1(d.current,n,i,y);const v=S.useRef(!1);S.useInsertionEffect(()=>{f&&v.current&&f.update(n,u)});const x=n[km],w=S.useRef(!!x&&!(!((s=window.MotionHandoffIsComplete)===null||s===void 0)&&s.call(window,x))&&((o=window.MotionHasOptimisedAnimation)===null||o===void 0?void 0:o.call(window,x)));return ym(()=>{f&&(v.current=!0,window.MotionIsMounted=!0,f.updateFeatures(),ku.render(f.render),w.current&&f.animationState&&f.animationState.animateChanges())}),S.useEffect(()=>{f&&(!w.current&&f.animationState&&f.animationState.animateChanges(),w.current&&(queueMicrotask(()=>{var p;(p=window.MotionHandoffMarkAsComplete)===null||p===void 0||p.call(window,x)}),w.current=!1))}),f}function H1(e,t,n,r){const{layoutId:i,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:u}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:Em(e.parent)),e.projection.setOptions({layoutId:i,layout:s,alwaysMeasureLayout:!!o||a&&Rn(a),visualElement:e,animationType:typeof s=="string"?s:"both",initialPromotionConfig:r,layoutScroll:l,layoutRoot:u})}function Em(e){if(e)return e.options.allowProjection!==!1?e.projection:Em(e.parent)}function K1({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){var s,o;e&&_1(e);function a(u,c){let d;const f={...S.useContext(yu),...u,layoutId:G1(u)},{isStatic:y}=f,v=z1(u),x=r(u,y);if(!y&&vu){X1();const w=Q1(f);d=w.MeasureLayout,v.visualElement=W1(i,x,f,t,w.ProjectionNode)}return m.jsxs(lo.Provider,{value:v,children:[d&&v.visualElement?m.jsx(d,{visualElement:v.visualElement,...f}):null,n(i,u,U1(x,v.visualElement,c),x,y,v.visualElement)]})}a.displayName=`motion.${typeof i=="string"?i:`create(${(o=(s=i.displayName)!==null&&s!==void 0?s:i.name)!==null&&o!==void 0?o:""})`}`;const l=S.forwardRef(a);return l[B1]=i,l}function G1({layoutId:e}){const t=S.useContext(mu).id;return t&&e!==void 0?t+"-"+e:e}function X1(e,t){S.useContext(wm).strict}function Q1(e){const{drag:t,layout:n}=Jn;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const Y1=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Pu(e){return typeof e!="string"||e.includes("-")?!1:!!(Y1.indexOf(e)>-1||/[A-Z]/u.test(e))}function Sd(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function Eu(e,t,n,r){if(typeof t=="function"){const[i,s]=Sd(r);t=t(n!==void 0?n:e.custom,i,s)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,s]=Sd(r);t=t(n!==void 0?n:e.custom,i,s)}return t}const nl=e=>Array.isArray(e),q1=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),Z1=e=>nl(e)?e[e.length-1]||0:e,ge=e=>!!(e&&e.getVelocity);function ss(e){const t=ge(e)?e.get():e;return q1(t)?t.toValue():t}function J1({scrapeMotionValuesFromProps:e,createRenderState:t,onUpdate:n},r,i,s){const o={latestValues:ew(r,i,s,e),renderState:t()};return n&&(o.onMount=a=>n({props:r,current:a,...o}),o.onUpdate=a=>n(a)),o}const Tm=e=>(t,n)=>{const r=S.useContext(lo),i=S.useContext(ao),s=()=>J1(e,t,r,i);return n?s():gu(s)};function ew(e,t,n,r){const i={},s=r(e,{});for(const f in s)i[f]=ss(s[f]);let{initial:o,animate:a}=e;const l=co(e),u=Cm(e);t&&u&&!l&&e.inherit!==!1&&(o===void 0&&(o=t.initial),a===void 0&&(a=t.animate));let c=n?n.initial===!1:!1;c=c||o===!1;const d=c?a:o;if(d&&typeof d!="boolean"&&!uo(d)){const f=Array.isArray(d)?d:[d];for(let y=0;y<f.length;y++){const v=Eu(e,f[y]);if(v){const{transitionEnd:x,transition:w,...p}=v;for(const h in p){let g=p[h];if(Array.isArray(g)){const C=c?g.length-1:0;g=g[C]}g!==null&&(i[h]=g)}for(const h in x)i[h]=x[h]}}}return i}const or=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],yn=new Set(or),jm=e=>t=>typeof t=="string"&&t.startsWith(e),Lm=jm("--"),tw=jm("var(--"),Tu=e=>tw(e)?nw.test(e.split("/*")[0].trim()):!1,nw=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Am=(e,t)=>t&&typeof e=="number"?t.transform(e):e,yt=(e,t,n)=>n>t?t:n<e?e:n,ar={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},ai={...ar,transform:e=>yt(0,1,e)},Wi={...ar,default:1},vi=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),St=vi("deg"),it=vi("%"),N=vi("px"),rw=vi("vh"),iw=vi("vw"),Cd={...it,parse:e=>it.parse(e)/100,transform:e=>it.transform(e*100)},sw={borderWidth:N,borderTopWidth:N,borderRightWidth:N,borderBottomWidth:N,borderLeftWidth:N,borderRadius:N,radius:N,borderTopLeftRadius:N,borderTopRightRadius:N,borderBottomRightRadius:N,borderBottomLeftRadius:N,width:N,maxWidth:N,height:N,maxHeight:N,top:N,right:N,bottom:N,left:N,padding:N,paddingTop:N,paddingRight:N,paddingBottom:N,paddingLeft:N,margin:N,marginTop:N,marginRight:N,marginBottom:N,marginLeft:N,backgroundPositionX:N,backgroundPositionY:N},ow={rotate:St,rotateX:St,rotateY:St,rotateZ:St,scale:Wi,scaleX:Wi,scaleY:Wi,scaleZ:Wi,skew:St,skewX:St,skewY:St,distance:N,translateX:N,translateY:N,translateZ:N,x:N,y:N,z:N,perspective:N,transformPerspective:N,opacity:ai,originX:Cd,originY:Cd,originZ:N},kd={...ar,transform:Math.round},ju={...sw,...ow,zIndex:kd,size:N,fillOpacity:ai,strokeOpacity:ai,numOctaves:kd},aw={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},lw=or.length;function uw(e,t,n){let r="",i=!0;for(let s=0;s<lw;s++){const o=or[s],a=e[o];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(o.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const u=Am(a,ju[o]);if(!l){i=!1;const c=aw[o]||o;r+=`${c}(${u}) `}n&&(t[o]=u)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function Lu(e,t,n){const{style:r,vars:i,transformOrigin:s}=e;let o=!1,a=!1;for(const l in t){const u=t[l];if(yn.has(l)){o=!0;continue}else if(Lm(l)){i[l]=u;continue}else{const c=Am(u,ju[l]);l.startsWith("origin")?(a=!0,s[l]=c):r[l]=c}}if(t.transform||(o||n?r.transform=uw(t,e.transform,n):r.transform&&(r.transform="none")),a){const{originX:l="50%",originY:u="50%",originZ:c=0}=s;r.transformOrigin=`${l} ${u} ${c}`}}const cw={offset:"stroke-dashoffset",array:"stroke-dasharray"},dw={offset:"strokeDashoffset",array:"strokeDasharray"};function fw(e,t,n=1,r=0,i=!0){e.pathLength=1;const s=i?cw:dw;e[s.offset]=N.transform(-r);const o=N.transform(t),a=N.transform(n);e[s.array]=`${o} ${a}`}function Pd(e,t,n){return typeof e=="string"?e:N.transform(t+n*e)}function hw(e,t,n){const r=Pd(t,e.x,e.width),i=Pd(n,e.y,e.height);return`${r} ${i}`}function Au(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:s,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...u},c,d){if(Lu(e,u,d),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:f,style:y,dimensions:v}=e;f.transform&&(v&&(y.transform=f.transform),delete f.transform),v&&(i!==void 0||s!==void 0||y.transform)&&(y.transformOrigin=hw(v,i!==void 0?i:.5,s!==void 0?s:.5)),t!==void 0&&(f.x=t),n!==void 0&&(f.y=n),r!==void 0&&(f.scale=r),o!==void 0&&fw(f,o,a,l,!1)}const Mu=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),Mm=()=>({...Mu(),attrs:{}}),Nu=e=>typeof e=="string"&&e.toLowerCase()==="svg";function Nm(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const s in n)e.style.setProperty(s,n[s])}const Rm=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Dm(e,t,n,r){Nm(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(Rm.has(i)?i:Cu(i),t.attrs[i])}const Is={};function pw(e){Object.assign(Is,e)}function _m(e,{layout:t,layoutId:n}){return yn.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Is[e]||e==="opacity")}function Ru(e,t,n){var r;const{style:i}=e,s={};for(const o in i)(ge(i[o])||t.style&&ge(t.style[o])||_m(o,e)||((r=n==null?void 0:n.getValue(o))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(s[o]=i[o]);return s}function Im(e,t,n){const r=Ru(e,t,n);for(const i in e)if(ge(e[i])||ge(t[i])){const s=or.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[s]=e[i]}return r}function mw(e,t){try{t.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{t.dimensions={x:0,y:0,width:0,height:0}}}const Ed=["x","y","width","height","cx","cy","r"],gw={useVisualState:Tm({scrapeMotionValuesFromProps:Im,createRenderState:Mm,onUpdate:({props:e,prevProps:t,current:n,renderState:r,latestValues:i})=>{if(!n)return;let s=!!e.drag;if(!s){for(const a in i)if(yn.has(a)){s=!0;break}}if(!s)return;let o=!t;if(t)for(let a=0;a<Ed.length;a++){const l=Ed[a];e[l]!==t[l]&&(o=!0)}o&&B.read(()=>{mw(n,r),B.render(()=>{Au(r,i,Nu(n.tagName),e.transformTemplate),Dm(n,r)})})}})},yw={useVisualState:Tm({scrapeMotionValuesFromProps:Ru,createRenderState:Mu})};function Vm(e,t,n){for(const r in t)!ge(t[r])&&!_m(r,n)&&(e[r]=t[r])}function vw({transformTemplate:e},t){return S.useMemo(()=>{const n=Mu();return Lu(n,t,e),Object.assign({},n.vars,n.style)},[t])}function xw(e,t){const n=e.style||{},r={};return Vm(r,n,e),Object.assign(r,vw(e,t)),r}function ww(e,t){const n={},r=xw(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}function Sw(e,t,n,r){const i=S.useMemo(()=>{const s=Mm();return Au(s,t,Nu(r),e.transformTemplate),{...s.attrs,style:{...s.style}}},[t]);if(e.style){const s={};Vm(s,e.style,e),i.style={...s,...i.style}}return i}function Cw(e=!1){return(n,r,i,{latestValues:s},o)=>{const l=(Pu(n)?Sw:ww)(r,s,o,n),u=O1(r,typeof n=="string",e),c=n!==S.Fragment?{...u,...l,ref:i}:{},{children:d}=r,f=S.useMemo(()=>ge(d)?d.get():d,[d]);return S.createElement(n,{...c,children:f})}}function kw(e,t){return function(r,{forwardMotionProps:i}={forwardMotionProps:!1}){const o={...Pu(r)?gw:yw,preloadedFeatures:e,useRender:Cw(i),createVisualElement:t,Component:r};return K1(o)}}function Om(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function fo(e,t,n){const r=e.getProps();return Eu(r,t,n!==void 0?n:r.custom,e)}const Pw=xu(()=>window.ScrollTimeline!==void 0);class Ew{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}get finished(){return Promise.all(this.animations.map(t=>"finished"in t?t.finished:t))}getAll(t){return this.animations[0][t]}setAll(t,n){for(let r=0;r<this.animations.length;r++)this.animations[r][t]=n}attachTimeline(t,n){const r=this.animations.map(i=>{if(Pw()&&i.attachTimeline)return i.attachTimeline(t);if(typeof n=="function")return n(i)});return()=>{r.forEach((i,s)=>{i&&i(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let n=0;n<this.animations.length;n++)t=Math.max(t,this.animations[n].duration);return t}runAll(t){this.animations.forEach(n=>n[t]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class Tw extends Ew{then(t,n){return Promise.all(this.animations).then(t).catch(n)}}function Du(e,t){return e?e[t]||e.default||e:void 0}const rl=2e4;function bm(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<rl;)t+=n,r=e.next(t);return t>=rl?1/0:t}function _u(e){return typeof e=="function"}function Td(e,t){e.timeline=t,e.onfinish=null}const Iu=e=>Array.isArray(e)&&typeof e[0]=="number",jw={linearEasing:void 0};function Lw(e,t){const n=xu(e);return()=>{var r;return(r=jw[t])!==null&&r!==void 0?r:n()}}const Vs=Lw(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Fm=(e,t,n=10)=>{let r="";const i=Math.max(Math.round(t/n),2);for(let s=0;s<i;s++)r+=e(Zn(0,i-1,s))+", ";return`linear(${r.substring(0,r.length-2)})`};function zm(e){return!!(typeof e=="function"&&Vs()||!e||typeof e=="string"&&(e in il||Vs())||Iu(e)||Array.isArray(e)&&e.every(zm))}const kr=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,il={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:kr([0,.65,.55,1]),circOut:kr([.55,0,1,.45]),backIn:kr([.31,.01,.66,-.59]),backOut:kr([.33,1.53,.69,.99])};function Bm(e,t){if(e)return typeof e=="function"&&Vs()?Fm(e,t):Iu(e)?kr(e):Array.isArray(e)?e.map(n=>Bm(n,t)||il.easeOut):il[e]}const He={x:!1,y:!1};function Um(){return He.x||He.y}function Aw(e,t,n){var r;if(e instanceof Element)return[e];if(typeof e=="string"){let i=document;const s=(r=void 0)!==null&&r!==void 0?r:i.querySelectorAll(e);return s?Array.from(s):[]}return Array.from(e)}function $m(e,t){const n=Aw(e),r=new AbortController,i={passive:!0,...t,signal:r.signal};return[n,i,()=>r.abort()]}function jd(e){return t=>{t.pointerType==="touch"||Um()||e(t)}}function Mw(e,t,n={}){const[r,i,s]=$m(e,n),o=jd(a=>{const{target:l}=a,u=t(a);if(typeof u!="function"||!l)return;const c=jd(d=>{u(d),l.removeEventListener("pointerleave",c)});l.addEventListener("pointerleave",c,i)});return r.forEach(a=>{a.addEventListener("pointerenter",o,i)}),s}const Wm=(e,t)=>t?e===t?!0:Wm(e,t.parentElement):!1,Vu=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,Nw=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Rw(e){return Nw.has(e.tagName)||e.tabIndex!==-1}const Pr=new WeakSet;function Ld(e){return t=>{t.key==="Enter"&&e(t)}}function Ho(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const Dw=(e,t)=>{const n=e.currentTarget;if(!n)return;const r=Ld(()=>{if(Pr.has(n))return;Ho(n,"down");const i=Ld(()=>{Ho(n,"up")}),s=()=>Ho(n,"cancel");n.addEventListener("keyup",i,t),n.addEventListener("blur",s,t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)};function Ad(e){return Vu(e)&&!Um()}function _w(e,t,n={}){const[r,i,s]=$m(e,n),o=a=>{const l=a.currentTarget;if(!Ad(a)||Pr.has(l))return;Pr.add(l);const u=t(a),c=(y,v)=>{window.removeEventListener("pointerup",d),window.removeEventListener("pointercancel",f),!(!Ad(y)||!Pr.has(l))&&(Pr.delete(l),typeof u=="function"&&u(y,{success:v}))},d=y=>{c(y,n.useGlobalTarget||Wm(l,y.target))},f=y=>{c(y,!1)};window.addEventListener("pointerup",d,i),window.addEventListener("pointercancel",f,i)};return r.forEach(a=>{!Rw(a)&&a.getAttribute("tabindex")===null&&(a.tabIndex=0),(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,i),a.addEventListener("focus",u=>Dw(u,i),i)}),s}function Iw(e){return e==="x"||e==="y"?He[e]?null:(He[e]=!0,()=>{He[e]=!1}):He.x||He.y?null:(He.x=He.y=!0,()=>{He.x=He.y=!1})}const Hm=new Set(["width","height","top","left","right","bottom",...or]);let os;function Vw(){os=void 0}const st={now:()=>(os===void 0&&st.set(ue.isProcessing||N1.useManualTiming?ue.timestamp:performance.now()),os),set:e=>{os=e,queueMicrotask(Vw)}};function Ou(e,t){e.indexOf(t)===-1&&e.push(t)}function bu(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Fu{constructor(){this.subscriptions=[]}add(t){return Ou(this.subscriptions,t),()=>bu(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let s=0;s<i;s++){const o=this.subscriptions[s];o&&o(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function Km(e,t){return t?e*(1e3/t):0}const Md=30,Ow=e=>!isNaN(parseFloat(e));class bw{constructor(t,n={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,i=!0)=>{const s=st.now();this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=st.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=Ow(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Fu);const r=this.events[t].add(n);return t==="change"?()=>{r(),B.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=st.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>Md)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Md);return Km(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function li(e,t){return new bw(e,t)}function Fw(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,li(n))}function zw(e,t){const n=fo(e,t);let{transitionEnd:r={},transition:i={},...s}=n||{};s={...s,...r};for(const o in s){const a=Z1(s[o]);Fw(e,o,a)}}function Bw(e){return!!(ge(e)&&e.add)}function sl(e,t){const n=e.getValue("willChange");if(Bw(n))return n.add(t)}function Gm(e){return e.props[km]}const Xm=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,Uw=1e-7,$w=12;function Ww(e,t,n,r,i){let s,o,a=0;do o=t+(n-t)/2,s=Xm(o,r,i)-e,s>0?n=o:t=o;while(Math.abs(s)>Uw&&++a<$w);return o}function xi(e,t,n,r){if(e===t&&n===r)return Ne;const i=s=>Ww(s,0,1,e,n);return s=>s===0||s===1?s:Xm(i(s),t,r)}const Qm=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Ym=e=>t=>1-e(1-t),qm=xi(.33,1.53,.69,.99),zu=Ym(qm),Zm=Qm(zu),Jm=e=>(e*=2)<1?.5*zu(e):.5*(2-Math.pow(2,-10*(e-1))),Bu=e=>1-Math.sin(Math.acos(e)),eg=Ym(Bu),tg=Qm(Bu),ng=e=>/^0[^.\s]+$/u.test(e);function Hw(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||ng(e):!0}const Ir=e=>Math.round(e*1e5)/1e5,Uu=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Kw(e){return e==null}const Gw=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,$u=(e,t)=>n=>!!(typeof n=="string"&&Gw.test(n)&&n.startsWith(e)||t&&!Kw(n)&&Object.prototype.hasOwnProperty.call(n,t)),rg=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,s,o,a]=r.match(Uu);return{[e]:parseFloat(i),[t]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},Xw=e=>yt(0,255,e),Ko={...ar,transform:e=>Math.round(Xw(e))},on={test:$u("rgb","red"),parse:rg("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Ko.transform(e)+", "+Ko.transform(t)+", "+Ko.transform(n)+", "+Ir(ai.transform(r))+")"};function Qw(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const ol={test:$u("#"),parse:Qw,transform:on.transform},Dn={test:$u("hsl","hue"),parse:rg("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+it.transform(Ir(t))+", "+it.transform(Ir(n))+", "+Ir(ai.transform(r))+")"},pe={test:e=>on.test(e)||ol.test(e)||Dn.test(e),parse:e=>on.test(e)?on.parse(e):Dn.test(e)?Dn.parse(e):ol.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?on.transform(e):Dn.transform(e)},Yw=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function qw(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(Uu))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(Yw))===null||n===void 0?void 0:n.length)||0)>0}const ig="number",sg="color",Zw="var",Jw="var(",Nd="${}",eS=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ui(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let s=0;const a=t.replace(eS,l=>(pe.test(l)?(r.color.push(s),i.push(sg),n.push(pe.parse(l))):l.startsWith(Jw)?(r.var.push(s),i.push(Zw),n.push(l)):(r.number.push(s),i.push(ig),n.push(parseFloat(l))),++s,Nd)).split(Nd);return{values:n,split:a,indexes:r,types:i}}function og(e){return ui(e).values}function ag(e){const{split:t,types:n}=ui(e),r=t.length;return i=>{let s="";for(let o=0;o<r;o++)if(s+=t[o],i[o]!==void 0){const a=n[o];a===ig?s+=Ir(i[o]):a===sg?s+=pe.transform(i[o]):s+=i[o]}return s}}const tS=e=>typeof e=="number"?0:e;function nS(e){const t=og(e);return ag(e)(t.map(tS))}const Bt={test:qw,parse:og,createTransformer:ag,getAnimatableNone:nS},rS=new Set(["brightness","contrast","saturate","opacity"]);function iS(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Uu)||[];if(!r)return e;const i=n.replace(r,"");let s=rS.has(t)?1:0;return r!==n&&(s*=100),t+"("+s+i+")"}const sS=/\b([a-z-]*)\(.*?\)/gu,al={...Bt,getAnimatableNone:e=>{const t=e.match(sS);return t?t.map(iS).join(" "):e}},oS={...ju,color:pe,backgroundColor:pe,outlineColor:pe,fill:pe,stroke:pe,borderColor:pe,borderTopColor:pe,borderRightColor:pe,borderBottomColor:pe,borderLeftColor:pe,filter:al,WebkitFilter:al},Wu=e=>oS[e];function lg(e,t){let n=Wu(e);return n!==al&&(n=Bt),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const aS=new Set(["auto","none","0"]);function lS(e,t,n){let r=0,i;for(;r<e.length&&!i;){const s=e[r];typeof s=="string"&&!aS.has(s)&&ui(s).values.length&&(i=e[r]),r++}if(i&&n)for(const s of t)e[s]=lg(n,i)}const Rd=e=>e===ar||e===N,Dd=(e,t)=>parseFloat(e.split(", ")[t]),_d=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/u);if(i)return Dd(i[1],t);{const s=r.match(/^matrix\((.+)\)$/u);return s?Dd(s[1],e):0}},uS=new Set(["x","y","z"]),cS=or.filter(e=>!uS.has(e));function dS(e){const t=[];return cS.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const er={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:_d(4,13),y:_d(5,14)};er.translateX=er.x;er.translateY=er.y;const un=new Set;let ll=!1,ul=!1;function ug(){if(ul){const e=Array.from(un).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=dS(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([s,o])=>{var a;(a=r.getValue(s))===null||a===void 0||a.set(o)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}ul=!1,ll=!1,un.forEach(e=>e.complete()),un.clear()}function cg(){un.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(ul=!0)})}function fS(){cg(),ug()}class Hu{constructor(t,n,r,i,s,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=s,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(un.add(this),ll||(ll=!0,B.read(cg),B.resolveKeyframes(ug))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;for(let s=0;s<t.length;s++)if(t[s]===null)if(s===0){const o=i==null?void 0:i.get(),a=t[t.length-1];if(o!==void 0)t[0]=o;else if(r&&n){const l=r.readValue(n,a);l!=null&&(t[0]=l)}t[0]===void 0&&(t[0]=a),i&&o===void 0&&i.set(t[0])}else t[s]=t[s-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),un.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,un.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const dg=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),hS=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function pS(e){const t=hS.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function fg(e,t,n=1){const[r,i]=pS(e);if(!r)return;const s=window.getComputedStyle(t).getPropertyValue(r);if(s){const o=s.trim();return dg(o)?parseFloat(o):o}return Tu(i)?fg(i,t,n+1):i}const hg=e=>t=>t.test(e),mS={test:e=>e==="auto",parse:e=>e},pg=[ar,N,it,St,iw,rw,mS],Id=e=>pg.find(hg(e));class mg extends Hu{constructor(t,n,r,i,s){super(t,n,r,i,s,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<t.length;l++){let u=t[l];if(typeof u=="string"&&(u=u.trim(),Tu(u))){const c=fg(u,n.current);c!==void 0&&(t[l]=c),l===t.length-1&&(this.finalKeyframe=u)}}if(this.resolveNoneKeyframes(),!Hm.has(r)||t.length!==2)return;const[i,s]=t,o=Id(i),a=Id(s);if(o!==a)if(Rd(o)&&Rd(a))for(let l=0;l<t.length;l++){const u=t[l];typeof u=="string"&&(t[l]=parseFloat(u))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)Hw(t[i])&&r.push(i);r.length&&lS(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=er[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var t;const{element:n,name:r,unresolvedKeyframes:i}=this;if(!n||!n.current)return;const s=n.getValue(r);s&&s.jump(this.measuredOrigin,!1);const o=i.length-1,a=i[o];i[o]=er[r](n.measureViewportBox(),window.getComputedStyle(n.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([l,u])=>{n.getValue(l).set(u)}),this.resolveNoneKeyframes()}}const Vd=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Bt.test(e)||e==="0")&&!e.startsWith("url("));function gS(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function yS(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const s=e[e.length-1],o=Vd(i,t),a=Vd(s,t);return!o||!a?!1:gS(e)||(n==="spring"||_u(n))&&r}const vS=e=>e!==null;function ho(e,{repeat:t,repeatType:n="loop"},r){const i=e.filter(vS),s=t&&n!=="loop"&&t%2===1?0:i.length-1;return!s||r===void 0?i[s]:r}const xS=40;class gg{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:s=0,repeatType:o="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=st.now(),this.options={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:s,repeatType:o,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>xS?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&fS(),this._resolved}onKeyframesResolved(t,n){this.resolvedAt=st.now(),this.hasAttemptedResolve=!0;const{name:r,type:i,velocity:s,delay:o,onComplete:a,onUpdate:l,isGenerator:u}=this.options;if(!u&&!yS(t,r,i,s))if(o)this.options.duration=0;else{l&&l(ho(t,this.options,n)),a&&a(),this.resolveFinishedPromise();return}const c=this.initPlayback(t,n);c!==!1&&(this._resolved={keyframes:t,finalKeyframe:n,...c},this.onPostResolved())}onPostResolved(){}then(t,n){return this.currentFinishedPromise.then(t,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}const W=(e,t,n)=>e+(t-e)*n;function Go(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function wS({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,s=0,o=0;if(!t)i=s=o=n;else{const a=n<.5?n*(1+t):n+t-n*t,l=2*n-a;i=Go(l,a,e+1/3),s=Go(l,a,e),o=Go(l,a,e-1/3)}return{red:Math.round(i*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:r}}function Os(e,t){return n=>n>0?t:e}const Xo=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},SS=[ol,on,Dn],CS=e=>SS.find(t=>t.test(e));function Od(e){const t=CS(e);if(!t)return!1;let n=t.parse(e);return t===Dn&&(n=wS(n)),n}const bd=(e,t)=>{const n=Od(e),r=Od(t);if(!n||!r)return Os(e,t);const i={...n};return s=>(i.red=Xo(n.red,r.red,s),i.green=Xo(n.green,r.green,s),i.blue=Xo(n.blue,r.blue,s),i.alpha=W(n.alpha,r.alpha,s),on.transform(i))},kS=(e,t)=>n=>t(e(n)),wi=(...e)=>e.reduce(kS),cl=new Set(["none","hidden"]);function PS(e,t){return cl.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function ES(e,t){return n=>W(e,t,n)}function Ku(e){return typeof e=="number"?ES:typeof e=="string"?Tu(e)?Os:pe.test(e)?bd:LS:Array.isArray(e)?yg:typeof e=="object"?pe.test(e)?bd:TS:Os}function yg(e,t){const n=[...e],r=n.length,i=e.map((s,o)=>Ku(s)(s,t[o]));return s=>{for(let o=0;o<r;o++)n[o]=i[o](s);return n}}function TS(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Ku(e[i])(e[i],t[i]));return i=>{for(const s in r)n[s]=r[s](i);return n}}function jS(e,t){var n;const r=[],i={color:0,var:0,number:0};for(let s=0;s<t.values.length;s++){const o=t.types[s],a=e.indexes[o][i[o]],l=(n=e.values[a])!==null&&n!==void 0?n:0;r[s]=l,i[o]++}return r}const LS=(e,t)=>{const n=Bt.createTransformer(t),r=ui(e),i=ui(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?cl.has(e)&&!i.values.length||cl.has(t)&&!r.values.length?PS(e,t):wi(yg(jS(r,i),i.values),n):Os(e,t)};function vg(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?W(e,t,n):Ku(e)(e,t)}const AS=5;function xg(e,t,n){const r=Math.max(t-AS,0);return Km(n-e(r),t-r)}const G={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Qo=.001;function MS({duration:e=G.duration,bounce:t=G.bounce,velocity:n=G.velocity,mass:r=G.mass}){let i,s,o=1-t;o=yt(G.minDamping,G.maxDamping,o),e=yt(G.minDuration,G.maxDuration,ft(e)),o<1?(i=u=>{const c=u*o,d=c*e,f=c-n,y=dl(u,o),v=Math.exp(-d);return Qo-f/y*v},s=u=>{const d=u*o*e,f=d*n+n,y=Math.pow(o,2)*Math.pow(u,2)*e,v=Math.exp(-d),x=dl(Math.pow(u,2),o);return(-i(u)+Qo>0?-1:1)*((f-y)*v)/x}):(i=u=>{const c=Math.exp(-u*e),d=(u-n)*e+1;return-Qo+c*d},s=u=>{const c=Math.exp(-u*e),d=(n-u)*(e*e);return c*d});const a=5/e,l=RS(i,s,a);if(e=dt(e),isNaN(l))return{stiffness:G.stiffness,damping:G.damping,duration:e};{const u=Math.pow(l,2)*r;return{stiffness:u,damping:o*2*Math.sqrt(r*u),duration:e}}}const NS=12;function RS(e,t,n){let r=n;for(let i=1;i<NS;i++)r=r-e(r)/t(r);return r}function dl(e,t){return e*Math.sqrt(1-t*t)}const DS=["duration","bounce"],_S=["stiffness","damping","mass"];function Fd(e,t){return t.some(n=>e[n]!==void 0)}function IS(e){let t={velocity:G.velocity,stiffness:G.stiffness,damping:G.damping,mass:G.mass,isResolvedFromDuration:!1,...e};if(!Fd(e,_S)&&Fd(e,DS))if(e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,s=2*yt(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:G.mass,stiffness:i,damping:s}}else{const n=MS(e);t={...t,...n,mass:G.mass},t.isResolvedFromDuration=!0}return t}function wg(e=G.visualDuration,t=G.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:s},{stiffness:l,damping:u,mass:c,duration:d,velocity:f,isResolvedFromDuration:y}=IS({...n,velocity:-ft(n.velocity||0)}),v=f||0,x=u/(2*Math.sqrt(l*c)),w=o-s,p=ft(Math.sqrt(l/c)),h=Math.abs(w)<5;r||(r=h?G.restSpeed.granular:G.restSpeed.default),i||(i=h?G.restDelta.granular:G.restDelta.default);let g;if(x<1){const P=dl(p,x);g=k=>{const T=Math.exp(-x*p*k);return o-T*((v+x*p*w)/P*Math.sin(P*k)+w*Math.cos(P*k))}}else if(x===1)g=P=>o-Math.exp(-p*P)*(w+(v+p*w)*P);else{const P=p*Math.sqrt(x*x-1);g=k=>{const T=Math.exp(-x*p*k),E=Math.min(P*k,300);return o-T*((v+x*p*w)*Math.sinh(E)+P*w*Math.cosh(E))/P}}const C={calculatedDuration:y&&d||null,next:P=>{const k=g(P);if(y)a.done=P>=d;else{let T=0;x<1&&(T=P===0?dt(v):xg(g,P,k));const E=Math.abs(T)<=r,D=Math.abs(o-k)<=i;a.done=E&&D}return a.value=a.done?o:k,a},toString:()=>{const P=Math.min(bm(C),rl),k=Fm(T=>C.next(P*T).value,P,30);return P+"ms "+k}};return C}function zd({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:u=.5,restSpeed:c}){const d=e[0],f={done:!1,value:d},y=E=>a!==void 0&&E<a||l!==void 0&&E>l,v=E=>a===void 0?l:l===void 0||Math.abs(a-E)<Math.abs(l-E)?a:l;let x=n*t;const w=d+x,p=o===void 0?w:o(w);p!==w&&(x=p-d);const h=E=>-x*Math.exp(-E/r),g=E=>p+h(E),C=E=>{const D=h(E),M=g(E);f.done=Math.abs(D)<=u,f.value=f.done?p:M};let P,k;const T=E=>{y(f.value)&&(P=E,k=wg({keyframes:[f.value,v(f.value)],velocity:xg(g,E,f.value),damping:i,stiffness:s,restDelta:u,restSpeed:c}))};return T(0),{calculatedDuration:null,next:E=>{let D=!1;return!k&&P===void 0&&(D=!0,C(E),T(E)),P!==void 0&&E>=P?k.next(E-P):(!D&&C(E),f)}}}const VS=xi(.42,0,1,1),OS=xi(0,0,.58,1),Sg=xi(.42,0,.58,1),bS=e=>Array.isArray(e)&&typeof e[0]!="number",FS={linear:Ne,easeIn:VS,easeInOut:Sg,easeOut:OS,circIn:Bu,circInOut:tg,circOut:eg,backIn:zu,backInOut:Zm,backOut:qm,anticipate:Jm},Bd=e=>{if(Iu(e)){vm(e.length===4);const[t,n,r,i]=e;return xi(t,n,r,i)}else if(typeof e=="string")return FS[e];return e};function zS(e,t,n){const r=[],i=n||vg,s=e.length-1;for(let o=0;o<s;o++){let a=i(e[o],e[o+1]);if(t){const l=Array.isArray(t)?t[o]||Ne:t;a=wi(l,a)}r.push(a)}return r}function BS(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const s=e.length;if(vm(s===t.length),s===1)return()=>t[0];if(s===2&&t[0]===t[1])return()=>t[1];const o=e[0]===e[1];e[0]>e[s-1]&&(e=[...e].reverse(),t=[...t].reverse());const a=zS(t,r,i),l=a.length,u=c=>{if(o&&c<e[0])return t[0];let d=0;if(l>1)for(;d<e.length-2&&!(c<e[d+1]);d++);const f=Zn(e[d],e[d+1],c);return a[d](f)};return n?c=>u(yt(e[0],e[s-1],c)):u}function US(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=Zn(0,t,r);e.push(W(n,1,i))}}function $S(e){const t=[0];return US(t,e.length-1),t}function WS(e,t){return e.map(n=>n*t)}function HS(e,t){return e.map(()=>t||Sg).splice(0,e.length-1)}function bs({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=bS(r)?r.map(Bd):Bd(r),s={done:!1,value:t[0]},o=WS(n&&n.length===t.length?n:$S(t),e),a=BS(o,t,{ease:Array.isArray(i)?i:HS(t,i)});return{calculatedDuration:e,next:l=>(s.value=a(l),s.done=l>=e,s)}}const KS=e=>{const t=({timestamp:n})=>e(n);return{start:()=>B.update(t,!0),stop:()=>zt(t),now:()=>ue.isProcessing?ue.timestamp:st.now()}},GS={decay:zd,inertia:zd,tween:bs,keyframes:bs,spring:wg},XS=e=>e/100;class Gu extends gg{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:r,element:i,keyframes:s}=this.options,o=(i==null?void 0:i.KeyframeResolver)||Hu,a=(l,u)=>this.onKeyframesResolved(l,u);this.resolver=new o(s,a,n,r,i),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(t){const{type:n="keyframes",repeat:r=0,repeatDelay:i=0,repeatType:s,velocity:o=0}=this.options,a=_u(n)?n:GS[n]||bs;let l,u;a!==bs&&typeof t[0]!="number"&&(l=wi(XS,vg(t[0],t[1])),t=[0,100]);const c=a({...this.options,keyframes:t});s==="mirror"&&(u=a({...this.options,keyframes:[...t].reverse(),velocity:-o})),c.calculatedDuration===null&&(c.calculatedDuration=bm(c));const{calculatedDuration:d}=c,f=d+i,y=f*(r+1)-i;return{generator:c,mirroredGenerator:u,mapPercentToKeyframes:l,calculatedDuration:d,resolvedDuration:f,totalDuration:y}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,n=!1){const{resolved:r}=this;if(!r){const{keyframes:E}=this.options;return{done:!0,value:E[E.length-1]}}const{finalKeyframe:i,generator:s,mirroredGenerator:o,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:u,totalDuration:c,resolvedDuration:d}=r;if(this.startTime===null)return s.next(0);const{delay:f,repeat:y,repeatType:v,repeatDelay:x,onUpdate:w}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-c/this.speed,this.startTime)),n?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const p=this.currentTime-f*(this.speed>=0?1:-1),h=this.speed>=0?p<0:p>c;this.currentTime=Math.max(p,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let g=this.currentTime,C=s;if(y){const E=Math.min(this.currentTime,c)/d;let D=Math.floor(E),M=E%1;!M&&E>=1&&(M=1),M===1&&D--,D=Math.min(D,y+1),!!(D%2)&&(v==="reverse"?(M=1-M,x&&(M-=x/d)):v==="mirror"&&(C=o)),g=yt(0,1,M)*d}const P=h?{done:!1,value:l[0]}:C.next(g);a&&(P.value=a(P.value));let{done:k}=P;!h&&u!==null&&(k=this.speed>=0?this.currentTime>=c:this.currentTime<=0);const T=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&k);return T&&i!==void 0&&(P.value=ho(l,this.options,i)),w&&w(P.value),T&&this.finish(),P}get duration(){const{resolved:t}=this;return t?ft(t.calculatedDuration):0}get time(){return ft(this.currentTime)}set time(t){t=dt(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=ft(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=KS,onPlay:n,startTime:r}=this.options;this.driver||(this.driver=t(s=>this.tick(s))),n&&n();const i=this.driver.now();this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=i):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}const QS=new Set(["opacity","clipPath","filter","transform"]);function YS(e,t,n,{delay:r=0,duration:i=300,repeat:s=0,repeatType:o="loop",ease:a="easeInOut",times:l}={}){const u={[t]:n};l&&(u.offset=l);const c=Bm(a,i);return Array.isArray(c)&&(u.easing=c),e.animate(u,{delay:r,duration:i,easing:Array.isArray(c)?"linear":c,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}const qS=xu(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Fs=10,ZS=2e4;function JS(e){return _u(e.type)||e.type==="spring"||!zm(e.ease)}function eC(e,t){const n=new Gu({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:e[0]};const i=[];let s=0;for(;!r.done&&s<ZS;)r=n.sample(s),i.push(r.value),s+=Fs;return{times:void 0,keyframes:i,duration:s-Fs,ease:"linear"}}const Cg={anticipate:Jm,backInOut:Zm,circInOut:tg};function tC(e){return e in Cg}class Ud extends gg{constructor(t){super(t);const{name:n,motionValue:r,element:i,keyframes:s}=this.options;this.resolver=new mg(s,(o,a)=>this.onKeyframesResolved(o,a),n,r,i),this.resolver.scheduleResolve()}initPlayback(t,n){let{duration:r=300,times:i,ease:s,type:o,motionValue:a,name:l,startTime:u}=this.options;if(!a.owner||!a.owner.current)return!1;if(typeof s=="string"&&Vs()&&tC(s)&&(s=Cg[s]),JS(this.options)){const{onComplete:d,onUpdate:f,motionValue:y,element:v,...x}=this.options,w=eC(t,x);t=w.keyframes,t.length===1&&(t[1]=t[0]),r=w.duration,i=w.times,s=w.ease,o="keyframes"}const c=YS(a.owner.current,l,t,{...this.options,duration:r,times:i,ease:s});return c.startTime=u??this.calcStartTime(),this.pendingTimeline?(Td(c,this.pendingTimeline),this.pendingTimeline=void 0):c.onfinish=()=>{const{onComplete:d}=this.options;a.set(ho(t,this.options,n)),d&&d(),this.cancel(),this.resolveFinishedPromise()},{animation:c,duration:r,times:i,type:o,ease:s,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:n}=t;return ft(n)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:n}=t;return ft(n.currentTime||0)}set time(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.currentTime=dt(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:n}=t;return n.playbackRate}set speed(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:n}=t;return n.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:n}=t;return n.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:n}=this;if(!n)return Ne;const{animation:r}=n;Td(r,t)}return Ne}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:n,keyframes:r,duration:i,type:s,ease:o,times:a}=t;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:u,onUpdate:c,onComplete:d,element:f,...y}=this.options,v=new Gu({...y,keyframes:r,duration:i,type:s,ease:o,times:a,isGenerator:!0}),x=dt(this.time);u.setWithVelocity(v.sample(x-Fs).value,v.sample(x).value,Fs)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:n,name:r,repeatDelay:i,repeatType:s,damping:o,type:a}=t;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:u}=n.owner.getProps();return qS()&&r&&QS.has(r)&&!l&&!u&&!i&&s!=="mirror"&&o!==0&&a!=="inertia"}}const nC={type:"spring",stiffness:500,damping:25,restSpeed:10},rC=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),iC={type:"keyframes",duration:.8},sC={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},oC=(e,{keyframes:t})=>t.length>2?iC:yn.has(e)?e.startsWith("scale")?rC(t[1]):nC:sC;function aC({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:u,...c}){return!!Object.keys(c).length}const Xu=(e,t,n,r={},i,s)=>o=>{const a=Du(r,e)||{},l=a.delay||r.delay||0;let{elapsed:u=0}=r;u=u-dt(l);let c={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...a,delay:-u,onUpdate:f=>{t.set(f),a.onUpdate&&a.onUpdate(f)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:e,motionValue:t,element:s?void 0:i};aC(a)||(c={...c,...oC(e,c)}),c.duration&&(c.duration=dt(c.duration)),c.repeatDelay&&(c.repeatDelay=dt(c.repeatDelay)),c.from!==void 0&&(c.keyframes[0]=c.from);let d=!1;if((c.type===!1||c.duration===0&&!c.repeatDelay)&&(c.duration=0,c.delay===0&&(d=!0)),d&&!s&&t.get()!==void 0){const f=ho(c.keyframes,a);if(f!==void 0)return B.update(()=>{c.onUpdate(f),c.onComplete()}),new Tw([])}return!s&&Ud.supports(c)?new Ud(c):new Gu(c)};function lC({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function kg(e,t,{delay:n=0,transitionOverride:r,type:i}={}){var s;let{transition:o=e.getDefaultTransition(),transitionEnd:a,...l}=t;r&&(o=r);const u=[],c=i&&e.animationState&&e.animationState.getState()[i];for(const d in l){const f=e.getValue(d,(s=e.latestValues[d])!==null&&s!==void 0?s:null),y=l[d];if(y===void 0||c&&lC(c,d))continue;const v={delay:n,...Du(o||{},d)};let x=!1;if(window.MotionHandoffAnimation){const p=Gm(e);if(p){const h=window.MotionHandoffAnimation(p,d,B);h!==null&&(v.startTime=h,x=!0)}}sl(e,d),f.start(Xu(d,f,y,e.shouldReduceMotion&&Hm.has(d)?{type:!1}:v,e,x));const w=f.animation;w&&u.push(w)}return a&&Promise.all(u).then(()=>{B.update(()=>{a&&zw(e,a)})}),u}function fl(e,t,n={}){var r;const i=fo(e,t,n.type==="exit"?(r=e.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:s=e.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(s=n.transitionOverride);const o=i?()=>Promise.all(kg(e,i,n)):()=>Promise.resolve(),a=e.variantChildren&&e.variantChildren.size?(u=0)=>{const{delayChildren:c=0,staggerChildren:d,staggerDirection:f}=s;return uC(e,t,c+u,d,f,n)}:()=>Promise.resolve(),{when:l}=s;if(l){const[u,c]=l==="beforeChildren"?[o,a]:[a,o];return u().then(()=>c())}else return Promise.all([o(),a(n.delay)])}function uC(e,t,n=0,r=0,i=1,s){const o=[],a=(e.variantChildren.size-1)*r,l=i===1?(u=0)=>u*r:(u=0)=>a-u*r;return Array.from(e.variantChildren).sort(cC).forEach((u,c)=>{u.notify("AnimationStart",t),o.push(fl(u,t,{...s,delay:n+l(c)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(o)}function cC(e,t){return e.sortNodePosition(t)}function dC(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(s=>fl(e,s,n));r=Promise.all(i)}else if(typeof t=="string")r=fl(e,t,n);else{const i=typeof t=="function"?fo(e,t,n.custom):t;r=Promise.all(kg(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const fC=Su.length;function Pg(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?Pg(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<fC;n++){const r=Su[n],i=e.props[r];(oi(i)||i===!1)&&(t[r]=i)}return t}const hC=[...wu].reverse(),pC=wu.length;function mC(e){return t=>Promise.all(t.map(({animation:n,options:r})=>dC(e,n,r)))}function gC(e){let t=mC(e),n=$d(),r=!0;const i=l=>(u,c)=>{var d;const f=fo(e,c,l==="exit"?(d=e.presenceContext)===null||d===void 0?void 0:d.custom:void 0);if(f){const{transition:y,transitionEnd:v,...x}=f;u={...u,...x,...v}}return u};function s(l){t=l(e)}function o(l){const{props:u}=e,c=Pg(e.parent)||{},d=[],f=new Set;let y={},v=1/0;for(let w=0;w<pC;w++){const p=hC[w],h=n[p],g=u[p]!==void 0?u[p]:c[p],C=oi(g),P=p===l?h.isActive:null;P===!1&&(v=w);let k=g===c[p]&&g!==u[p]&&C;if(k&&r&&e.manuallyAnimateOnMount&&(k=!1),h.protectedKeys={...y},!h.isActive&&P===null||!g&&!h.prevProp||uo(g)||typeof g=="boolean")continue;const T=yC(h.prevProp,g);let E=T||p===l&&h.isActive&&!k&&C||w>v&&C,D=!1;const M=Array.isArray(g)?g:[g];let ee=M.reduce(i(p),{});P===!1&&(ee={});const{prevResolvedValues:xt={}}=h,Xt={...xt,...ee},lr=ne=>{E=!0,f.has(ne)&&(D=!0,f.delete(ne)),h.needsAnimating[ne]=!0;const L=e.getValue(ne);L&&(L.liveStyle=!1)};for(const ne in Xt){const L=ee[ne],R=xt[ne];if(y.hasOwnProperty(ne))continue;let _=!1;nl(L)&&nl(R)?_=!Om(L,R):_=L!==R,_?L!=null?lr(ne):f.add(ne):L!==void 0&&f.has(ne)?lr(ne):h.protectedKeys[ne]=!0}h.prevProp=g,h.prevResolvedValues=ee,h.isActive&&(y={...y,...ee}),r&&e.blockInitialAnimation&&(E=!1),E&&(!(k&&T)||D)&&d.push(...M.map(ne=>({animation:ne,options:{type:p}})))}if(f.size){const w={};f.forEach(p=>{const h=e.getBaseTarget(p),g=e.getValue(p);g&&(g.liveStyle=!0),w[p]=h??null}),d.push({animation:w})}let x=!!d.length;return r&&(u.initial===!1||u.initial===u.animate)&&!e.manuallyAnimateOnMount&&(x=!1),r=!1,x?t(d):Promise.resolve()}function a(l,u){var c;if(n[l].isActive===u)return Promise.resolve();(c=e.variantChildren)===null||c===void 0||c.forEach(f=>{var y;return(y=f.animationState)===null||y===void 0?void 0:y.setActive(l,u)}),n[l].isActive=u;const d=o(l);for(const f in n)n[f].protectedKeys={};return d}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n,reset:()=>{n=$d(),r=!0}}}function yC(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!Om(t,e):!1}function qt(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function $d(){return{animate:qt(!0),whileInView:qt(),whileHover:qt(),whileTap:qt(),whileDrag:qt(),whileFocus:qt(),exit:qt()}}class Gt{constructor(t){this.isMounted=!1,this.node=t}update(){}}class vC extends Gt{constructor(t){super(t),t.animationState||(t.animationState=gC(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();uo(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let xC=0;class wC extends Gt{constructor(){super(...arguments),this.id=xC++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const SC={animation:{Feature:vC},exit:{Feature:wC}};function ci(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function Si(e){return{point:{x:e.pageX,y:e.pageY}}}const CC=e=>t=>Vu(t)&&e(t,Si(t));function Vr(e,t,n,r){return ci(e,t,CC(n),r)}const Wd=(e,t)=>Math.abs(e-t);function kC(e,t){const n=Wd(e.x,t.x),r=Wd(e.y,t.y);return Math.sqrt(n**2+r**2)}class Eg{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const d=qo(this.lastMoveEventInfo,this.history),f=this.startEvent!==null,y=kC(d.offset,{x:0,y:0})>=3;if(!f&&!y)return;const{point:v}=d,{timestamp:x}=ue;this.history.push({...v,timestamp:x});const{onStart:w,onMove:p}=this.handlers;f||(w&&w(this.lastMoveEvent,d),this.startEvent=this.lastMoveEvent),p&&p(this.lastMoveEvent,d)},this.handlePointerMove=(d,f)=>{this.lastMoveEvent=d,this.lastMoveEventInfo=Yo(f,this.transformPagePoint),B.update(this.updatePoint,!0)},this.handlePointerUp=(d,f)=>{this.end();const{onEnd:y,onSessionEnd:v,resumeAnimation:x}=this.handlers;if(this.dragSnapToOrigin&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const w=qo(d.type==="pointercancel"?this.lastMoveEventInfo:Yo(f,this.transformPagePoint),this.history);this.startEvent&&y&&y(d,w),v&&v(d,w)},!Vu(t))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const o=Si(t),a=Yo(o,this.transformPagePoint),{point:l}=a,{timestamp:u}=ue;this.history=[{...l,timestamp:u}];const{onSessionStart:c}=n;c&&c(t,qo(a,this.history)),this.removeListeners=wi(Vr(this.contextWindow,"pointermove",this.handlePointerMove),Vr(this.contextWindow,"pointerup",this.handlePointerUp),Vr(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),zt(this.updatePoint)}}function Yo(e,t){return t?{point:t(e.point)}:e}function Hd(e,t){return{x:e.x-t.x,y:e.y-t.y}}function qo({point:e},t){return{point:e,delta:Hd(e,Tg(t)),offset:Hd(e,PC(t)),velocity:EC(t,.1)}}function PC(e){return e[0]}function Tg(e){return e[e.length-1]}function EC(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=Tg(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>dt(t)));)n--;if(!r)return{x:0,y:0};const s=ft(i.timestamp-r.timestamp);if(s===0)return{x:0,y:0};const o={x:(i.x-r.x)/s,y:(i.y-r.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}const jg=1e-4,TC=1-jg,jC=1+jg,Lg=.01,LC=0-Lg,AC=0+Lg;function De(e){return e.max-e.min}function MC(e,t,n){return Math.abs(e-t)<=n}function Kd(e,t,n,r=.5){e.origin=r,e.originPoint=W(t.min,t.max,e.origin),e.scale=De(n)/De(t),e.translate=W(n.min,n.max,e.origin)-e.originPoint,(e.scale>=TC&&e.scale<=jC||isNaN(e.scale))&&(e.scale=1),(e.translate>=LC&&e.translate<=AC||isNaN(e.translate))&&(e.translate=0)}function Or(e,t,n,r){Kd(e.x,t.x,n.x,r?r.originX:void 0),Kd(e.y,t.y,n.y,r?r.originY:void 0)}function Gd(e,t,n){e.min=n.min+t.min,e.max=e.min+De(t)}function NC(e,t,n){Gd(e.x,t.x,n.x),Gd(e.y,t.y,n.y)}function Xd(e,t,n){e.min=t.min-n.min,e.max=e.min+De(t)}function br(e,t,n){Xd(e.x,t.x,n.x),Xd(e.y,t.y,n.y)}function RC(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?W(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?W(n,e,r.max):Math.min(e,n)),e}function Qd(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function DC(e,{top:t,left:n,bottom:r,right:i}){return{x:Qd(e.x,n,i),y:Qd(e.y,t,r)}}function Yd(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function _C(e,t){return{x:Yd(e.x,t.x),y:Yd(e.y,t.y)}}function IC(e,t){let n=.5;const r=De(e),i=De(t);return i>r?n=Zn(t.min,t.max-r,e.min):r>i&&(n=Zn(e.min,e.max-i,t.min)),yt(0,1,n)}function VC(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const hl=.35;function OC(e=hl){return e===!1?e=0:e===!0&&(e=hl),{x:qd(e,"left","right"),y:qd(e,"top","bottom")}}function qd(e,t,n){return{min:Zd(e,t),max:Zd(e,n)}}function Zd(e,t){return typeof e=="number"?e:e[t]||0}const Jd=()=>({translate:0,scale:1,origin:0,originPoint:0}),_n=()=>({x:Jd(),y:Jd()}),ef=()=>({min:0,max:0}),Z=()=>({x:ef(),y:ef()});function Oe(e){return[e("x"),e("y")]}function Ag({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function bC({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function FC(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Zo(e){return e===void 0||e===1}function pl({scale:e,scaleX:t,scaleY:n}){return!Zo(e)||!Zo(t)||!Zo(n)}function en(e){return pl(e)||Mg(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Mg(e){return tf(e.x)||tf(e.y)}function tf(e){return e&&e!=="0%"}function zs(e,t,n){const r=e-n,i=t*r;return n+i}function nf(e,t,n,r,i){return i!==void 0&&(e=zs(e,i,r)),zs(e,n,r)+t}function ml(e,t=0,n=1,r,i){e.min=nf(e.min,t,n,r,i),e.max=nf(e.max,t,n,r,i)}function Ng(e,{x:t,y:n}){ml(e.x,t.translate,t.scale,t.originPoint),ml(e.y,n.translate,n.scale,n.originPoint)}const rf=.999999999999,sf=1.0000000000001;function zC(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let s,o;for(let a=0;a<i;a++){s=n[a],o=s.projectionDelta;const{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(r&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Vn(e,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,Ng(e,o)),r&&en(s.latestValues)&&Vn(e,s.latestValues))}t.x<sf&&t.x>rf&&(t.x=1),t.y<sf&&t.y>rf&&(t.y=1)}function In(e,t){e.min=e.min+t,e.max=e.max+t}function of(e,t,n,r,i=.5){const s=W(e.min,e.max,i);ml(e,t,n,s,r)}function Vn(e,t){of(e.x,t.x,t.scaleX,t.scale,t.originX),of(e.y,t.y,t.scaleY,t.scale,t.originY)}function Rg(e,t){return Ag(FC(e.getBoundingClientRect(),t))}function BC(e,t,n){const r=Rg(e,n),{scroll:i}=t;return i&&(In(r.x,i.offset.x),In(r.y,i.offset.y)),r}const Dg=({current:e})=>e?e.ownerDocument.defaultView:null,UC=new WeakMap;class $C{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Z(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=c=>{const{dragSnapToOrigin:d}=this.getProps();d?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Si(c).point)},s=(c,d)=>{const{drag:f,dragPropagation:y,onDragStart:v}=this.getProps();if(f&&!y&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Iw(f),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Oe(w=>{let p=this.getAxisMotionValue(w).get()||0;if(it.test(p)){const{projection:h}=this.visualElement;if(h&&h.layout){const g=h.layout.layoutBox[w];g&&(p=De(g)*(parseFloat(p)/100))}}this.originPoint[w]=p}),v&&B.postRender(()=>v(c,d)),sl(this.visualElement,"transform");const{animationState:x}=this.visualElement;x&&x.setActive("whileDrag",!0)},o=(c,d)=>{const{dragPropagation:f,dragDirectionLock:y,onDirectionLock:v,onDrag:x}=this.getProps();if(!f&&!this.openDragLock)return;const{offset:w}=d;if(y&&this.currentDirection===null){this.currentDirection=WC(w),this.currentDirection!==null&&v&&v(this.currentDirection);return}this.updateAxis("x",d.point,w),this.updateAxis("y",d.point,w),this.visualElement.render(),x&&x(c,d)},a=(c,d)=>this.stop(c,d),l=()=>Oe(c=>{var d;return this.getAnimationState(c)==="paused"&&((d=this.getAxisMotionValue(c).animation)===null||d===void 0?void 0:d.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new Eg(t,{onSessionStart:i,onStart:s,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:Dg(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:s}=this.getProps();s&&B.postRender(()=>s(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!Hi(t,i,this.currentDirection))return;const s=this.getAxisMotionValue(t);let o=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(o=RC(o,this.constraints[t],this.elastic[t])),s.set(o)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,s=this.constraints;n&&Rn(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=DC(i.layoutBox,n):this.constraints=!1,this.elastic=OC(r),s!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&Oe(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=VC(i.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Rn(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const s=BC(r,i.root,this.visualElement.getTransformPagePoint());let o=_C(i.layout.layoutBox,s);if(n){const a=n(bC(o));this.hasMutatedConstraints=!!a,a&&(o=Ag(a))}return o}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},u=Oe(c=>{if(!Hi(c,n,this.currentDirection))return;let d=l&&l[c]||{};o&&(d={min:0,max:0});const f=i?200:1e6,y=i?40:1e7,v={type:"inertia",velocity:r?t[c]:0,bounceStiffness:f,bounceDamping:y,timeConstant:750,restDelta:1,restSpeed:10,...s,...d};return this.startAxisValueAnimation(c,v)});return Promise.all(u).then(a)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return sl(this.visualElement,t),r.start(Xu(t,r,0,n,this.visualElement,!1))}stopAnimation(){Oe(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){Oe(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){Oe(n=>{const{drag:r}=this.getProps();if(!Hi(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,s=this.getAxisMotionValue(n);if(i&&i.layout){const{min:o,max:a}=i.layout.layoutBox[n];s.set(t[n]-W(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Rn(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};Oe(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();i[o]=IC({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),Oe(o=>{if(!Hi(o,t,null))return;const a=this.getAxisMotionValue(o),{min:l,max:u}=this.constraints[o];a.set(W(l,u,i[o]))})}addListeners(){if(!this.visualElement.current)return;UC.set(this.visualElement,this);const t=this.visualElement.current,n=Vr(t,"pointerdown",l=>{const{drag:u,dragListener:c=!0}=this.getProps();u&&c&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();Rn(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,s=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),B.read(r);const o=ci(window,"resize",()=>this.scalePositionWithinConstraints()),a=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(Oe(c=>{const d=this.getAxisMotionValue(c);d&&(this.originPoint[c]+=l[c].translate,d.set(d.get()+l[c].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:s=!1,dragElastic:o=hl,dragMomentum:a=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function Hi(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function WC(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class HC extends Gt{constructor(t){super(t),this.removeGroupControls=Ne,this.removeListeners=Ne,this.controls=new $C(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ne}unmount(){this.removeGroupControls(),this.removeListeners()}}const af=e=>(t,n)=>{e&&B.postRender(()=>e(t,n))};class KC extends Gt{constructor(){super(...arguments),this.removePointerDownListener=Ne}onPointerDown(t){this.session=new Eg(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Dg(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:af(t),onStart:af(n),onMove:r,onEnd:(s,o)=>{delete this.session,i&&B.postRender(()=>i(s,o))}}}mount(){this.removePointerDownListener=Vr(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const as={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function lf(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const yr={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(N.test(e))e=parseFloat(e);else return e;const n=lf(e,t.target.x),r=lf(e,t.target.y);return`${n}% ${r}%`}},GC={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=Bt.parse(e);if(i.length>5)return r;const s=Bt.createTransformer(e),o=typeof i[0]!="number"?1:0,a=n.x.scale*t.x,l=n.y.scale*t.y;i[0+o]/=a,i[1+o]/=l;const u=W(a,l,.5);return typeof i[2+o]=="number"&&(i[2+o]/=u),typeof i[3+o]=="number"&&(i[3+o]/=u),s(i)}};class XC extends S.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:s}=t;pw(QC),s&&(n.group&&n.group.add(s),r&&r.register&&i&&r.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),as.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:s}=this.props,o=r.projection;return o&&(o.isPresent=s,i||t.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),t.isPresent!==s&&(s?o.promote():o.relegate()||B.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),ku.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function _g(e){const[t,n]=gm(),r=S.useContext(mu);return m.jsx(XC,{...e,layoutGroup:r,switchLayoutGroup:S.useContext(Pm),isPresent:t,safeToRemove:n})}const QC={borderRadius:{...yr,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:yr,borderTopRightRadius:yr,borderBottomLeftRadius:yr,borderBottomRightRadius:yr,boxShadow:GC};function YC(e,t,n){const r=ge(e)?e:li(e);return r.start(Xu("",r,t,n)),r.animation}function qC(e){return e instanceof SVGElement&&e.tagName!=="svg"}const ZC=(e,t)=>e.depth-t.depth;class JC{constructor(){this.children=[],this.isDirty=!1}add(t){Ou(this.children,t),this.isDirty=!0}remove(t){bu(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(ZC),this.isDirty=!1,this.children.forEach(t)}}function ek(e,t){const n=st.now(),r=({timestamp:i})=>{const s=i-n;s>=t&&(zt(r),e(s-t))};return B.read(r,!0),()=>zt(r)}const Ig=["TopLeft","TopRight","BottomLeft","BottomRight"],tk=Ig.length,uf=e=>typeof e=="string"?parseFloat(e):e,cf=e=>typeof e=="number"||N.test(e);function nk(e,t,n,r,i,s){i?(e.opacity=W(0,n.opacity!==void 0?n.opacity:1,rk(r)),e.opacityExit=W(t.opacity!==void 0?t.opacity:1,0,ik(r))):s&&(e.opacity=W(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let o=0;o<tk;o++){const a=`border${Ig[o]}Radius`;let l=df(t,a),u=df(n,a);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||cf(l)===cf(u)?(e[a]=Math.max(W(uf(l),uf(u),r),0),(it.test(u)||it.test(l))&&(e[a]+="%")):e[a]=u}(t.rotate||n.rotate)&&(e.rotate=W(t.rotate||0,n.rotate||0,r))}function df(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const rk=Vg(0,.5,eg),ik=Vg(.5,.95,Ne);function Vg(e,t,n){return r=>r<e?0:r>t?1:n(Zn(e,t,r))}function ff(e,t){e.min=t.min,e.max=t.max}function Ve(e,t){ff(e.x,t.x),ff(e.y,t.y)}function hf(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function pf(e,t,n,r,i){return e-=t,e=zs(e,1/n,r),i!==void 0&&(e=zs(e,1/i,r)),e}function sk(e,t=0,n=1,r=.5,i,s=e,o=e){if(it.test(t)&&(t=parseFloat(t),t=W(o.min,o.max,t/100)-o.min),typeof t!="number")return;let a=W(s.min,s.max,r);e===s&&(a-=t),e.min=pf(e.min,t,n,a,i),e.max=pf(e.max,t,n,a,i)}function mf(e,t,[n,r,i],s,o){sk(e,t[n],t[r],t[i],t.scale,s,o)}const ok=["x","scaleX","originX"],ak=["y","scaleY","originY"];function gf(e,t,n,r){mf(e.x,t,ok,n?n.x:void 0,r?r.x:void 0),mf(e.y,t,ak,n?n.y:void 0,r?r.y:void 0)}function yf(e){return e.translate===0&&e.scale===1}function Og(e){return yf(e.x)&&yf(e.y)}function vf(e,t){return e.min===t.min&&e.max===t.max}function lk(e,t){return vf(e.x,t.x)&&vf(e.y,t.y)}function xf(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function bg(e,t){return xf(e.x,t.x)&&xf(e.y,t.y)}function wf(e){return De(e.x)/De(e.y)}function Sf(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class uk{constructor(){this.members=[]}add(t){Ou(this.members,t),t.scheduleRender()}remove(t){if(bu(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const s=this.members[i];if(s.isPresent!==!1){r=s;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function ck(e,t,n){let r="";const i=e.x.translate/t.x,s=e.y.translate/t.y,o=(n==null?void 0:n.z)||0;if((i||s||o)&&(r=`translate3d(${i}px, ${s}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:u,rotate:c,rotateX:d,rotateY:f,skewX:y,skewY:v}=n;u&&(r=`perspective(${u}px) ${r}`),c&&(r+=`rotate(${c}deg) `),d&&(r+=`rotateX(${d}deg) `),f&&(r+=`rotateY(${f}deg) `),y&&(r+=`skewX(${y}deg) `),v&&(r+=`skewY(${v}deg) `)}const a=e.x.scale*t.x,l=e.y.scale*t.y;return(a!==1||l!==1)&&(r+=`scale(${a}, ${l})`),r||"none"}const tn={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Er=typeof window<"u"&&window.MotionDebug!==void 0,Jo=["","X","Y","Z"],dk={visibility:"hidden"},Cf=1e3;let fk=0;function ea(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function Fg(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=Gm(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:s}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",B,!(i||s))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&Fg(r)}function zg({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(o={},a=t==null?void 0:t()){this.id=fk++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Er&&(tn.totalNodes=tn.resolvedTargetDeltas=tn.recalculatedProjection=0),this.nodes.forEach(mk),this.nodes.forEach(wk),this.nodes.forEach(Sk),this.nodes.forEach(gk),Er&&window.MotionDebug.record(tn)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new JC)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Fu),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=qC(o),this.instance=o;const{layoutId:l,layout:u,visualElement:c}=this.options;if(c&&!c.current&&c.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(u||l)&&(this.isLayoutDirty=!0),e){let d;const f=()=>this.root.updateBlockedByResize=!1;e(o,()=>{this.root.updateBlockedByResize=!0,d&&d(),d=ek(f,250),as.hasAnimatedSinceResize&&(as.hasAnimatedSinceResize=!1,this.nodes.forEach(Pf))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&c&&(l||u)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:f,hasRelativeTargetChanged:y,layout:v})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const x=this.options.transition||c.getDefaultTransition()||Tk,{onLayoutAnimationStart:w,onLayoutAnimationComplete:p}=c.getProps(),h=!this.targetLayout||!bg(this.targetLayout,v)||y,g=!f&&y;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||g||f&&(h||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(d,g);const C={...Du(x,"layout"),onPlay:w,onComplete:p};(c.shouldReduceMotion||this.options.layoutRoot)&&(C.delay=0,C.type=!1),this.startAnimation(C)}else f||Pf(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=v})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,zt(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Ck),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Fg(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let c=0;c<this.path.length;c++){const d=this.path[c];d.shouldResetTransform=!0,d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(kf);return}this.isUpdating||this.nodes.forEach(vk),this.isUpdating=!1,this.nodes.forEach(xk),this.nodes.forEach(hk),this.nodes.forEach(pk),this.clearAllSnapshots();const a=st.now();ue.delta=yt(0,1e3/60,a-ue.timestamp),ue.timestamp=a,ue.isProcessing=!0,Wo.update.process(ue),Wo.preRender.process(ue),Wo.render.process(ue),ue.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,ku.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(yk),this.sharedNodes.forEach(kk)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,B.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){B.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Z(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a){const l=r(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!i)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!Og(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,c=u!==this.prevTransformTemplateValue;o&&(a||en(this.latestValues)||c)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),jk(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var o;const{visualElement:a}=this.options;if(!a)return Z();const l=a.measureViewportBox();if(!(((o=this.scroll)===null||o===void 0?void 0:o.wasRoot)||this.path.some(Lk))){const{scroll:c}=this.root;c&&(In(l.x,c.offset.x),In(l.y,c.offset.y))}return l}removeElementScroll(o){var a;const l=Z();if(Ve(l,o),!((a=this.scroll)===null||a===void 0)&&a.wasRoot)return l;for(let u=0;u<this.path.length;u++){const c=this.path[u],{scroll:d,options:f}=c;c!==this.root&&d&&f.layoutScroll&&(d.wasRoot&&Ve(l,o),In(l.x,d.offset.x),In(l.y,d.offset.y))}return l}applyTransform(o,a=!1){const l=Z();Ve(l,o);for(let u=0;u<this.path.length;u++){const c=this.path[u];!a&&c.options.layoutScroll&&c.scroll&&c!==c.root&&Vn(l,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),en(c.latestValues)&&Vn(l,c.latestValues)}return en(this.latestValues)&&Vn(l,this.latestValues),l}removeTransform(o){const a=Z();Ve(a,o);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!en(u.latestValues))continue;pl(u.latestValues)&&u.updateSnapshot();const c=Z(),d=u.measurePageBox();Ve(c,d),gf(a,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,c)}return en(this.latestValues)&&gf(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ue.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(o||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:d,layoutId:f}=this.options;if(!(!this.layout||!(d||f))){if(this.resolvedRelativeTargetAt=ue.timestamp,!this.targetDelta&&!this.relativeTarget){const y=this.getClosestProjectingParent();y&&y.layout&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Z(),this.relativeTargetOrigin=Z(),br(this.relativeTargetOrigin,this.layout.layoutBox,y.layout.layoutBox),Ve(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Z(),this.targetWithTransforms=Z()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),NC(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Ve(this.target,this.layout.layoutBox),Ng(this.target,this.targetDelta)):Ve(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const y=this.getClosestProjectingParent();y&&!!y.resumingFrom==!!this.resumingFrom&&!y.options.layoutScroll&&y.target&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Z(),this.relativeTargetOrigin=Z(),br(this.relativeTargetOrigin,this.target,y.target),Ve(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Er&&tn.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||pl(this.parent.latestValues)||Mg(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let u=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===ue.timestamp&&(u=!1),u)return;const{layout:c,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||d))return;Ve(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,y=this.treeScale.y;zC(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=Z());const{target:v}=a;if(!v){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(hf(this.prevProjectionDelta.x,this.projectionDelta.x),hf(this.prevProjectionDelta.y,this.projectionDelta.y)),Or(this.projectionDelta,this.layoutCorrected,v,this.latestValues),(this.treeScale.x!==f||this.treeScale.y!==y||!Sf(this.projectionDelta.x,this.prevProjectionDelta.x)||!Sf(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",v)),Er&&tn.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)===null||a===void 0||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=_n(),this.projectionDelta=_n(),this.projectionDeltaWithTransform=_n()}setAnimationOrigin(o,a=!1){const l=this.snapshot,u=l?l.latestValues:{},c={...this.latestValues},d=_n();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const f=Z(),y=l?l.source:void 0,v=this.layout?this.layout.source:void 0,x=y!==v,w=this.getStack(),p=!w||w.members.length<=1,h=!!(x&&!p&&this.options.crossfade===!0&&!this.path.some(Ek));this.animationProgress=0;let g;this.mixTargetDelta=C=>{const P=C/1e3;Ef(d.x,o.x,P),Ef(d.y,o.y,P),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(br(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Pk(this.relativeTarget,this.relativeTargetOrigin,f,P),g&&lk(this.relativeTarget,g)&&(this.isProjectionDirty=!1),g||(g=Z()),Ve(g,this.relativeTarget)),x&&(this.animationValues=c,nk(c,u,this.latestValues,P,h,p)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=P},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(zt(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=B.update(()=>{as.hasAnimatedSinceResize=!0,this.currentAnimation=YC(0,Cf,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Cf),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:u,latestValues:c}=o;if(!(!a||!l||!u)){if(this!==o&&this.layout&&u&&Bg(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||Z();const d=De(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+d;const f=De(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+f}Ve(a,l),Vn(a,c),Or(this.projectionDeltaWithTransform,this.layoutCorrected,a,c)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new uk),this.sharedNodes.get(o).add(a);const u=a.options.initialPromotionConfig;a.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const u={};l.z&&ea("z",o,u,this.animationValues);for(let c=0;c<Jo.length;c++)ea(`rotate${Jo[c]}`,o,u,this.animationValues),ea(`skew${Jo[c]}`,o,u,this.animationValues);o.render();for(const c in u)o.setStaticValue(c,u[c]),this.animationValues&&(this.animationValues[c]=u[c]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return dk;const u={visibility:""},c=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=ss(o==null?void 0:o.pointerEvents)||"",u.transform=c?c(this.latestValues,""):"none",u;const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){const x={};return this.options.layoutId&&(x.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,x.pointerEvents=ss(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!en(this.latestValues)&&(x.transform=c?c({},""):"none",this.hasProjected=!1),x}const f=d.animationValues||d.latestValues;this.applyTransformsToTarget(),u.transform=ck(this.projectionDeltaWithTransform,this.treeScale,f),c&&(u.transform=c(f,u.transform));const{x:y,y:v}=this.projectionDelta;u.transformOrigin=`${y.origin*100}% ${v.origin*100}% 0`,d.animationValues?u.opacity=d===this?(l=(a=f.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:u.opacity=d===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const x in Is){if(f[x]===void 0)continue;const{correct:w,applyTo:p}=Is[x],h=u.transform==="none"?f[x]:w(f[x],d);if(p){const g=p.length;for(let C=0;C<g;C++)u[p[C]]=h}else u[x]=h}return this.options.layoutId&&(u.pointerEvents=d===this?ss(o==null?void 0:o.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(kf),this.root.sharedNodes.clear()}}}function hk(e){e.updateLayout()}function pk(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:s}=e.options,o=n.source!==e.layout.source;s==="size"?Oe(d=>{const f=o?n.measuredBox[d]:n.layoutBox[d],y=De(f);f.min=r[d].min,f.max=f.min+y}):Bg(s,n.layoutBox,r)&&Oe(d=>{const f=o?n.measuredBox[d]:n.layoutBox[d],y=De(r[d]);f.max=f.min+y,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[d].max=e.relativeTarget[d].min+y)});const a=_n();Or(a,r,n.layoutBox);const l=_n();o?Or(l,e.applyTransform(i,!0),n.measuredBox):Or(l,r,n.layoutBox);const u=!Og(a);let c=!1;if(!e.resumeFrom){const d=e.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:f,layout:y}=d;if(f&&y){const v=Z();br(v,n.layoutBox,f.layoutBox);const x=Z();br(x,r,y.layoutBox),bg(v,x)||(c=!0),d.options.layoutRoot&&(e.relativeTarget=x,e.relativeTargetOrigin=v,e.relativeParent=d)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:u,hasRelativeTargetChanged:c})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function mk(e){Er&&tn.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function gk(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function yk(e){e.clearSnapshot()}function kf(e){e.clearMeasurements()}function vk(e){e.isLayoutDirty=!1}function xk(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Pf(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function wk(e){e.resolveTargetDelta()}function Sk(e){e.calcProjection()}function Ck(e){e.resetSkewAndRotation()}function kk(e){e.removeLeadSnapshot()}function Ef(e,t,n){e.translate=W(t.translate,0,n),e.scale=W(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Tf(e,t,n,r){e.min=W(t.min,n.min,r),e.max=W(t.max,n.max,r)}function Pk(e,t,n,r){Tf(e.x,t.x,n.x,r),Tf(e.y,t.y,n.y,r)}function Ek(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const Tk={duration:.45,ease:[.4,0,.1,1]},jf=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Lf=jf("applewebkit/")&&!jf("chrome/")?Math.round:Ne;function Af(e){e.min=Lf(e.min),e.max=Lf(e.max)}function jk(e){Af(e.x),Af(e.y)}function Bg(e,t,n){return e==="position"||e==="preserve-aspect"&&!MC(wf(t),wf(n),.2)}function Lk(e){var t;return e!==e.root&&((t=e.scroll)===null||t===void 0?void 0:t.wasRoot)}const Ak=zg({attachResizeListener:(e,t)=>ci(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),ta={current:void 0},Ug=zg({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!ta.current){const e=new Ak({});e.mount(window),e.setOptions({layoutScroll:!0}),ta.current=e}return ta.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),Mk={pan:{Feature:KC},drag:{Feature:HC,ProjectionNode:Ug,MeasureLayout:_g}};function Mf(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,s=r[i];s&&B.postRender(()=>s(t,Si(t)))}class Nk extends Gt{mount(){const{current:t}=this.node;t&&(this.unmount=Mw(t,n=>(Mf(this.node,n,"Start"),r=>Mf(this.node,r,"End"))))}unmount(){}}class Rk extends Gt{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=wi(ci(this.node.current,"focus",()=>this.onFocus()),ci(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Nf(e,t,n){const{props:r}=e;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),s=r[i];s&&B.postRender(()=>s(t,Si(t)))}class Dk extends Gt{mount(){const{current:t}=this.node;t&&(this.unmount=_w(t,n=>(Nf(this.node,n,"Start"),(r,{success:i})=>Nf(this.node,r,i?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const gl=new WeakMap,na=new WeakMap,_k=e=>{const t=gl.get(e.target);t&&t(e)},Ik=e=>{e.forEach(_k)};function Vk({root:e,...t}){const n=e||document;na.has(n)||na.set(n,{});const r=na.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(Ik,{root:e,...t})),r[i]}function Ok(e,t,n){const r=Vk(t);return gl.set(e,n),r.observe(e),()=>{gl.delete(e),r.unobserve(e)}}const bk={some:0,all:1};class Fk extends Gt{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:s}=t,o={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:bk[i]},a=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,s&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:c,onViewportLeave:d}=this.node.getProps(),f=u?c:d;f&&f(l)};return Ok(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(zk(t,n))&&this.startObserver()}unmount(){}}function zk({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const Bk={inView:{Feature:Fk},tap:{Feature:Dk},focus:{Feature:Rk},hover:{Feature:Nk}},Uk={layout:{ProjectionNode:Ug,MeasureLayout:_g}},yl={current:null},$g={current:!1};function $k(){if($g.current=!0,!!vu)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>yl.current=e.matches;e.addListener(t),t()}else yl.current=!1}const Wk=[...pg,pe,Bt],Hk=e=>Wk.find(hg(e)),Rf=new WeakMap;function Kk(e,t,n){for(const r in t){const i=t[r],s=n[r];if(ge(i))e.addValue(r,i);else if(ge(s))e.addValue(r,li(i,{owner:e}));else if(s!==i)if(e.hasValue(r)){const o=e.getValue(r);o.liveStyle===!0?o.jump(i):o.hasAnimated||o.set(i)}else{const o=e.getStaticValue(r);e.addValue(r,li(o!==void 0?o:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const Df=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class Gk{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:s,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Hu,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const y=st.now();this.renderScheduledAt<y&&(this.renderScheduledAt=y,B.render(this.render,!1,!0))};const{latestValues:l,renderState:u,onUpdate:c}=o;this.onUpdate=c,this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=u,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=a,this.blockInitialAnimation=!!s,this.isControllingVariants=co(n),this.isVariantNode=Cm(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:d,...f}=this.scrapeMotionValuesFromProps(n,{},this);for(const y in f){const v=f[y];l[y]!==void 0&&ge(v)&&v.set(l[y],!1)}}mount(t){this.current=t,Rf.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),$g.current||$k(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:yl.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Rf.delete(this.current),this.projection&&this.projection.unmount(),zt(this.notifyUpdate),zt(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const r=yn.has(t),i=n.on("change",a=>{this.latestValues[t]=a,this.props.onUpdate&&B.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),s(),o&&o(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in Jn){const n=Jn[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const s=this.features[t];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Z()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<Df.length;r++){const i=Df[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const s="on"+i,o=t[s];o&&(this.propEventSubscriptions[i]=this.on(i,o))}this.prevMotionValues=Kk(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=li(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){var r;let i=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(r=this.getBaseTargetFromProps(this.props,t))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,t,this.options);return i!=null&&(typeof i=="string"&&(dg(i)||ng(i))?i=parseFloat(i):!Hk(i)&&Bt.test(n)&&(i=lg(t,n)),this.setBaseTarget(t,ge(i)?i.get():i)),ge(i)?i.get():i}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props;let i;if(typeof r=="string"||typeof r=="object"){const o=Eu(this.props,r,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);o&&(i=o[t])}if(r&&i!==void 0)return i;const s=this.getBaseTargetFromProps(this.props,t);return s!==void 0&&!ge(s)?s:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Fu),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class Wg extends Gk{constructor(){super(...arguments),this.KeyframeResolver=mg}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;ge(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function Xk(e){return window.getComputedStyle(e)}class Qk extends Wg{constructor(){super(...arguments),this.type="html",this.renderInstance=Nm}readValueFromInstance(t,n){if(yn.has(n)){const r=Wu(n);return r&&r.default||0}else{const r=Xk(t),i=(Lm(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return Rg(t,n)}build(t,n,r){Lu(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return Ru(t,n,r)}}class Yk extends Wg{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Z}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(yn.has(n)){const r=Wu(n);return r&&r.default||0}return n=Rm.has(n)?n:Cu(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return Im(t,n,r)}build(t,n,r){Au(t,n,this.isSVGTag,r.transformTemplate)}renderInstance(t,n,r,i){Dm(t,n,r,i)}mount(t){this.isSVGTag=Nu(t.tagName),super.mount(t)}}const qk=(e,t)=>Pu(e)?new Yk(t):new Qk(t,{allowProjection:e!==S.Fragment}),Zk=kw({...SC,...Bk,...Mk,...Uk},qk),xn=b1(Zk),Jk=[{id:0,name:"Claudeって何？",emoji:"🌱",description:"AIの基礎からClaude / Claude Codeの違いまで。完全初心者スタート。",color:"#10b981",bgGradient:"from-emerald-500/20 to-teal-500/20",estimatedHours:1,prerequisites:[],skills:["AI基礎理解","Claude.aiの使い方","料金プラン把握","LLMの概念"],lessons:[{id:"0-1",title:"AIとLLMを5分で理解する",description:"ChatGPT・Gemini・Claudeの違いと、LLMの仕組みをわかりやすく解説",duration:10,difficulty:"beginner",type:"reading",tags:["AI基礎","LLM","初心者"],content:`# AIとLLMを5分で理解する

## AIって何？

**AI（人工知能）** とは、人間の知的な作業をコンピュータで再現する技術の総称です。

最近よく聞く **LLM（Large Language Model：大規模言語モデル）** は、AIの一種で、大量のテキストデータを学習して「言葉を理解・生成する」ことに特化したモデルです。

---

## 主要AIサービスの比較

| サービス | 開発元 | 特徴 |
|---------|--------|------|
| Claude | Anthropic | 安全性重視・長文処理が得意 |
| ChatGPT | OpenAI | 最も広く普及・プラグイン豊富 |
| Gemini | Google | Google連携が強力 |
| Copilot | Microsoft | Office/GitHub統合 |

---

## ClaudeはどこがすごいのかS?

1. **コンテキスト窓が大きい** — 200,000トークン（約15万字）まで一度に処理
2. **安全性への配慮** — Constitutional AIという手法で有害出力を抑制
3. **コーディング能力** — 複雑なコードも高精度で生成・デバッグ
4. **日本語対応** — 高品質な日本語での対話が可能

---

## Claude と Claude Code の違い

> ここが一番大事なポイント！

**Claude（claude.ai）**
- ブラウザで使うチャットインターフェース
- 一般的な会話・文章作成・分析に使う
- プログラミングの相談もできる

**Claude Code**
- ターミナル（コマンドライン）で動くAIエージェント
- 実際にファイルを読み書きし、コマンドを実行できる
- プロジェクト全体を理解してコードを書いてくれる
- 「AIにコーディングを代行させる」ためのツール

**一言で言うと**: Claudeは「相談相手」、Claude Codeは「実際に手を動かしてくれる開発者」です。`,quiz:[{id:"q0-1-1",question:"LLMの正式名称は？",options:["Large Learning Machine","Large Language Model","Local Language Module","Layered Logic Machine"],correctIndex:1,explanation:"LLM = Large Language Model（大規模言語モデル）。大量のテキストデータで学習した言語AIです。"},{id:"q0-1-2",question:"Claude Code と Claude（claude.ai）の最大の違いは？",options:["料金が違う","Claude Codeはターミナルで動き、実際にファイル操作・コマンド実行ができる","Claudeの方が賢い","Claude Codeは音声対応している"],correctIndex:1,explanation:"Claude Codeはターミナルで動くAIエージェントで、ファイル読み書きやコマンド実行ができます。claude.aiはブラウザのチャットUIです。"}],externalLinks:[{title:"Claude 101（Anthropic Academy）",url:"https://anthropic.skilljar.com/claude-101",description:"Anthropic公式の無料Claude入門コース",type:"course"}]},{id:"0-2",title:"Claude.ai を5分で使ってみる",description:"アカウント作成から最初のメッセージ送信まで、ハンズオン体験",duration:10,difficulty:"beginner",type:"hands-on",tags:["Claude.ai","ハンズオン","初心者"],content:`# Claude.ai を5分で使ってみる

## ステップ1: アカウント作成

1. [claude.ai](https://claude.ai) にアクセス
2. 「Sign up」ボタンをクリック
3. Googleアカウントまたはメールアドレスで登録
4. メール認証を完了させる

## ステップ2: 最初のメッセージを送る

アカウント作成後、チャット画面が表示されます。

以下のプロンプトをコピペして送ってみましょう：

\`\`\`
こんにちは！私はプログラミング初心者です。
Pythonで「Hello, World!」を表示するプログラムを
作成し、各行を日本語で説明してください。
\`\`\`

## ステップ3: 料金プランを確認する

| プラン | 月額 | 特徴 |
|--------|------|------|
| Free | 無料 | 1日あたりの使用制限あり |
| Pro | $20/月 | 制限緩和・優先アクセス |
| Max 5x | $100/月 | Pro の5倍の使用量 |
| Max 20x | $200/月 | Pro の20倍の使用量 |
| API | 従量課金 | 開発者向け・Claude Code用 |

> **初心者おすすめ**: まずFreeプランで試す → 使い倒したくなったらProへ

## よくある質問

**Q: 日本語は使えますか？**
A: はい、高品質な日本語対応です。

**Q: 無料プランはどれくらい使えますか？**
A: 毎日一定数のメッセージが送れます（制限は変動します）。

**Q: Claude Codeを使うには有料プランが必要？**
A: Max プランまたは API キーが推奨です。Proでも基本動作します。`,codeExamples:[{title:"おすすめの最初のプロンプト",language:"text",code:`あなたはプロのPythonエンジニアです。
以下のことを教えてください：

1. Pythonとは何か（3行以内）
2. 初心者が最初に覚えるべき5つの概念
3. 「Hello, World!」プログラムとその説明

初心者向けに、専門用語は避けてわかりやすく説明してください。`,explanation:"ロールを指定し、具体的な要件を箇条書きにすることで、精度の高い回答が得られます。"}]},{id:"0-3",title:"料金プランと選び方",description:"Free/Pro/Max/API の違いと、あなたに最適なプランの選び方",duration:8,difficulty:"beginner",type:"reading",tags:["料金","プラン","選び方"],content:`# 料金プランと選び方

## プラン比較表

| プラン | 月額（USD） | Claude Code | 使用量 | おすすめの人 |
|--------|------------|-------------|--------|-------------|
| Free | 無料 | ❌ | 制限あり | とにかく試したい人 |
| Pro | $20 | ✅ | 中程度 | 個人利用・副業 |
| Max 5x | $100 | ✅ | Pro×5 | ヘビーユーザー |
| Max 20x | $200 | ✅ | Pro×20 | エージェント開発者 |
| API | 従量課金 | ✅ | 制限なし | 開発者・企業 |

## Claude Codeには何が必要？

Claude Codeを本格的に使うには以下のいずれか：

1. **Claude Pro以上のサブスク** → OAuthで認証（推奨・簡単）
2. **Anthropic API キー** → API従量課金（開発者向け）

## 判断フローチャート

\`\`\`
プログラミングを学びたい or 副業に使いたい
        ↓
    → Pro $20/月 からスタート

本格的にAIエージェントを開発したい
        ↓
    → Max 5x $100/月 以上

企業システムに組み込みたい
        ↓
    → API 従量課金
\`\`\`

## 日本円換算（参考）

- Pro: 約3,000円/月
- Max 5x: 約15,000円/月
- Max 20x: 約30,000円/月

> 為替レートによって変動します。クレジットカード必須。

## コスト最適化のコツ

1. **/compact コマンド**でコンテキストを圧縮（トークン節約）
2. **Haiku モデル**を軽いタスクに使う（高速・安価）
3. **Sonnet → Opus**の順で試す（重いタスクだけOpusを使う）`}]},{id:1,name:"インストール & 初期設定",emoji:"⚙️",description:"OS別インストール手順・認証設定・よくあるエラーの解決まで",color:"#3b82f6",bgGradient:"from-blue-500/20 to-cyan-500/20",estimatedHours:2,prerequisites:[0],skills:["Claude Codeインストール","認証設定","エラー解決","WSL設定"],lessons:[{id:"1-1",title:"Mac/Linux へのインストール",description:"npmを使ったインストールから初回起動まで",duration:15,difficulty:"beginner",type:"hands-on",tags:["インストール","Mac","Linux","npm"],content:`# Mac/Linux へのインストール

## 前提条件

- Node.js 18 以上（確認: \`node --version\`）
- npm 8 以上（確認: \`npm --version\`）

Node.jsが入っていない場合は [Node.js公式サイト](https://nodejs.org/ja/) から LTS版をインストール。

## インストール手順

\`\`\`bash
# Claude Codeをグローバルインストール
npm install -g @anthropic-ai/claude-code

# インストール確認
claude --version
\`\`\`

## 認証（初回起動）

\`\`\`bash
# プロジェクトフォルダに移動
cd ~/my-project

# Claude Code を起動（初回は認証が必要）
claude
\`\`\`

初回起動時に以下の2択が表示されます：

1. **Claude.ai アカウントでサインイン（推奨）**
   → ブラウザが開き、Anthropicアカウントでログイン

2. **API キーを使う**
   → [console.anthropic.com](https://console.anthropic.com) でキーを取得し入力

## インストール後の確認

\`\`\`bash
# バージョン確認
claude --version

# ヘルプ表示
claude --help

# 新しいプロジェクトで起動
mkdir my-first-project
cd my-first-project
claude
\`\`\`

起動すると \`>\` のプロンプトが表示されれば成功です！`,codeExamples:[{title:"完全インストール手順（コピペ用）",language:"bash",code:`# 1. Node.jsバージョン確認
node --version  # v18.x 以上が必要

# 2. Claude Codeインストール
npm install -g @anthropic-ai/claude-code

# 3. バージョン確認
claude --version

# 4. プロジェクトフォルダを作成して起動
mkdir my-first-project && cd my-first-project
claude`}]},{id:"1-2",title:"Windows / WSL へのインストール",description:"WSL2のセットアップからClaude Code起動まで（Windows完全ガイド）",duration:20,difficulty:"beginner",type:"hands-on",tags:["Windows","WSL","インストール"],content:`# Windows / WSL へのインストール

## なぜWSLが必要？

Claude CodeはLinux/Mac向けに最適化されています。
Windowsでも動きますが、**WSL2（Windows Subsystem for Linux）** を使うと安定して動作します。

## WSL2のセットアップ

### 方法A: WSL2経由（推奨）

\`\`\`powershell
# PowerShellを管理者で開いて実行
wsl --install

# 再起動後、Ubuntuが起動するのでユーザー名/パスワードを設定
\`\`\`

WSL2（Ubuntu）が起動したら:

\`\`\`bash
# Node.jsをインストール（nvmを使う）
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
nvm install --lts

# Claude Codeインストール
npm install -g @anthropic-ai/claude-code

# 起動確認
claude --version
\`\`\`

### 方法B: Windowsネイティブ（PowerShell）

\`\`\`powershell
# Node.jsをwingetでインストール
winget install OpenJS.NodeJS.LTS

# Claude Codeインストール
npm install -g @anthropic-ai/claude-code

# バージョン確認
claude --version
\`\`\`

## WSL2でVS Codeと連携する

\`\`\`bash
# WSL内からVS Codeを開く
code .

# VS Code + Claude Code の組み合わせが最強
\`\`\`

## よくあるWindowsエラーと解決策

**エラー: EACCES permission denied**
\`\`\`bash
# npmグローバルのパスを修正
npm config set prefix ~/.npm-global
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
\`\`\`

**エラー: command not found: claude**
\`\`\`bash
# PATHの再設定
source ~/.bashrc
# または
export PATH="$(npm root -g)/.bin:$PATH"
\`\`\``,quiz:[{id:"q1-2-1",question:"WindowsでClaude Codeを使う推奨方法は？",options:["PowerShellのみで使う","WSL2（Windows Subsystem for Linux）経由で使う","Dockerコンテナ内で使う","コマンドプロンプトで使う"],correctIndex:1,explanation:"WSL2経由が最も安定しています。Claude CodeはLinux/Mac向けに最適化されているためです。"}]},{id:"1-3",title:"よくあるエラーと解決策",description:"インストール・起動・認証でつまずいたときのトラブルシューティング",duration:15,difficulty:"beginner",type:"reading",tags:["エラー","トラブルシューティング","FAQ"],content:`# よくあるエラーと解決策

## 🔴 インストール系エラー

### EACCES: permission denied
\`\`\`bash
# 解決策：npmの権限設定を変更
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
npm install -g @anthropic-ai/claude-code
\`\`\`

### node: command not found
\`\`\`bash
# Node.jsが入っていないのでインストール
# Mac（Homebrewを使う場合）
brew install node

# Ubuntu/Debian
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
\`\`\`

---

## 🔴 認証系エラー

### Authentication failed / 401 Unauthorized
**原因**: APIキーが間違っている、または期限切れ
\`\`\`bash
# 環境変数でAPIキーを再設定
export ANTHROPIC_API_KEY="sk-ant-api03-..."
# または .env ファイルに書く
echo "ANTHROPIC_API_KEY=sk-ant-api03-..." > .env
\`\`\`

### ブラウザが開かない（OAuth認証）
\`\`\`bash
# ヘッドレス環境（サーバー等）ではURLを手動コピー
# 表示されたURLをブラウザで開いて認証を完了させる
\`\`\`

---

## 🔴 実行系エラー

### Context window exceeded
**原因**: 会話が長くなりすぎた
\`\`\`bash
# コンテキストを圧縮する
/compact

# または新しいセッションを開始
claude
\`\`\`

### Rate limit exceeded
**原因**: 短時間での使いすぎ
- しばらく待ってから再試行
- より上位のプランにアップグレード

---

## チェックリスト

インストール後に確認すること：

- [ ] \`node --version\` → v18以上
- [ ] \`npm --version\` → v8以上
- [ ] \`claude --version\` → バージョン番号が表示される
- [ ] \`claude\` を実行してプロンプトが表示される
- [ ] 簡単なメッセージを送って応答が返ってくる`}]},{id:2,name:"基本コマンド & 対話術",emoji:"💬",description:"スラッシュコマンド全一覧・良いプロンプトの書き方・コンテキスト管理術",color:"#8b5cf6",bgGradient:"from-violet-500/20 to-purple-500/20",estimatedHours:3,prerequisites:[1],skills:["スラッシュコマンド","プロンプト設計","コンテキスト管理","モデル選択"],lessons:[{id:"2-1",title:"claude コマンドの使い分け",description:"claude / --continue / --resume の違いと使いどころ",duration:12,difficulty:"beginner",type:"reading",tags:["コマンド","セッション管理"],content:`# claude コマンドの使い分け

## 基本的な起動方法

\`\`\`bash
# 新しいセッションを開始（最もよく使う）
claude

# 前のセッションを続ける（最後のセッション）
claude --continue
# 短縮形
claude -c

# 過去のセッション一覧から選んで再開
claude --resume
# 短縮形
claude -r
\`\`\`

## 起動時にメッセージを渡す

\`\`\`bash
# 起動と同時にメッセージを送る
claude "このファイルのバグを直して"

# ファイルを指定して渡す
claude "このコードをレビューして" --file main.py

# 特定のモデルを指定して起動
claude --model claude-opus-4-7
\`\`\`

## ヘッドレスモード（自動化向け）

\`\`\`bash
# 対話なしで1回だけ実行して終了（スクリプトに組み込む）
claude --print "package.jsonを読んでプロジェクト概要を50字で説明して"

# 出力をファイルに保存
claude --print "READMEを生成して" > README.md
\`\`\`

## セッション管理の考え方

| 状況 | 使うコマンド |
|------|-------------|
| 新しいプロジェクトを始める | \`claude\` |
| 昨日の続きからやりたい | \`claude --continue\` |
| 数日前のセッションに戻りたい | \`claude --resume\` |
| スクリプトに組み込みたい | \`claude --print\` |`,codeExamples:[{title:"よく使うコマンドパターン",language:"bash",code:`# 日常的なワークフロー
claude                          # 新セッション開始
claude -c                       # 前のセッション継続
claude -r                       # 過去セッションから選択

# 一発実行（CI/CDやスクリプトに）
claude -p "テストを実行してエラーを修正して"

# モデル指定
claude --model claude-haiku-4-5-20251001  # 高速・安価
claude --model claude-sonnet-4-6          # バランス
claude --model claude-opus-4-7            # 最高精度`}]},{id:"2-2",title:"スラッシュコマンド完全ガイド",description:"セッション内で使える全スラッシュコマンドの使い方",duration:15,difficulty:"beginner",type:"reading",tags:["スラッシュコマンド","ショートカット"],content:`# スラッシュコマンド完全ガイド

Claude Codeのセッション内で \`/\` から始まるコマンドを使えます。

## 基本コマンド

| コマンド | 説明 |
|----------|------|
| \`/help\` | コマンド一覧を表示 |
| \`/clear\` | 会話履歴をクリアして新しく始める |
| \`/compact\` | コンテキストを要約して圧縮（トークン節約） |
| \`/cost\` | 現在のセッションのAPI使用コストを表示 |
| \`/status\` | 現在のセッション情報を表示 |

## モデル・プラン変更

| コマンド | 説明 |
|----------|------|
| \`/model\` | 使用するモデルを変更 |
| \`/model claude-opus-4-7\` | Opusに切り替え |
| \`/model claude-haiku-4-5-20251001\` | Haikuに切り替え（高速） |

## モード変更

| コマンド | 説明 |
|----------|------|
| \`/plan\` | Planモードに切り替え（実行前に計画を確認） |
| \`Shift+Tab\` | Planモードのトグル（キーボードショートカット） |

## ファイル・プロジェクト系

| コマンド | 説明 |
|----------|------|
| \`/init\` | CLAUDE.mdを自動生成してプロジェクト設定 |
| \`/review\` | 現在の変更をコードレビュー |
| \`/add-dir <path>\` | 追加のディレクトリをコンテキストに追加 |

## メモリ・設定

| コマンド | 説明 |
|----------|------|
| \`/memory\` | グローバルメモリ（~/.claude/CLAUDE.md）を編集 |
| \`/config\` | 設定画面を開く |
| \`/doctor\` | 環境チェック・問題診断 |

## コツ

\`\`\`
# 長い会話でコンテキストが詰まってきたら
/compact

# 使用コストが気になったら
/cost

# 新しいトピックを始めるとき（文脈をリセット）
/clear
\`\`\``,quiz:[{id:"q2-2-1",question:"コンテキストウィンドウが埋まってきたときに使うコマンドは？",options:["/clear","/compact","/cost","/reset"],correctIndex:1,explanation:"/compact は会話履歴を要約・圧縮してトークンを節約します。/clear は履歴を完全に削除します。"}]},{id:"2-3",title:"良いプロンプトの書き方",description:"Claude Codeから最高の出力を引き出すプロンプト設計術",duration:20,difficulty:"intermediate",type:"reading",tags:["プロンプト","ベストプラクティス"],content:`# 良いプロンプトの書き方

## 黄金ルール：CTCQ原則

| 要素 | 内容 | 例 |
|------|------|-----|
| **C**ontext（文脈） | 状況・環境を説明 | 「React 18 + TypeScriptのプロジェクトで」 |
| **T**ask（タスク） | 何をして欲しいか明確に | 「ログイン機能を実装して」 |
| **C**onstraints（制約） | 制限・条件を書く | 「JWT認証を使って、テストも書いて」 |
| **Q**uality（品質基準） | 期待する出力形式 | 「TypeScriptの型を全て明示して」 |

---

## ❌ 悪いプロンプト vs ✅ 良いプロンプト

### 例1: バグ修正

❌ **悪い例**
\`\`\`
このコードを直して
\`\`\`

✅ **良い例**
\`\`\`
以下のTypeScriptコードで型エラーが出ています。
エラーメッセージ: "Property 'name' does not exist on type 'User'"
Userインターフェースに name フィールドを追加する形で修正し、
既存のテストが壊れないようにしてください。
\`\`\`

---

### 例2: 機能開発

❌ **悪い例**
\`\`\`
検索機能を作って
\`\`\`

✅ **良い例**
\`\`\`
React + TypeScript で商品検索機能を実装してください。
要件:
- 入力に応じてリアルタイムでフィルタリング（debounce: 300ms）
- 商品名・説明文を対象に検索
- 検索結果件数を表示
- 検索中はローディングスピナーを表示
- 検索結果ゼロのときは「見つかりませんでした」を表示
既存の Product 型は src/types/product.ts に定義済みです。
\`\`\`

---

## think / ultrathink の使い方

複雑な問題には思考を深めるキーワードを追加できます：

\`\`\`
think について：軽い思考（複雑でない問題）
think harder：より深く考える
ultrathink：最も深く・時間をかけて考える（複雑なアーキテクチャ設計等）
\`\`\`

**例**:
\`\`\`
このマイクロサービスアーキテクチャの設計を
ultrathink で検討して、スケーラビリティと
コストのバランスを評価してください。
\`\`\`

---

## @ 記法でファイルを参照する

\`\`\`
@src/components/Header.tsx を参考に、
同じスタイルでFooterコンポーネントを作って
\`\`\`

\`\`\`
@package.json と @src/index.ts を確認して、
プロジェクトの概要を説明して
\`\`\``,codeExamples:[{title:"最強プロンプトテンプレート",language:"text",code:`【役割】あなたは[役割]です。

【背景・文脈】
[プロジェクトや状況の説明]

【タスク】
[具体的にやってほしいこと]

【制約条件】
- [制約1]
- [制約2]

【期待する出力】
[出力形式・品質基準]

【参考ファイル】
@[ファイルパス]`,explanation:"このテンプレートを使うと、Claudeが必要な情報を全て把握した上で実装できます。"}]}]},{id:3,name:"CLAUDE.md 設計術",emoji:"📝",description:'プロジェクトの"記憶"を作る。CLAUDE.mdの設計からテンプレート集まで',color:"#f59e0b",bgGradient:"from-amber-500/20 to-orange-500/20",estimatedHours:3,prerequisites:[2],skills:["CLAUDE.md設計","プロジェクト設定","テンプレート活用","@ファイル参照"],lessons:[{id:"3-1",title:"CLAUDE.md とは？役割と基本構造",description:'Claude Codeへの"プロジェクト説明書"の作り方',duration:15,difficulty:"intermediate",type:"reading",tags:["CLAUDE.md","設定","ベストプラクティス"],content:`# CLAUDE.md とは？

## CLAUDE.md の役割

CLAUDE.mdは **Claude Codeへのプロジェクト説明書** です。

セッションを開始するたびにClaude Codeが自動的に読み込み、
プロジェクトのルール・構造・注意事項を把握します。

**「毎回同じことを説明しなくていい」** のが最大のメリット。

---

## 配置場所

| 場所 | 役割 |
|------|------|
| \`~/.claude/CLAUDE.md\` | グローバル設定（全プロジェクト共通） |
| \`./CLAUDE.md\` | プロジェクトルート（チーム共有） |
| \`./src/CLAUDE.md\` | サブディレクトリ（特定ディレクトリのルール） |

---

## 基本構造

\`\`\`markdown
# プロジェクト名

## プロジェクト概要
[3行以内で何を作っているか]

## 技術スタック
[使用技術の一覧]

## ディレクトリ構造
[重要なフォルダの説明]

## 開発ルール
[コーディング規約・命名規則]

## よく使うコマンド
[npm run dev などのコマンド]

## 重要な注意事項
[やってはいけないこと・落とし穴]
\`\`\`

---

## 自動生成する方法

\`\`\`bash
# プロジェクトルートで実行
# Claude Codeがコードを読んでCLAUDE.mdを自動生成
/init
\`\`\`

---

## CLAUDE.md の設計原則

1. **短く保つ** — 長すぎると読まれない。500字以内が理想
2. **具体的に書く** — 「いい感じに」より「TypeScriptのany禁止」
3. **更新する** — プロジェクトの変化に合わせて常に最新状態を保つ
4. **禁止事項を書く** — 「やってはいけないこと」が最も重要`,codeExamples:[{title:"Webアプリ用 CLAUDE.md テンプレート",language:"markdown",code:`# My Web App

## 概要
[アプリ名]。React + TypeScript + Tailwind CSS製のWebアプリ。

## 技術スタック
- Frontend: React 18, TypeScript, Tailwind CSS, Vite
- State: Zustand
- Testing: Vitest + React Testing Library
- API: Node.js + Express

## よく使うコマンド
\`\`\`bash
npm run dev      # 開発サーバー起動
npm run test     # テスト実行
npm run build    # 本番ビルド
\`\`\`

## コーディングルール
- TypeScript の any 型は禁止（unknown を使う）
- コンポーネントは 200 行以内
- コメントは日本語で
- テストカバレッジ 80% 以上を維持

## 禁止事項
- 本番DBに直接接続しない
- APIキーをコードにハードコードしない
- console.log を本番コードに残さない`}]},{id:"3-2",title:"実践テンプレート集",description:"副業・SNS・Python・個人開発など用途別CLAUDE.mdテンプレート10種",duration:20,difficulty:"intermediate",type:"reading",tags:["テンプレート","CLAUDE.md","副業","SNS"],content:`# 実践テンプレート集

## テンプレート1: 副業・Webサービス開発

\`\`\`markdown
# 副業Webサービス開発

## 目標
月収30万円を目指すWebサービス。集客→収益化の自動化。

## 現在の開発フェーズ
フェーズ2（機能追加）

## 技術
Next.js 14, TypeScript, Prisma, PostgreSQL, Stripe決済

## 収益モデル
月額サブスク ¥980/月 → Stripe Webhookで自動管理

## 優先ルール
- ユーザー体験 > コード美しさ
- シンプルに動くもの > 過剰に抽象化されたもの
- LPのCVR改善を常に意識する
\`\`\`

---

## テンプレート2: X(Twitter) SNS自動化

\`\`\`markdown
# X自動投稿システム

## 概要
Claude Code + n8n でX(Twitter)の自動投稿を管理する

## 投稿ルール
- 朝7時: 学習系コンテンツ
- 昼12時: ライフスタイル系
- 夕18時: 副業・お金系
- 文字数: 100〜140字
- ハッシュタグ: 3個以内

## NG事項
- 政治・宗教・医療の断言はしない
- 他者を批判する内容は避ける
- 根拠のない数字を使わない
\`\`\`

---

## テンプレート3: Python データ分析

\`\`\`markdown
# データ分析プロジェクト

## 環境
Python 3.11, pandas, numpy, matplotlib, scikit-learn
Jupyter Lab で作業

## データ
data/raw/: 生データ（加工しない）
data/processed/: 加工済みデータ
notebooks/: 分析ノートブック

## ルール
- 生データは絶対に上書きしない
- 分析結果は必ずグラフで可視化
- データ件数は常に確認して報告すること
\`\`\`

---

## テンプレート4: グローバル設定（~/.claude/CLAUDE.md）

\`\`\`markdown
# グローバル設定

## 私のプロフィール
- 役割: フリーランスエンジニア
- 得意: TypeScript, React, Node.js
- 目標: 副業で月収50万円

## 作業スタイル
- 説明は日本語で
- コードコメントも日本語
- エラーは原因→解決策の順で説明

## セキュリティ
- .envファイルの内容は絶対に出力しない
- パスワードが含まれる場合は [REDACTED] に置き換える
\`\`\``}]},{id:4,name:"Plan Mode & 高度な推論",emoji:"🧠",description:"Plan Mode・think系キーワード・モデル選択で精度を最大化する",color:"#ec4899",bgGradient:"from-pink-500/20 to-rose-500/20",estimatedHours:3,prerequisites:[3],skills:["Plan Mode操作","think/ultrathink","モデル選択","opusplanエイリアス"],lessons:[{id:"4-1",title:"Plan Mode の使い方",description:"実行前に計画を確認・修正できるPlan Modeで安全に大規模変更",duration:15,difficulty:"intermediate",type:"hands-on",tags:["Plan Mode","安全","大規模変更"],content:`# Plan Mode の使い方

## Plan Mode とは？

通常のClaude Codeは「指示→即実行」ですが、
**Plan Mode** は「指示→計画提示→承認→実行」のフローになります。

大きな変更・危険な操作を行う前に **計画をレビューできる** のが最大のメリット。

---

## Plan Mode の起動方法

### 方法1: キーボードショートカット
\`\`\`
Shift + Tab（2回連続）
\`\`\`
ステータスバーに「Plan Mode」と表示されれば有効。

### 方法2: スラッシュコマンド
\`\`\`
/plan
\`\`\`

### 方法3: エイリアス設定（おすすめ）
\`\`\`bash
# ~/.bashrc または ~/.zshrc に追加
alias opusplan='claude --model claude-opus-4-7 --plan'

# 使い方
opusplan "新しいDB設計をゼロから行う"
\`\`\`

---

## Plan Mode の実践フロー

\`\`\`
1. Plan Mode を起動
   ↓
2. 「○○を実装して」と指示
   ↓
3. Claude が実装計画を提示
   例: 「以下のファイルを変更します:
        - src/api/user.ts (認証追加)
        - src/db/schema.ts (テーブル追加)
        - test/api/user.test.ts (テスト追加)」
   ↓
4. 計画を確認・修正
   「3番は後でいいです、1と2だけやって」など
   ↓
5. 承認 → 実行
\`\`\`

---

## Plan Mode が特に有効な場面

- データベーススキーマの変更
- 認証システムの実装
- 大規模リファクタリング
- 複数ファイルにまたがる変更
- 本番環境に近い作業`},{id:"4-2",title:"think / ultrathink で精度を上げる",description:"思考モードの使い分けで複雑な問題をより深く解決する",duration:12,difficulty:"intermediate",type:"reading",tags:["think","ultrathink","推論","精度向上"],content:`# think / ultrathink で精度を上げる

## 思考モードの種類

| キーワード | 思考量 | 向いているタスク |
|-----------|--------|----------------|
| （なし） | 標準 | 日常的な質問・簡単なコード |
| \`think\` | ×2程度 | 少し複雑な設計・バグ分析 |
| \`think harder\` | ×4程度 | アーキテクチャ設計・複雑なデバッグ |
| \`ultrathink\` | 最大 | システム設計・難しいアルゴリズム |

---

## 使い方

単純にプロンプトに追加するだけ：

\`\`\`
ultrathink して、このマイクロサービスアーキテクチャの
スケーラビリティ問題を分析してください。
\`\`\`

\`\`\`
think harder で、このSQLクエリを最適化する方法を
3パターン提案してください。
\`\`\`

---

## コスト vs 精度のバランス

\`\`\`
単純な質問      → think なし（速い・安い）
設計の相談      → think
アーキ設計      → think harder
システム全体設計 → ultrathink（時間・コストかかるが精度最高）
\`\`\`

---

## モデルと組み合わせる

\`\`\`bash
# Opus + ultrathink = 最強コンビ（コスト高め）
claude --model claude-opus-4-7
> ultrathink して...

# Sonnet + think = コスパ最良
claude --model claude-sonnet-4-6
> think して...

# Haiku = 速いタスクに（思考モード不要）
claude --model claude-haiku-4-5-20251001
\`\`\``,quiz:[{id:"q4-2-1",question:"システム全体のアーキテクチャ設計をClaudeに依頼するとき、最適な組み合わせは？",options:["Haiku + think なし","Sonnet + think","Opus + ultrathink","Haiku + ultrathink"],correctIndex:2,explanation:"Opus（最高精度モデル）+ ultrathink（最大思考量）の組み合わせが複雑なアーキテクチャ設計に最適です。コストはかかりますが精度が段違いです。"}]}]},{id:5,name:"Hooks & Skills",emoji:"🔧",description:"Hooksで自動化・Skillsでカスタムコマンド作成。Claude Codeを自分仕様に拡張",color:"#06b6d4",bgGradient:"from-cyan-500/20 to-sky-500/20",estimatedHours:4,prerequisites:[4],skills:["Hooks設定","カスタムSkills","自動lint","自動テスト","Before/After フック"],lessons:[{id:"5-1",title:"Hooks で作業を自動化する",description:"ファイル保存時の自動lint・コミット前テスト・危険コマンドブロックの実装",duration:25,difficulty:"advanced",type:"hands-on",tags:["Hooks","自動化","lint","テスト"],content:`# Hooks で作業を自動化する

## Hooks とは？

Claude Codeの操作に反応して **自動的にコマンドを実行** する仕組みです。

---

## Hooksの3種類

| タイミング | 設定名 | 例 |
|-----------|--------|-----|
| ツール実行前 | \`PreToolUse\` | 危険コマンドをブロック |
| ツール実行後 | \`PostToolUse\` | 保存後にlint実行 |
| セッション終了時 | \`Stop\` | 全テスト実行 |

---

## 設定ファイルの場所

\`\`\`
~/.claude/settings.json        # グローバル設定
.claude/settings.json          # プロジェクト設定（チーム共有）
.claude/settings.local.json    # ローカル設定（gitignore推奨）
\`\`\`

---

## 実践例1: ファイル保存時に自動lint

\`\`\`json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          {
            "type": "command",
            "command": "eslint --fix $(jq -r '.tool_input.file_path // .tool_response.filePath' 2>/dev/null) 2>/dev/null || true"
          }
        ]
      }
    ]
  }
}
\`\`\`

---

## 実践例2: rm -rf をブロック

\`\`\`json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "cmd=$(jq -r '.tool_input.command'); if echo \\"$cmd\\" | grep -q 'rm -rf'; then echo '{\\"decision\\":\\"block\\",\\"reason\\":\\"rm -rfは危険なため禁止されています\\"}'; fi"
          }
        ]
      }
    ]
  }
}
\`\`\`

---

## 実践例3: セッション終了時に全テスト実行

\`\`\`json
{
  "hooks": {
    "Stop": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "cd $(pwd) && npm test -- --reporter=verbose 2>&1 | tail -20"
          }
        ]
      }
    ]
  }
}
\`\`\``,codeExamples:[{title:"完全なsettings.json例",language:"json",code:`{
  "permissions": {
    "defaultMode": "bypassPermissions"
  },
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          {
            "type": "command",
            "command": "FILE=$(jq -r '.tool_input.file_path // empty'); [ -n \\"$FILE\\" ] && npx eslint --fix \\"$FILE\\" 2>/dev/null || true",
            "timeout": 30
          }
        ]
      }
    ],
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "CMD=$(jq -r '.tool_input.command'); echo \\"$CMD\\" | grep -qE 'rm -rf|DROP TABLE|DELETE FROM' && echo '{\\"decision\\":\\"block\\",\\"reason\\":\\"危険なコマンドをブロックしました\\"}' || true"
          }
        ]
      }
    ]
  }
}`}]},{id:"5-2",title:"カスタムSlashコマンド（Skills）を作る",description:"/code-review /sns-post など自分だけのコマンドを作成する方法",duration:20,difficulty:"advanced",type:"hands-on",tags:["Skills","カスタムコマンド","スラッシュコマンド"],content:`# カスタムSlashコマンド（Skills）を作る

## Skills とは？

\`.claude/skills/\` フォルダにMarkdownファイルを置くだけで
カスタムの \`/コマンド名\` が作れます。

---

## ファイル配置

\`\`\`
.claude/
  skills/
    code-review.md    → /code-review コマンド
    sns-post.md       → /sns-post コマンド
    translate.md      → /translate コマンド
\`\`\`

---

## Skillファイルの基本構造

\`\`\`markdown
---
name: code-review
description: コードレビューを行い改善点を日本語で報告する
argument-hint: "[ファイルパスまたは 'staged']"
---

# コードレビュー

以下のコードをレビューし、日本語で報告してください：

$ARGUMENTS

## レビュー観点
1. バグ・論理エラーの可能性
2. パフォーマンス問題
3. セキュリティリスク
4. 可読性・命名規則
5. テストの網羅性

各観点について [問題なし / 要改善 / 重大] で評価し、
改善案をコード例付きで提示してください。
\`\`\`

---

## 実践Skill: SNS投稿生成

\`\`\`markdown
---
name: sns-post
description: トピックからX(Twitter)投稿文を3パターン生成
argument-hint: "[投稿のテーマ]"
---

以下のテーマでX(Twitter)投稿文を3パターン作成してください:

テーマ: $ARGUMENTS

## 制約
- 各パターン: 100〜140字
- ハッシュタグ: 2〜3個
- 朝版・昼版・夕版でトーンを変える
- ターゲット: 副業・AI活用に興味がある20〜40代

## 出力形式
【朝版 ☀️】
[投稿文] #タグ1 #タグ2

【昼版 🌤️】
...

【夕版 🌙】
...
\`\`\`

---

## 使い方

\`\`\`bash
# セッション内でスラッシュコマンドとして実行
/code-review src/api/user.ts
/sns-post "Claude Codeで副業収入を増やす方法"
\`\`\``}]},{id:6,name:"MCP 連携",emoji:"🔌",description:"Model Context Protocol でGitHub・Slack・Notion・YouTubeと連携する",color:"#7c3aed",bgGradient:"from-purple-500/20 to-violet-500/20",estimatedHours:5,prerequisites:[5],skills:["MCP概念理解","GitHub MCP","Slack MCP","YouTube MCP","MCP自作"],lessons:[{id:"6-1",title:"MCP（Model Context Protocol）とは？",description:"Claude Codeの機能を外部サービスに拡張するMCPの概念を図解で理解",duration:15,difficulty:"advanced",type:"reading",tags:["MCP","概念","連携"],content:`# MCP（Model Context Protocol）とは？

## MCPの概念

**MCP（Model Context Protocol）** は、AIモデルと外部ツール・サービスを
接続するための標準プロトコルです。

\`\`\`
Claude Code ←→ MCP Server ←→ 外部サービス
               （橋渡し役）
\`\`\`

---

## MCPで何ができるようになるか

| MCP Server | できること |
|------------|-----------|
| GitHub MCP | PR作成・レビュー・Issue管理 |
| Slack MCP | チャンネルへの投稿・読み取り |
| Notion MCP | ページ作成・データベース操作 |
| YouTube MCP | 動画情報取得・字幕抽出 |
| PostgreSQL MCP | DB操作（SELECT/INSERT等） |
| Puppeteer MCP | Webスクレイピング・自動操作 |
| Custom MCP | 自分で作った任意のサービス |

---

## MCPの設定方法

\`\`\`bash
# MCPサーバーを追加
claude mcp add <name> <command> [args...]

# 例: Gitプッシュカレント
claude mcp add github npx @anthropic-ai/mcp-server-github

# 追加済みの一覧確認
claude mcp list

# MCPサーバーを削除
claude mcp remove <name>
\`\`\`

---

## 設定ファイルでの管理

\`\`\`json
// ~/.claude/settings.json または .claude/settings.json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@anthropic-ai/mcp-server-github"],
      "env": {
        "GITHUB_TOKEN": "\${GITHUB_TOKEN}"
      }
    },
    "notion": {
      "command": "npx",
      "args": ["-y", "@anthropic-ai/mcp-server-notion"],
      "env": {
        "NOTION_API_KEY": "\${NOTION_API_KEY}"
      }
    }
  }
}
\`\`\``,externalLinks:[{title:"Introduction to MCP（Anthropic Academy）",url:"https://anthropic.skilljar.com/introduction-to-mcp",description:"Anthropic公式のMCP入門コース",type:"course"}]},{id:"6-2",title:"YouTube MCP で動画を解析する",description:"YouTube URLを渡すだけで全文抽出・要約・構造化する実践設定",duration:25,difficulty:"advanced",type:"hands-on",tags:["YouTube","MCP","動画解析","字幕抽出"],content:`# YouTube MCP で動画を解析する

## 必要なもの

- yt-dlp（動画情報取得ツール）
- Python 3.x
- youtube_transcript_api

## セットアップ

\`\`\`bash
# yt-dlpのインストール
pip install yt-dlp youtube_transcript_api

# MCPサーバーのインストール
npm install -g @anthropic-ai/mcp-server-youtube
\`\`\`

## Claude Codeに追加

\`\`\`bash
claude mcp add youtube npx @anthropic-ai/mcp-server-youtube
\`\`\`

## 使い方

\`\`\`
# セッション内で
YouTubeのこの動画を要約してください:
https://www.youtube.com/watch?v=XXXXXXXXX

以下の形式でまとめてください:
1. 動画の概要（3行）
2. 主要ポイント（箇条書き5点）
3. 印象的な発言・引用
4. 実践できるアクションアイテム
\`\`\`

## yt-dlpを使った字幕取得（手動）

\`\`\`bash
# 日本語字幕を取得
yt-dlp --write-sub --sub-lang ja --skip-download "https://youtu.be/XXXXX"

# 自動字幕（ASR）を取得
yt-dlp --write-auto-sub --sub-lang ja --skip-download "https://youtu.be/XXXXX"

# SRTをテキストに変換してClaudeに渡す
cat subtitle.ja.srt | claude "この字幕を要約して"
\`\`\`

## 活用パターン

- **競合分析**: 同業者の動画を一括解析
- **学習効率化**: 長い動画の要点だけ抽出
- **コンテンツ参考**: バズ動画の構成を分析
- **台本作成**: 人気動画のパターンを学んで自分の台本に活用`}]},{id:7,name:"Agent Teams",emoji:"🤖",description:"複数のAIエージェントをチームとして動かす最上級テクニック",color:"#f43f5e",bgGradient:"from-rose-500/20 to-red-500/20",estimatedHours:6,prerequisites:[6],skills:["Subagents理解","Agent Teams設定","並列開発","コスト管理","SNSエージェント設計"],lessons:[{id:"7-1",title:"Subagents と Agent Teams の概念",description:"ボスと部下の関係でAIを使いこなす。並列処理で開発を10倍速に",duration:20,difficulty:"expert",type:"reading",tags:["Subagents","Agent Teams","並列処理"],content:`# Subagents と Agent Teams の概念

## Subagents とは？

Claude Codeの「メインエージェント（ボス）」が
**タスクを分割して複数のサブエージェント（部下）に並列で割り当てる** 仕組みです。

\`\`\`
メインエージェント（ボス）
    ├── サブエージェントA（フロントエンド実装）
    ├── サブエージェントB（バックエンドAPI実装）
    ├── サブエージェントC（テスト作成）
    └── サブエージェントD（ドキュメント生成）
            ↓ 全員が並列に動作
         完了したものから報告
\`\`\`

---

## Agent Teams（2026年2月〜）

\`Shift + T\` でチームビューを起動すると、
複数のエージェントをビジュアルで管理できます。

\`\`\`
Shift + T → チームビュー起動
\`\`\`

---

## 並列処理のメリット

| 通常モード | Agent Teamsモード |
|-----------|-----------------|
| 順次処理（A→B→C） | 並列処理（A+B+C同時） |
| 3時間かかるタスク | 1時間で完了 |
| コンテキストが1つ | 各エージェントが独立コンテキスト |

---

## コスト計算

Agent Teamsはエージェント数分のAPIコールが発生します：

\`\`\`
4エージェント × 各2万トークン消費 = 8万トークン
Sonnet の場合: 約$0.24 = 約36円
Opus の場合: 約$2.40 = 約360円
\`\`\`

---

## 実践例: SNSコンテンツ生成チーム

\`\`\`
リードエージェント: 週次コンテンツ計画を立案・統括

サブエージェント構成:
A: リサーチ → バズトレンド・競合分析
B: X投稿生成 → 21投稿（朝昼夕×7日）
C: note記事生成 → 月4本
D: 品質チェック → 誤字・トーン・炎上リスク確認
E: 画像プロンプト → DALL-E 3用プロンプト生成
\`\`\`

このチームで **週1回の指示だけで** SNS運用が自動化できます。`},{id:"7-2",title:"実践：SNS自動生成エージェントを組む",description:"副業・SNS運用を完全自動化するAgent Teams実装ガイド",duration:30,difficulty:"expert",type:"hands-on",tags:["Agent Teams","SNS自動化","副業","実践"],content:`# 実践：SNS自動生成エージェントを組む

## 設計図

\`\`\`
ユーザー → 「副業副業について今週のコンテンツを作って」
    ↓
リードエージェント
    ├── 🔍 リサーチA: 今週のトレンド調査
    ├── ✍️ ライターB: X投稿21本生成
    ├── 📝 ブログC: note記事4本の骨格作成
    ├── 🎨 デザインD: サムネイル案・画像プロンプト
    └── ✅ QCC: 全コンテンツの品質チェック
\`\`\`

## CLAUDE.md（エージェントチーム設定）

\`\`\`markdown
# SNS自動生成エージェント設定

## チームの役割分担
- リード: 全体指揮・品質管理
- リサーチャー: トレンド分析・競合調査
- ライター: 投稿文・記事生成
- デザイナー: ビジュアル提案

## コンテンツ方針
- ターゲット: 副業初心者・会社員
- トーン: 親しみやすく・具体的・共感重視
- キーワード: 副業/AI/時短/収入/自由

## 出力形式
必ず以下のファイルに保存:
- output/x_posts.md (X投稿21本)
- output/note_outlines.md (note構成4本)
- output/image_prompts.md (画像プロンプト)
\`\`\`

## 実行コマンド

\`\`\`bash
# Shift+T でチームビュー起動後、以下を入力:
今週のコンテンツテーマ「Claude Codeで副業収入を増やす方法」で
SNSコンテンツパッケージを作成してください。

出力:
- X投稿: 朝/昼/夕 各7本（計21本）
- note記事骨格: 4本（各5,000字以上を想定）
- DALL-E 3サムネイルプロンプト: 4本

各エージェントが並列で作業し、
リードエージェントが最終的にまとめてください。
\`\`\``}]}];function Hg(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=Hg(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function _f(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=Hg(e))&&(r&&(r+=" "),r+=t);return r}function eP(){const{sidebarOpen:e}=pm(),{levels:t}=mm(),n=[{to:"/",icon:Ox,label:"ホーム"},{to:"/guide",icon:Ax,label:"🔰 初心者ガイド",highlight:!0},{to:"/skills",icon:pu,label:"⚡ SKILLライブラリ",highlight:!1},{to:"/tools",icon:Ux,label:"⚖️ ツール比較",highlight:!1},{to:"/roadmap",icon:Fx,label:"ロードマップ"},{to:"/sns-tools",icon:Hx,label:"SNS活用"},{to:"/academy",icon:Vx,label:"Academy"},{to:"/prompts",icon:Mx,label:"プロンプト集"},{to:"/community",icon:Gx,label:"コミュニティ"}];return m.jsx(is,{children:e&&m.jsx(xn.aside,{initial:{width:0,opacity:0},animate:{width:260,opacity:1},exit:{width:0,opacity:0},transition:{duration:.2,ease:"easeInOut"},className:"hidden md:flex flex-col bg-gray-900 border-r border-gray-800 overflow-hidden shrink-0",children:m.jsxs("div",{className:"flex-1 overflow-y-auto py-4 space-y-6",children:[m.jsx("nav",{className:"px-3 space-y-1",children:n.map(({to:r,icon:i,label:s,highlight:o})=>m.jsxs(hd,{to:r,end:r==="/",className:({isActive:a})=>_f("flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",a?"bg-brand-500/20 text-brand-400":o?"text-yellow-300 hover:text-yellow-100 hover:bg-yellow-500/10 border border-yellow-500/30":"text-gray-400 hover:text-white hover:bg-gray-800"),children:[m.jsx(i,{size:18}),m.jsx("span",{children:s})]},r))}),m.jsxs("div",{className:"px-3",children:[m.jsx("p",{className:"text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-3",children:"学習レベル"}),m.jsx("div",{className:"space-y-1",children:Jk.map(r=>{const i=t[r.id],s=(i==null?void 0:i.unlocked)??r.id===0,o=Object.values((i==null?void 0:i.lessonsProgress)??{}).filter(u=>u.completed).length,a=r.lessons.length,l=a>0?Math.round(o/a*100):0;return m.jsxs(hd,{to:s?`/level/${r.id}`:"#",className:({isActive:u})=>_f("flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors group",!s&&"opacity-40 cursor-not-allowed pointer-events-none",u&&s?"bg-gray-800 text-white":s?"text-gray-400 hover:text-white hover:bg-gray-800":"text-gray-600"),children:[m.jsx("span",{className:"text-base",children:r.emoji}),m.jsxs("div",{className:"flex-1 min-w-0",children:[m.jsxs("div",{className:"flex items-center justify-between",children:[m.jsxs("span",{className:"truncate text-xs",children:["Lv",r.id,": ",r.name]}),s?l===100?m.jsx(_x,{size:12,className:"text-emerald-400 shrink-0"}):m.jsx(Dx,{size:12,className:"opacity-0 group-hover:opacity-100 shrink-0 transition-opacity"}):m.jsx(bx,{size:12,className:"text-gray-600 shrink-0"})]}),s&&l>0&&m.jsx("div",{className:"mt-1 h-1 bg-gray-700 rounded-full overflow-hidden",children:m.jsx("div",{className:"h-full rounded-full transition-all",style:{width:`${l}%`,backgroundColor:r.color}})})]})]},r.id)})})]})]})})})}function tP(){return m.jsx("footer",{className:"border-t border-gray-800 bg-gray-950 mt-auto",children:m.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-8",children:[m.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-6 mb-6",children:[m.jsxs("div",{className:"col-span-2 md:col-span-1",children:[m.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[m.jsx("div",{className:"w-6 h-6 bg-gradient-to-br from-brand-500 to-purple-600 rounded flex items-center justify-center",children:m.jsx(pu,{size:12,className:"text-white"})}),m.jsx("span",{className:"font-bold text-white text-sm",children:"Claude Code Academy"})]}),m.jsx("p",{className:"text-xs text-gray-500 leading-relaxed",children:"初心者から上級者まで、Claude Codeを完全マスターできる学習プラットフォーム"})]}),m.jsxs("div",{children:[m.jsx("p",{className:"text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3",children:"学習"}),m.jsx("ul",{className:"space-y-2",children:[{to:"/roadmap",label:"ロードマップ"},{to:"/level/0",label:"Claude入門"},{to:"/level/7",label:"Agent Teams"},{to:"/prompts",label:"プロンプト集"}].map(({to:e,label:t})=>m.jsx("li",{children:m.jsx(ii,{to:e,className:"text-xs text-gray-500 hover:text-gray-300 transition-colors",children:t})},e))})]}),m.jsxs("div",{children:[m.jsx("p",{className:"text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3",children:"ツール"}),m.jsx("ul",{className:"space-y-2",children:[{to:"/sns-tools",label:"SNS活用"},{to:"/academy",label:"Academy"},{to:"/community",label:"コミュニティ"}].map(({to:e,label:t})=>m.jsx("li",{children:m.jsx(ii,{to:e,className:"text-xs text-gray-500 hover:text-gray-300 transition-colors",children:t})},e))})]}),m.jsxs("div",{children:[m.jsx("p",{className:"text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3",children:"公式"}),m.jsx("ul",{className:"space-y-2",children:[{url:"https://claude.ai",label:"Claude.ai"},{url:"https://docs.anthropic.com/ja/docs/claude-code/overview",label:"ドキュメント"},{url:"https://anthropic.skilljar.com",label:"Academy"},{url:"https://console.anthropic.com",label:"Console"}].map(({url:e,label:t})=>m.jsx("li",{children:m.jsxs("a",{href:e,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-1 text-xs text-gray-500 hover:text-gray-300 transition-colors",children:[t,m.jsx(Ix,{size:10})]})},e))})]})]}),m.jsxs("div",{className:"border-t border-gray-800 pt-4 flex flex-col sm:flex-row items-center justify-between gap-2",children:[m.jsx("p",{className:"text-xs text-gray-600",children:"© 2026 Claude Code Academy. このサイトはAnthropicとは無関係の非公式コンテンツです。"}),m.jsx("p",{className:"text-xs text-gray-600",children:"Built with Claude Code 🤖"})]})]})})}const ra=[{id:"start",label:"はじめかた",emoji:"🔰",color:"#3b82f6",desc:"インストール・最初の一歩"},{id:"skill",label:"SKILLの使い方",emoji:"⭐",color:"#8b5cf6",desc:"どこに入力するの？"},{id:"basic",label:"Claude Code基本",emoji:"⚡",color:"#0ea5e9",desc:"仕組みと基本操作"},{id:"earn",label:"稼ぎ方・副業",emoji:"💰",color:"#10b981",desc:"収益化の方法"},{id:"terminal",label:"ターミナル",emoji:"🖥️",color:"#6b7280",desc:"黒い画面の使い方"},{id:"mcp",label:"MCP連携",emoji:"🔌",color:"#f59e0b",desc:"外部ツールとの接続"},{id:"claudemd",label:"CLAUDE.md",emoji:"📋",color:"#ec4899",desc:"お仕事説明書の作り方"},{id:"codex",label:"Codex比較",emoji:"🤖",color:"#14b8a6",desc:"OpenAI Codexとの違い"}],di=[{id:"install-step",question:"Claude Codeのインストール方法を教えて",answer:`## 5ステップで完了！

**① Node.jsをインストール**
→ https://nodejs.org にアクセスして「LTS版」をダウンロード
💡 「LTS版（安定版）」と書いてある方を選んでね

**② ターミナルを開く**
→ Windowsなら「PowerShell」、Macなら「ターミナル」

**③ 下のコマンドを入力してEnterを押す**
\`\`\`
npm install -g @anthropic-ai/claude-code
\`\`\`

**④ Anthropicアカウントを作る**
→ https://claude.ai でメールアドレスを登録（無料）

**⑤ ターミナルで起動！**
\`\`\`
claude
\`\`\`
→ 初回はブラウザのログイン画面が自動で開くよ`,keywords:["インストール","install","入れ方","セットアップ","始め方","最初","はじめ"],category:"start",emoji:"📦"},{id:"nodejs-what",question:"Node.jsって何ですか？なぜ必要なの？",answer:`## Node.jsとは？

Node.jsは「JavaScriptをパソコン上で動かすための仕組み」です。

スマホのアプリをインストールするのと同じように、Node.jsをインストールすることでClaude Codeが動くようになります。

**なぜ必要なの？**
Claude Codeは「npmパッケージ」という仕組みで配布されており、それを動かすためにNode.jsが必要です。

**インストールはここから：**
→ https://nodejs.org （LTS版を選ぶ）

インストールが完了したら、ターミナルで確認：
\`\`\`
node --version
\`\`\`
→ 「v20.x.x」のような数字が出たらOK！`,keywords:["node","nodejs","ノード","必要","なぜ","どうして"],category:"start",emoji:"💚"},{id:"claude-ai-vs-code",question:"Claude.aiとClaude Codeの違いは何ですか？",answer:`## 2つの大きな違い

**🌐 Claude.ai（ブラウザ版）**
- ブラウザで開いてすぐ使える
- 文章を書いたり、質問に答えたりが得意
- パソコンのファイルは直接操作できない
- スマホでも使える
- 初心者向け

**⚡ Claude Code（CLI版）**
- ターミナル（黒い画面）で使う
- パソコンのファイルを直接読み書きできる
- コマンドを自動で実行できる
- SKILL・MCP・Hooksなど高度な機能がある
- プログラマー・副業したい人向け

**どっちを使えばいい？**
まず**Claude.ai**から始めて、慣れたら**Claude Code**を試してみよう！`,keywords:["アプリ","ブラウザ","cli","違い","どっち","claude.ai"],category:"start",emoji:"🔄"},{id:"free-or-paid",question:"無料で使えますか？料金はいくらかかりますか？",answer:`## 料金について

**🆓 無料で使えるもの**
- Claude.ai（ブラウザ）の無料プラン → 毎日少し使える
- n8n（自動化ツール）の無料版
- note.com・X(Twitter)のアカウント

**💳 有料になるもの**
- Claude.ai Proプラン → **月額$20（約3,000円）**
  → 制限なく使えるようになる
- Claude Code（CLI版）→ **Claude APIの従量課金**
  → 使った分だけ（個人利用なら月数百〜数千円）

**💡 おすすめの始め方**
まず**Claude.aiの無料プラン**から試してみよう！
慣れてきたら有料プランやClaude Codeに移行するのがおすすめ`,keywords:["無料","料金","費用","値段","有料","お金","円","pro"],category:"start",emoji:"💰"},{id:"skill-what",question:"SKILLとは何ですか？",answer:`## SKILLとは「特別なコマンド」のこと

SKILLは、Claude Codeに追加できる「特技」です。
スラッシュ（ / ）をつけて入力するだけで使えます。

**使えるSKILLの例：**

| コマンド | やってくれること |
|---|---|
| /simplify | コードをシンプルにする |
| /review | コードの問題点を指摘 |
| /init | CLAUDE.mdを自動作成 |
| /security-review | セキュリティをチェック |

**大切なポイント：**
SKILLは**Claude Codeのチャット入力欄**に入力します。
ブラウザやメモ帳ではなく、ターミナルの中のClaude Code画面に入力してね！`,keywords:["skill","スキル","コマンド","特技","スラッシュ","/"],category:"skill",emoji:"⭐"},{id:"skill-where",question:"SKILLはどこに入力するの？場所がわからない",answer:`## SKILLの入力場所を画像で説明！

**手順：**

**① まずターミナルを開く**
- Windows：スタートメニュー → 「PowerShell」を検索
- Mac：アプリケーション → ユーティリティ → ターミナル

**② 「claude」と入力してEnterを押す**
\`\`\`
claude
\`\`\`

**③ チャット画面が表示される**
→ 画面の下の方に入力欄が現れる

**④ 入力欄に「/skill名」を入力してEnter**
\`\`\`
/simplify
\`\`\`

⚠️ **よくある間違い**
- ブラウザのアドレスバーに入力 → ❌違います
- メモ帳に入力 → ❌違います
- ターミナルの中のClaude画面に入力 → ✅正解！`,keywords:["どこ","場所","入力","where","わからない","skill","スキル"],category:"skill",emoji:"📍"},{id:"skill-list",question:"使えるSKILLの一覧を教えてください",answer:`## よく使うSKILL一覧

**コード関連**
- \`/simplify\` → コードをシンプルにする
- \`/review\` → コードの問題点を指摘してくれる
- \`/security-review\` → セキュリティのチェック

**プロジェクト管理**
- \`/init\` → プロジェクトのCLAUDE.mdを自動作成
- \`/memory\` → メモリ・記憶の管理

**便利機能**
- \`/help\` → 使い方を教えてくれる
- \`/clear\` → 会話をリセットする

**カスタムSKILL**
自分でSKILLを作って追加することもできる！
詳しくはClaude Codeのドキュメントを参照。`,keywords:["一覧","リスト","どんな","どれ","skill","スキル","種類"],category:"skill",emoji:"📋"},{id:"what-claude-code",question:"Claude Codeとは何ですか？",answer:`## Claude Codeとは？

Claude Codeは、Anthropic（アンソロピック）という会社が作った**ターミナルで動くAIアシスタント**です。

**ふつうのClaude.ai（ブラウザ版）と何が違うの？**

- 📁 パソコンのファイルを直接読み書きできる
- ⌨️ ターミナルのコマンドを自動で実行できる
- ⭐ SKILL（スラッシュコマンド）で機能を拡張できる
- 🔌 MCPで外部ツール（GitHub・Slackなど）と連携できる

**こんな人に向いてる**
プログラムを書く人・副業したい人・作業を自動化したい人`,keywords:["claude code","クロードコード","とは","何","なに","説明"],category:"basic",emoji:"⚡"},{id:"how-to-use",question:"Claude Codeの基本的な使い方を教えて",answer:`## 基本の使い方

**① ターミナルで「claude」と入力して起動**
\`\`\`
claude
\`\`\`

**② チャット画面が開いたら日本語で話しかける**
例えば：
- 「Reactのボタンを作って」
- 「このファイルを読んで説明して」
- 「エラーを直して」

**③ Claudeが自動でファイルを作ったりコードを書いてくれる**

**④ 確認して「OK」か修正を指示する**

**便利なコツ：**
- 具体的に指示するほど精度が上がる
- 「なぜそうしたの？」と聞くとちゃんと説明してくれる
- 「もっとシンプルに」「日本語でコメントを書いて」など追加指示もできる`,keywords:["使い方","使う","how to","基本","操作"],category:"basic",emoji:"🎮"},{id:"hooks-what",question:"Hooksとは何ですか？",answer:`## Hooksとは「自動トリガー」のこと

Hooksは「〇〇したら自動で△△する」という仕組みです。

**具体的な例：**
- ファイルを保存したら → 自動でテストを実行する
- Claudeが何か書いたら → 自動でコードチェックをする
- 作業が終わったら → Slackに通知を送る

**設定場所：**
\`\`\`json
~/.claude/settings.json
\`\`\`

**初心者は最初は覚えなくてOK！**
まずはClaude Codeの基本操作に慣れてから、
興味が出たら学んでみよう。`,keywords:["hooks","フック","自動","トリガー"],category:"basic",emoji:"🪝"},{id:"agent-what",question:"エージェントって何ですか？",answer:`## エージェントとは「自律型AI」のこと

エージェントは、人間が一々指示しなくても**自分で考えて複数のタスクを実行し続けるAI**のことです。

**例えば：**
「Webサイトを作って」と一言言うだけで
1. ファイル構成を考える
2. HTMLを書く
3. CSSでデザインする
4. JavaScriptで動きをつける
5. テストする
→ これを全部自動でやってくれる！

**サブエージェントとは？**
メインのAIが「専門家AI」に仕事を分担する仕組み。
大きなプロジェクトを複数のAIでチームワークして完成させられる。

これが「Agent Teams（エージェントチーム）」という最上級機能！`,keywords:["エージェント","agent","自動","自律","チーム"],category:"basic",emoji:"🦾"},{id:"earn-first",question:"初めて稼ぐにはどうすればいい？一番早い方法は？",answer:`## 最速で初収益を得る方法

**一番早いのは「フリーランス」です！**

**① ランサーズかココナラに登録（無料）**
- ランサーズ → https://www.lancers.jp
- ココナラ → https://coconala.com

**② 「AI記事作成」サービスを出品する**
値段例：2,000字の記事 → 3,000円

**③ 依頼が来たらClaudeで記事を作る**
実際の作業時間：15〜30分

**④ 納品 → 入金！**

**なぜこれが一番早い？**
- フォロワー0人でも稼げる
- 今すぐサービスを出品できる
- 1件3,000〜1万円の収入が見込める

**もっと詳しく知りたい場合は**
「SNS活用」メニューの「フリーランス」タブをチェック！`,keywords:["稼ぐ","収益","副業","お金","最速","最初","はじめて","初めて"],category:"earn",emoji:"💰"},{id:"earn-sns",question:"SNSで稼ぐにはどんな方法がある？",answer:`## SNS × Claude Code で稼ぐ方法

**X(Twitter) で稼ぐ**
- フォロワー1,000人 → X広告収益 → 月1〜10万円
- アフィリエイトリンクを貼る → 月1〜20万円
- スポンサー案件 → 1投稿1〜10万円

**note.com で稼ぐ**
- 有料記事を売る → 1本100〜3,000円
- 月額マガジン → 読者100人で月5万円
- 記事作成代行 → 1本3,000〜3万円

**YouTube で稼ぐ**
- 広告収益 → 月1〜100万円（チャンネルが育てば）
- スポンサー → 1動画3〜50万円

**フリーランス**
- AI記事代行 → 1本2,000〜3万円
- SNS運用代行 → 月3〜10万円/クライアント

**目安のタイムライン：**
1週間で初収益 → 1〜3ヶ月で月1万円 → 6ヶ月で月10万円`,keywords:["sns","x","note","youtube","twitter","稼ぐ","副業","収益化"],category:"earn",emoji:"📈"},{id:"earn-roadmap",question:"副業で稼ぐまでのロードマップを教えて",answer:`## 副業ロードマップ（5フェーズ）

**Phase 0：今日〜3日（準備）**
- Claude.aiにアカウント作成
- X・noteのアカウント作成
→ 収益：0円

**Phase 1：1〜2週目（最初の作品）**
- Claudeで記事を書いてnoteに投稿
- Xで毎日1投稿を始める
→ 収益：0〜1,000円

**Phase 2：3〜4週目（習慣化）**
- note有料記事を初出版（300円〜）
- Xフォロワー100人を目指す
→ 収益：0〜5,000円

**Phase 3：2ヶ月目（仕組み化）**
- ランサーズで記事代行を出品
- note月額マガジンを開始
→ 収益：1〜3万円

**Phase 4：3ヶ月目〜（スケールアップ）**
- YouTubeを開始
- Udemyで講座販売
→ 収益：5〜30万円

詳しくは「SNS活用」メニューで確認！`,keywords:["ロードマップ","手順","流れ","ステップ","副業","稼ぐ","どうやって"],category:"earn",emoji:"🗺️"},{id:"terminal-open",question:"ターミナルの開き方を教えてください",answer:`## ターミナルの開き方

**Windowsの場合（3つの方法）**

方法①：スタートメニューから
→ Windowsキーを押す → 「powershell」と入力 → Enterを押す

方法②：ショートカット
→ Windowsキー + R → 「powershell」と入力 → OK

方法③：右クリックメニュー
→ デスクトップで右クリック → 「PowerShellウィンドウを開く」

**Macの場合**

→ Finder を開く → アプリケーション → ユーティリティ → ターミナル

**もしくは：**
→ Command + スペース → 「terminal」と入力 → Enter

**開いたら何を入力する？**
とりあえず「claude」と入力してEnterを押してみよう！`,keywords:["ターミナル","開く","powershell","黒い画面","open"],category:"terminal",emoji:"🖥️"},{id:"terminal-what",question:"ターミナルって何？怖くない？",answer:`## ターミナルは怖くないよ！

ターミナルは「コンピューターにキーボードで命令を入力する画面」です。

黒くて文字だけで怖く見えるけど、実は**数個のコマンドを覚えるだけで使える！**

**まず覚えるコマンド3つだけ：**

1. 今いる場所を確認する
\`\`\`
ls
\`\`\`
（Windowsの場合は「dir」）

2. フォルダを移動する
\`\`\`
cd フォルダ名
\`\`\`

3. Claude Codeを起動する
\`\`\`
claude
\`\`\`

**間違えたときは？**
\`Ctrl + C\` を押せばいつでも止められる！
これさえ覚えておけば安心。`,keywords:["ターミナル","怖い","わからない","難しい","黒い","初めて"],category:"terminal",emoji:"🖥️"},{id:"error-occurred",question:"エラーが出て動かない。どうすればいい？",answer:`## エラーが出たときの対処法

**まず落ち着いて！エラーは当たり前のことだよ**

**① Ctrl+Cで止める**
何かがフリーズしたらCtrl+Cで強制終了できる

**② エラーメッセージをClaudeに丸ごと貼る**
Claude Codeや Claude.aiのチャットに
「このエラーが出ました：[エラーをペースト]」
と入力するとClaudeが解決してくれる

**③ よくあるエラーと解決策：**

- 「command not found」→ インストールが完了していない。インストールを再実行。
- 「Permission denied」→ 管理者権限が必要。Windowsなら管理者として実行。
- 「port already in use」→ 同じポートで別のプログラムが動いている。一度再起動。

**困ったらClaude Codeに全部投げよう！**
「〇〇しようとしたらエラーが出ました」と伝えるだけでOK`,keywords:["エラー","動かない","error","失敗","うまくいかない","壊れた"],category:"terminal",emoji:"🔧"},{id:"mcp-what",question:"MCPとは何ですか？",answer:`## MCPとは「拡張プラグイン」のこと

MCP（Model Context Protocol）は、Claude Codeに新しい「道具」を追加する仕組みです。

**プラグインのような感覚で機能を追加できる！**

**使えるMCPの例：**

- 🐱 GitHub MCP → GitHubのPR・Issueを操作できる
- 💬 Slack MCP → Slackにメッセージを送れる
- 📝 Notion MCP → Notionのページを読み書きできる
- 🎬 YouTube MCP → 動画の字幕を取得・分析できる
- 🗄️ PostgreSQL MCP → データベースを操作できる

**追加方法（GitHubの場合）：**
\`\`\`
claude mcp add github npx @anthropic-ai/mcp-server-github
\`\`\`

初心者はまずClaude Codeの基本に慣れてから挑戦しよう！`,keywords:["mcp","エムシーピー","拡張","プラグイン","github","slack","連携"],category:"mcp",emoji:"🔌"},{id:"claudemd-what",question:"CLAUDE.mdとは何ですか？",answer:`## CLAUDE.mdとは「Claudeへの説明書」

CLAUDE.mdはプロジェクトの説明をClaude Codeに事前に教えておくためのファイルです。

**なぜ便利なの？**
毎回「このプロジェクトはReact製で、TypeScriptを使って...」と説明しなくてよくなる！
一度書いておけばClaude Codeが自動で読んでくれる。

**書ける内容の例：**
\`\`\`markdown
# プロジェクトの説明
Reactで作ったウェブアプリです。

# ルール
- コメントは日本語で書く
- TypeScriptのany型は使わない

# よく使うコマンド
- npm run dev → 開発サーバー起動
\`\`\`

**自動で作る方法：**
\`\`\`
claude /init
\`\`\`
→ Claude Codeが自動でCLAUDE.mdを作ってくれる！`,keywords:["claude.md","くろーどmd","説明書","ルール","init","設定ファイル"],category:"claudemd",emoji:"📋"},{id:"codex-what",question:"Codexとは何ですか？Claude Codeと何が違うの？",answer:`## Codexと Claude Codeの違い

**OpenAI Codex CLI**
- ChatGPTを作ったOpenAI社のターミナル型AIツール
- GPT-4oモデルを使う
- OpenAIのAPIキー（有料）が必要

**Claude Code**
- Anthropic社のターミナル型AIツール
- Claude 3.5/4系モデルを使う
- SKILL・MCP・Hooksなど豊富な機能がある

**主な違い：**

| | Claude Code | Codex |
|---|---|---|
| 会社 | Anthropic | OpenAI |
| MCP対応 | ✅あり | ❌なし |
| SKILL | ✅豊富 | ❌少ない |
| 初期費用 | Claude利用料 | OpenAI APIキー |

**どっちを使えばいい？**
まずはClaude Codeを使い込んで、慣れたらCodexも試してみよう！`,keywords:["codex","コデックス","openai","違い","比較","gpt"],category:"codex",emoji:"🤖"}];function nP(e){return di.filter(t=>t.category===e)}function rP(e){if(!e.trim())return di.slice(0,6);const t=e.toLowerCase();return di.map(r=>{let i=0;return r.question.toLowerCase().includes(t)&&(i+=10),r.keywords.forEach(s=>{(t.includes(s)||s.includes(t))&&(i+=5)}),r.answer.toLowerCase().includes(t)&&(i+=2),{item:r,score:i}}).filter(r=>r.score>0).sort((r,i)=>i.score-r.score).map(r=>r.item).slice(0,5)}function vr(e,t){const n=e.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);return m.jsx("span",{children:n.map((r,i)=>r.startsWith("**")&&r.endsWith("**")?m.jsx("strong",{className:"text-white font-bold",children:r.slice(2,-2)},i):r.startsWith("`")&&r.endsWith("`")?m.jsx("code",{className:"bg-gray-700 text-brand-300 px-1.5 py-0.5 rounded text-xs font-mono mx-0.5",children:r.slice(1,-1)},i):r)},t)}function iP({text:e}){const t=e.split(`
`),n=[];let r=[],i=!1,s=[];const o=()=>{s.length>0&&(n.push(m.jsx("ul",{className:"space-y-1 my-2 ml-1",children:s},`ul-${n.length}`)),s=[])};return t.forEach((a,l)=>{var c;if(a.startsWith("```")){i?(i=!1,n.push(m.jsxs("div",{className:"my-3 rounded-xl overflow-hidden border border-gray-700",children:[m.jsxs("div",{className:"flex items-center gap-2 px-3 py-1.5 bg-gray-800 border-b border-gray-700",children:[m.jsxs("div",{className:"flex gap-1",children:[m.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-red-400"}),m.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-yellow-400"}),m.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-green-400"})]}),m.jsx("span",{className:"text-xs text-gray-500",children:"コマンド・コード"})]}),m.jsx("pre",{className:"bg-gray-950 px-4 py-3 text-xs text-green-300 font-mono overflow-x-auto leading-relaxed whitespace-pre-wrap",children:r.join(`
`)})]},`code-${l}`)),r=[]):(o(),i=!0,r=[]);return}if(i){r.push(a);return}if(a.startsWith("## ")){o(),n.push(m.jsx("h3",{className:"text-base font-bold text-white mt-4 mb-2 first:mt-0 flex items-center gap-1",children:a.slice(3)},l));return}if(a.startsWith("### ")){o(),n.push(m.jsx("h4",{className:"text-sm font-bold text-gray-200 mt-3 mb-1",children:a.slice(4)},l));return}if(a.match(/^[-*] /)){s.push(m.jsxs("li",{className:"flex items-start gap-2 text-sm text-gray-200 leading-relaxed",children:[m.jsx("span",{className:"text-brand-400 mt-0.5 shrink-0",children:"●"}),m.jsx("span",{children:vr(a.slice(2),l)})]},l));return}if(a.startsWith("|")){o();const d=(c=t[l+1])==null?void 0:c.match(/^\|[-|]+\|/);if(a.match(/^\|[-|]+\|/))return;const y=a.split("|").filter(v=>v.trim()!=="").map(v=>v.trim());n.push(m.jsx("div",{className:`flex border-b border-gray-700 text-xs py-1.5 ${d?"font-bold text-white bg-gray-800/50":"text-gray-300"}`,children:y.map((v,x)=>m.jsx("div",{className:"flex-1 px-2",children:v},x))},l));return}if(a.startsWith("→")){o();const d=a.match(/https?:\/\/[^\s]+/);n.push(m.jsxs("p",{className:"text-sm text-gray-200 leading-relaxed my-1 flex items-start gap-1.5",children:[m.jsx("span",{className:"text-brand-400 shrink-0",children:"→"}),d?m.jsx("a",{href:d[0],target:"_blank",rel:"noopener noreferrer",className:"text-brand-400 underline underline-offset-2 hover:text-brand-300 break-all",children:a.slice(1).trim()}):m.jsx("span",{children:vr(a.slice(1).trim(),l)})]},l));return}if(a.trim()===""){o();return}o();const u=a.match(/https?:\/\/[^\s]+/);if(u&&!a.startsWith("**")){const[d,f]=a.split(u[0]);n.push(m.jsxs("p",{className:"text-sm text-gray-200 leading-relaxed my-1",children:[vr(d,l),m.jsx("a",{href:u[0],target:"_blank",rel:"noopener noreferrer",className:"text-brand-400 underline underline-offset-2 hover:text-brand-300 break-all",children:u[0]}),vr(f??"",l+1e3)]},l));return}n.push(m.jsx("p",{className:"text-sm text-gray-200 leading-relaxed my-1",children:vr(a,l)},l))}),o(),m.jsx("div",{className:"space-y-0.5",children:n})}const sP=["install-step","skill-where","earn-first","terminal-what","mcp-what"];function oP(){const[e,t]=S.useState("home"),[n,r]=S.useState(null),[i,s]=S.useState(null),[o,a]=S.useState(""),[l,u]=S.useState([]),[c,d]=S.useState([]),f=S.useRef(null),y=S.useRef(null);S.useEffect(()=>{var k;(k=y.current)==null||k.scrollIntoView({behavior:"smooth"})},[e]);const v=k=>{d(T=>[...T,k]),t(k.screen),k.category&&r(k.category),k.faq&&s(k.faq),k.results&&u(k.results)},x=()=>{const k=c[c.length-2];if(d(T=>T.slice(0,-1)),!k){t("home");return}t(k.screen),k.category&&r(k.category),k.faq&&s(k.faq),k.results&&u(k.results)},w=k=>{if(!k.trim())return;const T=rP(k);v({screen:"search",query:k,results:T}),a("")},p=sP.map(k=>di.find(T=>T.id===k)).filter(Boolean),h=()=>m.jsxs("div",{className:"p-4 space-y-5",ref:y,children:[m.jsxs("div",{className:"text-center pt-2",children:[m.jsx("div",{className:"text-5xl mb-2",children:"🤖"}),m.jsx("h2",{className:"text-base font-bold text-white",children:"なんでも聞いてね！"}),m.jsx("p",{className:"text-gray-400 text-xs mt-1",children:"下のカテゴリから選ぶか、文字で入力してね"})]}),m.jsxs("form",{onSubmit:k=>{k.preventDefault(),w(o)},className:"relative",children:[m.jsx($x,{size:14,className:"absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"}),m.jsx("input",{ref:f,value:o,onChange:k=>a(k.target.value),placeholder:"例：SKILLってどこに入力するの？",className:"w-full bg-gray-800 border border-gray-700 rounded-xl pl-8 pr-10 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-500 transition-colors"}),m.jsx("button",{type:"submit",disabled:!o.trim(),className:"absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-lg bg-brand-500 disabled:bg-gray-700 flex items-center justify-center transition-colors",children:m.jsx(Wx,{size:12,className:"text-white"})})]}),m.jsxs("div",{children:[m.jsx("p",{className:"text-xs text-gray-500 mb-2 font-medium",children:"カテゴリから選ぶ"}),m.jsx("div",{className:"grid grid-cols-2 gap-2",children:ra.map(k=>m.jsxs("button",{onClick:()=>v({screen:"category",category:k.id}),className:"flex items-center gap-2.5 p-3 rounded-xl border border-gray-700 bg-gray-800/60 hover:bg-gray-700 hover:border-gray-600 transition-all text-left group",children:[m.jsx("span",{className:"text-2xl shrink-0",children:k.emoji}),m.jsxs("div",{className:"min-w-0",children:[m.jsx("p",{className:"text-white text-xs font-bold leading-tight group-hover:text-brand-300 transition-colors",children:k.label}),m.jsx("p",{className:"text-gray-500 text-xs leading-tight truncate",children:k.desc})]})]},k.id))})]}),m.jsxs("div",{children:[m.jsx("p",{className:"text-xs text-gray-500 mb-2 font-medium",children:"🔥 みんながよく聞くこと"}),m.jsx("div",{className:"space-y-1.5",children:p.map(k=>m.jsxs("button",{onClick:()=>v({screen:"answer",faq:k}),className:"w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl border border-gray-700 bg-gray-900 hover:bg-gray-800 hover:border-gray-600 transition-all text-left",children:[m.jsx("span",{className:"text-lg shrink-0",children:k.emoji}),m.jsx("span",{className:"text-gray-200 text-xs leading-tight",children:k.question})]},k.id))})]})]}),g=()=>{const k=ra.find(E=>E.id===n),T=n?nP(n):[];return m.jsxs("div",{className:"p-4 space-y-4",ref:y,children:[m.jsxs("button",{onClick:x,className:"flex items-center gap-1.5 text-gray-400 hover:text-white text-xs transition-colors",children:[m.jsx(Uo,{size:14})," 戻る"]}),m.jsxs("div",{className:"flex items-center gap-3",children:[m.jsx("span",{className:"text-3xl",children:k==null?void 0:k.emoji}),m.jsxs("div",{children:[m.jsx("h3",{className:"font-bold text-white",children:k==null?void 0:k.label}),m.jsx("p",{className:"text-gray-400 text-xs",children:k==null?void 0:k.desc})]})]}),m.jsx("div",{className:"space-y-2",children:T.map(E=>m.jsxs("button",{onClick:()=>v({screen:"answer",faq:E}),className:"w-full flex items-start gap-3 p-3.5 rounded-xl border border-gray-700 bg-gray-900 hover:bg-gray-800 hover:border-gray-600 transition-all text-left group",children:[m.jsx("span",{className:"text-xl shrink-0 mt-0.5",children:E.emoji}),m.jsx("p",{className:"text-gray-200 text-sm leading-relaxed group-hover:text-white transition-colors",children:E.question})]},E.id))})]})},C=()=>{if(!i)return null;const k=di.filter(T=>T.category===i.category&&T.id!==i.id).slice(0,3);return m.jsxs("div",{className:"p-4 space-y-4",ref:y,children:[m.jsxs("button",{onClick:x,className:"flex items-center gap-1.5 text-gray-400 hover:text-white text-xs transition-colors",children:[m.jsx(Uo,{size:14})," 戻る"]}),m.jsxs("div",{className:"flex items-start gap-3 p-3.5 rounded-xl bg-brand-500/10 border border-brand-500/30",children:[m.jsx("span",{className:"text-2xl shrink-0",children:i.emoji}),m.jsx("p",{className:"text-white text-sm font-semibold leading-relaxed",children:i.question})]}),m.jsx("div",{className:"rounded-xl bg-gray-900 border border-gray-800 p-4",children:m.jsx(iP,{text:i.answer})}),k.length>0&&m.jsxs("div",{children:[m.jsx("p",{className:"text-xs text-gray-500 mb-2 font-medium",children:"💡 他にもこんなことを聞いている人がいます"}),m.jsx("div",{className:"space-y-1.5",children:k.map(T=>m.jsxs("button",{onClick:()=>v({screen:"answer",faq:T}),className:"w-full flex items-center gap-2 px-3 py-2.5 rounded-xl border border-gray-700 bg-gray-900 hover:bg-gray-800 transition-all text-left",children:[m.jsx("span",{className:"text-base shrink-0",children:T.emoji}),m.jsx("span",{className:"text-gray-300 text-xs",children:T.question})]},T.id))})]}),m.jsx("button",{onClick:()=>{t("home"),d([])},className:"w-full text-center text-xs text-gray-500 hover:text-gray-300 transition-colors py-2",children:"🏠 最初の画面に戻る"})]})},P=()=>{var T;const k=((T=c[c.length-1])==null?void 0:T.query)??"";return m.jsxs("div",{className:"p-4 space-y-4",ref:y,children:[m.jsxs("button",{onClick:x,className:"flex items-center gap-1.5 text-gray-400 hover:text-white text-xs transition-colors",children:[m.jsx(Uo,{size:14})," 戻る"]}),m.jsxs("p",{className:"text-sm text-white font-semibold",children:["「",k,"」の検索結果"]}),l.length===0?m.jsxs("div",{className:"text-center py-8 space-y-3",children:[m.jsx("p",{className:"text-4xl",children:"🤔"}),m.jsx("p",{className:"text-gray-400 text-sm",children:"答えが見つかりませんでした"}),m.jsxs("p",{className:"text-gray-500 text-xs",children:["別の言い方で試してみてね",m.jsx("br",{}),"例：「インストール」「SKILL」「エラー」"]}),m.jsx("button",{onClick:()=>t("home"),className:"mx-auto flex items-center gap-1.5 text-xs text-brand-400 hover:text-brand-300 transition-colors",children:"カテゴリから探す →"})]}):m.jsx("div",{className:"space-y-2",children:l.map(E=>{var D;return m.jsxs("button",{onClick:()=>v({screen:"answer",faq:E}),className:"w-full flex items-start gap-3 p-3.5 rounded-xl border border-gray-700 bg-gray-900 hover:bg-gray-800 transition-all text-left group",children:[m.jsx("span",{className:"text-xl shrink-0 mt-0.5",children:E.emoji}),m.jsxs("div",{children:[m.jsx("p",{className:"text-gray-200 text-sm group-hover:text-white transition-colors",children:E.question}),m.jsx("p",{className:"text-gray-500 text-xs mt-0.5",children:(D=ra.find(M=>M.id===E.category))==null?void 0:D.label})]})]},E.id)})})]})};return m.jsxs("div",{className:"h-full overflow-y-auto",children:[e==="home"&&m.jsx(h,{}),e==="category"&&m.jsx(g,{}),e==="answer"&&m.jsx(C,{}),e==="search"&&m.jsx(P,{})]})}function aP(){const[e,t]=S.useState(!1),[n,r]=S.useState(!1);S.useEffect(()=>{if(!sessionStorage.getItem("chatHintShown")){const o=setTimeout(()=>{r(!0),sessionStorage.setItem("chatHintShown","1")},3e3);return()=>clearTimeout(o)}},[]);const i=()=>{t(!0),r(!1)};return m.jsxs(m.Fragment,{children:[m.jsx(is,{children:e&&m.jsxs(xn.div,{initial:{opacity:0,y:24,scale:.92},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:24,scale:.92},transition:{type:"spring",stiffness:320,damping:28},className:"fixed bottom-24 right-4 z-50 flex flex-col rounded-2xl shadow-2xl overflow-hidden",style:{width:"min(380px, calc(100vw - 2rem))",height:"min(600px, calc(100vh - 8rem))"},children:[m.jsx("div",{className:"absolute inset-0 rounded-2xl p-px bg-gradient-to-b from-brand-500/50 to-gray-700/50 pointer-events-none z-10"}),m.jsxs("div",{className:"relative flex flex-col h-full rounded-2xl bg-gray-900 overflow-hidden",children:[m.jsxs("div",{className:"shrink-0 flex items-center gap-3 px-4 py-3.5 bg-gradient-to-r from-brand-600/30 to-purple-600/20 border-b border-gray-800",children:[m.jsxs("div",{className:"relative",children:[m.jsx("div",{className:"w-10 h-10 rounded-full bg-gradient-to-br from-brand-400 to-purple-500 flex items-center justify-center text-xl shadow-lg",children:"🤖"}),m.jsx("div",{className:"absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-gray-900"})]}),m.jsxs("div",{className:"flex-1",children:[m.jsx("p",{className:"font-bold text-white text-sm",children:"なんでも聞いてね！"}),m.jsxs("div",{className:"flex items-center gap-1.5",children:[m.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"}),m.jsx("p",{className:"text-emerald-400 text-xs",children:"いつでも答えるよ"})]})]}),m.jsx("button",{onClick:()=>t(!1),className:"w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-colors",children:m.jsx(Rx,{size:16})})]}),m.jsx("div",{className:"flex-1 overflow-hidden",children:m.jsx(oP,{})})]})]})}),m.jsx(is,{children:n&&!e&&m.jsx(xn.div,{initial:{opacity:0,x:16,scale:.9},animate:{opacity:1,x:0,scale:1},exit:{opacity:0,x:16,scale:.9},transition:{type:"spring",stiffness:300,damping:25},className:"fixed bottom-24 right-20 z-50",children:m.jsxs("div",{className:"relative bg-white text-gray-800 rounded-2xl rounded-br-sm px-4 py-3 shadow-xl max-w-[200px]",children:[m.jsx("button",{onClick:()=>r(!1),className:"absolute -top-2 -right-2 w-5 h-5 rounded-full bg-gray-300 hover:bg-gray-400 flex items-center justify-center text-gray-600 transition-colors",children:m.jsx(tl,{size:10})}),m.jsx("p",{className:"text-xs font-bold mb-0.5",children:"👋 こんにちは！"}),m.jsxs("p",{className:"text-xs text-gray-600 leading-relaxed",children:["わからないことは",m.jsx("br",{}),m.jsx("strong",{className:"text-brand-600",children:"なんでも聞いてね！"})]}),m.jsx("div",{className:"absolute -right-2 bottom-3 w-4 h-4 overflow-hidden",children:m.jsx("div",{className:"absolute top-0 left-0 w-4 h-4 bg-white rotate-45 translate-x-2"})})]})})}),m.jsxs("div",{className:"fixed bottom-6 right-4 z-50",children:[!e&&m.jsx("div",{className:"absolute inset-0 rounded-full bg-brand-500/30 animate-ping"}),m.jsx(xn.button,{onClick:e?()=>t(!1):i,whileHover:{scale:1.08},whileTap:{scale:.92},className:"relative w-16 h-16 rounded-full shadow-2xl flex flex-col items-center justify-center gap-0.5 transition-colors",style:{background:e?"linear-gradient(135deg, #6b7280, #4b5563)":"linear-gradient(135deg, #0ea5e9, #8b5cf6)"},children:m.jsx(is,{mode:"wait",children:e?m.jsx(xn.div,{initial:{rotate:-90,opacity:0},animate:{rotate:0,opacity:1},exit:{rotate:90,opacity:0},transition:{duration:.15},children:m.jsx(tl,{size:24,className:"text-white"})},"close"):m.jsxs(xn.div,{className:"flex flex-col items-center gap-0.5",initial:{scale:.7,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.7,opacity:0},transition:{duration:.15},children:[m.jsx("span",{className:"text-2xl leading-none",children:"🤖"}),m.jsx("span",{className:"text-white text-xs font-bold leading-none",style:{fontSize:9},children:"質問する"})]},"open")})})]})]})}const lP=S.lazy(()=>Ze(()=>import("./Home-B_WDxTb7.js"),__vite__mapDeps([0,1])).then(e=>({default:e.Home}))),uP=S.lazy(()=>Ze(()=>import("./Roadmap-BVTe1bQz.js"),__vite__mapDeps([2,3,1,4])).then(e=>({default:e.Roadmap}))),cP=S.lazy(()=>Ze(()=>import("./Level-D-RDcIcf.js"),__vite__mapDeps([5,3,6])).then(e=>({default:e.Level}))),dP=S.lazy(()=>Ze(()=>import("./Lesson-pbdGYe5L.js"),__vite__mapDeps([7,6,8,4,9,10,3,11])).then(e=>({default:e.Lesson}))),fP=S.lazy(()=>Ze(()=>import("./SNSTools-Ds3O5ziR.js"),__vite__mapDeps([12,8,13])).then(e=>({default:e.SNSTools}))),hP=S.lazy(()=>Ze(()=>import("./Academy-BB6ih_2f.js"),[]).then(e=>({default:e.Academy}))),pP=S.lazy(()=>Ze(()=>import("./PromptLibraryPage-DH997-ln.js"),__vite__mapDeps([14,8])).then(e=>({default:e.PromptLibraryPage}))),mP=S.lazy(()=>Ze(()=>import("./Community-BfPGiHki.js"),__vite__mapDeps([15,1])).then(e=>({default:e.Community}))),gP=S.lazy(()=>Ze(()=>import("./BeginnerGuide-BIRMbohj.js"),__vite__mapDeps([16,17,10,1,18])).then(e=>({default:e.BeginnerGuide}))),yP=S.lazy(()=>Ze(()=>import("./ToolsComparison-DzZi7BbV.js"),__vite__mapDeps([19,17,9,13])).then(e=>({default:e.ToolsComparison}))),vP=S.lazy(()=>Ze(()=>import("./SkillLibrary-BJx-Q19c.js"),__vite__mapDeps([20,18,8,11])).then(e=>({default:e.SkillLibrary})));function xP(){return m.jsx("div",{className:"flex items-center justify-center h-64 text-gray-500",children:m.jsx("div",{className:"w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin"})})}function wP(){return m.jsxs(wx,{children:[m.jsxs("div",{className:"min-h-screen flex flex-col bg-gray-950 text-gray-100",children:[m.jsx(T1,{}),m.jsxs("div",{className:"flex flex-1 overflow-hidden",children:[m.jsx(eP,{}),m.jsxs("main",{className:"flex-1 overflow-y-auto",children:[m.jsx(S.Suspense,{fallback:m.jsx(xP,{}),children:m.jsxs(fx,{children:[m.jsx(je,{path:"/",element:m.jsx(lP,{})}),m.jsx(je,{path:"/roadmap",element:m.jsx(uP,{})}),m.jsx(je,{path:"/level/:id",element:m.jsx(cP,{})}),m.jsx(je,{path:"/level/:levelId/lesson/:lessonId",element:m.jsx(dP,{})}),m.jsx(je,{path:"/sns-tools",element:m.jsx(fP,{})}),m.jsx(je,{path:"/academy",element:m.jsx(hP,{})}),m.jsx(je,{path:"/prompts",element:m.jsx(pP,{})}),m.jsx(je,{path:"/community",element:m.jsx(mP,{})}),m.jsx(je,{path:"/guide",element:m.jsx(gP,{})}),m.jsx(je,{path:"/tools",element:m.jsx(yP,{})}),m.jsx(je,{path:"/skills",element:m.jsx(vP,{})}),m.jsx(je,{path:"*",element:m.jsxs("div",{className:"flex flex-col items-center justify-center h-64 text-gray-500",children:[m.jsx("p",{className:"text-5xl mb-4",children:"🤖"}),m.jsx("p",{className:"text-lg font-medium",children:"ページが見つかりません"})]})})]})}),m.jsx(tP,{})]})]})]}),m.jsx(aP,{})]})}ia.createRoot(document.getElementById("root")).render(m.jsx(Cl.StrictMode,{children:m.jsx(wP,{})}));export{is as A,Ax as B,Jk as C,Ix as E,Vx as G,ii as L,Hx as S,Gx as U,tl as X,pu as Z,Dx as a,Nx as b,Y as c,bx as d,_x as e,_f as f,CP as g,If as h,SP as i,m as j,pm as k,$x as l,xn as m,Mx as n,Rx as o,Ux as p,S as r,mm as u};
