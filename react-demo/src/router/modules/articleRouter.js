import Article from "../../page/Article"

export const articleRouter =  [
    {
        path: '/article/:id/:name',
        element: <Article />
    }
]