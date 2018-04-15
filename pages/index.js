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
			db: {
				grants: {},
				purposes: {},
				email: '',
			},
			grantToEdit: '',
			changesPending: false,
			user: {},
		}
	}

	componentWillMount = () => {
		auth.onAuthStateChanged(async (user) => {
			this.setState({ user });
			if (!user) return;

			// sync db
			this.grantsRef = base.syncState(`/${user.uid}/`
				, {
					context: this,
					state: 'db'
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

	addNewGrant = (grant, id = uniqid()) => {				
		const db = { ...this.state.db };
		db.grants[id] = {
			...grant,
			id,
		}
		this.setState({ db });
	}

	updateGrantToEdit = (key) =>
		this.setState({ grantToEdit: key });

	updateGrant = (id, grant) => {
		const db = { ...this.state.db };
		db.grants[id] = grant;
		this.setState({ db })
	}

	addNewPurpose = (newPurpose, id = uniqid()) => {
		const db = {...this.state.db};
		db.purposes[id] = newPurpose;
		this.setState({ db });
	}

	deletePurpose = (key) => {
		const db = { ...this.state.db };
		db.purposes[key] = null
		this.setState({ db })
	}

	updateEmail = (newEmail) => {
		const db = { ...this.state.db }
		db.email = newEmail;
		this.setState({ db });
	}

	render() {
		
		if (!this.state.user) {
			return (
				<Layout>
					<LoginForm login={this.login} />
				</Layout>
			)
		}

		const { db, user, grantToEdit, changesPending } = this.state;
		const { grants, purposes, email } = db;

		return (
			<Layout user={user}>
				<GrantsTable
					grants={grants}
					grantToEdit={grantToEdit}
					updateGrantToEdit={this.updateGrantToEdit}
					updateGrant={this.updateGrant}
					changesPending={changesPending}
					purposes={purposes}
				/>
				<AddGrantForm
					purposes={purposes}
					addNewGrant={this.addNewGrant}
				/>
				<Purposes
					purposes={purposes}
					addNewPurpose={this.addNewPurpose}
					deletePurpose={this.deletePurpose}
				/>
				<UpdateEmailForm email={email} updateEmail={this.updateEmail} />
			</Layout>
		)
	}
}

export default Index;
