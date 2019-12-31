# React

### 菜鸟教程(版本学习)

``` js
1.安装
	1).通常使用脚手架工具来实现
	2).先要确保node和npm在一定版本之上
	3).npm config set registry https://registry.npm.taobao.org一个加速镜像 npm config get registry验证 creat-react-app todolist即可
	4).进入目录使用npm start启动 react
 2.*元素渲染
	1).元素是构成React应用的最小单位，他用于描述屏幕上输出的内容
	2).将元素渲染到DOM中   在页面创建一个标签，然后所有内容都将由React DOM管理，我们将其称为"根"节点
	3).*要将React元素渲染到根DOM节点中，我们通过把他们传递给ReactDOM.render()方法来将其渲染  (ReactDOM.render（新的元素，根节点）)
	4).*更新元素渲染:React元素是不可改变的，当元素被创建之后，能改变页面元素的方法是（创建一个新的元素，然后将它传入ReactDOM.render()方法中）
	5).注意:react只会更新必要的部分
 3.*React JSX
	1).*优点:JSX执行更快，因为他在编译为JavaScript代码后进行了优化
	2).*优点:他是类型更安全的，在编译过程中就能发现错误
	3).*优点:使用JSX代码模块更加简单加速
	4).独立文件:你的React JSX 代码可以放在一个独立文件上
	5).JavaScript表达式:我们可以在JSX中使用JavaScript表达式，表达式写在花括号{}中
	6).注意事项:在JSX中不能使用if else语句，但是可以使用三元运算符来代替
	7).样式:react推荐使用内联样式,我们可以使用camelCase语句来设置内联样式 React会在指定元素数字后自动添加px
	8).注释:注释需要写在花括号中，实例如下:
	9).数组:JSX允许在模块中插入数组，数组会自动展开所有成员(理解:就是ReactDOM.render的第一个参数可以插入一个数组，数组会自动展开)
 4.React组件
	1).基本使用:ReactDOM.render的第一个元素默认指定为一个对象，当这个对象<xxx/>表示为一个组件，这个组件是一个函数，参数是props，返回值是一个标签元素
	2).基本使用扩展:还可以使用ES6 class来定义一个组件 1.需要继承React.Component 2.实现render方法，方法返回一个标签
	3).注意:1.原生HTML以小写字母开头，而自定义的React类名以大写字母开头 2.组件类只能包含一个顶层标签，否则也会报错
	4).*参数传递:如果我们需要向组件传递参数，可以使用this.props对象，
	5).注意:在添加属性时， class 属性需要写成 className ，for 属性需要写成 htmlFor ，这是因为 class 和 for 是 JavaScript 的保留字。
	6).*复合组件:1.在一个return（返回的组件中），再次嵌套一个组件<div> <Name/> </div> 2.在定义一个函数 函数名是组件名 函数可以接受参数props 内部调用props.xx获得自定义组件的属性
 5.*React State状态
	1).概念:React把组件看成一个状态机,通过与用户的交互，实现不同状态，然后渲染UI
	2).使用的概念:只需更新组件的State，然后根据新的state重新渲染用户界面(不要操作DOM)
	3).基本使用:在render()方法中使用this.state来修改当前的时间 需要需要写在类的构造方法当中 constructor(props)
	4).*周期函数:componentDidMount在组件输出到 DOM 后会执行(在使用this指针时，尽量使用箭头函数)
	5).*周期函数2:componentWillUnmount()代表挂载消失的时候调用这个函数
	6).**代码执行顺序:React.render()->组件的构造方法->render()方法->componentDidMount()->componentWillUnmount()
	7).数据自顶向下流动:父组件或子组件都不知道某个组件是有状态还是无状态的
 6.React Porps
	1).概念:state和props的区别就是props不可变的，所以子组件通过props来传递数据
	2).使用:父组件通过属性的方式定义数据，子组件通过{this.props.属性名} 来获取子组件对应的数组 
	3).Props验证:propTypes在Reactv15.5版本后已经移到了prop-types库
	4).Props验证作用:Props使用propTypes验证，可以保证我们的所有应用组件都被正常使用，React.PropTypes提供很多验证器(validator)来验证传递过来的数据是否有效
	5).**子->父组件传输:子组件可以通过this.props.xxx调用父组件的方法，<Name xxx={this.yyy.bind(this)}/> 父组件内部可以定义yyy方法，修改内部的state的数据
	6).*JSX:JSX的箭头函数和bind()函数关系，onClick={this.changeAge.bind(this)} 和 onClick={()=>this.changeAge()} 可以互换。	
 7.React事件处理
	1).书写:React事件绑定属性的命名采用驼峰式写法,而不是小写
	2).注意:如果采用JSX的语法你需要传入一个函数作为时间处理函数，而不是一个字符串（DOM元素的写法）
	3).阻止默认行为:给点击事件添加默认阻止 e.preventDefault() 即可阻止
	4).**向事件处理成宿传递参数
		I.使用箭头函数                <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
		II.使用bind()传递多个参数     <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
 8.条件渲染
	1).变量为什么要进行初始化 一个软件所分配到的空间中极可能存在着以前其他软件使用过后的残留数据，这些数据被称之为垃圾数据。所以通常情况下我们为一个变量，为一个数组，分配好存储空间之后都要对该内存空间初始化。简单来说就是清理残留数据。
 9.React列表&key
	1).使用JavaScript的map()方法来创建一个列表
	2).每个列表元素分配一个key,不然会出现警告
	3).Keys 可以在 DOM 中的某些元素被增加或删除的时候帮助 React 识别哪些元素发生了变化。因此你应当给数组中的每一个元素赋予一个确定的标识
	4).key添加的位置一定是return里面的第一个最外层的组件
	5).数组元素中使用的 key 在其兄弟之间应该是独一无二的。然而，它们不需要是全局唯一的。当我们生成两个不同的数组时，我们可以使用相同的键。
	6).*注意 {} 中不能出现var,const,let等这种关键字
 10.React组件API
	1).设置状态:setState
	2).替换状态:replaceState
	3).设置属性:setProps
	4).替换属性:replaceProps
	5).强制更新:forceUpdate
	6).获取DOM节点:findDOMNode
	7).判断组件挂载状态:isMounted(作废)
 11.React组件生命周期
	1).Mounting：已插入真实 DOM
	2).Updating：正在被重新渲染
	3).Unmounting：已移出真实 DOM
	4).componentWillMount 在渲染前调用,在客户端也在服务端。	
	5).componentDidMount : 在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。 如果你想和其他JavaScript框架一起使用，可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作(防止异步操作阻塞UI)。
	6).componentWillReceiveProps 在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用。
	7).shouldComponentUpdate 返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。 
可以在你确认不需要更新组件时使用。
	8).componentWillUpdate在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。
	9).componentDidUpdate 在组件完成更新后立即调用。在初始化时不会被调用。
	10).componentWillUnmount在组件从 DOM 中移除之前立刻被调用。
 12.React AJAX
	1).原理:React 组件的数据可以通过 componentDidMount 方法中的 Ajax 来获取，当从服务端获取数据时可以将数据存储在 state 中，再用 this.setState 方法重新渲染 UI
 13.React 表单与事件
	1).*当你有处理多个 input 元素时，你可以通过给每个元素添加一个 name 属性，来让处理函数根据 event.target.name 的值来选择做什么。
	2).在 React 中，不使用 selected 属性，而在根 select 标签上用 value 属性来表示选中项。
 14.React Refs
	1).ref可以绑定在组件的render()的函数之上
	2).在绑定的点击事件触发的函数上，通过 this.refs 获取DOM节点
```

___

### 慕课网学习版本

``` js
1.*PWA概念
	1).progress web app 
	2).中文:渐进式网页应用程序
	3).作用:当用户第一次访问之后，再次访问的时候可以断网，网页会被缓存起来，就好比一个应用程序一样
	4).优点:1.加载非常的快 2.可以添加到用户的主屏幕上 3.可靠地 不需要考虑网络的状态如何
 2.目录分析
	1).node_modules:是全部的模块，一些脚手架需要的配置包
	2).src/package.json:是node的一个扩展包，主要包括版本，名称，需要的react，react-dom，react-scripts等等（不能删）
	3).src/logo.svg:是一章动图，也是首页面的图片
	4).src/manifest.json:是PWA概念的一个配置文件，包括应用的图标，应用的名称等等
	5).src/index.html:是整个项目的开始地方
	6).src/serviceWorker.js:是整个PWA概念的作用js
	7).src/app.js:是react的核心js模块，包括组件，css样式等
	8).src/index.js:是整个项目全部文件的一个合集
 3.React的组件和JSX概念
	1).通过继承自ES6语法中的 React.Component 并且 return 一个对象（JSX）实现组件化概念
	2).JSX概念:在以.js为结尾的文件中，内部嵌套html代码，并且不是以字符串的方式
	3).JSX使用:必须继承React,挂载时还需要React-dom
	4).JSX使用1:在‘根’节点中想要挂载自定义组件，组件名必须是大写开头，并且import也必须是大写
	5).JSX总结:如果一个节点的名字是以大写字母开头，这就是一个自定义组件，否则就是一个html组件
 4.React响应式设计和事件绑定
	1).React组件的构造方法:任何一个组件都有构造方法(constructor)接受一个参数(porp)需要先调用父类方法(super(props))，在内部进行数据绑定(this.states)
	2).原理:就是MVC设计层的V层，响应式设计的原理就是通过数据和组件的绑定，实现通过数据绑定来实现组件的渲染
	3).事件绑定:onClick等等原生js事件(注意:单词首字母要大写)来给组件绑定一个事件(例如:onChange:{this.xxxx.bind(this)})最后的bind(this)是es6的语法，代表指向本次this指针指向本类
	4).内部函数:xxx(e){} e代表传递进来的参数，想要改变组件中的数据，必须使用this.setState()传递一个对象进来
	5).组件传参(删除操作):通过bind()的第二个参数来传递索引（注意：不要直接去操作state，数组尽量通过副本来操作）
	6).代码优化:在组件的构造方法内进行this指向问题,(例如:this.handleBtn=this.handleBtn.bind(this))这种方式
	5).优点:
		I.声明式开发   :降低DOM操作
		II.可以与其他框架并存
		III.组件化
		IV.单项数据流    :MVVM设计模式
		V.视图层框架
		VI.函数式编程
 5.React高级应用
	1).React-developer-tools安装和使用:必须通过端口方式启动React 启动之后Chrome浏览器的工具会显示为深色
	2).PropTypes:通过导入prop-types类，对每个组件的propTypes属性等于一个对象，例如test=PropTypes.string等等
	3).PropTypes扩展:在原有的propTypes之上，再次使用 PropTypes.string.isRequired 就代表这个参数必须传入
	4).defaultTypes:可以设置默认的样式，对组件的defaultTypes属性进行赋值，内容为一个对象
	5).*Props,State,render关系: 当state和props发生改变的时候，render函数就会重新执行
	6).*Props,State,render关系2: 当父组件的render函数被运行时，他的子组件的render都将被重新运行
	7).**虚拟DOM
		1.state 数据
		2.JSX   模板
		3.数据 + 模板 生成虚拟DOM(虚拟DOM就是一个JS对象,用它来描述真实DOM)
		4.用虚拟DOM的结构生成真实DOM,来显示
		5.state发生变化
		6.数据 + 模板 生成新的虚拟DOM(极大地提升了性能)
		7.比较原始的虚拟DOM和新的虚拟DOM,找到区别是span内容(极大地提升了性能)
		8.直接操作DOM,改变span中的内容

		优点
		1.性能提升了
		2.他使得跨端应用得以实现 React Native (因为手机或IOS等没有document这个元素,就没有DOM的概念)

	8).*Diff算法
		1.概念:两个虚拟DOM的比较称为Diff算法(diffrence)
		2.使用:比较同级情况下两个元素是否相等,如果不相等则直接删除替换,相等继续比较(虽然在删除替换上浪费了时间,但是在算法上进行了大幅度的优化)
		3.Key的关键性:由于diff比较是同级直接的比较,所以key必须保证在同级情况下完全唯一,并且不能被随意改动,所以不建议使用index,
	9).*setState方法:他是一个异步处理的函数,他需要把多组setState方法合并为一个setState方法,然后进行一次虚拟DOM比较
	10).*ref的使用:正常情况下我们使用e.target来获取DOM元素,但有的时候设计比较复杂(动画方面),所以我们需要使用ref来获取DOM,ref接受一个箭头与函数(例如 ref={ (valueinput)=>{this.input=valueinput} } )然后在事件上使用this.input获取
	11).**声明周期函数
		都有那些阶段和那些声明周期函数?
		1.initialization(初始化) constructor() 设置state和props
		2.Mountint(挂载)  componentWillMount()->render()->componentDidMount()
		3.Updation(更新)  shouldComponentUpdate()->componetWillUpdate()->render()->componentDidUpdate()  componentWillReceiveProps这个函数是子组件接受的props发生了改变,并且他不是第一次在子组件发生变化的时候触发
		4.Unmounting(卸载) componentWillUnmount()
 	12).*React发送ajax
		1.npm install axios 进行安装 axios
		2.axios.get(xxx).then( ()=>{console.log(获取成功)} ).catch( ()=>{console.log(获取失败)} )
	13).*Charles实现本地数据模拟
		1.打开软件 Tools->Map Local->配置一个映射 注意**(localhost.charlesproxy.com)不能填写localhost
		2.还有注意** 再打开3000端口的时候 不能是localhost:3000  必须是 localhost.charlesproxy.com:3000
	14).使用React-transition-group实现动画
```

***



# redux

### 慕课网版本学习

``` js
1.*工作流程    四个部分: component action state reducer
	2.*基本实现步骤 
		1).先声明一个 reducer 这个js文件只负责导出一个 函数
		2).在声明一个 store 先 import createStore from "redux" 然后导入reducer 之后 创建一个变量对象 = createStore(reducer)  最后导出
		3).在组件页面先导入 store 调用 store.getState()方法即可获得数据仓库
	3.*修改store中的数据
		1).当事件触发的时候绑定一个函数
		2).先创建一个对象变量,必须指定一个type类型,相当于是字段名,用于表示这个value的作用
		3).调用store.dispatch(对象) 会把这个对象传给 reducer 的action参数上,
		4).reducer参数上先用过 action.type 进行类型判断,然后通过JSON的深拷贝 const 对象= JSON.parse(JSON.stringify(state)) 就可以通过 对象.的方式修改指定的字段  最后return出去
		5).组件的构造函数 constructor 中   调用一个监听函数  store.subscribe(this.函数) 调用一个函数 (当store的函数数据发生改变的时候会触发,记住这是一个监听函数)
		6).在调用的函数中,使用 this.setState( ()=>{ return this.getState() } ) 即可   
	4.*redux的三大特性
		1).store是唯一的
		2).只有store能够改变自己的值
		3).Reducer必须是纯函数  (纯函数: 有固定的输入,就会有固定的输出,并且不会有副作用(对一些数据进行修改))
	5.*store的核心函数
		1).createStore:创建一个store  第一个参数为 reducer 第二个参数 可以添加redux的扩展
		2).store.dispatch()可以把创建好的action推送给reducer
		3).store.getState()可以获取store返回的内容
		4).store.subscribe()可以监听store的改变,如何store改变就会触发,是一个监听函数
	6.actionType(自定义) 封装一个常量来包含对应的类型 类似于map
	7.actionCreator(自定义) 是一个用来封装每个方法的函数,让方法调用起来更加规范
	8.*组件
		1).分为 普通组件 容器组件 UI组件 无状态组件
		2).其中容器组件,就是包含生命周期,函数的一个顶级组件
		3).UI组件,可能会包含某些小的方法,但是大多数情况只包含render
		4).无状态组件一般是一个 常量函数 (效率更高) 只包含return一个JSX
	9.使用react-redux
		1).安装
		npm install --save react-redux
		2).主js文件中导入 react-redux
		3).Provider
		所有的容器组件,UI组件等等子组件,全都挂载这上面,然后容器组件绑定在根组件上面
		在这个组件上绑定一个属性 类似于
		<Provider store={store}>
			</UIlist>
		</Provider>
		4).connect()
		导出这个方法 connect(mapStateToProps,mapDispatchToProps)(组件)
		mapStateToProps   接受一个参数为state  可以将state参数转换为props
		mapDispatchToProps   接受一个参数为disptach   可以将触发的函数的参数传递到里面给父组件	
	10.使用styled
		1).安装 styled-components
		npm install styled-components
		2).写组件
		export const 组件名 = styled.html组件`
			css样式
		`
		这样书写的html组件本身具有这些特性,别的元素不会拥有这些特性
		3)*.注意
		如果想要使用background这种需要使用background:url(${xxx})形式
		如果配合使用class样式的话需要  &.left  这种形式代表class为left的形式
		如果想要使用内部属性的话徐亚   &::    这种来添加内部属性
        
```



