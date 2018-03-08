window.onload = function() {
  let body = document.querySelector ('body'),
  h1 = document.createElement('h1'),
  x = document.createTextNode ('Bear'),
  h2 = document.createElement('h2'),
  y = document.createTextNode ('Vincent Bustamante');


  body.appendChild(h1);
  h1.appendChild(x);
  body.appendChild(h2);
  h2.appendChild(y);
};


const CANVAS_WIDTH = 470
const CANVAS_HEIGHT = 370

function setup() {
createCanvas(CANVAS_WIDTH,CANVAS_HEIGHT);
background(225);


}
function draw() {

fill('rgb(149,156,122)');
triangle(344,354,310,350,318,322);
fill('red')
line(344,354,308,257);
line(308,257,315,237);
line(315,237,282,132);
line(282,132,293,105);
line(293,105,292,83);
line(292,83,279,80);
line(279,80,248,84);
line(248,84, 169,39);
line(169,39,155,0);
line(74,0,71,54);
line(71,54,0,96);
line(323,362,320,368);
ellipse(260,223,25,25);
line(174,110,139,222);
line(157,252,247,369);
line(262,363,231,325);
line(231,325, 262,354);

}
