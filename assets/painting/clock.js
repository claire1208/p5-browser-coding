function setup() { 
  createCanvas(600, 600);

} 

function draw() { 
  background(0);
	angleMode(DEGREES);
  
  var h = hour();
  var m = minute();
  var s = second();
  
  stroke(255);
  strokeWeight(20);
  line (width/2-100,width/3,width/2+100,width/3);
  line (width/2-200,width/2,width/2+200,width/2);
  // line (width/2-200,width/1.5,width/2+200,width/1.5);
  // push();
  // stroke(255);
  // strokeWeight(20);
  // noFill();
  // ellipse (width/2, height/2,450,450);
  // pop();
  
    
  stroke (230, 0, 115);
  strokeWeight (12);
  var end1= map(h,0,24,width/2-100,width/2+100);
  hrLine = line(width/2-100,width/3,end1,width/3);
  
	
  stroke (255, 102, 179);
  strokeWeight (12);
  var end2= map(m,0,60,width/2-200,width/2+200);
  minLine = line(width/2-200,width/2,end2,width/2);
  
  
//   stroke (255, 153, 204);
//   strokeWeight (12);
//   var end1= map(m,0,60,width/2-200,width/2+200);
//   secLine = line(width/2-200,width/2,end1,width/2);
  
  stroke (250, 153, 204);
  strokeWeight (18);
  noFill();
  var end3 = map (s, 0, 60,0, 360);
  arc(width/2, height/2,450, 450, end3, 0);
  
  push();
 	strokeWeight(2);
	fill(255, 230, 230);
	stroke(255, 230, 230);
	textSize(35);
	text(h+':'+ m +':'+s,width/2.5,width/1.5);
	pop();
     
}