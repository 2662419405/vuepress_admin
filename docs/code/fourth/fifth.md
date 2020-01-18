

# 基础面试题's brother(part5)

## 1.你如何利用jQuery来向一个元素中添加和移除CSS类? 

* 通过利用`addClass()`和`removeClass()`这两个`jQuery`方法。动态的改变元素的`class`属性可以很简单例如. 使用类`.active`来标记它 们的未激活和激活状态，等等

## 2.你如何使用jQuery来提取一个HTML 标记的属性 例如：链接的href?

* `attr()`方法被用来提取任意一个HTML元素的一个属性的值. 你首先需要利用`jQuery`选择及选取到所有的链接或者一个特定的链接，然后你 可以应用`attr()`方法来获得他们的`href`属性的值。

* 下面的代码会找到页面中所有的链接并返回href值：

  ```js
  $('a').each(function(){
   alert($(this).attr('href'));
  });
  ```

## 3.你如何使用jQuery设置一个属性值?

* 前面这个问题之后额外的一个后续问题是，`attr()`方法和`jQuery`中的其它方法一样，能力不止一样. 如果你在调用`attr()`的同时带上一个值 例如`.attr(name, value)`, 这里`name`是属性的名称，`value`是属性的新值。

## 4.jQuery中 detach() 和 remove() 方法的区别是什么?

* 尽管`detach()`和`remove()`方法都被用来移除一个DOM元素, 两者之间的主要不同在于 `detach()`会保持对过去被解除元素的跟踪, 因此它可以被取消解除, 而`remove()`方法则会保持过去被移除对象的引用。你也还可以看看 用来向DOM中添加元素的`appendTo()`方法。

## 5.你要是在一个 jQuery 事件处理程序里返回了 false 会怎样？

* 这通常用于阻止事件向上冒泡。

## 6.哪种方式更高效：document.getElementbyId("myId") 还是 $("#myId")？

* 第一种，因为它直接调用了`JavaScript`引擎。

## 7.事件是什么？如何阻止事件冒泡？

* 事件是什么？

  事件用于监听浏览器的操作行为，浏览器触发动作时被捕捉到而调用相应的函数。

* 事件执行三个阶段
  1.  事件捕获阶段
  2. 处于目标阶段
  3. 事件冒泡阶段
* 捕获型事件是自上而下，而冒泡型事件是自下而上的，而我们程序员通常要做的就是第二阶段，完成事件的动作。而第一、三阶段由系统封装自动调用完成。

<img src="https://raw.githubusercontent.com/Wangjiateng666/img/master/fifth-7.jpg"/>

* 冒泡阻止

  ```js
  event.stopPropagation()
  IE浏览器
  event.cancelBubble = true;
  ```

## 8.谈一下Jquery中的bind,live,delegate,on的区别？

1. `bind`：把事件绑定到每一个匹配的元素上

```js
主要特点：
1.兼容性比较好
2.绑定事件到所有选出来的元素上
3.不会绑定事件到动态添加的那些元素上
4.当元素很多时，会出现效率问题，特别是嵌套层次比较深的元素。
```

```js
javascript:
$("li").bind("click", function (event) {
 alert("OK");
}); 
```

```
jQuery源码:
return this.each(function(){
	jQuery.event.add(this,types,fn,data,selector);
})
```

* 调试数据：

<img src="https://raw.githubusercontent.com/Wangjiateng666/img/master/fifth-8.jpg"/>

* 总结：需要循环5次来绑定事件



2. `live`：把所有的事件都绑定到`jquery`对象`$(document)`

```js
主要特点：
1.事件只需要绑定一次，不需要绑定到筛选出来的元素上。
2.动态添加元素后依然拥有绑定事件。
3.不能使用event.stopPropagation() 来阻止事件的冒泡。
```

```js
jquery:
$("li").live("click", function (event) {
 alert("OK");
});
```

* 调试数据

<img src="https://raw.githubusercontent.com/Wangjiateng666/img/master/fifth-8-1.jpg"/>

* 总结：只执行一次，事件绑定在根节点对象上。

3. `delegate`：将事件绑定到指定的父元素上，和`live`类似但比较灵活。

   ```js
   主要特点：
   1.可以用在动态添加的元素上
   2.绑定的父元素可以采用就近原则，减少查询的次数，比live的性能好
   3.在live和delegate两者推荐使用delegate
   ```

   ```js
   $("#ul").delegate("li", "click", function (event) {
    alert("OK"); 
   }); 
   ```

   * 调整数据

     <img src="https://raw.githubusercontent.com/Wangjiateng666/img/master/fifth-8-2.jpg"/>

   * 总结：只执行一次，事件绑定在调用对象上。

4. `On`：是`jQuery1.7`中新增的，前面的三种方法都是依赖`on`方法来实现的。

```js
主要特点：
1.事件的添加和卸载都要是通过on来实现的，提供一种统一的事件处理方法。
2.增加了使用的难度，对于不熟悉on的使用的，很有可能就勿用，导致性能下降。
```

* 经验：`on`方法的正确使用

  1. 使用on方法，如果第二个参数使用null，则作用与bind( )相同；参考jquery1.7源码。

     ```js
     bind:function(types,data,fn){
     	return this.on(types,null,data,fn);
     }
     ```

  2. 如果第二个参数适用了选择器，就要看调用对象,如果调用对象是`$(document)`，则作用与`live( )`相同，参考`jquery1.7`源码。

     ```js
     live:function(types,data,fn){
     	jQuery(this.context).on(types,this.selector,data,fn);
     	return this;
     }
     ```

  3. 否则与`delegate()`相同，参考`jquery1.7`源码。

     ```js
     delegate:function(selector,types,data,fn){
     	return this.on(types,selector,data,fn);
     }
     ```

## 9.Json格式是什么？

* `JSON(JavaScript Object Notation)`是一种轻量级的数据交换格式。它是基于`JavaScript`的一个子集。数据格式简单, 易于读写, 占用带宽小。是前后台数据交互最常见的一种数据格式。

```
JSON语法
1.数据在键值对中，如： key:value 使用冒号分隔。
2.数据由逗号分隔
3.花括号保存对象
4.方括号保存数组
```

如：`{"age":"12", "name":"back","phone"};`

<img src="https://raw.githubusercontent.com/Wangjiateng666/img/master/fifth-9.jpg"/>

```js
数据格式转换
1.JSON字符串转换为JSON对象:
var obj =eval('('+ str +')');
var obj = JSON.parse(str);
2.JSON对象转换为JSON字符串：
var last=JSON.stringify(obj);
3.数组转json字符串
var array=[1,2,3,4];
JSON.stringify($(array));
4.json字符串转数组，使用jQuery
$(JSON.parse('{"0":1,"1":2,"2":3,"length":3}'));
```

## 10.Angular的优缺点

```css
优点：
1. 模板功能强大丰富，并且是声明式的，自带了丰富的Angular指令；
2. 是一个比较完善的前端MV*框架，包含模板，数据双向绑定，路由，模块化，服务，过滤器，依赖注入等所有功能；
3. 自定义Directive，比jQuery插件还灵活，但是需要深入了解Directive的一些特性，简单的封装容易，复杂一点官方没有提供详细的介绍文档，我们可以通过阅读源代码来找到某些我们需要的东西，如：在directive使用 $parse；
4. ng模块化比较大胆的引入了Java的一些东西（依赖注入），能够很容易的写出可复用的代码，对于敏捷开发的团队来说非常有帮助，我们的项目从上线到目前，UI变化很大，在摸索中迭代产品，但是js的代码基本上很少改动。
5. 补充：Angular支持单元测试和e2e-testing。angularjs是互联网巨人谷歌开发，这也意味着他有一个坚实的基础和社区支持。
```

```css
缺点：
1. 验证功能错误信息显示比较薄弱，需要写很多模板标签，没有jQuery Validate方便，所以我们自己封装了验证的错误信息提示，详细参考 why520crazy/w5c-validator-angular · GitHub ；
2. ngView只能有一个，不能嵌套多个视图，虽然有 angular-ui/ui-router · GitHub 解决，但是貌似ui-router 对于URL的控制不是很灵活，必须是嵌套式的（也许我没有深入了解或者新版本有改进）；
3. 对于特别复杂的应用场景，貌似性能有点问题，特别是在Windows下使用chrome浏览器，不知道是内存泄漏了还是什么其他问题，没有找到好的解决方案，奇怪的是在IE10下反而很快，对此还在观察中；
4. 这次从1.0.X升级到1.2.X，貌似有比较大的调整，没有完美兼容低版本，升级之后可能会导致一个兼容性的BUG，具体详细信息参考官方文档 AngularJS ，对应的中文版本：Angular 1.0到1.2 迁移指南
5. ng提倡在控制器里面不要有操作DOM的代码，对于一些jQuery 插件的使用，如果想不破坏代码的整洁性，需要写一些directive去封装插件，但是现在有很多插件的版本已经支持Angular了，如：jQuery File Upload Demo
6. Angular 太笨重了，没有让用户选择一个轻量级的版本，当然1.2.X后，Angular也在做一些更改，比如把route，animate等模块独立出去，让用户自己去选择。

以下为补充：
7.angular 入门很容易 但深入后概念很多, 学习中较难理解
8.文档例子非常少, 官方的文档基本只写了api, 一个例子都没有, 很多时候具体怎么用都是google、baidu来的
9.对IE6/7 兼容不算特别好, 就是可以用jQuery自己手写代码解决一些
10.指令的应用的最佳实践教程少, angular其实很灵活, 如果不看一些作者的使用原则,很容易写出四不像的代码, 例如js中还是像jQuery的思想有很多dom操作
11.DI 依赖注入 如果代码压缩需要显示声明
```

* 当然使用的人多才会暴露更多的问题，一起为这些问题寻找解决方案是一个社区的良性趋势，选择Angular，的确使我们的开发效率大大提高。

## 11.React对比Angular的优势在哪

::: tip 友情提示

尽管上面已经写了Angular的优缺点，但是为了方便对比，将再一次放在一起。

:::

```css
关于Angular的一些不足之处：
1，过于依赖DOM操作，Angular在执行的过程中会先扫描所有的DOM，然后通过指令来编译。这会造成一个结果，就是很难去判断程序的执行
顺序导致很难进行调试。
2，双向数据绑定也会带来性能问题，Angular的实现方法被叫做“Dirty-checking（脏检查机制）”，也就是通过跟踪数据的改变再动态更新
UI界面。所以意味着在Angular的作用域中任何操作的执行都会引发Dirty-checking，随着绑定数量的增加性能就会越低。
3，Angular的任何操作会引起digest cycle对注册过的监听器的遍历，以实现组件动态地同步数据。这会和其它的依赖产生兼容性问题。如
果你使用的其它JavaScript库也需要改变数据就必须用Angular的$apply函数去封装。或者如果它是一个工具库，你就需要把它转换成一个
服务。似乎其它JavaScript库都必须经过改动才能和Angular进行交互操作。
```

```css
React的优势：
1，“虚拟DOM”，React并不直接对DOM进行操作，在页面渲染的过程中，React通过在虚拟DOM中的微操作来实现对实际DOM的局部更新。
2，单向数据流，Flux是一个用于在JavaScript应用中创建单向数据层的架构，它只是一个概念，而非特定工具的实现。它可以被其它框架
吸纳。例如，Alex Rattray有一个很好的Flux实例，在React中使用了Backbone的集合和模型。
3，模块化，可以编写独立的UI组件，并且可以复用，每个组件都可以进行独立的开发和测试，提高了代码的可维护性。
```

## 12.框架模式

1. `MVC`：`Model(模型)`+`View(视图)`+`controller(控制器)`，主要是基于分层的目的，让彼此的职责分开。`View`通过`Controller`来和`Model`联系，`Controller`是`View`和`Model`的协调者，`View`和`Model`不直接联系，基本联系都是单向的。 用户`User`通过控制器`Controller`来操作模板`Model`从而达到视图`View`的变化。
2. `MVP`：是从`MVC`模式演变而来的，都是通过`Controller/Presenter`负责逻辑的处理+`Model`提供数据+`View`负责显示。 在`MVP`中，`Presenter`完全把`View`和`Model`进行了分离，主要的程序逻辑在`Presenter`里实现。 并且，`Presenter`和`View`是没有直接关联的，是通过定义好的接口进行交互，从而使得在变更`View`的时候可以保持`Presenter`不变。 `MVP`模式的框架：`Riot.js`。
3. `MVVM`：`MVVM`是把`MVC`里的`Controller`和`MVP`里的`Presenter`改成了`ViewModel`。`Model+View+ViewModel`。 `View`的变化会自动更新到`ViewModel`,`ViewModel`的变化也会自动同步到`View`上显示。 这种自动同步是因为`ViewModel`中的属性实现了`Observer`，当属性变更时都能触发对应的操作。 `MVVM`模式的框架有：`AngularJS`+`Vue.js`和`Knockout`+`Ember.js`后两种知名度较低以及是早起的框架模式。

::: tip 在此附上阮一峰大佬的图示

<a href="http://www.ruanyifeng.com/blog/2015/02/mvcmvp_mvvm.html">起飞</a>

:::

## 13.原型是什么？原型链是什么？

1. 原型是什么？

   在`JavaScript`中原型是一个`prototype`对象，用于表示类型之间的关系。

2. 原型链是什么？

   `JavaScript`万物都是对象，对象和对象之间也有关系，并不是孤立存在的。对象之间的继承关系，在`JavaScript`中是通过`prototype`对象指向父类 对象，直到指向`Object`对象为止，这样就形成了一个原型指向的链条，专业术语称之为原型链。

3. 举例说明

   Student → Person → Object ，学生继承人类，人类继承对象类

   ```html
   <span style="font-size:14px;">
   var Person=function(){
       this.age="匿名"
   };
   var Student=function(){};
   //创建继承关系,prototype执行Person的一个实例对象
   Student.prototype=new Person();
   </span> 
   ```

4. 原型API关系图

   <img src="https://raw.githubusercontent.com/Wangjiateng666/img/master/fifth-13.jpg"/>

5. 精简图

   <img src="https://raw.githubusercontent.com/Wangjiateng666/img/master/fifth-13-1.jpg"/>

## 14.NEW操作符都干了什么？

```js
//先看代码
var Func=function(){};
var func=new Func ();
//new共经过了4几个阶段
1、创建一个空对象
var obj=new Object();
2、设置原型链
obj.__proto__= Func.prototype;
3、让Func中的this指向obj，并执行Func的函数体。
var result=Func.call(obj); 
4、判断Func的返回值类型：
如果是值类型，返回obj。如果是引用类型，就返回这个引用类型的对象。
if(typeof(result)=="object"){
 func=result;
}else{
 func=obj;
} 
```

## 15.WebSocket 如何兼容低浏览器？(阿里)

* `Adobe Flash Socket` 、 `ActiveX HTMLFile (IE) `、 基于`multipart`编码发送`XHR`、 基于长轮询的`XHR`

## 16.Ajax怎样去交互，返回的信息是什么？

* `ajax`技术之中，最核心的技术就是`XMLHttpRequest`，它最初的名称叫做`XMLHTTP`，是微软公司为了满足开发者的需要，1999 年在`IE5.0`浏览器中率先推出的。后来这个技术被上述的规范命名为`XMLHttpRequest`。它正是 `Ajax` 技术之所以与众不同的地方。简而言之， `XMLHttpRequest` 为运行于浏览器中的 `JavaScript`脚本提供了一种在页面之内与服务器通信的手段。页面内的`JavaScript`可以在不刷新页 面的情况下从服务器获取数据，或者向服务器提交数据。`XMLHttpRequest`的出现为`Web`开发提供了一种全新的可能性，甚至整个改变了人户 提供更好的交互体验。
* 与传统的`Web`开发不同，`Ajax `并不是以一种基于静态页面的方式来看待`Web`应用，从`Ajax`的角度看来，`Web`应用应由少量的页面组成， 其中每个页面其实是一个更小型的`Ajax`应用。每个页面上面都包括有一些使用`JavaScript`开发的`Ajax`组件。这些组件使用`XMLHttpRequest `对象以异步的方式与服务器通信，从服务器获取需要的数据后使用`DOM API`来更新页面中的一部分内容。因此s`Ajax` 应用与 传统的`Web `应用的区别主要在三个地方：
  1. 不刷新整个页面，在页面内与服务器通信。
  2. 使用异步方式与服务器通信，不需要打断用户的操作，具有更加迅速的的响应能力。 
  3. 应用仅由少量页面组成。大部分交互在页面之内完成，不需要切换整个页面。

## 17.谈谈你对this的理解

1. 函数(仅限于普通函数)创建时产生一个this,指向window
2. (谁调用指向谁)当有事件绑定,并执行了事件处理程序时,谁绑定的事件,事件处理程序中的this就指向谁
3. 回调函数中的this指向window
4. 匿名函数可以使用bind()改变this的指向,call()和apply()可以改变函数中的this指向
5. 使用new关键字创建一个实例对象,构造函数中的this指向了该实例对象,同时实例对象的this指向构造函数的原型对象

> 在此需要补充：
>
> 最近在写part6的时候，遇到一个问题：js中的数据类型有几种。[part6第12题](http://shtodream.cn/code/fourth/sixth.html#_12-js的数据类型有哪些？window-document的常用方法和属性？)本来是很简单的回答自然是`string` `number` `undefined` `null` `Boolean` `object` ，但由`object`扩展出了很多的连带知识，其中包括广义对象，狭义对象，以及狭义对象与json对象的区别。当时看了很多资料，单纯的只看了上面提到的几个内容，今天在复习Js的时候发现提到了一个名词`函数上下文`，百度了一下发现指的就是this的指向，以后的面试题里，难免会遇到专业名词，所以特写下补充，希望读者们要有这个概念。并附上例题供大家参考。
>
> ```js
> var obj = {
> 	name : "xiaoming",
> 	age : 21,
> 	sex : "mela",
> 	sayHello : function() {
> 	alert("大家好，我是"+this.name+",我今年"+this.age+"岁了！")；
> 	}
> };
> obj.sayHello();
> //当一个函数当做对象的方法被调用时，这个函数里的this指的就是这个对象
> //所以sayHello函数的上下文就是obj对象，既函数内部this执行obj（this===obj）
> var fun = obj.sayHello;
> fun();
> //直接用圆括号调用，不是对象打点调用，此时this===window
> //函数上下文是什么，取决于函数如何被调用，而不是函数如何定义
> ```
>
> 记住五条规律：为方便理解例题也放上
>
> * <font color="#f00">函数直接圆括号调用，函数上下文就是window对象</font>
>
>   ```js
>   function fun(){
>       var a = 200;
>       alert(this.a);
>   }
>   
>   var a = 6666;
>   fun();
>   ```
>
> * <font color="#f00">函数当做对象的方法被对象打点语法调用时，函数上下文就是该对象</font>
>
>   ```js
>   function fun(){
>       
>       alert(this.a);
>   }
>   
>   var obj = {
>       "a" : 12,
>       "b" : 2,
>       "c" : fun
>   }
>   
>   obj.c()；
>   ```
>
> * <font color="#f00">函数是事件处理函数，函数上下文就是触发这个事件的对象</font>
>
>   ```js
>       function fun(){
>           this.style.background = "yellow";
>       }
>       var box1 = document.getElementById("box1");
>       var box2 = document.getElementById("box2");
>       var box3 = document.getElementById("box3");
>       btn.onclick = fun;
>   ```
>
> * <font color="#f00">定时器调用函数，上下文是window对象</font>
>
>   ```js
>   var a = 456;
>   setInterval(function(){
>      var a = 123;
>       alert(this.a)
>   }, 1000)
>   ```
>
> * <font color="#f00">数组中存放的函数，被数组索引之后加圆括号调用，函数上下文this代表这个数组</font>
>
>   ```js
>   function fun(){
>   
>       alert(this === arr);
>       alert(arr.length);
>   }
>   var arr = [fun,2,3424,5];
>   arr[0]();
>   ```
>
> 面试题也经常考这类的题目
>
> ```js
> function fun(m,n,o,p,q){
>   alert(this.length);
>     
> }
> 
> function f(){
>     arguments[0](1,2,3,4,5)
> }
> 
> f(fun,5,6,7)
> //这个this 是调用这个函数的 argument， 弹出来就是实参个数 4。
> //如果是arguments.callee 呢  那就是形参个数。
> ```
>
> 引自[[LinHngJie]](https://blog.csdn.net/LinoHngJie/article/details/80358870)，[[joyce123]](https://www.cnblogs.com/joyce123/p/7754851.html)

* 加分项

  1. 用于区分全局变量和局部变量,需要使用this

     ```js
     var age=20;
     function show(age){
     	this.age=age;
     }
     ```

  2. 返回函数当前的对象，看jquery1.8.3源码

     ```js
     live:function(types,data,fn){
     	jQuery(this.context).on(types,this.selector,data,fn);
     	return this;
     }
     ```

  3. 将当前的对象传递到下一个函数，看jquery1.8.3源码

     ```js
     each:function(callback,args){
     	return jQuery.each(this,callback,args);
     }
     ```

## 18.JS事件绑定方式(主要有三种):

1. 行内绑定(不建议)：无法实现标记和动作分离`(onclick=" ")`

2. `对象名.事件名=function() { 语句; 语句; }`

3. `对象名.addEventListener(“事件名”,函数名,捕获过程true/冒泡过程false)`

    `说明:IE6/7/8 的兼容方式是: 对象名. attachEvent(“on事件名”,函数);`

## 19.label的作用

1. 实现语义化

* label的for属性input中name、id达成一致，实现label标签for的互换。
* 这对标签的的微妙之处在于，当想选中文本框，不必非得在框内点击鼠标，直接点击由lable 标签标记的文本上即可, 相 当于给form 表单的input 元素添加了一个感应区。

```Html
例子1: 点击" 用户名:" 就可以定位光标到输入框
<form>
<label for="myid "> 用户名:</label>
<input type="text" id="myid" />
</form>
```

```html
例子2: 点击" 用户名:" 或按键alt+1, 都可以定位光标到输入框
<form>
<label for="myid" accesskey="1"> 用户名:</label>
<input type="text" id="myid" tabindex="1" />
</form>
```

* 总结: 
* `FOR`属性 
  * 功能：表示`Label`标签要绑定的`HTML`元素，你点击这个标签的时候，所绑定的元素将获取焦点。 
  * 用法：`<label for="inputbox">`姓名`</label><input id="inputbox" type="text>`
* `ACCESSKEY`属性： 
  * 功能：表示访问`Label`标签所绑定的元素的热键，当您按下热键，所绑定的元素将获取焦点。 
  * 用法：`<label for="inputbox" accesskey="N">`姓名`</label>` `<input id="inputBox" tabindex="N" type="text">`局限性：accessKey 属性所设置的快捷键不能与浏览器的快捷键冲突，否则将优先激活浏览器的快捷键。 
  * PS: 这种用法并不仅仅局限于`input`元素, 其它的也是可以的

## 20.模块化开发怎么做？

::: tip 放出链接帮助读者理解模块化开发

<a href="http://www.ruanyifeng.com/blog/2012/10/javascript_module.html">模块化</a>	

不理解里面的立即执行函数的走这边<a href="https://baijiahao.baidu.com/s?id=1627496475450434415&wfr=spider&for=pc">立即执行函数</a>	建议手写运行感受一下

:::

```js
立即执行函数,不暴露私有成员
 var module1 = (function(){
 var _count = 0;
 var m1 = function(){
 //...
 };
 var m2 = function(){
 //...
 };
 return {
 m1 : m1,
 m2 : m2
 };
 })();
```



















