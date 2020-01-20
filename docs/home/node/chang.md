# node常用工具

> node 常用工具大整合
> 
> 1. pm2 解决了node不能多线
>
> 2. nvm 让你的电脑里安装很多个不同的node版本
>
> 3. nrm 快速管理你的npm,多个镜像源内切换
>
> 4. nodemon 监控node代码段是否更新,让代码重新运行

> 这些都是我个人平常总是使用的一些关于node的工具,不喜勿喷

## pm2

> 先声明对于线程的补充 我们引用官方的解释：线程可以独立运行的最小的CPU单位，可以在同一个进程里并发运行，共享该进程下的内存地址空间

都说js是单线程的语言,即使有很多工具的帮助,也改变不了单线程的一个特点,即使是使用了node之后

node的最大特点是异步I/O,node官网的几乎所有方法都提供了关于异步的使用方法,比如`dir.read(callback)`和`dir.readSync()`,但是node还是被很多人排挤的一部分原因是没办法多线程去运行node项目,但是pm2的诞生可以说是又极大的提升了node的地位,他可以充分利用cpu和内存的资源,让node发挥到了极致

关于pm2的常用命令

1. npm install pm2 -g 全局安装pm2
2. pm2 start xxx 运行某一个脚本
<fancybox>
<img src="https://cdn.jsdelivr.net/gh/2662419405/imgPlus/Snipaste_2019-12-31_14-48-16.png" />
</fancybox>
3. pm2 list 查看全部运行的node程序
<fancybox>
<img src="https://cdn.jsdelivr.net/gh/2662419405/imgPlus/Snipaste_2019-12-31_14-50-23.png" />
</fancybox>
4. pm2 stop <app_name|namespace|id|'all'|json_conf> 停止运行
<fancybox>
<img src="https://cdn.jsdelivr.net/gh/2662419405/imgPlus/Snipaste_2019-12-31_14-51-30.png" />
</fancybox>
4. pm2 delete <app_name|namespace|id|'all'|json_conf> 删除
<fancybox>
<img src="https://cdn.jsdelivr.net/gh/2662419405/imgPlus/Snipaste_2019-12-31_14-53-01.png" />
</fancybox>
5. pm2 reload all 重新加载所有的node线程
6. pm2 logs 查看所有日志
<fancybox>
<img src="https://cdn.jsdelivr.net/gh/2662419405/imgPlus/Snipaste_2019-12-31_14-55-41.png" />
</fancybox>

## nvm

> nvm是一种用来让你的电脑同时可以安装多个node版本,而且可以快速的切换各个node之间的版本,在开发的过程中,总会遇到一些要求node版本的特殊并且过分的理由,比如上次踩坑安装的easy-mock模拟的数据接口,竟然过分的要求node版本是1.8.x,太难了=-=

1. npm i -g nvm 全局安装nvm
2. nvm ls 查看电脑安装了几个版本的node
<fancybox>
<img src="https://cdn.jsdelivr.net/gh/2662419405/imgPlus/Snipaste_2019-12-31_14-59-21.png" />
</fancybox>
3. nvm install node 安装最新版本的node
4. nvm install 6.14.4 安装制定版本的node
5. nvm use 6.14.4 使用某个版本的node
<fancybox>
<img src="https://cdn.jsdelivr.net/gh/2662419405/imgPlus/Snipaste_2019-12-31_15-02-11.png" />
</fancybox>
6. nvm uninstall 6.14.1 卸载某个版本的node

> 还有很多高级的操作可以查看<a href="https://github.com/nvm-sh/nvm">官网</a>

## nrm

> nrm是一个用来快速切换pm2的,让你在多个镜像源之间来回穿梭

nrm常用命令

1. npm i -g nrm 全局安装nrm
2. nrm ls 查看有多少个镜像源
<fancybox>
<img src="https://cdn.jsdelivr.net/gh/2662419405/imgPlus/Snipaste_2019-12-31_15-09-49.png" />
</fancybox>
3. `nrm add <registry> <url> [home]`  添加一个镜像源
4. `nrm use <registry>`   使用某个镜像源
5. `nrm current`          当前在哪个镜像源
6. `nrm del <registry>`   删除某个镜像源
   
> 还有很多高级的操作可以查看<a href="https://github.com/Pana/nrm">官网</a>

## nodemon

> nodemon可以让你每次修改完js代码之后,只要保存之后,他就会重新加载这个代码段

1. npm install -g nodemon 全局安装nodemon
2. nodemon app.js   监控这个代码段

> 还有很多高级的操作可以查看<a href="https://github.com/remy/nodemon">官网</a>