function drawBoxes(){
    fill(255,0,0);
    noStroke();
    for (let i = 0; i < numSquares; i++) {
        rect(i*space + xOffset,yOffset,squareWidth,squareHeight);
        
    }
}