import { IBriefcaseInfo } from '../@types/common';

export function addCurrencyToBriefcase(
  briefcaseInfo: IBriefcaseInfo[],
  id: string,
  value: string,
  name: string,
  priceUsd: string
) {
  const repeatCurrency = briefcaseInfo.find((item) => item.id === id);
  const newBriefcaseCurrencyInfo = [...briefcaseInfo];
  if (repeatCurrency) {
    const index = newBriefcaseCurrencyInfo.indexOf(repeatCurrency);
    repeatCurrency.quantity = (+value + +repeatCurrency.quantity).toString();
    newBriefcaseCurrencyInfo.splice(index, 1, repeatCurrency);
    return newBriefcaseCurrencyInfo;
  }
  newBriefcaseCurrencyInfo.push({
    quantity: value,
    id,
    name,
    priceUsd,
  });
  return newBriefcaseCurrencyInfo;
}
