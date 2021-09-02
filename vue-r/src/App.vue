<template>
  <div id="app">
    <div class="row">
      <Banner></Banner>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <router-link replace class="list-group-item" active-class="active" to="/home">Home</router-link>
          <router-link replace class="list-group-item" active-class="active" to="/about">About</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <router-view></router-view>
            <!-- 组件的位置 -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


import Banner from "@/components/Banner";

export default {
  name: 'App',
  components: {Banner},
}
</script>

<style>
#app {

}
</style>
