export function numberParser(value: string): string {
  let parsedNumber = '';
  const number = parseFloat(value);

  switch (true) {
    case number >= 1e9:
      parsedNumber = `${(number / 1e9).toFixed(1)}b`;
      break;
    case number >= 1e6:
      parsedNumber = `${(number / 1e6).toFixed(1)}m`;
      break;
    case number >= 1e3:
      parsedNumber = `${(number / 1e3).toFixed(1)}k`;
      break;
    case number < 1e3:
      parsedNumber = `${number.toFixed(1)}`;
      break;
  }
  return parsedNumber;
}
