var bird;
var pipes = [];
var sound;
 var bg;
// var halfBg;
var a=0;

function preload(){
	sound = loadSound("ouch.wav");
 	bg = loadImage("bgImg.jpg");
 }


function setup() {
  createCanvas(600, 600);
  bird = new Bird();

	// bg.loadPixels();
	// halfBg = 4 * width * height/2;
	// for(var i = 0; i < halfBg; i++){
	// bg.pixels[i+halfBg] = bg.pixels[i];
	// }
	// bg.updatePixels();
}

function draw() {
  background("#5c98f9");
	 image(bg, a, 0);
	
  for (var i = pipes.length-1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].collision(bird)) {
      console.log("HIT");
	   	// this.reset();
			if(!sound.isPlaying()){
				sound.play();
			}
    }

    if (pipes[i].offscreen()) {
			console.log(pipes.length);
      pipes.splice(i, 1);
    }
  }

  bird.update();
  bird.show();

  if (frameCount % 100 == 0) {
    pipes.push(new Pipe());
  }
	 a=a-3;
	if(a < -1 * bg.width + 100){
		a = 0;
	}
  


}

function keyPressed() {
  if (key == ' ') {
    bird.up();
    //console.log("SPACE");
  }
 }