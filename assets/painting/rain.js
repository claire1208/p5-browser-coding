var frogs=[];
var rains=[];
var flag = 1;


function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(20);

    frogs.push (new MovingFrog(50,80, 0, 1));
    frogs.push (new MovingFrog(100,160, 1, 1));
    frogs.push (new MovingFrog(windowWidth - 50,550, 0, -1));
    frogs.push (new MovingFrog(windowWidth - 100,600, 1, -1));

    push();
    strokeWeight(0.2);
    pop();


}

function draw() {
    background(250);

    // Draw Rains

    if (flag == 1) {
        for(var j = 0; j < 50; j++){
            var rainx = Math.random()*windowWidth;
            var rainy = Math.random()*windowHeight;
            push();
            stroke(180);
            noFill();
            ellipse(rainx, rainy, 1, 20);
            pop();
        }
    }
// Draw Frogs
    for (var i=0; i<frogs.length; i++){
        frogs[i].display();
    }

//Draw Water Lilly
    randomSeed(0, 153, 0);
    for (var j=100; j< width-30; j+=50) {
        var color = (random (0,150));
        var scalar = random (0.20,1.40);
        waterLilly (j,400, color, scalar*1.3);
        waterLilly (j+450,250, color, scalar*1);
    }

    var s = 'Press the mouse to control the rain';
    push();
    fill(50);
    textSize(25);
    text(s, windowWidth/3, windowHeight*0.9);
    pop();

}

//Water Lilly
function waterLilly (x,y,c,s) {
    push();
    translate (x,y);
    scale (s);
    noStroke();
    fill(c);
    arc(0,0,110, 60,0.1,6.1);
    noStroke();
    fill(0, 204, 68);
    ellipse(-50,30,40,30);
    stroke (50);
    line(0,0,-50,10);
    line(-20,-25,-30,0);
    line(-20,5,30,20);
    pop();

}

function MovingFrog (x,y,type, direction) {
    this.x=x;
    this.y=y;
    this.speedX=0.2;
    this.speedY=0.1;
    this.type = type;
    this.increment = 0;
    this.direction = direction;


    this.display = function () {
        if(this.x >= windowWidth || this.x <= 0){
            this.direction *= -1;
        }
        this.x = this.x + (this.direction)*2;

        if(this.y >= windowHeight || this.y <= 0){
            this.direction *= -1;
        }
        this.y = this.y + (this.direction)*1 ;
        this.increment += 0.1;


        if (type === 1) {
            this.size= map (sin(this.increment), -1, 1, 50, 70);
        } else {
            this.size= map (cos(this.increment), -1, 1, 60, 80);
        }
        // Body
        noStroke();
        fill(0, random(255), random(155));
        ellipse (this.x, this.y, this.size, this.size-20);


        // Ripple
        push();
        stroke(170);
        strokeWeight(2);
        noFill();
        ellipse (this.x, this.y, this.size+10, this.size-10);
        pop();

// Eyes
        push();
        stroke(100);
        strokeWeight(3);
        fill(255);

        ellipse(this.x-10,this.y-10,15,30);
        ellipse(this.x+10,this.y-10,15,30);
        ellipse(this.x-8,this.y-15,3,3);
        ellipse(this.x+12,this.y-15,3,3);
        pop();
    };
}

// Rain Control
function mousePressed() {
    flag *= -1;
}