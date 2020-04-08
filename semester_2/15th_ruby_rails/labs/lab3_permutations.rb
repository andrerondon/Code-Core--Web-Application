# Ask the user for for three inputs and then print out all the possible permutations for the user inputs. For instance if the users inputs `a`, `b` and `c` you should print out:


puts "Please provide 3 inputs?"

answer_1 = gets.chomp
answer_2 = gets.chomp
answer_3 = gets.chomp


for i in answer_1..answer_3
    for j in answer_1..answer_3
        for k in answer_1..answer_3
            puts "#{i} #{j} #{k}"
        end
    end
end


# Solution 2


puts "please give me a letter"
first = gets.chomp

puts "please give me another letter"
second = gets.chomp

puts "please give me one last letter"
third = gets.chomp

array = [first, second, third]
output = array.repeated_permutation(3).to_a
for each in output
    print each.join + "\n"
end



