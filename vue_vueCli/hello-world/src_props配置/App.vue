<template>
  <div>
    <!-- 
      :age=xx  
        冒号: 将属性转换为vue双向绑定可可只执行简单的 js 语句，所以此时 age 的值可以被执行
     -->
    <student name="张三" :age="20+1" sex='男'/>
    <student name='李四' :age="30+1" sex='女'/>
    <hr/>
  </div>
</template>

<script>
  import Student from './components/Student.vue'
  export default {
    name:'App',
    components:{
      Student
    }
  }
</script>

<style>

</style>