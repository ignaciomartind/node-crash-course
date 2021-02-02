const http = require('http')
const fs = require('fs');
const { dirname } = require('path');

const server = http.createServer((req, res)=>{
    console.log(`url: ${req.url} method: ${req.method}`);

    res.setHeader('Content-type', 'text/html');

    // res.write('<head><link rel="stylesheet"></head>')
    // res.write('<p>Hello, ninjas</p>');
    // res.write('<p>Goodbye, ninjas</p>');

    let  path = './views/';
    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;

        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;

        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;

        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, (err, data)=>{
        if(err){
            console.log(err);
            res.end();
        }else{
            res.write(data);
            res.end();
        }
    })

});


server.listen(3000, 'localhost', ()=>{
    console.log('Listening for requests on port 3000')
});