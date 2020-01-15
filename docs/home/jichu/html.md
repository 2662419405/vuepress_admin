

# html笔记文档

## 1. 网页设计简介

+ 网站是位于一个存放网络服务器上的完整信息的集合体。它包含一个或多个网页，这些网页以一定的方式连接在一起，成为一个整体，用来描述一组完整的信息或达到某种期望的宣传效果。

+ 网页时网站的组成部分，制作者可以将需要公布的信息按照一定的方式分类，放在每一个网页上，网页里有文字、图像、声音及视频信息等。网页可以看成是一个单独体，是网站的一个元素。

+ 首页，也称之为主页，是一个单独的网页，和一般网页一样，可以存放各种信息，同时又是一个特殊的网页，作为整个网站的起始点和汇总点，是浏览者访问一个网站的第一个网站。

+ 网站 index（html、css、js、img）站点 服务器 域名/ip

+ 标签：方便浏览器解析。

## 2. Html基础介绍：

- www（万维网 world wide web）是一个基于超文本方式的信息检索服务工具。

+ www获得成功在于它制定了一套标准的、易于人们掌握的超文本开发语言HTML、信息

+ html4.0：超文本标记语言，是构成WEB页面的重要工具，让浏览器解析的，主要用于pc端，

  h5主要用于移动端，xml:可扩展标记语言，xhtml0：超文本可扩展标记语言。

+ 静态页面：只能浏览，不能交互，可以不上传到服务器。动态页面：相反

+ 在html只有两种元素：html标记，另一种是文本

+ head里包括title（标题）link（引入css）、meta是单标记,里面有两个属性name、http-equiv、content用来解析前两个属性、style（写css）、script（js），key（属性）=value

+ meta:name：主要用于描述页面 keywords：关键字http-equiv：主要用于和服务器相关信息

  refresh：刷新 五秒自动跳转 content 

+ url（统一资源定位符）:整个网址

+ uri（统一资源标识符）：除了http都是，包含主机名，路径，端口，文件名，域名。

+ http：默认端口是80可省略，http，ftp，smtp：邮件传输协议      这些都是协议

+ 网站运行三要素：服务器、站点、域名/ip

+ 三层：html 负责描绘出内容的结构（结构层）、css负责“如何显示有关内容”（表现层）、js负责“内容应如何对事件做出反应”（行为层）  html  url（uri）http html s xml xhtml

+ Html的三种类型：严谨型、过渡型、框架型

+ Doctype是一种文档类型，告诉浏览器怎样解析。

## 3. 文字与段落

+ bgcolor（背景颜色）：body后空格加bgcolor=“颜色”
+ backGround(背景图片)：body后空格加background=“../img/文件名”
+ text（正文文字颜色）：body后空格加text=“颜色”
+ link(链接文字颜色）
+ alink( 活动链接颜色）
+ vlink(已访问链接文本颜色）
+ leftmargin(页面左面边距）
+ topmargin(页面上面边距)

```html
<h align="left/center/right"></h>
```

​	对齐 左 中 右 h标记是段落标记 自己单独占一行

```html
<font face="字体" size="大小1-7 默认3号字" color="颜色"></font>
```

+ <h></h>:当标记嵌套不冲突的情况下全显示 冲突谁离得近谁显示

**特殊字符:**

```html
&nbsp;	<!--空格-->
&copy;	<!--版权信息-->
&gt;	<!--大于号-->
&lt;	<!--小于号-->
&reg;	<!--注册商标-->
```

**标记**

``` html
<b>粗体</b>	<strong>粗体</strong>	<!--行内标记-->
<i>斜体</i>	<em>斜体</em>	<!--行内标记-->
<u>下划线</u>	<!--行内标记-->
<del>删除线</del>	<!--行内标记-->
<sup>上标</sup>	<!--行内标记-->
<sub>下标</sub>	<!--行内标记-->
<tt>等宽文字</tt>	<!--行内标记-->
<br>	<!--换行标记 行内标记-->
<span></span>	<!--行内标记-->
<center>居中</center>	<!--块级标记-->
<address>地址</address>	<!--块级标记-->
<p>段落，p会空一行，/p也空一行 </p>	<!--块级标记-->
<div></div>	<!--块级标记-->
<pre>预格式化</pre>	<!--块级标记-->
<xmp>忽略html标记 </xmp>	<!--块级标记-->	
<blockquote>段落缩进</blockquote>	<!--块级标记-->	
<hr width="宽度"size"粗细"color="颜色" noshade是否有阴影>	<!--分割线 块级标记-->
```

## 4. 列表

**无序列表:**

``` html
<ul type="disc（实心圆 默认的）\circle（空心圆）\square(方块)"> <!--块级标记-->
 	​    <li>第一项</li>
	​    <li>第二项</li>
	​    <li>第三项</li>
</ul>
<!--（type <ul> 跟<li>都可以加）-->
```

**有序列表:**

```html
<ol type="1(默认)\a\A\i\I"  start="3"(起始的位数，只能放在ol里)>	<!--块级标记-->
​    <li>第一项</li>
​    <li>第二项</li>
​    <li>第三项</li>
</ol>
```

**定义列表**:

```html
<dl>	<!--块级标记-->
​    <dt>定义的词</dt>
​       <dd>解释的词</dd>
</dl>
```

**目录列表:**

```html
<dir>	<!--块级标记-->
​    <li>第一项</li>
​    <li>第二项</li>
​    <li>第三项</li>
</dir>
```

菜单列表:

```html
<menu>（块级标记）
​    <li>第一项</li>
​    <li>第二项</li>
​    <li>第三项</li>
</menu>
```

## 5. 超链接

链接路径分四种：

+ 绝对路径：从站点开始web58/img/1.jpg

+ 相对路径: ../img/1.jpg

+ 物理路径：从磁盘开始:e:/web58/img/1.jpg

+ 根路径:  从主机名开始

```html
<a href="url资源地址/不跳转就是#" title="指向链接显示的文字 taget="窗口名称"> </a>	<!--行内标记-->
```

​	默认颜色蓝色，点击变红色，点完以后再回来看紫色。

邮件链接

```html
<a href=”mailto:E-mail地址?subject=邮件主题”>描述文件</a>
```

​	Cc=E-mail地址  ---抄送人

​	Bcc=E-mail地址 ---暗送收件人

​	Body=邮件内容（里面用&中间连接）

图片链接

```html
<a href="url" target=_blank><img src="url"></a>
```

下载链接

```html
<a href="url" target=_blank>链接内容</a>
```

Target有以下四种属性：

+ _Blank:在新窗口中打开链接

+ _Self：在本窗口打开链接（默认）

+ _parent：在父框架集中打开被链接文档

+ _top：在顶级窗口中打开被链接文档

书签链接

```html
<a href="#top">第一章</a>
```

创建书签链接

```html
<a name="top"></a>
```

## 6. 表格

``` html
<table>	<!--表格-->
    <tr>	<!--行-->
        <td></td>	<!--列-->
    </tr>
</table>
```

+ 表头：th（里面的文字默认都是居中加粗，是一个特殊的单元格，可以替代td）

```html
<caption>表格标题</caption><!--在table后c面直接写 不用嵌套  居中显示-->
```

属性：

+ Align:定义网页中表格的位置

+ Border：定义表格边距的粗细n取整值，单位是像素

+ Width：定义表格的宽度

+ Height：定义表格的高度

+ Bgcolor：背景颜色 

+ Background：背景图  

+ Bordercolor：边界颜色  

  也可以用%.......设置表格的大小，根据body %100就是整个页面的大小

+ Align=center：给文字居中

+ 背景颜色与背景图片可以单元格自己变，边框颜色不可以 

```html
<td colspan="n"></td><!--跨列合并-->
```

+ n表示跨几列合并

+ rowspan：跨行合并

+ 水平：align=center left  right

+ 垂直：valign=top  bottom  middle

  (都不可以写在table里)

+ Cellspacing（单元格之间的距离）

+ Cellpadding（内容与边框之间的距离）

## 7. 多媒体

```html
<img src=”相对路径”></img>
```

+ gif jpeg png  支持三种图片格式

+ width 宽度

+ height 高度

+ hspace图片左侧和右侧的空白

+ vspace 图像顶部和底部的空白

```html
<img src=”url” align=”位置”>             
```

+ align 图片的对齐方式

+ 相对于文字的位置：

  left 左

  right 右

  top 上

  middle 中

  bottom 底部

+ border  图片边框的大小

+ alt 图片无法显示时候显示的文字

+ title 鼠标划入图片显示的文字.

+ src和href的区别：

  src会直接加载；不管什么时候用都会加载

  href建立链接；什么时候用，什么时候加载

+ 高版本浏览器没有边框，低版本浏览器有边框，为了解决兼容性问题，所以我们手动将boder直接设置成0。

```html
<marquee></marquee><!--插入滚动图片文字-->
```

+ Behavior(设置滚动方式)：srcoll循环滚动(默认) 。 slide滚动一次停止   alternate 来回交替滚动

+ Direction（设置文字的滚动方向）left（默认）  right  up  down

+ Bgcolor(背景颜色)

+ Width和height(设置滚动背景的宽高)  数字  百分比

+ Hspace和vspace(滚动文字背景和周围其他元素的空间间距)  数字

+ Loop 循环次数

+ Scrollamount(设置文字滚动的距离)

+ Scrolldelay(设置滚动一下间歇地时间)  数字 默认单位ms

+ Onmouseover=“this.stop()“(鼠标放在上面停止)  onmouseout=”this.start()”（鼠标离开图片继续滚动）

```html
<Bgsound src=“url“ loop(循环次数)=””></bgsound><!--背景音乐-->
<embed src=”url” width\height\autostart(是否自动播放)\type(播放类型)\loop\>
```

## 8. 框架

+ 结构里有frameset不能使用body！！！！！！！！！！！！！！！！！！！！！！！！！！！！

+ 框架可以将浏览器分割成多个小窗口，并且可以在小窗口中显示多个不同的网页

```html
<Html>
<head>
<title></title>
</head>
 <frameset rows/clos=”高度1，高度2…”><!--(rows为上下分割页面 clos为左右分割页面 高度为百分数  也可以像素  *可以代表不知道剩下的像素多少   下面有几个网页这里就需要几个值)-->
<frame src="网页路径"></frame>
<frame src="网页路径">
​    <frameset rows="">
​       <frame src="url"></frame>
</frameset><!--(嵌套在frame里)-->
</frame>
<frame src="网页路径"></frame>
</frameset>
</html>
<frameset Border="n"><!--边框粗细-->
<frameset Frameborder="0或1"><!--边框显示或者隐藏-->
<frameset noresize><!--不允许边框拖动，固定位置-->
<frameset name="子窗口名称">
```

+ 浮动框架：

  可以放在body里面:

``` html
<iframe src=”url”>
<frameset marginwidth="数值”（左右）  marginheight="数值”（上下）><!--框架与内容的距离-->
<frameset Scrolling="yes或者no或者auto"><!--(右侧滚动条是否显示 还是自动)-->
```

## 9. 表单

+ 表单就是把输入的信息传递给服务器的东西

``` html
<form>中间就是表单</form>
<form name="afasd" action="javascript:;”(不提交数据) method="post">中间就是表单</form>
```

+ Form属性：name=”名称”action=”提交的路径/#” 

+ method=”表单的提交方式：get/post默认为get” 

+ get和post的区别：

  get：明文提交，会在地址栏显示；提交数据较长的时候是无法提交的；get提交一次

  post：密文提交，不会在地址栏显示；数据长短无所谓；post会提交两次

```html
<input><!--（是一个单标记，嵌套在表单标记中）-->
```

+ 属性：name=”名字”type=”text,submit,reset,password,checkbox,radio,image,hidden,file”

+ Text：单行文本输入框 maxlength(最大长度)<input name=”text” type=”text“ maxlength=”9” （输入文本长度） size=”125”（文本框长度） value=”好好学习天天向上”（输入框显示的内容）

+ Password:密码框（行内元素）

  ```html
  <input name="sad" type="password">
  ```

+ Radio：(单选按钮)

  ```html
  <input name="sex" type="radio" value="" checked>男<input name="sex" type="radio">
  <!--女名字一样可以实现单选  checked网页打开开始时就被选中-->
  ```

+ Checkbox:复选框

  ```html
  <input name="sdsd" type="checkbox" value="">
  ```

+ File:文件选择输入

  ```html
  <input type="file" name="file" value="上传文件">
  ```

+ Submit：提交按钮

  ```html
   <input type="submit" value="登录">
  ```

+ Reset：重置按钮;恢复浏览器默认状态

  ```html
  <input type="reset" value="清空">
  ```

+ Image:图片按钮 

  ```html
  <input type="image" src="图片路径" name="image">
  ```

+ Hidden：隐藏框

+ Button：纯按钮 Disabled 灰的点击不了

  ```html
  <button type="submit/reset" disabled></button>
  ```

+ textarea：多行文本输入框

  ``` html
  <textarea name=”文本框名字” cols=”内容列数” rows=”内容行数”rwap=”要不要自动换行”></textarea>
  ```

+ Select(下拉列表框)

  ``` html
  <form>
      <select name="">
           <option>请选择</option>
  		<option value=”北京” selected（默认选中）>北京</option>
  		<option value="杭州">杭州</option>
  	</select>
  </form>
  ```

+ label:用来嵌套前面的文字

  ``` html
  <label for="pwd">用户名</label>
  ```

  for名字与后面input里加id名字一样，点击前面的字体后面自动获得焦点

