
let arrowPointingDown = {
  file: null,
};

let arrowPointingUp = {
  file: null,
}

async function drawArrows() {
  arrowPointingDown.file = await loadImage("./_menuArrows/arrowPointingDown.png");
  arrowPointingUp.file = await loadImage("./_menuArrows/arrowPointingUp.png");
}