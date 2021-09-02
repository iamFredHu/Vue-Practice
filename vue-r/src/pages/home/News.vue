<template>
  <div>
    <ul>
      <li v-for="n in newsList" :key="n.id">
        <!--         <router-link :to="`/home/news/detail/${n.id}/${n.title}`">{{ n.title }}</router-link>-->
        <router-link :to="{
          // path:'/home/news/detail',
          name:'detail',
          params:{
            id:n.id,
            title:n.title
          }
        }">
          {{ n.title }}
        </router-link>
        <input>
        <button @click="pushShow(n)">push查看</button>
        <button @click="replaceShow(n)">replace查看</button>
      </li>
    </ul>
    <hr/>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      newsList: [
        {id: '001', title: '新闻001'},
        {id: '002', title: '新闻002'},
        {id: '003', title: '新闻003'},
        {id: '004', title: '新闻004'}
      ]
    }
  },
  methods: {
    pushShow(n) {
      this.$router.push({
        name: 'detail',
        params: {
          id: n.id,
          title: n.title
        }
      })
    },
    replaceShow(n) {
      this.$router.replace({
        name: 'detail',
        params: {
          id: n.id,
          title: n.title
        }
      })
    }
  }
}
</script>

<style scoped>

</style>