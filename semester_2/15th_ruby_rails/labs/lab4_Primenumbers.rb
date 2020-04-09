# Prime numbers
# Ask the user for a number x and then print the first x prime numbers.

#  Prime numbers are divisible only by 1 and themselves.

puts "How many prime numbers do you want?"
numberImput = gets.to_i
puts "_______"
number = 2
count = 1

while true
    if number == 2 || number == 3 || number == 5 || number == 7
    break if numberImput < 2
    if number % 2 != 0 && number % 3 !=0 && number % 5 !=0
        puts number
        count += 1
    end
    break if count == numberImput
    number += 1
end