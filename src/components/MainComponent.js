import React, { Component } from 'react';
import Menu from './MenuComponent';
import About from './AboutComponent';
import Enter from './EnterComponent';
import Throwing from './ThrowingComponent';
import Fielding from './FieldingComponent';
import Hitting from './HittingComponent';
import Results from './ResultsComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { postComment, postDish, fetchDishes, fetchComments, fetchPromos, fetchLeaders, postFeedback } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';

const mapStateToProps = state => {
	return {
		dishes: state.dishes,
		comments: state.comments,
		promotions: state.promotions,
		leaders: state.leaders
	}	
}

const mapDispatchToProps = (dispatch) => ({
	postComment: (category, rating, author, comment) => dispatch(postComment(category, rating, author, comment)),
	postDish: (dishId, rating, author, comment) => dispatch(postDish(dishId, rating, author, comment)),
	fetchDishes: () => {dispatch(fetchDishes())},
	resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
	fetchComments: () => {dispatch(fetchComments())},
	fetchPromos: () => {dispatch(fetchPromos())},
	fetchLeaders: () => {dispatch(fetchLeaders())},
	postFeedback: (firstname, lastname, telnum, email, agree, contactType, message) => dispatch(postFeedback(firstname, lastname, telnum, email, agree, contactType, message))
});

class Main extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.fetchDishes();
		this.props.fetchComments();
		this.props.fetchPromos();
		this.props.fetchLeaders();
	}

	render() {

		const AboutPage = () => {
			return(
				<About postFeedback={this.props.postFeedback} />
			);
		}

		return (
	    <div>
	    	<Switch>
	    		<Route path="/enter" component={() => <Enter />} />
	    		<Route exact path="/personal" component={AboutPage} />
	    		<Route exact path="/menu" component={() => <Menu />} />
	    		<Route exact path="/throwing" component={() => <Throwing postComment={this.props.postComment}/>} />
	    		<Route exact path="/fielding" component={() => <Fielding postComment={this.props.postComment}/>} />
	    		<Route exact path="/hitting" component={() => <Hitting postComment={this.props.postComment}/>} />
	    		<Route exact path="/results" component={() => <Results hitting={this.props.comments.comments.filter((comments) => comments.category === "Hitting")}
	    																fielding={this.props.comments.comments.filter((comments) => comments.category === "Fielding")}
	    																throwing={this.props.comments.comments.filter((comments) => comments.category === "Throwing")}
	    																dishes={this.props.dishes.dishes}/>} />
	    		<Redirect to="/enter" />
	    	</Switch>
	    </div>
  	);
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
