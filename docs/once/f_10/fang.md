# 4.防抖和节流是什么?如何实现

## 原理

防抖解释

* 防抖是指在一定的时间内再次触发此事件,会清空上次的事件重新开始,如果制定的时间内没有再次触发,那么这个事件才会执行

* 例如: input输入信息,不可能每次按下都发起一个ajax请求,可以等一段时间内不输入了之后在发起请求

节流解释

* 节流是指在一定的时间同一事件只会触发一次,只有超过了这个时间才会再次出发

* 例如: 验证码60秒内不可以再次触发(实际开发肯定是使用禁止,但是原理和验证码一样)

## 代码实现

## 代码样例

防抖

```js
function debounce(sayHi){
	var timer = null
	return function(){
		clearInterval(timer)
		timer = setTimeout(()=>{
			sayHi.apply(this,arguments)
		},1000)
	}
}
	
function sayHi(){
        console.log('防抖')
}
	
var inp = document.getElementById('inp');
inp.addEventListener('input', debounce(sayHi)); // 防抖		    
```

节流

```js
function chufa(fn){
	var flag = true
	return function(){
		if(!flag) return;
		flag = false
		setTimeout(()=>{
			fn.apply(this,arguments)
			flag = true
		},1000)
	}
}
	
function hansh(e){
	console.log(e.target.innerWidth, e.target.innerHeight);
}
		
window.addEventListener('resize',chufa(hansh))
```