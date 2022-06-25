<template>
  <div>
    <h1>人员列表</h1>
    <h1>count组件的和是 {{sum}}</h1>
    <input type="text" v-model="name">
    <button @click="add">添加</button>
    <ul>
        <li v-for="p in personList" :key="p.id">{{p.name}}</li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import {nanoid} from 'nanoid'
    export default {
        name:'Person',
        data() {
            return {
                name:''
            }
        },
        computed: {
          ...mapState(['personList','sum'])
        },
        methods: {
          add(){
            const personObj = {id:nanoid(),name:this.name}
            console.log(personObj);
            this.$store.commit('ADD_PERSON',personObj)
          }
        },
    }
</script>

<style>

</style>