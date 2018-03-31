module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Menu.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
var _jsxFileName = "/Users/joseph/code/stuff/next-app/components/Menu.js";



var Menu = function Menu() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "ul",
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "li",
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 5
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
        { href: "/", __source: {
            fileName: _jsxFileName,
            lineNumber: 6
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "a",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 7
            }
          },
          "HOME"
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "li",
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
        { href: "/docs", __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "a",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            }
          },
          "DOCS"
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "li",
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
        { href: "/blog", __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "a",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 17
            }
          },
          "BLOG"
        )
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Menu);

/***/ }),

/***/ "./pages/blog.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components_no_parser__ = __webpack_require__("styled-components/no-parser");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components_no_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components_no_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Menu__ = __webpack_require__("./components/Menu.js");
var _jsxFileName = "/Users/joseph/code/stuff/next-app/pages/blog.js";





/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "div",
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Menu__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Title,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      },
      "Blog"
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Paragraph,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      },
      "This would be a blog!"
    )
  );
});

var Title = __WEBPACK_IMPORTED_MODULE_1_styled_components_no_parser___default.a.h1.withConfig({
  displayName: "blog__Title",
  componentId: "s1w2d0bf-0"
})([["{font-size:2em;color:tomato;border:2px dotted tomato;}"]]);

var Paragraph = __WEBPACK_IMPORTED_MODULE_1_styled_components_no_parser___default.a.p.withConfig({
  displayName: "blog__Paragraph",
  componentId: "s1w2d0bf-1"
})([["{font-size:1em;background-color:black;color:white;}"]]);

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/blog.js");


/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components/no-parser":
/***/ (function(module, exports) {

module.exports = require("styled-components/no-parser");

/***/ })

/******/ });
//# sourceMappingURL=blog.js.map