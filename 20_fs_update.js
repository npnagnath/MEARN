var fs = require("fs");

fs.appendFile("21_demo.txt", " This is my text.", function (err) {
  if (err) throw err;
  console.log("Updated!");
});
