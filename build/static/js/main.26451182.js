/*! For license information please see main.26451182.js.LICENSE.txt */
(()=>{"use strict";var e={730(e,t,n){var r=n(43),a=n(853);function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,l={};function s(e,t){u(e,t),u(e+"Capture",t)}function u(e,t){for(l[e]=t,e=0;e<t.length;e++)i.add(t[e])}var c=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},m={};function h(e,t,n,r,a,o,i){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){g[e]=new h(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];g[t]=new h(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){g[e]=new h(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){g[e]=new h(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){g[e]=new h(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){g[e]=new h(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){g[e]=new h(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){g[e]=new h(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){g[e]=new h(e,5,!1,e.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function y(e){return e[1].toUpperCase()}function b(e,t,n,r){var a=g.hasOwnProperty(t)?g[t]:null;(null!==a?0!==a.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,a,r)&&(n=null),r||null===a?function(e){return!!d.call(m,e)||!d.call(p,e)&&(f.test(e)?m[e]=!0:(p[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=null===n?3!==a.type&&"":n:(t=a.attributeName,r=a.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(a=a.type)||4===a&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(v,y);g[t]=new h(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(v,y);g[t]=new h(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(v,y);g[t]=new h(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){g[e]=new h(e,1,!1,e.toLowerCase(),null,!1,!1)}),g.xlinkHref=new h("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){g[e]=new h(e,1,!1,e.toLowerCase(),null,!0,!0)});var x=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,k=Symbol.for("react.element"),w=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),j=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),R=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var L=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var D=Symbol.iterator;function O(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=D&&e[D]||e["@@iterator"])?e:null}var I,A=Object.assign;function F(e){if(void 0===I)try{throw Error()}catch(ce){var t=ce.stack.trim().match(/\n( *(at )?)/);I=t&&t[1]||""}return"\n"+I+e}var M=!1;function $(e,t){if(!e||M)return"";M=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(fe){var r=fe}Reflect.construct(e,[],t)}else{try{t.call()}catch(fe){r=fe}e.call(t.prototype)}else{try{throw Error()}catch(fe){r=fe}e()}}catch(fe){if(fe&&r&&"string"===typeof fe.stack){for(var a=fe.stack.split("\n"),o=r.stack.split("\n"),i=a.length-1,l=o.length-1;1<=i&&0<=l&&a[i]!==o[l];)l--;for(;1<=i&&0<=l;i--,l--)if(a[i]!==o[l]){if(1!==i||1!==l)do{if(i--,0>--l||a[i]!==o[l]){var s="\n"+a[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}}while(1<=i&&0<=l);break}}}finally{M=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?F(e):""}function U(e){switch(e.tag){case 5:return F(e.type);case 16:return F("Lazy");case 13:return F("Suspense");case 19:return F("SuspenseList");case 0:case 2:case 15:return e=$(e.type,!1);case 11:return e=$(e.type.render,!1);case 1:return e=$(e.type,!0);default:return""}}function W(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case S:return"Fragment";case w:return"Portal";case C:return"Profiler";case E:return"StrictMode";case T:return"Suspense";case z:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case j:return(e.displayName||"Context")+".Consumer";case _:return(e._context.displayName||"Context")+".Provider";case P:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case N:return null!==(t=e.displayName||null)?t:W(e.type)||"Memo";case R:t=e._payload,e=e._init;try{return W(e(t))}catch(ce){}}return null}function H(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return W(t);case 8:return t===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function B(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function V(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function K(e){e._valueTracker||(e._valueTracker=function(e){var t=V(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var a=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){r=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function Q(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=V(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function q(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(xe){return e.body}}function Y(e,t){var n=t.checked;return A({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function G(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=B(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function J(e,t){null!=(t=t.checked)&&b(e,"checked",t,!1)}function X(e,t){J(e,t);var n=B(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,B(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function Z(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&q(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+B(n),t=null,a=0;a<e.length;a++){if(e[a].value===n)return e[a].selected=!0,void(r&&(e[a].defaultSelected=!0));null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(o(91));return A({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ae(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(o(92));if(te(n)){if(1<n.length)throw Error(o(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:B(n)}}function oe(e,t){var n=B(t.value),r=B(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function ie(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function le(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function se(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?le(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var de,pe=function(e){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n)})}:e}(function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((de=de||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=de.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ve(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var ye={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},be=["Webkit","ms","Moz","O"];function ke(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||ye.hasOwnProperty(e)&&ye[e]?(""+t).trim():t+"px"}function we(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),a=ke(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}Object.keys(ye).forEach(function(e){be.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ye[t]=ye[e]})});var Se=A({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ee(e,t){if(t){if(Se[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(o(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(o(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(o(62))}}function Ce(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _e=null;function je(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Pe=null,Te=null,ze=null;function Re(e){if(e=ja(e)){if("function"!==typeof Pe)throw Error(o(280));var t=e.stateNode;t&&(t=Ta(t),Pe(e.stateNode,e.type,t))}}function Le(e){Te?ze?ze.push(e):ze=[e]:Te=e}function Oe(){if(Te){var e=Te,t=ze;if(ze=Te=null,Re(e),t)for(e=0;e<t.length;e++)Re(t[e])}}function Ie(e,t){return e(t)}function Ae(){}var Fe=!1;function Me(e,t,n){if(Fe)return e(t,n);Fe=!0;try{return Ie(e,t,n)}finally{Fe=!1,(null!==Te||null!==ze)&&(Ae(),Oe())}}function $e(e,t){var n=e.stateNode;if(null===n)return null;var r=Ta(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(o(231,t,typeof n));return n}var Ue=!1;if(c)try{var We={};Object.defineProperty(We,"passive",{get:function(){Ue=!0}}),window.addEventListener("test",We,We),window.removeEventListener("test",We,We)}catch(ue){Ue=!1}function He(e,t,n,r,a,o,i,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Be=!1,Ve=null,Ke=!1,Qe=null,qe={onError:function(e){Be=!0,Ve=e}};function Ye(e,t,n,r,a,o,i,l,s){Be=!1,Ve=null,He.apply(qe,arguments)}function Ge(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function Je(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function Xe(e){if(Ge(e)!==e)throw Error(o(188))}function Ze(e){return e=function(e){var t=e.alternate;if(!t){if(null===(t=Ge(e)))throw Error(o(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(null===a)break;var i=a.alternate;if(null===i){if(null!==(r=a.return)){n=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return Xe(a),e;if(i===r)return Xe(a),t;i=i.sibling}throw Error(o(188))}if(n.return!==r.return)n=a,r=i;else{for(var l=!1,s=a.child;s;){if(s===n){l=!0,n=a,r=i;break}if(s===r){l=!0,r=a,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=a;break}if(s===r){l=!0,r=i,n=a;break}s=s.sibling}if(!l)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(3!==n.tag)throw Error(o(188));return n.stateNode.current===n?e:t}(e),null!==e?et(e):null}function et(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=et(e);if(null!==t)return t;e=e.sibling}return null}var tt=a.unstable_scheduleCallback,nt=a.unstable_cancelCallback,rt=a.unstable_shouldYield,at=a.unstable_requestPaint,ot=a.unstable_now,it=a.unstable_getCurrentPriorityLevel,lt=a.unstable_ImmediatePriority,st=a.unstable_UserBlockingPriority,ut=a.unstable_NormalPriority,ct=a.unstable_LowPriority,dt=a.unstable_IdlePriority,ft=null,pt=null;var mt=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(ht(e)/gt|0)|0},ht=Math.log,gt=Math.LN2;var vt=64,yt=4194304;function bt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function xt(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,a=e.suspendedLanes,o=e.pingedLanes,i=268435455&n;if(0!==i){var l=i&~a;0!==l?r=bt(l):0!==(o&=i)&&(r=bt(o))}else 0!==(i=n&~a)?r=bt(i):0!==o&&(r=bt(o));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&a)&&((a=r&-r)>=(o=t&-t)||16===a&&0!==(4194240&o)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)a=1<<(n=31-mt(t)),r|=e[n],t&=~a;return r}function kt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function wt(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function St(){var e=vt;return 0===(4194240&(vt<<=1))&&(vt=64),e}function Et(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ct(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-mt(t)]=n}function _t(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-mt(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var jt=0;function Pt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var Tt,zt,Nt,Rt,Lt,Dt=!1,Ot=[],It=null,At=null,Ft=null,Mt=new Map,$t=new Map,Ut=[],Wt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ht(e,t){switch(e){case"focusin":case"focusout":It=null;break;case"dragenter":case"dragleave":At=null;break;case"mouseover":case"mouseout":Ft=null;break;case"pointerover":case"pointerout":Mt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":$t.delete(t.pointerId)}}function Bt(e,t,n,r,a,o){return null===e||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[a]},null!==t&&(null!==(t=ja(t))&&zt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==a&&-1===t.indexOf(a)&&t.push(a),e)}function Vt(e){var t=_a(e.target);if(null!==t){var n=Ge(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=Je(n)))return e.blockedOn=t,void Lt(e.priority,function(){Nt(n)})}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Kt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=rn(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=ja(n))&&zt(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);_e=r,n.target.dispatchEvent(r),_e=null,t.shift()}return!0}function Qt(e,t,n){Kt(e)&&n.delete(t)}function qt(){Dt=!1,null!==It&&Kt(It)&&(It=null),null!==At&&Kt(At)&&(At=null),null!==Ft&&Kt(Ft)&&(Ft=null),Mt.forEach(Qt),$t.forEach(Qt)}function Yt(e,t){e.blockedOn===t&&(e.blockedOn=null,Dt||(Dt=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,qt)))}function Gt(e){function t(t){return Yt(t,e)}if(0<Ot.length){Yt(Ot[0],e);for(var n=1;n<Ot.length;n++){var r=Ot[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==It&&Yt(It,e),null!==At&&Yt(At,e),null!==Ft&&Yt(Ft,e),Mt.forEach(t),$t.forEach(t),n=0;n<Ut.length;n++)(r=Ut[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Ut.length&&null===(n=Ut[0]).blockedOn;)Vt(n),null===n.blockedOn&&Ut.shift()}var Jt=x.ReactCurrentBatchConfig,Xt=!0;function Zt(e,t,n,r){var a=jt,o=Jt.transition;Jt.transition=null;try{jt=1,tn(e,t,n,r)}finally{jt=a,Jt.transition=o}}function en(e,t,n,r){var a=jt,o=Jt.transition;Jt.transition=null;try{jt=4,tn(e,t,n,r)}finally{jt=a,Jt.transition=o}}function tn(e,t,n,r){if(Xt){var a=rn(e,t,n,r);if(null===a)Xr(e,t,r,nn,n),Ht(e,r);else if(function(e,t,n,r,a){switch(t){case"focusin":return It=Bt(It,e,t,n,r,a),!0;case"dragenter":return At=Bt(At,e,t,n,r,a),!0;case"mouseover":return Ft=Bt(Ft,e,t,n,r,a),!0;case"pointerover":var o=a.pointerId;return Mt.set(o,Bt(Mt.get(o)||null,e,t,n,r,a)),!0;case"gotpointercapture":return o=a.pointerId,$t.set(o,Bt($t.get(o)||null,e,t,n,r,a)),!0}return!1}(a,e,t,n,r))r.stopPropagation();else if(Ht(e,r),4&t&&-1<Wt.indexOf(e)){for(;null!==a;){var o=ja(a);if(null!==o&&Tt(o),null===(o=rn(e,t,n,r))&&Xr(e,t,r,nn,n),o===a)break;a=o}null!==a&&r.stopPropagation()}else Xr(e,t,r,null,n)}}var nn=null;function rn(e,t,n,r){if(nn=null,null!==(e=_a(e=je(r))))if(null===(t=Ge(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=Je(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return nn=e,null}function an(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(it()){case lt:return 1;case st:return 4;case ut:case ct:return 16;case dt:return 536870912;default:return 16}default:return 16}}var on=null,ln=null,sn=null;function un(){if(sn)return sn;var e,t,n=ln,r=n.length,a="value"in on?on.value:on.textContent,o=a.length;for(e=0;e<r&&n[e]===a[e];e++);var i=r-e;for(t=1;t<=i&&n[r-t]===a[o-t];t++);return sn=a.slice(e,1<t?1-t:void 0)}function cn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function dn(){return!0}function fn(){return!1}function pn(e){function t(t,n,r,a,o){for(var i in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=a,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(i)&&(t=e[i],this[i]=t?t(a):a[i]);return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:!1===a.returnValue)?dn:fn,this.isPropagationStopped=fn,this}return A(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=dn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=dn)},persist:function(){},isPersistent:dn}),t}var mn,hn,gn,vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yn=pn(vn),bn=A({},vn,{view:0,detail:0}),xn=pn(bn),kn=A({},bn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ln,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==gn&&(gn&&"mousemove"===e.type?(mn=e.screenX-gn.screenX,hn=e.screenY-gn.screenY):hn=mn=0,gn=e),mn)},movementY:function(e){return"movementY"in e?e.movementY:hn}}),wn=pn(kn),Sn=pn(A({},kn,{dataTransfer:0})),En=pn(A({},bn,{relatedTarget:0})),Cn=pn(A({},vn,{animationName:0,elapsedTime:0,pseudoElement:0})),_n=A({},vn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),jn=pn(_n),Pn=pn(A({},vn,{data:0})),Tn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Nn[e])&&!!t[e]}function Ln(){return Rn}var Dn=A({},bn,{key:function(e){if(e.key){var t=Tn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=cn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?zn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ln,charCode:function(e){return"keypress"===e.type?cn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?cn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),On=pn(Dn),In=pn(A({},kn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),An=pn(A({},bn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ln})),Fn=pn(A({},vn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Mn=A({},kn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),$n=pn(Mn),Un=[9,13,27,32],Wn=c&&"CompositionEvent"in window,Hn=null;c&&"documentMode"in document&&(Hn=document.documentMode);var Bn=c&&"TextEvent"in window&&!Hn,Vn=c&&(!Wn||Hn&&8<Hn&&11>=Hn),Kn=String.fromCharCode(32),Qn=!1;function qn(e,t){switch(e){case"keyup":return-1!==Un.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Gn=!1;var Jn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Jn[e.type]:"textarea"===t}function Zn(e,t,n,r){Le(r),0<(t=ea(t,"onChange")).length&&(n=new yn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var er=null,tr=null;function nr(e){Kr(e,0)}function rr(e){if(Q(Pa(e)))return e}function ar(e,t){if("change"===e)return t}var or=!1;if(c){var ir;if(c){var lr="oninput"in document;if(!lr){var sr=document.createElement("div");sr.setAttribute("oninput","return;"),lr="function"===typeof sr.oninput}ir=lr}else ir=!1;or=ir&&(!document.documentMode||9<document.documentMode)}function ur(){er&&(er.detachEvent("onpropertychange",cr),tr=er=null)}function cr(e){if("value"===e.propertyName&&rr(tr)){var t=[];Zn(t,tr,e,je(e)),Me(nr,t)}}function dr(e,t,n){"focusin"===e?(ur(),tr=n,(er=t).attachEvent("onpropertychange",cr)):"focusout"===e&&ur()}function fr(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return rr(tr)}function pr(e,t){if("click"===e)return rr(t)}function mr(e,t){if("input"===e||"change"===e)return rr(t)}var hr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function gr(e,t){if(hr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!d.call(t,a)||!hr(e[a],t[a]))return!1}return!0}function vr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function yr(e,t){var n,r=vr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=vr(r)}}function br(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?br(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function xr(){for(var e=window,t=q();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(he){n=!1}if(!n)break;t=q((e=t.contentWindow).document)}return t}function kr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function wr(e){var t=xr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&br(n.ownerDocument.documentElement,n)){if(null!==r&&kr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var a=n.textContent.length,o=Math.min(r.start,a);r=void 0===r.end?o:Math.min(r.end,a),!e.extend&&o>r&&(a=r,r=o,o=a),a=yr(n,o);var i=yr(n,r);a&&i&&(1!==e.rangeCount||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&((t=t.createRange()).setStart(a.node,a.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Sr=c&&"documentMode"in document&&11>=document.documentMode,Er=null,Cr=null,_r=null,jr=!1;function Pr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;jr||null==Er||Er!==q(r)||("selectionStart"in(r=Er)&&kr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},_r&&gr(_r,r)||(_r=r,0<(r=ea(Cr,"onSelect")).length&&(t=new yn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Er)))}function Tr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var zr={animationend:Tr("Animation","AnimationEnd"),animationiteration:Tr("Animation","AnimationIteration"),animationstart:Tr("Animation","AnimationStart"),transitionend:Tr("Transition","TransitionEnd")},Nr={},Rr={};function Lr(e){if(Nr[e])return Nr[e];if(!zr[e])return e;var t,n=zr[e];for(t in n)if(n.hasOwnProperty(t)&&t in Rr)return Nr[e]=n[t];return e}c&&(Rr=document.createElement("div").style,"AnimationEvent"in window||(delete zr.animationend.animation,delete zr.animationiteration.animation,delete zr.animationstart.animation),"TransitionEvent"in window||delete zr.transitionend.transition);var Dr=Lr("animationend"),Or=Lr("animationiteration"),Ir=Lr("animationstart"),Ar=Lr("transitionend"),Fr=new Map,Mr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $r(e,t){Fr.set(e,t),s(t,[e])}for(var Ur=0;Ur<Mr.length;Ur++){var Wr=Mr[Ur];$r(Wr.toLowerCase(),"on"+(Wr[0].toUpperCase()+Wr.slice(1)))}$r(Dr,"onAnimationEnd"),$r(Or,"onAnimationIteration"),$r(Ir,"onAnimationStart"),$r("dblclick","onDoubleClick"),$r("focusin","onFocus"),$r("focusout","onBlur"),$r(Ar,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),s("onBeforeInput",["compositionend","keypress","textInput","paste"]),s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Br=new Set("cancel close invalid load scroll toggle".split(" ").concat(Hr));function Vr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,a,i,l,s,u){if(Ye.apply(this,arguments),Be){if(!Be)throw Error(o(198));var c=Ve;Be=!1,Ve=null,Ke||(Ke=!0,Qe=c)}}(r,t,void 0,e),e.currentTarget=null}function Kr(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var l=r[i],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==o&&a.isPropagationStopped())break e;Vr(a,l,u),o=s}else for(i=0;i<r.length;i++){if(s=(l=r[i]).instance,u=l.currentTarget,l=l.listener,s!==o&&a.isPropagationStopped())break e;Vr(a,l,u),o=s}}}if(Ke)throw e=Qe,Ke=!1,Qe=null,e}function Qr(e,t){var n=t[Sa];void 0===n&&(n=t[Sa]=new Set);var r=e+"__bubble";n.has(r)||(Jr(t,e,2,!1),n.add(r))}function qr(e,t,n){var r=0;t&&(r|=4),Jr(n,e,r,t)}var Yr="_reactListening"+Math.random().toString(36).slice(2);function Gr(e){if(!e[Yr]){e[Yr]=!0,i.forEach(function(t){"selectionchange"!==t&&(Br.has(t)||qr(t,!1,e),qr(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Yr]||(t[Yr]=!0,qr("selectionchange",!1,t))}}function Jr(e,t,n,r){switch(an(t)){case 1:var a=Zt;break;case 4:a=en;break;default:a=tn}n=a.bind(null,t,n,e),a=void 0,!Ue||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(a=!0),r?void 0!==a?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):void 0!==a?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Xr(e,t,n,r,a){var o=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var i=r.tag;if(3===i||4===i){var l=r.stateNode.containerInfo;if(l===a||8===l.nodeType&&l.parentNode===a)break;if(4===i)for(i=r.return;null!==i;){var s=i.tag;if((3===s||4===s)&&((s=i.stateNode.containerInfo)===a||8===s.nodeType&&s.parentNode===a))return;i=i.return}for(;null!==l;){if(null===(i=_a(l)))return;if(5===(s=i.tag)||6===s){r=o=i;continue e}l=l.parentNode}}r=r.return}Me(function(){var r=o,a=je(n),i=[];e:{var l=Fr.get(e);if(void 0!==l){var s=yn,u=e;switch(e){case"keypress":if(0===cn(n))break e;case"keydown":case"keyup":s=On;break;case"focusin":u="focus",s=En;break;case"focusout":u="blur",s=En;break;case"beforeblur":case"afterblur":s=En;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":s=wn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=Sn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=An;break;case Dr:case Or:case Ir:s=Cn;break;case Ar:s=Fn;break;case"scroll":s=xn;break;case"wheel":s=$n;break;case"copy":case"cut":case"paste":s=jn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=In}var c=0!==(4&t),d=!c&&"scroll"===e,f=c?null!==l?l+"Capture":null:l;c=[];for(var p,m=r;null!==m;){var h=(p=m).stateNode;if(5===p.tag&&null!==h&&(p=h,null!==f&&(null!=(h=$e(m,f))&&c.push(Zr(m,h,p)))),d)break;m=m.return}0<c.length&&(l=new s(l,u,null,n,a),i.push({event:l,listeners:c}))}}if(0===(7&t)){if(s="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||n===_e||!(u=n.relatedTarget||n.fromElement)||!_a(u)&&!u[wa])&&(s||l)&&(l=a.window===a?a:(l=a.ownerDocument)?l.defaultView||l.parentWindow:window,s?(s=r,null!==(u=(u=n.relatedTarget||n.toElement)?_a(u):null)&&(u!==(d=Ge(u))||5!==u.tag&&6!==u.tag)&&(u=null)):(s=null,u=r),s!==u)){if(c=wn,h="onMouseLeave",f="onMouseEnter",m="mouse","pointerout"!==e&&"pointerover"!==e||(c=In,h="onPointerLeave",f="onPointerEnter",m="pointer"),d=null==s?l:Pa(s),p=null==u?l:Pa(u),(l=new c(h,m+"leave",s,n,a)).target=d,l.relatedTarget=p,h=null,_a(a)===r&&((c=new c(f,m+"enter",u,n,a)).target=p,c.relatedTarget=d,h=c),d=h,s&&u)e:{for(f=u,m=0,p=c=s;p;p=ta(p))m++;for(p=0,h=f;h;h=ta(h))p++;for(;0<m-p;)c=ta(c),m--;for(;0<p-m;)f=ta(f),p--;for(;m--;){if(c===f||null!==f&&c===f.alternate)break e;c=ta(c),f=ta(f)}c=null}else c=null;null!==s&&na(i,l,s,c,!1),null!==u&&null!==d&&na(i,d,u,c,!0)}if("select"===(s=(l=r?Pa(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===s&&"file"===l.type)var g=ar;else if(Xn(l))if(or)g=mr;else{g=fr;var v=dr}else(s=l.nodeName)&&"input"===s.toLowerCase()&&("checkbox"===l.type||"radio"===l.type)&&(g=pr);switch(g&&(g=g(e,r))?Zn(i,g,n,a):(v&&v(e,l,r),"focusout"===e&&(v=l._wrapperState)&&v.controlled&&"number"===l.type&&ee(l,"number",l.value)),v=r?Pa(r):window,e){case"focusin":(Xn(v)||"true"===v.contentEditable)&&(Er=v,Cr=r,_r=null);break;case"focusout":_r=Cr=Er=null;break;case"mousedown":jr=!0;break;case"contextmenu":case"mouseup":case"dragend":jr=!1,Pr(i,n,a);break;case"selectionchange":if(Sr)break;case"keydown":case"keyup":Pr(i,n,a)}var y;if(Wn)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Gn?qn(e,n)&&(b="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(b="onCompositionStart");b&&(Vn&&"ko"!==n.locale&&(Gn||"onCompositionStart"!==b?"onCompositionEnd"===b&&Gn&&(y=un()):(ln="value"in(on=a)?on.value:on.textContent,Gn=!0)),0<(v=ea(r,b)).length&&(b=new Pn(b,e,null,n,a),i.push({event:b,listeners:v}),y?b.data=y:null!==(y=Yn(n))&&(b.data=y))),(y=Bn?function(e,t){switch(e){case"compositionend":return Yn(t);case"keypress":return 32!==t.which?null:(Qn=!0,Kn);case"textInput":return(e=t.data)===Kn&&Qn?null:e;default:return null}}(e,n):function(e,t){if(Gn)return"compositionend"===e||!Wn&&qn(e,t)?(e=un(),sn=ln=on=null,Gn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Vn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=ea(r,"onBeforeInput")).length&&(a=new Pn("onBeforeInput","beforeinput",null,n,a),i.push({event:a,listeners:r}),a.data=y))}Kr(i,t)})}function Zr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ea(e,t){for(var n=t+"Capture",r=[];null!==e;){var a=e,o=a.stateNode;5===a.tag&&null!==o&&(a=o,null!=(o=$e(e,n))&&r.unshift(Zr(e,o,a)),null!=(o=$e(e,t))&&r.push(Zr(e,o,a))),e=e.return}return r}function ta(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function na(e,t,n,r,a){for(var o=t._reactName,i=[];null!==n&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(null!==s&&s===r)break;5===l.tag&&null!==u&&(l=u,a?null!=(s=$e(n,o))&&i.unshift(Zr(n,s,l)):a||null!=(s=$e(n,o))&&i.push(Zr(n,s,l))),n=n.return}0!==i.length&&e.push({event:t,listeners:i})}var ra=/\r\n?/g,aa=/\u0000|\uFFFD/g;function oa(e){return("string"===typeof e?e:""+e).replace(ra,"\n").replace(aa,"")}function ia(e,t,n){if(t=oa(t),oa(e)!==t&&n)throw Error(o(425))}function la(){}var sa=null,ua=null;function ca(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var da="function"===typeof setTimeout?setTimeout:void 0,fa="function"===typeof clearTimeout?clearTimeout:void 0,pa="function"===typeof Promise?Promise:void 0,ma="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof pa?function(e){return pa.resolve(null).then(e).catch(ha)}:da;function ha(e){setTimeout(function(){throw e})}function ga(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&8===a.nodeType)if("/$"===(n=a.data)){if(0===r)return e.removeChild(a),void Gt(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=a}while(n);Gt(t)}function va(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function ya(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var ba=Math.random().toString(36).slice(2),xa="__reactFiber$"+ba,ka="__reactProps$"+ba,wa="__reactContainer$"+ba,Sa="__reactEvents$"+ba,Ea="__reactListeners$"+ba,Ca="__reactHandles$"+ba;function _a(e){var t=e[xa];if(t)return t;for(var n=e.parentNode;n;){if(t=n[wa]||n[xa]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=ya(e);null!==e;){if(n=e[xa])return n;e=ya(e)}return t}n=(e=n).parentNode}return null}function ja(e){return!(e=e[xa]||e[wa])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function Pa(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(o(33))}function Ta(e){return e[ka]||null}var za=[],Na=-1;function Ra(e){return{current:e}}function La(e){0>Na||(e.current=za[Na],za[Na]=null,Na--)}function Da(e,t){Na++,za[Na]=e.current,e.current=t}var Oa={},Ia=Ra(Oa),Aa=Ra(!1),Fa=Oa;function Ma(e,t){var n=e.type.contextTypes;if(!n)return Oa;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a,o={};for(a in n)o[a]=t[a];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function $a(e){return null!==(e=e.childContextTypes)&&void 0!==e}function Ua(){La(Aa),La(Ia)}function Wa(e,t,n){if(Ia.current!==Oa)throw Error(o(168));Da(Ia,t),Da(Aa,n)}function Ha(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var a in r=r.getChildContext())if(!(a in t))throw Error(o(108,H(e)||"Unknown",a));return A({},n,r)}function Ba(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Oa,Fa=Ia.current,Da(Ia,e),Da(Aa,Aa.current),!0}function Va(e,t,n){var r=e.stateNode;if(!r)throw Error(o(169));n?(e=Ha(e,t,Fa),r.__reactInternalMemoizedMergedChildContext=e,La(Aa),La(Ia),Da(Ia,e)):La(Aa),Da(Aa,n)}var Ka=null,Qa=!1,qa=!1;function Ya(e){null===Ka?Ka=[e]:Ka.push(e)}function Ga(){if(!qa&&null!==Ka){qa=!0;var e=0,t=jt;try{var n=Ka;for(jt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Ka=null,Qa=!1}catch(a){throw null!==Ka&&(Ka=Ka.slice(e+1)),tt(lt,Ga),a}finally{jt=t,qa=!1}}return null}var Ja=[],Xa=0,Za=null,eo=0,to=[],no=0,ro=null,ao=1,oo="";function io(e,t){Ja[Xa++]=eo,Ja[Xa++]=Za,Za=e,eo=t}function lo(e,t,n){to[no++]=ao,to[no++]=oo,to[no++]=ro,ro=e;var r=ao;e=oo;var a=32-mt(r)-1;r&=~(1<<a),n+=1;var o=32-mt(t)+a;if(30<o){var i=a-a%5;o=(r&(1<<i)-1).toString(32),r>>=i,a-=i,ao=1<<32-mt(t)+a|n<<a|r,oo=o+e}else ao=1<<o|n<<a|r,oo=e}function so(e){null!==e.return&&(io(e,1),lo(e,1,0))}function uo(e){for(;e===Za;)Za=Ja[--Xa],Ja[Xa]=null,eo=Ja[--Xa],Ja[Xa]=null;for(;e===ro;)ro=to[--no],to[no]=null,oo=to[--no],to[no]=null,ao=to[--no],to[no]=null}var co=null,fo=null,po=!1,mo=null;function ho(e,t){var n=Fu(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function go(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,co=e,fo=va(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,co=e,fo=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==ro?{id:ao,overflow:oo}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Fu(18,null,null,0)).stateNode=t,n.return=e,e.child=n,co=e,fo=null,!0);default:return!1}}function vo(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function yo(e){if(po){var t=fo;if(t){var n=t;if(!go(e,t)){if(vo(e))throw Error(o(418));t=va(n.nextSibling);var r=co;t&&go(e,t)?ho(r,n):(e.flags=-4097&e.flags|2,po=!1,co=e)}}else{if(vo(e))throw Error(o(418));e.flags=-4097&e.flags|2,po=!1,co=e}}}function bo(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;co=e}function xo(e){if(e!==co)return!1;if(!po)return bo(e),po=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!ca(e.type,e.memoizedProps)),t&&(t=fo)){if(vo(e))throw ko(),Error(o(418));for(;t;)ho(e,t),t=va(t.nextSibling)}if(bo(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){fo=va(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}fo=null}}else fo=co?va(e.stateNode.nextSibling):null;return!0}function ko(){for(var e=fo;e;)e=va(e.nextSibling)}function wo(){fo=co=null,po=!1}function So(e){null===mo?mo=[e]:mo.push(e)}var Eo=x.ReactCurrentBatchConfig;function Co(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(o(309));var r=n.stateNode}if(!r)throw Error(o(147,e));var a=r,i=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===i?t.ref:(t=function(e){var t=a.refs;null===e?delete t[i]:t[i]=e},t._stringRef=i,t)}if("string"!==typeof e)throw Error(o(284));if(!n._owner)throw Error(o(290,e))}return e}function _o(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function jo(e){return(0,e._init)(e._payload)}function Po(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function a(e,t){return(e=$u(e,t)).index=0,e.sibling=null,e}function i(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function l(t){return e&&null===t.alternate&&(t.flags|=2),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=Bu(n,e.mode,r)).return=e,t):((t=a(t,n)).return=e,t)}function u(e,t,n,r){var o=n.type;return o===S?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===o||"object"===typeof o&&null!==o&&o.$$typeof===R&&jo(o)===t.type)?((r=a(t,n.props)).ref=Co(e,t,n),r.return=e,r):((r=Uu(n.type,n.key,n.props,null,e.mode,r)).ref=Co(e,t,n),r.return=e,r)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Vu(n,e.mode,r)).return=e,t):((t=a(t,n.children||[])).return=e,t)}function d(e,t,n,r,o){return null===t||7!==t.tag?((t=Wu(n,e.mode,r,o)).return=e,t):((t=a(t,n)).return=e,t)}function f(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Bu(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case k:return(n=Uu(t.type,t.key,t.props,null,e.mode,n)).ref=Co(e,null,t),n.return=e,n;case w:return(t=Vu(t,e.mode,n)).return=e,t;case R:return f(e,(0,t._init)(t._payload),n)}if(te(t)||O(t))return(t=Wu(t,e.mode,n,null)).return=e,t;_o(e,t)}return null}function p(e,t,n,r){var a=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==a?null:s(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case k:return n.key===a?u(e,t,n,r):null;case w:return n.key===a?c(e,t,n,r):null;case R:return p(e,t,(a=n._init)(n._payload),r)}if(te(n)||O(n))return null!==a?null:d(e,t,n,r,null);_o(e,n)}return null}function m(e,t,n,r,a){if("string"===typeof r&&""!==r||"number"===typeof r)return s(t,e=e.get(n)||null,""+r,a);if("object"===typeof r&&null!==r){switch(r.$$typeof){case k:return u(t,e=e.get(null===r.key?n:r.key)||null,r,a);case w:return c(t,e=e.get(null===r.key?n:r.key)||null,r,a);case R:return m(e,t,n,(0,r._init)(r._payload),a)}if(te(r)||O(r))return d(t,e=e.get(n)||null,r,a,null);_o(t,r)}return null}function h(a,o,l,s){for(var u=null,c=null,d=o,h=o=0,g=null;null!==d&&h<l.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var v=p(a,d,l[h],s);if(null===v){null===d&&(d=g);break}e&&d&&null===v.alternate&&t(a,d),o=i(v,o,h),null===c?u=v:c.sibling=v,c=v,d=g}if(h===l.length)return n(a,d),po&&io(a,h),u;if(null===d){for(;h<l.length;h++)null!==(d=f(a,l[h],s))&&(o=i(d,o,h),null===c?u=d:c.sibling=d,c=d);return po&&io(a,h),u}for(d=r(a,d);h<l.length;h++)null!==(g=m(d,a,h,l[h],s))&&(e&&null!==g.alternate&&d.delete(null===g.key?h:g.key),o=i(g,o,h),null===c?u=g:c.sibling=g,c=g);return e&&d.forEach(function(e){return t(a,e)}),po&&io(a,h),u}function g(a,l,s,u){var c=O(s);if("function"!==typeof c)throw Error(o(150));if(null==(s=c.call(s)))throw Error(o(151));for(var d=c=null,h=l,g=l=0,v=null,y=s.next();null!==h&&!y.done;g++,y=s.next()){h.index>g?(v=h,h=null):v=h.sibling;var b=p(a,h,y.value,u);if(null===b){null===h&&(h=v);break}e&&h&&null===b.alternate&&t(a,h),l=i(b,l,g),null===d?c=b:d.sibling=b,d=b,h=v}if(y.done)return n(a,h),po&&io(a,g),c;if(null===h){for(;!y.done;g++,y=s.next())null!==(y=f(a,y.value,u))&&(l=i(y,l,g),null===d?c=y:d.sibling=y,d=y);return po&&io(a,g),c}for(h=r(a,h);!y.done;g++,y=s.next())null!==(y=m(h,a,g,y.value,u))&&(e&&null!==y.alternate&&h.delete(null===y.key?g:y.key),l=i(y,l,g),null===d?c=y:d.sibling=y,d=y);return e&&h.forEach(function(e){return t(a,e)}),po&&io(a,g),c}return function e(r,o,i,s){if("object"===typeof i&&null!==i&&i.type===S&&null===i.key&&(i=i.props.children),"object"===typeof i&&null!==i){switch(i.$$typeof){case k:e:{for(var u=i.key,c=o;null!==c;){if(c.key===u){if((u=i.type)===S){if(7===c.tag){n(r,c.sibling),(o=a(c,i.props.children)).return=r,r=o;break e}}else if(c.elementType===u||"object"===typeof u&&null!==u&&u.$$typeof===R&&jo(u)===c.type){n(r,c.sibling),(o=a(c,i.props)).ref=Co(r,c,i),o.return=r,r=o;break e}n(r,c);break}t(r,c),c=c.sibling}i.type===S?((o=Wu(i.props.children,r.mode,s,i.key)).return=r,r=o):((s=Uu(i.type,i.key,i.props,null,r.mode,s)).ref=Co(r,o,i),s.return=r,r=s)}return l(r);case w:e:{for(c=i.key;null!==o;){if(o.key===c){if(4===o.tag&&o.stateNode.containerInfo===i.containerInfo&&o.stateNode.implementation===i.implementation){n(r,o.sibling),(o=a(o,i.children||[])).return=r,r=o;break e}n(r,o);break}t(r,o),o=o.sibling}(o=Vu(i,r.mode,s)).return=r,r=o}return l(r);case R:return e(r,o,(c=i._init)(i._payload),s)}if(te(i))return h(r,o,i,s);if(O(i))return g(r,o,i,s);_o(r,i)}return"string"===typeof i&&""!==i||"number"===typeof i?(i=""+i,null!==o&&6===o.tag?(n(r,o.sibling),(o=a(o,i)).return=r,r=o):(n(r,o),(o=Bu(i,r.mode,s)).return=r,r=o),l(r)):n(r,o)}}var To=Po(!0),zo=Po(!1),No=Ra(null),Ro=null,Lo=null,Do=null;function Oo(){Do=Lo=Ro=null}function Io(e){var t=No.current;La(No),e._currentValue=t}function Ao(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Fo(e,t){Ro=e,Do=Lo=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(jl=!0),e.firstContext=null)}function Mo(e){var t=e._currentValue;if(Do!==e)if(e={context:e,memoizedValue:t,next:null},null===Lo){if(null===Ro)throw Error(o(308));Lo=e,Ro.dependencies={lanes:0,firstContext:e}}else Lo=Lo.next=e;return t}var $o=null;function Uo(e){null===$o?$o=[e]:$o.push(e)}function Wo(e,t,n,r){var a=t.interleaved;return null===a?(n.next=n,Uo(t)):(n.next=a.next,a.next=n),t.interleaved=n,Ho(e,r)}function Ho(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Bo=!1;function Vo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ko(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qo(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function qo(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&Os)){var a=r.pending;return null===a?t.next=t:(t.next=a.next,a.next=t),r.pending=t,Ho(e,n)}return null===(a=r.interleaved)?(t.next=t,Uo(r)):(t.next=a.next,a.next=t),r.interleaved=t,Ho(e,n)}function Yo(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,_t(e,n)}}function Go(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var a=null,o=null;if(null!==(n=n.firstBaseUpdate)){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===o?a=o=i:o=o.next=i,n=n.next}while(null!==n);null===o?a=o=t:o=o.next=t}else a=o=t;return n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Jo(e,t,n,r){var a=e.updateQueue;Bo=!1;var o=a.firstBaseUpdate,i=a.lastBaseUpdate,l=a.shared.pending;if(null!==l){a.shared.pending=null;var s=l,u=s.next;s.next=null,null===i?o=u:i.next=u,i=s;var c=e.alternate;null!==c&&((l=(c=c.updateQueue).lastBaseUpdate)!==i&&(null===l?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(null!==o){var d=a.baseState;for(i=0,c=u=s=null,l=o;;){var f=l.lane,p=l.eventTime;if((r&f)===f){null!==c&&(c=c.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var m=e,h=l;switch(f=t,p=n,h.tag){case 1:if("function"===typeof(m=h.payload)){d=m.call(p,d,f);break e}d=m;break e;case 3:m.flags=-65537&m.flags|128;case 0:if(null===(f="function"===typeof(m=h.payload)?m.call(p,d,f):m)||void 0===f)break e;d=A({},d,f);break e;case 2:Bo=!0}}null!==l.callback&&0!==l.lane&&(e.flags|=64,null===(f=a.effects)?a.effects=[l]:f.push(l))}else p={eventTime:p,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===c?(u=c=p,s=d):c=c.next=p,i|=f;if(null===(l=l.next)){if(null===(l=a.shared.pending))break;l=(f=l).next,f.next=null,a.lastBaseUpdate=f,a.shared.pending=null}}if(null===c&&(s=d),a.baseState=s,a.firstBaseUpdate=u,a.lastBaseUpdate=c,null!==(t=a.shared.interleaved)){a=t;do{i|=a.lane,a=a.next}while(a!==t)}else null===o&&(a.shared.lanes=0);Hs|=i,e.lanes=i,e.memoizedState=d}}function Xo(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(null!==a){if(r.callback=null,r=n,"function"!==typeof a)throw Error(o(191,a));a.call(r)}}}var Zo={},ei=Ra(Zo),ti=Ra(Zo),ni=Ra(Zo);function ri(e){if(e===Zo)throw Error(o(174));return e}function ai(e,t){switch(Da(ni,t),Da(ti,e),Da(ei,Zo),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:se(null,"");break;default:t=se(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}La(ei),Da(ei,t)}function oi(){La(ei),La(ti),La(ni)}function ii(e){ri(ni.current);var t=ri(ei.current),n=se(t,e.type);t!==n&&(Da(ti,e),Da(ei,n))}function li(e){ti.current===e&&(La(ei),La(ti))}var si=Ra(0);function ui(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ci=[];function di(){for(var e=0;e<ci.length;e++)ci[e]._workInProgressVersionPrimary=null;ci.length=0}var fi=x.ReactCurrentDispatcher,pi=x.ReactCurrentBatchConfig,mi=0,hi=null,gi=null,vi=null,yi=!1,bi=!1,xi=0,ki=0;function wi(){throw Error(o(321))}function Si(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!hr(e[n],t[n]))return!1;return!0}function Ei(e,t,n,r,a,i){if(mi=i,hi=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,fi.current=null===e||null===e.memoizedState?ll:sl,e=n(r,a),bi){i=0;do{if(bi=!1,xi=0,25<=i)throw Error(o(301));i+=1,vi=gi=null,t.updateQueue=null,fi.current=ul,e=n(r,a)}while(bi)}if(fi.current=il,t=null!==gi&&null!==gi.next,mi=0,vi=gi=hi=null,yi=!1,t)throw Error(o(300));return e}function Ci(){var e=0!==xi;return xi=0,e}function _i(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===vi?hi.memoizedState=vi=e:vi=vi.next=e,vi}function ji(){if(null===gi){var e=hi.alternate;e=null!==e?e.memoizedState:null}else e=gi.next;var t=null===vi?hi.memoizedState:vi.next;if(null!==t)vi=t,gi=e;else{if(null===e)throw Error(o(310));e={memoizedState:(gi=e).memoizedState,baseState:gi.baseState,baseQueue:gi.baseQueue,queue:gi.queue,next:null},null===vi?hi.memoizedState=vi=e:vi=vi.next=e}return vi}function Pi(e,t){return"function"===typeof t?t(e):t}function Ti(e){var t=ji(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=gi,a=r.baseQueue,i=n.pending;if(null!==i){if(null!==a){var l=a.next;a.next=i.next,i.next=l}r.baseQueue=a=i,n.pending=null}if(null!==a){i=a.next,r=r.baseState;var s=l=null,u=null,c=i;do{var d=c.lane;if((mi&d)===d)null!==u&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};null===u?(s=u=f,l=r):u=u.next=f,hi.lanes|=d,Hs|=d}c=c.next}while(null!==c&&c!==i);null===u?l=r:u.next=s,hr(r,t.memoizedState)||(jl=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(null!==(e=n.interleaved)){a=e;do{i=a.lane,hi.lanes|=i,Hs|=i,a=a.next}while(a!==e)}else null===a&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function zi(e){var t=ji(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,i=t.memoizedState;if(null!==a){n.pending=null;var l=a=a.next;do{i=e(i,l.action),l=l.next}while(l!==a);hr(i,t.memoizedState)||(jl=!0),t.memoizedState=i,null===t.baseQueue&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Ni(){}function Ri(e,t){var n=hi,r=ji(),a=t(),i=!hr(r.memoizedState,a);if(i&&(r.memoizedState=a,jl=!0),r=r.queue,Bi(Oi.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||null!==vi&&1&vi.memoizedState.tag){if(n.flags|=2048,Mi(9,Di.bind(null,n,r,a,t),void 0,null),null===Is)throw Error(o(349));0!==(30&mi)||Li(n,t,a)}return a}function Li(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=hi.updateQueue)?(t={lastEffect:null,stores:null},hi.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Di(e,t,n,r){t.value=n,t.getSnapshot=r,Ii(t)&&Ai(e)}function Oi(e,t,n){return n(function(){Ii(t)&&Ai(e)})}function Ii(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!hr(e,n)}catch(he){return!0}}function Ai(e){var t=Ho(e,1);null!==t&&uu(t,e,1,-1)}function Fi(e){var t=_i();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:e},t.queue=e,e=e.dispatch=nl.bind(null,hi,e),[t.memoizedState,e]}function Mi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=hi.updateQueue)?(t={lastEffect:null,stores:null},hi.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function $i(){return ji().memoizedState}function Ui(e,t,n,r){var a=_i();hi.flags|=e,a.memoizedState=Mi(1|t,n,void 0,void 0===r?null:r)}function Wi(e,t,n,r){var a=ji();r=void 0===r?null:r;var o=void 0;if(null!==gi){var i=gi.memoizedState;if(o=i.destroy,null!==r&&Si(r,i.deps))return void(a.memoizedState=Mi(t,n,o,r))}hi.flags|=e,a.memoizedState=Mi(1|t,n,o,r)}function Hi(e,t){return Ui(8390656,8,e,t)}function Bi(e,t){return Wi(2048,8,e,t)}function Vi(e,t){return Wi(4,2,e,t)}function Ki(e,t){return Wi(4,4,e,t)}function Qi(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function qi(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Wi(4,4,Qi.bind(null,t,e),n)}function Yi(){}function Gi(e,t){var n=ji();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&Si(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ji(e,t){var n=ji();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&Si(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Xi(e,t,n){return 0===(21&mi)?(e.baseState&&(e.baseState=!1,jl=!0),e.memoizedState=n):(hr(n,t)||(n=St(),hi.lanes|=n,Hs|=n,e.baseState=!0),t)}function Zi(e,t){var n=jt;jt=0!==n&&4>n?n:4,e(!0);var r=pi.transition;pi.transition={};try{e(!1),t()}finally{jt=n,pi.transition=r}}function el(){return ji().memoizedState}function tl(e,t,n){var r=su(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},rl(e))al(t,n);else if(null!==(n=Wo(e,t,n,r))){uu(n,e,r,lu()),ol(n,t,r)}}function nl(e,t,n){var r=su(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(rl(e))al(t,a);else{var o=e.alternate;if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=t.lastRenderedReducer))try{var i=t.lastRenderedState,l=o(i,n);if(a.hasEagerState=!0,a.eagerState=l,hr(l,i)){var s=t.interleaved;return null===s?(a.next=a,Uo(t)):(a.next=s.next,s.next=a),void(t.interleaved=a)}}catch(fe){}null!==(n=Wo(e,t,a,r))&&(uu(n,e,r,a=lu()),ol(n,t,r))}}function rl(e){var t=e.alternate;return e===hi||null!==t&&t===hi}function al(e,t){bi=yi=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ol(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,_t(e,n)}}var il={readContext:Mo,useCallback:wi,useContext:wi,useEffect:wi,useImperativeHandle:wi,useInsertionEffect:wi,useLayoutEffect:wi,useMemo:wi,useReducer:wi,useRef:wi,useState:wi,useDebugValue:wi,useDeferredValue:wi,useTransition:wi,useMutableSource:wi,useSyncExternalStore:wi,useId:wi,unstable_isNewReconciler:!1},ll={readContext:Mo,useCallback:function(e,t){return _i().memoizedState=[e,void 0===t?null:t],e},useContext:Mo,useEffect:Hi,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Ui(4194308,4,Qi.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ui(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ui(4,2,e,t)},useMemo:function(e,t){var n=_i();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=_i();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=tl.bind(null,hi,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},_i().memoizedState=e},useState:Fi,useDebugValue:Yi,useDeferredValue:function(e){return _i().memoizedState=e},useTransition:function(){var e=Fi(!1),t=e[0];return e=Zi.bind(null,e[1]),_i().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=hi,a=_i();if(po){if(void 0===n)throw Error(o(407));n=n()}else{if(n=t(),null===Is)throw Error(o(349));0!==(30&mi)||Li(r,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,Hi(Oi.bind(null,r,i,e),[e]),r.flags|=2048,Mi(9,Di.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=_i(),t=Is.identifierPrefix;if(po){var n=oo;t=":"+t+"R"+(n=(ao&~(1<<32-mt(ao)-1)).toString(32)+n),0<(n=xi++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=ki++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},sl={readContext:Mo,useCallback:Gi,useContext:Mo,useEffect:Bi,useImperativeHandle:qi,useInsertionEffect:Vi,useLayoutEffect:Ki,useMemo:Ji,useReducer:Ti,useRef:$i,useState:function(){return Ti(Pi)},useDebugValue:Yi,useDeferredValue:function(e){return Xi(ji(),gi.memoizedState,e)},useTransition:function(){return[Ti(Pi)[0],ji().memoizedState]},useMutableSource:Ni,useSyncExternalStore:Ri,useId:el,unstable_isNewReconciler:!1},ul={readContext:Mo,useCallback:Gi,useContext:Mo,useEffect:Bi,useImperativeHandle:qi,useInsertionEffect:Vi,useLayoutEffect:Ki,useMemo:Ji,useReducer:zi,useRef:$i,useState:function(){return zi(Pi)},useDebugValue:Yi,useDeferredValue:function(e){var t=ji();return null===gi?t.memoizedState=e:Xi(t,gi.memoizedState,e)},useTransition:function(){return[zi(Pi)[0],ji().memoizedState]},useMutableSource:Ni,useSyncExternalStore:Ri,useId:el,unstable_isNewReconciler:!1};function cl(e,t){if(e&&e.defaultProps){for(var n in t=A({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function dl(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:A({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var fl={isMounted:function(e){return!!(e=e._reactInternals)&&Ge(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=lu(),a=su(e),o=Qo(r,a);o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=qo(e,o,a))&&(uu(t,e,a,r),Yo(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=lu(),a=su(e),o=Qo(r,a);o.tag=1,o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=qo(e,o,a))&&(uu(t,e,a,r),Yo(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=lu(),r=su(e),a=Qo(n,r);a.tag=2,void 0!==t&&null!==t&&(a.callback=t),null!==(t=qo(e,a,r))&&(uu(t,e,r,n),Yo(t,e,r))}};function pl(e,t,n,r,a,o,i){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,o,i):!t.prototype||!t.prototype.isPureReactComponent||(!gr(n,r)||!gr(a,o))}function ml(e,t,n){var r=!1,a=Oa,o=t.contextType;return"object"===typeof o&&null!==o?o=Mo(o):(a=$a(t)?Fa:Ia.current,o=(r=null!==(r=t.contextTypes)&&void 0!==r)?Ma(e,a):Oa),t=new t(n,o),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=fl,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),t}function hl(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&fl.enqueueReplaceState(t,t.state,null)}function gl(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Vo(e);var o=t.contextType;"object"===typeof o&&null!==o?a.context=Mo(o):(o=$a(t)?Fa:Ia.current,a.context=Ma(e,o)),a.state=e.memoizedState,"function"===typeof(o=t.getDerivedStateFromProps)&&(dl(e,t,o,n),a.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof a.getSnapshotBeforeUpdate||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||(t=a.state,"function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),t!==a.state&&fl.enqueueReplaceState(a,a.state,null),Jo(e,n,a,r),a.state=e.memoizedState),"function"===typeof a.componentDidMount&&(e.flags|=4194308)}function vl(e,t){try{var n="",r=t;do{n+=U(r),r=r.return}while(r);var a=n}catch(ge){a="\nError generating stack: "+ge.message+"\n"+ge.stack}return{value:e,source:t,stack:a,digest:null}}function yl(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function bl(e,t){try{console.error(t.value)}catch(ce){setTimeout(function(){throw ce})}}var xl="function"===typeof WeakMap?WeakMap:Map;function kl(e,t,n){(n=Qo(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Js||(Js=!0,Xs=r),bl(0,t)},n}function wl(e,t,n){(n=Qo(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){bl(0,t)}}var o=e.stateNode;return null!==o&&"function"===typeof o.componentDidCatch&&(n.callback=function(){bl(0,t),"function"!==typeof r&&(null===Zs?Zs=new Set([this]):Zs.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function Sl(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new xl;var a=new Set;r.set(t,a)}else void 0===(a=r.get(t))&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=Ru.bind(null,e,t,n),t.then(e,e))}function El(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function Cl(e,t,n,r,a){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Qo(-1,1)).tag=2,qo(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var _l=x.ReactCurrentOwner,jl=!1;function Pl(e,t,n,r){t.child=null===e?zo(t,null,n,r):To(t,e.child,n,r)}function Tl(e,t,n,r,a){n=n.render;var o=t.ref;return Fo(t,a),r=Ei(e,t,n,r,o,a),n=Ci(),null===e||jl?(po&&n&&so(t),t.flags|=1,Pl(e,t,r,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Jl(e,t,a))}function zl(e,t,n,r,a){if(null===e){var o=n.type;return"function"!==typeof o||Mu(o)||void 0!==o.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Uu(n.type,null,r,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,Nl(e,t,o,r,a))}if(o=e.child,0===(e.lanes&a)){var i=o.memoizedProps;if((n=null!==(n=n.compare)?n:gr)(i,r)&&e.ref===t.ref)return Jl(e,t,a)}return t.flags|=1,(e=$u(o,r)).ref=t.ref,e.return=t,t.child=e}function Nl(e,t,n,r,a){if(null!==e){var o=e.memoizedProps;if(gr(o,r)&&e.ref===t.ref){if(jl=!1,t.pendingProps=r=o,0===(e.lanes&a))return t.lanes=e.lanes,Jl(e,t,a);0!==(131072&e.flags)&&(jl=!0)}}return Dl(e,t,n,r,a)}function Rl(e,t,n){var r=t.pendingProps,a=r.children,o=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Da($s,Ms),Ms|=n;else{if(0===(1073741824&n))return e=null!==o?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Da($s,Ms),Ms|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==o?o.baseLanes:n,Da($s,Ms),Ms|=r}else null!==o?(r=o.baseLanes|n,t.memoizedState=null):r=n,Da($s,Ms),Ms|=r;return Pl(e,t,a,n),t.child}function Ll(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Dl(e,t,n,r,a){var o=$a(n)?Fa:Ia.current;return o=Ma(t,o),Fo(t,a),n=Ei(e,t,n,r,o,a),r=Ci(),null===e||jl?(po&&r&&so(t),t.flags|=1,Pl(e,t,n,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Jl(e,t,a))}function Ol(e,t,n,r,a){if($a(n)){var o=!0;Ba(t)}else o=!1;if(Fo(t,a),null===t.stateNode)Gl(e,t),ml(t,n,r),gl(t,n,r,a),r=!0;else if(null===e){var i=t.stateNode,l=t.memoizedProps;i.props=l;var s=i.context,u=n.contextType;"object"===typeof u&&null!==u?u=Mo(u):u=Ma(t,u=$a(n)?Fa:Ia.current);var c=n.getDerivedStateFromProps,d="function"===typeof c||"function"===typeof i.getSnapshotBeforeUpdate;d||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(l!==r||s!==u)&&hl(t,i,r,u),Bo=!1;var f=t.memoizedState;i.state=f,Jo(t,r,i,a),s=t.memoizedState,l!==r||f!==s||Aa.current||Bo?("function"===typeof c&&(dl(t,n,c,r),s=t.memoizedState),(l=Bo||pl(t,n,l,r,f,s,u))?(d||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||("function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount()),"function"===typeof i.componentDidMount&&(t.flags|=4194308)):("function"===typeof i.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=u,r=l):("function"===typeof i.componentDidMount&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Ko(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:cl(t.type,l),i.props=u,d=t.pendingProps,f=i.context,"object"===typeof(s=n.contextType)&&null!==s?s=Mo(s):s=Ma(t,s=$a(n)?Fa:Ia.current);var p=n.getDerivedStateFromProps;(c="function"===typeof p||"function"===typeof i.getSnapshotBeforeUpdate)||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(l!==d||f!==s)&&hl(t,i,r,s),Bo=!1,f=t.memoizedState,i.state=f,Jo(t,r,i,a);var m=t.memoizedState;l!==d||f!==m||Aa.current||Bo?("function"===typeof p&&(dl(t,n,p,r),m=t.memoizedState),(u=Bo||pl(t,n,u,r,f,m,s)||!1)?(c||"function"!==typeof i.UNSAFE_componentWillUpdate&&"function"!==typeof i.componentWillUpdate||("function"===typeof i.componentWillUpdate&&i.componentWillUpdate(r,m,s),"function"===typeof i.UNSAFE_componentWillUpdate&&i.UNSAFE_componentWillUpdate(r,m,s)),"function"===typeof i.componentDidUpdate&&(t.flags|=4),"function"===typeof i.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof i.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),i.props=r,i.state=m,i.context=s,r=u):("function"!==typeof i.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Il(e,t,n,r,o,a)}function Il(e,t,n,r,a,o){Ll(e,t);var i=0!==(128&t.flags);if(!r&&!i)return a&&Va(t,n,!1),Jl(e,t,o);r=t.stateNode,_l.current=t;var l=i&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&i?(t.child=To(t,e.child,null,o),t.child=To(t,null,l,o)):Pl(e,t,l,o),t.memoizedState=r.state,a&&Va(t,n,!0),t.child}function Al(e){var t=e.stateNode;t.pendingContext?Wa(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Wa(0,t.context,!1),ai(e,t.containerInfo)}function Fl(e,t,n,r,a){return wo(),So(a),t.flags|=256,Pl(e,t,n,r),t.child}var Ml,$l,Ul,Wl={dehydrated:null,treeContext:null,retryLane:0};function Hl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Bl(e,t,n){var r,a=t.pendingProps,i=si.current,l=!1,s=0!==(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!==(2&i)),r?(l=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(i|=1),Da(si,1&i),null===e)return yo(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(s=a.children,e=a.fallback,l?(a=t.mode,l=t.child,s={mode:"hidden",children:s},0===(1&a)&&null!==l?(l.childLanes=0,l.pendingProps=s):l=Hu(s,a,0,null),e=Wu(e,a,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Hl(n),t.memoizedState=Wl,e):Vl(t,s));if(null!==(i=e.memoizedState)&&null!==(r=i.dehydrated))return function(e,t,n,r,a,i,l){if(n)return 256&t.flags?(t.flags&=-257,Kl(e,t,l,r=yl(Error(o(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(i=r.fallback,a=t.mode,r=Hu({mode:"visible",children:r.children},a,0,null),(i=Wu(i,a,l,null)).flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,0!==(1&t.mode)&&To(t,e.child,null,l),t.child.memoizedState=Hl(l),t.memoizedState=Wl,i);if(0===(1&t.mode))return Kl(e,t,l,null);if("$!"===a.data){if(r=a.nextSibling&&a.nextSibling.dataset)var s=r.dgst;return r=s,Kl(e,t,l,r=yl(i=Error(o(419)),r,void 0))}if(s=0!==(l&e.childLanes),jl||s){if(null!==(r=Is)){switch(l&-l){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}0!==(a=0!==(a&(r.suspendedLanes|l))?0:a)&&a!==i.retryLane&&(i.retryLane=a,Ho(e,a),uu(r,e,a,-1))}return wu(),Kl(e,t,l,r=yl(Error(o(421))))}return"$?"===a.data?(t.flags|=128,t.child=e.child,t=Du.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,fo=va(a.nextSibling),co=t,po=!0,mo=null,null!==e&&(to[no++]=ao,to[no++]=oo,to[no++]=ro,ao=e.id,oo=e.overflow,ro=t),t=Vl(t,r.children),t.flags|=4096,t)}(e,t,s,a,r,i,n);if(l){l=a.fallback,s=t.mode,r=(i=e.child).sibling;var u={mode:"hidden",children:a.children};return 0===(1&s)&&t.child!==i?((a=t.child).childLanes=0,a.pendingProps=u,t.deletions=null):(a=$u(i,u)).subtreeFlags=14680064&i.subtreeFlags,null!==r?l=$u(r,l):(l=Wu(l,s,n,null)).flags|=2,l.return=t,a.return=t,a.sibling=l,t.child=a,a=l,l=t.child,s=null===(s=e.child.memoizedState)?Hl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=Wl,a}return e=(l=e.child).sibling,a=$u(l,{mode:"visible",children:a.children}),0===(1&t.mode)&&(a.lanes=n),a.return=t,a.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=a,t.memoizedState=null,a}function Vl(e,t){return(t=Hu({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Kl(e,t,n,r){return null!==r&&So(r),To(t,e.child,null,n),(e=Vl(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Ql(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Ao(e.return,t,n)}function ql(e,t,n,r,a){var o=e.memoizedState;null===o?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=a)}function Yl(e,t,n){var r=t.pendingProps,a=r.revealOrder,o=r.tail;if(Pl(e,t,r.children,n),0!==(2&(r=si.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Ql(e,n,t);else if(19===e.tag)Ql(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Da(si,r),0===(1&t.mode))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;null!==n;)null!==(e=n.alternate)&&null===ui(e)&&(a=n),n=n.sibling;null===(n=a)?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),ql(t,!1,a,n,o);break;case"backwards":for(n=null,a=t.child,t.child=null;null!==a;){if(null!==(e=a.alternate)&&null===ui(e)){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}ql(t,!0,n,null,o);break;case"together":ql(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Gl(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Jl(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Hs|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(o(153));if(null!==t.child){for(n=$u(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=$u(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Xl(e,t){if(!po)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Zl(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=14680064&a.subtreeFlags,r|=14680064&a.flags,a.return=e,a=a.sibling;else for(a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function es(e,t,n){var r=t.pendingProps;switch(uo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zl(t),null;case 1:case 17:return $a(t.type)&&Ua(),Zl(t),null;case 3:return r=t.stateNode,oi(),La(Aa),La(Ia),di(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(xo(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==mo&&(pu(mo),mo=null))),Zl(t),null;case 5:li(t);var a=ri(ni.current);if(n=t.type,null!==e&&null!=t.stateNode)$l(e,t,n,r),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(o(166));return Zl(t),null}if(e=ri(ei.current),xo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[xa]=t,r[ka]=i,e=0!==(1&t.mode),n){case"dialog":Qr("cancel",r),Qr("close",r);break;case"iframe":case"object":case"embed":Qr("load",r);break;case"video":case"audio":for(a=0;a<Hr.length;a++)Qr(Hr[a],r);break;case"source":Qr("error",r);break;case"img":case"image":case"link":Qr("error",r),Qr("load",r);break;case"details":Qr("toggle",r);break;case"input":G(r,i),Qr("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Qr("invalid",r);break;case"textarea":ae(r,i),Qr("invalid",r)}for(var s in Ee(n,i),a=null,i)if(i.hasOwnProperty(s)){var u=i[s];"children"===s?"string"===typeof u?r.textContent!==u&&(!0!==i.suppressHydrationWarning&&ia(r.textContent,u,e),a=["children",u]):"number"===typeof u&&r.textContent!==""+u&&(!0!==i.suppressHydrationWarning&&ia(r.textContent,u,e),a=["children",""+u]):l.hasOwnProperty(s)&&null!=u&&"onScroll"===s&&Qr("scroll",r)}switch(n){case"input":K(r),Z(r,i,!0);break;case"textarea":K(r),ie(r);break;case"select":case"option":break;default:"function"===typeof i.onClick&&(r.onclick=la)}r=a,t.updateQueue=r,null!==r&&(t.flags|=4)}else{s=9===a.nodeType?a:a.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=le(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=s.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),"select"===n&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[xa]=t,e[ka]=r,Ml(e,t),t.stateNode=e;e:{switch(s=Ce(n,r),n){case"dialog":Qr("cancel",e),Qr("close",e),a=r;break;case"iframe":case"object":case"embed":Qr("load",e),a=r;break;case"video":case"audio":for(a=0;a<Hr.length;a++)Qr(Hr[a],e);a=r;break;case"source":Qr("error",e),a=r;break;case"img":case"image":case"link":Qr("error",e),Qr("load",e),a=r;break;case"details":Qr("toggle",e),a=r;break;case"input":G(e,r),a=Y(e,r),Qr("invalid",e);break;case"option":default:a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=A({},r,{value:void 0}),Qr("invalid",e);break;case"textarea":ae(e,r),a=re(e,r),Qr("invalid",e)}for(i in Ee(n,a),u=a)if(u.hasOwnProperty(i)){var c=u[i];"style"===i?we(e,c):"dangerouslySetInnerHTML"===i?null!=(c=c?c.__html:void 0)&&pe(e,c):"children"===i?"string"===typeof c?("textarea"!==n||""!==c)&&ve(e,c):"number"===typeof c&&ve(e,""+c):"suppressContentEditableWarning"!==i&&"suppressHydrationWarning"!==i&&"autoFocus"!==i&&(l.hasOwnProperty(i)?null!=c&&"onScroll"===i&&Qr("scroll",e):null!=c&&b(e,i,c,s))}switch(n){case"input":K(e),Z(e,r,!1);break;case"textarea":K(e),ie(e);break;case"option":null!=r.value&&e.setAttribute("value",""+B(r.value));break;case"select":e.multiple=!!r.multiple,null!=(i=r.value)?ne(e,!!r.multiple,i,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof a.onClick&&(e.onclick=la)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Zl(t),null;case 6:if(e&&null!=t.stateNode)Ul(0,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(o(166));if(n=ri(ni.current),ri(ei.current),xo(t)){if(r=t.stateNode,n=t.memoizedProps,r[xa]=t,(i=r.nodeValue!==n)&&null!==(e=co))switch(e.tag){case 3:ia(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&ia(r.nodeValue,n,0!==(1&e.mode))}i&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[xa]=t,t.stateNode=r}return Zl(t),null;case 13:if(La(si),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(po&&null!==fo&&0!==(1&t.mode)&&0===(128&t.flags))ko(),wo(),t.flags|=98560,i=!1;else if(i=xo(t),null!==r&&null!==r.dehydrated){if(null===e){if(!i)throw Error(o(318));if(!(i=null!==(i=t.memoizedState)?i.dehydrated:null))throw Error(o(317));i[xa]=t}else wo(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Zl(t),i=!1}else null!==mo&&(pu(mo),mo=null),i=!0;if(!i)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&si.current)?0===Us&&(Us=3):wu())),null!==t.updateQueue&&(t.flags|=4),Zl(t),null);case 4:return oi(),null===e&&Gr(t.stateNode.containerInfo),Zl(t),null;case 10:return Io(t.type._context),Zl(t),null;case 19:if(La(si),null===(i=t.memoizedState))return Zl(t),null;if(r=0!==(128&t.flags),null===(s=i.rendering))if(r)Xl(i,!1);else{if(0!==Us||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(s=ui(e))){for(t.flags|=128,Xl(i,!1),null!==(r=s.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(i=n).flags&=14680066,null===(s=i.alternate)?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Da(si,1&si.current|2),t.child}e=e.sibling}null!==i.tail&&ot()>Ys&&(t.flags|=128,r=!0,Xl(i,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=ui(s))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Xl(i,!0),null===i.tail&&"hidden"===i.tailMode&&!s.alternate&&!po)return Zl(t),null}else 2*ot()-i.renderingStartTime>Ys&&1073741824!==n&&(t.flags|=128,r=!0,Xl(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(null!==(n=i.last)?n.sibling=s:t.child=s,i.last=s)}return null!==i.tail?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ot(),t.sibling=null,n=si.current,Da(si,r?1&n|2:1&n),t):(Zl(t),null);case 22:case 23:return yu(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&Ms)&&(Zl(t),6&t.subtreeFlags&&(t.flags|=8192)):Zl(t),null;case 24:case 25:return null}throw Error(o(156,t.tag))}function ts(e,t){switch(uo(t),t.tag){case 1:return $a(t.type)&&Ua(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return oi(),La(Aa),La(Ia),di(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return li(t),null;case 13:if(La(si),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(o(340));wo()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return La(si),null;case 4:return oi(),null;case 10:return Io(t.type._context),null;case 22:case 23:return yu(),null;default:return null}}Ml=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},$l=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,ri(ei.current);var o,i=null;switch(n){case"input":a=Y(e,a),r=Y(e,r),i=[];break;case"select":a=A({},a,{value:void 0}),r=A({},r,{value:void 0}),i=[];break;case"textarea":a=re(e,a),r=re(e,r),i=[];break;default:"function"!==typeof a.onClick&&"function"===typeof r.onClick&&(e.onclick=la)}for(c in Ee(n,r),n=null,a)if(!r.hasOwnProperty(c)&&a.hasOwnProperty(c)&&null!=a[c])if("style"===c){var s=a[c];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(l.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(s=null!=a?a[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(null!=u||null!=s))if("style"===c)if(s){for(o in s)!s.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&s[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(c,n)),n=u;else"dangerouslySetInnerHTML"===c?(u=u?u.__html:void 0,s=s?s.__html:void 0,null!=u&&s!==u&&(i=i||[]).push(c,u)):"children"===c?"string"!==typeof u&&"number"!==typeof u||(i=i||[]).push(c,""+u):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(l.hasOwnProperty(c)?(null!=u&&"onScroll"===c&&Qr("scroll",e),i||s===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}},Ul=function(e,t,n,r){n!==r&&(t.flags|=4)};var ns=!1,rs=!1,as="function"===typeof WeakSet?WeakSet:Set,os=null;function is(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(he){Nu(e,t,he)}else n.current=null}function ls(e,t,n){try{n()}catch(he){Nu(e,t,he)}}var ss=!1;function us(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var a=r=r.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,void 0!==o&&ls(t,n,o)}a=a.next}while(a!==r)}}function cs(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ds(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function fs(e){var t=e.alternate;null!==t&&(e.alternate=null,fs(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[xa],delete t[ka],delete t[Sa],delete t[Ea],delete t[Ca])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ps(e){return 5===e.tag||3===e.tag||4===e.tag}function ms(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||ps(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function hs(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=la));else if(4!==r&&null!==(e=e.child))for(hs(e,t,n),e=e.sibling;null!==e;)hs(e,t,n),e=e.sibling}function gs(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(gs(e,t,n),e=e.sibling;null!==e;)gs(e,t,n),e=e.sibling}var vs=null,ys=!1;function bs(e,t,n){for(n=n.child;null!==n;)xs(e,t,n),n=n.sibling}function xs(e,t,n){if(pt&&"function"===typeof pt.onCommitFiberUnmount)try{pt.onCommitFiberUnmount(ft,n)}catch(me){}switch(n.tag){case 5:rs||is(n,t);case 6:var r=vs,a=ys;vs=null,bs(e,t,n),ys=a,null!==(vs=r)&&(ys?(e=vs,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):vs.removeChild(n.stateNode));break;case 18:null!==vs&&(ys?(e=vs,n=n.stateNode,8===e.nodeType?ga(e.parentNode,n):1===e.nodeType&&ga(e,n),Gt(e)):ga(vs,n.stateNode));break;case 4:r=vs,a=ys,vs=n.stateNode.containerInfo,ys=!0,bs(e,t,n),vs=r,ys=a;break;case 0:case 11:case 14:case 15:if(!rs&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){a=r=r.next;do{var o=a,i=o.destroy;o=o.tag,void 0!==i&&(0!==(2&o)||0!==(4&o))&&ls(n,t,i),a=a.next}while(a!==r)}bs(e,t,n);break;case 1:if(!rs&&(is(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(me){Nu(n,t,me)}bs(e,t,n);break;case 21:bs(e,t,n);break;case 22:1&n.mode?(rs=(r=rs)||null!==n.memoizedState,bs(e,t,n),rs=r):bs(e,t,n);break;default:bs(e,t,n)}}function ks(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new as),t.forEach(function(t){var r=Ou.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function ws(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var a=n[r];try{var i=e,l=t,s=l;e:for(;null!==s;){switch(s.tag){case 5:vs=s.stateNode,ys=!1;break e;case 3:case 4:vs=s.stateNode.containerInfo,ys=!0;break e}s=s.return}if(null===vs)throw Error(o(160));xs(i,l,a),vs=null,ys=!1;var u=a.alternate;null!==u&&(u.return=null),a.return=null}catch(fe){Nu(a,t,fe)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)Ss(t,e),t=t.sibling}function Ss(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ws(t,e),Es(e),4&r){try{us(3,e,e.return),cs(3,e)}catch(g){Nu(e,e.return,g)}try{us(5,e,e.return)}catch(g){Nu(e,e.return,g)}}break;case 1:ws(t,e),Es(e),512&r&&null!==n&&is(n,n.return);break;case 5:if(ws(t,e),Es(e),512&r&&null!==n&&is(n,n.return),32&e.flags){var a=e.stateNode;try{ve(a,"")}catch(g){Nu(e,e.return,g)}}if(4&r&&null!=(a=e.stateNode)){var i=e.memoizedProps,l=null!==n?n.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,null!==u)try{"input"===s&&"radio"===i.type&&null!=i.name&&J(a,i),Ce(s,l);var c=Ce(s,i);for(l=0;l<u.length;l+=2){var d=u[l],f=u[l+1];"style"===d?we(a,f):"dangerouslySetInnerHTML"===d?pe(a,f):"children"===d?ve(a,f):b(a,d,f,c)}switch(s){case"input":X(a,i);break;case"textarea":oe(a,i);break;case"select":var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var m=i.value;null!=m?ne(a,!!i.multiple,m,!1):p!==!!i.multiple&&(null!=i.defaultValue?ne(a,!!i.multiple,i.defaultValue,!0):ne(a,!!i.multiple,i.multiple?[]:"",!1))}a[ka]=i}catch(g){Nu(e,e.return,g)}}break;case 6:if(ws(t,e),Es(e),4&r){if(null===e.stateNode)throw Error(o(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(g){Nu(e,e.return,g)}}break;case 3:if(ws(t,e),Es(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Gt(t.containerInfo)}catch(g){Nu(e,e.return,g)}break;case 4:default:ws(t,e),Es(e);break;case 13:ws(t,e),Es(e),8192&(a=e.child).flags&&(i=null!==a.memoizedState,a.stateNode.isHidden=i,!i||null!==a.alternate&&null!==a.alternate.memoizedState||(qs=ot())),4&r&&ks(e);break;case 22:if(d=null!==n&&null!==n.memoizedState,1&e.mode?(rs=(c=rs)||d,ws(t,e),rs=c):ws(t,e),Es(e),8192&r){if(c=null!==e.memoizedState,(e.stateNode.isHidden=c)&&!d&&0!==(1&e.mode))for(os=e,d=e.child;null!==d;){for(f=os=d;null!==os;){switch(m=(p=os).child,p.tag){case 0:case 11:case 14:case 15:us(4,p,p.return);break;case 1:is(p,p.return);var h=p.stateNode;if("function"===typeof h.componentWillUnmount){r=p,n=p.return;try{t=r,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(g){Nu(r,n,g)}}break;case 5:is(p,p.return);break;case 22:if(null!==p.memoizedState){Ps(f);continue}}null!==m?(m.return=p,os=m):Ps(f)}d=d.sibling}e:for(d=null,f=e;;){if(5===f.tag){if(null===d){d=f;try{a=f.stateNode,c?"function"===typeof(i=a.style).setProperty?i.setProperty("display","none","important"):i.display="none":(s=f.stateNode,l=void 0!==(u=f.memoizedProps.style)&&null!==u&&u.hasOwnProperty("display")?u.display:null,s.style.display=ke("display",l))}catch(g){Nu(e,e.return,g)}}}else if(6===f.tag){if(null===d)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(g){Nu(e,e.return,g)}}else if((22!==f.tag&&23!==f.tag||null===f.memoizedState||f===e)&&null!==f.child){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;null===f.sibling;){if(null===f.return||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ws(t,e),Es(e),4&r&&ks(e);case 21:}}function Es(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(ps(n)){var r=n;break e}n=n.return}throw Error(o(160))}switch(r.tag){case 5:var a=r.stateNode;32&r.flags&&(ve(a,""),r.flags&=-33),gs(e,ms(e),a);break;case 3:case 4:var i=r.stateNode.containerInfo;hs(e,ms(e),i);break;default:throw Error(o(161))}}catch(Ne){Nu(e,e.return,Ne)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function Cs(e,t,n){os=e,_s(e,t,n)}function _s(e,t,n){for(var r=0!==(1&e.mode);null!==os;){var a=os,o=a.child;if(22===a.tag&&r){var i=null!==a.memoizedState||ns;if(!i){var l=a.alternate,s=null!==l&&null!==l.memoizedState||rs;l=ns;var u=rs;if(ns=i,(rs=s)&&!u)for(os=a;null!==os;)s=(i=os).child,22===i.tag&&null!==i.memoizedState?Ts(a):null!==s?(s.return=i,os=s):Ts(a);for(;null!==o;)os=o,_s(o,t,n),o=o.sibling;os=a,ns=l,rs=u}js(e)}else 0!==(8772&a.subtreeFlags)&&null!==o?(o.return=a,os=o):js(e)}}function js(e){for(;null!==os;){var t=os;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:rs||cs(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!rs)if(null===n)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:cl(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;null!==i&&Xo(t,i,r);break;case 3:var l=t.updateQueue;if(null!==l){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Xo(t,l,n)}break;case 5:var s=t.stateNode;if(null===n&&4&t.flags){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var c=t.alternate;if(null!==c){var d=c.memoizedState;if(null!==d){var f=d.dehydrated;null!==f&&Gt(f)}}}break;default:throw Error(o(163))}rs||512&t.flags&&ds(t)}catch(p){Nu(t,t.return,p)}}if(t===e){os=null;break}if(null!==(n=t.sibling)){n.return=t.return,os=n;break}os=t.return}}function Ps(e){for(;null!==os;){var t=os;if(t===e){os=null;break}var n=t.sibling;if(null!==n){n.return=t.return,os=n;break}os=t.return}}function Ts(e){for(;null!==os;){var t=os;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{cs(4,t)}catch(Ne){Nu(t,n,Ne)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var a=t.return;try{r.componentDidMount()}catch(Ne){Nu(t,a,Ne)}}var o=t.return;try{ds(t)}catch(Ne){Nu(t,o,Ne)}break;case 5:var i=t.return;try{ds(t)}catch(Ne){Nu(t,i,Ne)}}}catch(Ne){Nu(t,t.return,Ne)}if(t===e){os=null;break}var l=t.sibling;if(null!==l){l.return=t.return,os=l;break}os=t.return}}var zs,Ns=Math.ceil,Rs=x.ReactCurrentDispatcher,Ls=x.ReactCurrentOwner,Ds=x.ReactCurrentBatchConfig,Os=0,Is=null,As=null,Fs=0,Ms=0,$s=Ra(0),Us=0,Ws=null,Hs=0,Bs=0,Vs=0,Ks=null,Qs=null,qs=0,Ys=1/0,Gs=null,Js=!1,Xs=null,Zs=null,eu=!1,tu=null,nu=0,ru=0,au=null,ou=-1,iu=0;function lu(){return 0!==(6&Os)?ot():-1!==ou?ou:ou=ot()}function su(e){return 0===(1&e.mode)?1:0!==(2&Os)&&0!==Fs?Fs&-Fs:null!==Eo.transition?(0===iu&&(iu=St()),iu):0!==(e=jt)?e:e=void 0===(e=window.event)?16:an(e.type)}function uu(e,t,n,r){if(50<ru)throw ru=0,au=null,Error(o(185));Ct(e,n,r),0!==(2&Os)&&e===Is||(e===Is&&(0===(2&Os)&&(Bs|=n),4===Us&&mu(e,Fs)),cu(e,r),1===n&&0===Os&&0===(1&t.mode)&&(Ys=ot()+500,Qa&&Ga()))}function cu(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-mt(o),l=1<<i,s=a[i];-1===s?0!==(l&n)&&0===(l&r)||(a[i]=kt(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}(e,t);var r=xt(e,e===Is?Fs:0);if(0===r)null!==n&&nt(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&nt(n),1===t)0===e.tag?function(e){Qa=!0,Ya(e)}(hu.bind(null,e)):Ya(hu.bind(null,e)),ma(function(){0===(6&Os)&&Ga()}),n=null;else{switch(Pt(r)){case 1:n=lt;break;case 4:n=st;break;case 16:default:n=ut;break;case 536870912:n=dt}n=Iu(n,du.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function du(e,t){if(ou=-1,iu=0,0!==(6&Os))throw Error(o(327));var n=e.callbackNode;if(Tu()&&e.callbackNode!==n)return null;var r=xt(e,e===Is?Fs:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=Su(e,r);else{t=r;var a=Os;Os|=2;var i=ku();for(Is===e&&Fs===t||(Gs=null,Ys=ot()+500,bu(e,t));;)try{Cu();break}catch(me){xu(e,me)}Oo(),Rs.current=i,Os=a,null!==As?t=0:(Is=null,Fs=0,t=Us)}if(0!==t){if(2===t&&(0!==(a=wt(e))&&(r=a,t=fu(e,a))),1===t)throw n=Ws,bu(e,0),mu(e,r),cu(e,ot()),n;if(6===t)mu(e,r);else{if(a=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var a=n[r],o=a.getSnapshot;a=a.value;try{if(!hr(o(),a))return!1}catch(l){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(a)&&(2===(t=Su(e,r))&&(0!==(i=wt(e))&&(r=i,t=fu(e,i))),1===t))throw n=Ws,bu(e,0),mu(e,r),cu(e,ot()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(o(345));case 2:case 5:Pu(e,Qs,Gs);break;case 3:if(mu(e,r),(130023424&r)===r&&10<(t=qs+500-ot())){if(0!==xt(e,0))break;if(((a=e.suspendedLanes)&r)!==r){lu(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=da(Pu.bind(null,e,Qs,Gs),t);break}Pu(e,Qs,Gs);break;case 4:if(mu(e,r),(4194240&r)===r)break;for(t=e.eventTimes,a=-1;0<r;){var l=31-mt(r);i=1<<l,(l=t[l])>a&&(a=l),r&=~i}if(r=a,10<(r=(120>(r=ot()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ns(r/1960))-r)){e.timeoutHandle=da(Pu.bind(null,e,Qs,Gs),r);break}Pu(e,Qs,Gs);break;default:throw Error(o(329))}}}return cu(e,ot()),e.callbackNode===n?du.bind(null,e):null}function fu(e,t){var n=Ks;return e.current.memoizedState.isDehydrated&&(bu(e,t).flags|=256),2!==(e=Su(e,t))&&(t=Qs,Qs=n,null!==t&&pu(t)),e}function pu(e){null===Qs?Qs=e:Qs.push.apply(Qs,e)}function mu(e,t){for(t&=~Vs,t&=~Bs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-mt(t),r=1<<n;e[n]=-1,t&=~r}}function hu(e){if(0!==(6&Os))throw Error(o(327));Tu();var t=xt(e,0);if(0===(1&t))return cu(e,ot()),null;var n=Su(e,t);if(0!==e.tag&&2===n){var r=wt(e);0!==r&&(t=r,n=fu(e,r))}if(1===n)throw n=Ws,bu(e,0),mu(e,t),cu(e,ot()),n;if(6===n)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Pu(e,Qs,Gs),cu(e,ot()),null}function gu(e,t){var n=Os;Os|=1;try{return e(t)}finally{0===(Os=n)&&(Ys=ot()+500,Qa&&Ga())}}function vu(e){null!==tu&&0===tu.tag&&0===(6&Os)&&Tu();var t=Os;Os|=1;var n=Ds.transition,r=jt;try{if(Ds.transition=null,jt=1,e)return e()}finally{jt=r,Ds.transition=n,0===(6&(Os=t))&&Ga()}}function yu(){Ms=$s.current,La($s)}function bu(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,fa(n)),null!==As)for(n=As.return;null!==n;){var r=n;switch(uo(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&Ua();break;case 3:oi(),La(Aa),La(Ia),di();break;case 5:li(r);break;case 4:oi();break;case 13:case 19:La(si);break;case 10:Io(r.type._context);break;case 22:case 23:yu()}n=n.return}if(Is=e,As=e=$u(e.current,null),Fs=Ms=t,Us=0,Ws=null,Vs=Bs=Hs=0,Qs=Ks=null,null!==$o){for(t=0;t<$o.length;t++)if(null!==(r=(n=$o[t]).interleaved)){n.interleaved=null;var a=r.next,o=n.pending;if(null!==o){var i=o.next;o.next=a,r.next=i}n.pending=r}$o=null}return e}function xu(e,t){for(;;){var n=As;try{if(Oo(),fi.current=il,yi){for(var r=hi.memoizedState;null!==r;){var a=r.queue;null!==a&&(a.pending=null),r=r.next}yi=!1}if(mi=0,vi=gi=hi=null,bi=!1,xi=0,Ls.current=null,null===n||null===n.return){Us=1,Ws=t,As=null;break}e:{var i=e,l=n.return,s=n,u=t;if(t=Fs,s.flags|=32768,null!==u&&"object"===typeof u&&"function"===typeof u.then){var c=u,d=s,f=d.tag;if(0===(1&d.mode)&&(0===f||11===f||15===f)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=El(l);if(null!==m){m.flags&=-257,Cl(m,l,s,0,t),1&m.mode&&Sl(i,c,t),u=c;var h=(t=m).updateQueue;if(null===h){var g=new Set;g.add(u),t.updateQueue=g}else h.add(u);break e}if(0===(1&t)){Sl(i,c,t),wu();break e}u=Error(o(426))}else if(po&&1&s.mode){var v=El(l);if(null!==v){0===(65536&v.flags)&&(v.flags|=256),Cl(v,l,s,0,t),So(vl(u,s));break e}}i=u=vl(u,s),4!==Us&&(Us=2),null===Ks?Ks=[i]:Ks.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t,Go(i,kl(0,u,t));break e;case 1:s=u;var y=i.type,b=i.stateNode;if(0===(128&i.flags)&&("function"===typeof y.getDerivedStateFromError||null!==b&&"function"===typeof b.componentDidCatch&&(null===Zs||!Zs.has(b)))){i.flags|=65536,t&=-t,i.lanes|=t,Go(i,wl(i,s,t));break e}}i=i.return}while(null!==i)}ju(n)}catch(x){t=x,As===n&&null!==n&&(As=n=n.return);continue}break}}function ku(){var e=Rs.current;return Rs.current=il,null===e?il:e}function wu(){0!==Us&&3!==Us&&2!==Us||(Us=4),null===Is||0===(268435455&Hs)&&0===(268435455&Bs)||mu(Is,Fs)}function Su(e,t){var n=Os;Os|=2;var r=ku();for(Is===e&&Fs===t||(Gs=null,bu(e,t));;)try{Eu();break}catch(a){xu(e,a)}if(Oo(),Os=n,Rs.current=r,null!==As)throw Error(o(261));return Is=null,Fs=0,Us}function Eu(){for(;null!==As;)_u(As)}function Cu(){for(;null!==As&&!rt();)_u(As)}function _u(e){var t=zs(e.alternate,e,Ms);e.memoizedProps=e.pendingProps,null===t?ju(e):As=t,Ls.current=null}function ju(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=es(n,t,Ms)))return void(As=n)}else{if(null!==(n=ts(n,t)))return n.flags&=32767,void(As=n);if(null===e)return Us=6,void(As=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(As=t);As=t=e}while(null!==t);0===Us&&(Us=5)}function Pu(e,t,n){var r=jt,a=Ds.transition;try{Ds.transition=null,jt=1,function(e,t,n,r){do{Tu()}while(null!==tu);if(0!==(6&Os))throw Error(o(327));n=e.finishedWork;var a=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-mt(n),o=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~o}}(e,i),e===Is&&(As=Is=null,Fs=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||eu||(eu=!0,Iu(ut,function(){return Tu(),null})),i=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||i){i=Ds.transition,Ds.transition=null;var l=jt;jt=1;var s=Os;Os|=4,Ls.current=null,function(e,t){if(sa=Xt,kr(e=xr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch(De){n=null;break e}var l=0,s=-1,u=-1,c=0,d=0,f=e,p=null;t:for(;;){for(var m;f!==n||0!==a&&3!==f.nodeType||(s=l+a),f!==i||0!==r&&3!==f.nodeType||(u=l+r),3===f.nodeType&&(l+=f.nodeValue.length),null!==(m=f.firstChild);)p=f,f=m;for(;;){if(f===e)break t;if(p===n&&++c===a&&(s=l),p===i&&++d===r&&(u=l),null!==(m=f.nextSibling))break;p=(f=p).parentNode}f=m}n=-1===s||-1===u?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ua={focusedElem:e,selectionRange:n},Xt=!1,os=t;null!==os;)if(e=(t=os).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,os=e;else for(;null!==os;){t=os;try{var h=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==h){var g=h.memoizedProps,v=h.memoizedState,y=t.stateNode,b=y.getSnapshotBeforeUpdate(t.elementType===t.type?g:cl(t.type,g),v);y.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var x=t.stateNode.containerInfo;1===x.nodeType?x.textContent="":9===x.nodeType&&x.documentElement&&x.removeChild(x.documentElement);break;default:throw Error(o(163))}}catch(De){Nu(t,t.return,De)}if(null!==(e=t.sibling)){e.return=t.return,os=e;break}os=t.return}h=ss,ss=!1}(e,n),Ss(n,e),wr(ua),Xt=!!sa,ua=sa=null,e.current=n,Cs(n,e,a),at(),Os=s,jt=l,Ds.transition=i}else e.current=n;if(eu&&(eu=!1,tu=e,nu=a),i=e.pendingLanes,0===i&&(Zs=null),function(e){if(pt&&"function"===typeof pt.onCommitFiberRoot)try{pt.onCommitFiberRoot(ft,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),cu(e,ot()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(Js)throw Js=!1,e=Xs,Xs=null,e;0!==(1&nu)&&0!==e.tag&&Tu(),i=e.pendingLanes,0!==(1&i)?e===au?ru++:(ru=0,au=e):ru=0,Ga()}(e,t,n,r)}finally{Ds.transition=a,jt=r}return null}function Tu(){if(null!==tu){var e=Pt(nu),t=Ds.transition,n=jt;try{if(Ds.transition=null,jt=16>e?16:e,null===tu)var r=!1;else{if(e=tu,tu=null,nu=0,0!==(6&Os))throw Error(o(331));var a=Os;for(Os|=4,os=e.current;null!==os;){var i=os,l=i.child;if(0!==(16&os.flags)){var s=i.deletions;if(null!==s){for(var u=0;u<s.length;u++){var c=s[u];for(os=c;null!==os;){var d=os;switch(d.tag){case 0:case 11:case 15:us(8,d,i)}var f=d.child;if(null!==f)f.return=d,os=f;else for(;null!==os;){var p=(d=os).sibling,m=d.return;if(fs(d),d===c){os=null;break}if(null!==p){p.return=m,os=p;break}os=m}}}var h=i.alternate;if(null!==h){var g=h.child;if(null!==g){h.child=null;do{var v=g.sibling;g.sibling=null,g=v}while(null!==g)}}os=i}}if(0!==(2064&i.subtreeFlags)&&null!==l)l.return=i,os=l;else e:for(;null!==os;){if(0!==(2048&(i=os).flags))switch(i.tag){case 0:case 11:case 15:us(9,i,i.return)}var y=i.sibling;if(null!==y){y.return=i.return,os=y;break e}os=i.return}}var b=e.current;for(os=b;null!==os;){var x=(l=os).child;if(0!==(2064&l.subtreeFlags)&&null!==x)x.return=l,os=x;else e:for(l=b;null!==os;){if(0!==(2048&(s=os).flags))try{switch(s.tag){case 0:case 11:case 15:cs(9,s)}}catch(w){Nu(s,s.return,w)}if(s===l){os=null;break e}var k=s.sibling;if(null!==k){k.return=s.return,os=k;break e}os=s.return}}if(Os=a,Ga(),pt&&"function"===typeof pt.onPostCommitFiberRoot)try{pt.onPostCommitFiberRoot(ft,e)}catch(w){}r=!0}return r}finally{jt=n,Ds.transition=t}}return!1}function zu(e,t,n){e=qo(e,t=kl(0,t=vl(n,t),1),1),t=lu(),null!==e&&(Ct(e,1,t),cu(e,t))}function Nu(e,t,n){if(3===e.tag)zu(e,e,n);else for(;null!==t;){if(3===t.tag){zu(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Zs||!Zs.has(r))){t=qo(t,e=wl(t,e=vl(n,e),1),1),e=lu(),null!==t&&(Ct(t,1,e),cu(t,e));break}}t=t.return}}function Ru(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=lu(),e.pingedLanes|=e.suspendedLanes&n,Is===e&&(Fs&n)===n&&(4===Us||3===Us&&(130023424&Fs)===Fs&&500>ot()-qs?bu(e,0):Vs|=n),cu(e,t)}function Lu(e,t){0===t&&(0===(1&e.mode)?t=1:(t=yt,0===(130023424&(yt<<=1))&&(yt=4194304)));var n=lu();null!==(e=Ho(e,t))&&(Ct(e,t,n),cu(e,n))}function Du(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Lu(e,n)}function Ou(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;null!==a&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(o(314))}null!==r&&r.delete(t),Lu(e,n)}function Iu(e,t){return tt(e,t)}function Au(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fu(e,t,n,r){return new Au(e,t,n,r)}function Mu(e){return!(!(e=e.prototype)||!e.isReactComponent)}function $u(e,t){var n=e.alternate;return null===n?((n=Fu(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Uu(e,t,n,r,a,i){var l=2;if(r=e,"function"===typeof e)Mu(e)&&(l=1);else if("string"===typeof e)l=5;else e:switch(e){case S:return Wu(n.children,a,i,t);case E:l=8,a|=8;break;case C:return(e=Fu(12,n,t,2|a)).elementType=C,e.lanes=i,e;case T:return(e=Fu(13,n,t,a)).elementType=T,e.lanes=i,e;case z:return(e=Fu(19,n,t,a)).elementType=z,e.lanes=i,e;case L:return Hu(n,a,i,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case _:l=10;break e;case j:l=9;break e;case P:l=11;break e;case N:l=14;break e;case R:l=16,r=null;break e}throw Error(o(130,null==e?e:typeof e,""))}return(t=Fu(l,n,t,a)).elementType=e,t.type=r,t.lanes=i,t}function Wu(e,t,n,r){return(e=Fu(7,e,r,t)).lanes=n,e}function Hu(e,t,n,r){return(e=Fu(22,e,r,t)).elementType=L,e.lanes=n,e.stateNode={isHidden:!1},e}function Bu(e,t,n){return(e=Fu(6,e,null,t)).lanes=n,e}function Vu(e,t,n){return(t=Fu(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ku(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Et(0),this.expirationTimes=Et(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Et(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Qu(e,t,n,r,a,o,i,l,s){return e=new Ku(e,t,n,l,s),1===t?(t=1,!0===o&&(t|=8)):t=0,o=Fu(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vo(o),e}function qu(e){if(!e)return Oa;e:{if(Ge(e=e._reactInternals)!==e||1!==e.tag)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if($a(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(o(171))}if(1===e.tag){var n=e.type;if($a(n))return Ha(e,n,t)}return t}function Yu(e,t,n,r,a,o,i,l,s){return(e=Qu(n,r,!0,e,0,o,0,l,s)).context=qu(null),n=e.current,(o=Qo(r=lu(),a=su(n))).callback=void 0!==t&&null!==t?t:null,qo(n,o,a),e.current.lanes=a,Ct(e,a,r),cu(e,r),e}function Gu(e,t,n,r){var a=t.current,o=lu(),i=su(a);return n=qu(n),null===t.context?t.context=n:t.pendingContext=n,(t=Qo(o,i)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=qo(a,t,i))&&(uu(e,a,i,o),Yo(e,a,i)),i}function Ju(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Xu(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Zu(e,t){Xu(e,t),(e=e.alternate)&&Xu(e,t)}zs=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Aa.current)jl=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return jl=!1,function(e,t,n){switch(t.tag){case 3:Al(t),wo();break;case 5:ii(t);break;case 1:$a(t.type)&&Ba(t);break;case 4:ai(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;Da(No,r._currentValue),r._currentValue=a;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Da(si,1&si.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Bl(e,t,n):(Da(si,1&si.current),null!==(e=Jl(e,t,n))?e.sibling:null);Da(si,1&si.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return Yl(e,t,n);t.flags|=128}if(null!==(a=t.memoizedState)&&(a.rendering=null,a.tail=null,a.lastEffect=null),Da(si,si.current),r)break;return null;case 22:case 23:return t.lanes=0,Rl(e,t,n)}return Jl(e,t,n)}(e,t,n);jl=0!==(131072&e.flags)}else jl=!1,po&&0!==(1048576&t.flags)&&lo(t,eo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Gl(e,t),e=t.pendingProps;var a=Ma(t,Ia.current);Fo(t,n),a=Ei(null,t,r,e,a,n);var i=Ci();return t.flags|=1,"object"===typeof a&&null!==a&&"function"===typeof a.render&&void 0===a.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,$a(r)?(i=!0,Ba(t)):i=!1,t.memoizedState=null!==a.state&&void 0!==a.state?a.state:null,Vo(t),a.updater=fl,t.stateNode=a,a._reactInternals=t,gl(t,r,e,n),t=Il(null,t,r,!0,i,n)):(t.tag=0,po&&i&&so(t),Pl(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Gl(e,t),e=t.pendingProps,r=(a=r._init)(r._payload),t.type=r,a=t.tag=function(e){if("function"===typeof e)return Mu(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===P)return 11;if(e===N)return 14}return 2}(r),e=cl(r,e),a){case 0:t=Dl(null,t,r,e,n);break e;case 1:t=Ol(null,t,r,e,n);break e;case 11:t=Tl(null,t,r,e,n);break e;case 14:t=zl(null,t,r,cl(r.type,e),n);break e}throw Error(o(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,Dl(e,t,r,a=t.elementType===r?a:cl(r,a),n);case 1:return r=t.type,a=t.pendingProps,Ol(e,t,r,a=t.elementType===r?a:cl(r,a),n);case 3:e:{if(Al(t),null===e)throw Error(o(387));r=t.pendingProps,a=(i=t.memoizedState).element,Ko(e,t),Jo(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated){if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,256&t.flags){t=Fl(e,t,r,n,a=vl(Error(o(423)),t));break e}if(r!==a){t=Fl(e,t,r,n,a=vl(Error(o(424)),t));break e}for(fo=va(t.stateNode.containerInfo.firstChild),co=t,po=!0,mo=null,n=zo(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(wo(),r===a){t=Jl(e,t,n);break e}Pl(e,t,r,n)}t=t.child}return t;case 5:return ii(t),null===e&&yo(t),r=t.type,a=t.pendingProps,i=null!==e?e.memoizedProps:null,l=a.children,ca(r,a)?l=null:null!==i&&ca(r,i)&&(t.flags|=32),Ll(e,t),Pl(e,t,l,n),t.child;case 6:return null===e&&yo(t),null;case 13:return Bl(e,t,n);case 4:return ai(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=To(t,null,r,n):Pl(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,Tl(e,t,r,a=t.elementType===r?a:cl(r,a),n);case 7:return Pl(e,t,t.pendingProps,n),t.child;case 8:case 12:return Pl(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,i=t.memoizedProps,l=a.value,Da(No,r._currentValue),r._currentValue=l,null!==i)if(hr(i.value,l)){if(i.children===a.children&&!Aa.current){t=Jl(e,t,n);break e}}else for(null!==(i=t.child)&&(i.return=t);null!==i;){var s=i.dependencies;if(null!==s){l=i.child;for(var u=s.firstContext;null!==u;){if(u.context===r){if(1===i.tag){(u=Qo(-1,n&-n)).tag=2;var c=i.updateQueue;if(null!==c){var d=(c=c.shared).pending;null===d?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}i.lanes|=n,null!==(u=i.alternate)&&(u.lanes|=n),Ao(i.return,n,t),s.lanes|=n;break}u=u.next}}else if(10===i.tag)l=i.type===t.type?null:i.child;else if(18===i.tag){if(null===(l=i.return))throw Error(o(341));l.lanes|=n,null!==(s=l.alternate)&&(s.lanes|=n),Ao(l,n,t),l=i.sibling}else l=i.child;if(null!==l)l.return=i;else for(l=i;null!==l;){if(l===t){l=null;break}if(null!==(i=l.sibling)){i.return=l.return,l=i;break}l=l.return}i=l}Pl(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,Fo(t,n),r=r(a=Mo(a)),t.flags|=1,Pl(e,t,r,n),t.child;case 14:return a=cl(r=t.type,t.pendingProps),zl(e,t,r,a=cl(r.type,a),n);case 15:return Nl(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:cl(r,a),Gl(e,t),t.tag=1,$a(r)?(e=!0,Ba(t)):e=!1,Fo(t,n),ml(t,r,a),gl(t,r,a,n),Il(null,t,r,!0,e,n);case 19:return Yl(e,t,n);case 22:return Rl(e,t,n)}throw Error(o(156,t.tag))};var ec="function"===typeof reportError?reportError:function(e){console.error(e)};function tc(e){this._internalRoot=e}function nc(e){this._internalRoot=e}function rc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function ac(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function oc(){}function ic(e,t,n,r,a){var o=n._reactRootContainer;if(o){var i=o;if("function"===typeof a){var l=a;a=function(){var e=Ju(i);l.call(e)}}Gu(t,i,e,a)}else i=function(e,t,n,r,a){if(a){if("function"===typeof r){var o=r;r=function(){var e=Ju(i);o.call(e)}}var i=Yu(t,r,e,0,null,!1,0,"",oc);return e._reactRootContainer=i,e[wa]=i.current,Gr(8===e.nodeType?e.parentNode:e),vu(),i}for(;a=e.lastChild;)e.removeChild(a);if("function"===typeof r){var l=r;r=function(){var e=Ju(s);l.call(e)}}var s=Qu(e,0,!1,null,0,!1,0,"",oc);return e._reactRootContainer=s,e[wa]=s.current,Gr(8===e.nodeType?e.parentNode:e),vu(function(){Gu(t,s,n,r)}),s}(n,t,e,a,r);return Ju(i)}nc.prototype.render=tc.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(o(409));Gu(e,t,null,null)},nc.prototype.unmount=tc.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;vu(function(){Gu(null,e,null,null)}),t[wa]=null}},nc.prototype.unstable_scheduleHydration=function(e){if(e){var t=Rt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ut.length&&0!==t&&t<Ut[n].priority;n++);Ut.splice(n,0,e),0===n&&Vt(e)}},Tt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=bt(t.pendingLanes);0!==n&&(_t(t,1|n),cu(t,ot()),0===(6&Os)&&(Ys=ot()+500,Ga()))}break;case 13:vu(function(){var t=Ho(e,1);if(null!==t){var n=lu();uu(t,e,1,n)}}),Zu(e,1)}},zt=function(e){if(13===e.tag){var t=Ho(e,134217728);if(null!==t)uu(t,e,134217728,lu());Zu(e,134217728)}},Nt=function(e){if(13===e.tag){var t=su(e),n=Ho(e,t);if(null!==n)uu(n,e,t,lu());Zu(e,t)}},Rt=function(){return jt},Lt=function(e,t){var n=jt;try{return jt=e,t()}finally{jt=n}},Pe=function(e,t,n){switch(t){case"input":if(X(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=Ta(r);if(!a)throw Error(o(90));Q(r),X(r,a)}}}break;case"textarea":oe(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},Ie=gu,Ae=vu;var lc={usingClientEntryPoint:!1,Events:[ja,Pa,Ta,Le,Oe,gu]},sc={findFiberByHostInstance:_a,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},uc={bundleType:sc.bundleType,version:sc.version,rendererPackageName:sc.rendererPackageName,rendererConfig:sc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:x.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Ze(e))?null:e.stateNode},findFiberByHostInstance:sc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var cc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cc.isDisabled&&cc.supportsFiber)try{ft=cc.inject(uc),pt=cc}catch(ue){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lc,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!rc(t))throw Error(o(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:w,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!rc(e))throw Error(o(299));var n=!1,r="",a=ec;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(a=t.onRecoverableError)),t=Qu(e,1,!1,null,0,n,0,r,a),e[wa]=t.current,Gr(8===e.nodeType?e.parentNode:e),new tc(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(o(188));throw e=Object.keys(e).join(","),Error(o(268,e))}return e=null===(e=Ze(t))?null:e.stateNode},t.flushSync=function(e){return vu(e)},t.hydrate=function(e,t,n){if(!ac(t))throw Error(o(200));return ic(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!rc(e))throw Error(o(405));var r=null!=n&&n.hydratedSources||null,a=!1,i="",l=ec;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(a=!0),void 0!==n.identifierPrefix&&(i=n.identifierPrefix),void 0!==n.onRecoverableError&&(l=n.onRecoverableError)),t=Yu(t,null,e,1,null!=n?n:null,a,0,i,l),e[wa]=t.current,Gr(e),r)for(e=0;e<r.length;e++)a=(a=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new nc(t)},t.render=function(e,t,n){if(!ac(t))throw Error(o(200));return ic(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!ac(e))throw Error(o(40));return!!e._reactRootContainer&&(vu(function(){ic(null,null,e,!1,function(){e._reactRootContainer=null,e[wa]=null})}),!0)},t.unstable_batchedUpdates=gu,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ac(n))throw Error(o(200));if(null==e||void 0===e._reactInternals)throw Error(o(38));return ic(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},391(e,t,n){var r=n(950);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},950(e,t,n){!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(730)},153(e,t,n){var r=n(43),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,o={},u=null,c=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,r)&&!s.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:a,type:e,key:u,ref:c,props:o,_owner:l.current}}t.Fragment=o,t.jsx=u,t.jsxs=u},202(e,t){var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}function y(){}function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=v.prototype;var x=b.prototype=new y;x.constructor=b,h(x,v.prototype),x.isPureReactComponent=!0;var k=Array.isArray,w=Object.prototype.hasOwnProperty,S={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,r){var a,o={},i=null,l=null;if(null!=t)for(a in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)w.call(t,a)&&!E.hasOwnProperty(a)&&(o[a]=t[a]);var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===o[a]&&(o[a]=s[a]);return{$$typeof:n,type:e,key:i,ref:l,props:o,_owner:S.current}}function _(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var j=/\/+/g;function P(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function T(e,t,a,o,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return i=i(s=e),e=""===o?"."+P(s,0):o,k(i)?(a="",null!=e&&(a=e.replace(j,"$&/")+"/"),T(i,t,a,"",function(e){return e})):null!=i&&(_(i)&&(i=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,a+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(j,"$&/")+"/")+e)),t.push(i)),1;if(s=0,o=""===o?".":o+":",k(e))for(var u=0;u<e.length;u++){var c=o+P(l=e[u],u);s+=T(l,t,a,c,i)}else if(c=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"===typeof c)for(e=c.call(e),u=0;!(l=e.next()).done;)s+=T(l=l.value,t,a,c=o+P(l,u++),i);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function z(e,t,n){if(null==e)return e;var r=[],a=0;return T(e,r,"","",function(e){return t.call(n,e,a++)}),r}function N(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var R={current:null},L={transition:null},D={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:L,ReactCurrentOwner:S};function O(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:z,forEach:function(e,t,n){z(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return z(e,function(){t++}),t},toArray:function(e){return z(e,function(e){return e})||[]},only:function(e){if(!_(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=a,t.Profiler=i,t.PureComponent=b,t.StrictMode=o,t.Suspense=c,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,t.act=O,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=h({},e.props),o=e.key,i=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,l=S.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)w.call(t,u)&&!E.hasOwnProperty(u)&&(a[u]=void 0===t[u]&&void 0!==s?s[u]:t[u])}var u=arguments.length-2;if(1===u)a.children=r;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];a.children=s}return{$$typeof:n,type:e.type,key:o,ref:i,props:a,_owner:l}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:N}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=L.transition;L.transition={};try{e()}finally{L.transition=t}},t.unstable_act=O,t.useCallback=function(e,t){return R.current.useCallback(e,t)},t.useContext=function(e){return R.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return R.current.useDeferredValue(e)},t.useEffect=function(e,t){return R.current.useEffect(e,t)},t.useId=function(){return R.current.useId()},t.useImperativeHandle=function(e,t,n){return R.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return R.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return R.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return R.current.useMemo(e,t)},t.useReducer=function(e,t,n){return R.current.useReducer(e,t,n)},t.useRef=function(e){return R.current.useRef(e)},t.useState=function(e){return R.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return R.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return R.current.useTransition()},t.version="18.3.1"},43(e,t,n){e.exports=n(202)},579(e,t,n){e.exports=n(153)},234(e,t){function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,a=e[r];if(!(0<o(a,t)))break e;e[r]=t,e[n]=a,n=r}}function r(e){return 0===e.length?null:e[0]}function a(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,a=e.length,i=a>>>1;r<i;){var l=2*(r+1)-1,s=e[l],u=l+1,c=e[u];if(0>o(s,n))u<a&&0>o(c,s)?(e[r]=c,e[u]=n,r=u):(e[r]=s,e[l]=n,r=l);else{if(!(u<a&&0>o(c,n)))break e;e[r]=c,e[u]=n,r=u}}}return t}function o(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var i=performance;t.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var u=[],c=[],d=1,f=null,p=3,m=!1,h=!1,g=!1,v="function"===typeof setTimeout?setTimeout:null,y="function"===typeof clearTimeout?clearTimeout:null,b="undefined"!==typeof setImmediate?setImmediate:null;function x(e){for(var t=r(c);null!==t;){if(null===t.callback)a(c);else{if(!(t.startTime<=e))break;a(c),t.sortIndex=t.expirationTime,n(u,t)}t=r(c)}}function k(e){if(g=!1,x(e),!h)if(null!==r(u))h=!0,L(w);else{var t=r(c);null!==t&&D(k,t.startTime-e)}}function w(e,n){h=!1,g&&(g=!1,y(_),_=-1),m=!0;var o=p;try{for(x(n),f=r(u);null!==f&&(!(f.expirationTime>n)||e&&!T());){var i=f.callback;if("function"===typeof i){f.callback=null,p=f.priorityLevel;var l=i(f.expirationTime<=n);n=t.unstable_now(),"function"===typeof l?f.callback=l:f===r(u)&&a(u),x(n)}else a(u);f=r(u)}if(null!==f)var s=!0;else{var d=r(c);null!==d&&D(k,d.startTime-n),s=!1}return s}finally{f=null,p=o,m=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var S,E=!1,C=null,_=-1,j=5,P=-1;function T(){return!(t.unstable_now()-P<j)}function z(){if(null!==C){var e=t.unstable_now();P=e;var n=!0;try{n=C(!0,e)}finally{n?S():(E=!1,C=null)}}else E=!1}if("function"===typeof b)S=function(){b(z)};else if("undefined"!==typeof MessageChannel){var N=new MessageChannel,R=N.port2;N.port1.onmessage=z,S=function(){R.postMessage(null)}}else S=function(){v(z,0)};function L(e){C=e,E||(E=!0,S())}function D(e,n){_=v(function(){e(t.unstable_now())},n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){h||m||(h=!0,L(w))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return r(u)},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,a,o){var i=t.unstable_now();switch("object"===typeof o&&null!==o?o="number"===typeof(o=o.delay)&&0<o?i+o:i:o=i,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:d++,callback:a,priorityLevel:e,startTime:o,expirationTime:l=o+l,sortIndex:-1},o>i?(e.sortIndex=o,n(c,e),null===r(u)&&e===r(c)&&(g?(y(_),_=-1):g=!0,D(k,o-i))):(e.sortIndex=l,n(u,e),h||m||(h=!0,L(w))),e},t.unstable_shouldYield=T,t.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}},853(e,t,n){e.exports=n(234)}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.p="/portfolio/",n.nc=void 0;var r=n(43),a=n(391),o=n(579);const i=(0,r.createContext)();function l(e){let{children:t}=e;const[n,a]=(0,r.useState)(()=>{const e=localStorage.getItem("iza-theme");return e?"dark"===e:window.matchMedia("(prefers-color-scheme: dark)").matches});(0,r.useEffect)(()=>{localStorage.setItem("iza-theme",n?"dark":"light"),document.documentElement.setAttribute("data-theme",n?"dark":"light")},[n]);return(0,o.jsx)(i.Provider,{value:{dark:n,toggle:()=>a(e=>!e)},children:t})}var s=function(){return s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},s.apply(this,arguments)};Object.create;function u(e,t,n){if(n||2===arguments.length)for(var r,a=0,o=t.length;a<o;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var c="-ms-",d="-moz-",f="-webkit-",p="comm",m="rule",h="decl",g="@keyframes",v=Math.abs,y=String.fromCharCode,b=Object.assign;function x(e){return e.trim()}function k(e,t){return(e=t.exec(e))?e[0]:e}function w(e,t,n){return e.replace(t,n)}function S(e,t,n){return e.indexOf(t,n)}function E(e,t){return 0|e.charCodeAt(t)}function C(e,t,n){return e.slice(t,n)}function _(e){return e.length}function j(e){return e.length}function P(e,t){return t.push(e),e}function T(e,t){return e.filter(function(e){return!k(e,t)})}var z=1,N=1,R=0,L=0,D=0,O="";function I(e,t,n,r,a,o,i,l){return{value:e,root:t,parent:n,type:r,props:a,children:o,line:z,column:N,length:i,return:"",siblings:l}}function A(e,t){return b(I("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function F(e){for(;e.root;)e=A(e.root,{children:[e]});P(e,e.siblings)}function M(){return D=L>0?E(O,--L):0,N--,10===D&&(N=1,z--),D}function $(){return D=L<R?E(O,L++):0,N++,10===D&&(N=1,z++),D}function U(){return E(O,L)}function W(){return L}function H(e,t){return C(O,e,t)}function B(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function V(e){return z=N=1,R=_(O=e),L=0,[]}function K(e){return O="",e}function Q(e){return x(H(L-1,G(91===e?e+2:40===e?e+1:e)))}function q(e){for(;(D=U())&&D<33;)$();return B(e)>2||B(D)>3?"":" "}function Y(e,t){for(;--t&&$()&&!(D<48||D>102||D>57&&D<65||D>70&&D<97););return H(e,W()+(t<6&&32==U()&&32==$()))}function G(e){for(;$();)switch(D){case e:return L;case 34:case 39:34!==e&&39!==e&&G(D);break;case 40:41===e&&G(e);break;case 92:$()}return L}function J(e,t){for(;$()&&e+D!==57&&(e+D!==84||47!==U()););return"/*"+H(t,L-1)+"*"+y(47===e?e:$())}function X(e){for(;!B(U());)$();return H(e,L)}function Z(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function ee(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case"@namespace":case h:return e.return=e.return||e.value;case p:return"";case g:return e.return=e.value+"{"+Z(e.children,r)+"}";case m:if(!_(e.value=e.props.join(",")))return""}return _(n=Z(e.children,r))?e.return=e.value+"{"+n+"}":""}function te(e,t,n){switch(function(e,t){return 45^E(e,0)?(((t<<2^E(e,0))<<2^E(e,1))<<2^E(e,2))<<2^E(e,3):0}(e,t)){case 5103:return f+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return f+e+e;case 4855:return f+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return d+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return f+e+d+e+c+e+e;case 5936:switch(E(e,t+11)){case 114:return f+e+c+w(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return f+e+c+w(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return f+e+c+w(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return f+e+c+e+e;case 6165:return f+e+c+"flex-"+e+e;case 5187:return f+e+w(e,/(\w+).+(:[^]+)/,f+"box-$1$2"+c+"flex-$1$2")+e;case 5443:return f+e+c+"flex-item-"+w(e,/flex-|-self/g,"")+(k(e,/flex-|baseline/)?"":c+"grid-row-"+w(e,/flex-|-self/g,""))+e;case 4675:return f+e+c+"flex-line-pack"+w(e,/align-content|flex-|-self/g,"")+e;case 5548:return f+e+c+w(e,"shrink","negative")+e;case 5292:return f+e+c+w(e,"basis","preferred-size")+e;case 6060:return f+"box-"+w(e,"-grow","")+f+e+c+w(e,"grow","positive")+e;case 4554:return f+w(e,/([^-])(transform)/g,"$1"+f+"$2")+e;case 6187:return w(w(w(e,/(zoom-|grab)/,f+"$1"),/(image-set)/,f+"$1"),e,"")+e;case 5495:case 3959:return w(e,/(image-set\([^]*)/,f+"$1$`$1");case 4968:return w(w(e,/(.+:)(flex-)?(.*)/,f+"box-pack:$3"+c+"flex-pack:$3"),/space-between/,"justify")+f+e+e;case 4200:if(!k(e,/flex-|baseline/))return c+"grid-column-align"+C(e,t)+e;break;case 2592:case 3360:return c+w(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,k(e.props,/grid-\w+-end/)})?~S(e+(n=n[t].value),"span",0)?e:c+w(e,"-start","")+e+c+"grid-row-span:"+(~S(n,"span",0)?k(n,/\d+/):+k(n,/\d+/)-+k(e,/\d+/))+";":c+w(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(e){return k(e.props,/grid-\w+-start/)})?e:c+w(w(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return w(e,/(.+)-inline(.+)/,f+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(_(e)-1-t>6)switch(E(e,t+1)){case 109:if(45!==E(e,t+4))break;case 102:return w(e,/(.+:)(.+)-([^]+)/,"$1"+f+"$2-$3$1"+d+(108==E(e,t+3)?"$3":"$2-$3"))+e;case 115:return~S(e,"stretch",0)?te(w(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return w(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,a,o,i,l){return c+n+":"+r+l+(a?c+n+"-span:"+(o?i:+i-+r)+l:"")+e});case 4949:if(121===E(e,t+6))return w(e,":",":"+f)+e;break;case 6444:switch(E(e,45===E(e,14)?18:11)){case 120:return w(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+f+(45===E(e,14)?"inline-":"")+"box$3$1"+f+"$2$3$1"+c+"$2box$3")+e;case 100:return w(e,":",":"+c)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return w(e,"scroll-","scroll-snap-")+e}return e}function ne(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case h:return void(e.return=te(e.value,e.length,n));case g:return Z([A(e,{value:w(e.value,"@","@"+f)})],r);case m:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,function(t){switch(k(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":F(A(e,{props:[w(t,/:(read-\w+)/,":-moz-$1")]})),F(A(e,{props:[t]})),b(e,{props:T(n,r)});break;case"::placeholder":F(A(e,{props:[w(t,/:(plac\w+)/,":"+f+"input-$1")]})),F(A(e,{props:[w(t,/:(plac\w+)/,":-moz-$1")]})),F(A(e,{props:[w(t,/:(plac\w+)/,c+"input-$1")]})),F(A(e,{props:[t]})),b(e,{props:T(n,r)})}return""})}}function re(e){return K(ae("",null,null,null,[""],e=V(e),0,[0],e))}function ae(e,t,n,r,a,o,i,l,s){for(var u=0,c=0,d=i,f=0,p=0,m=0,h=1,g=1,b=1,x=0,k="",j=a,T=o,z=r,N=k;g;)switch(m=x,x=$()){case 40:if(108!=m&&58==E(N,d-1)){-1!=S(N+=w(Q(x),"&","&\f"),"&\f",v(u?l[u-1]:0))&&(b=-1);break}case 34:case 39:case 91:N+=Q(x);break;case 9:case 10:case 13:case 32:N+=q(m);break;case 92:N+=Y(W()-1,7);continue;case 47:switch(U()){case 42:case 47:P(ie(J($(),W()),t,n,s),s),5!=B(m||1)&&5!=B(U()||1)||!_(N)||" "===C(N,-1,void 0)||(N+=" ");break;default:N+="/"}break;case 123*h:l[u++]=_(N)*b;case 125*h:case 59:case 0:switch(x){case 0:case 125:g=0;case 59+c:-1==b&&(N=w(N,/\f/g,"")),p>0&&(_(N)-d||0===h&&47===m)&&P(p>32?le(N+";",r,n,d-1,s):le(w(N," ","")+";",r,n,d-2,s),s);break;case 59:N+=";";default:if(P(z=oe(N,t,n,u,c,a,l,k,j=[],T=[],d,o),o),123===x)if(0===c)ae(N,t,z,z,j,o,d,l,T);else{switch(f){case 99:if(110===E(N,3))break;case 108:if(97===E(N,2))break;default:c=0;case 100:case 109:case 115:}c?ae(e,z,z,r&&P(oe(e,z,z,0,0,a,l,k,a,j=[],d,T),T),a,T,d,l,r?j:T):ae(N,z,z,z,[""],T,0,l,T)}}u=c=p=0,h=b=1,k=N="",d=i;break;case 58:d=1+_(N),p=m;default:if(h<1)if(123==x)--h;else if(125==x&&0==h++&&125==M())continue;switch(N+=y(x),x*h){case 38:b=c>0?1:(N+="\f",-1);break;case 44:l[u++]=(_(N)-1)*b,b=1;break;case 64:45===U()&&(N+=Q($())),f=U(),c=d=_(k=N+=X(W())),x++;break;case 45:45===m&&2==_(N)&&(h=0)}}return o}function oe(e,t,n,r,a,o,i,l,s,u,c,d){for(var f=a-1,p=0===a?o:[""],h=j(p),g=0,y=0,b=0;g<r;++g)for(var k=0,S=C(e,f+1,f=v(y=i[g])),E=e;k<h;++k)(E=x(y>0?p[k]+" "+S:w(S,/&\f/g,p[k])))&&(s[b++]=E);return I(e,t,n,0===a?m:l,s,u,c,d)}function ie(e,t,n,r){return I(e,t,n,p,y(D),C(e,2,-2),0,r)}function le(e,t,n,r,a){return I(e,t,n,h,C(e,0,r),C(e,r+1,-1),r,a)}var se={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ue="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",ce="active",de="data-styled-version",fe="6.3.11",pe="/*!sc*/\n",me="undefined"!=typeof window&&"undefined"!=typeof document,he=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),ge={};function ve(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var ye=new Map,be=new Map,xe=1,ke=function(e){if(ye.has(e))return ye.get(e);for(;be.has(xe);)xe++;var t=xe++;return ye.set(e,t),be.set(t,e),t},we=function(e,t){xe=t+1,ye.set(e,t),be.set(t,e)},Se=(new Set,Object.freeze([])),Ee=Object.freeze({});function Ce(e,t,n){return void 0===n&&(n=Ee),e.theme!==n.theme&&e.theme||t||n.theme}var _e=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),je=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Pe=/(^-|-$)/g;function Te(e){return e.replace(je,"-").replace(Pe,"")}var ze=/(a)(d)/gi,Ne=function(e){return String.fromCharCode(e+(e>25?39:97))};function Re(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Ne(t%52)+n;return(Ne(t%52)+n).replace(ze,"$1-$2")}var Le,De=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Oe=function(e){return De(5381,e)};function Ie(e){return Re(Oe(e)>>>0)}function Ae(e){return e.displayName||e.name||"Component"}function Fe(e){return"string"==typeof e&&!0}var Me="function"==typeof Symbol&&Symbol.for,$e=Me?Symbol.for("react.memo"):60115,Ue=Me?Symbol.for("react.forward_ref"):60112,We={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},He={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Be={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ve=((Le={})[Ue]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Le[$e]=Be,Le);function Ke(e){return("type"in(t=e)&&t.type.$$typeof)===$e?Be:"$$typeof"in e?Ve[e.$$typeof]:We;var t}var Qe=Object.defineProperty,qe=Object.getOwnPropertyNames,Ye=Object.getOwnPropertySymbols,Ge=Object.getOwnPropertyDescriptor,Je=Object.getPrototypeOf,Xe=Object.prototype;function Ze(e,t,n){if("string"!=typeof t){if(Xe){var r=Je(t);r&&r!==Xe&&Ze(e,r,n)}var a=qe(t);Ye&&(a=a.concat(Ye(t)));for(var o=Ke(e),i=Ke(t),l=0;l<a.length;++l){var s=a[l];if(!(s in He||n&&n[s]||i&&s in i||o&&s in o)){var u=Ge(t,s);try{Qe(e,s,u)}catch(e){}}}}return e}function et(e){return"function"==typeof e}function tt(e){return"object"==typeof e&&"styledComponentId"in e}function nt(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function rt(e,t){return e.join(t||"")}function at(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ot(e,t,n){if(void 0===n&&(n=!1),!n&&!at(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=ot(e[r],t[r]);else if(at(t))for(var r in t)e[r]=ot(e[r],t[r]);return e}function it(e,t){Object.defineProperty(e,"toString",{value:t})}var lt=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}return e.prototype.indexOfGroup=function(e){if(e===this._cGroup)return this._cIndex;var t=this._cIndex;if(e>this._cGroup)for(var n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,a=r;e>=a;)if((a<<=1)<0)throw ve(16,"".concat(e));this.groupSizes=new Uint32Array(a),this.groupSizes.set(n),this.length=a;for(var o=r;o<a;o++)this.groupSizes[o]=0}for(var i=this.indexOfGroup(e+1),l=0,s=(o=0,t.length);o<s;o++)this.tag.insertRule(i,t[o])&&(this.groupSizes[e]++,i++,l++);l>0&&this._cGroup>e&&(this._cIndex+=l)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var a=n;a<r;a++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),a=r+n,o=r;o<a;o++)t+=this.tag.getRule(o)+pe;return t},e}(),st="style[".concat(ue,"][").concat(de,'="').concat(fe,'"]'),ut=new RegExp("^".concat(ue,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ct=function(e){return"undefined"!=typeof ShadowRoot&&e instanceof ShadowRoot||"host"in e&&11===e.nodeType},dt=function(e){if(!e)return document;if(ct(e))return e;if("getRootNode"in e){var t=e.getRootNode();if(ct(t))return t}return document},ft=function(e,t,n){for(var r,a=n.split(","),o=0,i=a.length;o<i;o++)(r=a[o])&&e.registerName(t,r)},pt=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(pe),a=[],o=0,i=r.length;o<i;o++){var l=r[o].trim();if(l){var s=l.match(ut);if(s){var u=0|parseInt(s[1],10),c=s[2];0!==u&&(we(c,u),ft(e,c,s[3]),e.getTag().insertRules(u,a)),a.length=0}else a.push(l)}}},mt=function(e){for(var t=dt(e.options.target).querySelectorAll(st),n=0,r=t.length;n<r;n++){var a=t[n];a&&a.getAttribute(ue)!==ce&&(pt(e,a),a.parentNode&&a.parentNode.removeChild(a))}};function ht(){return n.nc}var gt=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(e){var t=Array.from(e.querySelectorAll("style[".concat(ue,"]")));return t[t.length-1]}(n),o=void 0!==a?a.nextSibling:null;r.setAttribute(ue,ce),r.setAttribute(de,fe);var i=ht();return i&&r.setAttribute("nonce",i),n.insertBefore(r,o),r},vt=function(){function e(e){this.element=gt(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){var t;if(e.sheet)return e.sheet;for(var n=null!==(t=e.getRootNode().styleSheets)&&void 0!==t?t:document.styleSheets,r=0,a=n.length;r<a;r++){var o=n[r];if(o.ownerNode===e)return o}throw ve(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),yt=function(){function e(e){this.element=gt(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),bt=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(e===this.length?this.rules.push(t):this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),xt=me,kt={isServer:!me,useCSSOMInjection:!he},wt=function(){function e(e,t,n){void 0===e&&(e=Ee),void 0===t&&(t={});var r=this;this.options=s(s({},kt),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&me&&xt&&(xt=!1,mt(this)),it(this,function(){return function(e){for(var t=e.getTag(),n=t.length,r="",a=function(n){var a=function(e){return be.get(e)}(n);if(void 0===a)return"continue";var o=e.names.get(a);if(void 0===o||!o.size)return"continue";var i=t.getGroup(n);if(0===i.length)return"continue";var l=ue+".g"+n+'[id="'+a+'"]',s="";o.forEach(function(e){e.length>0&&(s+=e+",")}),r+=i+l+'{content:"'+s+'"}'+pe},o=0;o<n;o++)a(o);return r}(r)})}return e.registerId=function(e){return ke(e)},e.prototype.rehydrate=function(){!this.server&&me&&mt(this)},e.prototype.reconstructWithOptions=function(t,n){void 0===n&&(n=!0);var r=new e(s(s({},this.options),t),this.gs,n&&this.names||void 0);return!this.server&&me&&t.target!==this.options.target&&dt(this.options.target)!==dt(t.target)&&mt(r),r},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new bt(n):t?new vt(n):new yt(n)}(this.options),new lt(e)));var e},e.prototype.hasNameForId=function(e,t){var n,r;return null!==(r=null===(n=this.names.get(e))||void 0===n?void 0:n.has(t))&&void 0!==r&&r},e.prototype.registerName=function(e,t){ke(e);var n=this.names.get(e);n?n.add(t):this.names.set(e,new Set([t]))},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(ke(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(ke(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),St=/&/g,Et=47,Ct=42;function _t(e){if(-1===e.indexOf("}"))return!1;for(var t=e.length,n=0,r=0,a=!1,o=0;o<t;o++){var i=e.charCodeAt(o);if(0!==r||a||i!==Et||e.charCodeAt(o+1)!==Ct)if(a)i===Ct&&e.charCodeAt(o+1)===Et&&(a=!1,o++);else if(34!==i&&39!==i||0!==o&&92===e.charCodeAt(o-1)){if(0===r)if(123===i)n++;else if(125===i&&--n<0)return!0}else 0===r?r=i:r===i&&(r=0);else a=!0,o++}return 0!==n||0!==r}function jt(e,t){return e.map(function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(e){return"".concat(t," ").concat(e)})),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=jt(e.children,t)),e})}function Pt(e){var t,n,r,a=void 0===e?Ee:e,o=a.options,i=void 0===o?Ee:o,l=a.plugins,s=void 0===l?Se:l,u=function(e,r,a){return a.startsWith(n)&&a.endsWith(n)&&a.replaceAll(n,"").length>0?".".concat(t):e},c=s.slice();c.push(function(e){e.type===m&&e.value.includes("&")&&(r||(r=new RegExp("\\".concat(n,"\\b"),"g")),e.props[0]=e.props[0].replace(St,n).replace(r,u))}),i.prefix&&c.push(ne),c.push(ee);var d,f=[],p=function(e){var t=j(e);return function(n,r,a,o){for(var i="",l=0;l<t;l++)i+=e[l](n,r,a,o)||"";return i}}(c.concat((d=function(e){return f.push(e)},function(e){e.root||(e=e.return)&&d(e)}))),h=function(e,a,o,l){void 0===a&&(a=""),void 0===o&&(o=""),void 0===l&&(l="&"),t=l,n=a,r=void 0;var s=function(e){if(!_t(e))return e;for(var t=e.length,n="",r=0,a=0,o=0,i=!1,l=0;l<t;l++){var s=e.charCodeAt(l);if(0!==o||i||s!==Et||e.charCodeAt(l+1)!==Ct)if(i)s===Ct&&e.charCodeAt(l+1)===Et&&(i=!1,l++);else if(34!==s&&39!==s||0!==l&&92===e.charCodeAt(l-1)){if(0===o)if(123===s)a++;else if(125===s){if(--a<0){for(var u=l+1;u<t;){var c=e.charCodeAt(u);if(59===c||10===c)break;u++}u<t&&59===e.charCodeAt(u)&&u++,a=0,l=u-1,r=u;continue}0===a&&(n+=e.substring(r,l+1),r=l+1)}else 59===s&&0===a&&(n+=e.substring(r,l+1),r=l+1)}else 0===o?o=s:o===s&&(o=0);else i=!0,l++}if(r<t){var d=e.substring(r);_t(d)||(n+=d)}return n}(function(e){if(-1===e.indexOf("//"))return e;for(var t=e.length,n=[],r=0,a=0,o=0,i=0;a<t;){var l=e.charCodeAt(a);if(34!==l&&39!==l||0!==a&&92===e.charCodeAt(a-1))if(0===o)if(l===Et&&a+1<t&&e.charCodeAt(a+1)===Ct){for(a+=2;a+1<t&&(e.charCodeAt(a)!==Ct||e.charCodeAt(a+1)!==Et);)a++;a+=2}else if(40===l&&a>=3&&108==(32|e.charCodeAt(a-1))&&114==(32|e.charCodeAt(a-2))&&117==(32|e.charCodeAt(a-3)))i=1,a++;else if(i>0)41===l?i--:40===l&&i++,a++;else if(l===Ct&&a+1<t&&e.charCodeAt(a+1)===Et)a>r&&n.push(e.substring(r,a)),r=a+=2;else if(l===Et&&a+1<t&&e.charCodeAt(a+1)===Et){for(a>r&&n.push(e.substring(r,a));a<t&&10!==e.charCodeAt(a);)a++;r=a}else a++;else a++;else 0===o?o=l:o===l&&(o=0),a++}return 0===r?e:(r<t&&n.push(e.substring(r)),n.join(""))}(e)),u=re(o||a?"".concat(o," ").concat(a," { ").concat(s," }"):s);return i.namespace&&(u=jt(u,i.namespace)),f=[],Z(u,p),f};return h.hash=s.length?s.reduce(function(e,t){return t.name||ve(15),De(e,t.name)},5381).toString():"",h}var Tt=new wt,zt=Pt(),Nt=r.createContext({shouldForwardProp:void 0,styleSheet:Tt,stylis:zt}),Rt=(Nt.Consumer,r.createContext(void 0));function Lt(){return r.useContext(Nt)}function Dt(e){if(!r.useMemo)return e.children;var t=Lt().styleSheet,n=r.useMemo(function(){var n=t;return e.sheet?n=e.sheet:e.target&&(n=n.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(n=n.reconstructWithOptions({useCSSOMInjection:!1})),n},[e.disableCSSOMInjection,e.sheet,e.target,t]),a=r.useMemo(function(){return Pt({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:e.stylisPlugins})},[e.enableVendorPrefixes,e.namespace,e.stylisPlugins]),o=r.useMemo(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:n,stylis:a}},[e.shouldForwardProp,n,a]);return r.createElement(Nt.Provider,{value:o},r.createElement(Rt.Provider,{value:a},e.children))}var Ot=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=zt);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,it(this,function(){throw ve(12,String(n.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=zt),this.name+e.hash},e}();function It(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||e in se||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var At=function(e){return e>="A"&&e<="Z"};function Ft(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;At(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Mt=function(e){return null==e||!1===e||""===e},$t=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!Mt(r)&&(Array.isArray(r)&&r.isCss||et(r)?t.push("".concat(Ft(n),":"),r,";"):at(r)?t.push.apply(t,u(u(["".concat(n," {")],$t(r),!1),["}"],!1)):t.push("".concat(Ft(n),": ").concat(It(n,r),";")))}return t};function Ut(e,t,n,r,a){if(void 0===a&&(a=[]),"string"==typeof e)return e&&a.push(e),a;if(Mt(e))return a;if(tt(e))return a.push(".".concat(e.styledComponentId)),a;var o;if(et(e))return!et(o=e)||o.prototype&&o.prototype.isReactComponent||!t?(a.push(e),a):Ut(e(t),t,n,r,a);if(e instanceof Ot)return n?(e.inject(n,r),a.push(e.getName(r))):a.push(e),a;if(at(e)){for(var i=$t(e),l=0;l<i.length;l++)a.push(i[l]);return a}if(!Array.isArray(e))return a.push(e.toString()),a;for(l=0;l<e.length;l++)Ut(e[l],t,n,r,a);return a}function Wt(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(et(n)&&!tt(n))return!1}return!0}var Ht=Oe(fe),Bt=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Wt(e),this.componentId=t,this.baseHash=De(Ht,t),this.baseStyle=n,wt.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n).className:"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=nt(r,this.staticRulesId);else{var a=rt(Ut(this.rules,e,t,n)),o=Re(De(this.baseHash,a)>>>0);if(!t.hasNameForId(this.componentId,o)){var i=n(a,".".concat(o),void 0,this.componentId);t.insertRules(this.componentId,o,i)}r=nt(r,o),this.staticRulesId=o}else{for(var l=De(this.baseHash,n.hash),s="",u=0;u<this.rules.length;u++){var c=this.rules[u];if("string"==typeof c)s+=c;else if(c){var d=rt(Ut(c,e,t,n));l=De(De(l,String(u)),d),s+=d}}if(s){var f=Re(l>>>0);if(!t.hasNameForId(this.componentId,f)){var p=n(s,".".concat(f),void 0,this.componentId);t.insertRules(this.componentId,f,p)}r=nt(r,f)}}return{className:r,css:"undefined"==typeof window?t.getTag().getGroup(ke(this.componentId)):""}},e}(),Vt=r.createContext(void 0);Vt.Consumer;var Kt={};new Set;function Qt(e,t,n){var a=tt(e),o=e,i=!Fe(e),l=t.attrs,u=void 0===l?Se:l,c=t.componentId,d=void 0===c?function(e,t){var n="string"!=typeof e?"sc":Te(e);Kt[n]=(Kt[n]||0)+1;var r="".concat(n,"-").concat(Ie(fe+n+Kt[n]));return t?"".concat(t,"-").concat(r):r}(t.displayName,t.parentComponentId):c,f=t.displayName,p=void 0===f?function(e){return Fe(e)?"styled.".concat(e):"Styled(".concat(Ae(e),")")}(e):f,m=t.displayName&&t.componentId?"".concat(Te(t.displayName),"-").concat(t.componentId):t.componentId||d,h=a&&o.attrs?o.attrs.concat(u).filter(Boolean):u,g=t.shouldForwardProp;if(a&&o.shouldForwardProp){var v=o.shouldForwardProp;if(t.shouldForwardProp){var y=t.shouldForwardProp;g=function(e,t){return v(e,t)&&y(e,t)}}else g=v}var b=new Bt(n,m,a?o.componentStyle:void 0);function x(e,t){return function(e,t,n){var a=e.attrs,o=e.componentStyle,i=e.defaultProps,l=e.foldedComponentIds,u=e.styledComponentId,c=e.target,d=r.useContext(Vt),f=Lt(),p=e.shouldForwardProp||f.shouldForwardProp,m=Ce(t,d,i)||Ee,h=function(e,t,n){for(var r,a=s(s({},t),{className:void 0,theme:n}),o=0;o<e.length;o+=1){var i=et(r=e[o])?r(a):r;for(var l in i)"className"===l?a.className=nt(a.className,i[l]):"style"===l?a.style=s(s({},a.style),i[l]):a[l]=i[l]}return"className"in t&&"string"==typeof t.className&&(a.className=nt(a.className,t.className)),a}(a,t,m),g=h.as||c,v={};for(var y in h)void 0===h[y]||"$"===y[0]||"as"===y||"theme"===y&&h.theme===m||("forwardedAs"===y?v.as=h.forwardedAs:p&&!p(y,g)||(v[y]=h[y]));var b=function(e,t){var n=Lt();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(o,h),x=b.className,k=nt(l,u);return x&&(k+=" "+x),h.className&&(k+=" "+h.className),v[Fe(g)&&!_e.has(g)?"class":"className"]=k,n&&(v.ref=n),(0,r.createElement)(g,v)}(k,e,t)}x.displayName=p;var k=r.forwardRef(x);return k.attrs=h,k.componentStyle=b,k.displayName=p,k.shouldForwardProp=g,k.foldedComponentIds=a?nt(o.foldedComponentIds,o.styledComponentId):"",k.styledComponentId=m,k.target=a?o.target:e,Object.defineProperty(k,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=a?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,a=t;r<a.length;r++)ot(e,a[r],!0);return e}({},o.defaultProps,e):e}}),it(k,function(){return".".concat(k.styledComponentId)}),i&&Ze(k,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),k}function qt(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n}var Yt=function(e){return Object.assign(e,{isCss:!0})};function Gt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(et(e)||at(e))return Yt(Ut(qt(Se,u([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?Ut(r):Yt(Ut(qt(r,t)))}function Jt(e,t,n){if(void 0===n&&(n=Ee),!t)throw ve(1,t);var r=function(r){for(var a=[],o=1;o<arguments.length;o++)a[o-1]=arguments[o];return e(t,n,Gt.apply(void 0,u([r],a,!1)))};return r.attrs=function(r){return Jt(e,t,s(s({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return Jt(e,t,s(s({},n),r))},r}var Xt=function(e){return Jt(Qt,e)},Zt=Xt;_e.forEach(function(e){Zt[e]=Xt(e)});var en=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Wt(e),wt.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var a=r(rt(Ut(this.rules,t,n,r)),""),o=this.componentId+e;n.insertRules(o,o,a)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&wt.registerId(this.componentId+e);var a=this.componentId+e;this.isStatic?n.hasNameForId(a,a)||this.createStyles(e,t,n,r):(this.removeStyles(e,n),this.createStyles(e,t,n,r))},e}();function tn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=rt(Gt.apply(void 0,u([e],t,!1))),a=Ie(r);return new Ot(a,r)}(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=ht(),r=rt([n&&'nonce="'.concat(n,'"'),"".concat(ue,'="true"'),"".concat(de,'="').concat(fe,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw ve(2);return e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)throw ve(2);var n=e.instance.toString();if(!n)return[];var a=((t={})[ue]="",t[de]=fe,t.dangerouslySetInnerHTML={__html:n},t),o=ht();return o&&(a.nonce=o),[r.createElement("style",s({},a,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new wt({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw ve(2);return r.createElement(Dt,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw ve(3)}})(),"__sc-".concat(ue,"__");const nn=(function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var a=Gt.apply(void 0,u([e],t,!1)),o="sc-global-".concat(Ie(JSON.stringify(a))),i=new en(a,o),l=new WeakMap,c=function(e){var t=Lt(),n=r.useContext(Vt),a=l.get(t.styleSheet);return void 0===a&&(a=t.styleSheet.allocateGSInstance(o),l.set(t.styleSheet,a)),("undefined"==typeof window||!t.styleSheet.server)&&d(a,e,t.styleSheet,n,t.stylis),r.useLayoutEffect(function(){return t.styleSheet.server||d(a,e,t.styleSheet,n,t.stylis),function(){var e;i.removeStyles(a,t.styleSheet),e=t.styleSheet.options.target,"undefined"!=typeof document&&(null!=e?e:document).querySelectorAll('style[data-styled-global="'.concat(o,'"]')).forEach(function(e){return e.remove()})}},[a,e,t.styleSheet,n,t.stylis]),null};function d(e,t,n,r,a){if(i.isStatic)i.renderStyles(e,ge,n,a);else{var o=s(s({},t),{theme:Ce(t,r,c.defaultProps)});i.renderStyles(e,o,n,a)}}return r.memo(c)})`
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
    --mono: 'DM Mono', monospace;
    --serif: 'DM Serif Display', serif;
    --sans: 'DM Sans', sans-serif;
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

  ${e=>{let{$dark:t}=e;return t?Gt`
          background: rgba(14, 11, 9, 0.6);
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
          backdrop-filter: blur(14px);
        `:Gt`
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
  padding: 0;
  transition: color 0.2s;
  color: ${e=>{let{$dark:t}=e;return t?"rgba(245, 240, 234, 0.5)":"var(--ink-soft)"}};

  &:hover {
    color: ${e=>{let{$dark:t}=e;return t?"#D62828":"var(--accent)"}};
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

    ${e=>{let{$themeDark:t}=e;return t?Gt`
            background: rgba(10, 8, 7, 0.98);
            backdrop-filter: blur(20px);
          `:Gt`
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
  color: var(--ink-soft);
  width: 100%;

  &:hover {
    color: var(--ink);
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
`,yn=Zt.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--ink-soft);
  transition: color 0.2s;

  &:hover {
    color: #d62828;
  }
`,bn=Zt.button`
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
`;function xn(){return(0,o.jsx)("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,o.jsx)("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"})})}function kn(){return(0,o.jsxs)("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,o.jsx)("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}),(0,o.jsx)("rect",{x:"2",y:"9",width:"4",height:"12"}),(0,o.jsx)("circle",{cx:"4",cy:"4",r:"2"})]})}function wn(e){let{size:t=17}=e;return(0,o.jsxs)("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,o.jsx)("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}),(0,o.jsx)("path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}),(0,o.jsx)("line",{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"})]})}function Sn(){return(0,o.jsx)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,o.jsx)("path",{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"})})}function En(){return(0,o.jsxs)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,o.jsx)("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),(0,o.jsx)("polyline",{points:"7 10 12 15 17 10"}),(0,o.jsx)("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]})}function Cn(){return(0,o.jsxs)("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,o.jsx)("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),(0,o.jsx)("polyline",{points:"15,3 21,3 21,9"}),(0,o.jsx)("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]})}function _n(){return(0,o.jsx)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,o.jsx)("path",{d:"M18 6 6 18M6 6l12 12"})})}function jn(){return(0,o.jsxs)("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,o.jsx)("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"}),(0,o.jsx)("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]})}function Pn(){return(0,o.jsxs)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,o.jsx)("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),(0,o.jsx)("polygon",{points:"22 2 15 22 11 13 2 9 22 2"})]})}function Tn(){return(0,o.jsxs)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,o.jsx)("circle",{cx:"12",cy:"12",r:"5"}),(0,o.jsx)("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),(0,o.jsx)("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),(0,o.jsx)("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),(0,o.jsx)("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),(0,o.jsx)("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),(0,o.jsx)("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),(0,o.jsx)("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),(0,o.jsx)("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]})}function zn(){return(0,o.jsx)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,o.jsx)("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})})}function Nn(e){let{page:t,onNavigate:n}=e;const[a,l]=(0,r.useState)(!1),{dark:s,toggle:u}=(0,r.useContext)(i),c="home"===t&&s,d=e=>{l(!1),n(e)};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(on,{$dark:c,children:[(0,o.jsx)(ln,{$dark:c,onClick:()=>d("home"),children:"iza.dev"}),(0,o.jsxs)(sn,{children:[(0,o.jsx)("li",{children:(0,o.jsx)(un,{$dark:c,onClick:()=>d("about"),children:"sobre"})}),(0,o.jsx)("li",{children:(0,o.jsx)(un,{$dark:c,onClick:()=>d("projects"),children:"projetos"})}),(0,o.jsx)("li",{children:(0,o.jsx)(un,{$dark:c,onClick:()=>d("contact"),children:"contato"})}),(0,o.jsx)(cn,{$dark:c}),(0,o.jsx)("li",{children:(0,o.jsx)(dn,{href:"https://github.com/doraalves",target:"_blank",rel:"noreferrer",$dark:c,children:(0,o.jsx)(xn,{})})}),(0,o.jsx)("li",{children:(0,o.jsx)(dn,{href:"https://www.linkedin.com/in/izadoraalves/",target:"_blank",rel:"noreferrer",$dark:c,children:(0,o.jsx)(kn,{})})}),(0,o.jsx)("li",{children:(0,o.jsx)(dn,{href:"https://www.instagram.com/izadoraaalves",target:"_blank",rel:"noreferrer",$dark:c,children:(0,o.jsx)(wn,{})})}),(0,o.jsx)(cn,{$dark:c}),(0,o.jsx)("li",{children:(0,o.jsx)(fn,{$dark:c,onClick:u,"aria-label":"Alternar tema",children:s?(0,o.jsx)(Tn,{}):(0,o.jsx)(zn,{})})})]}),(0,o.jsxs)(pn,{$dark:c,className:a?"open":"",onClick:()=>l(!a),"aria-label":"Menu",children:[(0,o.jsx)("span",{}),(0,o.jsx)("span",{}),(0,o.jsx)("span",{})]})]}),(0,o.jsxs)(mn,{$open:a,$themeDark:s,children:[(0,o.jsx)(hn,{onClick:()=>d("home"),children:"in\xedcio"}),(0,o.jsx)(hn,{onClick:()=>d("about"),children:"sobre"}),(0,o.jsx)(hn,{onClick:()=>d("projects"),children:"projetos"}),(0,o.jsx)(hn,{onClick:()=>d("contact"),children:"contato"}),(0,o.jsxs)(gn,{children:[(0,o.jsxs)(vn,{children:[(0,o.jsx)(yn,{href:"https://github.com/doraalves",target:"_blank",rel:"noreferrer",children:(0,o.jsx)(xn,{})}),(0,o.jsx)(yn,{href:"https://www.linkedin.com/in/izadoraalves/",target:"_blank",rel:"noreferrer",children:(0,o.jsx)(kn,{})}),(0,o.jsx)(yn,{href:"https://www.instagram.com/izadoraaalves",target:"_blank",rel:"noreferrer",children:(0,o.jsx)(wn,{})})]}),(0,o.jsxs)(bn,{onClick:u,children:[s?(0,o.jsx)(Tn,{}):(0,o.jsx)(zn,{}),s?"Claro":"Escuro"]})]})]})]})}const Rn=50;function Ln(){const e=(0,r.useRef)(null);return(0,r.useEffect)(()=>{const t=e.current,n=t.getContext("2d");let r,a,o,i;const l={x:-9999,y:-9999};function s(){r=t.width=window.innerWidth,a=t.height=window.innerHeight}function u(e,t){return e+Math.random()*(t-e)}function c(){const e=Math.max(80,Math.round(r*a/4e3));o=Array.from({length:e},()=>({x:Math.random()*r,y:Math.random()*a,vx:u(-.22,.22),vy:u(-.22,.22),r:u(1.2,2.6),base:u(.2,.6),alpha:0}))}const d=e=>{l.x=e.clientX,l.y=e.clientY},f=()=>{s(),c()};return window.addEventListener("mousemove",d),window.addEventListener("resize",f),s(),c(),function e(){n.clearRect(0,0,r,a);const t="dark"===document.documentElement.getAttribute("data-theme"),s=e=>`rgba(200,25,26,${e})`,u=t?e=>`rgba(245,240,234,${e})`:e=>`rgba(200,25,26,${e})`,c=e=>`rgba(214,40,40,${e})`,d=e=>`rgba(200,25,26,${e})`;for(let r=0;r<o.length;r++)for(let e=r+1;e<o.length;e++){const a=o[r],i=o[e],l=a.x-i.x,u=a.y-i.y,c=Math.sqrt(l*l+u*u);if(c<150){const e=(1-c/150)*(t?.15:.2);n.beginPath(),n.strokeStyle=s(e),n.lineWidth=.8,n.moveTo(a.x,a.y),n.lineTo(i.x,i.y),n.stroke()}}for(const i of o){const e=i.x-l.x,t=i.y-l.y,o=Math.sqrt(e*e+t*t);if(o<Rn&&o>0){const n=.065*(1-o/Rn);i.vx+=e/o*n,i.vy+=t/o*n,i.alpha=Math.min(1,i.alpha+.07)}else i.alpha+=.04*(i.base-i.alpha);i.vx*=.983,i.vy*=.983,i.x+=i.vx,i.y+=i.vy,i.x<0&&(i.x=r),i.x>r&&(i.x=0),i.y<0&&(i.y=a),i.y>a&&(i.y=0),n.beginPath(),n.arc(i.x,i.y,i.r,0,2*Math.PI),n.fillStyle=o<Rn?c(i.alpha):u(i.alpha),n.fill(),o<20&&(n.beginPath(),n.arc(i.x,i.y,3.5*i.r,0,2*Math.PI),n.fillStyle=d(.09*i.alpha),n.fill())}if(l.x>0&&l.x<r){const e=n.createRadialGradient(l.x,l.y,0,l.x,l.y,Rn);e.addColorStop(0,"rgba(200,25,26,0.08)"),e.addColorStop(1,"rgba(200,25,26,0)"),n.beginPath(),n.arc(l.x,l.y,Rn,0,2*Math.PI),n.fillStyle=e,n.fill()}i=requestAnimationFrame(e)}(),()=>{cancelAnimationFrame(i),window.removeEventListener("mousemove",d),window.removeEventListener("resize",f)}},[]),(0,o.jsx)("canvas",{ref:e,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",zIndex:0,display:"block"}})}const Dn=tn`
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
`,On=tn`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.8); }
`,In=Zt.div`
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 600px;
  overflow: hidden;
  transition: background 0.3s;

  /* Light: fundo claro quente */
  background: #f0ebe3;

  /* Dark: fundo escuro */
  [data-theme="dark"] & {
    background: #0e0b09;
  }
`,An=Zt.div`
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
`,Fn=Zt.div`
  max-width: 660px;
`,Mn=Zt.p`
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

  &::before,
  &::after {
    content: "";
    width: 2rem;
    height: 1px;
    background: var(--accent);
  }
`,$n=Zt.h1`
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
`,Un=Zt.p`
  font-size: 1rem;
  max-width: 50ch;
  margin: 0 auto 2.5rem;
  font-weight: 300;
  line-height: 1.85;
  color: var(--ink-soft);

  [data-theme="dark"] & {
    color: rgba(245, 240, 234, 0.5);
  }
`,Wn=Zt.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`,Hn=Zt.button`
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
  transition: all 0.2s;

  &:hover {
    background: #a01415;
    transform: translateY(-2px);
  }
`,Bn=Zt.button`
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
  transition: all 0.2s;

  &:hover {
    border-color: var(--ink);
    transform: translateY(-2px);
  }

  [data-theme="dark"] & {
    color: rgba(245, 240, 234, 0.8);
    border-color: rgba(245, 240, 234, 0.2);

    &:hover {
      border-color: rgba(245, 240, 234, 0.6);
      color: white;
    }
  }
`,Vn=Zt.div`
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
`,Kn=Zt.span`
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
`,Qn=Zt.span`
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
`,qn=Zt.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #5ebb7c;
  animation: ${On} 2s infinite;
  opacity: 1 !important;
`;function Yn(e){let{onNavigate:t}=e;return(0,o.jsxs)(In,{children:[(0,o.jsx)(Ln,{}),(0,o.jsx)(An,{children:(0,o.jsxs)(Fn,{children:[(0,o.jsx)(Mn,{children:"Desenvolvedora Full Stack"}),(0,o.jsxs)($n,{children:["Izadora",(0,o.jsx)("br",{}),(0,o.jsx)("em",{children:"Alves"})]}),(0,o.jsx)(Un,{children:"Construo experi\xeancias digitais com c\xf3digo limpo e design pensado. Da interface ao back-end, transformo ideias em produtos que funcionam de verdade."}),(0,o.jsxs)(Wn,{children:[(0,o.jsx)(Hn,{onClick:()=>t("projects"),children:"Ver projetos \u2192"}),(0,o.jsx)(Bn,{onClick:()=>t("contact"),children:"Entrar em contato"})]})]})}),(0,o.jsxs)(Vn,{children:[(0,o.jsx)(Kn,{children:"S\xe3o Gon\xe7alo \xb7 RJ"}),(0,o.jsxs)(Qn,{children:[(0,o.jsx)(qn,{}),"dispon\xedvel para projetos"]})]})]})}const Gn=tn`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`,Jn=tn`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.8); }
`,Xn=Zt.div`
  background: var(--bg);
  min-height: 100vh;
  padding-top: 5rem;
  animation: ${Gn} 0.4s ease both;
`,Zn=Zt.section`
  padding: 4.5rem 3rem;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`,er=Zt.div`
  margin-bottom: 3rem;
`,tr=Zt.p`
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
`,nr=Zt.h2`
  font-family: var(--serif);
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  line-height: 1.1;
  color: var(--ink);

  em {
    font-style: italic;
    color: var(--accent);
  }
`,rr=Zt.div`
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`,ar=Zt.p`
  font-size: 1rem;
  color: var(--ink-soft);
  font-weight: 300;
  line-height: 1.8;
  margin-bottom: 1.75rem;

  strong {
    color: var(--ink);
    font-weight: 500;
  }
`,or=Zt.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-top: 2rem;
`,ir=Zt.a`
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
  cursor: pointer;
  border: none;
  background: var(--accent);
  color: white;
  transition: all 0.2s;

  &:hover {
    background: #a01415;
    transform: translateY(-2px);
  }
`,lr=Zt.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-top: 1.75rem;
`,sr=Zt.span`
  font-family: var(--mono);
  font-size: 0.7rem;
  padding: 0.3rem 0.75rem;
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
`,ur=Zt.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
`,cr=Zt.div`
  padding-left: 1.4rem;
  border-left: 2px solid var(--line);
  background: transparent;
  transition: border-color 0.2s;

  &:hover {
    border-color: var(--accent);
  }
`,dr=Zt.p`
  font-family: var(--mono);
  font-size: 0.68rem;
  letter-spacing: 0.1em;
  color: var(--accent);
  text-transform: uppercase;
  margin-bottom: 0.25rem;
`,fr=Zt.p`
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--ink);
  margin-bottom: 0.2rem;
`,pr=Zt.p`
  font-family: var(--mono);
  font-size: 0.78rem;
  color: var(--ink-soft);
  margin-bottom: 0.5rem;
`,mr=Zt.p`
  font-size: 0.88rem;
  color: var(--ink-soft);
  font-weight: 300;
  line-height: 1.6;
`,hr=Zt.section`
  position: relative;
  overflow: hidden;
  background: #0e0b09;
  padding: 5rem 3rem;

  @media (max-width: 768px) {
    padding: 3.5rem 1.5rem;
  }
`,gr=Zt.div`
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  opacity: 0.1;
  pointer-events: none;
  filter: blur(2px) saturate(0.6);
`,vr=Zt.div`
  background-image: url(${e=>{let{$src:t}=e;return t}});
  background-size: cover;
  background-position: center;
`,yr=Zt.div`
  position: relative;
  z-index: 2;
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`,br=Zt.div``,xr=Zt.p`
  font-family: var(--mono);
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #d62828;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.7rem;

  &::before {
    content: "";
    width: 1.5rem;
    height: 1px;
    background: #d62828;
  }
`,kr=Zt.h2`
  font-family: var(--serif);
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  line-height: 1.1;
  color: white;
  margin-bottom: 1.25rem;

  em {
    font-style: italic;
    color: #d62828;
  }
`,wr=Zt.p`
  font-size: 1rem;
  color: rgba(245, 240, 234, 0.55);
  font-weight: 300;
  line-height: 1.8;
  margin-bottom: 2rem;
`,Sr=Zt.a`
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
  background: transparent;
  color: rgba(245, 240, 234, 0.8);
  border: 1.5px solid rgba(245, 240, 234, 0.25);
  transition: all 0.2s;

  &:hover {
    border-color: #d62828;
    color: #d62828;
    transform: translateY(-2px);
  }
`,Er=Zt.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 0.75rem;
`,Cr=Zt.div`
  border-radius: 3px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: transform 0.3s, border-color 0.3s;
  cursor: pointer;

  /* First child spans both columns and is taller */
  &:first-child {
    grid-column: 1 / -1;
    aspect-ratio: 1 / 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.03);
  }

  /* Second and third are square */
  &:not(:first-child) {
    aspect-ratio: 1 / 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform 0.4s ease;
  }

  /* Second and third use cover */
  &:not(:first-child) img {
    object-fit: cover;
  }

  &:hover {
    border-color: rgba(214, 40, 40, 0.5);
    transform: scale(1.02);

    img {
      transform: scale(1.06);
    }
  }
`,_r=Zt.footer`
  padding: 1.75rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--line);
  background: var(--bg);
  transition: background 0.3s;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.85rem;
    text-align: center;
    padding: 1.75rem 1.5rem;
  }
`,jr=Zt.span`
  font-family: var(--mono);
  font-size: 0.7rem;
  color: var(--ink-soft);
`,Pr=Zt.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
  animation: ${Jn} 2s infinite;
`,Tr=n.p+"static/media/billieInsta.11f0210dc78db5b1b1d3.jpg",zr=n.p+"static/media/rihannaInsta.a02b0ea0d3c204dd702e.jpg",Nr=n.p+"static/media/Brunao2.fa48479d06adba9c71f8.jpg",Rr=n.p+"static/media/p.gleiInsta.99b7321615f3070fbbfc.jpg",Lr=n.p+"static/media/p_rafael.6143b0601933634d01a5.jpg",Dr=n.p+"static/media/post-instaWA.063d10a421917257e0de.jpg",Or=n.p+"static/media/p-v-a4-musica-playlist.cc9e225974c56d0a8c97.jpg",Ir=n.p+"static/media/demi-rockinrio.37975ed716d8c7b13221.png",Ar=n.p+"static/media/Luane__1_.08a96fce49193b56d813.png",Fr=n.p+"static/media/curriculo-izadora.47e7e5330fa53f188fac.pdf",Mr=["React","Vue.js","Django","Node.js","p5.js","JavaScript","HTML/CSS","Python","Docker","Figma","WordPress"],$r=[{period:"Jan 2025 \u2014 presente",role:"Bolsista \u2014 Apoio T\xe9cnico & Pesquisa",company:"ESDI / UERJ \u2014 MediaLAB",desc:"Apoio em aulas de programa\xe7\xe3o criativa com p5.js, prototipagem em realidade virtual (Meta Quest 3) e instala\xe7\xf5es interativas na fronteira entre arte, design e tecnologia."},{period:"Jan 2023 \u2014 Jul 2023",role:"Desenvolvedora de Software J\xfanior",company:"Americanas S.A",desc:"Desenvolvimento de solu\xe7\xf5es internas, redesenho de interfaces UX/UI e cria\xe7\xe3o de sistema de monitoramento de equipe em tempo real. Atua\xe7\xe3o em squads \xe1geis com Scrum e Jira."},{period:"Jul 2022 \u2014 Dez 2022",role:"Estagi\xe1ria em Desenvolvimento de Software",company:"Americanas S.A",desc:"Atua\xe7\xe3o em 5 equipes estrat\xe9gicas desenvolvendo dashboards, sistemas de pedidos e APIs RESTful com ReactJS, Node.js e Django."},{period:"Jan 2016 \u2014 Jul 2022",role:"Gradua\xe7\xe3o em Ci\xeancia da Computa\xe7\xe3o",company:"Universidade Veiga de Almeida",desc:"Forma\xe7\xe3o em Ci\xeancia da Computa\xe7\xe3o com foco em desenvolvimento de software e sistemas."}],Ur=[{src:Tr,alt:"Ilustra\xe7\xe3o Billie Eilish"},{src:zr,alt:"Ilustra\xe7\xe3o Rihanna"},{src:Nr,alt:"Ilustra\xe7\xe3o Brun\xe3o"}],Wr=[Dr,Lr,Rr,Ir,Ar,Or];function Hr(){const e=(new Date).getFullYear();return(0,o.jsxs)(Xn,{children:[(0,o.jsxs)(Zn,{children:[(0,o.jsxs)(er,{children:[(0,o.jsx)(tr,{children:"sobre mim"}),(0,o.jsxs)(nr,{children:["C\xf3digo, design",(0,o.jsx)("br",{}),"e ",(0,o.jsx)("em",{children:"criatividade"})]})]}),(0,o.jsxs)(rr,{children:[(0,o.jsxs)("div",{children:[(0,o.jsxs)(ar,{children:["Sou desenvolvedora Full Stack com passagem por grandes empresas e projetos experimentais. Atualmente, combino minha experi\xeancia t\xe9cnica com ",(0,o.jsx)("strong",{children:"pesquisa em arte e tecnologia"})," no MediaLAB da ESDI/UERJ, desenvolvendo instala\xe7\xf5es interativas e projetos em realidade virtual."]}),(0,o.jsxs)(ar,{children:["Tenho facilidade em trabalhar em"," ",(0,o.jsx)("strong",{children:"times multidisciplinares"})," e gosto de resolver problemas complexos com solu\xe7\xf5es simples \u2014 seja refatorando c\xf3digo legado ou desenhando uma nova interface do zero."]}),(0,o.jsx)(lr,{children:Mr.map(e=>(0,o.jsx)(sr,{children:e},e))}),(0,o.jsx)(or,{children:(0,o.jsxs)(ir,{href:Fr,download:"curriculo-izadora.pdf",children:[(0,o.jsx)(En,{})," Baixar curr\xedculo"]})})]}),(0,o.jsx)(ur,{children:$r.map(e=>(0,o.jsxs)(cr,{children:[(0,o.jsx)(dr,{children:e.period}),(0,o.jsx)(fr,{children:e.role}),(0,o.jsx)(pr,{children:e.company}),(0,o.jsx)(mr,{children:e.desc})]},e.period))})]})]}),(0,o.jsxs)(hr,{children:[(0,o.jsx)(gr,{children:Wr.map((e,t)=>(0,o.jsx)(vr,{$src:e},t))}),(0,o.jsxs)(yr,{children:[(0,o.jsxs)(br,{children:[(0,o.jsx)(xr,{children:"ilustra\xe7\xe3o"}),(0,o.jsxs)(kr,{children:["Al\xe9m do c\xf3digo,",(0,o.jsx)("br",{}),"tamb\xe9m ",(0,o.jsx)("em",{children:"desenho"})]}),(0,o.jsx)(wr,{children:"Sou ilustradora digital e uso a arte como forma de express\xe3o criativa. Retratos, personagens e composi\xe7\xf5es digitais \u2014 cada tra\xe7o conta uma hist\xf3ria."}),(0,o.jsxs)(Sr,{href:"https://www.instagram.com/ilustradoradora",target:"_blank",rel:"noreferrer",children:[(0,o.jsx)(wn,{size:15})," @ilustradoradora"]})]}),(0,o.jsx)(Er,{children:Ur.map((e,t)=>(0,o.jsx)(Cr,{children:(0,o.jsx)("img",{src:e.src,alt:e.alt})},t))})]})]}),(0,o.jsxs)(_r,{children:[(0,o.jsxs)(jr,{children:["\xa9 ",e," Izadora Alves \u2014 S\xe3o Gon\xe7alo, RJ"]}),(0,o.jsx)(Pr,{}),(0,o.jsx)(jr,{children:"feito com \u2665"})]})]})}const Br=tn`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`,Vr=tn`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.8); }
`,Kr=Zt.div`
  background: var(--bg);
  min-height: 100vh;
  padding-top: 5rem;
  animation: ${Br} 0.4s ease both;
  transition: background 0.3s;
`,Qr=Zt.div`
  padding: 4.5rem 3rem;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`,qr=Zt.div`
  margin-bottom: 3rem;
`,Yr=Zt.p`
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
`,Gr=Zt.h2`
  font-family: var(--serif);
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  line-height: 1.1;
  color: var(--ink);

  em {
    font-style: italic;
    color: var(--accent);
  }
`,Jr=Zt.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`,Xr=Zt.div`
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

    &::before {
      height: 100%;
    }
  }
`,Zr=Zt.p`
  font-family: var(--mono);
  font-size: 0.68rem;
  color: var(--ink-soft);
  letter-spacing: 0.12em;
  margin-bottom: 1.25rem;
  opacity: 0.5;
`,ea=Zt.h3`
  font-family: var(--serif);
  font-size: 1.3rem;
  color: var(--ink);
  margin-bottom: 0.65rem;
  line-height: 1.2;
`,ta=Zt.p`
  font-size: 0.88rem;
  color: var(--ink-soft);
  font-weight: 300;
  line-height: 1.7;
  margin-bottom: 1.25rem;
`,na=Zt.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
`,ra=Zt.span`
  font-family: var(--mono);
  font-size: 0.65rem;
  padding: 0.22rem 0.55rem;
  border: 1px solid var(--line);
  border-radius: 2px;
  color: var(--ink-soft);
`,aa=Zt.p`
  font-family: var(--mono);
  font-size: 0.63rem;
  color: var(--ink-soft);
  opacity: 0.4;
  margin-top: 1.1rem;
  transition: all 0.2s;

  ${Xr}:hover & {
    color: var(--accent);
    opacity: 1;
  }
`,oa=Zt.footer`
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
`,ia=Zt.span`
  font-family: var(--mono);
  font-size: 0.7rem;
  color: var(--ink-soft);
`,la=Zt.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
  animation: ${Vr} 2s infinite;
`;var sa=n(950);const ua=Zt.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background: rgba(10, 8, 7, 0.92);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  opacity: ${e=>{let{$open:t}=e;return t?1:0}};
  pointer-events: ${e=>{let{$open:t}=e;return t?"all":"none"}};
  transition: opacity 0.3s;

  /* Mobile: scroll vertical, modal no topo com padding */
  display: block;
  padding: 5rem 1rem 3rem;

  @media (min-width: 769px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
  }
`,ca=Zt.div`
  background: #1e1a17;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  width: 100%;
  max-width: 580px;
  margin: 0 auto;
  transform: ${e=>{let{$open:t}=e;return t?"translateY(0) scale(1)":"translateY(24px) scale(0.97)"}};
  transition: transform 0.3s;

  @media (min-width: 769px) {
    max-height: 88vh;
    overflow-y: auto;
  }
`,da=Zt.div`
  padding: 1.75rem 1.75rem 1.1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
`,fa=Zt.p`
  font-family: var(--mono);
  font-size: 0.66rem;
  color: #d62828;
  letter-spacing: 0.15em;
  margin-bottom: 0.45rem;
`,pa=Zt.h2`
  font-family: var(--serif);
  font-size: 1.5rem;
  color: white;
  line-height: 1.15;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`,ma=Zt.button`
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  width: 36px;
  height: 36px;
  min-width: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.5);
  flex-shrink: 0;
  transition: all 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.12);
    color: white;
  }
`,ha=Zt.div`
  padding: 1.5rem 1.75rem;

  @media (max-width: 768px) {
    padding: 1.25rem;
  }
`,ga=Zt.p`
  font-size: 0.92rem;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 300;
  line-height: 1.8;
  margin-bottom: 1.5rem;
`,va=Zt.p`
  font-family: var(--mono);
  font-size: 0.66rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.3);
  margin-bottom: 0.65rem;
`,ya=Zt.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`,ba=Zt.span`
  font-family: var(--mono);
  font-size: 0.7rem;
  padding: 0.28rem 0.7rem;
  border: 1px solid rgba(200, 25, 26, 0.35);
  border-radius: 2px;
  color: #d62828;
`,xa=Zt.div`
  padding: 1.1rem 1.75rem 1.75rem;
  display: flex;
  gap: 0.65rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    padding: 1rem 1.25rem 1.5rem;
  }
`,ka=Zt.a`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.7rem 1.4rem;
  font-family: var(--mono);
  font-size: 0.75rem;
  text-decoration: none;
  border-radius: 2px;
  transition: all 0.2s;
  cursor: pointer;

  ${e=>{let{$ghost:t}=e;return t?"\n    border: 1px solid rgba(255,255,255,0.15);\n    color: rgba(255,255,255,0.6);\n    &:hover { border-color: rgba(255,255,255,0.35); color: white; transform: translateY(-2px); }\n  ":"\n    background: var(--accent);\n    color: white;\n    &:hover { background: #A01415; transform: translateY(-2px); }\n  "}}
`,wa=Zt.span`
  font-family: var(--mono);
  font-size: 0.73rem;
  color: rgba(255, 255, 255, 0.25);
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;function Sa(e){let{project:t,onClose:n}=e;const a=!!t,i=(0,r.useRef)(null);(0,r.useEffect)(()=>{const e=e=>{"Escape"===e.key&&n()};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[n]),(0,r.useEffect)(()=>(a?(document.body.style.overflow="hidden",document.body.style.position="fixed",document.body.style.width="100%",requestAnimationFrame(()=>{i.current&&(i.current.scrollTop=0)})):(document.body.style.overflow="",document.body.style.position="",document.body.style.width=""),()=>{document.body.style.overflow="",document.body.style.position="",document.body.style.width=""}),[a]);const l=(0,o.jsx)(ua,{$open:a,onClick:e=>{e.target===i.current&&n()},ref:i,children:(0,o.jsx)(ca,{$open:a,children:t&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(da,{children:[(0,o.jsxs)("div",{children:[(0,o.jsx)(fa,{children:t.num}),(0,o.jsx)(pa,{children:t.title})]}),(0,o.jsx)(ma,{onClick:n,children:(0,o.jsx)(_n,{})})]}),(0,o.jsxs)(ha,{children:[(0,o.jsx)(ga,{children:t.desc}),(0,o.jsx)(va,{children:"tecnologias"}),(0,o.jsx)(ya,{children:t.stack.map(e=>(0,o.jsx)(ba,{children:e},e))})]}),(0,o.jsxs)(xa,{children:[t.link&&(0,o.jsxs)(ka,{href:t.link,target:"_blank",rel:"noreferrer",children:[(0,o.jsx)(Cn,{})," Ver projeto"]}),t.github&&(0,o.jsxs)(ka,{href:t.github,target:"_blank",rel:"noreferrer",$ghost:!0,children:[(0,o.jsx)(xn,{})," GitHub"]}),!t.link&&!t.github&&(0,o.jsxs)(wa,{children:[(0,o.jsx)(jn,{})," projeto interno \u2014 link n\xe3o dispon\xedvel"]})]})]})})});return sa.createPortal(l,document.body)}const Ea=[{num:"001",title:"Calculadora",shortDesc:"Cria\xe7\xe3o de uma calculadora inspirada na calculadora do iPhone.",desc:"Calculadora digital desenvolvida com HTML, SCSS e JavaScript puro. Interface inspirada na calculadora nativa do iOS, com suporte completo a teclado, hist\xf3rico de express\xf5es, tratamento de erros e arredondamento de ponto flutuante.",stack:["JavaScript","HTML","CSS"],link:"https://doraalves.github.io/calculadora/",github:"https://github.com/doraalves/calculadora"},{num:"002",title:"Jogo interativo de estoura bal\xf5es",shortDesc:"Jogo interativo de estoura bal\xf5es com sistema de pontua\xe7\xe3o, combos, cursor personalizado e dificuldade crescente.",desc:"Jogo desenvolvido com HTML, SCSS e JavaScript puro. Bal\xf5es sobem em velocidade crescente e os menores valem mais pontos. Conta com cursor personalizado, popups de pontua\xe7\xe3o animados, mensagens de combo a cada 5 acertos e placar final.",stack:["JavaScript","HTML","CSS"],link:"https://doraalves.github.io/baloes/",github:"https://github.com/doraalves/baloes"},{num:"003",title:"Cron\xf4metro",shortDesc:"Cron\xf4metro com marca\xe7\xe3o de voltas, anel de progresso animado e destaque autom\xe1tico da melhor e pior volta.",desc:"Cron\xf4metro desenvolvido com HTML, SCSS e JavaScript puro. Conta com anel SVG animado que muda de cor ap\xf3s 1 minuto, registro de voltas com diferen\xe7a entre cada uma, destaque da melhor e pior volta, e atalhos de teclado (Espa\xe7o, L, R).",stack:["JavaScript","HTML","CSS"],link:"https://doraalves.github.io/cronometro/",github:"https://github.com/doraalves/cronometro"},{num:"004",title:"BlackVis",shortDesc:"Visualiza\xe7\xe3o interativa de designers negros brasileiros em grafo de for\xe7a, com filtros por \xe1rea, ano e nome.",desc:"Visualiza\xe7\xe3o interativa constru\xedda com D3.js v7 que exibe um grafo de for\xe7a onde cada n\xf3 representa um designer, t\xe9cnica ou \xe1rea do design. Os n\xf3s se conectam por afinidade e \xe1rea, permitindo filtrar por ano de nascimento, \xe1rea do design ou nome. Desenvolvido como ferramenta de visibilidade para designers negros brasileiros.",stack:["D3.js","JavaScript","HTML","SCSS"],link:"https://blackvisesdi.github.io/BlackVis/",github:"https://github.com/blackvisesdi/BlackVis"},{num:"005",title:"Sistema de Monitoramento de Equipe",shortDesc:"Dashboard em tempo real exibindo status, setores e cargos dos colaboradores para melhorar gest\xe3o e comunica\xe7\xe3o interna na Americanas S.A.",desc:"Dashboard em tempo real criado na Americanas S.A. para exibir o status, setor e cargo de cada colaborador. Desenvolvido para melhorar a gest\xe3o e comunica\xe7\xe3o interna, consolidando informa\xe7\xf5es dispersas em uma \xfanica vis\xe3o centralizada e atualizada.",stack:["Vue.js","Django","Python","WebSockets","HTML/SCSS","Docker"],link:null,github:null},{num:"006",title:"Dashboard de Inova\xe7\xf5es Corporativas",shortDesc:"Aplica\xe7\xe3o de monitoramento de inova\xe7\xf5es e an\xe1lise de resultados de vendas para m\xfaltiplas \xe1reas estrat\xe9gicas da empresa.",desc:"Aplica\xe7\xe3o de monitoramento desenvolvida para a equipe de Inova\xe7\xe3o da Americanas S.A., consolidando dados de projetos, an\xe1lise de resultados de vendas e acompanhamento de m\xe9tricas estrat\xe9gicas em tempo real.",stack:["ReactJS","Node.js","Styled Components","API RESTful"],link:null,github:null},{num:"007",title:"Site Institucional MediaLAB",shortDesc:"Desenvolvimento do site institucional do laborat\xf3rio de m\xeddia da ESDI/UERJ, integrando identidade visual com arquitetura de conte\xfado.",desc:"Desenvolvimento completo do site institucional do MediaLAB da ESDI/UERJ. Arquitetura de informa\xe7\xe3o, identidade visual no ambiente digital e publica\xe7\xe3o de projetos experimentais do laborat\xf3rio.",stack:["WordPress","HTML","CSS","JavaScript"],link:null,github:null},{num:"008",title:"Galeria Virtual & Realidade Virtual",shortDesc:"Prototipagem de instala\xe7\xf5es interativas e galeria virtual com experi\xeancias imersivas no Meta Quest 3.",desc:"Prototipagem de instala\xe7\xf5es interativas e espa\xe7os imersivos usando Meta Quest 3 e a plataforma Spatial, explorando a fronteira entre arte, design e tecnologia em ambientes virtuais.",stack:["Spatial","Meta Quest 3","JavaScript","p5.js"],link:"https://www.spatial.io/s/Media-Labs-1-0-Claro-6826039af8049f0d7678b6fe?share=1267569543253887910",github:null},{num:"009",title:"Sistema de Gerenciamento de Pedidos",shortDesc:"Implementa\xe7\xe3o front-end do sistema de gerenciamento de pedidos para o Americanas Mercado.",desc:"Implementa\xe7\xe3o front-end do sistema de gerenciamento de pedidos para o Americanas Mercado. Foco em performance, acessibilidade e usabilidade, com integra\xe7\xe3o a APIs RESTful e componentes reutiliz\xe1veis.",stack:["ReactJS","Node.js","API RESTful","Styled Components"],link:null,github:null}];function Ca(){const e=(new Date).getFullYear(),[t,n]=(0,r.useState)(null);return(0,o.jsxs)(Kr,{children:[(0,o.jsxs)(Qr,{children:[(0,o.jsxs)(qr,{children:[(0,o.jsx)(Yr,{children:"projetos"}),(0,o.jsxs)(Gr,{children:["O que ",(0,o.jsx)("em",{children:"constru\xed"})]})]}),(0,o.jsx)(Jr,{children:Ea.map(e=>(0,o.jsxs)(Xr,{onClick:()=>n(e),children:[(0,o.jsx)(Zr,{children:e.num}),(0,o.jsx)(ea,{children:e.title}),(0,o.jsx)(ta,{children:e.shortDesc}),(0,o.jsx)(na,{children:e.stack.slice(0,4).map(e=>(0,o.jsx)(ra,{children:e},e))}),(0,o.jsx)(aa,{children:"\u2197 ver detalhes"})]},e.num))})]}),(0,o.jsxs)(oa,{children:[(0,o.jsxs)(ia,{children:["\xa9 ",e," Izadora Alves"]}),(0,o.jsx)(la,{}),(0,o.jsx)(ia,{children:"feito com \u2665"})]}),(0,o.jsx)(Sa,{project:t,onClose:()=>n(null)})]})}class _a{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Network Error";this.status=e,this.text=t}}const ja={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:(()=>{if("undefined"!==typeof localStorage)return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}})()},Pa=e=>e?"string"===typeof e?{publicKey:e}:"[object Object]"===e.toString()?e:{}:{},Ta=async function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=await fetch(ja.origin+e,{method:"POST",headers:n,body:t}),a=await r.text(),o=new _a(r.status,a);if(r.ok)return o;throw o},za=(e,t,n)=>{if(!e||"string"!==typeof e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||"string"!==typeof t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n||"string"!==typeof n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},Na=e=>e.webdriver||!e.languages||0===e.languages.length,Ra=()=>new _a(451,"Unavailable For Headless Browser"),La=(e,t)=>{if((e=>!e.list?.length||!e.watchVariable)(e))return!1;((e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if("string"!==typeof t)throw"The BlockList watchVariable has to be a string"})(e.list,e.watchVariable);const n=(r=t,a=e.watchVariable,r instanceof FormData?r.get(a):r[a]);var r,a;return"string"===typeof n&&e.list.includes(n)},Da=()=>new _a(403,"Forbidden"),Oa=async(e,t,n)=>{if(!t.throttle||!n)return!1;((e,t)=>{if("number"!==typeof e||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&"string"!==typeof t)throw"The LimitRate ID has to be a non-empty string"})(t.throttle,t.id);const r=t.id||e,a=await(async(e,t,n)=>{const r=Number(await n.get(e)||0);return t-Date.now()+r})(r,t.throttle,n);return a>0||(await n.set(r,Date.now().toString()),!1)},Ia=()=>new _a(429,"Too Many Requests"),Aa=async(e,t,n,r)=>{const a=Pa(r),o=a.publicKey||ja.publicKey,i=a.blockHeadless||ja.blockHeadless,l=ja.storageProvider||a.storageProvider,s={...ja.blockList,...a.blockList},u={...ja.limitRate,...a.limitRate};if(i&&Na(navigator))return Promise.reject(Ra());const c=(e=>"string"===typeof e?document.querySelector(e):e)(n);za(o,e,t),(e=>{if(!e||"FORM"!==e.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"})(c);const d=new FormData(c);return La(s,d)?Promise.reject(Da()):await Oa(location.pathname,u,l)?Promise.reject(Ia()):(d.append("lib_version","4.4.1"),d.append("service_id",e),d.append("template_id",t),d.append("user_id",o),Ta("/api/v1.0/email/send-form",d))},Fa=tn`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`,Ma=Zt.div`
  background: var(--bg);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6rem 1.5rem 3rem;
  animation: ${Fa} 0.4s ease both;
`,$a=Zt.div`
  width: 100%;
  max-width: 600px;
  text-align: center;
`,Ua=Zt.p`
  font-family: var(--mono);
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  margin-bottom: 0.7rem;

  &::before {
    content: "";
    width: 1.5rem;
    height: 1px;
    background: var(--accent);
  }
`,Wa=Zt.h2`
  font-family: var(--serif);
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  line-height: 1.1;
  color: var(--ink);
  margin-bottom: 1.25rem;

  em {
    font-style: italic;
    color: var(--accent);
  }
`,Ha=Zt.p`
  font-size: 1rem;
  color: var(--ink-soft);
  font-weight: 300;
  max-width: 44ch;
  margin: 0 auto 2.5rem;
  line-height: 1.8;
`,Ba=Zt.div`
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`,Va=Zt.a`
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

  &:hover {
    color: var(--accent);
    border-color: var(--accent);
    transform: translateY(-2px);
  }
`,Ka=Zt.div`
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 4px;
  padding: 2rem;
  text-align: left;
  margin-bottom: 2rem;
  transition: background 0.3s, border-color 0.3s;
`,Qa=Zt.p`
  font-family: var(--mono);
  font-size: 0.7rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-soft);
  margin-bottom: 1.25rem;
`,qa=Zt.div`
  margin-bottom: 1rem;
`,Ya=Zt.label`
  display: block;
  font-family: var(--mono);
  font-size: 0.68rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ink-soft);
  margin-bottom: 0.4rem;
`,Ga=Zt.input`
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

  &:focus {
    border-color: var(--accent);
  }
  &::placeholder {
    color: rgba(107, 100, 96, 0.5);
  }
  &:disabled {
    opacity: 0.6;
  }
`,Ja=Zt.textarea`
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
  min-height: 130px;
  line-height: 1.6;

  &:focus {
    border-color: var(--accent);
  }
  &::placeholder {
    color: rgba(107, 100, 96, 0.5);
  }
  &:disabled {
    opacity: 0.6;
  }
`,Xa=Zt.button`
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
`,Za=Zt.p`
  font-family: var(--mono);
  font-size: 0.78rem;
  color: #3a7d44;
  text-align: center;
  margin-top: 0.85rem;
  letter-spacing: 0.04em;
`,eo=Zt.p`
  font-family: var(--mono);
  font-size: 0.78rem;
  color: var(--accent);
  text-align: center;
  margin-top: 0.85rem;
  letter-spacing: 0.04em;
`,to=Zt.div`
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`,no=Zt.a`
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

  &:hover {
    color: var(--accent);
    border-color: var(--accent);
    transform: translateY(-2px);
  }
`,ro=Zt.div`
  border-top: 1px solid var(--line);
  padding-top: 1.75rem;
  font-family: var(--mono);
  font-size: 0.7rem;
  color: var(--ink-soft);
  letter-spacing: 0.08em;
`;function ao(){const e=(0,r.useRef)(),[t,n]=(0,r.useState)({from_name:"",from_email:"",message:""}),[a,i]=(0,r.useState)("idle"),l=e=>{n({...t,[e.target.name]:e.target.value})},s=t.from_name&&t.from_email&&t.message,u="sending"===a,c=(new Date).getFullYear();return(0,o.jsx)(Ma,{children:(0,o.jsxs)($a,{children:[(0,o.jsx)(Ua,{children:"contato"}),(0,o.jsxs)(Wa,{children:["Vamos ",(0,o.jsx)("em",{children:"conversar"}),"?"]}),(0,o.jsx)(Ha,{children:"Estou aberta a oportunidades, freelas e projetos experimentais. Me manda uma mensagem!"}),(0,o.jsx)(Ba,{children:(0,o.jsxs)(Va,{href:"https://wa.me/5521982419979",target:"_blank",rel:"noreferrer",children:[(0,o.jsx)(Sn,{})," WhatsApp"]})}),(0,o.jsxs)(Ka,{children:[(0,o.jsx)(Qa,{children:"Enviar mensagem"}),(0,o.jsxs)("form",{ref:e,onSubmit:async t=>{t.preventDefault(),i("sending");try{await Aa("service_lk5zmy8","template_tfx86s1",e.current,"oeHkI3XYftME2KOZ_"),i("success"),n({from_name:"",from_email:"",message:""}),setTimeout(()=>i("idle"),5e3)}catch(r){console.error("EmailJS error:",r),i("error"),setTimeout(()=>i("idle"),5e3)}},children:[(0,o.jsxs)(qa,{children:[(0,o.jsx)(Ya,{htmlFor:"from_name",children:"Nome"}),(0,o.jsx)(Ga,{id:"from_name",name:"from_name",type:"text",placeholder:"Seu nome",value:t.from_name,onChange:l,disabled:u})]}),(0,o.jsxs)(qa,{children:[(0,o.jsx)(Ya,{htmlFor:"from_email",children:"Seu email"}),(0,o.jsx)(Ga,{id:"from_email",name:"from_email",type:"email",placeholder:"seu@email.com",value:t.from_email,onChange:l,disabled:u})]}),(0,o.jsxs)(qa,{children:[(0,o.jsx)(Ya,{htmlFor:"message",children:"Mensagem"}),(0,o.jsx)(Ja,{id:"message",name:"message",placeholder:"Conta um pouco sobre o que voc\xea precisa...",value:t.message,onChange:l,disabled:u})]}),(0,o.jsxs)(Xa,{type:"submit",disabled:!s||u,children:[(0,o.jsx)(Pn,{}),u?"Enviando...":"Enviar mensagem"]}),"success"===a&&(0,o.jsx)(Za,{children:"\u2713 Mensagem enviada! Responderei em breve."}),"error"===a&&(0,o.jsx)(eo,{children:"\u2717 Erro ao enviar. Tente pelo WhatsApp ou email direto."})]})]}),(0,o.jsxs)(to,{children:[(0,o.jsxs)(no,{href:"https://github.com/doraalves",target:"_blank",rel:"noreferrer",children:[(0,o.jsx)(xn,{})," GitHub"]}),(0,o.jsxs)(no,{href:"https://www.linkedin.com/in/izadoraalves/",target:"_blank",rel:"noreferrer",children:[(0,o.jsx)(kn,{})," LinkedIn"]}),(0,o.jsxs)(no,{href:"https://www.instagram.com/izadoraaalves",target:"_blank",rel:"noreferrer",children:[(0,o.jsx)(wn,{size:15})," Instagram"]})]}),(0,o.jsxs)(ro,{children:["\xa9 ",c," Izadora Alves \u2014 S\xe3o Gon\xe7alo, RJ"]})]})})}function oo(){const[e,t]=(0,r.useState)("home"),n=e=>{t(e),window.scrollTo(0,0)};return(0,o.jsxs)(l,{children:[(0,o.jsx)(rn,{}),(0,o.jsx)(Nn,{page:e,onNavigate:n}),"home"===e&&(0,o.jsx)(Yn,{onNavigate:n}),"about"===e&&(0,o.jsx)(Hr,{}),"projects"===e&&(0,o.jsx)(Ca,{}),"contact"===e&&(0,o.jsx)(ao,{})]})}a.createRoot(document.getElementById("root")).render((0,o.jsx)(oo,{}))})();
//# sourceMappingURL=main.26451182.js.map