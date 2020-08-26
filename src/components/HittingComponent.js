import React, { Component } from 'react';
import { Label, Col, Row, Button } from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';

class Hitting extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        this.props.postComment("Hitting", values.contact, values.power, values.hittingBalance);
        alert("Submitted Successfully");
    }

	render() {
		return(
			<div className="container">
	            <div className="col-12 col-md-9 pt-3">
	                <h4>Fielding Evaluation</h4>
	                <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
	                    <Row className="form-group">
	                        <Label htmlFor="contact" md={2}>Contact</Label>
	                        <Col md={10}>
	                            <Control.select model=".contact" id="contact" name="contact"
	                                className="form-control">
	                                <option value="1">1</option>
	                                <option value="2">2</option>
	                                <option value="3">3</option>
	                                <option value="4">4</option>
	                                <option value="5">5</option>
	                            </Control.select>
	                            <Errors
	                                className="text-danger"
	                                model=".contact"
	                                show="touched"
	                            />
	                        </Col>
	                    </Row>
	                    <Row className="form-group">
	                        <Label htmlFor="power" md={2}>Power</Label>
	                        <Col md={10}>
	                            <Control.select model=".power" id="power" name="power"
	                                className="form-control">
	                                <option value="1">1</option>
	                                <option value="2">2</option>
	                                <option value="3">3</option>
	                                <option value="4">4</option>
	                                <option value="5">5</option>
	                            </Control.select>
	                            <Errors
	                                className="text-danger"
	                                model=".power"
	                                show="touched"
	                            />
	                        </Col>
	                    </Row>
	                    <Row className="form-group">
	                        <Label htmlFor="hittingBalance" md={2}>Balance</Label>
	                        <Col md={10}>
	                            <Control.select model=".hittingBalance" id="hittingBalance" name="hittingBalance"
	                                className="form-control">
	                                <option value="1">1</option>
	                                <option value="2">2</option>
	                                <option value="3">3</option>
	                                <option value="4">4</option>
	                                <option value="5">5</option>
	                            </Control.select>
	                            <Errors
	                                className="text-danger"
	                                model=".hittingBalance"
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
	                </Form>
	            </div>
	        </div>
	    );
	}
}

export default Hitting;