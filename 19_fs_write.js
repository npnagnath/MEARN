var fs = require("fs");

fs.writeFile("demo.txt", "hello", function (err) {
  if (err) console.log(err);
  else console.log("Write operation complete.");
});
