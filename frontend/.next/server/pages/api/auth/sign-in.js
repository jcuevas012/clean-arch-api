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
exports.id = "pages/api/auth/sign-in";
exports.ids = ["pages/api/auth/sign-in"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "iron-session":
/*!*******************************!*\
  !*** external "iron-session" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("iron-session");;

/***/ }),

/***/ "(api)/./pages/api/auth/sign-in.ts":
/*!***********************************!*\
  !*** ./pages/api/auth/sign-in.ts ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var iron_session_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! iron-session/next */ \"(api)/./node_modules/iron-session/next/dist/index.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/config */ \"(api)/./utils/config.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([iron_session_next__WEBPACK_IMPORTED_MODULE_0__]);\niron_session_next__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nasync function handler(req, res) {\n    const host = process.env.API_HOST;\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().post(`${host}/api/users/sign-in`, {\n        ...req.body\n    });\n    req.session.user = {\n        token: response.data.token\n    };\n    await req.session.save();\n    res.status(201).send({\n        success: true\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,iron_session_next__WEBPACK_IMPORTED_MODULE_0__.withIronSessionApiRoute)(handler, _utils_config__WEBPACK_IMPORTED_MODULE_2__.ironOptions));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9zaWduLWluLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBSTJEO0FBQ2xDO0FBQzBCO2VBRW5DRyxPQUFPLENBQ3JCQyxHQUFtQixFQUNuQkMsR0FBb0IsRUFDcEIsQ0FBQztJQUNELEtBQUssQ0FBQ0MsSUFBSSxHQUFHQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsUUFBUTtJQUVqQyxLQUFLLENBQUNDLFFBQVEsR0FBRyxLQUFLLENBQUNULGlEQUFVLElBQUlLLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxDQUFDO1dBQzNERixHQUFHLENBQUNRLElBQUk7SUFDYixDQUFDO0lBQ0RSLEdBQUcsQ0FBQ1MsT0FBTyxDQUFDQyxJQUFJLEdBQUcsQ0FBQztRQUNoQkMsS0FBSyxFQUFFTCxRQUFRLENBQUNNLElBQUksQ0FBQ0QsS0FBSztJQUM5QixDQUFDO0lBR0QsS0FBSyxDQUFDWCxHQUFHLENBQUNTLE9BQU8sQ0FBQ0ksSUFBSTtJQUV0QlosR0FBRyxDQUFDYSxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztRQUFDQyxPQUFPLEVBQUUsSUFBSTtJQUFBLENBQUM7QUFDdkMsQ0FBQztBQUNELGlFQUFlcEIsMEVBQXVCLENBQUNHLE9BQU8sRUFBRUQsc0RBQVcsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXJpdGhtZXRpYy13ZWItY2xpZW50Ly4vcGFnZXMvYXBpL2F1dGgvc2lnbi1pbi50cz84OTRlIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgeyB3aXRoSXJvblNlc3Npb25BcGlSb3V0ZSB9IGZyb20gXCJpcm9uLXNlc3Npb24vbmV4dFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IGlyb25PcHRpb25zIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvY29uZmlnJztcblxuIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlXG4pIHtcbiAgY29uc3QgaG9zdCA9IHByb2Nlc3MuZW52LkFQSV9IT1NUXG4gIFxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7aG9zdH0vYXBpL3VzZXJzL3NpZ24taW5gLCB7IFxuICAgIC4uLnJlcS5ib2R5XG4gIH0pXG4gIHJlcS5zZXNzaW9uLnVzZXIgPSB7IFxuICAgICAgdG9rZW46IHJlc3BvbnNlLmRhdGEudG9rZW5cbiAgfTtcblxuXG4gIGF3YWl0IHJlcS5zZXNzaW9uLnNhdmUoKTtcbiAgXG4gIHJlcy5zdGF0dXMoMjAxKS5zZW5kKHsgc3VjY2VzczogdHJ1ZX0pO1xufVxuZXhwb3J0IGRlZmF1bHQgd2l0aElyb25TZXNzaW9uQXBpUm91dGUoaGFuZGxlciwgaXJvbk9wdGlvbnMpOyJdLCJuYW1lcyI6WyJ3aXRoSXJvblNlc3Npb25BcGlSb3V0ZSIsImF4aW9zIiwiaXJvbk9wdGlvbnMiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiaG9zdCIsInByb2Nlc3MiLCJlbnYiLCJBUElfSE9TVCIsInJlc3BvbnNlIiwicG9zdCIsImJvZHkiLCJzZXNzaW9uIiwidXNlciIsInRva2VuIiwiZGF0YSIsInNhdmUiLCJzdGF0dXMiLCJzZW5kIiwic3VjY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/sign-in.ts\n");

/***/ }),

/***/ "(api)/./utils/config.ts":
/*!*************************!*\
  !*** ./utils/config.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ironOptions\": () => (/* binding */ ironOptions)\n/* harmony export */ });\nconst ironOptions = {\n    cookieName: \"myapp_cookiename\",\n    password: \"complex_password_at_least_32_characters_long\",\n    // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)\n    cookieOptions: {\n        secure: \"development\" === \"production\"\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9jb25maWcudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLEtBQUssQ0FBQ0EsV0FBVyxHQUFHLENBQUM7SUFDeEJDLFVBQVUsRUFBRSxDQUFrQjtJQUM5QkMsUUFBUSxFQUFFLENBQThDO0lBQ3hELEVBQTRGO0lBQzVGQyxhQUFhLEVBQUUsQ0FBQztRQUNkQyxNQUFNLEVBTFosQ0FBYSxpQkFLMEIsQ0FBWTtJQUMvQyxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FyaXRobWV0aWMtd2ViLWNsaWVudC8uL3V0aWxzL2NvbmZpZy50cz8wYjFjIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBpcm9uT3B0aW9ucyA9IHtcbiAgICBjb29raWVOYW1lOiBcIm15YXBwX2Nvb2tpZW5hbWVcIixcbiAgICBwYXNzd29yZDogXCJjb21wbGV4X3Bhc3N3b3JkX2F0X2xlYXN0XzMyX2NoYXJhY3RlcnNfbG9uZ1wiLFxuICAgIC8vIHNlY3VyZTogdHJ1ZSBzaG91bGQgYmUgdXNlZCBpbiBwcm9kdWN0aW9uIChIVFRQUykgYnV0IGNhbid0IGJlIHVzZWQgaW4gZGV2ZWxvcG1lbnQgKEhUVFApXG4gICAgY29va2llT3B0aW9uczoge1xuICAgICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIsXG4gICAgfSxcbiAgfTsiXSwibmFtZXMiOlsiaXJvbk9wdGlvbnMiLCJjb29raWVOYW1lIiwicGFzc3dvcmQiLCJjb29raWVPcHRpb25zIiwic2VjdXJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./utils/config.ts\n");

/***/ }),

/***/ "(api)/./node_modules/iron-session/next/dist/index.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/iron-session/next/dist/index.mjs ***!
  \*******************************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"withIronSessionApiRoute\": () => (/* binding */ withIronSessionApiRoute),\n/* harmony export */   \"withIronSessionSsr\": () => (/* binding */ withIronSessionSsr)\n/* harmony export */ });\n/* harmony import */ var iron_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! iron-session */ \"iron-session\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([iron_session__WEBPACK_IMPORTED_MODULE_0__]);\niron_session__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// next/index.ts\n\n\n// src/getPropertyDescriptorForReqSession.ts\nfunction getPropertyDescriptorForReqSession(session) {\n  return {\n    enumerable: true,\n    get() {\n      return session;\n    },\n    set(value) {\n      const keys = Object.keys(value);\n      const currentKeys = Object.keys(session);\n      currentKeys.forEach((key) => {\n        if (!keys.includes(key)) {\n          delete session[key];\n        }\n      });\n      keys.forEach((key) => {\n        session[key] = value[key];\n      });\n    }\n  };\n}\n\n// next/index.ts\nfunction withIronSessionApiRoute(handler, options) {\n  return async function nextApiHandlerWrappedWithIronSession(req, res) {\n    let sessionOptions;\n    if (options instanceof Function) {\n      sessionOptions = await options(req, res);\n    } else {\n      sessionOptions = options;\n    }\n    const session = await (0,iron_session__WEBPACK_IMPORTED_MODULE_0__.getIronSession)(req, res, sessionOptions);\n    Object.defineProperty(\n      req,\n      \"session\",\n      getPropertyDescriptorForReqSession(session)\n    );\n    return handler(req, res);\n  };\n}\nfunction withIronSessionSsr(handler, options) {\n  return async function nextGetServerSidePropsHandlerWrappedWithIronSession(context) {\n    let sessionOptions;\n    if (options instanceof Function) {\n      sessionOptions = await options(context.req, context.res);\n    } else {\n      sessionOptions = options;\n    }\n    const session = await (0,iron_session__WEBPACK_IMPORTED_MODULE_0__.getIronSession)(\n      context.req,\n      context.res,\n      sessionOptions\n    );\n    Object.defineProperty(\n      context.req,\n      \"session\",\n      getPropertyDescriptorForReqSession(session)\n    );\n    return handler(context);\n  };\n}\n\n//# sourceMappingURL=index.mjs.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvaXJvbi1zZXNzaW9uL25leHQvZGlzdC9pbmRleC5tanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDOEM7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLDBCQUEwQiw0REFBYztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsMEJBQTBCLDREQUFjO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlFO0FBQ0Ysa0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcml0aG1ldGljLXdlYi1jbGllbnQvLi9ub2RlX21vZHVsZXMvaXJvbi1zZXNzaW9uL25leHQvZGlzdC9pbmRleC5tanM/MzgwMSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBuZXh0L2luZGV4LnRzXG5pbXBvcnQgeyBnZXRJcm9uU2Vzc2lvbiB9IGZyb20gXCJpcm9uLXNlc3Npb25cIjtcblxuLy8gc3JjL2dldFByb3BlcnR5RGVzY3JpcHRvckZvclJlcVNlc3Npb24udHNcbmZ1bmN0aW9uIGdldFByb3BlcnR5RGVzY3JpcHRvckZvclJlcVNlc3Npb24oc2Vzc2lvbikge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0KCkge1xuICAgICAgcmV0dXJuIHNlc3Npb247XG4gICAgfSxcbiAgICBzZXQodmFsdWUpIHtcbiAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSk7XG4gICAgICBjb25zdCBjdXJyZW50S2V5cyA9IE9iamVjdC5rZXlzKHNlc3Npb24pO1xuICAgICAgY3VycmVudEtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICgha2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgZGVsZXRlIHNlc3Npb25ba2V5XTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBzZXNzaW9uW2tleV0gPSB2YWx1ZVtrZXldO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xufVxuXG4vLyBuZXh0L2luZGV4LnRzXG5mdW5jdGlvbiB3aXRoSXJvblNlc3Npb25BcGlSb3V0ZShoYW5kbGVyLCBvcHRpb25zKSB7XG4gIHJldHVybiBhc3luYyBmdW5jdGlvbiBuZXh0QXBpSGFuZGxlcldyYXBwZWRXaXRoSXJvblNlc3Npb24ocmVxLCByZXMpIHtcbiAgICBsZXQgc2Vzc2lvbk9wdGlvbnM7XG4gICAgaWYgKG9wdGlvbnMgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgc2Vzc2lvbk9wdGlvbnMgPSBhd2FpdCBvcHRpb25zKHJlcSwgcmVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2Vzc2lvbk9wdGlvbnMgPSBvcHRpb25zO1xuICAgIH1cbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0SXJvblNlc3Npb24ocmVxLCByZXMsIHNlc3Npb25PcHRpb25zKTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG4gICAgICByZXEsXG4gICAgICBcInNlc3Npb25cIixcbiAgICAgIGdldFByb3BlcnR5RGVzY3JpcHRvckZvclJlcVNlc3Npb24oc2Vzc2lvbilcbiAgICApO1xuICAgIHJldHVybiBoYW5kbGVyKHJlcSwgcmVzKTtcbiAgfTtcbn1cbmZ1bmN0aW9uIHdpdGhJcm9uU2Vzc2lvblNzcihoYW5kbGVyLCBvcHRpb25zKSB7XG4gIHJldHVybiBhc3luYyBmdW5jdGlvbiBuZXh0R2V0U2VydmVyU2lkZVByb3BzSGFuZGxlcldyYXBwZWRXaXRoSXJvblNlc3Npb24oY29udGV4dCkge1xuICAgIGxldCBzZXNzaW9uT3B0aW9ucztcbiAgICBpZiAob3B0aW9ucyBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICBzZXNzaW9uT3B0aW9ucyA9IGF3YWl0IG9wdGlvbnMoY29udGV4dC5yZXEsIGNvbnRleHQucmVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2Vzc2lvbk9wdGlvbnMgPSBvcHRpb25zO1xuICAgIH1cbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0SXJvblNlc3Npb24oXG4gICAgICBjb250ZXh0LnJlcSxcbiAgICAgIGNvbnRleHQucmVzLFxuICAgICAgc2Vzc2lvbk9wdGlvbnNcbiAgICApO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcbiAgICAgIGNvbnRleHQucmVxLFxuICAgICAgXCJzZXNzaW9uXCIsXG4gICAgICBnZXRQcm9wZXJ0eURlc2NyaXB0b3JGb3JSZXFTZXNzaW9uKHNlc3Npb24pXG4gICAgKTtcbiAgICByZXR1cm4gaGFuZGxlcihjb250ZXh0KTtcbiAgfTtcbn1cbmV4cG9ydCB7XG4gIHdpdGhJcm9uU2Vzc2lvbkFwaVJvdXRlLFxuICB3aXRoSXJvblNlc3Npb25Tc3Jcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5tanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./node_modules/iron-session/next/dist/index.mjs\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/sign-in.ts"));
module.exports = __webpack_exports__;

})();