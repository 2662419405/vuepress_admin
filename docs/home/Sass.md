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

## 3.导入sass文件

* css有一个特别不常用的特性，即`@import`规则，它允许在一个css文件中导入其他css文件。然而，后果是只有执行到`@import`时，浏览器才会去下载其他css文件，这导致页面加载起来特别慢。
* sass也有一个@import规则，但不同的是，sass的@import规则在生成css文件时就把相关文件导入进来。这意味着所有相关的样式被归纳到了同一个css文件中，而无需发起额外的下载请求。另外，所有在被导入文件中定义的变量和混合器 均可在导入文件中使用。

```css
@import "colors";
@import "mixins";
@import "grid";
/*你甚至可以省略后缀名*/
/*举例来说，@import"sidebar";这条命令将把sidebar.scss文件中所有样式添加到当前样式表中。 
*/
colors.scss
mixins.scss
grid.scss
```

### 3.1 使用SASS部分文件

* 本节将介绍<font color="#f00">如何使用sass的@import来处理多个sass文件。</font>首先，我们将学习编写那些被导入的sass文件，因为在一个大型sass项目中，这样的文件是你最常编写的那一类。接着，<font color="#f00">了解集中导入sass文件的方法，使你的样式可重用性更高</font>，包括声明可自定义的变量值，以及在某一个选择器范围内导入sass文件。最后，介绍<font color="#f00">如何在sass中使用css原生的@import命令。</font>
* <font color="#f00">有些sass文件用于导入，你并不希望为每个这样的文件单独地生成一个css文件。对此，sass用一个特殊的约定来解决。</font>

* 当通过`@import`把sass样式分散到多个文件时，你通常只想生成少数几个css文件。那些专门为`@import`命令而编写的sass文件，并不需要生成对应的独立css文件，这样的sass文件称为局部文件。对此，sass有一个特殊的约定来命名这些文件。
* <font color="#f00">此约定即，sass局部文件的文件名以下划线开头。这样，sass就不会在编译时单独编译这个文件输出css，而只把这个文件用作导入。当你`@import`一个局部文件时，还可以不写文件的全名，即省略文件名开头的下划线。举例来说，你想导入`themes/_night-sky.scss`这个局部文件里的变量，你只需在样式表中写`@import "themes/night-sky";`。</font>
* 局部文件可以被多个不同的文件引用。当一些样式需要在多个页面甚至多个项目中使用时，这非常有用。在这种情况下，有时需要在你的样式表中对导入的样式稍作修改，sass有一个功能刚好可以解决这个问题，即默认变量值。

### 3.2 默认变量值

* 一般情况下，你反复声明一个变量，只有最后一处声明有效且它会覆盖前边的值。
* 超链接的color会被设置为red。这可能并不是你想要的结果，假如你写了一个可被他人通过@import导入的sass库文件，你可能希望导入者可以定制修改sass库文件中的某些值。<font color="#f00">使用sass的!default标签可以实现这个目的。</font>它很像css属性中!important标签的对立面，不同的是!default用于变量，含义是：<font color="#f00">如果这个变量被声明赋值了，那就用它声明的值，否则就用这个默认值。</font>

```css
$link-color: blue; 
$link-color: red;
a { color: $link-color; } 

$link-color: blue; $link-color: red;
a { color: $link-color; } 
```

* 如果用户在导入你的sass局部文件之前声明了一个`$fancybox-width`变量，那么你的局部文件中对`$fancybox-width`赋值`400px`的操作就无效。如果用户没有做这样的声明，则`$fancybox-width`将默认为`400px`。

### 3.3 嵌套导入

* 跟原生的css不同，sass允许`@import`命令写在css规则内。这种导入方式下，生成对应的css文件时，局部文件会被直接插入到css规则内导入它的地方。举例说明，有一个名为`_blue-theme.scss`的局部文件，将他导入到一个CSS规则内，生成的结果跟在`.blue-theme`选择器里面写`_blue-theme.scss`文件的内容完全一样。

```css
aside {  
    background: blue;      	
    color: white; 
} 

.blue-theme {    	
    aside {  		
        background: blue; 
        color:#fff; 
    }
} 
```

* 被导入的局部文件中定义的所有变量和混合器，也会在这个规则范围内生效。这些变量和混合器不会全局有效，这样我们就可以通过嵌套导入只对站点中某一特定区域运用某种颜色主题或其他通过变量配置的样式。

### 3.4 原生的CSS导入

* 由于SASS兼容原生CSS，所以它也支持原生的CSS@import。尽管通常在sass中使用@import时，sass会尝试找到对应的sass文件并导入进来，但在下列三种情况下会生成原生的CSS@import，尽管这会造成浏览器解析css时的额外下载：
  * 被导入文件的名字以.css结尾；
  * 被导入文件的名字是一个URL地址（比如`http://www.sass.hk/css/css.css`），由此可用谷歌字体API提供的相应服务；
  * 被导入文件的名字是CSS的url()值。

* 也就是说你不可以用sass的@import直接就去导入一个原始的CSS文件，因为sass会认为你想用CSS原生的@import。所以这个情况时，你可以把原始的CSS文件改名为.scss 后缀，就可以直接导入了

## 4.静默注释

* 注释可以帮助你组织样式，但是你不希望每个浏览网站源码的人都能看到所有注释。
* 所以SASS提供了一种不同于CSS标准注释格式，即静默注释，其内容不会出现在生成的CSS文件中。
* 他的注释语法跟js中单行注释语法相同，以//开头,注释内容直到行末。
* 但实际上css的标准注释格式也可以在生成的css文件中抹去，当注释出现在原生CSS不允许的地方，如在css属性或选择器中,sass不知道该把他放在什么位置上的时候就会将这些注释抹去。

```css
body { 
	color: #333; // 这种注释内容不会出现在生成的css文件中 	
	padding: 0; /* 这种注释内容会出现在生成的css文件中 */ 
} 

body {
  color /* 这块注释内容不会出现在生成的css中 */: #333;
  padding: 1; /* 这块注释内容也不会出现在生成的css中 */ 0;
}
```

## 5.混合器

* 我们在做网页的时候总是有几处小小的样式是类似的，比如颜色或者字体。使用变量来统一处理是不错的选择。但是当样式变得越来越复杂的时候你需要大段大段的重用样式的代码，独立的变量就没有办法来应付这种情况了。所以你可以-通过sass的混合器来实现大段样式的重用
* 混合器通过@mixin标识符定义。
  * 这个标识符给一大段样式赋予一个名字，这样你就可以轻易地通过引用这个名字重用这段样式。
* 通过@include来使用这个混合器
  * @include调用会把混合器中的所有样式提取出来放在@include被调用的地方。

```css
/*混合器 rounded-corners*/
@mixin rounded-corners {
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
}
/*引用混合器 rounded-corners*/
.notice {
  background-color: green;
  border: 2px solid #00aa00;
  @include rounded-corners;
}
/*实际样式*/
.notice {
  background-color: green;
  border: 2px solid #00aa00;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
}
```

### 5.1何时使用混合器

* 由于混合器太好用，一不小心你可能会过度使用。大量的重用可能会导致生成的样式表过大，导致加载速度缓慢，所以我们通过这一节来讨论混合器的使用场景，避免滥用。

* 判断一组属性是否应该组合成一个混合器，一条经验法则就是你能否为这个混合器想出一个好的名字。如果你能找到一个很好的短名字来描述这些属性修饰的样式，比如`rounded-cornersfancy-font`或者`no-bullets`，那么往往能够构造一个合适的混合器。如果你找不到，这时候构造一个混合器可能并不合适。

* 混合器在某些方面跟css类很像。都是让你给一大段样式命名，所以在选择使用哪个的时候可能会产生疑惑。最重要的区别就是类名是在html文件中应用的，而混合器是在样式表中应用的。这就意味着类名具有语义化含义，而不仅仅是一种展示性的描述：用来描述html元素的含义而不是html元素的外观。而另一方面，混合器是展示性的描述，用来描述一条css规则应用之后会产生怎样的效果。

* 在之前的例子中，`.notice`是一个有语义的类名。如果一个html元素有一个`notice`的类名，就表明了这个html元素的用途：向用户展示提醒信息。`rounded-corners`混合器是展示性的，它描述了包含它的css规则最终的视觉样式，尤其是边框角的视觉样式。混合器和类配合使用写出整洁的html和css，因为使用语义化的类名亦可以帮你避免重复使用混合器。为了保持你的html和css的易读性和可维护性，在写样式的过程中一定要铭记二者的区别。

  

  有时候仅仅把属性放在混合器中还远远不够，可喜的是，sass同样允许你把css规则放在混合器中。

### 5.2 混合器中的CSS规则

* 混合器中不仅可以包含属性，也可以包含css规则，包含选择器和选择器中的属性

```css
@mixin no-bullets {
  list-style: none;
  li {
    list-style-image: none;
    list-style-type: none;
    margin-left: 0px;
  }
}

ul.plain {
  color: #444;
  @include no-bullets;
}

ul.plain {
  color: #444;
  list-style: none;
}
ul.plain li {
  list-style-image: none;
  list-style-type: none;
  margin-left: 0px;
}
```

* 混合器中的规则甚至可以使用sass的父选择器标识符&。使用起来跟不用混合器时一样，sass解开嵌套规则时，用父规则中的选择器替代&。
* 如果一个混合器只包含css规则，不包含属性，那么这个混合器就可以在文档的顶部调用，写在所有的css规则之外。如果你只是为自己写一些混合器，这并没有什么大的用途，但是当你使用一个类似于Compass的库时，你会发现，这是提供样式的好方法，原因在于你可以选择是否使用这些样式。

### 5.3 给混合器传参

* 混合器并不一定总得生成相同的样式。可以通过在@include混合器时给混合器传参，来定制混合器生成的精确样式。当@include混合器时，参数其实就是可以赋值给css属性值的变量。这种方式跟JavaScript的function很像：

```css
@mixin link-colors($normal, $hover, $visited) {
  color: $normal;
  &:hover { color: $hover; }
  &:visited { color: $visited; }
}
```

* 当混合器被@include时，你可以把它当作一个css函数来传参。如果你像下边这样写：

```css
a {
  @include link-colors(blue, red, green);
}

/*Sass最终生成的是：*/
a { color: blue; }
a:hover { color: red; }
a:visited { color: green; }
```

* 当你@include混合器时，有时候可能会很难区分每个参数是什么意思，参数之间是一个什么样的顺序。为了解决这个问题，sass允许通过语法$name: value的形式指定每个参数的值。这种形式的传参，参数顺序就不必再在乎了，只需要保证没有漏掉参数即可：

```css
a {
    @include link-colors(
      $normal: blue,
      $visited: green,
      $hover: red
  );
}
```

* 尽管给混合器加参数来实现定制很好，但是有时有些参数我们没有定制的需要，这时候也需要赋值一个变量就变成很痛苦的事情了。所以sass允许混合器声明时给参数赋默认值。

### 5.4 默认参数值

* 为了在@include混合器时不必传入所有的参数，我们可以给参数指定一个默认值。参数默认值使用$name: default-value的声明形式，默认值可以是任何有效的css属性值，甚至是其他参数的引用，如下代码：

```css
@mixin link-colors(
    $normal,
    $hover: $normal,
    $visited: $normal
  )
{
  color: $normal;
  &:hover { color: $hover; }
  &:visited { color: $visited; }
}

如果像下边这样调用：@include link-colors(red) $hover和$visited也会被自动赋值为red。
```

## 6.使用选择器继承来精简CSS

* 使用sass的时候，最后一个减少重复的主要特性就是选择器继承。选择器继承是说一个选择器可以继承为另一个选择器定义的所有样式。
* 通过@extend这个语法实现

```css
/*通过选择器继承继承样式*/
.error {
  border: 1px solid red;
  background-color: #fdd;
}
.seriousError {
  @extend .error;
  border-width: 3px;
}
```

* `.seriousError`将会继承样式表中任何位置为`.error`定义的所有样式。以`class="seriousError" `修饰的html元素最终的展示效果就好像是`class="seriousError error"`。相关元素不仅会拥有一个`3px`宽的边框，而且这个边框将变成红色的，这个元素同时还会有一个浅红色的背景，因为这些都是在`.error`里边定义的样式。

* `.seriousError`不仅会继承`.error`自身的所有样式，任何跟`.error`有关的组合选择器样式也会被`.seriousError`以组合选择器的形式继承

```css
/*.seriousError从.error继承样式*/
.error a{  //应用到.seriousError a
  color: red;
  font-weight: 100;
}
h1.error { //应用到hl.seriousError
  font-size: 1.2rem;
}

在class="seriousError"的html元素内的超链接也会变成红色和粗体。
```

### 6.1何时使用继承

* 想象一下你正在编写一个页面，给html元素添加类名，你发现你的某个类（比如说.seriousError）另一个类（比如说.error）的细化。你会怎么做？



* 你可以为这两个类分别写相同的样式，但是如果有大量的重复怎么办？使用sass时，我们提倡的就是不要做重复的工作。
* 你可以使用一个选择器组（比如说.error.seriousError）给这两个选择器写相同的样式。如果.error的所有样式都在同一个地方，这种做法很好，但是如果是分散在样式表的不同地方呢？再这样做就困难多了。
* 你可以使用一个混合器为这两个类提供相同的样式，但当.error的样式修饰遍布样式表中各处时，这种做法面临着跟使用选择器组一样的问题。这两个类也不是恰好有相同的 样式。你应该更清晰地表达这种关系。
* 综上所述你应该使用@extend。让.seriousError从.error继承样式，使两者之间的关系非常清晰。更重要的是无论你在样式表的哪里使用.error .seriousError都会继承其中的样式。

### 6.2 继承的高级用法

* 任何css规则都可以继承其他规则，几乎任何css规则也都可以被继承。大多数情况你可能只想对类使用继承，但是有些场合你可能想做得更多。最常用的一种高级用法是继承一个html元素的样式。尽管默认的浏览器样式不会被继承，因为它们不属于样式表中的样式，但是你对html元素添加的所有样式都会被继承。

```css
.disabled {
  color: gray;
  @extend a;
}
```

* 假如一条样式规则继承了一个复杂的选择器，那么它只会继承这个复杂选择器命中的元素所应用的样式。例如：`.s1 @extend .important .error`，那么`.important .error`和`h1.important.error`的样式都会被`.s1`所继承，但是`.important`或者`.error`下的样式则不会被继承。如果你希望`.s1`能够分别继承`.import`或者`.error`下的样式。

* 如果一个选择器序列（#main .seriousError）`@extend`另一个选择器（.error），那么只有完全匹配`#main .seriousError`这个选择器的元素才会继承`.error`的样式，就像单个类名继承那样。拥有`class="seriousError"`的`#main`元素之外的元素不会受到影响。
* 像`#main .error`这种选择器序列是不能被继承的。这是因为从`#main .error`中继承的样式一般情况下会跟直接从`.error`中继承的样式基本一致。

### 6.3 继承的工作细节

* 跟变量和混合器不同，继承不是仅仅用css样式替换@extend处的代码那么简单。
* 关于@extend有两个要点应该知道。
  * 跟混合器相比，继承生成的css代码相对更少。因为继承仅仅是重复选择器，而不会重复属性，所以使用继承往往比混合器生成的css体积更小。如果你非常关心你站点的速度，请牢记这一点。
  * 继承遵从css层叠的规则。当两个不同的css规则应用到同一个html元素上时，并且这两个不同的css规则对同一属性的修饰存在不同的值，css层叠规则会决定应用哪个样式。相当直观：通常权重更高的选择器胜出，如果权重相同，定义在后边的规则胜出。
* 混合器本身不会引起css层叠的问题，因为混合器把样式直接放到了css规则中，而继承存在样式层叠的问题。被继承的样式会保持原有定义位置和选择器权重不变。

### 6.4 使用继承的最佳实践

* 不要在css规则中使用后代选择器（比如.foo .bar）去继承css规则。如果你这么做，同时被继承的css规则有通过后代选择器修饰的样式，生成css中的选择器的数量很快就会失控：

```css
.foo .bar { @extend .baz; }
.bip .baz { a: b; }
```

* 在上边的例子中，sass必须保证应用到.baz的样式同时也要应用到.foo .bar（位于class="foo"的元素内的class="bar"的元素）。例子中有一条应用到.bip .baz（位于class="bip"的元素内的class="baz"的元素）的css规则。当这条规则应用到.foo .bar时，可能存在三种情况

```css
<!-- 继承可能迅速变复杂 -->
/*Case 1*/
<div class="foo">
  <div class="bip">
    <div class="bar">...</div>
  </div>
</div>
/*Case 2*/
<div class="bip">
  <div class="foo">
    <div class="bar">...</div>
  </div>
</div>
/*Case 3*/
<div class="foo bip">
  <div class="bar">...</div>
</div>
```

* 为了应对这些情况，sass必须生成三种选择器组合（仅仅是.bip .foo .bar不能覆盖所有情况）。如果任何一条规则里边的后代选择器再长一点，sass需要考虑的情况就会更多。实际上sass并不总是会生成所有可能的选择器组合，即使是这样，选择器的个数依然可能会变得相当大，所以如果允许，尽可能避免这种用法。

* 但是可以继承有后代选择器修饰规则的选择器，不管后代选择器多长，但有一个前提就是，不要用后代选择器去继承。



> 本文引自[sass中文网](https://www.sass.hk/)
