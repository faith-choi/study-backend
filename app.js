const express = require("express");
const app = express();
app.set("view engine", "ejs");

app.use("/static", express.static("static"));
// app.use("/static", express.static(__dirname + "/static"));

const port = 8000;

app.get("/", (req, res) => {
  res.render("test");
});

app.listen(port, () => {
  console.log(port, "번 포트에서 대기중");
});
