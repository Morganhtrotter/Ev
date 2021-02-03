import React, { Component } from 'react';
import { Label, Col, Row, Button } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';

const required = (val) => val && val.length;
const isNumber = (val) => !isNaN(Number(val));
const isValidNumber = (val) => (val >= 20) && (val <= 80);

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
	                        <Label htmlFor="armaction" md={2}>Fundamentals</Label>
	                        <Col md={10}>
	                            <Control.text model=".armaction" id="armaction" name="armaction"
	                                placeholder="20-80"
	                                className="form-control" validators={{
                                    required, isNumber, isValidNumber
                                	}}/>
	                            <Errors
	                                className="text-danger"
	                                model=".armaction"
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
	                        <Label htmlFor="balance" md={2}>Balance</Label>
	                        <Col md={10}>
	                            <Control.text model=".balance" id="balance" name="balance"
	                                placeholder="20-80"
	                                className="form-control" validators={{
                                    required, isNumber, isValidNumber
                                	}}/>
	                            <Errors
	                                className="text-danger"
	                                model=".balance"
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

export default Throwing;