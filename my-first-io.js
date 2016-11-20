var fs = require('fs');
var path = process.argv[2];

var file = fs.readFileSync(path);
file = file.toString();
lines = file.split(/\n/).length-1;
console.log(lines);