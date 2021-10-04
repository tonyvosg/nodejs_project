require('http').createServer((inRequest, inResponse)=>{
    inResponse.end('Hello from NodeJS server');
}).listen(80);