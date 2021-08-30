<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <h3 v-show="studentName">学生姓名：{{studentName}}</h3>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: "School",
  data() {
    return {
      name: '哈工大（深圳）',
      address: '深圳大学城',
      studentName: ''
    }
  },
  mounted() {
    this.pubID = pubsub.subscribe('getStudentName',(msgName,data)=>{
      this.studentName = data
      // 注意这里如果不写箭头函数，this是undefined，所以不要忘记写箭头函数啊！！！！
    })
  },
  beforeDestroy() {
    pubsub.unsubscribe(this.pubID)
  }
}
</script>

<style scoped>
.school {
  background: pink;
}
</style>