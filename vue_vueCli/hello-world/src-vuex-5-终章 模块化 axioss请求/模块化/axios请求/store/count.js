// 此处存放 count 组件的 actions mutations state
export default{
    namespaced:true,
    actions:{
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
    },
    mutations:{
        ADD(state,value){
            // console.log(state,value);
            state.sum += value
        },
        REDUCE(state,value){
            state.sum = state.sum - value
        }
    },
    state:{
        sum: 0,
        school: '长江职业学院',
        subject: '前端',
    }
}