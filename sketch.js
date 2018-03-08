window.onload = function(){
  let body = document.quertSelector("body"),
  h1 = document.createElement('h1'),
  x = document.createTextNobe('Abyssinian'),
  h2 = document.createElement('h2'),
  y = document.createTextNobe('Moritaka Awa');

  body.appendChild(h1);
  h1.appendChild(x);
  body.appendChild(h2);
  h2.appendChild(y);
};


 const CANVAS_WIDTH = 500;
 const CANVAS_HEIGHT = 500;

 function setup()  {
     createCanvas(CANVAS_WIDTH,CANVAS_HEIGHT);
     background(250);
 };

 function draw() {
