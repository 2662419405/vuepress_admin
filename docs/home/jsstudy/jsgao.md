# JS高级第一天

## JS基本介绍

- JS的用途：Javascript可以实现浏览器端、服务器端(nodejs)。。。
- 浏览器端JS由以下三个部分组成：
  - ECMAScript：基础语法(数据类型、运算符、函数。。。)
  - BOM(浏览器对象模型)：window、location、history、navigator。。。
  - DOM(文档对象模型)：div、p、span。。。
- ECMAScript又名es，有以下重大版本：
  - 旧时代：
    - es1.0。。。es3.1
  - 新时代：
    - es5
    - es6(es2015)
    - es7(es2016)、es8(es2017)

## 数据类型

- 基本数据类型——值类型：(数字、字符串、布尔值、null、undefined)
  - undefined类型？
- 复杂数据类型——引用类型：(对象)
  - 数组
  - 函数
  - 正则表达式
  - Date

## 创建对象的6种方式总结

### new 操作符 + Object 创建对象

```js
var person = new Object();
    person.name = "lisi";
    person.age = 21;
    person.family = ["lida","lier","wangwu"];
    person.say = function(){
        alert(this.name);
}
```

### 二、字面式创建对象

```js
var person ={
    name: "lisi",
    age: 21,
    family: ["lida","lier","wangwu"],
    say: function(){
        alert(this.name);
    }
};
```

### 三、工厂模式

```js
function createPerson(name,age,family) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.family = family;
    o.say = function(){
        alert(this.name);
    }
    return o;
}

var person1 =  createPerson("lisi",21,["lida","lier","wangwu"]);   //instanceof无法判断它是谁的实例，只能判断他是对象，构造函数都可以判断出
var person2 =  createPerson("wangwu",18,["lida","lier","lisi"]);
console.log(person1 instanceof Object);                           //true
```

### 四、构造函数模式

```js
function Person(name,age,family) {
    this.name = name;
    this.age = age;
    this.family = family;
    this.say = function(){
        alert(this.name);
    }
}
var person1 = new Person("lisi",21,["lida","lier","wangwu"]);
var person2 = new Person("lisi",21,["lida","lier","lisi"]);
console.log(person1 instanceof Object); //true
console.log(person1 instanceof Person); //true
console.log(person2 instanceof Object); //true
console.log(person2 instanceof Person); //true
console.log(person1.constructor);      //constructor 属性返回对创建此对象的数组、函数的引用
```

### 五、原型模式

```js
function Person() {
}

Person.prototype.name = "lisi";
Person.prototype.age = 21;
Person.prototype.family = ["lida","lier","wangwu"];
Person.prototype.say = function(){
    alert(this.name);
};
console.log(Person.prototype);   //Object{name: 'lisi', age: 21, family: Array[3]}

var person1 = new Person();        //创建一个实例person1
console.log(person1.name);        //lisi

var person2 = new Person();        //创建实例person2
person2.name = "wangwu";
person2.family = ["lida","lier","lisi"];
console.log(person2);            //Person {name: "wangwu", family: Array[3]}
// console.log(person2.prototype.name);         //报错
console.log(person2.age);              //21
```

### 六、混合模式（构造函数模式+原型模式）

```js
function Person(name,age,family){
    this.name = name;
    this.age = age;
    this.family = family;
}

Person.prototype = {
    constructor: Person,  //每个函数都有prototype属性，指向该函数原型对象，原型对象都有constructor属性，这是一个指向prototype属性所在函数的指针
    say: function(){
        alert(this.name);
    }
}

var person1 = new Person("lisi",21,["lida","lier","wangwu"]);
console.log(person1);
var person2 = new Person("wangwu",21,["lida","lier","lisi"]);
console.log(person2);
```

## 对象的基本使用

### 创建一个对象

```js
    var student={ 
        name:"李白" , //student有一个name属性，值为"李白"
        grade:"初一" ,
        //a、student有一个say属性，值为一个函数
        //b、student有一个say方法
        say:function(){
            console.log("你好");
        },
        run:function(speed){
            console.log("正在以"+speed+"米/秒的速度奔跑");
        }
    }
```

### 对象是键值对的集合：对象是由属性和方法构成的 (ps：也有说法为：对象里面皆属性，认为方法也是一个属性)

- name是属性    grade是属性
- say是方法     run是方法

### 对象属性操作

#### 获取属性：

#### 第一种方式：.语法

- student.name      获取到name属性的值，为："李白"
- student.say       获取到一个函数

#### 第二种方式：[]语法

- student["name"]   等价于student.name
- student["say"]    等价于student.say

#### 号外：2种方式的差异：

- .语法更方便，但是坑比较多(有局限性)，比如：
  - .后面不能使用js中的关键字、保留字(class、this、function。。。)
  - .后面不能使用数字

```js
    var obj={};
    obj.this=5; //语法错误
    obj.0=10;   //语法错误
```

- []使用更广泛
  - o1[变量name]
  - ["class"]、["this"]都可以随意使用 `obj["this"]=10`
  - [0]、[1]、[2]也可以使用       
    - `obj[3]=50 = obj["3"]=50`     
    - 思考：为什么obj[3]=obj["3"]
  - 甚至还可以这样用：["[object Array]"]
    - jquery里面就有这样的实现
  - 也可以这样用：["{abc}"]
    - 给对象添加了{abc}属性

#### 设置属性

- `student["gender"]="男"`    等价于：    `student.gender="男"`
  - 含义：如果student对象中没有gender属性，就添加一个gender属性，值为"男"
  - 如果student对象中有gender属性，就修改gender属性的值为"男"
- 案例1：`student.isFemale=true`
- 案例2：`student["children"]=[1,2,5]`
- 案例3：

```js
    student.toShanghai=function(){   
        console.log("正在去往上海的路上")   
    }
```

#### 删除属性

- delete student["gender"]      
- delete student.gender



## 通过构造函数创建对象

### 构造函数创建对象的例子：

- var xiaoming = new Object()     -->   var xiaoming = {};  
- var now = new Date() 
- var rooms = new Array(1,3,5)    -->   var rooms = [1,3,5]
- `var isMale=/123/;`   ==> `var isMale=new RegExp("123")`
  - isMale是通过RegExp构造函数创建出来的对象
  - isMale是RegExp构造函数的实例
- 以上例子中，Object、Date、Array都是内置的构造函数

## 自定义一个构造函数来创建对象

- 构造函数

```js
    function Person(name,age){
        this.name=name;
        this.age=age;
    }
    var p1=new Person("赵云",18)
```

- 说明：`p1就是根据【Person构造函数】创建出来的对象`

### 构造函数的概念

- 任何函数都可以当成构造函数
  `function CreateFunc(){ }`
- 只要把一个函数通过new的方式来进行调用，我们就把这一次函数的调用方式称之为：构造函数的调用
  - new CreateFunc(); 此时CreateFunc就是一个构造函数
  - CreateFunc();     此时的CreateFunc并不是构造函数

### 关于new Object()

- new Object()等同于对象字面量{}

### 构造函数的执行过程

`var p1=new Person();`

- 1、创建一个对象 (我们把这个对象称之为Person构造函数的实例)- `_p1 `

- 2、创建一个内部对象，`this`，将this指向该实例(_p1)

- 3、执行函数内部的代码，其中，操作this的部分就是操作了该实例(_p1)

- 4、返回值：

  - a、如果函数没有返回值(没有return语句)，那么就会返回构造函数的实例(p1)
  - b、如果函数返回了一个基本数据类型的值，那么本次构造函数的返回值是该实例(_p1)

  ```js
      function fn(){
          
      }
      var f1=new fn();    //f1就是fn的实例
  
      function fn2(){
          return "abc";
      }
      var f2=new fn2();   //f2是fn2构造函数的实例
  ```

  - c、如果函数返回了一个复杂数据类型的值，那么本次函数的返回值就是该值

  ```js
      function fn3(){
          return [1,3,5]; 
          //数组是一个对象类型的值，
          //所以数组是一个复杂数据类型的值
          //-->本次构造函数的真正返回值就是该数组
          //-->不再是fn3构造函数的实例
      }
      var f3=new fn3();   //f3还是fn3的实例吗？错
      //f3值为[1,3,5]
  ```



## 继承

### JS中继承的概念：

- 通过【某种方式】让一个对象可以访问到另一个对象中的属性和方法，我们把这种方式称之为继承  `并不是所谓的xxx extends yyy`

### 为什么要使用继承？

- 有些对象会有方法(动作、行为)，而这些方法都是函数，如果把这些方法和函数都放在构造函数中声明就会导致内存的浪费

```js
    function Person(){
        this.say=function(){
            console.log("你好")
        }
    }
    var p1=new Person();
    var p2=new Person();
    console.log(p1.say === p2.say);   //false
```

### 继承的第一种方式：原型链继承1

```js
    Person.prototype.say=function(){
        console.log("你好")
    }
```

- 缺点：添加1、2个方法无所谓，但是如果方法很多会导致过多的代码冗余

### 继承的第二种方式：原型链继承2

```js
    Person.prototype = {
        //切记不能忘记
        constructor:Person,
        say:function(){
            console.log("你好");
        },
        run:function(){
            console.log("正在进行百米冲刺");
        }
    }

```

- 注意点：
- a、一般情况下，应该先改变原型对象，再创建对象
- b、一般情况下，对于新原型，会添加一个constructor属性，从而不破坏原有的原型对象的结构

### 继承的第三种方式：拷贝继承(混入继承：mixin)

- 场景：有时候想使用某个对象中的属性，但是又不能直接修改它，于是就可以创建一个该对象的拷贝
- 实际运用：
  - jquery：$.extend：编写jquery插件的必经之路
    - 基于jquery封装一个表格控件

```js
    var o1={ age:2 };

    var o2 = o1;
    o2.age=18;      
    //1、修改了o2对象的age属性
    //2、由于o2对象跟o1对象是同一个对象
    //3、所以此时o1对象的age属性也被修改了

```

```js
    var o3={gender:"男",grade:"初三",group:"第五组",name:"张三"};
    var o4={gender:"男",grade:"初三",group:"第五组",name:"李四"};
    //上述代码中，如果使用拷贝继承对代码进行优化会非常和谐

    //实现拷贝继承：
    //1、已经拥有了o3对象
    //2、创建一个o3对象的拷贝(克隆)：for...in循环
    

    //3、修改克隆对象，把该对象的name属性改为"李四"
    

```

- 实现1：

```js
    var source={name:"李白",age:15}
    var target={};
    target.name=source.name
    target.age=source.age;

```

- 浅拷贝和深拷贝

  - 浅拷贝只是拷贝一层属性，没有内部对象
  - 深拷贝其实是利用了递归的原理，将对象的若干层属性拷贝出来

  ```js
      var students=[
          {name:"",age:""},
          {name:"",age:""}
      ]
  
  ```

- 上面的方式很明显无法重用，实际代码编写过程中，很多时候都会使用拷贝继承的方式，所以为了重用，可以编写一个函数把他们封装起来：

```js
    function extend(target,source){
        for(key in source){
            target[key]=source[key];
        }
        return target;
    }
    extend(target,source)

```

- 由于拷贝继承在实际开发中使用场景非常多，所以很多库都对此有了实现
  - jquery：$.extend
- es6中有了 <对象扩展运算符> 仿佛就是专门为了拷贝继承而生：
  - 优点：简单的令人发指

```js
    var source={name:"李白",age:15}
    //让target是一个新对象，同时拥有了name、age属性
    var target={ ...source }
    
    var target2={ ...source,age:18 }

```

### 继承的第四种方式：原型式继承：(道格拉斯在蝴蝶书中提出来的)

- 场景：

  - a、创建一个纯洁的对象：对象什么属性都没有

  - b、创建一个继承自某个父对象的子对象

    ```js
        var parent={ age:18,gender:"男"};
        var student=Object.create(parent);
        //student.__proto__===parent
    
    ```

- 使用方式：

  - 空对象：Object.create(null)
  - 

  ```js
      var o1={ say:function(){} }
      var o2=Object.create(o1);
  
  ```

### 继承的第五种方式：借用构造函数实现继承

- 场景：适用于2种构造函数之间逻辑有相似的情况
- 原理：函数的call、apply调用方式

```js
function Animal(name,age,gender){
    this.name=name;
    this.age=age;
    this.gender=gender;
}
function Person(name,age,gender,say){
    this.name=name;
    this.age=age;
    this.gender=gender;

    this.say=function(){

    }
}

```

- 局限性：Animal(父类构造函数)的代码必须完全适用于Person(子类构造函数)
- 以上代码用借用构造函数实现

```js
function Animal(name,age){
    this.name=name;
    this.age=age;
}
function Person(name,age,address){
    Animal.call(this,name);
    //this.name=name;
    //this.age=age;
    this.address=address;
}

```

- 寄生继承、寄生组合继承

## 原型链(家族族谱)

- 概念：JS里面的对象可能会有父对象，父对象还会有父对象，。。。。。祖先

- 根本：继承

  - 属性：对象中几乎都会有一个__proto__属性，指向他的父对象
    -意义：可以实现让该对象访问到父对象中相关属性

- 根对象：Object.prototype

  - var arr=[1,3,5]
  - arr.__proto__：Array.prototype
  - arr.__proto__.__proto__找到了根对象

  ```js
      function Animal(){}
      var cat=new Animal();
      //cat.__proto__：Animal.prototype
      //cat.__proto__.__proto__:根对象
  
  ```

- 错误的理解：万物继承自Object？

## 闭包

### 变量作用域

- 变量作用域的概念：就是一个变量可以使用的范围
- JS中首先有一个最外层的作用域：称之为全局作用域
- JS中还可以通过函数创建出一个独立的作用域，其中函数可以嵌套，所以作用域也可以嵌套

```js
var age=18;     //age是在全局作用域中声明的变量：全局变量

function f1(){
    console.log(name);      //可以访问到name变量
    var name="周董" //name是f1函数内部声明的变量，所以name变量的作用域就是在f1函数内部

    console.log(name);      //可以访问到name变量

    console.log(age);       //age是全局作用域中声明的，所以age也可以访问
}

console.log(age);       //也可以访问

```

```js
    //多级作用域
    //-->1级作用域
    var gender="男";
    function fn(){
        //问题：
        //gender:可以访问
        //age:  可以访问
        //height:不能访问

        //-->2级作用域
        return function(){
            //问题：
            //gender:   通过一级一级作用域的查找，发现gender是全局作用域中声明的变量
            //age:
            //height：
            console.log(gender);

            //-->3级作用域
            var height=180;
        }
        var age=5;
    }

```

### 作用域链

- 由于作用域是相对于变量而言的，而如果存在多级作用域，这个变量又来自于哪里？这个问题就需要好好地探究一下了，我们把这个变量的查找过程称之为变量的作用域链
- 作用域链的意义：查找变量（确定变量来自于哪里，变量是否可以访问）
- 简单来说，作用域链可以用以下几句话来概括：(或者说：确定一个变量来自于哪个作用域)
  - 查看当前作用域，如果当前作用域声明了这个变量，就确定结果
    - 查找当前作用域的上级作用域，也就是当前函数的上级函数，看看上级函数中有没有声明
      - 再查找上级函数的上级函数，直到全局作用域为止
        - 如果全局作用域中也没有，我们就认为这个变量未声明(xxx is not defined)
- 举例1：

```js
    var name="张三";
    function f1(){
        var name="abc";
        console.log(name);
    }
    f1();

```

- 举例2：

```js
    var name="张三";
    function f1(){
        console.log(name);
        var name="abc";
    }
    f1();

```

- 举例3：

```js
    var name="张三";
    function f1(){
        console.log(name);
        var name="abc";
    }
    f1();

```

- 举例4：

```js
    var name="张三";
    function f1(){
        return function(){
            console.log(name);
        }
        var name="abc";
    }
    var fn=f1();
    fn();

```

- 举例5：

```js
    var name="张三";
    function f1(){
        return {
            say:function(){
                console.log(name);
                var name="abc";
            }
        }
    }
    var fn=f1();

```

### 闭包的问题

```js
    function fn(){
        var a=5;
        return function(){
            a++;
            console.log(a);
        }
    }
    var f1=fn();
    f1();
    f1();
    f1();

```

### 闭包问题的产生原因

- 函数执行完毕后，作用域中保留了最新的a变量的值

### 闭包的应用场景

- 模块化
- 防止变量被破坏

### 函数的4种调用方式

- 在`ES6之前`，函数内部的this是由该函数的调用方式决定的
  - 函数内部的this跟大小写、书写位置无关
- 1、函数调用

```js
    var age=18;
    var p={
        age:15
        say:function(){
            console.log(this.age);//window.age:18
        }
    }
    var s1=p.say
    s1();       //函数调用

```

- 2、方法调用

```js
    var age=18;
    var p={
        age:15
        say:function(){
            console.log(this.age);//this:p
            //this.age->p.age:15
        }
    }
    p.say()//方法调用

```

- 3、new调用(构造函数)

```js
    var age=18;
    var p={
        age:15
        say:function(){
            //this：say构造函数的实例,实例中并没有age属性，值为：undefined
            console.log(this.age);
        }
    }
    new p.say()//构造函数调用
    //相当于：
    var s1=p.say;
    new s1();

```

- 4、上下文方式(call、apply、bind)

```js
    var length=21;
    function f1(){
        console.log(this.length);
    }
    f1.call([1,3,5])    //3
    f1.apply(this)      //window.length：21
    f1.call(5)          //undefined

```

- 上下文模式应用场景：
  - 一些需要指定this的情况，比如$.each方法回调函数内部的this
  - 判断数据类型：
    - Object.prototype.toString.call(1);

- 在ES6的箭头函数之前的时代，想要判断一个函数内部的this指向谁，就是根据上面的四种方式来决定的



### 原型

- 原型很多人开发用不到？
  - 很多人都用es6/7/8开发，确实用的比较少
  - 如果你用es5之前的版本开发代码(IE8、IE7。。。)，可能天天都要写原型
  - 理解了原型，才是理解了JS面向对象的核心
- 类继承其实本质上还是用原型继承来(包装)的

## 对象的属性查找规则

//-->1、首先查看本身有没有length属性
//-->2、如果本身没有该属性，那么去它的原型对象中查找
//-->3、如果原型对象中没有，那么就去原型对象的原型对象中查找，最终一直找到根对象（Object.prototype）
//-->4、最终都没有找到的话，我们认为该对象并没有该属性，如果获取该属性的值：undefined

## 补充，判断数据类型

- typeof 
  - typeof只能判断：数字、字符串、布尔值、undefined、函数
- `Object.prototype.toString.call()`
  - 5  '[object Number]'
  - "abc" '[object String]'
  - true '[object Boolean]'
  - null '[object Null]'
  - undefined '[object Undefined]'
  - [1,3,5] '[object Array]'
  - function(){}  '[object Function]'
  - new Date()   '[object Date]'
  - /abc/        '[object RegExp]'
- Array.isArray()  es5中提出来的检测数组
- isNaN()   
- isInfinity()

## 指向window

```js
$.ajax({
    success:function(){
        console.log(this);        //window
    }
})

```

```js
[1,3,5].map(function(){
    console.log(this);      //window
})

```

```js
    $("div")

    `${$}`
    `${$('div')}`

```

## global和window的区别

- global是es中全局作用域中的根对象
  - 但是nodejs里面，global全是表示全局变量的载体
  - 浏览器端的js里面，全局变量都放在了window中，浏览器中不存在global对象



# js严格模式特点

1. 不允许使用未定义的变量

```js
var a = 2   //正确
a = 2       //错误

```

2. 禁止this指向全局对象,那么函数调用的时候就会显示undefined

```js
function getThis(){
    'use strict'
    console.log(this)  //undefined
}
getThis()

```

3. 不允许函数有相同的参数,不允许对象有相同的属性

```js
'use strict'
function add(a,a){
    
}
var obj = {
    g: '残梦',
    g: '博客园'
}

```

4. 不允许对只读属性进行赋值

```js
var obj = {
    name: '残梦博客园'
}
Object.defineProperty(obj,name,{value:0})
obj.name = '欢迎你的到来'

```

5. eval()的作用域创建的变量不能被外部访问

```js
"use strict";
eval ("var x = 2");
alert (x); 

```

6. 不能使用关键字作为变量名