import React from 'react';
import { shallow } from 'enzyme';

import { basicGrant, twoMonths, oneMonth } from '../data/sampleGrants';

import Index from './index'

describe('Index', () => {

	it('should successfully update grant to edit', () => {
		const instance = shallowRenderIndex().instance();
		const grantId = '2iuhkjh';
		instance.updateGrantToEdit(grantId)
		expect(instance.state.grantToEdit).toEqual(grantId)
	})

	it('should successfully add new grant', () => {
		const instance = shallowRenderIndex().instance();
		const grants = { twoMonths, oneMonth }
		instance.setState({ grants })
		const newGrant = {
			...basicGrant,
			id: null
		}
		instance.addNewGrant(newGrant);
		// expect one more than before
		expect(Object.keys(instance.state.grants).length).toEqual(3);
	})

	it('should successfully update an existing grant', () => {
		const instance = shallowRenderIndex().instance();
		const grants = { twoMonths, oneMonth }
		instance.setState({ grants })
		const newGrantName = 'what a great new name';
		const updatedGrant = {
			...oneMonth,
			name: newGrantName,
		}
		const { id } = updatedGrant;
		instance.updateGrant(id, updatedGrant);
		expect(instance.state.grants[id].name).toEqual(newGrantName);
	})

	it('should successfully add a new purpose', () => {
		const instance = shallowRenderIndex().instance();

		const purposes = {
			one: 'wow!',
			two: 'check out this purpose!',
		}
		instance.setState({ purposes });

		const newPurpose = 'what a great new purpose';
		instance.addNewPurpose(newPurpose);

		expect(Object.keys(instance.state.purposes).length).toEqual(3);
	})

	it('should successfully delete a purpose', () => {
		const instance = shallowRenderIndex().instance();

		const purposes = {
			one: 'wow!',
			two: 'check out this purpose!',
		}
		instance.setState({ purposes });

		const id = 'one'
		instance.deletePurpose(id);

		// g'bye
		expect(instance.state.purposes[id]).toBeNull();
	})

	it('should successfully update users email', () => {
		const instance = shallowRenderIndex().instance();
		instance.setState({ email: 'test@test.com' });
		const newEmail = 'litseyt@me.com';
		instance.updateEmail(newEmail);
		expect(instance.state.email).toEqual(newEmail);
	})

})

function shallowRenderIndex() {
	return shallow(<Index />);
}
