const body = document.querySelector("body");

const IMG_NUMBER = 7;

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage")
    body.appendChild(image);
}

function genRandom() {
    // floor 버림, ceil 올림, random * O = 범위지정 
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();