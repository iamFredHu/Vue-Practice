<template>
  <div id="app">
    <Category title="美食" :listData="foods">
      <img slot="left" src="https://www.hitsz.edu.cn/media/images/logo.png" alt="">
    </Category>
    <Category title="游戏">
      <ul slot="middle">
        <li v-for="(item,index) in games" :key="index">{{ item }}</li>
      </ul>
    </Category>
    <Category title="电影">
      <img slot="right" src="https://www.hitsz.edu.cn/media/images/logo.png" alt="">
    </Category>
  </div>
</template>

<script>

import Category from "@/components/Category";

export default {
  name: 'App',
  components: {Category},
  data() {
    return {
      foods: ['火锅', '烧烤', '小龙虾', '麻辣烫'],
      games: ['英雄联盟', 'APEX', 'CS:GO', 'Dota2'],
      films: ['流浪地球', '红海行动', '大决战']
    }
  }
}
</script>

<style>
#app {
  display: flex;
  justify-content: space-around;
}

h3 {
  text-align: center;
  background: orange;
}

img {
  width: 200px;
}

</style>
