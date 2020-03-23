# Vuex的使用

:::tip
Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式
:::

## 为何要使用Vuex?

当我们在开发Vue组件的时候,我们一般会把数据存放在data中,开发起来很快,调用也很方便,为何还要麻烦的做一个**数据管理中心**?个人认为有**四**个特点,导致了Vuex的使用

* 父子组件传递数据麻烦,如果出现孙子组件更麻烦

* Vue遵守单向数据流,导致父组件的数据可能会很庞大

* 不利于后期维护,如果想要修改数据,需要打开每个组件去独立修改,而数据中心更改一个即可

* 数据的重用,多个页面都是用同一个数据,数据中心只需要写一份即可

![vuex](https://vuex.vuejs.org/vuex.png)

## **核心概念**

## 目录结构

Vuex 并不限制你的代码结构。但是，它规定了一些需要遵守的规则：

1. 应用层级的状态应该集中到单个 store 对象中。

2. 提交 mutation 是更改状态的唯一方法，并且这个过程是同步的。

3. 异步逻辑都应该封装到 action 里面。

只要你遵守以上规则，如何组织代码随你便。如果你的 store 文件太大，只需将 action、mutation 和 getter 分割到单独的文件。

对于大型应用，我们会希望把 Vuex 相关代码分割到模块中。下面是项目结构示例：

```sh
├── index.html
├── main.js
├── api
│   └── ... # 抽取出API请求
├── components
│   ├── App.vue
│   └── ...
└── store
    ├── index.js          # 我们组装模块并导出 store 的地方
    ├── actions.js        # 根级别的 action
    ├── mutations.js      # 根级别的 mutation
    └── modules
        ├── cart.js       # 购物车模块
        └── products.js   # 产品模块
```

请参考 [Demo](https://github.com/2662419405/AllDemo/tree/master/vue-mart2)