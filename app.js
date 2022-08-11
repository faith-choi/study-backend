const express = require("express");
const app = express();
app.set("view engine", "ejs");

app.use("/static", express.static("static"));
// app.use("/static", express.static(__dirname + "/static"));

const port = 8000;

app.get("/", (req, res) => {
  res.render("test");
});

app.get("/main", (req, res) => {
  res.render("main");
});

app.get("/about", (req, res) => {
  let person = [
    {
      name: "김소연",
      gender: "여자",
    },
    {
      name: "최다혜",
      gender: "여자",
    },
  ];
  res.render("about", { per: person });
});

app.listen(port, () => {
  console.log(port, "번 포트에서 대기중");
});
