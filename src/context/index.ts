/*
 * @Description:
 * @Version: 1.0
 * @Autor: Wang
 * @Date: 2020-07-01 15:51:47
 * @LastEditors: Wang
 * @LastEditTime: 2020-07-01 15:52:43
 */
import { useBookListProvide, useBookListInject } from './BookContext';

export { useBookListInject };

export const useProvider = () => {
  useBookListProvide();
};
