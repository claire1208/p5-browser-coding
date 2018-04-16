function setup() {
// 	Setting up the canvas
	createCanvas(windowWidth, windowHeight);
	background(255);

}

function draw() {
// 	Creating background
	stroke(240);
	fill(242, 242, 242);
	rect(100,100,400,400);

// 	Horizontal "lines" (rectangles)
	
	noStroke();
	fill(0,0,0);
	rect(100,138,362,8.5);
	rect(100,400,400,12);
	rect(146,138,8.5,364);
	rect(146,442,215,8.5);
	rect(256,476,215,8.5);
	rect(368,262,95,12);
	
// 	Vertical "lines" (rectangles)
	rect(154,354,317,8);	
	rect(462,100,12,400);
	rect(359,100,10,378);
	rect(192,100,10,46);
	rect(248,355,12,146);
	rect(410,274,12,82);
	
// 	Yellow blocks
	fill(255, 190, 0);
	rect(100,412,46,90);
	rect(369,100,93,38);
	rect(369,146.5,93,116.5);
// 	Red blocks
	fill(204, 51, 0);
	rect(154.5,146,205,208);
	rect(474,412,26,88);
// 	Blue block
	fill(0, 51, 204);
	rect(369,412,93,64);
// 	Black blocks
	fill(0,0,0);
	rect(154,362,94,38);
	rect(257,450,102,30);
	
}
// Link to the original picture:
// https://www.pinterest.dk/pin/496662665132366417/?autologin=true