// index.js same as app.module.ts in ng
// importing modules
var express = require("express"); // to include express

var app = express(); // create an Object

var mongoose = require("mongoose"); // mongoose ( to interact with MongoDB )
var bodyparser = require("body-parser"); // body parser ( to interact with front-end data in BoduObj )
var cors = require("cors"); // cors ( to create middleware functionalities )
var path = require("path"); // path ( to set paths  for interaction)

const routes = require("./routes/routes");

// imports:[ FormsModule , cors ]
// adding middleware - cors
app.use(cors()); // Cross Origin Resource Sharing

// body - parser  // json: API & MONGO data sharing
app.use(bodyparser.json());

// routes
app.use("/api", routes);

// Interacting with front-end
app.get("/", (req, res) => {
  res.send("<h1>Response from 'server'...!</h1>");
});

//port no
const port = 3000;

//connect mongodb also creates new db ‘productlist’ with default port ‘:27017’

// use productlist

mongoose.connect("mongodb://localhost:27017/productlist");

//on connection
mongoose.connection.on("connected", () => {
  console.log("Connected to database mongodb @ 27017");
});

mongoose.connection.on("error", (err) => {
  if (err) {
    console.log("Error in Database Connection : " + err);
  }
});

// Interacting with front-end
app.get("/", (req, res) => {
  res.send("<h1>Response from 'server'...!</h1>");
});

app.listen(port, () => console.log("Server started at port: " + port)); // testing Server
