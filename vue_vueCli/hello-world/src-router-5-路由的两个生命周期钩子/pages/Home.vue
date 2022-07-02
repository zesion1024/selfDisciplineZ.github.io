<template>
  <div>
    <h1>Home 组件</h1>
    <!-- <div class="row list-group">
      <router-link active-class="active" to="/Home/News" class="col-md-3 list-group-item">新闻</router-link>
      <router-link active-class="active" to="/Home/Message" class="col-md-3 list-group-item">消息</router-link>
    </div> -->
    <ul class="nav nav-pills">
      <li>
        <router-link active-class="active" class="list-group-item" to="/Home/News">News</router-link>
        </li>
      <li>
        <router-link active-class="active" class="list-group-item" to="/Home/Message">Message</router-link>
        </li>
    </ul>
    <br>

    <!-- 利用keep-alive缓存路由数据使切换路由组件不被销毁数据不丢失 include中写入"组件名"-->
    <keep-alive include="Home_News">
      <router-view></router-view>
    </keep-alive>

  </div>  
</template>

<script>
    export default {
        name:'Home',
    }
</script>

<style>

</style>