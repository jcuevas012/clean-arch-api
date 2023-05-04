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

/***/ "./pages/records/index.tsx":
/*!*********************************!*\
  !*** ./pages/records/index.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Records = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), records = ref[0], setRecords = ref[1];\n    var fetchData = function() {\n        var _ref = _asyncToGenerator(_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var data;\n            return _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return axios.get('/api/current-balance');\n                    case 3:\n                        data = _ctx.sent.data;\n                        setBalance(data.balance | 0);\n                        _ctx.next = 9;\n                        break;\n                    case 7:\n                        _ctx.prev = 7;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    7\n                ]\n            ]);\n        }));\n        return function fetchData() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    useEffect(function() {\n        fetchData();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"min-h-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"Arithmetic Operation App - Records\"\n                    }, void 0, false, {\n                        fileName: \"/app/pages/records/index.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"initial-scale=1.0, width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"/app/pages/records/index.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/app/pages/records/index.tsx\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"table\", {\n                    className: \"min-w-full divide-y-2 divide-gray-200 bg-white text-sm\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"thead\", {\n                            className: \"ltr:text-left rtl:text-right\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                        className: \"whitespace-nowrap px-4 py-2 font-medium text-gray-900\",\n                                        children: \"Name\"\n                                    }, void 0, false, {\n                                        fileName: \"/app/pages/records/index.tsx\",\n                                        lineNumber: 33,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                        className: \"whitespace-nowrap px-4 py-2 font-medium text-gray-900\",\n                                        children: \"Date of Birth\"\n                                    }, void 0, false, {\n                                        fileName: \"/app/pages/records/index.tsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                        className: \"whitespace-nowrap px-4 py-2 font-medium text-gray-900\",\n                                        children: \"Role\"\n                                    }, void 0, false, {\n                                        fileName: \"/app/pages/records/index.tsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                        className: \"whitespace-nowrap px-4 py-2 font-medium text-gray-900\",\n                                        children: \"Salary\"\n                                    }, void 0, false, {\n                                        fileName: \"/app/pages/records/index.tsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 25\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/app/pages/records/index.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 21\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/app/pages/records/index.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tbody\", {\n                            className: \"divide-y divide-gray-200\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tr\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"td\", {\n                                            className: \"whitespace-nowrap px-4 py-2 font-medium text-gray-900\",\n                                            children: \"John Doe\"\n                                        }, void 0, false, {\n                                            fileName: \"/app/pages/records/index.tsx\",\n                                            lineNumber: 50,\n                                            columnNumber: 25\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"td\", {\n                                            className: \"whitespace-nowrap px-4 py-2 text-gray-700\",\n                                            children: \"24/05/1995\"\n                                        }, void 0, false, {\n                                            fileName: \"/app/pages/records/index.tsx\",\n                                            lineNumber: 53,\n                                            columnNumber: 25\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"td\", {\n                                            className: \"whitespace-nowrap px-4 py-2 text-gray-700\",\n                                            children: \"Web Developer\"\n                                        }, void 0, false, {\n                                            fileName: \"/app/pages/records/index.tsx\",\n                                            lineNumber: 54,\n                                            columnNumber: 25\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"td\", {\n                                            className: \"whitespace-nowrap px-4 py-2 text-gray-700\",\n                                            children: \"$120,000\"\n                                        }, void 0, false, {\n                                            fileName: \"/app/pages/records/index.tsx\",\n                                            lineNumber: 55,\n                                            columnNumber: 25\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/app/pages/records/index.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 21\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tr\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"td\", {\n                                            className: \"whitespace-nowrap px-4 py-2 font-medium text-gray-900\",\n                                            children: \"Jane Doe\"\n                                        }, void 0, false, {\n                                            fileName: \"/app/pages/records/index.tsx\",\n                                            lineNumber: 59,\n                                            columnNumber: 25\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"td\", {\n                                            className: \"whitespace-nowrap px-4 py-2 text-gray-700\",\n                                            children: \"04/11/1980\"\n                                        }, void 0, false, {\n                                            fileName: \"/app/pages/records/index.tsx\",\n                                            lineNumber: 62,\n                                            columnNumber: 25\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"td\", {\n                                            className: \"whitespace-nowrap px-4 py-2 text-gray-700\",\n                                            children: \"Web Designer\"\n                                        }, void 0, false, {\n                                            fileName: \"/app/pages/records/index.tsx\",\n                                            lineNumber: 63,\n                                            columnNumber: 25\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"td\", {\n                                            className: \"whitespace-nowrap px-4 py-2 text-gray-700\",\n                                            children: \"$100,000\"\n                                        }, void 0, false, {\n                                            fileName: \"/app/pages/records/index.tsx\",\n                                            lineNumber: 64,\n                                            columnNumber: 25\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/app/pages/records/index.tsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 21\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tr\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"td\", {\n                                            className: \"whitespace-nowrap px-4 py-2 font-medium text-gray-900\",\n                                            children: \"Gary Barlow\"\n                                        }, void 0, false, {\n                                            fileName: \"/app/pages/records/index.tsx\",\n                                            lineNumber: 68,\n                                            columnNumber: 25\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"td\", {\n                                            className: \"whitespace-nowrap px-4 py-2 text-gray-700\",\n                                            children: \"24/05/1995\"\n                                        }, void 0, false, {\n                                            fileName: \"/app/pages/records/index.tsx\",\n                                            lineNumber: 71,\n                                            columnNumber: 25\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"td\", {\n                                            className: \"whitespace-nowrap px-4 py-2 text-gray-700\",\n                                            children: \"Singer\"\n                                        }, void 0, false, {\n                                            fileName: \"/app/pages/records/index.tsx\",\n                                            lineNumber: 72,\n                                            columnNumber: 25\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"td\", {\n                                            className: \"whitespace-nowrap px-4 py-2 text-gray-700\",\n                                            children: \"$20,000\"\n                                        }, void 0, false, {\n                                            fileName: \"/app/pages/records/index.tsx\",\n                                            lineNumber: 73,\n                                            columnNumber: 25\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/app/pages/records/index.tsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 21\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/app/pages/records/index.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/app/pages/records/index.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/app/pages/records/index.tsx\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/app/pages/records/index.tsx\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, _this));\n};\n_s(Records, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Records;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Records);\nvar _c;\n$RefreshReg$(_c, \"Records\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9yZWNvcmRzL2luZGV4LnRzeD8xZDJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgUmVjb3JkczogTmV4dFBhZ2UgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBbcmVjb3Jkcywgc2V0UmVjb3Jkc10gPSB1c2VTdGF0ZTxSZWNvcmRzW10+KFtdKVxuXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9jdXJyZW50LWJhbGFuY2UnKVxuICAgICAgICBzZXRCYWxhbmNlKGRhdGEuYmFsYW5jZSB8IDApXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmZXRjaERhdGEoKVxuICAgIH0sIFtdKVxuXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtaW4taC1mdWxsJz5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5Bcml0aG1ldGljIE9wZXJhdGlvbiBBcHAgLSBSZWNvcmRzPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0naW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aCcgLz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxtYWluPlxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cIm1pbi13LWZ1bGwgZGl2aWRlLXktMiBkaXZpZGUtZ3JheS0yMDAgYmctd2hpdGUgdGV4dC1zbVwiPlxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQgY2xhc3NOYW1lPVwibHRyOnRleHQtbGVmdCBydGw6dGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwid2hpdGVzcGFjZS1ub3dyYXAgcHgtNCBweS0yIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIE5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwid2hpdGVzcGFjZS1ub3dyYXAgcHgtNCBweS0yIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIERhdGUgb2YgQmlydGhcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwid2hpdGVzcGFjZS1ub3dyYXAgcHgtNCBweS0yIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFJvbGVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwid2hpdGVzcGFjZS1ub3dyYXAgcHgtNCBweS0yIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFNhbGFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cblxuICAgICAgICAgICAgICAgICAgICA8dGJvZHkgY2xhc3NOYW1lPVwiZGl2aWRlLXkgZGl2aWRlLWdyYXktMjAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ3aGl0ZXNwYWNlLW5vd3JhcCBweC00IHB5LTIgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgSm9obiBEb2VcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwid2hpdGVzcGFjZS1ub3dyYXAgcHgtNCBweS0yIHRleHQtZ3JheS03MDBcIj4yNC8wNS8xOTk1PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ3aGl0ZXNwYWNlLW5vd3JhcCBweC00IHB5LTIgdGV4dC1ncmF5LTcwMFwiPldlYiBEZXZlbG9wZXI8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIndoaXRlc3BhY2Utbm93cmFwIHB4LTQgcHktMiB0ZXh0LWdyYXktNzAwXCI+JDEyMCwwMDA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ3aGl0ZXNwYWNlLW5vd3JhcCBweC00IHB5LTIgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgSmFuZSBEb2VcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwid2hpdGVzcGFjZS1ub3dyYXAgcHgtNCBweS0yIHRleHQtZ3JheS03MDBcIj4wNC8xMS8xOTgwPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ3aGl0ZXNwYWNlLW5vd3JhcCBweC00IHB5LTIgdGV4dC1ncmF5LTcwMFwiPldlYiBEZXNpZ25lcjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwid2hpdGVzcGFjZS1ub3dyYXAgcHgtNCBweS0yIHRleHQtZ3JheS03MDBcIj4kMTAwLDAwMDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIndoaXRlc3BhY2Utbm93cmFwIHB4LTQgcHktMiBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBHYXJ5IEJhcmxvd1xuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ3aGl0ZXNwYWNlLW5vd3JhcCBweC00IHB5LTIgdGV4dC1ncmF5LTcwMFwiPjI0LzA1LzE5OTU8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIndoaXRlc3BhY2Utbm93cmFwIHB4LTQgcHktMiB0ZXh0LWdyYXktNzAwXCI+U2luZ2VyPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ3aGl0ZXNwYWNlLW5vd3JhcCBweC00IHB5LTIgdGV4dC1ncmF5LTcwMFwiPiQyMCwwMDA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8L21haW4+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVjb3Jkc1xuIl0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VTdGF0ZSIsIlJlY29yZHMiLCJyZWNvcmRzIiwic2V0UmVjb3JkcyIsImZldGNoRGF0YSIsImRhdGEiLCJheGlvcyIsImdldCIsInNldEJhbGFuY2UiLCJiYWxhbmNlIiwidXNlRWZmZWN0IiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJtYWluIiwidGFibGUiLCJ0aGVhZCIsInRyIiwidGgiLCJ0Ym9keSIsInRkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/records/index.tsx\n");

/***/ })

});