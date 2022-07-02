<template>
    <div>
        <ul class="row">
            <li v-for="m in mesList" :key="m.id">
                <!-- 跳转路由并携带query参数，to的字符串写法 -->
                <!-- <router-link :to="`/home/message/detial?id=${m.id}&title=${m.title}`">{{m.title}}</router-link> -->
                <!-- 跳转路由并携带query参数，to的对象写法 -->
                <router-link :to="{
                    path:'/home/message/detial',
                    query:{
                        id: m.id,
                        title: m.title
                    }
                }">
                {{m.title}}
                </router-link>
            </li>
        </ul>
        <router-view></router-view> 
    </div>
</template>

<script>
    export default {
        data() {
            return {
                mesList:[
                    {id:'001',title:'消息001'},
                    {id:'002',title:'消息002'},
                    {id:'003',title:'消息003'},
                    {id:'004',title:'消息004'}
                ]
            }
        },
    }
</script>

<style>

</style>