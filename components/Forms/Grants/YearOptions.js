import moment from 'moment';
import { string, number, func } from 'prop-types';

const YearOptions = (props) => {

	const { year, selected, handleChange } = props

	const years = getYears(year);

	return (
		<select className="u-full-width two columns" name="year" value={selected} onChange={handleChange}>
			{years.map(year =>
				<option value={year} key={year} data-test="year">{year}</option>
			)}
		</select>
	)
}

YearOptions.propTypes = {
	year: number,
	selected: number.isRequired,
	handleChange: func.isRequired,
}

export default YearOptions;


// --------------------
function getYears(thisYear = Number(moment().format('YYYY'))) {
	return [
		thisYear,
		thisYear + 1,
		thisYear + 2,
		thisYear + 3,
		thisYear + 4,
	]
}