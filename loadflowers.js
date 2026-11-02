//loadflowers.js
let lightPinkFlowerX = 500
let lightPinkFlowerY = 300
let lightPinkFlowerWidth = 50
let lightPinkFlowerHeight = 50

let LilyFlowerX = 500
let LilyFlowerY = 300
let LilyFlowerWidth = 80
let LilyFlowerHeight = 160

let PinkFlowerX = 500
let PinkFlowerY = 300
let PinkFlowerWidth = 50
let PinkFlowerHeight = 50

let pinkYellowFlowerX = 500
let pinkYellowFlowerY = 300
let pinkYellowFlowerWidth = 50
let pinkYellowFlowerHeight = 50

let pinkYellowFlower02X = 500
let pinkYellowFlower02Y = 300
let pinkYellowFlower02Width = 50
let pinkYellowFlower02Height = 50

let sakuraFlowerX = 500
let sakuraFlowerY = 300
let sakuraFlowerWidth = 50
let sakuraFlowerHeight = 50

let whiteFlowerX = 500
let whiteFlowerY = 300
let whiteFlowerWidth = 50
let whiteFlowerHeight = 50

let blueFlowerX = 500
let blueFlowerY = 300
let blueFlowerWidth = 50
let blueFlowerHeight = 50

let buttonFlowerX = 500
let buttonFlowerY = 300
let buttonFlowerWidth = 50
let buttonFlowerHeight = 50

async function drawLilyFlower() {
    if (showLilyFlower) {
        image(LilyFlower.file, LilyFlowerX, LilyFlowerY, LilyFlowerWidth, LilyFlowerHeight);
    }
}

async function drawPinkFlower() {
    if (showPinkFlower) {
        image(PinkFlower.file, PinkFlowerX, PinkFlowerY, PinkFlowerWidth, PinkFlowerHeight);
    }
}

async function drawlightPinkFlower() {
    if (showlightPinkFlower) {
        image(lightPinkFlower.file, lightPinkFlowerX, lightPinkFlowerY, lightPinkFlowerWidth, lightPinkFlowerHeight);
    }
}

async function drawPinkYellowFlower() {
    if (showPinkYellowFlower) {
        image(pinkYellowFlower.file, pinkYellowFlowerX, pinkYellowFlowerY, pinkYellowFlowerWidth, pinkYellowFlowerHeight);
    }
}

async function drawPinkYellowFlower02() {
    if (showPinkYellowFlower02) {
        image(pinkYellowFlower02.file, pinkYellowFlower02X, pinkYellowFlower02Y, pinkYellowFlower02Width, pinkYellowFlower02Height);
    }
}

async function drawSakuraFlower() {
    if (showSakuraFlower) {
        image(sakuraFlower.file, sakuraFlowerX, sakuraFlowerY, sakuraFlowerWidth, sakuraFlowerHeight);
    }
}

async function drawWhiteFlower() {
    if (showWhiteFlower) {
        image(whiteFlower.file, whiteFlowerX, whiteFlowerY, whiteFlowerWidth, whiteFlowerHeight);
    }
}

async function drawBlueFlower() {
    if (showBlueFlower) {
        image(blueFlower.file, blueFlowerX, blueFlowerY, blueFlowerWidth, blueFlowerHeight);
    }
}

async function drawButtonFlower()  {
    if (showButtonFlower) {
        image(buttonFlower.file, buttonFlowerX, buttonFlowerY, buttonFlowerWidth, buttonFlowerHeight);
    }
}
