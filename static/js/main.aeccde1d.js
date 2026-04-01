/*! For license information please see main.aeccde1d.js.LICENSE.txt */
(()=>{"use strict";var e={730(e,t,n){var r=n(43),a=n(853);function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,l={};function s(e,t){u(e,t),u(e+"Capture",t)}function u(e,t){for(l[e]=t,e=0;e<t.length;e++)i.add(t[e])}var c=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},m={};function h(e,t,n,r,a,o,i){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){g[e]=new h(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];g[t]=new h(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){g[e]=new h(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){g[e]=new h(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){g[e]=new h(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){g[e]=new h(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){g[e]=new h(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){g[e]=new h(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){g[e]=new h(e,5,!1,e.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function b(e){return e[1].toUpperCase()}function y(e,t,n,r){var a=g.hasOwnProperty(t)?g[t]:null;(null!==a?0!==a.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,a,r)&&(n=null),r||null===a?function(e){return!!d.call(m,e)||!d.call(p,e)&&(f.test(e)?m[e]=!0:(p[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=null===n?3!==a.type&&"":n:(t=a.attributeName,r=a.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(a=a.type)||4===a&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(v,b);g[t]=new h(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(v,b);g[t]=new h(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(v,b);g[t]=new h(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){g[e]=new h(e,1,!1,e.toLowerCase(),null,!1,!1)}),g.xlinkHref=new h("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){g[e]=new h(e,1,!1,e.toLowerCase(),null,!0,!0)});var x=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,k=Symbol.for("react.element"),w=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),j=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),T=Symbol.for("react.memo"),I=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var L=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var R=Symbol.iterator;function N(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=R&&e[R]||e["@@iterator"])?e:null}var D,M=Object.assign;function O(e){if(void 0===D)try{throw Error()}catch(ce){var t=ce.stack.trim().match(/\n( *(at )?)/);D=t&&t[1]||""}return"\n"+D+e}var F=!1;function $(e,t){if(!e||F)return"";F=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(fe){var r=fe}Reflect.construct(e,[],t)}else{try{t.call()}catch(fe){r=fe}e.call(t.prototype)}else{try{throw Error()}catch(fe){r=fe}e()}}catch(fe){if(fe&&r&&"string"===typeof fe.stack){for(var a=fe.stack.split("\n"),o=r.stack.split("\n"),i=a.length-1,l=o.length-1;1<=i&&0<=l&&a[i]!==o[l];)l--;for(;1<=i&&0<=l;i--,l--)if(a[i]!==o[l]){if(1!==i||1!==l)do{if(i--,0>--l||a[i]!==o[l]){var s="\n"+a[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}}while(1<=i&&0<=l);break}}}finally{F=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?O(e):""}function U(e){switch(e.tag){case 5:return O(e.type);case 16:return O("Lazy");case 13:return O("Suspense");case 19:return O("SuspenseList");case 0:case 2:case 15:return e=$(e.type,!1);case 11:return e=$(e.type.render,!1);case 1:return e=$(e.type,!0);default:return""}}function B(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case S:return"Fragment";case w:return"Portal";case _:return"Profiler";case E:return"StrictMode";case A:return"Suspense";case z:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case j:return(e.displayName||"Context")+".Consumer";case C:return(e._context.displayName||"Context")+".Provider";case P:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case T:return null!==(t=e.displayName||null)?t:B(e.type)||"Memo";case I:t=e._payload,e=e._init;try{return B(e(t))}catch(ce){}}return null}function H(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return B(t);case 8:return t===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function V(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function W(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function Y(e){e._valueTracker||(e._valueTracker=function(e){var t=W(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var a=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){r=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function K(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=W(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function Q(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(xe){return e.body}}function q(e,t){var n=t.checked;return M({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function J(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=V(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function G(e,t){null!=(t=t.checked)&&y(e,"checked",t,!1)}function X(e,t){G(e,t);var n=V(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,V(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function Z(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&Q(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+V(n),t=null,a=0;a<e.length;a++){if(e[a].value===n)return e[a].selected=!0,void(r&&(e[a].defaultSelected=!0));null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(o(91));return M({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ae(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(o(92));if(te(n)){if(1<n.length)throw Error(o(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:V(n)}}function oe(e,t){var n=V(t.value),r=V(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function ie(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function le(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function se(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?le(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var de,pe=function(e){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n)})}:e}(function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((de=de||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=de.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ve(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var be={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ye=["Webkit","ms","Moz","O"];function ke(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||be.hasOwnProperty(e)&&be[e]?(""+t).trim():t+"px"}function we(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),a=ke(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}Object.keys(be).forEach(function(e){ye.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),be[t]=be[e]})});var Se=M({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ee(e,t){if(t){if(Se[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(o(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(o(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(o(62))}}function _e(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ce=null;function je(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Pe=null,Ae=null,ze=null;function Ie(e){if(e=ja(e)){if("function"!==typeof Pe)throw Error(o(280));var t=e.stateNode;t&&(t=Aa(t),Pe(e.stateNode,e.type,t))}}function Le(e){Ae?ze?ze.push(e):ze=[e]:Ae=e}function Ne(){if(Ae){var e=Ae,t=ze;if(ze=Ae=null,Ie(e),t)for(e=0;e<t.length;e++)Ie(t[e])}}function De(e,t){return e(t)}function Me(){}var Oe=!1;function Fe(e,t,n){if(Oe)return e(t,n);Oe=!0;try{return De(e,t,n)}finally{Oe=!1,(null!==Ae||null!==ze)&&(Me(),Ne())}}function $e(e,t){var n=e.stateNode;if(null===n)return null;var r=Aa(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(o(231,t,typeof n));return n}var Ue=!1;if(c)try{var Be={};Object.defineProperty(Be,"passive",{get:function(){Ue=!0}}),window.addEventListener("test",Be,Be),window.removeEventListener("test",Be,Be)}catch(ue){Ue=!1}function He(e,t,n,r,a,o,i,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Ve=!1,We=null,Ye=!1,Ke=null,Qe={onError:function(e){Ve=!0,We=e}};function qe(e,t,n,r,a,o,i,l,s){Ve=!1,We=null,He.apply(Qe,arguments)}function Je(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function Ge(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function Xe(e){if(Je(e)!==e)throw Error(o(188))}function Ze(e){return e=function(e){var t=e.alternate;if(!t){if(null===(t=Je(e)))throw Error(o(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(null===a)break;var i=a.alternate;if(null===i){if(null!==(r=a.return)){n=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return Xe(a),e;if(i===r)return Xe(a),t;i=i.sibling}throw Error(o(188))}if(n.return!==r.return)n=a,r=i;else{for(var l=!1,s=a.child;s;){if(s===n){l=!0,n=a,r=i;break}if(s===r){l=!0,r=a,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=a;break}if(s===r){l=!0,r=i,n=a;break}s=s.sibling}if(!l)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(3!==n.tag)throw Error(o(188));return n.stateNode.current===n?e:t}(e),null!==e?et(e):null}function et(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=et(e);if(null!==t)return t;e=e.sibling}return null}var tt=a.unstable_scheduleCallback,nt=a.unstable_cancelCallback,rt=a.unstable_shouldYield,at=a.unstable_requestPaint,ot=a.unstable_now,it=a.unstable_getCurrentPriorityLevel,lt=a.unstable_ImmediatePriority,st=a.unstable_UserBlockingPriority,ut=a.unstable_NormalPriority,ct=a.unstable_LowPriority,dt=a.unstable_IdlePriority,ft=null,pt=null;var mt=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(ht(e)/gt|0)|0},ht=Math.log,gt=Math.LN2;var vt=64,bt=4194304;function yt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function xt(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,a=e.suspendedLanes,o=e.pingedLanes,i=268435455&n;if(0!==i){var l=i&~a;0!==l?r=yt(l):0!==(o&=i)&&(r=yt(o))}else 0!==(i=n&~a)?r=yt(i):0!==o&&(r=yt(o));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&a)&&((a=r&-r)>=(o=t&-t)||16===a&&0!==(4194240&o)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)a=1<<(n=31-mt(t)),r|=e[n],t&=~a;return r}function kt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function wt(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function St(){var e=vt;return 0===(4194240&(vt<<=1))&&(vt=64),e}function Et(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function _t(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-mt(t)]=n}function Ct(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-mt(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var jt=0;function Pt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var At,zt,Tt,It,Lt,Rt=!1,Nt=[],Dt=null,Mt=null,Ot=null,Ft=new Map,$t=new Map,Ut=[],Bt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ht(e,t){switch(e){case"focusin":case"focusout":Dt=null;break;case"dragenter":case"dragleave":Mt=null;break;case"mouseover":case"mouseout":Ot=null;break;case"pointerover":case"pointerout":Ft.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":$t.delete(t.pointerId)}}function Vt(e,t,n,r,a,o){return null===e||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[a]},null!==t&&(null!==(t=ja(t))&&zt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==a&&-1===t.indexOf(a)&&t.push(a),e)}function Wt(e){var t=Ca(e.target);if(null!==t){var n=Je(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=Ge(n)))return e.blockedOn=t,void Lt(e.priority,function(){Tt(n)})}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Yt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=rn(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=ja(n))&&zt(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);Ce=r,n.target.dispatchEvent(r),Ce=null,t.shift()}return!0}function Kt(e,t,n){Yt(e)&&n.delete(t)}function Qt(){Rt=!1,null!==Dt&&Yt(Dt)&&(Dt=null),null!==Mt&&Yt(Mt)&&(Mt=null),null!==Ot&&Yt(Ot)&&(Ot=null),Ft.forEach(Kt),$t.forEach(Kt)}function qt(e,t){e.blockedOn===t&&(e.blockedOn=null,Rt||(Rt=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Qt)))}function Jt(e){function t(t){return qt(t,e)}if(0<Nt.length){qt(Nt[0],e);for(var n=1;n<Nt.length;n++){var r=Nt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Dt&&qt(Dt,e),null!==Mt&&qt(Mt,e),null!==Ot&&qt(Ot,e),Ft.forEach(t),$t.forEach(t),n=0;n<Ut.length;n++)(r=Ut[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Ut.length&&null===(n=Ut[0]).blockedOn;)Wt(n),null===n.blockedOn&&Ut.shift()}var Gt=x.ReactCurrentBatchConfig,Xt=!0;function Zt(e,t,n,r){var a=jt,o=Gt.transition;Gt.transition=null;try{jt=1,tn(e,t,n,r)}finally{jt=a,Gt.transition=o}}function en(e,t,n,r){var a=jt,o=Gt.transition;Gt.transition=null;try{jt=4,tn(e,t,n,r)}finally{jt=a,Gt.transition=o}}function tn(e,t,n,r){if(Xt){var a=rn(e,t,n,r);if(null===a)Xr(e,t,r,nn,n),Ht(e,r);else if(function(e,t,n,r,a){switch(t){case"focusin":return Dt=Vt(Dt,e,t,n,r,a),!0;case"dragenter":return Mt=Vt(Mt,e,t,n,r,a),!0;case"mouseover":return Ot=Vt(Ot,e,t,n,r,a),!0;case"pointerover":var o=a.pointerId;return Ft.set(o,Vt(Ft.get(o)||null,e,t,n,r,a)),!0;case"gotpointercapture":return o=a.pointerId,$t.set(o,Vt($t.get(o)||null,e,t,n,r,a)),!0}return!1}(a,e,t,n,r))r.stopPropagation();else if(Ht(e,r),4&t&&-1<Bt.indexOf(e)){for(;null!==a;){var o=ja(a);if(null!==o&&At(o),null===(o=rn(e,t,n,r))&&Xr(e,t,r,nn,n),o===a)break;a=o}null!==a&&r.stopPropagation()}else Xr(e,t,r,null,n)}}var nn=null;function rn(e,t,n,r){if(nn=null,null!==(e=Ca(e=je(r))))if(null===(t=Je(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=Ge(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return nn=e,null}function an(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(it()){case lt:return 1;case st:return 4;case ut:case ct:return 16;case dt:return 536870912;default:return 16}default:return 16}}var on=null,ln=null,sn=null;function un(){if(sn)return sn;var e,t,n=ln,r=n.length,a="value"in on?on.value:on.textContent,o=a.length;for(e=0;e<r&&n[e]===a[e];e++);var i=r-e;for(t=1;t<=i&&n[r-t]===a[o-t];t++);return sn=a.slice(e,1<t?1-t:void 0)}function cn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function dn(){return!0}function fn(){return!1}function pn(e){function t(t,n,r,a,o){for(var i in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=a,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(i)&&(t=e[i],this[i]=t?t(a):a[i]);return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:!1===a.returnValue)?dn:fn,this.isPropagationStopped=fn,this}return M(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=dn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=dn)},persist:function(){},isPersistent:dn}),t}var mn,hn,gn,vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bn=pn(vn),yn=M({},vn,{view:0,detail:0}),xn=pn(yn),kn=M({},yn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ln,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==gn&&(gn&&"mousemove"===e.type?(mn=e.screenX-gn.screenX,hn=e.screenY-gn.screenY):hn=mn=0,gn=e),mn)},movementY:function(e){return"movementY"in e?e.movementY:hn}}),wn=pn(kn),Sn=pn(M({},kn,{dataTransfer:0})),En=pn(M({},yn,{relatedTarget:0})),_n=pn(M({},vn,{animationName:0,elapsedTime:0,pseudoElement:0})),Cn=M({},vn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),jn=pn(Cn),Pn=pn(M({},vn,{data:0})),An={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function In(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Tn[e])&&!!t[e]}function Ln(){return In}var Rn=M({},yn,{key:function(e){if(e.key){var t=An[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=cn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?zn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ln,charCode:function(e){return"keypress"===e.type?cn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?cn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Nn=pn(Rn),Dn=pn(M({},kn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Mn=pn(M({},yn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ln})),On=pn(M({},vn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Fn=M({},kn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),$n=pn(Fn),Un=[9,13,27,32],Bn=c&&"CompositionEvent"in window,Hn=null;c&&"documentMode"in document&&(Hn=document.documentMode);var Vn=c&&"TextEvent"in window&&!Hn,Wn=c&&(!Bn||Hn&&8<Hn&&11>=Hn),Yn=String.fromCharCode(32),Kn=!1;function Qn(e,t){switch(e){case"keyup":return-1!==Un.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Jn=!1;var Gn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Gn[e.type]:"textarea"===t}function Zn(e,t,n,r){Le(r),0<(t=ea(t,"onChange")).length&&(n=new bn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var er=null,tr=null;function nr(e){Yr(e,0)}function rr(e){if(K(Pa(e)))return e}function ar(e,t){if("change"===e)return t}var or=!1;if(c){var ir;if(c){var lr="oninput"in document;if(!lr){var sr=document.createElement("div");sr.setAttribute("oninput","return;"),lr="function"===typeof sr.oninput}ir=lr}else ir=!1;or=ir&&(!document.documentMode||9<document.documentMode)}function ur(){er&&(er.detachEvent("onpropertychange",cr),tr=er=null)}function cr(e){if("value"===e.propertyName&&rr(tr)){var t=[];Zn(t,tr,e,je(e)),Fe(nr,t)}}function dr(e,t,n){"focusin"===e?(ur(),tr=n,(er=t).attachEvent("onpropertychange",cr)):"focusout"===e&&ur()}function fr(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return rr(tr)}function pr(e,t){if("click"===e)return rr(t)}function mr(e,t){if("input"===e||"change"===e)return rr(t)}var hr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function gr(e,t){if(hr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!d.call(t,a)||!hr(e[a],t[a]))return!1}return!0}function vr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function br(e,t){var n,r=vr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=vr(r)}}function yr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?yr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function xr(){for(var e=window,t=Q();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(he){n=!1}if(!n)break;t=Q((e=t.contentWindow).document)}return t}function kr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function wr(e){var t=xr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&yr(n.ownerDocument.documentElement,n)){if(null!==r&&kr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var a=n.textContent.length,o=Math.min(r.start,a);r=void 0===r.end?o:Math.min(r.end,a),!e.extend&&o>r&&(a=r,r=o,o=a),a=br(n,o);var i=br(n,r);a&&i&&(1!==e.rangeCount||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&((t=t.createRange()).setStart(a.node,a.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Sr=c&&"documentMode"in document&&11>=document.documentMode,Er=null,_r=null,Cr=null,jr=!1;function Pr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;jr||null==Er||Er!==Q(r)||("selectionStart"in(r=Er)&&kr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},Cr&&gr(Cr,r)||(Cr=r,0<(r=ea(_r,"onSelect")).length&&(t=new bn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Er)))}function Ar(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var zr={animationend:Ar("Animation","AnimationEnd"),animationiteration:Ar("Animation","AnimationIteration"),animationstart:Ar("Animation","AnimationStart"),transitionend:Ar("Transition","TransitionEnd")},Tr={},Ir={};function Lr(e){if(Tr[e])return Tr[e];if(!zr[e])return e;var t,n=zr[e];for(t in n)if(n.hasOwnProperty(t)&&t in Ir)return Tr[e]=n[t];return e}c&&(Ir=document.createElement("div").style,"AnimationEvent"in window||(delete zr.animationend.animation,delete zr.animationiteration.animation,delete zr.animationstart.animation),"TransitionEvent"in window||delete zr.transitionend.transition);var Rr=Lr("animationend"),Nr=Lr("animationiteration"),Dr=Lr("animationstart"),Mr=Lr("transitionend"),Or=new Map,Fr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $r(e,t){Or.set(e,t),s(t,[e])}for(var Ur=0;Ur<Fr.length;Ur++){var Br=Fr[Ur];$r(Br.toLowerCase(),"on"+(Br[0].toUpperCase()+Br.slice(1)))}$r(Rr,"onAnimationEnd"),$r(Nr,"onAnimationIteration"),$r(Dr,"onAnimationStart"),$r("dblclick","onDoubleClick"),$r("focusin","onFocus"),$r("focusout","onBlur"),$r(Mr,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),s("onBeforeInput",["compositionend","keypress","textInput","paste"]),s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Hr));function Wr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,a,i,l,s,u){if(qe.apply(this,arguments),Ve){if(!Ve)throw Error(o(198));var c=We;Ve=!1,We=null,Ye||(Ye=!0,Ke=c)}}(r,t,void 0,e),e.currentTarget=null}function Yr(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var l=r[i],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==o&&a.isPropagationStopped())break e;Wr(a,l,u),o=s}else for(i=0;i<r.length;i++){if(s=(l=r[i]).instance,u=l.currentTarget,l=l.listener,s!==o&&a.isPropagationStopped())break e;Wr(a,l,u),o=s}}}if(Ye)throw e=Ke,Ye=!1,Ke=null,e}function Kr(e,t){var n=t[Sa];void 0===n&&(n=t[Sa]=new Set);var r=e+"__bubble";n.has(r)||(Gr(t,e,2,!1),n.add(r))}function Qr(e,t,n){var r=0;t&&(r|=4),Gr(n,e,r,t)}var qr="_reactListening"+Math.random().toString(36).slice(2);function Jr(e){if(!e[qr]){e[qr]=!0,i.forEach(function(t){"selectionchange"!==t&&(Vr.has(t)||Qr(t,!1,e),Qr(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[qr]||(t[qr]=!0,Qr("selectionchange",!1,t))}}function Gr(e,t,n,r){switch(an(t)){case 1:var a=Zt;break;case 4:a=en;break;default:a=tn}n=a.bind(null,t,n,e),a=void 0,!Ue||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(a=!0),r?void 0!==a?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):void 0!==a?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Xr(e,t,n,r,a){var o=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var i=r.tag;if(3===i||4===i){var l=r.stateNode.containerInfo;if(l===a||8===l.nodeType&&l.parentNode===a)break;if(4===i)for(i=r.return;null!==i;){var s=i.tag;if((3===s||4===s)&&((s=i.stateNode.containerInfo)===a||8===s.nodeType&&s.parentNode===a))return;i=i.return}for(;null!==l;){if(null===(i=Ca(l)))return;if(5===(s=i.tag)||6===s){r=o=i;continue e}l=l.parentNode}}r=r.return}Fe(function(){var r=o,a=je(n),i=[];e:{var l=Or.get(e);if(void 0!==l){var s=bn,u=e;switch(e){case"keypress":if(0===cn(n))break e;case"keydown":case"keyup":s=Nn;break;case"focusin":u="focus",s=En;break;case"focusout":u="blur",s=En;break;case"beforeblur":case"afterblur":s=En;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":s=wn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=Sn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=Mn;break;case Rr:case Nr:case Dr:s=_n;break;case Mr:s=On;break;case"scroll":s=xn;break;case"wheel":s=$n;break;case"copy":case"cut":case"paste":s=jn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=Dn}var c=0!==(4&t),d=!c&&"scroll"===e,f=c?null!==l?l+"Capture":null:l;c=[];for(var p,m=r;null!==m;){var h=(p=m).stateNode;if(5===p.tag&&null!==h&&(p=h,null!==f&&(null!=(h=$e(m,f))&&c.push(Zr(m,h,p)))),d)break;m=m.return}0<c.length&&(l=new s(l,u,null,n,a),i.push({event:l,listeners:c}))}}if(0===(7&t)){if(s="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||n===Ce||!(u=n.relatedTarget||n.fromElement)||!Ca(u)&&!u[wa])&&(s||l)&&(l=a.window===a?a:(l=a.ownerDocument)?l.defaultView||l.parentWindow:window,s?(s=r,null!==(u=(u=n.relatedTarget||n.toElement)?Ca(u):null)&&(u!==(d=Je(u))||5!==u.tag&&6!==u.tag)&&(u=null)):(s=null,u=r),s!==u)){if(c=wn,h="onMouseLeave",f="onMouseEnter",m="mouse","pointerout"!==e&&"pointerover"!==e||(c=Dn,h="onPointerLeave",f="onPointerEnter",m="pointer"),d=null==s?l:Pa(s),p=null==u?l:Pa(u),(l=new c(h,m+"leave",s,n,a)).target=d,l.relatedTarget=p,h=null,Ca(a)===r&&((c=new c(f,m+"enter",u,n,a)).target=p,c.relatedTarget=d,h=c),d=h,s&&u)e:{for(f=u,m=0,p=c=s;p;p=ta(p))m++;for(p=0,h=f;h;h=ta(h))p++;for(;0<m-p;)c=ta(c),m--;for(;0<p-m;)f=ta(f),p--;for(;m--;){if(c===f||null!==f&&c===f.alternate)break e;c=ta(c),f=ta(f)}c=null}else c=null;null!==s&&na(i,l,s,c,!1),null!==u&&null!==d&&na(i,d,u,c,!0)}if("select"===(s=(l=r?Pa(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===s&&"file"===l.type)var g=ar;else if(Xn(l))if(or)g=mr;else{g=fr;var v=dr}else(s=l.nodeName)&&"input"===s.toLowerCase()&&("checkbox"===l.type||"radio"===l.type)&&(g=pr);switch(g&&(g=g(e,r))?Zn(i,g,n,a):(v&&v(e,l,r),"focusout"===e&&(v=l._wrapperState)&&v.controlled&&"number"===l.type&&ee(l,"number",l.value)),v=r?Pa(r):window,e){case"focusin":(Xn(v)||"true"===v.contentEditable)&&(Er=v,_r=r,Cr=null);break;case"focusout":Cr=_r=Er=null;break;case"mousedown":jr=!0;break;case"contextmenu":case"mouseup":case"dragend":jr=!1,Pr(i,n,a);break;case"selectionchange":if(Sr)break;case"keydown":case"keyup":Pr(i,n,a)}var b;if(Bn)e:{switch(e){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Jn?Qn(e,n)&&(y="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(y="onCompositionStart");y&&(Wn&&"ko"!==n.locale&&(Jn||"onCompositionStart"!==y?"onCompositionEnd"===y&&Jn&&(b=un()):(ln="value"in(on=a)?on.value:on.textContent,Jn=!0)),0<(v=ea(r,y)).length&&(y=new Pn(y,e,null,n,a),i.push({event:y,listeners:v}),b?y.data=b:null!==(b=qn(n))&&(y.data=b))),(b=Vn?function(e,t){switch(e){case"compositionend":return qn(t);case"keypress":return 32!==t.which?null:(Kn=!0,Yn);case"textInput":return(e=t.data)===Yn&&Kn?null:e;default:return null}}(e,n):function(e,t){if(Jn)return"compositionend"===e||!Bn&&Qn(e,t)?(e=un(),sn=ln=on=null,Jn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Wn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=ea(r,"onBeforeInput")).length&&(a=new Pn("onBeforeInput","beforeinput",null,n,a),i.push({event:a,listeners:r}),a.data=b))}Yr(i,t)})}function Zr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ea(e,t){for(var n=t+"Capture",r=[];null!==e;){var a=e,o=a.stateNode;5===a.tag&&null!==o&&(a=o,null!=(o=$e(e,n))&&r.unshift(Zr(e,o,a)),null!=(o=$e(e,t))&&r.push(Zr(e,o,a))),e=e.return}return r}function ta(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function na(e,t,n,r,a){for(var o=t._reactName,i=[];null!==n&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(null!==s&&s===r)break;5===l.tag&&null!==u&&(l=u,a?null!=(s=$e(n,o))&&i.unshift(Zr(n,s,l)):a||null!=(s=$e(n,o))&&i.push(Zr(n,s,l))),n=n.return}0!==i.length&&e.push({event:t,listeners:i})}var ra=/\r\n?/g,aa=/\u0000|\uFFFD/g;function oa(e){return("string"===typeof e?e:""+e).replace(ra,"\n").replace(aa,"")}function ia(e,t,n){if(t=oa(t),oa(e)!==t&&n)throw Error(o(425))}function la(){}var sa=null,ua=null;function ca(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var da="function"===typeof setTimeout?setTimeout:void 0,fa="function"===typeof clearTimeout?clearTimeout:void 0,pa="function"===typeof Promise?Promise:void 0,ma="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof pa?function(e){return pa.resolve(null).then(e).catch(ha)}:da;function ha(e){setTimeout(function(){throw e})}function ga(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&8===a.nodeType)if("/$"===(n=a.data)){if(0===r)return e.removeChild(a),void Jt(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=a}while(n);Jt(t)}function va(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function ba(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var ya=Math.random().toString(36).slice(2),xa="__reactFiber$"+ya,ka="__reactProps$"+ya,wa="__reactContainer$"+ya,Sa="__reactEvents$"+ya,Ea="__reactListeners$"+ya,_a="__reactHandles$"+ya;function Ca(e){var t=e[xa];if(t)return t;for(var n=e.parentNode;n;){if(t=n[wa]||n[xa]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=ba(e);null!==e;){if(n=e[xa])return n;e=ba(e)}return t}n=(e=n).parentNode}return null}function ja(e){return!(e=e[xa]||e[wa])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function Pa(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(o(33))}function Aa(e){return e[ka]||null}var za=[],Ta=-1;function Ia(e){return{current:e}}function La(e){0>Ta||(e.current=za[Ta],za[Ta]=null,Ta--)}function Ra(e,t){Ta++,za[Ta]=e.current,e.current=t}var Na={},Da=Ia(Na),Ma=Ia(!1),Oa=Na;function Fa(e,t){var n=e.type.contextTypes;if(!n)return Na;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a,o={};for(a in n)o[a]=t[a];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function $a(e){return null!==(e=e.childContextTypes)&&void 0!==e}function Ua(){La(Ma),La(Da)}function Ba(e,t,n){if(Da.current!==Na)throw Error(o(168));Ra(Da,t),Ra(Ma,n)}function Ha(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var a in r=r.getChildContext())if(!(a in t))throw Error(o(108,H(e)||"Unknown",a));return M({},n,r)}function Va(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Na,Oa=Da.current,Ra(Da,e),Ra(Ma,Ma.current),!0}function Wa(e,t,n){var r=e.stateNode;if(!r)throw Error(o(169));n?(e=Ha(e,t,Oa),r.__reactInternalMemoizedMergedChildContext=e,La(Ma),La(Da),Ra(Da,e)):La(Ma),Ra(Ma,n)}var Ya=null,Ka=!1,Qa=!1;function qa(e){null===Ya?Ya=[e]:Ya.push(e)}function Ja(){if(!Qa&&null!==Ya){Qa=!0;var e=0,t=jt;try{var n=Ya;for(jt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Ya=null,Ka=!1}catch(a){throw null!==Ya&&(Ya=Ya.slice(e+1)),tt(lt,Ja),a}finally{jt=t,Qa=!1}}return null}var Ga=[],Xa=0,Za=null,eo=0,to=[],no=0,ro=null,ao=1,oo="";function io(e,t){Ga[Xa++]=eo,Ga[Xa++]=Za,Za=e,eo=t}function lo(e,t,n){to[no++]=ao,to[no++]=oo,to[no++]=ro,ro=e;var r=ao;e=oo;var a=32-mt(r)-1;r&=~(1<<a),n+=1;var o=32-mt(t)+a;if(30<o){var i=a-a%5;o=(r&(1<<i)-1).toString(32),r>>=i,a-=i,ao=1<<32-mt(t)+a|n<<a|r,oo=o+e}else ao=1<<o|n<<a|r,oo=e}function so(e){null!==e.return&&(io(e,1),lo(e,1,0))}function uo(e){for(;e===Za;)Za=Ga[--Xa],Ga[Xa]=null,eo=Ga[--Xa],Ga[Xa]=null;for(;e===ro;)ro=to[--no],to[no]=null,oo=to[--no],to[no]=null,ao=to[--no],to[no]=null}var co=null,fo=null,po=!1,mo=null;function ho(e,t){var n=Ou(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function go(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,co=e,fo=va(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,co=e,fo=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==ro?{id:ao,overflow:oo}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Ou(18,null,null,0)).stateNode=t,n.return=e,e.child=n,co=e,fo=null,!0);default:return!1}}function vo(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function bo(e){if(po){var t=fo;if(t){var n=t;if(!go(e,t)){if(vo(e))throw Error(o(418));t=va(n.nextSibling);var r=co;t&&go(e,t)?ho(r,n):(e.flags=-4097&e.flags|2,po=!1,co=e)}}else{if(vo(e))throw Error(o(418));e.flags=-4097&e.flags|2,po=!1,co=e}}}function yo(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;co=e}function xo(e){if(e!==co)return!1;if(!po)return yo(e),po=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!ca(e.type,e.memoizedProps)),t&&(t=fo)){if(vo(e))throw ko(),Error(o(418));for(;t;)ho(e,t),t=va(t.nextSibling)}if(yo(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){fo=va(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}fo=null}}else fo=co?va(e.stateNode.nextSibling):null;return!0}function ko(){for(var e=fo;e;)e=va(e.nextSibling)}function wo(){fo=co=null,po=!1}function So(e){null===mo?mo=[e]:mo.push(e)}var Eo=x.ReactCurrentBatchConfig;function _o(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(o(309));var r=n.stateNode}if(!r)throw Error(o(147,e));var a=r,i=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===i?t.ref:(t=function(e){var t=a.refs;null===e?delete t[i]:t[i]=e},t._stringRef=i,t)}if("string"!==typeof e)throw Error(o(284));if(!n._owner)throw Error(o(290,e))}return e}function Co(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function jo(e){return(0,e._init)(e._payload)}function Po(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function a(e,t){return(e=$u(e,t)).index=0,e.sibling=null,e}function i(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function l(t){return e&&null===t.alternate&&(t.flags|=2),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=Vu(n,e.mode,r)).return=e,t):((t=a(t,n)).return=e,t)}function u(e,t,n,r){var o=n.type;return o===S?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===o||"object"===typeof o&&null!==o&&o.$$typeof===I&&jo(o)===t.type)?((r=a(t,n.props)).ref=_o(e,t,n),r.return=e,r):((r=Uu(n.type,n.key,n.props,null,e.mode,r)).ref=_o(e,t,n),r.return=e,r)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Wu(n,e.mode,r)).return=e,t):((t=a(t,n.children||[])).return=e,t)}function d(e,t,n,r,o){return null===t||7!==t.tag?((t=Bu(n,e.mode,r,o)).return=e,t):((t=a(t,n)).return=e,t)}function f(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Vu(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case k:return(n=Uu(t.type,t.key,t.props,null,e.mode,n)).ref=_o(e,null,t),n.return=e,n;case w:return(t=Wu(t,e.mode,n)).return=e,t;case I:return f(e,(0,t._init)(t._payload),n)}if(te(t)||N(t))return(t=Bu(t,e.mode,n,null)).return=e,t;Co(e,t)}return null}function p(e,t,n,r){var a=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==a?null:s(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case k:return n.key===a?u(e,t,n,r):null;case w:return n.key===a?c(e,t,n,r):null;case I:return p(e,t,(a=n._init)(n._payload),r)}if(te(n)||N(n))return null!==a?null:d(e,t,n,r,null);Co(e,n)}return null}function m(e,t,n,r,a){if("string"===typeof r&&""!==r||"number"===typeof r)return s(t,e=e.get(n)||null,""+r,a);if("object"===typeof r&&null!==r){switch(r.$$typeof){case k:return u(t,e=e.get(null===r.key?n:r.key)||null,r,a);case w:return c(t,e=e.get(null===r.key?n:r.key)||null,r,a);case I:return m(e,t,n,(0,r._init)(r._payload),a)}if(te(r)||N(r))return d(t,e=e.get(n)||null,r,a,null);Co(t,r)}return null}function h(a,o,l,s){for(var u=null,c=null,d=o,h=o=0,g=null;null!==d&&h<l.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var v=p(a,d,l[h],s);if(null===v){null===d&&(d=g);break}e&&d&&null===v.alternate&&t(a,d),o=i(v,o,h),null===c?u=v:c.sibling=v,c=v,d=g}if(h===l.length)return n(a,d),po&&io(a,h),u;if(null===d){for(;h<l.length;h++)null!==(d=f(a,l[h],s))&&(o=i(d,o,h),null===c?u=d:c.sibling=d,c=d);return po&&io(a,h),u}for(d=r(a,d);h<l.length;h++)null!==(g=m(d,a,h,l[h],s))&&(e&&null!==g.alternate&&d.delete(null===g.key?h:g.key),o=i(g,o,h),null===c?u=g:c.sibling=g,c=g);return e&&d.forEach(function(e){return t(a,e)}),po&&io(a,h),u}function g(a,l,s,u){var c=N(s);if("function"!==typeof c)throw Error(o(150));if(null==(s=c.call(s)))throw Error(o(151));for(var d=c=null,h=l,g=l=0,v=null,b=s.next();null!==h&&!b.done;g++,b=s.next()){h.index>g?(v=h,h=null):v=h.sibling;var y=p(a,h,b.value,u);if(null===y){null===h&&(h=v);break}e&&h&&null===y.alternate&&t(a,h),l=i(y,l,g),null===d?c=y:d.sibling=y,d=y,h=v}if(b.done)return n(a,h),po&&io(a,g),c;if(null===h){for(;!b.done;g++,b=s.next())null!==(b=f(a,b.value,u))&&(l=i(b,l,g),null===d?c=b:d.sibling=b,d=b);return po&&io(a,g),c}for(h=r(a,h);!b.done;g++,b=s.next())null!==(b=m(h,a,g,b.value,u))&&(e&&null!==b.alternate&&h.delete(null===b.key?g:b.key),l=i(b,l,g),null===d?c=b:d.sibling=b,d=b);return e&&h.forEach(function(e){return t(a,e)}),po&&io(a,g),c}return function e(r,o,i,s){if("object"===typeof i&&null!==i&&i.type===S&&null===i.key&&(i=i.props.children),"object"===typeof i&&null!==i){switch(i.$$typeof){case k:e:{for(var u=i.key,c=o;null!==c;){if(c.key===u){if((u=i.type)===S){if(7===c.tag){n(r,c.sibling),(o=a(c,i.props.children)).return=r,r=o;break e}}else if(c.elementType===u||"object"===typeof u&&null!==u&&u.$$typeof===I&&jo(u)===c.type){n(r,c.sibling),(o=a(c,i.props)).ref=_o(r,c,i),o.return=r,r=o;break e}n(r,c);break}t(r,c),c=c.sibling}i.type===S?((o=Bu(i.props.children,r.mode,s,i.key)).return=r,r=o):((s=Uu(i.type,i.key,i.props,null,r.mode,s)).ref=_o(r,o,i),s.return=r,r=s)}return l(r);case w:e:{for(c=i.key;null!==o;){if(o.key===c){if(4===o.tag&&o.stateNode.containerInfo===i.containerInfo&&o.stateNode.implementation===i.implementation){n(r,o.sibling),(o=a(o,i.children||[])).return=r,r=o;break e}n(r,o);break}t(r,o),o=o.sibling}(o=Wu(i,r.mode,s)).return=r,r=o}return l(r);case I:return e(r,o,(c=i._init)(i._payload),s)}if(te(i))return h(r,o,i,s);if(N(i))return g(r,o,i,s);Co(r,i)}return"string"===typeof i&&""!==i||"number"===typeof i?(i=""+i,null!==o&&6===o.tag?(n(r,o.sibling),(o=a(o,i)).return=r,r=o):(n(r,o),(o=Vu(i,r.mode,s)).return=r,r=o),l(r)):n(r,o)}}var Ao=Po(!0),zo=Po(!1),To=Ia(null),Io=null,Lo=null,Ro=null;function No(){Ro=Lo=Io=null}function Do(e){var t=To.current;La(To),e._currentValue=t}function Mo(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Oo(e,t){Io=e,Ro=Lo=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(jl=!0),e.firstContext=null)}function Fo(e){var t=e._currentValue;if(Ro!==e)if(e={context:e,memoizedValue:t,next:null},null===Lo){if(null===Io)throw Error(o(308));Lo=e,Io.dependencies={lanes:0,firstContext:e}}else Lo=Lo.next=e;return t}var $o=null;function Uo(e){null===$o?$o=[e]:$o.push(e)}function Bo(e,t,n,r){var a=t.interleaved;return null===a?(n.next=n,Uo(t)):(n.next=a.next,a.next=n),t.interleaved=n,Ho(e,r)}function Ho(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Vo=!1;function Wo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ko(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Qo(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&Ns)){var a=r.pending;return null===a?t.next=t:(t.next=a.next,a.next=t),r.pending=t,Ho(e,n)}return null===(a=r.interleaved)?(t.next=t,Uo(r)):(t.next=a.next,a.next=t),r.interleaved=t,Ho(e,n)}function qo(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Ct(e,n)}}function Jo(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var a=null,o=null;if(null!==(n=n.firstBaseUpdate)){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===o?a=o=i:o=o.next=i,n=n.next}while(null!==n);null===o?a=o=t:o=o.next=t}else a=o=t;return n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Go(e,t,n,r){var a=e.updateQueue;Vo=!1;var o=a.firstBaseUpdate,i=a.lastBaseUpdate,l=a.shared.pending;if(null!==l){a.shared.pending=null;var s=l,u=s.next;s.next=null,null===i?o=u:i.next=u,i=s;var c=e.alternate;null!==c&&((l=(c=c.updateQueue).lastBaseUpdate)!==i&&(null===l?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(null!==o){var d=a.baseState;for(i=0,c=u=s=null,l=o;;){var f=l.lane,p=l.eventTime;if((r&f)===f){null!==c&&(c=c.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var m=e,h=l;switch(f=t,p=n,h.tag){case 1:if("function"===typeof(m=h.payload)){d=m.call(p,d,f);break e}d=m;break e;case 3:m.flags=-65537&m.flags|128;case 0:if(null===(f="function"===typeof(m=h.payload)?m.call(p,d,f):m)||void 0===f)break e;d=M({},d,f);break e;case 2:Vo=!0}}null!==l.callback&&0!==l.lane&&(e.flags|=64,null===(f=a.effects)?a.effects=[l]:f.push(l))}else p={eventTime:p,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===c?(u=c=p,s=d):c=c.next=p,i|=f;if(null===(l=l.next)){if(null===(l=a.shared.pending))break;l=(f=l).next,f.next=null,a.lastBaseUpdate=f,a.shared.pending=null}}if(null===c&&(s=d),a.baseState=s,a.firstBaseUpdate=u,a.lastBaseUpdate=c,null!==(t=a.shared.interleaved)){a=t;do{i|=a.lane,a=a.next}while(a!==t)}else null===o&&(a.shared.lanes=0);Hs|=i,e.lanes=i,e.memoizedState=d}}function Xo(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(null!==a){if(r.callback=null,r=n,"function"!==typeof a)throw Error(o(191,a));a.call(r)}}}var Zo={},ei=Ia(Zo),ti=Ia(Zo),ni=Ia(Zo);function ri(e){if(e===Zo)throw Error(o(174));return e}function ai(e,t){switch(Ra(ni,t),Ra(ti,e),Ra(ei,Zo),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:se(null,"");break;default:t=se(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}La(ei),Ra(ei,t)}function oi(){La(ei),La(ti),La(ni)}function ii(e){ri(ni.current);var t=ri(ei.current),n=se(t,e.type);t!==n&&(Ra(ti,e),Ra(ei,n))}function li(e){ti.current===e&&(La(ei),La(ti))}var si=Ia(0);function ui(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ci=[];function di(){for(var e=0;e<ci.length;e++)ci[e]._workInProgressVersionPrimary=null;ci.length=0}var fi=x.ReactCurrentDispatcher,pi=x.ReactCurrentBatchConfig,mi=0,hi=null,gi=null,vi=null,bi=!1,yi=!1,xi=0,ki=0;function wi(){throw Error(o(321))}function Si(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!hr(e[n],t[n]))return!1;return!0}function Ei(e,t,n,r,a,i){if(mi=i,hi=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,fi.current=null===e||null===e.memoizedState?ll:sl,e=n(r,a),yi){i=0;do{if(yi=!1,xi=0,25<=i)throw Error(o(301));i+=1,vi=gi=null,t.updateQueue=null,fi.current=ul,e=n(r,a)}while(yi)}if(fi.current=il,t=null!==gi&&null!==gi.next,mi=0,vi=gi=hi=null,bi=!1,t)throw Error(o(300));return e}function _i(){var e=0!==xi;return xi=0,e}function Ci(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===vi?hi.memoizedState=vi=e:vi=vi.next=e,vi}function ji(){if(null===gi){var e=hi.alternate;e=null!==e?e.memoizedState:null}else e=gi.next;var t=null===vi?hi.memoizedState:vi.next;if(null!==t)vi=t,gi=e;else{if(null===e)throw Error(o(310));e={memoizedState:(gi=e).memoizedState,baseState:gi.baseState,baseQueue:gi.baseQueue,queue:gi.queue,next:null},null===vi?hi.memoizedState=vi=e:vi=vi.next=e}return vi}function Pi(e,t){return"function"===typeof t?t(e):t}function Ai(e){var t=ji(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=gi,a=r.baseQueue,i=n.pending;if(null!==i){if(null!==a){var l=a.next;a.next=i.next,i.next=l}r.baseQueue=a=i,n.pending=null}if(null!==a){i=a.next,r=r.baseState;var s=l=null,u=null,c=i;do{var d=c.lane;if((mi&d)===d)null!==u&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};null===u?(s=u=f,l=r):u=u.next=f,hi.lanes|=d,Hs|=d}c=c.next}while(null!==c&&c!==i);null===u?l=r:u.next=s,hr(r,t.memoizedState)||(jl=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(null!==(e=n.interleaved)){a=e;do{i=a.lane,hi.lanes|=i,Hs|=i,a=a.next}while(a!==e)}else null===a&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function zi(e){var t=ji(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,i=t.memoizedState;if(null!==a){n.pending=null;var l=a=a.next;do{i=e(i,l.action),l=l.next}while(l!==a);hr(i,t.memoizedState)||(jl=!0),t.memoizedState=i,null===t.baseQueue&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Ti(){}function Ii(e,t){var n=hi,r=ji(),a=t(),i=!hr(r.memoizedState,a);if(i&&(r.memoizedState=a,jl=!0),r=r.queue,Vi(Ni.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||null!==vi&&1&vi.memoizedState.tag){if(n.flags|=2048,Fi(9,Ri.bind(null,n,r,a,t),void 0,null),null===Ds)throw Error(o(349));0!==(30&mi)||Li(n,t,a)}return a}function Li(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=hi.updateQueue)?(t={lastEffect:null,stores:null},hi.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Ri(e,t,n,r){t.value=n,t.getSnapshot=r,Di(t)&&Mi(e)}function Ni(e,t,n){return n(function(){Di(t)&&Mi(e)})}function Di(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!hr(e,n)}catch(he){return!0}}function Mi(e){var t=Ho(e,1);null!==t&&uu(t,e,1,-1)}function Oi(e){var t=Ci();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:e},t.queue=e,e=e.dispatch=nl.bind(null,hi,e),[t.memoizedState,e]}function Fi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=hi.updateQueue)?(t={lastEffect:null,stores:null},hi.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function $i(){return ji().memoizedState}function Ui(e,t,n,r){var a=Ci();hi.flags|=e,a.memoizedState=Fi(1|t,n,void 0,void 0===r?null:r)}function Bi(e,t,n,r){var a=ji();r=void 0===r?null:r;var o=void 0;if(null!==gi){var i=gi.memoizedState;if(o=i.destroy,null!==r&&Si(r,i.deps))return void(a.memoizedState=Fi(t,n,o,r))}hi.flags|=e,a.memoizedState=Fi(1|t,n,o,r)}function Hi(e,t){return Ui(8390656,8,e,t)}function Vi(e,t){return Bi(2048,8,e,t)}function Wi(e,t){return Bi(4,2,e,t)}function Yi(e,t){return Bi(4,4,e,t)}function Ki(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Qi(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Bi(4,4,Ki.bind(null,t,e),n)}function qi(){}function Ji(e,t){var n=ji();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&Si(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Gi(e,t){var n=ji();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&Si(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Xi(e,t,n){return 0===(21&mi)?(e.baseState&&(e.baseState=!1,jl=!0),e.memoizedState=n):(hr(n,t)||(n=St(),hi.lanes|=n,Hs|=n,e.baseState=!0),t)}function Zi(e,t){var n=jt;jt=0!==n&&4>n?n:4,e(!0);var r=pi.transition;pi.transition={};try{e(!1),t()}finally{jt=n,pi.transition=r}}function el(){return ji().memoizedState}function tl(e,t,n){var r=su(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},rl(e))al(t,n);else if(null!==(n=Bo(e,t,n,r))){uu(n,e,r,lu()),ol(n,t,r)}}function nl(e,t,n){var r=su(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(rl(e))al(t,a);else{var o=e.alternate;if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=t.lastRenderedReducer))try{var i=t.lastRenderedState,l=o(i,n);if(a.hasEagerState=!0,a.eagerState=l,hr(l,i)){var s=t.interleaved;return null===s?(a.next=a,Uo(t)):(a.next=s.next,s.next=a),void(t.interleaved=a)}}catch(fe){}null!==(n=Bo(e,t,a,r))&&(uu(n,e,r,a=lu()),ol(n,t,r))}}function rl(e){var t=e.alternate;return e===hi||null!==t&&t===hi}function al(e,t){yi=bi=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ol(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Ct(e,n)}}var il={readContext:Fo,useCallback:wi,useContext:wi,useEffect:wi,useImperativeHandle:wi,useInsertionEffect:wi,useLayoutEffect:wi,useMemo:wi,useReducer:wi,useRef:wi,useState:wi,useDebugValue:wi,useDeferredValue:wi,useTransition:wi,useMutableSource:wi,useSyncExternalStore:wi,useId:wi,unstable_isNewReconciler:!1},ll={readContext:Fo,useCallback:function(e,t){return Ci().memoizedState=[e,void 0===t?null:t],e},useContext:Fo,useEffect:Hi,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Ui(4194308,4,Ki.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ui(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ui(4,2,e,t)},useMemo:function(e,t){var n=Ci();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ci();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=tl.bind(null,hi,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},Ci().memoizedState=e},useState:Oi,useDebugValue:qi,useDeferredValue:function(e){return Ci().memoizedState=e},useTransition:function(){var e=Oi(!1),t=e[0];return e=Zi.bind(null,e[1]),Ci().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=hi,a=Ci();if(po){if(void 0===n)throw Error(o(407));n=n()}else{if(n=t(),null===Ds)throw Error(o(349));0!==(30&mi)||Li(r,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,Hi(Ni.bind(null,r,i,e),[e]),r.flags|=2048,Fi(9,Ri.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Ci(),t=Ds.identifierPrefix;if(po){var n=oo;t=":"+t+"R"+(n=(ao&~(1<<32-mt(ao)-1)).toString(32)+n),0<(n=xi++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=ki++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},sl={readContext:Fo,useCallback:Ji,useContext:Fo,useEffect:Vi,useImperativeHandle:Qi,useInsertionEffect:Wi,useLayoutEffect:Yi,useMemo:Gi,useReducer:Ai,useRef:$i,useState:function(){return Ai(Pi)},useDebugValue:qi,useDeferredValue:function(e){return Xi(ji(),gi.memoizedState,e)},useTransition:function(){return[Ai(Pi)[0],ji().memoizedState]},useMutableSource:Ti,useSyncExternalStore:Ii,useId:el,unstable_isNewReconciler:!1},ul={readContext:Fo,useCallback:Ji,useContext:Fo,useEffect:Vi,useImperativeHandle:Qi,useInsertionEffect:Wi,useLayoutEffect:Yi,useMemo:Gi,useReducer:zi,useRef:$i,useState:function(){return zi(Pi)},useDebugValue:qi,useDeferredValue:function(e){var t=ji();return null===gi?t.memoizedState=e:Xi(t,gi.memoizedState,e)},useTransition:function(){return[zi(Pi)[0],ji().memoizedState]},useMutableSource:Ti,useSyncExternalStore:Ii,useId:el,unstable_isNewReconciler:!1};function cl(e,t){if(e&&e.defaultProps){for(var n in t=M({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function dl(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:M({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var fl={isMounted:function(e){return!!(e=e._reactInternals)&&Je(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=lu(),a=su(e),o=Ko(r,a);o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=Qo(e,o,a))&&(uu(t,e,a,r),qo(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=lu(),a=su(e),o=Ko(r,a);o.tag=1,o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=Qo(e,o,a))&&(uu(t,e,a,r),qo(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=lu(),r=su(e),a=Ko(n,r);a.tag=2,void 0!==t&&null!==t&&(a.callback=t),null!==(t=Qo(e,a,r))&&(uu(t,e,r,n),qo(t,e,r))}};function pl(e,t,n,r,a,o,i){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,o,i):!t.prototype||!t.prototype.isPureReactComponent||(!gr(n,r)||!gr(a,o))}function ml(e,t,n){var r=!1,a=Na,o=t.contextType;return"object"===typeof o&&null!==o?o=Fo(o):(a=$a(t)?Oa:Da.current,o=(r=null!==(r=t.contextTypes)&&void 0!==r)?Fa(e,a):Na),t=new t(n,o),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=fl,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),t}function hl(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&fl.enqueueReplaceState(t,t.state,null)}function gl(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Wo(e);var o=t.contextType;"object"===typeof o&&null!==o?a.context=Fo(o):(o=$a(t)?Oa:Da.current,a.context=Fa(e,o)),a.state=e.memoizedState,"function"===typeof(o=t.getDerivedStateFromProps)&&(dl(e,t,o,n),a.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof a.getSnapshotBeforeUpdate||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||(t=a.state,"function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),t!==a.state&&fl.enqueueReplaceState(a,a.state,null),Go(e,n,a,r),a.state=e.memoizedState),"function"===typeof a.componentDidMount&&(e.flags|=4194308)}function vl(e,t){try{var n="",r=t;do{n+=U(r),r=r.return}while(r);var a=n}catch(ge){a="\nError generating stack: "+ge.message+"\n"+ge.stack}return{value:e,source:t,stack:a,digest:null}}function bl(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function yl(e,t){try{console.error(t.value)}catch(ce){setTimeout(function(){throw ce})}}var xl="function"===typeof WeakMap?WeakMap:Map;function kl(e,t,n){(n=Ko(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Gs||(Gs=!0,Xs=r),yl(0,t)},n}function wl(e,t,n){(n=Ko(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){yl(0,t)}}var o=e.stateNode;return null!==o&&"function"===typeof o.componentDidCatch&&(n.callback=function(){yl(0,t),"function"!==typeof r&&(null===Zs?Zs=new Set([this]):Zs.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function Sl(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new xl;var a=new Set;r.set(t,a)}else void 0===(a=r.get(t))&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=Iu.bind(null,e,t,n),t.then(e,e))}function El(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function _l(e,t,n,r,a){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Ko(-1,1)).tag=2,Qo(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var Cl=x.ReactCurrentOwner,jl=!1;function Pl(e,t,n,r){t.child=null===e?zo(t,null,n,r):Ao(t,e.child,n,r)}function Al(e,t,n,r,a){n=n.render;var o=t.ref;return Oo(t,a),r=Ei(e,t,n,r,o,a),n=_i(),null===e||jl?(po&&n&&so(t),t.flags|=1,Pl(e,t,r,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Gl(e,t,a))}function zl(e,t,n,r,a){if(null===e){var o=n.type;return"function"!==typeof o||Fu(o)||void 0!==o.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Uu(n.type,null,r,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,Tl(e,t,o,r,a))}if(o=e.child,0===(e.lanes&a)){var i=o.memoizedProps;if((n=null!==(n=n.compare)?n:gr)(i,r)&&e.ref===t.ref)return Gl(e,t,a)}return t.flags|=1,(e=$u(o,r)).ref=t.ref,e.return=t,t.child=e}function Tl(e,t,n,r,a){if(null!==e){var o=e.memoizedProps;if(gr(o,r)&&e.ref===t.ref){if(jl=!1,t.pendingProps=r=o,0===(e.lanes&a))return t.lanes=e.lanes,Gl(e,t,a);0!==(131072&e.flags)&&(jl=!0)}}return Rl(e,t,n,r,a)}function Il(e,t,n){var r=t.pendingProps,a=r.children,o=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ra($s,Fs),Fs|=n;else{if(0===(1073741824&n))return e=null!==o?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ra($s,Fs),Fs|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==o?o.baseLanes:n,Ra($s,Fs),Fs|=r}else null!==o?(r=o.baseLanes|n,t.memoizedState=null):r=n,Ra($s,Fs),Fs|=r;return Pl(e,t,a,n),t.child}function Ll(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Rl(e,t,n,r,a){var o=$a(n)?Oa:Da.current;return o=Fa(t,o),Oo(t,a),n=Ei(e,t,n,r,o,a),r=_i(),null===e||jl?(po&&r&&so(t),t.flags|=1,Pl(e,t,n,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Gl(e,t,a))}function Nl(e,t,n,r,a){if($a(n)){var o=!0;Va(t)}else o=!1;if(Oo(t,a),null===t.stateNode)Jl(e,t),ml(t,n,r),gl(t,n,r,a),r=!0;else if(null===e){var i=t.stateNode,l=t.memoizedProps;i.props=l;var s=i.context,u=n.contextType;"object"===typeof u&&null!==u?u=Fo(u):u=Fa(t,u=$a(n)?Oa:Da.current);var c=n.getDerivedStateFromProps,d="function"===typeof c||"function"===typeof i.getSnapshotBeforeUpdate;d||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(l!==r||s!==u)&&hl(t,i,r,u),Vo=!1;var f=t.memoizedState;i.state=f,Go(t,r,i,a),s=t.memoizedState,l!==r||f!==s||Ma.current||Vo?("function"===typeof c&&(dl(t,n,c,r),s=t.memoizedState),(l=Vo||pl(t,n,l,r,f,s,u))?(d||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||("function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount()),"function"===typeof i.componentDidMount&&(t.flags|=4194308)):("function"===typeof i.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=u,r=l):("function"===typeof i.componentDidMount&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Yo(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:cl(t.type,l),i.props=u,d=t.pendingProps,f=i.context,"object"===typeof(s=n.contextType)&&null!==s?s=Fo(s):s=Fa(t,s=$a(n)?Oa:Da.current);var p=n.getDerivedStateFromProps;(c="function"===typeof p||"function"===typeof i.getSnapshotBeforeUpdate)||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(l!==d||f!==s)&&hl(t,i,r,s),Vo=!1,f=t.memoizedState,i.state=f,Go(t,r,i,a);var m=t.memoizedState;l!==d||f!==m||Ma.current||Vo?("function"===typeof p&&(dl(t,n,p,r),m=t.memoizedState),(u=Vo||pl(t,n,u,r,f,m,s)||!1)?(c||"function"!==typeof i.UNSAFE_componentWillUpdate&&"function"!==typeof i.componentWillUpdate||("function"===typeof i.componentWillUpdate&&i.componentWillUpdate(r,m,s),"function"===typeof i.UNSAFE_componentWillUpdate&&i.UNSAFE_componentWillUpdate(r,m,s)),"function"===typeof i.componentDidUpdate&&(t.flags|=4),"function"===typeof i.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof i.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),i.props=r,i.state=m,i.context=s,r=u):("function"!==typeof i.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Dl(e,t,n,r,o,a)}function Dl(e,t,n,r,a,o){Ll(e,t);var i=0!==(128&t.flags);if(!r&&!i)return a&&Wa(t,n,!1),Gl(e,t,o);r=t.stateNode,Cl.current=t;var l=i&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&i?(t.child=Ao(t,e.child,null,o),t.child=Ao(t,null,l,o)):Pl(e,t,l,o),t.memoizedState=r.state,a&&Wa(t,n,!0),t.child}function Ml(e){var t=e.stateNode;t.pendingContext?Ba(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Ba(0,t.context,!1),ai(e,t.containerInfo)}function Ol(e,t,n,r,a){return wo(),So(a),t.flags|=256,Pl(e,t,n,r),t.child}var Fl,$l,Ul,Bl={dehydrated:null,treeContext:null,retryLane:0};function Hl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Vl(e,t,n){var r,a=t.pendingProps,i=si.current,l=!1,s=0!==(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!==(2&i)),r?(l=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(i|=1),Ra(si,1&i),null===e)return bo(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(s=a.children,e=a.fallback,l?(a=t.mode,l=t.child,s={mode:"hidden",children:s},0===(1&a)&&null!==l?(l.childLanes=0,l.pendingProps=s):l=Hu(s,a,0,null),e=Bu(e,a,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Hl(n),t.memoizedState=Bl,e):Wl(t,s));if(null!==(i=e.memoizedState)&&null!==(r=i.dehydrated))return function(e,t,n,r,a,i,l){if(n)return 256&t.flags?(t.flags&=-257,Yl(e,t,l,r=bl(Error(o(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(i=r.fallback,a=t.mode,r=Hu({mode:"visible",children:r.children},a,0,null),(i=Bu(i,a,l,null)).flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,0!==(1&t.mode)&&Ao(t,e.child,null,l),t.child.memoizedState=Hl(l),t.memoizedState=Bl,i);if(0===(1&t.mode))return Yl(e,t,l,null);if("$!"===a.data){if(r=a.nextSibling&&a.nextSibling.dataset)var s=r.dgst;return r=s,Yl(e,t,l,r=bl(i=Error(o(419)),r,void 0))}if(s=0!==(l&e.childLanes),jl||s){if(null!==(r=Ds)){switch(l&-l){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}0!==(a=0!==(a&(r.suspendedLanes|l))?0:a)&&a!==i.retryLane&&(i.retryLane=a,Ho(e,a),uu(r,e,a,-1))}return wu(),Yl(e,t,l,r=bl(Error(o(421))))}return"$?"===a.data?(t.flags|=128,t.child=e.child,t=Ru.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,fo=va(a.nextSibling),co=t,po=!0,mo=null,null!==e&&(to[no++]=ao,to[no++]=oo,to[no++]=ro,ao=e.id,oo=e.overflow,ro=t),t=Wl(t,r.children),t.flags|=4096,t)}(e,t,s,a,r,i,n);if(l){l=a.fallback,s=t.mode,r=(i=e.child).sibling;var u={mode:"hidden",children:a.children};return 0===(1&s)&&t.child!==i?((a=t.child).childLanes=0,a.pendingProps=u,t.deletions=null):(a=$u(i,u)).subtreeFlags=14680064&i.subtreeFlags,null!==r?l=$u(r,l):(l=Bu(l,s,n,null)).flags|=2,l.return=t,a.return=t,a.sibling=l,t.child=a,a=l,l=t.child,s=null===(s=e.child.memoizedState)?Hl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=Bl,a}return e=(l=e.child).sibling,a=$u(l,{mode:"visible",children:a.children}),0===(1&t.mode)&&(a.lanes=n),a.return=t,a.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=a,t.memoizedState=null,a}function Wl(e,t){return(t=Hu({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Yl(e,t,n,r){return null!==r&&So(r),Ao(t,e.child,null,n),(e=Wl(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Kl(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Mo(e.return,t,n)}function Ql(e,t,n,r,a){var o=e.memoizedState;null===o?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=a)}function ql(e,t,n){var r=t.pendingProps,a=r.revealOrder,o=r.tail;if(Pl(e,t,r.children,n),0!==(2&(r=si.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Kl(e,n,t);else if(19===e.tag)Kl(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ra(si,r),0===(1&t.mode))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;null!==n;)null!==(e=n.alternate)&&null===ui(e)&&(a=n),n=n.sibling;null===(n=a)?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Ql(t,!1,a,n,o);break;case"backwards":for(n=null,a=t.child,t.child=null;null!==a;){if(null!==(e=a.alternate)&&null===ui(e)){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Ql(t,!0,n,null,o);break;case"together":Ql(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Jl(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Gl(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Hs|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(o(153));if(null!==t.child){for(n=$u(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=$u(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Xl(e,t){if(!po)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Zl(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=14680064&a.subtreeFlags,r|=14680064&a.flags,a.return=e,a=a.sibling;else for(a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function es(e,t,n){var r=t.pendingProps;switch(uo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zl(t),null;case 1:case 17:return $a(t.type)&&Ua(),Zl(t),null;case 3:return r=t.stateNode,oi(),La(Ma),La(Da),di(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(xo(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==mo&&(pu(mo),mo=null))),Zl(t),null;case 5:li(t);var a=ri(ni.current);if(n=t.type,null!==e&&null!=t.stateNode)$l(e,t,n,r),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(o(166));return Zl(t),null}if(e=ri(ei.current),xo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[xa]=t,r[ka]=i,e=0!==(1&t.mode),n){case"dialog":Kr("cancel",r),Kr("close",r);break;case"iframe":case"object":case"embed":Kr("load",r);break;case"video":case"audio":for(a=0;a<Hr.length;a++)Kr(Hr[a],r);break;case"source":Kr("error",r);break;case"img":case"image":case"link":Kr("error",r),Kr("load",r);break;case"details":Kr("toggle",r);break;case"input":J(r,i),Kr("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Kr("invalid",r);break;case"textarea":ae(r,i),Kr("invalid",r)}for(var s in Ee(n,i),a=null,i)if(i.hasOwnProperty(s)){var u=i[s];"children"===s?"string"===typeof u?r.textContent!==u&&(!0!==i.suppressHydrationWarning&&ia(r.textContent,u,e),a=["children",u]):"number"===typeof u&&r.textContent!==""+u&&(!0!==i.suppressHydrationWarning&&ia(r.textContent,u,e),a=["children",""+u]):l.hasOwnProperty(s)&&null!=u&&"onScroll"===s&&Kr("scroll",r)}switch(n){case"input":Y(r),Z(r,i,!0);break;case"textarea":Y(r),ie(r);break;case"select":case"option":break;default:"function"===typeof i.onClick&&(r.onclick=la)}r=a,t.updateQueue=r,null!==r&&(t.flags|=4)}else{s=9===a.nodeType?a:a.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=le(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=s.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),"select"===n&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[xa]=t,e[ka]=r,Fl(e,t),t.stateNode=e;e:{switch(s=_e(n,r),n){case"dialog":Kr("cancel",e),Kr("close",e),a=r;break;case"iframe":case"object":case"embed":Kr("load",e),a=r;break;case"video":case"audio":for(a=0;a<Hr.length;a++)Kr(Hr[a],e);a=r;break;case"source":Kr("error",e),a=r;break;case"img":case"image":case"link":Kr("error",e),Kr("load",e),a=r;break;case"details":Kr("toggle",e),a=r;break;case"input":J(e,r),a=q(e,r),Kr("invalid",e);break;case"option":default:a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=M({},r,{value:void 0}),Kr("invalid",e);break;case"textarea":ae(e,r),a=re(e,r),Kr("invalid",e)}for(i in Ee(n,a),u=a)if(u.hasOwnProperty(i)){var c=u[i];"style"===i?we(e,c):"dangerouslySetInnerHTML"===i?null!=(c=c?c.__html:void 0)&&pe(e,c):"children"===i?"string"===typeof c?("textarea"!==n||""!==c)&&ve(e,c):"number"===typeof c&&ve(e,""+c):"suppressContentEditableWarning"!==i&&"suppressHydrationWarning"!==i&&"autoFocus"!==i&&(l.hasOwnProperty(i)?null!=c&&"onScroll"===i&&Kr("scroll",e):null!=c&&y(e,i,c,s))}switch(n){case"input":Y(e),Z(e,r,!1);break;case"textarea":Y(e),ie(e);break;case"option":null!=r.value&&e.setAttribute("value",""+V(r.value));break;case"select":e.multiple=!!r.multiple,null!=(i=r.value)?ne(e,!!r.multiple,i,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof a.onClick&&(e.onclick=la)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Zl(t),null;case 6:if(e&&null!=t.stateNode)Ul(0,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(o(166));if(n=ri(ni.current),ri(ei.current),xo(t)){if(r=t.stateNode,n=t.memoizedProps,r[xa]=t,(i=r.nodeValue!==n)&&null!==(e=co))switch(e.tag){case 3:ia(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&ia(r.nodeValue,n,0!==(1&e.mode))}i&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[xa]=t,t.stateNode=r}return Zl(t),null;case 13:if(La(si),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(po&&null!==fo&&0!==(1&t.mode)&&0===(128&t.flags))ko(),wo(),t.flags|=98560,i=!1;else if(i=xo(t),null!==r&&null!==r.dehydrated){if(null===e){if(!i)throw Error(o(318));if(!(i=null!==(i=t.memoizedState)?i.dehydrated:null))throw Error(o(317));i[xa]=t}else wo(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Zl(t),i=!1}else null!==mo&&(pu(mo),mo=null),i=!0;if(!i)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&si.current)?0===Us&&(Us=3):wu())),null!==t.updateQueue&&(t.flags|=4),Zl(t),null);case 4:return oi(),null===e&&Jr(t.stateNode.containerInfo),Zl(t),null;case 10:return Do(t.type._context),Zl(t),null;case 19:if(La(si),null===(i=t.memoizedState))return Zl(t),null;if(r=0!==(128&t.flags),null===(s=i.rendering))if(r)Xl(i,!1);else{if(0!==Us||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(s=ui(e))){for(t.flags|=128,Xl(i,!1),null!==(r=s.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(i=n).flags&=14680066,null===(s=i.alternate)?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ra(si,1&si.current|2),t.child}e=e.sibling}null!==i.tail&&ot()>qs&&(t.flags|=128,r=!0,Xl(i,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=ui(s))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Xl(i,!0),null===i.tail&&"hidden"===i.tailMode&&!s.alternate&&!po)return Zl(t),null}else 2*ot()-i.renderingStartTime>qs&&1073741824!==n&&(t.flags|=128,r=!0,Xl(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(null!==(n=i.last)?n.sibling=s:t.child=s,i.last=s)}return null!==i.tail?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ot(),t.sibling=null,n=si.current,Ra(si,r?1&n|2:1&n),t):(Zl(t),null);case 22:case 23:return bu(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&Fs)&&(Zl(t),6&t.subtreeFlags&&(t.flags|=8192)):Zl(t),null;case 24:case 25:return null}throw Error(o(156,t.tag))}function ts(e,t){switch(uo(t),t.tag){case 1:return $a(t.type)&&Ua(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return oi(),La(Ma),La(Da),di(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return li(t),null;case 13:if(La(si),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(o(340));wo()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return La(si),null;case 4:return oi(),null;case 10:return Do(t.type._context),null;case 22:case 23:return bu(),null;default:return null}}Fl=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},$l=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,ri(ei.current);var o,i=null;switch(n){case"input":a=q(e,a),r=q(e,r),i=[];break;case"select":a=M({},a,{value:void 0}),r=M({},r,{value:void 0}),i=[];break;case"textarea":a=re(e,a),r=re(e,r),i=[];break;default:"function"!==typeof a.onClick&&"function"===typeof r.onClick&&(e.onclick=la)}for(c in Ee(n,r),n=null,a)if(!r.hasOwnProperty(c)&&a.hasOwnProperty(c)&&null!=a[c])if("style"===c){var s=a[c];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(l.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(s=null!=a?a[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(null!=u||null!=s))if("style"===c)if(s){for(o in s)!s.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&s[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(c,n)),n=u;else"dangerouslySetInnerHTML"===c?(u=u?u.__html:void 0,s=s?s.__html:void 0,null!=u&&s!==u&&(i=i||[]).push(c,u)):"children"===c?"string"!==typeof u&&"number"!==typeof u||(i=i||[]).push(c,""+u):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(l.hasOwnProperty(c)?(null!=u&&"onScroll"===c&&Kr("scroll",e),i||s===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}},Ul=function(e,t,n,r){n!==r&&(t.flags|=4)};var ns=!1,rs=!1,as="function"===typeof WeakSet?WeakSet:Set,os=null;function is(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(he){Tu(e,t,he)}else n.current=null}function ls(e,t,n){try{n()}catch(he){Tu(e,t,he)}}var ss=!1;function us(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var a=r=r.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,void 0!==o&&ls(t,n,o)}a=a.next}while(a!==r)}}function cs(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ds(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function fs(e){var t=e.alternate;null!==t&&(e.alternate=null,fs(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[xa],delete t[ka],delete t[Sa],delete t[Ea],delete t[_a])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ps(e){return 5===e.tag||3===e.tag||4===e.tag}function ms(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||ps(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function hs(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=la));else if(4!==r&&null!==(e=e.child))for(hs(e,t,n),e=e.sibling;null!==e;)hs(e,t,n),e=e.sibling}function gs(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(gs(e,t,n),e=e.sibling;null!==e;)gs(e,t,n),e=e.sibling}var vs=null,bs=!1;function ys(e,t,n){for(n=n.child;null!==n;)xs(e,t,n),n=n.sibling}function xs(e,t,n){if(pt&&"function"===typeof pt.onCommitFiberUnmount)try{pt.onCommitFiberUnmount(ft,n)}catch(me){}switch(n.tag){case 5:rs||is(n,t);case 6:var r=vs,a=bs;vs=null,ys(e,t,n),bs=a,null!==(vs=r)&&(bs?(e=vs,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):vs.removeChild(n.stateNode));break;case 18:null!==vs&&(bs?(e=vs,n=n.stateNode,8===e.nodeType?ga(e.parentNode,n):1===e.nodeType&&ga(e,n),Jt(e)):ga(vs,n.stateNode));break;case 4:r=vs,a=bs,vs=n.stateNode.containerInfo,bs=!0,ys(e,t,n),vs=r,bs=a;break;case 0:case 11:case 14:case 15:if(!rs&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){a=r=r.next;do{var o=a,i=o.destroy;o=o.tag,void 0!==i&&(0!==(2&o)||0!==(4&o))&&ls(n,t,i),a=a.next}while(a!==r)}ys(e,t,n);break;case 1:if(!rs&&(is(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(me){Tu(n,t,me)}ys(e,t,n);break;case 21:ys(e,t,n);break;case 22:1&n.mode?(rs=(r=rs)||null!==n.memoizedState,ys(e,t,n),rs=r):ys(e,t,n);break;default:ys(e,t,n)}}function ks(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new as),t.forEach(function(t){var r=Nu.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function ws(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var a=n[r];try{var i=e,l=t,s=l;e:for(;null!==s;){switch(s.tag){case 5:vs=s.stateNode,bs=!1;break e;case 3:case 4:vs=s.stateNode.containerInfo,bs=!0;break e}s=s.return}if(null===vs)throw Error(o(160));xs(i,l,a),vs=null,bs=!1;var u=a.alternate;null!==u&&(u.return=null),a.return=null}catch(fe){Tu(a,t,fe)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)Ss(t,e),t=t.sibling}function Ss(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ws(t,e),Es(e),4&r){try{us(3,e,e.return),cs(3,e)}catch(g){Tu(e,e.return,g)}try{us(5,e,e.return)}catch(g){Tu(e,e.return,g)}}break;case 1:ws(t,e),Es(e),512&r&&null!==n&&is(n,n.return);break;case 5:if(ws(t,e),Es(e),512&r&&null!==n&&is(n,n.return),32&e.flags){var a=e.stateNode;try{ve(a,"")}catch(g){Tu(e,e.return,g)}}if(4&r&&null!=(a=e.stateNode)){var i=e.memoizedProps,l=null!==n?n.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,null!==u)try{"input"===s&&"radio"===i.type&&null!=i.name&&G(a,i),_e(s,l);var c=_e(s,i);for(l=0;l<u.length;l+=2){var d=u[l],f=u[l+1];"style"===d?we(a,f):"dangerouslySetInnerHTML"===d?pe(a,f):"children"===d?ve(a,f):y(a,d,f,c)}switch(s){case"input":X(a,i);break;case"textarea":oe(a,i);break;case"select":var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var m=i.value;null!=m?ne(a,!!i.multiple,m,!1):p!==!!i.multiple&&(null!=i.defaultValue?ne(a,!!i.multiple,i.defaultValue,!0):ne(a,!!i.multiple,i.multiple?[]:"",!1))}a[ka]=i}catch(g){Tu(e,e.return,g)}}break;case 6:if(ws(t,e),Es(e),4&r){if(null===e.stateNode)throw Error(o(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(g){Tu(e,e.return,g)}}break;case 3:if(ws(t,e),Es(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Jt(t.containerInfo)}catch(g){Tu(e,e.return,g)}break;case 4:default:ws(t,e),Es(e);break;case 13:ws(t,e),Es(e),8192&(a=e.child).flags&&(i=null!==a.memoizedState,a.stateNode.isHidden=i,!i||null!==a.alternate&&null!==a.alternate.memoizedState||(Qs=ot())),4&r&&ks(e);break;case 22:if(d=null!==n&&null!==n.memoizedState,1&e.mode?(rs=(c=rs)||d,ws(t,e),rs=c):ws(t,e),Es(e),8192&r){if(c=null!==e.memoizedState,(e.stateNode.isHidden=c)&&!d&&0!==(1&e.mode))for(os=e,d=e.child;null!==d;){for(f=os=d;null!==os;){switch(m=(p=os).child,p.tag){case 0:case 11:case 14:case 15:us(4,p,p.return);break;case 1:is(p,p.return);var h=p.stateNode;if("function"===typeof h.componentWillUnmount){r=p,n=p.return;try{t=r,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(g){Tu(r,n,g)}}break;case 5:is(p,p.return);break;case 22:if(null!==p.memoizedState){Ps(f);continue}}null!==m?(m.return=p,os=m):Ps(f)}d=d.sibling}e:for(d=null,f=e;;){if(5===f.tag){if(null===d){d=f;try{a=f.stateNode,c?"function"===typeof(i=a.style).setProperty?i.setProperty("display","none","important"):i.display="none":(s=f.stateNode,l=void 0!==(u=f.memoizedProps.style)&&null!==u&&u.hasOwnProperty("display")?u.display:null,s.style.display=ke("display",l))}catch(g){Tu(e,e.return,g)}}}else if(6===f.tag){if(null===d)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(g){Tu(e,e.return,g)}}else if((22!==f.tag&&23!==f.tag||null===f.memoizedState||f===e)&&null!==f.child){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;null===f.sibling;){if(null===f.return||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ws(t,e),Es(e),4&r&&ks(e);case 21:}}function Es(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(ps(n)){var r=n;break e}n=n.return}throw Error(o(160))}switch(r.tag){case 5:var a=r.stateNode;32&r.flags&&(ve(a,""),r.flags&=-33),gs(e,ms(e),a);break;case 3:case 4:var i=r.stateNode.containerInfo;hs(e,ms(e),i);break;default:throw Error(o(161))}}catch(Te){Tu(e,e.return,Te)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function _s(e,t,n){os=e,Cs(e,t,n)}function Cs(e,t,n){for(var r=0!==(1&e.mode);null!==os;){var a=os,o=a.child;if(22===a.tag&&r){var i=null!==a.memoizedState||ns;if(!i){var l=a.alternate,s=null!==l&&null!==l.memoizedState||rs;l=ns;var u=rs;if(ns=i,(rs=s)&&!u)for(os=a;null!==os;)s=(i=os).child,22===i.tag&&null!==i.memoizedState?As(a):null!==s?(s.return=i,os=s):As(a);for(;null!==o;)os=o,Cs(o,t,n),o=o.sibling;os=a,ns=l,rs=u}js(e)}else 0!==(8772&a.subtreeFlags)&&null!==o?(o.return=a,os=o):js(e)}}function js(e){for(;null!==os;){var t=os;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:rs||cs(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!rs)if(null===n)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:cl(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;null!==i&&Xo(t,i,r);break;case 3:var l=t.updateQueue;if(null!==l){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Xo(t,l,n)}break;case 5:var s=t.stateNode;if(null===n&&4&t.flags){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var c=t.alternate;if(null!==c){var d=c.memoizedState;if(null!==d){var f=d.dehydrated;null!==f&&Jt(f)}}}break;default:throw Error(o(163))}rs||512&t.flags&&ds(t)}catch(p){Tu(t,t.return,p)}}if(t===e){os=null;break}if(null!==(n=t.sibling)){n.return=t.return,os=n;break}os=t.return}}function Ps(e){for(;null!==os;){var t=os;if(t===e){os=null;break}var n=t.sibling;if(null!==n){n.return=t.return,os=n;break}os=t.return}}function As(e){for(;null!==os;){var t=os;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{cs(4,t)}catch(Te){Tu(t,n,Te)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var a=t.return;try{r.componentDidMount()}catch(Te){Tu(t,a,Te)}}var o=t.return;try{ds(t)}catch(Te){Tu(t,o,Te)}break;case 5:var i=t.return;try{ds(t)}catch(Te){Tu(t,i,Te)}}}catch(Te){Tu(t,t.return,Te)}if(t===e){os=null;break}var l=t.sibling;if(null!==l){l.return=t.return,os=l;break}os=t.return}}var zs,Ts=Math.ceil,Is=x.ReactCurrentDispatcher,Ls=x.ReactCurrentOwner,Rs=x.ReactCurrentBatchConfig,Ns=0,Ds=null,Ms=null,Os=0,Fs=0,$s=Ia(0),Us=0,Bs=null,Hs=0,Vs=0,Ws=0,Ys=null,Ks=null,Qs=0,qs=1/0,Js=null,Gs=!1,Xs=null,Zs=null,eu=!1,tu=null,nu=0,ru=0,au=null,ou=-1,iu=0;function lu(){return 0!==(6&Ns)?ot():-1!==ou?ou:ou=ot()}function su(e){return 0===(1&e.mode)?1:0!==(2&Ns)&&0!==Os?Os&-Os:null!==Eo.transition?(0===iu&&(iu=St()),iu):0!==(e=jt)?e:e=void 0===(e=window.event)?16:an(e.type)}function uu(e,t,n,r){if(50<ru)throw ru=0,au=null,Error(o(185));_t(e,n,r),0!==(2&Ns)&&e===Ds||(e===Ds&&(0===(2&Ns)&&(Vs|=n),4===Us&&mu(e,Os)),cu(e,r),1===n&&0===Ns&&0===(1&t.mode)&&(qs=ot()+500,Ka&&Ja()))}function cu(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-mt(o),l=1<<i,s=a[i];-1===s?0!==(l&n)&&0===(l&r)||(a[i]=kt(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}(e,t);var r=xt(e,e===Ds?Os:0);if(0===r)null!==n&&nt(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&nt(n),1===t)0===e.tag?function(e){Ka=!0,qa(e)}(hu.bind(null,e)):qa(hu.bind(null,e)),ma(function(){0===(6&Ns)&&Ja()}),n=null;else{switch(Pt(r)){case 1:n=lt;break;case 4:n=st;break;case 16:default:n=ut;break;case 536870912:n=dt}n=Du(n,du.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function du(e,t){if(ou=-1,iu=0,0!==(6&Ns))throw Error(o(327));var n=e.callbackNode;if(Au()&&e.callbackNode!==n)return null;var r=xt(e,e===Ds?Os:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=Su(e,r);else{t=r;var a=Ns;Ns|=2;var i=ku();for(Ds===e&&Os===t||(Js=null,qs=ot()+500,yu(e,t));;)try{_u();break}catch(me){xu(e,me)}No(),Is.current=i,Ns=a,null!==Ms?t=0:(Ds=null,Os=0,t=Us)}if(0!==t){if(2===t&&(0!==(a=wt(e))&&(r=a,t=fu(e,a))),1===t)throw n=Bs,yu(e,0),mu(e,r),cu(e,ot()),n;if(6===t)mu(e,r);else{if(a=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var a=n[r],o=a.getSnapshot;a=a.value;try{if(!hr(o(),a))return!1}catch(l){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(a)&&(2===(t=Su(e,r))&&(0!==(i=wt(e))&&(r=i,t=fu(e,i))),1===t))throw n=Bs,yu(e,0),mu(e,r),cu(e,ot()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(o(345));case 2:case 5:Pu(e,Ks,Js);break;case 3:if(mu(e,r),(130023424&r)===r&&10<(t=Qs+500-ot())){if(0!==xt(e,0))break;if(((a=e.suspendedLanes)&r)!==r){lu(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=da(Pu.bind(null,e,Ks,Js),t);break}Pu(e,Ks,Js);break;case 4:if(mu(e,r),(4194240&r)===r)break;for(t=e.eventTimes,a=-1;0<r;){var l=31-mt(r);i=1<<l,(l=t[l])>a&&(a=l),r&=~i}if(r=a,10<(r=(120>(r=ot()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ts(r/1960))-r)){e.timeoutHandle=da(Pu.bind(null,e,Ks,Js),r);break}Pu(e,Ks,Js);break;default:throw Error(o(329))}}}return cu(e,ot()),e.callbackNode===n?du.bind(null,e):null}function fu(e,t){var n=Ys;return e.current.memoizedState.isDehydrated&&(yu(e,t).flags|=256),2!==(e=Su(e,t))&&(t=Ks,Ks=n,null!==t&&pu(t)),e}function pu(e){null===Ks?Ks=e:Ks.push.apply(Ks,e)}function mu(e,t){for(t&=~Ws,t&=~Vs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-mt(t),r=1<<n;e[n]=-1,t&=~r}}function hu(e){if(0!==(6&Ns))throw Error(o(327));Au();var t=xt(e,0);if(0===(1&t))return cu(e,ot()),null;var n=Su(e,t);if(0!==e.tag&&2===n){var r=wt(e);0!==r&&(t=r,n=fu(e,r))}if(1===n)throw n=Bs,yu(e,0),mu(e,t),cu(e,ot()),n;if(6===n)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Pu(e,Ks,Js),cu(e,ot()),null}function gu(e,t){var n=Ns;Ns|=1;try{return e(t)}finally{0===(Ns=n)&&(qs=ot()+500,Ka&&Ja())}}function vu(e){null!==tu&&0===tu.tag&&0===(6&Ns)&&Au();var t=Ns;Ns|=1;var n=Rs.transition,r=jt;try{if(Rs.transition=null,jt=1,e)return e()}finally{jt=r,Rs.transition=n,0===(6&(Ns=t))&&Ja()}}function bu(){Fs=$s.current,La($s)}function yu(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,fa(n)),null!==Ms)for(n=Ms.return;null!==n;){var r=n;switch(uo(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&Ua();break;case 3:oi(),La(Ma),La(Da),di();break;case 5:li(r);break;case 4:oi();break;case 13:case 19:La(si);break;case 10:Do(r.type._context);break;case 22:case 23:bu()}n=n.return}if(Ds=e,Ms=e=$u(e.current,null),Os=Fs=t,Us=0,Bs=null,Ws=Vs=Hs=0,Ks=Ys=null,null!==$o){for(t=0;t<$o.length;t++)if(null!==(r=(n=$o[t]).interleaved)){n.interleaved=null;var a=r.next,o=n.pending;if(null!==o){var i=o.next;o.next=a,r.next=i}n.pending=r}$o=null}return e}function xu(e,t){for(;;){var n=Ms;try{if(No(),fi.current=il,bi){for(var r=hi.memoizedState;null!==r;){var a=r.queue;null!==a&&(a.pending=null),r=r.next}bi=!1}if(mi=0,vi=gi=hi=null,yi=!1,xi=0,Ls.current=null,null===n||null===n.return){Us=1,Bs=t,Ms=null;break}e:{var i=e,l=n.return,s=n,u=t;if(t=Os,s.flags|=32768,null!==u&&"object"===typeof u&&"function"===typeof u.then){var c=u,d=s,f=d.tag;if(0===(1&d.mode)&&(0===f||11===f||15===f)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=El(l);if(null!==m){m.flags&=-257,_l(m,l,s,0,t),1&m.mode&&Sl(i,c,t),u=c;var h=(t=m).updateQueue;if(null===h){var g=new Set;g.add(u),t.updateQueue=g}else h.add(u);break e}if(0===(1&t)){Sl(i,c,t),wu();break e}u=Error(o(426))}else if(po&&1&s.mode){var v=El(l);if(null!==v){0===(65536&v.flags)&&(v.flags|=256),_l(v,l,s,0,t),So(vl(u,s));break e}}i=u=vl(u,s),4!==Us&&(Us=2),null===Ys?Ys=[i]:Ys.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t,Jo(i,kl(0,u,t));break e;case 1:s=u;var b=i.type,y=i.stateNode;if(0===(128&i.flags)&&("function"===typeof b.getDerivedStateFromError||null!==y&&"function"===typeof y.componentDidCatch&&(null===Zs||!Zs.has(y)))){i.flags|=65536,t&=-t,i.lanes|=t,Jo(i,wl(i,s,t));break e}}i=i.return}while(null!==i)}ju(n)}catch(x){t=x,Ms===n&&null!==n&&(Ms=n=n.return);continue}break}}function ku(){var e=Is.current;return Is.current=il,null===e?il:e}function wu(){0!==Us&&3!==Us&&2!==Us||(Us=4),null===Ds||0===(268435455&Hs)&&0===(268435455&Vs)||mu(Ds,Os)}function Su(e,t){var n=Ns;Ns|=2;var r=ku();for(Ds===e&&Os===t||(Js=null,yu(e,t));;)try{Eu();break}catch(a){xu(e,a)}if(No(),Ns=n,Is.current=r,null!==Ms)throw Error(o(261));return Ds=null,Os=0,Us}function Eu(){for(;null!==Ms;)Cu(Ms)}function _u(){for(;null!==Ms&&!rt();)Cu(Ms)}function Cu(e){var t=zs(e.alternate,e,Fs);e.memoizedProps=e.pendingProps,null===t?ju(e):Ms=t,Ls.current=null}function ju(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=es(n,t,Fs)))return void(Ms=n)}else{if(null!==(n=ts(n,t)))return n.flags&=32767,void(Ms=n);if(null===e)return Us=6,void(Ms=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Ms=t);Ms=t=e}while(null!==t);0===Us&&(Us=5)}function Pu(e,t,n){var r=jt,a=Rs.transition;try{Rs.transition=null,jt=1,function(e,t,n,r){do{Au()}while(null!==tu);if(0!==(6&Ns))throw Error(o(327));n=e.finishedWork;var a=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-mt(n),o=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~o}}(e,i),e===Ds&&(Ms=Ds=null,Os=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||eu||(eu=!0,Du(ut,function(){return Au(),null})),i=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||i){i=Rs.transition,Rs.transition=null;var l=jt;jt=1;var s=Ns;Ns|=4,Ls.current=null,function(e,t){if(sa=Xt,kr(e=xr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch(Re){n=null;break e}var l=0,s=-1,u=-1,c=0,d=0,f=e,p=null;t:for(;;){for(var m;f!==n||0!==a&&3!==f.nodeType||(s=l+a),f!==i||0!==r&&3!==f.nodeType||(u=l+r),3===f.nodeType&&(l+=f.nodeValue.length),null!==(m=f.firstChild);)p=f,f=m;for(;;){if(f===e)break t;if(p===n&&++c===a&&(s=l),p===i&&++d===r&&(u=l),null!==(m=f.nextSibling))break;p=(f=p).parentNode}f=m}n=-1===s||-1===u?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ua={focusedElem:e,selectionRange:n},Xt=!1,os=t;null!==os;)if(e=(t=os).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,os=e;else for(;null!==os;){t=os;try{var h=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==h){var g=h.memoizedProps,v=h.memoizedState,b=t.stateNode,y=b.getSnapshotBeforeUpdate(t.elementType===t.type?g:cl(t.type,g),v);b.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var x=t.stateNode.containerInfo;1===x.nodeType?x.textContent="":9===x.nodeType&&x.documentElement&&x.removeChild(x.documentElement);break;default:throw Error(o(163))}}catch(Re){Tu(t,t.return,Re)}if(null!==(e=t.sibling)){e.return=t.return,os=e;break}os=t.return}h=ss,ss=!1}(e,n),Ss(n,e),wr(ua),Xt=!!sa,ua=sa=null,e.current=n,_s(n,e,a),at(),Ns=s,jt=l,Rs.transition=i}else e.current=n;if(eu&&(eu=!1,tu=e,nu=a),i=e.pendingLanes,0===i&&(Zs=null),function(e){if(pt&&"function"===typeof pt.onCommitFiberRoot)try{pt.onCommitFiberRoot(ft,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),cu(e,ot()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(Gs)throw Gs=!1,e=Xs,Xs=null,e;0!==(1&nu)&&0!==e.tag&&Au(),i=e.pendingLanes,0!==(1&i)?e===au?ru++:(ru=0,au=e):ru=0,Ja()}(e,t,n,r)}finally{Rs.transition=a,jt=r}return null}function Au(){if(null!==tu){var e=Pt(nu),t=Rs.transition,n=jt;try{if(Rs.transition=null,jt=16>e?16:e,null===tu)var r=!1;else{if(e=tu,tu=null,nu=0,0!==(6&Ns))throw Error(o(331));var a=Ns;for(Ns|=4,os=e.current;null!==os;){var i=os,l=i.child;if(0!==(16&os.flags)){var s=i.deletions;if(null!==s){for(var u=0;u<s.length;u++){var c=s[u];for(os=c;null!==os;){var d=os;switch(d.tag){case 0:case 11:case 15:us(8,d,i)}var f=d.child;if(null!==f)f.return=d,os=f;else for(;null!==os;){var p=(d=os).sibling,m=d.return;if(fs(d),d===c){os=null;break}if(null!==p){p.return=m,os=p;break}os=m}}}var h=i.alternate;if(null!==h){var g=h.child;if(null!==g){h.child=null;do{var v=g.sibling;g.sibling=null,g=v}while(null!==g)}}os=i}}if(0!==(2064&i.subtreeFlags)&&null!==l)l.return=i,os=l;else e:for(;null!==os;){if(0!==(2048&(i=os).flags))switch(i.tag){case 0:case 11:case 15:us(9,i,i.return)}var b=i.sibling;if(null!==b){b.return=i.return,os=b;break e}os=i.return}}var y=e.current;for(os=y;null!==os;){var x=(l=os).child;if(0!==(2064&l.subtreeFlags)&&null!==x)x.return=l,os=x;else e:for(l=y;null!==os;){if(0!==(2048&(s=os).flags))try{switch(s.tag){case 0:case 11:case 15:cs(9,s)}}catch(w){Tu(s,s.return,w)}if(s===l){os=null;break e}var k=s.sibling;if(null!==k){k.return=s.return,os=k;break e}os=s.return}}if(Ns=a,Ja(),pt&&"function"===typeof pt.onPostCommitFiberRoot)try{pt.onPostCommitFiberRoot(ft,e)}catch(w){}r=!0}return r}finally{jt=n,Rs.transition=t}}return!1}function zu(e,t,n){e=Qo(e,t=kl(0,t=vl(n,t),1),1),t=lu(),null!==e&&(_t(e,1,t),cu(e,t))}function Tu(e,t,n){if(3===e.tag)zu(e,e,n);else for(;null!==t;){if(3===t.tag){zu(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Zs||!Zs.has(r))){t=Qo(t,e=wl(t,e=vl(n,e),1),1),e=lu(),null!==t&&(_t(t,1,e),cu(t,e));break}}t=t.return}}function Iu(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=lu(),e.pingedLanes|=e.suspendedLanes&n,Ds===e&&(Os&n)===n&&(4===Us||3===Us&&(130023424&Os)===Os&&500>ot()-Qs?yu(e,0):Ws|=n),cu(e,t)}function Lu(e,t){0===t&&(0===(1&e.mode)?t=1:(t=bt,0===(130023424&(bt<<=1))&&(bt=4194304)));var n=lu();null!==(e=Ho(e,t))&&(_t(e,t,n),cu(e,n))}function Ru(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Lu(e,n)}function Nu(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;null!==a&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(o(314))}null!==r&&r.delete(t),Lu(e,n)}function Du(e,t){return tt(e,t)}function Mu(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ou(e,t,n,r){return new Mu(e,t,n,r)}function Fu(e){return!(!(e=e.prototype)||!e.isReactComponent)}function $u(e,t){var n=e.alternate;return null===n?((n=Ou(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Uu(e,t,n,r,a,i){var l=2;if(r=e,"function"===typeof e)Fu(e)&&(l=1);else if("string"===typeof e)l=5;else e:switch(e){case S:return Bu(n.children,a,i,t);case E:l=8,a|=8;break;case _:return(e=Ou(12,n,t,2|a)).elementType=_,e.lanes=i,e;case A:return(e=Ou(13,n,t,a)).elementType=A,e.lanes=i,e;case z:return(e=Ou(19,n,t,a)).elementType=z,e.lanes=i,e;case L:return Hu(n,a,i,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case C:l=10;break e;case j:l=9;break e;case P:l=11;break e;case T:l=14;break e;case I:l=16,r=null;break e}throw Error(o(130,null==e?e:typeof e,""))}return(t=Ou(l,n,t,a)).elementType=e,t.type=r,t.lanes=i,t}function Bu(e,t,n,r){return(e=Ou(7,e,r,t)).lanes=n,e}function Hu(e,t,n,r){return(e=Ou(22,e,r,t)).elementType=L,e.lanes=n,e.stateNode={isHidden:!1},e}function Vu(e,t,n){return(e=Ou(6,e,null,t)).lanes=n,e}function Wu(e,t,n){return(t=Ou(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Yu(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Et(0),this.expirationTimes=Et(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Et(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Ku(e,t,n,r,a,o,i,l,s){return e=new Yu(e,t,n,l,s),1===t?(t=1,!0===o&&(t|=8)):t=0,o=Ou(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wo(o),e}function Qu(e){if(!e)return Na;e:{if(Je(e=e._reactInternals)!==e||1!==e.tag)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if($a(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(o(171))}if(1===e.tag){var n=e.type;if($a(n))return Ha(e,n,t)}return t}function qu(e,t,n,r,a,o,i,l,s){return(e=Ku(n,r,!0,e,0,o,0,l,s)).context=Qu(null),n=e.current,(o=Ko(r=lu(),a=su(n))).callback=void 0!==t&&null!==t?t:null,Qo(n,o,a),e.current.lanes=a,_t(e,a,r),cu(e,r),e}function Ju(e,t,n,r){var a=t.current,o=lu(),i=su(a);return n=Qu(n),null===t.context?t.context=n:t.pendingContext=n,(t=Ko(o,i)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Qo(a,t,i))&&(uu(e,a,i,o),qo(e,a,i)),i}function Gu(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Xu(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Zu(e,t){Xu(e,t),(e=e.alternate)&&Xu(e,t)}zs=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Ma.current)jl=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return jl=!1,function(e,t,n){switch(t.tag){case 3:Ml(t),wo();break;case 5:ii(t);break;case 1:$a(t.type)&&Va(t);break;case 4:ai(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;Ra(To,r._currentValue),r._currentValue=a;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Ra(si,1&si.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Vl(e,t,n):(Ra(si,1&si.current),null!==(e=Gl(e,t,n))?e.sibling:null);Ra(si,1&si.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return ql(e,t,n);t.flags|=128}if(null!==(a=t.memoizedState)&&(a.rendering=null,a.tail=null,a.lastEffect=null),Ra(si,si.current),r)break;return null;case 22:case 23:return t.lanes=0,Il(e,t,n)}return Gl(e,t,n)}(e,t,n);jl=0!==(131072&e.flags)}else jl=!1,po&&0!==(1048576&t.flags)&&lo(t,eo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Jl(e,t),e=t.pendingProps;var a=Fa(t,Da.current);Oo(t,n),a=Ei(null,t,r,e,a,n);var i=_i();return t.flags|=1,"object"===typeof a&&null!==a&&"function"===typeof a.render&&void 0===a.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,$a(r)?(i=!0,Va(t)):i=!1,t.memoizedState=null!==a.state&&void 0!==a.state?a.state:null,Wo(t),a.updater=fl,t.stateNode=a,a._reactInternals=t,gl(t,r,e,n),t=Dl(null,t,r,!0,i,n)):(t.tag=0,po&&i&&so(t),Pl(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Jl(e,t),e=t.pendingProps,r=(a=r._init)(r._payload),t.type=r,a=t.tag=function(e){if("function"===typeof e)return Fu(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===P)return 11;if(e===T)return 14}return 2}(r),e=cl(r,e),a){case 0:t=Rl(null,t,r,e,n);break e;case 1:t=Nl(null,t,r,e,n);break e;case 11:t=Al(null,t,r,e,n);break e;case 14:t=zl(null,t,r,cl(r.type,e),n);break e}throw Error(o(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,Rl(e,t,r,a=t.elementType===r?a:cl(r,a),n);case 1:return r=t.type,a=t.pendingProps,Nl(e,t,r,a=t.elementType===r?a:cl(r,a),n);case 3:e:{if(Ml(t),null===e)throw Error(o(387));r=t.pendingProps,a=(i=t.memoizedState).element,Yo(e,t),Go(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated){if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,256&t.flags){t=Ol(e,t,r,n,a=vl(Error(o(423)),t));break e}if(r!==a){t=Ol(e,t,r,n,a=vl(Error(o(424)),t));break e}for(fo=va(t.stateNode.containerInfo.firstChild),co=t,po=!0,mo=null,n=zo(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(wo(),r===a){t=Gl(e,t,n);break e}Pl(e,t,r,n)}t=t.child}return t;case 5:return ii(t),null===e&&bo(t),r=t.type,a=t.pendingProps,i=null!==e?e.memoizedProps:null,l=a.children,ca(r,a)?l=null:null!==i&&ca(r,i)&&(t.flags|=32),Ll(e,t),Pl(e,t,l,n),t.child;case 6:return null===e&&bo(t),null;case 13:return Vl(e,t,n);case 4:return ai(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=Ao(t,null,r,n):Pl(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,Al(e,t,r,a=t.elementType===r?a:cl(r,a),n);case 7:return Pl(e,t,t.pendingProps,n),t.child;case 8:case 12:return Pl(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,i=t.memoizedProps,l=a.value,Ra(To,r._currentValue),r._currentValue=l,null!==i)if(hr(i.value,l)){if(i.children===a.children&&!Ma.current){t=Gl(e,t,n);break e}}else for(null!==(i=t.child)&&(i.return=t);null!==i;){var s=i.dependencies;if(null!==s){l=i.child;for(var u=s.firstContext;null!==u;){if(u.context===r){if(1===i.tag){(u=Ko(-1,n&-n)).tag=2;var c=i.updateQueue;if(null!==c){var d=(c=c.shared).pending;null===d?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}i.lanes|=n,null!==(u=i.alternate)&&(u.lanes|=n),Mo(i.return,n,t),s.lanes|=n;break}u=u.next}}else if(10===i.tag)l=i.type===t.type?null:i.child;else if(18===i.tag){if(null===(l=i.return))throw Error(o(341));l.lanes|=n,null!==(s=l.alternate)&&(s.lanes|=n),Mo(l,n,t),l=i.sibling}else l=i.child;if(null!==l)l.return=i;else for(l=i;null!==l;){if(l===t){l=null;break}if(null!==(i=l.sibling)){i.return=l.return,l=i;break}l=l.return}i=l}Pl(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,Oo(t,n),r=r(a=Fo(a)),t.flags|=1,Pl(e,t,r,n),t.child;case 14:return a=cl(r=t.type,t.pendingProps),zl(e,t,r,a=cl(r.type,a),n);case 15:return Tl(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:cl(r,a),Jl(e,t),t.tag=1,$a(r)?(e=!0,Va(t)):e=!1,Oo(t,n),ml(t,r,a),gl(t,r,a,n),Dl(null,t,r,!0,e,n);case 19:return ql(e,t,n);case 22:return Il(e,t,n)}throw Error(o(156,t.tag))};var ec="function"===typeof reportError?reportError:function(e){console.error(e)};function tc(e){this._internalRoot=e}function nc(e){this._internalRoot=e}function rc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function ac(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function oc(){}function ic(e,t,n,r,a){var o=n._reactRootContainer;if(o){var i=o;if("function"===typeof a){var l=a;a=function(){var e=Gu(i);l.call(e)}}Ju(t,i,e,a)}else i=function(e,t,n,r,a){if(a){if("function"===typeof r){var o=r;r=function(){var e=Gu(i);o.call(e)}}var i=qu(t,r,e,0,null,!1,0,"",oc);return e._reactRootContainer=i,e[wa]=i.current,Jr(8===e.nodeType?e.parentNode:e),vu(),i}for(;a=e.lastChild;)e.removeChild(a);if("function"===typeof r){var l=r;r=function(){var e=Gu(s);l.call(e)}}var s=Ku(e,0,!1,null,0,!1,0,"",oc);return e._reactRootContainer=s,e[wa]=s.current,Jr(8===e.nodeType?e.parentNode:e),vu(function(){Ju(t,s,n,r)}),s}(n,t,e,a,r);return Gu(i)}nc.prototype.render=tc.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(o(409));Ju(e,t,null,null)},nc.prototype.unmount=tc.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;vu(function(){Ju(null,e,null,null)}),t[wa]=null}},nc.prototype.unstable_scheduleHydration=function(e){if(e){var t=It();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ut.length&&0!==t&&t<Ut[n].priority;n++);Ut.splice(n,0,e),0===n&&Wt(e)}},At=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=yt(t.pendingLanes);0!==n&&(Ct(t,1|n),cu(t,ot()),0===(6&Ns)&&(qs=ot()+500,Ja()))}break;case 13:vu(function(){var t=Ho(e,1);if(null!==t){var n=lu();uu(t,e,1,n)}}),Zu(e,1)}},zt=function(e){if(13===e.tag){var t=Ho(e,134217728);if(null!==t)uu(t,e,134217728,lu());Zu(e,134217728)}},Tt=function(e){if(13===e.tag){var t=su(e),n=Ho(e,t);if(null!==n)uu(n,e,t,lu());Zu(e,t)}},It=function(){return jt},Lt=function(e,t){var n=jt;try{return jt=e,t()}finally{jt=n}},Pe=function(e,t,n){switch(t){case"input":if(X(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=Aa(r);if(!a)throw Error(o(90));K(r),X(r,a)}}}break;case"textarea":oe(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},De=gu,Me=vu;var lc={usingClientEntryPoint:!1,Events:[ja,Pa,Aa,Le,Ne,gu]},sc={findFiberByHostInstance:Ca,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},uc={bundleType:sc.bundleType,version:sc.version,rendererPackageName:sc.rendererPackageName,rendererConfig:sc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:x.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Ze(e))?null:e.stateNode},findFiberByHostInstance:sc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var cc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cc.isDisabled&&cc.supportsFiber)try{ft=cc.inject(uc),pt=cc}catch(ue){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lc,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!rc(t))throw Error(o(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:w,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!rc(e))throw Error(o(299));var n=!1,r="",a=ec;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(a=t.onRecoverableError)),t=Ku(e,1,!1,null,0,n,0,r,a),e[wa]=t.current,Jr(8===e.nodeType?e.parentNode:e),new tc(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(o(188));throw e=Object.keys(e).join(","),Error(o(268,e))}return e=null===(e=Ze(t))?null:e.stateNode},t.flushSync=function(e){return vu(e)},t.hydrate=function(e,t,n){if(!ac(t))throw Error(o(200));return ic(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!rc(e))throw Error(o(405));var r=null!=n&&n.hydratedSources||null,a=!1,i="",l=ec;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(a=!0),void 0!==n.identifierPrefix&&(i=n.identifierPrefix),void 0!==n.onRecoverableError&&(l=n.onRecoverableError)),t=qu(t,null,e,1,null!=n?n:null,a,0,i,l),e[wa]=t.current,Jr(e),r)for(e=0;e<r.length;e++)a=(a=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new nc(t)},t.render=function(e,t,n){if(!ac(t))throw Error(o(200));return ic(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!ac(e))throw Error(o(40));return!!e._reactRootContainer&&(vu(function(){ic(null,null,e,!1,function(){e._reactRootContainer=null,e[wa]=null})}),!0)},t.unstable_batchedUpdates=gu,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ac(n))throw Error(o(200));if(null==e||void 0===e._reactInternals)throw Error(o(38));return ic(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},391(e,t,n){var r=n(950);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},950(e,t,n){!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(730)},153(e,t,n){var r=n(43),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,o={},u=null,c=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,r)&&!s.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:a,type:e,key:u,ref:c,props:o,_owner:l.current}}t.Fragment=o,t.jsx=u,t.jsxs=u},202(e,t){var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}function b(){}function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=v.prototype;var x=y.prototype=new b;x.constructor=y,h(x,v.prototype),x.isPureReactComponent=!0;var k=Array.isArray,w=Object.prototype.hasOwnProperty,S={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,r){var a,o={},i=null,l=null;if(null!=t)for(a in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)w.call(t,a)&&!E.hasOwnProperty(a)&&(o[a]=t[a]);var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===o[a]&&(o[a]=s[a]);return{$$typeof:n,type:e,key:i,ref:l,props:o,_owner:S.current}}function C(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var j=/\/+/g;function P(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function A(e,t,a,o,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return i=i(s=e),e=""===o?"."+P(s,0):o,k(i)?(a="",null!=e&&(a=e.replace(j,"$&/")+"/"),A(i,t,a,"",function(e){return e})):null!=i&&(C(i)&&(i=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,a+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(j,"$&/")+"/")+e)),t.push(i)),1;if(s=0,o=""===o?".":o+":",k(e))for(var u=0;u<e.length;u++){var c=o+P(l=e[u],u);s+=A(l,t,a,c,i)}else if(c=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"===typeof c)for(e=c.call(e),u=0;!(l=e.next()).done;)s+=A(l=l.value,t,a,c=o+P(l,u++),i);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function z(e,t,n){if(null==e)return e;var r=[],a=0;return A(e,r,"","",function(e){return t.call(n,e,a++)}),r}function T(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},L={transition:null},R={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:L,ReactCurrentOwner:S};function N(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:z,forEach:function(e,t,n){z(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return z(e,function(){t++}),t},toArray:function(e){return z(e,function(e){return e})||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=a,t.Profiler=i,t.PureComponent=y,t.StrictMode=o,t.Suspense=c,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R,t.act=N,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=h({},e.props),o=e.key,i=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,l=S.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)w.call(t,u)&&!E.hasOwnProperty(u)&&(a[u]=void 0===t[u]&&void 0!==s?s[u]:t[u])}var u=arguments.length-2;if(1===u)a.children=r;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];a.children=s}return{$$typeof:n,type:e.type,key:o,ref:i,props:a,_owner:l}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=_,t.createFactory=function(e){var t=_.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:T}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=L.transition;L.transition={};try{e()}finally{L.transition=t}},t.unstable_act=N,t.useCallback=function(e,t){return I.current.useCallback(e,t)},t.useContext=function(e){return I.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return I.current.useDeferredValue(e)},t.useEffect=function(e,t){return I.current.useEffect(e,t)},t.useId=function(){return I.current.useId()},t.useImperativeHandle=function(e,t,n){return I.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return I.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return I.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return I.current.useMemo(e,t)},t.useReducer=function(e,t,n){return I.current.useReducer(e,t,n)},t.useRef=function(e){return I.current.useRef(e)},t.useState=function(e){return I.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return I.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return I.current.useTransition()},t.version="18.3.1"},43(e,t,n){e.exports=n(202)},579(e,t,n){e.exports=n(153)},234(e,t){function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,a=e[r];if(!(0<o(a,t)))break e;e[r]=t,e[n]=a,n=r}}function r(e){return 0===e.length?null:e[0]}function a(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,a=e.length,i=a>>>1;r<i;){var l=2*(r+1)-1,s=e[l],u=l+1,c=e[u];if(0>o(s,n))u<a&&0>o(c,s)?(e[r]=c,e[u]=n,r=u):(e[r]=s,e[l]=n,r=l);else{if(!(u<a&&0>o(c,n)))break e;e[r]=c,e[u]=n,r=u}}}return t}function o(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var i=performance;t.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var u=[],c=[],d=1,f=null,p=3,m=!1,h=!1,g=!1,v="function"===typeof setTimeout?setTimeout:null,b="function"===typeof clearTimeout?clearTimeout:null,y="undefined"!==typeof setImmediate?setImmediate:null;function x(e){for(var t=r(c);null!==t;){if(null===t.callback)a(c);else{if(!(t.startTime<=e))break;a(c),t.sortIndex=t.expirationTime,n(u,t)}t=r(c)}}function k(e){if(g=!1,x(e),!h)if(null!==r(u))h=!0,L(w);else{var t=r(c);null!==t&&R(k,t.startTime-e)}}function w(e,n){h=!1,g&&(g=!1,b(C),C=-1),m=!0;var o=p;try{for(x(n),f=r(u);null!==f&&(!(f.expirationTime>n)||e&&!A());){var i=f.callback;if("function"===typeof i){f.callback=null,p=f.priorityLevel;var l=i(f.expirationTime<=n);n=t.unstable_now(),"function"===typeof l?f.callback=l:f===r(u)&&a(u),x(n)}else a(u);f=r(u)}if(null!==f)var s=!0;else{var d=r(c);null!==d&&R(k,d.startTime-n),s=!1}return s}finally{f=null,p=o,m=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var S,E=!1,_=null,C=-1,j=5,P=-1;function A(){return!(t.unstable_now()-P<j)}function z(){if(null!==_){var e=t.unstable_now();P=e;var n=!0;try{n=_(!0,e)}finally{n?S():(E=!1,_=null)}}else E=!1}if("function"===typeof y)S=function(){y(z)};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,I=T.port2;T.port1.onmessage=z,S=function(){I.postMessage(null)}}else S=function(){v(z,0)};function L(e){_=e,E||(E=!0,S())}function R(e,n){C=v(function(){e(t.unstable_now())},n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){h||m||(h=!0,L(w))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return r(u)},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,a,o){var i=t.unstable_now();switch("object"===typeof o&&null!==o?o="number"===typeof(o=o.delay)&&0<o?i+o:i:o=i,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:d++,callback:a,priorityLevel:e,startTime:o,expirationTime:l=o+l,sortIndex:-1},o>i?(e.sortIndex=o,n(c,e),null===r(u)&&e===r(c)&&(g?(b(C),C=-1):g=!0,R(k,o-i))):(e.sortIndex=l,n(u,e),h||m||(h=!0,L(w))),e},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}},853(e,t,n){e.exports=n(234)}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.p="/portfolio/",n.nc=void 0;var r=n(43),a=n(391),o=n(579);const i=(0,r.createContext)();function l(e){let{children:t}=e;const[n,a]=(0,r.useState)(()=>{const e=localStorage.getItem("iza-theme");return e?"dark"===e:window.matchMedia("(prefers-color-scheme: dark)").matches});(0,r.useEffect)(()=>{localStorage.setItem("iza-theme",n?"dark":"light"),document.documentElement.setAttribute("data-theme",n?"dark":"light")},[n]);return(0,o.jsx)(i.Provider,{value:{dark:n,toggle:()=>a(e=>!e)},children:t})}var s=function(){return s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},s.apply(this,arguments)};Object.create;function u(e,t,n){if(n||2===arguments.length)for(var r,a=0,o=t.length;a<o;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var c="-ms-",d="-moz-",f="-webkit-",p="comm",m="rule",h="decl",g="@keyframes",v=Math.abs,b=String.fromCharCode,y=Object.assign;function x(e){return e.trim()}function k(e,t){return(e=t.exec(e))?e[0]:e}function w(e,t,n){return e.replace(t,n)}function S(e,t,n){return e.indexOf(t,n)}function E(e,t){return 0|e.charCodeAt(t)}function _(e,t,n){return e.slice(t,n)}function C(e){return e.length}function j(e){return e.length}function P(e,t){return t.push(e),e}function A(e,t){return e.filter(function(e){return!k(e,t)})}var z=1,T=1,I=0,L=0,R=0,N="";function D(e,t,n,r,a,o,i,l){return{value:e,root:t,parent:n,type:r,props:a,children:o,line:z,column:T,length:i,return:"",siblings:l}}function M(e,t){return y(D("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function O(e){for(;e.root;)e=M(e.root,{children:[e]});P(e,e.siblings)}function F(){return R=L>0?E(N,--L):0,T--,10===R&&(T=1,z--),R}function $(){return R=L<I?E(N,L++):0,T++,10===R&&(T=1,z++),R}function U(){return E(N,L)}function B(){return L}function H(e,t){return _(N,e,t)}function V(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function W(e){return z=T=1,I=C(N=e),L=0,[]}function Y(e){return N="",e}function K(e){return x(H(L-1,J(91===e?e+2:40===e?e+1:e)))}function Q(e){for(;(R=U())&&R<33;)$();return V(e)>2||V(R)>3?"":" "}function q(e,t){for(;--t&&$()&&!(R<48||R>102||R>57&&R<65||R>70&&R<97););return H(e,B()+(t<6&&32==U()&&32==$()))}function J(e){for(;$();)switch(R){case e:return L;case 34:case 39:34!==e&&39!==e&&J(R);break;case 40:41===e&&J(e);break;case 92:$()}return L}function G(e,t){for(;$()&&e+R!==57&&(e+R!==84||47!==U()););return"/*"+H(t,L-1)+"*"+b(47===e?e:$())}function X(e){for(;!V(U());)$();return H(e,L)}function Z(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function ee(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case"@namespace":case h:return e.return=e.return||e.value;case p:return"";case g:return e.return=e.value+"{"+Z(e.children,r)+"}";case m:if(!C(e.value=e.props.join(",")))return""}return C(n=Z(e.children,r))?e.return=e.value+"{"+n+"}":""}function te(e,t,n){switch(function(e,t){return 45^E(e,0)?(((t<<2^E(e,0))<<2^E(e,1))<<2^E(e,2))<<2^E(e,3):0}(e,t)){case 5103:return f+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return f+e+e;case 4855:return f+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return d+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return f+e+d+e+c+e+e;case 5936:switch(E(e,t+11)){case 114:return f+e+c+w(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return f+e+c+w(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return f+e+c+w(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return f+e+c+e+e;case 6165:return f+e+c+"flex-"+e+e;case 5187:return f+e+w(e,/(\w+).+(:[^]+)/,f+"box-$1$2"+c+"flex-$1$2")+e;case 5443:return f+e+c+"flex-item-"+w(e,/flex-|-self/g,"")+(k(e,/flex-|baseline/)?"":c+"grid-row-"+w(e,/flex-|-self/g,""))+e;case 4675:return f+e+c+"flex-line-pack"+w(e,/align-content|flex-|-self/g,"")+e;case 5548:return f+e+c+w(e,"shrink","negative")+e;case 5292:return f+e+c+w(e,"basis","preferred-size")+e;case 6060:return f+"box-"+w(e,"-grow","")+f+e+c+w(e,"grow","positive")+e;case 4554:return f+w(e,/([^-])(transform)/g,"$1"+f+"$2")+e;case 6187:return w(w(w(e,/(zoom-|grab)/,f+"$1"),/(image-set)/,f+"$1"),e,"")+e;case 5495:case 3959:return w(e,/(image-set\([^]*)/,f+"$1$`$1");case 4968:return w(w(e,/(.+:)(flex-)?(.*)/,f+"box-pack:$3"+c+"flex-pack:$3"),/space-between/,"justify")+f+e+e;case 4200:if(!k(e,/flex-|baseline/))return c+"grid-column-align"+_(e,t)+e;break;case 2592:case 3360:return c+w(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,k(e.props,/grid-\w+-end/)})?~S(e+(n=n[t].value),"span",0)?e:c+w(e,"-start","")+e+c+"grid-row-span:"+(~S(n,"span",0)?k(n,/\d+/):+k(n,/\d+/)-+k(e,/\d+/))+";":c+w(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(e){return k(e.props,/grid-\w+-start/)})?e:c+w(w(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return w(e,/(.+)-inline(.+)/,f+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(C(e)-1-t>6)switch(E(e,t+1)){case 109:if(45!==E(e,t+4))break;case 102:return w(e,/(.+:)(.+)-([^]+)/,"$1"+f+"$2-$3$1"+d+(108==E(e,t+3)?"$3":"$2-$3"))+e;case 115:return~S(e,"stretch",0)?te(w(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return w(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,a,o,i,l){return c+n+":"+r+l+(a?c+n+"-span:"+(o?i:+i-+r)+l:"")+e});case 4949:if(121===E(e,t+6))return w(e,":",":"+f)+e;break;case 6444:switch(E(e,45===E(e,14)?18:11)){case 120:return w(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+f+(45===E(e,14)?"inline-":"")+"box$3$1"+f+"$2$3$1"+c+"$2box$3")+e;case 100:return w(e,":",":"+c)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return w(e,"scroll-","scroll-snap-")+e}return e}function ne(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case h:return void(e.return=te(e.value,e.length,n));case g:return Z([M(e,{value:w(e.value,"@","@"+f)})],r);case m:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,function(t){switch(k(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":O(M(e,{props:[w(t,/:(read-\w+)/,":-moz-$1")]})),O(M(e,{props:[t]})),y(e,{props:A(n,r)});break;case"::placeholder":O(M(e,{props:[w(t,/:(plac\w+)/,":"+f+"input-$1")]})),O(M(e,{props:[w(t,/:(plac\w+)/,":-moz-$1")]})),O(M(e,{props:[w(t,/:(plac\w+)/,c+"input-$1")]})),O(M(e,{props:[t]})),y(e,{props:A(n,r)})}return""})}}function re(e){return Y(ae("",null,null,null,[""],e=W(e),0,[0],e))}function ae(e,t,n,r,a,o,i,l,s){for(var u=0,c=0,d=i,f=0,p=0,m=0,h=1,g=1,y=1,x=0,k="",j=a,A=o,z=r,T=k;g;)switch(m=x,x=$()){case 40:if(108!=m&&58==E(T,d-1)){-1!=S(T+=w(K(x),"&","&\f"),"&\f",v(u?l[u-1]:0))&&(y=-1);break}case 34:case 39:case 91:T+=K(x);break;case 9:case 10:case 13:case 32:T+=Q(m);break;case 92:T+=q(B()-1,7);continue;case 47:switch(U()){case 42:case 47:P(ie(G($(),B()),t,n,s),s),5!=V(m||1)&&5!=V(U()||1)||!C(T)||" "===_(T,-1,void 0)||(T+=" ");break;default:T+="/"}break;case 123*h:l[u++]=C(T)*y;case 125*h:case 59:case 0:switch(x){case 0:case 125:g=0;case 59+c:-1==y&&(T=w(T,/\f/g,"")),p>0&&(C(T)-d||0===h&&47===m)&&P(p>32?le(T+";",r,n,d-1,s):le(w(T," ","")+";",r,n,d-2,s),s);break;case 59:T+=";";default:if(P(z=oe(T,t,n,u,c,a,l,k,j=[],A=[],d,o),o),123===x)if(0===c)ae(T,t,z,z,j,o,d,l,A);else{switch(f){case 99:if(110===E(T,3))break;case 108:if(97===E(T,2))break;default:c=0;case 100:case 109:case 115:}c?ae(e,z,z,r&&P(oe(e,z,z,0,0,a,l,k,a,j=[],d,A),A),a,A,d,l,r?j:A):ae(T,z,z,z,[""],A,0,l,A)}}u=c=p=0,h=y=1,k=T="",d=i;break;case 58:d=1+C(T),p=m;default:if(h<1)if(123==x)--h;else if(125==x&&0==h++&&125==F())continue;switch(T+=b(x),x*h){case 38:y=c>0?1:(T+="\f",-1);break;case 44:l[u++]=(C(T)-1)*y,y=1;break;case 64:45===U()&&(T+=K($())),f=U(),c=d=C(k=T+=X(B())),x++;break;case 45:45===m&&2==C(T)&&(h=0)}}return o}function oe(e,t,n,r,a,o,i,l,s,u,c,d){for(var f=a-1,p=0===a?o:[""],h=j(p),g=0,b=0,y=0;g<r;++g)for(var k=0,S=_(e,f+1,f=v(b=i[g])),E=e;k<h;++k)(E=x(b>0?p[k]+" "+S:w(S,/&\f/g,p[k])))&&(s[y++]=E);return D(e,t,n,0===a?m:l,s,u,c,d)}function ie(e,t,n,r){return D(e,t,n,p,b(R),_(e,2,-2),0,r)}function le(e,t,n,r,a){return D(e,t,n,h,_(e,0,r),_(e,r+1,-1),r,a)}var se={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ue="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_EMAILJS_PUBLIC_KEY:"oeHkI3XYftME2KOZ_",REACT_APP_EMAILJS_SERVICE_ID:"service_lk5zmy8",REACT_APP_EMAILJS_TEMPLATE_ID:"template_tfx86s1"}&&({NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_EMAILJS_PUBLIC_KEY:"oeHkI3XYftME2KOZ_",REACT_APP_EMAILJS_SERVICE_ID:"service_lk5zmy8",REACT_APP_EMAILJS_TEMPLATE_ID:"template_tfx86s1"}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_EMAILJS_PUBLIC_KEY:"oeHkI3XYftME2KOZ_",REACT_APP_EMAILJS_SERVICE_ID:"service_lk5zmy8",REACT_APP_EMAILJS_TEMPLATE_ID:"template_tfx86s1"}.SC_ATTR)||"data-styled",ce="active",de="data-styled-version",fe="6.3.11",pe="/*!sc*/\n",me="undefined"!=typeof window&&"undefined"!=typeof document,he=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_EMAILJS_PUBLIC_KEY:"oeHkI3XYftME2KOZ_",REACT_APP_EMAILJS_SERVICE_ID:"service_lk5zmy8",REACT_APP_EMAILJS_TEMPLATE_ID:"template_tfx86s1"}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_EMAILJS_PUBLIC_KEY:"oeHkI3XYftME2KOZ_",REACT_APP_EMAILJS_SERVICE_ID:"service_lk5zmy8",REACT_APP_EMAILJS_TEMPLATE_ID:"template_tfx86s1"}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_EMAILJS_PUBLIC_KEY:"oeHkI3XYftME2KOZ_",REACT_APP_EMAILJS_SERVICE_ID:"service_lk5zmy8",REACT_APP_EMAILJS_TEMPLATE_ID:"template_tfx86s1"}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_EMAILJS_PUBLIC_KEY:"oeHkI3XYftME2KOZ_",REACT_APP_EMAILJS_SERVICE_ID:"service_lk5zmy8",REACT_APP_EMAILJS_TEMPLATE_ID:"template_tfx86s1"}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_EMAILJS_PUBLIC_KEY:"oeHkI3XYftME2KOZ_",REACT_APP_EMAILJS_SERVICE_ID:"service_lk5zmy8",REACT_APP_EMAILJS_TEMPLATE_ID:"template_tfx86s1"}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_EMAILJS_PUBLIC_KEY:"oeHkI3XYftME2KOZ_",REACT_APP_EMAILJS_SERVICE_ID:"service_lk5zmy8",REACT_APP_EMAILJS_TEMPLATE_ID:"template_tfx86s1"}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_EMAILJS_PUBLIC_KEY:"oeHkI3XYftME2KOZ_",REACT_APP_EMAILJS_SERVICE_ID:"service_lk5zmy8",REACT_APP_EMAILJS_TEMPLATE_ID:"template_tfx86s1"}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_EMAILJS_PUBLIC_KEY:"oeHkI3XYftME2KOZ_",REACT_APP_EMAILJS_SERVICE_ID:"service_lk5zmy8",REACT_APP_EMAILJS_TEMPLATE_ID:"template_tfx86s1"}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_EMAILJS_PUBLIC_KEY:"oeHkI3XYftME2KOZ_",REACT_APP_EMAILJS_SERVICE_ID:"service_lk5zmy8",REACT_APP_EMAILJS_TEMPLATE_ID:"template_tfx86s1"}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_EMAILJS_PUBLIC_KEY:"oeHkI3XYftME2KOZ_",REACT_APP_EMAILJS_SERVICE_ID:"service_lk5zmy8",REACT_APP_EMAILJS_TEMPLATE_ID:"template_tfx86s1"}.SC_DISABLE_SPEEDY)),ge={};function ve(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var be=new Map,ye=new Map,xe=1,ke=function(e){if(be.has(e))return be.get(e);for(;ye.has(xe);)xe++;var t=xe++;return be.set(e,t),ye.set(t,e),t},we=function(e,t){xe=t+1,be.set(e,t),ye.set(t,e)},Se=(new Set,Object.freeze([])),Ee=Object.freeze({});function _e(e,t,n){return void 0===n&&(n=Ee),e.theme!==n.theme&&e.theme||t||n.theme}var Ce=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),je=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Pe=/(^-|-$)/g;function Ae(e){return e.replace(je,"-").replace(Pe,"")}var ze=/(a)(d)/gi,Te=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ie(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Te(t%52)+n;return(Te(t%52)+n).replace(ze,"$1-$2")}var Le,Re=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Ne=function(e){return Re(5381,e)};function De(e){return Ie(Ne(e)>>>0)}function Me(e){return e.displayName||e.name||"Component"}function Oe(e){return"string"==typeof e&&!0}var Fe="function"==typeof Symbol&&Symbol.for,$e=Fe?Symbol.for("react.memo"):60115,Ue=Fe?Symbol.for("react.forward_ref"):60112,Be={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},He={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ve={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},We=((Le={})[Ue]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Le[$e]=Ve,Le);function Ye(e){return("type"in(t=e)&&t.type.$$typeof)===$e?Ve:"$$typeof"in e?We[e.$$typeof]:Be;var t}var Ke=Object.defineProperty,Qe=Object.getOwnPropertyNames,qe=Object.getOwnPropertySymbols,Je=Object.getOwnPropertyDescriptor,Ge=Object.getPrototypeOf,Xe=Object.prototype;function Ze(e,t,n){if("string"!=typeof t){if(Xe){var r=Ge(t);r&&r!==Xe&&Ze(e,r,n)}var a=Qe(t);qe&&(a=a.concat(qe(t)));for(var o=Ye(e),i=Ye(t),l=0;l<a.length;++l){var s=a[l];if(!(s in He||n&&n[s]||i&&s in i||o&&s in o)){var u=Je(t,s);try{Ke(e,s,u)}catch(e){}}}}return e}function et(e){return"function"==typeof e}function tt(e){return"object"==typeof e&&"styledComponentId"in e}function nt(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function rt(e,t){return e.join(t||"")}function at(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ot(e,t,n){if(void 0===n&&(n=!1),!n&&!at(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=ot(e[r],t[r]);else if(at(t))for(var r in t)e[r]=ot(e[r],t[r]);return e}function it(e,t){Object.defineProperty(e,"toString",{value:t})}var lt=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}return e.prototype.indexOfGroup=function(e){if(e===this._cGroup)return this._cIndex;var t=this._cIndex;if(e>this._cGroup)for(var n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,a=r;e>=a;)if((a<<=1)<0)throw ve(16,"".concat(e));this.groupSizes=new Uint32Array(a),this.groupSizes.set(n),this.length=a;for(var o=r;o<a;o++)this.groupSizes[o]=0}for(var i=this.indexOfGroup(e+1),l=0,s=(o=0,t.length);o<s;o++)this.tag.insertRule(i,t[o])&&(this.groupSizes[e]++,i++,l++);l>0&&this._cGroup>e&&(this._cIndex+=l)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var a=n;a<r;a++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),a=r+n,o=r;o<a;o++)t+=this.tag.getRule(o)+pe;return t},e}(),st="style[".concat(ue,"][").concat(de,'="').concat(fe,'"]'),ut=new RegExp("^".concat(ue,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ct=function(e){return"undefined"!=typeof ShadowRoot&&e instanceof ShadowRoot||"host"in e&&11===e.nodeType},dt=function(e){if(!e)return document;if(ct(e))return e;if("getRootNode"in e){var t=e.getRootNode();if(ct(t))return t}return document},ft=function(e,t,n){for(var r,a=n.split(","),o=0,i=a.length;o<i;o++)(r=a[o])&&e.registerName(t,r)},pt=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(pe),a=[],o=0,i=r.length;o<i;o++){var l=r[o].trim();if(l){var s=l.match(ut);if(s){var u=0|parseInt(s[1],10),c=s[2];0!==u&&(we(c,u),ft(e,c,s[3]),e.getTag().insertRules(u,a)),a.length=0}else a.push(l)}}},mt=function(e){for(var t=dt(e.options.target).querySelectorAll(st),n=0,r=t.length;n<r;n++){var a=t[n];a&&a.getAttribute(ue)!==ce&&(pt(e,a),a.parentNode&&a.parentNode.removeChild(a))}};function ht(){return n.nc}var gt=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(e){var t=Array.from(e.querySelectorAll("style[".concat(ue,"]")));return t[t.length-1]}(n),o=void 0!==a?a.nextSibling:null;r.setAttribute(ue,ce),r.setAttribute(de,fe);var i=ht();return i&&r.setAttribute("nonce",i),n.insertBefore(r,o),r},vt=function(){function e(e){this.element=gt(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){var t;if(e.sheet)return e.sheet;for(var n=null!==(t=e.getRootNode().styleSheets)&&void 0!==t?t:document.styleSheets,r=0,a=n.length;r<a;r++){var o=n[r];if(o.ownerNode===e)return o}throw ve(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),bt=function(){function e(e){this.element=gt(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),yt=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(e===this.length?this.rules.push(t):this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),xt=me,kt={isServer:!me,useCSSOMInjection:!he},wt=function(){function e(e,t,n){void 0===e&&(e=Ee),void 0===t&&(t={});var r=this;this.options=s(s({},kt),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&me&&xt&&(xt=!1,mt(this)),it(this,function(){return function(e){for(var t=e.getTag(),n=t.length,r="",a=function(n){var a=function(e){return ye.get(e)}(n);if(void 0===a)return"continue";var o=e.names.get(a);if(void 0===o||!o.size)return"continue";var i=t.getGroup(n);if(0===i.length)return"continue";var l=ue+".g"+n+'[id="'+a+'"]',s="";o.forEach(function(e){e.length>0&&(s+=e+",")}),r+=i+l+'{content:"'+s+'"}'+pe},o=0;o<n;o++)a(o);return r}(r)})}return e.registerId=function(e){return ke(e)},e.prototype.rehydrate=function(){!this.server&&me&&mt(this)},e.prototype.reconstructWithOptions=function(t,n){void 0===n&&(n=!0);var r=new e(s(s({},this.options),t),this.gs,n&&this.names||void 0);return!this.server&&me&&t.target!==this.options.target&&dt(this.options.target)!==dt(t.target)&&mt(r),r},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new yt(n):t?new vt(n):new bt(n)}(this.options),new lt(e)));var e},e.prototype.hasNameForId=function(e,t){var n,r;return null!==(r=null===(n=this.names.get(e))||void 0===n?void 0:n.has(t))&&void 0!==r&&r},e.prototype.registerName=function(e,t){ke(e);var n=this.names.get(e);n?n.add(t):this.names.set(e,new Set([t]))},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(ke(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(ke(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),St=/&/g,Et=47,_t=42;function Ct(e){if(-1===e.indexOf("}"))return!1;for(var t=e.length,n=0,r=0,a=!1,o=0;o<t;o++){var i=e.charCodeAt(o);if(0!==r||a||i!==Et||e.charCodeAt(o+1)!==_t)if(a)i===_t&&e.charCodeAt(o+1)===Et&&(a=!1,o++);else if(34!==i&&39!==i||0!==o&&92===e.charCodeAt(o-1)){if(0===r)if(123===i)n++;else if(125===i&&--n<0)return!0}else 0===r?r=i:r===i&&(r=0);else a=!0,o++}return 0!==n||0!==r}function jt(e,t){return e.map(function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(e){return"".concat(t," ").concat(e)})),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=jt(e.children,t)),e})}function Pt(e){var t,n,r,a=void 0===e?Ee:e,o=a.options,i=void 0===o?Ee:o,l=a.plugins,s=void 0===l?Se:l,u=function(e,r,a){return a.startsWith(n)&&a.endsWith(n)&&a.replaceAll(n,"").length>0?".".concat(t):e},c=s.slice();c.push(function(e){e.type===m&&e.value.includes("&")&&(r||(r=new RegExp("\\".concat(n,"\\b"),"g")),e.props[0]=e.props[0].replace(St,n).replace(r,u))}),i.prefix&&c.push(ne),c.push(ee);var d,f=[],p=function(e){var t=j(e);return function(n,r,a,o){for(var i="",l=0;l<t;l++)i+=e[l](n,r,a,o)||"";return i}}(c.concat((d=function(e){return f.push(e)},function(e){e.root||(e=e.return)&&d(e)}))),h=function(e,a,o,l){void 0===a&&(a=""),void 0===o&&(o=""),void 0===l&&(l="&"),t=l,n=a,r=void 0;var s=function(e){if(!Ct(e))return e;for(var t=e.length,n="",r=0,a=0,o=0,i=!1,l=0;l<t;l++){var s=e.charCodeAt(l);if(0!==o||i||s!==Et||e.charCodeAt(l+1)!==_t)if(i)s===_t&&e.charCodeAt(l+1)===Et&&(i=!1,l++);else if(34!==s&&39!==s||0!==l&&92===e.charCodeAt(l-1)){if(0===o)if(123===s)a++;else if(125===s){if(--a<0){for(var u=l+1;u<t;){var c=e.charCodeAt(u);if(59===c||10===c)break;u++}u<t&&59===e.charCodeAt(u)&&u++,a=0,l=u-1,r=u;continue}0===a&&(n+=e.substring(r,l+1),r=l+1)}else 59===s&&0===a&&(n+=e.substring(r,l+1),r=l+1)}else 0===o?o=s:o===s&&(o=0);else i=!0,l++}if(r<t){var d=e.substring(r);Ct(d)||(n+=d)}return n}(function(e){if(-1===e.indexOf("//"))return e;for(var t=e.length,n=[],r=0,a=0,o=0,i=0;a<t;){var l=e.charCodeAt(a);if(34!==l&&39!==l||0!==a&&92===e.charCodeAt(a-1))if(0===o)if(l===Et&&a+1<t&&e.charCodeAt(a+1)===_t){for(a+=2;a+1<t&&(e.charCodeAt(a)!==_t||e.charCodeAt(a+1)!==Et);)a++;a+=2}else if(40===l&&a>=3&&108==(32|e.charCodeAt(a-1))&&114==(32|e.charCodeAt(a-2))&&117==(32|e.charCodeAt(a-3)))i=1,a++;else if(i>0)41===l?i--:40===l&&i++,a++;else if(l===_t&&a+1<t&&e.charCodeAt(a+1)===Et)a>r&&n.push(e.substring(r,a)),r=a+=2;else if(l===Et&&a+1<t&&e.charCodeAt(a+1)===Et){for(a>r&&n.push(e.substring(r,a));a<t&&10!==e.charCodeAt(a);)a++;r=a}else a++;else a++;else 0===o?o=l:o===l&&(o=0),a++}return 0===r?e:(r<t&&n.push(e.substring(r)),n.join(""))}(e)),u=re(o||a?"".concat(o," ").concat(a," { ").concat(s," }"):s);return i.namespace&&(u=jt(u,i.namespace)),f=[],Z(u,p),f};return h.hash=s.length?s.reduce(function(e,t){return t.name||ve(15),Re(e,t.name)},5381).toString():"",h}var At=new wt,zt=Pt(),Tt=r.createContext({shouldForwardProp:void 0,styleSheet:At,stylis:zt}),It=(Tt.Consumer,r.createContext(void 0));function Lt(){return r.useContext(Tt)}function Rt(e){if(!r.useMemo)return e.children;var t=Lt().styleSheet,n=r.useMemo(function(){var n=t;return e.sheet?n=e.sheet:e.target&&(n=n.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(n=n.reconstructWithOptions({useCSSOMInjection:!1})),n},[e.disableCSSOMInjection,e.sheet,e.target,t]),a=r.useMemo(function(){return Pt({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:e.stylisPlugins})},[e.enableVendorPrefixes,e.namespace,e.stylisPlugins]),o=r.useMemo(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:n,stylis:a}},[e.shouldForwardProp,n,a]);return r.createElement(Tt.Provider,{value:o},r.createElement(It.Provider,{value:a},e.children))}var Nt=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=zt);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,it(this,function(){throw ve(12,String(n.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=zt),this.name+e.hash},e}();function Dt(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||e in se||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var Mt=function(e){return e>="A"&&e<="Z"};function Ot(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;Mt(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Ft=function(e){return null==e||!1===e||""===e},$t=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!Ft(r)&&(Array.isArray(r)&&r.isCss||et(r)?t.push("".concat(Ot(n),":"),r,";"):at(r)?t.push.apply(t,u(u(["".concat(n," {")],$t(r),!1),["}"],!1)):t.push("".concat(Ot(n),": ").concat(Dt(n,r),";")))}return t};function Ut(e,t,n,r,a){if(void 0===a&&(a=[]),"string"==typeof e)return e&&a.push(e),a;if(Ft(e))return a;if(tt(e))return a.push(".".concat(e.styledComponentId)),a;var o;if(et(e))return!et(o=e)||o.prototype&&o.prototype.isReactComponent||!t?(a.push(e),a):Ut(e(t),t,n,r,a);if(e instanceof Nt)return n?(e.inject(n,r),a.push(e.getName(r))):a.push(e),a;if(at(e)){for(var i=$t(e),l=0;l<i.length;l++)a.push(i[l]);return a}if(!Array.isArray(e))return a.push(e.toString()),a;for(l=0;l<e.length;l++)Ut(e[l],t,n,r,a);return a}function Bt(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(et(n)&&!tt(n))return!1}return!0}var Ht=Ne(fe),Vt=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Bt(e),this.componentId=t,this.baseHash=Re(Ht,t),this.baseStyle=n,wt.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n).className:"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=nt(r,this.staticRulesId);else{var a=rt(Ut(this.rules,e,t,n)),o=Ie(Re(this.baseHash,a)>>>0);if(!t.hasNameForId(this.componentId,o)){var i=n(a,".".concat(o),void 0,this.componentId);t.insertRules(this.componentId,o,i)}r=nt(r,o),this.staticRulesId=o}else{for(var l=Re(this.baseHash,n.hash),s="",u=0;u<this.rules.length;u++){var c=this.rules[u];if("string"==typeof c)s+=c;else if(c){var d=rt(Ut(c,e,t,n));l=Re(Re(l,String(u)),d),s+=d}}if(s){var f=Ie(l>>>0);if(!t.hasNameForId(this.componentId,f)){var p=n(s,".".concat(f),void 0,this.componentId);t.insertRules(this.componentId,f,p)}r=nt(r,f)}}return{className:r,css:"undefined"==typeof window?t.getTag().getGroup(ke(this.componentId)):""}},e}(),Wt=r.createContext(void 0);Wt.Consumer;var Yt={};new Set;function Kt(e,t,n){var a=tt(e),o=e,i=!Oe(e),l=t.attrs,u=void 0===l?Se:l,c=t.componentId,d=void 0===c?function(e,t){var n="string"!=typeof e?"sc":Ae(e);Yt[n]=(Yt[n]||0)+1;var r="".concat(n,"-").concat(De(fe+n+Yt[n]));return t?"".concat(t,"-").concat(r):r}(t.displayName,t.parentComponentId):c,f=t.displayName,p=void 0===f?function(e){return Oe(e)?"styled.".concat(e):"Styled(".concat(Me(e),")")}(e):f,m=t.displayName&&t.componentId?"".concat(Ae(t.displayName),"-").concat(t.componentId):t.componentId||d,h=a&&o.attrs?o.attrs.concat(u).filter(Boolean):u,g=t.shouldForwardProp;if(a&&o.shouldForwardProp){var v=o.shouldForwardProp;if(t.shouldForwardProp){var b=t.shouldForwardProp;g=function(e,t){return v(e,t)&&b(e,t)}}else g=v}var y=new Vt(n,m,a?o.componentStyle:void 0);function x(e,t){return function(e,t,n){var a=e.attrs,o=e.componentStyle,i=e.defaultProps,l=e.foldedComponentIds,u=e.styledComponentId,c=e.target,d=r.useContext(Wt),f=Lt(),p=e.shouldForwardProp||f.shouldForwardProp,m=_e(t,d,i)||Ee,h=function(e,t,n){for(var r,a=s(s({},t),{className:void 0,theme:n}),o=0;o<e.length;o+=1){var i=et(r=e[o])?r(a):r;for(var l in i)"className"===l?a.className=nt(a.className,i[l]):"style"===l?a.style=s(s({},a.style),i[l]):a[l]=i[l]}return"className"in t&&"string"==typeof t.className&&(a.className=nt(a.className,t.className)),a}(a,t,m),g=h.as||c,v={};for(var b in h)void 0===h[b]||"$"===b[0]||"as"===b||"theme"===b&&h.theme===m||("forwardedAs"===b?v.as=h.forwardedAs:p&&!p(b,g)||(v[b]=h[b]));var y=function(e,t){var n=Lt();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(o,h),x=y.className,k=nt(l,u);return x&&(k+=" "+x),h.className&&(k+=" "+h.className),v[Oe(g)&&!Ce.has(g)?"class":"className"]=k,n&&(v.ref=n),(0,r.createElement)(g,v)}(k,e,t)}x.displayName=p;var k=r.forwardRef(x);return k.attrs=h,k.componentStyle=y,k.displayName=p,k.shouldForwardProp=g,k.foldedComponentIds=a?nt(o.foldedComponentIds,o.styledComponentId):"",k.styledComponentId=m,k.target=a?o.target:e,Object.defineProperty(k,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=a?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,a=t;r<a.length;r++)ot(e,a[r],!0);return e}({},o.defaultProps,e):e}}),it(k,function(){return".".concat(k.styledComponentId)}),i&&Ze(k,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),k}function Qt(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n}var qt=function(e){return Object.assign(e,{isCss:!0})};function Jt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(et(e)||at(e))return qt(Ut(Qt(Se,u([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?Ut(r):qt(Ut(Qt(r,t)))}function Gt(e,t,n){if(void 0===n&&(n=Ee),!t)throw ve(1,t);var r=function(r){for(var a=[],o=1;o<arguments.length;o++)a[o-1]=arguments[o];return e(t,n,Jt.apply(void 0,u([r],a,!1)))};return r.attrs=function(r){return Gt(e,t,s(s({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return Gt(e,t,s(s({},n),r))},r}var Xt=function(e){return Gt(Kt,e)},Zt=Xt;Ce.forEach(function(e){Zt[e]=Xt(e)});var en=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Bt(e),wt.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var a=r(rt(Ut(this.rules,t,n,r)),""),o=this.componentId+e;n.insertRules(o,o,a)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&wt.registerId(this.componentId+e);var a=this.componentId+e;this.isStatic?n.hasNameForId(a,a)||this.createStyles(e,t,n,r):(this.removeStyles(e,n),this.createStyles(e,t,n,r))},e}();function tn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=rt(Jt.apply(void 0,u([e],t,!1))),a=De(r);return new Nt(a,r)}(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=ht(),r=rt([n&&'nonce="'.concat(n,'"'),"".concat(ue,'="true"'),"".concat(de,'="').concat(fe,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw ve(2);return e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)throw ve(2);var n=e.instance.toString();if(!n)return[];var a=((t={})[ue]="",t[de]=fe,t.dangerouslySetInnerHTML={__html:n},t),o=ht();return o&&(a.nonce=o),[r.createElement("style",s({},a,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new wt({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw ve(2);return r.createElement(Rt,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw ve(3)}})(),"__sc-".concat(ue,"__");const nn=(function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var a=Jt.apply(void 0,u([e],t,!1)),o="sc-global-".concat(De(JSON.stringify(a))),i=new en(a,o),l=new WeakMap,c=function(e){var t=Lt(),n=r.useContext(Wt),a=l.get(t.styleSheet);return void 0===a&&(a=t.styleSheet.allocateGSInstance(o),l.set(t.styleSheet,a)),("undefined"==typeof window||!t.styleSheet.server)&&d(a,e,t.styleSheet,n,t.stylis),r.useLayoutEffect(function(){return t.styleSheet.server||d(a,e,t.styleSheet,n,t.stylis),function(){var e;i.removeStyles(a,t.styleSheet),e=t.styleSheet.options.target,"undefined"!=typeof document&&(null!=e?e:document).querySelectorAll('style[data-styled-global="'.concat(o,'"]')).forEach(function(e){return e.remove()})}},[a,e,t.styleSheet,n,t.stylis]),null};function d(e,t,n,r,a){if(i.isStatic)i.renderStyles(e,ge,n,a);else{var o=s(s({},t),{theme:_e(t,r,c.defaultProps)});i.renderStyles(e,o,n,a)}}return r.memo(c)})`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root,
  [data-theme="light"] {
    --bg:           #F5F2ED;
    --ink:          #1A1714;
    --ink-soft:     #6B6460;
    --accent:       #C8191A;
    --line:         #D9D4CE;
    --surface:      #FFFFFF;
    --surface-soft: #EDE9E4;
    --mono: 'DM Mono', monospace;
    --serif: 'DM Serif Display', serif;
    --sans: 'DM Sans', sans-serif;
  }

  [data-theme="dark"] {
    --bg:           #0F0D0C;
    --ink:          #F0EBE4;
    --ink-soft:     #9A928A;
    --accent:       #D62828;
    --line:         #2A2522;
    --surface:      #1A1714;
    --surface-soft: #221F1C;
  }

  html, body { height: 100%; }

  body {
    background: var(--bg);
    color: var(--ink);
    font-family: var(--sans);
    font-size: 16px;
    line-height: 1.6;
    overflow-x: hidden;
    transition: background 0.3s, color 0.3s;
  }

  /* ── Cursor personalizado (apenas mouse) ── */
  @media (pointer: fine) {
    *, *::before, *::after { cursor: none !important; }
  }

  /* ── Scrollbar ── */
  ::-webkit-scrollbar { width: 1px; height: 1px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb {
    background: var(--accent);
    border-radius: 1px;
  }
  ::-webkit-scrollbar-thumb:hover { background: #a01415; }

  /* Firefox */
  * { scrollbar-width: thin; scrollbar-color: var(--accent) transparent; }
`,rn=nn,an=tn`
  from { opacity: 0; transform: translateY(-8px); }
  to   { opacity: 1; transform: translateY(0); }
`,on=Zt.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.1rem 3rem;
  transition: background 0.4s, border-color 0.4s;

  ${e=>{let{$dark:t}=e;return t?Jt`
          background: rgba(14, 11, 9, 0.6);
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
          backdrop-filter: blur(14px);
        `:Jt`
          background: rgba(245, 242, 237, 0.93);
          border-bottom: 1px solid var(--line);
          backdrop-filter: blur(14px);
          [data-theme="dark"] & {
            background: rgba(15, 13, 12, 0.93);
            border-bottom: 1px solid rgba(255, 255, 255, 0.07);
          }
        `}}

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
  }
`,ln=Zt.button`
  font-family: var(--mono);
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  cursor: pointer;
  border: none;
  background: none;
  padding: 0;
  z-index: 101;
  color: ${e=>{let{$dark:t}=e;return t?"rgba(245, 240, 234, 0.85)":"var(--ink)"}};
  transition: color 0.2s;
`,sn=Zt.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`,un=Zt.button`
  font-family: var(--mono);
  font-size: 0.76rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0 0 2px;
  transition: color 0.2s;
  position: relative;

  color: ${e=>{let{$dark:t,$active:n}=e;return n?"var(--accent)":t?"rgba(245, 240, 234, 0.5)":"var(--ink-soft)"}};

  /* Linha indicadora embaixo */
  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 1.5px;
    background: var(--accent);
    transform: scaleX(${e=>{let{$active:t}=e;return t?1:0}});
    transform-origin: left;
    transition: transform 0.25s ease;
  }

  &:hover {
    color: var(--accent);
    &::after { transform: scaleX(1); }
  }
`,cn=Zt.li`
  width: 1px;
  height: 1rem;
  background: ${e=>{let{$dark:t}=e;return t?"rgba(255,255,255,0.15)":"var(--line)"}};
`,dn=Zt.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${e=>{let{$dark:t}=e;return t?"rgba(245, 240, 234, 0.45)":"var(--ink-soft)"}};
  transition: color 0.2s;

  &:hover {
    color: #d62828;
  }
`,fn=Zt.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 1px solid
    ${e=>{let{$dark:t}=e;return t?"rgba(255,255,255,0.12)":"var(--line)"}};
  background: ${e=>{let{$dark:t}=e;return t?"rgba(255,255,255,0.06)":"var(--surface-soft)"}};
  color: ${e=>{let{$dark:t}=e;return t?"rgba(245,240,234,0.6)":"var(--ink-soft)"}};
  cursor: pointer;
  transition: all 0.2s;
  font-size: 1rem;

  &:hover {
    border-color: var(--accent);
    color: var(--accent);
    transform: rotate(20deg);
  }
`,pn=Zt.button`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 36px;
  height: 36px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 101;
  padding: 0;

  @media (max-width: 768px) {
    display: flex;
  }

  span {
    display: block;
    width: 22px;
    height: 2px;
    border-radius: 2px;
    background: ${e=>{let{$dark:t}=e;return t?"rgba(245,240,234,0.85)":"var(--ink)"}};
    transition: transform 0.3s, opacity 0.3s;
    transform-origin: center;
  }

  &.open span:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
  }
  &.open span:nth-child(2) {
    opacity: 0;
    transform: scaleX(0);
  }
  &.open span:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
  }
`,mn=Zt.div`
  display: none;

  @media (max-width: 768px) {
    display: ${e=>{let{$open:t}=e;return t?"flex":"none"}};
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    padding: 6rem 2rem 3rem;
    gap: 0.5rem;
    animation: ${an} 0.25s ease both;

    ${e=>{let{$themeDark:t}=e;return t?Jt`
            background: rgba(10, 8, 7, 0.98);
            backdrop-filter: blur(20px);
          `:Jt`
            background: rgba(245, 242, 237, 0.98);
            backdrop-filter: blur(20px);
          `}}
  }
`,hn=Zt.button`
  font-family: var(--mono);
  font-size: 1.1rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  background: none;
  border: none;
  cursor: pointer;
  padding: 1rem 0;
  text-align: left;
  border-bottom: 1px solid var(--line);
  transition: color 0.2s;
  color: ${e=>{let{$active:t}=e;return t?"var(--accent)":"var(--ink-soft)"}};
  width: 100%;

  &:hover {
    color: var(--accent);
  }
`,gn=Zt.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  padding-top: 1.5rem;
`,vn=Zt.div`
  display: flex;
  gap: 1.25rem;
`,bn=Zt.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--ink-soft);
  transition: color 0.2s;

  &:hover {
    color: #d62828;
  }
`,yn=Zt.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--mono);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--ink-soft);
  background: none;
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: var(--accent);
    color: var(--accent);
  }
`;function xn(){return(0,o.jsx)("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,o.jsx)("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"})})}function kn(){return(0,o.jsxs)("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,o.jsx)("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}),(0,o.jsx)("rect",{x:"2",y:"9",width:"4",height:"12"}),(0,o.jsx)("circle",{cx:"4",cy:"4",r:"2"})]})}function wn(e){let{size:t=17}=e;return(0,o.jsxs)("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,o.jsx)("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}),(0,o.jsx)("path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}),(0,o.jsx)("line",{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"})]})}function Sn(){return(0,o.jsx)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,o.jsx)("path",{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"})})}function En(){return(0,o.jsxs)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,o.jsx)("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),(0,o.jsx)("polyline",{points:"7 10 12 15 17 10"}),(0,o.jsx)("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]})}function _n(){return(0,o.jsxs)("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,o.jsx)("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),(0,o.jsx)("polyline",{points:"15,3 21,3 21,9"}),(0,o.jsx)("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]})}function Cn(){return(0,o.jsx)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,o.jsx)("path",{d:"M18 6 6 18M6 6l12 12"})})}function jn(){return(0,o.jsxs)("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,o.jsx)("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"}),(0,o.jsx)("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]})}function Pn(){return(0,o.jsxs)("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"currentColor",children:[(0,o.jsx)("path",{d:"M8 24c2.2 0 4-1.8 4-4v-4H8c-2.2 0-4 1.8-4 4s1.8 4 4 4z"}),(0,o.jsx)("path",{d:"M4 12c0-2.2 1.8-4 4-4h4v8H8c-2.2 0-4-1.8-4-4z"}),(0,o.jsx)("path",{d:"M4 4c0-2.2 1.8-4 4-4h4v8H8C5.8 8 4 6.2 4 4z"}),(0,o.jsx)("path",{d:"M12 0h4c2.2 0 4 1.8 4 4s-1.8 4-4 4h-4V0z"}),(0,o.jsx)("path",{d:"M20 12c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z"})]})}function An(){return(0,o.jsxs)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,o.jsx)("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),(0,o.jsx)("polygon",{points:"22 2 15 22 11 13 2 9 22 2"})]})}function zn(){return(0,o.jsxs)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,o.jsx)("circle",{cx:"12",cy:"12",r:"5"}),(0,o.jsx)("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),(0,o.jsx)("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),(0,o.jsx)("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),(0,o.jsx)("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),(0,o.jsx)("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),(0,o.jsx)("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),(0,o.jsx)("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),(0,o.jsx)("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]})}function Tn(){return(0,o.jsx)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,o.jsx)("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})})}function In(e){let{page:t,onNavigate:n}=e;const[a,l]=(0,r.useState)(!1),{dark:s,toggle:u}=(0,r.useContext)(i),c="home"===t&&s,d=e=>{l(!1),n(e)};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(on,{$dark:c,children:[(0,o.jsx)(ln,{$dark:c,onClick:()=>d("home"),children:"iza.dev"}),(0,o.jsxs)(sn,{children:[(0,o.jsx)("li",{children:(0,o.jsx)(un,{$dark:c,$active:"about"===t,onClick:()=>d("about"),children:"sobre"})}),(0,o.jsx)("li",{children:(0,o.jsx)(un,{$dark:c,$active:"projects"===t,onClick:()=>d("projects"),children:"projetos"})}),(0,o.jsx)("li",{children:(0,o.jsx)(un,{$dark:c,$active:"contact"===t,onClick:()=>d("contact"),children:"contato"})}),(0,o.jsx)(cn,{$dark:c}),(0,o.jsx)("li",{children:(0,o.jsx)(dn,{href:"https://github.com/doraalves",target:"_blank",rel:"noreferrer",$dark:c,children:(0,o.jsx)(xn,{})})}),(0,o.jsx)("li",{children:(0,o.jsx)(dn,{href:"https://www.linkedin.com/in/izadoraalves/",target:"_blank",rel:"noreferrer",$dark:c,children:(0,o.jsx)(kn,{})})}),(0,o.jsx)("li",{children:(0,o.jsx)(dn,{href:"https://www.instagram.com/izadoraaalves",target:"_blank",rel:"noreferrer",$dark:c,children:(0,o.jsx)(wn,{})})}),(0,o.jsx)(cn,{$dark:c}),(0,o.jsx)("li",{children:(0,o.jsx)(fn,{$dark:c,onClick:u,"aria-label":"Alternar tema",children:s?(0,o.jsx)(zn,{}):(0,o.jsx)(Tn,{})})})]}),(0,o.jsxs)(pn,{$dark:c,className:a?"open":"",onClick:()=>l(!a),"aria-label":"Menu",children:[(0,o.jsx)("span",{}),(0,o.jsx)("span",{}),(0,o.jsx)("span",{})]})]}),(0,o.jsxs)(mn,{$open:a,$themeDark:s,children:[(0,o.jsx)(hn,{$active:"home"===t,onClick:()=>d("home"),children:"in\xedcio"}),(0,o.jsx)(hn,{$active:"about"===t,onClick:()=>d("about"),children:"sobre"}),(0,o.jsx)(hn,{$active:"projects"===t,onClick:()=>d("projects"),children:"projetos"}),(0,o.jsx)(hn,{$active:"contact"===t,onClick:()=>d("contact"),children:"contato"}),(0,o.jsxs)(gn,{children:[(0,o.jsxs)(vn,{children:[(0,o.jsx)(bn,{href:"https://github.com/doraalves",target:"_blank",rel:"noreferrer",children:(0,o.jsx)(xn,{})}),(0,o.jsx)(bn,{href:"https://www.linkedin.com/in/izadoraalves/",target:"_blank",rel:"noreferrer",children:(0,o.jsx)(kn,{})}),(0,o.jsx)(bn,{href:"https://www.instagram.com/izadoraaalves",target:"_blank",rel:"noreferrer",children:(0,o.jsx)(wn,{})})]}),(0,o.jsxs)(yn,{onClick:u,children:[s?(0,o.jsx)(zn,{}):(0,o.jsx)(Tn,{}),s?"Claro":"Escuro"]})]})]})]})}function Ln(){const e=(0,r.useRef)(null),t=(0,r.useRef)(null),n=(0,r.useRef)({x:-200,y:-200}),a=(0,r.useRef)({x:-200,y:-200}),i=(0,r.useRef)(null),[l,s]=(0,r.useState)(!1),[u,c]=(0,r.useState)(!1);if((0,r.useEffect)(()=>{if(window.matchMedia("(pointer: coarse)").matches)return;const r=(e,t,n)=>e+(t-e)*n,o=t=>{n.current={x:t.clientX,y:t.clientY},u||c(!0),e.current&&(e.current.style.transform=`translate(${t.clientX}px, ${t.clientY}px)`)},l=()=>{a.current.x=r(a.current.x,n.current.x,.22),a.current.y=r(a.current.y,n.current.y,.22),t.current&&(t.current.style.transform=`translate(${a.current.x}px, ${a.current.y}px)`),i.current=requestAnimationFrame(l)},d=e=>{e.target.closest("a, button, [role='button'], input, textarea, select, label")&&s(!0)},f=e=>{e.target.closest("a, button, [role='button'], input, textarea, select, label")&&s(!1)},p=()=>c(!1),m=()=>c(!0);return document.addEventListener("mousemove",o,{passive:!0}),document.addEventListener("mouseover",d,{passive:!0}),document.addEventListener("mouseout",f,{passive:!0}),document.addEventListener("mouseleave",p),document.addEventListener("mouseenter",m),i.current=requestAnimationFrame(l),()=>{document.removeEventListener("mousemove",o),document.removeEventListener("mouseover",d),document.removeEventListener("mouseout",f),document.removeEventListener("mouseleave",p),document.removeEventListener("mouseenter",m),cancelAnimationFrame(i.current)}},[u]),"undefined"!==typeof window&&window.matchMedia("(pointer: coarse)").matches)return null;const d=l?0:4,f=l?36:22,p=l?"rgba(200,25,26,0.12)":"transparent",m=l?"rgba(200,25,26,1)":"rgba(200,25,26,0.65)";return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{ref:e,"aria-hidden":"true",style:{position:"fixed",top:0,left:0,width:`${d}px`,height:`${d}px`,marginLeft:`-${d/2}px`,marginTop:`-${d/2}px`,background:"#C8191A",borderRadius:"50%",pointerEvents:"none",zIndex:999999,opacity:u?1:0,transition:"width 0.15s, height 0.15s, margin 0.15s, opacity 0.3s",willChange:"transform"}}),(0,o.jsx)("div",{ref:t,"aria-hidden":"true",style:{position:"fixed",top:0,left:0,width:`${f}px`,height:`${f}px`,marginLeft:`-${f/2}px`,marginTop:`-${f/2}px`,border:`1.5px solid ${m}`,background:p,borderRadius:"50%",pointerEvents:"none",zIndex:999998,opacity:u?1:0,transition:"width 0.18s, height 0.18s, margin 0.18s, background 0.2s, border-color 0.2s, opacity 0.3s",willChange:"transform"}})]})}const Rn=50;function Nn(){const e=(0,r.useRef)(null);return(0,r.useEffect)(()=>{const t=e.current,n=t.getContext("2d");let r,a,o,i;const l={x:-9999,y:-9999};function s(){r=t.width=window.innerWidth,a=t.height=window.innerHeight}function u(e,t){return e+Math.random()*(t-e)}function c(){const e=Math.max(80,Math.round(r*a/4e3));o=Array.from({length:e},()=>({x:Math.random()*r,y:Math.random()*a,vx:u(-.22,.22),vy:u(-.22,.22),r:u(1.2,2.6),base:u(.2,.6),alpha:0}))}const d=e=>{l.x=e.clientX,l.y=e.clientY},f=()=>{s(),c()};return window.addEventListener("mousemove",d),window.addEventListener("resize",f),s(),c(),function e(){n.clearRect(0,0,r,a);const t="dark"===document.documentElement.getAttribute("data-theme"),s=e=>`rgba(200,25,26,${e})`,u=t?e=>`rgba(245,240,234,${e})`:e=>`rgba(200,25,26,${e})`,c=e=>`rgba(214,40,40,${e})`,d=e=>`rgba(200,25,26,${e})`;for(let r=0;r<o.length;r++)for(let e=r+1;e<o.length;e++){const a=o[r],i=o[e],l=a.x-i.x,u=a.y-i.y,c=Math.sqrt(l*l+u*u);if(c<150){const e=(1-c/150)*(t?.15:.2);n.beginPath(),n.strokeStyle=s(e),n.lineWidth=.8,n.moveTo(a.x,a.y),n.lineTo(i.x,i.y),n.stroke()}}for(const i of o){const e=i.x-l.x,t=i.y-l.y,o=Math.sqrt(e*e+t*t);if(o<Rn&&o>0){const n=.065*(1-o/Rn);i.vx+=e/o*n,i.vy+=t/o*n,i.alpha=Math.min(1,i.alpha+.07)}else i.alpha+=.04*(i.base-i.alpha);i.vx*=.983,i.vy*=.983,i.x+=i.vx,i.y+=i.vy,i.x<0&&(i.x=r),i.x>r&&(i.x=0),i.y<0&&(i.y=a),i.y>a&&(i.y=0),n.beginPath(),n.arc(i.x,i.y,i.r,0,2*Math.PI),n.fillStyle=o<Rn?c(i.alpha):u(i.alpha),n.fill(),o<20&&(n.beginPath(),n.arc(i.x,i.y,3.5*i.r,0,2*Math.PI),n.fillStyle=d(.09*i.alpha),n.fill())}if(l.x>0&&l.x<r){const e=n.createRadialGradient(l.x,l.y,0,l.x,l.y,Rn);e.addColorStop(0,"rgba(200,25,26,0.08)"),e.addColorStop(1,"rgba(200,25,26,0)"),n.beginPath(),n.arc(l.x,l.y,Rn,0,2*Math.PI),n.fillStyle=e,n.fill()}i=requestAnimationFrame(e)}(),()=>{cancelAnimationFrame(i),window.removeEventListener("mousemove",d),window.removeEventListener("resize",f)}},[]),(0,o.jsx)("canvas",{ref:e,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",zIndex:0,display:"block"}})}const Dn=tn`
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
`,Mn=tn`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.8); }
`,On=tn`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`,Fn=tn`
  from { opacity: 1; transform: translateY(0); }
  to   { opacity: 0; transform: translateY(-10px); }
`,$n=tn`
  from { transform: translateY(0); }
  to   { transform: translateY(-50%); }
`,Un=Zt.div`
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 600px;
  overflow: hidden;
  transition: background 0.3s;

  background: #f0ebe3;

  [data-theme="dark"] & {
    background: #0e0b09;
  }
`,Bn=Zt.div`
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 3rem;
  text-align: center;
  animation: ${Dn} 0.9s ease both;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`,Hn=Zt.div`
  max-width: 660px;
`,Vn=Zt.p`
  font-family: var(--mono);
  font-size: 0.74rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  min-height: 1.2em;

  &::before,
  &::after {
    content: "";
    width: 2rem;
    height: 1px;
    background: var(--accent);
    flex-shrink: 0;
  }
`,Wn=Zt.span`
  display: inline-block;
  animation: ${e=>{let{$exiting:t}=e;return t?Fn:On}} 0.35s ease both;
`,Yn=Zt.h1`
  font-family: var(--serif);
  font-size: clamp(2.8rem, 6vw, 5.5rem);
  line-height: 1;
  margin-bottom: 1.4rem;
  color: var(--ink);

  [data-theme="dark"] & {
    color: #f5f0ea;
  }

  em {
    font-style: italic;
    color: var(--accent);
  }
`,Kn=Zt.p`
  font-size: 1rem;
  max-width: 50ch;
  margin: 0 auto 2.5rem;
  font-weight: 300;
  line-height: 1.85;
  color: var(--ink-soft);

  [data-theme="dark"] & {
    color: rgba(245, 240, 234, 0.5);
  }
`,Qn=Zt.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`,qn=Zt.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.6rem;
  font-family: var(--mono);
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border-radius: 2px;
  cursor: pointer;
  border: none;
  background: var(--accent);
  color: white;
  transition: background 0.2s, box-shadow 0.2s;
  will-change: transform;

  &:hover {
    background: #a01415;
    box-shadow: 0 6px 20px rgba(200, 25, 26, 0.3);
  }
`,Jn=Zt.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.6rem;
  font-family: var(--mono);
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border-radius: 2px;
  cursor: pointer;
  background: transparent;
  color: var(--ink);
  border: 1.5px solid var(--line);
  transition: border-color 0.2s, color 0.2s;
  will-change: transform;

  &:hover {
    border-color: var(--ink);
  }

  [data-theme="dark"] & {
    color: rgba(245, 240, 234, 0.8);
    border-color: rgba(245, 240, 234, 0.2);

    &:hover {
      border-color: rgba(245, 240, 234, 0.6);
      color: white;
    }
  }
`,Gn=Zt.div`
  position: absolute;
  right: 2rem;
  top: 12%;
  bottom: 12%;
  width: 16px;
  overflow: hidden;
  z-index: 2;
  pointer-events: none;

  @media (max-width: 900px) {
    display: none;
  }
`,Xn=Zt.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${$n} 32s linear infinite;
`,Zn=Zt.span`
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  font-family: var(--mono);
  font-size: 0.58rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--ink-soft);
  opacity: 0.18;
  padding: 1rem 0;
  white-space: nowrap;

  [data-theme="dark"] & {
    color: rgba(245, 240, 234, 0.12);
    opacity: 1;
  }
`,er=Zt.div`
  position: absolute;
  bottom: 2rem;
  left: 3rem;
  right: 3rem;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    left: 1.5rem;
    right: 1.5rem;
  }
`,tr=Zt.span`
  font-family: var(--mono);
  font-size: 0.67rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: var(--ink-soft);
  opacity: 0.5;

  [data-theme="dark"] & {
    color: rgba(245, 240, 234, 0.22);
    opacity: 1;
  }

  &::before {
    content: "";
    width: 1.5rem;
    height: 1px;
    background: currentColor;
  }
`,nr=Zt.span`
  font-family: var(--mono);
  font-size: 0.78rem;
  letter-spacing: 0.1em;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--ink-soft);
  opacity: 0.6;

  [data-theme="dark"] & {
    color: rgba(245, 240, 234, 0.35);
    opacity: 1;
  }

  @media (min-width: 1200px) {
    font-size: 0.95rem;
  }
`,rr=Zt.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #5ebb7c;
  animation: ${Mn} 2s infinite;
  opacity: 1 !important;
`,ar=["Desenvolvedora Full Stack","Ilustradora Digital","UI Designer"],or=["React","Node.js","Python","Vue.js","D3.js","Django","TypeScript","SCSS","Docker","p5.js","WebSockets","PostgreSQL","Figma","Meta Quest"];function ir(e){let{onNavigate:t}=e;const[n,a]=(0,r.useState)(0),[i,l]=(0,r.useState)(!1);(0,r.useEffect)(()=>{const e=setInterval(()=>{l(!0),setTimeout(()=>{a(e=>(e+1)%ar.length),l(!1)},350)},2800);return()=>clearInterval(e)},[]);const s=(0,r.useRef)(null),u=(0,r.useRef)(null),c=(0,r.useCallback)((e,t)=>{const n=e.current;if(!n)return;const r=n.getBoundingClientRect(),a=r.left+r.width/2,o=r.top+r.height/2,i=t.clientX-a,l=t.clientY-o,s=Math.sqrt(i*i+l*l);if(s<80){const e=6*(1-s/80);n.style.transform=`translate(${i/s*e}px, ${l/s*e}px)`}else n.style.transform=""},[]),d=(0,r.useCallback)(e=>{e.current&&(e.current.style.transform="")},[]);(0,r.useEffect)(()=>{const e=e=>{c(s,e),c(u,e)};return window.addEventListener("mousemove",e,{passive:!0}),()=>window.removeEventListener("mousemove",e)},[c]);const f=[...or,...or];return(0,o.jsxs)(Un,{children:[(0,o.jsx)(Nn,{}),(0,o.jsx)(Bn,{children:(0,o.jsxs)(Hn,{children:[(0,o.jsx)(Vn,{children:(0,o.jsx)(Wn,{$exiting:i,children:ar[n]},n)}),(0,o.jsxs)(Yn,{children:["Izadora",(0,o.jsx)("br",{}),(0,o.jsx)("em",{children:"Alves"})]}),(0,o.jsx)(Kn,{children:"Desenvolvedora Full Stack com experi\xeancia real em Americanas S.A. e pesquisa em realidade virtual. Construo produtos digitais do design \xe0 infraestrutura: interfaces, APIs e dashboards que escalam."}),(0,o.jsxs)(Qn,{children:[(0,o.jsx)(qn,{ref:s,onClick:()=>t("projects"),onMouseLeave:()=>d(s),children:"Ver projetos \u2192"}),(0,o.jsx)(Jn,{ref:u,onClick:()=>t("contact"),onMouseLeave:()=>d(u),children:"Entrar em contato"})]})]})}),(0,o.jsx)(Gn,{children:(0,o.jsx)(Xn,{"aria-hidden":"true",children:f.map((e,t)=>(0,o.jsx)(Zn,{children:e},t))})}),(0,o.jsxs)(er,{children:[(0,o.jsx)(tr,{children:"S\xe3o Gon\xe7alo \xb7 RJ"}),(0,o.jsxs)(nr,{children:[(0,o.jsx)(rr,{}),"dispon\xedvel para projetos"]})]})]})}var lr=n(950);const sr=tn`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`,ur=tn`
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.5; transform: scale(0.8); }
`,cr=Zt.p`
  font-family: var(--mono);
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.7rem;

  &::before {
    content: "";
    width: 1.5rem;
    height: 1px;
    background: var(--accent);
  }
`,dr=Zt.h2`
  font-family: var(--serif);
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  line-height: 1.1;
  color: var(--ink);

  em {
    font-style: italic;
    color: var(--accent);
  }
`,fr=Zt.footer`
  padding: 1.75rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--line);
  background: var(--bg);
  transition: background 0.3s, border-color 0.3s;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.85rem;
    text-align: center;
    padding: 1.75rem 1.5rem;
  }
`,pr=Zt.span`
  font-family: var(--mono);
  font-size: 0.7rem;
  color: var(--ink-soft);
`,mr=Zt.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
  animation: ${ur} 2s infinite;
`,hr=Zt.div`
  background: var(--bg);
  min-height: 100vh;
  padding-top: 5rem;
  animation: ${sr} 0.4s ease both;
`,gr=Zt.section`
  padding: 4.5rem 3rem;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`,vr=Zt.div`
  margin-bottom: 2.5rem;
`,br=Zt.div`
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`,yr=Zt.p`
  font-size: 1rem;
  color: var(--ink-soft);
  font-weight: 300;
  line-height: 1.8;
  margin-bottom: 1.75rem;

  strong {
    color: var(--ink);
    font-weight: 500;
  }
`,xr=Zt.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--line);
  border: 1px solid var(--line);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 3rem;
`,kr=Zt.div`
  background: var(--surface);
  padding: 1.1rem 1.25rem;
  text-align: center;
  transition: background 0.3s;

  &:hover {
    background: var(--surface-soft);
  }
`,wr=Zt.p`
  font-family: var(--serif);
  font-size: 1.8rem;
  color: var(--accent);
  line-height: 1;
  margin-bottom: 0.25rem;
`,Sr=Zt.p`
  font-family: var(--mono);
  font-size: 0.6rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ink-soft);
  opacity: 0.65;
  line-height: 1.4;
`,Er=Zt.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-top: 2rem;
`,_r=Zt.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  font-family: var(--mono);
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 2px;
  background: var(--accent);
  color: white;
  transition: all 0.2s;

  &:hover {
    background: #a01415;
    transform: translateY(-2px);
  }
`,Cr=Zt.div`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  margin-top: 1.75rem;
`,jr=Zt.div``,Pr=Zt.p`
  font-family: var(--mono);
  font-size: 0.6rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 0.45rem;
  opacity: 0.8;
`,Ar=Zt.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`,zr=Zt.span`
  font-family: var(--mono);
  font-size: 0.7rem;
  padding: 0.28rem 0.7rem;
  border: 1px solid var(--line);
  border-radius: 2px;
  color: var(--ink-soft);
  background: var(--surface);
  transition: all 0.2s;
  cursor: default;

  &:hover {
    border-color: var(--accent);
    color: var(--accent);
  }
`,Tr=Zt.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
`,Ir=Zt.div`
  padding-left: 1.4rem;
  border-left: 2px solid var(--line);
  transition: border-color 0.2s;

  &:hover {
    border-color: var(--accent);
  }
`,Lr=Zt.p`
  font-family: var(--mono);
  font-size: 0.68rem;
  letter-spacing: 0.1em;
  color: var(--accent);
  text-transform: uppercase;
  margin-bottom: 0.25rem;
`,Rr=Zt.p`
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--ink);
  margin-bottom: 0.2rem;
`,Nr=Zt.p`
  font-family: var(--mono);
  font-size: 0.78rem;
  color: var(--ink-soft);
  margin-bottom: 0.5rem;
`,Dr=Zt.p`
  font-size: 0.88rem;
  color: var(--ink-soft);
  font-weight: 300;
  line-height: 1.65;
`,Mr=Zt.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-top: 0.6rem;
`,Or=Zt.span`
  font-family: var(--mono);
  font-size: 0.62rem;
  padding: 0.18rem 0.5rem;
  border: 1px solid var(--line);
  border-radius: 2px;
  color: var(--ink-soft);
  opacity: 0.7;
`,Fr=Zt.div`
  margin-top: 0.85rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,$r=Zt.p`
  font-family: var(--mono);
  font-size: 0.6rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-soft);
  opacity: 0.5;
  margin-bottom: 0.2rem;
`,Ur=Zt.div`
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
`,Br=Zt.span`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--accent);
  margin-top: 6px;
  flex-shrink: 0;
`,Hr=Zt.div``,Vr=Zt.a`
  font-family: var(--mono);
  font-size: 0.75rem;
  color: var(--accent);
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`,Wr=Zt.p`
  font-size: 0.82rem;
  color: var(--ink-soft);
  font-weight: 300;
  line-height: 1.5;
`,Yr=tn`
  from { opacity: 0; transform: scale(1.03); }
  to   { opacity: 1; transform: scale(1); }
`,Kr=Zt.section`
  background: #0e0b09;
  padding: 5rem 3rem 4rem;

  @media (max-width: 768px) {
    padding: 3.5rem 1.5rem 3rem;
  }
`,Qr=Zt.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`,qr=Zt.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,Jr=Zt.p`
  font-family: var(--mono);
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #d62828;
  display: flex;
  align-items: center;
  gap: 0.6rem;

  &::before {
    content: "";
    width: 1.5rem;
    height: 1px;
    background: #d62828;
  }
`,Gr=Zt.h2`
  font-family: var(--serif);
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  line-height: 1.1;
  color: white;

  em {
    font-style: italic;
    color: #d62828;
  }
`,Xr=Zt.p`
  font-size: 0.92rem;
  color: rgba(245, 240, 234, 0.45);
  font-weight: 300;
  line-height: 1.7;
  max-width: 40ch;
`,Zr=Zt.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 1.25rem;
  font-family: var(--mono);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 2px;
  background: transparent;
  color: rgba(245, 240, 234, 0.7);
  border: 1.5px solid rgba(245, 240, 234, 0.2);
  transition: all 0.2s;
  align-self: flex-start;
  margin-top: 0.5rem;

  &:hover {
    border-color: #d62828;
    color: #d62828;
    transform: translateY(-2px);
  }
`,ea=Zt.div`
  position: relative;
`,ta=Zt.div`
  position: relative;
  background: #080605;
  border-radius: 6px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 480px;

  img {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    object-fit: contain;
    display: block;
    border-radius: 2px;
    animation: ${Yr} 0.45s ease both;
  }

  @media (max-width: 768px) {
    height: 320px;
  }
`,na=Zt.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${e=>{let{$side:t}=e;return"left"===t?"left: -18px;":"right: -18px;"}}
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #0e0b09;
  border: 1px solid rgba(255,255,255,0.12);
  color: rgba(245,240,234,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  transition: all 0.2s;
  z-index: 2;

  &:hover {
    border-color: #d62828;
    color: #d62828;
    background: rgba(214,40,40,0.08);
  }
`,ra=Zt.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  padding: 0 2px;
`,aa=(Zt.p`
  font-family: var(--mono);
  font-size: 0.65rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(245, 240, 234, 0.3);
`,Zt.p`
  font-family: var(--mono);
  font-size: 0.65rem;
  letter-spacing: 0.08em;
  color: rgba(245, 240, 234, 0.25);
`),oa=Zt.div`
  display: flex;
  gap: 5px;
  align-items: center;
`,ia=Zt.button`
  width: ${e=>{let{$active:t}=e;return t?"18px":"5px"}};
  height: 5px;
  border-radius: 3px;
  background: ${e=>{let{$active:t}=e;return t?"#d62828":"rgba(245,240,234,0.2)"}};
  border: none;
  transition: all 0.3s;
`,la=(Zt.p`
  font-family: var(--mono);
  font-size: 0.6rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(245, 240, 234, 0.2);
  text-align: center;
  margin-top: 0.5rem;
`,tn`
  from { opacity: 0; }
  to   { opacity: 1; }
`),sa=Zt.div`
  position: fixed;
  inset: 0;
  z-index: 99999;
  background: rgba(4, 3, 2, 0.97);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${la} 0.2s ease;
  backdrop-filter: blur(6px);
`,ua=Zt.img`
  max-width: 90vw;
  max-height: 88vh;
  object-fit: contain;
  border-radius: 2px;
  display: block;
`,ca=Zt.button`
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.12);
  color: rgba(245,240,234,0.7);
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  &:hover {
    border-color: #d62828;
    color: #d62828;
  }
`,da=Zt.button`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  ${e=>{let{$side:t}=e;return"left"===t?"left: 1.5rem;":"right: 1.5rem;"}}
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.12);
  color: rgba(245,240,234,0.7);
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  &:hover {
    border-color: #d62828;
    color: #d62828;
    background: rgba(214,40,40,0.1);
  }
`,fa=Zt.p`
  position: fixed;
  bottom: 1.75rem;
  left: 50%;
  transform: translateX(-50%);
  font-family: var(--mono);
  font-size: 0.68rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(245, 240, 234, 0.4);
  white-space: nowrap;
`,pa=Zt.section`
  background: var(--surface);
  border-top: 1px solid var(--line);
  padding: 5rem 3rem 4.5rem;

  @media (max-width: 768px) {
    padding: 3.5rem 1.5rem 3rem;
  }
`,ma=Zt.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`,ha=Zt.div`
  max-width: 660px;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,ga=Zt.p`
  font-family: var(--mono);
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
  display: flex;
  align-items: center;
  gap: 0.6rem;

  &::before {
    content: "";
    width: 1.5rem;
    height: 1px;
    background: var(--accent);
  }
`,va=Zt.h2`
  font-family: var(--serif);
  font-size: clamp(1.4rem, 2.5vw, 2rem);
  line-height: 1.15;
  color: var(--ink);

  em {
    font-style: italic;
    color: var(--accent);
  }
`,ba=Zt.p`
  font-size: 0.92rem;
  color: var(--ink-soft);
  font-weight: 300;
  line-height: 1.75;

  & + & {
    margin-top: 0.75rem;
  }

  strong {
    color: var(--ink);
    font-weight: 500;
  }

  em {
    font-style: italic;
    color: var(--accent);
  }
`,ya=Zt.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.25rem;
`,xa=Zt.span`
  font-family: var(--mono);
  font-size: 0.65rem;
  padding: 0.22rem 0.6rem;
  border: 1px solid var(--line);
  border-radius: 2px;
  color: var(--ink-soft);
  background: var(--bg);
`,ka=Zt.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;
`,wa=Zt.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 1.25rem;
  font-family: var(--mono);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 2px;
  transition: all 0.2s;

  ${e=>{let{$primary:t}=e;return t?"\n    background: var(--accent);\n    color: white;\n    border: 1.5px solid var(--accent);\n    &:hover { background: #a01415; border-color: #a01415; transform: translateY(-2px); }\n  ":"\n    background: transparent;\n    color: var(--ink-soft);\n    border: 1.5px solid var(--line);\n    &:hover { border-color: var(--accent); color: var(--accent); transform: translateY(-2px); }\n  "}}
`,Sa=(Zt.div`
  position: relative;
`,Zt.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.6rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`),Ea=Zt.img`
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: contain;
  background: var(--bg);
  border-radius: 4px;
  border: 1px solid var(--line);
  display: block;
  transition: transform 0.2s, border-color 0.2s;

  &:hover {
    transform: translateY(-3px);
    border-color: var(--accent);
  }
`,_a=(Zt.div`
  position: relative;
`,Zt.div`
  background: var(--bg);
  border: 1px solid var(--line);
  border-radius: 6px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 340px;

  img {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    object-fit: contain;
    display: block;
    border-radius: 2px;
    animation: ${Yr} 0.35s ease both;
  }

  @media (max-width: 768px) {
    height: 240px;
  }
`,Zt.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${e=>{let{$side:t}=e;return"left"===t?"left: -16px;":"right: -16px;"}}
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--surface);
  border: 1px solid var(--line);
  color: var(--ink-soft);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.95rem;
  transition: all 0.2s;
  z-index: 2;

  &:hover {
    border-color: var(--accent);
    color: var(--accent);
  }
`,Zt.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.75rem;
  padding: 0 2px;
`,Zt.p`
  font-family: var(--mono);
  font-size: 0.62rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ink-soft);
  opacity: 0.5;
`,Zt.div`
  display: flex;
  gap: 5px;
  align-items: center;
`,Zt.button`
  width: ${e=>{let{$active:t}=e;return t?"16px":"5px"}};
  height: 5px;
  border-radius: 3px;
  background: ${e=>{let{$active:t}=e;return t?"var(--accent)":"var(--line)"}};
  border: none;
  transition: all 0.3s;
`,[{period:"Jan 2025 \xb7 presente",role:"Bolsista em Pesquisa em Arte e Tecnologia",company:"Escola Superior de Desenho Industrial \xb7 MediaLAB UERJ",desc:"Atualmente, atuo no apoio t\xe9cnico em aulas de programa\xe7\xe3o criativa, onde ajudo os alunos a desenvolverem projetos interativos e algoritmos visuais utilizando JavaScript (p5.js). Al\xe9m de exemplos pr\xe1ticos para facilitar o aprendizado da l\xf3gica de programa\xe7\xe3o, tamb\xe9m me dedico \xe0 pesquisa e ao desenvolvimento experimental no MediaLAB. L\xe1, trabalho com prototipagem em realidade virtual, crio sites institucionais, visualiza\xe7\xf5es de dados e participo ativamente de exposi\xe7\xf5es e oficinas que unem arte e tecnologia, sempre buscando solu\xe7\xf5es inovadoras e multidisciplinares.",stack:["p5.js","D3.js","JavaScript","HTML/SCSS","Meta Quest 3","Spatial"],projects:[{name:"BlackVis",href:"https://blackvisesdi.github.io/BlackVis/",desc:"Visualiza\xe7\xe3o de dados interativa de designers negros brasileiros e estrangeiro em grafo de for\xe7a com D3.js. Ferramenta de visibilidade e pesquisa com filtros por \xe1rea, ano e nome."},{name:"Galeria Virtual & VR",href:"https://www.spatial.io/s/Media-Labs-1-0-Claro-6826039af8049f0d7678b6fe?share=1267569543253887910",desc:"Instala\xe7\xf5es imersivas em Meta Quest 3 na plataforma Spatial, explorando arte, design e tecnologia em espa\xe7os tridimensionais para a galeria do MEDIALAB."}]},{period:"Jan 2023 \xb7 Jul 2023",role:"Desenvolvedora de Software J\xfanior",company:"Americanas S.A.",desc:"Trabalhei no desenvolvimento de ferramentas internas para automatizar tarefas e integrar sistemas, ajudando a deixar os processos da empresa mais \xe1geis. No dia a dia, usei Django e Vue.js para criar solu\xe7\xf5es como um painel de monitoramento de equipes em tempo real e um novo visual para a plataforma de automa\xe7\xe3o, focado em tornar o uso mais simples para todos. Al\xe9m de construir novas fun\xe7\xf5es, cuidei da manuten\xe7\xe3o e corre\xe7\xe3o de falhas, sempre trabalhando em conjunto com o time atrav\xe9s de metodologias \xe1geis e revis\xf5es de c\xf3digo para garantir que tudo fosse entregue com a melhor qualidade poss\xedvel.",stack:["ReactJS","Vue.js","Django","WebSockets","Docker"],projects:[]},{period:"Jul 2022 \xb7 Dez 2022",role:"Estagi\xe1ria em Desenvolvimento de Software",company:"Americanas S.A.",desc:"Com uma experi\xeancia que passou por v\xe1rias \xe1reas da empresa, como Marketing e Inova\xe7\xe3o, meu trabalho foi usar a tecnologia para resolver problemas reais de cada setor. No dia a dia, criei desde telas modernas e f\xe1ceis de usar com ReactJS at\xe9 a parte interna dos sistemas com Node.js e Django, garantindo que tudo funcionasse de forma r\xe1pida e segura. Mais do que apenas escrever c\xf3digo, foquei em entregar solu\xe7\xf5es organizadas e eficientes que facilitaram a rotina das equipes e trouxeram resultados positivos.",stack:["ReactJS","Node.js","Django","Styled Components"],projects:[]},{period:"Out 2018 \xb7 Mar 2020",role:"Estagi\xe1ria",company:"Prefeitura de Niter\xf3i \xb7 Programa Niter\xf3i Digital",desc:"Planejamento e instru\xe7\xe3o de m\xf3dulos de Computa\xe7\xe3o B\xe1sica e L\xf3gica de Programa\xe7\xe3o para comunidades em situa\xe7\xe3o de vulnerabilidade. Desenvolvi curr\xedculos focados em alfabetiza\xe7\xe3o digital e introdu\xe7\xe3o ao desenvolvimento de jogos, utilizando metodologias ativas para ensinar conceitos fundamentais de algoritmos e estruturas de dados.",stack:["GIMP","Scratch","LibreOffice"],projects:[]},{period:"Fev 2016 \xb7 Jul 2022",role:"Gradua\xe7\xe3o em Ci\xeancia da Computa\xe7\xe3o",company:"Universidade Veiga de Almeida",desc:"Bacharelado em Ci\xeancia da Computa\xe7\xe3o com foco em desenvolvimento de software, estruturas de dados e sistemas distribu\xeddos.",stack:["Java","C++","HTML/CSS","SQL","PostgreSQL"],projects:[]}]),Ca=n.p+"static/media/billieInsta.11f0210dc78db5b1b1d3.jpg",ja=n.p+"static/media/rihannaInsta.a02b0ea0d3c204dd702e.jpg",Pa=n.p+"static/media/Brunao2.fa48479d06adba9c71f8.jpg",Aa=n.p+"static/media/p.gleiInsta.99b7321615f3070fbbfc.jpg",za=n.p+"static/media/p_rafael.6143b0601933634d01a5.jpg",Ta=n.p+"static/media/post-instaWA.063d10a421917257e0de.jpg",Ia=n.p+"static/media/p-v-a4-musica-playlist.cc9e225974c56d0a8c97.jpg",La=n.p+"static/media/demi-rockinrio.37975ed716d8c7b13221.png",Ra=n.p+"static/media/Luane__1_.08a96fce49193b56d813.png",Na=n.p+"static/media/curriculo-izadora.47e7e5330fa53f188fac.pdf",Da=n.p+"static/media/tcc-izadora.4d4b8ffd76a7a9e501aa.pdf",Ma=n.p+"static/media/tcc_p54_0.6dff87cf0379ae713600.jpeg",Oa=n.p+"static/media/tcc_p58_0.e5d371adfcacbb62fe58.png",Fa=n.p+"static/media/tcc_p59_0.94f7719ce5e0475d629e.png",$a=n.p+"static/media/tcc_p60_0.9018702eed140815b982.jpeg",Ua=n.p+"static/media/tcc_p61_1.bc6dae02a7e6ca1a0d51.jpeg",Ba=n.p+"static/media/tcc_p65_0.bb405a194b9e8ead0213.jpeg",Ha=n.p+"static/media/tcc_p66_1.d5fc45876715ed5d6f61.jpeg",Va=[{src:$a,alt:"Figura 46 \xb7 tela de menu"},{src:n.p+"static/media/tcc_p67_0.168e1934da37a6fad49b.jpeg",alt:"Figura 59 \xb7 4\xaa tela de recompensa"},{src:Ha,alt:"Figura 58 \xb7 3\xaa tela de recompensa"},{src:Fa,alt:"Figura 44 \xb7 fase inicial"},{src:Ba,alt:"Figura 56 \xb7 1\xaa tela de recompensa"},{src:Ma,alt:"Figura 40 \xb7 cria\xe7\xe3o da arte"},{src:Ua,alt:"Figura 49 \xb7 tela de fim de jogo"},{src:Oa,alt:"Figura 43 \xb7 As Aventuras da Garota Ci\xeancia"},{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYAAAAAgCAYAAAAbrK/lAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEXklEQVR4nO2cPY4UQQyF5yaIE8AhkLgAx0B7BK5BhkROQojEBYiIISHhApAgQbCoVypkSl3d5SqXn6vrIT3xN9Oft/tr2zOa3dvtdrtnGIZhlgy8AIZhGAYTeAEMwzAMJvACGIZhGEzgBajy+NHT6lyRz6wdtH9oPmOeOQRIx3z36/dDXn75UUx6jGUNaD4TI/Sf/l8s8QVI3CNmqQ6LGtD8vevADcw39J/+XzSxBcjZT959VUkwO1/WwQ0ME/pP/y+cuAKU2B/uXty/ff7s/vObu//y/dPrf7+nP29prQHNL9WB2sC01x25/Vnx6T/9v7j/cQWQ/DP2iBrQ/KNr4N0Ea7evEVsYik//6f8C/scUYHu8/IJq+aUaZuNHaEB7NXhvYUg+/af/C/gfU4DSNK/h79UwGx/dgI5uwEEvRUPx6T/9X8T/eAIkjjzO9ncNP69hJn6UBqTZvqxvwAh8+k//F/A/ngBHk0zDlzXMxEc3oFxAzc1ndRMg+fSf/i/kf1wBti9cpoXfcgOi+REaUOv2dSShpgGj+fSf/i/ifzwBJL90EpIgKdu/5Un/l+SZhY9uQNZs7RaG5tN/+r+Q//EE2OOXaqiJlh2J792ArLavPQlrakDz6X8sPv0fzo8pwFkNmrSw0XxUA7Lcvlq2MDQ/iv/y697zoCWz8em/Cz9mA5Q15J9tzTeDo8zKRzagxLbYvlq3MCQ/vxm9/d+e8+fb+4f8/Phqtxlq/NuOkY4zA5/+u/JjNsCSCOmYZ98AYTF80HzUALbYvnq3MCQ/r6O3AbZwU8Osce3IP9mENecfyZd1oAbwQv7ri9EI0NuAUw3yuNtmIv8t/cq/Y+4KfMQAtty+WrYwNL903lsbYMt1kM89Yx35Nytf1oAYwAv5f15MHo0AvQ0wF2HbJPIGfHQTzs5HDWCrVx9WW5gnX26sNef6rAH2bsCtm3jP+UfzowzgBfyvuxk0jW9EAz6Tce/nZVyBjxzA8gaSEmrT04AQ/O3x6T1w2cRbm1DLe+BnzcDbf09+pAG8gP+6JuQtYI18I4dQBD5qAPdsf7IBWmyg3vx86LY2wN5z0OOg5wCw5EcZwIv4H08AC7ZVHWh+rQjWAzhnHZ2D0gaWamjdwpH8KP6X+DX1zMxHD2C0f478sQ3Q+sareR8sf47lS29PPqoByZfMPRuYvAl7PoXizUef/6MaZB0l/6SnV+DT/6F8/ck/a4DWA0D7flr+vN4bH8Xvkb/n/G/PyT8HfsYp/czyJF/v59A9+TXXocZ/ywZcqqHH01n4iAGwkP91J7/24lo2v3Q8mZbnzc5HDGB5vN4B1HIe0Hyt155NeO/rafV0Fr73AEb758jXFVO7AY8WcZVEGMB7Ao4eQFH4eS1HXns14RWDGsCoBcyRj7+4zLkEyAFckvDscaNvQi8+EyOIAaxxasQQcuDjLywTPzU3l/Wrj0h8Zs1onbIeQg58/ElmrhH0WyBoPnO9oJ0azf8LLcahiVajW0gAAAAASUVORK5CYII=",alt:"Figura 51 \xb7 sprite correndo"}],Wa=[{label:"Frontend",skills:["React","Vue.js","TypeScript","JavaScript","HTML/CSS","SCSS"]},{label:"Backend",skills:["Node.js","Django","Python","API RESTful","WebSockets"]},{label:"Design & criatividade",skills:["Figma","Illustrator","p5.js","D3.js","Processing"]},{label:"Ferramentas",skills:["Docker","Git","Jira","Scrum"]},{label:"Estudando",skills:["React Native","Flutter","Mobile Development"]}],Ya=[{num:"2+",label:"anos de experi\xeancia full stack"},{num:"10+",label:"anos de estudo em desenvolvimento web"},{num:"9",label:"projetos no portf\xf3lio"}],Ka=[{src:Ca,alt:"Billie Eilish"},{src:ja,alt:"Rihanna"},{src:La,alt:"Demi Rock in Rio"},{src:Pa,alt:"Bruno"},{src:Aa,alt:"Amor da Glei"},{src:za,alt:"Amigos do Rafael"},{src:Ta,alt:"Wanda Maximoff"},{src:Ra,alt:"Familia da Luane"},{src:Ia,alt:"Playlist Vicente"}],Qa=Ka.length;function qa(){const e=(new Date).getFullYear(),[t,n]=(0,r.useState)(0),[a,i]=(0,r.useState)(null),l=(0,r.useCallback)(()=>n(e=>(e-1+Qa)%Qa),[]),s=(0,r.useCallback)(()=>n(e=>(e+1)%Qa),[]);(0,r.useEffect)(()=>{if(null!==a)return;const e=setInterval(s,3500);return()=>clearInterval(e)},[a,s]);const u=(0,r.useCallback)(()=>i(e=>(e-1+Qa)%Qa),[]),c=(0,r.useCallback)(()=>i(e=>(e+1)%Qa),[]);(0,r.useEffect)(()=>{const e=e=>{null!==a?("Escape"===e.key&&i(null),"ArrowLeft"===e.key&&u(),"ArrowRight"===e.key&&c()):("ArrowLeft"===e.key&&l(),"ArrowRight"===e.key&&s())};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[a,l,s,u,c]),(0,r.useEffect)(()=>(document.body.style.overflow=null!==a?"hidden":"",()=>{document.body.style.overflow=""}),[a]);const d=Ka[t];return(0,o.jsxs)(hr,{children:[(0,o.jsxs)(gr,{children:[(0,o.jsxs)(vr,{children:[(0,o.jsx)(cr,{children:"sobre mim"}),(0,o.jsxs)(dr,{children:["C\xf3digo, design",(0,o.jsx)("br",{}),"e ",(0,o.jsx)("em",{children:"criatividade"})]})]}),(0,o.jsx)(xr,{children:Ya.map(e=>(0,o.jsxs)(kr,{children:[(0,o.jsx)(wr,{children:e.num}),(0,o.jsx)(Sr,{children:e.label})]},e.label))}),(0,o.jsxs)(br,{children:[(0,o.jsxs)("div",{children:[(0,o.jsxs)(yr,{children:["Sou desenvolvedora Full Stack com experi\xeancia real em"," ",(0,o.jsx)("strong",{children:"uma das maiores varejistas do Brasil"})," e pesquisa em arte e tecnologia. Construo produtos digitais do design \xe0 infraestrutura, com aten\xe7\xe3o a performance, usabilidade e c\xf3digo que escala."]}),(0,o.jsxs)(yr,{children:["Tenho facilidade em trabalhar em"," ",(0,o.jsx)("strong",{children:"times multidisciplinares"})," e gosto de resolver problemas complexos com solu\xe7\xf5es diretas: seja otimizando uma API, redesenhando um fluxo de UX ou prototipando em realidade virtual."]}),(0,o.jsx)(Cr,{children:Wa.map(e=>(0,o.jsxs)(jr,{children:[(0,o.jsx)(Pr,{children:e.label}),(0,o.jsx)(Ar,{children:e.skills.map(e=>(0,o.jsx)(zr,{children:e},e))})]},e.label))}),(0,o.jsx)(Er,{children:(0,o.jsxs)(_r,{href:Na,download:"curriculo-izadora.pdf",children:[(0,o.jsx)(En,{})," Baixar curr\xedculo"]})})]}),(0,o.jsx)(Tr,{children:_a.map(e=>(0,o.jsxs)(Ir,{children:[(0,o.jsx)(Lr,{children:e.period}),(0,o.jsx)(Rr,{children:e.role}),(0,o.jsx)(Nr,{children:e.company}),(0,o.jsx)(Dr,{children:e.desc}),e.stack.length>0&&(0,o.jsx)(Mr,{children:e.stack.map(e=>(0,o.jsx)(Or,{children:e},e))}),e.projects.length>0&&(0,o.jsxs)(Fr,{children:[(0,o.jsx)($r,{children:"projetos desenvolvidos"}),e.projects.map(e=>(0,o.jsxs)(Ur,{children:[(0,o.jsx)(Br,{}),(0,o.jsxs)(Hr,{children:[(0,o.jsxs)(Vr,{href:e.href,target:"_blank",rel:"noreferrer",children:[e.name," \u2197"]}),(0,o.jsx)(Wr,{children:e.desc})]})]},e.name))]})]},e.period))})]})]}),(0,o.jsx)(Kr,{children:(0,o.jsxs)(Qr,{children:[(0,o.jsxs)(qr,{children:[(0,o.jsx)(Jr,{children:"ilustra\xe7\xe3o"}),(0,o.jsxs)(Gr,{children:["Al\xe9m do c\xf3digo,",(0,o.jsx)("br",{}),"tamb\xe9m ",(0,o.jsx)("em",{children:"desenho"})]}),(0,o.jsxs)(Xr,{children:["Retratos, personagens e composi\xe7\xf5es criativas. Transformo ideias em ilustra\xe7\xf5es digitais.",(0,o.jsx)("br",{}),"Use as setas ou as teclas \u2190 \u2192 para navegar. Clique na imagem para ver em tela cheia."]}),(0,o.jsxs)(Zr,{href:"https://www.instagram.com/ilustradoradora",target:"_blank",rel:"noreferrer",children:[(0,o.jsx)(wn,{size:15})," @ilustradoradora"]})]}),(0,o.jsxs)(ea,{children:[(0,o.jsx)(ta,{onClick:()=>i(t),children:(0,o.jsx)("img",{src:d.src,alt:d.alt},t)}),(0,o.jsx)(na,{$side:"left",onClick:l,children:"\u2039"}),(0,o.jsx)(na,{$side:"right",onClick:s,children:"\u203a"}),(0,o.jsxs)(ra,{children:[(0,o.jsx)(oa,{children:Ka.map((e,r)=>(0,o.jsx)(ia,{$active:r===t,onClick:()=>n(r)},r))}),(0,o.jsxs)(aa,{children:[t+1," / ",Qa]})]})]})]})}),null!==a&&lr.createPortal((0,o.jsxs)(sa,{onClick:()=>i(null),children:[(0,o.jsx)(ua,{src:Ka[a].src,alt:Ka[a].alt,onClick:e=>e.stopPropagation()}),(0,o.jsx)(ca,{onClick:()=>i(null),children:"\u2715"}),(0,o.jsx)(da,{$side:"left",onClick:e=>{e.stopPropagation(),u()},children:"\u2039"}),(0,o.jsx)(da,{$side:"right",onClick:e=>{e.stopPropagation(),c()},children:"\u203a"}),(0,o.jsx)(fa,{children:Ka[a].alt})]}),document.body),(0,o.jsx)(pa,{children:(0,o.jsxs)(ma,{children:[(0,o.jsxs)(ha,{children:[(0,o.jsx)(ga,{children:"trabalho de conclus\xe3o de curso \xb7 UVA \xb7 2021 \xb7 nota 10"}),(0,o.jsxs)(va,{children:["As Aventuras da ",(0,o.jsx)("em",{children:"Garota Ci\xeancia"})]}),(0,o.jsxs)(ba,{children:["Meu TCC em Ci\xeancia da Computa\xe7\xe3o prop\xf5e a"," ",(0,o.jsx)("strong",{children:"gamifica\xe7\xe3o"})," como estrat\xe9gia para discutir a sub-representa\xe7\xe3o das mulheres na tecnologia. O produto final \xe9 um jogo 2D de plataforma onde a ",(0,o.jsx)("strong",{children:"Garota Ci\xeancia"}),", personagem sempre \xe0 procura de novas aventuras, embarca em uma realidade alternativa para descobrir a hist\xf3ria de uma das mulheres mais importantes da computa\xe7\xe3o."]}),(0,o.jsxs)(ba,{children:["Nessa aventura, o foco \xe9 a"," ",(0,o.jsx)("strong",{children:"Condessa Ada Lovelace"}),": a matem\xe1tica que criou o primeiro algoritmo para ser processado por uma m\xe1quina, no s\xe9culo XIX, muito antes do computador pessoal existir. Sua import\xe2ncia \xe9 t\xe3o reconhecida que desde 2009, todo dia 15 de outubro, o mundo celebra o ",(0,o.jsx)("em",{children:"Ada Lovelace Day"})," para inspirar mulheres nas \xe1reas de ci\xeancia, tecnologia, engenharia e matem\xe1tica."]}),(0,o.jsxs)(ba,{children:["No jogo, a Garota Ci\xeancia precisa coletar moedas, passar por armadilhas e desafios crescentes para desbloquear partes da hist\xf3ria de Ada. A cada fase vencida, ela se aproxima da sua pr\xf3pria resposta: a de que \xe9 t\xe3o capaz quanto qualquer outro de realizar o que sempre sonhou. Todo o c\xf3digo foi escrito em"," ",(0,o.jsx)("strong",{children:"C# na Unity"}),"; os sprites e cen\xe1rios foram desenhados \xe0 m\xe3o no ",(0,o.jsx)("strong",{children:"Infinite Painter"}),"."]}),(0,o.jsx)(ya,{children:["Unity","C#","Infinite Painter","Design de Jogos","Gamifica\xe7\xe3o"].map(e=>(0,o.jsx)(xa,{children:e},e))}),(0,o.jsx)(ka,{children:(0,o.jsxs)(wa,{href:Da,download:"tcc-izadora.pdf",$primary:!0,children:[(0,o.jsx)(En,{})," Baixar TCC (PDF)"]})})]}),(0,o.jsx)(Sa,{children:Va.map((e,t)=>(0,o.jsx)(Ea,{src:e.src,alt:e.alt},t))})]})}),(0,o.jsxs)(fr,{children:[(0,o.jsxs)(pr,{children:["\xa9 ",e," Izadora Alves \xb7 S\xe3o Gon\xe7alo, RJ"]}),(0,o.jsx)(mr,{}),(0,o.jsx)(pr,{children:"feito com \u2665"})]})]})}const Ja=Zt.div`
  background: var(--bg);
  min-height: 100vh;
  padding-top: 5rem;
  animation: ${sr} 0.4s ease both;
  transition: background 0.3s;
`,Ga=Zt.div`
  padding: 4.5rem 3rem;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`,Xa=Zt.div`
  margin-bottom: 3rem;
`,Za=Zt.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`,eo=Zt.div`
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 4px;
  padding: 1.75rem;
  transition: all 0.3s;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 0;
    background: var(--accent);
    transition: height 0.3s;
  }

  &:hover {
    background: var(--surface-soft);
    transform: translateY(-4px);
    border-color: var(--accent);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);

    &::before {
      height: 100%;
    }
  }

  ${e=>{let{$internal:t}=e;return t&&Jt`
      opacity: 0.8;
    `}}
`,to=Zt.p`
  font-family: var(--mono);
  font-size: 0.68rem;
  color: var(--ink-soft);
  letter-spacing: 0.12em;
  margin-bottom: 1.25rem;
  opacity: 0.5;
`,no=Zt.h3`
  font-family: var(--serif);
  font-size: 1.3rem;
  color: var(--ink);
  margin-bottom: 0.65rem;
  line-height: 1.2;
`,ro=Zt.p`
  font-size: 0.88rem;
  color: var(--ink-soft);
  font-weight: 300;
  line-height: 1.7;
  margin-bottom: 1.25rem;
`,ao=Zt.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
`,oo=Zt.span`
  font-family: var(--mono);
  font-size: 0.65rem;
  padding: 0.22rem 0.55rem;
  border: 1px solid var(--line);
  border-radius: 2px;
  color: var(--ink-soft);
`,io=Zt.p`
  font-family: var(--mono);
  font-size: 0.63rem;
  color: var(--ink-soft);
  opacity: 0.4;
  margin-top: 1.1rem;
  transition: all 0.2s;

  ${eo}:hover & {
    color: var(--accent);
    opacity: 1;
  }
`,lo=Zt.span`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-family: var(--mono);
  font-size: 0.58rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ink-soft);
  opacity: 0.4;
  margin-top: 1.1rem;
`,so=tn`
  0%   { background-position: -400px 0; }
  100% { background-position: 400px 0; }
`,uo=Zt.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background: rgba(10, 8, 7, 0.88);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  opacity: ${e=>{let{$open:t}=e;return t?1:0}};
  pointer-events: ${e=>{let{$open:t}=e;return t?"all":"none"}};
  transition: opacity 0.3s;

  @media (max-width: 768px) {
    align-items: flex-end;
    padding: 0;
  }
`,co=Zt.div`
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 8px;
  width: 100%;
  max-width: ${e=>{let{$wide:t}=e;return t?"940px":"580px"}};
  transform: ${e=>{let{$open:t}=e;return t?"translateY(0) scale(1)":"translateY(24px) scale(0.97)"}};
  transition: transform 0.3s, background 0.3s, max-width 0.3s;
  overflow: hidden;

  @media (max-width: 768px) {
    max-width: 100%;
    border-radius: 12px 12px 0 0;
    max-height: 92vh;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
`,fo=Zt.div`
  padding: 1.5rem 1.75rem 1.1rem;
  border-bottom: 1px solid var(--line);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
`,po=Zt.p`
  font-family: var(--mono);
  font-size: 0.66rem;
  color: var(--accent);
  letter-spacing: 0.15em;
  margin-bottom: 0.35rem;
`,mo=Zt.h2`
  font-family: var(--serif);
  font-size: 1.45rem;
  color: var(--ink);
  line-height: 1.15;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`,ho=Zt.button`
  background: var(--surface-soft);
  border: 1px solid var(--line);
  border-radius: 50%;
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--ink-soft);
  flex-shrink: 0;
  transition: all 0.2s;

  &:hover {
    border-color: var(--accent);
    color: var(--accent);
  }
`,go=Zt.div`
  display: grid;
  grid-template-columns: ${e=>{let{$hasPreview:t}=e;return t?"1fr 1.1fr":"1fr"}};
  gap: 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,vo=Zt.div`
  padding: 1.5rem 1.75rem;
  border-right: ${e=>{let{$hasPreview:t}=e;return t?"1px solid var(--line)":"none"}};

  @media (max-width: 768px) {
    border-right: none;
    border-bottom: 1px solid var(--line);
    padding: 1.25rem;
  }
`,bo=Zt.p`
  font-size: 0.9rem;
  color: var(--ink-soft);
  font-weight: 300;
  line-height: 1.8;
  margin-bottom: 1.5rem;
`,yo=Zt.p`
  font-family: var(--mono);
  font-size: 0.64rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-soft);
  opacity: 0.55;
  margin-bottom: 0.6rem;
`,xo=Zt.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`,ko=Zt.span`
  font-family: var(--mono);
  font-size: 0.68rem;
  padding: 0.26rem 0.65rem;
  border: 1px solid var(--accent);
  border-radius: 2px;
  color: var(--accent);
  opacity: 0.7;
`,wo=Zt.div`
  padding: 1.5rem 1.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--surface-soft);

  @media (max-width: 768px) {
    padding: 1.25rem;
    order: -1;
  }
`,So=Zt.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,Eo=Zt.div`
  width: 100%;
  background: #0e0b09;
  border: 2px solid var(--line);
  border-radius: 8px 8px 4px 4px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
`,_o=Zt.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  background: #1a1714;
  border-bottom: 1px solid #2a2522;
`,Co=Zt.div`
  display: flex;
  gap: 0.3rem;
  flex-shrink: 0;

  span {
    display: block;
    width: 7px;
    height: 7px;
    border-radius: 50%;
  }

  span:nth-child(1) { background: #ff5f57; }
  span:nth-child(2) { background: #febc2e; }
  span:nth-child(3) { background: #28c840; }
`,jo=Zt.span`
  font-family: var(--mono);
  font-size: 0.6rem;
  color: rgba(245, 240, 234, 0.3);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`,Po=Zt.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  /* height é definido por inline style no componente (calculado pela escala) */
`,Ao=Zt.div`
  width: 32px;
  height: 20px;
  background: var(--line);
  clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
`,zo=Zt.div`
  width: 80px;
  height: 6px;
  background: var(--line);
  border-radius: 3px;
`,To=Zt.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    #1a1714 25%,
    #2a2522 50%,
    #1a1714 75%
  );
  background-size: 800px 100%;
  animation: ${so} 1.4s infinite linear;
`,Io=Zt.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 0.75rem;
  background: #1a1714;
`,Lo=Zt.a`
  font-family: var(--mono);
  font-size: 0.75rem;
  color: var(--accent);
  text-decoration: none;
  border: 1px solid var(--accent);
  padding: 0.5rem 1rem;
  border-radius: 2px;
  transition: background 0.2s;

  &:hover {
    background: var(--accent);
    color: white;
  }
`,Ro=Zt.p`
  font-family: var(--mono);
  font-size: 0.65rem;
  color: rgba(245, 240, 234, 0.3);
`,No=Zt.div`
  padding: 1rem 1.75rem 1.5rem;
  display: flex;
  gap: 0.65rem;
  flex-wrap: wrap;
  border-top: 1px solid var(--line);

  @media (max-width: 768px) {
    padding: 1rem 1.25rem 1.5rem;
  }
`,Do=Zt.a`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.65rem 1.3rem;
  font-family: var(--mono);
  font-size: 0.75rem;
  text-decoration: none;
  border-radius: 2px;
  transition: all 0.2s;
  cursor: pointer;

  ${e=>{let{$ghost:t}=e;return t?"\n    border: 1px solid var(--line);\n    color: var(--ink-soft);\n    &:hover { border-color: var(--accent); color: var(--accent); transform: translateY(-2px); }\n  ":"\n    background: var(--accent);\n    color: white;\n    &:hover { opacity: 0.85; transform: translateY(-2px); }\n  "}}
`,Mo=Zt.span`
  font-family: var(--mono);
  font-size: 0.73rem;
  color: var(--ink-soft);
  opacity: 0.5;
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;function Oo(e){let{project:t,onClose:n}=e;const a=!!t,i=!(null===t||void 0===t||!t.link),l=(0,r.useRef)(null),s=(0,r.useRef)(null),[u,c]=(0,r.useState)(!1),[d,f]=(0,r.useState)(!1),[p,m]=(0,r.useState)(.3);(0,r.useEffect)(()=>{c(!1),f(!1)},[null===t||void 0===t?void 0:t.num]),(0,r.useLayoutEffect)(()=>{if(!s.current||!i)return;const e=()=>{var e;const t=null===(e=s.current)||void 0===e?void 0:e.offsetWidth;t&&m(t/1280)};e();const t=new ResizeObserver(e);return t.observe(s.current),()=>t.disconnect()},[i,a]),(0,r.useEffect)(()=>{const e=e=>{"Escape"===e.key&&n()};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[n]),(0,r.useEffect)(()=>(a?(document.body.style.overflow="hidden",document.body.style.position="fixed",document.body.style.width="100%"):(document.body.style.overflow="",document.body.style.position="",document.body.style.width=""),()=>{document.body.style.overflow="",document.body.style.position="",document.body.style.width=""}),[a]);const h=Math.round(800*p),g=(0,o.jsx)(uo,{$open:a,onClick:e=>{e.target===l.current&&n()},ref:l,children:(0,o.jsx)(co,{$open:a,$wide:i,children:t&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(fo,{children:[(0,o.jsxs)("div",{children:[(0,o.jsx)(po,{children:t.num}),(0,o.jsx)(mo,{children:t.title})]}),(0,o.jsx)(ho,{onClick:n,"aria-label":"Fechar",children:(0,o.jsx)(Cn,{})})]}),(0,o.jsxs)(go,{$hasPreview:i,children:[(0,o.jsxs)(vo,{$hasPreview:i,children:[(0,o.jsx)(bo,{children:t.desc}),(0,o.jsx)(yo,{children:"tecnologias"}),(0,o.jsx)(xo,{children:t.stack.map(e=>(0,o.jsx)(ko,{children:e},e))})]}),i&&(0,o.jsx)(wo,{children:(0,o.jsxs)(So,{children:[(0,o.jsxs)(Eo,{children:[(0,o.jsxs)(_o,{children:[(0,o.jsxs)(Co,{children:[(0,o.jsx)("span",{}),(0,o.jsx)("span",{}),(0,o.jsx)("span",{})]}),(0,o.jsx)(jo,{children:t.link.replace("https://","")})]}),(0,o.jsx)(Po,{ref:s,style:{height:h>0?`${h}px`:"220px"},children:d?(0,o.jsxs)(Io,{children:[(0,o.jsx)(Ro,{children:"preview n\xe3o dispon\xedvel"}),(0,o.jsx)(Lo,{href:t.link,target:"_blank",rel:"noreferrer",children:"\u2197 abrir projeto"})]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("iframe",{src:t.link,sandbox:"allow-scripts allow-same-origin",loading:"lazy",title:`Preview: ${t.title}`,onLoad:()=>c(!0),onError:()=>f(!0),style:{position:"absolute",top:0,left:0,width:"1280px",height:"800px",border:"none",transform:`scale(${p})`,transformOrigin:"top left",pointerEvents:"none",opacity:u?1:0,transition:"opacity 0.4s"}}),!u&&(0,o.jsx)(To,{})]})})]}),(0,o.jsx)(Ao,{}),(0,o.jsx)(zo,{})]})})]}),(0,o.jsxs)(No,{children:[t.link&&(0,o.jsxs)(Do,{href:t.link,target:"_blank",rel:"noreferrer",children:[(0,o.jsx)(_n,{})," Ver projeto ao vivo"]}),t.github&&(0,o.jsxs)(Do,{href:t.github,target:"_blank",rel:"noreferrer",$ghost:!0,children:[(0,o.jsx)(xn,{})," Ver c\xf3digo"]}),t.figma&&(0,o.jsxs)(Do,{href:t.figma,target:"_blank",rel:"noreferrer",$ghost:!0,children:[(0,o.jsx)(Pn,{})," Ver no Figma"]}),!t.link&&!t.github&&(0,o.jsxs)(Mo,{children:[(0,o.jsx)(jn,{})," projeto interno \xb7 link n\xe3o dispon\xedvel"]})]})]})})});return lr.createPortal(g,document.body)}const Fo=[{num:"001",title:"Calculadora iOS Clone",shortDesc:"Calculadora com interface inspirada no iOS, suporte a teclado e hist\xf3rico de express\xf5es.",desc:"Desenvolvimento de uma aplica\xe7\xe3o web com foco em fidelidade visual (UI/UX) e robustez l\xf3gica. O projeto resolve desafios comuns de aritm\xe9tica computacional, como o tratamento de erros de ponto flutuante e a gest\xe3o de estados para encadeamento de opera\xe7\xf5es. Implementei suporte completo a atalhos de teclado e hist\xf3rico din\xe2mico, priorizando a acessibilidade e a experi\xeancia do usu\xe1rio.",stack:["JavaScript","HTML","CSS"],link:"https://doraalves.github.io/calculadora/",github:"https://github.com/doraalves/calculadora"},{num:"002",title:"Jogo de Estoura Bal\xf5es",shortDesc:"Jogo interativo com dificuldade crescente, sistema de combos e cursor personalizado.",desc:"Projeto desenvolvido em JavaScript Vanilla para explorar a manipula\xe7\xe3o direta do DOM e l\xf3gica de colis\xe3o sem depend\xeancia de frameworks. Foquei na cria\xe7\xe3o de uma curva de aprendizado progressiva atrav\xe9s de algoritmos de velocidade vari\xe1vel e sistemas de pontua\xe7\xe3o por combo, garantindo uma interface fluida com anima\xe7\xf5es em SVG e feedback visual instant\xe2neo.",stack:["JavaScript","HTML","CSS"],link:"https://doraalves.github.io/baloes/",github:"https://github.com/doraalves/baloes"},{num:"003",title:"Cron\xf4metro",shortDesc:"Cron\xf4metro com marca\xe7\xe3o de voltas, anel SVG animado e destaque da melhor e pior volta.",desc:"Cron\xf4metro avan\xe7ado que utiliza anima\xe7\xf5es sincronizadas via SVG para representa\xe7\xe3o visual do tempo. O diferencial t\xe9cnico est\xe1 no algoritmo de an\xe1lise de performance, que identifica e destaca automaticamente os melhores e piores tempos de volta. Desenvolvido com foco em arquitetura limpa, utilizando atalhos de teclado para otimizar o fluxo de trabalho do usu\xe1rio. Suporta atalhos de teclado (Espa\xe7o, L, R) para uso sem mouse.",stack:["JavaScript","HTML","CSS"],link:"https://doraalves.github.io/cronometro/",github:"https://github.com/doraalves/cronometro"},{num:"004",title:"BlackVis",shortDesc:"Visualiza\xe7\xe3o interativa em grafo de for\xe7a de designers negros brasileiros, com filtros por \xe1rea e nome.",desc:"Visualiza\xe7\xe3o de dados constru\xedda com D3.js v7 como ferramenta de visibilidade para designers negros brasileiros. Exibe um grafo de for\xe7a onde n\xf3s representam designers, t\xe9cnicas e \xe1reas do design, conectados por afinidade. Filtros por ano de nascimento, \xe1rea ou nome permitem explora\xe7\xe3o n\xe3o-linear dos dados. Projeto com prop\xf3sito social e t\xe9cnica de visualiza\xe7\xe3o avan\xe7ada.",stack:["D3.js","JavaScript","HTML","SCSS"],link:"https://blackvisesdi.github.io/BlackVis/",github:"https://github.com/blackvisesdi/BlackVis"},{num:"005",title:"Dashboard de Opera\xe7\xf5es (Real-time)",shortDesc:"Dashboard em tempo real para gest\xe3o de equipes na Americanas S.A., com status e setor de cada colaborador.",desc:"Dashboard interno desenvolvido na Americanas S.A. para centralizar status, setor e cargo de cada colaborador em tempo real. Substituiu comunica\xe7\xf5es dispersas por uma vis\xe3o \xfanica e atualizada, melhorando a gest\xe3o e resposta das lideran\xe7as. Desenvolvido com Vue.js no front e Django + WebSockets no back-end, containerizado com Docker.",stack:["Vue.js","Django","Python","WebSockets","HTML/SCSS","Docker"],link:null,github:null},{num:"006",title:"Hub de Inova\xe7\xe3o & KPIs",shortDesc:"Plataforma de monitoramento de projetos e m\xe9tricas de vendas para a equipe de Inova\xe7\xe3o da Americanas.",desc:"Aplica\xe7\xe3o de monitoramento desenvolvida para a equipe de Inova\xe7\xe3o da Americanas S.A. Consolidou dados de dezenas de projetos estrat\xe9gicos, an\xe1lise de resultados de vendas e m\xe9tricas de KPIs em uma \xfanica interface atualizada em tempo real. Desenvolvida com ReactJS, Node.js e integra\xe7\xe3o com APIs RESTful internas.",stack:["ReactJS","Node.js","Styled Components","API RESTful"],link:null,github:null},{num:"007",title:"Site Institucional MediaLAB",shortDesc:"Site institucional do laborat\xf3rio de m\xeddia da ESDI/UERJ, integrando identidade visual e arquitetura de conte\xfado.",desc:"Desenvolvimento completo do site institucional do MediaLAB da ESDI/UERJ. Respons\xe1vel pela arquitetura de informa\xe7\xe3o, implementa\xe7\xe3o da identidade visual no ambiente digital e publica\xe7\xe3o de projetos experimentais do laborat\xf3rio. Desenvolvido em WordPress com customiza\xe7\xf5es em HTML, CSS e JavaScript.",stack:["WordPress","HTML","CSS","JavaScript"],link:null,github:null},{num:"008",title:"Galeria Imersiva (Web 3.0 / VR)",shortDesc:"Instala\xe7\xf5es interativas e espa\xe7os imersivos em Meta Quest 3, explorando arte, design e tecnologia.",desc:"Prototipagem de instala\xe7\xf5es interativas e ambientes imersivos para a plataforma Spatial, exibidos em Meta Quest 3. Projeto experimental do MediaLAB/ESDI que explora a fronteira entre arte, design e tecnologia em espa\xe7os virtuais tridimensionais. Programa\xe7\xe3o criativa com p5.js integrada ao ambiente 3D.",stack:["Spatial","Meta Quest 3","JavaScript","p5.js","Figma"],link:"https://www.spatial.io/s/Media-Labs-1-0-Claro-6826039af8049f0d7678b6fe?share=1267569543253887910",figma:"https://www.figma.com/proto/p4XoK4HtQAH3xUZ6u7IRTW/MEDIALAB-UERJ-RIO2C-2025?page-id=0%253A1&node-id=1-3&viewport=116%252C0%252C0.7&t=fgPmz23wxGwTVIsS-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%253A3",github:null},{num:"009",title:"Core de Gerenciamento de Pedidos",shortDesc:"Front-end do sistema de pedidos do Americanas Mercado, com foco em performance e integra\xe7\xe3o com APIs de alto tr\xe1fego.",desc:"Implementa\xe7\xe3o front-end do sistema de gerenciamento de pedidos para o Americanas Mercado. Foco em performance, acessibilidade e usabilidade em um ambiente de alto volume de transa\xe7\xf5es. Componentiza\xe7\xe3o reutiliz\xe1vel com ReactJS e Styled Components, integra\xe7\xe3o com APIs RESTful internas e aten\xe7\xe3o a estados de loading, erro e sucesso.",stack:["ReactJS","Node.js","API RESTful","Styled Components"],link:null,github:null}];function $o(){const e=(new Date).getFullYear(),[t,n]=(0,r.useState)(null);return(0,o.jsxs)(Ja,{children:[(0,o.jsxs)(Ga,{children:[(0,o.jsxs)(Xa,{children:[(0,o.jsx)(cr,{children:"projetos"}),(0,o.jsxs)(dr,{children:["O que ",(0,o.jsx)("em",{children:"constru\xed"})]})]}),(0,o.jsx)(Za,{children:Fo.map(e=>(0,o.jsxs)(eo,{onClick:()=>n(e),$internal:!e.link&&!e.github,children:[(0,o.jsx)(to,{children:e.num}),(0,o.jsx)(no,{children:e.title}),(0,o.jsx)(ro,{children:e.shortDesc}),(0,o.jsx)(ao,{children:e.stack.slice(0,4).map(e=>(0,o.jsx)(oo,{children:e},e))}),e.link||e.github?(0,o.jsx)(io,{children:"\u2197 ver detalhes e preview"}):(0,o.jsx)(lo,{children:"\ud83d\udd12 projeto interno"})]},e.num))})]}),(0,o.jsxs)(fr,{children:[(0,o.jsxs)(pr,{children:["\xa9 ",e," Izadora Alves"]}),(0,o.jsx)(mr,{}),(0,o.jsx)(pr,{children:"feito com \u2665"})]}),(0,o.jsx)(Oo,{project:t,onClose:()=>n(null)})]})}class Uo{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Network Error";this.status=e,this.text=t}}const Bo={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:(()=>{if("undefined"!==typeof localStorage)return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}})()},Ho=e=>e?"string"===typeof e?{publicKey:e}:"[object Object]"===e.toString()?e:{}:{},Vo=async function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=await fetch(Bo.origin+e,{method:"POST",headers:n,body:t}),a=await r.text(),o=new Uo(r.status,a);if(r.ok)return o;throw o},Wo=(e,t,n)=>{if(!e||"string"!==typeof e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||"string"!==typeof t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n||"string"!==typeof n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},Yo=e=>e.webdriver||!e.languages||0===e.languages.length,Ko=()=>new Uo(451,"Unavailable For Headless Browser"),Qo=(e,t)=>{if((e=>!e.list?.length||!e.watchVariable)(e))return!1;((e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if("string"!==typeof t)throw"The BlockList watchVariable has to be a string"})(e.list,e.watchVariable);const n=(r=t,a=e.watchVariable,r instanceof FormData?r.get(a):r[a]);var r,a;return"string"===typeof n&&e.list.includes(n)},qo=()=>new Uo(403,"Forbidden"),Jo=async(e,t,n)=>{if(!t.throttle||!n)return!1;((e,t)=>{if("number"!==typeof e||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&"string"!==typeof t)throw"The LimitRate ID has to be a non-empty string"})(t.throttle,t.id);const r=t.id||e,a=await(async(e,t,n)=>{const r=Number(await n.get(e)||0);return t-Date.now()+r})(r,t.throttle,n);return a>0||(await n.set(r,Date.now().toString()),!1)},Go=()=>new Uo(429,"Too Many Requests"),Xo=async(e,t,n,r)=>{const a=Ho(r),o=a.publicKey||Bo.publicKey,i=a.blockHeadless||Bo.blockHeadless,l=Bo.storageProvider||a.storageProvider,s={...Bo.blockList,...a.blockList},u={...Bo.limitRate,...a.limitRate};if(i&&Yo(navigator))return Promise.reject(Ko());const c=(e=>"string"===typeof e?document.querySelector(e):e)(n);Wo(o,e,t),(e=>{if(!e||"FORM"!==e.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"})(c);const d=new FormData(c);return Qo(s,d)?Promise.reject(qo()):await Jo(location.pathname,u,l)?Promise.reject(Go()):(d.append("lib_version","4.4.1"),d.append("service_id",e),d.append("template_id",t),d.append("user_id",o),Vo("/api/v1.0/email/send-form",d))},Zo=Zt.div`
  background: var(--bg);
  min-height: 100vh;
  padding-top: 5rem;
  animation: ${sr} 0.4s ease both;
  transition: background 0.3s;
`,ei=Zt.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 4.5rem 3rem;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`,ti=Zt.div`
  margin-bottom: 3rem;
`,ni=Zt.p`
  font-family: var(--mono);
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.7rem;

  &::before {
    content: "";
    width: 1.5rem;
    height: 1px;
    background: var(--accent);
  }
`,ri=Zt.h2`
  font-family: var(--serif);
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  line-height: 1.1;
  color: var(--ink);

  em {
    font-style: italic;
    color: var(--accent);
  }
`,ai=Zt.div`
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`,oi=Zt.div``,ii=Zt.p`
  font-size: 1rem;
  color: var(--ink-soft);
  font-weight: 300;
  line-height: 1.8;
  margin-bottom: 2rem;
`,li=Zt.p`
  font-family: var(--mono);
  font-size: 0.66rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-soft);
  opacity: 0.55;
  margin-bottom: 0.75rem;
`,si=Zt.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
`,ui=Zt.span`
  font-family: var(--mono);
  font-size: 0.7rem;
  letter-spacing: 0.06em;
  padding: 0.35rem 0.85rem;
  border: 1px solid var(--line);
  border-radius: 20px;
  color: var(--ink-soft);
  background: var(--surface);
`,ci=Zt.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--mono);
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  color: var(--ink-soft);
  text-decoration: none;
  padding: 0.7rem 1.25rem;
  border: 1px solid var(--line);
  border-radius: 2px;
  transition: all 0.2s;
  margin-bottom: 2.5rem;

  &:hover {
    color: var(--accent);
    border-color: var(--accent);
    transform: translateY(-2px);
  }
`,di=Zt.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
`,fi=Zt.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--mono);
  font-size: 0.72rem;
  letter-spacing: 0.06em;
  color: var(--ink-soft);
  text-decoration: none;
  padding: 0.6rem 1rem;
  border: 1px solid var(--line);
  border-radius: 2px;
  transition: all 0.2s;

  &:hover {
    color: var(--accent);
    border-color: var(--accent);
    transform: translateY(-2px);
  }
`,pi=Zt.div`
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 6px;
  padding: 2rem;
  transition: background 0.3s, border-color 0.3s;
`,mi=Zt.p`
  font-family: var(--mono);
  font-size: 0.7rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-soft);
  opacity: 0.6;
  margin-bottom: 1.5rem;
`,hi=Zt.div`
  margin-bottom: 1rem;
`,gi=Zt.label`
  display: block;
  font-family: var(--mono);
  font-size: 0.68rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ink-soft);
  margin-bottom: 0.4rem;
`,vi=Zt.input`
  width: 100%;
  padding: 0.7rem 0.9rem;
  font-family: var(--sans);
  font-size: 0.9rem;
  color: var(--ink);
  background: var(--surface-soft);
  border: 1px solid var(--line);
  border-radius: 2px;
  outline: none;
  transition: border-color 0.2s, background 0.3s;

  &:focus { border-color: var(--accent); }
  &::placeholder { color: rgba(107, 100, 96, 0.5); }
  &:disabled { opacity: 0.6; }
`,bi=Zt.textarea`
  width: 100%;
  padding: 0.7rem 0.9rem;
  font-family: var(--sans);
  font-size: 0.9rem;
  color: var(--ink);
  background: var(--surface-soft);
  border: 1px solid var(--line);
  border-radius: 2px;
  outline: none;
  transition: border-color 0.2s, background 0.3s;
  resize: vertical;
  min-height: 120px;
  line-height: 1.6;

  &:focus { border-color: var(--accent); }
  &::placeholder { color: rgba(107, 100, 96, 0.5); }
  &:disabled { opacity: 0.6; }
`,yi=Zt.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.75rem;
  font-family: var(--mono);
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border-radius: 2px;
  cursor: pointer;
  border: none;
  background: var(--accent);
  color: white;
  transition: all 0.2s;
  width: 100%;
  justify-content: center;
  margin-top: 0.5rem;

  &:hover:not(:disabled) {
    background: #a01415;
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`,xi=Zt.p`
  font-family: var(--mono);
  font-size: 0.78rem;
  color: #3a7d44;
  text-align: center;
  margin-top: 0.85rem;
  letter-spacing: 0.04em;
`,ki=Zt.p`
  font-family: var(--mono);
  font-size: 0.78rem;
  color: var(--accent);
  text-align: center;
  margin-top: 0.85rem;
  letter-spacing: 0.04em;
`,wi=Zt.div`
  border-top: 1px solid var(--line);
  margin-top: 3rem;
  padding-top: 1.75rem;
  font-family: var(--mono);
  font-size: 0.7rem;
  color: var(--ink-soft);
  letter-spacing: 0.08em;
`,Si=["Freelance","Remoto","H\xedbrido","CLT"];function Ei(){const e=(0,r.useRef)(),[t,n]=(0,r.useState)({from_name:"",from_email:"",message:""}),[a,i]=(0,r.useState)("idle"),l=e=>n({...t,[e.target.name]:e.target.value}),s=t.from_name&&t.from_email&&t.message,u="sending"===a,c=(new Date).getFullYear();return(0,o.jsx)(Zo,{children:(0,o.jsxs)(ei,{children:[(0,o.jsxs)(ti,{children:[(0,o.jsx)(ni,{children:"contato"}),(0,o.jsxs)(ri,{children:["Vamos ",(0,o.jsx)("em",{children:"trabalhar juntos"}),"?"]})]}),(0,o.jsxs)(ai,{children:[(0,o.jsxs)(oi,{children:[(0,o.jsx)(ii,{children:"Estou aberta a novos projetos, freelas e oportunidades full-time. Se voc\xea tem um produto para construir ou uma equipe que precisa de refor\xe7o t\xe9cnico, me manda uma mensagem."}),(0,o.jsx)(li,{children:"dispon\xedvel para"}),(0,o.jsx)(si,{children:Si.map(e=>(0,o.jsx)(ui,{children:e},e))}),(0,o.jsxs)(ci,{href:"https://wa.me/5521982419979",target:"_blank",rel:"noreferrer",children:[(0,o.jsx)(Sn,{})," Chamar no WhatsApp"]}),(0,o.jsxs)(di,{children:[(0,o.jsxs)(fi,{href:"https://github.com/doraalves",target:"_blank",rel:"noreferrer",children:[(0,o.jsx)(xn,{})," GitHub"]}),(0,o.jsxs)(fi,{href:"https://www.linkedin.com/in/izadoraalves/",target:"_blank",rel:"noreferrer",children:[(0,o.jsx)(kn,{})," LinkedIn"]}),(0,o.jsxs)(fi,{href:"https://www.instagram.com/izadoraaalves",target:"_blank",rel:"noreferrer",children:[(0,o.jsx)(wn,{size:15})," Instagram"]})]})]}),(0,o.jsxs)(pi,{children:[(0,o.jsx)(mi,{children:"Enviar mensagem"}),(0,o.jsxs)("form",{ref:e,onSubmit:async t=>{if(t.preventDefault(),!u){i("sending");try{await Xo("service_lk5zmy8","template_tfx86s1",e.current,"oeHkI3XYftME2KOZ_"),i("success"),n({from_name:"",from_email:"",message:""}),setTimeout(()=>i("idle"),5e3)}catch{console.error("Falha ao enviar formul\xe1rio"),i("error"),setTimeout(()=>i("idle"),5e3)}}},children:[(0,o.jsxs)(hi,{children:[(0,o.jsx)(gi,{htmlFor:"from_name",children:"Nome"}),(0,o.jsx)(vi,{id:"from_name",name:"from_name",type:"text",placeholder:"Seu nome",value:t.from_name,onChange:l,disabled:u})]}),(0,o.jsxs)(hi,{children:[(0,o.jsx)(gi,{htmlFor:"from_email",children:"E-mail"}),(0,o.jsx)(vi,{id:"from_email",name:"from_email",type:"email",placeholder:"seu@email.com",value:t.from_email,onChange:l,disabled:u})]}),(0,o.jsxs)(hi,{children:[(0,o.jsx)(gi,{htmlFor:"message",children:"Deixe aqui sua mensagem:"}),(0,o.jsx)(bi,{id:"message",name:"message",placeholder:"Conte um pouco sobre o projeto ou oportunidade...",value:t.message,onChange:l,disabled:u})]}),(0,o.jsxs)(yi,{type:"submit",disabled:!s||u,children:[(0,o.jsx)(An,{}),u?"Enviando...":"Enviar mensagem"]}),"success"===a&&(0,o.jsx)(xi,{children:"\u2713 Mensagem enviada! Responderei em breve."}),"error"===a&&(0,o.jsx)(ki,{children:"\u2717 Erro ao enviar. Tente pelo WhatsApp."})]})]})]}),(0,o.jsxs)(wi,{children:["\xa9 ",c," Izadora Alves \xb7 S\xe3o Gon\xe7alo, RJ"]})]})})}function _i(){const[e,t]=(0,r.useState)("home"),n=e=>{t(e),window.scrollTo(0,0)};return(0,o.jsxs)(l,{children:[(0,o.jsx)(rn,{}),(0,o.jsx)(Ln,{}),(0,o.jsx)(In,{page:e,onNavigate:n}),"home"===e&&(0,o.jsx)(ir,{onNavigate:n}),"about"===e&&(0,o.jsx)(qa,{}),"projects"===e&&(0,o.jsx)($o,{}),"contact"===e&&(0,o.jsx)(Ei,{})]})}a.createRoot(document.getElementById("root")).render((0,o.jsx)(_i,{}))})();
//# sourceMappingURL=main.aeccde1d.js.map