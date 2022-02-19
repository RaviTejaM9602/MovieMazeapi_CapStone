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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\r\n*::after,\r\n*::before {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: 'Roboto', sans-serif;\r\n  font-size: 16px;\r\n}\r\n\r\n.nav-bar {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  height: 100px;\r\n  background-color: black;\r\n}\r\n\r\nli {\r\n  margin-bottom: 30px;\r\n  padding: 20px;\r\n  width: 270px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nh1 {\r\n  position: relative;\r\n  color: white;\r\n  letter-spacing: 0.05em;\r\n  left: 20px;\r\n  top: 5px;\r\n}\r\n\r\nh1::before {\r\n  content: \"MovieMaze\";\r\n  position: absolute;\r\n  display: inline;\r\n  top: 0;\r\n  left: 0;\r\n  color: #2ed573;\r\n  border-right: 4px solid #2ed573;\r\n  -webkit-animation: slide 2s linear infinite;\r\n  overflow: hidden;\r\n}\r\n\r\n@keyframes slide {\r\n  0% {\r\n    width: 0%;\r\n  }\r\n\r\n  50% {\r\n    width: 100%;\r\n  }\r\n\r\n  100% {\r\n    width: 0%;\r\n  }\r\n}\r\n\r\n.head-list {\r\n  display: flex;\r\n  margin: 5px;\r\n  padding: 0;\r\n  align-items: baseline;\r\n  justify-content: center;\r\n}\r\n\r\n.head-list li {\r\n  padding: 20px;\r\n  margin: 20px;\r\n  color: antiquewhite;\r\n  font-weight: 600;\r\n}\r\n\r\nh3 {\r\n  display: inline-block;\r\n}\r\n\r\n/* Comment popup */\r\n\r\n.comment-popup {\r\n  position: fixed;\r\n  z-index: 1;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  transition: 200ms ease-in-out;\r\n  width: 70%;\r\n  height: 90%;\r\n  overflow: auto;\r\n  margin: auto;\r\n  background-color: rgba(74, 73, 108, 0.7);\r\n  display: none;\r\n}\r\n\r\n.popup {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 5px;\r\n  padding: 20px;\r\n  background: rgb(128, 155, 174);\r\n  border-radius: 10px;\r\n}\r\n\r\n.fa {\r\n  font-size: 2em;\r\n}\r\n\r\n#close {\r\n  cursor: pointer;\r\n  border: none;\r\n  outline: none;\r\n  background: none;\r\n  font-size: 1.5rem;\r\n  font-weight: bold;\r\n  float: right;\r\n  align-self: flex-end;\r\n}\r\n\r\n.popUp-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 10px;\r\n  justify-content: space-between;\r\n}\r\n\r\n.display {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 5px;\r\n  width: 40%;\r\n  padding: 5px;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  gap: 5px;\r\n}\r\n\r\n.comment-container {\r\n  width: 50%;\r\n}\r\n\r\n.comment-box {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n  margin: 10px;\r\n}\r\n\r\n.form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n  width: 85%;\r\n}\r\n\r\ninput,\r\ntextarea {\r\n  padding: 8px;\r\n}\r\n\r\n.submit-btn {\r\n  width: auto;\r\n  font-size: 16px;\r\n  letter-spacing: 2px;\r\n  font-weight: 400 !important;\r\n  background-color: rgb(182, 68, 119);\r\n  color: #fff;\r\n  padding: 10px;\r\n  border: none;\r\n}\r\n\r\n.comments-box {\r\n  list-style: none;\r\n  margin: 5px 0;\r\n  padding: 0;\r\n}\r\n\r\n.comments-list {\r\n  list-style: none;\r\n  background: whitesmoke;\r\n  width: 100%;\r\n}\r\n\r\n.display-detail {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: flex-start;\r\n}\r\n\r\n.popup-list {\r\n  padding: 0;\r\n}\r\n\r\n.popup-list p::first-letter {\r\n  font-size: 3rem;\r\n  float: left;\r\n  margin-right: 10px;\r\n}\r\n\r\n.popup-list li {\r\n  list-style: none;\r\n  background: whitesmoke;\r\n}\r\n\r\n/* End of comment popup */\r\n\r\n#movies {\r\n  list-style: none;\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.likes {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  gap: 0.5rem;\r\n  align-items: baseline;\r\n}\r\n\r\n.mov-detail {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: baseline;\r\n}\r\n\r\n.comment-btn {\r\n  color: #151b29;\r\n  border: 2px solid;\r\n  padding: 1em 2em;\r\n  font-size: 1em;\r\n  transition: all 0.15s;\r\n  cursor: pointer;\r\n}\r\n\r\n.comment-btn:hover {\r\n  border-color: #151b29;\r\n  color: rgb(94, 10, 10);\r\n  box-shadow: 0 0.5em 0.5em -0.4em #151b29;\r\n  transform: translateY(-0.25em);\r\n}\r\n\r\n/* Footer Styling */\r\n\r\n.container-footer {\r\n  display: flex;\r\n  justify-content: center;\r\n  background-color: #151b29;\r\n  color: #fff;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\r\n\r\n*,\r\n*::after,\r\n*::before {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: 'Roboto', sans-serif;\r\n  font-size: 16px;\r\n}\r\n\r\n.nav-bar {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  height: 100px;\r\n  background-color: black;\r\n}\r\n\r\nli {\r\n  margin-bottom: 30px;\r\n  padding: 20px;\r\n  width: 270px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nh1 {\r\n  position: relative;\r\n  color: white;\r\n  letter-spacing: 0.05em;\r\n  left: 20px;\r\n  top: 5px;\r\n}\r\n\r\nh1::before {\r\n  content: \"MovieMaze\";\r\n  position: absolute;\r\n  display: inline;\r\n  top: 0;\r\n  left: 0;\r\n  color: #2ed573;\r\n  border-right: 4px solid #2ed573;\r\n  -webkit-animation: slide 2s linear infinite;\r\n  overflow: hidden;\r\n}\r\n\r\n@keyframes slide {\r\n  0% {\r\n    width: 0%;\r\n  }\r\n\r\n  50% {\r\n    width: 100%;\r\n  }\r\n\r\n  100% {\r\n    width: 0%;\r\n  }\r\n}\r\n\r\n.head-list {\r\n  display: flex;\r\n  margin: 5px;\r\n  padding: 0;\r\n  align-items: baseline;\r\n  justify-content: center;\r\n}\r\n\r\n.head-list li {\r\n  padding: 20px;\r\n  margin: 20px;\r\n  color: antiquewhite;\r\n  font-weight: 600;\r\n}\r\n\r\nh3 {\r\n  display: inline-block;\r\n}\r\n\r\n/* Comment popup */\r\n\r\n.comment-popup {\r\n  position: fixed;\r\n  z-index: 1;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  transition: 200ms ease-in-out;\r\n  width: 70%;\r\n  height: 90%;\r\n  overflow: auto;\r\n  margin: auto;\r\n  background-color: rgba(74, 73, 108, 0.7);\r\n  display: none;\r\n}\r\n\r\n.popup {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 5px;\r\n  padding: 20px;\r\n  background: rgb(128, 155, 174);\r\n  border-radius: 10px;\r\n}\r\n\r\n.fa {\r\n  font-size: 2em;\r\n}\r\n\r\n#close {\r\n  cursor: pointer;\r\n  border: none;\r\n  outline: none;\r\n  background: none;\r\n  font-size: 1.5rem;\r\n  font-weight: bold;\r\n  float: right;\r\n  align-self: flex-end;\r\n}\r\n\r\n.popUp-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 10px;\r\n  justify-content: space-between;\r\n}\r\n\r\n.display {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 5px;\r\n  width: 40%;\r\n  padding: 5px;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  gap: 5px;\r\n}\r\n\r\n.comment-container {\r\n  width: 50%;\r\n}\r\n\r\n.comment-box {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n  margin: 10px;\r\n}\r\n\r\n.form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n  width: 85%;\r\n}\r\n\r\ninput,\r\ntextarea {\r\n  padding: 8px;\r\n}\r\n\r\n.submit-btn {\r\n  width: auto;\r\n  font-size: 16px;\r\n  letter-spacing: 2px;\r\n  font-weight: 400 !important;\r\n  background-color: rgb(182, 68, 119);\r\n  color: #fff;\r\n  padding: 10px;\r\n  border: none;\r\n}\r\n\r\n.comments-box {\r\n  list-style: none;\r\n  margin: 5px 0;\r\n  padding: 0;\r\n}\r\n\r\n.comments-list {\r\n  list-style: none;\r\n  background: whitesmoke;\r\n  width: 100%;\r\n}\r\n\r\n.display-detail {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: flex-start;\r\n}\r\n\r\n.popup-list {\r\n  padding: 0;\r\n}\r\n\r\n.popup-list p::first-letter {\r\n  font-size: 3rem;\r\n  float: left;\r\n  margin-right: 10px;\r\n}\r\n\r\n.popup-list li {\r\n  list-style: none;\r\n  background: whitesmoke;\r\n}\r\n\r\n/* End of comment popup */\r\n\r\n#movies {\r\n  list-style: none;\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.likes {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  gap: 0.5rem;\r\n  align-items: baseline;\r\n}\r\n\r\n.mov-detail {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: baseline;\r\n}\r\n\r\n.comment-btn {\r\n  color: #151b29;\r\n  border: 2px solid;\r\n  padding: 1em 2em;\r\n  font-size: 1em;\r\n  transition: all 0.15s;\r\n  cursor: pointer;\r\n}\r\n\r\n.comment-btn:hover {\r\n  border-color: #151b29;\r\n  color: rgb(94, 10, 10);\r\n  box-shadow: 0 0.5em 0.5em -0.4em #151b29;\r\n  transform: translateY(-0.25em);\r\n}\r\n\r\n/* Footer Styling */\r\n\r\n.container-footer {\r\n  display: flex;\r\n  justify-content: center;\r\n  background-color: #151b29;\r\n  color: #fff;\r\n}\r\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/modules/likes.js":
/*!******************************!*\
  !*** ./src/modules/likes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "requestURL": () => (/* binding */ requestURL),
/* harmony export */   "addLikes": () => (/* binding */ addLikes),
/* harmony export */   "getLikes": () => (/* binding */ getLikes),
/* harmony export */   "fetchLikes": () => (/* binding */ fetchLikes)
/* harmony export */ });
const requestURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/qdmdFHstOSTgqs8wmesu/likes/';

const addLikes = async (id) => {
  const response = await fetch(requestURL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  });
  return response;
};

const getLikes = async () => {
  const res = await fetch(requestURL);
  const storedLikes = await res.json();

  return storedLikes;
};

async function fetchLikes(id) {
  const storedLikes = await getLikes();
  storedLikes.forEach((likes) => {
    if (parseInt(likes.item_id, 10) === id) {
      const tmp = document.querySelector(`#likes_${id}`);
      tmp.innerHTML = likes.likes;
    }
  });
}


/***/ }),

/***/ "./src/modules/popUp.js":
/*!******************************!*\
  !*** ./src/modules/popUp.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showCommentPopup": () => (/* binding */ showCommentPopup),
/* harmony export */   "commentCounter": () => (/* binding */ commentCounter)
/* harmony export */ });
const commentPopup = document.querySelector('.comment-popup');
const commentCounter = (data) => (typeof (data) === 'object' ? data.length : 'invalid');

const commentsApiKey = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/qdmdFHstOSTgqs8wmesu/comments';
const getMovieComment = async (movieId) => {
  const response = await fetch(`${commentsApiKey}?item_id=${movieId}`);
  return response.json();
};

const getTotalComments = async (movieId) => {
  const result = await getMovieComment(movieId)
    .then((comment) => (!comment.error ? comment.length : 0))
    .catch(() => 0);
  return result;
};

const updateCommentCounter = (movieId) => {
  getTotalComments(movieId).then((totalComment) => {
    commentPopup.querySelector('.total-comments').innerHTML = totalComment;
  });
};

const commentApiEndpoint = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/qdmdFHstOSTgqs8wmesu/comments';
const movieApi = 'https://api.tvmaze.com/shows';

const get = (url) => fetch(url)
  .then((res) => res.json())
  .then((data) => data)
  .catch((error) => error);

const post = (url, params = {}) => fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(params),
}).then((res) => res.text())
  .then((data) => (data.error
    ? { error: true, info: data }
    : { error: false, info: data }))
  .catch((error) => ({ error: true, info: error }));

const addComment = async (params) => {
  const response = await post(commentApiEndpoint, params);
  return response;
};

const getMovieData = async (movieId) => {
  const response = await get(`${movieApi}/${movieId}`);
  return response;
};

const displayMovieComments = (data) => {
  commentPopup.querySelector('.comments-box').innerHTML = data;
};

const showComments = (movieId) => {
  getMovieComment(movieId).then((data) => {
    if (!data.error) {
      let comments = '';
      data.forEach((comment) => {
        comments += `<li class="comments-list">${comment.creation_date} <span> ${comment.username}:</span>  ${comment.comment}</li>`;
      });
      displayMovieComments(comments);
    } else {
      displayMovieComments('No comment posted yet.');
    }
  });
};

const closeCommentPopup = () => {
  document.querySelector('#close').addEventListener('click', () => {
    commentPopup.style.display = 'none';
    commentPopup.innerHTML = '';
    document.body.style.overflow = 'visible';
  });
};

const showCommentPopup = async (movieId) => {
  await getMovieData(movieId).then((data) => {
    commentPopup.innerHTML = `<div class="popup">
    <button id="close">&times;</button>
    <div class="popUp-container">
      <div class="container">
        <div class="display"> 
           <div class="description">
            <img class="popup-image" src=${data.image.medium} alt="Movie image">
            <h3 class="movie-title">${data.name}</h3>
           </div>
          <div class="display-detail">
            <h3>More about the Movie</h3>
            <ul class="popup-list">
             <li>${data.summary}</li> 
             <li><strong>Date of Release:</strong> ${data.premiered}</li>
             <li><strong>Genres:</strong>${data.genres}</li>               
            </ul>  
           </div>
      </div>
    </div>
    <div class="comment-container">
         <div class="comment-display">
            <h3 class='counter'>Comments(<span class="total-comments">0</span>)</h3>
            <ul class="comments-box">
            </ul>
          </div>
      <div class="comment-box">
          <div class="add-comment">
             <h3>Add Comment</h3>
          </div>
        <form class="form">
          <input type="text" name="name" id="name" placeholder="Your name" required>
          <textarea name="description" id="description" cols="30" rows="10"
              placeholder="Your insight" required></textarea>
          <button id=${movieId} type="submit" class="submit-btn">Comment</button>
        </form>
      </div>
    </div>
   </div>
  </div>`;

    updateCommentCounter(movieId);
    showComments(movieId);

    const form = commentPopup.querySelector('.form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const user = form.elements.name.value;
      const description = form.elements.description.value;
      addComment({
        item_id: movieId,
        username: user,
        comment: description,
      }).then(() => {
        showComments(movieId);
        updateCommentCounter(movieId);
        form.reset();
      });
    });
  });
  commentPopup.style.display = 'block';
  closeCommentPopup();
};

document.addEventListener('click', async (e) => {
  if (e.target.matches('.comment-btn')) {
    showCommentPopup(e.target.id);
  }
});



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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_popUp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/popUp.js */ "./src/modules/popUp.js");
/* harmony import */ var _modules_likes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/likes.js */ "./src/modules/likes.js");




const List = document.querySelector('#movies');

function createMovieCard(movie) {
  List.innerHTML += `<li class="movie">
<img class="mov-post" src=${movie.image.medium}>
<div class="mov-detail">
<p class="mov-name">${movie.name}</p>
<div class="likes">
<h4 class="total-likes" id="likes_${movie.id}">0</h4>
<i id=${movie.id} class="fas fa-heart"></i>
</div>
</div>
<button type="button" id=${movie.id} class="comment-btn">Comments</button>
</li>`;
}
const getMovie = async (id) => {
  try {
    const url = `https://api.tvmaze.com/shows/${id}`;
    const res = await fetch(url);
    const movie = await res.json();
    createMovieCard(movie);
  } catch (error) {
    console.log('error', error);
  }
};

const moviesNo = 10;
const fetchMovies = () => {
  for (let i = 1; i <= moviesNo; i += 1) {
    getMovie(i);
    (0,_modules_likes_js__WEBPACK_IMPORTED_MODULE_2__.fetchLikes)(i);
  }
};
fetchMovies();

document.addEventListener('click', (e) => {
  if (e.target.matches('.comment-btn')) {
    (0,_modules_popUp_js__WEBPACK_IMPORTED_MODULE_1__.showCommentPopup)(e.target.id);
  } else if (e.target.tagName === 'I') {
    (0,_modules_likes_js__WEBPACK_IMPORTED_MODULE_2__.addLikes)(e.target.id);
    const likesNo = e.target.parentNode.querySelector('.total-likes');
    const newValue = +likesNo.innerHTML + 1;
    likesNo.innerHTML = newValue;
  }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFlO0FBQ2pDO0FBQ0EsSUFBSSw2REFBVTtBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxtRUFBZ0I7QUFDcEIsSUFBSTtBQUNKLElBQUksMkRBQVE7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jcmVhdGUtd2VicGFjay8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYnBhY2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2NyZWF0ZS13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYnBhY2svLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2NyZWF0ZS13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2NyZWF0ZS13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2NyZWF0ZS13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9jcmVhdGUtd2VicGFjay8uL3NyYy9tb2R1bGVzL2xpa2VzLmpzIiwid2VicGFjazovL2NyZWF0ZS13ZWJwYWNrLy4vc3JjL21vZHVsZXMvcG9wVXAuanMiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYnBhY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYnBhY2svd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYnBhY2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NyZWF0ZS13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYnBhY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jcmVhdGUtd2VicGFjay8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcclxcbio6OmFmdGVyLFxcclxcbio6OmJlZm9yZSB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1iYXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogMTAwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxubGkge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICB3aWR0aDogMjcwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXHJcXG4gIGxlZnQ6IDIwcHg7XFxyXFxuICB0b3A6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuaDE6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiTW92aWVNYXplXFxcIjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGRpc3BsYXk6IGlubGluZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBjb2xvcjogIzJlZDU3MztcXHJcXG4gIGJvcmRlci1yaWdodDogNHB4IHNvbGlkICMyZWQ1NzM7XFxyXFxuICAtd2Via2l0LWFuaW1hdGlvbjogc2xpZGUgMnMgbGluZWFyIGluZmluaXRlO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzbGlkZSB7XFxyXFxuICAwJSB7XFxyXFxuICAgIHdpZHRoOiAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDUwJSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHdpZHRoOiAwJTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmhlYWQtbGlzdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbWFyZ2luOiA1cHg7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5oZWFkLWxpc3QgbGkge1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIG1hcmdpbjogMjBweDtcXHJcXG4gIGNvbG9yOiBhbnRpcXVld2hpdGU7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG5oMyB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi8qIENvbW1lbnQgcG9wdXAgKi9cXHJcXG5cXHJcXG4uY29tbWVudC1wb3B1cCB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcclxcbiAgd2lkdGg6IDcwJTtcXHJcXG4gIGhlaWdodDogOTAlO1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc0LCA3MywgMTA4LCAwLjcpO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiA1cHg7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgYmFja2dyb3VuZDogcmdiKDEyOCwgMTU1LCAxNzQpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZhIHtcXHJcXG4gIGZvbnQtc2l6ZTogMmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jY2xvc2Uge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbi5wb3BVcC1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5kaXNwbGF5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiA1cHg7XFxyXFxuICB3aWR0aDogNDAlO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBnYXA6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWJveCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG4gIG1hcmdpbjogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxuICB3aWR0aDogODUlO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCxcXHJcXG50ZXh0YXJlYSB7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5zdWJtaXQtYnRuIHtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxODIsIDY4LCAxMTkpO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudHMtYm94IHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBtYXJnaW46IDVweCAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzLWxpc3Qge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc3BsYXktZGV0YWlsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWxpc3Qge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWxpc3QgcDo6Zmlyc3QtbGV0dGVyIHtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gIGZsb2F0OiBsZWZ0O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtbGlzdCBsaSB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogRW5kIG9mIGNvbW1lbnQgcG9wdXAgKi9cXHJcXG5cXHJcXG4jbW92aWVzIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxufVxcclxcblxcclxcbi5saWtlcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92LWRldGFpbCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1idG4ge1xcclxcbiAgY29sb3I6ICMxNTFiMjk7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZDtcXHJcXG4gIHBhZGRpbmc6IDFlbSAyZW07XFxyXFxuICBmb250LXNpemU6IDFlbTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cztcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtYnRuOmhvdmVyIHtcXHJcXG4gIGJvcmRlci1jb2xvcjogIzE1MWIyOTtcXHJcXG4gIGNvbG9yOiByZ2IoOTQsIDEwLCAxMCk7XFxyXFxuICBib3gtc2hhZG93OiAwIDAuNWVtIDAuNWVtIC0wLjRlbSAjMTUxYjI5O1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjI1ZW0pO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBGb290ZXIgU3R5bGluZyAqL1xcclxcblxcclxcbi5jb250YWluZXItZm9vdGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNTFiMjk7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTs7O0VBR0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLGNBQWM7RUFDZCwrQkFBK0I7RUFDL0IsMkNBQTJDO0VBQzNDLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO0lBQ0UsU0FBUztFQUNYOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsU0FBUztFQUNYO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLFVBQVU7RUFDVixxQkFBcUI7RUFDckIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBLGtCQUFrQjs7QUFFbEI7RUFDRSxlQUFlO0VBQ2YsVUFBVTtFQUNWLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtFQUM3QixVQUFVO0VBQ1YsV0FBVztFQUNYLGNBQWM7RUFDZCxZQUFZO0VBQ1osd0NBQXdDO0VBQ3hDLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtFQUNSLFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTs7RUFFRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsbUNBQW1DO0VBQ25DLFdBQVc7RUFDWCxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQUN4Qjs7QUFFQSx5QkFBeUI7O0FBRXpCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsV0FBVztFQUNYLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0Qix3Q0FBd0M7RUFDeEMsOEJBQThCO0FBQ2hDOztBQUVBLG1CQUFtQjs7QUFFbkI7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbiosXFxyXFxuKjo6YWZ0ZXIsXFxyXFxuKjo6YmVmb3JlIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWJhciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5saSB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIHdpZHRoOiAyNzBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcclxcbiAgbGVmdDogMjBweDtcXHJcXG4gIHRvcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5oMTo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJNb3ZpZU1hemVcXFwiO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgZGlzcGxheTogaW5saW5lO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGNvbG9yOiAjMmVkNTczO1xcclxcbiAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgIzJlZDU3MztcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzbGlkZSAycyBsaW5lYXIgaW5maW5pdGU7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNsaWRlIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgd2lkdGg6IDAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgNTAlIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgd2lkdGg6IDAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uaGVhZC1saXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBtYXJnaW46IDVweDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWQtbGlzdCBsaSB7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgbWFyZ2luOiAyMHB4O1xcclxcbiAgY29sb3I6IGFudGlxdWV3aGl0ZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbmgzIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLyogQ29tbWVudCBwb3B1cCAqL1xcclxcblxcclxcbi5jb21tZW50LXBvcHVwIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbiAgaGVpZ2h0OiA5MCU7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzQsIDczLCAxMDgsIDAuNyk7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDVweDtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoMTI4LCAxNTUsIDE3NCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmEge1xcclxcbiAgZm9udC1zaXplOiAyZW07XFxyXFxufVxcclxcblxcclxcbiNjbG9zZSB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmbG9hdDogcmlnaHQ7XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcFVwLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc3BsYXkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDVweDtcXHJcXG4gIHdpZHRoOiA0MCU7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGdhcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtYm94IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgbWFyZ2luOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG4gIHdpZHRoOiA4NSU7XFxyXFxufVxcclxcblxcclxcbmlucHV0LFxcclxcbnRleHRhcmVhIHtcXHJcXG4gIHBhZGRpbmc6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdC1idG4ge1xcclxcbiAgd2lkdGg6IGF1dG87XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4MiwgNjgsIDExOSk7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50cy1ib3gge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIG1hcmdpbjogNXB4IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudHMtbGlzdCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzcGxheS1kZXRhaWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtbGlzdCB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtbGlzdCBwOjpmaXJzdC1sZXR0ZXIge1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgZmxvYXQ6IGxlZnQ7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1saXN0IGxpIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBFbmQgb2YgY29tbWVudCBwb3B1cCAqL1xcclxcblxcclxcbiNtb3ZpZXMge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxyXFxufVxcclxcblxcclxcbi5tb3YtZGV0YWlsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWJ0biB7XFxyXFxuICBjb2xvcjogIzE1MWIyOTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkO1xcclxcbiAgcGFkZGluZzogMWVtIDJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMWVtO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1idG46aG92ZXIge1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjMTUxYjI5O1xcclxcbiAgY29sb3I6IHJnYig5NCwgMTAsIDEwKTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMC41ZW0gMC41ZW0gLTAuNGVtICMxNTFiMjk7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMjVlbSk7XFxyXFxufVxcclxcblxcclxcbi8qIEZvb3RlciBTdHlsaW5nICovXFxyXFxuXFxyXFxuLmNvbnRhaW5lci1mb290ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE1MWIyOTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBjb25zdCByZXF1ZXN0VVJMID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL3FkbWRGSHN0T1NUZ3FzOHdtZXN1L2xpa2VzLyc7XG5cbmV4cG9ydCBjb25zdCBhZGRMaWtlcyA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlcXVlc3RVUkwsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgaXRlbV9pZDogaWQsXG4gICAgfSksXG4gIH0pO1xuICByZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0TGlrZXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHJlcXVlc3RVUkwpO1xuICBjb25zdCBzdG9yZWRMaWtlcyA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgcmV0dXJuIHN0b3JlZExpa2VzO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoTGlrZXMoaWQpIHtcbiAgY29uc3Qgc3RvcmVkTGlrZXMgPSBhd2FpdCBnZXRMaWtlcygpO1xuICBzdG9yZWRMaWtlcy5mb3JFYWNoKChsaWtlcykgPT4ge1xuICAgIGlmIChwYXJzZUludChsaWtlcy5pdGVtX2lkLCAxMCkgPT09IGlkKSB7XG4gICAgICBjb25zdCB0bXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjbGlrZXNfJHtpZH1gKTtcbiAgICAgIHRtcC5pbm5lckhUTUwgPSBsaWtlcy5saWtlcztcbiAgICB9XG4gIH0pO1xufVxuIiwiY29uc3QgY29tbWVudFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtcG9wdXAnKTtcbmNvbnN0IGNvbW1lbnRDb3VudGVyID0gKGRhdGEpID0+ICh0eXBlb2YgKGRhdGEpID09PSAnb2JqZWN0JyA/IGRhdGEubGVuZ3RoIDogJ2ludmFsaWQnKTtcblxuY29uc3QgY29tbWVudHNBcGlLZXkgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvcWRtZEZIc3RPU1RncXM4d21lc3UvY29tbWVudHMnO1xuY29uc3QgZ2V0TW92aWVDb21tZW50ID0gYXN5bmMgKG1vdmllSWQpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtjb21tZW50c0FwaUtleX0/aXRlbV9pZD0ke21vdmllSWR9YCk7XG4gIHJldHVybiByZXNwb25zZS5qc29uKCk7XG59O1xuXG5jb25zdCBnZXRUb3RhbENvbW1lbnRzID0gYXN5bmMgKG1vdmllSWQpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0TW92aWVDb21tZW50KG1vdmllSWQpXG4gICAgLnRoZW4oKGNvbW1lbnQpID0+ICghY29tbWVudC5lcnJvciA/IGNvbW1lbnQubGVuZ3RoIDogMCkpXG4gICAgLmNhdGNoKCgpID0+IDApO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuY29uc3QgdXBkYXRlQ29tbWVudENvdW50ZXIgPSAobW92aWVJZCkgPT4ge1xuICBnZXRUb3RhbENvbW1lbnRzKG1vdmllSWQpLnRoZW4oKHRvdGFsQ29tbWVudCkgPT4ge1xuICAgIGNvbW1lbnRQb3B1cC5xdWVyeVNlbGVjdG9yKCcudG90YWwtY29tbWVudHMnKS5pbm5lckhUTUwgPSB0b3RhbENvbW1lbnQ7XG4gIH0pO1xufTtcblxuY29uc3QgY29tbWVudEFwaUVuZHBvaW50ID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL3FkbWRGSHN0T1NUZ3FzOHdtZXN1L2NvbW1lbnRzJztcbmNvbnN0IG1vdmllQXBpID0gJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2hvd3MnO1xuXG5jb25zdCBnZXQgPSAodXJsKSA9PiBmZXRjaCh1cmwpXG4gIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gIC50aGVuKChkYXRhKSA9PiBkYXRhKVxuICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvcik7XG5cbmNvbnN0IHBvc3QgPSAodXJsLCBwYXJhbXMgPSB7fSkgPT4gZmV0Y2godXJsLCB7XG4gIG1ldGhvZDogJ1BPU1QnLFxuICBoZWFkZXJzOiB7XG4gICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgfSxcbiAgYm9keTogSlNPTi5zdHJpbmdpZnkocGFyYW1zKSxcbn0pLnRoZW4oKHJlcykgPT4gcmVzLnRleHQoKSlcbiAgLnRoZW4oKGRhdGEpID0+IChkYXRhLmVycm9yXG4gICAgPyB7IGVycm9yOiB0cnVlLCBpbmZvOiBkYXRhIH1cbiAgICA6IHsgZXJyb3I6IGZhbHNlLCBpbmZvOiBkYXRhIH0pKVxuICAuY2F0Y2goKGVycm9yKSA9PiAoeyBlcnJvcjogdHJ1ZSwgaW5mbzogZXJyb3IgfSkpO1xuXG5jb25zdCBhZGRDb21tZW50ID0gYXN5bmMgKHBhcmFtcykgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHBvc3QoY29tbWVudEFwaUVuZHBvaW50LCBwYXJhbXMpO1xuICByZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5jb25zdCBnZXRNb3ZpZURhdGEgPSBhc3luYyAobW92aWVJZCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldChgJHttb3ZpZUFwaX0vJHttb3ZpZUlkfWApO1xuICByZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5jb25zdCBkaXNwbGF5TW92aWVDb21tZW50cyA9IChkYXRhKSA9PiB7XG4gIGNvbW1lbnRQb3B1cC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudHMtYm94JykuaW5uZXJIVE1MID0gZGF0YTtcbn07XG5cbmNvbnN0IHNob3dDb21tZW50cyA9IChtb3ZpZUlkKSA9PiB7XG4gIGdldE1vdmllQ29tbWVudChtb3ZpZUlkKS50aGVuKChkYXRhKSA9PiB7XG4gICAgaWYgKCFkYXRhLmVycm9yKSB7XG4gICAgICBsZXQgY29tbWVudHMgPSAnJztcbiAgICAgIGRhdGEuZm9yRWFjaCgoY29tbWVudCkgPT4ge1xuICAgICAgICBjb21tZW50cyArPSBgPGxpIGNsYXNzPVwiY29tbWVudHMtbGlzdFwiPiR7Y29tbWVudC5jcmVhdGlvbl9kYXRlfSA8c3Bhbj4gJHtjb21tZW50LnVzZXJuYW1lfTo8L3NwYW4+ICAke2NvbW1lbnQuY29tbWVudH08L2xpPmA7XG4gICAgICB9KTtcbiAgICAgIGRpc3BsYXlNb3ZpZUNvbW1lbnRzKGNvbW1lbnRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGlzcGxheU1vdmllQ29tbWVudHMoJ05vIGNvbW1lbnQgcG9zdGVkIHlldC4nKTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgY2xvc2VDb21tZW50UG9wdXAgPSAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbW1lbnRQb3B1cC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGNvbW1lbnRQb3B1cC5pbm5lckhUTUwgPSAnJztcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ3Zpc2libGUnO1xuICB9KTtcbn07XG5cbmNvbnN0IHNob3dDb21tZW50UG9wdXAgPSBhc3luYyAobW92aWVJZCkgPT4ge1xuICBhd2FpdCBnZXRNb3ZpZURhdGEobW92aWVJZCkudGhlbigoZGF0YSkgPT4ge1xuICAgIGNvbW1lbnRQb3B1cC5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cInBvcHVwXCI+XG4gICAgPGJ1dHRvbiBpZD1cImNsb3NlXCI+JnRpbWVzOzwvYnV0dG9uPlxuICAgIDxkaXYgY2xhc3M9XCJwb3BVcC1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRpc3BsYXlcIj4gXG4gICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgPGltZyBjbGFzcz1cInBvcHVwLWltYWdlXCIgc3JjPSR7ZGF0YS5pbWFnZS5tZWRpdW19IGFsdD1cIk1vdmllIGltYWdlXCI+XG4gICAgICAgICAgICA8aDMgY2xhc3M9XCJtb3ZpZS10aXRsZVwiPiR7ZGF0YS5uYW1lfTwvaDM+XG4gICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaXNwbGF5LWRldGFpbFwiPlxuICAgICAgICAgICAgPGgzPk1vcmUgYWJvdXQgdGhlIE1vdmllPC9oMz5cbiAgICAgICAgICAgIDx1bCBjbGFzcz1cInBvcHVwLWxpc3RcIj5cbiAgICAgICAgICAgICA8bGk+JHtkYXRhLnN1bW1hcnl9PC9saT4gXG4gICAgICAgICAgICAgPGxpPjxzdHJvbmc+RGF0ZSBvZiBSZWxlYXNlOjwvc3Ryb25nPiAke2RhdGEucHJlbWllcmVkfTwvbGk+XG4gICAgICAgICAgICAgPGxpPjxzdHJvbmc+R2VucmVzOjwvc3Ryb25nPiR7ZGF0YS5nZW5yZXN9PC9saT4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvdWw+ICBcbiAgICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29tbWVudC1jb250YWluZXJcIj5cbiAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50LWRpc3BsYXlcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzcz0nY291bnRlcic+Q29tbWVudHMoPHNwYW4gY2xhc3M9XCJ0b3RhbC1jb21tZW50c1wiPjA8L3NwYW4+KTwvaDM+XG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJjb21tZW50cy1ib3hcIj5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudC1ib3hcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWRkLWNvbW1lbnRcIj5cbiAgICAgICAgICAgICA8aDM+QWRkIENvbW1lbnQ8L2gzPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Zm9ybSBjbGFzcz1cImZvcm1cIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIGlkPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGlkPVwiZGVzY3JpcHRpb25cIiBjb2xzPVwiMzBcIiByb3dzPVwiMTBcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgaW5zaWdodFwiIHJlcXVpcmVkPjwvdGV4dGFyZWE+XG4gICAgICAgICAgPGJ1dHRvbiBpZD0ke21vdmllSWR9IHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cInN1Ym1pdC1idG5cIj5Db21tZW50PC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgPC9kaXY+XG4gIDwvZGl2PmA7XG5cbiAgICB1cGRhdGVDb21tZW50Q291bnRlcihtb3ZpZUlkKTtcbiAgICBzaG93Q29tbWVudHMobW92aWVJZCk7XG5cbiAgICBjb25zdCBmb3JtID0gY29tbWVudFBvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtJyk7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgdXNlciA9IGZvcm0uZWxlbWVudHMubmFtZS52YWx1ZTtcbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZm9ybS5lbGVtZW50cy5kZXNjcmlwdGlvbi52YWx1ZTtcbiAgICAgIGFkZENvbW1lbnQoe1xuICAgICAgICBpdGVtX2lkOiBtb3ZpZUlkLFxuICAgICAgICB1c2VybmFtZTogdXNlcixcbiAgICAgICAgY29tbWVudDogZGVzY3JpcHRpb24sXG4gICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgc2hvd0NvbW1lbnRzKG1vdmllSWQpO1xuICAgICAgICB1cGRhdGVDb21tZW50Q291bnRlcihtb3ZpZUlkKTtcbiAgICAgICAgZm9ybS5yZXNldCgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuICBjb21tZW50UG9wdXAuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIGNsb3NlQ29tbWVudFBvcHVwKCk7XG59O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XG4gIGlmIChlLnRhcmdldC5tYXRjaGVzKCcuY29tbWVudC1idG4nKSkge1xuICAgIHNob3dDb21tZW50UG9wdXAoZS50YXJnZXQuaWQpO1xuICB9XG59KTtcblxuZXhwb3J0IHsgc2hvd0NvbW1lbnRQb3B1cCwgY29tbWVudENvdW50ZXIgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBzaG93Q29tbWVudFBvcHVwIH0gZnJvbSAnLi9tb2R1bGVzL3BvcFVwLmpzJztcbmltcG9ydCB7IGFkZExpa2VzLCBmZXRjaExpa2VzIH0gZnJvbSAnLi9tb2R1bGVzL2xpa2VzLmpzJztcblxuY29uc3QgTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb3ZpZXMnKTtcblxuZnVuY3Rpb24gY3JlYXRlTW92aWVDYXJkKG1vdmllKSB7XG4gIExpc3QuaW5uZXJIVE1MICs9IGA8bGkgY2xhc3M9XCJtb3ZpZVwiPlxuPGltZyBjbGFzcz1cIm1vdi1wb3N0XCIgc3JjPSR7bW92aWUuaW1hZ2UubWVkaXVtfT5cbjxkaXYgY2xhc3M9XCJtb3YtZGV0YWlsXCI+XG48cCBjbGFzcz1cIm1vdi1uYW1lXCI+JHttb3ZpZS5uYW1lfTwvcD5cbjxkaXYgY2xhc3M9XCJsaWtlc1wiPlxuPGg0IGNsYXNzPVwidG90YWwtbGlrZXNcIiBpZD1cImxpa2VzXyR7bW92aWUuaWR9XCI+MDwvaDQ+XG48aSBpZD0ke21vdmllLmlkfSBjbGFzcz1cImZhcyBmYS1oZWFydFwiPjwvaT5cbjwvZGl2PlxuPC9kaXY+XG48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD0ke21vdmllLmlkfSBjbGFzcz1cImNvbW1lbnQtYnRuXCI+Q29tbWVudHM8L2J1dHRvbj5cbjwvbGk+YDtcbn1cbmNvbnN0IGdldE1vdmllID0gYXN5bmMgKGlkKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2hvd3MvJHtpZH1gO1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgY29uc3QgbW92aWUgPSBhd2FpdCByZXMuanNvbigpO1xuICAgIGNyZWF0ZU1vdmllQ2FyZChtb3ZpZSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coJ2Vycm9yJywgZXJyb3IpO1xuICB9XG59O1xuXG5jb25zdCBtb3ZpZXNObyA9IDEwO1xuY29uc3QgZmV0Y2hNb3ZpZXMgPSAoKSA9PiB7XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IG1vdmllc05vOyBpICs9IDEpIHtcbiAgICBnZXRNb3ZpZShpKTtcbiAgICBmZXRjaExpa2VzKGkpO1xuICB9XG59O1xuZmV0Y2hNb3ZpZXMoKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBpZiAoZS50YXJnZXQubWF0Y2hlcygnLmNvbW1lbnQtYnRuJykpIHtcbiAgICBzaG93Q29tbWVudFBvcHVwKGUudGFyZ2V0LmlkKTtcbiAgfSBlbHNlIGlmIChlLnRhcmdldC50YWdOYW1lID09PSAnSScpIHtcbiAgICBhZGRMaWtlcyhlLnRhcmdldC5pZCk7XG4gICAgY29uc3QgbGlrZXNObyA9IGUudGFyZ2V0LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLnRvdGFsLWxpa2VzJyk7XG4gICAgY29uc3QgbmV3VmFsdWUgPSArbGlrZXNOby5pbm5lckhUTUwgKyAxO1xuICAgIGxpa2VzTm8uaW5uZXJIVE1MID0gbmV3VmFsdWU7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9