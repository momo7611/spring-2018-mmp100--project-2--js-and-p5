const CANVAS_WIDTH = 470;
const CANVAS_HEIGHT = 370;

function setup() {
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    background(200);
    background('#FA8072')
}

function draw() {
  angleMode(DEGREES);
    line(111,269,133,201)

    line(133,201,160,161)

    line(111,269,90,166)

    line(90,166,146,94)

    fill('#FA8072')

    arc(195,102,100,190,185,30);

    line(243,125,271,364)

    line(159,161,220,145)

    line(222,145,215,368)

    fill('white')
    ellipse(196,87,20,20);

    fill('black')
    ellipse(196,87,10,10);

    triangle(112,267,130,206,91,162)

    fill('white')
    rect(110,120,55,75)
  }
