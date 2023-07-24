/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n/*Mobile View*/\n@media only screen and (max-width: 960px) {\n\n\n* {\n\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n\n}\n    \n\n\n.fullPage {\n\n    display: flex;\n    flex-wrap: wrap;\n\n\n}\n\n\n\n.menuBar {\n\n    width: 100%;\n    height: 240px;\n    \n\n}\n\n.searchSection {\n\n    width: 100%;\n    height: 120px;\n\n    display: flex;\n    flex-direction: row;\n\n    background-color: red;\n\n\n}\n\n.buttonSection {\n\n    width: 100%;\n    height: 120px;\n\n    display: flex;\n    flex-direction: row;\n\n    background-color: blue;\n\n\n}\n\n.data {\n\n    width: 100%;\n    height: 1200px;\n\n}\n\n.dataSectionTop {\n\n    width: 100%;\n    height: 600px;\n\n    background-color: green;\n\n}\n\n.dataSectionBottom {\n\n\n    width: 100%;\n    height: 600px;\n\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n\n    background-color: yellow;\n\n}\n\n\n.mapSection {\n\n    width: 100%;\n    height: 600px;\n\n    background-color: silver;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n\n\n\n}\n\n.borderCheck {\n    /*\n    border-style: dashed;\n    border-color: black;\n    width: 50px;\n    height: 50px;\n    */\n\n\n}\n\n/*\n.temperatureSwitchButton {\n\n    height: 50px;\n    width: 50px;\n\n}\n*/\n\n#map {\n\n\n    border-style: dashed;\n    border-color: black;\n    height: 300px;\n    width: 300px;\n\n\n}\n\n\n}\n\n/*Desktop View*/\n\n@media only screen and (min-width: 961px) {\n\n\n* {\n\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n\n}\n\nbody {\n\n    height: 100vh;\n    width: 100vw;\n\n}\n\n.fullPage {\n\n\n    display: grid;\n    height: 100%;\n    width: 100%;\n    grid-template-rows: 1fr 11fr;\n    grid-template-columns: 1fr 1fr;\n\n\n}\n\n.menuBar {\n\n\n    grid-column: 1 / 3;\n    grid-row: 1 / 2;\n    display: grid;\n\n    grid-template-columns: 1fr 1fr;\n\n}\n\n.searchSection {\n\n    grid-column: 1 / 2;\n    background-color: red;\n\n}\n\n.buttonSection {\n\n    grid-column: 2 / 3;\n    background-color: blue;\n\n}\n\n.data {\n\n\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n\n}\n\n.dataSectionTop {\n\n    grid-row: 1 / 2;\n    background-color: green;\n\n\n}\n\n.dataSectionBottom {\n\n    grid-row: 2 / 3;\n    background-color: yellow;\n\n}\n\n.mapSection {\n\n\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n    background-color: silver;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n\n}\n\n\n.borderCheck {\n\n    /*\n    border-style: dashed;\n    border-color: black;\n    width: 200px;\n    height: 200px;\n    */\n\n}\n\n/*\n.temperatureSwitchButton {\n\n    height: 50px;\n    width: 50px;\n\n}\n*/\n\n\n#map {\n\n\n    border-style: dashed;\n    border-color: black;\n    height: 800px;\n    width: 800px;\n\n\n}\n\n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":";AACA,cAAc;AACd;;;AAGA;;IAEI,SAAS;IACT,UAAU;IACV,sBAAsB;;AAE1B;;;;AAIA;;IAEI,aAAa;IACb,eAAe;;;AAGnB;;;;AAIA;;IAEI,WAAW;IACX,aAAa;;;AAGjB;;AAEA;;IAEI,WAAW;IACX,aAAa;;IAEb,aAAa;IACb,mBAAmB;;IAEnB,qBAAqB;;;AAGzB;;AAEA;;IAEI,WAAW;IACX,aAAa;;IAEb,aAAa;IACb,mBAAmB;;IAEnB,sBAAsB;;;AAG1B;;AAEA;;IAEI,WAAW;IACX,cAAc;;AAElB;;AAEA;;IAEI,WAAW;IACX,aAAa;;IAEb,uBAAuB;;AAE3B;;AAEA;;;IAGI,WAAW;IACX,aAAa;;IAEb,aAAa;IACb,mBAAmB;IACnB,eAAe;;IAEf,wBAAwB;;AAE5B;;;AAGA;;IAEI,WAAW;IACX,aAAa;;IAEb,wBAAwB;;IAExB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;;;;AAKvB;;AAEA;IACI;;;;;KAKC;;;AAGL;;AAEA;;;;;;;CAOC;;AAED;;;IAGI,oBAAoB;IACpB,mBAAmB;IACnB,aAAa;IACb,YAAY;;;AAGhB;;;AAGA;;AAEA,eAAe;;AAEf;;;AAGA;;IAEI,SAAS;IACT,UAAU;IACV,sBAAsB;;AAE1B;;AAEA;;IAEI,aAAa;IACb,YAAY;;AAEhB;;AAEA;;;IAGI,aAAa;IACb,YAAY;IACZ,WAAW;IACX,4BAA4B;IAC5B,8BAA8B;;;AAGlC;;AAEA;;;IAGI,kBAAkB;IAClB,eAAe;IACf,aAAa;;IAEb,8BAA8B;;AAElC;;AAEA;;IAEI,kBAAkB;IAClB,qBAAqB;;AAEzB;;AAEA;;IAEI,kBAAkB;IAClB,sBAAsB;;AAE1B;;AAEA;;;IAGI,kBAAkB;IAClB,eAAe;IACf,aAAa;IACb,2BAA2B;;AAE/B;;AAEA;;IAEI,eAAe;IACf,uBAAuB;;;AAG3B;;AAEA;;IAEI,eAAe;IACf,wBAAwB;;AAE5B;;AAEA;;;IAGI,kBAAkB;IAClB,eAAe;IACf,wBAAwB;IACxB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;;AAGvB;;;AAGA;;IAEI;;;;;KAKC;;AAEL;;AAEA;;;;;;;CAOC;;;AAGD;;;IAGI,oBAAoB;IACpB,mBAAmB;IACnB,aAAa;IACb,YAAY;;;AAGhB;;AAEA","sourcesContent":["\n/*Mobile View*/\n@media only screen and (max-width: 960px) {\n\n\n* {\n\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n\n}\n    \n\n\n.fullPage {\n\n    display: flex;\n    flex-wrap: wrap;\n\n\n}\n\n\n\n.menuBar {\n\n    width: 100%;\n    height: 240px;\n    \n\n}\n\n.searchSection {\n\n    width: 100%;\n    height: 120px;\n\n    display: flex;\n    flex-direction: row;\n\n    background-color: red;\n\n\n}\n\n.buttonSection {\n\n    width: 100%;\n    height: 120px;\n\n    display: flex;\n    flex-direction: row;\n\n    background-color: blue;\n\n\n}\n\n.data {\n\n    width: 100%;\n    height: 1200px;\n\n}\n\n.dataSectionTop {\n\n    width: 100%;\n    height: 600px;\n\n    background-color: green;\n\n}\n\n.dataSectionBottom {\n\n\n    width: 100%;\n    height: 600px;\n\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n\n    background-color: yellow;\n\n}\n\n\n.mapSection {\n\n    width: 100%;\n    height: 600px;\n\n    background-color: silver;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n\n\n\n}\n\n.borderCheck {\n    /*\n    border-style: dashed;\n    border-color: black;\n    width: 50px;\n    height: 50px;\n    */\n\n\n}\n\n/*\n.temperatureSwitchButton {\n\n    height: 50px;\n    width: 50px;\n\n}\n*/\n\n#map {\n\n\n    border-style: dashed;\n    border-color: black;\n    height: 300px;\n    width: 300px;\n\n\n}\n\n\n}\n\n/*Desktop View*/\n\n@media only screen and (min-width: 961px) {\n\n\n* {\n\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n\n}\n\nbody {\n\n    height: 100vh;\n    width: 100vw;\n\n}\n\n.fullPage {\n\n\n    display: grid;\n    height: 100%;\n    width: 100%;\n    grid-template-rows: 1fr 11fr;\n    grid-template-columns: 1fr 1fr;\n\n\n}\n\n.menuBar {\n\n\n    grid-column: 1 / 3;\n    grid-row: 1 / 2;\n    display: grid;\n\n    grid-template-columns: 1fr 1fr;\n\n}\n\n.searchSection {\n\n    grid-column: 1 / 2;\n    background-color: red;\n\n}\n\n.buttonSection {\n\n    grid-column: 2 / 3;\n    background-color: blue;\n\n}\n\n.data {\n\n\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n\n}\n\n.dataSectionTop {\n\n    grid-row: 1 / 2;\n    background-color: green;\n\n\n}\n\n.dataSectionBottom {\n\n    grid-row: 2 / 3;\n    background-color: yellow;\n\n}\n\n.mapSection {\n\n\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n    background-color: silver;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n\n}\n\n\n.borderCheck {\n\n    /*\n    border-style: dashed;\n    border-color: black;\n    width: 200px;\n    height: 200px;\n    */\n\n}\n\n/*\n.temperatureSwitchButton {\n\n    height: 50px;\n    width: 50px;\n\n}\n*/\n\n\n#map {\n\n\n    border-style: dashed;\n    border-color: black;\n    height: 800px;\n    width: 800px;\n\n\n}\n\n}\n\n"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/promisedata.js":
/*!****************************!*\
  !*** ./src/promisedata.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "asyncWeather": () => (/* binding */ asyncWeather),
/* harmony export */   "randomCities": () => (/* binding */ randomCities)
/* harmony export */ });
function asyncWeather (searchlocation) {

    return new Promise (function (resolve, reject) {

        //let searchlocation = 'abuja';

        let attemptedLocation = fetch(`https://api.weatherapi.com/v1/current.json?key=8a9310029e7f43e2b6a40658230205&q=${searchlocation}&aqi=no`, {mode: 'cors'});

        attemptedLocation.then(function(response) {
            //console.log(response)
            return response.json();
        })
        .then(function(response) {
            //console.log(response)
            return response;
        })
        .then(function(response) {
            resolve(response)

        })

        .catch(function(error) {

            console.log(error)

        })


        

    })



};

/////////

//https://www.planetware.com/world/top-cities-in-the-world-to-visit-eng-1-39.htm
//https://www.travelandleisure.com/worlds-best/cities


let randomCities = [

'Paris',
'New York City',
'London',
'Bangkok',
'Hong Kong',
'Dubai',
'Singapore',
'Rome',
'Macau',
'Istanbul',
'Kuala Lumpur',
'Delhi',
'Tokyo',
'Antayla',
'Mexico City',
'Porto',
'San Francisco',
'Beijing',
'Los Angeles',
'Chicago',
'Barcelona',
'Abu Dhabi',
'Amsterdam',
'Madrid',
'Sydney',
'San Miguel de Allende',
'Lisbon',
'Vienna',
'Udaipur',
'Ubud',
'Kyoto',
'Florence',
'Oaxaca',
'Chiang Mai',
'Bangkok',
'Taipei',
'Krakow',
'Luang Prabang',
'San Sebastian',
'Bodrum',
'Jaipur',
'Charleston',
'Cape Town',
'Trieste',
'Ljubljana',
'Seoul',
'Antigua Guatemala',
'Porto',
'Accra',
'Benguerra Island',
'Cairo',
'Lagos',
'Abuja',
'Marrakesh',
'Stone Town',
'Johannesburg',
'Kigali',
'Essaouira',
'Windhoek',
'Durban',
'Nairobi',
'Algiers',
'Luxor',
'Dar es Salaam',
'Fes'


]














/***/ }),

/***/ "./src/structure.js":
/*!**************************!*\
  !*** ./src/structure.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buttonSection": () => (/* binding */ buttonSection),
/* harmony export */   "cloudBox": () => (/* binding */ cloudBox),
/* harmony export */   "conditionIcon": () => (/* binding */ conditionIcon),
/* harmony export */   "conditionInfoHeading": () => (/* binding */ conditionInfoHeading),
/* harmony export */   "currentTemperature": () => (/* binding */ currentTemperature),
/* harmony export */   "dataSection": () => (/* binding */ dataSection),
/* harmony export */   "dataSectionBottom": () => (/* binding */ dataSectionBottom),
/* harmony export */   "dataSectionTop": () => (/* binding */ dataSectionTop),
/* harmony export */   "fullPage": () => (/* binding */ fullPage),
/* harmony export */   "humidityBox": () => (/* binding */ humidityBox),
/* harmony export */   "lastUpdated": () => (/* binding */ lastUpdated),
/* harmony export */   "locationHeading": () => (/* binding */ locationHeading),
/* harmony export */   "mapHolder": () => (/* binding */ mapHolder),
/* harmony export */   "mapSection": () => (/* binding */ mapSection),
/* harmony export */   "menuBar": () => (/* binding */ menuBar),
/* harmony export */   "randomButton": () => (/* binding */ randomButton),
/* harmony export */   "refreshButton": () => (/* binding */ refreshButton),
/* harmony export */   "searchBar": () => (/* binding */ searchBar),
/* harmony export */   "searchButton": () => (/* binding */ searchButton),
/* harmony export */   "searchSection": () => (/* binding */ searchSection),
/* harmony export */   "temperatureSwitchButton": () => (/* binding */ temperatureSwitchButton),
/* harmony export */   "uvBox": () => (/* binding */ uvBox),
/* harmony export */   "windBox": () => (/* binding */ windBox)
/* harmony export */ });

/////////////////////////////////////////////////////
let elementCreator = function(type) {

    return function(className) {

        let element = document.createElement(type);
        element.classList.add(className);
        
        return element;

    }

}

let divmaker = elementCreator('div');

////////////////////////////////////////////////////////

let fullPage = divmaker('fullPage');

////////////////////////////////////////////////////////
////Start of Making Main Sections

let menuBar = divmaker('menuBar');///////////

let searchSection = divmaker('searchSection');
menuBar.appendChild(searchSection);

let buttonSection = divmaker('buttonSection');
menuBar.appendChild(buttonSection);


fullPage.appendChild(menuBar);


//////////////////////////////////////////////////////////

let dataSection = divmaker('data');///////////


let dataSectionTop = divmaker('dataSectionTop');
dataSection.appendChild(dataSectionTop);

let dataSectionBottom = divmaker('dataSectionBottom');
dataSection.appendChild(dataSectionBottom);


fullPage.appendChild(dataSection);

//////////////////////////////////////////////////////////

let mapSection = divmaker('mapSection');/////////////

let mapHolder = divmaker('map');
mapHolder.id = 'map';

mapSection.appendChild(mapHolder);


fullPage.appendChild(mapSection);


/////////////////////////////////////////////////////////

let formMaker = elementCreator('form');

let searchForm = formMaker('searchForm');

/////////////////////////////////////

let searchBarMaker = elementCreator('input');

let searchBar = searchBarMaker('searchBar');

/////////////////////////////////////////////

searchBar.type = 'text';
searchBar.id = 'searchBar';
searchBar.name = 'searchBar';

///////////////////////////////////////////

let searchButton = document.createElement('button');
searchButton.classList.add('searchButton');
searchButton.type = 'button';
searchButton.textContent = 'Search';

////////////////////////////////////////

searchForm.appendChild(searchBar);
searchForm.appendChild(searchButton);

searchSection.appendChild(searchForm);


////////////////////////////////////////////////////////

//// Start of Making Units Within Main Sections

let locationHeading = divmaker('locationHeading');
locationHeading.classList.add('borderCheck');
let currentTemperature = divmaker('currentTemperature');
currentTemperature.classList.add('borderCheck');

let conditionIcon = document.createElement('img');
conditionIcon.classList.add('conditionIcon');
conditionIcon.classList.add('borderCheck');


let conditionInfoHeading = divmaker('conditionInfoHeading');
conditionInfoHeading.classList.add('borderCheck');
let lastUpdated = divmaker('lastUpdated');
lastUpdated.classList.add('borderCheck');
let temperatureSwitchButton = document.createElement('button');
temperatureSwitchButton.classList.add('temperatureSwitchButton');
temperatureSwitchButton.classList.add('borderCheck');
temperatureSwitchButton.textContent = `Switch Temperature Unit`

dataSectionTop.appendChild(locationHeading);
dataSectionTop.appendChild(currentTemperature);
dataSectionTop.appendChild(conditionIcon);
dataSectionTop.appendChild(conditionInfoHeading);
dataSectionTop.appendChild(lastUpdated);
dataSectionTop.appendChild(temperatureSwitchButton);


////////////////////////////////////////////////////

let uvBox = divmaker('uvBox');
uvBox.classList.add('borderCheck');
let humidityBox = divmaker('humidityBox');
humidityBox.classList.add('borderCheck');
let windBox = divmaker('windBox');
windBox.classList.add('borderCheck');
let cloudBox = divmaker('cloudBox');
cloudBox.classList.add('borderCheck');

dataSectionBottom.appendChild(uvBox);
dataSectionBottom.appendChild(humidityBox);
dataSectionBottom.appendChild(windBox);
dataSectionBottom.appendChild(cloudBox);

/////////////////////////////////////////////////////

let refreshButton = document.createElement('button');
refreshButton.classList.add('refreshButton');
refreshButton.textContent = 'Refresh';

let randomButton = document.createElement('button');
randomButton.classList.add('randomButton');
randomButton.textContent = 'Random';

buttonSection.appendChild(refreshButton);
buttonSection.appendChild(randomButton);




////////////////////////////////////////////////////////////













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
/* harmony import */ var _promisedata_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./promisedata.js */ "./src/promisedata.js");
/* harmony import */ var _structure_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./structure.js */ "./src/structure.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



//const cities = window.require('all-the-cities');


/*
asyncWeather('san diego').then(function(response) {
    console.log(response)
})
*/

let currentWeather = {
    
};



///////////////////////////////////////////Global Functions

let loadLastSearchToDom = function() {

    let lastWeatherJson = localStorage.getItem('currentWeather');
    let lastWeather = JSON.parse(lastWeatherJson);
    currentWeather = lastWeather;
    (0,_promisedata_js__WEBPACK_IMPORTED_MODULE_0__.asyncWeather)(currentWeather.name).then(function(response) {
        //console.log(response);
        currentWeather.officialName = response.location.name;
        currentWeather.region = response.location.region;
        currentWeather.country = response.location.country;
        currentWeather.lat = response.location.lat;
        currentWeather.lon = response.location.lon;
        currentWeather.tempF = response.current.temp_f;
        currentWeather.tempC = response.current.temp_c;
        currentWeather.conditionText = response.current.condition.text;
        currentWeather.conditionIcon = 'https://' + ((response.current.condition.icon).split('//'))[1];
        currentWeather.humidity = response.current.humidity;
        currentWeather.wind = response.current.wind_mph;
        currentWeather.cloud = response.current.cloud;
        currentWeather.uv = response.current.uv;
        currentWeather.lastUpdated = new Date();

        map.panTo([currentWeather.lat, currentWeather.lon]);
        L.marker([currentWeather.lat, currentWeather.lon]).addTo(map);

        return currentWeather

    }).then(function(currentWeather) {

        console.log(`Just Checking`);
        displayCurrentWeatherToDom();
        saveLastSearched();

        /*

        for (const property in currentWeather  ) {
            console.log(currentWeather[property]);
        }
        */
        //return currentWeather

    })

    
    console.log(currentWeather);
    return currentWeather;




}


let displayCurrentWeatherToDom = function() {

    _structure_js__WEBPACK_IMPORTED_MODULE_1__.locationHeading.textContent = `${currentWeather.officialName}, ${currentWeather.region}, ${currentWeather.country}`;
    _structure_js__WEBPACK_IMPORTED_MODULE_1__.currentTemperature.textContent = `${currentWeather.tempF} degrees F`;

    _structure_js__WEBPACK_IMPORTED_MODULE_1__.conditionIcon.src = `${currentWeather.conditionIcon}`;
    _structure_js__WEBPACK_IMPORTED_MODULE_1__.conditionInfoHeading.textContent = `${currentWeather.conditionText} in ${currentWeather.officialName}`;

    _structure_js__WEBPACK_IMPORTED_MODULE_1__.lastUpdated.textContent = `Last Updated on ${currentWeather.lastUpdated}`;

    _structure_js__WEBPACK_IMPORTED_MODULE_1__.uvBox.textContent = `${currentWeather.uv}`;
    _structure_js__WEBPACK_IMPORTED_MODULE_1__.humidityBox.textContent = `${currentWeather.humidity}`;
    _structure_js__WEBPACK_IMPORTED_MODULE_1__.windBox.textContent = `${currentWeather.wind}`;
    _structure_js__WEBPACK_IMPORTED_MODULE_1__.cloudBox.textContent = `${currentWeather.cloud}`;




}

let saveLastSearched = function() {

    let currentWeatherJson = JSON.stringify(currentWeather);
    localStorage.setItem('currentWeather', currentWeatherJson);


}




//////////////////////////////////////////////


///Appending to DOM



document.body.appendChild(_structure_js__WEBPACK_IMPORTED_MODULE_1__.fullPage);

const map = L.map('map').setView([51.505, -0.09], 13);
const marker = L.marker([51.5, -0.09]).addTo(map);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);



////////////////////////////////////////////////


if (localStorage.getItem('currentWeather')) {
    loadLastSearchToDom();

}

_structure_js__WEBPACK_IMPORTED_MODULE_1__.searchButton.addEventListener('click', function() {

    currentWeather.name = _structure_js__WEBPACK_IMPORTED_MODULE_1__.searchBar.value;
    (0,_promisedata_js__WEBPACK_IMPORTED_MODULE_0__.asyncWeather)(currentWeather.name).then(function(response) {
        //console.log(response);
        currentWeather.officialName = response.location.name;
        currentWeather.region = response.location.region;
        currentWeather.country = response.location.country;
        currentWeather.lat = response.location.lat;
        currentWeather.lon = response.location.lon;
        currentWeather.tempF = response.current.temp_f;
        currentWeather.tempC = response.current.temp_c;
        currentWeather.conditionText = response.current.condition.text;
        currentWeather.conditionIcon = 'https://' + ((response.current.condition.icon).split('//'))[1];
        currentWeather.humidity = response.current.humidity;
        currentWeather.wind = response.current.wind_mph;
        currentWeather.cloud = response.current.cloud;
        currentWeather.uv = response.current.uv;
        currentWeather.lastUpdated = new Date();

        
        map.panTo([currentWeather.lat, currentWeather.lon]);
        L.marker([currentWeather.lat, currentWeather.lon]).addTo(map);
        return currentWeather

    }).then(function(currentWeather) {

        console.log(`Just Checking`);
        displayCurrentWeatherToDom();
        saveLastSearched();

        /*

        for (const property in currentWeather  ) {
            console.log(currentWeather[property]);
        }
        */
        
        //return currentWeather

    })

    
    console.log(currentWeather);
    return currentWeather;

    //displayCurrentWeatherToDom();

})

_structure_js__WEBPACK_IMPORTED_MODULE_1__.temperatureSwitchButton.addEventListener('click', function() {

    if (_structure_js__WEBPACK_IMPORTED_MODULE_1__.currentTemperature.textContent === `${currentWeather.tempF} degrees F`) {

        _structure_js__WEBPACK_IMPORTED_MODULE_1__.currentTemperature.textContent = `${currentWeather.tempC} degrees C`;

    }   else if (_structure_js__WEBPACK_IMPORTED_MODULE_1__.currentTemperature.textContent === `${currentWeather.tempC} degrees C`) {

        _structure_js__WEBPACK_IMPORTED_MODULE_1__.currentTemperature.textContent = `${currentWeather.tempF} degrees F`

    }

})

_structure_js__WEBPACK_IMPORTED_MODULE_1__.refreshButton.addEventListener('click', function() {

    ;(0,_promisedata_js__WEBPACK_IMPORTED_MODULE_0__.asyncWeather)(currentWeather.name).then(function(response) {
        //console.log(response);
        currentWeather.officialName = response.location.name;
        currentWeather.region = response.location.region;
        currentWeather.country = response.location.country;
        currentWeather.lat = response.location.lat;
        currentWeather.lon = response.location.lon;
        currentWeather.tempF = response.current.temp_f;
        currentWeather.tempC = response.current.temp_c;
        currentWeather.conditionText = response.current.condition.text;
        currentWeather.conditionIcon = 'https://' + ((response.current.condition.icon).split('//'))[1];
        currentWeather.humidity = response.current.humidity;
        currentWeather.wind = response.current.wind_mph;
        currentWeather.cloud = response.current.cloud;
        currentWeather.uv = response.current.uv;
        currentWeather.lastUpdated = new Date();

        map.panTo([currentWeather.lat, currentWeather.lon]);
        L.marker([currentWeather.lat, currentWeather.lon]).addTo(map);

        return currentWeather

    }).then(function(currentWeather) {

        console.log(`Just Checking`);
        displayCurrentWeatherToDom();
        saveLastSearched();

        /*

        for (const property in currentWeather  ) {
            console.log(currentWeather[property]);
        }
        */
        
        //return currentWeather

    })

    
    console.log(currentWeather);
    return currentWeather;

    //displayCurrentWeatherToDom();



})

_structure_js__WEBPACK_IMPORTED_MODULE_1__.randomButton.addEventListener('click', function() {

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
    }

    let randomNumber = getRandomIntInclusive(0, _promisedata_js__WEBPACK_IMPORTED_MODULE_0__.randomCities.length);

    currentWeather.name = _promisedata_js__WEBPACK_IMPORTED_MODULE_0__.randomCities[randomNumber];

    (0,_promisedata_js__WEBPACK_IMPORTED_MODULE_0__.asyncWeather)(currentWeather.name).then(function(response) {
        //console.log(response);
        currentWeather.officialName = response.location.name;
        currentWeather.region = response.location.region;
        currentWeather.country = response.location.country;
        currentWeather.lat = response.location.lat;
        currentWeather.lon = response.location.lon;
        currentWeather.tempF = response.current.temp_f;
        currentWeather.tempC = response.current.temp_c;
        currentWeather.conditionText = response.current.condition.text;
        currentWeather.conditionIcon = 'https://' + ((response.current.condition.icon).split('//'))[1];
        currentWeather.humidity = response.current.humidity;
        currentWeather.wind = response.current.wind_mph;
        currentWeather.cloud = response.current.cloud;
        currentWeather.uv = response.current.uv;
        currentWeather.lastUpdated = new Date();

        map.panTo([currentWeather.lat, currentWeather.lon]);
        L.marker([currentWeather.lat, currentWeather.lon]).addTo(map);

        return currentWeather

    }).then(function(currentWeather) {

        console.log(`Just Checking`);
        displayCurrentWeatherToDom();
        saveLastSearched();

        /*

        for (const property in currentWeather  ) {
            console.log(currentWeather[property]);
        }
        */
        
        //return currentWeather

    })

    
    console.log(currentWeather);
    return currentWeather;

    //displayCurrentWeatherToDom();



})



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSx3R0FBd0csU0FBUyxrQkFBa0IsaUJBQWlCLDZCQUE2QixLQUFLLHVCQUF1QixzQkFBc0Isc0JBQXNCLE9BQU8sa0JBQWtCLG9CQUFvQixvQkFBb0IsV0FBVyxvQkFBb0Isb0JBQW9CLG9CQUFvQixzQkFBc0IsMEJBQTBCLDhCQUE4QixPQUFPLG9CQUFvQixvQkFBb0Isb0JBQW9CLHNCQUFzQiwwQkFBMEIsK0JBQStCLE9BQU8sV0FBVyxvQkFBb0IscUJBQXFCLEtBQUsscUJBQXFCLG9CQUFvQixvQkFBb0IsZ0NBQWdDLEtBQUssd0JBQXdCLHNCQUFzQixvQkFBb0Isc0JBQXNCLDBCQUEwQixzQkFBc0IsaUNBQWlDLEtBQUssbUJBQW1CLG9CQUFvQixvQkFBb0IsaUNBQWlDLHNCQUFzQiw4QkFBOEIsMEJBQTBCLFdBQVcsa0JBQWtCLG1DQUFtQywwQkFBMEIsa0JBQWtCLG1CQUFtQixlQUFlLGtDQUFrQyxxQkFBcUIsa0JBQWtCLEtBQUssY0FBYywrQkFBK0IsMEJBQTBCLG9CQUFvQixtQkFBbUIsT0FBTyxPQUFPLG1FQUFtRSxTQUFTLGtCQUFrQixpQkFBaUIsNkJBQTZCLEtBQUssVUFBVSxzQkFBc0IsbUJBQW1CLEtBQUssZUFBZSx3QkFBd0IsbUJBQW1CLGtCQUFrQixtQ0FBbUMscUNBQXFDLE9BQU8sY0FBYyw2QkFBNkIsc0JBQXNCLG9CQUFvQix1Q0FBdUMsS0FBSyxvQkFBb0IsMkJBQTJCLDRCQUE0QixLQUFLLG9CQUFvQiwyQkFBMkIsNkJBQTZCLEtBQUssV0FBVyw2QkFBNkIsc0JBQXNCLG9CQUFvQixrQ0FBa0MsS0FBSyxxQkFBcUIsd0JBQXdCLDhCQUE4QixPQUFPLHdCQUF3Qix3QkFBd0IsK0JBQStCLEtBQUssaUJBQWlCLDZCQUE2QixzQkFBc0IsK0JBQStCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLE9BQU8sb0JBQW9CLHFDQUFxQywwQkFBMEIsbUJBQW1CLG9CQUFvQixhQUFhLGtDQUFrQyxxQkFBcUIsa0JBQWtCLEtBQUssZ0JBQWdCLCtCQUErQiwwQkFBMEIsb0JBQW9CLG1CQUFtQixPQUFPLEtBQUssV0FBVyw0RUFBNEUsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLGFBQWEsU0FBUyxNQUFNLFVBQVUsWUFBWSxTQUFTLE1BQU0sVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxhQUFhLGVBQWUsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLGFBQWEsZUFBZSxPQUFPLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsYUFBYSxPQUFPLE9BQU8sVUFBVSxXQUFXLFVBQVUsWUFBWSxZQUFZLGFBQWEsUUFBUSxNQUFNLFVBQVUsV0FBVyxhQUFhLFdBQVcsWUFBWSxpQkFBaUIsT0FBTyxLQUFLLFNBQVMsT0FBTyxNQUFNLFdBQVcsTUFBTSxPQUFPLFlBQVksYUFBYSxXQUFXLFlBQVksUUFBUSxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxhQUFhLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFBVSxVQUFVLFlBQVksZUFBZSxPQUFPLE9BQU8sWUFBWSxXQUFXLFdBQVcsYUFBYSxPQUFPLE1BQU0sWUFBWSxjQUFjLE9BQU8sTUFBTSxZQUFZLGNBQWMsT0FBTyxPQUFPLFlBQVksV0FBVyxVQUFVLGFBQWEsT0FBTyxNQUFNLFVBQVUsY0FBYyxPQUFPLE1BQU0sVUFBVSxhQUFhLE9BQU8sT0FBTyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksZUFBZSxRQUFRLE1BQU0sU0FBUyxNQUFNLE1BQU0sV0FBVyxPQUFPLE9BQU8sWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLHVGQUF1RixTQUFTLGtCQUFrQixpQkFBaUIsNkJBQTZCLEtBQUssdUJBQXVCLHNCQUFzQixzQkFBc0IsT0FBTyxrQkFBa0Isb0JBQW9CLG9CQUFvQixXQUFXLG9CQUFvQixvQkFBb0Isb0JBQW9CLHNCQUFzQiwwQkFBMEIsOEJBQThCLE9BQU8sb0JBQW9CLG9CQUFvQixvQkFBb0Isc0JBQXNCLDBCQUEwQiwrQkFBK0IsT0FBTyxXQUFXLG9CQUFvQixxQkFBcUIsS0FBSyxxQkFBcUIsb0JBQW9CLG9CQUFvQixnQ0FBZ0MsS0FBSyx3QkFBd0Isc0JBQXNCLG9CQUFvQixzQkFBc0IsMEJBQTBCLHNCQUFzQixpQ0FBaUMsS0FBSyxtQkFBbUIsb0JBQW9CLG9CQUFvQixpQ0FBaUMsc0JBQXNCLDhCQUE4QiwwQkFBMEIsV0FBVyxrQkFBa0IsbUNBQW1DLDBCQUEwQixrQkFBa0IsbUJBQW1CLGVBQWUsa0NBQWtDLHFCQUFxQixrQkFBa0IsS0FBSyxjQUFjLCtCQUErQiwwQkFBMEIsb0JBQW9CLG1CQUFtQixPQUFPLE9BQU8sbUVBQW1FLFNBQVMsa0JBQWtCLGlCQUFpQiw2QkFBNkIsS0FBSyxVQUFVLHNCQUFzQixtQkFBbUIsS0FBSyxlQUFlLHdCQUF3QixtQkFBbUIsa0JBQWtCLG1DQUFtQyxxQ0FBcUMsT0FBTyxjQUFjLDZCQUE2QixzQkFBc0Isb0JBQW9CLHVDQUF1QyxLQUFLLG9CQUFvQiwyQkFBMkIsNEJBQTRCLEtBQUssb0JBQW9CLDJCQUEyQiw2QkFBNkIsS0FBSyxXQUFXLDZCQUE2QixzQkFBc0Isb0JBQW9CLGtDQUFrQyxLQUFLLHFCQUFxQix3QkFBd0IsOEJBQThCLE9BQU8sd0JBQXdCLHdCQUF3QiwrQkFBK0IsS0FBSyxpQkFBaUIsNkJBQTZCLHNCQUFzQiwrQkFBK0Isb0JBQW9CLDhCQUE4QiwwQkFBMEIsT0FBTyxvQkFBb0IscUNBQXFDLDBCQUEwQixtQkFBbUIsb0JBQW9CLGFBQWEsa0NBQWtDLHFCQUFxQixrQkFBa0IsS0FBSyxnQkFBZ0IsK0JBQStCLDBCQUEwQixvQkFBb0IsbUJBQW1CLE9BQU8sS0FBSyx1QkFBdUI7QUFDNWhPO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7O0FBRUE7O0FBRUE7O0FBRUEseUhBQXlILGVBQWUsV0FBVyxhQUFhOztBQUVoSztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUEsU0FBUzs7QUFFVDs7QUFFQTs7QUFFQSxTQUFTOzs7QUFHVDs7QUFFQSxLQUFLOzs7O0FBSUw7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7OztBQUdtQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqSG5DO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxrQ0FBa0M7O0FBRWxDO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7OztBQUdBOztBQUVBLG1DQUFtQzs7O0FBR25DO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUEsd0NBQXdDOztBQUV4QztBQUNBOztBQUVBOzs7QUFHQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7OztBQUtBOzs7QUFHNFU7Ozs7Ozs7Ozs7Ozs7OztVQ2xLNVU7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NB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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7Ozs7QUFJQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3Byb21pc2VkYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvc3RydWN0dXJlLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG4vKk1vYmlsZSBWaWV3Ki9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XFxuXFxuXFxuKiB7XFxuXFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXG59XFxuICAgIFxcblxcblxcbi5mdWxsUGFnZSB7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG5cXG5cXG59XFxuXFxuXFxuXFxuLm1lbnVCYXIge1xcblxcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAyNDBweDtcXG4gICAgXFxuXFxufVxcblxcbi5zZWFyY2hTZWN0aW9uIHtcXG5cXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTIwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG5cXG5cXG59XFxuXFxuLmJ1dHRvblNlY3Rpb24ge1xcblxcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMjBweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG5cXG5cXG59XFxuXFxuLmRhdGEge1xcblxcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMjAwcHg7XFxuXFxufVxcblxcbi5kYXRhU2VjdGlvblRvcCB7XFxuXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDYwMHB4O1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG5cXG59XFxuXFxuLmRhdGFTZWN0aW9uQm90dG9tIHtcXG5cXG5cXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNjAwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcblxcbn1cXG5cXG5cXG4ubWFwU2VjdGlvbiB7XFxuXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDYwMHB4O1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzaWx2ZXI7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcblxcblxcblxcbn1cXG5cXG4uYm9yZGVyQ2hlY2sge1xcbiAgICAvKlxcbiAgICBib3JkZXItc3R5bGU6IGRhc2hlZDtcXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgKi9cXG5cXG5cXG59XFxuXFxuLypcXG4udGVtcGVyYXR1cmVTd2l0Y2hCdXR0b24ge1xcblxcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcblxcbn1cXG4qL1xcblxcbiNtYXAge1xcblxcblxcbiAgICBib3JkZXItc3R5bGU6IGRhc2hlZDtcXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcblxcblxcbn1cXG5cXG5cXG59XFxuXFxuLypEZXNrdG9wIFZpZXcqL1xcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYxcHgpIHtcXG5cXG5cXG4qIHtcXG5cXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcbn1cXG5cXG5ib2R5IHtcXG5cXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcblxcbn1cXG5cXG4uZnVsbFBhZ2Uge1xcblxcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuXFxuXFxufVxcblxcbi5tZW51QmFyIHtcXG5cXG5cXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG5cXG59XFxuXFxuLnNlYXJjaFNlY3Rpb24ge1xcblxcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG5cXG59XFxuXFxuLmJ1dHRvblNlY3Rpb24ge1xcblxcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuXFxufVxcblxcbi5kYXRhIHtcXG5cXG5cXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG5cXG59XFxuXFxuLmRhdGFTZWN0aW9uVG9wIHtcXG5cXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG5cXG5cXG59XFxuXFxuLmRhdGFTZWN0aW9uQm90dG9tIHtcXG5cXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxuXFxufVxcblxcbi5tYXBTZWN0aW9uIHtcXG5cXG5cXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHNpbHZlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuXFxufVxcblxcblxcbi5ib3JkZXJDaGVjayB7XFxuXFxuICAgIC8qXFxuICAgIGJvcmRlci1zdHlsZTogZGFzaGVkO1xcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgICovXFxuXFxufVxcblxcbi8qXFxuLnRlbXBlcmF0dXJlU3dpdGNoQnV0dG9uIHtcXG5cXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG5cXG59XFxuKi9cXG5cXG5cXG4jbWFwIHtcXG5cXG5cXG4gICAgYm9yZGVyLXN0eWxlOiBkYXNoZWQ7XFxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XFxuICAgIGhlaWdodDogODAwcHg7XFxuICAgIHdpZHRoOiA4MDBweDtcXG5cXG5cXG59XFxuXFxufVxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBLGNBQWM7QUFDZDs7O0FBR0E7O0lBRUksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7O0FBRTFCOzs7O0FBSUE7O0lBRUksYUFBYTtJQUNiLGVBQWU7OztBQUduQjs7OztBQUlBOztJQUVJLFdBQVc7SUFDWCxhQUFhOzs7QUFHakI7O0FBRUE7O0lBRUksV0FBVztJQUNYLGFBQWE7O0lBRWIsYUFBYTtJQUNiLG1CQUFtQjs7SUFFbkIscUJBQXFCOzs7QUFHekI7O0FBRUE7O0lBRUksV0FBVztJQUNYLGFBQWE7O0lBRWIsYUFBYTtJQUNiLG1CQUFtQjs7SUFFbkIsc0JBQXNCOzs7QUFHMUI7O0FBRUE7O0lBRUksV0FBVztJQUNYLGNBQWM7O0FBRWxCOztBQUVBOztJQUVJLFdBQVc7SUFDWCxhQUFhOztJQUViLHVCQUF1Qjs7QUFFM0I7O0FBRUE7OztJQUdJLFdBQVc7SUFDWCxhQUFhOztJQUViLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTs7SUFFZix3QkFBd0I7O0FBRTVCOzs7QUFHQTs7SUFFSSxXQUFXO0lBQ1gsYUFBYTs7SUFFYix3QkFBd0I7O0lBRXhCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1COzs7OztBQUt2Qjs7QUFFQTtJQUNJOzs7OztLQUtDOzs7QUFHTDs7QUFFQTs7Ozs7OztDQU9DOztBQUVEOzs7SUFHSSxvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixZQUFZOzs7QUFHaEI7OztBQUdBOztBQUVBLGVBQWU7O0FBRWY7OztBQUdBOztJQUVJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCOztBQUUxQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsWUFBWTs7QUFFaEI7O0FBRUE7OztJQUdJLGFBQWE7SUFDYixZQUFZO0lBQ1osV0FBVztJQUNYLDRCQUE0QjtJQUM1Qiw4QkFBOEI7OztBQUdsQzs7QUFFQTs7O0lBR0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixhQUFhOztJQUViLDhCQUE4Qjs7QUFFbEM7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLHFCQUFxQjs7QUFFekI7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLHNCQUFzQjs7QUFFMUI7O0FBRUE7OztJQUdJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsYUFBYTtJQUNiLDJCQUEyQjs7QUFFL0I7O0FBRUE7O0lBRUksZUFBZTtJQUNmLHVCQUF1Qjs7O0FBRzNCOztBQUVBOztJQUVJLGVBQWU7SUFDZix3QkFBd0I7O0FBRTVCOztBQUVBOzs7SUFHSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjs7O0FBR3ZCOzs7QUFHQTs7SUFFSTs7Ozs7S0FLQzs7QUFFTDs7QUFFQTs7Ozs7OztDQU9DOzs7QUFHRDs7O0lBR0ksb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsWUFBWTs7O0FBR2hCOztBQUVBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbi8qTW9iaWxlIFZpZXcqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcXG5cXG5cXG4qIHtcXG5cXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcbn1cXG4gICAgXFxuXFxuXFxuLmZ1bGxQYWdlIHtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcblxcblxcbn1cXG5cXG5cXG5cXG4ubWVudUJhciB7XFxuXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDI0MHB4O1xcbiAgICBcXG5cXG59XFxuXFxuLnNlYXJjaFNlY3Rpb24ge1xcblxcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMjBweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcblxcblxcbn1cXG5cXG4uYnV0dG9uU2VjdGlvbiB7XFxuXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEyMHB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcblxcblxcbn1cXG5cXG4uZGF0YSB7XFxuXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEyMDBweDtcXG5cXG59XFxuXFxuLmRhdGFTZWN0aW9uVG9wIHtcXG5cXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNjAwcHg7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcblxcbn1cXG5cXG4uZGF0YVNlY3Rpb25Cb3R0b20ge1xcblxcblxcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA2MDBweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxuXFxufVxcblxcblxcbi5tYXBTZWN0aW9uIHtcXG5cXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNjAwcHg7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHNpbHZlcjtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuXFxuXFxuXFxufVxcblxcbi5ib3JkZXJDaGVjayB7XFxuICAgIC8qXFxuICAgIGJvcmRlci1zdHlsZTogZGFzaGVkO1xcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAqL1xcblxcblxcbn1cXG5cXG4vKlxcbi50ZW1wZXJhdHVyZVN3aXRjaEJ1dHRvbiB7XFxuXFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuXFxufVxcbiovXFxuXFxuI21hcCB7XFxuXFxuXFxuICAgIGJvcmRlci1zdHlsZTogZGFzaGVkO1xcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICB3aWR0aDogMzAwcHg7XFxuXFxuXFxufVxcblxcblxcbn1cXG5cXG4vKkRlc2t0b3AgVmlldyovXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjFweCkge1xcblxcblxcbioge1xcblxcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFxufVxcblxcbmJvZHkge1xcblxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuXFxufVxcblxcbi5mdWxsUGFnZSB7XFxuXFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDExZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG5cXG5cXG59XFxuXFxuLm1lbnVCYXIge1xcblxcblxcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG5cXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcblxcbn1cXG5cXG4uc2VhcmNoU2VjdGlvbiB7XFxuXFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcblxcbn1cXG5cXG4uYnV0dG9uU2VjdGlvbiB7XFxuXFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG5cXG59XFxuXFxuLmRhdGEge1xcblxcblxcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcblxcbn1cXG5cXG4uZGF0YVNlY3Rpb25Ub3Age1xcblxcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcblxcblxcbn1cXG5cXG4uZGF0YVNlY3Rpb25Cb3R0b20ge1xcblxcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG5cXG59XFxuXFxuLm1hcFNlY3Rpb24ge1xcblxcblxcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2lsdmVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG5cXG59XFxuXFxuXFxuLmJvcmRlckNoZWNrIHtcXG5cXG4gICAgLypcXG4gICAgYm9yZGVyLXN0eWxlOiBkYXNoZWQ7XFxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgKi9cXG5cXG59XFxuXFxuLypcXG4udGVtcGVyYXR1cmVTd2l0Y2hCdXR0b24ge1xcblxcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcblxcbn1cXG4qL1xcblxcblxcbiNtYXAge1xcblxcblxcbiAgICBib3JkZXItc3R5bGU6IGRhc2hlZDtcXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG4gICAgaGVpZ2h0OiA4MDBweDtcXG4gICAgd2lkdGg6IDgwMHB4O1xcblxcblxcbn1cXG5cXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIGFzeW5jV2VhdGhlciAoc2VhcmNobG9jYXRpb24pIHtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSAoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuXG4gICAgICAgIC8vbGV0IHNlYXJjaGxvY2F0aW9uID0gJ2FidWphJztcblxuICAgICAgICBsZXQgYXR0ZW1wdGVkTG9jYXRpb24gPSBmZXRjaChgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT04YTkzMTAwMjllN2Y0M2UyYjZhNDA2NTgyMzAyMDUmcT0ke3NlYXJjaGxvY2F0aW9ufSZhcWk9bm9gLCB7bW9kZTogJ2NvcnMnfSk7XG5cbiAgICAgICAgYXR0ZW1wdGVkTG9jYXRpb24udGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXNwb25zZSlcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3BvbnNlKVxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSlcblxuICAgICAgICB9KVxuXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcblxuICAgICAgICB9KVxuXG5cbiAgICAgICAgXG5cbiAgICB9KVxuXG5cblxufTtcblxuLy8vLy8vLy8vXG5cbi8vaHR0cHM6Ly93d3cucGxhbmV0d2FyZS5jb20vd29ybGQvdG9wLWNpdGllcy1pbi10aGUtd29ybGQtdG8tdmlzaXQtZW5nLTEtMzkuaHRtXG4vL2h0dHBzOi8vd3d3LnRyYXZlbGFuZGxlaXN1cmUuY29tL3dvcmxkcy1iZXN0L2NpdGllc1xuXG5cbmxldCByYW5kb21DaXRpZXMgPSBbXG5cbidQYXJpcycsXG4nTmV3IFlvcmsgQ2l0eScsXG4nTG9uZG9uJyxcbidCYW5na29rJyxcbidIb25nIEtvbmcnLFxuJ0R1YmFpJyxcbidTaW5nYXBvcmUnLFxuJ1JvbWUnLFxuJ01hY2F1JyxcbidJc3RhbmJ1bCcsXG4nS3VhbGEgTHVtcHVyJyxcbidEZWxoaScsXG4nVG9reW8nLFxuJ0FudGF5bGEnLFxuJ01leGljbyBDaXR5JyxcbidQb3J0bycsXG4nU2FuIEZyYW5jaXNjbycsXG4nQmVpamluZycsXG4nTG9zIEFuZ2VsZXMnLFxuJ0NoaWNhZ28nLFxuJ0JhcmNlbG9uYScsXG4nQWJ1IERoYWJpJyxcbidBbXN0ZXJkYW0nLFxuJ01hZHJpZCcsXG4nU3lkbmV5JyxcbidTYW4gTWlndWVsIGRlIEFsbGVuZGUnLFxuJ0xpc2JvbicsXG4nVmllbm5hJyxcbidVZGFpcHVyJyxcbidVYnVkJyxcbidLeW90bycsXG4nRmxvcmVuY2UnLFxuJ09heGFjYScsXG4nQ2hpYW5nIE1haScsXG4nQmFuZ2tvaycsXG4nVGFpcGVpJyxcbidLcmFrb3cnLFxuJ0x1YW5nIFByYWJhbmcnLFxuJ1NhbiBTZWJhc3RpYW4nLFxuJ0JvZHJ1bScsXG4nSmFpcHVyJyxcbidDaGFybGVzdG9uJyxcbidDYXBlIFRvd24nLFxuJ1RyaWVzdGUnLFxuJ0xqdWJsamFuYScsXG4nU2VvdWwnLFxuJ0FudGlndWEgR3VhdGVtYWxhJyxcbidQb3J0bycsXG4nQWNjcmEnLFxuJ0Jlbmd1ZXJyYSBJc2xhbmQnLFxuJ0NhaXJvJyxcbidMYWdvcycsXG4nQWJ1amEnLFxuJ01hcnJha2VzaCcsXG4nU3RvbmUgVG93bicsXG4nSm9oYW5uZXNidXJnJyxcbidLaWdhbGknLFxuJ0Vzc2FvdWlyYScsXG4nV2luZGhvZWsnLFxuJ0R1cmJhbicsXG4nTmFpcm9iaScsXG4nQWxnaWVycycsXG4nTHV4b3InLFxuJ0RhciBlcyBTYWxhYW0nLFxuJ0ZlcydcblxuXG5dXG5cblxuZXhwb3J0IHthc3luY1dlYXRoZXIsIHJhbmRvbUNpdGllc31cblxuXG5cblxuXG5cblxuXG5cbiIsIlxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbmxldCBlbGVtZW50Q3JlYXRvciA9IGZ1bmN0aW9uKHR5cGUpIHtcblxuICAgIHJldHVybiBmdW5jdGlvbihjbGFzc05hbWUpIHtcblxuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG5cbiAgICB9XG5cbn1cblxubGV0IGRpdm1ha2VyID0gZWxlbWVudENyZWF0b3IoJ2RpdicpO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5sZXQgZnVsbFBhZ2UgPSBkaXZtYWtlcignZnVsbFBhZ2UnKTtcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy9TdGFydCBvZiBNYWtpbmcgTWFpbiBTZWN0aW9uc1xuXG5sZXQgbWVudUJhciA9IGRpdm1ha2VyKCdtZW51QmFyJyk7Ly8vLy8vLy8vLy9cblxubGV0IHNlYXJjaFNlY3Rpb24gPSBkaXZtYWtlcignc2VhcmNoU2VjdGlvbicpO1xubWVudUJhci5hcHBlbmRDaGlsZChzZWFyY2hTZWN0aW9uKTtcblxubGV0IGJ1dHRvblNlY3Rpb24gPSBkaXZtYWtlcignYnV0dG9uU2VjdGlvbicpO1xubWVudUJhci5hcHBlbmRDaGlsZChidXR0b25TZWN0aW9uKTtcblxuXG5mdWxsUGFnZS5hcHBlbmRDaGlsZChtZW51QmFyKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmxldCBkYXRhU2VjdGlvbiA9IGRpdm1ha2VyKCdkYXRhJyk7Ly8vLy8vLy8vLy9cblxuXG5sZXQgZGF0YVNlY3Rpb25Ub3AgPSBkaXZtYWtlcignZGF0YVNlY3Rpb25Ub3AnKTtcbmRhdGFTZWN0aW9uLmFwcGVuZENoaWxkKGRhdGFTZWN0aW9uVG9wKTtcblxubGV0IGRhdGFTZWN0aW9uQm90dG9tID0gZGl2bWFrZXIoJ2RhdGFTZWN0aW9uQm90dG9tJyk7XG5kYXRhU2VjdGlvbi5hcHBlbmRDaGlsZChkYXRhU2VjdGlvbkJvdHRvbSk7XG5cblxuZnVsbFBhZ2UuYXBwZW5kQ2hpbGQoZGF0YVNlY3Rpb24pO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmxldCBtYXBTZWN0aW9uID0gZGl2bWFrZXIoJ21hcFNlY3Rpb24nKTsvLy8vLy8vLy8vLy8vXG5cbmxldCBtYXBIb2xkZXIgPSBkaXZtYWtlcignbWFwJyk7XG5tYXBIb2xkZXIuaWQgPSAnbWFwJztcblxubWFwU2VjdGlvbi5hcHBlbmRDaGlsZChtYXBIb2xkZXIpO1xuXG5cbmZ1bGxQYWdlLmFwcGVuZENoaWxkKG1hcFNlY3Rpb24pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5sZXQgZm9ybU1ha2VyID0gZWxlbWVudENyZWF0b3IoJ2Zvcm0nKTtcblxubGV0IHNlYXJjaEZvcm0gPSBmb3JtTWFrZXIoJ3NlYXJjaEZvcm0nKTtcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5sZXQgc2VhcmNoQmFyTWFrZXIgPSBlbGVtZW50Q3JlYXRvcignaW5wdXQnKTtcblxubGV0IHNlYXJjaEJhciA9IHNlYXJjaEJhck1ha2VyKCdzZWFyY2hCYXInKTtcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbnNlYXJjaEJhci50eXBlID0gJ3RleHQnO1xuc2VhcmNoQmFyLmlkID0gJ3NlYXJjaEJhcic7XG5zZWFyY2hCYXIubmFtZSA9ICdzZWFyY2hCYXInO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmxldCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbnNlYXJjaEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzZWFyY2hCdXR0b24nKTtcbnNlYXJjaEJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG5zZWFyY2hCdXR0b24udGV4dENvbnRlbnQgPSAnU2VhcmNoJztcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5zZWFyY2hGb3JtLmFwcGVuZENoaWxkKHNlYXJjaEJhcik7XG5zZWFyY2hGb3JtLmFwcGVuZENoaWxkKHNlYXJjaEJ1dHRvbik7XG5cbnNlYXJjaFNlY3Rpb24uYXBwZW5kQ2hpbGQoc2VhcmNoRm9ybSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLy8vLyBTdGFydCBvZiBNYWtpbmcgVW5pdHMgV2l0aGluIE1haW4gU2VjdGlvbnNcblxubGV0IGxvY2F0aW9uSGVhZGluZyA9IGRpdm1ha2VyKCdsb2NhdGlvbkhlYWRpbmcnKTtcbmxvY2F0aW9uSGVhZGluZy5jbGFzc0xpc3QuYWRkKCdib3JkZXJDaGVjaycpO1xubGV0IGN1cnJlbnRUZW1wZXJhdHVyZSA9IGRpdm1ha2VyKCdjdXJyZW50VGVtcGVyYXR1cmUnKTtcbmN1cnJlbnRUZW1wZXJhdHVyZS5jbGFzc0xpc3QuYWRkKCdib3JkZXJDaGVjaycpO1xuXG5sZXQgY29uZGl0aW9uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuY29uZGl0aW9uSWNvbi5jbGFzc0xpc3QuYWRkKCdjb25kaXRpb25JY29uJyk7XG5jb25kaXRpb25JY29uLmNsYXNzTGlzdC5hZGQoJ2JvcmRlckNoZWNrJyk7XG5cblxubGV0IGNvbmRpdGlvbkluZm9IZWFkaW5nID0gZGl2bWFrZXIoJ2NvbmRpdGlvbkluZm9IZWFkaW5nJyk7XG5jb25kaXRpb25JbmZvSGVhZGluZy5jbGFzc0xpc3QuYWRkKCdib3JkZXJDaGVjaycpO1xubGV0IGxhc3RVcGRhdGVkID0gZGl2bWFrZXIoJ2xhc3RVcGRhdGVkJyk7XG5sYXN0VXBkYXRlZC5jbGFzc0xpc3QuYWRkKCdib3JkZXJDaGVjaycpO1xubGV0IHRlbXBlcmF0dXJlU3dpdGNoQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG50ZW1wZXJhdHVyZVN3aXRjaEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0ZW1wZXJhdHVyZVN3aXRjaEJ1dHRvbicpO1xudGVtcGVyYXR1cmVTd2l0Y2hCdXR0b24uY2xhc3NMaXN0LmFkZCgnYm9yZGVyQ2hlY2snKTtcbnRlbXBlcmF0dXJlU3dpdGNoQnV0dG9uLnRleHRDb250ZW50ID0gYFN3aXRjaCBUZW1wZXJhdHVyZSBVbml0YFxuXG5kYXRhU2VjdGlvblRvcC5hcHBlbmRDaGlsZChsb2NhdGlvbkhlYWRpbmcpO1xuZGF0YVNlY3Rpb25Ub3AuYXBwZW5kQ2hpbGQoY3VycmVudFRlbXBlcmF0dXJlKTtcbmRhdGFTZWN0aW9uVG9wLmFwcGVuZENoaWxkKGNvbmRpdGlvbkljb24pO1xuZGF0YVNlY3Rpb25Ub3AuYXBwZW5kQ2hpbGQoY29uZGl0aW9uSW5mb0hlYWRpbmcpO1xuZGF0YVNlY3Rpb25Ub3AuYXBwZW5kQ2hpbGQobGFzdFVwZGF0ZWQpO1xuZGF0YVNlY3Rpb25Ub3AuYXBwZW5kQ2hpbGQodGVtcGVyYXR1cmVTd2l0Y2hCdXR0b24pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxubGV0IHV2Qm94ID0gZGl2bWFrZXIoJ3V2Qm94Jyk7XG51dkJveC5jbGFzc0xpc3QuYWRkKCdib3JkZXJDaGVjaycpO1xubGV0IGh1bWlkaXR5Qm94ID0gZGl2bWFrZXIoJ2h1bWlkaXR5Qm94Jyk7XG5odW1pZGl0eUJveC5jbGFzc0xpc3QuYWRkKCdib3JkZXJDaGVjaycpO1xubGV0IHdpbmRCb3ggPSBkaXZtYWtlcignd2luZEJveCcpO1xud2luZEJveC5jbGFzc0xpc3QuYWRkKCdib3JkZXJDaGVjaycpO1xubGV0IGNsb3VkQm94ID0gZGl2bWFrZXIoJ2Nsb3VkQm94Jyk7XG5jbG91ZEJveC5jbGFzc0xpc3QuYWRkKCdib3JkZXJDaGVjaycpO1xuXG5kYXRhU2VjdGlvbkJvdHRvbS5hcHBlbmRDaGlsZCh1dkJveCk7XG5kYXRhU2VjdGlvbkJvdHRvbS5hcHBlbmRDaGlsZChodW1pZGl0eUJveCk7XG5kYXRhU2VjdGlvbkJvdHRvbS5hcHBlbmRDaGlsZCh3aW5kQm94KTtcbmRhdGFTZWN0aW9uQm90dG9tLmFwcGVuZENoaWxkKGNsb3VkQm94KTtcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxubGV0IHJlZnJlc2hCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbnJlZnJlc2hCdXR0b24uY2xhc3NMaXN0LmFkZCgncmVmcmVzaEJ1dHRvbicpO1xucmVmcmVzaEJ1dHRvbi50ZXh0Q29udGVudCA9ICdSZWZyZXNoJztcblxubGV0IHJhbmRvbUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xucmFuZG9tQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3JhbmRvbUJ1dHRvbicpO1xucmFuZG9tQnV0dG9uLnRleHRDb250ZW50ID0gJ1JhbmRvbSc7XG5cbmJ1dHRvblNlY3Rpb24uYXBwZW5kQ2hpbGQocmVmcmVzaEJ1dHRvbik7XG5idXR0b25TZWN0aW9uLmFwcGVuZENoaWxkKHJhbmRvbUJ1dHRvbik7XG5cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cbmV4cG9ydCB7ZnVsbFBhZ2UsIG1lbnVCYXIsIHNlYXJjaFNlY3Rpb24sIGJ1dHRvblNlY3Rpb24sIGRhdGFTZWN0aW9uLCBkYXRhU2VjdGlvblRvcCwgZGF0YVNlY3Rpb25Cb3R0b20sIG1hcFNlY3Rpb24sIHNlYXJjaEJhciwgc2VhcmNoQnV0dG9uLCBsb2NhdGlvbkhlYWRpbmcsIGN1cnJlbnRUZW1wZXJhdHVyZSwgY29uZGl0aW9uSWNvbiwgY29uZGl0aW9uSW5mb0hlYWRpbmcsIGxhc3RVcGRhdGVkLCB0ZW1wZXJhdHVyZVN3aXRjaEJ1dHRvbiwgdXZCb3gsIGh1bWlkaXR5Qm94LCB3aW5kQm94LCBjbG91ZEJveCwgcmFuZG9tQnV0dG9uLCByZWZyZXNoQnV0dG9uLCBtYXBIb2xkZXJ9XG5cblxuXG5cblxuXG5cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHthc3luY1dlYXRoZXIsIHJhbmRvbUNpdGllc30gZnJvbSAnLi9wcm9taXNlZGF0YS5qcyc7XG5pbXBvcnQge2Z1bGxQYWdlLCBtZW51QmFyLCBzZWFyY2hTZWN0aW9uLCBidXR0b25TZWN0aW9uLCBkYXRhU2VjdGlvbiwgZGF0YVNlY3Rpb25Ub3AsIGRhdGFTZWN0aW9uQm90dG9tLCBtYXBTZWN0aW9uLCBzZWFyY2hCYXIsIHNlYXJjaEJ1dHRvbiwgbG9jYXRpb25IZWFkaW5nLCBjdXJyZW50VGVtcGVyYXR1cmUsIGNvbmRpdGlvbkljb24sIGxhc3RVcGRhdGVkLCB0ZW1wZXJhdHVyZVN3aXRjaEJ1dHRvbiwgY29uZGl0aW9uSW5mb0hlYWRpbmcsIHV2Qm94LCBodW1pZGl0eUJveCwgd2luZEJveCwgY2xvdWRCb3gsIHJhbmRvbUJ1dHRvbiwgcmVmcmVzaEJ1dHRvbiwgbWFwSG9sZGVyfSBmcm9tICcuL3N0cnVjdHVyZS5qcyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbi8vY29uc3QgY2l0aWVzID0gd2luZG93LnJlcXVpcmUoJ2FsbC10aGUtY2l0aWVzJyk7XG5cblxuLypcbmFzeW5jV2VhdGhlcignc2FuIGRpZWdvJykudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxufSlcbiovXG5cbmxldCBjdXJyZW50V2VhdGhlciA9IHtcbiAgICBcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vR2xvYmFsIEZ1bmN0aW9uc1xuXG5sZXQgbG9hZExhc3RTZWFyY2hUb0RvbSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgbGV0IGxhc3RXZWF0aGVySnNvbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50V2VhdGhlcicpO1xuICAgIGxldCBsYXN0V2VhdGhlciA9IEpTT04ucGFyc2UobGFzdFdlYXRoZXJKc29uKTtcbiAgICBjdXJyZW50V2VhdGhlciA9IGxhc3RXZWF0aGVyO1xuICAgIGFzeW5jV2VhdGhlcihjdXJyZW50V2VhdGhlci5uYW1lKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICBjdXJyZW50V2VhdGhlci5vZmZpY2lhbE5hbWUgPSByZXNwb25zZS5sb2NhdGlvbi5uYW1lO1xuICAgICAgICBjdXJyZW50V2VhdGhlci5yZWdpb24gPSByZXNwb25zZS5sb2NhdGlvbi5yZWdpb247XG4gICAgICAgIGN1cnJlbnRXZWF0aGVyLmNvdW50cnkgPSByZXNwb25zZS5sb2NhdGlvbi5jb3VudHJ5O1xuICAgICAgICBjdXJyZW50V2VhdGhlci5sYXQgPSByZXNwb25zZS5sb2NhdGlvbi5sYXQ7XG4gICAgICAgIGN1cnJlbnRXZWF0aGVyLmxvbiA9IHJlc3BvbnNlLmxvY2F0aW9uLmxvbjtcbiAgICAgICAgY3VycmVudFdlYXRoZXIudGVtcEYgPSByZXNwb25zZS5jdXJyZW50LnRlbXBfZjtcbiAgICAgICAgY3VycmVudFdlYXRoZXIudGVtcEMgPSByZXNwb25zZS5jdXJyZW50LnRlbXBfYztcbiAgICAgICAgY3VycmVudFdlYXRoZXIuY29uZGl0aW9uVGV4dCA9IHJlc3BvbnNlLmN1cnJlbnQuY29uZGl0aW9uLnRleHQ7XG4gICAgICAgIGN1cnJlbnRXZWF0aGVyLmNvbmRpdGlvbkljb24gPSAnaHR0cHM6Ly8nICsgKChyZXNwb25zZS5jdXJyZW50LmNvbmRpdGlvbi5pY29uKS5zcGxpdCgnLy8nKSlbMV07XG4gICAgICAgIGN1cnJlbnRXZWF0aGVyLmh1bWlkaXR5ID0gcmVzcG9uc2UuY3VycmVudC5odW1pZGl0eTtcbiAgICAgICAgY3VycmVudFdlYXRoZXIud2luZCA9IHJlc3BvbnNlLmN1cnJlbnQud2luZF9tcGg7XG4gICAgICAgIGN1cnJlbnRXZWF0aGVyLmNsb3VkID0gcmVzcG9uc2UuY3VycmVudC5jbG91ZDtcbiAgICAgICAgY3VycmVudFdlYXRoZXIudXYgPSByZXNwb25zZS5jdXJyZW50LnV2O1xuICAgICAgICBjdXJyZW50V2VhdGhlci5sYXN0VXBkYXRlZCA9IG5ldyBEYXRlKCk7XG5cbiAgICAgICAgbWFwLnBhblRvKFtjdXJyZW50V2VhdGhlci5sYXQsIGN1cnJlbnRXZWF0aGVyLmxvbl0pO1xuICAgICAgICBMLm1hcmtlcihbY3VycmVudFdlYXRoZXIubGF0LCBjdXJyZW50V2VhdGhlci5sb25dKS5hZGRUbyhtYXApO1xuXG4gICAgICAgIHJldHVybiBjdXJyZW50V2VhdGhlclxuXG4gICAgfSkudGhlbihmdW5jdGlvbihjdXJyZW50V2VhdGhlcikge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGBKdXN0IENoZWNraW5nYCk7XG4gICAgICAgIGRpc3BsYXlDdXJyZW50V2VhdGhlclRvRG9tKCk7XG4gICAgICAgIHNhdmVMYXN0U2VhcmNoZWQoKTtcblxuICAgICAgICAvKlxuXG4gICAgICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gY3VycmVudFdlYXRoZXIgICkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudFdlYXRoZXJbcHJvcGVydHldKTtcbiAgICAgICAgfVxuICAgICAgICAqL1xuICAgICAgICAvL3JldHVybiBjdXJyZW50V2VhdGhlclxuXG4gICAgfSlcblxuICAgIFxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRXZWF0aGVyKTtcbiAgICByZXR1cm4gY3VycmVudFdlYXRoZXI7XG5cblxuXG5cbn1cblxuXG5sZXQgZGlzcGxheUN1cnJlbnRXZWF0aGVyVG9Eb20gPSBmdW5jdGlvbigpIHtcblxuICAgIGxvY2F0aW9uSGVhZGluZy50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRXZWF0aGVyLm9mZmljaWFsTmFtZX0sICR7Y3VycmVudFdlYXRoZXIucmVnaW9ufSwgJHtjdXJyZW50V2VhdGhlci5jb3VudHJ5fWA7XG4gICAgY3VycmVudFRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFdlYXRoZXIudGVtcEZ9IGRlZ3JlZXMgRmA7XG5cbiAgICBjb25kaXRpb25JY29uLnNyYyA9IGAke2N1cnJlbnRXZWF0aGVyLmNvbmRpdGlvbkljb259YDtcbiAgICBjb25kaXRpb25JbmZvSGVhZGluZy50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRXZWF0aGVyLmNvbmRpdGlvblRleHR9IGluICR7Y3VycmVudFdlYXRoZXIub2ZmaWNpYWxOYW1lfWA7XG5cbiAgICBsYXN0VXBkYXRlZC50ZXh0Q29udGVudCA9IGBMYXN0IFVwZGF0ZWQgb24gJHtjdXJyZW50V2VhdGhlci5sYXN0VXBkYXRlZH1gO1xuXG4gICAgdXZCb3gudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50V2VhdGhlci51dn1gO1xuICAgIGh1bWlkaXR5Qm94LnRleHRDb250ZW50ID0gYCR7Y3VycmVudFdlYXRoZXIuaHVtaWRpdHl9YDtcbiAgICB3aW5kQm94LnRleHRDb250ZW50ID0gYCR7Y3VycmVudFdlYXRoZXIud2luZH1gO1xuICAgIGNsb3VkQm94LnRleHRDb250ZW50ID0gYCR7Y3VycmVudFdlYXRoZXIuY2xvdWR9YDtcblxuXG5cblxufVxuXG5sZXQgc2F2ZUxhc3RTZWFyY2hlZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgbGV0IGN1cnJlbnRXZWF0aGVySnNvbiA9IEpTT04uc3RyaW5naWZ5KGN1cnJlbnRXZWF0aGVyKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVudFdlYXRoZXInLCBjdXJyZW50V2VhdGhlckpzb24pO1xuXG5cbn1cblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cbi8vL0FwcGVuZGluZyB0byBET01cblxuXG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZnVsbFBhZ2UpO1xuXG5jb25zdCBtYXAgPSBMLm1hcCgnbWFwJykuc2V0VmlldyhbNTEuNTA1LCAtMC4wOV0sIDEzKTtcbmNvbnN0IG1hcmtlciA9IEwubWFya2VyKFs1MS41LCAtMC4wOV0pLmFkZFRvKG1hcCk7XG5cbkwudGlsZUxheWVyKCdodHRwczovL3RpbGUub3BlbnN0cmVldG1hcC5vcmcve3p9L3t4fS97eX0ucG5nJywge1xuICAgIG1heFpvb206IDE5LFxuICAgIGF0dHJpYnV0aW9uOiAnJmNvcHk7IDxhIGhyZWY9XCJodHRwOi8vd3d3Lm9wZW5zdHJlZXRtYXAub3JnL2NvcHlyaWdodFwiPk9wZW5TdHJlZXRNYXA8L2E+J1xufSkuYWRkVG8obWFwKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cbmlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudFdlYXRoZXInKSkge1xuICAgIGxvYWRMYXN0U2VhcmNoVG9Eb20oKTtcblxufVxuXG5zZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcblxuICAgIGN1cnJlbnRXZWF0aGVyLm5hbWUgPSBzZWFyY2hCYXIudmFsdWU7XG4gICAgYXN5bmNXZWF0aGVyKGN1cnJlbnRXZWF0aGVyLm5hbWUpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgIGN1cnJlbnRXZWF0aGVyLm9mZmljaWFsTmFtZSA9IHJlc3BvbnNlLmxvY2F0aW9uLm5hbWU7XG4gICAgICAgIGN1cnJlbnRXZWF0aGVyLnJlZ2lvbiA9IHJlc3BvbnNlLmxvY2F0aW9uLnJlZ2lvbjtcbiAgICAgICAgY3VycmVudFdlYXRoZXIuY291bnRyeSA9IHJlc3BvbnNlLmxvY2F0aW9uLmNvdW50cnk7XG4gICAgICAgIGN1cnJlbnRXZWF0aGVyLmxhdCA9IHJlc3BvbnNlLmxvY2F0aW9uLmxhdDtcbiAgICAgICAgY3VycmVudFdlYXRoZXIubG9uID0gcmVzcG9uc2UubG9jYXRpb24ubG9uO1xuICAgICAgICBjdXJyZW50V2VhdGhlci50ZW1wRiA9IHJlc3BvbnNlLmN1cnJlbnQudGVtcF9mO1xuICAgICAgICBjdXJyZW50V2VhdGhlci50ZW1wQyA9IHJlc3BvbnNlLmN1cnJlbnQudGVtcF9jO1xuICAgICAgICBjdXJyZW50V2VhdGhlci5jb25kaXRpb25UZXh0ID0gcmVzcG9uc2UuY3VycmVudC5jb25kaXRpb24udGV4dDtcbiAgICAgICAgY3VycmVudFdlYXRoZXIuY29uZGl0aW9uSWNvbiA9ICdodHRwczovLycgKyAoKHJlc3BvbnNlLmN1cnJlbnQuY29uZGl0aW9uLmljb24pLnNwbGl0KCcvLycpKVsxXTtcbiAgICAgICAgY3VycmVudFdlYXRoZXIuaHVtaWRpdHkgPSByZXNwb25zZS5jdXJyZW50Lmh1bWlkaXR5O1xuICAgICAgICBjdXJyZW50V2VhdGhlci53aW5kID0gcmVzcG9uc2UuY3VycmVudC53aW5kX21waDtcbiAgICAgICAgY3VycmVudFdlYXRoZXIuY2xvdWQgPSByZXNwb25zZS5jdXJyZW50LmNsb3VkO1xuICAgICAgICBjdXJyZW50V2VhdGhlci51diA9IHJlc3BvbnNlLmN1cnJlbnQudXY7XG4gICAgICAgIGN1cnJlbnRXZWF0aGVyLmxhc3RVcGRhdGVkID0gbmV3IERhdGUoKTtcblxuICAgICAgICBcbiAgICAgICAgbWFwLnBhblRvKFtjdXJyZW50V2VhdGhlci5sYXQsIGN1cnJlbnRXZWF0aGVyLmxvbl0pO1xuICAgICAgICBMLm1hcmtlcihbY3VycmVudFdlYXRoZXIubGF0LCBjdXJyZW50V2VhdGhlci5sb25dKS5hZGRUbyhtYXApO1xuICAgICAgICByZXR1cm4gY3VycmVudFdlYXRoZXJcblxuICAgIH0pLnRoZW4oZnVuY3Rpb24oY3VycmVudFdlYXRoZXIpIHtcblxuICAgICAgICBjb25zb2xlLmxvZyhgSnVzdCBDaGVja2luZ2ApO1xuICAgICAgICBkaXNwbGF5Q3VycmVudFdlYXRoZXJUb0RvbSgpO1xuICAgICAgICBzYXZlTGFzdFNlYXJjaGVkKCk7XG5cbiAgICAgICAgLypcblxuICAgICAgICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIGN1cnJlbnRXZWF0aGVyICApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRXZWF0aGVyW3Byb3BlcnR5XSk7XG4gICAgICAgIH1cbiAgICAgICAgKi9cbiAgICAgICAgXG4gICAgICAgIC8vcmV0dXJuIGN1cnJlbnRXZWF0aGVyXG5cbiAgICB9KVxuXG4gICAgXG4gICAgY29uc29sZS5sb2coY3VycmVudFdlYXRoZXIpO1xuICAgIHJldHVybiBjdXJyZW50V2VhdGhlcjtcblxuICAgIC8vZGlzcGxheUN1cnJlbnRXZWF0aGVyVG9Eb20oKTtcblxufSlcblxudGVtcGVyYXR1cmVTd2l0Y2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcblxuICAgIGlmIChjdXJyZW50VGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPT09IGAke2N1cnJlbnRXZWF0aGVyLnRlbXBGfSBkZWdyZWVzIEZgKSB7XG5cbiAgICAgICAgY3VycmVudFRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFdlYXRoZXIudGVtcEN9IGRlZ3JlZXMgQ2A7XG5cbiAgICB9ICAgZWxzZSBpZiAoY3VycmVudFRlbXBlcmF0dXJlLnRleHRDb250ZW50ID09PSBgJHtjdXJyZW50V2VhdGhlci50ZW1wQ30gZGVncmVlcyBDYCkge1xuXG4gICAgICAgIGN1cnJlbnRUZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRXZWF0aGVyLnRlbXBGfSBkZWdyZWVzIEZgXG5cbiAgICB9XG5cbn0pXG5cbnJlZnJlc2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcblxuICAgIGFzeW5jV2VhdGhlcihjdXJyZW50V2VhdGhlci5uYW1lKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICBjdXJyZW50V2VhdGhlci5vZmZpY2lhbE5hbWUgPSByZXNwb25zZS5sb2NhdGlvbi5uYW1lO1xuICAgICAgICBjdXJyZW50V2VhdGhlci5yZWdpb24gPSByZXNwb25zZS5sb2NhdGlvbi5yZWdpb247XG4gICAgICAgIGN1cnJlbnRXZWF0aGVyLmNvdW50cnkgPSByZXNwb25zZS5sb2NhdGlvbi5jb3VudHJ5O1xuICAgICAgICBjdXJyZW50V2VhdGhlci5sYXQgPSByZXNwb25zZS5sb2NhdGlvbi5sYXQ7XG4gICAgICAgIGN1cnJlbnRXZWF0aGVyLmxvbiA9IHJlc3BvbnNlLmxvY2F0aW9uLmxvbjtcbiAgICAgICAgY3VycmVudFdlYXRoZXIudGVtcEYgPSByZXNwb25zZS5jdXJyZW50LnRlbXBfZjtcbiAgICAgICAgY3VycmVudFdlYXRoZXIudGVtcEMgPSByZXNwb25zZS5jdXJyZW50LnRlbXBfYztcbiAgICAgICAgY3VycmVudFdlYXRoZXIuY29uZGl0aW9uVGV4dCA9IHJlc3BvbnNlLmN1cnJlbnQuY29uZGl0aW9uLnRleHQ7XG4gICAgICAgIGN1cnJlbnRXZWF0aGVyLmNvbmRpdGlvbkljb24gPSAnaHR0cHM6Ly8nICsgKChyZXNwb25zZS5jdXJyZW50LmNvbmRpdGlvbi5pY29uKS5zcGxpdCgnLy8nKSlbMV07XG4gICAgICAgIGN1cnJlbnRXZWF0aGVyLmh1bWlkaXR5ID0gcmVzcG9uc2UuY3VycmVudC5odW1pZGl0eTtcbiAgICAgICAgY3VycmVudFdlYXRoZXIud2luZCA9IHJlc3BvbnNlLmN1cnJlbnQud2luZF9tcGg7XG4gICAgICAgIGN1cnJlbnRXZWF0aGVyLmNsb3VkID0gcmVzcG9uc2UuY3VycmVudC5jbG91ZDtcbiAgICAgICAgY3VycmVudFdlYXRoZXIudXYgPSByZXNwb25zZS5jdXJyZW50LnV2O1xuICAgICAgICBjdXJyZW50V2VhdGhlci5sYXN0VXBkYXRlZCA9IG5ldyBEYXRlKCk7XG5cbiAgICAgICAgbWFwLnBhblRvKFtjdXJyZW50V2VhdGhlci5sYXQsIGN1cnJlbnRXZWF0aGVyLmxvbl0pO1xuICAgICAgICBMLm1hcmtlcihbY3VycmVudFdlYXRoZXIubGF0LCBjdXJyZW50V2VhdGhlci5sb25dKS5hZGRUbyhtYXApO1xuXG4gICAgICAgIHJldHVybiBjdXJyZW50V2VhdGhlclxuXG4gICAgfSkudGhlbihmdW5jdGlvbihjdXJyZW50V2VhdGhlcikge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGBKdXN0IENoZWNraW5nYCk7XG4gICAgICAgIGRpc3BsYXlDdXJyZW50V2VhdGhlclRvRG9tKCk7XG4gICAgICAgIHNhdmVMYXN0U2VhcmNoZWQoKTtcblxuICAgICAgICAvKlxuXG4gICAgICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gY3VycmVudFdlYXRoZXIgICkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudFdlYXRoZXJbcHJvcGVydHldKTtcbiAgICAgICAgfVxuICAgICAgICAqL1xuICAgICAgICBcbiAgICAgICAgLy9yZXR1cm4gY3VycmVudFdlYXRoZXJcblxuICAgIH0pXG5cbiAgICBcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50V2VhdGhlcik7XG4gICAgcmV0dXJuIGN1cnJlbnRXZWF0aGVyO1xuXG4gICAgLy9kaXNwbGF5Q3VycmVudFdlYXRoZXJUb0RvbSgpO1xuXG5cblxufSlcblxucmFuZG9tQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cbiAgICBmdW5jdGlvbiBnZXRSYW5kb21JbnRJbmNsdXNpdmUobWluLCBtYXgpIHtcbiAgICAgICAgbWluID0gTWF0aC5jZWlsKG1pbik7XG4gICAgICAgIG1heCA9IE1hdGguZmxvb3IobWF4KTtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbik7IC8vIFRoZSBtYXhpbXVtIGlzIGluY2x1c2l2ZSBhbmQgdGhlIG1pbmltdW0gaXMgaW5jbHVzaXZlXG4gICAgfVxuXG4gICAgbGV0IHJhbmRvbU51bWJlciA9IGdldFJhbmRvbUludEluY2x1c2l2ZSgwLCByYW5kb21DaXRpZXMubGVuZ3RoKTtcblxuICAgIGN1cnJlbnRXZWF0aGVyLm5hbWUgPSByYW5kb21DaXRpZXNbcmFuZG9tTnVtYmVyXTtcblxuICAgIGFzeW5jV2VhdGhlcihjdXJyZW50V2VhdGhlci5uYW1lKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICBjdXJyZW50V2VhdGhlci5vZmZpY2lhbE5hbWUgPSByZXNwb25zZS5sb2NhdGlvbi5uYW1lO1xuICAgICAgICBjdXJyZW50V2VhdGhlci5yZWdpb24gPSByZXNwb25zZS5sb2NhdGlvbi5yZWdpb247XG4gICAgICAgIGN1cnJlbnRXZWF0aGVyLmNvdW50cnkgPSByZXNwb25zZS5sb2NhdGlvbi5jb3VudHJ5O1xuICAgICAgICBjdXJyZW50V2VhdGhlci5sYXQgPSByZXNwb25zZS5sb2NhdGlvbi5sYXQ7XG4gICAgICAgIGN1cnJlbnRXZWF0aGVyLmxvbiA9IHJlc3BvbnNlLmxvY2F0aW9uLmxvbjtcbiAgICAgICAgY3VycmVudFdlYXRoZXIudGVtcEYgPSByZXNwb25zZS5jdXJyZW50LnRlbXBfZjtcbiAgICAgICAgY3VycmVudFdlYXRoZXIudGVtcEMgPSByZXNwb25zZS5jdXJyZW50LnRlbXBfYztcbiAgICAgICAgY3VycmVudFdlYXRoZXIuY29uZGl0aW9uVGV4dCA9IHJlc3BvbnNlLmN1cnJlbnQuY29uZGl0aW9uLnRleHQ7XG4gICAgICAgIGN1cnJlbnRXZWF0aGVyLmNvbmRpdGlvbkljb24gPSAnaHR0cHM6Ly8nICsgKChyZXNwb25zZS5jdXJyZW50LmNvbmRpdGlvbi5pY29uKS5zcGxpdCgnLy8nKSlbMV07XG4gICAgICAgIGN1cnJlbnRXZWF0aGVyLmh1bWlkaXR5ID0gcmVzcG9uc2UuY3VycmVudC5odW1pZGl0eTtcbiAgICAgICAgY3VycmVudFdlYXRoZXIud2luZCA9IHJlc3BvbnNlLmN1cnJlbnQud2luZF9tcGg7XG4gICAgICAgIGN1cnJlbnRXZWF0aGVyLmNsb3VkID0gcmVzcG9uc2UuY3VycmVudC5jbG91ZDtcbiAgICAgICAgY3VycmVudFdlYXRoZXIudXYgPSByZXNwb25zZS5jdXJyZW50LnV2O1xuICAgICAgICBjdXJyZW50V2VhdGhlci5sYXN0VXBkYXRlZCA9IG5ldyBEYXRlKCk7XG5cbiAgICAgICAgbWFwLnBhblRvKFtjdXJyZW50V2VhdGhlci5sYXQsIGN1cnJlbnRXZWF0aGVyLmxvbl0pO1xuICAgICAgICBMLm1hcmtlcihbY3VycmVudFdlYXRoZXIubGF0LCBjdXJyZW50V2VhdGhlci5sb25dKS5hZGRUbyhtYXApO1xuXG4gICAgICAgIHJldHVybiBjdXJyZW50V2VhdGhlclxuXG4gICAgfSkudGhlbihmdW5jdGlvbihjdXJyZW50V2VhdGhlcikge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGBKdXN0IENoZWNraW5nYCk7XG4gICAgICAgIGRpc3BsYXlDdXJyZW50V2VhdGhlclRvRG9tKCk7XG4gICAgICAgIHNhdmVMYXN0U2VhcmNoZWQoKTtcblxuICAgICAgICAvKlxuXG4gICAgICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gY3VycmVudFdlYXRoZXIgICkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudFdlYXRoZXJbcHJvcGVydHldKTtcbiAgICAgICAgfVxuICAgICAgICAqL1xuICAgICAgICBcbiAgICAgICAgLy9yZXR1cm4gY3VycmVudFdlYXRoZXJcblxuICAgIH0pXG5cbiAgICBcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50V2VhdGhlcik7XG4gICAgcmV0dXJuIGN1cnJlbnRXZWF0aGVyO1xuXG4gICAgLy9kaXNwbGF5Q3VycmVudFdlYXRoZXJUb0RvbSgpO1xuXG5cblxufSlcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=