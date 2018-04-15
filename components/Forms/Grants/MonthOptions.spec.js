import React from 'react';
import { shallow } from 'enzyme';

import MonthOptions from './MonthOptions';

describe('MonthOptions', () => {

	it('should render without crashing', () => {
		const wrapper = shallowRenderMonthOptions();
		expect(wrapper).toMatchSnapshot();
	})

})

function shallowRenderMonthOptions(props = {}) {
	const propsToUser = {
		selected: 10,
		handleChange: () => { },
	}
	return shallow(<MonthOptions {...propsToUser} />)
}