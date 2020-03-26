# 基础面试题's brother(part10)

## 1.Node.js 的适用场景

1. 高并发 
2. 聊天 
3. 实时消息推送

## 2.JavaScript 原型，原型链 ? 有什么特点？

1. 原型对象也是普通的对象，是对象一个自带隐式的 __proto__ 属性，原型也有可能有自己的原型，如果一个原型对象的原型不为 null 的话，我们就称之为原型链
2. 原型链是由一些用来继承和共享属性的对象组成的（有限的）对象链 

## 3.怎么重构页面？

1. 编写 CSS 
2. 让页面结构更合理化，提升用户体验
3. 实现良好的页面效果和提升性能 

## 4.WEB应用从服务器主动推送Data到客户端有那些方式？

1. html5 websocket 
2. WebSocket 通过 Flash 
3. XHR长时间连接
4. XHR Multipart Streaming
5. 不可见的Iframe
6. `<script>`标签的长时间连接（可跨域）

## 5.事件、IE与火狐的事件机制有什么区别？ 如何阻止冒泡？

1. 我们在网页中的某个操作（有的操作对应多个事件）。例如：当我们点击一个按钮就会产生一个事件。是可以被 JavaScript 侦测到的 行为 

2. 事件处理机制：IE是事件冒泡、firefox同时支持两种事件模型，也就是：捕获型事件和冒泡型事件

3. e.stopPropagation();

   注意旧ie的方法：e.cancelBubble = true; 

## 6.Ajax 是什么？Ajax 的交互模式？同步和异步的区别？如何解决跨域问题？Ajax的缺点

Ajax 是什么： 

1. 通过异步模式，提升了用户体验 
2. 优化了浏览器和服务器之间的传输，减少不必要的数据往返，减少了带宽占用
3. Ajax 在客户端运行，承担了一部分本来由服务器承担的工作，减少了大用户量下的服务器负载。 

Ajax 的最大的特点： 

1. Ajax可以实现动态不刷新（局部刷新） 
2. readyState 属性 状态 有5个可取值： 0 = 未初始化，1 = 启动， 2 = 发送，3 = 接收，4 = 完成 

Ajax 同步和异步的区别: 

1. 同步：提交请求 -> 等待服务器处理 -> 处理完毕返回，这个期间客户端浏览器不能干任何事 
2. 异步：请求通过事件触发 -> 服务器处理（这是浏览器仍然可以作其他事情）-> 处理完毕 ajax.open方法中，第3个参数是设同步或者异步。 

解决跨域问题： 

1. jsonp 
2. iframe 
3. window.name、window.postMessage
4. 服务器上设置代理页面 
5. websocket
6. postMessage

Ajax 的缺点： 

1. Ajax 不支持浏览器 back 按钮 
2. 安全问题 Ajax 暴露了与服务器交互的细节 
3. 对搜索引擎的支持比较弱
4. 破坏了程序的异常机制
5. 不容易调试 

## 7.js对象的深拷贝代码实现

```js
function deepClone(obj){
    var objClone=Array.isArray(obj)?[]:{};
    if(obj!=null&&typeof obj==="object"){
        for(key in obj){
            if(obj.hasOwnProperty(key)){
                 if(obj[key]&&typeof obj[key]==="object"){
            		objClone[key]=deepClone(obj[key]);
        		}else{
            		objClone[key]=obj[key];
        		}
            }
        }
        return objClone;
    }
}
```

## 8.是否了解公钥加密和私钥加密

* 一般情况下是指私钥用于对数据进行签名，公钥用于对签名进行验证; 
* HTTP网站在浏览器端用公钥加密敏感数据，然后在服务器端再用私钥解密

## 9.你用的得心应手用的熟练地编辑器&开发环境是什么样子？

* Visual Studio Code + 相关插件编写前端代码 
* Google chrome 、Mozilla Firefox浏览器 +firebug 兼容测试和预览页面UI、动画效果和交互功能 Node.js+Gulp 
* git 用于版本控制和Code Review 

## 10.对网站重构的理解

网站重构：在不改变外部行为的前提下，简化结构、添加可读性，而在网站前端保持一致的行为。也就是说是在不改变 UI 的情况下，对网 站进行优化，在扩展的同时保持一致的 UI。 

对于传统的网站来说重构通常是：

1. 表格(table)布局改为 DIV + CSS
2. 使网站前端兼容于现代浏览器(针对于不合规范的CSS、如对 IE6 有效的) 
3. 对于移动平台的优化 
4. 针对于 SEO 进行优化 
5. 深层次的网站重构应该考虑的方面
6. 减少代码间的耦合
7. 让代码保持弹性 
8. 严格按规范编写代码
9. 设计可扩展的API 
10. 代替旧有的框架、语言(如VB)
11. 增强用户体验
12. 通常来说对于速度的优化也包含在重构中
13. 压缩JS、CSS、image等前端资源(通常是由服务器来解决)
14. 程序的性能优化(如数据读写)
15. 采用CDN来加速资源加载
16. 对于JS DOM的优化
17. HTTP服务器的文件缓存 

## 11.如何获取UA

```html
<script>
function whatBrowser() {
 document.Browser.Name.value=navigator.appName;
 document.Browser.Version.value=navigator.appVersion;
 document.Browser.Code.value=navigator.appCodeName;
 document.Browser.Agent.value=navigator.userAgent;
}
</script>
```

## 12.cache-control

* 网页的缓存是由HTTP消息头中的`“Cache-control”`来控制的，常见的取值有`private、no-cache、max-age、must-revalidate`等，默认为`private`。 
* Expires 头部字段提供一个日期和时间，响应在该日期和时间后被认为失效。允许客户端在这个时间之前不去检查（发请求），等同maxage的效果。但是如果同时存在，则被`Cache-Control`的`max-age`覆盖。 
* `Expires = "Expires" ":" HTTP-date `

例如： 

* Expires: Thu, 01 Dec 1994 16:00:00 GMT （必须是GMT格式）
* 如果把它设置为-1，则表示立即过期 

## 13.Expires 和 max-age 都可以用来指定文档的过期时间，但是二者有一些细微差别 

1. Expires在HTTP/1.0中已经定义，Cache-Control:max-age在HTTP/1.1中才有定义，为了向下兼容，仅使用max-age不够
2. Expires指定一个绝对的过期时间(GMT格式),这么做会导致至少2个问题： 2.1客户端和服务器时间不同步导致Expires的配置出现问题。 2.2很容易在配置后忘记具体的过期时间，导致过期来临出现浪涌现象
3. max-age 指定的是从文档被访问后的存活时间，这个时间是个相对值(比如:3600s)，相对的是文档第一次被请求时服务器记录的 Request_time(请求时间)
4. Expires 指定的时间可以是相对文件的最后访问时间(Atime)或者修改时间(MTime)，而max-age相对对的是文档的请求时间(Atime)
5. 如果值为 no-cache,那么每次都会访问服务器。如果值为max-age，则在过期之前不会重复访问服务器。

## 14.js 操作获取和设置 cookie

```js
// 创建cookie
function setCookie(name, value, expires, path, domain, secure) {
 var cookieText = encodeURIComponent(name) + '=' + encodeURIComponent(value);
 if (expires instanceof Date) {
 cookieText += '; expires=' + expires;
 }
 if (path) {
 cookieText += '; expires=' + expires;
 }
 if (domain) {
 cookieText += '; domain=' + domain;
 }
 if (secure) {
 cookieText += '; secure';
 }
 document.cookie = cookieText;
}
// 获取cookie
function getCookie(name) {
 var cookieName = encodeURIComponent(name) + '=';
 var cookieStart = document.cookie.indexOf(cookieName);
 var cookieValue = null;
 if (cookieStart > -1) {
 var cookieEnd = document.cookie.indexOf(';', cookieStart);
 if (cookieEnd == -1) {
 cookieEnd = document.cookie.length;
 }
 cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
 }
 return cookieValue;
}
// 删除cookie
function unsetCookie(name) {
 document.cookie = name + "= ; expires=" + new Date(0);
}
```

## 15.JS 怎么实现一个类。怎么实例化这个类

javascript是一个“基于对象”的编程语言，不是面向对象的编程语言。 你要知道javascript中的function定义的函数实际上就是Function对象实例。

```js
例如：
function demo(x){
 alert(x);
}
实际上等价于：
Function demo = new Function("x","alert(x)");
```

所以你如果想要用javascript来模拟面向对象编程（例如Java的类），那么就可以用function来模拟Class，用function的原型prototype或 者嵌套function来模拟类的方法或者属性。下面给你一个简单的例子：

```js
//模拟学生类，可以带参数，例如initName
function Student(initName){
 var name = initName; //模拟学生类的属性name
}
Student.prototype.printName = function(){ //定义Student类prototype中的printName函数
 alert(this.name);
}
测试时可以这样写：
var student = new Student("张三"); //创建一个“Student对象”，实际上是一个Function实例对象
student.printName(); //执行student对象的printName函数
```

## 16.如何编写高性能的Javascript？

1、尽量不要用for-in 循环去访问数组，建议用 for 循环进行循环：

```js
function foo() {
 	var i, b, c=[,,];
 	for (i in c) {
 		b = c[i];
 		if(b === "")
 		return b;
     }
}
 //性能更好
 function foo() {
 	var i, b, c=[,,];
 	for (i=;i<c.length;i++) {
 		b = c[i];
 		if(b === "")
 		return b;
 	}
 } 
```

2、建议将对象进行缓存处理，特别是DOM访问是比较消耗资源的：

```js
//c.length没有缓存，每次迭代都要计算一下数组的长度
function foo() {
 var i, b, c=[,,];
 for (i=;i<c.length;i++) {
 b = c[i];
 if(b === "")
 return b;
 }
}
//性能更好，第一次将数组的长度缓存到变量l中，第二次及后续的循环无需计算数组长度
function foo() {
 var i, b, c=[,,],l;
 for (i=,l=c.length;i<l;i++) {
 b = c[i];
 if(b === "")
 return b;
 }
}
//document.getElementById('info')没有缓存，每次都要遍历DOM
function foo() {
 var e;
 document.getElementById('info').innerHTML="call ";
 document.getElementById('info').innerHTML="call ";
}
//性能更好，第二次无需访问DOM
function foo() {
var e=document.getElementById('info');
e.innerHTML="call ";
 e.innerHTML="call ";
}
```

3、建议不要在函数内进行过深的嵌套判断： 

```js
//函数内嵌套判断语句过多
 function foo1() {
 var r={};
 r.data={};
 r.data.myProp=2;
 if (r) {
 if (r.data) {
 if (r.data.myProp) {
 //逻辑处理
 }
 else {
 //逻辑处理
 }
 }
}
}
 //性能更好
function foo2() {
 var r={};
 r.data={};
 r.data.myProp=2;
 if (!r) return;
 if (!r.data) return;
 if (r.data.myProp) {
 //逻辑处理
 } else {
 //逻辑处理
 }
}
```

4、避免循环引用，防止内存泄漏

```js
//需要jQuery
function foo(e,d) {
 $(e).on("click", function() {
 //对d进行逻辑处理
 cbk(d);
 }
 });
}
//打破循环!
function foo(e, d) {
 $(e).on("click", cbk(d));
}
function cbk (d) {
//逻辑处理
}
```

5、建议避免在函数内返回一个未声明的变量，会污染外部变量

```js
function foo(a, b) {
r = a + b;
return r; //r未声明，则创建了一个全局变量
}
```

6、var声明变量，建议写在多行

```js
//自己测试结果是foo快，但也有一种观点是foo快
function foo() {
var c = ;
var sum=;
var d = ;
var e;
}
function foo() {
var c = ,sum=, d = , e;
}
```

说明：其实单个函数时间上差别较小，这里采用循环多次用累计时间进行性能对比，不同PC配置或者浏览器测试结果可能存在差异。

## 17.JQuery的源码看过吗？能不能简单概况一下它的实现原理？

原理就是对常用操作的封装,顺便解决了兼容性问题

## 18.jQuery.fn的init方法返回的this指的是什么对象？为什么要返回this？

## 19.jQuery中如何将数组转化为json字符串，然后再转化回来？

```js
//数组转化为字符串
$.fn.stringify = function() {
 return JSON.stringify(this);
}
然后这样调用：
$(array).stringify();
//字符串转化为数组
$.fn.parseArray = function(array) {
 return JSON.parse(array)
}
然后调用：
$("").stringifyArray(array)
```

## 20.jQuery 的属性拷贝(extend)的实现原理是什么，如何实现深拷贝？

clone(true) 元素以及其所有的事件处理并且选中这些克隆的副本 描述: 创建一个按钮，他可以复制自己，并且他的副本也有同样功能。

HTML 代码: Clone Me! jQuery 代码: $("button").click(function(){ $(this).clone(true).insertAfter(this); });

```js
HTML 代码:
<button>Clone Me!</button>
jQuery 代码:
$("button").click(function(){
 $(this).clone(true).insertAfter(this);
});
```

## 21.jquery.extend 与 jquery.fn.extend的区别？

jQuery为开发插件提拱了两个方法，分别是： 

1. jQuery.fn.extend(); 
2. jQuery.extend();

虽然 javascript没有明确的类的概念，但是可以构建类似类的定义。 jQuery便是一个封装得非常好的类，比如，$("#btn1") 会生成一个 jQuery类的实例，理解这一点很重要。 

```js
(1). jQuery.extend(object);
它是为jQuery类添加类方法，可以理解为添加静态方法。如：
a.jQuery.extend({
 min: function(a, b) { return a < b ? a : b; },
 max: function(a, b) { return a > b ? a : b; }
});
jQuery.min(2,3); // 2
jQuery.max(4,5); // 5
b. jQuery.extend(target, object1, [objectN])用一个或多个其他对象来扩展一个对象，返回被扩展的对象。
var settings = { validate: false, limit: 5, name: "foo" };
var options = { validate: true, name: "bar" };
jQuery.extend(settings, options);
结果：settings == { validate: true, limit: 5, name: "bar" }
```

```js
(2). jQuery.fn.extend(object);
$.fn是什么?
$.fn是指jQuery的命名空间，fn上的成员(方法function及属性property)，会对jQuery实例每一个有效。
查看jQuery代码，就不难发现。
jQuery.fn = jQuery.prototype = {
 init: function( selector, context ) {
 //....
};
原来 jQuery.fn = jQuery.prototype.
所以，它是对jQuery.prototype进得扩展，就是为jQuery类添加“成员函数”。jQuery类的实例可以使用这个“成员函数”。
比如我们要开发一个插件，做一个特殊的编辑框，当它被点击时，便alert 当前编辑框里的内容。可以这么做：
$.fn.extend({
 doAlertWhileClick:function() {
 $(this).click(function(){
 alert($(this).val());
 });
 }
});
$("#input1").doAlertWhileClick(); // 页面上为：
$("#input1") 为一个jQuery实例，当它调用成员方法 doAlertWhileClick后，便实现了扩展，每次被点击时它会先弹出目前编辑里的内
容。
```

## 22.jQuery 的队列是如何实现的？队列可以用在哪些地方？

```js
我们先来看一下jQuery中有关队列操作的方法集：
jQuery.extend({
 queue
 dequeue
 _queueHooks
});
jQuery.fn.extend({
 queue
 dequeue
 delay
 clearQueue
 promise
});
可以看出，既有静态方法，又有实例方法。queue方法，相当于数组中的push操作。dequeue相当于数组的shift操作。举个例子：
function aaa(){
 alert(1);
}
function bbb(){
 alert(2);
}
$.queue(document,"q1",aaa); //在document下创建一个队列q1，并往q1队列中添加aaa函数。
$.queue(document,"q1",bbb); //在document下取队列q1，并且往q1队列中添加bbb函数。
$.queue(document,"q1",[aaa,bbb]); //跟上面两行代码的效果一样，一次性添加多个函数
console.log($.queue(document,"q1")) //打印出，document下的队列q1的值，结果是:[aaa(),bbb()]
队列中存储的必须是函数。
$.dequeue(document,"q1") //取出队列中的第一项，这里是aaa，然后执行aaa函数，弹出1.
$.dequeue(document,"q1") //取出队列中的第一项，因为aaa已经出队了，所以这时的第一项是bbb，因此执行bbb函数，弹出2。
以上调用的是静态方法，那么实例方法如何调用呢？
$(document).queue("q1",aaa); //入队
$(document).queue("q1",bbb); //入队
$(document).dequeue("q1"); //出队，执行aaa函数。
$(document).dequeue("q1"); //出队执行bbb函数
```

队列在前端开发中有什么作用呢?请看下面这个例子：

```js
div1的宽度和高度是100，left是0.
$("#div1").click(function(){
 $(this).animate({width:300},2000); //通过setInterval来实现，在两秒中，把div1的宽度从100变成300
 $(this).animate({height:300},2000); //以此类推
 $(this).animate({left:300},2000); //以此类推
})
```

* 当点击div1这个元素时，这个元素会先把宽度变成300px（时间2秒），然后再把高度变成300px（时间2秒），最后把left变成300px（时间2
  秒）。大家知道为什么会这样了，因为animate方法其实就是一个入队和出队操作，入队操作：先把宽度从100到300的函数入队，接着把高
  度从100到300的函数入队，最后把left从0到300的函数入队。出队操作：先执行队列中的第一个函数，等第一函数执行结束后（把宽度从
  100变成300），再出队执行第二个函数（把高度从100到300）。以此类推。
* 队列queue跟Deferred延迟对象有什么区别？Deferred针对一个异步或者简单的异步进行操作，而queue可以针对多个异步进行操作，就比如
  上面这个例子，队列里面的每一项就是一个异步操作。这种多异步的操作，用Deferred实现很复杂，不可用。当然队列也可以处理同步操
  作。

```js
另外再举一个例子：
$("#div1").click(function(){
 $(this).animate({width:300},2000).animate({left:300},2000);
})
链式操作，也是先把宽度从100变成300之后，再把left从0变成300.
但是$(this).animate({width:300},2000).queue("fx",function(){}).animate({left:300},2000);
只会把宽度从100变成300，然后就不动了。为什么呢？因为queue方法只是入队没有出队，当往"fx"队列中添加了一个空函数时，由
于"fx"是animate队列的默认值，所以这时的fx队列有三个函数，当第一个函数执行完之后执行出队操作，这时这个空函数执行，执行完
后，没有进行出队操作，所以它后面的函数（把left从0变成300）不会出队执行。
因此我们可以在空函数中进行出队操作$(this).animate({width:300},2000).queue("fx",function()
{$(this).dequeue("fx")}).animate({left:300},2000); 这时，把left从0变成300的函数就可以执行了。由于fx是队列中的默认名字，因
此上面的代码，可以不用写fx，也就是可以这样写：$(this).animate({width:300},2000).queue(function()
{$(this).dequeue()}).animate({left:300},2000);当然也可以这样写：$(this).animate({width:300},2000).queue(function()
{next()}).animate({left:300},2000);next方法也是出队的意思。
animate方法还有第三个参数，就是回调方法，比如：
$(this).animate({width:300},2000,function(){}).animate({left:300},2000);当把div的宽度从100变成300时（2秒），就会执行
function(){},在执行function里面的代码后，就会立即执行把left从0到300的函数。如果function(){}里面有一个定时器，比如：把高度
从100变成300的定时器函数。这时就会出现高度和left同时变化的情况。
由此可知animate的回调方法，不可控，意思就是它的回调方法执行后会立即执行后面的animate中添加的定时器函数。但是queue就不一样，它是可控的，我们可以等function函数执行完成后（也就是说把function里面的把高度从100变成300的定时器函数执行结束后），再调
用next方法，这时它后面的animate添加的定时器函数才会执行，也就是进行出队，执行把left从0变成300的定时器函数。能很方便的控制
异步操作的流程。
```

接下来我们来看源码实现：

```js
jQuery.extend({
 queue: function( elem, type, data ) {
 var queue;
 if ( elem ) { //当有元素时，才进行操作。比如：$.queue(document,"q1",aaa);document就是elem
 type = ( type || "fx" ) + "queue"; //如果没有传入q1那么type默认为fx，加上queue字符串
 queue = data_priv.get( elem, type ); //去数据缓存中获取此元素的q1queue属性值，第一次时，是undefined。
 if ( data ) { //data就是aaa
 if ( !queue || jQuery.isArray( data ) ) { //如果取的值不存在，第一次时是不存在的。进入if语句
 queue = data_priv.access( elem, type, jQuery.makeArray(data) );//把data也就是aaa函数转换成数组形式，也
就是变成[aaa()]
 } else { //当第二次执行时，也就是$.queue(document,"q1",bbb); 因为里面已经有[aaa()]了，因此直接把
data（这里是bbb函数）push到q1queue属性值中。当然这里有一个例外，比如：第二次执行时，是这样的$.queue(document,"q1",[bbb]);
传入的data是个数组，这时不会走这里，而是走if语句，这样的话，会把之前的[aaa()]覆盖掉，只会有[bbb()]。
 queue.push( data );
 }
 }
 return queue || []; //返回这个队列，其实就是这个数组[aaa(),bbb()]
 }
 },
 dequeue: function( elem, type ) { //$.dequeue(document,"q1")
 type = type || "fx";
 var queue = jQuery.queue( elem, type ), //先获取这个q1队列的值
 startLength = queue.length,
 fn = queue.shift(), //取队列中的第一项
 hooks = jQuery._queueHooks( elem, type ), //hooks其实是元素elem在数据缓存中的一个属性对象，如果我们调
用的是$.dequeue(document,"q1") 的话，那么属性对象名就是q1queueHooks，属性值是{empty: jQuery.Callbacks("once
memory").add(function() { data_priv.remove( elem, [ type + "queue", key ] );})}。因此你使用hooks.empty，其实就是
q1queueHooks.empty。

 next = function() { //这个next方法其实就是出队
 jQuery.dequeue( elem, type );
 };
 if ( fn === "inprogress" ) { //这里为什么会出现inprogress呢？举个例子：
$(this).animate({width:300},2000,function(){}).animate({left:300},2000);这个代码的意思是入队两个定时器函数，第一个定时器函
数是把宽度从100变成300，第二个定时器函数是把left从0变成300.如果这里只有入队操作，没有出队操作，那么这两个定时器函数都不会
执行，因此大家可以去看queue的实例方法，源码在下面，里面有这样一个判断：if ( type === "fx" && queue[0] !== "inprogress" )
{jQuery.dequeue( this, type );}，animate的入队，默认队列为fx，而且它的队列的第一项不是inprogress，而是第一个定时器函数，这
时进入if语句，进行出队。因此才能执行第一个定时器函数。那么第二个定时器函数来入队时，也会马上出队吗？不会，不然的话，两个定
时器函数会同时执行了。那么第二个定时器函数为什么没有立马出队，是因为第一个定时器函数出队时，会在fx队列前面添加inprogress，
因此第二个定时器函数入队时，fx队列的第一个项就是inprogress，因而不会进行出队操作。 第一个定时器函数执行完之后，就会进行再
次出队，这时第二个定时器函数就会执行了。

 fn = queue.shift(); //如果取出的队列的第一项是inprogress，这时队列是[bbb()]，因为inprogress已经出队了，就再
次出队，这时bbb()出队，队列为[]，fn为bbb。
 startLength--; //startLength变成1
 }
 if ( fn ) { //当数组为["inprogress"]出队时，fn = undefined,startLength=0;这时就会结束队列操作了。
 if ( type === "fx" ) { //当是默认队列时，也就是animate操作时，就会先往队列的前面添加inprogress
 queue.unshift( "inprogress" ); //队列变成 ["inprogress"]，这时就会执行bbb()，执行完之后，又出队。
  }
 delete hooks.stop;
 fn.call( elem, next, hooks ); //这里就会执行第一个定时器函数，执行完之后，就会调用next方法，进行出队。这时的
队列是["inprogress",bbb()]
 }
 if ( !startLength && hooks ) { //当队列结束后，清理数据缓存中队列数据
 hooks.empty.fire(); //这里执行fire方法，就会触发add添加的方法，也就是data_priv.remove( elem, [ type +
"queue", key ] );把缓存数据中的所有队列信息，以及q1queueHooks一起删除掉。
 }
 },
 _queueHooks: function( elem, type ) {
 var key = type + "queueHooks";
 return data_priv.get( elem, key ) || data_priv.access( elem, key, {
 empty: jQuery.Callbacks("once memory").add(function() { //empty的属性值是一个Callbacks对象，Callbacks的特点是
可以通过它的add方法添加函数，当调用Callbacks的fire方法时，就会执行add添加的方法。
 data_priv.remove( elem, [ type + "queue", key ] );
 })
 });
 }
});
jQuery.fn.extend({
 queue: function( type, data ) { // $(document).queue("q1",aaa);
 var setter = 2;
 if ( typeof type !== "string" ) { //当type不等于字符串时，也就是这种情况时：$(document).queue(aaa);
 data = type; //data = aaa，type = "fx",setter =1
 type = "fx";
 setter--;
 }
 if ( arguments.length < setter ) { //这里判断是获取，还是设置。比如:$(document).queue("q1")，这里是获取操作，因
此进入if语句。
 return jQuery.queue( this[0], type ); //获取是针对一组元素的第一个元素。
 }
 return data === undefined ? this : this.each(function() { //这里就是设置操作，对每个元素都进行设置
 var queue = jQuery.queue( this, type, data ); //入队操作，会在缓存系统中添加一个队列q1，队列中，入队aaa。
 jQuery._queueHooks( this, type ); //设置元素的hooks对象，会在缓存系统中添加一个hooks属性，它可以移除缓存系
统中与元素this，相关的队列操作的所有数据。
 if ( type === "fx" && queue[0] !== "inprogress" ) { //跟静态方法的queue的思路一样。
 jQuery.dequeue( this, type );
 }
 });
 },
 dequeue: function( type ) { //$(document).dequeue("q1"); 出队操作，是针对一组元素的。也就是说如果有多个document被匹
配上，那么会对每个document都做出队操作。
 return this.each(function() {
 jQuery.dequeue( this, type );
 });
 },
 delay: function( time, type ) { //第一个参数是延迟的时间，第二个参数是哪个队列（队列的名字）延迟，我们先来举个例子说
下delay方法的作用：$(this).animate({width:300},2000).delay(2000).animate({left:300},2000);这个代码的意思是：第一个定时器函
数执行结束后，会延迟两秒钟，才会执行第二个定时器函数。
 time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time; //jQuery.fx.speeds = {slow: 600,fast: 200,_default:
400};意思就是说，你delay里面是否写了"slow"，"fast"，或"_default"。如果是，就直接调用默认的值，如果传入的是数字，那么就只用数字。
 type = type || "fx";
 return this.queue( type, function( next, hooks ) {
 var timeout = setTimeout( next, time ); //延迟time秒，再进行出队。意思就是time秒后，第二个定时器函数才会执
行。
 hooks.stop = function() { //这个方法会清除定时器，如果执行，next方法就不会执行，也就不会出队了
 clearTimeout( timeout );
 };
 });
 },
 clearQueue: function( type ) {
 return this.queue( type || "fx", [] ); //把队列变成空数组，上面说到，如果传入数组，会覆盖队列的原数组
 },
 promise: function( type, obj ) { //type是指队列的名字，如果此type的队列全部出队后，就会执行done添加的方法。我们先举个
例子说下这个方法的作用：$(this).animate({width:300},2000).animate({left:300},2000);$(this).promise().done(function()
{alert(3)});这句代码的意思是，等上面两个定时器函数都执行结束后（因为他们默认处理的都是fx队列）。才会执行弹出3的函数。
 var tmp,
 count = 1,
 defer = jQuery.Deferred(), //新建一个延迟对象
 elements = this,
 i = this.length, //元素的个数，这里假设是一个document元素
 resolve = function() {
 if ( !( --count ) ) {
 defer.resolveWith( elements, [ elements ] );
 }
 };
 if ( typeof type !== "string" ) { //如果没传入队列名，就用fx默认队列
 obj = type;
 type = undefined;
 }
 type = type || "fx";
 while( i-- ) { //执行一次
 tmp = data_priv.get( elements[ i ], type + "queueHooks" ); //去缓存系统找跟这个元素有关的数据
 if ( tmp && tmp.empty ) { //如果存在，就证明队列中有定时器函数要执行。进入if语句
 count++; //count等于2
 tmp.empty.add( resolve ); //当调用tmp.empty.fire方法时，就会执行resolve 方法。而这里会等fx类型的队列全部
出队后（这两个定时器函数都执行结束后），才会触发fire方法，这时就会执行add添加的所有方法，resolve就是其中一个，于是count就
会变成0（在出队列时，下面的resolve方法已经执行一次了），进入if语句，执行延迟对象的resolveWith，而此方法，就会触发延迟对象
的done方法添加的函数，因此弹出3的函数执行。
 }
 }
 resolve(); //这里会先执行一次resolve方法，count--，变成1。
 return defer.promise( obj ); //返回这个延迟对象。
 }
});
```

## 23.jQuery一个对象可以同时绑定多个事件，这是如何实现的？

* $ele.on('eventName', handle1);
* $ele.on('eventName', handle2); 
* $ele.on('eventName', handle3);

也可利用大括号灵活定义多事件，例如 $(selector).on({event1:function, event2:function, ...},childselector);

## 24.是否知道自定义事件

jQuery的自定义事件是通过on和one绑定的，然后再通过trigger来触发这个事件

如有三种情况需要分别处理：

1. 用户提交空值
2. 用户提交的用户名不存在 
3. 用户提交的用户名存在

jQuery 提供的自定义事件可以引入语义，很好地解决问题

```js
//1. 定义自定义事件
$('#username').on('blank.username', function() {
 console.log('请不要留空');
});
$('#username').on('notExist.username', function() {
 console.log('用户名不存在');
});
$('#username').on('success.username', function() {
 console.log('用户名存在');
});
//2. 触发自定义事件
$('.js-submit').on('click', function() {
 var username = $('#username').val();
 username = $.trim(username);
 if (username === '') {
 $('#username').trigger('blank.username'); // 如果 username 为空值，则触发 blank.username 事件
 }
 $.post(url, {username: username}, function(data) {
 var res = data;
 if (res.retcode === -1) {
 $('#username').trigger('notExist.username'); // 如果用户不存在，则触发 notExist.username 事件
 } else if (res.retcode === 0) {
 $('#username').trigger('success.username'); // 如果用户存在，则触发 sucess.username 事件
 }
 });
});
```

## 25.jQuery 是通过哪个方法和 Sizzle 选择器结合的？

jQuery.fn.find()进入Sizzle