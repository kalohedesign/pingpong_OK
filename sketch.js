let xBall
let yBall
let speedXBall = -2
let speedYBall = -5
let dBall = 20

function setup() {
    createCanvas(windowWidth, windowHeight);
    xBall = random(0, width)
    yBall = height/3*2
    rectMode(CENTER)
  }
  
  function draw() {
    background(20);
    fill(255, 124, 234)
    noStroke()
    ellipse(xBall, yBall, dBall)

    let yFederer = height-50 
    fill(0, 255, 20)
    rect(mouseX, yFederer, 200, 10)

    xBall = xBall + speedXBall
    yBall = yBall + speedYBall

    if (xBall > width - dBall/2 || xBall < dBall/2) {
        speedXBall = -speedXBall
    }
    if (yBall < dBall/2 || (yBall > yFederer-5 - dBall/2) && (xBall < mouseX+100 && xBall > mouseX-100)) {
        speedYBall = -speedYBall
    }
  }
  