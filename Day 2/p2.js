const fs= require('fs');
//read data from data.txt file
fs.readFile("./data.txt","utf8",(err,data)=>{
    if (err) throw err;
    console.log("data read from file:", data);

})