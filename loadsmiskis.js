let airplaneSmiskiX = 450
let airplaneSmiskiY = 240
let airplaneSmiskiWidth = 62.5
let airplaneSmiskiHeight = 62.5

let catSmiskiX = 450
let catSmiskiY = 240
let catSmiskiWidth = 62.5
let catSmiskiHeight = 62.5

let holahoopSmiskiX = 450
let holahoopSmiskiY = 240
let holahoopSmiskiWidth = 62.5
let holahoopSmiskiHeight = 62.5

let yogaSmiskiX = 450
let yogaSmiskiY = 240
let yogaSmiskiWidth = 62.5
let yogaSmiskiHeight = 62.5

function drawairplaneSmiski() {
    if (showairplaneSmiski) {
        image(airplaneSmiski.file, airplaneSmiskiX, airplaneSmiskiY, airplaneSmiskiWidth, airplaneSmiskiHeight);
    }
}

function drawcatSmiski() {
    if (showcatSmiski) {
        image(catSmiski.file, catSmiskiX, catSmiskiY, catSmiskiWidth, catSmiskiHeight);
    }
}

function drawholahoopSmiski() {
    if (showholahoopSmiski) {
        image(holahoopSmiski.file, holahoopSmiskiX, holahoopSmiskiY, holahoopSmiskiWidth, holahoopSmiskiHeight);
    }
}

function drawyogaSmiski() {
    if(showyogaSmiski) {
        image(yogaSmiski.file, yogaSmiskiX, yogaSmiskiY, yogaSmiskiWidth, yogaSmiskiHeight);
    }
}