What is this?

Ev is an application to help baseball coaches accurately evaluate their players' skills. It uses the same 20-80 grading scale used by professional scouts, and displays overall averages and indivual skill grades on the breakdown page.

Start by entering the players information on the first page:

![Alt Text](https://github.com/Morganhtrotter/Ev/blob/master/public/assets/images/PlayerInfo.gif)

This is a controlled form, built using the react-redux-form library.

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

This project uses react-redux to POST the players' data to a json-server, and then subsequently FETCHES that same data to be displayed on the breakdown page.

		export const postFeedback = (firstname, lastname, telnum, 
			email, age, primary, secondary) => (dispatch) => {
			const newFeedback = {
				firstname: firstname,
				lastname: lastname,
				telnum: telnum,
				email: email,
				age: age,
				primary: primary,
				secondary: secondary
			}
			newFeedback.date = new Date().toISOString();

			return fetch(baseUrl + 'feedback', {
				method: 'POST',
				body: JSON.stringify(newFeedback),
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
				.catch(error => { console.log('Post feedback ', error.message);
					alert('Your feedback could not be posted\nError: ' + error.message);});
		};