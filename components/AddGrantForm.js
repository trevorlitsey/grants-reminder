import { object, func } from 'prop-types';
import moment from 'moment';

import handleGrantFormChange from './helpers/handleGrantFormChange';

import MonthOptions from './MonthOptions';
import DayOptions from './DayOptions';
import YearOptions from './YearOptions';
import PurposeOptions from './PurposeOptions';
import ReminderOptions from './ReminderOptions';
import FormAlert from './FormAlert';

import { blankGrant } from '../data/sampleGrants';

class AddGrantForm extends React.PureComponent {

	constructor() {
		super();

		this.handleGrantFormChange = handleGrantFormChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.displayAlert = this.displayAlert.bind(this);

		this.state = {
			grant: {
				...blankGrant,
			},
			alertMessage: '',
		}
	}

	displayAlert(alertMessage) {
		this.setState({ alertMessage });
		setTimeout(() => {
			this.setState({ alertMessage: '' });
		}, 4000)
	}

	handleSubmit(e) {
		e.preventDefault();

		const { date, name, purpose, notes, reminders } = { ...this.state.grant };

		if (!name) return this.displayAlert('name of grant is required');

		this.props.addNewGrant({
			date: date.valueOf(),
			name,
			purpose,
			notes,
			reminders
		});

		// reset
		this.setState({ grant: { ...blankGrant } });
	}

	render() {

		const { name, date, purpose, notes, reminders } = this.state.grant;

		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<h5>Add New Grant: </h5>
					<div className="row">
						<input
							className="u-full-width four columns"
							type="text"
							placeholder="Name of grant"
							name="name"
							value={name}
							onChange={this.handleGrantFormChange}
							required
						/>
						<MonthOptions
							selected={date.month()}
							handleChange={this.handleGrantFormChange}
						/>
						<DayOptions
							date={date}
							selected={date.date()}
							handleChange={this.handleGrantFormChange}
						/>
						<YearOptions
							selected={date.year()}
							handleChange={this.handleGrantFormChange}
						/>
						<PurposeOptions
							purposes={this.props.purposes}
							selected={purpose}
							handleChange={this.handleGrantFormChange}
						/>
					</div>
					<textarea
						className="u-full-width"
						placeholder="Notes ..."
						name="notes"
						value={notes}
						onChange={this.handleGrantFormChange}
					></textarea>
					<ReminderOptions
						{...reminders}
						handleChange={this.handleGrantFormChange}
					/>
					<input
						className="button-primary"
						type="submit"
						value="Submit"
						data-test="purpose"
					/>
					<FormAlert message={this.state.alertMessage} />
				</form>

				<style jsx>{`
					.row {
							margin: 12px 0;
					}
			
					.options {
						display: grid;
						grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
					}

					.options label {
						margin: 0;
					}

					.button-primary {
						margin-top: 8px; 
					}
				
			`}</style>

			</div>
		)
	}
}

AddGrantForm.propTypes = {
	purposes: object.isRequired,
	addNewGrant: func.isRequired,
}

export default AddGrantForm;