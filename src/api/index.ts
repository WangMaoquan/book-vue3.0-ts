/*
 * @Description:
 * @Version: 1.0
 * @Autor: Wang
 * @Date: 2020-07-01 16:08:15
 * @LastEditors: Wang
 * @LastEditTime: 2020-07-01 16:08:45
 */
import books from '@/data/index';

const mockBooks = books;
const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getBooks = async () => {
  await wait(1000);
  return mockBooks;
};
