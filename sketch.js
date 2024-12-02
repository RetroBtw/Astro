var sandy=0;
//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
  background(173,216,123); //an RGB color for the canvas' background
}

//The draw function happens over and over again
function draw() {
  
  //circle
  strokeWeight(5);
  stroke(255,255,127) // an RGB color for the circle's border
  fill(255,255,127,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(random(width),random(height),sandy,50); // center of canvas, 20px dia
  fill(44, 89, 193,mouseY);
  ellipse(400,sandy,50,50);
  textFont('Garamond');
  textSize(100);
  text('Jaylin',175,275);
  strokeWeight(0);
  ellipse(mouseX,mouseY,100,mouseX);
  }



function mousePressed(){
  if(sandy>=255){
    sandy=0;
  }else{
    sandy=sandy+5;
  }
}