"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./component/header/header.tsx":
/*!*************************************!*\
  !*** ./component/header/header.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _this = undefined;\nvar Header = function(param) {\n    var currentUser = param.currentUser;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-between space-x-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        width: 20,\n                        height: 20,\n                        className: \"h-8 w-auto sm:h-10\",\n                        src: \"https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg\",\n                        alt: \"Home\"\n                    }, void 0, false, {\n                        fileName: \"/app/component/header/header.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 29\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/app/component/header/header.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 25\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/app/component/header/header.tsx\",\n                lineNumber: 11,\n                columnNumber: 21\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"ml-8 space-x-4 items-center\",\n                children: !currentUser ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: '/auth/signin',\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900\",\n                                children: [\n                                    ' ',\n                                    \"Sign in \",\n                                    '  '\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/app/component/header/header.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 37\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/app/component/header/header.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 33\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: '/auth/signup',\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700\",\n                                children: [\n                                    ' ',\n                                    \"Sign up\",\n                                    ' '\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/app/component/header/header.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 37\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/app/component/header/header.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 33\n                        }, _this)\n                    ]\n                }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/auth/signout\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"#\",\n                        className: \"ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700\",\n                        children: [\n                            \"Sign out\",\n                            ' '\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/app/component/header/header.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 37\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/app/component/header/header.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 33\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/app/component/header/header.tsx\",\n                lineNumber: 23,\n                columnNumber: 21\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/app/component/header/header.tsx\",\n        lineNumber: 10,\n        columnNumber: 17\n    }, _this));\n};\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvaGVhZGVyL2hlYWRlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBOEI7QUFDRjs7QUFNNUIsR0FBSyxDQUFDRSxNQUFNLEdBQStCLFFBQVEsUUFBYSxDQUFDO1FBQW5CQyxXQUFXLFNBQVhBLFdBQVc7SUFDckQsTUFBTSw2RUFDT0MsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBaUM7O3dGQUMzQ0QsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQU07c0dBQ2hCSixrREFBSTtvQkFBQ0ssSUFBSSxFQUFDLENBQUc7MEdBQ1ROLG1EQUFLO3dCQUNGTyxLQUFLLEVBQUUsRUFBRTt3QkFDVEMsTUFBTSxFQUFFLEVBQUU7d0JBQ1ZILFNBQVMsRUFBQyxDQUFvQjt3QkFDOUJJLEdBQUcsRUFBQyxDQUErRDt3QkFDbkVDLEdBQUcsRUFBQyxDQUFNOzs7Ozs7Ozs7Ozs7Ozs7O3dGQUtyQk4sQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQThCOzJCQUN2Q0YsV0FBVzs7b0dBRUpGLGtEQUFJOzRCQUFDSyxJQUFJLEVBQUUsQ0FBYztrSEFDckJLLENBQUM7Z0NBQUNOLFNBQVMsRUFBQyxDQUEyRTs7b0NBQ25GLENBQUc7b0NBQUMsQ0FDRztvQ0FBQyxDQUFJOzs7Ozs7Ozs7Ozs7b0dBR3BCSixrREFBSTs0QkFBQ0ssSUFBSSxFQUFFLENBQWM7a0hBQ3JCSyxDQUFDO2dDQUNFTixTQUFTLEVBQUMsQ0FBNEw7O29DQUVyTSxDQUFHO29DQUFDLENBQ0U7b0NBQUMsQ0FBRzs7Ozs7Ozs7Ozs7OzsrR0FLbEJKLGtEQUFJO29CQUFDSyxJQUFJLEVBQUMsQ0FBZTswR0FDckJLLENBQUM7d0JBQ0VMLElBQUksRUFBQyxDQUFHO3dCQUNURCxTQUFTLEVBQUMsQ0FBNEw7OzRCQUN4TSxDQUNXOzRCQUFDLENBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXBELENBQUM7S0EvQ0tILE1BQU07QUFpRFosK0RBQWVBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2hlYWRlci9oZWFkZXIudHN4P2YwZmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmludGVyZmFjZSBDdXJyZW50VXNlclByb3BzIHtcbiAgICBjdXJyZW50VXNlcjogeyBlbWFpbDogc3RyaW5nIH1cbn1cblxuY29uc3QgSGVhZGVyOiBSZWFjdC5GQzxDdXJyZW50VXNlclByb3BzPiA9ICh7IGN1cnJlbnRVc2VyIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gc3BhY2UteC0xMFwiID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezIwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezIwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2gtOCB3LWF1dG8gc206aC0xMCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPSdodHRwczovL3RhaWx3aW5kdWkuY29tL2ltZy9sb2dvcy93b3JrZmxvdy1tYXJrLWluZGlnby02MDAuc3ZnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9J0hvbWUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21sLTggIHNwYWNlLXgtNCBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgeyFjdXJyZW50VXNlciA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnL2F1dGgvc2lnbmluJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J3doaXRlc3BhY2Utbm93cmFwIHRleHQtYmFzZSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwIGhvdmVyOnRleHQtZ3JheS05MDAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2lnbiBpbiB7JyAgJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnL2F1dGgvc2lnbnVwJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbWwtOCB3aGl0ZXNwYWNlLW5vd3JhcCBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHgtNCBweS0yIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgcm91bmRlZC1tZCBzaGFkb3ctc20gdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHRleHQtd2hpdGUgYmctaW5kaWdvLTYwMCBob3ZlcjpiZy1pbmRpZ28tNzAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2lnbiB1cHsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9hdXRoL3NpZ25vdXQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPScjJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdtbC04IHdoaXRlc3BhY2Utbm93cmFwIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweC00IHB5LTIgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCByb3VuZGVkLW1kIHNoYWRvdy1zbSB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gdGV4dC13aGl0ZSBiZy1pbmRpZ28tNjAwIGhvdmVyOmJnLWluZGlnby03MDAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2lnbiBvdXR7JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxuIl0sIm5hbWVzIjpbIkltYWdlIiwiTGluayIsIkhlYWRlciIsImN1cnJlbnRVc2VyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaHJlZiIsIndpZHRoIiwiaGVpZ2h0Iiwic3JjIiwiYWx0IiwiYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./component/header/header.tsx\n");

/***/ })

});