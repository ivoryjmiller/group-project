
let blueStar = {
    file: null,
    }
let greenStar = {
    file: null,
    }
let lightPinkStar = {
    file: null,
    }
let pinkStar = {
    file: null,
    }
let redStar = {
    file: null,
    }
let yellowStar = {
    file: null,
    }
let multicolorStar = {
    file: null,
    }

async function loadStars() {
    blueStar.file = await loadImage("assets/blueStar.png");
    greenStar.file = await loadImage("assets/greenStar.png");
    lightPinkStar.file = await loadImage("assets/lightPinkStar.png");
    pinkStar.file = await loadImage("assets/pinkStar.png");
    redStar.file = await loadImage("assets/redStar.png");
    yellowStar.file = await loadImage("assets/yellowStar.png");
    multicolorStar.file = await loadImage("assets/multicolorStar.png");   
}
