# Bootstarp 笔记文档

::: tip 提示
bootstrap 学习过程较少,整合的笔记也不是很完善, 欢迎更多的人来参与修改 :tada:
:::

## 前言

> Bootstrap是由Twiter得Mark Otto和jacob Thomton开发得、bootstrap是2011年八月在GitHub上发布得开源产品，是目前最受欢迎得前端框架之一。Bootstrap是基于HTML、CSS、JAVASCRIPTde ,它简洁灵活，使得Web开发更加快捷。

* 优势：

1. 移动设备优先：自Bootstrap3起，框架包含了贯穿于整个库的移动优先的样式。
2. 浏览器支持：所有得主流浏览器都支持Bootstrap，（IE8及以上）
3. 容易上手：只要您具备HTML和CSS得基础知识，您就可以开始学习Bootstrap。
4. 响应式设计：Bootstrap得响应式css能够自适应于台式机、平板电脑和手机，更多有关响应式设计的内容详见Bootstrap响应式设计。
5. 为开发人员创建接口提供了一个简洁统一得解决方案。
6. 包含了功能强大得内置组件，易于定制。
7. 提供了基于Web得定制。

## 安装过程

> bootstarp官网文档-> <a href="https://v3.bootcss.com/getting-started/">官网</a>,

1. 通过CDN方式加载

```js
<!-- 最新版本的 Bootstrap 核心 CSS 文件 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

<!-- 可选的 Bootstrap 主题文件（一般不用引入） -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

<!-- 最新的 Bootstrap 核心 JavaScript 文件 -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
```

2. 通过 Bower 进行安装

```js
$ bower install bootstrap
```

3. 通过 npm 进行安装

```js
$ npm install bootstrap@3
```

* 基本Demo样例

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
    <title>Bootstrap 101 Template</title>

    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- HTML5 shim 和 Respond.js 是为了让 IE8 支持 HTML5 元素和媒体查询（media queries）功能 -->
    <!-- 警告：通过 file:// 协议（就是直接将 html 页面拖拽到浏览器中）访问页面时 Respond.js 不起作用 -->
    <!--[if lt IE 9]>
      <script src="https://cdn.jsdelivr.net/npm/html5shiv@3.7.3/dist/html5shiv.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/respond.js@1.4.2/dest/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
    <h1>你好，世界！</h1>

    <!-- jQuery (Bootstrap 的所有 JavaScript 插件都依赖 jQuery，所以必须放在前边) -->
    <script src="https://cdn.jsdelivr.net/npm/jquery@1.12.4/dist/jquery.min.js"></script>
    <!-- 加载 Bootstrap 的所有 JavaScript 插件。你也可以根据需要只加载单个插件。 -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js"></script>
  </body>
</html>
```

::: danger 警告
Bootstrap得所有JavaScript插件都依赖jquery，因此jquery必须在Bootstrap之前引入
:::

## 使用

### css样式

::: tip 提示
下面标注有*的代表重点内容,请重点掌握
:::

#### 栅格系统 <font color="ff0000">*</font>

1. 移动设备优先:添加<meta name="viewport" content="width=device-width,initial-scale=1">
   
2. 布局容器:container 固定宽度居中并且响应式布局 container-fluid占据100%宽度
3. 栅格系统:会根据视口把一行分为12列
4. 媒体查询:@media 超小屏幕  小于768px  小屏幕 大于等于768px 中等屏幕992px 大屏幕 大于等于1200px;
5. 栅格参数:从小到大  col-xs-  col-sm-  col-md-  col-lg-
6. 多余的列将另起:当一个row的列大于12个，包含多余列的元素将作为一个整体另起一行
7. 响应式列重置:在某些阈值时，某些列可能会出现比别的列高的情况。为了克服这一问题，建议联合使用 .clearfix
8. 列偏移:col-md-offset-*(具体填写某个数字)可以将列向右进行偏移
9.  列嵌套:可以通过给一个column再次添加一个row，在row内可以填写column，但是必须满足column的特性
10. 列排序:col-md-pull-*(左) 和 col-md-push-*(右) 改变列的顺序,原理是向左和向右进行偏移

#### 排版

1. 标题:除了使用h1到h6还可以给div添加h1到h6达到同样的效果 标题内还可以包含small 或.small的div
   
2. 页面主体:bootstarp将font-size设置为14px; line-height:1.428行高 p元素被设置了1/2行高的底部外边距
3. 被删除的文本:del
4. 无用文本:s
5. 插入文本:ins
6. 带下划线的文本:u
7. 着重:strong
8. 斜体:em
9.  改变大小写:text-lowercase,text-uppercase,text-capitalize
10. 缩短语:abbr 添加title可以添加虚下划线和鼠标停留?显示

#### 代码

1. 内联代码:code标签让内容呈现代码显示
   
2. 用户输入:kbd 标签标记用户通过键盘输入
3. 代码块:pre  内部的尖括号尽量使用&lt &gt
4. 变量:var 标记变量
5. 程序输出: samp标记输出内容

#### 表格 <font color="ff0000">*</font>

1. 基本表格:给table添加.table类赋予基本的样式
   
2. 条纹状表格:通过给table添加.table-striped可以给tbody之内的元素添加斑马纹样式(建立在.table之上)
3. 带边框的表格:通过给table添加.table-bordered可以每个单元格添加边框
4. 鼠标悬停:可以给th,td,tr添加.table-hover 让 tbody内的元素做出响应
5. 紧缩表格:通过.table-condensed可以让表格紧凑，padding均会减半
6. 状态类: .active停留样式 .success添加成功 .info普通的提示 .warning添加警告 .danger添加危险
7. *响应式表格:给table添加table-responsive元素(小屏幕滚动，大屏幕显示)

#### 表单 <font color="ff0000">*</font>

1. 基本使用:一个div的class是form-group 内部套一个label for属性指定下一个input的id input添加.from-control
   
2. 内联表单:给form添加form-inline可以使内容左对齐并且表现为inline-block级别元素(需要手动设置宽度)(尽量使用label)
3. 样式添加:button添加.btn 再添加一个特殊的btn进行美化   
4. *在外层添加一个div class为input-group  在一个input左右添加一个div 给div添加input-group-addon可以给头部或者尾部添加小图片
5. *水平排列的表单; 给form添加form-horizontal类,并且配合了栅格布局，可以将label和控件组水平并排列布局(使用form-group就不需要row)
6. 多选和单选框:通过在外层套用一个div div的样式为radio或checkbox
7. 内联单选和多选框:通过给套一个label label的样式是:checkbox-inline或radio-inline
8. 下拉列表:通过给select添加一个form-control进行样式的整改（添加multiple的select控件，可以实现多选）
9. 静态控件:如果需要文本和label元素同在一行，给p元素添加.form-control-static即可
10. 焦点状态:添加:focus状态
11. 禁用状态:为输入框设置disabled属性
12. 只读状态:为输入框设置readonly属性
13. 校验状态:如error，success，warning状态,使用时，添加has-warning .has-success .has-error 到这些控件的父元素上即可 任何包含在此元素之内的 .control-label .form-control元素都展示效果
14. *校验状态2:添加图标 给父元素添加 has-feedback   子元素的span中使用glyphicon glyphicon-sign form-control-feedback
15. 控件尺寸:为控件组添加 input-lg可以增大输入框 input-sm减小输入框

#### 按钮

1. 可被作为按钮使用的标签元素 a button input
   
2. 超链接被设置为按钮时:务必设置为: role="button"
3. 预定义样式:btn-default默认 btn-primary首选项 btn-success 成功 info一般信息 warning警告 danger危险 btn-link 连接 (必须建立在btn之上)
4. 按钮尺寸:btn-xs btn-sm btn-lg 从小到大
5. 块级元素:给按钮添加 btn-block类可以将其拉伸至父元素100%
6. 激活状态:添加active的class属性
7. 禁用状态:为button元素添加disabled 

#### 图片

1. 响应式图片:通过为图片添加.img-responsive类让图片支持响应式布局，居中使用.center-block 而不是 .text-center
   
2. 图片形状:通过给图片添加 img-circle圆形 img-rounded方形 img-thumbnail带标准的方形结构

#### 辅助类

1. 情景文本颜色:text-muted text-primary text-success text-info text-warning text-danger
   
2. 情景背景色: bg-primary bg-success bg-info bg-warning bg-danger
3. 关闭按钮:为button添加为close的class类
4. 三角符号:为span添加为caret的class类
5. 快速浮动:为div添加pull-right或pull-left两个类 通过!important来明确css的优先级
6. 让内容块居中:为div添加center-block
7. 清除浮动:为div添加clearfix类可以清除浮动
8. 显示或隐藏内容:为div添加.show和.hidden类可以强制显示或隐藏
9.  图片替换:通过给元素添加.text-hide类可以将元素的元素内容替换为一章背景图

::: tip 提示
:100: 做到这里就已经完成了一半,坚持住
:::

### 组件

#### Glyphicons字体图标
	
1. 通过给span标签加入一个glyphcions 和 glyphicons-等等类

#### 下拉菜单 <font color="ff0000">*</font>

1. 使用方式下拉菜单和上拉菜单都需要  在class为dropup的div中嵌套,button指定一个data-toggle属性,属性为dropdown指定一个aria-haspopup属性为true指定一个aria-expanded属性为false,在下方指定ul他的class指定为dropdown-menu
   
2. 对齐:添加dropdown-menu-right 或 left 可以让菜单左右对齐
3. 标题:在下拉菜单的li添加一个class为dropdown-header的样式
4. 分割线:在下拉菜单的li添加一个class为divider的样式
5. 禁用的菜单项:在下拉菜单的li添加一个class为disabled的样式

#### 按钮组

1. 基本使用:在父元素中添加一个btn-group 子元素使用class为btn的属性
   
2. 按钮工具栏:在`<div class="btn-group">`组合进一个`<div class="btn-toolbar">`
3. 尺寸:在btn的父元素中添加btn-group-lg等等可以改变整组的样式
4. 嵌套:把按钮和下拉菜单混合使用,只需把.btn-group放入另外一个btn-group

#### 导航

1. 基本使用:导航条都依赖一个.nav的类
   
2. 标签页:给ul基类添加一个nav-tabs  通过给一个li设置active表示他为激活状态
3. 胶囊式标签:给ul基类添加一个nav-pills  通过给一个li设置active表示他为激活状态
4. 垂直分布的胶囊标签:添加一个nav-stacked
5. 带下拉菜单的标签页:在一个li内部添加一个下拉菜单drodown等等

#### 导航条 <font color="ff0000">*</font>

1. 基本使用:在父元素中套用一个navbar navbar-deafault （导航条会占满整个父元素）
   
2. *商标的使用:在nav的前面添加一个div，class为navbar-header，里面嵌套一个a标签，a标签的class为navbar-brand,（内部还可以嵌套一个img）
3. 表单:在form内添加navbar-form即可
4. 按钮:在默认的按钮上面添加narvar-btn可以在导航条中垂直分布
5. 文本:吧文本包裹在class为navbar-text的p标签中就可以解决
6. *组件排列:通过添加   navbar-right  navbar-left  类似于pull-left和pull-right
7. 固定在顶部:添加 navbar-fixed-top 类可以让导航条固定在顶部
8. 固定在底部:添加 navbar-fixed-bottom 类可以让导航条固定在底部
9.  *静止在顶部:通过添加 navbar-static-top 类可以让导航条随着页面往下滚动而消失
10. 反色的导航条:通过添加 .navbar-inverse可以改变导航条的外观（就不需要navbar-default）
11. **全栈导航条:在navbar-header里面的按钮中,给按钮添加一个navbar-toggle可以让他向右浮动,添加data-toggle属性指定为:collapse，添加data-target属性指定为:一个选择器,下面的div（也就是列表的父元素）添加collapse属性，navbar-collapse属性,navbar-responsive

#### 路径导航

1. 在一个带有层次的导航结构中标明当前页面的位置(类似于 home \ html \ body)
   
2. 使用方式:在一个ul或ol等元素中添加class为breadcrumb

#### 分页

1. 基本使用:在ul等父元素中添加class为pagination
   
2. 禁用和激活状态:分别设置在li上active和disabled
3. 尺寸: pagination-lg 和 pagination-sm等等可供选择
4. 对齐分页:父元素中添加class为pager 内部li添加 class 为 next 和 previous

#### 徽章

1. 基本使用:给导航或连接的li中嵌套`<span class="badge">`可以很醒目的展示新的或未读的信息

#### 警告框

1. 基本使用:通过给div添加alert和四个特殊的类,例如:alert-success
   
2. 可关闭的警告框:给div再添加一个alert-dismissible(务必给button元素添加 data-dismiss="ture" 的属性)
3. 警告框的链接:使用 alert-link 通过添加在a标签之上，不能给li添加

#### 进度条 <font color="ff0000">*</font>

1. 基本使用:给div添加progress 内部添加div class为 progress-bar 通过给他设置width:百分比来实现进度的多少(还可以设置aria-valuenow,aria-valuemin,aria-valuemax等等信息)
   
2. 注意事项:如果在展示很低的时候，还想让文本能够清晰可见，需要给他设置min-width的属性 (style="min-width:2em")
3. 不同情景的进度条变化:给内部的div设置progress-bar-success(info,warning,danger等等信息)
4. *条纹效果:通过给内部div设置progress-bar-striped
5. *动画效果:在原有的条纹效果之上，再次添加一个active
6. 堆叠效果:吧多个进度条(progress-bar)放入同一个progress中，就可以呈现出堆叠的效果

#### 列表组

1. 基本使用:给父元素添加list-group 子元素使用 list-group-item
   
2. 情景模式:在list-grou-item的基础之上再次添加 list-group-item-success,info,danger,warning等等都可以
3. 内嵌徽章:在li内部使用span标签，class为badge实现 
4. 激活禁用:可以添加active和disable两种方式设置为激活或禁用