/*!
 * WvLazyload: Core, es2017
 * Built with http://stenciljs.com
 */
function e(e,t){let n,o,i=null,l=!1,r=!1,s=arguments.length;for(;s-- >2;)v.push(arguments[s]);for(;v.length>0;){let t=v.pop();if(t&&void 0!==t.pop)for(s=t.length;s--;)v.push(t[s]);else"boolean"==typeof t&&(t=null),(r="function"!=typeof e)&&(null==t?t="":"number"==typeof t?t=String(t):"string"!=typeof t&&(r=!1)),r&&l?i[i.length-1].vtext+=t:null===i?i=[r?{vtext:t}:t]:i.push(r?{vtext:t}:t),l=r}if(null!=t){if(t.className&&(t.class=t.className),"object"==typeof t.class){for(s in t.class)t.class[s]&&v.push(s);t.class=v.join(" "),v.length=0}null!=t.key&&(n=t.key),null!=t.name&&(o=t.name)}return"function"==typeof e?e(t,i||[],m):{vtag:e,vchildren:i,vtext:void 0,vattrs:t,vkey:n,vname:o,t:void 0,o:!1}}function t(e,t,o={}){let i=Array.isArray(t)?t:[t];const l=e.document,s=o.hydratedCssClass||"hydrated",a=o.exclude;a&&(i=i.filter(e=>-1===a.indexOf(e[0])));const c=i.map(e=>e[0]);if(c.length>0){const e=l.createElement("style");e.innerHTML=c.join()+"{visibility:hidden}."+s+"{visibility:inherit}",e.setAttribute("data-styles",""),l.head.insertBefore(e,l.head.firstChild)}const f=o.namespace||"WvLazyload";return W||(W=!0,function u(e,t,n){(e["s-apps"]=e["s-apps"]||[]).push(t),n.componentOnReady||(n.componentOnReady=function t(){function n(t){if(o.nodeName.indexOf("-")>0){for(var n=e["s-apps"],i=0,l=0;l<n.length;l++)if(e[n[l]].componentOnReady){if(e[n[l]].componentOnReady(o,t))return;i++}if(i<n.length)return void(e["s-cr"]=e["s-cr"]||[]).push([o,t])}t(null)}var o=this;return e.Promise?new e.Promise(n):{then:n}})}(e,f,e.HTMLElement.prototype)),applyPolyfills(e).then(()=>{if(!S[f]){const t={},r=o.resourcesUrl||"./";n(f,t,e,l,r,s),S[f]=j(f,t,e,l,r,s,i)}(function t(){i.forEach(t=>{let n;!function o(e){return/\{\s*\[native code\]\s*\}/.test(""+e)}(e.customElements.define)?(n=function(t){return e.HTMLElement.call(this,t)}).prototype=Object.create(e.HTMLElement.prototype,{constructor:{value:n,configurable:!0}}):n=new Function("w","return class extends w.HTMLElement{}")(e),S[f].i(function i(e){const t=b(e),n=t.l,o=r(e[0]);return t.l=(({mode:e,scoped:t})=>(function i(e,t,n){return import(
/* webpackInclude: /\.entry\.js$/ */
/* webpackMode: "lazy" */
`./build/${e}${t?".sc":""}.entry.js`).then(e=>e[n])})("string"==typeof n?n:n[e],t,o)),t}(t),n)})})()})}var n=function(){};function applyPolyfills(){return Promise.resolve()}const o={},i=e=>null!=e,l=e=>e.toLowerCase(),r=e=>l(e).split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(""),s=(e,t,n,o,i,r)=>{if("class"!==n||r)if("style"===n){for(const e in o)i&&null!=i[e]||(/-/.test(e)?t.style.removeProperty(e):t.style[e]="");for(const e in i)o&&i[e]===o[e]||(/-/.test(e)?t.style.setProperty(e,i[e]):t.style[e]=i[e])}else if("o"!==n[0]||"n"!==n[1]||!/[A-Z]/.test(n[2])||n in t)if("list"!==n&&"type"!==n&&!r&&(n in t||-1!==["object","function"].indexOf(typeof i)&&null!==i)){const o=e.s(t);o&&o.u&&o.u[n]?c(t,n,i):"ref"!==n&&(c(t,n,null==i?"":i),null!=i&&!1!==i||e.v.p(t,n))}else null!=i&&"key"!==n?((e,t,n,o="boolean"==typeof n,i)=>{i=t!==(t=t.replace(/^xlink\:?/,"")),null==n||o&&(!n||"false"===n)?i?e.removeAttributeNS("http://www.w3.org/1999/xlink",l(t)):e.removeAttribute(t):"function"!=typeof n&&(n=o?"":n.toString(),i?e.setAttributeNS("http://www.w3.org/1999/xlink",l(t),n):e.setAttribute(t,n))})(t,n,i):(r||e.v.m(t,n)&&(null==i||!1===i))&&e.v.p(t,n);else n=l(n)in t?l(n.substring(2)):l(n[2])+n.substring(3),i?i!==o&&e.v.M(t,n,i,0):e.v.g(t,n,0);else if(o!==i){const e=a(o),n=a(i),l=e.filter(e=>!n.includes(e)),r=a(t.className).filter(e=>!l.includes(e)),s=n.filter(t=>!e.includes(t)&&!r.includes(t));r.push(...s),t.className=r.join(" ")}},a=e=>null==e||""===e?[]:e.trim().split(/\s+/),c=(e,t,n)=>{try{e[t]=n}catch(e){}},f=(e,t,n,i,l)=>{const r=11===n.t.nodeType&&n.t.host?n.t.host:n.t,a=t&&t.vattrs||o,c=n.vattrs||o;for(l in a)c&&null!=c[l]||null==a[l]||s(e,r,l,a[l],void 0,i,n.o);for(l in c)l in a&&c[l]===("value"===l||"checked"===l?r[l]:a[l])||s(e,r,l,a[l],c[l],i,n.o)};let u=!1;const p=(e,t)=>{e&&(e.vattrs&&e.vattrs.ref&&e.vattrs.ref(t?null:e.t),e.vchildren&&e.vchildren.forEach(e=>{p(e,t)}))},d=(e,t)=>{{let n=0,o=!1;const i=()=>t.performance.now(),l=!1!==e.asyncQueue,r=Promise.resolve(),s=[],a=[],c=[],f=[],u=t=>n=>{t.push(n),o||(o=!0,e.raf(v))},p=e=>{for(let t=0;t<e.length;t++)try{e[t](i())}catch(e){console.error(e)}e.length=0},d=(e,t)=>{let n,o=0;for(;o<e.length&&(n=i())<t;)try{e[o++](n)}catch(e){console.error(e)}o===e.length?e.length=0:0!==o&&e.splice(0,o)},v=()=>{n++,p(a);const t=l?i()+7*Math.ceil(n*(1/22)):Infinity;d(c,t),d(f,t),c.length>0&&(f.push(...c),c.length=0),(o=a.length+c.length+f.length>0)?e.raf(v):n=0};return e.raf||(e.raf=t.requestAnimationFrame.bind(t)),{tick(e){s.push(e),1===s.length&&r.then(()=>p(s))},read:u(a),write:u(c)}}},v=[],m={forEach:(e,t)=>e.forEach(t),map:(e,t)=>e.map(t)},b=(e,t,n)=>{const[o,i,,l,r,s]=e,a={color:{k:"color"}};if(l)for(t=0;t<l.length;t++)a[(n=l[t])[0]]={C:n[1],A:!!n[2],k:"string"==typeof n[3]?n[3]:n[3]?n[0]:0,_:n[4]};return{j:o,l:i,u:Object.assign({},a),S:r,W:s?s.map(y):void 0}},y=e=>({N:e[0],O:e[1],P:!!e[2],L:!!e[3],R:!!e[4]}),h=(e,t)=>i(t)&&"object"!=typeof t&&"function"!=typeof t?e===Boolean||4===e?"false"!==t&&(""===t||!!t):e===Number||8===e?parseFloat(t):e===String||2===e?t.toString():t:t,w=(e,t,n)=>{e.T.add(t),e.D.has(t)||(e.D.set(t,!0),e.H?e.queue.write(()=>M(e,t,n)):e.queue.tick(()=>M(e,t,n)))},M=async(t,n,o,i,l,r)=>{if(t.D.delete(n),!t.q.has(n)){if(!(l=t.B.get(n))){if((r=t.F.get(n))&&!r["s-rn"])return void(r["s-rc"]=r["s-rc"]||[]).push(()=>{M(t,n,o)});if(l=C(t,n,t.I.get(n),o))try{l.componentWillLoad&&await l.componentWillLoad()}catch(e){t.U(e,3,n)}}((t,n,o,i)=>{try{const l=n.Y.host,r=n.Y.encapsulation,s=!1;let a,c=o;if(i.render||i.hostData||l||a){t.Z=!0;const n=i.render&&i.render();let l;t.Z=!1;const a=e(null,l,n),f=t.G.get(o)||{};f.t=c,t.G.set(o,t.render(o,f,a,s,r))}o["s-rn"]=!0,o["s-rc"]&&(o["s-rc"].forEach(e=>e()),o["s-rc"]=null)}catch(e){t.Z=!1,t.U(e,8,o,!0)}})(t,t.s(n),n,l),n["s-init"]()}},$=(e,t,n,o,l,r,s,a,c)=>{if(t.type||t.state){const f=e.J.get(n);t.state||(!t.attr||void 0!==f[l]&&""!==f[l]||(a=r&&r.K)&&i(c=a[t.attr])&&(f[l]=h(t.type,c)),n.hasOwnProperty(l)&&(void 0===f[l]&&(f[l]=h(t.type,n[l])),"mode"!==l&&delete n[l])),o.hasOwnProperty(l)&&void 0===f[l]&&(f[l]=o[l]),k(o,l,function f(t){return(t=e.J.get(e.V.get(this)))&&t[l]},function u(n,o){(o=e.V.get(this))&&(t.state||t.mutable)&&g(e,o,l,n,s)})}},g=(e,t,n,o,i,l,r)=>{(r=e.J.get(t))||e.J.set(t,r={}),o!==r[n]&&(r[n]=o,e.B.get(t)&&!e.Z&&t["s-rn"]&&w(e,t,i))},k=(e,t,n,o)=>{Object.defineProperty(e,t,{configurable:!0,get:n,set:o})},C=(e,t,n,o,i,l)=>{try{i=new(l=e.s(t).Y),((e,t,n,o,i,l)=>{e.V.set(o,n),e.J.has(n)||e.J.set(n,{}),Object.entries(Object.assign({color:{type:String}},t.properties,{mode:{type:String}})).forEach(([t,r])=>{$(e,r,n,o,t,i,l)})})(e,l,t,i,n,o)}catch(n){i={},e.U(n,7,t,!0)}return e.B.set(t,i),i},E=(e,t,n,o,i,l)=>{if(e.T.delete(t),(i=e.F.get(t))&&((o=i["s-ld"])&&((n=o.indexOf(t))>-1&&o.splice(n,1),o.length||i["s-init"]&&i["s-init"]()),e.F.delete(t)),e.X.length&&!e.T.size)for(;l=e.X.shift();)l()},A=(e,t,n,o)=>{t.forEach(([t,i])=>{3&i.C&&k(n,t,function n(){return(e.J.get(this)||{})[t]},function n(l){g(e,this,t,h(i._,l),o)})})},_=(e,t,n,o,i)=>{if(n.connectedCallback=function(){((e,t,n)=>{e.q.delete(n),e.ee.has(n)||(e.te=!0,e.T.add(n),e.ee.set(n,!0),((e,t,n)=>{for(n=t;n=e.v.ne(n);)if(e.oe(n)){e.ie.has(t)||(e.F.set(t,n),(n["s-ld"]=n["s-ld"]||[]).push(t));break}})(e,n),e.queue.tick(()=>{e.I.set(n,((e,t,n,o,i)=>(n.mode||(n.mode=e.le(n)),n["s-cr"]||e.re(n,"ssrv")||e.se&&1===t.S||(n["s-cr"]=e.ae(""),n["s-cr"]["s-cn"]=!0,e.ce(n,n["s-cr"],e.fe(n)[0])),o={K:{}},t.u&&Object.keys(t.u).forEach(l=>{(i=t.u[l].k)&&(o.K[i]=e.re(n,i))}),o))(e.v,t,n)),e.ue(t,n)}))})(e,t,this)},n.disconnectedCallback=function(){((e,t)=>{!e.pe&&((e,t)=>{for(;t;){if(!e.de(t))return 9!==e.ve(t);t=e.de(t)}})(e.v,t)&&(e.q.set(t,!0),E(e,t),p(e.G.get(t),!0),e.v.g(t),e.me.delete(t),[e.F,e.be,e.I].forEach(e=>e.delete(t)))})(e,this)},n["s-init"]=function(){((e,t,n,o,i,l)=>{if(e.B.get(t)&&!e.q.has(t)&&(!t["s-ld"]||!t["s-ld"].length)){e.ie.set(t,!0),e.ye.has(t)||(e.ye.set(t,!0),t["s-ld"]=void 0,e.v.he(t,n));try{p(e.G.get(t)),(l=e.be.get(t))&&(l.forEach(e=>e(t)),e.be.delete(t))}catch(n){e.U(n,4,t)}E(e,t)}})(e,this,o)},n.forceUpdate=function(){w(e,this,i)},t.u){const o=Object.entries(t.u);{let e={};o.forEach(([t,{k:n}])=>{n&&(e[n]=t)}),e=Object.assign({},e),n.attributeChangedCallback=function(t,n,o){(function i(e,t,n,o){const i=e[l(n)];i&&(t[i]=o)})(e,this,t,o)}}A(e,o,n,i)}},j=(t,n,o,r,s,a)=>{const c=o.performance,p={html:{}},v=o[t]=o[t]||{},m=((e,t,n)=>{const o=new WeakMap,i={we:n,se:!!n.documentElement.attachShadow,Me:!1,ve:e=>e.nodeType,$e:e=>n.createElement(e),ge:(e,t)=>n.createElementNS(e,t),ae:e=>n.createTextNode(e),ke:e=>n.createComment(e),ce:(e,t,n)=>e.insertBefore(t,n),Ce:e=>e.remove(),Ee:(e,t)=>e.appendChild(t),he:(e,t)=>{e.classList.add(t)},fe:e=>e.childNodes,de:e=>e.parentNode,Ae:e=>e.nextSibling,_e:e=>e.previousSibling,je:e=>l(e.nodeName),Se:e=>e.textContent,We:(e,t)=>e.textContent=t,re:(e,t)=>e.getAttribute(t),Ne:(e,t,n)=>e.setAttribute(t,n),p:(e,t)=>e.removeAttribute(t),m:(e,t)=>e.hasAttribute(t),le:t=>t.getAttribute("mode")||(e.Context||{}).mode,Oe:(e,o)=>"child"===o?e.firstElementChild:"parent"===o?i.ne(e):"body"===o?n.body:"document"===o?n:"window"===o?t:e,M:(t,n,l,r,s,a,c,f,u,p)=>{let d=t,v=l,m=o.get(t);p=n+r,m&&m[p]&&m[p](),"object"==typeof c&&(d=c),d&&(f=i.Me?{capture:!!s,passive:!!a}:!!s,e.ael(d,n,v,f),m||o.set(t,m={}),m[p]=(()=>{d&&e.rel(d,n,v,f),m[p]=null}))},g:(e,t,n,i)=>{(i=o.get(e))&&(t?i[t+n]&&i[t+n]():Object.keys(i).forEach(e=>{i[e]&&i[e]()}))},xe:(e,n,o,i)=>(i=new t.CustomEvent(n,o),e&&e.dispatchEvent(i),i),ne:(e,t)=>(t=i.de(e))&&11===i.ve(t)?t.host:t,Pe:(e,t,n,o)=>e.setAttributeNS(t,n,o)};return e.ael||(e.ael=((e,t,n,o)=>e.addEventListener(t,n,o)),e.rel=((e,t,n,o)=>e.removeEventListener(t,n,o))),i})(v,o,r),b=m.we.documentElement,y=o["s-defined"]=o["s-defined"]||{},h={v:m,i:(e,t)=>{o.customElements.get(e.j)||(_(h,p[e.j]=e,t.prototype,a,c),t.observedAttributes=Object.values(e.u).map(e=>e.k).filter(e=>!!e),o.customElements.define(e.j,t))},s:e=>p[m.je(e)],Le:e=>n[e],isClient:!0,oe:e=>!(!y[m.je(e)]&&!h.s(e)),U:(e,t,n)=>console.error(e,t,n&&n.tagName),queue:n.queue=d(v,o),ue:(e,t)=>{{const n=!1,o={mode:t.mode,scoped:n};e.l(o).then(n=>{try{e.Y=n}catch(t){console.error(t),e.Y=class{}}w(h,t,c)})}},Z:!1,H:!1,pe:!1,Re:void 0,F:new WeakMap,Te:new WeakMap,ee:new WeakMap,me:new WeakMap,ye:new WeakMap,ie:new WeakMap,V:new WeakMap,I:new WeakMap,B:new WeakMap,q:new WeakMap,D:new WeakMap,be:new WeakMap,De:new WeakMap,G:new WeakMap,J:new WeakMap,T:new Set,X:[]};return n.isServer=n.isPrerender=!(n.isClient=!0),n.window=o,n.location=o.location,n.document=r,n.resourcesUrl=n.publicPath=s,v.h=e,v.Context=n,v.onReady=(()=>new Promise(e=>h.queue.write(()=>h.T.size?h.X.push(e):e()))),h.render=((e,t)=>{let n,o,l,r,s,a,c;const p=(l,v,m,b,y,h,w,M,$)=>{if(M=v.vchildren[m],n||(r=!0,"slot"===M.vtag&&(o&&t.he(b,o+"-s"),M.vchildren?M.He=!0:M.qe=!0)),i(M.vtext))M.t=t.ae(M.vtext);else if(M.qe)M.t=t.ae("");else{if(h=M.t=u||"svg"===M.vtag?t.ge("http://www.w3.org/2000/svg",M.vtag):t.$e(M.He?"slot-fb":M.vtag),e.oe(h)&&e.ie.delete(c),u="svg"===M.vtag||"foreignObject"!==M.vtag&&u,f(e,null,M,u),i(o)&&h["s-si"]!==o&&t.he(h,h["s-si"]=o),M.vchildren)for(y=0;y<M.vchildren.length;++y)(w=p(l,M,y,h))&&t.Ee(h,w);"svg"===M.vtag&&(u=!1)}return M.t["s-hn"]=a,(M.He||M.qe)&&(M.t["s-sr"]=!0,M.t["s-cr"]=s,M.t["s-sn"]=M.vname||"",($=l&&l.vchildren&&l.vchildren[m])&&$.vtag===M.vtag&&l.t&&d(l.t)),M.t},d=(n,o,i,l)=>{e.pe=!0;const s=t.fe(n);for(i=s.length-1;i>=0;i--)(l=s[i])["s-hn"]!==a&&l["s-ol"]&&(t.Ce(l),t.ce(h(l),l,y(l)),t.Ce(l["s-ol"]),l["s-ol"]=null,r=!0),o&&d(l,o);e.pe=!1},v=(e,n,o,l,r,s,c,f)=>{const u=e["s-cr"];for((c=u&&t.de(u)||e).shadowRoot&&t.je(c)===a&&(c=c.shadowRoot);r<=s;++r)l[r]&&(f=i(l[r].vtext)?t.ae(l[r].vtext):p(null,o,r,e))&&(l[r].t=f,t.ce(c,f,y(n)))},m=(e,n,o,r)=>{for(;n<=o;++n)i(e[n])&&(r=e[n].t,l=!0,r["s-ol"]?t.Ce(r["s-ol"]):d(r,!0),t.Ce(r))},b=(e,t)=>e.vtag===t.vtag&&e.vkey===t.vkey&&("slot"!==e.vtag||e.vname===t.vname),y=e=>e&&e["s-ol"]?e["s-ol"]:e,h=e=>t.de(e["s-ol"]?e["s-ol"]:e),w=(n,o,l)=>{const r=o.t=n.t,s=n.vchildren,a=o.vchildren;u=o.t&&i(t.ne(o.t))&&void 0!==o.t.ownerSVGElement,u="svg"===o.vtag||"foreignObject"!==o.vtag&&u,i(o.vtext)?(l=r["s-cr"])?t.We(t.de(l),o.vtext):n.vtext!==o.vtext&&t.We(r,o.vtext):("slot"!==o.vtag&&f(e,n,o,u),i(s)&&i(a)?((e,n,o,l,r,s,a,c)=>{let f=0,u=0,M=n.length-1,$=n[0],g=n[M],k=l.length-1,C=l[0],E=l[k];for(;f<=M&&u<=k;)if(null==$)$=n[++f];else if(null==g)g=n[--M];else if(null==C)C=l[++u];else if(null==E)E=l[--k];else if(b($,C))w($,C),$=n[++f],C=l[++u];else if(b(g,E))w(g,E),g=n[--M],E=l[--k];else if(b($,E))"slot"!==$.vtag&&"slot"!==E.vtag||d(t.de($.t)),w($,E),t.ce(e,$.t,t.Ae(g.t)),$=n[++f],E=l[--k];else if(b(g,C))"slot"!==$.vtag&&"slot"!==E.vtag||d(t.de(g.t)),w(g,C),t.ce(e,g.t,$.t),g=n[--M],C=l[++u];else{for(r=null,s=f;s<=M;++s)if(n[s]&&i(n[s].vkey)&&n[s].vkey===C.vkey){r=s;break}i(r)?((c=n[r]).vtag!==C.vtag?a=p(n&&n[u],o,r,e):(w(c,C),n[r]=void 0,a=c.t),C=l[++u]):(a=p(n&&n[u],o,u,e),C=l[++u]),a&&t.ce(h($.t),a,y($.t))}f>M?v(e,null==l[k+1]?null:l[k+1].t,o,l,u,k):u>k&&m(n,f,M)})(r,s,o,a):i(a)?(i(n.vtext)&&t.We(r,""),v(r,null,o,a,0,a.length-1)):i(s)&&m(s,0,s.length-1)),u&&"svg"===o.vtag&&(u=!1)},M=(e,n,o,i,l,r,s,a)=>{for(i=0,l=(o=t.fe(e)).length;i<l;i++)if(n=o[i],1===t.ve(n)){if(n["s-sr"])for(s=n["s-sn"],n.hidden=!1,r=0;r<l;r++)if(o[r]["s-hn"]!==n["s-hn"])if(a=t.ve(o[r]),""!==s){if(1===a&&s===t.re(o[r],"slot")){n.hidden=!0;break}}else if(1===a||3===a&&""!==t.Se(o[r]).trim()){n.hidden=!0;break}M(n)}},$=[],g=(e,n,o,i,r,s,a,c,f,u)=>{for(r=0,s=(n=t.fe(e)).length;r<s;r++){if((o=n[r])["s-sr"]&&(i=o["s-cr"]))for(c=t.fe(t.de(i)),f=o["s-sn"],a=c.length-1;a>=0;a--)(i=c[a])["s-cn"]||i["s-nr"]||i["s-hn"]===o["s-hn"]||((3===(u=t.ve(i))||8===u)&&""===f||1===u&&null===t.re(i,"slot")&&""===f||1===u&&t.re(i,"slot")===f)&&($.some(e=>e.Be===i)||(l=!0,i["s-sn"]=f,$.push({Fe:o,Be:i})));1===t.ve(o)&&g(o)}};return(i,f,u,p,d,v,m,b,y,h,k,C)=>{if(c=i,a=t.je(c),s=c["s-cr"],n=p,o=c["s-sc"],r=l=!1,w(f,u),r){for(g(u.t),m=0;m<$.length;m++)(b=$[m]).Be["s-ol"]||((y=t.ae(""))["s-nr"]=b.Be,t.ce(t.de(b.Be),b.Be["s-ol"]=y,b.Be));for(e.pe=!0,m=0;m<$.length;m++){for(b=$[m],k=t.de(b.Fe),C=t.Ae(b.Fe),y=b.Be["s-ol"];y=t._e(y);)if((h=y["s-nr"])&&h&&h["s-sn"]===b.Be["s-sn"]&&k===t.de(h)&&(h=t.Ae(h))&&h&&!h["s-nr"]){C=h;break}(!C&&k!==t.de(b.Be)||t.Ae(b.Be)!==C)&&b.Be!==C&&(t.Ce(b.Be),t.ce(k,b.Be,C))}e.pe=!1}return l&&M(u.t),$.length=0,u}})(h,m),b["s-ld"]=[],b["s-rn"]=!0,b["s-init"]=(()=>{h.ie.set(b,v.loaded=h.H=!0),m.xe(o,"appload",{detail:{namespace:t}})}),((e,t,n,o,i,l)=>{if(t.componentOnReady=((t,n)=>{if(!t.nodeName.includes("-"))return n(null),!1;const o=e.s(t);if(o)if(e.ie.has(t))n(t);else{const o=e.be.get(t)||[];o.push(n),e.be.set(t,o)}return!!o}),i){for(l=i.length-1;l>=0;l--)t.componentOnReady(i[l][0],i[l][1])&&i.splice(l,1);for(l=0;l<o.length;l++)if(!n[o[l]].componentOnReady)return;for(l=0;l<i.length;l++)i[l][1](null);i.length=0}})(h,v,o,o["s-apps"],o["s-cr"]),v.initialized=!0,h},S={};let W=!1;export{t as defineCustomElement,e as h};