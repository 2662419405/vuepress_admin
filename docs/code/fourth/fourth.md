# 基础面试题's brother(part4)

## 1.JS地址栏获取参数的方法

```js
方法一：采用正则表达式获取地址栏参数：（ 强烈推荐，既实用又方便！）
function GetQueryString(name){
 var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
 var r = window.location.search.substr(1).match(reg);
 if(r!=null)
 return unescape(r[2]);
 return null;
}
// 调用方法
alert(GetQueryString("参数名1"));
alert(GetQueryString("参数名2"));
alert(GetQueryString("参数名3"));
下面举一个例子:
若地址栏URL为：abc.html?id=123&url=http://www.maidq.com
那么，但你用上面的方法去调用：alert(GetQueryString("url"));
则会弹出一个对话框：内容就是 http://www.maidq.com
如果用：alert(GetQueryString("id"));那么弹出的内容就是 123 啦；
当然如果你没有传参数的话，比如你的地址是 abc.html 后面没有参数，那强行输出调用结果有的时候会报错：
所以我们要加一个判断 ，判断我们请求的参数是否为空，首先把值赋给一个变量：
var myurl=GetQueryString("url");
if(myurl !=null && myurl.toString().length>1){
 alert(GetQueryString("url"));
}
这样就不会报错了！
```

```html
方法二：传统方法
<script type="text/javascript">
function UrlSearch() {
 var name,value;
 var str=location.href; //取得整个地址栏
 var num=str.indexOf("?")
 str=str.substr(num+1); //取得所有参数 stringvar.substr(start [, length ]
 var arr=str.split("&"); //各个参数放到数组里
 for(var i=0;i < arr.length;i++){
 num=arr[i].indexOf("=");
 if(num>0){
 name=arr[i].substring(0,num);
 value=arr[i].substr(num+1);
 this[name]=value;
 }
 }
}
var Request=new UrlSearch(); //实例化
alert(Request.id);
</script>
比如说把这个代码存为1.html
那么我要访问1.html?id=test
这个时候就取到test的值了


在html里调用
<script type="text/javascript">
var a="http://baidu.com";
</script>
</head>
<body>
<a id="a1" href="">sadfsdfas</a>
<script>
var a1=document.getElementById("a1");
a1.href=a;
</script>
<script type="text/javascript">
var a="http://xxx.com/gg.htm?cctv";
var s=a.indexOf("?");
var t=a.substring(s+1);// t就是?后面的东西了
</script>
```

```css
stringvar.substr(start [, length ]
返回一个从指定位置开始的指定长度的子字符串。
stringvar
必选项。要提取子字符串的字符串文字或 String 对象。
start
必选项。所需的子字符串的起始位置。字符串中的第一个字符的索引为 0。
length
可选项。在返回的子字符串中应包括的字符个数。
如果 length 为 0 或负数，将返回一个空字符串。如果没有指定该参数，则子字符串将延续到 stringvar 的最后。

下面列举出一些相关的参数：
str.toLowerCase() 转换成小写
str.toUpperCase() 字符串全部转换成大写
```

## 2.使用SVG画一个圆形的进度条

```html
<!doctype html>
<html>
<head>
     <meta charset="UTF-8">
     <title>HTML5自由者</title>
     <style>
          #svgForStroke {
               position: absolute;
              top: 0;
              left: 0;
              width: 200px;
              height: 200px;
              stroke-dasharray: 180%;
              stroke-dashoffset: 0%;
              stroke: #ED6E5C;
               /*stroke-linecap:round;*/
              fill: none;
              -webkit-transform: rotate(-90deg);
              -moz-transform: rotate(-90deg);
              -ms-transform: rotate(-90deg);
              -o-transform: rotate(-90deg);
              transform: rotate(-90deg);
          }
         
     </style>
</head>
<body>
     <svg id="svgForStroke" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50%" cy="50%" r="30%" stroke-width="10%"></circle>
     </svg>
     <script></script>
</body>
</html>
```

## 3.解释下浮动和它的工作原理？清除浮动的技巧

* 浮动元素脱离文档流，不占据空间。浮动元素碰到包含它的边框或者浮动元素的边框停留。

1.  使用空标签清除浮动

   这种方法是在所有浮动标签后面添加一个空标签 定义css `clear:both`. 弊端就是增加了无意义标签。

2.  使用`overflow`

   给包含浮动元素的父标签添加css属性 `overflow:auto; zoom:1; `//zoom:1用于兼容IE6

3. 使用after伪对象清除浮动。

   该方法只适用于非IE浏览器。具体写法可参照以下示例。使用中需注意该方法中必须为需要清除浮动元素的伪对象中设置 height:0，否则 该元素会比实际高出若干像素；

## 4.浮动元素引起的问题和解决办法？

```
引起的问题：
1. 父元素的高度无法被撑开，影响与父元素同级的元素
2. 与浮动元素同级的非浮动元素会跟随其后
3. 若非第一个元素浮动，则该元素之前的元素也需要浮动，否则会影响页面显示的结构 
```

```css
解决方法：
使用CSS中的clear:both;属性来清除元素的浮动可解决2、3问题，对于问题1，添加如下样式，给父元素添加clearfix样式：
.clearfix:after{content: ".";display: block;height: 0;clear: both;visibility: hidden;}
.clearfix{display: inline-block;} /* for IE/Mac */
```

## 5.清除浮动的几种方法

1.  额外标签法 `<div style="clear:both;"></div>`（缺点：不过这个办法会增加额外的标签使HTML结构看起来不够简洁。）

2. 使用after伪元素 

   ```css
   #parent:after{
       content:".";
       height:0;
       visibility:hidden;
       display:block;
       clear:both;
   } 
   ```

3. 浮动外部元素

4. 设置`overflow`为`hidden`或者`auto`

5. 给父元素添加高度

6. BFC(块级元素上下文) 父元素在计算高度的时候,会把浮动的子元素的高度计算进去

## 6.为什么使用严格模式

1. 消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为
2. 除代码运行的一些不安全之处，保证代码运行的安全
3. 提高编译器效率，增加运行速度
4. 为未来新版本的Javascript做好铺垫。
5. "严格模式"体现了Javascript更合理、更安全、更严谨的发展方向，包括IE 10在内的主流浏览器，都已经支持它，许多大项目已经开始全 面拥抱它
6. 另一方面，同样的代码，在"严格模式"中，可能会有不一样的运行结果；一些在"正常模式"下可以运行的语句，在"严格模式"下将不能运 行。掌握这些内容，有助于更细致深入地理解Javascript，让你变成一个更好的程序员。

## 7.href="#"与href="javascript:void(0)"的区别

```css
# 包含了一个位置信息，默认的锚是#top 也就是网页的上端。
而javascript:void(0), 仅仅表示一个死链接。
在页面很长的时候会使用 # 来定位页面的具体位置，格式为：# + id
如果你要定义一个死链接请使用 javascript:void(0)。

实例：
<a href="javascript:void(0);">点我没有反应的!</a>
<a href="#pos">点我定位到指定位置!</a>
<br>
...
<br>
<p id="pos">尾部定位点</p>
```

## 8.DOM操作——怎样添加、移除、移动、复制、创建和查找节点

```js
1.创建新节点
createDocumentFragment() // 创建一个DOM片段
createElement() // 创建一个具体的元素
createTextNode() // 创建一个文本节点
```

```js
2.添加、移除、替换、插入
appendChild()
removeChild()
replaceChild()
insertBefore() // 在已有的子节点前插入一个新的子节点
```

```js
3.查找
getElementsByTagName() // 通过标签名称
getElementsByName() // 通过元素的Name属性的值(IE容错能力较强，会得到一个数组，其中包括id等于name值的)
getElementById() // 通过元素Id，唯一性
```

## 9.html5有哪些新特性、移除了那些元素？如何处理HTML5新标签的浏览器兼容问题？如何区分 HTML 和 HTML5？

```html
新特性：
HTML5 现在已经不是 SGML 的子集，主要是关于图像，位置，存储，多任务等功能的增加。
1. 拖拽释放(Drag and drop) API
2. 语义化更好的内容标签（header,nav,footer,aside,article,section）
3. 音频、视频API(audio,video)
4. 画布(Canvas) API
5. 地理(Geolocation) API
6. 本地离线存储 localStorage 长期存储数据，浏览器关闭后数据不丢失；
7. sessionStorage 的数据在浏览器关闭后自动删除
8. 表单控件，calendar、date、time、email、url、search
9. 新的技术webworker, websocket, Geolocation
```

```html
移除的元素：
1. 纯表现的元素：basefont，big，center，font, s，strike，tt，u；
2. 对可用性产生负面影响的元素：frame，frameset，noframes；
```

```html
支持HTML5新标签：
1. IE8/IE7/IE6支持通过 document.createElement 方法产生的标签，可以利用这一特性让这些浏览器支持 HTML5 新标签，浏览器支持新
标签后，还需要添加标签默认的样式（当然最好的方式是直接使用成熟的框架、使用最多的是html5shiv框架）：
<!--[if lt IE 9]>
<script> src="http://html5shiv.googlecode.com/svn/trunk/html5.js"</script>
<![endif]--> 
```

```html
如何区分：
DOCTYPE声明新增的结构元素、功能元素 
```

## 10.iframe的优缺点？

```html
优点：
1. 解决加载缓慢的第三方内容如图标和广告等的加载问题
2. Security sandbox
3. 并行加载脚本
```

```html
缺点：
1. iframe会阻塞主页面的Onload事件
2. 即时内容为空，加载也需要时间
3. 没有语意
4. 影响页面的并行加载
（并行加载：同一时间针对同一域名下的请求。一般情况，iframe和所在页面在同一个域下面，而浏览器的并加载的数量是有限制的）
```

```html
解决办法：
使用js动态给iframe的src加载页面内容，示例代码如下：
<iframe id="fram"></iframe>
document.getelementbyid("fram").src="a2.html" 
```

## 11.如何实现浏览器内多个标签页之间的通信?

* 调用 localstorage、cookies 等本地存储方式

```js
1.使用localStorage.setItem(key,value);添加内容
使用storage事件监听添加、修改、删除的动作
window.addEventListener("storage",function(event){
 $("#name").val(event.key+”=”+event.newValue);
}); 
```

```js
2.使用cookie+setInterval
HTML代码
<input id ="name"><input type="button" id="btnOK"value="发送">
JS代码-页面1
$(function(){
 $("#btnOK").click(function(){
 var name=$("#name").val();
 document.cookie="name=" + name;
 });
 });
JS代码-页面2
//获取Cookie天的内容
function getKey(key) {
 return JSON.parse("{\""+ document.cookie.replace(/;\s+/gim,"\",\"").replace(/=/gim, "\":\"") +"\"}")[key];
}
//每隔1秒获取Cookie的内容
setInterval(function(){
 console.log(getKey("name"));
},1000); 
```

## 12. ::before 和:before有什么区别？

* 相同点：

1. 都可以用来表示伪类对象，用来设置对象前的内容 
2. `:before`和`::before`写法是等效的

* 不同点

1. `:before`是Css2的写法，`::before`是Css3的写法 
2. `:before`的兼容性要比`::before`好，不过在H5开发中建议使用`::before`比较好

* 加分项

1. 伪类对象要配合`content`属性一起使用
2. 伪类对象不会出现在DOM中，所以不能通过js来操作，仅仅是在 CSS 渲染层加入
3. 伪类对象的特效通常要使用`:hover`伪类样式来激活

```css
.test:hover::before { /* 这时animation和transition才生效 */ } 
```

## 13.千位分隔符代码

```html
<span style="font-size:14px;">
function format (num) {
 var reg=/\d{1,3}(?=(\d{3})+$)/g;
 return (num + '').replace(reg, '$&,');
}
</span> 
```

## 14.JavaScript window.onload 事件和 jQuery ready 函数有何不同？

1. `JavaScript window.onload`事件和`jQuery ready`函数之间的主要区别是，前者除了要等待 DOM 被创建还要等到包括大型图片、音频、视频在内的所有外部资源都完全加载。如果加载图片和媒体内容花费了大量时间，用户就会感受到定义在`window.onload`事件上的代码在
   执行时有明显的延迟。
2. 另一方面，`jQuery ready()`函数只需对 DOM 树的等待，而无需对图像或外部资源加载的等待，从而执行起来更快。使用 jQuery`$(document).ready()` 的另一个优势是你可以在网页里多次使用它，浏览器会按它们在 HTML 页面里出现的顺序执行它们，相反对于onload 技术而言，只能在单一函数里使用。鉴于这个好处，用 `jQuery ready() `函数比用 `JavaScript` `window.onload`事件要更好些。

## 15.如何找到所有 HTML select 标签的选中项？

* 这是面试里比较棘手的`jQuery`问题之一。这是个基础的问题，但是别期望每个`jQuery `初学者都知道它。
* 你能用下面的 jQuery 选择器获 取所有具备`multiple=true`的  标签的选中项： `$('[name=NameOfSelectedTag] :selected')`这段代码结合使用了属性选择器和`:selected`选择器，结果只返回被选中的选项。你可按需修改它，比如用`id`属性而不是`name`属性来获取标签。

## 16.jQuery 里的 each() 是什么函数？你是如何使用它的？

* 它允许你遍历一个元素集合。你可以传一个函数给`each()`方法，被调用的`jQuery`对象会在其每个元素上执行传入的函数。有时这个问题会紧接着上面一个问题，

* 举个例子，如何在`alert`框里显示所有选中项。我们可以用上面 的选择器代码找出所有选中项，然后我们在`alert`框中用`each()`方法来一个个打印它们，代码如下： 

  ```js
  $('[name=NameOfSelectedTag] :selected').each(function(selected){ alert($(selected).text()); 
  });//其中 text() 方法返回选项的文本。
  ```

## 17.你是如何将一个 HTML 元素添加到 DOM 树中的？

* 你可以用`jQuery`方法`appendTo()`将一个 HTML 元素添加到 DOM 树中。这是`jQuery`提供的众多操控 DOM 的方法中的一个。你可以通过`appendTo()`方法在指定的 DOM 元素末尾添加一个现存的元素或者一个新的HTML元素。

## 18.$(this) 和 this 关键字在 jQuery 中有何不同？

* `$(this)` 返回一个` jQuery` 对象，你可以对它调用多个 `jQuery` 方法，比如用 `text() `获取文本，用`val()` 获取值等等。而 `this` 代表当前元素，它是` JavaScript` 关键词中的一个，表示上下文中的当前 DOM 元素。你不能对它调用` jQuery `方法，直到它被 `$() `函数包裹，例如 `$(this)`。

## 19.使用 CDN 加载 jQuery 库的主要优势是什么 ?

* 除了报错节省服务器带宽以及更快的下载速度这许多的好处之外
* 最重要的是，如果浏览器已 经从同一个`CDN`下载类相同的 `jQuery `版本, 那么它就不会再去下载它一次. 因此今时今日，许多公共的网站都将`jQuery`用于用户交互和动 画, 如果浏览器已经有了下载好的`jQuery`库，网站就能有非常好的展示机会。

## 20.jQuery.get() 和 jQuery.ajax() 方法之间的区别是什么?

* `ajax()` 方法更强大，更具可配置性, 让你可以指定等待多久，以及如何处理错误。`get() `方法是一个只获取一些数据的专门化方法。



















