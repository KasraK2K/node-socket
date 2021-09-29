const bootstrap = require("./application/bootstrap");
const { app, server, io, port } = bootstrap;
const events = require("./application/socket");

// ─── ROUTER ─────────────────────────────────────────────────────────────────────
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/client/index.html");
});

// ─── SOCKET ─────────────────────────────────────────────────────────────────────
io.on("connection", () => events);

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});
