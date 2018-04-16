// var offset=0;
// var pHeight1;
// var pHeight2;

function Pipe() {
  this.top = random(height/2);
  this.bottom = random(height/2);
  this.x = width;
  this.w = 120;
  this.speed = 3;
	

  this.highlight = false;

  this.collision = function(bird) {
    if (bird.y < this.top || bird.y > height - this.bottom) {
      if (bird.x > this.x && bird.x < this.x + this.w) {
        this.highlight = true;
        return true;
      }
    }
    this.highlight = false;
    return false;
  }

    this.show = function() {
      noStroke();
			fill(204, 255, 255);
    if (this.highlight) {
      fill(255, 0, 0);
    }

			
    rect(this.x, 0, this.w, this.top+sin(frameCount/10)*40);
    rect(this.x, height-(this.bottom+sin(frameCount/10)*50), this.w, this.bottom+sin(frameCount/10)*50);
		// rect(this.x-20, height-this.bottom-20, tshis.w+40, this.bottom+20);

  }

  this.update = function() {
    this.x -= this.speed;
  }

  this.offscreen = function() {
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }
  }
	
}