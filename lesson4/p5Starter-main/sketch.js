//Bar chart using loops and translations!

let data = [1200,8600,2200,3100,2200,250,10];
let scalledData = [];
let maxValue;

let sortData = true;
let sortedData;
let colors;
let margin = 30;
let spacing = 15;
let chartWidth = 400;
let chartHeight = 400;
//Remember bimdas for expressions 
let remainingSpace = chartWidth - (margin*2) - (spacing * (data.length-1));
let barWidth  = remainingSpace/data.length;

//Variables for ticks
let numTicks = 10;
let tickLength = 5;
let tickSpace = chartHeight/numTicks;
let tickIncrement = chartHeight/numTicks;


function setup(){
    createCanvas(500,500);
    background(0);
    colors = [color('blue'),color('orange'),color('cyan')];
    if(sortData == true){
        sort(data)
    }
    maxValue=max(data);
    for (let i = 0; i < data.length; i++) {
        let newValue = map(data[i], 0,maxValue,0,chartHeight);
        scalledData.push(newValue);
        
    }
}

function draw(){
    background(120);

    push();
    translate(50,450);
    textSize(12);
    textAlign(RIGHT,CENTER);

    //y Axis
    strokeWeight(1);
    line(0,0,0,-chartWidth);
    //x Axis
    strokeWeight(1);
    line(0,0,chartWidth,0);

    //Draw some ticks
    // line(0,0,-tickLength,0);
    // line(0,-10,-tickLength,-10);
    // line(0,-20,-tickLength,-20);
    // line(0,-30,-tickLength,-30);
    drawTicks();
    translate(margin,0);
    drawBars();
    pop();
}

function drawBars(){
    for (let i = 0; i < scalledData.length; i++) {
        fill(colors[i%colors.length]);
        strokeWeight(0);
        rect(i*(barWidth+spacing),0,barWidth,-scalledData[i]);        
    }
}

function drawTicks(){
    for (let i = 0; i <= numTicks; i++) {
        stroke(0);
        strokeWeight(1);
        line(0,i*-tickSpace,-tickLength,i*-tickSpace);
        
        noStroke();
        fill(0);
        text(i*tickIncrement,-10,-i *tickSpace);     
    }
}