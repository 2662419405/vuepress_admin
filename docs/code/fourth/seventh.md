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









































