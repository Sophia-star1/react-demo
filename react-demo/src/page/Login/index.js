import { Link, Outlet, useSearchParams } from "react-router-dom"

// Login组件
const Login = () => {
    // const searchPara = useSearchParams()
    // // 获取username和password参数
    // const username = searchPara.get('username')
    // const password = searchPara.get('password')
    return <div><Link to='/article/112/john'>点击我去article</Link>this is login page<Outlet></Outlet></div>
}

export default Login