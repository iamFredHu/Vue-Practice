import VueRouter from 'vue-router'
import Vue from 'vue'

import About from '@/pages/About'
import Home from '@/pages/Home'
import News from "@/pages/home/News"
import Message from "@/pages/home/Message";
import Detail from "@/pages/home/news/Detail";

Vue.use(VueRouter)

const router = new VueRouter({
    mode:'history',
    routes: [
        {
            name: 'about',
            path: '/about',
            component: About,
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'news',
                    name: 'news',
                    component: News,
                    meta: {isAuth: true, title: '新闻'},
                    beforeEnter: (to, from, next) => {
                        if (to.meta.isAuth) {
                            if (localStorage.getItem('school') === 'hitsz') {
                                next()
                            } else {
                                alert("无权查看")
                            }
                        } else {
                            next()
                        }
                    },
                    children: [
                        {
                            name: 'detail',
                            // path: 'detail',
                            path: 'detail/:id/:title',
                            component: Detail,
                            props: true // 为true 将会把路由器收到的所有prams参数传过去
                            // 第一种写法是对象，第三种写法是函数 函数return对象，会传给props，这样query也可以用了
                        }
                    ]
                },
                {
                    name: 'message',
                    path: 'message',
                    meta: {isAuth: true, title: '消息'},
                    component: Message
                },
            ]
        },
    ]
})

// // 全局前置路由守卫 初始化的时候被调用，每次切换的时候被调用
// router.beforeEach((to, from, next) => {
//     if (to.meta.isAuth) {
//         if (localStorage.getItem('school') === 'hitsz') {
//             next()
//         } else {
//             alert("无权查看")
//         }
//     } else {
//         next()
//     }
// })
//
// // 全局后置路由守卫
// router.afterEach((to, from) => {
//     document.title = to.meta.title || "vue-r"
// })

export default router

