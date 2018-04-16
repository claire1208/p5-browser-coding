// Link to to picture: http://flagpedia.net/south-africa

function setup() {
	createCanvas(580, 387);
	background(0);
}

function draw() {
	noStroke();
	fill(255,0,0);
	quad(115,0,580,0,580,131,310,131);
	fill(0, 51, 153);
	quad(115,387,580,387,580,256,310,256);
	
	
	fill(0, 128, 43);
	rect(301,155,279,77);
	stroke(0, 128, 43);
	strokeWeight(80);
	strokeCap(PROJECT);
	line(-10,-10,285,189);
	line(-10,397,292,189);
	
  noStroke();
	fill(255,255,255);
	quad(70,0,115,0,308,129,302,155);
	quad(308,129,580,131,580,155,302,155);
	quad(70,387,115,387,308,256,302,232);
	quad(302,232,308,256,580,256,580,232);
	
	
	fill(255, 170,0);
	triangle(0,46,217,192,0,341);
	fill(0,0,0);
	triangle(0,76,175,192,0,311);
	
}