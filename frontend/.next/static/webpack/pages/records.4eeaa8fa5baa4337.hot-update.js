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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _this = undefined;\nvar Item = function(param) {\n    var value = param.value, onClick = param.onClick;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            onClick: function() {\n                return onClick(value);\n            },\n            className: \"inline-flex items-center justify-center px-5 py-3 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow\",\n            children: value\n        }, void 0, false, {\n            fileName: \"/app/component/table/pagination.tsx\",\n            lineNumber: 20,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/app/component/table/pagination.tsx\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, _this));\n};\n_c = Item;\nvar ActiveItem = function(param) {\n    var value = param.value, onClick = param.onClick;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: \"block h-8 w-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            onClick: function() {\n                return onClick(value);\n            },\n            className: \"ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700\",\n            children: value\n        }, void 0, false, {\n            fileName: \"/app/component/table/pagination.tsx\",\n            lineNumber: 35,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/app/component/table/pagination.tsx\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, _this));\n};\n_c1 = ActiveItem;\nvar Pagination = function(param) {\n    var currentPage = param.currentPage, totalItems = param.totalItems, totalPages = param.totalPages, onSelect = param.onSelect;\n    var _this1 = _this;\n    console.log({\n        totalItems: totalItems,\n        totalPages: totalPages,\n        currentPage: currentPage\n    });\n    var pages = Array(totalPages).fill('page');\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n        className: \"flex justify-center gap-1 text-xs font-medium\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    onClick: function() {\n                        return alert('implementation pending Pagination component');\n                    },\n                    className: \"ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"sr-only\",\n                            children: \"Prev Page\"\n                        }, void 0, false, {\n                            fileName: \"/app/component/table/pagination.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: '<'\n                        }, void 0, false, {\n                            fileName: \"/app/component/table/pagination.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 20\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/app/component/table/pagination.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/app/component/table/pagination.tsx\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, _this),\n            pages.map(function(_v, page) {\n                var value = page + 1;\n                console.log('value');\n                return value === currentPage ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ActiveItem, {\n                    onClick: onSelect,\n                    value: value\n                }, page, false, {\n                    fileName: \"/app/component/table/pagination.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 48\n                }, _this1) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n                    onClick: onSelect,\n                    value: value\n                }, page, false, {\n                    fileName: \"/app/component/table/pagination.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 109\n                }, _this1);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    onClick: function() {\n                        return alert('implementation pending Pagination component');\n                    },\n                    className: \"ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"sr-only\",\n                            children: \"Next Page\"\n                        }, void 0, false, {\n                            fileName: \"/app/component/table/pagination.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: '>'\n                        }, void 0, false, {\n                            fileName: \"/app/component/table/pagination.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/app/component/table/pagination.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/app/component/table/pagination.tsx\",\n                lineNumber: 71,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/app/component/table/pagination.tsx\",\n        lineNumber: 54,\n        columnNumber: 9\n    }, _this));\n};\n_c2 = Pagination;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pagination);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Item\");\n$RefreshReg$(_c1, \"ActiveItem\");\n$RefreshReg$(_c2, \"Pagination\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b24udHN4PzRlYTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcblxuXG5pbnRlcmZhY2UgUGFnaW5hdGlvblR5cGUge1xuICAgIHRvdGFsSXRlbXM6IG51bWJlclxuICAgIHRvdGFsUGFnZXM6IG51bWJlclxuICAgIGN1cnJlbnRQYWdlOiBudW1iZXJcbiAgICBvblNlbGVjdDogKHBhZ2U6IG51bWJlcikgPT4gdm9pZFxufVxuXG5cbmludGVyZmFjZSBQYWdJdGVtVHlwZSB7XG4gICAgdmFsdWU6IG51bWJlcixcbiAgICBvbkNsaWNrOiAobnVtYmVyOiBudW1iZXIpID0+IHZvaWRcbn1cblxuY29uc3QgSXRlbTogUmVhY3QuRkM8UGFnSXRlbVR5cGU+ID0gKHsgdmFsdWUsIG9uQ2xpY2sgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DbGljayh2YWx1ZSl9XG4gICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweC01IHB5LTMgYmctd2hpdGUgaG92ZXI6YmctZ3JheS0xMDAgdGV4dC1ncmF5LTgwMCBmb250LXNlbWlib2xkIHB5LTIgcHgtNCBib3JkZXIgYm9yZGVyLWdyYXktNDAwIHJvdW5kZWQgc2hhZG93XCI+XG4gICAgICAgICAgICAgICAge3ZhbHVlfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuICAgIClcbn1cblxuY29uc3QgQWN0aXZlSXRlbTogUmVhY3QuRkM8UGFnSXRlbVR5cGU+ID0gKHsgdmFsdWUsIG9uQ2xpY2sgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxsaVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBoLTggdy04IHJvdW5kZWQgYm9yZGVyLWJsdWUtNjAwIGJnLWJsdWUtNjAwIHRleHQtY2VudGVyIGxlYWRpbmctOCB0ZXh0LXdoaXRlXCJcbiAgICAgICAgPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2sodmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J21sLTggd2hpdGVzcGFjZS1ub3dyYXAgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB4LTQgcHktMiBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IHJvdW5kZWQtbWQgc2hhZG93LXNtIHRleHQtYmFzZSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlIGJnLWluZGlnby02MDAgaG92ZXI6YmctaW5kaWdvLTcwMCdcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHt2YWx1ZX1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICA8L2xpPlxuICAgIClcbn1cblxuXG5jb25zdCBQYWdpbmF0aW9uOiBSZWFjdC5GQzxQYWdpbmF0aW9uVHlwZT4gPSAoeyBjdXJyZW50UGFnZSwgdG90YWxJdGVtcywgdG90YWxQYWdlcywgb25TZWxlY3QgfSkgPT4ge1xuXG4gICAgY29uc29sZS5sb2coeyB0b3RhbEl0ZW1zLCB0b3RhbFBhZ2VzLCBjdXJyZW50UGFnZSB9KVxuICAgIGNvbnN0IHBhZ2VzID0gQXJyYXkodG90YWxQYWdlcykuZmlsbCgncGFnZScpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8b2wgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBnYXAtMSB0ZXh0LXhzIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYWxlcnQoJ2ltcGxlbWVudGF0aW9uIHBlbmRpbmcgUGFnaW5hdGlvbiBjb21wb25lbnQnKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdtbC04IHdoaXRlc3BhY2Utbm93cmFwIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweC00IHB5LTIgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCByb3VuZGVkLW1kIHNoYWRvdy1zbSB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gdGV4dC13aGl0ZSBiZy1pbmRpZ28tNjAwIGhvdmVyOmJnLWluZGlnby03MDAnXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+UHJldiBQYWdlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgIDxwPnsnPCd9PC9wPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgIHtwYWdlcy5tYXAoKF92LCBwYWdlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBwYWdlICsgMVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd2YWx1ZScpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlID09PSBjdXJyZW50UGFnZSA/IDxBY3RpdmVJdGVtIG9uQ2xpY2s9e29uU2VsZWN0fSBrZXk9e3BhZ2V9IHZhbHVlPXt2YWx1ZX0gLz4gOiA8SXRlbSBrZXk9e3BhZ2V9IG9uQ2xpY2s9e29uU2VsZWN0fSB2YWx1ZT17dmFsdWV9IC8+XG4gICAgICAgICAgICB9KX1cblxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFsZXJ0KCdpbXBsZW1lbnRhdGlvbiBwZW5kaW5nIFBhZ2luYXRpb24gY29tcG9uZW50Jyl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbWwtOCB3aGl0ZXNwYWNlLW5vd3JhcCBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHgtNCBweS0yIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgcm91bmRlZC1tZCBzaGFkb3ctc20gdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHRleHQtd2hpdGUgYmctaW5kaWdvLTYwMCBob3ZlcjpiZy1pbmRpZ28tNzAwJ1xuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPk5leHQgUGFnZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHA+eyc+J308L3A+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgPC9vbD5cblxuICAgIClcblxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSXRlbSIsInZhbHVlIiwib25DbGljayIsImxpIiwiYSIsImNsYXNzTmFtZSIsIkFjdGl2ZUl0ZW0iLCJQYWdpbmF0aW9uIiwiY3VycmVudFBhZ2UiLCJ0b3RhbEl0ZW1zIiwidG90YWxQYWdlcyIsIm9uU2VsZWN0IiwiY29uc29sZSIsImxvZyIsInBhZ2VzIiwiQXJyYXkiLCJmaWxsIiwib2wiLCJhbGVydCIsInNwYW4iLCJwIiwibWFwIiwiX3YiLCJwYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./component/table/pagination.tsx\n");

/***/ })

});