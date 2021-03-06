/*
 * 该文件是整个项目的入口文件
 */

import Vue from 'vue';
import App from './App.vue';
import {mixin} from './components/mixin'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 全局混合
Vue.mixin(mixin)

// 关闭 Vue 的生产提示
Vue.config.productionTip = false

Vue.use(ElementUI);

// 导入插件并应用（例子）
import plugins from './plugins/plugins'
Vue.use(plugins)

new Vue({
  el: '#app',
  render: h => h(App)
});





