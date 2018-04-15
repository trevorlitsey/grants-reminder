import React from 'react';
import { shallow } from 'enzyme';

import Footer from './Footer';

it('Footer should render without crashing', () => {
	const wrapper = shallow(<Footer />)
	expect(wrapper).toMatchSnapshot();
})