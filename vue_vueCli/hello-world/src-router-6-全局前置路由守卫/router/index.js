// 该文件专门用于创建整个应用路由器
import VueRouter from 'vue-router'

// 引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/Home_News'
import Message from '../pages/Home_Message'
import Detial from '../pages/Detial'


// 创建并暴露一个路由器
const router =  new VueRouter({
    routes:[
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home,
            children:[
                {
                    path:'news',
                    component:News
                },
                {
                    path:'message',
                    component:Message,
                    children:[
                        {
                            path:'detial',
                            component:Detial,
                        }
                    ]
                }
            ]
        },
    ]
})

router.beforeEach((to,from,next)=>{
    if (to.path === '/home/news' || to.path === '/home/message') {
        if (localStorage.getItem('school') == 'cjxy') {
            next()
        }else{
            alert('学校无权限查看')
        }
    }else{
        next()
    }
})

export default router