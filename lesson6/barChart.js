class horizontalBarChart {
    constructor(_data) {
        this.data = _data;
        this.posX = 50;
        this.posY = 450;
        this.tickWeight = 1;
        this.numTicks = 10;
        this.tickLength = 5;
        this.margin = 30;
        this.spacing = 15;
        this.chartWidth = 400;
        this.chartHeight = 400;
        this.showLabels = true;
        this.rotateLabels = true;
        this.showValues = true;
        this.remainingSpace;
        this.barWidth;
        this.tickSpace;
        this.tickIncrement;
        this.maxValue;
        this.updateVals();
    }
    updateVals() {
        this.remainingSpace = this.chartHeight - (this.margin * 2) - (this.spacing * (this.data.length - 1));
        this.barWidth = this.remainingSpace / this.data.length;
        this.tickSpace = this.chartWidth / this.numTicks;
        let listValues = this.data.map(function(x) { return x.value });
        this.maxValue = max(listValues);
        this.tickIncrement = int(this.maxValue / this.numTicks);
    }
    render() {
        push();
        this.drawTicks();
        pop();
        push();
        this.drawBars();
        pop();
        push();
        this.drawAxis();
        pop();

    }

    drawTicks() {
        translate(this.posX, 450);
        textSize(12);
        textAlign(CENTER, CENTER);
        for (let i = 0; i <= this.numTicks; i++) {
            stroke(255, 100);
            strokeWeight(1);
            line(i * this.tickSpace, 0, i * this.tickSpace, -this.tickLength);

            stroke(255, 40);
            strokeWeight(1);
            line(i * this.tickSpace, 0, i * this.tickSpace, -this.chartHeight);

            noStroke();
            fill(255, 100);

            text(i * this.tickIncrement, i * this.tickSpace, 10);
        }
    }

    drawAxis() {
        //y Axis
        translate(50, 450);
        stroke(255);
        strokeWeight(1);

        line(0, 0, 0, -this.chartHeight);
        //x Axis
        stroke(255);
        strokeWeight(1);

        line(0, 0, this.chartWidth, 0);
    }

    scaledData(_num) {
        let newValue = map(_num, 0, this.maxValue, 0, this.chartWidth);
        return newValue;
    }

    drawBars() {
        translate(50, this.posX + this.margin);
        for (let i = 0; i < this.data.length; i++) {
            fill(colors[i % colors.length]);
            strokeWeight(0);
            rect(0, i * (this.barWidth + this.spacing), -this.scaledData(-data[i].value), this.barWidth);

            if (this.showValues) {
                noStroke();
                fill(255);
                textSize(12);
                textAlign(LEFT, TOP);
                text(this.data[i].value, this.scaledData(this.data[i].value) + 5, i * (this.barWidth + this.spacing) + this.barWidth / 2);
            }

            if (this.showLabels) {
                if (this.rotateLabels) {
                    push();
                    noStroke();
                    fill(255);
                    textSize(14);
                    textAlign(CENTER, BOTTOM);
                    translate(-20, ((this.barWidth + this.spacing) * i) + this.barWidth / 2);
                    rotate(PI / 2);
                    text(this.data[i].label, 0, 0);
                    pop();
                } else {

                    noStroke();
                    fill(255);
                    textSize(12);
                    textAlign(RIGHT, BOTTOM);
                    text(this.data[i].label, 0, i * (this.barWidth + this.spacing) + this.barWidth / 2);
                }
            }

        }
    }
}