import React from 'react';
import { shallow } from 'enzyme';

import PurposeOptions from './PurposeOptions';

describe('PurposeOptions', () => {

	it('should render without crashing', () => {
		const wrapper = shallowRenderPurposeOptions();
		expect(wrapper).toMatchSnapshot();
	})

	it('should render correct number of purpose options from props', () => {
		const purposes = {
			one: 'education',
			two: 'capital campaign',
		}
		const wrapper = shallowRenderPurposeOptions({ purposes });
		expect(wrapper.find('[data-test="purpose-option"]').length).toEqual(Object.keys(purposes).length);
	})

})

function shallowRenderPurposeOptions(props = {}) {
	const propsToUser = {
		purposes: {
			one: 'education',
			two: 'capital campaign',
			three: 'development',
		},
		selected: 'development',
		handleChange: () => { },
		...props,
	}
	return shallow(<PurposeOptions {...propsToUser} />)
}