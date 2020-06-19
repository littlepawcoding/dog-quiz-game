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
canvas.width = 1000;
canvas.height = 1000;

var ctx = canvas.getContext("2d");

// var maxheight = canvas.height * 0.3;

//STATE

var state = {
  doggieX: 100,
  doggieY: 100,
};

//BACKGROUND

var background = document.querySelector("#background");

function drawBackground() {
  var width = canvas.width;
  var height = canvas.height;
  ctx.drawImage(background, 0, 0, width, height);
}

//DOGGIE

var doggie = document.querySelector("#doggie");

function drawDug() {
  var width = 140;
  var height = 140;
  var doggieX = state.doggieX;
  var doggieY = state.doggieY;
  ctx.drawImage(doggie, state.doggieX, state.doggieY, width, height);
}

//GAME

function runGame() {
  drawBackground();
  drawDug();
}

setInterval(runGame, 50);

// MOVEMENT

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

if (e.key === "ArrowLeft"){
moveDugLeft();
}

if (e.key === "ArrowRight"){
moveDugRight();
}

if (e.key === "ArrowUp"){
moveDugUp();
}

if (e.key === "ArrowDown"){
moveDugDown();
}
}

body.addEventListener("keydown", handleKey);
