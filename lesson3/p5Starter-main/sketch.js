//Bar chart using loops and translations!

let data = [345,30,300,288,80,180];
let sortedData;
let colors;
let margin = 30;
let spacing = 15;
let chartWidth = 400;
let chartHeight = 400;
//Bimdas 
let remainingSpace = chartWidth - (margin*2) - (spacing * (data.length-1));

let barWidth  = remainingSpace/data.length;

console.log(barWidth);

function setup(){
    createCanvas(500,500);
    background(0);
    colors = [color('blue'),color('orange'),color('cyan')]
    sort(data)
}

function draw(){
    background(120);
    
    translate(50,450);
    //y Axis
    strokeWeight(1);
    line(0,0,0,-400);
    //x Axis
    strokeWeight(1);
    line(0,0,400,0);

    translate(margin,0);
    drawBars();
}

function drawBars(){
    for (let i = 0; i < data.length; i++) {
        fill(colors[i%colors.length]);
        strokeWeight(0);
        rect(i*(barWidth+spacing),0,barWidth,-data[i]);        
    }
}
