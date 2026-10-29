//loadassets.js

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

async function loadAssets() {
  firstSelection.file = await loadImage("assets/firstSelection.png");
  starSelection01.file = await loadImage("assets/starSelection01.png");
  flowerSelection01.file = await loadImage("assets/flowerSelection01.png");
  flowerSelection02.file = await loadImage("assets/flowerSelection02.png");
  smiskiSelection.file = await loadImage("assets/smiskiSelection.png");
  otherSelection01.file = await loadImage("assets/otherSelection01.png");
  otherSelection02.file = await loadImage("assets/otherSelection02.png");
}




