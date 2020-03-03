const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const {pathname, query} = url.parse(req.url); // url.parse returns an object that has "pathname" and "query" as keys so we can deconstruct them like that
  res.writeHead(200, {'content-type': 'text/html'});
   if (pathname === '/contact_us') {
    res.write(
      "<main>" +
        "<h1> Contact us </h1>" +
        "<form>" +
          "<label for='firstname'>firstname</label>" +
          "<input type='text' name='firstname'/>" +
          "<br>" +
          "<label for='question'>question</label>" +
          "<textarea type='text' name='question'></textarea>" +
          "<br>" +
          "<input type='submit' value='submit'/>" +
        "</form>" +
      "</main>"
    )
    return res.end();
  }
  if (pathname === '/') { // '/' is an alias for the "root" path
    res.write('<main><h1>Root Page</h1></main>');
    return res.end();
  }
  if (pathname === '/welcome') {
    res.write('<main><h1>Welcome to the welcome page</h1></main>');
    // res.write("<main><h1>Welcome to our App!</h1><img src='https://media.giphy.com/media/3o84TQFMWmJX6avrPi/giphy.gif'></main>");
    return res.end();
  } else {
    res.write('<main><h1>Route does not exist</h1></main>');
    return res.end();
  }
});

const PORT = 4000;
const DOMAIN = 'localhost';

server.listen(PORT, DOMAIN, () => {
  console.log(`Server Running on ${DOMAIN}:${PORT}`);
})


// npm install --save-dev nodemon    (node mode for server keep runing all times) 
// npm install -g nodemon
// npm start 