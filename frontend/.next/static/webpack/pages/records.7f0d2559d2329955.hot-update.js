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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _this = undefined;\nvar Item = function(param) {\n    var value = param.value;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            href: \"#\",\n            className: \"block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900\",\n            children: value\n        }, void 0, false, {\n            fileName: \"/app/component/table/pagination.tsx\",\n            lineNumber: 19,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/app/component/table/pagination.tsx\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, _this));\n};\n_c = Item;\nvar ActiveItem = function(param) {\n    var value = param.value;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: \"block h-8 w-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white\",\n        children: value\n    }, void 0, false, {\n        fileName: \"/app/component/table/pagination.tsx\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, _this));\n};\n_c1 = ActiveItem;\nvar Pagination = function(param) {\n    var currentPage = param.currentPage, totalItems = param.totalItems, totalPages = param.totalPages;\n    var _this1 = _this;\n    console.log({\n        currentPage: currentPage,\n        totalItems: totalItems,\n        totalPages: totalPages\n    });\n    var pages = Array(totalPages).fill('page');\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n        className: \"flex justify-center gap-1 text-xs font-medium\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"#\",\n                    className: \"inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"sr-only\",\n                            children: \"Prev Page\"\n                        }, void 0, false, {\n                            fileName: \"/app/component/table/pagination.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 17\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            className: \"h-3 w-3\",\n                            viewBox: \"0 0 20 20\",\n                            fill: \"currentColor\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                fillRule: \"evenodd\",\n                                d: \"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z\",\n                                clipRule: \"evenodd\"\n                            }, void 0, false, {\n                                fileName: \"/app/component/table/pagination.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 21\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/app/component/table/pagination.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 17\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/app/component/table/pagination.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/app/component/table/pagination.tsx\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, _this),\n            pages.map(function(_v, page) {\n                var value = page + 1;\n                return page === currentPage ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ActiveItem, {\n                    value: value\n                }, page, false, {\n                    fileName: \"/app/component/table/pagination.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 43\n                }, _this1) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n                    value: value\n                }, page, false, {\n                    fileName: \"/app/component/table/pagination.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 84\n                }, _this1);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"#\",\n                    className: \"inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"sr-only\",\n                            children: \"Next Page\"\n                        }, void 0, false, {\n                            fileName: \"/app/component/table/pagination.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 17\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            className: \"h-3 w-3\",\n                            viewBox: \"0 0 20 20\",\n                            fill: \"currentColor\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                fillRule: \"evenodd\",\n                                d: \"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z\",\n                                clipRule: \"evenodd\"\n                            }, void 0, false, {\n                                fileName: \"/app/component/table/pagination.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 21\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/app/component/table/pagination.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 17\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/app/component/table/pagination.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/app/component/table/pagination.tsx\",\n                lineNumber: 75,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/app/component/table/pagination.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, _this));\n};\n_c2 = Pagination;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pagination);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Item\");\n$RefreshReg$(_c1, \"ActiveItem\");\n$RefreshReg$(_c2, \"Pagination\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvdGFibGUvcGFnaW5hdGlvbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXdDOztBQWV4QyxHQUFLLENBQUNDLElBQUksR0FBZSxRQUFRLFFBQU8sQ0FBQztRQUFiQyxLQUFLLFNBQUxBLEtBQUs7SUFDN0IsTUFBTSw2RUFDREMsQ0FBRTs4RkFDRUMsQ0FBQztZQUNFQyxJQUFJLEVBQUMsQ0FBRztZQUNSQyxTQUFTLEVBQUMsQ0FBMkY7c0JBRXBHSixLQUFLOzs7Ozs7Ozs7OztBQUl0QixDQUFDO0tBWEtELElBQUk7QUFhVixHQUFLLENBQUNNLFVBQVUsR0FBZ0MsUUFBUSxRQUFPLENBQUM7UUFBYkwsS0FBSyxTQUFMQSxLQUFLO0lBQ3BELE1BQU0sNkVBQ0RDLENBQUU7UUFDQ0csU0FBUyxFQUFDLENBQW9GO2tCQUU3RkosS0FBSzs7Ozs7O0FBR2xCLENBQUM7TUFSS0ssVUFBVTtBQVdoQixHQUFLLENBQUNDLFVBQVUsR0FBNEIsUUFBUSxRQUFvQyxDQUFDO1FBQTFDQyxXQUFXLFNBQVhBLFdBQVcsRUFBRUMsVUFBVSxTQUFWQSxVQUFVLEVBQUVDLFVBQVUsU0FBVkEsVUFBVTs7SUFFOUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQUM7UUFBQ0osV0FBVyxFQUFYQSxXQUFXO1FBQUVDLFVBQVUsRUFBVkEsVUFBVTtRQUFFQyxVQUFVLEVBQVZBLFVBQVU7SUFBQyxDQUFDO0lBRW5ELEdBQUssQ0FBQ0csS0FBSyxHQUFHQyxLQUFLLENBQUNKLFVBQVUsRUFBRUssSUFBSSxDQUFDLENBQU07SUFFMUMsTUFBTSw2RUFDTkMsQ0FBRTtRQUFDWCxTQUFTLEVBQUMsQ0FBK0M7O3dGQUN4REgsQ0FBRTtzR0FDRUMsQ0FBQztvQkFDRUMsSUFBSSxFQUFDLENBQUc7b0JBQ1JDLFNBQVMsRUFBQyxDQUFzSDs7b0dBRS9IWSxDQUFJOzRCQUFDWixTQUFTLEVBQUMsQ0FBUztzQ0FBQyxDQUFTOzs7Ozs7b0dBQ2xDYSxDQUFHOzRCQUNBQyxLQUFLLEVBQUMsQ0FBNEI7NEJBQ2xDZCxTQUFTLEVBQUMsQ0FBUzs0QkFDbkJlLE9BQU8sRUFBQyxDQUFXOzRCQUNuQkwsSUFBSSxFQUFDLENBQWM7a0hBRWxCTSxDQUFJO2dDQUNEQyxRQUFRLEVBQUMsQ0FBUztnQ0FDbEJDLENBQUMsRUFBQyxDQUFtSDtnQ0FDckhDLFFBQVEsRUFBQyxDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTWpDWCxLQUFLLENBQUNZLEdBQUcsQ0FBQyxRQUFRLENBQVBDLEVBQUUsRUFBRUMsSUFBSSxFQUFLLENBQUM7Z0JBQ3RCLEdBQUssQ0FBQzFCLEtBQUssR0FBRzBCLElBQUksR0FBRyxDQUFDO2dCQUN0QixNQUFNLENBQUNBLElBQUksS0FBS25CLFdBQVcsK0VBQUlGLFVBQVU7b0JBQVlMLEtBQUssRUFBRUEsS0FBSzttQkFBbEIwQixJQUFJOzs7O3lHQUFxQjNCLElBQUk7b0JBQVlDLEtBQUssRUFBRUEsS0FBSzttQkFBbEIwQixJQUFJOzs7OztZQUMxRixDQUFDO3dGQUdBekIsQ0FBRTtzR0FDRUMsQ0FBQztvQkFDRUMsSUFBSSxFQUFDLENBQUc7b0JBQ1JDLFNBQVMsRUFBQyxDQUFzSDs7b0dBRS9IWSxDQUFJOzRCQUFDWixTQUFTLEVBQUMsQ0FBUztzQ0FBQyxDQUFTOzs7Ozs7b0dBQ2xDYSxDQUFHOzRCQUNBQyxLQUFLLEVBQUMsQ0FBNEI7NEJBQ2xDZCxTQUFTLEVBQUMsQ0FBUzs0QkFDbkJlLE9BQU8sRUFBQyxDQUFXOzRCQUNuQkwsSUFBSSxFQUFDLENBQWM7a0hBRWxCTSxDQUFJO2dDQUNEQyxRQUFRLEVBQUMsQ0FBUztnQ0FDbEJDLENBQUMsRUFBQyxDQUFvSDtnQ0FDdEhDLFFBQVEsRUFBQyxDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVzFDLENBQUM7TUE3REtqQixVQUFVO0FBK0RoQiwrREFBZUEsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnQvdGFibGUvcGFnaW5hdGlvbi50c3g/NGVhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcblxuXG5pbnRlcmZhY2UgUGFnaW5hdGlvblR5cGUge1xuICB0b3RhbEl0ZW1zOiBudW1iZXIgXG4gIHRvdGFsUGFnZXM6IG51bWJlciBcbiAgY3VycmVudFBhZ2U6IG51bWJlclxufVxuXG5cbmludGVyZmFjZSBQYWdJdGVtVHlwZSB7IFxuICAgIHZhbHVlOiBudW1iZXIsIFxuICAgIG9uQ2xpY2s6IChudW1iZXI6IG51bWJlcikgPT4gdm9pZCBcbn1cblxuY29uc3QgSXRlbTogUmVhY3QuRkM8PiA9ICh7IHZhbHVlIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBoLTggdy04IHJvdW5kZWQgYm9yZGVyIGJvcmRlci1ncmF5LTEwMCBiZy13aGl0ZSB0ZXh0LWNlbnRlciBsZWFkaW5nLTggdGV4dC1ncmF5LTkwMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3ZhbHVlfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuICAgIClcbn1cblxuY29uc3QgQWN0aXZlSXRlbTogUmVhY3QuRkM8eyB2YWx1ZTogbnVtYmVyIH0+ID0gKHsgdmFsdWUgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxsaVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgaC04IHctOCByb3VuZGVkIGJvcmRlci1ibHVlLTYwMCBiZy1ibHVlLTYwMCB0ZXh0LWNlbnRlciBsZWFkaW5nLTggdGV4dC13aGl0ZVwiXG4gICAgICAgID5cbiAgICAgICAgICAgIHt2YWx1ZX1cbiAgICAgICAgPC9saT5cbiAgICApXG59XG5cblxuY29uc3QgUGFnaW5hdGlvbjogUmVhY3QuRkM8UGFnaW5hdGlvblR5cGU+PSAoeyBjdXJyZW50UGFnZSwgdG90YWxJdGVtcywgdG90YWxQYWdlc30pID0+IHtcblxuICAgIGNvbnNvbGUubG9nKHsgY3VycmVudFBhZ2UsIHRvdGFsSXRlbXMsIHRvdGFsUGFnZXMgfSlcblxuICAgIGNvbnN0IHBhZ2VzID0gQXJyYXkodG90YWxQYWdlcykuZmlsbCgncGFnZScpXG5cbiAgICAgcmV0dXJuIChcbiAgICA8b2wgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBnYXAtMSB0ZXh0LXhzIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGgtOCB3LTggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQgYm9yZGVyIGJvcmRlci1ncmF5LTEwMCBiZy13aGl0ZSB0ZXh0LWdyYXktOTAwIHJ0bDpyb3RhdGUtMTgwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+UHJldiBQYWdlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtMyB3LTNcIlxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTIuNzA3IDUuMjkzYTEgMSAwIDAxMCAxLjQxNEw5LjQxNCAxMGwzLjI5MyAzLjI5M2ExIDEgMCAwMS0xLjQxNCAxLjQxNGwtNC00YTEgMSAwIDAxMC0xLjQxNGw0LTRhMSAxIDAgMDExLjQxNCAwelwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuXG4gICAgICAgIHtwYWdlcy5tYXAoKF92LCBwYWdlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHBhZ2UgKyAxXG4gICAgICAgICAgICByZXR1cm4gcGFnZSA9PT0gY3VycmVudFBhZ2UgPyA8QWN0aXZlSXRlbSBrZXk9e3BhZ2V9IHZhbHVlPXt2YWx1ZX0vPiA6IDxJdGVtIGtleT17cGFnZX0gdmFsdWU9e3ZhbHVlfSAvPlxuICAgICAgICB9KX1cblxuIFxuICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBoLTggdy04IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkIGJvcmRlciBib3JkZXItZ3JheS0xMDAgYmctd2hpdGUgdGV4dC1ncmF5LTkwMCBydGw6cm90YXRlLTE4MFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPk5leHQgUGFnZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTMgdy0zXCJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTcuMjkzIDE0LjcwN2ExIDEgMCAwMTAtMS40MTRMMTAuNTg2IDEwIDcuMjkzIDYuNzA3YTEgMSAwIDAxMS40MTQtMS40MTRsNCA0YTEgMSAwIDAxMCAxLjQxNGwtNCA0YTEgMSAwIDAxLTEuNDE0IDB6XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgPC9vbD5cblxuICAgIClcblxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSXRlbSIsInZhbHVlIiwibGkiLCJhIiwiaHJlZiIsImNsYXNzTmFtZSIsIkFjdGl2ZUl0ZW0iLCJQYWdpbmF0aW9uIiwiY3VycmVudFBhZ2UiLCJ0b3RhbEl0ZW1zIiwidG90YWxQYWdlcyIsImNvbnNvbGUiLCJsb2ciLCJwYWdlcyIsIkFycmF5IiwiZmlsbCIsIm9sIiwic3BhbiIsInN2ZyIsInhtbG5zIiwidmlld0JveCIsInBhdGgiLCJmaWxsUnVsZSIsImQiLCJjbGlwUnVsZSIsIm1hcCIsIl92IiwicGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./component/table/pagination.tsx\n");

/***/ })

});