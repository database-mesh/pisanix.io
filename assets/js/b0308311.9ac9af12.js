"use strict";(self.webpackChunkpisanix=self.webpackChunkpisanix||[]).push([[9061],{3905:function(n,e,r){r.d(e,{Zo:function(){return d},kt:function(){return u}});var t=r(7294);function o(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function a(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function i(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function s(n,e){if(null==n)return{};var r,t,o=function(n,e){if(null==n)return{};var r,t,o={},a=Object.keys(n);for(t=0;t<a.length;t++)r=a[t],e.indexOf(r)>=0||(o[r]=n[r]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(t=0;t<a.length;t++)r=a[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(o[r]=n[r])}return o}var l=t.createContext({}),p=function(n){var e=t.useContext(l),r=e;return n&&(r="function"==typeof n?n(e):i(i({},e),n)),r},d=function(n){var e=p(n.components);return t.createElement(l.Provider,{value:e},n.children)},c={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},m=t.forwardRef((function(n,e){var r=n.components,o=n.mdxType,a=n.originalType,l=n.parentName,d=s(n,["components","mdxType","originalType","parentName"]),m=p(r),u=o,y=m["".concat(l,".").concat(u)]||m[u]||c[u]||a;return r?t.createElement(y,i(i({ref:e},d),{},{components:r})):t.createElement(y,i({ref:e},d))}));function u(n,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=n,s.mdxType="string"==typeof n?n:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1457:function(n,e,r){r.r(e),r.d(e,{assets:function(){return d},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var t=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={sidebar_position:2},l="\u5355\u72ec\u90e8\u7f72 Pisa-Proxy",p={unversionedId:"UseCases/standalone",id:"UseCases/standalone",title:"\u5355\u72ec\u90e8\u7f72 Pisa-Proxy",description:"Pisa-Proxy \u4f5c\u4e3a\u9ad8\u6027\u80fd\u4ee3\u7406\u4e0d\u4ec5\u53ef\u4ee5\u5728 kubernetes \u4e2d\u4ee5 Sidecar \u7684\u65b9\u5f0f\u90e8\u7f72\uff0c\u4e5f\u53ef\u4ee5\u4f5c\u4e3a\u7edf\u4e00\u63a5\u5165\u5c42\u5355\u72ec\u90e8\u7f72\u5728 kubernetes \u4e4b\u5916\u7684\u670d\u52a1\u5668\u4e0a\uff1a",source:"@site/docs/UseCases/standalone.md",sourceDirName:"UseCases",slug:"/UseCases/standalone",permalink:"/docs/UseCases/standalone",tags:[],version:"current",lastUpdatedBy:"Jack",lastUpdatedAt:1665403350,formattedLastUpdatedAt:"2022/10/10",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u5728 Kubernetes \u4e2d\u90e8\u7f72",permalink:"/docs/UseCases/kubernetes"}},d={},c=[{value:"\u90e8\u7f72\u8bf4\u660e",id:"\u90e8\u7f72\u8bf4\u660e",level:2},{value:"\u547d\u4ee4\u884c\u53c2\u6570",id:"\u547d\u4ee4\u884c\u53c2\u6570",level:3},{value:"\u73af\u5883\u53d8\u91cf",id:"\u73af\u5883\u53d8\u91cf",level:3},{value:"\u914d\u7f6e\u6587\u4ef6",id:"\u914d\u7f6e\u6587\u4ef6",level:3},{value:"\u90e8\u7f72\u793a\u4f8b",id:"\u90e8\u7f72\u793a\u4f8b",level:3},{value:"\u7f16\u8bd1 Pisa-Proxy",id:"\u7f16\u8bd1-pisa-proxy",level:4},{value:"\u914d\u7f6e\u540e\u7aef\u6570\u636e\u5e93\u57fa\u7840\u8d1f\u8f7d\u5747\u8861",id:"\u914d\u7f6e\u540e\u7aef\u6570\u636e\u5e93\u57fa\u7840\u8d1f\u8f7d\u5747\u8861",level:4},{value:"\u914d\u7f6e\u540e\u7aef\u6570\u636e\u5e93\u8bfb\u5199\u5206\u79bb",id:"\u914d\u7f6e\u540e\u7aef\u6570\u636e\u5e93\u8bfb\u5199\u5206\u79bb",level:4},{value:"\u914d\u7f6e\u540e\u7aef\u6570\u636e\u5e93\u52a8\u6001\u8bfb\u5199\u5206\u79bb",id:"\u914d\u7f6e\u540e\u7aef\u6570\u636e\u5e93\u52a8\u6001\u8bfb\u5199\u5206\u79bb",level:4},{value:"\u57fa\u4e8e\u5206\u7247\u952e\u7684\u5206\u7247\u914d\u7f6e\uff0c\u5355\u5e93\u5206\u8868\u573a\u666f",id:"\u57fa\u4e8e\u5206\u7247\u952e\u7684\u5206\u7247\u914d\u7f6e\u5355\u5e93\u5206\u8868\u573a\u666f",level:4},{value:"\u57fa\u4e8e\u5206\u7247\u952e\u7684\u5206\u7247\u914d\u7f6e\uff0c\u5206\u5e93\u573a\u666f",id:"\u57fa\u4e8e\u5206\u7247\u952e\u7684\u5206\u7247\u914d\u7f6e\u5206\u5e93\u573a\u666f",level:4},{value:"\u542f\u52a8 Pisa-Proxy",id:"\u542f\u52a8-pisa-proxy",level:4}],m={toc:c};function u(n){var e=n.components,s=(0,o.Z)(n,i);return(0,a.kt)("wrapper",(0,t.Z)({},m,s,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5355\u72ec\u90e8\u7f72-pisa-proxy"},"\u5355\u72ec\u90e8\u7f72 Pisa-Proxy"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Pisa-Proxy"))," \u4f5c\u4e3a\u9ad8\u6027\u80fd\u4ee3\u7406\u4e0d\u4ec5\u53ef\u4ee5\u5728 kubernetes \u4e2d\u4ee5 Sidecar \u7684\u65b9\u5f0f\u90e8\u7f72\uff0c\u4e5f\u53ef\u4ee5\u4f5c\u4e3a\u7edf\u4e00\u63a5\u5165\u5c42\u5355\u72ec\u90e8\u7f72\u5728 kubernetes \u4e4b\u5916\u7684\u670d\u52a1\u5668\u4e0a\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"single.png",src:r(8238).Z,width:"841",height:"431"})),(0,a.kt)("p",null,"\u76ee\u524d",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Pisa-Proxy")),"\u652f\u6301 MySQL \u534f\u8bae\uff0c\u65e0\u8bba\u540e\u7aef\u662f\u4e91\u4e0a\u7684 RDS \u5b9e\u4f8b\uff0c\u8fd8\u662f\u81ea\u5efa\u7684 MySQL\u3001ShardingSphere\u3001TiDB \u7b49\uff0c\u90fd\u53ef\u4ee5\u7531 Pisa-Proxy \u7edf\u4e00\u6d41\u91cf\u5206\u53d1\uff0c\u5b9e\u73b0\u65e0\u611f\u7684\u9ad8\u53ef\u7528\u5207\u6362\u3001\u9762\u5411 SQL \u7684\u53ef\u89c2\u6d4b\u6027\u7b49\u3002"),(0,a.kt)("h2",{id:"\u90e8\u7f72\u8bf4\u660e"},"\u90e8\u7f72\u8bf4\u660e"),(0,a.kt)("p",null,"Pisa-Proxy \u652f\u6301\u4ece\u914d\u7f6e\u6587\u4ef6\u548c Remote API \u83b7\u53d6\u914d\u7f6e\u3002\u76ee\u524d\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"p"},"daemon")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"sidecar")," \u4e24\u4e2a\u5b50\u547d\u4ee4\uff0c\u7528\u6765\u6307\u5b9a\u4e0d\u540c\u7684\u542f\u52a8\u65b9\u5f0f\u3002"),(0,a.kt)("h3",{id:"\u547d\u4ee4\u884c\u53c2\u6570"},"\u547d\u4ee4\u884c\u53c2\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# ./proxy --help\nPisa-Proxy -\n\nUSAGE:\n    proxy [OPTIONS] <SUBCOMMAND>\n\nOPTIONS:\n    -h, --host <host>             Http host [env: PISA_PROXY_ADMIN_LISTEN_HOST=] [default: 0.0.0.0]\n        --help                    Print help information\n        --log-level <loglevel>    Log level [env: PISA_PROXY_ADMIN_LOG_LEVEL=] [default: WARN]\n    -p, --port <port>             Http port [env: PISA_PROXY_ADMIN_LISTEN_PORT=] [default: 5591]\n    -V, --version                 Print version information\n\nSUBCOMMANDS:\n    daemon     used for standalone mode\n    help       Print this message or the help of the given subcommand(s)\n    sidecar    used for sidecar mode\n")),(0,a.kt)("p",null,"\u901a\u5e38\u5728\u5355\u673a\u90e8\u7f72\u4e2d\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"daemon")," \u5b50\u547d\u4ee4\u5e76\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"-c,--config")," \u6307\u5b9a\u914d\u7f6e\u6587\u4ef6\u8def\u5f84\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# ./proxy daemon --help\nproxy-daemon \nused for standalone mode\n\nUSAGE:\n    proxy daemon [OPTIONS]\n\nOPTIONS:\n    -c, --config <config>    Config path [default: etc/config.toml]\n    -h, --help               Print help information\n")),(0,a.kt)("p",null,"\u5728 Kubernetes \u4e2d\u4ee5 sidecar \u65b9\u5f0f\u90e8\u7f72\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"sidecar")," \u5b50\u547d\u4ee4\u4ece\u8fdc\u7a0b\u83b7\u53d6\u914d\u7f6e\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# ./proxy sidecar -h\nproxy-sidecar \nused for sidecar mode\n\nUSAGE:\n    proxy sidecar [OPTIONS]\n\nOPTIONS:\n    -h, --help\n            Print help information\n\n        --pisa-controller-host <pisa-controller-host>\n            Pisa Controller Host [env: PISA_CONTROLLER_HOST=] [default: localhost:8080]\n\n        --pisa-deployed-name <pisa-deployed-name>\n            Name [env: PISA_DEPLOYED_NAME=] [default: default]\n\n        --pisa-deployed-namespace <pisa-deployed-namespace>\n            Namespace [env: PISA_DEPLOYED_NAMESPACE=] [default: default]\n")),(0,a.kt)("h3",{id:"\u73af\u5883\u53d8\u91cf"},"\u73af\u5883\u53d8\u91cf"),(0,a.kt)("p",null,"\u73af\u5883\u53d8\u91cf\u5305\u62ec\u5982\u4e0b\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"PISA_PROXY_ADMIN_LISTEN_HOST: HTTP \u670d\u52a1\u542f\u52a8 IP"),(0,a.kt)("li",{parentName:"ol"},"PISA_PROXY_ADMIN_LISTEN_PORT: HTTP \u670d\u52a1\u542f\u52a8\u7aef\u53e3\u53f7"),(0,a.kt)("li",{parentName:"ol"},"DEFAULT_PISA_PROXY_ADMIN_LOG_LEVEL: \u65e5\u5fd7\u7ea7\u522b")),(0,a.kt)("h3",{id:"\u914d\u7f6e\u6587\u4ef6"},"\u914d\u7f6e\u6587\u4ef6"),(0,a.kt)("p",null,"Pisa-Proxy \u5728\u672c\u5730\u4f5c\u4e3a\u5355\u72ec\u90e8\u7f72\u542f\u52a8\u7684\u65f6\u5019\u9700\u8981\u4ee5\u4e0b\u914d\u7f6e\u6587\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'# api \u914d\u7f6e\u5757\uff0c\u5bf9\u5e94\u547d\u4ee4\u884c\u53c2\u6570\u548c\u73af\u5883\u53d8\u91cf\n[admin]\n# Http IP \u5730\u5740\nhost = "0.0.0.0"\n# api \u7aef\u53e3\nport = 5591\n# \u65e5\u5fd7\u7ea7\u522b\nlog_level = "INFO"\n\n# pisa-proxy \u4ee3\u7406\u914d\u7f6e\u5757\n[proxy]\n# config a proxy\n[[proxy.config]]\n# proxy \u4ee3\u7406\u5730\u5740\nlisten_addr = "0.0.0.0:9088"\n# proxy \u8ba4\u8bc1\u7528\u6237\u540d\nuser = "root"\n# proxy \u8ba4\u8bc1\u5bc6\u7801\npassword = "12345678"\n# proxy schema\ndb = "test"\n# \u914d\u7f6e\u540e\u7aef\u6570\u636e\u6e90\u7c7b\u578b\nbackend_type = "mysql"\n# proxy \u4e0e\u540e\u7aef\u6570\u636e\u5e93\u5efa\u8fde\u8fde\u63a5\u6c60\u5927\u5c0f\uff0c\u503c\u8303\u56f4\uff1a1 ~ 255, \u9ed8\u8ba4\u503c\uff1a64\npool_size = 3\n# \u670d\u52a1\u7aef\u7248\u672c\nserver_version = "5.7.37"\n\n# \u540e\u7aef\u8d1f\u8f7d\u5747\u8861\u914d\u7f6e\n# \u57fa\u7840\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\n[proxy.config.simple_loadbalance]\n# \u8d1f\u8f7d\u5747\u8861\u7b97\u6cd5\uff1a[random/roundrobin], \u9ed8\u8ba4\u503c: random \u7b97\u6cd5\nbalance_type = "random"\n# \u9009\u62e9\u6302\u8f7d\u540e\u7aef\u8282\u70b9\nnodes = ["ds001"]\n\n# \u8bfb\u5199\u5206\u79bb\u7b56\u7565\n[proxy.config.read_write_splitting]\n# \u8bfb\u5199\u5206\u79bb\u7b56\u7565\u9759\u6001\u6a21\u5f0f\n[proxy.config.read_write_splitting.static]\ndefault_target = "readwrite"\n\n# \u8bfb\u5199\u5206\u79bb\u7b56\u7565\u9759\u6001\u89c4\u5219\n[[proxy.config.read_write_splitting.static.rule]]\nname = "read-rule"\ntype = "regex"\nregex = ["^select"]\ntarget = "read"\nalgorithm_name = "random"\n\n[[proxy.config.read_write_splitting.static.rule]]\nname = "write-rule"\ntype = "regex"\nregex = ["^create","^update","^insert","^delete"]\ntarget = "readwrite"\nalgorithm_name = "roundrobin"\n\n# \u5e76\u53d1\u63a7\u5236\u89c4\u5219\n[[proxy.config.plugin.concurrency_control]]\nregex = ["aaa"]\nmax_concurrency = 5\nduration = 333\n\n# \u65ad\u8def\u5668\u89c4\u5219\n[[proxy.config.plugin.circuit_break]]\nregex = ["111"]\n\n# \u540e\u7aef\u6570\u636e\u6e90\u914d\u7f6e\n[mysql]\n[[mysql.node]]\n# \u6570\u636e\u6e90 name\nname = "ds001"\n# database name\ndb = ""\n# \u6570\u636e\u5e93 user\nuser = "root"\n# \u6570\u636e\u5e93 password\npassword = "root"\n# \u6570\u636e\u5e93\u5730\u5740\nhost = "127.0.0.1"\n# \u6570\u636e\u5e93\u7aef\u53e3\nport = 3307\n# \u6570\u636e\u5e93\u5c5e\u6027, \u9ed8\u8ba4\u53ef\u9009 "read" \u6216 "readwrite"\nrole = "read" \n\n[[mysql.node]]\n# \u6570\u636e\u6e90 name\nname = "ds002"\n# database name\ndb = ""\n# \u6570\u636e\u5e93 user\nuser = "root"\n# \u6570\u636e\u5e93 password\npassword = "root"\n# \u6570\u636e\u5e93\u5730\u5740\nhost = "127.0.0.1"\n# \u6570\u636e\u5e93\u7aef\u53e3\nport = 3307\n# \u6570\u636e\u5e93\u5c5e\u6027\uff0c\u9ed8\u8ba4\u53ef\u9009 "read" \u6216 "readwrite"\nrole = "readwrite"\n')),(0,a.kt)("h3",{id:"\u90e8\u7f72\u793a\u4f8b"},"\u90e8\u7f72\u793a\u4f8b"),(0,a.kt)("h4",{id:"\u7f16\u8bd1-pisa-proxy"},"\u7f16\u8bd1 Pisa-Proxy"),(0,a.kt)("p",null,"\u9996\u5148\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"pisa-proxy")," \u76ee\u5f55\u4e2d\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"make build")," \u5373\u53ef\u7f16\u8bd1\u5f97\u5230\u4e8c\u8fdb\u5236\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"pisa-proxy"),"\u3002\u6ce8\u610f\uff0c\u9996\u6b21\u7f16\u8bd1\u66f4\u65b0 Crates \u8017\u65f6\u8f83\u957f\u3002"),(0,a.kt)("h4",{id:"\u914d\u7f6e\u540e\u7aef\u6570\u636e\u5e93\u57fa\u7840\u8d1f\u8f7d\u5747\u8861"},"\u914d\u7f6e\u540e\u7aef\u6570\u636e\u5e93\u57fa\u7840\u8d1f\u8f7d\u5747\u8861"),(0,a.kt)("p",null,"\u7136\u540e\u53c2\u8003\u5982\u4e0b\u793a\u4f8b\uff0c\u914d\u7f6e\u591a\u4e2a\u4ee3\u7406\u6216\u540e\u7aef\u6570\u636e\u5e93\u8d1f\u8f7d\u5747\u8861\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'[admin]\nlog_level = "INFO"\n\n[proxy]\n[[proxy.config]]\nlisten_addr = "0.0.0.0:9088"\nuser = "root"\npassword = "12345678"\ndb = "test"\nbackend_type = "mysql"\npool_size = 3\n\n[proxy.config.simple_loadbalance]\nbalance_type = "random"\nnodes = ["ds001"]\n\n[proxy]\n[[proxy.config]]\nlisten_addr = "0.0.0.0:9089"\nuser = "root"\npassword = "root"\ndb = "test"\nbackend_type = "mysql"\npool_size = 3\n\n[proxy.config.simple_loadbalance]\nbalance_type = "random"\nnodes = ["ds001"]\n\n[mysql]\n[[mysql.node]]\nname = "ds001"\ndb = "test"\nuser = "root"\npassword = "root"\nhost = "127.0.0.1"\nport = 3307\n')),(0,a.kt)("h4",{id:"\u914d\u7f6e\u540e\u7aef\u6570\u636e\u5e93\u8bfb\u5199\u5206\u79bb"},"\u914d\u7f6e\u540e\u7aef\u6570\u636e\u5e93\u8bfb\u5199\u5206\u79bb"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'[admin]\nlog_level = "INFO"\n\n[proxy]\n[[proxy.config]]\nlisten_addr = "0.0.0.0:9089"\nuser = "root"\npassword = "root"\ndb = "test"\nbackend_type = "mysql"\npool_size = 3\n\n[proxy.config.read_write_splitting]\n[proxy.config.read_write_splitting.static]\ndefault_target = "read"\n\n# \u901a\u7528\u8def\u7531\u89c4\u5219\n[[proxy.config.read_write_splitting.static.rule]]\nname = "read-rule"\ntype = "generic"\nalgorithm_name = "random"\n\n# \u57fa\u4e8e\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u8def\u7531\u89c4\u5219\n[[proxy.config.read_write_splitting.static.rule]]\nname = "read-rule"\ntype = "regex"\nregex = [".*"]\ntarget = "read"\nalgorithm_name = "random"\n\n# \u57fa\u4e8e\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u8def\u7531\u89c4\u5219\n[[proxy.config.read_write_splitting.static.rule]]\nname = "write-rule"\ntype = "regex"\nregex = [".*"]\ntarget = "readwrite"\nalgorithm_name = "roundrobin"\n\n[mysql]\n[[mysql.node]]\nname = "ds001"\ndb = "test"\nuser = "root"\npassword = "root"\nhost = "127.0.0.1"\nport = 3307\nrole = "read"\n\n[[mysql.node]]\nname = "ds002"\ndb = "test"\nuser = "root"\npassword = "root"\nhost = "127.0.0.1"\nport = 3308\nrole = "readwrite"\n')),(0,a.kt)("h4",{id:"\u914d\u7f6e\u540e\u7aef\u6570\u636e\u5e93\u52a8\u6001\u8bfb\u5199\u5206\u79bb"},"\u914d\u7f6e\u540e\u7aef\u6570\u636e\u5e93\u52a8\u6001\u8bfb\u5199\u5206\u79bb"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'[admin]\nlog_level = "INFO"\n\n[proxy]\n[[proxy.config]]\nlisten_addr = "0.0.0.0:9089"\nuser = "root"\npassword = "root"\ndb = "test"\nbackend_type = "mysql"\npool_size = 3\n\n[proxy.config.read_write_splitting]\n\n[proxy.config.read_write_splitting.dynamic]\ndefault_target = "readwrite"\n\n[proxy.config.read_write_splitting.dynamic.discovery]\ntype = "mha"\nuser = "root"\npassword = "12345678"\nmonitor_period = 1\nconnect_period = 100\nconnect_timeout = 600\nconnect_failure_threshold = 1\nping_period = 100\nping_timeout = 300\nping_failure_threshold = 1\nreplication_lag_period = 100\nreplication_lag_timeout = 600\nreplication_lag_failure_threshold = 1\nmax_replication_lag = 3\nread_only_period = 100\nread_only_timeout = 600\nread_only_failure_threshold = 1\n\n# \u901a\u7528\u8def\u7531\u89c4\u5219\n[[proxy.config.read_write_splitting.static.rule]]\nname = "read-rule"\ntype = "generic"\nalgorithm_name = "random"\n\n# \u57fa\u4e8e\u6b63\u5219\u7684\u8def\u7531\u89c4\u5219\n[[proxy.config.read_write_splitting.dynamic.rule]]\nname = "write-rule"\ntype = "regex"\nregex = ["^insert"]\ntarget = "readwrite"\nalgorithm_name = "roundrobin"\n\n[[proxy.config.read_write_splitting.dynamic.rule]]\nname = "read-rule"\ntype = "regex"\nregex = ["^select"]\ntarget = "read"\nalgorithm_name = "roundrobin"\n\n[mysql]\n[[mysql.node]]\nname = "ds001"\ndb = "test"\nuser = "root"\npassword = "root"\nhost = "127.0.0.1"\nport = 3307\nrole = "read"\n\n[[mysql.node]]\nname = "ds002"\ndb = "test"\nuser = "root"\npassword = "root"\nhost = "127.0.0.1"\nport = 3308\nrole = "readwrite"\n')),(0,a.kt)("h4",{id:"\u57fa\u4e8e\u5206\u7247\u952e\u7684\u5206\u7247\u914d\u7f6e\u5355\u5e93\u5206\u8868\u573a\u666f"},"\u57fa\u4e8e\u5206\u7247\u952e\u7684\u5206\u7247\u914d\u7f6e\uff0c\u5355\u5e93\u5206\u8868\u573a\u666f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'# api \u914d\u7f6e\u5757\uff0c\u5bf9\u5e94\u547d\u4ee4\u884c\u53c2\u6570\u548c\u73af\u5883\u53d8\u91cf\n[admin]\n# api \u5730\u5740\nhost = "0.0.0.0"\n# api \u7aef\u53e3\nport = 8082\n# \u65e5\u5fd7\u7ea7\u522b\nlog_level = "INFO"\n\n# pisa-proxy \u4ee3\u7406\u914d\u7f6e\u5757\n[proxy]\n# config a proxy\n[[proxy.config]]\n# proxy \u4ee3\u7406\u5730\u5740\nlisten_addr = "0.0.0.0:9088"\n# proxy \u8ba4\u8bc1\u7528\u6237\u540d\nuser = "root"\n# proxy \u8ba4\u8bc1\u5bc6\u7801\npassword = "12345678"\n# proxy schema\ndb = "test_shard"\n# \u914d\u7f6e\u540e\u7aef\u6570\u636e\u6e90\u7c7b\u578b\nbackend_type = "mysql"\n# proxy \u4e0e\u540e\u7aef\u6570\u636e\u5e93\u5efa\u8fde\u8fde\u63a5\u6c60\u5927\u5c0f\uff0c\u503c\u8303\u56f4\uff1a1 ~ 255, \u9ed8\u8ba4\u503c\uff1a64\npool_size = 3\n# \u670d\u52a1\u7aef\u7248\u672c\nserver_version = ""\n\n[proxy.config.simple_loadbalance]\nbalance_type = "random"\nnodes = ["ds001"]\n\n# \u5206\u7247\u914d\u7f6e\n[[proxy.config.sharding]]\n# \u903b\u8f91\u8868\u540d\ntable_name = "t_order"\n# \u540e\u7aef\u8282\u70b9, \u5bf9\u5e94 mysql.node \u7684 name\nactual_datanodes = ["ds001"]\n# \u6682\u4e0d\u652f\u6301\nbinding_tables = []\n# \u6682\u4e0d\u652f\u6301\nbroadcast_tables = []\n\n# \u5355\u5e93\u5206\u8868\n[proxy.config.sharding.table_strategy]\n# \u5206\u7247\u7b97\u6cd5\u540d\ntable_sharding_algorithm_name = "mod"\n# \u5206\u7247\u952e\ntable_sharding_column = "id"\n# \u5206\u7247\u6570\nsharding_count = 4\n\n# \u540e\u7aef\u6570\u636e\u6e90\u914d\u7f6e\n[mysql]\n[[mysql.node]]\n# \u6570\u636e\u6e90 name\nname = "ds001"\n# database name\ndb = "test_shard"\n# \u6570\u636e\u5e93 user\nuser = "root"\n# \u6570\u636e\u5e93 password\npassword = "12345678"\n# \u6570\u636e\u5e93\u5730\u5740\nhost = "127.0.0.1"\n# \u6570\u636e\u5e93\u7aef\u53e3\nport = 3306\n# \u8d1f\u8f7d\u5747\u8861\u8282\u70b9\u6743\u91cd\nweight = 1\n# \u540e\u7aef\u6570\u636e\u6e90\u89d2\u8272\nrole = "read"\n')),(0,a.kt)("h4",{id:"\u57fa\u4e8e\u5206\u7247\u952e\u7684\u5206\u7247\u914d\u7f6e\u5206\u5e93\u573a\u666f"},"\u57fa\u4e8e\u5206\u7247\u952e\u7684\u5206\u7247\u914d\u7f6e\uff0c\u5206\u5e93\u573a\u666f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'# api \u914d\u7f6e\u5757\uff0c\u5bf9\u5e94\u547d\u4ee4\u884c\u53c2\u6570\u548c\u73af\u5883\u53d8\u91cf\n[admin]\n# api \u5730\u5740\nhost = "0.0.0.0"\n# api \u7aef\u53e3\nport = 8082\n# \u65e5\u5fd7\u7ea7\u522b\nlog_level = "INFO"\n\n# pisa-proxy \u4ee3\u7406\u914d\u7f6e\u5757\n[proxy]\n# config a proxy\n[[proxy.config]]\n# proxy \u4ee3\u7406\u5730\u5740\nlisten_addr = "0.0.0.0:9088"\n# proxy \u8ba4\u8bc1\u7528\u6237\u540d\nuser = "root"\n# proxy \u8ba4\u8bc1\u5bc6\u7801\npassword = "12345678"\n# proxy schema\ndb = "test_shard"\n# \u914d\u7f6e\u540e\u7aef\u6570\u636e\u6e90\u7c7b\u578b\nbackend_type = "mysql"\n# proxy \u4e0e\u540e\u7aef\u6570\u636e\u5e93\u5efa\u8fde\u8fde\u63a5\u6c60\u5927\u5c0f\uff0c\u503c\u8303\u56f4\uff1a1 ~ 255, \u9ed8\u8ba4\u503c\uff1a64\npool_size = 3\n# \u670d\u52a1\u7aef\u7248\u672c\nserver_version = ""\n\n[proxy.config.simple_loadbalance]\nbalance_type = "random"\nnodes = ["ds001", "ds002"]\n\n# \u5206\u7247\u914d\u7f6e\n[[proxy.config.sharding]]\n# \u903b\u8f91\u8868\u540d\ntable_name = "t_order"\n# \u540e\u7aef\u8282\u70b9, \u5bf9\u5e94 mysql.node \u7684 name\nactual_datanodes = ["ds001"]\n# \u6682\u4e0d\u652f\u6301\nbinding_tables = []\n# \u6682\u4e0d\u652f\u6301\nbroadcast_tables = []\n\n# \u5206\u5e93\u914d\u7f6e\n[proxy.config.sharding.database_strategy]\n# \u5206\u7247\u7b97\u6cd5\uff0c mod | crc32_mod\ndatabase_sharding_algorithm_name = "mod" \n# \u5206\u7247\u952e\ndatabase_sharding_column = "id"\n\n# \u5206\u7247\u914d\u7f6e\n[mysql]\n[[mysql.node]]\n# \u6570\u636e\u6e90 name\nname = "ds001"\n# database name\ndb = "test_shard"\n# \u6570\u636e\u5e93 user\nuser = "root"\n# \u6570\u636e\u5e93 password\npassword = "12345678"\n# \u6570\u636e\u5e93\u5730\u5740\nhost = "127.0.0.1"\n# \u6570\u636e\u5e93\u7aef\u53e3\nport = 3306\n# \u8d1f\u8f7d\u5747\u8861\u8282\u70b9\u6743\u91cd\nweight = 1\n# \u540e\u7aef\u6570\u636e\u6e90\u89d2\u8272\nrole = "read"\n\n[[mysql.node]]\n# \u6570\u636e\u6e90 name\nname = "ds002"\n# database name\ndb = "test_shard"\n# \u6570\u636e\u5e93 user\nuser = "root"\n# \u6570\u636e\u5e93 password\npassword = "12345678"\n# \u6570\u636e\u5e93\u5730\u5740\nhost = "127.0.0.1"\n# \u6570\u636e\u5e93\u7aef\u53e3\nport = 3308\n# \u8d1f\u8f7d\u5747\u8861\u8282\u70b9\u6743\u91cd\nweight = 1\n# \u540e\u7aef\u6570\u636e\u6e90\u89d2\u8272\nrole = "read"\n')),(0,a.kt)("h4",{id:"\u542f\u52a8-pisa-proxy"},"\u542f\u52a8 Pisa-Proxy"),(0,a.kt)("p",null,"\u8fd9\u91cc\u5047\u8bbe\u914d\u7f6e\u6587\u4ef6\u5b58\u653e\u8def\u5f84\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"examples/example-config.toml"),"\uff0c\u6700\u540e\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u5373\u53ef\u5b8c\u6210\u542f\u52a8\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"/bin/proxy daemon -c examples/example-config.toml\n")),(0,a.kt)("p",null,"\u5f53\u89c2\u5bdf\u65e5\u5fd7\u786e\u8ba4 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Pisa-Proxy"))," \u542f\u52a8\u540e\u5373\u53ef\u8fdb\u884c\u8bbf\u95ee\u3002"))}u.isMDXComponent=!0},8238:function(n,e,r){e.Z=r.p+"assets/images/single-b33d2c8fd40d86198ea10d6dfa71ee0d.png"}}]);