# fullpage 笔记文档

## 1. 什么是fullpage:
fullPage.js是一个基于jQuery的插件，它能够很方便、很轻松的制作出全屏网站，主要功能有：

+ 支持鼠标滚动
+ 支持前进后退和键盘控制
+ 多个回调函数
+ 支持手机、平板触摸事件
+ 支持css3动画
+ 支持窗口缩放
+ 窗口缩放时自动调整
+ 可设置滚动宽度、背景颜色、滚动速度、循环选项、回调、文本对齐方式等等

## 2. 兼容性：
+ Jquery兼容
+ 兼容jQuery1.7以上版本
+ 浏览器兼容
+ IE8+
+ Chrome
+ Firefox
+ Opera

## 3. 搭建环境：
+ 引入相关文件

```html
<link rel="stylesheet" type="text/css" href="js/jquery.fullpage.min.css"/>
```

``` html
<script type=”text/javascript” src=”js/jquery-1.8.3.min.js”></script>
<script type=”text/javascript” src=”js/jquery.fullpage.min.js”></script>
```

< !--jquery.easings.min.js用于easing参数，也可以使用完整的jQuery UI 代替。easing是指定动画在不同点上的行进速度-->

``` html
<script type=”text/javascript” src=”ja/jquery.easings.min.js”></script>
```

< !--如果scrollOverflow设置为true使用插件内置滚动条，则需要引入jquery.Slimscroll.min.js,一般情况下不需要-->

``` html
<script type=”text/javascript” src=”js/slimscroll”.min.js”></script>
```

补充：

fullPage的生产环境（环境搭建）：

+ 引入fullpage.css文件
+ 然后是jquery
+ 之后是jquery-ui
+ 最后是fullpage.js

## 4. 基本结构：
``` html
<div id=”fullpage”>
	<div class=”section”>
		<h3>第一屏</h3>
	</div>
	<div class=”section”>
		<h3>第二屏</h3>
	</div>
	<div class=”section”>
		<h3>第三屏</h3>
	</div>
	<div class=”section”>
		<h3>第四屏</h3>
	</div>
</div>
```

+ 每个.section代表一屏，默认显示“第一屏”，中间可以插入页面内容，section中内容默认水平居左垂直居中。可以使用css设置背景颜色以及背景图片调用fullpage.js相关方法.

**基础方法：**

``` html
<script type=”text/javascript”>
	$(document).ready(function(){
	$(“#fullpage”).fullpage();//该方法实现整屏滚动效果
})
</script>
```

## 5. 带有左右切换效果的整屏切换:

``` html
<div id=”fullpage”>
	<div class=”section”>第一屏</div>	
<div class=”section”>第二屏</div>
	<div class=”section”>
	<div class=”slide”> 第三屏的第一屏</div>
	<div class=”slide”> 第三屏的第二屏</div>
	<div class=”slide”> 第三屏的第三屏</div>
	<div class=”slide”> 第三屏的第四屏</div>
</div>
<div class=”section”>这是最后一屏</div>
</div>
```

可以在.section元素内加入.slide元素，实现横屏切换效果

## 6. Fullpage初始化参数
+ 配置选项采用json格式，用来对fullpage()方法进行设置，通过参数的设置，可以指定全屏滚动的不同效果
  语法格式：
  **$(“选择器”).fullpage({**
  	**Name1:value1,**
  	**Name2.value2,**
  	**…**	
  **})**
+ Anchors:	[“值1”,”值2”，…]定义锚链接，数组元素为对听锚链接的名称
+ ScrollingSpeed:	700  滚动速度，单位为毫秒，默认值700
+ Easing:	easeInQuart 设置滚动方式，默认值easeInQuart，设置该参数需要引如jquery.Easings.min.js文件，具体参数参照jQuery UI API-Easings(设置不生效)

## 7. Fullpage初始化参数

+ loopBottom：false 设置滚动最底部时是否滚回顶部，默认值false
+ looptop: false 设置滚到最顶部时是否滚回底部，默认值false
+ anchors: 定义锚链接
+ controlArrowColor: #fff  左右滑块的箭头的背景颜色
+ menu:false   绑定菜单，设定的相关属性与anchors的值对应后，菜单可以控制滚动
+ scrollingSpead: 700滚动速度，单位为毫秒
+ paddingTop: 0 设置每屏上内边距，默认值0
+ paddingBottom: 0 设置每屏下内边距，默认值0
+ keyboardScrolling: true 设置方向键导航，默认值true
+ verticalCentered: true 内容是否垂直居中
+ resize: false  字体是否随着窗口缩放而缩放
+ slidesColor: 设置背景颜色
+ autoScrolling:true  是否使用插件滚动方式，如果选择false,则会出现浏览器自带的滚动条
+ scrollOverflow：false 内容超过满屏后是否显示滚动条
+ css3: false  是否使用css3transforms滚动
+ continuousVertical: false  是否循环滚动，与loopTop及loopBottom不兼容
+ easing: easeInQuart  滚动动画方式
+ loopHorizontal: true 设置左右滑动是否循环滚动，默认值true。

## 8. 绑定菜单导航

**Html格式**

``` html
<ul id=”menu”>
	<li data-menuanchor=”page1”><a href=”#page1”>第一屏</a></li>
	<li data-menuanchor=”page2”><a href=”#page2”>第二屏</a></li>
	<li data-menuanchor=”page3”><a href=”#page3”>第三屏</a></li>
	<li data-menuanchor=”page4”><a href=”#page4”>第四屏</a></li>
</ul>
```

**Css样式**

+ 具体样式根据需求设置即可，必须设置#id .active a{}激活状态时的样式

**Fullpage绑定**

```js
$("#menu").fullpage({
	Anchors:[“page1”,”page2”,”page3”,”page4”],
	Menu:"#menu"
})
//注意，这里是js代码。
```

## 9. 项目导航

+ **fullpage()中的参数进行设置**
+ **navigation:false  是否显示项目导航，默认值false不显示**
  **navigationPosition:”right”项目导航的位置，可选left和right**
+ **navigationTooltips[“page1”,”page2”,”page3”…]设置项目导航鼠标划入提示信息**
+ navigationColor:#000  项目导航的颜色
+ **左右滑块项目导航**:
  + **slidesNavigation:false 设置是否显示左右滑块项目导航**
  + **slidesNavPosition:”bottom” 设置左右滑块项目导航的位置，可选top和bottom**
  + **controlArrowColor:”#fff” 设置左右滑块箭头的颜色**

## 10. fullpage方法函数:
前面介绍了fullpage的配置参数，接下来为大家介绍一些fullpage的方法函数，这些函数是在插件初始化外调用，不同于回调函数，且不受参数的影响。

+ moveSectionUp()

  ​	-- 设置section向上滚动

  ​	-- 用法：$.fn.fullpage.moveSectionUp();

+ moveSectionDown()

  ​	-- 设置section向下滚动

  ​	-- $.fn.fullpage.moveSectionDown();

+ moveSlideRight()

  ​	-- 设置slide向右滑动

  ​	-- $.fn.fullpage.moveSlideRight()

+ moveSlideLeft()

  ​	-- 设置slide向左滑动。

  ​	-- $.fn.fullpage.moveSlideLeft()

+ setAutoScrolling(boolean)

  ​	-- 可以实时控制页面滚动的方式，可选的参数false/true

  ​		如果参数被设置为true，所有的section将自动滚动

  ​		如果参数被设置为false，suoyoudesection将不会自动滚动，需要用户 手动或者使用浏览器的滑条滚动网页

  ​		注意，scrollOverflow参数如果设置为true，他可能很难滚动鼠标滚动轮或触摸板当部分滚动

  ​	-- $.fn.fullpage.setAutoScrolling(false)

+ setAllowScrolling(Boolean,[directions])

  ​	-- 添加或者禁止fullpage自动绑定的鼠标滑轮和移动触摸事件，不过用户仍然可以通过和点击快速导航的方式切换     section/slide.

  ​	-- directions,可选参数，可以设置的值：all，up,down,left,right或者设置组合的参数，例如down，right，它设置的两个方向上将禁止或者激活滚动。

+ setKeyboardScrolling(Boolean,[directions])

  ​	-- 添加或者进制键盘对section/slide的控制，这个事件是默认绑定的。

  ​	-- directions，可选参数，可以设置的值：all,up,down,left,right或者设置组合的参数，例如down、right，它设置的两个

  ​	-- 方向上将禁止或这激活键盘的滚动。

+ setScrollingSpeed(milliseconds)

  ​	-- 定义每个section/slide滚动的时间，默认的时间单位为毫秒(ms).

  ​	-- $.fn.fullpage.setScrollingSpeed(700;)

## 11. Fullpage 回调函数

上一节中介绍了fullpage的方法函数，那些函数只适合单独使用，如果想更加详细的控制fullpage,就需要使用回调函数，接下来得文档将为您详细介绍fullpage中的会点函数使用方法和参数。

- **afterLoad（anchorLink，index）**

  ​	-- 滚动到某一屏后的回调函数，接收anchorLink和index两个参数。

  ​	-- anchorLink是锚链接的名称

  ​	-- index是section的索引，从1开始计算。

- **onLeave(index,nextIndex,direction)**

  ​	-- 滚动前的会点函数（离开当前页面时），接收index、nextIndex和direction3个参数

  ​	-- index是离开的“页面“的序号，从1开始计算；

  ​	-- nextIndex是滚动到的“页面“的序号，从1开始计算；

  ​	-- direction判断往上滚动还是往下滚动，值是up或down.

  

- afterRender()

  ​	-- 这个问题函数只是在生成页面结构的时候调用，这是要用来初始化其他插件或删除任何需要的文件准备好代码的回调。

- AfterSlideLoad(anchorLink,index,slideAnchor,slideIndex)

  ​	-- 滚动到某一水平滑块后的回调函数，与afterLoad类似，接收anchorLink、index、slideIndex、direction4个参数，

  ​	-- slideIndex从0开始计算

- onSlideLeave(anchorLink,index,slideIndex,direction,nextSlideIndex)

  ​	-- 某一水平滑块滚动前的回调函数，与onLeave类似，接二手anchorLink、index、slideIndex、direction、	nextSlideIndex5个参数。slideIndex和nextSlideIndex都是从0开始计算

