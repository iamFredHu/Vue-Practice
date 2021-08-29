<template>
  <!-- 组件的结构 -->
  <div class="studentCom">
    <h2>学校名称：{{schoolName}}</h2>
    <h2>学校地址：{{schoolAddress}}</h2>
    <button @click="showSchool">点我看学校</button>
  </div>
</template>

<script>
// 组件交互相关的代码
export default {
  name: "School",
  data() {
    return {
      schoolName:"哈尔滨工业大学（深圳）",
      schoolAddress:"深圳大学城"
    }
  },
  methods:{
    showSchool(){
      alert(this.schoolName)
    }
  },
}
</script>

<style scoped>
/* 组件的样式 */
.studentCom{
  background-color: #0093E9;
  background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
  width: 400px;
  height: 400px;
  border-radius: 10px;
}
</style>