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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./atoms/default/client/js/topanimation.js":
/*!*************************************************!*\
  !*** ./atoms/default/client/js/topanimation.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var imageWrapper = document.querySelector('.image-wrapper');
var image = document.querySelector('.image'); // First text has different rootMargins so it's always visible 

var mobileWidth = window.matchMedia('(max-width: 980px)');

var setFirstRootMargin = function setFirstRootMargin() {
  return mobileWidth.matches ? '-30% 0px 0px 0px' : '-20% 0px -20% 0px';
};

var optionsFirst = {
  rootMargin: setFirstRootMargin(),
  threshold: 0.1
};

var setSecondRootMargin = function setSecondRootMargin() {
  return mobileWidth.matches ? '-30% 0px -5% 0px' : '-20% 0px -20% 0px';
};

var options = {
  rootMargin: setSecondRootMargin(),
  threshold: 0.1
};
var firstTrigger = document.getElementById('triggerFirst');
var firstIntersecting = false;
var firstObserver = new IntersectionObserver(function (entries) {
  if (entries[0].isIntersecting === true) {
    imageWrapper.classList.add("first-burst");
    firstTrigger.classList.add("inView");
    firstIntersecting = true;
    imageWrapper.classList.remove("second-burst");
    imageWrapper.classList.remove("third-burst");
  } else if (firstIntersecting) {
    firstTrigger.classList.remove("inView");
    firstIntersecting = false;
  }
}, optionsFirst);
var secondTrigger = document.getElementById('triggerSecond');
var secondObserver = new IntersectionObserver(function (entries) {
  console.log(entries);

  if (entries[0].isIntersecting === true) {
    imageWrapper.classList.add("second-burst");
    imageWrapper.classList.remove("third-burst");
    secondTrigger.classList.add("inView");
  } else {
    secondTrigger.classList.remove("inView");
  }
}, options);
var thirdTrigger = document.getElementById('triggerThird');
var thirdObserver = new IntersectionObserver(function (entries) {
  console.log(entries);

  if (entries[0].isIntersecting === true) {
    imageWrapper.classList.add("third-burst");
    thirdTrigger.classList.add("inView");
  } else {
    thirdTrigger.classList.remove("inView");
  }
}, options);
firstObserver.observe(firstTrigger);
secondObserver.observe(secondTrigger);
thirdObserver.observe(thirdTrigger);

/***/ }),

/***/ 3:
/*!*******************************************************!*\
  !*** multi ./atoms/default/client/js/topanimation.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/harry_fischer/code/articles/interactive-atom-saturday-greta/atoms/default/client/js/topanimation.js */"./atoms/default/client/js/topanimation.js");


/***/ })

/******/ });
//# sourceMappingURL=topanimation.js.map