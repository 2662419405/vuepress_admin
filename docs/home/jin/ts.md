# typescript

## 为什么要学习typescript

- 在实际开发中,我们无法保证 接受到的实参一定是我们指定好的类型,那么typescript就可以规定函数的参数类型,返回值类型进行规范等等
- 在typescript中,我们在编译期间就可以知道类型错误,不用运行是才知道,可以提高性能和开发
- 在angular里面,1更名为angularJS,2以上都称之为angularIO

## 快速起步

- 安装编译typeScript语法的js编译工具

  ```
  npm install -g typescript
  ```

- 编译代码

  ```ts
  function getUsername ( name:string ){
      return '你的名字是'+name;
  }
  let userName = getUsername('孙航');
  ```

## 变量类型

```ts
let isOK:boolean;//布尔类型
let str:string;//字符串类型
let num:number;//数字类型
let arr:number[];//数组
let all:any[];//任意类型数组
enum Color {Red, Green, Blue};
let c: Color = Color.Blue;//枚举类型
```

## 返回值类型

- 可以通过这种方式控制返回值的类型s

```ts
function getNum(n:number):string{
    return '你输入的类型是:'+n;
}
let result = getNum(1);
```

- null和undefined和void
  - void指的是没有返回值,一般来讲无需return
  - null 后台程序中,更多喜欢使用null类型来判断没有赋值的变量
  - undefined 描述为声明了,但是没有赋值的情况

## 类型问题

- 强制类型转换

  ```ts
  let myStr:any = '这是声明一个any类型';
  let str = <string> myStr;
  ```

- 另外的一种写法

  ```ts
  let myStr:any = '这是声明一个any类型';
  let str = myStr as string;
  ```

  

## Class类

------

## 基本使用(里面不要放let/const/var等等)

```ts
class Person{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }
    getInfo():Person{
        return this;
    }
}

let p1 = new Person('苏',12);
```

## 继承语句

```ts
class Student extends Person{}
new Student();
```

## 公共,私有与受保护的修饰符

```ts
class Animal{
    public name:string = 'abc';
}
new Animal().name;

```

- 默认的修饰符就是public
- private私有只能在class内部被访问(继承的子类也不允许访问)
- protected被保护的,可以在自己和子类中访问
- 访问修饰符与继承无关,只要符合修饰规则就可以访问

## 只读修饰符`readonly`

```ts
class Person{
    public readonly name:string = 'jack';
}
let add = new Person();
add.name = 'sh'; //错误!

```

## get/set存储器

```ts
class Person{
    public _age:number = 12;
    get age():number{
        return this._age;
    }
    set age(newAge:number){
        this._age = newAge;
    }
}

```

## static静态属性

```ts
class StaticMem {  
   static num:number; 
   
   static disp():void { 
      console.log("num 值为 "+ StaticMem.num) 
   } 
} 
 
StaticMem.num = 12     // 初始化静态变量
StaticMem.disp()       // 调用静态方法

```

- 静态不能访问实例
- 实例可以访问模板

------

## angular6

- angular历史版本 1/2/4/5/6/7
- angular历史版本09出版->angular.js



## 起步

1. 全局脚手架工具 npm install -g @angular/cli
2. 初始化项目 ng new xxx;
3. 打开默认浏览器 ng serve -open || -o



## 入口模块

1. main.ts
2. App模块: app.module.ts
3. app.component



## 常用指令介绍

- `*ngFor = let item of xxx`
  - *ngIf = '表达式'
  - xxx 是当前class的实例属性
- ['属性'] = "属性||表达式"    <=>    v-bind:属性
- (时间)="函数"      <=>      v-on:
- 双向数据绑定 [(ngModel)] = '属性名'

## 生成组件

```js
ng generate component heroes

```

## 组建的solt

- 传递一套组件

```html
<app-heroes num='1'>
  <h1 class="a">我是1</h1>
  <h2 b='c'>我是2</h2>
</app-heroes>

```

- 具名插槽

```html
<ng-content select='.a'></ng-content>
<ng-content select='[b=c]'></ng-content>

```

- **以上是类似于vue 的solt ,react中的this.props.children**

## 自定义指令

```html
<div appMyDir='123'>来点击我</div>

```

```typescript
import { Directive,Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyDir]'
})
export class MyDirDirective {
  @Input()appMyDir:string;
  constructor() { }
  @HostListener('click')
  onClick(){
    console.log(this.appMyDir);
  }
}

```

