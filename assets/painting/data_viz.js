// Data Source: https://data.cityofnewyork.us/Transportation/Subway-Stations/arq3-7z49\

var table;
var bgImg;
var data;
var t = "";

function preload() {
  table = loadTable("subway_station3.csv","csv","header");
	bgImg = loadImage("NYC.png");
}

function setup() {
  createCanvas(800,450)
  noStroke()
  fill(0,0,255)
  background(255,255,255)
	
  var rows = table.getRows()
  for (var r = 0; r < rows.length; r++) {
		var long = rows[r].getNum("LONG")
    var lat = rows[r].getNum("LAT")
    var x = map(long,-74.030876,-73.755405,60,width-60)
    var y = map(lat,40.57603382,40.903125,height-100,0)
		ellipse(x,y,4,4,10)

  }
}


function draw(){
	 image(bgImg,width/5,height/1.3);
   feed(t);
   push();
	 fill(0,0,225);
	 textSize(30)
	 textFont('Helvetica');
	 text("NYC SUBWAY", width/2.6,330)
	 pop();
}

function gotData(data){
	
  var i = int(random(0,data.length));
   console.log(i);
	var borough = data[i].borough
	var name = data[i].station_name;
	var att = data[i].at_t;
	var tmobile = data[i].t_mobile;
	var verizon = data[i].verizon;
	
	var str = "Borough:";
    str += borough;
    str += " \n\Station:";
    str += name;
    str += " \n\Carriers Work in Here:";
  	str += "AT&T:";
    str += att;
	  str +=" T-Mobile:";
    str += tmobile;
		str +=" Verizon:";
    str += verizon;
	  t=str;
} 

function feed(t){
	fill(0);
	textSize(15); 
	text(t, width/3.5, height/1.25);
}

function mouseClicked(){
	 cursor(CROSS);
   loadJSON("https://data.ny.gov/resource/6758-4bvn.json",gotData);
	 console.log(mouseX,mouseY)	 
	 
}