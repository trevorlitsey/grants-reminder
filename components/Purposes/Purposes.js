import { object, func } from 'prop-types';

import PurposeCard from './PurposeCard';
import AddPurposeForm from '../Forms/Purposes/AddPurposeForm';

const Purposes = (props) => {

	const { purposes, addNewPurpose, deletePurpose } = props;

	return (
		<div className="well">
			<div className="purposes">
				{purposes && Object.keys(purposes).map(key => <PurposeCard key={key} id={key} purpose={purposes[key]} deletePurpose={deletePurpose} />)}
				<AddPurposeForm addNewPurpose={addNewPurpose} />
			</div>
			<style jsx>{`

				.purposes {
					margin: 10px 0;
					display: flex;
					flex-wrap: wrap;
				}
			
			`}</style>
		</div>
	)
}

Purposes.propTypes = {
	purposes: object.isRequired,
	addNewPurpose: func.isRequired,
	deletePurpose: func.isRequired,
}

export default Purposes;