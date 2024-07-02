// modules目录下的子路由
import { articleRouter } from "./modules/articleRouter";
import { homeRouter } from "./modules/homeRouter";
import { errorRouter } from "./modules/errotRouter";

// 导入创建路由的函数
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    ...homeRouter,
    ...articleRouter,
    ...errorRouter
]) 

export default router