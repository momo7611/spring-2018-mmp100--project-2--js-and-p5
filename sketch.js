window.onload = function(){
  let body = document.querySelector("body"),
  h1 = document.createElement('h1'),
  x = document.createTextNode('Otter'),
  h2 = document.createElement('h2'),
  y = document.createTextNode('Melissa Olaya');

  body.appendChild(h1);
  h1.appendChild(x);
  body.appendChild(h2);
  h2.appendChild(y);
};


const CANVAS_WIDTH = 470;
const CANVAS_HEIGHT = 370;

function setup() {
createCanvas(CANVAS_WIDTH,CANVAS_HEIGHT);
background(200);
};

function draw (){

fill('pink')

triangle(148.0, 55.0, 108.0, 77.0, 129.0, 99.0);

  line(110,94,109,108)
  line(109,108,196,250)

  line(129,114,139,139)
  line(139,139,161,152)


  line(148,174,76,202)
  line(76,202,37,210)
  line(37,210,3,258)
  line(3,258,26,259)
  line(26,259,115,255)
  line(115,255,131,246)
  line(131,246,123,222)
  line(123,222,74,204)

  line(237,367,0,367)
  line(0,367,1,257)

  line(120,59,218,23)
  line(218,23,288,34)
  line(289,34,390,86)
  line(390,86,426,220)
  line(426,220,438,245)
  line(438,245,380,277)
  line(380,277,301,313)
  line(301,313,219,297)
  line(219,297,160,262)
  line(160,262,128,247)
  line(128,247,93,296,)
  line(93,296,128,321)
  line(128,321,197,359)
  line(197,359,256,366)
  line(256,366,308,361)
  line(308,361,405,330)
  line(405,330,441,303)
  line(441,303,446,266)
  line(446,266,445,249)
  line(445,249,420,235)

  line(256,236,307,226)
  line(307,226,336,201)
  line(336,201,363,177)

fill('pink');
line(363,177,381,146);
line(381,146,351,140);
line(351,140,363,177);

fill('blue');
  ellipse(247,96,20,20)



};
