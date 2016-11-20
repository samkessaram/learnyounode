var net = require('net');
var portNumber = process.argv[2];


var server = net.createServer(function listener(socket){

  date = new Date();
  date = date.getFullYear() + '-' + (1 + date.getMonth())
        + '-' + date.getDate() + ' ' + date.getHours() + ':'
        + date.getMinutes();

  socket.write(date);
  socket.write('\n');
  socket.end();
})

server.listen(portNumber);