//menu.js

let menuState = "firstSelection";

function drawMenu() {
  if (screen === "editor") {
 if (menuState === "firstSelection") {
   image(firstSelection.file, 0, 260, 100, 147);
 } 
  if (menuState === "starSelection01") {
    push();
      image(firstSelection.file, 0, 260, 100, 147);
      image(starSelection01.file, 110, 240, 35, 200);
    pop();
  }
  if (menuState === "flowerSelection01") {
    push();
      image(firstSelection.file, 0, 260, 100, 147);
      image(flowerSelection01.file, 110, 240, 35, 200);
     image(arrowPointingDown.file, 120, 434, 20, 20);
    pop();
  }
  if (menuState === "flowerSelection02") {
    push();
       image(firstSelection.file, 0, 260, 100, 147);
       image(flowerSelection02.file, 110, 240, 35, 200);
      image(arrowPointingUp.file, 118, 225, 20, 20);
    pop();
  }
  if (menuState === "smiskiSelection") {
    push();
      image(firstSelection.file, 0, 260, 100, 147);
      image(smiskiSelection.file, 110, 240, 35, 200);
    pop();
  }  

  if (menuState === "otherSelection01") {
    push();
      image(firstSelection.file, 0, 260, 100, 147);
      image(otherSelection01.file, 110, 240, 35, 200);
    image(arrowPointingDown.file, 120, 434, 20, 20);
    pop();
  }
  if (menuState === "otherSelection02") {
    push();
      image(firstSelection.file, 0, 260, 100, 147);
      image(otherSelection02.file, 110, 240, 35, 200);
    image(arrowPointingUp.file, 118, 225, 20, 20);
    pop();
  }
}
}
