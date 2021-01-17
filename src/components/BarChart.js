import React, {Component} from 'react';
import * as d3 from "d3";

class BarChart extends Component {

  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    const fieldData = [20, 20, 20];
    const throwData = [20, 20, 20];
    const hitData = [20, 20, 20];
    const w = 300;
    const h = 570;
    const widthdata = [80, 80, 80];
    const redColor = "#a1241b";
    const greenColor = "#0c4703";
    var colorOne = redColor;
    var colorTwo = redColor;
    var colorThree = redColor;
    var colorArray = [colorOne, colorTwo, colorThree];
    var overallColorArray = [redColor, greenColor];
    var overallColor = redColor;
    var fieldOverall = 0;
    const overallArray = [this.props.overall, 80];

    if (this.props.fieldingdata !== undefined) {
	    for(var i = 0; i < 3; i++) {
	    	fieldData[i] = this.props.fieldingdata[i];
	    }
      if (this.props.fieldingdata[0] > 50) {
        colorOne = greenColor;
      }
      if (this.props.fieldingdata[1] > 50) {
        colorTwo = greenColor;
      }
      if (this.props.fieldingdata[2] > 50) {
        colorThree = greenColor;
      }
      colorArray[0] = colorOne;
      colorArray[1] = colorTwo;
      colorArray[2] = colorThree;
      fieldOverall = Math.round(((parseInt(fieldData[0]) + parseInt(fieldData[1]) + parseInt(fieldData[2])) / 3) * 100) / 100;
      overallArray[1] = fieldOverall;
    }

    if (this.props.throwingdata !== undefined) {
    	for (var i = 0; i < 3; i++) {
    		throwData[i] = this.props.throwingdata[i];
    	}
    }

    if (this.props.hittingdata !== undefined) {
    	for (var i = 0; i < 3; i++) {
    		hitData[i] = this.props.hittingdata[i];
    	}
    }

    const dataArray = [fieldData, throwData, hitData];
    const textArray = ["Soft Hands: " + fieldData[0].toString(), "Footwork: " + fieldData[1].toString(), "Backhand: " + fieldData[2].toString(),
        "Arm Action: " + throwData[0].toString(), "Footwork: " + throwData[1].toString(), "Balance: " + throwData[2].toString(),
        "Contact: " + hitData[0].toString(), "Power: " + hitData[1].toString(),  "Balance: " + hitData[2].toString()];
    var arrayIndex = 1;
    if (this.props.overall >= 50) {
      overallColorArray[0] = greenColor;
    }

    const svg = d3.select("#fieldingchart")
	    .append("svg")
	    .attr("width", w)
	    .attr("height", h);

   	svg.selectAll("g")
      .data(widthdata)
      .enter()
      .append("rect")
      .attr("x", 0)
      .attr("y", (d, i) => i * 70 + 350)
      .attr("width", (d, i) => d * 3)
      .attr("height", 65)
      .attr("fill", "gray");    

    svg.selectAll("g")
      .data(fieldData)
      .enter()
      .append("rect")
      .attr("x", 0)
      .attr("y", (d, i) => i * 70 + 350)
      .attr("width", (d, i) => d * 3)
      .attr("height", 65)
      .attr("fill", (d, i) => colorArray[i])
      .attr("id", "datarect");

    svg.selectAll("g")
      .data(fieldData)
      .enter()
      .append("rect")
      .attr("x", (d, i) => d * 3 - 5)
      .attr("y", (d, i) => i * 70 + 350)
      .attr("width", 5)
      .attr("height", 65)
      .attr("fill", "white")
      .attr("id", "whitebar");

    svg.selectAll("g")
      .data(fieldData)
      .enter()
      .append("rect")
      .attr("x", 10)
      .attr("y", (d, i) => i * 70 + 365)
      .attr("width", 120)
      .attr("height", 35)
      .attr("id", "graytextbar")
      .style("fill", "white")
      .style("opacity", 0.7);

    svg.selectAll("g")
      .data([80, 80])
      .enter()
      .append("rect")
      .attr("x", 0)
      .attr("y", (d, i) => i * 140 + 70)
      .attr("width", (d, i) => d * 3)
      .attr("height", 65)
      .attr("fill", "gray");

    // Overall average rect
    svg.selectAll("g")
      .data(overallArray)
      .enter()
      .append("rect")
      .attr("x", 0)
      .attr("y", (d, i) => (i * 140) + 70)
      .attr("width", (d, i) => d * 3)
      .attr("height", 65)
      .attr("fill", (d, i) => colorArray[i])
      .attr("id", "overallRect");

    svg.selectAll("g")
      .data(overallArray)
      .enter()
      .append("rect")
      .attr("x", (d, i) => d * 3 - 5)
      .attr("y", (d, i) => i * 140 + 70)
      .attr("width", 5)
      .attr("height", 65)
      .attr("fill", "white")
      .attr("id", "averageWhiteBar");

    svg.selectAll("g")
      .data(overallArray)
      .enter()
      .append("rect")
      .attr("x", 10)
      .attr("y", (d, i) => i * 140 + 85)
      .attr("width", 120)
      .attr("height", 35)
      .attr("id", "graytextbar")
      .style("fill", "white")
      .style("opacity", 0.7);

    svg.append("text")
     .attr("x", 20)
     .attr("y", 110)
     .attr("id", "overallText")
     .style("fill", "black")
     .style("font-family", "'Oswald', sans-serif")
     .text("Overall: " + overallArray[0]);

    // Average Text
    svg.append("text")
     .attr("x", 20)
     .attr("y", 250)
     .attr("id", "averageText")
     .style("fill", "black")
     .style("font-family", "'Oswald', sans-serif")
     .text("Average: " + overallArray[1]);

    svg.append("text")
     .attr("x", 20)
     .attr("y", 40)
     .style("fill", "white")
     .style("font-family", "'Oswald', sans-serif")
     .text("Overall: " + this.props.overall);

    svg.append("text")
     .attr("x", 20)
     .attr("y", 180)
     .attr("id", "fieldingAverage")
     .style("fill", "white")
     .style("font-family", "'Oswald', sans-serif")
     .text("Fielding Average: ");

    svg.append("text")
     .attr("x", 20)
     .attr("y", 320)
     .attr("id", "statisticsText")
     .style("fill", "white")
     .style("font-family", "'Oswald', sans-serif")
     .text("Fielding Statistics:");   

    svg.append("text")
	   .attr("x", 20)
	   .attr("y", 390)
     .attr("id", "viztextone")
	   .style("fill", "black")
     .style("font-family", "'Oswald', sans-serif")
	   .text("Soft Hands: " + fieldData[0]);

    svg.append("text")
     .attr("x", 20)
     .attr("y", 460)
     .attr("id", "viztexttwo")
     .style("fill", "black")
     .style("font-family", "'Oswald', sans-serif")
     .text("Footwork: " + fieldData[1]);

    svg.append("text")
     .attr("x", 20)
     .attr("y", 530)
     .attr("id", "viztextthree")
     .style("fill", "black")
     .style("font-family", "'Oswald', sans-serif")
     .text("Backhand: " + fieldData[2]);

    svg.on("click", function() {
    	if (arrayIndex === 3) {
    		arrayIndex = 0;
    	}

      if (arrayIndex === 0) {
        fieldOverall = 0;
        fieldOverall = Math.round(((parseInt(fieldData[0]) + parseInt(fieldData[1]) + parseInt(fieldData[2])) / 3) * 100) / 100;
        if (fieldData[0] < 50) {
          colorOne = redColor;
        } else {
          colorOne = greenColor;
        }
        if (fieldData[1] < 50) {
          colorTwo = redColor;
        } else {
          colorTwo = greenColor;
        }
        if (fieldData[2] < 50) {
          colorThree = redColor;
        } else {
          colorThree = greenColor;
        }
        svg.select("#statisticsText")
          .transition()
          .duration(1000)
          .attr("x", 20)
          .attr("y", 320)
          .style("fill", "white")
          .text("Fielding Statistics:");

        svg.select("#fieldingAverage")
          .transition()
          .duration(1000)
          .attr("x", 20)
          .attr("y", 180)
          .style("fill", "white")
          .text("Fielding Average:");
      } else if (arrayIndex === 1) {
        fieldOverall = 0;
        fieldOverall = Math.round(((parseInt(throwData[0]) + parseInt(throwData[1]) + parseInt(throwData[2])) / 3) * 100) / 100;
        if (throwData[0] < 50) {
          colorOne = redColor;
        } else {
          colorOne = greenColor;
        }
        if (throwData[1] < 50) {
          colorTwo = redColor;
        } else {
          colorTwo = greenColor;
        }
        if (throwData[2] < 50) {
          colorThree = redColor;
        } else {
          colorThree = greenColor;
        }
        svg.select("#statisticsText")
          .transition()
          .duration(1000)
          .attr("x", 20)
          .attr("y", 320)
          .style("fill", "white")
          .text("Throwing Statistics:");

        svg.select("#fieldingAverage")
          .transition()
          .duration(1000)
          .attr("x", 20)
          .attr("y", 180)
          .style("fill", "white")
          .text("Throwing Average:");
      } else {
        fieldOverall = 0;
        fieldOverall = Math.round(((parseInt(hitData[0]) + parseInt(hitData[1]) + parseInt(hitData[2])) / 3) * 100) / 100;
        if (hitData[0] < 50) {
          colorOne = redColor;
        } else {
          colorOne = greenColor;
        }
        if (hitData[1] < 50) {
          colorTwo = redColor;
        } else {
          colorTwo = greenColor;
        }
        if (hitData[2] < 50) {
          colorThree = redColor;
        } else {
          colorThree = greenColor;
        }
        svg.select("#statisticsText")
          .transition()
          .duration(1000)
          .attr("x", 20)
          .attr("y", 320)
          .style("fill", "white")
          .text("Hitting Statistics:");

        svg.select("#fieldingAverage")
          .transition()
          .duration(1000)
          .attr("x", 20)
          .attr("y", 180)
          .style("fill", "white")
          .text("Hitting Average:");
      }
      colorArray[0] = colorOne;
      colorArray[1] = colorTwo;
      colorArray[2] = colorThree;

      overallArray[1] = fieldOverall;
      if (overallArray[1] < 50) {
        overallColor = redColor;
      } else {
        overallColor = greenColor;
      }
      overallColorArray[1] = overallColor;

      svg.select("#averageText")
        .transition()
        .duration(1000)
        .text("Average: " + overallArray[1]);

      svg.selectAll("#overallRect")
        .data(overallArray)
        .transition()
        .duration(1000)
        .attr("x", 0)
        .attr("y", (d, i) => i * 140 + 70)
        .attr("width", (d, i) => d * 3)
        .attr("height", 65)
        .attr("fill", (d, i) => overallColorArray[i]);

      svg.selectAll("#averageWhiteBar")
        .data(overallArray)
        .transition()
        .duration(1000)
        .attr("x", (d, i) => d * 3 - 5)
        .attr("y", (d, i) => i * 140 + 70)
        .attr("width", 5)
        .attr("height", 65)
        .attr("fill", "white");

      svg.select("#viztextone")
        .transition()
        .duration(1000)
        .attr("x", 20)
        .attr("y", 390)
        .style("fill", "black")
        .text(textArray[3 * arrayIndex]);

      svg.select("#viztexttwo")
        .transition()
        .duration(1000)
        .attr("x", 20)
        .attr("y", 460)
        .style("fill", "black")
        .text(textArray[3 * arrayIndex + 1]);

      svg.select("#viztextthree")
        .transition()
        .duration(1000)
        .attr("x", 20)
        .attr("y", 530)
        .style("fill", "black")
        .text(textArray[3 * arrayIndex + 2]);

    	svg.selectAll("#datarect")
    		.data(dataArray[arrayIndex])
    		.transition()
    		.duration(1000)
    		.attr("x", 0)
		    .attr("y", (d, i) => i * 70 + 350)
		    .attr("width", (d, i) => d * 3)
		    .attr("height", 65)
		    .attr("fill", (d, i) => colorArray[i]);

		svg.selectAll("#whitebar")
			.data(dataArray[arrayIndex])
			.transition()
			.duration(1000)
			.attr("x", (d, i) => d * 3 - 5)
		    .attr("y", (d, i) => i * 70 + 350)
		    .attr("width", 5)
		    .attr("height", 65)
		    .attr("fill", "white");
		  arrayIndex++;
    })
  }
        
  render(){
    return <div id={"#" + this.props.id}></div>
  }
  

}

export default BarChart;