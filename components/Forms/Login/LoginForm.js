import { signIn } from '../../../base';

const LoginForm = () => (
	<div>
		<h4>Let's Organize Some Grants</h4>
		<button className="button" onClick={signIn}>Log In With Google</button>

		<style jsx>{`
		
		div {
			display: flex;
			flex-direction: column;
			align-items: center;
			margin: 50px auto;
			padding: 50px 0;
			border: 2px solid HSLA(200, 6%, 93%, 1);
			border-radius: 8px;
			max-width: 400px;
		}
		
		h2 {
			text-align: center;
		}
		
		button {
			margin-top: 20px;
		}
		
		`}</style>
	</div>
)

// no props

export default LoginForm;