<template>
    <div class="school">
        <div>学校名称:{{name}}</div>
        <div>学校地址:{{address}}</div>
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
        mounted() {
            // this.$bus ===> Student.VueComponent ----> Vue ----> vue.VueComponent.$bus
            // 往 vue 的原型链上添加一个 "hello" 自定义事件
            this.$bus.$on('hello',(data) => {
                console.log('我是School组件我接收到了Student的数据',data);
            })
        },
        // 当此组件销毁时清除此自定义事件
        beforeDestroy() {
            this.$bus.$off('hello')
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
