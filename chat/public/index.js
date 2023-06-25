(function () {
  'use strict';
  const socketIo = io();

  const mesgDiv = $('#chatDisplay');
  const chat = $('#chatInput')
  const chatForm = $('#mesgForm');
  const loginForm = $('#login')
  const error = $('#error')

  loginForm.submit(e => {
    e.preventDefault();
    socketIo.emit('login', $('#username').val(), result => {
      if (result) {
        error.text(result);
      }
      else {
        error.text('');
        loginForm.slideUp('slow');
        $('#mesgContainer').slideDown('fast');
        socketIo.on('msg', msg => {
          mesgDiv.append(`<div>${msg}</div>`);
        });
        socketIo.on('info', info => {
          mesgDiv.append(`<div class = info>${info}</div>`)
        })
      }
    })
  })

  chatForm.submit(e => {
    e.preventDefault();
    socketIo.emit('msg', chat.val());
    chat.val('')
  })


})();
