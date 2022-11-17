"use strict";(self.webpackChunkpisanix=self.webpackChunkpisanix||[]).push([[1455],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),p=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},o=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,k=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return a?r.createElement(k,s(s({ref:t},o),{},{components:a})):r.createElement(k,s({ref:t},o))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var p=2;p<i;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9546:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const i={sidebar_position:3},s="SQL \u89e3\u6790",l={unversionedId:"Features/sql-parser",id:"version-v0.3.0/Features/sql-parser",title:"SQL \u89e3\u6790",description:"Pisa-Proxy \u9664\u4e86\u7406\u89e3 SQL \u534f\u8bae\u5916, \u80fd\u8bfb\u61c2 SQL \u8bed\u53e5\u4e5f\u662f\u4e00\u4e2a\u5f88\u91cd\u8981\u7684\u529f\u80fd\uff0c\u8bfb\u5199\u5206\u79bb\uff0c\u5206\u7247\u7b49\u529f\u80fd\u4e5f\u90fd\u4f9d\u8d56 SQL \u89e3\u6790\uff0c\u5728 Pisa-Proxy \u4e2d\u5360\u7740\u4e3e\u8db3\u8f7b\u91cd\u7684\u4f5c\u7528\u3002",source:"@site/versioned_docs/version-v0.3.0/Features/sql-parser.md",sourceDirName:"Features",slug:"/Features/sql-parser",permalink:"/en/docs/v0.3.0/Features/sql-parser",tags:[],version:"v0.3.0",lastUpdatedBy:"Jack",lastUpdatedAt:1664192984,formattedLastUpdatedAt:"9/26/2022",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u8bfb\u5199\u5206\u79bb",permalink:"/en/docs/v0.3.0/Features/readwritesplitting"},next:{title:"\u65ad\u8def\u548c\u5e76\u53d1\u63a7\u5236",permalink:"/en/docs/v0.3.0/Features/sql-circuit-breaker-and-concurrency-control"}},c={},p=[{value:"\u5df2\u652f\u6301\u8bed\u53e5",id:"\u5df2\u652f\u6301\u8bed\u53e5",level:2},{value:"\u8bbe\u8ba1\u8bf4\u660e",id:"\u8bbe\u8ba1\u8bf4\u660e",level:2},{value:"MySQL \u8bed\u6cd5",id:"mysql-\u8bed\u6cd5",level:3},{value:"AST \u8bf4\u660e",id:"ast-\u8bf4\u660e",level:3},{value:"\u6d4b\u8bd5",id:"\u6d4b\u8bd5",level:3}],o={toc:p};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"sql-\u89e3\u6790"},"SQL \u89e3\u6790"),(0,n.kt)("p",null,"Pisa-Proxy \u9664\u4e86\u7406\u89e3 SQL \u534f\u8bae\u5916, \u80fd\u8bfb\u61c2 SQL \u8bed\u53e5\u4e5f\u662f\u4e00\u4e2a\u5f88\u91cd\u8981\u7684\u529f\u80fd\uff0c\u8bfb\u5199\u5206\u79bb\uff0c\u5206\u7247\u7b49\u529f\u80fd\u4e5f\u90fd\u4f9d\u8d56 SQL \u89e3\u6790\uff0c\u5728 Pisa-Proxy \u4e2d\u5360\u7740\u4e3e\u8db3\u8f7b\u91cd\u7684\u4f5c\u7528\u3002\n\u7531\u4e8e Pisa-Proxy \u652f\u6301\u591a\u79cd\u6570\u636e\u6e90\uff0c\u56e0\u6b64\u5728 Pisa-Proxy \u4e2d\uff0c\u6bcf\u79cd\u4e0d\u540c\u7684\u6570\u636e\u6e90\u90fd\u8981\u5b9e\u73b0\u5404\u81ea\u5bf9\u5e94\u7684 SQL \u89e3\u6790\uff0c\u672a\u6765\u6211\u4eec\u4f1a\u652f\u6301\u4e0d\u540c\u6570\u636e\u6e90\u4f7f\u7528 SQL \u4e4b\u95f4\u7684\u8f6c\u6362\uff0c\u4ee5\u5b9e\u73b0\u5feb\u901f\u652f\u6301\u65b0\u7684\u6570\u636e\u6e90\u3002"),(0,n.kt)("h2",{id:"\u5df2\u652f\u6301\u8bed\u53e5"},"\u5df2\u652f\u6301\u8bed\u53e5"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","SELECT"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","INSERT"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","UPDATE"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","DELETE"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","PREPARE"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","EXECUTE"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","BEGIN"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","SET"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","SHOW"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","CREATE")),(0,n.kt)("h2",{id:"\u8bbe\u8ba1\u8bf4\u660e"},"\u8bbe\u8ba1\u8bf4\u660e"),(0,n.kt)("p",null,"\u76ee\u524d Pisanix \u53ea\u5b9e\u73b0\u4e86\u5bf9 MySQL \u7684\u8bed\u6cd5\u7684\u89e3\u6790\u3002"),(0,n.kt)("h3",{id:"mysql-\u8bed\u6cd5"},"MySQL \u8bed\u6cd5"),(0,n.kt)("p",null,"\u4e3a\u4e86\u6700\u5927\u7684\u7a0b\u5ea6\u7684\u517c\u5bb9\u539f\u751f\u7684 MySQL \u8bed\u6cd5\uff0cPisanix \u91c7\u7528\u539f\u751f\u7684",(0,n.kt)("a",{parentName:"p",href:"https://github.com/mysql/mysql-server/blob/8.0/sql/sql_yacc.yy"}," MySQL \u8bed\u6cd5\u6587\u4ef6"),"\uff0c\u57fa\u4e8e ",(0,n.kt)("inlineCode",{parentName:"p"},"Grmtools")," \u5b9e\u73b0\u4e86 SQL \u8bed\u6cd5\u89e3\u6790\u3002\n",(0,n.kt)("inlineCode",{parentName:"p"},"Grmtools")," \u662f\u4e00\u4e2a\u7528 Rust \u5199\u7684\u517c\u5bb9 ",(0,n.kt)("inlineCode",{parentName:"p"},"Yacc")," \u7684\u8bed\u6cd5\u89e3\u6790\u5de5\u5177\uff0c\u8be6\u7ec6\u4fe1\u606f\u8bf7\u53c2\u8003",(0,n.kt)("a",{parentName:"p",href:"https://github.com/softdevteam/grmtools.git"}," Github "),"\u3002"),(0,n.kt)("h3",{id:"ast-\u8bf4\u660e"},"AST \u8bf4\u660e"),(0,n.kt)("p",null,"Pisanix \u4e2d\u7684 SQL \u89e3\u6790\u4e0d\u4f1a\u4e3a\u6240\u6709\u8868\u8fbe\u5f0f\u90fd\u751f\u6210 AST\uff0c\u53ea\u4f1a\u4e3a Pisanix \u611f\u5174\u8da3\u7684\u90e8\u5206\u751f\u6210 AST\u3002\n\u8be6\u7ec6\u4fe1\u606f\u8bf7\u53c2\u8003",(0,n.kt)("a",{parentName:"p",href:"https://github.com/database-mesh/pisanix/tree/master/pisa-proxy/parser/mysql/src/ast"}," Github "),"\u3002"),(0,n.kt)("h3",{id:"\u6d4b\u8bd5"},"\u6d4b\u8bd5"),(0,n.kt)("p",null,"\u76ee\u524d\u4f7f\u7528\u4e86 MySQL test \u6846\u67b6\u4e2d\u80fd\u6b63\u5e38\u8fd0\u884c\u7684 SQL \u8bed\u53e5\u4f5c\u4e3a\u6d4b\u8bd5\u96c6\u6765\u6d4b\u8bd5\u3002\u76ee\u524d\u53ea\u6d4b\u8bd5\u4e86 ",(0,n.kt)("inlineCode",{parentName:"p"},"SELECT")," \u8bed\u53e5\uff0c\u6709",(0,n.kt)("inlineCode",{parentName:"p"},"98%"),"\u7684\u8bed\u53e5\u80fd\u6210\u529f\u89e3\u6790, \u8fd8\u5728\u4e0d\u65ad\u5b8c\u5584\u4e2d\u3002"))}u.isMDXComponent=!0}}]);