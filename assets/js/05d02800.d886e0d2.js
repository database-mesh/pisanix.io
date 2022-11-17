"use strict";(self.webpackChunkpisanix=self.webpackChunkpisanix||[]).push([[9609],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>u});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),d=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=d(t.components);return n.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),k=d(a),u=r,N=k["".concat(o,".").concat(u)]||k[u]||m[u]||l;return a?n.createElement(N,i(i({ref:e},s),{},{components:a})):n.createElement(N,i({ref:e},s))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},1847:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:1},i="\u5728 Kubernetes \u4e2d\u90e8\u7f72",p={unversionedId:"UseCases/kubernetes",id:"UseCases/kubernetes",title:"\u5728 Kubernetes \u4e2d\u90e8\u7f72",description:"Pisanix \u7684\u4e09\u4e2a\u7ec4\u4ef6\u5728\u9879\u76ee\u89c4\u5212\u4e4b\u521d\u5373\u6309\u7167\u63a7\u5236\u9762\u914d\u5408\u591a\u6570\u636e\u9762\u7684\u5f62\u5f0f\u8fdb\u884c\u8bbe\u8ba1\uff0c\u5b83\u4eec\u90fd\u53ef\u90e8\u7f72\u5728 kubernetes \u4e4b\u4e0a\uff0c\u5e76\u901a\u8fc7 CustomResourceDefinition \u5b8c\u6210\u5404\u79cd\u914d\u7f6e\uff0c\u7531 Pisa-Controller \u8f6c\u6362\u4e3a\u76f8\u5e94\u7684\u914d\u7f6e\u540e\uff0c\u4e0b\u53d1\u7ed9 Pisa-Proxy \u6216 Pisa-Daemon\u3002",source:"@site/docs/UseCases/kubernetes.md",sourceDirName:"UseCases",slug:"/UseCases/kubernetes",permalink:"/docs/UseCases/kubernetes",tags:[],version:"current",lastUpdatedBy:"Jack",lastUpdatedAt:1664194619,formattedLastUpdatedAt:"2022/9/26",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Pisa-Daemon",permalink:"/docs/Features/traffic-qos"},next:{title:"\u5355\u72ec\u90e8\u7f72 Pisa-Proxy",permalink:"/docs/UseCases/standalone"}},o={},d=[{value:"\u524d\u671f\u51c6\u5907",id:"\u524d\u671f\u51c6\u5907",level:2},{value:"\u5b89\u88c5\u6b65\u9aa4",id:"\u5b89\u88c5\u6b65\u9aa4",level:2},{value:"\u6e90\u7801\u5b89\u88c5",id:"\u6e90\u7801\u5b89\u88c5",level:3},{value:"\u6e05\u7406",id:"\u6e05\u7406",level:3},{value:"Helm values \u914d\u7f6e\u9879\u4ecb\u7ecd",id:"helm-values-\u914d\u7f6e\u9879\u4ecb\u7ecd",level:2},{value:"CustomResourceDefinition \u5b57\u6bb5\u8bf4\u660e",id:"customresourcedefinition-\u5b57\u6bb5\u8bf4\u660e",level:2},{value:"VirtualDatabase",id:"virtualdatabase",level:3},{value:"TrafficStrategy",id:"trafficstrategy",level:3},{value:"DatabaseEndpoint",id:"databaseendpoint",level:3},{value:"Demo \u8fd0\u884c",id:"demo-\u8fd0\u884c",level:2},{value:"\u793a\u4f8b\u4e1a\u52a1\u90e8\u7f72",id:"\u793a\u4f8b\u4e1a\u52a1\u90e8\u7f72",level:3},{value:"\u4f7f\u7528 Pisanix \u5b9e\u73b0 Database Mesh \u7406\u5ff5",id:"\u4f7f\u7528-pisanix-\u5b9e\u73b0-database-mesh-\u7406\u5ff5",level:3},{value:"Pisanix \u914d\u7f6e",id:"pisanix-\u914d\u7f6e",level:4},{value:"\u5e94\u7528\u8bbf\u95ee\u6570\u636e\u5e93\u5207\u6362\u81f3 Pisanix",id:"\u5e94\u7528\u8bbf\u95ee\u6570\u636e\u5e93\u5207\u6362\u81f3-pisanix",level:4}],s={toc:d};function m(t){let{components:e,...l}=t;return(0,r.kt)("wrapper",(0,n.Z)({},s,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5728-kubernetes-\u4e2d\u90e8\u7f72"},"\u5728 Kubernetes \u4e2d\u90e8\u7f72"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Pisanix"))," \u7684\u4e09\u4e2a\u7ec4\u4ef6\u5728\u9879\u76ee\u89c4\u5212\u4e4b\u521d\u5373\u6309\u7167",(0,r.kt)("inlineCode",{parentName:"p"},"\u63a7\u5236\u9762"),"\u914d\u5408\u591a",(0,r.kt)("inlineCode",{parentName:"p"},"\u6570\u636e\u9762"),"\u7684\u5f62\u5f0f\u8fdb\u884c\u8bbe\u8ba1\uff0c\u5b83\u4eec\u90fd\u53ef\u90e8\u7f72\u5728 kubernetes \u4e4b\u4e0a\uff0c\u5e76\u901a\u8fc7 CustomResourceDefinition \u5b8c\u6210\u5404\u79cd\u914d\u7f6e\uff0c\u7531 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Pisa-Controller"))," \u8f6c\u6362\u4e3a\u76f8\u5e94\u7684\u914d\u7f6e\u540e\uff0c\u4e0b\u53d1\u7ed9 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Pisa-Proxy"))," \u6216 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Pisa-Daemon")),"\u3002"),(0,r.kt)("img",{src:"/img/kubernetes.png",width:"600",length:"600"}),(0,r.kt)("h2",{id:"\u524d\u671f\u51c6\u5907"},"\u524d\u671f\u51c6\u5907"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Helm v3.8.0+")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"kubectl 1.19+")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"kubernetes 1.19+"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u26a0\ufe0f\u26a0\ufe0f\u26a0\ufe0f\u26a0\ufe0f\uff1a\u76ee\u524d\u5df2\u5728 kubernetes 1.19+ \u548c 1.20+ \u7248\u672c\u96c6\u7fa4\u4e0a\u901a\u8fc7\u6d4b\u8bd5")),(0,r.kt)("h2",{id:"\u5b89\u88c5\u6b65\u9aa4"},"\u5b89\u88c5\u6b65\u9aa4"),(0,r.kt)("h3",{id:"\u6e90\u7801\u5b89\u88c5"},"\u6e90\u7801\u5b89\u88c5"),(0,r.kt)("p",null,"\u901a\u8fc7 Helm \u6784\u5efa\u4f9d\u8d56\u5e76\u5b89\u88c5 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Pisanix"))," \u5230 namespace ",(0,r.kt)("inlineCode",{parentName:"p"},"pisa-system")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create namespace pisa-system\n\ncd charts/pisa-controller \nhelm dependency build\ncd ..\nhelm install pisa-controller pisa-controller -n pisa-system \n")),(0,r.kt)("p",null,"Helm \u5c06\u5b89\u88c5\u5982\u4e0b\u8d44\u6e90"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"apiservice: v1alpha1.admission.database-mesh.io"),(0,r.kt)("li",{parentName:"ul"},"deployment: pisa-controller"),(0,r.kt)("li",{parentName:"ul"},"service: pisa-controller"),(0,r.kt)("li",{parentName:"ul"},"clusterrole: pisa-controller"),(0,r.kt)("li",{parentName:"ul"},"clusterrolebinding: pisa-controller"),(0,r.kt)("li",{parentName:"ul"},"customresourcedefinitions: ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"virtualdatabases.core.database-mesh.io"),(0,r.kt)("li",{parentName:"ul"},"databaseendpoints.core.database-mesh.io"),(0,r.kt)("li",{parentName:"ul"},"trafficstrategies.core.database-mesh.io")))),(0,r.kt)("h3",{id:"\u6e05\u7406"},"\u6e05\u7406"),(0,r.kt)("p",null,"\u6d4b\u8bd5\u5b8c\u6210\u540e\u4f7f\u7528 Helm \u547d\u4ee4\u5378\u8f7d ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Pisanix"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"helm uninstall pisa-controller -n pisa-system \n")),(0,r.kt)("h2",{id:"helm-values-\u914d\u7f6e\u9879\u4ecb\u7ecd"},"Helm values \u914d\u7f6e\u9879\u4ecb\u7ecd"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"replicaCount")),(0,r.kt)("td",{parentName:"tr",align:null},"Pisa-Controller \u8282\u70b9\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"image.repository")),(0,r.kt)("td",{parentName:"tr",align:null},"Pisa-Controller \u955c\u50cf\u540d"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pisanixio/controller"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"image.pullPolicy")),(0,r.kt)("td",{parentName:"tr",align:null},"Pisa-Controller \u955c\u50cf\u62c9\u53d6\u7b56\u7565"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"IfNotPresent"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"image.tag")),(0,r.kt)("td",{parentName:"tr",align:null},"Pisa-Controller \u955c\u50cf\u6807\u7b7e"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"v0.3.0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"imagePullSecrets")),(0,r.kt)("td",{parentName:"tr",align:null},"Docker \u79c1\u6709\u4ed3\u5e93\u7684\u5bc6\u94a5\uff0c\u4ee5\u6570\u7ec4\u5f62\u5f0f\u6ce8\u5165"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"proxyImage.repository")),(0,r.kt)("td",{parentName:"tr",align:null},"Pisa-Proxy \u7684\u955c\u50cf\u540d"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pisanixio/proxy"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"proxyImage.tag")),(0,r.kt)("td",{parentName:"tr",align:null},"Pisa-Proxy \u955c\u50cf\u6807\u7b7e"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"v0.3.0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"resources.limits")),(0,r.kt)("td",{parentName:"tr",align:null},"Pisa-Controller \u8d44\u6e90\u9650\u5236\u6570\u503c"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"resources.requests.cpu")),(0,r.kt)("td",{parentName:"tr",align:null},"Pisa-Controller \u8d44\u6e90\u7533\u8bf7 cpu \u6838\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"100m"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"resources.requests.memory")),(0,r.kt)("td",{parentName:"tr",align:null},"Pisa-Controller \u8d44\u6e90\u7533\u8bf7\u5185\u5b58\u6570\u91cf"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"128Mi"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"service.corePort")),(0,r.kt)("td",{parentName:"tr",align:null},"Pisa-Controller \u6838\u5fc3\u66b4\u9732\u7aef\u53e3"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"80"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"service.webhookPort")),(0,r.kt)("td",{parentName:"tr",align:null},"Pisa-Controller Webhook \u66b4\u9732\u7aef\u53e3"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"6443"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"service.proxyConfigsPort")),(0,r.kt)("td",{parentName:"tr",align:null},"Pisa-Controller \u548c Pisa-Proxy \u914d\u7f6e\u6587\u4ef6\u901a\u4fe1\u7aef\u53e3"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"8080"))))),(0,r.kt)("h2",{id:"customresourcedefinition-\u5b57\u6bb5\u8bf4\u660e"},"CustomResourceDefinition \u5b57\u6bb5\u8bf4\u660e"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u26a0\ufe0f\u26a0\ufe0f\u26a0\ufe0f\u26a0\ufe0f\uff1a \u6ce8\u610f: VirtualDatabase \u4e2d db \u5b57\u6bb5\u9700\u8981\u548c DatabaseEndpoint \u4e2d db \u5b57\u6bb5\u4fdd\u6301\u4e00\u81f4\uff0c\u5ba2\u6237\u7aef\u4e2d\u8fde\u63a5\u6307\u5b9a\u7684 schema \u9700\u8981\u548c db \u5b57\u6bb5\u4e09\u8005\u4fdd\u6301\u4e00\u81f4")),(0,r.kt)("h3",{id:"virtualdatabase"},"VirtualDatabase"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"services")),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e00\u4e2a VirtualDatabase \u7684\u8be6\u7ec6\u8bbe\u7f6e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"services.name")),(0,r.kt)("td",{parentName:"tr",align:null},"\u865a\u62df\u6570\u636e\u5e93\u540d\u5b57")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"services.trafficStrategy")),(0,r.kt)("td",{parentName:"tr",align:null},"\u865a\u62df\u6570\u636e\u5e93\u7684\u76f8\u5173\u7b56\u7565 ",(0,r.kt)("a",{parentName:"td",href:"###TrafficStrategy"},"TrafficStrategy"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"databaseMySQL")),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e00\u4e2a\u865a\u62df\u7684 MySQL \u7c7b\u578b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"host")),(0,r.kt)("td",{parentName:"tr",align:null},"\u865a\u62df MySQL Host\u5730\u5740")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"port")),(0,r.kt)("td",{parentName:"tr",align:null},"\u865a\u62df MySQL \u7aef\u53e3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"user")),(0,r.kt)("td",{parentName:"tr",align:null},"\u865a\u62df MySQL \u7528\u6237\u540d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"password")),(0,r.kt)("td",{parentName:"tr",align:null},"\u865a\u62df MySQL \u5bc6\u7801")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"db")),(0,r.kt)("td",{parentName:"tr",align:null},"\u865a\u62df MySQL schema\u540d\u5b57")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"poolSize")),(0,r.kt)("td",{parentName:"tr",align:null},"\u865a\u62df MySQL \u8fde\u63a5\u6c60\u5927\u5c0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"serverVersion")),(0,r.kt)("td",{parentName:"tr",align:null},"\u865a\u62df MySQL \u7248\u672c")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"VirtualDatabase\u7684\u540d\u79f0\u9700\u8981\u4e0e\u5e94\u7528\u540d\u79f0\u4e00\u81f4"))),(0,r.kt)("h3",{id:"trafficstrategy"},"TrafficStrategy"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"selector")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6807\u7b7e\u9009\u62e9\u5668\uff0c\u7528\u4e8e\u9009\u62e9 ",(0,r.kt)("a",{parentName:"td",href:"###DatabaseEndpoint"},"DatabaseEndpoint"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"loadBalance")),(0,r.kt)("td",{parentName:"tr",align:null},"\u8d1f\u8f7d\u5747\u8861\u5668\uff0c\u73b0\u9636\u6bb5\u652f\u6301\uff1asimpleLoadBalancer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"loadBalance.simpleLoadBalancer")),(0,r.kt)("td",{parentName:"tr",align:null},"\u57fa\u7840\u8d1f\u8f7d\u5747\u8861\u58f0\u660e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"loadBalance.simpleLoadBalancer.kind")),(0,r.kt)("td",{parentName:"tr",align:null},"\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\u7c7b\u578b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"loadBalance.readWriteSplitting")),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bfb\u5199\u5206\u79bb\u7b56\u7565\u58f0\u660e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"loadBalance.readWriteSplitting.static")),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bfb\u5199\u5206\u79bb\u7b56\u7565\u58f0\u660e\u9759\u6001\u914d\u7f6e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"loadBalance.readWriteSplitting.static.defaultTarget")),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bfb\u5199\u5206\u79bb\u7b56\u7565\u58f0\u660e\u9759\u6001\u914d\u7f6e\u9ed8\u8ba4\u540e\u7aef")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"loadBalance.readWriteSplitting.static.rules")),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bfb\u5199\u5206\u79bb\u7b56\u7565\u58f0\u660e\u9759\u6001\u89c4\u5219\u96c6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"loadBalance.readWriteSplitting.static.rules[].name")),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bfb\u5199\u5206\u79bb\u7b56\u7565\u58f0\u660e\u9759\u6001\u89c4\u5219\u540d\u79f0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"loadBalance.readWriteSplitting.static.rules[].type")),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bfb\u5199\u5206\u79bb\u7b56\u7565\u58f0\u660e\u9759\u6001\u89c4\u5219\u7c7b\u578b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"loadBalance.readWriteSplitting.static.rules[].regex[]")),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bfb\u5199\u5206\u79bb\u7b56\u7565\u58f0\u660e\u9759\u6001\u89c4\u5219\u6b63\u5219\u8868\u8fbe\u5f0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"loadBalance.readWriteSplitting.static.rules[].target")),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bfb\u5199\u5206\u79bb\u7b56\u7565\u58f0\u660e\u9759\u6001\u89c4\u5219\u76ee\u6807\u540e\u7aef")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"loadBalance.readWriteSplitting.static.rules[].algorithmName")),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bfb\u5199\u5206\u79bb\u7b56\u7565\u58f0\u660e\u9759\u6001\u89c4\u5219\u7b97\u6cd5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"circuitBreaks")),(0,r.kt)("td",{parentName:"tr",align:null},"\u65ad\u8def\u5668")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"circuitBreaks.regex[]")),(0,r.kt)("td",{parentName:"tr",align:null},"\u65ad\u8def\u6b63\u5219\u89c4\u5219, \u7c7b\u578b\u4e3a\u6570\u7ec4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"concurrencyControls")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5e76\u53d1\u63a7\u5236\u5668")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"concurrencyControls.regex[]")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5e76\u53d1\u63a7\u5236\u6b63\u5219\u89c4\u5219\uff0c\u7c7b\u578b\u4e3a\u6570\u7ec4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"concurrencyControls.duration")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5e76\u53d1\u63a7\u5236\u65f6\u5ef6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"concurrencyControls.maxConcurrency")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6700\u5927\u5e76\u53d1\u6267\u884c\u6570\u91cf")))),(0,r.kt)("h3",{id:"databaseendpoint"},"DatabaseEndpoint"),(0,r.kt)("p",null,"Spec \u914d\u7f6e\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"database")),(0,r.kt)("td",{parentName:"tr",align:null},"\u540e\u7aef\u7684\u6570\u636e\u6e90\u7c7b\u578b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MySQL")),(0,r.kt)("td",{parentName:"tr",align:null},"MySQL \u7c7b\u578b\u7684\u8be6\u7ec6\u63cf\u8ff0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"host")),(0,r.kt)("td",{parentName:"tr",align:null},"MySQL Host \u5730\u5740")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"port")),(0,r.kt)("td",{parentName:"tr",align:null},"MySQL \u7aef\u53e3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"user")),(0,r.kt)("td",{parentName:"tr",align:null},"MySQL \u7528\u6237\u540d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"password")),(0,r.kt)("td",{parentName:"tr",align:null},"MySQL \u5bc6\u7801")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"db")),(0,r.kt)("td",{parentName:"tr",align:null},"MySQL schema \u540d\u5b57")))),(0,r.kt)("p",null,"Annoations \u8bf4\u660e\n\u5728\u4f7f\u7528\u8bfb\u5199\u5206\u79bb\u914d\u7f6e\u7684\u65f6\u5019\uff0c\u9700\u8981\u5728 DatabaseEndpoint \u8d44\u6e90\u7684 Annotations \u91cc\u6dfb\u52a0\u5982\u4e0b\u6ce8\u89e3\uff0c\u6807\u8bc6\u8be5\u8282\u70b9\u7684\u89d2\u8272\u5c5e\u6027\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"annotations:\n    database-mesh.io/role: read\n")),(0,r.kt)("p",null,"\u9ed8\u8ba4\u7684\u89d2\u8272\u5c5e\u6027\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"readwrite")," "),(0,r.kt)("h2",{id:"demo-\u8fd0\u884c"},"Demo \u8fd0\u884c"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4ee5\u4e0b Demo \u5747\u5728 namespace:demotest \u4e2d\u8fd0\u884c\uff0c\u5982\u679c\u9700\u8981\u6539\u53d8 namespace\uff0c\u8bf7\u6539\u53d8\u76f8\u5e94\u7684 namespace")),(0,r.kt)("h3",{id:"\u793a\u4f8b\u4e1a\u52a1\u90e8\u7f72"},"\u793a\u4f8b\u4e1a\u52a1\u90e8\u7f72"),(0,r.kt)("p",null,"\u4ee5 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/database-mesh/microservices-demo"},"Weaveworks Socks-shop(github.com)")," \u4e3a\u8fd0\u884c\u5e94\u7528 Demo\uff0c\u4e0b\u5217\u6f14\u793a\u5c06\u5c55\u793a\u600e\u4e48\u6837\u5728 microservices-demo \u4f7f\u7528 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Pisanix"))),(0,r.kt)("p",null,"\u9996\u5148\u5229\u7528 Helm \u90e8\u7f72 microservices-demo "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/database-mesh/microservices-demo.git\nkubectl create ns demotest\ncd deploy/kubernetes/helm-chart\nhelm dependency build\ncd ..\nhelm install microservices-demo helm-chart -n demotest\n")),(0,r.kt)("p",null,"\u68c0\u67e5 Helm \u547d\u4ee4\u90e8\u7f72\u60c5\u51b5\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"socks-shop-deployed",src:a(760).Z,width:"1222",height:"274"})),(0,r.kt)("p",null,"\u7b49\u5f85\u7a0b\u5e8f\u542f\u52a8\u5e76\u770b\u5230\u5982\u4e0b\u9875\u9762\u540e\u786e\u8ba4\u5df2\u6b63\u786e\u8fd0\u884c\uff1a"),(0,r.kt)("p",null,"\u6ce8\uff1a\u5982\u679c\u524d\u9762\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"helm dependency build")," \u63d0\u793a nginx ingress \u62a5\u9519\uff0c\u53ef\u4ee5\u8df3\u8fc7\u7ee7\u7eed\u6267\u884c\u540e\u9762\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"helm install")," \u547d\u4ee4\uff0c\u6700\u7ec8\u67e5\u770b\u90e8\u7f72\u7ed3\u679c\u4f7f\u7528\u7684\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl port-forward")," \u5b50\u547d\u4ee4\u800c\u975e ",(0,r.kt)("inlineCode",{parentName:"p"},"ingress"),"\u3002 "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"socks-shop-preview",src:a(3151).Z,width:"2500",height:"1164"})),(0,r.kt)("h3",{id:"\u4f7f\u7528-pisanix-\u5b9e\u73b0-database-mesh-\u7406\u5ff5"},"\u4f7f\u7528 Pisanix \u5b9e\u73b0 Database Mesh \u7406\u5ff5"),(0,r.kt)("h4",{id:"pisanix-\u914d\u7f6e"},"Pisanix \u914d\u7f6e"),(0,r.kt)("p",null,"\u7f16\u5199\u5982\u4e0b\u4e09\u4e2a CustomResourceDefinitions\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"VirtualDatabase")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.database-mesh.io/v1alpha1\nkind: VirtualDatabase\nmetadata:\n  name: catalogue\n  namespace: demotest\nspec:\n  services:\n    - name: "mysql"\n      databaseMySQL:\n        host: "127.0.0.1"\n        port: 3306\n        user: "catalogue_user"\n        password: "default_password"\n        db: "socksdb"\n      trafficStrategy: "catalogue"\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"VirtualDatabase\u7684\u540d\u79f0\u9700\u8981\u4e0e\u5e94\u7528\u7684\u540d\u79f0\u4e00\u81f4"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"TrafficStrategy")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.database-mesh.io/v1alpha1\nkind: TrafficStrategy\nmetadata:\n  name: catalogue\n  namespace: demotest\nspec:\n  selector:\n    matchLabels:\n      source: catalogue\n  loadBalance:\n    simpleLoadBalance:\n      kind: "random"\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"DatabaseEndpoint")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.database-mesh.io/v1alpha1\nkind: DatabaseEndpoint\nmetadata:\n  name: catalogue-db\n  namespace: demotest\n  labels:\n    source: catalogue\nspec:\n  database:\n    MySQL:\n      host: "catalogue-db.demotest"\n      port: 3306\n      user: "root"\n      password: "fake_password"\n      db: "socksdb"\n')),(0,r.kt)("h4",{id:"\u5e94\u7528\u8bbf\u95ee\u6570\u636e\u5e93\u5207\u6362\u81f3-pisanix"},"\u5e94\u7528\u8bbf\u95ee\u6570\u636e\u5e93\u5207\u6362\u81f3 Pisanix"),(0,r.kt)("p",null,"\u4e3a namespace \u6dfb\u52a0\u6807\u7b7e\u4ee5\u5f00\u542f\u6ce8\u5165"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl label ns demotest pisanix.io/inject=enabled\n")),(0,r.kt)("p",null,"\u68c0\u67e5 catalogue-dep.yaml \u6216 catalogue deployment \u4ee5\u786e\u8ba4\u662f\u5426\u5df2\u6dfb\u52a0\u6807\u7b7e\u5e76\u5f00\u542f\u6ce8\u5165\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: catalogue\n  labels:\n    name: catalogue\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      name: catalogue\n  template:\n    metadata:\n      labels:\n        name: catalogue\n        pisanix.io/inject: enabled  # \u901a\u8fc7\u8be5 Label \u6807\u8bc6\u6ce8\u5165\u542f\u7528\n      {{- if .Values.istio.enabled }}\n      annotations:\n        sidecar.istio.io/rewriteAppHTTPProbers: "true"\n      {{- end }}\n    spec:\n      containers:\n      - name: catalogue\n        image: {{if .Values.global.registry}}{{ .Values.global.registry }}/{{end}}{{ .Values.catalogue.image.repo }}:{{ .Values.catalogue.image.tag }}\n        command: ["/app"]\n        args:\n        - -port={{ .Values.catalogue.containerPort }}\n        - -DSN=catalogue_user:default_password@tcp(127.0.0.1:3306)/socksdb # DSN \u4e2d\u7528\u6237\u540d\u3001\u5bc6\u7801\u3001\u4e3b\u673a\u540d\u548c\u7aef\u53e3\u90fd\u53c2\u7167 VirtualDatabase \u91cc\u7684\u4fe1\u606f\u8fdb\u884c\u4fee\u6539\n        {{- if .Values.zipkin.enabled }}\n        env:\n         - name: ZIPKIN\n           value: http://{{ .Values.zipkin.url }}:9411/api/v1/spans\n        {{- end }}\n        resources:\n{{ toYaml .Values.catalogue.resources | indent 10 }}\n        ports:\n        - containerPort: {{ .Values.catalogue.containerPort }}\n        securityContext:\n          runAsNonRoot: true\n          runAsUser: 10001\n{{- if lt (int .Values.carts.containerPort) 1024 }}\n          capabilities:\n            drop:\n              - all\n            add:\n              - NET_BIND_SERVICE\n{{- end }}\n          readOnlyRootFilesystem: true\n        livenessProbe:\n          httpGet:\n            path: /health\n            port: {{ .Values.catalogue.containerPort }}\n          initialDelaySeconds: 300\n          periodSeconds: 3\n        readinessProbe:\n          httpGet:\n            path: /health\n            port: {{ .Values.catalogue.containerPort }}\n          initialDelaySeconds: 180\n          periodSeconds: 3\n')),(0,r.kt)("p",null,"\u901a\u8fc7 Helm \u5347\u7ea7\u5e94\u7528"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"helm upgrade  microservices-demo  helm-chart -n demotest\n")),(0,r.kt)("p",null,"\u7b49\u5f85\u7a0b\u5e8f\u6b63\u5e38\u542f\u52a8\uff0c\u5e76\u6d4b\u8bd5\u8bbf\u95ee\u5373\u53ef\u9a8c\u8bc1\uff08 FRONT_END_POD_NAME \u4e3a front-end \u7684 Pod \u540d\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl port-forward pod/${FRONT_END_POD_NAME} -n demotest 8080:8079\n")))}m.isMDXComponent=!0},760:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/socks-shop-deployed-0444e081710565325aa4050e0b051711.png"},3151:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/socks-shop-preview-aa75aafc4c6205791d12718d935bb376.png"}}]);