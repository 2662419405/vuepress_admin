# git学习

工作流程

## 概念

工作区(写代码的地方)

> git add

暂存区(临时的存储)

> git commit

本地库(历史版本)

## 初级操作

- git status     //状态查看
- git add		//添加到暂存区
- git rm --cached    //移除暂存区
- git commit -m 'xx'	  //提交到本地库

## 版本操作

- git log 命令可以显示所有提交过的版本信息
- git reflog 可以查看所有分支的所有操作记录（包括已经被删除的 commit 记录和 reset 的操作）
- git reset --hard xxx 索引值
- git reset --hard HEAD^ 版本回退一次^^^退三步
- git reset --hard HEAD~3   版本回退三步



## reset命令的三个参数对比 

- --soft        仅仅在本地库移动一下指针
- --mixed     在本地库移动HEAD指针,重置暂存区
- --hard       在本地移动HEAD指针,重置暂存区,重置工作区



## 查找删除的文件

- 查找永久删除的文件
  - git reset --hard 版本回退
- 添加到暂存区的文件找回
  - git reset --hard HEAD
- 前提: 删除前,文件的改动保存在本地库了
- 操作: git reset --hrad[指针位置]



## 对比文件

- diff                       是工作区和暂存区比较
- diff HEAD            是工作区和本地库比较



## 分支管理

- 命名一采用`feature`开头,代表功能

## 分支的具体操作

- git branch -v 查看分支版本
- git branch xxx  创建分支
- git checkout name  选择分支
- 合并分支
  - 切换到接受修改的分支上
  - 执行 git merge 被合并的分支上

## 解决冲突

- 首先产生的原因是: 两个分支的内容发生了冲突
- 解决方式
  - 编辑文件,删除特殊符号
  - 把文件修改到满意的程度
  - git add [filename]
  - git commit -m '提交信息'
  - **git commit 不能写文件名字,必须和上面相符**



## 基本原理分析

## 哈希

- 不管输入量多大,他得到的加密结果长度是固定
- 输入唯一的一个明文,可以得到唯一的密文
- 输入的明文差异很小,变化很大
- 不可逆的



## `github`使用

- git remote -v                        查看远程库
- git remote add origin(别名) https://xxxxxxxx地址              创建连接

## 远程分支操作

- git push origin master   //推送分支,远程库别名,分支名

## 克隆仓库

- 下载到本地
- 创建origin远程地址别名
- 初始化本地库

## 多人开发

- 某个项目->setting->Collaborators->选择某个用户
- 用户就会接收到邀请,同意之后就可以加入到推送中

## 拉取仓库

- pull = merge + fetch             拉取,等于下面两个命令
  - fetch  远程地址名  远程分支名      只是抓取下来,并没有合并
  - merge origin/master    合并文件

## git工作流程

## 集中式工作流

## `GitFlow`(最常用)

- 通过分支去解决开发
- hotfix 一般是解决bug
- develop 开发
- feature_xxx 功能分支,基于develop开发
- release 完成功能前的最终测试

## Forking

