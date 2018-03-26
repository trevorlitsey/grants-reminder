import { string, func } from 'prop-types';
import validator from 'email-validator';

import FormAlert from './FormAlert';

class UpdateEmailForm extends React.PureComponent {

	constructor(props) {
		super(props);

		this.setError = this.setAlert.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

		this.state = {
			newEmail: '',
			alertMsg: '',
		}
	}

	setAlert(alertMsg) {
		this.setState({ alertMsg });
		setTimeout(() => {
			this.setState({ alertMsg: '' });
		}, 3000);
	}

	handleChange(e) {
		this.setState({
			newEmail: e.target.value,
		})
	}

	handleSubmit(e) {
		e.preventDefault();
		const { newEmail } = this.state;
		const emailIsValid = validator.validate(newEmail);
		if (!emailIsValid) {
			return this.setAlert(`hmm that doesn't look like a valid email`);
		} else {
			this.setAlert(`success!`);
			// update email
			return this.props.updateEmail(this.state.newEmail)
		}
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input
						type="text"
						name="newEmail"
						placeholder={`${this.props.email} ...`}
						value={this.state.newEmail}
						onChange={this.handleChange}
					/>
					<input className="submit" type="submit" value="Update Email" />
				</form>
				<FormAlert message={this.state.alertMsg} />

				<style jsx>{`

					form {
						margin-top: 20px;
						margin-bottom: 0;
						display: flex;
					}
					
					input {
						margin: 0 2px;
					}
					
					.submit {
						padding: 0 10px;
					}
					
				`}</style>
			</div>
		)
	}
}

UpdateEmailForm.propTypes = {
	email: string.isRequired,
	updateEmail: func.isRequired,
}


export default UpdateEmailForm;