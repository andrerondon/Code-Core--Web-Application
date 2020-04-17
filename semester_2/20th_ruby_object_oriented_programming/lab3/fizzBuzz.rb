# FizzBuzz Class
# Build a class called FizzBuzz that takes two numbers as parameters and then have a method called run that returns a fizzbuzz array (numbers from 1 to 100, numbers divisible by the first number replaced by 'fizz' and numbers divisible by the second number replaced by 'buzz' and numbers divisible by both replaced by 'fizzbuzz'). For instance this code should work with your class:





class FizzBuzz
    attr_accessor :first_number, :second_number
    
    def initialize(first_number=3, second_number=5)
        @arr = []
        @first_number = first_number
        @second_number = second_number
    end
  
    def run
        str = ''
        1.upto 100 do |num|
            if num % @first_number == 0 
                str << 'fizz '
            end
            if num % @second_number == 0 
                str << 'buzz'
            end
            if str.length == 0 
                str << num.to_s
            end
        end
    @arr << str 
    end 
end

fb = FizzBuzz.new(2, 5)
p fb.run # returns an array like: [1, 2, 'fizz', 4, 'buzz, ...
# Now modify your solution to make it flexible and be able to change the numbers after you create the object. For instance:

fb = FizzBuzz.new(3,5)
p fb.run # returns an array: [1, 2, 'fizz', 4, 'buzz, ...
fb.first_number = 2
fb.second_number = 3
fb.run # returns an array: [1, 'fizz', 'buzz', 'fizz', 5, 'fizzbuzz'...



######################################### brandon solution ###############


# class FizzBuzz
#     attr_accessor :first_number, :second_number
 
#     def initialize(first_number = 3, second_number = 5)
#       @arr = []
#       @first_number = first_number
#       @second_number = second_number
#     end
 
#     def run
#       1.upto 100 do |num|
#         str = ''
#         if divisible_by_number_1(num)
#           str += 'fizz'
#         end
#         if divisible_by_number_2(num)
#           str += 'buzz'
#         end
#         if str.length == 0
#           str += num.to_s
#         end
#         @arr << str
#       end
#       # should return an array
#       @arr
#     end
 
#     private
 
#     def divisible_by_number_1(num)
#       cleanly_divisible(num, @first_number)
#     end
 
#     def divisible_by_number_2(num)
#       cleanly_divisible(num, @second_number)
#     end
 
#     def cleanly_divisible(num_1, num_2)
#       num_1 % num_2 == 0
#     end
#   end
 
#   fb = FizzBuzz.new(2, 5)
#   p fb.run # returns an array: [1, 2, 'fizz', 4, 'buzz, ...
#   fb.first_number = 2
#   fb.second_number = 3
#   p fb.run # returns an array: [1, 'fizz', 'buzz', 'fizz', 5, 'fizzbuz