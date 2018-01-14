const express = require("express");
const app = express();
const server = require("http").Server(app).listen(process.env.PORT || 5050);
const io = require("socket.io").listen(server);
const cooptris = require("./cooptris");
const game = new cooptris();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => res.render("index"));

io.on("connection", socket => {
  socket.emit("update", game.package());

  socket.on("join", seat => {
    if(game.join(seat)) socket.emit("join", seat);
  });

  socket.on("leave", () => {
    socket.emit("leave", "");
  });
});
