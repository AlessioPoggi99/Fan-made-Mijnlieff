const PORT = process.env.PORT || 8000;

const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on("connection", (socket) => {
  socket.on("join_room", (roomCode) => {
    if(io.sockets.clients(roomCode) >= 2) { 
      socket.emit("error", "Too many connections")
    }
    else {
      socket.join(roomCode);
    }
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });
});

server.listen(PORT, () => {
    console.log(`listening on *:${PORT}`);
});