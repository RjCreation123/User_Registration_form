"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/signin/page",{

/***/ "(app-pages-browser)/./src/app/signin/page.js":
/*!********************************!*\
  !*** ./src/app/signin/page.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Signin; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Signin_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Signin.module.css */ \"(app-pages-browser)/./src/styles/Signin.module.css\");\n/* harmony import */ var _styles_Signin_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Signin_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Signin() {\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [stayLoggedIn, setStayLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        setLoading(true);\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://localhost:8000/signin\", {\n                email,\n                password\n            });\n            const { token, userName } = response.data;\n            if (response.status === 200) {\n                if (stayLoggedIn) {\n                    localStorage.setItem(\"auth\", token);\n                    localStorage.setItem(\"userName\", userName);\n                } else {\n                    sessionStorage.setItem(\"auth\", token);\n                    sessionStorage.setItem(\"userName\", userName);\n                }\n                window.alert(\"Sign-in successful! Welcome, \".concat(userName));\n                setEmail(\"\");\n                setPassword(\"\");\n            }\n        } catch (error) {\n            console.error(\"Sign-in error:\", error);\n            if (error.response && error.response.status === 401) {\n                setMessage(\"Invalid email or password\");\n            } else {\n                setMessage(\"Sign-in failed. Please try again.\");\n            }\n        } finally{\n            setLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Signin_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_styles_Signin_module_css__WEBPACK_IMPORTED_MODULE_2___default().title),\n                children: \"Signin\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\RAHUL\\\\Desktop\\\\User_Registration_form\\\\client\\\\src\\\\app\\\\signin\\\\page.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Signin_module_css__WEBPACK_IMPORTED_MODULE_2___default().formGroup),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"email\",\n                                className: (_styles_Signin_module_css__WEBPACK_IMPORTED_MODULE_2___default().label),\n                                children: \"Email:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\RAHUL\\\\Desktop\\\\User_Registration_form\\\\client\\\\src\\\\app\\\\signin\\\\page.js\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"email\",\n                                id: \"email\",\n                                className: (_styles_Signin_module_css__WEBPACK_IMPORTED_MODULE_2___default().input),\n                                value: email,\n                                onChange: (e)=>setEmail(e.target.value),\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\RAHUL\\\\Desktop\\\\User_Registration_form\\\\client\\\\src\\\\app\\\\signin\\\\page.js\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\RAHUL\\\\Desktop\\\\User_Registration_form\\\\client\\\\src\\\\app\\\\signin\\\\page.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Signin_module_css__WEBPACK_IMPORTED_MODULE_2___default().formGroup),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"password\",\n                                className: (_styles_Signin_module_css__WEBPACK_IMPORTED_MODULE_2___default().label),\n                                children: \"Password:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\RAHUL\\\\Desktop\\\\User_Registration_form\\\\client\\\\src\\\\app\\\\signin\\\\page.js\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"password\",\n                                id: \"password\",\n                                className: (_styles_Signin_module_css__WEBPACK_IMPORTED_MODULE_2___default().input),\n                                value: password,\n                                onChange: (e)=>setPassword(e.target.value),\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\RAHUL\\\\Desktop\\\\User_Registration_form\\\\client\\\\src\\\\app\\\\signin\\\\page.js\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\RAHUL\\\\Desktop\\\\User_Registration_form\\\\client\\\\src\\\\app\\\\signin\\\\page.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Signin_module_css__WEBPACK_IMPORTED_MODULE_2___default().formGroup),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"checkbox\",\n                                    checked: stayLoggedIn,\n                                    onChange: ()=>setStayLoggedIn(!stayLoggedIn),\n                                    \"aria-label\": \"Stay logged in\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\RAHUL\\\\Desktop\\\\User_Registration_form\\\\client\\\\src\\\\app\\\\signin\\\\page.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 13\n                                }, this),\n                                \"Stay logged in\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\RAHUL\\\\Desktop\\\\User_Registration_form\\\\client\\\\src\\\\app\\\\signin\\\\page.js\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RAHUL\\\\Desktop\\\\User_Registration_form\\\\client\\\\src\\\\app\\\\signin\\\\page.js\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: (_styles_Signin_module_css__WEBPACK_IMPORTED_MODULE_2___default().button),\n                        disabled: loading,\n                        children: loading ? \"Signing In...\" : \"Sign In\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RAHUL\\\\Desktop\\\\User_Registration_form\\\\client\\\\src\\\\app\\\\signin\\\\page.js\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\RAHUL\\\\Desktop\\\\User_Registration_form\\\\client\\\\src\\\\app\\\\signin\\\\page.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            message && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_styles_Signin_module_css__WEBPACK_IMPORTED_MODULE_2___default().message),\n                children: message\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\RAHUL\\\\Desktop\\\\User_Registration_form\\\\client\\\\src\\\\app\\\\signin\\\\page.js\",\n                lineNumber: 91,\n                columnNumber: 19\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\RAHUL\\\\Desktop\\\\User_Registration_form\\\\client\\\\src\\\\app\\\\signin\\\\page.js\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n}\n_s(Signin, \"P1sutiuDn41OuXV46F3/Ufjh93E=\");\n_c = Signin;\nvar _c;\n$RefreshReg$(_c, \"Signin\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc2lnbmluL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRTBCO0FBQ087QUFDbUI7QUFFckMsU0FBU0c7O0lBQ3RCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNLLFVBQVVDLFlBQVksR0FBR04sK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDTyxTQUFTQyxXQUFXLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ1MsY0FBY0MsZ0JBQWdCLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ1csU0FBU0MsV0FBVyxHQUFHWiwrQ0FBUUEsQ0FBQztJQUV2QyxNQUFNYSxlQUFlLE9BQU9DO1FBQzFCQSxFQUFFQyxjQUFjO1FBQ2hCSCxXQUFXO1FBRVgsSUFBSTtZQUNGLE1BQU1JLFdBQVcsTUFBTWpCLDZDQUFLQSxDQUFDa0IsSUFBSSxDQUFDLGdDQUFnQztnQkFDaEVkO2dCQUNBRTtZQUNGO1lBRUEsTUFBTSxFQUFFYSxLQUFLLEVBQUVDLFFBQVEsRUFBRSxHQUFHSCxTQUFTSSxJQUFJO1lBRXpDLElBQUlKLFNBQVNLLE1BQU0sS0FBSyxLQUFLO2dCQUMzQixJQUFJWixjQUFjO29CQUNoQmEsYUFBYUMsT0FBTyxDQUFDLFFBQVFMO29CQUM3QkksYUFBYUMsT0FBTyxDQUFDLFlBQVlKO2dCQUNuQyxPQUFPO29CQUNMSyxlQUFlRCxPQUFPLENBQUMsUUFBUUw7b0JBQy9CTSxlQUFlRCxPQUFPLENBQUMsWUFBWUo7Z0JBQ3JDO2dCQUNBTSxPQUFPQyxLQUFLLENBQUMsZ0NBQXlDLE9BQVRQO2dCQUM3Q2YsU0FBUztnQkFDVEUsWUFBWTtZQUNkO1FBQ0YsRUFBRSxPQUFPcUIsT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsa0JBQWtCQTtZQUNoQyxJQUFJQSxNQUFNWCxRQUFRLElBQUlXLE1BQU1YLFFBQVEsQ0FBQ0ssTUFBTSxLQUFLLEtBQUs7Z0JBQ25EYixXQUFXO1lBQ2IsT0FBTztnQkFDTEEsV0FBVztZQUNiO1FBQ0YsU0FBVTtZQUNSSSxXQUFXO1FBQ2I7SUFDRjtJQUVBLHFCQUNFLDhEQUFDaUI7UUFBSUMsV0FBVzdCLDRFQUFnQjs7MEJBQzlCLDhEQUFDK0I7Z0JBQUdGLFdBQVc3Qix3RUFBWTswQkFBRTs7Ozs7OzBCQUM3Qiw4REFBQ2lDO2dCQUFLQyxVQUFVdEI7O2tDQUNkLDhEQUFDZ0I7d0JBQUlDLFdBQVc3Qiw0RUFBZ0I7OzBDQUM5Qiw4REFBQ29DO2dDQUFNQyxTQUFRO2dDQUFRUixXQUFXN0Isd0VBQVk7MENBQUU7Ozs7OzswQ0FDaEQsOERBQUNzQztnQ0FDQ0MsTUFBSztnQ0FDTEMsSUFBRztnQ0FDSFgsV0FBVzdCLHdFQUFZO2dDQUN2QnlDLE9BQU92QztnQ0FDUHdDLFVBQVUsQ0FBQzdCLElBQU1WLFNBQVNVLEVBQUU4QixNQUFNLENBQUNGLEtBQUs7Z0NBQ3hDRyxRQUFROzs7Ozs7Ozs7Ozs7a0NBR1osOERBQUNoQjt3QkFBSUMsV0FBVzdCLDRFQUFnQjs7MENBQzlCLDhEQUFDb0M7Z0NBQU1DLFNBQVE7Z0NBQVdSLFdBQVc3Qix3RUFBWTswQ0FBRTs7Ozs7OzBDQUNuRCw4REFBQ3NDO2dDQUNDQyxNQUFLO2dDQUNMQyxJQUFHO2dDQUNIWCxXQUFXN0Isd0VBQVk7Z0NBQ3ZCeUMsT0FBT3JDO2dDQUNQc0MsVUFBVSxDQUFDN0IsSUFBTVIsWUFBWVEsRUFBRThCLE1BQU0sQ0FBQ0YsS0FBSztnQ0FDM0NHLFFBQVE7Ozs7Ozs7Ozs7OztrQ0FHWiw4REFBQ2hCO3dCQUFJQyxXQUFXN0IsNEVBQWdCO2tDQUM5Qiw0RUFBQ29DOzs4Q0FDQyw4REFBQ0U7b0NBQ0NDLE1BQUs7b0NBQ0xNLFNBQVNyQztvQ0FDVGtDLFVBQVUsSUFBTWpDLGdCQUFnQixDQUFDRDtvQ0FDakNzQyxjQUFXOzs7Ozs7Z0NBQ1g7Ozs7Ozs7Ozs7OztrQ0FJTiw4REFBQ0M7d0JBQU9SLE1BQUs7d0JBQVNWLFdBQVc3Qix5RUFBYTt3QkFBRWdELFVBQVV0QztrQ0FDdkRBLFVBQVUsa0JBQWtCOzs7Ozs7Ozs7Ozs7WUFHaENKLHlCQUFXLDhEQUFDMkM7Z0JBQUVwQixXQUFXN0IsMEVBQWM7MEJBQUdNOzs7Ozs7Ozs7Ozs7QUFJakQ7R0F4RndCTDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3NpZ25pbi9wYWdlLmpzP2ZiMjEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL1NpZ25pbi5tb2R1bGUuY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25pbigpIHtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3N0YXlMb2dnZWRJbiwgc2V0U3RheUxvZ2dlZEluXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9zaWduaW5cIiwge1xyXG4gICAgICAgIGVtYWlsLFxyXG4gICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IHsgdG9rZW4sIHVzZXJOYW1lIH0gPSByZXNwb25zZS5kYXRhO1xyXG5cclxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgaWYgKHN0YXlMb2dnZWRJbikge1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhdXRoXCIsIHRva2VuKTtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlck5hbWVcIiwgdXNlck5hbWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwiYXV0aFwiLCB0b2tlbik7XHJcbiAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwidXNlck5hbWVcIiwgdXNlck5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aW5kb3cuYWxlcnQoYFNpZ24taW4gc3VjY2Vzc2Z1bCEgV2VsY29tZSwgJHt1c2VyTmFtZX1gKTtcclxuICAgICAgICBzZXRFbWFpbChcIlwiKTtcclxuICAgICAgICBzZXRQYXNzd29yZChcIlwiKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIlNpZ24taW4gZXJyb3I6XCIsIGVycm9yKTtcclxuICAgICAgaWYgKGVycm9yLnJlc3BvbnNlICYmIGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XHJcbiAgICAgICAgc2V0TWVzc2FnZShcIkludmFsaWQgZW1haWwgb3IgcGFzc3dvcmRcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0TWVzc2FnZShcIlNpZ24taW4gZmFpbGVkLiBQbGVhc2UgdHJ5IGFnYWluLlwiKTtcclxuICAgICAgfVxyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5TaWduaW48L2gxPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1Hcm91cH0+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCIgY2xhc3NOYW1lPXtzdHlsZXMubGFiZWx9PkVtYWlsOjwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxyXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1Hcm91cH0+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPXtzdHlsZXMubGFiZWx9PlBhc3N3b3JkOjwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxyXG4gICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1Hcm91cH0+XHJcbiAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgY2hlY2tlZD17c3RheUxvZ2dlZElufVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBzZXRTdGF5TG9nZ2VkSW4oIXN0YXlMb2dnZWRJbil9XHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlN0YXkgbG9nZ2VkIGluXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgU3RheSBsb2dnZWQgaW5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufSBkaXNhYmxlZD17bG9hZGluZ30+XHJcbiAgICAgICAgICB7bG9hZGluZyA/IFwiU2lnbmluZyBJbi4uLlwiIDogXCJTaWduIEluXCJ9XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAge21lc3NhZ2UgJiYgPHAgY2xhc3NOYW1lPXtzdHlsZXMubWVzc2FnZX0+e21lc3NhZ2V9PC9wPn1cclxuICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsInVzZVN0YXRlIiwic3R5bGVzIiwiU2lnbmluIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsInN0YXlMb2dnZWRJbiIsInNldFN0YXlMb2dnZWRJbiIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVzcG9uc2UiLCJwb3N0IiwidG9rZW4iLCJ1c2VyTmFtZSIsImRhdGEiLCJzdGF0dXMiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwic2Vzc2lvblN0b3JhZ2UiLCJ3aW5kb3ciLCJhbGVydCIsImVycm9yIiwiY29uc29sZSIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImgxIiwidGl0bGUiLCJmb3JtIiwib25TdWJtaXQiLCJmb3JtR3JvdXAiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJyZXF1aXJlZCIsImNoZWNrZWQiLCJhcmlhLWxhYmVsIiwiYnV0dG9uIiwiZGlzYWJsZWQiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/signin/page.js\n"));

/***/ })

});