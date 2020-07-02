<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: Wang
 * @Date: 2020-07-01 14:27:12
 * @LastEditors: Wang
 * @LastEditTime: 2020-07-02 09:03:09
-->
<template>
  <div>
    <Books :books="booksAvaluable" :loading="loading" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from '@vue/composition-api';
import Books from '@/components/Books.vue';
import BooksData from '@/data/index';

import { useAsync } from '@/hooks';
import { getBooks } from '@/api';
import { useBookListInject } from '@/context';

export default defineComponent({
  name: 'books',
  setup() {
    const { books, setBooks, booksAvaluable } = useBookListInject();
    console.log(booksAvaluable);
    const loading = useAsync(async () => {
      const requestBooks = await getBooks();
      setBooks(requestBooks);
    });

    return { booksAvaluable, loading };
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
