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