# 用less和scss实现一个栅格系统

> 这里配置为12格的栅格系统

## sass

```js
@for $i from 1 to 13{
    .sh-col-#{$i}{
        width: $i / 12 * 100%;
    }
}
```

```js
@shan: 12;

.xun(@i) when (@i<=@shan) {
  .sh-col-@{i} {
    width: @i / @shan * 100%;
  }
  .xun(@i+1); // 变量增加
}

.xun(1);
```