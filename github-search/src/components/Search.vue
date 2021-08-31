<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">&nbsp;&nbsp;&nbsp;&nbsp;搜索 GitHub 用户</h3>
    <div>
      <div style="padding: 10px 10px 10px;">
        <form class="bs-example bs-example-form" role="form">
          <div class="col-lg-6">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="请输入你想要的用户名" v-model="keyWord">
              <span class="input-group-btn">
                        <button @click="searchUsers" class="btn btn-default" type="button">搜索</button>
                    </span>
            </div><!-- /input-group -->
          </div><!-- /.col-lg-6 -->
        </form>
      </div>
    </div>
  </section>
</template>

<script>
// import axios from 'axios'

export default {
  name: "Search",
  data() {
    return {
      keyWord: ''
    }
  },
  methods: {
    searchUsers() {
      // 请求前更新 List 的数据
      this.$bus.$emit('updateListData', {isFirst: false, isLoading: true, errorInfo: '', users: []})
      this.$http.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
          response => {
            console.log('请求成功了', response.data.items)
            this.$bus.$emit('updateListData', {
              isFirst: false,
              isLoading: false,
              errorInfo: '',
              users: response.data.items
            })
          },
          error => {
            console.log('请求失败了', error.message)
            this.$bus.$emit('updateListData', {
              isFirst: false,
              isLoading: false,
              errorInfo: error.message,
              users: []
            })
          })
    }
  }
}
</script>

<style scoped>

</style>