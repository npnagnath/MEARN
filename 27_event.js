var fs = require("fs");
var rs = fs.createReadStream("./28_demo.html");
rs.on("open", function () {
  console.log("The file is open");
});
