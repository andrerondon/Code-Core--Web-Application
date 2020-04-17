# Create a Pizza class and a Beer class. They both should have sugar, protein and fat attributes. The Pizza class should have weight attribute and the beer class should have volume attribute. Create a parent Food class and use inheritance.

require_relative './food'

class Beer < Food
  attr_accessor :volume

  def initialize(sugar, protein, fat, volume)
    @volume = volume
    super(sugar, protein, fat)
  end
end

canadien = Beer.new(50, 2000, 10, 50)
p canadien.sugar, canadien.protein, canadien.fat, canadien.volume