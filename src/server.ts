import http from "http";
import socketIo from "socket.io";
import { GameState } from "./models/GameState";

const ioServer = socketIo({
    path: "/",
    serveClient: false,
});

const server = http.createServer();

ioServer.attach(server, {
    pingInterval: 10000,
    pingTimeout: 5000,
    cookie: false
});

ioServer.on("connection", (socket: any) => {
    console.log("Client connected to server");
    socket.emit("welcome", "hello you connected to the seervör");
});

ioServer.use((socket: any, next: any) => {
    console.log("Socket middleware");
    next();
});

const serverPort = 10000;
console.log("Server on port ", serverPort);
const gameState: GameState = {
    time: 0
};
ioServer.of('/').emit("flappy", 'hello');
server.listen(serverPort);
