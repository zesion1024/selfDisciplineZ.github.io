<template>
    <div>
      <count/>
      <br>
      <hr>
      <person/>
    </div>
</template>

<script>
  import Count from './components/Count'
  import Person from './components/Person'
  export default {
    name:'App',
    components:{
      Count,
      Person
    },
}
</script>

<style>

</style>
