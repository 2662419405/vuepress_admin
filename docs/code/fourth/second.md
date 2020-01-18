# 基础面试题's brother(part2)

## 13.什么是响应式设计？响应式设计的基本原理是什么？如何兼容低版本的IE？

* 响应式设计就是为了实现根据不同设备环境自动响应及调整网页布局的一种设计方案。
* 基本原理就是利用css的媒体查询功能更具不同屏幕的大小，向下兼容设备、移动优先，达到响应的效果。
* 兼容IE可以使用JS辅助一下来解决

## 14.视差滚动效果，如何给每页做不同的动画？（回到顶部，向下滑动要再次出现，和只出现一次分别怎么做？）

> 长工在寻找答案的路上

## 15.  ::before 和 :after中双冒号和单冒号有什么区别？解释一下这2个伪元素的作用。

* 双冒号是在当前规范中引入的，用于区分伪类和伪元素。但是伪类兼容现存样式，浏览器需要同时支持旧的伪类，比如:first-line、:first-letter、:before、:after等。
* 对于CSS2之前已有的伪元素，比如:before和:after，单冒号和双冒号的写法::before和::after作用是一样的。
* 如果只需要兼容webkit、firefox、opera等浏览器，建议对于伪元素采用双冒号的写法，如果不得不兼容IE浏览器，还是用CSS2的单冒号写法比较安全。

## 16.如何修改chrome记住密码后自动填充表单的黄色背景 ？

:::tip Do you know?

使用火狐打开`about:mozilla` 你将看到Mozilla之书

:::

1. chrome 表单自动填充后，input文本框的背景会变成黄色的，通过审查元素可以看到这是由于chrome会默认给自动填充的input表单加上input:-webkit-autofill私有属性，然后对其赋予以下样式：

```css
input : -webkit-autofill {
    background-color : #FAFFBD;
    background-image : none;
    color : #000;
}
```

在有些情况下，这个黄色的背景会影响到我们界面的效果，尤其是在我们给input文本框使用图片背景的时候，原来的圆角和边框都被覆盖了：

* 情景一：input文本框是纯色背景的可以对input:-webkit-autofill使用足够大的纯色内阴影来覆盖input输入框的黄色背景；如：

```css
input : -webkit-autofill {
    -webkit-box-shadow : 0 0 0px 1000px white inset; 
    border : 1px solid #CCC !important;
}
```

2. 如果你有使用圆角等属性，或者发现输入框的长度高度不太对，可以对其进行调整，除了chrome默认定义的background-color，background-image，color不能用!important提升其优先级以外，其他的属性均可使用!important提升其优先级，如：

```css
input : -webkit-autofill {
    -webkit-box-shadow : 0 0 0px 1000px white inset ;
    border : 1px solid #CCC !important ;
    height : 27px !important ;
    line-height : 27px !important ;
    border-radius : 0 4px 4px 0 ;
}
```

* 情景二：input文本框是使用图片背景的

  这个比较麻烦，目前还没找到完美的解决方法，有两种选择：

  1. 如果你的图片背景不太复杂，只有一些简单的内阴影，那个人觉得完全可以使用上面介绍的方法用足够大的纯色内阴影去覆盖掉黄色背景，此时只不过是没有了原来的内阴影效果罢了。

  2. 如果你实在想留住原来的内阴影效果，那就只能牺牲chrome自动填充表单的功能，使用 js 去实现，例如：

     ```js
     $(function(){
         if( navigator.userAgent.toLowerCase().indexOf("chrome")>=0){
             $( window ). load ( function (){
             $('ul input:not(input[type=submit])' ).each(function(){
             var outHtml = this.outerHTML ;
             $(this).append( outHtml );
             });
         });
         }
     });
     ```

遍历的对象可能要根据你的需求去调整。如果你不想使用js，好吧，在form标签上直接关闭了表单的自动填充功能：`autocomplete="off"`。

## 17.你对line-height是如何理解的？

1. line－height是用来设置字体的行高，可以理解为设置文字高度的占位大小，单位可以是数字，或者像素
2. 数字：更具文字的大小来决定  1.5相当于文字大小的1.5倍
3. 像素：就是通常的px大小了

> <a href="https://www.zhangxinxu.com/wordpress/2009/11/css行高line-height的一些深入理解及应用/">觉得解释有些牵强？想更深入理解？点我试试？</a>:100::eyeglasses:

## 18.设置元素浮动后，该元素的display值是多少？

* 自动变成`display:block`

## 19.怎么让Chrome支持小于12px 的文字？

```css
-webkit-text-size-adjust:none;
```

## 20.让页面里的字体变清晰，变细用CSS怎么做？

```css
-webkit-font-smoothing: antialiased;
```

## 21.font-style属性可以让它赋值为“oblique” oblique是什么意思？

1. 要搞清楚这个问题，首先要明白字体是怎么回事。一种字体有粗体、斜体、下划线、删除线等诸多属性。 但是并不是所有字体都做了这些，一些不常用的字体，或许就只有个正常体，如果你用Italic，就没有效果了~这时候你就要用Oblique. 可以理解成Italic是使用文字的斜体，Oblique是让没有斜体属性的文字倾斜！ 
2. 另外附上CSS2.0上边的解释你参考下： italic和oblique都是向右倾斜的文字, 但区别在于Italic是指斜体字，而Oblique是倾斜的文字，对于没有斜体的字体应该使用Oblique属 性值来实现倾斜的文字效果.

## 22.position:fixed;在android下无效怎么处理？

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"/>
```

## 23.页面中的iframe如何实现自适应宽高

```js
parent.document.all("框架ID名").style.height=document.body.scrollHeight;
parent.document.all("框架ID名").style.width=document.body.scrollWidth;
```

## 24.什么是WEB标准？

* WEB标准，即网站标准。目前所通常所说的WEB标准一般指网站建设采用基于XHTML语言的网站设计语言,WEB标准中典型的应用模式是 “css+div”（什么是css+div）。实际上，WEB标准并不是某一个标准，而是一系列标准的集合。

## 25.请描述一下display:none与visibility:hidden相同和不同的地方是什么？

* 相同点：都是将元素隐藏起来。 

* 不同点：

  `visibility: hidden`----将元素隐藏，但是在网页中该占的位置还是占着。（可见度为零） `display:none`----将元素的显示设为无，即在网页中不占任何的位置。

## 26.CSS选择符有哪些？哪些属性可以继承？

1. id选择器`(#myid) `
2. 类选择器`(.myclassname)`
3. 标签选择器`(div, h1, p)`
4. 相邻选择器`(h1 + p)`
5. 子选择器`(ul > li)`
6. 后代选择器`(li a)`
7. 通配符选择器`(*)`
8. 属性选择器`(a[rel = "external"])`
9. 伪类选择器`(a:hover, li:nth-child)`

* 可继承的样式： `font-size` `font-family` `color` `ul` `li` `dl` `dd` `dt`
* 不可继承的样式：`border` `padding` `margin` `width` `height `

## 27.CSS中 link 和@import 的区别是？

1. link属于HTML标签，而@import是CSS提供的
2. 页面被加载的时，link会同时被加载，而@import引用的CSS会等到页面被加载完再加载;
3. import只在IE5以上才能识别，而link是HTML标签，无兼容问题
4. link方式的样式的权重 高于@import的权重
5. link支持使用Javascript控制DOM去改变样式；而@import不支持

## 28.position的absolute与fixed共同点与不同点

A：共同点： 

1. 改变行内元素的呈现方式，display被置为block
2. 让元素脱离普通流，不占据空间；
3. 默认会覆盖到非定位元素上 

B：不同点： 

1. absolute的“根元素”是可以设置的，而fixed的“根元素”固定为浏览器窗口。 当你滚动网页，fixed元素与浏览器窗口之间的距离是不变的

## 29.列出display的值，说明他们的作用。

* `display` 的值和作用：
  1. `block` 像块类型元素一样显示。
  2. `inline` 缺省值。像行内元素类型一样显示。
  3. `inline-block` 像行内元素一样显示，但其内容象块类型元素一样显示，并且具有`width`、`height`属性
  4. `list-item` 像块类型元素一样显示，并添加样式列表标记

## 30.position的值，relative和absolute分别相对于谁进行定位？

* `position` 的值的定位区别： 
  1. `absolute`生成绝对定位的元素，相对于 `static `定位以外的第一个祖先元素进行定位。外层是`relative`, `absolute`是相对于`relative`， 外层没有`relative`时，相对于`body`定位
  2. `fixed` 生成绝对定位的元素，相对于浏览器窗口进行定位（老IE不支持）
  3. `relative` 生成相对定位的元素，相对于其在普通流中的位置（自身）进行定位
  4. `static` 默认值。没有定位，元素出现在正常的流中（忽略 `top`, `bottom`, `left`,`right` `z-index` 声明）
  5. `inherit` 规定从父元素继承`position`属性的值

## 31.CSS3如何居中一个元素？

1. margin：0 auto；和width实现水平居中
2. inline-block实现水平居中方法
3. 浮动实现水平居中的方法（50%）
4. display：table-cell
5. width：fit-content
6. transform：translate（-50%，-50%）

## 32.为什么要初始化CSS样式

* 因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的，如果没对CSS初始化往往会出现浏览器之间的页面显示差异。 当然，初始化样式会对SEO有一定的影响，但鱼和熊掌不可兼得，但力求影响最小的情况下初始化。 
* 最简单的初始化方法就是（不建议）： `*{padding: 0; margin: 0;}`

## 33.解释下 CSS sprites，以及你要如何在页面或网站中使用它。

* CSS Sprites 其实就是把网页中一些背景图片整合到一张图片文件中，再利用 CSS 的`background-image`，`backgroundrepeat`，`background-position` 的组合进行背景定位，`background-position` 可以用数字能精确的定位出背景图片的位置。这样可以减少很多图片请求的开销，因为请求耗时比较长；请求虽然可以并发，但是也有限制，一般浏览器都是6个。对于未来而言，就不需要这样做了，因为有了http2。

## JS :rainbow_flag:

## 1.请至少写出2种方法，不通过第三个中间变量，交换2变量的值

```js
1.
a=3 b=5
(function(){
    var a=10,b=2;
    	a=a+b;
    	b=a-b;
    	a=a-b;
    alert(a+" "+b);
})();
2.
(function(){
    var a=10,b=2;
    	a=a^b;
    	b=b^a;
    	a=a^b;
    alert(a+" "+b);
})();
```

## 2.什么是闭包，请写出一个简单的例子说明。

**闭包就是函数中的函数，里面的函数可以访问外面函数的变量；外面的变量是这个内部函数的一部分。**

```js
function outer{
    var num=0;
    return function add(){
        num++;
        console.log(num);
    };
}
var func1=outer();
	func1();//实际上是调用add函数，输出1
	func1();//输出1
var func2=outer();
	func2();//输出1
	func2();//输出2
```

## 3.闭包的作用

1. 使用闭包可以访问函数中的变量
2. 可以使变量长期保存在内存中，声明周期比较长

* 加分项

  闭包不能滥用，否则会导致内存泄漏，影响网页的性能。闭包使用完后，要立即释放资源，将引用变量指向null

  答：是指有权访问另一个函数作用域中的变量的函数。创建闭包常见的方式，就是在一个函数内部创建另一个内部(私有)函数。

  ```js
  例如：
  function test(){
      var x=10;
      return function(){
          return x;
      }
  }
  alert(x);//调用局部变量x，报错未定义
  var a=test();//调用
  alert(a());
  ```
