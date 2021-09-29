// ─── IMPORT ─────────────────────────────────────────────────────────────────────
const express = require("express");
const http = require("http");

const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const port = process.env.PORT || 3000;
const users = [];

module.exports = {
  express,
  http,
  app,
  server,
  io,
  port,
  users,
};
