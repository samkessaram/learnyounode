var http = require('http');
var url = process.argv[2];

http.get(url,function listen(response){
  var allData = "";
  response.setEncoding('utf8');
  response.on('data',function pushToAll(data){
    allData += data;
  })

  response.on('end', function output(){
    console.log(allData.length);
    console.log(allData);
  })
})