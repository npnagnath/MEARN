var http = require("http");

var server = http.createServer(function (req, res) {
  if (req.url == "/") {
    // www.facebook.com    ==  /   [ home page ] (http://localhost:5000/)
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>Hello from nodeJs</h1>");
    res.end();
  } else if (req.url == "/admin") {
    // www.facebook.com    ==  /   [ home page ] (http://localhost:5000/)
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1 style='color:red'>Hello Admin</h1>");
    res.end();
  } else if (req.url == "/students") {
    // www.facebook.com    ==  /   [ home page ] (http://localhost:5000/)
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1 style='color:green'>Hello students</h1>");
    res.end();
  } else res.end("<h1> invalid req...!</h1>");
});

server.listen(5000);
