# [Lab] Hash of Information
# Create a method, get_user_info, that when called asks the user for the following personal information: first name, last name, city of birth and age. Then, return that information as a hash.

# get_user_info 
# Prompts the user a bunch of times for their information 
# => { first_name: "Jon", last_name: "Snow", city_of_birth: "Winterfell", age: 26 }




# get_user_info = gets.chomp


def get_user_info()
    user = {
        first_name: "Jon",
        last_name: "Snow",
        city_of_birth: "Winterfell",
        age: 26
    }
    for key in user.each_key do
        puts "#{key}"
        user[key] = gets.chomp
    end
    user
end
p get_user_info()
