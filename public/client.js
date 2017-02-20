var socket = io();

$('form').submit(function (e){
  e.preventDefault();

  var mess = {
    text : $('#m').val()
  }

  console.log(mess);

    socket.emit('chat-message', mess);

    $('#m').val('');
    $('#messages').append($('<li>' + mess.text + '</li>'));
    $('#chat input').focus();

});
  
socket.on('chat-message', function (message){
    $('#messages').append($('<li>' + message + '</li>'));
  });
