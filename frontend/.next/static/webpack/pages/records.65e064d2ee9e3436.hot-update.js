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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _component_operation_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../component/operation-dropdown */ \"./component/operation-dropdown.tsx\");\n/* harmony import */ var _component_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../component/table */ \"./component/table/index.tsx\");\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar withAuth = function(Component) {\n    var props = Component && Component.getInitialProps && Component.getInitialProps();\n    return Component;\n};\nvar Records = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({\n        currentPage: 0,\n        totalItems: 0,\n        totalPages: 0,\n        records: []\n    }), result = ref[0], setResult = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({\n        size: 10,\n        page: 1,\n        operationId: ''\n    }), filter = ref1[0], setFilter = ref1[1];\n    var fetchData = function() {\n        var _ref = _asyncToGenerator(_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var data;\n            return _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return axios__WEBPACK_IMPORTED_MODULE_2___default().get('/api/records');\n                    case 3:\n                        data = _ctx.sent.data;\n                        setResult(data);\n                        _ctx.next = 9;\n                        break;\n                    case 7:\n                        _ctx.prev = 7;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    7\n                ]\n            ]);\n        }));\n        return function fetchData() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var onOperationTypeChange = function() {\n        var _ref = _asyncToGenerator(_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(operationId) {\n            var data;\n            return _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!operationId) {\n                            _ctx.next = 5;\n                            break;\n                        }\n                        _ctx.next = 3;\n                        return axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"/api/records?operationId=\".concat(operationId));\n                    case 3:\n                        data = _ctx.sent.data;\n                        setResult(data);\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onOperationTypeChange(operationId) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var onPageSelect = function() {\n        var _ref = _asyncToGenerator(_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(page) {\n            var data;\n            return _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!page) {\n                            _ctx.next = 5;\n                            break;\n                        }\n                        _ctx.next = 3;\n                        return axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"/api/records?page=\".concat(page));\n                    case 3:\n                        data = _ctx.sent.data;\n                        setResult(data);\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onPageSelect(page) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var onSizeSelect = function() {\n        var _ref = _asyncToGenerator(_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(size) {\n            var data;\n            return _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!size) {\n                            _ctx.next = 5;\n                            break;\n                        }\n                        _ctx.next = 3;\n                        return axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"/api/records?size=\".concat(size));\n                    case 3:\n                        data = _ctx.sent.data;\n                        setResult(data);\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onSizeSelect(size) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        fetchData();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"min-h-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"Arithmetic Operation App - Records\"\n                    }, void 0, false, {\n                        fileName: \"/app/pages/records/index.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"initial-scale=1.0, width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"/app/pages/records/index.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/app/pages/records/index.tsx\",\n                lineNumber: 74,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"py-6\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_component_operation_dropdown__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            onChange: onOperationTypeChange\n                        }, void 0, false, {\n                            fileName: \"/app/pages/records/index.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/app/pages/records/index.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_component_table__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        result: result,\n                        onPageSelect: onPageSelect,\n                        onSizeSelect: onSizeSelect\n                    }, void 0, false, {\n                        fileName: \"/app/pages/records/index.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/app/pages/records/index.tsx\",\n                lineNumber: 78,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/app/pages/records/index.tsx\",\n        lineNumber: 73,\n        columnNumber: 9\n    }, _this));\n};\n_s(Records, \"Efnx0bGJ9RurRgGJTYyR1Ew1W1w=\");\n_c = Records;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = withAuth(Records));\nvar _c, _c1;\n$RefreshReg$(_c, \"Records\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Rzt3QkFBQ0MsU0FBUyxFQUFDLENBQU07OEdBQ2hCekIscUVBQXFCOzRCQUFDK0IsUUFBUSxFQUFFVixxQkFBcUI7Ozs7Ozs7Ozs7O2dHQUd6RHBCLHdEQUFLO3dCQUNGVSxNQUFNLEVBQUVBLE1BQU07d0JBQ2RXLFlBQVksRUFBRUEsWUFBWTt3QkFDMUJDLFlBQVksRUFBRUEsWUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTlDLENBQUM7R0F2RUtqQixPQUFPO0tBQVBBLE9BQU87QUF5RWIsK0RBQWUsTUFBQUosUUFBUSxDQUFDSSxPQUFPLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVjb3Jkcy9pbmRleC50c3g/MWQyYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBPcGVyYXRpb25UeXBlRHJvcERvd24gZnJvbSAnLi4vLi4vY29tcG9uZW50L29wZXJhdGlvbi1kcm9wZG93bidcbmltcG9ydCBUYWJsZSwgeyBSZWNvcmRSZXN1bHRTZXQgfSBmcm9tICcuLi8uLi9jb21wb25lbnQvdGFibGUnXG5cbmNvbnN0IHdpdGhBdXRoID0gKENvbXBvbmVudDogTmV4dFBhZ2UpID0+IHtcblxuICAgIGNvbnN0IHByb3BzID0gQ29tcG9uZW50ICYmIENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMgJiYgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcygpXG5cbiAgICByZXR1cm4gQ29tcG9uZW50XG59XG5cbmludGVyZmFjZSBSZWNvcmRGaWx0ZXIge1xuICAgIHNpemU6IG51bWJlclxuICAgIHBhZ2U6IG51bWJlclxuICAgIG9wZXJhdGlvbklkOiBzdHJpbmdcbn1cblxuY29uc3QgUmVjb3JkczogTmV4dFBhZ2UgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGU8UmVjb3JkUmVzdWx0U2V0Pih7XG4gICAgICAgIGN1cnJlbnRQYWdlOiAwLFxuICAgICAgICB0b3RhbEl0ZW1zOiAwLFxuICAgICAgICB0b3RhbFBhZ2VzOiAwLFxuICAgICAgICByZWNvcmRzOiBbXVxuICAgIH0pXG5cbiAgICBjb25zdCBbZmlsdGVyLCBzZXRGaWx0ZXJdID0gdXNlU3RhdGU8UmVjb3JkRmlsdGVyPih7XG4gICAgICAgIHNpemU6IDEwLFxuICAgICAgICBwYWdlOiAxLFxuICAgICAgICBvcGVyYXRpb25JZDogJydcbiAgICB9KVxuXG5cblxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3JlY29yZHMnKVxuICAgICAgICAgICAgc2V0UmVzdWx0KGRhdGEpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBvbk9wZXJhdGlvblR5cGVDaGFuZ2UgPSBhc3luYyAob3BlcmF0aW9uSWQ6IHN0cmluZykgPT4ge1xuICAgICAgICBpZiAob3BlcmF0aW9uSWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGAvYXBpL3JlY29yZHM/b3BlcmF0aW9uSWQ9JHtvcGVyYXRpb25JZH1gKVxuICAgICAgICAgICAgc2V0UmVzdWx0KGRhdGEpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBvblBhZ2VTZWxlY3QgPSBhc3luYyAocGFnZTogbnVtYmVyKSA9PiB7XG4gICAgICAgIGlmIChwYWdlKSB7XG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS9yZWNvcmRzP3BhZ2U9JHtwYWdlfWApXG4gICAgICAgICAgICBzZXRSZXN1bHQoZGF0YSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgICAgICBjb25zdCBvblNpemVTZWxlY3QgPSBhc3luYyAoc2l6ZTogbnVtYmVyKSA9PiB7XG4gICAgICAgIGlmIChzaXplKSB7XG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS9yZWNvcmRzP3NpemU9JHtzaXplfWApXG4gICAgICAgICAgICBzZXRSZXN1bHQoZGF0YSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZldGNoRGF0YSgpXG4gICAgfSwgW10pXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtaW4taC1mdWxsJz5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5Bcml0aG1ldGljIE9wZXJhdGlvbiBBcHAgLSBSZWNvcmRzPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0naW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aCcgLz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxtYWluPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktNlwiPlxuICAgICAgICAgICAgICAgICAgICA8T3BlcmF0aW9uVHlwZURyb3BEb3duIG9uQ2hhbmdlPXtvbk9wZXJhdGlvblR5cGVDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPFRhYmxlXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdD17cmVzdWx0fVxuICAgICAgICAgICAgICAgICAgICBvblBhZ2VTZWxlY3Q9e29uUGFnZVNlbGVjdH1cbiAgICAgICAgICAgICAgICAgICAgb25TaXplU2VsZWN0PXtvblNpemVTZWxlY3R9XG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPC9tYWluPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKFJlY29yZHMpXG5cblxuIl0sIm5hbWVzIjpbImF4aW9zIiwiSGVhZCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiT3BlcmF0aW9uVHlwZURyb3BEb3duIiwiVGFibGUiLCJ3aXRoQXV0aCIsIkNvbXBvbmVudCIsInByb3BzIiwiZ2V0SW5pdGlhbFByb3BzIiwiUmVjb3JkcyIsImN1cnJlbnRQYWdlIiwidG90YWxJdGVtcyIsInRvdGFsUGFnZXMiLCJyZWNvcmRzIiwicmVzdWx0Iiwic2V0UmVzdWx0Iiwic2l6ZSIsInBhZ2UiLCJvcGVyYXRpb25JZCIsImZpbHRlciIsInNldEZpbHRlciIsImZldGNoRGF0YSIsImRhdGEiLCJnZXQiLCJvbk9wZXJhdGlvblR5cGVDaGFuZ2UiLCJvblBhZ2VTZWxlY3QiLCJvblNpemVTZWxlY3QiLCJkaXYiLCJjbGFzc05hbWUiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsIm1haW4iLCJvbkNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/records/index.tsx\n");

/***/ })

});