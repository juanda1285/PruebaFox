"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_font_google_target_css_path_pages_index_js_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"pages\\\\index.js\",\"import\":\"Inter\",\"arguments\":[{\"subsets\":[\"latin\"]}],\"variableName\":\"inter\"} */ \"./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"pages\\\\\\\\index.js\\\",\\\"import\\\":\\\"Inter\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"]}],\\\"variableName\\\":\\\"inter\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_pages_index_js_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_pages_index_js_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_AddTaskForm_AddTaskForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/AddTaskForm/AddTaskForm */ \"./pages/components/AddTaskForm/AddTaskForm.js\");\n/* harmony import */ var _components_TaskCard_TaskCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/TaskCard/TaskCard */ \"./pages/components/TaskCard/TaskCard.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [tasks, setTasks] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const addTask = (newTask)=>{\n        setTasks([\n            ...tasks,\n            {\n                ...newTask,\n                id: Date.now()\n            }\n        ]);\n    };\n    const editTask = (taskId, newTask, newDescription)=>{\n        const updatedTasks = tasks.map((task)=>task.id === taskId ? {\n                ...task,\n                task: newTask,\n                description: newDescription\n            } : task);\n        setTasks(updatedTasks);\n    };\n    const deleteTask = (taskId)=>{\n        const updatedTasks = tasks.filter((task)=>task.id !== taskId);\n        setTasks(updatedTasks);\n    };\n    const completeTask = (taskId)=>{\n        setTasks((prevTasks)=>prevTasks.map((task)=>task.id === taskId ? {\n                    ...task,\n                    status: task.status === \"Terminado\" ? \"Sin terminar\" : \"Terminado\"\n                } : task));\n    };\n    const TerminadoTasks = tasks.filter((task)=>task.status === \"Terminado\");\n    const remainingTasks = tasks.filter((task)=>task.status !== \"Terminado\");\n    const columnStyle = {\n        flex: 1,\n        margin: \"0 10px\"\n    };\n    const containerStyle = {\n        display: \"flex\",\n        justifyContent: \"space-around\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Prueba Fox\\\\task-list\\\\pages\\\\index.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Prueba Fox\\\\task-list\\\\pages\\\\index.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Prueba Fox\\\\task-list\\\\pages\\\\index.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Prueba Fox\\\\task-list\\\\pages\\\\index.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Prueba Fox\\\\task-list\\\\pages\\\\index.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"\".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().main), \" \").concat((next_font_google_target_css_path_pages_index_js_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_6___default().className)),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: containerStyle,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: columnStyle,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    children: \"Lista de Tareas\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Prueba Fox\\\\task-list\\\\pages\\\\index.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AddTaskForm_AddTaskForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    addTask: addTask\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Prueba Fox\\\\task-list\\\\pages\\\\index.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Prueba Fox\\\\task-list\\\\pages\\\\index.js\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: columnStyle,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: \"Tareas Pendientes\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Prueba Fox\\\\task-list\\\\pages\\\\index.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, this),\n                                remainingTasks.map((task)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TaskCard_TaskCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        task: task,\n                                        editTask: editTask,\n                                        deleteTask: deleteTask,\n                                        completeTask: completeTask\n                                    }, task.id, false, {\n                                        fileName: \"D:\\\\Prueba Fox\\\\task-list\\\\pages\\\\index.js\",\n                                        lineNumber: 68,\n                                        columnNumber: 15\n                                    }, this))\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Prueba Fox\\\\task-list\\\\pages\\\\index.js\",\n                            lineNumber: 65,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: columnStyle,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: \"Tareas Completadas\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Prueba Fox\\\\task-list\\\\pages\\\\index.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 11\n                                }, this),\n                                TerminadoTasks.map((task)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TaskCard_TaskCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        task: task,\n                                        editTask: editTask,\n                                        deleteTask: deleteTask,\n                                        completeTask: completeTask\n                                    }, task.id, false, {\n                                        fileName: \"D:\\\\Prueba Fox\\\\task-list\\\\pages\\\\index.js\",\n                                        lineNumber: 80,\n                                        columnNumber: 13\n                                    }, this))\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Prueba Fox\\\\task-list\\\\pages\\\\index.js\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Prueba Fox\\\\task-list\\\\pages\\\\index.js\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Prueba Fox\\\\task-list\\\\pages\\\\index.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"+34uIVDBalDkucWnJ7Aj1Xxb0MA=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgSW50ZXIgfSBmcm9tIFwibmV4dC9mb250L2dvb2dsZVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiQC9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBZGRUYXNrRm9ybSBmcm9tIFwiLi9jb21wb25lbnRzL0FkZFRhc2tGb3JtL0FkZFRhc2tGb3JtXCI7XG5pbXBvcnQgVGFza0NhcmQgZnJvbSBcIi4vY29tcG9uZW50cy9UYXNrQ2FyZC9UYXNrQ2FyZFwiO1xuXG5jb25zdCBpbnRlciA9IEludGVyKHsgc3Vic2V0czogW1wibGF0aW5cIl0gfSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFt0YXNrcywgc2V0VGFza3NdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IGFkZFRhc2sgPSAobmV3VGFzaykgPT4ge1xuICAgIHNldFRhc2tzKFsuLi50YXNrcywgeyAuLi5uZXdUYXNrLCBpZDogRGF0ZS5ub3coKSB9XSk7XG4gIH07XG5cbiAgY29uc3QgZWRpdFRhc2sgPSAodGFza0lkLCBuZXdUYXNrLCBuZXdEZXNjcmlwdGlvbikgPT4ge1xuICAgIGNvbnN0IHVwZGF0ZWRUYXNrcyA9IHRhc2tzLm1hcCgodGFzaykgPT5cbiAgICAgIHRhc2suaWQgPT09IHRhc2tJZCA/IHsgLi4udGFzaywgdGFzazogbmV3VGFzaywgZGVzY3JpcHRpb246IG5ld0Rlc2NyaXB0aW9uIH0gOiB0YXNrXG4gICAgKTtcbiAgICBzZXRUYXNrcyh1cGRhdGVkVGFza3MpO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVRhc2sgPSAodGFza0lkKSA9PiB7XG4gICAgY29uc3QgdXBkYXRlZFRhc2tzID0gdGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmlkICE9PSB0YXNrSWQpO1xuICAgIHNldFRhc2tzKHVwZGF0ZWRUYXNrcyk7XG4gIH07XG5cbiAgY29uc3QgY29tcGxldGVUYXNrID0gKHRhc2tJZCkgPT4ge1xuICAgIHNldFRhc2tzKChwcmV2VGFza3MpID0+XG4gICAgICBwcmV2VGFza3MubWFwKCh0YXNrKSA9PlxuICAgICAgICB0YXNrLmlkID09PSB0YXNrSWQgPyB7IC4uLnRhc2ssIHN0YXR1czogdGFzay5zdGF0dXMgPT09ICdUZXJtaW5hZG8nID8gJ1NpbiB0ZXJtaW5hcicgOiAnVGVybWluYWRvJyB9IDogdGFza1xuICAgICAgKVxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgVGVybWluYWRvVGFza3MgPSB0YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suc3RhdHVzID09PSAnVGVybWluYWRvJyk7XG4gIGNvbnN0IHJlbWFpbmluZ1Rhc2tzID0gdGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLnN0YXR1cyAhPT0gJ1Rlcm1pbmFkbycpO1xuXG4gIGNvbnN0IGNvbHVtblN0eWxlID0ge1xuICAgIGZsZXg6IDEsXG4gICAgbWFyZ2luOiAnMCAxMHB4JyxcbiAgfTtcblxuICBjb25zdCBjb250YWluZXJTdHlsZSA9IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1hcm91bmQnLFxuICB9O1xuXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17YCR7c3R5bGVzLm1haW59ICR7aW50ZXIuY2xhc3NOYW1lfWB9PlxuICAgICAgICA8ZGl2IHN0eWxlPXtjb250YWluZXJTdHlsZX0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17Y29sdW1uU3R5bGV9PlxuICAgICAgICAgICAgPGgxPkxpc3RhIGRlIFRhcmVhczwvaDE+XG4gICAgICAgICAgICA8QWRkVGFza0Zvcm0gYWRkVGFzaz17YWRkVGFza30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17Y29sdW1uU3R5bGV9PlxuICAgICAgICAgICAgPGgyPlRhcmVhcyBQZW5kaWVudGVzPC9oMj5cbiAgICAgICAgICAgIHtyZW1haW5pbmdUYXNrcy5tYXAoKHRhc2spID0+IChcbiAgICAgICAgICAgICAgPFRhc2tDYXJkXG4gICAgICAgICAgICAgICAga2V5PXt0YXNrLmlkfVxuICAgICAgICAgICAgICAgIHRhc2s9e3Rhc2t9XG4gICAgICAgICAgICAgICAgZWRpdFRhc2s9e2VkaXRUYXNrfVxuICAgICAgICAgICAgICAgIGRlbGV0ZVRhc2s9e2RlbGV0ZVRhc2t9XG4gICAgICAgICAgICAgICAgY29tcGxldGVUYXNrPXtjb21wbGV0ZVRhc2t9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXtjb2x1bW5TdHlsZX0+XG4gICAgICAgICAgPGgyPlRhcmVhcyBDb21wbGV0YWRhczwvaDI+XG4gICAgICAgICAge1Rlcm1pbmFkb1Rhc2tzLm1hcCgodGFzaykgPT4gKFxuICAgICAgICAgICAgPFRhc2tDYXJkXG4gICAgICAgICAgICAgIGtleT17dGFzay5pZH1cbiAgICAgICAgICAgICAgdGFzaz17dGFza31cbiAgICAgICAgICAgICAgZWRpdFRhc2s9e2VkaXRUYXNrfVxuICAgICAgICAgICAgICBkZWxldGVUYXNrPXtkZWxldGVUYXNrfVxuICAgICAgICAgICAgICBjb21wbGV0ZVRhc2s9e2NvbXBsZXRlVGFza31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApO1xuXG59XG4iXSwibmFtZXMiOlsiaW50ZXIiLCJIZWFkIiwic3R5bGVzIiwidXNlU3RhdGUiLCJBZGRUYXNrRm9ybSIsIlRhc2tDYXJkIiwiSG9tZSIsInRhc2tzIiwic2V0VGFza3MiLCJhZGRUYXNrIiwibmV3VGFzayIsImlkIiwiRGF0ZSIsIm5vdyIsImVkaXRUYXNrIiwidGFza0lkIiwibmV3RGVzY3JpcHRpb24iLCJ1cGRhdGVkVGFza3MiLCJtYXAiLCJ0YXNrIiwiZGVzY3JpcHRpb24iLCJkZWxldGVUYXNrIiwiZmlsdGVyIiwiY29tcGxldGVUYXNrIiwicHJldlRhc2tzIiwic3RhdHVzIiwiVGVybWluYWRvVGFza3MiLCJyZW1haW5pbmdUYXNrcyIsImNvbHVtblN0eWxlIiwiZmxleCIsIm1hcmdpbiIsImNvbnRhaW5lclN0eWxlIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJzdHlsZSIsImgxIiwiaDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});