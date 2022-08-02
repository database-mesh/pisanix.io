"use strict";(self.webpackChunkpisanix=self.webpackChunkpisanix||[]).push([[609],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return b}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=c(n),b=o,m=f["".concat(u,".").concat(b)]||f[b]||l[b]||i;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=f;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1847:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return l}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),s=["components"],a={sidebar_position:1},u="\u5728 Kubernetes \u4e2d\u90e8\u7f72",c={unversionedId:"UseCases/kubernetes",id:"UseCases/kubernetes",title:"\u5728 Kubernetes \u4e2d\u90e8\u7f72",description:"Pisanix \u7684\u4e09\u4e2a\u7ec4\u4ef6\u5728\u9879\u76ee\u89c4\u5212\u4e4b\u521d\u5373\u6309\u7167\u63a7\u5236\u9762\u914d\u5408\u591a\u6570\u636e\u9762\u7684\u5f62\u5f0f\u8fdb\u884c\u8bbe\u8ba1\u7684\uff0c\u5b83\u4eec\u90fd\u53ef\u90e8\u7f72\u5728 Kubernetes \u4e4b\u4e0a\uff0c\u5e76\u901a\u8fc7 CustomResourceDefinition \u5b8c\u6210\u5404\u79cd\u914d\u7f6e\uff0c\u7531 Pisa-Controller \u8f6c\u6362\u4e3a\u76f8\u5e94\u7684\u914d\u7f6e\u540e\uff0c\u4e0b\u53d1\u7ed9 Pisa-Proxy \u6216 Pisa-Daemon\u3002",source:"@site/docs/UseCases/kubernetes.md",sourceDirName:"UseCases",slug:"/UseCases/kubernetes",permalink:"/docs/UseCases/kubernetes",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u4e2d\u95f4\u4ef6",permalink:"/docs/Features/sql-breaker-limit"},next:{title:"Pisa-Proxy \u5355\u72ec\u90e8\u7f72",permalink:"/docs/UseCases/standalone"}},p={},l=[],f={toc:l};function b(e){var t=e.components,a=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u5728-kubernetes-\u4e2d\u90e8\u7f72"},"\u5728 Kubernetes \u4e2d\u90e8\u7f72"),(0,i.kt)("p",null,"Pisanix \u7684\u4e09\u4e2a\u7ec4\u4ef6\u5728\u9879\u76ee\u89c4\u5212\u4e4b\u521d\u5373\u6309\u7167",(0,i.kt)("inlineCode",{parentName:"p"},"\u63a7\u5236\u9762"),"\u914d\u5408\u591a",(0,i.kt)("inlineCode",{parentName:"p"},"\u6570\u636e\u9762"),"\u7684\u5f62\u5f0f\u8fdb\u884c\u8bbe\u8ba1\u7684\uff0c\u5b83\u4eec\u90fd\u53ef\u90e8\u7f72\u5728 Kubernetes \u4e4b\u4e0a\uff0c\u5e76\u901a\u8fc7 CustomResourceDefinition \u5b8c\u6210\u5404\u79cd\u914d\u7f6e\uff0c\u7531 Pisa-Controller \u8f6c\u6362\u4e3a\u76f8\u5e94\u7684\u914d\u7f6e\u540e\uff0c\u4e0b\u53d1\u7ed9 Pisa-Proxy \u6216 Pisa-Daemon\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"kubernetes.png",src:n(5234).Z,width:"1344",height:"1328"})))}b.isMDXComponent=!0},5234:function(e,t,n){t.Z=n.p+"assets/images/kubernetes-7506358bf8111c7668a4c1c0b6fc3656.png"}}]);