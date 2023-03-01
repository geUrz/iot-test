/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/ac.js":
/*!**********************!*\
  !*** ./src/js/ac.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nconst setTemp = document.querySelector(\".set_temp\")\r\nconst barra_divide = document.querySelector(\".barra_divide\")\r\n\r\nconst fa_temp = document.querySelector(\".fa-temperature-half\")\r\nconst fa_power = document.querySelector(\".fa-power-off\")\r\nconst circle_icon_power = document.querySelector(\".circle_icon_power\")\r\nconst circle_icon_temp = document.querySelector(\".circle_icon_temp\")\r\n\r\nconst toggle_cool = document.querySelector(\".toggle_cool\")\r\nconst toggle_circle_cool = document.querySelector(\".toggle_circle_cool\")\r\nconst toggle_fan = document.querySelector(\".toggle_fan\")\r\nconst toggle_circle_fan = document.querySelector(\".toggle_circle_fan\")\r\n            \r\n\r\n\r\n\r\n\r\n\r\n\r\n/************************************\r\n\r\n                SET TEMP\r\n                INICIO\r\n\r\n *************************************/\r\n\r\n\r\n\r\n\r\n\r\n/************************************\r\n\r\n                SET TEMP\r\n                FINAL\r\n\r\n *************************************/\r\n\r\n/************************************\r\n\r\n            BOTON CENTRAL TEMP\r\n                INICIO\r\n\r\n *************************************/\r\n\r\n\r\nfunction ADD_ON_TEMP(){\r\n    circle_icon_temp.classList.add(\"box_shadown\")\r\n    fa_temp.classList.add(\"color\")\r\n}\r\n\r\nfunction REMOVE_ON_TEMP(){\r\n    circle_icon_temp.classList.remove(\"box_shadown\")\r\n    fa_temp.classList.remove(\"color\")\r\n}\r\n\r\n/************************************\r\n\r\n            BOTON CENTRAL TEMP\r\n                FINAL\r\n\r\n *************************************/\r\n\r\n /************************************\r\n\r\n            BOTON CENTRAL POWER\r\n                INICIO\r\n\r\n *************************************/\r\n\r\ncircle_icon_power.addEventListener('click', () => {\r\n    circle_icon_power.classList.toggle(\"box_shadown\")\r\n    fa_power.classList.toggle(\"color\")\r\n})\r\n\r\n\r\nfunction ADD_ON_POWER(){\r\n    circle_icon_power.classList.add(\"box_shadown\")\r\n    fa_power.classList.add(\"color\")\r\n}\r\n\r\nfunction REMOVE_ON_POWER(){\r\n    circle_icon_power.classList.remove(\"box_shadown\")\r\n    fa_power.classList.remove(\"color\")\r\n}\r\n\r\n\r\n /************************************\r\n\r\n            BOTON CENTRAL POWER\r\n                FINAL\r\n\r\n *************************************/\r\n\r\n\r\n/************************************\r\n\r\n            BOTON TOGGLE\r\n                INICIO\r\n\r\n *************************************/\r\n\r\n\r\nfunction ADD_MANUAL_TOGGLE(){\r\n    setTemp.classList.add(\"set_temp_hidde\")\r\n    barra_divide.classList.add(\"barra_divide_hidde\")\r\n    \r\n    toggle_cool.classList.add(\"toggle_box_off\");\r\n    toggle_circle_cool.classList.add(\"toggle_circle_off\");\r\n\r\n    circle_icon_temp.classList.add(\"circle_icon_hidde\")\r\n    circle_icon_power.classList.add(\"circle-icon-display\")\r\n}\r\n\r\nfunction REMOVE_MANUAL_TOGGLE(){\r\n    setTemp.classList.remove(\"set_temp_hidde\")\r\n    barra_divide.classList.remove(\"barra_divide_hidde\")\r\n\r\n    toggle_cool.classList.remove(\"toggle_box_off\");\r\n    toggle_circle_cool.classList.remove(\"toggle_circle_off\");\r\n    toggle_cool_status()\r\n\r\n    circle_icon_temp.classList.remove(\"circle_icon_hidde\")\r\n    circle_icon_power.classList.remove(\"circle-icon-display\")\r\n}\r\n\r\n\r\n\r\nfunction set_frio_manual_on(){\r\n    var frioManualOn = \"frioManualOn\"\r\n    localStorage.setItem(\"frio_manual\", frioManualOn)\r\n    console.log(frioManualOn)\r\n}\r\n\r\nfunction set_frio_manual_off(){\r\n    var frioManualOff = \"frioManualOff\"\r\n    localStorage.setItem(\"frio_manual\", frioManualOff)\r\n    console.log(frioManualOff)\r\n}\r\n\r\n\r\n\r\n\r\nvar idStatus = 1\r\nfunction toggle_cool_status(){\r\n    var id = document.getElementsByClassName(\"toggle_cool\").id\r\n    if(id == 1){\r\n        document.getElementsByClassName(\"toggle_cool\").id=0\r\n        idStatus = 1\r\n\r\n        REMOVE_ON_POWER()\r\n\r\n        set_frio_manual_on()\r\n        \r\n\r\n    }\r\n    else{\r\n        document.getElementsByClassName(\"toggle_cool\").id=1\r\n        idStatus = 0 \r\n\r\n        set_frio_manual_off()\r\n    \r\n\r\n    }\r\n}\r\n\r\n(() => {\r\n    var frioManual = localStorage.getItem(\"frio_manual\")\r\n\r\n    if(frioManual == \"frioManualOn\"){\r\n        ADD_MANUAL_TOGGLE()\r\n    }\r\n    else if(frioManual == \"frioManualOff\"){\r\n        REMOVE_MANUAL_TOGGLE()\r\n    }\r\n\r\n    \r\n})()\r\n\r\n\r\n\r\ntoggle_cool.addEventListener('click', () =>{\r\n    setTemp.classList.toggle(\"set_temp_hidde\")\r\n    barra_divide.classList.toggle(\"barra_divide_hidde\")\r\n    \r\n    toggle_cool.classList.toggle(\"toggle_box_off\");\r\n    toggle_circle_cool.classList.toggle(\"toggle_circle_off\");\r\n    toggle_cool_status()\r\n\r\n    circle_icon_temp.classList.toggle(\"circle_icon_hidde\")\r\n    circle_icon_power.classList.toggle(\"circle-icon-display\")\r\n})\r\n\r\ntoggle_fan.addEventListener('click', () => {\r\n    toggle_fan.classList.toggle(\"toggle_box_on\");\r\n    toggle_circle_fan.classList.toggle(\"toggle_circle_on\");\r\n})\r\n\r\n/************************************\r\n\r\n            BOTON TOGGLE\r\n                FINAL\r\n\r\n *************************************/\n\n//# sourceURL=webpack://node0/./src/js/ac.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/ac.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;