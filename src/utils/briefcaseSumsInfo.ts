import { IBriefcaseInfo, ICurrencyInfo } from '../@types/common';

export function totalBriefcaseSum(briefcaseInfo: IBriefcaseInfo[], currencyInfo: ICurrencyInfo[]) {
  const briefcaseCurrencyIds = briefcaseInfo.map((currency) => currency.id);
  const currentBriefcaseInfo = currencyInfo.filter((item) => {
    return briefcaseCurrencyIds.includes(item.id);
  });
  const briefcaseSummary = briefcaseInfo.reduce((acc, item) => {
    return +item.priceUsd * +item.quantity + acc;
  }, 0);
  const currentBriefcaseSummary = currentBriefcaseInfo.reduce((acc, item) => {
    const currency = briefcaseInfo.find((element) => element.id === item.id);
    if (currency) {
      return +item.priceUsd * +currency.quantity + acc;
    }
    return 0;
  }, 0);
  return { briefcaseSummary, currentBriefcaseSummary };
}
