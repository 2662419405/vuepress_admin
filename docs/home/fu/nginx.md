# nginx服务器基础

nginx是一款自由的、开源的、高性能的HTTP服务器和反向代理服务器；同时也是一个IMAP、POP3、SMTP代理服务器；nginx可以作为一个HTTP服务器进行网站的发布处理，另外nginx可以作为反向代理进行负载均衡的实现。

> :tada:个人的小总结,我是一个前端的小学生,我为何还要去学习服务器,node,还要nginx等等内容呢,有几点原因吧,第一点就是最近几年前端发展非常的快,以后前端的任务量可能会越来越大,大前端或者全栈这些词都在说明一些问题,所以也就变成了前端的一些必会技能了,第二点就是我们面试的时候总是被问到是否使用过某些后台语言技术或者使用过一些后台吗,那么公司也是为了让我们在开发的过程中能够更好的和后台的人员配合与交流,所以`nginx 很重要`,那么本网站就是我做的一个nginx的反向代理,接下里我们详细了解一下吧

## 特点

* 反向代理
* 负载均衡
* nginx简单实用

## 什么是代理?什么是正向,又为何有反向?

### 代理

关于代理

说到代理，首先我们要明确一个概念，所谓代理就是一个代表、一个渠道；

### 正向代理

在正常的情况下，国内的网络是访问不了google，youtobe的，但是如果我配置一个代理或者使用一个代理软件，就可以访问了。这个代理软件就是做了正向代理。就相当于是我们去商场买东西，但是商场里的东西都是代理的工厂的货，或者你也可以理解为现在流行的海外代购，那些海外代购的人就是帮我们的正向代理。 **我们的科学上网,也就是翻墙就属于一种正向代理**

<img src="//upload-images.jianshu.io/upload_images/658641-63f11a266a5d06ed.png?imageMogr2/auto-orient/strip|imageView2/2/w/554/format/webp" alt="正向代理" />

### 反向代理

反向代理就好像我们在淘宝购物,我们在一个非常大的连锁商家购买了食品(例如三只松鼠),然后我们就不需要去关心他们究竟怎么发货了,过几天我们的零售就收到了,其实他就是一个反向代理,我们下单的过程就像是发出了一个请求到他们的服务器上,然后他们会根据我们的地方去寻找最近的一个他们的代理商,让他们给我发货,如下

<img src="//upload-images.jianshu.io/upload_images/658641-154b36606222745d.png?imageMogr2/auto-orient/strip|imageView2/2/w/554/format/webp" alt="反向代理" />

**其他作用**: 反向代理在我们的生活中很重要,他可以帮助我们解决跨域问题,并且是比较流行的一种解决跨域的方法,(jsonp,代理,cors三种,这里面不说其他两种),跨域产生的原因就是我们的客户端发出了请求,并且是一个不同源的请求就会造成跨域,但是服务器发出的不同源请求就不会产生跨域问题,:egg:那么想到了一种思路,如果我们让我们的请求先发送到同源的服务器,然后通过这个服务器发送给另外一个不同源的服务器不就解决了吗?那么这个地方就是用了一个反向代理,在前端进行快速开发中很有用

### 正向+反向

通常情况下，我们在实际项目操作时，正向代理和反向代理很有可能会存在在一个应用场景中，正向代理代理客户端的请求去访问目标服务器，目标服务器是一个反向单利服务器，反向代理了多台真实的业务处理服务器。具体的拓扑图如下

<img src="https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy82MTUyNTk1LWYxZTdlZTA5MDdiZjJhMTUucG5nP2ltYWdlTW9ncjIvYXV0by1vcmllbnQvc3RyaXAlN0NpbWFnZVZpZXcyLzIvdy8xMjQw" alt="反向代理" />

### 总结

正向代理就是我们的请求发送到服务器之前有一个拦截,他帮我们发送请求了,正向代理更靠近客户端,对server透明

反向代理就是我们的请求已经发送到服务器了,服务器帮我们转发到了不同的地方,反向代理更靠近服务器,对client透明

## 负载均衡

### 为何要用到负载均衡

负载均衡是大型项目优化的一个必备点,例如某宝在双十一的时候,需要同时抵抗上千万人快速下单,这个访问量是非常可怕的,那么为何某宝可以抵抗的非常好呢?他们也使用了负载均衡,把他们的服务器复制几份,然后放到了不同的端口上,那么有的人访问可能他访问的就是网站1,有的人访问的就是网站2,再配合node做一个快速IO的中间层,就可以让同时下单量可以几何式的上升都没有问题,一个小的demo如下

### 如何使用负载均衡

1. 先去做两个一模一样的服务器

10001端口一个服务器

```js
const http = require('http');
const server = http.createServer((request,response)=>{
    response.end('10001')
})

server.listen('10001',()=>{
    console.log('服务器启动在10001端口上')
})
```

10002端口一个服务器

```js
const http = require('http');
const server = http.createServer((request,response)=>{
    response.end('10002')
})

server.listen('10002',()=>{
    console.log('服务器启动在10002端口上')
})
```

2. 配置一下我们的nginx

```js
worker_processes  1;

events {
    worker_connections  1024;
}


http {
   upstream  dalaoyang-server {
       server    localhost:10001;  //服务器1
       server    localhost:10002;  //服务器2
   }

   server {
       listen       10000;  //监听我们访问的端口
       server_name  localhost;

       location / {
        proxy_pass http://dalaoyang-server;   //指向我们上面的轮询的名字
        proxy_redirect default;
      }

    }

}
```

然后访问我们的10000端口就会发现,我们有时候会访问到10001,有时候会访问到10002

## nginx简单实用

nginx是一个功能非常强大的web服务器加反向代理服务器

在项目使用中，使用最多的三个核心功能是反向代理、负载均衡和静态服务器

这三个不同的功能的使用，都跟nginx的配置密切相关，nginx服务器的配置信息主要集中在nginx.conf这个配置文件中，并且所有的可配置选项大致分为以下几个部分

```js
main                                # 全局配置
 
events {                            # nginx工作模式配置
 
}
 
http {                                # http设置
    ....
 
    server {                        # 服务器主机配置
        ....
        location {                    # 路由配置
            ....
        }
 
        location path {
            ....
        }
 
        location otherpath {
            ....
        }
    }
 
    server {
        ....
 
        location {
            ....
        }
    }
 
    upstream name {                    # 负载均衡配置
        ....
    }
}
```

如上述配置文件所示，主要由6个部分组成：

* main：用于进行nginx全局信息的配置
* events：用于nginx工作模式的配置
* http：用于进行http协议信息的一些配置
* server：用于进行服务器访问信息的配置
* location：用于进行访问路由的配置
* upstream：用于进行负载均衡的配置

我平时多余服务器用的比较少,详细资料可以看下面,如果有问题欢迎讨论修改

**参考资料**

<a href="https://blog.csdn.net/tsummerb/article/details/79248015">CSDN使用大全</a> <br />

<a href="https://www.jianshu.com/p/4c250c1cd6cd">简书负载均衡</a>