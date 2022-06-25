<template>
  <div class="school">
      <h3>123:{{name}}</h3>
      <h3>456:{{name2}}</h3>
      <button @click="send">点击</button>
  </div>
</template>

<script>
    export default {
        name:'School',
        data() {
            return {
                name:'长江职业学院',
                name2:'湖北武汉'
            }
        },
        methods:{
            // 第三步: 触发点击事件，将此组件的name值通过 $emit 返回到 cjxy 这个自定义事件中
            send(){
                this.$emit('cjxy',this.name)
            }
        }
    }
</script>

<style>
    .school{
        background-color: burlywood;
    }
</style>