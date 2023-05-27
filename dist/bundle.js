/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/all-the-cities/index.js":
/*!**********************************************!*\
  !*** ./node_modules/all-the-cities/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __dirname = "/";
const Pbf = __webpack_require__(/*! pbf */ "./node_modules/pbf/index.js")
const fs = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'fs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
const path = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'path'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))

var pbf = new Pbf(fs.readFileSync(path.join(__dirname, 'cities.pbf')))
var cities = []

var lastLat = 0
var lastLon = 0
while (pbf.pos < pbf.length) {
    cities.push(pbf.readMessage(readCity, {
        cityId: '',
        name: '',
        altName:'',
        country: '',
        featureCode: '',
        adminCode: '',
        population: 0,
        loc: {
            type: 'Point',
            coordinates: [0, 0] //[lon,lat]
        }
    }))
}

module.exports = cities

function readCity(tag, city, pbf) {
    if (tag === 1) city.cityId = pbf.readSVarint()
    else if (tag === 2) city.name = pbf.readString()
    else if (tag === 3) city.country = pbf.readString()
    else if (tag === 4) city.altName = pbf.readString()
    else if (tag === 5) city.muni = pbf.readString()
    else if (tag === 6) city.muniSub = pbf.readString()
    else if (tag === 7) city.featureCode = pbf.readString()
    else if (tag === 8) city.adminCode = pbf.readString()
    else if (tag === 9) city.population = pbf.readVarint()
    else if (tag === 10) {
        lastLon += pbf.readSVarint()
        city.loc.coordinates[0] = lastLon / 1e5
    } else if (tag === 11) {
        lastLat += pbf.readSVarint()
        city.loc.coordinates[1] = lastLat / 1e5
    }
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, "\n/*Mobile View*/\n@media only screen and (max-width: 960px) {\n\n\n* {\n\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n\n}\n    \n\n\n.fullPage {\n\n    display: flex;\n    flex-wrap: wrap;\n\n\n}\n\n\n\n.menuBar {\n\n    width: 100%;\n    height: 240px;\n    \n\n}\n\n.searchSection {\n\n    width: 100%;\n    height: 120px;\n\n    display: flex;\n    flex-direction: row;\n\n    background-color: red;\n\n\n}\n\n.buttonSection {\n\n    width: 100%;\n    height: 120px;\n\n    display: flex;\n    flex-direction: row;\n\n    background-color: blue;\n\n\n}\n\n.data {\n\n    width: 100%;\n    height: 1200px;\n\n}\n\n.dataSectionTop {\n\n    width: 100%;\n    height: 600px;\n\n    background-color: green;\n\n}\n\n.dataSectionBottom {\n\n\n    width: 100%;\n    height: 600px;\n\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n\n    background-color: yellow;\n\n}\n\n\n.mapSection {\n\n    width: 100%;\n    height: 600px;\n\n    background-color: silver;\n\n\n}\n\n.borderCheck {\n    /*\n    border-style: dashed;\n    border-color: black;\n    width: 50px;\n    height: 50px;\n    */\n\n\n}\n\n/*\n.temperatureSwitchButton {\n\n    height: 50px;\n    width: 50px;\n\n}\n*/\n\n\n}\n\n/*Desktop View*/\n\n@media only screen and (min-width: 961px) {\n\n\n* {\n\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n\n}\n\nbody {\n\n    height: 100vh;\n    width: 100vw;\n\n}\n\n.fullPage {\n\n\n    display: grid;\n    height: 100%;\n    width: 100%;\n    grid-template-rows: 1fr 11fr;\n    grid-template-columns: 1fr 1fr;\n\n\n}\n\n.menuBar {\n\n\n    grid-column: 1 / 3;\n    grid-row: 1 / 2;\n    display: grid;\n\n    grid-template-columns: 1fr 1fr;\n\n}\n\n.searchSection {\n\n    grid-column: 1 / 2;\n    background-color: red;\n\n}\n\n.buttonSection {\n\n    grid-column: 2 / 3;\n    background-color: blue;\n\n}\n\n.data {\n\n\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n\n}\n\n.dataSectionTop {\n\n    grid-row: 1 / 2;\n    background-color: green;\n\n\n}\n\n.dataSectionBottom {\n\n    grid-row: 2 / 3;\n    background-color: yellow;\n\n}\n\n.mapSection {\n\n\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n    background-color: silver;\n\n\n}\n\n\n.borderCheck {\n\n    /*\n    border-style: dashed;\n    border-color: black;\n    width: 200px;\n    height: 200px;\n    */\n\n}\n\n/*\n.temperatureSwitchButton {\n\n    height: 50px;\n    width: 50px;\n\n}\n*/\n\n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":";AACA,cAAc;AACd;;;AAGA;;IAEI,SAAS;IACT,UAAU;IACV,sBAAsB;;AAE1B;;;;AAIA;;IAEI,aAAa;IACb,eAAe;;;AAGnB;;;;AAIA;;IAEI,WAAW;IACX,aAAa;;;AAGjB;;AAEA;;IAEI,WAAW;IACX,aAAa;;IAEb,aAAa;IACb,mBAAmB;;IAEnB,qBAAqB;;;AAGzB;;AAEA;;IAEI,WAAW;IACX,aAAa;;IAEb,aAAa;IACb,mBAAmB;;IAEnB,sBAAsB;;;AAG1B;;AAEA;;IAEI,WAAW;IACX,cAAc;;AAElB;;AAEA;;IAEI,WAAW;IACX,aAAa;;IAEb,uBAAuB;;AAE3B;;AAEA;;;IAGI,WAAW;IACX,aAAa;;IAEb,aAAa;IACb,mBAAmB;IACnB,eAAe;;IAEf,wBAAwB;;AAE5B;;;AAGA;;IAEI,WAAW;IACX,aAAa;;IAEb,wBAAwB;;;AAG5B;;AAEA;IACI;;;;;KAKC;;;AAGL;;AAEA;;;;;;;CAOC;;;AAGD;;AAEA,eAAe;;AAEf;;;AAGA;;IAEI,SAAS;IACT,UAAU;IACV,sBAAsB;;AAE1B;;AAEA;;IAEI,aAAa;IACb,YAAY;;AAEhB;;AAEA;;;IAGI,aAAa;IACb,YAAY;IACZ,WAAW;IACX,4BAA4B;IAC5B,8BAA8B;;;AAGlC;;AAEA;;;IAGI,kBAAkB;IAClB,eAAe;IACf,aAAa;;IAEb,8BAA8B;;AAElC;;AAEA;;IAEI,kBAAkB;IAClB,qBAAqB;;AAEzB;;AAEA;;IAEI,kBAAkB;IAClB,sBAAsB;;AAE1B;;AAEA;;;IAGI,kBAAkB;IAClB,eAAe;IACf,aAAa;IACb,2BAA2B;;AAE/B;;AAEA;;IAEI,eAAe;IACf,uBAAuB;;;AAG3B;;AAEA;;IAEI,eAAe;IACf,wBAAwB;;AAE5B;;AAEA;;;IAGI,kBAAkB;IAClB,eAAe;IACf,wBAAwB;;;AAG5B;;;AAGA;;IAEI;;;;;KAKC;;AAEL;;AAEA;;;;;;;CAOC;;AAED","sourcesContent":["\n/*Mobile View*/\n@media only screen and (max-width: 960px) {\n\n\n* {\n\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n\n}\n    \n\n\n.fullPage {\n\n    display: flex;\n    flex-wrap: wrap;\n\n\n}\n\n\n\n.menuBar {\n\n    width: 100%;\n    height: 240px;\n    \n\n}\n\n.searchSection {\n\n    width: 100%;\n    height: 120px;\n\n    display: flex;\n    flex-direction: row;\n\n    background-color: red;\n\n\n}\n\n.buttonSection {\n\n    width: 100%;\n    height: 120px;\n\n    display: flex;\n    flex-direction: row;\n\n    background-color: blue;\n\n\n}\n\n.data {\n\n    width: 100%;\n    height: 1200px;\n\n}\n\n.dataSectionTop {\n\n    width: 100%;\n    height: 600px;\n\n    background-color: green;\n\n}\n\n.dataSectionBottom {\n\n\n    width: 100%;\n    height: 600px;\n\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n\n    background-color: yellow;\n\n}\n\n\n.mapSection {\n\n    width: 100%;\n    height: 600px;\n\n    background-color: silver;\n\n\n}\n\n.borderCheck {\n    /*\n    border-style: dashed;\n    border-color: black;\n    width: 50px;\n    height: 50px;\n    */\n\n\n}\n\n/*\n.temperatureSwitchButton {\n\n    height: 50px;\n    width: 50px;\n\n}\n*/\n\n\n}\n\n/*Desktop View*/\n\n@media only screen and (min-width: 961px) {\n\n\n* {\n\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n\n}\n\nbody {\n\n    height: 100vh;\n    width: 100vw;\n\n}\n\n.fullPage {\n\n\n    display: grid;\n    height: 100%;\n    width: 100%;\n    grid-template-rows: 1fr 11fr;\n    grid-template-columns: 1fr 1fr;\n\n\n}\n\n.menuBar {\n\n\n    grid-column: 1 / 3;\n    grid-row: 1 / 2;\n    display: grid;\n\n    grid-template-columns: 1fr 1fr;\n\n}\n\n.searchSection {\n\n    grid-column: 1 / 2;\n    background-color: red;\n\n}\n\n.buttonSection {\n\n    grid-column: 2 / 3;\n    background-color: blue;\n\n}\n\n.data {\n\n\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n\n}\n\n.dataSectionTop {\n\n    grid-row: 1 / 2;\n    background-color: green;\n\n\n}\n\n.dataSectionBottom {\n\n    grid-row: 2 / 3;\n    background-color: yellow;\n\n}\n\n.mapSection {\n\n\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n    background-color: silver;\n\n\n}\n\n\n.borderCheck {\n\n    /*\n    border-style: dashed;\n    border-color: black;\n    width: 200px;\n    height: 200px;\n    */\n\n}\n\n/*\n.temperatureSwitchButton {\n\n    height: 50px;\n    width: 50px;\n\n}\n*/\n\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./node_modules/pbf/index.js":
/*!***********************************!*\
  !*** ./node_modules/pbf/index.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = Pbf;

var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js");

function Pbf(buf) {
    this.buf = ArrayBuffer.isView && ArrayBuffer.isView(buf) ? buf : new Uint8Array(buf || 0);
    this.pos = 0;
    this.type = 0;
    this.length = this.buf.length;
}

Pbf.Varint  = 0; // varint: int32, int64, uint32, uint64, sint32, sint64, bool, enum
Pbf.Fixed64 = 1; // 64-bit: double, fixed64, sfixed64
Pbf.Bytes   = 2; // length-delimited: string, bytes, embedded messages, packed repeated fields
Pbf.Fixed32 = 5; // 32-bit: float, fixed32, sfixed32

var SHIFT_LEFT_32 = (1 << 16) * (1 << 16),
    SHIFT_RIGHT_32 = 1 / SHIFT_LEFT_32;

// Threshold chosen based on both benchmarking and knowledge about browser string
// data structures (which currently switch structure types at 12 bytes or more)
var TEXT_DECODER_MIN_LENGTH = 12;
var utf8TextDecoder = typeof TextDecoder === 'undefined' ? null : new TextDecoder('utf8');

Pbf.prototype = {

    destroy: function() {
        this.buf = null;
    },

    // === READING =================================================================

    readFields: function(readField, result, end) {
        end = end || this.length;

        while (this.pos < end) {
            var val = this.readVarint(),
                tag = val >> 3,
                startPos = this.pos;

            this.type = val & 0x7;
            readField(tag, result, this);

            if (this.pos === startPos) this.skip(val);
        }
        return result;
    },

    readMessage: function(readField, result) {
        return this.readFields(readField, result, this.readVarint() + this.pos);
    },

    readFixed32: function() {
        var val = readUInt32(this.buf, this.pos);
        this.pos += 4;
        return val;
    },

    readSFixed32: function() {
        var val = readInt32(this.buf, this.pos);
        this.pos += 4;
        return val;
    },

    // 64-bit int handling is based on github.com/dpw/node-buffer-more-ints (MIT-licensed)

    readFixed64: function() {
        var val = readUInt32(this.buf, this.pos) + readUInt32(this.buf, this.pos + 4) * SHIFT_LEFT_32;
        this.pos += 8;
        return val;
    },

    readSFixed64: function() {
        var val = readUInt32(this.buf, this.pos) + readInt32(this.buf, this.pos + 4) * SHIFT_LEFT_32;
        this.pos += 8;
        return val;
    },

    readFloat: function() {
        var val = ieee754.read(this.buf, this.pos, true, 23, 4);
        this.pos += 4;
        return val;
    },

    readDouble: function() {
        var val = ieee754.read(this.buf, this.pos, true, 52, 8);
        this.pos += 8;
        return val;
    },

    readVarint: function(isSigned) {
        var buf = this.buf,
            val, b;

        b = buf[this.pos++]; val  =  b & 0x7f;        if (b < 0x80) return val;
        b = buf[this.pos++]; val |= (b & 0x7f) << 7;  if (b < 0x80) return val;
        b = buf[this.pos++]; val |= (b & 0x7f) << 14; if (b < 0x80) return val;
        b = buf[this.pos++]; val |= (b & 0x7f) << 21; if (b < 0x80) return val;
        b = buf[this.pos];   val |= (b & 0x0f) << 28;

        return readVarintRemainder(val, isSigned, this);
    },

    readVarint64: function() { // for compatibility with v2.0.1
        return this.readVarint(true);
    },

    readSVarint: function() {
        var num = this.readVarint();
        return num % 2 === 1 ? (num + 1) / -2 : num / 2; // zigzag encoding
    },

    readBoolean: function() {
        return Boolean(this.readVarint());
    },

    readString: function() {
        var end = this.readVarint() + this.pos;
        var pos = this.pos;
        this.pos = end;

        if (end - pos >= TEXT_DECODER_MIN_LENGTH && utf8TextDecoder) {
            // longer strings are fast with the built-in browser TextDecoder API
            return readUtf8TextDecoder(this.buf, pos, end);
        }
        // short strings are fast with our custom implementation
        return readUtf8(this.buf, pos, end);
    },

    readBytes: function() {
        var end = this.readVarint() + this.pos,
            buffer = this.buf.subarray(this.pos, end);
        this.pos = end;
        return buffer;
    },

    // verbose for performance reasons; doesn't affect gzipped size

    readPackedVarint: function(arr, isSigned) {
        if (this.type !== Pbf.Bytes) return arr.push(this.readVarint(isSigned));
        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) arr.push(this.readVarint(isSigned));
        return arr;
    },
    readPackedSVarint: function(arr) {
        if (this.type !== Pbf.Bytes) return arr.push(this.readSVarint());
        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) arr.push(this.readSVarint());
        return arr;
    },
    readPackedBoolean: function(arr) {
        if (this.type !== Pbf.Bytes) return arr.push(this.readBoolean());
        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) arr.push(this.readBoolean());
        return arr;
    },
    readPackedFloat: function(arr) {
        if (this.type !== Pbf.Bytes) return arr.push(this.readFloat());
        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) arr.push(this.readFloat());
        return arr;
    },
    readPackedDouble: function(arr) {
        if (this.type !== Pbf.Bytes) return arr.push(this.readDouble());
        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) arr.push(this.readDouble());
        return arr;
    },
    readPackedFixed32: function(arr) {
        if (this.type !== Pbf.Bytes) return arr.push(this.readFixed32());
        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) arr.push(this.readFixed32());
        return arr;
    },
    readPackedSFixed32: function(arr) {
        if (this.type !== Pbf.Bytes) return arr.push(this.readSFixed32());
        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) arr.push(this.readSFixed32());
        return arr;
    },
    readPackedFixed64: function(arr) {
        if (this.type !== Pbf.Bytes) return arr.push(this.readFixed64());
        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) arr.push(this.readFixed64());
        return arr;
    },
    readPackedSFixed64: function(arr) {
        if (this.type !== Pbf.Bytes) return arr.push(this.readSFixed64());
        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) arr.push(this.readSFixed64());
        return arr;
    },

    skip: function(val) {
        var type = val & 0x7;
        if (type === Pbf.Varint) while (this.buf[this.pos++] > 0x7f) {}
        else if (type === Pbf.Bytes) this.pos = this.readVarint() + this.pos;
        else if (type === Pbf.Fixed32) this.pos += 4;
        else if (type === Pbf.Fixed64) this.pos += 8;
        else throw new Error('Unimplemented type: ' + type);
    },

    // === WRITING =================================================================

    writeTag: function(tag, type) {
        this.writeVarint((tag << 3) | type);
    },

    realloc: function(min) {
        var length = this.length || 16;

        while (length < this.pos + min) length *= 2;

        if (length !== this.length) {
            var buf = new Uint8Array(length);
            buf.set(this.buf);
            this.buf = buf;
            this.length = length;
        }
    },

    finish: function() {
        this.length = this.pos;
        this.pos = 0;
        return this.buf.subarray(0, this.length);
    },

    writeFixed32: function(val) {
        this.realloc(4);
        writeInt32(this.buf, val, this.pos);
        this.pos += 4;
    },

    writeSFixed32: function(val) {
        this.realloc(4);
        writeInt32(this.buf, val, this.pos);
        this.pos += 4;
    },

    writeFixed64: function(val) {
        this.realloc(8);
        writeInt32(this.buf, val & -1, this.pos);
        writeInt32(this.buf, Math.floor(val * SHIFT_RIGHT_32), this.pos + 4);
        this.pos += 8;
    },

    writeSFixed64: function(val) {
        this.realloc(8);
        writeInt32(this.buf, val & -1, this.pos);
        writeInt32(this.buf, Math.floor(val * SHIFT_RIGHT_32), this.pos + 4);
        this.pos += 8;
    },

    writeVarint: function(val) {
        val = +val || 0;

        if (val > 0xfffffff || val < 0) {
            writeBigVarint(val, this);
            return;
        }

        this.realloc(4);

        this.buf[this.pos++] =           val & 0x7f  | (val > 0x7f ? 0x80 : 0); if (val <= 0x7f) return;
        this.buf[this.pos++] = ((val >>>= 7) & 0x7f) | (val > 0x7f ? 0x80 : 0); if (val <= 0x7f) return;
        this.buf[this.pos++] = ((val >>>= 7) & 0x7f) | (val > 0x7f ? 0x80 : 0); if (val <= 0x7f) return;
        this.buf[this.pos++] =   (val >>> 7) & 0x7f;
    },

    writeSVarint: function(val) {
        this.writeVarint(val < 0 ? -val * 2 - 1 : val * 2);
    },

    writeBoolean: function(val) {
        this.writeVarint(Boolean(val));
    },

    writeString: function(str) {
        str = String(str);
        this.realloc(str.length * 4);

        this.pos++; // reserve 1 byte for short string length

        var startPos = this.pos;
        // write the string directly to the buffer and see how much was written
        this.pos = writeUtf8(this.buf, str, this.pos);
        var len = this.pos - startPos;

        if (len >= 0x80) makeRoomForExtraLength(startPos, len, this);

        // finally, write the message length in the reserved place and restore the position
        this.pos = startPos - 1;
        this.writeVarint(len);
        this.pos += len;
    },

    writeFloat: function(val) {
        this.realloc(4);
        ieee754.write(this.buf, val, this.pos, true, 23, 4);
        this.pos += 4;
    },

    writeDouble: function(val) {
        this.realloc(8);
        ieee754.write(this.buf, val, this.pos, true, 52, 8);
        this.pos += 8;
    },

    writeBytes: function(buffer) {
        var len = buffer.length;
        this.writeVarint(len);
        this.realloc(len);
        for (var i = 0; i < len; i++) this.buf[this.pos++] = buffer[i];
    },

    writeRawMessage: function(fn, obj) {
        this.pos++; // reserve 1 byte for short message length

        // write the message directly to the buffer and see how much was written
        var startPos = this.pos;
        fn(obj, this);
        var len = this.pos - startPos;

        if (len >= 0x80) makeRoomForExtraLength(startPos, len, this);

        // finally, write the message length in the reserved place and restore the position
        this.pos = startPos - 1;
        this.writeVarint(len);
        this.pos += len;
    },

    writeMessage: function(tag, fn, obj) {
        this.writeTag(tag, Pbf.Bytes);
        this.writeRawMessage(fn, obj);
    },

    writePackedVarint:   function(tag, arr) { if (arr.length) this.writeMessage(tag, writePackedVarint, arr);   },
    writePackedSVarint:  function(tag, arr) { if (arr.length) this.writeMessage(tag, writePackedSVarint, arr);  },
    writePackedBoolean:  function(tag, arr) { if (arr.length) this.writeMessage(tag, writePackedBoolean, arr);  },
    writePackedFloat:    function(tag, arr) { if (arr.length) this.writeMessage(tag, writePackedFloat, arr);    },
    writePackedDouble:   function(tag, arr) { if (arr.length) this.writeMessage(tag, writePackedDouble, arr);   },
    writePackedFixed32:  function(tag, arr) { if (arr.length) this.writeMessage(tag, writePackedFixed32, arr);  },
    writePackedSFixed32: function(tag, arr) { if (arr.length) this.writeMessage(tag, writePackedSFixed32, arr); },
    writePackedFixed64:  function(tag, arr) { if (arr.length) this.writeMessage(tag, writePackedFixed64, arr);  },
    writePackedSFixed64: function(tag, arr) { if (arr.length) this.writeMessage(tag, writePackedSFixed64, arr); },

    writeBytesField: function(tag, buffer) {
        this.writeTag(tag, Pbf.Bytes);
        this.writeBytes(buffer);
    },
    writeFixed32Field: function(tag, val) {
        this.writeTag(tag, Pbf.Fixed32);
        this.writeFixed32(val);
    },
    writeSFixed32Field: function(tag, val) {
        this.writeTag(tag, Pbf.Fixed32);
        this.writeSFixed32(val);
    },
    writeFixed64Field: function(tag, val) {
        this.writeTag(tag, Pbf.Fixed64);
        this.writeFixed64(val);
    },
    writeSFixed64Field: function(tag, val) {
        this.writeTag(tag, Pbf.Fixed64);
        this.writeSFixed64(val);
    },
    writeVarintField: function(tag, val) {
        this.writeTag(tag, Pbf.Varint);
        this.writeVarint(val);
    },
    writeSVarintField: function(tag, val) {
        this.writeTag(tag, Pbf.Varint);
        this.writeSVarint(val);
    },
    writeStringField: function(tag, str) {
        this.writeTag(tag, Pbf.Bytes);
        this.writeString(str);
    },
    writeFloatField: function(tag, val) {
        this.writeTag(tag, Pbf.Fixed32);
        this.writeFloat(val);
    },
    writeDoubleField: function(tag, val) {
        this.writeTag(tag, Pbf.Fixed64);
        this.writeDouble(val);
    },
    writeBooleanField: function(tag, val) {
        this.writeVarintField(tag, Boolean(val));
    }
};

function readVarintRemainder(l, s, p) {
    var buf = p.buf,
        h, b;

    b = buf[p.pos++]; h  = (b & 0x70) >> 4;  if (b < 0x80) return toNum(l, h, s);
    b = buf[p.pos++]; h |= (b & 0x7f) << 3;  if (b < 0x80) return toNum(l, h, s);
    b = buf[p.pos++]; h |= (b & 0x7f) << 10; if (b < 0x80) return toNum(l, h, s);
    b = buf[p.pos++]; h |= (b & 0x7f) << 17; if (b < 0x80) return toNum(l, h, s);
    b = buf[p.pos++]; h |= (b & 0x7f) << 24; if (b < 0x80) return toNum(l, h, s);
    b = buf[p.pos++]; h |= (b & 0x01) << 31; if (b < 0x80) return toNum(l, h, s);

    throw new Error('Expected varint not more than 10 bytes');
}

function readPackedEnd(pbf) {
    return pbf.type === Pbf.Bytes ?
        pbf.readVarint() + pbf.pos : pbf.pos + 1;
}

function toNum(low, high, isSigned) {
    if (isSigned) {
        return high * 0x100000000 + (low >>> 0);
    }

    return ((high >>> 0) * 0x100000000) + (low >>> 0);
}

function writeBigVarint(val, pbf) {
    var low, high;

    if (val >= 0) {
        low  = (val % 0x100000000) | 0;
        high = (val / 0x100000000) | 0;
    } else {
        low  = ~(-val % 0x100000000);
        high = ~(-val / 0x100000000);

        if (low ^ 0xffffffff) {
            low = (low + 1) | 0;
        } else {
            low = 0;
            high = (high + 1) | 0;
        }
    }

    if (val >= 0x10000000000000000 || val < -0x10000000000000000) {
        throw new Error('Given varint doesn\'t fit into 10 bytes');
    }

    pbf.realloc(10);

    writeBigVarintLow(low, high, pbf);
    writeBigVarintHigh(high, pbf);
}

function writeBigVarintLow(low, high, pbf) {
    pbf.buf[pbf.pos++] = low & 0x7f | 0x80; low >>>= 7;
    pbf.buf[pbf.pos++] = low & 0x7f | 0x80; low >>>= 7;
    pbf.buf[pbf.pos++] = low & 0x7f | 0x80; low >>>= 7;
    pbf.buf[pbf.pos++] = low & 0x7f | 0x80; low >>>= 7;
    pbf.buf[pbf.pos]   = low & 0x7f;
}

function writeBigVarintHigh(high, pbf) {
    var lsb = (high & 0x07) << 4;

    pbf.buf[pbf.pos++] |= lsb         | ((high >>>= 3) ? 0x80 : 0); if (!high) return;
    pbf.buf[pbf.pos++]  = high & 0x7f | ((high >>>= 7) ? 0x80 : 0); if (!high) return;
    pbf.buf[pbf.pos++]  = high & 0x7f | ((high >>>= 7) ? 0x80 : 0); if (!high) return;
    pbf.buf[pbf.pos++]  = high & 0x7f | ((high >>>= 7) ? 0x80 : 0); if (!high) return;
    pbf.buf[pbf.pos++]  = high & 0x7f | ((high >>>= 7) ? 0x80 : 0); if (!high) return;
    pbf.buf[pbf.pos++]  = high & 0x7f;
}

function makeRoomForExtraLength(startPos, len, pbf) {
    var extraLen =
        len <= 0x3fff ? 1 :
        len <= 0x1fffff ? 2 :
        len <= 0xfffffff ? 3 : Math.floor(Math.log(len) / (Math.LN2 * 7));

    // if 1 byte isn't enough for encoding message length, shift the data to the right
    pbf.realloc(extraLen);
    for (var i = pbf.pos - 1; i >= startPos; i--) pbf.buf[i + extraLen] = pbf.buf[i];
}

function writePackedVarint(arr, pbf)   { for (var i = 0; i < arr.length; i++) pbf.writeVarint(arr[i]);   }
function writePackedSVarint(arr, pbf)  { for (var i = 0; i < arr.length; i++) pbf.writeSVarint(arr[i]);  }
function writePackedFloat(arr, pbf)    { for (var i = 0; i < arr.length; i++) pbf.writeFloat(arr[i]);    }
function writePackedDouble(arr, pbf)   { for (var i = 0; i < arr.length; i++) pbf.writeDouble(arr[i]);   }
function writePackedBoolean(arr, pbf)  { for (var i = 0; i < arr.length; i++) pbf.writeBoolean(arr[i]);  }
function writePackedFixed32(arr, pbf)  { for (var i = 0; i < arr.length; i++) pbf.writeFixed32(arr[i]);  }
function writePackedSFixed32(arr, pbf) { for (var i = 0; i < arr.length; i++) pbf.writeSFixed32(arr[i]); }
function writePackedFixed64(arr, pbf)  { for (var i = 0; i < arr.length; i++) pbf.writeFixed64(arr[i]);  }
function writePackedSFixed64(arr, pbf) { for (var i = 0; i < arr.length; i++) pbf.writeSFixed64(arr[i]); }

// Buffer code below from https://github.com/feross/buffer, MIT-licensed

function readUInt32(buf, pos) {
    return ((buf[pos]) |
        (buf[pos + 1] << 8) |
        (buf[pos + 2] << 16)) +
        (buf[pos + 3] * 0x1000000);
}

function writeInt32(buf, val, pos) {
    buf[pos] = val;
    buf[pos + 1] = (val >>> 8);
    buf[pos + 2] = (val >>> 16);
    buf[pos + 3] = (val >>> 24);
}

function readInt32(buf, pos) {
    return ((buf[pos]) |
        (buf[pos + 1] << 8) |
        (buf[pos + 2] << 16)) +
        (buf[pos + 3] << 24);
}

function readUtf8(buf, pos, end) {
    var str = '';
    var i = pos;

    while (i < end) {
        var b0 = buf[i];
        var c = null; // codepoint
        var bytesPerSequence =
            b0 > 0xEF ? 4 :
            b0 > 0xDF ? 3 :
            b0 > 0xBF ? 2 : 1;

        if (i + bytesPerSequence > end) break;

        var b1, b2, b3;

        if (bytesPerSequence === 1) {
            if (b0 < 0x80) {
                c = b0;
            }
        } else if (bytesPerSequence === 2) {
            b1 = buf[i + 1];
            if ((b1 & 0xC0) === 0x80) {
                c = (b0 & 0x1F) << 0x6 | (b1 & 0x3F);
                if (c <= 0x7F) {
                    c = null;
                }
            }
        } else if (bytesPerSequence === 3) {
            b1 = buf[i + 1];
            b2 = buf[i + 2];
            if ((b1 & 0xC0) === 0x80 && (b2 & 0xC0) === 0x80) {
                c = (b0 & 0xF) << 0xC | (b1 & 0x3F) << 0x6 | (b2 & 0x3F);
                if (c <= 0x7FF || (c >= 0xD800 && c <= 0xDFFF)) {
                    c = null;
                }
            }
        } else if (bytesPerSequence === 4) {
            b1 = buf[i + 1];
            b2 = buf[i + 2];
            b3 = buf[i + 3];
            if ((b1 & 0xC0) === 0x80 && (b2 & 0xC0) === 0x80 && (b3 & 0xC0) === 0x80) {
                c = (b0 & 0xF) << 0x12 | (b1 & 0x3F) << 0xC | (b2 & 0x3F) << 0x6 | (b3 & 0x3F);
                if (c <= 0xFFFF || c >= 0x110000) {
                    c = null;
                }
            }
        }

        if (c === null) {
            c = 0xFFFD;
            bytesPerSequence = 1;

        } else if (c > 0xFFFF) {
            c -= 0x10000;
            str += String.fromCharCode(c >>> 10 & 0x3FF | 0xD800);
            c = 0xDC00 | c & 0x3FF;
        }

        str += String.fromCharCode(c);
        i += bytesPerSequence;
    }

    return str;
}

function readUtf8TextDecoder(buf, pos, end) {
    return utf8TextDecoder.decode(buf.subarray(pos, end));
}

function writeUtf8(buf, str, pos) {
    for (var i = 0, c, lead; i < str.length; i++) {
        c = str.charCodeAt(i); // code point

        if (c > 0xD7FF && c < 0xE000) {
            if (lead) {
                if (c < 0xDC00) {
                    buf[pos++] = 0xEF;
                    buf[pos++] = 0xBF;
                    buf[pos++] = 0xBD;
                    lead = c;
                    continue;
                } else {
                    c = lead - 0xD800 << 10 | c - 0xDC00 | 0x10000;
                    lead = null;
                }
            } else {
                if (c > 0xDBFF || (i + 1 === str.length)) {
                    buf[pos++] = 0xEF;
                    buf[pos++] = 0xBF;
                    buf[pos++] = 0xBD;
                } else {
                    lead = c;
                }
                continue;
            }
        } else if (lead) {
            buf[pos++] = 0xEF;
            buf[pos++] = 0xBF;
            buf[pos++] = 0xBD;
            lead = null;
        }

        if (c < 0x80) {
            buf[pos++] = c;
        } else {
            if (c < 0x800) {
                buf[pos++] = c >> 0x6 | 0xC0;
            } else {
                if (c < 0x10000) {
                    buf[pos++] = c >> 0xC | 0xE0;
                } else {
                    buf[pos++] = c >> 0x12 | 0xF0;
                    buf[pos++] = c >> 0xC & 0x3F | 0x80;
                }
                buf[pos++] = c >> 0x6 & 0x3F | 0x80;
            }
            buf[pos++] = c & 0x3F | 0x80;
        }
    }
    return pos;
}


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "asyncWeather": () => (/* binding */ asyncWeather)
/* harmony export */ });
function asyncWeather (searchlocation) {

    return new Promise (function (resolve, reject) {

        //let searchlocation = 'abuja';

        let attemptedLocation = fetch(`http://api.weatherapi.com/v1/current.json?key=8a9310029e7f43e2b6a40658230205&q=${searchlocation}&aqi=no`, {mode: 'cors'});

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













/***/ }),

/***/ "./src/structure.js":
/*!**************************!*\
  !*** ./src/structure.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _promisedata_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./promisedata.js */ "./src/promisedata.js");
/* harmony import */ var _structure_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./structure.js */ "./src/structure.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



const cities = __webpack_require__(/*! all-the-cities */ "./node_modules/all-the-cities/index.js");


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



document.body.appendChild(_structure_js__WEBPACK_IMPORTED_MODULE_1__.fullPage);


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

    let randomNumber = getRandomIntInclusive(0, 138398);

    currentWeather.name = cities[randomNumber].name;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUwsd0NBQXdDOztBQUV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGdGQUFnRjtBQUNoRixnRkFBZ0Y7QUFDaEYsZ0ZBQWdGO0FBQ2hGO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUEs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QTs7QUFFQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUlBLENBQUM7O0FBRUQsd0VBQTZCOztBQUU3QjtBQUNBO0FBQ0E7QUFDQSxrRUFBa0U7QUFDbEU7O0FBRUE7O0FBRUE7O0FBRUEsSUFBSSw2REFBWTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBOzs7O0FBSUEsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvYWxsLXRoZS1jaXRpZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvaWVlZTc1NC9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3BiZi9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9wcm9taXNlZGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3N0cnVjdHVyZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFBiZiA9IHJlcXVpcmUoJ3BiZicpXG5jb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJylcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJylcblxudmFyIHBiZiA9IG5ldyBQYmYoZnMucmVhZEZpbGVTeW5jKHBhdGguam9pbihfX2Rpcm5hbWUsICdjaXRpZXMucGJmJykpKVxudmFyIGNpdGllcyA9IFtdXG5cbnZhciBsYXN0TGF0ID0gMFxudmFyIGxhc3RMb24gPSAwXG53aGlsZSAocGJmLnBvcyA8IHBiZi5sZW5ndGgpIHtcbiAgICBjaXRpZXMucHVzaChwYmYucmVhZE1lc3NhZ2UocmVhZENpdHksIHtcbiAgICAgICAgY2l0eUlkOiAnJyxcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIGFsdE5hbWU6JycsXG4gICAgICAgIGNvdW50cnk6ICcnLFxuICAgICAgICBmZWF0dXJlQ29kZTogJycsXG4gICAgICAgIGFkbWluQ29kZTogJycsXG4gICAgICAgIHBvcHVsYXRpb246IDAsXG4gICAgICAgIGxvYzoge1xuICAgICAgICAgICAgdHlwZTogJ1BvaW50JyxcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBbMCwgMF0gLy9bbG9uLGxhdF1cbiAgICAgICAgfVxuICAgIH0pKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNpdGllc1xuXG5mdW5jdGlvbiByZWFkQ2l0eSh0YWcsIGNpdHksIHBiZikge1xuICAgIGlmICh0YWcgPT09IDEpIGNpdHkuY2l0eUlkID0gcGJmLnJlYWRTVmFyaW50KClcbiAgICBlbHNlIGlmICh0YWcgPT09IDIpIGNpdHkubmFtZSA9IHBiZi5yZWFkU3RyaW5nKClcbiAgICBlbHNlIGlmICh0YWcgPT09IDMpIGNpdHkuY291bnRyeSA9IHBiZi5yZWFkU3RyaW5nKClcbiAgICBlbHNlIGlmICh0YWcgPT09IDQpIGNpdHkuYWx0TmFtZSA9IHBiZi5yZWFkU3RyaW5nKClcbiAgICBlbHNlIGlmICh0YWcgPT09IDUpIGNpdHkubXVuaSA9IHBiZi5yZWFkU3RyaW5nKClcbiAgICBlbHNlIGlmICh0YWcgPT09IDYpIGNpdHkubXVuaVN1YiA9IHBiZi5yZWFkU3RyaW5nKClcbiAgICBlbHNlIGlmICh0YWcgPT09IDcpIGNpdHkuZmVhdHVyZUNvZGUgPSBwYmYucmVhZFN0cmluZygpXG4gICAgZWxzZSBpZiAodGFnID09PSA4KSBjaXR5LmFkbWluQ29kZSA9IHBiZi5yZWFkU3RyaW5nKClcbiAgICBlbHNlIGlmICh0YWcgPT09IDkpIGNpdHkucG9wdWxhdGlvbiA9IHBiZi5yZWFkVmFyaW50KClcbiAgICBlbHNlIGlmICh0YWcgPT09IDEwKSB7XG4gICAgICAgIGxhc3RMb24gKz0gcGJmLnJlYWRTVmFyaW50KClcbiAgICAgICAgY2l0eS5sb2MuY29vcmRpbmF0ZXNbMF0gPSBsYXN0TG9uIC8gMWU1XG4gICAgfSBlbHNlIGlmICh0YWcgPT09IDExKSB7XG4gICAgICAgIGxhc3RMYXQgKz0gcGJmLnJlYWRTVmFyaW50KClcbiAgICAgICAgY2l0eS5sb2MuY29vcmRpbmF0ZXNbMV0gPSBsYXN0TGF0IC8gMWU1XG4gICAgfVxufVxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG4vKk1vYmlsZSBWaWV3Ki9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XFxuXFxuXFxuKiB7XFxuXFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXG59XFxuICAgIFxcblxcblxcbi5mdWxsUGFnZSB7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG5cXG5cXG59XFxuXFxuXFxuXFxuLm1lbnVCYXIge1xcblxcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAyNDBweDtcXG4gICAgXFxuXFxufVxcblxcbi5zZWFyY2hTZWN0aW9uIHtcXG5cXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTIwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG5cXG5cXG59XFxuXFxuLmJ1dHRvblNlY3Rpb24ge1xcblxcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMjBweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG5cXG5cXG59XFxuXFxuLmRhdGEge1xcblxcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMjAwcHg7XFxuXFxufVxcblxcbi5kYXRhU2VjdGlvblRvcCB7XFxuXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDYwMHB4O1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG5cXG59XFxuXFxuLmRhdGFTZWN0aW9uQm90dG9tIHtcXG5cXG5cXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNjAwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcblxcbn1cXG5cXG5cXG4ubWFwU2VjdGlvbiB7XFxuXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDYwMHB4O1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzaWx2ZXI7XFxuXFxuXFxufVxcblxcbi5ib3JkZXJDaGVjayB7XFxuICAgIC8qXFxuICAgIGJvcmRlci1zdHlsZTogZGFzaGVkO1xcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAqL1xcblxcblxcbn1cXG5cXG4vKlxcbi50ZW1wZXJhdHVyZVN3aXRjaEJ1dHRvbiB7XFxuXFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuXFxufVxcbiovXFxuXFxuXFxufVxcblxcbi8qRGVza3RvcCBWaWV3Ki9cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MXB4KSB7XFxuXFxuXFxuKiB7XFxuXFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXG59XFxuXFxuYm9keSB7XFxuXFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG5cXG59XFxuXFxuLmZ1bGxQYWdlIHtcXG5cXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcblxcblxcbn1cXG5cXG4ubWVudUJhciB7XFxuXFxuXFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcblxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuXFxufVxcblxcbi5zZWFyY2hTZWN0aW9uIHtcXG5cXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuXFxufVxcblxcbi5idXR0b25TZWN0aW9uIHtcXG5cXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcblxcbn1cXG5cXG4uZGF0YSB7XFxuXFxuXFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuXFxufVxcblxcbi5kYXRhU2VjdGlvblRvcCB7XFxuXFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuXFxuXFxufVxcblxcbi5kYXRhU2VjdGlvbkJvdHRvbSB7XFxuXFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcblxcbn1cXG5cXG4ubWFwU2VjdGlvbiB7XFxuXFxuXFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzaWx2ZXI7XFxuXFxuXFxufVxcblxcblxcbi5ib3JkZXJDaGVjayB7XFxuXFxuICAgIC8qXFxuICAgIGJvcmRlci1zdHlsZTogZGFzaGVkO1xcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgICovXFxuXFxufVxcblxcbi8qXFxuLnRlbXBlcmF0dXJlU3dpdGNoQnV0dG9uIHtcXG5cXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG5cXG59XFxuKi9cXG5cXG59XFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0EsY0FBYztBQUNkOzs7QUFHQTs7SUFFSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjs7QUFFMUI7Ozs7QUFJQTs7SUFFSSxhQUFhO0lBQ2IsZUFBZTs7O0FBR25COzs7O0FBSUE7O0lBRUksV0FBVztJQUNYLGFBQWE7OztBQUdqQjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsYUFBYTs7SUFFYixhQUFhO0lBQ2IsbUJBQW1COztJQUVuQixxQkFBcUI7OztBQUd6Qjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsYUFBYTs7SUFFYixhQUFhO0lBQ2IsbUJBQW1COztJQUVuQixzQkFBc0I7OztBQUcxQjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsY0FBYzs7QUFFbEI7O0FBRUE7O0lBRUksV0FBVztJQUNYLGFBQWE7O0lBRWIsdUJBQXVCOztBQUUzQjs7QUFFQTs7O0lBR0ksV0FBVztJQUNYLGFBQWE7O0lBRWIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlOztJQUVmLHdCQUF3Qjs7QUFFNUI7OztBQUdBOztJQUVJLFdBQVc7SUFDWCxhQUFhOztJQUViLHdCQUF3Qjs7O0FBRzVCOztBQUVBO0lBQ0k7Ozs7O0tBS0M7OztBQUdMOztBQUVBOzs7Ozs7O0NBT0M7OztBQUdEOztBQUVBLGVBQWU7O0FBRWY7OztBQUdBOztJQUVJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCOztBQUUxQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsWUFBWTs7QUFFaEI7O0FBRUE7OztJQUdJLGFBQWE7SUFDYixZQUFZO0lBQ1osV0FBVztJQUNYLDRCQUE0QjtJQUM1Qiw4QkFBOEI7OztBQUdsQzs7QUFFQTs7O0lBR0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixhQUFhOztJQUViLDhCQUE4Qjs7QUFFbEM7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLHFCQUFxQjs7QUFFekI7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLHNCQUFzQjs7QUFFMUI7O0FBRUE7OztJQUdJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsYUFBYTtJQUNiLDJCQUEyQjs7QUFFL0I7O0FBRUE7O0lBRUksZUFBZTtJQUNmLHVCQUF1Qjs7O0FBRzNCOztBQUVBOztJQUVJLGVBQWU7SUFDZix3QkFBd0I7O0FBRTVCOztBQUVBOzs7SUFHSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHdCQUF3Qjs7O0FBRzVCOzs7QUFHQTs7SUFFSTs7Ozs7S0FLQzs7QUFFTDs7QUFFQTs7Ozs7OztDQU9DOztBQUVEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbi8qTW9iaWxlIFZpZXcqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcXG5cXG5cXG4qIHtcXG5cXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcbn1cXG4gICAgXFxuXFxuXFxuLmZ1bGxQYWdlIHtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcblxcblxcbn1cXG5cXG5cXG5cXG4ubWVudUJhciB7XFxuXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDI0MHB4O1xcbiAgICBcXG5cXG59XFxuXFxuLnNlYXJjaFNlY3Rpb24ge1xcblxcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMjBweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcblxcblxcbn1cXG5cXG4uYnV0dG9uU2VjdGlvbiB7XFxuXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEyMHB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcblxcblxcbn1cXG5cXG4uZGF0YSB7XFxuXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEyMDBweDtcXG5cXG59XFxuXFxuLmRhdGFTZWN0aW9uVG9wIHtcXG5cXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNjAwcHg7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcblxcbn1cXG5cXG4uZGF0YVNlY3Rpb25Cb3R0b20ge1xcblxcblxcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA2MDBweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxuXFxufVxcblxcblxcbi5tYXBTZWN0aW9uIHtcXG5cXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNjAwcHg7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHNpbHZlcjtcXG5cXG5cXG59XFxuXFxuLmJvcmRlckNoZWNrIHtcXG4gICAgLypcXG4gICAgYm9yZGVyLXN0eWxlOiBkYXNoZWQ7XFxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICovXFxuXFxuXFxufVxcblxcbi8qXFxuLnRlbXBlcmF0dXJlU3dpdGNoQnV0dG9uIHtcXG5cXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG5cXG59XFxuKi9cXG5cXG5cXG59XFxuXFxuLypEZXNrdG9wIFZpZXcqL1xcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYxcHgpIHtcXG5cXG5cXG4qIHtcXG5cXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcbn1cXG5cXG5ib2R5IHtcXG5cXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcblxcbn1cXG5cXG4uZnVsbFBhZ2Uge1xcblxcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuXFxuXFxufVxcblxcbi5tZW51QmFyIHtcXG5cXG5cXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG5cXG59XFxuXFxuLnNlYXJjaFNlY3Rpb24ge1xcblxcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG5cXG59XFxuXFxuLmJ1dHRvblNlY3Rpb24ge1xcblxcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuXFxufVxcblxcbi5kYXRhIHtcXG5cXG5cXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG5cXG59XFxuXFxuLmRhdGFTZWN0aW9uVG9wIHtcXG5cXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG5cXG5cXG59XFxuXFxuLmRhdGFTZWN0aW9uQm90dG9tIHtcXG5cXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxuXFxufVxcblxcbi5tYXBTZWN0aW9uIHtcXG5cXG5cXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHNpbHZlcjtcXG5cXG5cXG59XFxuXFxuXFxuLmJvcmRlckNoZWNrIHtcXG5cXG4gICAgLypcXG4gICAgYm9yZGVyLXN0eWxlOiBkYXNoZWQ7XFxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgKi9cXG5cXG59XFxuXFxuLypcXG4udGVtcGVyYXR1cmVTd2l0Y2hCdXR0b24ge1xcblxcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcblxcbn1cXG4qL1xcblxcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8qISBpZWVlNzU0LiBCU0QtMy1DbGF1c2UgTGljZW5zZS4gRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnL29wZW5zb3VyY2U+ICovXG5leHBvcnRzLnJlYWQgPSBmdW5jdGlvbiAoYnVmZmVyLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbVxuICB2YXIgZUxlbiA9IChuQnl0ZXMgKiA4KSAtIG1MZW4gLSAxXG4gIHZhciBlTWF4ID0gKDEgPDwgZUxlbikgLSAxXG4gIHZhciBlQmlhcyA9IGVNYXggPj4gMVxuICB2YXIgbkJpdHMgPSAtN1xuICB2YXIgaSA9IGlzTEUgPyAobkJ5dGVzIC0gMSkgOiAwXG4gIHZhciBkID0gaXNMRSA/IC0xIDogMVxuICB2YXIgcyA9IGJ1ZmZlcltvZmZzZXQgKyBpXVxuXG4gIGkgKz0gZFxuXG4gIGUgPSBzICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpXG4gIHMgPj49ICgtbkJpdHMpXG4gIG5CaXRzICs9IGVMZW5cbiAgZm9yICg7IG5CaXRzID4gMDsgZSA9IChlICogMjU2KSArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KSB7fVxuXG4gIG0gPSBlICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpXG4gIGUgPj49ICgtbkJpdHMpXG4gIG5CaXRzICs9IG1MZW5cbiAgZm9yICg7IG5CaXRzID4gMDsgbSA9IChtICogMjU2KSArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KSB7fVxuXG4gIGlmIChlID09PSAwKSB7XG4gICAgZSA9IDEgLSBlQmlhc1xuICB9IGVsc2UgaWYgKGUgPT09IGVNYXgpIHtcbiAgICByZXR1cm4gbSA/IE5hTiA6ICgocyA/IC0xIDogMSkgKiBJbmZpbml0eSlcbiAgfSBlbHNlIHtcbiAgICBtID0gbSArIE1hdGgucG93KDIsIG1MZW4pXG4gICAgZSA9IGUgLSBlQmlhc1xuICB9XG4gIHJldHVybiAocyA/IC0xIDogMSkgKiBtICogTWF0aC5wb3coMiwgZSAtIG1MZW4pXG59XG5cbmV4cG9ydHMud3JpdGUgPSBmdW5jdGlvbiAoYnVmZmVyLCB2YWx1ZSwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG0sIGNcbiAgdmFyIGVMZW4gPSAobkJ5dGVzICogOCkgLSBtTGVuIC0gMVxuICB2YXIgZU1heCA9ICgxIDw8IGVMZW4pIC0gMVxuICB2YXIgZUJpYXMgPSBlTWF4ID4+IDFcbiAgdmFyIHJ0ID0gKG1MZW4gPT09IDIzID8gTWF0aC5wb3coMiwgLTI0KSAtIE1hdGgucG93KDIsIC03NykgOiAwKVxuICB2YXIgaSA9IGlzTEUgPyAwIDogKG5CeXRlcyAtIDEpXG4gIHZhciBkID0gaXNMRSA/IDEgOiAtMVxuICB2YXIgcyA9IHZhbHVlIDwgMCB8fCAodmFsdWUgPT09IDAgJiYgMSAvIHZhbHVlIDwgMCkgPyAxIDogMFxuXG4gIHZhbHVlID0gTWF0aC5hYnModmFsdWUpXG5cbiAgaWYgKGlzTmFOKHZhbHVlKSB8fCB2YWx1ZSA9PT0gSW5maW5pdHkpIHtcbiAgICBtID0gaXNOYU4odmFsdWUpID8gMSA6IDBcbiAgICBlID0gZU1heFxuICB9IGVsc2Uge1xuICAgIGUgPSBNYXRoLmZsb29yKE1hdGgubG9nKHZhbHVlKSAvIE1hdGguTE4yKVxuICAgIGlmICh2YWx1ZSAqIChjID0gTWF0aC5wb3coMiwgLWUpKSA8IDEpIHtcbiAgICAgIGUtLVxuICAgICAgYyAqPSAyXG4gICAgfVxuICAgIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgdmFsdWUgKz0gcnQgLyBjXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlICs9IHJ0ICogTWF0aC5wb3coMiwgMSAtIGVCaWFzKVxuICAgIH1cbiAgICBpZiAodmFsdWUgKiBjID49IDIpIHtcbiAgICAgIGUrK1xuICAgICAgYyAvPSAyXG4gICAgfVxuXG4gICAgaWYgKGUgKyBlQmlhcyA+PSBlTWF4KSB7XG4gICAgICBtID0gMFxuICAgICAgZSA9IGVNYXhcbiAgICB9IGVsc2UgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICBtID0gKCh2YWx1ZSAqIGMpIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKVxuICAgICAgZSA9IGUgKyBlQmlhc1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gdmFsdWUgKiBNYXRoLnBvdygyLCBlQmlhcyAtIDEpICogTWF0aC5wb3coMiwgbUxlbilcbiAgICAgIGUgPSAwXG4gICAgfVxuICB9XG5cbiAgZm9yICg7IG1MZW4gPj0gODsgYnVmZmVyW29mZnNldCArIGldID0gbSAmIDB4ZmYsIGkgKz0gZCwgbSAvPSAyNTYsIG1MZW4gLT0gOCkge31cblxuICBlID0gKGUgPDwgbUxlbikgfCBtXG4gIGVMZW4gKz0gbUxlblxuICBmb3IgKDsgZUxlbiA+IDA7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IGUgJiAweGZmLCBpICs9IGQsIGUgLz0gMjU2LCBlTGVuIC09IDgpIHt9XG5cbiAgYnVmZmVyW29mZnNldCArIGkgLSBkXSB8PSBzICogMTI4XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUGJmO1xuXG52YXIgaWVlZTc1NCA9IHJlcXVpcmUoJ2llZWU3NTQnKTtcblxuZnVuY3Rpb24gUGJmKGJ1Zikge1xuICAgIHRoaXMuYnVmID0gQXJyYXlCdWZmZXIuaXNWaWV3ICYmIEFycmF5QnVmZmVyLmlzVmlldyhidWYpID8gYnVmIDogbmV3IFVpbnQ4QXJyYXkoYnVmIHx8IDApO1xuICAgIHRoaXMucG9zID0gMDtcbiAgICB0aGlzLnR5cGUgPSAwO1xuICAgIHRoaXMubGVuZ3RoID0gdGhpcy5idWYubGVuZ3RoO1xufVxuXG5QYmYuVmFyaW50ICA9IDA7IC8vIHZhcmludDogaW50MzIsIGludDY0LCB1aW50MzIsIHVpbnQ2NCwgc2ludDMyLCBzaW50NjQsIGJvb2wsIGVudW1cblBiZi5GaXhlZDY0ID0gMTsgLy8gNjQtYml0OiBkb3VibGUsIGZpeGVkNjQsIHNmaXhlZDY0XG5QYmYuQnl0ZXMgICA9IDI7IC8vIGxlbmd0aC1kZWxpbWl0ZWQ6IHN0cmluZywgYnl0ZXMsIGVtYmVkZGVkIG1lc3NhZ2VzLCBwYWNrZWQgcmVwZWF0ZWQgZmllbGRzXG5QYmYuRml4ZWQzMiA9IDU7IC8vIDMyLWJpdDogZmxvYXQsIGZpeGVkMzIsIHNmaXhlZDMyXG5cbnZhciBTSElGVF9MRUZUXzMyID0gKDEgPDwgMTYpICogKDEgPDwgMTYpLFxuICAgIFNISUZUX1JJR0hUXzMyID0gMSAvIFNISUZUX0xFRlRfMzI7XG5cbi8vIFRocmVzaG9sZCBjaG9zZW4gYmFzZWQgb24gYm90aCBiZW5jaG1hcmtpbmcgYW5kIGtub3dsZWRnZSBhYm91dCBicm93c2VyIHN0cmluZ1xuLy8gZGF0YSBzdHJ1Y3R1cmVzICh3aGljaCBjdXJyZW50bHkgc3dpdGNoIHN0cnVjdHVyZSB0eXBlcyBhdCAxMiBieXRlcyBvciBtb3JlKVxudmFyIFRFWFRfREVDT0RFUl9NSU5fTEVOR1RIID0gMTI7XG52YXIgdXRmOFRleHREZWNvZGVyID0gdHlwZW9mIFRleHREZWNvZGVyID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiBuZXcgVGV4dERlY29kZXIoJ3V0ZjgnKTtcblxuUGJmLnByb3RvdHlwZSA9IHtcblxuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmJ1ZiA9IG51bGw7XG4gICAgfSxcblxuICAgIC8vID09PSBSRUFESU5HID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICByZWFkRmllbGRzOiBmdW5jdGlvbihyZWFkRmllbGQsIHJlc3VsdCwgZW5kKSB7XG4gICAgICAgIGVuZCA9IGVuZCB8fCB0aGlzLmxlbmd0aDtcblxuICAgICAgICB3aGlsZSAodGhpcy5wb3MgPCBlbmQpIHtcbiAgICAgICAgICAgIHZhciB2YWwgPSB0aGlzLnJlYWRWYXJpbnQoKSxcbiAgICAgICAgICAgICAgICB0YWcgPSB2YWwgPj4gMyxcbiAgICAgICAgICAgICAgICBzdGFydFBvcyA9IHRoaXMucG9zO1xuXG4gICAgICAgICAgICB0aGlzLnR5cGUgPSB2YWwgJiAweDc7XG4gICAgICAgICAgICByZWFkRmllbGQodGFnLCByZXN1bHQsIHRoaXMpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5wb3MgPT09IHN0YXJ0UG9zKSB0aGlzLnNraXAodmFsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sXG5cbiAgICByZWFkTWVzc2FnZTogZnVuY3Rpb24ocmVhZEZpZWxkLCByZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVhZEZpZWxkcyhyZWFkRmllbGQsIHJlc3VsdCwgdGhpcy5yZWFkVmFyaW50KCkgKyB0aGlzLnBvcyk7XG4gICAgfSxcblxuICAgIHJlYWRGaXhlZDMyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHZhbCA9IHJlYWRVSW50MzIodGhpcy5idWYsIHRoaXMucG9zKTtcbiAgICAgICAgdGhpcy5wb3MgKz0gNDtcbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICB9LFxuXG4gICAgcmVhZFNGaXhlZDMyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHZhbCA9IHJlYWRJbnQzMih0aGlzLmJ1ZiwgdGhpcy5wb3MpO1xuICAgICAgICB0aGlzLnBvcyArPSA0O1xuICAgICAgICByZXR1cm4gdmFsO1xuICAgIH0sXG5cbiAgICAvLyA2NC1iaXQgaW50IGhhbmRsaW5nIGlzIGJhc2VkIG9uIGdpdGh1Yi5jb20vZHB3L25vZGUtYnVmZmVyLW1vcmUtaW50cyAoTUlULWxpY2Vuc2VkKVxuXG4gICAgcmVhZEZpeGVkNjQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdmFsID0gcmVhZFVJbnQzMih0aGlzLmJ1ZiwgdGhpcy5wb3MpICsgcmVhZFVJbnQzMih0aGlzLmJ1ZiwgdGhpcy5wb3MgKyA0KSAqIFNISUZUX0xFRlRfMzI7XG4gICAgICAgIHRoaXMucG9zICs9IDg7XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgfSxcblxuICAgIHJlYWRTRml4ZWQ2NDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB2YWwgPSByZWFkVUludDMyKHRoaXMuYnVmLCB0aGlzLnBvcykgKyByZWFkSW50MzIodGhpcy5idWYsIHRoaXMucG9zICsgNCkgKiBTSElGVF9MRUZUXzMyO1xuICAgICAgICB0aGlzLnBvcyArPSA4O1xuICAgICAgICByZXR1cm4gdmFsO1xuICAgIH0sXG5cbiAgICByZWFkRmxvYXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdmFsID0gaWVlZTc1NC5yZWFkKHRoaXMuYnVmLCB0aGlzLnBvcywgdHJ1ZSwgMjMsIDQpO1xuICAgICAgICB0aGlzLnBvcyArPSA0O1xuICAgICAgICByZXR1cm4gdmFsO1xuICAgIH0sXG5cbiAgICByZWFkRG91YmxlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHZhbCA9IGllZWU3NTQucmVhZCh0aGlzLmJ1ZiwgdGhpcy5wb3MsIHRydWUsIDUyLCA4KTtcbiAgICAgICAgdGhpcy5wb3MgKz0gODtcbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICB9LFxuXG4gICAgcmVhZFZhcmludDogZnVuY3Rpb24oaXNTaWduZWQpIHtcbiAgICAgICAgdmFyIGJ1ZiA9IHRoaXMuYnVmLFxuICAgICAgICAgICAgdmFsLCBiO1xuXG4gICAgICAgIGIgPSBidWZbdGhpcy5wb3MrK107IHZhbCAgPSAgYiAmIDB4N2Y7ICAgICAgICBpZiAoYiA8IDB4ODApIHJldHVybiB2YWw7XG4gICAgICAgIGIgPSBidWZbdGhpcy5wb3MrK107IHZhbCB8PSAoYiAmIDB4N2YpIDw8IDc7ICBpZiAoYiA8IDB4ODApIHJldHVybiB2YWw7XG4gICAgICAgIGIgPSBidWZbdGhpcy5wb3MrK107IHZhbCB8PSAoYiAmIDB4N2YpIDw8IDE0OyBpZiAoYiA8IDB4ODApIHJldHVybiB2YWw7XG4gICAgICAgIGIgPSBidWZbdGhpcy5wb3MrK107IHZhbCB8PSAoYiAmIDB4N2YpIDw8IDIxOyBpZiAoYiA8IDB4ODApIHJldHVybiB2YWw7XG4gICAgICAgIGIgPSBidWZbdGhpcy5wb3NdOyAgIHZhbCB8PSAoYiAmIDB4MGYpIDw8IDI4O1xuXG4gICAgICAgIHJldHVybiByZWFkVmFyaW50UmVtYWluZGVyKHZhbCwgaXNTaWduZWQsIHRoaXMpO1xuICAgIH0sXG5cbiAgICByZWFkVmFyaW50NjQ6IGZ1bmN0aW9uKCkgeyAvLyBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIHYyLjAuMVxuICAgICAgICByZXR1cm4gdGhpcy5yZWFkVmFyaW50KHRydWUpO1xuICAgIH0sXG5cbiAgICByZWFkU1ZhcmludDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBudW0gPSB0aGlzLnJlYWRWYXJpbnQoKTtcbiAgICAgICAgcmV0dXJuIG51bSAlIDIgPT09IDEgPyAobnVtICsgMSkgLyAtMiA6IG51bSAvIDI7IC8vIHppZ3phZyBlbmNvZGluZ1xuICAgIH0sXG5cbiAgICByZWFkQm9vbGVhbjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBCb29sZWFuKHRoaXMucmVhZFZhcmludCgpKTtcbiAgICB9LFxuXG4gICAgcmVhZFN0cmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBlbmQgPSB0aGlzLnJlYWRWYXJpbnQoKSArIHRoaXMucG9zO1xuICAgICAgICB2YXIgcG9zID0gdGhpcy5wb3M7XG4gICAgICAgIHRoaXMucG9zID0gZW5kO1xuXG4gICAgICAgIGlmIChlbmQgLSBwb3MgPj0gVEVYVF9ERUNPREVSX01JTl9MRU5HVEggJiYgdXRmOFRleHREZWNvZGVyKSB7XG4gICAgICAgICAgICAvLyBsb25nZXIgc3RyaW5ncyBhcmUgZmFzdCB3aXRoIHRoZSBidWlsdC1pbiBicm93c2VyIFRleHREZWNvZGVyIEFQSVxuICAgICAgICAgICAgcmV0dXJuIHJlYWRVdGY4VGV4dERlY29kZXIodGhpcy5idWYsIHBvcywgZW5kKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBzaG9ydCBzdHJpbmdzIGFyZSBmYXN0IHdpdGggb3VyIGN1c3RvbSBpbXBsZW1lbnRhdGlvblxuICAgICAgICByZXR1cm4gcmVhZFV0ZjgodGhpcy5idWYsIHBvcywgZW5kKTtcbiAgICB9LFxuXG4gICAgcmVhZEJ5dGVzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGVuZCA9IHRoaXMucmVhZFZhcmludCgpICsgdGhpcy5wb3MsXG4gICAgICAgICAgICBidWZmZXIgPSB0aGlzLmJ1Zi5zdWJhcnJheSh0aGlzLnBvcywgZW5kKTtcbiAgICAgICAgdGhpcy5wb3MgPSBlbmQ7XG4gICAgICAgIHJldHVybiBidWZmZXI7XG4gICAgfSxcblxuICAgIC8vIHZlcmJvc2UgZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnM7IGRvZXNuJ3QgYWZmZWN0IGd6aXBwZWQgc2l6ZVxuXG4gICAgcmVhZFBhY2tlZFZhcmludDogZnVuY3Rpb24oYXJyLCBpc1NpZ25lZCkge1xuICAgICAgICBpZiAodGhpcy50eXBlICE9PSBQYmYuQnl0ZXMpIHJldHVybiBhcnIucHVzaCh0aGlzLnJlYWRWYXJpbnQoaXNTaWduZWQpKTtcbiAgICAgICAgdmFyIGVuZCA9IHJlYWRQYWNrZWRFbmQodGhpcyk7XG4gICAgICAgIGFyciA9IGFyciB8fCBbXTtcbiAgICAgICAgd2hpbGUgKHRoaXMucG9zIDwgZW5kKSBhcnIucHVzaCh0aGlzLnJlYWRWYXJpbnQoaXNTaWduZWQpKTtcbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICB9LFxuICAgIHJlYWRQYWNrZWRTVmFyaW50OiBmdW5jdGlvbihhcnIpIHtcbiAgICAgICAgaWYgKHRoaXMudHlwZSAhPT0gUGJmLkJ5dGVzKSByZXR1cm4gYXJyLnB1c2godGhpcy5yZWFkU1ZhcmludCgpKTtcbiAgICAgICAgdmFyIGVuZCA9IHJlYWRQYWNrZWRFbmQodGhpcyk7XG4gICAgICAgIGFyciA9IGFyciB8fCBbXTtcbiAgICAgICAgd2hpbGUgKHRoaXMucG9zIDwgZW5kKSBhcnIucHVzaCh0aGlzLnJlYWRTVmFyaW50KCkpO1xuICAgICAgICByZXR1cm4gYXJyO1xuICAgIH0sXG4gICAgcmVhZFBhY2tlZEJvb2xlYW46IGZ1bmN0aW9uKGFycikge1xuICAgICAgICBpZiAodGhpcy50eXBlICE9PSBQYmYuQnl0ZXMpIHJldHVybiBhcnIucHVzaCh0aGlzLnJlYWRCb29sZWFuKCkpO1xuICAgICAgICB2YXIgZW5kID0gcmVhZFBhY2tlZEVuZCh0aGlzKTtcbiAgICAgICAgYXJyID0gYXJyIHx8IFtdO1xuICAgICAgICB3aGlsZSAodGhpcy5wb3MgPCBlbmQpIGFyci5wdXNoKHRoaXMucmVhZEJvb2xlYW4oKSk7XG4gICAgICAgIHJldHVybiBhcnI7XG4gICAgfSxcbiAgICByZWFkUGFja2VkRmxvYXQ6IGZ1bmN0aW9uKGFycikge1xuICAgICAgICBpZiAodGhpcy50eXBlICE9PSBQYmYuQnl0ZXMpIHJldHVybiBhcnIucHVzaCh0aGlzLnJlYWRGbG9hdCgpKTtcbiAgICAgICAgdmFyIGVuZCA9IHJlYWRQYWNrZWRFbmQodGhpcyk7XG4gICAgICAgIGFyciA9IGFyciB8fCBbXTtcbiAgICAgICAgd2hpbGUgKHRoaXMucG9zIDwgZW5kKSBhcnIucHVzaCh0aGlzLnJlYWRGbG9hdCgpKTtcbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICB9LFxuICAgIHJlYWRQYWNrZWREb3VibGU6IGZ1bmN0aW9uKGFycikge1xuICAgICAgICBpZiAodGhpcy50eXBlICE9PSBQYmYuQnl0ZXMpIHJldHVybiBhcnIucHVzaCh0aGlzLnJlYWREb3VibGUoKSk7XG4gICAgICAgIHZhciBlbmQgPSByZWFkUGFja2VkRW5kKHRoaXMpO1xuICAgICAgICBhcnIgPSBhcnIgfHwgW107XG4gICAgICAgIHdoaWxlICh0aGlzLnBvcyA8IGVuZCkgYXJyLnB1c2godGhpcy5yZWFkRG91YmxlKCkpO1xuICAgICAgICByZXR1cm4gYXJyO1xuICAgIH0sXG4gICAgcmVhZFBhY2tlZEZpeGVkMzI6IGZ1bmN0aW9uKGFycikge1xuICAgICAgICBpZiAodGhpcy50eXBlICE9PSBQYmYuQnl0ZXMpIHJldHVybiBhcnIucHVzaCh0aGlzLnJlYWRGaXhlZDMyKCkpO1xuICAgICAgICB2YXIgZW5kID0gcmVhZFBhY2tlZEVuZCh0aGlzKTtcbiAgICAgICAgYXJyID0gYXJyIHx8IFtdO1xuICAgICAgICB3aGlsZSAodGhpcy5wb3MgPCBlbmQpIGFyci5wdXNoKHRoaXMucmVhZEZpeGVkMzIoKSk7XG4gICAgICAgIHJldHVybiBhcnI7XG4gICAgfSxcbiAgICByZWFkUGFja2VkU0ZpeGVkMzI6IGZ1bmN0aW9uKGFycikge1xuICAgICAgICBpZiAodGhpcy50eXBlICE9PSBQYmYuQnl0ZXMpIHJldHVybiBhcnIucHVzaCh0aGlzLnJlYWRTRml4ZWQzMigpKTtcbiAgICAgICAgdmFyIGVuZCA9IHJlYWRQYWNrZWRFbmQodGhpcyk7XG4gICAgICAgIGFyciA9IGFyciB8fCBbXTtcbiAgICAgICAgd2hpbGUgKHRoaXMucG9zIDwgZW5kKSBhcnIucHVzaCh0aGlzLnJlYWRTRml4ZWQzMigpKTtcbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICB9LFxuICAgIHJlYWRQYWNrZWRGaXhlZDY0OiBmdW5jdGlvbihhcnIpIHtcbiAgICAgICAgaWYgKHRoaXMudHlwZSAhPT0gUGJmLkJ5dGVzKSByZXR1cm4gYXJyLnB1c2godGhpcy5yZWFkRml4ZWQ2NCgpKTtcbiAgICAgICAgdmFyIGVuZCA9IHJlYWRQYWNrZWRFbmQodGhpcyk7XG4gICAgICAgIGFyciA9IGFyciB8fCBbXTtcbiAgICAgICAgd2hpbGUgKHRoaXMucG9zIDwgZW5kKSBhcnIucHVzaCh0aGlzLnJlYWRGaXhlZDY0KCkpO1xuICAgICAgICByZXR1cm4gYXJyO1xuICAgIH0sXG4gICAgcmVhZFBhY2tlZFNGaXhlZDY0OiBmdW5jdGlvbihhcnIpIHtcbiAgICAgICAgaWYgKHRoaXMudHlwZSAhPT0gUGJmLkJ5dGVzKSByZXR1cm4gYXJyLnB1c2godGhpcy5yZWFkU0ZpeGVkNjQoKSk7XG4gICAgICAgIHZhciBlbmQgPSByZWFkUGFja2VkRW5kKHRoaXMpO1xuICAgICAgICBhcnIgPSBhcnIgfHwgW107XG4gICAgICAgIHdoaWxlICh0aGlzLnBvcyA8IGVuZCkgYXJyLnB1c2godGhpcy5yZWFkU0ZpeGVkNjQoKSk7XG4gICAgICAgIHJldHVybiBhcnI7XG4gICAgfSxcblxuICAgIHNraXA6IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICB2YXIgdHlwZSA9IHZhbCAmIDB4NztcbiAgICAgICAgaWYgKHR5cGUgPT09IFBiZi5WYXJpbnQpIHdoaWxlICh0aGlzLmJ1Zlt0aGlzLnBvcysrXSA+IDB4N2YpIHt9XG4gICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IFBiZi5CeXRlcykgdGhpcy5wb3MgPSB0aGlzLnJlYWRWYXJpbnQoKSArIHRoaXMucG9zO1xuICAgICAgICBlbHNlIGlmICh0eXBlID09PSBQYmYuRml4ZWQzMikgdGhpcy5wb3MgKz0gNDtcbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gUGJmLkZpeGVkNjQpIHRoaXMucG9zICs9IDg7XG4gICAgICAgIGVsc2UgdGhyb3cgbmV3IEVycm9yKCdVbmltcGxlbWVudGVkIHR5cGU6ICcgKyB0eXBlKTtcbiAgICB9LFxuXG4gICAgLy8gPT09IFdSSVRJTkcgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIHdyaXRlVGFnOiBmdW5jdGlvbih0YWcsIHR5cGUpIHtcbiAgICAgICAgdGhpcy53cml0ZVZhcmludCgodGFnIDw8IDMpIHwgdHlwZSk7XG4gICAgfSxcblxuICAgIHJlYWxsb2M6IGZ1bmN0aW9uKG1pbikge1xuICAgICAgICB2YXIgbGVuZ3RoID0gdGhpcy5sZW5ndGggfHwgMTY7XG5cbiAgICAgICAgd2hpbGUgKGxlbmd0aCA8IHRoaXMucG9zICsgbWluKSBsZW5ndGggKj0gMjtcblxuICAgICAgICBpZiAobGVuZ3RoICE9PSB0aGlzLmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIGJ1ZiA9IG5ldyBVaW50OEFycmF5KGxlbmd0aCk7XG4gICAgICAgICAgICBidWYuc2V0KHRoaXMuYnVmKTtcbiAgICAgICAgICAgIHRoaXMuYnVmID0gYnVmO1xuICAgICAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5sZW5ndGggPSB0aGlzLnBvcztcbiAgICAgICAgdGhpcy5wb3MgPSAwO1xuICAgICAgICByZXR1cm4gdGhpcy5idWYuc3ViYXJyYXkoMCwgdGhpcy5sZW5ndGgpO1xuICAgIH0sXG5cbiAgICB3cml0ZUZpeGVkMzI6IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICB0aGlzLnJlYWxsb2MoNCk7XG4gICAgICAgIHdyaXRlSW50MzIodGhpcy5idWYsIHZhbCwgdGhpcy5wb3MpO1xuICAgICAgICB0aGlzLnBvcyArPSA0O1xuICAgIH0sXG5cbiAgICB3cml0ZVNGaXhlZDMyOiBmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgdGhpcy5yZWFsbG9jKDQpO1xuICAgICAgICB3cml0ZUludDMyKHRoaXMuYnVmLCB2YWwsIHRoaXMucG9zKTtcbiAgICAgICAgdGhpcy5wb3MgKz0gNDtcbiAgICB9LFxuXG4gICAgd3JpdGVGaXhlZDY0OiBmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgdGhpcy5yZWFsbG9jKDgpO1xuICAgICAgICB3cml0ZUludDMyKHRoaXMuYnVmLCB2YWwgJiAtMSwgdGhpcy5wb3MpO1xuICAgICAgICB3cml0ZUludDMyKHRoaXMuYnVmLCBNYXRoLmZsb29yKHZhbCAqIFNISUZUX1JJR0hUXzMyKSwgdGhpcy5wb3MgKyA0KTtcbiAgICAgICAgdGhpcy5wb3MgKz0gODtcbiAgICB9LFxuXG4gICAgd3JpdGVTRml4ZWQ2NDogZnVuY3Rpb24odmFsKSB7XG4gICAgICAgIHRoaXMucmVhbGxvYyg4KTtcbiAgICAgICAgd3JpdGVJbnQzMih0aGlzLmJ1ZiwgdmFsICYgLTEsIHRoaXMucG9zKTtcbiAgICAgICAgd3JpdGVJbnQzMih0aGlzLmJ1ZiwgTWF0aC5mbG9vcih2YWwgKiBTSElGVF9SSUdIVF8zMiksIHRoaXMucG9zICsgNCk7XG4gICAgICAgIHRoaXMucG9zICs9IDg7XG4gICAgfSxcblxuICAgIHdyaXRlVmFyaW50OiBmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgdmFsID0gK3ZhbCB8fCAwO1xuXG4gICAgICAgIGlmICh2YWwgPiAweGZmZmZmZmYgfHwgdmFsIDwgMCkge1xuICAgICAgICAgICAgd3JpdGVCaWdWYXJpbnQodmFsLCB0aGlzKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVhbGxvYyg0KTtcblxuICAgICAgICB0aGlzLmJ1Zlt0aGlzLnBvcysrXSA9ICAgICAgICAgICB2YWwgJiAweDdmICB8ICh2YWwgPiAweDdmID8gMHg4MCA6IDApOyBpZiAodmFsIDw9IDB4N2YpIHJldHVybjtcbiAgICAgICAgdGhpcy5idWZbdGhpcy5wb3MrK10gPSAoKHZhbCA+Pj49IDcpICYgMHg3ZikgfCAodmFsID4gMHg3ZiA/IDB4ODAgOiAwKTsgaWYgKHZhbCA8PSAweDdmKSByZXR1cm47XG4gICAgICAgIHRoaXMuYnVmW3RoaXMucG9zKytdID0gKCh2YWwgPj4+PSA3KSAmIDB4N2YpIHwgKHZhbCA+IDB4N2YgPyAweDgwIDogMCk7IGlmICh2YWwgPD0gMHg3ZikgcmV0dXJuO1xuICAgICAgICB0aGlzLmJ1Zlt0aGlzLnBvcysrXSA9ICAgKHZhbCA+Pj4gNykgJiAweDdmO1xuICAgIH0sXG5cbiAgICB3cml0ZVNWYXJpbnQ6IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICB0aGlzLndyaXRlVmFyaW50KHZhbCA8IDAgPyAtdmFsICogMiAtIDEgOiB2YWwgKiAyKTtcbiAgICB9LFxuXG4gICAgd3JpdGVCb29sZWFuOiBmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgdGhpcy53cml0ZVZhcmludChCb29sZWFuKHZhbCkpO1xuICAgIH0sXG5cbiAgICB3cml0ZVN0cmluZzogZnVuY3Rpb24oc3RyKSB7XG4gICAgICAgIHN0ciA9IFN0cmluZyhzdHIpO1xuICAgICAgICB0aGlzLnJlYWxsb2Moc3RyLmxlbmd0aCAqIDQpO1xuXG4gICAgICAgIHRoaXMucG9zKys7IC8vIHJlc2VydmUgMSBieXRlIGZvciBzaG9ydCBzdHJpbmcgbGVuZ3RoXG5cbiAgICAgICAgdmFyIHN0YXJ0UG9zID0gdGhpcy5wb3M7XG4gICAgICAgIC8vIHdyaXRlIHRoZSBzdHJpbmcgZGlyZWN0bHkgdG8gdGhlIGJ1ZmZlciBhbmQgc2VlIGhvdyBtdWNoIHdhcyB3cml0dGVuXG4gICAgICAgIHRoaXMucG9zID0gd3JpdGVVdGY4KHRoaXMuYnVmLCBzdHIsIHRoaXMucG9zKTtcbiAgICAgICAgdmFyIGxlbiA9IHRoaXMucG9zIC0gc3RhcnRQb3M7XG5cbiAgICAgICAgaWYgKGxlbiA+PSAweDgwKSBtYWtlUm9vbUZvckV4dHJhTGVuZ3RoKHN0YXJ0UG9zLCBsZW4sIHRoaXMpO1xuXG4gICAgICAgIC8vIGZpbmFsbHksIHdyaXRlIHRoZSBtZXNzYWdlIGxlbmd0aCBpbiB0aGUgcmVzZXJ2ZWQgcGxhY2UgYW5kIHJlc3RvcmUgdGhlIHBvc2l0aW9uXG4gICAgICAgIHRoaXMucG9zID0gc3RhcnRQb3MgLSAxO1xuICAgICAgICB0aGlzLndyaXRlVmFyaW50KGxlbik7XG4gICAgICAgIHRoaXMucG9zICs9IGxlbjtcbiAgICB9LFxuXG4gICAgd3JpdGVGbG9hdDogZnVuY3Rpb24odmFsKSB7XG4gICAgICAgIHRoaXMucmVhbGxvYyg0KTtcbiAgICAgICAgaWVlZTc1NC53cml0ZSh0aGlzLmJ1ZiwgdmFsLCB0aGlzLnBvcywgdHJ1ZSwgMjMsIDQpO1xuICAgICAgICB0aGlzLnBvcyArPSA0O1xuICAgIH0sXG5cbiAgICB3cml0ZURvdWJsZTogZnVuY3Rpb24odmFsKSB7XG4gICAgICAgIHRoaXMucmVhbGxvYyg4KTtcbiAgICAgICAgaWVlZTc1NC53cml0ZSh0aGlzLmJ1ZiwgdmFsLCB0aGlzLnBvcywgdHJ1ZSwgNTIsIDgpO1xuICAgICAgICB0aGlzLnBvcyArPSA4O1xuICAgIH0sXG5cbiAgICB3cml0ZUJ5dGVzOiBmdW5jdGlvbihidWZmZXIpIHtcbiAgICAgICAgdmFyIGxlbiA9IGJ1ZmZlci5sZW5ndGg7XG4gICAgICAgIHRoaXMud3JpdGVWYXJpbnQobGVuKTtcbiAgICAgICAgdGhpcy5yZWFsbG9jKGxlbik7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHRoaXMuYnVmW3RoaXMucG9zKytdID0gYnVmZmVyW2ldO1xuICAgIH0sXG5cbiAgICB3cml0ZVJhd01lc3NhZ2U6IGZ1bmN0aW9uKGZuLCBvYmopIHtcbiAgICAgICAgdGhpcy5wb3MrKzsgLy8gcmVzZXJ2ZSAxIGJ5dGUgZm9yIHNob3J0IG1lc3NhZ2UgbGVuZ3RoXG5cbiAgICAgICAgLy8gd3JpdGUgdGhlIG1lc3NhZ2UgZGlyZWN0bHkgdG8gdGhlIGJ1ZmZlciBhbmQgc2VlIGhvdyBtdWNoIHdhcyB3cml0dGVuXG4gICAgICAgIHZhciBzdGFydFBvcyA9IHRoaXMucG9zO1xuICAgICAgICBmbihvYmosIHRoaXMpO1xuICAgICAgICB2YXIgbGVuID0gdGhpcy5wb3MgLSBzdGFydFBvcztcblxuICAgICAgICBpZiAobGVuID49IDB4ODApIG1ha2VSb29tRm9yRXh0cmFMZW5ndGgoc3RhcnRQb3MsIGxlbiwgdGhpcyk7XG5cbiAgICAgICAgLy8gZmluYWxseSwgd3JpdGUgdGhlIG1lc3NhZ2UgbGVuZ3RoIGluIHRoZSByZXNlcnZlZCBwbGFjZSBhbmQgcmVzdG9yZSB0aGUgcG9zaXRpb25cbiAgICAgICAgdGhpcy5wb3MgPSBzdGFydFBvcyAtIDE7XG4gICAgICAgIHRoaXMud3JpdGVWYXJpbnQobGVuKTtcbiAgICAgICAgdGhpcy5wb3MgKz0gbGVuO1xuICAgIH0sXG5cbiAgICB3cml0ZU1lc3NhZ2U6IGZ1bmN0aW9uKHRhZywgZm4sIG9iaikge1xuICAgICAgICB0aGlzLndyaXRlVGFnKHRhZywgUGJmLkJ5dGVzKTtcbiAgICAgICAgdGhpcy53cml0ZVJhd01lc3NhZ2UoZm4sIG9iaik7XG4gICAgfSxcblxuICAgIHdyaXRlUGFja2VkVmFyaW50OiAgIGZ1bmN0aW9uKHRhZywgYXJyKSB7IGlmIChhcnIubGVuZ3RoKSB0aGlzLndyaXRlTWVzc2FnZSh0YWcsIHdyaXRlUGFja2VkVmFyaW50LCBhcnIpOyAgIH0sXG4gICAgd3JpdGVQYWNrZWRTVmFyaW50OiAgZnVuY3Rpb24odGFnLCBhcnIpIHsgaWYgKGFyci5sZW5ndGgpIHRoaXMud3JpdGVNZXNzYWdlKHRhZywgd3JpdGVQYWNrZWRTVmFyaW50LCBhcnIpOyAgfSxcbiAgICB3cml0ZVBhY2tlZEJvb2xlYW46ICBmdW5jdGlvbih0YWcsIGFycikgeyBpZiAoYXJyLmxlbmd0aCkgdGhpcy53cml0ZU1lc3NhZ2UodGFnLCB3cml0ZVBhY2tlZEJvb2xlYW4sIGFycik7ICB9LFxuICAgIHdyaXRlUGFja2VkRmxvYXQ6ICAgIGZ1bmN0aW9uKHRhZywgYXJyKSB7IGlmIChhcnIubGVuZ3RoKSB0aGlzLndyaXRlTWVzc2FnZSh0YWcsIHdyaXRlUGFja2VkRmxvYXQsIGFycik7ICAgIH0sXG4gICAgd3JpdGVQYWNrZWREb3VibGU6ICAgZnVuY3Rpb24odGFnLCBhcnIpIHsgaWYgKGFyci5sZW5ndGgpIHRoaXMud3JpdGVNZXNzYWdlKHRhZywgd3JpdGVQYWNrZWREb3VibGUsIGFycik7ICAgfSxcbiAgICB3cml0ZVBhY2tlZEZpeGVkMzI6ICBmdW5jdGlvbih0YWcsIGFycikgeyBpZiAoYXJyLmxlbmd0aCkgdGhpcy53cml0ZU1lc3NhZ2UodGFnLCB3cml0ZVBhY2tlZEZpeGVkMzIsIGFycik7ICB9LFxuICAgIHdyaXRlUGFja2VkU0ZpeGVkMzI6IGZ1bmN0aW9uKHRhZywgYXJyKSB7IGlmIChhcnIubGVuZ3RoKSB0aGlzLndyaXRlTWVzc2FnZSh0YWcsIHdyaXRlUGFja2VkU0ZpeGVkMzIsIGFycik7IH0sXG4gICAgd3JpdGVQYWNrZWRGaXhlZDY0OiAgZnVuY3Rpb24odGFnLCBhcnIpIHsgaWYgKGFyci5sZW5ndGgpIHRoaXMud3JpdGVNZXNzYWdlKHRhZywgd3JpdGVQYWNrZWRGaXhlZDY0LCBhcnIpOyAgfSxcbiAgICB3cml0ZVBhY2tlZFNGaXhlZDY0OiBmdW5jdGlvbih0YWcsIGFycikgeyBpZiAoYXJyLmxlbmd0aCkgdGhpcy53cml0ZU1lc3NhZ2UodGFnLCB3cml0ZVBhY2tlZFNGaXhlZDY0LCBhcnIpOyB9LFxuXG4gICAgd3JpdGVCeXRlc0ZpZWxkOiBmdW5jdGlvbih0YWcsIGJ1ZmZlcikge1xuICAgICAgICB0aGlzLndyaXRlVGFnKHRhZywgUGJmLkJ5dGVzKTtcbiAgICAgICAgdGhpcy53cml0ZUJ5dGVzKGJ1ZmZlcik7XG4gICAgfSxcbiAgICB3cml0ZUZpeGVkMzJGaWVsZDogZnVuY3Rpb24odGFnLCB2YWwpIHtcbiAgICAgICAgdGhpcy53cml0ZVRhZyh0YWcsIFBiZi5GaXhlZDMyKTtcbiAgICAgICAgdGhpcy53cml0ZUZpeGVkMzIodmFsKTtcbiAgICB9LFxuICAgIHdyaXRlU0ZpeGVkMzJGaWVsZDogZnVuY3Rpb24odGFnLCB2YWwpIHtcbiAgICAgICAgdGhpcy53cml0ZVRhZyh0YWcsIFBiZi5GaXhlZDMyKTtcbiAgICAgICAgdGhpcy53cml0ZVNGaXhlZDMyKHZhbCk7XG4gICAgfSxcbiAgICB3cml0ZUZpeGVkNjRGaWVsZDogZnVuY3Rpb24odGFnLCB2YWwpIHtcbiAgICAgICAgdGhpcy53cml0ZVRhZyh0YWcsIFBiZi5GaXhlZDY0KTtcbiAgICAgICAgdGhpcy53cml0ZUZpeGVkNjQodmFsKTtcbiAgICB9LFxuICAgIHdyaXRlU0ZpeGVkNjRGaWVsZDogZnVuY3Rpb24odGFnLCB2YWwpIHtcbiAgICAgICAgdGhpcy53cml0ZVRhZyh0YWcsIFBiZi5GaXhlZDY0KTtcbiAgICAgICAgdGhpcy53cml0ZVNGaXhlZDY0KHZhbCk7XG4gICAgfSxcbiAgICB3cml0ZVZhcmludEZpZWxkOiBmdW5jdGlvbih0YWcsIHZhbCkge1xuICAgICAgICB0aGlzLndyaXRlVGFnKHRhZywgUGJmLlZhcmludCk7XG4gICAgICAgIHRoaXMud3JpdGVWYXJpbnQodmFsKTtcbiAgICB9LFxuICAgIHdyaXRlU1ZhcmludEZpZWxkOiBmdW5jdGlvbih0YWcsIHZhbCkge1xuICAgICAgICB0aGlzLndyaXRlVGFnKHRhZywgUGJmLlZhcmludCk7XG4gICAgICAgIHRoaXMud3JpdGVTVmFyaW50KHZhbCk7XG4gICAgfSxcbiAgICB3cml0ZVN0cmluZ0ZpZWxkOiBmdW5jdGlvbih0YWcsIHN0cikge1xuICAgICAgICB0aGlzLndyaXRlVGFnKHRhZywgUGJmLkJ5dGVzKTtcbiAgICAgICAgdGhpcy53cml0ZVN0cmluZyhzdHIpO1xuICAgIH0sXG4gICAgd3JpdGVGbG9hdEZpZWxkOiBmdW5jdGlvbih0YWcsIHZhbCkge1xuICAgICAgICB0aGlzLndyaXRlVGFnKHRhZywgUGJmLkZpeGVkMzIpO1xuICAgICAgICB0aGlzLndyaXRlRmxvYXQodmFsKTtcbiAgICB9LFxuICAgIHdyaXRlRG91YmxlRmllbGQ6IGZ1bmN0aW9uKHRhZywgdmFsKSB7XG4gICAgICAgIHRoaXMud3JpdGVUYWcodGFnLCBQYmYuRml4ZWQ2NCk7XG4gICAgICAgIHRoaXMud3JpdGVEb3VibGUodmFsKTtcbiAgICB9LFxuICAgIHdyaXRlQm9vbGVhbkZpZWxkOiBmdW5jdGlvbih0YWcsIHZhbCkge1xuICAgICAgICB0aGlzLndyaXRlVmFyaW50RmllbGQodGFnLCBCb29sZWFuKHZhbCkpO1xuICAgIH1cbn07XG5cbmZ1bmN0aW9uIHJlYWRWYXJpbnRSZW1haW5kZXIobCwgcywgcCkge1xuICAgIHZhciBidWYgPSBwLmJ1ZixcbiAgICAgICAgaCwgYjtcblxuICAgIGIgPSBidWZbcC5wb3MrK107IGggID0gKGIgJiAweDcwKSA+PiA0OyAgaWYgKGIgPCAweDgwKSByZXR1cm4gdG9OdW0obCwgaCwgcyk7XG4gICAgYiA9IGJ1ZltwLnBvcysrXTsgaCB8PSAoYiAmIDB4N2YpIDw8IDM7ICBpZiAoYiA8IDB4ODApIHJldHVybiB0b051bShsLCBoLCBzKTtcbiAgICBiID0gYnVmW3AucG9zKytdOyBoIHw9IChiICYgMHg3ZikgPDwgMTA7IGlmIChiIDwgMHg4MCkgcmV0dXJuIHRvTnVtKGwsIGgsIHMpO1xuICAgIGIgPSBidWZbcC5wb3MrK107IGggfD0gKGIgJiAweDdmKSA8PCAxNzsgaWYgKGIgPCAweDgwKSByZXR1cm4gdG9OdW0obCwgaCwgcyk7XG4gICAgYiA9IGJ1ZltwLnBvcysrXTsgaCB8PSAoYiAmIDB4N2YpIDw8IDI0OyBpZiAoYiA8IDB4ODApIHJldHVybiB0b051bShsLCBoLCBzKTtcbiAgICBiID0gYnVmW3AucG9zKytdOyBoIHw9IChiICYgMHgwMSkgPDwgMzE7IGlmIChiIDwgMHg4MCkgcmV0dXJuIHRvTnVtKGwsIGgsIHMpO1xuXG4gICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB2YXJpbnQgbm90IG1vcmUgdGhhbiAxMCBieXRlcycpO1xufVxuXG5mdW5jdGlvbiByZWFkUGFja2VkRW5kKHBiZikge1xuICAgIHJldHVybiBwYmYudHlwZSA9PT0gUGJmLkJ5dGVzID9cbiAgICAgICAgcGJmLnJlYWRWYXJpbnQoKSArIHBiZi5wb3MgOiBwYmYucG9zICsgMTtcbn1cblxuZnVuY3Rpb24gdG9OdW0obG93LCBoaWdoLCBpc1NpZ25lZCkge1xuICAgIGlmIChpc1NpZ25lZCkge1xuICAgICAgICByZXR1cm4gaGlnaCAqIDB4MTAwMDAwMDAwICsgKGxvdyA+Pj4gMCk7XG4gICAgfVxuXG4gICAgcmV0dXJuICgoaGlnaCA+Pj4gMCkgKiAweDEwMDAwMDAwMCkgKyAobG93ID4+PiAwKTtcbn1cblxuZnVuY3Rpb24gd3JpdGVCaWdWYXJpbnQodmFsLCBwYmYpIHtcbiAgICB2YXIgbG93LCBoaWdoO1xuXG4gICAgaWYgKHZhbCA+PSAwKSB7XG4gICAgICAgIGxvdyAgPSAodmFsICUgMHgxMDAwMDAwMDApIHwgMDtcbiAgICAgICAgaGlnaCA9ICh2YWwgLyAweDEwMDAwMDAwMCkgfCAwO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxvdyAgPSB+KC12YWwgJSAweDEwMDAwMDAwMCk7XG4gICAgICAgIGhpZ2ggPSB+KC12YWwgLyAweDEwMDAwMDAwMCk7XG5cbiAgICAgICAgaWYgKGxvdyBeIDB4ZmZmZmZmZmYpIHtcbiAgICAgICAgICAgIGxvdyA9IChsb3cgKyAxKSB8IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsb3cgPSAwO1xuICAgICAgICAgICAgaGlnaCA9IChoaWdoICsgMSkgfCAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZhbCA+PSAweDEwMDAwMDAwMDAwMDAwMDAwIHx8IHZhbCA8IC0weDEwMDAwMDAwMDAwMDAwMDAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignR2l2ZW4gdmFyaW50IGRvZXNuXFwndCBmaXQgaW50byAxMCBieXRlcycpO1xuICAgIH1cblxuICAgIHBiZi5yZWFsbG9jKDEwKTtcblxuICAgIHdyaXRlQmlnVmFyaW50TG93KGxvdywgaGlnaCwgcGJmKTtcbiAgICB3cml0ZUJpZ1ZhcmludEhpZ2goaGlnaCwgcGJmKTtcbn1cblxuZnVuY3Rpb24gd3JpdGVCaWdWYXJpbnRMb3cobG93LCBoaWdoLCBwYmYpIHtcbiAgICBwYmYuYnVmW3BiZi5wb3MrK10gPSBsb3cgJiAweDdmIHwgMHg4MDsgbG93ID4+Pj0gNztcbiAgICBwYmYuYnVmW3BiZi5wb3MrK10gPSBsb3cgJiAweDdmIHwgMHg4MDsgbG93ID4+Pj0gNztcbiAgICBwYmYuYnVmW3BiZi5wb3MrK10gPSBsb3cgJiAweDdmIHwgMHg4MDsgbG93ID4+Pj0gNztcbiAgICBwYmYuYnVmW3BiZi5wb3MrK10gPSBsb3cgJiAweDdmIHwgMHg4MDsgbG93ID4+Pj0gNztcbiAgICBwYmYuYnVmW3BiZi5wb3NdICAgPSBsb3cgJiAweDdmO1xufVxuXG5mdW5jdGlvbiB3cml0ZUJpZ1ZhcmludEhpZ2goaGlnaCwgcGJmKSB7XG4gICAgdmFyIGxzYiA9IChoaWdoICYgMHgwNykgPDwgNDtcblxuICAgIHBiZi5idWZbcGJmLnBvcysrXSB8PSBsc2IgICAgICAgICB8ICgoaGlnaCA+Pj49IDMpID8gMHg4MCA6IDApOyBpZiAoIWhpZ2gpIHJldHVybjtcbiAgICBwYmYuYnVmW3BiZi5wb3MrK10gID0gaGlnaCAmIDB4N2YgfCAoKGhpZ2ggPj4+PSA3KSA/IDB4ODAgOiAwKTsgaWYgKCFoaWdoKSByZXR1cm47XG4gICAgcGJmLmJ1ZltwYmYucG9zKytdICA9IGhpZ2ggJiAweDdmIHwgKChoaWdoID4+Pj0gNykgPyAweDgwIDogMCk7IGlmICghaGlnaCkgcmV0dXJuO1xuICAgIHBiZi5idWZbcGJmLnBvcysrXSAgPSBoaWdoICYgMHg3ZiB8ICgoaGlnaCA+Pj49IDcpID8gMHg4MCA6IDApOyBpZiAoIWhpZ2gpIHJldHVybjtcbiAgICBwYmYuYnVmW3BiZi5wb3MrK10gID0gaGlnaCAmIDB4N2YgfCAoKGhpZ2ggPj4+PSA3KSA/IDB4ODAgOiAwKTsgaWYgKCFoaWdoKSByZXR1cm47XG4gICAgcGJmLmJ1ZltwYmYucG9zKytdICA9IGhpZ2ggJiAweDdmO1xufVxuXG5mdW5jdGlvbiBtYWtlUm9vbUZvckV4dHJhTGVuZ3RoKHN0YXJ0UG9zLCBsZW4sIHBiZikge1xuICAgIHZhciBleHRyYUxlbiA9XG4gICAgICAgIGxlbiA8PSAweDNmZmYgPyAxIDpcbiAgICAgICAgbGVuIDw9IDB4MWZmZmZmID8gMiA6XG4gICAgICAgIGxlbiA8PSAweGZmZmZmZmYgPyAzIDogTWF0aC5mbG9vcihNYXRoLmxvZyhsZW4pIC8gKE1hdGguTE4yICogNykpO1xuXG4gICAgLy8gaWYgMSBieXRlIGlzbid0IGVub3VnaCBmb3IgZW5jb2RpbmcgbWVzc2FnZSBsZW5ndGgsIHNoaWZ0IHRoZSBkYXRhIHRvIHRoZSByaWdodFxuICAgIHBiZi5yZWFsbG9jKGV4dHJhTGVuKTtcbiAgICBmb3IgKHZhciBpID0gcGJmLnBvcyAtIDE7IGkgPj0gc3RhcnRQb3M7IGktLSkgcGJmLmJ1ZltpICsgZXh0cmFMZW5dID0gcGJmLmJ1ZltpXTtcbn1cblxuZnVuY3Rpb24gd3JpdGVQYWNrZWRWYXJpbnQoYXJyLCBwYmYpICAgeyBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykgcGJmLndyaXRlVmFyaW50KGFycltpXSk7ICAgfVxuZnVuY3Rpb24gd3JpdGVQYWNrZWRTVmFyaW50KGFyciwgcGJmKSAgeyBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykgcGJmLndyaXRlU1ZhcmludChhcnJbaV0pOyAgfVxuZnVuY3Rpb24gd3JpdGVQYWNrZWRGbG9hdChhcnIsIHBiZikgICAgeyBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykgcGJmLndyaXRlRmxvYXQoYXJyW2ldKTsgICAgfVxuZnVuY3Rpb24gd3JpdGVQYWNrZWREb3VibGUoYXJyLCBwYmYpICAgeyBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykgcGJmLndyaXRlRG91YmxlKGFycltpXSk7ICAgfVxuZnVuY3Rpb24gd3JpdGVQYWNrZWRCb29sZWFuKGFyciwgcGJmKSAgeyBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykgcGJmLndyaXRlQm9vbGVhbihhcnJbaV0pOyAgfVxuZnVuY3Rpb24gd3JpdGVQYWNrZWRGaXhlZDMyKGFyciwgcGJmKSAgeyBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykgcGJmLndyaXRlRml4ZWQzMihhcnJbaV0pOyAgfVxuZnVuY3Rpb24gd3JpdGVQYWNrZWRTRml4ZWQzMihhcnIsIHBiZikgeyBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykgcGJmLndyaXRlU0ZpeGVkMzIoYXJyW2ldKTsgfVxuZnVuY3Rpb24gd3JpdGVQYWNrZWRGaXhlZDY0KGFyciwgcGJmKSAgeyBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykgcGJmLndyaXRlRml4ZWQ2NChhcnJbaV0pOyAgfVxuZnVuY3Rpb24gd3JpdGVQYWNrZWRTRml4ZWQ2NChhcnIsIHBiZikgeyBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykgcGJmLndyaXRlU0ZpeGVkNjQoYXJyW2ldKTsgfVxuXG4vLyBCdWZmZXIgY29kZSBiZWxvdyBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9mZXJvc3MvYnVmZmVyLCBNSVQtbGljZW5zZWRcblxuZnVuY3Rpb24gcmVhZFVJbnQzMihidWYsIHBvcykge1xuICAgIHJldHVybiAoKGJ1Zltwb3NdKSB8XG4gICAgICAgIChidWZbcG9zICsgMV0gPDwgOCkgfFxuICAgICAgICAoYnVmW3BvcyArIDJdIDw8IDE2KSkgK1xuICAgICAgICAoYnVmW3BvcyArIDNdICogMHgxMDAwMDAwKTtcbn1cblxuZnVuY3Rpb24gd3JpdGVJbnQzMihidWYsIHZhbCwgcG9zKSB7XG4gICAgYnVmW3Bvc10gPSB2YWw7XG4gICAgYnVmW3BvcyArIDFdID0gKHZhbCA+Pj4gOCk7XG4gICAgYnVmW3BvcyArIDJdID0gKHZhbCA+Pj4gMTYpO1xuICAgIGJ1Zltwb3MgKyAzXSA9ICh2YWwgPj4+IDI0KTtcbn1cblxuZnVuY3Rpb24gcmVhZEludDMyKGJ1ZiwgcG9zKSB7XG4gICAgcmV0dXJuICgoYnVmW3Bvc10pIHxcbiAgICAgICAgKGJ1Zltwb3MgKyAxXSA8PCA4KSB8XG4gICAgICAgIChidWZbcG9zICsgMl0gPDwgMTYpKSArXG4gICAgICAgIChidWZbcG9zICsgM10gPDwgMjQpO1xufVxuXG5mdW5jdGlvbiByZWFkVXRmOChidWYsIHBvcywgZW5kKSB7XG4gICAgdmFyIHN0ciA9ICcnO1xuICAgIHZhciBpID0gcG9zO1xuXG4gICAgd2hpbGUgKGkgPCBlbmQpIHtcbiAgICAgICAgdmFyIGIwID0gYnVmW2ldO1xuICAgICAgICB2YXIgYyA9IG51bGw7IC8vIGNvZGVwb2ludFxuICAgICAgICB2YXIgYnl0ZXNQZXJTZXF1ZW5jZSA9XG4gICAgICAgICAgICBiMCA+IDB4RUYgPyA0IDpcbiAgICAgICAgICAgIGIwID4gMHhERiA/IDMgOlxuICAgICAgICAgICAgYjAgPiAweEJGID8gMiA6IDE7XG5cbiAgICAgICAgaWYgKGkgKyBieXRlc1BlclNlcXVlbmNlID4gZW5kKSBicmVhaztcblxuICAgICAgICB2YXIgYjEsIGIyLCBiMztcblxuICAgICAgICBpZiAoYnl0ZXNQZXJTZXF1ZW5jZSA9PT0gMSkge1xuICAgICAgICAgICAgaWYgKGIwIDwgMHg4MCkge1xuICAgICAgICAgICAgICAgIGMgPSBiMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChieXRlc1BlclNlcXVlbmNlID09PSAyKSB7XG4gICAgICAgICAgICBiMSA9IGJ1ZltpICsgMV07XG4gICAgICAgICAgICBpZiAoKGIxICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgICAgICBjID0gKGIwICYgMHgxRikgPDwgMHg2IHwgKGIxICYgMHgzRik7XG4gICAgICAgICAgICAgICAgaWYgKGMgPD0gMHg3Rikge1xuICAgICAgICAgICAgICAgICAgICBjID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoYnl0ZXNQZXJTZXF1ZW5jZSA9PT0gMykge1xuICAgICAgICAgICAgYjEgPSBidWZbaSArIDFdO1xuICAgICAgICAgICAgYjIgPSBidWZbaSArIDJdO1xuICAgICAgICAgICAgaWYgKChiMSAmIDB4QzApID09PSAweDgwICYmIChiMiAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICAgICAgYyA9IChiMCAmIDB4RikgPDwgMHhDIHwgKGIxICYgMHgzRikgPDwgMHg2IHwgKGIyICYgMHgzRik7XG4gICAgICAgICAgICAgICAgaWYgKGMgPD0gMHg3RkYgfHwgKGMgPj0gMHhEODAwICYmIGMgPD0gMHhERkZGKSkge1xuICAgICAgICAgICAgICAgICAgICBjID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoYnl0ZXNQZXJTZXF1ZW5jZSA9PT0gNCkge1xuICAgICAgICAgICAgYjEgPSBidWZbaSArIDFdO1xuICAgICAgICAgICAgYjIgPSBidWZbaSArIDJdO1xuICAgICAgICAgICAgYjMgPSBidWZbaSArIDNdO1xuICAgICAgICAgICAgaWYgKChiMSAmIDB4QzApID09PSAweDgwICYmIChiMiAmIDB4QzApID09PSAweDgwICYmIChiMyAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICAgICAgYyA9IChiMCAmIDB4RikgPDwgMHgxMiB8IChiMSAmIDB4M0YpIDw8IDB4QyB8IChiMiAmIDB4M0YpIDw8IDB4NiB8IChiMyAmIDB4M0YpO1xuICAgICAgICAgICAgICAgIGlmIChjIDw9IDB4RkZGRiB8fCBjID49IDB4MTEwMDAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGMgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjID09PSBudWxsKSB7XG4gICAgICAgICAgICBjID0gMHhGRkZEO1xuICAgICAgICAgICAgYnl0ZXNQZXJTZXF1ZW5jZSA9IDE7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjID4gMHhGRkZGKSB7XG4gICAgICAgICAgICBjIC09IDB4MTAwMDA7XG4gICAgICAgICAgICBzdHIgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjID4+PiAxMCAmIDB4M0ZGIHwgMHhEODAwKTtcbiAgICAgICAgICAgIGMgPSAweERDMDAgfCBjICYgMHgzRkY7XG4gICAgICAgIH1cblxuICAgICAgICBzdHIgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjKTtcbiAgICAgICAgaSArPSBieXRlc1BlclNlcXVlbmNlO1xuICAgIH1cblxuICAgIHJldHVybiBzdHI7XG59XG5cbmZ1bmN0aW9uIHJlYWRVdGY4VGV4dERlY29kZXIoYnVmLCBwb3MsIGVuZCkge1xuICAgIHJldHVybiB1dGY4VGV4dERlY29kZXIuZGVjb2RlKGJ1Zi5zdWJhcnJheShwb3MsIGVuZCkpO1xufVxuXG5mdW5jdGlvbiB3cml0ZVV0ZjgoYnVmLCBzdHIsIHBvcykge1xuICAgIGZvciAodmFyIGkgPSAwLCBjLCBsZWFkOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGMgPSBzdHIuY2hhckNvZGVBdChpKTsgLy8gY29kZSBwb2ludFxuXG4gICAgICAgIGlmIChjID4gMHhEN0ZGICYmIGMgPCAweEUwMDApIHtcbiAgICAgICAgICAgIGlmIChsZWFkKSB7XG4gICAgICAgICAgICAgICAgaWYgKGMgPCAweERDMDApIHtcbiAgICAgICAgICAgICAgICAgICAgYnVmW3BvcysrXSA9IDB4RUY7XG4gICAgICAgICAgICAgICAgICAgIGJ1Zltwb3MrK10gPSAweEJGO1xuICAgICAgICAgICAgICAgICAgICBidWZbcG9zKytdID0gMHhCRDtcbiAgICAgICAgICAgICAgICAgICAgbGVhZCA9IGM7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGMgPSBsZWFkIC0gMHhEODAwIDw8IDEwIHwgYyAtIDB4REMwMCB8IDB4MTAwMDA7XG4gICAgICAgICAgICAgICAgICAgIGxlYWQgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGMgPiAweERCRkYgfHwgKGkgKyAxID09PSBzdHIubGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgICAgICBidWZbcG9zKytdID0gMHhFRjtcbiAgICAgICAgICAgICAgICAgICAgYnVmW3BvcysrXSA9IDB4QkY7XG4gICAgICAgICAgICAgICAgICAgIGJ1Zltwb3MrK10gPSAweEJEO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxlYWQgPSBjO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChsZWFkKSB7XG4gICAgICAgICAgICBidWZbcG9zKytdID0gMHhFRjtcbiAgICAgICAgICAgIGJ1Zltwb3MrK10gPSAweEJGO1xuICAgICAgICAgICAgYnVmW3BvcysrXSA9IDB4QkQ7XG4gICAgICAgICAgICBsZWFkID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjIDwgMHg4MCkge1xuICAgICAgICAgICAgYnVmW3BvcysrXSA9IGM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoYyA8IDB4ODAwKSB7XG4gICAgICAgICAgICAgICAgYnVmW3BvcysrXSA9IGMgPj4gMHg2IHwgMHhDMDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGMgPCAweDEwMDAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGJ1Zltwb3MrK10gPSBjID4+IDB4QyB8IDB4RTA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYnVmW3BvcysrXSA9IGMgPj4gMHgxMiB8IDB4RjA7XG4gICAgICAgICAgICAgICAgICAgIGJ1Zltwb3MrK10gPSBjID4+IDB4QyAmIDB4M0YgfCAweDgwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBidWZbcG9zKytdID0gYyA+PiAweDYgJiAweDNGIHwgMHg4MDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJ1Zltwb3MrK10gPSBjICYgMHgzRiB8IDB4ODA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBvcztcbn1cbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gYXN5bmNXZWF0aGVyIChzZWFyY2hsb2NhdGlvbikge1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlIChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cbiAgICAgICAgLy9sZXQgc2VhcmNobG9jYXRpb24gPSAnYWJ1amEnO1xuXG4gICAgICAgIGxldCBhdHRlbXB0ZWRMb2NhdGlvbiA9IGZldGNoKGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9OGE5MzEwMDI5ZTdmNDNlMmI2YTQwNjU4MjMwMjA1JnE9JHtzZWFyY2hsb2NhdGlvbn0mYXFpPW5vYCwge21vZGU6ICdjb3JzJ30pO1xuXG4gICAgICAgIGF0dGVtcHRlZExvY2F0aW9uLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cocmVzcG9uc2UpXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXNwb25zZSlcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpXG5cbiAgICAgICAgfSlcblxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG5cbiAgICAgICAgfSlcblxuXG4gICAgICAgIFxuXG4gICAgfSlcblxuXG5cbn07XG5cbmV4cG9ydCB7YXN5bmNXZWF0aGVyfVxuXG5cblxuXG5cblxuXG5cblxuIiwiXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xubGV0IGVsZW1lbnRDcmVhdG9yID0gZnVuY3Rpb24odHlwZSkge1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKGNsYXNzTmFtZSkge1xuXG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gZWxlbWVudDtcblxuICAgIH1cblxufVxuXG5sZXQgZGl2bWFrZXIgPSBlbGVtZW50Q3JlYXRvcignZGl2Jyk7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmxldCBmdWxsUGFnZSA9IGRpdm1ha2VyKCdmdWxsUGFnZScpO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vL1N0YXJ0IG9mIE1ha2luZyBNYWluIFNlY3Rpb25zXG5cbmxldCBtZW51QmFyID0gZGl2bWFrZXIoJ21lbnVCYXInKTsvLy8vLy8vLy8vL1xuXG5sZXQgc2VhcmNoU2VjdGlvbiA9IGRpdm1ha2VyKCdzZWFyY2hTZWN0aW9uJyk7XG5tZW51QmFyLmFwcGVuZENoaWxkKHNlYXJjaFNlY3Rpb24pO1xuXG5sZXQgYnV0dG9uU2VjdGlvbiA9IGRpdm1ha2VyKCdidXR0b25TZWN0aW9uJyk7XG5tZW51QmFyLmFwcGVuZENoaWxkKGJ1dHRvblNlY3Rpb24pO1xuXG5cbmZ1bGxQYWdlLmFwcGVuZENoaWxkKG1lbnVCYXIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxubGV0IGRhdGFTZWN0aW9uID0gZGl2bWFrZXIoJ2RhdGEnKTsvLy8vLy8vLy8vL1xuXG5cbmxldCBkYXRhU2VjdGlvblRvcCA9IGRpdm1ha2VyKCdkYXRhU2VjdGlvblRvcCcpO1xuZGF0YVNlY3Rpb24uYXBwZW5kQ2hpbGQoZGF0YVNlY3Rpb25Ub3ApO1xuXG5sZXQgZGF0YVNlY3Rpb25Cb3R0b20gPSBkaXZtYWtlcignZGF0YVNlY3Rpb25Cb3R0b20nKTtcbmRhdGFTZWN0aW9uLmFwcGVuZENoaWxkKGRhdGFTZWN0aW9uQm90dG9tKTtcblxuXG5mdWxsUGFnZS5hcHBlbmRDaGlsZChkYXRhU2VjdGlvbik7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxubGV0IG1hcFNlY3Rpb24gPSBkaXZtYWtlcignbWFwU2VjdGlvbicpOy8vLy8vLy8vLy8vLy9cblxuXG5mdWxsUGFnZS5hcHBlbmRDaGlsZChtYXBTZWN0aW9uKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxubGV0IGZvcm1NYWtlciA9IGVsZW1lbnRDcmVhdG9yKCdmb3JtJyk7XG5cbmxldCBzZWFyY2hGb3JtID0gZm9ybU1ha2VyKCdzZWFyY2hGb3JtJyk7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxubGV0IHNlYXJjaEJhck1ha2VyID0gZWxlbWVudENyZWF0b3IoJ2lucHV0Jyk7XG5cbmxldCBzZWFyY2hCYXIgPSBzZWFyY2hCYXJNYWtlcignc2VhcmNoQmFyJyk7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5zZWFyY2hCYXIudHlwZSA9ICd0ZXh0JztcbnNlYXJjaEJhci5pZCA9ICdzZWFyY2hCYXInO1xuc2VhcmNoQmFyLm5hbWUgPSAnc2VhcmNoQmFyJztcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5sZXQgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5zZWFyY2hCdXR0b24uY2xhc3NMaXN0LmFkZCgnc2VhcmNoQnV0dG9uJyk7XG5zZWFyY2hCdXR0b24udHlwZSA9ICdidXR0b24nO1xuc2VhcmNoQnV0dG9uLnRleHRDb250ZW50ID0gJ1NlYXJjaCc7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuc2VhcmNoRm9ybS5hcHBlbmRDaGlsZChzZWFyY2hCYXIpO1xuc2VhcmNoRm9ybS5hcHBlbmRDaGlsZChzZWFyY2hCdXR0b24pO1xuXG5zZWFyY2hTZWN0aW9uLmFwcGVuZENoaWxkKHNlYXJjaEZvcm0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8vLy8gU3RhcnQgb2YgTWFraW5nIFVuaXRzIFdpdGhpbiBNYWluIFNlY3Rpb25zXG5cbmxldCBsb2NhdGlvbkhlYWRpbmcgPSBkaXZtYWtlcignbG9jYXRpb25IZWFkaW5nJyk7XG5sb2NhdGlvbkhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnYm9yZGVyQ2hlY2snKTtcbmxldCBjdXJyZW50VGVtcGVyYXR1cmUgPSBkaXZtYWtlcignY3VycmVudFRlbXBlcmF0dXJlJyk7XG5jdXJyZW50VGVtcGVyYXR1cmUuY2xhc3NMaXN0LmFkZCgnYm9yZGVyQ2hlY2snKTtcblxubGV0IGNvbmRpdGlvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbmNvbmRpdGlvbkljb24uY2xhc3NMaXN0LmFkZCgnY29uZGl0aW9uSWNvbicpO1xuY29uZGl0aW9uSWNvbi5jbGFzc0xpc3QuYWRkKCdib3JkZXJDaGVjaycpO1xuXG5cbmxldCBjb25kaXRpb25JbmZvSGVhZGluZyA9IGRpdm1ha2VyKCdjb25kaXRpb25JbmZvSGVhZGluZycpO1xuY29uZGl0aW9uSW5mb0hlYWRpbmcuY2xhc3NMaXN0LmFkZCgnYm9yZGVyQ2hlY2snKTtcbmxldCBsYXN0VXBkYXRlZCA9IGRpdm1ha2VyKCdsYXN0VXBkYXRlZCcpO1xubGFzdFVwZGF0ZWQuY2xhc3NMaXN0LmFkZCgnYm9yZGVyQ2hlY2snKTtcbmxldCB0ZW1wZXJhdHVyZVN3aXRjaEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xudGVtcGVyYXR1cmVTd2l0Y2hCdXR0b24uY2xhc3NMaXN0LmFkZCgndGVtcGVyYXR1cmVTd2l0Y2hCdXR0b24nKTtcbnRlbXBlcmF0dXJlU3dpdGNoQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2JvcmRlckNoZWNrJyk7XG50ZW1wZXJhdHVyZVN3aXRjaEJ1dHRvbi50ZXh0Q29udGVudCA9IGBTd2l0Y2ggVGVtcGVyYXR1cmUgVW5pdGBcblxuZGF0YVNlY3Rpb25Ub3AuYXBwZW5kQ2hpbGQobG9jYXRpb25IZWFkaW5nKTtcbmRhdGFTZWN0aW9uVG9wLmFwcGVuZENoaWxkKGN1cnJlbnRUZW1wZXJhdHVyZSk7XG5kYXRhU2VjdGlvblRvcC5hcHBlbmRDaGlsZChjb25kaXRpb25JY29uKTtcbmRhdGFTZWN0aW9uVG9wLmFwcGVuZENoaWxkKGNvbmRpdGlvbkluZm9IZWFkaW5nKTtcbmRhdGFTZWN0aW9uVG9wLmFwcGVuZENoaWxkKGxhc3RVcGRhdGVkKTtcbmRhdGFTZWN0aW9uVG9wLmFwcGVuZENoaWxkKHRlbXBlcmF0dXJlU3dpdGNoQnV0dG9uKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmxldCB1dkJveCA9IGRpdm1ha2VyKCd1dkJveCcpO1xudXZCb3guY2xhc3NMaXN0LmFkZCgnYm9yZGVyQ2hlY2snKTtcbmxldCBodW1pZGl0eUJveCA9IGRpdm1ha2VyKCdodW1pZGl0eUJveCcpO1xuaHVtaWRpdHlCb3guY2xhc3NMaXN0LmFkZCgnYm9yZGVyQ2hlY2snKTtcbmxldCB3aW5kQm94ID0gZGl2bWFrZXIoJ3dpbmRCb3gnKTtcbndpbmRCb3guY2xhc3NMaXN0LmFkZCgnYm9yZGVyQ2hlY2snKTtcbmxldCBjbG91ZEJveCA9IGRpdm1ha2VyKCdjbG91ZEJveCcpO1xuY2xvdWRCb3guY2xhc3NMaXN0LmFkZCgnYm9yZGVyQ2hlY2snKTtcblxuZGF0YVNlY3Rpb25Cb3R0b20uYXBwZW5kQ2hpbGQodXZCb3gpO1xuZGF0YVNlY3Rpb25Cb3R0b20uYXBwZW5kQ2hpbGQoaHVtaWRpdHlCb3gpO1xuZGF0YVNlY3Rpb25Cb3R0b20uYXBwZW5kQ2hpbGQod2luZEJveCk7XG5kYXRhU2VjdGlvbkJvdHRvbS5hcHBlbmRDaGlsZChjbG91ZEJveCk7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmxldCByZWZyZXNoQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5yZWZyZXNoQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3JlZnJlc2hCdXR0b24nKTtcbnJlZnJlc2hCdXR0b24udGV4dENvbnRlbnQgPSAnUmVmcmVzaCc7XG5cbmxldCByYW5kb21CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbnJhbmRvbUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdyYW5kb21CdXR0b24nKTtcbnJhbmRvbUJ1dHRvbi50ZXh0Q29udGVudCA9ICdSYW5kb20nO1xuXG5idXR0b25TZWN0aW9uLmFwcGVuZENoaWxkKHJlZnJlc2hCdXR0b24pO1xuYnV0dG9uU2VjdGlvbi5hcHBlbmRDaGlsZChyYW5kb21CdXR0b24pO1xuXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuXG5leHBvcnQge2Z1bGxQYWdlLCBtZW51QmFyLCBzZWFyY2hTZWN0aW9uLCBidXR0b25TZWN0aW9uLCBkYXRhU2VjdGlvbiwgZGF0YVNlY3Rpb25Ub3AsIGRhdGFTZWN0aW9uQm90dG9tLCBtYXBTZWN0aW9uLCBzZWFyY2hCYXIsIHNlYXJjaEJ1dHRvbiwgbG9jYXRpb25IZWFkaW5nLCBjdXJyZW50VGVtcGVyYXR1cmUsIGNvbmRpdGlvbkljb24sIGNvbmRpdGlvbkluZm9IZWFkaW5nLCBsYXN0VXBkYXRlZCwgdGVtcGVyYXR1cmVTd2l0Y2hCdXR0b24sIHV2Qm94LCBodW1pZGl0eUJveCwgd2luZEJveCwgY2xvdWRCb3gsIHJhbmRvbUJ1dHRvbiwgcmVmcmVzaEJ1dHRvbn1cblxuXG5cblxuXG5cblxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQge2FzeW5jV2VhdGhlcn0gZnJvbSAnLi9wcm9taXNlZGF0YS5qcyc7XG5pbXBvcnQge2Z1bGxQYWdlLCBtZW51QmFyLCBzZWFyY2hTZWN0aW9uLCBidXR0b25TZWN0aW9uLCBkYXRhU2VjdGlvbiwgZGF0YVNlY3Rpb25Ub3AsIGRhdGFTZWN0aW9uQm90dG9tLCBtYXBTZWN0aW9uLCBzZWFyY2hCYXIsIHNlYXJjaEJ1dHRvbiwgbG9jYXRpb25IZWFkaW5nLCBjdXJyZW50VGVtcGVyYXR1cmUsIGNvbmRpdGlvbkljb24sIGxhc3RVcGRhdGVkLCB0ZW1wZXJhdHVyZVN3aXRjaEJ1dHRvbiwgY29uZGl0aW9uSW5mb0hlYWRpbmcsIHV2Qm94LCBodW1pZGl0eUJveCwgd2luZEJveCwgY2xvdWRCb3gsIHJhbmRvbUJ1dHRvbiwgcmVmcmVzaEJ1dHRvbn0gZnJvbSAnLi9zdHJ1Y3R1cmUuanMnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5jb25zdCBjaXRpZXMgPSByZXF1aXJlKCdhbGwtdGhlLWNpdGllcycpO1xuXG5cbi8qXG5hc3luY1dlYXRoZXIoJ3NhbiBkaWVnbycpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcbn0pXG4qL1xuXG5sZXQgY3VycmVudFdlYXRoZXIgPSB7XG4gICAgXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL0dsb2JhbCBGdW5jdGlvbnNcblxubGV0IGxvYWRMYXN0U2VhcmNoVG9Eb20gPSBmdW5jdGlvbigpIHtcblxuICAgIGxldCBsYXN0V2VhdGhlckpzb24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudFdlYXRoZXInKTtcbiAgICBsZXQgbGFzdFdlYXRoZXIgPSBKU09OLnBhcnNlKGxhc3RXZWF0aGVySnNvbik7XG4gICAgY3VycmVudFdlYXRoZXIgPSBsYXN0V2VhdGhlcjtcbiAgICBhc3luY1dlYXRoZXIoY3VycmVudFdlYXRoZXIubmFtZSkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgY3VycmVudFdlYXRoZXIub2ZmaWNpYWxOYW1lID0gcmVzcG9uc2UubG9jYXRpb24ubmFtZTtcbiAgICAgICAgY3VycmVudFdlYXRoZXIucmVnaW9uID0gcmVzcG9uc2UubG9jYXRpb24ucmVnaW9uO1xuICAgICAgICBjdXJyZW50V2VhdGhlci5jb3VudHJ5ID0gcmVzcG9uc2UubG9jYXRpb24uY291bnRyeTtcbiAgICAgICAgY3VycmVudFdlYXRoZXIubGF0ID0gcmVzcG9uc2UubG9jYXRpb24ubGF0O1xuICAgICAgICBjdXJyZW50V2VhdGhlci5sb24gPSByZXNwb25zZS5sb2NhdGlvbi5sb247XG4gICAgICAgIGN1cnJlbnRXZWF0aGVyLnRlbXBGID0gcmVzcG9uc2UuY3VycmVudC50ZW1wX2Y7XG4gICAgICAgIGN1cnJlbnRXZWF0aGVyLnRlbXBDID0gcmVzcG9uc2UuY3VycmVudC50ZW1wX2M7XG4gICAgICAgIGN1cnJlbnRXZWF0aGVyLmNvbmRpdGlvblRleHQgPSByZXNwb25zZS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0O1xuICAgICAgICBjdXJyZW50V2VhdGhlci5jb25kaXRpb25JY29uID0gJ2h0dHBzOi8vJyArICgocmVzcG9uc2UuY3VycmVudC5jb25kaXRpb24uaWNvbikuc3BsaXQoJy8vJykpWzFdO1xuICAgICAgICBjdXJyZW50V2VhdGhlci5odW1pZGl0eSA9IHJlc3BvbnNlLmN1cnJlbnQuaHVtaWRpdHk7XG4gICAgICAgIGN1cnJlbnRXZWF0aGVyLndpbmQgPSByZXNwb25zZS5jdXJyZW50LndpbmRfbXBoO1xuICAgICAgICBjdXJyZW50V2VhdGhlci5jbG91ZCA9IHJlc3BvbnNlLmN1cnJlbnQuY2xvdWQ7XG4gICAgICAgIGN1cnJlbnRXZWF0aGVyLnV2ID0gcmVzcG9uc2UuY3VycmVudC51djtcbiAgICAgICAgY3VycmVudFdlYXRoZXIubGFzdFVwZGF0ZWQgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICAgIHJldHVybiBjdXJyZW50V2VhdGhlclxuXG4gICAgfSkudGhlbihmdW5jdGlvbihjdXJyZW50V2VhdGhlcikge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGBKdXN0IENoZWNraW5nYCk7XG4gICAgICAgIGRpc3BsYXlDdXJyZW50V2VhdGhlclRvRG9tKCk7XG4gICAgICAgIHNhdmVMYXN0U2VhcmNoZWQoKTtcblxuICAgICAgICAvKlxuXG4gICAgICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gY3VycmVudFdlYXRoZXIgICkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudFdlYXRoZXJbcHJvcGVydHldKTtcbiAgICAgICAgfVxuICAgICAgICAqL1xuICAgICAgICAvL3JldHVybiBjdXJyZW50V2VhdGhlclxuXG4gICAgfSlcblxuICAgIFxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRXZWF0aGVyKTtcbiAgICByZXR1cm4gY3VycmVudFdlYXRoZXI7XG5cblxuXG5cbn1cblxuXG5sZXQgZGlzcGxheUN1cnJlbnRXZWF0aGVyVG9Eb20gPSBmdW5jdGlvbigpIHtcblxuICAgIGxvY2F0aW9uSGVhZGluZy50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRXZWF0aGVyLm9mZmljaWFsTmFtZX0sICR7Y3VycmVudFdlYXRoZXIucmVnaW9ufSwgJHtjdXJyZW50V2VhdGhlci5jb3VudHJ5fWA7XG4gICAgY3VycmVudFRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFdlYXRoZXIudGVtcEZ9IGRlZ3JlZXMgRmA7XG5cbiAgICBjb25kaXRpb25JY29uLnNyYyA9IGAke2N1cnJlbnRXZWF0aGVyLmNvbmRpdGlvbkljb259YDtcbiAgICBjb25kaXRpb25JbmZvSGVhZGluZy50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRXZWF0aGVyLmNvbmRpdGlvblRleHR9IGluICR7Y3VycmVudFdlYXRoZXIub2ZmaWNpYWxOYW1lfWA7XG5cbiAgICBsYXN0VXBkYXRlZC50ZXh0Q29udGVudCA9IGBMYXN0IFVwZGF0ZWQgb24gJHtjdXJyZW50V2VhdGhlci5sYXN0VXBkYXRlZH1gO1xuXG4gICAgdXZCb3gudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50V2VhdGhlci51dn1gO1xuICAgIGh1bWlkaXR5Qm94LnRleHRDb250ZW50ID0gYCR7Y3VycmVudFdlYXRoZXIuaHVtaWRpdHl9YDtcbiAgICB3aW5kQm94LnRleHRDb250ZW50ID0gYCR7Y3VycmVudFdlYXRoZXIud2luZH1gO1xuICAgIGNsb3VkQm94LnRleHRDb250ZW50ID0gYCR7Y3VycmVudFdlYXRoZXIuY2xvdWR9YDtcblxuXG5cblxufVxuXG5sZXQgc2F2ZUxhc3RTZWFyY2hlZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgbGV0IGN1cnJlbnRXZWF0aGVySnNvbiA9IEpTT04uc3RyaW5naWZ5KGN1cnJlbnRXZWF0aGVyKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVudFdlYXRoZXInLCBjdXJyZW50V2VhdGhlckpzb24pO1xuXG5cbn1cblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmdWxsUGFnZSk7XG5cblxuaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50V2VhdGhlcicpKSB7XG4gICAgbG9hZExhc3RTZWFyY2hUb0RvbSgpO1xuXG59XG5cbnNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXG4gICAgY3VycmVudFdlYXRoZXIubmFtZSA9IHNlYXJjaEJhci52YWx1ZTtcbiAgICBhc3luY1dlYXRoZXIoY3VycmVudFdlYXRoZXIubmFtZSkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgY3VycmVudFdlYXRoZXIub2ZmaWNpYWxOYW1lID0gcmVzcG9uc2UubG9jYXRpb24ubmFtZTtcbiAgICAgICAgY3VycmVudFdlYXRoZXIucmVnaW9uID0gcmVzcG9uc2UubG9jYXRpb24ucmVnaW9uO1xuICAgICAgICBjdXJyZW50V2VhdGhlci5jb3VudHJ5ID0gcmVzcG9uc2UubG9jYXRpb24uY291bnRyeTtcbiAgICAgICAgY3VycmVudFdlYXRoZXIubGF0ID0gcmVzcG9uc2UubG9jYXRpb24ubGF0O1xuICAgICAgICBjdXJyZW50V2VhdGhlci5sb24gPSByZXNwb25zZS5sb2NhdGlvbi5sb247XG4gICAgICAgIGN1cnJlbnRXZWF0aGVyLnRlbXBGID0gcmVzcG9uc2UuY3VycmVudC50ZW1wX2Y7XG4gICAgICAgIGN1cnJlbnRXZWF0aGVyLnRlbXBDID0gcmVzcG9uc2UuY3VycmVudC50ZW1wX2M7XG4gICAgICAgIGN1cnJlbnRXZWF0aGVyLmNvbmRpdGlvblRleHQgPSByZXNwb25zZS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0O1xuICAgICAgICBjdXJyZW50V2VhdGhlci5jb25kaXRpb25JY29uID0gJ2h0dHBzOi8vJyArICgocmVzcG9uc2UuY3VycmVudC5jb25kaXRpb24uaWNvbikuc3BsaXQoJy8vJykpWzFdO1xuICAgICAgICBjdXJyZW50V2VhdGhlci5odW1pZGl0eSA9IHJlc3BvbnNlLmN1cnJlbnQuaHVtaWRpdHk7XG4gICAgICAgIGN1cnJlbnRXZWF0aGVyLndpbmQgPSByZXNwb25zZS5jdXJyZW50LndpbmRfbXBoO1xuICAgICAgICBjdXJyZW50V2VhdGhlci5jbG91ZCA9IHJlc3BvbnNlLmN1cnJlbnQuY2xvdWQ7XG4gICAgICAgIGN1cnJlbnRXZWF0aGVyLnV2ID0gcmVzcG9uc2UuY3VycmVudC51djtcbiAgICAgICAgY3VycmVudFdlYXRoZXIubGFzdFVwZGF0ZWQgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICAgIHJldHVybiBjdXJyZW50V2VhdGhlclxuXG4gICAgfSkudGhlbihmdW5jdGlvbihjdXJyZW50V2VhdGhlcikge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGBKdXN0IENoZWNraW5nYCk7XG4gICAgICAgIGRpc3BsYXlDdXJyZW50V2VhdGhlclRvRG9tKCk7XG4gICAgICAgIHNhdmVMYXN0U2VhcmNoZWQoKTtcblxuICAgICAgICAvKlxuXG4gICAgICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gY3VycmVudFdlYXRoZXIgICkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudFdlYXRoZXJbcHJvcGVydHldKTtcbiAgICAgICAgfVxuICAgICAgICAqL1xuICAgICAgICBcbiAgICAgICAgLy9yZXR1cm4gY3VycmVudFdlYXRoZXJcblxuICAgIH0pXG5cbiAgICBcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50V2VhdGhlcik7XG4gICAgcmV0dXJuIGN1cnJlbnRXZWF0aGVyO1xuXG4gICAgLy9kaXNwbGF5Q3VycmVudFdlYXRoZXJUb0RvbSgpO1xuXG59KVxuXG50ZW1wZXJhdHVyZVN3aXRjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXG4gICAgaWYgKGN1cnJlbnRUZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9PT0gYCR7Y3VycmVudFdlYXRoZXIudGVtcEZ9IGRlZ3JlZXMgRmApIHtcblxuICAgICAgICBjdXJyZW50VGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50V2VhdGhlci50ZW1wQ30gZGVncmVlcyBDYDtcblxuICAgIH0gICBlbHNlIGlmIChjdXJyZW50VGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPT09IGAke2N1cnJlbnRXZWF0aGVyLnRlbXBDfSBkZWdyZWVzIENgKSB7XG5cbiAgICAgICAgY3VycmVudFRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFdlYXRoZXIudGVtcEZ9IGRlZ3JlZXMgRmBcblxuICAgIH1cblxufSlcblxucmVmcmVzaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXG4gICAgYXN5bmNXZWF0aGVyKGN1cnJlbnRXZWF0aGVyLm5hbWUpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgIGN1cnJlbnRXZWF0aGVyLm9mZmljaWFsTmFtZSA9IHJlc3BvbnNlLmxvY2F0aW9uLm5hbWU7XG4gICAgICAgIGN1cnJlbnRXZWF0aGVyLnJlZ2lvbiA9IHJlc3BvbnNlLmxvY2F0aW9uLnJlZ2lvbjtcbiAgICAgICAgY3VycmVudFdlYXRoZXIuY291bnRyeSA9IHJlc3BvbnNlLmxvY2F0aW9uLmNvdW50cnk7XG4gICAgICAgIGN1cnJlbnRXZWF0aGVyLmxhdCA9IHJlc3BvbnNlLmxvY2F0aW9uLmxhdDtcbiAgICAgICAgY3VycmVudFdlYXRoZXIubG9uID0gcmVzcG9uc2UubG9jYXRpb24ubG9uO1xuICAgICAgICBjdXJyZW50V2VhdGhlci50ZW1wRiA9IHJlc3BvbnNlLmN1cnJlbnQudGVtcF9mO1xuICAgICAgICBjdXJyZW50V2VhdGhlci50ZW1wQyA9IHJlc3BvbnNlLmN1cnJlbnQudGVtcF9jO1xuICAgICAgICBjdXJyZW50V2VhdGhlci5jb25kaXRpb25UZXh0ID0gcmVzcG9uc2UuY3VycmVudC5jb25kaXRpb24udGV4dDtcbiAgICAgICAgY3VycmVudFdlYXRoZXIuY29uZGl0aW9uSWNvbiA9ICdodHRwczovLycgKyAoKHJlc3BvbnNlLmN1cnJlbnQuY29uZGl0aW9uLmljb24pLnNwbGl0KCcvLycpKVsxXTtcbiAgICAgICAgY3VycmVudFdlYXRoZXIuaHVtaWRpdHkgPSByZXNwb25zZS5jdXJyZW50Lmh1bWlkaXR5O1xuICAgICAgICBjdXJyZW50V2VhdGhlci53aW5kID0gcmVzcG9uc2UuY3VycmVudC53aW5kX21waDtcbiAgICAgICAgY3VycmVudFdlYXRoZXIuY2xvdWQgPSByZXNwb25zZS5jdXJyZW50LmNsb3VkO1xuICAgICAgICBjdXJyZW50V2VhdGhlci51diA9IHJlc3BvbnNlLmN1cnJlbnQudXY7XG4gICAgICAgIGN1cnJlbnRXZWF0aGVyLmxhc3RVcGRhdGVkID0gbmV3IERhdGUoKTtcblxuICAgICAgICByZXR1cm4gY3VycmVudFdlYXRoZXJcblxuICAgIH0pLnRoZW4oZnVuY3Rpb24oY3VycmVudFdlYXRoZXIpIHtcblxuICAgICAgICBjb25zb2xlLmxvZyhgSnVzdCBDaGVja2luZ2ApO1xuICAgICAgICBkaXNwbGF5Q3VycmVudFdlYXRoZXJUb0RvbSgpO1xuICAgICAgICBzYXZlTGFzdFNlYXJjaGVkKCk7XG5cbiAgICAgICAgLypcblxuICAgICAgICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIGN1cnJlbnRXZWF0aGVyICApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRXZWF0aGVyW3Byb3BlcnR5XSk7XG4gICAgICAgIH1cbiAgICAgICAgKi9cbiAgICAgICAgXG4gICAgICAgIC8vcmV0dXJuIGN1cnJlbnRXZWF0aGVyXG5cbiAgICB9KVxuXG4gICAgXG4gICAgY29uc29sZS5sb2coY3VycmVudFdlYXRoZXIpO1xuICAgIHJldHVybiBjdXJyZW50V2VhdGhlcjtcblxuICAgIC8vZGlzcGxheUN1cnJlbnRXZWF0aGVyVG9Eb20oKTtcblxuXG5cbn0pXG5cbnJhbmRvbUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXG4gICAgZnVuY3Rpb24gZ2V0UmFuZG9tSW50SW5jbHVzaXZlKG1pbiwgbWF4KSB7XG4gICAgICAgIG1pbiA9IE1hdGguY2VpbChtaW4pO1xuICAgICAgICBtYXggPSBNYXRoLmZsb29yKG1heCk7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pOyAvLyBUaGUgbWF4aW11bSBpcyBpbmNsdXNpdmUgYW5kIHRoZSBtaW5pbXVtIGlzIGluY2x1c2l2ZVxuICAgIH1cblxuICAgIGxldCByYW5kb21OdW1iZXIgPSBnZXRSYW5kb21JbnRJbmNsdXNpdmUoMCwgMTM4Mzk4KTtcblxuICAgIGN1cnJlbnRXZWF0aGVyLm5hbWUgPSBjaXRpZXNbcmFuZG9tTnVtYmVyXS5uYW1lO1xuXG4gICAgYXN5bmNXZWF0aGVyKGN1cnJlbnRXZWF0aGVyLm5hbWUpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgIGN1cnJlbnRXZWF0aGVyLm9mZmljaWFsTmFtZSA9IHJlc3BvbnNlLmxvY2F0aW9uLm5hbWU7XG4gICAgICAgIGN1cnJlbnRXZWF0aGVyLnJlZ2lvbiA9IHJlc3BvbnNlLmxvY2F0aW9uLnJlZ2lvbjtcbiAgICAgICAgY3VycmVudFdlYXRoZXIuY291bnRyeSA9IHJlc3BvbnNlLmxvY2F0aW9uLmNvdW50cnk7XG4gICAgICAgIGN1cnJlbnRXZWF0aGVyLmxhdCA9IHJlc3BvbnNlLmxvY2F0aW9uLmxhdDtcbiAgICAgICAgY3VycmVudFdlYXRoZXIubG9uID0gcmVzcG9uc2UubG9jYXRpb24ubG9uO1xuICAgICAgICBjdXJyZW50V2VhdGhlci50ZW1wRiA9IHJlc3BvbnNlLmN1cnJlbnQudGVtcF9mO1xuICAgICAgICBjdXJyZW50V2VhdGhlci50ZW1wQyA9IHJlc3BvbnNlLmN1cnJlbnQudGVtcF9jO1xuICAgICAgICBjdXJyZW50V2VhdGhlci5jb25kaXRpb25UZXh0ID0gcmVzcG9uc2UuY3VycmVudC5jb25kaXRpb24udGV4dDtcbiAgICAgICAgY3VycmVudFdlYXRoZXIuY29uZGl0aW9uSWNvbiA9ICdodHRwczovLycgKyAoKHJlc3BvbnNlLmN1cnJlbnQuY29uZGl0aW9uLmljb24pLnNwbGl0KCcvLycpKVsxXTtcbiAgICAgICAgY3VycmVudFdlYXRoZXIuaHVtaWRpdHkgPSByZXNwb25zZS5jdXJyZW50Lmh1bWlkaXR5O1xuICAgICAgICBjdXJyZW50V2VhdGhlci53aW5kID0gcmVzcG9uc2UuY3VycmVudC53aW5kX21waDtcbiAgICAgICAgY3VycmVudFdlYXRoZXIuY2xvdWQgPSByZXNwb25zZS5jdXJyZW50LmNsb3VkO1xuICAgICAgICBjdXJyZW50V2VhdGhlci51diA9IHJlc3BvbnNlLmN1cnJlbnQudXY7XG4gICAgICAgIGN1cnJlbnRXZWF0aGVyLmxhc3RVcGRhdGVkID0gbmV3IERhdGUoKTtcblxuICAgICAgICByZXR1cm4gY3VycmVudFdlYXRoZXJcblxuICAgIH0pLnRoZW4oZnVuY3Rpb24oY3VycmVudFdlYXRoZXIpIHtcblxuICAgICAgICBjb25zb2xlLmxvZyhgSnVzdCBDaGVja2luZ2ApO1xuICAgICAgICBkaXNwbGF5Q3VycmVudFdlYXRoZXJUb0RvbSgpO1xuICAgICAgICBzYXZlTGFzdFNlYXJjaGVkKCk7XG5cbiAgICAgICAgLypcblxuICAgICAgICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIGN1cnJlbnRXZWF0aGVyICApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRXZWF0aGVyW3Byb3BlcnR5XSk7XG4gICAgICAgIH1cbiAgICAgICAgKi9cbiAgICAgICAgXG4gICAgICAgIC8vcmV0dXJuIGN1cnJlbnRXZWF0aGVyXG5cbiAgICB9KVxuXG4gICAgXG4gICAgY29uc29sZS5sb2coY3VycmVudFdlYXRoZXIpO1xuICAgIHJldHVybiBjdXJyZW50V2VhdGhlcjtcblxuICAgIC8vZGlzcGxheUN1cnJlbnRXZWF0aGVyVG9Eb20oKTtcblxuXG5cbn0pXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9