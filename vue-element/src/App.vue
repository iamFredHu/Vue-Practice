<template>
  <div id="app">
    <button>原生的按钮</button>
    <input type="text">
    <el-row>
      <el-button>默认按钮</el-button>
      <div class="block">
        <span class="demonstration">默认</span>
        <el-date-picker
            v-model="value1"
            type="date"
            placeholder="选择日期">
        </el-date-picker>
      </div>
    </el-row>


  </div>
</template>

<script>


export default {
  name: 'App',
  components: {}
}
</script>

<style>
#app {

}
</style>
