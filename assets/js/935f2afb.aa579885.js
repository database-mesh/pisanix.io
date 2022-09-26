"use strict";(self.webpackChunkpisanix=self.webpackChunkpisanix||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"latest","banner":null,"badge":true,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"\u7b80\u4ecb","href":"/docs/intro","docId":"intro"},{"type":"link","label":"\u5feb\u901f\u5f00\u59cb","href":"/docs/quickstart","docId":"quickstart"},{"type":"category","label":"\u7279\u6027","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\u8d1f\u8f7d\u5747\u8861","href":"/docs/Features/loadbalancer","docId":"Features/loadbalancer"},{"type":"link","label":"MySQL \u534f\u8bae","href":"/docs/Features/mysql-protocol","docId":"Features/mysql-protocol"},{"type":"link","label":"\u8bfb\u5199\u5206\u79bb","href":"/docs/Features/readwritesplitting","docId":"Features/readwritesplitting"},{"type":"link","label":"SQL \u89e3\u6790","href":"/docs/Features/sql-parser","docId":"Features/sql-parser"},{"type":"link","label":"\u65ad\u8def\u548c\u5e76\u53d1\u63a7\u5236","href":"/docs/Features/sql-circuit-breaker-and-concurrency-control","docId":"Features/sql-circuit-breaker-and-concurrency-control"},{"type":"link","label":"\u53ef\u89c2\u6d4b\u6027","href":"/docs/Features/observability","docId":"Features/observability"},{"type":"link","label":"\u6570\u636e\u5206\u7247","href":"/docs/Features/sharding","docId":"Features/sharding"}]},{"type":"category","label":"\u4f7f\u7528\u573a\u666f","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\u5728 Kubernetes \u4e2d\u90e8\u7f72","href":"/docs/UseCases/kubernetes","docId":"UseCases/kubernetes"},{"type":"link","label":"\u5355\u72ec\u90e8\u7f72 Pisa-Proxy","href":"/docs/UseCases/standalone","docId":"UseCases/standalone"}]}]},"docs":{"Features/loadbalancer":{"id":"Features/loadbalancer","title":"\u8d1f\u8f7d\u5747\u8861","description":"\u8d1f\u8f7d\u5747\u8861\u6a21\u5757\u4e3a Pisa-Proxy \u4ee3\u7406\u540e\u7aef\u8282\u70b9\u65f6\uff0c\u65b0\u5efa\u94fe\u63a5\u65f6\u5bf9\u540e\u7aef\u8282\u70b9\u9009\u53d6\u7b56\u7565\u7684\u5b9e\u73b0\u3002","sidebar":"tutorialSidebar"},"Features/mysql-protocol":{"id":"Features/mysql-protocol","title":"MySQL \u534f\u8bae","description":"\u6b64\u529f\u80fd\u4e3b\u8981\u4e3a Pisa-Proxy MySQL \u4ee3\u7406\u7684\u6838\u5fc3\u7ec4\u4ef6, \u4f9d\u636e MySQL \u534f\u8bae \u8fdb\u884c\u5b9e\u73b0\u3002\u8be5\u529f\u80fd\u4e3b\u8981\u4f7f\u7528 Rust \u751f\u6001\u7684 Tokio \u5f02\u6b65\u8fd0\u884c\u65f6\u6846\u67b6\u3002\u5176\u4e2d\u5bf9\u7f51\u7edc\u6570\u636e\u5305\u7684\u8bfb\u5199\u3001\u534f\u8bae\u7684\u7f16\u7801\u7b49\u64cd\u4f5c\u90fd\u901a\u8fc7 Tokio \u63d0\u4f9b\u7684\u5de5\u5177\u96c6\u5b9e\u73b0\u3002","sidebar":"tutorialSidebar"},"Features/observability":{"id":"Features/observability","title":"\u53ef\u89c2\u6d4b\u6027","description":"Pisanix \u76ee\u524d\u5728 Pisa-Proxy \u5904\u7406 SQL \u547d\u4ee4\u7684\u65f6\u5019\u91c7\u96c6\u76f8\u5173\u6307\u6807\uff0c\u5e76\u4ee5 /metrics \u8def\u5f84\u8fdb\u884c\u66b4\u9732\u3002","sidebar":"tutorialSidebar"},"Features/readwritesplitting":{"id":"Features/readwritesplitting","title":"\u8bfb\u5199\u5206\u79bb","description":"\u8bfb\u5199\u5206\u79bb\u662f\u4e1a\u754c\u4f7f\u7528 MySQL \u6700\u5e38\u7528\u7684\u65b9\u6848\u4e4b\u4e00\uff0c \u5728\u5b9e\u9645\u573a\u666f\u4e2d\u53ef\u4ee5\u63d0\u9ad8\u67e5\u8be2\u6027\u80fd\uff0c\u964d\u4f4e\u670d\u52a1\u5668\u8d1f\u8f7d\u3002\u4e00\u822c\u67b6\u6784\u5982\u4ee5\u4e0b\uff1a","sidebar":"tutorialSidebar"},"Features/sharding":{"id":"Features/sharding","title":"\u6570\u636e\u5206\u7247","description":"\u6570\u636e\u5206\u7247\u662f\u5e94\u5bf9\u6d77\u91cf\u6570\u636e\u5b58\u50a8\u4e0e\u8ba1\u7b97\u7684\u6709\u6548\u624b\u6bb5\u3002Pisanix \u57fa\u4e8e\u5e95\u5c42\u6570\u636e\u5e93\u63d0\u4f9b\u4e86\u6570\u636e\u5206\u7247\u7684\u6cbb\u7406\u80fd\u529b\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 Pisanix \u6c34\u5e73\u6269\u5c55\u8ba1\u7b97\u548c\u5b58\u50a8\u3002","sidebar":"tutorialSidebar"},"Features/sql-circuit-breaker-and-concurrency-control":{"id":"Features/sql-circuit-breaker-and-concurrency-control","title":"\u65ad\u8def\u548c\u5e76\u53d1\u63a7\u5236","description":"\u76ee\u524d\u5b9e\u73b0\u4e86\u4e24\u4e2a\u9ed8\u8ba4\u63d2\u4ef6 SQL \u65ad\u8def \u548c SQL \u5e76\u53d1\u63a7\u5236\u3002","sidebar":"tutorialSidebar"},"Features/sql-parser":{"id":"Features/sql-parser","title":"SQL \u89e3\u6790","description":"Pisa-Proxy \u9664\u4e86\u7406\u89e3 SQL \u534f\u8bae\u5916, \u80fd\u8bfb\u61c2 SQL \u8bed\u53e5\u4e5f\u662f\u4e00\u4e2a\u5f88\u91cd\u8981\u7684\u529f\u80fd\uff0c\u8bfb\u5199\u5206\u79bb\uff0c\u5206\u7247\u7b49\u529f\u80fd\u4e5f\u90fd\u4f9d\u8d56 SQL \u89e3\u6790\uff0c\u5728 Pisa-Proxy \u4e2d\u5360\u7740\u4e3e\u8db3\u8f7b\u91cd\u7684\u4f5c\u7528\u3002","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"\u7b80\u4ecb","description":"Pisanix Pi-sanics] \u662f\u4e00\u6b3e\u9762\u5411 Kubernetes \u7684\u6570\u636e\u5e93\u6cbb\u7406\u6846\u67b6\u3002Pisanix \u901a\u8fc7 SQL \u611f\u77e5\u7684\u6d41\u91cf\u6cbb\u7406\u3001\u5ba1\u8ba1\u3001\u5b89\u5168\u548c\u6269\u5c55\u6027\u7b49\u80fd\u529b\u5b9e\u73b0 [Database Mesh \u98ce\u683c\u7684\u6570\u636e\u5e93\u6cbb\u7406\u4f53\u9a8c\u3002","sidebar":"tutorialSidebar"},"quickstart":{"id":"quickstart","title":"\u5feb\u901f\u5f00\u59cb","description":"\u63a8\u8350\u90e8\u7f72","sidebar":"tutorialSidebar"},"UseCases/kubernetes":{"id":"UseCases/kubernetes","title":"\u5728 Kubernetes \u4e2d\u90e8\u7f72","description":"Pisanix \u7684\u4e09\u4e2a\u7ec4\u4ef6\u5728\u9879\u76ee\u89c4\u5212\u4e4b\u521d\u5373\u6309\u7167\u63a7\u5236\u9762\u914d\u5408\u591a\u6570\u636e\u9762\u7684\u5f62\u5f0f\u8fdb\u884c\u8bbe\u8ba1\uff0c\u5b83\u4eec\u90fd\u53ef\u90e8\u7f72\u5728 kubernetes \u4e4b\u4e0a\uff0c\u5e76\u901a\u8fc7 CustomResourceDefinition \u5b8c\u6210\u5404\u79cd\u914d\u7f6e\uff0c\u7531 Pisa-Controller \u8f6c\u6362\u4e3a\u76f8\u5e94\u7684\u914d\u7f6e\u540e\uff0c\u4e0b\u53d1\u7ed9 Pisa-Proxy \u6216 Pisa-Daemon\u3002","sidebar":"tutorialSidebar"},"UseCases/standalone":{"id":"UseCases/standalone","title":"\u5355\u72ec\u90e8\u7f72 Pisa-Proxy","description":"Pisa-Proxy \u4f5c\u4e3a\u9ad8\u6027\u80fd\u4ee3\u7406\u4e0d\u4ec5\u53ef\u4ee5\u5728 kubernetes \u4e2d\u4ee5 Sidecar \u7684\u65b9\u5f0f\u90e8\u7f72\uff0c\u4e5f\u53ef\u4ee5\u4f5c\u4e3a\u7edf\u4e00\u63a5\u5165\u5c42\u5355\u72ec\u90e8\u7f72\u5728 kubernetes \u4e4b\u5916\u7684\u670d\u52a1\u5668\u4e0a\uff1a","sidebar":"tutorialSidebar"}}}')}}]);