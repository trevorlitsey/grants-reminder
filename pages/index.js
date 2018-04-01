import uniqid from 'uniqid';
import firebase from 'firebase';
import { auth, base, provider, db } from '../base';

import Nav from '../components/Nav';
import Layout from '../components/Layout';
import LoginForm from '../components/LoginForm';
import GrantsTable from '../components/GrantsTable';
import AddGrantForm from '../components/AddGrantForm';
import Purposes from '../components/Purposes';
import UpdateEmailForm from '../components/UpdateEmailForm';

class Index extends React.PureComponent {

	constructor() {
		super();

		this.addNewGrant = this.addNewGrant.bind(this);
		this.updateGrantToEdit = this.updateGrantToEdit.bind(this);
		this.updateGrant = this.updateGrant.bind(this);
		this.addNewPurpose = this.addNewPurpose.bind(this);
		this.deletePurpose = this.deletePurpose.bind(this);
		this.updateEmail = this.updateEmail.bind(this);

		this.state = {
			grants: {},
			purposes: {},
			grantToEdit: '',
			changesPending: false,
			user: {},
			email: '',
		}
	}

	componentWillMount = () => {
		auth.onAuthStateChanged(async (user) => {
			this.setState({ user });
			if (!user) return;

			// sync grants
			this.grantsRef = base.syncState(`/${user.uid}/grants/`
				, {
					context: this,
					state: 'grants'
				});

			// sync purposes
			this.purposesRef = base.syncState(`/${user.uid}/purposes/`
				, {
					context: this,
					state: 'purposes'
				});

			// sync email
			this.emailRef = base.syncState(`/${user.uid}/email/`
				, {
					context: this,
					state: 'email'
				});

			const profileSnap = await db.ref(`/${user.uid}`).once('value');

			const { purposes, email, uid } = profileSnap.val();

			if (!purposes) {
				this.setState({
					purposes: {
						one: 'General Operations',
						two: 'Education',
						three: 'Special Projects',
					}
				});
			}

			if (!email) {
				db.ref(`/${user.uid}/email`).set(user.email);
			}

		});
	}

	componentWillUnmount = () => {
		base.removeBinding(this.grantsRef);
		base.removeBinding(this.pruposesRef);
		base.removeBinding(this.emailRef);
	}

	addNewGrant = (grant) => {
		const id = uniqid();
		grant.id = id;
		this.setState({
			grants: {
				...this.state.grants,
				[id]: grant,
			}
		})
	}

	updateGrantToEdit = (key) =>
		this.setState({ grantToEdit: key });

	updateGrant = (id, grant) => {
		const grants = { ...this.state.grants };
		grants[id] = grant;
		this.setState({ grants })
	}

	addNewPurpose = (newPurpose) => {
		const id = uniqid();
		const { purposes } = this.state;
		purposes[id] = newPurpose;
		this.setState({ purposes });
	}

	deletePurpose = (key) => {
		const purposes = { ...this.state.purposes };
		purposes[key] = null
		this.setState({ purposes })
	}

	updateEmail = (newEmail) => {
		this.setState({
			email: newEmail,
		});
	}

	render() {

		if (!this.state.user) {
			return (
				<Layout>
					<LoginForm login={this.login} />
				</Layout>
			)
		}

		return (
			<Layout user={this.state.user}>
				<GrantsTable
					grants={this.state.grants}
					grantToEdit={this.state.grantToEdit}
					updateGrantToEdit={this.updateGrantToEdit}
					updateGrant={this.updateGrant}
					changesPending={this.state.changesPending}
					purposes={this.state.purposes}
				/>
				<AddGrantForm
					purposes={this.state.purposes}
					addNewGrant={this.addNewGrant}
				/>
				<Purposes
					purposes={this.state.purposes}
					addNewPurpose={this.addNewPurpose}
					deletePurpose={this.deletePurpose}
				/>
				<UpdateEmailForm email={this.state.email} updateEmail={this.updateEmail} />
			</Layout>
		)
	}
}

export default Index;
