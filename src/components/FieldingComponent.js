import React, { Component } from 'react';
import { Label, Col, Row, Button } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';

const required = (val) => val && val.length;
const isNumber = (val) => !isNaN(Number(val));
const isValidNumber = (val) => (val >= 20) && (val <= 80);

class Fielding extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        this.props.postComment("Fielding", values.softhands, values.footwork, values.backhand);
        alert("Submitted Successfully");
    }

	render() {
		return(
			<div className="container">
	            <div className="col-12 col-md-9 pt-3">
	                <h4>Fielding Evaluation</h4>
	                <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
	                    <Row className="form-group">
	                        <Label htmlFor="softhands" md={2}>Soft Hands</Label>
	                        <Col md={10}>
	                            <Control.text model=".softhands" id="softhands" name="softhands"
	                                placeholder="20-80"
	                                className="form-control" validators={{
                                    required, isNumber, isValidNumber
                                	}} />
	                            <Errors
	                                className="text-danger"
	                                model=".softhands"
	                                show="touched"
	                                messages={{
                                    required: 'Required ',
                                    isNumber: 'Must be a number ',
                                    isValidNumber: 'Must be between 20 and 80'
                                	}}
	                            />
	                        </Col>
	                    </Row>
	                    <Row className="form-group">
	                        <Label htmlFor="footwork" md={2}>Footwork</Label>
	                        <Col md={10}>
	                            <Control.text model=".footwork" id="footwork" name="footwork"
	                                placeholder="20-80"
	                                className="form-control" validators={{
                                    required, isNumber, isValidNumber
                                	}}/>
	                            <Errors
	                                className="text-danger"
	                                model=".footwork"
	                                show="touched"
	                                messages={{
                                    required: 'Required ',
                                    isNumber: 'Must be a number ',
                                    isValidNumber: 'Must be between 20 and 80'
                                	}}
	                            />
	                        </Col>
	                    </Row>
	                    <Row className="form-group">
	                        <Label htmlFor="backhand" md={2}>Backhand</Label>
	                        <Col md={10}>
	                            <Control.text model=".backhand" id="backhand" name="backhand"
	                                placeholder="20-80"
	                                className="form-control" validators={{
                                    required, isNumber, isValidNumber
                                	}}/>
	                            <Errors
	                                className="text-danger"
	                                model=".backhand"
	                                show="touched"
	                                messages={{
                                    required: 'Required ',
                                    isNumber: 'Must be a number ',
                                    isValidNumber: 'Must be between 20 and 80'
                                	}}
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

export default Fielding;