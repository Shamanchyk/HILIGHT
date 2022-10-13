/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function() {

eval("const hamburger = document.querySelector('.hamburger');\r\nconst menu = document.querySelector('.menu__row');\r\n\r\nif(hamburger){\r\n    hamburger.addEventListener(\"click\", function() {\r\n        document.body.classList.toggle('lock');\r\n        hamburger.classList.toggle('active');\r\n        menu.classList.toggle('active');\r\n    })\r\n}\r\n\r\nvar swiper = new Swiper(\".mySwiper\", {\r\n    slidesPerView: \"auto\",\r\n    scrollbar: {\r\n        el: \".main__scrollbar\",\r\n        hide: false,\r\n    },\r\n    navigation: {\r\n        nextEl: \".main__right\",\r\n        prevEl: \".main__left\",\r\n      },\r\n    on: {\r\n    init: function () {\r\n        var currentSlide = '01' ;\r\n        document.querySelector('.current-slide').innerHTML = currentSlide;\r\n    },\r\n        slideChange: function(){\r\n        var currentSlide = '0' + (this.realIndex + 1);\r\n        document.querySelector('.current-slide').innerHTML = currentSlide;\r\n    },\r\n        beforeInit: function(){\r\n        let numOfSlides = '0' + (this.wrapperEl.querySelectorAll(\".swiper-slide\").length);\r\n        document.querySelector('.total-slides').innerHTML = numOfSlides;\r\n        }\r\n    },\r\n  });\r\n\r\n  var swiper = new Swiper(\".mySwiper2\", {\r\n    slidesPerView: \"auto\",\r\n    spaceBetween: 12,\r\n    scrollbar: {\r\n        el: \".main__scrollbar\",\r\n        hide: false,\r\n    },\r\n    navigation: {\r\n        nextEl: \".main__right\",\r\n        prevEl: \".main__left\",\r\n      },\r\n    on: {\r\n    init: function () {\r\n        var currentSlide = '01' ;\r\n        document.querySelector('.current-slide').innerHTML = currentSlide;\r\n    },\r\n        slideChange: function(){\r\n        var currentSlide = '0' + (this.realIndex + 1);\r\n        document.querySelector('.current-slide').innerHTML = currentSlide;\r\n    },\r\n        beforeInit: function(){\r\n        let numOfSlides = '0' + (this.wrapperEl.querySelectorAll(\".swiper-slide\").length);\r\n        document.querySelector('.total-slides').innerHTML = numOfSlides;\r\n        }\r\n    },\r\n  });\r\n\r\n  var swiper = new Swiper(\".mySwiper3\", {\r\n    slidesPerView: \"auto\",\r\n    spaceBetween: 46,\r\n  });\r\n\r\n\r\nlet menuScroll = document.querySelector('.header__top')\r\n\r\nwindow.onscroll = () => {\r\n    if(window.scrollY > 70){\r\n        menuScroll.classList.add('menuScroll');\r\n    } else if(window.scrollY < 70){\r\n        menuScroll.classList.remove('menuScroll');\r\n    }\r\n};\n\n//# sourceURL=webpack://gulp-starter/./src/js/main.js?");

/***/ }),

/***/ "./src/js/preloader.js":
/*!*****************************!*\
  !*** ./src/js/preloader.js ***!
  \*****************************/
/***/ (function() {

eval("document.body.onload = function(){\r\n\r\n    setTimeout(() => {\r\n        let preloader = document.getElementById(\"preloader\");\r\n        if( !preloader.classList.contains('done') )\r\n        {\r\n            preloader.classList.add('done');\r\n        }\r\n    }, 1500);\r\n}\r\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/preloader.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/preloader.js"]();
/******/ 	
/******/ })()
;