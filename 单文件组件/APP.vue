<template>
    <div>
        <school></school>
        <student></student>
    </div>
</template>

<script>
    import Student from "./student.vue";
    import School from './school.vue'
    export default {
        name:'App',
        comments:{
            School,
            Student
        }
    }

</script>

<style>

</style>