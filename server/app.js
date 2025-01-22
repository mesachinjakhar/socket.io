const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

// configuration
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // Allow React frontend
    methods: ["GET", "POST"], // Allowed methods
  },
});

// Middleware
app.use(cors());

let users = [];

// Socket.IO connection
io.on("connection", (socket) => {
  console.log("New Connection: ", socket.id);

  // push to user array
  users.push({ id: users.length + 1, socketId: socket.id });

  io.emit("active-users", users.length);

  // Disconnect event
  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
    // delete user from users array
    users = users.filter((usr) => usr.socketId !== socket.id);
    io.emit("active-users", users.length);
  });

  // Broadcast listner
  socket.on("broadcast", (msg) => {
    io.emit("broadcast-message", { from: socket.id, message: msg }); // Broadcast to everyone
  });

  socket.on("private", (msg) => {
    io.to(msg.recipientId).emit("private-message", {
      from: socket.id,
      message: msg.message,
    });
  });
});

// Start server
server.listen(3000, () => {
  console.log("Server running on port: 3000");
});
