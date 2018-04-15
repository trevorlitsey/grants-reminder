import React from 'react';
import { shallow } from 'enzyme';

import FormAlert from './FormAlert';

describe('FormAlert', () => {

	it('should render without crashing', () => {
		const wrapper = shallowRenderFormAlert();
		expect(wrapper).toMatchSnapshot();
	})

	it('should render the message given', () => {
		const message = 'good lord what a message!';
		const wrapper = shallowRenderFormAlert({ message });
		expect(wrapper.find('p').text()).toEqual(message);
	})

})

function shallowRenderFormAlert(props = {}) {
	const propsToUser = {
		message: 'what a message!',
		...props,
	}
	return shallow(<FormAlert {...propsToUser} />)
}

function sel(id) {
	return `[data-test="${id}"]`
}