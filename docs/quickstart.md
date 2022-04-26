---
sidebar_label: '快速开始'
sidebar_position: 2
---

# 快速开始

## 安装教程

### Pisa-Controller admission webhooks 证书配置

Pisa-Controller admission webhooks 和 kube-apiserver 通信需要使用 https 协议,我们需要对我们的 https 服务进行证书配置。

执行webhook-create-signed-cert.sh ，脚本中会生成自签名证书，并生成对应的csr ，从csr中获取token作为apiserver-server 的交互证书。

脚本会安装下列资源对象

- csr  ${servicename}.${namespace}
- secret ${secretname}

```
./tool/cert/webhook-create-signed-cert.sh
```



### 配置 MutatingWebhookConfiguration

使用 kubectl 中的ca证书替换 mutatingwebhook.yaml 中的 caBundle 字段,

此步骤将安装下列资源对象

-  MutatingWebhookConfiguration

```
cat deploy/mutatingwebhook.yaml.tpl  | ./tool/cert/webhook-patch-ca-bundle.sh > ./deploy/mutatingwebhook.yaml

kubectl apply -n ${namespace} -f ./deploy/mutatingwebhook.yaml
```



### 安装 Pisa-Controller
* 下述文件都在deploy路径下
* ```cd deploy```

在上文中我们已经完成了在kuebrnetes 集群中对于 Pisa-Controller admission webhooks 的相关定义配置，本章节将介绍如何部署 Pisa-Controller  服务

1. 部署rbac

Pisa-Controller 需要对pod 进行注入，所以需要申请对于pod资源的相关权限。Pisa-Controller 同时需要对 networking.pisanix.io 这个CRD进行操作，用来下发 Pisa-Proxy 的配置文件。

yaml 中将部署下列资源

- ServiceAccount
- ClusterRole
- ClusterRoleBinding

```
kubectl apply -f rbac.yaml
```

2. 部署Service

   Service 是 Pisa-Controller admission webhooks  对外暴露服务的方式，Pisa-Controller 将暴露三个端口:80,6443,8080

   80  端口自身健康检查端口

   6443 端口 Pisa-Controller admission webhooks  与 kube-apiserver 通信端口

   8080 端口 Pisa-Controller 与 Pisa-Proxy 通信端口

   yaml 中将部署下列资源

   - Service

```
kubectl apply -f service.yaml
```

3. 部署Pisa-Controller

Pisa-Controller 使用 Deployment 形式进行部署，并且以 Service 方式进行暴露。

yaml 中将部署下列资源

- Deployment

```
kubectl apply -f deployment.yaml
```

## 使用范例

Pisa-Controller admission webhooks 通过条件限定进行 sidecar 注入

注入条件为，label 对象中包含  (label 将会影响 namespace，deployment 中 pod template 字段中的 label 字段)

label 为如下内容
```
pisanix.io/inject: enabled
```

现阶段条件为

| namespace | pod     | 注入 |
| --------- | ------- | ---- |
| labeled   | labeled | yes  |
| labeled   | no      | no   |
| no        | no      | no   |
| no        | labeled | no   |



### 部署例子

下列资源对象将创建如下对象

- namespace injecttest
- deployment nginx-deployment

```
kubectl apply -f sample.yaml
```

期望结果为 pod 中包含 Pisa-Proxy  sidecar 镜像