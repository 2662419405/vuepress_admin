# 前端设计模式 

> 设计模式（Design Pattern）是套被反复使、多数知晓的、经过分类的、代码设计经验的 总结。 任何事情都有套路，设计模式，就是写代码中的常⻅套路， 有些写法我们用常都⼀直在使用



## 订阅**/**发布模式 （观察者） 

> pub/sub 这个应该⼤家⽤到最⼴的设计模式了， 
>
> 
>
> 在这种模式中，并不是一个对象调用另一个对象的方法，而是一个对象订阅另⼀个对象的 特定活动并在 
>
> 状态改编后获得通知。订阅者因此也成为观察者，而被观察的对象成为发布者或者主题。当发⽣了⼀个 
>
> 重要事件时候 发布者会通知（调用）所有订阅者并且可能经常已事件对象的形式传递消息

- 应用场景

  https://github.com/vuejs/vue/blob/dev/src/core/instance/events.js#L54 



## 单例模式 

> 单例模式的定义：保证一个类仅有一个实例，并提供一个访问它的全局访问点。实现的方法为先 
>
> 判断实例存在与否，如果存在则直接返回，如果不存在就创建了再返回，这就确保了一个类只有 
>
> 一个实例对象。

- 适⽤场景

一个单一对象。比如：弹窗，无论点击多少次，弹窗只应该被创建一次' 实现起来也很简 

单，用一个变量缓存即可

- 应用场景 

我们再element中的弹窗代码中，可以看到单例模式的实际案例 保证全局唯一性 

https://github.com/ElemeFE/element/blob/dev/packages/message-box/src/main.js#L79



## 策略模式 

> 策略模式的定义：定义一系列的算法，把他们一个个封装起来，并且使他们可以相互替换。 
>
> 策略模式的作用的就是将算法的使⽤算法的实现分离开来。 

一个基于策略模式的程序⾄少由两部分组成。第一个部分是一组策略类（可变），策略类封装了具体的 

算法，并负责具体的计算过程。第二个部分是环境类Context（不变），Context接受客户的请求，随后 

将请求委托给某一个策略类。要做到这一点，说明Context中要维持对某个策略对象的引用

举个栗子

奖金计算，绩效为 S 的人年 终奖有 4 倍工资，绩效为 A 的人年终奖有 3 倍工资，而绩效为 B 的人年终 

奖是 2 倍工资

```js
var calculateBonus = function( performanceLevel, salary ){ 

if ( performanceLevel === 'S' ){开课吧web全栈架构师 
return salary * 4; 
 } 

if ( performanceLevel === 'A' ){ 
return salary * 3; 
 } 

if ( performanceLevel === 'B' ){ 
return salary * 2; 
 } 
}; 

calculateBonus( 'B', 20000 ); // 输出:40000 

calculateBonus( 'S', 6000 ); // 输出:24000 
```

- 使用策略模式

```js
var strategies = { 
"S": function( salary ){ 
return salary * 4; 
 }, 

"A": function( salary ){ 
return salary * 3; 
 }, 

"B": function( salary ){ 
return salary * 2; 
 } 
}; 

var calculateBonus = function( level, salary ){ 
return strategies[ level ]( salary ); 
}; 

console.log( calculateBonus( 'S', 20000 ) );// 输出:80000 

console.log( calculateBonus( 'A', 10000 ) );// 输出:30000 
```

- 表单校验 

> 正常写法 

```js
var registerForm = document.getElementById( 'registerForm' ); 

registerForm.onsubmit = function(){ 

if ( registerForm.userName.value === '' ){ 

alert ( '⽤户名不能为空' ); 

return false; 

 }开课吧web全栈架构师 

if ( registerForm.password.value.length < 6 ){ 

alert ( '密码⻓度不能少于 6 位' ); 

return false; 

 } 

if ( !/(^1[3|5|8][0-9]{9}$)/.test( registerForm.phoneNumber.value ) ){ 

alert ( '⼿机号码格式不正确' ); 

return false; 

 } 

} 
```

- 使用策略模式 

```js
var strategies = { 

isNonEmpty: function( value, errorMsg ){ 

if ( value === '' ){ 

return errorMsg ; 

 } 

 }, 

minLength: function( value, length, errorMsg ){ 

if ( value.length < length ){ 

return errorMsg; 

 } 

 }, 

isMobile: function( value, errorMsg ){ // ⼿机号码格式 

if ( !/(^1[3|5|8][0-9]{9}$)/.test( value ) ){ 

return errorMsg; 

 } 

 } 

}; 

var Validator = function(){ 

this.cache = []; // 保存校验规则 

}; 

Validator.prototype.add = function( 

var ary = rule.split( ':' ); 

this.cache.push(function(){ // 

var strategy = ary.shift(); 

ary.unshift( dom.value ); 

ary.push( errorMsg ); // 

return strategies[strategy].apply(dom, ary); 

 }); 

}; 

Validator.prototype.start = function(){ 

for ( var i = 0, validatorFunc; validatorFunc = this.cache[ i++ ]; ){ 

var msg = validatorFunc(); // 开始校验，并取得校验后的返回信息 

if ( msg ){ // 如果有确切的返回值，说明校验没有通过 

return msg; 

 } 

 }

}; 

var validataFunc = function(){ 

var validator = new Validator(); // 创建⼀个 validator 对象 

/***************添加⼀些校验规则****************/ 

validator.add( registerForm.userName, 'isNonEmpty', '⽤户名不能为空' );  

validator.add( registerForm.password, 'minLength:6', '密码⻓度不能少于 6位'); 

validator.add( registerForm.phoneNumber, 'isMobile', '⼿机号码格式不正确' ); 

var errorMsg = validator.start(); // 获得校验结果 

return errorMsg; // 返回校验结果 

} 

var registerForm = document.getElementById( 'registerForm' ); 

registerForm.onsubmit = function(){ 

var errorMsg = validataFunc(); // 如果 errorMsg 有确切的返回值，说明未通过校验 

if ( errorMsg ){ 

alert ( errorMsg ); 

return false; // 阻⽌表单提交 

 } 

}; 
```

## 代理模式 

> 代理模式的定义：为⼀个对象提供⼀个代⽤品或占位符，以便控制对它的访问。 



常⽤的虚拟代理形式：某一个花销很大的操作，可以通过虚拟代理的方式延迟到这种需要它的时候才去 

创建（例：使用虚拟代理实现图片懒加载） 



图片懒加载的方式：先通过一张loading图占位，然后通过异步的方式加载图片，等图片加载好了再把 

完成的图片加载到img标签当中。 



假设我们在做⼀个⽂件同步的功能，当我们选中⼀个 checkbox 的时候，它对应的⽂件就会被同 步到另 

外⼀台备⽤服务器上⾯。当⼀次选中过多时，会产⽣频繁的⽹络请求。将带来很⼤的开销。可以通过⼀ 

个代理函数 proxySynchronousFile 来收集⼀段时间之内的请求， 最后⼀次性发送给服务器 

## 中介者模式 

中介者模式的定义：通过⼀个中介者对象，其他所有的相关对象都通过该中介者对象来通信，⽽不是相 

互引⽤，当其中的⼀个对象发⽣改变时，只需要通知中介者对象即可。通过中介者模式可以解除对象与 

对象之间的紧耦合关系。 

例如：现实⽣活中，航线上的⻜机只需要和机场的塔台通信就能确定航线和⻜⾏状态，⽽不需要和所有 

⻜机通信。同时塔台作为中介者，知道每架⻜机的⻜⾏状态，所以可以安排所有⻜机的起降和航线安 

排。

中介者模式适⽤的场景：例如购物⻋需求，存在商品选择表单、颜⾊选择表单、购买数量表单等等，都 

会触发change事件，那么可以通过中介者来转发处理这些事件，实现各个事件间的解耦，仅仅维护中介 

者对象即可。 

redux，vuex 都属于中介者模式的实际应⽤，我们把共享的数据，抽离成⼀个单独的store， 每个都通 

过store这个中介来操作对象 

⽬的就是减少耦合 

## 装饰器模式 

装饰者模式的定义：在不改变对象⾃身的基础上，在程序运⾏期间给对象动态地添加⽅法。常⻅应⽤， 

react的⾼阶组件, 或者react-redux中的@connect 或者⾃⼰定义⼀些⾼阶组件 

```js
import React from 'react' 

const withLog = Component=>{ 

// 类组件 

class NewComponent extends React.Component{ 

componentWillMount(){ 

console.time(`CompoentRender`) 

console.log(`准备完毕了`) 

 } 

render(){ 

return <Component {...this.props}></Component> 

 } 

componentDidMount(){ 

console.timeEnd(`CompoentRender`) 

console.log(`渲染完毕了`) 

 } 

 } 

return NewComponent 

} 

export {withLog} 

@withLog 

class XX 

export const connect = (mapStateToProps = state => state, mapDispatchToProps = 

{}) => (WrapComponent) => { 

return class ConnectComponent extends React.Component { 

static contextTypes = { 

store: PropTypes.object开课吧web全栈架构师 

} 

constructor(props, context) { 

super(props, context) 

this.state = { 

props: {} 

} 

} 

componentDidMount() { 

const { store } = this.context 

// 当前状态 update 后, 放⼊监听器中, ⽤于下⼀次的更新(每次 dispatch 后会执⾏ 

subscribe 中的所有函数) 

store.subscribe(() => this.update()) 

this.update() 

} 

update() { 

const { store } = this.context 

const stateProps = mapStateToProps(store.getState()) 

const dispatchProps = bindActionCreators(mapDispatchToProps, 

store.dispatch) 

this.setState({ 

props: { 

...this.state.props, 

...stateProps, 

...dispatchProps 

} 

}) 

} 

render() { 

return <WrapComponent {...this.state.props}></WrapComponent> 

} 

} 

} 
```



假设我们在编写⼀个⻜机⼤战的游戏，随着经验值的增加，我们操作的⻜机对象可以升级成更厉害的⻜ 

机，⼀开始这些⻜机只能发射普通的⼦弹，升到第⼆级时可以发射导弹，升到第三级时可以发射原⼦ 

弹。 

Function.prototype.before = function( beforefn ){ 

var __self = this; // 保存原函数的引⽤ 

return function(){ // 返回包含了原函数和新函数的"代理"函数 

beforefn.apply( this, arguments ); // 执⾏新函数，且保证 this 不被劫持，新函 

数接受的参数 // 也会被原封不动地传⼊原函数，新函数在原函数之前执⾏ 

return __self.apply( this, arguments ); // 执⾏原函数并返回原函数的执⾏结 

果， // 并且保证 this 不被劫持开课吧web全栈架构师 

} } 

Function.prototype.after = function( afterfn ){ 

var __self = this; 

return function(){ 

var ret = __self.apply( this, arguments ); 

afterfn.apply( this, arguments ); 

return ret; 

 } 

}; 

⽐如⻚⾯中有⼀个登录 button，点击这个 button 会弹出登录浮层，与此同时要进⾏数据上报， 来统计 

有多少⽤户点击了这个登录 button 

var showLogin = function(){ 

console.log( '打开登录浮层' ); 

log( this.getAttribute( 'tag' ) ); 

} 

var log = function( tag ){ 

console.log( '上报标签为: ' + tag ); 

 (new Image).src = 'http:// xxx.com/report?tag=' + tag; 

} 

document.getElementById( 'button' ).onclick = showLogin; 

使⽤装饰器 

var showLogin = function(){ 

console.log( '打开登录浮层' ); 

} 

var log = function(){ 

console.log( '上报标签为: ' + this.getAttribute( 'tag' ) ); 

} 

showLogin = showLogin.after( log ); // 打开登录浮层之后上报数据 

document.getElementById( 'button' ).onclick = showLogin; 

装饰者模式和代理模式的结构看起来⾮常相像，这两种模式都描述了怎样为对象提供 ⼀定程度上的间接 

引⽤，它们的实现部分都保留了对另外⼀个对象的引⽤，并且向那个对象发送 请求。 代理模式和装饰 

者模式最重要的区别在于它们的意图和设计⽬的。代理模式的⽬的是，当直接访问本体不⽅便或者不符 

合需要时，为这个本体提供⼀个替代者。本体定义了关键功能，⽽代理提供或拒绝对它的访问，或者在 

访问本体之前做⼀些额外的事情。装饰者模式的作⽤就是为对 象动态加⼊⾏为。开课吧web全栈架构师 

其实Vue中的v-input，v-checkbox也可以认为是装饰器模式， 对原⽣的input和checkbox做⼀层装饰 

## 外观模式 

外观模式即让多个⽅法⼀起被调⽤ 

涉及到兼容性，参数⽀持多格式，有很多这种代码，对外暴露统⼀的api，⽐如上⾯的$on ⽀持数组， 

￥offff参数⽀持多个情况， 对⾯只⽤⼀个函数，内部判断实现 

⾃⼰封装组件库 经常看到 

myEvent = { 

stop: function(e) { 

if (typeof e.preventDefault() === "function") { 

e.preventDefault(); 

 } 

if (typeof e.stopPropagation() === "function") { 

e.stopPropagation(); 

 } 

//for IE 

if (typeof e.returnValue === "boolean") { 

e.returnValue = false; 

 } 

if (typeof e.cancelBubble === "boolean") { 

e.cancelBubble = true; 

 } 

 } 

addEvent(dom, type, fn) { 

if (dom.addEventListener) { 

dom.addEventListener(type, fn, false); 

 } else if (dom.attachEvent) { 

dom.attachEvent('on' + type, fn); 

 } else { 

dom['on' + type] = fn; 

 } 

 } 

} 

## 工厂模式 

提供创建对象的接⼝，把成员对象的创建⼯作转交给⼀个外部对象，好处在于消除对象之间的耦合(也就 

是相互影响)开课吧web全栈架构师 

常⻅的例⼦，我们的弹窗，message，对外提供的api，都是调⽤api，然后新建⼀个弹窗或者Message 

的实例，就是典型的⼯⼚模式 

const Notification = function(options) { 

if (Vue.prototype.$isServer) return; 

options = options || {}; 

const userOnClose = options.onClose; 

const id = 'notification_' + seed++; 

const position = options.position || 'top-right'; 

options.onClose = function() { 

Notification.close(id, userOnClose); 

 }; 

instance = new NotificationConstructor({ 

data: options 

 }); 

if (isVNode(options.message)) { 

instance.$slots.default = [options.message]; 

options.message = 'REPLACED_BY_VNODE'; 

 } 

instance.id = id; 

instance.$mount(); 

document.body.appendChild(instance.$el); 

instance.visible = true; 

instance.dom = instance.$el; 

instance.dom.style.zIndex = PopupManager.nextZIndex(); 

let verticalOffset = options.offset || 0; 

instances.filter(item => item.position === position).forEach(item => { 

verticalOffset += item.$el.offsetHeight + 16; 

 }); 

verticalOffset += 16; 

instance.verticalOffset = verticalOffset; 

instances.push(instance); 

return instance; 

}; 

https://github.com/ElemeFE/element/blob/dev/packages/notifification/src/main.js#L11 

## 建造者模式 

和⼯⻓模式相⽐，参与了更多创建的过程 或者更复杂开课吧web全栈架构师 

var Person = function(name, work) { 

// 创建应聘者缓存对象 

var _person = new Human(); 

// 创建应聘者姓名解析对象 

_person.name = new Named(name); 

// 创建应聘者期望职位 

_person.work = new Work(work); 

return _person; 

}; 

var person = new Person('xiao ming', 'code'); 

console.log(person) 

## 迭代器模式 

迭代器模式是指提供⼀种⽅法顺序访问⼀个聚合对象中的各个元素，⽽⼜不需要暴露该对象的内 

部表示。迭代器模式可以把迭代的过程从业务逻辑中分离出来,在使⽤迭代器模式之后，即使不关 

⼼对象的内部构造，也可以按顺序访问其中的每个元素 

这个⽤的就太多了 each map啥乱遭的 

var each = function( ary, callback ){ 

for ( var i = 0, l = ary.length; i < l; i++ ){ 

callback.call( ary[i], i, ary[ i ] ); 

 } 

}; 

each( [ 1, 2, 3 ], function( i, n ){ 

alert ( [ i, n ] ); 

}) 

## 享元模式 

享元(flflyweight)模式是⼀种⽤于性能优化的模式，“flfly”在这⾥是苍蝇的意思，意为蝇量级。享元模 

式的核⼼是运⽤共享技术来有效⽀持⼤量细粒度的对象。 如果系统中因为创建了⼤量类似的对象 

⽽导致内存占⽤过⾼，享元模式就⾮常有⽤了。在 JavaScript 中，浏览器特别是移动端的浏览器 

分配的内存并不算多，如何节省内存就成了⼀件⾮常有意义的事情。 

假设有个内⾐⼯⼚，⽬前的产品有 50 种男式内⾐和 50 种⼥⼠内⾐，为了推销产品，⼯⼚决定⽣产⼀些 

塑料模特来穿上他们的内⾐拍成⼴告照⽚。 正常情况下需要 50个男模特和50个⼥模特，然后让他们每 

⼈分别穿上⼀件内⾐来拍照。开课吧web全栈架构师 

var Model = function( sex, underwear){ 

this.sex = sex; 

this.underwear = underwear; 

}; 

Model.prototype.takePhoto = function(){ 

console.log( 'sex= ' + this.sex + ' underwear=' + this.underwear); 

}; 

for ( var i = 1; i <= 50; i++ ){ 

var maleModel = new Model( 'male', 'underwear' + i );  

maleModel.takePhoto(); 

 }; 

for ( var j = 1; j <= 50; j++ ){ 

var femaleModel= new Model( 'female', 'underwear' + j ); 

femaleModel.takePhoto(); 

}; 

如上所述，现在⼀共有 50 种男内 ⾐和 50 种⼥内⾐，所以⼀共会产⽣ 100 个对象。如果将来⽣产了 

10000 种内⾐，那这个程序可能会因为存在如此多的对象已经提前崩溃。 下⾯我们来考虑⼀下如何优化 

这个场景。虽然有 100 种内⾐，但很显然并不需要 50 个男 模特和 50 个⼥模特。其实男模特和⼥模特 

各⾃有⼀个就⾜够了，他们可以分别穿上不同的内⾐来拍照。 

/*只需要区别男⼥模特 

那我们先把 underwear 参数从构造函数中 移除，构造函数只接收 sex 参数*/ 

var Model = function( sex ){ 

this.sex = sex; 

}; 

Model.prototype.takePhoto = function(){ 

console.log( 'sex= ' + this.sex + ' underwear=' + this.underwear); 

}; 

/*分别创建⼀个男模特对象和⼀个⼥模特对象*/ 

var maleModel = new Model( 'male' ), 

femaleModel = new Model( 'female' ); 

/*给男模特依次穿上所有的男装，并进⾏拍照*/ 

for ( var i = 1; i <= 50; i++ ){ 

maleModel.underwear = 'underwear' + i; 

maleModel.takePhoto(); 

}; 

/*给⼥模特依次穿上所有的⼥装，并进⾏拍照*/ 

for ( var j = 1; j <= 50; j++ ){ 

femaleModel.underwear = 'underwear' + j; 

femaleModel.takePhoto(); 

}; 

//只需要两个对象便完成了同样的功能 

内部状态存储于对象内部 

内部状态可以被⼀些对象共享开课吧web全栈架构师 

内部状态独⽴于具体的场景，通常不会改变 

外部状态取决于具体的场景，并根据场景⽽变化，外部状态不能被共享 

性别是内部状态，内⾐是外部状态，通过区分这两种状态，⼤⼤减少了系 统中的对象数量。通常来讲， 

内部状态有多少种组合，系统中便最多存在多少个对象，因为性别 通常只有男⼥两种，所以该内⾐⼚商 

最多只需要 2 个对象。 

应⽤案例 

消息组件开课吧web全栈架构师 

需求 

\1. 弹窗逻辑⼀样 

\2. 四中弹窗，颜⾊，icon不同 

\3. 接收⽂案 

交互⽅式——弹出、隐藏，由共享对象所拥有 

提示icon、背景样式、字体样式提供接⼝可配置 

使⽤api统⼀ 

Dialog只会在项⽬初始化时被 new ⼀次，每次使⽤Message组件通过改变Dialog的状态获取组件 

DOM，其实很容易知道new⼀个组件的成本要⽐⼀个组件的更新成本⾼很多 

## 职责链模式 

职责链模式的定义是:使多个对象都有机会处理请求，从⽽避免请求的发送者和接收者之间的耦合关系， 

将这些对象连成⼀条链，并沿着这条链传递该请求，直到有⼀个对象处理它为⽌。 职责链模式的名字⾮ 

常形象，⼀系列可能会处理请求的对象被连接成⼀条链，请求在这些对 象之间依次传递，直到遇到⼀个 

可以处理它的对象，我们把这些对象称为链中的节点 

假设我们负责⼀个售卖⼿机的电商⽹站，经过分别交纳 500 元定⾦和 200 元定⾦的两轮预定后(订单已 

在此时⽣成)，现在已经到了正式购买的阶段。 公司针对⽀付过定⾦的⽤户有⼀定的优惠政策。在正式 

购买后，已经⽀付过 500 元定⾦的⽤ 户会收到 100 元的商城优惠券，200 元定⾦的⽤户可以收到 50 元 

的优惠券，⽽之前没有⽀付定⾦的⽤户只能进⼊普通购买模式，也就是没有优惠券，且在库存有限的情 

况下不⼀定保证能买到。 

var order = function( orderType, pay, stock ){ 

if ( orderType === 1 ){ // 500 元定⾦购买模式 

if ( pay === true ){ // 已⽀付定⾦ 

console.log( '500 元定⾦预购, 得到 100 优惠券' ); 

 } else{ // 未⽀付定⾦，降级到普通购买模式 

if ( stock > 0 ){ // ⽤于普通购买的⼿机还有库存 

console.log( '普通购买, ⽆优惠券' ); 

 }else{ 

console.log( '⼿机库存不⾜' ); 

 } 

 } 

 } else if ( orderType === 2 ){ 

if ( pay === true ){ // 200 元定⾦购买模式 

console.log( '200 元定⾦预购, 得到 50 优惠券' ); 

 }else{ 

if ( stock > 0 ){ 

console.log( '普通购买, ⽆优惠券' ); 

 }else{ 

console.log( '⼿机库存不⾜' ); 

 }开课吧web全栈架构师 

 } 

 } else if (orderType === 3) { 

if ( stock > 0 ){ 

console.log( '普通购买, ⽆优惠券' ); 

 } else{ 

console.log( '⼿机库存不⾜' ); 

 } 

 } 

}; 

order( 1 , true, 500); // 输出: 500 元定⾦预购, 得到 100 优惠券 

现在我们采⽤职责链模式重构这段代码，先把 500 元订单、200 元订单以及普通购买分成 3 个函数。 

接下来把 orderType、pay、stock 这 3 个字段当作参数传递给 500 元订单函数，如果该函数不符合处 

理条件，则把这个请求传递给后⾯的 200 元订单函数，如果 200 元订单函数依然不能处理该请求，则 

继续传递请求给普通购买函数。 

var order500 = function( orderType, pay, stock ){ 

if ( orderType === 1 && pay === true ){ 

console.log( '500 元定⾦预购，得到 100 优惠券' ); 

 } else{ 

return 'nextSuccessor'; // 我不知道下⼀个节点是谁，反正把请求往后⾯传递 

 } 

}; 

var order200 = function( orderType, pay, stock ){ 

if ( orderType === 2 && pay === true ){ 

console.log( '200 元定⾦预购，得到 50 优惠券' ); 

 } else{ 

return 'nextSuccessor'; // 我不知道下⼀个节点是谁，反正把请求往后⾯传递 

 } 

}; 

var orderNormal = function( orderType, pay, stock ){ 

if ( stock > 0 ){ 

console.log( '普通购买，⽆优惠券' ); 

 } else{ 

console.log( '⼿机库存不⾜' ); 

 } 

}; 

// Chain.prototype.setNextSuccessor 指定在链中的下⼀个节点 

// Chain.prototype.passRequest 传递请求给某个节点 

var Chain = function( fn ){ 

this.fn = fn; 

this.successor = null; 

}; 

Chain.prototype.setNextSuccessor = function( successor ){ 

return this.successor = successor;开课吧web全栈架构师 

}; 

Chain.prototype.passRequest = function(){ 

var ret = this.fn.apply( this, arguments ); 

if ( ret === 'nextSuccessor' ){ 

return this.successor && this.successor.passRequest.apply( 

this.successor, arguments ); 

 } 

return ret; 

}; 

var chainOrder500 = new Chain( order500 ); 

var chainOrder200 = new Chain( order200 ); 

var chainOrderNormal = new Chain( orderNormal ); 

chainOrder500.setNextSuccessor( chainOrder200 ); 

chainOrder200.setNextSuccessor( chainOrderNormal); 

chainOrder500.passRequest( 1, true, 500 ); // 输出:500 元定⾦预购，得到 100 优惠 

券 

chainOrder500.passRequest( 2, true, 500 ); // 输出:200 元定⾦预购，得到 50 优惠 

券 

chainOrder500.passRequest( 3, true, 500 ); // 输出:普通购买，⽆优惠券 

chainOrder500.passRequest( 1, false, 0 ); // 输出:⼿机库存不⾜ 

通过改进，我们可以⾃由灵活地增加、移除和修改链中的节点顺序，假如某天⽹站运营⼈员 ⼜想出了⽀ 

持 300 元定⾦购买，那我们就在该链中增加⼀个节点即可 

var order300 = function(){ 

// 具体实现略 

}; 

chainOrder300= new Chain( order300 ); 

chainOrder500.setNextSuccessor( chainOrder300); 

chainOrder300.setNextSuccessor( chainOrder200); 

## 适配器模式 

适配器模式的作⽤是解决两个软件实体间的接⼝不兼容的问题。使⽤适配器模式之后，原本 由于 

接⼝不兼容⽽不能⼯作的两个软件实体可以⼀起⼯作。 适配器的别名是包装器(wrapper)，这是⼀ 

个相对简单的模式。在程序开发中有许多这样的 场景:当我们试图调⽤模块或者对象的某个接⼝ 

时，却发现这个接⼝的格式并不符合⽬前的需求。 这时候有两种解决办法，第⼀种是修改原来的 

接⼝实现，但如果原来的模块很复杂，或者我们拿 到的模块是⼀段别⼈编写的经过压缩的代码， 

修改原接⼝就显得不太现实了。第⼆种办法是创建 ⼀个适配器，将原接⼝转换为客户希望的另⼀ 

个接⼝，客户只需要和适配器打交道。开课吧web全栈架构师 

var googleMap = { 

show: function(){ 

console.log( '开始渲染⾕歌地图' ); 

 } 

}; 

var baiduMap = { 

display: function(){ 

console.log( '开始渲染百度地图' ); 

 } 

}; 

var baiduMapAdapter = { 

show: function(){ 

return baiduMap.display(); 

 } 

}; 

renderMap( googleMap ); // 输出:开始渲染⾕歌地图 

renderMap( baiduMapAdapter ); // 输出:开始渲染百度地图 

适配器模式主要⽤来解决两个已有接⼝之间不匹配的问题，它不考虑这些接⼝是怎样实 现的，也不考虑 

它们将来可能会如何演化。适配器模式不需要改变已有的接⼝，就能够 使它们协同作⽤。 

装饰者模式和代理模式也不会改变原有对象的接⼝，但装饰者模式的作⽤是为了给对象 增加功能。装饰 

者模式常常形成⼀条⻓的装饰链，⽽适配器模式通常只包装⼀次。代理 模式是为了控制对对象的访问， 

通常也只包装⼀次。 

我们设计很多插件，有默认值，也算是适配器的⼀种应⽤， vue的prop校验，default也算是适配器的 

应⽤了 

外观模式的作⽤倒是和适配器⽐较相似，有⼈把外观模式看成⼀组对象的适配器，但外观模式最显著的 

特点是定义了⼀个新的接⼝。 

## 模板方法模式 

模板⽅法模式在⼀个⽅法中定义⼀个算法的⻣架，⽽将⼀些步骤的实现延迟到⼦类中。模板⽅法 

使得⼦类可以在不改变算法结构的情况下，重新定义算法中某些步骤的具体实现 

这个我们⽤的很多，vue中的slot，react中的children 

## 备忘录模式 

可以恢复到对象之前的某个状态，其实⼤家学习react或者redux的时候，时间旅⾏的功能，就算是备忘 

录模式的⼀个应⽤ 

https://zh-hans.reactjs.org/tutorial/tutorial.html#implementing-time-travel开课吧web全栈架构师