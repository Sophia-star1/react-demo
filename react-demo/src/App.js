// const message = 'Hello World 002';

// // 函数的调用
// function getMessage() {
//   return 'Hello World Function 003';
// }


// // JSX中的表达式

// function App() {
//   return (
//     <div className="App">
//       this is a demo
//       <h1>{ message }</h1>
//       {/* 1. 插入字符串 */}
//       {'Hello World 001'}
//       <div></div>
//       {/* 2. 变量插值 */}
//       {message}
//       <div></div>
//       {/* 3. 函数的调用 */}
//       {getMessage()}
//       <div></div>
//       {/* 4. 方法的调用 */}
//       {message.toLowerCase() +' to lower case'}
//       {/* 5. 使用对象（常用于内联样式） */}
//       <div style={{ color: 'red' }}>Hello World</div>
//       {/* 6. 其它JS表达式，例如条件表达式 */}
//       {message.length > 5 ? 'Long Message' : 'Short Message'}
//     </div>
//   );
// }

// export default App;





// const items = ["Apple", "Banana", "Cherry"];

// // JSX中的列表渲染

// function App() {
//   return (
//     <div className="App">
//       this is a demo
//       <ul>
//       {items.map((item, index) => (
//         <li key={index}>{item}</li>
//       ))}
//     </ul>
//     </div>
//   );
// }

// export default App;


// const isLoggedIn = false

// // 复杂条件渲染函数
// const Greeting = () => {
//   // if判断语句
//   if (isLoggedIn) {
//     return <p>Welcome User</p>
//   } else {
//     return <p>Welcome Guest</p>
//   }
// }


// function App() {
//   return (
//     <div className="App">
//       this is a demo
//     {/* 使用逻辑与实现条件渲染 */}
//     {isLoggedIn && <p>Welcome User</p>}
//     {/* 使用三元表达式实现条件渲染*/}
//     {isLoggedIn ? <p>Welcome User</p> : <p>Welcome Guest</p>}
//     {/* 复杂的条件渲染：自定义函数 + if判断 */}
//     {Greeting()}
//     </div>
//   );
// }

// export default App;


// const handleClick = () => {
//   console.log('Button Clicked')
// }

// function App() {
//   return (
//     <div className="App">
//       <button onClick={handleClick}>Click me to activate the Function</button>
//     </div>
//   );
// }

// export default App;


// const handleClick = (message, event) => {
//   console.log(message)
//   console.log(event)
// }

// function App() {
//   return (
//     <div className="App">
//       <button onClick={(e)=>{handleClick('this is a message', e)}}>Click me to activate the Function</button>
//     </div>
//   );
// }

// export default App;

// import { useState } from 'react'

// const [count, setCount] = useState(0)

// function App() {
//   return (
//     <div className="App">
//     </div>
//   );
// }

// export default App;


// const MyButton = () => {
//   return <button>this is a component</button>
// }


// function App() {
//   return (
//     <div className="App">
//       {/* 单闭合标签调用 */}
//       <MyButton />
//       {/* 双闭合标签调用 */}
//       <MyButton></MyButton>
//     </div>
//   );
// }

// export default App;

// import { useState } from 'react'

// const MyButton = () => {
//   const [count, setCount] = useState(0)
//   const handleClick = () => {
//     // setCount(count + 1)
//     count += 1
//   }

//   return <button onClick={handleClick}>{count}</button>
// }


// function App() {
//   return (
//     <div className="App">
//       <MyButton />
//     </div>
//   );
// }

// export default App;



// const divStyle = {
//   width: '100px',
//   height: '100px',
//   backgroundColor: 'red'
// };


// function App() {
//   return (
//     <div className="App">
//       <div style={{
//       width: '100px',
//       height: '100px',
//       backgroundColor: 'red'
// }}></div>
//     </div>
//   );
// }

// export default App;

// function App() {
//   return (
//     <div className="App">
//     </div>
//   );
// }

// export default App;

// import { useState } from 'react';
// import './index.css'

// const MyButton = () => {
//   const [obj, setObj] = useState({
//     width: '100px',
//     height: '100px',
//     backgroundColor: 'red'
//   });

//   const [arr, setArr] = useState([1, 2, 3, 4, 5])

//   const handleClilck = () => {
//     setObj({
//       ...obj,
//       backgroundColor: 'blue'
//     })
//     setArr(arr.map((item) => item * 2))
//   }

//   return <button style={obj} onClick={handleClilck}>{arr}</button>
  
// }


// function App() {
//   return (
//     <div>
//       <MyButton />
//     </div>
//   );
// }

// export default App;


// 实现列表渲染以及删除功能


// import { useState } from 'react';
// import './index.css'

// function App() {
//   // 列表包含id、name、age属性
//   const users = [
//     { id: 3, name: 'Alice', age: 50 },
//     { id: 2, name: 'Bob', age: 44 },
//     { id: 5, name: 'Charlie', age: 18 }
//   ]

//   // 创建状态变量
//   const [list, setList] = useState(users)

//   // 定义删除函数
//   const handleDel = (id) => {
//     setList(list.filter((user) => user.id !== id))
//   }

//   // 定义tablist
//   const tabList = [
//     { type:'id', content:'根据ID排序'},
//     { type:'age', content:'根据年龄排序'}
//   ]

//   const [type, setType] = useState('id')

//   const handleTabChange = (type) => {
//     setType(type)
//     setList([...list].sort((a, b) => {
//       return type === 'id' ? a.id - b.id : a.age - b.age
//     }))
//   }

//   return (
//     <div className="App">
//       {
//         tabList.map((tab) => (
//           <span key={tab.type} onClick={()=>handleTabChange(tab.type)} className={`tab ${type === tab.type ? 'active' : ''}`}>{tab.content}</span>
//         ))
//       }
//       {/* 列表渲染list */}
//       <ul>
//         {list.map((user) => (
//           <li key={user.id}>{user.name} - {user.age}<button onClick={()=>handleDel(user.id)}>Delete</button></li>
//         ))}
//         </ul>
//     </div>
//   );
// }

// export default App;


// 实现表单的受控绑定

// import { useState } from 'react';

// function App() {

//   const [text, setText] = useState('')

//   const handleChange = (e) => {
//     setText(e.target.value)
//   }

//   return (
//     <div>
//       <input type='text' value={text} onChange={handleChange}></input>
//       <p>{text}</p>
//     </div>
//   );
// }

// export default App;

// 获取并打印DOM元素

// import { useRef } from 'react';

// function App() {

//   const htmlElement = useRef(null)

//   const getDomElement = () => {
//     console.log(htmlElement.current)
//   }

//   return (
//     <div>
//       <span ref={htmlElement}>this is the element we need</span>
//       <button onClick={getDomElement}>Get span</button>
//     </div>
//   );
// }

// export default App;



// 实现列表内容的新增

// import { useRef, useState } from 'react';
// import './index.css'

// function App() {
//   // 列表包含id、name、age属性
//   const users = [
//     { id: 3, name: 'Alice', age: 50 },
//     { id: 2, name: 'Bob', age: 44 },
//     { id: 5, name: 'Charlie', age: 18 }
//   ]

//   // 创建状态变量
//   const [list, setList] = useState(users)

//   // 定义删除函数
//   const handleDel = (id) => {
//     setList(list.filter((user) => user.id !== id))
//   }

//   // 定义tablist
//   const tabList = [
//     { type:'id', content:'根据ID排序'},
//     { type:'age', content:'根据年龄排序'}
//   ]

//   const [type, setType] = useState('id')

//   const handleTabChange = (type) => {
//     setType(type)
//     setList([...list].sort((a, b) => {
//       return type === 'id' ? a.id - b.id : a.age - b.age
//     }))
//   }

//   const[textVal, setTextVal] = useState('')

//   const handleInput = (e) => {
//     setTextVal(e.target.value)
//   }

//   const handelAddListItem = () =>{
//     setList([...list, {id: list.length + 1, name: textVal, age: 20}])
//     setTextVal('')
//     textVal.current.focus()
//   }

//   const inputRef = useRef(null)

//   return (
//     <div className="App">
//       <input type='text' value={textVal} onChange={handleInput} ref={inputRef}></input>
//       <button onClick={handelAddListItem}>Add</button>
//       {
//         tabList.map((tab) => (
//           <span key={tab.type} onClick={()=>handleTabChange(tab.type)} className={`tab ${type === tab.type ? 'active' : ''}`}>{tab.content}</span>
//         ))
//       }
//       {/* 列表渲染list */}
//       <ul>
//         {list.map((user) => (
//           <li key={user.id}>{user.name} - {user.age}<button onClick={()=>handleDel(user.id)}>Delete</button></li>
//         ))}
//         </ul>
//     </div>
//   );
// }

// export default App;


// 实现父子通信

// const Son  = (props) =>{
//   console.log(props)
//   // 通过props获取父组件传递的函数、对象、变量、甚至是JSX模板
//   return <div onClick={props.handleClick}>Click me！
//   {props.message} 
//   {props.obj.name} 
//   {props.obj.age}
//   {props.jsx}
//   </div>
// }

// function App() {
//   // 来自父组件的函数
//   const handleClick = () => {
//     console.log('Button Clicked!Functon from parent')
//   }
//   // 来自父组件的变量
//   const message = "This is a message from parent"

//   return (
//     <div>
//       <Son
//       handleClick={handleClick}
//       message={message}
//       obj={{name: 'Alice', age: 20}}
//       jsx={<div>JSX from parent</div>}
//       ></Son>
//     </div>
//   );
// }

// export default App;


// const Son  = (props) =>{
//   console.log(props)
//   return <div>I am Som component {props.children}</div>
// }

// function App() {


//   return (
//     <div>
//       <Son>
//         <span>
//           this is a span from parent
//         </span>
//       </Son>
//     </div>
//   );
// }

// export default App;


// import  { useState } from 'react'

// const Son  = (props) =>{
//   return <button onClick={() => props.handleClick('message from Son')}>CLick me to communicate with parent</button>
// }

// function App() {
//   // 定义用于接收子组件传递的消息的状态变量
//   const [message, setMessage] = useState('Initial Message')

//   // 定义传递给子组件的函数
//   const handleClick = (mes) => {
//     setMessage(mes)
//   }
//   return (
//     <div>
//       <Son handleClick={handleClick}></Son>
//       <p>{message}</p>
//     </div>
//   );
// }

// export default App;


// import  { useState } from 'react'

// const Son  = (props) =>{
//   return <button onClick={() => props.handleClick('message from Son')}>CLick me to communicate with parent</button>
// }

// function App() {
//   // 定义用于接收子组件传递的消息的状态变量
//   const [message, setMessage] = useState('Initial Message')

//   // 定义传递给子组件的函数
//   const handleClick = (mes) => {
//     setMessage(mes)
//   }
//   return (
//     <div>
//       <Son handleClick={handleClick}></Son>
//       <p>{message}</p>
//     </div>
//   );
// }

// export default App;


// import { useState } from 'react'

// // 定义组件A
// const A = (props) => {
//   // 接收父组件传递的函数从而实现通信
//   return <button onClick={() => props.handleClick('this is a message from A')}>A</button>
// }

// //定义组件B
// const B = (props) => {
//   // 接收信息并显示信息
//   return <div>B {props.mes}</div>
// } 


// function App() {

//   // 定义一个变量，用于实现兄弟组件的通信
//   const [message, setMessage] = useState('')

//   // 定义一个函数，用于实现子组件A向父组件传递消息
//   const handleClick = (mes) => {
//     setMessage(mes)
//   }

//   return (
//     <div>
//       <A handleClick={handleClick}></A>
//       {/* 直接绑定属性实现父组件向子组件传递参数 */}
//       <B mes={message}></B>
//     </div>
//   );
// }

// export default App;



// import { useState } from 'react'

// // 定义组件A
// const A = (props) => {
//   // 接收父组件传递的函数从而实现通信
//   return <button onClick={() => props.handleClick('this is a message from A')}>A</button>
// }

// //定义组件B
// const B = (props) => {
//   // 接收信息并显示信息
//   return <div>B {props.mes}</div>
// } 


// function App() {

//   // 定义一个变量，用于实现兄弟组件的通信
//   const [message, setMessage] = useState('')

//   // 定义一个函数，用于实现子组件A向父组件传递消息
//   const handleClick = (mes) => {
//     setMessage(mes)
//   }

//   return (
//     <div>
//       <A handleClick={handleClick}></A>
//       {/* 直接绑定属性实现父组件向子组件传递参数 */}
//       <B mes={message}></B>
//     </div>
//   );
// }

// export default App;




// import { createContext, useContext } from 'react'

// // 1.使用createContext创建一个上下文对象Ctx
// const Ctx = createContext()

// // B组件下的一级组件，最底层组件
// const A = () => {
//   // 在底层组件中使用React Hook useContext获取数据
//   const ctx = useContext(Ctx)
//   return <div>A {ctx.name} {ctx.age}</div>
// }

// //APP下一级组件组件B
// const B = () => {
//   return <div>B <A></A></div>
// } 


// // 顶级组件APP
// function App() {

//   return (
//     <div>
//       {/* 2.在顶层组件使用Ctx.Provider组件传递信息 */}
//       <Ctx.Provider value={{name: 'Alice', age: 20}}>
//         <B></B>
//       </Ctx.Provider>
//     </div>
//   );
// }

// export default App;


// import { useEffect, useState } from 'react'

// const Son = () =>{
//   return <div>Son</div>
// }


// function App() {

//   const [show,setShow] = useState(true)

//   useEffect(()=>{
//     console.log('useEffect')
//   })

//   return (
//     <div>
//       {show && <Son></Son>}
//       <button onClick={()=>setShow(!show)}>Toggle</button>
//     </div>
//   );
// }

// export default App;


// import { useEffect, useState } from 'react'

// const Son = () =>{
//   useEffect(()=>{
//     const interval = setInterval(()=>{
//       console.log('Son')
//     }, 1000)
//   return ()=>{
//     clearInterval(interval)
//   }
//   })
//   return <div>Son</div>
// }

// function App() {
//   const [show, setShow] = useState(true)

//   return (
//     <div>
//       {show && <Son></Son>}
//       <button onClick={()=>setShow(!show)}>Toggle</button>
//     </div>
//   );
// }

// export default App;


// import { useState } from 'react'

// const Son = () =>{
//   return <div>Son</div>
// }

// const useShow = () => {
//   const [show, setShow] = useState(true)
//   const toggle = () => {
//     setShow(!show)
//   }
//   return [show, toggle]
// }

// function App() {

//   const [show, toggle] = useShow()

//   return (
//     <div>
//       {show && <Son></Son>}
//       <button onClick={toggle}>Toggle</button>
//     </div>
//   );
// }

// export default App;

// import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement,addNumtoCount } from "./store/modules/counterStore";

// function App() {

//     // 通过useSelector获取状态这里的counter是在configureStore中定义的key对应的值
//     const { count } = useSelector((state) => state.counter)
//     const dispatch = useDispatch()

//   return (
//     <div>
//         <button onClick={() => dispatch(increment)}>+</button>
//         {count}
//         <button onClick={() => dispatch(decrement)}>-</button>
//         <button onClick={() => dispatch(addNumtoCount(5))}>+5</button>
//     </div>
//   );
// }

// export default App;

import { useDispatch } from "react-redux";
import { fetchChannels } from "./store/modules/channelStore";
import { useEffect } from "react";


function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchChannels())
    }, [dispatch])
    
  return (
    <div>
      ...
    </div>
  );
}

export default App;


