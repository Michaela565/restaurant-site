(()=>{"use strict";var n,e,t,r,o,i,a,c,s,l,d,p,f,u,m={373:(n,e,t)=>{t.d(e,{Z:()=>f});var r=t(81),o=t.n(r),i=t(645),a=t.n(i),c=t(667),s=t.n(c),l=new URL(t(144),t.b),d=a()(o());d.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]),d.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap);"]);var p=s()(l);d.push([n.id,`*{\n    margin: 0;\n    padding: 0;\n    font-family:'Noto Sans', Courier, monospace;\n}\n\nbody{\n    height: 100vh;\n}\n\n#content{\n    display: grid;\n    grid-template-rows: auto 40em auto 3em;\n    grid-template-columns: 100%;\n    height: 100%;\n}\n\n/* ---navigation--- */\n\n#main-nav{\n    grid-column: 1 / 4;\n    display: grid;\n    grid-template-columns: repeat(3, 33.33%);\n    grid-template-rows: 3em;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    font-size: 22px;\n    background-color: #121212;\n}\n\n.navigation-links{\n    height: 100%;\n    grid-column: 2 / 4;\n    display: grid;\n    grid-template-columns: repeat(3, 33.33%);\n}\n\n.nav-element{\n    height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    transition: all 0.2s;\n}\n\n.nav-element:any-link{\n    color: #ffffff;\n    text-decoration: none;\n}\n\n.nav-element:hover{\n    color: #F2E7CE;\n}\n\n.logo{\n    display: flex;\n    margin-left: 1em;\n    align-items: center;\n}\n\n.logo> div{\n    font-family: 'Abril Fatface', 'Roboto', Courier, monospace;\n    font-size: 42px;\n    letter-spacing: 3px;\n    padding-left: 5px;\n}\n\n.logo:any-link{\n    color: #ffffff;\n    text-decoration: none;\n}\n\n#main-nav> .logo:hover{\n    color: #ffffff;\n}\n\n.logo > img{\n    width: 100px;\n    height: 60px;\n    object-fit: cover;\n}\n\n@media screen and (max-width: 770px){\n    #main-nav{\n        grid-template-columns: 1fr;\n        grid-template-rows: repeat(2, 4em);\n    }\n    .logo{\n        grid-row: 1 / 2;\n        grid-column: 1 / 2;\n        justify-content: center;\n    }\n\n    .navigation-links{\n        grid-row: 2 / 3;\n        grid-column: 1 / 2;\n    }\n}\n\n/* ---navigation end--- */\n\n/* ---header part---*/\n\n.first-half{\n    grid-row: 2 / 3;\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    align-items: center;\n    justify-content: center;\n    z-index: 10;\n    background-image: url(${p});\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n.first-half> img{\n    height: 200px;\n    width: 27em;\n    object-fit: cover;\n}\n\n.white-cover{\n    background-color: rgba(242, 231, 206, 0.95) ;\n    width: 100%;\n    padding: 1em 0;\n}\n\n\n.white-cover> div:last-of-type{\n    font-size: 18px;\n}\n\n.white-cover> div:last-of-type > div:last-of-type{\n    padding-top: 1em;\n}\n\n/* ---header part end---*/\n\n/* ---top picks part --- */\n\n.second-half{\n    grid-row: 3 / 4;\n    padding: 2em;\n    z-index: 10;\n    background-color: #121212;\n    color: #ffffff;\n}\n\n.picks{\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-auto-rows: 16em;\n}\n\n@media screen and (max-width: 770px){\n    .picks{\n        grid-template-columns: 1fr;\n    }\n}\n\n/* --- pick card --- */\n\n.pick{\n    background-color: #F2E7CE;\n    box-shadow: 7px 8px 8px #000000;\n    display: flex;\n    justify-content: space-between;\n    margin: 1em;\n    padding: 1em;\n    margin-left: 0;\n    transition: all 0.2s;\n    border-radius: 10px;\n}\n\n.pick> img{\n    object-fit: cover;\n    width: 40%;\n    border-radius: 10px;\n}\n\n.information-pizza{\n    margin: 1em;\n    color: #121212;\n    display: flex;\n    width: 100%;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\nul{\n    margin: 0.5em 1.5em;\n}\n\n.information-pizza> div.price{\n    display: flex;\n    justify-content: right;\n}\n\n/* --- pick card end --- */\n\n/* --- top picks part end --- */\n\n/* --- footer --- */\nfooter{\n    grid-row: 4 / 5;\n    color: #ffffff;\n    background-color: #121212;\n    display: flex;\n    justify-content: space-between;\n    padding: 1em;\n}\n\nfooter>div>a:any-link{\n    color: #ffffff;\n}\n\n/* --- footer end --- */\n\n\n/* --- scrollbar --- */\n\n::-webkit-scrollbar {\n    width: 15px;\n}\n\n::-webkit-scrollbar-track {\n    background: #121212;\n}\n\n::-webkit-scrollbar-thumb {\n    background: #A53F2B;\n}\n\n::-webkit-scrollbar-thumb:hover {\n    background: #712c20;\n}\n\n@media screen and (max-width: 770px){\n    ::-webkit-scrollbar {\n        width: 10px;\n    }\n}\n/* --- scrollbar end --- */\n\n/* --- general font settings --- */\n\n.bold{\n    font-weight: 600;\n}\n\n.bolder{\n    font-weight: 700;\n}\n\n.large{\n    font-size: 25px;\n}\n\n.larger{\n    font-size: 32px;\n}\n\n.fancy{\n    font-family: 'Abril Fatface', 'Roboto', Courier, monospace;\n    font-size: 64px;\n    padding-bottom: 0.5em;\n}`,""]);const f=d},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],d=i[l]||0,p="".concat(l," ").concat(d);i[l]=d+1;var f=t(p),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)e[f].references++,e[f].updater(u);else{var m=o(u,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:m,references:1})}a.push(p)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=r(n,o),l=0;l<i.length;l++){var d=t(i[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},144:(n,e,t)=>{n.exports=t.p+"e2832d09196c9d3c6a0a.jpeg"}},g={};function h(n){var e=g[n];if(void 0!==e)return e.exports;var t=g[n]={id:n,exports:{}};return m[n](t,t.exports,h),t.exports}h.m=m,h.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return h.d(e,{a:e}),e},h.d=(n,e)=>{for(var t in e)h.o(e,t)&&!h.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},h.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),h.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;h.g.importScripts&&(n=h.g.location+"");var e=h.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");if(t.length)for(var r=t.length-1;r>-1&&!n;)n=t[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),h.p=n})(),h.b=document.baseURI||self.location.href,h.nc=void 0,n=h(379),e=h.n(n),t=h(795),r=h.n(t),o=h(569),i=h.n(o),a=h(565),c=h.n(a),s=h(216),l=h.n(s),d=h(589),p=h.n(d),f=h(373),(u={}).styleTagTransform=p(),u.setAttributes=c(),u.insert=i().bind(null,"head"),u.domAPI=r(),u.insertStyleElement=l(),e()(f.Z,u),f.Z&&f.Z.locals&&f.Z.locals,console.log("hey, im alive btw")})();