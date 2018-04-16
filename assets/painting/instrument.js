// Inspired by Tina's work from last week

var osc, envelope,  fft;
var reverb;
var record,done,remix;
var violin;
var siren;
var scream;
var gunshot;


function preload(){
	violin =loadSound("violin.mp3");
  scream = loadSound("scream.mp3");
	gunshot =loadSound("gunshot.wav");
	siren = loadSound("siren.mp3");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	
	osc = new p5.SinOsc();
  osc2 = new p5.SinOsc();

  // Instantiate the envelope
  envelope = new p5.Env();
  envelope2 = new p5.Env();

  // set attackTime, decayTime, sustainRatio, releaseTime
  envelope.setADSR(0.5, 0.1, 0.9, 0.9);
  envelope2.setADSR(0.1, 0.2, 0.1, 0.5);

  // set attackLevel, releaseLevel
  envelope.setRange(1, 0);

  osc.start();
  osc2.start();
  osc.amp(0)
  osc2.amp(0)
	
	reverb = new p5.Reverb();
	//Reverb will last for 8 seconds at a decay rate of 0.5% each echo
	//Remember, process the oscilla
// 	reverb.process(osc, 3, 1);
	
  noStroke();
		
	fft = new p5.FFT();
	fft.setInput(violin);

  mic=new p5.AudioIn();
  mic.start();
	recorder=new p5.SoundRecorder();
	recorder.setInput(mic);
 	soundFile=new p5.SoundFile();
	fft2 = new p5.FFT();
	fft2.setInput(soundFile);
	
	record=createButton("Step1: Record");
	record.position(100,50);
	record.mousePressed(Recording);
	
	play = createButton('Step2: Play Music');
	play.position(100, 100);
  play.mousePressed(violinPlay);
	
	done=createButton("Step4: Fish Recording");
	done.position(100,450);
	done.mousePressed(Done);
	
	stop = createButton('Step5: Stop Music ');
 	stop.position(100,500);
 	stop.mousePressed(violinStop);
	frameRate(30);
		
	remix=createButton("Step6: Play Your Newly Made Music!");
	remix.position(100,550);
	remix.mousePressed(Remix);	
}


function draw() {
  background(10);
	
	push();
	stroke(200);
	textAlign(CENTER);
	textSize(20);
	text('Step3. Add Effects',150,200,)
	text('z: siren  x: scream  c: gunshot',200,250);
	text('🎵 a,s,d,f,g,h,j,k,l ',140,300);
	text('Or just speak to the mic ',170,350);
	pop();
	
  var spectrum = fft.analyze();
  for (var i = 0; i < spectrum.length/50; i++) {
		fill(random(100,250),spectrum[i],255);
		var x=map(i*2.5,0,spectrum.length/50,0, width);
		var r=map(spectrum[i],0,255,0,150);
		var l=map(spectrum[i],0,255,0,width);
		ellipse(x,height/1.7,r);
		push();
		stroke(spectrum[i]);
		strokeWeight(1);
		line(l,0,l,height);
		pop();
	
  }
}
function keyTyped() {
  if(key == 'z'){
    siren.play();
  }
  if(key == 'x'){
    scream.play();
  }
  if(key == 'c'){
    gunshot.play();
	}
  if(key === 'a'){
    playNote(60)
  }
  if(key == 's'){
    playNote(62)
  }
  if(key == 'd'){
    playNote(64)
  }
  if(key == 'f'){
    playNote(66)
  }
  if(key == 'g'){
    playNote(68)
  }
  if(key == 'h'){
    playNote(70)
  }
  if(key == 'j'){
    playNote(72)
  }
  if(key == 'k'){
    playNote(74)
	}
	if(key == 'l'){
		 playNote(76)
	 }
 }

function violinPlay(){
		violin.play();
}

function violinStop(){
  	violin.stop();	
}

function Recording(){
	recorder.record(soundFile);
}

function Recording(){

	recorder.record(soundFile);
}
function Done(){
	recorder.stop();
}
function Remix(){
	violin.stop();
	violin.loop();
	soundFile.loop();
}
function playNote(midiNum){
  osc.freq(midiToFreq(midiNum))
  osc2.freq(midiToFreq(midiNum+4))
  envelope.play(osc)
  envelope2.play(osc2)
 }