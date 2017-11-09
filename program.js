let fs = require('fs');
let path = require('path');//path.extname();
let http = require('http');
let mymodule = require('./mymodule.js');

/* readFile async */
// // _file 是buffer
// let _file = fs.readFileSync(process.argv[2]);

// fs.readFile(process.argv[2],'utf8', function (err, data) {
//     if(err) throw err;
//     console.log(data.split('\n').length - 1);
// });

/* readdir */
// let ext = process.argv[3];

// fs.readdir(process.argv[2],'utf8', (err,list) => {
//     if(err) throw err;
//     for(let i = 0; i < list.length; i++){
//         if(list[i].indexOf('.md') > -1){
//             console.log(list[i]);
//         }
        
//     }
// });

/* module*/
// mymodule(process.argv[2], ext, (err,lists) => {
//     if(err) throw err;
//     console.log(lists.join('\n'));
// });
