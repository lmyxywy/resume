import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import intro from '@/components/intro'
import pic from '@/components/pic'
import web from '@/components/web'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'index',
            component: index
        },
        {
            path: '/intro',
            name: 'intro',
            component: intro
        },
        {
            path: '/pic',
            name: 'pic',
            component: pic
        },
        {
            path: '/web',
            name: 'web',
            component: web
        }
    ]
})