<template>
    <div class="box">
        <Student :setStudentName="setStudentName"/>
        <!-- 
            第一步：
                给子组件绑定一个自定义事件 cjxy
                <School @cjxy="setschool"/>
         -->
        <School @cjxy="setschool"/>
    </div>
</template>

<script>
    import School from './components/School.vue'
    import Student from './components/Student.vue'

export default {
    name:'App',
    components:{
        School,
        Student
    },
    methods:{
        // 第二步: 给自定义事件添加一个方法，当子组件调用时返回子组件的name
        setschool(name){
            console.log(name);
        },
        setStudentName(name){
            console.log(name);
        }
    }
}
</script>

<style>
    .box{
        height: 300px;
        padding-top: 20px;
        background-color: rgb(230, 215, 194);
    }
</style>