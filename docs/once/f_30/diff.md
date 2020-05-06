# react diff 原理

diff（翻译差异）：计算一棵树形结构转换成另一棵树形结构的最少操作

　　1）把树形结构按照层级分解，只比较同级元素

　　2）给列表结构的每个单元添加唯一的 key 属性，方便比较

　　3）React 只会匹配相同 class 的 component（这里面的 class 指的是组件的名字）

　　4）合并操作，调用 component 的 setState 方法的时候, React 将其标记为 dirty.到每一个事件循环结束, React 检查所有标记 dirty 的 component 重新绘制

　　5）选择性子树渲染。开发人员可以重写
