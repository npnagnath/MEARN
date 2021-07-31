var http = require("http");

var server = http.createServer(function (req, res) {
  if (req.url == "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1> we are in server...!</h1>");
    res.end();
  } else if (req.url == "/api") {
    res.writeHead(200, { "content-type": "application/json" });
    res.write(JSON.stringify({ name: "Alex" }));
    res.end();
  } else res.end("<h1>404</h1>");
});

server.listen(5000);
