var fs = require('fs');
var path = process.argv[2];
var testExt = process.argv[3];

fs.readdir(path,function(err,list){
  for (var i = 0; i < list.length; i++){
    ext = list[i].split('.')[1];
    if (ext && ext === testExt){
      console.log(list[i]);
    }
  }
});

