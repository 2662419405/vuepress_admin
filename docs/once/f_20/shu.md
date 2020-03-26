# 给定一个数组[1,2,3,4,5]和一个数字k,让数组向右移动k个位置,得到[4,5,1,2,3]

```js
const arr = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
console.log(arr.splice(arr.length - k).concat(arr.splice(0, arr.length)))
```
