const fs= require('fs');
fs.appendFile("./data.txt"," I will append at the end of the file",(err)=>
{
    if(err)
        console.error(err);
    else
    console.log("data appended successfully");
}
)

