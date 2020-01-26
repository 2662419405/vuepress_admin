# `Webpack`介绍

## 1.1 `Webpack`是什么

> `webpack`是前端方面的静态资源打包工具,能够让浏览器也支持模块化,他会根据模块的依赖关系进行静态分析,然后按照某种规则生成静态资源



## 1.2 `WebPack`的作用

- `webpack`的核心主要是进行JavaScript资源打包
- 把静态文件,例如`png,sass,less,css,js`等多个文件打包成一个文件,减少页面的请求
- 可以集成 `http` 服务器
- 可继承`babel`工具,实现`ECMAScript6`和5的转换,解决兼容问题
- 可以进行模块热加载,当代码发生改变的时候,自动刷新浏览器

<img src="/webpack.png"/>



# `Webpack`安装和案例

## 2.1`Webpack` 全局安装

1. 安装`webpack`

   ```javascript
   安装webpack
   npm install -g webpack
   或者 安装最新版webpack 
   npm install -g webpack@<version>
   ```

2. 如果安装的是`web pack4` 以上的版本,还需要安装`Webpack-Cli`

   ```javas
   npm install -g webpack-cli 
   ```

3. 可以通过`npm root -g` 查看全局安装目录

## 2.2`Webpack`快速入门

- __`VSCode`中安装node Snippets有代码提示

## 2.3 打包`Webpack`模块

- `webpack xxx -o yyy`
- 这样就把文件打包成了`yyy`文件
- 使用的时候直接引入`yyy`文件,就不会出现 `require is not define` 这个问题 

## 2.4**打包配置文件** `webpack.confifig.js`

- 每当修改`js`文件,都要`webpack`重新打包,打包时还要指定入口和出口,都非常麻烦,通过配置文件进行修改

- 编写`webpack.config.js`

- ```js
  //引入path是为了解决路径的小工具
  const path=require("path");
  
  module.export={
      //入口文件
      entry:"./src/main.js",
      //出口  出口是一个对象
      output:{
      	path:path.join(__dirname,'./dist/'),
          filename:'build.js'
  	}
  }
  ```

- 编写`package.json`

- ```json
  {
      "script": {
          "show": "webpack -v",
          "start": "node xxx",
          "build": "webpack"
      }
  }
  ```



# `EcmaScript6`行为规范

- 导出模块 export 等价于 ( `module.exports` )
- 导入模块 import 等价于 ( `require` )



# 安装Loader

- `webpack`  本身具有打包`JavaScript`文件的能力,如果需要打包其他类型文件,则需要使用插件,这些插件被称为加载器( Loader ) 
- Loader 可以看作为资源和模块的转换器,它本身是一个函数,接受的是源文件,返回值是转换后的结果
- 这样,我们就可以通过`require`和`import` 来引入不同的文件类型了
- 打包`CSS`文件

1. 安装 `style-loader` 和 `css-loader`依赖

2. `npm install -D style-loader css-loader`

3. 修改`webpack.config.js`

4. ```js
   const path = require("path");
   
   module.exports = {
       mode: "none",
       entry: "xxx", //入口文件
       output: {
       	path: path.join(__dirname,"xx") //输出文件路径
           filename: "xxxx.yy"  //输出文件的名字
   	},
       module: {
           rules: [
               {
                   test: /\.css$/,  //匹配后缀名为css的文件
                   use: [
                       "style-loader",
                       "css-loader"
                   ]
               }
           ]
       }
   }
   ```

- 打包`Images`资源文件

1. 安装`file-loader`依赖

2. `npm install -D file-loader`

3. 修改`webpack.config.js`

4. ```js
   const path = require("path");
   
   module.exports = {
       mode: "none",
       entry: "xxx",
       output: {
           path: path.join(__dirname,"xxx"),
           filename: "name"
       },
       module: {
           rules: [
               {
                   test: /\.css$/,
                   use: [
                       "style-less",
                       "css-less"
                   ]
               },
               {
                   test: /\.(png|jpg|svg|fig)$/,
                   use: [
                       "file-loader"
                   ]
               }
           ]
       }
   }
   ```

- 安装`HtmlWebpackPlugin`插件
- 目的: 将`index.html` 打包到`build.js`所在的目录当中

1. 安装插件 

2. `npm install -D html-webpack-plugin`

3. 修改`webpack.config.js`

4. ```js
   plugins: [
       new HtmlWebpackPlugin({
           template:'./index.html'
       })
   ]
   ```

5. 修改`index.html`文件

6. ```html
   //不需要再引入<srcipt src="xxxx.js">
   ```

   

# 实现重新加载

## 5.1说明

- 问题:

  每一次手动打包很麻烦,打包之后还需要手动刷新浏览器

- 解决:

  采用`webpack`提供的工具: `webpack-dev-server` , 他无需打包和手动刷新浏览器,会自动打包,提高开发效率

## 5.2实际操作

- 安装依赖: 

- ```js
  npm install -D webpack-dev-server
  ```

- 修改`webpack.config.js`:

- ```js
  const path = require("path");
  const htmlWebPackPlugin = require("html-webpack-plugin");
  
  module.exports = {
      mode: "none",
      entry: "xxx",  //入口文件
      output: {
          path: path.join(__dirname,xxx),
          filename: xxxx
      },
      //实现重新加载
      devServer:{
          contentBase: './dist'
      }
  }
  ```

- 修改`package.json`

- ```json
  {
      "scripts":{
          "show": "webpac -v",
          "dev": "webapck-dev-server --open"
      }
  }
  ```



# 浏览器兼容Babel

## 6.1安装Babel

`npm install -D babel-loader @babel/core @babel/preset-env`

## 6.2配置`Webpack.config.js`

```js
module: {
    rules: [
        {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/, //排除的目录
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env"] //内置好的转译工具
                }
            }
        }
    ]
}
```

## 6.3`Main.js`代码

```js
const a=1;

const arr = [1,2,3];
arr.foreach(item=>{
    console.log(item)
})
```



# 7`Vue-loader`打包`Vue`单文件组件

- 安装`vue-loader`和`vue-template-compiler`依赖

  `npm install -D vue-loader vue-template-compiler`

- 修改`webpack.config.js`配置:

- ```js
  const VueLoaderPlugin = require("vue-loader/lib/plugin")
  
  module.exports = {
      //解析完整的Vue
      resolve: {
        alias: {
            'vue$': 'vue/dist/vue.js'
        }  
      },
      module: {
          rules: [
              {
                  test: /\.vue$/,
                  loader: 'vue-loader'
              }
          ]
      },
      plugin: [
          //引入并且使用这个插件
          new VueLoaderPlugin()
      ]
  }
  ```

## 模块热替换

- 修改`webpack.config.js`的代码

- ```js
  const path = require("path");
  const webpack = require("webpack");
  const htmlWebpackPlugin = require("html-webpack-plugin");
  const VueLoaderPlugin = require("vue-loader/lib/plugin");
  
  module.exports={
      mode:"none",
      entry: "" ,
      output: {
          path: path.join(__dirname,xx),
          filename:xxx
      },
      devServer: {
          contentBase: 'xxx',
          hot: true
      },
      plugins: [
          //模块热替换
          new webpack.HotModuleReplacementPlugin(),
          //引入vue模块
          new VueLoaderPlugin(),
          new htmlWebpackPlugin({
              template: 'xxx'
          })
      ],
      modules: {
          rules: [
              {
                  test: /\.css$/,
                  use: [
                      'style.loader',
                      'css-loader'
                  ]
              },
              {
              	test: /\.(png|svg|jpg|gif)$/,
              	use: [
                      'file-loader'
                  ]
              },
              {
                  test: /\.vue$/,
                  use: [
                      'vue-loader'
                  ]
              }
          ]
      }
  }
  ```

  

# `package.json`的配置

### `proxy` 字段

- 这个字段主要是用来解决跨域的问题

- **设置**

- ```js
  "proxy": "http://localhost:9093"
  ```

- **使用**

- ```react
  axios.get('/data').then((res)=>{
  	console.log(res);
  })
  
  ```

### 基本字段

- name  项目名称
- version 项目版本

### Scripts字段

- 用来运行npm脚本

- ```json
  "scripts": {
      "preinstall": "echo here it comes!",
      "postinstall": "echo there it goes!",
      "start": "node index.js",
      "test": "tap test/*.js"
  }
  
  ```

- 使用的时候运行 `npm run xxx`对应上面的具体命令

### dependencies字段, devdependencies

- 分别指定项目运行所依赖的模板和项目开发时所需要的模板
- 对应的版本限制
  - 比如1.2.2 大版本,次要版本,小版本
  - ~1.2.2 表示安装1.2.x的最新版本 不低于1.2.2版本 不安装1.3.x
  - ^1.2.2 表示安装1.x.x的最新版本 不低于1.2.2版本 不安装2.x.x 
  - latest 安装最新版本

### bin字段

用来指定内部可以执行文件的位置

```json
{
    "bin":{
        "xxx": "xxx/xxx/xxx.js"
    }
}

```

### main字段

- 指定了加载的入口文件 默认就是index.js

### repository字段

```“repository”: {
“repository”: {
	“type”: “git”,
	“url”: “git+https://github.com/XXXX”
},
“author”: “mayuan”,
“license”: “ISC”,
“bugs”: {
	“url”: “https://github.com/XXXX”
}

```