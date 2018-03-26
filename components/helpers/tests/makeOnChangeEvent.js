function makeOnChangeEvent(name, value) {
	const event = {
		preventDefault: () => { },
		target: {
			name,
			value,
		}
	}
	return event;
}

export default makeOnChangeEvent;