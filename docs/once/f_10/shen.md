# 3.深拷贝和浅拷贝的区别是什么? 实现一个深拷贝

## 原理

深拷贝和浅拷贝是针对复杂数据类型来说的，浅拷贝只拷贝一层，而深拷贝是层层拷贝。

深拷贝

> 深拷贝复制变量值，对于非基本类型的变量，则递归至基本类型变量后，再复制。深拷贝后的对象与原来的对象是完全隔离的，互不影响，对一个对象的修改并不会影响另一个对象。

浅拷贝

> 浅拷贝是会将对象的每个属性进行依次复制，但是当对象的属性值是引用类型时，实质复制的是其引用，当引用指向的值改变时也会跟着变化。

可以使用 `Object.assign`、 扩展运算符 `...` 、 `Array.prototype.slice()`、 `Array.prototype.concat()` 等，例如:

## 代码实现

浅拷贝实现

```js
let obj = {
    name: "ss",
    age: 18,
    hobbies: ['computer',"code"]
}

let obj2 = Object.assign({},obj);
let obj3 = {...obj};

obj.name = "jack";
obj.hobbies.push("coding");
console.log(obj);
// {name: "jack", age: 18, hobbies: Array(3)}
console.log(obj2);
// {name: "ss", age: 18, hobbies: Array(3)}
console.log(obj3);
// {name: "ss", age: 18, hobbies: Array(3)}
```

可以看出浅拷贝只最第一层属性进行了拷贝，当第一层的属性值是基本数据类型时，新的对象和原对象互不影响，但是如果第一层的属性值是复杂数据类型，那么新对象和原对象的属性值其指向的是同一块内存地址。

深拷贝实现

> 1.深拷贝最简单的实现是: `JSON.parse(JSON.stringify(obj))`

JSON.parse(JSON.stringify(obj)) 是最简单的实现方式，但是有一些缺陷：

1. 对象的属性值是函数时，无法拷贝。

2. 原型链上的属性无法拷贝

3. 不能正确的处理 Date 类型的数据

4. 不能处理 RegExp

5. 会忽略 symbol

6. 会忽略 undefined

> 2.实现一个 deepClone 函数

1. 如果是基本数据类型，直接返回

2. 如果是 RegExp 或者 Date 类型，返回对应类型

3. 如果是复杂数据类型，递归。

4. 考虑循环引用的问题

```js
function deepClone(obj,hash = new WeakMap()){ //递归实现
    if(obj instanceof RegExp) return new RegExp(obj);
    if(obj instanceof Date) return new Date(obj);
    if(obj === null || typeof obj != "object"){
        // 普通数据类型
        return obj;
    }
    if(hash.has(obj)){
        return hash.get(obj);
    }
    // 下面是数组和对象的判断
    let t = new obj.constructor();
    hash.set(obj,t);
    for(let key in obj){
        //  递归
        if(obj.hasOwnProperty(key)){ //是否是自身的属性
            t[key] = deepClone(obj[key],hash)
        }
    }
    return t;
}
```