import React from 'react';
import { shallow } from 'enzyme';

import UpdateEmailForm from './UpdateEmailForm';

// setError(alertMsg) {
// 	this.setState({ alertMsg });
// 	setTimeout(() => {
// 		this.setState({ alertMsg: '' });
// 	}, 3000);
// }

// handleSubmit(e) {


describe('UpdateEmailForm', () => {

	it('should render without crashing', () => {
		const wrapper = shallowRenderUpdateEmailForm();
		expect(wrapper).toMatchSnapshot();
	})

	it('should handle input change and update state', () => {
		const instance = shallowRenderUpdateEmailForm().instance();
		const newEmail = 'new@verynew.com'
		const event = makeOnChangeEvent('email', newEmail)
		instance.handleChange(event);
		expect(instance.state.newEmail).toEqual(newEmail);
	})

	it('should throw an error if email is invalid', () => {
		const event = {
			preventDefault: () => { },
		}
		const instance = shallowRenderUpdateEmailForm().instance();
		const newEmail = 'soooonew.com'
		instance.setState({ newEmail })
		instance.handleSubmit(event);
		expect(instance.state.alertMsg).toEqual(`hmm that doesn't look like a valid email`);
	})

	it('display SUCCESS if email is valid', () => {
		const event = {
			preventDefault: () => { },
		}
		const instance = shallowRenderUpdateEmailForm().instance();
		const newEmail = 'soooonew@gmail.com'
		instance.setState({ newEmail })
		instance.handleSubmit(event);
		expect(instance.state.alertMsg).toEqual(`success!`);
	})

})

function shallowRenderUpdateEmailForm(props = {}) {
	const propsToUser = {
		email: 'test@test.com',
		updateEmail: () => { },
		...props,
	}
	return shallow(<UpdateEmailForm {...propsToUser} />)
}

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