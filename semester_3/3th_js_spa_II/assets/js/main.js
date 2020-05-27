// To be able to make cross-origin requests, what we mean by is making HTTP/AJAX
// requests we need to allow accepting requests from different origins

// cross-origin requests come into the scene in the following cases
// 1. When trying to make a request from a different domain to our API example making a request from facebook.com
//  to google.com completely different domains
// 2. When we try to make a request from the same domain but, different ports for exmple making a request 
//  from localhost:8080 to localhost:3000
// 3. When we try to make a request using a different protocol for example making a request
//  from https://localhost:3000 to http://localhost:3000
// 4. When we try to make a request from a sub domain to a domain for example making a request 
//  from http://developers.google.com to http://google.com

const baseUrl = "http://localhost:3000/api/v1";

fetch(`${baseUrl}/questions`)
  .then((res) => res.json())
  .then((questions) => console.log(questions));
