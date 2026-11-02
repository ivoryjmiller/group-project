function drawWelcomeScreen() {
  background("#F7D7E8");

  // title
  fill("#6B4226");
  textAlign(CENTER);
  textSize(48);
  text("❀ wallpaper creator ❀", 500, 230);
}

function drawPhonePreview() {
  // phone frame
  fill("#333333");
  rect(350, 75, 300, 500, 30);

  // wallpaper inside phone
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

  pop();
  drawingContext.restore();
}