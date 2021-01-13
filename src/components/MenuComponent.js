import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import BarChart from './BarChart.js';

class Menu extends Component {
  render() {
    return(
      <div className="container">
      <div id="bartest">
        <BarChart />
      </div>
        <div className="col-12 col-md-9 pt-3">
          <h4>Choose Category</h4>
          <Link to="/fielding">
            <Button className="button" color="primary">
              Fielding
            </Button>
          </Link>
        </div>
        <div className="col-12 col-md-9 pt-3">
          <Link to="/throwing">
            <Button className="button" color="primary">
              Throwing
            </Button>
          </Link>
        </div>
        <div className="col-12 col-md-9 pt-3">
          <Link to="/hitting">
            <Button className="button" color="primary">
              Hitting
            </Button>
          </Link>
        </div>
        <div className="col-12 col-md-9 pt-3">
          <Link to="/results">
            <Button className="button" color="primary">
              Results
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Menu;