/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _component_header_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/header/header */ \"./component/header/header.tsx\");\n/* harmony import */ var _utils_session_middleware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/session-middleware */ \"./utils/session-middleware.ts\");\n/* harmony import */ var next_dist_server_api_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dist/server/api-utils */ \"./node_modules/next/dist/server/api-utils/index.js\");\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nfunction AppComponent(param) {\n    var Component = param.Component, pageProps = param.pageProps, currentUser = param.currentUser;\n    if (!currentUser) {\n        (0,next_dist_server_api_utils__WEBPACK_IMPORTED_MODULE_5__.redirect)('/');\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"container mx-auto pt-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_component_header_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                currentUser: currentUser\n            }, void 0, false, {\n                fileName: \"/app/pages/_app.tsx\",\n                lineNumber: 14,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Component, _objectSpread({\n                currentUser: currentUser\n            }, pageProps), void 0, false, {\n                fileName: \"/app/pages/_app.tsx\",\n                lineNumber: 15,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/app/pages/_app.tsx\",\n        lineNumber: 13,\n        columnNumber: 13\n    }, this));\n}\n_c = AppComponent;\nAppComponent.getInitialProps = (function() {\n    var _ref = _asyncToGenerator(_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(appContext) {\n        var ref, currentUser, client, pageProps;\n        return _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.t0 = _slicedToArray;\n                    _ctx.next = 3;\n                    return (0,_utils_session_middleware__WEBPACK_IMPORTED_MODULE_4__.getSessionInfo)(appContext.ctx);\n                case 3:\n                    _ctx.t1 = _ctx.sent;\n                    ref = (0, _ctx.t0)(_ctx.t1, 2);\n                    currentUser = ref[0];\n                    client = ref[1];\n                    pageProps = {};\n                    if (!appContext.Component.getInitialProps) {\n                        _ctx.next = 12;\n                        break;\n                    }\n                    _ctx.next = 11;\n                    return appContext.Component.getInitialProps(appContext.ctx, client, currentUser);\n                case 11:\n                    // this is passing client http and current user to all pages\n                    // @ts-ignore\n                    pageProps = _ctx.sent;\n                case 12:\n                    return _ctx.abrupt(\"return\", {\n                        currentUser: currentUser,\n                        pageProps: pageProps\n                    });\n                case 13:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function(appContext) {\n        return _ref.apply(this, arguments);\n    };\n})();\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppComponent);\nvar _c;\n$RefreshReg$(_c, \"AppComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBOEI7QUFFaUI7QUFDYTtBQUNQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQUU1Q0csWUFBWSxDQUFDLEtBQXFELEVBQUUsQ0FBQztRQUF0REMsU0FBUyxHQUFYLEtBQXFELENBQW5EQSxTQUFTLEVBQUVDLFNBQVMsR0FBdEIsS0FBcUQsQ0FBeENBLFNBQVMsRUFBRUMsV0FBVyxHQUFuQyxLQUFxRCxDQUE3QkEsV0FBVztJQUNyRCxFQUFFLEdBQUdBLFdBQVcsRUFBRSxDQUFDO1FBQ2ZKLG9FQUFRLENBQUMsQ0FBRztJQUNoQixDQUFDO0lBRUQsTUFBTSw2RUFDR0ssQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBd0I7O3dGQUNsQ1IsZ0VBQU07Z0JBQUNNLFdBQVcsRUFBRUEsV0FBVzs7Ozs7O3dGQUMvQkYsU0FBUztnQkFBQ0UsV0FBVyxFQUFFQSxXQUFXO2VBQU1ELFNBQVM7Ozs7Ozs7Ozs7O0FBR2xFLENBQUM7S0FYUUYsWUFBWTtBQWFyQkEsWUFBWSxDQUFDTSxlQUFlO2lKQUFHLFFBQVEsU0FBREMsVUFBc0IsRUFBSyxDQUFDO1lBRS9CLEdBQW9DLEVBQTVESixXQUFXLEVBQUVLLE1BQU0sRUFFdEJOLFNBQVM7Ozs7OzsyQkFGd0JKLHlFQUFjLENBQUNTLFVBQVUsQ0FBQ0UsR0FBRzs7O29CQUFuQyxHQUFvQztvQkFBNUROLFdBQVcsR0FBYSxHQUFvQztvQkFBL0NLLE1BQU0sR0FBSyxHQUFvQztvQkFFL0ROLFNBQVMsR0FBRyxDQUFDLENBQUM7eUJBRWRLLFVBQVUsQ0FBQ04sU0FBUyxDQUFDSyxlQUFlOzs7OzsyQkFHbEJDLFVBQVUsQ0FBQ04sU0FBUyxDQUFDSyxlQUFlLENBQUNDLFVBQVUsQ0FBQ0UsR0FBRyxFQUFFRCxNQUFNLEVBQUVMLFdBQVc7O29CQUYxRixFQUE0RDtvQkFDNUQsRUFBYTtvQkFDYkQsU0FBUzs7aURBR04sQ0FBQzt3QkFDSkMsV0FBVyxFQUFYQSxXQUFXO3dCQUNYRCxTQUFTLEVBQVRBLFNBQVM7b0JBQ2IsQ0FBQzs7Ozs7O0lBQ0wsQ0FBQztvQkFoQnFDSyxVQUFzQjs7OztBQWtCNUQsK0RBQWVQLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCB0eXBlIHsgQXBwQ29udGV4dCwgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50L2hlYWRlci9oZWFkZXInXG5pbXBvcnQgeyBnZXRTZXNzaW9uSW5mbyB9IGZyb20gJy4uL3V0aWxzL3Nlc3Npb24tbWlkZGxld2FyZSdcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSAnbmV4dC9kaXN0L3NlcnZlci9hcGktdXRpbHMnXG5cbmZ1bmN0aW9uIEFwcENvbXBvbmVudCh7IENvbXBvbmVudCwgcGFnZVByb3BzLCBjdXJyZW50VXNlciB9OiBBcHBQcm9wcyB8IGFueSkge1xuICAgIGlmICghY3VycmVudFVzZXIpIHtcbiAgICAgICAgcmVkaXJlY3QoJy8nKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB0LTJcIj5cbiAgICAgICAgICAgICAgICA8SGVhZGVyIGN1cnJlbnRVc2VyPXtjdXJyZW50VXNlcn0gLz5cbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50IGN1cnJlbnRVc2VyPXtjdXJyZW50VXNlcn0gey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuQXBwQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChhcHBDb250ZXh0OiBBcHBDb250ZXh0KSA9PiB7XG5cbiAgICBjb25zdCBbY3VycmVudFVzZXIsIGNsaWVudCBdID0gYXdhaXQgZ2V0U2Vzc2lvbkluZm8oYXBwQ29udGV4dC5jdHgpXG5cbiAgICBsZXQgcGFnZVByb3BzID0ge31cblxuICAgIGlmIChhcHBDb250ZXh0LkNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgICAgLy8gdGhpcyBpcyBwYXNzaW5nIGNsaWVudCBodHRwIGFuZCBjdXJyZW50IHVzZXIgdG8gYWxsIHBhZ2VzXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcGFnZVByb3BzID0gYXdhaXQgYXBwQ29udGV4dC5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGFwcENvbnRleHQuY3R4LCBjbGllbnQsIGN1cnJlbnRVc2VyKVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGN1cnJlbnRVc2VyLFxuICAgICAgICBwYWdlUHJvcHMsXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBDb21wb25lbnRcbiJdLCJuYW1lcyI6WyJIZWFkZXIiLCJnZXRTZXNzaW9uSW5mbyIsInJlZGlyZWN0IiwiQXBwQ29tcG9uZW50IiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY3VycmVudFVzZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJnZXRJbml0aWFsUHJvcHMiLCJhcHBDb250ZXh0IiwiY2xpZW50IiwiY3R4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./node_modules/next/dist/compiled/cookie/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/compiled/cookie/index.js ***!
  \*********************************************************/
/***/ (function(module) {

eval("var __dirname = \"/\";\n(()=>{\"use strict\";if(typeof __nccwpck_require__!==\"undefined\")__nccwpck_require__.ab=__dirname+\"/\";var e={};(()=>{var r=e;\n/*!\n * cookie\n * Copyright(c) 2012-2014 Roman Shtylman\n * Copyright(c) 2015 Douglas Christopher Wilson\n * MIT Licensed\n */r.parse=parse;r.serialize=serialize;var i=decodeURIComponent;var t=encodeURIComponent;var a=/; */;var n=/^[\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+$/;function parse(e,r){if(typeof e!==\"string\"){throw new TypeError(\"argument str must be a string\")}var t={};var n=r||{};var o=e.split(a);var s=n.decode||i;for(var p=0;p<o.length;p++){var f=o[p];var u=f.indexOf(\"=\");if(u<0){continue}var v=f.substr(0,u).trim();var c=f.substr(++u,f.length).trim();if('\"'==c[0]){c=c.slice(1,-1)}if(undefined==t[v]){t[v]=tryDecode(c,s)}}return t}function serialize(e,r,i){var a=i||{};var o=a.encode||t;if(typeof o!==\"function\"){throw new TypeError(\"option encode is invalid\")}if(!n.test(e)){throw new TypeError(\"argument name is invalid\")}var s=o(r);if(s&&!n.test(s)){throw new TypeError(\"argument val is invalid\")}var p=e+\"=\"+s;if(null!=a.maxAge){var f=a.maxAge-0;if(isNaN(f)||!isFinite(f)){throw new TypeError(\"option maxAge is invalid\")}p+=\"; Max-Age=\"+Math.floor(f)}if(a.domain){if(!n.test(a.domain)){throw new TypeError(\"option domain is invalid\")}p+=\"; Domain=\"+a.domain}if(a.path){if(!n.test(a.path)){throw new TypeError(\"option path is invalid\")}p+=\"; Path=\"+a.path}if(a.expires){if(typeof a.expires.toUTCString!==\"function\"){throw new TypeError(\"option expires is invalid\")}p+=\"; Expires=\"+a.expires.toUTCString()}if(a.httpOnly){p+=\"; HttpOnly\"}if(a.secure){p+=\"; Secure\"}if(a.sameSite){var u=typeof a.sameSite===\"string\"?a.sameSite.toLowerCase():a.sameSite;switch(u){case true:p+=\"; SameSite=Strict\";break;case\"lax\":p+=\"; SameSite=Lax\";break;case\"strict\":p+=\"; SameSite=Strict\";break;case\"none\":p+=\"; SameSite=None\";break;default:throw new TypeError(\"option sameSite is invalid\")}}return p}function tryDecode(e,r){try{return r(e)}catch(r){return e}}})();module.exports=e})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nvb2tpZS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsTUFBTSxhQUFhLG1FQUFtRSxTQUFTLEtBQUssU0FBUyxNQUFNO0FBQ25IO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsc0JBQXNCLHlCQUF5Qix5QkFBeUIsU0FBUyxHQUFHLDhDQUE4QyxvQkFBb0Isd0JBQXdCLHFEQUFxRCxTQUFTLFlBQVksaUJBQWlCLGtCQUFrQixZQUFZLFdBQVcsS0FBSyxXQUFXLHFCQUFxQixRQUFRLFNBQVMsMkJBQTJCLG9DQUFvQyxjQUFjLGdCQUFnQixvQkFBb0IscUJBQXFCLFNBQVMsMEJBQTBCLFlBQVksa0JBQWtCLDBCQUEwQixnREFBZ0QsZUFBZSxnREFBZ0QsV0FBVyxrQkFBa0IsK0NBQStDLGNBQWMsbUJBQW1CLGlCQUFpQiwyQkFBMkIsZ0RBQWdELE1BQU0sd0JBQXdCLGFBQWEsc0JBQXNCLGdEQUFnRCxNQUFNLGtCQUFrQixXQUFXLG9CQUFvQiw4Q0FBOEMsTUFBTSxjQUFjLGNBQWMsOENBQThDLGlEQUFpRCxNQUFNLGtDQUFrQyxlQUFlLE1BQU0sVUFBVSxhQUFhLE1BQU0sUUFBUSxlQUFlLHVFQUF1RSxVQUFVLGdCQUFnQixpQkFBaUIsTUFBTSxnQkFBZ0IsY0FBYyxNQUFNLG1CQUFtQixpQkFBaUIsTUFBTSxpQkFBaUIsZUFBZSxNQUFNLDJEQUEyRCxTQUFTLHdCQUF3QixJQUFJLFlBQVksU0FBUyxXQUFXLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY29va2llL2luZGV4LmpzP2IyNWUiXSwic291cmNlc0NvbnRlbnQiOlsiKCgpPT57XCJ1c2Ugc3RyaWN0XCI7aWYodHlwZW9mIF9fbmNjd3Bja19yZXF1aXJlX18hPT1cInVuZGVmaW5lZFwiKV9fbmNjd3Bja19yZXF1aXJlX18uYWI9X19kaXJuYW1lK1wiL1wiO3ZhciBlPXt9OygoKT0+e3ZhciByPWU7XG4vKiFcbiAqIGNvb2tpZVxuICogQ29weXJpZ2h0KGMpIDIwMTItMjAxNCBSb21hbiBTaHR5bG1hblxuICogQ29weXJpZ2h0KGMpIDIwMTUgRG91Z2xhcyBDaHJpc3RvcGhlciBXaWxzb25cbiAqIE1JVCBMaWNlbnNlZFxuICovci5wYXJzZT1wYXJzZTtyLnNlcmlhbGl6ZT1zZXJpYWxpemU7dmFyIGk9ZGVjb2RlVVJJQ29tcG9uZW50O3ZhciB0PWVuY29kZVVSSUNvbXBvbmVudDt2YXIgYT0vOyAqLzt2YXIgbj0vXltcXHUwMDA5XFx1MDAyMC1cXHUwMDdlXFx1MDA4MC1cXHUwMGZmXSskLztmdW5jdGlvbiBwYXJzZShlLHIpe2lmKHR5cGVvZiBlIT09XCJzdHJpbmdcIil7dGhyb3cgbmV3IFR5cGVFcnJvcihcImFyZ3VtZW50IHN0ciBtdXN0IGJlIGEgc3RyaW5nXCIpfXZhciB0PXt9O3ZhciBuPXJ8fHt9O3ZhciBvPWUuc3BsaXQoYSk7dmFyIHM9bi5kZWNvZGV8fGk7Zm9yKHZhciBwPTA7cDxvLmxlbmd0aDtwKyspe3ZhciBmPW9bcF07dmFyIHU9Zi5pbmRleE9mKFwiPVwiKTtpZih1PDApe2NvbnRpbnVlfXZhciB2PWYuc3Vic3RyKDAsdSkudHJpbSgpO3ZhciBjPWYuc3Vic3RyKCsrdSxmLmxlbmd0aCkudHJpbSgpO2lmKCdcIic9PWNbMF0pe2M9Yy5zbGljZSgxLC0xKX1pZih1bmRlZmluZWQ9PXRbdl0pe3Rbdl09dHJ5RGVjb2RlKGMscyl9fXJldHVybiB0fWZ1bmN0aW9uIHNlcmlhbGl6ZShlLHIsaSl7dmFyIGE9aXx8e307dmFyIG89YS5lbmNvZGV8fHQ7aWYodHlwZW9mIG8hPT1cImZ1bmN0aW9uXCIpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJvcHRpb24gZW5jb2RlIGlzIGludmFsaWRcIil9aWYoIW4udGVzdChlKSl7dGhyb3cgbmV3IFR5cGVFcnJvcihcImFyZ3VtZW50IG5hbWUgaXMgaW52YWxpZFwiKX12YXIgcz1vKHIpO2lmKHMmJiFuLnRlc3Qocykpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJhcmd1bWVudCB2YWwgaXMgaW52YWxpZFwiKX12YXIgcD1lK1wiPVwiK3M7aWYobnVsbCE9YS5tYXhBZ2Upe3ZhciBmPWEubWF4QWdlLTA7aWYoaXNOYU4oZil8fCFpc0Zpbml0ZShmKSl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIm9wdGlvbiBtYXhBZ2UgaXMgaW52YWxpZFwiKX1wKz1cIjsgTWF4LUFnZT1cIitNYXRoLmZsb29yKGYpfWlmKGEuZG9tYWluKXtpZighbi50ZXN0KGEuZG9tYWluKSl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIm9wdGlvbiBkb21haW4gaXMgaW52YWxpZFwiKX1wKz1cIjsgRG9tYWluPVwiK2EuZG9tYWlufWlmKGEucGF0aCl7aWYoIW4udGVzdChhLnBhdGgpKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwib3B0aW9uIHBhdGggaXMgaW52YWxpZFwiKX1wKz1cIjsgUGF0aD1cIithLnBhdGh9aWYoYS5leHBpcmVzKXtpZih0eXBlb2YgYS5leHBpcmVzLnRvVVRDU3RyaW5nIT09XCJmdW5jdGlvblwiKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwib3B0aW9uIGV4cGlyZXMgaXMgaW52YWxpZFwiKX1wKz1cIjsgRXhwaXJlcz1cIithLmV4cGlyZXMudG9VVENTdHJpbmcoKX1pZihhLmh0dHBPbmx5KXtwKz1cIjsgSHR0cE9ubHlcIn1pZihhLnNlY3VyZSl7cCs9XCI7IFNlY3VyZVwifWlmKGEuc2FtZVNpdGUpe3ZhciB1PXR5cGVvZiBhLnNhbWVTaXRlPT09XCJzdHJpbmdcIj9hLnNhbWVTaXRlLnRvTG93ZXJDYXNlKCk6YS5zYW1lU2l0ZTtzd2l0Y2godSl7Y2FzZSB0cnVlOnArPVwiOyBTYW1lU2l0ZT1TdHJpY3RcIjticmVhaztjYXNlXCJsYXhcIjpwKz1cIjsgU2FtZVNpdGU9TGF4XCI7YnJlYWs7Y2FzZVwic3RyaWN0XCI6cCs9XCI7IFNhbWVTaXRlPVN0cmljdFwiO2JyZWFrO2Nhc2VcIm5vbmVcIjpwKz1cIjsgU2FtZVNpdGU9Tm9uZVwiO2JyZWFrO2RlZmF1bHQ6dGhyb3cgbmV3IFR5cGVFcnJvcihcIm9wdGlvbiBzYW1lU2l0ZSBpcyBpbnZhbGlkXCIpfX1yZXR1cm4gcH1mdW5jdGlvbiB0cnlEZWNvZGUoZSxyKXt0cnl7cmV0dXJuIHIoZSl9Y2F0Y2gocil7cmV0dXJuIGV9fX0pKCk7bW9kdWxlLmV4cG9ydHM9ZX0pKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/cookie/index.js\n");

/***/ }),

/***/ "./node_modules/next/dist/server/api-utils/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/dist/server/api-utils/index.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports.getCookieParser = getCookieParser;\nexports.sendStatusCode = sendStatusCode;\nexports.redirect = redirect;\nexports.checkIsManualRevalidate = checkIsManualRevalidate;\nexports.clearPreviewData = clearPreviewData;\nexports.sendError = sendError;\nexports.setLazyProp = setLazyProp;\nexports.SYMBOL_CLEARED_COOKIES = exports.SYMBOL_PREVIEW_DATA = exports.COOKIE_NAME_PRERENDER_DATA = exports.COOKIE_NAME_PRERENDER_BYPASS = exports.PRERENDER_REVALIDATE_HEADER = void 0;\nfunction getCookieParser(headers) {\n    return function parseCookie() {\n        const header = headers.cookie;\n        if (!header) {\n            return {\n            };\n        }\n        const { parse: parseCookieFn  } = __webpack_require__(/*! next/dist/compiled/cookie */ \"./node_modules/next/dist/compiled/cookie/index.js\");\n        return parseCookieFn(Array.isArray(header) ? header.join(';') : header);\n    };\n}\nfunction sendStatusCode(res, statusCode) {\n    res.statusCode = statusCode;\n    return res;\n}\nfunction redirect(res, statusOrUrl, url) {\n    if (typeof statusOrUrl === 'string') {\n        url = statusOrUrl;\n        statusOrUrl = 307;\n    }\n    if (typeof statusOrUrl !== 'number' || typeof url !== 'string') {\n        throw new Error(`Invalid redirect arguments. Please use a single argument URL, e.g. res.redirect('/destination') or use a status code and URL, e.g. res.redirect(307, '/destination').`);\n    }\n    res.writeHead(statusOrUrl, {\n        Location: url\n    });\n    res.write(url);\n    res.end();\n    return res;\n}\nconst PRERENDER_REVALIDATE_HEADER = 'x-prerender-revalidate';\nexports.PRERENDER_REVALIDATE_HEADER = PRERENDER_REVALIDATE_HEADER;\nfunction checkIsManualRevalidate(req, previewProps) {\n    return req.headers[PRERENDER_REVALIDATE_HEADER] === previewProps.previewModeId;\n}\nconst COOKIE_NAME_PRERENDER_BYPASS = `__prerender_bypass`;\nexports.COOKIE_NAME_PRERENDER_BYPASS = COOKIE_NAME_PRERENDER_BYPASS;\nconst COOKIE_NAME_PRERENDER_DATA = `__next_preview_data`;\nexports.COOKIE_NAME_PRERENDER_DATA = COOKIE_NAME_PRERENDER_DATA;\nconst SYMBOL_PREVIEW_DATA = Symbol(COOKIE_NAME_PRERENDER_DATA);\nexports.SYMBOL_PREVIEW_DATA = SYMBOL_PREVIEW_DATA;\nconst SYMBOL_CLEARED_COOKIES = Symbol(COOKIE_NAME_PRERENDER_BYPASS);\nexports.SYMBOL_CLEARED_COOKIES = SYMBOL_CLEARED_COOKIES;\nfunction clearPreviewData(res) {\n    if (SYMBOL_CLEARED_COOKIES in res) {\n        return res;\n    }\n    const { serialize  } = __webpack_require__(/*! next/dist/compiled/cookie */ \"./node_modules/next/dist/compiled/cookie/index.js\");\n    const previous = res.getHeader('Set-Cookie');\n    res.setHeader(`Set-Cookie`, [\n        ...typeof previous === 'string' ? [\n            previous\n        ] : Array.isArray(previous) ? previous : [],\n        serialize(COOKIE_NAME_PRERENDER_BYPASS, '', {\n            // To delete a cookie, set `expires` to a date in the past:\n            // https://tools.ietf.org/html/rfc6265#section-4.1.1\n            // `Max-Age: 0` is not valid, thus ignored, and the cookie is persisted.\n            expires: new Date(0),\n            httpOnly: true,\n            sameSite:  false ? 0 : 'lax',\n            secure: \"development\" !== 'development',\n            path: '/'\n        }),\n        serialize(COOKIE_NAME_PRERENDER_DATA, '', {\n            // To delete a cookie, set `expires` to a date in the past:\n            // https://tools.ietf.org/html/rfc6265#section-4.1.1\n            // `Max-Age: 0` is not valid, thus ignored, and the cookie is persisted.\n            expires: new Date(0),\n            httpOnly: true,\n            sameSite:  false ? 0 : 'lax',\n            secure: \"development\" !== 'development',\n            path: '/'\n        }), \n    ]);\n    Object.defineProperty(res, SYMBOL_CLEARED_COOKIES, {\n        value: true,\n        enumerable: false\n    });\n    return res;\n}\nclass ApiError extends Error {\n    constructor(statusCode, message){\n        super(message);\n        this.statusCode = statusCode;\n    }\n}\nexports.ApiError = ApiError;\nfunction sendError(res, statusCode, message) {\n    res.statusCode = statusCode;\n    res.statusMessage = message;\n    res.end(message);\n}\nfunction setLazyProp({ req  }, prop, getter) {\n    const opts = {\n        configurable: true,\n        enumerable: true\n    };\n    const optsReset = {\n        ...opts,\n        writable: true\n    };\n    Object.defineProperty(req, prop, {\n        ...opts,\n        get: ()=>{\n            const value = getter();\n            // we set the property on the object to avoid recalculating it\n            Object.defineProperty(req, prop, {\n                ...optsReset,\n                value\n            });\n            return value;\n        },\n        set: (value)=>{\n            Object.defineProperty(req, prop, {\n                ...optsReset,\n                value\n            });\n        }\n    });\n}\n\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NlcnZlci9hcGktdXRpbHMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRix1QkFBdUI7QUFDdkIsc0JBQXNCO0FBQ3RCLGdCQUFnQjtBQUNoQiwrQkFBK0I7QUFDL0Isd0JBQXdCO0FBQ3hCLGlCQUFpQjtBQUNqQixtQkFBbUI7QUFDbkIsOEJBQThCLEdBQUcsMkJBQTJCLEdBQUcsa0NBQWtDLEdBQUcsb0NBQW9DLEdBQUcsbUNBQW1DO0FBQzlLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHdCQUF3QixFQUFFLG1CQUFPLENBQUMsb0ZBQTJCO0FBQzdFLG1FQUFtRTtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxhQUFhLEVBQUUsbUJBQU8sQ0FBQyxvRkFBMkI7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixNQUFzQyxHQUFHLENBQU07QUFDckUsb0JBQW9CLGFBQW9CO0FBQ3hDO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixNQUFzQyxHQUFHLENBQU07QUFDckUsb0JBQW9CLGFBQW9CO0FBQ3hDO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixNQUFNO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2VydmVyL2FwaS11dGlscy9pbmRleC5qcz9iNzdlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5nZXRDb29raWVQYXJzZXIgPSBnZXRDb29raWVQYXJzZXI7XG5leHBvcnRzLnNlbmRTdGF0dXNDb2RlID0gc2VuZFN0YXR1c0NvZGU7XG5leHBvcnRzLnJlZGlyZWN0ID0gcmVkaXJlY3Q7XG5leHBvcnRzLmNoZWNrSXNNYW51YWxSZXZhbGlkYXRlID0gY2hlY2tJc01hbnVhbFJldmFsaWRhdGU7XG5leHBvcnRzLmNsZWFyUHJldmlld0RhdGEgPSBjbGVhclByZXZpZXdEYXRhO1xuZXhwb3J0cy5zZW5kRXJyb3IgPSBzZW5kRXJyb3I7XG5leHBvcnRzLnNldExhenlQcm9wID0gc2V0TGF6eVByb3A7XG5leHBvcnRzLlNZTUJPTF9DTEVBUkVEX0NPT0tJRVMgPSBleHBvcnRzLlNZTUJPTF9QUkVWSUVXX0RBVEEgPSBleHBvcnRzLkNPT0tJRV9OQU1FX1BSRVJFTkRFUl9EQVRBID0gZXhwb3J0cy5DT09LSUVfTkFNRV9QUkVSRU5ERVJfQllQQVNTID0gZXhwb3J0cy5QUkVSRU5ERVJfUkVWQUxJREFURV9IRUFERVIgPSB2b2lkIDA7XG5mdW5jdGlvbiBnZXRDb29raWVQYXJzZXIoaGVhZGVycykge1xuICAgIHJldHVybiBmdW5jdGlvbiBwYXJzZUNvb2tpZSgpIHtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gaGVhZGVycy5jb29raWU7XG4gICAgICAgIGlmICghaGVhZGVyKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHBhcnNlOiBwYXJzZUNvb2tpZUZuICB9ID0gcmVxdWlyZSgnbmV4dC9kaXN0L2NvbXBpbGVkL2Nvb2tpZScpO1xuICAgICAgICByZXR1cm4gcGFyc2VDb29raWVGbihBcnJheS5pc0FycmF5KGhlYWRlcikgPyBoZWFkZXIuam9pbignOycpIDogaGVhZGVyKTtcbiAgICB9O1xufVxuZnVuY3Rpb24gc2VuZFN0YXR1c0NvZGUocmVzLCBzdGF0dXNDb2RlKSB7XG4gICAgcmVzLnN0YXR1c0NvZGUgPSBzdGF0dXNDb2RlO1xuICAgIHJldHVybiByZXM7XG59XG5mdW5jdGlvbiByZWRpcmVjdChyZXMsIHN0YXR1c09yVXJsLCB1cmwpIHtcbiAgICBpZiAodHlwZW9mIHN0YXR1c09yVXJsID09PSAnc3RyaW5nJykge1xuICAgICAgICB1cmwgPSBzdGF0dXNPclVybDtcbiAgICAgICAgc3RhdHVzT3JVcmwgPSAzMDc7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygc3RhdHVzT3JVcmwgIT09ICdudW1iZXInIHx8IHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCByZWRpcmVjdCBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYSBzaW5nbGUgYXJndW1lbnQgVVJMLCBlLmcuIHJlcy5yZWRpcmVjdCgnL2Rlc3RpbmF0aW9uJykgb3IgdXNlIGEgc3RhdHVzIGNvZGUgYW5kIFVSTCwgZS5nLiByZXMucmVkaXJlY3QoMzA3LCAnL2Rlc3RpbmF0aW9uJykuYCk7XG4gICAgfVxuICAgIHJlcy53cml0ZUhlYWQoc3RhdHVzT3JVcmwsIHtcbiAgICAgICAgTG9jYXRpb246IHVybFxuICAgIH0pO1xuICAgIHJlcy53cml0ZSh1cmwpO1xuICAgIHJlcy5lbmQoKTtcbiAgICByZXR1cm4gcmVzO1xufVxuY29uc3QgUFJFUkVOREVSX1JFVkFMSURBVEVfSEVBREVSID0gJ3gtcHJlcmVuZGVyLXJldmFsaWRhdGUnO1xuZXhwb3J0cy5QUkVSRU5ERVJfUkVWQUxJREFURV9IRUFERVIgPSBQUkVSRU5ERVJfUkVWQUxJREFURV9IRUFERVI7XG5mdW5jdGlvbiBjaGVja0lzTWFudWFsUmV2YWxpZGF0ZShyZXEsIHByZXZpZXdQcm9wcykge1xuICAgIHJldHVybiByZXEuaGVhZGVyc1tQUkVSRU5ERVJfUkVWQUxJREFURV9IRUFERVJdID09PSBwcmV2aWV3UHJvcHMucHJldmlld01vZGVJZDtcbn1cbmNvbnN0IENPT0tJRV9OQU1FX1BSRVJFTkRFUl9CWVBBU1MgPSBgX19wcmVyZW5kZXJfYnlwYXNzYDtcbmV4cG9ydHMuQ09PS0lFX05BTUVfUFJFUkVOREVSX0JZUEFTUyA9IENPT0tJRV9OQU1FX1BSRVJFTkRFUl9CWVBBU1M7XG5jb25zdCBDT09LSUVfTkFNRV9QUkVSRU5ERVJfREFUQSA9IGBfX25leHRfcHJldmlld19kYXRhYDtcbmV4cG9ydHMuQ09PS0lFX05BTUVfUFJFUkVOREVSX0RBVEEgPSBDT09LSUVfTkFNRV9QUkVSRU5ERVJfREFUQTtcbmNvbnN0IFNZTUJPTF9QUkVWSUVXX0RBVEEgPSBTeW1ib2woQ09PS0lFX05BTUVfUFJFUkVOREVSX0RBVEEpO1xuZXhwb3J0cy5TWU1CT0xfUFJFVklFV19EQVRBID0gU1lNQk9MX1BSRVZJRVdfREFUQTtcbmNvbnN0IFNZTUJPTF9DTEVBUkVEX0NPT0tJRVMgPSBTeW1ib2woQ09PS0lFX05BTUVfUFJFUkVOREVSX0JZUEFTUyk7XG5leHBvcnRzLlNZTUJPTF9DTEVBUkVEX0NPT0tJRVMgPSBTWU1CT0xfQ0xFQVJFRF9DT09LSUVTO1xuZnVuY3Rpb24gY2xlYXJQcmV2aWV3RGF0YShyZXMpIHtcbiAgICBpZiAoU1lNQk9MX0NMRUFSRURfQ09PS0lFUyBpbiByZXMpIHtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG4gICAgY29uc3QgeyBzZXJpYWxpemUgIH0gPSByZXF1aXJlKCduZXh0L2Rpc3QvY29tcGlsZWQvY29va2llJyk7XG4gICAgY29uc3QgcHJldmlvdXMgPSByZXMuZ2V0SGVhZGVyKCdTZXQtQ29va2llJyk7XG4gICAgcmVzLnNldEhlYWRlcihgU2V0LUNvb2tpZWAsIFtcbiAgICAgICAgLi4udHlwZW9mIHByZXZpb3VzID09PSAnc3RyaW5nJyA/IFtcbiAgICAgICAgICAgIHByZXZpb3VzXG4gICAgICAgIF0gOiBBcnJheS5pc0FycmF5KHByZXZpb3VzKSA/IHByZXZpb3VzIDogW10sXG4gICAgICAgIHNlcmlhbGl6ZShDT09LSUVfTkFNRV9QUkVSRU5ERVJfQllQQVNTLCAnJywge1xuICAgICAgICAgICAgLy8gVG8gZGVsZXRlIGEgY29va2llLCBzZXQgYGV4cGlyZXNgIHRvIGEgZGF0ZSBpbiB0aGUgcGFzdDpcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM2MjY1I3NlY3Rpb24tNC4xLjFcbiAgICAgICAgICAgIC8vIGBNYXgtQWdlOiAwYCBpcyBub3QgdmFsaWQsIHRodXMgaWdub3JlZCwgYW5kIHRoZSBjb29raWUgaXMgcGVyc2lzdGVkLlxuICAgICAgICAgICAgZXhwaXJlczogbmV3IERhdGUoMCksXG4gICAgICAgICAgICBodHRwT25seTogdHJ1ZSxcbiAgICAgICAgICAgIHNhbWVTaXRlOiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50JyA/ICdub25lJyA6ICdsYXgnLFxuICAgICAgICAgICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50JyxcbiAgICAgICAgICAgIHBhdGg6ICcvJ1xuICAgICAgICB9KSxcbiAgICAgICAgc2VyaWFsaXplKENPT0tJRV9OQU1FX1BSRVJFTkRFUl9EQVRBLCAnJywge1xuICAgICAgICAgICAgLy8gVG8gZGVsZXRlIGEgY29va2llLCBzZXQgYGV4cGlyZXNgIHRvIGEgZGF0ZSBpbiB0aGUgcGFzdDpcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM2MjY1I3NlY3Rpb24tNC4xLjFcbiAgICAgICAgICAgIC8vIGBNYXgtQWdlOiAwYCBpcyBub3QgdmFsaWQsIHRodXMgaWdub3JlZCwgYW5kIHRoZSBjb29raWUgaXMgcGVyc2lzdGVkLlxuICAgICAgICAgICAgZXhwaXJlczogbmV3IERhdGUoMCksXG4gICAgICAgICAgICBodHRwT25seTogdHJ1ZSxcbiAgICAgICAgICAgIHNhbWVTaXRlOiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50JyA/ICdub25lJyA6ICdsYXgnLFxuICAgICAgICAgICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50JyxcbiAgICAgICAgICAgIHBhdGg6ICcvJ1xuICAgICAgICB9KSwgXG4gICAgXSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcywgU1lNQk9MX0NMRUFSRURfQ09PS0lFUywge1xuICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2VcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzO1xufVxuY2xhc3MgQXBpRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgY29uc3RydWN0b3Ioc3RhdHVzQ29kZSwgbWVzc2FnZSl7XG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLnN0YXR1c0NvZGUgPSBzdGF0dXNDb2RlO1xuICAgIH1cbn1cbmV4cG9ydHMuQXBpRXJyb3IgPSBBcGlFcnJvcjtcbmZ1bmN0aW9uIHNlbmRFcnJvcihyZXMsIHN0YXR1c0NvZGUsIG1lc3NhZ2UpIHtcbiAgICByZXMuc3RhdHVzQ29kZSA9IHN0YXR1c0NvZGU7XG4gICAgcmVzLnN0YXR1c01lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHJlcy5lbmQobWVzc2FnZSk7XG59XG5mdW5jdGlvbiBzZXRMYXp5UHJvcCh7IHJlcSAgfSwgcHJvcCwgZ2V0dGVyKSB7XG4gICAgY29uc3Qgb3B0cyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgfTtcbiAgICBjb25zdCBvcHRzUmVzZXQgPSB7XG4gICAgICAgIC4uLm9wdHMsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxLCBwcm9wLCB7XG4gICAgICAgIC4uLm9wdHMsXG4gICAgICAgIGdldDogKCk9PntcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZ2V0dGVyKCk7XG4gICAgICAgICAgICAvLyB3ZSBzZXQgdGhlIHByb3BlcnR5IG9uIHRoZSBvYmplY3QgdG8gYXZvaWQgcmVjYWxjdWxhdGluZyBpdFxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcSwgcHJvcCwge1xuICAgICAgICAgICAgICAgIC4uLm9wdHNSZXNldCxcbiAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogKHZhbHVlKT0+e1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcSwgcHJvcCwge1xuICAgICAgICAgICAgICAgIC4uLm9wdHNSZXNldCxcbiAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/server/api-utils/index.js\n");

/***/ })

});