/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_browser_hack__ = __webpack_require__(2);


__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__modules_browser_hack__["a" /* default */])();

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = browserHack;


function browserHack() {

    'use strict';

    //htmlタグを変数に

    var htmlTag = document.documentElement;

    //userAgentを変数に
    var userAgent = window.navigator.userAgent.toLowerCase(),
        platform = window.navigator.platform.toLowerCase(),
        deviceType = navigator.userAgent.toLowerCase();

    //OS,ブラウザを変数に
    var uaIe = [/(msie|MSIE)/, /(T|t)rident/];

    //クラス名を変数に
    var browserClass = ['ie', 'windows', 'safari', 'chrome', 'firefox', 'ie 10', 'edge', 'android'];

    //スペースを定数に
    var SPACE = ' ';

    //function
    var addClassHack = function addClassHack(conditions, className) {
        if (conditions) {
            htmlTag.className += SPACE + className;
        }
    };

    //android
    addClassHack(deviceType.indexOf("android") !== -1, browserClass[7]);

    //ie
    addClassHack(userAgent.match(uaIe[0]) || userAgent.match(uaIe[1]), browserClass[0]);

    //windows
    addClassHack(platform.indexOf('win') !== -1, browserClass[1]);

    //safari
    addClassHack(userAgent.indexOf(browserClass[2]) !== -1 && userAgent.indexOf(browserClass[3]) === -1, browserClass[2]);

    //chrome
    addClassHack(userAgent.indexOf(browserClass[2]) !== -1 && userAgent.indexOf(browserClass[3]) !== -1, browserClass[3]);

    //firefox
    addClassHack(userAgent.indexOf(browserClass[4]) !== -1, browserClass[4]);

    //ie10
    addClassHack(userAgent.indexOf(browserClass[5]) !== -1, 'ie10');

    //edge
    addClassHack(userAgent.indexOf(browserClass[6]) !== -1, browserClass[6]);
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
module.exports = __webpack_require__(1);


/***/ })
/******/ ]);