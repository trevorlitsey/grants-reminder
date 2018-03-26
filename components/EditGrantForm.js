import { shape, string, number, bool, func, object } from 'prop-types';
import moment from 'moment';

import handleGrantFormChange from './helpers/handleGrantFormChange';

import MonthOptions from './MonthOptions';
import DayOptions from './DayOptions';
import YearOptions from './YearOptions';
import PurposeOptions from './PurposeOptions';
import ReminderOptions from './ReminderOptions';
import FormAlert from './FormAlert';

class EditGrantForm extends React.PureComponent {

	constructor(props) {
		super(props);

		this.handleGrantFormChange = handleGrantFormChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.deleteGrant = this.deleteGrant.bind(this);

		const { grant } = this.props;

		this.state = {
			grant: {
				...grant,
				date: moment(grant.date),
			},
			alertMsg: '',
		}
	}

	handleSubmit(e) {
		e.preventDefault();
		const grant = {
			...this.state.grant,
			date: this.state.grant.date.valueOf(),
		}

		if (!grant.name) return this.setState({ alertMsg: 'please provide a grant name' })
		this.props.updateGrant(grant.id, grant)
		this.props.updateGrantToEdit('');
	}

	deleteGrant(e) {
		e.preventDefault();
		const { id } = this.state.grant;
		this.props.updateGrant(id, null)
		this.props.updateGrantToEdit('');
	}

	render() {

		const { purposes, updateGrantToEdit } = this.props;
		const { grant, alertMsg } = this.state;

		return (
			<tr>
				<td colSpan="5">
					<form onSubmit={this.handleSubmit}>
						<div className="top-row">
							<h5>Edit: </h5>
							<p className="close" onClick={() => updateGrantToEdit('')}>x close</p>
						</div>
						<div className="row">
							<MonthOptions
								selected={moment(grant.date).month()}
								handleChange={this.handleGrantFormChange}
							/>
							<DayOptions
								date={grant.date}
								selected={moment(grant.date).date()}
								handleChange={this.handleGrantFormChange}
							/>
							<YearOptions
								selected={moment(grant.date).year()}
								handleChange={this.handleGrantFormChange}
							/>
							<input
								className="u-full-width four columns"
								type="text"
								placeholder="Name of grant"
								name="name"
								value={grant.name}
								onChange={this.handleGrantFormChange}
								data-test="name" />
							<PurposeOptions
								purposes={purposes}
								selected={grant.purpose}
								handleChange={this.handleGrantFormChange}
							/>
						</div>
						<textarea
							className="u-full-width"
							placeholder="Notes ..."
							name="notes"
							value={grant.notes}
							onChange={this.handleGrantFormChange}
							data-test="notes"
						></textarea>
						<ReminderOptions {...grant.reminders} handleChange={this.handleGrantFormChange} />
						<div className="buttons">
							<button className="button" type="submit">Update</button>
							<button className="button button--delete" onClick={this.deleteGrant}>Delete</button>
						</div>
						<FormAlert message={alertMsg} />
					</form>

					<style jsx>{`

						form {
							background: HSLA(208, 100%, 50%, .1);
							border-radius: 6px;
							padding: 10px;
						}

						.row {
							margin: 10px 0;
						}

						.top-row {
							display: flex;
							justify-content: space-between;
						}

						.close:hover {
							cursor: pointer;
						}

						.buttons {
							margin-top: 8px;
							display: flex;
							justify-content: space-between;
						}
						
						button.button--delete {
							background: HSLA(0, 100%, 69%, 0.1);
						}
				
					`}</style>
				</td>
			</tr>
		)
	}
}

EditGrantForm.propTypes = {
	grant: shape({
		id: string.isRequired,
		date: number.isRequired,
		name: string.isRequired,
		notes: string.isRequired,
		purpose: string.isRequired,
		reminders: shape({
			twoMonths: bool.isRequired,
			oneMonth: bool.isRequired,
			twoWeeks: bool.isRequired,
			oneWeek: bool.isRequired,
		}),
	}),
	updateGrant: func.isRequired,
	updateGrantToEdit: func.isRequired,
	purposes: object.isRequired,
}

export default EditGrantForm;