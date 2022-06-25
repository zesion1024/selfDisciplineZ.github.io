import Vue from 'vue'
import App from './App.vue'

// 引入 store
import store from './store/index'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  beforeCreate(){
    //生命周期钩子中的 this 就是钩子所属的 vue 实例
    Vue.prototype.$bus = this  // 安装全局事件总线
  },
}).$mount('#app')

