"use strict";(self.webpackChunkpisanix=self.webpackChunkpisanix||[]).push([[225],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},744:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:1},l="Introduction",c={unversionedId:"intro",id:"intro",title:"Introduction",description:"Pisanix Pi-sanics] is a modern database governance framework for Kubernetes. Pisanix adds SQL-aware traffic control, audit, security and extension abilities to help manage various databases in the [Database Mesh(Coming Soon) way.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/intro.md",sourceDirName:".",slug:"/intro",permalink:"/en/docs/intro",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Quickstart",permalink:"/en/docs/quickstart"}},u={},p=[{value:"Highlights",id:"highlights",level:2},{value:"Features",id:"features",level:2},{value:"Database traffic governance",id:"database-traffic-governance",level:3},{value:"Observability",id:"observability",level:3},{value:"Progammable",id:"progammable",level:3},{value:"Getting Started",id:"getting-started",level:2},{value:"Documentation",id:"documentation",level:2},{value:"Community &amp; Support",id:"community--support",level:2}],d={toc:p};function m(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Pisanix")," ","[Pi-sanics]"," is a modern database governance framework for Kubernetes. Pisanix adds SQL-aware traffic control, audit, security and extension abilities to help manage various databases in the ",(0,i.kt)("a",{parentName:"p",href:"https://database-mesh.io"},"Database Mesh"),"(",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Coming Soon")),") way."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Pisanix Arch",src:n(5946).Z,width:"1210",height:"998"})),(0,i.kt)("h2",{id:"highlights"},"Highlights"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Pisanix")," has the following goals:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"SQL-Aware Traffic Governance: supports SQL traffic load balancing, access control, observability."),(0,i.kt)("li",{parentName:"ol"},"Runtime Resource-oriented Programming: supports extensible resource control abilities."),(0,i.kt)("li",{parentName:"ol"},"Database Reliability Engineering: make DBA's life easier with Kubernetes")),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("h3",{id:"database-traffic-governance"},"Database traffic governance"),(0,i.kt)("p",null,"SQL application access databases with SQL, so Pisanix will hijack all SQL traffic. This is a great opportunity to do a lot of things around traffic, like loadbalancing and SQL firewall."),(0,i.kt)("h3",{id:"observability"},"Observability"),(0,i.kt)("p",null,"In the past, metrics could be retrieved from database instances and display in kinds of charts. Now with Pisanix, DBAs could have more chances to achieve better observability."),(0,i.kt)("h3",{id:"progammable"},"Progammable"),(0,i.kt)("p",null,"For DBAs who could and would like to solve problems with programming. Pisanix supports many kinds of plugin mechanism, like Lua and Wasm. People will have the chance to 'reshape' the expected behavior of databases."),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.pisanix.io/en/docs/intro"},"Introduction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.pisanix.io/en/docs/quickstart"},"Quick Start"))),(0,i.kt)("h2",{id:"documentation"},"Documentation"),(0,i.kt)("p",null,"Full documentation will be available on the ",(0,i.kt)("a",{parentName:"p",href:"https://pisanix.io/"},"Pisanix website"),"."),(0,i.kt)("h2",{id:"community--support"},"Community & Support"),(0,i.kt)("p",null," \ud83d\udd17 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/database-mesh/pisanix/issues"},"GitHub Issues"),". Best for: larger systemic questions/bug reports or anything development related."),(0,i.kt)("p",null," \ud83d\udd17 ",(0,i.kt)("a",{parentName:"p",href:"https://join.slack.com/t/databasemesh/shared_invite/zt-12hlythpe-C4rrS1WZ2ZkEd3zn84SqeQ"},"Slack channel"),". Best for: instant communications and online meetings, sharing your applications."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Wechat User Group: Broker wechat to add you into the user group.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Wechat user group broker",src:n(1785).Z,width:"430",height:"430"})))}m.isMDXComponent=!0},5946:function(e,t,n){t.Z=n.p+"assets/images/pisanix-arch-1d3487438f6d1bb9b164a002261fb992.png"},1785:function(e,t,n){t.Z=n.p+"assets/images/wechat-user-group-broker-acbbb6ae640c89db48ec496670a1732f.jpeg"}}]);