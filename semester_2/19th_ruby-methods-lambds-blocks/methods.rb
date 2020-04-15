# Ruby Methods

# Demo Five by five

# Define a method with the 'def' keyword
# Methods that return a boolean generally their name end with
# # '?' (convention, not enforced by the language)

def by_five? num 
    # Returning is implicit. The last expression
    # in a method's body will always be returned unless
    # you explicitly call return above
    num % 5 == 0
end

# To call a method, you can use or not use brackets
by_five?(5) # => true
by_five? 6 # => false

# You must always call a method with all of its 
# required arguments.
# by_five?
# ArgumentError (wrong number of arguments (given 0, expected 1))


# Demo: what is it

def what_is_it(thing)
    if [String, Array, Integer].include? (thing.class)
        thing.class.to_s
    else
        "Something Else"
    end
end

what_is_it(1.2)

# Using Return 
def my_method(a, b)
    return a * b 
    # As in JavaScript, the lines following 
    # return are ignored
    a + b  
end

my_method(10, 20) # => 200
my_method 11, 21 # => 231

# Optional/default arguments

def multiply(a = 1, b)
    a * b 
end

multiply(2) # => 2
multiply(2, 3) # => 6

# Variadic Methods
# A method that can take any number of arguments

def my_args(first, *args, last)
    # Use the splat (i.e. *) in front of an 
    # argument to take in any number of args
    # into an array (like gather in JS i.e. ...).
    # Unlike gather, it can be placed at the beginning,
    # the middle, or the end of a list of args
    puts("first: #{first}")
    puts("args: #{args}")
    puts("last: #{last}")
end

# my_args("my first arg", 1, 2, "middle", 4, 5, "last")

# product method

def product(first, *nums)
    result = first 
    puts "first: #{first}"
    puts "nums: #{nums}"
    nums.each { |num| result *= num }
    result 
end

# puts product(1, 3, 4, 5, 6)


def product2(*nums)
    # reduce can take an optional argument for the 
    # initial value. if not given, it will take 
    # the first list element as the initial value
    nums.reduce(1) do |accumulator, num|
        # In reduce, on the first iteration
        # accumulator is the initial value,
        # 1 in this case
        accumulator * num
        # In the following iterations, accumulator
        # will be the result of the previous iteration
    end
end

product2(1, 3, 4, 5, 6) # => 360
# Splat (*) can also be used to spread an array 
# of elements of arguments to a method call
product2(*[1, 3, 4, 5, 6]) # => 360
array = [1, 3, 4, 5, 6]
product2(*array) # => 360

def find_min(*nums)
    nums.reduce do |acc, currentValue|
        if acc > currentValue
            currentValue
        else 
            acc
        end
    end
end

find_min(20, 23, 13, 16, 3, 25)

# Blocks

# All methods can take a block as an argument and
# only one block at a time
def my_method2
    puts "We are in the method"
    yield
end

# my_method2 { puts "The block is called" }

def my_method3(x)
    puts "Before Block"
    # To execute a block that's been passed to a
    # method, use the "yield" keyword. This is 
    # like calling the block. 
    # yield will return the last expression from the 
    # block
    yield_return = yield 
    puts "Yielded block returned: #{yield_return}"
    puts "After Block"
end

# my_method3(5) { "The block" }

# Yield can be used multiple times
def print_twice 
    yield 
    yield 
end 

# print_twice { puts "Hello" }
# "Hello"
# "Hello"

# If you try to yield without a block you will
# get a no block given error

# print_twice # LocalJumpError:  no block given (yield)

# You can check if a block has been passed with 
# the block_given? method

def do_something_with_block 
    return "no block given" unless block_given?
    yield 
end

do_something_with_block
# "no block given"
do_something_with_block { "Hello World" }
# "Hello World" 

# Exercise: Implementing each 
def each (arr)
    # arr = [2, 3, 4, 5]
    # val will be 2 in the first iteration and so on...
    for val in arr 
        # we are calling block ({ |x| x * 10 }) with val
        result = yield(val)
        puts "result: #{result}"
    end
end

each([2, 3, 4, 5]) { |x| x * 10 }
