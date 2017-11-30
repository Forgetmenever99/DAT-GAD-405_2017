//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//13_CircularMotion_(Position)

//Setup of variables
let angle = 0;

function setup(){
  createCanvas(400, 400);
}

function draw(){
  background(160);

  //Accumulate an additional amount to the angle
  angle += 0.1;

  //Get the sin and cos value from the angle
  let sinValueX = sin(angle);
  let sinValueY = cos(angle);

  //Map the sin and cos output range from -1,1 to position values
  let x = map(sinValueX, -1, 1, 0, width-50);
  let y = map(sinValueY, -1, 1, 0, width-50);

  fill(255);
  ellipse(25+x, 25+y, 50, 50);
}
