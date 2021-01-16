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
    const w = 800;
    const h = 300;
    const widthdata = [80, 80, 80];

    if (this.props.fieldingdata !== undefined) {
	    for(var i = 0; i < 3; i++) {
	    	fieldData[i] = this.props.fieldingdata[i];
	    }
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
    const svg = d3.select("#fieldingchart")
	    .append("svg")
	    .attr("width", w)
	    .attr("height", h);

   	svg.selectAll("g")
      .data(widthdata)
      .enter()
      .append("rect")
      .attr("x", 0)
      .attr("y", (d, i) => i * 70)
      .attr("width", (d, i) => d * 10)
      .attr("height", 65)
      .attr("fill", "gray");    

    svg.selectAll("g")
      .data(fieldData)
      .enter()
      .append("rect")
      .attr("x", 0)
      .attr("y", (d, i) => i * 70)
      .attr("width", (d, i) => d * 10)
      .attr("height", 65)
      .attr("fill", (d, i) => d3.interpolateRdYlGn((d - 20) / 60))
      .attr("id", "datarect");

    svg.selectAll("g")
      .data(fieldData)
      .enter()
      .append("rect")
      .attr("x", (d, i) => d * 10 - 5)
      .attr("y", (d, i) => i * 70)
      .attr("width", 5)
      .attr("height", 65)
      .attr("fill", "white")
      .attr("id", "whitebar");

    svg.selectAll("g")
      .data(fieldData)
      .enter()
      .append("rect")
      .attr("x", 10)
      .attr("y", (d, i) => i * 70 + 15)
      .attr("width", 120)
      .attr("height", 35)
      .attr("id", "graytextbar")
      .style("fill", "gray")
      .style("opacity", 0.7);

    svg.append("text")
	   .attr("x", 20)
	   .attr("y", 40)
     .attr("id", "viztextone")
	   .style("fill", "white")
     .style("font-family", "'Oswald', sans-serif")
	   .text("Soft Hands: " + fieldData[0]);

    svg.append("text")
     .attr("x", 20)
     .attr("y", 110)
     .attr("id", "viztexttwo")
     .style("fill", "white")
     .style("font-family", "'Oswald', sans-serif")
     .text("Footwork: " + fieldData[1]);

    svg.append("text")
     .attr("x", 20)
     .attr("y", 180)
     .attr("id", "viztextthree")
     .style("fill", "white")
     .style("font-family", "'Oswald', sans-serif")
     .text("Backhand: " + fieldData[2]);

    svg.on("click", function() {
    	if (arrayIndex === 3) {
    		arrayIndex = 0;
    	}
      svg.select("#viztextone")
        .transition()
        .duration(1000)
        .attr("x", 20)
        .attr("y", 40)
        .style("fill", "white")
        .text(textArray[3 * arrayIndex]);

      svg.select("#viztexttwo")
        .transition()
        .duration(1000)
        .attr("x", 20)
        .attr("y", 110)
        .style("fill", "white")
        .text(textArray[3 * arrayIndex + 1]);

      svg.select("#viztextthree")
        .transition()
        .duration(1000)
        .attr("x", 20)
        .attr("y", 180)
        .style("fill", "white")
        .text(textArray[3 * arrayIndex + 2]);

    	svg.selectAll("#datarect")
    		.data(dataArray[arrayIndex])
    		.transition()
    		.duration(1000)
    		.attr("x", 0)
		    .attr("y", (d, i) => i * 70)
		    .attr("width", (d, i) => d * 10)
		    .attr("height", 65)
		    .attr("fill", (d, i) => d3.interpolateRdYlGn((d - 20) / 60));

		svg.selectAll("#whitebar")
			.data(dataArray[arrayIndex])
			.transition()
			.duration(1000)
			.attr("x", (d, i) => d * 10 - 5)
		    .attr("y", (d, i) => i * 70)
		    .attr("width", 5)
		    .attr("height", 65)
		    .attr("fill", "white");
		arrayIndex++;
    })

/*
    svg.selectAll("rect")
    	.data(data)
    	.transition()
    	.attr("x", 0)
      .attr("y", (d, i) => i * 70)
      .attr("width", (d, i) => d * 10)
      .attr("height", 65)
      .attr("fill", (d, i) => d3.interpolateRdYlGn(interpolateData[i]));
      */
  }
        
  render(){
    return <div id={"#" + this.props.id}></div>
  }
  

}

export default BarChart;