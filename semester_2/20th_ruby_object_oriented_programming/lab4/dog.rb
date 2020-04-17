# Dogs & Bones
# Make two classes dog and bones. The dog class must have an initialize method that takes dog's colour and type. The bone must have an initialize method that assigns a size for the bone.

# The dog class must have a give method that takes a bone object and adds it to an array of bones for the dog. The dog can take a maximum of three bones so if you give it more than three it will will print, I have too many bones.

# The dog class must have an eat bone method so that when you call it it removes a bone from the array of bones and prints "yummy! I ate 'big' bone" the 'big' part comes from the size attribute of bone. Include the module in your classes and use the `random_number` method if it makes sense.


require_relative('./bone.rb')


class Dog

  def initialize(name, color, type)
    @name = name
    @color = @color
    @max_bone_size = 3
    @type = type
    @bones = []
  end

  def fetch(bone)
    if !(bone.is_a? Bone)
      return puts "Dog can only fetch Bones but recieved #{bone.class}"
    end
    if @bones.length >= @max_bone_size
      return puts "I have too many bones"
    end
    @bones << bone
  end

  def eat
    # super
    # this method `eat` overrides the `eat` inside of the Animal class.
    # calling super will call the Animal class's eat method
    "Bones is yummy!"
    bone = @bones.shift
    if bone
      p "yummy! I ate #{bone.size} bone"
      p "Bones is yummy!"
    else
      p "No more bones left 😭"
    end
  end
end

d = Dog.new('charlie', 'brown', 'german sheperd')
b = Bone.new('large')

p d.fetch b
p d.eat 
p d.eat 
p d.fetch b
p d.fetch b
p d.eat 