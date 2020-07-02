<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: Wang
 * @Date: 2020-07-01 14:27:12
 * @LastEditors: Wang
 * @LastEditTime: 2020-07-01 16:37:50
-->
<template>
  <Books :books="finishedBooks">
    <template v-if="isEmpty" #tips>
      暂无已阅读图书
    </template>
  </Books>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api';
import Books from '@/components/Books.vue';
import { useBookListInject } from '@/context';

export default defineComponent({
  name: 'finishedBooks',
  setup() {
    const { finishedBooks } = useBookListInject();
    const isEmpty = computed(() => !finishedBooks.value.length);
    return { finishedBooks, isEmpty };
  },
  components: {
    Books
  }
});
</script>

<style>
.content {
  max-width: 700px;
  margin: auto;
}
</style>
