# 基础面试题's brother(part6)

### 1.AMD、CMD规范区别？

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

### 2.documen.write和 innerHTML的区别

* `document.write`只能重绘整个页面
* `innerHTML`可以重绘页面的一部分

### 3.call() 和 .apply() 的区别？

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

### 4.滚动加载图片(懒加载)实现原理

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

  2. 如何获取正真的路径，这个简单，现在正真的路径存在元素的“data-url”（这个名字起个自己认识好记的就行）属性里，要用的时候就取出来，再设置；

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

:::

### 5.POST、GET区别

1.  get是从服务器上获取数据，post是向服务器传送数据。
2.  get是把参数数据队列加到提交表单的ACTION属性所指的URL中，值和表单内各个字段一一对应，在URL中可以看到。post是通过HTTP post机制，将表单内各个字段与其内容放置在HTML HEADER内一起传送到ACTION属性所指的URL地址。用户看不到这个过程
3.  对于get方式，服务器端用Request.QueryString获取变量的值，对于post方式，服务器端用Request.Form获取提交的数据
4.  get传送的数据量较小，不能大于2KB。post传送的数据量较大，一般被默认为不受限制。但理论上，IIS4中最大量为80KB，IIS5中为 100KB
5.  get安全性非常低，post安全性较高。但是执行效率却比Post方法好















































































