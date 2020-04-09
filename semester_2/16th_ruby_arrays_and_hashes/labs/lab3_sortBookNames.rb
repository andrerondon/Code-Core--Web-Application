# Sort Book Names
# Write some code that keeps asking the user for book names until the user enters "exit". After typing "exit" the program should display all the entered book names sorted and have the book names capitalized.

p "What's the book name?"
booknames = []

while names = gets.chomp
  p "What's the book name?"
  if names == 'exit'
    break
  else
    booknames << names.capitalize
  end
end


p booknames.sort


#######  Brandon Solution


names = []
while name = gets.chomp
  break if name == 'exit'
  names << name.capitalize
end
names.sort!
p names
