<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <slot name="left"></slot>
    <slot name="middle"></slot>
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ['listData', 'title']
}
</script>

<style scoped>
.category {
  background: #8BC6EC;
  width: 200px;
  height: 300px;
}

viedo{
  width: 200px;
}
</style>