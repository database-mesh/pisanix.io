"use strict";(self.webpackChunkpisanix=self.webpackChunkpisanix||[]).push([[6654],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>d});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),u=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=u(t.components);return n.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),c=u(a),d=r,k=c["".concat(o,".").concat(d)]||c[d]||m[d]||l;return a?n.createElement(k,i(i({ref:e},s),{},{components:a})):n.createElement(k,i({ref:e},s))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4740:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:8},i="Pisa-Daemon",p={unversionedId:"Features/traffic-qos",id:"version-v0.3.2/Features/traffic-qos",title:"Pisa-Daemon",description:"Pisa-Daemon \u662f\u7528 rust \u5b9e\u73b0\u7684\u6570\u636e\u9762\uff0c\u4e3b\u8981\u901a\u8fc7\u4e3b\u673a\u5185\u6838\u7684\u5404\u79cd\u80fd\u529b\u6765\u5b9e\u73b0\u8d44\u6e90\u7ba1\u7406\u3002",source:"@site/versioned_docs/version-v0.3.2/Features/traffic-qos.md",sourceDirName:"Features",slug:"/Features/traffic-qos",permalink:"/en/docs/v0.3.2/Features/traffic-qos",tags:[],version:"v0.3.2",lastUpdatedBy:"wangbo",lastUpdatedAt:1669358104,formattedLastUpdatedAt:"11/25/2022",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"\u6570\u636e\u5206\u7247",permalink:"/en/docs/v0.3.2/Features/sharding"},next:{title:"\u5728 Kubernetes \u4e2d\u90e8\u7f72",permalink:"/en/docs/v0.3.2/UseCases/kubernetes"}},o={},u=[{value:"trafficQoS \u914d\u7f6e",id:"trafficqos-\u914d\u7f6e",level:2},{value:"qos_group \u914d\u7f6e",id:"qos_group-\u914d\u7f6e",level:3}],s={toc:u};function m(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pisa-daemon"},"Pisa-Daemon"),(0,r.kt)("p",null,"Pisa-Daemon \u662f\u7528 rust \u5b9e\u73b0\u7684\u6570\u636e\u9762\uff0c\u4e3b\u8981\u901a\u8fc7\u4e3b\u673a\u5185\u6838\u7684\u5404\u79cd\u80fd\u529b\u6765\u5b9e\u73b0\u8d44\u6e90\u7ba1\u7406\u3002\n\u76ee\u524d\u7684\u4e3b\u8981\u529f\u80fd\u662f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8fd0\u884c\u65f6\u6d41\u91cf\u7ba1\u7406\n\u501f\u52a9 eBPF \u6280\u672f\u4e3a\u6570\u636e\u5e93\u8bbf\u95ee\u6d41\u91cf\u63d0\u4f9b QoS \u4fdd\u8bc1\uff0c\u4ee5\u51cf\u5c11\u6d41\u91cf\u4e4b\u95f4\u7684\u4e92\u76f8\u5e72\u6270\u3002")),(0,r.kt)("p",null,"Pisa-Daemon \u5373\u53ef\u4ee5\u90e8\u7f72\u5728 kubernetes \u4e2d\u4ee5 daemonset \u7684\u65b9\u5f0f\u90e8\u7f72\uff0c\u4e5f\u53ef\u4ee5\u5355\u72ec\u90e8\u7f72\u3002"),(0,r.kt)("h1",{id:"\u73b0\u72b6"},"\u73b0\u72b6"),(0,r.kt)("p",null,"\u5f53\u524d Pisa-Damon \u5b9e\u73b0\u4e86 Service \u7ea7\u522b\u7684 QoS\uff0cService \u6765\u81ea VirtualDatabase \u4e2d\u7684\u5b9a\u4e49\u3002"),(0,r.kt)("p",null,"\u4e3b\u8981\u5b9e\u73b0\u6280\u672f\u662f ebpf + tc\u3002"),(0,r.kt)("h1",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728 kubernetes \u4e2d\u90e8\u7f72\uff0c\u9700\u8981\u4f9d\u8d56 ",(0,r.kt)("inlineCode",{parentName:"li"},"QoSClaim")," CRD\uff0c Spec \u914d\u7f6e\u9879\u5982\u4e0b\uff1a")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,r.kt)("th",{parentName:"tr",align:null},"\u503c\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u4f9d\u8d56"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"trafficQoS"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#trafficQoS-%E9%85%8D%E7%BD%AE"},"object")),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"traffic qos")))),(0,r.kt)("h2",{id:"trafficqos-\u914d\u7f6e"},"trafficQoS \u914d\u7f6e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,r.kt)("th",{parentName:"tr",align:null},"\u503c\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u4f9d\u8d56"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"qos \u540d\u79f0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"qos_group"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#qos_group-%E9%85%8D%E7%BD%AE"},"object")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5177\u4f53\u5e26\u5bbd\u9650\u5236")))),(0,r.kt)("h3",{id:"qos_group-\u914d\u7f6e"},"qos_group \u914d\u7f6e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,r.kt)("th",{parentName:"tr",align:null},"\u503c\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u4f9d\u8d56"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rate"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5e26\u5bbd\u6700\u5927\u503c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ceil"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u5e26\u5bbd\u6709\u5269\u4f59\uff0c\u5e26\u5bbd\u53ef\u4ee5\u8fbe\u5230\u7684\u6700\u5927\u503c")))),(0,r.kt)("p",null,"rate \u548c ceil \u7684\u5355\u4f4d\u53ef\u4ee5\u662f"),(0,r.kt)("p",null,"bit, kbit, mbit, gbit\uff0ctbit \u8868\u793a bit/s\u3002"),(0,r.kt)("p",null,"bps\uff0ckbps, mbps, gbps, tbps \u8868\u793a bps/s\u3002"),(0,r.kt)("p",null,"\u6ce8\u610f\u70b9\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u4e86 QoSClaim \u540e\uff0c\u9700\u8981\u5728 VirtualDatabase \u4e2d\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"li"},"qosClaim")," \u4ee5\u751f\u6548\u3002"),(0,r.kt)("li",{parentName:"ul"},"trafficQos \u7684 name \u540d\u79f0\u8981\u5305\u542b\u5728 VirtualDatabase \u7684 Serivice \u4e2d\u3002")),(0,r.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.database-mesh.io/v1alpha1\nkind: QoSCliam\nmetadata:\n  name: test \n  namespace: default\nspec:\n  trafficQoS:\n    name: svc1\n    qos_group:\n      rate: 1mps\n      ceil: 2mps\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5355\u72ec\u90e8\u7f72\u914d\u7f6e\u5982\u4e0b\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'[global]\negress_device = "cali16adef18cfd"\nbridge_device = "tunl0"\n\n[[app]]\nname = "test1"\n\n[[app.service]]\nname = "test"\n[[app.service.endpoints]]\nip = "192.168.136.29"\nport = 5201\n\n[app.service.qos_group]\nrate = "5mbps"\nceil = "5mbps"\n')))}m.isMDXComponent=!0}}]);