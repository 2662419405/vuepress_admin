# pm2使用

## pm2作用

* 内建负载均衡（使⽤Node cluster 集群模块、⼦进程，可以参考朴灵的《深⼊浅出node.js》⼀

* 线程守护，keep alive

* 0秒停机重载，维护升级的时候不需要停机.

* 现在 Linux (stable) & MacOSx (stable) & Windows (stable).多平台⽀持

* 停⽌不稳定的进程（避免⽆限循环）

* 提供 HTTP API

## 配置

```yml
npm install -g pm2
pm2 start app.js --watch -i 2
// watch 监听⽂件变化
// -i 启动多少个实例
pm2 stop all
pm2 list
pm2 start app.js -i max # 根据机器CPU核数，开启对应数⽬的进程
```

## 配置process.yml

```yml
apps:
 - script : app.js
 instances: 2
 watch : true
 env :
 NODE_ENV: production
```

* Keymetrics在线监控

<a href="https://id.keymetrics.io">https://id.keymetrics.io</a>

```yml
pm2 link 8hxvp4bfrftvwxn uis7ndy58fvuf7l TARO-SAMPLE
```

* pm2设置为开机启动

```yml
pm2 startup
```