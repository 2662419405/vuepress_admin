# 指向"前端面试题汇总"扩展

## 1,	display:none 和visibility:hidden的区别?


    如果给一个元素设置了display: none;那么该元素以及它的所有后代元素都会隐藏,  

    它是前端开发人员使用频率最高的一种隐藏方式。隐藏后的元素无法点击，  

    无法使用屏幕阅读器等辅助设备访问，占据的空间消失。

    给元素设置visibility: hidden也可以隐藏这个元素，但是隐藏元素仍需占用与未隐藏时一样的空间，

    也就是说虽然元素不可见了，但是仍然会影响页面布局。

**注**:
1、visibility具有继承性，给父元素设置visibility:hidden;子元素也会继承这个属性。

但是如果重新给子元素设置visibility: visible,则子元素又会显示出来。这个和display: none有着质的区别

2、visibility: hidden不会影响计数器的计数，这和display: none完全不一样

3、CSS3的transition支持visibility属性，但是并不支持display，

由于transition可以延迟执行，因此可以配合visibility使用纯css实现hover延时显示效果。提高用户体验。




## 2,	css中 link 和 @import 的区别?

1.语法结构的不同

2.本质不同  

    css属于标签，只能放入html源码里进行使用，  

    而@import可以看作为css样式，可以引入css样式（属于html标签，而@import是css提供的）

3.页面加载

    页面加载时，会被同时被加载，而@import引用的css会等到页面被加载完的时候再加载

4.兼容性。

    @import只有在IE5以上才能被识别，而是html标签，无兼容问题

5.优先级

    不管是link还是@import ，优先级按加载顺序为参考，后加载的优先级高

6.可控性
    
    使用js控制dom改变样式只能使用标签


:::tip 但是
:rainbow:为什么要避免使用CSS @import
:::

    在web前端优化的建议中，不建议使用css @import 因为这种方式加载css相当于把css放在了底部， 

    因此@import会在网页加载中增加延迟

    因为使用@import引用的文件只有引用它的那个css文件被下载、解析后,浏览器才会知道有一个css需要下载

    这时才会去进行想在，然后再解析、构建render tree等一系列操作。

    因此css @import引起的css解析延迟会加长页面留白期，所以要尽量避免css @import，采用标签的方式引入




## 3,position 的 absolute 与 fixed 共同点与不同点

```text
共同点:	
        (1) 改变行内元素的呈现方式 , display被设为block;

		(2) 让元素脱离文档流,

		(3) 默认会覆盖到非定位元素上,

不同点: 
    absolute 的 "根元素" 是可以设置的

	fixed 的 "根元素" 固定为浏览器窗口,
    
    当你滚动网页,fixed 元素与浏览器窗口之间的距离是不变的
```



## 4,	position的 absolute、relative、fixed 分别根据哪一个点来定位？ 

​	

```text
1,	absolute:相对于最近一级的定位不是static的父元素来进行定位.

2,	relative:相对于其在普通流中的位置进行定位

3,	fixed(老IE不支持):相对于浏览器窗口进行定位  

//也同样相对于frame进行定位,但是,h5删除了frame,
```



## 5,	介绍下CSS的盒子模型

​	

```
1,	盒模型:内容(content)	+	内边距(padding)	+	外边距(margin)	+	边框(border)

	注意	IE盒模型为:content	+	padding	+	border

2,	类型:分为IE盒子	&	标准W3C

3,	设置盒模型的方式: box-sizing

	box-sizing:content-box;	标准盒模型

	box-sizing:border-box;	IE盒模型
```



## 6,	CSS 选择符有哪些?	那些属性可以继承?	优先级算法如何介绍?	CSS3新增伪类有哪些?

#### 选择符有哪些:	

* id选择器 ( # id )

* 类选择器 ( . classname )
* 标签选择器 ( div ,h1 ...)
* 相邻选择器 ( h1 + p )
* 子选择器 ( ul > li )
* 后代选择器 ( li a )
* 通配符选择器 ( a )
* 属性选择器 (a[rel = "external"] )
* 伪类选择器 ( a: hover )

#### 常见可继承的属性:

1. 字体系列属性
   * ​	font-family : 字体系列
   * ​    font-weight : 字体的粗细
   * ​    font-size : 字体的大小
   * ​    font-style : 字体的风格
2. 文本系列属性
   * ​    text-indent : 文本缩进
   * ​    text-align : 文本水平对齐
   * ​    line-height : 行高
   * ​    word-spacing : 单词之间的间距
   * ​    letter-spacing : 中文或者字母之间的间距
   * ​    text-transform : 控制文本大小（就是uppercase、lowercase、capitalize这三个）
   * ​    color : 文本颜色
3. 元素可见性:   visibility :  控制元素显示隐藏
4. 列表布局属性:    list-style : 列表风格 包括list-style-type、list-style-image等
5. 光标属性 :    cursor : 光标显示 

#### 常见不可继承的属性: 

1. ​	display : 规定元素应该生成的框的类型
2. ​    文本属性 :  
   1. vertical-align : 垂直文本对齐
   2. text-decoration : 添加到文本的装饰 
   3. text-shadow : 文本阴影效果
   4. white-space : 空白符的处理
   5. Unicode-bidi : 设置文本的方向
3. 盒子模型的属性 :  width ,height , margin ,border ,padding,,,,,等等等
4. 背景属性 : background : 背景图片的颜色,定位,尺寸等等
5. 定位属性 : float , clear , position , min-width , max-height , overflow , z-index...等等
6. 生成内容属性 : content , counter-reset ...等
7. 轮廓样式属性 : outline-style等
8. 声音样式属性 : pause-before、pause-after、pause、cue-before、cue-after、cue、play-during

#### 优先级计算:

**要了解 :** 

​		优先级就是分配给指定的 CSS 声明的一个权重，它由 匹配的选择器中的 每一种选择器类型的 数值 决定。

​		而当优先级与多个 CSS 声明中任意一个声明的优先级相等的时候，CSS 中最后的那个声明将会被应用到元素上。

​		当同一个元素有多个声明的时候，优先级才会有意义。因为每一个直接作用于元素的 CSS 规则总是会接管/覆盖（take over）该元素从祖先元素继承而来的规则。

**优先级权重:**

::: danger 注意
**!important**会覆盖其他所有声明样式,但是应该尽量避免使用
:::

| 选择器类别 |                   说明                    | 权重表示  | 权重表示 |
| :--------: | :---------------------------------------: | :-------: | :------: |
|  行内样式  |         行内只有一个 style = " "          | {1.0.0.0} |   1000   |
|  id选择器  |     selector 中使用了几个id,即#的个数     | {0.1.0.0} |   100    |
| 类别选择器 |          类,伪类,以及属性的个数,          | {0.0.1.0} |    10    |
| 元素选择器 | 伪元素和标签元素的个数,如 : p:first-child | {0.0.0.1} |    1     |


**<font color="#00008B">如果比较后的权重相同,那么后者覆盖前者,后渲染的胜出;</font>**

**<font color="#00008B">内联样式 > id选择器样式 > 类选择器样式 > 元素选择器样式；</font>**

**<font color="#00008B">重中之重，1000/100/10/1这种权值系数的比较方式只是便于理解，真实情况下10个class并不能逆转1个id。</font>**

更详细解析请=>[css优先级计算](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Specificity):rainbow:

#### CSS3新增伪类 :


* p:nth-child(x)

* p:frist-of-type
* p:last-of-type
* p:only-type
* p:only-of-type
* :checked   被选中
* :enabled, :disabled    禁用状态


## 7, 列出 display的值，说明他们的作用 
    none： 隐藏对象。与visibility属性的hidden值不同，其不为被隐藏的对象保留其物理空间
    inline： 指定对象为内联元素。
    block： 指定对象为块元素。
    list-item： 指定对象为列表项目。
    CSS2:
    inline-block： 指定对象为内联块元素。
    table： 指定对象作为块元素级的表格。类同于html标签<table>
    inline-table： 指定对象作为内联元素级的表格。类同于html标签<table>
    table-caption： 指定对象作为表格标题。类同于html标签<caption>
    table-cell： 指定对象作为表格单元格。类同于html标签<td>
    table-row： 指定对象作为表格行。类同于html标签<tr>
    table-row-group： 指定对象作为表格行组。类同于html标签<tbody>
    table-column： 指定对象作为表格列。类同于html标签<col>
    table-column-group： 指定对象作为表格列组显示。类同于html标签<colgroup>
    table-header-group： 指定对象作为表格标题组。类同于html标签<thead>
    table-footer-group： 指定对象作为表格脚注组。类同于html标签<tfoot>
    CSS3:
    run-in： 根据上下文决定对象是内联对象还是块级对象。
    box： 将对象作为弹性伸缩盒显示。（伸缩盒最老版本）
    inline-box： 将对象作为内联块级弹性伸缩盒显示。（伸缩盒最老版本）
    flexbox： 将对象作为弹性伸缩盒显示。（伸缩盒过渡版本）
    inline-flexbox： 将对象作为内联块级弹性伸缩盒显示。（伸缩盒过渡版本）
    flex： 将对象作为弹性伸缩盒显示。（伸缩盒最新版本）
    inline-flex： 将对象作为内联块级弹性伸缩盒显示。（伸缩盒最新版本）


## 8,   说说你对语义化的理解？ 
1、去掉或者丢失样式的时候能够让页面呈现出清晰的结构；



2、有利于SEO：和搜索引擎建立良好沟通，有助于爬虫抓取更多的有效信息：爬虫依赖于标签来确定上下文和各个关键字的权重；



3、方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）以意义的方式来渲染网页；



4、便于团队开发和维护，语义化更具可读性，是下一步吧网页的重要动向，遵循W3C标准的团队都遵循这个标准，可以减少差异化。


## 9,   线程与进程的区别 ?

**概念式区别**

    进程:是并发执行的程序在执行过程中分配和管理资源的基本单位,是一个动态概念,竞争计算机系统资源的基本单位。

    线程:是进程的一个执行单元,是进程内科调度实体.比进程更小的独立运行的基本单位.线程也被称为轻量级进程。

    一个程序至少一个进程，一个进程至少一个线程。  

::: tip 扩展
为什么会有线程:rainbow:
:::

每个进程都有自己的地址空间,即进程空间,

在网络或多用户换机下, 一个服务器通常需要接受大量不确定数量用户的并发请求,

为每一个请求都创建一个进程显然行不通(系统开销大下响应用户请求效率低),

因此操作系统中线程概念被引进

    "线程的改变只代表CPU的执行过程的改变，而没有发生进程所拥有的资源的变化。"

**具体区别**

* 地址空间: 同一进程的线程共享本进程的地址空间,  而进程之间测试独立的地址空间

* 资源拥有: 同一进程内的线程共享本进程的资源如内存,I\O,cpu等,但是线程之间的资源是独立的

> **一个进程崩溃后,在保护模式下不会对其他进程产生影响,但是一个线程崩溃整个进程都死掉,所以多进程要比多线程健壮** 

> **进程切换时,消耗的资源大,效率高.所以涉及到频繁的切换时,使用线程要好于进程 ,**

> **同样如果要求同时进行又要共享某些变量的并发操作,只能用线程不能用进程**
* 执行过程: 每个独立的进程有一个程序运行的入口,顺序执行序列和程序入口,但是线程不能独立执行,必须依存在应用程序中,由应用程序提供多个线程执行控制. 

* 线程是处理器调度的基本线程执行控制,但是进程不是,
* 两者均可并发执行

**优缺点**

    线程执行开销小,但是不利于资源的管理和保护,线程是个在SMP机器(双CPU系统)上运行

    进程执行开销大,但是能够很好的进行资源管理和保护,进程可以跨机器前移
::: tip 那么
何时使用多进程,何时使用多线程?
:::

* 对资源的管理和保护要求高,不限制开销和效率时,使用多线程.

* 要求频率高,频换切换时,资源的保护管理要求不是很高是,使用多线程.

=>[指向知乎大佬解释](https://www.zhihu.com/question/25532384):rainbow:

## 10,  请说出三种减少页面加载时间的方法 

    1,  减少HTTP请求(合并文件,合并图片)  

    2,  优化图片，减小其尺寸

    3,  选择合适的图像格式（gif可用于颜色要求不高的地方）

    4,  压缩JS，CSS代码，把CSS放在顶部，把JS放在底部，最好把CSS和JS放到外部文件

    5,  服务器启用gzip功能

    6,  标明宽度及高度

    7,  网址后面加斜杠“/”(加了斜杠会减少一次判断过程，直接返回网站设置的存放在网站根目录下的默认页面)

    8,  避免空的src和href

    9,  避免跳转

    10, 使用get来完成Ajax请求

## 11,  null和 undefined的区别？

* 首先先看一个判断:二者之间是否全等

``` js

console.log(null == undefined)  //true

console.log(null === undefined)  //false  

```

* 观察可以发现: null 和 undefined 两者比较数值相等,比较类型不等;

* **原因**: 

    null: Null类型,代表"空值",代表一个空的对象指针, typeof 返回 "object" 

    undefined: Undefined类型 ,当声明了一个标量未初始化, 就会返回undefined

* 那么什么时候是 null ,什么时候是 undefined 呢

    **`null`表示"没有对象"    ,即该处不应该有值, 典型用法是:**

    > **作为函数的参数,表示该函数的参数不是对象**

    > **作为对象原型链的终点**

    **`undefined`表示"缺少值" , 就是此处应该有一个值 ,但是还没有定义**

    > **变量被声明了,但是没有复制 , 就等于undefined ;**

    > **调用函数时, 应该提供的参数没有提供 , 该参数等于 undefined ;**

    > **对象没有赋值的属性 , 该属性的值为undefined ;**

    > **函数没有返回值时,  默认返回undefined ;**

::: tip 扩展理解
:rainbow:[JS中的null , undefined , NaN](https://www.w3cplus.com/javascript/understanding-null-undefined-and-nan.html)
:::

## 12,  new 操作符具体干了什么呢? 


* 先看代码 :eyes:

``` js
    var Func=function(){};

    var func=new Func ();
```

* `new`一共经历四个阶段

**1,创建一个空对象**

``` js
var obj = new object();
```

**2,设置原型链**

``` js
obj.__proto__ = func.prototype;
```

**3,让Func中的this指向obj，并执行Func的函数体。**

``` js
var result =Func.call(obj);
```

**4, 判断Func的返回值类型：**

如果是值类型，返回obj。如果是引用类型，就返回这个引用类型的对象。

``` js
if (typeof(result) == "object"){
  func=result;
}
else{
    func=obj;;
}
```

## 13,  documen.write和 innerHTML的区别 

* **document.write是直接将内容写入页面的内容流，会导致页面全部重绘**

* **innerHTML将内容写入某个DOM节点，不会导致页面全部重绘**

## 14,  哪些操作会造成内存泄漏？

* **首先, 什么是内存泄漏**

    内存泄漏：指一块被分配的内存既不能使用，又不能回收，直到浏览器进程结束。

* **其次, 你要了解JS垃圾回收机制**

    JavaScript垃圾回收的机制很简单：找出不再使用的变量，然后释放掉其占用的内存，但是这个过程不是实时的，因为其开销比较大，所以垃圾回收系统（GC）会按照固定的时间间隔,周期性的执行。

    到底哪个变量是没有用的？所以垃圾收集器必须跟踪到底哪个变量没用，对于不再有用的变量打上标记，以备将来收回其内存。用于标记的无用变量的策略可能因实现而有所区别，通常情况下有两种实现方式：<font style="color:red">标记清除</font>和<font style="color:red">引用计数</font>。引用计数不太常用，标记清除较为常用。   

* **那些操作会造成内存泄漏**

    1 , 意外的全局变量引起的内存泄漏

    ``` js
    function run(){
        move = "xxx"; //这时候move为全局变量 不会被回收
        // this.move = "xxx" this指向window
        var go = "yyy" //var创建为局部变量
    }
    run(); //调用一次
    console.log(move) //打印字符串 xxx
    console.log(go) // not defined 找不到函数内部的局部变量
    ```

    2   , 被遗忘的定时器或者回调

    ``` js
    var someResouce=getData();
    setInterval(function(){
        var node=document.getElementById('Node');
        if(node){
            node.innerHTML=JSON.stringify(someResouce)
        }
    },1000)
    ```

    如果 id 为 Node 的元素从 DOM 中移除, 该定时器仍会存在, 同时, 因为回调函数中包含对 someResource 的引用, 定时器外面的 someResource 也不会被释放。

    3 , 闭包

    > 匿名函数可以访问父级作用域中的变量

    ``` js
        function assignHandler(){
            var element = document.getElementById('someElement') //该变量被闭包引用，引用次数至少为1，不会被回收
            element.onclick=function(){
                alert(element.id)
            }
             element=null;
             //解决办法即使用完毕时 及时将无用变量赋值空
        }
    ```

    4 , 子元素引起的内存泄漏

    > **举个例子**

    ``` js
    //id名为 a & b 为父级与子级关系,
    var A = document.getelementById("a");
    var B = document.getelementById("b");
    //id名为a & b 储存在内存中 
    document.body.removeChild(A);
    //a被移除,但是 内存中依旧还拥有他的位置
    A = null; // 父级从内存中释放,子级依然存在,关系链依然存在
    B = null; // 子级从内存释放 ,整体移除
    ```
    > **子元素 B 由于 parentNode 的间接引用，只要它不被删除，它所有的父元素都不会被删除**

## 15 , JavaScript中的作用域与变量声明提升？

> **这几天刷题频繁碰见变量提升以及作用域问题,这里总结一下**

* **先看题 , <font style="color : red ;">思考</font> : 每次输出的值是什么**

``` js
var a = 100
function fun() {
  console.log(a);
  var a = 200;
  console.log(a);
}

fun();
console.log(a);

var a;
console.log(a);

var a = 200;
console.log(a);

for(i = 0;i < 5;i ++) {
  var a = i;
}
console.log(a);
```

* **紧接着我们来理解什么是<font style="color : red ;">变量作用域</font>**

    ::: tip 你要了解
        javascript中，是以function为单位。所谓块级，就是{}花括号括起来为一块，以function为单位，就是指变量的作用域上限就是当前所在的函数
    :::

    变量作用域无非两种 : **全局变量** 和 **局部变量**

    * * **全局变量**

        > 每一个在函数外部声明或者定义的变量都是一个全局对象，
          所以这个变量可以在任何地方被使用

    ``` js
    var a = "js";
    function ts(){
        console.log(a);
    } 
    ts()
    ```

    *  a 为全局变量 , 所以可以在任何地方调用

    * * **局部变量**

        > 在一个函数内定义的变量只能在函数内部访问或者这个函数内部的函数访问

* * **我们来看例子:+1:**

    * **如果没有用var关键字声明局部变量，它们就是全局范围的一部分**

    ``` js
    var name = "小明";
 
    function showoneName () {
        console.log (name);
    }
 
    function showtwoName () {    
        name = "小红"; //并没有使用var ,所以为全局变量赋值
        console.log (name);
    }
    showoneName (); // 小明
 
    // name 不是局部变量，它只是改变全局名称变量
    showtwoName (); // 小红
 
    // 全局变量现在是小红
    showoneName (); // 小红
 
    // 解决方法是用var关键字声明您的局部变量
    function users () {
    // 这里，名称变量是局部变量，它优先于全局变量中的相同名称变量
        var name = "Jack";
 
    // 试图在全局范围内查看函数外部之前，名称搜索就从函数内部开始
    console.log (name); 
    }

    users (); // Jack
    ```

* **<font style="color:red">变量的声明提升</font>**

* 当对变量的声明出现在了相同作用域的靠后的位置的时候，变量的声明被自动提升到作用域开头。

    我们一般在声明变量的时候，会这样操作：

        var a = 100;

    实际上，这个动作完成了三件事：声明一个变量，定义这个变量的数据类型，赋值（初始化）。

    那么当这个动作出现在同一个作用域的靠后的位置，javascript会把代码解释为什么情况呢

        alert(a);
        var a = 100;
    
    事实上 ,会如此解读

        var a;
        alert(a);
        var a = 100;

    所以`alert(a)`的值为undefined;

* **所谓变量声明提升，就是被声明动作如果发生在靠后的位置，会被自动提升到作用域的最前面。**

* **<font style="color:blue;">例子</font>**

    ``` js
        var a = 100;
        console.log(a);
        var a = 200;
        console.log(a);
        function fun2() {
            console.log(a);
            var a = 3;
            console.log(a)
        }
        fun2();
        console.log(typeof a);

        var a = function() {}
        console.log(typeof a);
    ```

    * 上面的代码 出现多次声明,我们呀要进行区分每一个`a`的作用域,然后再进行变量提升


    * 解读如下

    ``` js
    a = 100;
    alert(a); //输出100

    a = 200;
    alert(a); //输出200

    function fun2() {
        var a;
        alert(a);
        a = 3;
    }

    fun2(); // 输出undefined

    alert(typeof a); //输出 number

    a = function(){}
    alert(typeof a); // 输出 function
    ```
::: tip 别忘了
    现在回头看看一开始的,是不是直接就想出答案
:::



* **更多详情=>:fire:[唐霜的博客](https://www.tangshuang.net/2384.html):fire:**