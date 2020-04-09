# [Lab] Letter combos
# Given a string such as "abcd". Generate an array that gives every 2-letter combination that are adjacent so your code will generate:

# ["ab", "bc", "cd"]

# Given a string 123456: ["12", "23", "34", "45", "56"]

letter = ["abcd"]

letter_combo = []

letter.each.with_index do |combo, i|
    letter_combo << "#{combo}#{letter[i+1]}"
end

p letter_combo

string = 'abcd'
arr = []

string.chars.each.with_index do |char, i|
  arr << "#{char}#{string[i+1]}"
end

p arr

