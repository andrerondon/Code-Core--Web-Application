// Using class syntax, model a library that holds books. Both the library and books
// should be constructed objects.
// ​
// Create a `Library` class and a `Book` class.
// ​
// Let's go over the `Book`.
// ​
// The book should keep track of the `authors`, `title` and `edition` of the book.
// ​
// ```javascript
// // Here are a few examples of books being constructed
// const eloquentJS = new Book("Eloquent Javascript", ["Marijn Haverbeke"], 3);
// const speakingJS = new Book("Speaking JavaScript", ["Dr. Axel Rauschmayer"], 1);
// const theRustProgLang = new Book(
//   "The Rust Programming Language",
//   ["Steve Klabnik", "Carol Nichols"],
//   2
// );
// ```
// ​
// Let's go over the `Library`. Like the `Book`, it is constructed. Unlike the
// `Book` it has several prototype methods. It is constructed without arguments.
// ​
// Give it the prototype method `shelve` that takes a book object and stores it.
// When shelving books, store them in alphabetical by their title.
// ​
// ```javascript
// const lib = new Library();
// lib.shelve(eloquentJS);
// lib.shelve(theRustProgLang);
// ```
// ​
// Give it the prototype method `findByTitle`. It'll search for the first book
// whose title contains the passed in string argument.
// ​
// ```javascript
// // The casing of the string should be ignored
// lib.findByTitle("eloquent"); // Book {title: "Eloquent Javascript", authors: Array(1), edition: 3}
// lib.findByTitle("Rust"); // Book {title: "The Rust Programming Language", authors: Array(2), edition: 2}
// ```
// ​
// Give it the prototype method `list` which returns all books in the library in an
// Array.
// ​
// ```javascript
// lib.list();
// // [
// //   Book {title: "Eloquent Javascript", authors: Array(1), edition: 3},
// //   Book {title: "The Rust Programming Language", authors: Array(2), edition: 2},
// // ]
// ```
// ​
// #### Stretch: 
// ​
// See if you can make it possible to chain shelve calls
// ​
// ```javascript
// lib
//   .shelve(speakingJS)
//   .shelve(theRustProgLang);
// ```

function Book(author, title, edition) {
    this.author = author;
    this.title = title;
    this.edition = edition;
  }
  
  function Library() {
    this.books = [
      new Book(1,'c', 1),
      new Book(1,'a', 1),
      new Book(1,'b', 1),
    ];
  }
  
  // methods 
  Library.prototype.shelve = function (book) {
    // book is a instance of a Book
    // this.books looks like = [
    //   {title: 'b'},
    //   {title: 'c'},
    // ]
    this.books.push(book);
    this.books = this.books.sort((a, b) => {
      console.log(a, b);
      return a.title.toLowerCase() > b.title.toLowerCase() ? 0 : -1
    });
  }
  
  const l = new Library();
  l.shelve(new Book(1, 'd', 1));
  console.log(l.books);