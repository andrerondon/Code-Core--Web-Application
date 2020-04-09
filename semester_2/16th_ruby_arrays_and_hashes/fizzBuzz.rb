# Write a program that adds the numbers 1 to 100 to an array. If the number is a mutliple of 3 it should add "FIZZ" if the number is a multiple of 5 it should add "BUZZ" and if they're a multiple of both 3 and 5 it should add "FIZZBUZZ"

result = []

for num in 1..100 # loops 1 to 100 where num is the current number
  str = ''
  str << "FIZZ" if num % 3 == 0 # if the current num is divisible by 3 we append/.push/<< num into our str
  str << "BUZZ" if num % 5 == 0
  str << num.to_s if str.length <= 0 # if nothing was pushed into `str` then we push the current number into string
  result << str # at the end of each loop we add str to our array
end

p result
