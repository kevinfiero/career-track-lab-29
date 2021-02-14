const fetch = require('node-fetch');

export const getResponse = async(url, button, inputField) => {
  if(button === 'GET'){
    return await fetch(url)
      .then(res => res.json());
  } else if(button === 'DELETE') {
    return await fetch(url, {
      method: button
    })
      .then(res => res.length ? res.json() : '');

  } else {
    return await fetch(url, {
      method: button,
      body: inputField,
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json());
  }

};
