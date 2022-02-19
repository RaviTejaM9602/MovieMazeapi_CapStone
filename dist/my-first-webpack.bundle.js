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
___CSS_LOADER_EXPORT___.push([module.id, "*,\r\n*::after,\r\n*::before {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: 'Roboto', sans-serif;\r\n  font-size: 16px;\r\n}\r\n\r\nh1 {\r\n  position: relative;\r\n  font-size: 8em;\r\n  color: rgb(193, 62, 62);\r\n  text-transform: uppercase;\r\n  border-bottom: 16px solid rgb(198, 86, 86);\r\n  letter-spacing: 0.05em;\r\n  line-height: 1.2em;\r\n}\r\n\r\nh1::before {\r\n  content: attr(data-text);\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  color: rgb(53, 46, 140);\r\n  animation: animate 10s linear infinite;\r\n}\r\n\r\n@keyframes animate {\r\n  0% {\r\n    width: 0;\r\n  }\r\n  /* stylelint-disable-next-line rule-empty-line-before */\r\n  100%\r\n  /* stylelint-disable-next-line block-opening-brace-space-before */\r\n  {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\nh3 {\r\n  display: inline-block;\r\n}\r\n\r\nheader {\r\n  height: 100px;\r\n  background-color: black;\r\n}\r\n\r\n/* Comment popup */\r\n\r\n.comment-popup {\r\n  position: fixed;\r\n  z-index: 1;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  transition: 200ms ease-in-out;\r\n  width: 70%;\r\n  height: 90%;\r\n  overflow: auto;\r\n  margin: auto;\r\n  background-color: rgba(74, 73, 108, 0.7);\r\n  display: none;\r\n}\r\n\r\n.popup {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 5px;\r\n  padding: 20px;\r\n  background: rgb(128, 155, 174);\r\n  border-radius: 10px;\r\n}\r\n\r\n.fa {\r\n  font-size: 2em;\r\n}\r\n\r\n#close {\r\n  cursor: pointer;\r\n  border: none;\r\n  outline: none;\r\n  background: none;\r\n  font-size: 1.5rem;\r\n  font-weight: bold;\r\n  float: right;\r\n  align-self: flex-end;\r\n}\r\n\r\n.popUp-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 10px;\r\n  justify-content: space-between;\r\n}\r\n\r\n.display {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 5px;\r\n  width: 40%;\r\n  padding: 5px;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  gap: 5px;\r\n}\r\n\r\n.comment-container {\r\n  width: 50%;\r\n}\r\n\r\n.comment-box {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n  margin: 10px;\r\n}\r\n\r\n.form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n  width: 85%;\r\n}\r\n\r\ninput,\r\ntextarea {\r\n  padding: 8px;\r\n}\r\n\r\n.submit-btn {\r\n  width: auto;\r\n  font-size: 16px;\r\n  letter-spacing: 2px;\r\n  font-weight: 400 !important;\r\n  background-color: rgb(182, 68, 119);\r\n  color: #fff;\r\n  padding: 10px;\r\n  border: none;\r\n}\r\n\r\n.comments-box {\r\n  list-style: none;\r\n  margin: 5px 0;\r\n  padding: 0;\r\n}\r\n\r\n.comments-list {\r\n  list-style: none;\r\n  background: whitesmoke;\r\n  width: 100%;\r\n}\r\n\r\n.display-detail {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: flex-start;\r\n}\r\n\r\n.popup-list {\r\n  padding: 0;\r\n}\r\n\r\n.popup-list p::first-letter {\r\n  font-size: 3rem;\r\n  float: left;\r\n  margin-right: 10px;\r\n}\r\n\r\nli {\r\n  margin-bottom: 30px;\r\n  padding: 20px;\r\n  background: whitesmoke;\r\n  width: 270px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.popup-list li {\r\n  list-style: none;\r\n  background: whitesmoke;\r\n}\r\n\r\n/* End of comment popup */\r\n\r\n#movies {\r\n  list-style: none;\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.likes {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  gap: 0.5rem;\r\n  align-items: baseline;\r\n}\r\n\r\n.mov-detail {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: baseline;\r\n}\r\n\r\n.comment-btn {\r\n  color: #151b29;\r\n  border: 2px solid;\r\n  padding: 1em 2em;\r\n  font-size: 1em;\r\n  transition: all 0.15s;\r\n  cursor: pointer;\r\n}\r\n\r\n.comment-btn:hover {\r\n  border-color: #151b29;\r\n  color: rgb(94, 10, 10);\r\n  box-shadow: 0 0.5em 0.5em -0.4em #151b29;\r\n  transform: translateY(-0.25em);\r\n}\r\n\r\n/* Footer Styling */\r\n\r\n.container-footer {\r\n  display: flex;\r\n  justify-content: center;\r\n  background-color: #151b29;\r\n  color: #fff;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;;;EAGE,sBAAsB;AACxB;;AAEA;EACE,iCAAiC;EACjC,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,cAAc;EACd,uBAAuB;EACvB,yBAAyB;EACzB,0CAA0C;EAC1C,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,wBAAwB;EACxB,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;EACX,uBAAuB;EACvB,sCAAsC;AACxC;;AAEA;EACE;IACE,QAAQ;EACV;EACA,uDAAuD;EACvD;;;IAGE,WAAW;EACb;AACF;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA,kBAAkB;;AAElB;EACE,eAAe;EACf,UAAU;EACV,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,6BAA6B;EAC7B,UAAU;EACV,WAAW;EACX,cAAc;EACd,YAAY;EACZ,wCAAwC;EACxC,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,QAAQ;EACR,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,iBAAiB;EACjB,iBAAiB;EACjB,YAAY;EACZ,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR,UAAU;EACV,YAAY;AACd;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,QAAQ;AACV;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;;EAEE,YAAY;AACd;;AAEA;EACE,WAAW;EACX,eAAe;EACf,mBAAmB;EACnB,2BAA2B;EAC3B,mCAAmC;EACnC,WAAW;EACX,aAAa;EACb,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,UAAU;AACZ;;AAEA;EACE,gBAAgB;EAChB,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,uBAAuB;AACzB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,eAAe;EACf,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;EAChB,sBAAsB;AACxB;;AAEA,yBAAyB;;AAEzB;EACE,gBAAgB;EAChB,aAAa;EACb,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,WAAW;EACX,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,qBAAqB;AACvB;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,gBAAgB;EAChB,cAAc;EACd,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,qBAAqB;EACrB,sBAAsB;EACtB,wCAAwC;EACxC,8BAA8B;AAChC;;AAEA,mBAAmB;;AAEnB;EACE,aAAa;EACb,uBAAuB;EACvB,yBAAyB;EACzB,WAAW;AACb","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\r\n\r\n*,\r\n*::after,\r\n*::before {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: 'Roboto', sans-serif;\r\n  font-size: 16px;\r\n}\r\n\r\nh1 {\r\n  position: relative;\r\n  font-size: 8em;\r\n  color: rgb(193, 62, 62);\r\n  text-transform: uppercase;\r\n  border-bottom: 16px solid rgb(198, 86, 86);\r\n  letter-spacing: 0.05em;\r\n  line-height: 1.2em;\r\n}\r\n\r\nh1::before {\r\n  content: attr(data-text);\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  color: rgb(53, 46, 140);\r\n  animation: animate 10s linear infinite;\r\n}\r\n\r\n@keyframes animate {\r\n  0% {\r\n    width: 0;\r\n  }\r\n  /* stylelint-disable-next-line rule-empty-line-before */\r\n  100%\r\n  /* stylelint-disable-next-line block-opening-brace-space-before */\r\n  {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\nh3 {\r\n  display: inline-block;\r\n}\r\n\r\nheader {\r\n  height: 100px;\r\n  background-color: black;\r\n}\r\n\r\n/* Comment popup */\r\n\r\n.comment-popup {\r\n  position: fixed;\r\n  z-index: 1;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  transition: 200ms ease-in-out;\r\n  width: 70%;\r\n  height: 90%;\r\n  overflow: auto;\r\n  margin: auto;\r\n  background-color: rgba(74, 73, 108, 0.7);\r\n  display: none;\r\n}\r\n\r\n.popup {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 5px;\r\n  padding: 20px;\r\n  background: rgb(128, 155, 174);\r\n  border-radius: 10px;\r\n}\r\n\r\n.fa {\r\n  font-size: 2em;\r\n}\r\n\r\n#close {\r\n  cursor: pointer;\r\n  border: none;\r\n  outline: none;\r\n  background: none;\r\n  font-size: 1.5rem;\r\n  font-weight: bold;\r\n  float: right;\r\n  align-self: flex-end;\r\n}\r\n\r\n.popUp-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 10px;\r\n  justify-content: space-between;\r\n}\r\n\r\n.display {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 5px;\r\n  width: 40%;\r\n  padding: 5px;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  gap: 5px;\r\n}\r\n\r\n.comment-container {\r\n  width: 50%;\r\n}\r\n\r\n.comment-box {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n  margin: 10px;\r\n}\r\n\r\n.form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n  width: 85%;\r\n}\r\n\r\ninput,\r\ntextarea {\r\n  padding: 8px;\r\n}\r\n\r\n.submit-btn {\r\n  width: auto;\r\n  font-size: 16px;\r\n  letter-spacing: 2px;\r\n  font-weight: 400 !important;\r\n  background-color: rgb(182, 68, 119);\r\n  color: #fff;\r\n  padding: 10px;\r\n  border: none;\r\n}\r\n\r\n.comments-box {\r\n  list-style: none;\r\n  margin: 5px 0;\r\n  padding: 0;\r\n}\r\n\r\n.comments-list {\r\n  list-style: none;\r\n  background: whitesmoke;\r\n  width: 100%;\r\n}\r\n\r\n.display-detail {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: flex-start;\r\n}\r\n\r\n.popup-list {\r\n  padding: 0;\r\n}\r\n\r\n.popup-list p::first-letter {\r\n  font-size: 3rem;\r\n  float: left;\r\n  margin-right: 10px;\r\n}\r\n\r\nli {\r\n  margin-bottom: 30px;\r\n  padding: 20px;\r\n  background: whitesmoke;\r\n  width: 270px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.popup-list li {\r\n  list-style: none;\r\n  background: whitesmoke;\r\n}\r\n\r\n/* End of comment popup */\r\n\r\n#movies {\r\n  list-style: none;\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.likes {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  gap: 0.5rem;\r\n  align-items: baseline;\r\n}\r\n\r\n.mov-detail {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: baseline;\r\n}\r\n\r\n.comment-btn {\r\n  color: #151b29;\r\n  border: 2px solid;\r\n  padding: 1em 2em;\r\n  font-size: 1em;\r\n  transition: all 0.15s;\r\n  cursor: pointer;\r\n}\r\n\r\n.comment-btn:hover {\r\n  border-color: #151b29;\r\n  color: rgb(94, 10, 10);\r\n  box-shadow: 0 0.5em 0.5em -0.4em #151b29;\r\n  transform: translateY(-0.25em);\r\n}\r\n\r\n/* Footer Styling */\r\n\r\n.container-footer {\r\n  display: flex;\r\n  justify-content: center;\r\n  background-color: #151b29;\r\n  color: #fff;\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7OztVQ25KRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOcUI7QUFDaUM7QUFDSTs7QUFFMUQ7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QixtQkFBbUI7QUFDL0M7QUFDQSxzQkFBc0IsV0FBVztBQUNqQztBQUNBLG9DQUFvQyxTQUFTO0FBQzdDLFFBQVEsVUFBVTtBQUNsQjtBQUNBO0FBQ0EsMkJBQTJCLFVBQVU7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsR0FBRztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsZUFBZTtBQUNqQztBQUNBLElBQUksNkRBQVU7QUFDZDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksbUVBQWdCO0FBQ3BCLElBQUk7QUFDSixJQUFJLDJEQUFRO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3JlYXRlLXdlYnBhY2svLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2NyZWF0ZS13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9jcmVhdGUtd2VicGFjay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2NyZWF0ZS13ZWJwYWNrLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2NyZWF0ZS13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2NyZWF0ZS13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9jcmVhdGUtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9jcmVhdGUtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9jcmVhdGUtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2NyZWF0ZS13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYnBhY2svLi9zcmMvbW9kdWxlcy9saWtlcy5qcyIsIndlYnBhY2s6Ly9jcmVhdGUtd2VicGFjay8uL3NyYy9tb2R1bGVzL3BvcFVwLmpzIiwid2VicGFjazovL2NyZWF0ZS13ZWJwYWNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NyZWF0ZS13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2NyZWF0ZS13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jcmVhdGUtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NyZWF0ZS13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYnBhY2svLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXHJcXG4qOjphZnRlcixcXHJcXG4qOjpiZWZvcmUge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGZvbnQtc2l6ZTogOGVtO1xcclxcbiAgY29sb3I6IHJnYigxOTMsIDYyLCA2Mik7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMTZweCBzb2xpZCByZ2IoMTk4LCA4NiwgODYpO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaDE6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBhdHRyKGRhdGEtdGV4dCk7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBjb2xvcjogcmdiKDUzLCA0NiwgMTQwKTtcXHJcXG4gIGFuaW1hdGlvbjogYW5pbWF0ZSAxMHMgbGluZWFyIGluZmluaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGFuaW1hdGUge1xcclxcbiAgMCUge1xcclxcbiAgICB3aWR0aDogMDtcXHJcXG4gIH1cXHJcXG4gIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBydWxlLWVtcHR5LWxpbmUtYmVmb3JlICovXFxyXFxuICAxMDAlXFxyXFxuICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYmxvY2stb3BlbmluZy1icmFjZS1zcGFjZS1iZWZvcmUgKi9cXHJcXG4gIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbmgzIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIGhlaWdodDogMTAwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLyogQ29tbWVudCBwb3B1cCAqL1xcclxcblxcclxcbi5jb21tZW50LXBvcHVwIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbiAgaGVpZ2h0OiA5MCU7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzQsIDczLCAxMDgsIDAuNyk7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDVweDtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoMTI4LCAxNTUsIDE3NCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmEge1xcclxcbiAgZm9udC1zaXplOiAyZW07XFxyXFxufVxcclxcblxcclxcbiNjbG9zZSB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmbG9hdDogcmlnaHQ7XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcFVwLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc3BsYXkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDVweDtcXHJcXG4gIHdpZHRoOiA0MCU7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGdhcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtYm94IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgbWFyZ2luOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG4gIHdpZHRoOiA4NSU7XFxyXFxufVxcclxcblxcclxcbmlucHV0LFxcclxcbnRleHRhcmVhIHtcXHJcXG4gIHBhZGRpbmc6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdC1idG4ge1xcclxcbiAgd2lkdGg6IGF1dG87XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4MiwgNjgsIDExOSk7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50cy1ib3gge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIG1hcmdpbjogNXB4IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudHMtbGlzdCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzcGxheS1kZXRhaWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtbGlzdCB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtbGlzdCBwOjpmaXJzdC1sZXR0ZXIge1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgZmxvYXQ6IGxlZnQ7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbmxpIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcXHJcXG4gIHdpZHRoOiAyNzBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtbGlzdCBsaSB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogRW5kIG9mIGNvbW1lbnQgcG9wdXAgKi9cXHJcXG5cXHJcXG4jbW92aWVzIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxufVxcclxcblxcclxcbi5saWtlcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92LWRldGFpbCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1idG4ge1xcclxcbiAgY29sb3I6ICMxNTFiMjk7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZDtcXHJcXG4gIHBhZGRpbmc6IDFlbSAyZW07XFxyXFxuICBmb250LXNpemU6IDFlbTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cztcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtYnRuOmhvdmVyIHtcXHJcXG4gIGJvcmRlci1jb2xvcjogIzE1MWIyOTtcXHJcXG4gIGNvbG9yOiByZ2IoOTQsIDEwLCAxMCk7XFxyXFxuICBib3gtc2hhZG93OiAwIDAuNWVtIDAuNWVtIC0wLjRlbSAjMTUxYjI5O1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjI1ZW0pO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBGb290ZXIgU3R5bGluZyAqL1xcclxcblxcclxcbi5jb250YWluZXItZm9vdGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNTFiMjk7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTs7O0VBR0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsMENBQTBDO0VBQzFDLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRTtJQUNFLFFBQVE7RUFDVjtFQUNBLHVEQUF1RDtFQUN2RDs7O0lBR0UsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBLGtCQUFrQjs7QUFFbEI7RUFDRSxlQUFlO0VBQ2YsVUFBVTtFQUNWLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtFQUM3QixVQUFVO0VBQ1YsV0FBVztFQUNYLGNBQWM7RUFDZCxZQUFZO0VBQ1osd0NBQXdDO0VBQ3hDLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtFQUNSLFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTs7RUFFRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsbUNBQW1DO0VBQ25DLFdBQVc7RUFDWCxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCOztBQUVBLHlCQUF5Qjs7QUFFekI7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLHdDQUF3QztFQUN4Qyw4QkFBOEI7QUFDaEM7O0FBRUEsbUJBQW1COztBQUVuQjtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuKixcXHJcXG4qOjphZnRlcixcXHJcXG4qOjpiZWZvcmUge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGZvbnQtc2l6ZTogOGVtO1xcclxcbiAgY29sb3I6IHJnYigxOTMsIDYyLCA2Mik7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMTZweCBzb2xpZCByZ2IoMTk4LCA4NiwgODYpO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaDE6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBhdHRyKGRhdGEtdGV4dCk7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBjb2xvcjogcmdiKDUzLCA0NiwgMTQwKTtcXHJcXG4gIGFuaW1hdGlvbjogYW5pbWF0ZSAxMHMgbGluZWFyIGluZmluaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGFuaW1hdGUge1xcclxcbiAgMCUge1xcclxcbiAgICB3aWR0aDogMDtcXHJcXG4gIH1cXHJcXG4gIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBydWxlLWVtcHR5LWxpbmUtYmVmb3JlICovXFxyXFxuICAxMDAlXFxyXFxuICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYmxvY2stb3BlbmluZy1icmFjZS1zcGFjZS1iZWZvcmUgKi9cXHJcXG4gIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbmgzIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIGhlaWdodDogMTAwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLyogQ29tbWVudCBwb3B1cCAqL1xcclxcblxcclxcbi5jb21tZW50LXBvcHVwIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbiAgaGVpZ2h0OiA5MCU7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzQsIDczLCAxMDgsIDAuNyk7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDVweDtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoMTI4LCAxNTUsIDE3NCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmEge1xcclxcbiAgZm9udC1zaXplOiAyZW07XFxyXFxufVxcclxcblxcclxcbiNjbG9zZSB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmbG9hdDogcmlnaHQ7XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcFVwLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc3BsYXkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDVweDtcXHJcXG4gIHdpZHRoOiA0MCU7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGdhcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtYm94IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgbWFyZ2luOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG4gIHdpZHRoOiA4NSU7XFxyXFxufVxcclxcblxcclxcbmlucHV0LFxcclxcbnRleHRhcmVhIHtcXHJcXG4gIHBhZGRpbmc6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdC1idG4ge1xcclxcbiAgd2lkdGg6IGF1dG87XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4MiwgNjgsIDExOSk7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50cy1ib3gge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIG1hcmdpbjogNXB4IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudHMtbGlzdCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzcGxheS1kZXRhaWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtbGlzdCB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtbGlzdCBwOjpmaXJzdC1sZXR0ZXIge1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgZmxvYXQ6IGxlZnQ7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbmxpIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcXHJcXG4gIHdpZHRoOiAyNzBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtbGlzdCBsaSB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogRW5kIG9mIGNvbW1lbnQgcG9wdXAgKi9cXHJcXG5cXHJcXG4jbW92aWVzIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxufVxcclxcblxcclxcbi5saWtlcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92LWRldGFpbCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1idG4ge1xcclxcbiAgY29sb3I6ICMxNTFiMjk7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZDtcXHJcXG4gIHBhZGRpbmc6IDFlbSAyZW07XFxyXFxuICBmb250LXNpemU6IDFlbTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cztcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtYnRuOmhvdmVyIHtcXHJcXG4gIGJvcmRlci1jb2xvcjogIzE1MWIyOTtcXHJcXG4gIGNvbG9yOiByZ2IoOTQsIDEwLCAxMCk7XFxyXFxuICBib3gtc2hhZG93OiAwIDAuNWVtIDAuNWVtIC0wLjRlbSAjMTUxYjI5O1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjI1ZW0pO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBGb290ZXIgU3R5bGluZyAqL1xcclxcblxcclxcbi5jb250YWluZXItZm9vdGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNTFiMjk7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY29uc3QgcmVxdWVzdFVSTCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9xZG1kRkhzdE9TVGdxczh3bWVzdS9saWtlcy8nO1xuXG5leHBvcnQgY29uc3QgYWRkTGlrZXMgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZXF1ZXN0VVJMLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGl0ZW1faWQ6IGlkLFxuICAgIH0pLFxuICB9KTtcbiAgcmV0dXJuIHJlc3BvbnNlO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldExpa2VzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChyZXF1ZXN0VVJMKTtcbiAgY29uc3Qgc3RvcmVkTGlrZXMgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gIHJldHVybiBzdG9yZWRMaWtlcztcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaExpa2VzKGlkKSB7XG4gIGNvbnN0IHN0b3JlZExpa2VzID0gYXdhaXQgZ2V0TGlrZXMoKTtcbiAgc3RvcmVkTGlrZXMuZm9yRWFjaCgobGlrZXMpID0+IHtcbiAgICBpZiAocGFyc2VJbnQobGlrZXMuaXRlbV9pZCwgMTApID09PSBpZCkge1xuICAgICAgY29uc3QgdG1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2xpa2VzXyR7aWR9YCk7XG4gICAgICB0bXAuaW5uZXJIVE1MID0gbGlrZXMubGlrZXM7XG4gICAgfVxuICB9KTtcbn1cbiIsImNvbnN0IGNvbW1lbnRQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50LXBvcHVwJyk7XG5jb25zdCBjb21tZW50Q291bnRlciA9IChkYXRhKSA9PiAodHlwZW9mIChkYXRhKSA9PT0gJ29iamVjdCcgPyBkYXRhLmxlbmd0aCA6ICdpbnZhbGlkJyk7XG5cbmNvbnN0IGNvbW1lbnRzQXBpS2V5ID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL3FkbWRGSHN0T1NUZ3FzOHdtZXN1L2NvbW1lbnRzJztcbmNvbnN0IGdldE1vdmllQ29tbWVudCA9IGFzeW5jIChtb3ZpZUlkKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7Y29tbWVudHNBcGlLZXl9P2l0ZW1faWQ9JHttb3ZpZUlkfWApO1xuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufTtcblxuY29uc3QgZ2V0VG90YWxDb21tZW50cyA9IGFzeW5jIChtb3ZpZUlkKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldE1vdmllQ29tbWVudChtb3ZpZUlkKVxuICAgIC50aGVuKChjb21tZW50KSA9PiAoIWNvbW1lbnQuZXJyb3IgPyBjb21tZW50Lmxlbmd0aCA6IDApKVxuICAgIC5jYXRjaCgoKSA9PiAwKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmNvbnN0IHVwZGF0ZUNvbW1lbnRDb3VudGVyID0gKG1vdmllSWQpID0+IHtcbiAgZ2V0VG90YWxDb21tZW50cyhtb3ZpZUlkKS50aGVuKCh0b3RhbENvbW1lbnQpID0+IHtcbiAgICBjb21tZW50UG9wdXAucXVlcnlTZWxlY3RvcignLnRvdGFsLWNvbW1lbnRzJykuaW5uZXJIVE1MID0gdG90YWxDb21tZW50O1xuICB9KTtcbn07XG5cbmNvbnN0IGNvbW1lbnRBcGlFbmRwb2ludCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9xZG1kRkhzdE9TVGdxczh3bWVzdS9jb21tZW50cyc7XG5jb25zdCBtb3ZpZUFwaSA9ICdodHRwczovL2FwaS50dm1hemUuY29tL3Nob3dzJztcblxuY29uc3QgZ2V0ID0gKHVybCkgPT4gZmV0Y2godXJsKVxuICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAudGhlbigoZGF0YSkgPT4gZGF0YSlcbiAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3IpO1xuXG5jb25zdCBwb3N0ID0gKHVybCwgcGFyYW1zID0ge30pID0+IGZldGNoKHVybCwge1xuICBtZXRob2Q6ICdQT1NUJyxcbiAgaGVhZGVyczoge1xuICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gIH0sXG4gIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcmFtcyksXG59KS50aGVuKChyZXMpID0+IHJlcy50ZXh0KCkpXG4gIC50aGVuKChkYXRhKSA9PiAoZGF0YS5lcnJvclxuICAgID8geyBlcnJvcjogdHJ1ZSwgaW5mbzogZGF0YSB9XG4gICAgOiB7IGVycm9yOiBmYWxzZSwgaW5mbzogZGF0YSB9KSlcbiAgLmNhdGNoKChlcnJvcikgPT4gKHsgZXJyb3I6IHRydWUsIGluZm86IGVycm9yIH0pKTtcblxuY29uc3QgYWRkQ29tbWVudCA9IGFzeW5jIChwYXJhbXMpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBwb3N0KGNvbW1lbnRBcGlFbmRwb2ludCwgcGFyYW1zKTtcbiAgcmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3QgZ2V0TW92aWVEYXRhID0gYXN5bmMgKG1vdmllSWQpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXQoYCR7bW92aWVBcGl9LyR7bW92aWVJZH1gKTtcbiAgcmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3QgZGlzcGxheU1vdmllQ29tbWVudHMgPSAoZGF0YSkgPT4ge1xuICBjb21tZW50UG9wdXAucXVlcnlTZWxlY3RvcignLmNvbW1lbnRzLWJveCcpLmlubmVySFRNTCA9IGRhdGE7XG59O1xuXG5jb25zdCBzaG93Q29tbWVudHMgPSAobW92aWVJZCkgPT4ge1xuICBnZXRNb3ZpZUNvbW1lbnQobW92aWVJZCkudGhlbigoZGF0YSkgPT4ge1xuICAgIGlmICghZGF0YS5lcnJvcikge1xuICAgICAgbGV0IGNvbW1lbnRzID0gJyc7XG4gICAgICBkYXRhLmZvckVhY2goKGNvbW1lbnQpID0+IHtcbiAgICAgICAgY29tbWVudHMgKz0gYDxsaSBjbGFzcz1cImNvbW1lbnRzLWxpc3RcIj4ke2NvbW1lbnQuY3JlYXRpb25fZGF0ZX0gPHNwYW4+ICR7Y29tbWVudC51c2VybmFtZX06PC9zcGFuPiAgJHtjb21tZW50LmNvbW1lbnR9PC9saT5gO1xuICAgICAgfSk7XG4gICAgICBkaXNwbGF5TW92aWVDb21tZW50cyhjb21tZW50cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpc3BsYXlNb3ZpZUNvbW1lbnRzKCdObyBjb21tZW50IHBvc3RlZCB5ZXQuJyk7XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IGNsb3NlQ29tbWVudFBvcHVwID0gKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2UnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb21tZW50UG9wdXAuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBjb21tZW50UG9wdXAuaW5uZXJIVE1MID0gJyc7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICd2aXNpYmxlJztcbiAgfSk7XG59O1xuXG5jb25zdCBzaG93Q29tbWVudFBvcHVwID0gYXN5bmMgKG1vdmllSWQpID0+IHtcbiAgYXdhaXQgZ2V0TW92aWVEYXRhKG1vdmllSWQpLnRoZW4oKGRhdGEpID0+IHtcbiAgICBjb21tZW50UG9wdXAuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJwb3B1cFwiPlxuICAgIDxidXR0b24gaWQ9XCJjbG9zZVwiPiZ0aW1lczs8L2J1dHRvbj5cbiAgICA8ZGl2IGNsYXNzPVwicG9wVXAtY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkaXNwbGF5XCI+IFxuICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJwb3B1cC1pbWFnZVwiIHNyYz0ke2RhdGEuaW1hZ2UubWVkaXVtfSBhbHQ9XCJNb3ZpZSBpbWFnZVwiPlxuICAgICAgICAgICAgPGgzIGNsYXNzPVwibW92aWUtdGl0bGVcIj4ke2RhdGEubmFtZX08L2gzPlxuICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGlzcGxheS1kZXRhaWxcIj5cbiAgICAgICAgICAgIDxoMz5Nb3JlIGFib3V0IHRoZSBNb3ZpZTwvaDM+XG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJwb3B1cC1saXN0XCI+XG4gICAgICAgICAgICAgPGxpPiR7ZGF0YS5zdW1tYXJ5fTwvbGk+IFxuICAgICAgICAgICAgIDxsaT48c3Ryb25nPkRhdGUgb2YgUmVsZWFzZTo8L3N0cm9uZz4gJHtkYXRhLnByZW1pZXJlZH08L2xpPlxuICAgICAgICAgICAgIDxsaT48c3Ryb25nPkdlbnJlczo8L3N0cm9uZz4ke2RhdGEuZ2VucmVzfTwvbGk+ICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L3VsPiAgXG4gICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvbW1lbnQtY29udGFpbmVyXCI+XG4gICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudC1kaXNwbGF5XCI+XG4gICAgICAgICAgICA8aDMgY2xhc3M9J2NvdW50ZXInPkNvbW1lbnRzKDxzcGFuIGNsYXNzPVwidG90YWwtY29tbWVudHNcIj4wPC9zcGFuPik8L2gzPlxuICAgICAgICAgICAgPHVsIGNsYXNzPVwiY29tbWVudHMtYm94XCI+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnQtYm94XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFkZC1jb21tZW50XCI+XG4gICAgICAgICAgICAgPGgzPkFkZCBDb21tZW50PC9oMz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGZvcm0gY2xhc3M9XCJmb3JtXCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBpZD1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIllvdXIgbmFtZVwiIHJlcXVpcmVkPlxuICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwiZGVzY3JpcHRpb25cIiBpZD1cImRlc2NyaXB0aW9uXCIgY29scz1cIjMwXCIgcm93cz1cIjEwXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIGluc2lnaHRcIiByZXF1aXJlZD48L3RleHRhcmVhPlxuICAgICAgICAgIDxidXR0b24gaWQ9JHttb3ZpZUlkfSB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJzdWJtaXQtYnRuXCI+Q29tbWVudDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgIDwvZGl2PlxuICA8L2Rpdj5gO1xuXG4gICAgdXBkYXRlQ29tbWVudENvdW50ZXIobW92aWVJZCk7XG4gICAgc2hvd0NvbW1lbnRzKG1vdmllSWQpO1xuXG4gICAgY29uc3QgZm9ybSA9IGNvbW1lbnRQb3B1cC5xdWVyeVNlbGVjdG9yKCcuZm9ybScpO1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IHVzZXIgPSBmb3JtLmVsZW1lbnRzLm5hbWUudmFsdWU7XG4gICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGZvcm0uZWxlbWVudHMuZGVzY3JpcHRpb24udmFsdWU7XG4gICAgICBhZGRDb21tZW50KHtcbiAgICAgICAgaXRlbV9pZDogbW92aWVJZCxcbiAgICAgICAgdXNlcm5hbWU6IHVzZXIsXG4gICAgICAgIGNvbW1lbnQ6IGRlc2NyaXB0aW9uLFxuICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgIHNob3dDb21tZW50cyhtb3ZpZUlkKTtcbiAgICAgICAgdXBkYXRlQ29tbWVudENvdW50ZXIobW92aWVJZCk7XG4gICAgICAgIGZvcm0ucmVzZXQoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbiAgY29tbWVudFBvcHVwLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICBjbG9zZUNvbW1lbnRQb3B1cCgpO1xufTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZSkgPT4ge1xuICBpZiAoZS50YXJnZXQubWF0Y2hlcygnLmNvbW1lbnQtYnRuJykpIHtcbiAgICBzaG93Q29tbWVudFBvcHVwKGUudGFyZ2V0LmlkKTtcbiAgfVxufSk7XG5cbmV4cG9ydCB7IHNob3dDb21tZW50UG9wdXAsIGNvbW1lbnRDb3VudGVyIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgc2hvd0NvbW1lbnRQb3B1cCB9IGZyb20gJy4vbW9kdWxlcy9wb3BVcC5qcyc7XG5pbXBvcnQgeyBhZGRMaWtlcywgZmV0Y2hMaWtlcyB9IGZyb20gJy4vbW9kdWxlcy9saWtlcy5qcyc7XG5cbmNvbnN0IExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW92aWVzJyk7XG5cbmZ1bmN0aW9uIGNyZWF0ZU1vdmllQ2FyZChtb3ZpZSkge1xuICBMaXN0LmlubmVySFRNTCArPSBgPGxpIGNsYXNzPVwibW92aWVcIj5cbjxpbWcgY2xhc3M9XCJtb3YtcG9zdFwiIHNyYz0ke21vdmllLmltYWdlLm1lZGl1bX0+XG48ZGl2IGNsYXNzPVwibW92LWRldGFpbFwiPlxuPHAgY2xhc3M9XCJtb3YtbmFtZVwiPiR7bW92aWUubmFtZX08L3A+XG48ZGl2IGNsYXNzPVwibGlrZXNcIj5cbjxoNCBjbGFzcz1cInRvdGFsLWxpa2VzXCIgaWQ9XCJsaWtlc18ke21vdmllLmlkfVwiPjA8L2g0PlxuPGkgaWQ9JHttb3ZpZS5pZH0gY2xhc3M9XCJmYXMgZmEtaGVhcnRcIj48L2k+XG48L2Rpdj5cbjwvZGl2PlxuPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9JHttb3ZpZS5pZH0gY2xhc3M9XCJjb21tZW50LWJ0blwiPkNvbW1lbnRzPC9idXR0b24+XG48L2xpPmA7XG59XG5jb25zdCBnZXRNb3ZpZSA9IGFzeW5jIChpZCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS50dm1hemUuY29tL3Nob3dzLyR7aWR9YDtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIGNvbnN0IG1vdmllID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICBjcmVhdGVNb3ZpZUNhcmQobW92aWUpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKCdlcnJvcicsIGVycm9yKTtcbiAgfVxufTtcblxuY29uc3QgbW92aWVzTm8gPSAxMDtcbmNvbnN0IGZldGNoTW92aWVzID0gKCkgPT4ge1xuICBmb3IgKGxldCBpID0gMTsgaSA8PSBtb3ZpZXNObzsgaSArPSAxKSB7XG4gICAgZ2V0TW92aWUoaSk7XG4gICAgZmV0Y2hMaWtlcyhpKTtcbiAgfVxufTtcbmZldGNoTW92aWVzKCk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoJy5jb21tZW50LWJ0bicpKSB7XG4gICAgc2hvd0NvbW1lbnRQb3B1cChlLnRhcmdldC5pZCk7XG4gIH0gZWxzZSBpZiAoZS50YXJnZXQudGFnTmFtZSA9PT0gJ0knKSB7XG4gICAgYWRkTGlrZXMoZS50YXJnZXQuaWQpO1xuICAgIGNvbnN0IGxpa2VzTm8gPSBlLnRhcmdldC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy50b3RhbC1saWtlcycpO1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gK2xpa2VzTm8uaW5uZXJIVE1MICsgMTtcbiAgICBsaWtlc05vLmlubmVySFRNTCA9IG5ld1ZhbHVlO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==