# [Lab] Most Common Letter
# Create a method, most_common_letter, that takes a string as an argument and returns the most common letter in the string. Ignore special characters and include numbers.

# Example usage:



def most_common_letter(str)
    counts = Hash.new(0)
    str.delete(" ").gsub(/[^a-zA-Z0-9\-]/,"").split("").each do |char|
            counts[char] += 1
    end
    counts.max_by{ |key,value| value }
end
p most_common_letter("T a$$$$$$$# d aAAAc g d g n" 