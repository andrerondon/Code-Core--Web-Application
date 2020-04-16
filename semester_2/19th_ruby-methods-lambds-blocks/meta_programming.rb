# Meta Programming
# Programming techniques that perform operations
# on the running code itself

# define_method
# def one 
#     1 
# end 

# def two 
#     2 
# end

# puts one() # => 1
# puts two() # => 2

numbers = {
    1 => "one",
    2 => "two",
    3 => "three",
    4 => "four"
}

numbers.each do |number, number_name|
    # when using the define_method, the 
    # first argument is the name of the method
    # being defined. The body of the method is the 
    # block that is passed to define_method
    define_method(number_name) do 
        number
    end
end

puts one() # => 1
puts two() # => 2
puts three() # => 3 
puts four() # => 4

define_method('printMe') do 
    puts "Hello world"
end

printMe()

# eval
# the eval method takes a string as an argument 
# and will attempt to evaluate as ruby code.
# THIS METHOD IS VERY DANGEROUS. AVOID USING IT 
# AT WORK WHEREVER POSSIBLE.
eval("1 + 2 * 9") # => 19
eval("two + two + four") # => 8
# Note: two and four are referring to the methods 
# we definied with define_method above.

