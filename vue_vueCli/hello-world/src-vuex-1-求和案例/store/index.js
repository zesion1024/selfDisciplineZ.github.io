// 引入 Vue
import Vue from 'vue';

// 引入 Vuex
import Vuex from 'vuex'
// 使用 vuex
Vue.use(Vuex)

// 准备actions-用于响应组件中的动作
const actions = {
    
// 由于此处加减没有逻辑需求，只做数据转发没有实际作用，所以在组件中可以跳过此处直接与mutations对话
    // add(context,value){
    //     // console.log(context,value);
    //     context.commit('ADD',value);
    // },
    // reduce(context,value){
    //     context.commit('REDUCE',value)
    // },



    oddAdd(context,value){
        if (context.state.sum % 2) {
            context.commit('ADD',value)
        }
    },
    waitAdd(context,value){
        setTimeout(() => {
             context.commit('ADD',value)
        }, 1000);
    }
}
// 准备mutations-用于操作数据
const mutations = {
    ADD(state,value){
        // console.log(state,value);
        state.sum += value
    },
    REDUCE(state,value){
        state.sum = state.sum - value
    }
}
// 准备state-用于存储数据
const state = {
    sum: 0
}

// 创建并暴露store
export default new Vuex.Store({
    // ...
    // 完全写法
    // actions:actions,
    // mutations:mutations,
    // state:state

    // 简写
    actions,
    mutations,
    state
})