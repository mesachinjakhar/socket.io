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

// Socket.IO connection
io.on("connection", (socket) => {
  console.log("New Connection: ", socket.id);

  // Disconnect event
  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });

  // Broadcast listner
  socket.on("broadcast", (msg) => {
    io.emit("broadcast-message", { from: socket.id, message: msg }); // Broadcast to everyone
  });
});

// Start server
server.listen(3000, () => {
  console.log("Server running on port: 3000");
});
