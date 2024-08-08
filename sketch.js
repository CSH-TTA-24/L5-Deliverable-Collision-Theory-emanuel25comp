let myXPos = 100;
let myYPos = 100;
let mySize;
let score = 0

let enemyXPos = 300;
let enemyYPos = 300;
let enemySize;

function setup() {
  createCanvas(500, 500);
  noStroke();

  mySize = random(50, 100);
  enemySize = random(50, 100);
}

function draw() {
  background(0);

  fill(255, 0, 0);
  ellipse(enemyXPos, enemyYPos, enemySize, enemySize);

  fill(0, 0, 255);
  ellipse(myXPos, myYPos, mySize, mySize);

  if (keyIsDown(LEFT_ARROW)) {
    myXPos -= 3;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    myXPos += 3;
  }

  if (keyIsDown(UP_ARROW)) {
    myYPos -= 3;
  }

  if (keyIsDown(DOWN_ARROW)) {
    myYPos += 3;
  }
  text("Score: " + score, 10,30) 

  let distance = dist(myXPos, myYPos, enemyXPos, enemyYPos);

  if (distance <= (mySize / 2) + (enemySize / 2)) {
    fill(random(255), random(255), random(255));
    textSize(22);
    enemyXPos = random(0,500)
    enemyYPos = random(0,500)
    score += 1
  }
}