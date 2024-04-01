export function ParseToDate(strDate: string): Date {
  const parseData = strDate.split("/").map((value) => parseInt(value));
  return new Date(parseData[2], parseData[1] - 1, parseData[0]);
}
