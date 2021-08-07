const express = require("express");
const app = express();

const prods = ["Mobile", "Book", "Lapi"];

// app.get(route, callBack);
app.get("/", (req, res) => {
  res.send('We are in home page ... : "/" ');
});

// app.get(route, callBack);
app.get("/products", (req, res) => {
  res.send(prods);
});

app.listen(3000, () => console.log("server started...!"));
