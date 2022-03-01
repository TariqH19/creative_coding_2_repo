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

let barChart02;


function setup() {
    createCanvas(1000, 950);
    colors = [color('#F3646A'), color('#F68F6A'), color('#FAB666'), color('#FFE066')];

    barChart02 = new LineChart(data2);

}

function draw() {
    background(50);
    barChart02.render();
    barChart02.updateVals();
}