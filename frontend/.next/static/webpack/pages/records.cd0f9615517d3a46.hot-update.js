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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _component_operation_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../component/operation-dropdown */ \"./component/operation-dropdown.tsx\");\n/* harmony import */ var _component_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../component/table */ \"./component/table/index.tsx\");\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Records = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({\n        currentPage: 0,\n        totalItems: 0,\n        totalPages: 0,\n        records: []\n    }), result = ref[0], setResult = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({\n        size: 10,\n        page: 1,\n        operationId: ''\n    }), filter = ref1[0], setFilter = ref1[1];\n    var fetchData = function() {\n        var _ref = _asyncToGenerator(_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var data;\n            return _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return axios__WEBPACK_IMPORTED_MODULE_2___default().get('/api/records');\n                    case 3:\n                        data = _ctx.sent.data;\n                        setResult(data);\n                        _ctx.next = 9;\n                        break;\n                    case 7:\n                        _ctx.prev = 7;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    7\n                ]\n            ]);\n        }));\n        return function fetchData() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var onOperationTypeChange = function() {\n        var _ref = _asyncToGenerator(_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(operationId) {\n            var data;\n            return _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!operationId) {\n                            _ctx.next = 5;\n                            break;\n                        }\n                        _ctx.next = 3;\n                        return axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"/api/records?operationId=\".concat(operationId));\n                    case 3:\n                        data = _ctx.sent.data;\n                        setResult(data);\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onOperationTypeChange(operationId) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var onPageSelect = function() {\n        var _ref = _asyncToGenerator(_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(page) {\n            var data;\n            return _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!page) {\n                            _ctx.next = 5;\n                            break;\n                        }\n                        _ctx.next = 3;\n                        return axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"/api/records?page=\".concat(page));\n                    case 3:\n                        data = _ctx.sent.data;\n                        setResult(data);\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onPageSelect(page) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var onSizeSelect = function() {\n        var _ref = _asyncToGenerator(_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(size) {\n            var data;\n            return _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!page) {\n                            _ctx.next = 5;\n                            break;\n                        }\n                        _ctx.next = 3;\n                        return axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"/api/records?size=\".concat(size));\n                    case 3:\n                        data = _ctx.sent.data;\n                        setResult(data);\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onSizeSelect(size) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        fetchData();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"min-h-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"Arithmetic Operation App - Records\"\n                    }, void 0, false, {\n                        fileName: \"/app/pages/records/index.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"initial-scale=1.0, width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"/app/pages/records/index.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/app/pages/records/index.tsx\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"py-6\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_component_operation_dropdown__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            onChange: onOperationTypeChange\n                        }, void 0, false, {\n                            fileName: \"/app/pages/records/index.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/app/pages/records/index.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_component_table__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        result: result,\n                        onPageSelect: onPageSelect,\n                        onSizeSelect: onSizeSelect\n                    }, void 0, false, {\n                        fileName: \"/app/pages/records/index.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/app/pages/records/index.tsx\",\n                lineNumber: 71,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/app/pages/records/index.tsx\",\n        lineNumber: 66,\n        columnNumber: 9\n    }, _this));\n};\n_s(Records, \"Efnx0bGJ9RurRgGJTYyR1Ew1W1w=\");\n_c = Records;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Records);\nvar _c;\n$RefreshReg$(_c, \"Records\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZWNvcmRzL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFFRztBQUNlO0FBQzJCO0FBQ1I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUTlELEdBQUssQ0FBQ00sT0FBTyxHQUFhLFFBQzFCLEdBRGdDLENBQUM7O0lBRTdCLEdBQUssQ0FBdUJILEdBSzFCLEdBTDBCQSwrQ0FBUSxDQUFrQixDQUFDO1FBQ25ESSxXQUFXLEVBQUUsQ0FBQztRQUNkQyxVQUFVLEVBQUUsQ0FBQztRQUNiQyxVQUFVLEVBQUUsQ0FBQztRQUNiQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ2YsQ0FBQyxHQUxNQyxNQUFNLEdBQWVSLEdBSzFCLEtBTGFTLFNBQVMsR0FBSVQsR0FLMUI7SUFFRixHQUFLLENBQXVCQSxJQUkxQixHQUowQkEsK0NBQVEsQ0FBZSxDQUFDO1FBQ2hEVSxJQUFJLEVBQUUsRUFBRTtRQUNSQyxJQUFJLEVBQUUsQ0FBQztRQUNQQyxXQUFXLEVBQUUsQ0FBRTtJQUNuQixDQUFDLEdBSk1DLE1BQU0sR0FBZWIsSUFJMUIsS0FKYWMsU0FBUyxHQUFJZCxJQUkxQjtJQUlGLEdBQUssQ0FBQ2UsU0FBUztxSkFBRyxRQUFRLFdBQUksQ0FBQztnQkFFZkMsSUFBSTs7Ozs7OytCQUFXbkIsZ0RBQVMsQ0FBQyxDQUFjOzt3QkFBdkNtQixJQUFJLGFBQUpBLElBQUk7d0JBQ1pQLFNBQVMsQ0FBQ08sSUFBSTs7Ozs7Ozs7Ozs7Ozs7OztRQUd0QixDQUFDO3dCQU5LRCxTQUFTOzs7O0lBUWYsR0FBSyxDQUFDRyxxQkFBcUI7cUpBQUcsUUFBUSxTQUFETixXQUFtQixFQUFLLENBQUM7Z0JBRTlDSSxJQUFJOzs7OzZCQURaSixXQUFXOzs7OzsrQkFDWWYsZ0RBQVMsQ0FBRSxDQUF5QiwyQkFBYyxPQUFaZSxXQUFXOzt3QkFBaEVJLElBQUksYUFBSkEsSUFBSTt3QkFDWlAsU0FBUyxDQUFDTyxJQUFJOzs7Ozs7UUFFdEIsQ0FBQzt3QkFMS0UscUJBQXFCLENBQVVOLFdBQW1COzs7O0lBT3hELEdBQUssQ0FBQ08sWUFBWTtxSkFBRyxRQUFRLFNBQURSLElBQVksRUFBSyxDQUFDO2dCQUU5QkssSUFBSTs7Ozs2QkFEWkwsSUFBSTs7Ozs7K0JBQ21CZCxnREFBUyxDQUFFLENBQWtCLG9CQUFPLE9BQUxjLElBQUk7O3dCQUFsREssSUFBSSxhQUFKQSxJQUFJO3dCQUNaUCxTQUFTLENBQUNPLElBQUk7Ozs7OztRQUV0QixDQUFDO3dCQUxLRyxZQUFZLENBQVVSLElBQVk7Ozs7SUFPcEMsR0FBSyxDQUFDUyxZQUFZO3FKQUFHLFFBQVEsU0FBRFYsSUFBWSxFQUFLLENBQUM7Z0JBRWxDTSxJQUFJOzs7OzZCQURaTCxJQUFJOzs7OzsrQkFDbUJkLGdEQUFTLENBQUUsQ0FBa0Isb0JBQU8sT0FBTGEsSUFBSTs7d0JBQWxETSxJQUFJLGFBQUpBLElBQUk7d0JBQ1pQLFNBQVMsQ0FBQ08sSUFBSTs7Ozs7O1FBRXRCLENBQUM7d0JBTFNJLFlBQVksQ0FBVVYsSUFBWTs7OztJQU81Q1gsZ0RBQVMsQ0FBQyxRQUNkLEdBRG9CLENBQUM7UUFDYmdCLFNBQVM7SUFDYixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBR0wsTUFBTSw2RUFDRE0sQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBWTs7d0ZBQ3RCeEIsa0RBQUk7O2dHQUNBeUIsQ0FBSztrQ0FBQyxDQUFrQzs7Ozs7O2dHQUN4Q0MsQ0FBSTt3QkFBQ0MsSUFBSSxFQUFDLENBQVU7d0JBQUNDLE9BQU8sRUFBQyxDQUF1Qzs7Ozs7Ozs7Ozs7O3dGQUV4RUMsQ0FBSTs7Z0dBQ0FOLENBQUc7d0JBQUNDLFNBQVMsRUFBQyxDQUFNOzhHQUNoQnJCLHFFQUFxQjs0QkFBQzJCLFFBQVEsRUFBRVYscUJBQXFCOzs7Ozs7Ozs7OztnR0FHekRoQix3REFBSzt3QkFDRk0sTUFBTSxFQUFFQSxNQUFNO3dCQUNkVyxZQUFZLEVBQUVBLFlBQVk7d0JBQzFCQyxZQUFZLEVBQUVBLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU05QyxDQUFDO0dBdkVLakIsT0FBTztLQUFQQSxPQUFPO0FBeUViLCtEQUFlQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3JlY29yZHMvaW5kZXgudHN4PzFkMmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgT3BlcmF0aW9uVHlwZURyb3BEb3duIGZyb20gJy4uLy4uL2NvbXBvbmVudC9vcGVyYXRpb24tZHJvcGRvd24nXG5pbXBvcnQgVGFibGUsIHsgUmVjb3JkUmVzdWx0U2V0IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50L3RhYmxlJ1xuXG5pbnRlcmZhY2UgUmVjb3JkRmlsdGVyIHtcbiAgICBzaXplOiBudW1iZXJcbiAgICBwYWdlOiBudW1iZXJcbiAgICBvcGVyYXRpb25JZDogc3RyaW5nXG59XG5cbmNvbnN0IFJlY29yZHM6IE5leHRQYWdlID0gKCkgPT4ge1xuXG4gICAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlPFJlY29yZFJlc3VsdFNldD4oe1xuICAgICAgICBjdXJyZW50UGFnZTogMCxcbiAgICAgICAgdG90YWxJdGVtczogMCxcbiAgICAgICAgdG90YWxQYWdlczogMCxcbiAgICAgICAgcmVjb3JkczogW11cbiAgICB9KVxuXG4gICAgY29uc3QgW2ZpbHRlciwgc2V0RmlsdGVyXSA9IHVzZVN0YXRlPFJlY29yZEZpbHRlcj4oe1xuICAgICAgICBzaXplOiAxMCxcbiAgICAgICAgcGFnZTogMSxcbiAgICAgICAgb3BlcmF0aW9uSWQ6ICcnXG4gICAgfSlcblxuXG5cbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9yZWNvcmRzJylcbiAgICAgICAgICAgIHNldFJlc3VsdChkYXRhKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgb25PcGVyYXRpb25UeXBlQ2hhbmdlID0gYXN5bmMgKG9wZXJhdGlvbklkOiBzdHJpbmcpID0+IHtcbiAgICAgICAgaWYgKG9wZXJhdGlvbklkKSB7XG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS9yZWNvcmRzP29wZXJhdGlvbklkPSR7b3BlcmF0aW9uSWR9YClcbiAgICAgICAgICAgIHNldFJlc3VsdChkYXRhKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgb25QYWdlU2VsZWN0ID0gYXN5bmMgKHBhZ2U6IG51bWJlcikgPT4ge1xuICAgICAgICBpZiAocGFnZSkge1xuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoYC9hcGkvcmVjb3Jkcz9wYWdlPSR7cGFnZX1gKVxuICAgICAgICAgICAgc2V0UmVzdWx0KGRhdGEpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAgICAgY29uc3Qgb25TaXplU2VsZWN0ID0gYXN5bmMgKHNpemU6IG51bWJlcikgPT4ge1xuICAgICAgICBpZiAocGFnZSkge1xuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoYC9hcGkvcmVjb3Jkcz9zaXplPSR7c2l6ZX1gKVxuICAgICAgICAgICAgc2V0UmVzdWx0KGRhdGEpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmZXRjaERhdGEoKVxuICAgIH0sIFtdKVxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWluLWgtZnVsbCc+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+QXJpdGhtZXRpYyBPcGVyYXRpb24gQXBwIC0gUmVjb3JkczwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J2luaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGgnIC8+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPE9wZXJhdGlvblR5cGVEcm9wRG93biBvbkNoYW5nZT17b25PcGVyYXRpb25UeXBlQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxUYWJsZVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQ9e3Jlc3VsdH1cbiAgICAgICAgICAgICAgICAgICAgb25QYWdlU2VsZWN0PXtvblBhZ2VTZWxlY3R9XG4gICAgICAgICAgICAgICAgICAgIG9uU2l6ZVNlbGVjdD17b25TaXplU2VsZWN0fVxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWNvcmRzXG4iXSwibmFtZXMiOlsiYXhpb3MiLCJIZWFkIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJPcGVyYXRpb25UeXBlRHJvcERvd24iLCJUYWJsZSIsIlJlY29yZHMiLCJjdXJyZW50UGFnZSIsInRvdGFsSXRlbXMiLCJ0b3RhbFBhZ2VzIiwicmVjb3JkcyIsInJlc3VsdCIsInNldFJlc3VsdCIsInNpemUiLCJwYWdlIiwib3BlcmF0aW9uSWQiLCJmaWx0ZXIiLCJzZXRGaWx0ZXIiLCJmZXRjaERhdGEiLCJkYXRhIiwiZ2V0Iiwib25PcGVyYXRpb25UeXBlQ2hhbmdlIiwib25QYWdlU2VsZWN0Iiwib25TaXplU2VsZWN0IiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJtYWluIiwib25DaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/records/index.tsx\n");

/***/ })

});