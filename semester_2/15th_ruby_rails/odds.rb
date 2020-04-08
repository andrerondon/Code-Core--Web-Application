x = 1
while x <= 60
    if x % 2 > 0
        puts x 
    end
    x += 1
end


# solution 2
puts ">>>>>>>>>>>"

x = 1
while x <= 60
    puts x if x.odd? 
    x += 1
end