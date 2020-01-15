## `npm`包管理工具

- npm可以理解为前端的maven,一个包的管理工具



### 1. 查看npm和node版本

```js
node -v 
npm -v
```



### 2. 初始化项目

`npm init`

- 默认配置初始化项目

`npm init -y`



### 3. 安装

#### 本地安装

`npm install <Module Name>@版本号`

#### 全局安装

`npm install <Module Name>@版本号 -g`

#### 指定版本

- ^ 插入号 + 指定版本号：比如 ^3.5.2 ，安装` 3.x.x `的最新版本（不低于 3.5.2），但是不安装 `4.x.x`**提升版本,不提升大版本**
- 指定版本号：比如 3.5.2 ，只安装指定版本
- ~ 波浪号 + 指定版本号：比如 ~3.5.2 ，安装 `3.5.x` 的最新版本（不低于 3.5.2），但是不安装 `3.6.x`**提升版本,不提升小版本**

#### 全局安装

- 如果你不知道`npm`的全局目录在哪,可以运行下面的命令

`npm root -g`

- 修改默认全局目录

`npm config set prefix "D:/npm"`

- 全局安装`vue`模板

`npm install vue -g`

- 查看全局安装的模板

`npm list -g`

#### 生产环境模块开发

- 生产环境依赖安装  (默认)

`npm install <Module Name>`[--save|S]

#### 开发环境模块开发

- 开发模块依赖安装

`npm install <Module Name>[--save-dev|D]`

#### 批量安装

`npm install`

or

`npm i`



### 4. 模板

#### 本地模板

- 查看所有模板

`npm list`

- 查看全局所有模板

`npm list -g`

- 查看指定模板

`npm list <Module Name>`

#### 远程模板

- 查看`jquery`的最新版本

`npm view jquery version`

- 查看`jquery`的全部版本

`npm view jquery versions`

#### 卸载模块

- 布局卸载

`npm install <Module Name>`

- 全局卸载

`npm install -g <Module Name>`



### 5.修改淘宝镜像

- 查看当前镜像地址

`npm get registory`

- 配置淘宝镜像

`npm config set registry https://registry.npm.taobao.org`

- 安装下载模块

` npm install <Module Name> `

- 还原默认镜像地址

`npm config set registry https://registry.npmjs.org/`