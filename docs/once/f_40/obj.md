# 遍历对象的方法
## for...in

```js
const obj= {
	id:1,
	name:'zhangsan',
	age:11
}

for(let key in obj){
	console.log(obj[key])
}
```

## Object.keys(obj)和Object.values(obj)
参数:
obj:要返回其枚举自身属性的对象
返回值：一个表示给定对象的所有可枚举属性的字符串数组

```js
const obj= {
	id:1,
	name:'zhangsan',
	age:11
}
console.log(Objct.keys(obj));  //['id','name','age']
console.log(Object.values(obj)); //['1','zhangsan','18']
```

## Object.entries()

说明：Object.entries()方法返回一个给定对象自身可枚举属性的键值对数组，其排列与使用 for...in 循环遍历该对象时返回的顺序一致（区别在于 for-in 循环还会枚举原型链中的属性）。

```js
const obj= {
	id:1,
	name:'zhangsan',
	age:11
}
for (let [key, value] of Object.entries(obj)) {
  console.log(`${key}: ${value}`);
}
```

## Object.getOwnPropertyNames(obj)

说明：返回一个数组，包含对象自身的所有属性（包含不可枚举属性），遍历可以获取key和value

```js
const obj= {
	id:1,
	name:'zhangsan',
	age:11
}
    Object.getOwnPropertyNames(obj).forEach(function(key){
        console.log(key+ '---'+obj[key])
    })
//id---1
//name---zhangsan
//age---11
```







