var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var fs = require('fs');
var $ = require('jquery')(require("jsdom").jsdom().defaultView);


app.use(express.static(__dirname + "/public"));

http.listen(4500, function(){
    console.log('Server is listening on *:4500');
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('chat-message', function (message){
    io.emit('chat-message', message.text);
    console.log(message.text);
    $('#messages').append($('<li>').text(message.text));
  });

});
