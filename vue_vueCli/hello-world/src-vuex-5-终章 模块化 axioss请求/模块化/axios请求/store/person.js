import axios from 'axios'
import { nanoid } from 'nanoid';
// 此处存放 persosn 组件的 actions mutations state
export default {
    namespaced:true,
    actions:{
        mode(context,value){
            if (value.name.indexOf('王') === 0) {
                context.commit('ADD_PERSON',value)
            }else{
                alert('添加的人必须姓王')
            }
        },
        addPersonServer(context){
            console.log('addPersonServer--被调用了');
            axios.get('http://api.uixsj.cn/hitokoto/get?type=social').then(
                Response=>{
                    console.log(Response.data);
                    context.commit('ADD_PERSON',{id:nanoid(),name:Response.data})
                },
                Error=>{
                    alert(Error.message)
                }
            )
        }
    },
    mutations:{
        ADD_PERSON(state,value){
            console.log(value);
            state.personList.unshift(value)
        },
    },
    state:{
        personList:[
            {id:'001',name:'张三'}
        ]
    }
}