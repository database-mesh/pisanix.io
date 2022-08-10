"use strict";(self.webpackChunkpisanix=self.webpackChunkpisanix||[]).push([[8214],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=s(r),d=i,b=f["".concat(u,".").concat(d)]||f[d]||p[d]||o;return r?n.createElement(b,a(a({ref:t},l),{},{components:r})):n.createElement(b,a({ref:t},l))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3702:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],c={sidebar_position:5},u="\u53ef\u89c2\u6d4b\u6027",s={unversionedId:"Features/observability",id:"version-v0.1.1/Features/observability",title:"\u53ef\u89c2\u6d4b\u6027",description:"Pisanix \u76ee\u524d\u5728 Pisa-Proxy \u5904\u7406 SQL \u547d\u4ee4\u7684\u65f6\u5019\u91c7\u96c6\u76f8\u5173\u6307\u6807\uff0c\u5e76\u4ee5 /metrics \u8def\u5f84\u8fdb\u884c\u66b4\u9732\u3002",source:"@site/versioned_docs/version-v0.1.1/Features/observability.md",sourceDirName:"Features",slug:"/Features/observability",permalink:"/docs/v0.1.1/Features/observability",tags:[],version:"v0.1.1",lastUpdatedBy:"pierce",lastUpdatedAt:1656327041,formattedLastUpdatedAt:"2022/6/27",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u65ad\u8def\u548c\u5e76\u53d1\u63a7\u5236",permalink:"/docs/v0.1.1/Features/sql-circuit-breaker-and-concurrency-control"},next:{title:"\u5728 Kubernetes \u4e2d\u90e8\u7f72",permalink:"/docs/v0.1.1/UseCases/kubernetes"}},l={},p=[{value:"\u5df2\u652f\u6301\u6307\u6807",id:"\u5df2\u652f\u6301\u6307\u6807",level:2}],f={toc:p};function d(e){var t=e.components,c=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},f,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u53ef\u89c2\u6d4b\u6027"},"\u53ef\u89c2\u6d4b\u6027"),(0,o.kt)("p",null,"Pisanix \u76ee\u524d\u5728 Pisa-Proxy \u5904\u7406 SQL \u547d\u4ee4\u7684\u65f6\u5019\u91c7\u96c6\u76f8\u5173\u6307\u6807\uff0c\u5e76\u4ee5 ",(0,o.kt)("inlineCode",{parentName:"p"},"/metrics")," \u8def\u5f84\u8fdb\u884c\u66b4\u9732\u3002"),(0,o.kt)("h2",{id:"\u5df2\u652f\u6301\u6307\u6807"},"\u5df2\u652f\u6301\u6307\u6807"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"SQL_PROCESSED_TOTAL: \u7edf\u8ba1\u6240\u6709\u6267\u884c\u7684 SQL \u6570\u91cf"),(0,o.kt)("li",{parentName:"ul"},"SQL_PROCESSED_DURATION: \u7edf\u8ba1\u6240\u6709 SQL \u7684\u6267\u884c\u65f6\u95f4")),(0,o.kt)("p",null,"\u6d4b\u8bd5\u6548\u679c\u5982\u4e0b\u56fe\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"grafana",src:r(151).Z,width:"1756",height:"1001"})),(0,o.kt)("p",null,"\u4e0b\u4e00\u6b65\u5c06\u652f\u6301\u66f4\u591a\u6807\u7b7e\u548c\u6307\u6807\uff0c\u5982 SQL \u8bed\u53e5\u7c7b\u578b\u3001\u5ef6\u8fdf\u3001\u9519\u8bef\u7387\u3001TopK\u3001\u8fd0\u884c\u65f6\u8d44\u6e90\u7b49\u3002"))}d.isMDXComponent=!0},151:function(e,t,r){t.Z=r.p+"assets/images/grafana-511dce0c4f3a3f1d9453416592e2e07a.jpg"}}]);