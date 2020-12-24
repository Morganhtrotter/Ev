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
    var fieldingLevel = 0;
    var throwingLevel = 0;
    var hittingLevel = 0;

    if (this.props.fielding.length > 0) {
      fieldingFirst = this.props.fielding[this.props.fielding.length - 1].rating;
      fieldingSecond = this.props.fielding[this.props.fielding.length - 1].author;
      fieldingThird = this.props.fielding[this.props.fielding.length - 1].comment;
      fieldingOverall = Math.round(((parseInt(fieldingFirst) + parseInt(fieldingSecond) + parseInt(fieldingThird)) / 3) * 100) / 100;
      if ((fieldingOverall >= 20) && (fieldingOverall < 40)) {
        fieldingLevel = 1;
      } else if ((fieldingOverall >= 40) && (fieldingOverall < 60)) {
        fieldingLevel = 2;
      } else {
        fieldingLevel = 3;
      }
      throwingFirst = this.props.throwing[this.props.throwing.length - 1].rating;
      throwingSecond = this.props.throwing[this.props.throwing.length - 1].author;
      throwingThird = this.props.throwing[this.props.throwing.length - 1].comment;
      throwingOverall = Math.round(((parseInt(throwingFirst) + parseInt(throwingSecond) + parseInt(throwingThird)) / 3) * 100) / 100;
      if ((throwingOverall >= 20) && (throwingOverall < 40)) {
        throwingLevel = 1;
      } else if ((throwingOverall >= 40) && (throwingOverall < 60)) {
        throwingLevel = 2;
      } else {
        throwingLevel = 3;
      }
      hittingFirst = this.props.hitting[this.props.hitting.length - 1].rating;
      hittingSecond = this.props.hitting[this.props.hitting.length - 1].author;
      hittingThird = this.props.hitting[this.props.hitting.length - 1].comment;
      hittingOverall = Math.round(((parseInt(hittingFirst) + parseInt(hittingSecond) + parseInt(hittingThird)) / 3) * 100) / 100;
      if ((hittingOverall >= 20) && (hittingOverall < 40)) {
        hittingLevel = 1;
      } else if ((hittingOverall >= 40) && (hittingOverall < 60)) {
        hittingLevel = 2;
      } else {
        hittingLevel = 3;
      }
      overall = Math.round(((fieldingOverall + throwingOverall + hittingOverall) / 3) * 100) / 100;
    }

    return(
      <div className="container">
        <div className="col-12 col-md-9 pt-3">
          <h1>Breakdown</h1>
          <h2>Overall: {overall}</h2>
          <h3>Fielding Overall: {fieldingOverall}</h3>
          <p>Soft Hands: {fieldingFirst}</p>
          <p>Footwork: {fieldingSecond}</p>
          <p>Backhand: {fieldingThird}</p>
          <p>Based on your score of {fieldingOverall}, you have been placed in fielding level {fieldingLevel}.</p>
          <div>{(fieldingLevel == 1) && <Button className="mb-3" href="https://www.tadball.com/post/throwing-fundamentals-throwing-clinic-session-i-recap" color="primary">Level 1 Curriculum</Button>}</div>
          <div>{(fieldingLevel == 2) && <Button className="mb-3" href="https://www.tadball.com/" color="primary">Level 2 Curriculum</Button>}</div>
          <div>{(fieldingLevel == 3) && <Button className="mb-3" href="https://www.tadball.com/" color="primary">Level 3 Curriculum</Button>}</div>
          <h3>Throwing Overall: {throwingOverall}</h3>
          <p>Arm Action: {throwingFirst}</p>
          <p>Footwork: {throwingSecond}</p>
          <p>Balance: {throwingThird}</p>
          <p>Based on your score of {throwingOverall}, you have been placed in throwing level {throwingLevel}.</p>
          <div>{(throwingLevel == 1) && <Button className="mb-3" href="https://www.tadball.com/" color="primary">Level 1 Curriculum</Button>}</div>
          <div>{(throwingLevel == 2) && <Button className="mb-3" href="https://www.tadball.com/" color="primary">Level 2 Curriculum</Button>}</div>
          <div>{(throwingLevel == 3) && <Button className="mb-3" href="https://www.tadball.com/" color="primary">Level 3 Curriculum</Button>}</div>
          <h3>Hitting Overall: {hittingOverall}</h3>
          <p>Contact: {hittingFirst}</p>
          <p>Power: {hittingSecond}</p>
          <p>Balance: {hittingThird}</p>
          <p>Based on your score of {hittingOverall}, you have been placed in hitting level {hittingLevel}.</p>
          <div>{(hittingLevel == 1) && <Button className="mb-3" href="https://www.tadball.com/post/hitting-101" color="primary">Level 1 Curriculum</Button>}</div>
          <div>{(hittingLevel == 2) && <Button className="mb-3" href="https://www.tadball.com/" color="primary">Level 2 Curriculum</Button>}</div>
          <div>{(hittingLevel == 3) && <Button className="mb-3" href="https://www.tadball.com/" color="primary">Level 3 Curriculum</Button>}</div>
        </div>
      </div>
    );
  }
}

export default Results;