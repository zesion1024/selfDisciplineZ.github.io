<template>
    <div class="studnet">
        <h3>学生姓名: {{name}}</h3>
        <h3>学生年龄: {{age}}</h3>
    </div>
</template>

<script>
export default {
    name:'Studnet',
    data() {
        return {
            name:'张三',
            age: 200
        }
    },
}   
</script>
    
<style>
    .studnet{
        background-color: aqua;
    }
</style>