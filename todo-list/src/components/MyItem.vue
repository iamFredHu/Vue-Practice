<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
    </label>
    <span v-show="!todo.isEdit" @click="handleEdit(todo)">{{ todo.title }}</span>
    <input @blur="handleBlur(todo,$event)" class="editInput" v-show="todo.isEdit" type="text" :value="todo.title"/>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
  </li>
</template>

<script>
import pubsub from 'pubsub-js'

export default {
  name: 'MyItem',
  //声明接收todo
  props: ['todo'],
  methods: {
    // 勾选or取消勾选
    handleCheck(id) {
      //通知App组件将对应的todo对象的done值取反
      this.$bus.$emit('checkTodo', id)
    },
    // 删除
    handleDelete(id) {
      pubsub.publish('deleteTodo', id)
    },
    // 修改
    handleEdit(todo) {
      todo.isEdit = true
    },
    // 失去焦点时，修改数据
    handleBlur(todo,e){
      todo.isEdit = false
      this.$bus.$emit('editTodo',todo.id,e.target.value)
    }
  },
}
</script>

<style scoped>
.editInput {
  border: none;
  background-color: transparent;
  font-size: 16px;
  outline:none;
}

/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}
</style>