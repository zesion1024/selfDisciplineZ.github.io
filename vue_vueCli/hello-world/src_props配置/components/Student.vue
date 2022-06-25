<template>
  <div class="div">
      <h3>学生姓名: {{name}}</h3>
      <h3>学生年龄: {{age}}</h3>
      <h3>学生性别: {{sex}}</h3>
  </div>
</template>

<script>
    export default {
        name:'Student',
        data() {
            return {

            }
        },
            // 简单声明接受
        props:['name','sex','age'],
            // 接受的同时对数据类型进行限制
        // props:{
        //     name:'string',
        //     age:'number',
        //     sex:'string'
        // }
            // 接受的同时对数据类型进行限制+默认值的指定+必要值的限定
        // props:{
        //     name:{
        //         type:String,    // name的类型是字符串
        //         required:true   // name的值是必须要传入的
        //     },
        //     age:{
        //         type:Number,
        //         default:100     // 可传可不传，如果没有传入则默认值为xxx
        //     },
        //     sex:{
        //         type:String,
        //         required:true
        //     }
        // }

    }
</script>

<style>
    .div{
        background-color: burlywood;
    }
</style>