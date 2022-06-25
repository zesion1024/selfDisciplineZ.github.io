<template>
    <div>
        <h1>当前求和为：{{sum}}</h1>
        <h1>我在{{school}}学习{{subject}}</h1>
        <select v-model="n">
            <option :value= 1>1</option>
            <option :value= 2>2</option>
            <option :value= 3>3</option>
        </select>
        <button @click="ADD(n)">+1</button>
        <button @click="REDUCE(n)">-1</button>
        <button @click="oddAdd(n)">当前值为奇数加一</button>
        <button @click="waitAdd(n)">等一等加一</button>
    </div>
</template>


<script>
    import {mapState,mapMutations,mapActions} from 'vuex'
    export default {
        name:'Count',
        data() {
            return {
                n: 1,
            }
        },
        methods:{
            // add(){
            //     this.$store.commit('ADD',this.n)
            // },
            // reduce(){
            //     this.$store.commit('REDUCE',this.n)
            // },

            // 借助 mapMutations 生成对应的方法，方法中会调用commit去联系mutations(对象写法)
            // ...mapMutations({add:'ADD',reduce:'REDUCE'})
            // 借助 mapMutations 生成对应的方法，方法中会调用commit去联系mutations(数组写法，要保证模板中插入的变量名与store中mutations中的方法名一致)
            ...mapMutations(['ADD','REDUCE']),

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


            // 借助 mapMutations 生成对应的方法，方法中会调用commit去联系mutations(对象写法)
            // ...mapActions({oddAdd:'oddAdd',waitAdd:'waitAdd'})
            // 借助 mapMutations 生成对应的方法，方法中会调用commit去联系mutations(数组写法，要保证模板中插入的变量名与store中mutations中的方法名一致)
            ...mapActions(['oddAdd','waitAdd'])
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