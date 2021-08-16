var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("hello");
});
app.get("/abc", function (req, res) {
  res.send("hello from ABC...");
});
app.get("/*product", function (req, res) {
  res.send("hello from any products...");
});
app.get("/product*", function (req, res) {
  res.send("hello from any products...");
});
app.get("/*product*", function (req, res) {
  res.send("hello from any products...");
});
app.listen(3000, function () {
  console.log("Server Started...");
});
