# [Lab] Hash of Information
# Ask the user for personal information: first name, last name, city of birth and age. Then store that information in a hash. After that loop through the hash and display the results, for example:

# Your first name is Tam.
# Capitalize the inputs from the user if they are capitalizable.

user = {
    first_name:'',
    last_name:'',
    birth_city:'',
    age:''
}

    for key in user.each_key do
    puts "#{key}"
    user[key] = gets.chomp
    end
    p "your name is #{ user[:first_name]} #{user[:last_name]} age is #{user[:age]} belong to #{user[:birth_city]}"