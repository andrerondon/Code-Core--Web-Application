# Create a Pizza class and a Beer class. They both should have sugar, protein and fat attributes. The Pizza class should have weight attribute and the beer class should have volume attribute. Create a parent Food class and use inheritance.

require_relative './food.rb'

class Pizza < Food
  attr_accessor :weight

  def initialize(sugar, protein, fat, weight)
    super(sugar, protein, fat)
    @weight = weight
  end
end

pineapple = Pizza.new(10, 10, 10, 20)
p pineapple.sugar, pineapple.protein, pineapple.fat, pineapple.weight