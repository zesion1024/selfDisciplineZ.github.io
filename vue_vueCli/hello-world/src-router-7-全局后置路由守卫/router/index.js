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
            component:About,
            meta:{
                title:'关于'
            }
        },
        {
            path:'/home',
            component:Home,
            meta:{
                title:'首页'
            },
            children:[
                {
                    path:'news',
                    component:News,
                    // 判断isAuth是否有权限进入
                    meta:{
                        isAuth:true,
                        title:'新闻'
                    }
                },
                {
                    path:'message',
                    component:Message,
                    meta:{
                        isAuth:true,
                        title:'消息'
                    },
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

// 全局前置路由守卫---初始化的时候被调用、每次路由切换之前被调用
router.beforeEach((to,from,next)=>{
    if (to.meta.isAuth) {  // 判断是否有权限 
        if (localStorage.getItem('school') == 'cjxy') {
            next()
        }else{
            alert('学校无权限查看')
        }
    }else{
        next()
    }
})


// 全局后置路由守卫---初始化的时候被调用、每次路由切换之后被调用
router.afterEach((to,from)=>{
    // 当切换页面之后读取meta中的title值放入浏览器标签中，'8080/#/' 地址没有配置title 则显示首页  
    document.title = to.meta.title || '首页'
})

export default router