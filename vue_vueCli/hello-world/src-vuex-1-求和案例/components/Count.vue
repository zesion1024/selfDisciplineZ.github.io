<template>
    <div>
        <h1>当前求和为：{{$store.state.sum}}</h1>
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
    }
</script>

<style>
    button{
        margin-left: 5px;
    }
</style>