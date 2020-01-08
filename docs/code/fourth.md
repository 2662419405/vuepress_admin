# 基础面试题1

## HTML

### 行内元素有哪些？块级元素有哪些？空(void)元素有哪些？

* 首先：CSS规范规定，每个元素都有display属性，确定该元素的类型，每个元素都有默认的display值，如div的display默认值为“block”， 则为“块级”元素；span默认display属性值为“inline”，是“行内”元素。

1. 行内元素：`a b i em del sup sub tt span img input select strong `

   ​					h5新增`bdo abbr q cite code dfn ins`

2. 块级元素：`div ul ol li dl dt dd h1~h6 p address center pre xmp blockquote   `

3. 常见的空元素：`<br> <hr> <img> <input> <link> <meta>`

   鲜为人知的是：`<area> <base> <col> <command> <embed> <keygen> <param> <source> <track> <wbr>`


## CSS

### 解决IE图片失真

```css
img { -ms-interpolation-mode: bicubic; }
```

### CSS Hack分类

* `CSS Hack`大致有3种表现形式，CSS属性前缀法、选择器前缀法以及IE条件注释法（即HTML头部引用if IE）Hack，实际项目中`CSS Hack`大部 分是针对IE浏览器不同版本之间的表现差异而引入的。

1. <b>属性前缀法</b>(即类内部Hack)：例如 `IE6能识别下划线"_"和星号" * "，IE7能识别星号" * "，但不能识别下划线"_"，IE6~IE10都认 识"\9"，但firefox前述三个都不能认识`
2. <b>选择器前缀法</b>(即选择器Hack)：例如 `IE6能识别html .class{}，IE7能识别*+html .class{}或者*:first-child+html .class{}`
3. <b>IE条件注释法</b>(即HTML条件注释Hack)：`针对所有IE(注:IE10+已经不再支持条件注释)：IE浏览器显示的内容 ，针对IE6及以下版本。这类Hack不仅对CSS生效，对写在判断语句里面的所有代码都会生效。`



### CSS3新增特性

1. 新增选择器:`nth-child(even)`、`nth-child(odd)`、`:not(.textinput)`、`E:empty`、`E:checked `、`E:enabled` 、`E:disabled`、`E::selection`、`E:not(s)`等； 
2. @Font-face使用服务器字体； 
3. Word-wrap（字母断行不分开） & Text-overflow（clip、ellipsis裁剪） 样式、文字渲染Text-decoration； 
4. CSS3 的多列布局（multi-column layout）； 
5. 边框和颜色（支持透明度和圆角） rgba(255, 0, 0, 0.75)、border-radius: 15px； 
6. CSS3 的水平、径向渐变效果（Gradient）； 
7. 阴影（Shadow）和反射（Reflect）效果； 
8. 多背景效果； 
9. Transitions, Transforms 和 Animation；

### 经常遇到的浏览器的兼容性有哪些？原因？解决方法是什么，常用hack的技巧？

* png24位的图片在iE6浏览器上出现背景

  解决方案：做成PNG8

* 浏览器默认的margin和padding不同

  解决方案：加一个全局的`*{margin:0;padding:0;}`来统一。 

* IE6双边距bug:块属性标签float后，又有横行的margin情况下，在ie6显示margin比设置的大。浮动ie产生的双倍距离 `#box{ float:left; width:10px; margin:0 0 0 100px;} `这种情况之下IE会产生20px的距离

  解决方案：在float的标签样式控制中加入 ——`_display:inline;`将其转化为行内属性。(_这个符号只有ie6会识别) 渐进识别的方式，从总体中逐渐排除局部。 首先，巧妙的使用“\9”这一标记，将IE游览器从所有情况中分离出来。 接着，再次使用“+”将IE8和IE7、IE6分离开来，这样IE8已经独立识别。

  ```css
  例如：
   	.bb{
   		background-color:#f1ee18;/*所有识别*/
   		.background-color:#00deff\9; /*IE6、7、8识别*/
   		+background-color:#a200ff;/*IE6、7识别*/
   		_background-color:#1e0bd1;/*IE6识别*/
   	}
  ```

* IE下,可以使用获取常规属性的方法来获取自定义属性, 也可以使用`getAttribute()`获取自定义属性; Firefox下,只能使用`getAttribute()`获取自定义属性。 

  解决方法：统一通过`getAttribute()`获取自定义属性。

* IE下,even对象有x,y属性,但是没有`pageX`,`pageY`属性; Firefox下,event对象有`pageX`,`pageY`属性,但是没有x,y属性。 

  解决方法：（条件注释）缺点是在IE浏览器下可能会增加额外的HTTP请求数。 Chrome 中文界面下默认会将小于 12px 的文本强制按照 12px 显示, 可通过加入 CSS 属性 `-webkit-text-size-adjust: none;` 解决。

* 超链接访问过后hover样式就不出现了 被点击访问过的超链接样式不在具有hover和active了

  解决方法：改变CSS属性的排列顺序: `L-V-H-A : a:link {} a:visited {} a:hover {} a:active {} `

### CSS里的visibility属性有个collapse属性值是干嘛用的？在不同浏览器下以后什么区别？

* 当一个元素的visibility属性被设置成collapse值后，对于一般的元素，它的表现跟hidden是一样的。但例外的是，如果这个元素是table 相关的元素，例如table行，table group，table列，table column group，它的表现却跟display: none一样，也就是说，它们占用的空间 也会释放。 在谷歌浏览器里，使用collapse值和使用hidden值没有什么区别。 在火狐浏览器、Opera和IE11里，使用collapse值的效果就如它的字面意思：table的行会消失，它的下面一行会补充它的位置。

### CSS优化、提高性能的方法有哪些？

1. 使用简写

   简写可以使CSS文件更小

   ```css
   例如：
   p{
   	margin-top:1px;
   	margin-right:2px;
   	margin-bottom:3px;
   	margin-left:4px;
   }
   //使用下面的缩写代替上面的
   p{
   	margin:1px 2px 3px 4px;
   }
   ```

2. 消除不需要的零和单位

   CSS支持多种单元和数字格式。这些单元和格式正好是值得优化的目标——可以删除小数点前后无实际意义的零，如下面的代码片段所示。此外，请记住，零始终是零，添加维度不会为包含的信息添加值。

   ```css
   padding:0.2em;
   margin:20.0em;
   avalue:0px;
   padding:.2em;
   margin:20em;
   avalue:0;
   ```

3. 消除过度分号

   这种优化从某种程度来说也是非常关键的，因为它会影响代码的更改。CSS规范允许省略属性组中的最后一个分号。由于这种优化方法节省的资源很少，因此我们主要针对那些使用自动优化器的人来介绍这种方法。

   ```css
   p{
   ...
      font-size:1.33em 
   }
   ```

4. 使用雪碧图

5. 删除px

   一个提高性能的好方法是使用CSS标准的一个特性。没有单位的数值被假定为像素——删除px可以为每个数字节省两个字节。

6. 删除空格

   空格（想想代码或文本中的制表符、回车和空格）——使代码更容易阅读，但从解析器的角度看，它几乎没有什么用处。

### 浏览器是怎样解析CSS选择器的？

浏览器对选择器的解析规则是从右到左解析的，比如`.box .left p`,会在页面中找到所有的`p标签`，然后在`p标签`中找其父元素有`.left类`的`p元素`，再找祖父元素有`.box`的`p标签`。

### 在网页中应该使用奇数还是偶数的字体？为什么呢？

* 偶数字号相对更容易和 web 设计的其他部分构成比例关系。比如：当我用了 14 px 的正文字号，我可能会在一些地方用 14 × 0.5 = 7 px 的 margin，在另一些地方用 14 × 1.5 = 21 px 的标题字号。

## JS

### 请至少写出2种方法，不通过第三个中间变量，交换2变量的值

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

### 什么是闭包，请写出一个简单的例子说明。

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

### 闭包的作用

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

  





































