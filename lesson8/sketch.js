//Bar chart using loops and translations!

//To access an element in an array use the array name and the index number to access the properties of the object use dot notation
let data = [
    { value: 32, label: "Oranges" },
    { value: 22, label: "Apples" },
    { value: 43, label: "Bananas" },
    { value: 16, label: "Pears" }
];

let data2 = [
    { value: [40, 10, 20], label: "Oranges" },
    { value: [20, 10, 80], label: "Oranges" },
    { value: [40, 10, 10], label: "Oranges" },
];

let data3 = [
    { value: 100 },
    { value: 100 },
    { value: 100 },
    { value: 100 },
];

let data4 = [
    { value: [20, 20, 20, 20], label: ["Oranges", "Apples", "Pears"] },

];

let colors;
let barChart01;
let barChart02;
let barChart03;
let barChart04;

function setup() {
    createCanvas(1000, 950);
    colors = [color('#F3646A'), color('#F68F6A'), color('#FAB666'), color('#FFE066')];
    barChart01 = new BarChart(data);
    barChart02 = new BarChart(data2);
    barChart03 = new HorizontalBarChart(data);
    barChart04 = new StackedBarChart(data2);
}

function draw() {
    background(50);
    barChart01.render();
    barChart01.updateVals();
    // barChart02.render();
    // barChart02.updateVals();
    // barChart02.posX = 550;
    barChart03.render();
    barChart03.updateVals();
    barChart03.posY = 900;
    barChart04.render();
    barChart04.updateVals();
    barChart04.posX = 550;
    barChart04.posY = 900;
}