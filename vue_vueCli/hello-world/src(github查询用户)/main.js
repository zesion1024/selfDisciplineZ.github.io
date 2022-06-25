import Vue from 'vue'
import App from './App'
Vue.config.productionTip = false

new Vue({
    el:'#app',
    render: h => h(App),
    beforeCreate(){
        //生命周期钩子中的 this 就是钩子所属的 vue 实例
        Vue.prototype.$bus = this  // 安装全局事件总线
      },
})