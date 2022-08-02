"use strict";(self.webpackChunkpisanix=self.webpackChunkpisanix||[]).push([[907],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),k=a,m=d["".concat(c,".").concat(k)]||d[k]||s[k]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4697:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:4},c="\u65ad\u8def\u548c\u5e76\u53d1\u63a7\u5236",u={unversionedId:"Features/sql-circuit-breaker-and-concurrency-control",id:"Features/sql-circuit-breaker-and-concurrency-control",title:"\u65ad\u8def\u548c\u5e76\u53d1\u63a7\u5236",description:"\u76ee\u524d\u5b9e\u73b0\u4e86\u4e24\u4e2a\u9ed8\u8ba4\u63d2\u4ef6 SQL \u65ad\u8def \u548c SQL \u5e76\u53d1\u63a7\u5236\u3002",source:"@site/docs/Features/sql-circuit-breaker-and-concurrency-control.md",sourceDirName:"Features",slug:"/Features/sql-circuit-breaker-and-concurrency-control",permalink:"/docs/Features/sql-circuit-breaker-and-concurrency-control",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"SQL \u89e3\u6790",permalink:"/docs/Features/sql-parser"},next:{title:"\u5728 Kubernetes \u4e2d\u90e8\u7f72",permalink:"/docs/UseCases/kubernetes"}},p={},s=[{value:"SQL \u65ad\u8def",id:"sql-\u65ad\u8def",level:3},{value:"\u793a\u4f8b\u914d\u7f6e",id:"\u793a\u4f8b\u914d\u7f6e",level:4},{value:"SQL \u9650\u6d41",id:"sql-\u9650\u6d41",level:3},{value:"\u793a\u4f8b\u914d\u7f6e",id:"\u793a\u4f8b\u914d\u7f6e-1",level:4},{value:"\u8bbe\u8ba1\u8bf4\u660e",id:"\u8bbe\u8ba1\u8bf4\u660e",level:2}],d={toc:s};function k(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u65ad\u8def\u548c\u5e76\u53d1\u63a7\u5236"},"\u65ad\u8def\u548c\u5e76\u53d1\u63a7\u5236"),(0,o.kt)("p",null,"\u76ee\u524d\u5b9e\u73b0\u4e86\u4e24\u4e2a\u9ed8\u8ba4\u63d2\u4ef6 ",(0,o.kt)("inlineCode",{parentName:"p"},"SQL \u65ad\u8def")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"SQL \u5e76\u53d1\u63a7\u5236"),"\u3002"),(0,o.kt)("h3",{id:"sql-\u65ad\u8def"},"SQL \u65ad\u8def"),(0,o.kt)("p",null,"\u7981\u6b62\u8fd0\u884c\u5339\u914d\u6b63\u5219\u7684\u8bed\u53e5\u3002"),(0,o.kt)("h4",{id:"\u793a\u4f8b\u914d\u7f6e"},"\u793a\u4f8b\u914d\u7f6e"),(0,o.kt)("p",null,"\u5982\uff1a\u4e0d\u5141\u8bb8\u6267\u884c",(0,o.kt)("inlineCode",{parentName:"p"}," SELECT *")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'[[proxy.config.plugin.circuit_break]]\nregex = "SELECT \\\\*"\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6ce8\uff1a\u53ef\u4ee5\u6709\u591a\u4e2a\u89c4\u5219")),(0,o.kt)("h3",{id:"sql-\u9650\u6d41"},"SQL \u9650\u6d41"),(0,o.kt)("p",null,"\u9650\u6d41\u89c4\u5219\u8868\u793a\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"duration")," \u79d2\u5185\u5e76\u53d1\u8fd0\u884c\u5339\u914d\u6b63\u5219\u7684 SQL \u8bed\u53e5\u53ea\u80fd\u6709 ",(0,o.kt)("inlineCode",{parentName:"p"},"max_concurrency")," \u6761\uff0c"),(0,o.kt)("h4",{id:"\u793a\u4f8b\u914d\u7f6e-1"},"\u793a\u4f8b\u914d\u7f6e"),(0,o.kt)("p",null,"\u5982\uff1a\u4e0d\u5141\u8bb8100\u79d2\u5185\u5e76\u53d1\u6267\u884c\u591a\u4e8e1\u6761 ",(0,o.kt)("inlineCode",{parentName:"p"},"SELECT *")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'[[proxy.config.plugin.concurrency_control]]\nregex = "SELECT \\\\*"    \nmax_concurrency = 1\nduration = 100\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6ce8\uff1a\u53ef\u4ee5\u6709\u591a\u4e2a\u89c4\u5219")),(0,o.kt)("h2",{id:"\u8bbe\u8ba1\u8bf4\u660e"},"\u8bbe\u8ba1\u8bf4\u660e"),(0,o.kt)("p",null,"\u76ee\u524d\u8fd0\u884c\u4e2d\u95f4\u4ef6\u7684\u65b9\u5f0f\u53c2\u8003\u4e86",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tower-rs/tower.git"}," Tower-rs "),"\uff0c\u53ef\u4ee5\u5f88\u597d\u7684\u6ee1\u8db3\u672a\u6765\u6269\u5c55\u7684\u9700\u6c42\u3002"),(0,o.kt)("p",null,"\u5176\u4e2d\u6709\u4e24\u4e2a\u6982\u5ff5:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Layer:  \u662f\u5bf9 ",(0,o.kt)("inlineCode",{parentName:"p"},"Service")," \u7684\u5305\u88c5\uff0c\u6bcf\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"Service")," \u53ef\u4ee5\u6709\u591a\u4e2a\u4e0d\u540c\u7684\u4e2d\u95f4\u4ef6\u3002")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Service: \u6307 ",(0,o.kt)("inlineCode",{parentName:"p"},"Pisanix")," \u5185\u90e8\u5141\u8bb8\u6267\u884c\u4e2d\u95f4\u4ef6\u7684\u670d\u52a1\u6216\u8005\u662f\u67d0\u4e2a\u529f\u80fd\u51fd\u6570\uff0c\u53ef\u4ee5\u8fd0\u884c\u4e00\u4e9b\u81ea\u5b9a\u4e49\u7684\u903b\u8f91\uff0c\u5982 ",(0,o.kt)("inlineCode",{parentName:"p"},"Metrics")," \u6536\u96c6\u3002")),(0,o.kt)("p",null,"\u5b9e\u73b0",(0,o.kt)("a",{parentName:"p",href:"https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&gist=0db8ca6f72096c7a74682085a66e3270"},"\u4f2a\u4ee3\u7801"),"\u3002"),(0,o.kt)("p",null,"\u6ce8\u610f "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u9650\u6d41\u89c4\u5219\u8868\u793a\u5728 ",(0,o.kt)("inlineCode",{parentName:"li"},"duration")," \u79d2\u5185\u5e76\u53d1\u8fd0\u884c\u5339\u914d\u6b63\u5219\u7684 sql \u8bed\u53e5\u53ea\u80fd\u6709 ",(0,o.kt)("inlineCode",{parentName:"li"},"max_concurrency")," \u6761\uff0c\u4ece\u7b2c\u4e00\u6b21\u5339\u914d\u5230\u5f00\u59cb\u8ba1\u65f6\uff0c\u5982\u679c\u8d85\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"li"},"duration")," \u65f6\u95f4\uff0c\u5219\u9650\u6d41\u5931\u6548\uff0c\u91cd\u65b0\u5f00\u59cb\u4e0b\u4e00\u6b21\u5339\u914d\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u76ee\u524d\u7531\u4e8e\u4e0d\u80fd\u52a8\u6001\u751f\u6548\u9650\u6d41\u89c4\u5219\uff0c\u56e0\u6b64\u89c4\u5219\u7684\u751f\u6548\u65f6\u95f4\u662f\u4ece\u7b2c\u4e00\u6b21\u5339\u914d\u5230\u7684\u65f6\u95f4\u5f00\u59cb\uff0c\u6301\u7eed ",(0,o.kt)("inlineCode",{parentName:"li"},"duration")," \u65f6\u95f4\uff0c\u8d85\u8fc7\u540e\u7ee7\u7eed\u4e0b\u6b21\u5faa\u73af\uff0c\u6ca1\u6709\u5931\u6548\u60c5\u51b5\uff0c\u5728\u672a\u6765\u652f\u6301\u52a8\u6001\u751f\u6548\u540e\uff0c\u89c4\u5219\u5931\u6548\u6709\u4e24\u79cd\u60c5\u51b5\uff1a",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"duration")," \u7684\u65f6\u95f4\u5c06\u4ece\u83b7\u53d6\u5230\u5f00\u542f\u52a8\u4f5c\u7684\u65f6\u95f4\u5f00\u59cb\uff0c\u6301\u7eed ",(0,o.kt)("inlineCode",{parentName:"li"},"duration")," \u65f6\u95f4\uff0c\u89c4\u5219\u5931\u6548\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u7b49\u5230\u83b7\u53d6\u5230\u5173\u95ed\u52a8\u4f5c\u65f6\uff0c\u89c4\u5219\u5931\u6548\u3002")))))}k.isMDXComponent=!0}}]);