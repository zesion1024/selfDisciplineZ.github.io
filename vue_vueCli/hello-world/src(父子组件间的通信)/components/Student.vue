<template>
    <div class="student">
        <div>学生姓名:{{name}}</div>
        <div>学生年龄:{{age}}</div>
        <button @click="demo">点击获取学生姓名</button>
        <button id="btn2" @click="demo01">点击解绑获取姓名事件</button>
        <button @click="demo02">点击解绑所有事件</button>
    </div>
</template>

<script>
    export default {
        name:'Student',
        data() {
            return {
                name:'张三',
                age: 18
            }
        },
        methods: {
            demo(){
                this.$emit('zhangsan', this.name)
                this.$emit('cjxy2')
            },
            demo01(){
                this.$off('zhangsan')
            },
            demo02(){
                this.$off(['zhangsan','cjxy2'])
            }
        },
    }
</script>

<style scoped>
    .student{
        height: 200px;
        width: 100%;
        border: solid 1px;
        background-color: rgb(224, 174, 121);
    }
    #btn2{
        margin: 0 10px;
    }
</style>
