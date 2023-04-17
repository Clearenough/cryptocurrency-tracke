export function numberParser(value: string): string {
  let parsedNumber = '';
  const number = parseFloat(value);
  switch (true) {
    case number >= 1e9:
      parsedNumber = `${(number / 1e9).toFixed(3)}b`;
      break;
    case number >= 1e6:
      parsedNumber = `${(number / 1e6).toFixed(3)}m`;
      break;
    case number >= 1e3:
      parsedNumber = `${(number / 1e3).toFixed(3)}k`;
      break;
    case number < 1e3 && number > 0.01:
      parsedNumber = `${number.toFixed(3)}`;
      break;
    case number <= 0.01 && number !== 0:
      const firstDigit = Math.ceil(Math.abs(Math.log10(number)));
      parsedNumber = `${number.toFixed(firstDigit)}`;
      break;
    case number === 0:
      parsedNumber = '0';
  }
  return parsedNumber;
}
