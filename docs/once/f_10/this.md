# 2.如何正确判断this的指向?

## 原理

讨论this的指向,就要从四个角度来分析看触发this的方式去决定this指向哪里

1. 方法调用 this指向调用者

```js
var obj = {
    name: '残梦博客园',
    say: function(){
        console.log(this.name)    //残梦博客园
    }
}
obj.say();     //看这里面的this指向,需要看调用他的对象     !!!!所以要看这行!!!
```

2. 函数调用 this指向window

```js
function getName(){
    console.log(this)    //window
}
getName()     //先写一个函数,然后调用这个函数,就是指向window  
```
<font color=red>如果在严格模式下,会出现undefined</font>
```js
function getName(){
    `use strict`
    console.log(this)    //undefined
}
getName()     //函数内部为严格模式要求,就出现了undefined
```

3. new构造函数调用  this指向实例

```js
function Person(name){
    this.name = name
}
var person = new Person('残梦')
var person1 = new Person('博客园')
console.log(person,person1)  //Person {name: "残梦"} Person {name: "博客园"}
// 通过new调用的时候,this就会指向他的实例  什么意思呢?
// var person = new Person('残梦')运行的时候,会调用Person函数,并且把参传递过去,这个时候的this就会指向person
```

4. call,apply等特殊方式  this指向他们的第一个参数

```js
function person(){
	name = '残梦博客园'
}
function obj(){
	console.log(this.name)
}
//我们想让obj的this指向person函数
person.call(obj)    //这个单纯的改变指向,没有任何其他作用
//和apply相比,只是参数不一样
obj()      //残梦博客园
//上面我调用了obj这个函数,发现他的this指向了person函数
```

5. es6箭头函数  this会指向父元素的this指向
