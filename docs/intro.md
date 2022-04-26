---
sidebar_position: 1
---

# 简介 

`Pisanix` (发音为[Pi-sanics])是面向云原生环境下的数据库治理框架。Pisanix 以 [Database Mesh](https://database-mesh.io) 的方式，通过 SQL 感知的流量治理、审计、安全和扩展能力等途径，帮助用户治理各种各样的数据库。

![Pisanix Arch](/img/pisanix-arch.png)


## 解决方案 

`Pisanix` 项目关注以下方面的问题:

1. SQL 感知的流量治理：支持基于 SQL 实现的负载均衡、访问控制和可观测性等。
2. 面向运行时的资源可编程：通过各种扩展能力增强运行时的资源管理能力。
3. 数据库可靠性工程：利用 Kubernetes 减轻 DBA 的负担。

## 主要功能
### 数据库流量治理 

业务应用通过 SQL 等访问数据库，而 Pisanix 可以伪装自己成为数据库服务端，劫持所有的数据库访问流量，如此一来就可以基于这些流量实现负载均衡、SQL 防火墙等。

### 可观测性 

通常，数据库的监控需要从表中获取数据然后进行绘制。现在通过 Pisanix，数据库管理员可以获取代理层的监控指标，进一步丰富对数据库访问的可观测性。

### 可编程 

For DBAs who could and would like to solve problems with programming. Pisanix supports many kinds of plugin mechanism, like Lua and Wasm. People will have the chance to 'reshape' the expected behavior of databases.

对于愿意通过编码方式解决问题的数据库管理员来说，Pisanix 将支持 Lua 和 Wasm 实现的各种插件，帮助用户实现更加灵活的数据库访问行为。

## 现在开始 
- [简介](https://www.pisanix.io/docs/intro)
- [快速开始](https://www.pisanix.io/docs/quickstart)

## 文档 
文档内容正在不断更新中，请访问 [Pisanix website](https://pisanix.io/).

## 社区 & 支持 
 :link: [GitHub Issues](https://github.com/database-mesh/pisanix/issues)。 适用于问题讨论、Bug 提交、特性开发等场景。

 :link: [Slack channel](https://join.slack.com/t/databasemesh/shared_invite/zt-12hlythpe-C4rrS1WZ2ZkEd3zn84SqeQ)。 适用于即时通信和在线会议，应用场景交流等。

- 微信交流群（中文）: 扫码添加小助手微信然后入群。

![Wechat user group broker](/img/wechat-user-group-broker.jpeg)