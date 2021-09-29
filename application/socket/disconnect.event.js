const io = require("../bootstrap").io;
const users = require("../bootstrap").users;

io.on("connection", (socket) => {
  socket.on("disconnect", () => {
    socket.broadcast.emit("user disconnection", socket.nickname);
    users.splice(users.indexOf(socket.nickname), 1);
    io.emit("change online users", users);
  });
});
