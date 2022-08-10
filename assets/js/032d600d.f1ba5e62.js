"use strict";(self.webpackChunkpisanix=self.webpackChunkpisanix||[]).push([[2902],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=i,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3523:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),o=["components"],s={slug:"greetings",title:"Hello! Pisanix!",authors:["Maxwell","Jiandong","Bo","Zhuo"],tags:["pisanix","v0.1.0"]},l=void 0,p={permalink:"/blog/greetings",source:"@site/blog/2022-04-25-greetings.md",title:"Hello! Pisanix!",description:"June 6th, 2022, Pisanix announced its first release v0.1.0.",date:"2022-04-25T00:00:00.000Z",formattedDate:"2022\u5e744\u670825\u65e5",tags:[{label:"pisanix",permalink:"/blog/tags/pisanix"},{label:"v0.1.0",permalink:"/blog/tags/v-0-1-0"}],readingTime:5.9,truncated:!1,authors:[{name:"Maxwell Miao",title:"Founder of Pisanix",url:"https://github.com/mlycore",imageURL:"https://github.com/mlycore.png",key:"Maxwell"},{name:"Jiandong Wu",title:"Maintainer of Pisanix",url:"https://github.com/xuanyuan300",imageURL:"https://i.imgur.com/aQBGA3H_d.webp?maxwidth=760&fidelity=grand",key:"Jiandong"},{name:"Bo Wang",title:"Maintainer of Pisanix",url:"https://github.com/wbtlb",imageURL:"https://avatars.githubusercontent.com/u/12859337?s=400&u=a7a03e467206e9b248b75fd57f681da7ce2caa34&v=4",key:"Bo"},{name:"Zhuo Li",title:"Maintainer of Pisanix",url:"https://github.com/windghoul",imageURL:"https://raw.githubusercontent.com/windghoul/imagestorge/master/1-200403142639406.jpeg",key:"Zhuo"}],frontMatter:{slug:"greetings",title:"Hello! Pisanix!",authors:["Maxwell","Jiandong","Bo","Zhuo"],tags:["pisanix","v0.1.0"]},prevItem:{title:"Pisanix v0.1.1 Released !",permalink:"/blog/releasev011"}},c={authorsImageUrls:[void 0,void 0,void 0,void 0]},u=[{value:"Who is Pisanix ?",id:"who-is-pisanix-",level:2},{value:"Pisa-Controller",id:"pisa-controller",level:3},{value:"Pisa-Proxy",id:"pisa-proxy",level:3},{value:"Pisa-Daemon",id:"pisa-daemon",level:3},{value:"What does Maintainers say ?",id:"what-does-maintainers-say-",level:2},{value:"What&#39;s new in v0.1.0",id:"whats-new-in-v010",level:2},{value:"Features",id:"features",level:3},{value:"Pisa-Controller",id:"pisa-controller-1",level:4},{value:"Setup",id:"setup",level:5},{value:"Configuration conversion",id:"configuration-conversion",level:5},{value:"Pisa-Proxy",id:"pisa-proxy-1",level:4},{value:"Setup",id:"setup-1",level:5},{value:"Runtime",id:"runtime",level:5},{value:"Observability",id:"observability",level:5},{value:"What can I do with Pisanix ?",id:"what-can-i-do-with-pisanix-",level:2},{value:"VirtualDatabase",id:"virtualdatabase",level:3},{value:"TrafficStrategy",id:"trafficstrategy",level:3},{value:"DatabaseEndpoint",id:"databaseendpoint",level:3},{value:"How about the next steps ?",id:"how-about-the-next-steps-",level:2},{value:"Community Call",id:"community-call",level:2}],d={toc:u};function m(e){var t=e.components,s=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"June 6th, 2022, Pisanix announced its first release v0.1.0."),(0,r.kt)("p",null,"As the first open source project of ",(0,r.kt)("a",{parentName:"p",href:"https://www.database-mesh.io"},"Database Mesh 2.0"),", Pisanix follows the core concepts that ",(0,r.kt)("inlineCode",{parentName:"p"},"building an efficient and programmable database governance experience in cloud native era")," from the very beginning. This means Pisanix really hope to help Database Mesh grow to an achievable framework. "),(0,r.kt)("h2",{id:"who-is-pisanix-"},"Who is Pisanix ?"),(0,r.kt)("p",null,"Pisanix is the open source solution for Database Mesh, which composes of three different components: ",(0,r.kt)("inlineCode",{parentName:"p"},"Pisa-Controller"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Pisa-Proxy")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Pisa-Daemon"),"(",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Coming Soon")),"), and is sponsored by ",(0,r.kt)("a",{parentName:"p",href:"https://www.sphere-ex.com"},"SphereEx"),"."),(0,r.kt)("p",null,"Written with Golang and Rustlang, Pisanix is going to build an experience that support SQL aware traffic management, runtime oriented resource programming and Database Reliability Engineering."),(0,r.kt)("p",null,"Like classical Service Mesh deployment pattern, Pisanix also contains a ",(0,r.kt)("inlineCode",{parentName:"p"},"control-plane")," which is ",(0,r.kt)("inlineCode",{parentName:"p"},"Pisa-Controller"),", and two ",(0,r.kt)("inlineCode",{parentName:"p"},"data-plane")," which is ",(0,r.kt)("inlineCode",{parentName:"p"},"Pisa-Proxy")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Pisa-Daemon"),". "),(0,r.kt)("img",{src:"/img/pisanix-arch-blog.png",width:"600",length:"600"}),(0,r.kt)("h3",{id:"pisa-controller"},"Pisa-Controller"),(0,r.kt)("p",null,"Act as the required part of Pisanix, Pisa-Controller is responsible for:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sidecar injection: Using MutatingAdmissionWebhook inject sidecar to selected Pods"),(0,r.kt)("li",{parentName:"ul"},"Pisa-Proxy configuration conversion: Retrieve service discovery, load balance, concurrency control, SQL circuit break configs in CRDs and convert them to Pisa-Proxy configurations"),(0,r.kt)("li",{parentName:"ul"},"Pisa-Daemon configuration conversion: Retrieve traffic QoS configs in CRDs and convert them to Pisa-Daemon configurations")),(0,r.kt)("h3",{id:"pisa-proxy"},"Pisa-Proxy"),(0,r.kt)("p",null,"Pisa-Proxy is the core part of Pisanix, working as a high-performance proxy for different protocols. Currently supports:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SQL traffic control: Traffic load balance, concurrency control and"),(0,r.kt)("li",{parentName:"ul"},"Access Control: Fine-grained access control rule according to user and data relationship"),(0,r.kt)("li",{parentName:"ul"},"Circuit break: Reject high risk SQL execution"),(0,r.kt)("li",{parentName:"ul"},"Observability: Metrics about SQL processing: latency\u3001throughput")),(0,r.kt)("h3",{id:"pisa-daemon"},"Pisa-Daemon"),(0,r.kt)("p",null,"Pisa-Daemon is optional and will be release soon. Features like runtime resource management, such as providing traffic QoS with the help of eBPF is what Pisa-Daemon care about. "),(0,r.kt)("h2",{id:"what-does-maintainers-say-"},"What does Maintainers say ?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/mlycore"},"Maxwell"),': "Thanks to the cloud native ecosystem and all of the open source projects. We have learned a lot from the community, and now we get the chance to do something, that is Pisanix. The core motivation of Pisanix is to help, help developers, SREs and DBAs, and also help databases. This makes Pisanix a very meaningful infrastructure software. Thanks for your attention and support."'),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/xuanyuan300"},"Jiandong"),': "Pisanix is a concrete practice of the Database Mesh idea. It is a project with great potential. As a nascent community, I hope everyone can participate and witness our growth together."'),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/wbtlb"},"Bo"),': "Pisanix is a set of governance frameworks in the database DRE project. This framework is all-encompassing. It not only provides users in different scenarios such as developer-facing and DBA, but also provides rich thinking in the field of software design for colleagues in different area. Friends are very welcomed to join the community and build it together."'),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/windghoul"},"Zhuo"),': "As an emerging project that implements DRE ideas and realizes database-mesh design. Pisanix provides developers, DBAs, and SREs with unlimited possibilities. There will be more designs and inspirations presented to you in the future. I wish everyone will continue to pay attention, build together, and complete this idea."'),(0,r.kt)("h2",{id:"whats-new-in-v010"},"What's new in v0.1.0"),(0,r.kt)("p",null,"This is the first release of ",(0,r.kt)("inlineCode",{parentName:"p"},"Pisanix"),"."),(0,r.kt)("h3",{id:"features"},"Features"),(0,r.kt)("h4",{id:"pisa-controller-1"},"Pisa-Controller"),(0,r.kt)("h5",{id:"setup"},"Setup"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Label-based sidecar injection")),(0,r.kt)("h5",{id:"configuration-conversion"},"Configuration conversion"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Kubernetes CRD conversion to Pisa-Proxy configurations, including ",(0,r.kt)("inlineCode",{parentName:"li"},"VirtualDatabase"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"TrafficStrategy"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"DatabaseEndpoint")," ")),(0,r.kt)("h4",{id:"pisa-proxy-1"},"Pisa-Proxy"),(0,r.kt)("h5",{id:"setup-1"},"Setup"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Retrieve configuration from Pisa-Controller")),(0,r.kt)("h5",{id:"runtime"},"Runtime"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Support multiple proxy runtimes speaking MySQL protocol"),(0,r.kt)("li",{parentName:"ul"},"Support connection pool and basic loadbalancing strategy"),(0,r.kt)("li",{parentName:"ul"},"Support ",(0,r.kt)("inlineCode",{parentName:"li"},"Yacc")," based SQL parser: SELECT, INSERT, UPDATE, DELETE, PREPARE, EXECUTE, BEGIN and SET."),(0,r.kt)("li",{parentName:"ul"},"Support ",(0,r.kt)("inlineCode",{parentName:"li"},"Regex")," based SQL circuit break"),(0,r.kt)("li",{parentName:"ul"},"Support ",(0,r.kt)("inlineCode",{parentName:"li"},"Regex")," based SQL concurrency control")),(0,r.kt)("h5",{id:"observability"},"Observability"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Supoort basic observability",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sql_processed_total")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sql_processed_duration"))))),(0,r.kt)("h2",{id:"what-can-i-do-with-pisanix-"},"What can I do with Pisanix ?"),(0,r.kt)("p",null,"Database Mesh designs with these building blocks and terminology below:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Virtual Database: A database endpoint could be consumed by application"),(0,r.kt)("li",{parentName:"ul"},"Traffic Strategy: Various strategy for database traffic, such as load balancing, sharding, rate limit and circuit breaker"),(0,r.kt)("li",{parentName:"ul"},"Access Control: Providing fine-grained admission mechanism"),(0,r.kt)("li",{parentName:"ul"},"Security Claim: Claim for security enhance mechanism, such as encryption"),(0,r.kt)("li",{parentName:"ul"},"Audit Request: Request for user operation audit"),(0,r.kt)("li",{parentName:"ul"},"Observability: Provide a config for observability of databases"),(0,r.kt)("li",{parentName:"ul"},"Event Bus: Sink database change events to external systems"),(0,r.kt)("li",{parentName:"ul"},"QoS Claim: Porviding several object guarantee for databases"),(0,r.kt)("li",{parentName:"ul"},"Backup Job: Database backup jobs"),(0,r.kt)("li",{parentName:"ul"},"Schema Pipeline: Using pipeline for versioned schema changing")),(0,r.kt)("p",null,"Pisanix introduced CustomResourceDefinition including ",(0,r.kt)("inlineCode",{parentName:"p"},"VirtualDatabase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Traffic Strategy")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"DatabaseEndpoint")," as workloads. And this is a example of Weaveworks ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/microservices-demo/microservices-demo"},"Socks-shop"),". "),(0,r.kt)("h3",{id:"virtualdatabase"},"VirtualDatabase"),(0,r.kt)("p",null,"VirtualDatabase is the root concept for every database governance actions in Pisanix. To developers, VirtualDatabase is represented as a database endpoint. For DBAs, VirtualDatabase is some kind of a logical database, so they need to provide some traffic strategy and bind it to a real backend database endpoint."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.database-mesh.io/v1alpha1\nkind: VirtualDatabase\nmetadata:\n  name: catalogue\n  namespace: default\nspec:\n  services:\n  - databaseMySQL:               # Declare a MySQL database \n      db: socksdb                # Declare the schema \n      host: 127.0.0.1            \n      port: 3306                 \n      user: catalogue_user       \n      password: default_password \n    name: mysql                  \n    trafficStrategy: catalogue   # The target traffic strategy for the database \n")),(0,r.kt)("h3",{id:"trafficstrategy"},"TrafficStrategy"),(0,r.kt)("p",null,"TrafficStrategy defines how the SQL requests will be routed to the real database endpoint, strategies like loadbalance, concurrency control, circuit break are supported now."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.database-mesh.io/v1alpha1\nkind: TrafficStrategy\nmetadata:\n  name: catalogue\n  namespace: default\nspec:\n  loadBalance:                   \n    simpleLoadBalance:           # A simple load balance strategy\n      kind: random               # support random as selection algorithm \n  selector:\n    matchLabels:                 # Declare the label selector to choose the backend database\n      source: catalogue\n")),(0,r.kt)("h3",{id:"databaseendpoint"},"DatabaseEndpoint"),(0,r.kt)("p",null,"Database Endpoint refers to a real database endpoint, no matter it's endpoint of AWS RDS, a MySQL instance, or ShardingSphere. Virtual Database consumes several DatabaseEndpoint with TrafficStrategy."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.database-mesh.io/v1alpha1\nkind: DatabaseEndpoint\nmetadata:\n  name: catalogue-db\n  namespace: default\nspec:\n  database:\n    MySQL:                        # Declare the database type MySQL \n      db: socksdb                 \n      host: cataloguedb.codtynlacssn.rds.cn-northwest-1.amazonaws.com.cn\n      port: 3306                  \n      user: root                  \n      password: fake_password    \n")),(0,r.kt)("p",null,"Now the working flow is like :"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Developers submit their need of database as VirtualDatabase"),(0,r.kt)("li",{parentName:"ol"},"DBAs create and bind TrafficStrategy with DatabaseEndpoint"),(0,r.kt)("li",{parentName:"ol"},"SREs add labels ",(0,r.kt)("inlineCode",{parentName:"li"},"pisanix.io/inject=enabled")," to the application and update the configuration with credentials stored in VirtualDatabase.")),(0,r.kt)("p",null,"After the application is running, we can checkout the Socks-shop website as below:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(6290).Z,width:"1280",height:"755"})),(0,r.kt)("h2",{id:"how-about-the-next-steps-"},"How about the next steps ?"),(0,r.kt)("p",null,"As we can see that Pisanix is very young, and have a definitely long way to run. In the next, we will first enhance the ability of traffic governance, like adding data sharding, data access behavior auditing, runtime resource Qos, etc. And we also continuously improving the performance and operability of Pisanix. More extensions mechanism like plugins will be in the future, help users to build their own solution very easily."),(0,r.kt)("h2",{id:"community-call"},"Community Call"),(0,r.kt)("p",null,"Building an open source community needs help from everywhere, no matter it's code or documentation, issues or pull requests, community thanks all of your efforts."),(0,r.kt)("p",null,"At present, there are some ways to join the community:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"}),(0,r.kt)("th",{parentName:"tr",align:"left"}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Mailing List"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://groups.google.com/g/database-mesh"},"https://groups.google.com/g/database-mesh"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Dev Meetings (Starting Feb 27th, 2022), Bi-weekly Wednesday 9:00AM PST"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://meet.google.com/yhv-zrby-pyt"},"https://meet.google.com/yhv-zrby-pyt"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Dev Meetings APAC Friendly (Starting April 27th, 2022), Bi-weekly APAC Wednesday 9:00PM GMT+8"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://meeting.tencent.com/dm/6UXDMNsHBVQO"},"https://meeting.tencent.com/dm/6UXDMNsHBVQO"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Wechat Broker"),(0,r.kt)("td",{parentName:"tr",align:"left"},"pisanix")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Slack"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://join.slack.com/t/databasemesh/shared_invite/zt-19rhvnxkz-USjZ~am~ghd_Q0q~8bAJXA"},"https://join.slack.com/t/databasemesh/shared_invite/zt-19rhvnxkz-USjZ~am~ghd_Q0q~8bAJXA"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Meetings Notes"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://bit.ly/39Fqt3x"},"https://bit.ly/39Fqt3x"))))),(0,r.kt)("p",null,"Feel free to talk !"))}m.isMDXComponent=!0},6290:function(e,t,a){t.Z=a.p+"assets/images/socks-shop-02b12f5d82de9172b1d8aa199837eaaf.png"}}]);