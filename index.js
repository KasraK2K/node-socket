// ─── IMPORT ─────────────────────────────────────────────────────────────────────
const express = require("express");
const http = require("http");
// ─── CONSTANTS ──────────────────────────────────────────────────────────────────
const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const port = process.env.PORT || 3000;

// ─── ROUTER ─────────────────────────────────────────────────────────────────────
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/client/index.html");
});

// ─── SOCKET ─────────────────────────────────────────────────────────────────────
const users = [];
io.on("connection", (socket) => {
  socket.on("send-nickname", (nickname) => {
    socket.nickname = nickname;
    users.push(nickname);
    socket.broadcast.emit("user connection", socket.nickname);
    io.emit("change online users", users);
  });

  socket.on("disconnect", () => {
    socket.broadcast.emit("user disconnection", socket.nickname);
    users.splice(users.indexOf(socket.nickname), 1);
    io.emit("change online users", users);
  });

  socket.on("chat message", (message) => {
    socket.broadcast.emit("chat message", message, socket.nickname);
  });
});

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});
