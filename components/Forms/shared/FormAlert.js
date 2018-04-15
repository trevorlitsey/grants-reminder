import { string } from 'prop-types';

const FormAlert = (props) => {

	const { message } = props;

	return (
		<div>
			<p>{message}</p>
			<style jsx>{`
		
		p {
			margin: 2px 3px;
			line-height: 1;
			color: HSLA(0, 100%, 69%, 1);
			text-decoration: underline;
			transition: all 2s;
		}

		`}</style>
		</div>
	)
}

FormAlert.propTypes = {
	message: string.isRequired,
}

export default FormAlert;