const fs = require('fs');


const readStream = fs.createReadStream('./largeFile.txt', { encoding: 'utf-8' });
const writeStream = fs.createWriteStream('./streams/copyFile.txt', { encoding: 'utf-8' });

// readStream.on('data', (chunk) => {
//     writeStream.write(chunk);
// });


// readStream.on('end', () => {
//     writeStream.end();
//     console.log('Finished');
// });

writeStream.on('finish', () => console.log('File is saved'));
readStream.pipe(writeStream);