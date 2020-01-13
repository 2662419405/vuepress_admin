# 考试内容

## 写在前面的话


**:fire:十分感谢以下同学对本次文档的支持:heart:** 

**:rofl:陶志斌:rofl:王慧妍:rofl:陈旭:rofl:邱航:rofl:黄海鹏**

::: danger 声明
    所有内容仅供参考
:::

## 1.doctype的作用  严格模式和混杂模式的区别

* **作用**

    <!DOCTYPE>声明叫做文件类型定义（DTD），声明的作用为了告诉浏览器该文件的类型。让浏览器解析器知道应该用哪个规范来解析文档。<!DOCTYPE>声明必须在 HTML 文档的第一行，这并不是一个 HTML 标签。

* **区别**

    如果文档包含严格的 DOCTYPE ，那么它一般以严格模式呈现。

    DOCTYPE 不存在或形式不正确会导致文档以混杂模式呈现。

    取自:rainbow:[吴秋彤的博客](https://www.cnblogs.com/wuqiutong/p/5986191.html)

## 2.实现数组去重的方式有哪些?

``` js
  var obj = [];
  var arr = ["1","2","1"];
 for(var i = 0; i< arr.length; i++){
  if(obj.indexof(arr[i]) == -1){ 
      //如果能查找到，证明数组元素重复了,
        obj.push(arr[i]);//添加到新数组
  }
 }
```

``` js
 for(i = 0; i < arr.length; i++){
  for(j = i + 1; j < arr.length; j++){
   if(arr[i] == arr[j]){
    arr.splice(j,1);
    j--;
   }
  }
 }
```

::: danger
**:fire:更多请自行百度:fire:**
:::

取自:rainbow:[IT匠人的博客](https://blog.csdn.net/qq_38989725/article/details/81006998)

## 3.谈谈对this对象的理解

    this是一个关键字，它代表函数运行时，自动生成的一个内部对象，只能在函数内部使用。

* 1.作为函数调用时 `this`指向全局对象

* 2.作为对象的方法调用 `this`指向调用对象

* 3.作为构造函数被调用 `this`指向新的对象（new会改变this的指向）

* 4,`call` `apply` `bind` 等特殊方式 ,`this`指向新的对象

::: tip
更多详细解释:rainbow:[航仔的博客](https://www.cnblogs.com/sunhang32/p/11854850.html)
:::

## 4.闭包是什么?有什么特性?对页面会造成什么影响?

*   什么是闭包

    > **闭包就是能够读取其他函数内部变量的函数**

*   特性以及影响

    > **封闭性：外界无法访问闭包内部的数据，如果在闭包内声明变量，外界是无法访问的，除非闭包主动向外 界提供访问接口；**

    > **持久性：一般的函数，调用完毕之后，系统自动注销函数，而对于闭包来说，在外部函数被调 用之后，闭包结构依然保存在；**

    > **使用闭包会占有内存资源，过多的使用闭包会导致内存溢出等。**

*   扩展解决方法 :

    > 将已经使用过的变量赋值为`null`空即可释放内存

::: tip 扩展
:rainbow:[闭包](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures);
:::

## 5.src和href的区别是什么?

**`src` :是指引用,需要加载时才会加载**

**`href` :是指引用,即与当前页面建立关系,并不加载**

> :rofl:答案取自两位航大佬 ,:smirk:懂我意思哈

## 6.水平、垂直居中元素的方法有哪些？

* 1,    通过margin固定值水平垂直居中

* 2,    通过定位(absolute)居中,再使用margin拉回

* 3,    通过弹性盒子

```js
    display:flex;
    justify-content:center;
    align-item:center;
```

::: danger  要知道
    常用的只有这三种,
    居中办法不唯一,更多请自行百度
:::

## 7.对象的继承方法有哪些？

1. 属性继承
2. call、apply、bind()
3. 原型链继承
4. 构造函数继承
5. 组合继承
6. 寄生组合继承


## 8.写一个文字滚动的插件？

```js
$.fn.extend({
	avn: function() {
		var that = this; // this指向文字的容器
		var val = this.html();  //获取文字
		setInterval(function() {
			val = val.substr(1) + val.substr(0, 1);
            //截取第一个跳到最后去
			that.html(val); //设定内容 覆盖上一个
		}, 800)
	}
})
```

## 9.获取地址栏信息，将参数值输出都在p里面

``` js
    var arr = location.search.substr(1).split("&");
    var p = document.getElementsByTagName("p")[0];
    for(var s = 0; s < arr.length; s++) {
	    var arrNew = arr[s].split("=");
	    p.innerHTML =p.innerHTML+","+arrNew[0]+":"+arrNew[1]
    }
```

## 10.动态添加10个div，每个div内容为1，2，3....，隔行变色

* **jQuery版**

``` js
$(document).ready(function () {
        $("#btn").click(function () {
            for (var i = 1; i <= 10; i++) {
                $("body").append("<div>" + i + "</div>");
            }
            $("div:even").css({ color: "red" })
        })
    })
```

* **原生JS版**

``` js
    var x = document.getElementById("btn"); 
    var y = document.getElementsByTagName("body")[0];
    x.onclick = function(){
        for (var i = 1; i <= 10; i++) {
            a = document.createElement("div")
            a.innerHTML = i ;
            if(i%2!=0){
                a.style.cssText = "background-color:red";
            }
            y.appendChild(a);
        }
    }
```

::: tip 感谢
    感谢陶志斌原生JS代码支持
    原生JS相较jQuery,作为前端工作者理应全部了解,不分前后
:::

## 11.css3新增的伪类和伪元素有哪些，以及两者的区别是什么？

* **新增伪类**

    p:nth-child(x)

    p:frist-of-type

    p:last-of-type

    p:only-type

    p:only-of-type

    :checked 被选中

    :enabled, :disabled 禁用状态

* **新增伪元素**

    ::first-letter  将样式添加到文本的首字母

    ::first-line    将样式添加到文本的首行

    ::before    在某元素之前插入某些内容

    ::after 在某元素之后插入某些内容

* **二者区别**

    伪类本质上是为了弥补常规CSS选择器的不足，以便获取到更多信息；

    伪元素本质上是创建了一个有内容的虚拟容器；

    CSS3中伪类和伪元素的语法不同；

    可以同时使用多个伪类，而只能同时使用一个伪元素

    **扩展了解**:rainbow:[css3伪类与伪元素性质和区别](https://www.cnblogs.com/ihardcoder/p/5294927.html)

## 12.原生js实现无缝滚动?

``` js
setInterval(function(){
	if(document.getElementById("ou").scrollLeft>=110){
        document.getElementById("in").appendChild(document.getElementById("in").firstChild);
        document.getElementById("ou").scrollLeft=0;
    }else{
        document.getElementById("ou").scrollLeft+=10;
    }
},500)
```
* **感谢航仔的巨简洁版无缝滚动**

## 13.举例说明对象的继承方式有哪些？


```js
1.属性继承
function Parent(){
    this.name="wang";
}
function Child(){
    this.age=21;
}
Child.prototype=new Parent()//继承了Parent,通过原型
var demo=new Child()//实例化
alert(demo.age);
alert(demo.name);//得到被继承的属性
```

```js
2.call apply bind()
call//继承谁.call(谁继承,"参数","参数");
Animal.call(cat,"");

apply//继承谁.call(谁继承,["参数","参数"]);
Animal.apply(cat,["red","Lily"]);

bind()//继承谁.bind(谁继承,"")();
Animal.bind(cat,"")();
```

```js
3.原型链继承
function Person(name){
    this.name=name;
};
Person.prototype.getName=function(){
    return this.name;
};
function test(){}
    test.prototype.sex="man";
    test.prototype.getSex=function(){
        alert(this.sex);
    }
test.prototype=new Person("");
var a=new test();
a.getSex();
a.getName();
```

```js
4.构造函数继承
function Person (name) {
    this.name = name;
    this.friends = ['小李','小红'];
    this.getName = function () {
        return this.name;
    }
};
function Parent (age) {	
    Person.call(this,'老明');
    this.age = age;
};
var result = new Parent(23);
```

```js
5.组合继承
function Person(name){
    this.name=name;
    this.friends=["小李","小红"];
};
Person.prototype.getName=function(){
    return this.name;
};
function Parent(age){
    Person.call(this,"老明");
    this.age=age;
};
Parent.prototype=new Person("老明");
var result=new Parent(24);
console.log(result.name);
```

```js
6.寄生组合继承
function Person(name){
    this.name=name;
    this.friends=["小李","小红"];
}
Person.prototype.getName=function(){
    return this.name;
};
function Parent(age){
    Person.call(this,"老明");
    this.age=age;
}
(function (){
    var Super=function(){};
    Super.prototype=Person.prototype;
    Parent.prototype=new Super();
})();
var result=new Parent(23);
```


## 14.举例说明什么是事件委托及应用?

*   什么是事件委托

    事件代理又称事件委托，是javaScript中绑定事件的常用技巧。顾名思义，‘事件代理’就是把原本需要绑定的事件委托给父元素，让父元素负责事件监听。事件代理的原理是DOM元素的事件冒泡。使用事件代理的好处是可以提高性能

*   举例说明

``` js
body部分
<ul id="container">
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
</ul>
JS部分
var box=document.getElementById('container'); //获取盒子
box.addEventListener('click', function (event) { //绑定监听事件
            var target = event.target;
             console.log(event)
            if (target.tagName == 'LI') {
                alert(target.innerText);
           }
         },false);
```

    在javaScript中，添加到页面上的事件处理程序的数量，将直接关系到页面的整体运行性能。
    
    `<li>`标签的数量很大时，循环为每个子元素添加事件，绝非好方法。
    
    有一种优雅的方法，就是事件委托。
    
    使用事件委托只为`<ul>`元素添加一个onclick事件处理程序。
    
    因为有事件冒泡机制，单击每个`<li>`标签时，都会被这个函数处理。