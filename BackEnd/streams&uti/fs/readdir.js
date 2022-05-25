const fs = require('fs');

fs.readdir('./fs', (err, data) => {
    if (err) {
        return;
    }
    console.log(data);
   
});
