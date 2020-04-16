# require 'pry'
require_relative './cookies.rb'
require_relative './oreo.rb'

class CookieBag
  attr_reader :cookies
  attr_reader :capacity

  def initialize(cookies=[], capacity=5)
    @cookies = cookies
    @@capacity = capacity
  end

  def add(cookie)
    # object.is_a? is used to check if a object is an instance of a given class. Returns a boolean
    return puts("Must be a cookie") unless cookie.is_a? Cookie

    if @cookies.length >= @@capacity
      return puts "No Room Left"
    end

    @cookies << cookie
  end
end

p "================================================================================="
cb1 = CookieBag.new([], 1) # capacity of 1
cb5 = CookieBag.new() # capacity of 5

cb1.add Cookie.new(10,10)
cb1.add Cookie.new(10,10)
cb1.add Cookie.new(10,10)


# binding.pry