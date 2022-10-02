"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7497:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: external "react-icons/ai"
const ai_namespaceObject = require("react-icons/ai");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/navbar.tsx




const Navbar = ()=>{
    const { 0: isMobile , 1: setIsMobile  } = (0,external_react_.useState)(false);
    const handleMobile = ()=>{
        setIsMobile(!isMobile);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "left-0 top-0 w-full z-10 ease-in duration-300",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "max-w-[1280px] m-auto flex justify-between items-center p-4",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            className: "flex font-3xl cursor-pointer hover:text-purple-500",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                    className: "text-black w-8 mr-2 fill-current hover:text-purple-500",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    "data-name": "Capa 1",
                                    viewBox: "0 0 16.16 12.57",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("defs", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M14.02 4.77v7.8H9.33V8.8h-2.5v3.77H2.14v-7.8h11.88z"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M16.16 5.82H0L8.08 0l8.08 5.82z"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: "font-bold text-3xl text-black",
                                    children: "Home"
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    className: "hidden sm:flex",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "p-4 text-black hover:text-purple-500",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/about-me",
                                children: "About Me"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "p-4 text-black hover:text-purple-500",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/recent-projects",
                                children: "Recent Projects"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "p-4 text-black hover:text-purple-500",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/contact",
                                children: "Contact"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    onClick: handleMobile,
                    className: "block sm:hidden z-20",
                    children: isMobile ? /*#__PURE__*/ jsx_runtime_.jsx(ai_namespaceObject.AiOutlineClose, {
                        size: 28,
                        className: "text-white",
                        "aria-label": "Close mobile menu"
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(ai_namespaceObject.AiOutlineMenu, {
                        size: 28,
                        className: "text-black hover:text-purple-500 cursor-pointer",
                        "aria-label": "Open mobile menu"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: isMobile ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen z-10 bg-black text-white text-center ease-in duration-300" : "hidden absolute top-0 left-[-100%] right-0 bottom-0 justify-center items-center w-full h-screen z-10 bg-black text-white text-center ease-in duration-300",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                onClick: handleMobile,
                                className: "p-4 text-3xl focus:text-purple-500",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/about-me",
                                    children: "About Me"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                onClick: handleMobile,
                                className: "p-4 text-3xl focus:text-purple-500",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/recent-projects",
                                    children: "Recent Projects"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                onClick: handleMobile,
                                className: "p-4 text-3xl focus:text-purple-500",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/contact",
                                    children: "Contact"
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const navbar = (Navbar);

;// CONCATENATED MODULE: ./pages/_app.tsx




function SweeteningApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    rel: "icon",
                    type: "image/png",
                    sizes: "16x16",
                    href: "images/favicon.png"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(navbar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    });
}
/* harmony default export */ const _app = (SweeteningApp);


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [598,676,664], () => (__webpack_exec__(7497)));
module.exports = __webpack_exports__;

})();