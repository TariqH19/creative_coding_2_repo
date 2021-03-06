//Bar chart using loops and translations!

//To access an element in an array use the array name and the index number to access the properties of the object use dot notation
let data = [
    { value: 32, label: "Oranges" },
    { value: 22, label: "Apples" },
    { value: 43, label: "Bananas" },
    { value: 16, label: "Pears" }
];

let barChart;


function setup() {
    createCanvas(500, 500);
    background(0);
    colors = [color('#F3646A'), color('#F68F6A'), color('#FAB666'), color('#FFE066')];
    barChart = new HorizontalBarChart(data);
}

function draw() {
    background(50);
    barChart.render();
    barChart.updateVals();
}