print "Enter the year of your car: "
year = gets.to_i

if year > 2020 && year < 2050
    puts "Future"
elsif year > 2015
    puts "New"
elsif year > 2000
    puts "Old"
else
    puts "Very Old"
end

# || operator
true || true # true
true || false # true
false || true # true
false || false # false

# && operator
true && true # true
true && false # false
false && true # false
false && false # false