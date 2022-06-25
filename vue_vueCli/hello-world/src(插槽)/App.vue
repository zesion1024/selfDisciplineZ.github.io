<template>
  <div class="contaner">
    <category title="美食" :listData='foods'>
      <!-- 在 category 组件中插入下面内容。 在category组件中使用solt 标签插入 -->
      <img src="./assets/img/123.jpg" alt="">
    </category>

    <category title="游戏" :listData='games'>
      <ul>
        <li v-for="itme in games" key="index">{{itme}}</li>
      </ul>
    </category>

    <category title="电影" :listData='films'>
      <ul>
            <li v-for="itmes in games" key="index">{{itmes}}</li>
      </ul>
      <img src="./assets/img/123.jpg" alt="">
    </category>

  </div>
</template>

<script>
  import Category from './components/Category'
  export default {
    name:'App',
    components:{
      Category
    },
    data() {
      return {
        foods:['火锅','烧烤','小龙虾','牛排'],
        games:['红色警戒','穿越火线','超级玛丽','英雄联盟'],
        films:['教父','拆弹专家','尚硅谷','让子弹飞']
      }
    },
}
</script>

<style>
  .contaner{
    width: 700px;
    display: flex;
    justify-content: space-around;
  }
</style>
