# We can declare arrays using square brackets
# items within an array can be any other type available in ruby
# all items are seperated by commas

# a = [[1, 2, 3], true, "Hello World", :bye]

# :bye -> this is a "symbol" (another type in ruby). It's basically an immutable string

# To select an item within an array we use square bracket notation and a index within the brackets

# a[0] -> [1, 2, 3]
# a[1] -> true

# puts(a)
# p a
# puts(a[0])
# p a[0]

# you can select relative to the end of an array using negative integers
# p a[-1] # returns :bye
# p a[-2] # returns "Hello World"


# Exercise: How to access "Hey" within the following array:
# b =  [[1,2,3],  true,  "Hey",  "Drew"]
# p b[2] ✓
# p b[-2] ✓

# Multi-dimensional Arrays (arrays within arrays):

# c = [[1,2,3], [4,5,6], [7,8,9]]
# p c[1] # [4,5,6]
# p c[1][1] # 5

# p c[2][2] # 9

# Adding Elements to an Array
# Ruby Documentation https://ruby-doc.org/core-2.2.0/Array.html

# .push(): appends a provided value to end of an array

# d = [1, 2, 3]
# d.push 4
# p d # [1, 2, 3, 4]

# Shovel Operator `<<`: shovel operator means "append" this will add an item to the end of a list like .push()

# e = [1, 2, 3, 4]
# e << 5 
# p e # [1, 2, 3, 4, 5]

# .include?: method to check if a array contains a value
# every method which ends in a question mark `?` will return a boolean value

# f = ['hello', 'world', 'sunny']
# p f.include?('world') # true
# p f.include?('WORLD') # false

# Exercise: Look for a method that will flatten a mutli-dimensional Array

# g = [ [1,2,3], [4,5,6], [7,8,9] ] => [1, 2, 3, 4, 5, 6, 7, 8, 9]
# g = [ [1,2,3], [4,5,6], [7,8,9] ]
# f = [ [1,2,3], [4,5,6], [7,8,9] ]
# # The two methods to turn a multi-dimensional Array to a single dimension/lower dimension is `flatten` and `flatten!`

# # Does not mutate
# p g.flatten # => [1, 2, 3, 4, 5, 6, 7, 8, 9]
# p g # => [ [1,2,3], [4,5,6], [7,8,9] ] 

# # Does mutate
# p f.flatten! # => [1, 2, 3, 4, 5, 6, 7, 8, 9]
# p f # => [1, 2, 3, 4, 5, 6, 7, 8, 9]

# # A lot of times ruby will provide 2 different sets of methods One of them will mutate and the other will not.
# g.flatten! # will mutate the orginal array `g`
# g.flatten # will not mutate the original array

# Let's take a 10 minute break. Come back at 10AM

# Exercise: Find a Array method which will remove an element from the start of an array.

# .shift will take an element from the start of an array

# h = [1, 2, 3, 4, 5, 6, 7, 8, 9]
# one = h.shift
# p h
# p one

# Exercise: Find a Array method that will get the length of an array

# .length
# .size

# p h.length
# p h.size

# # Exercise: Find me a method which will turn a String into an Array

# i = "Hello CodeCore Students"
# p i.split ' ' # => ["Hello", "CodeCore", "Students"]

# # Exercise: Convert an array to a string

# # .join will combine an arrays elements into a string

# p i.split(' ').join(' ')


# Swapping Array Elements
# Try doing the following:

# words = ["Hello", "CodeCore", "Students", "Today", "Is", "Very", "Sunny"]
# a = words[2], words[1], words[0] # => ["Students", "CodeCore", "Hello"]

# # ruby allows you to select a range of elements
# words[1, 3] = [1, 3, 4, 5, 6] # inserting this inside the range
# # 1 is the starting index
# # 3 is the amount of elements (range)
# p words


# Exercise: FizzBuzz
# Check FizzBuzz.rb

# Iterating through an Array

animals_array = ['dog', 'cat', 'bear', 'tiger', 'lion']

# Using for in
# for animal in animals_array do
#   puts animal
# end

# Common method for looping over an array is the .each

# ruby way of passing a block 😍 (ruby prefers this way)
# animals_array.each do |animal, i|
#   puts animal
#   puts i
# end

# pragmatic way of passing a block 🙅🏻‍♂️
# animals_array.each { |animal|
#   puts animal
# }

# if you wanted the index with .each you can chain it with .with_index
# animals_array.each.with_index do |animal, index|
#   puts animal
#   puts index
# end

# # .map

# mapped_animals_array = animals_array.map.with_index do |animal, index|
#   animal * (index + 1)
# end

# p mapped_animals_array


# iterating through a mutli-dimensional array

# mutli_dimensional_array = [ [1,2,3], [4,5,6], [7,8,9] ]

# # prints 1 2 3 4 5 6 7 8 9
# mutli_dimensional_array.each do |sub_array|
#   sub_array.each do |val|
#     p val
#   end
# end

# # also prints 1 2 3 4 5 6 7 8 9
# mutli_dimensional_array.flatten.each do |val|
#   p val
# end

# let's take a quick break come back at 11AM

# Let's write a program which will accept names from a user until they provide "exit"
# when "exit" is provided just print out the names in an array

# program start ---
names = []

while name = gets.chomp
  p name
  if name == 'exit'
    break
  else
    names << name
  end
end

p names

# program end ---