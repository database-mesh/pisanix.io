"use strict";(self.webpackChunkpisanix=self.webpackChunkpisanix||[]).push([[9655],{3905:function(t,e,n){n.d(e,{Zo:function(){return o},kt:function(){return m}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),d=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},o=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,o=u(t,["components","mdxType","originalType","parentName"]),s=d(n),m=a,c=s["".concat(p,".").concat(m)]||s[m]||k[m]||l;return n?r.createElement(c,i(i({ref:e},o),{},{components:n})):r.createElement(c,i({ref:e},o))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=s;var u={};for(var p in e)hasOwnProperty.call(e,p)&&(u[p]=e[p]);u.originalType=t,u.mdxType="string"==typeof t?t:a,i[1]=u;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2751:function(t,e,n){n.r(e),n.d(e,{assets:function(){return o},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return k}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],u={sidebar_position:6},p="\u6570\u636e\u5206\u7247",d={unversionedId:"Features/sharding",id:"version-v0.3.0/Features/sharding",title:"\u6570\u636e\u5206\u7247",description:"\u6570\u636e\u5206\u7247\u662f\u5e94\u5bf9\u6d77\u91cf\u6570\u636e\u5b58\u50a8\u4e0e\u8ba1\u7b97\u7684\u6709\u6548\u624b\u6bb5\u3002Pisanix \u57fa\u4e8e\u5e95\u5c42\u6570\u636e\u5e93\u63d0\u4f9b\u4e86\u6570\u636e\u5206\u7247\u7684\u6cbb\u7406\u80fd\u529b\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 Pisanix \u6c34\u5e73\u6269\u5c55\u8ba1\u7b97\u548c\u5b58\u50a8\u3002",source:"@site/versioned_docs/version-v0.3.0/Features/sharding.md",sourceDirName:"Features",slug:"/Features/sharding",permalink:"/en/docs/v0.3.0/Features/sharding",tags:[],version:"v0.3.0",lastUpdatedBy:"Jack",lastUpdatedAt:1664192984,formattedLastUpdatedAt:"9/26/2022",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\u53ef\u89c2\u6d4b\u6027",permalink:"/en/docs/v0.3.0/Features/observability"},next:{title:"\u5728 Kubernetes \u4e2d\u90e8\u7f72",permalink:"/en/docs/v0.3.0/UseCases/kubernetes"}},o={},k=[{value:"\u6570\u636e\u5206\u7247\u4ecb\u7ecd",id:"\u6570\u636e\u5206\u7247\u4ecb\u7ecd",level:2},{value:"\u540d\u8bcd\u89e3\u91ca",id:"\u540d\u8bcd\u89e3\u91ca",level:3},{value:"SQL \u6539\u5199\u4ecb\u7ecd",id:"sql-\u6539\u5199\u4ecb\u7ecd",level:3},{value:"1. \u6807\u8bc6\u7b26\u6539\u5199",id:"1-\u6807\u8bc6\u7b26\u6539\u5199",level:4},{value:"2. \u8865\u5217",id:"2-\u8865\u5217",level:4},{value:"\u7279\u6027",id:"\u7279\u6027",level:4},{value:"\u4f7f\u7528\u9650\u5236",id:"\u4f7f\u7528\u9650\u5236",level:4}],s={toc:k};function m(t){var e=t.components,u=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},s,u,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u6570\u636e\u5206\u7247"},"\u6570\u636e\u5206\u7247"),(0,l.kt)("p",null,"\u6570\u636e\u5206\u7247\u662f\u5e94\u5bf9\u6d77\u91cf\u6570\u636e\u5b58\u50a8\u4e0e\u8ba1\u7b97\u7684\u6709\u6548\u624b\u6bb5\u3002Pisanix \u57fa\u4e8e\u5e95\u5c42\u6570\u636e\u5e93\u63d0\u4f9b\u4e86\u6570\u636e\u5206\u7247\u7684\u6cbb\u7406\u80fd\u529b\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 Pisanix \u6c34\u5e73\u6269\u5c55\u8ba1\u7b97\u548c\u5b58\u50a8\u3002"),(0,l.kt)("h2",{id:"\u6570\u636e\u5206\u7247\u4ecb\u7ecd"},"\u6570\u636e\u5206\u7247\u4ecb\u7ecd"),(0,l.kt)("p",null,"\u5982\u4e0b\u56fe\uff0c\u5728\u6570\u636e\u5206\u7247\u4e2d\u4e3b\u8981\u5305\u51fd\u4e86 SQL \u89e3\u6790\u3001SQL \u6539\u5199\u3001SQL \u8def\u7531\u3001\u7ed3\u679c\u5f52\u5e76\u8fd9\u51e0\u4e2a\u91cd\u8981\u6a21\u5757\uff0c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"+------------+     +-------------+     +-----------+     +--------------+\n| SQL Parse  | --\x3e | SQL Rewrite | --\x3e | SQL Route | --\x3e | Result Merge |\n+------------+     +-------------+     +-----------+     +--------------+\n")),(0,l.kt)("h3",{id:"\u540d\u8bcd\u89e3\u91ca"},"\u540d\u8bcd\u89e3\u91ca"),(0,l.kt)("p",null,"SQL \u89e3\u6790: \u5728\u5206\u7247\u4e2d\uff0c\u8bf7\u6c42\u5230\u8fbe Pisa-Proxy \u540e\u4f1a\u9996\u5148\u7ecf\u8fc7 SQL Parser\uff0c\u5c06 SQL \u89e3\u6790\u6210 AST\u3002"),(0,l.kt)("p",null,"SQL \u6539\u5199: \u89e3\u6790\u7ed3\u675f\u540e\uff0cPisa-Proxy \u4f1a\u6839\u636e\u5206\u7247\u89c4\u5219\u5bf9\u5f53\u524d SQL \u8bed\u53e5\u8fdb\u884c\u6539\u5199\uff0c\u751f\u6210\u771f\u5b9e\u8981\u6267\u884c\u7684 SQL \u8bed\u53e5\u3002"),(0,l.kt)("p",null,"SQL \u8def\u7531: Pisa-Proxy \u4f1a\u6839\u636e\u5206\u7247\u89c4\u5219\uff0c\u5c06\u6539\u5199\u597d\u7684 SQL \u8bed\u53e5\u8def\u7531\u5230\u540e\u7aef\u5bf9\u5e94\u6570\u636e\u6e90\u4e0a\u6267\u884c SQL \u8bed\u53e5\u3002"),(0,l.kt)("p",null,"\u7ed3\u679c\u5f52\u5e76: SQL \u88ab\u4e0b\u63a8\u6267\u884c\u4e4b\u540e\uff0cPisa-Proxy \u4f1a\u5bf9\u67e5\u8be2\u7ed3\u679c\u8fdb\u884c\u5f52\u5e76\uff0c\u5e76\u6700\u7ec8\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\u3002"),(0,l.kt)("h3",{id:"sql-\u6539\u5199\u4ecb\u7ecd"},"SQL \u6539\u5199\u4ecb\u7ecd"),(0,l.kt)("p",null,"\u5728\u6570\u636e\u5206\u7247\u4e2d\uff0cSQL \u6539\u5199\u662f\u5f88\u91cd\u8981\u7684\u4e00\u4e2a\u6a21\u5757\u3002Pisa-Proxy \u9700\u8981\u6839\u636e\u5206\u7247\u89c4\u5219\u5c06 SQL \u8bed\u53e5\u6539\u5199\u6210\u771f\u6b63\u8981\u6267\u884c\u7684 SQL \u8bed\u53e5\u3002\u5728 SQL \u6539\u5199\u4e2d\u901a\u5e38\u6709\u4ee5\u4e0b\u51e0\u79cd\u6539\u5199\u7c7b\u578b\u3002"),(0,l.kt)("h4",{id:"1-\u6807\u8bc6\u7b26\u6539\u5199"},"1. \u6807\u8bc6\u7b26\u6539\u5199"),(0,l.kt)("p",null,"\u5728 SQL \u6539\u5199\u4e2d\uff0c\u9700\u8981\u6539\u5199\u7684\u6807\u8bc6\u7b26\u5305\u62ec\u8868\u540d\u79f0\u3001\u7d22\u5f15\u540d\u79f0\u4ee5\u53caSchema\u540d\u79f0\u3002"),(0,l.kt)("p",null,"\u8868\u540d\u79f0\u6539\u5199\u662f\u6307\u5c06\u627e\u5230\u903b\u8f91\u8868\u5728\u539f\u59cbSQL\u4e2d\u7684\u4f4d\u7f6e\uff0c\u5e76\u5c06\u5176\u6539\u5199\u4e3a\u771f\u5b9e\u8868\u7684\u8fc7\u7a0b\u3002\u8868\u540d\u79f0\u6539\u5199\u662f\u4e00\u4e2a\u5178\u578b\u7684\u9700\u8981\u5bf9SQL\u8fdb\u884c\u89e3\u6790\u7684\u573a\u666f\u3002 \u4ece\u4e00\u4e2a\u6700\u7b80\u5355\u7684\u4f8b\u5b50\u5f00\u59cb\uff0c\u82e5\u903b\u8f91SQL\u4e3a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"SELECT order_id FROM order.t_order WHERE order_id = 1;\n")),(0,l.kt)("p",null,"\u5047\u8bbe\u8be5\u8868\u914d\u7f6e\u7684\u5206\u7247\u952e\u4f4d ",(0,l.kt)("inlineCode",{parentName:"p"},"order_id")," \u5e76\u4e14 ",(0,l.kt)("inlineCode",{parentName:"p"},"order_id = 1"),"\uff0c\u5206\u7247\u6570\u6307\u5b9a\u4e3a4\uff0c\u90a3\u4e48\u7ecf\u8fc7\u6539\u5199\u540e\u7684 SQL \u8bed\u53e5\u4e3a:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"SELECT order_id FROM order.t_order_00001 WHERE order_id = 1;\n")),(0,l.kt)("p",null,"\u4e0b\u56fe\u5c55\u793a\u4e86\u6570\u636e\u67e5\u8be2\u8fc7\u7a0b\n",(0,l.kt)("img",{src:n(6043).Z,width:"1044",height:"676"})),(0,l.kt)("p",null,"\u4ee5\u6570\u636e\u63d2\u5165\u4e3a\u4f8b\uff0c\u6570\u636e\u5199\u5165\u8fc7\u7a0b\u5982\u4e0b\u56fe:\n",(0,l.kt)("img",{src:n(6043).Z,width:"1044",height:"676"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7279\u522b\u8bf4\u660e: SQL rewrite \u5728\u4fee\u6539\u6807\u8bc6\u7b26\u8ba1\u7b97\u5b9e\u9645\u8868\u540d\u65f6\u4f1a\u81ea\u52a8\u6839\u636e\u5206\u7247\u89c4\u5219\u6dfb\u52a0\u8868\u7d22\u5f15\uff0c\u7d22\u5f15\u89c4\u5219\u4f4d \u8868\u540d_\u7d22\u5f15\uff0c\u7d22\u5f15\u4f4d\u4e3a5\u4f4d\u8868\u793a\u3002\u4f8b\u5982\uff1a",(0,l.kt)("inlineCode",{parentName:"strong"},"t_order")," \u8868\u6539\u5199\u540e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"strong"},"t_order_00000"),"\u3002\u56e0\u6b64\u7528\u6237\u9700\u8981\u6839\u636e\u5b9e\u9645\u4e1a\u52a1\u573a\u666f\u5148\u521b\u5efa\u597d\u5bf9\u5e94\u7684\u8868\u540d")),(0,l.kt)("h4",{id:"2-\u8865\u5217"},"2. \u8865\u5217"),(0,l.kt)("p",null,"\u9700\u8981\u5728\u67e5\u8be2\u8bed\u53e5\u4e2d\u8865\u5217\u901a\u5e38\u7531\u4e24\u79cd\u60c5\u51b5\u5bfc\u81f4\u3002 \u7b2c\u4e00\u79cd\u60c5\u51b5\u662f Pisa-Proxy \u9700\u8981\u5728\u7ed3\u679c\u5f52\u5e76\u65f6\u83b7\u53d6\u76f8\u5e94\u6570\u636e\uff0c\u4f46\u8be5\u6570\u636e\u5e76\u672a\u80fd\u901a\u8fc7\u67e5\u8be2\u7684SQL\u8fd4\u56de\u3002 \u8fd9\u79cd\u60c5\u51b5\u4e3b\u8981\u662f\u9488\u5bf9 GROUP BY \u548c ORDER BY\u3002\u7ed3\u679c\u5f52\u5e76\u65f6\uff0c\u9700\u8981\u6839\u636e GROUP BY \u548c ORDER BY \u7684\u5b57\u6bb5\u9879\u8fdb\u884c\u5206\u7ec4\u548c\u6392\u5e8f\uff0c\u4f46\u5982\u679c\u539f\u59cbSQL\u7684\u9009\u62e9\u9879\u4e2d\u82e5\u5e76\u672a\u5305\u542b\u5206\u7ec4\u9879\u6216\u6392\u5e8f\u9879\uff0c\u5219\u9700\u8981\u5bf9\u539f\u59cbSQL\u8fdb\u884c\u6539\u5199\u3002\n\u4f8b\u5982\u6709\u4ee5\u4e0b SQL \u8bed\u53e5:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"SELECT order_id, user_id FROM t_order ORDER BY user_id;\n")),(0,l.kt)("p",null,"\u7531\u4e8e\u6392\u5e8f\u65f6\u7528\u5230\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"user_id")," , \u5728\u7ed3\u679c\u5f52\u5e76\u65f6\u9700\u8981\u7528\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"user_id")," \u8fd9\u4e00\u5217\u7684\u6570\u636e\uff0c\u4e0a\u9762\u7684 SQL \u8bed\u53e5\u4e2d\u5305\u542b\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"user_id")," \u7684\u6570\u636e\uff0c\u56e0\u6b64\u4e0d\u9700\u8981\u8865\u5217\uff0c\u53ea\u9700\u8981\u4fee\u6539\u6807\u8bc6\u7b26\u5373\u53ef\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"SELECT order_id FROM t_order ORDER BY user_id;\n")),(0,l.kt)("p",null,"\u8fd9\u6761 SQL \u4e2d\u4f9d\u8d56\u6392\u5e8f\u4f9d\u8d56\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"user_id")," \u56e0\u6b64\u9700\u8981\u8865\u5217\uff0c\u6539\u5199\u540e\u7684 SQL \u5982\u4e0b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"SELECT order_id, user_id AS USER_ID_ORDER_BY_DERIVED_00000 FROM t_order_00000 ORDER BY user_id;\n")),(0,l.kt)("p",null,"\u8865\u5217\u7684\u53e6\u4e00\u79cd\u60c5\u51b5\u662f\u4f7f\u7528AVG\u805a\u5408\u51fd\u6570\u3002\u5728\u5206\u5e03\u5f0f\u7684\u573a\u666f\u4e2d\uff0c\u4f7f\u7528avg1 + avg2 + avg3 / 3\u8ba1\u7b97\u5e73\u5747\u503c\u5e76\u4e0d\u6b63\u786e\uff0c\u9700\u8981\u6539\u5199\u4e3a (sum1 + sum2 + sum3) / (count1 + count2 + count3)\u3002 \u8fd9\u5c31\u9700\u8981\u5c06\u5305\u542bAVG\u7684SQL\u6539\u5199\u4e3aSUM\u548cCOUNT\uff0c\u5e76\u5728\u7ed3\u679c\u5f52\u5e76\u65f6\u91cd\u65b0\u8ba1\u7b97\u5e73\u5747\u503c\u3002\u4f8b\u5982\u4ee5\u4e0bSQL\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"SELECT AVG(price) FROM t_order WHERE user_id = 1;\n")),(0,l.kt)("p",null,"\u6539\u5199\u540e\u7684 SQL \u5982\u4e0b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"SELECT COUNT(price) AS AVG_DERIVED_COUNT_00000, SUM(price) AS AVG_DERIVED_SUM_00000 FROM t_order_00000 WHERE user_id = 1;\n")),(0,l.kt)("h1",{id:"\u652f\u6301\u7279\u6027"},"\u652f\u6301\u7279\u6027"),(0,l.kt)("h4",{id:"\u7279\u6027"},"\u7279\u6027"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u5355 shard-key \u7684\u9759\u6001\u5206\u7247\u89c4\u5219"),(0,l.kt)("li",{parentName:"ul"},"\u5206\u7247\u7b97\u6cd5\uff1acrc32mod \u548c mod"),(0,l.kt)("li",{parentName:"ul"},"\u5355\u5e93\u6c34\u5e73\u5206\u8868"),(0,l.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u5206\u7247\u7684\u67e5\u8be2\uff0c\u66f4\u65b0\uff0c\u5220\u9664\uff0c\u4fee\u6539")),(0,l.kt)("h4",{id:"\u4f7f\u7528\u9650\u5236"},"\u4f7f\u7528\u9650\u5236"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u5b50\u67e5\u8be2"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u5206\u5e93"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u5206\u5e03\u5f0f\u4e8b\u52a1"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u57fa\u4e8e\u8868\u8fbe\u5f0f\u914d\u7f6e\u7684\u5206\u7247\u89c4\u5219"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u8de8\u5e93 join \u67e5\u8be2")),(0,l.kt)("h1",{id:"\u914d\u7f6e\u8bf4\u660e"},"\u914d\u7f6e\u8bf4\u660e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,l.kt)("th",{parentName:"tr",align:null},"\u503c\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u4f9d\u8d56"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table_name"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5206\u7247\u8868\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"actual_datanodes"),(0,l.kt)("td",{parentName:"tr",align:null},"array","[String]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u540e\u7aef\u6570\u636e\u6e90")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"binding_tables"),(0,l.kt)("td",{parentName:"tr",align:null},"arrayString]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6682\u4e0d\u652f\u6301")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"broadcast_tables"),(0,l.kt)("td",{parentName:"tr",align:null},"array","[String]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6682\u4e0d\u652f\u6301")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table_sharding_algorithm_name"),(0,l.kt)("td",{parentName:"tr",align:null},"enum"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5206\u7247\u7b97\u6cd5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table_sharding_column"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5206\u7247\u952e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sharding_count"),(0,l.kt)("td",{parentName:"tr",align:null},"u64"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5206\u7247\u6570")))))}m.isMDXComponent=!0},6043:function(t,e,n){e.Z=n.p+"assets/images/sharding-select-b2c64fe5b2d8daae445fc8e6926055db.png"}}]);