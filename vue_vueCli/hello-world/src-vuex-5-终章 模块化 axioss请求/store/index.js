// 引入 Vue
import Vue from 'vue';

// 引入 Vuex
import Vuex from 'vuex'
// 使用 vuex
Vue.use(Vuex)
import countOptions from './count'
import personOptions from './person'

// 创建并暴露store
export default new Vuex.Store({
    // ...
    // 完全写法
    // actions:actions,
    // mutations:mutations,
    // state:state

    modules:{
    // 非简写
        // countOptions:countOptions
        // personOptions:personOptions
    // 简写
        countOptions,
        personOptions
    }
})