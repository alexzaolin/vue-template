// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'

import util from '@/utils/util.js'

Vue.config.productionTip = false;

Vue.prototype.$util = util; //将常用工具方法扩展到vue实例，即用this.$util调用
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})
