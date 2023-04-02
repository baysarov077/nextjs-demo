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
exports.id = "pages/users/[id]";
exports.ids = ["pages/users/[id]"];
exports.modules = {

/***/ "./styles/user.module.scss":
/*!*********************************!*\
  !*** ./styles/user.module.scss ***!
  \*********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"user\": \"user_user__Jd4_h\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvdXNlci5tb2R1bGUuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3N0eWxlcy91c2VyLm1vZHVsZS5zY3NzP2Q3MjYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwidXNlclwiOiBcInVzZXJfdXNlcl9fSmQ0X2hcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/user.module.scss\n");

/***/ }),

/***/ "./pages/users/[id].js":
/*!*****************************!*\
  !*** ./pages/users/[id].js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ User),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_user_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/user.module.scss */ \"./styles/user.module.scss\");\n/* harmony import */ var _styles_user_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_user_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction User({ user  }) {\n    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_user_module_scss__WEBPACK_IMPORTED_MODULE_2___default().user),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Пользователь c id \",\n                    query.id\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/macbook/Desktop/next/pages/users/[id].js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Имя пользователя: \",\n                    user.name\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/macbook/Desktop/next/pages/users/[id].js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macbook/Desktop/next/pages/users/[id].js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\nasync function getServerSideProps({ params  }) {\n    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);\n    const user = await response.json();\n    return {\n        props: {\n            user\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF1QztBQUNXO0FBRW5DLFNBQVNFLEtBQUssRUFBQ0MsS0FBSSxFQUFDLEVBQUU7SUFFbkMsTUFBTSxFQUFDQyxNQUFLLEVBQUMsR0FBR0osc0RBQVNBO0lBRXpCLHFCQUNFLDhEQUFDSztRQUFJQyxXQUFXTCxzRUFBVzs7MEJBQ3pCLDhEQUFDTTs7b0JBQUc7b0JBQW1CSCxNQUFNSSxFQUFFOzs7Ozs7OzBCQUMvQiw4REFBQ0M7O29CQUFFO29CQUFtQk4sS0FBS08sSUFBSTs7Ozs7Ozs7Ozs7OztBQUdyQyxDQUFDO0FBRU0sZUFBZUMsbUJBQW1CLEVBQUNDLE9BQU0sRUFBQyxFQUFFO0lBQ2pELE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxDQUFDLDJDQUEyQyxFQUFFRixPQUFPSixFQUFFLENBQUMsQ0FBQztJQUN0RixNQUFNTCxPQUFPLE1BQU1VLFNBQVNFLElBQUk7SUFDaEMsT0FBTztRQUNMQyxPQUFPO1lBQUNiO1FBQUk7SUFDZDtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy91c2Vycy9baWRdLmpzPzE3ODQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL3VzZXIubW9kdWxlLnNjc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXIoe3VzZXJ9KSB7XG5cbiAgY29uc3Qge3F1ZXJ5fSA9IHVzZVJvdXRlcigpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJ9PlxuICAgICAgPGgxPtCf0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCBjIGlkIHtxdWVyeS5pZH08L2gxPlxuICAgICAgPHA+0JjQvNGPINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjzoge3VzZXIubmFtZX08L3A+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7cGFyYW1zfSkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMvJHtwYXJhbXMuaWR9YClcbiAgY29uc3QgdXNlciA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7dXNlcn0sXG4gIH1cbn0iXSwibmFtZXMiOlsidXNlUm91dGVyIiwic3R5bGVzIiwiVXNlciIsInVzZXIiLCJxdWVyeSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiaWQiLCJwIiwibmFtZSIsImdldFNlcnZlclNpZGVQcm9wcyIsInBhcmFtcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/users/[id].js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/users/[id].js"));
module.exports = __webpack_exports__;

})();