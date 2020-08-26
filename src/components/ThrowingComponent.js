import React, { Component } from 'react';
import { Label, Col, Row, Button } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';

class Throwing extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        this.props.postComment("Throwing", values.armaction, values.footwork, values.balance);
        alert("Submitted Successfully");
    }

	render() {
		return(
			<div className="container">
	            <div className="col-12 col-md-9 pt-3">
	                <h4>Throwing Evaluation</h4>
	                <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
	                    <Row className="form-group">
	                        <Label htmlFor="armaction" md={2}>Arm Action</Label>
	                        <Col md={10}>
	                            <Control.select model=".armaction" id="armaction" name="armaction"
	                                className="form-control">
	                                <option value="1">1</option>
	                                <option value="2">2</option>
	                                <option value="3">3</option>
	                                <option value="4">4</option>
	                                <option value="5">5</option>
	                            </Control.select>
	                            <Errors
	                                className="text-danger"
	                                model=".armaction"
	                                show="touched"
	                            />
	                        </Col>
	                    </Row>
	                    <Row className="form-group">
	                        <Label htmlFor="footwork" md={2}>Footwork</Label>
	                        <Col md={10}>
	                            <Control.select model=".footwork" id="footwork" name="footwork"
	                                className="form-control">
	                                <option value="1">1</option>
	                                <option value="2">2</option>
	                                <option value="3">3</option>
	                                <option value="4">4</option>
	                                <option value="5">5</option>
	                            </Control.select>
	                            <Errors
	                                className="text-danger"
	                                model=".footwork"
	                                show="touched"
	                            />
	                        </Col>
	                    </Row>
	                    <Row className="form-group">
	                        <Label htmlFor="balance" md={2}>Balance</Label>
	                        <Col md={10}>
	                            <Control.select model=".balance" id="balance" name="balance"
	                                className="form-control">
	                                <option value="1">1</option>
	                                <option value="2">2</option>
	                                <option value="3">3</option>
	                                <option value="4">4</option>
	                                <option value="5">5</option>
	                            </Control.select>
	                            <Errors
	                                className="text-danger"
	                                model=".balance"
	                                show="touched"
	                            />
	                        </Col>
	                    </Row>
	                    <Row className="form-group">
	                        <Col md={{size: 10, offset: 2}}>
	                            <Button type="submit" color="primary">
	                                Submit
	                            </Button>
	                        </Col>
	                    </Row>
	                    <Row className="form-group">
	                        <Col md={{size: 10, offset: 2}}>
	                            <Link to="/menu">
	                                <Button type="submit" color="primary">
	                                    Back
	                                </Button>
	                            </Link>
	                        </Col>
	                    </Row>
	                </LocalForm>
	            </div>
	        </div>
	    );
	}
}

export default Throwing;