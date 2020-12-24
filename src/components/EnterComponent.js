import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

class Enter extends Component {
	render() {
		return(
			<div className="row vh-100">
				<div className="col-centered">
					<div className="mx-auto">
						<img src="/assets/images/logo.png" alt="Not found" />
						<br />
						<br />
						<Link className="mx-auto" to="/personal">
							<Button id="button" className="button" color="primary">
								Start
							</Button>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default Enter;