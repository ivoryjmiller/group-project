//sketch.js
let screen = "welcome";
let startbutton;


let lavender = "#E6D6FA";
let pink = "#F9C7D9";
let peach = "#FFE5BC";

async function setup() {
  createCanvas(1000, 650);
  await loadAssets();
  await loadArrows();

  startbutton = createImg("assets/startbutton.png", "start");
  startbutton.position(250, 230);
  startbutton.size(500, 300);
  startbutton.mousePressed(startEditing);
}

function draw() {
  if (screen === "welcome") {
    drawWelcomeScreen();
  } else if (screen === "editor") {  
    background("#FFFFFF");
    drawMenu();
    drawStars();
    }
}

function startEditing() {
  startbutton.hide();
  screen = "editor";
}

function mousePressed() { 
   if (screen === "editor") {
  
    console.log(mouseX, mouseY)

    if (
      mouseX >= 0 &&
      mouseX <= 99.46484375 &&
      mouseY >= 262.20 &&
      mouseY <= 295.11
    ) {
      menuState = "starSelection01";
    }
      
    if (
      mouseX >= 0 &&
      mouseX <= 100.40234375 &&
      mouseY >= 298.82 &&
      mouseY <= 332.02
    ) {
      menuState = "flowerSelection01";
    }
    if (
      mouseX >= 122.77734375 &&
      mouseX <= 139.8359375 &&
      mouseY >= 436.28125 &&
      mouseY <= 454.94921875
    ) {
      menuState = "flowerSelection02";
    }
    if (
      mouseX >= 121.6875 &&
      mouseX <= 137.734375 &&
      mouseY >= 228.34375 &&
      mouseY <= 242.93359375
    ) {
      menuState = "flowerSelection01";
    }
    if (
      mouseX >= 0 &&
      mouseX <= 99.703125 &&
      mouseY >= 335.625 &&
      mouseY <= 371.3984375
    ) {
      menuState = "smiskiSelection";
    }
    if (
      mouseX >= 0 &&
      mouseX <= 99.703125 &&
      mouseY >= 372.60546875 &&
      mouseY <= 404.04296875
    ) {
      menuState = "otherSelection01"
    }
    if (
      mouseX >= 122.77734375 &&
      mouseX <= 139.8359375 &&
      mouseY >= 436.28125 &&
      mouseY <= 454.94921875
    ) {
      menuState = "otherSelection02"
    }
    if (
      mouseX >= 121.6875 &&
      mouseX <= 137.734375 &&
      mouseY >= 228.34375 &&
      mouseY <= 242.93359375
    ) {
      menuState = "otherSelection01"
      }
    }
  }
