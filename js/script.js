//GLOBAL VARIABLES
var score = 0;

//BURGER MENU
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

//CANVAS
var canvas = document.querySelector("#screen");
canvas.width = 900;
canvas.height = 500;
var ctx = canvas.getContext("2d");
var maxheight = canvas.height * 0.3;

//STATE
var state = {
  doggieX: 100,
  doggieY: 100,
  bonePosition: {
    x: 200,
    y: 200,
  },
};

//BACKGROUND

var background = document.querySelector("#background");

function drawBackground() {
  // draw background
  var aspect = background.width / background.height;
  ctx.drawImage(background, 0, 0, canvas.width, canvas.width * aspect);
  // draw score
  ctx.fillStyle = "black";
  ctx.font = "45px Dog Font";
  ctx.textAlign = "right";
  ctx.fillText("Score : " + score, 850, 50);
}

//DOGGIE

var doggie = document.querySelector("#doggie");

function drawDug() {
  var doggieX = state.doggieX;
  var doggieY = state.doggieY;
  var width = 84;
  var height = 84;
  ctx.drawImage(doggie, doggieX, doggieY, width, height);
}

//BONES
// draw bones

var bone = document.querySelector("#bone");

function drawBone() {
  var xPosition = state.bonePosition.x;
  var yPosition = state.bonePosition.y;
  var width = 96;
  var height = 47;
  ctx.drawImage(bone, xPosition, yPosition, width, height);
}

// bone movement
function bonePositions() {
  var numberX = Math.round(Math.random() * (canvas.width - 25));
  var numberY = Math.round(Math.random() * (canvas.height - 25));
  state.bonePosition.x = numberX;
  state.bonePosition.y = numberY;
}

function dugBoneCollision() {
  //COLLISION DETECTION
  if (
    state.doggieX < state.bonePosition.x + 96 &&
    state.doggieX > state.bonePosition.x &&
    doggie.y < state.bonePosition.y + 47 &&
    state.doggieY > state.bonePosition.y
  ) {
    score++;
    bonePositions();
  }
}

//TIMER

var timeleft = 15;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0 && score < 3){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "0";
    window.location.replace("quiz.html");
  }
  if(timeleft <= 0 && score >= 3){
    clearInterval(downloadTimer);
    alert("Yay!! You're the cat's (or dog's) pyjamas!");
  }
  else {
    document.getElementById("countdown").innerHTML = timeleft;
  }
  timeleft -= 1;
}, 1000);

//GAME - runs full game
// things that run automatically through set interval
function runGame() {
  drawBackground();
  drawDug();
  drawBone();
  dugBoneCollision();
}

setInterval(runGame, 50);

// things that run through event listeners
// DOG MOVEMENT
function moveDugLeft() {
  state.doggieX -= 5;
}
function moveDugRight() {
  state.doggieX += 5;
}
function moveDugUp() {
  state.doggieY -= 5;
}
function moveDugDown() {
  state.doggieY += 5;
}

//EVENT HANDLING
function handleKey(e) {
  if (e.key === "ArrowLeft") {
    moveDugLeft();
  }
  if (e.key === "ArrowRight") {
    moveDugRight();
  }
  if (e.key === "ArrowUp") {
    moveDugUp();
  }
  if (e.key === "ArrowDown") {
    moveDugDown();
  }
  // dugBoneCollision();
}
body.addEventListener("keydown", handleKey);
