# 基础面试题's brother(part4)

### 1.JS地址栏获取参数的方法

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

### 2.使用SVG画一个圆形的进度条

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

### 3.解释下浮动和它的工作原理？清除浮动的技巧

* 浮动元素脱离文档流，不占据空间。浮动元素碰到包含它的边框或者浮动元素的边框停留。

1.  使用空标签清除浮动

   这种方法是在所有浮动标签后面添加一个空标签 定义css `clear:both`. 弊端就是增加了无意义标签。

2.  使用`overflow`

   给包含浮动元素的父标签添加css属性 `overflow:auto; zoom:1; `//zoom:1用于兼容IE6

3. 使用after伪对象清除浮动。

   该方法只适用于非IE浏览器。具体写法可参照以下示例。使用中需注意该方法中必须为需要清除浮动元素的伪对象中设置 height:0，否则 该元素会比实际高出若干像素；

### 4.浮动元素引起的问题和解决办法？

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

### 5.清除浮动的几种方法

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

### 6.为什么使用严格模式

1. 消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为
2. 除代码运行的一些不安全之处，保证代码运行的安全
3. 提高编译器效率，增加运行速度
4. 为未来新版本的Javascript做好铺垫。
5. "严格模式"体现了Javascript更合理、更安全、更严谨的发展方向，包括IE 10在内的主流浏览器，都已经支持它，许多大项目已经开始全 面拥抱它
6. 另一方面，同样的代码，在"严格模式"中，可能会有不一样的运行结果；一些在"正常模式"下可以运行的语句，在"严格模式"下将不能运 行。掌握这些内容，有助于更细致深入地理解Javascript，让你变成一个更好的程序员。

### 7.href="#"与href="javascript:void(0)"的区别

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

### 8.DOM操作——怎样添加、移除、移动、复制、创建和查找节点

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

### 9.html5有哪些新特性、移除了那些元素？如何处理HTML5新标签的浏览器兼容问题？如何区分 HTML 和 HTML5？

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















