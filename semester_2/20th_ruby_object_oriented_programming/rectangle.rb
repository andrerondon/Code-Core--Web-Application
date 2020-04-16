class Rectangle

    attr_accessor :width, :height
    def initialize(width, height)
      @width = width
      @height = height
    end
  
    def area
      @width * @height
    end
  
    def is_square?
      @width == @height
    end
  end
  
  square = Rectangle.new(15, 15)
  p square.area
  p square.is_square?
  square. height = 1000
  p square.height
  p square.is_square?