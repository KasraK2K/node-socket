const bootstrap = require("./application/bootstrap");
const { app, server, io, port } = bootstrap;
const events = require("./application/socket");

// ─── ROUTER ─────────────────────────────────────────────────────────────────────
app.use("/", require("./application/routes"));

// ─── SOCKET ─────────────────────────────────────────────────────────────────────
io.on("connection", () => events);

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});
