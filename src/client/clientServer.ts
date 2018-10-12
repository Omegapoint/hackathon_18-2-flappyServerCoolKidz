const express = require("express");
const app = express();
const path = require("path");


// app.use(express.static(__dirname + "/dist"));
app.use(express.static("dist"));
app.set("view engine", "ejs");
app.set("views", "./src/client");

app.get("/", (req: any, res: any, next: any) => {
    res.render(
        "index", {}
    );
    next();
});

const port = 8888;

app.listen(port, () => {
    console.log(`Client Server started at http://localhost:${port}/`);
});