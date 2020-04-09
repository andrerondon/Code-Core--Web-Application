# Given an array of words, generate an array of numbers that contains the lengths of each word in the first array in the same order.

words = ["houses", "pets", "streets", "lakes", "mountains"]

word_count = []
words.each do |word|
  word_count << word.length
end

p word_count

p "-----------------------"
# [6, 4, 7, 5, 9] 🥳

# hash table version

cache = {}

words.each do |word|
  cache[word] = word.length
end

p cache
