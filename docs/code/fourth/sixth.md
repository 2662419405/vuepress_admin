# 基础面试题's brother(part6)

## 1.什么是AMD模块系统和CMD模块系统，以及AMD、CMD规范区别？

* AMD 是 RequireJS 在推广过程中对模块定义的规范化产出
* CMD是SeaJS在推广过程中对模块化定义的规范化产出
  上述两种规范是服务于JavaScript的模块化开发，目前两种都能实现浏览器端的**模块化开发的目的**，不同之处是**CMD是懒执行,AMD是预执行**

1.  对于依赖的模块，AMD 是提前执行，CMD 是延迟执行。不过 RequireJS 从 2.0 开始，也改成可以延迟执行（根据写法不同，处理方式 不同）。CMD 推崇 as lazy as possible.

2.  CMD 推崇依赖就近，AMD 推崇依赖前置。看代码：

   ```js
   // CMD
   define(function(require, exports, module) {
    var a = require('./a')
    a.doSomething()
    // 此处略去 100 行
    var b = require('./b') // 依赖可以就近书写
    b.doSomething()
    // ...
   })
   // AMD 默认推荐
   define(['./a', './b'], function(a, b) { // 依赖必须一开始就写好
    a.doSomething()
    // 此处略去 100 行
    b.doSomething()
     // ...
   })
   ```

## 2.documen.write和 innerHTML的区别

* `document.write`只能重绘整个页面
* `innerHTML`可以重绘页面的一部分

## 3.call() 和 .apply() 的区别？

* 例子中用`add`来替换`sub`，`add.call(sub,3,1) == add(3,1)`，所以运行结果为:`alert(4); `

* 注意：js 中的函数其实是对象，函数名是对Function对象的引用。

  ```js
   function add(a,b){ 
   	alert(a+b); 
   }
   function sub(a,b){ 
   	alert(a-b); 
   }
   add.call(sub,3,1); 
  ```

## 4.滚动加载图片(懒加载)实现原理

::: tip 仔细看哦，以后会用到的！！！

看完后，彩蛋献上，你将知道Who I am

:::

一、什么是图片滚动加载？ 

* 通俗的讲就是：当访问一个页面的时候，先把`img`元素或是其他元素的背景图片路径替换成一张大小为`1*1px`图片的路径（这样就只需请求一次），只有当图片出现在浏览器的可视区域内时，才设置图片正真的路径，让图片显示出来。这就是图片懒加载。

二、为什么要使用这个技术

* 比如一个页面中有很多图片，如淘宝、京东首页等等，如果一上来就发送这么多请求，页面加载就会很漫长，如果js文件都放在了文档 的底部，恰巧页面的头部又依赖这个js文件，那就不好办了。更为要命的是：一上来就发送百八十个请求，服务器可能就吃不消了（又不是只有一两个人在访问这个页面）。
* 因此优点就很明显了：不仅可以减轻服务器的压力，而且可以让加载好的页面更快地呈现在用户面前（用户体验好）。

三、怎么实现？

* 关键点如下

  1. 页面中的`img`元素，如果没有`src`属性，浏览器就不会发出请求去下载图片（也就没有请求咯，也就提高性能咯），一旦通过javascript设置了图片路径，浏览器才会送请求。有点按需分配的意思，你不想看，就不给你看，你想看了就给你看~

  2. 如何获取真正的路径，这个简单，现在正真的路径存在元素的`“data-url”`（这个名字起个自己认识好记的就行）属性里，要用的时候就取出来，再设置；

  3. 开始比较之前，先了解一些基本的知识，比如说如何获取某个元素的尺寸大小、滚动条滚动距离及偏移位置距离； 

     <img src="https://raw.githubusercontent.com/Wangjiateng666/img/master/sixth-4.jpg"/>

     1)屏幕可视窗口大小：对应于图中1、2位置处

     ```js
     原生方法：window.innerHeight 标准浏览器及IE9+ || document.documentElement.clientHeight 标准浏览器及低版本IE标准模式 ||
        　　　　　　　　document.body.clientHeight 低版本混杂模式
                
     jQuery方法： $(window).height() 
     ```

     2)浏览器窗口顶部与文档顶部之间的距离，也就是滚动条滚动的距离：也就是图中3、4处对应的位置；

     ```js
     原生方法：window.pagYoffset——IE9+及标准浏览器 || document.documentElement.scrollTop 兼容ie低版本的标准模式 ||
     　　　　　　　　　document.body.scrollTop 兼容混杂模式；
     
     jQuery方法：$(document).scrollTop(); 
     ```

     3)获取元素的尺寸：对应于图中5、6位置处；左边jquery方法，右边原生方法

     ```js
     	  $(o).width() = o.style.width; 
     
     　　　　$(o).innerWidth() = o.style.width+o.style.padding;
     
     　　　　$(o).outerWidth() = o.offsetWidth = o.style.width+o.style.padding+o.style.border;
     
     　　　　$(o).outerWidth(true) = o.style.width+o.style.padding+o.style.border+o.style.margin;
     
     　　　　注意：要使用原生的style.xxx方法获取属性，这个元素必须已经有内嵌的样式，如<div style="...."></div>；
     
     　　　　如果原先是通过外部或内部样式表定义css样式，必须使用o.currentStyle[xxx] || document.defaultView.getComputedStyle(0)[xxx]来获取样式值
     ```

     4)获取元素的位置信息：对应与图中7、8位置处

     * 返回元素相对于文档`document`顶部、左边的距离；

       ```js
       jQuery：$(o).offset().top元素距离文档顶的距离，$(o).offset().left元素距离文档左边缘的距离
       
       　　　　原生：getoffsetTop()，高程上有具体说明，这边就忽略了；
       
       　 　　  顺便提一下返回元素相对于第一个以定位的父元素的偏移距离，注意与上面偏移距的区别；
           　　  jQuery：position()返回一个对象，$(o).position().left = style.left，$(o).position().top = style.top；
       ```

  4. 知道如何获取元素尺寸、偏移距离后，接下来一个问题就是：如何判断某个元素进入或者即将进入可视窗口区域？下面也通过一张图来说明问题。

     <img src="https://raw.githubusercontent.com/Wangjiateng666/img/master/sixth-4-1.jpg"/>

     1. 外面最大的框为实际页面的大小，中间浅蓝色的框代表父元素的大小，对象1~8代表元素位于页面上的实际位置；以水平方向来做如下说明！
     2. 对象8左边界相对于页面左边界的偏移距离（offsetLeft）大于父元素右边界相对于页面左边界的距离，此时可判读元素位于父元素之外；
     3. 对象7左边界跨过了父元素右边界，此时：对象7左边界相对于页面左边界的偏移距离（offsetLeft）小于父元素右边界相对于页面左边界的距离，因此对象7就进入了父元素可视区;
     4. 在对象6的位置处，对象5的右边界与页面左边界的距离 大于 父元素左边界与页面左边界的距离；
     5. 在对象5位置处时，对象5的右边界与页面左边界的距离 小于 父元素左边界与页面左边界的距离；此时，可判断元素处于父元素可视区外；
     6. 因此水平方向必须买足两个条件，才能说明元素位于父元素的可视区内；同理垂直方向也必须满足两个条件；具体见下文的源码；

::: tip 终于整理好

<a href="https://www.cnblogs.com/flyromance/p/5042187.html">详细的源码请点我哦,路已经给各位探好了:athletic_shoe:</a>

<a href="https://www.degraeve.com/img2txt-yay.php?url=https%3A%2F%2Fraw.githubusercontent.com%2FWangjiateng666%2Fimg%2Fmaster%2F5.jpg&mode=A&size=100&charstr=ABCDEFGHIJKLMNOPQRSTUVWXYZ&order=O&invert=N">:candy::egg:</a>

:ballot_box_with_check:

:::

## 5.POST、GET区别

1.  get是从服务器上获取数据，post是向服务器传送数据。
2.  get是把参数数据队列加到提交表单的`ACTION`属性所指的`URL`中，值和表单内各个字段一一对应，在URL中可以看到。post是通过`HTTP post`机制，将表单内各个字段与其内容放置在`HTML HEADER`内一起传送到`ACTION`属性所指的`URL`地址。用户看不到这个过程
3.  对于get方式，服务器端用`Request.QueryString`获取变量的值，对于post方式，服务器端用`Request.Form`获取提交的数据
4.  get传送的数据量较小，不能大于`2KB`。post传送的数据量较大，一般被默认为不受限制。但理论上，`IIS4`中最大量为80KB，`IIS5`中为 100KB
5.  get安全性非常低，post安全性较高。但是执行效率却比Post方法好

## 6.BOM和DOM

BOM中的对象

<img src="https://raw.githubusercontent.com/Wangjiateng666/img/master/sixth-6.jpg"/>

1. Window对象：是整个BOM的核心，所有对象和集合都以某种方式回接到window对象。Window对象表示整个浏览器窗口，但不必表示其中包含 的内容。 
2. Document对象：实际上是window对象的属性。这个对象的独特之处是唯一一个既属于BOM又属于DOM的对象。从BOM角度看，document对象由一系列集合构成，这些集合可以访问文档的各个部分。 
3. Location对象：它是window对象和document对象的属性。Location对象表示载入窗口的URL，此外它还可以解析URI. 
4. Navigator对象：Navigator包含大量Web浏览器相关的信息。各种浏览器支持该对象的属性和方法不尽相同。 
5. Screen对象：通过其可以获取用户屏幕相关的信息

DOM文档对象模型

* DOM是针对XML的基于树的API。描述了处理网页内容的方法和接口，是HTML和XML的API，DOM把整个页面规划成由节点层级构成的文档。 DOM本身是与语言无关的API，它并不与Java，JavaScript或其他语言绑定。
* <a href="<http://blog.csdn.net/zhangzeyuaaa/article/details/17414711">来源</a>

## 7.call和apply的区别是什么？第一个参数都有什么意义？

1. call方法:

   语法：`call(thisObj，Object)` 

   定义：调用一个对象的一个方法，以另一个对象替换当前对象。 

   说明： `call`方法可以用来代替另一个对象调用一个方法。`call`方法可将一个函数的对象上下文从初始的上下文改变为由`thisObj`指定的新对 象。 

   如果没有提供`thisObj`参数，那么`Global`对象被用作`thisObj`。

2. apply方法：

   语法：`apply(thisObj，[argArray]) `

   定义：应用某一对象的一个方法，用另一个对象替换当前对象。 

   说明： 如果`argArray`不是一个有效的数组或者不是`arguments`对象，那么将导致一个 `TypeError`。 

   如果没有提供`argArray`和`thisObj`任何一个参数，那么`Global`对象将被用作`thisObj`， 并且无法被传递任何参数。

* 代码示例

```js
function Animal(name) {
this.name = name;
this.showName = function() {
console.log(this.name);
};
}

function Cat(name) {
Animal.call(this, name);
}
Cat.prototype = new Animal();

function Dog(name) {
Animal.apply(this, name);
}
Dog.prototype = new Animal();

var cat = new Cat("Black Cat"); //call必须是object

var dog = new Dog(["Black Dog"]); //apply必须是array

cat.showName();
dog.showName();

console.log(cat instanceof Animal);//instanceof 用于判断一个变量是否某个对象的实例
console.log(dog instanceof Animal);
```

* 模拟call，apply的this替换

```js
function Animal(name) {
this.name = name;
this.showName = function() {
alert(this.name);
};
};

function Cat(name) {
this.superClass = Animal;
this.superClass(name);
delete superClass;
}

var cat = new Cat("Black Cat");
cat.showName();
```

## 8.请解释 function prototype.blind的作用

```js
var foo = {
 x: 3
}
console.log(this.x);
}
var bar = function(){
bar(); // undefined
var boundFunc = bar.bind(foo);
boundFunc(); // 3(我们创建了一个新的函数，当它被执行的时候，它的 this 会被设置成 foo —— 而不是像我们调用 bar() 时的全局作用域。)
```

* `.bind()`创建了一个函数，当这个函数在被调用的时候，它的`this`关键词会被设置成被传入的值（这里指调用`bind()`时传入的参数）。因 此，我们传入想要的上下文，`this`(其实就是 myObj)，到`.bind()`函数中。然后，当回调函数被执行的时候，` this `便指向` myObj` 对象。

## 9.Attribute和property的区别是什么？

> 答案待考证

## 10.如何添加html元素的事件，有几种方法？

1. 通过HTML元素属性。简单说来就是在html结构中，给你要添加事件的元素添加一个属性。

   `属性名为 'on' + 事件名`

   如:你要给a元素绑定一个click事件，你就该这么写:

   ```html
   <a href="http://blog.163.com/luping_01/blog/#" onclick='do something'>name</a>
   ```

2. 通过对象属性。 

   对象指的是jsDOM树里的对象，我们都知道，所有的html元素在DOM(文档对象类型)里都存在一个相应的DOM元素。 给这个DOM元素添加事件等同于方式一。这个属性名也一样： 

   也为 `on` + 事件名 

   ```html
   html:
   <a href="http://blog.163.com/luping_01/blog/#" id="n">name</a> 
   js:
   document.getElementById('n').onclick = function(){ 
   //do something
   } 
   ```

3. 通过W3C监听方式（标准方式）或者IE专属的中间模型添加事件 

   W3C方式： `elemennt.addEventListener(事件名,处理函数引用,true || false)` 这里的事件名就是单纯的事件名，不需要加 `on` ，`true`表示在事件传播阶段捕获事件，`false`表示在事件冒泡阶段捕获事件，一般我们设为 false! 

   IE模式: `element.attachEvent( 'on' + 事件名，处理函数引用)`

   注意，IE模式需要加`on`

## 11.ajax是什么？同步和异步的区别？

1. `Ajax`的全称是`Asynchronous JavaScript and XML`中文名称定义为异步的`JavaScript`和`XML`。 `Ajax`是`Web2.0`技术的核心 由多种技术集合而成，使用`Ajax`技术不必刷新整个页面，只需对页面的局部进行更新，可以节省网络带宽，提高页面的加载速度，从而缩短用户等待时间，改善用户体验。
2. 我们传统的web应用，当我们提交一个表单请求给服务器，服务器接收到请求之后，返回一个新的页面给浏览器，这种做法浪费了很多带宽，因为我们发送请求之前和获得的新页面两者中很多的`html`代码是相同的，由于每次用户的交互都需要向服务器发送请求，应用的访问时间取决于服务器的返回时间。而我们使用`Ajax`就不同了，`Ajax`只取回一些必须的数据，它使用`SOAP`、`XML`或者支持`json`的`Web Service`接口，我们在客户端利用`JavaScript`处理来自服务器的响应，这样客户端和服务器之间的数据交互就减少了，然后用户请求就得到了加速。
3. `Ajax`是多种技术的组合，包括我们的`JavaScript`异步数据获取技术，就是`XMLHttpRequest `以及`xml`以及`Dom`还有表现技术`XHTML`和`CSS Ajax`的核心是`XMLHttpRequest`是支持异步请求的技术，可以发送请求给服务器，并且不阻塞用户在IE浏览器中首次引用，使我们的网络应用更加强大。其实`XMLHttpRequest`是`JavaScript`的一种语法子集，是它的一套`API`，支持发送`GET`和`POST`请求。 该`API`是`Ajax`开发的核心，也是现在web技术的核心之一。 通过这些技术，我们无序重新加载网页就可以发送和取回数据，完成交互。

* 普通B/S模式（同步）AJAX技术（异步） 
  1. 同步：提交请求->等待服务器处理->处理完毕返回 这个期间客户端浏览器不能干任何事
  2. 异步: 请求通过事件触发->服务器处理（这是浏览器仍然可以作其他事情）->处理完毕

## 12.Js的数据类型有哪些？Window.document的常用方法和属性？

* 六种数据类型：`undefined` `null` `Boolean` `number` `string`  `object`

  `object`比较复杂，本质上是一组无序的名值对组成的

* `undefined`类型只有一个值，即`undefined`，使用`var`声明变量，但是是未对初始化的，这个变量就是`undefined`类型的

  ```js
  var i;
  alert(i == undefined);//true
  var i;与var i =
  undefined;这两句是等价的。 包含Undefined值的变量和未定义的变量是不一样的。
  ```

* `null`类型只有一个值，即`null`，`null`表示一个空对象的指针

* `Boolean`类型只有两个值，即`true`和`false`。但是js中多有的变量都可以使用Boolean()函数转换成一个Boolean类型的值。

* `number`类型：整数和浮点数。NaN:这个数值用于本来要返回一个数值，但是却未能返回一个数值的情况，以防止报错。例如：：1/0 返回的就是NaN。NaN的特点：1、任何涉及NaN的操作都会返回NaN。2、NaN对任何值都不相等，包括自己NaN本身。

* `string`类型：文本。例如`Hello World`

* `object`类型：相较其他几种类型，`object`是最复杂的数据类型，因为它可以分为三个子类型

  * 狭义的对象(object) 
  * 数组(array)
  * 函数(function)

> 可能在这里读者会纳闷了，何为狭义的对象，其实面试题的内容到string类型就停止了，object是本长工扩展出来的一部分，下面开始正式解答：
>
>    在刚刚学JS的时候，对于对象只有一个非常小的概念，那个时候觉得一个function就是一个对象，倒也没错，但不全对。何为狭义对象？
>
> 举个例子：
>
> ```js
> var p1 = {
> 	name:"xiaoming",
> 	age:24,
> 	hobby:["打豆豆","睡懒觉","写代码"]
> };
> //狭义对象   指的是用{}定义的对象，它是一组无序的属性集合
> ```
>
> 看起来是不是有点像json对象？但记住一句话：json一定是对象，但对象不一定是json，json的属性名必须要加双引号""，普通对象对此没有要求，json对象在访问时也必须加上双括号，例如:`obj["2017]`，不能使用打点的方法。
>
> 有狭义必有广义，何为广义对象？我们知道万物皆对象
>
> * DOM元素是一个对象
>
>   ```js
>   var box = document.getElementById("box");
>   	box.name = "xiaoming";
>   	box.age = 23;
>   	box.sex = "mela";
>   //DOM方法得到一个DOM元素，此时可以用打点语法给这个元素添加属性
>   //你不能说box这个对象只有三个属性，因为box代表一个DOM对象
>   ```
>
> * function函数也是对象
>
>   ```js
>   function fn() {
>   	alert("hello world");
>   }
>   	fn.aa = 100;
>   	fn.bb = 200;
>   ```
>
> * 数组也是对象
>
>   ```js
>   var arr = [10,30,20,40];
>   	arr.name = "小红";
>   	arr.sex = "女";
>   	arr.hobby = ["跑步","看书","购物"];
>   ```
>
> * 正则表达式(RegExp)是对象
>
>   ```js
>   var regexp = /\d/g;
>   regexp.num = 5;
>   ```
>
> * String() Number() 内置包装构造函数得到的值也是对象
>
>   ```js
>   var str = new String("hello");
>   ```
>
> 建议去引入处看原文可以学到更多哦
>
> 本回答部分引自[LinHngJie的博客](https://blog.csdn.net/LinoHngJie/article/details/80358870)





















































