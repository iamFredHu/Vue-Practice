<template>
  <div id="app">
    <School/>
    <Student/>
  </div>
</template>

<script>

import School from "@/components/School";
import Student from "@/components/Student";


export default {
  name: 'App',
  components: {
    School,
    Student
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: white;
  margin-top: 60px;
  background: gray;
  padding: 10px;
}
</style>
