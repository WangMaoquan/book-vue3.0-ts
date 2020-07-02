/*
 * @Description:
 * @Version: 1.0
 * @Autor: Wang
 * @Date: 2020-07-01 15:41:56
 * @LastEditors: Wang
 * @LastEditTime: 2020-07-02 09:07:54
 */
import { provide, inject, computed, ref, Ref } from '@vue/composition-api';
import { Book, Books } from '@/types/Book';

interface BookContext {
  books: Ref<Books>;
  setBooks: (value: Books) => void;
  finishedBooks: Ref<Books>;
  addFinishedBooks: (book: Book) => void;
  removeFinishedBooks: (book: Book) => void;
  hasReadedBook: (book: Book) => boolean;
  booksAvaluable: Ref<Books>;
}

const BookSymbol = Symbol();

export const useBookListProvide = () => {
  const books = ref<Books>([]);
  const setBooks = (value: Books) => (books.value = value);

  const finishedBooks = ref<Books>([]);
  const addFinishedBooks = (book: Book) => {
    if (!finishedBooks.value.find(({ id }) => id === book.id)) {
      finishedBooks.value.push(book);
    }
  };
  const removeFinishedBooks = (book: Book) => {
    const removeIndex = finishedBooks.value.findIndex(
      ({ id }) => id === book.id
    );
    if (removeIndex !== -1) {
      finishedBooks.value.splice(removeIndex, 1);
    }
  };

  const booksAvaluable = computed(() => {
    return books.value.filter(
      (book) => !finishedBooks.value.find(({ id }) => id === book.id)
    );
  });

  const hasReadedBook = (book: Book) => finishedBooks.value.includes(book);

  provide(BookSymbol, {
    books,
    setBooks,
    finishedBooks,
    addFinishedBooks,
    removeFinishedBooks,
    hasReadedBook,
    booksAvaluable
  });
};

export const useBookListInject = () => {
  const booksContext = inject<BookContext>(BookSymbol);

  if (!booksContext) {
    throw new Error(`useBookListInject must be used after useBookListProvide`);
  }

  return booksContext;
};
