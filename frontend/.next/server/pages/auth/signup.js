"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/auth/signup";
exports.ids = ["pages/auth/signup"];
exports.modules = {

/***/ "./hooks/use-request.tsx":
/*!*******************************!*\
  !*** ./hooks/use-request.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst useRequest = (options)=>{\n    const { 0: errors1 , 1: setErrors  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const request = async (params = {})=>{\n        try {\n            setErrors(null);\n            const response = await (axios__WEBPACK_IMPORTED_MODULE_1___default())[options.method](options.url, {\n                ...options.body,\n                ...params\n            });\n            if (options.onSuccess) {\n                options.onSuccess(response.data);\n            }\n        } catch (error) {\n            var ref, ref1;\n            const errors = (ref = error.response) === null || ref === void 0 ? void 0 : (ref1 = ref.data) === null || ref1 === void 0 ? void 0 : ref1.errors;\n            setErrors(errors && errors.map((err, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: err.message\n                }, i, false, {\n                    fileName: \"/app/hooks/use-request.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 69\n                }, undefined)\n            ));\n        }\n    };\n    return [\n        request,\n        errors1\n    ];\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useRequest);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2UtcmVxdWVzdC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBeUI7QUFDcUI7QUFTOUMsS0FBSyxDQUFDRSxVQUFVLElBQUlDLE9BQXdCLEdBQUssQ0FBQztJQUM5QyxLQUFLLE1BQUVDLE9BQU0sTUFBRUMsU0FBUyxNQUFJSiwrQ0FBUTtJQUVwQyxLQUFLLENBQUNLLE9BQU8sVUFBVUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFLLENBQUM7UUFDcEMsR0FBRyxDQUFDLENBQUM7WUFDREYsU0FBUyxDQUFDLElBQUk7WUFDZCxLQUFLLENBQUNHLFFBQVEsR0FBRyxLQUFLLENBQUNSLDhDQUFLLENBQUNHLE9BQU8sQ0FBQ00sTUFBTSxFQUFFTixPQUFPLENBQUNPLEdBQUcsRUFBRSxDQUFDO21CQUFJUCxPQUFPLENBQUNRLElBQUk7bUJBQUtKLE1BQU07WUFBQSxDQUFDO1lBRXZGLEVBQUUsRUFBRUosT0FBTyxDQUFDUyxTQUFTLEVBQUUsQ0FBQztnQkFDcEJULE9BQU8sQ0FBQ1MsU0FBUyxDQUFDSixRQUFRLENBQUNLLElBQUk7WUFDbkMsQ0FBQztRQUVMLENBQUMsQ0FBQyxLQUFLLEVBQUVDLEtBQUssRUFBTyxDQUFDO2dCQUNIQSxHQUFjO1lBQTdCLEtBQUssQ0FBQ1YsTUFBTSxJQUFHVSxHQUFjLEdBQWRBLEtBQUssQ0FBQ04sUUFBUSxjQUFkTSxHQUFjLEtBQWRBLElBQUksQ0FBSkEsQ0FBb0IsR0FBcEJBLElBQUksQ0FBSkEsQ0FBb0IsV0FBcEJBLEdBQWMsQ0FBRUQsSUFBSSx1QkFBcEJDLElBQUksQ0FBSkEsQ0FBb0IsR0FBcEJBLElBQUksQ0FBSkEsQ0FBb0IsUUFBRVYsTUFBTTtZQUMzQ0MsU0FBUyxDQUFDRCxNQUFNLElBQUlBLE1BQU0sQ0FBQ1csR0FBRyxFQUFFQyxHQUFRLEVBQUVDLENBQVMsK0VBQU1DLENBQUc7OEJBQVVGLEdBQUcsQ0FBQ0csT0FBTzttQkFBZkYsQ0FBQzs7Ozs7O1FBQ3ZFLENBQUM7SUFDTCxDQUFDO0lBRUQsTUFBTSxDQUFDLENBQUNYO1FBQUFBLE9BQU87UUFBRUYsT0FBTTtJQUFBLENBQUM7QUFDNUIsQ0FBQztBQUVELGlFQUFlRixVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXJpdGhtZXRpYy13ZWItY2xpZW50Ly4vaG9va3MvdXNlLXJlcXVlc3QudHN4P2FmNDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgUmVhY3RFbGVtZW50LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5pbnRlcmZhY2UgVXNlUmVxdWVzdFByb3BzIHtcbiAgICB1cmw6IHN0cmluZ1xuICAgIG1ldGhvZDogJ3Bvc3QnIHwgJ3B1dCcgfCAnZGVsZXRlJ1xuICAgIGJvZHk6IGFueVxuICAgIG9uU3VjY2VzczogRnVuY3Rpb25cbn1cblxuY29uc3QgdXNlUmVxdWVzdCA9IChvcHRpb25zOiBVc2VSZXF1ZXN0UHJvcHMpID0+IHtcbiAgICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gdXNlU3RhdGU8UmVhY3RFbGVtZW50IHwgbnVsbD4oKVxuXG4gICAgY29uc3QgcmVxdWVzdCA9IGFzeW5jIChwYXJhbXMgPSB7fSkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2V0RXJyb3JzKG51bGwpXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zW29wdGlvbnMubWV0aG9kXShvcHRpb25zLnVybCwgeyAuLi5vcHRpb25zLmJvZHksIC4uLnBhcmFtc30pXG5cbiAgICAgICAgICAgIGlmIChvcHRpb25zLm9uU3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMub25TdWNjZXNzKHJlc3BvbnNlLmRhdGEpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICAgICAgY29uc3QgZXJyb3JzID0gZXJyb3IucmVzcG9uc2U/LmRhdGE/LmVycm9yc1xuICAgICAgICAgICAgc2V0RXJyb3JzKGVycm9ycyAmJiBlcnJvcnMubWFwKChlcnI6IGFueSwgaTogbnVtYmVyKSA9PiA8ZGl2IGtleT17aX0+e2Vyci5tZXNzYWdlfTwvZGl2PikpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gW3JlcXVlc3QsIGVycm9yc11cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlUmVxdWVzdFxuIl0sIm5hbWVzIjpbImF4aW9zIiwidXNlU3RhdGUiLCJ1c2VSZXF1ZXN0Iiwib3B0aW9ucyIsImVycm9ycyIsInNldEVycm9ycyIsInJlcXVlc3QiLCJwYXJhbXMiLCJyZXNwb25zZSIsIm1ldGhvZCIsInVybCIsImJvZHkiLCJvblN1Y2Nlc3MiLCJkYXRhIiwiZXJyb3IiLCJtYXAiLCJlcnIiLCJpIiwiZGl2IiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/use-request.tsx\n");

/***/ }),

/***/ "./pages/auth/signup.tsx":
/*!*******************************!*\
  !*** ./pages/auth/signup.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _hooks_use_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-request */ \"./hooks/use-request.tsx\");\n\n\n\n\n\nconst SignUpPage = ()=>{\n    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('');\n    const { 0: password , 1: setPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('');\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [request, errors] = (0,_hooks_use_request__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n        method: 'post',\n        url: '/api/auth/sign-up',\n        body: {\n            username: email,\n            password\n        },\n        onSuccess: ()=>router.push('/')\n    });\n    const onSubmit = async (e)=>{\n        e.preventDefault();\n        // @ts-ignore\n        await request();\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Sign up Arithmetic App\"\n                }, void 0, false, {\n                    fileName: \"/app/pages/auth/signup.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/app/pages/auth/signup.tsx\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-w-md w-full space-y-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"mt-6 text-center text-3xl font-extrabold text-gray-900\",\n                                children: \"Sign up to your account\"\n                            }, void 0, false, {\n                                fileName: \"/app/pages/auth/signup.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/app/pages/auth/signup.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            className: \"mt-8 space-y-6\",\n                            onSubmit: (e)=>onSubmit(e)\n                            ,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"hidden\",\n                                    name: \"remember\",\n                                    value: \"true\"\n                                }, void 0, false, {\n                                    fileName: \"/app/pages/auth/signup.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"rounded-md shadow-sm -space-y-px\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    htmlFor: \"email-address\",\n                                                    className: \"sr-only\",\n                                                    children: \"Email address\"\n                                                }, void 0, false, {\n                                                    fileName: \"/app/pages/auth/signup.tsx\",\n                                                    lineNumber: 40,\n                                                    columnNumber: 33\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    id: \"email-address\",\n                                                    name: \"email\",\n                                                    type: \"email\",\n                                                    autoComplete: \"email\",\n                                                    required: true,\n                                                    value: email,\n                                                    onChange: ({ target: { value  }  })=>setEmail(value)\n                                                    ,\n                                                    className: \"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm\",\n                                                    placeholder: \"Email address\"\n                                                }, void 0, false, {\n                                                    fileName: \"/app/pages/auth/signup.tsx\",\n                                                    lineNumber: 43,\n                                                    columnNumber: 33\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/app/pages/auth/signup.tsx\",\n                                            lineNumber: 39,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    htmlFor: \"password\",\n                                                    className: \"sr-only\",\n                                                    children: \"Password\"\n                                                }, void 0, false, {\n                                                    fileName: \"/app/pages/auth/signup.tsx\",\n                                                    lineNumber: 56,\n                                                    columnNumber: 33\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    id: \"password\",\n                                                    name: \"password\",\n                                                    type: \"password\",\n                                                    value: password,\n                                                    onChange: ({ target: { value  }  })=>setPassword(value)\n                                                    ,\n                                                    autoComplete: \"current-password\",\n                                                    required: true,\n                                                    className: \"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm\",\n                                                    placeholder: \"Password\"\n                                                }, void 0, false, {\n                                                    fileName: \"/app/pages/auth/signup.tsx\",\n                                                    lineNumber: 59,\n                                                    columnNumber: 33\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/app/pages/auth/signup.tsx\",\n                                            lineNumber: 55,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/app/pages/auth/signup.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-sm text-red-800\",\n                                    children: errors\n                                }, void 0, false, {\n                                    fileName: \"/app/pages/auth/signup.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"submit\",\n                                        className: \"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"absolute left-0 inset-y-0 flex items-center pl-3\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                    className: \"h-5 w-5 text-indigo-500 group-hover:text-indigo-400\",\n                                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                                    viewBox: \"0 0 20 20\",\n                                                    fill: \"currentColor\",\n                                                    \"aria-hidden\": \"true\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                        fillRule: \"evenodd\",\n                                                        d: \"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z\",\n                                                        clipRule: \"evenodd\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/app/pages/auth/signup.tsx\",\n                                                        lineNumber: 88,\n                                                        columnNumber: 41\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"/app/pages/auth/signup.tsx\",\n                                                    lineNumber: 81,\n                                                    columnNumber: 37\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/app/pages/auth/signup.tsx\",\n                                                lineNumber: 80,\n                                                columnNumber: 33\n                                            }, undefined),\n                                            \"Sign up\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/app/pages/auth/signup.tsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 29\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/app/pages/auth/signup.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/app/pages/auth/signup.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/app/pages/auth/signup.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/app/pages/auth/signup.tsx\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/app/pages/auth/signup.tsx\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignUpPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUc7b0NBQUNFLFNBQVMsRUFBQyxDQUFzQjs4Q0FBRVosTUFBTTs7Ozs7OzRHQUU1Q1UsQ0FBRzswSEFDQ2lCLENBQU07d0NBQ0hYLElBQUksRUFBQyxDQUFRO3dDQUNiSixTQUFTLEVBQUMsQ0FBcU87O3dIQUU5T2dCLENBQUk7Z0RBQUNoQixTQUFTLEVBQUMsQ0FBa0Q7c0lBQzdEaUIsQ0FBRztvREFDQWpCLFNBQVMsRUFBQyxDQUFxRDtvREFDL0RrQixLQUFLLEVBQUMsQ0FBNEI7b0RBQ2xDQyxPQUFPLEVBQUMsQ0FBVztvREFDbkJDLElBQUksRUFBQyxDQUFjO29EQUNuQkMsQ0FBVyxjQUFDLENBQU07MElBRWpCQyxDQUFJO3dEQUNEQyxRQUFRLEVBQUMsQ0FBUzt3REFDbEJDLENBQUMsRUFBQyxDQUF3Rzt3REFDMUdDLFFBQVEsRUFBQyxDQUFTOzs7Ozs7Ozs7Ozs7Ozs7OzRDQUd2QixDQUVYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU81QixDQUFDO0FBRUQsaUVBQWU1QyxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXJpdGhtZXRpYy13ZWItY2xpZW50Ly4vcGFnZXMvYXV0aC9zaWdudXAudHN4PzE5OTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgdXNlUmVxdWVzdCBmcm9tICcuLi8uLi9ob29rcy91c2UtcmVxdWVzdCdcblxuY29uc3QgU2lnblVwUGFnZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgY29uc3QgW3JlcXVlc3QsIGVycm9yc10gPSB1c2VSZXF1ZXN0KHtcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgIHVybDogJy9hcGkvYXV0aC9zaWduLXVwJyxcbiAgICAgICAgYm9keTogeyB1c2VybmFtZTogZW1haWwsIHBhc3N3b3JkIH0sXG4gICAgICAgIG9uU3VjY2VzczogKCkgPT4gcm91dGVyLnB1c2goJy8nKSxcbiAgICB9KVxuXG4gICAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZTogYW55KSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGF3YWl0IHJlcXVlc3QoKVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPlNpZ24gdXAgQXJpdGhtZXRpYyBBcHA8L3RpdGxlPlxuICAgICAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWluLWgtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweS0xMiBweC00IHNtOnB4LTYgbGc6cHgtOCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21heC13LW1kIHctZnVsbCBzcGFjZS15LTgnPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nbXQtNiB0ZXh0LWNlbnRlciB0ZXh0LTN4bCBmb250LWV4dHJhYm9sZCB0ZXh0LWdyYXktOTAwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaWduIHVwIHRvIHlvdXIgYWNjb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT0nbXQtOCBzcGFjZS15LTYnIG9uU3VibWl0PXsoZSkgPT4gb25TdWJtaXQoZSl9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdoaWRkZW4nIG5hbWU9J3JlbWVtYmVyJyB2YWx1ZT0ndHJ1ZScgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3VuZGVkLW1kIHNoYWRvdy1zbSAtc3BhY2UteS1weCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2VtYWlsLWFkZHJlc3MnIGNsYXNzTmFtZT0nc3Itb25seSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbWFpbCBhZGRyZXNzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J2VtYWlsLWFkZHJlc3MnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdlbWFpbCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J2VtYWlsJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPSdlbWFpbCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0OiB7IHZhbHVlIH0gfSkgPT4gc2V0RW1haWwodmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdhcHBlYXJhbmNlLW5vbmUgcm91bmRlZC1ub25lIHJlbGF0aXZlIGJsb2NrIHctZnVsbCBweC0zIHB5LTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBwbGFjZWhvbGRlci1ncmF5LTUwMCB0ZXh0LWdyYXktOTAwIHJvdW5kZWQtdC1tZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1pbmRpZ28tNTAwIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwIGZvY3VzOnotMTAgc206dGV4dC1zbSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbWFpbCBhZGRyZXNzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdwYXNzd29yZCcgY2xhc3NOYW1lPSdzci1vbmx5Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBhc3N3b3JkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J3Bhc3N3b3JkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0ncGFzc3dvcmQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdwYXNzd29yZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQ6IHsgdmFsdWUgfSB9KSA9PiBzZXRQYXNzd29yZCh2YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9J2N1cnJlbnQtcGFzc3dvcmQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdhcHBlYXJhbmNlLW5vbmUgcm91bmRlZC1ub25lIHJlbGF0aXZlIGJsb2NrIHctZnVsbCBweC0zIHB5LTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBwbGFjZWhvbGRlci1ncmF5LTUwMCB0ZXh0LWdyYXktOTAwIHJvdW5kZWQtYi1tZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1pbmRpZ28tNTAwIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwIGZvY3VzOnotMTAgc206dGV4dC1zbSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdQYXNzd29yZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1zbSB0ZXh0LXJlZC04MDAnPntlcnJvcnN9PC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdzdWJtaXQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZ3JvdXAgcmVsYXRpdmUgdy1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXIgcHktMiBweC00IGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgdGV4dC1zbSBmb250LW1lZGl1bSByb3VuZGVkLW1kIHRleHQtd2hpdGUgYmctaW5kaWdvLTYwMCBob3ZlcjpiZy1pbmRpZ28tNzAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1vZmZzZXQtMiBmb2N1czpyaW5nLWluZGlnby01MDAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2Fic29sdXRlIGxlZnQtMCBpbnNldC15LTAgZmxleCBpdGVtcy1jZW50ZXIgcGwtMyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdoLTUgdy01IHRleHQtaW5kaWdvLTUwMCBncm91cC1ob3Zlcjp0ZXh0LWluZGlnby00MDAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9JzAgMCAyMCAyMCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPSdjdXJyZW50Q29sb3InXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49J3RydWUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbFJ1bGU9J2V2ZW5vZGQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9J001IDlWN2E1IDUgMCAwMTEwIDB2MmEyIDIgMCAwMTIgMnY1YTIgMiAwIDAxLTIgMkg1YTIgMiAwIDAxLTItMnYtNWEyIDIgMCAwMTItMnptOC0ydjJIN1Y3YTMgMyAwIDAxNiAweidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpcFJ1bGU9J2V2ZW5vZGQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpZ24gdXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaWduVXBQYWdlXG4iXSwibmFtZXMiOlsiSGVhZCIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwidXNlUmVxdWVzdCIsIlNpZ25VcFBhZ2UiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInJvdXRlciIsInJlcXVlc3QiLCJlcnJvcnMiLCJtZXRob2QiLCJ1cmwiLCJib2R5IiwidXNlcm5hbWUiLCJvblN1Y2Nlc3MiLCJwdXNoIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJkaXYiLCJ0aXRsZSIsImNsYXNzTmFtZSIsImgyIiwiZm9ybSIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJ2YWx1ZSIsImxhYmVsIiwiaHRtbEZvciIsImlkIiwiYXV0b0NvbXBsZXRlIiwicmVxdWlyZWQiLCJvbkNoYW5nZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwic3BhbiIsInN2ZyIsInhtbG5zIiwidmlld0JveCIsImZpbGwiLCJhcmlhLWhpZGRlbiIsInBhdGgiLCJmaWxsUnVsZSIsImQiLCJjbGlwUnVsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/auth/signup.tsx\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/auth/signup.tsx"));
module.exports = __webpack_exports__;

})();