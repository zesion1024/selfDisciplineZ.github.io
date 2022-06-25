<template>
    <div class="category">
        <h3>{{title}}</h3>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'Category',
        props:['listData','title']
    }
</script>

<style>
    .category{
        width: 200px;
        height: 300px;
        background-color: skyblue;
    }
    h3{
        background-color: orange;
        text-align: center;
    }
    img{
        width: 100%;
    }
</style>