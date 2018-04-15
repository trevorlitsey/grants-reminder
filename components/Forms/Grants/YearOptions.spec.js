import React from 'react';
import { shallow } from 'enzyme';

import YearOptions from './YearOptions';

describe('YearOptions', () => {

	it('should render without crashing', () => {
		const wrapper = shallowRenderYearOptions({ year: 2018 });
		expect(wrapper).toMatchSnapshot();
	})

	it('should render five years', () => {
		const wrapper = shallowRenderYearOptions();
		const years = wrapper.find('[data-test="year"]');
		expect(years.length).toEqual(5);
	})

})

function shallowRenderYearOptions(props = {}) {
	const propsToUser = {
		selected: 2018,
		handleChange: () => { },
		...props,
	}

	return shallow(<YearOptions {...propsToUser} />);

}