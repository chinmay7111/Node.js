// const naav = "chotu";
// console.log(naav);

const fs = require("fs");
//creating  a new file

/* fs.writeFileSync("read.text", "welcome to my first nodejs prog");

// if u use fs.writeFileSync it will directly replace the first text with current text..
fs.writeFileSync("read.txt", "welcome to my first nodejs prog , hope this is good");*/


//fs.appendFileSync("read.txt", " good night broos:)");

// nodejs include additional data type that is buffer , that is not available is browser's javascript 
// buffer is mainly used to stored binary data. 
// 
const buf_data =fs.readFileSync("read.txt");

//orginal_data = buf_data.toString();
// used to convert buffer into string 
//console.log(orginal_data);
fs.renameSync('read.txt', 'readwrite.txt');

