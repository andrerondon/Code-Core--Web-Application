March 24:

Agenda
1) Introduction to ORMs
2) Refactor Events Model to use ORM
3) Go over ERD
4) Add Users to Project.


# ORMS

What are ORMS

- Stands for Object Relational Mapping / Object Relation Mapper
- Layer between the Database & SQL and your Business logic

Why use ORMs

- A lot of built in functionality such as queries that you don't need to write
- Makes it easy to validate inputs by providing built in functionality for that
- Makes it easy to relate models to each other


ORMS use objects to represent table rows

Pros:
- A lot less code needs to be written -> way faster development time
- Has a lot of built in features like validation and error handling

Cons:
- Can't do everything that you want which means you're going to have to bypass the ORM and use raw sql
- ORMs are less performant than raw sql

# ERD

Entity Relationship Diagram


# Labs/Todo for tmr's class
**Create full CRUD for users**

GET "/users" -> controller.index -> view.index
GET "/users/new" -> controller.new -> view.new
POST "/users" -> controller.create -> create a user
GET "/users/:id" -> controller.show -> view.show
GET "/users/:id/edit" -> controller.edit -> view.edit
PATCH "/users/:id" -> controller.update -> update a user
DELETE "/users/:id" -> controller.delete -> delete user

March 25:

Agenda:
1) Go Over Users CRUD
  a) Create Users Seed
  b) Create a Login Page -> create a route -> add controller -> view
2) User Authorization with Cookies
  a) Explain Cookies
  a) "cookie-session" middleware
  b) when user submits login create a cookie
3) Hashing passwords
  a) explain hashing
  b) explain salt
  c) install "bcrypt" middleware
  d) **Create Password Helper**
  e) update seedfile
  f) login with secure password
  g) create authentication middleware
4) One to Many Association <- if we have time

HTTP requests are stateless. If we wanted to save data between requests we'd need implement Session

We implement Sessions with cookies

Hashing is taking a string and turning it into another string that looks randomized.
Nobody should be able to un-Hash the "hashed" string

We use the bcrypt module to hash passwords for us https://www.npmjs.com/package/bcrypt



March 30

Agenda:


0) Questions/Review
1) Create buttons in Navbar for Sign In / Sign out
  - pass `req.session` to views
2) Create Authentication Middleware
3) Model Validations
  - event "saving"
4) One to Many Associations
5) Custom flash middleware
  works by:
  sets `req.locals.sessionFlash = res.session.sessionFlash`
  then delete `res.session.sessionFlash`



March 31

Agenda:


0) Questions/Review
1) Create buttons in Navbar for Sign In / Sign out
  - pass `req.session` to views
2) Create Users with hashed password
3) Create Authentication Middleware
4) res.locals
---------------------------------------------------
5) Model Validations (Bookshelf Events)
  - user "saving"
  - email, password,
  - throwing javascript
  - refactor password hash to use event
5.a) Error Handler Middleware
6) Custom flash middleware
  works by:
  sets `req.locals.sessionFlash = res.session.sessionFlash`
  then delete `res.session.sessionFlash`
8) One to Many Associations
  - add foreign key constraint to event: user_id -> user.id
  - add model to relationship
  -