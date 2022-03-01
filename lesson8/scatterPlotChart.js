class ScatterPlotChart {
    constructor(_data, ) {
        this.data = _data;
        this.chartTitle = "";
        this.chartXLabel = "";
        this.chartYLabel = "";
        this.posX = 50;
        this.posY = 450;
        this.valueFontSize = 12;
        this.labelFontSize = 14;
        this.tickWeight = 1;
        this.showLabels = true;
        this.showValues = true;
        this.rotateLabels = true;
        this.margin = 30;
        this.spacing = 15;
        this.chartWidth = 400;
        this.chartHeight = 400;
        this.numTicks = 10;
        this.tickLength = 5;
        this.remainingSpace;
        this.barWidth;
        this.tickSpace;
        this.tickIncrement;
        this.maxValue;
        this.updateVals();
    }
    drawTitle() {
        textSize(18);
        textAlign(CENTER, CENTER);
        noStroke();
        fill(255);
        text(this.chartTitle, this.chartWidth / 2 - this.margin, -this.chartHeight - this.margin);
    }
    drawXLabel() {
        textSize(18);
        textAlign(CENTER, CENTER);
        noStroke();
        fill(255);
        text(this.chartXLabel, this.chartWidth / 2 - this.margin, this.margin * 2);
    }
    drawYLabel() {
        textSize(18);
        textAlign(CENTER, CENTER);
        noStroke();
        fill(255);
        push();
        translate(-this.margin * 2 - 20, -this.chartHeight / 2);
        rotate(PI / 2);
        text(this.chartYLabel, 0, 0);
        pop();
    }
    updateVals() {
        this.remainingSpace = this.chartWidth - (this.margin * 2) - (this.spacing * (this.data.length - 1));
        this.barWidth = this.remainingSpace / this.data.length;
        this.tickSpace = this.chartHeight / this.numTicks;
        let listValues = this.data.map(function(x) { return x.value });
        this.maxValue = max(listValues);
        this.tickIncrement = int(this.maxValue / this.numTicks);
    }
    render() {
        push();
        translate(this.posX, this.posY);
        this.drawTitle();
        this.drawXLabel();
        this.drawYLabel();
        this.drawAxis();
        this.drawTicks();
        this.drawEllipse();
        pop();

    }

    drawTicks() {
        textSize(this.valueFontSize);
        textAlign(RIGHT, CENTER);
        for (let i = 0; i <= this.numTicks; i++) {
            stroke(255, 100);
            strokeWeight(this.tickWeight);
            line(0, i * -this.tickSpace, -this.tickLength, i * -this.tickSpace);

            stroke(255, 40);
            strokeWeight(1);
            line(0, i * -this.tickSpace, this.chartWidth, i * -this.tickSpace);

            noStroke();
            fill(255, 100);
            text(i * this.tickIncrement, -10, -i * this.tickSpace);
        }
    }

    drawAxis() {
        translate(-this.margin, 0)
            //y Axis
        strokeWeight(1);
        stroke(255);
        line(0, 0, 0, -this.chartHeight);
        //x Axis
        strokeWeight(1);
        stroke(255);
        line(0, 0, this.chartWidth, 0);
    }

    scaledData(_num) {
        let newValue = map(_num, 0, this.maxValue, 0, this.chartHeight);
        return newValue;
    }

    drawEllipse() {
        translate(this.margin, 0);
        for (let i = 0; i < this.data.length; i++) {
            fill(colors[i % colors.length]);
            ellipse(-i * (-this.barWidth - this.spacing), this.scaledData(-this.data[i].value), 20);


            if (this.showLabels) {
                if (this.rotateLabels) {
                    push();
                    noStroke();
                    fill(255);
                    textSize(this.labelFontSize);
                    textAlign(CENTER, CENTER);
                    translate(-i * (-this.barWidth - this.spacing), 20);
                    rotate(PI / 2);
                    text(this.data[i].wins, 0, 0);
                    pop();
                } else {

                    noStroke();
                    fill(255);
                    textSize(this.labelFontSize);
                    textAlign(RIGHT, BOTTOM);
                    text(this.data[i].wins, 0, i * (this.barHeight + this.spacing) + this.barHeight / 2);
                }
            }
        }
    }
}