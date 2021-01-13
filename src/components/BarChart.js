import React, {Component} from 'react';
import * as d3 from "d3";

class BarChart extends Component {

  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    const data = [20, 20, 20];
    const w = 800;
    const h = 300;
    const widthdata = [80, 80, 80];
    const interpolateData = [0, 0, 0];

    if (this.props.evaluationdata !== undefined) {

	    for(var i = 0; i < 3; i++) {
	    	data[i] = this.props.evaluationdata[i];
	    	interpolateData[i] = (this.props.evaluationdata[i] - 20) / 60;
	    }

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
      .attr("y", (d, i) => i * 70)
      .attr("width", (d, i) => d * 10)
      .attr("height", 65)
      .attr("fill", "gray");    

    svg.selectAll("g")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", 0)
      .attr("y", (d, i) => i * 70)
      .attr("width", (d, i) => d * 10)
      .attr("height", 65)
      .attr("fill", (d, i) => d3.interpolateRdYlGn(interpolateData[i]));

    svg.selectAll("g")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => d * 10 - 5)
      .attr("y", (d, i) => i * 70)
      .attr("width", 5)
      .attr("height", 65)
      .attr("fill", "white");
  }
        
  render(){
    return <div id={"#" + this.props.id}></div>
  }

}

export default BarChart;