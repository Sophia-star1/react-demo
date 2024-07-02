import React from 'react';
import ReactDOM from 'react-dom/client';

// Provider
import { Provider } from 'react-redux';
import store from './store';

// 导入路由所必须的组件和方法
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// 创建router

// const router = createBrowserRouter([
//     {
//         path: '/page1',
//         element:<div>page1</div>
//     },
//     {
//         path: '/page2',
//         element:<div>page2</div>
//     }
// ])


import { RouterProvider, useNavigate } from 'react-router-dom';
import router from './router';

const root = ReactDOM.createRoot(document.getElementById('root'));
// useNavigate
root.render(
    <Provider store={store}>
        this is parent page
        {/* <Link to='/login'>点我跳转login</Link> */}
        {/* 挂载RouterProvider */}
        <RouterProvider router={router}>
        </RouterProvider>
    </Provider>
);

