var socket = io();


$('form').submit(function (e){
  e.preventDefault();

  var mess = {
    text : $('#m').val()
  }

  console.log(mess);

    socket.emit('chat-message', mess);

    $('#m').val('');

    $('#chat input').focus();
});
