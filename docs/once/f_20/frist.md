# 如果理解原型和原型链

::: tip
原型和原型链学了很久,但是一直没有完全理解,虽然现在也没用完全理解,但能勉强对付一下了
:::

这里面先参考一下 [阮大大的教程](http://www.ruanyifeng.com/blog/2011/06/designing_ideas_of_inheritance_mechanism_in_javascript.html)

## 前言

要先从继承开始讲起,根据其他语言比如java或者c++来说,他们都可以通过new来创建一个实例对象,然后js也出现了new的关键字,但是new后面不能跟着类,必须要跟着构造函数

**new运算符的缺点**

用构造函数生成实例对象，有一个缺点，那就是无法共享属性和方法。

## 理解

**随之而来prototype属性引入**

任何一个实例对象创建之后,将自动引用prototype对象的属性和方法,例如下面

```js
function Dog(name){
    this.name = name
}
Dog.prototype.sayName = function(){ console.log(this.name) }
var dog = new Dog('小明')
dog.sayName()
```

那么每一个通过Dog构造函数实例化出来的对象,都会有sayName的这个方法

**prototype**

每个对象拥有一个原型对象,对象以原型为模板,从原型集成方法和属性,这些属性和方法定义在对象的构造器函数的 prototype 属性上，而非对象实例本身,

一个例子

```js
function Parent() {}
var p = new Parent();
p.__proto__ === Parent.prototype
```

这里用 p.__proto__ 获取对象的原型，__proto__ 是每个实例上都有的属性，prototype 是构造函数的属性，这两个并不一样，但 p.__proto__ 和 Parent.prototype 指向同一个对象。

## 总结

1. prototype和__proto__的区别,prototype是构造函数上面的属性,而__proto__是实例出来的对象的属性,这两个并不一样，但 p.__proto__ 和 Parent.prototype 指向同一个对象

2. 再说的俗一些 _proto_里是js内置的，prototype是你自己写的。比如当我们去创建一个 `var obj = {}` 的时候,他会默认就有 `obj.toString()` 这个方法,这就是__ptoto__的方式,而如果我们想增加,就在他的原型构造函数上面添加 prototpye

3. 原型链: 每个对象都有一个原型对象,通过`__proto__`指针指向上一个原型,并从中继承方法和属性,同时原型对象也有原型,那么一层一层可以找下去,直到null,这种关系我们称之为**原型链**

4. 原型: JavaScript 常被描述为一种**基于原型的语言**——每个对象拥有一个原型对象，对象以其原型为模板、从原型继承方法和属性。