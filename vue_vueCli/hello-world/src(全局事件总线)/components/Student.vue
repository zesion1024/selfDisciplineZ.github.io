<template>
    <div class="student">
        <div>学生姓名:{{name}}</div>
        <div>学生年龄:{{age}}</div>
        <button @click="sendStudentName">把学生姓名传给school组件</button>
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
            sendStudentName(){
                // 通过 $emit 去触发 vue 原型链上绑定的自定义事件
                this.$bus.$emit('hello',this.name)
                console.log(this);
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
