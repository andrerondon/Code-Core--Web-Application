# [Lab] Reverse engineer String's `reverse` method
# Ruby String class comes with a `reverse` method that reverses the order of characters in a string:

# 1 | greeting = "hello" 
# 2 | puts greeting.reverse # olleh 
# Write a code that gives the same outcome of the reverse method. You can use any method from the Array class


string = gets.chomp
str = []
for value in string.split ''
    str.unshift value
end

p str.join

####### other solution

greeting = 'hello'
greeting.length # gives us length of string
last_index = greeting.length - 1
reverse = []
last_index.downto(0) do |num|
  reverse << greeting[num]
end
p reverse.join


