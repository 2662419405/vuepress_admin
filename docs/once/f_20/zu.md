# Vue的组件传值(父子组件,同级组件,跨级组件)

## 父子组件

父 - 子 通过属性的形式
子 - 父 通过 this.$emit('')

## 同级组件 和 跨级组件

都是通过一个公共组件,一般称之为bus

> 实例

数据中心

```js
// store.js 作为中央仓库
import Vue from 'vue'
export default new Vue()
```

父组件

```vue
<template>
  <first/>
  <second/> 
</template>

<script>
import First from './first'
import Scond from './second'
export default {
    components: {First, Second}
}
</script>

父组件只是引入子组件， 不再作为中央仓库来过渡交互。
```

子组件1

```vue
<template>
    <div @click='hanleClick'>子组件1</div>
</template>

<script>
import Store from './store'

export default {
    name: 'first',
    methods: {
        handleClick() {
            Store.$emit('fromFirst', '来自子组件1的传值')
        }
    }
}
</script>
```

子组件2

```vue
<template>
    子组件2
  <div>{{secondInfo}}</div>
</template>

<script>
import Store from './store'
export default {
    name: 'second', 
    data() {
        return {
            this.secondInfo: null
        }
    },
  created(){
      Store.$on('fromFirst', (info) => {
          this.secondInfo = info
      })
  }
}
</script>
```
