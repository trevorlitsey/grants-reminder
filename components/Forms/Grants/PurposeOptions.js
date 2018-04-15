import { object, string, func } from 'prop-types';

const PurposeOptions = (props) => {

	const { purposes, selected, handleChange } = props;

	return (
		<select className="u-full-width two columns" name="purpose" value={selected} onChange={handleChange}>
			<option>Purpose</option>
			{Object.keys(purposes).map(key => {
				const purpose = purposes[key];
				return <option key={key} value={purpose} data-test="purpose-option">{purpose}</option>
			})}
		</select>
	)
}

PurposeOptions.propTypes = {
	purposes: object.isRequired,
	selected: string,
	handleChange: func.isRequired,
}

export default PurposeOptions;