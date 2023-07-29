(()=>{"use strict";var n,e,i,t,r,o,a,l,s,c,d,p,f,v,u={373:(n,e,i)=>{i.d(e,{Z:()=>f});var t=i(81),r=i.n(t),o=i(645),a=i.n(o),l=i(667),s=i.n(l),c=new URL(i(144),i.b),d=a()(r());d.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]),d.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap);"]);var p=s()(c);d.push([n.id,`*{\n    margin: 0;\n    padding: 0;\n    font-family:'Noto Sans', Courier, monospace;\n}\n\nbody{\n    height: 100vh;\n}\n\n#content{\n    display: grid;\n    grid-template-rows: auto 40em auto 3em;\n    grid-template-columns: 100%;\n    height: 100%;\n}\n\n/* ---navigation--- */\n\n#main-nav{\n    grid-column: 1 / 4;\n    display: grid;\n    grid-template-columns: repeat(3, 33.33%);\n    grid-template-rows: 3em;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    font-size: 22px;\n    background-color: #121212;\n}\n\n.navigation-links{\n    height: 100%;\n    grid-column: 2 / 4;\n    display: grid;\n    grid-template-columns: repeat(3, 33.33%);\n}\n\n.nav-element{\n    height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    transition: all 0.2s;\n}\n\n.nav-element:any-link{\n    color: #ffffff;\n    text-decoration: none;\n}\n\n.nav-element:hover{\n    color: #F2E7CE;\n}\n\n.logo{\n    display: flex;\n    margin-left: 1em;\n    align-items: center;\n}\n\n.logo> div{\n    font-family: 'Abril Fatface', 'Roboto', Courier, monospace;\n    font-size: 42px;\n    letter-spacing: 3px;\n    padding-left: 5px;\n}\n\n.logo:any-link{\n    color: #ffffff;\n    text-decoration: none;\n}\n\n#main-nav> .logo:hover{\n    color: #ffffff;\n}\n\n.logo > img{\n    width: 100px;\n    height: 60px;\n    object-fit: cover;\n}\n\n@media screen and (max-width: 770px){\n    #main-nav{\n        grid-template-columns: 1fr;\n        grid-template-rows: repeat(2, 4em);\n    }\n    .logo{\n        grid-row: 1 / 2;\n        grid-column: 1 / 2;\n        justify-content: center;\n    }\n\n    .navigation-links{\n        grid-row: 2 / 3;\n        grid-column: 1 / 2;\n    }\n}\n\n/* ---navigation end--- */\n\n/* ---header part---*/\n\n.first-half{\n    grid-row: 2 / 3;\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    align-items: center;\n    justify-content: center;\n    z-index: 10;\n    background-image: url(${p});\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n.first-half> img{\n    height: 200px;\n    width: 27em;\n    object-fit: cover;\n}\n\n.white-cover{\n    background-color: rgba(242, 231, 206, 0.95) ;\n    width: 100%;\n    padding: 1em 0;\n}\n\n\n.white-cover> div:last-of-type{\n    font-size: 18px;\n}\n\n.white-cover> div:last-of-type > div:last-of-type{\n    padding-top: 1em;\n}\n\n/* ---header part end---*/\n\n/* ---top picks part --- */\n\n.second-half{\n    grid-row: 3 / 4;\n    padding: 2em;\n    z-index: 10;\n    background-color: #121212;\n    color: #ffffff;\n}\n\n.picks{\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-auto-rows: 16em;\n}\n\n@media screen and (max-width: 770px){\n    .picks{\n        grid-template-columns: 1fr;\n    }\n}\n\n/* --- pick card --- */\n\n.pick{\n    background-color: #F2E7CE;\n    box-shadow: 7px 8px 8px #000000;\n    display: flex;\n    justify-content: space-between;\n    margin: 1em;\n    padding: 1em;\n    margin-left: 0;\n    transition: all 0.2s;\n    border-radius: 10px;\n}\n\n.pick> img{\n    object-fit: cover;\n    width: 40%;\n    border-radius: 10px;\n}\n\n.information-pizza{\n    margin: 1em;\n    color: #121212;\n    display: flex;\n    width: 100%;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\nul{\n    margin: 0.5em 1.5em;\n}\n\n.information-pizza> div.price{\n    display: flex;\n    justify-content: right;\n}\n\n/* --- pick card end --- */\n\n/* --- top picks part end --- */\n\n/* --- footer --- */\nfooter{\n    grid-row: 4 / 5;\n    color: #ffffff;\n    background-color: #121212;\n    display: flex;\n    justify-content: space-between;\n    padding: 1em;\n}\n\nfooter>div>a:any-link{\n    color: #ffffff;\n}\n\n/* --- footer end --- */\n\n\n/* --- scrollbar --- */\n\n::-webkit-scrollbar {\n    width: 15px;\n}\n\n::-webkit-scrollbar-track {\n    background: #121212;\n}\n\n::-webkit-scrollbar-thumb {\n    background: #A53F2B;\n}\n\n::-webkit-scrollbar-thumb:hover {\n    background: #712c20;\n}\n\n@media screen and (max-width: 770px){\n    ::-webkit-scrollbar {\n        width: 10px;\n    }\n}\n/* --- scrollbar end --- */\n\n/* --- general font settings --- */\n\n.bold{\n    font-weight: 600;\n}\n\n.bolder{\n    font-weight: 700;\n}\n\n.large{\n    font-size: 25px;\n}\n\n.larger{\n    font-size: 32px;\n}\n\n.fancy{\n    font-family: 'Abril Fatface', 'Roboto', Courier, monospace;\n    font-size: 64px;\n    padding-bottom: 0.5em;\n}`,""]);const f=d},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var i="",t=void 0!==e[5];return e[4]&&(i+="@supports (".concat(e[4],") {")),e[2]&&(i+="@media ".concat(e[2]," {")),t&&(i+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),i+=n(e),t&&(i+="}"),e[2]&&(i+="}"),e[4]&&(i+="}"),i})).join("")},e.i=function(n,i,t,r,o){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(a[s]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);t&&a[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),i&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=i):d[2]=i),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function i(n){for(var i=-1,t=0;t<e.length;t++)if(e[t].identifier===n){i=t;break}return i}function t(n,t){for(var o={},a=[],l=0;l<n.length;l++){var s=n[l],c=t.base?s[0]+t.base:s[0],d=o[c]||0,p="".concat(c," ").concat(d);o[c]=d+1;var f=i(p),v={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)e[f].references++,e[f].updater(v);else{var u=r(v,t);t.byIndex=l,e.splice(l,0,{identifier:p,updater:u,references:1})}a.push(p)}return a}function r(n,e){var i=e.domAPI(e);return i.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;i.update(n=e)}else i.remove()}}n.exports=function(n,r){var o=t(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<o.length;a++){var l=i(o[a]);e[l].references--}for(var s=t(n,r),c=0;c<o.length;c++){var d=i(o[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=s}}},569:n=>{var e={};n.exports=function(n,i){var t=function(n){if(void 0===e[n]){var i=document.querySelector(n);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(n){i=null}e[n]=i}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(i)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,i)=>{n.exports=function(n){var e=i.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(i){!function(n,e,i){var t="";i.supports&&(t+="@supports (".concat(i.supports,") {")),i.media&&(t+="@media ".concat(i.media," {"));var r=void 0!==i.layer;r&&(t+="@layer".concat(i.layer.length>0?" ".concat(i.layer):""," {")),t+=i.css,r&&(t+="}"),i.media&&(t+="}"),i.supports&&(t+="}");var o=i.sourceMap;o&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,i)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},144:(n,e,i)=>{n.exports=i.p+"e2832d09196c9d3c6a0a.jpeg"}},m={};function g(n){var e=m[n];if(void 0!==e)return e.exports;var i=m[n]={id:n,exports:{}};return u[n](i,i.exports,g),i.exports}g.m=u,g.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return g.d(e,{a:e}),e},g.d=(n,e)=>{for(var i in e)g.o(e,i)&&!g.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})},g.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),g.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;g.g.importScripts&&(n=g.g.location+"");var e=g.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var i=e.getElementsByTagName("script");if(i.length)for(var t=i.length-1;t>-1&&!n;)n=i[t--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),g.p=n})(),g.b=document.baseURI||self.location.href,g.nc=void 0,n=g(379),e=g.n(n),i=g(795),t=g.n(i),r=g(569),o=g.n(r),a=g(565),l=g.n(a),s=g(216),c=g.n(s),d=g(589),p=g.n(d),f=g(373),(v={}).styleTagTransform=p(),v.setAttributes=l(),v.insert=o().bind(null,"head"),v.domAPI=t(),v.insertStyleElement=c(),e()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals,document.querySelector("#content").innerHTML='<nav id="main-nav">\n    <a class="logo" href="/">\n        <img src="pizzeria-logo.svg" alt="pizzeria-logo">\n        <div>Fancy</div>\n    </a>\n    <div class="navigation-links">\n        <a href="/" class="nav-element bold"><div>Home</div></a>\n        <a href="/" class="nav-element bold"><div>Menu</div></a>\n        <a href="/" class="nav-element bold"><div>Contact</div></a>\n    </div>\n</nav>\n<div class="first-half">\n    <img src="pizzeria-logo.svg" alt="logo">\n    <div class="white-cover">\n        <div class="fancy">\n            Fancy pizzeria\n        </div>\n        <div>\n            <div>Telephone: <div class="large bold">123 456 789</div></div>\n            <div>Adress: Street 123, Town</div>\n        </div>\n    </div>\n</div>\n<div class="second-half">\n    <div class="larger bold">Top picks:</div>\n    <div class="picks">\n        <div class="pick">\n            <img src="img/991307.jpg" alt="pizza 1">\n            <div class="information-pizza">\n                <div class="large bold">Good pizza</div>\n                <ul>\n                    <li>pepperoni</li>\n                    <li>mushrooms</li>\n                    <li>mozzarella</li>\n                    <li>olives</li>\n                </ul>\n                <div class="price large bolder">7,20€</div>\n            </div>\n        </div>\n        <div class="pick">\n            <img src="img/delicious-pizza-pepperoni-pizza-wallpaper-preview.jpg" alt="pizza 2">\n            <div class="information-pizza">\n                <div class="large bold">Better pizza</div>\n                <ul>\n                    <li>pepperoni</li>\n                    <li>mushrooms</li>\n                    <li>mozzarella</li>\n                    <li>olives</li>\n                </ul>\n                <div class="price large bolder">7,20€</div>\n            </div>\n        </div>\n        <div class="pick">\n            <img src="img/991307.jpg" alt="pizza 1">\n            <div class="information-pizza">\n                <div class="large bold">Good pizza</div>\n                <ul>\n                    <li>pepperoni</li>\n                    <li>mushrooms</li>\n                    <li>mozzarella</li>\n                    <li>olives</li>\n                </ul>\n                <div class="price large bolder">7,20€</div>\n            </div>\n        </div>\n        <div class="pick">\n            <img src="img/991307.jpg" alt="pizza 1">\n            <div class="information-pizza">\n                <div class="large bold">Good pizza</div>\n                <ul>\n                    <li>pepperoni</li>\n                    <li>mushrooms</li>\n                    <li>mozzarella</li>\n                    <li>olives</li>\n                </ul>\n                <div class="price large bolder">7,20€</div>\n            </div>\n        </div>\n        <div class="pick">\n            <img src="img/delicious-pizza-pepperoni-pizza-wallpaper-preview.jpg" alt="pizza 2">\n            <div class="information-pizza">\n                <div class="large bold">Better pizza</div>\n                <ul>\n                    <li>pepperoni</li>\n                    <li>mushrooms</li>\n                    <li>mozzarella</li>\n                    <li>olives</li>\n                </ul>\n                <div class="price large bolder">7,20€</div>\n            </div>\n        </div>\n        <div class="pick">\n            <img src="img/991307.jpg" alt="pizza 1">\n            <div class="information-pizza">\n                <div class="large bold">Good pizza</div>\n                <ul>\n                    <li>pepperoni</li>\n                    <li>mushrooms</li>\n                    <li>mozzarella</li>\n                    <li>olives</li>\n                </ul>\n                <div class="price large bolder">7,20€</div>\n            </div>\n        </div>\n    </div>\n</div>\n<footer>\n    <div>Tel: 123 456 789</div>\n    <div>Created by <a href="https://github.com/Michaela565">Michaela Kurcikova</a> 2023</div>\n</footer>'.trim(),console.log("hey, im alive btw")})();