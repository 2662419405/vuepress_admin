# 基础面试题's brother(part8)

## 1.IE和dom流区别

* 事件流分类： 

  1. 冒泡型事件流（由内向外） button-p-div 常用 

  2. 捕获型事件流（由外向内） div-p-button 不常用 

  3. IE是冒泡型事件流 

     dom是先获得dom结构，div-p-button-button-p-div

## 2.加快页面加载速度

* dom流减少div嵌套
* css大图缩成小图
* css减少class的使用
* js放到最后调用
* 数据使用AJax异步传输
* 多用局部对象

## 3.递归和回调区别

* 回调把自己当做参数来调用

* 递归总是用自己

* ```js
  function(x){ 
      x=x 
  }
  ```

## 4.JS显示隐藏dom元素

`style.display=none;`

## 5.写一段css让图片(未知大小)水平垂直居中

```css
<stlyle>
img-wrap{
    width:500px;
    height:500px;
    margin:0 auto;
}
</style>
<div class="img_wrap"><img src=""/></div>
```

## 6.HTML5新增的表单元素有哪些？并简要说明他们的作用

* placeholder：文本框在未输入时的提示文字
* datalist：规定输入域的选项列表
* time：选取时间（小时和分钟）
* output：元素用于不同类型的输出，比如计算或脚本输出
* keygen：提供一种验证用户的可靠方法
* date：选取日、月、年
* month：选取月、年
* week：选取周和年
* color：颜色选择
* number：用于应该包含数值的输入域
* range：用于应该包含一定范围内数字值的输入域
* email：用于应该包含 e-mail 地址的输入域
* url：用于应该包含 URL 地址的输入域

## 7.如何让层在flash上显示

给flash设置透明`param value=transparent`或者`param value=opaque`

## 8.jQuery中有哪几种类型的选择器，他们的作用是什么？

1. 基本选择器：通过元素的id、class和标签名等来查找DOM元素
2. 过滤选择器 ：`:first`、`:last`、`:not(selector)`、`:even`、`:odd`、`:eq(index)`、`:gt(index)`、`:lt(index)`、`:focus`、
3. 层次选择器：后代选择器 空格、子选择器>、同辈选择器+、~、
4. 表单对象元素过滤器 
5. 表单选择器：`:text` `:password` `:button` `:checkbox`

## 9.CSS 选择符有哪些？哪些属性可以继承？优先级算法如何计算？ CSS3新增伪类有那些？

CSS选择符：

1. id选择器`(# myid) `
2. 类选择器`(.myclassname) `
3. 标签选择器`(div, h1, p) `
4. 相邻选择器`(h1 + p)` 
5. 子选择器`(ul > li) `
6. 后代选择器`(li a)` 
7. 通配符选择器`( * ) `
8. 属性选择器`(a[rel = "external"]) `
9. 伪类选择器`(a: hover, li:nth-child) `

可继承样式：

1. font-size 
2. font-family 
3. color 
4. text-indent 

不可继承的样式：

1. border 
2. padding 
3. margin 
4. width 
5. height 

CSS权重 优先级算法：

1. 优先级就近原则，同权重情况下样式定义最近者为准; 
2. 载入样式以最后载入的定位为准; 
3. !important > id > class > tag 
4. important 比 内联优先级高，但内联比 id 要高 

CSS3新增伪类举例： 

* p:first-of-type 选择属于其父元素的首个`<p>`元素的每个`<p>`元素
*  p:last-of-type 选择属于其父元素的最后`<p>`元素的每个`<p>`元素
* p:only-of-type 选择属于其父元素唯一的`<p>`元素的每个`<p>`元素。 
* p:only-child 选择属于其父元素的唯一子元素的每个`<p>`元素
*  p:nth-child(2) 选择属于其父元素的第二个子元素的每个`<p>`元素。 
* :enabled :disabled 控制表单控件的禁用状态
* :checked 单选框或复选框被选中。

## 10.介绍一下CSS的盒子模型？

1. 盒模型： 内容(content)、填充(padding)、边界(margin)、 边框(borde) 
2. 有两种， IE 盒子模型、标准 W3C 盒子模型；IE的content部分包含了 border 和 padding; 

## 11.解决PNG显示问题

只需将透明png图片命名为`*-trans.png`

## 12. !important用法、兼容性

我们知道，CSS写在不同的地方有不同的优先级， .css文件中的定义 < 元素style中的属性，但是如果使用!important，事情就会变得不一 样。 首先，先看下面一段代码：

```html
<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>测试Css中的!Important区别</title>
</head>
<style type="text/css">
.testClass{
color:blue !important;
}
</style>
<body>
 <div class="testClass" style="color:red;">
 测试Css中的Important
 </div>
</body>
</html>
```

虽然元素的style中有testClass类的定义，但是在上面的css定义中的用!important限定的定义却是优先级最高的，无论是在ie6-10或者 Firefox和Chrome表现都是一致的，都显示蓝色。 这种情况也同时可以说明ie6是可以识别!important的，只是这个是ie6的一个缺陷吧。如果写成下面的样式，ie6是识别不出来的：

```css
.testClass{
color:blue !important;
color:red;
}
```

这样，在ie6下展示的时候会显示成红色。 当然，也可以通过以下方式来让ie6识别：

```css
.testClass{
color:blue !important;
}
.testClass{
color:red;
}
```

通过以上方式也是可以让ie6显示成蓝色的。以上实例说明使用!important的css定义是拥有最高的优先级的。只是在ie6下出了一点小的bug，注意书写方式一般可以轻松避开的。

## 13.线程与进程的区别

1.  一个程序至少有一个进程,一个进程至少有一个线程 
2. 线程的划分尺度小于进程，使得多线程程序的并发性高 
3. 另外，进程在执行过程中拥有独立的内存单元，而多个线程共享内存，从而极大地提高了程序的运行效率 
4. 线程在执行过程中与进程还是有区别的。每个独立的线程有一个程序运行的入口、顺序执行序列和程序的出口。但是线程不能够独立执 行，必须依存在应用程序中，由应用程序提供多个线程执行控制 
5. 从逻辑角度来看，多线程的意义在于一个应用程序中，有多个执行部分可以同时执行。但操作系统并没有将多个线程看做多个独立的应 用，来实现进程的调度和管理以及资源分配。这就是进程和线程的重要区别 

## 14.你如何对网站的文件和资源进行优化？

1. 文件合并
2. 文件最小化/文件压缩 
3. 使用 CDN 托管 
4. 缓存的使用（多个域名来提供缓存）
5. 其他 

## 15.请说出三种减少页面加载时间的方法

1. 优化图片
2. 图像格式的选择（GIF：提供的颜色较少，可用在一些对颜色要求不高的地方）
3. 优化CSS（压缩合并css，如 margin-top, margin-left...) 
4. 网址后加斜杠（如www.campr.com/目录，会判断这个目录是什么文件类型，或者是目录。） 
5. 标明高度和宽度（如果浏览器没有找到这两个参数，它需要一边下载图片一边计算大小，如果图片很多，浏览器需要不断地调整页面。 这不但影响速度，也影响浏览体验。 当浏览器知道了高度和宽度参数后，即使图片暂时无法显示，页面上也会腾出图片的空位，然后继续加载后面的内容。从而加载时间快了， 浏览体验也更好了）
6. 减少http请求（合并文件，合并图片） 

## 16.你都使用哪些工具来测试代码的性能？

1. Profiler 
2. JSPerf（`http://jsperf.com/nexttick-vs-setzerotimeout-vs-settimeout`）
3. Dromaeo 

## 17.什么是 FOUC（无样式内容闪烁）？你如何来避免 FOUC？

FOUC - Flash Of Unstyled Content 文档样式闪烁

```html
<style type="text/css" media="all">@import "../fouc.css";</style> 
```

而引用CSS文件的@import就是造成这个问题的罪魁祸首。IE会先加载整个HTML文档的DOM，然后再去导入外部的CSS文件，因此，在页面DOM 加载完成到CSS导入完成中间会有一段时间页面上的内容是没有样式的，这段时间的长短跟网速，电脑速度都有关系。 

解决方法简单的出奇，只要在`<head>`之间加入一个`<link>`或者`<script>`就可以了

## 18.null和undefined的区别？

* null是一个表示"无"的对象，转为数值时为0 

* undefined是一个表示"无"的原始值，转为数值时为NaN 

  

* 当声明的变量还未被初始化时，变量的默认值为undefined

* null用来表示尚未存在的对象，常用来表示函数企图返回一个不存在的对象

  

* undefined表示 “缺少值”，就是此处应该有一个值，但是还没有定义。典型用法是： 

  1. 变量被声明了，但没有赋值时，就等于 undefined 
  2. 调用函数时，应该提供的参数没有提供，该参数等于 undefined 
  3. 对象没有赋值的属性，该属性的值为 undefined
  4. 函数没有返回值时，默认返回 undefined

* null表示“没有对象”，即该处不应该有值。典型用法是：
  1. 作为函数的参数，表示该函数的参数不是对象 
  2. 作为对象原型链的终点 

## 19.new操作符具体干了什么呢?

1. 创建一个空对象，并且 this 变量引用该对象，同时还继承了该函数的原型 
2. 属性和方法被加入到 this 引用的对象中
3. 新创建的对象由 this 所引用，并且最后隐式的返回 this 

```js
var obj = {};
obj.__proto__ = Base.prototype;
Base.call(obj);
```

## 20.对JSON 的了解？

JSON(JavaScript Object Notation) 是一种轻量级的数据交换格式。它是基于JavaScript的一个子集。数据格式简单, 易于读写, 占用带宽小。 

`{"age":"12", "name":"back"} `

## 21.js延迟加载的方式有哪些？ 

1. defer和async 
2. 动态创建DOM方式（创建script，插入到DOM中，加载完毕后callBack）
3. 按需异步载入js 

## 22.如何解决跨域问题?

1. jsonp（jsonp 的原理是动态插入 script 标签） 
2. document.domain + iframe 
3. window.name、window.postMessage 
4. 服务器上设置代理页面 

## 23.哪些操作会造成内存泄漏？

内存泄漏指任何对象在您不再拥有或需要它之后仍然存在。 

垃圾回收器定期扫描对象，并计算引用了每个对象的其他对象的数量。如果一个对象的引用数量为 0（没有其他对象引用过该对象），或对 该对象的惟一引用是循环的，那么该对象的内存即可回收。 

1. setTimeout 的第一个参数使用字符串而非函数的话，会引发内存泄漏。 
2. 闭包
3. 控制台日志
4. 循环（在两个对象彼此引用且彼此保留时，就会产生一个循环） 

## 24.如何判断当前脚本运行在浏览器还是node环境中？

通过判断 Global 对象是否为window，如果不为window，当前脚本没有运行在浏览器中

## 25.什么叫优雅降级和渐进增强？

1. 优雅降级：Web站点在所有新式浏览器中都能正常工作，如果用户使用的是老式浏览器，则代码会检查以确认它们是否能正常工作。由于 IE独特的盒模型布局问题，针对不同版本的IE的hack实践过优雅降级了,为那些无法支持功能的浏览器增加候选方案，使之在旧式浏览器上 以某种形式降级体验却不至于完全失效。
2. 渐进增强：从被所有浏览器支持的基本功能开始，逐步地添加那些只有新式浏览器才支持的功能,向页面增加无害于基础浏览器的额外样 式和功能的。当浏览器支持时，它们会自动地呈现出来并发挥作用。 







































