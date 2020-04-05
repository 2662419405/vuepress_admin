# 初级    
## 入门教程    
### 搭建本地开发环境   
1 . 确保你安装了较新版本的 Node.js,可以检查是否安装了node.js,代码如下:    
  ```
  node -v
  ```   
2 . Vue环境安装(前提是安装了npm,这个如果没安装,[npm安装](https://www.cnblogs.com/jianguo221/p/11487532.html)),由于在国内使用npm是非常慢的，所以在这里我们推荐使用淘宝npm镜像，使用

淘宝的cnpm命令管理工具可以代替默认的npm管理工具：
>````      
>$ npm install -g cnpm --registry=https://registry.npm.taobao.org
>````     
3. 淘宝镜像安装成功之后，我们就可以全局使用vue-cli脚手架，输入命令：cnpm install --global vue-cli  回车；验证是否安装成功，在命令输入vue，出来vue的信息，及说明安装成功；   
 ![RUNOOB 图标](https://images2015.cnblogs.com/blog/1191178/201707/1191178-20170704152758800-1665979529.png)  

搭建完手脚架之后，我们要开始建一个新项目，这个时候我建议，尽量不要装在C盘，因为vue下载下来的文件比较大，如果要改盘的话，直接输入D：回车就可以直接改盘，

然后我们开始创建新的项目输入命令：vue init webpack my-project  回车，my-project是我自己的文件夹的名字，是基于webpack的项目，输入之后就一直回车，直到出现是否要安装vue-router，

这个我们在项目要用到，所以就输入y 回车        
![RUNOOB 图标](https://images2015.cnblogs.com/blog/1191178/201707/1191178-20170704153050409-72562233.png)     
4. 下面会出现是否需要js语法检测，这个我们暂时用不到，就可以直接输入no，后面的都可以直接输入no，都是我们暂时用不到的       
![RUNOOB 图标](https://images2015.cnblogs.com/blog/1191178/201707/1191178-20170704153558159-1180218633.png)          
5. 文件夹已经下载好了，现在就可以进入文件夹，输入： cd my-project 回车，因为各个模板之间都是相互依赖的，所以现在我们要安装依赖,输入命令：   
````   
cnpm install     
````      
出现: 
![RUNOOB 图标](https://images2015.cnblogs.com/blog/1191178/201707/1191178-20170704154051925-788102572.png)      
6. 已经安装好之后，现在要来测试一下我们下载好的模板能不能正常的运行，在命令行输入：   
````   
npm run dev     
````    
 回车即可   
 7. 8080是默认的端口，要访问的话，直接在浏览器输入localhost:8080就可以打开默认的模板了(不会自动打开浏览器,在webpackjson配置文件的serve后加 --open 即可)    
![RUNOOB 图标](https://images2015.cnblogs.com/blog/1191178/201707/1191178-20170704155058378-1865109875.png) 
   
   
>#### 注意：   
>不要删除整个 src 文件夹，删除里面的源文件。我们会在接下来的步骤中使用示例代码   
>替换默认源文件。    

## Vue的v指令   
### Vue的v指令使用
### 1. v-bind (绑定元素)     
#### 部分view代码   
````   
<p v-bind:title="message">测试哈哈</p>   
````   
#### 部分js代码   
````   
<script>
   var vm=new Vue({ //创建了一个Vue实例对象--启动一个vue应用 
       el:"#app", //reactDOM.render(组件,挂载点)
       data:{//this.state={message:"hello world!"}
          message:"hello World!",
          seen:false,
          stus:[
              {id:"10001",name:"tom",age:19,sex:"男"},
              {id:"10002",name:"jarry",age:21,sex:"男"},
              {id:"10003",name:"susan",age:23,sex:"女"},
              {id:"10004",name:"赵四",age:35,sex:"男"},
              {id:"10005",name:"刘能",age:37,sex:"男"},
          ]
      }
    }   
    </script>
````
### 2. v-for(遍历数组对象)   
用法: v-for="元素 in 数组"    
例如遍历一个数组到li中:   
#### 部分view代码   
````   
<ul>
            <li v-for="value in stus" v-bind:key="value.id">
               编号: {{value.id}}
               姓名:{{value.name}}
               性别:{{value.sex}}
               年龄:{{value.age}}
            </li>
/ul>    
````   
#### 部分js代码   
````   
<script>
   var vm=new Vue({ //创建了一个Vue实例对象--启动一个vue应用 
       el:"#app", //reactDOM.render(组件,挂载点)
       data:{//this.state={message:"hello world!"}
          message:"hello World!",
          seen:false,
          stus:[
              {id:"10001",name:"tom",age:19,sex:"男"},
              {id:"10002",name:"jarry",age:21,sex:"男"},
              {id:"10003",name:"susan",age:23,sex:"女"},
              {id:"10004",name:"赵四",age:35,sex:"男"},
              {id:"10005",name:"刘能",age:37,sex:"男"},
          ]
       },
       methods:{
           changeMessage(){
               //实例对象代理了data上方法
               console.log("当前实例对象 this",this)
               this.message="你好吗"
           }
       }
   })

   console.log("vm",vm);
 </script>   
 ````    
 ### 3. v-on 绑定vue事件   
 #### 部分view代码   
````   
button v-on:click="changeMessage">点击改变message</button>   
````   
#### 部分js代码   
````
 <script>
   var vm=new Vue({ //创建了一个Vue实例对象--启动一个vue应用 
       el:"#app", //reactDOM.render(组件,挂载点)
       data:{
          message:"hello World!",
       },
     methods:{
           changeMessage(){
               this.message="你好吗"
           }
       }
   })
  </script>    
 ````   
 ### 4. v-if 从DOM中移除   
 v-if 为true DOM添加到现有DOM  ,    
       为false从现有DOM中移除   
#### 部分view代码   
       ````   
       <p v-if="seen">天道酬勤</p>   
       ````   
#### 部分js代码   
````
<script>
   var vm=new Vue({ //创建了一个Vue实例对象--启动一个vue应用 
       el:"#app", //reactDOM.render(组件,挂载点)
       data:{
          seen:false
          }
     })
</script>
````     
### 5. v-model 将表单项的value值绑定到变量上
#### 部分js代码   
````
<p v-bind:title="message">测试</p>   
````   
#### 部分js代码   
````   
<sceipt>
var vm=new Vue({ //创建了一个Vue实例对象--启动一个vue应用 
       el:"#app", //reactDOM.render(组件,挂载点)
       data:{
            this.state={message:"hello world!"
            }
          }
          
    })
</script>   
````   
### MVVM    
M-->V-->V-->M  数据和DOM是绑定，数据改变DOM自动刷新    
-->可以将开发中从大量的DOM操作中解放出来，使开发人员只关注数据处理和业务逻辑
