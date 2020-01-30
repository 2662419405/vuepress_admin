# Webpack实现es6转换为es5
## 安装插件
`npm install --save-dev babel-loader @babel/core @babel/preset-env`

##  配置
在`webpack.config.js`中的module的rules中,添加一条新的loader
```js
{
   test: /\.js/, //babel转化es6到es5
   exclude: /node_modules/,
   use: {
     loader: "babel-loader",
     options: {
       presets: [
         [
           "@babel/preset-env",
           {
             useBuiltIns: "usage",
             corejs: 2
           }
         ]
       ]
     } 
   }
 }
```

* 目前就已经可以了

* 缺点,会他会对于window的变量造成一些污染,那么我们就可以使用第二种方式

## 第二种方式

### 安装

`npm install --save-dev babel-loader @babel/core @babel/plugin-transform-runtime @babel/runtime`

### 使用
在`webpack.config.js`中的module的rules中添加一条如下规则

```js
{
  test: /\.js/, //babel转化es6到es5
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
      // presets: [
      //   [
      //     "@babel/preset-env",
      //     {
      //       useBuiltIns: "usage",
      //       corejs: 2
      //     }
      //   ]
      // ],
      plugins: ["@babel/plugin-transform-runtime"]
    }
  }
}
```

这种方式也有对应的缺点,对于原型链上的方法不会进行转义,所以如果你要写一些公开库,推荐使用这种,如果自己平常开发,很少会碰到原型链,那么就是用`@babel/preset-env`