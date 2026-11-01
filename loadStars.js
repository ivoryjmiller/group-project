// load stars
let pinkStarX = 450
let pinkStarY = 240
let pinkStarWidth = 50
let pinkStarHeight = 50

let redStarX = 550
let redStarY = 240
let redStarWidth = 50
let redStarHeight = 70

let lightPinkStarX = 500
let lightPinkStarY = 300
let lightPinkStarWidth = 50
let lightPinkStarHeight = 50

let blueStarX = 600
let blueStarY = 300
let blueStarWidth = 50
let blueStarHeight = 50

function drawPinkStar() {
    if (showPinkStar) {
        image(pinkStar.file, pinkStarX, pinkStarY, pinkStarWidth, pinkStarHeight);
    }
}

function drawRedStar() {
    if (showRedStar) {
        image(redStar.file, redStarX, redStarY, redStarWidth, redStarHeight);
    }
}

function drawLightPinkStar() {
    if (showLightPinkStar) {
        image(lightPinkStar.file, lightPinkStarX, lightPinkStarY, lightPinkStarWidth, lightPinkStarHeight);
    }
}

function drawBlueStar() {
    if (showBlueStar) {
        image(blueStar.file, blueStarX, blueStarY, blueStarWidth, blueStarHeight);
    }
}
