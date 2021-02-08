const fetch = require('node-fetch');

export const getResponse = async(url, button, inputField) => {
  if(button === 'GET'){
    return await fetch(url)
      .then(res => res.json());
  } else {
    return await fetch(url, {
      button,
      headers: { 'Content-Type': 'application/json' },
      inputField
    })
      .then(res => res.json());
  }

};
