(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Dx(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Jg={exports:{}},Cc={},e0={exports:{}},$e={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pa=Symbol.for("react.element"),Ix=Symbol.for("react.portal"),Ux=Symbol.for("react.fragment"),Fx=Symbol.for("react.strict_mode"),Ox=Symbol.for("react.profiler"),kx=Symbol.for("react.provider"),Bx=Symbol.for("react.context"),zx=Symbol.for("react.forward_ref"),Hx=Symbol.for("react.suspense"),Vx=Symbol.for("react.memo"),Gx=Symbol.for("react.lazy"),yp=Symbol.iterator;function jx(n){return n===null||typeof n!="object"?null:(n=yp&&n[yp]||n["@@iterator"],typeof n=="function"?n:null)}var t0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},n0=Object.assign,i0={};function fo(n,e,t){this.props=n,this.context=e,this.refs=i0,this.updater=t||t0}fo.prototype.isReactComponent={};fo.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};fo.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function r0(){}r0.prototype=fo.prototype;function qf(n,e,t){this.props=n,this.context=e,this.refs=i0,this.updater=t||t0}var Kf=qf.prototype=new r0;Kf.constructor=qf;n0(Kf,fo.prototype);Kf.isPureReactComponent=!0;var Sp=Array.isArray,s0=Object.prototype.hasOwnProperty,Zf={current:null},o0={key:!0,ref:!0,__self:!0,__source:!0};function a0(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)s0.call(e,i)&&!o0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Pa,type:n,key:s,ref:o,props:r,_owner:Zf.current}}function Wx(n,e){return{$$typeof:Pa,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Qf(n){return typeof n=="object"&&n!==null&&n.$$typeof===Pa}function Xx(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Mp=/\/+/g;function Qc(n,e){return typeof n=="object"&&n!==null&&n.key!=null?Xx(""+n.key):e.toString(36)}function Nl(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Pa:case Ix:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Qc(o,0):i,Sp(r)?(t="",n!=null&&(t=n.replace(Mp,"$&/")+"/"),Nl(r,e,t,"",function(c){return c})):r!=null&&(Qf(r)&&(r=Wx(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Mp,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Sp(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Qc(s,a);o+=Nl(s,e,t,l,r)}else if(l=jx(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Qc(s,a++),o+=Nl(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ha(n,e,t){if(n==null)return n;var i=[],r=0;return Nl(n,i,"","",function(s){return e.call(t,s,r++)}),i}function Yx(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var dn={current:null},Ll={transition:null},$x={ReactCurrentDispatcher:dn,ReactCurrentBatchConfig:Ll,ReactCurrentOwner:Zf};function l0(){throw Error("act(...) is not supported in production builds of React.")}$e.Children={map:Ha,forEach:function(n,e,t){Ha(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Ha(n,function(){e++}),e},toArray:function(n){return Ha(n,function(e){return e})||[]},only:function(n){if(!Qf(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};$e.Component=fo;$e.Fragment=Ux;$e.Profiler=Ox;$e.PureComponent=qf;$e.StrictMode=Fx;$e.Suspense=Hx;$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$x;$e.act=l0;$e.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=n0({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Zf.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)s0.call(e,l)&&!o0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Pa,type:n.type,key:r,ref:s,props:i,_owner:o}};$e.createContext=function(n){return n={$$typeof:Bx,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:kx,_context:n},n.Consumer=n};$e.createElement=a0;$e.createFactory=function(n){var e=a0.bind(null,n);return e.type=n,e};$e.createRef=function(){return{current:null}};$e.forwardRef=function(n){return{$$typeof:zx,render:n}};$e.isValidElement=Qf;$e.lazy=function(n){return{$$typeof:Gx,_payload:{_status:-1,_result:n},_init:Yx}};$e.memo=function(n,e){return{$$typeof:Vx,type:n,compare:e===void 0?null:e}};$e.startTransition=function(n){var e=Ll.transition;Ll.transition={};try{n()}finally{Ll.transition=e}};$e.unstable_act=l0;$e.useCallback=function(n,e){return dn.current.useCallback(n,e)};$e.useContext=function(n){return dn.current.useContext(n)};$e.useDebugValue=function(){};$e.useDeferredValue=function(n){return dn.current.useDeferredValue(n)};$e.useEffect=function(n,e){return dn.current.useEffect(n,e)};$e.useId=function(){return dn.current.useId()};$e.useImperativeHandle=function(n,e,t){return dn.current.useImperativeHandle(n,e,t)};$e.useInsertionEffect=function(n,e){return dn.current.useInsertionEffect(n,e)};$e.useLayoutEffect=function(n,e){return dn.current.useLayoutEffect(n,e)};$e.useMemo=function(n,e){return dn.current.useMemo(n,e)};$e.useReducer=function(n,e,t){return dn.current.useReducer(n,e,t)};$e.useRef=function(n){return dn.current.useRef(n)};$e.useState=function(n){return dn.current.useState(n)};$e.useSyncExternalStore=function(n,e,t){return dn.current.useSyncExternalStore(n,e,t)};$e.useTransition=function(){return dn.current.useTransition()};$e.version="18.3.1";e0.exports=$e;var We=e0.exports;const Tt=Dx(We);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qx=We,Kx=Symbol.for("react.element"),Zx=Symbol.for("react.fragment"),Qx=Object.prototype.hasOwnProperty,Jx=qx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ey={key:!0,ref:!0,__self:!0,__source:!0};function c0(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Qx.call(e,i)&&!ey.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Kx,type:n,key:s,ref:o,props:r,_owner:Jx.current}}Cc.Fragment=Zx;Cc.jsx=c0;Cc.jsxs=c0;Jg.exports=Cc;var M=Jg.exports,u0={exports:{}},Pn={},d0={exports:{}},f0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(D,X){var q=D.length;D.push(X);e:for(;0<q;){var ce=q-1>>>1,ye=D[ce];if(0<r(ye,X))D[ce]=X,D[q]=ye,q=ce;else break e}}function t(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var X=D[0],q=D.pop();if(q!==X){D[0]=q;e:for(var ce=0,ye=D.length,it=ye>>>1;ce<it;){var Ge=2*(ce+1)-1,G=D[Ge],oe=Ge+1,ie=D[oe];if(0>r(G,q))oe<ye&&0>r(ie,G)?(D[ce]=ie,D[oe]=q,ce=oe):(D[ce]=G,D[Ge]=q,ce=Ge);else if(oe<ye&&0>r(ie,q))D[ce]=ie,D[oe]=q,ce=oe;else break e}}return X}function r(D,X){var q=D.sortIndex-X.sortIndex;return q!==0?q:D.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,f=3,p=!1,g=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(D){for(var X=t(c);X!==null;){if(X.callback===null)i(c);else if(X.startTime<=D)i(c),X.sortIndex=X.expirationTime,e(l,X);else break;X=t(c)}}function y(D){if(_=!1,x(D),!g)if(t(l)!==null)g=!0,$(R);else{var X=t(c);X!==null&&Q(y,X.startTime-D)}}function R(D,X){g=!1,_&&(_=!1,h(P),P=-1),p=!0;var q=f;try{for(x(X),d=t(l);d!==null&&(!(d.expirationTime>X)||D&&!N());){var ce=d.callback;if(typeof ce=="function"){d.callback=null,f=d.priorityLevel;var ye=ce(d.expirationTime<=X);X=n.unstable_now(),typeof ye=="function"?d.callback=ye:d===t(l)&&i(l),x(X)}else i(l);d=t(l)}if(d!==null)var it=!0;else{var Ge=t(c);Ge!==null&&Q(y,Ge.startTime-X),it=!1}return it}finally{d=null,f=q,p=!1}}var b=!1,A=null,P=-1,w=5,E=-1;function N(){return!(n.unstable_now()-E<w)}function V(){if(A!==null){var D=n.unstable_now();E=D;var X=!0;try{X=A(!0,D)}finally{X?H():(b=!1,A=null)}}else b=!1}var H;if(typeof v=="function")H=function(){v(V)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,Z=W.port2;W.port1.onmessage=V,H=function(){Z.postMessage(null)}}else H=function(){m(V,0)};function $(D){A=D,b||(b=!0,H())}function Q(D,X){P=m(function(){D(n.unstable_now())},X)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(D){D.callback=null},n.unstable_continueExecution=function(){g||p||(g=!0,$(R))},n.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<D?Math.floor(1e3/D):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(D){switch(f){case 1:case 2:case 3:var X=3;break;default:X=f}var q=f;f=X;try{return D()}finally{f=q}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(D,X){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var q=f;f=D;try{return X()}finally{f=q}},n.unstable_scheduleCallback=function(D,X,q){var ce=n.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?ce+q:ce):q=ce,D){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=q+ye,D={id:u++,callback:X,priorityLevel:D,startTime:q,expirationTime:ye,sortIndex:-1},q>ce?(D.sortIndex=q,e(c,D),t(l)===null&&D===t(c)&&(_?(h(P),P=-1):_=!0,Q(y,q-ce))):(D.sortIndex=ye,e(l,D),g||p||(g=!0,$(R))),D},n.unstable_shouldYield=N,n.unstable_wrapCallback=function(D){var X=f;return function(){var q=f;f=X;try{return D.apply(this,arguments)}finally{f=q}}}})(f0);d0.exports=f0;var ty=d0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ny=We,Cn=ty;function ee(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h0=new Set,oa={};function ns(n,e){qs(n,e),qs(n+"Capture",e)}function qs(n,e){for(oa[n]=e,n=0;n<e.length;n++)h0.add(e[n])}var ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ud=Object.prototype.hasOwnProperty,iy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ep={},Tp={};function ry(n){return ud.call(Tp,n)?!0:ud.call(Ep,n)?!1:iy.test(n)?Tp[n]=!0:(Ep[n]=!0,!1)}function sy(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function oy(n,e,t,i){if(e===null||typeof e>"u"||sy(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function fn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var $t={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){$t[n]=new fn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];$t[e]=new fn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){$t[n]=new fn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){$t[n]=new fn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){$t[n]=new fn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){$t[n]=new fn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){$t[n]=new fn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){$t[n]=new fn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){$t[n]=new fn(n,5,!1,n.toLowerCase(),null,!1,!1)});var Jf=/[\-:]([a-z])/g;function eh(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Jf,eh);$t[e]=new fn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Jf,eh);$t[e]=new fn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Jf,eh);$t[e]=new fn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){$t[n]=new fn(n,1,!1,n.toLowerCase(),null,!1,!1)});$t.xlinkHref=new fn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){$t[n]=new fn(n,1,!1,n.toLowerCase(),null,!0,!0)});function th(n,e,t,i){var r=$t.hasOwnProperty(e)?$t[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(oy(e,t,r,i)&&(t=null),i||r===null?ry(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Gi=ny.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Va=Symbol.for("react.element"),ws=Symbol.for("react.portal"),As=Symbol.for("react.fragment"),nh=Symbol.for("react.strict_mode"),dd=Symbol.for("react.profiler"),p0=Symbol.for("react.provider"),m0=Symbol.for("react.context"),ih=Symbol.for("react.forward_ref"),fd=Symbol.for("react.suspense"),hd=Symbol.for("react.suspense_list"),rh=Symbol.for("react.memo"),Ji=Symbol.for("react.lazy"),g0=Symbol.for("react.offscreen"),wp=Symbol.iterator;function Mo(n){return n===null||typeof n!="object"?null:(n=wp&&n[wp]||n["@@iterator"],typeof n=="function"?n:null)}var At=Object.assign,Jc;function Bo(n){if(Jc===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Jc=e&&e[1]||""}return`
`+Jc+n}var eu=!1;function tu(n,e){if(!n||eu)return"";eu=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{eu=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Bo(n):""}function ay(n){switch(n.tag){case 5:return Bo(n.type);case 16:return Bo("Lazy");case 13:return Bo("Suspense");case 19:return Bo("SuspenseList");case 0:case 2:case 15:return n=tu(n.type,!1),n;case 11:return n=tu(n.type.render,!1),n;case 1:return n=tu(n.type,!0),n;default:return""}}function pd(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case As:return"Fragment";case ws:return"Portal";case dd:return"Profiler";case nh:return"StrictMode";case fd:return"Suspense";case hd:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case m0:return(n.displayName||"Context")+".Consumer";case p0:return(n._context.displayName||"Context")+".Provider";case ih:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case rh:return e=n.displayName||null,e!==null?e:pd(n.type)||"Memo";case Ji:e=n._payload,n=n._init;try{return pd(n(e))}catch{}}return null}function ly(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pd(e);case 8:return e===nh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function _r(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function _0(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function cy(n){var e=_0(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Ga(n){n._valueTracker||(n._valueTracker=cy(n))}function v0(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=_0(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Jl(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function md(n,e){var t=e.checked;return At({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Ap(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=_r(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function x0(n,e){e=e.checked,e!=null&&th(n,"checked",e,!1)}function gd(n,e){x0(n,e);var t=_r(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?_d(n,e.type,t):e.hasOwnProperty("defaultValue")&&_d(n,e.type,_r(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function bp(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function _d(n,e,t){(e!=="number"||Jl(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var zo=Array.isArray;function ks(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+_r(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function vd(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ee(91));return At({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Rp(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ee(92));if(zo(t)){if(1<t.length)throw Error(ee(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:_r(t)}}function y0(n,e){var t=_r(e.value),i=_r(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Cp(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function S0(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xd(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?S0(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ja,M0=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(ja=ja||document.createElement("div"),ja.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ja.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function aa(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Wo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},uy=["Webkit","ms","Moz","O"];Object.keys(Wo).forEach(function(n){uy.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Wo[e]=Wo[n]})});function E0(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Wo.hasOwnProperty(n)&&Wo[n]?(""+e).trim():e+"px"}function T0(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=E0(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var dy=At({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yd(n,e){if(e){if(dy[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ee(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ee(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ee(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ee(62))}}function Sd(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Md=null;function sh(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ed=null,Bs=null,zs=null;function Pp(n){if(n=Da(n)){if(typeof Ed!="function")throw Error(ee(280));var e=n.stateNode;e&&(e=Ic(e),Ed(n.stateNode,n.type,e))}}function w0(n){Bs?zs?zs.push(n):zs=[n]:Bs=n}function A0(){if(Bs){var n=Bs,e=zs;if(zs=Bs=null,Pp(n),e)for(n=0;n<e.length;n++)Pp(e[n])}}function b0(n,e){return n(e)}function R0(){}var nu=!1;function C0(n,e,t){if(nu)return n(e,t);nu=!0;try{return b0(n,e,t)}finally{nu=!1,(Bs!==null||zs!==null)&&(R0(),A0())}}function la(n,e){var t=n.stateNode;if(t===null)return null;var i=Ic(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ee(231,e,typeof t));return t}var Td=!1;if(ki)try{var Eo={};Object.defineProperty(Eo,"passive",{get:function(){Td=!0}}),window.addEventListener("test",Eo,Eo),window.removeEventListener("test",Eo,Eo)}catch{Td=!1}function fy(n,e,t,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(u){this.onError(u)}}var Xo=!1,ec=null,tc=!1,wd=null,hy={onError:function(n){Xo=!0,ec=n}};function py(n,e,t,i,r,s,o,a,l){Xo=!1,ec=null,fy.apply(hy,arguments)}function my(n,e,t,i,r,s,o,a,l){if(py.apply(this,arguments),Xo){if(Xo){var c=ec;Xo=!1,ec=null}else throw Error(ee(198));tc||(tc=!0,wd=c)}}function is(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function P0(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Np(n){if(is(n)!==n)throw Error(ee(188))}function gy(n){var e=n.alternate;if(!e){if(e=is(n),e===null)throw Error(ee(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Np(r),n;if(s===i)return Np(r),e;s=s.sibling}throw Error(ee(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(ee(189))}}if(t.alternate!==i)throw Error(ee(190))}if(t.tag!==3)throw Error(ee(188));return t.stateNode.current===t?n:e}function N0(n){return n=gy(n),n!==null?L0(n):null}function L0(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=L0(n);if(e!==null)return e;n=n.sibling}return null}var D0=Cn.unstable_scheduleCallback,Lp=Cn.unstable_cancelCallback,_y=Cn.unstable_shouldYield,vy=Cn.unstable_requestPaint,Nt=Cn.unstable_now,xy=Cn.unstable_getCurrentPriorityLevel,oh=Cn.unstable_ImmediatePriority,I0=Cn.unstable_UserBlockingPriority,nc=Cn.unstable_NormalPriority,yy=Cn.unstable_LowPriority,U0=Cn.unstable_IdlePriority,Pc=null,di=null;function Sy(n){if(di&&typeof di.onCommitFiberRoot=="function")try{di.onCommitFiberRoot(Pc,n,void 0,(n.current.flags&128)===128)}catch{}}var Jn=Math.clz32?Math.clz32:Ty,My=Math.log,Ey=Math.LN2;function Ty(n){return n>>>=0,n===0?32:31-(My(n)/Ey|0)|0}var Wa=64,Xa=4194304;function Ho(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ic(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Ho(a):(s&=o,s!==0&&(i=Ho(s)))}else o=t&~r,o!==0?i=Ho(o):s!==0&&(i=Ho(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-Jn(e),r=1<<t,i|=n[t],e&=~r;return i}function wy(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ay(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-Jn(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=wy(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Ad(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function F0(){var n=Wa;return Wa<<=1,!(Wa&4194240)&&(Wa=64),n}function iu(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Na(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Jn(e),n[e]=t}function by(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-Jn(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function ah(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-Jn(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var lt=0;function O0(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var k0,lh,B0,z0,H0,bd=!1,Ya=[],ar=null,lr=null,cr=null,ca=new Map,ua=new Map,tr=[],Ry="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Dp(n,e){switch(n){case"focusin":case"focusout":ar=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":cr=null;break;case"pointerover":case"pointerout":ca.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ua.delete(e.pointerId)}}function To(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Da(e),e!==null&&lh(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function Cy(n,e,t,i,r){switch(e){case"focusin":return ar=To(ar,n,e,t,i,r),!0;case"dragenter":return lr=To(lr,n,e,t,i,r),!0;case"mouseover":return cr=To(cr,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return ca.set(s,To(ca.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ua.set(s,To(ua.get(s)||null,n,e,t,i,r)),!0}return!1}function V0(n){var e=Br(n.target);if(e!==null){var t=is(e);if(t!==null){if(e=t.tag,e===13){if(e=P0(t),e!==null){n.blockedOn=e,H0(n.priority,function(){B0(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Dl(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Rd(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Md=i,t.target.dispatchEvent(i),Md=null}else return e=Da(t),e!==null&&lh(e),n.blockedOn=t,!1;e.shift()}return!0}function Ip(n,e,t){Dl(n)&&t.delete(e)}function Py(){bd=!1,ar!==null&&Dl(ar)&&(ar=null),lr!==null&&Dl(lr)&&(lr=null),cr!==null&&Dl(cr)&&(cr=null),ca.forEach(Ip),ua.forEach(Ip)}function wo(n,e){n.blockedOn===e&&(n.blockedOn=null,bd||(bd=!0,Cn.unstable_scheduleCallback(Cn.unstable_NormalPriority,Py)))}function da(n){function e(r){return wo(r,n)}if(0<Ya.length){wo(Ya[0],n);for(var t=1;t<Ya.length;t++){var i=Ya[t];i.blockedOn===n&&(i.blockedOn=null)}}for(ar!==null&&wo(ar,n),lr!==null&&wo(lr,n),cr!==null&&wo(cr,n),ca.forEach(e),ua.forEach(e),t=0;t<tr.length;t++)i=tr[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<tr.length&&(t=tr[0],t.blockedOn===null);)V0(t),t.blockedOn===null&&tr.shift()}var Hs=Gi.ReactCurrentBatchConfig,rc=!0;function Ny(n,e,t,i){var r=lt,s=Hs.transition;Hs.transition=null;try{lt=1,ch(n,e,t,i)}finally{lt=r,Hs.transition=s}}function Ly(n,e,t,i){var r=lt,s=Hs.transition;Hs.transition=null;try{lt=4,ch(n,e,t,i)}finally{lt=r,Hs.transition=s}}function ch(n,e,t,i){if(rc){var r=Rd(n,e,t,i);if(r===null)hu(n,e,i,sc,t),Dp(n,i);else if(Cy(r,n,e,t,i))i.stopPropagation();else if(Dp(n,i),e&4&&-1<Ry.indexOf(n)){for(;r!==null;){var s=Da(r);if(s!==null&&k0(s),s=Rd(n,e,t,i),s===null&&hu(n,e,i,sc,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else hu(n,e,i,null,t)}}var sc=null;function Rd(n,e,t,i){if(sc=null,n=sh(i),n=Br(n),n!==null)if(e=is(n),e===null)n=null;else if(t=e.tag,t===13){if(n=P0(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return sc=n,null}function G0(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xy()){case oh:return 1;case I0:return 4;case nc:case yy:return 16;case U0:return 536870912;default:return 16}default:return 16}}var rr=null,uh=null,Il=null;function j0(){if(Il)return Il;var n,e=uh,t=e.length,i,r="value"in rr?rr.value:rr.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return Il=r.slice(n,1<i?1-i:void 0)}function Ul(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function $a(){return!0}function Up(){return!1}function Nn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?$a:Up,this.isPropagationStopped=Up,this}return At(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=$a)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=$a)},persist:function(){},isPersistent:$a}),e}var ho={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dh=Nn(ho),La=At({},ho,{view:0,detail:0}),Dy=Nn(La),ru,su,Ao,Nc=At({},La,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fh,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ao&&(Ao&&n.type==="mousemove"?(ru=n.screenX-Ao.screenX,su=n.screenY-Ao.screenY):su=ru=0,Ao=n),ru)},movementY:function(n){return"movementY"in n?n.movementY:su}}),Fp=Nn(Nc),Iy=At({},Nc,{dataTransfer:0}),Uy=Nn(Iy),Fy=At({},La,{relatedTarget:0}),ou=Nn(Fy),Oy=At({},ho,{animationName:0,elapsedTime:0,pseudoElement:0}),ky=Nn(Oy),By=At({},ho,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),zy=Nn(By),Hy=At({},ho,{data:0}),Op=Nn(Hy),Vy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wy(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=jy[n])?!!e[n]:!1}function fh(){return Wy}var Xy=At({},La,{key:function(n){if(n.key){var e=Vy[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Ul(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Gy[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fh,charCode:function(n){return n.type==="keypress"?Ul(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ul(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Yy=Nn(Xy),$y=At({},Nc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kp=Nn($y),qy=At({},La,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fh}),Ky=Nn(qy),Zy=At({},ho,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qy=Nn(Zy),Jy=At({},Nc,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),eS=Nn(Jy),tS=[9,13,27,32],hh=ki&&"CompositionEvent"in window,Yo=null;ki&&"documentMode"in document&&(Yo=document.documentMode);var nS=ki&&"TextEvent"in window&&!Yo,W0=ki&&(!hh||Yo&&8<Yo&&11>=Yo),Bp=" ",zp=!1;function X0(n,e){switch(n){case"keyup":return tS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Y0(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var bs=!1;function iS(n,e){switch(n){case"compositionend":return Y0(e);case"keypress":return e.which!==32?null:(zp=!0,Bp);case"textInput":return n=e.data,n===Bp&&zp?null:n;default:return null}}function rS(n,e){if(bs)return n==="compositionend"||!hh&&X0(n,e)?(n=j0(),Il=uh=rr=null,bs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return W0&&e.locale!=="ko"?null:e.data;default:return null}}var sS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hp(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!sS[n.type]:e==="textarea"}function $0(n,e,t,i){w0(i),e=oc(e,"onChange"),0<e.length&&(t=new dh("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var $o=null,fa=null;function oS(n){s_(n,0)}function Lc(n){var e=Ps(n);if(v0(e))return n}function aS(n,e){if(n==="change")return e}var q0=!1;if(ki){var au;if(ki){var lu="oninput"in document;if(!lu){var Vp=document.createElement("div");Vp.setAttribute("oninput","return;"),lu=typeof Vp.oninput=="function"}au=lu}else au=!1;q0=au&&(!document.documentMode||9<document.documentMode)}function Gp(){$o&&($o.detachEvent("onpropertychange",K0),fa=$o=null)}function K0(n){if(n.propertyName==="value"&&Lc(fa)){var e=[];$0(e,fa,n,sh(n)),C0(oS,e)}}function lS(n,e,t){n==="focusin"?(Gp(),$o=e,fa=t,$o.attachEvent("onpropertychange",K0)):n==="focusout"&&Gp()}function cS(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Lc(fa)}function uS(n,e){if(n==="click")return Lc(e)}function dS(n,e){if(n==="input"||n==="change")return Lc(e)}function fS(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var ni=typeof Object.is=="function"?Object.is:fS;function ha(n,e){if(ni(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!ud.call(e,r)||!ni(n[r],e[r]))return!1}return!0}function jp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Wp(n,e){var t=jp(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=jp(t)}}function Z0(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Z0(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Q0(){for(var n=window,e=Jl();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Jl(n.document)}return e}function ph(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function hS(n){var e=Q0(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Z0(t.ownerDocument.documentElement,t)){if(i!==null&&ph(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Wp(t,s);var o=Wp(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var pS=ki&&"documentMode"in document&&11>=document.documentMode,Rs=null,Cd=null,qo=null,Pd=!1;function Xp(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Pd||Rs==null||Rs!==Jl(i)||(i=Rs,"selectionStart"in i&&ph(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),qo&&ha(qo,i)||(qo=i,i=oc(Cd,"onSelect"),0<i.length&&(e=new dh("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Rs)))}function qa(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Cs={animationend:qa("Animation","AnimationEnd"),animationiteration:qa("Animation","AnimationIteration"),animationstart:qa("Animation","AnimationStart"),transitionend:qa("Transition","TransitionEnd")},cu={},J0={};ki&&(J0=document.createElement("div").style,"AnimationEvent"in window||(delete Cs.animationend.animation,delete Cs.animationiteration.animation,delete Cs.animationstart.animation),"TransitionEvent"in window||delete Cs.transitionend.transition);function Dc(n){if(cu[n])return cu[n];if(!Cs[n])return n;var e=Cs[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in J0)return cu[n]=e[t];return n}var e_=Dc("animationend"),t_=Dc("animationiteration"),n_=Dc("animationstart"),i_=Dc("transitionend"),r_=new Map,Yp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yr(n,e){r_.set(n,e),ns(e,[n])}for(var uu=0;uu<Yp.length;uu++){var du=Yp[uu],mS=du.toLowerCase(),gS=du[0].toUpperCase()+du.slice(1);yr(mS,"on"+gS)}yr(e_,"onAnimationEnd");yr(t_,"onAnimationIteration");yr(n_,"onAnimationStart");yr("dblclick","onDoubleClick");yr("focusin","onFocus");yr("focusout","onBlur");yr(i_,"onTransitionEnd");qs("onMouseEnter",["mouseout","mouseover"]);qs("onMouseLeave",["mouseout","mouseover"]);qs("onPointerEnter",["pointerout","pointerover"]);qs("onPointerLeave",["pointerout","pointerover"]);ns("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ns("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ns("onBeforeInput",["compositionend","keypress","textInput","paste"]);ns("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ns("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ns("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_S=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vo));function $p(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,my(i,e,void 0,n),n.currentTarget=null}function s_(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;$p(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;$p(r,a,c),s=l}}}if(tc)throw n=wd,tc=!1,wd=null,n}function mt(n,e){var t=e[Ud];t===void 0&&(t=e[Ud]=new Set);var i=n+"__bubble";t.has(i)||(o_(e,n,2,!1),t.add(i))}function fu(n,e,t){var i=0;e&&(i|=4),o_(t,n,i,e)}var Ka="_reactListening"+Math.random().toString(36).slice(2);function pa(n){if(!n[Ka]){n[Ka]=!0,h0.forEach(function(t){t!=="selectionchange"&&(_S.has(t)||fu(t,!1,n),fu(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Ka]||(e[Ka]=!0,fu("selectionchange",!1,e))}}function o_(n,e,t,i){switch(G0(e)){case 1:var r=Ny;break;case 4:r=Ly;break;default:r=ch}t=r.bind(null,e,t,n),r=void 0,!Td||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function hu(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Br(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}C0(function(){var c=s,u=sh(t),d=[];e:{var f=r_.get(n);if(f!==void 0){var p=dh,g=n;switch(n){case"keypress":if(Ul(t)===0)break e;case"keydown":case"keyup":p=Yy;break;case"focusin":g="focus",p=ou;break;case"focusout":g="blur",p=ou;break;case"beforeblur":case"afterblur":p=ou;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Fp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Uy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Ky;break;case e_:case t_:case n_:p=ky;break;case i_:p=Qy;break;case"scroll":p=Dy;break;case"wheel":p=eS;break;case"copy":case"cut":case"paste":p=zy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=kp}var _=(e&4)!==0,m=!_&&n==="scroll",h=_?f!==null?f+"Capture":null:f;_=[];for(var v=c,x;v!==null;){x=v;var y=x.stateNode;if(x.tag===5&&y!==null&&(x=y,h!==null&&(y=la(v,h),y!=null&&_.push(ma(v,y,x)))),m)break;v=v.return}0<_.length&&(f=new p(f,g,null,t,u),d.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",f&&t!==Md&&(g=t.relatedTarget||t.fromElement)&&(Br(g)||g[Bi]))break e;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(g=t.relatedTarget||t.toElement,p=c,g=g?Br(g):null,g!==null&&(m=is(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(_=Fp,y="onMouseLeave",h="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(_=kp,y="onPointerLeave",h="onPointerEnter",v="pointer"),m=p==null?f:Ps(p),x=g==null?f:Ps(g),f=new _(y,v+"leave",p,t,u),f.target=m,f.relatedTarget=x,y=null,Br(u)===c&&(_=new _(h,v+"enter",g,t,u),_.target=x,_.relatedTarget=m,y=_),m=y,p&&g)t:{for(_=p,h=g,v=0,x=_;x;x=as(x))v++;for(x=0,y=h;y;y=as(y))x++;for(;0<v-x;)_=as(_),v--;for(;0<x-v;)h=as(h),x--;for(;v--;){if(_===h||h!==null&&_===h.alternate)break t;_=as(_),h=as(h)}_=null}else _=null;p!==null&&qp(d,f,p,_,!1),g!==null&&m!==null&&qp(d,m,g,_,!0)}}e:{if(f=c?Ps(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var R=aS;else if(Hp(f))if(q0)R=dS;else{R=cS;var b=lS}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(R=uS);if(R&&(R=R(n,c))){$0(d,R,t,u);break e}b&&b(n,f,c),n==="focusout"&&(b=f._wrapperState)&&b.controlled&&f.type==="number"&&_d(f,"number",f.value)}switch(b=c?Ps(c):window,n){case"focusin":(Hp(b)||b.contentEditable==="true")&&(Rs=b,Cd=c,qo=null);break;case"focusout":qo=Cd=Rs=null;break;case"mousedown":Pd=!0;break;case"contextmenu":case"mouseup":case"dragend":Pd=!1,Xp(d,t,u);break;case"selectionchange":if(pS)break;case"keydown":case"keyup":Xp(d,t,u)}var A;if(hh)e:{switch(n){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else bs?X0(n,t)&&(P="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(P="onCompositionStart");P&&(W0&&t.locale!=="ko"&&(bs||P!=="onCompositionStart"?P==="onCompositionEnd"&&bs&&(A=j0()):(rr=u,uh="value"in rr?rr.value:rr.textContent,bs=!0)),b=oc(c,P),0<b.length&&(P=new Op(P,n,null,t,u),d.push({event:P,listeners:b}),A?P.data=A:(A=Y0(t),A!==null&&(P.data=A)))),(A=nS?iS(n,t):rS(n,t))&&(c=oc(c,"onBeforeInput"),0<c.length&&(u=new Op("onBeforeInput","beforeinput",null,t,u),d.push({event:u,listeners:c}),u.data=A))}s_(d,e)})}function ma(n,e,t){return{instance:n,listener:e,currentTarget:t}}function oc(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=la(n,t),s!=null&&i.unshift(ma(n,s,r)),s=la(n,e),s!=null&&i.push(ma(n,s,r))),n=n.return}return i}function as(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function qp(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=la(t,s),l!=null&&o.unshift(ma(t,l,a))):r||(l=la(t,s),l!=null&&o.push(ma(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var vS=/\r\n?/g,xS=/\u0000|\uFFFD/g;function Kp(n){return(typeof n=="string"?n:""+n).replace(vS,`
`).replace(xS,"")}function Za(n,e,t){if(e=Kp(e),Kp(n)!==e&&t)throw Error(ee(425))}function ac(){}var Nd=null,Ld=null;function Dd(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Id=typeof setTimeout=="function"?setTimeout:void 0,yS=typeof clearTimeout=="function"?clearTimeout:void 0,Zp=typeof Promise=="function"?Promise:void 0,SS=typeof queueMicrotask=="function"?queueMicrotask:typeof Zp<"u"?function(n){return Zp.resolve(null).then(n).catch(MS)}:Id;function MS(n){setTimeout(function(){throw n})}function pu(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),da(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);da(e)}function ur(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Qp(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var po=Math.random().toString(36).slice(2),li="__reactFiber$"+po,ga="__reactProps$"+po,Bi="__reactContainer$"+po,Ud="__reactEvents$"+po,ES="__reactListeners$"+po,TS="__reactHandles$"+po;function Br(n){var e=n[li];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Bi]||t[li]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Qp(n);n!==null;){if(t=n[li])return t;n=Qp(n)}return e}n=t,t=n.parentNode}return null}function Da(n){return n=n[li]||n[Bi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ps(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ee(33))}function Ic(n){return n[ga]||null}var Fd=[],Ns=-1;function Sr(n){return{current:n}}function _t(n){0>Ns||(n.current=Fd[Ns],Fd[Ns]=null,Ns--)}function ht(n,e){Ns++,Fd[Ns]=n.current,n.current=e}var vr={},en=Sr(vr),_n=Sr(!1),$r=vr;function Ks(n,e){var t=n.type.contextTypes;if(!t)return vr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function vn(n){return n=n.childContextTypes,n!=null}function lc(){_t(_n),_t(en)}function Jp(n,e,t){if(en.current!==vr)throw Error(ee(168));ht(en,e),ht(_n,t)}function a_(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ee(108,ly(n)||"Unknown",r));return At({},t,i)}function cc(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||vr,$r=en.current,ht(en,n),ht(_n,_n.current),!0}function em(n,e,t){var i=n.stateNode;if(!i)throw Error(ee(169));t?(n=a_(n,e,$r),i.__reactInternalMemoizedMergedChildContext=n,_t(_n),_t(en),ht(en,n)):_t(_n),ht(_n,t)}var Pi=null,Uc=!1,mu=!1;function l_(n){Pi===null?Pi=[n]:Pi.push(n)}function wS(n){Uc=!0,l_(n)}function Mr(){if(!mu&&Pi!==null){mu=!0;var n=0,e=lt;try{var t=Pi;for(lt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Pi=null,Uc=!1}catch(r){throw Pi!==null&&(Pi=Pi.slice(n+1)),D0(oh,Mr),r}finally{lt=e,mu=!1}}return null}var Ls=[],Ds=0,uc=null,dc=0,Fn=[],On=0,qr=null,Ni=1,Li="";function Dr(n,e){Ls[Ds++]=dc,Ls[Ds++]=uc,uc=n,dc=e}function c_(n,e,t){Fn[On++]=Ni,Fn[On++]=Li,Fn[On++]=qr,qr=n;var i=Ni;n=Li;var r=32-Jn(i)-1;i&=~(1<<r),t+=1;var s=32-Jn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ni=1<<32-Jn(e)+r|t<<r|i,Li=s+n}else Ni=1<<s|t<<r|i,Li=n}function mh(n){n.return!==null&&(Dr(n,1),c_(n,1,0))}function gh(n){for(;n===uc;)uc=Ls[--Ds],Ls[Ds]=null,dc=Ls[--Ds],Ls[Ds]=null;for(;n===qr;)qr=Fn[--On],Fn[On]=null,Li=Fn[--On],Fn[On]=null,Ni=Fn[--On],Fn[On]=null}var Rn=null,An=null,xt=!1,qn=null;function u_(n,e){var t=kn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function tm(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Rn=n,An=ur(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Rn=n,An=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=qr!==null?{id:Ni,overflow:Li}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=kn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Rn=n,An=null,!0):!1;default:return!1}}function Od(n){return(n.mode&1)!==0&&(n.flags&128)===0}function kd(n){if(xt){var e=An;if(e){var t=e;if(!tm(n,e)){if(Od(n))throw Error(ee(418));e=ur(t.nextSibling);var i=Rn;e&&tm(n,e)?u_(i,t):(n.flags=n.flags&-4097|2,xt=!1,Rn=n)}}else{if(Od(n))throw Error(ee(418));n.flags=n.flags&-4097|2,xt=!1,Rn=n}}}function nm(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Rn=n}function Qa(n){if(n!==Rn)return!1;if(!xt)return nm(n),xt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Dd(n.type,n.memoizedProps)),e&&(e=An)){if(Od(n))throw d_(),Error(ee(418));for(;e;)u_(n,e),e=ur(e.nextSibling)}if(nm(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ee(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){An=ur(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}An=null}}else An=Rn?ur(n.stateNode.nextSibling):null;return!0}function d_(){for(var n=An;n;)n=ur(n.nextSibling)}function Zs(){An=Rn=null,xt=!1}function _h(n){qn===null?qn=[n]:qn.push(n)}var AS=Gi.ReactCurrentBatchConfig;function bo(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ee(309));var i=t.stateNode}if(!i)throw Error(ee(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(ee(284));if(!t._owner)throw Error(ee(290,n))}return n}function Ja(n,e){throw n=Object.prototype.toString.call(e),Error(ee(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function im(n){var e=n._init;return e(n._payload)}function f_(n){function e(h,v){if(n){var x=h.deletions;x===null?(h.deletions=[v],h.flags|=16):x.push(v)}}function t(h,v){if(!n)return null;for(;v!==null;)e(h,v),v=v.sibling;return null}function i(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function r(h,v){return h=pr(h,v),h.index=0,h.sibling=null,h}function s(h,v,x){return h.index=x,n?(x=h.alternate,x!==null?(x=x.index,x<v?(h.flags|=2,v):x):(h.flags|=2,v)):(h.flags|=1048576,v)}function o(h){return n&&h.alternate===null&&(h.flags|=2),h}function a(h,v,x,y){return v===null||v.tag!==6?(v=Mu(x,h.mode,y),v.return=h,v):(v=r(v,x),v.return=h,v)}function l(h,v,x,y){var R=x.type;return R===As?u(h,v,x.props.children,y,x.key):v!==null&&(v.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Ji&&im(R)===v.type)?(y=r(v,x.props),y.ref=bo(h,v,x),y.return=h,y):(y=Vl(x.type,x.key,x.props,null,h.mode,y),y.ref=bo(h,v,x),y.return=h,y)}function c(h,v,x,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=Eu(x,h.mode,y),v.return=h,v):(v=r(v,x.children||[]),v.return=h,v)}function u(h,v,x,y,R){return v===null||v.tag!==7?(v=Xr(x,h.mode,y,R),v.return=h,v):(v=r(v,x),v.return=h,v)}function d(h,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Mu(""+v,h.mode,x),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Va:return x=Vl(v.type,v.key,v.props,null,h.mode,x),x.ref=bo(h,null,v),x.return=h,x;case ws:return v=Eu(v,h.mode,x),v.return=h,v;case Ji:var y=v._init;return d(h,y(v._payload),x)}if(zo(v)||Mo(v))return v=Xr(v,h.mode,x,null),v.return=h,v;Ja(h,v)}return null}function f(h,v,x,y){var R=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return R!==null?null:a(h,v,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Va:return x.key===R?l(h,v,x,y):null;case ws:return x.key===R?c(h,v,x,y):null;case Ji:return R=x._init,f(h,v,R(x._payload),y)}if(zo(x)||Mo(x))return R!==null?null:u(h,v,x,y,null);Ja(h,x)}return null}function p(h,v,x,y,R){if(typeof y=="string"&&y!==""||typeof y=="number")return h=h.get(x)||null,a(v,h,""+y,R);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Va:return h=h.get(y.key===null?x:y.key)||null,l(v,h,y,R);case ws:return h=h.get(y.key===null?x:y.key)||null,c(v,h,y,R);case Ji:var b=y._init;return p(h,v,x,b(y._payload),R)}if(zo(y)||Mo(y))return h=h.get(x)||null,u(v,h,y,R,null);Ja(v,y)}return null}function g(h,v,x,y){for(var R=null,b=null,A=v,P=v=0,w=null;A!==null&&P<x.length;P++){A.index>P?(w=A,A=null):w=A.sibling;var E=f(h,A,x[P],y);if(E===null){A===null&&(A=w);break}n&&A&&E.alternate===null&&e(h,A),v=s(E,v,P),b===null?R=E:b.sibling=E,b=E,A=w}if(P===x.length)return t(h,A),xt&&Dr(h,P),R;if(A===null){for(;P<x.length;P++)A=d(h,x[P],y),A!==null&&(v=s(A,v,P),b===null?R=A:b.sibling=A,b=A);return xt&&Dr(h,P),R}for(A=i(h,A);P<x.length;P++)w=p(A,h,P,x[P],y),w!==null&&(n&&w.alternate!==null&&A.delete(w.key===null?P:w.key),v=s(w,v,P),b===null?R=w:b.sibling=w,b=w);return n&&A.forEach(function(N){return e(h,N)}),xt&&Dr(h,P),R}function _(h,v,x,y){var R=Mo(x);if(typeof R!="function")throw Error(ee(150));if(x=R.call(x),x==null)throw Error(ee(151));for(var b=R=null,A=v,P=v=0,w=null,E=x.next();A!==null&&!E.done;P++,E=x.next()){A.index>P?(w=A,A=null):w=A.sibling;var N=f(h,A,E.value,y);if(N===null){A===null&&(A=w);break}n&&A&&N.alternate===null&&e(h,A),v=s(N,v,P),b===null?R=N:b.sibling=N,b=N,A=w}if(E.done)return t(h,A),xt&&Dr(h,P),R;if(A===null){for(;!E.done;P++,E=x.next())E=d(h,E.value,y),E!==null&&(v=s(E,v,P),b===null?R=E:b.sibling=E,b=E);return xt&&Dr(h,P),R}for(A=i(h,A);!E.done;P++,E=x.next())E=p(A,h,P,E.value,y),E!==null&&(n&&E.alternate!==null&&A.delete(E.key===null?P:E.key),v=s(E,v,P),b===null?R=E:b.sibling=E,b=E);return n&&A.forEach(function(V){return e(h,V)}),xt&&Dr(h,P),R}function m(h,v,x,y){if(typeof x=="object"&&x!==null&&x.type===As&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Va:e:{for(var R=x.key,b=v;b!==null;){if(b.key===R){if(R=x.type,R===As){if(b.tag===7){t(h,b.sibling),v=r(b,x.props.children),v.return=h,h=v;break e}}else if(b.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Ji&&im(R)===b.type){t(h,b.sibling),v=r(b,x.props),v.ref=bo(h,b,x),v.return=h,h=v;break e}t(h,b);break}else e(h,b);b=b.sibling}x.type===As?(v=Xr(x.props.children,h.mode,y,x.key),v.return=h,h=v):(y=Vl(x.type,x.key,x.props,null,h.mode,y),y.ref=bo(h,v,x),y.return=h,h=y)}return o(h);case ws:e:{for(b=x.key;v!==null;){if(v.key===b)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){t(h,v.sibling),v=r(v,x.children||[]),v.return=h,h=v;break e}else{t(h,v);break}else e(h,v);v=v.sibling}v=Eu(x,h.mode,y),v.return=h,h=v}return o(h);case Ji:return b=x._init,m(h,v,b(x._payload),y)}if(zo(x))return g(h,v,x,y);if(Mo(x))return _(h,v,x,y);Ja(h,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(t(h,v.sibling),v=r(v,x),v.return=h,h=v):(t(h,v),v=Mu(x,h.mode,y),v.return=h,h=v),o(h)):t(h,v)}return m}var Qs=f_(!0),h_=f_(!1),fc=Sr(null),hc=null,Is=null,vh=null;function xh(){vh=Is=hc=null}function yh(n){var e=fc.current;_t(fc),n._currentValue=e}function Bd(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Vs(n,e){hc=n,vh=Is=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(mn=!0),n.firstContext=null)}function Hn(n){var e=n._currentValue;if(vh!==n)if(n={context:n,memoizedValue:e,next:null},Is===null){if(hc===null)throw Error(ee(308));Is=n,hc.dependencies={lanes:0,firstContext:n}}else Is=Is.next=n;return e}var zr=null;function Sh(n){zr===null?zr=[n]:zr.push(n)}function p_(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Sh(e)):(t.next=r.next,r.next=t),e.interleaved=t,zi(n,i)}function zi(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var er=!1;function Mh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function m_(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ui(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function dr(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,et&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,zi(n,t)}return r=i.interleaved,r===null?(e.next=e,Sh(i)):(e.next=r.next,r.next=e),i.interleaved=e,zi(n,t)}function Fl(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,ah(n,t)}}function rm(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function pc(n,e,t,i){var r=n.updateQueue;er=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=n.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=n,_=a;switch(f=e,p=t,_.tag){case 1:if(g=_.payload,typeof g=="function"){d=g.call(p,d,f);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=_.payload,f=typeof g=="function"?g.call(p,d,f):g,f==null)break e;d=At({},d,f);break e;case 2:er=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Zr|=o,n.lanes=o,n.memoizedState=d}}function sm(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ee(191,r));r.call(i)}}}var Ia={},fi=Sr(Ia),_a=Sr(Ia),va=Sr(Ia);function Hr(n){if(n===Ia)throw Error(ee(174));return n}function Eh(n,e){switch(ht(va,e),ht(_a,n),ht(fi,Ia),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:xd(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=xd(e,n)}_t(fi),ht(fi,e)}function Js(){_t(fi),_t(_a),_t(va)}function g_(n){Hr(va.current);var e=Hr(fi.current),t=xd(e,n.type);e!==t&&(ht(_a,n),ht(fi,t))}function Th(n){_a.current===n&&(_t(fi),_t(_a))}var Et=Sr(0);function mc(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var gu=[];function wh(){for(var n=0;n<gu.length;n++)gu[n]._workInProgressVersionPrimary=null;gu.length=0}var Ol=Gi.ReactCurrentDispatcher,_u=Gi.ReactCurrentBatchConfig,Kr=0,wt=null,It=null,zt=null,gc=!1,Ko=!1,xa=0,bS=0;function qt(){throw Error(ee(321))}function Ah(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!ni(n[t],e[t]))return!1;return!0}function bh(n,e,t,i,r,s){if(Kr=s,wt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ol.current=n===null||n.memoizedState===null?NS:LS,n=t(i,r),Ko){s=0;do{if(Ko=!1,xa=0,25<=s)throw Error(ee(301));s+=1,zt=It=null,e.updateQueue=null,Ol.current=DS,n=t(i,r)}while(Ko)}if(Ol.current=_c,e=It!==null&&It.next!==null,Kr=0,zt=It=wt=null,gc=!1,e)throw Error(ee(300));return n}function Rh(){var n=xa!==0;return xa=0,n}function oi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return zt===null?wt.memoizedState=zt=n:zt=zt.next=n,zt}function Vn(){if(It===null){var n=wt.alternate;n=n!==null?n.memoizedState:null}else n=It.next;var e=zt===null?wt.memoizedState:zt.next;if(e!==null)zt=e,It=n;else{if(n===null)throw Error(ee(310));It=n,n={memoizedState:It.memoizedState,baseState:It.baseState,baseQueue:It.baseQueue,queue:It.queue,next:null},zt===null?wt.memoizedState=zt=n:zt=zt.next=n}return zt}function ya(n,e){return typeof e=="function"?e(n):e}function vu(n){var e=Vn(),t=e.queue;if(t===null)throw Error(ee(311));t.lastRenderedReducer=n;var i=It,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Kr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,wt.lanes|=u,Zr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ni(i,e.memoizedState)||(mn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,wt.lanes|=s,Zr|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function xu(n){var e=Vn(),t=e.queue;if(t===null)throw Error(ee(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);ni(s,e.memoizedState)||(mn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function __(){}function v_(n,e){var t=wt,i=Vn(),r=e(),s=!ni(i.memoizedState,r);if(s&&(i.memoizedState=r,mn=!0),i=i.queue,Ch(S_.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||zt!==null&&zt.memoizedState.tag&1){if(t.flags|=2048,Sa(9,y_.bind(null,t,i,r,e),void 0,null),Vt===null)throw Error(ee(349));Kr&30||x_(t,e,r)}return r}function x_(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=wt.updateQueue,e===null?(e={lastEffect:null,stores:null},wt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function y_(n,e,t,i){e.value=t,e.getSnapshot=i,M_(e)&&E_(n)}function S_(n,e,t){return t(function(){M_(e)&&E_(n)})}function M_(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!ni(n,t)}catch{return!0}}function E_(n){var e=zi(n,1);e!==null&&ei(e,n,1,-1)}function om(n){var e=oi();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:n},e.queue=n,n=n.dispatch=PS.bind(null,wt,n),[e.memoizedState,n]}function Sa(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=wt.updateQueue,e===null?(e={lastEffect:null,stores:null},wt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function T_(){return Vn().memoizedState}function kl(n,e,t,i){var r=oi();wt.flags|=n,r.memoizedState=Sa(1|e,t,void 0,i===void 0?null:i)}function Fc(n,e,t,i){var r=Vn();i=i===void 0?null:i;var s=void 0;if(It!==null){var o=It.memoizedState;if(s=o.destroy,i!==null&&Ah(i,o.deps)){r.memoizedState=Sa(e,t,s,i);return}}wt.flags|=n,r.memoizedState=Sa(1|e,t,s,i)}function am(n,e){return kl(8390656,8,n,e)}function Ch(n,e){return Fc(2048,8,n,e)}function w_(n,e){return Fc(4,2,n,e)}function A_(n,e){return Fc(4,4,n,e)}function b_(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function R_(n,e,t){return t=t!=null?t.concat([n]):null,Fc(4,4,b_.bind(null,e,n),t)}function Ph(){}function C_(n,e){var t=Vn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Ah(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function P_(n,e){var t=Vn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Ah(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function N_(n,e,t){return Kr&21?(ni(t,e)||(t=F0(),wt.lanes|=t,Zr|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,mn=!0),n.memoizedState=t)}function RS(n,e){var t=lt;lt=t!==0&&4>t?t:4,n(!0);var i=_u.transition;_u.transition={};try{n(!1),e()}finally{lt=t,_u.transition=i}}function L_(){return Vn().memoizedState}function CS(n,e,t){var i=hr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},D_(n))I_(e,t);else if(t=p_(n,e,t,i),t!==null){var r=an();ei(t,n,i,r),U_(t,e,i)}}function PS(n,e,t){var i=hr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(D_(n))I_(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,ni(a,o)){var l=e.interleaved;l===null?(r.next=r,Sh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=p_(n,e,r,i),t!==null&&(r=an(),ei(t,n,i,r),U_(t,e,i))}}function D_(n){var e=n.alternate;return n===wt||e!==null&&e===wt}function I_(n,e){Ko=gc=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function U_(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,ah(n,t)}}var _c={readContext:Hn,useCallback:qt,useContext:qt,useEffect:qt,useImperativeHandle:qt,useInsertionEffect:qt,useLayoutEffect:qt,useMemo:qt,useReducer:qt,useRef:qt,useState:qt,useDebugValue:qt,useDeferredValue:qt,useTransition:qt,useMutableSource:qt,useSyncExternalStore:qt,useId:qt,unstable_isNewReconciler:!1},NS={readContext:Hn,useCallback:function(n,e){return oi().memoizedState=[n,e===void 0?null:e],n},useContext:Hn,useEffect:am,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,kl(4194308,4,b_.bind(null,e,n),t)},useLayoutEffect:function(n,e){return kl(4194308,4,n,e)},useInsertionEffect:function(n,e){return kl(4,2,n,e)},useMemo:function(n,e){var t=oi();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=oi();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=CS.bind(null,wt,n),[i.memoizedState,n]},useRef:function(n){var e=oi();return n={current:n},e.memoizedState=n},useState:om,useDebugValue:Ph,useDeferredValue:function(n){return oi().memoizedState=n},useTransition:function(){var n=om(!1),e=n[0];return n=RS.bind(null,n[1]),oi().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=wt,r=oi();if(xt){if(t===void 0)throw Error(ee(407));t=t()}else{if(t=e(),Vt===null)throw Error(ee(349));Kr&30||x_(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,am(S_.bind(null,i,s,n),[n]),i.flags|=2048,Sa(9,y_.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=oi(),e=Vt.identifierPrefix;if(xt){var t=Li,i=Ni;t=(i&~(1<<32-Jn(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=xa++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=bS++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},LS={readContext:Hn,useCallback:C_,useContext:Hn,useEffect:Ch,useImperativeHandle:R_,useInsertionEffect:w_,useLayoutEffect:A_,useMemo:P_,useReducer:vu,useRef:T_,useState:function(){return vu(ya)},useDebugValue:Ph,useDeferredValue:function(n){var e=Vn();return N_(e,It.memoizedState,n)},useTransition:function(){var n=vu(ya)[0],e=Vn().memoizedState;return[n,e]},useMutableSource:__,useSyncExternalStore:v_,useId:L_,unstable_isNewReconciler:!1},DS={readContext:Hn,useCallback:C_,useContext:Hn,useEffect:Ch,useImperativeHandle:R_,useInsertionEffect:w_,useLayoutEffect:A_,useMemo:P_,useReducer:xu,useRef:T_,useState:function(){return xu(ya)},useDebugValue:Ph,useDeferredValue:function(n){var e=Vn();return It===null?e.memoizedState=n:N_(e,It.memoizedState,n)},useTransition:function(){var n=xu(ya)[0],e=Vn().memoizedState;return[n,e]},useMutableSource:__,useSyncExternalStore:v_,useId:L_,unstable_isNewReconciler:!1};function Yn(n,e){if(n&&n.defaultProps){e=At({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function zd(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:At({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Oc={isMounted:function(n){return(n=n._reactInternals)?is(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=an(),r=hr(n),s=Ui(i,r);s.payload=e,t!=null&&(s.callback=t),e=dr(n,s,r),e!==null&&(ei(e,n,r,i),Fl(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=an(),r=hr(n),s=Ui(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=dr(n,s,r),e!==null&&(ei(e,n,r,i),Fl(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=an(),i=hr(n),r=Ui(t,i);r.tag=2,e!=null&&(r.callback=e),e=dr(n,r,i),e!==null&&(ei(e,n,i,t),Fl(e,n,i))}};function lm(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ha(t,i)||!ha(r,s):!0}function F_(n,e,t){var i=!1,r=vr,s=e.contextType;return typeof s=="object"&&s!==null?s=Hn(s):(r=vn(e)?$r:en.current,i=e.contextTypes,s=(i=i!=null)?Ks(n,r):vr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Oc,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function cm(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Oc.enqueueReplaceState(e,e.state,null)}function Hd(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},Mh(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Hn(s):(s=vn(e)?$r:en.current,r.context=Ks(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(zd(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Oc.enqueueReplaceState(r,r.state,null),pc(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function eo(n,e){try{var t="",i=e;do t+=ay(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function yu(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Vd(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var IS=typeof WeakMap=="function"?WeakMap:Map;function O_(n,e,t){t=Ui(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){xc||(xc=!0,Qd=i),Vd(n,e)},t}function k_(n,e,t){t=Ui(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Vd(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Vd(n,e),typeof i!="function"&&(fr===null?fr=new Set([this]):fr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function um(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new IS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=$S.bind(null,n,e,t),e.then(n,n))}function dm(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function fm(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Ui(-1,1),e.tag=2,dr(t,e,1))),t.lanes|=1),n)}var US=Gi.ReactCurrentOwner,mn=!1;function sn(n,e,t,i){e.child=n===null?h_(e,null,t,i):Qs(e,n.child,t,i)}function hm(n,e,t,i,r){t=t.render;var s=e.ref;return Vs(e,r),i=bh(n,e,t,i,s,r),t=Rh(),n!==null&&!mn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Hi(n,e,r)):(xt&&t&&mh(e),e.flags|=1,sn(n,e,i,r),e.child)}function pm(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!kh(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,B_(n,e,s,i,r)):(n=Vl(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:ha,t(o,i)&&n.ref===e.ref)return Hi(n,e,r)}return e.flags|=1,n=pr(s,i),n.ref=e.ref,n.return=e,e.child=n}function B_(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(ha(s,i)&&n.ref===e.ref)if(mn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(mn=!0);else return e.lanes=n.lanes,Hi(n,e,r)}return Gd(n,e,t,i,r)}function z_(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ht(Fs,wn),wn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,ht(Fs,wn),wn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,ht(Fs,wn),wn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,ht(Fs,wn),wn|=i;return sn(n,e,r,t),e.child}function H_(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Gd(n,e,t,i,r){var s=vn(t)?$r:en.current;return s=Ks(e,s),Vs(e,r),t=bh(n,e,t,i,s,r),i=Rh(),n!==null&&!mn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Hi(n,e,r)):(xt&&i&&mh(e),e.flags|=1,sn(n,e,t,r),e.child)}function mm(n,e,t,i,r){if(vn(t)){var s=!0;cc(e)}else s=!1;if(Vs(e,r),e.stateNode===null)Bl(n,e),F_(e,t,i),Hd(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=Hn(c):(c=vn(t)?$r:en.current,c=Ks(e,c));var u=t.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&cm(e,o,i,c),er=!1;var f=e.memoizedState;o.state=f,pc(e,i,o,r),l=e.memoizedState,a!==i||f!==l||_n.current||er?(typeof u=="function"&&(zd(e,t,u,i),l=e.memoizedState),(a=er||lm(e,t,a,i,f,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,m_(n,e),a=e.memoizedProps,c=e.type===e.elementType?a:Yn(e.type,a),o.props=c,d=e.pendingProps,f=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Hn(l):(l=vn(t)?$r:en.current,l=Ks(e,l));var p=t.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&cm(e,o,i,l),er=!1,f=e.memoizedState,o.state=f,pc(e,i,o,r);var g=e.memoizedState;a!==d||f!==g||_n.current||er?(typeof p=="function"&&(zd(e,t,p,i),g=e.memoizedState),(c=er||lm(e,t,c,i,f,g,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return jd(n,e,t,i,s,r)}function jd(n,e,t,i,r,s){H_(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&em(e,t,!1),Hi(n,e,s);i=e.stateNode,US.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Qs(e,n.child,null,s),e.child=Qs(e,null,a,s)):sn(n,e,a,s),e.memoizedState=i.state,r&&em(e,t,!0),e.child}function V_(n){var e=n.stateNode;e.pendingContext?Jp(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Jp(n,e.context,!1),Eh(n,e.containerInfo)}function gm(n,e,t,i,r){return Zs(),_h(r),e.flags|=256,sn(n,e,t,i),e.child}var Wd={dehydrated:null,treeContext:null,retryLane:0};function Xd(n){return{baseLanes:n,cachePool:null,transitions:null}}function G_(n,e,t){var i=e.pendingProps,r=Et.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),ht(Et,r&1),n===null)return kd(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=zc(o,i,0,null),n=Xr(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Xd(t),e.memoizedState=Wd,n):Nh(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return FS(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=pr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=pr(a,s):(s=Xr(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Xd(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Wd,i}return s=n.child,n=s.sibling,i=pr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Nh(n,e){return e=zc({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function el(n,e,t,i){return i!==null&&_h(i),Qs(e,n.child,null,t),n=Nh(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function FS(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=yu(Error(ee(422))),el(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=zc({mode:"visible",children:i.children},r,0,null),s=Xr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Qs(e,n.child,null,o),e.child.memoizedState=Xd(o),e.memoizedState=Wd,s);if(!(e.mode&1))return el(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ee(419)),i=yu(s,i,void 0),el(n,e,o,i)}if(a=(o&n.childLanes)!==0,mn||a){if(i=Vt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,zi(n,r),ei(i,n,r,-1))}return Oh(),i=yu(Error(ee(421))),el(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=qS.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,An=ur(r.nextSibling),Rn=e,xt=!0,qn=null,n!==null&&(Fn[On++]=Ni,Fn[On++]=Li,Fn[On++]=qr,Ni=n.id,Li=n.overflow,qr=e),e=Nh(e,i.children),e.flags|=4096,e)}function _m(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Bd(n.return,e,t)}function Su(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function j_(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(sn(n,e,i.children,t),i=Et.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&_m(n,t,e);else if(n.tag===19)_m(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(ht(Et,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&mc(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Su(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&mc(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Su(e,!0,t,null,s);break;case"together":Su(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Bl(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Hi(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Zr|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(ee(153));if(e.child!==null){for(n=e.child,t=pr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=pr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function OS(n,e,t){switch(e.tag){case 3:V_(e),Zs();break;case 5:g_(e);break;case 1:vn(e.type)&&cc(e);break;case 4:Eh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ht(fc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ht(Et,Et.current&1),e.flags|=128,null):t&e.child.childLanes?G_(n,e,t):(ht(Et,Et.current&1),n=Hi(n,e,t),n!==null?n.sibling:null);ht(Et,Et.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return j_(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ht(Et,Et.current),i)break;return null;case 22:case 23:return e.lanes=0,z_(n,e,t)}return Hi(n,e,t)}var W_,Yd,X_,Y_;W_=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Yd=function(){};X_=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Hr(fi.current);var s=null;switch(t){case"input":r=md(n,r),i=md(n,i),s=[];break;case"select":r=At({},r,{value:void 0}),i=At({},i,{value:void 0}),s=[];break;case"textarea":r=vd(n,r),i=vd(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=ac)}yd(t,i);var o;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(oa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(oa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&mt("scroll",n),s||a===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Y_=function(n,e,t,i){t!==i&&(e.flags|=4)};function Ro(n,e){if(!xt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Kt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function kS(n,e,t){var i=e.pendingProps;switch(gh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kt(e),null;case 1:return vn(e.type)&&lc(),Kt(e),null;case 3:return i=e.stateNode,Js(),_t(_n),_t(en),wh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Qa(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,qn!==null&&(tf(qn),qn=null))),Yd(n,e),Kt(e),null;case 5:Th(e);var r=Hr(va.current);if(t=e.type,n!==null&&e.stateNode!=null)X_(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ee(166));return Kt(e),null}if(n=Hr(fi.current),Qa(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[li]=e,i[ga]=s,n=(e.mode&1)!==0,t){case"dialog":mt("cancel",i),mt("close",i);break;case"iframe":case"object":case"embed":mt("load",i);break;case"video":case"audio":for(r=0;r<Vo.length;r++)mt(Vo[r],i);break;case"source":mt("error",i);break;case"img":case"image":case"link":mt("error",i),mt("load",i);break;case"details":mt("toggle",i);break;case"input":Ap(i,s),mt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},mt("invalid",i);break;case"textarea":Rp(i,s),mt("invalid",i)}yd(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Za(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Za(i.textContent,a,n),r=["children",""+a]):oa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&mt("scroll",i)}switch(t){case"input":Ga(i),bp(i,s,!0);break;case"textarea":Ga(i),Cp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ac)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=S0(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[li]=e,n[ga]=i,W_(n,e,!1,!1),e.stateNode=n;e:{switch(o=Sd(t,i),t){case"dialog":mt("cancel",n),mt("close",n),r=i;break;case"iframe":case"object":case"embed":mt("load",n),r=i;break;case"video":case"audio":for(r=0;r<Vo.length;r++)mt(Vo[r],n);r=i;break;case"source":mt("error",n),r=i;break;case"img":case"image":case"link":mt("error",n),mt("load",n),r=i;break;case"details":mt("toggle",n),r=i;break;case"input":Ap(n,i),r=md(n,i),mt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=At({},i,{value:void 0}),mt("invalid",n);break;case"textarea":Rp(n,i),r=vd(n,i),mt("invalid",n);break;default:r=i}yd(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?T0(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&M0(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&aa(n,l):typeof l=="number"&&aa(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(oa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&mt("scroll",n):l!=null&&th(n,s,l,o))}switch(t){case"input":Ga(n),bp(n,i,!1);break;case"textarea":Ga(n),Cp(n);break;case"option":i.value!=null&&n.setAttribute("value",""+_r(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?ks(n,!!i.multiple,s,!1):i.defaultValue!=null&&ks(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=ac)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Kt(e),null;case 6:if(n&&e.stateNode!=null)Y_(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ee(166));if(t=Hr(va.current),Hr(fi.current),Qa(e)){if(i=e.stateNode,t=e.memoizedProps,i[li]=e,(s=i.nodeValue!==t)&&(n=Rn,n!==null))switch(n.tag){case 3:Za(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Za(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[li]=e,e.stateNode=i}return Kt(e),null;case 13:if(_t(Et),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(xt&&An!==null&&e.mode&1&&!(e.flags&128))d_(),Zs(),e.flags|=98560,s=!1;else if(s=Qa(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ee(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ee(317));s[li]=e}else Zs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Kt(e),s=!1}else qn!==null&&(tf(qn),qn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||Et.current&1?Ut===0&&(Ut=3):Oh())),e.updateQueue!==null&&(e.flags|=4),Kt(e),null);case 4:return Js(),Yd(n,e),n===null&&pa(e.stateNode.containerInfo),Kt(e),null;case 10:return yh(e.type._context),Kt(e),null;case 17:return vn(e.type)&&lc(),Kt(e),null;case 19:if(_t(Et),s=e.memoizedState,s===null)return Kt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ro(s,!1);else{if(Ut!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=mc(n),o!==null){for(e.flags|=128,Ro(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return ht(Et,Et.current&1|2),e.child}n=n.sibling}s.tail!==null&&Nt()>to&&(e.flags|=128,i=!0,Ro(s,!1),e.lanes=4194304)}else{if(!i)if(n=mc(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Ro(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!xt)return Kt(e),null}else 2*Nt()-s.renderingStartTime>to&&t!==1073741824&&(e.flags|=128,i=!0,Ro(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Nt(),e.sibling=null,t=Et.current,ht(Et,i?t&1|2:t&1),e):(Kt(e),null);case 22:case 23:return Fh(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?wn&1073741824&&(Kt(e),e.subtreeFlags&6&&(e.flags|=8192)):Kt(e),null;case 24:return null;case 25:return null}throw Error(ee(156,e.tag))}function BS(n,e){switch(gh(e),e.tag){case 1:return vn(e.type)&&lc(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Js(),_t(_n),_t(en),wh(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Th(e),null;case 13:if(_t(Et),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ee(340));Zs()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return _t(Et),null;case 4:return Js(),null;case 10:return yh(e.type._context),null;case 22:case 23:return Fh(),null;case 24:return null;default:return null}}var tl=!1,Jt=!1,zS=typeof WeakSet=="function"?WeakSet:Set,me=null;function Us(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Rt(n,e,i)}else t.current=null}function $d(n,e,t){try{t()}catch(i){Rt(n,e,i)}}var vm=!1;function HS(n,e){if(Nd=rc,n=Q0(),ph(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=n,f=null;t:for(;;){for(var p;d!==t||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===n)break t;if(f===t&&++c===r&&(a=o),f===s&&++u===i&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ld={focusedElem:n,selectionRange:t},rc=!1,me=e;me!==null;)if(e=me,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,me=n;else for(;me!==null;){e=me;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var _=g.memoizedProps,m=g.memoizedState,h=e.stateNode,v=h.getSnapshotBeforeUpdate(e.elementType===e.type?_:Yn(e.type,_),m);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ee(163))}}catch(y){Rt(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,me=n;break}me=e.return}return g=vm,vm=!1,g}function Zo(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&$d(e,t,s)}r=r.next}while(r!==i)}}function kc(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function qd(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function $_(n){var e=n.alternate;e!==null&&(n.alternate=null,$_(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[li],delete e[ga],delete e[Ud],delete e[ES],delete e[TS])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function q_(n){return n.tag===5||n.tag===3||n.tag===4}function xm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||q_(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Kd(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=ac));else if(i!==4&&(n=n.child,n!==null))for(Kd(n,e,t),n=n.sibling;n!==null;)Kd(n,e,t),n=n.sibling}function Zd(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Zd(n,e,t),n=n.sibling;n!==null;)Zd(n,e,t),n=n.sibling}var Wt=null,$n=!1;function ji(n,e,t){for(t=t.child;t!==null;)K_(n,e,t),t=t.sibling}function K_(n,e,t){if(di&&typeof di.onCommitFiberUnmount=="function")try{di.onCommitFiberUnmount(Pc,t)}catch{}switch(t.tag){case 5:Jt||Us(t,e);case 6:var i=Wt,r=$n;Wt=null,ji(n,e,t),Wt=i,$n=r,Wt!==null&&($n?(n=Wt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Wt.removeChild(t.stateNode));break;case 18:Wt!==null&&($n?(n=Wt,t=t.stateNode,n.nodeType===8?pu(n.parentNode,t):n.nodeType===1&&pu(n,t),da(n)):pu(Wt,t.stateNode));break;case 4:i=Wt,r=$n,Wt=t.stateNode.containerInfo,$n=!0,ji(n,e,t),Wt=i,$n=r;break;case 0:case 11:case 14:case 15:if(!Jt&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&$d(t,e,o),r=r.next}while(r!==i)}ji(n,e,t);break;case 1:if(!Jt&&(Us(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Rt(t,e,a)}ji(n,e,t);break;case 21:ji(n,e,t);break;case 22:t.mode&1?(Jt=(i=Jt)||t.memoizedState!==null,ji(n,e,t),Jt=i):ji(n,e,t);break;default:ji(n,e,t)}}function ym(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new zS),e.forEach(function(i){var r=KS.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Gn(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Wt=a.stateNode,$n=!1;break e;case 3:Wt=a.stateNode.containerInfo,$n=!0;break e;case 4:Wt=a.stateNode.containerInfo,$n=!0;break e}a=a.return}if(Wt===null)throw Error(ee(160));K_(s,o,r),Wt=null,$n=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Rt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Z_(e,n),e=e.sibling}function Z_(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Gn(e,n),si(n),i&4){try{Zo(3,n,n.return),kc(3,n)}catch(_){Rt(n,n.return,_)}try{Zo(5,n,n.return)}catch(_){Rt(n,n.return,_)}}break;case 1:Gn(e,n),si(n),i&512&&t!==null&&Us(t,t.return);break;case 5:if(Gn(e,n),si(n),i&512&&t!==null&&Us(t,t.return),n.flags&32){var r=n.stateNode;try{aa(r,"")}catch(_){Rt(n,n.return,_)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&x0(r,s),Sd(a,o);var c=Sd(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?T0(r,d):u==="dangerouslySetInnerHTML"?M0(r,d):u==="children"?aa(r,d):th(r,u,d,c)}switch(a){case"input":gd(r,s);break;case"textarea":y0(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ks(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?ks(r,!!s.multiple,s.defaultValue,!0):ks(r,!!s.multiple,s.multiple?[]:"",!1))}r[ga]=s}catch(_){Rt(n,n.return,_)}}break;case 6:if(Gn(e,n),si(n),i&4){if(n.stateNode===null)throw Error(ee(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(_){Rt(n,n.return,_)}}break;case 3:if(Gn(e,n),si(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{da(e.containerInfo)}catch(_){Rt(n,n.return,_)}break;case 4:Gn(e,n),si(n);break;case 13:Gn(e,n),si(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Ih=Nt())),i&4&&ym(n);break;case 22:if(u=t!==null&&t.memoizedState!==null,n.mode&1?(Jt=(c=Jt)||u,Gn(e,n),Jt=c):Gn(e,n),si(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!u&&n.mode&1)for(me=n,u=n.child;u!==null;){for(d=me=u;me!==null;){switch(f=me,p=f.child,f.tag){case 0:case 11:case 14:case 15:Zo(4,f,f.return);break;case 1:Us(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(_){Rt(i,t,_)}}break;case 5:Us(f,f.return);break;case 22:if(f.memoizedState!==null){Mm(d);continue}}p!==null?(p.return=f,me=p):Mm(d)}u=u.sibling}e:for(u=null,d=n;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=E0("display",o))}catch(_){Rt(n,n.return,_)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(_){Rt(n,n.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Gn(e,n),si(n),i&4&&ym(n);break;case 21:break;default:Gn(e,n),si(n)}}function si(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(q_(t)){var i=t;break e}t=t.return}throw Error(ee(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(aa(r,""),i.flags&=-33);var s=xm(n);Zd(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=xm(n);Kd(n,a,o);break;default:throw Error(ee(161))}}catch(l){Rt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function VS(n,e,t){me=n,Q_(n)}function Q_(n,e,t){for(var i=(n.mode&1)!==0;me!==null;){var r=me,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||tl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Jt;a=tl;var c=Jt;if(tl=o,(Jt=l)&&!c)for(me=r;me!==null;)o=me,l=o.child,o.tag===22&&o.memoizedState!==null?Em(r):l!==null?(l.return=o,me=l):Em(r);for(;s!==null;)me=s,Q_(s),s=s.sibling;me=r,tl=a,Jt=c}Sm(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,me=s):Sm(n)}}function Sm(n){for(;me!==null;){var e=me;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Jt||kc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Jt)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Yn(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&sm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}sm(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&da(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ee(163))}Jt||e.flags&512&&qd(e)}catch(f){Rt(e,e.return,f)}}if(e===n){me=null;break}if(t=e.sibling,t!==null){t.return=e.return,me=t;break}me=e.return}}function Mm(n){for(;me!==null;){var e=me;if(e===n){me=null;break}var t=e.sibling;if(t!==null){t.return=e.return,me=t;break}me=e.return}}function Em(n){for(;me!==null;){var e=me;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{kc(4,e)}catch(l){Rt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Rt(e,r,l)}}var s=e.return;try{qd(e)}catch(l){Rt(e,s,l)}break;case 5:var o=e.return;try{qd(e)}catch(l){Rt(e,o,l)}}}catch(l){Rt(e,e.return,l)}if(e===n){me=null;break}var a=e.sibling;if(a!==null){a.return=e.return,me=a;break}me=e.return}}var GS=Math.ceil,vc=Gi.ReactCurrentDispatcher,Lh=Gi.ReactCurrentOwner,zn=Gi.ReactCurrentBatchConfig,et=0,Vt=null,Dt=null,Yt=0,wn=0,Fs=Sr(0),Ut=0,Ma=null,Zr=0,Bc=0,Dh=0,Qo=null,pn=null,Ih=0,to=1/0,Ri=null,xc=!1,Qd=null,fr=null,nl=!1,sr=null,yc=0,Jo=0,Jd=null,zl=-1,Hl=0;function an(){return et&6?Nt():zl!==-1?zl:zl=Nt()}function hr(n){return n.mode&1?et&2&&Yt!==0?Yt&-Yt:AS.transition!==null?(Hl===0&&(Hl=F0()),Hl):(n=lt,n!==0||(n=window.event,n=n===void 0?16:G0(n.type)),n):1}function ei(n,e,t,i){if(50<Jo)throw Jo=0,Jd=null,Error(ee(185));Na(n,t,i),(!(et&2)||n!==Vt)&&(n===Vt&&(!(et&2)&&(Bc|=t),Ut===4&&nr(n,Yt)),xn(n,i),t===1&&et===0&&!(e.mode&1)&&(to=Nt()+500,Uc&&Mr()))}function xn(n,e){var t=n.callbackNode;Ay(n,e);var i=ic(n,n===Vt?Yt:0);if(i===0)t!==null&&Lp(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Lp(t),e===1)n.tag===0?wS(Tm.bind(null,n)):l_(Tm.bind(null,n)),SS(function(){!(et&6)&&Mr()}),t=null;else{switch(O0(i)){case 1:t=oh;break;case 4:t=I0;break;case 16:t=nc;break;case 536870912:t=U0;break;default:t=nc}t=ov(t,J_.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function J_(n,e){if(zl=-1,Hl=0,et&6)throw Error(ee(327));var t=n.callbackNode;if(Gs()&&n.callbackNode!==t)return null;var i=ic(n,n===Vt?Yt:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Sc(n,i);else{e=i;var r=et;et|=2;var s=tv();(Vt!==n||Yt!==e)&&(Ri=null,to=Nt()+500,Wr(n,e));do try{XS();break}catch(a){ev(n,a)}while(!0);xh(),vc.current=s,et=r,Dt!==null?e=0:(Vt=null,Yt=0,e=Ut)}if(e!==0){if(e===2&&(r=Ad(n),r!==0&&(i=r,e=ef(n,r))),e===1)throw t=Ma,Wr(n,0),nr(n,i),xn(n,Nt()),t;if(e===6)nr(n,i);else{if(r=n.current.alternate,!(i&30)&&!jS(r)&&(e=Sc(n,i),e===2&&(s=Ad(n),s!==0&&(i=s,e=ef(n,s))),e===1))throw t=Ma,Wr(n,0),nr(n,i),xn(n,Nt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ee(345));case 2:Ir(n,pn,Ri);break;case 3:if(nr(n,i),(i&130023424)===i&&(e=Ih+500-Nt(),10<e)){if(ic(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){an(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Id(Ir.bind(null,n,pn,Ri),e);break}Ir(n,pn,Ri);break;case 4:if(nr(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-Jn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Nt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*GS(i/1960))-i,10<i){n.timeoutHandle=Id(Ir.bind(null,n,pn,Ri),i);break}Ir(n,pn,Ri);break;case 5:Ir(n,pn,Ri);break;default:throw Error(ee(329))}}}return xn(n,Nt()),n.callbackNode===t?J_.bind(null,n):null}function ef(n,e){var t=Qo;return n.current.memoizedState.isDehydrated&&(Wr(n,e).flags|=256),n=Sc(n,e),n!==2&&(e=pn,pn=t,e!==null&&tf(e)),n}function tf(n){pn===null?pn=n:pn.push.apply(pn,n)}function jS(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!ni(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function nr(n,e){for(e&=~Dh,e&=~Bc,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Jn(e),i=1<<t;n[t]=-1,e&=~i}}function Tm(n){if(et&6)throw Error(ee(327));Gs();var e=ic(n,0);if(!(e&1))return xn(n,Nt()),null;var t=Sc(n,e);if(n.tag!==0&&t===2){var i=Ad(n);i!==0&&(e=i,t=ef(n,i))}if(t===1)throw t=Ma,Wr(n,0),nr(n,e),xn(n,Nt()),t;if(t===6)throw Error(ee(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Ir(n,pn,Ri),xn(n,Nt()),null}function Uh(n,e){var t=et;et|=1;try{return n(e)}finally{et=t,et===0&&(to=Nt()+500,Uc&&Mr())}}function Qr(n){sr!==null&&sr.tag===0&&!(et&6)&&Gs();var e=et;et|=1;var t=zn.transition,i=lt;try{if(zn.transition=null,lt=1,n)return n()}finally{lt=i,zn.transition=t,et=e,!(et&6)&&Mr()}}function Fh(){wn=Fs.current,_t(Fs)}function Wr(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,yS(t)),Dt!==null)for(t=Dt.return;t!==null;){var i=t;switch(gh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&lc();break;case 3:Js(),_t(_n),_t(en),wh();break;case 5:Th(i);break;case 4:Js();break;case 13:_t(Et);break;case 19:_t(Et);break;case 10:yh(i.type._context);break;case 22:case 23:Fh()}t=t.return}if(Vt=n,Dt=n=pr(n.current,null),Yt=wn=e,Ut=0,Ma=null,Dh=Bc=Zr=0,pn=Qo=null,zr!==null){for(e=0;e<zr.length;e++)if(t=zr[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}zr=null}return n}function ev(n,e){do{var t=Dt;try{if(xh(),Ol.current=_c,gc){for(var i=wt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}gc=!1}if(Kr=0,zt=It=wt=null,Ko=!1,xa=0,Lh.current=null,t===null||t.return===null){Ut=1,Ma=e,Dt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Yt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=dm(o);if(p!==null){p.flags&=-257,fm(p,o,a,s,e),p.mode&1&&um(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var _=new Set;_.add(l),e.updateQueue=_}else g.add(l);break e}else{if(!(e&1)){um(s,c,e),Oh();break e}l=Error(ee(426))}}else if(xt&&a.mode&1){var m=dm(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),fm(m,o,a,s,e),_h(eo(l,a));break e}}s=l=eo(l,a),Ut!==4&&(Ut=2),Qo===null?Qo=[s]:Qo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=O_(s,l,e);rm(s,h);break e;case 1:a=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(fr===null||!fr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=k_(s,a,e);rm(s,y);break e}}s=s.return}while(s!==null)}iv(t)}catch(R){e=R,Dt===t&&t!==null&&(Dt=t=t.return);continue}break}while(!0)}function tv(){var n=vc.current;return vc.current=_c,n===null?_c:n}function Oh(){(Ut===0||Ut===3||Ut===2)&&(Ut=4),Vt===null||!(Zr&268435455)&&!(Bc&268435455)||nr(Vt,Yt)}function Sc(n,e){var t=et;et|=2;var i=tv();(Vt!==n||Yt!==e)&&(Ri=null,Wr(n,e));do try{WS();break}catch(r){ev(n,r)}while(!0);if(xh(),et=t,vc.current=i,Dt!==null)throw Error(ee(261));return Vt=null,Yt=0,Ut}function WS(){for(;Dt!==null;)nv(Dt)}function XS(){for(;Dt!==null&&!_y();)nv(Dt)}function nv(n){var e=sv(n.alternate,n,wn);n.memoizedProps=n.pendingProps,e===null?iv(n):Dt=e,Lh.current=null}function iv(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=BS(t,e),t!==null){t.flags&=32767,Dt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Ut=6,Dt=null;return}}else if(t=kS(t,e,wn),t!==null){Dt=t;return}if(e=e.sibling,e!==null){Dt=e;return}Dt=e=n}while(e!==null);Ut===0&&(Ut=5)}function Ir(n,e,t){var i=lt,r=zn.transition;try{zn.transition=null,lt=1,YS(n,e,t,i)}finally{zn.transition=r,lt=i}return null}function YS(n,e,t,i){do Gs();while(sr!==null);if(et&6)throw Error(ee(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ee(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(by(n,s),n===Vt&&(Dt=Vt=null,Yt=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||nl||(nl=!0,ov(nc,function(){return Gs(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=zn.transition,zn.transition=null;var o=lt;lt=1;var a=et;et|=4,Lh.current=null,HS(n,t),Z_(t,n),hS(Ld),rc=!!Nd,Ld=Nd=null,n.current=t,VS(t),vy(),et=a,lt=o,zn.transition=s}else n.current=t;if(nl&&(nl=!1,sr=n,yc=r),s=n.pendingLanes,s===0&&(fr=null),Sy(t.stateNode),xn(n,Nt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(xc)throw xc=!1,n=Qd,Qd=null,n;return yc&1&&n.tag!==0&&Gs(),s=n.pendingLanes,s&1?n===Jd?Jo++:(Jo=0,Jd=n):Jo=0,Mr(),null}function Gs(){if(sr!==null){var n=O0(yc),e=zn.transition,t=lt;try{if(zn.transition=null,lt=16>n?16:n,sr===null)var i=!1;else{if(n=sr,sr=null,yc=0,et&6)throw Error(ee(331));var r=et;for(et|=4,me=n.current;me!==null;){var s=me,o=s.child;if(me.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(me=c;me!==null;){var u=me;switch(u.tag){case 0:case 11:case 15:Zo(8,u,s)}var d=u.child;if(d!==null)d.return=u,me=d;else for(;me!==null;){u=me;var f=u.sibling,p=u.return;if($_(u),u===c){me=null;break}if(f!==null){f.return=p,me=f;break}me=p}}}var g=s.alternate;if(g!==null){var _=g.child;if(_!==null){g.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}me=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,me=o;else e:for(;me!==null;){if(s=me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Zo(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,me=h;break e}me=s.return}}var v=n.current;for(me=v;me!==null;){o=me;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,me=x;else e:for(o=v;me!==null;){if(a=me,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:kc(9,a)}}catch(R){Rt(a,a.return,R)}if(a===o){me=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,me=y;break e}me=a.return}}if(et=r,Mr(),di&&typeof di.onPostCommitFiberRoot=="function")try{di.onPostCommitFiberRoot(Pc,n)}catch{}i=!0}return i}finally{lt=t,zn.transition=e}}return!1}function wm(n,e,t){e=eo(t,e),e=O_(n,e,1),n=dr(n,e,1),e=an(),n!==null&&(Na(n,1,e),xn(n,e))}function Rt(n,e,t){if(n.tag===3)wm(n,n,t);else for(;e!==null;){if(e.tag===3){wm(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(fr===null||!fr.has(i))){n=eo(t,n),n=k_(e,n,1),e=dr(e,n,1),n=an(),e!==null&&(Na(e,1,n),xn(e,n));break}}e=e.return}}function $S(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=an(),n.pingedLanes|=n.suspendedLanes&t,Vt===n&&(Yt&t)===t&&(Ut===4||Ut===3&&(Yt&130023424)===Yt&&500>Nt()-Ih?Wr(n,0):Dh|=t),xn(n,e)}function rv(n,e){e===0&&(n.mode&1?(e=Xa,Xa<<=1,!(Xa&130023424)&&(Xa=4194304)):e=1);var t=an();n=zi(n,e),n!==null&&(Na(n,e,t),xn(n,t))}function qS(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),rv(n,t)}function KS(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ee(314))}i!==null&&i.delete(e),rv(n,t)}var sv;sv=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||_n.current)mn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return mn=!1,OS(n,e,t);mn=!!(n.flags&131072)}else mn=!1,xt&&e.flags&1048576&&c_(e,dc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Bl(n,e),n=e.pendingProps;var r=Ks(e,en.current);Vs(e,t),r=bh(null,e,i,n,r,t);var s=Rh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,vn(i)?(s=!0,cc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Mh(e),r.updater=Oc,e.stateNode=r,r._reactInternals=e,Hd(e,i,n,t),e=jd(null,e,i,!0,s,t)):(e.tag=0,xt&&s&&mh(e),sn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Bl(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=QS(i),n=Yn(i,n),r){case 0:e=Gd(null,e,i,n,t);break e;case 1:e=mm(null,e,i,n,t);break e;case 11:e=hm(null,e,i,n,t);break e;case 14:e=pm(null,e,i,Yn(i.type,n),t);break e}throw Error(ee(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),Gd(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),mm(n,e,i,r,t);case 3:e:{if(V_(e),n===null)throw Error(ee(387));i=e.pendingProps,s=e.memoizedState,r=s.element,m_(n,e),pc(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=eo(Error(ee(423)),e),e=gm(n,e,i,t,r);break e}else if(i!==r){r=eo(Error(ee(424)),e),e=gm(n,e,i,t,r);break e}else for(An=ur(e.stateNode.containerInfo.firstChild),Rn=e,xt=!0,qn=null,t=h_(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Zs(),i===r){e=Hi(n,e,t);break e}sn(n,e,i,t)}e=e.child}return e;case 5:return g_(e),n===null&&kd(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Dd(i,r)?o=null:s!==null&&Dd(i,s)&&(e.flags|=32),H_(n,e),sn(n,e,o,t),e.child;case 6:return n===null&&kd(e),null;case 13:return G_(n,e,t);case 4:return Eh(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Qs(e,null,i,t):sn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),hm(n,e,i,r,t);case 7:return sn(n,e,e.pendingProps,t),e.child;case 8:return sn(n,e,e.pendingProps.children,t),e.child;case 12:return sn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ht(fc,i._currentValue),i._currentValue=o,s!==null)if(ni(s.value,o)){if(s.children===r.children&&!_n.current){e=Hi(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ui(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Bd(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ee(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Bd(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}sn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Vs(e,t),r=Hn(r),i=i(r),e.flags|=1,sn(n,e,i,t),e.child;case 14:return i=e.type,r=Yn(i,e.pendingProps),r=Yn(i.type,r),pm(n,e,i,r,t);case 15:return B_(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),Bl(n,e),e.tag=1,vn(i)?(n=!0,cc(e)):n=!1,Vs(e,t),F_(e,i,r),Hd(e,i,r,t),jd(null,e,i,!0,n,t);case 19:return j_(n,e,t);case 22:return z_(n,e,t)}throw Error(ee(156,e.tag))};function ov(n,e){return D0(n,e)}function ZS(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(n,e,t,i){return new ZS(n,e,t,i)}function kh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function QS(n){if(typeof n=="function")return kh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ih)return 11;if(n===rh)return 14}return 2}function pr(n,e){var t=n.alternate;return t===null?(t=kn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Vl(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")kh(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case As:return Xr(t.children,r,s,e);case nh:o=8,r|=8;break;case dd:return n=kn(12,t,e,r|2),n.elementType=dd,n.lanes=s,n;case fd:return n=kn(13,t,e,r),n.elementType=fd,n.lanes=s,n;case hd:return n=kn(19,t,e,r),n.elementType=hd,n.lanes=s,n;case g0:return zc(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case p0:o=10;break e;case m0:o=9;break e;case ih:o=11;break e;case rh:o=14;break e;case Ji:o=16,i=null;break e}throw Error(ee(130,n==null?n:typeof n,""))}return e=kn(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Xr(n,e,t,i){return n=kn(7,n,i,e),n.lanes=t,n}function zc(n,e,t,i){return n=kn(22,n,i,e),n.elementType=g0,n.lanes=t,n.stateNode={isHidden:!1},n}function Mu(n,e,t){return n=kn(6,n,null,e),n.lanes=t,n}function Eu(n,e,t){return e=kn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function JS(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=iu(0),this.expirationTimes=iu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=iu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Bh(n,e,t,i,r,s,o,a,l){return n=new JS(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=kn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mh(s),n}function eM(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ws,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function av(n){if(!n)return vr;n=n._reactInternals;e:{if(is(n)!==n||n.tag!==1)throw Error(ee(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(vn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ee(171))}if(n.tag===1){var t=n.type;if(vn(t))return a_(n,t,e)}return e}function lv(n,e,t,i,r,s,o,a,l){return n=Bh(t,i,!0,n,r,s,o,a,l),n.context=av(null),t=n.current,i=an(),r=hr(t),s=Ui(i,r),s.callback=e??null,dr(t,s,r),n.current.lanes=r,Na(n,r,i),xn(n,i),n}function Hc(n,e,t,i){var r=e.current,s=an(),o=hr(r);return t=av(t),e.context===null?e.context=t:e.pendingContext=t,e=Ui(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=dr(r,e,o),n!==null&&(ei(n,r,o,s),Fl(n,r,o)),o}function Mc(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Am(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function zh(n,e){Am(n,e),(n=n.alternate)&&Am(n,e)}function tM(){return null}var cv=typeof reportError=="function"?reportError:function(n){console.error(n)};function Hh(n){this._internalRoot=n}Vc.prototype.render=Hh.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ee(409));Hc(n,e,null,null)};Vc.prototype.unmount=Hh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Qr(function(){Hc(null,n,null,null)}),e[Bi]=null}};function Vc(n){this._internalRoot=n}Vc.prototype.unstable_scheduleHydration=function(n){if(n){var e=z0();n={blockedOn:null,target:n,priority:e};for(var t=0;t<tr.length&&e!==0&&e<tr[t].priority;t++);tr.splice(t,0,n),t===0&&V0(n)}};function Vh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Gc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function bm(){}function nM(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Mc(o);s.call(c)}}var o=lv(e,i,n,0,null,!1,!1,"",bm);return n._reactRootContainer=o,n[Bi]=o.current,pa(n.nodeType===8?n.parentNode:n),Qr(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Mc(l);a.call(c)}}var l=Bh(n,0,!1,null,null,!1,!1,"",bm);return n._reactRootContainer=l,n[Bi]=l.current,pa(n.nodeType===8?n.parentNode:n),Qr(function(){Hc(e,l,t,i)}),l}function jc(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Mc(o);a.call(l)}}Hc(e,o,n,r)}else o=nM(t,e,n,r,i);return Mc(o)}k0=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Ho(e.pendingLanes);t!==0&&(ah(e,t|1),xn(e,Nt()),!(et&6)&&(to=Nt()+500,Mr()))}break;case 13:Qr(function(){var i=zi(n,1);if(i!==null){var r=an();ei(i,n,1,r)}}),zh(n,1)}};lh=function(n){if(n.tag===13){var e=zi(n,134217728);if(e!==null){var t=an();ei(e,n,134217728,t)}zh(n,134217728)}};B0=function(n){if(n.tag===13){var e=hr(n),t=zi(n,e);if(t!==null){var i=an();ei(t,n,e,i)}zh(n,e)}};z0=function(){return lt};H0=function(n,e){var t=lt;try{return lt=n,e()}finally{lt=t}};Ed=function(n,e,t){switch(e){case"input":if(gd(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Ic(i);if(!r)throw Error(ee(90));v0(i),gd(i,r)}}}break;case"textarea":y0(n,t);break;case"select":e=t.value,e!=null&&ks(n,!!t.multiple,e,!1)}};b0=Uh;R0=Qr;var iM={usingClientEntryPoint:!1,Events:[Da,Ps,Ic,w0,A0,Uh]},Co={findFiberByHostInstance:Br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rM={bundleType:Co.bundleType,version:Co.version,rendererPackageName:Co.rendererPackageName,rendererConfig:Co.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Gi.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=N0(n),n===null?null:n.stateNode},findFiberByHostInstance:Co.findFiberByHostInstance||tM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var il=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!il.isDisabled&&il.supportsFiber)try{Pc=il.inject(rM),di=il}catch{}}Pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iM;Pn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vh(e))throw Error(ee(200));return eM(n,e,null,t)};Pn.createRoot=function(n,e){if(!Vh(n))throw Error(ee(299));var t=!1,i="",r=cv;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Bh(n,1,!1,null,null,t,!1,i,r),n[Bi]=e.current,pa(n.nodeType===8?n.parentNode:n),new Hh(e)};Pn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ee(188)):(n=Object.keys(n).join(","),Error(ee(268,n)));return n=N0(e),n=n===null?null:n.stateNode,n};Pn.flushSync=function(n){return Qr(n)};Pn.hydrate=function(n,e,t){if(!Gc(e))throw Error(ee(200));return jc(null,n,e,!0,t)};Pn.hydrateRoot=function(n,e,t){if(!Vh(n))throw Error(ee(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=cv;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=lv(e,null,n,1,t??null,r,!1,s,o),n[Bi]=e.current,pa(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Vc(e)};Pn.render=function(n,e,t){if(!Gc(e))throw Error(ee(200));return jc(null,n,e,!1,t)};Pn.unmountComponentAtNode=function(n){if(!Gc(n))throw Error(ee(40));return n._reactRootContainer?(Qr(function(){jc(null,null,n,!1,function(){n._reactRootContainer=null,n[Bi]=null})}),!0):!1};Pn.unstable_batchedUpdates=Uh;Pn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Gc(t))throw Error(ee(200));if(n==null||n._reactInternals===void 0)throw Error(ee(38));return jc(n,e,t,!1,i)};Pn.version="18.3.1-next-f1338f8080-20240426";function uv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(uv)}catch(n){console.error(n)}}uv(),u0.exports=Pn;var sM=u0.exports,dv,Rm=sM;dv=Rm.createRoot,Rm.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var oM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aM=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Ct=(n,e)=>{const t=We.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:a="",children:l,...c},u)=>We.createElement("svg",{ref:u,...oM,width:r,height:r,stroke:i,strokeWidth:o?Number(s)*24/Number(r):s,className:["lucide",`lucide-${aM(n)}`,a].join(" "),...c},[...e.map(([d,f])=>We.createElement(d,f)),...Array.isArray(l)?l:[l]]));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=Ct("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=Ct("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=Ct("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=Ct("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lM=Ct("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cM=Ct("Frame",[["line",{x1:"22",x2:"2",y1:"6",y2:"6",key:"15w7dq"}],["line",{x1:"22",x2:"2",y1:"18",y2:"18",key:"1ip48p"}],["line",{x1:"6",x2:"6",y1:"2",y2:"22",key:"a2lnyx"}],["line",{x1:"18",x2:"18",y1:"2",y2:"22",key:"8vb6jd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uM=Ct("Grid3x3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dM=Ct("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fM=Ct("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hM=Ct("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=Ct("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=Ct("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pM=Ct("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mM=Ct("Move",[["polyline",{points:"5 9 2 12 5 15",key:"1r5uj5"}],["polyline",{points:"9 5 12 2 15 5",key:"5v383o"}],["polyline",{points:"15 19 12 22 9 19",key:"g7qi8m"}],["polyline",{points:"19 9 22 12 19 15",key:"tpp73q"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=Ct("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gM=Ct("RotateCw",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=Ct("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=Ct("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _M=Ct("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vM=Ct("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xM=Ct("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yM=Ct("ZoomOut",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]),SM="/ceiling/assets/logo-SHRe-G6M.png",Ec="/ceiling/assets/bp40-OJync2AQ.jpg",xv="/ceiling/assets/bp40%20ch-VjNNeExM.jpg",yv="/ceiling/assets/stenovoy-JR2baCTF.jpg",Sv="/ceiling/assets/sten%201%20ch-CEBZDSMW.jpg",Mv="/ceiling/assets/sten%202%20ch-B2Ha_FBq.jpg",Ev="/ceiling/assets/sten%203%20ch-B00i3CPb.jpg",Tv="/ceiling/assets/razdelitel-9_MLrvVA.jpg",wv="/ceiling/assets/razdelitel%20ch-BEyP-_0d.jpg",Av="/ceiling/assets/universal-CCPXzns4.jpg",bv="/ceiling/assets/univers%20ch-CFZ0JjN_.jpg",Rv="/ceiling/assets/potoloch-BXSeolw_.jpg",Cv="/ceiling/assets/potoloch%20ch-9Gy1lg_H.jpg",Pv="/ceiling/assets/z-BlnkgLq2.jpg",Nv="/ceiling/assets/z%20ch-BfApx_ka.jpg",Wh="/ceiling/assets/b2-C4kg7KUA.jpg",js="/ceiling/assets/pk14%20ch-9Qbl8vAf.jpg",Yr="/ceiling/assets/cornices-BCZMq3Iu.jpg",Lv="/ceiling/assets/pk15-DEA0C84Y.jpg",Dv="/ceiling/assets/pk15%20ch-DgC_cER2.jpg",nf="/ceiling/assets/pk12-vDd9ZqzL.jpg",rf="/ceiling/assets/pk12%20ch-BVQhP2TD.jpg",Iv="/ceiling/assets/AM1-D9dwSWsS.jpg",Vr="/ceiling/assets/furnitures-Nq8ndB3l.jpg",MM="/ceiling/assets/light-lines-Df2PJJ6G.jpg",EM="/ceiling/assets/ceiling-BSRJwiq_.jpg",Tu=({onNavigate:n})=>{const[e,t]=We.useState(!1),i=r=>{if(n){n(r);return}const s=document.getElementById(r);s==null||s.scrollIntoView({behavior:"smooth"}),t(!1)};return M.jsx("header",{className:"fixed top-0 left-0 right-0 z-50 bg-[#1A1A1A]/95 backdrop-blur-sm border-b border-gray-800",children:M.jsxs("div",{className:"container mx-auto px-4",children:[M.jsxs("div",{className:"flex items-center justify-between h-20",children:[M.jsxs("div",{className:"flex items-center space-x-2",children:[M.jsx("img",{src:SM,alt:"Авангард Потолки",className:"w-8 h-7"}),M.jsx("span",{className:"text-white font-bold text-2xl",children:"Авангард Потолки"})]}),M.jsxs("nav",{className:"hidden md:flex space-x-10",children:[M.jsx("button",{onClick:()=>i("hero"),className:"text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-lg font-medium",children:"Главная"}),M.jsx("button",{onClick:()=>i("catalog"),className:"text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-lg font-medium",children:"Каталог"}),M.jsx("button",{onClick:()=>i("contacts"),className:"text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-lg font-medium",children:"Контакты"}),M.jsxs("button",{className:`group relative overflow-hidden bg-gradient-to-r from-sky-600 to-blue-700
              hover:from-sky-500 hover:to-blue-600 text-white px-4 py-2 rounded-2xl font-semibold text-lg
              transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-700/20`,onClick:()=>window.location.href="/",children:[M.jsx("span",{className:"relative z-10 flex items-center space-x-2",children:M.jsx("span",{children:'ООО "Авангард"'})}),M.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"})]})]}),M.jsx("button",{className:"md:hidden text-white hover:text-yellow-400 transition-colors p-2",onClick:()=>t(!e),children:e?M.jsx(vM,{size:28}):M.jsx(pM,{size:28})})]}),e&&M.jsx("div",{className:"md:hidden py-6 border-t border-gray-800",children:M.jsxs("nav",{className:"flex flex-col space-y-2",children:[M.jsx("button",{onClick:()=>i("hero"),className:"text-gray-300 hover:text-yellow-400 transition-colors duration-200 py-3 text-left text-lg font-medium",children:"Главная"}),M.jsx("button",{onClick:()=>i("catalog"),className:"text-gray-300 hover:text-yellow-400 transition-colors duration-200 py-3 text-left text-lg font-medium",children:"Каталог"}),M.jsx("button",{onClick:()=>i("contacts"),className:"text-gray-300 hover:text-yellow-400 transition-colors duration-200 py-3 text-left text-lg font-medium",children:"Контакты"})]})})]})})},TM=()=>{const[n,e]=We.useState(0),t=[{title:"ДЛЯ НАТЯЖНЫХ ПОТОЛКОВ",subtitle:"Алюминиевые профили",description:"Высококачественные карнизы, багеты, стеновые, комплектующие и т.д.",image:EM,video:"https://xbawwaakkvciyofymepf.supabase.co/storage/v1/object/public/slider-video/Hailuo_Video_Wide%20shot%20modern%20loft%20(exposed_396833602164224002.mp4"},{title:"ВЕСЬ ПРОФИЛЬ",subtitle:"от ООО Авангард",description:"",href:"/",video:"https://xbawwaakkvciyofymepf.supabase.co/storage/v1/object/public/slider-video/Hailuo_Video_CINEMATIC%20SHOT%20SEQUENCE__%201%20E_396470788518010889.mp4"}];We.useEffect(()=>{const o=setInterval(()=>{e(a=>(a+1)%t.length)},6500);return()=>clearInterval(o)},[]);const i=()=>{e(o=>(o+1)%t.length)},r=()=>{e(o=>(o-1+t.length)%t.length)},s=()=>{const o=document.getElementById("catalog");o==null||o.scrollIntoView({behavior:"smooth"})};return M.jsxs("section",{id:"hero",className:"relative min-h-screen bg-gradient-to-br from-[#1A1A1A] via-[#3A3A3A] to-[#1A1A1A] flex items-center overflow-hidden",children:[t[n].video&&M.jsxs("div",{className:"absolute inset-0 z-0",children:[t[n].image?M.jsx("img",{src:t[n].image,alt:t[n].subtitle}):M.jsx("video",{autoPlay:!0,muted:!0,loop:!0,playsInline:!0,className:"w-full h-full object-cover opacity-30",children:M.jsx("source",{src:t[n].video,type:"video/mp4"})},n),M.jsx("div",{className:"absolute inset-0 bg-black/40"})]}),M.jsx("div",{className:"absolute inset-0 opacity-10",children:M.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-transparent"})}),M.jsx("div",{className:"absolute inset-0 flex items-center z-10",children:M.jsx("div",{className:"container mx-auto px-4",children:M.jsx("div",{className:"max-w-4xl",children:M.jsxs("div",{className:"transition-all duration-500 ease-in-out",children:[M.jsx("div",{className:"text-yellow-400 text-sm font-medium mb-2 uppercase tracking-wider",children:t[n].subtitle}),M.jsx("h1",{className:"text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight",children:t[n].title}),M.jsx("p",{className:"text-gray-300 text-lg md:text-xl mb-8 max-w-2xl leading-relaxed",children:t[n].description}),M.jsxs("button",{onClick:t[n].href?()=>window.location.href=t[n].href:s,className:"bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg flex items-center space-x-2 group",children:[M.jsx("span",{children:"Посмотреть примеры"}),M.jsx(hv,{className:"w-5 h-5 group-hover:translate-x-1 transition-transform"})]})]})})})}),M.jsx("button",{onClick:r,className:"absolute left-2 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-yellow-400 transition-colors duration-200 z-20",children:M.jsx(Gh,{size:32})}),M.jsx("button",{onClick:i,className:"absolute right-2 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-yellow-400 transition-colors duration-200 z-20",children:M.jsx(jh,{size:32})}),M.jsx("div",{className:"absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20",children:t.map((o,a)=>M.jsx("button",{onClick:()=>e(a),className:`w-3 h-3 rounded-full transition-all duration-200 ${a===n?"bg-yellow-400 scale-125":"bg-white/30 hover:bg-white/60"}`},a))}),M.jsx("div",{className:"absolute bottom-0 left-0 w-full h-1 bg-gray-800",children:M.jsx("div",{className:"h-full bg-yellow-400 transition-all duration-300",style:{width:`${(n+1)/t.length*100}%`}})})]})},wM=({onCategoryClick:n})=>{const e=[{id:"standard",title:"Стандартные профили",subtitle:"Для натяжных потолков",description:"Классические алюминиевые профили для создания натяжных потолков",image:Ec,icon:dM,featured:!0,buttonText:"Смотреть каталог"},{id:"cornices",title:"Карнизы",subtitle:"Для штор и портьер",description:"Алюминиевые карнизы различных конфигураций",image:Yr,icon:cM,featured:!1,buttonText:"Смотреть каталог"},{id:"contour",title:"Комплектующие",subtitle:"Крепеж и аксессуары",description:"Соединители, заглушки, крепежные элементы",image:Vr,icon:fM,featured:!1,buttonText:"Смотреть каталог"}];return M.jsx("section",{id:"catalog",className:"py-20 bg-[#1A1A1A]",children:M.jsxs("div",{className:"container mx-auto px-4",children:[M.jsxs("div",{className:"text-center mb-16",children:[M.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-white mb-4",children:"Каталог продукции"}),M.jsx("p",{className:"text-gray-300 text-lg max-w-2xl mx-auto",children:"Предлагаем широкий ассортимент алюминиевых профилей для различных задач и интерьерных решений"})]}),M.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto",children:[M.jsx("div",{className:"grid grid-rows-2 gap-4 h-[600px]",children:e.slice(1).map(t=>(t.icon,M.jsxs("div",{className:"group relative bg-[#3A3A3A] rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl cursor-pointer h-full",onClick:()=>n(t.id),children:[M.jsxs("div",{className:"relative h-full overflow-hidden",children:[M.jsx("img",{src:t.image,alt:t.title,className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"}),M.jsx("div",{className:"absolute inset-0 bg-black/40"})]}),M.jsxs("div",{className:"absolute inset-0 p-4 flex flex-col justify-between",children:[M.jsxs("div",{children:[M.jsx("div",{className:"text-xs text-gray-300 mb-1 uppercase tracking-wider",children:t.subtitle}),M.jsx("h3",{className:"text-lg font-bold text-white leading-tight",children:t.title})]}),M.jsx("div",{children:M.jsx("button",{className:"bg-white/20 hover:bg-yellow-400 hover:text-black text-white px-4 py-2 rounded text-sm font-medium transition-all duration-200 border border-white/30 hover:border-yellow-400",children:t.buttonText})})]}),M.jsx("div",{className:"absolute inset-0 bg-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"})]},t.id)))}),M.jsx("div",{className:"relative h-[600px]",children:(()=>{const t=e[0];return t.icon,M.jsxs("div",{className:"group relative bg-[#3A3A3A] rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl h-full cursor-pointer",onClick:()=>n(t.id),children:[M.jsxs("div",{className:"relative h-full overflow-hidden",children:[M.jsx("img",{src:t.image,alt:t.title,className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"}),M.jsx("div",{className:"absolute inset-0 bg-black/40"})]}),M.jsxs("div",{className:"absolute inset-0 p-8 flex flex-col justify-between",children:[M.jsxs("div",{children:[M.jsx("div",{className:"text-sm text-gray-300 mb-2 uppercase tracking-wider",children:t.subtitle}),M.jsx("h3",{className:"text-3xl font-bold text-white leading-tight mb-4",children:t.title}),M.jsx("p",{className:"text-gray-300 text-base leading-relaxed max-w-md",children:t.description})]}),M.jsx("div",{children:M.jsxs("button",{className:"bg-white/20 hover:bg-yellow-400 hover:text-black text-white px-6 py-3 rounded text-base font-medium transition-all duration-200 border border-white/30 hover:border-yellow-400 flex items-center space-x-2 group/btn",children:[M.jsx("span",{children:t.buttonText}),M.jsx(hv,{className:"w-5 h-5 group-hover/btn:translate-x-1 transition-transform"})]})})]}),M.jsx("div",{className:"absolute inset-0 bg-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"})]})})()})]})]})})},AM=({id:n,name:e,images:t,price:i,description:r,rating:s,inStock:o,onProductClick:a,onOrderClick:l})=>{const[c,u]=Tt.useState(0),d=g=>{g.stopPropagation(),u(_=>(_+1)%t.length)},f=g=>{g.stopPropagation(),u(_=>(_-1+t.length)%t.length)},p=(g,_)=>{g.stopPropagation(),u(_)};return M.jsxs("div",{className:"bg-[#3A3A3A] rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-xl group border border-gray-700 hover:border-yellow-400/50 cursor-pointer",onClick:()=>a(n),children:[M.jsxs("div",{className:"relative h-48 overflow-hidden group/slider",children:[M.jsx("img",{src:t[c],alt:e,className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"}),t.length>1&&M.jsxs(M.Fragment,{children:[M.jsx("button",{onClick:f,className:"absolute left-2 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-yellow-400 transition-colors duration-200 bg-black/30 rounded-full p-1 opacity-0 group-hover/slider:opacity-100",children:M.jsx(Gh,{size:20})}),M.jsx("button",{onClick:d,className:"absolute right-2 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-yellow-400 transition-colors duration-200 bg-black/30 rounded-full p-1 opacity-0 group-hover/slider:opacity-100",children:M.jsx(jh,{size:20})})]}),t.length>1&&M.jsx("div",{className:"absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-200",children:t.map((g,_)=>M.jsx("button",{onClick:m=>p(m,_),className:`w-2 h-2 rounded-full transition-all duration-200 ${_===c?"bg-yellow-400 scale-125":"bg-white/50 hover:bg-white/80"}`},_))}),!o&&M.jsx("div",{className:"absolute inset-0 bg-black/50 flex items-center justify-center",children:M.jsx("span",{className:"bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium",children:"Нет в наличии"})})]}),M.jsxs("div",{className:"p-4",children:[M.jsx("h3",{className:"text-white font-semibold text-lg mb-2 line-clamp-2 group-hover:text-yellow-400 transition-colors",children:e}),M.jsx("p",{className:"text-gray-400 text-sm mb-3 line-clamp-2",children:r}),M.jsxs("div",{className:"flex items-center space-x-1 mb-3",children:[[...Array(5)].map((g,_)=>M.jsx(vv,{size:14,className:_<s?"text-yellow-400 fill-current":"text-gray-600"},_)),M.jsxs("span",{className:"text-gray-400 text-sm ml-2",children:["(",s,"/5)"]})]}),M.jsxs("div",{className:"flex items-center justify-between",children:[M.jsx("div",{className:"text-yellow-400 font-bold text-lg",children:i}),M.jsxs("button",{disabled:!o,onClick:g=>{g.stopPropagation(),l()},className:"bg-yellow-400 hover:bg-yellow-500 disabled:bg-gray-600 disabled:cursor-not-allowed text-black px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 flex items-center space-x-2 group/btn",children:[M.jsx(_v,{size:16}),M.jsx("span",{className:"hidden sm:inline",children:"Заказать"})]})]})]})]})},bM=({categoryId:n,categoryTitle:e,onBack:t,onCategoryChange:i,onProductClick:r,onOrderClick:s})=>{const[o,a]=We.useState("grid");We.useEffect(()=>{window.scrollTo(0,0)},[]);const l=[{id:"standard",title:"Стандартные профили",count:6},{id:"cornices",title:"Карнизы",count:6},{id:"contour",title:"Комплектующие",count:4}],u=(d=>({standard:[{id:"std-1",name:"Брус 40х40",model3d:"/bp40.glb",images:[Ec,xv,"https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=400"],price:"от 140 ₽/м",description:"Несущий брус для потолочного крепления натяжных потолков при невозможности монтажа к стенам (керамогранит, зеркала и т.д.), оснащённый гарпунной системой фиксации полотна и креплением под гвоздик",rating:5,inStock:!0},{id:"std-2",name:"Профиль Стенвой",model3d:"/sten.glb",images:[yv,Sv,Mv,Ev],price:"от 140 ₽/м",description:"Алюминиевый багет крепится к стенам по периметру помещения для надежной фиксации и натяжения полотна, обеспечивая четкий край и эстетичный вид потолка",rating:5,inStock:!0},{id:"std-3",name:"Разделитель",model3d:"/razdel.glb",images:[Tv,wv],price:"от 120 ₽/м",description:"Профиль для соединения двух полотен натяжного потолка в больших помещениях или многоуровневых конструкциях, оснащённый гарпунной системой крепления и пазом для декоративной маскировочной вставки",rating:4,inStock:!0},{id:"std-4",name:"Профиль Универсальный",model3d:"/univers.glb",images:[Av,bv],price:"от 77 ₽/м",description:"Премиум профиль с улучшенными характеристиками",rating:5,inStock:!1},{id:"std-5",name:"Профиль Потолочный",model3d:"/potoloch.glb",images:[Rv,Cv],price:"от 55 ₽/м",description:"Универсальный профиль для любых задач",rating:4,inStock:!0},{id:"std-6",name:"Отбойник Z",model3d:"/z.glb",images:[Pv,Nv],price:"от 47 ₽/м",description:"Экономичный вариант для бюджетных проектов",rating:4,inStock:!0}],cornices:[{id:"b2",name:"Карниз B2",model3d:"/b2.glb",images:[Wh,js,"https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400"],price:"от 750 ₽/м",description:"Стандартный карниз для штор и портьер",rating:5,inStock:!0},{id:"cor-1",name:"Карниз ПК-14 стандартный",model3d:"/b2.glb",images:[Yr,js,"https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400"],price:"от 560 ₽/м",description:"Стандартный карниз для штор и портьер",rating:5,inStock:!0},{id:"cor-2",name:"Карниз ПК-14 облегченныйй",images:[Yr,js,"https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400"],price:"от 520 ₽/м",description:"Двухрядный карниз для тюля и штор",rating:5,inStock:!0},{id:"cor-3",name:"Карниз ПК-15",images:[Lv,Dv],price:"от 340 ₽/м",description:"Компактный карниз для небольших окон",rating:5,inStock:!0},{id:"cor-4",name:"Карниз ПК-12",images:[nf,rf,"https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400"],price:"от 380 ₽/м",description:"Премиум карниз с улучшенным дизайном",rating:5,inStock:!1},{id:"cor-5",name:"Карниз B-1 однорядный",images:[Iv,Yr],price:"от 380 ₽/м",description:"Угловой карниз для сложных конфигураций",rating:4,inStock:!0}],contour:[{id:"cont-1",name:"L-вставка для карнизов",images:["https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400","https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=400"],price:"45 ₽/шт",description:"Угловой соединитель для профилей 90 градусов",rating:5,inStock:!0},{id:"cont-2",name:"Заглушки торцевые ПК-14",images:["https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400",Vr],price:"25 ₽/шт",description:"Торцевая заглушка для профилей 40мм",rating:5,inStock:!0},{id:"cont-3",name:"Заглушки торцевые B-1",images:["https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400"],price:"15 ₽/шт",description:"Настенный крепеж для монтажа профилей",rating:4,inStock:!0},{id:"cont-4",name:"Бандажная лента",images:["https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400",Vr,"https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=400"],price:"35 ₽/шт",description:"Прямой соединитель для стыковки профилей",rating:5,inStock:!1}]})[d]||[])(n);return M.jsx("div",{className:"min-h-screen bg-[#1A1A1A] pt-16",children:M.jsx("div",{className:"container mx-auto px-4 py-8",children:M.jsxs("div",{className:"flex flex-col lg:flex-row gap-8",children:[M.jsx("div",{className:"lg:w-64 flex-shrink-0",children:M.jsxs("div",{className:"bg-[#3A3A3A] rounded-lg p-6 sticky top-24",children:[M.jsxs("div",{className:"flex items-center justify-between mb-6",children:[M.jsx("h3",{className:"text-white font-semibold text-lg",children:"Категории"}),M.jsx("button",{onClick:t,className:"text-gray-400 hover:text-yellow-400 transition-colors",children:M.jsx(fv,{size:20})})]}),M.jsx("nav",{className:"space-y-2",children:l.map(d=>M.jsxs("button",{onClick:()=>i(d.id),className:`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center justify-between group ${n===d.id?"bg-yellow-400 text-black font-medium":"text-gray-300 hover:bg-[#1A1A1A] hover:text-yellow-400"}`,children:[M.jsx("span",{children:d.title}),M.jsx("span",{className:`text-xs px-2 py-1 rounded-full ${n===d.id?"bg-black/20 text-black":"bg-gray-600 text-gray-300 group-hover:bg-yellow-400/20 group-hover:text-yellow-400"}`,children:d.count})]},d.id))})]})}),M.jsxs("div",{className:"flex-1",children:[M.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8",children:[M.jsxs("div",{children:[M.jsx("h1",{className:"text-3xl font-bold text-white mb-2",children:e}),M.jsxs("p",{className:"text-gray-400",children:["Найдено ",u.length," товаров"]})]}),M.jsx("div",{className:"flex items-center space-x-4 mt-4 sm:mt-0",children:M.jsxs("div",{className:"flex items-center space-x-2 bg-[#3A3A3A] rounded-lg p-1",children:[M.jsx("button",{onClick:()=>a("grid"),className:`p-2 rounded transition-colors ${o==="grid"?"bg-yellow-400 text-black":"text-gray-400 hover:text-white"}`,children:M.jsx(uM,{size:16})}),M.jsx("button",{onClick:()=>a("list"),className:`p-2 rounded transition-colors ${o==="list"?"bg-yellow-400 text-black":"text-gray-400 hover:text-white"}`,children:M.jsx(hM,{size:16})})]})})]}),M.jsx("div",{className:`grid gap-6 ${o==="grid"?"grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4":"grid-cols-1"}`,children:u.map(d=>M.jsx(AM,{...d,onProductClick:r,onOrderClick:s},d.id))})]})]})})})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xh="179",RM=0,Cm=1,CM=2,Uv=1,Fv=2,bi=3,Vi=0,yn=1,ci=2,mr=0,Ws=1,Pm=2,Nm=3,Lm=4,PM=5,Or=100,NM=101,LM=102,DM=103,IM=104,UM=200,FM=201,OM=202,kM=203,sf=204,of=205,BM=206,zM=207,HM=208,VM=209,GM=210,jM=211,WM=212,XM=213,YM=214,af=0,lf=1,cf=2,no=3,uf=4,df=5,ff=6,hf=7,Ov=0,$M=1,qM=2,gr=0,KM=1,ZM=2,QM=3,JM=4,eE=5,tE=6,nE=7,Dm="attached",iE="detached",kv=300,io=301,ro=302,pf=303,mf=304,Wc=306,so=1e3,or=1001,Tc=1002,ln=1003,Bv=1004,Go=1005,bn=1006,Gl=1007,Di=1008,pi=1009,zv=1010,Hv=1011,Ea=1012,Yh=1013,Jr=1014,Qn=1015,Ua=1016,$h=1017,qh=1018,Ta=1020,Vv=35902,Gv=1021,jv=1022,Bn=1023,wa=1026,Aa=1027,Kh=1028,Zh=1029,Wv=1030,Qh=1031,Jh=1033,jl=33776,Wl=33777,Xl=33778,Yl=33779,gf=35840,_f=35841,vf=35842,xf=35843,yf=36196,Sf=37492,Mf=37496,Ef=37808,Tf=37809,wf=37810,Af=37811,bf=37812,Rf=37813,Cf=37814,Pf=37815,Nf=37816,Lf=37817,Df=37818,If=37819,Uf=37820,Ff=37821,$l=36492,Of=36494,kf=36495,Xv=36283,Bf=36284,zf=36285,Hf=36286,ba=2300,Ra=2301,wu=2302,Im=2400,Um=2401,Fm=2402,rE=2500,sE=0,Yv=1,Vf=2,oE=3200,aE=3201,$v=0,lE=1,ir="",Xt="srgb",un="srgb-linear",wc="linear",ut="srgb",ls=7680,Om=519,cE=512,uE=513,dE=514,qv=515,fE=516,hE=517,pE=518,mE=519,Gf=35044,km="300 es",ui=2e3,Ac=2001;class mo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Bm=1234567;const ea=Math.PI/180,oo=180/Math.PI;function ti(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zt[n&255]+Zt[n>>8&255]+Zt[n>>16&255]+Zt[n>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[t&63|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]).toLowerCase()}function Xe(n,e,t){return Math.max(e,Math.min(t,n))}function ep(n,e){return(n%e+e)%e}function gE(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function _E(n,e,t){return n!==e?(t-n)/(e-n):0}function ta(n,e,t){return(1-t)*n+t*e}function vE(n,e,t,i){return ta(n,e,1-Math.exp(-t*i))}function xE(n,e=1){return e-Math.abs(ep(n,e*2)-e)}function yE(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function SE(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function ME(n,e){return n+Math.floor(Math.random()*(e-n+1))}function EE(n,e){return n+Math.random()*(e-n)}function TE(n){return n*(.5-Math.random())}function wE(n){n!==void 0&&(Bm=n);let e=Bm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function AE(n){return n*ea}function bE(n){return n*oo}function RE(n){return(n&n-1)===0&&n!==0}function CE(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function PE(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function NE(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),d=s((e-i)/2),f=o((e-i)/2),p=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*d,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Kn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ot(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const LE={DEG2RAD:ea,RAD2DEG:oo,generateUUID:ti,clamp:Xe,euclideanModulo:ep,mapLinear:gE,inverseLerp:_E,lerp:ta,damp:vE,pingpong:xE,smoothstep:yE,smootherstep:SE,randInt:ME,randFloat:EE,randFloatSpread:TE,seededRandom:wE,degToRad:AE,radToDeg:bE,isPowerOfTwo:RE,ceilPowerOfTwo:CE,floorPowerOfTwo:PE,setQuaternionFromProperEuler:NE,normalize:ot,denormalize:Kn};class Ke{constructor(e=0,t=0){Ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Er{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const f=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==f||c!==p||u!==g){let m=1-a;const h=l*f+c*p+u*g+d*_,v=h>=0?1:-1,x=1-h*h;if(x>Number.EPSILON){const R=Math.sqrt(x),b=Math.atan2(R,h*v);m=Math.sin(m*b)/R,a=Math.sin(a*b)/R}const y=a*v;if(l=l*m+f*y,c=c*m+p*y,u=u*m+g*y,d=d*m+_*y,m===1-a){const R=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=R,c*=R,u*=R,d*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*d+l*p-c*f,e[t+1]=l*g+u*f+c*d-a*p,e[t+2]=c*g+u*p+a*f-l*d,e[t+3]=u*g-a*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),f=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d-f*p*g;break;case"YXZ":this._x=f*u*d+c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d+f*p*g;break;case"ZXY":this._x=f*u*d-c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d-f*p*g;break;case"ZYX":this._x=f*u*d-c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d+f*p*g;break;case"YZX":this._x=f*u*d+c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d-f*p*g;break;case"XZY":this._x=f*u*d-c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Au.copy(this).projectOnVector(e),this.sub(Au)}reflect(e){return this.sub(Au.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Au=new F,zm=new Er;class Be{constructor(e,t,i,r,s,o,a,l,c){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],p=i[5],g=i[8],_=r[0],m=r[3],h=r[6],v=r[1],x=r[4],y=r[7],R=r[2],b=r[5],A=r[8];return s[0]=o*_+a*v+l*R,s[3]=o*m+a*x+l*b,s[6]=o*h+a*y+l*A,s[1]=c*_+u*v+d*R,s[4]=c*m+u*x+d*b,s[7]=c*h+u*y+d*A,s[2]=f*_+p*v+g*R,s[5]=f*m+p*x+g*b,s[8]=f*h+p*y+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,p=c*s-o*l,g=t*d+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=f*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=p*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(bu.makeScale(e,t)),this}rotate(e){return this.premultiply(bu.makeRotation(-e)),this}translate(e,t){return this.premultiply(bu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const bu=new Be;function Kv(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ca(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function DE(){const n=Ca("canvas");return n.style.display="block",n}const Hm={};function Xs(n){n in Hm||(Hm[n]=!0,console.warn(n))}function IE(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Vm=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gm=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function UE(){const n={enabled:!0,workingColorSpace:un,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ut&&(r.r=Fi(r.r),r.g=Fi(r.g),r.b=Fi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ut&&(r.r=Ys(r.r),r.g=Ys(r.g),r.b=Ys(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ir?wc:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Xs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Xs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[un]:{primaries:e,whitePoint:i,transfer:wc,toXYZ:Vm,fromXYZ:Gm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Xt},outputColorSpaceConfig:{drawingBufferColorSpace:Xt}},[Xt]:{primaries:e,whitePoint:i,transfer:ut,toXYZ:Vm,fromXYZ:Gm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Xt}}}),n}const Qe=UE();function Fi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ys(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let cs;class FE{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{cs===void 0&&(cs=Ca("canvas")),cs.width=e.width,cs.height=e.height;const r=cs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=cs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ca("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Fi(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Fi(t[i]/255)*255):t[i]=Fi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let OE=0;class tp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:OE++}),this.uuid=ti(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ru(r[o].image)):s.push(Ru(r[o]))}else s=Ru(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ru(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?FE.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kE=0;const Cu=new F;class Gt extends mo{constructor(e=Gt.DEFAULT_IMAGE,t=Gt.DEFAULT_MAPPING,i=or,r=or,s=bn,o=Di,a=Bn,l=pi,c=Gt.DEFAULT_ANISOTROPY,u=ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kE++}),this.uuid=ti(),this.name="",this.source=new tp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Cu).x}get height(){return this.source.getSize(Cu).y}get depth(){return this.source.getSize(Cu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case so:e.x=e.x-Math.floor(e.x);break;case or:e.x=e.x<0?0:1;break;case Tc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case so:e.y=e.y-Math.floor(e.y);break;case or:e.y=e.y<0?0:1;break;case Tc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gt.DEFAULT_IMAGE=null;Gt.DEFAULT_MAPPING=kv;Gt.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,t=0,i=0,r=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,y=(p+1)/2,R=(h+1)/2,b=(u+f)/4,A=(d+_)/4,P=(g+m)/4;return x>y&&x>R?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=b/i,s=A/i):y>R?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=b/r,s=P/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=A/s,r=P/s),this.set(i,r,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-_)/v,this.z=(f-u)/v,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this.w=Xe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this.w=Xe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class BE extends mo{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new Gt(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:bn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new tp(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class es extends BE{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Zv extends Gt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class zE extends Gt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gi{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,jn):jn.fromBufferAttribute(s,o),jn.applyMatrix4(e.matrixWorld),this.expandByPoint(jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),rl.copy(i.boundingBox)),rl.applyMatrix4(e.matrixWorld),this.union(rl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,jn),jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Po),sl.subVectors(this.max,Po),us.subVectors(e.a,Po),ds.subVectors(e.b,Po),fs.subVectors(e.c,Po),Wi.subVectors(ds,us),Xi.subVectors(fs,ds),Ar.subVectors(us,fs);let t=[0,-Wi.z,Wi.y,0,-Xi.z,Xi.y,0,-Ar.z,Ar.y,Wi.z,0,-Wi.x,Xi.z,0,-Xi.x,Ar.z,0,-Ar.x,-Wi.y,Wi.x,0,-Xi.y,Xi.x,0,-Ar.y,Ar.x,0];return!Pu(t,us,ds,fs,sl)||(t=[1,0,0,0,1,0,0,0,1],!Pu(t,us,ds,fs,sl))?!1:(ol.crossVectors(Wi,Xi),t=[ol.x,ol.y,ol.z],Pu(t,us,ds,fs,sl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Si=[new F,new F,new F,new F,new F,new F,new F,new F],jn=new F,rl=new gi,us=new F,ds=new F,fs=new F,Wi=new F,Xi=new F,Ar=new F,Po=new F,sl=new F,ol=new F,br=new F;function Pu(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){br.fromArray(n,s);const a=r.x*Math.abs(br.x)+r.y*Math.abs(br.y)+r.z*Math.abs(br.z),l=e.dot(br),c=t.dot(br),u=i.dot(br);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const HE=new gi,No=new F,Nu=new F;class _i{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):HE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;No.subVectors(e,this.center);const t=No.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(No,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(No.copy(e.center).add(Nu)),this.expandByPoint(No.copy(e.center).sub(Nu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Mi=new F,Lu=new F,al=new F,Yi=new F,Du=new F,ll=new F,Iu=new F;class Xc{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mi.copy(this.origin).addScaledVector(this.direction,t),Mi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Lu.copy(e).add(t).multiplyScalar(.5),al.copy(t).sub(e).normalize(),Yi.copy(this.origin).sub(Lu);const s=e.distanceTo(t)*.5,o=-this.direction.dot(al),a=Yi.dot(this.direction),l=-Yi.dot(al),c=Yi.lengthSq(),u=Math.abs(1-o*o);let d,f,p,g;if(u>0)if(d=o*l-a,f=o*a-l,g=s*u,d>=0)if(f>=-g)if(f<=g){const _=1/u;d*=_,f*=_,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Lu).addScaledVector(al,f),p}intersectSphere(e,t){Mi.subVectors(e.center,this.origin);const i=Mi.dot(this.direction),r=Mi.dot(Mi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Mi)!==null}intersectTriangle(e,t,i,r,s){Du.subVectors(t,e),ll.subVectors(i,e),Iu.crossVectors(Du,ll);let o=this.direction.dot(Iu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yi.subVectors(this.origin,e);const l=a*this.direction.dot(ll.crossVectors(Yi,ll));if(l<0)return null;const c=a*this.direction.dot(Du.cross(Yi));if(c<0||l+c>o)return null;const u=-a*Yi.dot(Iu);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class He{constructor(e,t,i,r,s,o,a,l,c,u,d,f,p,g,_,m){He.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,d,f,p,g,_,m)}set(e,t,i,r,s,o,a,l,c,u,d,f,p,g,_,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=g,h[11]=_,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new He().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/hs.setFromMatrixColumn(e,0).length(),s=1/hs.setFromMatrixColumn(e,1).length(),o=1/hs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*d,g=a*u,_=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*d,g=c*u,_=c*d;t[0]=f+_*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*d,g=c*u,_=c*d;t[0]=f-_*a,t[4]=-o*d,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*d,g=a*u,_=a*d;t[0]=l*u,t[4]=g*c-p,t[8]=f*c+_,t[1]=l*d,t[5]=_*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-f*d,t[8]=g*d+p,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*d+g,t[10]=f-_*d}else if(e.order==="XZY"){const f=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+_,t[5]=o*u,t[9]=p*d-g,t[2]=g*d-p,t[6]=a*u,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(VE,e,GE)}lookAt(e,t,i){const r=this.elements;return En.subVectors(e,t),En.lengthSq()===0&&(En.z=1),En.normalize(),$i.crossVectors(i,En),$i.lengthSq()===0&&(Math.abs(i.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),$i.crossVectors(i,En)),$i.normalize(),cl.crossVectors(En,$i),r[0]=$i.x,r[4]=cl.x,r[8]=En.x,r[1]=$i.y,r[5]=cl.y,r[9]=En.y,r[2]=$i.z,r[6]=cl.z,r[10]=En.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],p=i[13],g=i[2],_=i[6],m=i[10],h=i[14],v=i[3],x=i[7],y=i[11],R=i[15],b=r[0],A=r[4],P=r[8],w=r[12],E=r[1],N=r[5],V=r[9],H=r[13],W=r[2],Z=r[6],$=r[10],Q=r[14],D=r[3],X=r[7],q=r[11],ce=r[15];return s[0]=o*b+a*E+l*W+c*D,s[4]=o*A+a*N+l*Z+c*X,s[8]=o*P+a*V+l*$+c*q,s[12]=o*w+a*H+l*Q+c*ce,s[1]=u*b+d*E+f*W+p*D,s[5]=u*A+d*N+f*Z+p*X,s[9]=u*P+d*V+f*$+p*q,s[13]=u*w+d*H+f*Q+p*ce,s[2]=g*b+_*E+m*W+h*D,s[6]=g*A+_*N+m*Z+h*X,s[10]=g*P+_*V+m*$+h*q,s[14]=g*w+_*H+m*Q+h*ce,s[3]=v*b+x*E+y*W+R*D,s[7]=v*A+x*N+y*Z+R*X,s[11]=v*P+x*V+y*$+R*q,s[15]=v*w+x*H+y*Q+R*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],p=e[14],g=e[3],_=e[7],m=e[11],h=e[15];return g*(+s*l*d-r*c*d-s*a*f+i*c*f+r*a*p-i*l*p)+_*(+t*l*p-t*c*f+s*o*f-r*o*p+r*c*u-s*l*u)+m*(+t*c*d-t*a*p-s*o*d+i*o*p+s*a*u-i*c*u)+h*(-r*a*u-t*l*d+t*a*f+r*o*d-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],p=e[11],g=e[12],_=e[13],m=e[14],h=e[15],v=d*m*c-_*f*c+_*l*p-a*m*p-d*l*h+a*f*h,x=g*f*c-u*m*c-g*l*p+o*m*p+u*l*h-o*f*h,y=u*_*c-g*d*c+g*a*p-o*_*p-u*a*h+o*d*h,R=g*d*l-u*_*l-g*a*f+o*_*f+u*a*m-o*d*m,b=t*v+i*x+r*y+s*R;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/b;return e[0]=v*A,e[1]=(_*f*s-d*m*s-_*r*p+i*m*p+d*r*h-i*f*h)*A,e[2]=(a*m*s-_*l*s+_*r*c-i*m*c-a*r*h+i*l*h)*A,e[3]=(d*l*s-a*f*s-d*r*c+i*f*c+a*r*p-i*l*p)*A,e[4]=x*A,e[5]=(u*m*s-g*f*s+g*r*p-t*m*p-u*r*h+t*f*h)*A,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*h-t*l*h)*A,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*p+t*l*p)*A,e[8]=y*A,e[9]=(g*d*s-u*_*s-g*i*p+t*_*p+u*i*h-t*d*h)*A,e[10]=(o*_*s-g*a*s+g*i*c-t*_*c-o*i*h+t*a*h)*A,e[11]=(u*a*s-o*d*s-u*i*c+t*d*c+o*i*p-t*a*p)*A,e[12]=R*A,e[13]=(u*_*r-g*d*r+g*i*f-t*_*f-u*i*m+t*d*m)*A,e[14]=(g*a*r-o*_*r-g*i*l+t*_*l+o*i*m-t*a*m)*A,e[15]=(o*d*r-u*a*r+u*i*l-t*d*l-o*i*f+t*a*f)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,d=a+a,f=s*c,p=s*u,g=s*d,_=o*u,m=o*d,h=a*d,v=l*c,x=l*u,y=l*d,R=i.x,b=i.y,A=i.z;return r[0]=(1-(_+h))*R,r[1]=(p+y)*R,r[2]=(g-x)*R,r[3]=0,r[4]=(p-y)*b,r[5]=(1-(f+h))*b,r[6]=(m+v)*b,r[7]=0,r[8]=(g+x)*A,r[9]=(m-v)*A,r[10]=(1-(f+_))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=hs.set(r[0],r[1],r[2]).length();const o=hs.set(r[4],r[5],r[6]).length(),a=hs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Wn.copy(this);const c=1/s,u=1/o,d=1/a;return Wn.elements[0]*=c,Wn.elements[1]*=c,Wn.elements[2]*=c,Wn.elements[4]*=u,Wn.elements[5]*=u,Wn.elements[6]*=u,Wn.elements[8]*=d,Wn.elements[9]*=d,Wn.elements[10]*=d,t.setFromRotationMatrix(Wn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=ui,l=!1){const c=this.elements,u=2*s/(t-e),d=2*s/(i-r),f=(t+e)/(t-e),p=(i+r)/(i-r);let g,_;if(l)g=s/(o-s),_=o*s/(o-s);else if(a===ui)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Ac)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=ui,l=!1){const c=this.elements,u=2/(t-e),d=2/(i-r),f=-(t+e)/(t-e),p=-(i+r)/(i-r);let g,_;if(l)g=1/(o-s),_=o/(o-s);else if(a===ui)g=-2/(o-s),_=-(o+s)/(o-s);else if(a===Ac)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const hs=new F,Wn=new He,VE=new F(0,0,0),GE=new F(1,1,1),$i=new F,cl=new F,En=new F,jm=new He,Wm=new Er;class mi{constructor(e=0,t=0,i=0,r=mi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Xe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return jm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jm,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wm.setFromEuler(this),this.setFromQuaternion(Wm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mi.DEFAULT_ORDER="XYZ";class Qv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jE=0;const Xm=new F,ps=new Er,Ei=new He,ul=new F,Lo=new F,WE=new F,XE=new Er,Ym=new F(1,0,0),$m=new F(0,1,0),qm=new F(0,0,1),Km={type:"added"},YE={type:"removed"},ms={type:"childadded",child:null},Uu={type:"childremoved",child:null};class yt extends mo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jE++}),this.uuid=ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DEFAULT_UP.clone();const e=new F,t=new mi,i=new Er,r=new F(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new He},normalMatrix:{value:new Be}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.multiply(ps),this}rotateOnWorldAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.premultiply(ps),this}rotateX(e){return this.rotateOnAxis(Ym,e)}rotateY(e){return this.rotateOnAxis($m,e)}rotateZ(e){return this.rotateOnAxis(qm,e)}translateOnAxis(e,t){return Xm.copy(e).applyQuaternion(this.quaternion),this.position.add(Xm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ym,e)}translateY(e){return this.translateOnAxis($m,e)}translateZ(e){return this.translateOnAxis(qm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ul.copy(e):ul.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(Lo,ul,this.up):Ei.lookAt(ul,Lo,this.up),this.quaternion.setFromRotationMatrix(Ei),r&&(Ei.extractRotation(r.matrixWorld),ps.setFromRotationMatrix(Ei),this.quaternion.premultiply(ps.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Km),ms.child=e,this.dispatchEvent(ms),ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(YE),Uu.child=e,this.dispatchEvent(Uu),Uu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Km),ms.child=e,this.dispatchEvent(ms),ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,e,WE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,XE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}yt.DEFAULT_UP=new F(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xn=new F,Ti=new F,Fu=new F,wi=new F,gs=new F,_s=new F,Zm=new F,Ou=new F,ku=new F,Bu=new F,zu=new nt,Hu=new nt,Vu=new nt;class Zn{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Xn.subVectors(e,t),r.cross(Xn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Xn.subVectors(r,t),Ti.subVectors(i,t),Fu.subVectors(e,t);const o=Xn.dot(Xn),a=Xn.dot(Ti),l=Xn.dot(Fu),c=Ti.dot(Ti),u=Ti.dot(Fu),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,wi.x),l.addScaledVector(o,wi.y),l.addScaledVector(a,wi.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return zu.setScalar(0),Hu.setScalar(0),Vu.setScalar(0),zu.fromBufferAttribute(e,t),Hu.fromBufferAttribute(e,i),Vu.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(zu,s.x),o.addScaledVector(Hu,s.y),o.addScaledVector(Vu,s.z),o}static isFrontFacing(e,t,i,r){return Xn.subVectors(i,t),Ti.subVectors(e,t),Xn.cross(Ti).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),Xn.cross(Ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Zn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Zn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;gs.subVectors(r,i),_s.subVectors(s,i),Ou.subVectors(e,i);const l=gs.dot(Ou),c=_s.dot(Ou);if(l<=0&&c<=0)return t.copy(i);ku.subVectors(e,r);const u=gs.dot(ku),d=_s.dot(ku);if(u>=0&&d<=u)return t.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(gs,o);Bu.subVectors(e,s);const p=gs.dot(Bu),g=_s.dot(Bu);if(g>=0&&p<=g)return t.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(_s,a);const m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return Zm.subVectors(s,r),a=(d-u)/(d-u+(p-g)),t.copy(r).addScaledVector(Zm,a);const h=1/(m+_+f);return o=_*h,a=f*h,t.copy(i).addScaledVector(gs,o).addScaledVector(_s,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Jv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},dl={h:0,s:0,l:0};function Gu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Fe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Qe.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Qe.workingColorSpace){if(e=ep(e,1),t=Xe(t,0,1),i=Xe(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Gu(o,s,e+1/3),this.g=Gu(o,s,e),this.b=Gu(o,s,e-1/3)}return Qe.colorSpaceToWorking(this,r),this}setStyle(e,t=Xt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){const i=Jv[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fi(e.r),this.g=Fi(e.g),this.b=Fi(e.b),this}copyLinearToSRGB(e){return this.r=Ys(e.r),this.g=Ys(e.g),this.b=Ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return Qe.workingToColorSpace(Qt.copy(this),e),Math.round(Xe(Qt.r*255,0,255))*65536+Math.round(Xe(Qt.g*255,0,255))*256+Math.round(Xe(Qt.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.workingToColorSpace(Qt.copy(this),t);const i=Qt.r,r=Qt.g,s=Qt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Qe.workingColorSpace){return Qe.workingToColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=Xt){Qe.workingToColorSpace(Qt.copy(this),e);const t=Qt.r,i=Qt.g,r=Qt.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(qi),this.setHSL(qi.h+e,qi.s+t,qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(qi),e.getHSL(dl);const i=ta(qi.h,dl.h,t),r=ta(qi.s,dl.s,t),s=ta(qi.l,dl.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new Fe;Fe.NAMES=Jv;let $E=0;class hi extends mo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$E++}),this.uuid=ti(),this.name="",this.type="Material",this.blending=Ws,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sf,this.blendDst=of,this.blendEquation=Or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=no,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Om,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ls,this.stencilZFail=ls,this.stencilZPass=ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ws&&(i.blending=this.blending),this.side!==Vi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==sf&&(i.blendSrc=this.blendSrc),this.blendDst!==of&&(i.blendDst=this.blendDst),this.blendEquation!==Or&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==no&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Om&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ls&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ls&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ls&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Gr extends hi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.combine=Ov,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lt=new F,fl=new Ke;let qE=0;class cn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qE++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Gf,this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)fl.fromBufferAttribute(this,t),fl.applyMatrix3(e),this.setXY(t,fl.x,fl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Kn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ot(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Kn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Kn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Kn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Kn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),r=ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),r=ot(r,this.array),s=ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gf&&(e.usage=this.usage),e}}class ex extends cn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class tx extends cn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Oi extends cn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let KE=0;const In=new He,ju=new yt,vs=new F,Tn=new gi,Do=new gi,Bt=new F;class vi extends mo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:KE++}),this.uuid=ti(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kv(e)?tx:ex)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Be().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return In.makeRotationFromQuaternion(e),this.applyMatrix4(In),this}rotateX(e){return In.makeRotationX(e),this.applyMatrix4(In),this}rotateY(e){return In.makeRotationY(e),this.applyMatrix4(In),this}rotateZ(e){return In.makeRotationZ(e),this.applyMatrix4(In),this}translate(e,t,i){return In.makeTranslation(e,t,i),this.applyMatrix4(In),this}scale(e,t,i){return In.makeScale(e,t,i),this.applyMatrix4(In),this}lookAt(e){return ju.lookAt(e),ju.updateMatrix(),this.applyMatrix4(ju.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Oi(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Tn.setFromBufferAttribute(s),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _i);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(Tn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Do.setFromBufferAttribute(a),this.morphTargetsRelative?(Bt.addVectors(Tn.min,Do.min),Tn.expandByPoint(Bt),Bt.addVectors(Tn.max,Do.max),Tn.expandByPoint(Bt)):(Tn.expandByPoint(Do.min),Tn.expandByPoint(Do.max))}Tn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Bt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Bt.fromBufferAttribute(a,c),l&&(vs.fromBufferAttribute(e,c),Bt.add(vs)),r=Math.max(r,i.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new F,l[P]=new F;const c=new F,u=new F,d=new F,f=new Ke,p=new Ke,g=new Ke,_=new F,m=new F;function h(P,w,E){c.fromBufferAttribute(i,P),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,E),f.fromBufferAttribute(s,P),p.fromBufferAttribute(s,w),g.fromBufferAttribute(s,E),u.sub(c),d.sub(c),p.sub(f),g.sub(f);const N=1/(p.x*g.y-g.x*p.y);isFinite(N)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(N),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(N),a[P].add(_),a[w].add(_),a[E].add(_),l[P].add(m),l[w].add(m),l[E].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,w=v.length;P<w;++P){const E=v[P],N=E.start,V=E.count;for(let H=N,W=N+V;H<W;H+=3)h(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const x=new F,y=new F,R=new F,b=new F;function A(P){R.fromBufferAttribute(r,P),b.copy(R);const w=a[P];x.copy(w),x.sub(R.multiplyScalar(R.dot(w))).normalize(),y.crossVectors(b,w);const N=y.dot(l[P])<0?-1:1;o.setXYZW(P,x.x,x.y,x.z,N)}for(let P=0,w=v.length;P<w;++P){const E=v[P],N=E.start,V=E.count;for(let H=N,W=N+V;H<W;H+=3)A(e.getX(H+0)),A(e.getX(H+1)),A(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new cn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new F,s=new F,o=new F,a=new F,l=new F,c=new F,u=new F,d=new F;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let h=0;h<u;h++)f[g++]=c[p++]}return new cn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new vi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qm=new He,Rr=new Xc,hl=new _i,Jm=new F,pl=new F,ml=new F,gl=new F,Wu=new F,_l=new F,eg=new F,vl=new F;class gn extends yt{constructor(e=new vi,t=new Gr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){_l.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(Wu.fromBufferAttribute(d,e),o?_l.addScaledVector(Wu,u):_l.addScaledVector(Wu.sub(t),u))}t.add(_l)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),hl.copy(i.boundingSphere),hl.applyMatrix4(s),Rr.copy(e.ray).recast(e.near),!(hl.containsPoint(Rr.origin)===!1&&(Rr.intersectSphere(hl,Jm)===null||Rr.origin.distanceToSquared(Jm)>(e.far-e.near)**2))&&(Qm.copy(s).invert(),Rr.copy(e.ray).applyMatrix4(Qm),!(i.boundingBox!==null&&Rr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Rr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],h=o[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,R=x;y<R;y+=3){const b=a.getX(y),A=a.getX(y+1),P=a.getX(y+2);r=xl(this,h,e,i,c,u,d,b,A,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){const v=a.getX(m),x=a.getX(m+1),y=a.getX(m+2);r=xl(this,o,e,i,c,u,d,v,x,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],h=o[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,R=x;y<R;y+=3){const b=y,A=y+1,P=y+2;r=xl(this,h,e,i,c,u,d,b,A,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){const v=m,x=m+1,y=m+2;r=xl(this,o,e,i,c,u,d,v,x,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function ZE(n,e,t,i,r,s,o,a){let l;if(e.side===yn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Vi,a),l===null)return null;vl.copy(a),vl.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(vl);return c<t.near||c>t.far?null:{distance:c,point:vl.clone(),object:n}}function xl(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,pl),n.getVertexPosition(l,ml),n.getVertexPosition(c,gl);const u=ZE(n,e,t,i,pl,ml,gl,eg);if(u){const d=new F;Zn.getBarycoord(eg,pl,ml,gl,d),r&&(u.uv=Zn.getInterpolatedAttribute(r,a,l,c,d,new Ke)),s&&(u.uv1=Zn.getInterpolatedAttribute(s,a,l,c,d,new Ke)),o&&(u.normal=Zn.getInterpolatedAttribute(o,a,l,c,d,new F),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new F,materialIndex:0};Zn.getNormal(pl,ml,gl,f.normal),u.face=f,u.barycoord=d}return u}class Fa extends vi{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Oi(c,3)),this.setAttribute("normal",new Oi(u,3)),this.setAttribute("uv",new Oi(d,2));function g(_,m,h,v,x,y,R,b,A,P,w){const E=y/A,N=R/P,V=y/2,H=R/2,W=b/2,Z=A+1,$=P+1;let Q=0,D=0;const X=new F;for(let q=0;q<$;q++){const ce=q*N-H;for(let ye=0;ye<Z;ye++){const it=ye*E-V;X[_]=it*v,X[m]=ce*x,X[h]=W,c.push(X.x,X.y,X.z),X[_]=0,X[m]=0,X[h]=b>0?1:-1,u.push(X.x,X.y,X.z),d.push(ye/A),d.push(1-q/P),Q+=1}}for(let q=0;q<P;q++)for(let ce=0;ce<A;ce++){const ye=f+ce+Z*q,it=f+ce+Z*(q+1),Ge=f+(ce+1)+Z*(q+1),G=f+(ce+1)+Z*q;l.push(ye,it,G),l.push(it,Ge,G),D+=6}a.addGroup(p,D,w),p+=D,f+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ao(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function rn(n){const e={};for(let t=0;t<n.length;t++){const i=ao(n[t]);for(const r in i)e[r]=i[r]}return e}function QE(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function nx(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const JE={clone:ao,merge:rn};var e1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,t1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xr extends hi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=e1,this.fragmentShader=t1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ao(e.uniforms),this.uniformsGroups=QE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class ix extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ki=new F,tg=new Ke,ng=new Ke;class on extends ix{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=oo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ea*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return oo*2*Math.atan(Math.tan(ea*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z)}getViewSize(e,t){return this.getViewBounds(e,tg,ng),t.subVectors(ng,tg)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ea*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const xs=-90,ys=1;class n1 extends yt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new on(xs,ys,e,t);r.layers=this.layers,this.add(r);const s=new on(xs,ys,e,t);s.layers=this.layers,this.add(s);const o=new on(xs,ys,e,t);o.layers=this.layers,this.add(o);const a=new on(xs,ys,e,t);a.layers=this.layers,this.add(a);const l=new on(xs,ys,e,t);l.layers=this.layers,this.add(l);const c=new on(xs,ys,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===ui)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ac)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class rx extends Gt{constructor(e=[],t=io,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class i1 extends es{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new rx(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Fa(5,5,5),s=new xr({name:"CubemapFromEquirect",uniforms:ao(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:yn,blending:mr});s.uniforms.tEquirect.value=t;const o=new gn(r,s),a=t.minFilter;return t.minFilter===Di&&(t.minFilter=bn),new n1(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class jr extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const r1={type:"move"};class Xu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),h=this._getHandJoint(c,_);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(r1)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new jr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class s1 extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mi,this.environmentIntensity=1,this.environmentRotation=new mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class o1{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Gf,this.updateRanges=[],this.version=0,this.uuid=ti()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const nn=new F;class np{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Kn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ot(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Kn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Kn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Kn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Kn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),r=ot(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),r=ot(r,this.array),s=ot(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new cn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new np(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const ig=new F,rg=new nt,sg=new nt,a1=new F,og=new He,yl=new F,Yu=new _i,ag=new He,$u=new Xc;class l1 extends gn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Dm,this.bindMatrix=new He,this.bindMatrixInverse=new He,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new gi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,yl),this.boundingBox.expandByPoint(yl)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new _i),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,yl),this.boundingSphere.expandByPoint(yl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yu.copy(this.boundingSphere),Yu.applyMatrix4(r),e.ray.intersectsSphere(Yu)!==!1&&(ag.copy(r).invert(),$u.copy(e.ray).applyMatrix4(ag),!(this.boundingBox!==null&&$u.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,$u)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new nt,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Dm?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===iE?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;rg.fromBufferAttribute(r.attributes.skinIndex,e),sg.fromBufferAttribute(r.attributes.skinWeight,e),ig.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=sg.getComponent(s);if(o!==0){const a=rg.getComponent(s);og.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(a1.copy(ig).applyMatrix4(og),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class sx extends yt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ox extends Gt{constructor(e=null,t=1,i=1,r,s,o,a,l,c=ln,u=ln,d,f){super(null,o,a,l,c,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const lg=new He,c1=new He;class ip{constructor(e=[],t=[]){this.uuid=ti(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new He)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new He;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:c1;lg.multiplyMatrices(a,t[s]),lg.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new ip(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new ox(t,e,e,Bn,Qn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new sx),this.bones.push(o),this.boneInverses.push(new He().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=i[r];e.boneInverses.push(a.toArray())}return e}}class jf extends cn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ss=new He,cg=new He,Sl=[],ug=new gi,u1=new He,Io=new gn,Uo=new _i;class d1 extends gn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new jf(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,u1)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new gi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ss),ug.copy(e.boundingBox).applyMatrix4(Ss),this.boundingBox.union(ug)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new _i),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ss),Uo.copy(e.boundingSphere).applyMatrix4(Ss),this.boundingSphere.union(Uo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Io.geometry=this.geometry,Io.material=this.material,Io.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Uo.copy(this.boundingSphere),Uo.applyMatrix4(i),e.ray.intersectsSphere(Uo)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Ss),cg.multiplyMatrices(i,Ss),Io.matrixWorld=cg,Io.raycast(e,Sl);for(let o=0,a=Sl.length;o<a;o++){const l=Sl[o];l.instanceId=s,l.object=this,t.push(l)}Sl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new jf(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new ox(new Float32Array(r*this.count),r,this.count,Kh,Qn));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const qu=new F,f1=new F,h1=new Be;class Ur{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=qu.subVectors(i,t).cross(f1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(qu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||h1.getNormalMatrix(e),r=this.coplanarPoint(qu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cr=new _i,p1=new Ke(.5,.5),Ml=new F;class rp{constructor(e=new Ur,t=new Ur,i=new Ur,r=new Ur,s=new Ur,o=new Ur){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ui,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],d=s[5],f=s[6],p=s[7],g=s[8],_=s[9],m=s[10],h=s[11],v=s[12],x=s[13],y=s[14],R=s[15];if(r[0].setComponents(c-o,p-u,h-g,R-v).normalize(),r[1].setComponents(c+o,p+u,h+g,R+v).normalize(),r[2].setComponents(c+a,p+d,h+_,R+x).normalize(),r[3].setComponents(c-a,p-d,h-_,R-x).normalize(),i)r[4].setComponents(l,f,m,y).normalize(),r[5].setComponents(c-l,p-f,h-m,R-y).normalize();else if(r[4].setComponents(c-l,p-f,h-m,R-y).normalize(),t===ui)r[5].setComponents(c+l,p+f,h+m,R+y).normalize();else if(t===Ac)r[5].setComponents(l,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Cr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cr)}intersectsSprite(e){Cr.center.set(0,0,0);const t=p1.distanceTo(e.center);return Cr.radius=.7071067811865476+t,Cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ml.x=r.normal.x>0?e.max.x:e.min.x,Ml.y=r.normal.y>0?e.max.y:e.min.y,Ml.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ml)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ax extends hi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const bc=new F,Rc=new F,dg=new He,Fo=new Xc,El=new _i,Ku=new F,fg=new F;class sp extends yt{constructor(e=new vi,t=new ax){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)bc.fromBufferAttribute(t,r-1),Rc.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=bc.distanceTo(Rc);e.setAttribute("lineDistance",new Oi(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),El.copy(i.boundingSphere),El.applyMatrix4(r),El.radius+=s,e.ray.intersectsSphere(El)===!1)return;dg.copy(r).invert(),Fo.copy(e.ray).applyMatrix4(dg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const h=u.getX(_),v=u.getX(_+1),x=Tl(this,e,Fo,l,h,v,_);x&&t.push(x)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(p),h=Tl(this,e,Fo,l,_,m,g-1);h&&t.push(h)}}else{const p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const h=Tl(this,e,Fo,l,_,_+1,_);h&&t.push(h)}if(this.isLineLoop){const _=Tl(this,e,Fo,l,g-1,p,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Tl(n,e,t,i,r,s,o){const a=n.geometry.attributes.position;if(bc.fromBufferAttribute(a,r),Rc.fromBufferAttribute(a,s),t.distanceSqToSegment(bc,Rc,Ku,fg)>i)return;Ku.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Ku);if(!(c<e.near||c>e.far))return{distance:c,point:fg.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const hg=new F,pg=new F;class m1 extends sp{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)hg.fromBufferAttribute(t,r),pg.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+hg.distanceTo(pg);e.setAttribute("lineDistance",new Oi(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class g1 extends sp{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class lx extends hi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const mg=new He,Wf=new Xc,wl=new _i,Al=new F;class _1 extends yt{constructor(e=new vi,t=new lx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),wl.copy(i.boundingSphere),wl.applyMatrix4(r),wl.radius+=s,e.ray.intersectsSphere(wl)===!1)return;mg.copy(r).invert(),Wf.copy(e.ray).applyMatrix4(mg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,_=p;g<_;g++){const m=c.getX(g);Al.fromBufferAttribute(d,m),gg(Al,m,l,r,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let g=f,_=p;g<_;g++)Al.fromBufferAttribute(d,g),gg(Al,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function gg(n,e,t,i,r,s,o){const a=Wf.distanceSqToPoint(n);if(a<t){const l=new F;Wf.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class cx extends Gt{constructor(e,t,i=Jr,r,s,o,a=ln,l=ln,c,u=wa,d=1){if(u!==wa&&u!==Aa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new tp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Yc extends vi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=t/l,p=[],g=[],_=[],m=[];for(let h=0;h<u;h++){const v=h*f-o;for(let x=0;x<c;x++){const y=x*d-s;g.push(y,-v,0),_.push(0,0,1),m.push(x/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<a;v++){const x=v+c*h,y=v+c*(h+1),R=v+1+c*(h+1),b=v+1+c*h;p.push(x,y,b),p.push(y,R,b)}this.setIndex(p),this.setAttribute("position",new Oi(g,3)),this.setAttribute("normal",new Oi(_,3)),this.setAttribute("uv",new Oi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yc(e.width,e.height,e.widthSegments,e.heightSegments)}}class op extends hi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$v,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class xi extends op{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ke(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Xe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class v1 extends hi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=oE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class x1 extends hi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function bl(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function y1(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function S1(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function _g(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=n[a+l]}return r}function ux(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push(...o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)}class Oa{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class M1 extends Oa{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Im,endingEnd:Im}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Um:s=e,a=2*t-i;break;case Fm:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Um:o=e,l=2*i-t;break;case Fm:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(i-t)/(r-t),_=g*g,m=_*g,h=-f*m+2*f*_-f*g,v=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,x=(-1-p)*m+(1.5+p)*_+.5*g,y=p*m-p*_;for(let R=0;R!==a;++R)s[R]=h*o[u+R]+v*o[c+R]+x*o[l+R]+y*o[d+R];return s}}class E1 extends Oa{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(r-t),d=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*d+o[l+f]*u;return s}}class T1 extends Oa{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class ii{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=bl(t,this.TimeBufferType),this.values=bl(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:bl(e.times,Array),values:bl(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new T1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new E1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new M1(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ba:t=this.InterpolantFactoryMethodDiscrete;break;case Ra:t=this.InterpolantFactoryMethodLinear;break;case wu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ba;case this.InterpolantFactoryMethodLinear:return Ra;case this.InterpolantFactoryMethodSmooth:return wu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&y1(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===wu,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const d=a*i,f=d-i,p=d+i;for(let g=0;g!==i;++g){const _=t[d+g];if(_!==t[f+g]||_!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const d=a*i,f=o*i;for(let p=0;p!==i;++p)t[f+p]=t[d+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}ii.prototype.ValueTypeName="";ii.prototype.TimeBufferType=Float32Array;ii.prototype.ValueBufferType=Float32Array;ii.prototype.DefaultInterpolation=Ra;class go extends ii{constructor(e,t,i){super(e,t,i)}}go.prototype.ValueTypeName="bool";go.prototype.ValueBufferType=Array;go.prototype.DefaultInterpolation=ba;go.prototype.InterpolantFactoryMethodLinear=void 0;go.prototype.InterpolantFactoryMethodSmooth=void 0;class dx extends ii{constructor(e,t,i,r){super(e,t,i,r)}}dx.prototype.ValueTypeName="color";class lo extends ii{constructor(e,t,i,r){super(e,t,i,r)}}lo.prototype.ValueTypeName="number";class w1 extends Oa{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Er.slerpFlat(s,0,o,c-a,o,c,l);return s}}class co extends ii{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new w1(this.times,this.values,this.getValueSize(),e)}}co.prototype.ValueTypeName="quaternion";co.prototype.InterpolantFactoryMethodSmooth=void 0;class _o extends ii{constructor(e,t,i){super(e,t,i)}}_o.prototype.ValueTypeName="string";_o.prototype.ValueBufferType=Array;_o.prototype.DefaultInterpolation=ba;_o.prototype.InterpolantFactoryMethodLinear=void 0;_o.prototype.InterpolantFactoryMethodSmooth=void 0;class uo extends ii{constructor(e,t,i,r){super(e,t,i,r)}}uo.prototype.ValueTypeName="vector";class A1{constructor(e="",t=-1,i=[],r=rE){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=ti(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(R1(i[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(ii.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=S1(l);l=_g(l,1,u),c=_g(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new lo(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const d=u[1];let f=r[d];f||(r[d]=f=[]),f.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(d,f,p,g,_){if(p.length!==0){const m=[],h=[];ux(p,m,h,g),m.length!==0&&_.push(new d(f,m,h))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const f=c[d].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const p={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)p[f[g].morphTargets[_]]=-1;for(const _ in p){const m=[],h=[];for(let v=0;v!==f[g].morphTargets.length;++v){const x=f[g];m.push(x.time),h.push(x.morphTarget===_?1:0)}r.push(new lo(".morphTargetInfluence["+_+"]",m,h))}l=p.length*o}else{const p=".bones["+t[d].name+"]";i(uo,p+".position",f,"pos",r),i(co,p+".quaternion",f,"rot",r),i(uo,p+".scale",f,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function b1(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return lo;case"vector":case"vector2":case"vector3":case"vector4":return uo;case"color":return dx;case"quaternion":return co;case"bool":case"boolean":return go;case"string":return _o}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function R1(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=b1(n.type);if(n.times===void 0){const t=[],i=[];ux(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const Ii={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class C1{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const P1=new C1;class vo{constructor(e){this.manager=e!==void 0?e:P1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}vo.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ai={};class N1 extends Error{constructor(e,t){super(e),this.response=t}}class fx extends vo{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Ii.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Ai[e]!==void 0){Ai[e].push({onLoad:t,onProgress:i,onError:r});return}Ai[e]=[],Ai[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Ai[e],d=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0;let _=0;const m=new ReadableStream({start(h){v();function v(){d.read().then(({done:x,value:y})=>{if(x)h.close();else{_+=y.byteLength;const R=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let b=0,A=u.length;b<A;b++){const P=u[b];P.onProgress&&P.onProgress(R)}h.enqueue(y),v()}},x=>{h.error(x)})}}});return new Response(m)}else throw new N1(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Ii.add(`file:${e}`,c);const u=Ai[e];delete Ai[e];for(let d=0,f=u.length;d<f;d++){const p=u[d];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Ai[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ai[e];for(let d=0,f=u.length;d<f;d++){const p=u[d];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ms=new WeakMap;class L1 extends vo{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Ii.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let d=Ms.get(o);d===void 0&&(d=[],Ms.set(o,d)),d.push({onLoad:t,onError:r})}return o}const a=Ca("img");function l(){u(),t&&t(this);const d=Ms.get(this)||[];for(let f=0;f<d.length;f++){const p=d[f];p.onLoad&&p.onLoad(this)}Ms.delete(this),s.manager.itemEnd(e)}function c(d){u(),r&&r(d),Ii.remove(`image:${e}`);const f=Ms.get(this)||[];for(let p=0;p<f.length;p++){const g=f[p];g.onError&&g.onError(d)}Ms.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ii.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class D1 extends vo{constructor(e){super(e)}load(e,t,i,r){const s=new Gt,o=new L1(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class ka extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class I1 extends ka{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Zu=new He,vg=new F,xg=new F;class ap{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.mapType=pi,this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rp,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;vg.setFromMatrixPosition(e.matrixWorld),t.position.copy(vg),xg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xg),t.updateMatrixWorld(),Zu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zu,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Zu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class U1 extends ap{constructor(){super(new on(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=oo*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class F1 extends ka{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new U1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const yg=new He,Oo=new F,Qu=new F;class O1 extends ap{constructor(){super(new on(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ke(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Oo.setFromMatrixPosition(e.matrixWorld),i.position.copy(Oo),Qu.copy(i.position),Qu.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Qu),i.updateMatrixWorld(),r.makeTranslation(-Oo.x,-Oo.y,-Oo.z),yg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yg,i.coordinateSystem,i.reversedDepth)}}class Qi extends ka{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new O1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class lp extends ix{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class k1 extends ap{constructor(){super(new lp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ts extends ka{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new k1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class B1 extends ka{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class na{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Ju=new WeakMap;class z1 extends vo{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Ii.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{if(Ju.has(o)===!0)r&&r(Ju.get(o)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(c),s.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ii.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),Ju.set(l,c),Ii.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Ii.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class H1 extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const cp="\\[\\]\\.:\\/",V1=new RegExp("["+cp+"]","g"),up="[^"+cp+"]",G1="[^"+cp.replace("\\.","")+"]",j1=/((?:WC+[\/:])*)/.source.replace("WC",up),W1=/(WCOD+)?/.source.replace("WCOD",G1),X1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",up),Y1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",up),$1=new RegExp("^"+j1+W1+X1+Y1+"$"),q1=["material","materials","bones","map"];class K1{constructor(e,t,i){const r=i||at.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class at{constructor(e,t,i){this.path=t,this.parsedPath=i||at.parseTrackName(t),this.node=at.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new at.Composite(e,t,i):new at(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(V1,"")}static parseTrackName(e){const t=$1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);q1.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=at.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}at.Composite=K1;at.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};at.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};at.prototype.GetterByBindingType=[at.prototype._getValue_direct,at.prototype._getValue_array,at.prototype._getValue_arrayElement,at.prototype._getValue_toArray];at.prototype.SetterByBindingTypeAndVersioning=[[at.prototype._setValue_direct,at.prototype._setValue_direct_setNeedsUpdate,at.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[at.prototype._setValue_array,at.prototype._setValue_array_setNeedsUpdate,at.prototype._setValue_array_setMatrixWorldNeedsUpdate],[at.prototype._setValue_arrayElement,at.prototype._setValue_arrayElement_setNeedsUpdate,at.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[at.prototype._setValue_fromArray,at.prototype._setValue_fromArray_setNeedsUpdate,at.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function Sg(n,e,t,i){const r=Z1(i);switch(t){case Gv:return n*e;case Kh:return n*e/r.components*r.byteLength;case Zh:return n*e/r.components*r.byteLength;case Wv:return n*e*2/r.components*r.byteLength;case Qh:return n*e*2/r.components*r.byteLength;case jv:return n*e*3/r.components*r.byteLength;case Bn:return n*e*4/r.components*r.byteLength;case Jh:return n*e*4/r.components*r.byteLength;case jl:case Wl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Xl:case Yl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case _f:case xf:return Math.max(n,16)*Math.max(e,8)/4;case gf:case vf:return Math.max(n,8)*Math.max(e,8)/2;case yf:case Sf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Mf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ef:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Tf:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case wf:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Af:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case bf:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Rf:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Cf:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Pf:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Nf:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Lf:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Df:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case If:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Uf:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ff:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case $l:case Of:case kf:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Xv:case Bf:return Math.ceil(n/4)*Math.ceil(e/4)*8;case zf:case Hf:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Z1(n){switch(n){case pi:case zv:return{byteLength:1,components:1};case Ea:case Hv:case Ua:return{byteLength:2,components:1};case $h:case qh:return{byteLength:2,components:4};case Jr:case Yh:case Qn:return{byteLength:4,components:1};case Vv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function hx(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Q1(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<d.length;p++){const g=d[f],_=d[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,d[f]=_)}d.length=f+1;for(let p=0,g=d.length;p<g;p++){const _=d[p];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var J1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eT=`#ifdef USE_ALPHAHASH
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
#endif`,tT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sT=`#ifdef USE_AOMAP
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
#endif`,oT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,aT=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,lT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fT=`#ifdef USE_IRIDESCENCE
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
#endif`,hT=`#ifdef USE_BUMPMAP
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
#endif`,pT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_T=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ST=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,MT=`#define PI 3.141592653589793
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
} // validated`,ET=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,TT=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,wT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,AT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,RT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,CT="gl_FragColor = linearToOutputTexel( gl_FragColor );",PT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,NT=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,LT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,DT=`#ifdef USE_ENVMAP
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
#endif`,IT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,UT=`#ifdef USE_ENVMAP
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
#endif`,FT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,OT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,BT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zT=`#ifdef USE_GRADIENTMAP
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
}`,HT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,VT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,GT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jT=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,WT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,XT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,YT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$T=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,KT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,ZT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,QT=`
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,JT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ew=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tw=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nw=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iw=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rw=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ow=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,aw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lw=`#if defined( USE_POINTS_UV )
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
#endif`,cw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pw=`#ifdef USE_MORPHTARGETS
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
#endif`,mw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_w=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sw=`#ifdef USE_NORMALMAP
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
#endif`,Mw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ew=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ww=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Aw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Rw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Iw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Uw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Fw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ow=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,kw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bw=`#ifdef USE_SKINNING
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
#endif`,zw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hw=`#ifdef USE_SKINNING
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
#endif`,Vw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ww=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xw=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Yw=`#ifdef USE_TRANSMISSION
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
#endif`,$w=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jw=`uniform sampler2D t2D;
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
}`,eA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rA=`#include <common>
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
}`,sA=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSEDEPTHBUF
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
}`,oA=`#define DISTANCE
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
}`,aA=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,lA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uA=`uniform float scale;
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
}`,dA=`uniform vec3 diffuse;
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
}`,fA=`#include <common>
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
}`,hA=`uniform vec3 diffuse;
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
}`,pA=`#define LAMBERT
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
}`,mA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,gA=`#define MATCAP
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
}`,_A=`#define MATCAP
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
}`,vA=`#define NORMAL
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
}`,xA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yA=`#define PHONG
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
}`,SA=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
}`,MA=`#define STANDARD
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
}`,EA=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,TA=`#define TOON
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
}`,wA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,AA=`uniform float size;
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
}`,bA=`uniform vec3 diffuse;
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
}`,RA=`#include <common>
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
}`,CA=`uniform vec3 color;
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
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,PA=`uniform float rotation;
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
}`,NA=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:J1,alphahash_pars_fragment:eT,alphamap_fragment:tT,alphamap_pars_fragment:nT,alphatest_fragment:iT,alphatest_pars_fragment:rT,aomap_fragment:sT,aomap_pars_fragment:oT,batching_pars_vertex:aT,batching_vertex:lT,begin_vertex:cT,beginnormal_vertex:uT,bsdfs:dT,iridescence_fragment:fT,bumpmap_pars_fragment:hT,clipping_planes_fragment:pT,clipping_planes_pars_fragment:mT,clipping_planes_pars_vertex:gT,clipping_planes_vertex:_T,color_fragment:vT,color_pars_fragment:xT,color_pars_vertex:yT,color_vertex:ST,common:MT,cube_uv_reflection_fragment:ET,defaultnormal_vertex:TT,displacementmap_pars_vertex:wT,displacementmap_vertex:AT,emissivemap_fragment:bT,emissivemap_pars_fragment:RT,colorspace_fragment:CT,colorspace_pars_fragment:PT,envmap_fragment:NT,envmap_common_pars_fragment:LT,envmap_pars_fragment:DT,envmap_pars_vertex:IT,envmap_physical_pars_fragment:WT,envmap_vertex:UT,fog_vertex:FT,fog_pars_vertex:OT,fog_fragment:kT,fog_pars_fragment:BT,gradientmap_pars_fragment:zT,lightmap_pars_fragment:HT,lights_lambert_fragment:VT,lights_lambert_pars_fragment:GT,lights_pars_begin:jT,lights_toon_fragment:XT,lights_toon_pars_fragment:YT,lights_phong_fragment:$T,lights_phong_pars_fragment:qT,lights_physical_fragment:KT,lights_physical_pars_fragment:ZT,lights_fragment_begin:QT,lights_fragment_maps:JT,lights_fragment_end:ew,logdepthbuf_fragment:tw,logdepthbuf_pars_fragment:nw,logdepthbuf_pars_vertex:iw,logdepthbuf_vertex:rw,map_fragment:sw,map_pars_fragment:ow,map_particle_fragment:aw,map_particle_pars_fragment:lw,metalnessmap_fragment:cw,metalnessmap_pars_fragment:uw,morphinstance_vertex:dw,morphcolor_vertex:fw,morphnormal_vertex:hw,morphtarget_pars_vertex:pw,morphtarget_vertex:mw,normal_fragment_begin:gw,normal_fragment_maps:_w,normal_pars_fragment:vw,normal_pars_vertex:xw,normal_vertex:yw,normalmap_pars_fragment:Sw,clearcoat_normal_fragment_begin:Mw,clearcoat_normal_fragment_maps:Ew,clearcoat_pars_fragment:Tw,iridescence_pars_fragment:ww,opaque_fragment:Aw,packing:bw,premultiplied_alpha_fragment:Rw,project_vertex:Cw,dithering_fragment:Pw,dithering_pars_fragment:Nw,roughnessmap_fragment:Lw,roughnessmap_pars_fragment:Dw,shadowmap_pars_fragment:Iw,shadowmap_pars_vertex:Uw,shadowmap_vertex:Fw,shadowmask_pars_fragment:Ow,skinbase_vertex:kw,skinning_pars_vertex:Bw,skinning_vertex:zw,skinnormal_vertex:Hw,specularmap_fragment:Vw,specularmap_pars_fragment:Gw,tonemapping_fragment:jw,tonemapping_pars_fragment:Ww,transmission_fragment:Xw,transmission_pars_fragment:Yw,uv_pars_fragment:$w,uv_pars_vertex:qw,uv_vertex:Kw,worldpos_vertex:Zw,background_vert:Qw,background_frag:Jw,backgroundCube_vert:eA,backgroundCube_frag:tA,cube_vert:nA,cube_frag:iA,depth_vert:rA,depth_frag:sA,distanceRGBA_vert:oA,distanceRGBA_frag:aA,equirect_vert:lA,equirect_frag:cA,linedashed_vert:uA,linedashed_frag:dA,meshbasic_vert:fA,meshbasic_frag:hA,meshlambert_vert:pA,meshlambert_frag:mA,meshmatcap_vert:gA,meshmatcap_frag:_A,meshnormal_vert:vA,meshnormal_frag:xA,meshphong_vert:yA,meshphong_frag:SA,meshphysical_vert:MA,meshphysical_frag:EA,meshtoon_vert:TA,meshtoon_frag:wA,points_vert:AA,points_frag:bA,shadow_vert:RA,shadow_frag:CA,sprite_vert:PA,sprite_frag:NA},ue={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},ai={basic:{uniforms:rn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:rn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Fe(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:rn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:rn([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:rn([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Fe(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:rn([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:rn([ue.points,ue.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:rn([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:rn([ue.common,ue.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:rn([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:rn([ue.sprite,ue.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:rn([ue.common,ue.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:rn([ue.lights,ue.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};ai.physical={uniforms:rn([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Rl={r:0,b:0,g:0},Pr=new mi,LA=new He;function DA(n,e,t,i,r,s,o){const a=new Fe(0);let l=s===!0?0:1,c,u,d=null,f=0,p=null;function g(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?t:e).get(y)),y}function _(x){let y=!1;const R=g(x);R===null?h(a,l):R&&R.isColor&&(h(R,1),y=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(x,y){const R=g(y);R&&(R.isCubeTexture||R.mapping===Wc)?(u===void 0&&(u=new gn(new Fa(1,1,1),new xr({name:"BackgroundCubeMaterial",uniforms:ao(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Pr.copy(y.backgroundRotation),Pr.x*=-1,Pr.y*=-1,Pr.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Pr.y*=-1,Pr.z*=-1),u.material.uniforms.envMap.value=R,u.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(LA.makeRotationFromEuler(Pr)),u.material.toneMapped=Qe.getTransfer(R.colorSpace)!==ut,(d!==R||f!==R.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=R,f=R.version,p=n.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new gn(new Yc(2,2),new xr({name:"BackgroundMaterial",uniforms:ao(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(R.colorSpace)!==ut,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(d!==R||f!==R.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=R,f=R.version,p=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function h(x,y){x.getRGB(Rl,nx(n)),i.buffers.color.setClear(Rl.r,Rl.g,Rl.b,y,o)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,y=1){a.set(x),l=y,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,h(a,l)},render:_,addToRenderList:m,dispose:v}}function IA(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(E,N,V,H,W){let Z=!1;const $=d(H,V,N);s!==$&&(s=$,c(s.object)),Z=p(E,H,V,W),Z&&g(E,H,V,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,y(E,N,V,H),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return n.createVertexArray()}function c(E){return n.bindVertexArray(E)}function u(E){return n.deleteVertexArray(E)}function d(E,N,V){const H=V.wireframe===!0;let W=i[E.id];W===void 0&&(W={},i[E.id]=W);let Z=W[N.id];Z===void 0&&(Z={},W[N.id]=Z);let $=Z[H];return $===void 0&&($=f(l()),Z[H]=$),$}function f(E){const N=[],V=[],H=[];for(let W=0;W<t;W++)N[W]=0,V[W]=0,H[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:V,attributeDivisors:H,object:E,attributes:{},index:null}}function p(E,N,V,H){const W=s.attributes,Z=N.attributes;let $=0;const Q=V.getAttributes();for(const D in Q)if(Q[D].location>=0){const q=W[D];let ce=Z[D];if(ce===void 0&&(D==="instanceMatrix"&&E.instanceMatrix&&(ce=E.instanceMatrix),D==="instanceColor"&&E.instanceColor&&(ce=E.instanceColor)),q===void 0||q.attribute!==ce||ce&&q.data!==ce.data)return!0;$++}return s.attributesNum!==$||s.index!==H}function g(E,N,V,H){const W={},Z=N.attributes;let $=0;const Q=V.getAttributes();for(const D in Q)if(Q[D].location>=0){let q=Z[D];q===void 0&&(D==="instanceMatrix"&&E.instanceMatrix&&(q=E.instanceMatrix),D==="instanceColor"&&E.instanceColor&&(q=E.instanceColor));const ce={};ce.attribute=q,q&&q.data&&(ce.data=q.data),W[D]=ce,$++}s.attributes=W,s.attributesNum=$,s.index=H}function _(){const E=s.newAttributes;for(let N=0,V=E.length;N<V;N++)E[N]=0}function m(E){h(E,0)}function h(E,N){const V=s.newAttributes,H=s.enabledAttributes,W=s.attributeDivisors;V[E]=1,H[E]===0&&(n.enableVertexAttribArray(E),H[E]=1),W[E]!==N&&(n.vertexAttribDivisor(E,N),W[E]=N)}function v(){const E=s.newAttributes,N=s.enabledAttributes;for(let V=0,H=N.length;V<H;V++)N[V]!==E[V]&&(n.disableVertexAttribArray(V),N[V]=0)}function x(E,N,V,H,W,Z,$){$===!0?n.vertexAttribIPointer(E,N,V,W,Z):n.vertexAttribPointer(E,N,V,H,W,Z)}function y(E,N,V,H){_();const W=H.attributes,Z=V.getAttributes(),$=N.defaultAttributeValues;for(const Q in Z){const D=Z[Q];if(D.location>=0){let X=W[Q];if(X===void 0&&(Q==="instanceMatrix"&&E.instanceMatrix&&(X=E.instanceMatrix),Q==="instanceColor"&&E.instanceColor&&(X=E.instanceColor)),X!==void 0){const q=X.normalized,ce=X.itemSize,ye=e.get(X);if(ye===void 0)continue;const it=ye.buffer,Ge=ye.type,G=ye.bytesPerElement,oe=Ge===n.INT||Ge===n.UNSIGNED_INT||X.gpuType===Yh;if(X.isInterleavedBufferAttribute){const ie=X.data,Ce=ie.stride,ve=X.offset;if(ie.isInstancedInterleavedBuffer){for(let pe=0;pe<D.locationSize;pe++)h(D.location+pe,ie.meshPerAttribute);E.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let pe=0;pe<D.locationSize;pe++)m(D.location+pe);n.bindBuffer(n.ARRAY_BUFFER,it);for(let pe=0;pe<D.locationSize;pe++)x(D.location+pe,ce/D.locationSize,Ge,q,Ce*G,(ve+ce/D.locationSize*pe)*G,oe)}else{if(X.isInstancedBufferAttribute){for(let ie=0;ie<D.locationSize;ie++)h(D.location+ie,X.meshPerAttribute);E.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ie=0;ie<D.locationSize;ie++)m(D.location+ie);n.bindBuffer(n.ARRAY_BUFFER,it);for(let ie=0;ie<D.locationSize;ie++)x(D.location+ie,ce/D.locationSize,Ge,q,ce*G,ce/D.locationSize*ie*G,oe)}}else if($!==void 0){const q=$[Q];if(q!==void 0)switch(q.length){case 2:n.vertexAttrib2fv(D.location,q);break;case 3:n.vertexAttrib3fv(D.location,q);break;case 4:n.vertexAttrib4fv(D.location,q);break;default:n.vertexAttrib1fv(D.location,q)}}}}v()}function R(){P();for(const E in i){const N=i[E];for(const V in N){const H=N[V];for(const W in H)u(H[W].object),delete H[W];delete N[V]}delete i[E]}}function b(E){if(i[E.id]===void 0)return;const N=i[E.id];for(const V in N){const H=N[V];for(const W in H)u(H[W].object),delete H[W];delete N[V]}delete i[E.id]}function A(E){for(const N in i){const V=i[N];if(V[E.id]===void 0)continue;const H=V[E.id];for(const W in H)u(H[W].object),delete H[W];delete V[E.id]}}function P(){w(),o=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:w,dispose:R,releaseStatesOfGeometry:b,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function UA(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let g=0;g<d;g++)p+=u[g];t.update(p,i,1)}function l(c,u,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_]*f[_];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function FA(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==Bn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const P=A===Ua&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==pi&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Qn&&!P)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,b=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:R,maxSamples:b}}function OA(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Ur,a=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,p){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,h=n.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const v=s?0:i,x=v*4;let y=h.clippingState||null;l.value=y,y=u(g,f,x,p);for(let R=0;R!==x;++R)y[R]=t[R];h.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,p,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const h=p+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<h)&&(m=new Float32Array(h));for(let x=0,y=p;x!==_;++x,y+=4)o.copy(d[x]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function kA(n){let e=new WeakMap;function t(o,a){return a===pf?o.mapping=io:a===mf&&(o.mapping=ro),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===pf||a===mf)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new i1(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Os=4,Mg=[.125,.215,.35,.446,.526,.582],kr=20,ed=new lp,Eg=new Fe;let td=null,nd=0,id=0,rd=!1;const Fr=(1+Math.sqrt(5))/2,Es=1/Fr,Tg=[new F(-Fr,Es,0),new F(Fr,Es,0),new F(-Es,0,Fr),new F(Es,0,Fr),new F(0,Fr,-Es),new F(0,Fr,Es),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],BA=new F;class wg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=BA}=s;td=this._renderer.getRenderTarget(),nd=this._renderer.getActiveCubeFace(),id=this._renderer.getActiveMipmapLevel(),rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(td,nd,id),this._renderer.xr.enabled=rd,e.scissorTest=!1,Cl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===io||e.mapping===ro?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),td=this._renderer.getRenderTarget(),nd=this._renderer.getActiveCubeFace(),id=this._renderer.getActiveMipmapLevel(),rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:Ua,format:Bn,colorSpace:un,depthBuffer:!1},r=Ag(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ag(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zA(s)),this._blurMaterial=HA(s,e,t)}return r}_compileMaterial(e){const t=new gn(this._lodPlanes[0],e);this._renderer.compile(t,ed)}_sceneToCubeUV(e,t,i,r,s){const l=new on(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(Eg),d.toneMapping=gr,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null));const _=new Gr({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1}),m=new gn(new Fa,_);let h=!1;const v=e.background;v?v.isColor&&(_.color.copy(v),e.background=null,h=!0):(_.color.copy(Eg),h=!0);for(let x=0;x<6;x++){const y=x%3;y===0?(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[x],s.y,s.z)):y===1?(l.up.set(0,0,c[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[x],s.z)):(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[x]));const R=this._cubeSize;Cl(r,y*R,x>2?R:0,R,R),d.setRenderTarget(r),h&&d.render(m,l),d.render(e,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=p,d.autoClear=f,e.background=v}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===io||e.mapping===ro;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new gn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Cl(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,ed)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Tg[(r-s-1)%Tg.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new gn(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*kr-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):kr;m>kr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${kr}`);const h=[];let v=0;for(let A=0;A<kr;++A){const P=A/_,w=Math.exp(-P*P/2);h.push(w),A===0?v+=w:A<m&&(v+=2*w)}for(let A=0;A<h.length;A++)h[A]=h[A]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-i;const y=this._sizeLods[r],R=3*y*(r>x-Os?r-x+Os:0),b=4*(this._cubeSize-y);Cl(t,R,b,3*y,2*y),l.setRenderTarget(t),l.render(d,ed)}}function zA(n){const e=[],t=[],i=[];let r=n;const s=n-Os+1+Mg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Os?l=Mg[o-n+Os-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,_=3,m=2,h=1,v=new Float32Array(_*g*p),x=new Float32Array(m*g*p),y=new Float32Array(h*g*p);for(let b=0;b<p;b++){const A=b%3*2/3-1,P=b>2?0:-1,w=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];v.set(w,_*g*b),x.set(f,m*g*b);const E=[b,b,b,b,b,b];y.set(E,h*g*b)}const R=new vi;R.setAttribute("position",new cn(v,_)),R.setAttribute("uv",new cn(x,m)),R.setAttribute("faceIndex",new cn(y,h)),e.push(R),r>Os&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ag(n,e,t){const i=new es(n,e,t);return i.texture.mapping=Wc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Cl(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function HA(n,e,t){const i=new Float32Array(kr),r=new F(0,1,0);return new xr({name:"SphericalGaussianBlur",defines:{n:kr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:dp(),fragmentShader:`

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
		`,blending:mr,depthTest:!1,depthWrite:!1})}function bg(){return new xr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dp(),fragmentShader:`

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
		`,blending:mr,depthTest:!1,depthWrite:!1})}function Rg(){return new xr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function dp(){return`

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
	`}function VA(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===pf||l===mf,u=l===io||l===ro;if(c||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new wg(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new wg(n)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function GA(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Xs("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function jA(n,e,t,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const p in f)e.update(f[p],n.ARRAY_BUFFER)}function c(d){const f=[],p=d.index,g=d.attributes.position;let _=0;if(p!==null){const v=p.array;_=p.version;for(let x=0,y=v.length;x<y;x+=3){const R=v[x+0],b=v[x+1],A=v[x+2];f.push(R,b,b,A,A,R)}}else if(g!==void 0){const v=g.array;_=g.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const R=x+0,b=x+1,A=x+2;f.push(R,b,b,A,A,R)}}else return;const m=new(Kv(f)?tx:ex)(f,1);m.version=_;const h=s.get(d);h&&e.remove(h),s.set(d,m)}function u(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function WA(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,s,f*o),t.update(p,i,1)}function c(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,f*o,g),t.update(p,i,g))}function u(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];t.update(m,i,1)}function d(f,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)c(f[h]/o,p[h],_[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,_,0,g);let h=0;for(let v=0;v<g;v++)h+=p[v]*_[v];t.update(h,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function XA(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function YA(n,e,t){const i=new WeakMap,r=new nt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let E=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",E)};var p=E;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let R=a.attributes.position.count*y,b=1;R>e.maxTextureSize&&(b=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const A=new Float32Array(R*b*4*d),P=new Zv(A,R,b,d);P.type=Qn,P.needsUpdate=!0;const w=y*4;for(let N=0;N<d;N++){const V=h[N],H=v[N],W=x[N],Z=R*b*4*N;for(let $=0;$<V.count;$++){const Q=$*w;g===!0&&(r.fromBufferAttribute(V,$),A[Z+Q+0]=r.x,A[Z+Q+1]=r.y,A[Z+Q+2]=r.z,A[Z+Q+3]=0),_===!0&&(r.fromBufferAttribute(H,$),A[Z+Q+4]=r.x,A[Z+Q+5]=r.y,A[Z+Q+6]=r.z,A[Z+Q+7]=0),m===!0&&(r.fromBufferAttribute(W,$),A[Z+Q+8]=r.x,A[Z+Q+9]=r.y,A[Z+Q+10]=r.z,A[Z+Q+11]=W.itemSize===4?r.w:1)}}f={count:d,texture:P,size:new Ke(R,b)},i.set(a,f),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function $A(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const px=new Gt,Cg=new cx(1,1),mx=new Zv,gx=new zE,_x=new rx,Pg=[],Ng=[],Lg=new Float32Array(16),Dg=new Float32Array(9),Ig=new Float32Array(4);function xo(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Pg[r];if(s===void 0&&(s=new Float32Array(r),Pg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Ft(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ot(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function $c(n,e){let t=Ng[e];t===void 0&&(t=new Int32Array(e),Ng[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function qA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function KA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2fv(this.addr,e),Ot(t,e)}}function ZA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;n.uniform3fv(this.addr,e),Ot(t,e)}}function QA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4fv(this.addr,e),Ot(t,e)}}function JA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,i))return;Ig.set(i),n.uniformMatrix2fv(this.addr,!1,Ig),Ot(t,i)}}function eb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,i))return;Dg.set(i),n.uniformMatrix3fv(this.addr,!1,Dg),Ot(t,i)}}function tb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,i))return;Lg.set(i),n.uniformMatrix4fv(this.addr,!1,Lg),Ot(t,i)}}function nb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function ib(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2iv(this.addr,e),Ot(t,e)}}function rb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;n.uniform3iv(this.addr,e),Ot(t,e)}}function sb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4iv(this.addr,e),Ot(t,e)}}function ob(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ab(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2uiv(this.addr,e),Ot(t,e)}}function lb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;n.uniform3uiv(this.addr,e),Ot(t,e)}}function cb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4uiv(this.addr,e),Ot(t,e)}}function ub(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Cg.compareFunction=qv,s=Cg):s=px,t.setTexture2D(e||s,r)}function db(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||gx,r)}function fb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||_x,r)}function hb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||mx,r)}function pb(n){switch(n){case 5126:return qA;case 35664:return KA;case 35665:return ZA;case 35666:return QA;case 35674:return JA;case 35675:return eb;case 35676:return tb;case 5124:case 35670:return nb;case 35667:case 35671:return ib;case 35668:case 35672:return rb;case 35669:case 35673:return sb;case 5125:return ob;case 36294:return ab;case 36295:return lb;case 36296:return cb;case 35678:case 36198:case 36298:case 36306:case 35682:return ub;case 35679:case 36299:case 36307:return db;case 35680:case 36300:case 36308:case 36293:return fb;case 36289:case 36303:case 36311:case 36292:return hb}}function mb(n,e){n.uniform1fv(this.addr,e)}function gb(n,e){const t=xo(e,this.size,2);n.uniform2fv(this.addr,t)}function _b(n,e){const t=xo(e,this.size,3);n.uniform3fv(this.addr,t)}function vb(n,e){const t=xo(e,this.size,4);n.uniform4fv(this.addr,t)}function xb(n,e){const t=xo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function yb(n,e){const t=xo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Sb(n,e){const t=xo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Mb(n,e){n.uniform1iv(this.addr,e)}function Eb(n,e){n.uniform2iv(this.addr,e)}function Tb(n,e){n.uniform3iv(this.addr,e)}function wb(n,e){n.uniform4iv(this.addr,e)}function Ab(n,e){n.uniform1uiv(this.addr,e)}function bb(n,e){n.uniform2uiv(this.addr,e)}function Rb(n,e){n.uniform3uiv(this.addr,e)}function Cb(n,e){n.uniform4uiv(this.addr,e)}function Pb(n,e,t){const i=this.cache,r=e.length,s=$c(t,r);Ft(i,s)||(n.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||px,s[o])}function Nb(n,e,t){const i=this.cache,r=e.length,s=$c(t,r);Ft(i,s)||(n.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||gx,s[o])}function Lb(n,e,t){const i=this.cache,r=e.length,s=$c(t,r);Ft(i,s)||(n.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||_x,s[o])}function Db(n,e,t){const i=this.cache,r=e.length,s=$c(t,r);Ft(i,s)||(n.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||mx,s[o])}function Ib(n){switch(n){case 5126:return mb;case 35664:return gb;case 35665:return _b;case 35666:return vb;case 35674:return xb;case 35675:return yb;case 35676:return Sb;case 5124:case 35670:return Mb;case 35667:case 35671:return Eb;case 35668:case 35672:return Tb;case 35669:case 35673:return wb;case 5125:return Ab;case 36294:return bb;case 36295:return Rb;case 36296:return Cb;case 35678:case 36198:case 36298:case 36306:case 35682:return Pb;case 35679:case 36299:case 36307:return Nb;case 35680:case 36300:case 36308:case 36293:return Lb;case 36289:case 36303:case 36311:case 36292:return Db}}class Ub{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=pb(t.type)}}class Fb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ib(t.type)}}class Ob{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const sd=/(\w+)(\])?(\[|\.)?/g;function Ug(n,e){n.seq.push(e),n.map[e.id]=e}function kb(n,e,t){const i=n.name,r=i.length;for(sd.lastIndex=0;;){const s=sd.exec(i),o=sd.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Ug(t,c===void 0?new Ub(a,n,e):new Fb(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Ob(a),Ug(t,d)),t=d}}}class ql{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);kb(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Fg(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Bb=37297;let zb=0;function Hb(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Og=new Be;function Vb(n){Qe._getMatrix(Og,Qe.workingColorSpace,n);const e=`mat3( ${Og.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(n)){case wc:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function kg(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+Hb(n.getShaderSource(e),a)}else return s}function Gb(n,e){const t=Vb(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function jb(n,e){let t;switch(e){case KM:t="Linear";break;case ZM:t="Reinhard";break;case QM:t="Cineon";break;case JM:t="ACESFilmic";break;case tE:t="AgX";break;case nE:t="Neutral";break;case eE:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Pl=new F;function Wb(){Qe.getLuminanceCoefficients(Pl);const n=Pl.x.toFixed(4),e=Pl.y.toFixed(4),t=Pl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xb(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jo).join(`
`)}function Yb(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function $b(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function jo(n){return n!==""}function Bg(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zg(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xf(n){return n.replace(qb,Zb)}const Kb=new Map;function Zb(n,e){let t=ze[e];if(t===void 0){const i=Kb.get(e);if(i!==void 0)t=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Xf(t)}const Qb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hg(n){return n.replace(Qb,Jb)}function Jb(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Vg(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function eR(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Uv?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Fv?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===bi&&(e="SHADOWMAP_TYPE_VSM"),e}function tR(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case io:case ro:e="ENVMAP_TYPE_CUBE";break;case Wc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function nR(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ro:e="ENVMAP_MODE_REFRACTION";break}return e}function iR(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ov:e="ENVMAP_BLENDING_MULTIPLY";break;case $M:e="ENVMAP_BLENDING_MIX";break;case qM:e="ENVMAP_BLENDING_ADD";break}return e}function rR(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function sR(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=eR(t),c=tR(t),u=nR(t),d=iR(t),f=rR(t),p=Xb(t),g=Yb(s),_=r.createProgram();let m,h,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(jo).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(jo).join(`
`),h.length>0&&(h+=`
`)):(m=[Vg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jo).join(`
`),h=[Vg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gr?"#define TONE_MAPPING":"",t.toneMapping!==gr?ze.tonemapping_pars_fragment:"",t.toneMapping!==gr?jb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,Gb("linearToOutputTexel",t.outputColorSpace),Wb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(jo).join(`
`)),o=Xf(o),o=Bg(o,t),o=zg(o,t),a=Xf(a),a=Bg(a,t),a=zg(a,t),o=Hg(o),a=Hg(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===km?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===km?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const x=v+m+o,y=v+h+a,R=Fg(r,r.VERTEX_SHADER,x),b=Fg(r,r.FRAGMENT_SHADER,y);r.attachShader(_,R),r.attachShader(_,b),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function A(N){if(n.debug.checkShaderErrors){const V=r.getProgramInfoLog(_)||"",H=r.getShaderInfoLog(R)||"",W=r.getShaderInfoLog(b)||"",Z=V.trim(),$=H.trim(),Q=W.trim();let D=!0,X=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(D=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,R,b);else{const q=kg(r,R,"vertex"),ce=kg(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+Z+`
`+q+`
`+ce)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):($===""||Q==="")&&(X=!1);X&&(N.diagnostics={runnable:D,programLog:Z,vertexShader:{log:$,prefix:m},fragmentShader:{log:Q,prefix:h}})}r.deleteShader(R),r.deleteShader(b),P=new ql(r,_),w=$b(r,_)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(_,Bb)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zb++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=b,this}let oR=0;class aR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new lR(e),t.set(e,i)),i}}class lR{constructor(e){this.id=oR++,this.code=e,this.usedTimes=0}}function cR(n,e,t,i,r,s,o){const a=new Qv,l=new aR,c=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,E,N,V,H){const W=V.fog,Z=H.geometry,$=w.isMeshStandardMaterial?V.environment:null,Q=(w.isMeshStandardMaterial?t:e).get(w.envMap||$),D=Q&&Q.mapping===Wc?Q.image.height:null,X=g[w.type];w.precision!==null&&(p=r.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const q=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ce=q!==void 0?q.length:0;let ye=0;Z.morphAttributes.position!==void 0&&(ye=1),Z.morphAttributes.normal!==void 0&&(ye=2),Z.morphAttributes.color!==void 0&&(ye=3);let it,Ge,G,oe;if(X){const st=ai[X];it=st.vertexShader,Ge=st.fragmentShader}else it=w.vertexShader,Ge=w.fragmentShader,l.update(w),G=l.getVertexShaderID(w),oe=l.getFragmentShaderID(w);const ie=n.getRenderTarget(),Ce=n.state.buffers.depth.getReversed(),ve=H.isInstancedMesh===!0,pe=H.isBatchedMesh===!0,Je=!!w.map,je=!!w.matcap,L=!!Q,rt=!!w.aoMap,Ne=!!w.lightMap,Ze=!!w.bumpMap,Ee=!!w.normalMap,vt=!!w.displacementMap,xe=!!w.emissiveMap,Ve=!!w.metalnessMap,kt=!!w.roughnessMap,Pt=w.anisotropy>0,C=w.clearcoat>0,S=w.dispersion>0,k=w.iridescence>0,Y=w.sheen>0,J=w.transmission>0,j=Pt&&!!w.anisotropyMap,Re=C&&!!w.clearcoatMap,ae=C&&!!w.clearcoatNormalMap,Te=C&&!!w.clearcoatRoughnessMap,we=k&&!!w.iridescenceMap,re=k&&!!w.iridescenceThicknessMap,he=Y&&!!w.sheenColorMap,Ie=Y&&!!w.sheenRoughnessMap,Ae=!!w.specularMap,de=!!w.specularColorMap,ke=!!w.specularIntensityMap,I=J&&!!w.transmissionMap,se=J&&!!w.thicknessMap,le=!!w.gradientMap,_e=!!w.alphaMap,te=w.alphaTest>0,K=!!w.alphaHash,Me=!!w.extensions;let Oe=gr;w.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Oe=n.toneMapping);const ft={shaderID:X,shaderType:w.type,shaderName:w.name,vertexShader:it,fragmentShader:Ge,defines:w.defines,customVertexShaderID:G,customFragmentShaderID:oe,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:pe,batchingColor:pe&&H._colorsTexture!==null,instancing:ve,instancingColor:ve&&H.instanceColor!==null,instancingMorph:ve&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ie===null?n.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:un,alphaToCoverage:!!w.alphaToCoverage,map:Je,matcap:je,envMap:L,envMapMode:L&&Q.mapping,envMapCubeUVHeight:D,aoMap:rt,lightMap:Ne,bumpMap:Ze,normalMap:Ee,displacementMap:f&&vt,emissiveMap:xe,normalMapObjectSpace:Ee&&w.normalMapType===lE,normalMapTangentSpace:Ee&&w.normalMapType===$v,metalnessMap:Ve,roughnessMap:kt,anisotropy:Pt,anisotropyMap:j,clearcoat:C,clearcoatMap:Re,clearcoatNormalMap:ae,clearcoatRoughnessMap:Te,dispersion:S,iridescence:k,iridescenceMap:we,iridescenceThicknessMap:re,sheen:Y,sheenColorMap:he,sheenRoughnessMap:Ie,specularMap:Ae,specularColorMap:de,specularIntensityMap:ke,transmission:J,transmissionMap:I,thicknessMap:se,gradientMap:le,opaque:w.transparent===!1&&w.blending===Ws&&w.alphaToCoverage===!1,alphaMap:_e,alphaTest:te,alphaHash:K,combine:w.combine,mapUv:Je&&_(w.map.channel),aoMapUv:rt&&_(w.aoMap.channel),lightMapUv:Ne&&_(w.lightMap.channel),bumpMapUv:Ze&&_(w.bumpMap.channel),normalMapUv:Ee&&_(w.normalMap.channel),displacementMapUv:vt&&_(w.displacementMap.channel),emissiveMapUv:xe&&_(w.emissiveMap.channel),metalnessMapUv:Ve&&_(w.metalnessMap.channel),roughnessMapUv:kt&&_(w.roughnessMap.channel),anisotropyMapUv:j&&_(w.anisotropyMap.channel),clearcoatMapUv:Re&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:ae&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:re&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:he&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&_(w.sheenRoughnessMap.channel),specularMapUv:Ae&&_(w.specularMap.channel),specularColorMapUv:de&&_(w.specularColorMap.channel),specularIntensityMapUv:ke&&_(w.specularIntensityMap.channel),transmissionMapUv:I&&_(w.transmissionMap.channel),thicknessMapUv:se&&_(w.thicknessMap.channel),alphaMapUv:_e&&_(w.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Ee||Pt),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Z.attributes.uv&&(Je||_e),fog:!!W,useFog:w.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ce,skinning:H.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:ye,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:Oe,decodeVideoTexture:Je&&w.map.isVideoTexture===!0&&Qe.getTransfer(w.map.colorSpace)===ut,decodeVideoTextureEmissive:xe&&w.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(w.emissiveMap.colorSpace)===ut,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ci,flipSided:w.side===yn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Me&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&w.extensions.multiDraw===!0||pe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return ft.vertexUv1s=c.has(1),ft.vertexUv2s=c.has(2),ft.vertexUv3s=c.has(3),c.clear(),ft}function h(w){const E=[];if(w.shaderID?E.push(w.shaderID):(E.push(w.customVertexShaderID),E.push(w.customFragmentShaderID)),w.defines!==void 0)for(const N in w.defines)E.push(N),E.push(w.defines[N]);return w.isRawShaderMaterial===!1&&(v(E,w),x(E,w),E.push(n.outputColorSpace)),E.push(w.customProgramCacheKey),E.join()}function v(w,E){w.push(E.precision),w.push(E.outputColorSpace),w.push(E.envMapMode),w.push(E.envMapCubeUVHeight),w.push(E.mapUv),w.push(E.alphaMapUv),w.push(E.lightMapUv),w.push(E.aoMapUv),w.push(E.bumpMapUv),w.push(E.normalMapUv),w.push(E.displacementMapUv),w.push(E.emissiveMapUv),w.push(E.metalnessMapUv),w.push(E.roughnessMapUv),w.push(E.anisotropyMapUv),w.push(E.clearcoatMapUv),w.push(E.clearcoatNormalMapUv),w.push(E.clearcoatRoughnessMapUv),w.push(E.iridescenceMapUv),w.push(E.iridescenceThicknessMapUv),w.push(E.sheenColorMapUv),w.push(E.sheenRoughnessMapUv),w.push(E.specularMapUv),w.push(E.specularColorMapUv),w.push(E.specularIntensityMapUv),w.push(E.transmissionMapUv),w.push(E.thicknessMapUv),w.push(E.combine),w.push(E.fogExp2),w.push(E.sizeAttenuation),w.push(E.morphTargetsCount),w.push(E.morphAttributeCount),w.push(E.numDirLights),w.push(E.numPointLights),w.push(E.numSpotLights),w.push(E.numSpotLightMaps),w.push(E.numHemiLights),w.push(E.numRectAreaLights),w.push(E.numDirLightShadows),w.push(E.numPointLightShadows),w.push(E.numSpotLightShadows),w.push(E.numSpotLightShadowsWithMaps),w.push(E.numLightProbes),w.push(E.shadowMapType),w.push(E.toneMapping),w.push(E.numClippingPlanes),w.push(E.numClipIntersection),w.push(E.depthPacking)}function x(w,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),E.gradientMap&&a.enable(22),w.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),w.push(a.mask)}function y(w){const E=g[w.type];let N;if(E){const V=ai[E];N=JE.clone(V.uniforms)}else N=w.uniforms;return N}function R(w,E){let N;for(let V=0,H=u.length;V<H;V++){const W=u[V];if(W.cacheKey===E){N=W,++N.usedTimes;break}}return N===void 0&&(N=new sR(n,E,w,s),u.push(N)),N}function b(w){if(--w.usedTimes===0){const E=u.indexOf(w);u[E]=u[u.length-1],u.pop(),w.destroy()}}function A(w){l.remove(w)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:y,acquireProgram:R,releaseProgram:b,releaseShaderCache:A,programs:u,dispose:P}}function uR(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function dR(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Gg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function jg(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,p,g,_,m){let h=n[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},n[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=_,h.group=m),e++,h}function a(d,f,p,g,_,m){const h=o(d,f,p,g,_,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function l(d,f,p,g,_,m){const h=o(d,f,p,g,_,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function c(d,f){t.length>1&&t.sort(d||dR),i.length>1&&i.sort(f||Gg),r.length>1&&r.sort(f||Gg)}function u(){for(let d=e,f=n.length;d<f;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function fR(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new jg,n.set(i,[o])):r>=s.length?(o=new jg,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function hR(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Fe};break;case"SpotLight":t={position:new F,direction:new F,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function pR(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let mR=0;function gR(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function _R(n){const e=new hR,t=pR(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);const r=new F,s=new He,o=new He;function a(c){let u=0,d=0,f=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,g=0,_=0,m=0,h=0,v=0,x=0,y=0,R=0,b=0,A=0;c.sort(gR);for(let w=0,E=c.length;w<E;w++){const N=c[w],V=N.color,H=N.intensity,W=N.distance,Z=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)u+=V.r*H,d+=V.g*H,f+=V.b*H;else if(N.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(N.sh.coefficients[$],H);A++}else if(N.isDirectionalLight){const $=e.get(N);if($.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const Q=N.shadow,D=t.get(N);D.shadowIntensity=Q.intensity,D.shadowBias=Q.bias,D.shadowNormalBias=Q.normalBias,D.shadowRadius=Q.radius,D.shadowMapSize=Q.mapSize,i.directionalShadow[p]=D,i.directionalShadowMap[p]=Z,i.directionalShadowMatrix[p]=N.shadow.matrix,v++}i.directional[p]=$,p++}else if(N.isSpotLight){const $=e.get(N);$.position.setFromMatrixPosition(N.matrixWorld),$.color.copy(V).multiplyScalar(H),$.distance=W,$.coneCos=Math.cos(N.angle),$.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),$.decay=N.decay,i.spot[_]=$;const Q=N.shadow;if(N.map&&(i.spotLightMap[R]=N.map,R++,Q.updateMatrices(N),N.castShadow&&b++),i.spotLightMatrix[_]=Q.matrix,N.castShadow){const D=t.get(N);D.shadowIntensity=Q.intensity,D.shadowBias=Q.bias,D.shadowNormalBias=Q.normalBias,D.shadowRadius=Q.radius,D.shadowMapSize=Q.mapSize,i.spotShadow[_]=D,i.spotShadowMap[_]=Z,y++}_++}else if(N.isRectAreaLight){const $=e.get(N);$.color.copy(V).multiplyScalar(H),$.halfWidth.set(N.width*.5,0,0),$.halfHeight.set(0,N.height*.5,0),i.rectArea[m]=$,m++}else if(N.isPointLight){const $=e.get(N);if($.color.copy(N.color).multiplyScalar(N.intensity),$.distance=N.distance,$.decay=N.decay,N.castShadow){const Q=N.shadow,D=t.get(N);D.shadowIntensity=Q.intensity,D.shadowBias=Q.bias,D.shadowNormalBias=Q.normalBias,D.shadowRadius=Q.radius,D.shadowMapSize=Q.mapSize,D.shadowCameraNear=Q.camera.near,D.shadowCameraFar=Q.camera.far,i.pointShadow[g]=D,i.pointShadowMap[g]=Z,i.pointShadowMatrix[g]=N.shadow.matrix,x++}i.point[g]=$,g++}else if(N.isHemisphereLight){const $=e.get(N);$.skyColor.copy(N.color).multiplyScalar(H),$.groundColor.copy(N.groundColor).multiplyScalar(H),i.hemi[h]=$,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const P=i.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==h||P.numDirectionalShadows!==v||P.numPointShadows!==x||P.numSpotShadows!==y||P.numSpotMaps!==R||P.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=y+R-b,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=A,P.directionalLength=p,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=h,P.numDirectionalShadows=v,P.numPointShadows=x,P.numSpotShadows=y,P.numSpotMaps=R,P.numLightProbes=A,i.version=mR++)}function l(c,u){let d=0,f=0,p=0,g=0,_=0;const m=u.matrixWorldInverse;for(let h=0,v=c.length;h<v;h++){const x=c[h];if(x.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),d++}else if(x.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const y=i.hemi[_];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Wg(n){const e=new _R(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function vR(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Wg(n),e.set(r,[a])):s>=o.length?(a=new Wg(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const xR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yR=`uniform sampler2D shadow_pass;
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
}`;function SR(n,e,t){let i=new rp;const r=new Ke,s=new Ke,o=new nt,a=new v1({depthPacking:aE}),l=new x1,c={},u=t.maxTextureSize,d={[Vi]:yn,[yn]:Vi,[ci]:ci},f=new xr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:xR,fragmentShader:yR}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new vi;g.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new gn(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uv;let h=this.type;this.render=function(b,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const w=n.getRenderTarget(),E=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),V=n.state;V.setBlending(mr),V.buffers.depth.getReversed()?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const H=h!==bi&&this.type===bi,W=h===bi&&this.type!==bi;for(let Z=0,$=b.length;Z<$;Z++){const Q=b[Z],D=Q.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const X=D.getFrameExtents();if(r.multiply(X),s.copy(D.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/X.x),r.x=s.x*X.x,D.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/X.y),r.y=s.y*X.y,D.mapSize.y=s.y)),D.map===null||H===!0||W===!0){const ce=this.type!==bi?{minFilter:ln,magFilter:ln}:{};D.map!==null&&D.map.dispose(),D.map=new es(r.x,r.y,ce),D.map.texture.name=Q.name+".shadowMap",D.camera.updateProjectionMatrix()}n.setRenderTarget(D.map),n.clear();const q=D.getViewportCount();for(let ce=0;ce<q;ce++){const ye=D.getViewport(ce);o.set(s.x*ye.x,s.y*ye.y,s.x*ye.z,s.y*ye.w),V.viewport(o),D.updateMatrices(Q,ce),i=D.getFrustum(),y(A,P,D.camera,Q,this.type)}D.isPointLightShadow!==!0&&this.type===bi&&v(D,P),D.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(w,E,N)};function v(b,A){const P=e.update(_);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new es(r.x,r.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(A,null,P,f,_,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(A,null,P,p,_,null)}function x(b,A,P,w){let E=null;const N=P.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(N!==void 0)E=N;else if(E=P.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const V=E.uuid,H=A.uuid;let W=c[V];W===void 0&&(W={},c[V]=W);let Z=W[H];Z===void 0&&(Z=E.clone(),W[H]=Z,A.addEventListener("dispose",R)),E=Z}if(E.visible=A.visible,E.wireframe=A.wireframe,w===bi?E.side=A.shadowSide!==null?A.shadowSide:A.side:E.side=A.shadowSide!==null?A.shadowSide:d[A.side],E.alphaMap=A.alphaMap,E.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,E.map=A.map,E.clipShadows=A.clipShadows,E.clippingPlanes=A.clippingPlanes,E.clipIntersection=A.clipIntersection,E.displacementMap=A.displacementMap,E.displacementScale=A.displacementScale,E.displacementBias=A.displacementBias,E.wireframeLinewidth=A.wireframeLinewidth,E.linewidth=A.linewidth,P.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const V=n.properties.get(E);V.light=P}return E}function y(b,A,P,w,E){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&E===bi)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,b.matrixWorld);const H=e.update(b),W=b.material;if(Array.isArray(W)){const Z=H.groups;for(let $=0,Q=Z.length;$<Q;$++){const D=Z[$],X=W[D.materialIndex];if(X&&X.visible){const q=x(b,X,w,E);b.onBeforeShadow(n,b,A,P,H,q,D),n.renderBufferDirect(P,null,H,q,b,D),b.onAfterShadow(n,b,A,P,H,q,D)}}}else if(W.visible){const Z=x(b,W,w,E);b.onBeforeShadow(n,b,A,P,H,Z,null),n.renderBufferDirect(P,null,H,Z,b,null),b.onAfterShadow(n,b,A,P,H,Z,null)}}const V=b.children;for(let H=0,W=V.length;H<W;H++)y(V[H],A,P,w,E)}function R(b){b.target.removeEventListener("dispose",R);for(const P in c){const w=c[P],E=b.target.uuid;E in w&&(w[E].dispose(),delete w[E])}}}const MR={[af]:lf,[cf]:ff,[uf]:hf,[no]:df,[lf]:af,[ff]:cf,[hf]:uf,[df]:no};function ER(n,e){function t(){let I=!1;const se=new nt;let le=null;const _e=new nt(0,0,0,0);return{setMask:function(te){le!==te&&!I&&(n.colorMask(te,te,te,te),le=te)},setLocked:function(te){I=te},setClear:function(te,K,Me,Oe,ft){ft===!0&&(te*=Oe,K*=Oe,Me*=Oe),se.set(te,K,Me,Oe),_e.equals(se)===!1&&(n.clearColor(te,K,Me,Oe),_e.copy(se))},reset:function(){I=!1,le=null,_e.set(-1,0,0,0)}}}function i(){let I=!1,se=!1,le=null,_e=null,te=null;return{setReversed:function(K){if(se!==K){const Me=e.get("EXT_clip_control");K?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT),se=K;const Oe=te;te=null,this.setClear(Oe)}},getReversed:function(){return se},setTest:function(K){K?ie(n.DEPTH_TEST):Ce(n.DEPTH_TEST)},setMask:function(K){le!==K&&!I&&(n.depthMask(K),le=K)},setFunc:function(K){if(se&&(K=MR[K]),_e!==K){switch(K){case af:n.depthFunc(n.NEVER);break;case lf:n.depthFunc(n.ALWAYS);break;case cf:n.depthFunc(n.LESS);break;case no:n.depthFunc(n.LEQUAL);break;case uf:n.depthFunc(n.EQUAL);break;case df:n.depthFunc(n.GEQUAL);break;case ff:n.depthFunc(n.GREATER);break;case hf:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}_e=K}},setLocked:function(K){I=K},setClear:function(K){te!==K&&(se&&(K=1-K),n.clearDepth(K),te=K)},reset:function(){I=!1,le=null,_e=null,te=null,se=!1}}}function r(){let I=!1,se=null,le=null,_e=null,te=null,K=null,Me=null,Oe=null,ft=null;return{setTest:function(st){I||(st?ie(n.STENCIL_TEST):Ce(n.STENCIL_TEST))},setMask:function(st){se!==st&&!I&&(n.stencilMask(st),se=st)},setFunc:function(st,yi,ri){(le!==st||_e!==yi||te!==ri)&&(n.stencilFunc(st,yi,ri),le=st,_e=yi,te=ri)},setOp:function(st,yi,ri){(K!==st||Me!==yi||Oe!==ri)&&(n.stencilOp(st,yi,ri),K=st,Me=yi,Oe=ri)},setLocked:function(st){I=st},setClear:function(st){ft!==st&&(n.clearStencil(st),ft=st)},reset:function(){I=!1,se=null,le=null,_e=null,te=null,K=null,Me=null,Oe=null,ft=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,p=[],g=null,_=!1,m=null,h=null,v=null,x=null,y=null,R=null,b=null,A=new Fe(0,0,0),P=0,w=!1,E=null,N=null,V=null,H=null,W=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,Q=0;const D=n.getParameter(n.VERSION);D.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(D)[1]),$=Q>=1):D.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),$=Q>=2);let X=null,q={};const ce=n.getParameter(n.SCISSOR_BOX),ye=n.getParameter(n.VIEWPORT),it=new nt().fromArray(ce),Ge=new nt().fromArray(ye);function G(I,se,le,_e){const te=new Uint8Array(4),K=n.createTexture();n.bindTexture(I,K),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Me=0;Me<le;Me++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(se,0,n.RGBA,1,1,_e,0,n.RGBA,n.UNSIGNED_BYTE,te):n.texImage2D(se+Me,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,te);return K}const oe={};oe[n.TEXTURE_2D]=G(n.TEXTURE_2D,n.TEXTURE_2D,1),oe[n.TEXTURE_CUBE_MAP]=G(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[n.TEXTURE_2D_ARRAY]=G(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),oe[n.TEXTURE_3D]=G(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ie(n.DEPTH_TEST),o.setFunc(no),Ze(!1),Ee(Cm),ie(n.CULL_FACE),rt(mr);function ie(I){u[I]!==!0&&(n.enable(I),u[I]=!0)}function Ce(I){u[I]!==!1&&(n.disable(I),u[I]=!1)}function ve(I,se){return d[I]!==se?(n.bindFramebuffer(I,se),d[I]=se,I===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=se),I===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=se),!0):!1}function pe(I,se){let le=p,_e=!1;if(I){le=f.get(se),le===void 0&&(le=[],f.set(se,le));const te=I.textures;if(le.length!==te.length||le[0]!==n.COLOR_ATTACHMENT0){for(let K=0,Me=te.length;K<Me;K++)le[K]=n.COLOR_ATTACHMENT0+K;le.length=te.length,_e=!0}}else le[0]!==n.BACK&&(le[0]=n.BACK,_e=!0);_e&&n.drawBuffers(le)}function Je(I){return g!==I?(n.useProgram(I),g=I,!0):!1}const je={[Or]:n.FUNC_ADD,[NM]:n.FUNC_SUBTRACT,[LM]:n.FUNC_REVERSE_SUBTRACT};je[DM]=n.MIN,je[IM]=n.MAX;const L={[UM]:n.ZERO,[FM]:n.ONE,[OM]:n.SRC_COLOR,[sf]:n.SRC_ALPHA,[GM]:n.SRC_ALPHA_SATURATE,[HM]:n.DST_COLOR,[BM]:n.DST_ALPHA,[kM]:n.ONE_MINUS_SRC_COLOR,[of]:n.ONE_MINUS_SRC_ALPHA,[VM]:n.ONE_MINUS_DST_COLOR,[zM]:n.ONE_MINUS_DST_ALPHA,[jM]:n.CONSTANT_COLOR,[WM]:n.ONE_MINUS_CONSTANT_COLOR,[XM]:n.CONSTANT_ALPHA,[YM]:n.ONE_MINUS_CONSTANT_ALPHA};function rt(I,se,le,_e,te,K,Me,Oe,ft,st){if(I===mr){_===!0&&(Ce(n.BLEND),_=!1);return}if(_===!1&&(ie(n.BLEND),_=!0),I!==PM){if(I!==m||st!==w){if((h!==Or||y!==Or)&&(n.blendEquation(n.FUNC_ADD),h=Or,y=Or),st)switch(I){case Ws:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Pm:n.blendFunc(n.ONE,n.ONE);break;case Nm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Lm:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ws:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Pm:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Nm:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lm:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}v=null,x=null,R=null,b=null,A.set(0,0,0),P=0,m=I,w=st}return}te=te||se,K=K||le,Me=Me||_e,(se!==h||te!==y)&&(n.blendEquationSeparate(je[se],je[te]),h=se,y=te),(le!==v||_e!==x||K!==R||Me!==b)&&(n.blendFuncSeparate(L[le],L[_e],L[K],L[Me]),v=le,x=_e,R=K,b=Me),(Oe.equals(A)===!1||ft!==P)&&(n.blendColor(Oe.r,Oe.g,Oe.b,ft),A.copy(Oe),P=ft),m=I,w=!1}function Ne(I,se){I.side===ci?Ce(n.CULL_FACE):ie(n.CULL_FACE);let le=I.side===yn;se&&(le=!le),Ze(le),I.blending===Ws&&I.transparent===!1?rt(mr):rt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);const _e=I.stencilWrite;a.setTest(_e),_e&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),xe(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ie(n.SAMPLE_ALPHA_TO_COVERAGE):Ce(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(I){E!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),E=I)}function Ee(I){I!==RM?(ie(n.CULL_FACE),I!==N&&(I===Cm?n.cullFace(n.BACK):I===CM?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ce(n.CULL_FACE),N=I}function vt(I){I!==V&&($&&n.lineWidth(I),V=I)}function xe(I,se,le){I?(ie(n.POLYGON_OFFSET_FILL),(H!==se||W!==le)&&(n.polygonOffset(se,le),H=se,W=le)):Ce(n.POLYGON_OFFSET_FILL)}function Ve(I){I?ie(n.SCISSOR_TEST):Ce(n.SCISSOR_TEST)}function kt(I){I===void 0&&(I=n.TEXTURE0+Z-1),X!==I&&(n.activeTexture(I),X=I)}function Pt(I,se,le){le===void 0&&(X===null?le=n.TEXTURE0+Z-1:le=X);let _e=q[le];_e===void 0&&(_e={type:void 0,texture:void 0},q[le]=_e),(_e.type!==I||_e.texture!==se)&&(X!==le&&(n.activeTexture(le),X=le),n.bindTexture(I,se||oe[I]),_e.type=I,_e.texture=se)}function C(){const I=q[X];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function S(){try{n.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function k(){try{n.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Y(){try{n.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{n.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{n.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Re(){try{n.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ae(){try{n.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Te(){try{n.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function we(){try{n.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{n.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function he(I){it.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),it.copy(I))}function Ie(I){Ge.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),Ge.copy(I))}function Ae(I,se){let le=c.get(se);le===void 0&&(le=new WeakMap,c.set(se,le));let _e=le.get(I);_e===void 0&&(_e=n.getUniformBlockIndex(se,I.name),le.set(I,_e))}function de(I,se){const _e=c.get(se).get(I);l.get(se)!==_e&&(n.uniformBlockBinding(se,_e,I.__bindingPointIndex),l.set(se,_e))}function ke(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},X=null,q={},d={},f=new WeakMap,p=[],g=null,_=!1,m=null,h=null,v=null,x=null,y=null,R=null,b=null,A=new Fe(0,0,0),P=0,w=!1,E=null,N=null,V=null,H=null,W=null,it.set(0,0,n.canvas.width,n.canvas.height),Ge.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ie,disable:Ce,bindFramebuffer:ve,drawBuffers:pe,useProgram:Je,setBlending:rt,setMaterial:Ne,setFlipSided:Ze,setCullFace:Ee,setLineWidth:vt,setPolygonOffset:xe,setScissorTest:Ve,activeTexture:kt,bindTexture:Pt,unbindTexture:C,compressedTexImage2D:S,compressedTexImage3D:k,texImage2D:we,texImage3D:re,updateUBOMapping:Ae,uniformBlockBinding:de,texStorage2D:ae,texStorage3D:Te,texSubImage2D:Y,texSubImage3D:J,compressedTexSubImage2D:j,compressedTexSubImage3D:Re,scissor:he,viewport:Ie,reset:ke}}function TR(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ke,u=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return p?new OffscreenCanvas(C,S):Ca("canvas")}function _(C,S,k){let Y=1;const J=Pt(C);if((J.width>k||J.height>k)&&(Y=k/Math.max(J.width,J.height)),Y<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const j=Math.floor(Y*J.width),Re=Math.floor(Y*J.height);d===void 0&&(d=g(j,Re));const ae=S?g(j,Re):d;return ae.width=j,ae.height=Re,ae.getContext("2d").drawImage(C,0,0,j,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+j+"x"+Re+")."),ae}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function m(C){return C.generateMipmaps}function h(C){n.generateMipmap(C)}function v(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(C,S,k,Y,J=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let j=S;if(S===n.RED&&(k===n.FLOAT&&(j=n.R32F),k===n.HALF_FLOAT&&(j=n.R16F),k===n.UNSIGNED_BYTE&&(j=n.R8)),S===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(j=n.R8UI),k===n.UNSIGNED_SHORT&&(j=n.R16UI),k===n.UNSIGNED_INT&&(j=n.R32UI),k===n.BYTE&&(j=n.R8I),k===n.SHORT&&(j=n.R16I),k===n.INT&&(j=n.R32I)),S===n.RG&&(k===n.FLOAT&&(j=n.RG32F),k===n.HALF_FLOAT&&(j=n.RG16F),k===n.UNSIGNED_BYTE&&(j=n.RG8)),S===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(j=n.RG8UI),k===n.UNSIGNED_SHORT&&(j=n.RG16UI),k===n.UNSIGNED_INT&&(j=n.RG32UI),k===n.BYTE&&(j=n.RG8I),k===n.SHORT&&(j=n.RG16I),k===n.INT&&(j=n.RG32I)),S===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(j=n.RGB8UI),k===n.UNSIGNED_SHORT&&(j=n.RGB16UI),k===n.UNSIGNED_INT&&(j=n.RGB32UI),k===n.BYTE&&(j=n.RGB8I),k===n.SHORT&&(j=n.RGB16I),k===n.INT&&(j=n.RGB32I)),S===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),k===n.UNSIGNED_INT&&(j=n.RGBA32UI),k===n.BYTE&&(j=n.RGBA8I),k===n.SHORT&&(j=n.RGBA16I),k===n.INT&&(j=n.RGBA32I)),S===n.RGB&&k===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),S===n.RGBA){const Re=J?wc:Qe.getTransfer(Y);k===n.FLOAT&&(j=n.RGBA32F),k===n.HALF_FLOAT&&(j=n.RGBA16F),k===n.UNSIGNED_BYTE&&(j=Re===ut?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function y(C,S){let k;return C?S===null||S===Jr||S===Ta?k=n.DEPTH24_STENCIL8:S===Qn?k=n.DEPTH32F_STENCIL8:S===Ea&&(k=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Jr||S===Ta?k=n.DEPTH_COMPONENT24:S===Qn?k=n.DEPTH_COMPONENT32F:S===Ea&&(k=n.DEPTH_COMPONENT16),k}function R(C,S){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==ln&&C.minFilter!==bn?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function b(C){const S=C.target;S.removeEventListener("dispose",b),P(S),S.isVideoTexture&&u.delete(S)}function A(C){const S=C.target;S.removeEventListener("dispose",A),E(S)}function P(C){const S=i.get(C);if(S.__webglInit===void 0)return;const k=C.source,Y=f.get(k);if(Y){const J=Y[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&w(C),Object.keys(Y).length===0&&f.delete(k)}i.remove(C)}function w(C){const S=i.get(C);n.deleteTexture(S.__webglTexture);const k=C.source,Y=f.get(k);delete Y[S.__cacheKey],o.memory.textures--}function E(C){const S=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(S.__webglFramebuffer[Y]))for(let J=0;J<S.__webglFramebuffer[Y].length;J++)n.deleteFramebuffer(S.__webglFramebuffer[Y][J]);else n.deleteFramebuffer(S.__webglFramebuffer[Y]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[Y])}else{if(Array.isArray(S.__webglFramebuffer))for(let Y=0;Y<S.__webglFramebuffer.length;Y++)n.deleteFramebuffer(S.__webglFramebuffer[Y]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Y=0;Y<S.__webglColorRenderbuffer.length;Y++)S.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[Y]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const k=C.textures;for(let Y=0,J=k.length;Y<J;Y++){const j=i.get(k[Y]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),o.memory.textures--),i.remove(k[Y])}i.remove(C)}let N=0;function V(){N=0}function H(){const C=N;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),N+=1,C}function W(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function Z(C,S){const k=i.get(C);if(C.isVideoTexture&&Ve(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&k.__version!==C.version){const Y=C.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(k,C,S);return}}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+S)}function $(C,S){const k=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){oe(k,C,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+S)}function Q(C,S){const k=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){oe(k,C,S);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+S)}function D(C,S){const k=i.get(C);if(C.version>0&&k.__version!==C.version){ie(k,C,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+S)}const X={[so]:n.REPEAT,[or]:n.CLAMP_TO_EDGE,[Tc]:n.MIRRORED_REPEAT},q={[ln]:n.NEAREST,[Bv]:n.NEAREST_MIPMAP_NEAREST,[Go]:n.NEAREST_MIPMAP_LINEAR,[bn]:n.LINEAR,[Gl]:n.LINEAR_MIPMAP_NEAREST,[Di]:n.LINEAR_MIPMAP_LINEAR},ce={[cE]:n.NEVER,[mE]:n.ALWAYS,[uE]:n.LESS,[qv]:n.LEQUAL,[dE]:n.EQUAL,[pE]:n.GEQUAL,[fE]:n.GREATER,[hE]:n.NOTEQUAL};function ye(C,S){if(S.type===Qn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===bn||S.magFilter===Gl||S.magFilter===Go||S.magFilter===Di||S.minFilter===bn||S.minFilter===Gl||S.minFilter===Go||S.minFilter===Di)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,X[S.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,X[S.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,X[S.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,q[S.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,q[S.minFilter]),S.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,ce[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===ln||S.minFilter!==Go&&S.minFilter!==Di||S.type===Qn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function it(C,S){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",b));const Y=S.source;let J=f.get(Y);J===void 0&&(J={},f.set(Y,J));const j=W(S);if(j!==C.__cacheKey){J[j]===void 0&&(J[j]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,k=!0),J[j].usedTimes++;const Re=J[C.__cacheKey];Re!==void 0&&(J[C.__cacheKey].usedTimes--,Re.usedTimes===0&&w(S)),C.__cacheKey=j,C.__webglTexture=J[j].texture}return k}function Ge(C,S,k){return Math.floor(Math.floor(C/k)/S)}function G(C,S,k,Y){const j=C.updateRanges;if(j.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,S.width,S.height,k,Y,S.data);else{j.sort((re,he)=>re.start-he.start);let Re=0;for(let re=1;re<j.length;re++){const he=j[Re],Ie=j[re],Ae=he.start+he.count,de=Ge(Ie.start,S.width,4),ke=Ge(he.start,S.width,4);Ie.start<=Ae+1&&de===ke&&Ge(Ie.start+Ie.count-1,S.width,4)===de?he.count=Math.max(he.count,Ie.start+Ie.count-he.start):(++Re,j[Re]=Ie)}j.length=Re+1;const ae=n.getParameter(n.UNPACK_ROW_LENGTH),Te=n.getParameter(n.UNPACK_SKIP_PIXELS),we=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,S.width);for(let re=0,he=j.length;re<he;re++){const Ie=j[re],Ae=Math.floor(Ie.start/4),de=Math.ceil(Ie.count/4),ke=Ae%S.width,I=Math.floor(Ae/S.width),se=de,le=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ke),n.pixelStorei(n.UNPACK_SKIP_ROWS,I),t.texSubImage2D(n.TEXTURE_2D,0,ke,I,se,le,k,Y,S.data)}C.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ae),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Te),n.pixelStorei(n.UNPACK_SKIP_ROWS,we)}}function oe(C,S,k){let Y=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Y=n.TEXTURE_3D);const J=it(C,S),j=S.source;t.bindTexture(Y,C.__webglTexture,n.TEXTURE0+k);const Re=i.get(j);if(j.version!==Re.__version||J===!0){t.activeTexture(n.TEXTURE0+k);const ae=Qe.getPrimaries(Qe.workingColorSpace),Te=S.colorSpace===ir?null:Qe.getPrimaries(S.colorSpace),we=S.colorSpace===ir||ae===Te?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let re=_(S.image,!1,r.maxTextureSize);re=kt(S,re);const he=s.convert(S.format,S.colorSpace),Ie=s.convert(S.type);let Ae=x(S.internalFormat,he,Ie,S.colorSpace,S.isVideoTexture);ye(Y,S);let de;const ke=S.mipmaps,I=S.isVideoTexture!==!0,se=Re.__version===void 0||J===!0,le=j.dataReady,_e=R(S,re);if(S.isDepthTexture)Ae=y(S.format===Aa,S.type),se&&(I?t.texStorage2D(n.TEXTURE_2D,1,Ae,re.width,re.height):t.texImage2D(n.TEXTURE_2D,0,Ae,re.width,re.height,0,he,Ie,null));else if(S.isDataTexture)if(ke.length>0){I&&se&&t.texStorage2D(n.TEXTURE_2D,_e,Ae,ke[0].width,ke[0].height);for(let te=0,K=ke.length;te<K;te++)de=ke[te],I?le&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,de.width,de.height,he,Ie,de.data):t.texImage2D(n.TEXTURE_2D,te,Ae,de.width,de.height,0,he,Ie,de.data);S.generateMipmaps=!1}else I?(se&&t.texStorage2D(n.TEXTURE_2D,_e,Ae,re.width,re.height),le&&G(S,re,he,Ie)):t.texImage2D(n.TEXTURE_2D,0,Ae,re.width,re.height,0,he,Ie,re.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){I&&se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_e,Ae,ke[0].width,ke[0].height,re.depth);for(let te=0,K=ke.length;te<K;te++)if(de=ke[te],S.format!==Bn)if(he!==null)if(I){if(le)if(S.layerUpdates.size>0){const Me=Sg(de.width,de.height,S.format,S.type);for(const Oe of S.layerUpdates){const ft=de.data.subarray(Oe*Me/de.data.BYTES_PER_ELEMENT,(Oe+1)*Me/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,Oe,de.width,de.height,1,he,ft)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,de.width,de.height,re.depth,he,de.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,te,Ae,de.width,de.height,re.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?le&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,de.width,de.height,re.depth,he,Ie,de.data):t.texImage3D(n.TEXTURE_2D_ARRAY,te,Ae,de.width,de.height,re.depth,0,he,Ie,de.data)}else{I&&se&&t.texStorage2D(n.TEXTURE_2D,_e,Ae,ke[0].width,ke[0].height);for(let te=0,K=ke.length;te<K;te++)de=ke[te],S.format!==Bn?he!==null?I?le&&t.compressedTexSubImage2D(n.TEXTURE_2D,te,0,0,de.width,de.height,he,de.data):t.compressedTexImage2D(n.TEXTURE_2D,te,Ae,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?le&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,de.width,de.height,he,Ie,de.data):t.texImage2D(n.TEXTURE_2D,te,Ae,de.width,de.height,0,he,Ie,de.data)}else if(S.isDataArrayTexture)if(I){if(se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_e,Ae,re.width,re.height,re.depth),le)if(S.layerUpdates.size>0){const te=Sg(re.width,re.height,S.format,S.type);for(const K of S.layerUpdates){const Me=re.data.subarray(K*te/re.data.BYTES_PER_ELEMENT,(K+1)*te/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,re.width,re.height,1,he,Ie,Me)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,he,Ie,re.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ae,re.width,re.height,re.depth,0,he,Ie,re.data);else if(S.isData3DTexture)I?(se&&t.texStorage3D(n.TEXTURE_3D,_e,Ae,re.width,re.height,re.depth),le&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,he,Ie,re.data)):t.texImage3D(n.TEXTURE_3D,0,Ae,re.width,re.height,re.depth,0,he,Ie,re.data);else if(S.isFramebufferTexture){if(se)if(I)t.texStorage2D(n.TEXTURE_2D,_e,Ae,re.width,re.height);else{let te=re.width,K=re.height;for(let Me=0;Me<_e;Me++)t.texImage2D(n.TEXTURE_2D,Me,Ae,te,K,0,he,Ie,null),te>>=1,K>>=1}}else if(ke.length>0){if(I&&se){const te=Pt(ke[0]);t.texStorage2D(n.TEXTURE_2D,_e,Ae,te.width,te.height)}for(let te=0,K=ke.length;te<K;te++)de=ke[te],I?le&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,he,Ie,de):t.texImage2D(n.TEXTURE_2D,te,Ae,he,Ie,de);S.generateMipmaps=!1}else if(I){if(se){const te=Pt(re);t.texStorage2D(n.TEXTURE_2D,_e,Ae,te.width,te.height)}le&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,he,Ie,re)}else t.texImage2D(n.TEXTURE_2D,0,Ae,he,Ie,re);m(S)&&h(Y),Re.__version=j.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function ie(C,S,k){if(S.image.length!==6)return;const Y=it(C,S),J=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+k);const j=i.get(J);if(J.version!==j.__version||Y===!0){t.activeTexture(n.TEXTURE0+k);const Re=Qe.getPrimaries(Qe.workingColorSpace),ae=S.colorSpace===ir?null:Qe.getPrimaries(S.colorSpace),Te=S.colorSpace===ir||Re===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const we=S.isCompressedTexture||S.image[0].isCompressedTexture,re=S.image[0]&&S.image[0].isDataTexture,he=[];for(let K=0;K<6;K++)!we&&!re?he[K]=_(S.image[K],!0,r.maxCubemapSize):he[K]=re?S.image[K].image:S.image[K],he[K]=kt(S,he[K]);const Ie=he[0],Ae=s.convert(S.format,S.colorSpace),de=s.convert(S.type),ke=x(S.internalFormat,Ae,de,S.colorSpace),I=S.isVideoTexture!==!0,se=j.__version===void 0||Y===!0,le=J.dataReady;let _e=R(S,Ie);ye(n.TEXTURE_CUBE_MAP,S);let te;if(we){I&&se&&t.texStorage2D(n.TEXTURE_CUBE_MAP,_e,ke,Ie.width,Ie.height);for(let K=0;K<6;K++){te=he[K].mipmaps;for(let Me=0;Me<te.length;Me++){const Oe=te[Me];S.format!==Bn?Ae!==null?I?le&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Me,0,0,Oe.width,Oe.height,Ae,Oe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Me,ke,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Me,0,0,Oe.width,Oe.height,Ae,de,Oe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Me,ke,Oe.width,Oe.height,0,Ae,de,Oe.data)}}}else{if(te=S.mipmaps,I&&se){te.length>0&&_e++;const K=Pt(he[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,_e,ke,K.width,K.height)}for(let K=0;K<6;K++)if(re){I?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,he[K].width,he[K].height,Ae,de,he[K].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ke,he[K].width,he[K].height,0,Ae,de,he[K].data);for(let Me=0;Me<te.length;Me++){const ft=te[Me].image[K].image;I?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Me+1,0,0,ft.width,ft.height,Ae,de,ft.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Me+1,ke,ft.width,ft.height,0,Ae,de,ft.data)}}else{I?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ae,de,he[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ke,Ae,de,he[K]);for(let Me=0;Me<te.length;Me++){const Oe=te[Me];I?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Me+1,0,0,Ae,de,Oe.image[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Me+1,ke,Ae,de,Oe.image[K])}}}m(S)&&h(n.TEXTURE_CUBE_MAP),j.__version=J.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Ce(C,S,k,Y,J,j){const Re=s.convert(k.format,k.colorSpace),ae=s.convert(k.type),Te=x(k.internalFormat,Re,ae,k.colorSpace),we=i.get(S),re=i.get(k);if(re.__renderTarget=S,!we.__hasExternalTextures){const he=Math.max(1,S.width>>j),Ie=Math.max(1,S.height>>j);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,j,Te,he,Ie,S.depth,0,Re,ae,null):t.texImage2D(J,j,Te,he,Ie,0,Re,ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),xe(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,J,re.__webglTexture,0,vt(S)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,J,re.__webglTexture,j),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ve(C,S,k){if(n.bindRenderbuffer(n.RENDERBUFFER,C),S.depthBuffer){const Y=S.depthTexture,J=Y&&Y.isDepthTexture?Y.type:null,j=y(S.stencilBuffer,J),Re=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=vt(S);xe(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,j,S.width,S.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,j,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,j,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Re,n.RENDERBUFFER,C)}else{const Y=S.textures;for(let J=0;J<Y.length;J++){const j=Y[J],Re=s.convert(j.format,j.colorSpace),ae=s.convert(j.type),Te=x(j.internalFormat,Re,ae,j.colorSpace),we=vt(S);k&&xe(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,we,Te,S.width,S.height):xe(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,we,Te,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Te,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function pe(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=i.get(S.depthTexture);Y.__renderTarget=S,(!Y.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Z(S.depthTexture,0);const J=Y.__webglTexture,j=vt(S);if(S.depthTexture.format===wa)xe(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(S.depthTexture.format===Aa)xe(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Je(C){const S=i.get(C),k=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const Y=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Y){const J=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Y.removeEventListener("dispose",J)};Y.addEventListener("dispose",J),S.__depthDisposeCallback=J}S.__boundDepthTexture=Y}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");const Y=C.texture.mipmaps;Y&&Y.length>0?pe(S.__webglFramebuffer[0],C):pe(S.__webglFramebuffer,C)}else if(k){S.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[Y]),S.__webglDepthbuffer[Y]===void 0)S.__webglDepthbuffer[Y]=n.createRenderbuffer(),ve(S.__webglDepthbuffer[Y],C,!1);else{const J=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,j)}}else{const Y=C.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),ve(S.__webglDepthbuffer,C,!1);else{const J=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,j)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function je(C,S,k){const Y=i.get(C);S!==void 0&&Ce(Y.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&Je(C)}function L(C){const S=C.texture,k=i.get(C),Y=i.get(S);C.addEventListener("dispose",A);const J=C.textures,j=C.isWebGLCubeRenderTarget===!0,Re=J.length>1;if(Re||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=S.version,o.memory.textures++),j){k.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[ae]=[];for(let Te=0;Te<S.mipmaps.length;Te++)k.__webglFramebuffer[ae][Te]=n.createFramebuffer()}else k.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let ae=0;ae<S.mipmaps.length;ae++)k.__webglFramebuffer[ae]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(Re)for(let ae=0,Te=J.length;ae<Te;ae++){const we=i.get(J[ae]);we.__webglTexture===void 0&&(we.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&xe(C)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ae=0;ae<J.length;ae++){const Te=J[ae];k.__webglColorRenderbuffer[ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[ae]);const we=s.convert(Te.format,Te.colorSpace),re=s.convert(Te.type),he=x(Te.internalFormat,we,re,Te.colorSpace,C.isXRRenderTarget===!0),Ie=vt(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie,he,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,k.__webglColorRenderbuffer[ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),ve(k.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),ye(n.TEXTURE_CUBE_MAP,S);for(let ae=0;ae<6;ae++)if(S.mipmaps&&S.mipmaps.length>0)for(let Te=0;Te<S.mipmaps.length;Te++)Ce(k.__webglFramebuffer[ae][Te],C,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Te);else Ce(k.__webglFramebuffer[ae],C,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(S)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let ae=0,Te=J.length;ae<Te;ae++){const we=J[ae],re=i.get(we);let he=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(he=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,re.__webglTexture),ye(he,we),Ce(k.__webglFramebuffer,C,we,n.COLOR_ATTACHMENT0+ae,he,0),m(we)&&h(he)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ae=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,Y.__webglTexture),ye(ae,S),S.mipmaps&&S.mipmaps.length>0)for(let Te=0;Te<S.mipmaps.length;Te++)Ce(k.__webglFramebuffer[Te],C,S,n.COLOR_ATTACHMENT0,ae,Te);else Ce(k.__webglFramebuffer,C,S,n.COLOR_ATTACHMENT0,ae,0);m(S)&&h(ae),t.unbindTexture()}C.depthBuffer&&Je(C)}function rt(C){const S=C.textures;for(let k=0,Y=S.length;k<Y;k++){const J=S[k];if(m(J)){const j=v(C),Re=i.get(J).__webglTexture;t.bindTexture(j,Re),h(j),t.unbindTexture()}}}const Ne=[],Ze=[];function Ee(C){if(C.samples>0){if(xe(C)===!1){const S=C.textures,k=C.width,Y=C.height;let J=n.COLOR_BUFFER_BIT;const j=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Re=i.get(C),ae=S.length>1;if(ae)for(let we=0;we<S.length;we++)t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);const Te=C.texture.mipmaps;Te&&Te.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let we=0;we<S.length;we++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),ae){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Re.__webglColorRenderbuffer[we]);const re=i.get(S[we]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,re,0)}n.blitFramebuffer(0,0,k,Y,0,0,k,Y,J,n.NEAREST),l===!0&&(Ne.length=0,Ze.length=0,Ne.push(n.COLOR_ATTACHMENT0+we),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ne.push(j),Ze.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ze)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ne))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ae)for(let we=0;we<S.length;we++){t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,Re.__webglColorRenderbuffer[we]);const re=i.get(S[we]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,re,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const S=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function vt(C){return Math.min(r.maxSamples,C.samples)}function xe(C){const S=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ve(C){const S=o.render.frame;u.get(C)!==S&&(u.set(C,S),C.update())}function kt(C,S){const k=C.colorSpace,Y=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==un&&k!==ir&&(Qe.getTransfer(k)===ut?(Y!==Bn||J!==pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),S}function Pt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=V,this.setTexture2D=Z,this.setTexture2DArray=$,this.setTexture3D=Q,this.setTextureCube=D,this.rebindTextures=je,this.setupRenderTarget=L,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=Je,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=xe}function wR(n,e){function t(i,r=ir){let s;const o=Qe.getTransfer(r);if(i===pi)return n.UNSIGNED_BYTE;if(i===$h)return n.UNSIGNED_SHORT_4_4_4_4;if(i===qh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Vv)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===zv)return n.BYTE;if(i===Hv)return n.SHORT;if(i===Ea)return n.UNSIGNED_SHORT;if(i===Yh)return n.INT;if(i===Jr)return n.UNSIGNED_INT;if(i===Qn)return n.FLOAT;if(i===Ua)return n.HALF_FLOAT;if(i===Gv)return n.ALPHA;if(i===jv)return n.RGB;if(i===Bn)return n.RGBA;if(i===wa)return n.DEPTH_COMPONENT;if(i===Aa)return n.DEPTH_STENCIL;if(i===Kh)return n.RED;if(i===Zh)return n.RED_INTEGER;if(i===Wv)return n.RG;if(i===Qh)return n.RG_INTEGER;if(i===Jh)return n.RGBA_INTEGER;if(i===jl||i===Wl||i===Xl||i===Yl)if(o===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===jl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Wl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Xl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Yl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===jl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Wl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Xl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Yl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===gf||i===_f||i===vf||i===xf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===gf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===_f)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===vf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===xf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===yf||i===Sf||i===Mf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===yf||i===Sf)return o===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Mf)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ef||i===Tf||i===wf||i===Af||i===bf||i===Rf||i===Cf||i===Pf||i===Nf||i===Lf||i===Df||i===If||i===Uf||i===Ff)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ef)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Tf)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===wf)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Af)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===bf)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Rf)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Cf)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Pf)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Nf)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Lf)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Df)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===If)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Uf)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ff)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===$l||i===Of||i===kf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===$l)return o===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Of)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===kf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Xv||i===Bf||i===zf||i===Hf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===$l)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Bf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===zf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Hf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ta?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class vx extends Gt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const AR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bR=`
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

}`;class RR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new vx(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new xr({vertexShader:AR,fragmentShader:bR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new gn(new Yc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class CR extends mo{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,g=null;const _=new RR,m={},h=t.getContextAttributes();let v=null,x=null;const y=[],R=[],b=new Ke;let A=null;const P=new on;P.viewport=new nt;const w=new on;w.viewport=new nt;const E=[P,w],N=new H1;let V=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let oe=y[G];return oe===void 0&&(oe=new Xu,y[G]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(G){let oe=y[G];return oe===void 0&&(oe=new Xu,y[G]=oe),oe.getGripSpace()},this.getHand=function(G){let oe=y[G];return oe===void 0&&(oe=new Xu,y[G]=oe),oe.getHandSpace()};function W(G){const oe=R.indexOf(G.inputSource);if(oe===-1)return;const ie=y[oe];ie!==void 0&&(ie.update(G.inputSource,G.frame,c||o),ie.dispatchEvent({type:G.type,data:G.inputSource}))}function Z(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",$);for(let G=0;G<y.length;G++){const oe=R[G];oe!==null&&(R[G]=null,y[G].disconnect(oe))}V=null,H=null,_.reset();for(const G in m)delete m[G];e.setRenderTarget(v),p=null,f=null,d=null,r=null,x=null,Ge.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(v=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",$),h.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(b),typeof XRWebGLBinding<"u"&&(d=new XRWebGLBinding(r,t)),d!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,Ce=null,ve=null;h.depth&&(ve=h.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=h.stencil?Aa:wa,Ce=h.stencil?Ta:Jr);const pe={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:s};f=d.createProjectionLayer(pe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new es(f.textureWidth,f.textureHeight,{format:Bn,type:pi,depthTexture:new cx(f.textureWidth,f.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:h.stencil,colorSpace:e.outputColorSpace,samples:h.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ie={antialias:h.antialias,alpha:!0,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ie),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new es(p.framebufferWidth,p.framebufferHeight,{format:Bn,type:pi,colorSpace:e.outputColorSpace,stencilBuffer:h.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ge.setContext(r),Ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(G){for(let oe=0;oe<G.removed.length;oe++){const ie=G.removed[oe],Ce=R.indexOf(ie);Ce>=0&&(R[Ce]=null,y[Ce].disconnect(ie))}for(let oe=0;oe<G.added.length;oe++){const ie=G.added[oe];let Ce=R.indexOf(ie);if(Ce===-1){for(let pe=0;pe<y.length;pe++)if(pe>=R.length){R.push(ie),Ce=pe;break}else if(R[pe]===null){R[pe]=ie,Ce=pe;break}if(Ce===-1)break}const ve=y[Ce];ve&&ve.connect(ie)}}const Q=new F,D=new F;function X(G,oe,ie){Q.setFromMatrixPosition(oe.matrixWorld),D.setFromMatrixPosition(ie.matrixWorld);const Ce=Q.distanceTo(D),ve=oe.projectionMatrix.elements,pe=ie.projectionMatrix.elements,Je=ve[14]/(ve[10]-1),je=ve[14]/(ve[10]+1),L=(ve[9]+1)/ve[5],rt=(ve[9]-1)/ve[5],Ne=(ve[8]-1)/ve[0],Ze=(pe[8]+1)/pe[0],Ee=Je*Ne,vt=Je*Ze,xe=Ce/(-Ne+Ze),Ve=xe*-Ne;if(oe.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Ve),G.translateZ(xe),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),ve[10]===-1)G.projectionMatrix.copy(oe.projectionMatrix),G.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const kt=Je+xe,Pt=je+xe,C=Ee-Ve,S=vt+(Ce-Ve),k=L*je/Pt*kt,Y=rt*je/Pt*kt;G.projectionMatrix.makePerspective(C,S,k,Y,kt,Pt),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function q(G,oe){oe===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(oe.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;let oe=G.near,ie=G.far;_.texture!==null&&(_.depthNear>0&&(oe=_.depthNear),_.depthFar>0&&(ie=_.depthFar)),N.near=w.near=P.near=oe,N.far=w.far=P.far=ie,(V!==N.near||H!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),V=N.near,H=N.far),N.layers.mask=G.layers.mask|6,P.layers.mask=N.layers.mask&3,w.layers.mask=N.layers.mask&5;const Ce=G.parent,ve=N.cameras;q(N,Ce);for(let pe=0;pe<ve.length;pe++)q(ve[pe],Ce);ve.length===2?X(N,P,w):N.projectionMatrix.copy(P.projectionMatrix),ce(G,N,Ce)};function ce(G,oe,ie){ie===null?G.matrix.copy(oe.matrixWorld):(G.matrix.copy(ie.matrixWorld),G.matrix.invert(),G.matrix.multiply(oe.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(oe.projectionMatrix),G.projectionMatrixInverse.copy(oe.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=oo*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(G){l=G,f!==null&&(f.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(N)},this.getCameraTexture=function(G){return m[G]};let ye=null;function it(G,oe){if(u=oe.getViewerPose(c||o),g=oe,u!==null){const ie=u.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let Ce=!1;ie.length!==N.cameras.length&&(N.cameras.length=0,Ce=!0);for(let je=0;je<ie.length;je++){const L=ie[je];let rt=null;if(p!==null)rt=p.getViewport(L);else{const Ze=d.getViewSubImage(f,L);rt=Ze.viewport,je===0&&(e.setRenderTargetTextures(x,Ze.colorTexture,Ze.depthStencilTexture),e.setRenderTarget(x))}let Ne=E[je];Ne===void 0&&(Ne=new on,Ne.layers.enable(je),Ne.viewport=new nt,E[je]=Ne),Ne.matrix.fromArray(L.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(L.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(rt.x,rt.y,rt.width,rt.height),je===0&&(N.matrix.copy(Ne.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Ce===!0&&N.cameras.push(Ne)}const ve=r.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&d){const je=d.getDepthInformation(ie[0]);je&&je.isValid&&je.texture&&_.init(je,r.renderState)}if(ve&&ve.includes("camera-access")&&(e.state.unbindTexture(),d))for(let je=0;je<ie.length;je++){const L=ie[je].camera;if(L){let rt=m[L];rt||(rt=new vx,m[L]=rt);const Ne=d.getCameraImage(L);rt.sourceTexture=Ne}}}for(let ie=0;ie<y.length;ie++){const Ce=R[ie],ve=y[ie];Ce!==null&&ve!==void 0&&ve.update(Ce,oe,c||o)}ye&&ye(G,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),g=null}const Ge=new hx;Ge.setAnimationLoop(it),this.setAnimationLoop=function(G){ye=G},this.dispose=function(){}}}const Nr=new mi,PR=new He;function NR(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,nx(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,v,x,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,y)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),_(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,v,x):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===yn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===yn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const v=e.get(h),x=v.envMap,y=v.envMapRotation;x&&(m.envMap.value=x,Nr.copy(y),Nr.x*=-1,Nr.y*=-1,Nr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Nr.y*=-1,Nr.z*=-1),m.envMapRotation.value.setFromMatrix4(PR.makeRotationFromEuler(Nr)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,v,x){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*v,m.scale.value=x*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,v){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===yn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function _(m,h){const v=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function LR(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const y=x.program;i.uniformBlockBinding(v,y)}function c(v,x){let y=r[v.id];y===void 0&&(g(v),y=u(v),r[v.id]=y,v.addEventListener("dispose",m));const R=x.program;i.updateUBOMapping(v,R);const b=e.render.frame;s[v.id]!==b&&(f(v),s[v.id]=b)}function u(v){const x=d();v.__bindingPointIndex=x;const y=n.createBuffer(),R=v.__size,b=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,R,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,y),y}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const x=r[v.id],y=v.uniforms,R=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let b=0,A=y.length;b<A;b++){const P=Array.isArray(y[b])?y[b]:[y[b]];for(let w=0,E=P.length;w<E;w++){const N=P[w];if(p(N,b,w,R)===!0){const V=N.__offset,H=Array.isArray(N.value)?N.value:[N.value];let W=0;for(let Z=0;Z<H.length;Z++){const $=H[Z],Q=_($);typeof $=="number"||typeof $=="boolean"?(N.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,V+W,N.__data)):$.isMatrix3?(N.__data[0]=$.elements[0],N.__data[1]=$.elements[1],N.__data[2]=$.elements[2],N.__data[3]=0,N.__data[4]=$.elements[3],N.__data[5]=$.elements[4],N.__data[6]=$.elements[5],N.__data[7]=0,N.__data[8]=$.elements[6],N.__data[9]=$.elements[7],N.__data[10]=$.elements[8],N.__data[11]=0):($.toArray(N.__data,W),W+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,V,N.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,x,y,R){const b=v.value,A=x+"_"+y;if(R[A]===void 0)return typeof b=="number"||typeof b=="boolean"?R[A]=b:R[A]=b.clone(),!0;{const P=R[A];if(typeof b=="number"||typeof b=="boolean"){if(P!==b)return R[A]=b,!0}else if(P.equals(b)===!1)return P.copy(b),!0}return!1}function g(v){const x=v.uniforms;let y=0;const R=16;for(let A=0,P=x.length;A<P;A++){const w=Array.isArray(x[A])?x[A]:[x[A]];for(let E=0,N=w.length;E<N;E++){const V=w[E],H=Array.isArray(V.value)?V.value:[V.value];for(let W=0,Z=H.length;W<Z;W++){const $=H[W],Q=_($),D=y%R,X=D%Q.boundary,q=D+X;y+=X,q!==0&&R-q<Q.storage&&(y+=R-q),V.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=y,y+=Q.storage}}}const b=y%R;return b>0&&(y+=R-b),v.__size=y,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function h(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class DR{constructor(e={}){const{canvas:t=DE(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,h=null;const v=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let R=!1;this._outputColorSpace=Xt;let b=0,A=0,P=null,w=-1,E=null;const N=new nt,V=new nt;let H=null;const W=new Fe(0);let Z=0,$=t.width,Q=t.height,D=1,X=null,q=null;const ce=new nt(0,0,$,Q),ye=new nt(0,0,$,Q);let it=!1;const Ge=new rp;let G=!1,oe=!1;const ie=new He,Ce=new F,ve=new nt,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Je=!1;function je(){return P===null?D:1}let L=i;function rt(T,U){return t.getContext(T,U)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Xh}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",_e,!1),t.addEventListener("webglcontextcreationerror",te,!1),L===null){const U="webgl2";if(L=rt(U,T),L===null)throw rt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ne,Ze,Ee,vt,xe,Ve,kt,Pt,C,S,k,Y,J,j,Re,ae,Te,we,re,he,Ie,Ae,de,ke;function I(){Ne=new GA(L),Ne.init(),Ae=new wR(L,Ne),Ze=new FA(L,Ne,e,Ae),Ee=new ER(L,Ne),Ze.reversedDepthBuffer&&f&&Ee.buffers.depth.setReversed(!0),vt=new XA(L),xe=new uR,Ve=new TR(L,Ne,Ee,xe,Ze,Ae,vt),kt=new kA(y),Pt=new VA(y),C=new Q1(L),de=new IA(L,C),S=new jA(L,C,vt,de),k=new $A(L,S,C,vt),re=new YA(L,Ze,Ve),ae=new OA(xe),Y=new cR(y,kt,Pt,Ne,Ze,de,ae),J=new NR(y,xe),j=new fR,Re=new vR(Ne),we=new DA(y,kt,Pt,Ee,k,p,l),Te=new SR(y,k,Ze),ke=new LR(L,vt,Ze,Ee),he=new UA(L,Ne,vt),Ie=new WA(L,Ne,vt),vt.programs=Y.programs,y.capabilities=Ze,y.extensions=Ne,y.properties=xe,y.renderLists=j,y.shadowMap=Te,y.state=Ee,y.info=vt}I();const se=new CR(y,L);this.xr=se,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const T=Ne.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ne.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(T){T!==void 0&&(D=T,this.setSize($,Q,!1))},this.getSize=function(T){return T.set($,Q)},this.setSize=function(T,U,B=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=T,Q=U,t.width=Math.floor(T*D),t.height=Math.floor(U*D),B===!0&&(t.style.width=T+"px",t.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set($*D,Q*D).floor()},this.setDrawingBufferSize=function(T,U,B){$=T,Q=U,D=B,t.width=Math.floor(T*B),t.height=Math.floor(U*B),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(N)},this.getViewport=function(T){return T.copy(ce)},this.setViewport=function(T,U,B,z){T.isVector4?ce.set(T.x,T.y,T.z,T.w):ce.set(T,U,B,z),Ee.viewport(N.copy(ce).multiplyScalar(D).round())},this.getScissor=function(T){return T.copy(ye)},this.setScissor=function(T,U,B,z){T.isVector4?ye.set(T.x,T.y,T.z,T.w):ye.set(T,U,B,z),Ee.scissor(V.copy(ye).multiplyScalar(D).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(T){Ee.setScissorTest(it=T)},this.setOpaqueSort=function(T){X=T},this.setTransparentSort=function(T){q=T},this.getClearColor=function(T){return T.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(T=!0,U=!0,B=!0){let z=0;if(T){let O=!1;if(P!==null){const ne=P.texture.format;O=ne===Jh||ne===Qh||ne===Zh}if(O){const ne=P.texture.type,fe=ne===pi||ne===Jr||ne===Ea||ne===Ta||ne===$h||ne===qh,Se=we.getClearColor(),ge=we.getClearAlpha(),De=Se.r,Ue=Se.g,Pe=Se.b;fe?(g[0]=De,g[1]=Ue,g[2]=Pe,g[3]=ge,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=De,_[1]=Ue,_[2]=Pe,_[3]=ge,L.clearBufferiv(L.COLOR,0,_))}else z|=L.COLOR_BUFFER_BIT}U&&(z|=L.DEPTH_BUFFER_BIT),B&&(z|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",te,!1),we.dispose(),j.dispose(),Re.dispose(),xe.dispose(),kt.dispose(),Pt.dispose(),k.dispose(),de.dispose(),ke.dispose(),Y.dispose(),se.dispose(),se.removeEventListener("sessionstart",ri),se.removeEventListener("sessionend",pp),Tr.stop()};function le(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const T=vt.autoReset,U=Te.enabled,B=Te.autoUpdate,z=Te.needsUpdate,O=Te.type;I(),vt.autoReset=T,Te.enabled=U,Te.autoUpdate=B,Te.needsUpdate=z,Te.type=O}function te(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function K(T){const U=T.target;U.removeEventListener("dispose",K),Me(U)}function Me(T){Oe(T),xe.remove(T)}function Oe(T){const U=xe.get(T).programs;U!==void 0&&(U.forEach(function(B){Y.releaseProgram(B)}),T.isShaderMaterial&&Y.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,B,z,O,ne){U===null&&(U=pe);const fe=O.isMesh&&O.matrixWorld.determinant()<0,Se=bx(T,U,B,z,O);Ee.setMaterial(z,fe);let ge=B.index,De=1;if(z.wireframe===!0){if(ge=S.getWireframeAttribute(B),ge===void 0)return;De=2}const Ue=B.drawRange,Pe=B.attributes.position;let qe=Ue.start*De,ct=(Ue.start+Ue.count)*De;ne!==null&&(qe=Math.max(qe,ne.start*De),ct=Math.min(ct,(ne.start+ne.count)*De)),ge!==null?(qe=Math.max(qe,0),ct=Math.min(ct,ge.count)):Pe!=null&&(qe=Math.max(qe,0),ct=Math.min(ct,Pe.count));const bt=ct-qe;if(bt<0||bt===1/0)return;de.setup(O,z,Se,B,ge);let pt,dt=he;if(ge!==null&&(pt=C.get(ge),dt=Ie,dt.setIndex(pt)),O.isMesh)z.wireframe===!0?(Ee.setLineWidth(z.wireframeLinewidth*je()),dt.setMode(L.LINES)):dt.setMode(L.TRIANGLES);else if(O.isLine){let Le=z.linewidth;Le===void 0&&(Le=1),Ee.setLineWidth(Le*je()),O.isLineSegments?dt.setMode(L.LINES):O.isLineLoop?dt.setMode(L.LINE_LOOP):dt.setMode(L.LINE_STRIP)}else O.isPoints?dt.setMode(L.POINTS):O.isSprite&&dt.setMode(L.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Xs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),dt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ne.get("WEBGL_multi_draw"))dt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Le=O._multiDrawStarts,St=O._multiDrawCounts,tt=O._multiDrawCount,Sn=ge?C.get(ge).bytesPerElement:1,os=xe.get(z).currentProgram.getUniforms();for(let Mn=0;Mn<tt;Mn++)os.setValue(L,"_gl_DrawID",Mn),dt.render(Le[Mn]/Sn,St[Mn])}else if(O.isInstancedMesh)dt.renderInstances(qe,bt,O.count);else if(B.isInstancedBufferGeometry){const Le=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,St=Math.min(B.instanceCount,Le);dt.renderInstances(qe,bt,St)}else dt.render(qe,bt)};function ft(T,U,B){T.transparent===!0&&T.side===ci&&T.forceSinglePass===!1?(T.side=yn,T.needsUpdate=!0,za(T,U,B),T.side=Vi,T.needsUpdate=!0,za(T,U,B),T.side=ci):za(T,U,B)}this.compile=function(T,U,B=null){B===null&&(B=T),h=Re.get(B),h.init(U),x.push(h),B.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(h.pushLight(O),O.castShadow&&h.pushShadow(O))}),T!==B&&T.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(h.pushLight(O),O.castShadow&&h.pushShadow(O))}),h.setupLights();const z=new Set;return T.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ne=O.material;if(ne)if(Array.isArray(ne))for(let fe=0;fe<ne.length;fe++){const Se=ne[fe];ft(Se,B,O),z.add(Se)}else ft(ne,B,O),z.add(ne)}),h=x.pop(),z},this.compileAsync=function(T,U,B=null){const z=this.compile(T,U,B);return new Promise(O=>{function ne(){if(z.forEach(function(fe){xe.get(fe).currentProgram.isReady()&&z.delete(fe)}),z.size===0){O(T);return}setTimeout(ne,10)}Ne.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let st=null;function yi(T){st&&st(T)}function ri(){Tr.stop()}function pp(){Tr.start()}const Tr=new hx;Tr.setAnimationLoop(yi),typeof self<"u"&&Tr.setContext(self),this.setAnimationLoop=function(T){st=T,se.setAnimationLoop(T),T===null?Tr.stop():Tr.start()},se.addEventListener("sessionstart",ri),se.addEventListener("sessionend",pp),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(U),U=se.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,U,P),h=Re.get(T,x.length),h.init(U),x.push(h),ie.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Ge.setFromProjectionMatrix(ie,ui,U.reversedDepth),oe=this.localClippingEnabled,G=ae.init(this.clippingPlanes,oe),m=j.get(T,v.length),m.init(),v.push(m),se.enabled===!0&&se.isPresenting===!0){const ne=y.xr.getDepthSensingMesh();ne!==null&&Kc(ne,U,-1/0,y.sortObjects)}Kc(T,U,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(X,q),Je=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,Je&&we.addToRenderList(m,T),this.info.render.frame++,G===!0&&ae.beginShadows();const B=h.state.shadowsArray;Te.render(B,T,U),G===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,O=m.transmissive;if(h.setupLights(),U.isArrayCamera){const ne=U.cameras;if(O.length>0)for(let fe=0,Se=ne.length;fe<Se;fe++){const ge=ne[fe];gp(z,O,T,ge)}Je&&we.render(T);for(let fe=0,Se=ne.length;fe<Se;fe++){const ge=ne[fe];mp(m,T,ge,ge.viewport)}}else O.length>0&&gp(z,O,T,U),Je&&we.render(T),mp(m,T,U);P!==null&&A===0&&(Ve.updateMultisampleRenderTarget(P),Ve.updateRenderTargetMipmap(P)),T.isScene===!0&&T.onAfterRender(y,T,U),de.resetDefaultState(),w=-1,E=null,x.pop(),x.length>0?(h=x[x.length-1],G===!0&&ae.setGlobalState(y.clippingPlanes,h.state.camera)):h=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Kc(T,U,B,z){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)B=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)h.pushLight(T),T.castShadow&&h.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ge.intersectsSprite(T)){z&&ve.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ie);const fe=k.update(T),Se=T.material;Se.visible&&m.push(T,fe,Se,B,ve.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ge.intersectsObject(T))){const fe=k.update(T),Se=T.material;if(z&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ve.copy(T.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),ve.copy(fe.boundingSphere.center)),ve.applyMatrix4(T.matrixWorld).applyMatrix4(ie)),Array.isArray(Se)){const ge=fe.groups;for(let De=0,Ue=ge.length;De<Ue;De++){const Pe=ge[De],qe=Se[Pe.materialIndex];qe&&qe.visible&&m.push(T,fe,qe,B,ve.z,Pe)}}else Se.visible&&m.push(T,fe,Se,B,ve.z,null)}}const ne=T.children;for(let fe=0,Se=ne.length;fe<Se;fe++)Kc(ne[fe],U,B,z)}function mp(T,U,B,z){const O=T.opaque,ne=T.transmissive,fe=T.transparent;h.setupLightsView(B),G===!0&&ae.setGlobalState(y.clippingPlanes,B),z&&Ee.viewport(N.copy(z)),O.length>0&&Ba(O,U,B),ne.length>0&&Ba(ne,U,B),fe.length>0&&Ba(fe,U,B),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function gp(T,U,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[z.id]===void 0&&(h.state.transmissionRenderTarget[z.id]=new es(1,1,{generateMipmaps:!0,type:Ne.has("EXT_color_buffer_half_float")||Ne.has("EXT_color_buffer_float")?Ua:pi,minFilter:Di,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const ne=h.state.transmissionRenderTarget[z.id],fe=z.viewport||N;ne.setSize(fe.z*y.transmissionResolutionScale,fe.w*y.transmissionResolutionScale);const Se=y.getRenderTarget(),ge=y.getActiveCubeFace(),De=y.getActiveMipmapLevel();y.setRenderTarget(ne),y.getClearColor(W),Z=y.getClearAlpha(),Z<1&&y.setClearColor(16777215,.5),y.clear(),Je&&we.render(B);const Ue=y.toneMapping;y.toneMapping=gr;const Pe=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),h.setupLightsView(z),G===!0&&ae.setGlobalState(y.clippingPlanes,z),Ba(T,B,z),Ve.updateMultisampleRenderTarget(ne),Ve.updateRenderTargetMipmap(ne),Ne.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let ct=0,bt=U.length;ct<bt;ct++){const pt=U[ct],dt=pt.object,Le=pt.geometry,St=pt.material,tt=pt.group;if(St.side===ci&&dt.layers.test(z.layers)){const Sn=St.side;St.side=yn,St.needsUpdate=!0,_p(dt,B,z,Le,St,tt),St.side=Sn,St.needsUpdate=!0,qe=!0}}qe===!0&&(Ve.updateMultisampleRenderTarget(ne),Ve.updateRenderTargetMipmap(ne))}y.setRenderTarget(Se,ge,De),y.setClearColor(W,Z),Pe!==void 0&&(z.viewport=Pe),y.toneMapping=Ue}function Ba(T,U,B){const z=U.isScene===!0?U.overrideMaterial:null;for(let O=0,ne=T.length;O<ne;O++){const fe=T[O],Se=fe.object,ge=fe.geometry,De=fe.group;let Ue=fe.material;Ue.allowOverride===!0&&z!==null&&(Ue=z),Se.layers.test(B.layers)&&_p(Se,U,B,ge,Ue,De)}}function _p(T,U,B,z,O,ne){T.onBeforeRender(y,U,B,z,O,ne),T.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),O.onBeforeRender(y,U,B,z,T,ne),O.transparent===!0&&O.side===ci&&O.forceSinglePass===!1?(O.side=yn,O.needsUpdate=!0,y.renderBufferDirect(B,U,z,O,T,ne),O.side=Vi,O.needsUpdate=!0,y.renderBufferDirect(B,U,z,O,T,ne),O.side=ci):y.renderBufferDirect(B,U,z,O,T,ne),T.onAfterRender(y,U,B,z,O,ne)}function za(T,U,B){U.isScene!==!0&&(U=pe);const z=xe.get(T),O=h.state.lights,ne=h.state.shadowsArray,fe=O.state.version,Se=Y.getParameters(T,O.state,ne,U,B),ge=Y.getProgramCacheKey(Se);let De=z.programs;z.environment=T.isMeshStandardMaterial?U.environment:null,z.fog=U.fog,z.envMap=(T.isMeshStandardMaterial?Pt:kt).get(T.envMap||z.environment),z.envMapRotation=z.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,De===void 0&&(T.addEventListener("dispose",K),De=new Map,z.programs=De);let Ue=De.get(ge);if(Ue!==void 0){if(z.currentProgram===Ue&&z.lightsStateVersion===fe)return xp(T,Se),Ue}else Se.uniforms=Y.getUniforms(T),T.onBeforeCompile(Se,y),Ue=Y.acquireProgram(Se,ge),De.set(ge,Ue),z.uniforms=Se.uniforms;const Pe=z.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Pe.clippingPlanes=ae.uniform),xp(T,Se),z.needsLights=Cx(T),z.lightsStateVersion=fe,z.needsLights&&(Pe.ambientLightColor.value=O.state.ambient,Pe.lightProbe.value=O.state.probe,Pe.directionalLights.value=O.state.directional,Pe.directionalLightShadows.value=O.state.directionalShadow,Pe.spotLights.value=O.state.spot,Pe.spotLightShadows.value=O.state.spotShadow,Pe.rectAreaLights.value=O.state.rectArea,Pe.ltc_1.value=O.state.rectAreaLTC1,Pe.ltc_2.value=O.state.rectAreaLTC2,Pe.pointLights.value=O.state.point,Pe.pointLightShadows.value=O.state.pointShadow,Pe.hemisphereLights.value=O.state.hemi,Pe.directionalShadowMap.value=O.state.directionalShadowMap,Pe.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Pe.spotShadowMap.value=O.state.spotShadowMap,Pe.spotLightMatrix.value=O.state.spotLightMatrix,Pe.spotLightMap.value=O.state.spotLightMap,Pe.pointShadowMap.value=O.state.pointShadowMap,Pe.pointShadowMatrix.value=O.state.pointShadowMatrix),z.currentProgram=Ue,z.uniformsList=null,Ue}function vp(T){if(T.uniformsList===null){const U=T.currentProgram.getUniforms();T.uniformsList=ql.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function xp(T,U){const B=xe.get(T);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.batchingColor=U.batchingColor,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function bx(T,U,B,z,O){U.isScene!==!0&&(U=pe),Ve.resetTextureUnits();const ne=U.fog,fe=z.isMeshStandardMaterial?U.environment:null,Se=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:un,ge=(z.isMeshStandardMaterial?Pt:kt).get(z.envMap||fe),De=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ue=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Pe=!!B.morphAttributes.position,qe=!!B.morphAttributes.normal,ct=!!B.morphAttributes.color;let bt=gr;z.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(bt=y.toneMapping);const pt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,dt=pt!==void 0?pt.length:0,Le=xe.get(z),St=h.state.lights;if(G===!0&&(oe===!0||T!==E)){const tn=T===E&&z.id===w;ae.setState(z,T,tn)}let tt=!1;z.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==St.state.version||Le.outputColorSpace!==Se||O.isBatchedMesh&&Le.batching===!1||!O.isBatchedMesh&&Le.batching===!0||O.isBatchedMesh&&Le.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Le.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Le.instancing===!1||!O.isInstancedMesh&&Le.instancing===!0||O.isSkinnedMesh&&Le.skinning===!1||!O.isSkinnedMesh&&Le.skinning===!0||O.isInstancedMesh&&Le.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Le.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Le.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Le.instancingMorph===!1&&O.morphTexture!==null||Le.envMap!==ge||z.fog===!0&&Le.fog!==ne||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==ae.numPlanes||Le.numIntersection!==ae.numIntersection)||Le.vertexAlphas!==De||Le.vertexTangents!==Ue||Le.morphTargets!==Pe||Le.morphNormals!==qe||Le.morphColors!==ct||Le.toneMapping!==bt||Le.morphTargetsCount!==dt)&&(tt=!0):(tt=!0,Le.__version=z.version);let Sn=Le.currentProgram;tt===!0&&(Sn=za(z,U,O));let os=!1,Mn=!1,So=!1;const Mt=Sn.getUniforms(),Ln=Le.uniforms;if(Ee.useProgram(Sn.program)&&(os=!0,Mn=!0,So=!0),z.id!==w&&(w=z.id,Mn=!0),os||E!==T){Ee.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Mt.setValue(L,"projectionMatrix",T.projectionMatrix),Mt.setValue(L,"viewMatrix",T.matrixWorldInverse);const hn=Mt.map.cameraPosition;hn!==void 0&&hn.setValue(L,Ce.setFromMatrixPosition(T.matrixWorld)),Ze.logarithmicDepthBuffer&&Mt.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Mt.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),E!==T&&(E=T,Mn=!0,So=!0)}if(O.isSkinnedMesh){Mt.setOptional(L,O,"bindMatrix"),Mt.setOptional(L,O,"bindMatrixInverse");const tn=O.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),Mt.setValue(L,"boneTexture",tn.boneTexture,Ve))}O.isBatchedMesh&&(Mt.setOptional(L,O,"batchingTexture"),Mt.setValue(L,"batchingTexture",O._matricesTexture,Ve),Mt.setOptional(L,O,"batchingIdTexture"),Mt.setValue(L,"batchingIdTexture",O._indirectTexture,Ve),Mt.setOptional(L,O,"batchingColorTexture"),O._colorsTexture!==null&&Mt.setValue(L,"batchingColorTexture",O._colorsTexture,Ve));const Dn=B.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&re.update(O,B,Sn),(Mn||Le.receiveShadow!==O.receiveShadow)&&(Le.receiveShadow=O.receiveShadow,Mt.setValue(L,"receiveShadow",O.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Ln.envMap.value=ge,Ln.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&U.environment!==null&&(Ln.envMapIntensity.value=U.environmentIntensity),Mn&&(Mt.setValue(L,"toneMappingExposure",y.toneMappingExposure),Le.needsLights&&Rx(Ln,So),ne&&z.fog===!0&&J.refreshFogUniforms(Ln,ne),J.refreshMaterialUniforms(Ln,z,D,Q,h.state.transmissionRenderTarget[T.id]),ql.upload(L,vp(Le),Ln,Ve)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(ql.upload(L,vp(Le),Ln,Ve),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Mt.setValue(L,"center",O.center),Mt.setValue(L,"modelViewMatrix",O.modelViewMatrix),Mt.setValue(L,"normalMatrix",O.normalMatrix),Mt.setValue(L,"modelMatrix",O.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const tn=z.uniformsGroups;for(let hn=0,Zc=tn.length;hn<Zc;hn++){const wr=tn[hn];ke.update(wr,Sn),ke.bind(wr,Sn)}}return Sn}function Rx(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function Cx(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(T,U,B){const z=xe.get(T);z.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),xe.get(T.texture).__webglTexture=U,xe.get(T.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:B,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,U){const B=xe.get(T);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0};const Px=L.createFramebuffer();this.setRenderTarget=function(T,U=0,B=0){P=T,b=U,A=B;let z=!0,O=null,ne=!1,fe=!1;if(T){const ge=xe.get(T);if(ge.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(L.FRAMEBUFFER,null),z=!1;else if(ge.__webglFramebuffer===void 0)Ve.setupRenderTarget(T);else if(ge.__hasExternalTextures)Ve.rebindTextures(T,xe.get(T.texture).__webglTexture,xe.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Pe=T.depthTexture;if(ge.__boundDepthTexture!==Pe){if(Pe!==null&&xe.has(Pe)&&(T.width!==Pe.image.width||T.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ve.setupDepthRenderbuffer(T)}}const De=T.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(fe=!0);const Ue=xe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ue[U])?O=Ue[U][B]:O=Ue[U],ne=!0):T.samples>0&&Ve.useMultisampledRTT(T)===!1?O=xe.get(T).__webglMultisampledFramebuffer:Array.isArray(Ue)?O=Ue[B]:O=Ue,N.copy(T.viewport),V.copy(T.scissor),H=T.scissorTest}else N.copy(ce).multiplyScalar(D).floor(),V.copy(ye).multiplyScalar(D).floor(),H=it;if(B!==0&&(O=Px),Ee.bindFramebuffer(L.FRAMEBUFFER,O)&&z&&Ee.drawBuffers(T,O),Ee.viewport(N),Ee.scissor(V),Ee.setScissorTest(H),ne){const ge=xe.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,ge.__webglTexture,B)}else if(fe){const ge=U;for(let De=0;De<T.textures.length;De++){const Ue=xe.get(T.textures[De]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+De,Ue.__webglTexture,B,ge)}}else if(T!==null&&B!==0){const ge=xe.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ge.__webglTexture,B)}w=-1},this.readRenderTargetPixels=function(T,U,B,z,O,ne,fe,Se=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=xe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&fe!==void 0&&(ge=ge[fe]),ge){Ee.bindFramebuffer(L.FRAMEBUFFER,ge);try{const De=T.textures[Se],Ue=De.format,Pe=De.type;if(!Ze.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ze.textureTypeReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-z&&B>=0&&B<=T.height-O&&(T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Se),L.readPixels(U,B,z,O,Ae.convert(Ue),Ae.convert(Pe),ne))}finally{const De=P!==null?xe.get(P).__webglFramebuffer:null;Ee.bindFramebuffer(L.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(T,U,B,z,O,ne,fe,Se=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=xe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&fe!==void 0&&(ge=ge[fe]),ge)if(U>=0&&U<=T.width-z&&B>=0&&B<=T.height-O){Ee.bindFramebuffer(L.FRAMEBUFFER,ge);const De=T.textures[Se],Ue=De.format,Pe=De.type;if(!Ze.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ze.textureTypeReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qe=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,qe),L.bufferData(L.PIXEL_PACK_BUFFER,ne.byteLength,L.STREAM_READ),T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Se),L.readPixels(U,B,z,O,Ae.convert(Ue),Ae.convert(Pe),0);const ct=P!==null?xe.get(P).__webglFramebuffer:null;Ee.bindFramebuffer(L.FRAMEBUFFER,ct);const bt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await IE(L,bt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,qe),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ne),L.deleteBuffer(qe),L.deleteSync(bt),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,U=null,B=0){const z=Math.pow(2,-B),O=Math.floor(T.image.width*z),ne=Math.floor(T.image.height*z),fe=U!==null?U.x:0,Se=U!==null?U.y:0;Ve.setTexture2D(T,0),L.copyTexSubImage2D(L.TEXTURE_2D,B,0,0,fe,Se,O,ne),Ee.unbindTexture()};const Nx=L.createFramebuffer(),Lx=L.createFramebuffer();this.copyTextureToTexture=function(T,U,B=null,z=null,O=0,ne=null){ne===null&&(O!==0?(Xs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ne=O,O=0):ne=0);let fe,Se,ge,De,Ue,Pe,qe,ct,bt;const pt=T.isCompressedTexture?T.mipmaps[ne]:T.image;if(B!==null)fe=B.max.x-B.min.x,Se=B.max.y-B.min.y,ge=B.isBox3?B.max.z-B.min.z:1,De=B.min.x,Ue=B.min.y,Pe=B.isBox3?B.min.z:0;else{const Dn=Math.pow(2,-O);fe=Math.floor(pt.width*Dn),Se=Math.floor(pt.height*Dn),T.isDataArrayTexture?ge=pt.depth:T.isData3DTexture?ge=Math.floor(pt.depth*Dn):ge=1,De=0,Ue=0,Pe=0}z!==null?(qe=z.x,ct=z.y,bt=z.z):(qe=0,ct=0,bt=0);const dt=Ae.convert(U.format),Le=Ae.convert(U.type);let St;U.isData3DTexture?(Ve.setTexture3D(U,0),St=L.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Ve.setTexture2DArray(U,0),St=L.TEXTURE_2D_ARRAY):(Ve.setTexture2D(U,0),St=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const tt=L.getParameter(L.UNPACK_ROW_LENGTH),Sn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),os=L.getParameter(L.UNPACK_SKIP_PIXELS),Mn=L.getParameter(L.UNPACK_SKIP_ROWS),So=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,pt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,pt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,De),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ue),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Pe);const Mt=T.isDataArrayTexture||T.isData3DTexture,Ln=U.isDataArrayTexture||U.isData3DTexture;if(T.isDepthTexture){const Dn=xe.get(T),tn=xe.get(U),hn=xe.get(Dn.__renderTarget),Zc=xe.get(tn.__renderTarget);Ee.bindFramebuffer(L.READ_FRAMEBUFFER,hn.__webglFramebuffer),Ee.bindFramebuffer(L.DRAW_FRAMEBUFFER,Zc.__webglFramebuffer);for(let wr=0;wr<ge;wr++)Mt&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,xe.get(T).__webglTexture,O,Pe+wr),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,xe.get(U).__webglTexture,ne,bt+wr)),L.blitFramebuffer(De,Ue,fe,Se,qe,ct,fe,Se,L.DEPTH_BUFFER_BIT,L.NEAREST);Ee.bindFramebuffer(L.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(O!==0||T.isRenderTargetTexture||xe.has(T)){const Dn=xe.get(T),tn=xe.get(U);Ee.bindFramebuffer(L.READ_FRAMEBUFFER,Nx),Ee.bindFramebuffer(L.DRAW_FRAMEBUFFER,Lx);for(let hn=0;hn<ge;hn++)Mt?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Dn.__webglTexture,O,Pe+hn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Dn.__webglTexture,O),Ln?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,tn.__webglTexture,ne,bt+hn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,tn.__webglTexture,ne),O!==0?L.blitFramebuffer(De,Ue,fe,Se,qe,ct,fe,Se,L.COLOR_BUFFER_BIT,L.NEAREST):Ln?L.copyTexSubImage3D(St,ne,qe,ct,bt+hn,De,Ue,fe,Se):L.copyTexSubImage2D(St,ne,qe,ct,De,Ue,fe,Se);Ee.bindFramebuffer(L.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Ln?T.isDataTexture||T.isData3DTexture?L.texSubImage3D(St,ne,qe,ct,bt,fe,Se,ge,dt,Le,pt.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(St,ne,qe,ct,bt,fe,Se,ge,dt,pt.data):L.texSubImage3D(St,ne,qe,ct,bt,fe,Se,ge,dt,Le,pt):T.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ne,qe,ct,fe,Se,dt,Le,pt.data):T.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ne,qe,ct,pt.width,pt.height,dt,pt.data):L.texSubImage2D(L.TEXTURE_2D,ne,qe,ct,fe,Se,dt,Le,pt);L.pixelStorei(L.UNPACK_ROW_LENGTH,tt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Sn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,os),L.pixelStorei(L.UNPACK_SKIP_ROWS,Mn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,So),ne===0&&U.generateMipmaps&&L.generateMipmap(St),Ee.unbindTexture()},this.copyTextureToTexture3D=function(T,U,B=null,z=null,O=0){return Xs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,U,B,z,O)},this.initRenderTarget=function(T){xe.get(T).__webglFramebuffer===void 0&&Ve.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Ve.setTextureCube(T,0):T.isData3DTexture?Ve.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ve.setTexture2DArray(T,0):Ve.setTexture2D(T,0),Ee.unbindTexture()},this.resetState=function(){b=0,A=0,P=null,Ee.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}function Xg(n,e){if(e===sE)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Vf||e===Yv){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,r=[];if(e===Vf)for(let o=1;o<=i;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=n.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class IR extends vo{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new BR(t)}),this.register(function(t){return new zR(t)}),this.register(function(t){return new qR(t)}),this.register(function(t){return new KR(t)}),this.register(function(t){return new ZR(t)}),this.register(function(t){return new VR(t)}),this.register(function(t){return new GR(t)}),this.register(function(t){return new jR(t)}),this.register(function(t){return new WR(t)}),this.register(function(t){return new kR(t)}),this.register(function(t){return new XR(t)}),this.register(function(t){return new HR(t)}),this.register(function(t){return new $R(t)}),this.register(function(t){return new YR(t)}),this.register(function(t){return new FR(t)}),this.register(function(t){return new QR(t)}),this.register(function(t){return new JR(t)})}load(e,t,i,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=na.extractUrlBase(e);o=na.resolveURL(c,this.path)}else o=na.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new fx(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===xx){try{o[Ye.KHR_BINARY_GLTF]=new eC(e)}catch(d){r&&r(d);return}s=JSON.parse(o[Ye.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new hC(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const d=this.pluginCallbacks[u](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const d=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(d){case Ye.KHR_MATERIALS_UNLIT:o[d]=new OR;break;case Ye.KHR_DRACO_MESH_COMPRESSION:o[d]=new tC(s,this.dracoLoader);break;case Ye.KHR_TEXTURE_TRANSFORM:o[d]=new nC;break;case Ye.KHR_MESH_QUANTIZATION:o[d]=new iC;break;default:f.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}}function UR(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const Ye={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class FR{constructor(e){this.parser=e,this.name=Ye.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Fe(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],un);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Ts(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Qi(u),c.distance=d;break;case"spot":c=new F1(u),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Ci(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class OR{constructor(){this.name=Ye.KHR_MATERIALS_UNLIT}getMaterialType(){return Gr}extendParams(e,t,i){const r=[];e.color=new Fe(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],un),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,Xt))}return Promise.all(r)}}class kR{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class BR{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:xi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ke(a,a)}return Promise.all(s)}}class zR{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:xi}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class HR{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:xi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class VR{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:xi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Fe(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],un)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Xt)),o.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class GR{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:xi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class jR{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:xi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Fe().setRGB(a[0],a[1],a[2],un),Promise.all(s)}}class WR{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:xi}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class XR{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:xi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Fe().setRGB(a[0],a[1],a[2],un),o.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,Xt)),Promise.all(s)}}class YR{constructor(e){this.parser=e,this.name=Ye.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:xi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class $R{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:xi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class qR{constructor(e){this.parser=e,this.name=Ye.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class KR{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return i.loadTextureImage(e,o.source,l)}}class ZR{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return i.loadTextureImage(e,o.source,l)}}class QR{constructor(e){this.name=Ye.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,d=r.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,d,f,r.mode,r.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(u*d);return o.decodeGltfBuffer(new Uint8Array(p),u,d,f,r.mode,r.filter),p})})}else return null}}class JR{constructor(e){this.name=Ye.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const c of r.primitives)if(c.mode!==Un.TRIANGLES&&c.mode!==Un.TRIANGLE_STRIP&&c.mode!==Un.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),d=u.isGroup?u.children:[u],f=c[0].count,p=[];for(const g of d){const _=new He,m=new F,h=new Er,v=new F(1,1,1),x=new d1(g.geometry,g.material,f);for(let y=0;y<f;y++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&h.fromBufferAttribute(l.ROTATION,y),l.SCALE&&v.fromBufferAttribute(l.SCALE,y),x.setMatrixAt(y,_.compose(m,h,v));for(const y in l)if(y==="_COLOR_0"){const R=l[y];x.instanceColor=new jf(R.array,R.itemSize,R.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,l[y]);yt.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),p.push(x)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const xx="glTF",ko=12,Yg={JSON:1313821514,BIN:5130562};class eC{constructor(e){this.name=Ye.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ko),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==xx)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-ko,s=new DataView(e,ko);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===Yg.JSON){const c=new Uint8Array(e,ko+o,a);this.content=i.decode(c)}else if(l===Yg.BIN){const c=ko+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class tC{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ye.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const d=Yf[u]||u.toLowerCase();a[d]=o[u]}for(const u in e.attributes){const d=Yf[u]||u.toLowerCase();if(o[u]!==void 0){const f=i.accessors[e.attributes[u]],p=$s[f.componentType];c[d]=p.name,l[d]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(d,f){r.decodeDracoFile(u,function(p){for(const g in p.attributes){const _=p.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}d(p)},a,c,un,f)})})}}class nC{constructor(){this.name=Ye.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class iC{constructor(){this.name=Ye.KHR_MESH_QUANTIZATION}}class yx extends Oa{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=i[s+o];return t}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=r-t,d=(i-t)/u,f=d*d,p=f*d,g=e*c,_=g-c,m=-2*p+3*f,h=p-f,v=1-m,x=h-f+d;for(let y=0;y!==a;y++){const R=o[_+y+a],b=o[_+y+l]*u,A=o[g+y+a],P=o[g+y]*u;s[y]=v*R+x*b+m*A+h*P}return s}}const rC=new Er;class sC extends yx{interpolate_(e,t,i,r){const s=super.interpolate_(e,t,i,r);return rC.fromArray(s).normalize().toArray(s),s}}const Un={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},$s={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},$g={9728:ln,9729:bn,9984:Bv,9985:Gl,9986:Go,9987:Di},qg={33071:or,33648:Tc,10497:so},od={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Yf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Zi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},oC={CUBICSPLINE:void 0,LINEAR:Ra,STEP:ba},ad={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function aC(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new op({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Vi})),n.DefaultMaterial}function Lr(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Ci(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function lC(n,e,t){let i=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const d=e[c];if(d.POSITION!==void 0&&(i=!0),d.NORMAL!==void 0&&(r=!0),d.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const d=e[c];if(i){const f=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):n.attributes.position;o.push(f)}if(r){const f=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):n.attributes.normal;a.push(f)}if(s){const f=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):n.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],d=c[1],f=c[2];return i&&(n.morphAttributes.position=u),r&&(n.morphAttributes.normal=d),s&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}function cC(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function uC(n){let e;const t=n.extensions&&n.extensions[Ye.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ld(t.attributes):e=n.indices+":"+ld(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+ld(n.targets[i]);return e}function ld(n){let e="";const t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function $f(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function dC(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const fC=new He;class hC{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new UR,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);r=i&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&r<17||s&&o<98?this.textureLoader=new D1(this.options.manager):this.textureLoader=new z1(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new fx(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:i,userData:{}};return Lr(s,a,r),Ci(a,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ye.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){i.load(na.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=od[r.type],a=$s[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new cn(c,o,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=od[r.type],c=$s[r.componentType],u=c.BYTES_PER_ELEMENT,d=u*l,f=r.byteOffset||0,p=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let _,m;if(p&&p!==d){const h=Math.floor(f/p),v="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+h+":"+r.count;let x=t.cache.get(v);x||(_=new c(a,h*p,r.count*p/u),x=new o1(_,p/u),t.cache.add(v,x)),m=new np(x,l,f%p/u,g)}else a===null?_=new c(r.count*l):_=new c(a,f,r.count*l),m=new cn(_,l,g);if(r.sparse!==void 0){const h=od.SCALAR,v=$s[r.sparse.indices.componentType],x=r.sparse.indices.byteOffset||0,y=r.sparse.values.byteOffset||0,R=new v(o[1],x,r.sparse.count*h),b=new c(o[2],y,r.sparse.count*l);a!==null&&(m=new cn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,P=R.length;A<P;A++){const w=R[A];if(m.setX(w,b[A*l]),l>=2&&m.setY(w,b[A*l+1]),l>=3&&m.setZ(w,b[A*l+2]),l>=4&&m.setW(w,b[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,i){const r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(s.samplers||{})[o.sampler]||{};return u.magFilter=$g[f.magFilter]||bn,u.minFilter=$g[f.minFilter]||Di,u.wrapS=qg[f.wrapS]||so,u.wrapT=qg[f.wrapT]||so,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==ln&&u.minFilter!==bn,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const o=r.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(d){c=!0;const f=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(d){return new Promise(function(f,p){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Gt(_);m.needsUpdate=!0,f(m)}),t.load(na.resolveURL(d,s.path),g,void 0,p)})}).then(function(d){return c===!0&&a.revokeObjectURL(l),Ci(d,o),d.userData.mimeType=o.mimeType||dC(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,i,r){const s=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),s.extensions[Ye.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[Ye.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[Ye.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new lx,hi.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new ax,hi.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(r||s||o){let a="ClonedMaterial:"+i.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return op}loadMaterial(e){const t=this,i=this.json,r=this.extensions,s=i.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[Ye.KHR_MATERIALS_UNLIT]){const d=r[Ye.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),c.push(d.extendParams(a,s,t))}else{const d=s.pbrMetallicRoughness||{};if(a.color=new Fe(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const f=d.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],un),a.opacity=f[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",d.baseColorTexture,Xt)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=ci);const u=s.alphaMode||ad.OPAQUE;if(u===ad.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===ad.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Gr&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Ke(1,1),s.normalTexture.scale!==void 0)){const d=s.normalTexture.scale;a.normalScale.set(d,d)}if(s.occlusionTexture!==void 0&&o!==Gr&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Gr){const d=s.emissiveFactor;a.emissive=new Fe().setRGB(d[0],d[1],d[2],un)}return s.emissiveTexture!==void 0&&o!==Gr&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Xt)),Promise.all(c).then(function(){const d=new o(a);return s.name&&(d.name=s.name),Ci(d,s),t.associations.set(d,{materials:e}),s.extensions&&Lr(r,d,s),d})}createUniqueName(e){const t=at.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function s(a){return i[Ye.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Kg(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=uC(c),d=r[u];if(d)o.push(d.promise);else{let f;c.extensions&&c.extensions[Ye.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=Kg(new vi,c,t),r[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,r=this.extensions,s=i.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?aC(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],d=[];for(let p=0,g=u.length;p<g;p++){const _=u[p],m=o[p];let h;const v=c[p];if(m.mode===Un.TRIANGLES||m.mode===Un.TRIANGLE_STRIP||m.mode===Un.TRIANGLE_FAN||m.mode===void 0)h=s.isSkinnedMesh===!0?new l1(_,v):new gn(_,v),h.isSkinnedMesh===!0&&h.normalizeSkinWeights(),m.mode===Un.TRIANGLE_STRIP?h.geometry=Xg(h.geometry,Yv):m.mode===Un.TRIANGLE_FAN&&(h.geometry=Xg(h.geometry,Vf));else if(m.mode===Un.LINES)h=new m1(_,v);else if(m.mode===Un.LINE_STRIP)h=new sp(_,v);else if(m.mode===Un.LINE_LOOP)h=new g1(_,v);else if(m.mode===Un.POINTS)h=new _1(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(h.geometry.morphAttributes).length>0&&cC(h,s),h.name=t.createUniqueName(s.name||"mesh_"+e),Ci(h,s),m.extensions&&Lr(r,h,m),t.assignFinalMaterial(h),d.push(h)}for(let p=0,g=d.length;p<g;p++)t.associations.set(d[p],{meshes:e,primitives:p});if(d.length===1)return s.extensions&&Lr(r,d[0],s),d[0];const f=new jr;s.extensions&&Lr(r,f,s),t.associations.set(f,{meshes:e});for(let p=0,g=d.length;p<g;p++)f.add(d[p]);return f})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new on(LE.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new lp(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Ci(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let r=0,s=t.joints.length;r<s;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const s=r.pop(),o=r,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const d=o[c];if(d){a.push(d);const f=new He;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new ip(a,l)})}loadAnimation(e){const t=this.json,i=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let d=0,f=r.channels.length;d<f;d++){const p=r.channels[d],g=r.samplers[p.sampler],_=p.target,m=_.node,h=r.parameters!==void 0?r.parameters[g.input]:g.input,v=r.parameters!==void 0?r.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",h)),l.push(this.getDependency("accessor",v)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(d){const f=d[0],p=d[1],g=d[2],_=d[3],m=d[4],h=[];for(let v=0,x=f.length;v<x;v++){const y=f[v],R=p[v],b=g[v],A=_[v],P=m[v];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const w=i._createAnimationTracks(y,R,b,A,P);if(w)for(let E=0;E<w.length;E++)h.push(w[E])}return new A1(s,void 0,h)})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){const o=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const t=this.json,i=this,r=t.nodes[e],s=i._loadNodeShallow(e),o=[],a=r.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));const l=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],d=c[1],f=c[2];f!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(f,fC)});for(let p=0,g=d.length;p<g;p++)u.add(d[p]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new sx:c.length>1?u=new jr:c.length===1?u=c[0]:u=new yt,u!==c[0])for(let d=0,f=c.length;d<f;d++)u.add(c[d]);if(s.name&&(u.userData.name=s.name,u.name=o),Ci(u,s),s.extensions&&Lr(i,u,s),s.matrix!==void 0){const d=new He;d.fromArray(s.matrix),u.applyMatrix4(d)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!r.associations.has(u))r.associations.set(u,{});else if(s.mesh!==void 0&&r.meshCache.refs[s.mesh]>1){const d=r.associations.get(u);r.associations.set(u,{...d})}return r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],r=this,s=new jr;i.name&&(s.name=r.createUniqueName(i.name)),Ci(s,i),i.extensions&&Lr(t,s,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,d=l.length;u<d;u++)s.add(l[u]);const c=u=>{const d=new Map;for(const[f,p]of r.associations)(f instanceof hi||f instanceof Gt)&&d.set(f,p);return u.traverse(f=>{const p=r.associations.get(f);p!=null&&d.set(f,p)}),d};return r.associations=c(s),s})}_createAnimationTracks(e,t,i,r,s){const o=[],a=e.name?e.name:e.uuid,l=[];Zi[s.path]===Zi.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(Zi[s.path]){case Zi.weights:c=lo;break;case Zi.rotation:c=co;break;case Zi.translation:case Zi.scale:c=uo;break;default:switch(i.itemSize){case 1:c=lo;break;case 2:case 3:default:c=uo;break}break}const u=r.interpolation!==void 0?oC[r.interpolation]:Ra,d=this._getArrayFromAccessor(i);for(let f=0,p=l.length;f<p;f++){const g=new c(l[f]+"."+Zi[s.path],t.array,d,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=$f(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const r=this instanceof co?sC:yx;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function pC(n,e,t){const i=e.attributes,r=new gi;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new F(l[0],l[1],l[2]),new F(c[0],c[1],c[2])),a.normalized){const u=$f($s[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new F,l=new F;for(let c=0,u=s.length;c<u;c++){const d=s[c];if(d.POSITION!==void 0){const f=t.json.accessors[d.POSITION],p=f.min,g=f.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),f.normalized){const _=$f($s[f.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}n.boundingBox=r;const o=new _i;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=o}function Kg(n,e,t){const i=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=Yf[o]||o.toLowerCase();a in n.attributes||r.push(s(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});r.push(o)}return Qe.workingColorSpace!==un&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Qe.workingColorSpace}" not supported.`),Ci(n,e),pC(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?lC(n,e.targets,t):n})}const Sx=({modelPath:n,title:e="3D Модель",description:t="Используйте мышь для вращения и масштабирования модели"})=>{const[i,r]=We.useState(!0),[s,o]=We.useState(null),a=We.useRef(null),l=We.useRef(null),c=We.useRef(null),u=We.useRef(null),d=We.useRef(null),f=We.useRef(null),p=We.useRef(!0),g=We.useRef(!1),_=We.useRef({isDown:!1,lastX:0,lastY:0}),m=We.useRef({x:0,y:0}),h=We.useRef(null),v=b=>{if(b.preventDefault(),b.stopPropagation(),!u.current)return;const A=b.deltaY>0?.5:-.5;u.current.position.z=Math.max(1,Math.min(10,u.current.position.z+A))};We.useEffect(()=>{if(!a.current)return;const b=new s1;b.background=new Fe(3815994),l.current=b;const A=new on(75,a.current.clientWidth/a.current.clientHeight,.1,1e3);A.position.set(0,0,5),u.current=A;const P=new DR({antialias:!0});P.setSize(a.current.clientWidth,a.current.clientHeight),P.shadowMap.enabled=!0,P.shadowMap.type=Fv,a.current.appendChild(P.domElement),c.current=P;const w=new B1(16777215,.8);b.add(w);const E=new Ts(16777215,1.2);E.position.set(5,10,5),E.castShadow=!0,E.shadow.mapSize.width=2048,E.shadow.mapSize.height=2048,b.add(E);const N=new Ts(16777215,.6);N.position.set(-5,5,-5),b.add(N);const V=new Qi(16766720,.8);V.position.set(-5,8,8),b.add(V);const H=new Qi(16777215,.4);H.position.set(8,-5,5),b.add(H);const W=new I1(16777215,4473924,.4);W.position.set(0,20,0),b.add(W);const Z=new Ts(16777215,.7);Z.position.set(0,0,10),b.add(Z);const $=new Ts(16777215,.5);$.position.set(0,0,-10),b.add($);const Q=new Qi(16777215,.6);Q.position.set(-10,0,0),b.add(Q);const D=new Qi(16777215,.6);D.position.set(10,0,0),b.add(D);const X=new Qi(16777215,.5);X.position.set(0,15,0),b.add(X);const q=new Qi(16777215,.3);q.position.set(0,-10,0),b.add(q);const ce=new Ts(16766720,.4);ce.position.set(-8,8,-8),b.add(ce);const ye=new Qi(16777215,.3);ye.position.set(3,-3,8),b.add(ye),new IR().load(n,pe=>{const Je=pe.scene,je=new gi().setFromObject(Je),L=je.getCenter(new F),rt=je.getSize(new F),Ze=2/Math.max(rt.x,rt.y,rt.z);Je.scale.setScalar(Ze),Je.position.sub(L.multiplyScalar(Ze)),Je.traverse(Ee=>{Ee instanceof gn&&(Ee.castShadow=!0,Ee.receiveShadow=!0)}),b.add(Je),d.current=Je,r(!1),m.current={x:0,y:0}},pe=>{console.log("Loading progress:",pe.loaded/pe.total*100+"%")},pe=>{console.error("Error loading model:",pe),o("Ошибка загрузки 3D модели"),r(!1)});const Ge=()=>{f.current=requestAnimationFrame(Ge),d.current&&(p.current&&!_.current.isDown&&(m.current.y+=.003),d.current.rotation.x=m.current.x,d.current.rotation.y=m.current.y),P.render(b,A)};Ge();const G=()=>{if(!a.current||!A||!P)return;const pe=a.current.clientWidth,Je=a.current.clientHeight;A.aspect=pe/Je,A.updateProjectionMatrix(),P.setSize(pe,Je)},oe=pe=>{pe.button===0&&(_.current.isDown=!0,_.current.lastX=pe.clientX,_.current.lastY=pe.clientY,g.current=!0,p.current=!1,h.current&&(clearTimeout(h.current),h.current=null),pe.preventDefault())},ie=pe=>{if(!_.current.isDown||!d.current)return;const Je=pe.clientX-_.current.lastX,je=pe.clientY-_.current.lastY;m.current.y+=Je*.005,m.current.x-=je*.005,m.current.x=Math.max(-Math.PI/3,Math.min(Math.PI/3,m.current.x)),_.current.lastX=pe.clientX,_.current.lastY=pe.clientY,pe.preventDefault()},Ce=pe=>{_.current.isDown=!1,g.current=!1,h.current=setTimeout(()=>{p.current=!0},4e3),pe.preventDefault()};window.addEventListener("resize",G);const ve=a.current;return ve&&(ve.addEventListener("mousedown",oe),ve.addEventListener("mousemove",ie),ve.addEventListener("mouseup",Ce),ve.addEventListener("mouseleave",Ce),ve.addEventListener("wheel",v,{passive:!1})),()=>{f.current&&cancelAnimationFrame(f.current),h.current&&clearTimeout(h.current),window.removeEventListener("resize",G),ve&&(ve.removeEventListener("mousedown",oe),ve.removeEventListener("mousemove",ie),ve.removeEventListener("mouseup",Ce),ve.removeEventListener("mouseleave",Ce),ve.removeEventListener("wheel",v)),a.current&&P.domElement&&a.current.removeChild(P.domElement),P.dispose()}},[n]);const x=()=>{u.current&&(u.current.position.z=Math.max(u.current.position.z-.5,1))},y=()=>{u.current&&(u.current.position.z=Math.min(u.current.position.z+.5,10))},R=()=>{!u.current||!d.current||(h.current&&(clearTimeout(h.current),h.current=null),u.current.position.set(0,0,5),d.current.rotation.set(0,0,0),m.current={x:0,y:0},p.current=!0)};return M.jsxs("div",{ref:a,className:"relative bg-[#3A3A3A] rounded-lg overflow-hidden h-96 md:h-[500px] cursor-grab active:cursor-grabbing border border-gray-700",style:{cursor:g.current?"grabbing":"grab"},children:[i&&M.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:M.jsxs("div",{className:"text-center",children:[M.jsx("div",{className:"w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"}),M.jsx("p",{className:"text-white",children:"Загрузка 3D модели..."})]})}),s&&M.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:M.jsxs("div",{className:"text-center",children:[M.jsx("p",{className:"text-red-400 mb-2",children:s}),M.jsx("p",{className:"text-gray-400 text-sm",children:"Проверьте наличие файла модели"})]})}),M.jsxs("div",{className:"absolute top-4 right-4 flex flex-col space-y-2 z-10",children:[M.jsx("button",{onClick:x,className:"bg-[#1A1A1A] hover:bg-gray-600 text-white p-2 rounded transition-colors",title:"Увеличить",children:M.jsx(xM,{size:20})}),M.jsx("button",{onClick:y,className:"bg-[#1A1A1A] hover:bg-gray-600 text-white p-2 rounded transition-colors",title:"Уменьшить",children:M.jsx(yM,{size:20})}),M.jsx("button",{onClick:R,className:"bg-[#1A1A1A] hover:bg-gray-600 text-white p-2 rounded transition-colors",title:"Сбросить вид",children:M.jsx(gM,{size:20})})]}),!i&&!s&&M.jsx("div",{className:"absolute bottom-4 left-4 right-4 text-center z-10",children:M.jsxs("div",{className:"bg-[#3A3A3A]/80 backdrop-blur-sm rounded-lg p-3",children:[M.jsxs("p",{className:"text-gray-300 text-sm",children:[M.jsx(mM,{className:"inline w-4 h-4 mr-1"}),t]}),M.jsx("p",{className:"text-xs text-gray-400 mt-1",children:"3D модель товара"})]})}),g.current&&M.jsx("div",{className:"absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded text-sm font-medium z-10",children:"Вращение..."})]})},mC=({productId:n,onBack:e,onOrderClick:t})=>{const[i,r]=We.useState(0),o=(c=>({...{id:c,images:[Ec,Yr,nf],model3d:void 0,rating:5,inStock:!0,specifications:{},fullDescription:""},...{"std-1":{name:"Брус 40х40",images:[Ec,xv,"https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=400"],model3d:"/3d/bp40.glb",price:"от 140 ₽/м",description:"Классический профиль для натяжных потолков с теневым зазором",fullDescription:"Профиль BP-40 - это классическое решение для создания натяжных потолков с эффектом теневого зазора. Изготовлен из высококачественного алюминиевого сплава, обеспечивает надежное крепление полотна и создает элегантный переход между стеной и потолком.",specifications:{Материал:"Алюминиевый сплав 6063","Высота профиля":"40 мм",Ширина:"25 мм","Толщина стенки":"1.2 мм",Длина:"2.0 м / 2.5 м / 3.2 м",Цвет:"Белый матовый",Вес:"0.38 кг/м","Рабочая температура":"-40°C до +80°C"}},"std-2":{name:"Профиль Стенвой",images:[yv,Sv,Mv,Ev],model3d:"/3d/sten.glb",price:"от 30 ₽/м",description:"Усиленный профиль для больших площадей потолков",fullDescription:"Стенвой профиль предназначен для создания надежных креплений в больших помещениях.",specifications:{Материал:"Алюминиевый сплав 6063","Высота профиля":"50 мм",Ширина:"30 мм","Толщина стенки":"1.5 мм",Длина:"2.0 м / 2.5 м",Цвет:"Белый матовый",Вес:"1.2 кг/м","Рабочая температура":"-40°C до +80°C"}},"cor-1":{name:"Карниз ПК-14 стандартный",images:[Yr,js,"https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400"],model3d:"/3d/pk14.glb",price:"от 560 ₽/м",description:"Стандартный карниз для штор и портьер",fullDescription:"Карниз ПК-14 обеспечивает надежное крепление штор различного веса.",specifications:{Материал:"Алюминиевый сплав 6063","Высота профиля":"45 мм",Ширина:"108 мм","Толщина стенки":"1.2 мм",Длина:"2.0 м / 2.5 м / 3.2 м",Цвет:"Белый матовый / Чёрный муар",Вес:"1.3 кг/м","Рабочая температура":"-40°C до +80°C"}},"std-3":{name:"Разделитель",images:[Tv,wv],model3d:"/3d/razdel.glb",price:"от 115 ₽/м",description:"Компактный профиль для небольших помещений",fullDescription:"Разделитель предназначен для создания переходов между различными уровнями потолка.",specifications:{Материал:"Алюминиевый сплав 6063","Высота профиля":"30 мм",Ширина:"20 мм","Толщина стенки":"1.2 мм",Длина:"2.5 м / 3.2 м",Цвет:"",Вес:"0.34 кг/м","Рабочая температура":"-40°C до +80°C"}},"std-4":{name:"Профиль Универсальный",images:[Av,bv],model3d:"/3d/univers.glb",price:"от 77 ₽/м",description:"Премиум профиль с улучшенными характеристиками",fullDescription:"Универсальный профиль подходит для различных типов натяжных потолков.",specifications:{Материал:"Алюминиевый сплав 6063","Высота профиля":"45 мм",Ширина:"28 мм","Толщина стенки":"1.4 мм",Длина:"2.0 м / 2.5 м",Цвет:"",Вес:"1.0 кг/м","Рабочая температура":"-40°C до +80°C"}},"std-5":{name:"Профиль Потолочный",images:[Rv,Cv],model3d:"/3d/potoloch.glb",price:"от 55 ₽/м",description:"Универсальный профиль для любых задач",fullDescription:"Потолочный профиль обеспечивает надежное крепление к потолочным конструкциям.",specifications:{Материал:"Алюминиевый сплав 6063","Высота профиля":"42 мм",Ширина:"26 мм","Толщина стенки":"1.3 мм",Длина:"2.5 м / 3.0 м",Цвет:"Белый матовый",Вес:"0.9 кг/м","Рабочая температура":"-40°C до +80°C"}},"std-6":{name:"Отбойник Z",images:[Pv,Nv],model3d:"/3d/potoloch.glb",price:"от 47 ₽/м",description:"Экономичный вариант для бюджетных проектов",fullDescription:"Отбойник Z используется для создания защитных элементов в конструкции потолка.",specifications:{Материал:"Алюминиевый сплав 6063","Высота профиля":"25 мм",Ширина:"15 мм","Толщина стенки":"0.8 мм",Длина:"2.5 м / 3.0 м",Цвет:"Белый матовый",Вес:"0.4 кг/м","Рабочая температура":"-40°C до +80°C"}},b2:{name:"Карниз B2",images:[Wh,js,"https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400"],model3d:"/3d/b2.glb",price:"от 750 ₽/м",description:"Стандартный карниз для штор и портьер",fullDescription:"Карниз B2 обеспечивает надежное крепление штор различного веса.",specifications:{Материал:"Алюминиевый сплав 6063","Высота профиля":"63.5 мм",Ширина:"108.5 мм","Толщина стенки":"1.1 мм",Длина:"2.0 м / 2.5м / 3.2 м",Цвет:"Белый матовый / Чёрный муар",Вес:"1.6 кг/м","Рабочая температура":"-40°C до +80°C"}},"cor-2":{name:"Карниз ПК-14 облегченный",images:[Yr,js],model3d:"/3d/pk14.glb",price:"от 520 ₽/м",description:"Двухрядный карниз для тюля и штор",fullDescription:"Облегченная версия карниза ПК-14 для легких тканей.",specifications:{Материал:"Алюминиевый сплав 6063","Высота профиля":"43.5 мм",Ширина:"103 мм","Толщина стенки":"1 мм",Длина:"2.0 м / 2.5 м / 3.2 м",Цвет:"Белый матовый / Чёрный муар",Вес:"1.18 кг/м","Рабочая температура":"-40°C до +80°C"}},"cor-3":{name:"Карниз ПК-15",images:[Lv,Dv],model3d:"/3d/pk15.glb",price:"от 340 ₽/м",description:"Компактный карниз для небольших окон",fullDescription:"Карниз ПК-15 идеально подходит для небольших помещений.",specifications:{Материал:"Алюминиевый сплав 6063","Высота профиля":"52 мм",Ширина:"75 мм","Толщина стенки":"1.2 мм",Длина:"2.0 м / 2.5 м / 3.2 м",Цвет:"Белый матовый / Чёрный муар",Вес:"0.822 кг/м","Рабочая температура":"-40°C до +80°C"}},"cor-4":{name:"Карниз ПК-12",images:[nf,rf,"https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400"],model3d:"/3d/pk12.glb",price:"от 380 ₽/м",description:"Премиум карниз с улучшенным дизайном",fullDescription:"Карниз ПК-12 представляет собой премиум решение для современных интерьеров.",specifications:{Материал:"Алюминиевый сплав 6063","Высота профиля":"38 мм",Ширина:"22 мм","Толщина стенки":"1.1 мм",Длина:"2.5 м / 3.0 м",Цвет:"Белый матовый / Чёрный муар",Вес:"0.7 кг/м","Рабочая температура":"-40°C до +80°C"}},"cor-5":{name:"Карниз B-1 однорядный",images:[Iv,rf,"https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400"],model3d:"/3d/b1.glb",price:"от 380 ₽/м",description:"Однорядный карниз с пазом для светодиодной ленты",fullDescription:"Карниз B-1 представляет собой премиум решение для современных интерьеров.",specifications:{Материал:"Алюминиевый сплав 6063","Высота профиля":"38 мм",Ширина:"22 мм","Толщина стенки":"1.1 мм",Длина:"2.5 м / 3.0 м",Цвет:"Белый матовый / Чёрный муар",Вес:"0.7 кг/м","Рабочая температура":"-40°C до +80°C"}},"light-1":{name:"Световая линия СЛ-40 LED",images:[MM,"https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=400","https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400"],price:"350 ₽/м",description:"LED световая линия с равномерным освещением",fullDescription:"Световая линия СЛ-40 обеспечивает равномерное LED освещение по всей длине профиля.",specifications:{Материал:"Алюминиевый сплав 6063","Высота профиля":"40 мм",Ширина:"30 мм","Мощность LED":"12 Вт/м","Цветовая температура":"3000K-6000K",Длина:"2.0 м",Цвет:"Белый матовый","Класс защиты":"IP20"}},"cont-1":{name:"TL-вставка для карнизов",images:[Vr,"https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400","https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=400"],price:"45 ₽/шт",description:"TL-вставка для карнизов",fullDescription:"Закрывает технический зазор профиля и предает эстетический вид.",specifications:{Материал:"Алюминиевый сплав 6063","Угол соединения":"90°",Совместимость:"Профили 40мм",Цвет:"Белый матовый",Вес:"25 г",Упаковка:"50 шт"}},"cont-2":{name:"Заглушки торцевые ПК-14",images:[Vr,"https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400","https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=400"],price:"45 ₽/шт",description:"TL-вставка для карнизов",fullDescription:"Закрывает технический зазор профиля и предает эстетический вид.",specifications:{Материал:"Алюминиевый сплав 6063","Угол соединения":"90°",Совместимость:"Профили 40мм",Цвет:"Белый матовый",Вес:"25 г",Упаковка:"50 шт"}},"cont-3":{name:"Заглушки торцевые B-1",images:[Vr,"https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400","https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=400"],price:"45 ₽/шт",description:"TL-вставка для карнизов",fullDescription:"Закрывает технический зазор профиля и предает эстетический вид.",specifications:{Материал:"Алюминиевый сплав 6063","Угол соединения":"90°",Совместимость:"Профили 40мм",Цвет:"Белый матовый",Вес:"25 г",Упаковка:"50 шт"}},"cont-4":{name:"Бандажная лента",images:[Vr,"https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400","https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=400"],price:"45 ₽/шт",description:"TL-вставка для карнизов",fullDescription:"Закрывает технический зазор профиля и предает эстетический вид.",specifications:{Материал:"Алюминиевый сплав 6063",Совместимость:"Профили 40мм",Цвет:"Белый матовый",Вес:"25 г",Упаковка:"50 шт"}}}[c]}))(n),a=()=>{r(c=>(c+1)%o.images.length)},l=()=>{r(c=>(c-1+o.images.length)%o.images.length)};return M.jsx("div",{className:"min-h-screen bg-[#1A1A1A] pt-16",children:M.jsxs("div",{className:"container mx-auto px-6 md:px-8 lg:px-12 py-8",children:[M.jsxs("button",{onClick:e,className:"flex items-center space-x-2 text-gray-400 hover:text-yellow-400 transition-colors mb-8",children:[M.jsx(fv,{size:20}),M.jsx("span",{children:"Назад к каталогу"})]}),M.jsx("h1",{className:"text-3xl font-bold text-white mb-8",children:o.name}),M.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12",children:[M.jsx("div",{className:"bg-[#3A3A3A] rounded-lg overflow-hidden",children:M.jsxs("div",{className:"relative h-96 grid place-items-center",children:[M.jsx("img",{src:o.images[i],alt:o.name,className:"h-full w-auto object-contain"}),M.jsx("button",{onClick:l,className:"absolute left-2 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-yellow-400 transition-colors duration-200 bg-black/30 rounded-full p-2",children:M.jsx(Gh,{size:24})}),M.jsx("button",{onClick:a,className:"absolute right-2 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-yellow-400 transition-colors duration-200 bg-black/30 rounded-full p-2",children:M.jsx(jh,{size:24})}),M.jsx("div",{className:"absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2",children:o.images.map((c,u)=>M.jsx("button",{onClick:()=>r(u),className:`w-3 h-3 rounded-full transition-all duration-200 ${u===i?"bg-yellow-400 scale-125":"bg-white/30 hover:bg-white/60"}`},u))})]})}),M.jsx("div",{children:o.model3d?M.jsx(Sx,{modelPath:o.model3d,title:o.name,description:"3D модель товара - используйте мышь для вращения"}):M.jsx("div",{className:"bg-[#3A3A3A] rounded-lg h-96 md:h-[500px] flex items-center justify-center border border-gray-700",children:M.jsxs("div",{className:"text-center",children:[M.jsx("p",{className:"text-gray-400 mb-2",children:"3D модель недоступна"}),M.jsx("p",{className:"text-gray-500 text-sm",children:"Для этого товара пока нет 3D модели"})]})})})]}),M.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:[M.jsxs("div",{className:"bg-[#3A3A3A] rounded-lg p-6",children:[M.jsx("div",{className:"text-3xl font-bold text-yellow-400 mb-4",children:o.price}),M.jsxs("div",{className:"flex items-center space-x-1 mb-4",children:[[...Array(5)].map((c,u)=>M.jsx(vv,{size:18,className:u<o.rating?"text-yellow-400 fill-current":"text-gray-600"},u)),M.jsxs("span",{className:"text-gray-400 ml-2",children:["(",o.rating,"/5)"]})]}),M.jsx("div",{className:"mb-6",children:o.inStock?M.jsx("span",{className:"text-green-400 font-medium",children:"✓ В наличии"}):M.jsx("span",{className:"text-red-400 font-medium",children:"✗ Нет в наличии"})}),M.jsxs("button",{disabled:!o.inStock,onClick:t,className:"w-full bg-yellow-400 hover:bg-yellow-500 disabled:bg-gray-600 disabled:cursor-not-allowed text-black font-semibold py-3 px-6 rounded-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-lg flex items-center justify-center space-x-2 group",children:[M.jsx(_v,{size:20}),M.jsx("span",{children:"Заказать товар"})]})]}),M.jsxs("div",{className:"bg-[#3A3A3A] rounded-lg p-6",children:[M.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Описание"}),M.jsx("p",{className:"text-gray-300 leading-relaxed mb-4",children:o.description}),M.jsx("p",{className:"text-gray-400 text-sm leading-relaxed",children:o.fullDescription})]}),M.jsxs("div",{className:"bg-[#3A3A3A] rounded-lg p-6",children:[M.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Характеристики"}),M.jsx("div",{className:"space-y-3",children:Object.entries(o.specifications).map(([c,u])=>M.jsxs("div",{className:"flex justify-between items-center py-2 border-b border-gray-700 last:border-b-0",children:[M.jsxs("span",{className:"text-gray-400 text-sm",children:[c,":"]}),M.jsx("span",{className:"text-white font-medium text-sm",children:u})]},c))})]})]})]})})};function ts(){return ts=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},ts.apply(this,arguments)}const Mx=(n,e)=>{const t={};for(const i in n)e.indexOf(i)===-1&&(t[i]=n[i]);return t},Ex=Tt.createContext(null),qc=Tt.createContext(null),gC=n=>e=>Tt.createElement(qc.Consumer,null,t=>Tt.createElement(n,ts({parent:t},e))),_C=(n=[])=>{const[e,t]=We.useState(!1),i=We.useRef(n),r=(()=>{const o=We.useContext(Ex);if(o===null)throw new Error("Couldn't find Yandex.Maps API in the context. Make sure that hook useYMaps is inside <YMaps /> provider");return o})(),s=r.getApi();return We.useEffect(()=>{r.load().then(()=>Promise.all(i.current.map(r.loadModule))).then(()=>t(!0))},[]),e&&s?s:null},vC=()=>{},xC=["onLoad","onError","modules","apiLoader"];function fp(n,e=!1,t=[]){return i=>{const{width:r,height:s,modules:o=[],onLoad:a=vC}=i,l=_C(t.concat(o)),c=!e||!!l,u=Mx(i,xC);return We.useEffect(()=>l?a(l):void 0,[l]),c?Tt.createElement(n,ts({ymaps:l},u)):Tt.createElement("div",{style:{width:r,height:s}})}}const yC=typeof window<"u",Zg={lang:"ru_RU",load:"",ns:"",mode:"release"},SC=n=>{const{version:e="2.1",enterprise:t=!1,query:i={lang:"ru_RU",load:"",ns:""},preload:r=!1,children:s}=n,o=We.useRef((a=>{const{query:l=Zg}=a,c=Date.now().toString(32),u=l.ns||"",d="__yandex-maps-api-onload__$$"+c,f="__yandex-maps-api-onerror__$$"+c,p=yC?window:{},g={};let _;const m=()=>u?p[u]:_,h=()=>{delete p[d],delete p[f]};return{load:()=>{if(m())return Promise.resolve(_);if(g[u])return g[u];const v={onload:d,onerror:f,...Zg,...l},x=Object.keys(v).map(R=>`${R}=${v[R]}`).join("&"),y=[`https://${a.enterprise?"enterprise.":""}api-maps.yandex.ru`,a.version,"?"+x].join("/");return g[u]=new Promise((R,b)=>{p[d]=A=>{h(),A.ready(()=>{_=A,R(A)})},p[f]=A=>{h(),b(A)},(A=>new Promise((P,w)=>{const E=document.createElement("script");E.type="text/javascript",E.onload=P,E.onerror=w,E.src=A,E.async=!0,document.head.appendChild(E)}))(y).catch(p[f])}),g[u]},getApi:m,loadModule:v=>new Promise((x,y)=>{_.modules.require(v).done(R=>{R.forEach(b=>{((A,P,w,E=!1)=>{const N=typeof P=="string"?P.split("."):P.slice();let V,H=A;for(;N.length>1;)V=N.shift(),H[V]||(H[V]={}),H=H[V];const W=N[0];H[W]=E===!0&&H[W]||w})(_,v,b,!0)}),x(_)},y)})}})({version:e,enterprise:t,query:i,preload:r}));return We.useEffect(()=>{r&&o.current.load()},[o.current]),Tt.createElement(Ex.Provider,{value:o.current},s)},Qg=/^on(?=[A-Z])/;function gt(n){return Object.keys(n).reduce((e,t)=>{if(Qg.test(t)){const i=t.replace(Qg,"").toLowerCase();e._events[i]=n[t]}else e[t]=n[t];return e},{_events:{}})}function rs(n,e,t){typeof t=="function"&&n.events.add(e,t)}function ss(n,e,t){typeof t=="function"&&n.events.remove(e,t)}function yo(n,e,t){Object.keys(Object.assign({},e,t)).forEach(i=>{e[i]!==t[i]&&(ss(n,i,e[i]),rs(n,i,t[i]))})}const Tx=n=>"default"+n.charAt(0).toUpperCase()+n.slice(1);function Ht(n,e){return n[e]!==void 0||n[Tx(e)]===void 0}function be(n,e,t){return(Ht(n,e)?n[e]:n[Tx(e)])||t}function jt(n,e,t=null){if(n!==e){if(n&&("current"in n?n.current=null:typeof n=="function"&&n(null)),!e)return;"current"in e?e.current=t:typeof e=="function"&&e(t)}}function wx(n){const{width:e,height:t,style:i,className:r}=n;return i!==void 0||r!==void 0?Object.assign({},i&&{style:i},r&&{className:r}):{style:{width:e,height:t}}}class MC extends Tt.Component{constructor(e){super(e),this.state={error:null,errorInfo:null}}componentDidCatch(e,t){const{onError:i=()=>{}}=this.props;i(e),this.setState({error:e,errorInfo:t})}render(){return this.state.error?null:this.props.children}}const hp=n=>({onError:e,...t})=>Tt.createElement(MC,{onError:e},Tt.createElement(n,t));class ia extends Tt.Component{constructor(){super(),this.instance=null,this.state={instance:null},this._parentElement=null,this._getRef=e=>{this._parentElement=e}}componentDidMount(){this.instance=ia.mountObject(this._parentElement,this.props.ymaps.Map,this.props),this.setState({instance:this.instance})}componentDidUpdate(e){this.instance!==null&&ia.updateObject(this.instance,e,this.props)}componentWillUnmount(){ia.unmountObject(this.instance,this.props)}render(){const e=wx(this.props),t=gt(this.props),i=Mx(t,["_events","state","defaultState","options","defaultOptions","instanceRef","ymaps","children","width","height","style","className"]);return Tt.createElement(qc.Provider,{value:this.state.instance},Tt.createElement("div",ts({ref:this._getRef},e,i),this.props.children))}static mountObject(e,t,i){const{instanceRef:r,_events:s}=gt(i),o=new t(e,be(i,"state"),be(i,"options"));return Object.keys(s).forEach(a=>rs(o,a,s[a])),jt(null,r,o),o}static updateObject(e,t,i){const{_events:r,instanceRef:s}=gt(i),{_events:o,instanceRef:a}=gt(t);if(Ht(i,"state")){const l=be(t,"state",{}),c=be(i,"state",{});l.type!==c.type&&e.setType(c.type),l.behaviors!==c.behaviors&&(l.behaviors&&e.behaviors.disable(l.behaviors),c.behaviors&&e.behaviors.enable(c.behaviors)),c.zoom&&l.zoom!==c.zoom&&e.setZoom(c.zoom),c.center&&l.center!==c.center&&e.setCenter(c.center),c.bounds&&l.bounds!==c.bounds&&e.setBounds(c.bounds)}if(Ht(i,"options")){const l=be(t,"options"),c=be(i,"options",{});l!==c&&e.options.set(c)}be(t,"width")===be(i,"width")&&be(t,"height")===be(i,"height")||e.container.fitToViewport(),yo(e,o,r),jt(a,s,e)}static unmountObject(e,t){const{instanceRef:i,_events:r}=gt(t);e!==null&&(Object.keys(r).forEach(s=>ss(e,s,r[s])),e.destroy(),jt(i))}}const Ax=hp(fp(ia,!0,["Map"]));Ax.defaultProps={width:320,height:240};class ra extends Tt.Component{constructor(){super(),this.state={instance:null},this._parentElement=null,this._getRef=e=>{this._parentElement=e}}componentDidMount(){this._mounted=!0,this.props.ymaps.panorama.isSupported()&&ra.mountObject(this._parentElement,this.props.ymaps.panorama,this.props).then(e=>this._mounted&&this.setState({instance:e}))}componentDidUpdate(e){this.state.instance!==null&&ra.updateObject(this.state.instance,e,this.props)}componentWillUnmount(){this._mounted=!1,ra.unmountObject(this.state.instance,this.props)}render(){const e=wx(this.props);return Tt.createElement("div",ts({ref:this._getRef},e))}static mountObject(e,t,i){const{instanceRef:r,_events:s}=gt(i),o=be(i,"point"),a=be(i,"locateOptions"),l=be(i,"options");return new Promise((c,u)=>{t.locate(o,a).done(d=>{if(d.length>0){const f=new t.Player(e,d[0],l);jt(null,r,f),Object.keys(s).forEach(p=>rs(f,p,s[p])),c(f)}},u)})}static updateObject(e,t,i){const{_events:r,instanceRef:s}=gt(i),{_events:o,instanceRef:a}=gt(t);if(Ht(i,"options")){const l=be(t,"options"),c=be(i,"options");l!==c&&e.options.set(c)}if(Ht(i,"point")){const l=be(i,"point"),c=be(t,"point"),u=be(i,"locateOptions");l!==c&&e.moveTo(l,u)}yo(e,o,r),jt(a,s,e)}static unmountObject(e,t){const{instanceRef:i,_events:r}=gt(t);e!==null&&(Object.keys(r).forEach(s=>ss(e,s,r[s])),jt(i))}}const EC=hp(fp(ra,!0,["panorama.isSupported","panorama.locate","panorama.createPlayer","panorama.Player"]));EC.defaultProps={width:320,height:240};class Kl extends Tt.Component{constructor(){super(),this.state={instance:null},this.instance=null}componentDidMount(){const e=Kl.mountControl(this.props.ymaps.control[this.props.name],this.props);this.instance=e,this.setState({instance:e})}componentDidUpdate(e){this.instance!==null&&Kl.updateControl(this.instance,e,this.props)}componentWillUnmount(){Kl.unmountControl(this.instance,this.props)}render(){return Tt.createElement(qc.Provider,{value:this.state.instance},this.props.children)}static mountControl(e,t){const{instanceRef:i,parent:r,lazy:s,_events:o}=gt(t),a=new e({data:be(t,"data"),options:be(t,"options"),state:be(t,"state"),mapTypes:be(t,"mapTypes"),lazy:s});if(Object.keys(o).forEach(l=>rs(a,l,o[l])),r&&r.controls&&typeof r.controls.add=="function")r.controls.add(a);else{if(!r||!r.add||typeof r.add!="function")throw new Error(`No parent found to mount ${t.name}`);r.add(a)}return jt(null,i,a),a}static updateControl(e,t,i){const{_events:r,instanceRef:s}=gt(i),{_events:o,instanceRef:a}=gt(t);if(Ht(i,"options")){const l=be(t,"options"),c=be(i,"options");l!==c&&e.options.set(c)}if(Ht(i,"data")){const l=be(t,"data"),c=be(i,"data");l!==c&&e.data.set(c)}if(Ht(i,"state")){const l=be(t,"state"),c=be(i,"state");l!==c&&e.state.set(c)}if(Ht(i,"mapTypes")){const l=be(t,"mapTypes"),c=be(i,"mapTypes");l!==c&&(e.removeAllMapTypes(),c.forEach(u=>e.addMapType(u)))}yo(e,o,r),jt(a,s,e)}static unmountControl(e,t){const{instanceRef:i,parent:r,_events:s}=gt(t);e!==null&&(Object.keys(s).forEach(o=>ss(e,o,s[o])),r.controls&&typeof r.controls.remove=="function"?r.controls.remove(e):r.remove&&typeof r.remove=="function"&&r.remove(e),jt(i))}}class Zl extends Tt.Component{constructor(){super(),this.state={instance:null},this.instance=null}componentDidMount(){const e=Zl.mountObject(this.props.ymaps.Clusterer,this.props);this.instance=e,this.setState({instance:e})}componentDidUpdate(e){this.state.instance!==null&&Zl.updateObject(this.instance,e,this.props)}componentWillUnmount(){Zl.unmountObject(this.instance,this.props)}render(){return Tt.createElement(qc.Provider,{value:this.state.instance},this.props.children)}static mountObject(e,t){const{instanceRef:i,parent:r,_events:s}=gt(t),o=new e(be(t,"options"));if(Object.keys(s).forEach(a=>rs(o,a,s[a])),r.geoObjects&&typeof r.geoObjects.add=="function")r.geoObjects.add(o);else{if(!r.add||typeof r.add!="function")throw new Error("No parent found to mount Clusterer");r.add(o)}return jt(null,i,o),o}static updateObject(e,t,i){const{_events:r,instanceRef:s}=gt(i),{_events:o,instanceRef:a}=gt(t);if(Ht(i,"options")){const l=be(t,"options"),c=be(i,"options");l!==c&&e.options.set(c)}yo(e,o,r),jt(a,s,e)}static unmountObject(e,t){const{instanceRef:i,parent:r,_events:s}=gt(t);e!==null&&(Object.keys(s).forEach(o=>ss(e,o,s[o])),r.geoObjects&&typeof r.geoObjects.remove=="function"?r.geoObjects.remove(e):r.remove&&typeof r.remove=="function"&&r.remove(e),jt(i))}}class Ql extends Tt.Component{constructor(){super(),this.state={instance:null}}componentDidMount(){const e=Ql.mountObject(this.props.ymaps.ObjectManager,this.props);this.instance=e,this.setState({instance:e})}componentDidUpdate(e){this.instance!==null&&Ql.updateObject(this.instance,e,this.props)}componentWillUnmount(){Ql.unmountObject(this.instance,this.props)}render(){return null}static mountObject(e,t){const{instanceRef:i,parent:r,_events:s}=gt(t),o=be(t,"options",{}),a=be(t,"features",{}),l=be(t,"filter",null),c=be(t,"objects",{}),u=be(t,"clusters",{}),d=new e(o);if(d.add(a||[]),d.setFilter(l),d.objects.options.set(c),d.clusters.options.set(u),Object.keys(s).forEach(f=>rs(d,f,s[f])),r.geoObjects&&typeof r.geoObjects.add=="function")r.geoObjects.add(d);else{if(!r.add||typeof r.add!="function")throw new Error("No parent found to mount ObjectManager");r.add(d)}return jt(null,i,d),d}static updateObject(e,t,i){const{_events:r,instanceRef:s}=gt(i),{_events:o,instanceRef:a}=gt(t);if(Ht(i,"options")){const l=be(t,"options"),c=be(i,"options");l!==c&&e.options.set(c)}if(Ht(i,"objects")){const l=be(t,"objects"),c=be(i,"objects");l!==c&&e.objects.options.set(c)}if(Ht(i,"clusters")){const l=be(t,"clusters"),c=be(i,"clusters");l!==c&&e.clusters.options.set(c)}if(Ht(i,"filter")){const l=be(t,"filter"),c=be(i,"filter");l!==c&&e.setFilter(c)}if(Ht(i,"features")){const l=be(t,"features"),c=be(i,"features");l!==c&&(e.remove(l),e.add(c))}yo(e,o,r),jt(a,s,e)}static unmountObject(e,t){const{instanceRef:i,parent:r,_events:s}=gt(t);e!==null&&(Object.keys(s).forEach(o=>ss(e,o,s[o])),r.geoObjects&&typeof r.geoObjects.remove=="function"?r.geoObjects.remove(e):r.remove&&typeof r.remove=="function"&&r.remove(e),jt(i))}}class sa extends Tt.Component{constructor(){super(),this.state={instance:null},this.instance=null}componentDidMount(){const{name:e,ymaps:t,dangerZone:i}=this.props,r=sa.mountObject(i&&typeof i.modifyConstructor=="function"?i.modifyConstructor(t[e]):t[e],this.props);this.instance=r,this.setState({instance:r})}componentDidUpdate(e){this.instance!==null&&sa.updateObject(this.instance,e,this.props)}componentWillUnmount(){sa.unmountObject(this.instance,this.props)}render(){return null}static mountObject(e,t){const{instanceRef:i,parent:r,_events:s}=gt(t),o=new e(be(t,"geometry"),be(t,"properties"),be(t,"options"));if(Object.keys(s).forEach(a=>rs(o,a,s[a])),r&&r.geoObjects&&typeof r.geoObjects.add=="function")r.geoObjects.add(o);else{if(!r||!r.add||typeof r.add!="function")throw new Error(`No parent found to mount ${t.name}`);r.add(o)}return jt(null,i,o),o}static updateObject(e,t,i){const{_events:r,instanceRef:s}=gt(i),{_events:o,instanceRef:a}=gt(t);if(Ht(i,"geometry")){const l=be(t,"geometry",{}),c=be(i,"geometry",{});Array.isArray(c)&&c!==l?Array.isArray(c[0])&&typeof c[1]=="number"?(e.geometry.setCoordinates(c[0]),e.geometry.setRadius(c[1])):e.geometry.setCoordinates(c):typeof c=="object"&&(c.coordinates!==l.coordinates&&e.geometry.setCoordinates(c.coordinates),c.radius!==l.radius&&e.geometry.setRadius(c.radius))}if(Ht(i,"properties")){const l=be(t,"properties"),c=be(i,"properties");l!==c&&e.properties.set(c)}if(Ht(i,"options")){const l=be(t,"options"),c=be(i,"options");l!==c&&e.options.set(c)}yo(e,o,r),jt(a,s,e)}static unmountObject(e,t){const{instanceRef:i,parent:r,_events:s}=gt(t);e!==null&&(Object.keys(s).forEach(o=>ss(e,o,s[o])),r.geoObjects&&typeof r.geoObjects.remove=="function"?r.geoObjects.remove(e):r.remove&&typeof r.remove=="function"&&r.remove(e),jt(i))}}var TC=hp(gC(fp(n=>Tt.createElement(sa,ts({},n,{name:"Placemark"})),!0,["Placemark"])));const wC=()=>{const n=[{icon:mv,title:"Адрес офиса",primary:"г. Санкт-Петербург, пер. Челиева, 17, офис 208",secondary:"Пн-Пт: 9:00-18:00",color:"text-yellow-400"},{icon:gv,title:"Телефон",primary:"+7 (981) 746-73-30",secondary:"Пн-Пт: 9:00-20:00",color:"text-yellow-400"},{icon:pv,title:"Email",primary:"avan-team@mail.ru",secondary:"Отдел продаж",color:"text-yellow-400"}];return M.jsx("section",{id:"contacts",className:"py-20 bg-[#1A1A1A]",children:M.jsxs("div",{className:"container mx-auto px-4",children:[M.jsxs("div",{className:"text-center mb-16",children:[M.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-white mb-4",children:"Контакты"}),M.jsx("p",{className:"text-gray-300 text-lg max-w-2xl mx-auto",children:"Свяжитесь с нами удобным для вас способом или посетите наш офис"})]}),M.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-12",children:n.map((e,t)=>{const i=e.icon;return M.jsxs("div",{className:"bg-[#3A3A3A] rounded-lg p-6 text-center hover:bg-gray-750 transition-all duration-300 hover:scale-105 border border-gray-700 hover:border-yellow-400/50 group",children:[M.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 bg-[#1A1A1A] rounded-full mb-4 group-hover:bg-yellow-400 transition-colors duration-300",children:M.jsx(i,{className:`w-8 h-8 ${e.color} group-hover:text-black transition-colors duration-300`})}),M.jsx("h3",{className:"text-xl font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors",children:e.title}),M.jsx("p",{className:"text-gray-300 font-medium mb-1",children:e.primary}),M.jsxs("p",{className:"text-gray-400 text-sm flex items-center justify-center space-x-2",children:[M.jsx(lM,{className:"w-4 h-4"}),M.jsx("span",{children:e.secondary})]})]},t)})}),M.jsx("div",{className:"bg-[#3A3A3A] rounded-lg overflow-hidden shadow-2xl",children:M.jsx(SC,{children:M.jsx(Ax,{defaultState:{center:[59.888848,30.482479],zoom:17},className:"h-[400px] overflow-hidden",children:M.jsx(TC,{geometry:[59.888848,30.482479],options:{preset:"islands#darkBlueIcon"},properties:{iconCaption:"пер. Челиева, 17, офис 208"}},"office")})})})]})})},cd=()=>{const n=e=>{const t=document.getElementById(e);t==null||t.scrollIntoView({behavior:"smooth"})};return M.jsx("footer",{className:"bg-[#1A1A1A] border-t border-gray-800",children:M.jsxs("div",{className:"container mx-auto px-4 py-12",children:[M.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-5 gap-8",children:[M.jsxs("div",{children:[M.jsxs("div",{className:"flex items-center space-x-2 mb-4",children:[M.jsx(_M,{className:"text-yellow-400 w-6 h-6"}),M.jsx("span",{className:"text-white font-bold text-xl",children:"Авангард"})]}),M.jsx("p",{className:"text-gray-400 text-sm leading-relaxed",children:"Производство и продажа качественных алюминиевых профилей для натяжных потолков. Современные решения для вашего интерьера."})]}),M.jsxs("div",{children:[M.jsx("h3",{className:"text-white font-semibold mb-4",children:"Навигация"}),M.jsxs("ul",{className:"space-y-2",children:[M.jsx("li",{children:M.jsx("button",{onClick:()=>n("hero"),className:"text-gray-400 hover:text-yellow-400 transition-colors duration-200 text-sm",children:"Главная"})}),M.jsx("li",{children:M.jsx("button",{onClick:()=>n("model-viewer"),className:"text-gray-400 hover:text-yellow-400 transition-colors duration-200 text-sm",children:"Новинка"})}),M.jsx("li",{children:M.jsx("button",{onClick:()=>n("catalog"),className:"text-gray-400 hover:text-yellow-400 transition-colors duration-200 text-sm",children:"Каталог"})}),M.jsx("li",{children:M.jsx("button",{onClick:()=>n("contacts"),className:"text-gray-400 hover:text-yellow-400 transition-colors duration-200 text-sm",children:"Контакты"})}),M.jsx("li",{children:M.jsx("button",{onClick:()=>window.location.href="/",className:"text-gray-400 hover:text-yellow-400 transition-colors duration-200 text-sm",children:"Основной сайт"})})]})]}),M.jsxs("div",{children:[M.jsx("h3",{className:"text-white font-semibold mb-4",children:"Продукция"}),M.jsxs("ul",{className:"space-y-2 text-sm text-gray-400",children:[M.jsx("li",{children:"Стандартные профили"}),M.jsx("li",{children:"Карнизы"}),M.jsx("li",{children:"Световые линии"}),M.jsx("li",{children:"Контурные профили"})]})]}),M.jsxs("div",{children:[M.jsx("h3",{className:"text-white font-semibold mb-4",children:"Соглашения"}),M.jsxs("div",{className:"space-y-3",children:[M.jsx("button",{onClick:()=>window.open("/soglasie-na-obrabotky.pdf","_blank"),className:"text-gray-400 hover:text-yellow-400 transition-colors duration-200 text-sm",children:"Обработка персональных данных"}),M.jsx("button",{onClick:()=>window.open("/politika.pdf","_blank"),className:"text-gray-400 hover:text-yellow-400 transition-colors duration-200 text-sm",children:"Политика конфиденциальности"}),M.jsx("button",{onClick:()=>window.open("/cookie.pdf","_blank"),className:"text-gray-400 hover:text-yellow-400 transition-colors duration-200 text-sm",children:"Политика файлов cookies"})]})]}),M.jsxs("div",{children:[M.jsx("h3",{className:"text-white font-semibold mb-4",children:"Контакты"}),M.jsxs("div",{className:"space-y-3",children:[M.jsxs("div",{className:"flex items-center space-x-3 text-sm",children:[M.jsx(gv,{className:"text-yellow-400 w-4 h-4 flex-shrink-0"}),M.jsx("span",{className:"text-gray-400",children:"+7 (981) 746-73-30"})]}),M.jsxs("div",{className:"flex items-center space-x-3 text-sm",children:[M.jsx(pv,{className:"text-yellow-400 w-4 h-4 flex-shrink-0"}),M.jsx("span",{className:"text-gray-400",children:"avan-team@mail.ru"})]}),M.jsxs("div",{className:"flex items-start space-x-3 text-sm",children:[M.jsx(mv,{className:"text-yellow-400 w-4 h-4 flex-shrink-0 mt-1"}),M.jsxs("span",{className:"text-gray-400",children:["г. Санкт-Петербург,",M.jsx("br",{}),"пер. Челиева, 17, офис 208"]})]})]})]})]}),M.jsx("div",{className:"border-t border-gray-800 mt-8 pt-8",children:M.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center",children:[M.jsx("div",{className:"text-gray-400 text-sm mb-4 md:mb-0",children:"© 2025 Авангард. Все права защищены."}),M.jsx("div",{className:"text-gray-400 text-sm",children:"Производство алюминиевых профилей для натяжных потолков"})]})})]})})};function AC(){const[n,e]=We.useState("home"),[t,i]=We.useState(""),[r,s]=We.useState(""),o={standard:"Стандартные профили",cornices:"Карнизы",contour:"Комплектующие"},a=g=>{i(g),e("category")},l=()=>{e("home"),i("")},c=g=>{i(g)},u=g=>{s(g),e("product")},d=()=>{e("category"),s("")},f=g=>{e("home"),i(""),s(""),setTimeout(()=>{const _=document.getElementById(g);_==null||_.scrollIntoView({behavior:"smooth"})},100)},p=()=>{f("contact-form")};return n==="product"?M.jsxs("div",{className:"min-h-screen bg-[#1A1A1A]",children:[M.jsx(Tu,{onNavigate:f}),M.jsx(mC,{productId:r,onBack:d,onOrderClick:p}),M.jsx(cd,{})]}):n==="category"?M.jsxs("div",{className:"min-h-screen bg-[#1A1A1A]",children:[M.jsx(Tu,{onNavigate:f}),M.jsx(bM,{categoryId:t,categoryTitle:o[t],onBack:l,onCategoryChange:c,onProductClick:u,onOrderClick:p}),M.jsx(cd,{})]}):M.jsxs("div",{className:"min-h-screen bg-[#1A1A1A]",children:[M.jsx(Tu,{}),M.jsx(TM,{}),M.jsx("section",{id:"model-viewer",className:"py-20 bg-[#1A1A1A]",children:M.jsxs("div",{className:"container mx-auto px-4",children:[M.jsxs("div",{className:"text-center mb-12",children:[M.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-white mb-4",children:"НОВИНКА - Карниз B2"}),M.jsx("p",{className:"text-gray-300 text-lg max-w-2xl mx-auto",children:"Изучите наш профиль в деталях. Используйте мышь для вращения и масштабирования модели"})]}),M.jsxs("div",{className:"max-w-6xl mx-auto",children:[M.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8",children:[M.jsx("div",{className:"lg:col-span-1",children:M.jsx("div",{className:"bg-[#3A3A3A] rounded-lg overflow-hidden border border-gray-700",children:M.jsxs("div",{className:"relative h-96 md:h-[500px]",children:[M.jsx("img",{src:Wh,alt:"Алюминиевый профиль BP-40",className:"w-full h-full object-cover"}),M.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"}),M.jsx("div",{className:"absolute bottom-4 left-4 right-4",children:M.jsxs("div",{className:"bg-black/60 backdrop-blur-sm rounded-lg p-3",children:[M.jsx("h3",{className:"text-white font-semibold text-lg mb-1",children:"Карниз B2"}),M.jsx("p",{className:"text-gray-300 text-sm",children:"Стандартный алюминиевый профиль"})]})})]})})}),M.jsx("div",{className:"lg:col-span-2",children:M.jsx(Sx,{modelPath:"/3d/b2.glb",title:"Карниз B2",description:"Используйте левую кнопку мыши для вращения • Колесико мыши для масштабирования • Автовращение возобновляется через 4 секунды"})})]}),M.jsxs("div",{className:"bg-[#3A3A3A] rounded-lg p-6 border border-gray-700",children:[M.jsx("h4",{className:"text-xl font-semibold text-white mb-4",children:"Технические характеристики"}),M.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6",children:[M.jsxs("div",{className:"space-y-3 text-sm",children:[M.jsxs("div",{className:"flex justify-between items-center py-2 border-b border-gray-600",children:[M.jsx("span",{className:"text-gray-400",children:"Материал:"}),M.jsx("span",{className:"text-white font-medium",children:"Алюминиевый сплав 6063"})]}),M.jsxs("div",{className:"flex justify-between items-center py-2 border-b border-gray-600",children:[M.jsx("span",{className:"text-gray-400",children:"Высота профиля:"}),M.jsx("span",{className:"text-white font-medium",children:"63.5 мм"})]}),M.jsxs("div",{className:"flex justify-between items-center py-2",children:[M.jsx("span",{className:"text-gray-400",children:"Ширина:"}),M.jsx("span",{className:"text-white font-medium",children:"108.5 мм"})]})]}),M.jsxs("div",{className:"space-y-3 text-sm",children:[M.jsxs("div",{className:"flex justify-between items-center py-2 border-b border-gray-600",children:[M.jsx("span",{className:"text-gray-400",children:"Толщина стенки:"}),M.jsx("span",{className:"text-white font-medium",children:"1.1 мм"})]}),M.jsxs("div",{className:"flex justify-between items-center py-2 border-b border-gray-600",children:[M.jsx("span",{className:"text-gray-400",children:"Длина:"}),M.jsx("span",{className:"text-white font-medium",children:"2.0 м / 2.5 м / 3.2 м"})]}),M.jsxs("div",{className:"flex justify-between items-center py-2",children:[M.jsx("span",{className:"text-gray-400",children:"Цвет:"}),M.jsx("span",{className:"text-white font-medium",children:"Белый матовый, чёрный муар"})]})]}),M.jsxs("div",{className:"space-y-3 text-sm",children:[M.jsxs("div",{className:"flex justify-between items-center py-2 border-b border-gray-600",children:[M.jsx("span",{className:"text-gray-400",children:"Вес:"}),M.jsx("span",{className:"text-white font-medium",children:"1.8 кг/м"})]}),M.jsxs("div",{className:"flex justify-between items-center py-2 border-b border-gray-600",children:[M.jsx("span",{className:"text-gray-400",children:"Рабочая температура:"}),M.jsx("span",{className:"text-white font-medium",children:"-40°C до +80°C"})]}),M.jsxs("div",{className:"flex justify-between items-center py-2",children:[M.jsx("span",{className:"text-gray-400",children:"Стандарт:"}),M.jsx("span",{className:"text-white font-medium",children:"ГОСТ 22233-2001"})]})]})]}),M.jsxs("div",{className:"p-4 bg-yellow-400/10 border border-yellow-400/30 rounded-lg",children:[M.jsx("p",{className:"text-yellow-400 text-sm font-medium mb-2",children:"✓ Соответствует ГОСТ стандартам"}),M.jsx("p",{className:"text-gray-300 text-sm leading-relaxed",children:"Профиль изготовлен из высококачественного алюминиевого сплава."})]})]})]})]})}),M.jsx(wM,{onCategoryClick:a}),M.jsx(wC,{}),M.jsx(cd,{})]})}dv(document.getElementById("root")).render(M.jsx(We.StrictMode,{children:M.jsx(AC,{})}));
