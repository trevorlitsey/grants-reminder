import React from 'react';
import { shallow } from 'enzyme';

import Layout from './Layout';

const user = {
	email: 'test@test.com',
	uid: '4567uyhhkjs879'
}

describe('Layout', () => {

	it('should render without crashing', () => {
		expect(shallow(<Layout user={user} />)).toMatchSnapshot();
	})

})