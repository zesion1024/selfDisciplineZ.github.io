import Vue from 'vue'
import App from './App.vue'

// 引入 VueRouter
import VueRouter from 'vue-router'
import router from './router/index'

Vue.config.productionTip = false
// 应用插件
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router,
  beforeCreate(){
    //生命周期钩子中的 this 就是钩子所属的 vue 实例
    Vue.prototype.$bus = this  // 安装全局事件总线
  },
}).$mount('#app')

