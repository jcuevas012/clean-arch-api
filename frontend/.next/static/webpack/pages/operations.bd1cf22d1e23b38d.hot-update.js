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

/***/ "./hooks/use-request.tsx":
/*!*******************************!*\
  !*** ./hooks/use-request.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar useRequest = function(options) {\n    _s();\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), errors1 = ref3[0], setErrors = ref3[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), loading = ref1[0], setLoading = ref1[1];\n    var _this1 = _this;\n    var request = function() {\n        var _ref = _asyncToGenerator(_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var params, response, ref, ref2, errors, _args = arguments;\n            return _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        params = _args.length > 0 && _args[0] !== void 0 ? _args[0] : {};\n                        _ctx.prev = 1;\n                        setErrors(null);\n                        setLoaading(true);\n                        _ctx.next = 6;\n                        return (axios__WEBPACK_IMPORTED_MODULE_2___default())[options.method](options.url, _objectSpread({}, options.body, params));\n                    case 6:\n                        response = _ctx.sent;\n                        if (options.onSuccess) {\n                            setLoaading(false);\n                            options.onSuccess(response.data);\n                        }\n                        _ctx.next = 16;\n                        break;\n                    case 10:\n                        _ctx.prev = 10;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        ;\n                        setLoaading(false);\n                        errors = (ref = _ctx.t0.response) === null || ref === void 0 ? void 0 : (ref2 = ref.data) === null || ref2 === void 0 ? void 0 : ref2.errors;\n                        setErrors(errors && errors.map(function(err, i) {\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: err.message\n                            }, i, false, {\n                                fileName: \"/app/hooks/use-request.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 69\n                            }, _this1);\n                        }));\n                    case 16:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    10\n                ]\n            ]);\n        }));\n        return function request() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return [\n        request,\n        errors1,\n        loading\n    ];\n};\n_s(useRequest, \"S0Br7Zc9zEE8EXE910Ts8PsU+2A=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (useRequest);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2UtcmVxdWVzdC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBeUI7QUFDcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVM5QyxHQUFLLENBQUNFLFVBQVUsR0FBRyxRQUFRLENBQVBDLE9BQXdCLEVBQUssQ0FBQzs7SUFDOUMsR0FBSyxDQUF1QkYsSUFBK0IsR0FBL0JBLCtDQUFRLElBQTdCRyxPQUFNLEdBQWVILElBQStCLEtBQTVDSSxTQUFTLEdBQUlKLElBQStCO0lBQzNELEdBQUssQ0FBeUJBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLEdBQXJDSyxPQUFPLEdBQWdCTCxJQUFlLEtBQTdCTSxVQUFVLEdBQUlOLElBQWU7O0lBRTdDLEdBQUssQ0FBQ08sT0FBTztxSkFBRyxRQUFRLFdBQWUsQ0FBQztnQkFBakJDLE1BQU0sRUFJZkMsUUFBUSxFQVNDQyxHQUFjLFFBQXZCUCxNQUFNOzs7O3dCQWJHSyxNQUFNLHdEQUFHLENBQUMsQ0FBQzs7d0JBRTFCSixTQUFTLENBQUMsSUFBSTt3QkFDZE8sV0FBVyxDQUFDLElBQUk7OytCQUNPWiw4Q0FBSyxDQUFDRyxPQUFPLENBQUNVLE1BQU0sRUFBRVYsT0FBTyxDQUFDVyxHQUFHLG9CQUFPWCxPQUFPLENBQUNZLElBQUksRUFBS04sTUFBTTs7d0JBQWhGQyxRQUFRO3dCQUVkLEVBQUUsRUFBRVAsT0FBTyxDQUFDYSxTQUFTLEVBQUUsQ0FBQzs0QkFDcEJKLFdBQVcsQ0FBQyxLQUFLOzRCQUNqQlQsT0FBTyxDQUFDYSxTQUFTLENBQUNOLFFBQVEsQ0FBQ08sSUFBSTt3QkFDbkMsQ0FBQzs7Ozs7Ozt3QkFHREwsV0FBVyxDQUFDLEtBQUs7d0JBQ1hSLE1BQU0sSUFBR08sR0FBYyxXQUFSRCxRQUFRLGNBQWRDLEdBQWMsS0FBZEEsSUFBSSxDQUFKQSxDQUFvQixHQUFwQkEsSUFBSSxDQUFKQSxDQUFvQixXQUFwQkEsR0FBYyxDQUFFTSxJQUFJLHVCQUFwQk4sSUFBSSxDQUFKQSxDQUFvQixHQUFwQkEsSUFBSSxDQUFKQSxDQUFvQixRQUFFUCxNQUFNO3dCQUMzQ0MsU0FBUyxDQUFDRCxNQUFNLElBQUlBLE1BQU0sQ0FBQ2MsR0FBRyxDQUFDLFFBQVEsQ0FBUEMsR0FBUSxFQUFFQyxDQUFTOzBDQUFLLE1BQU0sK0RBQUxDLENBQUc7MENBQVVGLEdBQUcsQ0FBQ0csT0FBTzsrQkFBZkYsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztRQUUzRSxDQUFDO3dCQWhCS1osT0FBTzs7OztJQWtCYixNQUFNLENBQUMsQ0FBQ0E7UUFBQUEsT0FBTztRQUFFSixPQUFNO1FBQUVFLE9BQU87SUFBQSxDQUFDO0FBQ3JDLENBQUM7R0F2QktKLFVBQVU7QUF5QmhCLCtEQUFlQSxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2hvb2tzL3VzZS1yZXF1ZXN0LnRzeD9hZjQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7IFJlYWN0RWxlbWVudCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuaW50ZXJmYWNlIFVzZVJlcXVlc3RQcm9wcyB7XG4gICAgdXJsOiBzdHJpbmdcbiAgICBtZXRob2Q6ICdwb3N0JyB8ICdwdXQnIHwgJ2RlbGV0ZSdcbiAgICBib2R5OiBhbnlcbiAgICBvblN1Y2Nlc3M6IEZ1bmN0aW9uXG59XG5cbmNvbnN0IHVzZVJlcXVlc3QgPSAob3B0aW9uczogVXNlUmVxdWVzdFByb3BzKSA9PiB7XG4gICAgY29uc3QgW2Vycm9ycywgc2V0RXJyb3JzXSA9IHVzZVN0YXRlPFJlYWN0RWxlbWVudCB8IG51bGw+KClcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAgIGNvbnN0IHJlcXVlc3QgPSBhc3luYyAocGFyYW1zID0ge30pID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNldEVycm9ycyhudWxsKVxuICAgICAgICAgICAgc2V0TG9hYWRpbmcodHJ1ZSlcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3Nbb3B0aW9ucy5tZXRob2RdKG9wdGlvbnMudXJsLCB7IC4uLm9wdGlvbnMuYm9keSwgLi4ucGFyYW1zfSlcblxuICAgICAgICAgICAgaWYgKG9wdGlvbnMub25TdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgc2V0TG9hYWRpbmcoZmFsc2UpXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5vblN1Y2Nlc3MocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgICAgICBzZXRMb2FhZGluZyhmYWxzZSlcbiAgICAgICAgICAgIGNvbnN0IGVycm9ycyA9IGVycm9yLnJlc3BvbnNlPy5kYXRhPy5lcnJvcnNcbiAgICAgICAgICAgIHNldEVycm9ycyhlcnJvcnMgJiYgZXJyb3JzLm1hcCgoZXJyOiBhbnksIGk6IG51bWJlcikgPT4gPGRpdiBrZXk9e2l9PntlcnIubWVzc2FnZX08L2Rpdj4pKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFtyZXF1ZXN0LCBlcnJvcnMsIGxvYWRpbmddXG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVJlcXVlc3RcbiJdLCJuYW1lcyI6WyJheGlvcyIsInVzZVN0YXRlIiwidXNlUmVxdWVzdCIsIm9wdGlvbnMiLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJlcXVlc3QiLCJwYXJhbXMiLCJyZXNwb25zZSIsImVycm9yIiwic2V0TG9hYWRpbmciLCJtZXRob2QiLCJ1cmwiLCJib2R5Iiwib25TdWNjZXNzIiwiZGF0YSIsIm1hcCIsImVyciIsImkiLCJkaXYiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/use-request.tsx\n");

/***/ })

});