# http基础

::: danger 提示
http是前端一个很重点的内容
:::

http是一个我们每天都在使用,但是却不是很熟悉的一个协议,今天我们来看一下这个协议有哪些特点

## http协议特点

* 灵活：HTTP允许传输任意类型的数据对象。正在传输的类型由Content-Type加以标记。

* 无连接：无连接的含义是限制每次连接只处理一个请求。服务器处理完客户的请求，并收到客户的应答后，即断开连接。采用这种方式可以节省传输时间。

* 无状态：无状态是指协议对于事务处理没有记忆能力。缺少状态意味着如果后续处理需要前面的信息，则它必须重传，这样可能导致每次连接传送的数据量增大。另一方面，在服务器不需要先前信息时它的应答就较快。

* 简单快速：客户向服务器请求服务时，只需传送请求方法和路径。请求方法常用的有GET、HEAD、POST。每种方法规定了客户与服务器联系的类型不同。由于HTTP协议简单，使得HTTP服务器的程序规模小，因而通信速度很快

## http请求

**http请求由三部分组成，分别是：请求行、消息报头、请求正文**

### 1. 请求行以一个方法符号开头，以空格分开，后面跟着请求的URI和协议的版本

`Method Request-URI HTTP-Version CRLF` 就是一个请求头其中 Method表示请求方法；Request-URI是一个统一资源标识符；HTTP-Version表示请求的HTTP协议版本；CRLF表示回车和换行（除了作为结尾的CRLF外，不允许出现单独的CR或LF字符）。例如-> `GET /index.html HTTP/1.1 (CRLF)`

请求方法（所有方法全为大写）有多种，各个方法的解释如下：

GET 请求获取Request-URI所标识的资源

POST 在Request-URI所标识的资源后附加新的数据

HEAD 请求获取由Request-URI所标识的资源的响应消息报头

PUT 请求服务器存储一个资源，并用Request-URI作为其标识

DELETE 请求服务器删除Request-URI所标识的资源

TRACE 请求服务器回送收到的请求信息，主要用于测试或诊断

CONNECT 保留将来使用

OPTIONS 请求查询服务器的性能，或者查询与资源相关的选项和需求

### 2. 请求头就是我们常用的,比如主机是什么,比如用户标识符userAgent,语言

**常用的请求报头**

* Accept请求报头域用于指定客户端接受哪些类型的信息。eg：Accept：image/gif，表明客户端希望接受GIF图象格式的资源；Accept：text/html，表明客户端希望接受html文本。

* Accept-Charset请求报头域用于指定客户端接受的字符集。eg：Accept-Charset:iso-8859-1,gb2312.如果在请求消息中没有设置这个域，缺省是任何字符集都可以接受。

* Accept-Encoding请求报头域类似于Accept，但是它是用于指定可接受的内容编码。eg：AcceptEncoding:gzip.deflate.如果请求消息中没有设置这个域服务器假定客户端对各种内容编码都可以接受。

* Accept-Language请求报头域类似于Accept，但是它是用于指定一种自然语言。eg：Accept-Language:zh-cn.如果请求消息中没有设置这个报头域，服务器假定客户端对各种语言都可以接受。

* 我们上网登陆论坛的时候，往往会看到一些欢迎信息，其中列出了你的操作系统的名称和版本，你所使用的浏览器的名称和版本，这往往让很多人感到很神奇，实际上，服务器应用程序就是从User-Agent这个请求报头域中获取到这些信息。User-Agent请求报头域允许客户端将它的操作系统、浏览器和其它属性告诉服务器。不过，这个报头域不是必需的，如果我们自己编写一个浏览器，不使用User-Agent请求报头域，那么服务器端就无法得知我们的信息
了。

* Host请求报头域主要用于指定被请求资源的Internet主机和端口号，它通常从HTTP URL中提取出来的

### 3. 请求体这个需要根据方法不同来进行不同的定义

::: tip 请求行
下面的demo中可以看出,第一行是请求行,2-7为请求头,第8行表示一个空行 表示请求头结束 这个空行是必须的,第9行是数据体，比如是需要查询的信息。
:::

```js
GET/sample.jspHTTP/1.1
Accept:image/gif.image/jpeg
Accept-Language:zh-cn
Connection:Keep-Alive
Host:localhost
User-Agent:Mozila/4.0(compatible;MSIE5.01;Window NT5.0)
Accept-Encoding:gzip,deflate

username=jinqiao&password=1234
```

## http响应

**HTTP响应也是由三个部分组成，分别是：状态行、消息报头、响应正文**

### 1. 状态行

`HTTP-Version Status-Code Reason-Phrase CRLF` 其中，HTTP-Version表示服务器HTTP协议的版本；Status-Code表示服务器发回的响应状态代码；ReasonPhrase表示状态代码的文本描述。

::: danger 提示
状态码是重中之重,必须要掌握常用的集中状态码,分别如下
:::

状态代码有三位数字组成，第一个数字定义了响应的类别，且有五种可能取值：

| 状态码        | 信息           |
| ------------- |:-------------:|
| 1xx      | 指示信息--表示请求已接收，继续处理 |
| 2xx      | 成功--表示请求已被成功接收、理解、接受      |
| 3xx | 重定向--要完成请求必须进行更进一步的操作      |
| 4xx | 客户端错误--请求有语法错误或请求无法实现      |
| 5xx | 服务器端错误--服务器未能实现合法的请求      |

**常用的状态码**

<table>
	<tr>
      <td align="center" style="width:70px"><b>状态码</b></td>
      <td align="center" style="width:140px"><b>状态码英文名称</b></td>
      <td align="center"><b>中文描述</b></td>
   </tr>
	<tr>
		<td align="center" style="width:70px">200</td>
		<td align="center" style="width:140px">OK</td>
		<td align="center">客户端请求成功</td>
	</tr>
	<tr>
		<td align="center" style="width:70px">400</td>
		<td align="center" style="width:140px">Bad Request</td>
		<td align="center">客户端请求有语法错误，不能被服务器所理解</td>
	</tr>
	<tr>
		<td align="center" style="width:70px">401</td>
		<td align="center" style="width:140px">Unauthorized</td>
		<td align="center">请求未经授权</td>
	</tr>
	<tr>
		<td align="center" style="width:70px">403</td>
		<td align="center" style="width:140px">Forbidden</td>
		<td align="center">服务器收到请求，但是拒绝提供服务,比如说token失败,或者用户名密码错误等等</td>
	</tr>
	<tr>
		<td align="center" style="width:70px">404</td>
		<td align="center" style="width:140px">Not Found</td>
		<td align="center">请求资源不存在，eg：输入了错误的URL</td>
	</tr>
	<tr>
		<td align="center" style="width:70px">500</td>
		<td align="center" style="width:140px">Internal Server Error</td>
		<td align="center">服务器发生不可预期的错误</td>
	</tr>
	<tr>
		<td align="center" style="width:70px">503</td>
		<td align="center" style="width:140px">Server Unavailable</td>
		<td align="center">服务器当前不能处理客户端的请求，一段时间后可能恢复正常</td>
	</tr>
</table>

**状态码总览**

<table>
   <tr>
      <td align="center" style="width:70px"><b>状态码</b></td>
      <td align="center" style="width:140px"><b>状态码英文名称</b></td>
      <td align="center"><b>中文描述</b></td>
   </tr>
   <tr>
      <td colspan="3" align="center"><b>1开头的状态码</b></td>
   </tr>
   <tr align="center">
      <td>100</td>
      <td>Continue</td>
      <td>继续。客户端应继续其请求</td>
   </tr>
   <tr align="center">
      <td>101</td>
      <td>Switching Protocols</td>
      <td>切换协议。服务器根据客户端的请求切换协议。只能切换到更高级的协议，例如，切换到HTTP的新版本协议</td>
   </tr>
   <tr>
      <td colspan="3" align="center"><b>2开头的状态码</b></td>
   </tr>
   <tr align="center">
      <td>200</td>
      <td>OK</td>
      <td>请求成功。一般用于GET与POST请求</td>
   </tr>
   <tr align="center">
      <td>201</td>
      <td>Created</td>
      <td>已创建。成功请求并创建了新的资源</td>
   </tr>
   <tr align="center">
      <td>202</td>
      <td>Accepted</td>
      <td>已接受。已经接受请求，但未处理完成</td>
   </tr>
   <tr align="center">
      <td>203</td>
      <td>Non-Authoritative Information</td>
      <td>非授权信息。请求成功。但返回的meta信息不在原始的服务器，而是一个副本</td>
   </tr>
   <tr align="center">
      <td>204</td>
      <td>No Content</td>
      <td>无内容。服务器成功处理，但未返回内容。在未更新网页的情况下，可确保浏览器继续显示当前文档</td>
   </tr>
   <tr align="center">
      <td>205</td>
      <td>Reset Content</td>
      <td>重置内容。服务器处理成功，用户终端（例如：浏览器）应重置文档视图。可通过此返回码清除浏览器的表单域</td>
   </tr>
   <tr align="center">
      <td>206</td>
      <td>Partial Content</td>
      <td>部分内容。服务器成功处理了部分GET请求</td>
   </tr>
   <tr>
      <td colspan="3" align="center"><b>3开头的状态码</b></td>
   </tr>
   <tr align="center">
      <td>300</td>
      <td>Multiple Choices</td>
      <td>多种选择。请求的资源可包括多个位置，相应可返回一个资源特征与地址的列表用于用户终端（例如：浏览器）选择</td>
   </tr>
   <tr align="center">
      <td>301</td>
      <td>Moved Permanently</td>
      <td>永久移动。请求的资源已被永久的移动到新URI，返回信息会包括新的URI，浏览器会自动定向到新URI。今后任何新的请求都应使用新的URI代替</td>
   </tr>
   <tr align="center">
      <td>302</td>
      <td>Found</td>
      <td>临时移动。与301类似。但资源只是临时被移动。客户端应继续使用原有URI</td>
   </tr>
   <tr align="center">
      <td>303</td>
      <td>See Other</td>
      <td>查看其它地址。与301类似。使用GET和POST请求查看</td>
   </tr>
   <tr align="center">
      <td>304</td>
      <td>Not Modified</td>
      <td>未修改。所请求的资源未修改，服务器返回此状态码时，不会返回任何资源。客户端通常会缓存访问过的资源，通过提供一个头信息指出客户端希望只返回在指定日期之后修改的资源</td>
   </tr>
   <tr align="center">
      <td>305</td>
      <td>Use Proxy</td>
      <td>使用代理。所请求的资源必须通过代理访问</td>
   </tr>
   <tr align="center">
      <td>306</td>
      <td>Unused</td>
      <td>已经被废弃的HTTP状态码</td>
   </tr>
   <tr align="center">
      <td>307</td>
      <td>Temporary Redirect</td>
      <td>临时重定向。与302类似。使用GET请求重定向</td>
   </tr>
   <tr>
      <td colspan="3" align="center"><b>4开头的状态码</b></td>
   </tr>
   <tr align="center">
      <td>400</td>
      <td>Bad Request</td>
      <td>客户端请求的语法错误，服务器无法理解</td>
   </tr>
   <tr align="center">
      <td>401</td>
      <td>Unauthorized</td>
      <td>请求要求用户的身份认证</td>
   </tr>
   <tr align="center">
      <td>402</td>
      <td>Payment Required</td>
      <td>保留，将来使用</td>
   </tr>
   <tr align="center">
      <td>403</td>
      <td>Forbidden</td>
      <td>服务器理解请求客户端的请求，但是拒绝执行此请求</td>
   </tr>
   <tr align="center">
      <td>404</td>
      <td>Not Found</td>
      <td>服务器无法根据客户端的请求找到资源（网页）。通过此代码，网站设计人员可设置"您所请求的资源无法找到"的个性页面</td>
   </tr>
   <tr align="center">
      <td>405</td>
      <td>Method Not Allowed</td>
      <td>客户端请求中的方法被禁止</td>
   </tr>
   <tr align="center">
      <td>406</td>
      <td>Not Acceptable</td>
      <td>服务器无法根据客户端请求的内容特性完成请求</td>
   </tr>
   <tr align="center">
      <td>407</td>
      <td>Proxy Authentication Required</td>
      <td>请求要求代理的身份认证，与401类似，但请求者应当使用代理进行授权</td>
   </tr>
   <tr align="center">
      <td>408</td>
      <td>Request Time-out</td>
      <td>服务器等待客户端发送的请求时间过长，超时</td>
   </tr>
   <tr align="center">
      <td>409</td>
      <td>Conflict</td>
      <td>服务器完成客户端的PUT请求是可能返回此代码，服务器处理请求时发生了冲突</td>
   </tr>
   <tr align="center">
      <td>410</td>
      <td>Gone</td>
      <td>客户端请求的资源已经不存在。410不同于404，如果资源以前有现在被永久删除了可使用410代码，网站设计人员可通过301代码指定资源的新位置</td>
   </tr>
   <tr align="center">
      <td>411</td>
      <td>Length Required</td>
      <td>服务器无法处理客户端发送的不带Content-Length的请求信息</td>
   </tr>
   <tr align="center">
      <td>412</td>
      <td>Precondition Failed</td>
      <td>客户端请求信息的先决条件错误</td>
   </tr>
   <tr align="center">
      <td>413</td>
      <td>Request Entity Too Large</td>
      <td>由于请求的实体过大，服务器无法处理，因此拒绝请求。为防止客户端的连续请求，服务器可能会关闭连接。如果只是服务器暂时无法处理，则会包含一个Retry-After的响应信息</td>
   </tr>
   <tr align="center">
      <td>414</td>
      <td>Request-URI Too Large</td>
      <td>请求的URI过长（URI通常为网址），服务器无法处理</td>
   </tr>
   <tr align="center">
      <td>415</td>
      <td>Unsupported Media Type</td>
      <td>服务器无法处理请求附带的媒体格式</td>
   </tr>
   <tr align="center">
      <td>416</td>
      <td>Requested range not satisfiable</td>
      <td>客户端请求的范围无效</td>
   </tr>
   <tr align="center">
      <td>417</td>
      <td>Expectation Failed</td>
      <td>服务器无法满足Expect的请求头信息</td>
   </tr>
   <tr>
      <td colspan="3" align="center"><b>5开头的状态码</b></td>
   </tr>
   <tr align="center">
      <td>500</td>
      <td>Internal Server Error</td>
      <td>服务器内部错误，无法完成请求</td>
   </tr>
   <tr align="center">
      <td>501</td>
      <td>Not Implemented</td>
      <td>服务器不支持请求的功能，无法完成请求</td>
   </tr>
   <tr align="center">
      <td>502</td>
      <td>Bad Gateway</td>
      <td>充当网关或代理的服务器，从远端服务器接收到了一个无效的请求</td>
   </tr>
   <tr align="center">
      <td>503</td>
      <td>Service Unavailable</td>
      <td>由于超载或系统维护，服务器暂时的无法处理客户端的请求。延时的长度可包含在服务器的Retry-After头信息中</td>
   </tr>
   <tr align="center">
      <td>504</td>
      <td>Gateway Time-out</td>
      <td>充当网关或代理的服务器，未及时从远端服务器获取请求</td>
   </tr>
   <tr align="center">
      <td>505</td>
      <td>HTTP Version not supported</td>
      <td>服务器不支持请求的HTTP协议的版本，无法完成处理</td>
   </tr>
</table>

### 2. 消息报头

和请求头差不多,是相应给我们的头部信息,有可能包括服务器类型,返回文档类型,编码,时间等等,具体的信息可以用f12查看network,分辨点击不同的资源进行查看

* Cache-Control 用于指定缓存指令，缓存指令是单向的（响应中出现的缓存指令在请求中未必会出现），且是独立的（一个消息的缓存指令不会影响另一个消息处理的缓存机制），HTTP1.0使用的类似的报头域为Pragma。

* Location响应报头域用于重定向接受者到一个新的位置。Location响应报头域常用在更换域名的时候。
* Content-Encoding实体报头域被用作媒体类型的修饰符，它的值指示了已经被应用到实体正文的附加内容的编码，因而要获得Content-Type报头域中所引用的媒体类型，必须采用相应的解码机制。Content-Encoding这样用于记录文档的压缩方法
* Content-Language实体报头域描述了资源所用的自然语言。没有设置该域则认为实体内容将提供给所有的语言阅读
* Content-Length实体报头域用于指明实体正文的长度，以字节方式存储的十进制数字来表示。
* Content-Type实体报头域用语指明发送给接收者的实体正文的媒体类型
* Last-Modified实体报头域用于指示资源的最后修改日期和时间。

### 3. 响应体

就是返回的数据内容,如果是一个html,就返回html文本

