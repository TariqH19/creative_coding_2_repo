class HorizontalBarChart {
    constructor(_data) {
        this.data = _data;
        this.posX = 50;
        this.posY = 450;
        this.fontSize = 14;
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
        this.barHeight;
        this.tickSpace;
        this.tickIncrement;
        this.maxValue;
        this.updateVals();
    }
    updateVals() {
        this.remainingSpace = this.chartHeight - (this.margin * 2) - (this.spacing * (this.data.length - 1));
        this.barHeight = this.remainingSpace / this.data.length;
        this.tickSpace = this.chartWidth / this.numTicks;
        let listValues = this.data.map(function(x) { return x.value });
        this.maxValue = max(listValues);
        this.tickIncrement = int(this.maxValue / this.numTicks);
    }
    render() {
        push();
        translate(this.posX, this.posY);
        this.drawTicks();
        this.drawAxis();
        this.drawBars();
        pop();
    }
    drawTicks() {
        //translate(this.posX, this.posY);
        textSize(this.textSize);
        textAlign(CENTER, CENTER);
        for (let i = 0; i <= this.numTicks; i++) {
            stroke(255, 100);
            strokeWeight(this.tickWeight);
            line(i * this.tickSpace, 0, i * this.tickSpace, -this.tickLength);

            stroke(255, 40);
            strokeWeight(this.tickWeight);
            line(i * this.tickSpace, 0, i * this.tickSpace, -this.chartHeight);

            noStroke();
            fill(255, 100);

            text(i * this.tickIncrement, i * this.tickSpace, 10);
        }
    }
    drawAxis() {
        //y Axis
        //translate(this.posX, this.posY);
        stroke(255);
        strokeWeight(this.tickWeight);

        line(0, 0, 0, -this.chartHeight);
        //x Axis
        stroke(255);
        strokeWeight(this.tickWeight);

        line(0, 0, this.chartWidth, 0);
    }
    scaledData(_num) {
        let newValue = map(_num, 0, this.maxValue, 0, this.chartWidth);
        return newValue;
    }
    drawBars() {
        translate(0, -this.margin);
        for (let i = 0; i < this.data.length; i++) {
            fill(colors[i % colors.length]);
            strokeWeight(0);
            rect(0, -i * (this.barHeight + this.spacing), -this.scaledData(-data[i].value), -this.barHeight);

            if (this.showValues) {
                noStroke();
                fill(255);
                textSize(this.textSize);
                textAlign(LEFT, TOP);
                text(this.data[i].value, this.scaledData(this.data[i].value) + 5, -i * (this.barHeight + this.spacing) + -this.barHeight / 2);
            }

            if (this.showLabels) {
                if (this.rotateLabels) {
                    push();
                    noStroke();
                    fill(255);
                    textSize(this.textSize);
                    textAlign(CENTER, BOTTOM);
                    translate(-20, -((this.barHeight + this.spacing) * i) + -this.barHeight / 2);
                    rotate(PI / 2);
                    text(this.data[i].label, 0, 0);
                    pop();
                } else {

                    noStroke();
                    fill(255);
                    textSize(this.textSize);
                    textAlign(RIGHT, BOTTOM);
                    text(this.data[i].label, 0, i * (this.barHeight + this.spacing) + this.barHeight / 2);
                }
            }
        }
    }
}