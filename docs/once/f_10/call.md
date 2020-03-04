# 5.call/apply 的实现原理是什么？能否手写一个

## 原理

`call` 和 `apply` 的功能相同，都是改变 this 的执行，并立即执行函数。区别在于传参方式不同。

* `func.call(thisArg,arg1,arg2,...)`：第一个参数是 this 指向的对象，其它参数依次传入。

* `func.apply(thisArg,[argsArray])`：第一个参数是 this 指向的对象，第二个参数是数组或类数组。

## 代码实现

首先，我们知道，函数都可以调用 `call`，说明 `call` 是函数原型上的方法，所有的实例都可以调用。即: `Function.prototype.call`。

* 在 `call` 方法中获取调用 `call()`函数

* 如果第一个参数没有传入，那么默认指向 `window/global`(非严格模式)

* 传入 `call` 的第一个参数是 `this` 指向的对象，根据隐式绑定的规则，我们知道 `obj.foo()`, foo() 中的 this 指向 obj;因此我们可以这样调用函数 `thisArgs.func(...args)`

* 返回执行结果

```js
Function.prototype.call = function(){
    let [thisArg,...args] = [...arguments]; //结构出第一个值
    if(!thisArg){
        thisArg = typeof window === "undefined" ? global : window;
    }
    thisArg.func = this;
    // 执行函数
    let result = thisArg.func(...args);
    delete thisArg.func //移除无用属性
    return result;
}
```

```js
Function.prototype.apply = function(thisArg,rest){
    let result;
    if(!thisArg){
        thisArg = typeof window === "undefined" ? global : window;
    }
    thisArg.func = this;
    if(!rest){
        result = thisArg.func();
    }esle{
        result = thisArg.func(...rest);
    }
    delete thisArg.func //移除无用属性
    return result;
}
```
