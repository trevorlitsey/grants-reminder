import { bool, func } from 'prop-types';

const ReminderOptions = (props) => {

	const { twoMonths, oneMonth, twoWeeks, oneWeek, handleChange } = props;

	return (
		<div>
			<label htmlFor="Reminders">Set reminders for...</label>
			<div className="options">
				<label>
					<input type="checkbox" name="reminders" value="twoMonths" checked={twoMonths} onChange={handleChange} />
					<span className="label-body">Two Months</span>
				</label>
				<label>
					<input type="checkbox" name="reminders" value="oneMonth" checked={oneMonth} onChange={handleChange} />
					<span className="label-body">One Month</span>
				</label>
				<label>
					<input type="checkbox" name="reminders" value="twoWeeks" checked={twoWeeks} onChange={handleChange} />
					<span className="label-body">Two Weeks</span>
				</label>
				<label>
					<input type="checkbox" name="reminders" value="oneWeek" checked={oneWeek} onChange={handleChange} />
					<span className="label-body">One Week</span>
				</label>
			</div>

			<style jsx>{`

			.options {
				display: grid;
				grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
			}
		
			.options label {
				margin: 0;
			}

		`}</style>

		</div>
	)
}

ReminderOptions.propTypes = {
	twoMonths: bool.isRequired,
	oneMonth: bool.isRequired,
	twoWeeks: bool.isRequired,
	oneWeek: bool.isRequired,
	handleChange: func.isRequired,
}

export default ReminderOptions;