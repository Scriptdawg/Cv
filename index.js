const http = require("http");
const fs = require("fs")

const server = http.createServer((req, res) => {
  // res.writeHead(200, {"Content-Type": "text/plain"});
  // res.end("NodeJS - render/github");

  // HTML Response - File Stream
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.createReadStream(__dirname + "/index.html").pipe(res);
});

const PORT = process.env.Port || 3000;
server.listen(PORT, () => console.log("Server is running on port 3000"));
