# 遍历数组的方法
## for

```js
var arr = [1,2,3,4,5,6];
for(var i =0;i<arr.length;i++){
	console.log(arr[i])
}
```

## foreach

说明：遍历回数组的每一项，没有返回值，会修改原数组
参数：value数组中的当前项，index当前项的索引，array原始数组

```js
var arr = [1,2,3,4,5,6];
arr.forEach((item,index,arr)=>{
	console.log(item);
})
```

## map

说明：有返回值，可以return，对原数组没有影响，相当于把原来原数组克隆一份，把克隆的这份的数组中的对应项改变了
参数：value数组中的当前项，index当前项的索引，array原始数组

```js
var arr = [1,2,3,4,5,6];
arr.map(function(item,index,input){
    return item
})
```

实例：

```js
var ary = [12,23,24,42,1]; 
var res = ary.map(function (item,index,ary ) { 
    return item*10; 
}) 
console.log(res);//-->[120,230,240,420,10];  原数组拷贝了一份，并进行了修改
console.log(ary);//原数组
```

## for...of

说明：循环读取键值，如需要获取数组的索引，可借助数组实例的entries方法和keys方法。使用的范围包括数组、Set 和 Map 结构、某些类似数组的对象（比如arguments对象、DOM NodeList 对象）、后文的 Generator 对象，以及字符串。

```js
var arr = [1,2,3,4,5,6];
for(let key of arr){
	console.log(key);
}
```

## filter

说明:不会改变原始数组，返回新数组

```js
var ages=[23,12,45,34];
function checkAdult(age){
	return age>=25
}
ages.filter(checkAdult);
//[45,34]
```

## reduce

```js
var arr = [1, 2, 3, 4];
var sum = arr.reduce(function(prev, cur, index, arr) {
    console.log(prev, cur, index);
    return prev + cur;
})
console.log(arr, sum);
```

## entries(),keys()和values()

说明：他们都返回一个遍历器对象，可以用for...of进行遍历，唯一的区别是Keys是对键名的遍历，values是对键值的遍历，entries()实对键值对的遍历

```js
for(let i of ['a','b'].keys()){
	console.log(i);
}
//0  1
```

```js

for(let i of ['a','b'].values()){
	console.log(i);
}
//'a' 'b'
```

```js
for(let [i,e] of ['a','b'].entries()){
	console.log(i,e)
}
//0 'a'
//1 'b'
```

