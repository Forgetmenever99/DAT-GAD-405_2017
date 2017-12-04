//Class Template / Example

//Declare variables
let car1, car2;
let r, b;

function setup(){
  createCanvas (400, 400);
  r = color(255, 0, 0);
  g = color(0, 0, 255);
  //Here we initialize new objects / pass properties to the class constructor
  car1 = new Car ("Mercedes", r); //Objects here have different properties
  car2 = new Car ("BMW", b);
}

class Car { //Create a new class named Car
  //Receive properties to the new instance / create class variables
  constructor(tempName, tempColor){
    //These values are given from the instantiation (in setup)
    this.tempName = tempName;
    this.color = tempColor;
    //Additional class values can be declared here
    this.xPosition = width/2;
  }
  
  moveCar(){     //Create functions - class methods
    //...
  }

  stopCar(){
    //...
  }
}
