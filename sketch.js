let startbutton;
let screen = "welcome";
let lavender = "#E6D6FA";
let pink = "#F9C7D9";
let peach = "#FFE5BC";

function setup() {
  createCanvas(1000, 650);
  startbutton = createImg("assets/startbutton.png", "start");
  startbutton.position(250, 230);
  startbutton.size(500, 300);
  startbutton.mousePressed(startEditing);
}

function draw() {
  if (screen === "welcome") {
    drawWelcomeScreen();
  } else if (screen === "editor") {
    background("#FFFFFF");
  }
}

function startEditing() {
  startbutton.hide();
  screen = "editor";
}
