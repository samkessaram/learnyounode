var fs = require('fs');
var path = process.argv[2];

printNewLines = function(err, file){
  lines = file.toString().split(/\n/).length-1;
  console.log(lines);
}

fs.readFile(path,printNewLines);