<template>
    <h2>我是 About 组件</h2>
</template>

<script>
    export default {
        name:'About',

        // 组件路由守卫---通过路由规则进入该组件时被调用
        beforeRouteEnter (to, from, next) {
            if (to.meta.isAuth) {  // 判断是否有权限 
                if (localStorage.getItem('school') == 'cjxy') {
                    next()
                }else{
                    alert('学校无权限查看')
                }
            }else{
                next()
            }
        },
        // 组件路由守卫---通过路由规则离开该组件时被调用
        beforeRouteLeave (to, from, next) {
            next()
        }
    }
</script>

<style>

</style>