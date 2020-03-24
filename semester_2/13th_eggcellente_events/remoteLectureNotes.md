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

