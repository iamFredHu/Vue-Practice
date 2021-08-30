<template>
  <div>
    <button @click="isShow = !isShow">显示 / 隐藏</button>
    <transition
        appear
        name="animate__animated animate__bounce"
        enter-active-class="animate__swing"
        leave-active-class="animate__fadeOutTopRight"
    >
      <h1 v-show="isShow">千万别来哈尔滨工业大学（深圳）</h1>
    </transition>
  </div>

</template>

<script>
import "animate.css"

export default {
  name: "Test",
  data() {
    return {
      isShow: true
    }
  },
}
</script>

<style scoped>
h1 {
  background-color: #8EC5FC;
  background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);
  color: white;
}

</style>