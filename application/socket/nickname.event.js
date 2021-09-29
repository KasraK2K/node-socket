const io = require("../bootstrap").io;
const users = require("../bootstrap").users;

io.on("connection", (socket) => {
  socket.on("send-nickname", (nickname) => {
    socket.nickname = nickname;
    users.push(nickname);
    socket.broadcast.emit("user connection", socket.nickname);
    io.emit("change online users", users);
  });
});
