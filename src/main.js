import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 手动配置
import './plugins/element.js'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
import './assets/fonts/iconfont.css'
// 导入全局样式表
import './assets/css/global.css'
Vue.config.productionTip = false
    // Vue.use(ElementUI)
import axios from 'axios'
// 配置请求的根路径
axios.defaults.baseURL = "http://127.0.0.1:8888/api/private/v1/"
Vue.prototype.$http = axios
    // 请求拦截器
axios.intereptors.request.use(function(config) {
    config.Headers.common['Aut']
})
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')