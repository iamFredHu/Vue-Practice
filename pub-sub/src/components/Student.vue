<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
    <button @click="sendStudentName">将学生名给School组件</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: "Student",
  data() {
    return {
      name: 'Fred',
      age: '21'
    }
  },
  methods:{
    sendStudentName() {
      pubsub.publish('getStudentName',this.name)
    }
  },
}
</script>

<style scoped>
.student {
  background: #8BC6EC;
}
</style>