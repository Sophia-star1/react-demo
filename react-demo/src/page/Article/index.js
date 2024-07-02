import { Outlet, useNavigate, useParams } from "react-router-dom"

// Article组件
const Article = () => {
    const navigate = useNavigate()
    const para = useParams()
    // 获取id和name参数
    const id = para.id
    const name = para.name

    return <div><button onClick={()=>{navigate('/login?username=Billy&password=1434115')}}>点击我去login页面</button>this is article page<Outlet></Outlet></div>
}

export default Article