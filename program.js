let fs = require('fs');
let path = require('path');//path.extname();
let http = require('http');
let bl = require('bl');
let net = require('net');
let strftime = require('strftime'); 
let url = require('url');
let map = require('through2-map');
// let mymodule = require('./mymodule.js');

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

/* http */

// http.get(process.argv[2],(res)=>{
//     // console.log(res.statusCode);
//     let rawData = "";
//     res.setEncoding('utf8');
//     res.on('data', (chunk) => { 
//         console.log(chunk); 
//     });
//     // res.on('end', ()=>{
//     //     console.log(rawData);
//     // });
// });

/* http collect */
// function getData(num) {
//     if (num > 4) return;
//     let path = process.argv[num]
//     http.get(path,(res)=>{

//         let rawData = "";
//         res.setEncoding('utf8');
//         res.on('data', (chunk) => { 
//             rawData = rawData + chunk;
//         });
//         res.on('end', ()=>{
//             // console.log(rawData.length);
//             console.log(rawData);
//             num++;
//             getData(num);
//         });

//     });
// }
// getData(2);
// http.get(process.argv[2], (res) =>{
//     res.pipe( bl( (err, data)=>{
//         data = data.toString();
//         console.log(data.length);
//         console.log(data);
//     } ) );
// });

// let server = net.createServer( (socket)=>{
//     let data = strftime('%F %H:%M', new Date());
//     socket.write(data);
//     socket.end('\n');
// });

// server.listen(process.argv[2]);

// http.createServer((request, response)=>{
//     console.log(url.parse(request.url).pathname);
//     response.writeHead(200, { 'content-type': 'text/plain' });

//     let file = fs.createReadStream(process.argv[3]);
//     file.pipe(response);
//     // console.log(file);
// }).listen(process.argv[2]);

http.createServer((req,res) =>{
    if(req.method == "POST"){
        res.writeHead(200, {'content-type': 'text/plain'});
        req.pipe(map((chunk)=>{
            return chunk.toString().toUpperCase();
        })).pipe(res);
        // req.on('data',(chunk)=>{
        //     res.write(chunk.toString().toUpperCase());
        // });
    }
    req.on('end', function(){
        res.end();
    });
    
    // fs.createReadStream(process.argv[3]).pipe(map((chunk)=>{
    //     return chunk.toString().toUpperCase();
    // })).pipe(res);
}).listen(process.argv[2]);












