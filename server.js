const http = require("http");
const { resolve } = require("path/posix");
console.log(".......................http", http);

const server = http.createServer((req, res) => {
  // console.log(res);
  res.end("Hello Worldsssss");
});

server.listen(4242, () => {
  console.log("Server is running");
});
