import Login from "../../page/Login"

export const homeRouter =  [
    {
        path: '/login',
        element: <Login />,
        children:[
            {   
                // 设置默认路由
                index: true,
                element:<div>page1</div>
            },
            {
                path: '/login/page2',
                element:<div>page2</div>
            }
        ]
    }
]