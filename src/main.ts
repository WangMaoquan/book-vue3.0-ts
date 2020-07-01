/*
 * @Description:
 * @Version: 1.0
 * @Autor: Wang
 * @Date: 2020-07-01 10:52:05
 * @LastEditors: Wang
 * @LastEditTime: 2020-07-01 14:05:37
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueCompositionApi from '@vue/composition-api';

Vue.config.productionTip = false;
Vue.use(VueCompositionApi);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
