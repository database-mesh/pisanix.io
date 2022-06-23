"use strict";(self.webpackChunkpisanix=self.webpackChunkpisanix||[]).push([[836],{4641:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"greetings","metadata":{"permalink":"/en/blog/greetings","source":"@site/blog/2022-04-25-greetings.md","title":"Hello! Pisanix!","description":"June 6th, 2022, Pisanix announced its first release v0.1.0.","date":"2022-04-25T00:00:00.000Z","formattedDate":"April 25, 2022","tags":[{"label":"pisanix","permalink":"/en/blog/tags/pisanix"},{"label":"v0.1.0","permalink":"/en/blog/tags/v-0-1-0"}],"readingTime":5.9,"truncated":false,"authors":[{"name":"Maxwell Miao","title":"Founder of Pisanix","url":"https://github.com/mlycore","imageURL":"https://github.com/mlycore.png","key":"Maxwell"},{"name":"Jiandong Wu","title":"Maintainer of Pisanix","url":"https://github.com/xuanyuan300","imageURL":"https://i.imgur.com/aQBGA3H_d.webp?maxwidth=760&fidelity=grand","key":"Jiandong"},{"name":"Bo Wang","title":"Maintainer of Pisanix","url":"https://github.com/wbtlb","imageURL":"https://avatars.githubusercontent.com/u/12859337?s=400&u=a7a03e467206e9b248b75fd57f681da7ce2caa34&v=4","key":"Bo"},{"name":"Zhuo Li","title":"Maintainer of Pisanix","url":"https://github.com/windghoul","imageURL":"https://raw.githubusercontent.com/windghoul/imagestorge/master/1-200403142639406.jpeg","key":"Zhuo"}],"frontMatter":{"slug":"greetings","title":"Hello! Pisanix!","authors":["Maxwell","Jiandong","Bo","Zhuo"],"tags":["pisanix","v0.1.0"]}},"content":"June 6th, 2022, Pisanix announced its first release v0.1.0.\\n\\nAs the first open source project of [Database Mesh 2.0](https://www.database-mesh.io), Pisanix follows the core concepts that `building an efficient and programmable database governance experience in cloud native era` from the very beginning. This means Pisanix really hope to help Database Mesh grow to an achievable framework. \\n\\n## Who is Pisanix ?\\n\\nPisanix is the open source solution for Database Mesh, which composes of three different components: `Pisa-Controller`, `Pisa-Proxy` and `Pisa-Daemon`(***Coming Soon***), and is sponsored by [SphereEx](https://www.sphere-ex.com).\\n\\nWritten with Golang and Rustlang, Pisanix is going to build an experience that support SQL aware traffic management, runtime oriented resource programming and Database Reliability Engineering.\\n\\nLike classical Service Mesh deployment pattern, Pisanix also contains a `control-plane` which is `Pisa-Controller`, and two `data-plane` which is `Pisa-Proxy` and `Pisa-Daemon`. \\n\\n <img src=\\"/img/pisanix-arch-blog.png\\" width=\\"600\\" length=\\"600\\"/>\\n\\n### Pisa-Controller\\n\\nAct as the required part of Pisanix, Pisa-Controller is responsible for:\\n\\n* Sidecar injection: Using MutatingAdmissionWebhook inject sidecar to selected Pods\\n* Pisa-Proxy configuration conversion: Retrieve service discovery, load balance, concurrency control, SQL circuit break configs in CRDs and convert them to Pisa-Proxy configurations\\n* Pisa-Daemon configuration conversion: Retrieve traffic QoS configs in CRDs and convert them to Pisa-Daemon configurations\\n\\n### Pisa-Proxy\\n\\nPisa-Proxy is the core part of Pisanix, working as a high-performance proxy for different protocols. Currently supports:\\n* SQL traffic control: Traffic load balance, concurrency control and\\n* Access Control: Fine-grained access control rule according to user and data relationship\\n* Circuit break: Reject high risk SQL execution\\n* Observability: Metrics about SQL processing: latency\u3001throughput\\n\\n### Pisa-Daemon\\n\\nPisa-Daemon is optional and will be release soon. Features like runtime resource management, such as providing traffic QoS with the help of eBPF is what Pisa-Daemon care about. \\n\\n## What does Maintainers say ?\\n\\n[Maxwell](https://github.com/mlycore): \\"Thanks to the cloud native ecosystem and all of the open source projects. We have learned a lot from the community, and now we get the chance to do something, that is Pisanix. The core motivation of Pisanix is to help, help developers, SREs and DBAs, and also help databases. This makes Pisanix a very meaningful infrastructure software. Thanks for your attention and support.\\"\\n\\n[Jiandong](https://github.com/xuanyuan300): \\"Pisanix is a concrete practice of the Database Mesh idea. It is a project with great potential. As a nascent community, I hope everyone can participate and witness our growth together.\\"\\n\\n[Bo](https://github.com/wbtlb): \\"Pisanix is a set of governance frameworks in the database DRE project. This framework is all-encompassing. It not only provides users in different scenarios such as developer-facing and DBA, but also provides rich thinking in the field of software design for colleagues in different area. Friends are very welcomed to join the community and build it together.\\"\\n\\n[Zhuo](https://github.com/windghoul): \\"As an emerging project that implements DRE ideas and realizes database-mesh design. Pisanix provides developers, DBAs, and SREs with unlimited possibilities. There will be more designs and inspirations presented to you in the future. I wish everyone will continue to pay attention, build together, and complete this idea.\\"\\n\\n## What\'s new in v0.1.0\\nThis is the first release of `Pisanix`.\\n\\n### Features\\n\\n#### Pisa-Controller\\n##### Setup\\n* Label-based sidecar injection\\n##### Configuration conversion \\n* Kubernetes CRD conversion to Pisa-Proxy configurations, including `VirtualDatabase`, `TrafficStrategy`, `DatabaseEndpoint` \\n\\n#### Pisa-Proxy\\n##### Setup\\n* Retrieve configuration from Pisa-Controller\\n\\n##### Runtime\\n* Support multiple proxy runtimes speaking MySQL protocol\\n* Support connection pool and basic loadbalancing strategy\\n* Support `Yacc` based SQL parser: SELECT, INSERT, UPDATE, DELETE, PREPARE, EXECUTE, BEGIN and SET.\\n* Support `Regex` based SQL circuit break\\n* Support `Regex` based SQL concurrency control\\n\\n##### Observability\\n* Supoort basic observability\\n  * `sql_processed_total`\\n  * `sql_processed_duration`\\n\\n\\n## What can I do with Pisanix ?\\n\\nDatabase Mesh designs with these building blocks and terminology below:\\n* Virtual Database: A database endpoint could be consumed by application\\n* Traffic Strategy: Various strategy for database traffic, such as load balancing, sharding, rate limit and circuit breaker\\n* Access Control: Providing fine-grained admission mechanism\\n* Security Claim: Claim for security enhance mechanism, such as encryption\\n* Audit Request: Request for user operation audit\\n* Observability: Provide a config for observability of databases\\n* Event Bus: Sink database change events to external systems\\n* QoS Claim: Porviding several object guarantee for databases\\n* Backup Job: Database backup jobs\\n* Schema Pipeline: Using pipeline for versioned schema changing\\n\\nPisanix introduced CustomResourceDefinition including `VirtualDatabase`, `Traffic Strategy` and `DatabaseEndpoint` as workloads. And this is a example of Weaveworks [Socks-shop](https://github.com/microservices-demo/microservices-demo). \\n\\n### VirtualDatabase\\nVirtualDatabase is the root concept for every database governance actions in Pisanix. To developers, VirtualDatabase is represented as a database endpoint. For DBAs, VirtualDatabase is some kind of a logical database, so they need to provide some traffic strategy and bind it to a real backend database endpoint.\\n\\n```yaml\\napiVersion: core.database-mesh.io/v1alpha1\\nkind: VirtualDatabase\\nmetadata:\\n  name: catalogue\\n  namespace: default\\nspec:\\n  services:\\n  - databaseMySQL:               # Declare a MySQL database \\n      db: socksdb                # Declare the schema \\n      host: 127.0.0.1            \\n      port: 3306                 \\n      user: catalogue_user       \\n      password: default_password \\n    name: mysql                  \\n    trafficStrategy: catalogue   # The target traffic strategy for the database \\n```\\n\\n\\n### TrafficStrategy\\n\\nTrafficStrategy defines how the SQL requests will be routed to the real database endpoint, strategies like loadbalance, concurrency control, circuit break are supported now.\\n\\n```yaml\\napiVersion: core.database-mesh.io/v1alpha1\\nkind: TrafficStrategy\\nmetadata:\\n  name: catalogue\\n  namespace: default\\nspec:\\n  loadBalance:                   \\n    simpleLoadBalance:           # A simple load balance strategy\\n      kind: random               # support random as selection algorithm \\n  selector:\\n    matchLabels:                 # Declare the label selector to choose the backend database\\n      source: catalogue\\n```\\n\\n### DatabaseEndpoint\\n\\nDatabase Endpoint refers to a real database endpoint, no matter it\'s endpoint of AWS RDS, a MySQL instance, or ShardingSphere. Virtual Database consumes several DatabaseEndpoint with TrafficStrategy.\\n\\n```yaml\\napiVersion: core.database-mesh.io/v1alpha1\\nkind: DatabaseEndpoint\\nmetadata:\\n  name: catalogue-db\\n  namespace: default\\nspec:\\n  database:\\n    MySQL:                        # Declare the database type MySQL \\n      db: socksdb                 \\n      host: cataloguedb.codtynlacssn.rds.cn-northwest-1.amazonaws.com.cn\\n      port: 3306                  \\n      user: root                  \\n      password: fake_password    \\n```\\n\\nNow the working flow is like :\\n1. Developers submit their need of database as VirtualDatabase\\n2. DBAs create and bind TrafficStrategy with DatabaseEndpoint\\n3. SREs add labels `pisanix.io/inject=enabled` to the application and update the configuration with credentials stored in VirtualDatabase.\\n\\nAfter the application is running, we can checkout the Socks-shop website as below:\\n\\n![](/img/socks-shop.png)\\n\\n## How about the next steps ?\\nAs we can see that Pisanix is very young, and have a definitely long way to run. In the next, we will first enhance the ability of traffic governance, like adding data sharding, data access behavior auditing, runtime resource Qos, etc. And we also continuously improving the performance and operability of Pisanix. More extensions mechanism like plugins will be in the future, help users to build their own solution very easily.\\n\\n## Community Call\\n\\nBuilding an open source community needs help from everywhere, no matter it\'s code or documentation, issues or pull requests, community thanks all of your efforts.\\n\\nAt present, there are some ways to join the community:\\n\\n| | |\\n|:-|:-|\\n| Mailing List| https://groups.google.com/g/database-mesh |\\n| Dev Meetings (Starting Feb 27th, 2022), Bi-weekly Wednesday 9:00AM PST|https://meet.google.com/yhv-zrby-pyt |\\n| Dev Meetings APAC Friendly (Starting April 27th, 2022), Bi-weekly APAC Wednesday 9:00PM GMT+8|https://meeting.tencent.com/dm/6UXDMNsHBVQO |\\n| Wechat Broker|pisanix|\\n| Slack |https://join.slack.com/t/databasemesh/shared_invite/zt-19rhvnxkz-USjZ~am~ghd_Q0q~8bAJXA  |\\n| Meetings Notes |https://bit.ly/39Fqt3x |\\n\\nFeel free to talk !"}]}')}}]);