"use strict";(self.webpackChunkpisanix=self.webpackChunkpisanix||[]).push([[168],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return c}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(a),c=r,g=u["".concat(s,".").concat(c)]||u[c]||d[c]||i;return a?n.createElement(g,l(l({ref:t},m),{},{components:a})):n.createElement(g,l({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6194:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),l=["components"],o={slug:"releasev011",title:"Pisanix v0.1.1 Released !",authors:["Maxwell","Jiandong","Bo","Zhuo"],tags:["pisanix","v0.1.1"]},s=void 0,p={permalink:"/blog/releasev011",source:"@site/blog/2022-06-28-release-v011.md",title:"Pisanix v0.1.1 Released !",description:"Pisanix v0.1.1 is now released three weeks after Pisanix v0.1.0 was released. This new version supports read/write splitting and fixes some problems of the old version.",date:"2022-06-28T00:00:00.000Z",formattedDate:"2022\u5e746\u670828\u65e5",tags:[{label:"pisanix",permalink:"/blog/tags/pisanix"},{label:"v0.1.1",permalink:"/blog/tags/v-0-1-1"}],readingTime:4.08,truncated:!1,authors:[{name:"Maxwell Miao",title:"Founder of Pisanix",url:"https://github.com/mlycore",imageURL:"https://github.com/mlycore.png",key:"Maxwell"},{name:"Jiandong Wu",title:"Maintainer of Pisanix",url:"https://github.com/xuanyuan300",imageURL:"https://i.imgur.com/aQBGA3H_d.webp?maxwidth=760&fidelity=grand",key:"Jiandong"},{name:"Bo Wang",title:"Maintainer of Pisanix",url:"https://github.com/wbtlb",imageURL:"https://avatars.githubusercontent.com/u/12859337?s=400&u=a7a03e467206e9b248b75fd57f681da7ce2caa34&v=4",key:"Bo"},{name:"Zhuo Li",title:"Maintainer of Pisanix",url:"https://github.com/windghoul",imageURL:"https://raw.githubusercontent.com/windghoul/imagestorge/master/1-200403142639406.jpeg",key:"Zhuo"}],frontMatter:{slug:"releasev011",title:"Pisanix v0.1.1 Released !",authors:["Maxwell","Jiandong","Bo","Zhuo"],tags:["pisanix","v0.1.1"]},prevItem:{title:"Pisanix v0.2.0 Released !",permalink:"/blog/releasev020"},nextItem:{title:"Hello! Pisanix!",permalink:"/blog/greetings"}},m={authorsImageUrls:[void 0,void 0,void 0,void 0]},d=[{value:"Pisanix v0.1.1 Description",id:"pisanix-v011-description",level:2},{value:"New Features",id:"new-features",level:3},{value:"Improvements",id:"improvements",level:3},{value:"Others",id:"others",level:3},{value:"Introducing Read-Write Splitting",id:"introducing-read-write-splitting",level:2},{value:"Read-Write Splitting Configuration",id:"read-write-splitting-configuration",level:3},{value:"Static read-write splitting configuration",id:"static-read-write-splitting-configuration",level:4},{value:"Read-Write Splitting Rule Description",id:"read-write-splitting-rule-description",level:4},{value:"Sample",id:"sample",level:3},{value:"Community Call",id:"community-call",level:2}],u={toc:d};function c(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Pisanix v0.1.1 is now released three weeks after Pisanix v0.1.0 was released. This new version supports read/write splitting and fixes some problems of the old version."),(0,i.kt)("h2",{id:"pisanix-v011-description"},"Pisanix v0.1.1 Description"),(0,i.kt)("h3",{id:"new-features"},"New Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Pisa -Controller",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Add ReadWriteSplitting configuration to TrafficStrategy CRD"))),(0,i.kt)("li",{parentName:"ul"},"Pisa-Proxy",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Introduce MetricsManager and MetricsCollector, laying a foundation for processing Metrics later."),(0,i.kt)("li",{parentName:"ul"},"Add sql_under_processingmetric as Gauge, referring to the number of SQL under processing"),(0,i.kt)("li",{parentName:"ul"},"Support static read-write splitting rules"),(0,i.kt)("li",{parentName:"ul"},"Support TCL statement parsing"),(0,i.kt)("li",{parentName:"ul"},"Add show databases,show tables, and create database statements parsing")))),(0,i.kt)("h3",{id:"improvements"},"Improvements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Pisa-Controller",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Fix ApiService json parsing error, resulting in that namespace cannot be deleted. #34"),(0,i.kt)("li",{parentName:"ul"},"Support Regex array for CircuitBreak, ConcurrencyControl and ReadWriteSplitting. #123 #124"),(0,i.kt)("li",{parentName:"ul"},"Rename sidecar name to pisa-proxy. #72"),(0,i.kt)("li",{parentName:"ul"},"Add default host as 0.0.0.0 and port as 3306 to MySQL type VirtualDatabase. #68"),(0,i.kt)("li",{parentName:"ul"},"Add server_version to Pisa-Proxy, referring to the MySQL version. #111"))),(0,i.kt)("li",{parentName:"ul"},"Pisa-Proxy",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Support default admin port as 5591, which can be used to obtain metrics. #121"),(0,i.kt)("li",{parentName:"ul"},"Fix the packet processing exceptions when the PREPARE statement is too long. #73"),(0,i.kt)("li",{parentName:"ul"},"Fix SQL parsing ability. #98 #104")))),(0,i.kt)("h3",{id:"others"},"Others"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Docs",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The first blog\uff1a",(0,i.kt)("a",{parentName:"li",href:"https://www.pisanix.io/blog"},"https://www.pisanix.io/blog")),(0,i.kt)("li",{parentName:"ul"},"Update CRD description\uff1a",(0,i.kt)("a",{parentName:"li",href:"https://www.pisanix.io/docs/v0.1.1/UseCases/kubernetes"},"https://www.pisanix.io/docs/v0.1.1/UseCases/kubernetes")),(0,i.kt)("li",{parentName:"ul"},"Add read-write splitting description\uff1a",(0,i.kt)("a",{parentName:"li",href:"https://www.pisanix.io/docs/v0.1.1/Features/readwritesplitting"},"https://www.pisanix.io/docs/v0.1.1/Features/readwritesplitting")),(0,i.kt)("li",{parentName:"ul"},"Add versions: For now, v0.1.0 and v0.1.1 documents are available."))),(0,i.kt)("li",{parentName:"ul"},"Charts",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Update to 0.1.1")))),(0,i.kt)("h2",{id:"introducing-read-write-splitting"},"Introducing Read-Write Splitting"),(0,i.kt)("p",null,"Read-write splitting is one of the most commonly used MySQL solutions in the industry. In actual scenarios, it can improve query performance and reduce server load. The general structure is as follows:"),(0,i.kt)("p",null,"Read-write splitting is  part of the traffic strategies in Pisa-Proxy."),(0,i.kt)("p",null,"Currently, Pisa-Proxy supports two kinds of read-write splitting solutions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Static read-write splitting: no backend awareness of database role change."),(0,i.kt)("li",{parentName:"ul"},"Dynamic read-write splitting (coming): backend awareness of the primary and secondary databases change.")),(0,i.kt)("p",null,"Currently, both solutions require the configuration of read-write splitting rules. The read-write splitting rule refers to that Pisa-Proxy needs to match the SQL statement queried with the configured rule. If the match succeeds, the SQL statement is routed to the corresponding node according to the rule. If the match fails, the SQL statement is routed to the configured default node."),(0,i.kt)("p",null,"There are several concepts included\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Node: the backend database node."),(0,i.kt)("li",{parentName:"ul"},"RulesMatch: The RulesMatch engine matches the SQL query statements received by Pisa-Proxy by the compiled rule set."),(0,i.kt)("li",{parentName:"ul"},"TargetRole: The TargetRole group matched by the rule matching engine. Each TargetRole group may contain one or more nodes."),(0,i.kt)("li",{parentName:"ul"},"LoadBalance: The load balancer module will select an appropriate node from the TargetRole group according to corresponding algorithms."),(0,i.kt)("li",{parentName:"ul"},"TargetInstance: nodes selected from the LoadBalance module.")),(0,i.kt)("p",null,"The implementation logic is as follows: "),(0,i.kt)("h3",{id:"read-write-splitting-configuration"},"Read-Write Splitting Configuration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Property"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Value Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Dependency or not"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default Value"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Implication"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"static"),(0,i.kt)("td",{parentName:"tr",align:"center"},"object"),(0,i.kt)("td",{parentName:"tr",align:"center"},"No"),(0,i.kt)("td",{parentName:"tr",align:"center"},"No"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Static R/W splitting type")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"dynamic"),(0,i.kt)("td",{parentName:"tr",align:"center"},"object"),(0,i.kt)("td",{parentName:"tr",align:"center"},"No"),(0,i.kt)("td",{parentName:"tr",align:"center"},"No"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Dynamic R/W splitting configuration")))),(0,i.kt)("h4",{id:"static-read-write-splitting-configuration"},"Static read-write splitting configuration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Property"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Value Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Dependency or not"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default Value"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Implication"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"defaultTarget"),(0,i.kt)("td",{parentName:"tr",align:"center"},"enum"),(0,i.kt)("td",{parentName:"tr",align:"center"},"No"),(0,i.kt)("td",{parentName:"tr",align:"center"},"No"),(0,i.kt)("td",{parentName:"tr",align:"center"},"The target group of default routing")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"rules"),(0,i.kt)("td",{parentName:"tr",align:"center"},"array{rule}"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"No"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Read-write splitting rule")))),(0,i.kt)("h4",{id:"read-write-splitting-rule-description"},"Read-Write Splitting Rule Description"),(0,i.kt)("p",null,"Currently, read-write splitting rules can only be matched through RegEx. The rule configuration description is as follows: "),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Property"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Value Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Dependency or not"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default Value"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Implication"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"name"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"No"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Rule name")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"type"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"No"),(0,i.kt)("td",{parentName:"tr",align:"center"},"The routing type belongs to RegEx, and the value here is regex.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"regex"),(0,i.kt)("td",{parentName:"tr",align:"center"},"array{string}"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"No"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Specific regex, used to match SQL statements")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"target"),(0,i.kt)("td",{parentName:"tr",align:"center"},"enum"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"No"),(0,i.kt)("td",{parentName:"tr",align:"center"},"The TargetRole group that is routed to, corresponding to the value of database-mesh.io/role in DatabaseEndpoint Annotations.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"algorithmName"),(0,i.kt)("td",{parentName:"tr",align:"center"},"enum"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"No"),(0,i.kt)("td",{parentName:"tr",align:"center"},"The name of the load balancer algorithm used for the machine lists that are routed to the role group.")))),(0,i.kt)("p",null,"Note: the Enum values above are respectively: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"TargetRole Enum value",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"read"),(0,i.kt)("li",{parentName:"ul"},"readwrite"))),(0,i.kt)("li",{parentName:"ul"},"algorithName Enum value",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"random"),(0,i.kt)("li",{parentName:"ul"},"roundrobin")))),(0,i.kt)("h3",{id:"sample"},"Sample"),(0,i.kt)("p",null,"The configuration of a complete TrafficStrategy CRD is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.database-mesh.io/v1alpha1\nkind: TrafficStrategy\nmetadata:\n  name: test \n  namespace: default \nspec:\n  selector:\n    matchLabels:\n      source: test\n  loadBalance:\n    readWriteSplitting:\n      static:  \n        defaultTarget: read # or readwrite\n        rules:\n          - name: read-rule\n            type: regex\n            regex:\n              - "^select"\n            target: read # readwrite\n            algorithmName: random # lb algorithm\n          - name: write-rule\n            type: regex\n            regex:\n              - "^insert"\n            target: readwrite\n            algorithmName: roundrobin\n')),(0,i.kt)("p",null,"The configuration of a complete DatabaseEndpoint CRD is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.database-mesh.io/v1alpha1\nkind: DatabaseEndpoint\nmetadata:\n  annotations:\n    database-mesh.io/role: read # or readwrite\n  labels:\n    source: test \n  name: mysql \n  namespace: default \nspec:\n  database:\n    MySQL:\n      db: test \n      host: mysql.default \n      password: root \n      port: 3306\n      user: root\n")),(0,i.kt)("h2",{id:"community-call"},"Community Call"),(0,i.kt)("p",null,"The new version contains 47 PRs and thanks to all the contributors:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"mlycore"),(0,i.kt)("li",{parentName:"ul"},"xuanyuan300"),(0,i.kt)("li",{parentName:"ul"},"wbtlb"),(0,i.kt)("li",{parentName:"ul"},"tuichenchuxin"),(0,i.kt)("li",{parentName:"ul"},"windghoul"),(0,i.kt)("li",{parentName:"ul"},"TeslaCN")),(0,i.kt)("p",null,"\ud83d\udd17Download link\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://github.com/database-mesh/pisanix/releases/tag/v0.1.1"},"https://github.com/database-mesh/pisanix/releases/tag/v0.1.1")),(0,i.kt)("p",null,"Building an open source community needs help from everywhere, no matter it's code or documentation, issues or pull requests, community thanks all of your efforts."),(0,i.kt)("p",null,"At present, there are some ways to join the community:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"}),(0,i.kt)("th",{parentName:"tr",align:"left"}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Mailing List"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://groups.google.com/g/database-mesh"},"https://groups.google.com/g/database-mesh"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Dev Meetings (Starting Feb 16th, 2022), Bi-weekly Wednesday 9:00AM PST"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://meet.google.com/yhv-zrby-pyt"},"https://meet.google.com/yhv-zrby-pyt"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Dev Meetings APAC Friendly (Starting April 27th, 2022), Bi-weekly APAC Wednesday 9:00PM GMT+8"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://meeting.tencent.com/dm/6UXDMNsHBVQO"},"https://meeting.tencent.com/dm/6UXDMNsHBVQO"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Wechat Broker"),(0,i.kt)("td",{parentName:"tr",align:"left"},"pisanix")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Slack"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://join.slack.com/t/databasemesh/shared_invite/zt-19rhvnxkz-USjZ~am~ghd_Q0q~8bAJXA"},"https://join.slack.com/t/databasemesh/shared_invite/zt-19rhvnxkz-USjZ~am~ghd_Q0q~8bAJXA"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Meetings Notes"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://bit.ly/39Fqt3x"},"https://bit.ly/39Fqt3x"))))),(0,i.kt)("p",null,"Feel free to talk !"))}c.isMDXComponent=!0}}]);