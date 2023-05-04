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

/***/ "./component/operation-dropdown.tsx":
/*!******************************************!*\
  !*** ./component/operation-dropdown.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar OperationTypeDropDown = function(param1) {\n    var onChange = param1.onChange;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), operationTypes = ref[0], setOperationTypes = ref[1];\n    var fetchData = function() {\n        var _ref = _asyncToGenerator(_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var data;\n            return _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return axios__WEBPACK_IMPORTED_MODULE_3___default().get('/api/operations/types');\n                    case 3:\n                        data = _ctx.sent.data;\n                        setOperationTypes(data || []);\n                        _ctx.next = 10;\n                        break;\n                    case 7:\n                        _ctx.prev = 7;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log('Error loading data', _ctx.t0);\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    7\n                ]\n            ]);\n        }));\n        return function fetchData() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var _onChange = function(param) {\n        var value = param.target.value;\n        onChange(value);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        fetchData();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"flex-col py-20 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                children: \"Operation Type:\"\n            }, void 0, false, {\n                fileName: \"/app/component/operation-dropdown.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/app/component/operation-dropdown.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"select\", {\n                name: \"cars\",\n                id: \"cars\",\n                onChange: _onChange,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                        value: \"\",\n                        children: \" Select Operation Type \"\n                    }, void 0, false, {\n                        fileName: \"/app/component/operation-dropdown.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, _this),\n                    operationTypes.length && operationTypes.map(function(operationType) {\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                            value: operationType === null || operationType === void 0 ? void 0 : operationType.id,\n                            children: \"\".concat(operationType === null || operationType === void 0 ? void 0 : operationType.description, \" -- Cost: \").concat(operationType.cost)\n                        }, operationType.id, false, {\n                            fileName: \"/app/component/operation-dropdown.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 48\n                        }, _this1);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/app/component/operation-dropdown.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/app/component/operation-dropdown.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, _this));\n};\n_s(OperationTypeDropDown, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = OperationTypeDropDown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (OperationTypeDropDown);\nvar _c;\n$RefreshReg$(_c, \"OperationTypeDropDown\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvb3BlcmF0aW9uLWRyb3Bkb3duLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEyQztBQUNsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlekIsR0FBSyxDQUFDRyxxQkFBcUIsR0FBeUMsUUFBUSxTQUFVLENBQUM7UUFBaEJDLFFBQVEsVUFBUkEsUUFBUTs7O0lBRTdFLEdBQUssQ0FBdUNILEdBQThCLEdBQTlCQSwrQ0FBUSxDQUFtQixDQUFDLENBQUMsR0FBbEVJLGNBQWMsR0FBdUJKLEdBQThCLEtBQW5ESyxpQkFBaUIsR0FBSUwsR0FBOEI7SUFFMUUsR0FBSyxDQUFDTSxTQUFTO3FKQUFHLFFBQVEsV0FBSSxDQUFDO2dCQUVuQkMsSUFBSTs7Ozs7OytCQUFXTixnREFBUyxDQUFDLENBQXVCOzt3QkFBaERNLElBQUksYUFBSkEsSUFBSTt3QkFDWkYsaUJBQWlCLENBQUNFLElBQUksSUFBSSxDQUFDLENBQUM7Ozs7Ozt3QkFHNUJFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQW9COzs7Ozs7Ozs7OztRQUVwQyxDQUFDO3dCQVJLSixTQUFTOzs7O0lBV2YsR0FBSyxDQUFDSyxTQUFTLEdBQUcsUUFBUSxRQUF3QixDQUFDO1lBQXBCQyxLQUFLLFNBQWZDLE1BQU0sQ0FBSUQsS0FBSztRQUNsQ1QsUUFBUSxDQUFDUyxLQUFLO0lBQ2hCLENBQUM7SUFHRGIsZ0RBQVMsQ0FBQyxRQUNaLEdBRGtCLENBQUM7UUFDZk8sU0FBUztJQUNYLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFTCxNQUFNLDZFQUNIUSxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUFpQjs7d0ZBQzdCQyxDQUFLOzBCQUFFLENBQWU7Ozs7Ozt3RkFDdEJDLENBQUU7Ozs7O3dGQUNGQyxDQUFNO2dCQUFDQyxJQUFJLEVBQUMsQ0FBTTtnQkFBQ0MsRUFBRSxFQUFDLENBQU07Z0JBQUNqQixRQUFRLEVBQUVRLFNBQVM7O2dHQUM5Q1UsQ0FBTTt3QkFBQ1QsS0FBSyxFQUFDLENBQUU7a0NBQUMsQ0FBdUI7Ozs7OztvQkFDdENSLGNBQWMsQ0FBQ2tCLE1BQU0sSUFDdkJsQixjQUFjLENBQUNtQixHQUFHLENBQUMsUUFBUSxDQUFQQyxhQUFhO3NDQUFNLE1BQU0sK0RBQUxILENBQU07NEJBQXdCVCxLQUFLLEVBQUVZLGFBQWEsYUFBYkEsYUFBYSxLQUFiQSxJQUFJLENBQUpBLENBQWlCLEdBQWpCQSxJQUFJLENBQUpBLENBQWlCLEdBQWpCQSxhQUFhLENBQUVKLEVBQUU7c0NBQUksR0FBeUNJLE1BQWtCLENBQXpEQSxhQUFhLGFBQWJBLGFBQWEsS0FBYkEsSUFBSSxDQUFKQSxDQUEwQixHQUExQkEsSUFBSSxDQUFKQSxDQUEwQixHQUExQkEsYUFBYSxDQUFFQyxXQUFXLEVBQUMsQ0FBVSxhQUFxQixPQUFuQkQsYUFBYSxDQUFDRSxJQUFJOzJCQUF6R0YsYUFBYSxDQUFDSixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLNUUsQ0FBQztHQXBDS2xCLHFCQUFxQjtLQUFyQkEscUJBQXFCO0FBc0MzQiwrREFBZUEscUJBQXFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudC9vcGVyYXRpb24tZHJvcGRvd24udHN4P2NiNzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcblxuXG5pbnRlcmZhY2UgT3BlcmF0aW9uVHlwZXMge1xuICBpZDogc3RyaW5nXG4gIHR5cGU6IHN0cmluZ1xuICBkZXNjcmlwdGlvbjogc3RyaW5nXG4gIGNvc3Q6IG51bWJlclxufVxuXG5cbmludGVyZmFjZSBPcGVyYXRpb25UeXBlRHJvcERvd25UeXBlcyB7XG4gIG9uQ2hhbmdlOiAodmFsdWU6IHN0cmluZykgPT4gdm9pZFxufVxuXG5jb25zdCBPcGVyYXRpb25UeXBlRHJvcERvd246IFJlYWN0LkZDPE9wZXJhdGlvblR5cGVEcm9wRG93blR5cGVzPiA9ICh7IG9uQ2hhbmdlIH0pID0+IHtcblxuICBjb25zdCBbb3BlcmF0aW9uVHlwZXMsIHNldE9wZXJhdGlvblR5cGVzXSA9IHVzZVN0YXRlPE9wZXJhdGlvblR5cGVzW10+KFtdKVxuXG4gIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvb3BlcmF0aW9ucy90eXBlcycpXG4gICAgICBzZXRPcGVyYXRpb25UeXBlcyhkYXRhIHx8IFtdKVxuICAgICAgXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBsb2FkaW5nIGRhdGEnLCBlcnJvcilcbiAgICB9XG4gIH1cblxuXG4gIGNvbnN0IF9vbkNoYW5nZSA9ICh7IHRhcmdldDogeyB2YWx1ZSB9IH06IGFueSkgPT4ge1xuICAgIG9uQ2hhbmdlKHZhbHVlKVxuICB9IFxuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaERhdGEoKVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1jb2wgcHktMjAgXCI+XG4gICAgICA8bGFiZWwgPk9wZXJhdGlvbiBUeXBlOjwvbGFiZWw+XG4gICAgICA8YnIvPlxuICAgICAgPHNlbGVjdCBuYW1lPVwiY2Fyc1wiIGlkPVwiY2Fyc1wiIG9uQ2hhbmdlPXtfb25DaGFuZ2V9ID5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPiBTZWxlY3QgT3BlcmF0aW9uIFR5cGUgPC9vcHRpb24+XG4gICAgICAgIHsgb3BlcmF0aW9uVHlwZXMubGVuZ3RoICYmIFxuICAgICAgICBvcGVyYXRpb25UeXBlcy5tYXAoKG9wZXJhdGlvblR5cGUpID0+ICg8b3B0aW9uIGtleT17b3BlcmF0aW9uVHlwZS5pZH0gdmFsdWU9e29wZXJhdGlvblR5cGU/LmlkfT57YCR7b3BlcmF0aW9uVHlwZT8uZGVzY3JpcHRpb259IC0tIENvc3Q6ICR7b3BlcmF0aW9uVHlwZS5jb3N0fWAgfTwvb3B0aW9uPikpfVxuICAgICAgICBcbiAgICAgIDwvc2VsZWN0PlxuICAgIDwvZGl2PlxuICApIFxufVxuXG5leHBvcnQgZGVmYXVsdCBPcGVyYXRpb25UeXBlRHJvcERvd25cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiT3BlcmF0aW9uVHlwZURyb3BEb3duIiwib25DaGFuZ2UiLCJvcGVyYXRpb25UeXBlcyIsInNldE9wZXJhdGlvblR5cGVzIiwiZmV0Y2hEYXRhIiwiZGF0YSIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJfb25DaGFuZ2UiLCJ2YWx1ZSIsInRhcmdldCIsImRpdiIsImNsYXNzTmFtZSIsImxhYmVsIiwiYnIiLCJzZWxlY3QiLCJuYW1lIiwiaWQiLCJvcHRpb24iLCJsZW5ndGgiLCJtYXAiLCJvcGVyYXRpb25UeXBlIiwiZGVzY3JpcHRpb24iLCJjb3N0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./component/operation-dropdown.tsx\n");

/***/ })

});