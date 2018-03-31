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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
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

/***/ "./components/Sidebar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nextein_link__ = __webpack_require__("nextein/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nextein_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nextein_link__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = "/Users/joseph/code/stuff/next-app/components/Sidebar.js";



var Menu = function Menu(_ref) {
  var posts = _ref.posts;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "ul",
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      }
    },
    posts.map(function (post) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "li",
        { key: post.data.url, __source: {
            fileName: _jsxFileName,
            lineNumber: 6
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_nextein_link___default.a,
          _extends({}, post, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 7
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "a",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 8
              }
            },
            post.data.title
          )
        )
      );
    })
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Menu);

/***/ }),

/***/ "./pages/docs.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components_no_parser__ = __webpack_require__("styled-components/no-parser");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components_no_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components_no_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nextein_post__ = __webpack_require__("nextein/post");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nextein_post___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_nextein_post__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nextein_posts__ = __webpack_require__("nextein/posts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nextein_posts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_nextein_posts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Menu__ = __webpack_require__("./components/Menu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Sidebar__ = __webpack_require__("./components/Sidebar.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = "/Users/joseph/code/stuff/next-app/pages/docs.js";








var withDocs = Object(__WEBPACK_IMPORTED_MODULE_3_nextein_posts__["withPostsFilterBy"])(
// filters posts to only include posts in the docs folder
Object(__WEBPACK_IMPORTED_MODULE_3_nextein_posts__["inCategory"])("docs", { includeSubCategories: true }));

var docs = __WEBPACK_IMPORTED_MODULE_2_nextein_post___default()(withDocs(function (_ref) {
  var current = _ref.post,
      posts = _ref.posts;

  var post = current || posts[0];
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "div",
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Menu__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Sidebar__["a" /* default */], { posts: posts, __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Body,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        Title,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          }
        },
        post.data.title
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_nextein_post__["Content"], _extends({}, post, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }))
    )
  );
}));

var Title = __WEBPACK_IMPORTED_MODULE_1_styled_components_no_parser___default.a.h1.withConfig({
  displayName: "docs__Title",
  componentId: "s1ooiha0-0"
})([["{font-size:2em;color:tomato;border:2px dotted tomato;}"]]);

var Body = __WEBPACK_IMPORTED_MODULE_1_styled_components_no_parser___default.a.div.withConfig({
  displayName: "docs__Body",
  componentId: "s1ooiha0-1"
})([]);

/* harmony default export */ __webpack_exports__["default"] = (docs);

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/docs.js");


/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "nextein/link":
/***/ (function(module, exports) {

module.exports = require("nextein/link");

/***/ }),

/***/ "nextein/post":
/***/ (function(module, exports) {

module.exports = require("nextein/post");

/***/ }),

/***/ "nextein/posts":
/***/ (function(module, exports) {

module.exports = require("nextein/posts");

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
//# sourceMappingURL=docs.js.map