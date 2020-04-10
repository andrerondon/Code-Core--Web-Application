Agenda:

CodeCast Link https://www.codecast.io/play_cast/DKPjp79GLw2A

ExpressJS
1) Setting up Express Server
2) Installing and Configuring KnexJS
3) BlogPost Migration
4) CRUD BlogPost and Refactoring Routers
5) Authentication With Cookies
6) Adding User to BlogPost

JS Review -
1) Constructors And Prototypes
2) Consuming Promises

# Setting Up Express Server

- Create a directory called `blog_on_express` -> Express Docs https://expressjs.com/en/starter/installing.html
- Run `npm init`
- The `package-lock.json` file will make sure dependencies installed are locked at a particular version
- cd into `blog_on_express` and run `npm install express`
- Add gitignore `curl https://www.gitignore.io/api/node,linux,macos,windows >> .gitignore`
- the "main" key in package.json should match your main javascript file (root javascript file)

# Install nodemon

Note:  npm i --save package_name || npm i package_name || npm install package_name. are all the same
only npm i --save-dev <package_name> needs the "--save-dev" flag
Nodemon is just a package to restart our application everytime we make changes so we don't have to manually do it.
- run `npm install --save-dev nodemon`

# Setup KnexJS 

- We need to install `knex` and `pg`
- run `npm install knex pg`
- KnexJS is a SQL query builder. It lets us build SQL with Javascript
- PG is a PostgreSQL Database Client. A database is a server it needs a client to speak to it, the pg package does that.
- Make sure you initialize a knexfile to hold all database config
- run `knex init`

# Creating Migration

- run the command `knex migrate:make <migration_name>` to create a new migration file
- the `up` function should contain code to create a change to the database
- the `down` function should undo the `up` function
- to run a migration use the command `knex migrate:latest`

# User Sign In Page (User Authentication)
1) Setup templating using EJS https://ejs.co/
- install EJS by runing `npm install ejs`
- setup EJS & setup Express's view engine
- install body parser middleware `npm install body-parser`
- body parser will parse form inputs from a POST request and turn it into a really nice object attatched to req.body
- install methodoverride middleware `npm install method-override`
- method override will look for a input on every POST request called _method. If this input is available it will replace the current HTTP Verb with the value of that input

# CRUD Users
Create
- A Form to create Users -> GET "users/new"
- A RequestHandler to save a User in the database -> POST "/users"
Read
- A View to list ALL users -> GET "/users"
- A View to show an individual user -> GET "/users/:id"
Update
- A View to show current user -> GET "/users/:id/edit"
- A RequestHandler to update a user -> PATCH "/users/:id"
Destroy
- A RequestHandler to delete a user -> DELETE "/users/:id"

# static assets

