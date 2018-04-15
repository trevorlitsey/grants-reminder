import React from 'react';
import { shallow } from 'enzyme';

import Nav from './Nav';

const user = {
	uid: 1234567,
	email: 'email@provider.com',
}

describe('nav', () => {

	it('should render without crashing', () => {
		const wrapperSignedOut = renderShallowNav();
		expect(wrapperSignedOut).toMatchSnapshot();
	})

	it('should say SIGN OUT when user is logged in', () => {
		const wrapperSignedIn = renderShallowNav({ user });
		const signOutButton = wrapperSignedIn.find('[data-test="sign-out"]').exists();
		expect(signOutButton).toBeTruthy();
	})

	it('should NOT say sign out when user is logged in', () => {
		const wrapperSignedIn = renderShallowNav();
		const signOutButton = wrapperSignedIn.find('[data-test="sign-out"]').exists();
		expect(signOutButton).toBeFalsy();
	})

})

function renderShallowNav(props = {}) {
	const propsToUser = {
		user: null,
		...props,
	}
	return shallow(<Nav {...propsToUser} />)
}