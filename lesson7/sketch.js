//Bar chart using loops and translations!

//To access an element in an array use the array name and the index number to access the properties of the object use dot notation
let data = [
    { value: 32, label: "Oranges" },
    { value: 22, label: "Apples" },
    { value: 43, label: "Bananas" },
    { value: 16, label: "Pears" }
];

let data2 = [
    { value: 232, label: "Oranges" },
    { value: 222, label: "Apples" },
    { value: 432, label: "Bananas" },
    { value: 162, label: "Pears" }
];

let colors;
let barChart01;
let barChart02;

function setup() {
    createCanvas(1000, 950);
    colors = [color('#F3646A'), color('#F68F6A'), color('#FAB666'), color('#FFE066')];
    barChart01 = new BarChart(data);
    barChart02 = new BarChart(data2);
}

function draw() {
    background(50);
    barChart01.render();
    barChart01.updateVals();
    barChart02.render();
    barChart02.updateVals();
    barChart02.posX = 550;
}