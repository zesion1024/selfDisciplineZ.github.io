<template>
  <div class="student">
      <h3>147:{{name3}}</h3>
      <h3>258:{{name4}}</h3>
      <button @click="sendStudentName">点击</button>
  </div>
</template>

<script>
    export default {
        name:'Student',
        props:["setStudentName"],
        data() {
            return {
                name3:'张三',
                name4: 20
            }
        },
        methods:{
            sendStudentName(){
                this.setStudentName(this.name3)
            }
        }
    }
</script>

<style>
    .student{
        background-color: chocolate;
    }
</style>