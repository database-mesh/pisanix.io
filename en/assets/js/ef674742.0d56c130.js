"use strict";(self.webpackChunkpisanix=self.webpackChunkpisanix||[]).push([[5309],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,y=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(y,o(o({ref:t},p),{},{components:r})):n.createElement(y,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9233:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:5},o="\u53ef\u89c2\u6d4b\u6027",l={unversionedId:"Features/observability",id:"Features/observability",title:"\u53ef\u89c2\u6d4b\u6027",description:"Pisanix \u76ee\u524d\u5728 Pisa-Proxy \u5904\u7406 SQL \u547d\u4ee4\u7684\u65f6\u5019\u91c7\u96c6\u76f8\u5173\u6307\u6807\uff0c\u5e76\u4ee5 /metrics \u8def\u5f84\u8fdb\u884c\u66b4\u9732\u3002",source:"@site/docs/Features/observability.md",sourceDirName:"Features",slug:"/Features/observability",permalink:"/en/docs/Features/observability",tags:[],version:"current",lastUpdatedBy:"liyao",lastUpdatedAt:1662215562,formattedLastUpdatedAt:"9/3/2022",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u65ad\u8def\u548c\u5e76\u53d1\u63a7\u5236",permalink:"/en/docs/Features/sql-circuit-breaker-and-concurrency-control"},next:{title:"\u6570\u636e\u5206\u7247",permalink:"/en/docs/Features/sharding"}},s={},c=[{value:"\u5df2\u652f\u6301\u6307\u6807",id:"\u5df2\u652f\u6301\u6307\u6807",level:2}],p={toc:c};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u53ef\u89c2\u6d4b\u6027"},"\u53ef\u89c2\u6d4b\u6027"),(0,a.kt)("p",null,"Pisanix \u76ee\u524d\u5728 Pisa-Proxy \u5904\u7406 SQL \u547d\u4ee4\u7684\u65f6\u5019\u91c7\u96c6\u76f8\u5173\u6307\u6807\uff0c\u5e76\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"p"},"/metrics")," \u8def\u5f84\u8fdb\u884c\u66b4\u9732\u3002"),(0,a.kt)("h2",{id:"\u5df2\u652f\u6301\u6307\u6807"},"\u5df2\u652f\u6301\u6307\u6807"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"SQL_PROCESSED_TOTAL: \u7edf\u8ba1\u6240\u6709\u6267\u884c\u7684 SQL \u6570\u91cf"),(0,a.kt)("li",{parentName:"ul"},"SQL_PROCESSED_DURATION: \u7edf\u8ba1\u6240\u6709 SQL \u7684\u6267\u884c\u65f6\u95f4"),(0,a.kt)("li",{parentName:"ul"},"SQL_UNDER_PROCESSING: \u8bb0\u5f55\u5f53\u524d\u6b63\u5728\u6267\u884c\u7684 SQL \u6570\u91cf")),(0,a.kt)("p",null,"\u6d4b\u8bd5\u6548\u679c\u5982\u4e0b\u56fe\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"grafana",src:r(151).Z,width:"1756",height:"1001"})),(0,a.kt)("p",null,"\u4e0b\u4e00\u6b65\u5c06\u652f\u6301\u66f4\u591a\u6807\u7b7e\u548c\u6307\u6807\uff0c\u5982 SQL \u8bed\u53e5\u7c7b\u578b\u3001\u5ef6\u8fdf\u3001\u9519\u8bef\u7387\u3001TopK\u3001\u8fd0\u884c\u65f6\u8d44\u6e90\u7b49\u3002"))}u.isMDXComponent=!0},151:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/grafana-511dce0c4f3a3f1d9453416592e2e07a.jpg"}}]);