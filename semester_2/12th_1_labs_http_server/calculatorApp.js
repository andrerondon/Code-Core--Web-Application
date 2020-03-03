const http = require("http");
const url = require('url');



const server = http.createServer((request, response) => { 
  const {pathname, query} = url.parse(request.url, true); 
  console.log(query)
  response.writeHead(200, {'content-type': 'text/html'});


  if (pathname === '/calculator') {
    let calc = 0
    if (query.operators === "sum"){
      calc = (parseInt(query.First_Number) + parseInt(query.Second_Number))
    }
    if (query.operators === "multiply"){
      calc = (parseInt(query.First_Number) * parseInt(query.Second_Number))
    }
    if (query.operators === "divide"){
      calc = (parseInt(query.First_Number) / parseInt(query.Second_Number))
    }
    if (query.operators === "subtract"){
      calc = (parseInt(query.First_Number) - parseInt(query.Second_Number))
    }
          response.write(
            "<main>" +
              "<h1> Calculator </h1>" +
              "<form action='/calculator'>" +
                "<label for='First_Number'>  First Number  </label>" +
                "<input type='number' name='First_Number'/>" +
                "<br>" +
                  "<label for='operators'>operator</label>" +
                  "<select name='operators'>"+
                      '<option value="sum">+</option>'+
                      '<option value="multiply">X</option>'+
                      '<option value="divide">%</option>'+
                      '<option value="subtract">-</option>'+
                  "</select>"+
                  "<label for='Second_Number'>  Second Number  </label>" +
                "<input type='number' name='Second_Number'/>" +
                "<br>" +
                  "<input type='submit' value='submit'/>" +
              "</form>" +
            
            "</main>"
          )
        response.write(`<main><h1>Result: ${calc}</main>`);
        response.end(); 

  }  
  
    
       
  });

const PORT = 5100;
const DOMAIN = 'localhost';
  
  server.listen(PORT, DOMAIN, () => {
    console.log(`Server Calculator App running  ${DOMAIN}:${PORT}`);
  })
