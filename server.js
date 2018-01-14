const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("<h1>Hoi!</h1>"));
app.listen(process.env.PORT || 5050);
