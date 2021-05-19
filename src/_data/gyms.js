const fetch = require('node-fetch');

module.exports = async () => {
  const getGyms = await fetch("https://allez-or-not.netlify.app/api/get-data");
  const response = await getGyms.json();
  
  const { values } = response
  return values.slice(1,values.length - 1);
};