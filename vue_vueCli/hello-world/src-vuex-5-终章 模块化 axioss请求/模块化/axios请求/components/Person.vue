<template>
  <div>
    <h1>人员列表</h1>
    <h1>count组件的和是 {{sum}}</h1>
    <input type="text" v-model="name">
    <button @click="add">添加</button>
    <button @click="addWang">添加一个姓王的人</button>
    <button @click="addPersonServer">点击随机生成一个人</button>
    <ul>
        <li v-for="p in personList" :key="p.id">{{p.name}}</li>
    </ul>
  </div>
</template>

<script>
  import {mapActions, mapState} from 'vuex'
  import {nanoid} from 'nanoid'
    export default {
        name:'Person',
        data() {
            return {
                name:'',
            }
        },
        computed: {
          ...mapState('personOptions',['personList','sum'])
        },
        methods: {
          add(){
            const personObj = {id:nanoid(),name:this.name}
            this.$store.commit('personOptions/ADD_PERSON',personObj)
          },

          // mapActions 传递复杂数据写法 添加一个姓王的
          addWang(){
            const personObj = {id:nanoid(),name:this.name}
            this.mode(personObj)
          },
          ...mapActions('personOptions',['mode']),

          // 随机生成一个人
          ...mapActions('personOptions',['addPersonServer']),

          // addPersonServer(){
          //   this.$store.dispatch('personOptions/addPersonServer')
          // }
        },
    }
</script>

<style>

</style>