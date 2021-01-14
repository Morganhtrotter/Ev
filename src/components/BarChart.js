import React, {Component} from 'react';
import * as d3 from "d3";

class BarChart extends Component {

  componentDidMount() {
    this.drawChart();
    this.updateChart();
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

    svg.on("click", function() {
    	if (arrayIndex === 3) {
    		arrayIndex = 0;
    	}
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

  updateChart() {

  }
        
  render(){
    return <div id={"#" + this.props.id}></div>
  }
  

}

export default BarChart;