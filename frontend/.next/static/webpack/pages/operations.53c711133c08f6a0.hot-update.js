"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/operations",{

/***/ "./component/balance/balance.tsx":
/*!***************************************!*\
  !*** ./component/balance/balance.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_use_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-request */ \"./hooks/use-request.tsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Balance = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), balance = ref[0], setBalance = ref[1];\n    var fetchData = function() {\n        var _ref = _asyncToGenerator(_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var response;\n            return _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return axios__WEBPACK_IMPORTED_MODULE_4___default().get('/api/current-balance');\n                    case 3:\n                        response = _ctx.sent;\n                        console.log(response);\n                        _ctx.next = 9;\n                        break;\n                    case 7:\n                        _ctx.prev = 7;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    7\n                ]\n            ]);\n        }));\n        return function fetchData() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        fetchData();\n    }, []);\n    var ref1 = _slicedToArray((0,_hooks_use_request__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n        method: 'post',\n        url: '/api/auth/sign-up',\n        body: {},\n        onSuccess: function() {\n            return router.push('/');\n        }\n    }), 2), request = ref1[0], errors = ref1[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"article\", {\n            className: \"rounded-lg border border-gray-100 bg-white p-6\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                className: \"text-sm text-gray-500\",\n                                children: \"Balance\"\n                            }, void 0, false, {\n                                fileName: \"/app/component/balance/balance.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 7\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                className: \"text-2xl font-medium text-gray-900\",\n                                children: [\n                                    \"$ \",\n                                    balance\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/app/component/balance/balance.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 7\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/app/component/balance/balance.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                        className: \"rounded-full bg-blue-100 p-3 text-blue-600\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"svg\", {\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            className: \"h-8 w-8\",\n                            fill: \"none\",\n                            viewBox: \"0 0 24 24\",\n                            stroke: \"currentColor\",\n                            strokeWidth: \"2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"path\", {\n                                strokeLinecap: \"round\",\n                                strokeLinejoin: \"round\",\n                                d: \"M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z\"\n                            }, void 0, false, {\n                                fileName: \"/app/component/balance/balance.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 9\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/app/component/balance/balance.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 7\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/app/component/balance/balance.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 5\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/app/component/balance/balance.tsx\",\n                lineNumber: 37,\n                columnNumber: 3\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/app/component/balance/balance.tsx\",\n            lineNumber: 36,\n            columnNumber: 4\n        }, _this)\n    }, void 0, false));\n};\n_s(Balance, \"MQr1Cl0bKnsznzp6G6Q8KUIElN8=\", false, function() {\n    return [\n        _hooks_use_request__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = Balance;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Balance);\nvar _c;\n$RefreshReg$(_c, \"Balance\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvYmFsYW5jZS9iYWxhbmNlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBMkM7QUFDSztBQUN2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXpCLEdBQUssQ0FBQ0ksT0FBTyxHQUFhLFFBQzFCLEdBRGdDLENBQUM7O0lBRS9CLEdBQUssQ0FBeUJILEdBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLEdBQWpDSSxPQUFPLEdBQWdCSixHQUFXLEtBQXpCSyxVQUFVLEdBQUlMLEdBQVc7SUFFekMsR0FBSyxDQUFDTSxTQUFTO3FKQUFHLFFBQVEsV0FBSSxDQUFDO2dCQUVyQkMsUUFBUTs7Ozs7OytCQUFTTCxnREFBUyxDQUFDLENBQXNCOzt3QkFBakRLLFFBQVE7d0JBQ2RFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxRQUFROzs7Ozs7Ozs7Ozs7Ozs7O1FBR3hCLENBQUM7d0JBTktELFNBQVM7Ozs7SUFRZlAsZ0RBQVMsQ0FBQyxRQUNaLEdBRGtCLENBQUM7UUFDZk8sU0FBUztJQUNYLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFTCxHQUFLLENBQXFCTCxJQUt0QixrQkFMc0JBLDhEQUFVLENBQUMsQ0FBQztRQUNoQ1UsTUFBTSxFQUFFLENBQU07UUFDZEMsR0FBRyxFQUFFLENBQW1CO1FBQ3hCQyxJQUFJLEVBQUUsQ0FBQyxDQUFHO1FBQ1ZDLFNBQVMsRUFBRSxRQUFRO1lBQUZDLE1BQU0sQ0FBTkEsTUFBTSxDQUFDQyxJQUFJLENBQUMsQ0FBRzs7SUFDcEMsQ0FBQyxPQUxJQyxPQUFPLEdBQVloQixJQUt0QixLQUxZaUIsTUFBTSxHQUFJakIsSUFLdEI7SUFJRixNQUFNOzhGQUVOa0IsQ0FBTztZQUFDQyxTQUFTLEVBQUMsQ0FBZ0Q7a0dBQ25FQyxDQUFHO2dCQUFDRCxTQUFTLEVBQUMsQ0FBbUM7O2dHQUMvQ0MsQ0FBRzs7d0dBQ0RDLENBQUM7Z0NBQUNGLFNBQVMsRUFBQyxDQUF1QjswQ0FBQyxDQUFPOzs7Ozs7d0dBRTNDRSxDQUFDO2dDQUFDRixTQUFTLEVBQUMsQ0FBb0M7O29DQUFDLENBQUU7b0NBQUNoQixPQUFPOzs7Ozs7Ozs7Ozs7O2dHQUc3RG1CLENBQUk7d0JBQUNILFNBQVMsRUFBQyxDQUE0Qzs4R0FDekRJLENBQUc7NEJBQ0ZDLEtBQUssRUFBQyxDQUE0Qjs0QkFDbENMLFNBQVMsRUFBQyxDQUFTOzRCQUNuQk0sSUFBSSxFQUFDLENBQU07NEJBQ1hDLE9BQU8sRUFBQyxDQUFXOzRCQUNuQkMsTUFBTSxFQUFDLENBQWM7NEJBQ3JCQyxXQUFXLEVBQUMsQ0FBRztrSEFFZEMsQ0FBSTtnQ0FDSEMsYUFBYSxFQUFDLENBQU87Z0NBQ3JCQyxjQUFjLEVBQUMsQ0FBTztnQ0FDdEJDLENBQUMsRUFBQyxDQUFvSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVloSyxDQUFDO0dBM0RLOUIsT0FBTzs7UUFnQmVGLDBEQUFVOzs7S0FoQmhDRSxPQUFPO0FBNkRiLCtEQUFlQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudC9iYWxhbmNlL2JhbGFuY2UudHN4PzNmZmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgdXNlUmVxdWVzdCBmcm9tIFwiLi4vLi4vaG9va3MvdXNlLXJlcXVlc3RcIlxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXG5cbmludGVyZmFjZSBDdXJyZW50VXNlclByb3BzIHtcbiAgICBjdXJyZW50VXNlcj86IHsgZW1haWw6IHN0cmluZyB9XG59XG5cbmNvbnN0IEJhbGFuY2U6IFJlYWN0LkZDID0gKCkgPT4ge1xuXG4gIGNvbnN0IFtiYWxhbmNlLCBzZXRCYWxhbmNlXSA9IHVzZVN0YXRlKDApXG5cbiAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9jdXJyZW50LWJhbGFuY2UnKVxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpICBcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgIH1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hEYXRhKClcbiAgfSwgW10pXG5cbiAgY29uc3QgW3JlcXVlc3QsIGVycm9yc10gPSB1c2VSZXF1ZXN0KHtcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgIHVybDogJy9hcGkvYXV0aC9zaWduLXVwJyxcbiAgICAgICAgYm9keTogeyAgfSxcbiAgICAgICAgb25TdWNjZXNzOiAoKSA9PiByb3V0ZXIucHVzaCgnLycpLFxuICAgIH0pXG5cblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1ncmF5LTEwMCBiZy13aGl0ZSBwLTZcIj5cbiAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICA8ZGl2PlxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+QmFsYW5jZTwvcD5cblxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMFwiPiQge2JhbGFuY2V9PC9wPlxuICAgIDwvZGl2PlxuXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIGJnLWJsdWUtMTAwIHAtMyB0ZXh0LWJsdWUtNjAwXCI+XG4gICAgICA8c3ZnXG4gICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICBjbGFzc05hbWU9XCJoLTggdy04XCJcbiAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgID5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgIGQ9XCJNMTcgOVY3YTIgMiAwIDAwLTItMkg1YTIgMiAwIDAwLTIgMnY2YTIgMiAwIDAwMiAyaDJtMiA0aDEwYTIgMiAwIDAwMi0ydi02YTIgMiAwIDAwLTItMkg5YTIgMiAwIDAwLTIgMnY2YTIgMiAwIDAwMiAyem03LTVhMiAyIDAgMTEtNCAwIDIgMiAwIDAxNCAwelwiXG4gICAgICAgIC8+XG4gICAgICA8L3N2Zz5cbiAgICA8L3NwYW4+XG4gIDwvZGl2PlxuXG48L2FydGljbGU+XG5cblxuPC8+XG5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhbGFuY2VcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlcXVlc3QiLCJheGlvcyIsIkJhbGFuY2UiLCJiYWxhbmNlIiwic2V0QmFsYW5jZSIsImZldGNoRGF0YSIsInJlc3BvbnNlIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsIm1ldGhvZCIsInVybCIsImJvZHkiLCJvblN1Y2Nlc3MiLCJyb3V0ZXIiLCJwdXNoIiwicmVxdWVzdCIsImVycm9ycyIsImFydGljbGUiLCJjbGFzc05hbWUiLCJkaXYiLCJwIiwic3BhbiIsInN2ZyIsInhtbG5zIiwiZmlsbCIsInZpZXdCb3giLCJzdHJva2UiLCJzdHJva2VXaWR0aCIsInBhdGgiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./component/balance/balance.tsx\n");

/***/ })

});