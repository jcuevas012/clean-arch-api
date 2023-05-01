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

/***/ "./component/operation-dropdown.tsx":
/*!******************************************!*\
  !*** ./component/operation-dropdown.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar OperationTypeDropDown = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), operationTypes = ref[0], setOperationTypes = ref[1];\n    var fetchData = function() {\n        var _ref = _asyncToGenerator(_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var data;\n            return _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return axios__WEBPACK_IMPORTED_MODULE_3___default().get('/api/operations');\n                    case 3:\n                        data = _ctx.sent.data;\n                        setOperationTypes(data || []);\n                        _ctx.next = 10;\n                        break;\n                    case 7:\n                        _ctx.prev = 7;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log('Error loading data', _ctx.t0);\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    7\n                ]\n            ]);\n        }));\n        return function fetchData() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        fetchData();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                children: \"Operation Type:\"\n            }, void 0, false, {\n                fileName: \"/app/component/operation-dropdown.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"select\", {\n                name: \"cars\",\n                id: \"cars\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                        value: \"volvo\",\n                        children: \"Volvo\"\n                    }, void 0, false, {\n                        fileName: \"/app/component/operation-dropdown.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                        value: \"saab\",\n                        children: \"Saab\"\n                    }, void 0, false, {\n                        fileName: \"/app/component/operation-dropdown.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                        value: \"opel\",\n                        children: \"Opel\"\n                    }, void 0, false, {\n                        fileName: \"/app/component/operation-dropdown.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                        value: \"audi\",\n                        children: \"Audi\"\n                    }, void 0, false, {\n                        fileName: \"/app/component/operation-dropdown.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/app/component/operation-dropdown.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/app/component/operation-dropdown.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, _this));\n};\n_s(OperationTypeDropDown, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = OperationTypeDropDown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (OperationTypeDropDown);\nvar _c;\n$RefreshReg$(_c, \"OperationTypeDropDown\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvb3BlcmF0aW9uLWRyb3Bkb3duLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEyQztBQUNsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekIsR0FBSyxDQUFDRyxxQkFBcUIsR0FBYSxRQUN4QyxHQUQ4QyxDQUFDOztJQUU3QyxHQUFLLENBQXVDRixHQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEdBQWhERyxjQUFjLEdBQXVCSCxHQUFZLEtBQWpDSSxpQkFBaUIsR0FBSUosR0FBWTtJQUV4RCxHQUFLLENBQUNLLFNBQVM7cUpBQUcsUUFBUSxXQUFJLENBQUM7Z0JBRW5CQyxJQUFJOzs7Ozs7K0JBQVdMLGdEQUFTLENBQUMsQ0FBaUI7O3dCQUExQ0ssSUFBSSxhQUFKQSxJQUFJO3dCQUNaRixpQkFBaUIsQ0FBQ0UsSUFBSSxJQUFJLENBQUMsQ0FBQzs7Ozs7O3dCQUc1QkUsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBb0I7Ozs7Ozs7Ozs7O1FBRXBDLENBQUM7d0JBUktKLFNBQVM7Ozs7SUFVZk4sZ0RBQVMsQ0FBQyxRQUNaLEdBRGtCLENBQUM7UUFDZk0sU0FBUztJQUNYLENBQUMsRUFBRSxDQUFDLENBQUM7SUFHTCxNQUFNLDZFQUNISyxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUFFOzt3RkFDZEMsQ0FBSzswQkFBRSxDQUFlOzs7Ozs7d0ZBQ3RCQyxDQUFNO2dCQUFDQyxJQUFJLEVBQUMsQ0FBTTtnQkFBQ0MsRUFBRSxFQUFDLENBQU07O2dHQUMxQkMsQ0FBTTt3QkFBQ0MsS0FBSyxFQUFDLENBQU87a0NBQUMsQ0FBSzs7Ozs7O2dHQUMxQkQsQ0FBTTt3QkFBQ0MsS0FBSyxFQUFDLENBQU07a0NBQUMsQ0FBSTs7Ozs7O2dHQUN4QkQsQ0FBTTt3QkFBQ0MsS0FBSyxFQUFDLENBQU07a0NBQUMsQ0FBSTs7Ozs7O2dHQUN4QkQsQ0FBTTt3QkFBQ0MsS0FBSyxFQUFDLENBQU07a0NBQUMsQ0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWpDLENBQUM7R0E5QktmLHFCQUFxQjtLQUFyQkEscUJBQXFCO0FBZ0MzQiwrREFBZUEscUJBQXFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudC9vcGVyYXRpb24tZHJvcGRvd24udHN4P2NiNzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcblxuY29uc3QgT3BlcmF0aW9uVHlwZURyb3BEb3duOiBSZWFjdC5GQyA9ICgpID0+IHtcblxuICBjb25zdCBbb3BlcmF0aW9uVHlwZXMsIHNldE9wZXJhdGlvblR5cGVzXSA9IHVzZVN0YXRlKFtdKVxuXG4gIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvb3BlcmF0aW9ucycpXG4gICAgICBzZXRPcGVyYXRpb25UeXBlcyhkYXRhIHx8IFtdKVxuICAgICAgXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBsb2FkaW5nIGRhdGEnLCBlcnJvcilcbiAgICB9XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoRGF0YSgpXG4gIH0sIFtdKVxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgPGxhYmVsID5PcGVyYXRpb24gVHlwZTo8L2xhYmVsPlxuICAgICAgPHNlbGVjdCBuYW1lPVwiY2Fyc1wiIGlkPVwiY2Fyc1wiPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwidm9sdm9cIj5Wb2x2bzwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwic2FhYlwiPlNhYWI8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm9wZWxcIj5PcGVsPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJhdWRpXCI+QXVkaTwvb3B0aW9uPlxuICAgICAgPC9zZWxlY3Q+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgT3BlcmF0aW9uVHlwZURyb3BEb3duXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJheGlvcyIsIk9wZXJhdGlvblR5cGVEcm9wRG93biIsIm9wZXJhdGlvblR5cGVzIiwic2V0T3BlcmF0aW9uVHlwZXMiLCJmZXRjaERhdGEiLCJkYXRhIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImxhYmVsIiwic2VsZWN0IiwibmFtZSIsImlkIiwib3B0aW9uIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./component/operation-dropdown.tsx\n");

/***/ })

});