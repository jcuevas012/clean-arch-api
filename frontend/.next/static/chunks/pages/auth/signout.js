/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/auth/signout"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fauth%2Fsignout&absolutePagePath=%2Fapp%2Fpages%2Fauth%2Fsignout.tsx!":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fauth%2Fsignout&absolutePagePath=%2Fapp%2Fpages%2Fauth%2Fsignout.tsx! ***!
  \***************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/auth/signout\",\n      function () {\n        return __webpack_require__(/*! ./pages/auth/signout.tsx */ \"./pages/auth/signout.tsx\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/auth/signout\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/cGFnZT0lMkZhdXRoJTJGc2lnbm91dCZhYnNvbHV0ZVBhZ2VQYXRoPSUyRmFwcCUyRnBhZ2VzJTJGYXV0aCUyRnNpZ25vdXQudHN4IS5qcyIsIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLDBEQUEwQjtBQUNqRDtBQUNBO0FBQ0EsT0FBTyxJQUFVO0FBQ2pCLE1BQU0sVUFBVTtBQUNoQjtBQUNBLE9BQU87QUFDUDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8/YTU0MCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL2F1dGgvc2lnbm91dFwiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcIi4vcGFnZXMvYXV0aC9zaWdub3V0LnRzeFwiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cuX19ORVhUX1AucHVzaChbXCIvYXV0aC9zaWdub3V0XCJdKVxuICAgICAgfSk7XG4gICAgfVxuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fauth%2Fsignout&absolutePagePath=%2Fapp%2Fpages%2Fauth%2Fsignout.tsx!\n");

/***/ }),

/***/ "./hooks/use-request.tsx":
/*!*******************************!*\
  !*** ./hooks/use-request.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar useRequest = function(options) {\n    _s();\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), errors1 = ref3[0], setErrors = ref3[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), isLoading = ref1[0], setLoading = ref1[1];\n    var _this1 = _this;\n    var request = function() {\n        var _ref = _asyncToGenerator(_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var params, response, ref, ref2, errors, _args = arguments;\n            return _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        params = _args.length > 0 && _args[0] !== void 0 ? _args[0] : {};\n                        _ctx.prev = 1;\n                        setErrors(null);\n                        setLoading(true);\n                        _ctx.next = 6;\n                        return (axios__WEBPACK_IMPORTED_MODULE_2___default())[options.method](options.url, _objectSpread({}, options.body, params));\n                    case 6:\n                        response = _ctx.sent;\n                        if (options.onSuccess) {\n                            setLoading(false);\n                            options.onSuccess(response.data);\n                        }\n                        _ctx.next = 16;\n                        break;\n                    case 10:\n                        _ctx.prev = 10;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        ;\n                        setLoading(false);\n                        errors = (ref = _ctx.t0.response) === null || ref === void 0 ? void 0 : (ref2 = ref.data) === null || ref2 === void 0 ? void 0 : ref2.errors;\n                        setErrors(errors && errors.map(function(err, i) {\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: err.message\n                            }, i, false, {\n                                fileName: \"/app/hooks/use-request.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 69\n                            }, _this1);\n                        }));\n                    case 16:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    10\n                ]\n            ]);\n        }));\n        return function request() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return [\n        request,\n        errors1,\n        isLoading\n    ];\n};\n_s(useRequest, \"S0Br7Zc9zEE8EXE910Ts8PsU+2A=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (useRequest);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2UtcmVxdWVzdC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBeUI7QUFDcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVM5QyxHQUFLLENBQUNFLFVBQVUsR0FBRyxRQUFRLENBQVBDLE9BQXdCLEVBQUssQ0FBQzs7SUFDOUMsR0FBSyxDQUF1QkYsSUFBK0IsR0FBL0JBLCtDQUFRLElBQTdCRyxPQUFNLEdBQWVILElBQStCLEtBQTVDSSxTQUFTLEdBQUlKLElBQStCO0lBQzNELEdBQUssQ0FBMkJBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLEdBQXZDSyxTQUFTLEdBQWdCTCxJQUFlLEtBQTdCTSxVQUFVLEdBQUlOLElBQWU7O0lBRS9DLEdBQUssQ0FBQ08sT0FBTztxSkFBRyxRQUFRLFdBQWUsQ0FBQztnQkFBakJDLE1BQU0sRUFJZkMsUUFBUSxFQVNDQyxHQUFjLFFBQXZCUCxNQUFNOzs7O3dCQWJHSyxNQUFNLHdEQUFHLENBQUMsQ0FBQzs7d0JBRTFCSixTQUFTLENBQUMsSUFBSTt3QkFDZEUsVUFBVSxDQUFDLElBQUk7OytCQUNRUCw4Q0FBSyxDQUFDRyxPQUFPLENBQUNTLE1BQU0sRUFBRVQsT0FBTyxDQUFDVSxHQUFHLG9CQUFPVixPQUFPLENBQUNXLElBQUksRUFBS0wsTUFBTTs7d0JBQWhGQyxRQUFRO3dCQUVkLEVBQUUsRUFBRVAsT0FBTyxDQUFDWSxTQUFTLEVBQUUsQ0FBQzs0QkFDcEJSLFVBQVUsQ0FBQyxLQUFLOzRCQUNoQkosT0FBTyxDQUFDWSxTQUFTLENBQUNMLFFBQVEsQ0FBQ00sSUFBSTt3QkFDbkMsQ0FBQzs7Ozs7Ozt3QkFHRFQsVUFBVSxDQUFDLEtBQUs7d0JBQ1ZILE1BQU0sSUFBR08sR0FBYyxXQUFSRCxRQUFRLGNBQWRDLEdBQWMsS0FBZEEsSUFBSSxDQUFKQSxDQUFvQixHQUFwQkEsSUFBSSxDQUFKQSxDQUFvQixXQUFwQkEsR0FBYyxDQUFFSyxJQUFJLHVCQUFwQkwsSUFBSSxDQUFKQSxDQUFvQixHQUFwQkEsSUFBSSxDQUFKQSxDQUFvQixRQUFFUCxNQUFNO3dCQUMzQ0MsU0FBUyxDQUFDRCxNQUFNLElBQUlBLE1BQU0sQ0FBQ2EsR0FBRyxDQUFDLFFBQVEsQ0FBUEMsR0FBUSxFQUFFQyxDQUFTOzBDQUFLLE1BQU0sK0RBQUxDLENBQUc7MENBQVVGLEdBQUcsQ0FBQ0csT0FBTzsrQkFBZkYsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztRQUUzRSxDQUFDO3dCQWhCS1gsT0FBTzs7OztJQWtCYixNQUFNLENBQUMsQ0FBQ0E7UUFBQUEsT0FBTztRQUFFSixPQUFNO1FBQUVFLFNBQVM7SUFBQSxDQUFDO0FBQ3ZDLENBQUM7R0F2QktKLFVBQVU7QUF5QmhCLCtEQUFlQSxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2hvb2tzL3VzZS1yZXF1ZXN0LnRzeD9hZjQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7IFJlYWN0RWxlbWVudCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuaW50ZXJmYWNlIFVzZVJlcXVlc3RQcm9wcyB7XG4gICAgdXJsOiBzdHJpbmdcbiAgICBtZXRob2Q6ICdwb3N0JyB8ICdwdXQnIHwgJ2RlbGV0ZSdcbiAgICBib2R5OiBhbnlcbiAgICBvblN1Y2Nlc3M6IEZ1bmN0aW9uXG59XG5cbmNvbnN0IHVzZVJlcXVlc3QgPSAob3B0aW9uczogVXNlUmVxdWVzdFByb3BzKSA9PiB7XG4gICAgY29uc3QgW2Vycm9ycywgc2V0RXJyb3JzXSA9IHVzZVN0YXRlPFJlYWN0RWxlbWVudCB8IG51bGw+KClcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gICAgY29uc3QgcmVxdWVzdCA9IGFzeW5jIChwYXJhbXMgPSB7fSkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2V0RXJyb3JzKG51bGwpXG4gICAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zW29wdGlvbnMubWV0aG9kXShvcHRpb25zLnVybCwgeyAuLi5vcHRpb25zLmJvZHksIC4uLnBhcmFtc30pXG5cbiAgICAgICAgICAgIGlmIChvcHRpb25zLm9uU3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5vblN1Y2Nlc3MocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICAgICAgY29uc3QgZXJyb3JzID0gZXJyb3IucmVzcG9uc2U/LmRhdGE/LmVycm9yc1xuICAgICAgICAgICAgc2V0RXJyb3JzKGVycm9ycyAmJiBlcnJvcnMubWFwKChlcnI6IGFueSwgaTogbnVtYmVyKSA9PiA8ZGl2IGtleT17aX0+e2Vyci5tZXNzYWdlfTwvZGl2PikpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gW3JlcXVlc3QsIGVycm9ycywgaXNMb2FkaW5nXVxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VSZXF1ZXN0XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJ1c2VTdGF0ZSIsInVzZVJlcXVlc3QiLCJvcHRpb25zIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwiaXNMb2FkaW5nIiwic2V0TG9hZGluZyIsInJlcXVlc3QiLCJwYXJhbXMiLCJyZXNwb25zZSIsImVycm9yIiwibWV0aG9kIiwidXJsIiwiYm9keSIsIm9uU3VjY2VzcyIsImRhdGEiLCJtYXAiLCJlcnIiLCJpIiwiZGl2IiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/use-request.tsx\n");

/***/ }),

/***/ "./pages/auth/signout.tsx":
/*!********************************!*\
  !*** ./pages/auth/signout.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_use_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-request */ \"./hooks/use-request.tsx\");\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar SignOutPage = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var ref = _slicedToArray((0,_hooks_use_request__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n        method: 'post',\n        url: '/api/auth/sign-out',\n        body: {},\n        onSuccess: function() {\n            return router.push('/');\n        }\n    }), 1), request = ref[0];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        //@ts-ignore\n        request();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Signing out ...\"\n    }, void 0, false, {\n        fileName: \"/app/pages/auth/signout.tsx\",\n        lineNumber: 20,\n        columnNumber: 12\n    }, _this));\n};\n_s(SignOutPage, \"/AFDKFAtS3vHMdZDR5R9ySxlJpM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        _hooks_use_request__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = SignOutPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignOutPage);\nvar _c;\n$RefreshReg$(_c, \"SignOutPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hdXRoL3NpZ25vdXQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUN1QztBQUNOO0FBQ2U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEQsR0FBSyxDQUFDRyxXQUFXLEdBQWEsUUFDOUIsR0FEb0MsQ0FBQzs7SUFDakMsR0FBSyxDQUFDQyxNQUFNLEdBQUdKLHNEQUFTO0lBQ3hCLEdBQUssQ0FBYUUsR0FLaEIsa0JBTGdCQSw4REFBVSxDQUFDLENBQUM7UUFDMUJHLE1BQU0sRUFBRSxDQUFNO1FBQ2RDLEdBQUcsRUFBRSxDQUFvQjtRQUN6QkMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNSQyxTQUFTLEVBQUUsUUFBUTtZQUFGSixNQUFNLENBQU5BLE1BQU0sQ0FBQ0ssSUFBSSxDQUFDLENBQUc7O0lBQ3BDLENBQUMsT0FMTUMsT0FBTyxHQUFJUixHQUtoQjtJQUVGRCxnREFBUyxDQUFDLFFBQ2QsR0FEb0IsQ0FBQztRQUNiLEVBQVk7UUFDWlMsT0FBTztJQUNYLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFTCxNQUFNLDZFQUFFQyxDQUFDO2tCQUFDLENBQWU7Ozs7OztBQUM3QixDQUFDO0dBZktSLFdBQVc7O1FBQ0VILGtEQUFTO1FBQ05FLDBEQUFVOzs7S0FGMUJDLFdBQVc7QUFpQmpCLCtEQUFlQSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2F1dGgvc2lnbm91dC50c3g/YTZjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgdXNlUmVxdWVzdCBmcm9tICcuLi8uLi9ob29rcy91c2UtcmVxdWVzdCdcblxuY29uc3QgU2lnbk91dFBhZ2U6IE5leHRQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgY29uc3QgW3JlcXVlc3RdID0gdXNlUmVxdWVzdCh7XG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICB1cmw6ICcvYXBpL2F1dGgvc2lnbi1vdXQnLFxuICAgICAgICBib2R5OiB7fSxcbiAgICAgICAgb25TdWNjZXNzOiAoKSA9PiByb3V0ZXIucHVzaCgnLycpLFxuICAgIH0pXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgcmVxdWVzdCgpXG4gICAgfSwgW10pXG5cbiAgICByZXR1cm4gPHA+U2lnbmluZyBvdXQgLi4uPC9wPlxufVxuXG5leHBvcnQgZGVmYXVsdCBTaWduT3V0UGFnZVxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVJlcXVlc3QiLCJTaWduT3V0UGFnZSIsInJvdXRlciIsIm1ldGhvZCIsInVybCIsImJvZHkiLCJvblN1Y2Nlc3MiLCJwdXNoIiwicmVxdWVzdCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/auth/signout.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fauth%2Fsignout&absolutePagePath=%2Fapp%2Fpages%2Fauth%2Fsignout.tsx!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);