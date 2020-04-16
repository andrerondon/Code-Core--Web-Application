require('pry')

# Add some public methods to our Car class
# drive, stop, and park -> should all just return some text

# Add some private methods to car
# pump_gas and ignite_engine -> should just return some text


# exercise: add instance variables to Car
# do it inside of the initialize method
# model, type, capacity
# also add the getter and setter methods for each instance variable

class Car
  attr_reader :type # creates the @type instance variable and the getter.
  attr_writer :type # creates the @type instance variable (if doesn't exist) and the setter
  attr_accessor :capacity # creates both

  def self.max_speed
    200
  end

  def initialize(model, type, capacity=2)
    @model = model
    @type = type
    @capacity = capacity
  end

  def drive
    p ignite_engine 
    # calling a private method
    # private method `ignite_engine' called for #<Car:0x00007fe3061ab5f8>
    "vroom vroom"
  end

  def stop
    "skkkrr"
  end

  def park
    p "parked"
    p pump_gas
  end

  # Manually defining the getter method
  def model
    @model
  end
  
  # Manually defining the setter method
  def model=(new_model)
    @model = new_model
  end

  private

  def pump_gas
    "glug glug glug: gas pumped"
  end

  def ignite_engine
    "engine ignited:"
  end
end

# initialize car with the model of 's' and the type of 'P100D'
c = Car.new('s', 'P100D')

binding.pry