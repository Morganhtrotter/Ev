import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

class Menu extends Component {
  render() {
    return(
      <div className="container">
        <div className="col-12 col-md-9 pt-3">
          <h4>Choose Category</h4>
          <Link to="/fielding">
            <Button className="button">
              Fielding
            </Button>
          </Link>
        </div>
        <div className="col-12 col-md-9 pt-3">
          <Link to="/throwing">
            <Button className="button">
              Throwing
            </Button>
          </Link>
        </div>
        <div className="col-12 col-md-9 pt-3">
          <Link to="/hitting">
            <Button className="button">
              Hitting
            </Button>
          </Link>
        </div>
        <div className="col-12 col-md-9 pt-3">
          <Link to="/results">
            <Button className="button">
              Results
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Menu;