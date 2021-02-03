const { fstat } = require('fs')
const http = require('http')
const fs = require('fs')
const _ = require('lodash')

const server = http.createServer((req, res)=>{
    console.log(req.url, req.method)
    let path = './views/'

    res.setHeader('Content-type', 'text/html')

    const phrase = _.once(()=>{
        console.log('Mensaje unico')
    })

    phrase();
    phrase();

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
            res.setHeader('Location', '/about');
            res.statusCode = 301;
            break;
        default:
            path += '404.html';
            res.statusCode = 400;
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

})

server.listen(3000, 'localhost', ()=>{
    console.log('Listening on port 3000')
})