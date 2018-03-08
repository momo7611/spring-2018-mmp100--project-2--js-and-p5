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
strokeWeight('2');
triangle(344,354,310,350,318,322);
fill('black')
arc(263,105,160,50, 180,PI/3)
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
fill('red')
ellipse(260,223,25,25);
strokeWeight('.5');
fill('white');
strokeWeight('1')
triangle(257,220,261,218,254,217);
line(174,110,139,222);
line(157,252,247,369);
line(262,363,231,325);
line(231,325, 262,354);
strokeWeight('1');
line(315,318,285,245);
line(285,245, 290,207);
line(290,207, 259,158);
fill('black');
triangle(254,355,228,321, 258,350);

}
