# To out put to the terminal like 'console.log' use print:
print("Hello World \n")
# print doesn't add a new line (i.e \n)

puts("Goodbye World")
# puts does add a new line (i.e \n)
p("hello world")
# Prints a value how ruby sees it. Useful for debugging 
# Similar to 'console.dir'

# This is a comment in Ruby

=begin
 This is a multiline 
 comment 
 in Ruby   
=end

# Most people
# will just 
# do this

print "Hello World \n" # inline comment work too

# Variables

# Creating variables doesn't require a keyword

a = 1
b = a * 10

a1 = 12

# 1a = 12 # this will give an error

# Ruby convention for variable names is snake_case
first_name = "Hindreen"

# if you start a variable with a capital letter
# it is considered a constant.
# Constants in ruby can be changed but, ruby will give
# you a warning. Convention is to use all caps 
# for naming Constants

MAX_PASSWORD_ATTEMPTS = 4

# To know the type of an object/value, use the ".class" method
1.class # => Integer
3.14.class # => Float
"my string".class # => String

# Strings 
"I'm a string"
'I\'m a string'

# You can use String Interpolation only with double 
# quote. Strings defined with single quotes are 
# considered litral strings

"#{1 + 10} is equal to #{9 + 2}"

name = "Hindreen"
puts "Hello #{name}"

# Ask a use for their name then print their name capitalized
puts "What is your name?"
name = gets.chomp   # gets.chomp to ask for user type 
puts name.capitalize