"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./component/header/header.tsx":
/*!*************************************!*\
  !*** ./component/header/header.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _this = undefined;\nvar Header = function(param) {\n    var currentUser = param.currentUser;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-between ...\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"01\"\n            }, void 0, false, {\n                fileName: \"/app/component/header/header.tsx\",\n                lineNumber: 11,\n                columnNumber: 21\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"02\"\n            }, void 0, false, {\n                fileName: \"/app/component/header/header.tsx\",\n                lineNumber: 12,\n                columnNumber: 21\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"03\"\n            }, void 0, false, {\n                fileName: \"/app/component/header/header.tsx\",\n                lineNumber: 13,\n                columnNumber: 25\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/app/component/header/header.tsx\",\n        lineNumber: 10,\n        columnNumber: 13\n    }, _this));\n// return (\n//             <div className=\"flex justify-between space-x-10\" >\n//                 <div className='flex'>\n//                     <Link href=\"/\">\n//                         <Image\n//                             width={20}\n//                             height={20}\n//                             className='h-8 w-auto sm:h-10'\n//                             src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'\n//                             alt='Home'\n//                         />\n//                     </Link>\n//                 </div>\n//                 <div className='ml-8  space-x-4 items-center'>\n//                     {!currentUser ? (\n//                         <>\n//                             <Link href={'/auth/signin'}>\n//                                 <a className='whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900'>\n//                                     {' '}\n//                                     Sign in {'  '}\n//                                 </a>\n//                             </Link>\n//                             <Link href={'/auth/signup'}>\n//                                 <a\n//                                     className='ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'\n//                                 >\n//                                     {' '}\n//                                     Sign up{' '}\n//                                 </a>\n//                             </Link>\n//                         </>\n//                     ) : (\n//                             <Link href='/auth/signout'>\n//                                 <a\n//                                     href='#'\n//                                    className='ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'\n//                                 >\n//                                     Sign out{' '}\n//                                 </a>\n//                             </Link>\n//                     )}\n//                 </div>\n//             </div>\n// )\n};\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvaGVhZGVyL2hlYWRlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFPQSxHQUFLLENBQUNBLE1BQU0sR0FBK0IsUUFBUSxRQUFhLENBQUM7UUFBbkJDLFdBQVcsU0FBWEEsV0FBVztJQUNyRCxNQUFNLDZFQUNHQyxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUEwQjs7d0ZBQ2hDRCxDQUFHOzBCQUFDLENBQUU7Ozs7Ozt3RkFDTkEsQ0FBRzswQkFBQyxDQUFFOzs7Ozs7d0ZBQ0ZBLENBQUc7MEJBQUMsQ0FBRTs7Ozs7Ozs7Ozs7O0FBSTNCLEVBQVc7QUFDWCxFQUFpRTtBQUNqRSxFQUF5QztBQUN6QyxFQUFzQztBQUN0QyxFQUFpQztBQUNqQyxFQUF5QztBQUN6QyxFQUEwQztBQUMxQyxFQUE2RDtBQUM3RCxFQUFrRztBQUNsRyxFQUF5QztBQUN6QyxFQUE2QjtBQUM3QixFQUE4QjtBQUM5QixFQUF5QjtBQUV6QixFQUFpRTtBQUNqRSxFQUF3QztBQUN4QyxFQUE2QjtBQUM3QixFQUEyRDtBQUMzRCxFQUE0SDtBQUM1SCxFQUE0QztBQUM1QyxFQUFxRDtBQUNyRCxFQUF1QztBQUN2QyxFQUFzQztBQUN0QyxFQUEyRDtBQUMzRCxFQUFxQztBQUNyQyxFQUE2TztBQUM3TyxFQUFvQztBQUNwQyxFQUE0QztBQUM1QyxFQUFtRDtBQUNuRCxFQUF1QztBQUN2QyxFQUFzQztBQUN0QyxFQUE4QjtBQUM5QixFQUE0QjtBQUM1QixFQUEwRDtBQUMxRCxFQUFxQztBQUNyQyxFQUErQztBQUMvQyxFQUE0TztBQUM1TyxFQUFvQztBQUNwQyxFQUFvRDtBQUNwRCxFQUF1QztBQUN2QyxFQUFzQztBQUV0QyxFQUF5QjtBQUN6QixFQUF5QjtBQUN6QixFQUFxQjtBQUNyQixFQUFJO0FBQ1IsQ0FBQztLQXZES0YsTUFBTTtBQXlEWiwrREFBZUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnQvaGVhZGVyL2hlYWRlci50c3g/ZjBmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuaW50ZXJmYWNlIEN1cnJlbnRVc2VyUHJvcHMge1xuICAgIGN1cnJlbnRVc2VyOiB7IGVtYWlsOiBzdHJpbmcgfVxufVxuXG5jb25zdCBIZWFkZXI6IFJlYWN0LkZDPEN1cnJlbnRVc2VyUHJvcHM+ID0gKHsgY3VycmVudFVzZXIgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIC4uLlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjAxPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+MDI8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+MDM8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICApXG5cbiAgICAvLyByZXR1cm4gKFxuICAgIC8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gc3BhY2UteC0xMFwiID5cbiAgICAvLyAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgnPlxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezIwfVxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezIwfVxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2gtOCB3LWF1dG8gc206aC0xMCdcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPSdodHRwczovL3RhaWx3aW5kdWkuY29tL2ltZy9sb2dvcy93b3JrZmxvdy1tYXJrLWluZGlnby02MDAuc3ZnJ1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9J0hvbWUnXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAvLyAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAvLyAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21sLTggIHNwYWNlLXgtNCBpdGVtcy1jZW50ZXInPlxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgeyFjdXJyZW50VXNlciA/IChcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnL2F1dGgvc2lnbmluJ30+XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J3doaXRlc3BhY2Utbm93cmFwIHRleHQtYmFzZSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwIGhvdmVyOnRleHQtZ3JheS05MDAnPlxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsnICd9XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2lnbiBpbiB7JyAgJ31cbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnL2F1dGgvc2lnbnVwJ30+XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbWwtOCB3aGl0ZXNwYWNlLW5vd3JhcCBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHgtNCBweS0yIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgcm91bmRlZC1tZCBzaGFkb3ctc20gdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHRleHQtd2hpdGUgYmctaW5kaWdvLTYwMCBob3ZlcjpiZy1pbmRpZ28tNzAwJ1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsnICd9XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2lnbiB1cHsnICd9XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9hdXRoL3NpZ25vdXQnPlxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPScjJ1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdtbC04IHdoaXRlc3BhY2Utbm93cmFwIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweC00IHB5LTIgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCByb3VuZGVkLW1kIHNoYWRvdy1zbSB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gdGV4dC13aGl0ZSBiZy1pbmRpZ28tNjAwIGhvdmVyOmJnLWluZGlnby03MDAnXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2lnbiBvdXR7JyAnfVxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICApfVxuICAgIC8vICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAvLyAgICAgICAgICAgICA8L2Rpdj5cbiAgICAvLyApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxuIl0sIm5hbWVzIjpbIkhlYWRlciIsImN1cnJlbnRVc2VyIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./component/header/header.tsx\n");

/***/ })

});