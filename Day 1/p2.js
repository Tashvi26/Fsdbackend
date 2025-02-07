const fs= require('fs');


const newdata="i am new data";
fs.writeFileSync('data.txt',newdata);
