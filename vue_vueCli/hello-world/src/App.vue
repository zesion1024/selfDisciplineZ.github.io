<template>
    <div>
        <school/>
        <school/>
        <school/>
        <hr/>
        <studnet/>
        <studnet/>
        <studnet/>
    </div>
</template>

<script>
    import School from './components/School.vue'
    import Studnet from './components/Studnet.vue'

export default {
    name:'App',
    components:{
        School,
        Studnet
    }
}
</script>

<style>
    
</style>