let var1; //Declaring
var1 = 12; //assigning
let var2 = 20; //Declaring & assigning


//function with params & loop
function myFunction(param){
    for (let i = 0; i < param; i++) {
        console.log("params");
    }
}

//function without params & loop
function myOtherFunction(){
    
}


//calling variables
myFunction(4);
myOtherFunction();

let space = 30;

let xOffset = 40;
let yOffset = 50;

let numSquares = 7;
let squareHeight = 20;
let squareWidth = 15;

function setup(){
    createCanvas(500,500);
    background(100);
}

function draw(){
    drawBoxes();
}

