const express = require("express");
const app = express();

const prods = ["Mobile", "Book", "Lapi"];

// app.get(route, callBack);
app.get("/", (req, res) => {
  res.send('We are in "/" ');
});

app.get("/api/products", (req, res) => {
  res.send(prods);
});

// var prodId;
// :   prodId
app.get("/api/product/:prodId", (req, res) => {
  res.send(req.params);
  res.send(req.params.prodId);
});

app.get("/api/product/:prodId/:prodName", (req, res) => {
  res.send(req.params);
});

app.listen(3000, () => console.log(`server started on 3000 ...!`));
