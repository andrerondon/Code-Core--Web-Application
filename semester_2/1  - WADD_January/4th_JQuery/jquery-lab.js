// jQuery Lab: http://bit.ly/jquery-lab

$('.shape') // select all shapes
document.getElementsByClassName('shape') // takes in the name of the class
document.querySelectorAll('.shape') // takes in css selector 

$('.shape.black') // select all black shapes
$('.shape').length // count all shapes
$('.shape.black').length // count all black shapes
$('.shape.black, .shape.blue').length // count all black shapes and blue shapes
$('h1') // select all h1 tags
$('.shape.small.circle') // select all small circles

// get the 1st element of the jQuery set, and returns a set with 1 length
// you can continue calling jquery methods on it
$('.shape').eq(0) 

// returns the element itself
$('.shape')[0] 

// When getting an attribute, only the first element's attribute is returned
$('a').attr('href')

// When setting attributes, every element in the collection will be set
// Add 'http://' to use the HTTP protocol
$('a').attr('href', 'http://www.codecore.ca')

// set all class attributes to 'highlight'
// it replaces the value of the attribute
$('a').attr('class', 'highlight')
$('.shape').attr('class', 'highlight') 

// Add or remove a class
$('.shape').addClass('highlight')
$('.shape').removeClass('highlight')
$('.shape').toggleClass('highlight')

// Remove all shapes
$('.shape').remove() // removes from the DOM
$('.shape').hide() // changes display property to none

$('.shape.blue').remove() // Remove all blue shapes
$('#orange-container .shape').remove() // Remove all shapes inside of the orange container
$('.shape.small.circle.red').remove() // Remove all small red circles
$('#reset').html() // Get html contents of the reset button

// Try to get the HTML content of all the links
// but only the first element's content is returned
$('a').html()

// One way to get the links
const links = $('a')
const contents = []
for (let i = 0; i < links.length; i++) {
  contents.push(links.eq(i).html())
}

// Change the content of the reset button to "Launch Missiles"
$('#reset').html('Launch Missiles')

// Update all h1's to say "Your Name" is cool!
$('h1').html(`${prompt('What is your name?')} is cool!`)

// Select all shapes in the purple conatiner using .chilren()
$('#purple-container').children()

// Get the green container using .parent()
$('.grey.large.diamond').eq(1).parent()
$('.medium.red.diamond').parent()

// Select all <li> that contain a link
// .parent() gets all parents wrapped in a set
$('li > a').parent() 

// Events

// Log "shape clicked" when a shape is clicked
// The callback here is the event handler
// The event object passed into the callback has properties
// associated with the event
$('.shape').on('click', function(event) {
  console.log('shape clicked')
})

document.querySelectorAll('.shape').forEach(node => {
  node.addEventListener('click', function(event) {
    console.log('shape clicked')
  })
})

// Log 'blue circle go away' when a mouse enters a blue circle
$('.circle.blue').on('mouseenter', function(event) {
  console.log('blue circle go away!')
})

document.querySelectorAll('.circle.blue').forEach(node => {
  node.addEventListener('mouseenter', function(event) {
    console.log('blue circle go away!')
  })
})

// Log 'blue circle, goodbye!' when mouse leaves a bule circle
$('.circle.blue').on('mouseleave', function(e) {
  console.log('blue circle goodbye!')
})

document.querySelectorAll('.shape.blue').forEach(function(node) {
  node.addEventListener('mouseleave', function(e) {
    console.log('blue circle goodbye!');
  })
})

// When mouseenters any <tr>, set the class to 'highlight'
// this and e.currentTarget is the DOM node that the event handler 
// was attached to
$('tr').on('mouseenter', function(e) {
  $(this).attr('class', 'highlight')
  // $(e.currentTarget).attr('class', 'highlight')
})

const tr = document.getElementsByTagName('tr')
for (let i = 0; i < tr.length; i++) {
  tr[i].addEventListener('mouseenter', function(e) {
    tr[i].classList.add('highlight')
  })
}

// When mouseleaves any <tr>, remove the class of 'highlight'
$('tr').on('mouseleave', function(e) {
  $(this).attr('class', '')
  // $(e.currentTarget).attr('class', 'highlight')
})

const tr = document.getElementsByTagName('tr')
for (let i = 0; i < tr.length; i++) {
  tr[i].addEventListener('mouseleave', function(e) {
    tr[i].classList.remove('highlight')
  })
}

// When any shape is clicked, log the value of its class
$('.shape').on('click', function(e) {
  console.log($(this).attr('class'))
})

// Hide the shape when it's clicked
$('.shape').on('click', function(e) {
  $(this).hide()
})

// Hide the container of the shape that was clicked
$('.shape').on('click', function(e) {
  $(this).parent().remove()
})

// When a container is clicked, remove all shapes inside of it
$('.container').on('click', function(e) {
  $(this).children().remove()
})

// Event Bubbling
// event.currentTarget or 'this' refers to the element that the 
// event handler was attached to
// event.target is the original element that fired the event

$('.container').on('click', function(e) {
  console.log('currentTarget:', e.currentTarget)
  console.log('target:', e.target)
})

$('.large.blue.square').on('click',function(e) {
  console.log('currentTarget:', e.currentTarget)
  console.log('target:', e.target)
})

// Enable event capturing:
document.querySelectorAll('.container').forEach(node => {
  node.addEventListener('click', function(e) {
    console.log('currentTarget:', e.currentTarget)
    console.log('target:', e.target)
  }, true)
})

document.querySelectorAll('.square.blue.large').forEach(node => {
  node.addEventListener('click', function(e) {
    console.log('currentTarget:', e.currentTarget)
    console.log('target:', e.target)
  }, true)
})
