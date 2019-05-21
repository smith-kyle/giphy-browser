export const appendURLParams = (_url, params) => {
  const url = new URL(_url);
  url.search = new URLSearchParams(params);
  return url;
};
