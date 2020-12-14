
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

class Results extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var overall = 0;
    var fieldingOverall = 0;
    var hittingOverall = 0;
    var throwingOverall = 0;
    var fieldingFirst = 0;
    var fieldingSecond = 0;
    var fieldingThird = 0;
    var throwingFirst = 0;
    var throwingSecond = 0;
    var throwingThird = 0;
    var hittingFirst = 0;
    var hittingSecond = 0;
    var hittingThird = 0;

    if (this.props.fielding.length > 0) {
      fieldingFirst = this.props.fielding[this.props.fielding.length - 1].rating;
      fieldingSecond = this.props.fielding[this.props.fielding.length - 1].author;
      fieldingThird = this.props.fielding[this.props.fielding.length - 1].comment;
      fieldingOverall = Math.round(((parseInt(fieldingFirst) + parseInt(fieldingSecond) + parseInt(fieldingThird)) / 3) * 100) / 100;
      throwingFirst = this.props.throwing[this.props.throwing.length - 1].rating;
      throwingSecond = this.props.throwing[this.props.throwing.length - 1].author;
      throwingThird = this.props.throwing[this.props.throwing.length - 1].comment;
      throwingOverall = Math.round(((parseInt(throwingFirst) + parseInt(throwingSecond) + parseInt(throwingThird)) / 3) * 100) / 100;
      hittingFirst = this.props.hitting[this.props.hitting.length - 1].rating;
      hittingSecond = this.props.hitting[this.props.hitting.length - 1].author;
      hittingThird = this.props.hitting[this.props.hitting.length - 1].comment;
      hittingOverall = Math.round(((parseInt(hittingFirst) + parseInt(hittingSecond) + parseInt(hittingThird)) / 3) * 100) / 100;
      overall = Math.round(((fieldingOverall + throwingOverall + hittingOverall) / 3) * 100) / 100;
    }

    return(
      <div className="container">
        <div className="col-12 col-md-9 pt-3">
          <h4>Breakdown</h4>
          <h1>{console.log(this.props.fielding)}</h1>
          <h3>Overall: {overall}</h3>
          <h1>{console.log(this.props.dishes)}</h1>
          <h2>Fielding Overall: {fieldingOverall}</h2>
          <p>Soft Hands: {fieldingFirst}</p>
          <p>Footwork: {fieldingSecond}</p>
          <p>Backhand: {fieldingThird}</p>
          <h2>Throwing Overall: {throwingOverall}</h2>
          <p>Arm Action: {throwingFirst}</p>
          <p>Footwork: {throwingSecond}</p>
          <p>Balance: {throwingThird}</p>
          <h2>Hitting Overall: {hittingOverall}</h2>
          <p>Contact: {hittingFirst}</p>
          <p>Power: {hittingSecond}</p>
          <p>Balance: {hittingThird}</p>
        </div>
      </div>
    );
  }
}

export default Results;