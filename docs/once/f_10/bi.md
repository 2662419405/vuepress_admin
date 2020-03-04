# 7.什么是BFC？BFC的布局规则是什么？如何创建BFC？

## 原理

Box 是 CSS 布局的对象和基本单位，页面是由若干个Box组成的。

是页面的一块渲染区域，并且有一套渲染规则，决定了其子元素将如何定位，以及和其它元素的关系和相互作用。

## BFC布局规则

* BFC内，盒子依次垂直排列。

* BFC内，两个盒子的垂直距离由 margin 属性决定。属于同一个BFC的两个相邻Box的margin会发生重叠【符合合并原则的margin合并后是使用大的margin】

* BFC的区域不会与float box重叠。

* BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。

* 计算BFC的高度时，浮动元素也参与计算。

## 如何创建BFC

* 根元素

* 浮动元素（float 属性不为 none）

* position 为 absolute 或 fixed

* overflow 不为 visible 的块元素

* display 为 inline-block, table-cell, table-caption

## BFC 的应用

防止 margin 重叠 (同一个BFC内的两个两个相邻Box的 margin 会发生重叠，触发生成两个BFC，即不会重叠)

清除内部浮动 (创建一个新的 BFC，因为根据 BFC 的规则，计算 BFC 的高度时，浮动元素也参与计算)

自适应多栏布局 (BFC的区域不会与float box重叠。因此，可以触发生成一个新的BFC)
