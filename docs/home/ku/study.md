# Taro学习

:::tip 官网给的介绍
👽 Taro['tɑ:roʊ]，泰罗·奥特曼，宇宙警备队总教官，实力最强的奥特曼 <a href="https://taro-docs.jd.com/taro/docs/README.html">官网</a>
:::

## 前言

* 前言: 废话一下,taro是一个多端应用的框架,这里面只是介绍一下**他们的坑**,API的使用就直接去官网看就好了

* 作用: 一套代码,产生多端 (不能使用npm,没有less和scss没有状态管理)

* 历史: 伴随微信小程序的多端的框架发展历史

1. wepy
   1. 腾讯出的,用vue写小程序,还要学习他的语法,实现不是特别好
2. mpvue
   1. 完全的vue体验,使用vue脚手架,完全的vue方法
   2. mpvue刚出的时候,小程序基本没有自己的组件化 再加上当时mpvue长期没有更新,所以不是特别推荐
3. taro(React)
   1. 这是一个基于React语法的多端框架
4. uni-app(vue)
   1. 这是基于vue语法的多端框架

* 总结: 其实由于微信原⽣⼩程序开发⾃⼰玩了⼀套⾃⼰的语法，所以早早就有⽤vuejs来开发⼩程序的框架，⽐如webpy和mpvue，但是基本都是单纯的开发微信⼩程序，现在基本对多端⽀持⾜够好的，就是taro和uni-app了，分别是使⽤React和Vue的语法来开发⼩程序⽣态

## 安装

```yml
# 使用 npm 安装 CLI
npm install -g @tarojs/cli
# OR 使用 yarn 安装 CLI
yarn global add @tarojs/cli
# OR 安装了 cnpm，使用 cnpm 安装 CLI
cnpm install -g @tarojs/cli
```

* 项目初始化

```yml
taro init myApp
```

## 问题所在!

默认不支持同时编辑多个端,需要自己配置解决

跨端并不代表一次开发,就完全一致了,有很多地方是跨端框架做不到的事情

比如: 

1. 登录
   1. 微信有微信登录
   2. 支付宝有支付宝登录
   3. 百度有百度登录等等
2. 支付
   1. 微信只能微信支付
   2. 支付宝只能支付宝支付
   3. 百度可以微信和支付宝还有百度收银台

## taro配合taro-ui使用

* 安装

```js
cnpm install taro-ui --save
```

* 配置

在`config`中,把`index.js`添以下配置

```js
h5: {
  esnextModules: ['taro-ui']
}
```

* 使用

```js
// page.js
import { AtButton } from 'taro-ui'
// 除了引入所需的组件，还需要手动引入组件样式
// app.js
import 'taro-ui/dist/style/index.scss' // 全局引入一次即可
```
