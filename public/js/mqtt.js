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

/***/ "./src/js/mqtt.js":
/*!************************!*\
  !*** ./src/js/mqtt.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/*const temp_0 = document.querySelector(\"#display_temp0\");\r\nconst temp_1 = document.querySelector(\"#display_temp1\");\r\nconst temp_2 = document.querySelector(\"#display_temp2\");*/\r\n\r\n\r\n\r\n\r\n/*function update_values( temp1, temp2, temp3 ){\r\n    temp_0.innerHTML = (temp1);\r\n    temp_1.innerHTML = (temp2);\r\n    temp_2.innerHTML = (temp3);\r\n}\r\n\r\nfunction process_msg(topic, message){\r\n    if (topic == \"values\"){\r\n        var msg = message.toString();\r\n        var sp = msg.split(\",\");\r\n        var temp1 = sp[0];\r\n        var temp2 = sp[1];\r\n        var temp3 = sp[2];\r\n        update_values(temp1, temp2, temp3);\r\n    }\r\n}*/\r\n\r\n\r\n\r\n\r\n\r\n// Initialize a mqtt variable globally\r\n// const mqtt = require('mqtt')\r\n\r\n// connection option\r\nconst options = {\r\n    clean: true, // retain session\r\nconnectTimeout: 4000, // Timeout period\r\n// Authentication information\r\n//clientId: 'iot01',\r\n//username: 'emqx_test',\r\n//password: 'emqx_test',\r\nKeepalive: '60',\r\n}\r\n\r\n// Connect string, and specify the connection method by the protocol\r\n// ws Unencrypted WebSocket connection\r\n// wss Encrypted WebSocket connection\r\n// mqtt Unencrypted TCP connection\r\n// mqtts Encrypted TCP connection\r\n// wxs WeChat applet connection\r\n// alis Alipay applet connection\r\nconst connectUrl = 'ws://public.mqtthq.com:1883/mqtt'\r\nconst client = mqtt.connect(connectUrl, options)\r\n\r\nclient.on('connect', () => {\r\nconsole.log('Conectado con Exito')\r\n\r\nclient.subscribe('Casa_001/#', { qos: 0 }, (error) => {\r\n  if ( !error ){\r\n      console.log('Suscripción Exitosa')\r\n\r\n  }\r\n  else{\r\n      console.log('Suscripción Fallida')\r\n  }\r\n\r\n  \r\n})\r\n\r\nclient.publish('topic', 'message', (error) => {\r\n  console.log(error || 'Mensaje Enviado')\r\n})\r\n\r\n})\r\n\r\n\r\n\r\n/*function valueTemp(){\r\n  temp = process_msg(topic, message);\r\n  document.getElementById(\"display_temp\").innerHTML = temp;\r\n}\r\n\r\n\r\nvalueTemp();*/\r\n\r\nclient.on('reconnect', (error) => {\r\nconsole.log('Error al Reconectar:', error)\r\n})\r\n\r\nclient.on('error', (error) => {\r\nconsole.log('Error de Conexión:', error)\r\n})\r\n\r\n\r\n\n\n//# sourceURL=webpack://node0/./src/js/mqtt.js?");

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
/******/ 	__webpack_modules__["./src/js/mqtt.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;