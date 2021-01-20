  
Front-End Frameworks, Languages and Libraries used: React.js, Redux, Reactstrap, D3.js, React Router DOM, React Redux Form, HTML5, CSS3, JavaScript

Back-End Languages and Technologies used: Node.js, Heroku, Yarn, JSON server

This application uses Redux Thunk, Fetch/Post and the REST API to send and retreive clients curated data with a JSON server. Both of the forms for player information and individual skill assessment implement the Form, Errors and Control classes of the React Redux Form library as well as unique validators to create controlled forms. This site also uses the Col and Row Reactstrap classes to optimize use of the application for mobile.

What is this?

Ev is an application to help baseball coaches accurately evaluate their players' skills. It uses the same 20-80 grading scale used by professional scouts, and displays overall averages and indivual skill grades on the breakdown page.

Start by entering the players information on the first page:

![Alt Text](https://github.com/Morganhtrotter/Ev/blob/master/public/assets/images/PlayerInfo.gif)

This is a controlled form, built using the React Redux Form library.

		<Control.text model=".firstname" id="firstname"
			name="firstname"
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

Once the players' information is entered, choose one of the three area's to evaluate. Enter numbers between 20 and 80 for each sub-category.

![Alt Text](https://github.com/Morganhtrotter/Ev/blob/master/public/assets/images/EnterNumbers.gif)

Repeat for all three areas (fielding, throwing and hitting).

Then view the results on the breakdown page.

![Alt Text](https://github.com/Morganhtrotter/Ev/blob/master/public/assets/images/Breakdown.gif)

As mentioned above, this project uses React/Redux to Post the players' data to a JSON server, and then subsequently Fetches that same data to be displayed on the breakdown page.

		<Route exact path="/throwing" component={() => <Throwing postComment={this.props.postComment}/>} />
		<Route exact path="/fielding" component={() => <Fielding postComment={this.props.postComment}/>} />
		<Route exact path="/hitting" component={() => <Hitting postComment={this.props.postComment}/>} />
		<Route exact path="/results" component={() => <Results hitting={this.props.comments.comments.filter((comments) => comments.category === "Hitting")}
									fielding={this.props.comments.comments.filter((comments) => comments.category === "Fielding")}
									throwing={this.props.comments.comments.filter((comments) => comments.category === "Throwing")}
									dishes={this.props.dishes.dishes}/>} />

		export const postComment = (category, rating, author, comment) => (dispatch) => {
			const newComment = {
				category: category,
				rating: rating,
				author: author,
				comment: comment
			}
			newComment.date = new Date().toISOString();

			return fetch(baseUrl + 'comments', {
				method: 'POST',
				body: JSON.stringify(newComment),
				headers: {
					'Content-Type': 'application/json'
				},
				credentials: 'same-origin'
			})
				.then(response => {
					if (response.ok) {
						return response;
					}
					else {
						var error = new Error('Error ' + response.status + ': ' + response.statusText);
						error.response = response;
						throw error;
					}
				},
				error => {
					var errmess = new Error(error.message);
					throw errmess;
				})
				.then(response => response.json())
				.then(response => dispatch(addComment(response)))
				.catch(error => { console.log('Post comments ', error.message);
					alert('Your comment could not be posted\nError: ' + error.message);});
		};
