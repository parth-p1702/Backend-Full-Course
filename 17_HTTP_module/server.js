// step1: import the http module
const http = require("http");
// step2: create wen server using http.createServer(). Here server is EventEmitter(sometime ask in interview)
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>Welcome to my channel Like it </h1>");
    res.end();
  }
  if (req.url === "/source") {
    res.write("Welcome to source page");
    res.end();
  }
  if (req.url === "/contact") {
    res.setHeader("Contact-Type", "text/plain");
    res.write("Have a project or want to collobrate?");
    res.end();
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
