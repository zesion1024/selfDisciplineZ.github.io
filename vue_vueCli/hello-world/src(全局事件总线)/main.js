import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  el:'#app',
  render: h => h(App),
  // (往vue原型链上放一个vue实例) 用 beforeCreate 生命周期钩子在初始化 vue 时将 vue 实例添加到原型链 prototype.$bus 上
  beforeCreate(){
    //生命周期钩子中的 this 就是钩子所属的 vue 实例
    Vue.prototype.$bus = this  // 安装全局事件总线
  },
})
