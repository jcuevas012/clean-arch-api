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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Item = function(param) {\n    var value = param.value, onClick = param.onClick;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            onClick: function() {\n                return onClick(value);\n            },\n            className: \"ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow text-base font-medium text-black bg-white hover:bg-indigo-700\",\n            children: value\n        }, void 0, false, {\n            fileName: \"/app/component/table/pagination.tsx\",\n            lineNumber: 20,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/app/component/table/pagination.tsx\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, _this));\n};\n_c = Item;\nvar ActiveItem = function(param) {\n    var value = param.value, onClick = param.onClick;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            onClick: function() {\n                return onClick(value);\n            },\n            className: \"ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700\",\n            children: value\n        }, void 0, false, {\n            fileName: \"/app/component/table/pagination.tsx\",\n            lineNumber: 32,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/app/component/table/pagination.tsx\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, _this));\n};\n_c1 = ActiveItem;\nvar Pagination = function(param) {\n    var currentPage = param.currentPage, totalItems = param.totalItems, totalPages = param.totalPages, onSelect = param.onSelect;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(currentPage), _currentPage = ref[0], setCurrentPage = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setCurrentPage(currentPage);\n    }, [\n        currentPage\n    ]);\n    console.log({\n        totalItems: totalItems,\n        totalPages: totalPages,\n        currentPage: currentPage,\n        _currentPage: _currentPage\n    });\n    var pages = Array(totalPages).fill('page');\n    var onArrowClick = function(type) {\n        if (type === 'increase' && _currentPage < totalPages) {\n            setCurrentPage(currentPage++);\n        } else {\n            console.log('decrease ', currentPage);\n            var value = currentPage--;\n            setCurrentPage(value);\n        }\n        console.log('dd', _currentPage);\n        onSelect(_currentPage);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n        className: \"flex justify-center gap-1 text-xs font-medium py-3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    onClick: function() {\n                        return onArrowClick('decrease');\n                    },\n                    className: \"ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow text-base font-medium text-black bg-white hover:bg-indigo-700\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"sr-only\",\n                            children: \"Prev Page\"\n                        }, void 0, false, {\n                            fileName: \"/app/component/table/pagination.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            id: \"decrease\",\n                            children: [\n                                \" \",\n                                '<'\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/app/component/table/pagination.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/app/component/table/pagination.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/app/component/table/pagination.tsx\",\n                lineNumber: 71,\n                columnNumber: 13\n            }, _this),\n            pages.map(function(_v, page) {\n                var value = page + 1;\n                console.log('value');\n                return value === _currentPage ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ActiveItem, {\n                    onClick: onSelect,\n                    value: value\n                }, page, false, {\n                    fileName: \"/app/component/table/pagination.tsx\",\n                    lineNumber: 84,\n                    columnNumber: 49\n                }, _this1) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n                    onClick: onSelect,\n                    value: value\n                }, page, false, {\n                    fileName: \"/app/component/table/pagination.tsx\",\n                    lineNumber: 84,\n                    columnNumber: 110\n                }, _this1);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    onClick: function() {\n                        return onArrowClick('increase');\n                    },\n                    className: \"ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow text-base font-medium text-black bg-white hover:bg-indigo-700\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"sr-only\",\n                            children: \"Next Page\"\n                        }, void 0, false, {\n                            fileName: \"/app/component/table/pagination.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            id: \"increase\",\n                            children: '>'\n                        }, void 0, false, {\n                            fileName: \"/app/component/table/pagination.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/app/component/table/pagination.tsx\",\n                    lineNumber: 88,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/app/component/table/pagination.tsx\",\n                lineNumber: 87,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/app/component/table/pagination.tsx\",\n        lineNumber: 70,\n        columnNumber: 9\n    }, _this));\n};\n_s(Pagination, \"O5iT6IDlVUSeigPtUc/RdvSJNyg=\");\n_c2 = Pagination;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pagination);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Item\");\n$RefreshReg$(_c1, \"ActiveItem\");\n$RefreshReg$(_c2, \"Pagination\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7Z0JBQ3RCLEdBQUssQ0FBQzFCLEtBQUssR0FBRzBCLElBQUksR0FBRyxDQUFDO2dCQUN0QmIsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBTztnQkFDbkIsTUFBTSxDQUFDZCxLQUFLLEtBQUtXLFlBQVksK0VBQUlOLFVBQVU7b0JBQUNKLE9BQU8sRUFBRVMsUUFBUTtvQkFBYVYsS0FBSyxFQUFFQSxLQUFLO21CQUFsQjBCLElBQUk7Ozs7eUdBQXNCM0IsSUFBSTtvQkFBWUUsT0FBTyxFQUFFUyxRQUFRO29CQUFFVixLQUFLLEVBQUVBLEtBQUs7bUJBQXJDMEIsSUFBSTs7Ozs7WUFDaEgsQ0FBQzt3RkFFQXhCLENBQUU7c0dBQ0VDLENBQUM7b0JBQ0VGLE9BQU8sRUFBRSxRQUFRO3dCQUFGaUIsTUFBTSxDQUFOQSxZQUFZLENBQUMsQ0FBVTs7b0JBQ3RDZCxTQUFTLEVBQUMsQ0FBb0w7O29HQUU3TGlCLENBQUk7NEJBQUNqQixTQUFTLEVBQUMsQ0FBUztzQ0FBQyxDQUFTOzs7Ozs7b0dBQ2xDa0IsQ0FBQzs0QkFBQ0MsRUFBRSxFQUFDLENBQVU7c0NBQUcsQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTMUMsQ0FBQztHQXpES2pCLFVBQVU7TUFBVkEsVUFBVTtBQTJEaEIsK0RBQWVBLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L3RhYmxlL3BhZ2luYXRpb24udHN4PzRlYTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuXG5cbmludGVyZmFjZSBQYWdpbmF0aW9uVHlwZSB7XG4gICAgdG90YWxJdGVtczogbnVtYmVyXG4gICAgdG90YWxQYWdlczogbnVtYmVyXG4gICAgY3VycmVudFBhZ2U6IG51bWJlclxuICAgIG9uU2VsZWN0OiAocGFnZTogbnVtYmVyKSA9PiB2b2lkXG59XG5cblxuaW50ZXJmYWNlIFBhZ0l0ZW1UeXBlIHtcbiAgICB2YWx1ZTogbnVtYmVyLFxuICAgIG9uQ2xpY2s6IChudW1iZXI6IG51bWJlcikgPT4gdm9pZFxufVxuXG5jb25zdCBJdGVtOiBSZWFjdC5GQzxQYWdJdGVtVHlwZT4gPSAoeyB2YWx1ZSwgb25DbGljayB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKHZhbHVlKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J21sLTggd2hpdGVzcGFjZS1ub3dyYXAgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB4LTQgcHktMiBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IHJvdW5kZWQtbWQgc2hhZG93IHRleHQtYmFzZSBmb250LW1lZGl1bSB0ZXh0LWJsYWNrIGJnLXdoaXRlIGhvdmVyOmJnLWluZGlnby03MDAnPlxuICAgICAgICAgICAgICAgIHt2YWx1ZX1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICApXG59XG5cbmNvbnN0IEFjdGl2ZUl0ZW06IFJlYWN0LkZDPFBhZ0l0ZW1UeXBlPiA9ICh7IHZhbHVlLCBvbkNsaWNrIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2sodmFsdWUpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbWwtOCB3aGl0ZXNwYWNlLW5vd3JhcCBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHgtNCBweS0yIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgcm91bmRlZC1tZCBzaGFkb3ctc20gdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHRleHQtd2hpdGUgYmctaW5kaWdvLTYwMCAgaG92ZXI6YmctaW5kaWdvLTcwMCdcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dmFsdWV9XG4gICAgICAgICAgICA8L2E+XG5cblxuICAgICAgICA8L2xpPlxuICAgIClcbn1cblxuXG5jb25zdCBQYWdpbmF0aW9uOiBSZWFjdC5GQzxQYWdpbmF0aW9uVHlwZT4gPSAoeyBjdXJyZW50UGFnZSwgdG90YWxJdGVtcywgdG90YWxQYWdlcywgb25TZWxlY3QgfSkgPT4ge1xuXG4gICAgY29uc3QgW19jdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUoY3VycmVudFBhZ2UpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRDdXJyZW50UGFnZShjdXJyZW50UGFnZSlcbiAgICB9LCBbY3VycmVudFBhZ2VdKVxuXG4gICAgY29uc29sZS5sb2coeyB0b3RhbEl0ZW1zLCB0b3RhbFBhZ2VzLCBjdXJyZW50UGFnZSwgX2N1cnJlbnRQYWdlIH0pXG4gICAgY29uc3QgcGFnZXMgPSBBcnJheSh0b3RhbFBhZ2VzKS5maWxsKCdwYWdlJylcblxuICAgIGNvbnN0IG9uQXJyb3dDbGljayA9ICh0eXBlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgXG4gICAgICAgIGlmICh0eXBlID09PSAnaW5jcmVhc2UnICYmIF9jdXJyZW50UGFnZSA8IHRvdGFsUGFnZXMpIHtcbiAgICAgICAgICAgIHNldEN1cnJlbnRQYWdlKGN1cnJlbnRQYWdlKyspXG4gICAgICAgIH0gZWxzZSAge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2RlY3JlYXNlICcsIGN1cnJlbnRQYWdlKVxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBjdXJyZW50UGFnZS0tXG4gICAgICAgICAgICBzZXRDdXJyZW50UGFnZSh2YWx1ZSlcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZygnZGQnLCBfY3VycmVudFBhZ2UpXG4gICAgICAgIG9uU2VsZWN0KF9jdXJyZW50UGFnZSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8b2wgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBnYXAtMSB0ZXh0LXhzIGZvbnQtbWVkaXVtIHB5LTNcIj5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkFycm93Q2xpY2soJ2RlY3JlYXNlJyl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbWwtOCB3aGl0ZXNwYWNlLW5vd3JhcCBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHgtNCBweS0yIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgcm91bmRlZC1tZCBzaGFkb3cgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHRleHQtYmxhY2sgYmctd2hpdGUgaG92ZXI6YmctaW5kaWdvLTcwMCdcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5QcmV2IFBhZ2U8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxwIGlkPVwiZGVjcmVhc2VcIj4geyc8J308L3A+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAge3BhZ2VzLm1hcCgoX3YsIHBhZ2UpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHBhZ2UgKyAxXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3ZhbHVlJylcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgPT09IF9jdXJyZW50UGFnZSA/IDxBY3RpdmVJdGVtIG9uQ2xpY2s9e29uU2VsZWN0fSBrZXk9e3BhZ2V9IHZhbHVlPXt2YWx1ZX0gLz4gOiA8SXRlbSBrZXk9e3BhZ2V9IG9uQ2xpY2s9e29uU2VsZWN0fSB2YWx1ZT17dmFsdWV9IC8+XG4gICAgICAgICAgICB9KX1cblxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQXJyb3dDbGljaygnaW5jcmVhc2UnKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdtbC04IHdoaXRlc3BhY2Utbm93cmFwIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweC00IHB5LTIgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCByb3VuZGVkLW1kIHNoYWRvdyB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gdGV4dC1ibGFjayBiZy13aGl0ZSBob3ZlcjpiZy1pbmRpZ28tNzAwJ1xuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPk5leHQgUGFnZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHAgaWQ9XCJpbmNyZWFzZVwiID57Jz4nfTwvcD5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICA8L29sPlxuXG4gICAgKVxuXG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0aW9uXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkl0ZW0iLCJ2YWx1ZSIsIm9uQ2xpY2siLCJsaSIsImEiLCJjbGFzc05hbWUiLCJBY3RpdmVJdGVtIiwiUGFnaW5hdGlvbiIsImN1cnJlbnRQYWdlIiwidG90YWxJdGVtcyIsInRvdGFsUGFnZXMiLCJvblNlbGVjdCIsIl9jdXJyZW50UGFnZSIsInNldEN1cnJlbnRQYWdlIiwiY29uc29sZSIsImxvZyIsInBhZ2VzIiwiQXJyYXkiLCJmaWxsIiwib25BcnJvd0NsaWNrIiwidHlwZSIsIm9sIiwic3BhbiIsInAiLCJpZCIsIm1hcCIsIl92IiwicGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./component/table/pagination.tsx\n");

/***/ })

});