var http = require("http"); // Import Node.js core module
var server = http.createServer(function (req, res) {
  //create web server

  if (req.url == "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write('<form action="send" method="post">'); // GET -> PARAMOBJ, POST-> BODYObj
    res.write('<input type="text" ><br>');
    res.write('<input type="submit">');
    res.write("</form>");
    return res.end();
  } else if (req.url == "/send" && req.method === "POST") {
    // console.log(req);
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  } else res.end("Invalid Request!");
});
server.listen(5000); //6 - listen for any incoming requests
