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

/***/ "./component/balance.tsx":
/*!*******************************!*\
  !*** ./component/balance.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Balance = function(param) {\n    var currentUser = param.currentUser;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), balance = ref[0], setBalance = ref[1];\n    var fetchData = function() {\n        var _ref = _asyncToGenerator(_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var data;\n            return _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return axios__WEBPACK_IMPORTED_MODULE_3___default().get('/api/current-balance');\n                    case 3:\n                        data = _ctx.sent.data;\n                        setBalance(data.balance | 0);\n                        _ctx.next = 9;\n                        break;\n                    case 7:\n                        _ctx.prev = 7;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    7\n                ]\n            ]);\n        }));\n        return function fetchData() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        fetchData();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"article\", {\n        className: \"py-2 px-2 rounded-lg border border-gray-100 bg-white \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"flex items-center justify-between\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    children: [\n                        currentUser && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            className: \"text-sm text-gray-500\",\n                            children: currentUser.email\n                        }, void 0, false, {\n                            fileName: \"/app/component/balance.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 31\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            className: \"text-sm text-gray-500\",\n                            children: \"Current Balance\"\n                        }, void 0, false, {\n                            fileName: \"/app/component/balance.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 15\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            className: \"text-2xl font-medium text-gray-900\",\n                            children: [\n                                \"$ \",\n                                balance\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/app/component/balance.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 15\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/app/component/balance.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 13\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                    className: \"rounded-full bg-blue-100 p-3 text-blue-600\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"svg\", {\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        className: \"h-8 w-8\",\n                        fill: \"none\",\n                        viewBox: \"0 0 24 24\",\n                        stroke: \"currentColor\",\n                        strokeWidth: \"2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"path\", {\n                            strokeLinecap: \"round\",\n                            strokeLinejoin: \"round\",\n                            d: \"M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z\"\n                        }, void 0, false, {\n                            fileName: \"/app/component/balance.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 17\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/app/component/balance.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 15\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/app/component/balance.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 13\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/app/component/balance.tsx\",\n            lineNumber: 27,\n            columnNumber: 11\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/app/component/balance.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, _this));\n};\n_s(Balance, \"3Dw6O3taL+RJ0YzpEV8JM5PybOA=\");\n_c = Balance;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Balance);\nvar _c;\n$RefreshReg$(_c, \"Balance\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvYmFsYW5jZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBMkM7QUFDbEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXpCLEdBQUssQ0FBQ0csT0FBTyxHQUEyQixRQUFRLFFBQWEsQ0FBQztRQUFuQkMsV0FBVyxTQUFYQSxXQUFXOztJQUVwRCxHQUFLLENBQXlCSCxHQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxHQUFqQ0ksT0FBTyxHQUFnQkosR0FBVyxLQUF6QkssVUFBVSxHQUFJTCxHQUFXO0lBRXpDLEdBQUssQ0FBQ00sU0FBUztxSkFBRyxRQUFRLFdBQUksQ0FBQztnQkFFbkJDLElBQUk7Ozs7OzsrQkFBV04sZ0RBQVMsQ0FBQyxDQUFzQjs7d0JBQS9DTSxJQUFJLGFBQUpBLElBQUk7d0JBQ1pGLFVBQVUsQ0FBQ0UsSUFBSSxDQUFDSCxPQUFPLEdBQUcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztRQUcvQixDQUFDO3dCQU5LRSxTQUFTOzs7O0lBUWZQLGdEQUFTLENBQUMsUUFDWixHQURrQixDQUFDO1FBQ2ZPLFNBQVM7SUFDWCxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBR0gsTUFBTSw2RUFDTEcsQ0FBTztRQUFDQyxTQUFTLEVBQUMsQ0FBdUQ7OEZBQ25FQyxDQUFHO1lBQUNELFNBQVMsRUFBQyxDQUFtQzs7NEZBQy9DQyxDQUFHOzt3QkFDRFIsV0FBVyxnRkFBS1MsQ0FBQzs0QkFBQ0YsU0FBUyxFQUFDLENBQXVCO3NDQUFFUCxXQUFXLENBQUNVLEtBQUs7Ozs7OztvR0FDdEVELENBQUM7NEJBQUNGLFNBQVMsRUFBQyxDQUF1QjtzQ0FBQyxDQUFlOzs7Ozs7b0dBQ25ERSxDQUFDOzRCQUFDRixTQUFTLEVBQUMsQ0FBb0M7O2dDQUFDLENBQUU7Z0NBQUNOLE9BQU87Ozs7Ozs7Ozs7Ozs7NEZBRzdEVSxDQUFJO29CQUFDSixTQUFTLEVBQUMsQ0FBNEM7MEdBQ3pESyxDQUFHO3dCQUNGQyxLQUFLLEVBQUMsQ0FBNEI7d0JBQ2xDTixTQUFTLEVBQUMsQ0FBUzt3QkFDbkJPLElBQUksRUFBQyxDQUFNO3dCQUNYQyxPQUFPLEVBQUMsQ0FBVzt3QkFDbkJDLE1BQU0sRUFBQyxDQUFjO3dCQUNyQkMsV0FBVyxFQUFDLENBQUc7OEdBRWRDLENBQUk7NEJBQ0hDLGFBQWEsRUFBQyxDQUFPOzRCQUNyQkMsY0FBYyxFQUFDLENBQU87NEJBQ3RCQyxDQUFDLEVBQUMsQ0FBb0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU14SyxDQUFDO0dBNUNLdEIsT0FBTztLQUFQQSxPQUFPO0FBOENiLCtEQUFlQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudC9iYWxhbmNlLnRzeD8zNGRlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXG5cbmludGVyZmFjZSBCYWxhbmNlUHJvcHMge1xuICBjdXJyZW50VXNlcj86IGFueVxufVxuXG5jb25zdCBCYWxhbmNlOiBSZWFjdC5GQzxCYWxhbmNlUHJvcHM+ID0gKHsgY3VycmVudFVzZXIgfSkgPT4ge1xuXG4gIGNvbnN0IFtiYWxhbmNlLCBzZXRCYWxhbmNlXSA9IHVzZVN0YXRlKDApXG5cbiAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9jdXJyZW50LWJhbGFuY2UnKVxuICAgICAgc2V0QmFsYW5jZShkYXRhLmJhbGFuY2UgfCAwKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaERhdGEoKVxuICB9LCBbXSlcblxuXG4gICAgcmV0dXJuIChcbiAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJweS0yIHB4LTIgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLWdyYXktMTAwIGJnLXdoaXRlIFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICB7Y3VycmVudFVzZXIgJiYgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+e2N1cnJlbnRVc2VyLmVtYWlsfTwvcD59XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMFwiPkN1cnJlbnQgQmFsYW5jZTwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMFwiPiQge2JhbGFuY2V9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBiZy1ibHVlLTEwMCBwLTMgdGV4dC1ibHVlLTYwMFwiPlxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC04IHctOFwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICBkPVwiTTE3IDlWN2EyIDIgMCAwMC0yLTJINWEyIDIgMCAwMC0yIDJ2NmEyIDIgMCAwMDIgMmgybTIgNGgxMGEyIDIgMCAwMDItMnYtNmEyIDIgMCAwMC0yLTJIOWEyIDIgMCAwMC0yIDJ2NmEyIDIgMCAwMDIgMnptNy01YTIgMiAwIDExLTQgMCAyIDIgMCAwMTQgMHpcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9hcnRpY2xlPilcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFsYW5jZVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJCYWxhbmNlIiwiY3VycmVudFVzZXIiLCJiYWxhbmNlIiwic2V0QmFsYW5jZSIsImZldGNoRGF0YSIsImRhdGEiLCJnZXQiLCJhcnRpY2xlIiwiY2xhc3NOYW1lIiwiZGl2IiwicCIsImVtYWlsIiwic3BhbiIsInN2ZyIsInhtbG5zIiwiZmlsbCIsInZpZXdCb3giLCJzdHJva2UiLCJzdHJva2VXaWR0aCIsInBhdGgiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./component/balance.tsx\n");

/***/ })

});