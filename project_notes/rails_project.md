### To create a new rails project in entirety:

    rails new <file_name> -d postgresql -T

### If webpacker is not installed:

    rails webpacker:install

### To start the rails server:

    rails s

### To create the database for your rails project (database is named after project):

    rails db:create

### To add other gems into your project for development:

Add them into 'group :development do' method inside of Gemfile within the project,
format them like `gem 'gem-name'`.
Then, once added the required gems, run the following in terminal:

    bundle install

### To create a welcome controller:

    rails g controller "welcome"

    rails g controller answers --skip-template-engine


    rails g controller session new create   obs: this will creat controller for user


### To enter the rails repl in terminal:

    rails c

### To generate models:

    rails g model <model-name> <table-field:type> <table-field:type>
### EG:
    "rails g model "project" title:string description:text due_date:date"

    "rails generate model ad name:string description:text price:decimal seller_id:integer email:string img_url:string"

    rails g model "reviews" "body:text" "product:references"  obs: that generate mode views belongs to product model... table belongs to table

    rails g migration change_products - THIS WILL ONLY GENERATE THE MIGRATION

Rails will auto generate timestaps.
Running the model will also generate a migration, with the table fields in the migration folder.
The table name will be the plural of the model name you chose.

### To migrate latest/remaining migrations:

    rails db:migrate

This created a schema inside of the db folder.

#### To check the status of migrations:

    rails db:migrate:status

### To reverse the last migration:

    rails db:rollback

    rails db:reset   // for reset DB

    rails db:drop // to drop DB

### To update fields to existing tables

    rails g migration <name>

#### To add:

    add_column :table_name, :table_field, :data_type

##### Example:

     add_column :questions, :view_count, :integer

#### To remove:

    remove_column :table_name, :table_field, :data_type

##### Example:

    ex. remove_column :questions, :like_count, :integer

### To install faker:

    gem install faker

https://github.com/faker-ruby/faker




or add `gem 'faker'` in your gem file, then run `bundle install`

This allows you to create mock seed data for development purposes.

### To run a seed file:

    rails db:seed



### gem do bcrypt
just commentout the gem bcrypt in gem files

### this will drop creat migrate and run the seed
rails db:drop db:create db:migrate db:seed


git checkout w_r_api
git pull origin w_r_api