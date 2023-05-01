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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_use_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/use-request */ \"./hooks/use-request.tsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Balance = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), balance = ref[0], setBalance = ref[1];\n    var fetchData = function() {\n        axios__WEBPACK_IMPORTED_MODULE_3___default().get('/api/current-balance');\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {}, []);\n    var ref1 = _slicedToArray((0,_hooks_use_request__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n        method: 'post',\n        url: '/api/auth/sign-up',\n        body: {},\n        onSuccess: function() {\n            return router.push('/');\n        }\n    }), 2), request = ref1[0], errors = ref1[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n            className: \"rounded-lg border border-gray-100 bg-white p-6\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm text-gray-500\",\n                                children: \"Balance\"\n                            }, void 0, false, {\n                                fileName: \"/app/component/balance/balance.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 7\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-2xl font-medium text-gray-900\",\n                                children: [\n                                    \"$ \",\n                                    balance\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/app/component/balance/balance.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 7\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/app/component/balance/balance.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"rounded-full bg-blue-100 p-3 text-blue-600\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            className: \"h-8 w-8\",\n                            fill: \"none\",\n                            viewBox: \"0 0 24 24\",\n                            stroke: \"currentColor\",\n                            strokeWidth: \"2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                strokeLinecap: \"round\",\n                                strokeLinejoin: \"round\",\n                                d: \"M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z\"\n                            }, void 0, false, {\n                                fileName: \"/app/component/balance/balance.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 9\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/app/component/balance/balance.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 7\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/app/component/balance/balance.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 5\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/app/component/balance/balance.tsx\",\n                lineNumber: 33,\n                columnNumber: 3\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/app/component/balance/balance.tsx\",\n            lineNumber: 32,\n            columnNumber: 4\n        }, _this)\n    }, void 0, false));\n};\n_s(Balance, \"MQr1Cl0bKnsznzp6G6Q8KUIElN8=\", false, function() {\n    return [\n        _hooks_use_request__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = Balance;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Balance);\nvar _c;\n$RefreshReg$(_c, \"Balance\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvYmFsYW5jZS9iYWxhbmNlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMkM7QUFDSztBQUN2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU16QixHQUFLLENBQUNJLE9BQU8sR0FBYSxRQUMxQixHQURnQyxDQUFDOztJQUUvQixHQUFLLENBQXlCSCxHQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxHQUFqQ0ksT0FBTyxHQUFnQkosR0FBVyxLQUF6QkssVUFBVSxHQUFJTCxHQUFXO0lBRXpDLEdBQUssQ0FBQ00sU0FBUyxHQUFHLFFBQ25CLEdBRHdCLENBQUM7UUFDdEJKLGdEQUFTLENBQUMsQ0FBc0I7SUFDbEMsQ0FBQztJQUVESCxnREFBUyxDQUFDLFFBQ1osR0FEa0IsQ0FBQyxDQUVoQixFQUFFLENBQUMsQ0FBQztJQUVMLEdBQUssQ0FBcUJFLElBS3RCLGtCQUxzQkEsOERBQVUsQ0FBQyxDQUFDO1FBQ2hDTyxNQUFNLEVBQUUsQ0FBTTtRQUNkQyxHQUFHLEVBQUUsQ0FBbUI7UUFDeEJDLElBQUksRUFBRSxDQUFDLENBQUc7UUFDVkMsU0FBUyxFQUFFLFFBQVE7WUFBRkMsTUFBTSxDQUFOQSxNQUFNLENBQUNDLElBQUksQ0FBQyxDQUFHOztJQUNwQyxDQUFDLE9BTElDLE9BQU8sR0FBWWIsSUFLdEIsS0FMWWMsTUFBTSxHQUFJZCxJQUt0QjtJQUlGLE1BQU07OEZBRU5lLENBQU87WUFBQ0MsU0FBUyxFQUFDLENBQWdEO2tHQUNuRUMsQ0FBRztnQkFBQ0QsU0FBUyxFQUFDLENBQW1DOztnR0FDL0NDLENBQUc7O3dHQUNEQyxDQUFDO2dDQUFDRixTQUFTLEVBQUMsQ0FBdUI7MENBQUMsQ0FBTzs7Ozs7O3dHQUUzQ0UsQ0FBQztnQ0FBQ0YsU0FBUyxFQUFDLENBQW9DOztvQ0FBQyxDQUFFO29DQUFDYixPQUFPOzs7Ozs7Ozs7Ozs7O2dHQUc3RGdCLENBQUk7d0JBQUNILFNBQVMsRUFBQyxDQUE0Qzs4R0FDekRJLENBQUc7NEJBQ0ZDLEtBQUssRUFBQyxDQUE0Qjs0QkFDbENMLFNBQVMsRUFBQyxDQUFTOzRCQUNuQk0sSUFBSSxFQUFDLENBQU07NEJBQ1hDLE9BQU8sRUFBQyxDQUFXOzRCQUNuQkMsTUFBTSxFQUFDLENBQWM7NEJBQ3JCQyxXQUFXLEVBQUMsQ0FBRztrSEFFZEMsQ0FBSTtnQ0FDSEMsYUFBYSxFQUFDLENBQU87Z0NBQ3JCQyxjQUFjLEVBQUMsQ0FBTztnQ0FDdEJDLENBQUMsRUFBQyxDQUFvSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVloSyxDQUFDO0dBdkRLM0IsT0FBTzs7UUFZZUYsMERBQVU7OztLQVpoQ0UsT0FBTztBQXlEYiwrREFBZUEsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnQvYmFsYW5jZS9iYWxhbmNlLnRzeD8zZmZhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHVzZVJlcXVlc3QgZnJvbSBcIi4uLy4uL2hvb2tzL3VzZS1yZXF1ZXN0XCJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxuXG5pbnRlcmZhY2UgQ3VycmVudFVzZXJQcm9wcyB7XG4gICAgY3VycmVudFVzZXI/OiB7IGVtYWlsOiBzdHJpbmcgfVxufVxuXG5jb25zdCBCYWxhbmNlOiBSZWFjdC5GQyA9ICgpID0+IHtcblxuICBjb25zdCBbYmFsYW5jZSwgc2V0QmFsYW5jZV0gPSB1c2VTdGF0ZSgwKVxuXG4gIGNvbnN0IGZldGNoRGF0YSA9ICgpID0+e1xuICAgIGF4aW9zLmdldCgnL2FwaS9jdXJyZW50LWJhbGFuY2UnKVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcblxuICB9LCBbXSlcblxuICBjb25zdCBbcmVxdWVzdCwgZXJyb3JzXSA9IHVzZVJlcXVlc3Qoe1xuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgdXJsOiAnL2FwaS9hdXRoL3NpZ24tdXAnLFxuICAgICAgICBib2R5OiB7ICB9LFxuICAgICAgICBvblN1Y2Nlc3M6ICgpID0+IHJvdXRlci5wdXNoKCcvJyksXG4gICAgfSlcblxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgPGFydGljbGUgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLWdyYXktMTAwIGJnLXdoaXRlIHAtNlwiPlxuICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgIDxkaXY+XG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5CYWxhbmNlPC9wPlxuXG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwXCI+JCB7YmFsYW5jZX08L3A+XG4gICAgPC9kaXY+XG5cbiAgICA8c3BhbiBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgYmctYmx1ZS0xMDAgcC0zIHRleHQtYmx1ZS02MDBcIj5cbiAgICAgIDxzdmdcbiAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgIGNsYXNzTmFtZT1cImgtOCB3LThcIlxuICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgZD1cIk0xNyA5VjdhMiAyIDAgMDAtMi0ySDVhMiAyIDAgMDAtMiAydjZhMiAyIDAgMDAyIDJoMm0yIDRoMTBhMiAyIDAgMDAyLTJ2LTZhMiAyIDAgMDAtMi0ySDlhMiAyIDAgMDAtMiAydjZhMiAyIDAgMDAyIDJ6bTctNWEyIDIgMCAxMS00IDAgMiAyIDAgMDE0IDB6XCJcbiAgICAgICAgLz5cbiAgICAgIDwvc3ZnPlxuICAgIDwvc3Bhbj5cbiAgPC9kaXY+XG5cbjwvYXJ0aWNsZT5cblxuXG48Lz5cblxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFsYW5jZVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVxdWVzdCIsImF4aW9zIiwiQmFsYW5jZSIsImJhbGFuY2UiLCJzZXRCYWxhbmNlIiwiZmV0Y2hEYXRhIiwiZ2V0IiwibWV0aG9kIiwidXJsIiwiYm9keSIsIm9uU3VjY2VzcyIsInJvdXRlciIsInB1c2giLCJyZXF1ZXN0IiwiZXJyb3JzIiwiYXJ0aWNsZSIsImNsYXNzTmFtZSIsImRpdiIsInAiLCJzcGFuIiwic3ZnIiwieG1sbnMiLCJmaWxsIiwidmlld0JveCIsInN0cm9rZSIsInN0cm9rZVdpZHRoIiwicGF0aCIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2VMaW5lam9pbiIsImQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./component/balance/balance.tsx\n");

/***/ })

});