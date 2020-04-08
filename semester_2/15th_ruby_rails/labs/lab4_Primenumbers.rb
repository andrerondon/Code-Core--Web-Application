# print "Give me a number: "
# number = gets.to_f 

# while x <= number 
#     puts x if x.odd? 
#     x += 1
# end
# print "The prime numbers are #{i}"

puts "How many prime numbers do you want?"
numberImput = gets.to_i
puts "_______"
number = 2
count = 1

while true
    puts 2 if number == 2 || number == 2 || number == 5
    break if numberImput < 2
    if number % 2 != 0 && number % 3 !=0 && number % 5 !=0
        puts number
        count += 1
    end
    break if count == numberImput
    number += 1
end