/* router.js 管理路由相关信息 */

import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

/*index*/
import index from '@/views/index/index'

export default new Router({
    mode: 'history',
    routes: [
        {
            path:"/",
            component:index
        },
        {
            path:"/index",
            name:"index",
            component:index
        }
    ]
})
