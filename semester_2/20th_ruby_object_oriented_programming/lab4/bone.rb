# Dogs & Bones
# Make two classes dog and bones. The dog class must have an initialize method that takes dog's colour and type. The bone must have an initialize method that assigns a size for the bone.

# The dog class must have a give method that takes a bone object and adds it to an array of bones for the dog. The dog can take a maximum of three bones so if you give it more than three it will will print, I have too many bones.

# The dog class must have an eat bone method so that when you call it it removes a bone from the array of bones and prints "yummy! I ate 'big' bone" the 'big' part comes from the size attribute of bone. Include the module in your classes and use the `random_number` method if it makes sense.




class Bone
  attr_reader :size
  def initialize(size)
    @size = size
  end
end 