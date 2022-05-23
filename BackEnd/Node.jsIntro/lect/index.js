const http = require('http');
const port = 5000;
const server = http.createServer((req, res) => {
    console.log("Method: ", req.method);
    console.log('Url: ', req.url);
    // console.log('Headers: ',req.headers);
    res.writeHead(200, {
        'Content-type': 'text/html'
    });

    res.write('<h1>Hello from node.js</h1>');
    res.end();
});

server.listen(port, () => console.log(`Server is listening on port ${port}...`));
