"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/navbar.tsx":
/*!*******************************!*\
  !*** ./components/navbar.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Navbar\": function() { return /* binding */ Navbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _this = undefined;\nvar Navbar = function(props) {\n    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"flex flex-wrap justify-between items-center\",\n        __source: {\n            fileName: \"/Users/sanw/Projects/next-profile/nextjs-typescript-tailwind/components/navbar.tsx\",\n            lineNumber: 11,\n            columnNumber: 3\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                __source: {\n                    fileName: \"/Users/sanw/Projects/next-profile/nextjs-typescript-tailwind/components/navbar.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 5\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/\",\n                    __source: {\n                        fileName: \"/Users/sanw/Projects/next-profile/nextjs-typescript-tailwind/components/navbar.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 7\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                        __source: {\n                            fileName: \"/Users/sanw/Projects/next-profile/nextjs-typescript-tailwind/components/navbar.tsx\",\n                            lineNumber: 14,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: props.logo\n                    })\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"nav\", {\n                className: \"mt-0\",\n                __source: {\n                    fileName: \"/Users/sanw/Projects/next-profile/nextjs-typescript-tailwind/components/navbar.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 5\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"ul\", {\n                    className: \"navbar flex items-center font-medium text-xl text-gray-800\",\n                    __source: {\n                        fileName: \"/Users/sanw/Projects/next-profile/nextjs-typescript-tailwind/components/navbar.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 7\n                    },\n                    __self: _this,\n                    children: props.children\n                })\n            })\n        ]\n    });\n};\n_c = Navbar;\n\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdmJhci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUU0Qjs7QUFPNUIsR0FBSyxDQUFDQyxNQUFNLEdBQUcsUUFBUSxDQUFQQyxLQUFtQjtrQkFDakMsTUFBTSx5REFBTEMsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBNkM7Ozs7Ozs7O2lGQUN6REQsQ0FBRzs7Ozs7OzsrRkFDREgsa0RBQUk7b0JBQUNLLElBQUksRUFBQyxDQUFHOzs7Ozs7O21HQUNYQyxDQUFDOzs7Ozs7O2tDQUFFSixLQUFLLENBQUNLLElBQUk7Ozs7aUZBSWpCQyxDQUFHO2dCQUFDSixTQUFTLEVBQUMsQ0FBTTs7Ozs7OzsrRkFDbEJLLENBQUU7b0JBQUNMLFNBQVMsRUFBQyxDQUE0RDs7Ozs7Ozs4QkFDdkVGLEtBQUssQ0FBQ1EsUUFBUTs7Ozs7O0tBVmpCVCxNQUFNO0FBZ0JNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbmF2YmFyLnRzeD83ZjBlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbnR5cGUgSU5hdmJhclByb3BzID0ge1xuICBsb2dvOiBSZWFjdE5vZGU7XG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG59O1xuXG5jb25zdCBOYXZiYXIgPSAocHJvcHM6IElOYXZiYXJQcm9wcykgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cbiAgICA8ZGl2PlxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgPGE+e3Byb3BzLmxvZ299PC9hPlxuICAgICAgPC9MaW5rPlxuICAgIDwvZGl2PlxuXG4gICAgPG5hdiBjbGFzc05hbWU9XCJtdC0wXCI+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyIGZsZXggaXRlbXMtY2VudGVyIGZvbnQtbWVkaXVtIHRleHQteGwgdGV4dC1ncmF5LTgwMFwiPlxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICA8L3VsPlxuICAgIDwvbmF2PlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCB7IE5hdmJhciB9O1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJOYXZiYXIiLCJwcm9wcyIsImRpdiIsImNsYXNzTmFtZSIsImhyZWYiLCJhIiwibG9nbyIsIm5hdiIsInVsIiwiY2hpbGRyZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/navbar.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.tsx\");\n/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/navbar */ \"./components/navbar.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction Homepage() {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                __source: {\n                    fileName: \"/Users/sanw/Projects/next-profile/nextjs-typescript-tailwind/pages/index.tsx\",\n                    lineNumber: 9,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                        __source: {\n                            fileName: \"/Users/sanw/Projects/next-profile/nextjs-typescript-tailwind/pages/index.tsx\",\n                            lineNumber: 10,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: \"Sanja Wetzel, Full Stack Web Developer\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\",\n                        __source: {\n                            fileName: \"/Users/sanw/Projects/next-profile/nextjs-typescript-tailwind/pages/index.tsx\",\n                            lineNumber: 11,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                __source: {\n                    fileName: \"/Users/sanw/Projects/next-profile/nextjs-typescript-tailwind/pages/index.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: \"Hello World\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                __source: {\n                    fileName: \"/Users/sanw/Projects/next-profile/nextjs-typescript-tailwind/pages/index.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                        className: \"text-center my-24 font-black tracking-tight text-6xl\",\n                        __source: {\n                            fileName: \"/Users/sanw/Projects/next-profile/nextjs-typescript-tailwind/pages/index.tsx\",\n                            lineNumber: 15,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: \"Welcome to my website\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"h2\", {\n                        className: \"title\",\n                        __source: {\n                            fileName: \"/Users/sanw/Projects/next-profile/nextjs-typescript-tailwind/pages/index.tsx\",\n                            lineNumber: 18,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: [\n                            \"Read\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/posts/first-post\",\n                                __source: {\n                                    fileName: \"/Users/sanw/Projects/next-profile/nextjs-typescript-tailwind/pages/index.tsx\",\n                                    lineNumber: 20,\n                                    columnNumber: 11\n                                },\n                                __self: this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                    __source: {\n                                        fileName: \"/Users/sanw/Projects/next-profile/nextjs-typescript-tailwind/pages/index.tsx\",\n                                        lineNumber: 21,\n                                        columnNumber: 13\n                                    },\n                                    __self: this,\n                                    children: \"this page!\"\n                                })\n                            })\n                        ]\n                    })\n                ]\n            })\n        ]\n    }));\n}\n_c = Homepage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Homepage);\nvar _c;\n$RefreshReg$(_c, \"Homepage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBNEI7QUFDQTtBQUNhO0FBQ0E7U0FFaENJLFFBQVEsR0FBRyxDQUFDO0lBQ25CLE1BQU07O2tGQUVESixrREFBSTs7Ozs7Ozs7eUZBQ0ZLLENBQUs7Ozs7Ozs7a0NBQUMsQ0FBc0M7O3lGQUM1Q0MsQ0FBSTt3QkFBQ0MsR0FBRyxFQUFDLENBQU07d0JBQUNDLElBQUksRUFBQyxDQUFjOzs7Ozs7Ozs7O2lGQUVyQ0wsMERBQU07Ozs7Ozs7MEJBQUMsQ0FBVzs7a0ZBQ2xCRCwwREFBTTs7Ozs7Ozs7eUZBQ0pPLENBQUU7d0JBQUNDLFNBQVMsRUFBQyxDQUFzRDs7Ozs7OztrQ0FBQyxDQUVyRTs7MEZBQ0NDLENBQUU7d0JBQUNELFNBQVMsRUFBQyxDQUFPOzs7Ozs7Ozs0QkFBQyxDQUNoQjs0QkFBQyxDQUFHO2lHQUNQVCxrREFBSTtnQ0FBQ08sSUFBSSxFQUFDLENBQW1COzs7Ozs7OytHQUMzQkksQ0FBQzs7Ozs7Ozs4Q0FBQyxDQUFVOzs7Ozs7Ozs7QUFNekIsQ0FBQztLQXJCUVIsUUFBUTtBQXVCakIsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dFwiO1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9uYXZiYXJcIjtcblxuZnVuY3Rpb24gSG9tZXBhZ2UoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+U2FuamEgV2V0emVsLCBGdWxsIFN0YWNrIFdlYiBEZXZlbG9wZXI8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8TmF2YmFyPkhlbGxvIFdvcmxkPC9OYXZiYXI+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXktMjQgZm9udC1ibGFjayB0cmFja2luZy10aWdodCB0ZXh0LTZ4bFwiPlxuICAgICAgICAgIFdlbGNvbWUgdG8gbXkgd2Vic2l0ZVxuICAgICAgICA8L2gxPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICBSZWFke1wiIFwifVxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcG9zdHMvZmlyc3QtcG9zdFwiPlxuICAgICAgICAgICAgPGE+dGhpcyBwYWdlITwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvaDI+XG4gICAgICA8L0xheW91dD5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZXBhZ2U7XG4iXSwibmFtZXMiOlsiSGVhZCIsIkxpbmsiLCJMYXlvdXQiLCJOYXZiYXIiLCJIb21lcGFnZSIsInRpdGxlIiwibGluayIsInJlbCIsImhyZWYiLCJoMSIsImNsYXNzTmFtZSIsImgyIiwiYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});