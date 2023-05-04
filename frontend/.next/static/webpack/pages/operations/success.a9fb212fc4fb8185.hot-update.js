"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/operations/success",{

/***/ "./component/balance.tsx":
/*!*******************************!*\
  !*** ./component/balance.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Balance = function(param) {\n    var currentUser = param.currentUser;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), balance = ref[0], setBalance = ref[1];\n    var fetchData = function() {\n        var _ref = _asyncToGenerator(_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var data;\n            return _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return axios__WEBPACK_IMPORTED_MODULE_3___default().get('/api/current-balance');\n                    case 3:\n                        data = _ctx.sent.data;\n                        setBalance(data.balance | 0);\n                        _ctx.next = 9;\n                        break;\n                    case 7:\n                        _ctx.prev = 7;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    7\n                ]\n            ]);\n        }));\n        return function fetchData() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        fetchData();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"article\", {\n        className: \"py-2 px-2 rounded-lg border border-gray-100 bg-white \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"flex items-center justify-between\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    children: [\n                        currentUser && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            className: \"text-sm text-gray-500 py-2\",\n                            children: currentUser.email\n                        }, void 0, false, {\n                            fileName: \"/app/component/balance.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 31\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            className: \"text-sm text-gray-500\",\n                            children: \"Current Balance\"\n                        }, void 0, false, {\n                            fileName: \"/app/component/balance.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 15\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            className: \"text-2xl font-medium text-gray-900 bold\",\n                            children: [\n                                \"$ \",\n                                balance.toLocaleString()\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/app/component/balance.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 15\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/app/component/balance.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 13\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                    className: \"rounded-full bg-blue-100 p-3 text-blue-600\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"svg\", {\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        className: \"h-8 w-8\",\n                        fill: \"none\",\n                        viewBox: \"0 0 24 24\",\n                        stroke: \"currentColor\",\n                        strokeWidth: \"2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"path\", {\n                            strokeLinecap: \"round\",\n                            strokeLinejoin: \"round\",\n                            d: \"M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z\"\n                        }, void 0, false, {\n                            fileName: \"/app/component/balance.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 17\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/app/component/balance.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 15\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/app/component/balance.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 13\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/app/component/balance.tsx\",\n            lineNumber: 27,\n            columnNumber: 11\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/app/component/balance.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, _this));\n};\n_s(Balance, \"3Dw6O3taL+RJ0YzpEV8JM5PybOA=\");\n_c = Balance;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Balance);\nvar _c;\n$RefreshReg$(_c, \"Balance\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvYmFsYW5jZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBMkM7QUFDbEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXpCLEdBQUssQ0FBQ0csT0FBTyxHQUEyQixRQUFRLFFBQWEsQ0FBQztRQUFuQkMsV0FBVyxTQUFYQSxXQUFXOztJQUVwRCxHQUFLLENBQXlCSCxHQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxHQUFqQ0ksT0FBTyxHQUFnQkosR0FBVyxLQUF6QkssVUFBVSxHQUFJTCxHQUFXO0lBRXpDLEdBQUssQ0FBQ00sU0FBUztxSkFBRyxRQUFRLFdBQUksQ0FBQztnQkFFbkJDLElBQUk7Ozs7OzsrQkFBV04sZ0RBQVMsQ0FBQyxDQUFzQjs7d0JBQS9DTSxJQUFJLGFBQUpBLElBQUk7d0JBQ1pGLFVBQVUsQ0FBQ0UsSUFBSSxDQUFDSCxPQUFPLEdBQUcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztRQUcvQixDQUFDO3dCQU5LRSxTQUFTOzs7O0lBUWZQLGdEQUFTLENBQUMsUUFDWixHQURrQixDQUFDO1FBQ2ZPLFNBQVM7SUFDWCxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBR0gsTUFBTSw2RUFDTEcsQ0FBTztRQUFDQyxTQUFTLEVBQUMsQ0FBdUQ7OEZBQ25FQyxDQUFHO1lBQUNELFNBQVMsRUFBQyxDQUFtQzs7NEZBQy9DQyxDQUFHOzt3QkFDRFIsV0FBVyxnRkFBS1MsQ0FBQzs0QkFBQ0YsU0FBUyxFQUFDLENBQTRCO3NDQUFHUCxXQUFXLENBQUNVLEtBQUs7Ozs7OztvR0FDNUVELENBQUM7NEJBQUNGLFNBQVMsRUFBQyxDQUF1QjtzQ0FBQyxDQUFlOzs7Ozs7b0dBQ25ERSxDQUFDOzRCQUFDRixTQUFTLEVBQUMsQ0FBeUM7O2dDQUFDLENBQUU7Z0NBQUNOLE9BQU8sQ0FBQ1UsY0FBYzs7Ozs7Ozs7Ozs7Ozs0RkFHakZDLENBQUk7b0JBQUNMLFNBQVMsRUFBQyxDQUE0QzswR0FDekRNLENBQUc7d0JBQ0ZDLEtBQUssRUFBQyxDQUE0Qjt3QkFDbENQLFNBQVMsRUFBQyxDQUFTO3dCQUNuQlEsSUFBSSxFQUFDLENBQU07d0JBQ1hDLE9BQU8sRUFBQyxDQUFXO3dCQUNuQkMsTUFBTSxFQUFDLENBQWM7d0JBQ3JCQyxXQUFXLEVBQUMsQ0FBRzs4R0FFZEMsQ0FBSTs0QkFDSEMsYUFBYSxFQUFDLENBQU87NEJBQ3JCQyxjQUFjLEVBQUMsQ0FBTzs0QkFDdEJDLENBQUMsRUFBQyxDQUFvSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXhLLENBQUM7R0E1Q0t2QixPQUFPO0tBQVBBLE9BQU87QUE4Q2IsK0RBQWVBLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2JhbGFuY2UudHN4PzM0ZGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcblxuaW50ZXJmYWNlIEJhbGFuY2VQcm9wcyB7XG4gIGN1cnJlbnRVc2VyPzogYW55XG59XG5cbmNvbnN0IEJhbGFuY2U6IFJlYWN0LkZDPEJhbGFuY2VQcm9wcz4gPSAoeyBjdXJyZW50VXNlciB9KSA9PiB7XG5cbiAgY29uc3QgW2JhbGFuY2UsIHNldEJhbGFuY2VdID0gdXNlU3RhdGUoMClcblxuICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2N1cnJlbnQtYmFsYW5jZScpXG4gICAgICBzZXRCYWxhbmNlKGRhdGEuYmFsYW5jZSB8IDApXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB9XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoRGF0YSgpXG4gIH0sIFtdKVxuXG5cbiAgICByZXR1cm4gKFxuICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cInB5LTIgcHgtMiByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItZ3JheS0xMDAgYmctd2hpdGUgXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIHtjdXJyZW50VXNlciAmJiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDAgcHktMlwiID57Y3VycmVudFVzZXIuZW1haWx9PC9wPn1cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+Q3VycmVudCBCYWxhbmNlPC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIGJvbGRcIj4kIHtiYWxhbmNlLnRvTG9jYWxlU3RyaW5nKCl9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBiZy1ibHVlLTEwMCBwLTMgdGV4dC1ibHVlLTYwMFwiPlxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC04IHctOFwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICBkPVwiTTE3IDlWN2EyIDIgMCAwMC0yLTJINWEyIDIgMCAwMC0yIDJ2NmEyIDIgMCAwMDIgMmgybTIgNGgxMGEyIDIgMCAwMDItMnYtNmEyIDIgMCAwMC0yLTJIOWEyIDIgMCAwMC0yIDJ2NmEyIDIgMCAwMDIgMnptNy01YTIgMiAwIDExLTQgMCAyIDIgMCAwMTQgMHpcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9hcnRpY2xlPilcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFsYW5jZVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJCYWxhbmNlIiwiY3VycmVudFVzZXIiLCJiYWxhbmNlIiwic2V0QmFsYW5jZSIsImZldGNoRGF0YSIsImRhdGEiLCJnZXQiLCJhcnRpY2xlIiwiY2xhc3NOYW1lIiwiZGl2IiwicCIsImVtYWlsIiwidG9Mb2NhbGVTdHJpbmciLCJzcGFuIiwic3ZnIiwieG1sbnMiLCJmaWxsIiwidmlld0JveCIsInN0cm9rZSIsInN0cm9rZVdpZHRoIiwicGF0aCIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2VMaW5lam9pbiIsImQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./component/balance.tsx\n");

/***/ })

});