<template>
    <div class="school">
        <div>学校名称:{{name}}</div>
        <div>学校地址:{{address}}</div>
        <button @click="demo">点击获取学校名</button>
        <button id="btn2" @click="bind">点击解绑事件</button>
    </div>
</template>

<script>
    export default {
        name:'School',
        data() {
            return {
                name:'长江职业学院',
                address:'湖北武汉'
            }
        },
        methods: {
            demo(){
                this.$emit('cjxy', this.name)
            },
            bind(){
                this.$off('cjxy')
            }
        },
    }
</script>

<style scoped>
    .school{
        height: 200px;
        width: 100%;
        background-color: rgb(46, 193, 137);
    }
    #btn2{
        margin: 0 10px;
    }
</style>
