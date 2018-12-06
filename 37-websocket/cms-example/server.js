const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('a user connected to the socket');

    socket.on('disconnect', () => { console.log('a user left us') });

    let chatroom = 'lobby';
    socket.join(chatroom);
    
    socket.on('subscribe',(room)=>{
        chatroom = room;
        socket.join(room);
        console.log('a user has connected to the room ' +room );
        io.to(room).emit('chat message',`Thanks for subscribing ${room}`);

    });

    socket.on('chat message', function (msg) {
        console.log('message: ' + msg);
        io.to(chatroom).emit('chat message', msg);
    });
})





// const namespace1 = io.of('/namespace1');
//     namespace1.on('connection', (socket) => {
//         console.log(`Socket with id ${socket.id} connected!`);
//     });
//     socket.on('chat message', function (msg) {
//     namespace1.emit('chat message', msg);
// });
//     
http.listen(8080);