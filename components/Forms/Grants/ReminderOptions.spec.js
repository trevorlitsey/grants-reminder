import React from 'react';
import { shallow } from 'enzyme';

import ReminderOptions from './ReminderOptions';

describe('ReminderOptions', () => {

	it('should render without crashing', () => {
		const wrapper = shallowRenderReminderOptions();
		expect(wrapper).toMatchSnapshot();
	})

})

function shallowRenderReminderOptions(props = {}) {
	const propsToUser = {
		twoMonths: true,
		oneMonth: false,
		twoWeeks: true,
		oneWeek: false,
		handleChange: () => { },
	}
	return shallow(<ReminderOptions {...propsToUser} />)
}
