const io = require("../bootstrap").io;
const users = require("../bootstrap").users;

io.on("connection", (socket) => {
  socket.on("join room", (roomName, fakeName) => {
    const id = socket.rooms.keys().next().value;
    io.socketsJoin(roomName);
    io.to(id).emit("room event", roomName, fakeName);
    // io.to(roomName).emit("room event", roomName, fakeName);
  });
});
