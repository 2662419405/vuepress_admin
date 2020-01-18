# 基础面试题's brother(part1)

::: tip 写在前面的话

屏幕前的你既然打开了这套面试题，相信你一定会陪本长工到底吧(scrollBottom()  :o)，在题与题之间还会发现一些小彩蛋，希望能给屏幕前的你继续向前的勇气:muscle:，请相信芝士(知识)就是力量！！！

友情提示：基础面试题's brother(part1)到(part3)都是按照分类进行排序的，从(part4)开始将不再进行分类，在此希望您能提出宝贵的意见，在网页的最下方有反馈信息栏您可以给我们反馈哦~

:::

## 网站知识 :point_down::point_down::point_down:

:::tip 友情提示

网站的面试题也很重要！！！请不要忽略他的重要性！！！所以放在最上面

:::

### 1.请描述一下 cookies，sessionStorage 和 localStorage 的区别？

1. `cookie`是网站为了标示用户身份而储存在用户本地终端（Client Side）上的数据（通常经过加密）。 
2. `cookie`数据始终在同源的http请求中携带（即使不需要），即会在浏览器和服务器间来回传递。 
3. `sessionStorage`和`localStorage`不会自动把数据发给服务器，仅在本地保存。 
4. 存储大小：
   * `cookie`数据大小不能超过4k。 
   * `sessionStorage`和`localStorage`虽然也有存储大小的限制，但比`cookie`大得多，可以达到5M或更大。 
5. 有期时间： 
   * `localStorage` 			存储持久数据，浏览器关闭后数据不丢失除非主动删除数据；

   * `sessionStorage`        数据在当前浏览器窗口关闭后自动删除。 

   * `cookie`                      设置的`cookie`过期时间之前一直有效，即使窗口或浏览器关闭

### 2.请你谈谈Cookie的缺点以及优点

缺点： 

1. Cookie数量和长度的限制。每个特定域名下最多只能有20条cookie，每个cookie长度不能超过4KB，否则会被截掉。 

   ```css
   细节:
   1.IE6或更低版本最多20个cookie
   2.IE7和之后的版本最后可以有50个cookie。
   3.Firefox最多50个cookie
   4.chrome和Safari没有做硬性限制
   5.IE和Opera 会清理近期最少使用的cookie，Firefox会随机清理cookie。 
   6.cookie的最大大约为4096字节，为了兼容性，一般不能超过4095字节。
   7.IE 提供了一种存储可以持久化用户数据，叫做uerData，从IE5.0就开始支持。每个数据最多128K，每个域名下最多1M。这个持久化数据放在缓存中，如果缓存没有清理，那么会一直存在。 
   ```

2. 安全性问题。如果cookie被人拦截了，那人就可以取得所有的session信息。即使加密也与事无补，因为拦截者并不需要知道cookie的意 义，他只要原样转发cookie就可以达到目的了。 

3. 有些状态不可能保存在客户端。例如，为了防止重复提交表单，我们需要在服务器端保存一个计数器。如果我们把这个计数器保存在客户 端，那么它起不到任何作用。 

4. 任何以cookie形式存储的数据，不论服务器端是否需要，每一次http请求都会把这些数据传输到服务器端。

优点：极高的扩展性和可用性 

1. 通过良好的编程，控制保存在cookie中的session对象的大小。 
2. 通过加密和安全传输技术（SSL），减少cookie被破解的可能性。 
3. 只在cookie中存放不敏感数据，即使被盗也不会有重大损失。 
4. 控制cookie的生命期，使之不会永远有效。偷盗者很可能拿到一个过期的cookie。 

### 3.简单说一下浏览器本地存储是怎样的

1. 在较高版本的浏览器中，js提供了sessionStorage和globalStorage。在HTML5中提供了localStorage来取代globalStorage。 
2. html5中的Web Storage包括了两种存储方式：sessionStorage和localStorage。
3. sessionStorage用于本地存储一个会话（session）中的数据，这些数据只有在同一个会话中的页面才能访问并且当会话结束后数据也随之 销毁。因此sessionStorage不是一种持久化的本地存储，仅仅是会话级别的存储。 而localStorage用于持久化的本地存储，除非主动删除数据，否则数据是永远不会过期的

### 4.Web storage和cookie的区别

1. Web Storage的概念和cookie相似，区别是它是为了更大容量存储设计的。Cookie的大小是受限的，并且每次你请求一个新的页面的时候 Cookie都会被发送过去，这样无形中浪费了带宽，另外cookie还需要指定作用域，不可以跨域调用。 
2. 除此之外，Web Storage拥有setItem,getItem,removeItem,clear等方法，不像cookie需要前端开发者自己封装setCookie，getCookie。 
3. 但是Cookie也是不可以或缺的：Cookie的作用是与服务器进行交互，作为HTTP规范的一部分而存在，而Web Storage仅仅是为了在本地“存 储”数据而生 
4. 浏览器的支持除了IE７及以下不支持外，其他标准浏览器都完全支持(ie及FF需在web服务器里运行)，值得一提的是IE总是办好事，例如 IE7、IE6中的UserData其实就是javascript本地存储的解决方案。通过简单的代码封装可以统一到所有的浏览器都支持web storage。 
5. localStorage和sessionStorage都具有相同的操作方法，例如setItem、getItem和removeItem等

### 5.什么是URL？host、port、path、query、fragment

* URL

  统一资源定位符 (Uniform Resource Locator, URL) 

  完整的URL由这几个部分构成： scheme://host:port/path?query#fragment scheme:通信协议 常用的http,ftp,maito等

* host:主机。服务器(计算机)域名系统 (DNS) 主机名或 IP 地址。

* port:端口号 整数，可选，省略时使用方案的默认端口，如http的默认端口为80。

* path:路径 由零或多个"/"符号隔开的字符串，一般用来表示主机上的一个目录或文件地址

* query:查询 可选，用于给动态网页（如使用CGI、ISAPI、PHP/JSP/ASP/ASP.NET等技术制作的网页）传递参数，可有多个参数，用"&"符号隔开，每个参 数的名和值用"="符号隔开。

* fragment:信息片断 字符串，用于指定网络资源中的片断。例如一个网页中有多个名词解释，可使用fragment直接定位到某一名词解释。(也称为锚点.)

```js
例:
对于这样一个URL
http://www.maidq.com/index.html?ver=1.0&id=6#imhere
我们可以用javascript获得其中的各个部分
1.
window.location.href
整个URl字符串(在浏览器中就是完整的地址栏)
本例返回值: http://www.maidq.com/index.html?ver=1.0&id=6#imhere
2.
window.location.protocol
URL 的协议部分
本例返回值:http:
3.
window.location.host
URL 的主机部分
本例返回值:www.maidq.com
4.
window.location.port
URL 的端口部分
如果采用默认的80端口(update:即使添加了:80)，那么返回值并不是默认的80而是空字符
本例返回值:""
5.
window.location.pathname
URL 的路径部分(就是文件地址)
本例返回值:/fisker/post/0703/window.location.html
6.
window.location.search
查询(参数)部分
除了给动态语言赋值以外，我们同样可以给静态页面,并使用javascript来获得相信应的参数值
本例返回值:?ver=1.0&id=6
7.
window.location.hash
锚点
本例返回值:#imhere
```





## HTML :pushpin:

### 1.行内元素有哪些？块级元素有哪些？空(void)元素有哪些？

* 首先：CSS规范规定，每个元素都有display属性，确定该元素的类型，每个元素都有默认的display值，如div的display默认值为“block”， 则为“块级”元素；span默认display属性值为“inline”，是“行内”元素。

1. 行内元素：`a b i em del sup sub tt span img input select strong `

   ​					h5新增`bdo abbr q cite code dfn ins`

2. 块级元素：`div ul ol li dl dt dd h1~h6 p address center pre xmp blockquote   `

3. 常见的空元素：`<br> <hr> <img> <input> <link> <meta>`

   鲜为人知的是：`<area> <base> <col> <command> <embed> <keygen> <param> <source> <track> <wbr>`

### 2.src和href各用在哪些标签，区别是什么?

* src 表示来源地址，在 img、script、iframe 等元素上。src 的内容，是页面必不可少的一部分，是引入。 
* href 表示超文本引用（hypertext reference），在 link和a 等元素上使用。href 的内容，是与该页面有关联，是引用。 区别就是，引入和引用。

### 3.说说你对语义化的理解？

1. 去掉或者丢失样式的时候能够让页面呈现出清晰的结构
2. 有利于SEO：和搜索引擎建立良好沟通，有助于爬虫抓取更多的有效信息：爬虫依赖于标签来确定上下文和各个关键字的权重
3. 方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）以意义的方式来渲染网页
4. 便于团队开发和维护，语义化更具可读性，是下一版网页的重要动向，遵循W3C标准的团队都遵循这个标准，可以减少差异化

### 4.Doctype作用? 严格模式与混杂模式如何区分？它们有何意义?

1. 声明位于文档中的最前面，处于标签之前。告知浏览器以何种模式来渲染文档。 
2. 严格模式的排版和 JS 运作模式是以该浏览器支持的最高标准运行。
3. 在混杂模式中，页面以宽松的向后兼容的方式显示。模拟老式浏览器的行为以防止站点无法工作。
4. DOCTYPE不存在或格式不正确会导致文档以混杂模式呈现。

### 5.你知道多少种Doctype文档类型？

1. 该标签可声明三种 DTD 类型，分别表示严格版本、过渡版本以及基于框架的 HTML 文档。
2. HTML 4.01 规定了三种文档类型：Strict、Transitional 以及 Frameset。
3. XHTML 1.0 规定了三种 XML 文档类型：Strict、Transitional 以及 Frameset。
4. Standards（标准）模式（也就是严格呈现模式）用于呈现遵循最新标准的网页，而 Quirks（包容）模式（也就是松散呈现模式或者兼 容模式）用于呈现为传统浏览器而设计的网页。

### 6.HTML与XHTML二者有什么区别

1. 所有的标记都必须要有一个相应的结束标记

2. 所有标签的元素和属性的名字都必须使用小写 

3. 所有的 XML 标记都必须合理嵌套

4. 所有的属性必须用引号 `"" `括起来

5. 把所有 `<` 和 `&` 特殊符号用编码表示 

6. 给所有属性赋一个值 

7. 不要在注释内容中使用 `"--"` 

8. 图片必须有说明文字 

   XHTML是HTML向XML的一个过渡语言，它比HTML严谨性会高点，然后基本语言都还是沿用的HTML的标签，只不过废除了部分表现层的标 签，同时在标准上要求高了点比如标签的严格嵌套，标签结束等等！

## CSS :round_pushpin:

### 1.解决IE图片失真

```css
img { -ms-interpolation-mode: bicubic; }
```

### 2.CSS Hack分类

* `CSS Hack`大致有3种表现形式，CSS属性前缀法、选择器前缀法以及IE条件注释法（即HTML头部引用if IE）Hack，实际项目中`CSS Hack`大部 分是针对IE浏览器不同版本之间的表现差异而引入的。

1. <b>属性前缀法</b>(即类内部Hack)：例如 `IE6能识别下划线"_"和星号" * "，IE7能识别星号" * "，但不能识别下划线"_"，IE6~IE10都认 识"\9"，但firefox前述三个都不能认识`
2. <b>选择器前缀法</b>(即选择器Hack)：例如 `IE6能识别html .class{}，IE7能识别*+html .class{}或者*:first-child+html .class{}`
3. <b>IE条件注释法</b>(即HTML条件注释Hack)：`针对所有IE(注:IE10+已经不再支持条件注释)：IE浏览器显示的内容 ，针对IE6及以下版本。这类Hack不仅对CSS生效，对写在判断语句里面的所有代码都会生效。`

### 3.CSS3新增特性

1. 新增选择器:`nth-child(even)`、`nth-child(odd)`、`:not(.textinput)`、`E:empty`、`E:checked `、`E:enabled` 、`E:disabled`、`E::selection`、`E:not(s)`等； 

2. @Font-face使用服务器字体； 

   ```css
   @font-face {
   	font-family: BorderWeb;
   	src:url(BORDERW0.eot);
   } 
   ```

3. `Word-wrap:break-word;`（字母断行不分开）`Text-overflow:ellipsis(省略号)/clip（简单裁剪）`、文字渲染Text-decoration； 

4. CSS3 的多列布局（`multi-column` `layout`）； 

5. 边框和颜色（支持透明度和圆角） `rgba(255, 0, 0, 0.75)`、`border-radius: 15px;` 

6. CSS3 的水平、径向渐变效果（`gradient`）、文字特效（`text-shadow`）

7. 阴影（`box-shadow`）和反射（Reflect）效果； 

8. 多背景效果； 

9.  `transform:rotate(9deg) scale(0.85,0.90) translate(0px,-30px) skew(-9deg,0deg);`旋转、缩放、定位、倾斜

10. `animation` 动画


### 4.经常遇到的浏览器的兼容性有哪些？原因？解决方法是什么，常用hack的技巧？

1. png24位的图片在iE6浏览器上出现背景

   解决方案：做成PNG8

2. 浏览器默认的margin和padding不同

   解决方案：加一个全局的`*{margin:0;padding:0;}`来统一。 

3. IE6双边距bug:块属性标签float后，又有横行的margin情况下，在ie6显示margin比设置的大。浮动ie产生的双倍距离 `#box{ float:left; width:10px; margin:0 0 0 100px;} `这种情况之下IE会产生20px的距离

   解决方案：在float的标签样式控制中加入 ——`_display:inline;`将其转化为行内属性。(_这个符号只有ie6会识别) 

4. 渐进识别的方式，从总体中逐渐排除局部。 

   首先，巧妙的使用“\9”这一标记，将IE游览器从所有情况中分离出来。 接着，再次使用“+”将IE8和IE7、IE6分离开来，这样IE8已经独立识别。

   ```css
   例如：
    	.bb{
    		background-color:#f1ee18;/*所有识别*/
    		.background-color:#00deff\9; /*IE6、7、8识别*/
    		+background-color:#a200ff;/*IE6、7识别*/
    		_background-color:#1e0bd1;/*IE6识别*/
    	}
   ```

5. IE下,可以使用获取常规属性的方法来获取自定义属性, 也可以使用`getAttribute()`获取自定义属性; Firefox下,只能使用`getAttribute()`获取自定义属性。 

   解决方法：统一通过`getAttribute()`获取自定义属性。

6. IE下,even对象有x,y属性,但是没有`pageX`,`pageY`属性; Firefox下,event对象有`pageX`,`pageY`属性,但是没有x,y属性。 

   解决方法：（条件注释）缺点是在IE浏览器下可能会增加额外的HTTP请求数。 

7. 超链接访问过后hover样式就不出现了 被点击访问过的超链接样式不在具有`hover`和`active`了

   解决方法：改变CSS属性的排列顺序: `L-V-H-A : a:link {} a:visited {} a:hover {} a:active {} `

8. Chrome 中文界面下默认会将小于 `12px` 的文本强制按照 `12px` 显示

   解决方法：可通过加入 CSS 属性 `-webkit-text-size-adjust: none;` 解决。

9. 怪异模式问题：漏写 DTD 声明，Firefox 仍然会按照标准模式来解析网页，但在 IE 中会触发怪异模式。

   解决方法：为避免怪异模式给我们带来不必要的麻烦，最好养成书写 DTD 声明的好习惯。现在可以使用[html5](http://www.w3.org/TR/html5/single-page.html) 推荐的写法：

   ```html
   <!DOCTYPE html> 
   ```

10. 上下`margin`重合问题：`ie`和`ff`都存在，相邻的两个`div`的`margin-left`和`margin-right`不会重合，但是`margin-top`和`margin-bottom`却会 发生重合。 

    解决方法：养成良好的代码编写习惯，同时采用`margin-top`或者同时采用`margin-bottom`

11. `ie6`对`png`图片格式支持不好

    解决方案：引用一段脚本处理 

### 5.CSS里的visibility属性有个collapse属性值是干嘛用的？在不同浏览器下以后什么区别？

::: tip 提示

有一点点长，那也要耐心看完哦！<a href="http://endless.horse/">:candy::egg::学习之路</a>

:::

* 当一个元素的visibility属性被设置成collapse值后，对于一般的元素，它的表现跟hidden是一样的。但例外的是，如果这个元素是table 相关的元素，例如table行，table group，table列，table column group，它的表现却跟display: none一样，也就是说，它们占用的空间 也会释放。 在谷歌浏览器里，使用collapse值和使用hidden值没有什么区别。 在火狐浏览器、Opera和IE11里，使用collapse值的效果就如它的字面意思：table的行会消失，它的下面一行会补充它的位置。

### 6.CSS优化、提高性能的方法有哪些？

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

### 7.浏览器是怎样解析CSS选择器的？

浏览器对选择器的解析规则是从右到左解析的，比如`.box .left p`,会在页面中找到所有的`p标签`，然后在`p标签`中找其父元素有`.left类`的`p元素`，再找祖父元素有`.box`的`p标签`。

### 8.在网页中应该使用奇数还是偶数的字体？为什么呢？

* 偶数字号相对更容易和 web 设计的其他部分构成比例关系。比如：当我用了 14 px 的正文字号，我可能会在一些地方用 14 × 0.5 = 7 px 的 margin，在另一些地方用 14 × 1.5 = 21 px 的标题字号。

### 9.margin和padding分别适合什么场景使用？

```css
margin:
     需要在border外侧添加空白时；
     空白处不需要背景（色）时；
     上下相连的两个盒子之间的空白，需要相互抵消时。
padding：
    需要在border内测添加空白时；
    空白处需要背景（色）时；
    上下相连的两个盒子之间的空白，希望等于两者之和时。
```

### 10.抽离样式模块怎么写，说出思路，有无实践经验？[阿里航旅的面试题]

> 长工在寻找答案的路上

### 11.元素竖向的百分比设定是相对于容器的高度吗？

我们大家都知道，当按百分比设定一个元素的宽度时，它是相对于父容器的宽度计算的，但是，对于一些表示竖向距离的属性，例如 `padding-top` , `padding-bottom` , `margin-top` , `margin-bottom` 等，当按百分比设定它们时，依据的也是父容器的宽度，而不是高度。

> 下面是示例，不信？试试？实践出真知。

```html
<!--html-->
	  <div class="wrapper lazy " id="w">
        <div class="box lazy " id="b"></div>
      </div>
      
      <input type="range" min="120" max="400" value="400" class="range lazy " id="r">
      <output>宽度是: <span id="op">400px</span></output>
      <output>黄块块的Padding bottom是:<br><span id="op2">10%</span></output>
```

```css
/*css*/
body {
  font-family: Arial, sans-serif;
  padding-top: 30px;
  text-align: center;
}

.wrapper {
  width: 400px;
  margin: 0 auto;
  border: solid 1px black;
}

.box {
  width: 100px;
  height: 100px;
  background: gold;
  margin-left: auto;
  margin-right: auto;
  padding-top: 10%;
  padding-bottom: 10%;
  margin-bottom: 5%;
}

.range {
  display: block;
  margin: 20px auto;
}

output {
  text-align: center;
  display: block;
  font-weight: bold;
  padding-bottom: 20px;
}

output span {
  font-weight: normal;
}
```

```js
//js
var cw = document.getElementById('w'),
    r = document.getElementById('r'),
    b = document.getElementById('b'),
    op = document.getElementById('op'),
    op2 = document.getElementById('op2');

r.onchange = function () {
  cw.style.width = this.value + 'px';
  op.innerHTML = this.value + 'px';
  op2.innerHTML = window.getComputedStyle(b, null).getPropertyValue('padding-top');
};
```

> 对于竖直方向的margin和padding，参照父元素的宽度。
>
> 对于水平方向的margin和padding，也是参照父元素的宽度。

### 12.全屏滚动的原理是什么？用到了CSS的那些属性？

全屏滚动的原理就是每次滚动滚轮，屏幕移动的距离就刚好是一个屏幕的距离，利用css的高度百分比实现这个效果，因为设定百分比的值是需要更具父元素设置的所以需要给html，body都设置为高度百分百，然后一层一层的设置，用js控制鼠标滚轮事件。