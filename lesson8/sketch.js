//Bar chart using loops and translations!

//To access an element in an array use the array name and the index number to access the properties of the object use dot notation

let data = [
    { value: 155, label: "Man City" },
    { value: 49, label: "West Ham UTD" },
    { value: 100, label: "Tottenham Hotspur" },
    { value: 222, label: "Chelsea" },
    { value: 75, label: "Liverpool" },
    { value: 75, label: "Man UTD" },
    { value: 96, label: "Leeds UTD" },
    { value: 53, label: "Leicseter City" },
    { value: 78, label: "Arsenal" },
    { value: 34, label: "Southampton" },
    { value: 92, label: "Aston Villa FC" },
    { value: 80, label: "Wolverhampton Wanderers FC" },
    { value: 35, label: "Newcastle United FC" },
    { value: 20, label: "Crystal Palace FC" },
    { value: 66, label: "Everton FC" },
    { value: 23, label: "Brighton & Hove Albion FC" },
    { value: 1, label: "Burnley FC" },
    { value: 57, label: "Sheffield United FC" },
    { value: 38, label: "West Bromwich Albion FC" },
    { value: 34, label: "Fulham FC" }
];

let data2 = [
    { value: [40, 43], label: "Man City" },
    { value: [35, 38], label: "Man UTD" },
    { value: [34, 34], label: "Leicseter City" },
    { value: [23, 24], label: "Everton FC" },
    { value: [39, 29], label: "Liverpool" },
    { value: [27, 32], label: "Chelsea" },
    { value: [31, 24], label: "Arsenal" },
    { value: [30, 32], label: "West Ham UTD" },
    { value: [26, 29], label: "Aston Villa FC" },
    { value: [34, 28], label: "Leeds UTD" },
    { value: [33, 35], label: "Tottenham Hotspur" },
    { value: [20, 26], label: "Newcastle United FC" },
    { value: [19, 14], label: "Burnley FC" },
    { value: [21, 20], label: "Crystal Palace FC" },
    { value: [18, 22], label: "Brighton & Hove Albion FC" },
    { value: [15, 21], label: "Wolverhampton Wanderers FC" },
    { value: [18, 9], label: "Fulham FC" },
    { value: [19, 28], label: "Southampton" },
    { value: [20, 15], label: "West Bromwich Albion FC" },
    { value: [8, 12], label: "Sheffield United FC" }
];

let data3 = [
    { value: 20, wins: 27, label: "Man City" },
    { value: 11, wins: 19, label: "West Ham UTD" },
    { value: 12, wins: 18, label: "Tottenham Hotspur" },
    { value: 18, wins: 19, label: "Chelsea" },
    { value: 12, wins: 20, label: "Liverpool" },
    { value: 13, wins: 21, label: "Man UTD" },
    { value: 12, wins: 18, label: "Leeds UTD" },
    { value: 11, wins: 20, label: "Leicseter City" },
    { value: 12, wins: 18, label: "Arsenal" },
    { value: 9, wins: 12, label: "Southampton" },
    { value: 15, wins: 16, label: "Aston Villa FC" },
    { value: 10, wins: 12, label: "Wolverhampton Wanderers FC" },
    { value: 7, wins: 12, label: "Newcastle United FC" },
    { value: 8, wins: 12, label: "Crystal Palace FC" },
    { value: 12, wins: 17, label: "Everton FC" },
    { value: 12, wins: 9, label: "Brighton & Hove Albion FC" },
    { value: 11, wins: 10, label: "Burnley FC" },
    { value: 5, wins: 7, label: "Sheffield United FC" },
    { value: 6, wins: 5, label: "West Bromwich Albion FC" },
    { value: 9, wins: 5, label: "Fulham FC" }
];

let data4 = [
    { value: 83, wins: 32, label: "Man City" },
    { value: 62, wins: 47, label: "West Ham UTD" },
    { value: 68, wins: 45, label: "Tottenham Hotspur" },
    { value: 58, wins: 36, label: "Chelsea" },
    { value: 68, wins: 42, label: "Liverpool" },
    { value: 73, wins: 44, label: "Man UTD" },
    { value: 62, wins: 54, label: "Leeds UTD" },
    { value: 68, wins: 50, label: "Leicseter City" },
    { value: 55, wins: 39, label: "Arsenal" },
    { value: 48, wins: 68, label: "Southampton" },
    { value: 55, wins: 46, label: "Aston Villa FC" },
    { value: 36, wins: 52, label: "Wolverhampton Wanderers FC" },
    { value: 46, wins: 62, label: "Newcastle United FC" },
    { value: 41, wins: 66, label: "Crystal Palace FC" },
    { value: 47, wins: 48, label: "Everton FC" },
    { value: 41, wins: 46, label: "Brighton & Hove Albion FC" },
    { value: 33, wins: 55, label: "Burnley FC" },
    { value: 20, wins: 63, label: "Sheffield United FC" },
    { value: 35, wins: 76, label: "West Bromwich Albion FC" },
    { value: 27, wins: 55, label: "Fulham FC" }
];

let colors;
let barChart01;
let barChart02;
let barChart03;
let barChart04;
let barChart05;

function setup() {
    createCanvas(1300, 1300);
    colors = [color('#F3646A'), color('#F68F6A'), color('#FAB666'), color('#FFE066')];
    barChart01 = new ScatterPlotChart(data4);
    barChart02 = new ScatterPlotChart(data3);
    barChart03 = new HorizontalBarChart(data);
    barChart04 = new StackedBarChart(data2);
    //barChart05 = new ScatterPlotChart(data3);
}

function draw() {
    background(50);
    barChart01.render();
    barChart01.updateVals();
    barChart01.chartTitle = "Goals scored vs goals conceded in the 20/21 season";
    barChart01.chartYLabel = "Goals scored";
    barChart01.chartXLabel = "Goals conceded";
    barChart01.posX = 120;
    barChart02.render();
    barChart02.updateVals();
    barChart02.chartTitle = "Clean sheets vs Games won in the 20/21 season";
    barChart02.chartXLabel = "Games Won";
    barChart02.chartYLabel = "Clean Sheets";
    barChart02.posX = 800;
    barChart03.render();
    barChart03.updateVals();
    barChart03.chartTitle = "Money spent during transfer winows in millions for the 20/21 season";
    barChart03.chartXLabel = "Money Spent";
    barChart03.chartYLabel = "Team";
    barChart03.posX = 120;
    barChart03.posY = 1100;
    barChart04.render();
    barChart04.updateVals();
    barChart04.chartTitle = "Amount of home and away goals scored in the 20/21 season";
    barChart04.chartXLabel = "Team";
    barChart04.chartYLabel = "Total goals scored";
    barChart04.posX = 800;
    barChart04.posY = 1100;
}