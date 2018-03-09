const CANVAS_WIDTH = 470;
const CANVAS_HEIGHT = 370;

function setup() {
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    background(200);
}

function draw() {
    point(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2);
    line(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    line(0, CANVAS_HEIGHT, CANVAS_WIDTH, 0);
}
