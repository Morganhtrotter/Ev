import React, { Component } from 'react';
import { Label, Col, Row, Button } from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class About extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        alert("Current State is: " + JSON.stringify(values));
        this.props.postDish(values.firstname, values.lastname, values.telnum, values.email);
    }

    render() {
        return(
        <div className="container">
            <div className="col-12 col-md-9 pt-3">
                <h4>Player Information</h4>
                <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
                    <Row className="form-group">
                        <Label htmlFor="firstname" md={2}>First Name</Label>
                        <Col md={10}>
                            <Control.text model=".firstname" id="firstname" name="firstname"
                                placeholder="First Name"
                                className="form-control"
                                validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                }}
                                />
                            <Errors
                                className="text-danger"
                                model=".firstname"
                                show="touched"
                                messages={{
                                    required: 'Required ',
                                    minLength: 'Must be greater than two characters ',
                                    maxLength: 'Must be 15 characters or less '
                                }}
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="lastname" md={2}>Last Name</Label>
                        <Col md={10}>
                            <Control.text model=".lastname" id="lastname" name="lastname"
                                placeholder="Last Name"
                                className="form-control"
                                validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                }}
                                />
                            <Errors
                                className="text-danger"
                                model=".lastname"
                                show="touched"
                                messages={{
                                    required: 'Required ',
                                    minLength: 'Must be greater than two characters ',
                                    maxLength: 'Must be 15 characters or less '
                                }}
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                        <Col md={10}>
                            <Control.text model=".telnum" id="telnum" name="telnum"
                                placeholder="Tel. Number"
                                className="form-control"
                                validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15), isNumber
                                }}
                                />
                            <Errors
                                className="text-danger"
                                model=".telnum"
                                show="touched"
                                messages={{
                                    required: 'Required ',
                                    minLength: 'Must be greater than two numbers ',
                                    maxLength: 'Must be 15 numbers or less ',
                                    isNumber: 'Must be a number '
                                }}
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="email" md={2}>Email</Label>
                        <Col md={10}>
                            <Control.text model=".email" id="email" name="email"
                                placeholder="Email"
                                className="form-control"
                                validators={{
                                    required, validEmail
                                }}
                                />
                            <Errors
                                className="text-danger"
                                model=".email"
                                show="touched"
                                messages={{
                                    required: 'Required ',
                                    validEmail: 'Invalid Email Address '
                                }}
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="age" md={2}>Age</Label>
                        <Col md={10}>
                            <Control.text model=".age" id="age" name="age"
                                placeholder="Age"
                                className="form-control"
                                validators={{
                                    required, isNumber
                                }}
                                />
                            <Errors
                                className="text-danger"
                                model=".age"
                                show="touched"
                                messages={{
                                    required: 'Required ',
                                    isNumber: 'Must be a number '
                                }}
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="age" md={2}>Primary Position</Label>
                        <Col md={10}>
                            <Control.select model=".primary" id="primary" name="primary"
                                placeholder="Primary position"
                                className="form-control"
                                validators={{
                                    required
                                }}>
                                <option value="catcher">Catcher</option>
                                <option value="pitcher">Pitcher</option>
                                <option value="firstbase">First Base</option>
                                <option value="secondbase">Second Base</option>
                                <option value="thirdbase">Third Base</option>
                                <option value="shortstop">Shortstop</option>
                                <option value="leftfield">Left Field</option>
                                <option value="centerfield">Center Field</option>
                                <option value="rightfield">Right Field</option>
                                <option value="noprimary">No Primary</option>
                            </Control.select>
                            <Errors
                                className="text-danger"
                                model=".primary"
                                show="touched"
                                messages={{
                                    required: 'Required',
                                }}
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="age" md={2}>Secondary Position</Label>
                        <Col md={10}>
                            <Control.select model=".secondary" id="secondary" name="secondary"
                                placeholder="Secondary Position"
                                className="form-control"
                                validators={{
                                }}>
                                <option value="catcher">Catcher</option>
                                <option value="pitcher">Pitcher</option>
                                <option value="firstbase">First Base</option>
                                <option value="secondbase">Second Base</option>
                                <option value="thirdbase">Third Base</option>
                                <option value="shortstop">Shortstop</option>
                                <option value="leftfield">Left Field</option>
                                <option value="centerfield">Center Field</option>
                                <option value="rightfield">Right Field</option>
                                <option value="nosecondary">No Secondary</option>
                            </Control.select>
                            <Errors
                                className="text-danger"
                                model=".secondary"
                                show="touched"
                                messages={{
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
                                    Next
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

export default About;