# Ruby Hashes

# Hashes are a dictory of key value pairs. A lot like JavaScript Objects
# You define them using curly braces {}
# key's and values are seperated by a hash rocket =>
# key value pairs are seprated by commas

# me = {
#   "name" => "brandon",
#   "place" => "burnaby",
#   "company" => "CodeCore"
# }

# # Accessing Values from a hash

# # We can select properties/values using square bracket notation + key
# p me["name"] # "brandon"
# # p me[name] # breaks
# p me.name # breaks. Only methods use dot syntax in ruby


# Exercises -----------------------

movie_with_directors = {
  "Forrest Gump" => "Robert Zemeckis",
  "The Matrix" => "The Watchowskis",
  "Pulp Fiction" => "Quentin Tarantino",
  "No Country for Old Men" => "The Coen Brothers"
}

# Exercise 1: Find a method which will return all the keys of a hash

p movie_with_directors.keys
# ["Forrest Gump", "The Matrix", "Pulp Fiction", "No Country for Old Men"]

# Exercise 2: Find a method which will return all the values of a hash

p movie_with_directors.values
# ["Robert Zemeckis", "The Watchowskis", "Quentin Tarantino", "The Coen Brothers"]

# built in iterators for hashes .each_key && .each_value

movie_with_directors.each_key do |key|
  p key
end

movie_with_directors.each_value do |val|
  p val
end

movie_with_directors.each do |key, val|
  p "#{key} has the value of #{val}"
end

# Deeper dive into keys of hashes

apple = {
  "type" => "fruit",
  "seed_count" => 25,
  "sugar" => 10,
  0 => "this is the key of integer 0",
  "0" => "this is the key of STRING 0",
  :this_is_a_symbol => "value of this symbol",
  :type => "this is the value of symbol type"
}

# p apple[0]
# p apple["0"]
# p apple[:this_is_a_symbol]
# p apple[:type]

# building hash using symbols as keys
apple_with_symbols = {
  :type => "fruit",
  :seed_count => 25
}

# p apple_with_symbols[:type]
# p apple_with_symbols[:seed_count]

# building hashes with symbols as keys after the new syntax sugar was added. (I think the version was 2.3?)
apple_with_symbols_new_syntax = {
  type: "fruit",
  seed_count: 25
}

# even though symbols are immutable it does not mean the value assigned to the symbol is not.
# so you can overwite a value of a key
apple_with_symbols_new_syntax[:type] = "not fruit"
p apple_with_symbols_new_syntax[:type] # "not fruit"

# To
p apple_with_symbols_new_syntax[:type]
p apple_with_symbols_new_syntax[:seed_count]

# Symbols
# Another Class/Object in Ruby very similar to Strings. 
# The only difference is Symbols are immutable

# .object_id will return the location of where an object its in memory
# everytime you create a new string: a new string is added to a place in memory
p "string".object_id 
p "string".object_id
p "string".object_id
p "string".object_id
p "string".object_id
p "string".object_id

# once a symbol is created it will sit in a special place in memory. All other refereces/creations of the same symbol will reference that special place in memory
p :a.object_id
p :a.object_id
p :a.object_id
p :a.object_id
