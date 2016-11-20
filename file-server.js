var http = require('http')
var fs = require('fs')
var port = process.argv[2]
var filePath = process.argv[3]

var server = http.createServer(function(request,response){
    var myStream = fs.createReadStream(filePath)
    myStream.pipe(response)
})

server.listen(port)