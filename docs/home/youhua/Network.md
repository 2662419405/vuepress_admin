# 网络传输层加速

:::tip

缓存一般分为强缓存和协商缓存，主要区别是：使用本地缓存的时候，是否需要向服务器验证本地缓存是否依旧有效。

:::

## 浏览器缓存

### 强缓存
主要通过 http 请求头中的 Cache-Control 和 Expire 两个字段控制

一般，我们会设置 Cache-Control 的值为“public, max-age=xxx”，表示在 xxx 秒内再次访问该资源，均使用本地的缓存，不再向服务器发起请求。

## 协商缓存
每次都向服务器验证一下缓存的有效性

## 前端缓存方案
* HTML：使用协商缓存
* CSS JS Image：使用强缓存，文件名带上 hash 值

浏览器默认的缓存是放在内存内的，但我们知道，内存里的缓存会因为进程的结束或者说浏览器的关闭而被清除，而存在硬盘里的缓存才能够被长期保留下去。很多时候，我们在 network 面板中各请求的 size 项里，会看到两种不同的状态：from memory cache 和 from disk cache，前者指缓存来自内存，后者指缓存来自硬盘。而控制缓存存放位置的，不是别人，就是我们在服务器上设置的 Etag 字段。在浏览器接收到服务器响应后，会检测响应头部（Header），如果有 Etag 字段，那么浏览器就会将本次缓存写入硬盘中。

## 资源打包压缩


:::tip

网络性能优化措施归结为三大方面：减少请求数、减小请求资源体积、提升网络传输速率

:::

```
gulp grunt webpack parcel
```

## 图片资源优化

:::tip

用过ngxin的人都知道,ngxin可以把文件设置为gzip压缩格式,但是图片不要设置gzip压缩!图片不要设置gzip压缩!图片不要设置gzip压缩!

:::

* 不要在 HTML 里缩放图像
* 使用雪碧图（CSS Sprite）- webpack-spritesmith
* 使用字体图标（iconfont）- icomoon
* 使用 WebP - 图片压缩体积大约只有 JPEG 的 2/3，并能节省大量的服务器带宽资源和数据空间


## 网络传输性能检测工具

Page Speed | PageSpeed Insights

## 使用 CDN

再好的性能优化实例，也必须在CDN的支撑下才能到达极致。

如果我们在Linux下使用命令$ traceroute targetIp 或者在Windows下使用批处理 > tracert targetIp，都可以定位用户与目标计算机之间经过的所有路由器，不言而喻，用户和服务器之间距离越远，经过的路由器越多，延迟也就越高。使用CDN的目的之一便是解决这一问题