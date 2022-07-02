<template>
  <div class="row">
      <ul>
    <li :style="{opacity}">欢迎学习vue</li>
        <li>新闻01 <input type="text"></li>
        <li>新闻02 <input type="text"></li>
        <li>新闻03 <input type="text"></li>
        <li>新闻04 <input type="text"></li>
      </ul>
    </div>
</template>

<script>
    export default {
        name:'Home_News',
        data() {
          return {
            opacity:1
          }
        },
        // mounted() {
        //   this.timer = setInterval(() => {
        //     this.opacity -= 0.01
        //     if (this.opacity <= 0) {
        //       this.opacity = 1
        //     }
        //   }, 16);
        // },

        // beforeDestroy() {
        //   clearInterval(this.timer)
        // },

        //当 news 组件被激活时调用定时器 
        activated() {
          this.timer = setInterval(() => {
            console.log('定时器开启');
            this.opacity -= 0.01
            if (this.opacity <= 0) {
              this.opacity = 1
            }
          }, 16);
          console.log('news 被激活了');
        },
        // 当news组件失活时清除定时器
        deactivated() {
          clearInterval(this.timer)
          console.log('news 失活了');
        },
    }
</script>

<style>

</style>