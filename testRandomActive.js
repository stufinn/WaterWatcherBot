const sortData = require('./sortData');
const fs = require('fs');

let fileData = JSON.parse( fs.readFileSync('data/DWA.json') );

console.log(sortData.randomActive(fileData));