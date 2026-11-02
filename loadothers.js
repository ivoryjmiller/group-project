let redHeartsX = 450
let redHeartsY = 240
let redHeartsWidth = 62.5
let redHeartsHeight = 62.5

let pinkHeartsX = 450
let pinkHeartsY = 240
let pinkHeartsWidth = 62.5
let pinkHeartsHeight = 62.5

let heartButtonRedX = 450
let heartButtonRedY = 240
let heartButtonRedWidth = 71.85
let heartButtonRedHeight = 70

let darkGreenBowX = 450
let darkGreenBowY = 240
let darkGreenBowWidth = 62.5
let darkGreenBowHeight = 62.5

let greenButterflyX = 450
let greenButterflyY = 240
let greenButterflyWidth = 73.14
let greenButterflyHeight = 70

let waxStampX = 450
let waxStampY = 240
let waxStampWidth = 62.5
let waxStampHeight = 62.5

let lightGreenBowX = 450
let lightGreenBowY = 240
let lightGreenBowWidth = 62.5
let lightGreenBowHeight = 62.5


async function drawredHearts() {
   if (showredHearts) {
        image(redHearts.file, redHeartsX, redHeartsY, redHeartsWidth, redHeartsHeight);
   }
}

async function drawpinkHearts() {
    if (showpinkHearts) {
        image(pinkHearts.file, pinkHeartsX, pinkHeartsY, pinkHeartsWidth, pinkHeartsHeight);
    }
}

async function drawheartButtonRed() {
    if (showheartButtonRed) {
        image(heartButtonRed.file, heartButtonRedX, heartButtonRedY, heartButtonRedWidth, heartButtonRedHeight);
    }
}

async function drawdarkGreenBow() {
    if (showdarkGreenBow) {
        image(darkGreenBow.file, darkGreenBowX, darkGreenBowY, darkGreenBowWidth, darkGreenBowHeight);
    }
}

async function drawgreenButterfly() {
    if (showgreenButterfly) {
        image(greenButterfly.file, greenButterflyX, greenButterflyY, greenButterflyWidth, greenButterflyHeight);
    }
}

async function drawwaxStamp() {
    if (showwaxStamp) {
        image(waxStamp.file, waxStampX, waxStampY, waxStampWidth, waxStampHeight)
    }
}

async function drawlightGreenBow() {
    if (showlightGreenBow) {
        image(lightGreenBow.file, lightGreenBowX, lightGreenBowY, lightGreenBowWidth, lightGreenBowHeight);
    }
}