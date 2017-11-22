let fs = require('fs');
let path = require('path');//path.extname();
let http = require('http');
let bl = require('bl');
let net = require('net');
let strftime = require('strftime'); 
let url = require('url');
let map = require('through2-map');
let through = require('through2');
let split = require('split');
let concat = require('concat-stream');
let request = require('request');
let websocket = require('websocket-stream');
let trumpet = require("trumpet");
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

/*http.createServer((request, response)=>{
    console.log(url.parse(request.url).pathname);
    response.writeHead(200, { 'content-type': 'text/plain' });

    let file = fs.createReadStream(process.argv[3]);
    file.pipe(response);
}).listen(process.argv[2]);*/

/*http.createServer((req,res) =>{
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
}).listen(process.argv[2]);*/

/*http.createServer((req,res)=>{
    if(req.method == "GET"){
        res.writeHead(200,{'content-type': 'application/json'});
        // console.log(url.parse(req.url));
        let $pathname = url.parse(req.url).pathname.split('/');
        let $query = url.parse(req.url).query.split("=");
        if($pathname[2] === "parsetime"){
            let obj = {
               "hour": new Date($query[1]).getHours(),
               "minute": new Date($query[1]).getMinutes(),
               "second": new Date($query[1]).getSeconds()
            };

            res.end(JSON.stringify(obj));
        }else if($pathname[2] === "unixtime"){
            let obj = {
               "unixtime": new Date($query[1]).getTime()
            };

            res.end(JSON.stringify(obj));
        }
        
    }
}).listen(process.argv[2]);*/

// 创建一个 HTTP 代理服务器~~
/*const proxy = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('okay');
});
proxy.on('connect', (req, cltSocket, head) => {
  // 连接到一个服务器
  const srvUrl = url.parse(`http://${req.url}`);
  const srvSocket = net.connect(srvUrl.port, srvUrl.hostname, () => {
    cltSocket.write('HTTP/1.1 200 Connection Established\r\n' +
                    'Proxy-agent: Node.js-Proxy\r\n' +
                    '\r\n');
    srvSocket.write(head);
    srvSocket.pipe(cltSocket);
    cltSocket.pipe(srvSocket);
  });
});*/

// 代理服务器正在运行
/*proxy.listen(1337, '127.0.0.1', () => {

  // 发送一个请求到代理服务器
  const options = {
    port: 1337,
    hostname: '127.0.0.1',
    method: 'CONNECT',
    path: 'www.google.com:80'
  };

  const req = http.request(options);
  req.end();

  req.on('connect', (res, socket, head) => {
    console.log('已连接！');

    // 通过代理服务器发送一个请求
    socket.write('GET / HTTP/1.1\r\n' +
                 'Host: www.google.com:80\r\n' +
                 'Connection: close\r\n' +
                 '\r\n');
    socket.on('data', (chunk) => {
      console.log(chunk.toString());
    });
    socket.on('end', () => {
      proxy.close();
    });
  });
});
*/
// console.log('beep boop');

// fs.createReadStream(process.argv[2]).pipe(process.stdout);

// process.stdout.write('请输入num1的值：');

// process.stdin.pipe(process.stdout);

/*function write(buffer, encoding, callback){
  this.push(buffer.toString().toUpperCase());
  callback();
}
process.stdin.pipe(through(write)).pipe(process.stdout);*/


/*let counter = 0;
function write(chunk, encoding, callback){
  chunk = chunk.toString();
     if(counter % 2 === 0){
      chunk = chunk.toLowerCase() + '\n';
    }else{
      chunk = chunk.toUpperCase()+ '\n';
    }
  counter++;
  this.push(chunk);
  callback();
}
process.stdin.pipe(split()).pipe(through(write)).pipe(process.stdout);*/

/*process.stdin.pipe(concat( (body)=>{
    console.log(body.toString().split("").reverse().join(""));
}));*/

/*http.createServer(function(req,res){
  if(req.method === "POST"){
    req.pipe(map((buf)=>{
      return buf.toString().toUpperCase();
    } )).pipe(res);
  }
  if(req.method === "POST"){
    req.pipe(through(function(buf,_,callback){
      this.push(buf.toString().toUpperCase());
      callback();
    })).pipe(res);
  }
}).listen(parseInt(process.argv[2]));*/

/*let r = request.post("http://localhost:8099");
process.stdin.pipe(r).pipe(process.stdout);*/

/*let stream = websocket("ws://localhost:8099");
stream.write("hello\n");*/

/*let tr = trumpet();
let loud = tr.select('.loud').createStream();
loud.pipe(through(function(buf,_,callback){
  this.push(buf.toString().toUpperCase());
  callback();
})).pipe(loud);
process.stdin.pipe(tr).pipe(process.stdout);*/

/*let duplexer2 = require("duplexer2");

let spawn = require("child_process").spawn;
module.exports = function(cmd, args){
  let ps = spawn(cmd, args);
  return duplexer2(ps.stdin, ps.stdout);
};*/







