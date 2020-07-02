<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: Wang
 * @Date: 2020-07-01 10:52:05
 * @LastEditors: Wang
 * @LastEditTime: 2020-07-01 16:30:25
-->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">全部图书</router-link>
      <router-link to="/finish">已阅图书</router-link>
      <h2>目前共有{{ bookCount }}本图书</h2>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api';
import { useBookListInject } from '@/context';
import { routeMaps } from '@/router';

export default defineComponent({
  setup(props, { root }) {
    const { booksAvaluable, finishedBooks } = useBookListInject();

    // 根据路由名确定取值策略
    const routeNameGetCountMap = {
      [routeMaps.all.name]: () => booksAvaluable.value.length,
      [routeMaps.finish.name]: () => finishedBooks.value.length
    };

    const bookCount = computed(() => {
      return routeNameGetCountMap[root.$route.name!]();
    });

    return {
      bookCount
    };
  }
});
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    padding: 12px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
