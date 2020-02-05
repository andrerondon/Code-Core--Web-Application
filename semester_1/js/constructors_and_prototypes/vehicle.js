// Make constructor to generate cars
// each car should have the following properties:
// 1) make year
// 2) brand
// 3) top speed

// make four instances

function Car(year, brand, speed) {
    this.makeYear = year;
    this.brand = brand;
    this.topSpeed = speed;
    this.wheels = 4;
    this.currentSpeed = 0;
  
    this.accelrate = function(amount) {
      if (this.currentSpeed < this.topSpeed) {
        this.currentSpeed += amount;
      } else {
        this.currentSpeed = this.topSpeed;
      }
    }
  
    this.decelerate = function(amount) {
      this.currentSpeed -= amount;
    }
  }
  
  const tesla = new Car(2015, 'Tesla', 300);
  const ferarri = new Car(2018, 'Ferarri', 208);
  const porche = new Car(2017, 'Porche', 323);
  const lisa = new Car(1980, 'Mustang', 140);
  
  console.log(porche);
  porche.accelrate(50); //currentSpeed 50
  porche.accelrate(50); //currentSpeed 50
  porche.accelrate(50); //currentSpeed 50
  porche.accelrate(50); //currentSpeed 50
  porche.accelrate(50); //currentSpeed 50
  porche.accelrate(50); //currentSpeed 50
  porche.accelrate(50); //currentSpeed 50
  porche.accelrate(50); //currentSpeed 50
  porche.accelrate(50); //currentSpeed 50
  porche.accelrate(50); //currentSpeed 50
  porche.accelrate(50); //currentSpeed 50
  console.log(porche);