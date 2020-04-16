# [Lab] Implement Pluck Method
# Implement a `pluck` method, which takes an array of hashes and a key name, and returns an array containing the values for each named key in the hash.
# If an hash is missing the property, you should just leave it as nil in the output array.

# For example:

def pluck()
    
    for key in user.each_key do
        puts "#{key}"
        user[key] = gets.chomp
    end
    user
end
p pluck()

pluck([{a:1}, {a:2}], :a) ## returns [1,2]
pluck([{b:2}, {a:4, b:4}, {a:1}, {c:4}], :a) ## returns [nil, 4, 1, nil]
pluck([{b:2}, {a:4, b:4}, {a:1}, {c:4}], :b) ## returns [2,4,nil,nil]
