//Bar chart using loops and translations!

let data = [1200, 8600, 2200, 3100, 2200, 2550, 1000];
//To access an element in an array use the array name and the index number to access the properties of the object use dot notation

let maxValue;


//let sortData = true;
//let sortedData;
let colors;
let margin = 30;
let spacing = 15;
let chartWidth = 400;
let chartHeight = 400;
//Remember bimdas for expressions 
let remainingSpace = chartWidth - (margin * 2) - (spacing * (data.length - 1));
let barWidth = remainingSpace / data.length;

//Variables for ticks
let numTicks = 10;
let tickLength = 5;
let tickSpace = chartHeight / numTicks;
let tickIncrement;


function setup() {
    createCanvas(500, 500);
    background(0);
    colors = [color('#F3646A'), color('#F68F6A'), color('#FAB666'), color('#FFE066')];
    // if (sortData == true) {
    //     sort(data)
    // }

    let listValues = data.map(function(x) { return x.value });
    maxValue = max(listValues);

    tickIncrement = int(maxValue / numTicks);


}

function draw() {
    background(50);

    push();
    translate(posX, posY);
    drawTicks();
    translate(margin, 0);
    drawBars();
    translate(-margin, 0);
    drawAxis();
    pop();
}

function drawAxis() {
    //y Axis
    strokeWeight(1);
    stroke(255);
    line(0, 0, 0, -chartWidth);
    //x Axis
    strokeWeight(1);
    stroke(255);
    line(0, 0, chartWidth, 0);
}

function scaledData(_num) {
    let newValue = map(_num, 0, maxValue, 0, chartHeight);
    return newValue;
}

function drawBars() {


    for (let i = 0; i < data.length; i++) {
        fill(colors[i % colors.length]);
        strokeWeight(0);
        rect(i * (barWidth + spacing), 0, barWidth, scaledData(-data[i].value));

        if (showValues) {
            noStroke();
            fill(255);
            textSize(12);
            textAlign(CENTER, BOTTOM);
            text(data[i].value, i * (barWidth + spacing) + barWidth / 2, scaledData(-data[i].value) - 3);
        }

        if (showLabels) {
            noStroke();
            fill(255);
            textSize(12);
            textAlign(CENTER, BOTTOM);
            text(data[i].label, i * (barWidth + spacing) + barWidth / 2, 25);
        }

    }
}

function drawTicks() {
    textSize(12);
    textAlign(RIGHT, CENTER);
    for (let i = 0; i <= numTicks; i++) {
        stroke(255, 100);
        strokeWeight(1);
        line(0, i * -tickSpace, -tickLength, i * -tickSpace);

        stroke(255, 40);
        strokeWeight(1);
        line(0, i * -tickSpace, chartWidth, i * -tickSpace);

        noStroke();
        fill(255, 100);
        text(i * tickIncrement, -10, -i * tickSpace);
    }
}