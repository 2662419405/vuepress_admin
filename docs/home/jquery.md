# jquery基本使用

## 一.jQuery的基本使用

  ->1.0  2.0  3.0   分别支持ie8  部分支持ie8  全部不支持ie8  开发的时候最常用的是1.几版本
  ->分为开发版本和压缩版本  带有min的是压缩版本，一般情况下使用的是开发版本
  ->window.onload=function(){}    <=>    $(function(){})   绑定文档加载完成的监听
  ->分为两种使用     使用jQuery核心函数或者jQuery核心对象    核心函数$/jQuery   核心对象 执行$()返回的对象

## 二.jQuert的两把利器

  ->jQuery的核心函数,直接可用
  ->jQuery的核心对象,执行jQuery函数调用他

## 三.jQuery函数的使用

  I.作为一般函数使用:$(param)
	1).  参数为函数  :  当DOM加载完成后，执行此回调函数
	2).  参数为DOM对象  : 将DOM对象封装成jQuery对象
	3).  参数为选择器字符串 : 查找所有匹配的标签，并将他们分装成jQuery对象
	4).  参数为html标签字符串  : (用的少)创建标签对象并分装成jQuery对象

  II.作为对象使用:$.xxx()
	1).  $.each() :  隐使遍历数组     回调函数中第一个为key，第二个为value
    2).  $.trim() :  去除两端空格     
	
  III. 事件回调函数中   this指向的是 #btn  DOM对象元素

## 四.jQuery对象的使用

```
I. 理解

1).即执行jQuery核心函数返回的对象
2).jQuery对象内部包含的是dom元素对象的伪数组
3).jQuery对象拥有很多有用的方法和属性

II. 基本行为

1).size()/length : 包含的DOM元素
2).[index]/get(index)  :  得到DOM元素对应的下标
3).each()  :  遍历DOM元素
4).index()  :  得到DOM元素的下标

III. 伪数组

1).伪数组是一个对象
2).伪数组必须有length属性
3).如果这个对象的length不为0，那么必须要有按照下标存储的数据
4).没有数组特别的方法 forEach() push() pop() splice()
```

## 五.jQuery基本选择器

```
1).class   ".b"代表所有的class属性为b的元素
2).id      "#div"  代表id元素
3).标签               "div"   代表标签元素
4).子集               "div.box" 代表class属性为btn中的div元素
5).并集               "#b,#c"  代表id为c和id为b的元素
```

## 六.jQuery层次选择器

```
I.查找子元素，后代元素，兄弟元素的选择器

1).  >   是指当前这一代的下一代，不包括下下代
2).  +   是指当前元素的下一个元素，只包括一个
3).  ~   是指当前元素的后面所有兄弟姐妹元素(就是不能包括上一级的元素)
```

## 七.jQuery过滤选择器

```
I. 选择器

1).  :first  正序
2).  :last   倒叙
3).  :not(.box)   选择不包含clss为box的元素
4).  :lt(3):gt(0)  小于第三个大于第零个
5).  :contains("name")  选择所有标签的innerHTML内容是name的标签
6).  :hidden()  选择隐藏的标签
7).  [title]  选择所有带有title属性的标签体
8).  [title=hello]  选择title属性为hello的标签

II.  多个选择器不是同时执行，而是以此执行
```

## 八.jQuery隔行换色

```
1).   odd:偶数       even:奇数    nth-child(2n)偶数
```

## 九.jQuery表单选择器

```
I.表单的常用选择器
	
1).  text[disabled]  :选择text文本的不可用输入框
2).  checkbox:checked  :选择被选中的复选框按钮  

II. :等价于[]   在选择器中等价存在
```

## 十.jQuery_$工具方法

```
I.工具方法

1).  $.each()  :  遍历数组对象中的数据
2).  $.trim()  :  去除字符串两遍的空格
3).  $.type(obj) : 得到数据类型
4).  $.isArray(obj) : 判断是否是数组
5).  $.isFunction(obj) : 判断是否是函数
6).  $.parseJSON(json) : 解析json字符串转换为js对象

II. JSON

1).  '{"name":"Tom" , "Age":12 }'  这是一个json 
2).  '[{"name":"Tom","Age":12},{"name":"Allen","Age":24}]'   这是一个json数组
3).   JSON.parse(jsonString)  json字符串---->js对象/数组
4).   JSON.stringify(jsObj/jsArr)  js对象/数组---->json字符串
```

## 十一.jQuery多tab点击切换

```
I.  设计思路    获取全部的DOM元素，然后通过this获取到这个index()，最后通过操作jQuery对象的下标的方式操作

II.  先获取全部的DOM元素，然后定义一个当前显示的元素的下标，先让这个元素隐藏，在显示当前点击的元素，最后更新下标（效率上更高）
```

## 十二.jQuery属性

```
I.属性

1).attr()  一个参数代表查看，两个参数代表第二个参数覆盖    但是不能操作布尔值
2).removeAttr()  移除
3).addClass()  添加class 
4).html()   标签   有字符串代表->这是标签体
5).prop()   专门操作属性值为boolean的属性值
```

## 十三.jQuery的CSS操作

```
I.CSS操作

1).css()   一个参数代表查看，两个参数代表第二个参数覆盖  
2).css({'color':'#ff0011'})可以这是多个值
```

## 十四.jQuery位置操作

```
I.offset 和   position

1).offset().left 和  offset().top  两个可以获取相对于页面的位置
2).position()  和上面是一样，这个获取的是父元素的位置
```

## 十五.jQuery中的位置滚动

```
I.常用方法

1).scrollTop()  可以得到元素的滚动高度
2).scrollLeft()   可以得到x轴滚动距离
3).上面的两个方法(number)  既可设置滚动的距离

II.如何获取窗体滚动       获取页面的html+body两个滚动条的滚动总量
```

## 十六.练习 jQuery回滚到顶部

```
I.瞬间回到顶部   $('html,body').scrollTop(0)
II.平滑滚动    计算总时间，时间间隔（定时器的时间）总距离 每次移动的距离（总距离除以需要的时间）  然后用定时器执行
```

## 十七.jQuery元素的尺寸

```
I.内容尺寸

1).height() :height
2).width()  :width

II.内部尺寸

1).innerHeight() :height+padding
2).innerWidth()  :width+padding

III.外部尺寸

1).outerHeight(false/true)  :height+padding+border  如果是true，加上margin
1).outerWidth(false/true)  :width+padding+border  如果是true，加上margin
```

## 十八.jQuery的筛选

```
I.过滤

1).first()  第一个
2).last()  最后一个
3).eq()*  指定某一个  参数为number  
4).filter('[title=hello]')  指定title属性为hello的
5).not('[title=hello]')   指定不是hello的(还包括没有title属性)
6).filter('[title][title!=hello]')   交集选择器代表两个条件
7).has('span')   指向内部标签

II.查找

1).children()  子标签  
2).find()      后代标签
3).parent()    父标签
4).prevAll()   前面的标签
5).siblings()  兄弟标签
```

## 十九.jQuery文档操作 *

```
I.增删改

1).append(ELement)   向内部最后添加元素
2).prepend(Element)  向内部最前添加元素
3).before(Element)   向兄弟前面添加元素
4).after(ELement)    向兄弟后面添加元素
5).replaceWith(Element)   替换指定的内部元素
6).remove(DOM_Element)    移除指定的内部元素
```

## 二十.jQuery事件处理

```js
I.常用事件

1).mouseenter()    鼠标移入
2).mouseleave()    鼠标移出

II.事件处理

1).on(eve,fn)      第一个参数代表事件的处理方式
2).off()           和第一个相对应，取消时间绑定
3).点击时传入ev 
	->ev.clientX     到客户端左上角的距离
	->ev.pageX       到页面顶部左上角的距离
	->ev.offsetX     到相对于事件左上角的距离
	->ev.stopPropagation()    阻止事件的冒泡
	->ev.preventDefault()     阻止事件的默认行为

III.事件切换

1).hover(fn,fn)     是mouseenter,mouseleave两个函数的回调函数

IV.区别mouseover与mouseenter

*mouseover:在移入子元素时也会触发,对应mouseout
*mouseenter:只在移入当前元素时触发,对应mouseleave

V.事件委托

1).将多个子元素(li)的事件监听委托给父元素(ul)处理
2).监听回调是加在了父元素上
3).当操作任何一个子元素(li)时，事件会冒泡到父元素(ul)上
4).父辈元素不会直接处理，而是根据event.target得到发生事件的子元素(li)，通过这个子元素调用事件回调函数
5).委托方 ：  业主     li
6).被委托方  :   中介    ul
7).添加新的子元素，自动由事件响应处理
8).减少事件监听的数量:    n==>1
9).设置事件委托API: $(parentSelector).delegate(childrenSelector,eventName,callback)
10).取消事件的委托API:$(parentSelector).undelegate(eventName)

VI. 事件处理
1).$('div').triggler('click',['data',[data]])
2).$('div').bind('click',function(e,param1,parma2))


```

## 二十一.jQuery动画

```
I.内置动画

1).fadeOut()   淡入   param--->number  代表存在秒数    
2).fadeIn()    淡出   参数和上面一样
3).fadeToggle()  淡入淡出切换   可以传一个回调函数，当切换结束的时候触发
4).不断改变元素opacity来实现
5).slideDown()   带动画的展开
6).sildeUp()     带动画的收缩
7).sildeToggle()   带动画的切换展开/收缩
8).不断改变元素height实现
9).show()     显示
10).hide()    隐藏
11).toggle()  切换
12).不断改变opacity和height和width实现

II.自定义动画

1).animate()    指定自定义动画  参数可以传一个json 分别指定值
2).animate()    不需要带有单位，还可以进行字符串的加减
3).stop()       可以阻止动画的继续进行

```

## 二十二.jQuery多库共存

```
I.当多个$库同时存在时,需要使用
II.调用jQuery.noConflict()释放$使用权
III.下文需要调用的$时，只能使用jQuery

```

## 二十三.区别onload与ready

```
I.window.onload

1).包括页面的图片加载完后才会调用(晚)
2).只能有一个监听回调

II.$(document).ready()

1).等同于$(function(){})
2).页面加载完就回调(早)
3).可以有多个监听回调

```

## 二十四.jQuery扩展工具

```
I.$扩展本身, 使用方式---->$.min()  

1).定义
$.extend({
	xx:function(){
		...
	},
	yy:function(){
		...
	}
})

II.$添加新的方法,使用方式----->$.checkAll()

1).定义 
$.fn.extend({
	xx:function(){
		...
	},
	yy:function(){
		...
	}
})

```