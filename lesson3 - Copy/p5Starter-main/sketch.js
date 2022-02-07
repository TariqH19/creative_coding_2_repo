let data = [40,400,300,180];
let colors;
let margin = 20;
let spacing = 15;
let chartWidth = 400;
let chartHeight = 400;

let remainingSpace = chartWidth - (margin*2) - (spacing*(data.length-1));
let barWidth = remainingSpace/data.length;


function setup(){
    createCanvas(500,500);
    background(0);
    colors = [color('blue'),color('red'),color('magenta')];
    sort(data);
}

function draw(){
    background(100);
    strokeWeight(1);
    translate(50,450);
    line(0,0,0,-400);
    line(0,0,400,0)
    translate(margin,0);
    drawBars();
}

function drawBars(){
    for (let i = 0; i < data.length; i++) {
        fill(colors[i%colors.length]);
        rect(i*(barWidth+spacing),0,barWidth,-data[i]);
        
    }
}