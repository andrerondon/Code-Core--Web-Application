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

# can also do:
puts name.upcase
puts name.downcase
puts name.swapcase
puts name.reverse

# Write a peace of code to prompt users for their
# first name and last name and then print full name

puts "What is your first name?"
first_name = gets.chomp
puts "What is your last name?"
last_name = gets.chomp 
puts "Your full name is #{first_name} #{last_name}"

# To remove duplicate neighboring characters in 
# a string, we can use .squeeze

"hellllllo".squeeze
# => helo

# Numbers
# Integers and Floats
1
20
200
123_234 # In ruby, '_' is ignore in numbers

# Converting between classes
1.to_f # => 1.0
2.5.to_i # => 2

# operations
1 + 1 
1 - 1
1 / 1
1 * 1
1 % 1
1 ** 3 # 1 ^ 3 = 1 * 1 * 1

# Flow control
if true 
    puts "When condition is true"
end

if false 
    puts "When condition is false"
else
    puts "The default condition with else"
end

# In ruby you can do single line conditional
# but write the if at the end of the line

puts "It's true" if true 
puts "It's false" if false

temp = gets.to_i

puts "It's cold" if temp <= 1

# equivalent
if temp <= 1
    puts "It's cold"
end

puts "It is cold" unless temp > 1 # print "It is cold" in all cases except when temp is greater than 1
# equivalent
unless temp > 1
    puts "It is cold"
end

if 10 != 20
    puts "not equal"
else
    false
end

# All conditionals are expressions. This means that
# if blocks return a value. This allows us to assign
# if blocks to variables or put it as the argument 
# to a method call

returned_value_from_if = if 1 != 2
    "not equal"
else 
    "equal"
end

# Loops

# while loop

x = 1

while x <= 100
    puts x 
    x += 1 # x++ won't work in ruby
end

# print the numbers 1 to 50 using while loop
count = 1
while count <= 50
    print "#{count} "
    count += 1
end


print "How many times should I repeat? "
number = gets.to_i 
i = 0
while i < number 
    puts "Hello World"
    i += 1
end


# loop

x = 1
loop do 
    puts x 
    x += 1
    break if x == 10
end

# for loop

num = gets.to_i
# 1..100 will cover the range inclusively meaning it
# will include 100 
# 1...100 will not include 100.
for number in 1..num
    puts number 
end
