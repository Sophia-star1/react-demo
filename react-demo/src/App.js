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


const isLoggedIn = false

// 复杂条件渲染函数
const Greeting = () => {
  // if判断语句
  if (isLoggedIn) {
    return <p>Welcome User</p>
  } else {
    return <p>Welcome Guest</p>
  }
}


function App() {
  return (
    <div className="App">
      this is a demo
    {/* 使用逻辑与实现条件渲染 */}
    {isLoggedIn && <p>Welcome User</p>}
    {/* 使用三元表达式实现条件渲染*/}
    {isLoggedIn ? <p>Welcome User</p> : <p>Welcome Guest</p>}
    {/* 复杂的条件渲染：自定义函数 + if判断 */}
    {Greeting()}
    </div>
  );
}

export default App;