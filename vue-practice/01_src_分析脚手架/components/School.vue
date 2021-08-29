<template>
  <!-- 组件的结构 -->
  <div class="studentCom">
    <el-container>
      <h2>学校名称：{{ schoolName }}</h2>
      <h2>学校地址：{{ schoolAddress }}</h2>
    </el-container>
    <div>
      <i class="el-icon-edit"></i>
      <i class="el-icon-share"></i>
      <i class="el-icon-delete"></i>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
    </div>
  </div>
</template>

<script>
// 组件交互相关的代码
export default {
  name: "School",
  data() {
    return {
      schoolName: "哈工大（深圳）",
      schoolAddress: "深圳大学城"
    }
  },
}
</script>

<style scoped>
/* 组件的样式 */
.studentCom {
@import url("//unpkg.com/element-ui@2.15.5/lib/theme-chalk/index.css");
}
</style>