<template>
  <div>
    <h2>当前求和为：{{ sum }}</h2>
    <select v-model.number="selectedNumber">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
export default {
  name: "Count",
  data() {
    return {
      sum: 0,
      selectedNumber: 1
    }
  },
  methods: {
    increment() {
      this.sum += this.selectedNumber
    },
    decrement() {
      this.sum -= this.selectedNumber
    },
    incrementOdd() {
      if (this.sum % 2) {
        this.sum += this.selectedNumber
      }
    },
    incrementWait() {
      setTimeout(() => {
        this.sum += this.selectedNumber
      }, 500)
    },
  }
}
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>