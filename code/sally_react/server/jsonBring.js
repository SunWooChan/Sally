const fs = require('fs');

fs.readFile('./matrix_result.json', 'utf8', (error, jsonFile) => {
  if (error) return console.log(error);
  console.log(jsonFile);

  const jsonData = JSON.parse(jsonFile);
  console.log(jsonData);

  

});