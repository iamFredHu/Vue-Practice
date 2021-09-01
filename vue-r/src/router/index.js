import VueRouter from 'vue-router'
import Vue from 'vue'

import About from '../components/About'
import Home from '../components/Home'

Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home
        },
    ]
})

