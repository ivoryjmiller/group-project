let topColor = "#963bc4";
let middleColor = "#ff598f";
let bottomColor = "#ffb347";

let sunX = 250;
let sunY = 155;

function drawSky() {
  let skyTop = color(topColor);
  let skyMiddle = color(middleColor);
  let skyBottom = color(bottomColor);

  noStroke();

  for (let y = 0; y < 500; y += 4) {
    let skyColor;

    if (y < 220) {
      skyColor = lerpColor(skyTop, skyMiddle, y / 220);
    } else {
      skyColor = lerpColor(
        skyMiddle,
        skyBottom,
        (y - 220) / (500 - 220)
      );
    }

    fill(skyColor);
    rect(0, y, 500, 4);
  }
}
function drawSun() {
  sunY = 155 + sin(frameCount * 0.02) * 8;

  noStroke();

  // Glow
  fill(255, 220, 130, 45);
  circle(sunX, sunY, 130);

  // Sun
  fill("#ffd36e");
  circle(sunX, sunY, 90);

  // Eyes
  fill("#7d4935");
  circle(sunX - 15, sunY - 5, 5);
  circle(sunX + 15, sunY - 5, 5);

  // Smile
  noFill();
  stroke("#7d4935");
  strokeWeight(2);
  arc(sunX, sunY + 8, 22, 14, 0, PI);
  noStroke();
}
function drawMountains() {
  noStroke();

  // Back mountains
  fill("#9875a3");
  triangle(0, 470, 100, 340, 260, 470);
  triangle(160, 470, 350, 325, 500, 470);

  // Front mountains
  fill("#59416f");
  triangle(0, 500, 160, 380, 380, 500);
  triangle(200, 500, 440, 370, 500, 500);

  // Ground
  rect(0, 470, 500, 30);
}
function keyPressed() {
    console.log("Key pressed:", key, "Screen:", screen);
  if (screen !== "editor") {
    return;
  }

  if (key === "1") {
    topColor = "#963bc4";
    middleColor = "#ff598f";
    bottomColor = "#ffb347";
  }

  if (key === "2") {
    topColor = "#ff476f";
    middleColor = "#ff922b";
    bottomColor = "#ffe45e";
  }
}

if (key === "3") {
    topColor = "#201b45";
    middleColor = "#70458c";
    bottomColor = "#d98eae";
  }