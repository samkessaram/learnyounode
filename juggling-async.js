var http = require('http');
var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

var allData = [];

function getData(){
  getSecond();

  getFirst();

  getThird();

}

function checkDataSet(){
  if (!!allData[0] && !!allData[1] && !!allData[2]){
    printData();
  }
}

function printData(){
  for (var i = 0; i < allData.length; i++){
    console.log(allData[i]);
  }
}

function getFirst(){

  http.get(url1,function listen(response){
    var fullResponse = "";
    response.setEncoding('utf8');
    response.on('data',function storeData(data){
      fullResponse += data;
    })
    response.on('end', function addToAllData(){
      allData[0] = fullResponse;
      checkDataSet();
    })
  })
}

function getSecond(){

  http.get(url2,function listen(response){
    var fullResponse = "";
    response.setEncoding('utf8');
    response.on('data',function storeData(data){
      fullResponse += data;
    })
    response.on('end', function addToAllData(){
      allData[1] = fullResponse;
      checkDataSet();
    })
  })
}

function getThird(){

  http.get(url3,function listen(response){
    var fullResponse = "";
    response.setEncoding('utf8');
    response.on('data',function storeData(data){
      fullResponse += data;
    })
    response.on('end', function addToAllData(){
      allData[2] = fullResponse;
      checkDataSet();
    })
  })
}

getData();
