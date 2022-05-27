"use strict";(self.webpackChunkpisanix=self.webpackChunkpisanix||[]).push([[198],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),k=a,d=m["".concat(p,".").concat(k)]||m[k]||s[k]||i;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8287:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:4},p="\u4e2d\u95f4\u4ef6",u={unversionedId:"Features/sql-breaker-limit",id:"Features/sql-breaker-limit",title:"\u4e2d\u95f4\u4ef6",description:"\u76ee\u524d\u8fd0\u884c\u4e2d\u95f4\u4ef6\u7684\u65b9\u5f0f\u53c2\u8003\u4e86 Tower-rs \uff0c\u53ef\u4ee5\u5f88\u597d\u7684\u6ee1\u8db3\u672a\u6765\u6269\u5c55\u7684\u9700\u6c42\u3002",source:"@site/docs/Features/sql-breaker-limit.md",sourceDirName:"Features",slug:"/Features/sql-breaker-limit",permalink:"/en/docs/Features/sql-breaker-limit",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"SQL\u89e3\u6790",permalink:"/en/docs/Features/sql-parser"},next:{title:"The kubernetes case",permalink:"/en/docs/UseCases/kubernetes"}},c={},s=[{value:"\u5b9e\u73b0",id:"\u5b9e\u73b0",level:2},{value:"SQL\u65ad\u8def\u5668",id:"sql\u65ad\u8def\u5668",level:3},{value:"\u793a\u4f8b\u914d\u7f6e",id:"\u793a\u4f8b\u914d\u7f6e",level:4},{value:"SQL\u9650\u6d41",id:"sql\u9650\u6d41",level:3},{value:"\u793a\u4f8b\u914d\u7f6e",id:"\u793a\u4f8b\u914d\u7f6e-1",level:4},{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:4}],m={toc:s};function k(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u4e2d\u95f4\u4ef6"},"\u4e2d\u95f4\u4ef6"),(0,i.kt)("p",null,"\u76ee\u524d\u8fd0\u884c\u4e2d\u95f4\u4ef6\u7684\u65b9\u5f0f\u53c2\u8003\u4e86",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tower-rs/tower.git"}," Tower-rs "),"\uff0c\u53ef\u4ee5\u5f88\u597d\u7684\u6ee1\u8db3\u672a\u6765\u6269\u5c55\u7684\u9700\u6c42\u3002"),(0,i.kt)("p",null,"\u5176\u4e2d\u6709\u4e24\u4e2a\u6982\u5ff5:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Layer:  \u662f\u5bf9 ",(0,i.kt)("inlineCode",{parentName:"p"},"Service")," \u7684\u5305\u88c5\uff0c\u6bcf\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"Service")," \u53ef\u4ee5\u6709\u591a\u4e2a\u4e0d\u540c\u7684\u4e2d\u95f4\u4ef6\u3002")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Service: \u6307 ",(0,i.kt)("inlineCode",{parentName:"p"},"Pisanix")," \u5185\u90e8\u5141\u8bb8\u6267\u884c\u4e2d\u95f4\u4ef6\u7684\u670d\u52a1\u6216\u8005\u662f\u67d0\u4e2a\u529f\u80fd\u51fd\u6570\uff0c\u53ef\u4ee5\u8fd0\u884c\u4e00\u4e9b\u81ea\u5b9a\u4e49\u7684\u903b\u8f91\uff0c\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"Metrics")," \u6536\u96c6\u3002")),(0,i.kt)("p",null,"\u5b9e\u73b0",(0,i.kt)("a",{parentName:"p",href:"https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&gist=0db8ca6f72096c7a74682085a66e3270"},"\u4f2a\u4ee3\u7801"),"\u3002"),(0,i.kt)("h2",{id:"\u5b9e\u73b0"},"\u5b9e\u73b0"),(0,i.kt)("p",null,"\u76ee\u524d\u5b9e\u73b0\u4e86\u4e24\u4e2a\u9ed8\u8ba4\u63d2\u4ef6 ",(0,i.kt)("inlineCode",{parentName:"p"},"SQL \u65ad\u8def\u5668")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"SQL \u9650\u6d41"),"\u3002"),(0,i.kt)("h3",{id:"sql\u65ad\u8def\u5668"},"SQL\u65ad\u8def\u5668"),(0,i.kt)("p",null,"\u7981\u6b62\u8fd0\u884c\u5339\u914d\u6b63\u5219\u7684\u8bed\u53e5\u3002"),(0,i.kt)("h4",{id:"\u793a\u4f8b\u914d\u7f6e"},"\u793a\u4f8b\u914d\u7f6e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},'[[proxy.configs.plugin.circuit_breaker]]\nregex = "\\\\w+"\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u53ef\u4ee5\u6709\u591a\u4e2a\u89c4\u5219")),(0,i.kt)("h3",{id:"sql\u9650\u6d41"},"SQL\u9650\u6d41"),(0,i.kt)("p",null,"\u9650\u6d41\u89c4\u5219\u8868\u793a\u5728 duration \u79d2\u5185\u5e76\u53d1\u8fd0\u884c\u5339\u914d\u6b63\u5219\u7684sql\u8bed\u53e5\u53ea\u80fd\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},"max_concurrency")," \u6761\uff0c"),(0,i.kt)("h4",{id:"\u793a\u4f8b\u914d\u7f6e-1"},"\u793a\u4f8b\u914d\u7f6e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},'[[proxy.configs.plugin.concurrency_control]]\nregex = "\\\\w+"    \nmax_concurrency = 1\nduration = "100"\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u53ef\u4ee5\u6709\u591a\u4e2a\u89c4\u5219")),(0,i.kt)("h4",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u9650\u6d41\u89c4\u5219\u8868\u793a\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"duration")," \u79d2\u5185\u5e76\u53d1\u8fd0\u884c\u5339\u914d\u6b63\u5219\u7684 sql \u8bed\u53e5\u53ea\u80fd\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},"max_concurrency")," \u6761\uff0c\u4ece\u7b2c\u4e00\u6b21\u5339\u914d\u5230\u5f00\u59cb\u8ba1\u65f6\uff0c\u5982\u679c\u8d85\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"duration")," \u65f6\u95f4\uff0c\u5219\u9650\u6d41\u5931\u6548\uff0c\u91cd\u65b0\u5f00\u59cb\u4e0b\u4e00\u6b21\u5339\u914d\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u76ee\u524d\u7531\u4e8e\u4e0d\u80fd\u52a8\u6001\u751f\u6548\u9650\u6d41\u89c4\u5219\uff0c\u56e0\u6b64\u89c4\u5219\u7684\u751f\u6548\u65f6\u95f4\u662f\u4ece\u7b2c\u4e00\u6b21\u5339\u914d\u5230\u7684\u65f6\u95f4\u5f00\u59cb\uff0c\u6301\u7eed ",(0,i.kt)("inlineCode",{parentName:"p"},"duration")," \u65f6\u95f4\uff0c\u8d85\u8fc7\u540e\u7ee7\u7eed\u4e0b\u6b21\u5faa\u73af\uff0c\u6ca1\u6709\u5931\u6548\u60c5\u51b5\uff0c\u5728\u672a\u6765\u652f\u6301\u52a8\u6001\u751f\u6548\u540e\uff0c\u89c4\u5219\u5931\u6548\u6709\u4e24\u79cd\u60c5\u51b5\uff1a"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"duration")," \u7684\u65f6\u95f4\u5c06\u4ece\u83b7\u53d6\u5230\u5f00\u542f\u52a8\u4f5c\u7684\u65f6\u95f4\u5f00\u59cb\uff0c\u6301\u7eed ",(0,i.kt)("inlineCode",{parentName:"p"},"duration")," \u65f6\u95f4\uff0c\u89c4\u5219\u5931\u6548\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u7b49\u5230\u83b7\u53d6\u5230\u5173\u95ed\u52a8\u4f5c\u65f6\uff0c\u89c4\u5219\u5931\u6548\u3002"))))))}k.isMDXComponent=!0}}]);