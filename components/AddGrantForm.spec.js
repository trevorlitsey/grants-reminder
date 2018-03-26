import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import { blankGrant, basicGrant } from '../data/sampleGrants';

import makeOnChangeEvent from './helpers/tests/makeOnChangeEvent';

import AddGrantForm from './AddGrantForm';

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

	it('should reset state on successful submit', () => {
		const e = {
			preventDefault: () => { },
		}
		const grantState = {
			...basicGrant,
			date: moment(basicGrant.date),
		}
		const wrapper = shallowrenderAddGrantForm();
		const instance = wrapper.instance();
		instance.setState({ grant: grantState })
		instance.handleSubmit(e)
		expect(instance.state.grant).toEqual(blankGrant);
	})

	it('should display an alert if no grant name provided', () => {
		const e = {
			preventDefault: () => { },
		}
		const wrapper = shallowrenderAddGrantForm();
		const instance = wrapper.instance();
		instance.handleSubmit(e);
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
		addNewGrant: () => { },
		...props
	}
	return shallow(<AddGrantForm {...propsToUser} />)
}