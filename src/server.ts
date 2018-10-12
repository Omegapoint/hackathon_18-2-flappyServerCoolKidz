const http = require("http");
const socketIo = require("socket.io").default;

const ioServer = socketIo({
    path: "/flappy",
    serveClient: false,
});

//const socketIo = require("socket.io").default;

const server = http.createServer();

ioServer.attach(server, {
    pingInterval: 10000,
    pingTimeout: 5000,
    cookie: false
});

ioServer.on("connection", (socket) => {
    console.log("Client connected to server");
    socket.emit("welcome", "hello you connected to the seervör");
});

ioServer.use((socket, next) => {
    console.log("Socket middleware");
    next();
});

const serverPort = 5555;
console.log("Server on port ", serverPort);
var gameState = {

};
ioServer.of('/').emit('flappy', 'hello');
server.listen(serverPort);
