// I tried to load sound and image, but it didn't work
// Also, need to learn how to reset the game when the bird hit a pipe

function Bird() {
  this.x = 60;
	this.y = height/2;
 

  this.gravity = 0.6;
  this.lift = -15;
  this.velocity = 0;

  this.show = function() {
    strokeWeight(3);
		stroke(30);
		fill("#f9bc5c");
    ellipse(this.x, this.y, 70, 40);

		line (this.x+31, this.y-10, this.x-30, this.y-40);
		line (this.x+31, this.y-10, this.x-5, this.y-35);
		line (this.x+5, this.y-3, this.x+20, this.y-3);
		
  }

  this.up = function() {
    this.velocity += this.lift;
  }

  this.update = function() {
    this.velocity += this.gravity;
    this.velocity *= 0.9;
    this.y += this.velocity;

    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  }
	
		// this.reset = function(){
		// this.x = 60;
		// this.y = height/2;

}