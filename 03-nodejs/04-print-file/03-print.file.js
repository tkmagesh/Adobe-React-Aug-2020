const fs = require('fs');

const stream = fs.createReadStream('./data1.txt', { encoding : 'utf-8'});
// events -> open, data, end, close, error
let counter = 0;
stream.on('data', (chunk) => {
    ++counter;
    console.log(chunk)
});
stream.on('end', () => {
    console.log('Thats all folks')
    console.log(`read completed with ${counter} chunks`);
});
stream.on('error', (err) => {
    console.log('Something went wrong');
    console.log(err)
});