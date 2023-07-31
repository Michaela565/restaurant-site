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

/***/ "./src/pick.js":
/*!*********************!*\
  !*** ./src/pick.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAPick: () => (/* binding */ createAPick)
/* harmony export */ });
const createAPick = (() => {

    const createStaticPick = (picturePath, name, ingredients, price, id) => {
        let ingredientsHtml = "";
        for (let i = 0; i < ingredients.length; i++) {
            const ingredient = ingredients[i];
            const ingredientHtml = `<li>${ingredient}</li>\n`;
            ingredientsHtml = ingredientsHtml + ingredientHtml;
        }

        const staticHtmlTemplate = `<div class="pick">
        <img src="${picturePath}" alt="pizza ${id}">
        <div class="information-pizza">
            <div class="large bold">${name} ${id}</div>
            <ul>
                ${ingredientsHtml}
            </ul>
            <div class="price large bolder">${price}</div>
        </div>
    </div>`;
        return staticHtmlTemplate.trim();
    }
    
    return{
        createStaticPick,
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

module.exports = JSON.parse('{"pizzas":[{"id":1,"name":"Neapolitan","ingredients":["tomato","cheese","spinach"],"imagePath":" img/991307.jpg ","price":"7, 20 €"},{"id":2,"name":"Margherita","ingredients":["tomato","cheese","spinach"],"imagePath":" img/991307.jpg ","price":"7, 20 €"},{"id":3,"name":"Hawai","ingredients":["tomato","cheese","spinach"],"imagePath":" img/991307.jpg ","price":"7, 20 €"}]}');

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
/* harmony import */ var _pick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pick */ "./src/pick.js");
/* harmony import */ var _pizzas_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pizzas.json */ "./src/pizzas.json");







console.log("hey, im alive btw");

const init = (() => {

    const navAddListeners = () => {
        const navElements = document.querySelectorAll(".nav-element");

        navElements.forEach(element => addEventListener("click", renderPage));
    };

    const renderPizzaPicks = () => {
        const picksHolder = document.querySelector(".picks");
        for (let i = 0; i < _pizzas_json__WEBPACK_IMPORTED_MODULE_5__.pizzas.length; i++) {
            const pizza = _pizzas_json__WEBPACK_IMPORTED_MODULE_5__.pizzas[i];
            const newPick = _pick__WEBPACK_IMPORTED_MODULE_4__.createAPick.createStaticPick(pizza.imagePath, pizza.name, pizza.ingredients, pizza.price, pizza.id);
            picksHolder.innerHTML = picksHolder.innerHTML + newPick;
            
        }
    }

    const renderPage = (e) => {
        //e.preventDeafult();

        const element = e.target;

        console.log(element);
        console.log(element.dataset.page);
        switch (element.dataset.page) {
            case "home":
                _home__WEBPACK_IMPORTED_MODULE_1__.createHomePage.createHomeStatic();
                navAddListeners();
                renderPizzaPicks();
                break;
        
            case "menu":
                _menu__WEBPACK_IMPORTED_MODULE_2__.createMenuPage.createMenuStatic();
                navAddListeners();
                renderPizzaPicks();
                break;

            case "contact":
                _contacts__WEBPACK_IMPORTED_MODULE_3__.createContactsPage.createContactsStatic();
                navAddListeners();
                break;

            default:
                _home__WEBPACK_IMPORTED_MODULE_1__.createHomePage.createHomeStatic();
                navAddListeners();
                renderPizzaPicks();
                break;
        }
    }

    _home__WEBPACK_IMPORTED_MODULE_1__.createHomePage.createHomeStatic();
    navAddListeners();
    renderPizzaPicks();
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHVIQUF1QztBQUNuRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLDJJQUEySSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sb0JBQW9CO0FBQy9NLGtIQUFrSCxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLGtCQUFrQjtBQUNoSyx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8scUZBQXFGLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLGFBQWEsTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksTUFBTSxNQUFNLGFBQWEsY0FBYyxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxRQUFRLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsY0FBYyxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxNQUFNLE1BQU0sYUFBYSxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLGFBQWEsY0FBYyxhQUFhLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxjQUFjLGNBQWMsTUFBTSxVQUFVLE1BQU0sS0FBSyxLQUFLLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLGFBQWEsY0FBYyxNQUFNLGFBQWEsT0FBTyxL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cGFjazovL3Jlc3RhdXJhbnQtc2l0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1zaXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXNpdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXNpdGUvLi9zcmMvc3R5bGUtY29weS5jc3M/NzhjMyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1zaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1zaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtc2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtc2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtc2l0ZS8uL3NyYy9jb250YWN0cy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXNpdGUvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXNpdGUvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXNpdGUvLi9zcmMvcGljay5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXNpdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1zaXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtc2l0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1zaXRlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1zaXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1zaXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1zaXRlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtc2l0ZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXNpdGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtc2l0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiQ3J1c3RNaWFtaVJpdmVyLmpwZWdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFicmlsK0ZhdGZhY2UmZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCw0MDA7MCw1MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw3MDA7MSw5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Tm90bytTYW5zOndnaHRAMTAwOzIwMDszMDA7NDAwOzUwMDs2MDA7NzAwOzgwMDs5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3R7XG4gICAgLS1ibGFjazogIzFmMWYxZjtcbiAgICAtLWxpZ2h0LXllbGxvdzogI0YyRTdDRTtcbiAgICAtLXJlZGlzaC1vcmFuZ2U6ICNBNTNGMkI7XG4gICAgLS1yZWRpc2gtb3JhbmdlLWRhcmtlbmVkOiAjNzEyYzIwO1xuICAgIC0tbWFpbi1mb250OiAnTm90byBTYW5zJztcbn1cblxuKntcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KSwgQ291cmllciwgbW9ub3NwYWNlO1xufVxuXG5ib2R5e1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcbn1cblxuI2NvbnRlbnR7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gNDBlbSBhdXRvIDNlbTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4vKiAtLS1uYXZpZ2F0aW9uLS0tICovXG5cbiNtYWluLW5hdntcbiAgICBncmlkLWNvbHVtbjogMSAvIDQ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAzMy4zMyUpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogM2VtO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XG59XG5cbi5uYXZpZ2F0aW9uLWxpbmtze1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBncmlkLWNvbHVtbjogMiAvIDQ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAzMy4zMyUpO1xufVxuXG4ubmF2LWVsZW1lbnR7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbn1cblxuLm5hdi1lbGVtZW50OmFueS1saW5re1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLm5hdi1lbGVtZW50OmhvdmVye1xuICAgIGNvbG9yOiB2YXIoLS1saWdodC15ZWxsb3cpO1xufVxuXG4ubG9nb3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi1sZWZ0OiAxZW07XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbn1cblxuLmxvZ28+IGRpdntcbiAgICBmb250LWZhbWlseTogJ0FicmlsIEZhdGZhY2UnLCAnUm9ib3RvJywgQ291cmllciwgbW9ub3NwYWNlO1xuICAgIGZvbnQtc2l6ZTogNDJweDtcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xufVxuXG4ubG9nbzphbnktbGlua3tcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbiNtYWluLW5hdj4gLmxvZ286aG92ZXJ7XG4gICAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5sb2dvID4gaW1ne1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc3MHB4KXtcbiAgICAjbWFpbi1uYXZ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCA0ZW0pO1xuICAgIH1cbiAgICAubG9nb3tcbiAgICAgICAgZ3JpZC1yb3c6IDEgLyAyO1xuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cblxuICAgIC5uYXZpZ2F0aW9uLWxpbmtze1xuICAgICAgICBncmlkLXJvdzogMiAvIDM7XG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgICB9XG59XG5cbi8qIC0tLW5hdmlnYXRpb24gZW5kLS0tICovXG5cbi8qIC0tLWhlYWRlciBwYXJ0LS0tKi9cblxuLmZpcnN0LWhhbGZ7XG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uZmlyc3QtaGFsZj4gaW1ne1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgd2lkdGg6IDI3ZW07XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi53aGl0ZS1jb3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MiwgMjMxLCAyMDYsIDAuOTUpIDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxZW0gMDtcbn1cblxuXG4ud2hpdGUtY292ZXI+IGRpdjpsYXN0LW9mLXR5cGV7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4ud2hpdGUtY292ZXI+IGRpdjpsYXN0LW9mLXR5cGUgPiBkaXY6bGFzdC1vZi10eXBle1xuICAgIHBhZGRpbmctdG9wOiAxZW07XG59XG5cbi8qIC0tLWhlYWRlciBwYXJ0IGVuZC0tLSovXG5cbi8qIC0tLXRvcCBwaWNrcyBwYXJ0IC0tLSAqL1xuXG4uc2Vjb25kLWhhbGZ7XG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xuICAgIHBhZGRpbmc6IDJlbTtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5waWNrc3tcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgZ3JpZC1hdXRvLXJvd3M6IDE2ZW07XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc3MHB4KXtcbiAgICAucGlja3N7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIH1cbn1cblxuLyogLS0tIHBpY2sgY2FyZCAtLS0gKi9cblxuLnBpY2t7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQteWVsbG93KTtcbiAgICBib3gtc2hhZG93OiA3cHggOHB4IDhweCAjMDAwMDAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbjogMWVtO1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4ucGljaz4gaW1ne1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIHdpZHRoOiA0MCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmluZm9ybWF0aW9uLXBpenphe1xuICAgIG1hcmdpbjogMWVtO1xuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxudWx7XG4gICAgbWFyZ2luOiAwLjVlbSAxLjVlbTtcbn1cblxuLmluZm9ybWF0aW9uLXBpenphPiBkaXYucHJpY2V7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xufVxuXG4vKiAtLS0gcGljayBjYXJkIGVuZCAtLS0gKi9cblxuLyogLS0tIHRvcCBwaWNrcyBwYXJ0IGVuZCAtLS0gKi9cblxuLyogLS0tIGZvb3RlciAtLS0gKi9cbmZvb3RlcntcbiAgICBncmlkLXJvdzogNCAvIDU7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDFlbTtcbn1cblxuZm9vdGVyPmRpdj5hOmFueS1saW5re1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4vKiAtLS0gZm9vdGVyIGVuZCAtLS0gKi9cblxuXG4vKiAtLS0gc2Nyb2xsYmFyIC0tLSAqL1xuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogMTVweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmxhY2spXG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXJlZGlzaC1vcmFuZ2UpO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1yZWRpc2gtb3JhbmdlLWRhcmtlbmVkKTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzcwcHgpe1xuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICB3aWR0aDogMTBweDtcbiAgICB9XG59XG4vKiAtLS0gc2Nyb2xsYmFyIGVuZCAtLS0gKi9cblxuLyogLS0tIGdlbmVyYWwgZm9udCBzZXR0aW5ncyAtLS0gKi9cblxuLmJvbGR7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcblxufVxuXG4uYm9sZGVye1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5sYXJnZXtcbiAgICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5sYXJnZXJ7XG4gICAgZm9udC1zaXplOiAzMnB4O1xufVxuXG4uZmFuY3l7XG4gICAgZm9udC1mYW1pbHk6ICdBYnJpbCBGYXRmYWNlJywgJ1JvYm90bycsIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgICBmb250LXNpemU6IDY0cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xufVxuXG4uaW5saW5le1xuICAgIGRpc3BsYXk6IGlubGluZTtcbn1cblxuLyogLS0tIG1lbnUgcGFnZSBhZGRvbnMgLS0tICovXG5cbi5tZW51e1xuICAgIGdyaWQtcm93OiAyIC8gNDtcbiAgICBwYWRkaW5nOiAyZW07XG4gICAgei1pbmRleDogMTA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uY29udGFjdHN7XG4gICAgZ3JpZC1yb3c6IDIgLyA0O1xuICAgIHBhZGRpbmc6IDJlbTtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb250YWN0LWxpc3R7XG4gICAgd2lkdGg6IG1heCg4MDBweCwgMjBlbSk7XG59XG5cbi5jb250YWN0cy1wYWRkaW5ne1xuICAgIHBhZGRpbmctYm90dG9tOiAxZW07XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5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QixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBLHVCQUF1Qjs7O0FBR3ZCLHNCQUFzQjs7QUFFdEI7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0kseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0k7UUFDSSxXQUFXO0lBQ2Y7QUFDSjtBQUNBLDBCQUEwQjs7QUFFMUIsa0NBQWtDOztBQUVsQztJQUNJLGdCQUFnQjs7QUFFcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDBEQUEwRDtJQUMxRCxlQUFlO0lBQ2YscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQSw2QkFBNkI7O0FBRTdCO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0lBQ1gsOEJBQThCO0lBQzlCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIsY0FBYztJQUNkLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFicmlsK0ZhdGZhY2UmZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCw0MDA7MCw1MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw3MDA7MSw5MDAmZGlzcGxheT1zd2FwJyk7XFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Tm90bytTYW5zOndnaHRAMTAwOzIwMDszMDA7NDAwOzUwMDs2MDA7NzAwOzgwMDs5MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3R7XFxuICAgIC0tYmxhY2s6ICMxZjFmMWY7XFxuICAgIC0tbGlnaHQteWVsbG93OiAjRjJFN0NFO1xcbiAgICAtLXJlZGlzaC1vcmFuZ2U6ICNBNTNGMkI7XFxuICAgIC0tcmVkaXNoLW9yYW5nZS1kYXJrZW5lZDogIzcxMmMyMDtcXG4gICAgLS1tYWluLWZvbnQ6ICdOb3RvIFNhbnMnO1xcbn1cXG5cXG4qe1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxufVxcblxcbmJvZHl7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxufVxcblxcbiNjb250ZW50e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gNDBlbSBhdXRvIDNlbTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi8qIC0tLW5hdmlnYXRpb24tLS0gKi9cXG5cXG4jbWFpbi1uYXZ7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gNDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMzMuMzMlKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xcbn1cXG5cXG4ubmF2aWdhdGlvbi1saW5rc3tcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDMzLjMzJSk7XFxufVxcblxcbi5uYXYtZWxlbWVudHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xcbn1cXG5cXG4ubmF2LWVsZW1lbnQ6YW55LWxpbmt7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5uYXYtZWxlbWVudDpob3ZlcntcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LXllbGxvdyk7XFxufVxcblxcbi5sb2dve1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG59XFxuXFxuLmxvZ28+IGRpdntcXG4gICAgZm9udC1mYW1pbHk6ICdBYnJpbCBGYXRmYWNlJywgJ1JvYm90bycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG4gICAgZm9udC1zaXplOiA0MnB4O1xcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXG59XFxuXFxuLmxvZ286YW55LWxpbmt7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbiNtYWluLW5hdj4gLmxvZ286aG92ZXJ7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4ubG9nbyA+IGltZ3tcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NzBweCl7XFxuICAgICNtYWluLW5hdntcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgNGVtKTtcXG4gICAgfVxcbiAgICAubG9nb3tcXG4gICAgICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC5uYXZpZ2F0aW9uLWxpbmtze1xcbiAgICAgICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICB9XFxufVxcblxcbi8qIC0tLW5hdmlnYXRpb24gZW5kLS0tICovXFxuXFxuLyogLS0taGVhZGVyIHBhcnQtLS0qL1xcblxcbi5maXJzdC1oYWxme1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHotaW5kZXg6IDEwO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIkNydXN0TWlhbWlSaXZlci5qcGVnXFxcIik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5maXJzdC1oYWxmPiBpbWd7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIHdpZHRoOiAyN2VtO1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuXFxuLndoaXRlLWNvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MiwgMjMxLCAyMDYsIDAuOTUpIDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDFlbSAwO1xcbn1cXG5cXG5cXG4ud2hpdGUtY292ZXI+IGRpdjpsYXN0LW9mLXR5cGV7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLndoaXRlLWNvdmVyPiBkaXY6bGFzdC1vZi10eXBlID4gZGl2Omxhc3Qtb2YtdHlwZXtcXG4gICAgcGFkZGluZy10b3A6IDFlbTtcXG59XFxuXFxuLyogLS0taGVhZGVyIHBhcnQgZW5kLS0tKi9cXG5cXG4vKiAtLS10b3AgcGlja3MgcGFydCAtLS0gKi9cXG5cXG4uc2Vjb25kLWhhbGZ7XFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gICAgcGFkZGluZzogMmVtO1xcbiAgICB6LWluZGV4OiAxMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLnBpY2tze1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBncmlkLWF1dG8tcm93czogMTZlbTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzcwcHgpe1xcbiAgICAucGlja3N7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgfVxcbn1cXG5cXG4vKiAtLS0gcGljayBjYXJkIC0tLSAqL1xcblxcbi5waWNre1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC15ZWxsb3cpO1xcbiAgICBib3gtc2hhZG93OiA3cHggOHB4IDhweCAjMDAwMDAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbjogMWVtO1xcbiAgICBwYWRkaW5nOiAxZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLnBpY2s+IGltZ3tcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5pbmZvcm1hdGlvbi1waXp6YXtcXG4gICAgbWFyZ2luOiAxZW07XFxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbnVse1xcbiAgICBtYXJnaW46IDAuNWVtIDEuNWVtO1xcbn1cXG5cXG4uaW5mb3JtYXRpb24tcGl6emE+IGRpdi5wcmljZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiByaWdodDtcXG59XFxuXFxuLyogLS0tIHBpY2sgY2FyZCBlbmQgLS0tICovXFxuXFxuLyogLS0tIHRvcCBwaWNrcyBwYXJ0IGVuZCAtLS0gKi9cXG5cXG4vKiAtLS0gZm9vdGVyIC0tLSAqL1xcbmZvb3RlcntcXG4gICAgZ3JpZC1yb3c6IDQgLyA1O1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDFlbTtcXG59XFxuXFxuZm9vdGVyPmRpdj5hOmFueS1saW5re1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLyogLS0tIGZvb3RlciBlbmQgLS0tICovXFxuXFxuXFxuLyogLS0tIHNjcm9sbGJhciAtLS0gKi9cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgd2lkdGg6IDE1cHg7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ibGFjaylcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXJlZGlzaC1vcmFuZ2UpO1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcmVkaXNoLW9yYW5nZS1kYXJrZW5lZCk7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc3MHB4KXtcXG4gICAgOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgICAgICB3aWR0aDogMTBweDtcXG4gICAgfVxcbn1cXG4vKiAtLS0gc2Nyb2xsYmFyIGVuZCAtLS0gKi9cXG5cXG4vKiAtLS0gZ2VuZXJhbCBmb250IHNldHRpbmdzIC0tLSAqL1xcblxcbi5ib2xke1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcblxcbn1cXG5cXG4uYm9sZGVye1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4ubGFyZ2V7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG59XFxuXFxuLmxhcmdlcntcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbn1cXG5cXG4uZmFuY3l7XFxuICAgIGZvbnQtZmFtaWx5OiAnQWJyaWwgRmF0ZmFjZScsICdSb2JvdG8nLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuICAgIGZvbnQtc2l6ZTogNjRweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xcbn1cXG5cXG4uaW5saW5le1xcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcblxcbi8qIC0tLSBtZW51IHBhZ2UgYWRkb25zIC0tLSAqL1xcblxcbi5tZW51e1xcbiAgICBncmlkLXJvdzogMiAvIDQ7XFxuICAgIHBhZGRpbmc6IDJlbTtcXG4gICAgei1pbmRleDogMTA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi5jb250YWN0c3tcXG4gICAgZ3JpZC1yb3c6IDIgLyA0O1xcbiAgICBwYWRkaW5nOiAyZW07XFxuICAgIHotaW5kZXg6IDEwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29udGFjdC1saXN0e1xcbiAgICB3aWR0aDogbWF4KDgwMHB4LCAyMGVtKTtcXG59XFxuXFxuLmNvbnRhY3RzLXBhZGRpbmd7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxZW07XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS1jb3B5LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUtY29weS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGNyZWF0ZUNvbnRhY3RzUGFnZSA9ICgoKSA9PiB7XG5cbiAgICBjb25zdCBjcmVhdGVDb250YWN0c1N0YXRpYyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgICAgIGxldCBodG1sID0gYDxuYXYgaWQ9XCJtYWluLW5hdlwiPlxuICAgICAgICA8YSBjbGFzcz1cImxvZ29cIiBocmVmPVwiamF2YXNjcmlwdDo7XCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cInBpenplcmlhLWxvZ28uc3ZnXCIgYWx0PVwicGl6emVyaWEtbG9nb1wiPlxuICAgICAgICAgICAgPGRpdj5GYW5jeTwvZGl2PlxuICAgICAgICA8L2E+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJuYXZpZ2F0aW9uLWxpbmtzXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgY2xhc3M9XCJuYXYtZWxlbWVudCBib2xkXCIgZGF0YS1wYWdlPVwiaG9tZVwiPkhvbWU8L2E+XG4gICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgY2xhc3M9XCJuYXYtZWxlbWVudCBib2xkXCIgZGF0YS1wYWdlPVwibWVudVwiPk1lbnU8L2E+XG4gICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgY2xhc3M9XCJuYXYtZWxlbWVudCBib2xkXCIgZGF0YS1wYWdlPVwiY29udGFjdFwiPkNvbnRhY3Q8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvbmF2PlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWN0c1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibGFyZ2VyIGJvbGRcIj5Db250YWN0OjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFjdC1saXN0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGlja1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvcm1hdGlvbi1waXp6YVwiPlxuICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJjb250YWN0cy1wYWRkaW5nXCI+PGRpdiBjbGFzcz1cImJvbGQgaW5saW5lXCI+VGVsZXBob25lOjwvZGl2PiAxMjMgNDU2IDc4OTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJjb250YWN0cy1wYWRkaW5nXCI+PGRpdiBjbGFzcz1cImJvbGQgaW5saW5lXCI+RW1haWw6PC9kaXY+IHJhbmRvbWVtYWlsMTIzQHJhbmRvbWRvbWFpbi5jb208L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiY29udGFjdHMtcGFkZGluZ1wiPjxkaXYgY2xhc3M9XCJib2xkIGlubGluZVwiPkFkZHJlc3M6PC9kaXY+IFJhbmRvbSBTdHJlZXQgMTIzLCBSYW5kb20gQ2l0eSwgUmFuZG9tIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGZvb3Rlcj5cbiAgICAgICAgPGRpdj5UZWw6IDEyMyA0NTYgNzg5PC9kaXY+XG4gICAgICAgIDxkaXY+Q3JlYXRlZCBieSA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL01pY2hhZWxhNTY1XCI+TWljaGFlbGEgS3VyY2lrb3ZhPC9hPiAyMDIzPC9kaXY+XG4gICAgPC9mb290ZXI+YDtcblxuICAgICAgICBjb250ZW50LmlubmVySFRNTCA9IGh0bWwudHJpbSgpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGNyZWF0ZUNvbnRhY3RzU3RhdGljLFxuICAgIH1cbn0pKCk7XG5cbmV4cG9ydCB7Y3JlYXRlQ29udGFjdHNQYWdlfSIsImNvbnN0IGNyZWF0ZUhvbWVQYWdlID0gKCgpID0+e1xuXG4gICAgY29uc3QgY3JlYXRlSG9tZVN0YXRpYyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgICAgIGxldCBodG1sID0gYDxuYXYgaWQ9XCJtYWluLW5hdlwiPlxuICAgICAgICA8YSBjbGFzcz1cImxvZ29cIiBocmVmPVwiamF2YXNjcmlwdDo7XCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cInBpenplcmlhLWxvZ28uc3ZnXCIgYWx0PVwicGl6emVyaWEtbG9nb1wiPlxuICAgICAgICAgICAgPGRpdj5GYW5jeTwvZGl2PlxuICAgICAgICA8L2E+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJuYXZpZ2F0aW9uLWxpbmtzXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgY2xhc3M9XCJuYXYtZWxlbWVudCBib2xkXCIgZGF0YS1wYWdlPVwiaG9tZVwiPkhvbWU8L2E+XG4gICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgY2xhc3M9XCJuYXYtZWxlbWVudCBib2xkXCIgZGF0YS1wYWdlPVwibWVudVwiPk1lbnU8L2E+XG4gICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgY2xhc3M9XCJuYXYtZWxlbWVudCBib2xkXCIgZGF0YS1wYWdlPVwiY29udGFjdFwiPkNvbnRhY3Q8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvbmF2PlxuICAgIDxkaXYgY2xhc3M9XCJmaXJzdC1oYWxmXCI+XG4gICAgICAgIDxpbWcgc3JjPVwicGl6emVyaWEtbG9nby5zdmdcIiBhbHQ9XCJsb2dvXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3aGl0ZS1jb3ZlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZhbmN5XCI+XG4gICAgICAgICAgICAgICAgRmFuY3kgcGl6emVyaWFcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlRlbGVwaG9uZTogPGRpdiBjbGFzcz1cImxhcmdlIGJvbGRcIj4xMjMgNDU2IDc4OTwvZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+QWRyZXNzOiBTdHJlZXQgMTIzLCBUb3duPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInNlY29uZC1oYWxmXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsYXJnZXIgYm9sZFwiPlRvcCBwaWNrczo8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBpY2tzXCI+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGZvb3Rlcj5cbiAgICAgICAgPGRpdj5UZWw6IDEyMyA0NTYgNzg5PC9kaXY+XG4gICAgICAgIDxkaXY+Q3JlYXRlZCBieSA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL01pY2hhZWxhNTY1XCI+TWljaGFlbGEgS3VyY2lrb3ZhPC9hPiAyMDIzPC9kaXY+XG4gICAgPC9mb290ZXI+YDtcblxuICAgICAgICBjb250ZW50LmlubmVySFRNTCA9IGh0bWwudHJpbSgpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm57XG4gICAgICAgIGNyZWF0ZUhvbWVTdGF0aWNcbiAgICB9XG5cbn0pKCk7XG5cbmV4cG9ydCB7Y3JlYXRlSG9tZVBhZ2V9XG5cbiIsImNvbnN0IGNyZWF0ZU1lbnVQYWdlID0gKCgpID0+IHtcbiAgICBcbiAgICBjb25zdCBjcmVhdGVNZW51U3RhdGljID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICAgICAgbGV0IGh0bWwgPSBgPG5hdiBpZD1cIm1haW4tbmF2XCI+XG4gICAgICAgIDxhIGNsYXNzPVwibG9nb1wiIGhyZWY9XCJqYXZhc2NyaXB0OjtcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwicGl6emVyaWEtbG9nby5zdmdcIiBhbHQ9XCJwaXp6ZXJpYS1sb2dvXCI+XG4gICAgICAgICAgICA8ZGl2PkZhbmN5PC9kaXY+XG4gICAgICAgIDwvYT5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5hdmlnYXRpb24tbGlua3NcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBjbGFzcz1cIm5hdi1lbGVtZW50IGJvbGRcIiBkYXRhLXBhZ2U9XCJob21lXCI+SG9tZTwvYT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBjbGFzcz1cIm5hdi1lbGVtZW50IGJvbGRcIiBkYXRhLXBhZ2U9XCJtZW51XCI+TWVudTwvYT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBjbGFzcz1cIm5hdi1lbGVtZW50IGJvbGRcIiBkYXRhLXBhZ2U9XCJjb250YWN0XCI+Q29udGFjdDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9uYXY+XG4gICAgPGRpdiBjbGFzcz1cIm1lbnVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxhcmdlciBib2xkXCI+VG9wIHBpY2tzOjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGlja3NcIj5cbiAgICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8Zm9vdGVyPlxuICAgICAgICA8ZGl2PlRlbDogMTIzIDQ1NiA3ODk8L2Rpdj5cbiAgICAgICAgPGRpdj5DcmVhdGVkIGJ5IDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vTWljaGFlbGE1NjVcIj5NaWNoYWVsYSBLdXJjaWtvdmE8L2E+IDIwMjM8L2Rpdj5cbiAgICA8L2Zvb3Rlcj4gYDtcblxuICAgICAgICBjb250ZW50LmlubmVySFRNTCA9IGh0bWwudHJpbSgpO1xuICAgIH1cbiAgICByZXR1cm57XG4gICAgICAgIGNyZWF0ZU1lbnVTdGF0aWNcbiAgICB9XG59KSgpO1xuXG5leHBvcnQge2NyZWF0ZU1lbnVQYWdlfSIsImNvbnN0IGNyZWF0ZUFQaWNrID0gKCgpID0+IHtcblxuICAgIGNvbnN0IGNyZWF0ZVN0YXRpY1BpY2sgPSAocGljdHVyZVBhdGgsIG5hbWUsIGluZ3JlZGllbnRzLCBwcmljZSwgaWQpID0+IHtcbiAgICAgICAgbGV0IGluZ3JlZGllbnRzSHRtbCA9IFwiXCI7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5ncmVkaWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGluZ3JlZGllbnQgPSBpbmdyZWRpZW50c1tpXTtcbiAgICAgICAgICAgIGNvbnN0IGluZ3JlZGllbnRIdG1sID0gYDxsaT4ke2luZ3JlZGllbnR9PC9saT5cXG5gO1xuICAgICAgICAgICAgaW5ncmVkaWVudHNIdG1sID0gaW5ncmVkaWVudHNIdG1sICsgaW5ncmVkaWVudEh0bWw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzdGF0aWNIdG1sVGVtcGxhdGUgPSBgPGRpdiBjbGFzcz1cInBpY2tcIj5cbiAgICAgICAgPGltZyBzcmM9XCIke3BpY3R1cmVQYXRofVwiIGFsdD1cInBpenphICR7aWR9XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvcm1hdGlvbi1waXp6YVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxhcmdlIGJvbGRcIj4ke25hbWV9ICR7aWR9PC9kaXY+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgJHtpbmdyZWRpZW50c0h0bWx9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByaWNlIGxhcmdlIGJvbGRlclwiPiR7cHJpY2V9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PmA7XG4gICAgICAgIHJldHVybiBzdGF0aWNIdG1sVGVtcGxhdGUudHJpbSgpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm57XG4gICAgICAgIGNyZWF0ZVN0YXRpY1BpY2ssXG4gICAgfVxufSkoKTtcblxuZXhwb3J0IHtjcmVhdGVBUGlja30iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS1jb3B5LmNzcyc7XG5pbXBvcnQgeyBjcmVhdGVIb21lUGFnZSB9IGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCB7Y3JlYXRlTWVudVBhZ2V9IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCB7Y3JlYXRlQ29udGFjdHNQYWdlfSBmcm9tIFwiLi9jb250YWN0c1wiO1xuaW1wb3J0IHsgY3JlYXRlQVBpY2sgfSBmcm9tICcuL3BpY2snO1xuaW1wb3J0IGRhdGEgZnJvbSBcIi4vcGl6emFzLmpzb25cIjtcblxuY29uc29sZS5sb2coXCJoZXksIGltIGFsaXZlIGJ0d1wiKTtcblxuY29uc3QgaW5pdCA9ICgoKSA9PiB7XG5cbiAgICBjb25zdCBuYXZBZGRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5hdkVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXYtZWxlbWVudFwiKTtcblxuICAgICAgICBuYXZFbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4gYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbmRlclBhZ2UpKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVuZGVyUGl6emFQaWNrcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcGlja3NIb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBpY2tzXCIpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEucGl6emFzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBwaXp6YSA9IGRhdGEucGl6emFzW2ldO1xuICAgICAgICAgICAgY29uc3QgbmV3UGljayA9IGNyZWF0ZUFQaWNrLmNyZWF0ZVN0YXRpY1BpY2socGl6emEuaW1hZ2VQYXRoLCBwaXp6YS5uYW1lLCBwaXp6YS5pbmdyZWRpZW50cywgcGl6emEucHJpY2UsIHBpenphLmlkKTtcbiAgICAgICAgICAgIHBpY2tzSG9sZGVyLmlubmVySFRNTCA9IHBpY2tzSG9sZGVyLmlubmVySFRNTCArIG5ld1BpY2s7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlclBhZ2UgPSAoZSkgPT4ge1xuICAgICAgICAvL2UucHJldmVudERlYWZ1bHQoKTtcblxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZS50YXJnZXQ7XG5cbiAgICAgICAgY29uc29sZS5sb2coZWxlbWVudCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnQuZGF0YXNldC5wYWdlKTtcbiAgICAgICAgc3dpdGNoIChlbGVtZW50LmRhdGFzZXQucGFnZSkge1xuICAgICAgICAgICAgY2FzZSBcImhvbWVcIjpcbiAgICAgICAgICAgICAgICBjcmVhdGVIb21lUGFnZS5jcmVhdGVIb21lU3RhdGljKCk7XG4gICAgICAgICAgICAgICAgbmF2QWRkTGlzdGVuZXJzKCk7XG4gICAgICAgICAgICAgICAgcmVuZGVyUGl6emFQaWNrcygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBcbiAgICAgICAgICAgIGNhc2UgXCJtZW51XCI6XG4gICAgICAgICAgICAgICAgY3JlYXRlTWVudVBhZ2UuY3JlYXRlTWVudVN0YXRpYygpO1xuICAgICAgICAgICAgICAgIG5hdkFkZExpc3RlbmVycygpO1xuICAgICAgICAgICAgICAgIHJlbmRlclBpenphUGlja3MoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcImNvbnRhY3RcIjpcbiAgICAgICAgICAgICAgICBjcmVhdGVDb250YWN0c1BhZ2UuY3JlYXRlQ29udGFjdHNTdGF0aWMoKTtcbiAgICAgICAgICAgICAgICBuYXZBZGRMaXN0ZW5lcnMoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBjcmVhdGVIb21lUGFnZS5jcmVhdGVIb21lU3RhdGljKCk7XG4gICAgICAgICAgICAgICAgbmF2QWRkTGlzdGVuZXJzKCk7XG4gICAgICAgICAgICAgICAgcmVuZGVyUGl6emFQaWNrcygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY3JlYXRlSG9tZVBhZ2UuY3JlYXRlSG9tZVN0YXRpYygpO1xuICAgIG5hdkFkZExpc3RlbmVycygpO1xuICAgIHJlbmRlclBpenphUGlja3MoKTtcbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=