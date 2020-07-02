/*
 * @Description:
 * @Version: 1.0
 * @Autor: Wang
 * @Date: 2020-07-01 10:52:05
 * @LastEditors: Wang
 * @LastEditTime: 2020-07-01 16:25:41
 */
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import AllBook from '@/views/AllBooks.vue';
import FinishedBook from '@/views/FinishedBooks.vue';

Vue.use(VueRouter);

export const routeMaps = {
  all: {
    name: 'all',
    path: '/'
  },
  finish: {
    name: 'finish',
    path: '/finish'
  }
};

const routes: RouteConfig[] = [
  {
    ...routeMaps.all,
    component: AllBook
  },
  {
    ...routeMaps.finish,
    component: FinishedBook
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
