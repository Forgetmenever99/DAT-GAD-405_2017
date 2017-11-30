//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//12_CircularMotion_(Color)

//Setup of variables
let angleR = 0;
let angleG = 0;
let angleB = 0;
let angleBW = 0;

function setup(){
  createCanvas(400, 400);
}

function draw(){
  //Accumulate an additional amount
  //(faster to slower rates)
  angleR += 0.1;
  angleG += 0.05;
  angleB += 0.025;
  angleBW += 0.0125;

  //Get the sin value of each angle
  //sin output is from -1. to 1.
  let sinValR = sin(angleR);
  let sinValG = sin(angleG);
  let sinValB = sin(angleB);
  let sinValBW = sin(angleBW);

  //Map the sin output range from -1,1 to 0,255
  //This will have an effect on the color range
  let r = map(sinValR, -1, 1, 0, 255);
  let g = map(sinValG, -1, 1, 0, 255);
  let b = map(sinValB, -1, 1, 0, 255);
  let bw = map(sinValBW, -1, 1, 0, 255);

  //Each rect on the screen will have a different
  //color. Its oscillation (intensity of the color),
  //is defined by the sin() function and the angle.

  fill(r, 0, 0);
  rect(0, 0, width/4, height)

  fill(0, g, 0);
  rect(100, 0, width/4, height)

  fill(0, 0, b);
  rect(200, 0, width/4, height)

  fill(bw);
  rect(300, 0, width/4, height)
}
