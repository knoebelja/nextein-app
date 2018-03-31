webpackHotUpdate(3,{

/***/ "./pages/docs.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components_no_parser__ = __webpack_require__("./node_modules/styled-components/dist/styled-components-no-parser.browser.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nextein_post__ = __webpack_require__("./node_modules/nextein/post.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nextein_post___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_nextein_post__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nextein_posts__ = __webpack_require__("./node_modules/nextein/posts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nextein_posts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_nextein_posts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Menu__ = __webpack_require__("./components/Menu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Sidebar__ = __webpack_require__("./components/Sidebar.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = "/Users/joseph/code/stuff/next-app/pages/docs.js";


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();








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
        "Doc: ",
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

var Title = __WEBPACK_IMPORTED_MODULE_1_styled_components_no_parser__["a" /* default */].h1.withConfig({
  displayName: "docs__Title",
  componentId: "s1ooiha0-0"
})([["{font-size:2em;color:tomato;border:2px dotted tomato;}"]]);

var Body = __WEBPACK_IMPORTED_MODULE_1_styled_components_no_parser__["a" /* default */].div.withConfig({
  displayName: "docs__Body",
  componentId: "s1ooiha0-1"
})([]);

var _default = docs;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(withDocs, "withDocs", "/Users/joseph/code/stuff/next-app/pages/docs.js");
  reactHotLoader.register(docs, "docs", "/Users/joseph/code/stuff/next-app/pages/docs.js");
  reactHotLoader.register(Title, "Title", "/Users/joseph/code/stuff/next-app/pages/docs.js");
  reactHotLoader.register(Body, "Body", "/Users/joseph/code/stuff/next-app/pages/docs.js");
  reactHotLoader.register(_default, "default", "/Users/joseph/code/stuff/next-app/pages/docs.js");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/docs")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.094b5dc45e0215a04bf7.hot-update.js.map