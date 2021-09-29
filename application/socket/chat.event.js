const io = require("../bootstrap").io;
const users = require("../bootstrap").users;

io.on("connection", (socket) => {
  socket.on("chat message", (message) => {
    socket.broadcast.emit("chat message", message, socket.nickname);
  });
});
