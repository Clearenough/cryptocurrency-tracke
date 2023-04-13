import { IBriefcaseInfo } from '../@types/common';

export function deleteCurrencyFromBriefcase(briefcaseInfo: IBriefcaseInfo[], deleteId: string) {
  const index = briefcaseInfo.findIndex((item) => item.id === deleteId);
  const newBriefcaseCurrencyInfo = [...briefcaseInfo];
  newBriefcaseCurrencyInfo.splice(index, 1);
  return newBriefcaseCurrencyInfo;
}
