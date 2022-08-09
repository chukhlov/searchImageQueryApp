export const urlSearchQuery = (
  params: Record<string, string | number | undefined>,
) => {
  return Object.keys(params)
    .filter(key => params[key])
    .map(key => `${key}=${params[key]}`)
    .join('&');
};

