# 分析和解释代码

```js
const promise = new Promise((resolve,reject)=>{
    console.log(1)
    resolve()
    console.log(2)
})
promise.then(()=>{
    console.log(3)
})
console.log(4)
```

答案为 `1 2 4 3`

因为promise的构造函数是同步执行,而promise的回调函数是异步函数(并且是微异步,在setTimeOut的前面执行)
