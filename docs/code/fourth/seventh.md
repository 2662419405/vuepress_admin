# 基础面试题's brother(part7)

## 1.doctype在严格模式下和混杂模式有什么区别?

先来说doctype的作用是什么？

* ```<!DOCTYPE>声明叫做文件类型定义（DTD），声明的作用为了告诉浏览器该文件的类型。让浏览器解析器知道应该用哪个规范来解析文档。<!DOCTYPE>声明必须在 HTML 文档的第一行，这并不是一个 HTML 标签。```

* **严格模式：**又称标准模式，是指浏览器按照 W3C 标准解析代码。
* **混杂模式：**又称怪异模式或兼容模式，是指浏览器用自己的方式解析代码。

区别：

* 浏览器解析时到底使用严格模式还是混杂模式，与网页中的 DTD 直接相关。简单来讲就是看文档中是否有`<!DOCTYPE>`

## 2.行内元素和块级元素和空元素？

* 块级：address(联系方式信息), blockquoke, form， article(文章内容), aside(伴随内容)， audio(音频播放), blockquote(块引用 ), canvas(绘制图像), dd, div，dl, video, ul, tfoot, table, section(一个页面区段), pre(预格式化文本),p,output,ol,noscript(不支持脚本或禁用脚本时显示的内容), hr(水平分割线), hgroup(标题组), header(区段头或页头), h1...h6 , form, footer
* 行内：a、b、span、img、input、strong、select、label、em、button、textarea
* 空元素：br、meta、hr、link、input、img

> 延伸:
>
> 空元素的特点:
>
> 没有内容的 HTML 内容被称为空元素。空元素是在开始标签中关闭的。
> `<br />` 就是没有关闭标签的空元素（`<br />` 标签定义换行）。

## 3.页面导入时使用link和@important有什么区别?

1. link属于XHTML标签，而@import是CSS提供的
2. 页面被加载的时候，link会同时被加载，而@import引用的CSS会等到页面被加载完再加载
3. import只有在IE5以上才能被识别，有兼容性问题。而link是XHTML标签，无兼容问题
4. link方式的样式的权重>@import的权重

## 4.常见的浏览器内核有哪些？怎么样理解？

* Trident：IE,360,搜狗
* Gecko：Firefox
* Presto：Opera
* Webkit：Chrome,Safari

对浏览器内核的理解：

* 主要分为两个部分：渲染引擎和JS引擎
* 渲染引擎：负责取得网页的内容(html,xml和图像等)，整理讯息(例如css)，以及计算网页的显示方式，然后输出到显示器或打印机。浏览器的内核的不同对于网页的语法解释会有不同，所以渲染的效果也不同。所有网页浏览器、电子邮件客户端以及它需要的编辑、显示网络内容的应用程序都需要内核。
* JS引擎：解析和指向JavaScript来实现网页的动态效果。

> 最开始渲染引擎和JS引擎并没有区分的很明确，后来JS引擎越来越独立，内核就倾向于只指渲染引擎。

## 5.H5新增的特性，移除了哪些属性？

* 新增特性：canvas绘图，跨文本消息传递，地理位置，本地存储，本地数据库
* 新增标记：header,section,article,footer,audio,video,source,canvas
* 废弃的标记：center,font,big,bgsound,marquee,frame

> 更多参见：[乔梦诗的博客](https://www.cnblogs.com/mengshi-web/p/9373097.html)

## 6.如何处理H5语义化标签的兼容性处理？

* 先总结一下H5中的新增的语义化标签

```
1、<header></header> 页眉：主要用于页面的头部的信息介绍，也可用于板块头部；

2、<hgroup></hgroup> 页面上的一个标题组合：一个标题和一个子标题，或者标语的组合；

3、<nav></nav> 导航：包含链接的一个列表；

4、<section> <section> 页面上的版块：用于划分页面上的不同区域,或者划分文章里不同的节；

5、<article></ article > 用来在页面中表示一套结构完整且独立的内容部分：可以用来呈现论坛的一个帖子，杂志或报纸中的一篇文章，一篇博客，用户提交的评论内容，可互动的页面模块挂件等；

6、<aside></ aside> 元素标签可以包含与当前页面或主要内容相关的引用、侧边栏、广告、nav元素组，以及其他类似的有别与主要内容的部分：①aside 的内容应该与 article 的内容相关，② 被包含在<article>中作为主要内容的附属信息部分，其中的内容 以是与当前文章有关的引用、词汇列表等，③在<article>之外使用，作为页面或站点全局的附属信息部分；最典型的形式是侧边栏(sidebar)，其中的内容可以是友情链接、附属导航或广告单元等；

7、<figure> < figure > 用于对元素进行组合：一般用于图片或视频；

8、<figcaption> <figcaption> figure的子元素：用于对figure的内容 进行说明；

9、<time></time>用来表现时间或日期；

10、<datalist></datalist>选项列表：与 input 元素配合使用，来定义 input 可能的值；

11、<details></details>用于描述文档或文档某个部分的细节：①该元素用于摘录引用等，应该与页面的主要内容区分开的其他内容，②Open属性默认展开；

12、< summary></summary> details 元素的标题；

13、<dialog></dialog>定义一段对话；

14、<address></address> 定义文章或页面作者的详细联系信息；

15、<mark></mark> 需要标记的词或句子；

16、<keygen>给表单添加一个公钥；

17、<progress><progress>定义进度条；

18、<footer></footer>页脚：页面的底部或者版块底部。
```

* 在IE8和IE8以下浏览器不支持以上新增的语义化标签

* 解决方法：

  1. 在浏览器解析前动态创建标签元素，然后转成块级元素

     例如：

     ```js
     document.createElement("header")
     ```

  2. 通过引入`html5shiv.js`插件动态创建元素

     ```html
     <!-- 小于等于 ie 8 才进行引包, 用于兼容 html5 语义化标签 -->
     <!--[if lte IE 8]>
     <script src="./html5shiv.js"></script>
     <![endif]-->
     ```

> 参考自：
>
> [宅到深夜的博客](https://www.cnblogs.com/zhaodz/p/11519671.html)
>
> [know_8_know](https://blog.csdn.net/weixin_40184257/article/details/84928877)

## 7.H5的离线存储原理和使用？

* 作用：

  在用户没有因特网连接时，可以正常访问站点或应用，在用户与因特网连接时，自动更新缓存数据。

* 原理：

  HTML5的离线存储是基于新建的.appcache文件的，通过这个文件上的解析清单离线存储资源，这些资源就会像cookie一样被存储了下来。之后当网络在处于离线状态下时，浏览器会通过被离线存储的数据进行页面展示。

* 怎么用

  首先，在html页面头部加入一个manifest的属性：

  ```html
  <!DOTYPE HTML>
  <html manifest="cache.manifest">
  ...
  </html>
  ```

  然后书写cache.manifest文件：

  ```manifest
  CACHE MANIFEST
  #v0.11
  
  CACHE:
  js/app.js
  css/style.css
  
  NETWORK:
  resourse/logo.png
  
  FALLBACK:
  / /offline.html
  ```

  manifest(即.appcache文件)文件是简单的文本文件，可分为三个部分：

  CACHE:

  在此标题下列出的文件将在首次下载后进行缓存。（由于包含manifest文件的页面将自动离线存储，所以不需要把页面自身也列出来）

  NETWORK:

  在此标题下列出的文件需要与服务器的连接，且不会被缓存，离线时无法使用。

  可以使用`"*"`来指示所有的其他资源/文件都需要因特网连接：

  ```
  NETWORK:*
  ```

  如果在CACHE和NETWORK中有一个相同的资源，那么这个资源还是被离线存储，也就是说CACHE的优先级更高。

  FALLBACK:

  在此标题下列出的文件规定当页面无法访问时的回退页面。比如上面这个文件表示的就是如果访问根目录下任何一个资源失败了，那么就去访问offline.html

> 原文：[Damao97](https://me.csdn.net/weixin_41258179)

## 8. 浏览器怎么对H5的离线存储和资源的管理和加载？

* 在线的情况下，浏览器发现html头部有manifest属性，它会请求manifest文件，如果是第一次访问app，那么浏览器就会根据manifest文件的内容下载相应的资源并且进行离线存储。如果已经访问过app并且资源已经离线存储了，那么浏览器就会使用离线的资源加载页面，然后浏览器会对比新的manifest文件与旧的manifest文件，如果文件没有发现改变，就不做任何操作，如果文件改变了，那么就会重新下载文件中的资源并进行离线存储。
* 离线的情况下，浏览器就直接使用离线存储的资源。

> 原文：[Damao97](https://me.csdn.net/weixin_41258179)

## 9.cookie和localstorage,sessionstorage有什么区别？

* cookie的内容主要包括：名字、值、过期时间、路径和域。路径与域一起构成cookie的作用范围。若不设置时间，则表示这个cookie的生命期为浏览器会话期间，关闭浏览器窗口，cookie就会消失。这种生命期为浏览器会话期的cookie被称为会话cookie。 
* 会话cookie一般不存储在硬盘而是保存在内存里，当然这个行为并不是规范规定的。若设置了过期时间，浏览器就会把cookie保存到硬盘上，关闭后再打开浏览器这些cookie仍然有效直到超过设定的过期时间。对于保存在内存里的cookie，不同的浏览器有不同的处理方式session机制。 
* 当程序需要为某个客户端的请求创建一个session时，服务器首先检查这个客户端的请求里是否已包含了一个session标识（称为session id），如果已包含则说明以前已经为此客户端创建过session，服务器就按照session id把这个session检索出来使用（检索不到，会新建一个），如果客户端请求不包含session id，则为客户端创建一个session并且生成一个与此session相关联的session id，session id的值应该是一个既不会重复，又不容易被找到规律以仿造的字符串，这个session id将被在本次响应中返回给客户端保存。保存这个session id的方式可以采用cookie，这样在交互过程中浏览器可以自动的按照规则把这个标识发送给服务器。

> 原文：[给时光以生命](https://www.cnblogs.com/jing-tian/)

## 10.iframe的缺点？

1. 会产生很多页面，不容易管理。
2. iframe框架结构有时会让人感到迷惑，如果框架个数多的话，可能会出现上下、左右滚动条，会分散访问者的注意力，用户体验度差
3. 代码复杂，无法被一些搜索引擎搜索到，这一点很关键，现在的搜索引擎爬虫还不能很好的处理iframe中的内容，所以使用iframe会不利于搜索引擎优化。
4. 很多的移动设备(PAD手机)无法完全显示框架，设备兼容性差。
5. iframe框架页面会增加服务器的http请求，对于大型网站是不可取的。

> 原文：[Con_sh](https://www.cnblogs.com/consh/)















