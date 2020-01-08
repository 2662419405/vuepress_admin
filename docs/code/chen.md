# 指向"前端面试题汇总"扩展

## 1,	display:none 和visibility:hidden的区别?


    如果给一个元素设置了display: none;那么该元素以及它的所有后代元素都会隐藏,  

    它是前端开发人员使用频率最高的一种隐藏方式。隐藏后的元素无法点击，  

    无法使用屏幕阅读器等辅助设备访问，占据的空间消失。

    给元素设置visibility: hidden也可以隐藏这个元素，但是隐藏元素仍需占用与未隐藏时一样的空间，

    也就是说虽然元素不可见了，但是仍然会影响页面布局。

**注**:
1、visibility具有继承性，给父元素设置visibility:hidden;子元素也会继承这个属性。

但是如果重新给子元素设置visibility: visible,则子元素又会显示出来。这个和display: none有着质的区别

2、visibility: hidden不会影响计数器的计数，这和display: none完全不一样

3、CSS3的transition支持visibility属性，但是并不支持display，

由于transition可以延迟执行，因此可以配合visibility使用纯css实现hover延时显示效果。提高用户体验。




## 2,	css中 link 和 @import 的区别?

1.语法结构的不同

2.本质不同  

    css属于标签，只能放入html源码里进行使用，  

    而@import可以看作为css样式，可以引入css样式（属于html标签，而@import是css提供的）

3.页面加载

    页面加载时，会被同时被加载，而@import引用的css会等到页面被加载完的时候再加载

4.兼容性。

    @import只有在IE5以上才能被识别，而是html标签，无兼容问题

5.优先级

    不管是还是@import ，优先级按加载顺序为参考，后加载的优先级高

6.可控性
    
    使用js控制dom改变样式只能使用标签


:::tip 但是
:rainbow:为什么要避免使用CSS @import
:::

    在web前端优化的建议中，不建议使用css @import 因为这种方式加载css相当于把css放在了底部， 

    因此@import会在网页加载中增加延迟

    因为使用@import引用的文件只有引用它的那个css文件被下载、解析后,浏览器才会知道有一个css需要下载

    这时才会去进行想在，然后再解析、构建render tree等一系列操作。

    因此css @import引起的css解析延迟会加长页面留白期，所以要尽量避免css @import，采用标签的方式引入




## 3,position 的 absolute 与 fixed 共同点与不同点

```text
共同点:	
        (1) 改变行内元素的呈现方式 , display被设为block;

		(2) 让元素脱离文档流,

		(3) 默认会覆盖到非定位元素上,

不同点: 
    absolute 的 "根元素" 是可以设置的

	fixed 的 "根元素" 固定为浏览器窗口,
    
    当你滚动网页,fixed 元素与浏览器窗口之间的距离是不变的
```



## 4,	position的 absolute、relative、fixed 分别根据哪一个点来定位？ 

​	

```text
1,	absolute:相对于最近一级的定位不是static的父元素来进行定位.

2,	relative:相对于其在普通流中的位置进行定位

3,	fixed(老IE不支持):相对于浏览器窗口进行定位  

//也同样相对于frame进行定位,但是,h5删除了frame,
```



## 5,	介绍下CSS的盒子模型

​	

```
1,	盒模型:内容(content)	+	内边距(padding)	+	外边距(margin)	+	边框(border)

	注意	IE盒模型为:content	+	padding	+	border

2,	类型:分为IE盒子	&	标准W3C

3,	设置盒模型的方式: box-sizing

	box-sizing:content-box;	标准盒模型

	box-sizing:border-box;	IE盒模型
```



## 6,	CSS 选择符有哪些?	那些属性可以继承?	优先级算法如何介绍?	CSS3新增伪类有哪些?

#### 选择符有哪些:	

* id选择器 ( # id )

* 类选择器 ( . classname )
* 标签选择器 ( div ,h1 ...)
* 相邻选择器 ( h1 + p )
* 子选择器 ( ul > li )
* 后代选择器 ( li a )
* 通配符选择器 ( a )
* 属性选择器 (a[rel = "external"] )
* 伪类选择器 ( a: hover )

#### 常见可继承的属性:

1. 字体系列属性
   * ​	font-family : 字体系列
   * ​    font-weight : 字体的粗细
   * ​    font-size : 字体的大小
   * ​    font-style : 字体的风格
2. 文本系列属性
   * ​    text-indent : 文本缩进
   * ​    text-align : 文本水平对齐
   * ​    line-height : 行高
   * ​    word-spacing : 单词之间的间距
   * ​    letter-spacing : 中文或者字母之间的间距
   * ​    text-transform : 控制文本大小（就是uppercase、lowercase、capitalize这三个）
   * ​    color : 文本颜色
3. 元素可见性:   visibility :  控制元素显示隐藏
4. 列表布局属性:    list-style : 列表风格 包括list-style-type、list-style-image等
5. 光标属性 :    cursor : 光标显示 

#### 常见不可继承的属性: 

1. ​	display : 规定元素应该生成的框的类型
2. ​    文本属性 :  
   1. vertical-align : 垂直文本对齐
   2. text-decoration : 添加到文本的装饰 
   3. text-shadow : 文本阴影效果
   4. white-space : 空白符的处理
   5. Unicode-bidi : 设置文本的方向
3. 盒子模型的属性 :  width ,height , margin ,border ,padding,,,,,等等等
4. 背景属性 : background : 背景图片的颜色,定位,尺寸等等
5. 定位属性 : float , clear , position , min-width , max-height , overflow , z-index...等等
6. 生成内容属性 : content , counter-reset ...等
7. 轮廓样式属性 : outline-style等
8. 声音样式属性 : pause-before、pause-after、pause、cue-before、cue-after、cue、play-during

#### 优先级计算:

**要了解 :** 

​		优先级就是分配给指定的 CSS 声明的一个权重，它由 匹配的选择器中的 每一种选择器类型的 数值 决定。

​		而当优先级与多个 CSS 声明中任意一个声明的优先级相等的时候，CSS 中最后的那个声明将会被应用到元素上。

​		当同一个元素有多个声明的时候，优先级才会有意义。因为每一个直接作用于元素的 CSS 规则总是会接管/覆盖（take over）该元素从祖先元素继承而来的规则。

**优先级权重:**

::: danger 注意
**!important**会覆盖其他所有声明样式,但是应该尽量避免使用
:::

| 选择器类别 |                   说明                    | 权重表示  | 权重表示 |
| :--------: | :---------------------------------------: | :-------: | :------: |
|  行内样式  |         行内只有一个 style = " "          | {1.0.0.0} |   1000   |
|  id选择器  |     selector 中使用了几个id,即#的个数     | {0.1.0.0} |   100    |
| 类别选择器 |          类,伪类,以及属性的个数,          | {0.0.1.0} |    10    |
| 元素选择器 | 伪元素和标签元素的个数,如 : p:first-child | {0.0.0.1} |    1     |


**<font color="#00008B">如果比较后的权重相同,那么后者覆盖前者,后渲染的胜出;</font>**

**<font color="#00008B">内联样式 > id选择器样式 > 类选择器样式 > 元素选择器样式；</font>**

**<font color="#00008B">重中之重，1000/100/10/1这种权值系数的比较方式只是便于理解，真实情况下10个class并不能逆转1个id。</font>**

更详细解析请=>[css优先级计算](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Specificity):rainbow:

#### CSS3新增伪类 :


* p:nth-child(x)

* p:frist-of-type
* p:last-of-type
* p:only-type
* p:only-of-type
* :checked   被选中
* :enabled, :disabled    禁用状态


