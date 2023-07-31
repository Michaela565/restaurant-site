/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style-copy.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style-copy.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! CrustMiamiRiver.jpeg */ "./src/CrustMiamiRiver.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root{
    --black: #1f1f1f;
    --light-yellow: #F2E7CE;
    --redish-orange: #A53F2B;
    --redish-orange-darkened: #712c20;
    --main-font: 'Noto Sans';
}

*{
    margin: 0;
    padding: 0;
    font-family: var(--main-font), Courier, monospace;
}

body{
    height: 100vh;
    color: var(--black);
}

#content{
    display: grid;
    grid-template-rows: auto 40em auto 3em;
    grid-template-columns: 100%;
    height: 100%;
}

/* ---navigation--- */

#main-nav{
    grid-column: 1 / 4;
    display: grid;
    grid-template-columns: repeat(3, 33.33%);
    grid-template-rows: 3em;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 22px;
    background-color: var(--black);
}

.navigation-links{
    height: 100%;
    grid-column: 2 / 4;
    display: grid;
    grid-template-columns: repeat(3, 33.33%);
}

.nav-element{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s;
}

.nav-element:any-link{
    color: #ffffff;
    text-decoration: none;
}

.nav-element:hover{
    color: var(--light-yellow);
}

.logo{
    display: flex;
    margin-left: 1em;
    align-items: center;
    margin-bottom: 0.5em;
}

.logo> div{
    font-family: 'Abril Fatface', 'Roboto', Courier, monospace;
    font-size: 42px;
    letter-spacing: 3px;
    padding-left: 5px;
}

.logo:any-link{
    color: #ffffff;
    text-decoration: none;
}

#main-nav> .logo:hover{
    color: #ffffff;
}

.logo > img{
    width: 100px;
    height: 60px;
    object-fit: cover;
}

@media screen and (max-width: 770px){
    #main-nav{
        grid-template-columns: 1fr;
        grid-template-rows: repeat(2, 4em);
    }
    .logo{
        grid-row: 1 / 2;
        grid-column: 1 / 2;
        justify-content: center;
    }

    .navigation-links{
        grid-row: 2 / 3;
        grid-column: 1 / 2;
    }
}

/* ---navigation end--- */

/* ---header part---*/

.first-half{
    grid-row: 2 / 3;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    z-index: 10;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-repeat: no-repeat;
    background-size: cover;
}

.first-half> img{
    height: 200px;
    width: 27em;
    object-fit: cover;
}

.white-cover{
    background-color: rgba(242, 231, 206, 0.95) ;
    width: 100%;
    padding: 1em 0;
}


.white-cover> div:last-of-type{
    font-size: 18px;
}

.white-cover> div:last-of-type > div:last-of-type{
    padding-top: 1em;
}

/* ---header part end---*/

/* ---top picks part --- */

.second-half{
    grid-row: 3 / 4;
    padding: 2em;
    z-index: 10;
    background-color: var(--black);
    color: #ffffff;
}

.picks{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 16em;
}

@media screen and (max-width: 770px){
    .picks{
        grid-template-columns: 1fr;
    }
}

/* --- pick card --- */

.pick{
    background-color: var(--light-yellow);
    box-shadow: 7px 8px 8px #000000;
    display: flex;
    justify-content: space-between;
    margin: 1em;
    padding: 1em;
    margin-left: 0;
    transition: all 0.2s;
    border-radius: 10px;
}

.pick> img{
    object-fit: cover;
    width: 40%;
    border-radius: 10px;
}

.information-pizza{
    margin: 1em;
    color: var(--black);
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
}

ul{
    margin: 0.5em 1.5em;
}

.information-pizza> div.price{
    display: flex;
    justify-content: right;
}

/* --- pick card end --- */

/* --- top picks part end --- */

/* --- footer --- */
footer{
    grid-row: 4 / 5;
    color: #ffffff;
    background-color: var(--black);
    display: flex;
    justify-content: space-between;
    padding: 1em;
}

footer>div>a:any-link{
    color: #ffffff;
}

/* --- footer end --- */


/* --- scrollbar --- */

::-webkit-scrollbar {
    width: 15px;
}

::-webkit-scrollbar-track {
    background: var(--black)
}

::-webkit-scrollbar-thumb {
    background: var(--redish-orange);
}

::-webkit-scrollbar-thumb:hover {
    background: var(--redish-orange-darkened);
}

@media screen and (max-width: 770px){
    ::-webkit-scrollbar {
        width: 10px;
    }
}
/* --- scrollbar end --- */

/* --- general font settings --- */

.bold{
    font-weight: 600;

}

.bolder{
    font-weight: 700;
}

.large{
    font-size: 25px;
}

.larger{
    font-size: 32px;
}

.fancy{
    font-family: 'Abril Fatface', 'Roboto', Courier, monospace;
    font-size: 64px;
    padding-bottom: 0.5em;
}

.inline{
    display: inline;
}

/* --- menu page addons --- */

.menu{
    grid-row: 2 / 4;
    padding: 2em;
    z-index: 10;
    background-color: var(--black);
    color: #ffffff;
}

.contacts{
    grid-row: 2 / 4;
    padding: 2em;
    z-index: 10;
    background-color: var(--black);
    color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.contact-list{
    width: max(800px, 20em);
}

.contacts-padding{
    padding-bottom: 1em;
}`, "",{"version":3,"sources":["webpack://./src/style-copy.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap');\n\n:root{\n    --black: #1f1f1f;\n    --light-yellow: #F2E7CE;\n    --redish-orange: #A53F2B;\n    --redish-orange-darkened: #712c20;\n    --main-font: 'Noto Sans';\n}\n\n*{\n    margin: 0;\n    padding: 0;\n    font-family: var(--main-font), Courier, monospace;\n}\n\nbody{\n    height: 100vh;\n    color: var(--black);\n}\n\n#content{\n    display: grid;\n    grid-template-rows: auto 40em auto 3em;\n    grid-template-columns: 100%;\n    height: 100%;\n}\n\n/* ---navigation--- */\n\n#main-nav{\n    grid-column: 1 / 4;\n    display: grid;\n    grid-template-columns: repeat(3, 33.33%);\n    grid-template-rows: 3em;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    font-size: 22px;\n    background-color: var(--black);\n}\n\n.navigation-links{\n    height: 100%;\n    grid-column: 2 / 4;\n    display: grid;\n    grid-template-columns: repeat(3, 33.33%);\n}\n\n.nav-element{\n    height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    transition: all 0.2s;\n}\n\n.nav-element:any-link{\n    color: #ffffff;\n    text-decoration: none;\n}\n\n.nav-element:hover{\n    color: var(--light-yellow);\n}\n\n.logo{\n    display: flex;\n    margin-left: 1em;\n    align-items: center;\n    margin-bottom: 0.5em;\n}\n\n.logo> div{\n    font-family: 'Abril Fatface', 'Roboto', Courier, monospace;\n    font-size: 42px;\n    letter-spacing: 3px;\n    padding-left: 5px;\n}\n\n.logo:any-link{\n    color: #ffffff;\n    text-decoration: none;\n}\n\n#main-nav> .logo:hover{\n    color: #ffffff;\n}\n\n.logo > img{\n    width: 100px;\n    height: 60px;\n    object-fit: cover;\n}\n\n@media screen and (max-width: 770px){\n    #main-nav{\n        grid-template-columns: 1fr;\n        grid-template-rows: repeat(2, 4em);\n    }\n    .logo{\n        grid-row: 1 / 2;\n        grid-column: 1 / 2;\n        justify-content: center;\n    }\n\n    .navigation-links{\n        grid-row: 2 / 3;\n        grid-column: 1 / 2;\n    }\n}\n\n/* ---navigation end--- */\n\n/* ---header part---*/\n\n.first-half{\n    grid-row: 2 / 3;\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    align-items: center;\n    justify-content: center;\n    z-index: 10;\n    background-image: url(\"CrustMiamiRiver.jpeg\");\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n.first-half> img{\n    height: 200px;\n    width: 27em;\n    object-fit: cover;\n}\n\n.white-cover{\n    background-color: rgba(242, 231, 206, 0.95) ;\n    width: 100%;\n    padding: 1em 0;\n}\n\n\n.white-cover> div:last-of-type{\n    font-size: 18px;\n}\n\n.white-cover> div:last-of-type > div:last-of-type{\n    padding-top: 1em;\n}\n\n/* ---header part end---*/\n\n/* ---top picks part --- */\n\n.second-half{\n    grid-row: 3 / 4;\n    padding: 2em;\n    z-index: 10;\n    background-color: var(--black);\n    color: #ffffff;\n}\n\n.picks{\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-auto-rows: 16em;\n}\n\n@media screen and (max-width: 770px){\n    .picks{\n        grid-template-columns: 1fr;\n    }\n}\n\n/* --- pick card --- */\n\n.pick{\n    background-color: var(--light-yellow);\n    box-shadow: 7px 8px 8px #000000;\n    display: flex;\n    justify-content: space-between;\n    margin: 1em;\n    padding: 1em;\n    margin-left: 0;\n    transition: all 0.2s;\n    border-radius: 10px;\n}\n\n.pick> img{\n    object-fit: cover;\n    width: 40%;\n    border-radius: 10px;\n}\n\n.information-pizza{\n    margin: 1em;\n    color: var(--black);\n    display: flex;\n    width: 100%;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\nul{\n    margin: 0.5em 1.5em;\n}\n\n.information-pizza> div.price{\n    display: flex;\n    justify-content: right;\n}\n\n/* --- pick card end --- */\n\n/* --- top picks part end --- */\n\n/* --- footer --- */\nfooter{\n    grid-row: 4 / 5;\n    color: #ffffff;\n    background-color: var(--black);\n    display: flex;\n    justify-content: space-between;\n    padding: 1em;\n}\n\nfooter>div>a:any-link{\n    color: #ffffff;\n}\n\n/* --- footer end --- */\n\n\n/* --- scrollbar --- */\n\n::-webkit-scrollbar {\n    width: 15px;\n}\n\n::-webkit-scrollbar-track {\n    background: var(--black)\n}\n\n::-webkit-scrollbar-thumb {\n    background: var(--redish-orange);\n}\n\n::-webkit-scrollbar-thumb:hover {\n    background: var(--redish-orange-darkened);\n}\n\n@media screen and (max-width: 770px){\n    ::-webkit-scrollbar {\n        width: 10px;\n    }\n}\n/* --- scrollbar end --- */\n\n/* --- general font settings --- */\n\n.bold{\n    font-weight: 600;\n\n}\n\n.bolder{\n    font-weight: 700;\n}\n\n.large{\n    font-size: 25px;\n}\n\n.larger{\n    font-size: 32px;\n}\n\n.fancy{\n    font-family: 'Abril Fatface', 'Roboto', Courier, monospace;\n    font-size: 64px;\n    padding-bottom: 0.5em;\n}\n\n.inline{\n    display: inline;\n}\n\n/* --- menu page addons --- */\n\n.menu{\n    grid-row: 2 / 4;\n    padding: 2em;\n    z-index: 10;\n    background-color: var(--black);\n    color: #ffffff;\n}\n\n.contacts{\n    grid-row: 2 / 4;\n    padding: 2em;\n    z-index: 10;\n    background-color: var(--black);\n    color: #ffffff;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.contact-list{\n    width: max(800px, 20em);\n}\n\n.contacts-padding{\n    padding-bottom: 1em;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style-copy.css":
/*!****************************!*\
  !*** ./src/style-copy.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_copy_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style-copy.css */ "./node_modules/css-loader/dist/cjs.js!./src/style-copy.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_copy_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_copy_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_copy_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_copy_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contacts.js":
/*!*************************!*\
  !*** ./src/contacts.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createContactsPage: () => (/* binding */ createContactsPage)
/* harmony export */ });
const createContactsPage = (() => {

    const createContactsStatic = () => {
        const content = document.querySelector('#content');
        let html = `<nav id="main-nav">
        <a class="logo" href="javascript:;">
            <img src="pizzeria-logo.svg" alt="pizzeria-logo">
            <div>Fancy</div>
        </a>
        <div class="navigation-links">
            <a href="javascript:;" class="nav-element bold" data-page="home">Home</a>
            <a href="javascript:;" class="nav-element bold" data-page="menu">Menu</a>
            <a href="javascript:;" class="nav-element bold" data-page="contact">Contact</a>
        </div>
    </nav>
    <div class="contacts">
        <div class="larger bold">Contact:</div>
        <div class="contact-list">
            <div class="pick">
                <div class="information-pizza">
                    <ul>
                        <li class="contacts-padding"><div class="bold inline">Telephone:</div> 123 456 789</li>
                        <li class="contacts-padding"><div class="bold inline">Email:</div> randomemail123@randomdomain.com</li>
                        <li class="contacts-padding"><div class="bold inline">Address:</div> Random Street 123, Random City, Random </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <footer>
        <div>Tel: 123 456 789</div>
        <div>Created by <a href="https://github.com/Michaela565">Michaela Kurcikova</a> 2023</div>
    </footer>`;

        content.innerHTML = html.trim();
    }

    return {
        createContactsStatic,
    }
})();



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHomePage: () => (/* binding */ createHomePage)
/* harmony export */ });
const createHomePage = (() =>{

    const createHomeStatic = () => {
        const content = document.querySelector('#content');
        let html = `<nav id="main-nav">
        <a class="logo" href="javascript:;">
            <img src="pizzeria-logo.svg" alt="pizzeria-logo">
            <div>Fancy</div>
        </a>
        <div class="navigation-links">
            <a href="javascript:;" class="nav-element bold" data-page="home">Home</a>
            <a href="javascript:;" class="nav-element bold" data-page="menu">Menu</a>
            <a href="javascript:;" class="nav-element bold" data-page="contact">Contact</a>
        </div>
    </nav>
    <div class="first-half">
        <img src="pizzeria-logo.svg" alt="logo">
        <div class="white-cover">
            <div class="fancy">
                Fancy pizzeria
            </div>
            <div>
                <div>Telephone: <div class="large bold">123 456 789</div></div>
                <div>Adress: Street 123, Town</div>
            </div>
        </div>
    </div>
    <div class="second-half">
        <div class="larger bold">Top picks:</div>
        <div class="picks">
            <div class="pick">
                <img src="img/991307.jpg" alt="pizza 1">
                <div class="information-pizza">
                    <div class="large bold">Good pizza</div>
                    <ul>
                        <li>pepperoni</li>
                        <li>mushrooms</li>
                        <li>mozzarella</li>
                        <li>olives</li>
                    </ul>
                    <div class="price large bolder">7,20€</div>
                </div>
            </div>
            <div class="pick">
                <img src="img/delicious-pizza-pepperoni-pizza-wallpaper-preview.jpg" alt="pizza 2">
                <div class="information-pizza">
                    <div class="large bold">Better pizza</div>
                    <ul>
                        <li>pepperoni</li>
                        <li>mushrooms</li>
                        <li>mozzarella</li>
                        <li>olives</li>
                    </ul>
                    <div class="price large bolder">7,20€</div>
                </div>
            </div>
            <div class="pick">
                <img src="img/991307.jpg" alt="pizza 1">
                <div class="information-pizza">
                    <div class="large bold">Good pizza</div>
                    <ul>
                        <li>pepperoni</li>
                        <li>mushrooms</li>
                        <li>mozzarella</li>
                        <li>olives</li>
                    </ul>
                    <div class="price large bolder">7,20€</div>
                </div>
            </div>
            <div class="pick">
                <img src="img/991307.jpg" alt="pizza 1">
                <div class="information-pizza">
                    <div class="large bold">Good pizza</div>
                    <ul>
                        <li>pepperoni</li>
                        <li>mushrooms</li>
                        <li>mozzarella</li>
                        <li>olives</li>
                    </ul>
                    <div class="price large bolder">7,20€</div>
                </div>
            </div>
            <div class="pick">
                <img src="img/delicious-pizza-pepperoni-pizza-wallpaper-preview.jpg" alt="pizza 2">
                <div class="information-pizza">
                    <div class="large bold">Better pizza</div>
                    <ul>
                        <li>pepperoni</li>
                        <li>mushrooms</li>
                        <li>mozzarella</li>
                        <li>olives</li>
                    </ul>
                    <div class="price large bolder">7,20€</div>
                </div>
            </div>
            <div class="pick">
                <img src="img/991307.jpg" alt="pizza 1">
                <div class="information-pizza">
                    <div class="large bold">Good pizza</div>
                    <ul>
                        <li>pepperoni</li>
                        <li>mushrooms</li>
                        <li>mozzarella</li>
                        <li>olives</li>
                    </ul>
                    <div class="price large bolder">7,20€</div>
                </div>
            </div>
        </div>
    </div>
    <footer>
        <div>Tel: 123 456 789</div>
        <div>Created by <a href="https://github.com/Michaela565">Michaela Kurcikova</a> 2023</div>
    </footer>`;

        content.innerHTML = html.trim();
    }
    
    return{
        createHomeStatic
    }

})();





/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMenuPage: () => (/* binding */ createMenuPage)
/* harmony export */ });
const createMenuPage = (() => {
    
    const createMenuStatic = () => {
        const content = document.querySelector('#content');
        let html = `<nav id="main-nav">
        <a class="logo" href="javascript:;">
            <img src="pizzeria-logo.svg" alt="pizzeria-logo">
            <div>Fancy</div>
        </a>
        <div class="navigation-links">
            <a href="javascript:;" class="nav-element bold" data-page="home">Home</a>
            <a href="javascript:;" class="nav-element bold" data-page="menu">Menu</a>
            <a href="javascript:;" class="nav-element bold" data-page="contact">Contact</a>
        </div>
    </nav>
    <div class="menu">
        <div class="larger bold">Top picks:</div>
        <div class="picks">
            <div class="pick">
                <img src="img/991307.jpg" alt="pizza 1">
                <div class="information-pizza">
                    <div class="large bold">Good pizza</div>
                    <ul>
                        <li>pepperoni</li>
                        <li>mushrooms</li>
                        <li>mozzarella</li>
                        <li>olives</li>
                    </ul>
                    <div class="price large bolder">7,20€</div>
                </div>
            </div>
            <div class="pick">
                <img src="img/delicious-pizza-pepperoni-pizza-wallpaper-preview.jpg" alt="pizza 2">
                <div class="information-pizza">
                    <div class="large bold">Better pizza</div>
                    <ul>
                        <li>pepperoni</li>
                        <li>mushrooms</li>
                        <li>mozzarella</li>
                        <li>olives</li>
                    </ul>
                    <div class="price large bolder">7,20€</div>
                </div>
            </div>
            <div class="pick">
                <img src="img/991307.jpg" alt="pizza 1">
                <div class="information-pizza">
                    <div class="large bold">Good pizza</div>
                    <ul>
                        <li>pepperoni</li>
                        <li>mushrooms</li>
                        <li>mozzarella</li>
                        <li>olives</li>
                    </ul>
                    <div class="price large bolder">7,20€</div>
                </div>
            </div>
            <div class="pick">
                <img src="img/991307.jpg" alt="pizza 1">
                <div class="information-pizza">
                    <div class="large bold">Good pizza</div>
                    <ul>
                        <li>pepperoni</li>
                        <li>mushrooms</li>
                        <li>mozzarella</li>
                        <li>olives</li>
                    </ul>
                    <div class="price large bolder">7,20€</div>
                </div>
            </div>
            <div class="pick">
                <img src="img/delicious-pizza-pepperoni-pizza-wallpaper-preview.jpg" alt="pizza 2">
                <div class="information-pizza">
                    <div class="large bold">Better pizza</div>
                    <ul>
                        <li>pepperoni</li>
                        <li>mushrooms</li>
                        <li>mozzarella</li>
                        <li>olives</li>
                    </ul>
                    <div class="price large bolder">7,20€</div>
                </div>
            </div>
            <div class="pick">
                <img src="img/991307.jpg" alt="pizza 1">
                <div class="information-pizza">
                    <div class="large bold">Good pizza</div>
                    <ul>
                        <li>pepperoni</li>
                        <li>mushrooms</li>
                        <li>mozzarella</li>
                        <li>olives</li>
                    </ul>
                    <div class="price large bolder">7,20€</div>
                </div>
            </div>
        </div>
    </div>
    <footer>
        <div>Tel: 123 456 789</div>
        <div>Created by <a href="https://github.com/Michaela565">Michaela Kurcikova</a> 2023</div>
    </footer> `;

        content.innerHTML = html.trim();
    }
    return{
        createMenuStatic
    }
})();



/***/ }),

/***/ "./src/CrustMiamiRiver.jpeg":
/*!**********************************!*\
  !*** ./src/CrustMiamiRiver.jpeg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e2832d09196c9d3c6a0a.jpeg";

/***/ }),

/***/ "./src/pizzas.json":
/*!*************************!*\
  !*** ./src/pizzas.json ***!
  \*************************/
/***/ ((module) => {

module.exports = JSON.parse('{"pizzas":[{"id":1,"name":"Neapolitan","ingredients":["tomato","cheese","spinach"],"imagePath":" img/991307.jpg ","price":"7, 20 €"},{"id":2,"name":"Margherita","ingredients":["tomato","cheese","spinach"],"price":"7, 20 €"},{"id":3,"name":"Hawai","ingredients":["tomato","cheese","spinach"],"price":"7, 20 €"}]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_copy_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style-copy.css */ "./src/style-copy.css");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contacts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contacts */ "./src/contacts.js");
/* harmony import */ var _pizzas_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pizzas.json */ "./src/pizzas.json");






console.log("hey, im alive btw");

const init = (() => {

    const navAddListeners = () => {
        const navElements = document.querySelectorAll(".nav-element");

        navElements.forEach(element => addEventListener("click", renderPage));
    };

    const renderPage = (e) => {
        //e.preventDeafult();

        const element = e.target;

        console.log(element);
        console.log(element.dataset.page);
        switch (element.dataset.page) {
            case "home":
                _home__WEBPACK_IMPORTED_MODULE_1__.createHomePage.createHomeStatic();
                navAddListeners();
                break;
        
            case "menu":
                _menu__WEBPACK_IMPORTED_MODULE_2__.createMenuPage.createMenuStatic();
                navAddListeners();
                break;

            case "contact":
                _contacts__WEBPACK_IMPORTED_MODULE_3__.createContactsPage.createContactsStatic();
                navAddListeners();
                break;

            default:
                _home__WEBPACK_IMPORTED_MODULE_1__.createHomePage.createHomeStatic();
                navAddListeners();
                break;
        }
    }

    _home__WEBPACK_IMPORTED_MODULE_1__.createHomePage.createHomeStatic();
    navAddListeners();
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHVIQUF1QztBQUNuRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLDJJQUEySSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sb0JBQW9CO0FBQy9NLGtIQUFrSCxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLGtCQUFrQjtBQUNoSyx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8scUZBQXFGLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLGFBQWEsTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksTUFBTSxNQUFNLGFBQWEsY0FBYyxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxRQUFRLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsY0FBYyxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxNQUFNLE1BQU0sYUFBYSxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLGFBQWEsY0FBYyxhQUFhLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxjQUFjLGNBQWMsTUFBTSxVQUFVLE1BQU0sS0FBSyxLQUFLLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLGFBQWEsY0FBYyxNQUFNLGFBQWEsT0FBTyxL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QUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDLGlDQUFpQztBQUNqQyxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7QUFFc0I7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1SHZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakMsaUNBQWlDO0FBQ2pDLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNUdEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBMEI7QUFDYztBQUNGO0FBQ1E7QUFDYjs7QUFFakM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsaURBQWM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsaURBQWM7QUFDOUI7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQix5REFBa0I7QUFDbEM7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixpREFBYztBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLGlEQUFjO0FBQ2xCO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtc2l0ZS8uL3NyYy9zdHlsZS1jb3B5LmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXNpdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtc2l0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1zaXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1zaXRlLy4vc3JjL3N0eWxlLWNvcHkuY3NzPzc4YzMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1zaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtc2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1zaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtc2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXNpdGUvLi9zcmMvY29udGFjdHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1zaXRlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1zaXRlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1zaXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtc2l0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXNpdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtc2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtc2l0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtc2l0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtc2l0ZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXNpdGUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1zaXRlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXNpdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIkNydXN0TWlhbWlSaXZlci5qcGVnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BYnJpbCtGYXRmYWNlJmZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rU2Fuczp3Z2h0QDEwMDsyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMDs4MDA7OTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290e1xuICAgIC0tYmxhY2s6ICMxZjFmMWY7XG4gICAgLS1saWdodC15ZWxsb3c6ICNGMkU3Q0U7XG4gICAgLS1yZWRpc2gtb3JhbmdlOiAjQTUzRjJCO1xuICAgIC0tcmVkaXNoLW9yYW5nZS1kYXJrZW5lZDogIzcxMmMyMDtcbiAgICAtLW1haW4tZm9udDogJ05vdG8gU2Fucyc7XG59XG5cbip7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCksIENvdXJpZXIsIG1vbm9zcGFjZTtcbn1cblxuYm9keXtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XG59XG5cbiNjb250ZW50e1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDQwZW0gYXV0byAzZW07XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLyogLS0tbmF2aWdhdGlvbi0tLSAqL1xuXG4jbWFpbi1uYXZ7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyA0O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMzMuMzMlKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDNlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xufVxuXG4ubmF2aWdhdGlvbi1saW5rc3tcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyA0O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMzMuMzMlKTtcbn1cblxuLm5hdi1lbGVtZW50e1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG59XG5cbi5uYXYtZWxlbWVudDphbnktbGlua3tcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5uYXYtZWxlbWVudDpob3ZlcntcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQteWVsbG93KTtcbn1cblxuLmxvZ297XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG59XG5cbi5sb2dvPiBkaXZ7XG4gICAgZm9udC1mYW1pbHk6ICdBYnJpbCBGYXRmYWNlJywgJ1JvYm90bycsIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgICBmb250LXNpemU6IDQycHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxuLmxvZ286YW55LWxpbmt7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4jbWFpbi1uYXY+IC5sb2dvOmhvdmVye1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4ubG9nbyA+IGltZ3tcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NzBweCl7XG4gICAgI21haW4tbmF2e1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgNGVtKTtcbiAgICB9XG4gICAgLmxvZ297XG4gICAgICAgIGdyaWQtcm93OiAxIC8gMjtcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAubmF2aWdhdGlvbi1saW5rc3tcbiAgICAgICAgZ3JpZC1yb3c6IDIgLyAzO1xuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDI7XG4gICAgfVxufVxuXG4vKiAtLS1uYXZpZ2F0aW9uIGVuZC0tLSAqL1xuXG4vKiAtLS1oZWFkZXIgcGFydC0tLSovXG5cbi5maXJzdC1oYWxme1xuICAgIGdyaWQtcm93OiAyIC8gMztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgei1pbmRleDogMTA7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmZpcnN0LWhhbGY+IGltZ3tcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIHdpZHRoOiAyN2VtO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4ud2hpdGUtY292ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDIsIDIzMSwgMjA2LCAwLjk1KSA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMWVtIDA7XG59XG5cblxuLndoaXRlLWNvdmVyPiBkaXY6bGFzdC1vZi10eXBle1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLndoaXRlLWNvdmVyPiBkaXY6bGFzdC1vZi10eXBlID4gZGl2Omxhc3Qtb2YtdHlwZXtcbiAgICBwYWRkaW5nLXRvcDogMWVtO1xufVxuXG4vKiAtLS1oZWFkZXIgcGFydCBlbmQtLS0qL1xuXG4vKiAtLS10b3AgcGlja3MgcGFydCAtLS0gKi9cblxuLnNlY29uZC1oYWxme1xuICAgIGdyaWQtcm93OiAzIC8gNDtcbiAgICBwYWRkaW5nOiAyZW07XG4gICAgei1pbmRleDogMTA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4ucGlja3N7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgIGdyaWQtYXV0by1yb3dzOiAxNmVtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NzBweCl7XG4gICAgLnBpY2tze1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICB9XG59XG5cbi8qIC0tLSBwaWNrIGNhcmQgLS0tICovXG5cbi5waWNre1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXllbGxvdyk7XG4gICAgYm94LXNoYWRvdzogN3B4IDhweCA4cHggIzAwMDAwMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW46IDFlbTtcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnBpY2s+IGltZ3tcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB3aWR0aDogNDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5pbmZvcm1hdGlvbi1waXp6YXtcbiAgICBtYXJnaW46IDFlbTtcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbnVse1xuICAgIG1hcmdpbjogMC41ZW0gMS41ZW07XG59XG5cbi5pbmZvcm1hdGlvbi1waXp6YT4gZGl2LnByaWNle1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiByaWdodDtcbn1cblxuLyogLS0tIHBpY2sgY2FyZCBlbmQgLS0tICovXG5cbi8qIC0tLSB0b3AgcGlja3MgcGFydCBlbmQgLS0tICovXG5cbi8qIC0tLSBmb290ZXIgLS0tICovXG5mb290ZXJ7XG4gICAgZ3JpZC1yb3c6IDQgLyA1O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAxZW07XG59XG5cbmZvb3Rlcj5kaXY+YTphbnktbGlua3tcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLyogLS0tIGZvb3RlciBlbmQgLS0tICovXG5cblxuLyogLS0tIHNjcm9sbGJhciAtLS0gKi9cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDE1cHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJsYWNrKVxufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1yZWRpc2gtb3JhbmdlKTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tcmVkaXNoLW9yYW5nZS1kYXJrZW5lZCk7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc3MHB4KXtcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgd2lkdGg6IDEwcHg7XG4gICAgfVxufVxuLyogLS0tIHNjcm9sbGJhciBlbmQgLS0tICovXG5cbi8qIC0tLSBnZW5lcmFsIGZvbnQgc2V0dGluZ3MgLS0tICovXG5cbi5ib2xke1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbn1cblxuLmJvbGRlcntcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG4ubGFyZ2V7XG4gICAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4ubGFyZ2Vye1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbn1cblxuLmZhbmN5e1xuICAgIGZvbnQtZmFtaWx5OiAnQWJyaWwgRmF0ZmFjZScsICdSb2JvdG8nLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gICAgZm9udC1zaXplOiA2NHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcbn1cblxuLmlubGluZXtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi8qIC0tLSBtZW51IHBhZ2UgYWRkb25zIC0tLSAqL1xuXG4ubWVudXtcbiAgICBncmlkLXJvdzogMiAvIDQ7XG4gICAgcGFkZGluZzogMmVtO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmNvbnRhY3Rze1xuICAgIGdyaWQtcm93OiAyIC8gNDtcbiAgICBwYWRkaW5nOiAyZW07XG4gICAgei1pbmRleDogMTA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29udGFjdC1saXN0e1xuICAgIHdpZHRoOiBtYXgoODAwcHgsIDIwZW0pO1xufVxuXG4uY29udGFjdHMtcGFkZGluZ3tcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLWNvcHkuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsaUNBQWlDO0lBQ2pDLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsaURBQWlEO0FBQ3JEOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsMkJBQTJCO0lBQzNCLFlBQVk7QUFDaEI7O0FBRUEscUJBQXFCOztBQUVyQjtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isd0NBQXdDO0lBQ3hDLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxj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O0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BYnJpbCtGYXRmYWNlJmZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcCcpO1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rU2Fuczp3Z2h0QDEwMDsyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMDs4MDA7OTAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbjpyb290e1xcbiAgICAtLWJsYWNrOiAjMWYxZjFmO1xcbiAgICAtLWxpZ2h0LXllbGxvdzogI0YyRTdDRTtcXG4gICAgLS1yZWRpc2gtb3JhbmdlOiAjQTUzRjJCO1xcbiAgICAtLXJlZGlzaC1vcmFuZ2UtZGFya2VuZWQ6ICM3MTJjMjA7XFxuICAgIC0tbWFpbi1mb250OiAnTm90byBTYW5zJztcXG59XFxuXFxuKntcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KSwgQ291cmllciwgbW9ub3NwYWNlO1xcbn1cXG5cXG5ib2R5e1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xcbn1cXG5cXG4jY29udGVudHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDQwZW0gYXV0byAzZW07XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4vKiAtLS1uYXZpZ2F0aW9uLS0tICovXFxuXFxuI21haW4tbmF2e1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDMzLjMzJSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogM2VtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcXG59XFxuXFxuLm5hdmlnYXRpb24tbGlua3N7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyA0O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAzMy4zMyUpO1xcbn1cXG5cXG4ubmF2LWVsZW1lbnR7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcXG59XFxuXFxuLm5hdi1lbGVtZW50OmFueS1saW5re1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4ubmF2LWVsZW1lbnQ6aG92ZXJ7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC15ZWxsb3cpO1xcbn1cXG5cXG4ubG9nb3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxufVxcblxcbi5sb2dvPiBkaXZ7XFxuICAgIGZvbnQtZmFtaWx5OiAnQWJyaWwgRmF0ZmFjZScsICdSb2JvdG8nLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuICAgIGZvbnQtc2l6ZTogNDJweDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxufVxcblxcbi5sb2dvOmFueS1saW5re1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4jbWFpbi1uYXY+IC5sb2dvOmhvdmVye1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLmxvZ28gPiBpbWd7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzcwcHgpe1xcbiAgICAjbWFpbi1uYXZ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDRlbSk7XFxuICAgIH1cXG4gICAgLmxvZ297XFxuICAgICAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAubmF2aWdhdGlvbi1saW5rc3tcXG4gICAgICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgfVxcbn1cXG5cXG4vKiAtLS1uYXZpZ2F0aW9uIGVuZC0tLSAqL1xcblxcbi8qIC0tLWhlYWRlciBwYXJ0LS0tKi9cXG5cXG4uZmlyc3QtaGFsZntcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB6LWluZGV4OiAxMDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJDcnVzdE1pYW1pUml2ZXIuanBlZ1xcXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4uZmlyc3QtaGFsZj4gaW1ne1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICB3aWR0aDogMjdlbTtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbi53aGl0ZS1jb3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDIsIDIzMSwgMjA2LCAwLjk1KSA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxZW0gMDtcXG59XFxuXFxuXFxuLndoaXRlLWNvdmVyPiBkaXY6bGFzdC1vZi10eXBle1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi53aGl0ZS1jb3Zlcj4gZGl2Omxhc3Qtb2YtdHlwZSA+IGRpdjpsYXN0LW9mLXR5cGV7XFxuICAgIHBhZGRpbmctdG9wOiAxZW07XFxufVxcblxcbi8qIC0tLWhlYWRlciBwYXJ0IGVuZC0tLSovXFxuXFxuLyogLS0tdG9wIHBpY2tzIHBhcnQgLS0tICovXFxuXFxuLnNlY29uZC1oYWxme1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgIHBhZGRpbmc6IDJlbTtcXG4gICAgei1pbmRleDogMTA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi5waWNrc3tcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDE2ZW07XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc3MHB4KXtcXG4gICAgLnBpY2tze1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIH1cXG59XFxuXFxuLyogLS0tIHBpY2sgY2FyZCAtLS0gKi9cXG5cXG4ucGlja3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQteWVsbG93KTtcXG4gICAgYm94LXNoYWRvdzogN3B4IDhweCA4cHggIzAwMDAwMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW46IDFlbTtcXG4gICAgcGFkZGluZzogMWVtO1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5waWNrPiBpbWd7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uaW5mb3JtYXRpb24tcGl6emF7XFxuICAgIG1hcmdpbjogMWVtO1xcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG51bHtcXG4gICAgbWFyZ2luOiAwLjVlbSAxLjVlbTtcXG59XFxuXFxuLmluZm9ybWF0aW9uLXBpenphPiBkaXYucHJpY2V7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogcmlnaHQ7XFxufVxcblxcbi8qIC0tLSBwaWNrIGNhcmQgZW5kIC0tLSAqL1xcblxcbi8qIC0tLSB0b3AgcGlja3MgcGFydCBlbmQgLS0tICovXFxuXFxuLyogLS0tIGZvb3RlciAtLS0gKi9cXG5mb290ZXJ7XFxuICAgIGdyaWQtcm93OiA0IC8gNTtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAxZW07XFxufVxcblxcbmZvb3Rlcj5kaXY+YTphbnktbGlua3tcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi8qIC0tLSBmb290ZXIgZW5kIC0tLSAqL1xcblxcblxcbi8qIC0tLSBzY3JvbGxiYXIgLS0tICovXFxuXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIHdpZHRoOiAxNXB4O1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmxhY2spXFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1yZWRpc2gtb3JhbmdlKTtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXJlZGlzaC1vcmFuZ2UtZGFya2VuZWQpO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NzBweCl7XFxuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICAgICAgd2lkdGg6IDEwcHg7XFxuICAgIH1cXG59XFxuLyogLS0tIHNjcm9sbGJhciBlbmQgLS0tICovXFxuXFxuLyogLS0tIGdlbmVyYWwgZm9udCBzZXR0aW5ncyAtLS0gKi9cXG5cXG4uYm9sZHtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG5cXG59XFxuXFxuLmJvbGRlcntcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmxhcmdle1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxufVxcblxcbi5sYXJnZXJ7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG59XFxuXFxuLmZhbmN5e1xcbiAgICBmb250LWZhbWlseTogJ0FicmlsIEZhdGZhY2UnLCAnUm9ib3RvJywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgICBmb250LXNpemU6IDY0cHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcXG59XFxuXFxuLmlubGluZXtcXG4gICAgZGlzcGxheTogaW5saW5lO1xcbn1cXG5cXG4vKiAtLS0gbWVudSBwYWdlIGFkZG9ucyAtLS0gKi9cXG5cXG4ubWVudXtcXG4gICAgZ3JpZC1yb3c6IDIgLyA0O1xcbiAgICBwYWRkaW5nOiAyZW07XFxuICAgIHotaW5kZXg6IDEwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4uY29udGFjdHN7XFxuICAgIGdyaWQtcm93OiAyIC8gNDtcXG4gICAgcGFkZGluZzogMmVtO1xcbiAgICB6LWluZGV4OiAxMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhY3QtbGlzdHtcXG4gICAgd2lkdGg6IG1heCg4MDBweCwgMjBlbSk7XFxufVxcblxcbi5jb250YWN0cy1wYWRkaW5ne1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUtY29weS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLWNvcHkuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBjcmVhdGVDb250YWN0c1BhZ2UgPSAoKCkgPT4ge1xuXG4gICAgY29uc3QgY3JlYXRlQ29udGFjdHNTdGF0aWMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgICAgICBsZXQgaHRtbCA9IGA8bmF2IGlkPVwibWFpbi1uYXZcIj5cbiAgICAgICAgPGEgY2xhc3M9XCJsb2dvXCIgaHJlZj1cImphdmFzY3JpcHQ6O1wiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCJwaXp6ZXJpYS1sb2dvLnN2Z1wiIGFsdD1cInBpenplcmlhLWxvZ29cIj5cbiAgICAgICAgICAgIDxkaXY+RmFuY3k8L2Rpdj5cbiAgICAgICAgPC9hPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibmF2aWdhdGlvbi1saW5rc1wiPlxuICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIGNsYXNzPVwibmF2LWVsZW1lbnQgYm9sZFwiIGRhdGEtcGFnZT1cImhvbWVcIj5Ib21lPC9hPlxuICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIGNsYXNzPVwibmF2LWVsZW1lbnQgYm9sZFwiIGRhdGEtcGFnZT1cIm1lbnVcIj5NZW51PC9hPlxuICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIGNsYXNzPVwibmF2LWVsZW1lbnQgYm9sZFwiIGRhdGEtcGFnZT1cImNvbnRhY3RcIj5Db250YWN0PC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L25hdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFjdHNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxhcmdlciBib2xkXCI+Q29udGFjdDo8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3QtbGlzdFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBpY2tcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mb3JtYXRpb24tcGl6emFcIj5cbiAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiY29udGFjdHMtcGFkZGluZ1wiPjxkaXYgY2xhc3M9XCJib2xkIGlubGluZVwiPlRlbGVwaG9uZTo8L2Rpdj4gMTIzIDQ1NiA3ODk8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiY29udGFjdHMtcGFkZGluZ1wiPjxkaXYgY2xhc3M9XCJib2xkIGlubGluZVwiPkVtYWlsOjwvZGl2PiByYW5kb21lbWFpbDEyM0ByYW5kb21kb21haW4uY29tPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImNvbnRhY3RzLXBhZGRpbmdcIj48ZGl2IGNsYXNzPVwiYm9sZCBpbmxpbmVcIj5BZGRyZXNzOjwvZGl2PiBSYW5kb20gU3RyZWV0IDEyMywgUmFuZG9tIENpdHksIFJhbmRvbSA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxmb290ZXI+XG4gICAgICAgIDxkaXY+VGVsOiAxMjMgNDU2IDc4OTwvZGl2PlxuICAgICAgICA8ZGl2PkNyZWF0ZWQgYnkgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9NaWNoYWVsYTU2NVwiPk1pY2hhZWxhIEt1cmNpa292YTwvYT4gMjAyMzwvZGl2PlxuICAgIDwvZm9vdGVyPmA7XG5cbiAgICAgICAgY29udGVudC5pbm5lckhUTUwgPSBodG1sLnRyaW0oKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjcmVhdGVDb250YWN0c1N0YXRpYyxcbiAgICB9XG59KSgpO1xuXG5leHBvcnQge2NyZWF0ZUNvbnRhY3RzUGFnZX0iLCJjb25zdCBjcmVhdGVIb21lUGFnZSA9ICgoKSA9PntcblxuICAgIGNvbnN0IGNyZWF0ZUhvbWVTdGF0aWMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgICAgICBsZXQgaHRtbCA9IGA8bmF2IGlkPVwibWFpbi1uYXZcIj5cbiAgICAgICAgPGEgY2xhc3M9XCJsb2dvXCIgaHJlZj1cImphdmFzY3JpcHQ6O1wiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCJwaXp6ZXJpYS1sb2dvLnN2Z1wiIGFsdD1cInBpenplcmlhLWxvZ29cIj5cbiAgICAgICAgICAgIDxkaXY+RmFuY3k8L2Rpdj5cbiAgICAgICAgPC9hPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibmF2aWdhdGlvbi1saW5rc1wiPlxuICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIGNsYXNzPVwibmF2LWVsZW1lbnQgYm9sZFwiIGRhdGEtcGFnZT1cImhvbWVcIj5Ib21lPC9hPlxuICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIGNsYXNzPVwibmF2LWVsZW1lbnQgYm9sZFwiIGRhdGEtcGFnZT1cIm1lbnVcIj5NZW51PC9hPlxuICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIGNsYXNzPVwibmF2LWVsZW1lbnQgYm9sZFwiIGRhdGEtcGFnZT1cImNvbnRhY3RcIj5Db250YWN0PC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L25hdj5cbiAgICA8ZGl2IGNsYXNzPVwiZmlyc3QtaGFsZlwiPlxuICAgICAgICA8aW1nIHNyYz1cInBpenplcmlhLWxvZ28uc3ZnXCIgYWx0PVwibG9nb1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwid2hpdGUtY292ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmYW5jeVwiPlxuICAgICAgICAgICAgICAgIEZhbmN5IHBpenplcmlhXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5UZWxlcGhvbmU6IDxkaXYgY2xhc3M9XCJsYXJnZSBib2xkXCI+MTIzIDQ1NiA3ODk8L2Rpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PkFkcmVzczogU3RyZWV0IDEyMywgVG93bjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJzZWNvbmQtaGFsZlwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibGFyZ2VyIGJvbGRcIj5Ub3AgcGlja3M6PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwaWNrc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBpY2tcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy85OTEzMDcuanBnXCIgYWx0PVwicGl6emEgMVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvcm1hdGlvbi1waXp6YVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGFyZ2UgYm9sZFwiPkdvb2QgcGl6emE8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPnBlcHBlcm9uaTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+bXVzaHJvb21zPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5tb3p6YXJlbGxhPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5vbGl2ZXM8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJpY2UgbGFyZ2UgYm9sZGVyXCI+NywyMOKCrDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGlja1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2RlbGljaW91cy1waXp6YS1wZXBwZXJvbmktcGl6emEtd2FsbHBhcGVyLXByZXZpZXcuanBnXCIgYWx0PVwicGl6emEgMlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvcm1hdGlvbi1waXp6YVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGFyZ2UgYm9sZFwiPkJldHRlciBwaXp6YTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+cGVwcGVyb25pPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5tdXNocm9vbXM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPm1venphcmVsbGE8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPm9saXZlczwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmljZSBsYXJnZSBib2xkZXJcIj43LDIw4oKsPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwaWNrXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvOTkxMzA3LmpwZ1wiIGFsdD1cInBpenphIDFcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mb3JtYXRpb24tcGl6emFcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxhcmdlIGJvbGRcIj5Hb29kIHBpenphPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5wZXBwZXJvbmk8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPm11c2hyb29tczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+bW96emFyZWxsYTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+b2xpdmVzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByaWNlIGxhcmdlIGJvbGRlclwiPjcsMjDigqw8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBpY2tcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy85OTEzMDcuanBnXCIgYWx0PVwicGl6emEgMVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvcm1hdGlvbi1waXp6YVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGFyZ2UgYm9sZFwiPkdvb2QgcGl6emE8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPnBlcHBlcm9uaTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+bXVzaHJvb21zPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5tb3p6YXJlbGxhPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5vbGl2ZXM8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJpY2UgbGFyZ2UgYm9sZGVyXCI+NywyMOKCrDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGlja1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2RlbGljaW91cy1waXp6YS1wZXBwZXJvbmktcGl6emEtd2FsbHBhcGVyLXByZXZpZXcuanBnXCIgYWx0PVwicGl6emEgMlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvcm1hdGlvbi1waXp6YVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGFyZ2UgYm9sZFwiPkJldHRlciBwaXp6YTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+cGVwcGVyb25pPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5tdXNocm9vbXM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPm1venphcmVsbGE8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPm9saXZlczwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmljZSBsYXJnZSBib2xkZXJcIj43LDIw4oKsPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwaWNrXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvOTkxMzA3LmpwZ1wiIGFsdD1cInBpenphIDFcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mb3JtYXRpb24tcGl6emFcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxhcmdlIGJvbGRcIj5Hb29kIHBpenphPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5wZXBwZXJvbmk8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPm11c2hyb29tczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+bW96emFyZWxsYTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+b2xpdmVzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByaWNlIGxhcmdlIGJvbGRlclwiPjcsMjDigqw8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8Zm9vdGVyPlxuICAgICAgICA8ZGl2PlRlbDogMTIzIDQ1NiA3ODk8L2Rpdj5cbiAgICAgICAgPGRpdj5DcmVhdGVkIGJ5IDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vTWljaGFlbGE1NjVcIj5NaWNoYWVsYSBLdXJjaWtvdmE8L2E+IDIwMjM8L2Rpdj5cbiAgICA8L2Zvb3Rlcj5gO1xuXG4gICAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gaHRtbC50cmltKCk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybntcbiAgICAgICAgY3JlYXRlSG9tZVN0YXRpY1xuICAgIH1cblxufSkoKTtcblxuZXhwb3J0IHtjcmVhdGVIb21lUGFnZX1cblxuIiwiY29uc3QgY3JlYXRlTWVudVBhZ2UgPSAoKCkgPT4ge1xuICAgIFxuICAgIGNvbnN0IGNyZWF0ZU1lbnVTdGF0aWMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgICAgICBsZXQgaHRtbCA9IGA8bmF2IGlkPVwibWFpbi1uYXZcIj5cbiAgICAgICAgPGEgY2xhc3M9XCJsb2dvXCIgaHJlZj1cImphdmFzY3JpcHQ6O1wiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCJwaXp6ZXJpYS1sb2dvLnN2Z1wiIGFsdD1cInBpenplcmlhLWxvZ29cIj5cbiAgICAgICAgICAgIDxkaXY+RmFuY3k8L2Rpdj5cbiAgICAgICAgPC9hPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibmF2aWdhdGlvbi1saW5rc1wiPlxuICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIGNsYXNzPVwibmF2LWVsZW1lbnQgYm9sZFwiIGRhdGEtcGFnZT1cImhvbWVcIj5Ib21lPC9hPlxuICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIGNsYXNzPVwibmF2LWVsZW1lbnQgYm9sZFwiIGRhdGEtcGFnZT1cIm1lbnVcIj5NZW51PC9hPlxuICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIGNsYXNzPVwibmF2LWVsZW1lbnQgYm9sZFwiIGRhdGEtcGFnZT1cImNvbnRhY3RcIj5Db250YWN0PC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L25hdj5cbiAgICA8ZGl2IGNsYXNzPVwibWVudVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibGFyZ2VyIGJvbGRcIj5Ub3AgcGlja3M6PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwaWNrc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBpY2tcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy85OTEzMDcuanBnXCIgYWx0PVwicGl6emEgMVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvcm1hdGlvbi1waXp6YVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGFyZ2UgYm9sZFwiPkdvb2QgcGl6emE8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPnBlcHBlcm9uaTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+bXVzaHJvb21zPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5tb3p6YXJlbGxhPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5vbGl2ZXM8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJpY2UgbGFyZ2UgYm9sZGVyXCI+NywyMOKCrDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGlja1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2RlbGljaW91cy1waXp6YS1wZXBwZXJvbmktcGl6emEtd2FsbHBhcGVyLXByZXZpZXcuanBnXCIgYWx0PVwicGl6emEgMlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvcm1hdGlvbi1waXp6YVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGFyZ2UgYm9sZFwiPkJldHRlciBwaXp6YTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+cGVwcGVyb25pPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5tdXNocm9vbXM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPm1venphcmVsbGE8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPm9saXZlczwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmljZSBsYXJnZSBib2xkZXJcIj43LDIw4oKsPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwaWNrXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvOTkxMzA3LmpwZ1wiIGFsdD1cInBpenphIDFcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mb3JtYXRpb24tcGl6emFcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxhcmdlIGJvbGRcIj5Hb29kIHBpenphPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5wZXBwZXJvbmk8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPm11c2hyb29tczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+bW96emFyZWxsYTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+b2xpdmVzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByaWNlIGxhcmdlIGJvbGRlclwiPjcsMjDigqw8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBpY2tcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy85OTEzMDcuanBnXCIgYWx0PVwicGl6emEgMVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvcm1hdGlvbi1waXp6YVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGFyZ2UgYm9sZFwiPkdvb2QgcGl6emE8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPnBlcHBlcm9uaTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+bXVzaHJvb21zPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5tb3p6YXJlbGxhPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5vbGl2ZXM8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJpY2UgbGFyZ2UgYm9sZGVyXCI+NywyMOKCrDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGlja1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2RlbGljaW91cy1waXp6YS1wZXBwZXJvbmktcGl6emEtd2FsbHBhcGVyLXByZXZpZXcuanBnXCIgYWx0PVwicGl6emEgMlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvcm1hdGlvbi1waXp6YVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGFyZ2UgYm9sZFwiPkJldHRlciBwaXp6YTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+cGVwcGVyb25pPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5tdXNocm9vbXM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPm1venphcmVsbGE8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPm9saXZlczwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmljZSBsYXJnZSBib2xkZXJcIj43LDIw4oKsPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwaWNrXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvOTkxMzA3LmpwZ1wiIGFsdD1cInBpenphIDFcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mb3JtYXRpb24tcGl6emFcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxhcmdlIGJvbGRcIj5Hb29kIHBpenphPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5wZXBwZXJvbmk8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPm11c2hyb29tczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+bW96emFyZWxsYTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+b2xpdmVzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByaWNlIGxhcmdlIGJvbGRlclwiPjcsMjDigqw8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8Zm9vdGVyPlxuICAgICAgICA8ZGl2PlRlbDogMTIzIDQ1NiA3ODk8L2Rpdj5cbiAgICAgICAgPGRpdj5DcmVhdGVkIGJ5IDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vTWljaGFlbGE1NjVcIj5NaWNoYWVsYSBLdXJjaWtvdmE8L2E+IDIwMjM8L2Rpdj5cbiAgICA8L2Zvb3Rlcj4gYDtcblxuICAgICAgICBjb250ZW50LmlubmVySFRNTCA9IGh0bWwudHJpbSgpO1xuICAgIH1cbiAgICByZXR1cm57XG4gICAgICAgIGNyZWF0ZU1lbnVTdGF0aWNcbiAgICB9XG59KSgpO1xuXG5leHBvcnQge2NyZWF0ZU1lbnVQYWdlfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLWNvcHkuY3NzJztcbmltcG9ydCB7IGNyZWF0ZUhvbWVQYWdlIH0gZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IHtjcmVhdGVNZW51UGFnZX0gZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IHtjcmVhdGVDb250YWN0c1BhZ2V9IGZyb20gXCIuL2NvbnRhY3RzXCI7XG5pbXBvcnQgZGF0YSBmcm9tIFwiLi9waXp6YXMuanNvblwiO1xuXG5jb25zb2xlLmxvZyhcImhleSwgaW0gYWxpdmUgYnR3XCIpO1xuXG5jb25zdCBpbml0ID0gKCgpID0+IHtcblxuICAgIGNvbnN0IG5hdkFkZExpc3RlbmVycyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbmF2RWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdi1lbGVtZW50XCIpO1xuXG4gICAgICAgIG5hdkVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiBhZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVuZGVyUGFnZSkpO1xuICAgIH07XG5cbiAgICBjb25zdCByZW5kZXJQYWdlID0gKGUpID0+IHtcbiAgICAgICAgLy9lLnByZXZlbnREZWFmdWx0KCk7XG5cbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGUudGFyZ2V0O1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnQpO1xuICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50LmRhdGFzZXQucGFnZSk7XG4gICAgICAgIHN3aXRjaCAoZWxlbWVudC5kYXRhc2V0LnBhZ2UpIHtcbiAgICAgICAgICAgIGNhc2UgXCJob21lXCI6XG4gICAgICAgICAgICAgICAgY3JlYXRlSG9tZVBhZ2UuY3JlYXRlSG9tZVN0YXRpYygpO1xuICAgICAgICAgICAgICAgIG5hdkFkZExpc3RlbmVycygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBcbiAgICAgICAgICAgIGNhc2UgXCJtZW51XCI6XG4gICAgICAgICAgICAgICAgY3JlYXRlTWVudVBhZ2UuY3JlYXRlTWVudVN0YXRpYygpO1xuICAgICAgICAgICAgICAgIG5hdkFkZExpc3RlbmVycygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwiY29udGFjdFwiOlxuICAgICAgICAgICAgICAgIGNyZWF0ZUNvbnRhY3RzUGFnZS5jcmVhdGVDb250YWN0c1N0YXRpYygpO1xuICAgICAgICAgICAgICAgIG5hdkFkZExpc3RlbmVycygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGNyZWF0ZUhvbWVQYWdlLmNyZWF0ZUhvbWVTdGF0aWMoKTtcbiAgICAgICAgICAgICAgICBuYXZBZGRMaXN0ZW5lcnMoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNyZWF0ZUhvbWVQYWdlLmNyZWF0ZUhvbWVTdGF0aWMoKTtcbiAgICBuYXZBZGRMaXN0ZW5lcnMoKTtcbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=