/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/accordion-js/dist/accordion.min.js":
/*!*********************************************************!*\
  !*** ./node_modules/accordion-js/dist/accordion.min.js ***!
  \*********************************************************/
/***/ ((module) => {

/**
 * Accordion v3.3.2
 * Lightweight and accessible accordion module created in pure Javascript
 * https://github.com/michu2k/Accordion
 * 
 * Copyright (c) Michał Strumpf
 * Published under MIT License
 */

!function(e){var t=0,n=function e(n,s){var i=this,o=this,a=!1;if(Array.isArray(n))return!!n.length&&n.map((function(t){return new e(t,s)}));var r={init:function(){this.options=Object.assign({duration:600,ariaEnabled:!0,collapse:!0,showMultiple:!1,onlyChildNodes:!0,openOnInit:[],elementClass:"ac",triggerClass:"ac-trigger",panelClass:"ac-panel",activeClass:"is-active",beforeOpen:function(){},onOpen:function(){},beforeClose:function(){},onClose:function(){}},s);var e="string"==typeof n;this.container=e?document.querySelector(n):n,this.createDefinitions(),o.attachEvents()},createDefinitions:function(){var e=this,n=this.options,s=n.elementClass,i=n.openOnInit,o=n.onlyChildNodes?this.container.childNodes:this.container.querySelectorAll(".".concat(s));this.elements=Array.from(o).filter((function(e){return e.classList&&e.classList.contains(s)})),this.firstElement=this.elements[0],this.lastElement=this.elements[this.elements.length-1],this.elements.filter((function(e){return!e.classList.contains("js-enabled")})).forEach((function(n){n.classList.add("js-enabled"),e.generateIDs(n),e.setARIA(n),e.setTransition(n);var s=e.elements.indexOf(n);t++,i.includes(s)?e.showElement(n,!1):e.closeElement(n,!1)}))},setTransition:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.options,s=n.duration,i=n.panelClass,o=e.querySelector(".".concat(i)),a=c("transitionDuration");o.style[a]=t?null:"".concat(s,"ms")},generateIDs:function(e){var n=this.options,s=n.triggerClass,i=n.panelClass,o=e.querySelector(".".concat(s)),a=e.querySelector(".".concat(i));e.setAttribute("id","ac-".concat(t)),o.setAttribute("id","ac-trigger-".concat(t)),a.setAttribute("id","ac-panel-".concat(t))},removeIDs:function(e){var t=this.options,n=t.triggerClass,s=t.panelClass,i=e.querySelector(".".concat(n)),o=e.querySelector(".".concat(s));e.removeAttribute("id"),i.removeAttribute("id"),o.removeAttribute("id")},setARIA:function(e){var n=this.options,s=n.ariaEnabled,i=n.triggerClass,o=n.panelClass;if(s){var a=e.querySelector(".".concat(i)),r=e.querySelector(".".concat(o));a.setAttribute("role","button"),a.setAttribute("aria-controls","ac-panel-".concat(t)),a.setAttribute("aria-disabled",!1),a.setAttribute("aria-expanded",!1),r.setAttribute("role","region"),r.setAttribute("aria-labelledby","ac-trigger-".concat(t))}},updateARIA:function(e,t){var n=t.ariaExpanded,s=t.ariaDisabled,i=this.options,o=i.ariaEnabled,a=i.triggerClass;if(o){var r=e.querySelector(".".concat(a));r.setAttribute("aria-expanded",n),r.setAttribute("aria-disabled",s)}},removeARIA:function(e){var t=this.options,n=t.ariaEnabled,s=t.triggerClass,i=t.panelClass;if(n){var o=e.querySelector(".".concat(s)),a=e.querySelector(".".concat(i));o.removeAttribute("role"),o.removeAttribute("aria-controls"),o.removeAttribute("aria-disabled"),o.removeAttribute("aria-expanded"),a.removeAttribute("role"),a.removeAttribute("aria-labelledby")}},focus:function(e,t){e.preventDefault();var n=this.options.triggerClass;t.querySelector(".".concat(n)).focus()},focusFirstElement:function(e){this.focus(e,this.firstElement),this.currFocusedIdx=0},focusLastElement:function(e){this.focus(e,this.lastElement),this.currFocusedIdx=this.elements.length-1},focusNextElement:function(e){var t=this.currFocusedIdx+1;if(t>this.elements.length-1)return this.focusFirstElement(e);this.focus(e,this.elements[t]),this.currFocusedIdx=t},focusPrevElement:function(e){var t=this.currFocusedIdx-1;if(t<0)return this.focusLastElement(e);this.focus(e,this.elements[t]),this.currFocusedIdx=t},showElement:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=this.options,s=n.panelClass,i=n.activeClass,o=n.collapse,a=n.beforeOpen;t&&a(e);var r=e.querySelector(".".concat(s)),c=r.scrollHeight;e.classList.add(i),requestAnimationFrame((function(){requestAnimationFrame((function(){r.style.height=t?"".concat(c,"px"):"auto"}))})),this.updateARIA(e,{ariaExpanded:!0,ariaDisabled:!o})},closeElement:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=this.options,s=n.panelClass,i=n.activeClass,o=n.beforeClose,a=e.querySelector(".".concat(s)),r=a.scrollHeight;e.classList.remove(i),t?(o(e),requestAnimationFrame((function(){a.style.height="".concat(r,"px"),requestAnimationFrame((function(){a.style.height=0}))}))):a.style.height=0,this.updateARIA(e,{ariaExpanded:!1,ariaDisabled:!1})},toggleElement:function(e){var t=this.options,n=t.activeClass,s=t.collapse,i=e.classList.contains(n);if(!i||s)return i?this.closeElement(e):this.showElement(e)},closeElements:function(){var e=this,t=this.options,n=t.activeClass;t.showMultiple||this.elements.forEach((function(t,s){t.classList.contains(n)&&s!==e.currFocusedIdx&&e.closeElement(t)}))},handleClick:function(e){var t=this,n=e.currentTarget;this.elements.forEach((function(s,i){s.contains(n)&&"A"!==e.target.nodeName&&(t.currFocusedIdx=i,t.closeElements(),t.focus(e,s),t.toggleElement(s))}))},handleKeydown:function(e){var t=38,n=40,s=36,i=35;switch(e.keyCode){case t:return this.focusPrevElement(e);case n:return this.focusNextElement(e);case s:return this.focusFirstElement(e);case i:return this.focusLastElement(e);default:return null}},handleTransitionEnd:function(e){if("height"===e.propertyName){var t=this.options,n=t.onOpen,s=t.onClose,i=e.currentTarget,o=parseInt(i.style.height),a=this.elements.find((function(e){return e.contains(i)}));o>0?(i.style.height="auto",n(a)):s(a)}}};this.attachEvents=function(){if(!a){var e=r.options,t=e.triggerClass,n=e.panelClass;r.handleClick=r.handleClick.bind(r),r.handleKeydown=r.handleKeydown.bind(r),r.handleTransitionEnd=r.handleTransitionEnd.bind(r),r.elements.forEach((function(e){var s=e.querySelector(".".concat(t)),i=e.querySelector(".".concat(n));s.addEventListener("click",r.handleClick),s.addEventListener("keydown",r.handleKeydown),i.addEventListener("webkitTransitionEnd",r.handleTransitionEnd),i.addEventListener("transitionend",r.handleTransitionEnd)})),a=!0}},this.detachEvents=function(){if(a){var e=r.options,t=e.triggerClass,n=e.panelClass;r.elements.forEach((function(e){var s=e.querySelector(".".concat(t)),i=e.querySelector(".".concat(n));s.removeEventListener("click",r.handleClick),s.removeEventListener("keydown",r.handleKeydown),i.removeEventListener("webkitTransitionEnd",r.handleTransitionEnd),i.removeEventListener("transitionend",r.handleTransitionEnd)})),a=!1}},this.toggle=function(e){var t=r.elements[e];t&&r.toggleElement(t)},this.open=function(e){var t=r.elements[e];t&&r.showElement(t)},this.openAll=function(){var e=r.options,t=e.activeClass,n=e.onOpen;r.elements.forEach((function(e){e.classList.contains(t)||(r.showElement(e,!1),n(e))}))},this.close=function(e){var t=r.elements[e];t&&r.closeElement(t)},this.closeAll=function(){var e=r.options,t=e.activeClass,n=e.onClose;r.elements.forEach((function(e){e.classList.contains(t)&&(r.closeElement(e,!1),n(e))}))},this.destroy=function(){i.detachEvents(),i.openAll(),r.elements.forEach((function(e){r.removeIDs(e),r.removeARIA(e),r.setTransition(e,!0)})),a=!0},this.update=function(){r.createDefinitions(),i.detachEvents(),i.attachEvents()};var c=function(e){return"string"==typeof document.documentElement.style[e]?e:(e=l(e),e="webkit".concat(e))},l=function(e){return e.charAt(0).toUpperCase()+e.slice(1)};r.init()}; true&&void 0!==module.exports?module.exports=n:e.Accordion=n}(window);

/***/ }),

/***/ "./src/js/_functions.js":
/*!******************************!*\
  !*** ./src/js/_functions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_mobile_check__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/mobile-check */ "./src/js/functions/mobile-check.js");
// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там
// Определение операционной системы на мобильных

console.log((0,_functions_mobile_check__WEBPACK_IMPORTED_MODULE_0__.mobileCheck)()); // Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }
// Получение высоты шапки сайта (не забудьте вызвать функцию)
// import { getHeaderHeight } from './functions/header-height';
// Подключение анимаций по скроллу
// import AOS from 'aos';
// AOS.init();
// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');
// Подключение плавной прокрутки к якорям
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');

/***/ }),

/***/ "./src/js/functions/mobile-check.js":
/*!******************************************!*\
  !*** ./src/js/functions/mobile-check.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mobileCheck": () => (/* binding */ mobileCheck)
/* harmony export */ });
var mobileCheck = function mobileCheck() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/android/i.test(userAgent)) {
    document.documentElement.classList.add('page--android');
    return "Android";
  }

  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    document.documentElement.classList.add('page--ios');
    return "iOS";
  }

  return "unknown";
};

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
/******/ 			// no module.id needed
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
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_functions */ "./src/js/_functions.js");
/* harmony import */ var accordion_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! accordion-js */ "./node_modules/accordion-js/dist/accordion.min.js");
/* harmony import */ var accordion_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(accordion_js__WEBPACK_IMPORTED_MODULE_1__);


var accordion = new (accordion_js__WEBPACK_IMPORTED_MODULE_1___default())('.accordion-container', {
  // animation duration in ms {number} 
  duration: 600,
  // add ARIA elements to the HTML structure {boolean}
  ariaEnabled: true,
  // allow collapse expanded panel {boolean}
  collapse: true,
  // show multiple elements at the same time {boolean}
  showMultiple: false,
  // disabling this option will find all items in the container {boolean}
  onlyChildNodes: true,
  // show accordion elements during initialization {array}
  openOnInit: [],
  // element class {string}
  elementClass: 'ac',
  // trigger class {string}
  triggerClass: 'ac-trigger',
  // panel class {string}
  panelClass: 'ac-panel',
  // active element class {string}
  activeClass: 'is-active'
});
var swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination'
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar'
  }
});
})();

/******/ })()
;
//# sourceMappingURL=main.js.map