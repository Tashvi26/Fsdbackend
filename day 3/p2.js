const http=require('http');
const { styleText } = require('util');
const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('content-type','text/html');
    res.end(`<h1 style='background-color: red; color:white'>Hello World</h1>`);
});
server.listen(9000,(err)=>{
    if(err)
        console.error(err);
    else
    console.log("Server is running on port 9000");


});
