# 基础面试题's brother(part9)

## 1. 对Node的优点和缺点提出了自己的看法？

优点： 

1. 因为Node是基于事件驱动和无阻塞的，所以非常适合处理并发请求，因此构建在Node上的代理服务器相比其他技术实现（如Ruby）的服务器表现要好得多。 
2. 与Node代理服务器交互的客户端代码是由javascript语言编写的，因此客户端和服务器端都用同一种语言编写，这是非常美妙的事情。 

缺点： 

1. Node是一个相对新的开源项目，所以不太稳定，它总是一直在变。 
2. 缺少足够多的第三方库支持。看起来，就像是Ruby/Rails当年的样子（第三方库现在已经很丰富了，所以这个缺点可以说不存在了）。

自己看法：

1. 实现界面交互 
2. 提升用户体验 
3. 有了Node.js，前端可以实现服务端的一些事情 

## 2.对前端界面工程师这个职位是怎么样理解的？它的前景会怎么样？

前端是最贴近用户的程序员，比后端、数据库、产品经理、运营、安全都近。 

前景： 

1. 前端是最贴近用户的程序员，前端的能力就是能让产品从 90分进化到 100 分，甚至更好 
2. 参与项目，快速高质量完成实现效果图，精确到1px；
3. 与团队成员，UI设计，产品经理的沟通；
4. 做好的页面结构，页面重构和用户体验； 
5. 处理hack，兼容、写出优美的代码格式； 
6. 针对服务器的优化、拥抱最新前端技术。 

## 3.你有哪些性能优化的方法？

1. 减少http请求次数：CSS Sprites, JS、CSS 源码压缩、图片大小控制合适；网页 Gzip，CDN 托管，data 缓存 ，图片服务器
2. 前端模板 JS + 数据，减少由于HTML标签导致的带宽浪费，前端用变量保存 AJAX 请求结果，每次操作本地变量，不用请求，减少请求 次数
3. 用 innerHTML 代替 DOM 操作，减少 DOM 操作次数，优化 javascript 性能
4. 当需要设置的样式很多时设置 className 而不是直接操作 style
5. 少用全局变量、缓存DOM节点查找的结果。减少 IO 读取操作
6. 避免使用 CSS Expression（css表达式)又称 Dynamic properties(动态属性)
7. 图片预加载，将样式表放在顶部，将脚本放在底部，加上时间戳 
8. 避免在页面的主体布局中使用table，table要等其中的内容完全下载之后才会显示出来，显示比div+css布局慢。 对普通的网站有一个统一的思路，就是尽量向前端优化、减少数据库操作、减少磁盘IO。向前端优化指的是，在不影响功能和体验的 情况下，能在浏览器执行的不要在服务端执行，能在缓存服务器上直接返回的不要到应用服务器，程序能直接取得的结果不要到外部取得， 本机内能取得的数据不要到远程取，内存能取到的不要到磁盘取，缓存中有的不要去数据库查询。减少数据库操作指减少更新次数、缓存结 果减少查询次数、将数据库执行的操作尽可能的让你的程序完成（例如join查询），减少磁盘IO指尽量不使用文件系统作为缓存、减少读写 文件次数等。程序优化永远要优化慢的部分，换语言是无法“优化”的。

## 4.http状态码有那些？分别代表是什么意思？

转到：[http://shtodream.cn/home/wang/http.html#_1-%E7%8A%B6%E6%80%81%E8%A1%8C](http://shtodream.cn/home/wang/http.html#_1-状态行)

## 5.一个页面从输入 URL 到页面加载显示完成，这个过程中都发生了什么？

分为4个步骤： 

1. 当发送一个 URL 请求时，不管这个 URL 是 Web 页面的 URL 还是 Web 页面上每个资源的 URL，浏览器都会开启一个线程来处理这个请 求，同时在远程 DNS 服务器上启动一个 DNS 查询。这能使浏览器获得请求对应的 IP 地址。
2. 浏览器与远程 Web 服务器通过 TCP 三次握手协商来建立一个 TCP/IP 连接。该握手包括一个同步报文，一个同步-应答报文和一个应答 报文，这三个报文在 浏览器和服务器之间传递。该握手首先由客户端尝试建立起通信，而后服务器应答并接受客户端的请求，最后由客户 端发出该请求已经被接受的报文。 
3. 一旦 TCP/IP 连接建立，浏览器会通过该连接向远程服务器发送 HTTP 的 GET 请求。远程服务器找到资源并使用 HTTP 响应返回该资 源，值为 200 的 HTTP 响应状态表示一个正确的响应。 
4. 此时，Web 服务器提供资源服务，客户端开始下载资源。 

请求返回后，便进入了我们关注的前端模块 

简单来说，浏览器会解析 HTML 生成 DOM Tree，其次会根据 CSS 生成 CSS Rule Tree，而 javascript 又可以根据 DOM API 操作 DOM 

## 6.平时如何管理你的项目？

1. 先期团队必须确定好全局样式（globe.css），编码模式(utf-8) 等 
2. 编写习惯必须一致（例如都是采用继承式的写法，单样式都写成一行）
3. 标注样式编写人，各模块都及时标注（标注关键样式调用的地方）
4. 页面进行标注（例如 页面 模块 开始和结束）
5. CSS 跟 HTML 分文件夹并行存放，命名都得统一（例如 style.css） 
6. JS 分文件夹存放 命名以该 JS 功能为准的英文翻译
7. 图片采用整合的 images.png png8 格式文件使用 尽量整合在一起使用方便将来的管理

## 7.说说最近最流行的一些东西吧？常去的哪些网站？

1. Node.js 
2. Mongodb 
3. npm 
4. MVVM 
5. MEAN 
6. three.js 
7. React 
8. VUE
9. Angular

常去的网站： 1. 牛客网 2. Github 3. CSDN 

## 8.Ajax 的过程是怎样的

1. 创建XMLHttpRequest对象,也就是创建一个异步调用对象
2. 创建一个新的HTTP请求,并指定该HTTP请求的方法、URL及验证信息
3. 设置响应HTTP请求状态变化的函数
4. 发送HTTP请求
5. 获取异步调用返回的数据
6. 使用JavaScript和DOM实现局部刷新 

## 9.异步加载和延迟加载

1. 异步加载的方案： 动态插入 `script`标签
2. 通过 `ajax` 去获取 `js` 代码，然后通过 `eval `执行
3. script 标签上添加 defer 或者 async 属性
4. 创建并插入 iframe，让它异步执行 js 
5. 延迟加载：有些 js 代码并不是页面初始化的时候就立刻需要的，而稍后的某些情况才需要的 

## 10.前端的安全问题？

1. XSS 
2. sql注入 
3. CSRF：是跨站请求伪造，很明显根据刚刚的解释，他的核心也就是请求伪造，通过伪造身份提交POST和GET请求来进行跨域的攻击 

## 11.完成CSRF需要两个步骤： 

1. 登陆受信任的网站A，在本地生成 COOKIE
2. 在不登出A的情况下，或者本地 COOKIE 没有过期的情况下，访问危险网站B。 

## 12.ie 各版本和 chrome 可以并行下载多少个资源

1. IE6 2 个并发
2. iE7 升级之后的 6 个并发，之后版本也是 6 个
3. Firefox，chrome 也是6个 

## 13.javascript里面的继承怎么实现，如何避免原型链上面的对象共享

用构造函数和原型链的混合模式去实现继承，避免对象共享可以参考经典的extend()函数，很多前端框架都有封装的，就是用一个空函数当 做中间变量

## 14.grunt， YUI compressor 和 google clojure用来进行代码压缩的用法。

grunt： 

* UglifyJS 是基于 NodeJS 的 Javascript 语法解析/压缩/格式化工具 
* 官网：http://lisperator.net/uglifyjs/ 或者 https://github.com/mishoo/UglifyJS2 
* 安装： `$ npm install uglify-js -g `使用方法见官网 demo 

YUI compressor： 

```
YUI Compressor 是一个用来压缩 JS 和 CSS 文件的工具，采用Java开发。 
使用方法： 
// 压缩JS java -jar yuicompressor-2.4.2.jar --type js --charset utf-8 -v src.js > packed.js 
// 压缩CSS java -jar yuicompressor-2.4.2.jar --type css --charset utf-8 -v src.css > packed.css
```

Google Closure Compiler： 

* 官网：https://developers.google.com/closure/compiler/ 

使用方法： 

1. 在命令行下使用一个google编译好的java程序
2. 使用google提供的在线服务
3. 使用google提供的RESTful API 

## 15.Flash、Ajax各自的优缺点，在使用中如何取舍？

Flash： 

1. Flash适合处理多媒体、矢量图形、访问机器 
2. 对CSS、处理文本上不足，不容易被搜索

Ajax： 

1.  Ajax对CSS、文本支持很好，支持搜索 
2. 多媒体、矢量图形、机器访问不足 

共同点： 

1. 与服务器的无刷新传递消息
2. 可以检测用户离线和在线状态 
3. 操作DOM 

## 16.请解释一下 JavaScript 的同源策略

概念： 同源策略是客户端脚本（尤其是Javascript）的重要的安全度量标准。它最早出自Netscape Navigator2.0，其目的是防止某个文档或脚本 从多个不同源装载。 

这里的同源策略指的是：协议，域名，端口相同，同源策略是一种安全协议，指一段脚本只能读取来自同一来源的窗口和文档的属性。 

## 17.为什么要有同源限制

我们举例说明：比如一个黑客程序，他利用Iframe把真正的银行登录页面嵌到他的页面上，当你使用真实的用户名，密码登录时，他的页面 就可以通过Javascript读取到你的表单中input中的内容，这样用户名，密码就轻松到手了。 

## 18.什么是 "use strict"; ? 使用它的好处和坏处分别是什么？

ECMAscript 5添加了第二种运行模式："严格模式"（strict mode）。顾名思义，这种模式使得Javascript在更严格的条件下运行。 

## 19.设立"严格模式"的目的，主要有以下几个

1. 消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为; 

2. 消除代码运行的一些不安全之处，保证代码运行的安全； 

3. 提高编译器效率，增加运行速度

4. 为未来新版本的Javascript做好铺垫。 

   注：经过测试 IE6,7,8,9 均不支持严格模式。

缺点： 现在网站的 JS 都会进行压缩，一些文件用了严格模式，而另一些没有。这时这些本来是严格模式的文件，被 merge 后，这个串就到了文 件的中间，不仅没有指示严格模式，反而在压缩后浪费了字节。

## 20.何时使用POST

1. 无法使用缓存文件（更新服务器上的文件或数据库）
2. 向服务器发送大量数据（POST 没有数据量限制）
3. 发送包含未知字符的用户输入时，POST 比 GET 更稳定也更可靠 

## 21.哪些地方会出现css阻塞，哪些地方会出现js阻塞？

js 的阻塞特性：

* 所有浏览器在下载 JS 的时候，会阻止一切其他活动，比如其他资源的下载，内容的呈现等等。
* 直到 JS 下载、解析、执行 完毕后才开始继续并行下载其他资源并呈现内容。为了提高用户体验，新一代浏览器都支持并行下载 JS，但是 JS 下载仍然会阻塞其它资 源的下载（例如.图片，css文件等）
* 由于浏览器为了防止出现 JS 修改 DOM 树，需要重新构建 DOM 树的情况，所以就会阻塞其他的下载和呈现。 嵌入 JS 会阻塞所有内容的呈现，而外部 JS 只会阻塞其后内容的显示，2 种方式都会阻塞其后资源的下载。也就是说外部样式不会阻塞外 部脚本的加载，但会阻塞外部脚本的执行。  

CSS 怎么会阻塞加载了？

CSS 本来是可以并行下载的，在什么情况下会出现阻塞加载了(在测试观察中，IE6 下 CSS 都是阻塞加载） 

* 当 CSS 后面跟着嵌入的 JS 的时候，该 CSS 就会出现阻塞后面资源下载的情况。而当把嵌入 JS 放到 CSS 前面，就不会出现阻塞的情况 了。 
* 根本原因：因为浏览器会维持 html 中 css 和 js 的顺序，样式表必须在嵌入的 JS 执行前先加载、解析完。而嵌入的 JS 会阻塞后面的 资源加载，所以就会出现上面 CSS 阻塞下载的情况。 

## 22.嵌入JS应该放在什么位置？ 

1. 放在底部，虽然放在底部照样会阻塞所有呈现，但不会阻塞资源下载。
2. 如果嵌入JS放在head中，请把嵌入JS放在CSS头部。
3. 使用 defer（只支持IE）
4. 不要在嵌入的JS中调用运行时间较长的函数，如果一定要用，可以用 setTimeout 来调用 

## 23.Javascript无阻塞加载具体方式

1. 将脚本放在底部。还是放在head中，用以保证在js加载前，能加载出正常显示的页面。`<script>`标签放在`</body>`前
2.  阻塞脚本：由于每个`<script>`标签下载时阻塞页面解析过程，所以限制页面的`<script>`总数也可以改善性能。适用于内联脚本和外部脚 本。
3. 非阻塞脚本：等页面完成加载后，再加载js代码。也就是，在 window.onload 事件发出后开始下载代码。
4. defer属性：支持IE4和fierfox3.5更高版本浏览器 
5. 动态脚本元素：文档对象模型（DOM）允许你使用js动态创建HTML的几乎全部文档内容。代码如下：

```js
<script>
 var script=document.createElement("script");
 script.type="text/javascript";
 script.src="file.js";
 document.getElementsByTagName("head")[0].appendChild(script);
</script>
```

此技术的重点在于：无论在何处启动下载，文件额下载和运行都不会阻塞其他页面处理过程，即使在head里（除了用于下载文件的 http 链 接）。 

## 24.eval是做什么的？

1. 它的功能是把对应的字符串解析成JS代码并运行
2. 应该避免使用eval，不安全，非常耗性能（2次，一次解析成js语句，一次执行）

## 25.写一个通用的事件侦听器函数

```js
//event(事件)工具集，来源：github.com/markyun
markyun.Event = {
// 页面加载完成后
 readyEvent : function(fn) {
 	if (fn==null) {
 		fn=document;
 	}
 	var oldonload = window.onload;
 	if (typeof window.onload != 'function') {
 		window.onload = fn;
 	} else {
 		window.onload = function() {
 			oldonload();
 			fn();
 		};
 	}
 },
 // 视能力分别使用dom0||dom2||IE方式 来绑定事件
 // 参数： 操作的元素,事件名称 ,事件处理程序
 addEvent : function(element, type, handler) {
 	if (element.addEventListener) {
 //事件类型、需要执行的函数、是否捕捉
 		element.addEventListener(type, handler, false);
 	} else if (element.attachEvent) {
 		element.attachEvent('on' + type, function() {
 			handler.call(element);
 		});
 	}else{
		 element['on' + type] = handler;
     }
 },
 // 移除事件
 removeEvent : function(element, type, handler) {
 	if (element.removeEnentListener) {
		element.removeEnentListener(type, handler, false);
 	} else if (element.datachEvent) {
 		element.detachEvent('on' + type, handler);
 	} else {
 		element['on' + type] = null;
 	}
 },
 // 阻止事件 (主要是事件冒泡，因为IE不支持事件捕获)
 stopPropagation : function(ev) {
 	if (ev.stopPropagation) {
 		ev.stopPropagation();
 	} else {
 		ev.cancelBubble = true;
 	}
 },
 // 取消事件的默认行为
 preventDefault : function(event) {
 	if (event.preventDefault) {
 		event.preventDefault();
 	} else {
 		event.returnValue = false;
 	}
 },
 // 获取事件目标
 getTarget : function(event) {
 	return event.target || event.srcElement;
 },
 // 获取event对象的引用，取到事件的所有信息，确保随时能使用event；
 getEvent : function(e) {
 	var ev = e || window.event;
  	if (!ev) {
		 var c = this.getEvent.caller;
 		 while (c) {
 			ev = c.arguments[0];
 			if (ev && Event == ev.constructor) {
 				break;
 			}
 				c = c.caller;
 		}
 	}
 	return ev;
 }
};
```













































