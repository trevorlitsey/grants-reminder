import React from 'react';
import { shallow } from 'enzyme';

import PurposeCard from './PurposeCard';

describe('PurposeCard', () => {

	it('should render without crashing', () => {
		const wrapper = shallowRenderPurposeCard();
		expect(wrapper).toMatchSnapshot();
	})

})

function shallowRenderPurposeCard(props = {}) {
	const propsToUser = {
		id: '56yhs3',
		purpose: 'what a great purpose',
		deletePurpose: () => { },
		...props,
	}
	return shallow(<PurposeCard {...propsToUser} />)
}