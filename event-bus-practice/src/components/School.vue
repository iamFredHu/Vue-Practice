<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <h3 v-show="studentName">学生姓名：{{studentName}}</h3>
  </div>
</template>

<script>
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
    this.$bus.$on('getStudentName', (data) => {
      this.studentName = data
    })
  }
}
</script>

<style scoped>
.school {
  background: pink;
}
</style>