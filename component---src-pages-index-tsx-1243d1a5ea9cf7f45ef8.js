/*! For license information please see component---src-pages-index-tsx-1243d1a5ea9cf7f45ef8.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[691],{5900:function(t,n){var r;!function(){"use strict";var e={}.hasOwnProperty;function o(){for(var t=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var a=typeof r;if("string"===a||"number"===a)t.push(r);else if(Array.isArray(r)){if(r.length){var i=o.apply(null,r);i&&t.push(i)}}else if("object"===a)if(r.toString===Object.prototype.toString)for(var u in r)e.call(r,u)&&r[u]&&t.push(u);else t.push(r.toString())}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(r=function(){return o}.apply(n,[]))||(t.exports=r)}()},3099:function(t){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},9670:function(t,n,r){var e=r(111);t.exports=function(t){if(!e(t))throw TypeError(String(t)+" is not an object");return t}},1318:function(t,n,r){var e=r(5656),o=r(7466),a=r(1400),i=function(t){return function(n,r,i){var u,c=e(n),f=o(c.length),l=a(i,f);if(t&&r!=r){for(;f>l;)if((u=c[l++])!=u)return!0}else for(;f>l;l++)if((t||l in c)&&c[l]===r)return t||l||0;return!t&&-1}};t.exports={includes:i(!0),indexOf:i(!1)}},4326:function(t){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},648:function(t,n,r){var e=r(1694),o=r(4326),a=r(5112)("toStringTag"),i="Arguments"==o(function(){return arguments}());t.exports=e?o:function(t){var n,r,e;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(r){}}(n=Object(t),a))?r:i?o(n):"Object"==(e=o(n))&&"function"==typeof n.callee?"Arguments":e}},9920:function(t,n,r){var e=r(6656),o=r(3887),a=r(1236),i=r(3070);t.exports=function(t,n){for(var r=o(n),u=i.f,c=a.f,f=0;f<r.length;f++){var l=r[f];e(t,l)||u(t,l,c(n,l))}}},8880:function(t,n,r){var e=r(9781),o=r(3070),a=r(9114);t.exports=e?function(t,n,r){return o.f(t,n,a(1,r))}:function(t,n,r){return t[n]=r,t}},9114:function(t){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},6135:function(t,n,r){"use strict";var e=r(7593),o=r(3070),a=r(9114);t.exports=function(t,n,r){var i=e(n);i in t?o.f(t,i,a(0,r)):t[i]=r}},9781:function(t,n,r){var e=r(7293);t.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,n,r){var e=r(7854),o=r(111),a=e.document,i=o(a)&&o(a.createElement);t.exports=function(t){return i?a.createElement(t):{}}},5268:function(t,n,r){var e=r(4326),o=r(7854);t.exports="process"==e(o.process)},8113:function(t,n,r){var e=r(5005);t.exports=e("navigator","userAgent")||""},7392:function(t,n,r){var e,o,a=r(7854),i=r(8113),u=a.process,c=u&&u.versions,f=c&&c.v8;f?o=(e=f.split("."))[0]+e[1]:i&&(!(e=i.match(/Edge\/(\d+)/))||e[1]>=74)&&(e=i.match(/Chrome\/(\d+)/))&&(o=e[1]),t.exports=o&&+o},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,n,r){var e=r(7854),o=r(1236).f,a=r(8880),i=r(1320),u=r(3505),c=r(9920),f=r(4705);t.exports=function(t,n){var r,l,s,p,d,v=t.target,y=t.global,m=t.stat;if(r=y?e:m?e[v]||u(v,{}):(e[v]||{}).prototype)for(l in n){if(p=n[l],s=t.noTargetGet?(d=o(r,l))&&d.value:r[l],!f(y?l:v+(m?".":"#")+l,t.forced)&&void 0!==s){if(typeof p==typeof s)continue;c(p,s)}(t.sham||s&&s.sham)&&a(p,"sham",!0),i(r,l,p,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(n){return!0}}},9974:function(t,n,r){var e=r(3099);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 0:return function(){return t.call(n)};case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},5005:function(t,n,r){var e=r(857),o=r(7854),a=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?a(e[t])||a(o[t]):e[t]&&e[t][n]||o[t]&&o[t][n]}},1246:function(t,n,r){var e=r(648),o=r(7497),a=r(5112)("iterator");t.exports=function(t){if(null!=t)return t[a]||t["@@iterator"]||o[e(t)]}},7854:function(t,n,r){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},6656:function(t){var n={}.hasOwnProperty;t.exports=function(t,r){return n.call(t,r)}},3501:function(t){t.exports={}},4664:function(t,n,r){var e=r(9781),o=r(7293),a=r(317);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(a("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,n,r){var e=r(7293),o=r(4326),a="".split;t.exports=e((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?a.call(t,""):Object(t)}:Object},2788:function(t,n,r){var e=r(5465),o=Function.toString;"function"!=typeof e.inspectSource&&(e.inspectSource=function(t){return o.call(t)}),t.exports=e.inspectSource},9909:function(t,n,r){var e,o,a,i=r(8536),u=r(7854),c=r(111),f=r(8880),l=r(6656),s=r(5465),p=r(6200),d=r(3501),v="Object already initialized",y=u.WeakMap;if(i){var m=s.state||(s.state=new y),h=m.get,g=m.has,b=m.set;e=function(t,n){if(g.call(m,t))throw new TypeError(v);return n.facade=t,b.call(m,t,n),n},o=function(t){return h.call(m,t)||{}},a=function(t){return g.call(m,t)}}else{var w=p("state");d[w]=!0,e=function(t,n){if(l(t,w))throw new TypeError(v);return n.facade=t,f(t,w,n),n},o=function(t){return l(t,w)?t[w]:{}},a=function(t){return l(t,w)}}t.exports={set:e,get:o,has:a,enforce:function(t){return a(t)?o(t):e(t,{})},getterFor:function(t){return function(n){var r;if(!c(n)||(r=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},7659:function(t,n,r){var e=r(5112),o=r(7497),a=e("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||i[a]===t)}},4705:function(t,n,r){var e=r(7293),o=/#|\.prototype\./,a=function(t,n){var r=u[i(t)];return r==f||r!=c&&("function"==typeof n?e(n):!!n)},i=a.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=a.data={},c=a.NATIVE="N",f=a.POLYFILL="P";t.exports=a},111:function(t){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},1913:function(t){t.exports=!1},408:function(t,n,r){var e=r(9670),o=r(7659),a=r(7466),i=r(9974),u=r(1246),c=r(9212),f=function(t,n){this.stopped=t,this.result=n};t.exports=function(t,n,r){var l,s,p,d,v,y,m,h=r&&r.that,g=!(!r||!r.AS_ENTRIES),b=!(!r||!r.IS_ITERATOR),w=!(!r||!r.INTERRUPTED),x=i(n,h,1+g+w),S=function(t){return l&&c(l),new f(!0,t)},E=function(t){return g?(e(t),w?x(t[0],t[1],S):x(t[0],t[1])):w?x(t,S):x(t)};if(b)l=t;else{if("function"!=typeof(s=u(t)))throw TypeError("Target is not iterable");if(o(s)){for(p=0,d=a(t.length);d>p;p++)if((v=E(t[p]))&&v instanceof f)return v;return new f(!1)}l=s.call(t)}for(y=l.next;!(m=y.call(l)).done;){try{v=E(m.value)}catch(j){throw c(l),j}if("object"==typeof v&&v&&v instanceof f)return v}return new f(!1)}},9212:function(t,n,r){var e=r(9670);t.exports=function(t){var n=t.return;if(void 0!==n)return e(n.call(t)).value}},7497:function(t){t.exports={}},133:function(t,n,r){var e=r(5268),o=r(7392),a=r(7293);t.exports=!!Object.getOwnPropertySymbols&&!a((function(){return!Symbol.sham&&(e?38===o:o>37&&o<41)}))},8536:function(t,n,r){var e=r(7854),o=r(2788),a=e.WeakMap;t.exports="function"==typeof a&&/native code/.test(o(a))},3070:function(t,n,r){var e=r(9781),o=r(4664),a=r(9670),i=r(7593),u=Object.defineProperty;n.f=e?u:function(t,n,r){if(a(t),n=i(n,!0),a(r),o)try{return u(t,n,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},1236:function(t,n,r){var e=r(9781),o=r(5296),a=r(9114),i=r(5656),u=r(7593),c=r(6656),f=r(4664),l=Object.getOwnPropertyDescriptor;n.f=e?l:function(t,n){if(t=i(t),n=u(n,!0),f)try{return l(t,n)}catch(r){}if(c(t,n))return a(!o.f.call(t,n),t[n])}},8006:function(t,n,r){var e=r(6324),o=r(748).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},5181:function(t,n){n.f=Object.getOwnPropertySymbols},6324:function(t,n,r){var e=r(6656),o=r(5656),a=r(1318).indexOf,i=r(3501);t.exports=function(t,n){var r,u=o(t),c=0,f=[];for(r in u)!e(i,r)&&e(u,r)&&f.push(r);for(;n.length>c;)e(u,r=n[c++])&&(~a(f,r)||f.push(r));return f}},5296:function(t,n){"use strict";var r={}.propertyIsEnumerable,e=Object.getOwnPropertyDescriptor,o=e&&!r.call({1:2},1);n.f=o?function(t){var n=e(this,t);return!!n&&n.enumerable}:r},3887:function(t,n,r){var e=r(5005),o=r(8006),a=r(5181),i=r(9670);t.exports=e("Reflect","ownKeys")||function(t){var n=o.f(i(t)),r=a.f;return r?n.concat(r(t)):n}},857:function(t,n,r){var e=r(7854);t.exports=e},1320:function(t,n,r){var e=r(7854),o=r(8880),a=r(6656),i=r(3505),u=r(2788),c=r(9909),f=c.get,l=c.enforce,s=String(String).split("String");(t.exports=function(t,n,r,u){var c,f=!!u&&!!u.unsafe,p=!!u&&!!u.enumerable,d=!!u&&!!u.noTargetGet;"function"==typeof r&&("string"!=typeof n||a(r,"name")||o(r,"name",n),(c=l(r)).source||(c.source=s.join("string"==typeof n?n:""))),t!==e?(f?!d&&t[n]&&(p=!0):delete t[n],p?t[n]=r:o(t,n,r)):p?t[n]=r:i(n,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||u(this)}))},4488:function(t){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},3505:function(t,n,r){var e=r(7854),o=r(8880);t.exports=function(t,n){try{o(e,t,n)}catch(r){e[t]=n}return n}},6200:function(t,n,r){var e=r(2309),o=r(9711),a=e("keys");t.exports=function(t){return a[t]||(a[t]=o(t))}},5465:function(t,n,r){var e=r(7854),o=r(3505),a="__core-js_shared__",i=e[a]||o(a,{});t.exports=i},2309:function(t,n,r){var e=r(1913),o=r(5465);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.10.2",mode:e?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},1400:function(t,n,r){var e=r(9958),o=Math.max,a=Math.min;t.exports=function(t,n){var r=e(t);return r<0?o(r+n,0):a(r,n)}},5656:function(t,n,r){var e=r(8361),o=r(4488);t.exports=function(t){return e(o(t))}},9958:function(t){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},7466:function(t,n,r){var e=r(9958),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},7593:function(t,n,r){var e=r(111);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},1694:function(t,n,r){var e={};e[r(5112)("toStringTag")]="z",t.exports="[object z]"===String(e)},9711:function(t){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},3307:function(t,n,r){var e=r(133);t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:function(t,n,r){var e=r(7854),o=r(2309),a=r(6656),i=r(9711),u=r(133),c=r(3307),f=o("wks"),l=e.Symbol,s=c?l:l&&l.withoutSetter||i;t.exports=function(t){return a(f,t)&&(u||"string"==typeof f[t])||(u&&a(l,t)?f[t]=l[t]:f[t]=s("Symbol."+t)),f[t]}},8559:function(t,n,r){var e=r(2109),o=r(408),a=r(6135);e({target:"Object",stat:!0},{fromEntries:function(t){var n={};return o(t,(function(t,r){a(n,t,r)}),{AS_ENTRIES:!0}),n}})},3458:function(t,n,r){"use strict";r.r(n),r.d(n,{default:function(){return ht}});var e=r(7294),o=r.t(e,2),a=r(7329),i=(r(8559),r(5900)),u=r.n(i);r(2961);function c(t,n){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,n){if(!t)return;if("string"==typeof t)return f(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(t,n)}(t))||n&&t&&"number"==typeof t.length){r&&(t=r);var e=0,o=function(){};return{s:o,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,u=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){u=!0,a=t},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw a}}}}function f(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}"undefined"!=typeof window&&e.useLayoutEffect,new Map;new Set(["id"]),new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]);var l=new Map,s=new Set;function p(){if("undefined"!=typeof window){var t=function t(n){var r=l.get(n.target);if(r&&(r.delete(n.propertyName),0===r.size&&(n.target.removeEventListener("transitioncancel",t),l.delete(n.target)),0===l.size)){var e,o=c(s);try{for(o.s();!(e=o.n()).done;){(0,e.value)()}}catch(a){o.e(a)}finally{o.f()}s.clear()}};document.body.addEventListener("transitionrun",(function(n){var r=l.get(n.target);r||(r=new Set,l.set(n.target,r),n.target.addEventListener("transitioncancel",t)),r.add(n.propertyName)})),document.body.addEventListener("transitionend",t)}}"undefined"!=typeof document&&("loading"!==document.readyState?p():document.addEventListener("DOMContentLoaded",p));"undefined"!=typeof window&&window.visualViewport;new Map;function d(t){return"undefined"!=typeof window&&null!=window.navigator&&t.test(window.navigator.platform)}function v(){return d(/^Mac/)}function y(t,n){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,n){if(!t)return;if("string"==typeof t)return m(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(t,n)}(t))||n&&t&&"number"==typeof t.length){r&&(t=r);var e=0,o=function(){};return{s:o,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,u=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){u=!0,a=t},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw a}}}}function m(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}function h(t){return!(0!==t.mozInputSource||!t.isTrusted)||0===t.detail&&!t.pointerType}var g=e.createContext(null);g.displayName="PressResponderContext";var b=new Set,w=!1,x=!1;function S(t,n){var r,e=y(b);try{for(e.s();!(r=e.n()).done;){(0,r.value)(t,n)}}catch(o){e.e(o)}finally{e.f()}}function E(t){x=!0,function(t){return!(t.metaKey||!v()&&t.altKey||t.ctrlKey)}(t)&&("keyboard",S("keyboard",t))}function j(t){"pointer","mousedown"!==t.type&&"pointerdown"!==t.type||(x=!0,S("pointer",t))}function O(t){h(t)&&(x=!0,"virtual")}function A(t){t.target!==window&&t.target!==document&&(x||("virtual",S("virtual",t)),x=!1)}function _(){x=!1}function N(){if("undefined"!=typeof window&&!w){var t=HTMLElement.prototype.focus;HTMLElement.prototype.focus=function(){x=!0,t.apply(this,arguments)},document.addEventListener("keydown",E,!0),document.addEventListener("keyup",E,!0),document.addEventListener("click",O,!0),window.addEventListener("focus",A,!0),window.addEventListener("blur",_,!1),"undefined"!=typeof PointerEvent?(document.addEventListener("pointerdown",j,!0),document.addEventListener("pointermove",j,!0),document.addEventListener("pointerup",j,!0)):(document.addEventListener("mousedown",j,!0),document.addEventListener("mousemove",j,!0),document.addEventListener("mouseup",j,!0)),w=!0}}"undefined"!=typeof document&&("loading"!==document.readyState?N():document.addEventListener("DOMContentLoaded",N));new Set;var T=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]"];T.join(",");T.push('[tabindex]:not([tabindex="-1"]):not([disabled])');T.join(':not([tabindex="-1"]),');var L=r(3935);function P(){return(P=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])}return t}).apply(this,arguments)}function k(t,n){if(null==t)return{};var r,e,o={},a=Object.keys(t);for(e=0;e<a.length;e++)r=a[e],n.indexOf(r)>=0||(o[r]=t[r]);return o}function M(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}function C(t,n){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,n){if(t){if("string"==typeof t)return M(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?M(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){r&&(t=r);var e=0;return function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=t[Symbol.iterator]()).next.bind(r)}var I=Symbol("NONE");function z(t){return null!=t}function R(t){for(var n={},r=arguments.length,e=new Array(r>1?r-1:0),o=1;o<r;o++)e[o-1]=arguments[o];for(var a=0,i=e;a<i.length;a++){var u=i[a];u in t&&(n[u]=t[u])}return n}function U(t){for(var n={},r=arguments.length,e=new Array(r>1?r-1:0),o=1;o<r;o++)e[o-1]=arguments[o];for(var a=0,i=Object.keys(t);a<i.length;a++){var u=i[a];e.includes(u)||(n[u]=t[u])}return n}function F(t){for(var n=P({},t),r=arguments.length,e=new Array(r>1?r-1:0),o=1;o<r;o++)e[o-1]=arguments[o];for(var a=0,i=e;a<i.length;a++)for(var u=i[a],c=0,f=Object.keys(u);c<f.length;c++){var l=f[c];n[l]=D(l,n[l],u[l])}return n}function D(t,n,r){return n===I||r===I?null:null==n?r:null==r?n:typeof n!=typeof r?r:"className"===t?u()(n,r):"style"===t?P({},n,r):t.startsWith("on")&&"function"==typeof n?function(){var t;return"function"==typeof n&&(t=n.apply(void 0,arguments)),"function"==typeof r&&(t=r.apply(void 0,arguments)),t}:r}function G(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];if(0!==n.length)return function(t){for(var r,e=t,o=C(n);!(r=o()).done;){e=(0,r.value)(e)}return e}}var H="undefined"!=typeof window;H?e.useLayoutEffect:e.useEffect;function K(t,n,r){return Array.isArray(r)?e.createElement.apply(e,[t,n].concat(r)):r||"children"in n?e.createElement(t,n,r):e.createElement(t,n)}function V(t,n,r,e){var o=n.children,a=k(n,["children"]),i=B(o,null!=r&&r);return K(t,P({ref:e},a),i)}function W(t,n){var r=t.as,e=t.hasGap;return V(null!=r?r:"div",k(t,["as","hasGap"]),e,n)}var Z=(0,e.forwardRef)(W),$=function(t){return(0,e.forwardRef)((function(n,r){var e=n.hasGap,o=k(n,["hasGap"]);return V(t,o,e,r)}))},q=Object.assign(Z,{div:$("div"),a:$("a"),button:$("button"),h1:$("h1"),h2:$("h2"),h3:$("h3"),h4:$("h4"),h5:$("h5"),h6:$("h6"),label:$("label"),form:$("form"),section:$("section"),head:$("head"),main:$("main"),nav:$("nav")});function B(t,n){var r=n?"__wab_flex-container":"__wab_passthrough";return t?Array.isArray(t)?e.createElement.apply(o,["div",{className:r}].concat(t)):(0,e.createElement)("div",{className:r},t):null}function X(t,n,r,o){var a=rt(t),i=nt(r,a.props);if("render"===a.type)return a.render(i);var u=n;"as"===a.type&&a.as&&(n===q?i.as=a.as:u=a.as);var c=i.children;a.wrapChildren&&(c=a.wrapChildren(function(t){return Array.isArray(t)?e.createElement.apply(e,[e.Fragment,{}].concat(t)):t}(c))),o&&(c=B(c,!0));var f=K(u,i,c);return a.wrap&&(f=a.wrap(f)),f}var Y=new Map;function J(t,n){null==n&&(n={});var r=n["data-plasmic-name"],e=n["data-plasmic-root"],o=n["data-plasmic-for-node"];delete n["data-plasmic-name"],delete n["data-plasmic-root"],delete n["data-plasmic-for-node"];for(var a=arguments.length,i=new Array(a>2?a-2:0),u=2;u<a;u++)i[u-2]=arguments[u];var c=Q.apply(void 0,[t,n].concat(i));if(r&&Y.set(r,c),e){var f,l=o?null!=(f=Y.get(o))?f:null:c;return Y.clear(),l}return c}function Q(t,n){var r,e=n["data-plasmic-override"],o=n["data-plasmic-wrap-flex-child"],a=null!=(r=n["data-plasmic-trigger-props"])?r:[];delete n["data-plasmic-override"],delete n["data-plasmic-wrap-flex-child"],delete n["data-plasmic-trigger-props"];for(var i=arguments.length,u=new Array(i>2?i-2:0),c=2;c<i;c++)u[c-2]=arguments[c];return X(e,t,F.apply(void 0,[n,0===u.length?{}:{children:u}].concat(a)),o)}var tt=Symbol("UNSET");function nt(t,n){if(!n)return t;for(var r=P({},t),e=0,o=Object.keys(n);e<o.length;e++){var a=o[e],i=t[a],u=n[a];u===tt?delete r[a]:(null!=u||"className"===a||"style"===a||a.startsWith("on")&&"function"==typeof i||(u=I),r[a]=D(a,i,u))}return r}function rt(t){if(!t)return{type:"default",props:{}};if(function(t){return"string"==typeof t||"number"==typeof t||e.isValidElement(t)}(t))return{type:"default",props:{children:t}};if("object"==typeof t)return"as"in t?P({},t,{props:t.props||{},type:"as"}):"render"in t?P({},t,{type:"render"}):"props"in t?P({},t,{props:t.props||{},type:"default"}):(n=Object.keys(t),r=["wrap","wrapChildren"],n.every((function(t){return r.includes(t)}))?P({},t,{props:{},type:"default"}):{type:"default",props:t});if("function"==typeof t)return{type:"render",render:t};var n,r;throw new Error("Unexpected override: "+t)}function et(t,n){for(var r={},e=0,o=Array.from(new Set([].concat(Object.keys(t),Object.keys(n))));e<o.length;e++){var a=o[e];r[a]=ot(t[a],n[a])}return r}function ot(t,n){var r,e;if(!t)return n;if(!n)return t;var o=rt(t),a=rt(n),i=G.apply(void 0,[o.wrap,a.wrap].filter(z)),u=G.apply(void 0,[o.wrapChildren,a.wrapChildren].filter(z)),c=nt(null!=(r=o.props)?r:{},a.props);if("render"===a.type)return{render:a.render,props:c,wrap:i,wrapChildren:u};if("render"===o.type)return{render:o.render,props:c,wrap:i,wrapChildren:u};var f=null!=(e="as"===a.type?a.as:void 0)?e:"as"===o.type?o.as:void 0;return P({props:c,wrap:i,wrapChildren:u},f?{as:f}:{})}function at(t,n){var r,e,o,a,i,u,c,f,l=n.name,s=n.descendantNames,p=n.internalVariantPropNames,d=n.internalArgPropNames,v=["variants","args","overrides"],y=(a=U.apply(void 0,[R.apply(void 0,[t].concat(p))].concat(v)),i=null!=(r=t.variants)?r:{},P({},a,i)),m=(u=U.apply(void 0,[R.apply(void 0,[t].concat(d))].concat(v)),c=null!=(e=t.args)?e:{},P({},u,c)),h=et(U.apply(void 0,[R.apply(void 0,[t].concat(s))].concat(d,p,v)),null!=(o=t.overrides)?o:{}),g=U.apply(void 0,[t,"variants","args","overrides"].concat(s,p,d));Object.keys(g).length>0&&(h=et(h,((f={})[l]={props:g},f)));return{variants:y,args:m,overrides:h}}var it=[],ut={};function ct(){return H?Object.entries(ut).filter((function(t){var n=t[1];return window.matchMedia(n).matches})).map((function(t){return t[0]})):[]}var ft=void 0;H&&window.addEventListener("resize",(function(){var t=ct();ft&&t.join("")===ft.join("")||(ft=t,L.unstable_batchedUpdates((function(){return it.forEach((function(t){return t()}))})))}));var lt=u();const st="plasmic__default_style-module--all--NwouX";var pt=new Array,dt=new Array;var vt={root:["root","box"],box:["box"]};function yt(t){var n=function(n){var r=at(n,{name:t,descendantNames:(0,a.Z)(vt[t]),internalArgPropNames:dt,internalVariantPropNames:pt});return function(t){t.variants,t.args;var n=t.overrides,r=t.forNode;return J(e.Fragment,null,J("style",null,"\n        body {\n          margin: 0;\n        }\n      "),J("div",{className:"plasmic__default_style-module--plasmic_page_wrapper--3NE1W"},J("div",{"data-plasmic-name":"root","data-plasmic-override":n.root,"data-plasmic-root":!0,"data-plasmic-for-node":r,className:lt(st,"plasmic_blank_project-module--root_reset--2EiZb","PlasmicHomepage-module--root--1ZUKo")},J("div",{"data-plasmic-name":"box","data-plasmic-override":n.box,className:lt(st,"plasmic__default_style-module--__wab_text--2gtvC","PlasmicHomepage-module--box--BK9xx")},"Welcome to your first page."))))}({variants:r.variants,args:r.args,overrides:r.overrides,forNode:t})};return n.displayName="root"===t?"PlasmicHomepage":"PlasmicHomepage."+t,n}var mt=Object.assign(yt("root"),{box:yt("box"),internalVariantProps:pt,internalArgProps:dt});var ht=function(){return e.createElement(mt,null)}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-1243d1a5ea9cf7f45ef8.js.map