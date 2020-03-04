# 1.new的实现原理是什么?

## 原理

1. 创建一个空对象 var obj = {}
 
2. 修改obj.__proto__=Dog.prototype

3. 只改this指向并且把参数传递过去,call和apply都可以

4. 根据规范，返回 null 和 undefined 不处理，依然返回obj

## 代码实现

```js
function newDog(fn,...args){
    let obj = Object.create(fn.prototype)
    let ret = fn.apply(obj,args)
    return ret instanceof Object ? ret : obj
}
```
