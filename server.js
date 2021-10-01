const http = require('http');

function random() {
    return Math.floor(Math.random() * 100) + 1;
}

const server = http.createServer((req, res) => {
    console.log(req.method, req.url)
    res.statusCode = 200;
    if (req.url === '/pancake') {
        res.end('<h1>Hello Pancake</h1>')
    } else {
    res.end ('<h1>Hello World: ' + random() + '<h1>')
    }
})

console.log('starting server')

server.listen(3000, '127.0.01', () => {
    console.log('server is now listening on http://127.0.01:3000')
})