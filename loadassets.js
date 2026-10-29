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
  firstSelection.file = await loadImage("./_selection/firstSelection.png");
  starSelection01.file = await loadImage("./_selection/starSelection01.png");
  flowerSelection01.file = await loadImage("./_selection/flowerSelection01.png");
  flowerSelection02.file = await loadImage("./_selection/flowerSelection02.png");
  smiskiSelection.file = await loadImage("./_selection/smiskiSelection.png");
  otherSelection01.file = await loadImage("./_selection/otherSelection01.png");
  otherSelection02.file = await loadImage("./_selection/otherSelection02.png");
}



