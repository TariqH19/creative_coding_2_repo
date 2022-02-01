let space = 30;

let xOffset = 40;
let yOffset = 50;

let numSquares = 7;
let squareHeight = 20;
let squareWidth = 15;

//These are the variables for the grid
let showGrid = true;

let numX = 10;
let numY = 10;

let rotationValue = 0;

function setup(){
    createCanvas(500,500);
    background(0);
    angleMode(DEGREES);
}

function draw(){
    if (showGrid == true) {
        drawGrid(numX,numY);
    }
    push();
    translate(200,200);
    rotate(rotationValue++);
    fill(255,0,0);
    rect(0,0,50,50);
    pop();
}

