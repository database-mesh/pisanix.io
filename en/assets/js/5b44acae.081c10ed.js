"use strict";(self.webpackChunkpisanix=self.webpackChunkpisanix||[]).push([[9225],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>m});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var l=r.createContext({}),p=function(t){var e=r.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},c=function(t){var e=p(t.components);return r.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),u=p(a),m=n,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return a?r.createElement(h,o(o({ref:e},c),{},{components:a})):r.createElement(h,o({ref:e},c))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:n,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},744:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const i={sidebar_position:1},o="Introduction",s={unversionedId:"intro",id:"intro",title:"Introduction",description:"Pisanix Pi-sanics] is a modern database governance framework for Kubernetes. Pisanix adds SQL-aware traffic control, audit, security and extension abilities to help manage various databases in the [Database Mesh way.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/intro.md",sourceDirName:".",slug:"/intro",permalink:"/en/docs/intro",tags:[],version:"current",lastUpdatedBy:"liyao",lastUpdatedAt:1657267204,formattedLastUpdatedAt:"7/8/2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Quickstart",permalink:"/en/docs/quickstart"}},l={},p=[{value:"Database traffic governance",id:"database-traffic-governance",level:2},{value:"Observability",id:"observability",level:2},{value:"Programmable",id:"programmable",level:2}],c={toc:p};function d(t){let{components:e,...i}=t;return(0,n.kt)("wrapper",(0,r.Z)({},c,i,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Pisanix")," ","[Pi-sanics]"," is a modern database governance framework for Kubernetes. Pisanix adds SQL-aware traffic control, audit, security and extension abilities to help manage various databases in the ",(0,n.kt)("a",{parentName:"p",href:"https://www.database-mesh.io"},"Database Mesh")," way."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Pisanix Arch",src:a(4835).Z,width:"1210",height:"998"})),(0,n.kt)("h1",{id:"highlights"},"Highlights"),(0,n.kt)("p",null,"Pisanix has the following goals:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"SQL-Aware Traffic Control: supports SQL traffic load balancing, access control, observability."),(0,n.kt)("li",{parentName:"ul"},"Runtime Resource-oriented Programming: supports extensible resource control abilities."),(0,n.kt)("li",{parentName:"ul"},"Database Reliability Engineering: make DBA's life easier with Kubernetes")),(0,n.kt)("h1",{id:"features"},"Features"),(0,n.kt)("h2",{id:"database-traffic-governance"},"Database traffic governance"),(0,n.kt)("p",null,"Applications access databases with SQL, so Pisanix will hijack all SQL traffic. This is a great opportunity to do a lot of things around traffic, like loadbalancing and SQL firewall."),(0,n.kt)("h2",{id:"observability"},"Observability"),(0,n.kt)("p",null,"In the past, metrics could be retrieved from database instances and display in kinds of charts. Now with Pisanix, DBAs could have more chances to achieve better observability."),(0,n.kt)("h2",{id:"programmable"},"Programmable"),(0,n.kt)("p",null,"For DBAs who could and would like to solve problems with programming. Pisanix supports many kinds of plugin mechanism, like Lua and Wasm. People will have the chance to 'reshape' the expected behavior of databases."),(0,n.kt)("h1",{id:"getting-started"},"Getting Started"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.pisanix.io/docs"},"Introduction")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.pisanix.io/docs/quickstart"},"Quick Start"))),(0,n.kt)("h1",{id:"documentation"},"Documentation"),(0,n.kt)("p",null,"Full documentation will be available on the ",(0,n.kt)("a",{parentName:"p",href:"https://www.pisanix.io/"},"Pisanix website"),"."),(0,n.kt)("h1",{id:"community--support"},"Community & Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"}),(0,n.kt)("th",{parentName:"tr",align:"left"}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Mailing List"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://groups.google.com/g/database-mesh"},"https://groups.google.com/g/database-mesh"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Dev Meetings (Starting Feb 16th, 2022), Bi-weekly Wednesday 9:00AM PST"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://meet.google.com/yhv-zrby-pyt"},"https://meet.google.com/yhv-zrby-pyt"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Dev Meetings APAC Friendly (Starting April 27th, 2022), Bi-weekly APAC Wednesday 9:00PM GMT+8"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://meeting.tencent.com/dm/6UXDMNsHBVQO"},"https://meeting.tencent.com/dm/6UXDMNsHBVQO"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Wechat Broker"),(0,n.kt)("td",{parentName:"tr",align:"left"},"pisanix")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Slack"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://join.slack.com/t/databasemesh/shared_invite/zt-19rhvnxkz-USjZ~am~ghd_Q0q~8bAJXA"},"https://join.slack.com/t/databasemesh/shared_invite/zt-19rhvnxkz-USjZ~am~ghd_Q0q~8bAJXA"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Meetings Notes"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://bit.ly/39Fqt3x"},"https://bit.ly/39Fqt3x"))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Wechat User Group: Broker wechat to add you into the user group.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Wechat user group broker",src:a(3244).Z,width:"430",height:"430"})))}d.isMDXComponent=!0},4835:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/pisanix-arch-1d3487438f6d1bb9b164a002261fb992.png"},3244:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/wechat-user-group-broker-acbbb6ae640c89db48ec496670a1732f.jpeg"}}]);