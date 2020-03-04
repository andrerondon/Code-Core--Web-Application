const http = require('http');
const url = require('url');
const qs = require ('query-string');
  
  const server = http.createServer((req, res) => { // this callback gets invoked everytime a user makes a request to our server
    // req is a object that represents the HTTP request
    // res is an ojbect that allows us to create HTTP responses
    const {pathname, query} = url.parse(req.url, true); // url.parse returns an object that has "pathname" and "query" as keys so we can deconstruct them like that
    console.log(query)
    res.writeHead(200, {'content-type': 'text/html'});

    let body = '';
    req.on('data', (chunk) => {
      body += chunk;   // chunck is saing to the server to receive the data by packages 
      console.log(body);
      // body is to get data trough the body and not from query anymore 
    })
    req.on('end', () => {  // that line is doing the cleaning up for chunck
      req.body = qs.parse(body);// this is for change da data geting from string to a object
      const resource = `${req.method} ${pathname}` // GET /contact_us or POST /thank_you

      console.log(resource);

      if (resource === 'GET /stylesheet') {
        res.writeHead(200, {'content-type': 'text/css'});
        res.write('h1 {color: blue; font-size: 50px}')
        return res.end();
      }
      if (resource === 'POST /thank_you') {
        res.write(`Thank you ${req.body.firstname} for your question: ${req.body.question}`)
        return res.end();
      }
      if (resource === 'GET /contact_us') {
        res.write(
          "<html>" +
            "<head>" +
              "<link rel='stylesheet' type='text/css' href='/stylesheet'>" +
            "</head>" +
              "<main>" +
                "<h1> Contact us </h1>" +
                  "<form action='/thank_you' method = 'POST' >" +  // that is paht to thank you
                      "<label for='firstname'>firstname</label>" +
                      "<input type='text' name='firstname'/>" +
                      "<br>" +
                      "<label for='question'>question</label>" +
                      "<textarea type='text' name='question'></textarea>" +
                      "<br>" +
                      "<input type='submit' value='submit'/>" +
                  "</form>" +
              "</main>"+
         "</html>"
        )
        return res.end();
      }
      if (resource === 'GET /') { // '/' is an alias for the "root" path
        res.write('<main><h1>Root Page</h1></main>');
        return res.end(); // you must end the connection when you're done responding
        // you can only respond once per request. If you do multiple responses the server will crash.
        // we are "return"ing from this function so no other "res.write()"s below this are invoked.
      }
      if (resource === 'GET /welcome') {
          // res.write('<main><h1>Welcome to the welcome page</h1></main>');
          // res.write("<main><h1>Welcome to our App!</h1><img src='https://media.giphy.com/media/3o84TQFMWmJX6avrPi/giphy.gif'></main>");
          res.write("<main><h1>Welcome to our App!</h1><img src='https://media.giphy.com/media/7kn27lnYSAE9O/giphy.gif'></main>");
          // res.write("<main><h1>Welcome to our App!</h1><img src=''></main>");
          return res.end();
        } 
    })

    
      
  });
  
  const PORT = 4000;
  const DOMAIN = 'localhost';
  
  server.listen(PORT, DOMAIN, () => {
    console.log(`Server Running on ${DOMAIN}:${PORT}`);
  })
  
  





// npm install --save-dev nodemon    (node mode for server keep runing all times) 
// npm install -g nodemon
// npm start 