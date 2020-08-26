import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

class Enter extends Component {
	render() {
		return(
			<div className="row vh-100">
				<div className="col my-auto">
					<img src="/assets/images/logo.png" alt="Not found" />
					<br />
					<br />
					<Link to="/personal">
						<Button className="button" outline>
							Start
						</Button>
					</Link>
				</div>
			</div>
		);
	}
}

export default Enter;