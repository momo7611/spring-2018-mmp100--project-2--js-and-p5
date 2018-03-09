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
    fill('pink')

    arc(191,112,110,190,125,50);

    line(159,161,220,145)

    fill('yellow')
    ellipse(196,87,20,20);

    fill('black')
    ellipse(196,87,10,10);

    triangle(82,315,144,205,88,169)

    fill('pink')
    beginShape();
    vertex(220,148)
    vertex(220,376)
    vertex(276,368)
    vertex(240,140)
    endShape();

    triangle(195,100,158,144,240,175)

    fill('white')
    angleMode(DEGREES);
    rotate(35);
    rect(169,8,67,77)
    noStroke()
    rect(203,-33,15,75)

  }
