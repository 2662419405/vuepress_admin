# 实现一个节流函数

```js
window.addEventListener('scroll', fang(dou, 2000))

function dou() {
    console.log(1)
}

function fang(dou, shi) {
    var timer = true;
    return function () {
        if (!timer) return
        timer = false
        setTimeout(() => {
            dou.apply(this, arguments)
            timer = true
        }, shi)
    }
}
```