//Bar chart using loops and translations!

let data = [345,30,120,390,200,100];
let margin = 20;
let spacing = 15;
let chartWidth = 400;
let chartHeight = 400;
//Bimdas 
let remainingSpace = chartWidth - (margin*2) - (spacing*(data.length-1));

let barWidth  = remainingSpace/data.length;

function setup(){
    createCanvas(500,500);
    background(0);

}

function draw(){
    background(120);
    
    translate(50,450);
    //y Axis
    strokeWeight(3);
    line(0,0,0,-400);
    //x Axis
    strokeWeight(3);
    line(0,0,400,0);

    // rect(20,0,20,-100);
    //rect(55,0,20,-320);
    //rect(90,0,20,-320);
    translate(margin,0);
    drawBars();
}

function drawBars(){
    for (let i = 0; i < data.length; i++) {
        fill(0,255,255);
        strokeWeight(0);
        rect(i*(barWidth+spacing),0,barWidth,-data[i]);        
    }
}
