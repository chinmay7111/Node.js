const os = require('os');
console.log('platfrom: ' + os.platform());                   //platfrom: win32                                                   
console.log('Architecture:'+ os.arch());                     //Architecture:x64
console.log(os.hostname());                                  //DESKTOP-HME3EAV              
console.log(os.type());                                      //Windows_NT


const freeMemory= os.freemem();
//console.log(freeMemory);                      //2027507712
console.log(`${freeMemory /1024/1024/1024}`);   //1.9274177551269531


const totalMemory = os.totalmem();
console.log(`${totalMemory /1024/1024/1024}`);   //7.729286193847656