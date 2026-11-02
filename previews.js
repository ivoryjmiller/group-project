function drawWelcomeScreen() {
  background("#F7D7E8");

  // title
  fill("#6B4226");
  textAlign(CENTER);
  textSize(48);
  text("❀ wallpaper creator ❀", 500, 230);
}

// draw all decorations
function drawPreviewDecorations() {
  drawPinkStar();
  drawRedStar();
  drawLightPinkStar();
  drawBlueStar();

  // flowers
  drawlightPinkFlower();
  drawLilyFlower();
  drawPinkFlower();
  drawPinkYellowFlower();
  drawPinkYellowFlower02();
  drawSakuraFlower();
  drawWhiteFlower();
  drawBlueFlower();
  drawButtonFlower();

  // smiskis
  drawairplaneSmiski();
  drawcatSmiski();
  drawholahoopSmiski();
  drawyogaSmiski();

  // other decor
  drawredHearts();
  drawpinkHearts();
  drawheartButtonRed();
  drawdarkGreenBow();
  drawgreenButterfly();
  drawwaxStamp();
  drawlightGreenBow();
}

function drawPhonePreview() {
  // phone frame
  noStroke();
  fill("#333333");
  rect(350, 75, 300, 500, 30);

  // keep wallpaper inside phone
  drawingContext.save();
  drawingContext.beginPath();
  drawingContext.rect(375, 100, 250, 450);
  drawingContext.clip();

  push();
  translate(250, 100);
  scale(1);

  drawSky();
  drawSun();
  drawMountains();

  translate(-200, -75);
  drawPreviewDecorations();

  pop();
  drawingContext.restore();
}

function drawLaptopPreview() {
  // laptop frame
  noStroke();
  fill("#333333");
  rect(175, 90, 650, 430, 15);

  // keep wallpaper inside laptop
  drawingContext.save();
  drawingContext.beginPath();
  drawingContext.rect(200, 105, 600, 400);
  drawingContext.clip();

  push();
  translate(200, 5);
  scale(1.2);

  drawSky();
  drawSun();
  drawMountains();

  translate(-200, -75);
  drawPreviewDecorations();

  pop();
  drawingContext.restore();
}
