# ES6(常用的、重点的)

## 模板字符串

- 模板字符串的基本用法

```js
    var s1 = `abc`
```

- 模板字符串的优势：

```js
    var obj={ name:"",age:5 };
    var s1 ="我叫："+obj.name+"，今年："+obj.age+"岁。"
```

## 解构赋值

- 对象的解构赋值

```js
    var obj={name:"张三",age:18}

    var {name,age}=obj; 
    //生成2个变量，
    //  name值来自于obj.name、
    //  age值来自于obj.age

    var {name:title}=obj;
    //生成一个变量：title，值来自于obj.name
```

- 函数参数的解构赋值

```js
    function f1(obj){
        console.log(obj.age);
        console.log(obj.height)
    }
    //等价于
    function f1({ age,height }){
        console.log(age);
        console.log(height)
    }

    f1({age:5,height:180})
```

- 补充：属性的简写

```js
    var a = 3 ; 
    var c = 10;
    var b = { a,c } ;   
    //b对象有一个a属性，a属性的值，来自于a变量  ，
    //还有一个c属性，c属性的值来自于c变量
    console.log(b)
```

## 函数的扩展

## rest参数

- 使用背景：es6的
- 优点：arguments是伪数组，而rest参数是真数组

```js
    function fn(...args){
        console.log(args);  //数组：[1,2,3,4,5]
    }
    fn(1,2,3,4,5)
```

## 箭头函数

- 场景：用于替换匿名函数
- 基本用法：

```js
    //匿名函数
    div.onclick=function(){
        console.log("你好")
    }
    //箭头函数
    div.onclick=()=>{
        console.log("你好")
    }
```

- 有一个参数的箭头函数

```js
    var fn=(a)=>{
        console.log("abc");
    }
    //等价于：
    var fn=a=>{
        console.log("abc");
    }
```

- 有2个及更多参数的箭头函数

```js
    var f=(a,b,c)=>{
        console.log("abc")
    }

```

- 箭头函数和普通匿名函数有哪些不同？
  - 函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
  - 不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
  - 不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。
  - （不常用）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。 
    - generator函数现在经常用async替代

## 对象的扩展

- Object.assign：实现拷贝继承
- 对象扩展运算符

```js
    var obj1={ age:5,gender:"男" }
    var obj2={ ...obj1 }
    var obj3={ ...obj1 , age:10 }

```

## Promise

## 为什么要有promise：解决（回调地狱）的问题

## 回调地狱：

```js
    //跟以前的if条件地狱很像
    // if(){
    //     if(){
    //         if(){
    //         }
    //     }
    // }

    $.get("/getUser",function(res){
        $.get("/getUserDetail",function(){
            $.get("/getCart",function(){
                $.get("/getBooks",function(){
                    //...
                })
            })
        })
    })

    //node开发：读取文件；开个服务器、接收一个请求、请求路径、访问数据库

```

## Promise函数基本用法

```js
    var promise=new Promise((resolve,reject)=>{
        //b 把需要执行的异步操作放在这里
        $.get("/getUser",res=>{
            //获取数据的异步操作已经执行完毕了，等待下一步的执行，通过执行resolve函数，告诉外界你可以执行下一步操作了
            //c、
            resolve(res)
            //而执行的下一步操作，其实就是写在then的回调函数中的
        })
    })
    //a、
    promise.then(res=>{
        //d、执行后续的操作
        console.log(res);
    })

```

## Promise函数实现多层回调

```js
    new Promise((resolve,reject)=>{
        $.get("/getUser",res=>{
            resolve(res)
        })
    }).then(res=>{
        //用户基本信息
        return new Promise(resolve=>{
            $.get("/getUserDetail",res=>{
                resolve(res)
            })
        })
    }).then(res=>{
        //用户详情
        return new Promise(resolve=>{
            $.get("/getCart",res=>{
                resolve(res)
            })
        })
    }).then(res=>{
        //购物车信息
    })

```

## Promise函数错误处理

- 第一种方式

```js
    new Promise((resolve,reject)=>{
        $.ajax({
            url:"/getUser",
            type:"GET",
            success:res=>{
                resolve(res);
            },
            error:res=>{
                reject(res)
            }
        })
    }).then(resSuccess=>{
        //成功的返回值
    },resError=>{
        //失败的返回值
    })

```

- 第二种方式

```js
    new Promise((resolve,reject)=>{
        $.ajax({
            url:"/getUser",
            type:"GET",
            success:res=>{
                resolve(res);
            },
            error:res=>{
                reject(res)
            }
        })
    }).then(resSuccess=>{
        //成功的返回值
    }).catch(resError=>{
        //失败的返回值
    })


```

## async

- async其实是一个promise的语法糖

```js
    async function get(){
        console.log('开始执行');
        var res = await timer()
        console.log('执行结束：',res);
    }
    function timer(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve("你好");
            },1000)
        })
    }
    get();

```

- await可以执行异步操作，但是await必须在async函数内执行
- await操作可以有返回值，这个返回值表示promise操作成功的返回值
- 如果await里面执行的异步操作发生了reject，或者发生了错误，那么只能使用try...catch语法来进行错误处理

## class

## 定义一个类

```js
    class Person {
        constructor(name) {
            this.name=name;
        }
    }
    //相当于：
    function Person(name){
        this.name=name;
    }

```

## 添加实例方法

```js
    class Person {
        constructor(name,age) {
            this.name=name;
            this.age=age;
        }
        //定义方法
        say() {
            console.log("大家好，我叫："+this.name+"，今年："+this.age+"岁");
        }
        travel(){
            console.log("坐着飞机去巴厘岛");
        }
    }

```

## 添加静态方法

- 静态成员：静态属性、静态方法
- 静态属性：通过类本身来访问：Person.maxAge
- 静态方法：通过类本身来访问的一个方法：Person.born();

```js
    class Animal {
        constructor(){

        }
        //这就是一个静态方法了
        static born(){
            console.log("小呆萌出生了")
        }
    }
    //访问静态方法
    Animal.born();

```

## 类的继承

```js
    //父类
    class Person {
        constructor(name){
            this.name=name;
        }
    }
    //Student类继承自Person类
    class Student extends Person {
        //构造方法
        constructor(name,grade){
            //规定：必须调用父类构造方法，如果不调用就会报错
            super(name);    
            //调用父类构造方法，从而给子类的实例添加了name属性

            this.grade=grade;
        }
    }

```

```js
[1,3,5].map(function(value,index){

})

[1,3,5].map((value,index)=>{

})

//以前变量和字符串拼接，现在用模板字符串


```

## es6的新语法

- 个人建议：不要去试想着一下子全部把之前的代码习惯变成es6的方式
  - 而是今年学会了模板字符串，把今天项目用到的所有字符串拼接都换成模板字符串
  - 过了几天学会了箭头函数，把当天项目里面的所有用到的匿名函数都换成箭头函数

## module -->放到后面的模块化课程中讲解

## 基本用法

- 导出模块：

```js
    //common.js
    export default { name:"abc" }

```

- 导入模块：

```js
    //b.js
    import common from "common.js"

    console.log( common.name ) //"abc"

```

## 模块有多个导出

```js
    //person.js
    export const jim = { country :"France" }
    export const tony = { color:"gray" }
    //默认的导出
    export default { name:"abc" }

```

```js
    //index.js
    import person , { jim , tony } from "person.js"

    //person：{ name:"abc" }
    //jim：{ country :"France" }
    //tony：{ color:"gray" }

```

## 模块导入导出取别名

```js
    //person.js
    export const tony = { color:"gray" }
    export { tony as Tony }

    //index.js
    import { Tony } from "person.js"
    import { Tony as man} from "person.js"

    console.log(man)    //{ color:"gray" }

```