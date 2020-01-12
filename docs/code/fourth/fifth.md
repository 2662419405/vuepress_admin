# 基础面试题's brother(part5)

### 1.你如何利用jQuery来向一个元素中添加和移除CSS类? 

* 通过利用`addClass()`和`removeClass()`这两个`jQuery`方法。动态的改变元素的`class`属性可以很简单例如. 使用类`.active`来标记它 们的未激活和激活状态，等等

### 2.你如何使用jQuery来提取一个HTML 标记的属性 例如. 链接的href?

* `attr()`方法被用来提取任意一个HTML元素的一个属性的值. 你首先需要利用`jQuery`选择及选取到所有的链接或者一个特定的链接，然后你 可以应用`attr()`方法来获得他们的`href`属性的值。

* 下面的代码会找到页面中所有的链接并返回href值：

  ```js
  $('a').each(function(){
   alert($(this).attr('href'));
  });
  ```

### 3.你如何使用jQuery设置一个属性值?

* 前面这个问题之后额外的一个后续问题是，`attr()`方法和`jQuery`中的其它方法一样，能力不止一样. 如果你在调用`attr()`的同时带上一个值 例如`.attr(name, value)`, 这里`name`是属性的名称，`value`是属性的新值。

### 4.jQuery中 detach() 和 remove() 方法的区别是什么?

* 尽管`detach()`和`remove()`方法都被用来移除一个DOM元素, 两者之间的主要不同在于 `detach()`会保持对过去被解除元素的跟踪, 因此它可以被取消解除, 而`remove()`方法则会保持过去被移除对象的引用。你也还可以看看 用来向DOM中添加元素的`appendTo()`方法。

### 5.你要是在一个 jQuery 事件处理程序里返回了 false 会怎样？

* 这通常用于阻止事件向上冒泡。

### 6.哪种方式更高效：document.getElementbyId("myId") 还是 $("#myId")？

* 第一种，因为它直接调用了`JavaScript`引擎。

### 7.事件是什么？如何阻止事件冒泡？

* 事件是什么？

  事件用于监听浏览器的操作行为，浏览器触发动作时被捕捉到而调用相应的函数。

* 事件执行三个阶段
  1.  事件捕获阶段
  2. 处于目标阶段
  3. 事件冒泡阶段
* 捕获型事件是自上而下，而冒泡型事件是自下而上的，而我们程序员通常要做的就是第二阶段，完成事件的动作。而第一、三阶段由系统封装自动调用完成。

<img src="https://raw.githubusercontent.com/Wangjiateng666/img/master/fifth-7.jpg"/>

* 冒泡阻止

  ```js
  event.stopPropagation()
  IE浏览器
  event.cancelBubble = true;
  ```

### 8.谈一下Jquery中的bind,live,delegate,on的区别？



















































