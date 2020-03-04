# 6.柯里化函数实现

## 原理

在开始之前，我们首先需要搞清楚函数柯里化的概念。

函数柯里化是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术。

## 代码实现

```js
const curry = (fn,...args) => args.length < fn.length
                        // 参数不够长,重新柯里化,等待新的参数
                        ? (...arguments) => curry(fn,...args,...arguments)  
                        // 参数长度足够,执行函数
                        : fn(...args);
```

```js
function sunFn(a,b,c){
    return a+b+c;
}
var sum = curry(sunFn);
console.log(sum(2)(3)(5)) // 10
console.log(sum(2,3,5))   // 10
console.log(sum(2)(3,5))  // 10
console.log(sum(2,3)(5))  // 10
```

## 作用

> 函数柯里化的主要作用：

* 参数复用

* 提前返回 – 返回接受余下的参数且返回结果的新函数

* 延迟执行 – 返回新函数，等待执行