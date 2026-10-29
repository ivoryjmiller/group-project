
  let arrowPointingDown = {
  file: null,
};

let arrowPointingUp = {
  file: null,
}

async function loadArrows() {
  arrowPointingDown.file = await loadImage("assets/arrowPointingDown.png");
  arrowPointingUp.file = await loadImage("assets/arrowPointingUp.png");
}
