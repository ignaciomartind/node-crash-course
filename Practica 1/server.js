const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res)=>{
    console.log('Request received');

    res.setHeader('Content-type', 'text/html')
    let path = './views/'

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
            res.statusCode = 400;
            break;
            
    }

    fs.readFile(path, (err, data)=>{
        if(err){
            console.log(err);
            res.end()
        }else{
            res.write(data);
            res.write('Added')
            res.end()
        }
    })

})


server.listen(4000, 'localhost', ()=>{
    console.log('Listening on port 4000')
})