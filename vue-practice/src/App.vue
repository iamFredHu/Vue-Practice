<template>
  <div id="app">
    <School zh-name="哈尔滨工业大学（深圳）" en-name="Harbin Institute of Technology, Shenzhen" :age='20'></School>
    <Institute zh-name="计算机科学与技术学院" en-name="Institute of Computer Science and Technology" :age='18'></Institute>
  </div>
</template>

<script>


import School from "../src/components/School";
import Institute from "@/components/Institute";

export default {
  name: 'App',
  components: {
    Institute,
    School
  },
}
</script>

<style>
#app {

}
</style>
