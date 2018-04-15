import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import { blankGrant, basicGrant } from '../../../data/sampleGrants';

import AddGrantForm from './AddGrantForm';

const fakeEvent = {
	preventDefault: () => { },
}

const expectedSubmittedGrant = {
	name: basicGrant.name,
	purpose: basicGrant.purpose,
	notes: basicGrant.notes,
	reminders: basicGrant.reminders,
	date: basicGrant.date.valueOf(),
}

describe('AddGrantForm', () => {

	it('should render without crashing', () => {
		const wrapper = shallowrenderAddGrantForm();
		const grant = {
			...basicGrant,
			date: moment('2018-03-23')
		}
		wrapper.setState({ grant });
		expect(wrapper).toMatchSnapshot();
	})

	it('should call addNewGrant on submit', () => {
		const grant = {
			...basicGrant,
			date: moment(basicGrant.date),
		}
		const instance = shallowrenderAddGrantForm().instance();
		instance.setState({ grant })
		instance.handleSubmit(fakeEvent)
		expect(instance.props.addNewGrant.mock.calls.length).toBe(1);
		expect(instance.props.addNewGrant.mock.calls[0][0]).toEqual(expectedSubmittedGrant);
	})

	it('should reset state on successful submit', () => {
		const grantState = {
			...basicGrant,
			date: moment(basicGrant.date),
		}
		const instance = shallowrenderAddGrantForm().instance();
		instance.setState({ grant: grantState })
		instance.handleSubmit(fakeEvent)
		expect(instance.state.grant).toEqual(blankGrant);
	})

	it('should display an alert if no grant name provided', () => {
		const e = {
			preventDefault: () => { },
		}
		const instance = shallowrenderAddGrantForm().instance();
		instance.handleSubmit(fakeEvent);
		expect(instance.state.alertMessage).toEqual('name of grant is required');
	})

})

function shallowrenderAddGrantForm(props = {}) {
	const propsToUser = {
		purposes: {
			one: 'General Operations',
			two: 'Education',
			three: 'Special Projects',
		},
		addNewGrant: jest.fn(),
		...props
	}
	return shallow(<AddGrantForm {...propsToUser} />)
}