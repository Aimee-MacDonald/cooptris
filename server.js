const express = require("express");
const app = express();
const server = require("http").Server(app).listen(process.env.PORT || 5050);
const io = require("socket.io").listen(server);

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => res.render("index"));

io.on("connection", socket => {
  socket.on("hh", p => {
    socket.emit("bb", "bb");
  });
});
