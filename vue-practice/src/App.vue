<template>
  <div id="app">
    <!--    <h1>{{ msg }}</h1>-->
    <!--    &lt;!&ndash; 通过父组件给子组件传递函数类型的props实现：数据的子传父 &ndash;&gt;-->
    <!--    <School :getSchoolName='getSchoolName' zh-name="哈尔滨工业大学（深圳）" en-name="Harbin Institute of Technology, Shenzhen"-->
    <!--            :age='20'></School>-->
    <!--&lt;!&ndash;    <Institute v-on:getInsName="getInstituteName" zh-name="计算机科学与技术学院"&ndash;&gt;-->
    <!--&lt;!&ndash;               en-name="Institute of Computer Science and Technology" :age='18'></Institute>&ndash;&gt;-->
    <!--    <Institute ref="Institute" zh-name="计算机科学与技术学院"-->
    <!--               en-name="Institute of Computer Science and Technology" :age='18'></Institute>-->
    <Test/>
  </div>
</template>

<script>


import School from "../src/components/School";
import Institute from "@/components/Institute";
import Test from "@/components/Test";

export default {
  name: 'App',
  components: {
    Institute,
    School,
    Test
  },
  data() {
    return {
      msg: '你好啊'
    }
  },
  methods: {
    getSchoolName(name) {
      console.log("@@" + name)
    },
    getInstituteName(name) {
      console.log("@@ getInstituteName" + name)
    },
  },
  mounted() {
    this.$refs.Institute.$on('getInsName', this.getInstituteName)
  }
}
</script>

<style>
#app {

}
</style>
