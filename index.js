const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer();
const io = new Server(server, {
  cors: {
    origin: "http://192.168.100.122:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`socket ${socket.id} connected`);

  socket.on("find_room", () => {
    socket.emit("found_room", { data: "Room 123" });
  });
});

server.listen(3001);
