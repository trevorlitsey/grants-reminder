import React from 'react'
import { shallow } from 'enzyme'

import Purposes from './Purposes'
import PurposeCard from './PurposeCard';

describe('purposes', () => {

	it('should render without crashing', () => {
		const wrapper = shallowRenderPurposes();
		expect(wrapper).toMatchSnapshot();
	})

	it('should render all of users purposes', () => {

		const purposes = {
			one: 'General Operations',
			two: 'Education',
		}

		const wrapper = shallowRenderPurposes({ purposes });
		expect(wrapper.find(PurposeCard).length).toBe(Object.keys(purposes).length);
	})

})

function shallowRenderPurposes(props = {}) {
	const propsToUser = {
		purposes: {
			one: 'General Operations',
			two: 'Education',
			three: 'Special Event',
		},
		addNewPurpose: () => { },
		deletePurpose: () => { },
		...props,
	}
	return shallow(<Purposes {...propsToUser} />)
}