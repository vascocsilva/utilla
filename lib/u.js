(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("u", [], factory);
	else if(typeof exports === 'object')
		exports["u"] = factory();
	else
		root["u"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/*
	   __   __  _______  ___   ___      ___      _______
	  |  | |  ||       ||   | |   |    |   |    |   _   |
	  |  | |  ||_     _||   | |   |    |   |    |  |_|  |
	  |  |_|  |  |   |  |   | |   |    |   |    |       |
	  |       |  |   |  |   | |   |___ |   |___ |       |
	  |       |  |   |  |   | |       ||       ||   _   |
	  |_______|  |___|  |___| |_______||_______||__| |__|
	
	  A lightweight, vanilla js, dom manipulation library
	  Authors: Pedro Brás (https://github.com/pedromrb) & Vasco Silva (https://github.com/vascocsilva)
	
	  Version: 1.0.0
	*/
	
	var Utilla = function () {
	  _createClass(Utilla, null, [{
	    key: 'prefix',
	
	    // Prefix to use in functions handled by 'off' and 'on' methods
	    // to have a reference for the function associated to an event type
	    // so the event listener can be removed
	    // eg: uumouseenter, uumouseleave, uuclick
	    value: function prefix() {
	      return 'uu';
	    }
	  }]);
	
	  function Utilla(selector) {
	    _classCallCheck(this, Utilla);
	
	    this.elements = document.querySelectorAll(selector);
	  }
	
	  _createClass(Utilla, [{
	    key: 'each',
	    value: function each(fn) {
	      for (var i = 0; i < this.elements.length; i++) {
	        fn.call(this.elements[i]);
	      }
	
	      return this;
	    }
	  }, {
	    key: 'hide',
	    value: function hide() {
	      this.each(function () {
	        this.style.display = 'none';
	      });
	
	      return this;
	    }
	  }, {
	    key: 'show',
	    value: function show() {
	      var displayType = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
	
	      this.each(function () {
	        this.style.display = displayType;
	      });
	
	      return this;
	    }
	
	    // Add a class to current selected elements
	    // @param className (string)
	
	  }, {
	    key: 'addClass',
	    value: function addClass(className) {
	      this.each(function () {
	        if (this.classLlist) this.classList.add(className);else {
	          this.className += ' ' + className;
	        }
	      });
	
	      return this;
	    }
	
	    // Remove a class in current selected elements
	    // @param className (string)
	
	  }, {
	    key: 'removeClass',
	    value: function removeClass(className) {
	      this.each(function () {
	        if (this.classList) this.classList.remove(className);else this.className = this.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
	      });
	
	      return this;
	    }
	  }, {
	    key: 'on',
	    value: function on(event, fn) {
	      return this.each(function () {
	        this[Utilla.prefix() + event] = fn;
	        this.addEventListener(event, fn, false);
	      });
	    }
	
	    // Remove eventListener from current elements
	    // @param event type
	
	  }, {
	    key: 'off',
	    value: function off(event) {
	      return this.each(function () {
	        this.removeEventListener(event, this[Utilla.prefix() + event]);
	      });
	    }
	
	    // serialize Array
	
	  }, {
	    key: 'serializeArray',
	    value: function serializeArray() {
	      var array = [];
	
	      this.each(function () {
	        for (var i = 0; i < this.elements.length; i++) {
	          var obj = {};
	
	          obj.value = this.elements[i].value;
	
	          array.push(obj);
	        }
	      });
	
	      return array;
	    }
	  }]);
	
	  return Utilla;
	}();
	
	var u = function u(selector) {
	  return new Utilla(selector);
	};
	
	exports.default = u;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=u.js.map