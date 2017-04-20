/**
 * Created by dllo on 2017/4/20.
 */
var http = require('http');
var url = require('url');
var fs = require('fs');
var se = http.createServer(function (request,response) {

    var obj =  url.parse(request.url);
    console.log(obj.pathname);

    //判断文件存不存在的

     fs.exists('./1.png', function (exists) {
         // console.log(exists);  如果文件存在,会打印true 不存在打印false走else分支就报404
       if(exists){
           fs.readFile('./1.png','binary',function (error,data) {
               response.writeHead(200,{'Content-Type':'image/jpeg'});
               response.write(data,'binary');
               response.end();
           })
       }else {
           response.writeHead(404);
           response.end('404 not found');

       }
    });


});
se.listen(3000);
