var fs = require("fs");

fs.rename("demo.txt", "test2.txt", function (err) {
  if (err) throw err;
  console.log("File Renamed!");
});
