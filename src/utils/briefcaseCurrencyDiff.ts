export function briefcaseCurrencyDifference(
  currentBriefcaseSummary: number,
  briefcaseSummary: number
) {
  let diffPercent: number;
  if (currentBriefcaseSummary > briefcaseSummary) {
    diffPercent = (1 - briefcaseSummary / currentBriefcaseSummary) * 100;
    return diffPercent;
  }
  diffPercent = (1 - currentBriefcaseSummary / briefcaseSummary) * 100;
  return diffPercent;
}
