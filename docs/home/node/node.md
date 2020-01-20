# node入门

## 慕课网版本学习

> > 全局对象
> >
> > ```js
> > process.env 获取环境变量
> > process.argv 获取参数
> > __dirname  获取目录名
> > __filename  获取文件名
> > ```
> >
> > Path
> >
> > ```js
> > require('path')为导入
> > join()把对个路径进行拼接,不用担心系统的不同
> > resolve()可以对路径进行检测
> > path.base 可以修改路径的名字和后缀名
> > ```
> >
> > Fs
> >
> > ```js
> > require('fs')为导入
> > fs.readFile(path, [options] callback)   读文件
> > fs.writeFile(path, data, [options], callback)  写文件
> > fs.access(path, fs.constants.F_OK, callback) 判断文件是否存在
> > fs.stat(path)  获取文件的状态
> > fs.readdir(path, [options], callback) 读取文件夹
> > fs.isFile()  判断是否是一个文件
> > fs.isDirectory() 判断是否是一个文件夹
> > ```
> >
> > Npm 
> >
> > ```js
> > 	npm init [-y] 生成默认配置
> > --save 记录依赖
> > npm install vue@2.6.10 指定版本下载
> > npm uninstall react 卸载包
> > npm install 恢复包
> > npm info jquery 查看包的信息
> > npm docs react-native 查看包的文档
> > npm install create-react-app -g 全局安装
> > npm root -g 查看全局包的下载路径
> > npm install -g nrm 下载镜像管理工具
> > nrm use taobao   切换为淘宝镜像
> > ```
> >
> > http 
> >
> > ```js
> > 	特点:五个 最主要是 无状态,无连接
> > 分为响应和请求,再分为 头, 行, 体
> > http.createServer()  创建一个服务器对象
> > req.url 地址
> > req.method 方法
> > req.headers 响应头
> > res.setHeader(json) 写响应头
> > res.writeHead(200,{'content-type':'text/html;charset=utf-8'});  //写响应行
> > res.write() 写响应体
> > ```
> >
> > ##### MongoDB
> >
> > ```mongodb
> > 	show dbs 查看所有数据库
> > use xxx 使用某个数据库
> > show collections 查看所有集合
> > //查看数据
> > db.xxx.find()
> > //增加数据
> > db.xxx.insert()
> > db.xxx.save()   如果存在发生替换
> > //删除数据
> > db.xxx.drop()
> > db.user.aggregate([{
> >    $group:{
> >        _id:1,
> >        sumScore: { $avg:'$score' }
> >    }
> > }])    *其中id不能少,如果想要分组: id:'$xxx' 类似于Mysql的 group by 
> > ```
> >
> > ##### express 框架
> >
> > ```js
> > 	npm install express
> > express() 自调用生成一个server 
> > server.use('url', (req,res,next) )  是请求相对应的一件事,按照代码顺序来执行
> > next() 调用这个方法是执行下一件事的开关 
> > 后端路由
> > let router = express.Router()
> > router.get(虚拟目录, fn(req,res,next) );
> > server.use(router);
> > res.json 响应数据最常用,返回ajax数据
> > res.jsonp 跨域处理
> > res.download 下载
> > res.redirect 重定向
> > ```

##### Koa框架

> 
>
> 首先是安装
>
> ```js
> npm install koa
> ```
>
> 通过实例化`koa`
>
> ```js
> let app = new Koa();
> ```
>
> 调用koa
>
> ```js
> app.use( async (ctx)=>{} )
> ```
>
> 注意
>
> 在ctx中一般使用异步函数(ES8)关键字,并且配合Promise来使用
>
> #### `ctx.request`常用方法
>
> - `ctx.request.url`
> - `ctx.request.method`
> - `ctx.request.headers`
>
> #### `ctx.response`常用方法
>
> - `ctx.response.set`
> - `ctx.response.status`
> - `ctx.response.body`



### `MongoDB`

- 一个数据库对应多个集合

  - 一个集合对应多个文档对象
  - 在`mongo`中不论是db还是集合，你都无需去创建他
  - 直接就当他已经存在，直接Use来使用
    - use db名称;
      - 接着会被切换到该db中
      - `db.要创建的集合名称.save({})`;这样集合就被创建了

- __解决32位异常__
  `mongod --dbpath`="路径" `--journal --storageEngine=mmapv1`

  

- 1:启动服务器

  - `mongod --dbpath "D:/mongodb/db"` // 目录一定要存在自己创建随便名称‘
    - 尽量设置在非系统盘 `C盘生成目录是需要权限的`
  - 如果看到`waiting for connections on port 27017`说明服务已经启动

- 客户端连接服务器**另开一个命令行**

  - `mongo` 默认连接的是test数据库

- 查询有哪些数据库  

  - 查询数据库：`show dbs;`
  - 切换数据库: `use 数据库名;`

- 查询当前db下有哪些集合

  - `show collections;`

- 查询数据：

  - `db.集合名.find();`  //查询出来的是文档对象 document
  - `db.users.find();`

- 添加数据:

  - `db.集合名.save(对象)` //mongo默认会给我们加入_id作为该文档对象的唯一标识
  - `db.users.save({contry:'中国',name:'小明',score:77});`

- 删除数据:

  - `db.集合名.remove(条件对象);`//条件匹配就会被删除
  - `db.users.remove({name:'小明'});`
  - 如果给定一个空对像，会匹配全部

- 更新数据:

  - `db.集合名.update({匹配条件对象},{$set:{修改后的对象}});`
  - `db.users.update({name:'小明'},{$set:{contry:'印度'}});;`

#### 条件查询

```
练习：
  查询姓名为小明的学生
        db.users.find({name:'小明'});;   查询英语成绩大于90分的同学
        db.users.find({score:{$gt:90}}); //查找成绩大于90分$gt
        //$lt小于
 查询数学成绩不等于88的同学
        db.users.find({score:{$ne:88}});   查询总分大于200分的所有同学
        db.users.find({score:{$gt:200}});
```

#### 分页

- `db.users.find().skip(3).limit(3);`
- db.集合名称.find().跳到3.显示3条
      + limit 0,3

#### 排序

- `db.users.find().sort({key:排序方式});`
- `db.users.find().sort({'score':1});` //正数代表升序，负数代表降序

#### 模糊匹配

- `db.users.find({name:{$regex:'小'}});`
- `db.users.find({name:{$regex:'明'}});`

#### 聚合函数

- 需要求当前集合的记录数：
- `db.users.find().count();`
- 求最大值
  -求整个集合的总成绩
      + db.集合名.聚合({ 组的划分规则{_id:'1',显示内容:{$sum:'$score'}} })
  - 求所有人的平均分
    - `db.users.aggregate({$group:{_id:'1',sumscore:{$avg:'$score' } }});`
  - 求按国家分组，求所有国家的总分
    - `db.users.aggregate({$group:{_id:'$contry',sumScore:{$sum:'$score'}}});`
- 添加基础数据:
  db.users.save({contry:'中国',name:'小明',score:77});
  db.users.save({contry:'中国',name:'小红',score:88});
  db.users.save({contry:'中国',name:'小张',score:99});
  db.users.save({contry:'美国',name:'jack',score:45});
  db.users.save({contry:'美国',name:'rose',score:67});
  db.users.save({contry:'美国',name:'mick',score:89});



#### 联合查询

```js
db.orders.insert([
   { "_id" : 1, "item" : "almonds", "price" : 12, "quantity" : 2 },
   { "_id" : 2, "item" : "pecans", "price" : 20, "quantity" : 1 },
   { "_id" : 3  }
]);
db.inventory.insert([
   { "_id" : 1, "sku" : "almonds", description: "product 1", "instock" : 120 },
   { "_id" : 2, "sku" : "bread", description: "product 2", "instock" : 80 },
   { "_id" : 3, "sku" : "cashews", description: "product 3", "instock" : 60 },
   { "_id" : 4, "sku" : "pecans", description: "product 4", "instock" : 70 },
   { "_id" : 5, "sku": null, description: "Incomplete" },
   { "_id" : 6 }
]);
db.orders.aggregate([
   {
     $lookup:
       {
         from: "inventory",
         localField: "item",
         foreignField: "sku",
         as: "inventory_docs"
       }
  }
]);
```



#### 操作符

- https://docs.mongodb.com/manual/reference/operator/



#### 配置https

- 公钥  公开的加密方式
- 私钥  存在服务器的唯一解公钥加密的方式
- 签名  确保数据的一致性
- 证书  确保当前发送数据单位可信



```js
// 创建索引
 db.test.createIndex({"sp":"2dsphere"});

 db.test.insert({name:"A",sp:{type:"Point",coordinates:[105.754,41.689]} });
 db.test.insert({name:"B",sp:{type:"Point",coordinates:[105.304,41.783]} });
 db.test.insert({name:"C",sp:{type:"Point",coordinates:[105.084,41.389]} });
 db.test.insert({name:"D",sp:{type:"Point",coordinates:[105.831,41.285]} });
 db.test.insert({name:"E",sp:{type:"Point",coordinates:[106.128,42.086]} });
 db.test.insert({name:"F",sp:{type:"Point",coordinates:[105.431,42.009]} });
 db.test.insert({name:"G",sp:{type:"Point",coordinates:[104.705,41.921]} });
```



#### 查找附近的人

- ```js
  db.test.find(
    {
     sp:
       {
        $nearSphere :
          {
            $geometry: { 
              type: "Point",  
              coordinates:[105.304,41.783]
            },
            $minDistance: 25000,
            $maxDistance: 40000
          }
       }
   }
  )
  ```

#### 离我最近

- ```js
  db.test.aggregate({
        $geoNear: {
          near: { type: "Point", coordinates:[105.304,41.783]},
          distanceField: "dist.calculated",
          spherical:true,
          maxDistance: 40000
        }
     })
  ```

- 经纬度查询网站 

  - http://www.gpsspg.com/maps.htm

# 