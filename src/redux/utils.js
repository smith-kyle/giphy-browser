export const appendURLParams = (url, params) => {
  const url = new URL(url);
  url.search = new URLSearchParams(params);
  return url;
};
