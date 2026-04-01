/*! For license information please see main.c3334ba4.js.LICENSE.txt */
(()=>{"use strict";var e={730(e,t,n){var r=n(43),a=n(853);function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,l={};function s(e,t){u(e,t),u(e+"Capture",t)}function u(e,t){for(l[e]=t,e=0;e<t.length;e++)i.add(t[e])}var c=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),A=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,f={},p={};function m(e,t,n,r,a,o,i){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var h={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){h[e]=new m(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];h[t]=new m(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){h[e]=new m(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){h[e]=new m(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){h[e]=new m(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){h[e]=new m(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){h[e]=new m(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){h[e]=new m(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){h[e]=new m(e,5,!1,e.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function v(e){return e[1].toUpperCase()}function b(e,t,n,r){var a=h.hasOwnProperty(t)?h[t]:null;(null!==a?0!==a.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,a,r)&&(n=null),r||null===a?function(e){return!!A.call(p,e)||!A.call(f,e)&&(d.test(e)?p[e]=!0:(f[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=null===n?3!==a.type&&"":n:(t=a.attributeName,r=a.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(a=a.type)||4===a&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(g,v);h[t]=new m(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(g,v);h[t]=new m(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(g,v);h[t]=new m(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){h[e]=new m(e,1,!1,e.toLowerCase(),null,!1,!1)}),h.xlinkHref=new m("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){h[e]=new m(e,1,!1,e.toLowerCase(),null,!0,!0)});var y=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,x=Symbol.for("react.element"),k=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),P=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),_=Symbol.for("react.suspense_list"),T=Symbol.for("react.memo"),R=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var I=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var N=Symbol.iterator;function L(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=N&&e[N]||e["@@iterator"])?e:null}var O,M=Object.assign;function F(e){if(void 0===O)try{throw Error()}catch(ce){var t=ce.stack.trim().match(/\n( *(at )?)/);O=t&&t[1]||""}return"\n"+O+e}var D=!1;function B(e,t){if(!e||D)return"";D=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(de){var r=de}Reflect.construct(e,[],t)}else{try{t.call()}catch(de){r=de}e.call(t.prototype)}else{try{throw Error()}catch(de){r=de}e()}}catch(de){if(de&&r&&"string"===typeof de.stack){for(var a=de.stack.split("\n"),o=r.stack.split("\n"),i=a.length-1,l=o.length-1;1<=i&&0<=l&&a[i]!==o[l];)l--;for(;1<=i&&0<=l;i--,l--)if(a[i]!==o[l]){if(1!==i||1!==l)do{if(i--,0>--l||a[i]!==o[l]){var s="\n"+a[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}}while(1<=i&&0<=l);break}}}finally{D=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?F(e):""}function V(e){switch(e.tag){case 5:return F(e.type);case 16:return F("Lazy");case 13:return F("Suspense");case 19:return F("SuspenseList");case 0:case 2:case 15:return e=B(e.type,!1);case 11:return e=B(e.type.render,!1);case 1:return e=B(e.type,!0);default:return""}}function U(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case w:return"Fragment";case k:return"Portal";case E:return"Profiler";case S:return"StrictMode";case z:return"Suspense";case _:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case P:return(e.displayName||"Context")+".Consumer";case C:return(e._context.displayName||"Context")+".Provider";case j:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case T:return null!==(t=e.displayName||null)?t:U(e.type)||"Memo";case R:t=e._payload,e=e._init;try{return U(e(t))}catch(ce){}}return null}function Q(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return U(t);case 8:return t===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function q(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function H(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function W(e){e._valueTracker||(e._valueTracker=function(e){var t=H(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var a=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){r=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function Y(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=H(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function K(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(ye){return e.body}}function X(e,t){var n=t.checked;return M({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function J(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=q(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function G(e,t){null!=(t=t.checked)&&b(e,"checked",t,!1)}function Z(e,t){G(e,t);var n=q(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,q(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function $(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&K(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+q(n),t=null,a=0;a<e.length;a++){if(e[a].value===n)return e[a].selected=!0,void(r&&(e[a].defaultSelected=!0));null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(o(91));return M({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ae(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(o(92));if(te(n)){if(1<n.length)throw Error(o(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:q(n)}}function oe(e,t){var n=q(t.value),r=q(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function ie(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function le(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function se(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?le(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var Ae,fe=function(e){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n)})}:e}(function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((Ae=Ae||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ae.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ge(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var ve={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},be=["Webkit","ms","Moz","O"];function xe(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||ve.hasOwnProperty(e)&&ve[e]?(""+t).trim():t+"px"}function ke(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),a=xe(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}Object.keys(ve).forEach(function(e){be.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ve[t]=ve[e]})});var we=M({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Se(e,t){if(t){if(we[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(o(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(o(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(o(62))}}function Ee(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ce=null;function Pe(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var je=null,ze=null,_e=null;function Re(e){if(e=Pa(e)){if("function"!==typeof je)throw Error(o(280));var t=e.stateNode;t&&(t=za(t),je(e.stateNode,e.type,t))}}function Ie(e){ze?_e?_e.push(e):_e=[e]:ze=e}function Le(){if(ze){var e=ze,t=_e;if(_e=ze=null,Re(e),t)for(e=0;e<t.length;e++)Re(t[e])}}function Oe(e,t){return e(t)}function Me(){}var Fe=!1;function De(e,t,n){if(Fe)return e(t,n);Fe=!0;try{return Oe(e,t,n)}finally{Fe=!1,(null!==ze||null!==_e)&&(Me(),Le())}}function Be(e,t){var n=e.stateNode;if(null===n)return null;var r=za(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(o(231,t,typeof n));return n}var Ve=!1;if(c)try{var Ue={};Object.defineProperty(Ue,"passive",{get:function(){Ve=!0}}),window.addEventListener("test",Ue,Ue),window.removeEventListener("test",Ue,Ue)}catch(ue){Ve=!1}function Qe(e,t,n,r,a,o,i,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var qe=!1,He=null,We=!1,Ye=null,Ke={onError:function(e){qe=!0,He=e}};function Xe(e,t,n,r,a,o,i,l,s){qe=!1,He=null,Qe.apply(Ke,arguments)}function Je(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function Ge(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function Ze(e){if(Je(e)!==e)throw Error(o(188))}function $e(e){return e=function(e){var t=e.alternate;if(!t){if(null===(t=Je(e)))throw Error(o(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(null===a)break;var i=a.alternate;if(null===i){if(null!==(r=a.return)){n=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return Ze(a),e;if(i===r)return Ze(a),t;i=i.sibling}throw Error(o(188))}if(n.return!==r.return)n=a,r=i;else{for(var l=!1,s=a.child;s;){if(s===n){l=!0,n=a,r=i;break}if(s===r){l=!0,r=a,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=a;break}if(s===r){l=!0,r=i,n=a;break}s=s.sibling}if(!l)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(3!==n.tag)throw Error(o(188));return n.stateNode.current===n?e:t}(e),null!==e?et(e):null}function et(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=et(e);if(null!==t)return t;e=e.sibling}return null}var tt=a.unstable_scheduleCallback,nt=a.unstable_cancelCallback,rt=a.unstable_shouldYield,at=a.unstable_requestPaint,ot=a.unstable_now,it=a.unstable_getCurrentPriorityLevel,lt=a.unstable_ImmediatePriority,st=a.unstable_UserBlockingPriority,ut=a.unstable_NormalPriority,ct=a.unstable_LowPriority,At=a.unstable_IdlePriority,dt=null,ft=null;var pt=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(mt(e)/ht|0)|0},mt=Math.log,ht=Math.LN2;var gt=64,vt=4194304;function bt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function yt(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,a=e.suspendedLanes,o=e.pingedLanes,i=268435455&n;if(0!==i){var l=i&~a;0!==l?r=bt(l):0!==(o&=i)&&(r=bt(o))}else 0!==(i=n&~a)?r=bt(i):0!==o&&(r=bt(o));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&a)&&((a=r&-r)>=(o=t&-t)||16===a&&0!==(4194240&o)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)a=1<<(n=31-pt(t)),r|=e[n],t&=~a;return r}function xt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function kt(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function wt(){var e=gt;return 0===(4194240&(gt<<=1))&&(gt=64),e}function St(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Et(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-pt(t)]=n}function Ct(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-pt(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var Pt=0;function jt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var zt,_t,Tt,Rt,It,Nt=!1,Lt=[],Ot=null,Mt=null,Ft=null,Dt=new Map,Bt=new Map,Vt=[],Ut="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qt(e,t){switch(e){case"focusin":case"focusout":Ot=null;break;case"dragenter":case"dragleave":Mt=null;break;case"mouseover":case"mouseout":Ft=null;break;case"pointerover":case"pointerout":Dt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bt.delete(t.pointerId)}}function qt(e,t,n,r,a,o){return null===e||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[a]},null!==t&&(null!==(t=Pa(t))&&_t(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==a&&-1===t.indexOf(a)&&t.push(a),e)}function Ht(e){var t=Ca(e.target);if(null!==t){var n=Je(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=Ge(n)))return e.blockedOn=t,void It(e.priority,function(){Tt(n)})}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Wt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=rn(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=Pa(n))&&_t(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);Ce=r,n.target.dispatchEvent(r),Ce=null,t.shift()}return!0}function Yt(e,t,n){Wt(e)&&n.delete(t)}function Kt(){Nt=!1,null!==Ot&&Wt(Ot)&&(Ot=null),null!==Mt&&Wt(Mt)&&(Mt=null),null!==Ft&&Wt(Ft)&&(Ft=null),Dt.forEach(Yt),Bt.forEach(Yt)}function Xt(e,t){e.blockedOn===t&&(e.blockedOn=null,Nt||(Nt=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Kt)))}function Jt(e){function t(t){return Xt(t,e)}if(0<Lt.length){Xt(Lt[0],e);for(var n=1;n<Lt.length;n++){var r=Lt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Ot&&Xt(Ot,e),null!==Mt&&Xt(Mt,e),null!==Ft&&Xt(Ft,e),Dt.forEach(t),Bt.forEach(t),n=0;n<Vt.length;n++)(r=Vt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Vt.length&&null===(n=Vt[0]).blockedOn;)Ht(n),null===n.blockedOn&&Vt.shift()}var Gt=y.ReactCurrentBatchConfig,Zt=!0;function $t(e,t,n,r){var a=Pt,o=Gt.transition;Gt.transition=null;try{Pt=1,tn(e,t,n,r)}finally{Pt=a,Gt.transition=o}}function en(e,t,n,r){var a=Pt,o=Gt.transition;Gt.transition=null;try{Pt=4,tn(e,t,n,r)}finally{Pt=a,Gt.transition=o}}function tn(e,t,n,r){if(Zt){var a=rn(e,t,n,r);if(null===a)Zr(e,t,r,nn,n),Qt(e,r);else if(function(e,t,n,r,a){switch(t){case"focusin":return Ot=qt(Ot,e,t,n,r,a),!0;case"dragenter":return Mt=qt(Mt,e,t,n,r,a),!0;case"mouseover":return Ft=qt(Ft,e,t,n,r,a),!0;case"pointerover":var o=a.pointerId;return Dt.set(o,qt(Dt.get(o)||null,e,t,n,r,a)),!0;case"gotpointercapture":return o=a.pointerId,Bt.set(o,qt(Bt.get(o)||null,e,t,n,r,a)),!0}return!1}(a,e,t,n,r))r.stopPropagation();else if(Qt(e,r),4&t&&-1<Ut.indexOf(e)){for(;null!==a;){var o=Pa(a);if(null!==o&&zt(o),null===(o=rn(e,t,n,r))&&Zr(e,t,r,nn,n),o===a)break;a=o}null!==a&&r.stopPropagation()}else Zr(e,t,r,null,n)}}var nn=null;function rn(e,t,n,r){if(nn=null,null!==(e=Ca(e=Pe(r))))if(null===(t=Je(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=Ge(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return nn=e,null}function an(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(it()){case lt:return 1;case st:return 4;case ut:case ct:return 16;case At:return 536870912;default:return 16}default:return 16}}var on=null,ln=null,sn=null;function un(){if(sn)return sn;var e,t,n=ln,r=n.length,a="value"in on?on.value:on.textContent,o=a.length;for(e=0;e<r&&n[e]===a[e];e++);var i=r-e;for(t=1;t<=i&&n[r-t]===a[o-t];t++);return sn=a.slice(e,1<t?1-t:void 0)}function cn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function An(){return!0}function dn(){return!1}function fn(e){function t(t,n,r,a,o){for(var i in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=a,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(i)&&(t=e[i],this[i]=t?t(a):a[i]);return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:!1===a.returnValue)?An:dn,this.isPropagationStopped=dn,this}return M(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=An)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=An)},persist:function(){},isPersistent:An}),t}var pn,mn,hn,gn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vn=fn(gn),bn=M({},gn,{view:0,detail:0}),yn=fn(bn),xn=M({},bn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:In,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hn&&(hn&&"mousemove"===e.type?(pn=e.screenX-hn.screenX,mn=e.screenY-hn.screenY):mn=pn=0,hn=e),pn)},movementY:function(e){return"movementY"in e?e.movementY:mn}}),kn=fn(xn),wn=fn(M({},xn,{dataTransfer:0})),Sn=fn(M({},bn,{relatedTarget:0})),En=fn(M({},gn,{animationName:0,elapsedTime:0,pseudoElement:0})),Cn=M({},gn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Pn=fn(Cn),jn=fn(M({},gn,{data:0})),zn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_n={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Tn[e])&&!!t[e]}function In(){return Rn}var Nn=M({},bn,{key:function(e){if(e.key){var t=zn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=cn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?_n[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:In,charCode:function(e){return"keypress"===e.type?cn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?cn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Ln=fn(Nn),On=fn(M({},xn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Mn=fn(M({},bn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:In})),Fn=fn(M({},gn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Dn=M({},xn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Bn=fn(Dn),Vn=[9,13,27,32],Un=c&&"CompositionEvent"in window,Qn=null;c&&"documentMode"in document&&(Qn=document.documentMode);var qn=c&&"TextEvent"in window&&!Qn,Hn=c&&(!Un||Qn&&8<Qn&&11>=Qn),Wn=String.fromCharCode(32),Yn=!1;function Kn(e,t){switch(e){case"keyup":return-1!==Vn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Jn=!1;var Gn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Gn[e.type]:"textarea"===t}function $n(e,t,n,r){Ie(r),0<(t=ea(t,"onChange")).length&&(n=new vn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var er=null,tr=null;function nr(e){Wr(e,0)}function rr(e){if(Y(ja(e)))return e}function ar(e,t){if("change"===e)return t}var or=!1;if(c){var ir;if(c){var lr="oninput"in document;if(!lr){var sr=document.createElement("div");sr.setAttribute("oninput","return;"),lr="function"===typeof sr.oninput}ir=lr}else ir=!1;or=ir&&(!document.documentMode||9<document.documentMode)}function ur(){er&&(er.detachEvent("onpropertychange",cr),tr=er=null)}function cr(e){if("value"===e.propertyName&&rr(tr)){var t=[];$n(t,tr,e,Pe(e)),De(nr,t)}}function Ar(e,t,n){"focusin"===e?(ur(),tr=n,(er=t).attachEvent("onpropertychange",cr)):"focusout"===e&&ur()}function dr(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return rr(tr)}function fr(e,t){if("click"===e)return rr(t)}function pr(e,t){if("input"===e||"change"===e)return rr(t)}var mr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function hr(e,t){if(mr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!A.call(t,a)||!mr(e[a],t[a]))return!1}return!0}function gr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vr(e,t){var n,r=gr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=gr(r)}}function br(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?br(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function yr(){for(var e=window,t=K();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(me){n=!1}if(!n)break;t=K((e=t.contentWindow).document)}return t}function xr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function kr(e){var t=yr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&br(n.ownerDocument.documentElement,n)){if(null!==r&&xr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var a=n.textContent.length,o=Math.min(r.start,a);r=void 0===r.end?o:Math.min(r.end,a),!e.extend&&o>r&&(a=r,r=o,o=a),a=vr(n,o);var i=vr(n,r);a&&i&&(1!==e.rangeCount||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&((t=t.createRange()).setStart(a.node,a.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var wr=c&&"documentMode"in document&&11>=document.documentMode,Sr=null,Er=null,Cr=null,Pr=!1;function jr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;Pr||null==Sr||Sr!==K(r)||("selectionStart"in(r=Sr)&&xr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},Cr&&hr(Cr,r)||(Cr=r,0<(r=ea(Er,"onSelect")).length&&(t=new vn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Sr)))}function zr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var _r={animationend:zr("Animation","AnimationEnd"),animationiteration:zr("Animation","AnimationIteration"),animationstart:zr("Animation","AnimationStart"),transitionend:zr("Transition","TransitionEnd")},Tr={},Rr={};function Ir(e){if(Tr[e])return Tr[e];if(!_r[e])return e;var t,n=_r[e];for(t in n)if(n.hasOwnProperty(t)&&t in Rr)return Tr[e]=n[t];return e}c&&(Rr=document.createElement("div").style,"AnimationEvent"in window||(delete _r.animationend.animation,delete _r.animationiteration.animation,delete _r.animationstart.animation),"TransitionEvent"in window||delete _r.transitionend.transition);var Nr=Ir("animationend"),Lr=Ir("animationiteration"),Or=Ir("animationstart"),Mr=Ir("transitionend"),Fr=new Map,Dr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Br(e,t){Fr.set(e,t),s(t,[e])}for(var Vr=0;Vr<Dr.length;Vr++){var Ur=Dr[Vr];Br(Ur.toLowerCase(),"on"+(Ur[0].toUpperCase()+Ur.slice(1)))}Br(Nr,"onAnimationEnd"),Br(Lr,"onAnimationIteration"),Br(Or,"onAnimationStart"),Br("dblclick","onDoubleClick"),Br("focusin","onFocus"),Br("focusout","onBlur"),Br(Mr,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),s("onBeforeInput",["compositionend","keypress","textInput","paste"]),s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qr));function Hr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,a,i,l,s,u){if(Xe.apply(this,arguments),qe){if(!qe)throw Error(o(198));var c=He;qe=!1,He=null,We||(We=!0,Ye=c)}}(r,t,void 0,e),e.currentTarget=null}function Wr(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var l=r[i],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==o&&a.isPropagationStopped())break e;Hr(a,l,u),o=s}else for(i=0;i<r.length;i++){if(s=(l=r[i]).instance,u=l.currentTarget,l=l.listener,s!==o&&a.isPropagationStopped())break e;Hr(a,l,u),o=s}}}if(We)throw e=Ye,We=!1,Ye=null,e}function Yr(e,t){var n=t[wa];void 0===n&&(n=t[wa]=new Set);var r=e+"__bubble";n.has(r)||(Gr(t,e,2,!1),n.add(r))}function Kr(e,t,n){var r=0;t&&(r|=4),Gr(n,e,r,t)}var Xr="_reactListening"+Math.random().toString(36).slice(2);function Jr(e){if(!e[Xr]){e[Xr]=!0,i.forEach(function(t){"selectionchange"!==t&&(qr.has(t)||Kr(t,!1,e),Kr(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Xr]||(t[Xr]=!0,Kr("selectionchange",!1,t))}}function Gr(e,t,n,r){switch(an(t)){case 1:var a=$t;break;case 4:a=en;break;default:a=tn}n=a.bind(null,t,n,e),a=void 0,!Ve||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(a=!0),r?void 0!==a?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):void 0!==a?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Zr(e,t,n,r,a){var o=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var i=r.tag;if(3===i||4===i){var l=r.stateNode.containerInfo;if(l===a||8===l.nodeType&&l.parentNode===a)break;if(4===i)for(i=r.return;null!==i;){var s=i.tag;if((3===s||4===s)&&((s=i.stateNode.containerInfo)===a||8===s.nodeType&&s.parentNode===a))return;i=i.return}for(;null!==l;){if(null===(i=Ca(l)))return;if(5===(s=i.tag)||6===s){r=o=i;continue e}l=l.parentNode}}r=r.return}De(function(){var r=o,a=Pe(n),i=[];e:{var l=Fr.get(e);if(void 0!==l){var s=vn,u=e;switch(e){case"keypress":if(0===cn(n))break e;case"keydown":case"keyup":s=Ln;break;case"focusin":u="focus",s=Sn;break;case"focusout":u="blur",s=Sn;break;case"beforeblur":case"afterblur":s=Sn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":s=kn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=wn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=Mn;break;case Nr:case Lr:case Or:s=En;break;case Mr:s=Fn;break;case"scroll":s=yn;break;case"wheel":s=Bn;break;case"copy":case"cut":case"paste":s=Pn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=On}var c=0!==(4&t),A=!c&&"scroll"===e,d=c?null!==l?l+"Capture":null:l;c=[];for(var f,p=r;null!==p;){var m=(f=p).stateNode;if(5===f.tag&&null!==m&&(f=m,null!==d&&(null!=(m=Be(p,d))&&c.push($r(p,m,f)))),A)break;p=p.return}0<c.length&&(l=new s(l,u,null,n,a),i.push({event:l,listeners:c}))}}if(0===(7&t)){if(s="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||n===Ce||!(u=n.relatedTarget||n.fromElement)||!Ca(u)&&!u[ka])&&(s||l)&&(l=a.window===a?a:(l=a.ownerDocument)?l.defaultView||l.parentWindow:window,s?(s=r,null!==(u=(u=n.relatedTarget||n.toElement)?Ca(u):null)&&(u!==(A=Je(u))||5!==u.tag&&6!==u.tag)&&(u=null)):(s=null,u=r),s!==u)){if(c=kn,m="onMouseLeave",d="onMouseEnter",p="mouse","pointerout"!==e&&"pointerover"!==e||(c=On,m="onPointerLeave",d="onPointerEnter",p="pointer"),A=null==s?l:ja(s),f=null==u?l:ja(u),(l=new c(m,p+"leave",s,n,a)).target=A,l.relatedTarget=f,m=null,Ca(a)===r&&((c=new c(d,p+"enter",u,n,a)).target=f,c.relatedTarget=A,m=c),A=m,s&&u)e:{for(d=u,p=0,f=c=s;f;f=ta(f))p++;for(f=0,m=d;m;m=ta(m))f++;for(;0<p-f;)c=ta(c),p--;for(;0<f-p;)d=ta(d),f--;for(;p--;){if(c===d||null!==d&&c===d.alternate)break e;c=ta(c),d=ta(d)}c=null}else c=null;null!==s&&na(i,l,s,c,!1),null!==u&&null!==A&&na(i,A,u,c,!0)}if("select"===(s=(l=r?ja(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===s&&"file"===l.type)var h=ar;else if(Zn(l))if(or)h=pr;else{h=dr;var g=Ar}else(s=l.nodeName)&&"input"===s.toLowerCase()&&("checkbox"===l.type||"radio"===l.type)&&(h=fr);switch(h&&(h=h(e,r))?$n(i,h,n,a):(g&&g(e,l,r),"focusout"===e&&(g=l._wrapperState)&&g.controlled&&"number"===l.type&&ee(l,"number",l.value)),g=r?ja(r):window,e){case"focusin":(Zn(g)||"true"===g.contentEditable)&&(Sr=g,Er=r,Cr=null);break;case"focusout":Cr=Er=Sr=null;break;case"mousedown":Pr=!0;break;case"contextmenu":case"mouseup":case"dragend":Pr=!1,jr(i,n,a);break;case"selectionchange":if(wr)break;case"keydown":case"keyup":jr(i,n,a)}var v;if(Un)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Jn?Kn(e,n)&&(b="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(b="onCompositionStart");b&&(Hn&&"ko"!==n.locale&&(Jn||"onCompositionStart"!==b?"onCompositionEnd"===b&&Jn&&(v=un()):(ln="value"in(on=a)?on.value:on.textContent,Jn=!0)),0<(g=ea(r,b)).length&&(b=new jn(b,e,null,n,a),i.push({event:b,listeners:g}),v?b.data=v:null!==(v=Xn(n))&&(b.data=v))),(v=qn?function(e,t){switch(e){case"compositionend":return Xn(t);case"keypress":return 32!==t.which?null:(Yn=!0,Wn);case"textInput":return(e=t.data)===Wn&&Yn?null:e;default:return null}}(e,n):function(e,t){if(Jn)return"compositionend"===e||!Un&&Kn(e,t)?(e=un(),sn=ln=on=null,Jn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Hn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=ea(r,"onBeforeInput")).length&&(a=new jn("onBeforeInput","beforeinput",null,n,a),i.push({event:a,listeners:r}),a.data=v))}Wr(i,t)})}function $r(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ea(e,t){for(var n=t+"Capture",r=[];null!==e;){var a=e,o=a.stateNode;5===a.tag&&null!==o&&(a=o,null!=(o=Be(e,n))&&r.unshift($r(e,o,a)),null!=(o=Be(e,t))&&r.push($r(e,o,a))),e=e.return}return r}function ta(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function na(e,t,n,r,a){for(var o=t._reactName,i=[];null!==n&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(null!==s&&s===r)break;5===l.tag&&null!==u&&(l=u,a?null!=(s=Be(n,o))&&i.unshift($r(n,s,l)):a||null!=(s=Be(n,o))&&i.push($r(n,s,l))),n=n.return}0!==i.length&&e.push({event:t,listeners:i})}var ra=/\r\n?/g,aa=/\u0000|\uFFFD/g;function oa(e){return("string"===typeof e?e:""+e).replace(ra,"\n").replace(aa,"")}function ia(e,t,n){if(t=oa(t),oa(e)!==t&&n)throw Error(o(425))}function la(){}var sa=null,ua=null;function ca(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var Aa="function"===typeof setTimeout?setTimeout:void 0,da="function"===typeof clearTimeout?clearTimeout:void 0,fa="function"===typeof Promise?Promise:void 0,pa="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof fa?function(e){return fa.resolve(null).then(e).catch(ma)}:Aa;function ma(e){setTimeout(function(){throw e})}function ha(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&8===a.nodeType)if("/$"===(n=a.data)){if(0===r)return e.removeChild(a),void Jt(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=a}while(n);Jt(t)}function ga(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function va(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var ba=Math.random().toString(36).slice(2),ya="__reactFiber$"+ba,xa="__reactProps$"+ba,ka="__reactContainer$"+ba,wa="__reactEvents$"+ba,Sa="__reactListeners$"+ba,Ea="__reactHandles$"+ba;function Ca(e){var t=e[ya];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ka]||n[ya]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=va(e);null!==e;){if(n=e[ya])return n;e=va(e)}return t}n=(e=n).parentNode}return null}function Pa(e){return!(e=e[ya]||e[ka])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function ja(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(o(33))}function za(e){return e[xa]||null}var _a=[],Ta=-1;function Ra(e){return{current:e}}function Ia(e){0>Ta||(e.current=_a[Ta],_a[Ta]=null,Ta--)}function Na(e,t){Ta++,_a[Ta]=e.current,e.current=t}var La={},Oa=Ra(La),Ma=Ra(!1),Fa=La;function Da(e,t){var n=e.type.contextTypes;if(!n)return La;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a,o={};for(a in n)o[a]=t[a];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ba(e){return null!==(e=e.childContextTypes)&&void 0!==e}function Va(){Ia(Ma),Ia(Oa)}function Ua(e,t,n){if(Oa.current!==La)throw Error(o(168));Na(Oa,t),Na(Ma,n)}function Qa(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var a in r=r.getChildContext())if(!(a in t))throw Error(o(108,Q(e)||"Unknown",a));return M({},n,r)}function qa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||La,Fa=Oa.current,Na(Oa,e),Na(Ma,Ma.current),!0}function Ha(e,t,n){var r=e.stateNode;if(!r)throw Error(o(169));n?(e=Qa(e,t,Fa),r.__reactInternalMemoizedMergedChildContext=e,Ia(Ma),Ia(Oa),Na(Oa,e)):Ia(Ma),Na(Ma,n)}var Wa=null,Ya=!1,Ka=!1;function Xa(e){null===Wa?Wa=[e]:Wa.push(e)}function Ja(){if(!Ka&&null!==Wa){Ka=!0;var e=0,t=Pt;try{var n=Wa;for(Pt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Wa=null,Ya=!1}catch(a){throw null!==Wa&&(Wa=Wa.slice(e+1)),tt(lt,Ja),a}finally{Pt=t,Ka=!1}}return null}var Ga=[],Za=0,$a=null,eo=0,to=[],no=0,ro=null,ao=1,oo="";function io(e,t){Ga[Za++]=eo,Ga[Za++]=$a,$a=e,eo=t}function lo(e,t,n){to[no++]=ao,to[no++]=oo,to[no++]=ro,ro=e;var r=ao;e=oo;var a=32-pt(r)-1;r&=~(1<<a),n+=1;var o=32-pt(t)+a;if(30<o){var i=a-a%5;o=(r&(1<<i)-1).toString(32),r>>=i,a-=i,ao=1<<32-pt(t)+a|n<<a|r,oo=o+e}else ao=1<<o|n<<a|r,oo=e}function so(e){null!==e.return&&(io(e,1),lo(e,1,0))}function uo(e){for(;e===$a;)$a=Ga[--Za],Ga[Za]=null,eo=Ga[--Za],Ga[Za]=null;for(;e===ro;)ro=to[--no],to[no]=null,oo=to[--no],to[no]=null,ao=to[--no],to[no]=null}var co=null,Ao=null,fo=!1,po=null;function mo(e,t){var n=Fu(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function ho(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,co=e,Ao=ga(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,co=e,Ao=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==ro?{id:ao,overflow:oo}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Fu(18,null,null,0)).stateNode=t,n.return=e,e.child=n,co=e,Ao=null,!0);default:return!1}}function go(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function vo(e){if(fo){var t=Ao;if(t){var n=t;if(!ho(e,t)){if(go(e))throw Error(o(418));t=ga(n.nextSibling);var r=co;t&&ho(e,t)?mo(r,n):(e.flags=-4097&e.flags|2,fo=!1,co=e)}}else{if(go(e))throw Error(o(418));e.flags=-4097&e.flags|2,fo=!1,co=e}}}function bo(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;co=e}function yo(e){if(e!==co)return!1;if(!fo)return bo(e),fo=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!ca(e.type,e.memoizedProps)),t&&(t=Ao)){if(go(e))throw xo(),Error(o(418));for(;t;)mo(e,t),t=ga(t.nextSibling)}if(bo(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){Ao=ga(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}Ao=null}}else Ao=co?ga(e.stateNode.nextSibling):null;return!0}function xo(){for(var e=Ao;e;)e=ga(e.nextSibling)}function ko(){Ao=co=null,fo=!1}function wo(e){null===po?po=[e]:po.push(e)}var So=y.ReactCurrentBatchConfig;function Eo(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(o(309));var r=n.stateNode}if(!r)throw Error(o(147,e));var a=r,i=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===i?t.ref:(t=function(e){var t=a.refs;null===e?delete t[i]:t[i]=e},t._stringRef=i,t)}if("string"!==typeof e)throw Error(o(284));if(!n._owner)throw Error(o(290,e))}return e}function Co(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Po(e){return(0,e._init)(e._payload)}function jo(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function a(e,t){return(e=Bu(e,t)).index=0,e.sibling=null,e}function i(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function l(t){return e&&null===t.alternate&&(t.flags|=2),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=qu(n,e.mode,r)).return=e,t):((t=a(t,n)).return=e,t)}function u(e,t,n,r){var o=n.type;return o===w?A(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===o||"object"===typeof o&&null!==o&&o.$$typeof===R&&Po(o)===t.type)?((r=a(t,n.props)).ref=Eo(e,t,n),r.return=e,r):((r=Vu(n.type,n.key,n.props,null,e.mode,r)).ref=Eo(e,t,n),r.return=e,r)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Hu(n,e.mode,r)).return=e,t):((t=a(t,n.children||[])).return=e,t)}function A(e,t,n,r,o){return null===t||7!==t.tag?((t=Uu(n,e.mode,r,o)).return=e,t):((t=a(t,n)).return=e,t)}function d(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=qu(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case x:return(n=Vu(t.type,t.key,t.props,null,e.mode,n)).ref=Eo(e,null,t),n.return=e,n;case k:return(t=Hu(t,e.mode,n)).return=e,t;case R:return d(e,(0,t._init)(t._payload),n)}if(te(t)||L(t))return(t=Uu(t,e.mode,n,null)).return=e,t;Co(e,t)}return null}function f(e,t,n,r){var a=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==a?null:s(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case x:return n.key===a?u(e,t,n,r):null;case k:return n.key===a?c(e,t,n,r):null;case R:return f(e,t,(a=n._init)(n._payload),r)}if(te(n)||L(n))return null!==a?null:A(e,t,n,r,null);Co(e,n)}return null}function p(e,t,n,r,a){if("string"===typeof r&&""!==r||"number"===typeof r)return s(t,e=e.get(n)||null,""+r,a);if("object"===typeof r&&null!==r){switch(r.$$typeof){case x:return u(t,e=e.get(null===r.key?n:r.key)||null,r,a);case k:return c(t,e=e.get(null===r.key?n:r.key)||null,r,a);case R:return p(e,t,n,(0,r._init)(r._payload),a)}if(te(r)||L(r))return A(t,e=e.get(n)||null,r,a,null);Co(t,r)}return null}function m(a,o,l,s){for(var u=null,c=null,A=o,m=o=0,h=null;null!==A&&m<l.length;m++){A.index>m?(h=A,A=null):h=A.sibling;var g=f(a,A,l[m],s);if(null===g){null===A&&(A=h);break}e&&A&&null===g.alternate&&t(a,A),o=i(g,o,m),null===c?u=g:c.sibling=g,c=g,A=h}if(m===l.length)return n(a,A),fo&&io(a,m),u;if(null===A){for(;m<l.length;m++)null!==(A=d(a,l[m],s))&&(o=i(A,o,m),null===c?u=A:c.sibling=A,c=A);return fo&&io(a,m),u}for(A=r(a,A);m<l.length;m++)null!==(h=p(A,a,m,l[m],s))&&(e&&null!==h.alternate&&A.delete(null===h.key?m:h.key),o=i(h,o,m),null===c?u=h:c.sibling=h,c=h);return e&&A.forEach(function(e){return t(a,e)}),fo&&io(a,m),u}function h(a,l,s,u){var c=L(s);if("function"!==typeof c)throw Error(o(150));if(null==(s=c.call(s)))throw Error(o(151));for(var A=c=null,m=l,h=l=0,g=null,v=s.next();null!==m&&!v.done;h++,v=s.next()){m.index>h?(g=m,m=null):g=m.sibling;var b=f(a,m,v.value,u);if(null===b){null===m&&(m=g);break}e&&m&&null===b.alternate&&t(a,m),l=i(b,l,h),null===A?c=b:A.sibling=b,A=b,m=g}if(v.done)return n(a,m),fo&&io(a,h),c;if(null===m){for(;!v.done;h++,v=s.next())null!==(v=d(a,v.value,u))&&(l=i(v,l,h),null===A?c=v:A.sibling=v,A=v);return fo&&io(a,h),c}for(m=r(a,m);!v.done;h++,v=s.next())null!==(v=p(m,a,h,v.value,u))&&(e&&null!==v.alternate&&m.delete(null===v.key?h:v.key),l=i(v,l,h),null===A?c=v:A.sibling=v,A=v);return e&&m.forEach(function(e){return t(a,e)}),fo&&io(a,h),c}return function e(r,o,i,s){if("object"===typeof i&&null!==i&&i.type===w&&null===i.key&&(i=i.props.children),"object"===typeof i&&null!==i){switch(i.$$typeof){case x:e:{for(var u=i.key,c=o;null!==c;){if(c.key===u){if((u=i.type)===w){if(7===c.tag){n(r,c.sibling),(o=a(c,i.props.children)).return=r,r=o;break e}}else if(c.elementType===u||"object"===typeof u&&null!==u&&u.$$typeof===R&&Po(u)===c.type){n(r,c.sibling),(o=a(c,i.props)).ref=Eo(r,c,i),o.return=r,r=o;break e}n(r,c);break}t(r,c),c=c.sibling}i.type===w?((o=Uu(i.props.children,r.mode,s,i.key)).return=r,r=o):((s=Vu(i.type,i.key,i.props,null,r.mode,s)).ref=Eo(r,o,i),s.return=r,r=s)}return l(r);case k:e:{for(c=i.key;null!==o;){if(o.key===c){if(4===o.tag&&o.stateNode.containerInfo===i.containerInfo&&o.stateNode.implementation===i.implementation){n(r,o.sibling),(o=a(o,i.children||[])).return=r,r=o;break e}n(r,o);break}t(r,o),o=o.sibling}(o=Hu(i,r.mode,s)).return=r,r=o}return l(r);case R:return e(r,o,(c=i._init)(i._payload),s)}if(te(i))return m(r,o,i,s);if(L(i))return h(r,o,i,s);Co(r,i)}return"string"===typeof i&&""!==i||"number"===typeof i?(i=""+i,null!==o&&6===o.tag?(n(r,o.sibling),(o=a(o,i)).return=r,r=o):(n(r,o),(o=qu(i,r.mode,s)).return=r,r=o),l(r)):n(r,o)}}var zo=jo(!0),_o=jo(!1),To=Ra(null),Ro=null,Io=null,No=null;function Lo(){No=Io=Ro=null}function Oo(e){var t=To.current;Ia(To),e._currentValue=t}function Mo(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Fo(e,t){Ro=e,No=Io=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(Pl=!0),e.firstContext=null)}function Do(e){var t=e._currentValue;if(No!==e)if(e={context:e,memoizedValue:t,next:null},null===Io){if(null===Ro)throw Error(o(308));Io=e,Ro.dependencies={lanes:0,firstContext:e}}else Io=Io.next=e;return t}var Bo=null;function Vo(e){null===Bo?Bo=[e]:Bo.push(e)}function Uo(e,t,n,r){var a=t.interleaved;return null===a?(n.next=n,Vo(t)):(n.next=a.next,a.next=n),t.interleaved=n,Qo(e,r)}function Qo(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var qo=!1;function Ho(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Yo(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ko(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&Ls)){var a=r.pending;return null===a?t.next=t:(t.next=a.next,a.next=t),r.pending=t,Qo(e,n)}return null===(a=r.interleaved)?(t.next=t,Vo(r)):(t.next=a.next,a.next=t),r.interleaved=t,Qo(e,n)}function Xo(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Ct(e,n)}}function Jo(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var a=null,o=null;if(null!==(n=n.firstBaseUpdate)){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===o?a=o=i:o=o.next=i,n=n.next}while(null!==n);null===o?a=o=t:o=o.next=t}else a=o=t;return n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Go(e,t,n,r){var a=e.updateQueue;qo=!1;var o=a.firstBaseUpdate,i=a.lastBaseUpdate,l=a.shared.pending;if(null!==l){a.shared.pending=null;var s=l,u=s.next;s.next=null,null===i?o=u:i.next=u,i=s;var c=e.alternate;null!==c&&((l=(c=c.updateQueue).lastBaseUpdate)!==i&&(null===l?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(null!==o){var A=a.baseState;for(i=0,c=u=s=null,l=o;;){var d=l.lane,f=l.eventTime;if((r&d)===d){null!==c&&(c=c.next={eventTime:f,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var p=e,m=l;switch(d=t,f=n,m.tag){case 1:if("function"===typeof(p=m.payload)){A=p.call(f,A,d);break e}A=p;break e;case 3:p.flags=-65537&p.flags|128;case 0:if(null===(d="function"===typeof(p=m.payload)?p.call(f,A,d):p)||void 0===d)break e;A=M({},A,d);break e;case 2:qo=!0}}null!==l.callback&&0!==l.lane&&(e.flags|=64,null===(d=a.effects)?a.effects=[l]:d.push(l))}else f={eventTime:f,lane:d,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===c?(u=c=f,s=A):c=c.next=f,i|=d;if(null===(l=l.next)){if(null===(l=a.shared.pending))break;l=(d=l).next,d.next=null,a.lastBaseUpdate=d,a.shared.pending=null}}if(null===c&&(s=A),a.baseState=s,a.firstBaseUpdate=u,a.lastBaseUpdate=c,null!==(t=a.shared.interleaved)){a=t;do{i|=a.lane,a=a.next}while(a!==t)}else null===o&&(a.shared.lanes=0);Qs|=i,e.lanes=i,e.memoizedState=A}}function Zo(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(null!==a){if(r.callback=null,r=n,"function"!==typeof a)throw Error(o(191,a));a.call(r)}}}var $o={},ei=Ra($o),ti=Ra($o),ni=Ra($o);function ri(e){if(e===$o)throw Error(o(174));return e}function ai(e,t){switch(Na(ni,t),Na(ti,e),Na(ei,$o),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:se(null,"");break;default:t=se(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Ia(ei),Na(ei,t)}function oi(){Ia(ei),Ia(ti),Ia(ni)}function ii(e){ri(ni.current);var t=ri(ei.current),n=se(t,e.type);t!==n&&(Na(ti,e),Na(ei,n))}function li(e){ti.current===e&&(Ia(ei),Ia(ti))}var si=Ra(0);function ui(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ci=[];function Ai(){for(var e=0;e<ci.length;e++)ci[e]._workInProgressVersionPrimary=null;ci.length=0}var di=y.ReactCurrentDispatcher,fi=y.ReactCurrentBatchConfig,pi=0,mi=null,hi=null,gi=null,vi=!1,bi=!1,yi=0,xi=0;function ki(){throw Error(o(321))}function wi(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!mr(e[n],t[n]))return!1;return!0}function Si(e,t,n,r,a,i){if(pi=i,mi=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,di.current=null===e||null===e.memoizedState?ll:sl,e=n(r,a),bi){i=0;do{if(bi=!1,yi=0,25<=i)throw Error(o(301));i+=1,gi=hi=null,t.updateQueue=null,di.current=ul,e=n(r,a)}while(bi)}if(di.current=il,t=null!==hi&&null!==hi.next,pi=0,gi=hi=mi=null,vi=!1,t)throw Error(o(300));return e}function Ei(){var e=0!==yi;return yi=0,e}function Ci(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===gi?mi.memoizedState=gi=e:gi=gi.next=e,gi}function Pi(){if(null===hi){var e=mi.alternate;e=null!==e?e.memoizedState:null}else e=hi.next;var t=null===gi?mi.memoizedState:gi.next;if(null!==t)gi=t,hi=e;else{if(null===e)throw Error(o(310));e={memoizedState:(hi=e).memoizedState,baseState:hi.baseState,baseQueue:hi.baseQueue,queue:hi.queue,next:null},null===gi?mi.memoizedState=gi=e:gi=gi.next=e}return gi}function ji(e,t){return"function"===typeof t?t(e):t}function zi(e){var t=Pi(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=hi,a=r.baseQueue,i=n.pending;if(null!==i){if(null!==a){var l=a.next;a.next=i.next,i.next=l}r.baseQueue=a=i,n.pending=null}if(null!==a){i=a.next,r=r.baseState;var s=l=null,u=null,c=i;do{var A=c.lane;if((pi&A)===A)null!==u&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var d={lane:A,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};null===u?(s=u=d,l=r):u=u.next=d,mi.lanes|=A,Qs|=A}c=c.next}while(null!==c&&c!==i);null===u?l=r:u.next=s,mr(r,t.memoizedState)||(Pl=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(null!==(e=n.interleaved)){a=e;do{i=a.lane,mi.lanes|=i,Qs|=i,a=a.next}while(a!==e)}else null===a&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function _i(e){var t=Pi(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,i=t.memoizedState;if(null!==a){n.pending=null;var l=a=a.next;do{i=e(i,l.action),l=l.next}while(l!==a);mr(i,t.memoizedState)||(Pl=!0),t.memoizedState=i,null===t.baseQueue&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Ti(){}function Ri(e,t){var n=mi,r=Pi(),a=t(),i=!mr(r.memoizedState,a);if(i&&(r.memoizedState=a,Pl=!0),r=r.queue,qi(Li.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||null!==gi&&1&gi.memoizedState.tag){if(n.flags|=2048,Di(9,Ni.bind(null,n,r,a,t),void 0,null),null===Os)throw Error(o(349));0!==(30&pi)||Ii(n,t,a)}return a}function Ii(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=mi.updateQueue)?(t={lastEffect:null,stores:null},mi.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Ni(e,t,n,r){t.value=n,t.getSnapshot=r,Oi(t)&&Mi(e)}function Li(e,t,n){return n(function(){Oi(t)&&Mi(e)})}function Oi(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!mr(e,n)}catch(me){return!0}}function Mi(e){var t=Qo(e,1);null!==t&&uu(t,e,1,-1)}function Fi(e){var t=Ci();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:e},t.queue=e,e=e.dispatch=nl.bind(null,mi,e),[t.memoizedState,e]}function Di(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=mi.updateQueue)?(t={lastEffect:null,stores:null},mi.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Bi(){return Pi().memoizedState}function Vi(e,t,n,r){var a=Ci();mi.flags|=e,a.memoizedState=Di(1|t,n,void 0,void 0===r?null:r)}function Ui(e,t,n,r){var a=Pi();r=void 0===r?null:r;var o=void 0;if(null!==hi){var i=hi.memoizedState;if(o=i.destroy,null!==r&&wi(r,i.deps))return void(a.memoizedState=Di(t,n,o,r))}mi.flags|=e,a.memoizedState=Di(1|t,n,o,r)}function Qi(e,t){return Vi(8390656,8,e,t)}function qi(e,t){return Ui(2048,8,e,t)}function Hi(e,t){return Ui(4,2,e,t)}function Wi(e,t){return Ui(4,4,e,t)}function Yi(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Ki(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Ui(4,4,Yi.bind(null,t,e),n)}function Xi(){}function Ji(e,t){var n=Pi();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&wi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Gi(e,t){var n=Pi();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&wi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Zi(e,t,n){return 0===(21&pi)?(e.baseState&&(e.baseState=!1,Pl=!0),e.memoizedState=n):(mr(n,t)||(n=wt(),mi.lanes|=n,Qs|=n,e.baseState=!0),t)}function $i(e,t){var n=Pt;Pt=0!==n&&4>n?n:4,e(!0);var r=fi.transition;fi.transition={};try{e(!1),t()}finally{Pt=n,fi.transition=r}}function el(){return Pi().memoizedState}function tl(e,t,n){var r=su(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},rl(e))al(t,n);else if(null!==(n=Uo(e,t,n,r))){uu(n,e,r,lu()),ol(n,t,r)}}function nl(e,t,n){var r=su(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(rl(e))al(t,a);else{var o=e.alternate;if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=t.lastRenderedReducer))try{var i=t.lastRenderedState,l=o(i,n);if(a.hasEagerState=!0,a.eagerState=l,mr(l,i)){var s=t.interleaved;return null===s?(a.next=a,Vo(t)):(a.next=s.next,s.next=a),void(t.interleaved=a)}}catch(de){}null!==(n=Uo(e,t,a,r))&&(uu(n,e,r,a=lu()),ol(n,t,r))}}function rl(e){var t=e.alternate;return e===mi||null!==t&&t===mi}function al(e,t){bi=vi=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ol(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Ct(e,n)}}var il={readContext:Do,useCallback:ki,useContext:ki,useEffect:ki,useImperativeHandle:ki,useInsertionEffect:ki,useLayoutEffect:ki,useMemo:ki,useReducer:ki,useRef:ki,useState:ki,useDebugValue:ki,useDeferredValue:ki,useTransition:ki,useMutableSource:ki,useSyncExternalStore:ki,useId:ki,unstable_isNewReconciler:!1},ll={readContext:Do,useCallback:function(e,t){return Ci().memoizedState=[e,void 0===t?null:t],e},useContext:Do,useEffect:Qi,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Vi(4194308,4,Yi.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Vi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Vi(4,2,e,t)},useMemo:function(e,t){var n=Ci();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ci();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=tl.bind(null,mi,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},Ci().memoizedState=e},useState:Fi,useDebugValue:Xi,useDeferredValue:function(e){return Ci().memoizedState=e},useTransition:function(){var e=Fi(!1),t=e[0];return e=$i.bind(null,e[1]),Ci().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=mi,a=Ci();if(fo){if(void 0===n)throw Error(o(407));n=n()}else{if(n=t(),null===Os)throw Error(o(349));0!==(30&pi)||Ii(r,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,Qi(Li.bind(null,r,i,e),[e]),r.flags|=2048,Di(9,Ni.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Ci(),t=Os.identifierPrefix;if(fo){var n=oo;t=":"+t+"R"+(n=(ao&~(1<<32-pt(ao)-1)).toString(32)+n),0<(n=yi++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=xi++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},sl={readContext:Do,useCallback:Ji,useContext:Do,useEffect:qi,useImperativeHandle:Ki,useInsertionEffect:Hi,useLayoutEffect:Wi,useMemo:Gi,useReducer:zi,useRef:Bi,useState:function(){return zi(ji)},useDebugValue:Xi,useDeferredValue:function(e){return Zi(Pi(),hi.memoizedState,e)},useTransition:function(){return[zi(ji)[0],Pi().memoizedState]},useMutableSource:Ti,useSyncExternalStore:Ri,useId:el,unstable_isNewReconciler:!1},ul={readContext:Do,useCallback:Ji,useContext:Do,useEffect:qi,useImperativeHandle:Ki,useInsertionEffect:Hi,useLayoutEffect:Wi,useMemo:Gi,useReducer:_i,useRef:Bi,useState:function(){return _i(ji)},useDebugValue:Xi,useDeferredValue:function(e){var t=Pi();return null===hi?t.memoizedState=e:Zi(t,hi.memoizedState,e)},useTransition:function(){return[_i(ji)[0],Pi().memoizedState]},useMutableSource:Ti,useSyncExternalStore:Ri,useId:el,unstable_isNewReconciler:!1};function cl(e,t){if(e&&e.defaultProps){for(var n in t=M({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function Al(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:M({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var dl={isMounted:function(e){return!!(e=e._reactInternals)&&Je(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=lu(),a=su(e),o=Yo(r,a);o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=Ko(e,o,a))&&(uu(t,e,a,r),Xo(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=lu(),a=su(e),o=Yo(r,a);o.tag=1,o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=Ko(e,o,a))&&(uu(t,e,a,r),Xo(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=lu(),r=su(e),a=Yo(n,r);a.tag=2,void 0!==t&&null!==t&&(a.callback=t),null!==(t=Ko(e,a,r))&&(uu(t,e,r,n),Xo(t,e,r))}};function fl(e,t,n,r,a,o,i){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,o,i):!t.prototype||!t.prototype.isPureReactComponent||(!hr(n,r)||!hr(a,o))}function pl(e,t,n){var r=!1,a=La,o=t.contextType;return"object"===typeof o&&null!==o?o=Do(o):(a=Ba(t)?Fa:Oa.current,o=(r=null!==(r=t.contextTypes)&&void 0!==r)?Da(e,a):La),t=new t(n,o),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=dl,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),t}function ml(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&dl.enqueueReplaceState(t,t.state,null)}function hl(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Ho(e);var o=t.contextType;"object"===typeof o&&null!==o?a.context=Do(o):(o=Ba(t)?Fa:Oa.current,a.context=Da(e,o)),a.state=e.memoizedState,"function"===typeof(o=t.getDerivedStateFromProps)&&(Al(e,t,o,n),a.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof a.getSnapshotBeforeUpdate||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||(t=a.state,"function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),t!==a.state&&dl.enqueueReplaceState(a,a.state,null),Go(e,n,a,r),a.state=e.memoizedState),"function"===typeof a.componentDidMount&&(e.flags|=4194308)}function gl(e,t){try{var n="",r=t;do{n+=V(r),r=r.return}while(r);var a=n}catch(he){a="\nError generating stack: "+he.message+"\n"+he.stack}return{value:e,source:t,stack:a,digest:null}}function vl(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function bl(e,t){try{console.error(t.value)}catch(ce){setTimeout(function(){throw ce})}}var yl="function"===typeof WeakMap?WeakMap:Map;function xl(e,t,n){(n=Yo(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Gs||(Gs=!0,Zs=r),bl(0,t)},n}function kl(e,t,n){(n=Yo(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){bl(0,t)}}var o=e.stateNode;return null!==o&&"function"===typeof o.componentDidCatch&&(n.callback=function(){bl(0,t),"function"!==typeof r&&(null===$s?$s=new Set([this]):$s.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function wl(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new yl;var a=new Set;r.set(t,a)}else void 0===(a=r.get(t))&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=Ru.bind(null,e,t,n),t.then(e,e))}function Sl(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function El(e,t,n,r,a){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Yo(-1,1)).tag=2,Ko(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var Cl=y.ReactCurrentOwner,Pl=!1;function jl(e,t,n,r){t.child=null===e?_o(t,null,n,r):zo(t,e.child,n,r)}function zl(e,t,n,r,a){n=n.render;var o=t.ref;return Fo(t,a),r=Si(e,t,n,r,o,a),n=Ei(),null===e||Pl?(fo&&n&&so(t),t.flags|=1,jl(e,t,r,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Gl(e,t,a))}function _l(e,t,n,r,a){if(null===e){var o=n.type;return"function"!==typeof o||Du(o)||void 0!==o.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Vu(n.type,null,r,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,Tl(e,t,o,r,a))}if(o=e.child,0===(e.lanes&a)){var i=o.memoizedProps;if((n=null!==(n=n.compare)?n:hr)(i,r)&&e.ref===t.ref)return Gl(e,t,a)}return t.flags|=1,(e=Bu(o,r)).ref=t.ref,e.return=t,t.child=e}function Tl(e,t,n,r,a){if(null!==e){var o=e.memoizedProps;if(hr(o,r)&&e.ref===t.ref){if(Pl=!1,t.pendingProps=r=o,0===(e.lanes&a))return t.lanes=e.lanes,Gl(e,t,a);0!==(131072&e.flags)&&(Pl=!0)}}return Nl(e,t,n,r,a)}function Rl(e,t,n){var r=t.pendingProps,a=r.children,o=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Na(Bs,Ds),Ds|=n;else{if(0===(1073741824&n))return e=null!==o?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Na(Bs,Ds),Ds|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==o?o.baseLanes:n,Na(Bs,Ds),Ds|=r}else null!==o?(r=o.baseLanes|n,t.memoizedState=null):r=n,Na(Bs,Ds),Ds|=r;return jl(e,t,a,n),t.child}function Il(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Nl(e,t,n,r,a){var o=Ba(n)?Fa:Oa.current;return o=Da(t,o),Fo(t,a),n=Si(e,t,n,r,o,a),r=Ei(),null===e||Pl?(fo&&r&&so(t),t.flags|=1,jl(e,t,n,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Gl(e,t,a))}function Ll(e,t,n,r,a){if(Ba(n)){var o=!0;qa(t)}else o=!1;if(Fo(t,a),null===t.stateNode)Jl(e,t),pl(t,n,r),hl(t,n,r,a),r=!0;else if(null===e){var i=t.stateNode,l=t.memoizedProps;i.props=l;var s=i.context,u=n.contextType;"object"===typeof u&&null!==u?u=Do(u):u=Da(t,u=Ba(n)?Fa:Oa.current);var c=n.getDerivedStateFromProps,A="function"===typeof c||"function"===typeof i.getSnapshotBeforeUpdate;A||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(l!==r||s!==u)&&ml(t,i,r,u),qo=!1;var d=t.memoizedState;i.state=d,Go(t,r,i,a),s=t.memoizedState,l!==r||d!==s||Ma.current||qo?("function"===typeof c&&(Al(t,n,c,r),s=t.memoizedState),(l=qo||fl(t,n,l,r,d,s,u))?(A||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||("function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount()),"function"===typeof i.componentDidMount&&(t.flags|=4194308)):("function"===typeof i.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=u,r=l):("function"===typeof i.componentDidMount&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Wo(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:cl(t.type,l),i.props=u,A=t.pendingProps,d=i.context,"object"===typeof(s=n.contextType)&&null!==s?s=Do(s):s=Da(t,s=Ba(n)?Fa:Oa.current);var f=n.getDerivedStateFromProps;(c="function"===typeof f||"function"===typeof i.getSnapshotBeforeUpdate)||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(l!==A||d!==s)&&ml(t,i,r,s),qo=!1,d=t.memoizedState,i.state=d,Go(t,r,i,a);var p=t.memoizedState;l!==A||d!==p||Ma.current||qo?("function"===typeof f&&(Al(t,n,f,r),p=t.memoizedState),(u=qo||fl(t,n,u,r,d,p,s)||!1)?(c||"function"!==typeof i.UNSAFE_componentWillUpdate&&"function"!==typeof i.componentWillUpdate||("function"===typeof i.componentWillUpdate&&i.componentWillUpdate(r,p,s),"function"===typeof i.UNSAFE_componentWillUpdate&&i.UNSAFE_componentWillUpdate(r,p,s)),"function"===typeof i.componentDidUpdate&&(t.flags|=4),"function"===typeof i.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof i.componentDidUpdate||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),i.props=r,i.state=p,i.context=s,r=u):("function"!==typeof i.componentDidUpdate||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return Ol(e,t,n,r,o,a)}function Ol(e,t,n,r,a,o){Il(e,t);var i=0!==(128&t.flags);if(!r&&!i)return a&&Ha(t,n,!1),Gl(e,t,o);r=t.stateNode,Cl.current=t;var l=i&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&i?(t.child=zo(t,e.child,null,o),t.child=zo(t,null,l,o)):jl(e,t,l,o),t.memoizedState=r.state,a&&Ha(t,n,!0),t.child}function Ml(e){var t=e.stateNode;t.pendingContext?Ua(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Ua(0,t.context,!1),ai(e,t.containerInfo)}function Fl(e,t,n,r,a){return ko(),wo(a),t.flags|=256,jl(e,t,n,r),t.child}var Dl,Bl,Vl,Ul={dehydrated:null,treeContext:null,retryLane:0};function Ql(e){return{baseLanes:e,cachePool:null,transitions:null}}function ql(e,t,n){var r,a=t.pendingProps,i=si.current,l=!1,s=0!==(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!==(2&i)),r?(l=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(i|=1),Na(si,1&i),null===e)return vo(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(s=a.children,e=a.fallback,l?(a=t.mode,l=t.child,s={mode:"hidden",children:s},0===(1&a)&&null!==l?(l.childLanes=0,l.pendingProps=s):l=Qu(s,a,0,null),e=Uu(e,a,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Ql(n),t.memoizedState=Ul,e):Hl(t,s));if(null!==(i=e.memoizedState)&&null!==(r=i.dehydrated))return function(e,t,n,r,a,i,l){if(n)return 256&t.flags?(t.flags&=-257,Wl(e,t,l,r=vl(Error(o(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(i=r.fallback,a=t.mode,r=Qu({mode:"visible",children:r.children},a,0,null),(i=Uu(i,a,l,null)).flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,0!==(1&t.mode)&&zo(t,e.child,null,l),t.child.memoizedState=Ql(l),t.memoizedState=Ul,i);if(0===(1&t.mode))return Wl(e,t,l,null);if("$!"===a.data){if(r=a.nextSibling&&a.nextSibling.dataset)var s=r.dgst;return r=s,Wl(e,t,l,r=vl(i=Error(o(419)),r,void 0))}if(s=0!==(l&e.childLanes),Pl||s){if(null!==(r=Os)){switch(l&-l){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}0!==(a=0!==(a&(r.suspendedLanes|l))?0:a)&&a!==i.retryLane&&(i.retryLane=a,Qo(e,a),uu(r,e,a,-1))}return ku(),Wl(e,t,l,r=vl(Error(o(421))))}return"$?"===a.data?(t.flags|=128,t.child=e.child,t=Nu.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,Ao=ga(a.nextSibling),co=t,fo=!0,po=null,null!==e&&(to[no++]=ao,to[no++]=oo,to[no++]=ro,ao=e.id,oo=e.overflow,ro=t),t=Hl(t,r.children),t.flags|=4096,t)}(e,t,s,a,r,i,n);if(l){l=a.fallback,s=t.mode,r=(i=e.child).sibling;var u={mode:"hidden",children:a.children};return 0===(1&s)&&t.child!==i?((a=t.child).childLanes=0,a.pendingProps=u,t.deletions=null):(a=Bu(i,u)).subtreeFlags=14680064&i.subtreeFlags,null!==r?l=Bu(r,l):(l=Uu(l,s,n,null)).flags|=2,l.return=t,a.return=t,a.sibling=l,t.child=a,a=l,l=t.child,s=null===(s=e.child.memoizedState)?Ql(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=Ul,a}return e=(l=e.child).sibling,a=Bu(l,{mode:"visible",children:a.children}),0===(1&t.mode)&&(a.lanes=n),a.return=t,a.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=a,t.memoizedState=null,a}function Hl(e,t){return(t=Qu({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Wl(e,t,n,r){return null!==r&&wo(r),zo(t,e.child,null,n),(e=Hl(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Yl(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Mo(e.return,t,n)}function Kl(e,t,n,r,a){var o=e.memoizedState;null===o?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=a)}function Xl(e,t,n){var r=t.pendingProps,a=r.revealOrder,o=r.tail;if(jl(e,t,r.children,n),0!==(2&(r=si.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Yl(e,n,t);else if(19===e.tag)Yl(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Na(si,r),0===(1&t.mode))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;null!==n;)null!==(e=n.alternate)&&null===ui(e)&&(a=n),n=n.sibling;null===(n=a)?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Kl(t,!1,a,n,o);break;case"backwards":for(n=null,a=t.child,t.child=null;null!==a;){if(null!==(e=a.alternate)&&null===ui(e)){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Kl(t,!0,n,null,o);break;case"together":Kl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Jl(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Gl(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Qs|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(o(153));if(null!==t.child){for(n=Bu(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Bu(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Zl(e,t){if(!fo)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function $l(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=14680064&a.subtreeFlags,r|=14680064&a.flags,a.return=e,a=a.sibling;else for(a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function es(e,t,n){var r=t.pendingProps;switch(uo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $l(t),null;case 1:case 17:return Ba(t.type)&&Va(),$l(t),null;case 3:return r=t.stateNode,oi(),Ia(Ma),Ia(Oa),Ai(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(yo(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==po&&(fu(po),po=null))),$l(t),null;case 5:li(t);var a=ri(ni.current);if(n=t.type,null!==e&&null!=t.stateNode)Bl(e,t,n,r),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(o(166));return $l(t),null}if(e=ri(ei.current),yo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[ya]=t,r[xa]=i,e=0!==(1&t.mode),n){case"dialog":Yr("cancel",r),Yr("close",r);break;case"iframe":case"object":case"embed":Yr("load",r);break;case"video":case"audio":for(a=0;a<Qr.length;a++)Yr(Qr[a],r);break;case"source":Yr("error",r);break;case"img":case"image":case"link":Yr("error",r),Yr("load",r);break;case"details":Yr("toggle",r);break;case"input":J(r,i),Yr("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Yr("invalid",r);break;case"textarea":ae(r,i),Yr("invalid",r)}for(var s in Se(n,i),a=null,i)if(i.hasOwnProperty(s)){var u=i[s];"children"===s?"string"===typeof u?r.textContent!==u&&(!0!==i.suppressHydrationWarning&&ia(r.textContent,u,e),a=["children",u]):"number"===typeof u&&r.textContent!==""+u&&(!0!==i.suppressHydrationWarning&&ia(r.textContent,u,e),a=["children",""+u]):l.hasOwnProperty(s)&&null!=u&&"onScroll"===s&&Yr("scroll",r)}switch(n){case"input":W(r),$(r,i,!0);break;case"textarea":W(r),ie(r);break;case"select":case"option":break;default:"function"===typeof i.onClick&&(r.onclick=la)}r=a,t.updateQueue=r,null!==r&&(t.flags|=4)}else{s=9===a.nodeType?a:a.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=le(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=s.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),"select"===n&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[ya]=t,e[xa]=r,Dl(e,t),t.stateNode=e;e:{switch(s=Ee(n,r),n){case"dialog":Yr("cancel",e),Yr("close",e),a=r;break;case"iframe":case"object":case"embed":Yr("load",e),a=r;break;case"video":case"audio":for(a=0;a<Qr.length;a++)Yr(Qr[a],e);a=r;break;case"source":Yr("error",e),a=r;break;case"img":case"image":case"link":Yr("error",e),Yr("load",e),a=r;break;case"details":Yr("toggle",e),a=r;break;case"input":J(e,r),a=X(e,r),Yr("invalid",e);break;case"option":default:a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=M({},r,{value:void 0}),Yr("invalid",e);break;case"textarea":ae(e,r),a=re(e,r),Yr("invalid",e)}for(i in Se(n,a),u=a)if(u.hasOwnProperty(i)){var c=u[i];"style"===i?ke(e,c):"dangerouslySetInnerHTML"===i?null!=(c=c?c.__html:void 0)&&fe(e,c):"children"===i?"string"===typeof c?("textarea"!==n||""!==c)&&ge(e,c):"number"===typeof c&&ge(e,""+c):"suppressContentEditableWarning"!==i&&"suppressHydrationWarning"!==i&&"autoFocus"!==i&&(l.hasOwnProperty(i)?null!=c&&"onScroll"===i&&Yr("scroll",e):null!=c&&b(e,i,c,s))}switch(n){case"input":W(e),$(e,r,!1);break;case"textarea":W(e),ie(e);break;case"option":null!=r.value&&e.setAttribute("value",""+q(r.value));break;case"select":e.multiple=!!r.multiple,null!=(i=r.value)?ne(e,!!r.multiple,i,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof a.onClick&&(e.onclick=la)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return $l(t),null;case 6:if(e&&null!=t.stateNode)Vl(0,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(o(166));if(n=ri(ni.current),ri(ei.current),yo(t)){if(r=t.stateNode,n=t.memoizedProps,r[ya]=t,(i=r.nodeValue!==n)&&null!==(e=co))switch(e.tag){case 3:ia(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&ia(r.nodeValue,n,0!==(1&e.mode))}i&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[ya]=t,t.stateNode=r}return $l(t),null;case 13:if(Ia(si),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(fo&&null!==Ao&&0!==(1&t.mode)&&0===(128&t.flags))xo(),ko(),t.flags|=98560,i=!1;else if(i=yo(t),null!==r&&null!==r.dehydrated){if(null===e){if(!i)throw Error(o(318));if(!(i=null!==(i=t.memoizedState)?i.dehydrated:null))throw Error(o(317));i[ya]=t}else ko(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;$l(t),i=!1}else null!==po&&(fu(po),po=null),i=!0;if(!i)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&si.current)?0===Vs&&(Vs=3):ku())),null!==t.updateQueue&&(t.flags|=4),$l(t),null);case 4:return oi(),null===e&&Jr(t.stateNode.containerInfo),$l(t),null;case 10:return Oo(t.type._context),$l(t),null;case 19:if(Ia(si),null===(i=t.memoizedState))return $l(t),null;if(r=0!==(128&t.flags),null===(s=i.rendering))if(r)Zl(i,!1);else{if(0!==Vs||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(s=ui(e))){for(t.flags|=128,Zl(i,!1),null!==(r=s.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(i=n).flags&=14680066,null===(s=i.alternate)?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Na(si,1&si.current|2),t.child}e=e.sibling}null!==i.tail&&ot()>Xs&&(t.flags|=128,r=!0,Zl(i,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=ui(s))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Zl(i,!0),null===i.tail&&"hidden"===i.tailMode&&!s.alternate&&!fo)return $l(t),null}else 2*ot()-i.renderingStartTime>Xs&&1073741824!==n&&(t.flags|=128,r=!0,Zl(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(null!==(n=i.last)?n.sibling=s:t.child=s,i.last=s)}return null!==i.tail?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ot(),t.sibling=null,n=si.current,Na(si,r?1&n|2:1&n),t):($l(t),null);case 22:case 23:return vu(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&Ds)&&($l(t),6&t.subtreeFlags&&(t.flags|=8192)):$l(t),null;case 24:case 25:return null}throw Error(o(156,t.tag))}function ts(e,t){switch(uo(t),t.tag){case 1:return Ba(t.type)&&Va(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return oi(),Ia(Ma),Ia(Oa),Ai(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return li(t),null;case 13:if(Ia(si),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(o(340));ko()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Ia(si),null;case 4:return oi(),null;case 10:return Oo(t.type._context),null;case 22:case 23:return vu(),null;default:return null}}Dl=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Bl=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,ri(ei.current);var o,i=null;switch(n){case"input":a=X(e,a),r=X(e,r),i=[];break;case"select":a=M({},a,{value:void 0}),r=M({},r,{value:void 0}),i=[];break;case"textarea":a=re(e,a),r=re(e,r),i=[];break;default:"function"!==typeof a.onClick&&"function"===typeof r.onClick&&(e.onclick=la)}for(c in Se(n,r),n=null,a)if(!r.hasOwnProperty(c)&&a.hasOwnProperty(c)&&null!=a[c])if("style"===c){var s=a[c];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(l.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(s=null!=a?a[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(null!=u||null!=s))if("style"===c)if(s){for(o in s)!s.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&s[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(c,n)),n=u;else"dangerouslySetInnerHTML"===c?(u=u?u.__html:void 0,s=s?s.__html:void 0,null!=u&&s!==u&&(i=i||[]).push(c,u)):"children"===c?"string"!==typeof u&&"number"!==typeof u||(i=i||[]).push(c,""+u):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(l.hasOwnProperty(c)?(null!=u&&"onScroll"===c&&Yr("scroll",e),i||s===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}},Vl=function(e,t,n,r){n!==r&&(t.flags|=4)};var ns=!1,rs=!1,as="function"===typeof WeakSet?WeakSet:Set,os=null;function is(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(me){Tu(e,t,me)}else n.current=null}function ls(e,t,n){try{n()}catch(me){Tu(e,t,me)}}var ss=!1;function us(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var a=r=r.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,void 0!==o&&ls(t,n,o)}a=a.next}while(a!==r)}}function cs(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function As(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function ds(e){var t=e.alternate;null!==t&&(e.alternate=null,ds(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[ya],delete t[xa],delete t[wa],delete t[Sa],delete t[Ea])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function fs(e){return 5===e.tag||3===e.tag||4===e.tag}function ps(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||fs(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ms(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=la));else if(4!==r&&null!==(e=e.child))for(ms(e,t,n),e=e.sibling;null!==e;)ms(e,t,n),e=e.sibling}function hs(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(hs(e,t,n),e=e.sibling;null!==e;)hs(e,t,n),e=e.sibling}var gs=null,vs=!1;function bs(e,t,n){for(n=n.child;null!==n;)ys(e,t,n),n=n.sibling}function ys(e,t,n){if(ft&&"function"===typeof ft.onCommitFiberUnmount)try{ft.onCommitFiberUnmount(dt,n)}catch(pe){}switch(n.tag){case 5:rs||is(n,t);case 6:var r=gs,a=vs;gs=null,bs(e,t,n),vs=a,null!==(gs=r)&&(vs?(e=gs,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):gs.removeChild(n.stateNode));break;case 18:null!==gs&&(vs?(e=gs,n=n.stateNode,8===e.nodeType?ha(e.parentNode,n):1===e.nodeType&&ha(e,n),Jt(e)):ha(gs,n.stateNode));break;case 4:r=gs,a=vs,gs=n.stateNode.containerInfo,vs=!0,bs(e,t,n),gs=r,vs=a;break;case 0:case 11:case 14:case 15:if(!rs&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){a=r=r.next;do{var o=a,i=o.destroy;o=o.tag,void 0!==i&&(0!==(2&o)||0!==(4&o))&&ls(n,t,i),a=a.next}while(a!==r)}bs(e,t,n);break;case 1:if(!rs&&(is(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(pe){Tu(n,t,pe)}bs(e,t,n);break;case 21:bs(e,t,n);break;case 22:1&n.mode?(rs=(r=rs)||null!==n.memoizedState,bs(e,t,n),rs=r):bs(e,t,n);break;default:bs(e,t,n)}}function xs(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new as),t.forEach(function(t){var r=Lu.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function ks(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var a=n[r];try{var i=e,l=t,s=l;e:for(;null!==s;){switch(s.tag){case 5:gs=s.stateNode,vs=!1;break e;case 3:case 4:gs=s.stateNode.containerInfo,vs=!0;break e}s=s.return}if(null===gs)throw Error(o(160));ys(i,l,a),gs=null,vs=!1;var u=a.alternate;null!==u&&(u.return=null),a.return=null}catch(de){Tu(a,t,de)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)ws(t,e),t=t.sibling}function ws(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ks(t,e),Ss(e),4&r){try{us(3,e,e.return),cs(3,e)}catch(h){Tu(e,e.return,h)}try{us(5,e,e.return)}catch(h){Tu(e,e.return,h)}}break;case 1:ks(t,e),Ss(e),512&r&&null!==n&&is(n,n.return);break;case 5:if(ks(t,e),Ss(e),512&r&&null!==n&&is(n,n.return),32&e.flags){var a=e.stateNode;try{ge(a,"")}catch(h){Tu(e,e.return,h)}}if(4&r&&null!=(a=e.stateNode)){var i=e.memoizedProps,l=null!==n?n.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,null!==u)try{"input"===s&&"radio"===i.type&&null!=i.name&&G(a,i),Ee(s,l);var c=Ee(s,i);for(l=0;l<u.length;l+=2){var A=u[l],d=u[l+1];"style"===A?ke(a,d):"dangerouslySetInnerHTML"===A?fe(a,d):"children"===A?ge(a,d):b(a,A,d,c)}switch(s){case"input":Z(a,i);break;case"textarea":oe(a,i);break;case"select":var f=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var p=i.value;null!=p?ne(a,!!i.multiple,p,!1):f!==!!i.multiple&&(null!=i.defaultValue?ne(a,!!i.multiple,i.defaultValue,!0):ne(a,!!i.multiple,i.multiple?[]:"",!1))}a[xa]=i}catch(h){Tu(e,e.return,h)}}break;case 6:if(ks(t,e),Ss(e),4&r){if(null===e.stateNode)throw Error(o(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(h){Tu(e,e.return,h)}}break;case 3:if(ks(t,e),Ss(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Jt(t.containerInfo)}catch(h){Tu(e,e.return,h)}break;case 4:default:ks(t,e),Ss(e);break;case 13:ks(t,e),Ss(e),8192&(a=e.child).flags&&(i=null!==a.memoizedState,a.stateNode.isHidden=i,!i||null!==a.alternate&&null!==a.alternate.memoizedState||(Ks=ot())),4&r&&xs(e);break;case 22:if(A=null!==n&&null!==n.memoizedState,1&e.mode?(rs=(c=rs)||A,ks(t,e),rs=c):ks(t,e),Ss(e),8192&r){if(c=null!==e.memoizedState,(e.stateNode.isHidden=c)&&!A&&0!==(1&e.mode))for(os=e,A=e.child;null!==A;){for(d=os=A;null!==os;){switch(p=(f=os).child,f.tag){case 0:case 11:case 14:case 15:us(4,f,f.return);break;case 1:is(f,f.return);var m=f.stateNode;if("function"===typeof m.componentWillUnmount){r=f,n=f.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(h){Tu(r,n,h)}}break;case 5:is(f,f.return);break;case 22:if(null!==f.memoizedState){js(d);continue}}null!==p?(p.return=f,os=p):js(d)}A=A.sibling}e:for(A=null,d=e;;){if(5===d.tag){if(null===A){A=d;try{a=d.stateNode,c?"function"===typeof(i=a.style).setProperty?i.setProperty("display","none","important"):i.display="none":(s=d.stateNode,l=void 0!==(u=d.memoizedProps.style)&&null!==u&&u.hasOwnProperty("display")?u.display:null,s.style.display=xe("display",l))}catch(h){Tu(e,e.return,h)}}}else if(6===d.tag){if(null===A)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(h){Tu(e,e.return,h)}}else if((22!==d.tag&&23!==d.tag||null===d.memoizedState||d===e)&&null!==d.child){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;null===d.sibling;){if(null===d.return||d.return===e)break e;A===d&&(A=null),d=d.return}A===d&&(A=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:ks(t,e),Ss(e),4&r&&xs(e);case 21:}}function Ss(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(fs(n)){var r=n;break e}n=n.return}throw Error(o(160))}switch(r.tag){case 5:var a=r.stateNode;32&r.flags&&(ge(a,""),r.flags&=-33),hs(e,ps(e),a);break;case 3:case 4:var i=r.stateNode.containerInfo;ms(e,ps(e),i);break;default:throw Error(o(161))}}catch(Te){Tu(e,e.return,Te)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function Es(e,t,n){os=e,Cs(e,t,n)}function Cs(e,t,n){for(var r=0!==(1&e.mode);null!==os;){var a=os,o=a.child;if(22===a.tag&&r){var i=null!==a.memoizedState||ns;if(!i){var l=a.alternate,s=null!==l&&null!==l.memoizedState||rs;l=ns;var u=rs;if(ns=i,(rs=s)&&!u)for(os=a;null!==os;)s=(i=os).child,22===i.tag&&null!==i.memoizedState?zs(a):null!==s?(s.return=i,os=s):zs(a);for(;null!==o;)os=o,Cs(o,t,n),o=o.sibling;os=a,ns=l,rs=u}Ps(e)}else 0!==(8772&a.subtreeFlags)&&null!==o?(o.return=a,os=o):Ps(e)}}function Ps(e){for(;null!==os;){var t=os;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:rs||cs(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!rs)if(null===n)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:cl(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;null!==i&&Zo(t,i,r);break;case 3:var l=t.updateQueue;if(null!==l){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Zo(t,l,n)}break;case 5:var s=t.stateNode;if(null===n&&4&t.flags){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var c=t.alternate;if(null!==c){var A=c.memoizedState;if(null!==A){var d=A.dehydrated;null!==d&&Jt(d)}}}break;default:throw Error(o(163))}rs||512&t.flags&&As(t)}catch(f){Tu(t,t.return,f)}}if(t===e){os=null;break}if(null!==(n=t.sibling)){n.return=t.return,os=n;break}os=t.return}}function js(e){for(;null!==os;){var t=os;if(t===e){os=null;break}var n=t.sibling;if(null!==n){n.return=t.return,os=n;break}os=t.return}}function zs(e){for(;null!==os;){var t=os;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{cs(4,t)}catch(Te){Tu(t,n,Te)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var a=t.return;try{r.componentDidMount()}catch(Te){Tu(t,a,Te)}}var o=t.return;try{As(t)}catch(Te){Tu(t,o,Te)}break;case 5:var i=t.return;try{As(t)}catch(Te){Tu(t,i,Te)}}}catch(Te){Tu(t,t.return,Te)}if(t===e){os=null;break}var l=t.sibling;if(null!==l){l.return=t.return,os=l;break}os=t.return}}var _s,Ts=Math.ceil,Rs=y.ReactCurrentDispatcher,Is=y.ReactCurrentOwner,Ns=y.ReactCurrentBatchConfig,Ls=0,Os=null,Ms=null,Fs=0,Ds=0,Bs=Ra(0),Vs=0,Us=null,Qs=0,qs=0,Hs=0,Ws=null,Ys=null,Ks=0,Xs=1/0,Js=null,Gs=!1,Zs=null,$s=null,eu=!1,tu=null,nu=0,ru=0,au=null,ou=-1,iu=0;function lu(){return 0!==(6&Ls)?ot():-1!==ou?ou:ou=ot()}function su(e){return 0===(1&e.mode)?1:0!==(2&Ls)&&0!==Fs?Fs&-Fs:null!==So.transition?(0===iu&&(iu=wt()),iu):0!==(e=Pt)?e:e=void 0===(e=window.event)?16:an(e.type)}function uu(e,t,n,r){if(50<ru)throw ru=0,au=null,Error(o(185));Et(e,n,r),0!==(2&Ls)&&e===Os||(e===Os&&(0===(2&Ls)&&(qs|=n),4===Vs&&pu(e,Fs)),cu(e,r),1===n&&0===Ls&&0===(1&t.mode)&&(Xs=ot()+500,Ya&&Ja()))}function cu(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-pt(o),l=1<<i,s=a[i];-1===s?0!==(l&n)&&0===(l&r)||(a[i]=xt(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}(e,t);var r=yt(e,e===Os?Fs:0);if(0===r)null!==n&&nt(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&nt(n),1===t)0===e.tag?function(e){Ya=!0,Xa(e)}(mu.bind(null,e)):Xa(mu.bind(null,e)),pa(function(){0===(6&Ls)&&Ja()}),n=null;else{switch(jt(r)){case 1:n=lt;break;case 4:n=st;break;case 16:default:n=ut;break;case 536870912:n=At}n=Ou(n,Au.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Au(e,t){if(ou=-1,iu=0,0!==(6&Ls))throw Error(o(327));var n=e.callbackNode;if(zu()&&e.callbackNode!==n)return null;var r=yt(e,e===Os?Fs:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=wu(e,r);else{t=r;var a=Ls;Ls|=2;var i=xu();for(Os===e&&Fs===t||(Js=null,Xs=ot()+500,bu(e,t));;)try{Eu();break}catch(pe){yu(e,pe)}Lo(),Rs.current=i,Ls=a,null!==Ms?t=0:(Os=null,Fs=0,t=Vs)}if(0!==t){if(2===t&&(0!==(a=kt(e))&&(r=a,t=du(e,a))),1===t)throw n=Us,bu(e,0),pu(e,r),cu(e,ot()),n;if(6===t)pu(e,r);else{if(a=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var a=n[r],o=a.getSnapshot;a=a.value;try{if(!mr(o(),a))return!1}catch(l){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(a)&&(2===(t=wu(e,r))&&(0!==(i=kt(e))&&(r=i,t=du(e,i))),1===t))throw n=Us,bu(e,0),pu(e,r),cu(e,ot()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(o(345));case 2:case 5:ju(e,Ys,Js);break;case 3:if(pu(e,r),(130023424&r)===r&&10<(t=Ks+500-ot())){if(0!==yt(e,0))break;if(((a=e.suspendedLanes)&r)!==r){lu(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Aa(ju.bind(null,e,Ys,Js),t);break}ju(e,Ys,Js);break;case 4:if(pu(e,r),(4194240&r)===r)break;for(t=e.eventTimes,a=-1;0<r;){var l=31-pt(r);i=1<<l,(l=t[l])>a&&(a=l),r&=~i}if(r=a,10<(r=(120>(r=ot()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ts(r/1960))-r)){e.timeoutHandle=Aa(ju.bind(null,e,Ys,Js),r);break}ju(e,Ys,Js);break;default:throw Error(o(329))}}}return cu(e,ot()),e.callbackNode===n?Au.bind(null,e):null}function du(e,t){var n=Ws;return e.current.memoizedState.isDehydrated&&(bu(e,t).flags|=256),2!==(e=wu(e,t))&&(t=Ys,Ys=n,null!==t&&fu(t)),e}function fu(e){null===Ys?Ys=e:Ys.push.apply(Ys,e)}function pu(e,t){for(t&=~Hs,t&=~qs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-pt(t),r=1<<n;e[n]=-1,t&=~r}}function mu(e){if(0!==(6&Ls))throw Error(o(327));zu();var t=yt(e,0);if(0===(1&t))return cu(e,ot()),null;var n=wu(e,t);if(0!==e.tag&&2===n){var r=kt(e);0!==r&&(t=r,n=du(e,r))}if(1===n)throw n=Us,bu(e,0),pu(e,t),cu(e,ot()),n;if(6===n)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ju(e,Ys,Js),cu(e,ot()),null}function hu(e,t){var n=Ls;Ls|=1;try{return e(t)}finally{0===(Ls=n)&&(Xs=ot()+500,Ya&&Ja())}}function gu(e){null!==tu&&0===tu.tag&&0===(6&Ls)&&zu();var t=Ls;Ls|=1;var n=Ns.transition,r=Pt;try{if(Ns.transition=null,Pt=1,e)return e()}finally{Pt=r,Ns.transition=n,0===(6&(Ls=t))&&Ja()}}function vu(){Ds=Bs.current,Ia(Bs)}function bu(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,da(n)),null!==Ms)for(n=Ms.return;null!==n;){var r=n;switch(uo(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&Va();break;case 3:oi(),Ia(Ma),Ia(Oa),Ai();break;case 5:li(r);break;case 4:oi();break;case 13:case 19:Ia(si);break;case 10:Oo(r.type._context);break;case 22:case 23:vu()}n=n.return}if(Os=e,Ms=e=Bu(e.current,null),Fs=Ds=t,Vs=0,Us=null,Hs=qs=Qs=0,Ys=Ws=null,null!==Bo){for(t=0;t<Bo.length;t++)if(null!==(r=(n=Bo[t]).interleaved)){n.interleaved=null;var a=r.next,o=n.pending;if(null!==o){var i=o.next;o.next=a,r.next=i}n.pending=r}Bo=null}return e}function yu(e,t){for(;;){var n=Ms;try{if(Lo(),di.current=il,vi){for(var r=mi.memoizedState;null!==r;){var a=r.queue;null!==a&&(a.pending=null),r=r.next}vi=!1}if(pi=0,gi=hi=mi=null,bi=!1,yi=0,Is.current=null,null===n||null===n.return){Vs=1,Us=t,Ms=null;break}e:{var i=e,l=n.return,s=n,u=t;if(t=Fs,s.flags|=32768,null!==u&&"object"===typeof u&&"function"===typeof u.then){var c=u,A=s,d=A.tag;if(0===(1&A.mode)&&(0===d||11===d||15===d)){var f=A.alternate;f?(A.updateQueue=f.updateQueue,A.memoizedState=f.memoizedState,A.lanes=f.lanes):(A.updateQueue=null,A.memoizedState=null)}var p=Sl(l);if(null!==p){p.flags&=-257,El(p,l,s,0,t),1&p.mode&&wl(i,c,t),u=c;var m=(t=p).updateQueue;if(null===m){var h=new Set;h.add(u),t.updateQueue=h}else m.add(u);break e}if(0===(1&t)){wl(i,c,t),ku();break e}u=Error(o(426))}else if(fo&&1&s.mode){var g=Sl(l);if(null!==g){0===(65536&g.flags)&&(g.flags|=256),El(g,l,s,0,t),wo(gl(u,s));break e}}i=u=gl(u,s),4!==Vs&&(Vs=2),null===Ws?Ws=[i]:Ws.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t,Jo(i,xl(0,u,t));break e;case 1:s=u;var v=i.type,b=i.stateNode;if(0===(128&i.flags)&&("function"===typeof v.getDerivedStateFromError||null!==b&&"function"===typeof b.componentDidCatch&&(null===$s||!$s.has(b)))){i.flags|=65536,t&=-t,i.lanes|=t,Jo(i,kl(i,s,t));break e}}i=i.return}while(null!==i)}Pu(n)}catch(y){t=y,Ms===n&&null!==n&&(Ms=n=n.return);continue}break}}function xu(){var e=Rs.current;return Rs.current=il,null===e?il:e}function ku(){0!==Vs&&3!==Vs&&2!==Vs||(Vs=4),null===Os||0===(268435455&Qs)&&0===(268435455&qs)||pu(Os,Fs)}function wu(e,t){var n=Ls;Ls|=2;var r=xu();for(Os===e&&Fs===t||(Js=null,bu(e,t));;)try{Su();break}catch(a){yu(e,a)}if(Lo(),Ls=n,Rs.current=r,null!==Ms)throw Error(o(261));return Os=null,Fs=0,Vs}function Su(){for(;null!==Ms;)Cu(Ms)}function Eu(){for(;null!==Ms&&!rt();)Cu(Ms)}function Cu(e){var t=_s(e.alternate,e,Ds);e.memoizedProps=e.pendingProps,null===t?Pu(e):Ms=t,Is.current=null}function Pu(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=es(n,t,Ds)))return void(Ms=n)}else{if(null!==(n=ts(n,t)))return n.flags&=32767,void(Ms=n);if(null===e)return Vs=6,void(Ms=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Ms=t);Ms=t=e}while(null!==t);0===Vs&&(Vs=5)}function ju(e,t,n){var r=Pt,a=Ns.transition;try{Ns.transition=null,Pt=1,function(e,t,n,r){do{zu()}while(null!==tu);if(0!==(6&Ls))throw Error(o(327));n=e.finishedWork;var a=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-pt(n),o=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~o}}(e,i),e===Os&&(Ms=Os=null,Fs=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||eu||(eu=!0,Ou(ut,function(){return zu(),null})),i=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||i){i=Ns.transition,Ns.transition=null;var l=Pt;Pt=1;var s=Ls;Ls|=4,Is.current=null,function(e,t){if(sa=Zt,xr(e=yr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch(Ne){n=null;break e}var l=0,s=-1,u=-1,c=0,A=0,d=e,f=null;t:for(;;){for(var p;d!==n||0!==a&&3!==d.nodeType||(s=l+a),d!==i||0!==r&&3!==d.nodeType||(u=l+r),3===d.nodeType&&(l+=d.nodeValue.length),null!==(p=d.firstChild);)f=d,d=p;for(;;){if(d===e)break t;if(f===n&&++c===a&&(s=l),f===i&&++A===r&&(u=l),null!==(p=d.nextSibling))break;f=(d=f).parentNode}d=p}n=-1===s||-1===u?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ua={focusedElem:e,selectionRange:n},Zt=!1,os=t;null!==os;)if(e=(t=os).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,os=e;else for(;null!==os;){t=os;try{var m=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var h=m.memoizedProps,g=m.memoizedState,v=t.stateNode,b=v.getSnapshotBeforeUpdate(t.elementType===t.type?h:cl(t.type,h),g);v.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var y=t.stateNode.containerInfo;1===y.nodeType?y.textContent="":9===y.nodeType&&y.documentElement&&y.removeChild(y.documentElement);break;default:throw Error(o(163))}}catch(Ne){Tu(t,t.return,Ne)}if(null!==(e=t.sibling)){e.return=t.return,os=e;break}os=t.return}m=ss,ss=!1}(e,n),ws(n,e),kr(ua),Zt=!!sa,ua=sa=null,e.current=n,Es(n,e,a),at(),Ls=s,Pt=l,Ns.transition=i}else e.current=n;if(eu&&(eu=!1,tu=e,nu=a),i=e.pendingLanes,0===i&&($s=null),function(e){if(ft&&"function"===typeof ft.onCommitFiberRoot)try{ft.onCommitFiberRoot(dt,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),cu(e,ot()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(Gs)throw Gs=!1,e=Zs,Zs=null,e;0!==(1&nu)&&0!==e.tag&&zu(),i=e.pendingLanes,0!==(1&i)?e===au?ru++:(ru=0,au=e):ru=0,Ja()}(e,t,n,r)}finally{Ns.transition=a,Pt=r}return null}function zu(){if(null!==tu){var e=jt(nu),t=Ns.transition,n=Pt;try{if(Ns.transition=null,Pt=16>e?16:e,null===tu)var r=!1;else{if(e=tu,tu=null,nu=0,0!==(6&Ls))throw Error(o(331));var a=Ls;for(Ls|=4,os=e.current;null!==os;){var i=os,l=i.child;if(0!==(16&os.flags)){var s=i.deletions;if(null!==s){for(var u=0;u<s.length;u++){var c=s[u];for(os=c;null!==os;){var A=os;switch(A.tag){case 0:case 11:case 15:us(8,A,i)}var d=A.child;if(null!==d)d.return=A,os=d;else for(;null!==os;){var f=(A=os).sibling,p=A.return;if(ds(A),A===c){os=null;break}if(null!==f){f.return=p,os=f;break}os=p}}}var m=i.alternate;if(null!==m){var h=m.child;if(null!==h){m.child=null;do{var g=h.sibling;h.sibling=null,h=g}while(null!==h)}}os=i}}if(0!==(2064&i.subtreeFlags)&&null!==l)l.return=i,os=l;else e:for(;null!==os;){if(0!==(2048&(i=os).flags))switch(i.tag){case 0:case 11:case 15:us(9,i,i.return)}var v=i.sibling;if(null!==v){v.return=i.return,os=v;break e}os=i.return}}var b=e.current;for(os=b;null!==os;){var y=(l=os).child;if(0!==(2064&l.subtreeFlags)&&null!==y)y.return=l,os=y;else e:for(l=b;null!==os;){if(0!==(2048&(s=os).flags))try{switch(s.tag){case 0:case 11:case 15:cs(9,s)}}catch(k){Tu(s,s.return,k)}if(s===l){os=null;break e}var x=s.sibling;if(null!==x){x.return=s.return,os=x;break e}os=s.return}}if(Ls=a,Ja(),ft&&"function"===typeof ft.onPostCommitFiberRoot)try{ft.onPostCommitFiberRoot(dt,e)}catch(k){}r=!0}return r}finally{Pt=n,Ns.transition=t}}return!1}function _u(e,t,n){e=Ko(e,t=xl(0,t=gl(n,t),1),1),t=lu(),null!==e&&(Et(e,1,t),cu(e,t))}function Tu(e,t,n){if(3===e.tag)_u(e,e,n);else for(;null!==t;){if(3===t.tag){_u(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===$s||!$s.has(r))){t=Ko(t,e=kl(t,e=gl(n,e),1),1),e=lu(),null!==t&&(Et(t,1,e),cu(t,e));break}}t=t.return}}function Ru(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=lu(),e.pingedLanes|=e.suspendedLanes&n,Os===e&&(Fs&n)===n&&(4===Vs||3===Vs&&(130023424&Fs)===Fs&&500>ot()-Ks?bu(e,0):Hs|=n),cu(e,t)}function Iu(e,t){0===t&&(0===(1&e.mode)?t=1:(t=vt,0===(130023424&(vt<<=1))&&(vt=4194304)));var n=lu();null!==(e=Qo(e,t))&&(Et(e,t,n),cu(e,n))}function Nu(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Iu(e,n)}function Lu(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;null!==a&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(o(314))}null!==r&&r.delete(t),Iu(e,n)}function Ou(e,t){return tt(e,t)}function Mu(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fu(e,t,n,r){return new Mu(e,t,n,r)}function Du(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Bu(e,t){var n=e.alternate;return null===n?((n=Fu(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Vu(e,t,n,r,a,i){var l=2;if(r=e,"function"===typeof e)Du(e)&&(l=1);else if("string"===typeof e)l=5;else e:switch(e){case w:return Uu(n.children,a,i,t);case S:l=8,a|=8;break;case E:return(e=Fu(12,n,t,2|a)).elementType=E,e.lanes=i,e;case z:return(e=Fu(13,n,t,a)).elementType=z,e.lanes=i,e;case _:return(e=Fu(19,n,t,a)).elementType=_,e.lanes=i,e;case I:return Qu(n,a,i,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case C:l=10;break e;case P:l=9;break e;case j:l=11;break e;case T:l=14;break e;case R:l=16,r=null;break e}throw Error(o(130,null==e?e:typeof e,""))}return(t=Fu(l,n,t,a)).elementType=e,t.type=r,t.lanes=i,t}function Uu(e,t,n,r){return(e=Fu(7,e,r,t)).lanes=n,e}function Qu(e,t,n,r){return(e=Fu(22,e,r,t)).elementType=I,e.lanes=n,e.stateNode={isHidden:!1},e}function qu(e,t,n){return(e=Fu(6,e,null,t)).lanes=n,e}function Hu(e,t,n){return(t=Fu(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Wu(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=St(0),this.expirationTimes=St(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=St(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Yu(e,t,n,r,a,o,i,l,s){return e=new Wu(e,t,n,l,s),1===t?(t=1,!0===o&&(t|=8)):t=0,o=Fu(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ho(o),e}function Ku(e){if(!e)return La;e:{if(Je(e=e._reactInternals)!==e||1!==e.tag)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ba(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(o(171))}if(1===e.tag){var n=e.type;if(Ba(n))return Qa(e,n,t)}return t}function Xu(e,t,n,r,a,o,i,l,s){return(e=Yu(n,r,!0,e,0,o,0,l,s)).context=Ku(null),n=e.current,(o=Yo(r=lu(),a=su(n))).callback=void 0!==t&&null!==t?t:null,Ko(n,o,a),e.current.lanes=a,Et(e,a,r),cu(e,r),e}function Ju(e,t,n,r){var a=t.current,o=lu(),i=su(a);return n=Ku(n),null===t.context?t.context=n:t.pendingContext=n,(t=Yo(o,i)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Ko(a,t,i))&&(uu(e,a,i,o),Xo(e,a,i)),i}function Gu(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Zu(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function $u(e,t){Zu(e,t),(e=e.alternate)&&Zu(e,t)}_s=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Ma.current)Pl=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return Pl=!1,function(e,t,n){switch(t.tag){case 3:Ml(t),ko();break;case 5:ii(t);break;case 1:Ba(t.type)&&qa(t);break;case 4:ai(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;Na(To,r._currentValue),r._currentValue=a;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Na(si,1&si.current),t.flags|=128,null):0!==(n&t.child.childLanes)?ql(e,t,n):(Na(si,1&si.current),null!==(e=Gl(e,t,n))?e.sibling:null);Na(si,1&si.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return Xl(e,t,n);t.flags|=128}if(null!==(a=t.memoizedState)&&(a.rendering=null,a.tail=null,a.lastEffect=null),Na(si,si.current),r)break;return null;case 22:case 23:return t.lanes=0,Rl(e,t,n)}return Gl(e,t,n)}(e,t,n);Pl=0!==(131072&e.flags)}else Pl=!1,fo&&0!==(1048576&t.flags)&&lo(t,eo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Jl(e,t),e=t.pendingProps;var a=Da(t,Oa.current);Fo(t,n),a=Si(null,t,r,e,a,n);var i=Ei();return t.flags|=1,"object"===typeof a&&null!==a&&"function"===typeof a.render&&void 0===a.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ba(r)?(i=!0,qa(t)):i=!1,t.memoizedState=null!==a.state&&void 0!==a.state?a.state:null,Ho(t),a.updater=dl,t.stateNode=a,a._reactInternals=t,hl(t,r,e,n),t=Ol(null,t,r,!0,i,n)):(t.tag=0,fo&&i&&so(t),jl(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Jl(e,t),e=t.pendingProps,r=(a=r._init)(r._payload),t.type=r,a=t.tag=function(e){if("function"===typeof e)return Du(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===j)return 11;if(e===T)return 14}return 2}(r),e=cl(r,e),a){case 0:t=Nl(null,t,r,e,n);break e;case 1:t=Ll(null,t,r,e,n);break e;case 11:t=zl(null,t,r,e,n);break e;case 14:t=_l(null,t,r,cl(r.type,e),n);break e}throw Error(o(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,Nl(e,t,r,a=t.elementType===r?a:cl(r,a),n);case 1:return r=t.type,a=t.pendingProps,Ll(e,t,r,a=t.elementType===r?a:cl(r,a),n);case 3:e:{if(Ml(t),null===e)throw Error(o(387));r=t.pendingProps,a=(i=t.memoizedState).element,Wo(e,t),Go(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated){if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,256&t.flags){t=Fl(e,t,r,n,a=gl(Error(o(423)),t));break e}if(r!==a){t=Fl(e,t,r,n,a=gl(Error(o(424)),t));break e}for(Ao=ga(t.stateNode.containerInfo.firstChild),co=t,fo=!0,po=null,n=_o(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(ko(),r===a){t=Gl(e,t,n);break e}jl(e,t,r,n)}t=t.child}return t;case 5:return ii(t),null===e&&vo(t),r=t.type,a=t.pendingProps,i=null!==e?e.memoizedProps:null,l=a.children,ca(r,a)?l=null:null!==i&&ca(r,i)&&(t.flags|=32),Il(e,t),jl(e,t,l,n),t.child;case 6:return null===e&&vo(t),null;case 13:return ql(e,t,n);case 4:return ai(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=zo(t,null,r,n):jl(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,zl(e,t,r,a=t.elementType===r?a:cl(r,a),n);case 7:return jl(e,t,t.pendingProps,n),t.child;case 8:case 12:return jl(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,i=t.memoizedProps,l=a.value,Na(To,r._currentValue),r._currentValue=l,null!==i)if(mr(i.value,l)){if(i.children===a.children&&!Ma.current){t=Gl(e,t,n);break e}}else for(null!==(i=t.child)&&(i.return=t);null!==i;){var s=i.dependencies;if(null!==s){l=i.child;for(var u=s.firstContext;null!==u;){if(u.context===r){if(1===i.tag){(u=Yo(-1,n&-n)).tag=2;var c=i.updateQueue;if(null!==c){var A=(c=c.shared).pending;null===A?u.next=u:(u.next=A.next,A.next=u),c.pending=u}}i.lanes|=n,null!==(u=i.alternate)&&(u.lanes|=n),Mo(i.return,n,t),s.lanes|=n;break}u=u.next}}else if(10===i.tag)l=i.type===t.type?null:i.child;else if(18===i.tag){if(null===(l=i.return))throw Error(o(341));l.lanes|=n,null!==(s=l.alternate)&&(s.lanes|=n),Mo(l,n,t),l=i.sibling}else l=i.child;if(null!==l)l.return=i;else for(l=i;null!==l;){if(l===t){l=null;break}if(null!==(i=l.sibling)){i.return=l.return,l=i;break}l=l.return}i=l}jl(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,Fo(t,n),r=r(a=Do(a)),t.flags|=1,jl(e,t,r,n),t.child;case 14:return a=cl(r=t.type,t.pendingProps),_l(e,t,r,a=cl(r.type,a),n);case 15:return Tl(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:cl(r,a),Jl(e,t),t.tag=1,Ba(r)?(e=!0,qa(t)):e=!1,Fo(t,n),pl(t,r,a),hl(t,r,a,n),Ol(null,t,r,!0,e,n);case 19:return Xl(e,t,n);case 22:return Rl(e,t,n)}throw Error(o(156,t.tag))};var ec="function"===typeof reportError?reportError:function(e){console.error(e)};function tc(e){this._internalRoot=e}function nc(e){this._internalRoot=e}function rc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function ac(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function oc(){}function ic(e,t,n,r,a){var o=n._reactRootContainer;if(o){var i=o;if("function"===typeof a){var l=a;a=function(){var e=Gu(i);l.call(e)}}Ju(t,i,e,a)}else i=function(e,t,n,r,a){if(a){if("function"===typeof r){var o=r;r=function(){var e=Gu(i);o.call(e)}}var i=Xu(t,r,e,0,null,!1,0,"",oc);return e._reactRootContainer=i,e[ka]=i.current,Jr(8===e.nodeType?e.parentNode:e),gu(),i}for(;a=e.lastChild;)e.removeChild(a);if("function"===typeof r){var l=r;r=function(){var e=Gu(s);l.call(e)}}var s=Yu(e,0,!1,null,0,!1,0,"",oc);return e._reactRootContainer=s,e[ka]=s.current,Jr(8===e.nodeType?e.parentNode:e),gu(function(){Ju(t,s,n,r)}),s}(n,t,e,a,r);return Gu(i)}nc.prototype.render=tc.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(o(409));Ju(e,t,null,null)},nc.prototype.unmount=tc.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;gu(function(){Ju(null,e,null,null)}),t[ka]=null}},nc.prototype.unstable_scheduleHydration=function(e){if(e){var t=Rt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Vt.length&&0!==t&&t<Vt[n].priority;n++);Vt.splice(n,0,e),0===n&&Ht(e)}},zt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=bt(t.pendingLanes);0!==n&&(Ct(t,1|n),cu(t,ot()),0===(6&Ls)&&(Xs=ot()+500,Ja()))}break;case 13:gu(function(){var t=Qo(e,1);if(null!==t){var n=lu();uu(t,e,1,n)}}),$u(e,1)}},_t=function(e){if(13===e.tag){var t=Qo(e,134217728);if(null!==t)uu(t,e,134217728,lu());$u(e,134217728)}},Tt=function(e){if(13===e.tag){var t=su(e),n=Qo(e,t);if(null!==n)uu(n,e,t,lu());$u(e,t)}},Rt=function(){return Pt},It=function(e,t){var n=Pt;try{return Pt=e,t()}finally{Pt=n}},je=function(e,t,n){switch(t){case"input":if(Z(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=za(r);if(!a)throw Error(o(90));Y(r),Z(r,a)}}}break;case"textarea":oe(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},Oe=hu,Me=gu;var lc={usingClientEntryPoint:!1,Events:[Pa,ja,za,Ie,Le,hu]},sc={findFiberByHostInstance:Ca,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},uc={bundleType:sc.bundleType,version:sc.version,rendererPackageName:sc.rendererPackageName,rendererConfig:sc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:y.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=$e(e))?null:e.stateNode},findFiberByHostInstance:sc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var cc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cc.isDisabled&&cc.supportsFiber)try{dt=cc.inject(uc),ft=cc}catch(ue){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lc,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!rc(t))throw Error(o(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:k,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!rc(e))throw Error(o(299));var n=!1,r="",a=ec;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(a=t.onRecoverableError)),t=Yu(e,1,!1,null,0,n,0,r,a),e[ka]=t.current,Jr(8===e.nodeType?e.parentNode:e),new tc(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(o(188));throw e=Object.keys(e).join(","),Error(o(268,e))}return e=null===(e=$e(t))?null:e.stateNode},t.flushSync=function(e){return gu(e)},t.hydrate=function(e,t,n){if(!ac(t))throw Error(o(200));return ic(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!rc(e))throw Error(o(405));var r=null!=n&&n.hydratedSources||null,a=!1,i="",l=ec;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(a=!0),void 0!==n.identifierPrefix&&(i=n.identifierPrefix),void 0!==n.onRecoverableError&&(l=n.onRecoverableError)),t=Xu(t,null,e,1,null!=n?n:null,a,0,i,l),e[ka]=t.current,Jr(e),r)for(e=0;e<r.length;e++)a=(a=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new nc(t)},t.render=function(e,t,n){if(!ac(t))throw Error(o(200));return ic(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!ac(e))throw Error(o(40));return!!e._reactRootContainer&&(gu(function(){ic(null,null,e,!1,function(){e._reactRootContainer=null,e[ka]=null})}),!0)},t.unstable_batchedUpdates=hu,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ac(n))throw Error(o(200));if(null==e||void 0===e._reactInternals)throw Error(o(38));return ic(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},391(e,t,n){var r=n(950);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},950(e,t,n){!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(730)},153(e,t,n){var r=n(43),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,o={},u=null,c=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,r)&&!s.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:a,type:e,key:u,ref:c,props:o,_owner:l.current}}t.Fragment=o,t.jsx=u,t.jsxs=u},202(e,t){var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),A=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),f=Symbol.iterator;var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,h={};function g(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||p}function v(){}function b(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||p}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=g.prototype;var y=b.prototype=new v;y.constructor=b,m(y,g.prototype),y.isPureReactComponent=!0;var x=Array.isArray,k=Object.prototype.hasOwnProperty,w={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var a,o={},i=null,l=null;if(null!=t)for(a in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)k.call(t,a)&&!S.hasOwnProperty(a)&&(o[a]=t[a]);var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===o[a]&&(o[a]=s[a]);return{$$typeof:n,type:e,key:i,ref:l,props:o,_owner:w.current}}function C(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var P=/\/+/g;function j(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function z(e,t,a,o,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return i=i(s=e),e=""===o?"."+j(s,0):o,x(i)?(a="",null!=e&&(a=e.replace(P,"$&/")+"/"),z(i,t,a,"",function(e){return e})):null!=i&&(C(i)&&(i=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,a+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(P,"$&/")+"/")+e)),t.push(i)),1;if(s=0,o=""===o?".":o+":",x(e))for(var u=0;u<e.length;u++){var c=o+j(l=e[u],u);s+=z(l,t,a,c,i)}else if(c=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"===typeof c)for(e=c.call(e),u=0;!(l=e.next()).done;)s+=z(l=l.value,t,a,c=o+j(l,u++),i);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function _(e,t,n){if(null==e)return e;var r=[],a=0;return z(e,r,"","",function(e){return t.call(n,e,a++)}),r}function T(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var R={current:null},I={transition:null},N={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:I,ReactCurrentOwner:w};function L(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:_,forEach:function(e,t,n){_(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return _(e,function(){t++}),t},toArray:function(e){return _(e,function(e){return e})||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=g,t.Fragment=a,t.Profiler=i,t.PureComponent=b,t.StrictMode=o,t.Suspense=c,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N,t.act=L,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=m({},e.props),o=e.key,i=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,l=w.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)k.call(t,u)&&!S.hasOwnProperty(u)&&(a[u]=void 0===t[u]&&void 0!==s?s[u]:t[u])}var u=arguments.length-2;if(1===u)a.children=r;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];a.children=s}return{$$typeof:n,type:e.type,key:o,ref:i,props:a,_owner:l}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:T}},t.memo=function(e,t){return{$$typeof:A,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},t.unstable_act=L,t.useCallback=function(e,t){return R.current.useCallback(e,t)},t.useContext=function(e){return R.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return R.current.useDeferredValue(e)},t.useEffect=function(e,t){return R.current.useEffect(e,t)},t.useId=function(){return R.current.useId()},t.useImperativeHandle=function(e,t,n){return R.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return R.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return R.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return R.current.useMemo(e,t)},t.useReducer=function(e,t,n){return R.current.useReducer(e,t,n)},t.useRef=function(e){return R.current.useRef(e)},t.useState=function(e){return R.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return R.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return R.current.useTransition()},t.version="18.3.1"},43(e,t,n){e.exports=n(202)},579(e,t,n){e.exports=n(153)},234(e,t){function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,a=e[r];if(!(0<o(a,t)))break e;e[r]=t,e[n]=a,n=r}}function r(e){return 0===e.length?null:e[0]}function a(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,a=e.length,i=a>>>1;r<i;){var l=2*(r+1)-1,s=e[l],u=l+1,c=e[u];if(0>o(s,n))u<a&&0>o(c,s)?(e[r]=c,e[u]=n,r=u):(e[r]=s,e[l]=n,r=l);else{if(!(u<a&&0>o(c,n)))break e;e[r]=c,e[u]=n,r=u}}}return t}function o(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var i=performance;t.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var u=[],c=[],A=1,d=null,f=3,p=!1,m=!1,h=!1,g="function"===typeof setTimeout?setTimeout:null,v="function"===typeof clearTimeout?clearTimeout:null,b="undefined"!==typeof setImmediate?setImmediate:null;function y(e){for(var t=r(c);null!==t;){if(null===t.callback)a(c);else{if(!(t.startTime<=e))break;a(c),t.sortIndex=t.expirationTime,n(u,t)}t=r(c)}}function x(e){if(h=!1,y(e),!m)if(null!==r(u))m=!0,I(k);else{var t=r(c);null!==t&&N(x,t.startTime-e)}}function k(e,n){m=!1,h&&(h=!1,v(C),C=-1),p=!0;var o=f;try{for(y(n),d=r(u);null!==d&&(!(d.expirationTime>n)||e&&!z());){var i=d.callback;if("function"===typeof i){d.callback=null,f=d.priorityLevel;var l=i(d.expirationTime<=n);n=t.unstable_now(),"function"===typeof l?d.callback=l:d===r(u)&&a(u),y(n)}else a(u);d=r(u)}if(null!==d)var s=!0;else{var A=r(c);null!==A&&N(x,A.startTime-n),s=!1}return s}finally{d=null,f=o,p=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var w,S=!1,E=null,C=-1,P=5,j=-1;function z(){return!(t.unstable_now()-j<P)}function _(){if(null!==E){var e=t.unstable_now();j=e;var n=!0;try{n=E(!0,e)}finally{n?w():(S=!1,E=null)}}else S=!1}if("function"===typeof b)w=function(){b(_)};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,R=T.port2;T.port1.onmessage=_,w=function(){R.postMessage(null)}}else w=function(){g(_,0)};function I(e){E=e,S||(S=!0,w())}function N(e,n){C=g(function(){e(t.unstable_now())},n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||p||(m=!0,I(k))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return r(u)},t.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},t.unstable_scheduleCallback=function(e,a,o){var i=t.unstable_now();switch("object"===typeof o&&null!==o?o="number"===typeof(o=o.delay)&&0<o?i+o:i:o=i,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:A++,callback:a,priorityLevel:e,startTime:o,expirationTime:l=o+l,sortIndex:-1},o>i?(e.sortIndex=o,n(c,e),null===r(u)&&e===r(c)&&(h?(v(C),C=-1):h=!0,N(x,o-i))):(e.sortIndex=l,n(u,e),m||p||(m=!0,I(k))),e},t.unstable_shouldYield=z,t.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}},853(e,t,n){e.exports=n(234)}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.p="/portfolio/",n.nc=void 0;var r=n(43),a=n(391),o=n(579);const i=(0,r.createContext)();function l(e){let{children:t}=e;const[n,a]=(0,r.useState)(()=>{const e=localStorage.getItem("iza-theme");return e?"dark"===e:window.matchMedia("(prefers-color-scheme: dark)").matches});(0,r.useEffect)(()=>{localStorage.setItem("iza-theme",n?"dark":"light"),document.documentElement.setAttribute("data-theme",n?"dark":"light")},[n]);return(0,o.jsx)(i.Provider,{value:{dark:n,toggle:()=>a(e=>!e)},children:t})}var s=function(){return s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},s.apply(this,arguments)};Object.create;function u(e,t,n){if(n||2===arguments.length)for(var r,a=0,o=t.length;a<o;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var c="-ms-",A="-moz-",d="-webkit-",f="comm",p="rule",m="decl",h="@keyframes",g=Math.abs,v=String.fromCharCode,b=Object.assign;function y(e){return e.trim()}function x(e,t){return(e=t.exec(e))?e[0]:e}function k(e,t,n){return e.replace(t,n)}function w(e,t,n){return e.indexOf(t,n)}function S(e,t){return 0|e.charCodeAt(t)}function E(e,t,n){return e.slice(t,n)}function C(e){return e.length}function P(e){return e.length}function j(e,t){return t.push(e),e}function z(e,t){return e.filter(function(e){return!x(e,t)})}var _=1,T=1,R=0,I=0,N=0,L="";function O(e,t,n,r,a,o,i,l){return{value:e,root:t,parent:n,type:r,props:a,children:o,line:_,column:T,length:i,return:"",siblings:l}}function M(e,t){return b(O("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function F(e){for(;e.root;)e=M(e.root,{children:[e]});j(e,e.siblings)}function D(){return N=I>0?S(L,--I):0,T--,10===N&&(T=1,_--),N}function B(){return N=I<R?S(L,I++):0,T++,10===N&&(T=1,_++),N}function V(){return S(L,I)}function U(){return I}function Q(e,t){return E(L,e,t)}function q(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function H(e){return _=T=1,R=C(L=e),I=0,[]}function W(e){return L="",e}function Y(e){return y(Q(I-1,J(91===e?e+2:40===e?e+1:e)))}function K(e){for(;(N=V())&&N<33;)B();return q(e)>2||q(N)>3?"":" "}function X(e,t){for(;--t&&B()&&!(N<48||N>102||N>57&&N<65||N>70&&N<97););return Q(e,U()+(t<6&&32==V()&&32==B()))}function J(e){for(;B();)switch(N){case e:return I;case 34:case 39:34!==e&&39!==e&&J(N);break;case 40:41===e&&J(e);break;case 92:B()}return I}function G(e,t){for(;B()&&e+N!==57&&(e+N!==84||47!==V()););return"/*"+Q(t,I-1)+"*"+v(47===e?e:B())}function Z(e){for(;!q(V());)B();return Q(e,I)}function $(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function ee(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case"@namespace":case m:return e.return=e.return||e.value;case f:return"";case h:return e.return=e.value+"{"+$(e.children,r)+"}";case p:if(!C(e.value=e.props.join(",")))return""}return C(n=$(e.children,r))?e.return=e.value+"{"+n+"}":""}function te(e,t,n){switch(function(e,t){return 45^S(e,0)?(((t<<2^S(e,0))<<2^S(e,1))<<2^S(e,2))<<2^S(e,3):0}(e,t)){case 5103:return d+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return d+e+e;case 4855:return d+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return A+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return d+e+A+e+c+e+e;case 5936:switch(S(e,t+11)){case 114:return d+e+c+k(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return d+e+c+k(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return d+e+c+k(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return d+e+c+e+e;case 6165:return d+e+c+"flex-"+e+e;case 5187:return d+e+k(e,/(\w+).+(:[^]+)/,d+"box-$1$2"+c+"flex-$1$2")+e;case 5443:return d+e+c+"flex-item-"+k(e,/flex-|-self/g,"")+(x(e,/flex-|baseline/)?"":c+"grid-row-"+k(e,/flex-|-self/g,""))+e;case 4675:return d+e+c+"flex-line-pack"+k(e,/align-content|flex-|-self/g,"")+e;case 5548:return d+e+c+k(e,"shrink","negative")+e;case 5292:return d+e+c+k(e,"basis","preferred-size")+e;case 6060:return d+"box-"+k(e,"-grow","")+d+e+c+k(e,"grow","positive")+e;case 4554:return d+k(e,/([^-])(transform)/g,"$1"+d+"$2")+e;case 6187:return k(k(k(e,/(zoom-|grab)/,d+"$1"),/(image-set)/,d+"$1"),e,"")+e;case 5495:case 3959:return k(e,/(image-set\([^]*)/,d+"$1$`$1");case 4968:return k(k(e,/(.+:)(flex-)?(.*)/,d+"box-pack:$3"+c+"flex-pack:$3"),/space-between/,"justify")+d+e+e;case 4200:if(!x(e,/flex-|baseline/))return c+"grid-column-align"+E(e,t)+e;break;case 2592:case 3360:return c+k(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,x(e.props,/grid-\w+-end/)})?~w(e+(n=n[t].value),"span",0)?e:c+k(e,"-start","")+e+c+"grid-row-span:"+(~w(n,"span",0)?x(n,/\d+/):+x(n,/\d+/)-+x(e,/\d+/))+";":c+k(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(e){return x(e.props,/grid-\w+-start/)})?e:c+k(k(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return k(e,/(.+)-inline(.+)/,d+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(C(e)-1-t>6)switch(S(e,t+1)){case 109:if(45!==S(e,t+4))break;case 102:return k(e,/(.+:)(.+)-([^]+)/,"$1"+d+"$2-$3$1"+A+(108==S(e,t+3)?"$3":"$2-$3"))+e;case 115:return~w(e,"stretch",0)?te(k(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return k(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,a,o,i,l){return c+n+":"+r+l+(a?c+n+"-span:"+(o?i:+i-+r)+l:"")+e});case 4949:if(121===S(e,t+6))return k(e,":",":"+d)+e;break;case 6444:switch(S(e,45===S(e,14)?18:11)){case 120:return k(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+d+(45===S(e,14)?"inline-":"")+"box$3$1"+d+"$2$3$1"+c+"$2box$3")+e;case 100:return k(e,":",":"+c)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return k(e,"scroll-","scroll-snap-")+e}return e}function ne(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case m:return void(e.return=te(e.value,e.length,n));case h:return $([M(e,{value:k(e.value,"@","@"+d)})],r);case p:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,function(t){switch(x(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":F(M(e,{props:[k(t,/:(read-\w+)/,":-moz-$1")]})),F(M(e,{props:[t]})),b(e,{props:z(n,r)});break;case"::placeholder":F(M(e,{props:[k(t,/:(plac\w+)/,":"+d+"input-$1")]})),F(M(e,{props:[k(t,/:(plac\w+)/,":-moz-$1")]})),F(M(e,{props:[k(t,/:(plac\w+)/,c+"input-$1")]})),F(M(e,{props:[t]})),b(e,{props:z(n,r)})}return""})}}function re(e){return W(ae("",null,null,null,[""],e=H(e),0,[0],e))}function ae(e,t,n,r,a,o,i,l,s){for(var u=0,c=0,A=i,d=0,f=0,p=0,m=1,h=1,b=1,y=0,x="",P=a,z=o,_=r,T=x;h;)switch(p=y,y=B()){case 40:if(108!=p&&58==S(T,A-1)){-1!=w(T+=k(Y(y),"&","&\f"),"&\f",g(u?l[u-1]:0))&&(b=-1);break}case 34:case 39:case 91:T+=Y(y);break;case 9:case 10:case 13:case 32:T+=K(p);break;case 92:T+=X(U()-1,7);continue;case 47:switch(V()){case 42:case 47:j(ie(G(B(),U()),t,n,s),s),5!=q(p||1)&&5!=q(V()||1)||!C(T)||" "===E(T,-1,void 0)||(T+=" ");break;default:T+="/"}break;case 123*m:l[u++]=C(T)*b;case 125*m:case 59:case 0:switch(y){case 0:case 125:h=0;case 59+c:-1==b&&(T=k(T,/\f/g,"")),f>0&&(C(T)-A||0===m&&47===p)&&j(f>32?le(T+";",r,n,A-1,s):le(k(T," ","")+";",r,n,A-2,s),s);break;case 59:T+=";";default:if(j(_=oe(T,t,n,u,c,a,l,x,P=[],z=[],A,o),o),123===y)if(0===c)ae(T,t,_,_,P,o,A,l,z);else{switch(d){case 99:if(110===S(T,3))break;case 108:if(97===S(T,2))break;default:c=0;case 100:case 109:case 115:}c?ae(e,_,_,r&&j(oe(e,_,_,0,0,a,l,x,a,P=[],A,z),z),a,z,A,l,r?P:z):ae(T,_,_,_,[""],z,0,l,z)}}u=c=f=0,m=b=1,x=T="",A=i;break;case 58:A=1+C(T),f=p;default:if(m<1)if(123==y)--m;else if(125==y&&0==m++&&125==D())continue;switch(T+=v(y),y*m){case 38:b=c>0?1:(T+="\f",-1);break;case 44:l[u++]=(C(T)-1)*b,b=1;break;case 64:45===V()&&(T+=Y(B())),d=V(),c=A=C(x=T+=Z(U())),y++;break;case 45:45===p&&2==C(T)&&(m=0)}}return o}function oe(e,t,n,r,a,o,i,l,s,u,c,A){for(var d=a-1,f=0===a?o:[""],m=P(f),h=0,v=0,b=0;h<r;++h)for(var x=0,w=E(e,d+1,d=g(v=i[h])),S=e;x<m;++x)(S=y(v>0?f[x]+" "+w:k(w,/&\f/g,f[x])))&&(s[b++]=S);return O(e,t,n,0===a?p:l,s,u,c,A)}function ie(e,t,n,r){return O(e,t,n,f,v(N),E(e,2,-2),0,r)}function le(e,t,n,r,a){return O(e,t,n,m,E(e,0,r),E(e,r+1,-1),r,a)}var se={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ue="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_EMAILJS_PUBLIC_KEY:"oeHkI3XYftME2KOZ_",REACT_APP_EMAILJS_SERVICE_ID:"service_lk5zmy8",REACT_APP_EMAILJS_TEMPLATE_ID:"template_tfx86s1"}&&({NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_EMAILJS_PUBLIC_KEY:"oeHkI3XYftME2KOZ_",REACT_APP_EMAILJS_SERVICE_ID:"service_lk5zmy8",REACT_APP_EMAILJS_TEMPLATE_ID:"template_tfx86s1"}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_EMAILJS_PUBLIC_KEY:"oeHkI3XYftME2KOZ_",REACT_APP_EMAILJS_SERVICE_ID:"service_lk5zmy8",REACT_APP_EMAILJS_TEMPLATE_ID:"template_tfx86s1"}.SC_ATTR)||"data-styled",ce="active",Ae="data-styled-version",de="6.3.11",fe="/*!sc*/\n",pe="undefined"!=typeof window&&"undefined"!=typeof document,me=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_EMAILJS_PUBLIC_KEY:"oeHkI3XYftME2KOZ_",REACT_APP_EMAILJS_SERVICE_ID:"service_lk5zmy8",REACT_APP_EMAILJS_TEMPLATE_ID:"template_tfx86s1"}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_EMAILJS_PUBLIC_KEY:"oeHkI3XYftME2KOZ_",REACT_APP_EMAILJS_SERVICE_ID:"service_lk5zmy8",REACT_APP_EMAILJS_TEMPLATE_ID:"template_tfx86s1"}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_EMAILJS_PUBLIC_KEY:"oeHkI3XYftME2KOZ_",REACT_APP_EMAILJS_SERVICE_ID:"service_lk5zmy8",REACT_APP_EMAILJS_TEMPLATE_ID:"template_tfx86s1"}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_EMAILJS_PUBLIC_KEY:"oeHkI3XYftME2KOZ_",REACT_APP_EMAILJS_SERVICE_ID:"service_lk5zmy8",REACT_APP_EMAILJS_TEMPLATE_ID:"template_tfx86s1"}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_EMAILJS_PUBLIC_KEY:"oeHkI3XYftME2KOZ_",REACT_APP_EMAILJS_SERVICE_ID:"service_lk5zmy8",REACT_APP_EMAILJS_TEMPLATE_ID:"template_tfx86s1"}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_EMAILJS_PUBLIC_KEY:"oeHkI3XYftME2KOZ_",REACT_APP_EMAILJS_SERVICE_ID:"service_lk5zmy8",REACT_APP_EMAILJS_TEMPLATE_ID:"template_tfx86s1"}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_EMAILJS_PUBLIC_KEY:"oeHkI3XYftME2KOZ_",REACT_APP_EMAILJS_SERVICE_ID:"service_lk5zmy8",REACT_APP_EMAILJS_TEMPLATE_ID:"template_tfx86s1"}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_EMAILJS_PUBLIC_KEY:"oeHkI3XYftME2KOZ_",REACT_APP_EMAILJS_SERVICE_ID:"service_lk5zmy8",REACT_APP_EMAILJS_TEMPLATE_ID:"template_tfx86s1"}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_EMAILJS_PUBLIC_KEY:"oeHkI3XYftME2KOZ_",REACT_APP_EMAILJS_SERVICE_ID:"service_lk5zmy8",REACT_APP_EMAILJS_TEMPLATE_ID:"template_tfx86s1"}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_EMAILJS_PUBLIC_KEY:"oeHkI3XYftME2KOZ_",REACT_APP_EMAILJS_SERVICE_ID:"service_lk5zmy8",REACT_APP_EMAILJS_TEMPLATE_ID:"template_tfx86s1"}.SC_DISABLE_SPEEDY)),he={};function ge(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var ve=new Map,be=new Map,ye=1,xe=function(e){if(ve.has(e))return ve.get(e);for(;be.has(ye);)ye++;var t=ye++;return ve.set(e,t),be.set(t,e),t},ke=function(e,t){ye=t+1,ve.set(e,t),be.set(t,e)},we=(new Set,Object.freeze([])),Se=Object.freeze({});function Ee(e,t,n){return void 0===n&&(n=Se),e.theme!==n.theme&&e.theme||t||n.theme}var Ce=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),Pe=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,je=/(^-|-$)/g;function ze(e){return e.replace(Pe,"-").replace(je,"")}var _e=/(a)(d)/gi,Te=function(e){return String.fromCharCode(e+(e>25?39:97))};function Re(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Te(t%52)+n;return(Te(t%52)+n).replace(_e,"$1-$2")}var Ie,Ne=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Le=function(e){return Ne(5381,e)};function Oe(e){return Re(Le(e)>>>0)}function Me(e){return e.displayName||e.name||"Component"}function Fe(e){return"string"==typeof e&&!0}var De="function"==typeof Symbol&&Symbol.for,Be=De?Symbol.for("react.memo"):60115,Ve=De?Symbol.for("react.forward_ref"):60112,Ue={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Qe={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},qe={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},He=((Ie={})[Ve]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ie[Be]=qe,Ie);function We(e){return("type"in(t=e)&&t.type.$$typeof)===Be?qe:"$$typeof"in e?He[e.$$typeof]:Ue;var t}var Ye=Object.defineProperty,Ke=Object.getOwnPropertyNames,Xe=Object.getOwnPropertySymbols,Je=Object.getOwnPropertyDescriptor,Ge=Object.getPrototypeOf,Ze=Object.prototype;function $e(e,t,n){if("string"!=typeof t){if(Ze){var r=Ge(t);r&&r!==Ze&&$e(e,r,n)}var a=Ke(t);Xe&&(a=a.concat(Xe(t)));for(var o=We(e),i=We(t),l=0;l<a.length;++l){var s=a[l];if(!(s in Qe||n&&n[s]||i&&s in i||o&&s in o)){var u=Je(t,s);try{Ye(e,s,u)}catch(e){}}}}return e}function et(e){return"function"==typeof e}function tt(e){return"object"==typeof e&&"styledComponentId"in e}function nt(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function rt(e,t){return e.join(t||"")}function at(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ot(e,t,n){if(void 0===n&&(n=!1),!n&&!at(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=ot(e[r],t[r]);else if(at(t))for(var r in t)e[r]=ot(e[r],t[r]);return e}function it(e,t){Object.defineProperty(e,"toString",{value:t})}var lt=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}return e.prototype.indexOfGroup=function(e){if(e===this._cGroup)return this._cIndex;var t=this._cIndex;if(e>this._cGroup)for(var n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,a=r;e>=a;)if((a<<=1)<0)throw ge(16,"".concat(e));this.groupSizes=new Uint32Array(a),this.groupSizes.set(n),this.length=a;for(var o=r;o<a;o++)this.groupSizes[o]=0}for(var i=this.indexOfGroup(e+1),l=0,s=(o=0,t.length);o<s;o++)this.tag.insertRule(i,t[o])&&(this.groupSizes[e]++,i++,l++);l>0&&this._cGroup>e&&(this._cIndex+=l)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var a=n;a<r;a++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),a=r+n,o=r;o<a;o++)t+=this.tag.getRule(o)+fe;return t},e}(),st="style[".concat(ue,"][").concat(Ae,'="').concat(de,'"]'),ut=new RegExp("^".concat(ue,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ct=function(e){return"undefined"!=typeof ShadowRoot&&e instanceof ShadowRoot||"host"in e&&11===e.nodeType},At=function(e){if(!e)return document;if(ct(e))return e;if("getRootNode"in e){var t=e.getRootNode();if(ct(t))return t}return document},dt=function(e,t,n){for(var r,a=n.split(","),o=0,i=a.length;o<i;o++)(r=a[o])&&e.registerName(t,r)},ft=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(fe),a=[],o=0,i=r.length;o<i;o++){var l=r[o].trim();if(l){var s=l.match(ut);if(s){var u=0|parseInt(s[1],10),c=s[2];0!==u&&(ke(c,u),dt(e,c,s[3]),e.getTag().insertRules(u,a)),a.length=0}else a.push(l)}}},pt=function(e){for(var t=At(e.options.target).querySelectorAll(st),n=0,r=t.length;n<r;n++){var a=t[n];a&&a.getAttribute(ue)!==ce&&(ft(e,a),a.parentNode&&a.parentNode.removeChild(a))}};function mt(){return n.nc}var ht=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(e){var t=Array.from(e.querySelectorAll("style[".concat(ue,"]")));return t[t.length-1]}(n),o=void 0!==a?a.nextSibling:null;r.setAttribute(ue,ce),r.setAttribute(Ae,de);var i=mt();return i&&r.setAttribute("nonce",i),n.insertBefore(r,o),r},gt=function(){function e(e){this.element=ht(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){var t;if(e.sheet)return e.sheet;for(var n=null!==(t=e.getRootNode().styleSheets)&&void 0!==t?t:document.styleSheets,r=0,a=n.length;r<a;r++){var o=n[r];if(o.ownerNode===e)return o}throw ge(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),vt=function(){function e(e){this.element=ht(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),bt=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(e===this.length?this.rules.push(t):this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),yt=pe,xt={isServer:!pe,useCSSOMInjection:!me},kt=function(){function e(e,t,n){void 0===e&&(e=Se),void 0===t&&(t={});var r=this;this.options=s(s({},xt),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&pe&&yt&&(yt=!1,pt(this)),it(this,function(){return function(e){for(var t=e.getTag(),n=t.length,r="",a=function(n){var a=function(e){return be.get(e)}(n);if(void 0===a)return"continue";var o=e.names.get(a);if(void 0===o||!o.size)return"continue";var i=t.getGroup(n);if(0===i.length)return"continue";var l=ue+".g"+n+'[id="'+a+'"]',s="";o.forEach(function(e){e.length>0&&(s+=e+",")}),r+=i+l+'{content:"'+s+'"}'+fe},o=0;o<n;o++)a(o);return r}(r)})}return e.registerId=function(e){return xe(e)},e.prototype.rehydrate=function(){!this.server&&pe&&pt(this)},e.prototype.reconstructWithOptions=function(t,n){void 0===n&&(n=!0);var r=new e(s(s({},this.options),t),this.gs,n&&this.names||void 0);return!this.server&&pe&&t.target!==this.options.target&&At(this.options.target)!==At(t.target)&&pt(r),r},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new bt(n):t?new gt(n):new vt(n)}(this.options),new lt(e)));var e},e.prototype.hasNameForId=function(e,t){var n,r;return null!==(r=null===(n=this.names.get(e))||void 0===n?void 0:n.has(t))&&void 0!==r&&r},e.prototype.registerName=function(e,t){xe(e);var n=this.names.get(e);n?n.add(t):this.names.set(e,new Set([t]))},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(xe(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(xe(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),wt=/&/g,St=47,Et=42;function Ct(e){if(-1===e.indexOf("}"))return!1;for(var t=e.length,n=0,r=0,a=!1,o=0;o<t;o++){var i=e.charCodeAt(o);if(0!==r||a||i!==St||e.charCodeAt(o+1)!==Et)if(a)i===Et&&e.charCodeAt(o+1)===St&&(a=!1,o++);else if(34!==i&&39!==i||0!==o&&92===e.charCodeAt(o-1)){if(0===r)if(123===i)n++;else if(125===i&&--n<0)return!0}else 0===r?r=i:r===i&&(r=0);else a=!0,o++}return 0!==n||0!==r}function Pt(e,t){return e.map(function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(e){return"".concat(t," ").concat(e)})),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Pt(e.children,t)),e})}function jt(e){var t,n,r,a=void 0===e?Se:e,o=a.options,i=void 0===o?Se:o,l=a.plugins,s=void 0===l?we:l,u=function(e,r,a){return a.startsWith(n)&&a.endsWith(n)&&a.replaceAll(n,"").length>0?".".concat(t):e},c=s.slice();c.push(function(e){e.type===p&&e.value.includes("&")&&(r||(r=new RegExp("\\".concat(n,"\\b"),"g")),e.props[0]=e.props[0].replace(wt,n).replace(r,u))}),i.prefix&&c.push(ne),c.push(ee);var A,d=[],f=function(e){var t=P(e);return function(n,r,a,o){for(var i="",l=0;l<t;l++)i+=e[l](n,r,a,o)||"";return i}}(c.concat((A=function(e){return d.push(e)},function(e){e.root||(e=e.return)&&A(e)}))),m=function(e,a,o,l){void 0===a&&(a=""),void 0===o&&(o=""),void 0===l&&(l="&"),t=l,n=a,r=void 0;var s=function(e){if(!Ct(e))return e;for(var t=e.length,n="",r=0,a=0,o=0,i=!1,l=0;l<t;l++){var s=e.charCodeAt(l);if(0!==o||i||s!==St||e.charCodeAt(l+1)!==Et)if(i)s===Et&&e.charCodeAt(l+1)===St&&(i=!1,l++);else if(34!==s&&39!==s||0!==l&&92===e.charCodeAt(l-1)){if(0===o)if(123===s)a++;else if(125===s){if(--a<0){for(var u=l+1;u<t;){var c=e.charCodeAt(u);if(59===c||10===c)break;u++}u<t&&59===e.charCodeAt(u)&&u++,a=0,l=u-1,r=u;continue}0===a&&(n+=e.substring(r,l+1),r=l+1)}else 59===s&&0===a&&(n+=e.substring(r,l+1),r=l+1)}else 0===o?o=s:o===s&&(o=0);else i=!0,l++}if(r<t){var A=e.substring(r);Ct(A)||(n+=A)}return n}(function(e){if(-1===e.indexOf("//"))return e;for(var t=e.length,n=[],r=0,a=0,o=0,i=0;a<t;){var l=e.charCodeAt(a);if(34!==l&&39!==l||0!==a&&92===e.charCodeAt(a-1))if(0===o)if(l===St&&a+1<t&&e.charCodeAt(a+1)===Et){for(a+=2;a+1<t&&(e.charCodeAt(a)!==Et||e.charCodeAt(a+1)!==St);)a++;a+=2}else if(40===l&&a>=3&&108==(32|e.charCodeAt(a-1))&&114==(32|e.charCodeAt(a-2))&&117==(32|e.charCodeAt(a-3)))i=1,a++;else if(i>0)41===l?i--:40===l&&i++,a++;else if(l===Et&&a+1<t&&e.charCodeAt(a+1)===St)a>r&&n.push(e.substring(r,a)),r=a+=2;else if(l===St&&a+1<t&&e.charCodeAt(a+1)===St){for(a>r&&n.push(e.substring(r,a));a<t&&10!==e.charCodeAt(a);)a++;r=a}else a++;else a++;else 0===o?o=l:o===l&&(o=0),a++}return 0===r?e:(r<t&&n.push(e.substring(r)),n.join(""))}(e)),u=re(o||a?"".concat(o," ").concat(a," { ").concat(s," }"):s);return i.namespace&&(u=Pt(u,i.namespace)),d=[],$(u,f),d};return m.hash=s.length?s.reduce(function(e,t){return t.name||ge(15),Ne(e,t.name)},5381).toString():"",m}var zt=new kt,_t=jt(),Tt=r.createContext({shouldForwardProp:void 0,styleSheet:zt,stylis:_t}),Rt=(Tt.Consumer,r.createContext(void 0));function It(){return r.useContext(Tt)}function Nt(e){if(!r.useMemo)return e.children;var t=It().styleSheet,n=r.useMemo(function(){var n=t;return e.sheet?n=e.sheet:e.target&&(n=n.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(n=n.reconstructWithOptions({useCSSOMInjection:!1})),n},[e.disableCSSOMInjection,e.sheet,e.target,t]),a=r.useMemo(function(){return jt({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:e.stylisPlugins})},[e.enableVendorPrefixes,e.namespace,e.stylisPlugins]),o=r.useMemo(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:n,stylis:a}},[e.shouldForwardProp,n,a]);return r.createElement(Tt.Provider,{value:o},r.createElement(Rt.Provider,{value:a},e.children))}var Lt=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=_t);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,it(this,function(){throw ge(12,String(n.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=_t),this.name+e.hash},e}();function Ot(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||e in se||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var Mt=function(e){return e>="A"&&e<="Z"};function Ft(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;Mt(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Dt=function(e){return null==e||!1===e||""===e},Bt=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!Dt(r)&&(Array.isArray(r)&&r.isCss||et(r)?t.push("".concat(Ft(n),":"),r,";"):at(r)?t.push.apply(t,u(u(["".concat(n," {")],Bt(r),!1),["}"],!1)):t.push("".concat(Ft(n),": ").concat(Ot(n,r),";")))}return t};function Vt(e,t,n,r,a){if(void 0===a&&(a=[]),"string"==typeof e)return e&&a.push(e),a;if(Dt(e))return a;if(tt(e))return a.push(".".concat(e.styledComponentId)),a;var o;if(et(e))return!et(o=e)||o.prototype&&o.prototype.isReactComponent||!t?(a.push(e),a):Vt(e(t),t,n,r,a);if(e instanceof Lt)return n?(e.inject(n,r),a.push(e.getName(r))):a.push(e),a;if(at(e)){for(var i=Bt(e),l=0;l<i.length;l++)a.push(i[l]);return a}if(!Array.isArray(e))return a.push(e.toString()),a;for(l=0;l<e.length;l++)Vt(e[l],t,n,r,a);return a}function Ut(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(et(n)&&!tt(n))return!1}return!0}var Qt=Le(de),qt=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Ut(e),this.componentId=t,this.baseHash=Ne(Qt,t),this.baseStyle=n,kt.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n).className:"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=nt(r,this.staticRulesId);else{var a=rt(Vt(this.rules,e,t,n)),o=Re(Ne(this.baseHash,a)>>>0);if(!t.hasNameForId(this.componentId,o)){var i=n(a,".".concat(o),void 0,this.componentId);t.insertRules(this.componentId,o,i)}r=nt(r,o),this.staticRulesId=o}else{for(var l=Ne(this.baseHash,n.hash),s="",u=0;u<this.rules.length;u++){var c=this.rules[u];if("string"==typeof c)s+=c;else if(c){var A=rt(Vt(c,e,t,n));l=Ne(Ne(l,String(u)),A),s+=A}}if(s){var d=Re(l>>>0);if(!t.hasNameForId(this.componentId,d)){var f=n(s,".".concat(d),void 0,this.componentId);t.insertRules(this.componentId,d,f)}r=nt(r,d)}}return{className:r,css:"undefined"==typeof window?t.getTag().getGroup(xe(this.componentId)):""}},e}(),Ht=r.createContext(void 0);Ht.Consumer;var Wt={};new Set;function Yt(e,t,n){var a=tt(e),o=e,i=!Fe(e),l=t.attrs,u=void 0===l?we:l,c=t.componentId,A=void 0===c?function(e,t){var n="string"!=typeof e?"sc":ze(e);Wt[n]=(Wt[n]||0)+1;var r="".concat(n,"-").concat(Oe(de+n+Wt[n]));return t?"".concat(t,"-").concat(r):r}(t.displayName,t.parentComponentId):c,d=t.displayName,f=void 0===d?function(e){return Fe(e)?"styled.".concat(e):"Styled(".concat(Me(e),")")}(e):d,p=t.displayName&&t.componentId?"".concat(ze(t.displayName),"-").concat(t.componentId):t.componentId||A,m=a&&o.attrs?o.attrs.concat(u).filter(Boolean):u,h=t.shouldForwardProp;if(a&&o.shouldForwardProp){var g=o.shouldForwardProp;if(t.shouldForwardProp){var v=t.shouldForwardProp;h=function(e,t){return g(e,t)&&v(e,t)}}else h=g}var b=new qt(n,p,a?o.componentStyle:void 0);function y(e,t){return function(e,t,n){var a=e.attrs,o=e.componentStyle,i=e.defaultProps,l=e.foldedComponentIds,u=e.styledComponentId,c=e.target,A=r.useContext(Ht),d=It(),f=e.shouldForwardProp||d.shouldForwardProp,p=Ee(t,A,i)||Se,m=function(e,t,n){for(var r,a=s(s({},t),{className:void 0,theme:n}),o=0;o<e.length;o+=1){var i=et(r=e[o])?r(a):r;for(var l in i)"className"===l?a.className=nt(a.className,i[l]):"style"===l?a.style=s(s({},a.style),i[l]):a[l]=i[l]}return"className"in t&&"string"==typeof t.className&&(a.className=nt(a.className,t.className)),a}(a,t,p),h=m.as||c,g={};for(var v in m)void 0===m[v]||"$"===v[0]||"as"===v||"theme"===v&&m.theme===p||("forwardedAs"===v?g.as=m.forwardedAs:f&&!f(v,h)||(g[v]=m[v]));var b=function(e,t){var n=It();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(o,m),y=b.className,x=nt(l,u);return y&&(x+=" "+y),m.className&&(x+=" "+m.className),g[Fe(h)&&!Ce.has(h)?"class":"className"]=x,n&&(g.ref=n),(0,r.createElement)(h,g)}(x,e,t)}y.displayName=f;var x=r.forwardRef(y);return x.attrs=m,x.componentStyle=b,x.displayName=f,x.shouldForwardProp=h,x.foldedComponentIds=a?nt(o.foldedComponentIds,o.styledComponentId):"",x.styledComponentId=p,x.target=a?o.target:e,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=a?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,a=t;r<a.length;r++)ot(e,a[r],!0);return e}({},o.defaultProps,e):e}}),it(x,function(){return".".concat(x.styledComponentId)}),i&&$e(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function Kt(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n}var Xt=function(e){return Object.assign(e,{isCss:!0})};function Jt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(et(e)||at(e))return Xt(Vt(Kt(we,u([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?Vt(r):Xt(Vt(Kt(r,t)))}function Gt(e,t,n){if(void 0===n&&(n=Se),!t)throw ge(1,t);var r=function(r){for(var a=[],o=1;o<arguments.length;o++)a[o-1]=arguments[o];return e(t,n,Jt.apply(void 0,u([r],a,!1)))};return r.attrs=function(r){return Gt(e,t,s(s({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return Gt(e,t,s(s({},n),r))},r}var Zt=function(e){return Gt(Yt,e)},$t=Zt;Ce.forEach(function(e){$t[e]=Zt(e)});var en=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Ut(e),kt.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var a=r(rt(Vt(this.rules,t,n,r)),""),o=this.componentId+e;n.insertRules(o,o,a)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&kt.registerId(this.componentId+e);var a=this.componentId+e;this.isStatic?n.hasNameForId(a,a)||this.createStyles(e,t,n,r):(this.removeStyles(e,n),this.createStyles(e,t,n,r))},e}();function tn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=rt(Jt.apply(void 0,u([e],t,!1))),a=Oe(r);return new Lt(a,r)}(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=mt(),r=rt([n&&'nonce="'.concat(n,'"'),"".concat(ue,'="true"'),"".concat(Ae,'="').concat(de,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw ge(2);return e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)throw ge(2);var n=e.instance.toString();if(!n)return[];var a=((t={})[ue]="",t[Ae]=de,t.dangerouslySetInnerHTML={__html:n},t),o=mt();return o&&(a.nonce=o),[r.createElement("style",s({},a,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new kt({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw ge(2);return r.createElement(Nt,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw ge(3)}})(),"__sc-".concat(ue,"__");const nn=(function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var a=Jt.apply(void 0,u([e],t,!1)),o="sc-global-".concat(Oe(JSON.stringify(a))),i=new en(a,o),l=new WeakMap,c=function(e){var t=It(),n=r.useContext(Ht),a=l.get(t.styleSheet);return void 0===a&&(a=t.styleSheet.allocateGSInstance(o),l.set(t.styleSheet,a)),("undefined"==typeof window||!t.styleSheet.server)&&A(a,e,t.styleSheet,n,t.stylis),r.useLayoutEffect(function(){return t.styleSheet.server||A(a,e,t.styleSheet,n,t.stylis),function(){var e;i.removeStyles(a,t.styleSheet),e=t.styleSheet.options.target,"undefined"!=typeof document&&(null!=e?e:document).querySelectorAll('style[data-styled-global="'.concat(o,'"]')).forEach(function(e){return e.remove()})}},[a,e,t.styleSheet,n,t.stylis]),null};function A(e,t,n,r,a){if(i.isStatic)i.renderStyles(e,he,n,a);else{var o=s(s({},t),{theme:Ee(t,r,c.defaultProps)});i.renderStyles(e,o,n,a)}}return r.memo(c)})`
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
`,on=$t.nav`
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
`,ln=$t.button`
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
`,sn=$t.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`,un=$t.button`
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
`,cn=$t.li`
  width: 1px;
  height: 1rem;
  background: ${e=>{let{$dark:t}=e;return t?"rgba(255,255,255,0.15)":"var(--line)"}};
`,An=$t.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${e=>{let{$dark:t}=e;return t?"rgba(245, 240, 234, 0.45)":"var(--ink-soft)"}};
  transition: color 0.2s;

  &:hover {
    color: #d62828;
  }
`,dn=$t.button`
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
`,fn=$t.button`
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
`,pn=$t.div`
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
`,mn=$t.button`
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
`,hn=$t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  padding-top: 1.5rem;
`,gn=$t.div`
  display: flex;
  gap: 1.25rem;
`,vn=$t.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--ink-soft);
  transition: color 0.2s;

  &:hover {
    color: #d62828;
  }
`,bn=$t.button`
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
`;function yn(){return(0,o.jsx)("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,o.jsx)("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"})})}function xn(){return(0,o.jsxs)("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,o.jsx)("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}),(0,o.jsx)("rect",{x:"2",y:"9",width:"4",height:"12"}),(0,o.jsx)("circle",{cx:"4",cy:"4",r:"2"})]})}function kn(e){let{size:t=17}=e;return(0,o.jsxs)("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,o.jsx)("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}),(0,o.jsx)("path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}),(0,o.jsx)("line",{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"})]})}function wn(){return(0,o.jsx)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,o.jsx)("path",{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"})})}function Sn(){return(0,o.jsxs)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,o.jsx)("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),(0,o.jsx)("polyline",{points:"7 10 12 15 17 10"}),(0,o.jsx)("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]})}function En(){return(0,o.jsxs)("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,o.jsx)("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),(0,o.jsx)("polyline",{points:"15,3 21,3 21,9"}),(0,o.jsx)("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]})}function Cn(){return(0,o.jsxs)("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,o.jsx)("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"}),(0,o.jsx)("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]})}function Pn(){return(0,o.jsxs)("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"currentColor",children:[(0,o.jsx)("path",{d:"M8 24c2.2 0 4-1.8 4-4v-4H8c-2.2 0-4 1.8-4 4s1.8 4 4 4z"}),(0,o.jsx)("path",{d:"M4 12c0-2.2 1.8-4 4-4h4v8H8c-2.2 0-4-1.8-4-4z"}),(0,o.jsx)("path",{d:"M4 4c0-2.2 1.8-4 4-4h4v8H8C5.8 8 4 6.2 4 4z"}),(0,o.jsx)("path",{d:"M12 0h4c2.2 0 4 1.8 4 4s-1.8 4-4 4h-4V0z"}),(0,o.jsx)("path",{d:"M20 12c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z"})]})}function jn(){return(0,o.jsxs)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,o.jsx)("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),(0,o.jsx)("polygon",{points:"22 2 15 22 11 13 2 9 22 2"})]})}function zn(){return(0,o.jsxs)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,o.jsx)("circle",{cx:"12",cy:"12",r:"5"}),(0,o.jsx)("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),(0,o.jsx)("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),(0,o.jsx)("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),(0,o.jsx)("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),(0,o.jsx)("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),(0,o.jsx)("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),(0,o.jsx)("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),(0,o.jsx)("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]})}function _n(){return(0,o.jsx)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,o.jsx)("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})})}function Tn(e){let{page:t,onNavigate:n}=e;const[a,l]=(0,r.useState)(!1),{dark:s,toggle:u}=(0,r.useContext)(i),c="home"===t&&s,A=e=>{l(!1),n(e)};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(on,{$dark:c,children:[(0,o.jsx)(ln,{$dark:c,onClick:()=>A("home"),children:"iza.dev"}),(0,o.jsxs)(sn,{children:[(0,o.jsx)("li",{children:(0,o.jsx)(un,{$dark:c,$active:"about"===t,onClick:()=>A("about"),children:"sobre"})}),(0,o.jsx)("li",{children:(0,o.jsx)(un,{$dark:c,$active:"projects"===t,onClick:()=>A("projects"),children:"projetos"})}),(0,o.jsx)("li",{children:(0,o.jsx)(un,{$dark:c,$active:"contact"===t,onClick:()=>A("contact"),children:"contato"})}),(0,o.jsx)(cn,{$dark:c}),(0,o.jsx)("li",{children:(0,o.jsx)(An,{href:"https://github.com/doraalves",target:"_blank",rel:"noreferrer",$dark:c,children:(0,o.jsx)(yn,{})})}),(0,o.jsx)("li",{children:(0,o.jsx)(An,{href:"https://www.linkedin.com/in/izadoraalves/",target:"_blank",rel:"noreferrer",$dark:c,children:(0,o.jsx)(xn,{})})}),(0,o.jsx)("li",{children:(0,o.jsx)(An,{href:"https://www.instagram.com/izadoraaalves",target:"_blank",rel:"noreferrer",$dark:c,children:(0,o.jsx)(kn,{})})}),(0,o.jsx)(cn,{$dark:c}),(0,o.jsx)("li",{children:(0,o.jsx)(dn,{$dark:c,onClick:u,"aria-label":"Alternar tema",children:s?(0,o.jsx)(zn,{}):(0,o.jsx)(_n,{})})})]}),(0,o.jsxs)(fn,{$dark:c,className:a?"open":"",onClick:()=>l(!a),"aria-label":"Menu",children:[(0,o.jsx)("span",{}),(0,o.jsx)("span",{}),(0,o.jsx)("span",{})]})]}),(0,o.jsxs)(pn,{$open:a,$themeDark:s,children:[(0,o.jsx)(mn,{$active:"home"===t,onClick:()=>A("home"),children:"in\xedcio"}),(0,o.jsx)(mn,{$active:"about"===t,onClick:()=>A("about"),children:"sobre"}),(0,o.jsx)(mn,{$active:"projects"===t,onClick:()=>A("projects"),children:"projetos"}),(0,o.jsx)(mn,{$active:"contact"===t,onClick:()=>A("contact"),children:"contato"}),(0,o.jsxs)(hn,{children:[(0,o.jsxs)(gn,{children:[(0,o.jsx)(vn,{href:"https://github.com/doraalves",target:"_blank",rel:"noreferrer",children:(0,o.jsx)(yn,{})}),(0,o.jsx)(vn,{href:"https://www.linkedin.com/in/izadoraalves/",target:"_blank",rel:"noreferrer",children:(0,o.jsx)(xn,{})}),(0,o.jsx)(vn,{href:"https://www.instagram.com/izadoraaalves",target:"_blank",rel:"noreferrer",children:(0,o.jsx)(kn,{})})]}),(0,o.jsxs)(bn,{onClick:u,children:[s?(0,o.jsx)(zn,{}):(0,o.jsx)(_n,{}),s?"Claro":"Escuro"]})]})]})]})}function Rn(){const e=(0,r.useRef)(null),t=(0,r.useRef)(null),n=(0,r.useRef)({x:-200,y:-200}),a=((0,r.useRef)({x:-200,y:-200}),(0,r.useRef)(null)),[i,l]=(0,r.useState)(!1),[s,u]=(0,r.useState)(!1);if((0,r.useEffect)(()=>{if(window.matchMedia("(pointer: coarse)").matches)return;const r=r=>{n.current={x:r.clientX,y:r.clientY},s||u(!0),e.current&&(e.current.style.transform=`translate(${r.clientX}px, ${r.clientY}px)`),t.current&&(t.current.style.transform=`translate(${r.clientX}px, ${r.clientY}px)`)},o=()=>{a.current=requestAnimationFrame(o)},i=e=>{e.target.closest("a, button, [role='button'], input, textarea, select, label")&&l(!0)},c=e=>{e.target.closest("a, button, [role='button'], input, textarea, select, label")&&l(!1)},A=()=>u(!1),d=()=>u(!0);return document.addEventListener("mousemove",r,{passive:!0}),document.addEventListener("mouseover",i,{passive:!0}),document.addEventListener("mouseout",c,{passive:!0}),document.addEventListener("mouseleave",A),document.addEventListener("mouseenter",d),a.current=requestAnimationFrame(o),()=>{document.removeEventListener("mousemove",r),document.removeEventListener("mouseover",i),document.removeEventListener("mouseout",c),document.removeEventListener("mouseleave",A),document.removeEventListener("mouseenter",d),cancelAnimationFrame(a.current)}},[s]),"undefined"!==typeof window&&window.matchMedia("(pointer: coarse)").matches)return null;const c=i?0:4,A=i?36:22,d=i?"rgba(200,25,26,0.12)":"transparent",f=i?"rgba(200,25,26,1)":"rgba(200,25,26,0.65)";return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{ref:e,"aria-hidden":"true",style:{position:"fixed",top:0,left:0,width:`${c}px`,height:`${c}px`,marginLeft:`-${c/2}px`,marginTop:`-${c/2}px`,background:"#C8191A",borderRadius:"50%",pointerEvents:"none",zIndex:999999,opacity:s?1:0,transition:"width 0.15s, height 0.15s, margin 0.15s, opacity 0.3s",willChange:"transform"}}),(0,o.jsx)("div",{ref:t,"aria-hidden":"true",style:{position:"fixed",top:0,left:0,width:`${A}px`,height:`${A}px`,marginLeft:`-${A/2}px`,marginTop:`-${A/2}px`,border:`1.5px solid ${f}`,background:d,borderRadius:"50%",pointerEvents:"none",zIndex:999998,opacity:s?1:0,transition:"width 0.18s, height 0.18s, margin 0.18s, background 0.2s, border-color 0.2s, opacity 0.3s",willChange:"transform"}})]})}const In=50;function Nn(){const e=(0,r.useRef)(null);return(0,r.useEffect)(()=>{const t=e.current,n=t.getContext("2d");let r,a,o,i;const l={x:-9999,y:-9999};function s(){r=t.width=window.innerWidth,a=t.height=window.innerHeight}function u(e,t){return e+Math.random()*(t-e)}function c(){const e=Math.max(80,Math.round(r*a/4e3));o=Array.from({length:e},()=>({x:Math.random()*r,y:Math.random()*a,vx:u(-.22,.22),vy:u(-.22,.22),r:u(1.2,2.6),base:u(.2,.6),alpha:0}))}const A=e=>{l.x=e.clientX,l.y=e.clientY},d=()=>{s(),c()};return window.addEventListener("mousemove",A),window.addEventListener("resize",d),s(),c(),function e(){n.clearRect(0,0,r,a);const t="dark"===document.documentElement.getAttribute("data-theme"),s=e=>`rgba(200,25,26,${e})`,u=t?e=>`rgba(245,240,234,${e})`:e=>`rgba(200,25,26,${e})`,c=e=>`rgba(214,40,40,${e})`,A=e=>`rgba(200,25,26,${e})`;for(let r=0;r<o.length;r++)for(let e=r+1;e<o.length;e++){const a=o[r],i=o[e],l=a.x-i.x,u=a.y-i.y,c=Math.sqrt(l*l+u*u);if(c<150){const e=(1-c/150)*(t?.15:.2);n.beginPath(),n.strokeStyle=s(e),n.lineWidth=.8,n.moveTo(a.x,a.y),n.lineTo(i.x,i.y),n.stroke()}}for(const i of o){const e=i.x-l.x,t=i.y-l.y,o=Math.sqrt(e*e+t*t);if(o<In&&o>0){const n=.065*(1-o/In);i.vx+=e/o*n,i.vy+=t/o*n,i.alpha=Math.min(1,i.alpha+.07)}else i.alpha+=.04*(i.base-i.alpha);i.vx*=.983,i.vy*=.983,i.x+=i.vx,i.y+=i.vy,i.x<0&&(i.x=r),i.x>r&&(i.x=0),i.y<0&&(i.y=a),i.y>a&&(i.y=0),n.beginPath(),n.arc(i.x,i.y,i.r,0,2*Math.PI),n.fillStyle=o<In?c(i.alpha):u(i.alpha),n.fill(),o<20&&(n.beginPath(),n.arc(i.x,i.y,3.5*i.r,0,2*Math.PI),n.fillStyle=A(.09*i.alpha),n.fill())}if(l.x>0&&l.x<r){const e=n.createRadialGradient(l.x,l.y,0,l.x,l.y,In);e.addColorStop(0,"rgba(200,25,26,0.08)"),e.addColorStop(1,"rgba(200,25,26,0)"),n.beginPath(),n.arc(l.x,l.y,In,0,2*Math.PI),n.fillStyle=e,n.fill()}i=requestAnimationFrame(e)}(),()=>{cancelAnimationFrame(i),window.removeEventListener("mousemove",A),window.removeEventListener("resize",d)}},[]),(0,o.jsx)("canvas",{ref:e,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",zIndex:0,display:"block"}})}const Ln=tn`
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
`,On=tn`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.8); }
`,Mn=tn`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`,Fn=tn`
  from { opacity: 1; transform: translateY(0); }
  to   { opacity: 0; transform: translateY(-10px); }
`,Dn=tn`
  from { transform: translateY(0); }
  to   { transform: translateY(-50%); }
`,Bn=$t.div`
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
`,Vn=$t.div`
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 3rem;
  text-align: center;
  animation: ${Ln} 0.9s ease both;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`,Un=$t.div`
  max-width: 660px;
`,Qn=$t.p`
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
`,qn=$t.span`
  display: inline-block;
  animation: ${e=>{let{$exiting:t}=e;return t?Fn:Mn}} 0.35s ease both;
`,Hn=$t.h1`
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
`,Wn=$t.p`
  font-size: 1rem;
  max-width: 50ch;
  margin: 0 auto 2.5rem;
  font-weight: 300;
  line-height: 1.85;
  color: var(--ink-soft);

  [data-theme="dark"] & {
    color: rgba(245, 240, 234, 0.5);
  }
`,Yn=$t.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`,Kn=$t.button`
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
`,Xn=$t.button`
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
`,Jn=$t.div`
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
`,Gn=$t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${Dn} 32s linear infinite;
`,Zn=$t.span`
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
`,$n=$t.div`
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
`,er=$t.span`
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
`,tr=$t.span`
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
`,nr=$t.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #5ebb7c;
  animation: ${On} 2s infinite;
  opacity: 1 !important;
`,rr=["Desenvolvedora Full Stack","Ilustradora Digital","UI Designer"],ar=["React","Node.js","Python","Vue.js","D3.js","Django","TypeScript","SCSS","Docker","p5.js","WebSockets","PostgreSQL","Figma","Meta Quest"];function or(e){let{onNavigate:t}=e;const[n,a]=(0,r.useState)(0),[i,l]=(0,r.useState)(!1);(0,r.useEffect)(()=>{const e=setInterval(()=>{l(!0),setTimeout(()=>{a(e=>(e+1)%rr.length),l(!1)},350)},2800);return()=>clearInterval(e)},[]);const s=(0,r.useRef)(null),u=(0,r.useRef)(null),c=(0,r.useCallback)((e,t)=>{const n=e.current;if(!n)return;const r=n.getBoundingClientRect(),a=r.left+r.width/2,o=r.top+r.height/2,i=t.clientX-a,l=t.clientY-o,s=Math.sqrt(i*i+l*l);if(s<80){const e=6*(1-s/80);n.style.transform=`translate(${i/s*e}px, ${l/s*e}px)`}else n.style.transform=""},[]),A=(0,r.useCallback)(e=>{e.current&&(e.current.style.transform="")},[]);(0,r.useEffect)(()=>{const e=e=>{c(s,e),c(u,e)};return window.addEventListener("mousemove",e,{passive:!0}),()=>window.removeEventListener("mousemove",e)},[c]);const d=[...ar,...ar];return(0,o.jsxs)(Bn,{children:[(0,o.jsx)(Nn,{}),(0,o.jsx)(Vn,{children:(0,o.jsxs)(Un,{children:[(0,o.jsx)(Qn,{children:(0,o.jsx)(qn,{$exiting:i,children:rr[n]},n)}),(0,o.jsxs)(Hn,{children:["Izadora",(0,o.jsx)("br",{}),(0,o.jsx)("em",{children:"Alves"})]}),(0,o.jsx)(Wn,{children:"Desenvolvedora Full Stack com experi\xeancia real em Americanas S.A. e pesquisa em realidade virtual. Construo produtos digitais do design \xe0 infraestrutura: interfaces, APIs e dashboards que escalam."}),(0,o.jsxs)(Yn,{children:[(0,o.jsx)(Kn,{ref:s,onClick:()=>t("projects"),onMouseLeave:()=>A(s),children:"Ver projetos \u2192"}),(0,o.jsx)(Xn,{ref:u,onClick:()=>t("contact"),onMouseLeave:()=>A(u),children:"Entrar em contato"})]})]})}),(0,o.jsx)(Jn,{children:(0,o.jsx)(Gn,{"aria-hidden":"true",children:d.map((e,t)=>(0,o.jsx)(Zn,{children:e},t))})}),(0,o.jsxs)($n,{children:[(0,o.jsx)(er,{children:"S\xe3o Gon\xe7alo \xb7 RJ"}),(0,o.jsxs)(tr,{children:[(0,o.jsx)(nr,{}),"dispon\xedvel para projetos"]})]})]})}var ir=n(950);const lr=tn`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`,sr=tn`
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.5; transform: scale(0.8); }
`,ur=$t.p`
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
`,cr=$t.h2`
  font-family: var(--serif);
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  line-height: 1.1;
  color: var(--ink);

  em {
    font-style: italic;
    color: var(--accent);
  }
`,Ar=$t.footer`
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
`,dr=$t.span`
  font-family: var(--mono);
  font-size: 0.7rem;
  color: var(--ink-soft);
`,fr=$t.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
  animation: ${sr} 2s infinite;
`,pr=$t.div`
  background: var(--bg);
  min-height: 100vh;
  padding-top: 5rem;
  animation: ${lr} 0.4s ease both;
`,mr=$t.section`
  padding: 4.5rem 3rem;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`,hr=$t.div`
  margin-bottom: 2.5rem;
`,gr=$t.div`
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`,vr=$t.p`
  font-size: 1rem;
  color: var(--ink-soft);
  font-weight: 300;
  line-height: 1.8;
  margin-bottom: 1.75rem;

  strong {
    color: var(--ink);
    font-weight: 500;
  }
`,br=$t.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--line);
  border: 1px solid var(--line);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 3rem;
`,yr=$t.div`
  background: var(--surface);
  padding: 1.1rem 1.25rem;
  text-align: center;
  transition: background 0.3s;

  &:hover {
    background: var(--surface-soft);
  }
`,xr=$t.p`
  font-family: var(--serif);
  font-size: 1.8rem;
  color: var(--accent);
  line-height: 1;
  margin-bottom: 0.25rem;
`,kr=$t.p`
  font-family: var(--mono);
  font-size: 0.6rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ink-soft);
  opacity: 0.65;
  line-height: 1.4;
`,wr=$t.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-top: 2rem;
`,Sr=$t.a`
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
`,Er=$t.div`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  margin-top: 1.75rem;
`,Cr=$t.div``,Pr=$t.p`
  font-family: var(--mono);
  font-size: 0.6rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 0.45rem;
  opacity: 0.8;
`,jr=$t.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`,zr=$t.span`
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
`,_r=$t.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
`,Tr=$t.div`
  padding-left: 1.4rem;
  border-left: 2px solid var(--line);
  transition: border-color 0.2s;

  &:hover {
    border-color: var(--accent);
  }
`,Rr=$t.p`
  font-family: var(--mono);
  font-size: 0.68rem;
  letter-spacing: 0.1em;
  color: var(--accent);
  text-transform: uppercase;
  margin-bottom: 0.25rem;
`,Ir=$t.p`
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--ink);
  margin-bottom: 0.2rem;
`,Nr=$t.p`
  font-family: var(--mono);
  font-size: 0.78rem;
  color: var(--ink-soft);
  margin-bottom: 0.5rem;
`,Lr=$t.p`
  font-size: 0.88rem;
  color: var(--ink-soft);
  font-weight: 300;
  line-height: 1.65;
`,Or=$t.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-top: 0.6rem;
`,Mr=$t.span`
  font-family: var(--mono);
  font-size: 0.62rem;
  padding: 0.18rem 0.5rem;
  border: 1px solid var(--line);
  border-radius: 2px;
  color: var(--ink-soft);
  opacity: 0.7;
`,Fr=$t.div`
  margin-top: 0.85rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Dr=$t.p`
  font-family: var(--mono);
  font-size: 0.6rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-soft);
  opacity: 0.5;
  margin-bottom: 0.2rem;
`,Br=$t.div`
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
`,Vr=$t.span`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--accent);
  margin-top: 6px;
  flex-shrink: 0;
`,Ur=$t.div``,Qr=$t.a`
  font-family: var(--mono);
  font-size: 0.75rem;
  color: var(--accent);
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`,qr=$t.p`
  font-size: 0.82rem;
  color: var(--ink-soft);
  font-weight: 300;
  line-height: 1.5;
`,Hr=tn`
  from { opacity: 0; transform: scale(1.03); }
  to   { opacity: 1; transform: scale(1); }
`,Wr=$t.section`
  background: #0e0b09;
  padding: 5rem 3rem 4rem;

  @media (max-width: 768px) {
    padding: 3.5rem 1.5rem 3rem;
  }
`,Yr=$t.div`
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
`,Kr=$t.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,Xr=$t.p`
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
`,Jr=$t.h2`
  font-family: var(--serif);
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  line-height: 1.1;
  color: white;

  em {
    font-style: italic;
    color: #d62828;
  }
`,Gr=$t.p`
  font-size: 0.92rem;
  color: rgba(245, 240, 234, 0.45);
  font-weight: 300;
  line-height: 1.7;
  max-width: 40ch;
`,Zr=$t.a`
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
`,$r=$t.div`
  position: relative;
`,ea=$t.div`
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
    animation: ${Hr} 0.45s ease both;
  }

  @media (max-width: 768px) {
    height: 320px;
  }
`,ta=$t.button`
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
`,na=$t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  padding: 0 2px;
`,ra=($t.p`
  font-family: var(--mono);
  font-size: 0.65rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(245, 240, 234, 0.3);
`,$t.p`
  font-family: var(--mono);
  font-size: 0.65rem;
  letter-spacing: 0.08em;
  color: rgba(245, 240, 234, 0.25);
`),aa=$t.div`
  display: flex;
  gap: 5px;
  align-items: center;
`,oa=$t.button`
  width: ${e=>{let{$active:t}=e;return t?"18px":"5px"}};
  height: 5px;
  border-radius: 3px;
  background: ${e=>{let{$active:t}=e;return t?"#d62828":"rgba(245,240,234,0.2)"}};
  border: none;
  transition: all 0.3s;
`,ia=($t.p`
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
`),la=$t.div`
  position: fixed;
  inset: 0;
  z-index: 99999;
  background: rgba(4, 3, 2, 0.97);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${ia} 0.2s ease;
  backdrop-filter: blur(6px);
`,sa=$t.img`
  max-width: 90vw;
  max-height: 88vh;
  object-fit: contain;
  border-radius: 2px;
  display: block;
`,ua=$t.button`
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
`,ca=$t.button`
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
`,Aa=$t.p`
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
`,da=$t.section`
  background: var(--surface);
  border-top: 1px solid var(--line);
  padding: 5rem 3rem 4.5rem;

  @media (max-width: 768px) {
    padding: 3.5rem 1.5rem 3rem;
  }
`,fa=$t.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`,pa=$t.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,ma=$t.p`
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
`,ha=$t.h2`
  font-family: var(--serif);
  font-size: clamp(1.4rem, 2.5vw, 2rem);
  line-height: 1.15;
  color: var(--ink);

  em {
    font-style: italic;
    color: var(--accent);
  }
`,ga=$t.p`
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
`,va=$t.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.25rem;
`,ba=$t.span`
  font-family: var(--mono);
  font-size: 0.65rem;
  padding: 0.22rem 0.6rem;
  border: 1px solid var(--line);
  border-radius: 2px;
  color: var(--ink-soft);
  background: var(--bg);
`,ya=$t.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;
`,xa=$t.a`
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
`,ka=($t.div`
  position: relative;
`,$t.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.6rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`),wa=$t.img`
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
`,Sa=($t.div`
  position: relative;
`,$t.div`
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
    animation: ${Hr} 0.35s ease both;
  }

  @media (max-width: 768px) {
    height: 240px;
  }
`,$t.button`
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
`,$t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.75rem;
  padding: 0 2px;
`,$t.p`
  font-family: var(--mono);
  font-size: 0.62rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ink-soft);
  opacity: 0.5;
`,$t.div`
  display: flex;
  gap: 5px;
  align-items: center;
`,$t.button`
  width: ${e=>{let{$active:t}=e;return t?"16px":"5px"}};
  height: 5px;
  border-radius: 3px;
  background: ${e=>{let{$active:t}=e;return t?"var(--accent)":"var(--line)"}};
  border: none;
  transition: all 0.3s;
`,[{period:"Jan 2025 \xb7 presente",role:"Bolsista em Pesquisa em Arte e Tecnologia",company:"Escola Superior de Desenho Industrial \xb7 MediaLAB UERJ",desc:"Atualmente, atuo no apoio t\xe9cnico em aulas de programa\xe7\xe3o criativa, onde ajudo os alunos a desenvolverem projetos interativos e algoritmos visuais utilizando JavaScript (p5.js). Al\xe9m de exemplos pr\xe1ticos para facilitar o aprendizado da l\xf3gica de programa\xe7\xe3o, tamb\xe9m me dedico \xe0 pesquisa e ao desenvolvimento experimental no MediaLAB. L\xe1, trabalho com prototipagem em realidade virtual, crio sites institucionais, visualiza\xe7\xf5es de dados e participo ativamente de exposi\xe7\xf5es e oficinas que unem arte e tecnologia, sempre buscando solu\xe7\xf5es inovadoras e multidisciplinares.",stack:["p5.js","D3.js","JavaScript","HTML/SCSS","Meta Quest 3","Spatial"],projects:[{name:"BlackVis",href:"https://blackvisesdi.github.io/BlackVis/",desc:"Visualiza\xe7\xe3o de dados interativa de designers negros brasileiros e estrangeiro em grafo de for\xe7a com D3.js. Ferramenta de visibilidade e pesquisa com filtros por \xe1rea, ano e nome."},{name:"Galeria Virtual & VR",href:"https://www.spatial.io/s/Media-Labs-1-0-Claro-6826039af8049f0d7678b6fe?share=1267569543253887910",desc:"Instala\xe7\xf5es imersivas em Meta Quest 3 na plataforma Spatial, explorando arte, design e tecnologia em espa\xe7os tridimensionais para a galeria do MEDIALAB."}]},{period:"Jan 2023 \xb7 Jul 2023",role:"Desenvolvedora de Software J\xfanior",company:"Americanas S.A.",desc:"Trabalhei no desenvolvimento de ferramentas internas para automatizar tarefas e integrar sistemas, ajudando a deixar os processos da empresa mais \xe1geis. No dia a dia, usei Django e Vue.js para criar solu\xe7\xf5es como um painel de monitoramento de equipes em tempo real e um novo visual para a plataforma de automa\xe7\xe3o, focado em tornar o uso mais simples para todos. Al\xe9m de construir novas fun\xe7\xf5es, cuidei da manuten\xe7\xe3o e corre\xe7\xe3o de falhas, sempre trabalhando em conjunto com o time atrav\xe9s de metodologias \xe1geis e revis\xf5es de c\xf3digo para garantir que tudo fosse entregue com a melhor qualidade poss\xedvel.",stack:["ReactJS","Vue.js","Django","WebSockets","Docker"],projects:[]},{period:"Jul 2022 \xb7 Dez 2022",role:"Estagi\xe1ria em Desenvolvimento de Software",company:"Americanas S.A.",desc:"Com uma experi\xeancia que passou por v\xe1rias \xe1reas da empresa, como Marketing e Inova\xe7\xe3o, meu trabalho foi usar a tecnologia para resolver problemas reais de cada setor. No dia a dia, criei desde telas modernas e f\xe1ceis de usar com ReactJS at\xe9 a parte interna dos sistemas com Node.js e Django, garantindo que tudo funcionasse de forma r\xe1pida e segura. Mais do que apenas escrever c\xf3digo, foquei em entregar solu\xe7\xf5es organizadas e eficientes que facilitaram a rotina das equipes e trouxeram resultados positivos.",stack:["ReactJS","Node.js","Django","Styled Components"],projects:[]},{period:"Out 2018 \xb7 Mar 2020",role:"Estagi\xe1ria",company:"Prefeitura de Niter\xf3i \xb7 Programa Niter\xf3i Digital",desc:"Planejamento e instru\xe7\xe3o de m\xf3dulos de Computa\xe7\xe3o B\xe1sica e L\xf3gica de Programa\xe7\xe3o para comunidades em situa\xe7\xe3o de vulnerabilidade. Desenvolvi curr\xedculos focados em alfabetiza\xe7\xe3o digital e introdu\xe7\xe3o ao desenvolvimento de jogos, utilizando metodologias ativas para ensinar conceitos fundamentais de algoritmos e estruturas de dados.",stack:["GIMP","Scratch","LibreOffice"],projects:[]},{period:"Fev 2016 \xb7 Jul 2022",role:"Gradua\xe7\xe3o em Ci\xeancia da Computa\xe7\xe3o",company:"Universidade Veiga de Almeida",desc:"Bacharelado em Ci\xeancia da Computa\xe7\xe3o com foco em desenvolvimento de software, estruturas de dados e sistemas distribu\xeddos.",stack:["Java","C++","HTML/CSS","SQL","PostgreSQL"],projects:[]}]),Ea=n.p+"static/media/billieInsta.ac5cc50eac82e75e9d2c.jpg",Ca=n.p+"static/media/rihannaInsta.4232135dd0a97d01d019.jpg",Pa=n.p+"static/media/Brunao2.ea26f7dfa7188fb7664f.jpg",ja=n.p+"static/media/p.gleiInsta.5e2ea481ce8b524edb42.jpg",za=n.p+"static/media/p_rafael.40a3d2165d63e0b893ac.jpg",_a=n.p+"static/media/post-instaWA.72c02c4cbebef6d89417.jpg",Ta=n.p+"static/media/p-v-a4-musica-playlist.1abf758454c2041c72f6.jpg",Ra=n.p+"static/media/demi-rockinrio.0b3dae0edd5c31d7e10e.jpg",Ia=n.p+"static/media/Luane__1_.9091ea162207649c8f36.jpg",Na=n.p+"static/media/curriculo-izadora.47e7e5330fa53f188fac.pdf",La=n.p+"static/media/tcc-izadora.4d4b8ffd76a7a9e501aa.pdf",Oa=n.p+"static/media/tcc_p54_0.48861230cf1d091a5851.jpg",Ma=n.p+"static/media/tcc_p58_0.e5d371adfcacbb62fe58.png",Fa=n.p+"static/media/tcc_p59_0.94f7719ce5e0475d629e.png",Da=n.p+"static/media/tcc_p60_0.08e3860166e19062e8e4.jpg",Ba=n.p+"static/media/tcc_p61_1.98e195d94f9857a06ed2.jpg",Va=n.p+"static/media/tcc_p65_0.8cd648d4a50b801f68ab.jpg",Ua=n.p+"static/media/tcc_p66_1.9b4f74e8cb0756478c3e.jpg",Qa=[{src:Da,alt:"Figura 46 \xb7 tela de menu"},{src:n.p+"static/media/tcc_p67_0.0fe00c6084bf89668c7b.jpg",alt:"Figura 59 \xb7 4\xaa tela de recompensa"},{src:Ua,alt:"Figura 58 \xb7 3\xaa tela de recompensa"},{src:Fa,alt:"Figura 44 \xb7 fase inicial"},{src:Va,alt:"Figura 56 \xb7 1\xaa tela de recompensa"},{src:Oa,alt:"Figura 40 \xb7 cria\xe7\xe3o da arte"},{src:Ba,alt:"Figura 49 \xb7 tela de fim de jogo"},{src:Ma,alt:"Figura 43 \xb7 As Aventuras da Garota Ci\xeancia"},{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYAAAAAgCAYAAAAbrK/lAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEXklEQVR4nO2cPY4UQQyF5yaIE8AhkLgAx0B7BK5BhkROQojEBYiIISHhApAgQbCoVypkSl3d5SqXn6vrIT3xN9Oft/tr2zOa3dvtdrtnGIZhlgy8AIZhGAYTeAEMwzAMJvACGIZhGEzgBajy+NHT6lyRz6wdtH9oPmOeOQRIx3z36/dDXn75UUx6jGUNaD4TI/Sf/l8s8QVI3CNmqQ6LGtD8vevADcw39J/+XzSxBcjZT959VUkwO1/WwQ0ME/pP/y+cuAKU2B/uXty/ff7s/vObu//y/dPrf7+nP29prQHNL9WB2sC01x25/Vnx6T/9v7j/cQWQ/DP2iBrQ/KNr4N0Ea7evEVsYik//6f8C/scUYHu8/IJq+aUaZuNHaEB7NXhvYUg+/af/C/gfU4DSNK/h79UwGx/dgI5uwEEvRUPx6T/9X8T/eAIkjjzO9ncNP69hJn6UBqTZvqxvwAh8+k//F/A/ngBHk0zDlzXMxEc3oFxAzc1ndRMg+fSf/i/kf1wBti9cpoXfcgOi+REaUOv2dSShpgGj+fSf/i/ifzwBJL90EpIgKdu/5Un/l+SZhY9uQNZs7RaG5tN/+r+Q//EE2OOXaqiJlh2J792ArLavPQlrakDz6X8sPv0fzo8pwFkNmrSw0XxUA7Lcvlq2MDQ/iv/y697zoCWz8em/Cz9mA5Q15J9tzTeDo8zKRzagxLbYvlq3MCQ/vxm9/d+e8+fb+4f8/Phqtxlq/NuOkY4zA5/+u/JjNsCSCOmYZ98AYTF80HzUALbYvnq3MCQ/r6O3AbZwU8Osce3IP9mENecfyZd1oAbwQv7ri9EI0NuAUw3yuNtmIv8t/cq/Y+4KfMQAtty+WrYwNL903lsbYMt1kM89Yx35Nytf1oAYwAv5f15MHo0AvQ0wF2HbJPIGfHQTzs5HDWCrVx9WW5gnX26sNef6rAH2bsCtm3jP+UfzowzgBfyvuxk0jW9EAz6Tce/nZVyBjxzA8gaSEmrT04AQ/O3x6T1w2cRbm1DLe+BnzcDbf09+pAG8gP+6JuQtYI18I4dQBD5qAPdsf7IBWmyg3vx86LY2wN5z0OOg5wCw5EcZwIv4H08AC7ZVHWh+rQjWAzhnHZ2D0gaWamjdwpH8KP6X+DX1zMxHD2C0f478sQ3Q+sareR8sf47lS29PPqoByZfMPRuYvAl7PoXizUef/6MaZB0l/6SnV+DT/6F8/ck/a4DWA0D7flr+vN4bH8Xvkb/n/G/PyT8HfsYp/czyJF/v59A9+TXXocZ/ywZcqqHH01n4iAGwkP91J7/24lo2v3Q8mZbnzc5HDGB5vN4B1HIe0Hyt155NeO/rafV0Fr73AEb758jXFVO7AY8WcZVEGMB7Ao4eQFH4eS1HXns14RWDGsCoBcyRj7+4zLkEyAFckvDscaNvQi8+EyOIAaxxasQQcuDjLywTPzU3l/Wrj0h8Zs1onbIeQg58/ElmrhH0WyBoPnO9oJ0azf8LLcahiVajW0gAAAAASUVORK5CYII=",alt:"Figura 51 \xb7 sprite correndo"}],qa=[{label:"Frontend",skills:["React","Vue.js","TypeScript","JavaScript","HTML/CSS","SCSS"]},{label:"Backend",skills:["Node.js","Django","Python","API RESTful","WebSockets"]},{label:"Design & criatividade",skills:["Figma","Illustrator","p5.js","D3.js","Processing"]},{label:"Ferramentas",skills:["Docker","Git","Jira","Scrum"]},{label:"Estudando",skills:["React Native","Flutter","Mobile Development"]}],Ha=[{num:"2+",label:"anos de experi\xeancia full stack"},{num:"10+",label:"anos de estudo em desenvolvimento web"},{num:"9",label:"projetos no portf\xf3lio"}],Wa=[{src:Ea,alt:"Billie Eilish"},{src:Ca,alt:"Rihanna"},{src:Ra,alt:"Demi Rock in Rio"},{src:Pa,alt:"Bruno"},{src:ja,alt:"Amor da Glei"},{src:za,alt:"Amigos do Rafael"},{src:_a,alt:"Wanda Maximoff"},{src:Ia,alt:"Familia da Luane"},{src:Ta,alt:"Playlist Vicente"}],Ya=Wa.length;function Ka(){const e=(new Date).getFullYear(),[t,n]=(0,r.useState)(0),[a,i]=(0,r.useState)(null),l=(0,r.useCallback)(()=>n(e=>(e-1+Ya)%Ya),[]),s=(0,r.useCallback)(()=>n(e=>(e+1)%Ya),[]);(0,r.useEffect)(()=>{if(null!==a)return;const e=setInterval(s,3500);return()=>clearInterval(e)},[a,s]);const u=(0,r.useCallback)(()=>i(e=>(e-1+Ya)%Ya),[]),c=(0,r.useCallback)(()=>i(e=>(e+1)%Ya),[]);(0,r.useEffect)(()=>{const e=e=>{null!==a?("Escape"===e.key&&i(null),"ArrowLeft"===e.key&&u(),"ArrowRight"===e.key&&c()):("ArrowLeft"===e.key&&l(),"ArrowRight"===e.key&&s())};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[a,l,s,u,c]),(0,r.useEffect)(()=>(document.body.style.overflow=null!==a?"hidden":"",()=>{document.body.style.overflow=""}),[a]);const A=Wa[t];return(0,o.jsxs)(pr,{children:[(0,o.jsxs)(mr,{children:[(0,o.jsxs)(hr,{children:[(0,o.jsx)(ur,{children:"sobre mim"}),(0,o.jsxs)(cr,{children:["C\xf3digo, design",(0,o.jsx)("br",{}),"e ",(0,o.jsx)("em",{children:"criatividade"})]})]}),(0,o.jsx)(br,{children:Ha.map(e=>(0,o.jsxs)(yr,{children:[(0,o.jsx)(xr,{children:e.num}),(0,o.jsx)(kr,{children:e.label})]},e.label))}),(0,o.jsxs)(gr,{children:[(0,o.jsxs)("div",{children:[(0,o.jsxs)(vr,{children:["Sou desenvolvedora Full Stack com experi\xeancia real em"," ",(0,o.jsx)("strong",{children:"uma das maiores varejistas do Brasil"})," e pesquisa em arte e tecnologia. Construo produtos digitais do design \xe0 infraestrutura, com aten\xe7\xe3o a performance, usabilidade e c\xf3digo que escala."]}),(0,o.jsxs)(vr,{children:["Tenho facilidade em trabalhar em"," ",(0,o.jsx)("strong",{children:"times multidisciplinares"})," e gosto de resolver problemas complexos com solu\xe7\xf5es diretas: seja otimizando uma API, redesenhando um fluxo de UX ou prototipando em realidade virtual."]}),(0,o.jsx)(Er,{children:qa.map(e=>(0,o.jsxs)(Cr,{children:[(0,o.jsx)(Pr,{children:e.label}),(0,o.jsx)(jr,{children:e.skills.map(e=>(0,o.jsx)(zr,{children:e},e))})]},e.label))}),(0,o.jsx)(wr,{children:(0,o.jsxs)(Sr,{href:Na,download:"curriculo-izadora.pdf",children:[(0,o.jsx)(Sn,{})," Baixar curr\xedculo"]})})]}),(0,o.jsx)(_r,{children:Sa.map(e=>(0,o.jsxs)(Tr,{children:[(0,o.jsx)(Rr,{children:e.period}),(0,o.jsx)(Ir,{children:e.role}),(0,o.jsx)(Nr,{children:e.company}),(0,o.jsx)(Lr,{children:e.desc}),e.stack.length>0&&(0,o.jsx)(Or,{children:e.stack.map(e=>(0,o.jsx)(Mr,{children:e},e))}),e.projects.length>0&&(0,o.jsxs)(Fr,{children:[(0,o.jsx)(Dr,{children:"projetos desenvolvidos"}),e.projects.map(e=>(0,o.jsxs)(Br,{children:[(0,o.jsx)(Vr,{}),(0,o.jsxs)(Ur,{children:[(0,o.jsxs)(Qr,{href:e.href,target:"_blank",rel:"noreferrer",children:[e.name," \u2197"]}),(0,o.jsx)(qr,{children:e.desc})]})]},e.name))]})]},e.period))})]})]}),(0,o.jsx)(Wr,{children:(0,o.jsxs)(Yr,{children:[(0,o.jsxs)(Kr,{children:[(0,o.jsx)(Xr,{children:"ilustra\xe7\xe3o"}),(0,o.jsxs)(Jr,{children:["Al\xe9m do c\xf3digo,",(0,o.jsx)("br",{}),"tamb\xe9m ",(0,o.jsx)("em",{children:"desenho"})]}),(0,o.jsxs)(Gr,{children:["Retratos, personagens e composi\xe7\xf5es criativas. Transformo ideias em ilustra\xe7\xf5es digitais.",(0,o.jsx)("br",{}),"Use as setas ou as teclas \u2190 \u2192 para navegar. Clique na imagem para ver em tela cheia."]}),(0,o.jsxs)(Zr,{href:"https://www.instagram.com/ilustradoradora",target:"_blank",rel:"noreferrer",children:[(0,o.jsx)(kn,{size:15})," @ilustradoradora"]})]}),(0,o.jsxs)($r,{children:[(0,o.jsx)(ea,{onClick:()=>i(t),children:(0,o.jsx)("img",{src:A.src,alt:A.alt,loading:"lazy"},t)}),(0,o.jsx)(ta,{$side:"left",onClick:l,children:"\u2039"}),(0,o.jsx)(ta,{$side:"right",onClick:s,children:"\u203a"}),(0,o.jsxs)(na,{children:[(0,o.jsx)(aa,{children:Wa.map((e,r)=>(0,o.jsx)(oa,{$active:r===t,onClick:()=>n(r)},r))}),(0,o.jsxs)(ra,{children:[t+1," / ",Ya]})]})]})]})}),null!==a&&ir.createPortal((0,o.jsxs)(la,{onClick:()=>i(null),children:[(0,o.jsx)(sa,{src:Wa[a].src,alt:Wa[a].alt,onClick:e=>e.stopPropagation()}),(0,o.jsx)(ua,{onClick:()=>i(null),children:"\u2715"}),(0,o.jsx)(ca,{$side:"left",onClick:e=>{e.stopPropagation(),u()},children:"\u2039"}),(0,o.jsx)(ca,{$side:"right",onClick:e=>{e.stopPropagation(),c()},children:"\u203a"}),(0,o.jsx)(Aa,{children:Wa[a].alt})]}),document.body),(0,o.jsx)(da,{children:(0,o.jsxs)(fa,{children:[(0,o.jsxs)(pa,{children:[(0,o.jsx)(ma,{children:"trabalho de conclus\xe3o de curso \xb7 UVA \xb7 2021 \xb7 nota 10"}),(0,o.jsxs)(ha,{children:["As Aventuras da ",(0,o.jsx)("em",{children:"Garota Ci\xeancia"})]}),(0,o.jsxs)(ga,{children:["Meu TCC em Ci\xeancia da Computa\xe7\xe3o prop\xf5e a"," ",(0,o.jsx)("strong",{children:"gamifica\xe7\xe3o"})," como estrat\xe9gia para discutir a sub-representa\xe7\xe3o das mulheres na tecnologia. O produto final \xe9 um jogo 2D de plataforma onde a ",(0,o.jsx)("strong",{children:"Garota Ci\xeancia"}),", personagem sempre \xe0 procura de novas aventuras, embarca em uma realidade alternativa para descobrir a hist\xf3ria de uma das mulheres mais importantes da computa\xe7\xe3o."]}),(0,o.jsxs)(ga,{children:["Nessa aventura, o foco \xe9 a"," ",(0,o.jsx)("strong",{children:"Condessa Ada Lovelace"}),": a matem\xe1tica que criou o primeiro algoritmo para ser processado por uma m\xe1quina, no s\xe9culo XIX, muito antes do computador pessoal existir. Sua import\xe2ncia \xe9 t\xe3o reconhecida que desde 2009, todo dia 15 de outubro, o mundo celebra o ",(0,o.jsx)("em",{children:"Ada Lovelace Day"})," para inspirar mulheres nas \xe1reas de ci\xeancia, tecnologia, engenharia e matem\xe1tica."]}),(0,o.jsxs)(ga,{children:["No jogo, a Garota Ci\xeancia precisa coletar moedas, passar por armadilhas e desafios crescentes para desbloquear partes da hist\xf3ria de Ada. A cada fase vencida, ela se aproxima da sua pr\xf3pria resposta: a de que \xe9 t\xe3o capaz quanto qualquer outro de realizar o que sempre sonhou. Todo o c\xf3digo foi escrito em"," ",(0,o.jsx)("strong",{children:"C# na Unity"}),"; os sprites e cen\xe1rios foram desenhados \xe0 m\xe3o no ",(0,o.jsx)("strong",{children:"Infinite Painter"}),"."]}),(0,o.jsx)(va,{children:["Unity","C#","Infinite Painter","Design de Jogos","Gamifica\xe7\xe3o"].map(e=>(0,o.jsx)(ba,{children:e},e))}),(0,o.jsx)(ya,{children:(0,o.jsxs)(xa,{href:La,download:"tcc-izadora.pdf",$primary:!0,children:[(0,o.jsx)(Sn,{})," Baixar TCC (PDF)"]})})]}),(0,o.jsx)(ka,{children:Qa.map((e,t)=>(0,o.jsx)(wa,{src:e.src,alt:e.alt,loading:"lazy"},t))})]})}),(0,o.jsxs)(Ar,{children:[(0,o.jsxs)(dr,{children:["\xa9 ",e," Izadora Alves \xb7 S\xe3o Gon\xe7alo, RJ"]}),(0,o.jsx)(fr,{}),(0,o.jsx)(dr,{children:"feito com \u2665"})]})]})}const Xa=$t.div`
  background: var(--bg);
  min-height: 100vh;
  padding-top: 5rem;
  animation: ${lr} 0.4s ease both;
  transition: background 0.3s;
`,Ja=$t.div`
  padding: 4.5rem 3rem;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`,Ga=$t.div`
  margin-bottom: 3rem;
`,Za=$t.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  align-items: start;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,$a=$t.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  align-items: start;

  @media (max-width: 860px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`,eo=$t.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 3.5rem 0 2rem;

  &::before, &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: var(--line);
  }
`,to=$t.span`
  font-family: var(--mono);
  font-size: 0.62rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink-soft);
  opacity: 0.45;
  white-space: nowrap;
`,no=$t.div`
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;

  /* barra lateral nos internos */
  ${e=>{let{$internal:t}=e;return t&&Jt`
    opacity: 0.82;

    &::before {
      content: "";
      position: absolute;
      top: 0; left: 0;
      width: 3px;
      height: 0;
      background: var(--accent);
      transition: height 0.3s;
    }

    &:hover::before { height: 100%; }
  `}}

  &:hover {
    transform: translateY(-3px);
    border-color: var(--accent);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  }
`,ro=$t.img`
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  display: block;
  border-bottom: 1px solid var(--line);
`,ao=$t.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
`,oo=$t.p`
  font-family: var(--mono);
  font-size: 0.65rem;
  color: var(--accent);
  letter-spacing: 0.14em;
  opacity: 0.6;
`,io=$t.h3`
  font-family: var(--serif);
  font-size: 1.2rem;
  color: var(--ink);
  line-height: 1.2;
  margin-top: -0.2rem;
`,lo=$t.p`
  font-size: 0.86rem;
  color: var(--ink-soft);
  font-weight: 300;
  line-height: 1.72;
`,so=$t.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
`,uo=$t.span`
  font-family: var(--mono);
  font-size: 0.62rem;
  padding: 0.18rem 0.5rem;
  border: 1px solid var(--line);
  border-radius: 2px;
  color: var(--ink-soft);
  background: var(--bg);
`,co=$t.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid var(--line);
`,Ao=$t.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.45rem 0.9rem;
  font-family: var(--mono);
  font-size: 0.68rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 2px;
  transition: all 0.2s;

  ${e=>{let{$ghost:t}=e;return t?Jt`
    background: transparent;
    color: var(--ink-soft);
    border: 1.5px solid var(--line);
    &:hover { border-color: var(--accent); color: var(--accent); }
  `:Jt`
    background: var(--accent);
    color: white;
    border: 1.5px solid var(--accent);
    &:hover { background: #a01415; border-color: #a01415; }
  `}}
`,fo=$t.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-family: var(--mono);
  font-size: 0.62rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ink-soft);
  opacity: 0.45;
`,po=($t.p``,[{num:"001",title:"Calculadora iOS Clone",shortDesc:"Calculadora com interface inspirada no iOS, suporte a teclado e hist\xf3rico de express\xf5es.",desc:"Desenvolvimento de uma aplica\xe7\xe3o web com foco em fidelidade visual (UI/UX) e robustez l\xf3gica. O projeto resolve desafios comuns de aritm\xe9tica computacional, como o tratamento de erros de ponto flutuante e a gest\xe3o de estados para encadeamento de opera\xe7\xf5es. Implementei suporte completo a atalhos de teclado e hist\xf3rico din\xe2mico, priorizando a acessibilidade e a experi\xeancia do usu\xe1rio.",stack:["JavaScript","HTML","CSS"],link:"https://doraalves.github.io/calculadora/",github:"https://github.com/doraalves/calculadora",thumb:n.p+"static/media/001.6fd49cffac98db608edf.jpg"},{num:"002",title:"Jogo de Estoura Bal\xf5es",shortDesc:"Jogo interativo com dificuldade crescente, sistema de combos e cursor personalizado.",desc:"Projeto desenvolvido em JavaScript Vanilla para explorar a manipula\xe7\xe3o direta do DOM e l\xf3gica de colis\xe3o sem depend\xeancia de frameworks. Foquei na cria\xe7\xe3o de uma curva de aprendizado progressiva atrav\xe9s de algoritmos de velocidade vari\xe1vel e sistemas de pontua\xe7\xe3o por combo, garantindo uma interface fluida com anima\xe7\xf5es em SVG e feedback visual instant\xe2neo.",stack:["JavaScript","HTML","CSS"],link:"https://doraalves.github.io/baloes/",github:"https://github.com/doraalves/baloes",thumb:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBAUEBAYFBQUGBgYHCQ4JCQgICRINDQoOFRIWFhUSFBQXGiEcFxgfGRQUHScdHyIjJSUlFhwpLCgkKyEkJST/2wBDAQYGBgkICREJCREkGBQYJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCT/wAARCAHCAyADASIAAhEBAxEB/8QAHAABAQEAAwEBAQAAAAAAAAAAAAECBAUGAwcI/8QAPRABAAEDAgMDCQcEAgICAwAAAAECAxEEBQYSIRMxcQcUMjNBUVJysRUiU2GRkqEWVJPhQoEj0SSCCBcl/8QAGwEBAQADAQEBAAAAAAAAAAAAAAECBAYFAwf/xAAzEQEAAgECAQgJAwUAAAAAAAAAARECAwQhBQYVFjFBYZESUVJTYnGBoeET0fAUIiOxwf/aAAwDAQACEQMRAD8A/lgBQFaiAZwYfWKMk0A+WEfSaWJBAAAAAAAAAAAAAAAAAAAAAAAFAAABQAAAAAAAAGoomV7OUGBvklOSQZGuSTkkGRuLcyvZyD5jfZydnIMDXJKTEwCAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALgwsN005BjBh9uylJt4B8cI3VGGZAhFhAAGIN0ywtPeDl2aOZ9K7WIZ09UQ+1yuJpBwbnSXymcvpdnMvkAAAAAAAAAAAAAAAAAAoAFAAAAoAAAAAAAAAANUxmWVpnEoOVatxL79jDj2rvK+0XwXsISbEHbnbwgnYR7kmzC9tCTehRqizEvp2EPjTfw+kaiEF7CDsIZ84g84gEqsQ49y3hyKr8TDj3K8qPhPeiygACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADVPscmxRzONS5emqiJBzKNPmO5871jljucq3dpil8tRciYQdXdjEvlL7XpzMvjKhCLACAIAAPpRcw3N6ZjvfEQWqcsgoAAAAAAAAAAAAAAAACmAQXBhRBcGEEFwYBBcGAQXBgEFwYBBcGAQXBgEFwYAirC88pgwC88nPKYMAvPJzymDALzyc8pgwC88nPKYMAvPPvSasmDAILgwCC4MAguDCiC4MAguDAILgwCC4MAguDAILgwCCgIKAgoCCgIKAgoCCgIKAgoBD6UXOVgByY1Mx7Wa78y+AC1VZYaQCBQAAAAAAAAAAAAAAAAAAAAAAWgAKAAoACgAKACigAooAKKACigAooAKKACigBaAAoACgAKAAoACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAACwALAAsACwDAWBhcAgoCLgAQBEAAAAAAAAAAAAABaAAAAAAAAACgAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsAEAAAAAAAwuAQwoLQAAAAAAACAIgAAAAAAAAAKAAAAAAAFAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABYAIAAAAAAAYAMKC0YAAAAAAAAAAAAABAEQAAAFoAAAAAAAKABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACwAQAAAAAwALgFpMLgAAAAAAAAAAAAAAAAAAAQBAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsAEAAAAAAAwoUmFwAoAAAAAAAAAAAAAAAAAAAAAAACAIABQAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWACAAAAAAAYXAIYUFowAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIgAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADVunnuUUz3VVRH8g5Gn0M3KYruVclM9YiIzMvt5hY+O9/Dk1zmurxxHggOP5hY+K9/B5hY+K9/DkAOP5hY+K9/B5hY+K9/DkAOP5hY+K9/B5hY+K9/DkAOP5hY+K9/B5hY+K9/DkAOP5hY+K9/B5hY+K9/DkAOP5hY+K9/B5hY+K9/DkAOP5hY+K9/B5hY+K9/DkAOP5hY+K9/B5hY+K9/DkAOP5hY+K9/B5hY+K9/DkAOP5hY+K9/B5hY+K9/DkAOP5hY+K9/B5hY+K9/DkAOP5hY+K9/B5hY+K9/DkAOP5hY+O9/D439DNuma7dXPTHWYmMTDnLROK6fdnE+AOnwNXKeS5VTH/GqY/lkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABux6+389P1Ybsevt/PT9QdtV6VXjKLV6VXjKAAAAAAAAAAAD7aTR6nX3osaWxcv3Z7qLdOZdvVwPv9FvnnQTH5dpTn9MsZzxjtl99Lba2rF6eEzHhEy6IfTU6W/o7s2dRartXKe+muMS+bJ8ZiYmpABAAAAAAAABafSp8YRafSp8YB1V/19z56vqw3f9fc+er6sAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABYAIgAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3Y9fb+en6sN2PX2/np+oO2q9KrxlFq9KrxlAAAAAAAAAGrNqu/dotW45q66oppj3zM4hlzdkvU6feNFdrxy0XqZnPimU1Eyz08YyzjGe+X9BcB8C6Ladrt2bdNNV6qIm7dmOtdX/AK90Oy3TardnNOIdTs/EM0WqYpr9jkavd5vRmqXgTqxlxntfsO32eWjWGnwwjsh4/ivhizu2nrtTTFN2InsrmOtNXs/6n2vx2uiq3XVRXE01UzNMxPsmO+H7zf1dN+7TTmMzMPxHerlF7eNdctY5KtRcmnHu5pehsdWconH1ON527TDTzx1ceEzcS4YD0HGgAAAAAAAC0+lT4wi0+lT4wDqr/r7nz1fVhu/6+589X1YAAAAAAAAAAAAAAAAAAAAAAAAAACwAQAAAAABABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABux6+389P1Ybsevt/PT9QdtV6VXjKLV6VXjKAAAAAAAAAAA9xw1xTNy3TYvV4vUxjr/AM/zh6end+0p9J+QRMxMTE4mPbDvdk325RqaLWt1VNvT4nN2uiappxHTu6zmcQ8vcbG5nLDydtyRzpnDGNDc/KJ/f93qOIeIY2zR1zRX/wDJuxNNqPd76v8Ar6vzpyNxu3r2suVX7naV59KO6Y9mPyw47c22hGljXe57lblPPfa3pzwiOyP56wBsPKAAAAAAAAFp9KnxhFp9KnxgLdVf9fc+er6sN3/X3Pnq+rAAAAAAAAAAAAAAAAAAAAAWACWAAAAAAAAAAAAgAoAAAAAAAAAAAAAAAAAAAAAAAAAAAFgAgAA3Y9fb+en6sN2PX2/np+oO2q9KrxlFq9KrxlBQAADE+4AAAAAAAAH1ovUVURbvUzNNPSmqn0qfy/OPySu1RTHNReorj3YmJ/T/AG+YAAAAAAFgYBAABafSp8YRafSp8YB1V/19z56vqw3f9fc+er6sCgAAAAAAAAAAAAAAAWACAAAAAAAAAAAAAAAAIAKAAAAAAAAAAAAAAAAAAAAAAABYAIAAAAAYAbsevt/PT9WcN2PX2/np+ortavSq8ZRavSq8ZQAAB/QXCPDdFryNcN7zs3kw2rjHdtXq9Ta1VV/TzVXTbprr5ZmqJ/KKer+fXv8AXeUyP/1Xw9wltd3dNDuG2ay/f1F+1d7O3cormuYiJpq5pxzR3x7Eke8438hu17xx7umh4e1e3cN29Bsun3TXaa/XNdjS3Kpqiujmz92IimKvb39I6vH6DyQ7Vc2/W79ufHe2bbw1b1s6DRbpVpblzz+5FOZmi3TOYpjrGZmfRn2Q6ngXjrS8NbXxlp9xt6zVajiDaqtDau0TFXLcmZ+9cmqc4698Zl2vDPG/CG4+T+1wRxzp96t6bQ66vXaLW7TyVXI54mK7ddNfTE81XX847sdXEci15At0jiTfdm1u/bXore1bdTutOvriqrT6jTVTOK4mOtMYic9J7vb3uz2LyLbJY4s4Kv6jibQ75wxxDerptXqNPetTqK7cxE2JpzzU82ZxVMxjlnOOmZuvlx2rc9z4quU7VrdPodfw7TsG12ommqu1TTzctV2c+2apnpnHd173WbV5Wtt2rY/J1o6dBrLuo4U3C9rNV1pppvU11zMRROc5xPtiDiGu8lnD2p4u4ns0cZ7VtWzbZrZ09rOnvXb9VdVU/wDit2Y/8lcW+lM19YnvjPV5LyicC63yc8TXti12psauqmzb1Fu/ZiaabluuMxOKusT0mJifc/Stv8rvBeg/qyjQTxZs1zetfG4W9x0VNjz2YqjNzTzXnFFHNnlmMzievXv8V5ZuOtt8onFlvfNrs62za8ws6eu3q8TXTXRzZ6xM80dY69M+4ix6LR//AI+3NT9hWb3G3D+j1u/6G3rNv0d+m5F29VVTzcmI7sdI5vbOcR0dTw15IKN0qv2d94p23YdbRuFe129DNmvVaiu/TPLMzRb60UZzHPPTpnuw/TuKN/4G4W1vk233iTS7/e3XbOHNFqtHRoZt9hfxE8tNzmxNPLV1zHSc9e7r53ZPLrslG0aivXU8QbRut7er266n7Em1TG4011zVTZuXapiqmmmMU9O+I/PpOI6DQeQXW13+KLe7cS7TtFrhnV2tPrNRfpqm1NFcRV2lM9PZMYpmMzM46McLeRfQ8UU6a3a462i1rNxv3rW36W3p7l+u9TRVMRXd5PUxVERVHN7Jjwc7jHyvbFvug8oWl0ek3KJ4o1mi1Olqu0UUxaizFEVRXiqev3JxjPs7nbcD+W7hnhnh3hTS1/1Lob2y1z55odri1Rp9yqmr1t2uZiqrEZnknvnp3dV4o/J9Dsl/Rcb6bY9Xb01zUWd0o0V2i5mqzVVF6KJirHWaJnvx1mH6Du3kip1/FXGGu3XdNm4V2DY9XRp7+psae5XZi7VTTMW7NqJ5p9KJnr31e3PTzO0118YeWXT6rZtPqL8a/fo1lm1VTEXOzm92s5jMxHLTEzPX2S/ROMuPeGrPFnlD4M4rs7jc2bcd2o1lrWbXNFV7T6i3RRTP3aulUTyxH5Ynp16B5anyCbpf4s2/atHve3anZ9w0Fe62d8ppqixGlpxzV1U98VRNVMcuf+UdY64+G9+RzT6ThnS8SbJxltG97drN0t7XZu026tPTTVVE5quTXOLcUzHXOemJz1e64P8AKXY3/jfZ+GuEdgvavh3RbHf2eNHrtXbsarWWq+WblcVTPL2n3acUZ6xzd3s5/E9XD3k08mXDulu8M7notNRxVb1/2VvN63c1estW6J57lVNP3YjupiO77sZ9IsfnHEXkWo2vhbdeINn4t27frWzXLdrcKdPprtumiquqKYm3cq+7diJnvpcjifyU7B5L962+OLOJ9NudqdTZrv7Xt1uY1VzS1UTVNfWqIojmiKcZzMTmMPRcZeW/hze+FuLtk02s4s19W9zauaWdwptU2NFFNyKos27dNX3KYiMc3WZ6dOmZ/PPK7xtofKDxvqN+22xqtPprmnsWYt6iKYriaKOWZ+7Mxj/sHuuKNu4S33yT7vxVVwboOEq6dZRa4cuaeuqm7uVrmiKoromZ5sU5mau7MdJ6dfxJ6jjPiPQb7tvDWm0Oo3e7Vtm206W9Tr6qJot1xjMWYp7qOk9/Xu9zy6wAAC0+lT4wi0+lT4wDqr/r7nz1fVhu/wCvufPV9WBQAAAAAAAAALABAAAAAAAAAAAAAAAAAAAACFlIVRkBFAAAAAAAAAAAAAAAAAAsAEAAAAAAAwotJgwoAAA3Y9fb+en6sN2PX2/np+oO1q9KrxlFq9KrxlAAAB2GwaGxuO50afUzMWuzu11YuRb9G3VVGapicRmOs4c23sNjcr92jRX7Frs6KZ5KNR51Nyqc93LEdIx1xEzGY6TkHRDv7vDFqa9PTZ3CmPOabNFqLtqc13q7UVzR07ojMdZ98fnL52OF7l6/ctVayzai3NvnrqpqmIiqzVd7o90UzHiDpB2+u4duaLbo1s6q1XE027nZ45apouejMdes4xMx7M+3q+Wp2WrT6Ou/5zbru2qLN29YimYm3Td9CebunvjMezPt6g60d/Y4Tpv02f8A+pYouXewiLc2a5xVepmqiM93snM+z8ynhWq5otDd7eLVeouUW6uemcRVciZtxEd+Pu4mffOYzEA6K5eu3uXtbty5yRy089U1cse6M90fky7+vhamza1Hb623Zq0ld2nUV8lVUUzRFvmpimO+YquYznE493VNXwrGii/cu7nYnT6aq5Rfu02q55K6aqIxEd9WZuU9ent93UjoR2U7JVZ1Wvs6nU2rNvQxE3b3LVVE5mIpxEdZzzR4Ow3XhGrRRrL1vVW4tWpu1Wqa++5boq5ZnPTrMxOIx1x7Aeft3LlmuK7Vyu3XHdVRVNMx4TDMzMzMzOZn2u5p2G1qNv0t6xqo86uae5fq09VNU5ppuzRMxMR06YnHXOJ/KHOjguuiubVeoi5XXFM25xyYmL0UV80TmYjEzMe38vYDzETNMxVEzExOYmOkxLd29dv18967cu1YxzXK5qnHjL0FHCtvcOTVaHVU29vuxRFu7dzMzVVVVTiYxGIiaJzPux3uv3DYq9v263ratRbuxVVFNcWomqmievTmjpmMd04/LIOsHoP6PvUU0Te1untTyc92KqZns47KbkYx1q6U4nEdJmHE3XYY27SzqLeutamIqtxVFNuqiaYuW5ronr+UdY9k+8HVD0trYds1GhnWW6tVFGm7Tzi3Vcp7SrltTX1px/4pmqJiInm6Zn2On3fR2tHqqKbE1zau2LV+iK5iaqYroirlmY78Z7/aDhAALT6VPjCLT6VPjAOqv+vufPV9WG7/AK+589X1YFAAAAsAEAAAAAAAAAAAAAAAAAAAAAAAAAAWAgUZARQAAAAAAAAAAALABAAAAAAAMLgEMKC0AAAAAAAAN2PX2/np+rDdj19v56fqDtavSq8ZRavSq8ZQAAH20es1Gg1FOo0t2q1dpiYiqMTiJjE9/wCUzDlxxDulNybkauYqmI6xbojGM4mPu9JjM4mOsZ73XAW51vfdztUclGtuxTFFNEd04iImIxOOkxEzGY646ZWd+3ObNFjz272dERTTEREdIpmiMzjM/dmaevsnDgAjk3Ny1d7SUaS5fqqsURTEU4juj0YmcZmIzOImcR7C7uetv6SjSXdRXVYoxEUTjujPLEz3zEZnET3Z6OMA5VG666iqmqnVXYmibdVMxPdNuMUT/wDWJmIfaniHdabcW6dbcimIpjpTTn7tM0xOcZzFMzETnOOjr3c7Zw5Vuuiou2NVTOoruckWOXPLHNTTzVTnMR97viJiMdZgHBu7vr71qq1c1d2uiqnkqiZ74xTGJ/6ooj/6w3Tvm5UXKrkay5NVdVddfNEVRVNWOaZiYxOeWnv90OyvcL2LEVXqtzpq09MxRVVRaiuuK5uckRy01TGJnrnOcdMZ6H9I1faHmfnlOeWapr7Oen/yew7s+/738A6mzumtsam7qqNTX217MXaqsVdpmczzROYnrifGG7297jqLd23e1dy5TemqquaoiZq5pzV1xmImYiZiJxLsqeG9NFFGqq3GudFNcW5rjTzzzXN2beOXm7vuzOc93sz0b1XCtmjW3tPRrotV0T2vLXbmabdib3ZxM1R1mqOkzGP+8g6q3vW42tLRpLeruUWbfoU04iafvc2InGYjmxOM4zDdfEO63OXOtuU8tXNTyRTRyzzRVmMRH/KInx6uTr9m0+36XVzVdru3IpsV6evpEV01VVRVMcs1RVH3Y6xMumB2FO/7nTdm7GrqiqaaacclPLEUzM04pxiMTMzExETEzPvfG/ums1Olp0t3UVV2acfdmIzOM4zOMzjM4zM4y4oDm1b1uFVqi1Oqr5aKeSMRETMcs0YmcZn7szHXOIno+N7XanUW6rV2/XXRVyZpnunkp5af0p6PgA7CeIN1qm1M625M2ZzTOKczPLy5q6fe+70+9np0cTU6q9rL9d/UXKrl2v0qp8MR4Rjph8gAABafSp8YRafSp8YB1V/19z56vqw3f9fc+er6sBYAAAAAAAAAAAAAAAAAAAAAAAAAABgAXAtCYXAAAAyAigAAAAAWACAAAAAAAGADCgtJhQAAAAAAAAAAAAAbsevt/PT9WG7Hr7fz0/UHa1elV4yi1elV4yggAAAAAAAA5NvctbZ0s6S3qr1FiZz2dNWIz0n/AK7o/RxgHbaTifcdNq51Vy7Vqrk0ckTdrrjljm5unLMe3v8Ae+Fe/bpXzx5/qKaa7k3ZpprxHNNXPM4+br4uAA5Wn3bX6SYnT62/amImI5a5jETPNP8APXx6r9sblNFNHn+p5abnaxHaT0rzzZ8c9fHq4gDkancdZrJrnUam7d54pirmnpMRmY6flmf1lxwAAAAAAAAAWn0qfGEWn0qfGAdVf9fc+er6sN3/AF9z56vqwAAAAAAAAAAAAAAAAAAAAAAALgBFwC0AAAAAAAArICAAFgAgAAAABgAXALSYXAAAAAAAAAAAAAAAAAAAAN2PX2/np+rDdj19v56fqDtavSq8ZRavSq8ZQQAAAAA7wB6rS8JaaLNM6m5dquzGauScRH5dz7f0nt3v1H7/APTSnlDRiadJhzV3+WMZVEX65ePHsP6T2736j9/+j+k9u9+o/f8A6TpDS8WXVPf/AA+f4ePHsP6T2736j9/+j+k9u9+o/f8A6OkNLxOqe/8Ah8/w8ePYf0nt3v1H7/8AR/Se3e/Ufv8A9HSGl4nVPf8Aw+f4ePHsP6T2736j9/8Ao/pPbvfqP3/6OkNLxOqe/wDh8/w8ePYf0nt3v1H7/wDT46rhLTTZqnTXLtN2IzTzzmJ/LuWOUNGZpjnzV3+OM5VE/KXlQ7huubAAAMALT6VPjBhafSjxgV1N/wBfc+er6sN3/X3Pnq+rAgAAAAAAAAAAAAAAAAGFwCGFFoMAAAAAAAAAAAAACsgIgAABgAMKFJgwoKAAAAAAAAAAAAAAAAAAAAAAAAN2PX2/np+rDdj19v56fqDtavSq8ZRavSq8ZQQAAAAWj06fGEWj06fGBY7X6QA5R+5j108J7HoNo0Fzed81Gh3HctHOu09MaaK9PbozVFFNyqJ5omvln0YnGYy8i9NpePdbptq0+iq2/bL+o0livS6XX3rM1X9PZqzminryzjmnEzEzGZw+mE48fSau6x1pjH9Ke/j2f9ie/t/kMXeA93s7PRuddeixNmzqK9LGoidRZs3aopt3K6MdKZmY9uYzEzDsdR5J9908XYnV7NcuWpv0Tat6yJrm5Zp5rluIx1qin72Pd7c9HCvcf7he2iNBOj0FN6rT2NJd1tNFXb3rFmqKqLdU83LiOWnMxETMRGZfaryl7vVrK9XOm0PPXq9XrJjkqxz6i12Vcel3RT3fn35Z/wCJqT/Xz2V3/wCor739Hyr8m/EMbTpNyo09q7Tqp08U2KK83aIvzizNUYxEVTjumcZjOMlfk+3GjdLe3faOy11V0Xa5vW9ZFdFE255a6ZxHNzRM45YpnPfGYy1d8o+73NFt9mLWlo1OgnT9nrI55uVRYx2cTTNXJHdGZimJqxGXN13lDs6bea9Zsu07fYsX9JXZv0U2a7M13LtUV3auemvtPSiOX70YjMYwVpHpb6JqYjv/AB3+X3dZr+AN32vS7tqddc0Gno2rUea3or1ERVcu8kVxTbjH35mmcx/33Yebei4h443HiWzrLWrsaS3Gs11OvudlTVGLlNrssRmZxTyxnHvedfPP0b/tbu2/W9C9er8Pl+9gDBsPzev06vGUaq9OrxlHVvwye1MLgAAAFp9KPGEWn0o8YB1N/wBfc+er6sN3/X3Pnq+rAgAAAAAAAAAAC4BDC4FoMAAAAAAAAAAAAAAAAAAAIrIYXAiGFBaMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN2PX2/np+rDdj19v56fqDtavSq8ZRavSq8ZQQAAAAInE5j2AD3Ol33QamzTcnU27VUx96iurExL7faug/vdP8A5IeAHmzybhfCZdhhzx3MYxGWnEz9Xv8A7V0H97p/8kH2roP73T/5IeADozD2pZdctf3cfd7/AO1dB/e6f/JB9q6D+90/+SHgA6Mw9qTrlr+7j7vf/aug/vdP/kg+1dB/e6f/ACQ8BhcHRmHtSdctf3cfd777V0H97p/8kH2roP73T/5IeBDozD2pXrlr+7j7vffaug/vdP8A5IfHVb7oNNZquRqbd2qI+7RRVmZl4cI5NwvjMsM+eO4nGYxwiJ+pM5nM+0B6TkAAAABafSjxhFp9KPGAdTf9fc+er6sN3/X3Pnq+rAgAAAABgAXAtCYXAAAAAAAAAAAAAAAAAAAAAAAAAIqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN2PX2/np+rBEzE5jpIO4q9KrxlEtXY1NPPR1q/5Ux3xP/prlq+Gr9BEF5avhq/Q5avhq/QEF5avhq/Q5avhq/QEF5avhq/Q5avhq/QEF5Kvhq/Q5Kvhq/QEMNcs/DP6HLV8NX6C0mBeWr4av0OWr4av0BBeWr4av0OWr4av0BBeWr4av0OWr4av0BBeWr4av0OWr4av0BBeWr4av0OWr4av0BBeWr4av0OWr4av0BBeWr4av0OWr4av0BFp9Knxg5avhq/Rm7djS089fpf8aZ75n/0Dq7/r7nz1fVgmZmcz1kEBcGARcAtAAAAAAAAAAAAAAAAAAAAAAAAAAAAWtACCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABYAIAAROJzHSW+3u/i3P3SwA32978W5++Tt734tz98sAN9ve/Fufvk7e9+Lc/fLADfb3vxbn75O3vfi3P3ywA32978W5++Tt734tz98sAN9ve/Fufvk7e9+Lc/fLADfb3vxbn75O3vfi3P3ywA32978W5++Tt734tz98sAN9ve/Fufvk7e9+Lc/fLADfb3vxbn75O3vfi3P3ywA32978W5++Tt734tz98sAN9ve/Fufvk7e9+Lc/fLADfb3vxbn75O3vfi3P3yxhcA12938W5+6Weszme8FoMAAAAAAAAAAAAAAAAAAAAAAAAAAAFrQAgAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAWACAAAAAAAAAAAAAAAAAAAAAAAAAAALgEFFoMAAAAAAAAAAAAAAAAAAAAAAAAAAAFrQAgAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAWACWAAAAAAAAAAAAAAAAAAAAAAAAAAAYAFwLQmFwAAAAAAAAAAAAAAAAAAAAAAAAAAAUAIoAAAAAAAAAAAAAAAAAogCAAAAAAAAAAAAAAFgAgAAAAAAAAAAAAAAAAAAAAAAAAAALgBFwCgAAAAAAAAAAAAAAAAAAAAAAAAAAAWtACAAAAAAAAAAAAAAAAAAAAAAogCAAAAAAAAFgAgAAAAAAAAAAAAAAAAAAAAAAAAAAGFwCGFFoMAAAAAAAAAAAAAAAAAAAAAAAAAAAFrQAgAAAAAAAAAAAAAAAAAAAAAAALQAAAAgCAAFgAgAAAAAAAAAAAAAAAAAAAAAAAAAAC4BBcC0GAAAAAAAAAAAAAAAAAAAAAAAAAAAC1oAQAAAAAAAAAAAAAAAAAAAAAAACgAUAAAAAAAAQBCQAQAAAAAAAAAAAAAAAAAAAAAAAAAAIAFAUAAAAAAAAAAAAAAAAAAAAAAAAAAAEUAAAAAAAAAAAAAAAAAAAAAAAAAWAAAAAAAAAAAAB//Z"},{num:"003",title:"Cron\xf4metro",shortDesc:"Cron\xf4metro com marca\xe7\xe3o de voltas, anel SVG animado e destaque da melhor e pior volta.",desc:"Cron\xf4metro avan\xe7ado que utiliza anima\xe7\xf5es sincronizadas via SVG para representa\xe7\xe3o visual do tempo. O diferencial t\xe9cnico est\xe1 no algoritmo de an\xe1lise de performance, que identifica e destaca automaticamente os melhores e piores tempos de volta. Desenvolvido com foco em arquitetura limpa, utilizando atalhos de teclado para otimizar o fluxo de trabalho do usu\xe1rio. Suporta atalhos de teclado (Espa\xe7o, L, R) para uso sem mouse.",stack:["JavaScript","HTML","CSS"],link:"https://doraalves.github.io/cronometro/",github:"https://github.com/doraalves/cronometro",thumb:"data:image/jpeg;base64,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"},{num:"004",title:"BlackVis",shortDesc:"Visualiza\xe7\xe3o interativa em grafo de for\xe7a de designers negros brasileiros, com filtros por \xe1rea e nome.",desc:"Visualiza\xe7\xe3o de dados constru\xedda com D3.js v7 como ferramenta de visibilidade para designers negros brasileiros. Exibe um grafo de for\xe7a onde n\xf3s representam designers, t\xe9cnicas e \xe1reas do design, conectados por afinidade. Filtros por ano de nascimento, \xe1rea ou nome permitem explora\xe7\xe3o n\xe3o-linear dos dados. Projeto com prop\xf3sito social e t\xe9cnica de visualiza\xe7\xe3o avan\xe7ada.",stack:["D3.js","JavaScript","HTML","SCSS"],link:"https://blackvisesdi.github.io/BlackVis/",github:"https://github.com/blackvisesdi/BlackVis",thumb:n.p+"static/media/004.35bb6acc50ad8dfa318c.jpg"},{num:"005",title:"Dashboard de Opera\xe7\xf5es (Real-time)",shortDesc:"Dashboard em tempo real para gest\xe3o de equipes na Americanas S.A., com status e setor de cada colaborador.",desc:"Dashboard interno desenvolvido na Americanas S.A. para centralizar status, setor e cargo de cada colaborador em tempo real. Substituiu comunica\xe7\xf5es dispersas por uma vis\xe3o \xfanica e atualizada, melhorando a gest\xe3o e resposta das lideran\xe7as. Desenvolvido com Vue.js no front e Django + WebSockets no back-end, containerizado com Docker.",stack:["Vue.js","Django","Python","WebSockets","HTML/SCSS","Docker"],link:null,github:null},{num:"006",title:"Hub de Inova\xe7\xe3o & KPIs",shortDesc:"Plataforma de monitoramento de projetos e m\xe9tricas de vendas para a equipe de Inova\xe7\xe3o da Americanas.",desc:"Aplica\xe7\xe3o de monitoramento desenvolvida para a equipe de Inova\xe7\xe3o da Americanas S.A. Consolidou dados de dezenas de projetos estrat\xe9gicos, an\xe1lise de resultados de vendas e m\xe9tricas de KPIs em uma \xfanica interface atualizada em tempo real. Desenvolvida com ReactJS, Node.js e integra\xe7\xe3o com APIs RESTful internas.",stack:["ReactJS","Node.js","Styled Components","API RESTful"],link:null,github:null},{num:"007",title:"Site Institucional MediaLAB",shortDesc:"Site institucional do laborat\xf3rio de m\xeddia da ESDI/UERJ, integrando identidade visual e arquitetura de conte\xfado.",desc:"Desenvolvimento completo do site institucional do MediaLAB da ESDI/UERJ. Respons\xe1vel pela arquitetura de informa\xe7\xe3o, implementa\xe7\xe3o da identidade visual no ambiente digital e publica\xe7\xe3o de projetos experimentais do laborat\xf3rio. Desenvolvido em WordPress com customiza\xe7\xf5es em HTML, CSS e JavaScript.",stack:["WordPress","HTML","CSS","JavaScript"],link:null,github:null},{num:"008",title:"Galeria Imersiva (Web 3.0 / VR)",shortDesc:"Instala\xe7\xf5es interativas e espa\xe7os imersivos em Meta Quest 3, explorando arte, design e tecnologia.",desc:"Prototipagem de instala\xe7\xf5es interativas e ambientes imersivos para a plataforma Spatial, exibidos em Meta Quest 3. Projeto experimental do MediaLAB/ESDI que explora a fronteira entre arte, design e tecnologia em espa\xe7os virtuais tridimensionais. Programa\xe7\xe3o criativa com p5.js integrada ao ambiente 3D.",stack:["Spatial","Meta Quest 3","JavaScript","p5.js","Figma"],link:"https://www.spatial.io/s/Media-Labs-1-0-Claro-6826039af8049f0d7678b6fe?share=1267569543253887910",figma:"https://www.figma.com/proto/p4XoK4HtQAH3xUZ6u7IRTW/MEDIALAB-UERJ-RIO2C-2025?page-id=0%253A1&node-id=1-3&viewport=116%252C0%252C0.7&t=fgPmz23wxGwTVIsS-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%253A3",github:null},{num:"009",title:"Core de Gerenciamento de Pedidos",shortDesc:"Front-end do sistema de pedidos do Americanas Mercado, com foco em performance e integra\xe7\xe3o com APIs de alto tr\xe1fego.",desc:"Implementa\xe7\xe3o front-end do sistema de gerenciamento de pedidos para o Americanas Mercado. Foco em performance, acessibilidade e usabilidade em um ambiente de alto volume de transa\xe7\xf5es. Componentiza\xe7\xe3o reutiliz\xe1vel com ReactJS e Styled Components, integra\xe7\xe3o com APIs RESTful internas e aten\xe7\xe3o a estados de loading, erro e sucesso.",stack:["ReactJS","Node.js","API RESTful","Styled Components"],link:null,github:null}]);function mo(){const e=(new Date).getFullYear(),t=po.filter(e=>e.thumb),n=po.filter(e=>!e.thumb);return(0,o.jsxs)(Xa,{children:[(0,o.jsxs)(Ja,{children:[(0,o.jsxs)(Ga,{children:[(0,o.jsx)(ur,{children:"projetos"}),(0,o.jsxs)(cr,{children:["O que ",(0,o.jsx)("em",{children:"constru\xed"})]})]}),(0,o.jsx)(Za,{children:t.map(e=>(0,o.jsxs)(no,{children:[(0,o.jsx)(ro,{src:e.thumb,alt:e.title,loading:"lazy"}),(0,o.jsxs)(ao,{children:[(0,o.jsx)(oo,{children:e.num}),(0,o.jsx)(io,{children:e.title}),(0,o.jsx)(lo,{children:e.desc}),(0,o.jsx)(so,{children:e.stack.map(e=>(0,o.jsx)(uo,{children:e},e))}),(0,o.jsxs)(co,{children:[e.link&&(0,o.jsxs)(Ao,{href:e.link,target:"_blank",rel:"noreferrer",children:[(0,o.jsx)(En,{})," Ver ao vivo"]}),e.github&&(0,o.jsxs)(Ao,{href:e.github,target:"_blank",rel:"noreferrer",$ghost:!0,children:[(0,o.jsx)(yn,{})," C\xf3digo"]}),e.figma&&(0,o.jsxs)(Ao,{href:e.figma,target:"_blank",rel:"noreferrer",$ghost:!0,children:[(0,o.jsx)(Pn,{})," Figma"]})]})]})]},e.num))}),(0,o.jsx)(eo,{children:(0,o.jsx)(to,{children:"projetos internos"})}),(0,o.jsx)($a,{children:n.map(e=>(0,o.jsx)(no,{$internal:!0,children:(0,o.jsxs)(ao,{children:[(0,o.jsx)(oo,{children:e.num}),(0,o.jsx)(io,{children:e.title}),(0,o.jsx)(lo,{children:e.desc}),(0,o.jsx)(so,{children:e.stack.map(e=>(0,o.jsx)(uo,{children:e},e))}),(0,o.jsxs)(co,{children:[e.figma&&(0,o.jsxs)(Ao,{href:e.figma,target:"_blank",rel:"noreferrer",$ghost:!0,children:[(0,o.jsx)(Pn,{})," Figma"]}),!e.link&&!e.github&&!e.figma&&(0,o.jsxs)(fo,{children:[(0,o.jsx)(Cn,{})," projeto interno \xb7 link n\xe3o dispon\xedvel"]})]})]})},e.num))})]}),(0,o.jsxs)(Ar,{children:[(0,o.jsxs)(dr,{children:["\xa9 ",e," Izadora Alves"]}),(0,o.jsx)(fr,{}),(0,o.jsx)(dr,{children:"feito com \u2665"})]})]})}class ho{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Network Error";this.status=e,this.text=t}}const go={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:(()=>{if("undefined"!==typeof localStorage)return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}})()},vo=e=>e?"string"===typeof e?{publicKey:e}:"[object Object]"===e.toString()?e:{}:{},bo=async function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=await fetch(go.origin+e,{method:"POST",headers:n,body:t}),a=await r.text(),o=new ho(r.status,a);if(r.ok)return o;throw o},yo=(e,t,n)=>{if(!e||"string"!==typeof e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||"string"!==typeof t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n||"string"!==typeof n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},xo=e=>e.webdriver||!e.languages||0===e.languages.length,ko=()=>new ho(451,"Unavailable For Headless Browser"),wo=(e,t)=>{if((e=>!e.list?.length||!e.watchVariable)(e))return!1;((e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if("string"!==typeof t)throw"The BlockList watchVariable has to be a string"})(e.list,e.watchVariable);const n=(r=t,a=e.watchVariable,r instanceof FormData?r.get(a):r[a]);var r,a;return"string"===typeof n&&e.list.includes(n)},So=()=>new ho(403,"Forbidden"),Eo=async(e,t,n)=>{if(!t.throttle||!n)return!1;((e,t)=>{if("number"!==typeof e||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&"string"!==typeof t)throw"The LimitRate ID has to be a non-empty string"})(t.throttle,t.id);const r=t.id||e,a=await(async(e,t,n)=>{const r=Number(await n.get(e)||0);return t-Date.now()+r})(r,t.throttle,n);return a>0||(await n.set(r,Date.now().toString()),!1)},Co=()=>new ho(429,"Too Many Requests"),Po=async(e,t,n,r)=>{const a=vo(r),o=a.publicKey||go.publicKey,i=a.blockHeadless||go.blockHeadless,l=go.storageProvider||a.storageProvider,s={...go.blockList,...a.blockList},u={...go.limitRate,...a.limitRate};if(i&&xo(navigator))return Promise.reject(ko());const c=(e=>"string"===typeof e?document.querySelector(e):e)(n);yo(o,e,t),(e=>{if(!e||"FORM"!==e.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"})(c);const A=new FormData(c);return wo(s,A)?Promise.reject(So()):await Eo(location.pathname,u,l)?Promise.reject(Co()):(A.append("lib_version","4.4.1"),A.append("service_id",e),A.append("template_id",t),A.append("user_id",o),bo("/api/v1.0/email/send-form",A))},jo=$t.div`
  background: var(--bg);
  min-height: 100vh;
  padding-top: 5rem;
  animation: ${lr} 0.4s ease both;
  transition: background 0.3s;
`,zo=$t.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 4.5rem 3rem;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`,_o=$t.div`
  margin-bottom: 3rem;
`,To=$t.p`
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
`,Ro=$t.h2`
  font-family: var(--serif);
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  line-height: 1.1;
  color: var(--ink);

  em {
    font-style: italic;
    color: var(--accent);
  }
`,Io=$t.div`
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`,No=$t.div``,Lo=$t.p`
  font-size: 1rem;
  color: var(--ink-soft);
  font-weight: 300;
  line-height: 1.8;
  margin-bottom: 2rem;
`,Oo=$t.p`
  font-family: var(--mono);
  font-size: 0.66rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-soft);
  opacity: 0.55;
  margin-bottom: 0.75rem;
`,Mo=$t.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
`,Fo=$t.span`
  font-family: var(--mono);
  font-size: 0.7rem;
  letter-spacing: 0.06em;
  padding: 0.35rem 0.85rem;
  border: 1px solid var(--line);
  border-radius: 20px;
  color: var(--ink-soft);
  background: var(--surface);
`,Do=$t.a`
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
`,Bo=$t.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
`,Vo=$t.a`
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
`,Uo=$t.div`
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 6px;
  padding: 2rem;
  transition: background 0.3s, border-color 0.3s;
`,Qo=$t.p`
  font-family: var(--mono);
  font-size: 0.7rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-soft);
  opacity: 0.6;
  margin-bottom: 1.5rem;
`,qo=$t.div`
  margin-bottom: 1rem;
`,Ho=$t.label`
  display: block;
  font-family: var(--mono);
  font-size: 0.68rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ink-soft);
  margin-bottom: 0.4rem;
`,Wo=$t.input`
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
`,Yo=$t.textarea`
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
`,Ko=$t.button`
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
`,Xo=$t.p`
  font-family: var(--mono);
  font-size: 0.78rem;
  color: #3a7d44;
  text-align: center;
  margin-top: 0.85rem;
  letter-spacing: 0.04em;
`,Jo=$t.p`
  font-family: var(--mono);
  font-size: 0.78rem;
  color: var(--accent);
  text-align: center;
  margin-top: 0.85rem;
  letter-spacing: 0.04em;
`,Go=$t.div`
  border-top: 1px solid var(--line);
  margin-top: 3rem;
  padding-top: 1.75rem;
  font-family: var(--mono);
  font-size: 0.7rem;
  color: var(--ink-soft);
  letter-spacing: 0.08em;
`,Zo=["Freelance","Remoto","H\xedbrido","CLT"];function $o(){const e=(0,r.useRef)(),[t,n]=(0,r.useState)({from_name:"",from_email:"",message:""}),[a,i]=(0,r.useState)("idle"),l=e=>n({...t,[e.target.name]:e.target.value}),s=t.from_name&&t.from_email&&t.message,u="sending"===a,c=(new Date).getFullYear();return(0,o.jsx)(jo,{children:(0,o.jsxs)(zo,{children:[(0,o.jsxs)(_o,{children:[(0,o.jsx)(To,{children:"contato"}),(0,o.jsxs)(Ro,{children:["Vamos ",(0,o.jsx)("em",{children:"trabalhar juntos"}),"?"]})]}),(0,o.jsxs)(Io,{children:[(0,o.jsxs)(No,{children:[(0,o.jsx)(Lo,{children:"Estou aberta a novos projetos, freelas e oportunidades full-time. Se voc\xea tem um produto para construir ou uma equipe que precisa de refor\xe7o t\xe9cnico, me manda uma mensagem."}),(0,o.jsx)(Oo,{children:"dispon\xedvel para"}),(0,o.jsx)(Mo,{children:Zo.map(e=>(0,o.jsx)(Fo,{children:e},e))}),(0,o.jsxs)(Do,{href:"https://wa.me/5521982419979",target:"_blank",rel:"noreferrer",children:[(0,o.jsx)(wn,{})," Chamar no WhatsApp"]}),(0,o.jsxs)(Bo,{children:[(0,o.jsxs)(Vo,{href:"https://github.com/doraalves",target:"_blank",rel:"noreferrer",children:[(0,o.jsx)(yn,{})," GitHub"]}),(0,o.jsxs)(Vo,{href:"https://www.linkedin.com/in/izadoraalves/",target:"_blank",rel:"noreferrer",children:[(0,o.jsx)(xn,{})," LinkedIn"]}),(0,o.jsxs)(Vo,{href:"https://www.instagram.com/izadoraaalves",target:"_blank",rel:"noreferrer",children:[(0,o.jsx)(kn,{size:15})," Instagram"]})]})]}),(0,o.jsxs)(Uo,{children:[(0,o.jsx)(Qo,{children:"Enviar mensagem"}),(0,o.jsxs)("form",{ref:e,onSubmit:async t=>{if(t.preventDefault(),!u){i("sending");try{await Po("service_lk5zmy8","template_tfx86s1",e.current,"oeHkI3XYftME2KOZ_"),i("success"),n({from_name:"",from_email:"",message:""}),setTimeout(()=>i("idle"),5e3)}catch{console.error("Falha ao enviar formul\xe1rio"),i("error"),setTimeout(()=>i("idle"),5e3)}}},children:[(0,o.jsxs)(qo,{children:[(0,o.jsx)(Ho,{htmlFor:"from_name",children:"Nome"}),(0,o.jsx)(Wo,{id:"from_name",name:"from_name",type:"text",placeholder:"Seu nome",value:t.from_name,onChange:l,disabled:u})]}),(0,o.jsxs)(qo,{children:[(0,o.jsx)(Ho,{htmlFor:"from_email",children:"E-mail"}),(0,o.jsx)(Wo,{id:"from_email",name:"from_email",type:"email",placeholder:"seu@email.com",value:t.from_email,onChange:l,disabled:u})]}),(0,o.jsxs)(qo,{children:[(0,o.jsx)(Ho,{htmlFor:"message",children:"Deixe aqui sua mensagem:"}),(0,o.jsx)(Yo,{id:"message",name:"message",placeholder:"Conte um pouco sobre o projeto ou oportunidade...",value:t.message,onChange:l,disabled:u})]}),(0,o.jsxs)(Ko,{type:"submit",disabled:!s||u,children:[(0,o.jsx)(jn,{}),u?"Enviando...":"Enviar mensagem"]}),"success"===a&&(0,o.jsx)(Xo,{children:"\u2713 Mensagem enviada! Responderei em breve."}),"error"===a&&(0,o.jsx)(Jo,{children:"\u2717 Erro ao enviar. Tente pelo WhatsApp."})]})]})]}),(0,o.jsxs)(Go,{children:["\xa9 ",c," Izadora Alves \xb7 S\xe3o Gon\xe7alo, RJ"]})]})})}function ei(){const[e,t]=(0,r.useState)("home"),n=e=>{t(e),window.scrollTo(0,0)};return(0,o.jsxs)(l,{children:[(0,o.jsx)(rn,{}),(0,o.jsx)(Rn,{}),(0,o.jsx)(Tn,{page:e,onNavigate:n}),"home"===e&&(0,o.jsx)(or,{onNavigate:n}),"about"===e&&(0,o.jsx)(Ka,{}),"projects"===e&&(0,o.jsx)(mo,{}),"contact"===e&&(0,o.jsx)($o,{})]})}a.createRoot(document.getElementById("root")).render((0,o.jsx)(ei,{}))})();
//# sourceMappingURL=main.c3334ba4.js.map