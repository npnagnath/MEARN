const express = require("express");
const app = express();

// app.get(route, callBack);
app.get("/", (req, res) => {
  res.send('We are in "/" ');
});

// http://localhost:3000
// post -> BODY Obj

// http://localhost:3000/api/product/?name=value&sortBy=price
// get  -> QUERY Obj

// http://localhost:3000/api/product/1001/Mobile
// routing -> PARAM Obj

// http://localhost:3000/api/product/?sortBy=name

app.get("/api/product", (req, res) => {
  res.send(req.query);
});

app.listen(3000, () => console.log(`server started on 3000 ...!`));
