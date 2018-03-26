import { object, number, func } from 'prop-types';

const DayOptions = (props) => {

	const { date, selected, handleChange } = props;

	// calc number of days
	const numberOfDays = date && date.daysInMonth() || 31;
	const days = [];
	for (let i = 1; i <= numberOfDays; i++) {
		days.push(i);
	}

	return (
		<select className="u-full-width two columns" name="date" value={selected} onChange={handleChange}>
			{days.map(day => <option key={day} value={day} data-test="day">{day}</option>)}
		</select>
	)
}

DayOptions.propTypes = {
	date: object,
	selected: number || string,
	handleChange: func.isRequired,
}

export default DayOptions;