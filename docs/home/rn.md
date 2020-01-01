# 移动APP

移动指的是移动设备平台, `app` 是应用 (`application`) 的缩写, 移动App就是移动设备上运行的应用程序

## 种类划分

- **WebAPP**:
  - 网页应用, 需要运行在`浏览器`环境中, `无需`安装即可使用
  - 使用纯`web`技术开发实现
  - 由`浏览器`负责UI界面的`渲染`
- **NativeAPP**:
  - 原生应用, 直接运行在移动`设备`上, 需要`安装`后使用
  - 主要采用设备`原生语言`开发实现, 利用一些新技术可使用`其他语言`实现部分功能
  - 由移动`设备`负责UI界面的`渲染`
- **HybridAPP**:
  - 混合应用, 直接运行在`移动设备`上, 需要`安装`后使用
  - 部分功能采用设备`原生语言`开发, 部分采用`web`技术开发
  - `原生`语言编写的功能由移动`设置`渲染, `web`语言编写的功能运行在App内嵌的`web容器`中(就是一个内嵌的`浏览器`)

## 运作模式

![移动app运行模式对比](https://github.com/guopengfei116/drop/blob/master/img/react-native/app_operational_mode.png?raw=true)

## 优缺点

| 对比/分类  | Web App | Native App | Hybrid App |
| :--------- | :-----: | :--------: | :--------: |
| 市场认可度 |  不认   |    认可    |    认可    |
| 是否要安装 |   否    |     是     |     是     |
| 开发成本   |   低    |     高     |     中     |
| 维护更新   |   低    |     高     |     中     |
| 跨平台     |   低    |     高     |     中     |
| 体验       |   差    |     高     |     中     |

## 进化

你会发现，Native App 性能体验好，Hybrid App 开发维护成本低。你可能会想，如果有一种技术能够同时拥有两者的优点就好了，facebook 公司的 ReactNative 因此而生，它使用js和React编写UI逻辑，然后生成原生控件进行渲染绘制，既拥有媲美原生应用的性能体验，又拥有混合应用跨平台、开发快等优点。

当然这也不是绝对的，在特殊需求下，还是会有不足。首先框架本身需要处理大量平台相关的逻辑，随着系统与API的升级变化，开发者有可能也需要处理平台之间的差异，甚至有些特性只能在部分平台上实现，从而降低跨平台性。当然，这些问题也会随着 ReactNative 的版本迭代逐渐改善。

# WEB技术开发框架

## 混合应用

#### Ionic

- Angular官网 <https://angular.io/>
- Ionic官网 <http://ionicframework.com/>
- Ionic中文网 <http://www.ionic.wang/>
- Cordova官网 <https://cordova.apache.org/>
- Cordova中文网 <http://cordova.axuer.com/>

#### Html5+

- 官网 <http://www.dcloud.io/>

#### AppCan

- 官网 <http://www.appcan.cn/>

#### 微信公众号

- 官网 <https://mp.weixin.qq.com/>
- 其他 <https://my.oschina.net/u/1416844/blog/759209>

## 原生App

#### ReactNative

- React官网 <https://facebook.github.io/react/>
- ReactNative官网 <https://facebook.github.io/react-native/>
- ReactNative中文网 <https://reactnative.cn/>

#### Weex

- Vue官网 <https://cn.vuejs.org/>
- Weex官网 <http://weex.apache.org/cn/>
- WeexGithub <https://github.com/apache/incubator-weex>

#### Flutter

- Rlutter官网 <https://flutter.io/>
- Rlutter中文网 <https://flutterchina.club/>