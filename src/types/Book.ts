/*
 * @Description:
 * @Version: 1.0
 * @Autor: Wang
 * @Date: 2020-07-01 15:09:55
 * @LastEditors: Wang
 * @LastEditTime: 2020-07-01 15:12:47
 */
import books from '@/data/index';
export type Book = typeof books[number];
export type Books = Book[];
