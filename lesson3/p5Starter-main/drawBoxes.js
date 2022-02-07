function drawBoxes(){
    fill(255,0,0);
    noStroke();
    for (let i = 0; i < numSquares; i++) {
        rect(i*space + xOffset,yOffset,squareWidth,squareHeight);
        
    }
}

function drawGrid(numY,numX){
    stroke(0);
    let spacingX = width/numX;
    let spacingY = height/numY;
    for (let j = 0; j < numY; j++) {
        for (let i = 0; i < numX; i++) {
        rect(i*spacingX,j*spacingY,spacingX,spacingY)
        }
    }
}