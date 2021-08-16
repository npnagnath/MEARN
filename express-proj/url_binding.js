var express = require("express");
var app = express();

// var id    =   :id

app.get("/", function (req, res) {
  res.send("Please Enter Id and Name");
});

app.get("/:id", function (req, res) {
  res.send("Please Enter Name");
});

app.get("/:id/:pName", function (req, res) {
  res.send("id : " + req.params.id + " Name : " + req.params.pName);
});

app.listen(3000, function () {
  console.log("Server Started...");
});
