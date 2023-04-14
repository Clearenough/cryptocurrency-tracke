import { ICurrencyHistory } from '../@types/common';

export function maxAndMinPrices(currencyHistory: ICurrencyHistory[]) {
  const pricesHistory = currencyHistory.map((currency) => +currency.priceUsd);
  const maxPrice = Math.max(...pricesHistory);
  const minPrice = Math.min(...pricesHistory);
  return { maxPrice, minPrice };
}
