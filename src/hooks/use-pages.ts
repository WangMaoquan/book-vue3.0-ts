/*
 * @Description:
 * @Version: 1.0
 * @Autor: Wang
 * @Date: 2020-07-01 16:07:00
 * @LastEditors: Wang
 * @LastEditTime: 2020-07-01 17:16:13
 */

import { watch, ref, reactive } from '@vue/composition-api';

export interface PageOption {
  pageSize?: number;
}

export function usePages<T>(watchCallback: () => T[], pageOption?: PageOption) {
  const { pageSize = 10 } = pageOption || {};

  const rawData = ref<T[]>([]);
  const data = ref<T[]>([]);

  // 提供给el-pagination组件的参数
  const bindings = reactive({
    current: 1,
    currentChange: (currnetPage: number) => {
      data.value = sliceData(rawData.value, currnetPage);
    }
  });

  // 根据页数切分数据
  // tslint:disable-next-line:no-shadowed-variable
  const sliceData = (rawData: T[], currentPage: number) => {
    return rawData.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  };

  watch(watchCallback, (values) => {
    rawData.value = values;
    bindings.currentChange(1);
  });

  return {
    data,
    bindings
  };
}
