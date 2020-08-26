import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

class Results extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="container">
        <div className="col-12 col-md-9 pt-3">
          <h4>Breakdown</h4>
          <h1>{console.log(this.props.feedback)}</h1>
          <h1>{console.log(this.props.comments)}</h1>
          <h3>Overall</h3>
          <h3>Fielding</h3>
          <h3>Throwing</h3>
          <h3>Hitting</h3>
        </div>
      </div>
    );
  }
}

export default Results;