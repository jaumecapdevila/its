/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/its.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_inputs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/inputs */ \"./src/utils/inputs.js\");\n/* harmony import */ var _listener_register__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listener/register */ \"./src/listener/register.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (config) {\n  var targets = Object(_utils_inputs__WEBPACK_IMPORTED_MODULE_0__[\"findTargets\"])();\n  Object(_utils_inputs__WEBPACK_IMPORTED_MODULE_0__[\"generateIdentifiers\"])(targets);\n\n  if (targets.length > 0) {\n    Object(_listener_register__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(targets, config.trimOnFocustLost);\n  }\n});\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/config/settings.js":
/*!********************************!*\
  !*** ./src/config/settings.js ***!
  \********************************/
/*! exports provided: name, defaults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"name\", function() { return name; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"defaults\", function() { return defaults; });\nvar name = 'trimOnFocustLost';\nvar defaults = {\n  trimOnFocustLost: true\n};\n\n\n//# sourceURL=webpack:///./src/config/settings.js?");

/***/ }),

/***/ "./src/its.js":
/*!********************!*\
  !*** ./src/its.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/util */ \"./src/utils/util.js\");\n/* harmony import */ var _config_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config/settings */ \"./src/config/settings.js\");\n\n\n\nvar userConfig = browser.storage.local.get();\nuserConfig.then(function (config) {\n  Object(_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Object(_utils_util__WEBPACK_IMPORTED_MODULE_1__[\"isEmpty\"])(config) || !Object(_utils_util__WEBPACK_IMPORTED_MODULE_1__[\"hasProperty\"])(config, _config_settings__WEBPACK_IMPORTED_MODULE_2__[\"name\"]) ? _config_settings__WEBPACK_IMPORTED_MODULE_2__[\"defaults\"] : config);\n});\n\n//# sourceURL=webpack:///./src/its.js?");

/***/ }),

/***/ "./src/listener/blurListener.js":
/*!**************************************!*\
  !*** ./src/listener/blurListener.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/util */ \"./src/utils/util.js\");\n/* harmony import */ var _storage_memory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../storage/memory */ \"./src/storage/memory.js\");\n\n\n/**\n * @param {Event} event\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (event) {\n  var target = event.target;\n  target.value = target.value.replace(_utils_util__WEBPACK_IMPORTED_MODULE_0__[\"regex\"], ' ');\n  target.style.color = _storage_memory__WEBPACK_IMPORTED_MODULE_1__[\"default\"][target.id];\n});\n\n//# sourceURL=webpack:///./src/listener/blurListener.js?");

/***/ }),

/***/ "./src/listener/keyUpListener.js":
/*!***************************************!*\
  !*** ./src/listener/keyUpListener.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/util */ \"./src/utils/util.js\");\n/* harmony import */ var _storage_memory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../storage/memory */ \"./src/storage/memory.js\");\n\n\n/**\n * @param {Event} event\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (event) {\n  var target = event.target;\n\n  if (target.value.match(_utils_util__WEBPACK_IMPORTED_MODULE_0__[\"regex\"]) !== null) {\n    if (_storage_memory__WEBPACK_IMPORTED_MODULE_1__[\"default\"][target.id] === undefined) {\n      _storage_memory__WEBPACK_IMPORTED_MODULE_1__[\"default\"][target.id] = target.style.color;\n    }\n\n    target.style.color = _utils_util__WEBPACK_IMPORTED_MODULE_0__[\"warning\"];\n  } else {\n    target.style.color = _storage_memory__WEBPACK_IMPORTED_MODULE_1__[\"default\"][target.id];\n  }\n});\n\n//# sourceURL=webpack:///./src/listener/keyUpListener.js?");

/***/ }),

/***/ "./src/listener/register.js":
/*!**********************************!*\
  !*** ./src/listener/register.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _keyUpListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyUpListener */ \"./src/listener/keyUpListener.js\");\n/* harmony import */ var _blurListener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blurListener */ \"./src/listener/blurListener.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (targets, isAutoTrimEnabled) {\n  targets.forEach(function (target) {\n    target.addEventListener('keyup', _keyUpListener__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n    if (isAutoTrimEnabled) {\n      target.addEventListener('blur', _blurListener__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n    }\n  });\n});\n\n//# sourceURL=webpack:///./src/listener/register.js?");

/***/ }),

/***/ "./src/storage/memory.js":
/*!*******************************!*\
  !*** ./src/storage/memory.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({});\n\n//# sourceURL=webpack:///./src/storage/memory.js?");

/***/ }),

/***/ "./src/utils/inputs.js":
/*!*****************************!*\
  !*** ./src/utils/inputs.js ***!
  \*****************************/
/*! exports provided: findTargets, getFocused, generateIdentifiers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findTargets\", function() { return findTargets; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFocused\", function() { return getFocused; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateIdentifiers\", function() { return generateIdentifiers; });\nvar targets = ['input[type=\"text\"]', 'input[type=\"search\"]'];\nvar focused = 'input:focus';\nvar baseId = 'its-identifier';\n/**\n * @returns {Array}\n */\n\nvar findTargets = function findTargets() {\n  return document.querySelectorAll(targets.join(','));\n};\n/**\n * @returns {(Element|null)}\n */\n\n\nvar getFocused = function getFocused() {\n  return document.querySelector(focused);\n};\n/**\n * Add identifier to dom elements if not present\n * @param {Array} elements\n */\n\n\nvar generateIdentifiers = function generateIdentifiers(elements) {\n  var counter = 1;\n  elements.forEach(function (element) {\n    if (!element.id) {\n      element.id = \"\".concat(baseId, \"-\").concat(counter);\n      counter += 1;\n    }\n  });\n};\n\n\n\n//# sourceURL=webpack:///./src/utils/inputs.js?");

/***/ }),

/***/ "./src/utils/util.js":
/*!***************************!*\
  !*** ./src/utils/util.js ***!
  \***************************/
/*! exports provided: regex, warning, isEmpty, hasProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"regex\", function() { return regex; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"warning\", function() { return warning; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isEmpty\", function() { return isEmpty; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hasProperty\", function() { return hasProperty; });\nvar regex = /[ \\t]{2,}/g;\nvar warning = 'rgb(249, 38, 114)';\n/**\n * @param {Object} object\n * @returns {Boolean}\n */\n\nvar isEmpty = function isEmpty(object) {\n  return Object.keys(object).length === 0;\n};\n/**\n * Checks if the object contains the specified property\n * @param {Object} object\n * @param {String} property\n * @returns {Boolean}\n */\n\n\nvar hasProperty = function hasProperty(object, property) {\n  return Object.prototype.hasOwnProperty.call(object, property);\n};\n\n\n\n//# sourceURL=webpack:///./src/utils/util.js?");

/***/ })

/******/ });