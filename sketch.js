const CANVAS_WIDTH = 470;
const CANVAS_HEIGHT = 370;

function setup() {
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    background(200);
}

function draw() {
  angleMode(DEGREES)
  quad(120,229,96,280,147,284,160,237)
  quad(96,280,128,319,165,317,153,286)
  quad(164,317,153,286,128,332,168,328)
  fill(000)
  ellipse(240,115,265,200)
  fill(255)
  ellipse(240,125,265,200)
  fill(020)
  ellipse(240,145,265,200)
  fill(050)
  ellipse(240,200,270,250)
  fill(020)
  ellipse(240,245,200,195)
  fill(163,134,132)
  ellipse(210,290,85,85)
  fill(100)
  ellipse(260, 245, 15, 10)
  ellipse(175, 245, 12, 8)
  fill(241,163,201)
  arc(295, 185, 55, 80, 180, 90)
  arc(160, 185, 50, 75, 90, 330)
  fill(000)
  ellipse(200, 285, 40, 40)
  arc(210,290,5,4,180,320)
  arc(183,290,3,4,270,0)
  arc(210,310,55,10,180,355)
  quad(110,182,135,85,9,132,6,141)
  quad(310,305,377,330,424,343,372,232)
  quad(377,330,424,343,415,357,377,350)
}
