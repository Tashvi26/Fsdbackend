const fs=require('fs');
const data="I am new data";
fs.writeFile("./mydir/data.txt",data,(err)=>{
    if(err) throw err;
    console.log("file created successfully!");
}
)