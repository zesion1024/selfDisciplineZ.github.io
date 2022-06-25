<template>
    <div>
        <h1>当前求和为：{{sum}}</h1>
        <h1>我在{{school}}学习{{subject}}</h1>
        <select v-model="n">
            <option :value= 1>1</option>
            <option :value= 2>2</option>
            <option :value= 3>3</option>
        </select>
        <button @click="add">+1</button>
        <button @click="reduce">-1</button>
        <button @click="oddAdd">当前值为奇数加一</button>
        <button @click="waitAdd">等一等加一</button>
    </div>
</template>


<script>
// mapState 用于简化模板中插值语法写的过于臃肿
    import {mapState} from 'vuex'
    export default {
        name:'Count',
        data() {
            return {
                n: 1,
            }
        },
        methods:{
            add(){
                this.$store.commit('ADD',this.n)
            },
            reduce(){
                this.$store.commit('REDUCE',this.n)
            },
            oddAdd(){
                // if (this.sum % 2) {
                //     this.sum += this.n 
                // }
                this.$store.dispatch('oddAdd',this.n)
            },
            waitAdd(){
                // setTimeout(() => {
                //     this.sum += this.n 
                // }, 500);
                this.$store.dispatch('waitAdd',this.n)
            },
        },
        computed:{
        // 1.程序员自己计算 state 变量放入模板
            // sum(){
            //     return this.$store.state.sum
            // },
            // school(){
            //     return this.$store.state.school
            // },
            // subject(){
            //     return this.$store.state.subject
            // }

        // 2.借用 mapState 计算出state变量，使用key value类型传入 两个值：放入模板中的变量名和vuex中state中的数据
            // "..." Es6语法 意为将对象展开之后放入
            // (对象写法)
            // ...mapState({sum:'sum',school:'school',subject:'subject'})
            // (数组写法，要求key 和 value 同名)
            ...mapState(['sum','school','subject'])
 
        }
    }
</script>

<style>
    button{
        margin-left: 5px;
    }
</style>