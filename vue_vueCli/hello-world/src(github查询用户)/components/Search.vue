<template>
    <div class="toubu">
        <input v-model="keyWord" type="text">
        <button @click="searchUsers">搜索</button>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name:'Search',
        data() {
            return {
                keyWord:''
            }
        },
        methods:{
            searchUsers(){
                // 当输入框为空时
                if (!this.keyWord) {
                    alert('请输入有效查询名称')
                    window.location.reload()
                }else{
                    // 触发事件返回三个数值 userList isFirst isLoading errMsg nouser
                    this.$bus.$emit('usersPage','',false,true,'')
                }
                axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
                    Response =>{
                        // 当连接成功是拿到数据将数据赋值给 usersPage 的回调
                        this.$bus.$emit('usersPage',Response.data.items,false,false,false)
                        // 当连接成功并且没有查到此人时
                        if (!Response.data.items.length) {
                            console.log(Response.data.items);
                            this.$bus.$emit('usersPage','',false,false,false,true,true)
                        }
                    },
                    Error =>{
                        // 连接错误时将错误状态返回
                        this.$bus.$emit('usersPage','',false,false,Error.message)
                    }
                )
            }
        }
    }
</script>

<style>
    .toubu {
        height: 150px;
        border-radius: 8px;
        margin-bottom: 1%;
        padding: 6% 0 0 5%;
        background-color: rgb(238, 238, 238)
    }
    .toubu button {
        border: solid 1px;
    }
</style>