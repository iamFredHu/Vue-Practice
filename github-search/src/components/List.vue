<template>
  <div class="row">
    <div v-show="dataObj.users.length" v-for="user in dataObj.users" :key="dataObj.users.id" class="card">
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style='width: 100px'/>
      </a>
      <p class="card-text">{{ user.login }}</p>
    </div>
    <!-- 欢迎词 -->
    <h1 v-if="dataObj.isFirst">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;欢迎使用</h1>
    <!-- 加载中 -->
    <h1 v-show="dataObj.isLoading">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;加载中</h1>
    <!-- 错误信息 -->
    <h1 v-show="dataObj.errorInfo">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请求出错了，以下是错误信息{{
        dataObj.errorInfo
      }}</h1>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      dataObj: {
        users: [],
        isFirst: true,
        isLoading: false,
        errorInfo: '',
      }
    }
  },
  mounted() {
    this.$bus.$on('updateListData', (dataObj) => {
      console.log(dataObj.users)
      this.dataObj = dataObj
    })
  }
}
</script>

<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>