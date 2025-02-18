const http=require('http');

const server=http.createServer(async(req,res)=>{
    const data=await fetch("https://dummyjson.com/products");
    res.setHeader('Content-Type','application/json');
    const newproducts=await data.json();
    res.statusCode=200;
    res.end(JSON.stringify(newproducts));
});
server.listen(9000,(err)=>{
    if (err)
        console.log(err);
    else
       console.log("server is running on port 9000");
});