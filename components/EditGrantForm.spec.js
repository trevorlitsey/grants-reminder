import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import { basicGrant } from '../data/sampleGrants';

import makeOnChangeEvent from './helpers/tests/makeOnChangeEvent';

import EditGrantForm from './EditGrantForm';

describe('EditGrantForm', () => {

	it('should render without crashing', () => {
		const wrapper = shallowRenderEditGrantForm();
		expect(wrapper).toMatchSnapshot();
	})

	it('should render grant name and notes from props', () => {
		const notes = 'these are some great notes!';
		const name = 'a very prestigious name';
		const grant = {
			...basicGrant,
			name,
			notes,
		}
		const wrapper = shallowRenderEditGrantForm({ grant });

		// name
		const nameInput = wrapper.find('[data-test="name"]');
		expect(nameInput.getElement().props.value).toBe(name);

		// notes
		const notesInput = wrapper.find('[data-test="notes"]');
		expect(notesInput.getElement().props.value).toBe(notes);
	})

	it('should handle submit')

})

function shallowRenderEditGrantForm(props = {}) {
	const propsToUser = {
		grant: basicGrant,
		updateGrant: () => { },
		updateGrantToEdit: () => { },
		purposes: {
			one: 'General Operations',
			two: 'Education',
			three: 'Special Projects',
		},
		...props,
	}
	return shallow(<EditGrantForm {...propsToUser} />)
}