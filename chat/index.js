const express = require('express');
const http = require('http');
const io = require('socket.io');
const path = require('path');
const app = express();
const server = http.createServer(app);
const socketIo = io(server);

app.use(express.static(path.join(__dirname, 'public')));

const chatters = [];

socketIo.on('connection', socket => {
  let name;
  socket.on('login', (n, callback) => {
    if (chatters.find(c => c === n)) {
      return callback(`Duplicate login ${n}, try again!`)
    }
    callback();

    name = n;
    chatters.push(name);

    socket.broadcast.emit('info', `${name} has joined the chat`)
    socket.on('msg', msg => {
      socketIo.emit('msg', `${name}: ${msg}`);
    });
    socket.on('disconnect', () => {
      socket.broadcast.emit('info', `${name} has left the chat`)
    })
  })

});

app.get('/', (req, res, next) => {
  res.end('hello world');
});

server.listen(80);
