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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Item = function(param) {\n    var value = param.value, onClick = param.onClick;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            onClick: function() {\n                return onClick(value);\n            },\n            className: \"ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow text-base font-medium text-black bg-white hover:bg-indigo-700\",\n            children: value\n        }, void 0, false, {\n            fileName: \"/app/component/table/pagination.tsx\",\n            lineNumber: 20,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/app/component/table/pagination.tsx\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, _this));\n};\n_c = Item;\nvar ActiveItem = function(param) {\n    var value = param.value, onClick = param.onClick;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            onClick: function() {\n                return onClick(value);\n            },\n            className: \"ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700\",\n            children: value\n        }, void 0, false, {\n            fileName: \"/app/component/table/pagination.tsx\",\n            lineNumber: 32,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/app/component/table/pagination.tsx\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, _this));\n};\n_c1 = ActiveItem;\nvar Pagination = function(param1) {\n    var currentPage = param1.currentPage, totalItems = param1.totalItems, totalPages = param1.totalPages, onSelect = param1.onSelect;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(currentPage), _currentPage = ref[0], setCurrentPage = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setCurrentPage(currentPage);\n    }, [\n        currentPage\n    ]);\n    console.log({\n        totalItems: totalItems,\n        totalPages: totalPages,\n        currentPage: currentPage,\n        _currentPage: _currentPage\n    });\n    var pages = Array(totalPages).fill('page');\n    var onArrowClick = function(param) {\n        var target = param.target;\n        console.log('------', target);\n        if (id === 'increase') {\n            setCurrentPage(currentPage++);\n        } else {\n            console.log('------ decres');\n            setCurrentPage(currentPage--);\n        }\n        console.log('------>>>', _currentPage);\n        onSelect(_currentPage);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n        className: \"flex justify-center gap-1 text-xs font-medium py-3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    id: \"increase\",\n                    onClick: onArrowClick,\n                    className: \"ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow text-base font-medium text-black bg-white hover:bg-indigo-700\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"sr-only\",\n                            children: \"Prev Page\"\n                        }, void 0, false, {\n                            fileName: \"/app/component/table/pagination.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: '<'\n                        }, void 0, false, {\n                            fileName: \"/app/component/table/pagination.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/app/component/table/pagination.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/app/component/table/pagination.tsx\",\n                lineNumber: 70,\n                columnNumber: 13\n            }, _this),\n            pages.map(function(_v, page) {\n                var value = page + 1;\n                console.log('value');\n                return value === _currentPage ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ActiveItem, {\n                    onClick: onSelect,\n                    value: value\n                }, page, false, {\n                    fileName: \"/app/component/table/pagination.tsx\",\n                    lineNumber: 84,\n                    columnNumber: 49\n                }, _this1) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n                    onClick: onSelect,\n                    value: value\n                }, page, false, {\n                    fileName: \"/app/component/table/pagination.tsx\",\n                    lineNumber: 84,\n                    columnNumber: 110\n                }, _this1);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    id: \"decrease\",\n                    onClick: onArrowClick,\n                    className: \"ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow text-base font-medium text-black bg-white hover:bg-indigo-700\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"sr-only\",\n                            children: \"Next Page\"\n                        }, void 0, false, {\n                            fileName: \"/app/component/table/pagination.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: '>'\n                        }, void 0, false, {\n                            fileName: \"/app/component/table/pagination.tsx\",\n                            lineNumber: 94,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/app/component/table/pagination.tsx\",\n                    lineNumber: 88,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/app/component/table/pagination.tsx\",\n                lineNumber: 87,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/app/component/table/pagination.tsx\",\n        lineNumber: 69,\n        columnNumber: 9\n    }, _this));\n};\n_s(Pagination, \"O5iT6IDlVUSeigPtUc/RdvSJNyg=\");\n_c2 = Pagination;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pagination);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Item\");\n$RefreshReg$(_c1, \"ActiveItem\");\n$RefreshReg$(_c2, \"Pagination\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YixPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFPO2dCQUNuQixNQUFNLENBQUNkLEtBQUssS0FBS1csWUFBWSwrRUFBSU4sVUFBVTtvQkFBQ0osT0FBTyxFQUFFUyxRQUFRO29CQUFhVixLQUFLLEVBQUVBLEtBQUs7bUJBQWxCMEIsSUFBSTs7Ozt5R0FBc0IzQixJQUFJO29CQUFZRSxPQUFPLEVBQUVTLFFBQVE7b0JBQUVWLEtBQUssRUFBRUEsS0FBSzttQkFBckMwQixJQUFJOzs7OztZQUNoSCxDQUFDO3dGQUVBeEIsQ0FBRTtzR0FDRUMsQ0FBQztvQkFDRWlCLEVBQUUsRUFBQyxDQUFVO29CQUNibkIsT0FBTyxFQUFFaUIsWUFBWTtvQkFDckJkLFNBQVMsRUFBQyxDQUFvTDs7b0dBRTdMa0IsQ0FBSTs0QkFBQ2xCLFNBQVMsRUFBQyxDQUFTO3NDQUFDLENBQVM7Ozs7OztvR0FDbENtQixDQUFDO3NDQUFFLENBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUzNCLENBQUM7R0ExREtqQixVQUFVO01BQVZBLFVBQVU7QUE0RGhCLCtEQUFlQSxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudC90YWJsZS9wYWdpbmF0aW9uLnRzeD80ZWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcblxuXG5pbnRlcmZhY2UgUGFnaW5hdGlvblR5cGUge1xuICAgIHRvdGFsSXRlbXM6IG51bWJlclxuICAgIHRvdGFsUGFnZXM6IG51bWJlclxuICAgIGN1cnJlbnRQYWdlOiBudW1iZXJcbiAgICBvblNlbGVjdDogKHBhZ2U6IG51bWJlcikgPT4gdm9pZFxufVxuXG5cbmludGVyZmFjZSBQYWdJdGVtVHlwZSB7XG4gICAgdmFsdWU6IG51bWJlcixcbiAgICBvbkNsaWNrOiAobnVtYmVyOiBudW1iZXIpID0+IHZvaWRcbn1cblxuY29uc3QgSXRlbTogUmVhY3QuRkM8UGFnSXRlbVR5cGU+ID0gKHsgdmFsdWUsIG9uQ2xpY2sgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DbGljayh2YWx1ZSl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdtbC04IHdoaXRlc3BhY2Utbm93cmFwIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweC00IHB5LTIgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCByb3VuZGVkLW1kIHNoYWRvdyB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gdGV4dC1ibGFjayBiZy13aGl0ZSBob3ZlcjpiZy1pbmRpZ28tNzAwJz5cbiAgICAgICAgICAgICAgICB7dmFsdWV9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgKVxufVxuXG5jb25zdCBBY3RpdmVJdGVtOiBSZWFjdC5GQzxQYWdJdGVtVHlwZT4gPSAoeyB2YWx1ZSwgb25DbGljayB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKHZhbHVlKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J21sLTggd2hpdGVzcGFjZS1ub3dyYXAgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB4LTQgcHktMiBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IHJvdW5kZWQtbWQgc2hhZG93LXNtIHRleHQtYmFzZSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlIGJnLWluZGlnby02MDAgIGhvdmVyOmJnLWluZGlnby03MDAnXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3ZhbHVlfVxuICAgICAgICAgICAgPC9hPlxuXG5cbiAgICAgICAgPC9saT5cbiAgICApXG59XG5cblxuY29uc3QgUGFnaW5hdGlvbjogUmVhY3QuRkM8UGFnaW5hdGlvblR5cGU+ID0gKHsgY3VycmVudFBhZ2UsIHRvdGFsSXRlbXMsIHRvdGFsUGFnZXMsIG9uU2VsZWN0IH0pID0+IHtcblxuICAgIGNvbnN0IFtfY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKGN1cnJlbnRQYWdlKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0Q3VycmVudFBhZ2UoY3VycmVudFBhZ2UpXG4gICAgfSwgW2N1cnJlbnRQYWdlXSlcblxuICAgIGNvbnNvbGUubG9nKHsgdG90YWxJdGVtcywgdG90YWxQYWdlcywgY3VycmVudFBhZ2UsIF9jdXJyZW50UGFnZSB9KVxuICAgIGNvbnN0IHBhZ2VzID0gQXJyYXkodG90YWxQYWdlcykuZmlsbCgncGFnZScpXG5cbiAgICBjb25zdCBvbkFycm93Q2xpY2sgPSAoeyB0YXJnZXQgfTogYW55KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0nLCB0YXJnZXQpXG4gICAgICAgIGlmIChpZCA9PT0gJ2luY3JlYXNlJykge1xuICAgICAgICAgICAgc2V0Q3VycmVudFBhZ2UoY3VycmVudFBhZ2UrKylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0gZGVjcmVzJylcbiAgICAgICAgICAgIHNldEN1cnJlbnRQYWdlKGN1cnJlbnRQYWdlLS0pXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLT4+PicsIF9jdXJyZW50UGFnZSlcbiAgICAgICAgb25TZWxlY3QoX2N1cnJlbnRQYWdlKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxvbCBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGdhcC0xIHRleHQteHMgZm9udC1tZWRpdW0gcHktM1wiPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiaW5jcmVhc2VcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkFycm93Q2xpY2t9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbWwtOCB3aGl0ZXNwYWNlLW5vd3JhcCBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHgtNCBweS0yIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgcm91bmRlZC1tZCBzaGFkb3cgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHRleHQtYmxhY2sgYmctd2hpdGUgaG92ZXI6YmctaW5kaWdvLTcwMCdcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5QcmV2IFBhZ2U8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxwPnsnPCd9PC9wPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgIHtwYWdlcy5tYXAoKF92LCBwYWdlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBwYWdlICsgMVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd2YWx1ZScpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlID09PSBfY3VycmVudFBhZ2UgPyA8QWN0aXZlSXRlbSBvbkNsaWNrPXtvblNlbGVjdH0ga2V5PXtwYWdlfSB2YWx1ZT17dmFsdWV9IC8+IDogPEl0ZW0ga2V5PXtwYWdlfSBvbkNsaWNrPXtvblNlbGVjdH0gdmFsdWU9e3ZhbHVlfSAvPlxuICAgICAgICAgICAgfSl9XG5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBpZD1cImRlY3JlYXNlXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25BcnJvd0NsaWNrfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J21sLTggd2hpdGVzcGFjZS1ub3dyYXAgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB4LTQgcHktMiBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IHJvdW5kZWQtbWQgc2hhZG93IHRleHQtYmFzZSBmb250LW1lZGl1bSB0ZXh0LWJsYWNrIGJnLXdoaXRlIGhvdmVyOmJnLWluZGlnby03MDAnXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+TmV4dCBQYWdlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8cD57Jz4nfTwvcD5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICA8L29sPlxuXG4gICAgKVxuXG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0aW9uXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkl0ZW0iLCJ2YWx1ZSIsIm9uQ2xpY2siLCJsaSIsImEiLCJjbGFzc05hbWUiLCJBY3RpdmVJdGVtIiwiUGFnaW5hdGlvbiIsImN1cnJlbnRQYWdlIiwidG90YWxJdGVtcyIsInRvdGFsUGFnZXMiLCJvblNlbGVjdCIsIl9jdXJyZW50UGFnZSIsInNldEN1cnJlbnRQYWdlIiwiY29uc29sZSIsImxvZyIsInBhZ2VzIiwiQXJyYXkiLCJmaWxsIiwib25BcnJvd0NsaWNrIiwidGFyZ2V0IiwiaWQiLCJvbCIsInNwYW4iLCJwIiwibWFwIiwiX3YiLCJwYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./component/table/pagination.tsx\n");

/***/ })

});