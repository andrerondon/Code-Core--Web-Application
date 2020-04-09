# Find The Repeated Number
# You are given an array with numbers between 1 and 1,000,000. One integer is in the array twice. How can you determine which one? Can you think of a way to do it using little extra memory?

# Solve it in two ways: one using hashes and one without.

# arr = Array(1..1000)
# p[888] = 23

# def repeated_num( arr )
#     previous_values = {}
#     for i in 0...arr.length
#         if (previous_values[arr[i]] != nil)
#             return previous_values[arr[i]]
#         else
#            previous_values[arr[i]] = arr[i]
#         end
#     end       


# timal space complexity solution 

a = Array(1..1000) # creates an array of size 5000 that contains elements 1 to 5000
a[50] = 4 #  duplicate number 23 in postion 4500
# duplicate searching code:
a.sort!
a.each.with_index do |num, i|
  if num == a[i + 1]
    p "FOUND"
    puts num
    break
  end
end


