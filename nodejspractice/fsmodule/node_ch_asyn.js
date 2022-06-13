const fs = require('fs');
// 1st we make folder 'chinmay' ...by asynchronous..
// fs.mkdir('chinmay',(err)=>{
//     console.log("folder created");
// });


// 2nd we create bio.txt ...by asynchronous..
// fs.writeFile('bio.txt',"helloo this chinmay and iam giveing test ",(err)=>{
//     console.log("bio.txt is completed ");
//     console.log(err);
// })


//3rd we have to add more data in previous file...by asynchronous..
// fs.appendFile('bio.txt',"hope i will perform good",(err)=>{
//     console.log('data added sucssefully');
// })


// 4th read data...by asynchronous..
// fs.readFile('bio.txt','utf-8',(err,data)=>{            // o/p--> helloo this chinmay and iam giveing test hope i will perform good
//     console.log(data);
// }); 


// 5th rename 'bio.txt' to 'theBio.txt'..by asynchronous.. 
// fs.rename('bio.txt','theBio.txt',(err)=>{
//     console.log('updated sucesfull');
// })


// 6th now delete both file by asynchronous.. 
// fs.unlink('theBio.txt',(err)=>{
    // console.log('deleted sucessfully');
// })
//delete folder..
// fs.rmdir('chinmay',(err)=>{
//     console.log('deleted folder sucssefully');
// })