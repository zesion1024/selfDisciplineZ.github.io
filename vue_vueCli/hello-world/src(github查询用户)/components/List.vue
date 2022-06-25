<template>
    <div class="row row-cols-md-5 g-4">
        <div class="col" v-for="user in userList" :key="user.login">
            <div class="card">
                <a :href="user.html_url" target="_blank">
                    <img :src="user.avatar_url" class="card-img-top">
                </a>
                <h5 class="card-title">{{user.login}}</h5>
            </div>
        </div>
        <div class="info text-justify">
            <!-- 欢迎 --> 
            <h1 v-show="isFirst">Welcom to use</h1>
            <!-- 加载 -->
            <h1 v-show="isLoading">Loading....</h1>
            <!-- 错误 -->
            <h1 v-show="errMsg">{{errMsg}}</h1>
            <!-- 查无此人 -->
            <h1 v-show="noUser">查无此人，请重新查询</h1>
        </div>
    </div>
</template>

<script>
    export default {
        name:'List',
        data() {
            return {
                // 用户列表
                userList : [],
                // 是否显示欢迎界面 welcom to use
                isFirst : true,
                // 加载界面
                isLoading : false,
                // 错误界面
                errMsg : '',
                // 查无此人
                noUser : ''
            }
        },
        mounted() {
            // 给 bus 绑定全局事件 userPage 传 5 个回调过去
            this.$bus.$on('usersPage',(userList,isFirst,isLoading,errMsg,noUser)=>{
                // 将传回来的回调赋值给此组件
                this.userList = userList,
                this.isFirst = isFirst,
                this.isLoading = isLoading,
                this.errMsg = errMsg,
                this.noUser = noUser
            })
        }
    }
</script>

<style scoped>
    .card {
      width: 100%;
      text-align: center;
      float: left;
    }
  
    .card img {
      width: 60%;
      margin: 10px auto 0 auto;
    }
    .info{
        min-width: 100%;
    }
</style>