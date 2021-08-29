/*
 * 该文件是整个项目的入口文件
 */

import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

// 关闭 Vue 的生产提示
Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App)
});





