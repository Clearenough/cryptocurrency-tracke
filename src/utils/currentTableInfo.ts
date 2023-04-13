import { ICurrencyInfo } from '../@types/common';

export function tableInfo(currencyInfo: ICurrencyInfo[], pageNumber: number, pageSize: number) {
  const data = currencyInfo.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
  return data;
}
