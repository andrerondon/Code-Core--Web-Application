require 'pry'
require_relative './cookies.rb'

# Inheritance is used to extend functionality of a class
# The class being inherited is refered to as the "superclass"
class Oreo < Cookie
  attr_accessor :filling_type

  def initialize(sugar, flour, filling_type = 'vanilla')
    @filling_type = filling_type
    # special keyword super which is used to call the method in the method in the superclass
    super(sugar, flour)
  end
end

oreo = Oreo.new(10,10)
binding.pry
