# 两个异步函数,用promise编写,让第一个异步需要等待第二个异步完成

```js
function getone(resolve, reject) {
    setTimeout(function () {
        resolve("第一个异步函数");
    }, 1000)
}
function gettwo(resolve, reject) {
    setTimeout(function () {
        resolve("第二个异步函数");
    }, 1000)
}
// 代码开始
(async function () {
    const promise = new Promise(getone).then(res => {
        console.log(res)
        return new Promise(gettwo)
    }).then(res => {
        console.log(res)
    })
})()
```
