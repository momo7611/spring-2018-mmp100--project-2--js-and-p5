window.oload = function(){
  let body = document.querySelector("body"),
  h1 = document.createElement("h1"),
  x = document,createElement ('Goose');
  h2 = document.createElement ('h2'),
  y = document.createTexNode ('Diego F. Futierrez');

  body.appendChild(h1);
  h1.appendChild(x);
  body.appendChild(h2);
  h2.appendChild(y);
}

const CANVAS_WIDTH = 470;
const CANVAS_HEIGHT = 370;

function setup() {

  createCanvas(CANVAS_WIDTH ,CANVAS_HEIGHT);
  background (200);
};

function draw () {

  fill('green')
  trianle (2.097, 0.770, 3.090, 1.417, 1.930, 1.451);

    line(0.160, 3.000, 0.360, 1.333)
    line(0.360, 1.333, 0.826, 0.444)
    line(0.826, 0.479, 1.410, 0.333)
    line(1.410, 0.333, 1.764, 0.455)
    line(1.806, 0.465, 2.368, 0.950)
    line(2.368, 0.950, 0.360, 1.333)
    line(3.104, 1.882, 1.764, 0.455)
    line(1.764, 0.455, 1.430, 1.610)
    line(1.430, 1.610, 1.235, 2.424)
    line(1.235, 2.424, 0.360, 1.333)
    line(0.160, 3.000, 1.340, 3.354)
    line(1.340, 3.354, 1.528, 4.000)
    line(1.639, 5.000, 0.160, 3.000)

    fill('red');
    ellipse(1.430, 0.736, 1.681, 0.780)

}
