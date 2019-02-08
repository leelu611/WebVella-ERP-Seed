/*!
 * WvLazyload: Core, es5
 * Built with http://stenciljs.com
 */
function n(n,t){for(var e,r,i=null,o=!1,u=!1,f=arguments.length;f-- >2;)w.push(arguments[f]);for(;w.length>0;){var c=w.pop();if(c&&void 0!==c.pop)for(f=c.length;f--;)w.push(c[f]);else"boolean"==typeof c&&(c=null),(u="function"!=typeof n)&&(null==c?c="":"number"==typeof c?c=String(c):"string"!=typeof c&&(u=!1)),u&&o?i[i.length-1].vtext+=c:null===i?i=[u?{vtext:c}:c]:i.push(u?{vtext:c}:c),o=u}if(null!=t){if(t.className&&(t.class=t.className),"object"==typeof t.class){for(f in t.class)t.class[f]&&w.push(f);t.class=w.join(" "),w.length=0}null!=t.key&&(e=t.key),null!=t.name&&(r=t.name)}return"function"==typeof n?n(t,i||[],m):{vtag:n,vchildren:i,vtext:void 0,vattrs:t,vkey:e,vname:r,t:void 0,i:!1}}function t(n,t,e){void 0===e&&(e={});var r=Array.isArray(t)?t:[t],i=n.document,u=e.hydratedCssClass||"hydrated",f=e.exclude;f&&(r=r.filter(function(n){return-1===f.indexOf(n[0])}));var c=r.map(function(n){return n[0]});if(c.length>0){var s=i.createElement("style");s.innerHTML=c.join()+"{visibility:hidden}."+u+"{visibility:inherit}",s.setAttribute("data-styles",""),i.head.insertBefore(s,i.head.firstChild)}var l=e.namespace||"WvLazyload";return x||(x=!0,function v(n,t,e){(n["s-apps"]=n["s-apps"]||[]).push(t),e.componentOnReady||(e.componentOnReady=function t(){function e(t){if(r.nodeName.indexOf("-")>0){for(var e=n["s-apps"],i=0,o=0;o<e.length;o++)if(n[e[o]].componentOnReady){if(n[e[o]].componentOnReady(r,t))return;i++}if(i<e.length)return void(n["s-cr"]=n["s-cr"]||[]).push([r,t])}t(null)}var r=this;return n.Promise?new n.Promise(e):{then:e}})}(n,l,n.HTMLElement.prototype)),applyPolyfills(n).then(function(){function t(){r.forEach(function(t){var e;!function r(n){return/\{\s*\[native code\]\s*\}/.test(""+n)}(n.customElements.define)?(e=function(t){return n.HTMLElement.call(this,t)}).prototype=Object.create(n.HTMLElement.prototype,{constructor:{value:e,configurable:!0}}):e=new Function("w","return class extends w.HTMLElement{}")(n),_[l].o(function i(n){var t=b(n),e=t.u,r=a(n[0]);return t.u=function(n){var t=n.mode,i=n.scoped;return function o(n,t,e){return import(
/* webpackInclude: /\.entry\.js$/ */
/* webpackMode: "lazy" */
"./build/"+n+(t?".sc":"")+".entry.js").then(function(n){return n[e]})}("string"==typeof e?e:e[t],i,r)},t}(t),e)})}if(!_[l]){var f={},c=e.resourcesUrl||"./";o(l,f,n,i,c,u),_[l]=O(l,f,n,i,c,u,r)}if(window.customStyleShim)return _[l].s=window.customStyleShim,_[l].s.initShim().then(t);t()})}this&&this.l;var e=this&&this.v||function(n,t,e,r){return new(e||(e=Promise))(function(i,o){function u(n){try{c(r.next(n))}catch(n){o(n)}}function f(n){try{c(r.throw(n))}catch(n){o(n)}}function c(n){n.done?i(n.value):new e(function(t){t(n.value)}).then(u,f)}c((r=r.apply(n,t||[])).next())})},r=this&&this.p||function(n,t){function e(e){return function(u){return function c(e){if(r)throw new TypeError("Generator is already executing.");for(;f;)try{if(r=1,i&&(o=2&e[0]?i.return:e[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,e[1])).done)return o;switch(i=0,o&&(e=[2&e[0],o.value]),e[0]){case 0:case 1:o=e;break;case 4:return f.label++,{value:e[1],done:!1};case 5:f.label++,i=e[1],e=[0];continue;case 7:e=f.m.pop(),f.M.pop();continue;default:if(!(o=(o=f.M).length>0&&o[o.length-1])&&(6===e[0]||2===e[0])){f=0;continue}if(3===e[0]&&(!o||e[1]>o[0]&&e[1]<o[3])){f.label=e[1];break}if(6===e[0]&&f.label<o[1]){f.label=o[1],o=e;break}if(o&&f.label<o[2]){f.label=o[2],f.m.push(e);break}o[2]&&f.m.pop(),f.M.pop();continue}e=t.call(n,f)}catch(n){e=[6,n],i=0}finally{r=o=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,u])}}var r,i,o,u,f={label:0,g:function(){if(1&o[0])throw o[1];return o[1]},M:[],m:[]};return u={next:e(0),throw:e(1),return:e(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u},i=this,o=function(){};function applyPolyfills(n){n.k=function(){function t(){var n=setTimeout;return function(){return n(e,1)}}function e(){for(var n=0;n<m;n+=2)(0,S[n])(S[n+1]),S[n]=void 0,S[n+1]=void 0;m=0}function r(n,t){var e=this,r=new this.constructor(o);void 0===r[_]&&h(r);var i=e.j;if(i){var u=arguments[i-1];g(function(){return d(i,r,u,e.A)})}else v(e,r,n,t);return r}function i(n){if(n&&"object"==typeof n&&n.constructor===this)return n;var t=new this(o);return c(t,n),t}function o(){}function u(n){try{return n.then}catch(n){return P.error=n,P}}function f(n,t,e){t.constructor===n.constructor&&e===r&&t.constructor.resolve===i?function(n,t){t.j===T?s(n,t.A):t.j===W?l(n,t.A):v(t,void 0,function(t){return c(n,t)},function(t){return l(n,t)})}(n,t):e===P?(l(n,P.error),P.error=null):void 0===e?s(n,t):"function"==typeof e?function(n,t,e){g(function(n){var r=!1,i=function(n,t,e,r){try{n.call(t,e,r)}catch(n){return n}}(e,t,function(e){r||(r=!0,t!==e?c(n,e):s(n,e))},function(t){r||(r=!0,l(n,t))},n.C);!r&&i&&(r=!0,l(n,i))},n)}(n,t,e):s(n,t)}function c(n,t){if(n===t)l(n,new TypeError("cannot resolve promise w/ itself"));else{var e=typeof t;null===t||"object"!==e&&"function"!==e?s(n,t):f(n,t,u(t))}}function a(n){n.S&&n.S(n.A),p(n)}function s(n,t){n.j===x&&(n.A=t,n.j=T,0!==n.O.length&&g(p,n))}function l(n,t){n.j===x&&(n.j=W,n.A=t,g(a,n))}function v(n,t,e,r){var i=n.O,o=i.length;n.S=null,i[o]=t,i[o+T]=e,i[o+W]=r,0===o&&n.j&&g(p,n)}function p(n){var t=n.O,e=n.j;if(0!==t.length){for(var r,i,o=n.A,u=0;u<t.length;u+=3)r=t[u],i=t[u+e],r?d(e,r,i,o):i(o);n.O.length=0}}function d(n,t,e,r){var i="function"==typeof e,o=void 0,u=void 0,f=void 0,a=void 0;if(i){try{o=e(r)}catch(n){P.error=n,o=P}if(o===P?(a=!0,u=o.error,o.error=null):f=!0,t===o)return void l(t,new TypeError("Cannot return same promise"))}else o=r,f=!0;t.j===x&&(i&&f?c(t,o):a?l(t,u):n===T?s(t,o):n===W&&l(t,o))}function h(n){n[_]=N++,n.j=void 0,n.A=void 0,n.O=[]}var y,w=Array.isArray?Array.isArray:function(n){return"[object Array]"===Object.prototype.toString.call(n)},m=0,b=void 0,M=void 0,g=function(n,t){S[m]=n,S[m+1]=t,2===(m+=2)&&(M?M(e):O())},k=(y=void 0!==n?n:void 0)||{},j=k.MutationObserver||k.WebKitMutationObserver;k="undefined"==typeof self;var $,A,E,C="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,S=Array(1e3),O=void 0;O=j?($=0,A=new j(e),E=document.createTextNode(""),A.observe(E,{characterData:!0}),function(){E.data=$=++$%2}):C?function(){var n=new MessageChannel;return n.port1.onmessage=e,function(){return n.port2.postMessage(0)}}():void 0===y&&"function"==typeof require?function(){try{var n=Function("return this")()._("vertx");return void 0!==(b=n.T||n.W)?function(){b(e)}:t()}catch(n){return t()}}():t();var _=Math.random().toString(36).substring(2),x=void 0,T=1,W=2,P={error:null},N=0,R=function(){function n(n,t){this.P=n,this.N=new n(o),this.N[_]||h(this.N),w(t)?(this.R=this.length=t.length,this.A=Array(this.length),0===this.length?s(this.N,this.A):(this.length=this.length||0,this.L(t),0===this.R&&s(this.N,this.A))):l(this.N,Error("Array Methods must be provided an Array"))}return n.prototype.L=function(n){for(var t=0;this.j===x&&t<n.length;t++)this.D(n[t],t)},n.prototype.D=function(n,t){var e=this.P,c=e.resolve;c===i?(c=u(n))===r&&n.j!==x?this.F(n.j,t,n.A):"function"!=typeof c?(this.R--,this.A[t]=n):e===L?(f(e=new e(o),n,c),this.H(e,t)):this.H(new e(function(t){return t(n)}),t):this.H(c(n),t)},n.prototype.F=function(n,t,e){var r=this.N;r.j===x&&(this.R--,n===W?l(r,e):this.A[t]=e),0===this.R&&s(r,this.A)},n.prototype.H=function(n,t){var e=this;v(n,void 0,function(n){return e.F(T,t,n)},function(n){return e.F(W,t,n)})},n}(),L=function(){function n(t){if(this[_]=N++,this.A=this.j=void 0,this.O=[],o!==t){if("function"!=typeof t)throw new TypeError("Must pass a resolver fn as 1st arg");if(!(this instanceof n))throw new TypeError("Failed to construct 'Promise': Use the 'new' operator.");!function(n,t){try{t(function(t){c(n,t)},function(t){l(n,t)})}catch(t){l(n,t)}}(this,t)}}return n.prototype.catch=function(n){return this.then(null,n)},n.prototype.finally=function(n){var t=this.constructor;return this.then(function(e){return t.resolve(n()).then(function(){return e})},function(e){return t.resolve(n()).then(function(){throw e})})},n}();return L.prototype.then=r,L.all=function(n){return new R(this,n).N},L.race=function(n){var t=this;return w(n)?new t(function(e,r){for(var i=n.length,o=0;o<i;o++)t.resolve(n[o]).then(e,r)}):new t(function(n,t){return t(new TypeError("Must pass array to race"))})},L.resolve=i,L.reject=function(n){var t=new this(o);return l(t,n),t},L.q=function(n){M=n},L.U=function(n){g=n},L.B=g,L.I=function(){var n=void 0;if("undefined"!=typeof global)n=global;else if("undefined"!=typeof self)n=self;else try{n=Function("return this")()}catch(n){throw Error("polyfill failed")}var t=n.Promise;if(t){var e=null;try{e=Object.prototype.toString.call(t.resolve())}catch(n){}if("[object Promise]"===e&&!t.cast)return}n.Promise=L},L.Promise=L,L.I(),L}();var t=[];return n.customElements&&(!n.Element||n.Element.prototype.closest&&n.Element.prototype.matches&&n.Element.prototype.remove)||t.push(import("./polyfills/dom.js")),"function"==typeof Object.assign&&Object.entries||t.push(import("./polyfills/object.js")),Array.prototype.find&&Array.prototype.includes||t.push(import("./polyfills/array.js")),String.prototype.startsWith&&String.prototype.endsWith||t.push(import("./polyfills/string.js")),n.fetch||t.push(import("./polyfills/fetch.js")),"undefined"!=typeof WeakMap&&n.CSS&&n.CSS.supports&&n.CSS.supports("color","var(--c)")||t.push(import("./polyfills/css-shim.js")),function e(){try{var n=new URL("b","http://a");return n.pathname="c%20d","http://a/c%20d"===n.href&&n.searchParams}catch(n){return!1}}||t.push(import("./polyfills/url.js")),Promise.all(t).then(function(t){t.forEach(function(t){try{t.applyPolyfill(n,n.document)}catch(n){console.error(n)}})})}var u={},f=function(n){return null!=n},c=function(n){return n.toLowerCase()},a=function(n){return c(n).split("-").map(function(n){return n.charAt(0).toUpperCase()+n.slice(1)}).join("")},s=function(n,t,e,r,i,o){if("class"!==e||o)if("style"===e){for(var u in r)i&&null!=i[u]||(/-/.test(u)?t.style.removeProperty(u):t.style[u]="");for(var u in i)r&&i[u]===r[u]||(/-/.test(u)?t.style.setProperty(u,i[u]):t.style[u]=i[u])}else if("o"!==e[0]||"n"!==e[1]||!/[A-Z]/.test(e[2])||e in t)if("list"!==e&&"type"!==e&&!o&&(e in t||-1!==["object","function"].indexOf(typeof i)&&null!==i)){var f=n.G(t);f&&f.Y&&f.Y[e]?v(t,e,i):"ref"!==e&&(v(t,e,null==i?"":i),null!=i&&!1!==i||n.J.Z(t,e))}else null!=i&&"key"!==e?function(n,t,e,r,i){void 0===r&&(r="boolean"==typeof e),i=t!==(t=t.replace(/^xlink\:?/,"")),null==e||r&&(!e||"false"===e)?i?n.removeAttributeNS("http://www.w3.org/1999/xlink",c(t)):n.removeAttribute(t):"function"!=typeof e&&(e=r?"":e.toString(),i?n.setAttributeNS("http://www.w3.org/1999/xlink",c(t),e):n.setAttribute(t,e))}(t,e,i):(o||n.J.K(t,e)&&(null==i||!1===i))&&n.J.Z(t,e);else e=c(e)in t?c(e.substring(2)):c(e[2])+e.substring(3),i?i!==r&&n.J.V(t,e,i,0):n.J.X(t,e,0);else if(r!==i){var a=l(r),s=l(i),p=a.filter(function(n){return!s.includes(n)}),d=l(t.className).filter(function(n){return!p.includes(n)}),h=s.filter(function(n){return!a.includes(n)&&!d.includes(n)});d.push.apply(d,h),t.className=d.join(" ")}},l=function(n){return null==n||""===n?[]:n.trim().split(/\s+/)},v=function(n,t,e){try{n[t]=e}catch(n){}},p=function(n,t,e,r,i){var o=11===e.t.nodeType&&e.t.host?e.t.host:e.t,f=t&&t.vattrs||u,c=e.vattrs||u;for(i in f)c&&null!=c[i]||null==f[i]||s(n,o,i,f[i],void 0,r,e.i);for(i in c)i in f&&c[i]===("value"===i||"checked"===i?o[i]:f[i])||s(n,o,i,f[i],c[i],r,e.i)},d=!1,h=function(n,t){n&&(n.vattrs&&n.vattrs.ref&&n.vattrs.ref(t?null:n.t),n.vchildren&&n.vchildren.forEach(function(n){h(n,t)}))},y=function(n,t){var e=0,r=!1,i=function(){return t.performance.now()},o=!1!==n.asyncQueue,u=Promise.resolve(),f=[],c=[],a=[],s=[],l=function(t){return function(e){t.push(e),r||(r=!0,n.raf(d))}},v=function(n){for(var t=0;t<n.length;t++)try{n[t](i())}catch(n){console.error(n)}n.length=0},p=function(n,t){for(var e,r=0;r<n.length&&(e=i())<t;)try{n[r++](e)}catch(n){console.error(n)}r===n.length?n.length=0:0!==r&&n.splice(0,r)},d=function(){e++,v(c);var t=o?i()+7*Math.ceil(e*(1/22)):Infinity;p(a,t),p(s,t),a.length>0&&(s.push.apply(s,a),a.length=0),(r=c.length+a.length+s.length>0)?n.raf(d):e=0};return n.raf||(n.raf=t.requestAnimationFrame.bind(t)),{tick:function(n){f.push(n),1===f.length&&u.then(function(){return v(f)})},read:l(c),write:l(a)}},w=[],m={forEach:function(n,t){return n.forEach(t)},map:function(n,t){return n.map(t)}},b=function(n,t,e){var r=n[0],i=n[1],o=n[3],u=n[4],f=n[5],c={color:{nn:"color"}};if(o)for(t=0;t<o.length;t++)c[(e=o[t])[0]]={tn:e[1],en:!!e[2],nn:"string"==typeof e[3]?e[3]:e[3]?e[0]:0,rn:e[4]};return{in:r,u:i,Y:Object.assign({},c),on:u,un:f?f.map(M):void 0}},M=function(n){return{fn:n[0],cn:n[1],an:!!n[2],sn:!!n[3],ln:!!n[4]}},g=function(n,t){return f(t)&&"object"!=typeof t&&"function"!=typeof t?n===Boolean||4===n?"false"!==t&&(""===t||!!t):n===Number||8===n?parseFloat(t):n===String||2===n?t.toString():t:t},k=function(n,t,e){n.vn.add(t),n.pn.has(t)||(n.pn.set(t,!0),n.dn?n.queue.write(function(){return j(n,t,e)}):n.queue.tick(function(){return j(n,t,e)}))},j=function(t,o,u,f,c,a){return e(i,void 0,void 0,function(){var e,i;return r(this,function(r){switch(r.label){case 0:if(t.pn.delete(o),t.hn.has(o))return[3,12];if(c=t.yn.get(o))return[3,6];if((a=t.wn.get(o))&&!a["s-rn"])return(a["s-rc"]=a["s-rc"]||[]).push(function(){j(t,o,u)}),[2];if(!(c=E(t,o,t.mn.get(o),u)))return[3,5];r.label=1;case 1:return r.M.push([1,4,,5]),c.componentWillLoad?[4,c.componentWillLoad()]:[3,3];case 2:r.g(),r.label=3;case 3:return[3,5];case 4:return e=r.g(),t.bn(e,3,o),[3,5];case 5:case 6:return[3,11];case 7:return r.M.push([7,10,,11]),c.componentWillUpdate?[4,c.componentWillUpdate()]:[3,9];case 8:r.g(),r.label=9;case 9:return[3,11];case 10:return i=r.g(),t.bn(i,5,o),[3,11];case 11:(function(t,e,r,i){try{var o=e.Mn.host,u=e.Mn.encapsulation,f=r;if(i.render||i.hostData||o){t.gn=!0;var c=i.render&&i.render();t.gn=!1;var a=n(null,void 0,c),s=t.kn.get(r)||{};s.t=f,t.kn.set(r,t.render(r,s,a,!1,u))}t.s&&t.s.updateHost(r),r["s-rn"]=!0,r["s-rc"]&&(r["s-rc"].forEach(function(n){return n()}),r["s-rc"]=null)}catch(n){t.gn=!1,t.bn(n,8,r,!0)}})(t,t.G(o),o,c),o["s-init"](),r.label=12;case 12:return[2]}})})},$=function(n,t,e,r,i,o,u){(u=n.jn.get(t))||n.jn.set(t,u={}),r!==u[e]&&(u[e]=r,n.yn.get(t)&&!n.gn&&t["s-rn"]&&k(n,t,i))},A=function(n,t,e,r){Object.defineProperty(n,t,{configurable:!0,get:e,set:r})},E=function(n,t,e,r,i,o){try{i=new(o=n.G(t).Mn),function(n,t,e,r,i,o){n.$n.set(r,e),n.jn.has(e)||n.jn.set(e,{}),Object.entries(Object.assign({color:{type:String}},t.properties,{mode:{type:String}})).forEach(function(t){var u=t[0],c=t[1];(function(n,t,e,r,i,o,u,c,a){if(t.type||t.state){var s=n.jn.get(e);t.state||(!t.attr||void 0!==s[i]&&""!==s[i]||(c=o&&o.An)&&f(a=c[t.attr])&&(s[i]=g(t.type,a)),e.hasOwnProperty(i)&&(void 0===s[i]&&(s[i]=g(t.type,e[i])),"mode"!==i&&delete e[i])),r.hasOwnProperty(i)&&void 0===s[i]&&(s[i]=r[i]),A(r,i,function l(t){return(t=n.jn.get(n.$n.get(this)))&&t[i]},function v(e,r){(r=n.$n.get(this))&&(t.state||t.mutable)&&$(n,r,i,e,u)})}})(n,c,e,r,u,i,o)})}(n,o,t,i,e,r)}catch(e){i={},n.bn(e,7,t,!0)}return n.yn.set(t,i),i},C=function(n,t){for(var e=0;e<t.childNodes.length;e++){var r=t.childNodes[e];if(1===r.nodeType){if(n.G(r)&&!n.En.has(r))return!1;if(!C(n,r))return!1}}return!0},S=function(n,t,e,r,i,o){if(n.vn.delete(t),(i=n.wn.get(t))&&((r=i["s-ld"])&&((e=r.indexOf(t))>-1&&r.splice(e,1),r.length||i["s-init"]&&i["s-init"]()),n.wn.delete(t)),n.Cn.length&&!n.vn.size)for(;o=n.Cn.shift();)o()},O=function(t,e,r,i,o,u){var a=r.performance,s={html:{}},l=r[t]=r[t]||{},v=function(n,t,e){var r=new WeakMap,i={Sn:e,On:!!e.documentElement.attachShadow,_n:!1,xn:function(n){return n.nodeType},Tn:function(n){return e.createElement(n)},Wn:function(n,t){return e.createElementNS(n,t)},Pn:function(n){return e.createTextNode(n)},Nn:function(n){return e.createComment(n)},Rn:function(n,t,e){return n.insertBefore(t,e)},Ln:function(n){return n.remove()},Dn:function(n,t){return n.appendChild(t)},Fn:function(n,t){if(n.classList)n.classList.add(t);else if("svg"===n.nodeName.toLowerCase()){var e=n.getAttribute("class")||"";e.split(" ").includes(t)||(e+=" "+t),n.setAttribute("class",e.trim())}},Hn:function(n){return n.childNodes},qn:function(n){return n.parentNode},Un:function(n){return n.nextSibling},Bn:function(n){return n.previousSibling},In:function(n){return c(n.nodeName)},Gn:function(n){return n.textContent},Qn:function(n,t){return n.textContent=t},Yn:function(n,t){return n.getAttribute(t)},Zn:function(n,t,e){return n.setAttribute(t,e)},Z:function(n,t){return n.removeAttribute(t)},K:function(n,t){return n.hasAttribute(t)},zn:function(t){return t.getAttribute("mode")||(n.Context||{}).mode},Jn:function(n,r){return"child"===r?n.firstElementChild:"parent"===r?i.Kn(n):"body"===r?e.body:"document"===r?e:"window"===r?t:n},V:function(t,e,o,u,f,c,a,s,l,v){var p=t,d=o,h=r.get(t);v=e+u,h&&h[v]&&h[v](),"object"==typeof a&&(p=a),p&&(s=i._n?{capture:!!f,passive:!!c}:!!f,n.ael(p,e,d,s),h||r.set(t,h={}),h[v]=function(){p&&n.rel(p,e,d,s),h[v]=null})},X:function(n,t,e,i){(i=r.get(n))&&(t?i[t+e]&&i[t+e]():Object.keys(i).forEach(function(n){i[n]&&i[n]()}))},Vn:function(n,e,r,i){return i=new t.CustomEvent(e,r),n&&n.dispatchEvent(i),i},Kn:function(n,t){return(t=i.qn(n))&&11===i.xn(t)?t.host:t},Xn:function(n,t,e,r){return n.setAttributeNS(t,e,r)}};return"function"!=typeof t.CustomEvent&&(t.CustomEvent=function(n,t,r){return t=t||{},(r=e.createEvent("CustomEvent")).initCustomEvent(n,t.bubbles,t.cancelable,t.detail),r},t.CustomEvent.prototype=t.Event.prototype),n.ael||(n.ael=function(n,t,e,r){return n.addEventListener(t,e,r)},n.rel=function(n,t,e,r){return n.removeEventListener(t,e,r)}),i}(l,r,i),w=v.Sn.documentElement,m=r["s-defined"]=r["s-defined"]||{},b={J:v,o:function(n,t){r.customElements.get(n.in)||(function(n,t,e,r,i){if(e.connectedCallback=function(){(function(n,t,e){n.hn.delete(e),n.En.has(e)||(n.nt=!0,n.vn.add(e),n.En.set(e,!0),function(n,t,e){for(e=t;e=n.J.Kn(e);)if(n.tt(e)){n.et.has(t)||(n.wn.set(t,e),(e["s-ld"]=e["s-ld"]||[]).push(t));break}}(n,e),n.queue.tick(function(){n.mn.set(e,function(n,t,e,r,i){return e.mode||(e.mode=n.zn(e)),e["s-cr"]||n.Yn(e,"ssrv")||n.On&&1===t.on||(e["s-cr"]=n.Pn(""),e["s-cr"]["s-cn"]=!0,n.Rn(e,e["s-cr"],n.Hn(e)[0])),n.On||1!==t.on||!window.HTMLElement||"shadowRoot"in window.HTMLElement.prototype||(e.shadowRoot=e),r={An:{}},t.Y&&Object.keys(t.Y).forEach(function(o){(i=t.Y[o].nn)&&(r.An[i]=n.Yn(e,i))}),r}(n.J,t,e)),n.rt(t,e)}))})(n,t,this)},e.disconnectedCallback=function(){(function(n,t){!n.it&&function(n,t){for(;t;){if(!n.qn(t))return 9!==n.xn(t);t=n.qn(t)}}(n.J,t)&&(n.hn.set(t,!0),S(n,t),h(n.kn.get(t),!0),n.J.X(t),n.ot.delete(t),n.s&&n.s.removeHost(t),[n.wn,n.ut,n.mn].forEach(function(n){return n.delete(t)}))})(n,this)},e["s-init"]=function(){(function(n,t,e,r,i,o){if(C(n,t)&&n.yn.get(t)&&!n.hn.has(t)&&(!t["s-ld"]||!t["s-ld"].length)){n.et.set(t,!0),n.ft.has(t)||(n.ft.set(t,!0),t["s-ld"]=void 0,n.J.Fn(t,e));try{h(n.kn.get(t)),(o=n.ut.get(t))&&(o.forEach(function(n){return n(t)}),n.ut.delete(t))}catch(e){n.bn(e,4,t)}S(n,t)}})(n,this,r)},e.forceUpdate=function(){k(n,this,i)},t.Y){var o=Object.entries(t.Y),u={};o.forEach(function(n){var t=n[0],e=n[1].nn;e&&(u[e]=t)}),u=Object.assign({},u),e.attributeChangedCallback=function(n,t,e){(function r(n,t,e,i){var o=n[c(e)];o&&(t[o]=i)})(u,this,n,e)},function(n,t,e,r){o.forEach(function(t){var i=t[0],o=t[1];3&o.tn&&A(e,i,function t(){return(n.jn.get(this)||{})[i]},function t(e){$(n,this,i,g(o.rn,e),r)})})}(n,0,e,i)}}(b,s[n.in]=n,t.prototype,u,a),t.observedAttributes=Object.values(n.Y).map(function(n){return n.nn}).filter(function(n){return!!n}),r.customElements.define(n.in,t))},G:function(n){return s[v.In(n)]},ct:function(n){return e[n]},isClient:!0,tt:function(n){return!(!m[v.In(n)]&&!b.G(n))},bn:function(n,t,e){return console.error(n,t,e&&e.tagName)},queue:e.queue=y(l,r),rt:function(n,t){var e={mode:t.mode,scoped:!1};n.u(e).then(function(e){try{n.Mn=e}catch(t){console.error(t),n.Mn=function r(){}}k(b,t,a)})},gn:!1,dn:!1,it:!1,at:void 0,wn:new WeakMap,st:new WeakMap,En:new WeakMap,ot:new WeakMap,ft:new WeakMap,et:new WeakMap,$n:new WeakMap,mn:new WeakMap,yn:new WeakMap,hn:new WeakMap,pn:new WeakMap,ut:new WeakMap,lt:new WeakMap,kn:new WeakMap,jn:new WeakMap,vn:new Set,Cn:[]};return e.isServer=e.isPrerender=!(e.isClient=!0),e.window=r,e.location=r.location,e.document=i,e.resourcesUrl=e.publicPath=o,l.h=n,l.Context=e,l.onReady=function(){return new Promise(function(n){return b.queue.write(function(){return b.vn.size?b.Cn.push(n):n()})})},b.render=function(n,t){var e,r,i,o,u,c,a,s=function(i,v,h,y,w,m,b,M,g){if(M=v.vchildren[h],e||(o=!0,"slot"===M.vtag&&(r&&t.Fn(y,r+"-s"),M.vchildren?M.vt=!0:M.pt=!0)),f(M.vtext))M.t=t.Pn(M.vtext);else if(M.pt)M.t=t.Pn("");else{if(m=M.t=d||"svg"===M.vtag?t.Wn("http://www.w3.org/2000/svg",M.vtag):t.Tn(M.vt?"slot-fb":M.vtag),n.tt(m)&&n.et.delete(a),d="svg"===M.vtag||"foreignObject"!==M.vtag&&d,p(n,null,M,d),f(r)&&m["s-si"]!==r&&t.Fn(m,m["s-si"]=r),M.vchildren)for(w=0;w<M.vchildren.length;++w)(b=s(i,M,w,m))&&t.Dn(m,b);"svg"===M.vtag&&(d=!1)}return M.t["s-hn"]=c,(M.vt||M.pt)&&(M.t["s-sr"]=!0,M.t["s-cr"]=u,M.t["s-sn"]=M.vname||"",(g=i&&i.vchildren&&i.vchildren[h])&&g.vtag===M.vtag&&i.t&&l(i.t)),M.t},l=function(e,r,i,u){n.it=!0;var f=t.Hn(e);for(i=f.length-1;i>=0;i--)(u=f[i])["s-hn"]!==c&&u["s-ol"]&&(t.Ln(u),t.Rn(m(u),u,w(u)),t.Ln(u["s-ol"]),u["s-ol"]=null,o=!0),r&&l(u,r);n.it=!1},v=function(n,e,r,i,o,u,a,l){var v=n["s-cr"];for((a=v&&t.qn(v)||n).shadowRoot&&t.In(a)===c&&(a=a.shadowRoot);o<=u;++o)i[o]&&(l=f(i[o].vtext)?t.Pn(i[o].vtext):s(null,r,o,n))&&(i[o].t=l,t.Rn(a,l,w(e)))},h=function(n,e,r,o){for(;e<=r;++e)f(n[e])&&(o=n[e].t,i=!0,o["s-ol"]?t.Ln(o["s-ol"]):l(o,!0),t.Ln(o))},y=function(n,t){return n.vtag===t.vtag&&n.vkey===t.vkey&&("slot"!==n.vtag||n.vname===t.vname)},w=function(n){return n&&n["s-ol"]?n["s-ol"]:n},m=function(n){return t.qn(n["s-ol"]?n["s-ol"]:n)},b=function(e,r,i){var o=r.t=e.t,u=e.vchildren,c=r.vchildren;d=r.t&&f(t.Kn(r.t))&&void 0!==r.t.ownerSVGElement,d="svg"===r.vtag||"foreignObject"!==r.vtag&&d,f(r.vtext)?(i=o["s-cr"])?t.Qn(t.qn(i),r.vtext):e.vtext!==r.vtext&&t.Qn(o,r.vtext):("slot"!==r.vtag&&p(n,e,r,d),f(u)&&f(c)?function(n,e,r,i,o,u,c,a){for(var p=0,d=0,M=e.length-1,g=e[0],k=e[M],j=i.length-1,$=i[0],A=i[j];p<=M&&d<=j;)if(null==g)g=e[++p];else if(null==k)k=e[--M];else if(null==$)$=i[++d];else if(null==A)A=i[--j];else if(y(g,$))b(g,$),g=e[++p],$=i[++d];else if(y(k,A))b(k,A),k=e[--M],A=i[--j];else if(y(g,A))"slot"!==g.vtag&&"slot"!==A.vtag||l(t.qn(g.t)),b(g,A),t.Rn(n,g.t,t.Un(k.t)),g=e[++p],A=i[--j];else if(y(k,$))"slot"!==g.vtag&&"slot"!==A.vtag||l(t.qn(k.t)),b(k,$),t.Rn(n,k.t,g.t),k=e[--M],$=i[++d];else{for(o=null,u=p;u<=M;++u)if(e[u]&&f(e[u].vkey)&&e[u].vkey===$.vkey){o=u;break}f(o)?((a=e[o]).vtag!==$.vtag?c=s(e&&e[d],r,o,n):(b(a,$),e[o]=void 0,c=a.t),$=i[++d]):(c=s(e&&e[d],r,d,n),$=i[++d]),c&&t.Rn(m(g.t),c,w(g.t))}p>M?v(n,null==i[j+1]?null:i[j+1].t,r,i,d,j):d>j&&h(e,p,M)}(o,u,r,c):f(c)?(f(e.vtext)&&t.Qn(o,""),v(o,null,r,c,0,c.length-1)):f(u)&&h(u,0,u.length-1)),d&&"svg"===r.vtag&&(d=!1)},M=function(n,e,r,i,o,u,f,c){for(i=0,o=(r=t.Hn(n)).length;i<o;i++)if(e=r[i],1===t.xn(e)){if(e["s-sr"])for(f=e["s-sn"],e.hidden=!1,u=0;u<o;u++)if(r[u]["s-hn"]!==e["s-hn"])if(c=t.xn(r[u]),""!==f){if(1===c&&f===t.Yn(r[u],"slot")){e.hidden=!0;break}}else if(1===c||3===c&&""!==t.Gn(r[u]).trim()){e.hidden=!0;break}M(e)}},g=[],k=function(n,e,r,o,u,f,c,a,s,l){for(u=0,f=(e=t.Hn(n)).length;u<f;u++){if((r=e[u])["s-sr"]&&(o=r["s-cr"]))for(a=t.Hn(t.qn(o)),s=r["s-sn"],c=a.length-1;c>=0;c--)(o=a[c])["s-cn"]||o["s-nr"]||o["s-hn"]===r["s-hn"]||((3===(l=t.xn(o))||8===l)&&""===s||1===l&&null===t.Yn(o,"slot")&&""===s||1===l&&t.Yn(o,"slot")===s)&&(g.some(function(n){return n.dt===o})||(i=!0,o["s-sn"]=s,g.push({ht:r,dt:o})));1===t.xn(r)&&k(r)}};return function(f,s,l,v,p,d,h,y,w,m,j,$){if(a=f,c=t.In(a),u=a["s-cr"],e=v,r=a["s-sc"],o=i=!1,b(s,l),o){for(k(l.t),h=0;h<g.length;h++)(y=g[h]).dt["s-ol"]||((w=t.Pn(""))["s-nr"]=y.dt,t.Rn(t.qn(y.dt),y.dt["s-ol"]=w,y.dt));for(n.it=!0,h=0;h<g.length;h++){for(y=g[h],j=t.qn(y.ht),$=t.Un(y.ht),w=y.dt["s-ol"];w=t.Bn(w);)if((m=w["s-nr"])&&m&&m["s-sn"]===y.dt["s-sn"]&&j===t.qn(m)&&(m=t.Un(m))&&m&&!m["s-nr"]){$=m;break}(!$&&j!==t.qn(y.dt)||t.Un(y.dt)!==$)&&y.dt!==$&&(t.Ln(y.dt),t.Rn(j,y.dt,$))}n.it=!1}return i&&M(l.t),g.length=0,l}}(b,v),w["s-ld"]=[],w["s-rn"]=!0,w["s-init"]=function(){b.et.set(w,l.loaded=b.dn=!0),v.Vn(r,"appload",{detail:{namespace:t}})},function(n,t,e,r,i,o){if(t.componentOnReady=function(t,e){if(!t.nodeName.includes("-"))return e(null),!1;var r=n.G(t);if(r)if(n.et.has(t))e(t);else{var i=n.ut.get(t)||[];i.push(e),n.ut.set(t,i)}return!!r},i){for(o=i.length-1;o>=0;o--)t.componentOnReady(i[o][0],i[o][1])&&i.splice(o,1);for(o=0;o<r.length;o++)if(!e[r[o]].componentOnReady)return;for(o=0;o<i.length;o++)i[o][1](null);i.length=0}}(b,l,r,r["s-apps"],r["s-cr"]),l.initialized=!0,b},_={},x=!1;export{t as defineCustomElement,n as h};