const fetch = require('node-fetch');

export const getResponse = (url) => {
  return fetch(url)
    .then(res => res.json());
};
