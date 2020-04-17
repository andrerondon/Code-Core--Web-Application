# modules have 2 primary uses
# 1) it acts as a namespace
# 2)

# apple the company
module Computer
    class Apple
    end
  
    class Microsoft
    end
  end
  
  # apple the fruit
  module Fruit
    class Apple
    end
  end
  
  # macbook = Computer::Apple.new
  # surfacepro = Computer::Microsoft.new
  # p macbook.class
  # p surfacepro.class
  
  # apple_fruit = Fruit::Apple.new
  # p apple_fruit.class
  
  # ========== module as a mixin
  module HelperMethods
    def name_display
      name.squeeze(" ").capitalize
    end
  
    def hello_world
      "hello world"
    end
  end
  
  class User
    attr_accessor :name
    # include <module_name>
    # will load in all the methods of a module and all allow INSTANCES to use them as if they were instance methods
    include HelperMethods
  
    # include HelperMethods is sort of like having these instance methods defined in a different file
    # def name_display
    #   name.squeeze(" ").capitalize
    # end
  
    # def hello_world
    #   "hello world"
    # end
  end
  
  class Car
    attr_accessor :name
    # extend a module will turn all the methds of the module into CLASS methods
    extend HelperMethods
  end
  
  u = User.new
  u.name = 'brandon'
  p u.name_display
  
  c = Car.new
  p Car.hello_world
  