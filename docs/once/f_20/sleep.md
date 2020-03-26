# 实现一个sleep函数,sleep(1000)意味着等待1000毫秒,可以使用es6之后的语法

## 第一种

```js
function sleep(time) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, time)
    })
}
console.log('程序开始执行');
sleep(1000).then(res => {
    console.log('程序执行完毕');
})
```

## 第二种

```js
function sleep(time) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, time)
    })
}
async function start() {
    console.log('程序开始了')
    await sleep(1000)
    console.log('程序结束')
}
start()
```