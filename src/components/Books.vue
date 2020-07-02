<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: Wang
 * @Date: 2020-07-01 16:56:26
 * @LastEditors: Wang
 * @LastEditTime: 2020-07-01 17:18:55
-->
<template>
  <section class="wrap">
    <span v-if="loading">正在加载中...</span>
    <section v-else class="content">
      <Book v-for="book in pagedBooks" :key="book.id" :book="book" />
      <el-pagination
        class="pagination"
        v-if="pagedBooks.length"
        :page-size="pageSize"
        :total="books.length"
        :current="bindings.current"
        @current-change="bindings.currentChange"
      />
    </section>
    <slot name="tips"></slot>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { usePages } from '@/hooks';
import { Books } from '@/types/Book';
import Book from './Book.vue';

export default defineComponent({
  name: 'books',
  setup(props) {
    const pageSize = 10;
    const { bindings, data: pagedBooks } = usePages(
      () => props.books as Books,
      { pageSize }
    );
    console.log(pagedBooks);
    return {
      bindings,
      pagedBooks,
      pageSize
    };
  },
  props: {
    books: {
      type: Array,
      default: () => []
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Book
  }
});
</script>

<style>
.content {
  max-width: 700px;
  margin: auto;
}

.pagination {
  margin-top: 12px;
}
</style>
