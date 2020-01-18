# Sass笔记

::: tip Sass和Less

* Sass和Less都属于CSS预处理器；所谓CSS预处理器，就是**用一种专门的编程语言，进行** **Web** **页面样式设计，再通过编译器转化为正常的** **CSS** **文件，以供项目使用**。

:::

## 为什么要使用CSS预处理器？

> 既然要用就需要知道为什么要用，这样会增加用的积极性，才能用最高效的时间写出最棒的代码~

* **CSS语法不够强大，比如无法嵌套书写，导致模块化开发中需要书写很多重复的选择器；**
* **没有变量和合理的样式复用机制，使得逻辑上相关的属性值必须以字面量的形式重复输出，导致难以维护。**

## Sass与Less的不同之处

1. Sass需要安装Ruby环境Less引入文件
2. 从功能出发，Sass较Less略强大些
   * Sass有变量和作用域、函数概念、数据结构
3. Less与Sass处理机制不一样
   * Less是通过客户端处理的，Sass是通过服务端处理，相比较之下Less解析会比Sass慢一点
4. 关于变量在Less和Sass中的唯一区别就是Less用`@`，Sass用`$`

## Sass的优缺点

* 优点

  1.兼容CSS->Sass完全兼容所有版本的CSS

  2.可以在CSS中使用变量、简单的逻辑程序、函数等等在编程语言中的一些基本特性

  3.CSS更加简洁、适应性更强、可读性更佳，更易于代码的维护等诸多好处。

* 缺点

  css的文件体积和复杂度不可控、调试难度增加、成本等

## 环境搭建

Sass需要安装Ruby，但是为了方便这里只写出VSC插件

* 在商店搜索Sass 点击install安装即可 此插件可将.sass或.scss编译为css
* 在商店搜索Easy Sass 此插件可将.sass或.scss编译为.min.css，即压缩后

## sass与scss

有心的读者可能会注意到，在环境搭建里面提到了两个后缀名.sass和.scss，大家可能会问，这不是学的sass吗？后缀难道不就只有一种吗？怎么会有两种，下面跟大家阐述一下他们的区别

* **Sass** (Syntactically Awesome StyleSheets)，是由buby语言编写的**一款css预处理语言**，和html一样**有严格的缩进风格**，和css编写规范有着很大的出入，是**不使用花括号和分号的**，所以不被广为接受。 **Sass** 是一款强化 CSS 的辅助工具，是对 CSS 的扩展，它在 CSS 语法的基础上增加了**变量 (variables)、嵌套 (nested rules)、混合 (mixins)、继承(extend)、导入 (inline imports)** 等高级功能，这些拓展令 CSS 更加强大与优雅。使用 Sass 以及 Sass 的样式库（如 Compass）有助于更好地组织管理样式文件，以及更高效地开发项目， 其后缀是.sass。
* **SCSS** (Sassy CSS)，一款css预处理语言，SCSS 是 Sass 3 引入新的语法，其语法完全兼容 CSS3，并且继承了 Sass 的强大功能。也就是说，任何标准的 CSS3 样式表都是具有相同语义的有效的 SCSS 文件。SCSS 需要使用分号和花括号而不是换行和缩进。SCSS 对空白符号不敏感，其实就和css3语法一样，其后缀名是分别为 .scss。

* 总结：之所以不适用sass而使用scss就是因为sass有严格的缩进风格，而且不适用花括号和分号，这与css有很大出入，所以大家都会选择后者。

::: tip 友情提示

尽管我们使用sass编写css文件，但最终引入的是sass编译后的css或min.css，千万不要把sass文件直接引入，是不起任何作用的。

:::

## 1.使用变量

1. 可以把反复使用的css属性定义为变量，通过变量名来引用他们，无需重复书写这一属性值

2. Sass使用$符号来识别变量

```css
例如：
 $good:#ff0;
```

### 1.1 变量声明

Sass变量声明与css属性很像

例如：

* 任何可以作为css属性值的复制都可以作为sass的变量值，甚至是以空格分割的多个属性，如`$basic-border:1px solid black;`或者以逗号分隔多个属性值，`$plain-font: "Myriad Pro"`、`Myriad`、`Helvetica`、`"Liberation Sans"`、`Arial`和`sans-serif; sans-serif;`
* 与css属性不同，变量可以在css规则块定义之外存在。当变量定义在css规则块内，那么该变量只能在规则块内使用。

```css
/*编译前:*/
$nav-color: #F90; 
nav { 
	$width: 100px; 
	width: $width; 
	color: $nav-color; 
} 

/*编译后:*/
nav { 
width: 100px; color: #F90; 
} 
```

### 1.2 变量的引用

* 凡是css属性的标准值（比如说1px或者bold）可存在的地方，变量就可以使用。css生成时，<font color="#f00">变量会被它们的值所替代。</font>之后，如果你需要一个不同的值，<font color="#f00">只需要改变这个变量的值，则所有引用此变量的地方生成的值都会随之改变。</font>

```css
/*编译前:*/
$highlight-color: #F90;
.selected {
  border: 1px solid $highlight-color;
}
/*编译后*/
.selected {
  border: 1px solid #F90;
}
```

* <font color="#f00">在声明变量时，变量值也可以引用其他变量。</font>

```css
/*编译前:*/
$highlight-color: #F90;
$highlight-border: 1px solid $highlight-color;
.selected {
  border: $highlight-border;
}

/*编译后*/
.selected {
  border: 1px solid #F90;
}
```

### 1.3 变量名用中划线还是下划线分隔

* 在变量中的中划线与下划线是不区分的，如果你在声明的时候使用了中划线，在使用时使用了下划线是不影响整体的

```css
/*编译前*/
$link-color: blue;
a {
  color: $link_color;
}

/*编译后*/
a {
  color: blue;
}
```

## 2.嵌套CSS规则

* css中重复写选择器是非常恼人的。如果要写一大串指向页面中同一块的样式时，往往需要一遍又一遍地写同一个ID，但是在sass中你只需要写一遍就可以

```css
/*编译前*/
#content article h1 { color: #333 } #content article p { margin-bottom: 1.4em } #content aside { background-color: #EEE } 
/*编译后*/
#content { 
  article { 
	h1 { color: #333 } 
	p { margin-bottom: 1.4em } 
	} 
  aside { background-color: #EEE } 
} 
```

* 编译后的效果与最上面的是一致的，像俄罗斯套娃一样把里面嵌套的内容一个个打开

大多数情况下这种简单的嵌套都没问题，但是有些场景下不行，比如你想要在嵌套的选择器 里边立刻应用一个类似于：hover的伪类。为了解决这种以及其他情况，sass提供了一个特殊结构&。

### 2.1父选择器的标识符&

* 一般情况下，sass在解开一个嵌套规则时就会把父选择器（#content）通过一个空格连接到子选择器的前边（article和aside）形成（#content article和#content aside）。这种在CSS里边被称为后代选择器，因为它选择ID为content的元素内所有命中选择器article和aside的元素。但在有些情况下你却不会希望sass使用这种后代选择器的方式生成这种连接。
* 最常见的一种情况是当你为链接之类的元素写：hover这种伪类时，你并不希望以后代选择器的方式连接。比如说，下面这种情况sass就无法正常工作

```css
/*编译前*/
article a {       
     color: blue; 
     :hover { color: red } 
}
/*编译后*/
article a {
  color: blue;
}
article a :hover {
  color: red;
}
/*这意味着:hover并不是给a加的而是给里面的子元素加的
```

* 正确的做法是使用一个特殊的sass选择器，即父选择器，&，他能对于嵌套提供更好的控制，且可以放在任何一个选择器可以出现的地方。

```css
/*编译前*/
article a {        
	color: blue;
	&:hover { color: red } 
} 
/*编译后*/
article a { color: blue }
article a:hover { color: red }
```

<img src="https://raw.githubusercontent.com/Wangjiateng666/img/master/sass-1.png"/>

### 2.2 群组选择器的嵌套

* 在CSS里边，选择器h1h2和h3会同时命中h1元素、h2元素和h3元素。与此类似，.button button会命中button元素和类名为.button的元素。这种选择器称为群组选择器。群组选择器 的规则会对命中群组中任何一个选择器的元素生效。

例如：

```css
/*编译前*/
.container h1, .container h2, .container h3 { 
	margin-bottom: .8em
 }
/*编译后*/
.container {
  h1, h2, h3 {margin-bottom: .8em}
}
```

* 对于内嵌在群组选择器内的嵌 套规则，处理方式也一样

```css
/*编译前*/
nav, aside {
  a {color: blue}
}

/*编译后*/
nav a, aside a {color: blue}
```

* 处理这种群组选择器规则嵌套上的强大能力，正是sass在减少重复敲写方面的贡献之一。尤其在当嵌套级别达到两层甚至三层以上时，与普通的css编写方式相比，只写一遍群组选择器大大减少了工作量。
* 有利必有弊，你需要特别注意群组选择器的规则嵌套生成的css。虽然sass让你的样式表看上去很小，但实际生成的css却可能非常大，这会降低网站的速度。

### 2.3 子组合选择器和同层组合选择器：>、+和~

* 子组合选择器：>
* 同层相邻组合选择器：+
* 同层全体组合选择器：~

```css
/*编译前*/
article {
  ~ article { border-top: 1px dashed #ccc }
  > section { background: #eee }
  dl > {
    dt { color: #333 }
    dd { color: #555 }
  }
  nav + & { margin-top: 0 }
}

/*编译后*/
article ~ article { border-top: 1px dashed #ccc }
article > section{ background: #eee }
article dl > dt { color: #333 }
article dl > dd { color: #555 }
nav + article { margin-top: 0 }
```

### 2.4 嵌套属性

* 在sass中，除了CSS选择器，属性也可以进行嵌套。
* 嵌套规则：把属性名从中划线-的地方断开，在根属性后边添加一个冒号:，紧跟一个{ }块，把子属性部分写在这个{ }块中。就像css选择器嵌套一样，sass会把你的子属性一一解开，把根属性和子属性部分通过中划线-连接起来，最后生成的效果与你手动一遍遍写的css样式一样

```css
/*编译前*/
a {
  font: {
  weight: bold;
  size: 32px;
  family:微软雅黑;
  }
}

/*编译后*/
a {
    font-weight:bold;
    font-size:32px;
    font-family:微软雅黑;
}
```

```css
/*编译前*/
nav {
  border: 1px solid #ccc {
  left: 0px;
  right: 0px;
  }
}

/*编译后*/
nav {
  border: 1px solid #ccc;
  border-left: 0px;
  border-right: 0px;
}
```









