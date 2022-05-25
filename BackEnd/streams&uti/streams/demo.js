const fs = require('fs');


const readStream = fs.createReadStream('./largeFile.txt', { encoding: 'utf-8' });
const writeStream = fs.createWriteStream('./streams/copyFile.txt', { encoding: 'utf-8' });

// readStream.on('data', (chunk) => {
//     console.log(chunk);
// });
// readStream.on('end',()=>{
//     console.log('Finished');
// })
writeStream.on('finish',()=>console.log('File is saved'))
writeStream.write('Hello world');
writeStream.write('\n');
writeStream.write('Hello world2');
writeStream.write('\n');
writeStream.write('Hello world3');
writeStream.end();