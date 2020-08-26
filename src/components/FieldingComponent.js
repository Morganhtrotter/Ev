import React, { Component } from 'react';
import { Label, Col, Row, Button } from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';

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
	                <Form model="fieldingForm" onSubmit={(values) => this.handleSubmit(values)}>
	                    <Row className="form-group">
	                        <Label htmlFor="softhands" md={2}>Soft Hands</Label>
	                        <Col md={10}>
	                            <Control.select model=".softhands" id="softhands" name="softhands"
	                                className="form-control">
	                                <option value="1">1</option>
	                                <option value="2">2</option>
	                                <option value="3">3</option>
	                                <option value="4">4</option>
	                                <option value="5">5</option>
	                            </Control.select>
	                            <Errors
	                                className="text-danger"
	                                model=".softhands"
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
	                        <Label htmlFor="backhand" md={2}>Backhand</Label>
	                        <Col md={10}>
	                            <Control.select model=".backhand" id="backhand" name="backhand"
	                                className="form-control">
	                                <option value="1">1</option>
	                                <option value="2">2</option>
	                                <option value="3">3</option>
	                                <option value="4">4</option>
	                                <option value="5">5</option>
	                            </Control.select>
	                            <Errors
	                                className="text-danger"
	                                model=".backhand"
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

export default Fielding;