// To add an event to the DOM attach it to a node using <node>.addEventListener

// addEventListener accpets 2 arguemnts:
// 1) string of the name of event to listen for
// 2) a callback function that has the 'event' property
document.addEventListener('DOMContentLoaded', (event) => {


    const buttonOne = document.querySelector('#button-1')
    buttonOne.addEventListener('click', (event) => {
      console.log('button clicked');
      console.log(event);
      const allCircles = document.querySelectorAll('.circle');
      allCircles.forEach((node) => {
        node.remove()
      })
    })
  
    const allSquares = document.querySelectorAll('.square');
    allSquares.forEach(node => {
      node.addEventListener('mouseenter', (event) => {
        node.style.backgroundColor = 'yellow'
      })
      node.addEventListener('mouseleave', () => {
        node.style.backgroundColor = ''
      })
    })
  
    const firstSection = document.querySelector('section');
    fetch('https://pokeapi.co/api/v2/pokemon')
    .then((response) => {
      return response.json()
    })
    .then(data => {
      data.results.forEach(pokemon => {
        const div = document.createElement('div');
        div.innerText = `${pokemon.name}`
        firstSection.append(div);
      })
    })
  })
  
  // AJAX
  
  // fetch is a method on the global scope of a browser that lets us send HTTP Requests (AJAX requests)
  
  fetch('https://pokeapi.co/api/v2/pokemon')
    .then((response) => {
      return response.json()
    })
    .then(data => {
      console.log(data)
    })
  
  // fetch accepts 2 arguments
  // 1) the url of the resource you want to send a request to
  // 2) a options object that contains keys to set header, body, credentials, ect of the request
  
  // Fetch returns a promise that has a 'Response" object
  // The 'Response' object represents the HTTP Response the server returns
  // To get the Data of a Response you have to call Response.json()
  