# Animals
# Build a class Animal that has two methods: "eat" that prints "I'm eating" and "walk" that prints "I'm walking". Make the class have two attribute accessors: name and color. Make the initialize method set those two variables.

# Now build a class called Dog that inherits from the Animal class. Add a new method to this class called bark that returns woof. Override the eat methods and make it print whatever the Animal class eat method prints and then print "Bones are yummy!".

# Now build a class called Cat that inherits from the Animal class. Override the eat methods and make it print "Fish is yummy!".

require_relative './animal'

class Cat < Animal

    def eat
        p super
        "Fish is ymmy"
    end
 
end
  
c = Cat.new("im cat", "any")
p c.eat
