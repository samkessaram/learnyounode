var fs = require('fs');
var path = require('path');

module.exports = 

function createList(dir, ext, callback){

  var extension = "." + ext;
  var filteredFiles = [];

  fs.readdir(dir, function(err, data){
    if (err){
      return callback(err);
    } else {
      for (var i = 0; i < data.length; i++){
        if ( extension === path.extname(data[i])){
          filteredFiles.push(data[i]);
        }
      }
      return callback(null,filteredFiles);
    }
  })
};
