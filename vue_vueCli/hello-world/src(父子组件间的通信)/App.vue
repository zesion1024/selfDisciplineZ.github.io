<template>
  <div>
    <student @zhangsan="demo01" @cjxy2="cjxy2"/>
    <br/>
    <school @cjxy="demo"/>
  </div>
</template>

<script>
import Student from './components/Student.vue'
import School from './components/School.vue'

export default {
  name: 'App',
  components: {
    Student,
    School
  },
  methods: {
    demo(name){
      console.log('学校地址为',name);
    },
    demo01(name){
      console.log('学生姓名为',name);
    },
    cjxy2(){
      console.log('cjxy2被调用了');
    }
  },
}
</script>

<style>

</style>
