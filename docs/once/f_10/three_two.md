# 订阅/发布 VS 观察者模式

订阅发布总被成为观察者模式,但是他们还是有一定的区别的

## 订阅/发布模式代码

```js
class A {
  constructor() {
    // 存储事件
    this.callbacks = {};
  }
  $on(name, fn) {
    (this.callbacks[name] || (this.callbacks[name] = [])).push(fn);
  }
  $emit(name, arg) {
    let cbs = this.callbacks[name];
    if (cbs) {
      cbs.forEach(v => {
        v.call(this, arg);
      });
    }
  }
  $off(name) {
    this.callbacks[name] = null;
  }
}

var a = new A();

// 绑定事件
a.$on("event", function(arg) {
  console.log("事件1", arg);
});

a.$on("event2", function(arg) {
  console.log("事件2", arg);
});

// 触发事件
a.$emit("event", { name: "sh" });

// 取消事件
a.$off("event");

// 取消之后尝试触发事件
a.$emit("event", { name: "sh" });

```

## 总结

* 最主要的区别是: 在订阅发布模式有一个调度中心,而观察者模式是没有调度中心的,观察者可以知道发布者,发布者一直记录着观察者

* 在发布订阅模式中，组件是松散耦合的，正好和观察者模式相反。

* 观察者模式大多数时候是同步的，比如当事件触发，Subject就会去调用观察者的方法。而发布-订阅模式大多数时候是异步的（使用消息队列）

* 举个俗一些的例子 `window.addEventListener('xxx',function(){xxx})` 事件的监听就是观察者模式,在vue中 `$on和$emit` 就是典型的发布订阅模式或者`socket.io`中的`$on和$emit`也是发布订阅模式

