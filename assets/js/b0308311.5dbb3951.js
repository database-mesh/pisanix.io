"use strict";(self.webpackChunkpisanix=self.webpackChunkpisanix||[]).push([[61],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=u(n),d=o,y=f["".concat(c,".").concat(d)]||f[d]||l[d]||a;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1457:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return l}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:2},c="Pisa-Proxy \u5355\u72ec\u90e8\u7f72",u={unversionedId:"UseCases/standalone",id:"UseCases/standalone",title:"Pisa-Proxy \u5355\u72ec\u90e8\u7f72",description:"Pisa-Proxy \u4f5c\u4e3a\u9ad8\u6027\u80fd\u4ee3\u7406\u4e0d\u4ec5\u53ef\u4ee5\u5728 Kubernetes \u4e2d\u4ee5 Sidecar \u7684\u65b9\u5f0f\u90e8\u7f72\uff0c\u4e5f\u53ef\u4ee5\u4f5c\u4e3a\u7edf\u4e00\u63a5\u5165\u5c42\u5355\u72ec\u90e8\u7f72\u5728 Kubernetes \u4e4b\u5916\u7684\u670d\u52a1\u5668\u4e0a\uff1a",source:"@site/docs/UseCases/standalone.md",sourceDirName:"UseCases",slug:"/UseCases/standalone",permalink:"/docs/UseCases/standalone",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u5728 Kubernetes \u4e2d\u90e8\u7f72",permalink:"/docs/UseCases/kubernetes"}},p={},l=[],f={toc:l};function d(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pisa-proxy-\u5355\u72ec\u90e8\u7f72"},"Pisa-Proxy \u5355\u72ec\u90e8\u7f72"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Pisa-Proxy"))," \u4f5c\u4e3a\u9ad8\u6027\u80fd\u4ee3\u7406\u4e0d\u4ec5\u53ef\u4ee5\u5728 Kubernetes \u4e2d\u4ee5 Sidecar \u7684\u65b9\u5f0f\u90e8\u7f72\uff0c\u4e5f\u53ef\u4ee5\u4f5c\u4e3a\u7edf\u4e00\u63a5\u5165\u5c42\u5355\u72ec\u90e8\u7f72\u5728 Kubernetes \u4e4b\u5916\u7684\u670d\u52a1\u5668\u4e0a\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"single.png",src:n(349).Z,width:"841",height:"431"})),(0,a.kt)("p",null,"\u76ee\u524d",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Pisa-Proxy")),"\u652f\u6301 MySQL \u534f\u8bae\uff0c\u65e0\u8bba\u540e\u7aef\u662f\u4e91\u4e0a\u7684 RDS \u5b9e\u4f8b\uff0c\u8fd8\u662f\u81ea\u5efa\u7684 MySQL\u3001ShardingSphere\u3001TiDB \u7b49\uff0c\u90fd\u53ef\u4ee5\u7531 Pisa-Proxy \u7edf\u4e00\u6d41\u91cf\u5206\u53d1\uff0c\u5b9e\u73b0\u65e0\u611f\u7684\u9ad8\u53ef\u7528\u5207\u6362\u3001\u9762\u5411 SQL \u7684\u53ef\u89c2\u6d4b\u6027\u7b49\u3002"))}d.isMDXComponent=!0},349:function(e,t,n){t.Z=n.p+"assets/images/single-b33d2c8fd40d86198ea10d6dfa71ee0d.png"}}]);