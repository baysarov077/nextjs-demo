"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Users",{

/***/ "./pages/Users.jsx":
/*!*************************!*\
  !*** ./pages/Users.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_A__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/A */ \"./components/A.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Users = ()=>{\n    _s();\n    const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([\n        {\n            id: 1,\n            name: \"Petya\"\n        },\n        {\n            id: 2,\n            name: \"Oleg\"\n        }\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(async ()=>{\n        const response = await fetch(\"https://jsonplaceholder.typicode.com/users\");\n        const data = await response.json();\n        setUsers(data);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_A__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                text: \"Главная\",\n                href: \"/\"\n            }, void 0, false, {\n                fileName: \"/Users/macbook/Desktop/next/pages/Users.jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Пользователи\"\n            }, void 0, false, {\n                fileName: \"/Users/macbook/Desktop/next/pages/Users.jsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: users.map((item)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/users/\".concat(item.id),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: item.name\n                            }, void 0, false, {\n                                fileName: \"/Users/macbook/Desktop/next/pages/Users.jsx\",\n                                lineNumber: 31,\n                                columnNumber: 67\n                            }, undefined)\n                        }, item.id, false, {\n                            fileName: \"/Users/macbook/Desktop/next/pages/Users.jsx\",\n                            lineNumber: 31,\n                            columnNumber: 20\n                        }, undefined);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/macbook/Desktop/next/pages/Users.jsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/macbook/Desktop/next/pages/Users.jsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macbook/Desktop/next/pages/Users.jsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Users, \"foTG1pjQsO/QzusmCegFo4Bt5Oc=\");\n_c = Users;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Users);\nvar _c;\n$RefreshReg$(_c, \"Users\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Vc2Vycy5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNlO0FBQ1o7QUFFaEMsTUFBTUksUUFBUSxJQUFNOztJQUVsQixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0osK0NBQVFBLENBQUM7UUFDakM7WUFDRUssSUFBSTtZQUNKQyxNQUFNO1FBQ1I7UUFDQTtZQUNFRCxJQUFJO1lBQ0pDLE1BQU07UUFDUjtLQUNEO0lBRURQLGdEQUFTQSxDQUFDLFVBQVk7UUFDcEIsTUFBTVEsV0FBVyxNQUFNQyxNQUFNO1FBQzdCLE1BQU1DLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtRQUNoQ04sU0FBU0s7SUFDWCxHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0U7OzBCQUNDLDhEQUFDVixxREFBQ0E7Z0JBQUNXLE1BQU07Z0JBQVdDLE1BQU07Ozs7OzswQkFDMUIsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNIOzBCQUNDLDRFQUFDSTs4QkFDRVosTUFBTWEsR0FBRyxDQUFDQyxDQUFBQSxPQUFRO3dCQUNqQixxQkFBTyw4REFBQ25CLGtEQUFJQTs0QkFBZWUsTUFBTSxVQUFrQixPQUFSSSxLQUFLWixFQUFFO3NDQUFJLDRFQUFDYTswQ0FBSUQsS0FBS1gsSUFBSTs7Ozs7OzJCQUFsRFcsS0FBS1osRUFBRTs7Ozs7b0JBQzNCOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtWO0dBaENNSDtLQUFBQTs7QUFrQ04sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvVXNlcnMuanN4PzBhYTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEEgZnJvbSBcIi4uL2NvbXBvbmVudHMvQVwiO1xuXG5jb25zdCBVc2VycyA9ICgpID0+IHtcblxuICBjb25zdCBbdXNlcnMsIHNldFVzZXJzXSA9IHVzZVN0YXRlKFtcbiAgICB7XG4gICAgICBpZDogMSxcbiAgICAgIG5hbWU6ICdQZXR5YScsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMixcbiAgICAgIG5hbWU6ICdPbGVnJyxcbiAgICB9XG4gIF0pXG5cbiAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMnKVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICBzZXRVc2VycyhkYXRhKVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8QSB0ZXh0PXsn0JPQu9Cw0LLQvdCw0Y8nfSBocmVmPXsnLyd9Lz5cbiAgICAgIDxoMT7Qn9C+0LvRjNC30L7QstCw0YLQtdC70Lg8L2gxPlxuICAgICAgPGRpdj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHt1c2Vycy5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPExpbmsga2V5PXtpdGVtLmlkfSBocmVmPXtgL3VzZXJzLyR7aXRlbS5pZH1gfT48bGk+e2l0ZW0ubmFtZX08L2xpPjwvTGluaz5cbiAgICAgICAgICB9KX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlcnM7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpe1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7fVxuICB9XG59Il0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkEiLCJVc2VycyIsInVzZXJzIiwic2V0VXNlcnMiLCJpZCIsIm5hbWUiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJkaXYiLCJ0ZXh0IiwiaHJlZiIsImgxIiwidWwiLCJtYXAiLCJpdGVtIiwibGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Users.jsx\n"));

/***/ })

});