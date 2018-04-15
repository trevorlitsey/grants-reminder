import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';

import DayOptions, { Option } from './DayOptions';

describe('DayOptions', () => {

	it('component should render without crashing', () => {
		const wrapper = shallowRenderDayOptions();
		expect(wrapper).toMatchSnapshot();
	})

	it('should display correct number of days for month/year selected', () => {
		const febWrapper = shallowRenderDayOptions({ date: moment('2018-02-23') });
		expect(febWrapper.find('[data-test="day"]').length).toEqual(28);

		const marchWrapper = shallowRenderDayOptions({ date: moment('2018-03-23') });
		expect(marchWrapper.find('[data-test="day"]').length).toEqual(31);
	})

})

function shallowRenderDayOptions(props = {}) {
	const propsToUser = {
		date: moment('2018-03-23'),
		selected: null,
		handleChange: () => { },
		...props
	}
	return shallow(<DayOptions {...propsToUser} />)
}