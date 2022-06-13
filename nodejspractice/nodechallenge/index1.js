const fs = require('fs');                                                            // creat file by asynchronus fs module...
// fs.writeFile('read.txt', 'hello this chinmay learning node.js...', (err)=> {      // 1. this is asynchronous , because we add call back function ..
//     console.log("your file is created");                                          // 2. callback function is called when a task is completed .. 
//     console.log(err);                                                             // 3. to check weather err is present.. 
// });


//* now we have to append the data to previous file */

// fs.appendFile('read.txt', "and nodejs is too cool", (err)=>{
//     console.log("data is added to previous file");
//     console.log(err);
// });


//* now we read the data 
// fs.readFile('read.txt',(err,data)=>{                                                  // by this way u getting data only in buffer format like -> <Buffer 68 65 6c 6c 6f 20 74 68 69 73 20 63 68 69 6e 6d 61 79 20 6c 65 61 72 6e 69 6e 67 20 6e 6f 64 65 2e 6a 73 2e 2e 2e 61 6e 64 20 6e 6f 64 65 6a 73 20 69 ... 32 more bytes>
//     console.log(data);                                                                 // while reading file usin fs module u must add (err,data)arg
// });

// fs.readFile('read.txt','utf-8',(err,data)=>{                                             // by this way u getting data in string format like-> hello this chinmay learning node.js...and nodejs is too colland nodejs is too cool                                                                                                                                                                               
//  console.log(data);                                                                      // you have to use encoding that is 'utf-8'
// });