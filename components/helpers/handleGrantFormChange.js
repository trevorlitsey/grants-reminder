function handleGrantFormChange(e) {

	const { name, value } = e.target;

	const updatedGrant = {
		...this.state.grant,
	}

	if (name === 'reminders') {
		updatedGrant.reminders[value] = !updatedGrant.reminders[value];
	} else if (['year', 'month', 'date'].indexOf(name) > -1) {
		updatedGrant.date.set({ [name]: value })
	} else {
		updatedGrant[name] = value;
	}

	this.setState({ grant: updatedGrant });
}

export default handleGrantFormChange;