# Square Array of Arrays
# Given an array of arrays:

# 1 | array = [[2,3,4], [5,6,7], [6,7,8]]


# Write a piece of code that will take that array and give back an array of arrays with each element multiplied by itself so you will get back:

# 1 | [[4, 9, 16], [25, 36, 49], [36, 49, 64]]


array = [[2,3,4], [5,6,7], [6,7,8]]

finalArr = []

array.map do |val|
    val.map do |val2|
    finalArr << val2 * val2
  end
end

p finalArr

# array = [[2,3,4], [5,6,7], [6,7,8]]

# finalArr = []

# while array do val
#     finalArr << val * val
# end

# p finalArr


# GURU SOLUTION

array = [[2,3,4], [5,6,7], [6,7,8]]
squared_array = array.map do | sub_array |
  sub_array.map do |n|
    n ** 2
  end
end
p squared_array
