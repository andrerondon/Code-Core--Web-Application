// Student Constructor
// Write a Student constructor function to use for creating students and log their info

// Specs

// It should have 5 properties (id, firstName, lastName, email, age)
// ID should be a random 16 character string made with numbers and letters
// It should have a method to log student information.
// Test Cases

// const joe = new Student('joe', 'mole', 25, 'italy');
// joe.info()  prints "i438sbvjd92bahf2: Joe Mole is 25 years old from Italy"


function StudentInfos(firstName, lastName, country, age) {
    this.id = Math.random().toString(36).substr(2,8) + Math.random().toString(36).substr(2,8);
    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country;
    this.age = age;

    this.info = function(){
        return `${this.id}: ${firstName} ${lastName} is ${age} years old from ${country}`;
    }
}

  const joe = new StudentInfos('Joe', 'Mole', 'Italy', 25);

  console.log(joe.info());



  
  
