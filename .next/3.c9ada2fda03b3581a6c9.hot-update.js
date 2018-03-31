webpackHotUpdate(3,{

/***/ "./components/Sidebar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nextein_link__ = __webpack_require__("./node_modules/nextein/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nextein_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nextein_link__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = "/Users/joseph/code/stuff/next-app/components/Sidebar.js";


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();



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

var _default = Menu;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Menu, "Menu", "/Users/joseph/code/stuff/next-app/components/Sidebar.js");
  reactHotLoader.register(_default, "default", "/Users/joseph/code/stuff/next-app/components/Sidebar.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.c9ada2fda03b3581a6c9.hot-update.js.map