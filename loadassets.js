//loadassets.js
// MENU SELECTION FILES
let firstSelection = {
  file: null,
};

let starSelection01 = {
  file: null,
}

let flowerSelection01 = {
  file: null,
}

let flowerSelection02 = {
  file: null,
}

let smiskiSelection = {
  file: null,
}

let otherSelection01 = {
  file: null,
}

let otherSelection02 = {
  file: null,
}


// STAR SELECTION FILES
let pinkStar = {
  file: null,
} 

let redStar = {
  file: null,
}

let lightPinkStar = {
  file: null,
}

let blueStar = {
  file: null,
}

// FLOWER SELECTION FILES
let lightPinkFlower = {
  file: null,
}

let LilyFlower = {
  file: null,
}

let PinkFlower = {
  file: null,
}

let pinkYellowFlower = {
  file: null,
}

let pinkYellowFlower02 = {
  file: null,
}

let sakuraFlower = {
  file: null,
}

let whiteFlower = {
  file: null,
}
let blueFlower = {
  file: null,
}

let buttonFlower = {
  file: null,
}

// SMISKI FILE LOAD
let airplaneSmiski = {
  file: null,
}

let catSmiski = {
  file: null,
}

let holahoopSmiski = {
  file: null,
}

let yogaSmiski = {
  file: null,
}

// OTHER FILE UPLOAD
let redHearts = {
  file: null,
}

let pinkHearts = {
  file: null,
}

let heartButtonRed = {
  file: null,
}

let darkGreenBow = {
  file: null,
}

let greenButterfly = {
  file: null,
}

let waxStamp = {
  file: null,
}

let lightGreenBow = {
  file: null,
}

async function loadAssets() {
  //  MENU SELECTION PHOTOS
  firstSelection.file = await loadImage("assets/firstSelection.png");
  starSelection01.file = await loadImage("assets/starSelection01.png");
  flowerSelection01.file = await loadImage("assets/flowerSelection01.png");
  flowerSelection02.file = await loadImage("assets/flowerSelection02.png");
  smiskiSelection.file = await loadImage("assets/smiskiSelection.png");
  otherSelection01.file = await loadImage("assets/otherSelection01.png");
  otherSelection02.file = await loadImage("assets/otherSelection02.png");

  // STAR SELECTION PHOTOS
  pinkStar.file = await loadImage("assets/pinkStar.png");
  redStar.file = await loadImage("assets/redStar.png");
  lightPinkStar.file = await loadImage("assets/lightPinkStar.png");
  blueStar.file = await loadImage("assets/blueStar.png");

  //FLOWER SELECTION PHOTOS
  lightPinkFlower.file = await loadImage("assets/lightPinkFlower.png");
  LilyFlower.file = await loadImage("assets/LilyFlower.png");
  PinkFlower.file = await loadImage("assets/PinkFlower.png");
  pinkYellowFlower.file = await loadImage("assets/pinkYellowFlower.png");
  pinkYellowFlower02.file = await loadImage("assets/pinkYellowFlower02.png");
  sakuraFlower.file = await loadImage("assets/sakuraFlower.png");
  whiteFlower.file = await loadImage("assets/whiteFlower.png");
  blueFlower.file = await loadImage("assets/blueFlower.png");
  buttonFlower.file = await loadImage("assets/buttonFlower.png");

  //SMISKI SELECTION PHOTOS
  airplaneSmiski.file = await loadImage("assets/airplaneSmiski.png");
  catSmiski.file = await loadImage("assets/catSmiski.png");
  holahoopSmiski.file = await loadImage("assets/holahoopSmiski.png")
  yogaSmiski.file = await loadImage("assets/yogaSmiski.png")

  // OTHER SELECTION PHOTOS
  redHearts.file = await loadImage("assets/redHearts.png");
  pinkHearts.file = await loadImage("assets/pinkHearts.png");
  heartButtonRed.file = await loadImage("assets/heartButtonRed.png")
  darkGreenBow.file = await loadImage("assets/darkGreenBow.png")
  greenButterfly.file = await loadImage("assets/greenButterfly.png")
  waxStamp.file = await loadImage("assets/waxStamp.png")
  lightGreenBow.file = await loadImage("assets/lightGreenBow.png")
}




