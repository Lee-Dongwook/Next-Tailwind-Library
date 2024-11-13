export const formateDate = (date: Date, locale: string = "en-US") => {
  return new Intl.DateTimeFormat(locale).format(date);
};
