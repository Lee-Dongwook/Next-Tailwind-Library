export const getQueryParams = (url: string) => {
  const params = new URLSearchParams(url);

  const result: Record<string, string> = {};

  params.forEach((value, key) => {
    result[key] = value;
  });

  return result;
};
