"use strict";(self.webpackChunkpisanix=self.webpackChunkpisanix||[]).push([[2290],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return k}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),k=a,d=m["".concat(o,".").concat(k)]||m[k]||u[k]||i;return r?n.createElement(d,s(s({ref:t},p),{},{components:r})):n.createElement(d,s({ref:t},p))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<i;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3592:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),s=["components"],l={sidebar_position:2},o="MySQL \u534f\u8bae",c={unversionedId:"Features/mysql-protocol",id:"version-v0.3.0/Features/mysql-protocol",title:"MySQL \u534f\u8bae",description:"\u6b64\u529f\u80fd\u4e3b\u8981\u4e3a Pisa-Proxy MySQL \u4ee3\u7406\u7684\u6838\u5fc3\u7ec4\u4ef6, \u4f9d\u636e MySQL \u534f\u8bae \u8fdb\u884c\u5b9e\u73b0\u3002\u8be5\u529f\u80fd\u4e3b\u8981\u4f7f\u7528 Rust \u751f\u6001\u7684 Tokio \u5f02\u6b65\u8fd0\u884c\u65f6\u6846\u67b6\u3002\u5176\u4e2d\u5bf9\u7f51\u7edc\u6570\u636e\u5305\u7684\u8bfb\u5199\u3001\u534f\u8bae\u7684\u7f16\u7801\u7b49\u64cd\u4f5c\u90fd\u901a\u8fc7 Tokio \u63d0\u4f9b\u7684\u5de5\u5177\u96c6\u5b9e\u73b0\u3002",source:"@site/versioned_docs/version-v0.3.0/Features/mysql-protocol.md",sourceDirName:"Features",slug:"/Features/mysql-protocol",permalink:"/docs/v0.3.0/Features/mysql-protocol",tags:[],version:"v0.3.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u8d1f\u8f7d\u5747\u8861",permalink:"/docs/v0.3.0/Features/loadbalancer"},next:{title:"\u8bfb\u5199\u5206\u79bb",permalink:"/docs/v0.3.0/Features/readwritesplitting"}},p={},u=[{value:"\u5df2\u652f\u6301\u547d\u4ee4",id:"\u5df2\u652f\u6301\u547d\u4ee4",level:2},{value:"\u652f\u6301\u8ba4\u8bc1\u65b9\u5f0f",id:"\u652f\u6301\u8ba4\u8bc1\u65b9\u5f0f",level:2},{value:"\u8bbe\u8ba1\u8bf4\u660e",id:"\u8bbe\u8ba1\u8bf4\u660e",level:2},{value:"\u4ee3\u7801\u7ed3\u6784",id:"\u4ee3\u7801\u7ed3\u6784",level:3}],m={toc:u};function k(e){var t=e.components,r=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"mysql-\u534f\u8bae"},"MySQL \u534f\u8bae"),(0,i.kt)("p",null,"\u6b64\u529f\u80fd\u4e3b\u8981\u4e3a Pisa-Proxy MySQL \u4ee3\u7406\u7684\u6838\u5fc3\u7ec4\u4ef6, \u4f9d\u636e ",(0,i.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/internals/en/client-server-protocol.html"},"MySQL \u534f\u8bae")," \u8fdb\u884c\u5b9e\u73b0\u3002\u8be5\u529f\u80fd\u4e3b\u8981\u4f7f\u7528 Rust \u751f\u6001\u7684 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tokio-rs/tokio"},"Tokio")," \u5f02\u6b65\u8fd0\u884c\u65f6\u6846\u67b6\u3002\u5176\u4e2d\u5bf9\u7f51\u7edc\u6570\u636e\u5305\u7684\u8bfb\u5199\u3001\u534f\u8bae\u7684\u7f16\u7801\u7b49\u64cd\u4f5c\u90fd\u901a\u8fc7 Tokio \u63d0\u4f9b\u7684\u5de5\u5177\u96c6\u5b9e\u73b0\u3002"),(0,i.kt)("h2",{id:"\u5df2\u652f\u6301\u547d\u4ee4"},"\u5df2\u652f\u6301\u547d\u4ee4"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","COM_INIT_DB"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","COM_QUERY"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","COM_FIELD_LIST"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","COM_QUIT"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","COM_PING"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","COM_STMT_PREPARE"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","COM_STMT_EXECUTE"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","COM_STMT_CLOSE"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","COM_STMT_RESET ")),(0,i.kt)("h2",{id:"\u652f\u6301\u8ba4\u8bc1\u65b9\u5f0f"},"\u652f\u6301\u8ba4\u8bc1\u65b9\u5f0f"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","mysql_native_password"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","sha256_password"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","caching_sha2_password ")),(0,i.kt)("h2",{id:"\u8bbe\u8ba1\u8bf4\u660e"},"\u8bbe\u8ba1\u8bf4\u660e"),(0,i.kt)("p",null,"\u672c\u6a21\u5757\u5171\u75313\u90e8\u5206\u7ec4\u6210,\u5bf9\u5e94 Pisa-Proxy \u4e2d\u4f5c\u4e3a\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef\u4e24\u90e8\u5206\u3002\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"server")," \u76ee\u5f55\u4e2d\u4e3b\u8981\u5b9a\u4e49\u4e86 Pisa-Proxy \u4f5c\u4e3a\u670d\u52a1\u7aef\u5bf9\u5ba2\u6237\u7aef\u8bf7\u6c42\u7684\u5904\u7406\u903b\u8f91\u3002\u4e5f\u5305\u542b\u4e86\u5728 TCP \u5c42\u7684\u7f51\u7edc\u6570\u636e\u5305\u7684\u8bfb\u5199\u64cd\u4f5c\u3002\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"client")," \u76ee\u5f55\u4e2d\u5b9a\u4e49\u4e86 Pisa-Proxy \u4f5c\u4e3a\u5ba2\u6237\u7aef\u5bf9 MySQL \u6570\u636e\u5e93\u7684\u5efa\u7acb\u94fe\u63a5\u3001\u63e1\u624b\u8ba4\u8bc1\u548c\u53d1\u9001\u5ba2\u6237\u7aef\u547d\u4ee4\u7b49\u64cd\u4f5c\u3002"),(0,i.kt)("h3",{id:"\u4ee3\u7801\u7ed3\u6784"},"\u4ee3\u7801\u7ed3\u6784"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"FILES IN THIS DIRECTORY (protocol/mysql/src/client)\n    auth.rs          - \u5bf9 MySQL \u767b\u9646\u8ba4\u8bc1\n    codec.rs         - \u5bf9 MySQL \u534f\u8bae\u7684\u89e3\u7801\n    conn.rs          - \u5bf9 MySQL \u53d1\u8d77\u94fe\u63a5\u3001\u63e1\u624b\u53ca\u547d\u4ee4\u5904\u7406\n    err.rs           - MySQL Error \u7c7b\u578b\u5b9a\u4e49\n    resultset.rs     - \u4e00\u4e9b MySQL ResultSet \u7ed3\u679c\u5904\u7406\u65b9\u6cd5\n    stmt.rs          - \u5bf9 MySQL Prepare Statement \u5904\u7406\u65b9\u6cd5\n    stream.rs        - \u5bf9 Tokio TcpSteam \u5c01\u88c5\n\nFILES IN THIS DIRECTORY (protocol/mysql/src/server)\n    conn.rs          - \u548c\u5ba2\u6237\u7aef\u5efa\u94fe\u3001\u63e1\u624b\u8ba4\u8bc1\u5904\u7406\n    packet.rs        - \u7f51\u7edc\u6570\u636e\u5305\u7684\u8bfb\u5199\u64cd\u4f5c\n    stream.rs        - \u5bf9\u5e95\u5c42 Tcp \u6d41\u7684\u5c01\u88c5\n    tls.rs           - MySQL TLS \u94fe\u63a5\u5c01\u88c5\n\nFILES IN THIS DIRECTORY (protocol/mysql/src)\n    charset.rs       - MySQL \u5b57\u7b26\u96c6\u58f0\u660e\n    err.rs           - \u534f\u8bae\u89e3\u6790\u9519\u8bef\u5904\u7406\u5b9a\u4e49\n    mysql_const.rs\u3002 - \u5e38\u91cf\u5b9a\u4e49\n    util.rs          - \u4e00\u4e9b\u901a\u7528\u51fd\u6570\u7684\u5b9e\u73b0\n")))}k.isMDXComponent=!0}}]);