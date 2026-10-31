//sketch.js
let previewbutton;
let backbutton;
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
  previewbutton = createButton("Phone Preview");
  previewbutton.position(800, 600);
  previewbutton.hide();
  previewbutton.mousePressed(function() {
    previewbutton.hide();
    backbutton.show();
    screen = "phone";
  });

  backbutton = createImg("assets/backbutton.png", "back");
  backbutton.position(800, 600);
  backbutton.size(150, 75);
  backbutton.hide();

  
  backbutton.mousePressed(function() {
    backbutton.hide();
    previewbutton.show();
    screen = "editor";
});
}

function draw() {
  if (screen === "welcome") {
    drawWelcomeScreen();

    
  } else if (screen === "editor") {
    background("#FFFFFF");
    push();
    translate(200, 75);
    drawSky();
    drawSun();
    drawMountains();
    pop();
    
    drawMenu();
    drawStars();
    drawArrows();
  
  } else if (screen === "phone") {
    background("#F7D7E8");

    drawPhonePreview();
  }
}

function startEditing() {
  startbutton.hide();
  previewbutton.show();
  screen = "editor";
}

function mousePressed() {
  console.log(mouseX, mouseY);

  if (screen === "editor") {

    // STARS
    if (
      mouseX >= 0 &&
      mouseX <= 99.46484375 &&
      mouseY >= 262.20 &&
      mouseY <= 295.11
    ) {
      menuState = "starSelection01";

    // FLOWERS
    } else if (
      mouseX >= 0 &&
      mouseX <= 100.40234375 &&
      mouseY >= 298.82 &&
      mouseY <= 332.02
    ) {
      menuState = "flowerSelection01";

    // SMISKI
    } else if (
      mouseX >= 0 &&
      mouseX <= 99.703125 &&
      mouseY >= 335.625 &&
      mouseY <= 371.3984375
    ) {
      menuState = "smiskiSelection";

    // OTHER
    } else if (
      mouseX >= 0 &&
      mouseX <= 99.703125 &&
      mouseY >= 372.60546875 &&
      mouseY <= 404.04296875
    ) {
      menuState = "otherSelection01";

    // DOWN ARROW
    } else if (
      mouseX >= 122.77734375 &&
      mouseX <= 139.8359375 &&
      mouseY >= 436.28125 &&
      mouseY <= 454.94921875
    ) {
      if (menuState === "flowerSelection01") {
        menuState = "flowerSelection02";
      } else if (menuState === "otherSelection01") {
        menuState = "otherSelection02";
      }

    // UP ARROW
    } else if (
      mouseX >= 121.6875 &&
      mouseX <= 137.734375 &&
      mouseY >= 228.34375 &&
      mouseY <= 242.93359375
    ) {
      if (menuState === "flowerSelection02") {
        menuState = "flowerSelection01";
      } else if (menuState === "otherSelection02") {
        menuState = "otherSelection01";
      }
    }
  }
}