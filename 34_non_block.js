var fs = require("fs");

fs.readFile("file.txt", function (err, data) {
  if (err) return console.error("Plz try again...!", err);
  console.log(data.toString());
  console.log("Task Completed Successfully...");
});
