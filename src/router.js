import Vue from 'vue'
// 1.引入安装好的vue-router
import Router from 'vue-router'

import Login from './views/login'

// 2注册路由中间件
Vue.use(Router)

export default new Router({
    // 5.定义路由
    // 重定向
    routes: [{
            path: '/',
            name: 'login',
            component: Login
        },

    ]
})