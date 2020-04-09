# Write a method that takes a number N and then draw a triangle that has N number of letter O on each of its sides

#Simple ASCII Art

puts "What character do you want to make the pyramid out of?"
character = gets.chomp

puts "How many rows of #{character}'s do you want?"
row_count = gets.chomp.to_i

character_count = 1
width = 100

row_count.times do
	puts (character * character_count).center(width)     
	character_count += 2
end

# puts "Let's make the pyramid with O?"
#   #INPUT

#     puts "Enter height of triangles:"

#     height  = gets.chomp

#     puts "Enter number of traingles per row:"
#     columns = gets.chomp

#     puts "Enter number of rows:"
    
#     rows    = gets.chomp
  
#   #PROCESS
#   rows.times do |row|
#     if row.even?
#         # Computers iterate starting from 0
#         # thus this part is actually for odd rows (#0, #2,…)
#       length = 2*height-1
#         # The number of '*'s for the longest line
#       (0...height).each do |line|
#           # For convention. Equivalent to (from row 1 to row last) - 1
#         puts( (' '*(line+1) + '*'*length + ' '*line) * columns )
#           # <line> + 1 ' 's, <length> '*'s, and <line> ' 's
#           #   +1 for an extra padding on the left
#         length -= 2
#           # each line has 1 less ' ' on each end and
#           #   2 less '*' in the center.
#       end
#     else
#         # thus this part is for even rows (#1, #3,…)
#         # All is the same but this is the vertically flipped &
#         #   character-swapped version for odd rows.
#         # *****     *     *       *** *****
#         #  ***  ->  **   ***  ->  **   ***
#         #   *       *** *****     *     *
#       length = 1
#       (0...height).reverse_each do |line|
#         puts( ('*'*(line+1) + ' '*length + '*'*line) * columns )
#         length += 2
#       end
#     end
#   end
  
#   # 🙂
#   true


puts " Enter a number: "
number = gets.to_i
puts "0" * number
count = 0
while count < number - 2
  print "0"
  print " " * (count - 2)
  puts "0"
  count += 1
end
puts "0" * number

puts " Enter a number: "
number = gets.to_i
--> puts "*" * number <--