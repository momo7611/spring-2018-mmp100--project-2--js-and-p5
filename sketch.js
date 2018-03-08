const CANVAS_WIDTH = 470;
const CANVAS_HEIGHT = 370;

function setup() {
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    background(200);
    background('grey')
}

function draw() {
  angleMode(DEGREES);

    line(90,165,147,94)
    stroke('pink')
    fill('#FA8072')

    arc(195,102,100,190,185,30);

    //line(243,125,271,364)

    line(159,161,220,145)

    //line(222,145,215,368)

    fill('white')
    ellipse(196,87,20,20);

    fill('black')
    ellipse(196,87,10,10);

    triangle(110,275,139,200,95,160)

    fill('pink')
    beginShape();
    vertex(220,148)
    vertex(210,366)
    vertex(266,368)
    vertex(270,140)
    endShape();

    fill('white')
    angleMode(DEGREES);
    rotate(35);
    rect(170,20,58,65)

  }
