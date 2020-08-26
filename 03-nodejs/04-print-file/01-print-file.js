const fs = require('fs');
const fileContents = fs.readFileSync('./data.txt', { encoding: 'utf8'});
console.log(fileContents);
console.log('Thats all folks!');