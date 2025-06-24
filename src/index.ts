import http from "http";
import { Server, Socket } from "socket.io";

const server = http.createServer();

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket: Socket) => {
  console.log(`socket ${socket.id} connected`);

  socket.on("find_room", () => {
    socket.emit("found_room", { data: "Room 123" });
  });
});

server.listen(3001, () => {
  console.log("Socket server listening on port 3001");
});
