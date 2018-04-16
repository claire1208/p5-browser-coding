var maxSize = 30;
var circleSize;
var maxDeviation=50;
var backgroundColor=255;

function setup() { 
  createCanvas(windowWidth, windowHeight);
	stroke(255);
} 

// Measuring the distance between to balls and display the balls and the lines in-between.

function draw() {

  var x1 = windowWidth/2;
  var y1 = 0;
  var x2 = mouseX;
  var y2 = mouseY;

  stroke(200);
	fill(100);
	line(x1, y1, x2, y2);
  ellipse(x1, y1, 1, 1);
  ellipse(x2, y2, 9, 9);

  var d = int(dist(x1, y1, x2, y2));

 
// Click or drag the mouse to generaet colorful bubbles around the cursor
	
  if (mouseIsPressed==true){
   circleSize=random(maxSize);
   circleLocation=random(maxDeviation);
   noStroke();
  var r=random(155);
  var b=random(255);
    fill(r,0,b);
	   ellipse(mouseX+random(circleLocation), mouseY+random(circleLocation), circleSize, circleSize); 
    }

	
// 	The big flower on the top
	  translate(windowWidth/2,35);
    noStroke();
    for (var i = 0; i < 10; i ++) {
    ellipse(0, 20, 20, 50);
    rotate(PI/5);  
    }  
	
// 	Text on the screen
	noStroke();
	textSize(25);
  fill(101, 100, 244);
	text ("Press 'a' and 's' to change the background color", 20, height-60);
}

// 	Change the background color by pressing "A" and "S"

 	function keyTyped(){
		background(backgroundColor);	
		if (key==='a'){
			backgroundColor=255;
	 }	else if (key==='s'){
		 backgroundColor=0;
	 }
	}