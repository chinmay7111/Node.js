const fs = require('fs');
// 1st we make folder 'chinmay' ...
//fs.mkdirSync('chinmay');

// 2nd we create bio.txt ...
//fs.writeFileSync('chinmay/bio.txt', "hi..., my name is chinmay ");

//3rd we have to add more data in previous file...
// fs.appendFileSync('chinmay/bio.txt', 'and i am 22 years old...')

// 4th read data 
// const data = fs.readFileSync('chinmay/bio.txt', 'utf8');
// console.log(data);


// 5th rename 'bio.txt' to 'theBio.txt' using fs.
// fs.renameSync('chinmay/thebio.txt','chinmay/theBio.txt');

// 6th now delete both file and folder...
// i. 1st we delete file...
// fs.unlinkSync('chinmay/theBio.txt')
// ii. 2nd we have to delete folder...
fs.rmdirSync('chinmay');


