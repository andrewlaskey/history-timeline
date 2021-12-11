export const yearToCalendarYear = (year: number, startYear: number): string => {
  const isCE = year > startYear - 2000;
  return isCE ? year - (startYear - 2000) + 'CE': startYear - 2000 - year + 'BCE';
}

export const calendarYearToYear = (calendarYear: string, startYear: number): number => {
  const [year, label] = calendarYear.split(' ');

  const isCE = label === 'CE';

  return isCE ? parseInt(year, 10) + (startYear - 2000) : startYear - 2000 - parseInt(year, 10);
}