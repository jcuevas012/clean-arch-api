"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/records",{

/***/ "./component/table/pagination.tsx":
/*!****************************************!*\
  !*** ./component/table/pagination.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _this = undefined;\nvar Item = function(param) {\n    var value = param.value, onClick = param.onClick;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            onClick: function() {\n                return onClick(value);\n            },\n            className: \"block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900\",\n            children: value\n        }, void 0, false, {\n            fileName: \"/app/component/table/pagination.tsx\",\n            lineNumber: 19,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/app/component/table/pagination.tsx\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, _this));\n};\n_c = Item;\nvar ActiveItem = function(param) {\n    var value = param.value, onClick = param.onClick;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        onClick: function() {\n            return onClick(value);\n        },\n        className: \"block h-8 w-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white\",\n        children: value\n    }, void 0, false, {\n        fileName: \"/app/component/table/pagination.tsx\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, _this));\n};\n_c1 = ActiveItem;\nvar Pagination = function(param) {\n    var currentPage = param.currentPage, totalItems = param.totalItems, totalPages = param.totalPages;\n    var _this1 = _this;\n    var pages = Array(totalPages).fill('page');\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n        className: \"flex justify-center gap-1 text-xs font-medium\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"#\",\n                    className: \"inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"sr-only\",\n                            children: \"Prev Page\"\n                        }, void 0, false, {\n                            fileName: \"/app/component/table/pagination.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 17\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            className: \"h-3 w-3\",\n                            viewBox: \"0 0 20 20\",\n                            fill: \"currentColor\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                fillRule: \"evenodd\",\n                                d: \"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z\",\n                                clipRule: \"evenodd\"\n                            }, void 0, false, {\n                                fileName: \"/app/component/table/pagination.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 21\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/app/component/table/pagination.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 17\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/app/component/table/pagination.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/app/component/table/pagination.tsx\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, _this),\n            pages.map(function(_v, page) {\n                var value = page + 1;\n                return page === currentPage ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ActiveItem, {\n                    value: value\n                }, page, false, {\n                    fileName: \"/app/component/table/pagination.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 43\n                }, _this1) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n                    value: value\n                }, page, false, {\n                    fileName: \"/app/component/table/pagination.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 84\n                }, _this1);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"#\",\n                    className: \"inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"sr-only\",\n                            children: \"Next Page\"\n                        }, void 0, false, {\n                            fileName: \"/app/component/table/pagination.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 17\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            className: \"h-3 w-3\",\n                            viewBox: \"0 0 20 20\",\n                            fill: \"currentColor\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                fillRule: \"evenodd\",\n                                d: \"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z\",\n                                clipRule: \"evenodd\"\n                            }, void 0, false, {\n                                fileName: \"/app/component/table/pagination.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 21\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/app/component/table/pagination.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 17\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/app/component/table/pagination.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/app/component/table/pagination.tsx\",\n                lineNumber: 75,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/app/component/table/pagination.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, _this));\n};\n_c2 = Pagination;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pagination);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Item\");\n$RefreshReg$(_c1, \"ActiveItem\");\n$RefreshReg$(_c2, \"Pagination\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZS9wYWdpbmF0aW9uLnRzeD80ZWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyAgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuXG5cbmludGVyZmFjZSBQYWdpbmF0aW9uVHlwZSB7XG4gIHRvdGFsSXRlbXM6IG51bWJlciBcbiAgdG90YWxQYWdlczogbnVtYmVyIFxuICBjdXJyZW50UGFnZTogbnVtYmVyXG59XG5cblxuaW50ZXJmYWNlIFBhZ0l0ZW1UeXBlIHsgXG4gICAgdmFsdWU6IG51bWJlciwgXG4gICAgb25DbGljazogKG51bWJlcjogbnVtYmVyKSA9PiB2b2lkIFxufVxuXG5jb25zdCBJdGVtOiBSZWFjdC5GQzxQYWdJdGVtVHlwZT4gPSAoeyB2YWx1ZSwgb25DbGljayB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKHZhbHVlKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBoLTggdy04IHJvdW5kZWQgYm9yZGVyIGJvcmRlci1ncmF5LTEwMCBiZy13aGl0ZSB0ZXh0LWNlbnRlciBsZWFkaW5nLTggdGV4dC1ncmF5LTkwMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3ZhbHVlfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuICAgIClcbn1cblxuY29uc3QgQWN0aXZlSXRlbTogUmVhY3QuRkM8UGFnSXRlbVR5cGU+ID0gKHsgdmFsdWUsIG9uQ2xpY2sgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxsaVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DbGljayh2YWx1ZSl9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBoLTggdy04IHJvdW5kZWQgYm9yZGVyLWJsdWUtNjAwIGJnLWJsdWUtNjAwIHRleHQtY2VudGVyIGxlYWRpbmctOCB0ZXh0LXdoaXRlXCJcbiAgICAgICAgPlxuICAgICAgICAgICAge3ZhbHVlfVxuICAgICAgICA8L2xpPlxuICAgIClcbn1cblxuXG5jb25zdCBQYWdpbmF0aW9uOiBSZWFjdC5GQzxQYWdpbmF0aW9uVHlwZT49ICh7IGN1cnJlbnRQYWdlLCB0b3RhbEl0ZW1zLCB0b3RhbFBhZ2VzfSkgPT4ge1xuXG5cbiAgICBjb25zdCBwYWdlcyA9IEFycmF5KHRvdGFsUGFnZXMpLmZpbGwoJ3BhZ2UnKVxuXG4gICAgIHJldHVybiAoXG4gICAgPG9sIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgZ2FwLTEgdGV4dC14cyBmb250LW1lZGl1bVwiPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBoLTggdy04IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkIGJvcmRlciBib3JkZXItZ3JheS0xMDAgYmctd2hpdGUgdGV4dC1ncmF5LTkwMCBydGw6cm90YXRlLTE4MFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPlByZXYgUGFnZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTMgdy0zXCJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTEyLjcwNyA1LjI5M2ExIDEgMCAwMTAgMS40MTRMOS40MTQgMTBsMy4yOTMgMy4yOTNhMSAxIDAgMDEtMS40MTQgMS40MTRsLTQtNGExIDEgMCAwMTAtMS40MTRsNC00YTEgMSAwIDAxMS40MTQgMHpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cblxuICAgICAgICB7cGFnZXMubWFwKChfdiwgcGFnZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBwYWdlICsgMVxuICAgICAgICAgICAgcmV0dXJuIHBhZ2UgPT09IGN1cnJlbnRQYWdlID8gPEFjdGl2ZUl0ZW0ga2V5PXtwYWdlfSB2YWx1ZT17dmFsdWV9Lz4gOiA8SXRlbSBrZXk9e3BhZ2V9IHZhbHVlPXt2YWx1ZX0gLz5cbiAgICAgICAgfSl9XG5cbiBcbiAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaC04IHctOCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZCBib3JkZXIgYm9yZGVyLWdyYXktMTAwIGJnLXdoaXRlIHRleHQtZ3JheS05MDAgcnRsOnJvdGF0ZS0xODBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5OZXh0IFBhZ2U8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC0zIHctM1wiXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk03LjI5MyAxNC43MDdhMSAxIDAgMDEwLTEuNDE0TDEwLjU4NiAxMCA3LjI5MyA2LjcwN2ExIDEgMCAwMTEuNDE0LTEuNDE0bDQgNGExIDEgMCAwMTAgMS40MTRsLTQgNGExIDEgMCAwMS0xLjQxNCAwelwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuICAgIDwvb2w+XG5cbiAgICApXG5cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2luYXRpb25cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkl0ZW0iLCJ2YWx1ZSIsIm9uQ2xpY2siLCJsaSIsImEiLCJjbGFzc05hbWUiLCJBY3RpdmVJdGVtIiwiUGFnaW5hdGlvbiIsImN1cnJlbnRQYWdlIiwidG90YWxJdGVtcyIsInRvdGFsUGFnZXMiLCJwYWdlcyIsIkFycmF5IiwiZmlsbCIsIm9sIiwiaHJlZiIsInNwYW4iLCJzdmciLCJ4bWxucyIsInZpZXdCb3giLCJwYXRoIiwiZmlsbFJ1bGUiLCJkIiwiY2xpcFJ1bGUiLCJtYXAiLCJfdiIsInBhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./component/table/pagination.tsx\n");

/***/ })

});