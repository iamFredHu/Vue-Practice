<template>
  <div>
    <h2>当前求和为：{{ sum }} </h2>
    <h3>当前10倍求和为：{{ tenSum }} </h3>
    <h2>我在{{ school }}学{{ subject }}</h2>
    <select v-model.number="selectedNumber">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(selectedNumber)">+</button>
    <button @click="decrement(selectedNumber)">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'

export default {
  name: "Count",
  data() {
    return {
      selectedNumber: 1
    }
  },
  methods: {
    // 没有业务逻辑的，可以直接commit
    // increment() {
    //   this.$store.commit('ADDSUM', this.selectedNumber)
    // },
    // decrement() {
    //   this.$store.commit('MINUSSUM', this.selectedNumber)
    // },
    incrementOdd() {
      this.$store.dispatch('addSumOdd', this.selectedNumber)
    },
    incrementWait() {
      this.$store.dispatch('addSumWait', this.selectedNumber)
    },
  },
  // ...mapState({sum: 'sum', school: 'school', subject: 'subject'}),
  computed: {
    ...mapState(['sum', 'school', 'subject']),
    ...mapGetters(['tenSum']),
    ...mapMutations({increment:'ADDSUM',decrement:'MINUSSUM'}),
  }
}
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>