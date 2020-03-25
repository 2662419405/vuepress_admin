# 基础面试题's brother(part11)

## 1.针对jquery性能的优化方法

1. 使用最新版本的jQuery

   这里是三条最常见的jQuery选择语句：

   * $('.elem') 

   * $('.elem', context) 

   * context.find('.elem') 

     我们用1.4.2、1.4.4、1.6.2三个版本的jQuery测试，看看浏览器在1秒内能够执行多少次

2. 用对选择器

   a. 最快的选择器：id选择器和元素标签选择器 

   b. 较慢的选择器：class选择器

   c.最慢的选择器：伪类选择器和属性选择器

3. 理解子元素和父元素的关系

4. 不要过度使用jQuery

   jQuery速度再快，也无法与原生的javascript方法相比。所以有原生方法可以使用的场合，尽量避免使用jQuery。 以最简单的选择器为例，document.getElementById("foo")要比$("#foo")快10多倍。

5.  做好缓存

   ```js
   选中某一个网页元素，是开销很大的步骤。所以，使用选择器的次数应该越少越好，并且尽可能缓存选中的结果，便于以后反复使用。
   比如，下面这样的写法就是糟糕的写法：
    jQuery('#top').find('p.classA');
    jQuery('#top').find('p.classB');
   更好的写法是：
    var cached = jQuery('#top');
    cached.find('p.classA');
    cached.find('p.classB');
   根据测试，缓存比不缓存，快了2-3倍。
   ```

6.  使用链式写法

   * jQuery的一大特点，就是允许使用链式写法。 
   * `$('div').find('h3').eq(2).html('Hello'); `采用链式写法时，jQuery自动缓存每一步的结果，因此比非链式写法要快。根据测试，链式写法比（不使用缓存的）非链式写法，大约 快了25%。

7.  事件的委托处理（Event Delegation）

* javascript的事件模型，采用"冒泡"模式，也就是说，子元素的事件会逐级向上"冒泡"，成为父元素的事件。 利用这一点，可以大大简化事件的绑定。比如，有一个表格（table元素），里面有100个格子（td元素），现在要求在每个格子上面绑 定一个点击事件（click），请问是否需要将下面的命令执行100次？

  ```js
  $("td").on("click", function(){
   $(this).toggleClass("click");
   });
  ```

* 回答是不需要，我们只要把这个事件绑定在table元素上面就可以了，因为td元素发生点击事件之后，这个事件会"冒泡"到父元素table 上面，从而被监听到。 因此，这个事件只需要在父元素绑定1次即可，而不需要在子元素上绑定100次，从而大大提高性能。这就叫事件的"委托处理"，也就是 子元素"委托"父元素处理这个事件。

  ```js
   $("table").on("click", "td", function(){
   $(this).toggleClass("click");
   });
  更好的写法，则是把事件绑定在document对象上面。
   $(document).on("click", "td", function(){
   $(this).toggleClass("click");
   });
  如果要取消事件的绑定，就使用off()方法。
  $(document).off("click", "td");
  ```

8. 少改动DOM结构

   1. 改动DOM结构开销很大，因此不要频繁使用.append()、.insertBefore()和.insetAfter()这样的方法。 如果要插入多个元素，就先把它们合并，然后再一次性插入。根据测试，合并插入比不合并插入，快了将近10倍。

   2. 如果你要对一个DOM元素进行大量处理，应该先用.detach()方法，把这个元素从DOM中取出来，处理完毕以后，再重新插回文档。 根据测试，使用.detach()方法比不使用时，快了60%。

   3. 如果你要在DOM元素上储存数据，不要写成下面这样：

      ```js
       var elem = $('#elem');
       elem.data(key,value);
      而要写成
       var elem = $('#elem');
       $.data(elem[0],key,value);
      ```

      根据测试，后一种写法要比前一种写法，快了将近10倍。因为elem.data()方法是定义在jQuery函数的prototype对象上面的，而 $.data()方法是定义jQuery函数上面的，调用的时候不从复杂的jQuery对象上调用，所以速度快得多。（此处可以参阅下面第10点。）

   4. 插入html代码的时候，浏览器原生的innterHTML()方法比jQuery对象的html()更快。

   

9.  正确处理循环

   循环总是一种比较耗时的操作，如果可以使用复杂的选择器直接选中元素，就不要使用循环，去一个个辨认元素。 javascript原生循环方法for和while，要比jQuery的.each()方法快，应该优先使用原生方法。

10.  尽量少生成jQuery对象

    每当你使用一次选择器（比如$('#id')），就会生成一个jQuery对象。jQuery对象是一个很庞大的对象，带有很多属性和方法，会占用 不少资源。所以，尽量少生成jQuery对象。 举例来说，许多jQuery方法都有两个版本，一个是供jQuery对象使用的版本，另一个是供jQuery函数使用的版本。下面两个例子，都是 取出一个元素的文本，使用的都是text()方法。 你既可以使用针对jQuery对象的版本：

    ```js
     var $text = $("#text");
     var $ts = $text.text();
    也可以使用针对jQuery函数的版本：
     var $text = $("#text");
     var $ts = $.text($text);
    由于后一种针对jQuery函数的版本不通过jQuery对象操作，所以相对开销较小，速度比较快。
    ```

11.  选择作用域链最短的方法

    严格地说，这一条原则对所有Javascript编程都适用，而不仅仅针对jQuery。 我们知道，Javascript的变量采用链式作用域。读取变量的时候，先在当前作用域寻找该变量，如果找不到，就前往上一层的作用域寻 找该变量。这样的设计，使得读取局部变量比读取全局变量快得多。 请看下面两段代码，第一段代码是读取全局变量：

    ```js
     var a = 0;
     function x(){
     a += 1;
     }
    第二段代码是读取局部变量：
     function y(){
     var a = 0;
     a += 1;
     }
    ```

    第二段代码读取变量a的时候，不用前往上一层作用域，所以要比第一段代码快五六倍。 同理，在调用对象方法的时候，closure模式要比prototype模式更快。 prototype模式：

    ```js
     var X = function(name){ this.name = name; }
     X.prototype.get_name = function() { return this.name; };
    closure模式：
     var Y = function(name) {
     var y = { name: name };
     return { 'get_name': function() { return y.name; } };
     };
    同样是get_name()方法，closure模式更快。
    ```

12.  使用Pub/Sub模式管理事件

```js
当发生某个事件后，如果要连续执行多个操作，最好不要写成下面这样：
 function doSomthing{
 doSomethingElse();
 doOneMoreThing();
 }
而要改用事件触发的形式：
 function doSomething{
 $.trigger("DO_SOMETHING_DONE");
 }
 $(document).on("DO_SOMETHING_DONE", function(){
 doSomethingElse(); }
 );
还可以考虑使用deferred对象。
 function doSomething(){
 var dfd = new $.Deferred();
 //Do something async, then...
 //dfd.resolve();
 return dfd.promise();
 }
 function doSomethingElse(){
 $.when(doSomething()).then(//The next thing);
 }
```

## 2.jQuery与jQuery UI 有啥区别？

1. jQuery是一个js库，主要提供的功能是选择器，属性修改和事件绑定等等
2. jQuery UI则是在jQuery的基础上，利用jQuery的扩展性，设计的插件。提供了一些常用的界面元素，诸如对话框、拖动行为、改变 大小行为等等。 
3. jQuery本身注重于后台，没有漂亮的界面，而jQuery UI则补充了前者的不足，他提供了华丽的展示界面，使人更容易接受。既有强 大的后台，又有华丽的前台。jQuery UI是jQuery插件，只不过专指由jQuery官方维护的UI方向的插件。













































































