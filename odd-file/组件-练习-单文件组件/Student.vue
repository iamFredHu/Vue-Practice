<template>
  <!-- 组件的结构 -->
  <div class="studentCom">
    <h2>学生名称：{{ studentName }}</h2>
    <h2>学生地址：{{ studentAddress }}</h2>
  </div>
</template>

<script>
// 组件交互相关的代码
export default {
  name: "Student",
  data() {
    return {
      studentName: "马保国",
      studentAddress: "山东省"
    }
  },
}
</script>

<style scoped>
/* 组件的样式 */
.studentCom {
  background-color: #8EC5FC;
  background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);

  width: 400px;
  height: 200px;
  border-radius: 10px;
}
</style>