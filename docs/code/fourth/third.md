# 基础面试题's brother(part3)

## 4.说几条写JS的基本规范

1. 不要在同一行声明多个变量。 
2. 请使用 ===/!==来比较true/false或者数值 
3. 使用对象字面量替代new Array这种形式 
4. 不要使用全局函数。 
5. Switch语句必须带有default分支 
6. 函数不应该有时候有返回值，有时候没有返回值。 
7. For循环必须使用大括号 
8. If语句必须使用大括号 
9. for-in循环中的变量 应该使用var关键字明确限定作用域，从而避免作用域污染。

## 5.JavaScript有几种类型的值？你能画一下他们的内存图吗？

* 栈：原始数据类型（Undefined，Null，Boolean，Number、String） 
* 堆：引用数据类型（对象、数组和函数）

* 两种类型的区别是：存储位置不同； 原始数据类型直接存储在栈(stack)中的简单数据段，占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储； 引用数据类型存储在堆(heap)中的对象,占据空间大、大小不固定,如果存储在栈中，将会影响程序运行的性能；引用数据类型在栈中存储了 指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其 在栈中的地址，取得地址后从堆中获得实体

## 6.Javascript如何实现继承？

1. 属性继承
2. call、apply、bind()
3. 原型链继承
4. 构造函数继承
5. 组合继承
6. 寄生组合继承

```js
1.属性继承
function Parent(){
    this.name="wang";
}
function Child(){
    this.age=21;
}
Child.prototype=new Parent()//继承了Parent,通过原型
var demo=new Child()//实例化
alert(demo.age);
alert(demo.name);//得到被继承的属性
```

```js
2.call//继承谁.call(谁继承,"参数","参数");
function Animal(){
    this.name="Animal";
    this.sayName=function(){
        alert(this.name);
    }
}
function Cat(){
    this.color="yellow";
}
var animal=new Animal();
var cat=new Cat();
Animal.call(cat,"");//使用字符串来写  继承的是Animal的属性和方法给cat
cat.sayName();//继承过来后cat使用一次sayName这个方法
```

```js
apply://继承谁.call(谁继承,["参数","参数"]);
Animal.apply(cat,["red","Lily"]);
```

```js
bind()//继承谁.bind(谁继承,"")();
Animal.bind(cat,"")();
```

```js
3.原型链继承
function Person(name){
    this.name=name;
};
Person.prototype.getName=function(){
    return this.name;
};
function test(){}
    test.prototype.sex="man";
    test.prototype.getSex=function(){
        alert(this.sex);
    }
test.prototype=new Person("");//可以获取到Person与Person.prototype上的值
var a=new test();
a.getSex();
a.getName();
```

```js
4.构造函数继承
function Person (name) {	//父类
    this.name = name;
    this.friends = ['小李','小红'];
    this.getName = function () {
        return this.name;
    }
};
function Parent (age) {		//子类
    Person.call(this,'老明');	//这一句是核心关键
    //这样就会在新parent对象上执行person构造函数中定义的所有对象初始化代码，
    //结果parent的每个实例都会聚有自己的friends属性的副本
    this.age = age;
};
var result = new Parent(23);
console.log(result.name);	//老明
console.log(result.friends);	//['小李','小红']
console.log(result.getName());	//老明
console.log(result.age);	//23
console.log(result.getSex());	//这个会报错，调用不了父类原型上面扩展的方法
```

```js
5.组合继承
function Person(name){
    this.name=name;
    this.friends=["小李","小红"];
};
Person.prototype.getName=function(){
    return this.name;
};
function Parent(age){
    Person.call(this,"老明");
    this.age=age;
};
Parent.prototype=new Person("老明");
var result=new Parent(24);
console.log(result.name);
console.log(result.getName());
result.friends.push("小智");
console.log(result.friends);
console.log(result.age);
var result1=new Parent(25);
//通过借用函数都有自己的属性，通过原型享用公共得犯法 console.log(result.name);
console.log(result1.friends);//["小李","小红"]
```

```js
6.寄生组合继承
function Person(name){ //父类
    this.name=name;
    this.friends=["小李","小红"];
}
Person.prototype.getName=function(){  //父类原型对象
    return this.name;
};
function Parent(age){  //子类
    Person.call(this,"老明");
    this.age=age;
}
(function (){
    var Super=function(){};//创建一个没有实例化的类中  中间类
    Super.prototype=Person.prototype;  //直接把父类原型对象上面的属性和方法给中间类的原型对象了
    Parent.prototype=new Super();  //将中间类实例作为子类的原型
})();//相当于把父类给了Super然后再实例化Super[其实实例化super就是在实例化Person]最后把他赋给子类就完成了继承
var result=new Parent(23);
console.log(result.name);
console.log(result.friends);
console.log(result.getName());
console.log(result.age);
```

## 7.javascript创建对象的几种方式？

1. new 操作符 + Object 创建对象
2. 原始模式
3. 工厂模式
4. 构造函数
5. 混合模式
6. json

```js
1.new 操作符 + Object 创建对象
var person = new Object();
    person.name = "lisi";
    person.age = 21;
    person.family = ["lida","lier","wangwu"];
    person.say = function(){
        alert(this.name);
}
```

```js
2.原始模式
var person = new Object();
person.name="lily";
person.age=22;
person.talk=function(){
    alert("好好学习");
}
console.log("person.name");
person.talk();
```

```js
3.工厂模式
function test(){
    var person=new Object();
    person.name="Lily";
    person.age=19;
    person.talk=function(){
        alert("好好学习");
    }
    return person;
}
var a=test();
console.log(a.name);
a.talk();
```

```js
4.构造函数
function Person(){
    this.name="lily";//不写实例化的时候这个this代表的是window
    this.age=23;
    this.talk=function(){
        alert("好好学习");
    }
}
var persona =new Person();
console.log(persona.name);
```

```js
5.混合模式
function Person(){
    Person.prototype.name="lily";
    Person.prototype.age=23;
    Person.prototype.talk=function(){
        alert("你好");
    }
}
var persona=new Person();
console.log(persona.name);
```

```js
6.json
var person={
    "name":"lily",
    "age":30,
    "talk":function(){
        alert("好好学习");
    },
    children:[{
        "name":"TOM",
        "age":2
    },{
        "name":"jerry",
        "age":5
    }]
}
console.log(person.children[1].name);
```

## 8.JavaScript中，有一个函数，执行时对象查找时，永远不会去查找原型，这个函数是？

`hasOwnProperty`

* JavaScript中hasOwnProperty函数方法是返回一个布尔值，指出一个对象是否具有指定名称的属性。此方法无法检查该对象的原型链中是否 具有该属性；该属性必须是对象本身的一个成员。 

* 使用方法：

  object.hasOwnProperty(proName) 其中参数object是必选项。一个对象的实例。 proName是必选项。一个属性名称的字符串值。 如果 object 具有指定名称的属性，那么JavaScript中hasOwnProperty函数方法返回 true，反之则返回 false。

## 9.JSON的了解？

* JSON(JavaScript Object Notation) 是一种轻量级的数据交换格式。 它是基于JavaScript的一个子集。数据格式简单, 易于读写, 占用带宽小

如：`{"age":"12", "name":"back"}`

```js
JSON字符串转换为JSON对象:
var obj = eval('('+ str +')'); //不推荐使用
var obj = str.parseJSON();
var obj = JSON.parse(str);
```

```js
JSON对象转换为JSON字符串：
var last=obj.toJSONString();
var last=JSON.stringify(obj);
```

## 10.写出您知道的JS的 Array对象方法

* javascript数组属性：`length`、`prototype`、`constructor`

* javascript数组方法： `concat()`、`pop()`、`push()`、`reverse()`、`sort()`、`join()`、`toString()`、`shift()`、`slice()`、`splice()`、`unshift()`

## 11.编写一个函数判断undefined、null、与NaN

```js
//判断undefined:
var tmp = undefined;
alert("undefined");
if (typeof(tmp) == "undefined"){
}
```

```js
//判断null:
var tmp = null;
alert("null");
if (!tmp && typeof(tmp)!="undefined" && tmp!=0){
}
```

```js
//判断NaN:
var tmp = 0/0;
alert("NaN");
if(isNaN(tmp)){
}
```

```js
//判断undefined和null:
var tmp = undefined;
alert("null or undefined");
if (tmp == undefined){
}
var tmp = undefined;
alert("null or undefined");
if (tmp == null){
}
//说明：null==undefined
```

```js
//判断undefined、null与NaN:
var tmp = parseInt("sdfe");
alert("null or undefined or NaN");
if ((!tmp)&&(tmp!=0)){
}
```



## jQuery:heart_eyes_cat:

## 1.jQuery绑定事件的三种方法以及区别

```js
1.target.click(function(){}); 一次绑定一个事件
2.target.bind("click",function(){}); 可以同时绑定多个事件
3.target.live("click",function(){}); 委派事件（1.7以下版本支持）
```

















































