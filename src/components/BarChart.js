import React, {Component} from 'react';
import * as d3 from "d3";

class BarChart extends Component {

  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    const data = [20, 20, 20];
    const w = 700;
    const h = 250;
    const widthdata = [80, 80, 80]

    if (this.props.evaluationdata !== undefined) {

	    console.log(this.props.evaluationdata);

	    for(var i = 0; i < 3; i++) {
	    	data[i] = this.props.evaluationdata[i];
	    }

    }

    const svg = d3.select("#fieldingchart")
    .append("svg")
    .attr("width", w)
    .attr("height", h);

   	svg.selectAll("#fieldingchart")
      .data(widthdata)
      .enter()
      .append("rect")
      .attr("x", 0)
      .attr("y", (d, i) => i * 70)
      .attr("width", (d, i) => d * 10)
      .attr("height", 65)
      .attr("fill", "green");    

    svg.selectAll("#fieldingchart")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", 0)
      .attr("y", (d, i) => i * 70)
      .attr("width", (d, i) => d * 10)
      .attr("height", 65)
      .attr("fill", "white");
  }
        
  render(){
    return <div id={"#" + this.props.id}></div>
  }

}

export default BarChart;