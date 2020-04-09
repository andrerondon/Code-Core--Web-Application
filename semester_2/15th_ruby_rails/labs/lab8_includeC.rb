# Write a code that takes user's input and then prints out "Yes it has C" if entered input contains the letter "C" (upper or lower case). And it prints "There is no C" if it doesn't.

puts "Typer your name and i'm going to do 'C' check!"
character = gets.chomp
# puts "#{character}".include? "C"                 
# puts "String".include? "ui"
count = 0

# if character.include? "C"
#     character += count
#  end

for i in character do
    if character.include? "C"
      puts "C"
    end
    
end


# puts count
# puts character