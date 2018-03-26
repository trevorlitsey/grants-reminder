import React from 'react';
import { shallow } from 'enzyme';

import AddPurposeForm from './AddPurposeForm';

describe('AddPurposeForm', () => {
	it('should render without crashing', () => {
		const wrapper = shallowRenderAddPurposeForm();
		expect(wrapper).toMatchSnapshot();
	})

	it('should update state change on input change', () => {
		const e = {
			target: {
				value: 'what a great new purpose',
			}
		}
		const wrapper = shallowRenderAddPurposeForm();
		const instance = wrapper.instance()
		instance.handleChange(e)
		expect(instance.state.newPurpose).toEqual(e.target.value)
	})

	it('should update state with input value', () => {
		const newPurpose = 'what a great new purpose'
		const wrapper = shallowRenderAddPurposeForm();
		wrapper.setState({ newPurpose })
		const newPurposeInput = wrapper.find('[data-test="new-purpose"]')
		expect(newPurposeInput.getElement().props.value).toEqual(newPurpose)
	})

	it('should should update state on change', () => {
		const instance = shallowRenderAddPurposeForm().instance();

		const newPurpose = 'wow! a new purpose'
		const event = {
			target: {
				value: newPurpose,
			}
		}

		// reflect change
		instance.handleChange(event)
		expect(instance.state.newPurpose).toEqual(newPurpose);

	})

	it('should clear form on sunbmit', () => {
		const instance = shallowRenderAddPurposeForm().instance();

		const event = {
			preventDefault: () => { },
		}

		// reset
		instance.handleSubmit(event);
		expect(instance.state.newPurpose).toEqual('');
	})

})

function shallowRenderAddPurposeForm(props = {}) {
	const propsToUser = {
		addNewPurpose: () => { },
		...props
	}
	return shallow(<AddPurposeForm {...propsToUser} />)
}