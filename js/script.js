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
    x: 100,
    y: 100,
  },
};

//BACKGROUND
function drawBackground() {
  // draw background
  var background = document.querySelector("#background");
  var aspect = background.width / background.height;
  ctx.drawImage(background, 0, 0, canvas.width, canvas.width * aspect);
  // draw score
  ctx.fillStyle = "black";
  ctx.font = "45px Dog Font";
  ctx.textAlign = "right";
  ctx.fillText("Score : " + score, 850, 50);
}

//DOGGIE
var doggieX = state.doggieX;
var doggieY = state.doggieY;
function drawDug() {
  var doggie = document.querySelector("#doggie");
  var width = 84;
  var height = 84;
  ctx.drawImage(doggie, doggieX, doggieY, width, height);
}

//BONES
// draw bones
function drawBone(boneInfo) {
  var bone = document.querySelector("#bone");
  var width = 96;
  var height = 47;
  var xPosition = state.bonePosition.x;
  var yPosition = state.bonePosition.y;
  ctx.drawImage(bone, xPosition, yPosition, width, height);
}
var numberX = Math.round(Math.random() * (canvas.width - 25));
var numberY = Math.round(Math.random() * (canvas.height - 25));
// bone movement
function bonePositions() {
  state.bonePosition.x = numberX;
  state.bonePosition.y = numberY;
  console.log(numberX);
  console.log(numberY);
}
bonePositions();

// DOG MOVEMENT
function moveDugLeft() {
  doggieX -= 5;
}
function moveDugRight() {
  doggieX += 5;
}
function moveDugUp() {
  doggieY -= 5;
}
function moveDugDown() {
  doggieY += 5;
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
  //COLLISION DETECTION
  if (doggieX == numberX - 50 || doggieX == numberY - 50) {
    score++;
  }
}

body.addEventListener("keydown", handleKey);

//GAME
// runs full game
function runGame() {
  drawBackground();
  drawDug();
  drawBone();
}

setInterval(runGame, 50);
