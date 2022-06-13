const path = require('path');
console.log(path.dirname('D:/nodejspractice/path_module/path.js'));              //D:/nodejspractice/path_module
console.log(path.extname('D:/nodejspractice/path_module/path.js'));              //.js
console.log(path.basename('D:/nodejspractice/path_module/path.js'));             //path.js



//console.log(path.parse('D:/nodejspractice/path_module/path.js'));              
 /* {
    root: 'D:/',
    dir: 'D:/nodejspractice/path_module',
    base: 'path.js',
    ext: '.js',
    name: 'path'
  }*/


  //const myPath =path.parse('D:/nodejspractice/path_module/path.js');
  //console.log(myPath.root);                                                  //D:/


  const myPath =path.parse('D:/nodejspractice/path_module/path.js');
  console.log(myPath.dir);                                                     //D:/nodejspractice/path_module