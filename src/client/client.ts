import io from "socket.io-client";

console.log("client code");

const port = 10000;
console.log("Client connecting to: ", port);

document.getElementById("test-id").innerText = "bla";

const socket = io(`http://localhost:${port}`, {
    path: "/flappy"
});


socket.on("welcome", (res: any) => {
    console.log(res);
});
console.log("before");
socket.connect();
console.log("after");


