const http = require("http");
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write('hello world');
        res.end()
    }
    else if (req.method=== 'GET' && req.url === '/api'){
        res.write('Hellooooo.......');
        res.end();
    }
    else if(req.method === 'GET' && req.url === '/contactus'){
        res.write(JSON.stringify('[1,2,5,7]'));
        // res.render('<h1>THis is h1 tag</h1>')
        res.end();
    }
})

server.listen(3000)
