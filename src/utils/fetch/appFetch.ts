import fetch from 'utils/fetch/fetch';

const appFetch = (url: string) =>
  fetch.get(url, {
    headers: { Authorization: '' },
    json: true,
  });

export default appFetch;
