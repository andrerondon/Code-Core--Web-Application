print "Give me a number: "
number_1 = gets.to_f # no need for .chomp because .to_f will ignore the newline

print "Give me another number: "
number_2 = gets.to_f

result = number_1 * number_2 

print "Multiplication result is #{result}"