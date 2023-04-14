import { ICurrencyHistory } from '../@types/common';
import {
  PRICE_HISTORY_CHART_LABELS_MONTHES,
  PRICE_HISTORY_CHART_LABELS_YEARS,
} from '../@types/constants';

export function currencyPriceHistoryChartLabels(currencyPriceHistory: ICurrencyHistory[]) {
  const labels = currencyPriceHistory.map((value) => {
    const date = new Date(value.time);
    const label = `${date.getDate()} ${PRICE_HISTORY_CHART_LABELS_MONTHES[date.getMonth()]} ${
      PRICE_HISTORY_CHART_LABELS_YEARS[date.getFullYear() - 2022]
    }`;
    return label;
  });
  return labels;
}
