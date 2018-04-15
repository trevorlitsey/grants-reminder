import { func } from 'prop-types';

class AddPurposeForm extends React.PureComponent {

	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

		this.state = {
			newPurpose: '',
		}
	}

	handleChange = (e) => {
		this.setState({ newPurpose: e.target.value })
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const { newPurpose } = this.state;
		if (newPurpose) this.props.addNewPurpose(newPurpose);
		this.setState({ newPurpose: '' })
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input
						data-test="new-purpose"
						type="text"
						name="purpose"
						placeholder="New purpose ..."
						value={this.state.newPurpose}
						onChange={this.handleChange}
					/>
					<input
						className="submit"
						type="submit"
						value="submit"
					/>
				</form>

				<style jsx>{`
					
					form {
						margin-top: 8px;
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

AddPurposeForm.propTypes = {
	addNewPurpose: func.isRequired,
}

export default AddPurposeForm;