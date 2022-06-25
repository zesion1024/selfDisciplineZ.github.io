<template>
    <div>
        <h1>当前求和为：{{sum}}</h1>
        <h1>我在{{school}}学习{{subject}}</h1>
        <h1>person组件总人数是 {{personList.length}}</h1>
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
            ...mapActions(['oddAdd','waitAdd']),
            ...mapMutations(['ADD','REDUCE'])
        },


        computed:{
            ...mapState(['sum','school','subject','personList'])
 
        }
    }
</script>

<style>
    button{
        margin-left: 5px;
    }
</style>