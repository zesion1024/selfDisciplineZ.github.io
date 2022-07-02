<template>
  <div class="container">
    <div class="row">   
      <div class="list-group col-md-2 col-md-offset-2">
        <router-link active-class="active" to="/about" class="list-group-item">About</router-link>
        <router-link active-class="active" to="/home" class="list-group-item">Home</router-link>
      </div>

      <div class="col-md-5 panel-default">
        <div class="panel-body">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'App',
}
</script>

<style>
  .container{
    margin-top: 100px;
  }
</style>
