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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Item = function(param) {\n    var value = param.value, onClick = param.onClick;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            onClick: function() {\n                return onClick(value);\n            },\n            className: \"ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow text-base font-medium text-black bg-white hover:bg-indigo-700\",\n            children: value\n        }, void 0, false, {\n            fileName: \"/app/component/table/pagination.tsx\",\n            lineNumber: 20,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/app/component/table/pagination.tsx\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, _this));\n};\n_c = Item;\nvar ActiveItem = function(param) {\n    var value = param.value, onClick = param.onClick;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            onClick: function() {\n                return onClick(value);\n            },\n            className: \"ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700\",\n            children: value\n        }, void 0, false, {\n            fileName: \"/app/component/table/pagination.tsx\",\n            lineNumber: 32,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/app/component/table/pagination.tsx\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, _this));\n};\n_c1 = ActiveItem;\nvar Pagination = function(param1) {\n    var currentPage = param1.currentPage, totalItems = param1.totalItems, totalPages = param1.totalPages, onSelect = param1.onSelect;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(currentPage), _currentPage = ref[0], setCurrentPage = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setCurrentPage(currentPage);\n    }, [\n        currentPage\n    ]);\n    console.log({\n        totalItems: totalItems,\n        totalPages: totalPages,\n        currentPage: currentPage,\n        _currentPage: _currentPage\n    });\n    var pages = Array(totalPages).fill('page');\n    var onArrowClick = function(param) {\n        var id = param.target.id;\n        if (id === 'increase') {\n            setCurrentPage(currentPage++);\n        } else {\n            setCurrentPage(currentPage--);\n        }\n        console.log('------>>>', _currentPage);\n        onSelect(_currentPage);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n        className: \"flex justify-center gap-1 text-xs font-medium py-3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    id: \"increase\",\n                    onClick: onArrowClick,\n                    className: \"ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow text-base font-medium text-black bg-white hover:bg-indigo-700\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"sr-only\",\n                            children: \"Prev Page\"\n                        }, void 0, false, {\n                            fileName: \"/app/component/table/pagination.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: '<'\n                        }, void 0, false, {\n                            fileName: \"/app/component/table/pagination.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/app/component/table/pagination.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/app/component/table/pagination.tsx\",\n                lineNumber: 68,\n                columnNumber: 13\n            }, _this),\n            pages.map(function(_v, page) {\n                var value = page + 1;\n                console.log('value');\n                return value === _currentPage ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ActiveItem, {\n                    onClick: onSelect,\n                    value: value\n                }, page, false, {\n                    fileName: \"/app/component/table/pagination.tsx\",\n                    lineNumber: 82,\n                    columnNumber: 49\n                }, _this1) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n                    onClick: onSelect,\n                    value: value\n                }, page, false, {\n                    fileName: \"/app/component/table/pagination.tsx\",\n                    lineNumber: 82,\n                    columnNumber: 110\n                }, _this1);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    id: \"decrease\",\n                    onClick: onArrowClick,\n                    className: \"ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow text-base font-medium text-black bg-white hover:bg-indigo-700\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"sr-only\",\n                            children: \"Next Page\"\n                        }, void 0, false, {\n                            fileName: \"/app/component/table/pagination.tsx\",\n                            lineNumber: 91,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: '>'\n                        }, void 0, false, {\n                            fileName: \"/app/component/table/pagination.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/app/component/table/pagination.tsx\",\n                    lineNumber: 86,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/app/component/table/pagination.tsx\",\n                lineNumber: 85,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/app/component/table/pagination.tsx\",\n        lineNumber: 67,\n        columnNumber: 9\n    }, _this));\n};\n_s(Pagination, \"O5iT6IDlVUSeigPtUc/RdvSJNyg=\");\n_c2 = Pagination;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pagination);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Item\");\n$RefreshReg$(_c1, \"ActiveItem\");\n$RefreshReg$(_c2, \"Pagination\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUlOLFVBQVU7b0JBQUNKLE9BQU8sRUFBRVMsUUFBUTtvQkFBYVYsS0FBSyxFQUFFQSxLQUFLO21CQUFsQjBCLElBQUk7Ozs7eUdBQXNCM0IsSUFBSTtvQkFBWUUsT0FBTyxFQUFFUyxRQUFRO29CQUFFVixLQUFLLEVBQUVBLEtBQUs7bUJBQXJDMEIsSUFBSTs7Ozs7WUFDaEgsQ0FBQzt3RkFFQXhCLENBQUU7c0dBQ0VDLENBQUM7b0JBQ0VnQixFQUFFLEVBQUMsQ0FBVTtvQkFDYmxCLE9BQU8sRUFBRWlCLFlBQVk7b0JBQ3JCZCxTQUFTLEVBQUMsQ0FBb0w7O29HQUU3TGtCLENBQUk7NEJBQUNsQixTQUFTLEVBQUMsQ0FBUztzQ0FBQyxDQUFTOzs7Ozs7b0dBQ2xDbUIsQ0FBQztzQ0FBRSxDQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVMzQixDQUFDO0dBeERLakIsVUFBVTtNQUFWQSxVQUFVO0FBMERoQiwrREFBZUEsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnQvdGFibGUvcGFnaW5hdGlvbi50c3g/NGVhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5cblxuaW50ZXJmYWNlIFBhZ2luYXRpb25UeXBlIHtcbiAgICB0b3RhbEl0ZW1zOiBudW1iZXJcbiAgICB0b3RhbFBhZ2VzOiBudW1iZXJcbiAgICBjdXJyZW50UGFnZTogbnVtYmVyXG4gICAgb25TZWxlY3Q6IChwYWdlOiBudW1iZXIpID0+IHZvaWRcbn1cblxuXG5pbnRlcmZhY2UgUGFnSXRlbVR5cGUge1xuICAgIHZhbHVlOiBudW1iZXIsXG4gICAgb25DbGljazogKG51bWJlcjogbnVtYmVyKSA9PiB2b2lkXG59XG5cbmNvbnN0IEl0ZW06IFJlYWN0LkZDPFBhZ0l0ZW1UeXBlPiA9ICh7IHZhbHVlLCBvbkNsaWNrIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2sodmFsdWUpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbWwtOCB3aGl0ZXNwYWNlLW5vd3JhcCBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHgtNCBweS0yIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgcm91bmRlZC1tZCBzaGFkb3cgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHRleHQtYmxhY2sgYmctd2hpdGUgaG92ZXI6YmctaW5kaWdvLTcwMCc+XG4gICAgICAgICAgICAgICAge3ZhbHVlfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuICAgIClcbn1cblxuY29uc3QgQWN0aXZlSXRlbTogUmVhY3QuRkM8UGFnSXRlbVR5cGU+ID0gKHsgdmFsdWUsIG9uQ2xpY2sgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DbGljayh2YWx1ZSl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdtbC04IHdoaXRlc3BhY2Utbm93cmFwIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweC00IHB5LTIgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCByb3VuZGVkLW1kIHNoYWRvdy1zbSB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gdGV4dC13aGl0ZSBiZy1pbmRpZ28tNjAwICBob3ZlcjpiZy1pbmRpZ28tNzAwJ1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt2YWx1ZX1cbiAgICAgICAgICAgIDwvYT5cblxuXG4gICAgICAgIDwvbGk+XG4gICAgKVxufVxuXG5cbmNvbnN0IFBhZ2luYXRpb246IFJlYWN0LkZDPFBhZ2luYXRpb25UeXBlPiA9ICh7IGN1cnJlbnRQYWdlLCB0b3RhbEl0ZW1zLCB0b3RhbFBhZ2VzLCBvblNlbGVjdCB9KSA9PiB7XG5cbiAgICBjb25zdCBbX2N1cnJlbnRQYWdlLCBzZXRDdXJyZW50UGFnZV0gPSB1c2VTdGF0ZShjdXJyZW50UGFnZSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldEN1cnJlbnRQYWdlKGN1cnJlbnRQYWdlKVxuICAgIH0sIFtjdXJyZW50UGFnZV0pXG5cbiAgICBjb25zb2xlLmxvZyh7IHRvdGFsSXRlbXMsIHRvdGFsUGFnZXMsIGN1cnJlbnRQYWdlLCBfY3VycmVudFBhZ2UgfSlcbiAgICBjb25zdCBwYWdlcyA9IEFycmF5KHRvdGFsUGFnZXMpLmZpbGwoJ3BhZ2UnKVxuXG4gICAgY29uc3Qgb25BcnJvd0NsaWNrID0gKHsgdGFyZ2V0OiB7IGlkIH19OiBhbnkpID0+IHtcbiAgICAgICAgaWYgKGlkID09PSAnaW5jcmVhc2UnKSB7XG4gICAgICAgICAgICBzZXRDdXJyZW50UGFnZShjdXJyZW50UGFnZSsrKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0Q3VycmVudFBhZ2UoY3VycmVudFBhZ2UtLSlcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tPj4+JywgX2N1cnJlbnRQYWdlKVxuICAgICAgICBvblNlbGVjdChfY3VycmVudFBhZ2UpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPG9sIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgZ2FwLTEgdGV4dC14cyBmb250LW1lZGl1bSBweS0zXCI+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJpbmNyZWFzZVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQXJyb3dDbGlja31cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdtbC04IHdoaXRlc3BhY2Utbm93cmFwIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweC00IHB5LTIgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCByb3VuZGVkLW1kIHNoYWRvdyB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gdGV4dC1ibGFjayBiZy13aGl0ZSBob3ZlcjpiZy1pbmRpZ28tNzAwJ1xuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPlByZXYgUGFnZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHA+eyc8J308L3A+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAge3BhZ2VzLm1hcCgoX3YsIHBhZ2UpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHBhZ2UgKyAxXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3ZhbHVlJylcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgPT09IF9jdXJyZW50UGFnZSA/IDxBY3RpdmVJdGVtIG9uQ2xpY2s9e29uU2VsZWN0fSBrZXk9e3BhZ2V9IHZhbHVlPXt2YWx1ZX0gLz4gOiA8SXRlbSBrZXk9e3BhZ2V9IG9uQ2xpY2s9e29uU2VsZWN0fSB2YWx1ZT17dmFsdWV9IC8+XG4gICAgICAgICAgICB9KX1cblxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZGVjcmVhc2VcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkFycm93Q2xpY2t9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbWwtOCB3aGl0ZXNwYWNlLW5vd3JhcCBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHgtNCBweS0yIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgcm91bmRlZC1tZCBzaGFkb3cgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHRleHQtYmxhY2sgYmctd2hpdGUgaG92ZXI6YmctaW5kaWdvLTcwMCdcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5OZXh0IFBhZ2U8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxwPnsnPid9PC9wPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvb2w+XG5cbiAgICApXG5cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2luYXRpb25cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSXRlbSIsInZhbHVlIiwib25DbGljayIsImxpIiwiYSIsImNsYXNzTmFtZSIsIkFjdGl2ZUl0ZW0iLCJQYWdpbmF0aW9uIiwiY3VycmVudFBhZ2UiLCJ0b3RhbEl0ZW1zIiwidG90YWxQYWdlcyIsIm9uU2VsZWN0IiwiX2N1cnJlbnRQYWdlIiwic2V0Q3VycmVudFBhZ2UiLCJjb25zb2xlIiwibG9nIiwicGFnZXMiLCJBcnJheSIsImZpbGwiLCJvbkFycm93Q2xpY2siLCJpZCIsInRhcmdldCIsIm9sIiwic3BhbiIsInAiLCJtYXAiLCJfdiIsInBhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./component/table/pagination.tsx\n");

/***/ })

});