# require('pry') # a gem that allows us to use a ruby REPL

# We can define a class using the `class` keyword

# classes are a core part of the ruby language
# they're blueprints for creating objects
# We define a class using the `class` keyword
# by convention the name of classes are CamelCase
# It's best practice to only have one class per file.
class Cookie
  # defining a global variable you use the $ symbol
  # global variables are accessible anywhere
  $greeting = 'Hello World'

  attr_reader :flour # this method creates the @flour instance variable and adds the getter automatically
  attr_writer :flour # creates the setter

  # attr_accessor :sugar # creates the @sugar instance variable and both the getter and setter methods.

  # class method
  # class methods can be called on the Class itself.
  # trying to call a class method through in a instance will return an error
  # we can define a class method by creating a method prepended with self.
  def self.info
    # inside of class methods self refers to the class
    p self
    "Cookies are an essential part of a balanced diet"
  end

  # special method initialize. Gets called everytime you create an instance of the Class. Very similar to the constructor function in Javascript classes. 
  def initialize(sugar=10, flour=15)
    # a Class variable is defined using @@ symbools
    # Every instance of this class and the class itself will  have access to this class varaible.
    # use it to share data between instances of a class.
    @@color = 'Brown'
    @sugar = sugar
    @flour = flour
    p "created a 🍪"
    p eat
  end

  # instance methods
  # objects will have access to these methods
  def bake_n_eat
    # we can only call private methods from methods within the class
    # trying to call a private method on an instance will return an error
    p bake
    p eat
  end

  def eat
    # inside of a instance method self refers to the instance
    p self
    "Nom Nom Nom!"
  end

  def details
    p "This cookie has #{@sugar} sugar and #{@flour} flour. The cookie's color is #{@@color}"
  end

  # getter
  # attr_reader
  def sugar
    @sugar
  end

  # setter
  # attr_writer
  # you can call instance.sugar=500 OR instance.sugar = 500 to change the instance variable
  def sugar=(new_sugar)
    @sugar = new_sugar
  end

  # changing the class variable will change it for all instances.
  def set_color=(new_color)
    @@color = new_color
  end
  # private methods are used to abstract the logic of how a feature works from how to use it
  private

  def bake
    "baking cookie"
  end

end

# initialize a instance of a class
# c is an object created from the Cookie class
c = Cookie.new

# the .class() method is used get the class of an object
# everything in ruby is a object of a class
p c.class
# p [].class
# p "".class

c.eat # returns "Nom NOm Nom"

# c.bake # returns an error because it's a private method.
# private methods can only be called within other methods of the class


# Class methods
Cookie.info # returns "Cookies are an essential part of a balanced diet"







# binding.pry # tells pry to run
# type in quit to exit from REPL. OR ctrl-c
# if pry is not installed, use the command `gem install pry` to install it. If you need superuser 
# permission `sudo gem install pry`
