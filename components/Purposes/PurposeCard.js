import { string, func } from 'prop-types';

const PurposeCard = (props) => {

	const { id, purpose, deletePurpose } = props;

	return (
		<div>
			<p>{purpose}</p>
			<p className="x" onClick={() => deletePurpose(id)}>x</p>

			<style jsx>{`
		
			div {
				border-radius: 5px;
				display: flex;
				background: HSLA(206, 100%, 50%, 0.1);
				margin-right: 5px;
				margin-top: 5px;
			}

			p {
				margin: 10px;
				padding-bottom: 0;
				white-space: nowrap;
			}

			.x {
				padding-left: 5px;
				cursor: pointer;
			}

		`}</style>

		</div>
	)
}

PurposeCard.propTypes = {
	id: string.isRequired,
	purpose: string.isRequired,
	deletePurpose: func.isRequired,
}

export default PurposeCard;