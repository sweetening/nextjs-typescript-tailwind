(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[753],{9555:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/recent-projects",function(){return r(3073)}])},201:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(5893),a=r(1664);function s(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{children:(0,n.jsxs)("nav",{className:"bg-none",children:[(0,n.jsx)("div",{className:"w-full mx-auto px-8",children:(0,n.jsxs)("div",{className:"flex items-center justify-between h-16",children:[(0,n.jsxs)("div",{className:"w-full justify-between flex items-center",children:[(0,n.jsx)(a.default,{href:"/",children:(0,n.jsx)("a",{className:"flex-shrink-0",children:(0,n.jsxs)("svg",{className:"text-black-800 w-8 mr-2 fill-current cursor-pointer hover:text-purple-500",xmlns:"http://www.w3.org/2000/svg","data-name":"Capa 1",viewBox:"0 0 16.16 12.57",children:[(0,n.jsx)("defs",{}),(0,n.jsx)("path",{d:"M14.02 4.77v7.8H9.33V8.8h-2.5v3.77H2.14v-7.8h11.88z"}),(0,n.jsx)("path",{d:"M16.16 5.82H0L8.08 0l8.08 5.82z"})]})})}),(0,n.jsx)("div",{className:"hidden md:block",children:(0,n.jsxs)("div",{className:"ml-10 flex items-baseline space-x-4",children:[(0,n.jsx)("a",{className:"text-lg uppercase mx-3 text-black-800 tracking-wide cursor-pointer hover:text-purple-500",href:"/about-me",children:"About Me"}),(0,n.jsx)("a",{className:"text-lg uppercase mx-3 text-black-800 tracking-wide cursor-pointer hover:text-purple-500",href:"/recent-projects",children:"Recent Projects"}),(0,n.jsx)("a",{className:"text-lg uppercase mx-3 text-black-800 tracking-wide cursor-pointer hover:text-purple-500",href:"/contact",children:"Contact"})]})})]}),(0,n.jsx)("div",{className:"block",children:(0,n.jsx)("div",{className:"ml-4 flex items-center sm:ml-6"})})]})}),(0,n.jsx)("div",{className:"md:hidden",children:(0,n.jsxs)("div",{className:"px-2 pt-2 pb-3 space-y-1 sm:px-3",children:[(0,n.jsx)("a",{className:"text-lg uppercase mx-3 text-black-800 tracking-wide cursor-pointer hover:text-purple-500",href:"/about-me",children:"About Me"}),(0,n.jsx)("a",{className:"text-lg uppercase mx-3 text-black-800 tracking-wide cursor-pointer hover:text-purple-500",href:"/recent-projects",children:"Recent Projects"}),(0,n.jsx)("a",{className:"text-lg uppercase mx-3 text-black-800 tracking-wide cursor-pointer hover:text-purple-500",href:"/contact",children:"Contact"})]})})]})})})}},8418:function(e,t,r){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,s=void 0;try{for(var l,c=e[Symbol.iterator]();!(n=(l=c.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(i){a=!0,s=i}finally{try{n||null==c.return||c.return()}finally{if(a)throw s}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var a,s=(a=r(7294))&&a.__esModule?a:{default:a},l=r(6273),c=r(387),i=r(7190);var o={};function d(e,t,r,n){if(e&&l.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;o[t+"%"+r+(a?"%"+a:"")]=!0}}var u=function(e){var t,r=!1!==e.prefetch,a=c.useRouter(),u=s.default.useMemo((function(){var t=n(l.resolveHref(a,e.href,!0),2),r=t[0],s=t[1];return{href:r,as:e.as?l.resolveHref(a,e.as):s||r}}),[a,e.href,e.as]),f=u.href,h=u.as,x=e.children,m=e.replace,p=e.shallow,v=e.scroll,g=e.locale;"string"===typeof x&&(x=s.default.createElement("a",null,x));var w=(t=s.default.Children.only(x))&&"object"===typeof t&&t.ref,j=n(i.useIntersection({rootMargin:"200px"}),2),b=j[0],y=j[1],k=s.default.useCallback((function(e){b(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,b]);s.default.useEffect((function(){var e=y&&r&&l.isLocalURL(f),t="undefined"!==typeof g?g:a&&a.locale,n=o[f+"%"+h+(t?"%"+t:"")];e&&!n&&d(a,f,h,{locale:t})}),[h,f,y,g,r,a]);var N={ref:k,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,s,c,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(r))&&(e.preventDefault(),null==c&&n.indexOf("#")>=0&&(c=!1),t[a?"replace":"push"](r,n,{shallow:s,locale:i,scroll:c}))}(e,a,f,h,m,p,v,g)},onMouseEnter:function(e){l.isLocalURL(f)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),d(a,f,h,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var M="undefined"!==typeof g?g:a&&a.locale,R=a&&a.isLocaleDomain&&l.getDomainLocale(h,M,a&&a.locales,a&&a.domainLocales);N.href=R||l.addBasePath(l.addLocale(h,M,a&&a.defaultLocale))}return s.default.cloneElement(t,N)};t.default=u},7190:function(e,t,r){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,s=void 0;try{for(var l,c=e[Symbol.iterator]();!(n=(l=c.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(i){a=!0,s=i}finally{try{n||null==c.return||c.return()}finally{if(a)throw s}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!l,i=a.useRef(),o=n(a.useState(!1),2),d=o[0],u=o[1],f=a.useCallback((function(e){i.current&&(i.current(),i.current=void 0),r||d||e&&e.tagName&&(i.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=c.get(t);if(r)return r;var n=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(t,r={id:t,observer:a,elements:n}),r}(r),a=n.id,s=n.observer,l=n.elements;return l.set(e,t),s.observe(e),function(){l.delete(e),s.unobserve(e),0===l.size&&(s.disconnect(),c.delete(a))}}(e,(function(e){return e&&u(e)}),{rootMargin:t}))}),[r,t,d]);return a.useEffect((function(){if(!l&&!d){var e=s.requestIdleCallback((function(){return u(!0)}));return function(){return s.cancelIdleCallback(e)}}}),[d]),[f,d]};var a=r(7294),s=r(9311),l="undefined"!==typeof IntersectionObserver;var c=new Map},3073:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return i}});var n=r(5893),a=r(9008),s=r(1664),l=r(201);function c(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"w-full p-12",children:(0,n.jsx)("div",{className:"header flex items-end justify-center mb-12",children:(0,n.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12",children:[(0,n.jsx)("div",{className:"overflow-hidden shadow-lg rounded-lg h-90 w-90 md:w-80 cursor-pointer m-auto",children:(0,n.jsxs)("a",{href:"https://fantastax.herokuapp.com/",className:"w-full block h-full",children:[(0,n.jsx)("img",{alt:"Fantastax",src:"/images/fantastax.png",className:"max-h-90 w-full object-cover"}),(0,n.jsxs)("div",{className:"bg-white dark:bg-gray-800 w-full p-4",children:[(0,n.jsx)("p",{className:"text-purple-800 text-md tracking-widest font-medium",children:"React"}),(0,n.jsx)("p",{className:"text-gray-800 font-bold dark:text-white text-xl font-medium mb-2",children:"Fantastax"}),(0,n.jsxs)("p",{className:"text-gray-400 dark:text-gray-300 font-light text-sm",children:["Fantastax is a ",(0,n.jsx)("b",{children:"responsive React app"})," built with"," ",(0,n.jsx)("b",{children:"Styled Components"})," and ",(0,n.jsx)("b",{children:"CSS Modules"}),'. Part of a "Frontend Faceoff" for Spreadshirt\'s April Hacking Days, in which I compared different styling methods.']})]})]})}),(0,n.jsx)("div",{className:"overflow-hidden shadow-lg rounded-lg h-90 w-90 md:w-80 cursor-pointer m-auto",children:(0,n.jsxs)("a",{href:"http://www.welcome-mentors.com/",className:"w-full block h-full",children:[(0,n.jsx)("img",{alt:"Welcome Mentors",src:"/images/welcome.png",className:"max-h-90 w-full object-cover"}),(0,n.jsxs)("div",{className:"bg-white dark:bg-gray-800 w-full p-4",children:[(0,n.jsx)("p",{className:"text-purple-800 text-md tracking-widest font-medium",children:"Ruby on Rails"}),(0,n.jsx)("p",{className:"text-gray-800 font-bold dark:text-white text-xl font-medium mb-2",children:"Welcome"}),(0,n.jsxs)("p",{className:"text-gray-400 dark:text-gray-300 font-light text-sm",children:["Welcome is a ",(0,n.jsx)("b",{children:"Rails web app"})," designed to help working professionals relocating to Berlin by providing useful articles, resources, and connections with mentors that have already made the move."]})]})]})}),(0,n.jsx)("div",{className:"overflow-hidden shadow-lg rounded-lg h-90 w-90 md:w-80 cursor-pointer m-auto",children:(0,n.jsxs)("a",{href:"https://bike-match-sweetening.herokuapp.com/",className:"w-full block h-full",children:[(0,n.jsx)("img",{alt:"Bike Match",src:"/images/bikematch.png",className:"max-h-90 w-full object-cover"}),(0,n.jsxs)("div",{className:"bg-white dark:bg-gray-800 w-full p-4",children:[(0,n.jsx)("p",{className:"text-purple-800 text-md tracking-widest font-medium",children:"Ruby on Rails"}),(0,n.jsx)("p",{className:"text-gray-800 font-bold dark:text-white text-xl font-medium mb-2",children:"Bike Match"}),(0,n.jsxs)("p",{className:"text-gray-400 dark:text-gray-300 font-light text-sm",children:["Bike Match is a ",(0,n.jsx)("b",{children:"Ruby on Rails"})," AirBnB clone built in one week which pairs cyclists in Berlin with bikes for rent in their preferred size and style."]})]})]})})]})})})})}function i(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.default,{children:(0,n.jsx)("title",{children:"Recent Projects"})}),(0,n.jsx)(l.Z,{}),(0,n.jsxs)("div",{className:"container mx-auto mt-12 mx-8",children:[(0,n.jsxs)("section",{className:"flex flex-col items-center mt-24",children:[(0,n.jsx)("h1",{className:"text-2xl font-extrabold tracking-tighter my-4 mx-0",children:"Here's what I've been working on"}),(0,n.jsx)(c,{})]}),(0,n.jsx)("h2",{"mt-8":!0,children:(0,n.jsx)(s.default,{href:"/about-me",children:(0,n.jsx)("a",{className:"mx-8 text-purple-900 font-extrabold tracking-tight pb-8",children:"^ Back to top"})})})]})]})}},1664:function(e,t,r){e.exports=r(8418)}},function(e){e.O(0,[774,888,179],(function(){return t=9555,e(e.s=t);var t}));var t=e.O();_N_E=t}]);