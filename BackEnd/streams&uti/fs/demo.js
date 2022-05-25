const fs = require('fs');

fs.readFile('./fs/text.txt', { encoding: 'utf-8' }, (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
});

console.log('end');