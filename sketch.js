//sketch.js
let previewbutton;
let backbutton;
let screen = "welcome";
let startbutton;

// SHOW STAR VARIABLE 
let showPinkStar = false;
let showRedStar = false;
let showLightPinkStar = false;
let showBlueStar = false;

// SHOW FLOWER VARIABLE
let showlightPinkFlower = false;
let showLilyFlower = false;
let showPinkFlower = false;
let showPinkYellowFlower = false;
let showPinkYellowFlower02 = false;
let showSakuraFlower = false;
let showWhiteFlower = false;
let showBlueFlower = false;
let showButtonFlower = false;

// SHOW SMISKI VARIABLE
let showairplaneSmiski = false;
let showcatSmiski = false;
let showholahoopSmiski = false;
let showyogaSmiski = false;

// SHOW OTHER VARIABLE
let showredHearts = false;
let showpinkHearts = false;
let showheartButtonRed = false;
let showdarkGreenBow = false;
let showgreenButterfly = false;
let showwaxStamp = false;
let showlightGreenBow = false;


let dragging = false;
let offsetX = 0;
let offsetY = 0;
let draggingAsset = null;



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
    // DRAW STARS
    drawPinkStar();
    drawRedStar();
    drawLightPinkStar();
    drawBlueStar();

    // DRAW FLOWER
    drawlightPinkFlower();
    drawLilyFlower();
    drawPinkFlower();
    drawPinkYellowFlower();
    drawPinkYellowFlower02();
    drawSakuraFlower();
    drawWhiteFlower();
    drawBlueFlower();
    drawButtonFlower();

    // DRAW SMISKI
    drawairplaneSmiski();
    drawcatSmiski();
    drawholahoopSmiski();
    drawyogaSmiski();

    // DRAW OTHER
    drawredHearts();
    drawpinkHearts();
    drawheartButtonRed();
    drawdarkGreenBow();
    drawgreenButterfly();
    drawwaxStamp();
    drawlightGreenBow();
    // drawStars();
  
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
        
      // LOADING PINK STAR
      } else if (
      menuState === "starSelection01" &&
      mouseX >= 110.1640625 && 
      mouseX <= 142.30078125 && 
      mouseY >= 254.60546875 && 
      mouseY <= 278.71484375) {
        showPinkStar = true;
      } 
      // LOADING RED STAR  
      else if (
        menuState === "starSelection01" &&
        mouseX >= 110.1640625  && 
        mouseX <= 142.30078125  && 
        mouseY >= 299.73046875 && 
        mouseY <= 323.86328125) {
          showRedStar = true;
        }
      // LOADING LIGHT PINK STAR
      else if (
        menuState === "starSelection01" &&
        mouseX >= 110.1640625  && 
        mouseX <= 142.30078125  && 
        mouseY >= 341.54296875 && 
        mouseY <= 368.15625) {
          showLightPinkStar = true;
        }

        // LOADING BLUE STAR
        else if (
          menuState === "starSelection01" &&
          mouseX >= 110.1640625  && 
          mouseX <= 142.30078125  && 
          mouseY >= 389.82421875 && 
          mouseY <= 414.74609375) {
            showBlueStar = true;
          }

        // MAKING PINK STAR DRAGGABLE
        if (
        showPinkStar &&
        mouseX >= pinkStarX && 
        mouseX <= pinkStarX + pinkStarWidth &&
        mouseY >= pinkStarY && 
        mouseY <= pinkStarY + pinkStarHeight
      ) {
          dragging = true;
          draggingAsset = "pinkStar";
          offsetX = mouseX - pinkStarX;
          offsetY = mouseY - pinkStarY;
        }

      // MAKING LIGHT PINK STAR DRAGGABLE
        if (
        showLightPinkStar &&
        mouseX >= lightPinkStarX && 
        mouseX <= lightPinkStarX + lightPinkStarWidth &&
        mouseY >= lightPinkStarY && 
        mouseY <= lightPinkStarY + lightPinkStarHeight
      ) {
          dragging = true;
          draggingAsset = "lightPinkStar";
          offsetX = mouseX - lightPinkStarX;
          offsetY = mouseY - lightPinkStarY;
        }

        // MAKING RED STAR DRAGGABLE
        else if (
          showRedStar &&
          mouseX >= redStarX && 
          mouseX <= redStarX + redStarWidth &&
          mouseY >= redStarY && 
          mouseY <= redStarY + redStarHeight
        ) {
            dragging = true;
            draggingAsset = "redStar";
            offsetX = mouseX - redStarX;
            offsetY = mouseY - redStarY;
          }
        
          // MAKING BLUE STAR DRAGGABLE
          else if (
            showBlueStar &&
            mouseX >= blueStarX && 
            mouseX <= blueStarX + blueStarWidth &&
            mouseY >= blueStarY && 
            mouseY <= blueStarY + blueStarHeight
          ) {
              dragging = true;
              draggingAsset = "blueStar";
              offsetX = mouseX - blueStarX;
              offsetY = mouseY - blueStarY;
            }

          



    // FLOWERS
      
    if (
      mouseX >= 0 &&
      mouseX <= 100.40234375 &&
      mouseY >= 298.82 &&
      mouseY <= 332.02
    ) {
      menuState = "flowerSelection01";
    }
    // LOADING FLOWERS
      // SELECTING FLOWERS FROM FIRST FLOWER SELECTION MENU
        
        // LOADING PINK YELLOW FLOWER
        if (
          menuState === "flowerSelection01" &&
          mouseX >= 110.1640625  && 
          mouseX <= 142.30078125  && 
          mouseY >= 247.80078125 && 
          mouseY <= 271.08984375) {
            showPinkYellowFlower = true;
          }

          // LOADING BLUE FLOWER
          else if (
            menuState === "flowerSelection01" &&
            mouseX >= 117.0703125  && 
            mouseX <= 137.3359375  && 
            mouseY >= 283.30859375 && 
            mouseY <= 303.81640625) {
              showBlueFlower = true;
            }
        // LOADING SAKURA FLOWER
        else if (
          menuState === "flowerSelection01" &&
          mouseX >= 116.98046875  && 
          mouseX <= 140.22265625  && 
          mouseY >= 314.68359375 && 
          mouseY <= 341.01171875) {
            showSakuraFlower = true;
          }
          // LOADING LIGHT PINK FLOWER
       else if (
        menuState === "flowerSelection01" &&
        mouseX >= 114.04296875 && 
        mouseX <= 138.578125 && 
        mouseY >= 348.96484375&& 
        mouseY <= 370.23046875) {
          showlightPinkFlower = true;
        }
          // LOADING BUTTON FLOWER
          else if (
            menuState === "flowerSelection01" &&
            mouseX >= 114.5625  && 
            mouseX <= 141.109375  && 
            mouseY >= 378.8125 && 
            mouseY <= 402.3125) {
              showButtonFlower = true;
            }

        // LOADING LILY FLOWER
        else if (
          menuState === "flowerSelection01" &&
          mouseX >= 113.64453125   && 
          mouseX <= 137.91015625  && 
          mouseY >= 412.8515625 && 
          mouseY <= 431.89453125) {
            showLilyFlower = true;
          }

      // SELECTING FLOWERS FROM SECOND FLOWER SELECTION MENU
        // LOADING WHITE FLOWER
        else if (
          menuState === "flowerSelection02" &&
          mouseX >= 110.1640625  && 
          mouseX <= 258.9609375  && 
          mouseY >= 249.8671875 && 
          mouseY <= 269.18359375) {
            showWhiteFlower = true;
          }

          // LOADING PINK FLOWER
        else if (
          menuState === "flowerSelection02" &&
          mouseX >= 116.37109375  && 
          mouseX <= 139.015625  && 
          mouseY >= 282.01171875 && 
          mouseY <= 302.83984375) {
            showPinkFlower = true;
          }

          // LOADING PINK YELLOW FLOWER 02
        else if (
          menuState === "flowerSelection02" &&
          mouseX >= 113.7890625  && 
          mouseX <= 142.30078125  && 
          mouseY >= 321.53515625 && 
          mouseY <= 343.484375) {
            showPinkYellowFlower02 = true;
          }

          // MAKING FLOWERS DRAGGABLE
            // MAKING LIGHT PINK FLOWER DRAGGABLE
            if (
              showlightPinkFlower &&
              mouseX >= lightPinkFlowerX && 
              mouseX <= lightPinkFlowerX + lightPinkFlowerWidth &&
              mouseY >= lightPinkFlowerY && 
              mouseY <= lightPinkFlowerY + lightPinkFlowerHeight
            ) {
                dragging = true;
                draggingAsset = "lightPinkFlower";
                offsetX = mouseX - lightPinkFlowerX;
                offsetY = mouseY - lightPinkFlowerY;
              }

            // MAKING LILY FLOWER DRAGGABLE
            else if (
              showLilyFlower &&
              mouseX >= LilyFlowerX && 
              mouseX <= LilyFlowerX + LilyFlowerWidth &&
              mouseY >= LilyFlowerY && 
              mouseY <= LilyFlowerY + LilyFlowerHeight
            ) {
                dragging = true;
                draggingAsset = "LilyFlower";
                offsetX = mouseX - LilyFlowerX;
                offsetY = mouseY - LilyFlowerY;
              }

            // MAKING PINK FLOWER DRAGGABLE
            else if (
              showPinkFlower &&
              mouseX >= PinkFlowerX && 
              mouseX <= PinkFlowerX + PinkFlowerWidth &&
              mouseY >= PinkFlowerY && 
              mouseY <= PinkFlowerY + PinkFlowerHeight
            ) {
                dragging = true;
                draggingAsset = "PinkFlower";
                offsetX = mouseX - PinkFlowerX;
                offsetY = mouseY - PinkFlowerY;
              } 
            // MAKING PINK YELLOW FLOWER DRAGGABLE
            else if (
              showPinkYellowFlower &&
              mouseX >= pinkYellowFlowerX && 
              mouseX <= pinkYellowFlowerX + pinkYellowFlowerWidth &&
              mouseY >= pinkYellowFlowerY && 
              mouseY <= pinkYellowFlowerY + pinkYellowFlowerHeight
            ) {
                dragging = true;
                draggingAsset = "pinkYellowFlower";
                offsetX = mouseX - pinkYellowFlowerX;
                offsetY = mouseY - pinkYellowFlowerY;
              } 
            // MAKING PINK YELLOW FLOWER 02 DRAGGABLE
            else if (
              showPinkYellowFlower02 &&
              mouseX >= pinkYellowFlower02X && 
              mouseX <= pinkYellowFlower02X + pinkYellowFlower02Width &&
              mouseY >= pinkYellowFlower02Y && 
              mouseY <= pinkYellowFlower02Y + pinkYellowFlower02Height
            ) {
                dragging = true;
                draggingAsset = "pinkYellowFlower02";
                offsetX = mouseX - pinkYellowFlower02X;
                offsetY = mouseY - pinkYellowFlower02Y;
              } 
            // MAKING SAKURA FLOWER DRAGGABLE
            else if (
              showSakuraFlower &&
              mouseX >= sakuraFlowerX && 
              mouseX <= sakuraFlowerX + sakuraFlowerWidth &&
              mouseY >= sakuraFlowerY && 
              mouseY <= sakuraFlowerY + sakuraFlowerHeight
            ) {
                dragging = true;
                draggingAsset = "sakuraFlower";
                offsetX = mouseX - sakuraFlowerX;
                offsetY = mouseY - sakuraFlowerY;
              } 
            // MAKING WHITE FLOWER DRAGGABLE
            if (
                showWhiteFlower &&
                mouseX >= whiteFlowerX &&
                mouseX <= whiteFlowerX + whiteFlowerWidth &&
                mouseY >= whiteFlowerY &&
                mouseY <= whiteFlowerY + whiteFlowerHeight
              ) {
                dragging = true;
                draggingAsset = "whiteFlower";
                offsetX = mouseX - whiteFlowerX;
                offsetY = mouseY - whiteFlowerY;
              }
            // MAKING BLUE FLOWER DRAGGABLE
            else if (
              showBlueFlower &&
              mouseX >= blueFlowerX && 
              mouseX <= blueFlowerX + blueFlowerWidth &&
              mouseY >= blueFlowerY && 
              mouseY <= blueFlowerY + blueFlowerHeight
            ) {
                dragging = true;
                draggingAsset = "blueFlower";
                offsetX = mouseX - blueFlowerX;
                offsetY = mouseY - blueFlowerY;
              } 
            // MAKING BUTTON FLOWER DRAGGABLE
            else if (
              showButtonFlower &&
              mouseX >= buttonFlowerX && 
              mouseX <= buttonFlowerX + buttonFlowerWidth &&
              mouseY >= buttonFlowerY && 
              mouseY <= buttonFlowerY + buttonFlowerHeight
            ) {
                dragging = true;
                draggingAsset = "buttonFlower";
                offsetX = mouseX - buttonFlowerX;
                offsetY = mouseY - buttonFlowerY;
              } 

    // SMISKIS
    if (
      mouseX >= 0 &&
      mouseX <= 99.703125 &&
      mouseY >= 335.625 &&
      mouseY <= 371.3984375
    ) {
      menuState = "smiskiSelection";
    }
    // LOAD SMISKIS
    else if (
          menuState === "smiskiSelection" &&
          mouseX >= 116.3125   && 
          mouseX <= 133.4453125  && 
          mouseY >= 398.38671875 && 
          mouseY <= 432.5625) {
            showairplaneSmiski = true;
          }
    else if (
      menuState === "smiskiSelection" &&
          mouseX >= 121.71875  && 
          mouseX <= 138.08203125  && 
          mouseY >= 294.88671875 && 
          mouseY <= 334.75) {
            showcatSmiski = true;
          }
    else if (
      menuState === "smiskiSelection" &&
          mouseX >= 121.47265625   && 
          mouseX <= 136.91015625  && 
          mouseY >= 343.62890625 && 
          mouseY <= 387.6953125) {
            showholahoopSmiski = true;
          }
          else if (
      menuState === "smiskiSelection" &&
          mouseX >= 116.2109375   && 
          mouseX <= 138.265625  && 
          mouseY >= 248.32421875 && 
          mouseY <= 282.1328125) {
            showyogaSmiski = true;
          }



    // OTHER
    if (
      mouseX >= 0 &&
      mouseX <= 99.703125 &&
      mouseY >= 372.60546875 &&
      mouseY <= 404.04296875
    ) {
      menuState = "otherSelection01";
    }
    else if (
      menuState === "otherSelection01" &&
          mouseX >= 115.1640625   && 
          mouseX <= 140.2890625  && 
          mouseY >= 242.7265625 && 
          mouseY <= 263.53125) {
            showredHearts = true;
          }
    else if (
      menuState === "otherSelection01" &&
          mouseX >= 117.63671875   && 
          mouseX <= 138.26171875  && 
          mouseY >= 272.54296875 && 
          mouseY <= 293.203125) {
            showpinkHearts = true;
          }
    else if (
      menuState === "otherSelection01" &&
          mouseX >= 118.0703125   && 
          mouseX <= 138.08984375  && 
          mouseY >= 327.5546875 && 
          mouseY <= 350.45703125) {
            showdarkGreenBow = true;
          }
    else if (
      menuState === "otherSelection01" &&
          mouseX >= 114.625  && 
          mouseX <= 139.2421875  && 
          mouseY >= 361.56640625 && 
          mouseY <= 383.80078125) {
            showgreenButterfly = true;
          }   
    else if (
      menuState === "otherSelection01" &&
          mouseX >= 120.6171875   && 
          mouseX <= 137.875  && 
          mouseY >= 392.08984375 && 
          mouseY <= 410.1328125) {
            showwaxStamp = true;
          }    
    else if (
      menuState === "otherSelection01" &&
          mouseX >= 116.9375   && 
          mouseX <= 137.875  && 
          mouseY >= 300.21875 && 
          mouseY <= 321.05078125) {
            showheartButtonRed = true;
          }    
    else if (
      menuState === "otherSelection01" &&
          mouseX >= 117.21875   && 
          mouseX <= 139.9609375  && 
          mouseY >= 415.50390625 && 
          mouseY <= 429.61328125) {
            showlightGreenBow = true;
          }    


    // DOWN ARROW
    if (
      mouseX >= 122.77734375 &&
      mouseX <= 139.8359375 &&
      mouseY >= 436.28125 &&
      mouseY <= 454.94921875
    ) {
      if (menuState === "flowerSelection01") {
        menuState = "flowerSelection02";
    }
  }
    // UP ARROW
    if (
      mouseX >= 121.6875 &&
      mouseX <= 137.734375 &&
      mouseY >= 228.34375 &&
      mouseY <= 242.93359375
    ) {
      if (menuState === "flowerSelection02") {
        menuState = "flowerSelection01";
      }
    }

    // MAKING SMISKIS DRAGGABLE
          if (
        showairplaneSmiski &&
        mouseX >= airplaneSmiskiX &&
        mouseX <= airplaneSmiskiX + airplaneSmiskiWidth &&
        mouseY >= airplaneSmiskiY &&
        mouseY <= airplaneSmiskiY + airplaneSmiskiHeight
      ) {
        dragging = true;
        draggingAsset = "airplaneSmiski";
        offsetX = mouseX - airplaneSmiskiX;
        offsetY = mouseY - airplaneSmiskiY;
      }

      else if (
        showcatSmiski &&
        mouseX >= catSmiskiX &&
        mouseX <= catSmiskiX + catSmiskiWidth &&
        mouseY >= catSmiskiY &&
        mouseY <= catSmiskiY + catSmiskiHeight
      ) {
        dragging = true;
        draggingAsset = "catSmiski";
        offsetX = mouseX - catSmiskiX;
        offsetY = mouseY - catSmiskiY;
      }

      else if (
        showholahoopSmiski &&
        mouseX >= holahoopSmiskiX &&
        mouseX <= holahoopSmiskiX + holahoopSmiskiWidth &&
        mouseY >= holahoopSmiskiY &&
        mouseY <= holahoopSmiskiY + holahoopSmiskiHeight
      ) {
        dragging = true;
        draggingAsset = "holahoopSmiski";
        offsetX = mouseX - holahoopSmiskiX;
        offsetY = mouseY - holahoopSmiskiY;
      }

      else if (
        showyogaSmiski &&
        mouseX >= yogaSmiskiX &&
        mouseX <= yogaSmiskiX + yogaSmiskiWidth &&
        mouseY >= yogaSmiskiY &&
        mouseY <= yogaSmiskiY + yogaSmiskiHeight
      ) {
        dragging = true;
        draggingAsset = "yogaSmiski";
        offsetX = mouseX - yogaSmiskiX;
        offsetY = mouseY - yogaSmiskiY;
      }

      // MAKING OTHER DRAGGABLE
        if (
          showredHearts &&
          mouseX >= redHeartsX &&
          mouseX <= redHeartsX + redHeartsWidth &&
          mouseY >= redHeartsY &&
          mouseY <= redHeartsY + redHeartsHeight
        ) {
          dragging = true;
          draggingAsset = "redHearts";
          offsetX = mouseX - redHeartsX;
          offsetY = mouseY - redHeartsY;
        }

        else if (
          showpinkHearts &&
          mouseX >= pinkHeartsX &&
          mouseX <= pinkHeartsX + pinkHeartsWidth &&
          mouseY >= pinkHeartsY &&
          mouseY <= pinkHeartsY + pinkHeartsHeight
        ) {
          dragging = true;
          draggingAsset = "pinkHearts";
          offsetX = mouseX - pinkHeartsX;
          offsetY = mouseY - pinkHeartsY;
        }

        else if (
          showheartButtonRed &&
          mouseX >= heartButtonRedX &&
          mouseX <= heartButtonRedX + heartButtonRedWidth &&
          mouseY >= heartButtonRedY &&
          mouseY <= heartButtonRedY + heartButtonRedHeight
        ) {
          dragging = true;
          draggingAsset = "heartButtonRed";
          offsetX = mouseX - heartButtonRedX;
          offsetY = mouseY - heartButtonRedY;
        }

        else if (
          showdarkGreenBow &&
          mouseX >= darkGreenBowX &&
          mouseX <= darkGreenBowX + darkGreenBowWidth &&
          mouseY >= darkGreenBowY &&
          mouseY <= darkGreenBowY + darkGreenBowHeight
        ) {
          dragging = true;
          draggingAsset = "darkGreenBow";
          offsetX = mouseX - darkGreenBowX;
          offsetY = mouseY - darkGreenBowY;
        }

        else if (
          showgreenButterfly &&
          mouseX >= greenButterflyX &&
          mouseX <= greenButterflyX + greenButterflyWidth &&
          mouseY >= greenButterflyY &&
          mouseY <= greenButterflyY + greenButterflyHeight
        ) {
          dragging = true;
          draggingAsset = "greenButterfly";
          offsetX = mouseX - greenButterflyX;
          offsetY = mouseY - greenButterflyY;
        }

        else if (
          showwaxStamp &&
          mouseX >= waxStampX &&
          mouseX <= waxStampX + waxStampWidth &&
          mouseY >= waxStampY &&
          mouseY <= waxStampY + waxStampHeight
        ) {
          dragging = true;
          draggingAsset = "waxStamp";
          offsetX = mouseX - waxStampX;
          offsetY = mouseY - waxStampY;
        }

        else if (
          showlightGreenBow &&
          mouseX >= lightGreenBowX &&
          mouseX <= lightGreenBowX + lightGreenBowWidth &&
          mouseY >= lightGreenBowY &&
          mouseY <= lightGreenBowY + lightGreenBowHeight
        ) {
          dragging = true;
          draggingAsset = "lightGreenBow";
          offsetX = mouseX - lightGreenBowX;
          offsetY = mouseY - lightGreenBowY;
        }
      } 
    }

  function mouseDragged() {
    if (dragging) {
      // DRAGGING STARS
      if (draggingAsset === "pinkStar") {
        pinkStarX = mouseX - offsetX;
        pinkStarY = mouseY - offsetY;
      } 
      if (draggingAsset === "redStar") {
        redStarX = mouseX - offsetX;
        redStarY = mouseY - offsetY;
      }
      if (draggingAsset === "lightPinkStar") {
        lightPinkStarX = mouseX - offsetX;
        lightPinkStarY = mouseY - offsetY;
      }
      if (draggingAsset === "blueStar") {
        blueStarX = mouseX - offsetX;
        blueStarY = mouseY - offsetY;
      }

      // DRAGGING FLOWERS
      if (draggingAsset === "PinkFlower") {
        PinkFlowerX = mouseX - offsetX;
        PinkFlowerY = mouseY - offsetY;
      }
      if (draggingAsset === "LilyFlower") {
        LilyFlowerX = mouseX - offsetX;
        LilyFlowerY = mouseY - offsetY;
      }
      if (draggingAsset === "lightPinkFlower") {
        lightPinkFlowerX = mouseX - offsetX;
        lightPinkFlowerY = mouseY - offsetY;
      }
      if (draggingAsset === "pinkYellowFlower") {
        pinkYellowFlowerX = mouseX - offsetX;
        pinkYellowFlowerY = mouseY - offsetY;
      }
      if (draggingAsset === "pinkYellowFlower02") {
        pinkYellowFlower02X = mouseX - offsetX;
        pinkYellowFlower02Y = mouseY - offsetY;
      }
      if (draggingAsset === "sakuraFlower") {
        sakuraFlowerX = mouseX - offsetX;
        sakuraFlowerY = mouseY - offsetY;
      }
      if (draggingAsset === "whiteFlower") {
        whiteFlowerX = mouseX - offsetX;
        whiteFlowerY = mouseY - offsetY;
      }
      if (draggingAsset === "blueFlower") {
        blueFlowerX = mouseX - offsetX;
        blueFlowerY = mouseY - offsetY;
      }
      if (draggingAsset === "buttonFlower") {
        buttonFlowerX = mouseX - offsetX;
        buttonFlowerY = mouseY - offsetY;
      }
      // DRAGGING SMISKIS
      if (draggingAsset === "airplaneSmiski") {
        airplaneSmiskiX = mouseX - offsetX;
        airplaneSmiskiY = mouseY - offsetY;
      }
      if (draggingAsset === "catSmiski") {
        catSmiskiX = mouseX - offsetX;
        catSmiskiY = mouseY - offsetY;
      }
      if (draggingAsset === "yogaSmiski") {
        yogaSmiskiX = mouseX - offsetX;
        yogaSmiskiY = mouseY - offsetY;
      }
      if (draggingAsset === "holahoopSmiski") {
        holahoopSmiskiX = mouseX - offsetX;
        holahoopSmiskiY = mouseY - offsetY;
      }
      
      // DRAGGING OTHER
      if (draggingAsset === "redHearts") {
        redHeartsX = mouseX - offsetX;
        redHeartsY = mouseY - offsetY;
      }
      if (draggingAsset === "pinkHearts") {
        pinkHeartsX = mouseX - offsetX;
        pinkHeartsY = mouseY - offsetY;
      }
      if (draggingAsset === "heartButtonRed") {
        heartButtonRedX = mouseX - offsetX;
        heartButtonRedY = mouseY - offsetY;
      }
      if (draggingAsset === "darkGreenBow") {
        darkGreenBowX = mouseX - offsetX;
        darkGreenBowY = mouseY - offsetY;
      }
      if (draggingAsset === "greenButterfly") {
        greenButterflyX = mouseX - offsetX;
        greenButterflyY = mouseY - offsetY;
      }
      if (draggingAsset === "waxStamp") {
        waxStampX = mouseX - offsetX;
        waxStampY = mouseY - offsetY;
      }
      if (draggingAsset === "lightGreenBow") {
        lightGreenBowX = mouseX - offsetX;
        lightGreenBowY = mouseY - offsetY;
    }
   }
  }
     
  
  function mouseReleased() {
    dragging = false;
    draggingAsset = null;
  }