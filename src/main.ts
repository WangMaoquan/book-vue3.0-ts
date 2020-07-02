/*
 * @Description:
 * @Version: 1.0
 * @Autor: Wang
 * @Date: 2020-07-01 10:52:05
 * @LastEditors: Wang
 * @LastEditTime: 2020-07-01 17:03:25
 */

import Vue from 'vue';

import VueCompositionApi from '@vue/composition-api';
import { Pagination } from 'element-ui';
import '@/assets/styles/element-variables.scss';
import { useProvider } from '@/context';

import App from './App.vue';
import router from './router';
import * as colors from './assets/styles/colors';

Vue.use(VueCompositionApi);

Vue.component(Pagination.name, Pagination);

Vue.config.productionTip = false;

Vue.prototype.colors = colors;

new Vue({
  router,
  setup() {
    useProvider();
    return {};
  },
  render: (h) => h(App)
}).$mount('#app');
