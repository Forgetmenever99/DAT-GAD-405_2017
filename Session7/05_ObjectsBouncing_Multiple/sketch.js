//Create two variables that will store the new objects from the class Circle
let circleObject1;
let circleObject2;
let circleObject3;
let circleObject4;
let circleObject5;
let circleObject6;
let circleObject7;
let circleObject8;
let circleObject9;
let circleObject10;

function setup() {
  createCanvas(500, 500);

  //Initialize the two class objects with their corresponding variables
  //The variables that go inside here, should correspond to
  circleObject1 = new Circle(width/2, height/2, random(-5, 5), random(-5, 5), random(10, 100));
  circleObject2 = new Circle(width/2, height/2, random(-5, 5), random(-5, 5), random(10, 100));
  circleObject3 = new Circle(width/2, height/2, random(-5, 5), random(-5, 5), random(10, 100));
  circleObject4 = new Circle(width/2, height/2, random(-5, 5), random(-5, 5), random(10, 100));
  circleObject5 = new Circle(width/2, height/2, random(-5, 5), random(-5, 5), random(10, 100));
  circleObject6 = new Circle(width/2, height/2, random(-5, 5), random(-5, 5), random(10, 100));
  circleObject7 = new Circle(width/2, height/2, random(-5, 5), random(-5, 5), random(10, 100));
  circleObject8 = new Circle(width/2, height/2, random(-5, 5), random(-5, 5), random(10, 100));
  circleObject9 = new Circle(width/2, height/2, random(-5, 5), random(-5, 5), random(10, 100));
  circleObject10 = new Circle(width/2, height/2, random(-5, 5), random(-5, 5), random(10, 100));
}

function draw() {
  background(160);
  circleObject1.moveFunction();
  circleObject1.displayCircle();
  circleObject2.moveFunction();
  circleObject2.displayCircle();
  circleObject3.moveFunction();
  circleObject3.displayCircle();
  circleObject4.moveFunction();
  circleObject4.displayCircle();
  circleObject5.moveFunction();
  circleObject5.displayCircle();
  circleObject6.moveFunction();
  circleObject6.displayCircle();
  circleObject7.moveFunction();
  circleObject7.displayCircle();
  circleObject8.moveFunction();
  circleObject8.displayCircle();
  circleObject9.moveFunction();
  circleObject9.displayCircle();
  circleObject10.moveFunction();
  circleObject10.displayCircle();
}

//Definition of the class Circle
class Circle{

  constructor(x, y, speedX, speedY, size){
    //Setup of class' variables
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
    this.size = size;

    this.rd = random(255);
    this.grn = random(255);
    this.bl = random(255);
    this.a = 255;
  }

  //Class function that takes care of motion and collision
  moveFunction(){
    //Motion system - current position and speed
    this.x = this.x + this.speedX;
    this.y = this.y + this.speedY;

    //Based on boundaries collision, reverse direction for x and y
    if (this.x > width || this.x<0){
      this.speedX *= -1;
    }
    if (this.y > (height) || this.y<0){
      this.speedY *= -1;
    }
  }

  //Class function that displays the ellipse
  displayCircle(){
    noStroke();
    this.fillcol = color(this.rd, this.grn, this.bl, this.a)
    fill(this.fillcol);
    ellipse(this.x, this.y, this.size, this.size);
  }
}
