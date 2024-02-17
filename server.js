const http = require("http");
const { resolve } = require("path/posix");
console.log(".......................http", http);

///create server
const server = http.createServer((req, res) => {
  // console.log(res);
  res.end("Hello Node");
});

///activate the server
server.listen(4242, () => {
  console.log("Server is running");
});
