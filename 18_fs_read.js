var http = require("http"); // data trans
var fs = require("fs"); // file op
http
  .createServer(function (req, res) {
    fs.readFile("./17_fs_demo.htm", function (err, data) {
      if (err) console.log(err);
      else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      }
    });
  })
  .listen(5000);
