let gameState = 0 
let hasGamesStarted = false
let scoreNadal = 0
let scoreFederer = 0
let scoreMax = 5
let imgNadal
let imgFederer
function preload() {
  imgNadal = loadImage('assets/nadal.png')
  imgFederer = loadImage('assets/federer.png')
}
function setup() {
  image(img, 0, 0)
}


let xBall
let yBall
let speedXBall = -3
let speedYBall = -7
let dBall = 30
let yFederer
let widthFederer = 100
let yNadal
let widthNadal = 100

function setup() {
    createCanvas(windowWidth, windowHeight);
    xBall = random(0, width)
    yBall = height/3*2
    rectMode(CENTER)
  }
  
function draw() {

  if (gameState == 0) {
    startGame()
  }else if (gameState == 1){
    playGame()
  }else if (gameState == 2){
    endGameFederer()
  }else if (gameState == 3){
    endGameNadal()
  }
  //console.log(yBall)
}

function keyPressed(){
  if (key == ' '){ 
    gameState = 1;
  }  
}


/* Funktionen für Game */

function startGame() {
  background(0)
  textAlign(CENTER)
  textSize(60)
  fill(255)
  text('FEDERER vs. NADAL', width/2, height/2)
  fill(150, 0, 255)
  textSize(24)
  text('press space to start', width/2, height/2+100)
}


function playGame() {
  background(20);

  textAlign(LEFT)
  textSize(24)
  fill(100)
  text('Nadal: ' + scoreNadal, 50, height/2-20)
  rect(width/2, height/2, width-100, 4 )
  text('Federer: ' + scoreFederer, 50, height/2+38)

  fill(255, 124, 234)
  noStroke()
  ellipse(xBall, yBall, dBall)
  
  yNadal = 50 
  fill(0, 50, 255)
  rect(mouseX, yNadal, widthNadal, 10)
  image(imgNadal, mouseX-60, yNadal+10)
  yFederer = height-50 
  fill(0, 255, 20)
  rect(mouseX, yFederer, widthFederer, 10)
  image(imgFederer, mouseX-60, yFederer-130)

  xBall = xBall + speedXBall
  yBall = yBall + speedYBall
  if (xBall > width - dBall/2 || xBall < dBall/2) {
      speedXBall = -speedXBall
  }
  if (yBall < height/2) {
    if ((yBall < yNadal-5+dBall/2) && (xBall < mouseX+widthNadal/2 && xBall > mouseX-widthNadal/2)) {
      speedYBall = -speedYBall
    } 
  } else {
    if ((yBall > yFederer-5-dBall/2) && (xBall < mouseX+widthFederer/2 && xBall > mouseX-widthFederer/2)) {
      speedYBall = -speedYBall
    } 
  }

  if (yBall < yNadal) {
    console.log('punkt für Federer')
    scoreFederer = scoreFederer + 1
    yBall = yFederer-20
    xBall = mouseX
  }
  if (yBall > yFederer) {
    console.log('punkt für Nadal')
    scoreNadal = scoreNadal  + 1
    yBall = yNadal+20
    xBall = mouseX
    speedXBall = -speedXBall
  }

  if (scoreFederer >= scoreMax) {
    gameState = 2
  }else if (scoreNadal >= scoreMax) {
    gameState = 3
  }
  
}

function endGameFederer() {
  background(0)
  textAlign(CENTER)
  textSize(40)
  text('GAME OVER : FEDERER WINS', width/2, height/2)
  text('😢', width/2, height/2+50)
}
function endGameNadal() {
  background(0)
  textAlign(CENTER)
  textSize(40)
  fill(0, 50, 255)
  text('GAME OVER : NADAL WINS', width/2, height/2)
  text('😢', width/2, height/2+50)
}
